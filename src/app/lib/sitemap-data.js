// app/lib/sitemap-data.js
// FIX: Proper MongoDB connection pooling for Next.js serverless

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('MONGODB_URI environment variable is not defined');
}

// FIX: Use Next.js global cache pattern to reuse connection across hot reloads
// This is the official Next.js + MongoDB recommended pattern
let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // In dev, attach to global so connection survives HMR
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      maxPoolSize: 5,
      serverSelectionTimeoutMS: 8000,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      family: 4,
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create once per Lambda/serverless instance
  client = new MongoClient(uri, {
    maxPoolSize: 5,
    serverSelectionTimeoutMS: 8000,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4,
  });
  clientPromise = client.connect();
}

// FIX: In-memory cache that works within a process lifetime
let _countries = null;
let _cacheTime = null;
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

export async function getCountries() {
  const now = Date.now();

  // Return cached data if still fresh
  if (_countries && _cacheTime && (now - _cacheTime) < CACHE_TTL) {
    return _countries;
  }

  try {
    const client = await clientPromise;
    const db = client.db('Eammu-Holidays');

    const raw = await db
      .collection('countries')
      .find({})
      .project({ _id: 0, country: 1 })
      .sort({ country: 1 })
      .toArray();

    // Deduplicate
    const seen = new Set();
    _countries = raw.filter(c => {
      if (!c.country || typeof c.country !== 'string') return false;
      const key = c.country.toLowerCase().trim();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    _cacheTime = now;
    console.log(`[eammu-sitemap] MongoDB: ${_countries.length} unique countries loaded`);
    return _countries;

  } catch (err) {
    console.error('[eammu-sitemap] MongoDB error:', err.message);
    // FIX: Return stale cache on error rather than crashing
    if (_countries) {
      console.warn('[eammu-sitemap] Returning stale cache due to DB error');
      return _countries;
    }
    return [];
  }
}