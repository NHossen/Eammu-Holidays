// app/sitemap/[id]/route.js
// Serves /sitemap/0.xml … /sitemap/6.xml
// Each chunk contains up to 50,000 URLs.
//
// ROOT CAUSE FIX: React's cache() does not work across Next.js sitemap
// route handlers because each sitemap chunk (/sitemap/0.xml, /sitemap/1.xml)
// is a separate request — React cache() only deduplicates within a single
// React render tree, not across HTTP requests.
//
// Solution: Module-level lazy singleton. The `_routeCache` variable is
// populated once on first call and reused for every subsequent call within
// the same Vercel serverless function instance (warm invocations = free).

import rawVisaData    from "@/app/data/countries.json";
import rawStudentData from "@/app/data/studentvisadata.json";
import { createSlug } from "@/app/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────
const BASE_URL   = "https://eammu.com";
const PAGE_SIZE  = 50_000;
const VISA_TYPES = ["sticker", "e-visa", "transit", "sticker-extended"];
const BUILD_TIME = new Date().toISOString();

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function toArray(json) {
  if (Array.isArray(json)) return json;
  if (json && typeof json === "object") {
    const COMMON = ["data", "countries", "visas", "items", "list", "results"];
    for (const k of COMMON) if (Array.isArray(json[k])) return json[k];
    const ak = Object.keys(json).find((k) => Array.isArray(json[k]));
    if (ak) return json[ak];
    return Object.values(json);
  }
  return [];
}

function getSlug(entry, ...keys) {
  for (const key of keys) {
    if (entry[key] && typeof entry[key] === "string") {
      return createSlug(entry[key]);
    }
  }
  return "";
}

function uniqueSlugs(entries, ...keys) {
  const seen   = new Set();
  const result = [];
  for (const entry of entries) {
    const slug = getSlug(entry, ...keys);
    if (slug && !seen.has(slug)) {
      seen.add(slug);
      result.push(slug);
    }
  }
  return result;
}

function fmt(path, priority, changeFreq) {
  const url = `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  return { url, lastModified: BUILD_TIME, changeFrequency: changeFreq, priority };
}

// ─────────────────────────────────────────────────────────────────────────────
// XML Builder
// ─────────────────────────────────────────────────────────────────────────────

function buildXml(urls) {
  const entries = urls
    .map(
      ({ url, lastModified, changeFrequency, priority }) =>
        `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastModified}</lastmod>\n    <changefreq>${changeFrequency}</changefreq>\n    <priority>${Number(priority).toFixed(1)}</priority>\n  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Module-level singleton cache
// ─────────────────────────────────────────────────────────────────────────────
// `_routeCache` is null until the first call to getAllRoutes().
// After that it holds the full array and is never recomputed.
// This works correctly across Next.js sitemap chunks because all chunks
// share the same module instance within a Vercel serverless function.
let _routeCache = null;

