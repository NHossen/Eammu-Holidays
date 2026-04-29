// app/sitemap/visa-guide/[__sitemap_id__]/sitemap.js
//
// ✅ CORRECT: This file MUST be named "sitemap.js" (not route.js).
// Next.js App Router paginated sitemaps use sitemap.js + generateSitemaps().
//
// Handles: /visa/visa-guide/[dest]-visa-for-[nat]
// Each page = up to 50,000 URLs (Google's hard limit).
//
// URLs served at:
//   https://eammu.com/sitemap/visa-guide/0.xml
//   https://eammu.com/sitemap/visa-guide/1.xml
//   ... auto-scales based on your data size

import rawVisaData from "@/app/data/countries.json";
import { createSlug } from "@/app/lib/utils";

const BASE_URL   = "https://eammu.com";
const CHUNK_SIZE = 50_000;

// ── Safely convert JSON value → flat array ─────────────────────────────────
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

function getSlug(entry, ...keys) {
  for (const key of keys) {
    if (entry[key] && typeof entry[key] === "string") {
      return createSlug(entry[key]);
    }
  }
  return "";
}

// ── Build the full URL list once at module load ────────────────────────────
function buildAllVisaGuideUrls() {
  const visaData = toArray(rawVisaData);
  const urls = [];

  for (const entry of visaData) {
    const dest = getSlug(entry, "slug", "country", "name", "title", "destination");
    if (!dest) continue;

    for (const country of visaData) {
      const nat = getSlug(country, "slug", "country", "name", "title");
      if (!nat || nat === dest) continue;

      urls.push(`${BASE_URL}/visa/visa-guide/${dest}-visa-for-${nat}`);
    }
  }

  return urls;
}

const ALL_URLS    = buildAllVisaGuideUrls();
const TOTAL_PAGES = Math.ceil(ALL_URLS.length / CHUNK_SIZE);

// ── generateSitemaps — tells Next.js how many pages exist ─────────────────
export function generateSitemaps() {
  return Array.from({ length: TOTAL_PAGES }, (_, i) => ({ id: String(i) }));
}

// ── default export — returns the URL slice for this page ──────────────────
export default async function sitemap({ params }) {
  const page  = Number(await params.id ?? 0);
  const start = page * CHUNK_SIZE;
  const end   = start + CHUNK_SIZE;
  const slice = ALL_URLS.slice(start, end);
  const now   = new Date();

  return slice.map((url) => ({
    url,
    lastModified:    now,
    changeFrequency: "monthly",
    priority:        0.8,
  }));
}