// app/sitemap.js — Next.js App Router
// ─────────────────────────────────────────────────────────────────────────────
// DYNAMIC SPLIT SITEMAP — single file, zero extra route.js files needed.
//
// Next.js supports sitemap splitting natively via generateSitemaps() + id param.
// Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#generating-multiple-sitemaps
//
// How it works:
//   generateSitemaps() returns [{id:0},{id:1},{id:2},...] — one per chunk.
//   Next.js automatically creates:
//     /sitemap/0.xml  → chunk 0
//     /sitemap/1.xml  → chunk 1
//     /sitemap/2.xml  → chunk 2
//   AND a root /sitemap.xml that acts as the sitemapindex.
//
// You only need THIS ONE FILE. Nothing else to create.
// ─────────────────────────────────────────────────────────────────────────────

import rawVisaData        from "@/app/data/countries.json";
import rawStudentVisaData from "@/app/data/studentvisadata.json";
import { createSlug }     from "@/app/lib/utils";

// ── Config ────────────────────────────────────────────────────────────────────
const BASE_URL   = "https://eammu.com";
const CHUNK_SIZE = 45_000; // safely under Google's 50k hard limit per sitemap
const VISA_TYPES = ["sticker", "e-visa", "transit", "sticker-extended"];

// ── JSON normaliser ───────────────────────────────────────────────────────────
function toArray(json) {
  if (Array.isArray(json)) return json;
  if (json && typeof json === "object") {
    const commonKeys = ["data", "countries", "visas", "items", "list", "results"];
    for (const key of commonKeys) {
      if (Array.isArray(json[key])) return json[key];
    }
    const arrayKey = Object.keys(json).find((k) => Array.isArray(json[k]));
    if (arrayKey) return json[arrayKey];
    return Object.values(json);
  }
  return [];
}

// ── Slug sanitizer ────────────────────────────────────────────────────────────
// Critical: country names like "Côte d'Ivoire" or "Bosnia & Herzegovina"
// produce raw ' and & in slugs which BREAK XML entirely.
// This guarantees only [a-z0-9-] survives into any URL.
function sanitizeSlug(raw) {
  return String(raw ?? "")
    .normalize("NFD")               // decompose accented chars: é → e + ́
    .replace(/[\u0300-\u036f]/g, "") // strip combining diacritics
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")   // everything non-alphanumeric → hyphen
    .replace(/-{2,}/g, "-")         // collapse consecutive hyphens
    .replace(/^-+|-+$/g, "");       // trim leading/trailing hyphens
}

function getSlug(entry, ...keys) {
  for (const key of keys) {
    if (entry[key] && typeof entry[key] === "string") {
      return sanitizeSlug(createSlug(entry[key]));
    }
  }
  return "";
}

// ── Build unique country list once (module-level, not per-request) ────────────
const visaData        = toArray(rawVisaData);
const studentVisaData = toArray(rawStudentVisaData);

function makeUnique(entries, ...keys) {
  const seen = new Set();
  const out  = [];
  for (const e of entries) {
    const slug = getSlug(e, ...keys);
    if (slug && !seen.has(slug)) {
      seen.add(slug);
      out.push({ ...e, _slug: slug });
    }
  }
  return out;
}

const uniqueVisa    = makeUnique(visaData,        "slug", "country", "name", "title", "destination");
const uniqueStudent = makeUnique(studentVisaData, "slug", "country", "name", "title");

