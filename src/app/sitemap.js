// app/sitemap.js
// Serves:
//   /sitemap.xml       → id=0  (static + studentVisa + visaSlug)
//   /sitemap/1.xml     → id=1  (visaGuide pages 1–50000)
//   /sitemap/2.xml     → id=2  (visaGuide pages 50001–end)
//   /sitemap/3.xml     → id=3  (processingTime pages 1–50000)
//   /sitemap/4.xml     → id=4  (processingTime pages 50001–end)

import rawVisaData from "@/app/data/countries.json";
import { createSlug } from "@/app/lib/utils";

const CHUNK_SIZE = 50_000;
const visaTypes = ["sticker", "e-visa", "transit", "sticker-extended"];

// ── Safely convert JSON → flat array ──────────────────────────────────────
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

// Pre-build slugs once
const slugs = visaData.map((e) =>
  createSlug(e.slug || e.country || e.name || e.title || e.destination || "")
);

// ── Counts ─────────────────────────────────────────────────────────────────
const TOTAL_PAIRS = N * (N - 1);
const TOTAL_PROCESSING = TOTAL_PAIRS * visaTypes.length;

// ── Static routes ──────────────────────────────────────────────────────────
function buildStaticRoutes() {
  const baseUrl = "https://eammu.com";
  const now = new Date();

  const staticUrls = [
    { url: "/", priority: 1.0, changeFreq: "daily" },
    { url: "/about", priority: 0.8, changeFreq: "monthly" },
    { url: "/contact", priority: 0.8, changeFreq: "monthly" },
    { url: "/careers", priority: 0.7, changeFreq: "monthly" },
    { url: "/testimonials", priority: 0.8, changeFreq: "weekly" },
    { url: "/blogs", priority: 0.9, changeFreq: "weekly" },
    { url: "/news-feeds", priority: 0.8, changeFreq: "daily" },
    { url: "/offers", priority: 0.9, changeFreq: "weekly" },
    { url: "/log-in", priority: 0.5, changeFreq: "yearly" },
    { url: "/sign-up", priority: 0.5, changeFreq: "yearly" },
    { url: "/terms-privacy-policy", priority: 0.4, changeFreq: "yearly" },
    { url: "/naeem-hossen", priority: 0.6, changeFreq: "monthly" },
    { url: "/our-leading-team", priority: 0.6, changeFreq: "monthly" },
    { url: "/pdf-editor", priority: 0.5, changeFreq: "monthly" },
    { url: "/our-services", priority: 0.9, changeFreq: "weekly" },
    { url: "/our-services/things-to-do", priority: 0.7, changeFreq: "monthly" },
    { url: "/our-services/tour-packages", priority: 0.8, changeFreq: "weekly" },
    { url: "/our-services/visa-services", priority: 0.9, changeFreq: "weekly" },
    { url: "/our-services/visa-services/student-visa-from-bangladesh", priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa-services/tourist-visa-from-bangladesh", priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa-services/work-visa-from-bangladesh", priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/albania-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/armenia-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/australia-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/azerbaijan-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/brazil-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/canada-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/china-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/cyprus-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/dubai-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/europe-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/georgia-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/germany-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/india-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/indonesia-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/japan-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/kosovo-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/malaysia-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/montenegro-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/morocco-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/portugal-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/qatar-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/russia-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/saudi-arabia-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/serbia-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/singapore-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/south-africa-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/south-korea-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/spain-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/srilanka-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/thailand-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/turkey-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/uk-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/usa-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/study-abroad", priority: 0.95, changeFreq: "weekly" },
    { url: "/study-abroad/student-visa", priority: 0.9, changeFreq: "weekly" },
    { url: "/visa", priority: 0.95, changeFreq: "daily" },
    { url: "/visa/visa-guide", priority: 0.9, changeFreq: "daily" },
    { url: "/travel-resources", priority: 0.8, changeFreq: "weekly" },
    { url: "/travel-resources/travel-document-generator", priority: 0.7, changeFreq: "monthly" },
    { url: "/travel-resources/visa-checklist-generator", priority: 0.7, changeFreq: "monthly" },
    { url: "/travel-resources/visa-processing-time-tracker", priority: 0.8, changeFreq: "weekly" },
    { url: "/contact/travel-agency-armenia", priority: 0.7, changeFreq: "monthly" },
    { url: "/contact/travel-agency-bangladesh", priority: 0.7, changeFreq: "monthly" },
    { url: "/contact/travel-agency-dubai", priority: 0.7, changeFreq: "monthly" },
    { url: "/contact/travel-agency-georgia", priority: 0.7, changeFreq: "monthly" },
    { url: "/online-travel-agency-bangladesh", priority: 0.8, changeFreq: "monthly" },
    { url: "/eammu-dairy-poultry", priority: 0.6, changeFreq: "monthly" },
    { url: "/eammu-fashion", priority: 0.6, changeFreq: "monthly" },
    { url: "/eammu-fashion/eammu-store", priority: 0.6, changeFreq: "monthly" },
    { url: "/eammu-social-responsibility", priority: 0.6, changeFreq: "monthly" },
    { url: "/eammu-textile-bangladesh", priority: 0.6, changeFreq: "monthly" },
    { url: "/web-development-digital-marketing", priority: 0.7, changeFreq: "monthly" },
    { url: "/flight-booking", priority: 0.8, changeFreq: "monthly" },
    { url: "/event-management", priority: 0.7, changeFreq: "monthly" },
    { url: "/target-ielts-immigration-center", priority: 0.8, changeFreq: "monthly" },
    { url: "/target-usa-visa-interview-preparation", priority: 0.8, changeFreq: "monthly" },
  ];

  // studentVisa routes
  const studentVisaRoutes = visaData
    .map((entry) => {
      const slug = slugs[visaData.indexOf(entry)];
      if (!slug) return null;
      return { url: `/study-abroad/student-visa/${slug}`, priority: 0.85, changeFreq: "monthly" };
    })
    .filter(Boolean);

  // visaSlug routes
  const visaSlugRoutes = visaData
    .map((entry, i) => {
      const slug = slugs[i];
      if (!slug) return null;
      return { url: `/visa/${slug}-visa`, priority: 0.85, changeFreq: "weekly" };
    })
    .filter(Boolean);

  return [...staticUrls, ...studentVisaRoutes, ...visaSlugRoutes].map((r) => ({
    url: `${baseUrl}${r.url.startsWith("/") ? r.url : `/${r.url}`}`,
    lastModified: now,
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }));
}

// ── visaGuide: convert flat index → URL ───────────────────────────────────
function visaGuideUrl(index) {
  const row = Math.floor(index / (N - 1));
  let col = index % (N - 1);
  if (col >= row) col += 1;
  const dest = slugs[row];
  const nat = slugs[col];
  if (!dest || !nat) return null;
  return `https://eammu.com/visa/visa-guide/${dest}-visa-for-${nat}`;
}

// ── processingTime: convert flat index → URL ──────────────────────────────
function processingTimeUrl(index) {
  const typeIndex = index % visaTypes.length;
  const pairIndex = Math.floor(index / visaTypes.length);
  const row = Math.floor(pairIndex / (N - 1));
  let col = pairIndex % (N - 1);
  if (col >= row) col += 1;
  const dest = slugs[row];
  const nat = slugs[col];
  if (!dest || !nat) return null;
  return `https://eammu.com/travel-resources/visa-processing-time-tracker/${dest}-national-visa-processing-time-for-${nat}?type=${visaTypes[typeIndex]}`;
}

// ── generateSitemaps — tell Next.js how many chunks total ─────────────────
export function generateSitemaps() {
  const visaGuideChunks = Math.ceil(TOTAL_PAIRS / CHUNK_SIZE);
  const processingChunks = Math.ceil(TOTAL_PROCESSING / CHUNK_SIZE);

  // id=0        → static routes
  // id=1..vG    → visaGuide chunks
  // id=vG+1..   → processingTime chunks
  const total = 1 + visaGuideChunks + processingChunks;
  return Array.from({ length: total }, (_, i) => ({ id: i }));
}

// ── Default export ─────────────────────────────────────────────────────────
export default function sitemap({ id = 0 } = {}) {
  const now = new Date();
  const visaGuideChunks = Math.ceil(TOTAL_PAIRS / CHUNK_SIZE);

  // id=0 → static + studentVisa + visaSlug
  if (id === 0) {
    return buildStaticRoutes();
  }

  // id=1..visaGuideChunks → visaGuide
  if (id <= visaGuideChunks) {
    const chunkIndex = id - 1;
    const start = chunkIndex * CHUNK_SIZE;
    const end = Math.min(start + CHUNK_SIZE, TOTAL_PAIRS);
    const entries = [];
    for (let i = start; i < end; i++) {
      const url = visaGuideUrl(i);
      if (!url) continue;
      entries.push({ url, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
    }
    return entries;
  }

  // id=visaGuideChunks+1.. → processingTime
  const chunkIndex = id - 1 - visaGuideChunks;
  const start = chunkIndex * CHUNK_SIZE;
  const end = Math.min(start + CHUNK_SIZE, TOTAL_PROCESSING);
  const entries = [];
  for (let i = start; i < end; i++) {
    const url = processingTimeUrl(i);
    if (!url) continue;
    entries.push({ url, lastModified: now, changeFrequency: "weekly", priority: 0.7 });
  }
  return entries;
}