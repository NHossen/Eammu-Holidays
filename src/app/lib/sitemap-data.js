// app/lib/eammu-sitemap-data.js
import { MongoClient } from 'mongodb';
import { createSlug } from '@/app/lib/utils';

const uri = process.env.MONGODB_URI;

let _countries = null;

export async function getCountries() {
  if (_countries && _countries.length > 0) return _countries;

  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 10000,
    family: 4,
  });

  try {
    await client.connect();
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
      const key = c.country.toLowerCase().trim();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    console.log(`[eammu-sitemap] MongoDB: ${_countries.length} unique countries`);
    return _countries;
  } finally {
    await client.close();
  }
}