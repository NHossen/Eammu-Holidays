/**
 * app/lib/sitemap-data.js
 *
 * Central sitemap data layer.
 * - Imported by every sitemap route so data is computed ONCE per request
 *   (Next.js module cache keeps it in memory between requests in the same
 *   Vercel Lambda invocation; each cold-start re-runs the top-level code once).
 * - Chunk size 45,000 keeps every child sitemap safely under Google's 50 k limit.
 * - No query-string URLs (see note at bottom).
 */

import rawVisaData from "@/app/data/countries.json";
import rawStudentVisaData from "@/app/data/studentvisadata.json";
import { createSlug } from "@/app/lib/utils";

// ─── Constants ────────────────────────────────────────────────────────────────
export const BASE_URL = "https://eammu.com";
export const CHUNK_SIZE = 45_000;

// NOTE: visaTypes kept for the clean-URL version of processing-time routes.
// We deliberately DROP query-param variants from the sitemap (see SEO notes).
export const VISA_TYPES = ["sticker", "e-visa", "transit", "sticker-extended"];

// ─── JSON normaliser ──────────────────────────────────────────────────────────
function toArray(json) {
  if (Array.isArray(json)) return json;
  if (json && typeof json === "object") {
    const known = ["data", "countries", "visas", "items", "list", "results"];
    for (const k of known) if (Array.isArray(json[k])) return json[k];
    const first = Object.keys(json).find((k) => Array.isArray(json[k]));
    if (first) return json[first];
    return Object.values(json);
  }
  return [];
}

// ─── Slug helper ──────────────────────────────────────────────────────────────
function getSlug(entry, ...keys) {
  for (const k of keys) {
    if (entry[k] && typeof entry[k] === "string") return createSlug(entry[k]);
  }
  return null;
}

// ─── Build datasets (runs once at module init) ────────────────────────────────
const visaData = toArray(rawVisaData);

// De-duplicate slugs so we never emit the same URL twice.
function uniqueBySlug(entries, ...keys) {
  const seen = new Set();
  return entries.reduce((acc, e) => {
    const slug = getSlug(e, ...keys);
    if (slug && !seen.has(slug)) {
      seen.add(slug);
      acc.push({ ...e, _slug: slug });
    }
    return acc;
  }, []);
}

const uniqueVisa = uniqueBySlug(visaData, "slug", "country", "name", "title", "destination");
const uniqueStudent = uniqueBySlug(
  toArray(rawStudentVisaData),
  "slug", "country", "name", "title"
);

