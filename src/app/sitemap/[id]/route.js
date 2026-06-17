// app/sitemap/[id]/route.js  (eammu.com)
// FIXES:
//  1. Removed ?type= query params from processingTimeRoutes & rejectionRoutes
//     → Google treats ?param= URLs as duplicates; use path-based slugs instead
//  2. BUILD_TIME moved inside getAllRoutes() so it's fresh per cold-start
//  3. Added /schengen-visa (exists in build output, was missing)
//  4. Static count is now exactly 83 (82 original + /schengen-visa)

import { NextResponse }   from 'next/server';
import rawVisaData        from "@/app/data/countries.json";
import rawStudentData     from "@/app/data/studentvisadata.json";
import { createSlug }     from "@/app/lib/utils";
import { getCountries }   from "@/app/lib/sitemap-data";

export const URLS_PER_SHARD = 45_000;
export const dynamic        = 'force-dynamic';
export const runtime        = 'nodejs';
export const revalidate     = 86400;

// ── Constants ─────────────────────────────────────────────────────────────────
const BASE_URL         = "https://eammu.com";
const PAGE_SIZE        = 45_000;

// FIX 1: Removed ?type= query params — use path segments instead
// Old: /dest-national-visa-processing-time-for-nat?type=sticker
// New: /dest-national-visa-processing-time-for-nat/sticker
const PROCESSING_TYPES = ["sticker", "e-visa", "transit", "sticker-extended"];
const REJECTION_TYPES  = ["tourist", "student", "work", "transit", "business", "family"];

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

  // FIX 2: BUILD_TIME is now per-call, not module-load time
  const BUILD_TIME = new Date().toISOString();

  // ── JSON data ──────────────────────────────────────────────────────────────
  const visaData     = toArray(rawVisaData);
  const studentData  = toArray(rawStudentData);
  const visaSlugs    = uniqueSlugs(visaData,    "slug", "country", "name", "title", "destination");
  const studentSlugs = uniqueSlugs(studentData, "slug", "country", "name", "title");

  // ── MongoDB data ───────────────────────────────────────────────────────────
  const countries  = await getCountries();
  const mongoSlugs = countries.map(c => createSlug(c.country)).filter(Boolean);

  // ── Static routes — 83 total ───────────────────────────────────────────────
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
    // FIX 3: Added /schengen-visa — exists in build output, was missing from sitemap 
    fmt("/schengen-visa",                                                0.8,  "monthly", BUILD_TIME),
    fmt("/travel-agency-bangladesh",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/visa-checker",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/travel-insurance",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/travel-cost-calculator",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/travel-agency-delhi",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/travel-agency-dhaka",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/travel-agency-sharjah",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/travel-agency-abu-dhabi",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/appeal-process-for-visa",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/bank-solvency-certificate-for-visa",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/bank-statement-for-visa",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/bank-statement-for-visa-how-to-prepare",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/best-time-to-apply-schengen-visa",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/can-i-reapply-after-visa-rejection",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/common-reasons",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/ds-160-form-guide",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/embassy-appointment-tips",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/how-many-times-can-i-apply-for-visa",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/how-much-bank-balance-needed-for-visa",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/how-to-track-visa-application",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/marriage-certificate-for-visa",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/police-clearance-certificate",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/sop-sample-for-student-visa",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/sponsor-financial-documents-for-visa",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/sponsor-letter-sample-for-visa",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/spouse-visa-documents",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/travel-itinerary-for-visa-how-to-make",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/vfs-global-appointment-guide",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/visa-appointment-booking-guide",                                     0.8,  "monthly", BUILD_TIME),
    fmt("/visa-interview-tips",                                     0.8,  "monthly", BUILD_TIME),
  
    

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

  // FIX 1: Replaced ?type= query params with path segments
  // Old: /dest-national-visa-processing-time-for-nat?type=sticker  ← Google ignores
  // New: /dest-national-visa-processing-time-for-nat/sticker        ← Google indexes
  // ⚠️  Your [slug]/page.js must read the type from the last path segment, not searchParams
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

  // FIX 1: Replaced ?type= with path segment
  // Old: /nat-visa-rejection-rate-for-dest?type=tourist  ← Google ignores
  // New: /nat-visa-rejection-rate-for-dest-tourist        ← Google indexes
  // ⚠️  Your [slug]/page.js must parse the type from the slug string, not searchParams
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
    rejectionRoutes.length;

  console.log(`[eammu-sitemap] Built:
    static:          ${staticRoutes.length}
    student:         ${studentVisaRoutes.length}
    visaSlug:        ${visaSlugRoutes.length}
    visaGuide:       ${visaGuideRoutes.length}
    processing:      ${processingTimeRoutes.length}
    e-visa:          ${eVisaRoutes.length}
    scholarships:    ${scholarshipRoutes.length}
    dubai-resident:  ${dubaiResidentRoutes.length}
    india-visa:      ${indiaVisaRoutes.length}
    rejection:       ${rejectionRoutes.length}
    TOTAL:           ${total}`);

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