function getAllRoutes() {
  if (_routeCache) return _routeCache;

  const visaData    = toArray(rawVisaData);
  const studentData = toArray(rawStudentData);

  // ── Static routes ──────────────────────────────────────────────────────────
  const staticRoutes = [
    // Core pages
    fmt("/",                                                             1.0,  "daily"),
    fmt("/about",                                                        0.8,  "monthly"),
    fmt("/contact",                                                      0.8,  "monthly"),
    fmt("/careers",                                                      0.7,  "monthly"),
    fmt("/testimonials",                                                 0.8,  "weekly"),
    fmt("/blogs",                                                        0.9,  "weekly"),
    fmt("/news-feeds",                                                   0.8,  "daily"),
    fmt("/offers",                                                       0.9,  "weekly"),
    fmt("/log-in",                                                       0.5,  "yearly"),
    fmt("/sign-up",                                                      0.5,  "yearly"),
    fmt("/terms-privacy-policy",                                         0.4,  "yearly"),
    fmt("/naeem-hossen",                                                 0.6,  "monthly"),
    fmt("/our-leading-team",                                             0.6,  "monthly"),
    fmt("/pdf-editor",                                                   0.5,  "monthly"),

    // Services
    fmt("/our-services",                                                 0.9,  "weekly"),
    fmt("/our-services/things-to-do",                                    0.7,  "monthly"),
    fmt("/our-services/tour-packages",                                   0.8,  "weekly"),
    fmt("/our-services/visa-services",                                   0.9,  "weekly"),
    fmt("/our-services/visa-services/student-visa-from-bangladesh",      0.9,  "monthly"),
    fmt("/our-services/visa-services/tourist-visa-from-bangladesh",      0.9,  "monthly"),
    fmt("/our-services/visa-services/work-visa-from-bangladesh",         0.9,  "monthly"),

    // Static visa application pages
    fmt("/our-services/visa/albania-visa-application",                   0.8,  "monthly"),
    fmt("/our-services/visa/armenia-visa-application",                   0.8,  "monthly"),
    fmt("/our-services/visa/australia-visa-application",                 0.8,  "monthly"),
    fmt("/our-services/visa/azerbaijan-visa-application",                0.8,  "monthly"),
    fmt("/our-services/visa/brazil-visa-application",                    0.8,  "monthly"),
    fmt("/our-services/visa/canada-visa-application",                    0.8,  "monthly"),
    fmt("/our-services/visa/china-visa-application",                     0.8,  "monthly"),
    fmt("/our-services/visa/cyprus-visa-application",                    0.8,  "monthly"),
    fmt("/our-services/visa/dubai-visa-application",                     0.8,  "monthly"),
    fmt("/our-services/visa/europe-visa-application",                    0.8,  "monthly"),
    fmt("/our-services/visa/georgia-visa-application",                   0.8,  "monthly"),
    fmt("/our-services/visa/germany-visa-application",                   0.8,  "monthly"),
    fmt("/our-services/visa/india-visa-application",                     0.8,  "monthly"),
    fmt("/our-services/visa/indonesia-visa-application",                 0.8,  "monthly"),
    fmt("/our-services/visa/japan-visa-application",                     0.8,  "monthly"),
    fmt("/our-services/visa/kosovo-visa-application",                    0.8,  "monthly"),
    fmt("/our-services/visa/malaysia-visa-application",                  0.8,  "monthly"),
    fmt("/our-services/visa/montenegro-visa-application",                0.8,  "monthly"),
    fmt("/our-services/visa/morocco-visa-application",                   0.8,  "monthly"),
    fmt("/our-services/visa/portugal-visa-application",                  0.8,  "monthly"),
    fmt("/our-services/visa/qatar-visa-application",                     0.8,  "monthly"),
    fmt("/our-services/visa/russia-visa-application",                    0.8,  "monthly"),
    fmt("/our-services/visa/saudi-arabia-visa-application",              0.8,  "monthly"),
    fmt("/our-services/visa/serbia-visa-application",                    0.8,  "monthly"),
    fmt("/our-services/visa/singapore-visa-application",                 0.8,  "monthly"),
    fmt("/our-services/visa/south-africa-visa-application",              0.8,  "monthly"),
    fmt("/our-services/visa/south-korea-visa-application",               0.8,  "monthly"),
    fmt("/our-services/visa/spain-visa-application",                     0.8,  "monthly"),
    fmt("/our-services/visa/srilanka-visa-application",                  0.8,  "monthly"),
    fmt("/our-services/visa/thailand-visa-application",                  0.8,  "monthly"),
    fmt("/our-services/visa/turkey-visa-application",                    0.8,  "monthly"),
    fmt("/our-services/visa/uk-visa-application",                        0.8,  "monthly"),
    fmt("/our-services/visa/usa-visa-application",                       0.8,  "monthly"),

    // Study Abroad
    fmt("/study-abroad",                                                 0.95, "weekly"),
    fmt("/study-abroad/student-visa",                                    0.9,  "weekly"),

    // Visa hub
    fmt("/visa",                                                         0.95, "daily"),
    fmt("/visa/visa-guide",                                              0.9,  "daily"),

    // Travel Resources
    fmt("/travel-resources",                                             0.8,  "weekly"),
    fmt("/travel-resources/travel-document-generator",                   0.7,  "monthly"),
    fmt("/travel-resources/visa-checklist-generator",                    0.7,  "monthly"),
    fmt("/travel-resources/visa-processing-time-tracker",                0.8,  "weekly"),

    // Regional contacts
    fmt("/contact/travel-agency-armenia",                                0.7,  "monthly"),
    fmt("/contact/travel-agency-bangladesh",                             0.7,  "monthly"),
    fmt("/contact/travel-agency-dubai",                                  0.7,  "monthly"),
    fmt("/contact/travel-agency-georgia",                                0.7,  "monthly"),
    fmt("/online-travel-agency-bangladesh",                              0.8,  "monthly"),

    // Other verticals
    fmt("/eammu-dairy-poultry",                                          0.6,  "monthly"),
    fmt("/eammu-fashion",                                                0.6,  "monthly"),
    fmt("/eammu-fashion/eammu-store",                                    0.6,  "monthly"),
    fmt("/eammu-social-responsibility",                                  0.6,  "monthly"),
    fmt("/eammu-textile-bangladesh",                                     0.6,  "monthly"),
    fmt("/web-development-digital-marketing",                            0.7,  "monthly"),
    fmt("/flight-booking",                                               0.8,  "monthly"),
    fmt("/event-management",                                             0.7,  "monthly"),
    fmt("/target-ielts-immigration-center",                              0.8,  "monthly"),
    fmt("/target-usa-visa-interview-preparation",                        0.8,  "monthly"),
  ];

  // ── Deduplicated slug arrays ───────────────────────────────────────────────
  const visaSlugs    = uniqueSlugs(visaData,    "slug", "country", "name", "title", "destination");
  const studentSlugs = uniqueSlugs(studentData, "slug", "country", "name", "title");

  // ── /study-abroad/student-visa/[slug] ─────────────────────────────────────
  const studentVisaRoutes = studentSlugs.map((slug) =>
    fmt(`/study-abroad/student-visa/${slug}`, 0.85, "monthly")
  );

  // ── /visa/[slug]-visa ─────────────────────────────────────────────────────
  const visaSlugRoutes = visaSlugs.map((slug) =>
    fmt(`/visa/${slug}-visa`, 0.85, "weekly")
  );

  // ── /visa/visa-guide/[dest]-visa-for-[nat] ────────────────────────────────
  const visaGuideRoutes = visaSlugs.flatMap((dest) =>
    visaSlugs
      .filter((nat) => nat !== dest)
      .map((nat) => fmt(`/visa/visa-guide/${dest}-visa-for-${nat}`, 0.8, "monthly"))
  );

  // ── /travel-resources/visa-processing-time-tracker/[dest]-processing-time-for-[nat]/[type]
  const processingTimeRoutes = visaSlugs.flatMap((dest) =>
    visaSlugs
      .filter((nat) => nat !== dest)
      .flatMap((nat) =>
        VISA_TYPES.map((type) =>
          fmt(
            `/travel-resources/visa-processing-time-tracker/${dest}-processing-time-for-${nat}/${type}`,
            0.7,
            "weekly"
          )
        )
      )
  );

  _routeCache = [
    ...staticRoutes,
    ...studentVisaRoutes,
    ...visaSlugRoutes,
    ...visaGuideRoutes,
    ...processingTimeRoutes,
  ];

  return _routeCache;
}

