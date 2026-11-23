// app/sitemap/[id]/route.js  (eammu.com)
// FIXES:
//  1. staticCount = 83, path-based processing/rejection routes (no ?type=)
//  2. BUILD_TIME per-call, in-process cache
//  3. Added /schengen-visa static route
//  4. RESTORED: visa-rejection dynamic routes
//  5. MERGED: visa-checker country-pair + guide-type pages, previously
//     served from visa.eammu.com (app/sitemap.js + app/sitemap/_shared.js +
//     generate-sitemap.mjs). Those files/folders are now OBSOLETE for this
//     domain — this single auto-chunking route replaces them.
//     Country list for visa-checker is fetched from api.eammu.com
//     (fetchVisaCheckerCountries), matching the original _shared.js source —
//     kept separate from the MongoDB getCountries() used by e-visa /
//     dubai-resident / india-visa / rejection routes.

import { NextResponse }   from 'next/server';
import rawVisaData        from "@/app/data/countries.json";
import rawStudentData     from "@/app/data/studentvisadata.json";
import { createSlug }     from "@/app/lib/utils";
import { getCountries }   from "@/app/lib/sitemap-data";

// MERGED: visa-checker country list MUST come from api.eammu.com (not MongoDB
// getCountries() directly) — matches the original visa.eammu.com _shared.js source.
const VISA_CHECKER_API_BASE = "https://api.eammu.com/api/v1";
const VISA_CHECKER_API_KEY  = process.env.NEXT_PUBLIC_EAMMU_API_KEY;

