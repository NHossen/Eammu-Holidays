// app/sitemap-2.js
// Serves: /sitemap/2.xml      (id=0, pages 1–50000)
//         /sitemap/2.xml?id=1 (id=1, pages 50001–end)
// Contains: visaGuideRoutes (~N² country pairs)

import rawVisaData from "@/app/data/countries.json";
import { createSlug } from "@/app/lib/utils";

const CHUNK_SIZE = 50_000;

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
const N = visaData.length;
// Total pairs = N * (N - 1)  [excluding same-country pairs]
const TOTAL_PAIRS = N * (N - 1);

// Pre-build slug array once at module load (strings only, cheap)
const slugs = visaData.map(
  (e) => createSlug(e.slug || e.country || e.name || e.title || e.destination || "")
);

// ── Convert a flat pair index → URL without building the full array ────────
function pairIndexToUrl(index) {
  // index runs 0..(N*(N-1)-1) skipping i===j
  const row = Math.floor(index / (N - 1));
  let col = index % (N - 1);
  if (col >= row) col += 1; // skip diagonal (same country)
  const dest = slugs[row];
  const nat = slugs[col];
  if (!dest || !nat) return null;
  return `/visa/visa-guide/${dest}-visa-for-${nat}`;
}

export function generateSitemaps() {
  const count = Math.ceil(TOTAL_PAIRS / CHUNK_SIZE);
  return Array.from({ length: count }, (_, i) => ({ id: i }));
}

export default function sitemap({ id = 0 } = {}) {
  const baseUrl = "https://eammu.com";
  const now = new Date();

  const start = id * CHUNK_SIZE;
  const end = Math.min(start + CHUNK_SIZE, TOTAL_PAIRS);
  const entries = [];

  for (let i = start; i < end; i++) {
    const url = pairIndexToUrl(i);
    if (!url) continue;
    entries.push({
      url: `${baseUrl}${url}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries;
}