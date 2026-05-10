// app/sitemap.xml/route.js  (eammu.com)
// FIX: Count now matches [id]/route.js exactly — all 10 route groups included

import { NextResponse } from 'next/server';
import rawVisaData    from "@/app/data/countries.json";
import rawStudentData from "@/app/data/studentvisadata.json";
import { getCountries } from "@/app/lib/sitemap-data";

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const BASE_URL  = "https://eammu.com";

// FIX: Must match [id]/route.js exactly
const PAGE_SIZE        = 45_000;
const PROCESSING_TYPES = ["sticker", "e-visa", "transit", "sticker-extended"]; // 4 types
const REJECTION_TYPES  = ["tourist", "student", "work", "transit", "business", "family"]; // 6 types

function toArray(json) {
  if (Array.isArray(json)) return json;
  if (json && typeof json === "object") {
    const COMMON = ["data", "countries", "visas", "items", "list", "results"];
    for (const k of COMMON) if (Array.isArray(json[k])) return json[k];
    const ak = Object.keys(json).find(k => Array.isArray(json[k]));
    if (ak) return json[ak];
    return Object.values(json);
  }
  return [];
}

function uniqueSlugCount(entries, ...keys) {
  const seen = new Set();
  for (const entry of entries) {
    for (const key of keys) {
      if (entry[key] && typeof entry[key] === "string") {
        const slug = entry[key].toLowerCase().trim().replace(/\s+/g, '-');
        if (slug) seen.add(slug);
        break;
      }
    }
  }
  return seen.size;
}

async function getTotalRouteCount() {
  // FIX: Use same JSON files as [id]/route.js
  const visaData    = toArray(rawVisaData);
  const studentData = toArray(rawStudentData);

  const visaCount    = uniqueSlugCount(visaData,    "slug", "country", "name", "title", "destination");
  const studentCount = uniqueSlugCount(studentData, "slug", "country", "name", "title");

  const countries  = await getCountries();
  const mongoCount = countries.length;

  // FIX: All 10 groups now counted — was missing e-visa, scholarships, dubai, india
  const staticCount         = 80;                                                   // static routes
  const studentVisaCount    = studentCount;                                         // /study-abroad/student-visa/[slug]
  const visaSlugCount       = visaCount;                                            // /visa/[slug]-visa
  const visaGuideCount      = visaCount * (visaCount - 1);                          // /visa/visa-guide/[dest]-for-[nat]
  const processingCount     = visaCount * (visaCount - 1) * PROCESSING_TYPES.length; // /travel-resources/... (4 types)
  const eVisaCount          = mongoCount * (mongoCount - 1);                        // /visa/e-visa/[nat]-for-[dest]
  const scholarshipCount    = mongoCount;                                            // /scholarships/[slug]
  const dubaiResidentCount  = mongoCount;                                            // /visa/dubai-residents/[slug]
  const indiaVisaCount      = mongoCount;                                            // /visa/india/[slug]
  const rejectionCount      = mongoCount * (mongoCount - 1) * REJECTION_TYPES.length; // /visa-rejection/... (6 types)

  const total =
    staticCount +
    studentVisaCount +
    visaSlugCount +
    visaGuideCount +
    processingCount +
    eVisaCount +
    scholarshipCount +
    dubaiResidentCount +
    indiaVisaCount +
    rejectionCount;

  console.log(`[eammu-sitemap-index] Route breakdown:
    static:          ${staticCount}
    student-visa:    ${studentVisaCount}
    visa-slug:       ${visaSlugCount}
    visa-guide:      ${visaGuideCount}
    processing:      ${processingCount}
    e-visa:          ${eVisaCount}
    scholarships:    ${scholarshipCount}
    dubai-residents: ${dubaiResidentCount}
    india-visa:      ${indiaVisaCount}
    rejection:       ${rejectionCount}
    TOTAL:           ${total}
    CHUNKS:          ${Math.ceil(total / PAGE_SIZE)}`);

  return total;
}

export async function GET() {
  try {
    const total      = await getTotalRouteCount();
    const chunkCount = Math.ceil(total / PAGE_SIZE);
    const now        = new Date().toISOString();

    const sitemaps = Array.from({ length: chunkCount }, (_, i) =>
      `  <sitemap>\n    <loc>${BASE_URL}/sitemap/${i}.xml</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`
    ).join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemaps}\n</sitemapindex>`;

    return new NextResponse(xml, {
      headers: {
        'Content-Type':  'application/xml; charset=utf-8',
        // FIX: Longer cache — Google only re-fetches the index occasionally
        'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
      },
    });
  } catch (err) {
    console.error('[eammu-sitemap-index] Error:', err);
    return new NextResponse(`Error: ${err.message}`, { status: 500 });
  }
}