async function fetchVisaCheckerCountries() {
  try {
    const res = await fetch(
      `${VISA_CHECKER_API_BASE}/countries?api_key=${VISA_CHECKER_API_KEY}`,
      { next: { revalidate: 86400 } } // Vercel edge-cached 24h, same as original
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.countries || [];
  } catch (err) {
    console.error('[eammu-sitemap] api.eammu.com fetch error:', err.message);
    return [];
  }
}

export const URLS_PER_SHARD = 45_000;
export const dynamic        = 'force-dynamic';
export const runtime        = 'nodejs';
export const revalidate     = 86400;

// ── Constants ─────────────────────────────────────────────────────────────────
const BASE_URL         = "https://eammu.com";
const PAGE_SIZE        = 45_000;

const PROCESSING_TYPES = ["sticker", "e-visa", "transit", "sticker-extended"];
const REJECTION_TYPES  = ["tourist", "student", "work", "transit", "business", "family"];
// MERGED from visa.eammu.com _shared.js — same 6 guide types
const GUIDE_SLUGS      = ["visa-required", "e-visa", "visa-on-arrival", "eta", "visa-free", "no-admission"];

// ── Helpers ───────────────────────────────────────────────────────────────────
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

function uniqueSlugs(entries, ...keys) {
  const seen = new Set();
  const result = [];
  for (const entry of entries) {
    for (const key of keys) {
      if (entry[key] && typeof entry[key] === "string") {
        const slug = createSlug(entry[key]);
        if (slug && !seen.has(slug)) { seen.add(slug); result.push(slug); }
        break;
      }
    }
  }
  return result;
}

function fmt(path, priority, changeFreq, lastMod) {
  return {
    url: `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`,
    lastModified: lastMod,
    changeFrequency: changeFreq,
    priority,
  };
}

// ── XML Builder ───────────────────────────────────────────────────────────────
function buildXml(urls) {
  const entries = urls
    .map(({ url, lastModified, changeFrequency, priority }) =>
      `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastModified}</lastmod>\n    <changefreq>${changeFrequency}</changefreq>\n    <priority>${Number(priority).toFixed(1)}</priority>\n  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;
}

// ── In-process cache ──────────────────────────────────────────────────────────
let _cachedRoutes = null;
let _cacheBuiltAt = null;
const CACHE_TTL   = 60 * 60 * 1000; // 1 hour

async function getAllRoutes() {
  const now = Date.now();
  if (_cachedRoutes && _cacheBuiltAt && (now - _cacheBuiltAt) < CACHE_TTL) {
    return _cachedRoutes;
  }

  const BUILD_TIME = new Date().toISOString();

  // ── JSON data ──────────────────────────────────────────────────────────────
  const visaData     = toArray(rawVisaData);
  const studentData  = toArray(rawStudentData);
  const visaSlugs    = uniqueSlugs(visaData,    "slug", "country", "name", "title", "destination");
  const studentSlugs = uniqueSlugs(studentData, "slug", "country", "name", "title");

  // ── MongoDB data (used by e-visa / dubai-resident / india-visa / rejection) ─
  const countries  = await getCountries();
  const mongoSlugs = countries.map(c => createSlug(c.country)).filter(Boolean);

  // ── api.eammu.com data (used ONLY by visa-checker pair/guide routes) ───────
  const apiCountries = await fetchVisaCheckerCountries();
  const apiSlugsSeen = new Set();
  const visaCheckerSlugs = [];
  for (const c of apiCountries) {
    const slug = createSlug(c.country);
    if (slug && !apiSlugsSeen.has(slug)) {
      apiSlugsSeen.add(slug);
      visaCheckerSlugs.push(slug);
    }
  }

  
  // Count verified against build output: 83 static ○ pages (excluding /_not-found, /robots.txt)
  const staticRoutes = [
    fmt("/",                                                             1.0, "daily",   BUILD_TIME),
    fmt("/about",                                                        0.8, "monthly", BUILD_TIME),
    fmt("/contact",                                                      0.8, "monthly", BUILD_TIME),
    fmt("/careers",                                                      0.7, "monthly", BUILD_TIME),
    fmt("/testimonials",                                                 0.8, "weekly",  BUILD_TIME),
    fmt("/blogs",                                                        0.9, "weekly",  BUILD_TIME),
    fmt("/news-feeds",                                                   0.8, "daily",   BUILD_TIME),
    fmt("/offers",                                                       0.9, "weekly",  BUILD_TIME),
    fmt("/log-in",                                                       0.5, "yearly",  BUILD_TIME),
    fmt("/sign-up",                                                      0.5, "yearly",  BUILD_TIME),
    fmt("/terms-privacy-policy",                                         0.4, "yearly",  BUILD_TIME),
    fmt("/naeem-hossen",                                                 0.6, "monthly", BUILD_TIME),
    fmt("/our-leading-team",                                             0.6, "monthly", BUILD_TIME),
    fmt("/pdf-editor",                                                   0.5, "monthly", BUILD_TIME),
    fmt("/our-services",                                                 0.9, "weekly",  BUILD_TIME),
    fmt("/our-services/things-to-do",                                    0.7, "monthly", BUILD_TIME),
    fmt("/our-services/tour-packages",                                   0.8, "weekly",  BUILD_TIME),
    fmt("/our-services/visa-services",                                   0.9, "weekly",  BUILD_TIME),
    fmt("/our-services/visa-services/student-visa-from-bangladesh",      0.9, "monthly", BUILD_TIME),
    fmt("/our-services/visa-services/tourist-visa-from-bangladesh",      0.9, "monthly", BUILD_TIME),
    fmt("/our-services/visa-services/work-visa-from-bangladesh",         0.9, "monthly", BUILD_TIME),
    fmt("/our-services/visa/albania-visa-application",                   0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/armenia-visa-application",                   0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/australia-visa-application",                 0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/azerbaijan-visa-application",                0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/brazil-visa-application",                    0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/canada-visa-application",                    0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/china-visa-application",                     0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/cyprus-visa-application",                    0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/dubai-visa-application",                     0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/europe-visa-application",                    0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/georgia-visa-application",                   0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/germany-visa-application",                   0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/india-visa-application",                     0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/indonesia-visa-application",                 0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/japan-visa-application",                     0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/kosovo-visa-application",                    0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/malaysia-visa-application",                  0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/montenegro-visa-application",                0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/morocco-visa-application",                   0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/portugal-visa-application",                  0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/qatar-visa-application",                     0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/russia-visa-application",                    0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/saudi-arabia-visa-application",              0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/serbia-visa-application",                    0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/singapore-visa-application",                 0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/south-africa-visa-application",              0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/south-korea-visa-application",               0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/spain-visa-application",                     0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/srilanka-visa-application",                  0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/thailand-visa-application",                  0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/turkey-visa-application",                    0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/uk-visa-application",                        0.8, "monthly", BUILD_TIME),
    fmt("/our-services/visa/usa-visa-application",                       0.8, "monthly", BUILD_TIME),
    fmt("/study-abroad",                                                 0.95, "weekly",  BUILD_TIME),
    fmt("/study-abroad/student-visa",                                    0.9,  "weekly",  BUILD_TIME),
    fmt("/visa",                                                         0.95, "daily",   BUILD_TIME),
    fmt("/visa/visa-guide",                                              0.9,  "daily",   BUILD_TIME),
    fmt("/travel-resources",                                             0.8,  "weekly",  BUILD_TIME),
    fmt("/travel-resources/travel-document-generator",                   0.7,  "monthly", BUILD_TIME),
    fmt("/travel-resources/visa-checklist-generator",                    0.7,  "monthly", BUILD_TIME),
    fmt("/travel-resources/visa-processing-time-tracker",                0.8,  "weekly",  BUILD_TIME),
    fmt("/contact/travel-agency-armenia",                                0.7,  "monthly", BUILD_TIME),
    fmt("/contact/travel-agency-bangladesh",                             0.7,  "monthly", BUILD_TIME),
    fmt("/contact/travel-agency-dubai",                                  0.7,  "monthly", BUILD_TIME),
    fmt("/contact/travel-agency-georgia",                                0.7,  "monthly", BUILD_TIME),
    fmt("/online-travel-agency-bangladesh",                              0.8,  "monthly", BUILD_TIME),
    fmt("/eammu-dairy-poultry",                                          0.6,  "monthly", BUILD_TIME),
    fmt("/eammu-fashion",                                                0.6,  "monthly", BUILD_TIME),
    fmt("/eammu-fashion/eammu-store",                                    0.6,  "monthly", BUILD_TIME),
    fmt("/eammu-social-responsibility",                                  0.6,  "monthly", BUILD_TIME),
    fmt("/eammu-textile-bangladesh",                                     0.6,  "monthly", BUILD_TIME),
    fmt("/web-development-digital-marketing",                            0.7,  "monthly", BUILD_TIME),
    fmt("/flight-booking",                                               0.8,  "monthly", BUILD_TIME),
    fmt("/event-management",                                             0.7,  "monthly", BUILD_TIME),
    fmt("/target-ielts-immigration-center",                              0.8,  "monthly", BUILD_TIME),
    fmt("/target-usa-visa-interview-preparation",                        0.8,  "monthly", BUILD_TIME),
    fmt("/visa-rejection",                                               0.8,  "weekly",  BUILD_TIME),
    fmt("/visa/e-visa",                                                  0.8,  "weekly",  BUILD_TIME),
    fmt("/scholarships",                                                 0.8,  "weekly",  BUILD_TIME),
    fmt("/visa/dubai-residents",                                         0.8,  "weekly",  BUILD_TIME),
    fmt("/visa/india",                                                   0.8,  "weekly",  BUILD_TIME),
    fmt("/schengen-visa",                                                0.8,  "monthly", BUILD_TIME),
    fmt("/travel-agency-bangladesh",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/visa-checker",                                                 0.8,  "monthly", BUILD_TIME),
    fmt("/travel-insurance",                                             0.8,  "monthly", BUILD_TIME),
    fmt("/travel-cost-calculator",                                       0.8,  "monthly", BUILD_TIME),
    fmt("/travel-agency-delhi",                                          0.8,  "monthly", BUILD_TIME),
    fmt("/travel-agency-dhaka",                                          0.8,  "monthly", BUILD_TIME),
    fmt("/travel-agency-sharjah",                                        0.8,  "monthly", BUILD_TIME),
    fmt("/travel-agency-abu-dhabi",                                      0.8,  "monthly", BUILD_TIME),
    fmt("/appeal-process-for-visa",                                      0.8,  "monthly", BUILD_TIME),
    fmt("/bank-solvency-certificate-for-visa",                           0.8,  "monthly", BUILD_TIME),
    fmt("/bank-statement-for-visa",                                      0.8,  "monthly", BUILD_TIME),
    fmt("/bank-statement-for-visa-how-to-prepare",                       0.8,  "monthly", BUILD_TIME),
    fmt("/best-time-to-apply-schengen-visa",                             0.8,  "monthly", BUILD_TIME),
    fmt("/can-i-reapply-after-visa-rejection",                           0.8,  "monthly", BUILD_TIME),
    fmt("/common-reasons",                                               0.8,  "monthly", BUILD_TIME),
    fmt("/ds-160-form-guide",                                            0.8,  "monthly", BUILD_TIME),
    fmt("/embassy-appointment-tips",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/how-many-times-can-i-apply-for-visa",                          0.8,  "monthly", BUILD_TIME),
    fmt("/how-much-bank-balance-needed-for-visa",                        0.8,  "monthly", BUILD_TIME),
    fmt("/how-to-track-visa-application",                                0.8,  "monthly", BUILD_TIME),
    fmt("/marriage-certificate-for-visa",                                0.8,  "monthly", BUILD_TIME),
    fmt("/police-clearance-certificate",                                 0.8,  "monthly", BUILD_TIME),
    fmt("/sop-sample-for-student-visa",                                  0.8,  "monthly", BUILD_TIME),
    fmt("/sponsor-financial-documents-for-visa",                         0.8,  "monthly", BUILD_TIME),
    fmt("/sponsor-letter-sample-for-visa",                               0.8,  "monthly", BUILD_TIME),
    fmt("/spouse-visa-documents",                                        0.8,  "monthly", BUILD_TIME),
    fmt("/travel-itinerary-for-visa-how-to-make",                        0.8,  "monthly", BUILD_TIME),
    fmt("/vfs-global-appointment-guide",                                 0.8,  "monthly", BUILD_TIME),
    fmt("/visa-appointment-booking-guide",                               0.8,  "monthly", BUILD_TIME),
    fmt("/visa-interview-tips",                                          0.8,  "monthly", BUILD_TIME),
    fmt("/study/malaysia",                                                       0.85, "weekly",  BUILD_TIME),
fmt("/study/malaysia/study-in-malaysia-from-bangladesh",                   0.85, "monthly", BUILD_TIME),
fmt("/study/malaysia/study-in-malaysia-without-ielts",                     0.8,  "monthly", BUILD_TIME),
fmt("/study/malaysia/tuition-fees-in-malaysia-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/malaysia/cost-of-living-in-malaysia-for-bangladeshi-students", 0.8,  "monthly", BUILD_TIME),
fmt("/study/malaysia/cheapest-universities-in-malaysia",                   0.8,  "monthly", BUILD_TIME),
fmt("/study/malaysia/top-universities-in-malaysia",                        0.8,  "monthly", BUILD_TIME),
fmt("/study/malaysia/public-vs-private-universities-in-malaysia",          0.75, "monthly", BUILD_TIME),
fmt("/study/malaysia/scholarships-in-malaysia-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students", 0.8, "monthly", BUILD_TIME),
fmt("/study/malaysia/study-gap-accepted-universities-in-malaysia",         0.75, "monthly", BUILD_TIME),
fmt("/study/malaysia/study-in-malaysia-after-ssc",                         0.75, "monthly", BUILD_TIME),
fmt("/study/malaysia/study-in-malaysia-after-diploma",                     0.75, "monthly", BUILD_TIME),
fmt("/study/malaysia/malaysia-intake-dates",                               0.8,  "monthly", BUILD_TIME),
fmt("/study/malaysia/mbbs-in-malaysia-for-bangladeshi-students",           0.8,  "monthly", BUILD_TIME),
fmt("/study/malaysia/mba-in-malaysia-for-bangladeshi-students",            0.8,  "monthly", BUILD_TIME),
fmt("/study/malaysia/cse-and-it-courses-in-malaysia",                      0.8,  "monthly", BUILD_TIME),
fmt("/study/malaysia/credit-transfer-from-malaysia-to-uk-australia",       0.75, "monthly", BUILD_TIME),
fmt("/study/malaysia/student-accommodation-in-malaysia",                   0.75, "monthly", BUILD_TIME),
fmt("/study/malaysia/student-visa-requirements-bangladesh",                0.85, "monthly", BUILD_TIME),
fmt("/study/malaysia/emgs-visa-process-and-tracking-guide",                0.85, "monthly", BUILD_TIME),
fmt("/study/malaysia/bank-solvency-requirements-for-malaysia-student-visa", 0.8, "monthly", BUILD_TIME),
fmt("/study/malaysia/student-visa-processing-time-and-cost",               0.8,  "monthly", BUILD_TIME),
fmt("/study/malaysia/part-time-job-and-post-study-work-rules-in-malaysia", 0.8,  "monthly", BUILD_TIME),
fmt("/study/malaysia/bangladesh-offices",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/malaysia/consultancy-in-dhaka",                                0.8,  "monthly", BUILD_TIME),
fmt("/study/malaysia/consultancy-in-uttara-dhaka",                         0.75, "monthly", BUILD_TIME),
fmt("/study/malaysia/consultancy-in-dhanmondi-dhaka",                      0.75, "monthly", BUILD_TIME),
fmt("/study/malaysia/consultancy-in-mirpur-dhaka",                         0.75, "monthly", BUILD_TIME),
fmt("/study/malaysia/consultancy-in-chattogram",                           0.75, "monthly", BUILD_TIME),
fmt("/study/malaysia/consultancy-in-sylhet",                               0.75, "monthly", BUILD_TIME),
fmt("/study/malaysia/consultancy-in-rajshahi",                             0.75, "monthly", BUILD_TIME),
fmt("/study/malaysia/consultancy-in-khulna",                               0.75, "monthly", BUILD_TIME),
fmt("/study/malaysia/consultancy-in-barishal",                             0.75, "monthly", BUILD_TIME),
fmt("/study/malaysia/consultancy-in-rangpur",                              0.75, "monthly", BUILD_TIME),
fmt("/study/malaysia/consultancy-in-mymensingh",                           0.75, "monthly", BUILD_TIME),
fmt("/study/malaysia/consultancy-in-cumilla",                              0.75, "monthly", BUILD_TIME),
fmt("/study/malaysia/consultancy-in-bogura",                               0.75, "monthly", BUILD_TIME),
fmt("/study/south-korea",                                                       0.85, "weekly",  BUILD_TIME),
fmt("/study/south-korea/study-in-south-korea-from-bangladesh",                   0.85, "monthly", BUILD_TIME),
fmt("/study/south-korea/study-in-south-korea-without-ielts",                     0.8,  "monthly", BUILD_TIME),
fmt("/study/south-korea/tuition-fees-in-south-korea-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/south-korea/cost-of-living-in-south-korea-for-bangladeshi-students", 0.8,  "monthly", BUILD_TIME),
fmt("/study/south-korea/cheapest-universities-in-south-korea",                   0.8,  "monthly", BUILD_TIME),
fmt("/study/south-korea/top-universities-in-south-korea",                        0.8,  "monthly", BUILD_TIME),
fmt("/study/south-korea/public-vs-private-universities-in-south-korea",          0.75, "monthly", BUILD_TIME),
fmt("/study/south-korea/scholarships-in-south-korea-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/south-korea/admission-requirements-in-south-korea-for-bangladeshi-students", 0.8, "monthly", BUILD_TIME),
fmt("/study/south-korea/study-gap-accepted-universities-in-south-korea",         0.75, "monthly", BUILD_TIME),
fmt("/study/south-korea/study-in-south-korea-after-ssc",                         0.75, "monthly", BUILD_TIME),
fmt("/study/south-korea/study-in-south-korea-after-diploma",                     0.75, "monthly", BUILD_TIME),
fmt("/study/south-korea/south-korea-intake-dates",                               0.8,  "monthly", BUILD_TIME),
fmt("/study/south-korea/gks-scholarship-in-south-korea-for-bangladeshi-students", 0.8, "monthly", BUILD_TIME),
fmt("/study/south-korea/mba-in-south-korea-for-bangladeshi-students",            0.8,  "monthly", BUILD_TIME),
fmt("/study/south-korea/cse-and-it-courses-in-south-korea",                      0.8,  "monthly", BUILD_TIME),
fmt("/study/south-korea/korean-language-course-and-topik-guide",                 0.75, "monthly", BUILD_TIME),
fmt("/study/south-korea/student-accommodation-in-south-korea",                   0.75, "monthly", BUILD_TIME),
fmt("/study/south-korea/student-visa-requirements-bangladesh",                   0.85, "monthly", BUILD_TIME),
fmt("/study/south-korea/certificate-of-admission-and-visa-process-guide",        0.85, "monthly", BUILD_TIME),
fmt("/study/south-korea/bank-solvency-requirements-for-south-korea-student-visa", 0.8, "monthly", BUILD_TIME),
fmt("/study/south-korea/student-visa-processing-time-and-cost",                  0.8,  "monthly", BUILD_TIME),
fmt("/study/south-korea/part-time-job-and-post-study-work-rules-in-south-korea", 0.8,  "monthly", BUILD_TIME),
fmt("/study/south-korea/bangladesh-offices",                                     0.75, "monthly", BUILD_TIME),
fmt("/study/south-korea/consultancy-in-dhaka",                                   0.8,  "monthly", BUILD_TIME),
fmt("/study/south-korea/consultancy-in-uttara-dhaka",                            0.75, "monthly", BUILD_TIME),
fmt("/study/south-korea/consultancy-in-dhanmondi-dhaka",                         0.75, "monthly", BUILD_TIME),
fmt("/study/south-korea/consultancy-in-mirpur-dhaka",                            0.75, "monthly", BUILD_TIME),
fmt("/study/south-korea/consultancy-in-chattogram",                              0.75, "monthly", BUILD_TIME),
fmt("/study/south-korea/consultancy-in-sylhet",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/south-korea/consultancy-in-rajshahi",                                0.75, "monthly", BUILD_TIME),
fmt("/study/south-korea/consultancy-in-khulna",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/south-korea/consultancy-in-barishal",                                0.75, "monthly", BUILD_TIME),
fmt("/study/south-korea/consultancy-in-rangpur",                                 0.75, "monthly", BUILD_TIME),
fmt("/study/south-korea/consultancy-in-mymensingh",                              0.75, "monthly", BUILD_TIME),
fmt("/study/south-korea/consultancy-in-cumilla",                                 0.75, "monthly", BUILD_TIME),
fmt("/study/south-korea/consultancy-in-bogura",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/cyprus",                                                       0.85, "weekly",  BUILD_TIME),
fmt("/study/cyprus/study-in-cyprus-from-bangladesh",                   0.85, "monthly", BUILD_TIME),
fmt("/study/cyprus/study-in-cyprus-without-ielts",                     0.8,  "monthly", BUILD_TIME),
fmt("/study/cyprus/tuition-fees-in-cyprus-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/cyprus/cost-of-living-in-cyprus-for-bangladeshi-students", 0.8,  "monthly", BUILD_TIME),
fmt("/study/cyprus/cheapest-universities-in-cyprus",                   0.8,  "monthly", BUILD_TIME),
fmt("/study/cyprus/top-universities-in-cyprus",                        0.8,  "monthly", BUILD_TIME),
fmt("/study/cyprus/public-vs-private-universities-in-cyprus",          0.75, "monthly", BUILD_TIME),
fmt("/study/cyprus/scholarships-in-cyprus-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/cyprus/admission-requirements-in-cyprus-for-bangladeshi-students", 0.8, "monthly", BUILD_TIME),
fmt("/study/cyprus/study-gap-accepted-universities-in-cyprus",         0.75, "monthly", BUILD_TIME),
fmt("/study/cyprus/study-in-cyprus-after-ssc",                         0.75, "monthly", BUILD_TIME),
fmt("/study/cyprus/study-in-cyprus-after-diploma",                     0.75, "monthly", BUILD_TIME),
fmt("/study/cyprus/cyprus-intake-dates",                               0.8,  "monthly", BUILD_TIME),
fmt("/study/cyprus/north-cyprus-vs-republic-of-cyprus-for-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/cyprus/degree-recognition-and-accreditation-in-cyprus",    0.75, "monthly", BUILD_TIME),
fmt("/study/cyprus/mba-in-cyprus-for-bangladeshi-students",            0.8,  "monthly", BUILD_TIME),
fmt("/study/cyprus/cse-and-it-courses-in-cyprus",                      0.8,  "monthly", BUILD_TIME),
fmt("/study/cyprus/student-accommodation-in-cyprus",                   0.75, "monthly", BUILD_TIME),
fmt("/study/cyprus/student-visa-requirements-bangladesh",              0.85, "monthly", BUILD_TIME),
fmt("/study/cyprus/residence-permit-and-arrival-guide-cyprus",         0.85, "monthly", BUILD_TIME),
fmt("/study/cyprus/bank-solvency-requirements-for-cyprus-student-visa", 0.8, "monthly", BUILD_TIME),
fmt("/study/cyprus/student-visa-processing-time-and-cost",             0.8,  "monthly", BUILD_TIME),
fmt("/study/cyprus/part-time-job-and-post-study-work-rules-in-cyprus", 0.8,  "monthly", BUILD_TIME),
fmt("/study/cyprus/bangladesh-offices",                                0.75, "monthly", BUILD_TIME),
fmt("/study/cyprus/consultancy-in-dhaka",                              0.8,  "monthly", BUILD_TIME),
fmt("/study/cyprus/consultancy-in-uttara-dhaka",                       0.75, "monthly", BUILD_TIME),
fmt("/study/cyprus/consultancy-in-dhanmondi-dhaka",                    0.75, "monthly", BUILD_TIME),
fmt("/study/cyprus/consultancy-in-mirpur-dhaka",                       0.75, "monthly", BUILD_TIME),
fmt("/study/cyprus/consultancy-in-chattogram",                         0.75, "monthly", BUILD_TIME),
fmt("/study/cyprus/consultancy-in-sylhet",                             0.75, "monthly", BUILD_TIME),
fmt("/study/cyprus/consultancy-in-rajshahi",                           0.75, "monthly", BUILD_TIME),
fmt("/study/cyprus/consultancy-in-khulna",                             0.75, "monthly", BUILD_TIME),
fmt("/study/cyprus/consultancy-in-barishal",                           0.75, "monthly", BUILD_TIME),
fmt("/study/cyprus/consultancy-in-rangpur",                            0.75, "monthly", BUILD_TIME),
fmt("/study/cyprus/consultancy-in-mymensingh",                         0.75, "monthly", BUILD_TIME),
fmt("/study/cyprus/consultancy-in-cumilla",                            0.75, "monthly", BUILD_TIME),
fmt("/study/cyprus/consultancy-in-bogura",                             0.75, "monthly", BUILD_TIME),
fmt("/education-consultancy-bangladesh", 0.90, "monthly", BUILD_TIME),
fmt("/education-consultancy-dhaka", 0.90, "monthly", BUILD_TIME),
fmt("/education-consultancy-chattogram", 0.90, "monthly", BUILD_TIME),
fmt("/education-consultancy-cumilla", 0.90, "monthly", BUILD_TIME),
fmt("/education-consultancy-sylhet", 0.90, "monthly", BUILD_TIME),
fmt("/study/armenia",                                                       0.85, "weekly",  BUILD_TIME),
fmt("/study/armenia/study-in-armenia-from-bangladesh",                   0.85, "monthly", BUILD_TIME),
fmt("/study/armenia/study-in-armenia-without-ielts",                     0.8,  "monthly", BUILD_TIME),
fmt("/study/armenia/tuition-fees-in-armenia-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/armenia/cost-of-living-in-armenia-for-bangladeshi-students", 0.8,  "monthly", BUILD_TIME),
fmt("/study/armenia/cheapest-universities-in-armenia",                   0.8,  "monthly", BUILD_TIME),
fmt("/study/armenia/top-universities-in-armenia",                        0.8,  "monthly", BUILD_TIME),
fmt("/study/armenia/public-vs-private-universities-in-armenia",          0.75, "monthly", BUILD_TIME),
fmt("/study/armenia/scholarships-in-armenia-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/armenia/admission-requirements-in-armenia-for-bangladeshi-students", 0.8, "monthly", BUILD_TIME),
fmt("/study/armenia/study-gap-accepted-universities-in-armenia",         0.75, "monthly", BUILD_TIME),
fmt("/study/armenia/study-in-armenia-after-ssc",                         0.75, "monthly", BUILD_TIME),
fmt("/study/armenia/study-in-armenia-after-diploma",                     0.75, "monthly", BUILD_TIME),
fmt("/study/armenia/armenia-intake-dates",                               0.8,  "monthly", BUILD_TIME),
fmt("/study/armenia/mbbs-in-armenia-for-bangladeshi-students",           0.8,  "monthly", BUILD_TIME),
fmt("/study/armenia/medical-degree-recognition-and-bmdc-guide-armenia",  0.8,  "monthly", BUILD_TIME),
fmt("/study/armenia/mba-in-armenia-for-bangladeshi-students",            0.8,  "monthly", BUILD_TIME),
fmt("/study/armenia/cse-and-it-courses-in-armenia",                      0.8,  "monthly", BUILD_TIME),
fmt("/study/armenia/student-accommodation-in-armenia",                   0.75, "monthly", BUILD_TIME),
fmt("/study/armenia/student-visa-requirements-bangladesh",               0.85, "monthly", BUILD_TIME),
fmt("/study/armenia/temporary-residence-permit-and-arrival-guide-armenia", 0.85, "monthly", BUILD_TIME),
fmt("/study/armenia/bank-solvency-requirements-for-armenia-student-visa", 0.8, "monthly", BUILD_TIME),
fmt("/study/armenia/student-visa-processing-time-and-cost",              0.8,  "monthly", BUILD_TIME),
fmt("/study/armenia/part-time-job-and-post-study-work-rules-in-armenia", 0.8,  "monthly", BUILD_TIME),
fmt("/study/armenia/bangladesh-offices",                                 0.75, "monthly", BUILD_TIME),
fmt("/study/armenia/consultancy-in-dhaka",                               0.8,  "monthly", BUILD_TIME),
fmt("/study/armenia/consultancy-in-uttara-dhaka",                        0.75, "monthly", BUILD_TIME),
fmt("/study/armenia/consultancy-in-dhanmondi-dhaka",                     0.75, "monthly", BUILD_TIME),
fmt("/study/armenia/consultancy-in-mirpur-dhaka",                        0.75, "monthly", BUILD_TIME),
fmt("/study/armenia/consultancy-in-chattogram",                          0.75, "monthly", BUILD_TIME),
fmt("/study/armenia/consultancy-in-sylhet",                              0.75, "monthly", BUILD_TIME),
fmt("/study/armenia/consultancy-in-rajshahi",                            0.75, "monthly", BUILD_TIME),
fmt("/study/armenia/consultancy-in-khulna",                              0.75, "monthly", BUILD_TIME),
fmt("/study/armenia/consultancy-in-barishal",                            0.75, "monthly", BUILD_TIME),
fmt("/study/armenia/consultancy-in-rangpur",                             0.75, "monthly", BUILD_TIME),
fmt("/study/armenia/consultancy-in-mymensingh",                          0.75, "monthly", BUILD_TIME),
fmt("/study/armenia/consultancy-in-cumilla",                             0.75, "monthly", BUILD_TIME),
fmt("/study/armenia/consultancy-in-bogura",                              0.75, "monthly", BUILD_TIME),
fmt("/study/romania",                                                       0.85, "weekly",  BUILD_TIME),
fmt("/study/romania/study-in-romania-from-bangladesh",                   0.85, "monthly", BUILD_TIME),
fmt("/study/romania/study-in-romania-without-ielts",                     0.8,  "monthly", BUILD_TIME),
fmt("/study/romania/tuition-fees-in-romania-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/romania/cost-of-living-in-romania-for-bangladeshi-students", 0.8,  "monthly", BUILD_TIME),
fmt("/study/romania/cheapest-universities-in-romania",                   0.8,  "monthly", BUILD_TIME),
fmt("/study/romania/top-universities-in-romania",                        0.8,  "monthly", BUILD_TIME),
fmt("/study/romania/public-vs-private-universities-in-romania",          0.75, "monthly", BUILD_TIME),
fmt("/study/romania/scholarships-in-romania-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/romania/admission-requirements-in-romania-for-bangladeshi-students", 0.8, "monthly", BUILD_TIME),
fmt("/study/romania/study-gap-accepted-universities-in-romania",         0.75, "monthly", BUILD_TIME),
fmt("/study/romania/study-in-romania-after-ssc",                         0.75, "monthly", BUILD_TIME),
fmt("/study/romania/study-in-romania-after-diploma",                     0.75, "monthly", BUILD_TIME),
fmt("/study/romania/romania-intake-dates",                               0.8,  "monthly", BUILD_TIME),
fmt("/study/romania/mbbs-in-romania-for-bangladeshi-students",           0.8,  "monthly", BUILD_TIME),
fmt("/study/romania/medical-degree-recognition-and-bmdc-guide-romania",  0.8,  "monthly", BUILD_TIME),
fmt("/study/romania/romanian-language-preparatory-year-guide",           0.75, "monthly", BUILD_TIME),
fmt("/study/romania/cse-and-it-courses-in-romania",                      0.8,  "monthly", BUILD_TIME),
fmt("/study/romania/student-accommodation-in-romania",                   0.75, "monthly", BUILD_TIME),
fmt("/study/romania/student-visa-requirements-bangladesh",               0.85, "monthly", BUILD_TIME),
fmt("/study/romania/letter-of-acceptance-and-visa-process-guide",        0.85, "monthly", BUILD_TIME),
fmt("/study/romania/bank-solvency-requirements-for-romania-student-visa", 0.8, "monthly", BUILD_TIME),
fmt("/study/romania/student-visa-processing-time-and-cost",              0.8,  "monthly", BUILD_TIME),
fmt("/study/romania/part-time-job-and-post-study-work-rules-in-romania", 0.8,  "monthly", BUILD_TIME),
fmt("/study/romania/bangladesh-offices",                                 0.75, "monthly", BUILD_TIME),
fmt("/study/romania/consultancy-in-dhaka",                               0.8,  "monthly", BUILD_TIME),
fmt("/study/romania/consultancy-in-uttara-dhaka",                        0.75, "monthly", BUILD_TIME),
fmt("/study/romania/consultancy-in-dhanmondi-dhaka",                     0.75, "monthly", BUILD_TIME),
fmt("/study/romania/consultancy-in-mirpur-dhaka",                        0.75, "monthly", BUILD_TIME),
fmt("/study/romania/consultancy-in-chattogram",                          0.75, "monthly", BUILD_TIME),
fmt("/study/romania/consultancy-in-sylhet",                              0.75, "monthly", BUILD_TIME),
fmt("/study/romania/consultancy-in-rajshahi",                            0.75, "monthly", BUILD_TIME),
fmt("/study/romania/consultancy-in-khulna",                              0.75, "monthly", BUILD_TIME),
fmt("/study/romania/consultancy-in-barishal",                            0.75, "monthly", BUILD_TIME),
fmt("/study/romania/consultancy-in-rangpur",                             0.75, "monthly", BUILD_TIME),
fmt("/study/romania/consultancy-in-mymensingh",                          0.75, "monthly", BUILD_TIME),
fmt("/study/romania/consultancy-in-cumilla",                             0.75, "monthly", BUILD_TIME),
fmt("/study/romania/consultancy-in-bogura",                              0.75, "monthly", BUILD_TIME),
fmt("/study/russia",                                                       0.85, "weekly",  BUILD_TIME),
fmt("/study/russia/safety-and-scam-warning-for-students-in-russia",       0.85, "monthly", BUILD_TIME),
fmt("/study/russia/study-in-russia-from-bangladesh",                     0.85, "monthly", BUILD_TIME),
fmt("/study/russia/study-in-russia-without-ielts",                       0.8,  "monthly", BUILD_TIME),
fmt("/study/russia/tuition-fees-in-russia-for-bangladeshi-students",     0.8,  "monthly", BUILD_TIME),
fmt("/study/russia/cost-of-living-in-russia-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/russia/cheapest-universities-in-russia",                     0.8,  "monthly", BUILD_TIME),
fmt("/study/russia/top-universities-in-russia",                          0.8,  "monthly", BUILD_TIME),
fmt("/study/russia/scholarships-in-russia-for-bangladeshi-students",     0.8,  "monthly", BUILD_TIME),
fmt("/study/russia/admission-requirements-in-russia-for-bangladeshi-students", 0.8, "monthly", BUILD_TIME),
fmt("/study/russia/study-gap-accepted-universities-in-russia",           0.75, "monthly", BUILD_TIME),
fmt("/study/russia/study-in-russia-after-ssc",                           0.75, "monthly", BUILD_TIME),
fmt("/study/russia/study-in-russia-after-diploma",                       0.75, "monthly", BUILD_TIME),
fmt("/study/russia/russia-intake-dates",                                 0.8,  "monthly", BUILD_TIME),
fmt("/study/russia/mbbs-in-russia-for-bangladeshi-students",             0.8,  "monthly", BUILD_TIME),
fmt("/study/russia/medical-degree-recognition-and-bmdc-guide-russia",    0.8,  "monthly", BUILD_TIME),
fmt("/study/russia/russian-language-preparatory-year-guide",             0.75, "monthly", BUILD_TIME),
fmt("/study/russia/cse-and-it-courses-in-russia",                        0.8,  "monthly", BUILD_TIME),
fmt("/study/russia/student-accommodation-in-russia",                     0.75, "monthly", BUILD_TIME),
fmt("/study/russia/student-visa-requirements-bangladesh",                 0.85, "monthly", BUILD_TIME),
fmt("/study/russia/invitation-letter-and-visa-process-guide-russia",     0.85, "monthly", BUILD_TIME),
fmt("/study/russia/bank-solvency-requirements-for-russia-student-visa",   0.8,  "monthly", BUILD_TIME),
fmt("/study/russia/student-visa-processing-time-and-cost",                0.8,  "monthly", BUILD_TIME),
fmt("/study/russia/part-time-job-and-post-study-work-rules-in-russia",   0.8,  "monthly", BUILD_TIME),
fmt("/study/russia/bangladesh-offices",                                   0.75, "monthly", BUILD_TIME),
fmt("/study/russia/consultancy-in-dhaka",                                 0.8,  "monthly", BUILD_TIME),
fmt("/study/russia/consultancy-in-uttara-dhaka",                          0.75, "monthly", BUILD_TIME),
fmt("/study/russia/consultancy-in-dhanmondi-dhaka",                       0.75, "monthly", BUILD_TIME),
fmt("/study/russia/consultancy-in-mirpur-dhaka",                          0.75, "monthly", BUILD_TIME),
fmt("/study/russia/consultancy-in-chattogram",                            0.75, "monthly", BUILD_TIME),
fmt("/study/russia/consultancy-in-sylhet",                                0.75, "monthly", BUILD_TIME),
fmt("/study/russia/consultancy-in-rajshahi",                              0.75, "monthly", BUILD_TIME),
fmt("/study/russia/consultancy-in-khulna",                                0.75, "monthly", BUILD_TIME),
fmt("/study/russia/consultancy-in-barishal",                              0.75, "monthly", BUILD_TIME),
fmt("/study/russia/consultancy-in-rangpur",                               0.75, "monthly", BUILD_TIME),
fmt("/study/russia/consultancy-in-mymensingh",                            0.75, "monthly", BUILD_TIME),
fmt("/study/russia/consultancy-in-cumilla",                               0.75, "monthly", BUILD_TIME),
fmt("/study/russia/consultancy-in-bogura",                                0.75, "monthly", BUILD_TIME),
fmt("/study/canada",                                                       0.85, "weekly",  BUILD_TIME),
fmt("/study/canada/study-in-canada-from-bangladesh",                   0.85, "monthly", BUILD_TIME),
fmt("/study/canada/study-in-canada-without-ielts",                     0.8,  "monthly", BUILD_TIME),
fmt("/study/canada/tuition-fees-in-canada-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/canada/cost-of-living-in-canada-for-bangladeshi-students", 0.8,  "monthly", BUILD_TIME),
fmt("/study/canada/cheapest-universities-in-canada",                   0.8,  "monthly", BUILD_TIME),
fmt("/study/canada/top-universities-in-canada",                        0.8,  "monthly", BUILD_TIME),
fmt("/study/canada/public-vs-private-universities-in-canada",          0.75, "monthly", BUILD_TIME),
fmt("/study/canada/scholarships-in-canada-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/canada/admission-requirements-in-canada-for-bangladeshi-students", 0.8, "monthly", BUILD_TIME),
fmt("/study/canada/study-gap-accepted-universities-in-canada",         0.75, "monthly", BUILD_TIME),
fmt("/study/canada/study-in-canada-after-ssc",                         0.75, "monthly", BUILD_TIME),
fmt("/study/canada/study-in-canada-after-diploma",                     0.75, "monthly", BUILD_TIME),
fmt("/study/canada/canada-intake-dates",                               0.8,  "monthly", BUILD_TIME),
fmt("/study/canada/provincial-attestation-letter-pal-guide-for-canada", 0.85, "monthly", BUILD_TIME),
fmt("/study/canada/colleges-and-pgwp-eligible-programs-in-canada",     0.8,  "monthly", BUILD_TIME),
fmt("/study/canada/cse-and-it-courses-in-canada",                      0.8,  "monthly", BUILD_TIME),
fmt("/study/canada/mba-in-canada-for-bangladeshi-students",            0.8,  "monthly", BUILD_TIME),
fmt("/study/canada/student-accommodation-in-canada",                   0.75, "monthly", BUILD_TIME),
fmt("/study/canada/student-visa-requirements-bangladesh",              0.85, "monthly", BUILD_TIME),
fmt("/study/canada/study-permit-application-process-and-biometrics-guide", 0.85, "monthly", BUILD_TIME),
fmt("/study/canada/bank-solvency-requirements-for-canada-student-visa", 0.8, "monthly", BUILD_TIME),
fmt("/study/canada/student-visa-processing-time-and-cost",             0.8,  "monthly", BUILD_TIME),
fmt("/study/canada/part-time-job-and-post-study-work-rules-in-canada", 0.8,  "monthly", BUILD_TIME),
fmt("/study/canada/bangladesh-offices",                                0.75, "monthly", BUILD_TIME),
fmt("/study/canada/consultancy-in-dhaka",                              0.8,  "monthly", BUILD_TIME),
fmt("/study/canada/consultancy-in-uttara-dhaka",                       0.75, "monthly", BUILD_TIME),
fmt("/study/canada/consultancy-in-dhanmondi-dhaka",                    0.75, "monthly", BUILD_TIME),
fmt("/study/canada/consultancy-in-mirpur-dhaka",                       0.75, "monthly", BUILD_TIME),
fmt("/study/canada/consultancy-in-chattogram",                         0.75, "monthly", BUILD_TIME),
fmt("/study/canada/consultancy-in-sylhet",                             0.75, "monthly", BUILD_TIME),
fmt("/study/canada/consultancy-in-rajshahi",                           0.75, "monthly", BUILD_TIME),
fmt("/study/canada/consultancy-in-khulna",                             0.75, "monthly", BUILD_TIME),
fmt("/study/canada/consultancy-in-barishal",                           0.75, "monthly", BUILD_TIME),
fmt("/study/canada/consultancy-in-rangpur",                            0.75, "monthly", BUILD_TIME),
fmt("/study/canada/consultancy-in-mymensingh",                         0.75, "monthly", BUILD_TIME),
fmt("/study/canada/consultancy-in-cumilla",                            0.75, "monthly", BUILD_TIME),
fmt("/study/canada/consultancy-in-bogura",                             0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro",                                                       0.85, "weekly",  BUILD_TIME),
fmt("/study/montenegro/study-in-montenegro-from-bangladesh",                   0.85, "monthly", BUILD_TIME),
fmt("/study/montenegro/study-in-montenegro-without-ielts",                     0.8,  "monthly", BUILD_TIME),
fmt("/study/montenegro/tuition-fees-in-montenegro-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/montenegro/cost-of-living-in-montenegro-for-bangladeshi-students", 0.8,  "monthly", BUILD_TIME),
fmt("/study/montenegro/cheapest-universities-in-montenegro",                   0.8,  "monthly", BUILD_TIME),
fmt("/study/montenegro/top-universities-in-montenegro",                        0.8,  "monthly", BUILD_TIME),
fmt("/study/montenegro/public-vs-private-universities-in-montenegro",          0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro/scholarships-in-montenegro-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/montenegro/admission-requirements-in-montenegro-for-bangladeshi-students", 0.8, "monthly", BUILD_TIME),
fmt("/study/montenegro/study-gap-accepted-universities-in-montenegro",         0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro/study-in-montenegro-after-ssc",                         0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro/study-in-montenegro-after-diploma",                     0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro/montenegro-intake-dates",                               0.8,  "monthly", BUILD_TIME),
fmt("/study/montenegro/degree-recognition-and-accreditation-in-montenegro",    0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro/montenegrin-language-and-english-taught-programs-guide", 0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro/hospitality-tourism-and-business-degrees-in-montenegro", 0.8, "monthly", BUILD_TIME),
fmt("/study/montenegro/cse-and-it-courses-in-montenegro",                      0.8,  "monthly", BUILD_TIME),
fmt("/study/montenegro/student-accommodation-in-montenegro",                   0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro/student-visa-requirements-bangladesh",                   0.85, "monthly", BUILD_TIME),
fmt("/study/montenegro/temporary-residence-permit-and-arrival-guide-montenegro", 0.85, "monthly", BUILD_TIME),
fmt("/study/montenegro/bank-solvency-requirements-for-montenegro-student-visa", 0.8, "monthly", BUILD_TIME),
fmt("/study/montenegro/student-visa-processing-time-and-cost",                  0.8,  "monthly", BUILD_TIME),
fmt("/study/montenegro/part-time-job-and-post-study-work-rules-in-montenegro", 0.8,  "monthly", BUILD_TIME),
fmt("/study/montenegro/bangladesh-offices",                                     0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro/consultancy-in-dhaka",                                   0.8,  "monthly", BUILD_TIME),
fmt("/study/montenegro/consultancy-in-uttara-dhaka",                            0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro/consultancy-in-dhanmondi-dhaka",                         0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro/consultancy-in-mirpur-dhaka",                            0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro/consultancy-in-chattogram",                              0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro/consultancy-in-sylhet",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro/consultancy-in-rajshahi",                                0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro/consultancy-in-khulna",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro/consultancy-in-barishal",                                0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro/consultancy-in-rangpur",                                 0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro/consultancy-in-mymensingh",                              0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro/consultancy-in-cumilla",                                 0.75, "monthly", BUILD_TIME),
fmt("/study/montenegro/consultancy-in-bogura",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/finland",                                                                 0.85, "weekly",  BUILD_TIME),
fmt("/study/finland/study-in-finland-from-bangladesh",                             0.85, "monthly", BUILD_TIME),
fmt("/study/finland/study-in-finland-without-ielts",                               0.8,  "monthly", BUILD_TIME),
fmt("/study/finland/tuition-fees-in-finland-for-bangladeshi-students",             0.8,  "monthly", BUILD_TIME),
fmt("/study/finland/cost-of-living-in-finland-for-bangladeshi-students",           0.8,  "monthly", BUILD_TIME),
fmt("/study/finland/cheapest-universities-in-finland",                             0.8,  "monthly", BUILD_TIME),
fmt("/study/finland/top-universities-in-finland",                                  0.8,  "monthly", BUILD_TIME),
fmt("/study/finland/universities-vs-universities-of-applied-sciences-in-finland",  0.75, "monthly", BUILD_TIME),
fmt("/study/finland/scholarships-in-finland-for-bangladeshi-students",             0.8,  "monthly", BUILD_TIME),
fmt("/study/finland/admission-requirements-in-finland-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/finland/study-gap-accepted-universities-in-finland",                   0.75, "monthly", BUILD_TIME),
fmt("/study/finland/study-in-finland-after-ssc",                                   0.75, "monthly", BUILD_TIME),
fmt("/study/finland/study-in-finland-after-diploma",                               0.75, "monthly", BUILD_TIME),
fmt("/study/finland/finland-intake-dates",                                         0.8,  "monthly", BUILD_TIME),
fmt("/study/finland/studyinfo-joint-application-guide-for-finland",                0.85, "monthly", BUILD_TIME),
fmt("/study/finland/degree-recognition-and-eligibility-in-finland",                0.75, "monthly", BUILD_TIME),
fmt("/study/finland/cse-and-it-courses-in-finland",                                0.8,  "monthly", BUILD_TIME),
fmt("/study/finland/mba-in-finland-for-bangladeshi-students",                      0.8,  "monthly", BUILD_TIME),
fmt("/study/finland/student-accommodation-in-finland",                             0.75, "monthly", BUILD_TIME),
fmt("/study/finland/student-visa-requirements-bangladesh",                         0.85, "monthly", BUILD_TIME),
fmt("/study/finland/enter-finland-and-migri-application-guide",                    0.85, "monthly", BUILD_TIME),
fmt("/study/finland/bank-solvency-requirements-for-finland-student-visa",          0.8,  "monthly", BUILD_TIME),
fmt("/study/finland/student-visa-processing-time-and-cost",                        0.8,  "monthly", BUILD_TIME),
fmt("/study/finland/part-time-job-and-post-study-work-rules-in-finland",           0.8,  "monthly", BUILD_TIME),
fmt("/study/finland/bangladesh-offices",                                           0.75, "monthly", BUILD_TIME),
fmt("/study/finland/consultancy-in-dhaka",                                         0.8,  "monthly", BUILD_TIME),
fmt("/study/finland/consultancy-in-uttara-dhaka",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/finland/consultancy-in-dhanmondi-dhaka",                               0.75, "monthly", BUILD_TIME),
fmt("/study/finland/consultancy-in-mirpur-dhaka",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/finland/consultancy-in-chattogram",                                    0.75, "monthly", BUILD_TIME),
fmt("/study/finland/consultancy-in-sylhet",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/finland/consultancy-in-rajshahi",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/finland/consultancy-in-khulna",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/finland/consultancy-in-barishal",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/finland/consultancy-in-rangpur",                                       0.75, "monthly", BUILD_TIME),
fmt("/study/finland/consultancy-in-mymensingh",                                    0.75, "monthly", BUILD_TIME),
fmt("/study/finland/consultancy-in-cumilla",                                       0.75, "monthly", BUILD_TIME),
fmt("/study/finland/consultancy-in-bogura",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/china",                                                                 0.85, "weekly",  BUILD_TIME),
fmt("/study/china/study-in-china-from-bangladesh",                                 0.85, "monthly", BUILD_TIME),
fmt("/study/china/study-in-china-without-ielts",                                   0.8,  "monthly", BUILD_TIME),
fmt("/study/china/tuition-fees-in-china-for-bangladeshi-students",                 0.8,  "monthly", BUILD_TIME),
fmt("/study/china/cost-of-living-in-china-for-bangladeshi-students",               0.8,  "monthly", BUILD_TIME),
fmt("/study/china/cheapest-universities-in-china",                                 0.8,  "monthly", BUILD_TIME),
fmt("/study/china/top-universities-in-china",                                      0.8,  "monthly", BUILD_TIME),
fmt("/study/china/double-first-class-vs-regular-universities-in-china",            0.75, "monthly", BUILD_TIME),
fmt("/study/china/scholarships-in-china-for-bangladeshi-students",                 0.8,  "monthly", BUILD_TIME),
fmt("/study/china/csc-scholarship-step-by-step-guide",                             0.85, "monthly", BUILD_TIME),
fmt("/study/china/admission-requirements-in-china-for-bangladeshi-students",       0.8,  "monthly", BUILD_TIME),
fmt("/study/china/study-gap-accepted-universities-in-china",                       0.75, "monthly", BUILD_TIME),
fmt("/study/china/study-in-china-after-ssc",                                       0.75, "monthly", BUILD_TIME),
fmt("/study/china/study-in-china-after-diploma",                                   0.75, "monthly", BUILD_TIME),
fmt("/study/china/china-intake-dates",                                             0.8,  "monthly", BUILD_TIME),
fmt("/study/china/csca-and-application-guide-for-china",                           0.8,  "monthly", BUILD_TIME),
fmt("/study/china/degree-recognition-and-eligibility-in-china",                    0.75, "monthly", BUILD_TIME),
fmt("/study/china/cse-and-it-courses-in-china",                                    0.8,  "monthly", BUILD_TIME),
fmt("/study/china/mba-and-masters-in-china-for-bangladeshi-students",              0.8,  "monthly", BUILD_TIME),
fmt("/study/china/mbbs-in-china-for-bangladeshi-students",                         0.8,  "monthly", BUILD_TIME),
fmt("/study/china/hsk-chinese-language-and-preparatory-year-in-china",             0.75, "monthly", BUILD_TIME),
fmt("/study/china/student-accommodation-in-china",                                 0.75, "monthly", BUILD_TIME),
fmt("/study/china/halal-food-and-student-life-in-china-for-bangladeshis",          0.75, "monthly", BUILD_TIME),
fmt("/study/china/student-visa-requirements-bangladesh",                             0.85, "monthly", BUILD_TIME),
fmt("/study/china/x1-visa-and-residence-permit-guide-for-china",                   0.85, "monthly", BUILD_TIME),
fmt("/study/china/proof-of-funds-requirements-for-china-student-visa",             0.8,  "monthly", BUILD_TIME),
fmt("/study/china/student-visa-processing-time-and-cost",                            0.8,  "monthly", BUILD_TIME),
fmt("/study/china/part-time-job-and-post-study-work-rules-in-china",               0.8,  "monthly", BUILD_TIME),
fmt("/study/china/bangladesh-offices",                                               0.75, "monthly", BUILD_TIME),
fmt("/study/china/consultancy-in-dhaka",                                             0.8,  "monthly", BUILD_TIME),
fmt("/study/china/consultancy-in-uttara-dhaka",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/china/consultancy-in-dhanmondi-dhaka",                                   0.75, "monthly", BUILD_TIME),
fmt("/study/china/consultancy-in-mirpur-dhaka",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/china/consultancy-in-chattogram",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/china/consultancy-in-sylhet",                                            0.75, "monthly", BUILD_TIME),
fmt("/study/china/consultancy-in-rajshahi",                                          0.75, "monthly", BUILD_TIME),
fmt("/study/china/consultancy-in-khulna",                                            0.75, "monthly", BUILD_TIME),
fmt("/study/china/consultancy-in-barishal",                                          0.75, "monthly", BUILD_TIME),
fmt("/study/china/consultancy-in-rangpur",                                           0.75, "monthly", BUILD_TIME),
fmt("/study/china/consultancy-in-mymensingh",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/china/consultancy-in-cumilla",                                           0.75, "monthly", BUILD_TIME),
fmt("/study/china/consultancy-in-bogura",                                            0.75, "monthly", BUILD_TIME),
fmt("/study/lithuania",                                                                 0.85, "weekly",  BUILD_TIME),
fmt("/study/lithuania/study-in-lithuania-from-bangladesh",                             0.85, "monthly", BUILD_TIME),
fmt("/study/lithuania/study-in-lithuania-without-ielts",                               0.8,  "monthly", BUILD_TIME),
fmt("/study/lithuania/tuition-fees-in-lithuania-for-bangladeshi-students",             0.8,  "monthly", BUILD_TIME),
fmt("/study/lithuania/cost-of-living-in-lithuania-for-bangladeshi-students",           0.8,  "monthly", BUILD_TIME),
fmt("/study/lithuania/cheapest-universities-in-lithuania",                             0.8,  "monthly", BUILD_TIME),
fmt("/study/lithuania/top-universities-in-lithuania",                                  0.8,  "monthly", BUILD_TIME),
fmt("/study/lithuania/public-vs-private-universities-in-lithuania",                    0.75, "monthly", BUILD_TIME),
fmt("/study/lithuania/scholarships-in-lithuania-for-bangladeshi-students",             0.8,  "monthly", BUILD_TIME),
fmt("/study/lithuania/admission-requirements-in-lithuania-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/lithuania/study-gap-accepted-universities-in-lithuania",                   0.75, "monthly", BUILD_TIME),
fmt("/study/lithuania/study-in-lithuania-after-ssc",                                   0.75, "monthly", BUILD_TIME),
fmt("/study/lithuania/study-in-lithuania-after-diploma",                               0.75, "monthly", BUILD_TIME),
fmt("/study/lithuania/lithuania-intake-dates",                                         0.8,  "monthly", BUILD_TIME),
fmt("/study/lithuania/mbbs-and-medicine-in-lithuania-for-bangladeshi-students",        0.8,  "monthly", BUILD_TIME),
fmt("/study/lithuania/degree-recognition-and-accreditation-in-lithuania",              0.75, "monthly", BUILD_TIME),
fmt("/study/lithuania/cse-and-it-courses-in-lithuania",                                0.8,  "monthly", BUILD_TIME),
fmt("/study/lithuania/business-and-management-degrees-in-lithuania",                   0.8,  "monthly", BUILD_TIME),
fmt("/study/lithuania/student-accommodation-in-lithuania",                             0.75, "monthly", BUILD_TIME),
fmt("/study/lithuania/student-visa-requirements-bangladesh",                         0.85, "monthly", BUILD_TIME),
fmt("/study/lithuania/trp-application-process-migris-and-vfs-guide",                   0.85, "monthly", BUILD_TIME),
fmt("/study/lithuania/bank-solvency-requirements-for-lithuania-student-visa",          0.8,  "monthly", BUILD_TIME),
fmt("/study/lithuania/student-visa-processing-time-and-cost",                        0.8,  "monthly", BUILD_TIME),
fmt("/study/lithuania/part-time-job-and-post-study-work-rules-in-lithuania",           0.8,  "monthly", BUILD_TIME),
fmt("/study/lithuania/bangladesh-offices",                                           0.75, "monthly", BUILD_TIME),
fmt("/study/lithuania/consultancy-in-dhaka",                                         0.8,  "monthly", BUILD_TIME),
fmt("/study/lithuania/consultancy-in-uttara-dhaka",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/lithuania/consultancy-in-dhanmondi-dhaka",                               0.75, "monthly", BUILD_TIME),
fmt("/study/lithuania/consultancy-in-mirpur-dhaka",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/lithuania/consultancy-in-chattogram",                                    0.75, "monthly", BUILD_TIME),
fmt("/study/lithuania/consultancy-in-sylhet",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/lithuania/consultancy-in-rajshahi",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/lithuania/consultancy-in-khulna",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/lithuania/consultancy-in-barishal",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/lithuania/consultancy-in-rangpur",                                       0.75, "monthly", BUILD_TIME),
fmt("/study/lithuania/consultancy-in-mymensingh",                                    0.75, "monthly", BUILD_TIME),
fmt("/study/lithuania/consultancy-in-cumilla",                                       0.75, "monthly", BUILD_TIME),
fmt("/study/lithuania/consultancy-in-bogura",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/australia",                                                                 0.85, "weekly",  BUILD_TIME),
fmt("/study/australia/study-in-australia-from-bangladesh",                             0.85, "monthly", BUILD_TIME),
fmt("/study/australia/study-in-australia-without-ielts",                               0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/english-test-requirements-for-australia",                        0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/tuition-fees-in-australia-for-bangladeshi-students",             0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/cost-of-living-in-australia-for-bangladeshi-students",           0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/cheapest-universities-in-australia",                             0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/top-universities-in-australia",                                  0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/universities-vs-vet-and-private-colleges-in-australia",          0.75, "monthly", BUILD_TIME),
fmt("/study/australia/scholarships-in-australia-for-bangladeshi-students",             0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/admission-requirements-in-australia-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/study-gap-accepted-in-australia",                                0.75, "monthly", BUILD_TIME),
fmt("/study/australia/study-in-australia-after-ssc",                                   0.75, "monthly", BUILD_TIME),
fmt("/study/australia/study-in-australia-after-diploma",                               0.75, "monthly", BUILD_TIME),
fmt("/study/australia/australia-intake-dates",                                         0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/application-guide-for-australian-universities",                  0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/degree-recognition-and-eligibility-in-australia",                0.75, "monthly", BUILD_TIME),
fmt("/study/australia/it-and-cse-courses-in-australia",                                0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/mba-and-masters-in-australia-for-bangladeshi-students",          0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/nursing-and-health-courses-in-australia",                        0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/student-accommodation-in-australia",                             0.75, "monthly", BUILD_TIME),
fmt("/study/australia/oshc-health-cover-for-international-students",                   0.75, "monthly", BUILD_TIME),
fmt("/study/australia/regional-study-in-australia",                                    0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/student-life-halal-food-and-safety-in-australia",                0.75, "monthly", BUILD_TIME),
fmt("/study/australia/student-visa-requirements-bangladesh",                         0.85, "monthly", BUILD_TIME),
fmt("/study/australia/evidence-level-3-explained-for-bangladeshi-students",            0.85, "monthly", BUILD_TIME),
fmt("/study/australia/genuine-student-requirement-guide",                              0.85, "monthly", BUILD_TIME),
fmt("/study/australia/proof-of-funds-requirements-for-australia-student-visa",         0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/student-visa-processing-time-and-cost",                        0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/visa-refusal-reasons-and-how-to-avoid-them",                     0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/part-time-job-and-work-rules-in-australia",                      0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/temporary-graduate-visa-485-and-pr-pathways",                    0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/bangladesh-offices",                                           0.75, "monthly", BUILD_TIME),
fmt("/study/australia/consultancy-in-dhaka",                                         0.8,  "monthly", BUILD_TIME),
fmt("/study/australia/consultancy-in-uttara-dhaka",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/australia/consultancy-in-dhanmondi-dhaka",                               0.75, "monthly", BUILD_TIME),
fmt("/study/australia/consultancy-in-mirpur-dhaka",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/australia/consultancy-in-chattogram",                                    0.75, "monthly", BUILD_TIME),
fmt("/study/australia/consultancy-in-sylhet",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/australia/consultancy-in-rajshahi",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/australia/consultancy-in-khulna",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/australia/consultancy-in-barishal",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/australia/consultancy-in-rangpur",                                       0.75, "monthly", BUILD_TIME),
fmt("/study/australia/consultancy-in-mymensingh",                                    0.75, "monthly", BUILD_TIME),
fmt("/study/australia/consultancy-in-cumilla",                                       0.75, "monthly", BUILD_TIME),
fmt("/study/australia/consultancy-in-bogura",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/albania",                                                                 0.85, "weekly",  BUILD_TIME),
fmt("/study/albania/study-in-albania-from-bangladesh",                             0.85, "monthly", BUILD_TIME),
fmt("/study/albania/albania-reality-check-eu-and-schengen-myths",                  0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/why-study-in-albania-pros-and-cons",                           0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/study-in-albania-without-ielts",                               0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/english-and-albanian-language-requirements",                   0.75, "monthly", BUILD_TIME),
fmt("/study/albania/tuition-fees-in-albania-for-bangladeshi-students",             0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/cost-of-living-in-albania-for-bangladeshi-students",           0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/cheapest-universities-in-albania",                             0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/top-universities-in-albania",                                  0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/public-vs-private-universities-in-albania",                    0.75, "monthly", BUILD_TIME),
fmt("/study/albania/scholarships-in-albania-for-bangladeshi-students",             0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/admission-requirements-in-albania-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/study-gap-accepted-in-albania",                                0.75, "monthly", BUILD_TIME),
fmt("/study/albania/study-in-albania-after-ssc",                                   0.75, "monthly", BUILD_TIME),
fmt("/study/albania/study-in-albania-after-diploma",                               0.75, "monthly", BUILD_TIME),
fmt("/study/albania/albania-intake-dates",                                         0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/application-guide-for-albanian-universities",                  0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/degree-recognition-and-eligibility-in-albania",                0.75, "monthly", BUILD_TIME),
fmt("/study/albania/it-and-cse-courses-in-albania",                                0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/business-and-mba-in-albania",                                  0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/medicine-dentistry-and-pharmacy-in-albania",                   0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/engineering-and-architecture-in-albania",                      0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/nursing-and-health-courses-in-albania",                        0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/tourism-and-hospitality-in-albania",                           0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/foundation-year-and-albanian-language-courses",                0.75, "monthly", BUILD_TIME),
fmt("/study/albania/student-accommodation-in-albania",                             0.75, "monthly", BUILD_TIME),
fmt("/study/albania/health-insurance-for-students-in-albania",                     0.75, "monthly", BUILD_TIME),
fmt("/study/albania/student-life-halal-food-and-safety-in-albania",                0.75, "monthly", BUILD_TIME),
fmt("/study/albania/student-visa-requirements-bangladesh",                         0.85, "monthly", BUILD_TIME),
fmt("/study/albania/e-visa-application-step-by-step",                              0.85, "monthly", BUILD_TIME),
fmt("/study/albania/residence-permit-guide-for-students-in-albania",               0.85, "monthly", BUILD_TIME),
fmt("/study/albania/proof-of-funds-requirements-for-albania-student-visa",         0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/visa-processing-time-and-cost-albania",                        0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/visa-refusal-reasons-and-how-to-avoid-them",                     0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/part-time-job-and-work-rules-in-albania",                      0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/after-graduation-unique-permit-and-stay-options",              0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/scams-and-fake-offer-warning-albania",                         0.85, "monthly", BUILD_TIME),
fmt("/study/albania/bangladesh-offices",                                           0.75, "monthly", BUILD_TIME),
fmt("/study/albania/consultancy-in-dhaka",                                         0.8,  "monthly", BUILD_TIME),
fmt("/study/albania/consultancy-in-uttara-dhaka",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/albania/consultancy-in-dhanmondi-dhaka",                               0.75, "monthly", BUILD_TIME),
fmt("/study/albania/consultancy-in-mirpur-dhaka",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/albania/consultancy-in-chattogram",                                    0.75, "monthly", BUILD_TIME),
fmt("/study/albania/consultancy-in-sylhet",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/albania/consultancy-in-rajshahi",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/albania/consultancy-in-khulna",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/albania/consultancy-in-barishal",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/albania/consultancy-in-rangpur",                                       0.75, "monthly", BUILD_TIME),
fmt("/study/albania/consultancy-in-mymensingh",                                    0.75, "monthly", BUILD_TIME),
fmt("/study/albania/consultancy-in-cumilla",                                       0.75, "monthly", BUILD_TIME),
fmt("/study/albania/consultancy-in-bogura",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/hungary",                                                                 0.85, "weekly",  BUILD_TIME),
fmt("/study/hungary/study-in-hungary-from-bangladesh",                             0.85, "monthly", BUILD_TIME),
fmt("/study/hungary/study-in-hungary-without-ielts",                               0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students",             0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/cost-of-living-in-hungary-for-bangladeshi-students",           0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/cheapest-universities-in-hungary",                             0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/top-universities-in-hungary",                                  0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/public-vs-private-universities-in-hungary",                    0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/admission-requirements-in-hungary-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/study-gap-accepted-universities-in-hungary",                   0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/study-in-hungary-after-ssc",                                   0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/study-in-hungary-after-diploma",                               0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/hungary-intake-dates",                                         0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/hungary-vs-finland-vs-germany-for-bangladeshi-students",       0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/scholarships-in-hungary-for-bangladeshi-students",             0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/stipendium-hungaricum-scholarship-guide",                      0.85, "monthly", BUILD_TIME),
fmt("/study/hungary/stipendium-hungaricum-eligibility-and-deadlines",              0.85, "monthly", BUILD_TIME),
fmt("/study/hungary/how-to-apply-to-hungarian-universities",                       0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/degree-recognition-and-eligibility-in-hungary",                0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/bachelors-in-hungary-for-bangladeshi-students",                0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/masters-and-phd-in-hungary-for-bangladeshi-students",          0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/cse-and-it-courses-in-hungary",                                0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/engineering-courses-in-hungary",                               0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/mba-in-hungary-for-bangladeshi-students",                      0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/mbbs-and-medical-degrees-in-hungary",                          0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/foundation-year-and-preparatory-courses-in-hungary",           0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/sop-and-motivation-letter-for-hungary",                        0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/student-accommodation-in-hungary",                             0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/study-in-budapest",                                            0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/study-in-debrecen",                                            0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/study-in-szeged-pecs-and-other-cities",                        0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/health-insurance-for-students-in-hungary",                     0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/halal-food-and-bangladeshi-community-in-hungary",              0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/student-visa-requirements-bangladesh",                         0.85, "monthly", BUILD_TIME),
fmt("/study/hungary/hungary-student-visa-application-guide-bangladesh",            0.85, "monthly", BUILD_TIME),
fmt("/study/hungary/hungary-student-documents-checklist",                          0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/bank-solvency-requirements-for-hungary-student-visa",          0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/student-visa-processing-time-and-cost",                        0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/hungary-student-visa-refusal-reasons",                         0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/part-time-job-and-post-study-work-rules-in-hungary",           0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/bring-family-to-hungary-as-a-student",                         0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/bangladesh-offices",                                           0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/consultancy-in-dhaka",                                         0.8,  "monthly", BUILD_TIME),
fmt("/study/hungary/consultancy-in-uttara-dhaka",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/consultancy-in-dhanmondi-dhaka",                               0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/consultancy-in-mirpur-dhaka",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/consultancy-in-chattogram",                                    0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/consultancy-in-sylhet",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/consultancy-in-rajshahi",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/consultancy-in-khulna",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/consultancy-in-barishal",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/consultancy-in-rangpur",                                       0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/consultancy-in-mymensingh",                                    0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/consultancy-in-cumilla",                                       0.75, "monthly", BUILD_TIME),
fmt("/study/hungary/consultancy-in-bogura",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/usa",                                                                 0.85, "weekly",  BUILD_TIME),
fmt("/study/usa/study-in-usa-from-bangladesh",                                 0.85, "monthly", BUILD_TIME),
fmt("/study/usa/study-in-usa-without-ielts",                                   0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/tuition-fees-in-usa-for-bangladeshi-students",                 0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/cost-of-living-in-usa-for-bangladeshi-students",               0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/cheapest-universities-in-usa",                                 0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/top-universities-in-usa",                                      0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/community-college-transfer-pathway-in-usa",                    0.75, "monthly", BUILD_TIME),
fmt("/study/usa/scholarships-in-usa-for-bangladeshi-students",                 0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/fulbright-scholarship-guide-for-bangladeshi-students",         0.85, "monthly", BUILD_TIME),
fmt("/study/usa/assistantships-ta-ra-funding-in-usa",                          0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/admission-requirements-in-usa-for-bangladeshi-students",       0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/study-gap-accepted-universities-in-usa",                       0.75, "monthly", BUILD_TIME),
fmt("/study/usa/study-in-usa-after-hsc",                                       0.75, "monthly", BUILD_TIME),
fmt("/study/usa/study-in-usa-after-diploma",                                   0.75, "monthly", BUILD_TIME),
fmt("/study/usa/usa-intake-dates",                                             0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/sat-and-act-guide-for-usa-undergraduate",                      0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/gre-and-gmat-guide-for-usa-masters",                           0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/toefl-ielts-and-duolingo-for-usa",                             0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/us-university-application-guide",                              0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/statement-of-purpose-and-lor-guide-for-usa",                   0.75, "monthly", BUILD_TIME),
fmt("/study/usa/degree-recognition-and-wes-evaluation-for-usa",                0.75, "monthly", BUILD_TIME),
fmt("/study/usa/cse-and-it-courses-in-usa",                                    0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/stem-programs-and-stem-designation-in-usa",                    0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/engineering-courses-in-usa-for-bangladeshi-students",          0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/data-science-and-ai-masters-in-usa",                           0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/mba-in-usa-for-bangladeshi-students",                          0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/masters-in-usa-for-bangladeshi-students",                      0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/phd-in-usa-for-bangladeshi-students",                          0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/medicine-and-md-pathway-in-usa-for-bangladeshi-students",      0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/best-states-and-cities-to-study-in-usa",                       0.75, "monthly", BUILD_TIME),
fmt("/study/usa/student-accommodation-in-usa",                                 0.75, "monthly", BUILD_TIME),
fmt("/study/usa/halal-food-and-student-life-in-usa-for-bangladeshis",          0.75, "monthly", BUILD_TIME),
fmt("/study/usa/health-insurance-for-international-students-in-usa",           0.75, "monthly", BUILD_TIME),
fmt("/study/usa/banking-and-sending-money-to-usa-from-bangladesh",             0.75, "monthly", BUILD_TIME),
fmt("/study/usa/avoid-scams-and-unaccredited-universities-in-usa",             0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/f1-student-visa-requirements-bangladesh",                      0.85, "monthly", BUILD_TIME),
fmt("/study/usa/form-i-20-explained-for-f1-visa",                              0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/ds-160-and-sevis-fee-guide",                                   0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/proof-of-funds-requirements-for-usa-student-visa",             0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/student-visa-processing-time-and-cost-usa",                    0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/f1-visa-interview-questions-and-tips",                         0.85, "monthly", BUILD_TIME),
fmt("/study/usa/f1-visa-rejection-214b-and-reapplication",                     0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/f2-visa-for-spouse-and-children-of-students",                  0.75, "monthly", BUILD_TIME),
fmt("/study/usa/cpt-opt-and-stem-opt-rules-in-usa",                            0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/h1b-and-post-study-work-pathways-in-usa",                      0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/usa-student-visa-rule-changes-2026",                           0.85, "monthly", BUILD_TIME),
fmt("/study/usa/pre-departure-checklist-for-usa-students",                     0.75, "monthly", BUILD_TIME),
fmt("/study/usa/maintaining-f1-status-in-usa",                                 0.75, "monthly", BUILD_TIME),
fmt("/study/usa/bangladesh-offices",                                           0.75, "monthly", BUILD_TIME),
fmt("/study/usa/consultancy-in-dhaka",                                         0.8,  "monthly", BUILD_TIME),
fmt("/study/usa/consultancy-in-uttara-dhaka",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/usa/consultancy-in-dhanmondi-dhaka",                               0.75, "monthly", BUILD_TIME),
fmt("/study/usa/consultancy-in-mirpur-dhaka",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/usa/consultancy-in-chattogram",                                    0.75, "monthly", BUILD_TIME),
fmt("/study/usa/consultancy-in-sylhet",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/usa/consultancy-in-rajshahi",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/usa/consultancy-in-khulna",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/usa/consultancy-in-barishal",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/usa/consultancy-in-rangpur",                                       0.75, "monthly", BUILD_TIME),
fmt("/study/usa/consultancy-in-mymensingh",                                    0.75, "monthly", BUILD_TIME),
fmt("/study/usa/consultancy-in-cumilla",                                       0.75, "monthly", BUILD_TIME),
fmt("/study/usa/consultancy-in-bogura",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/georgia",                                                                 0.85, "weekly",  BUILD_TIME),
fmt("/study/georgia/study-in-georgia-from-bangladesh",                             0.85, "monthly", BUILD_TIME),
fmt("/study/georgia/georgia-reality-check-eu-schengen-and-new-rules",              0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/why-study-in-georgia-pros-and-cons",                           0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/study-in-georgia-without-ielts",                               0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/english-and-georgian-language-requirements",                   0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/tuition-fees-in-georgia-for-bangladeshi-students",             0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/cost-of-living-in-georgia-for-bangladeshi-students",           0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/cheapest-universities-in-georgia",                             0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/top-universities-in-georgia",                                  0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/public-vs-private-universities-in-georgia",                    0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/scholarships-in-georgia-for-bangladeshi-students",             0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/admission-requirements-in-georgia-for-bangladeshi-students",   0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/study-gap-accepted-in-georgia",                                0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/study-in-georgia-after-ssc",                                   0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/study-in-georgia-after-diploma",                               0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/georgia-intake-dates",                                         0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/application-guide-for-georgian-universities",                  0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/degree-recognition-and-eligibility-in-georgia",                0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/mbbs-and-md-in-georgia-for-bangladeshi-students",              0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/dentistry-and-pharmacy-in-georgia",                            0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/nursing-and-public-health-in-georgia",                         0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/it-and-cse-courses-in-georgia",                                0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/business-and-mba-in-georgia",                                  0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/engineering-and-architecture-in-georgia",                      0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/tourism-and-hospitality-in-georgia",                           0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/premed-foundation-and-language-courses-in-georgia",            0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/student-accommodation-in-georgia",                             0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/health-insurance-for-students-in-georgia",                     0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/student-life-halal-food-and-safety-in-georgia",                0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/student-visa-requirements-bangladesh",                         0.85, "monthly", BUILD_TIME),
fmt("/study/georgia/study-visa-application-step-by-step",                          0.85, "monthly", BUILD_TIME),
fmt("/study/georgia/study-residence-permit-guide-for-georgia",                     0.85, "monthly", BUILD_TIME),
fmt("/study/georgia/new-2026-rules-for-foreign-students-in-georgia",               0.85, "monthly", BUILD_TIME),
fmt("/study/georgia/keep-your-study-permit-valid-in-georgia",                      0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/proof-of-funds-requirements-for-georgia-student-visa",         0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/visa-processing-time-and-cost-georgia",                        0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/visa-refusal-reasons-and-how-to-avoid-them",                     0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/part-time-job-and-work-rules-in-georgia",                      0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/after-graduation-stay-options-in-georgia",                     0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/scams-and-fake-offer-warning-georgia",                         0.85, "monthly", BUILD_TIME),
fmt("/study/georgia/bangladesh-offices",                                           0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/consultancy-in-dhaka",                                         0.8,  "monthly", BUILD_TIME),
fmt("/study/georgia/consultancy-in-uttara-dhaka",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/consultancy-in-dhanmondi-dhaka",                               0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/consultancy-in-mirpur-dhaka",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/consultancy-in-chattogram",                                    0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/consultancy-in-sylhet",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/consultancy-in-rajshahi",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/consultancy-in-khulna",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/consultancy-in-barishal",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/consultancy-in-rangpur",                                       0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/consultancy-in-mymensingh",                                    0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/consultancy-in-cumilla",                                       0.75, "monthly", BUILD_TIME),
fmt("/study/georgia/consultancy-in-bogura",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/serbia",                                                                 0.85, "weekly",  BUILD_TIME),
fmt("/study/serbia/study-in-serbia-from-bangladesh",                               0.85, "monthly", BUILD_TIME),
fmt("/study/serbia/study-in-serbia-without-ielts",                                 0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/tuition-fees-in-serbia-for-bangladeshi-students",               0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/cost-of-living-in-serbia-for-bangladeshi-students",             0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/cheapest-universities-in-serbia",                               0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/top-universities-in-serbia",                                    0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/public-vs-private-universities-in-serbia",                      0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/admission-requirements-in-serbia-for-bangladeshi-students",     0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/study-gap-accepted-universities-in-serbia",                     0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/study-in-serbia-after-ssc",                                     0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/study-in-serbia-after-diploma",                                 0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/serbia-intake-dates",                                           0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/serbia-vs-hungary-vs-poland-for-bangladeshi-students",          0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/scholarships-in-serbia-for-bangladeshi-students",               0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/world-in-serbia-scholarship-guide",                             0.85, "monthly", BUILD_TIME),
fmt("/study/serbia/world-in-serbia-eligibility-and-deadlines",                     0.85, "monthly", BUILD_TIME),
fmt("/study/serbia/university-scholarships-and-fee-waivers-in-serbia",             0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/how-to-apply-to-serbian-universities",                          0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/degree-recognition-and-eligibility-in-serbia",                  0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/entrance-exams-in-serbia",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/bachelors-in-serbia-for-bangladeshi-students",                  0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/masters-and-phd-in-serbia-for-bangladeshi-students",            0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/cse-and-it-courses-in-serbia",                                  0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/engineering-courses-in-serbia",                                 0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/mba-and-business-degrees-in-serbia",                            0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/mbbs-and-medical-degrees-in-serbia",                            0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/foundation-year-and-serbian-language-courses-in-serbia",        0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/sop-and-motivation-letter-for-serbia",                          0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/student-accommodation-in-serbia",                               0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/study-in-belgrade",                                             0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/study-in-novi-sad",                                             0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/study-in-nis-and-kragujevac",                                   0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/health-insurance-for-students-in-serbia",                       0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/halal-food-and-bangladeshi-community-in-serbia",                0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/life-in-serbia-for-international-students",                     0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/student-visa-requirements-bangladesh",                           0.85, "monthly", BUILD_TIME),
fmt("/study/serbia/serbia-d-visa-and-temporary-residence-application-guide",       0.85, "monthly", BUILD_TIME),
fmt("/study/serbia/serbia-student-documents-checklist",                            0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/bank-solvency-requirements-for-serbia-student-visa",            0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/student-visa-processing-time-and-cost",                          0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/serbia-student-visa-refusal-reasons",                           0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/part-time-job-and-post-study-work-rules-in-serbia",             0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/bring-family-to-serbia-as-a-student",                           0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/serbia-police-registration-and-permit-renewal",                 0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/bangladesh-offices",                                             0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/consultancy-in-dhaka",                                           0.8,  "monthly", BUILD_TIME),
fmt("/study/serbia/consultancy-in-uttara-dhaka",                                    0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/consultancy-in-dhanmondi-dhaka",                                 0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/consultancy-in-mirpur-dhaka",                                    0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/consultancy-in-chattogram",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/consultancy-in-sylhet",                                          0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/consultancy-in-rajshahi",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/consultancy-in-khulna",                                          0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/consultancy-in-barishal",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/consultancy-in-rangpur",                                         0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/consultancy-in-mymensingh",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/consultancy-in-cumilla",                                         0.75, "monthly", BUILD_TIME),
fmt("/study/serbia/consultancy-in-bogura",                                          0.75, "monthly", BUILD_TIME),
fmt("/study/uk",                                                                 0.85, "weekly",  BUILD_TIME),
fmt("/study/uk/study-in-uk-from-bangladesh",                                 0.85, "monthly", BUILD_TIME),
fmt("/study/uk/study-in-uk-without-ielts",                                   0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/tuition-fees-in-uk-for-bangladeshi-students",                 0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/cost-of-living-in-uk-for-bangladeshi-students",               0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/cheapest-universities-in-uk",                                 0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/top-universities-in-uk",                                      0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/russell-group-vs-modern-universities-in-uk",                  0.75, "monthly", BUILD_TIME),
fmt("/study/uk/foundation-and-pathway-programmes-in-uk",                     0.75, "monthly", BUILD_TIME),
fmt("/study/uk/scholarships-in-uk-for-bangladeshi-students",                 0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/chevening-scholarship-guide-for-bangladeshi-students",        0.85, "monthly", BUILD_TIME),
fmt("/study/uk/commonwealth-and-great-scholarships-for-bangladesh",          0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/admission-requirements-in-uk-for-bangladeshi-students",       0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/study-gap-accepted-universities-in-uk",                       0.75, "monthly", BUILD_TIME),
fmt("/study/uk/study-in-uk-after-hsc",                                       0.75, "monthly", BUILD_TIME),
fmt("/study/uk/study-in-uk-after-diploma",                                   0.75, "monthly", BUILD_TIME),
fmt("/study/uk/uk-intake-dates",                                             0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/ucas-application-guide-for-bangladeshi-students",             0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/postgraduate-direct-application-guide-for-uk",                0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/personal-statement-and-references-guide-for-uk",              0.75, "monthly", BUILD_TIME),
fmt("/study/uk/ielts-ukvi-pte-and-english-tests-for-uk",                     0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/degree-recognition-and-uk-enic-equivalence",                  0.75, "monthly", BUILD_TIME),
fmt("/study/uk/conditional-and-unconditional-offers-explained",              0.75, "monthly", BUILD_TIME),
fmt("/study/uk/cse-and-it-courses-in-uk",                                    0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/masters-in-uk-for-bangladeshi-students",                      0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/mba-in-uk-for-bangladeshi-students",                          0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/phd-in-uk-for-bangladeshi-students",                          0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/medicine-and-plab-pathway-in-uk-for-bangladeshi-students",    0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/engineering-courses-in-uk-for-bangladeshi-students",          0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/business-finance-and-data-analytics-in-uk",                   0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/best-cities-to-study-in-uk",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/uk/student-accommodation-in-uk",                                 0.75, "monthly", BUILD_TIME),
fmt("/study/uk/halal-food-and-student-life-in-uk-for-bangladeshis",          0.75, "monthly", BUILD_TIME),
fmt("/study/uk/nhs-and-immigration-health-surcharge-for-students",           0.75, "monthly", BUILD_TIME),
fmt("/study/uk/banking-and-sending-money-to-uk-from-bangladesh",             0.75, "monthly", BUILD_TIME),
fmt("/study/uk/avoid-scams-and-agent-risks-in-uk-admissions",                0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/uk-student-visa-requirements-bangladesh",                     0.85, "monthly", BUILD_TIME),
fmt("/study/uk/cas-explained-for-uk-student-visa",                           0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/maintenance-funds-and-28-day-rule-for-uk-student-visa",       0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/uk-student-visa-processing-time-and-cost",                    0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/uk-student-visa-interview-and-credibility-tips",              0.85, "monthly", BUILD_TIME),
fmt("/study/uk/uk-student-visa-refusal-reasons-and-reapplication",           0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/tb-test-biometrics-and-vfs-for-bangladesh",                   0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/dependants-on-uk-student-visa",                               0.75, "monthly", BUILD_TIME),
fmt("/study/uk/part-time-work-rules-for-students-in-uk",                     0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/graduate-route-and-post-study-work-in-uk",                    0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/uk-student-visa-rule-changes-2026",                           0.85, "monthly", BUILD_TIME),
fmt("/study/uk/pre-departure-checklist-for-uk-students",                     0.75, "monthly", BUILD_TIME),
fmt("/study/uk/maintaining-student-visa-status-in-uk",                       0.75, "monthly", BUILD_TIME),
fmt("/study/uk/bangladesh-offices",                                           0.75, "monthly", BUILD_TIME),
fmt("/study/uk/consultancy-in-dhaka",                                         0.8,  "monthly", BUILD_TIME),
fmt("/study/uk/consultancy-in-uttara-dhaka",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/uk/consultancy-in-dhanmondi-dhaka",                               0.75, "monthly", BUILD_TIME),
fmt("/study/uk/consultancy-in-mirpur-dhaka",                                  0.75, "monthly", BUILD_TIME),
fmt("/study/uk/consultancy-in-chattogram",                                    0.75, "monthly", BUILD_TIME),
fmt("/study/uk/consultancy-in-sylhet",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/uk/consultancy-in-rajshahi",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/uk/consultancy-in-khulna",                                        0.75, "monthly", BUILD_TIME),
fmt("/study/uk/consultancy-in-barishal",                                      0.75, "monthly", BUILD_TIME),
fmt("/study/uk/consultancy-in-rangpur",                                       0.75, "monthly", BUILD_TIME),
fmt("/study/uk/consultancy-in-mymensingh",                                    0.75, "monthly", BUILD_TIME),
fmt("/study/uk/consultancy-in-cumilla",                                       0.75, "monthly", BUILD_TIME),
fmt("/study/uk/consultancy-in-bogura",                                        0.75, "monthly", BUILD_TIME),

  ];

  // ── JSON-based dynamic routes  ──────────────────────────────────────────────
  const studentVisaRoutes = studentSlugs.map(slug =>
    fmt(`/study-abroad/student-visa/${slug}`, 0.85, "monthly", BUILD_TIME)
  );

  const visaSlugRoutes = visaSlugs.map(slug =>
    fmt(`/visa/${slug}-visa`, 0.85, "weekly", BUILD_TIME)
  );

  const visaGuideRoutes = visaSlugs.flatMap(dest =>
    visaSlugs
      .filter(nat => nat !== dest)
      .map(nat => fmt(`/visa/visa-guide/${dest}-visa-for-${nat}`, 0.8, "monthly", BUILD_TIME))
  );

  // Path-based: dest-nat-type (one URL per type, no query params)
  const processingTimeRoutes = visaSlugs.flatMap(dest =>
    visaSlugs
      .filter(nat => nat !== dest)
      .flatMap(nat =>
        PROCESSING_TYPES.map(type =>
          fmt(
            `/travel-resources/visa-processing-time-tracker/${dest}-national-visa-processing-time-for-${nat}-${type}`,
            0.7,
            "weekly",
            BUILD_TIME
          )
        )
      )
  );

  // ── MongoDB-based dynamic routes ───────────────────────────────────────────
  const eVisaRoutes = mongoSlugs.flatMap(nat =>
    mongoSlugs
      .filter(dest => dest !== nat)
      .map(dest =>
        fmt(
          `/visa/e-visa/${nat}-national-e-visa-requirements-for-${dest}`,
          0.75,
          "monthly",
          BUILD_TIME
        )
      )
  );

  const scholarshipRoutes = mongoSlugs.map(slug =>
    fmt(`/scholarships/${slug}`, 0.75, "monthly", BUILD_TIME)
  );

  const dubaiResidentRoutes = mongoSlugs.map(slug =>
    fmt(`/visa/dubai-residents/${slug}`, 0.8, "monthly", BUILD_TIME)
  );

  const indiaVisaRoutes = mongoSlugs.map(slug =>
    fmt(`/visa/india/${slug}`, 0.8, "monthly", BUILD_TIME)
  );

  // RESTORED — path-based, no ?type= query param
  const rejectionRoutes = mongoSlugs.flatMap(nat =>
    mongoSlugs
      .filter(dest => dest !== nat)
      .flatMap(dest =>
        REJECTION_TYPES.map(type =>
          fmt(
            `/visa-rejection/${nat}-visa-rejection-rate-for-${dest}-${type}`,
            0.7,
            "monthly",
            BUILD_TIME
          )
        )
      )
  );

  // ── MERGED from visa.eammu.com: visa-checker country pairs + guide pages ───
  // Was: /sitemap/pairs-N, /sitemap/guides-N on visa.eammu.com (hardcoded chunks).
  // Now folded into this single auto-chunking route. Country list is fetched
  // from api.eammu.com (visaCheckerSlugs above) — NOT the MongoDB getCountries().
  const visaCheckerPairRoutes = visaCheckerSlugs.flatMap(nat =>
    visaCheckerSlugs
      .filter(dest => dest !== nat)
      .map(dest =>
        fmt(`/visa-checker/${nat}-visa-for-${dest}`, 0.7, "weekly", BUILD_TIME)
      )
  );

  const visaCheckerGuideRoutes = visaCheckerSlugs.flatMap(nat =>
    visaCheckerSlugs
      .filter(dest => dest !== nat)
      .flatMap(dest =>
        GUIDE_SLUGS.map(guide =>
          fmt(`/visa-checker/${nat}-visa-for-${dest}/${guide}`, 0.6, "weekly", BUILD_TIME)
        )
      )
  );

  const total =
    staticRoutes.length +
    studentVisaRoutes.length +
    visaSlugRoutes.length +
    visaGuideRoutes.length +
    processingTimeRoutes.length +
    eVisaRoutes.length +
    scholarshipRoutes.length +
    dubaiResidentRoutes.length +
    indiaVisaRoutes.length +
    rejectionRoutes.length +
    visaCheckerPairRoutes.length +
    visaCheckerGuideRoutes.length;

  console.log(`[eammu-sitemap] Built:
    static:            ${staticRoutes.length}
    student:           ${studentVisaRoutes.length}
    visaSlug:          ${visaSlugRoutes.length}
    visaGuide:         ${visaGuideRoutes.length}
    processing:        ${processingTimeRoutes.length}
    e-visa:            ${eVisaRoutes.length}
    scholarships:      ${scholarshipRoutes.length}
    dubai-resident:    ${dubaiResidentRoutes.length}
    india-visa:        ${indiaVisaRoutes.length}
    rejection:         ${rejectionRoutes.length}
    visa-checker-pair: ${visaCheckerPairRoutes.length}
    visa-checker-guide:${visaCheckerGuideRoutes.length}
    TOTAL:             ${total}`);

  _cachedRoutes = [
    ...staticRoutes,
    ...studentVisaRoutes,
    ...visaSlugRoutes,
    ...visaGuideRoutes,
    ...processingTimeRoutes,
    ...eVisaRoutes,
    ...scholarshipRoutes,
    ...dubaiResidentRoutes,
    ...indiaVisaRoutes,
    ...rejectionRoutes,
    ...visaCheckerPairRoutes,
    ...visaCheckerGuideRoutes,
  ];
  _cacheBuiltAt = Date.now();

  return _cachedRoutes;
}

// ── GET Handler ───────────────────────────────────────────────────────────────
export async function GET(request, { params }) {
  const rawId = (await params).id.replace(/\.xml$/, "");
  const id    = parseInt(rawId, 10);

  if (isNaN(id) || id < 0) {
    return new NextResponse(`Invalid ID: "${rawId}"`, { status: 400 });
  }

  try {
    const all        = await getAllRoutes();
    const chunkCount = Math.ceil(all.length / PAGE_SIZE);

    if (id >= chunkCount) {
      return new NextResponse(
        `Chunk ${id} not found. Valid: 0–${chunkCount - 1}`,
        { status: 404 }
      );
    }

    const start = id * PAGE_SIZE;
    const chunk = all.slice(start, start + PAGE_SIZE);

    console.log(`[eammu-sitemap] Chunk ${id}: ${start.toLocaleString()}–${(start + chunk.length).toLocaleString()} of ${all.length.toLocaleString()}`);

    return new NextResponse(buildXml(chunk), {
      headers: {
        "Content-Type":  "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=43200, s-maxage=43200, stale-while-revalidate=86400",
      },
    });
  } catch (err) {
    console.error("[eammu-sitemap] Error:", err);
    return new NextResponse(`Error: ${err.message}`, { status: 500 });
  }
}