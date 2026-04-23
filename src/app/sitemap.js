import rawVisaData from "@/app/data/countries.json";
import rawStudentVisaData from "@/app/data/studentvisadata.json";
import { createSlug } from "@/app/lib/utils";

// ── Configuration ──────────────────────────────────────────────────────────
const SITEMAP_LIMIT = 50000;
const BASE_URL = "https://eammu.com";

// ── Data Normalization Helpers ──────────────────────────────────────────────
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

const visaData = toArray(rawVisaData);
const visaTypes = ["sticker", "e-visa", "transit", "sticker-extended"];

// ── 1. Calculate Shards ─────────────────────────────────────────────────────
// This tells Next.js how many sitemaps to generate (id: 0, 1, 2, 3...)
export async function generateSitemaps() {
  // We estimate the total URLs to determine the number of sitemap chunks
  // Dynamic 1: Student Visa (~visaData.length)
  // Dynamic 2: Visa Slugs (~visaData.length)
  // Dynamic 3: Visa Guides (~visaData.length * visaData.length)
  // Dynamic 4: Processing Tracker (~visaData.length * visaData.length * 4)
  
  const totalDynamicCount = 
    visaData.length + 
    visaData.length + 
    (visaData.length * visaData.length) + 
    (visaData.length * visaData.length * 4);
    
  const numberOfSitemaps = Math.ceil(totalDynamicCount / SITEMAP_LIMIT);

  // Returns [{ id: 0 }, { id: 1 }, ...]
  return Array.from({ length: numberOfSitemaps }, (_, id) => ({ id }));
}

// ── 2. Main Sitemap Function ────────────────────────────────────────────────
export default async function sitemap({ id }) {
  const now = new Date();

  // A. Generate ALL dynamic routes first (In-memory)
  // Note: For 200k+ routes, we generate them and then slice based on 'id'
  
  const studentVisaRoutes = visaData.map((entry) => {
    const slug = getSlug(entry, "slug", "country", "name", "title");
    return slug ? { url: `/study-abroad/student-visa/${slug}`, priority: 0.85, changeFreq: "monthly" } : null;
  }).filter(Boolean);

  const visaSlugRoutes = visaData.map((entry) => {
    const slug = getSlug(entry, "slug", "country", "name", "title", "destination");
    return slug ? { url: `/visa/${slug}-visa`, priority: 0.85, changeFreq: "weekly" } : null;
  }).filter(Boolean);

  const visaGuideRoutes = visaData.flatMap((entry) => {
    const dest = getSlug(entry, "slug", "country", "name", "title", "destination");
    if (!dest) return [];
    return visaData.map((country) => {
      const nat = createSlug(country.name || country.country || country.title);
      if (!nat || nat === dest) return null;
      return { url: `/visa/visa-guide/${dest}-visa-for-${nat}`, priority: 0.8, changeFreq: "monthly" };
    }).filter(Boolean);
  });

  const processingTimeRoutes = visaData.flatMap((entry) => {
    const dest = getSlug(entry, "slug", "country", "name", "title", "destination");
    if (!dest) return [];
    return visaData.flatMap((country) => {
      const nat = createSlug(country.name || country.country || country.title);
      if (!nat || nat === dest) return [];
      return visaTypes.map((type) => ({
        url: `/travel-resources/visa-processing-time-tracker/${dest}-national-visa-processing-time-for-${nat}?type=${type}`,
        priority: 0.7,
        changeFreq: "weekly",
      }));
    });
  });

  // Combine all dynamic routes
  const allDynamicRoutes = [
    ...studentVisaRoutes,
    ...visaSlugRoutes,
    ...visaGuideRoutes,
    ...processingTimeRoutes,
  ];

  // B. Logic for Slicing and Static Routes
  let currentChunk = [];

  if (id === 0) {
    // Page 0 includes Static Routes + the first chunk of dynamic ones
    const staticRoutes = [
      { url: "/", priority: 1.0, changeFreq: "daily" },
      { url: "/about", priority: 0.8, changeFreq: "monthly" },
      { url: "/contact", priority: 0.8, changeFreq: "monthly" },
      { url: "/blogs", priority: 0.9, changeFreq: "weekly" },
      { url: "/visa", priority: 0.95, changeFreq: "daily" },
      // ... (Add your other static routes here as needed)
    ];
    
    const sliceEnd = SITEMAP_LIMIT - staticRoutes.length;
    currentChunk = [...staticRoutes, ...allDynamicRoutes.slice(0, sliceEnd)];
  } else {
    // Subsequent pages only contain dynamic routes
    const start = id * SITEMAP_LIMIT;
    const end = start + SITEMAP_LIMIT;
    currentChunk = allDynamicRoutes.slice(start, end);
  }

  // C. Final Formattifsdng
  return currentChunk.map((route) => ({
    url: `${BASE_URL}${route.url.startsWith("/") ? route.url : `/${route.url}`}`,
    lastModified: now,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}