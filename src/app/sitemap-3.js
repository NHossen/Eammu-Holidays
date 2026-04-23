// app/sitemap-3.js
// Serves: /sitemap/3.xml      (id=0, pages 1–50000)
//         /sitemap/3.xml?id=1 (id=1, pages 50001–end)
// Contains: processingTimeRoutes (N*(N-1)*4 visa types)

import rawVisaData from "@/app/data/countries.json";
import { createSlug } from "@/app/lib/utils";

const CHUNK_SIZE = 50_000;
const visaTypes = ["sticker", "e-visa", "transit", "sticker-extended"];

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
const PAIRS = N * (N - 1);
const TOTAL = PAIRS * visaTypes.length;

const slugs = visaData.map(
  (e) => createSlug(e.slug || e.country || e.name || e.title || e.destination || "")
);

function indexToUrl(index) {
  const typeIndex = index % visaTypes.length;
  const pairIndex = Math.floor(index / visaTypes.length);

  const row = Math.floor(pairIndex / (N - 1));
  let col = pairIndex % (N - 1);
  if (col >= row) col += 1;

  const dest = slugs[row];
  const nat = slugs[col];
  if (!dest || !nat) return null;

  const type = visaTypes[typeIndex];
  return `/travel-resources/visa-processing-time-tracker/${dest}-national-visa-processing-time-for-${nat}?type=${type}`;
}

export function generateSitemaps() {
  const count = Math.ceil(TOTAL / CHUNK_SIZE);
  return Array.from({ length: count }, (_, i) => ({ id: i }));
}

export default function sitemap({ id = 0 } = {}) {
  const baseUrl = "https://eammu.com";
  const now = new Date();

  const start = id * CHUNK_SIZE;
  const end = Math.min(start + CHUNK_SIZE, TOTAL);
  const entries = [];

  for (let i = start; i < end; i++) {
    const url = indexToUrl(i);
    if (!url) continue;
    entries.push({
      url: `${baseUrl}${url}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  return entries;
}