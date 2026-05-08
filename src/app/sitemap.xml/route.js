// app/sitemap-index.xml/route.js  (eammu.com)
import { NextResponse } from 'next/server';
import rawVisaData from "@/app/data/countries.json";
import { getCountries } from "@/app/lib/sitemap-data";

export const dynamic = 'force-dynamic';

const BASE_URL  = "https://eammu.com";
const PAGE_SIZE = 45_000; // must match [id]/route.js

// Same route count logic as [id]/route.js
async function getTotalRouteCount() {
  const visaData  = Array.isArray(rawVisaData) ? rawVisaData : [];
  const visaCount = new Set(visaData.map(c => c.slug || c.country).filter(Boolean)).size;
  const countries = await getCountries();
  const mongoCount = countries.length;

  const staticCount     = 80;
  const studentCount    = visaCount;
  const visaSlugCount   = visaCount;
  const visaGuideCount  = visaCount * (visaCount - 1);
  const processingCount = visaCount * (visaCount - 1) * 4;
  const rejectionCount  = mongoCount * (mongoCount - 1) * 6;

  return staticCount + studentCount + visaSlugCount +
    visaGuideCount + processingCount + rejectionCount;
}

export async function GET() {
  try {
    const total      = await getTotalRouteCount();
    const chunkCount = Math.ceil(total / PAGE_SIZE);
    const now        = new Date().toISOString();

    console.log(`[eammu-sitemap-index] ~${total.toLocaleString()} URLs → ${chunkCount} chunks`);

    const sitemaps = Array.from({ length: chunkCount }, (_, i) =>
      `  <sitemap>
    <loc>${BASE_URL}/sitemap/${i}.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`
    ).join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps}
</sitemapindex>`;

    return new NextResponse(xml, {
      headers: {
        'Content-Type':  'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (err) {
    console.error('[eammu-sitemap-index] Error:', err);
    return new NextResponse(`Error: ${err.message}`, { status: 500 });
  }
}