// ─────────────────────────────────────────────────────────────────────────────
// GET /sitemap/[id].xml
// ─────────────────────────────────────────────────────────────────────────────
export async function GET(request, { params }) {
  // Strip .xml extension — Next.js passes "0.xml", "1.xml", etc.
  const rawId = (await params).id.replace(/\.xml$/, "");
  const id    = parseInt(rawId, 10);

  const all   = getAllRoutes();
  const total = all.length;
  const count = Math.ceil(total / PAGE_SIZE);

  if (isNaN(id) || id < 0 || id >= count) {
    return new Response("Sitemap chunk not found", { status: 404 });
  }

  const start = id * PAGE_SIZE;
  const chunk = all.slice(start, start + PAGE_SIZE);

  console.log(
    `[sitemap] Chunk ${id}: URLs ${start.toLocaleString()}–${(start + chunk.length).toLocaleString()} of ${total.toLocaleString()}`
  );

  return new Response(buildXml(chunk), {
    headers: {
      "Content-Type":  "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// generateStaticParams — tells Next.js which [id] segments to pre-render
// ─────────────────────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const total = getAllRoutes().length;
  const count = Math.ceil(total / PAGE_SIZE);
  console.log(`[sitemap] ${total.toLocaleString()} URLs across ${count} sitemap(s)`);
  // Must include .xml so the param matches the actual URL /sitemap/0.xml
  return Array.from({ length: count }, (_, i) => ({ id: `${i}.xml` }));
}