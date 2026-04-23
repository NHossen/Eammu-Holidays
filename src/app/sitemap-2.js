// app/sitemap-2.js
// Contains: visaGuideRoutes (~90,000 pages)
//
// Split strategy:
//   id=0 → first 50,000 entries
//   id=1 → remaining entries (up to 40,000)
//
// Next.js will expose these as:
//   /sitemap/2        (id=0, pages 1–50000)
//   /sitemap/2?id=1   (id=1, pages 50001–end)
//
// Usage: Next.js App Router requires both generateSitemaps() and the default
//        export to accept a { id } param when you want multiple pages.

import rawVisaData    from "@/app/data/countries.json";
import { createSlug } from "@/app/lib/utils";

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

const visaData = toArray(rawVisaData);

function getSlug(entry, ...keys) {
  for (const key of keys) {
    if (entry[key] && typeof entry[key] === "string") {
      return createSlug(entry[key]);
    }
  }
  return "";
}

// ── Build the full visaGuideRoutes array ──────────────────────────────────
// Pattern: /visa/visa-guide/[dest]-visa-for-[nat]
function buildVisaGuideRoutes() {
  return visaData.flatMap((entry) => {
    const dest = getSlug(entry, "slug", "country", "name", "title", "destination");
    if (!dest) return [];

    return visaData
      .map((country) => {
        const nat = createSlug(
          country.name || country.country || country.title || ""
        );
        if (!nat || nat === dest) return null;
        return {
          url: `/visa/visa-guide/${dest}-visa-for-${nat}`,
          priority: 0.8,
          changeFreq: "monthly",
        };
      })
      .filter(Boolean);
  });
}

// ── Tell Next.js how many sitemap pages to generate ───────────────────────
export function generateSitemaps() {
  const total = buildVisaGuideRoutes().length;
  const count = Math.ceil(total / CHUNK_SIZE);
  // Returns [{id:0}, {id:1}, ...] — one per chunk
  return Array.from({ length: count }, (_, i) => ({ id: i }));
}

// ── Default export receives { id } from Next.js ───────────────────────────
export default function sitemap({ id = 0 } = {}) {
  const baseUrl = "https://eammu.com";
  const now     = new Date();

  const allRoutes = buildVisaGuideRoutes();

  const start = id * CHUNK_SIZE;
  const chunk = allRoutes.slice(start, start + CHUNK_SIZE);

  return chunk.map((route) => ({
    url: `${baseUrl}${route.url.startsWith("/") ? route.url : `/${route.url}`}`,
    lastModified: now,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}