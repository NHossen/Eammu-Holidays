// app/sitemap.xml/route.js  (eammu.com)
// FIXES:
//  1. staticCount now exactly 83 — verified against build output
//  2. Uses createSlug() for slug counting — matches [id]/route.js exactly
//  3. processingCount & rejectionCount formulas updated to match
//     path-segment pattern (no ?type= query params)
//  4. RESTORED: visa-rejection dynamic routes (rejectionCount)
//  5. MERGED: visa-checker pairs + guides (previously on visa.eammu.com)
//     — country list sourced from api.eammu.com, same as the [id]/route.js chunk builder.

import { NextResponse }   from 'next/server';
import rawVisaData        from "@/app/data/countries.json";
import rawStudentData     from "@/app/data/studentvisadata.json";
import { createSlug }     from "@/app/lib/utils";
import { getCountries }   from "@/app/lib/sitemap-data";

// MERGED: visa-checker count must reflect api.eammu.com's country list,
// same source used in app/sitemap/[id]/route.js — NOT MongoDB getCountries().
const VISA_CHECKER_API_BASE = "https://api.eammu.com/api/v1";
const VISA_CHECKER_API_KEY  = process.env.NEXT_PUBLIC_EAMMU_API_KEY;

async function fetchVisaCheckerCountries() {
  try {
    const res = await fetch(
      `${VISA_CHECKER_API_BASE}/countries?api_key=${VISA_CHECKER_API_KEY}`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.countries || [];
  } catch (err) {
    console.error('[eammu-sitemap-index] api.eammu.com fetch error:', err.message);
    return [];
  }
}

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const BASE_URL  = "https://eammu.com";
const PAGE_SIZE = 45_000;

// FIX: Must exactly match [id]/route.js — path-based, no ?type= params
const PROCESSING_TYPES = ["sticker", "e-visa", "transit", "sticker-extended"]; // 4
const REJECTION_TYPES  = ["tourist", "student", "work", "transit", "business", "family"]; // 6
// MERGED from visa.eammu.com _shared.js — guide types shown per country pair
const GUIDE_SLUGS       = ["visa-required", "e-visa", "visa-on-arrival", "eta", "visa-free", "no-admission"]; // 6

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

// FIX: Now uses createSlug() — identical to [id]/route.js, so counts always match
function uniqueSlugCount(entries, ...keys) {
  const seen = new Set();
  for (const entry of entries) {
    for (const key of keys) {
      if (entry[key] && typeof entry[key] === "string") {
        const slug = createSlug(entry[key]);
        if (slug) { seen.add(slug); break; }
      }
    }
  }
  return seen.size;
}

async function getTotalRouteCount() {
  const visaData    = toArray(rawVisaData);
  const studentData = toArray(rawStudentData);

  const visaCount    = uniqueSlugCount(visaData,    "slug", "country", "name", "title", "destination");
  const studentCount = uniqueSlugCount(studentData, "slug", "country", "name", "title");

  const countries  = await getCountries();
  const mongoCount = countries.length;

  // api.eammu.com — used ONLY for visa-checker pair/guide counts
  const apiCountries       = await fetchVisaCheckerCountries();
  const visaCheckerSlugSet = new Set(
    apiCountries.map(c => createSlug(c.country)).filter(Boolean)
  );
  const visaCheckerCount = visaCheckerSlugSet.size;

  // FIX: staticCount = 83
  // Verified by counting static ○ routes in build output minus /_not-found and /robots.txt
  // = 84 total static ○ - 1 (/_not-found) = 83 sitemap-eligible static routes
  const staticCount         = 83;

  const studentVisaCount    = studentCount;
  const visaSlugCount       = visaCount;
  const visaGuideCount      = visaCount * (visaCount - 1);
  // Path-based: dest-nat-type (one URL per type, no query params)
  const processingCount     = visaCount * (visaCount - 1) * PROCESSING_TYPES.length;
  const eVisaCount          = mongoCount * (mongoCount - 1);
  const scholarshipCount    = mongoCount;
  const dubaiResidentCount  = mongoCount;
  const indiaVisaCount      = mongoCount;
  // Path-based: nat-dest-type (one URL per type, no query params)
  const rejectionCount      = mongoCount * (mongoCount - 1) * REJECTION_TYPES.length;
  // MERGED: visa-checker pairs (nat-dest) + guides (nat-dest-guideType) — api.eammu.com sourced
  const visaCheckerPairCount  = visaCheckerCount * (visaCheckerCount - 1);
  const visaCheckerGuideCount = visaCheckerCount * (visaCheckerCount - 1) * GUIDE_SLUGS.length;

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
    rejectionCount +
    visaCheckerPairCount +
    visaCheckerGuideCount;

  console.log(`[eammu-sitemap-index] Route breakdown:
    static:            ${staticCount}
    student-visa:      ${studentVisaCount}
    visa-slug:         ${visaSlugCount}
    visa-guide:        ${visaGuideCount}
    processing:        ${processingCount}
    e-visa:            ${eVisaCount}
    scholarships:      ${scholarshipCount}
    dubai-residents:   ${dubaiResidentCount}
    india-visa:        ${indiaVisaCount}
    rejection:         ${rejectionCount}
    visa-checker-pair: ${visaCheckerPairCount}
    visa-checker-guide:${visaCheckerGuideCount}
    TOTAL:             ${total}
    CHUNKS:            ${Math.ceil(total / PAGE_SIZE)}`);

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
        'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
      },
    });
  } catch (err) {
    console.error('[eammu-sitemap-index] Error:', err);
    return new NextResponse(`Error: ${err.message}`, { status: 500 });
  }
}