// ─── Static routes ────────────────────────────────────────────────────────────
export function getStaticRoutes() {
  const now = new Date().toISOString();

  const pages = [
    // Core
    ["/",                                                      1.0, "daily"],
    ["/about",                                                 0.8, "monthly"],
    ["/contact",                                               0.8, "monthly"],
    ["/careers",                                               0.7, "monthly"],
    ["/testimonials",                                          0.8, "weekly"],
    ["/blogs",                                                 0.9, "weekly"],
    ["/news-feeds",                                            0.8, "daily"],
    ["/offers",                                                0.9, "weekly"],
    ["/log-in",                                                0.5, "yearly"],
    ["/sign-up",                                               0.5, "yearly"],
    ["/terms-privacy-policy",                                  0.4, "yearly"],
    ["/naeem-hossen",                                          0.6, "monthly"],
    ["/our-leading-team",                                      0.6, "monthly"],
    ["/pdf-editor",                                            0.5, "monthly"],
    // Services
    ["/our-services",                                          0.9, "weekly"],
    ["/our-services/things-to-do",                             0.7, "monthly"],
    ["/our-services/tour-packages",                            0.8, "weekly"],
    ["/our-services/visa-services",                            0.9, "weekly"],
    ["/our-services/visa-services/student-visa-from-bangladesh", 0.9, "monthly"],
    ["/our-services/visa-services/tourist-visa-from-bangladesh", 0.9, "monthly"],
    ["/our-services/visa-services/work-visa-from-bangladesh",  0.9, "monthly"],
    // Static visa application pages
    ["/our-services/visa/albania-visa-application",            0.8, "monthly"],
    ["/our-services/visa/armenia-visa-application",            0.8, "monthly"],
    ["/our-services/visa/australia-visa-application",          0.8, "monthly"],
    ["/our-services/visa/azerbaijan-visa-application",         0.8, "monthly"],
    ["/our-services/visa/brazil-visa-application",             0.8, "monthly"],
    ["/our-services/visa/canada-visa-application",             0.8, "monthly"],
    ["/our-services/visa/china-visa-application",              0.8, "monthly"],
    ["/our-services/visa/cyprus-visa-application",             0.8, "monthly"],
    ["/our-services/visa/dubai-visa-application",              0.8, "monthly"],
    ["/our-services/visa/europe-visa-application",             0.8, "monthly"],
    ["/our-services/visa/georgia-visa-application",            0.8, "monthly"],
    ["/our-services/visa/germany-visa-application",            0.8, "monthly"],
    ["/our-services/visa/india-visa-application",              0.8, "monthly"],
    ["/our-services/visa/indonesia-visa-application",          0.8, "monthly"],
    ["/our-services/visa/japan-visa-application",              0.8, "monthly"],
    ["/our-services/visa/kosovo-visa-application",             0.8, "monthly"],
    ["/our-services/visa/malaysia-visa-application",           0.8, "monthly"],
    ["/our-services/visa/montenegro-visa-application",         0.8, "monthly"],
    ["/our-services/visa/morocco-visa-application",            0.8, "monthly"],
    ["/our-services/visa/portugal-visa-application",           0.8, "monthly"],
    ["/our-services/visa/qatar-visa-application",              0.8, "monthly"],
    ["/our-services/visa/russia-visa-application",             0.8, "monthly"],
    ["/our-services/visa/saudi-arabia-visa-application",       0.8, "monthly"],
    ["/our-services/visa/serbia-visa-application",             0.8, "monthly"],
    ["/our-services/visa/singapore-visa-application",          0.8, "monthly"],
    ["/our-services/visa/south-africa-visa-application",       0.8, "monthly"],
    ["/our-services/visa/south-korea-visa-application",        0.8, "monthly"],
    ["/our-services/visa/spain-visa-application",              0.8, "monthly"],
    ["/our-services/visa/srilanka-visa-application",           0.8, "monthly"],
    ["/our-services/visa/thailand-visa-application",           0.8, "monthly"],
    ["/our-services/visa/turkey-visa-application",             0.8, "monthly"],
    ["/our-services/visa/uk-visa-application",                 0.8, "monthly"],
    ["/our-services/visa/usa-visa-application",                0.8, "monthly"],
    // Study
    ["/study-abroad",                                          0.95, "weekly"],
    ["/study-abroad/student-visa",                             0.9,  "weekly"],
    // Visa hub
    ["/visa",                                                  0.95, "daily"],
    ["/visa/visa-guide",                                       0.9,  "daily"],
    // Travel resources
    ["/travel-resources",                                      0.8, "weekly"],
    ["/travel-resources/travel-document-generator",            0.7, "monthly"],
    ["/travel-resources/visa-checklist-generator",             0.7, "monthly"],
    ["/travel-resources/visa-processing-time-tracker",         0.8, "weekly"],
    // Regional contacts
    ["/contact/travel-agency-armenia",                         0.7, "monthly"],
    ["/contact/travel-agency-bangladesh",                      0.7, "monthly"],
    ["/contact/travel-agency-dubai",                           0.7, "monthly"],
    ["/contact/travel-agency-georgia",                         0.7, "monthly"],
    ["/online-travel-agency-bangladesh",                       0.8, "monthly"],
    // Other verticals
    ["/eammu-dairy-poultry",                                   0.6, "monthly"],
    ["/eammu-fashion",                                         0.6, "monthly"],
    ["/eammu-fashion/eammu-store",                             0.6, "monthly"],
    ["/eammu-social-responsibility",                           0.6, "monthly"],
    ["/eammu-textile-bangladesh",                              0.6, "monthly"],
    ["/web-development-digital-marketing",                     0.7, "monthly"],
    ["/flight-booking",                                        0.8, "monthly"],
    ["/event-management",                                      0.7, "monthly"],
    ["/target-ielts-immigration-center",                       0.8, "monthly"],
    ["/target-usa-visa-interview-preparation",                 0.8, "monthly"],
  ];

  // Student visa dynamic routes (small set — keep in static sitemap)
  const studentVisaUrls = uniqueStudent.map((e) => [
    `/study-abroad/student-visa/${e._slug}`, 0.85, "monthly",
  ]);

  // Country-level visa slug pages  e.g. /visa/turkey-visa
  const visaSlugUrls = uniqueVisa.map((e) => [
    `/visa/${e._slug}-visa`, 0.85, "weekly",
  ]);

  const all = [...pages, ...studentVisaUrls, ...visaSlugUrls];

  return all.map(([path, priority, changeFrequency]) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}

// ─── Visa guide routes  (/visa/visa-guide/[dest]-visa-for-[nat]) ──────────────
// Returns a FLAT array — callers chunk it themselves.
export function getVisaGuideRoutes() {
  const now = new Date().toISOString();
  const slugSet = new Set(uniqueVisa.map((e) => e._slug));
  const results = [];

  for (const dest of uniqueVisa) {
    for (const nat of uniqueVisa) {
      if (dest._slug === nat._slug) continue; // skip same-country
      results.push({
        url: `${BASE_URL}/visa/visa-guide/${dest._slug}-visa-for-${nat._slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }
  return results;
}

// ─── Processing-time routes (clean URL, no query params) ──────────────────────
// Pattern: /travel-resources/visa-processing-time-tracker/[dest]-processing-time-for-[nat]/[type]
//
// ⚠️  We use PATH SEGMENTS, not ?type= query params.
//     Googlebot does NOT reliably crawl or index URLs with query strings
//     discovered via sitemap — the canonical version of parameterised pages
//     is almost always the one without parameters.
//     See SEO notes section at the bottom of this file.
export function getProcessingTimeRoutes() {
  const now = new Date().toISOString();
  const results = [];

  for (const dest of uniqueVisa) {
    for (const nat of uniqueVisa) {
      if (dest._slug === nat._slug) continue;
      for (const type of VISA_TYPES) {
        results.push({
          url: `${BASE_URL}/travel-resources/visa-processing-time-tracker/${dest._slug}-processing-time-for-${nat._slug}/${type}`,
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.7,
        });
      }
    }
  }
  return results;
}

// ─── Chunking helper ──────────────────────────────────────────────────────────
export function chunk(array, size = CHUNK_SIZE) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

/*
 * ─── SEO NOTES (read before editing) ──────────────────────────────────────────
 *
 * 1. WHY QUERY PARAMS ARE REMOVED FROM SITEMAP
 *    Google's guidelines state that sitemaps should contain canonical URLs only.
 *    A URL like /page?type=sticker is almost never the canonical — either the
 *    page sets <link rel="canonical" href="/page/sticker"> or Google picks its
 *    own canonical.  Submitting ?type= variants wastes crawl budget and can
 *    cause duplicate-content penalties.
 *    → We replaced /tracker/[page]?type=sticker with /tracker/[page]/sticker
 *      (a real path segment that your Next.js dynamic route must also handle).
 *
 * 2. 140 K URLS — IS THAT TOO MANY?
 *    Google can *handle* it but will crawl slowly.  Prioritise:
 *    a) Ensure each URL returns unique, high-quality content.
 *    b) Use <priority> and <changefreq> accurately (not just guesses).
 *    c) Submit the sitemap index to GSC and monitor "Discovered — currently
 *       not indexed" vs "Indexed" ratios.  If the ratio is poor, prune URLs.
 *
 * 3. CRAWL STRATEGY
 *    - Add <lastModified> with a real timestamp (not "now") so Googlebot can
 *      skip unchanged pages.
 *    - Implement ISR (revalidate) on dynamic pages so Googlebot gets fast TTFBs.
 *    - Verify robots.txt allows all sitemap paths.
 *
 * 4. GOOGLE INDEXING TIPS
 *    - Use GSC → Sitemaps to submit all child sitemaps individually.
 *    - Use URL Inspection for a sample of each URL group.
 *    - Build internal links to visa-guide and processing-time pages so
 *      Googlebot discovers them via crawling too (sitemap alone isn't enough).
 */