// ── Build ALL routes (called once, results cached in module scope) ─────────────
function buildAllRoutes() {
  const today = new Date().toISOString().slice(0, 10);

  // 1. Static pages
  const staticRoutes = [
    ["/",                                                       1.0, "daily"  ],
    ["/about",                                                  0.8, "monthly"],
    ["/contact",                                                0.8, "monthly"],
    ["/careers",                                                0.7, "monthly"],
    ["/testimonials",                                           0.8, "weekly" ],
    ["/blogs",                                                  0.9, "weekly" ],
    ["/news-feeds",                                             0.8, "daily"  ],
    ["/offers",                                                 0.9, "weekly" ],
    ["/log-in",                                                 0.5, "yearly" ],
    ["/sign-up",                                                0.5, "yearly" ],
    ["/terms-privacy-policy",                                   0.4, "yearly" ],
    ["/naeem-hossen",                                           0.6, "monthly"],
    ["/our-leading-team",                                       0.6, "monthly"],
    ["/pdf-editor",                                             0.5, "monthly"],
    ["/our-services",                                           0.9, "weekly" ],
    ["/our-services/things-to-do",                              0.7, "monthly"],
    ["/our-services/tour-packages",                             0.8, "weekly" ],
    ["/our-services/visa-services",                             0.9, "weekly" ],
    ["/our-services/visa-services/student-visa-from-bangladesh",0.9, "monthly"],
    ["/our-services/visa-services/tourist-visa-from-bangladesh",0.9, "monthly"],
    ["/our-services/visa-services/work-visa-from-bangladesh",   0.9, "monthly"],
    ["/our-services/visa/albania-visa-application",             0.8, "monthly"],
    ["/our-services/visa/armenia-visa-application",             0.8, "monthly"],
    ["/our-services/visa/australia-visa-application",           0.8, "monthly"],
    ["/our-services/visa/azerbaijan-visa-application",          0.8, "monthly"],
    ["/our-services/visa/brazil-visa-application",              0.8, "monthly"],
    ["/our-services/visa/canada-visa-application",              0.8, "monthly"],
    ["/our-services/visa/china-visa-application",               0.8, "monthly"],
    ["/our-services/visa/cyprus-visa-application",              0.8, "monthly"],
    ["/our-services/visa/dubai-visa-application",               0.8, "monthly"],
    ["/our-services/visa/europe-visa-application",              0.8, "monthly"],
    ["/our-services/visa/georgia-visa-application",             0.8, "monthly"],
    ["/our-services/visa/germany-visa-application",             0.8, "monthly"],
    ["/our-services/visa/india-visa-application",               0.8, "monthly"],
    ["/our-services/visa/indonesia-visa-application",           0.8, "monthly"],
    ["/our-services/visa/japan-visa-application",               0.8, "monthly"],
    ["/our-services/visa/kosovo-visa-application",              0.8, "monthly"],
    ["/our-services/visa/malaysia-visa-application",            0.8, "monthly"],
    ["/our-services/visa/montenegro-visa-application",          0.8, "monthly"],
    ["/our-services/visa/morocco-visa-application",             0.8, "monthly"],
    ["/our-services/visa/portugal-visa-application",            0.8, "monthly"],
    ["/our-services/visa/qatar-visa-application",               0.8, "monthly"],
    ["/our-services/visa/russia-visa-application",              0.8, "monthly"],
    ["/our-services/visa/saudi-arabia-visa-application",        0.8, "monthly"],
    ["/our-services/visa/serbia-visa-application",              0.8, "monthly"],
    ["/our-services/visa/singapore-visa-application",           0.8, "monthly"],
    ["/our-services/visa/south-africa-visa-application",        0.8, "monthly"],
    ["/our-services/visa/south-korea-visa-application",         0.8, "monthly"],
    ["/our-services/visa/spain-visa-application",               0.8, "monthly"],
    ["/our-services/visa/srilanka-visa-application",            0.8, "monthly"],
    ["/our-services/visa/thailand-visa-application",            0.8, "monthly"],
    ["/our-services/visa/turkey-visa-application",              0.8, "monthly"],
    ["/our-services/visa/uk-visa-application",                  0.8, "monthly"],
    ["/our-services/visa/usa-visa-application",                 0.8, "monthly"],
    ["/study-abroad",                                           0.95,"weekly" ],
    ["/study-abroad/student-visa",                              0.9, "weekly" ],
    ["/visa",                                                   0.95,"daily"  ],
    ["/visa/visa-guide",                                        0.9, "daily"  ],
    ["/travel-resources",                                       0.8, "weekly" ],
    ["/travel-resources/travel-document-generator",             0.7, "monthly"],
    ["/travel-resources/visa-checklist-generator",              0.7, "monthly"],
    ["/travel-resources/visa-processing-time-tracker",          0.8, "weekly" ],
    ["/contact/travel-agency-armenia",                          0.7, "monthly"],
    ["/contact/travel-agency-bangladesh",                       0.7, "monthly"],
    ["/contact/travel-agency-dubai",                            0.7, "monthly"],
    ["/contact/travel-agency-georgia",                          0.7, "monthly"],
    ["/online-travel-agency-bangladesh",                        0.8, "monthly"],
    ["/eammu-dairy-poultry",                                    0.6, "monthly"],
    ["/eammu-fashion",                                          0.6, "monthly"],
    ["/eammu-fashion/eammu-store",                              0.6, "monthly"],
    ["/eammu-social-responsibility",                            0.6, "monthly"],
    ["/eammu-textile-bangladesh",                               0.6, "monthly"],
    ["/web-development-digital-marketing",                      0.7, "monthly"],
    ["/flight-booking",                                         0.8, "monthly"],
    ["/event-management",                                       0.7, "monthly"],
    ["/target-ielts-immigration-center",                        0.8, "monthly"],
    ["/target-usa-visa-interview-preparation",                  0.8, "monthly"],
  ].map(([path, priority, changeFrequency]) => ({
    url: `${BASE_URL}${path}`,
    lastModified: today,
    changeFrequency,
    priority,
  }));

  // 2. Student visa pages
  const studentVisaRoutes = uniqueStudent.map((e) => ({
    url: `${BASE_URL}/study-abroad/student-visa/${e._slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // 3. Visa slug pages  e.g. /visa/turkey-visa
  const visaSlugRoutes = uniqueVisa.map((e) => ({
    url: `${BASE_URL}/visa/${e._slug}-visa`,
    lastModified: today,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // 4. Visa guide routes  e.g. /visa/visa-guide/turkey-visa-for-bangladesh
  const visaGuideRoutes = [];
  for (const dest of uniqueVisa) {
    for (const nat of uniqueVisa) {
      if (dest._slug === nat._slug) continue;
      visaGuideRoutes.push({
        url: `${BASE_URL}/visa/visa-guide/${dest._slug}-visa-for-${nat._slug}`,
        lastModified: today,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  // 5. Processing-time routes  (clean path segments — NO ?type= query params)
  // URL: /travel-resources/visa-processing-time-tracker/[dest]-processing-time-for-[nat]/[type]
  const processingTimeRoutes = [];
  for (const dest of uniqueVisa) {
    for (const nat of uniqueVisa) {
      if (dest._slug === nat._slug) continue;
      for (const type of VISA_TYPES) {
        processingTimeRoutes.push({
          url: `${BASE_URL}/travel-resources/visa-processing-time-tracker/${dest._slug}-national-visa-processing-time-for-${nat._slug}?type=${type}`,
          lastModified: today,
          changeFrequency: "weekly",
          priority: 0.7,
        });
      }
    }
  }

  return [
    ...staticRoutes,
    ...studentVisaRoutes,
    ...visaSlugRoutes,
    ...visaGuideRoutes,
    ...processingTimeRoutes,
  ];
}

// Cache result at module level so it's computed only once per Lambda cold start
let _cachedRoutes = null;
function getAllRoutes() {
  if (!_cachedRoutes) _cachedRoutes = buildAllRoutes();
  return _cachedRoutes;
}

// ── Chunk helper ──────────────────────────────────────────────────────────────
function chunk(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

// ── generateSitemaps ──────────────────────────────────────────────────────────
// Next.js calls this to know how many sitemap files to create.
// Each { id } becomes one /sitemap/[id].xml file.
// The root /sitemap.xml is automatically a sitemapindex pointing to them all.
export async function generateSitemaps() {
  const total  = getAllRoutes().length;
  const count  = Math.max(1, Math.ceil(total / CHUNK_SIZE));
  // Returns [{id:0}, {id:1}, {id:2}, ...] — one per chunk
  return Array.from({ length: count }, (_, i) => ({ id: i }));
}

// ── sitemap() — called once per id ───────────────────────────────────────────
// Next.js passes the { id } from generateSitemaps() and expects an array
// of URL objects back. It handles all the XML building automatically.
export default function sitemap({ id }) {
  const allChunks = chunk(getAllRoutes(), CHUNK_SIZE);
  const myChunk   = allChunks[id] ?? [];
  return myChunk;
}