// app/sitemap.js  — single file, handles ALL pages via generateSitemaps()
//
// URL map:
//   /sitemap.xml     (id=0)  → static + studentVisa + visaSlug
//   /sitemap/1.xml   (id=1)  → visaGuide pages      1 – 50,000
//   /sitemap/2.xml   (id=2)  → visaGuide pages 50,001 – 100,000
//   /sitemap/3.xml   (id=3)  → visaGuide pages 100,001 – end
//   /sitemap/4.xml   (id=4)  → processingTime pages      1 – 50,000
//   /sitemap/5.xml   (id=5)  → processingTime pages 50,001 – 100,000
//   /sitemap/6.xml   (id=6)  → processingTime pages 100,001 – end
//   (Next.js auto-adds more IDs if your data grows beyond 3 chunks each)

import rawVisaData    from "@/app/data/countries.json";
import { createSlug } from "@/app/lib/utils";

const CHUNK_SIZE = 50_000;
const BASE_URL   = "https://eammu.com";
const VISA_TYPES = ["sticker", "e-visa", "transit", "sticker-extended"];

// ─────────────────────────────────────────────────────────────────────────────
// 1. Normalize JSON → flat array (handles array or object wrapper shapes)
// ─────────────────────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────────────────
// 2. Build slug list ONCE at module load (cheap, just strings)
// ─────────────────────────────────────────────────────────────────────────────
const visaData = toArray(rawVisaData);
const N        = visaData.length;

// One slug per country entry — tries multiple field names
const SLUGS = visaData.map((e) =>
  createSlug(e.slug || e.country || e.name || e.title || e.destination || "")
).filter(Boolean); // remove any empty strings

// ─────────────────────────────────────────────────────────────────────────────
// 3. Pair count math
//    visaGuide:      N×(N-1)     pairs   (dest ≠ nationality)
//    processingTime: N×(N-1)×4  entries  (same pairs × 4 visa types)
// ─────────────────────────────────────────────────────────────────────────────
const SLUG_COUNT      = SLUGS.length;           // may be < N if some entries had no name
const TOTAL_GUIDE     = SLUG_COUNT * (SLUG_COUNT - 1);
const TOTAL_PROC      = TOTAL_GUIDE * VISA_TYPES.length;

const GUIDE_CHUNKS = Math.ceil(TOTAL_GUIDE / CHUNK_SIZE);
const PROC_CHUNKS  = Math.ceil(TOTAL_PROC  / CHUNK_SIZE);

// ─────────────────────────────────────────────────────────────────────────────
// 4. Index-to-URL converters  (O(1), no big array ever built)
// ─────────────────────────────────────────────────────────────────────────────

// visaGuide flat index  → /visa/visa-guide/[dest]-visa-for-[nat]
function guideUrl(index) {
  // Flatten N×(N-1) matrix (skipping diagonal) into a 1-D index
  const row = Math.floor(index / (SLUG_COUNT - 1));
  let   col = index % (SLUG_COUNT - 1);
  if (col >= row) col += 1;           // skip same-country diagonal
  const dest = SLUGS[row];
  const nat  = SLUGS[col];
  if (!dest || !nat) return null;
  return `${BASE_URL}/visa/visa-guide/${dest}-visa-for-${nat}`;
}

// processingTime flat index → /travel-resources/…?type=…
function procUrl(index) {
  const typeIdx  = index % VISA_TYPES.length;
  const pairIdx  = Math.floor(index / VISA_TYPES.length);
  const row      = Math.floor(pairIdx / (SLUG_COUNT - 1));
  let   col      = pairIdx % (SLUG_COUNT - 1);
  if (col >= row) col += 1;
  const dest = SLUGS[row];
  const nat  = SLUGS[col];
  if (!dest || !nat) return null;
  return `${BASE_URL}/travel-resources/visa-processing-time-tracker/${dest}-national-visa-processing-time-for-${nat}?type=${VISA_TYPES[typeIdx]}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. Static routes (id = 0 only)
// ─────────────────────────────────────────────────────────────────────────────
function buildStaticEntries(now) {
  const staticUrls = [
    { url: "/",                                                          priority: 1.0, cf: "daily"   },
    { url: "/about",                                                     priority: 0.8, cf: "monthly" },
    { url: "/contact",                                                   priority: 0.8, cf: "monthly" },
    { url: "/careers",                                                   priority: 0.7, cf: "monthly" },
    { url: "/testimonials",                                              priority: 0.8, cf: "weekly"  },
    { url: "/blogs",                                                     priority: 0.9, cf: "weekly"  },
    { url: "/news-feeds",                                                priority: 0.8, cf: "daily"   },
    { url: "/offers",                                                    priority: 0.9, cf: "weekly"  },
    { url: "/log-in",                                                    priority: 0.5, cf: "yearly"  },
    { url: "/sign-up",                                                   priority: 0.5, cf: "yearly"  },
    { url: "/terms-privacy-policy",                                      priority: 0.4, cf: "yearly"  },
    { url: "/naeem-hossen",                                              priority: 0.6, cf: "monthly" },
    { url: "/our-leading-team",                                          priority: 0.6, cf: "monthly" },
    { url: "/pdf-editor",                                                priority: 0.5, cf: "monthly" },
    { url: "/our-services",                                              priority: 0.9, cf: "weekly"  },
    { url: "/our-services/things-to-do",                                 priority: 0.7, cf: "monthly" },
    { url: "/our-services/tour-packages",                                priority: 0.8, cf: "weekly"  },
    { url: "/our-services/visa-services",                                priority: 0.9, cf: "weekly"  },
    { url: "/our-services/visa-services/student-visa-from-bangladesh",   priority: 0.9, cf: "monthly" },
    { url: "/our-services/visa-services/tourist-visa-from-bangladesh",   priority: 0.9, cf: "monthly" },
    { url: "/our-services/visa-services/work-visa-from-bangladesh",      priority: 0.9, cf: "monthly" },
    { url: "/our-services/visa/albania-visa-application",                priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/armenia-visa-application",                priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/australia-visa-application",              priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/azerbaijan-visa-application",             priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/brazil-visa-application",                 priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/canada-visa-application",                 priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/china-visa-application",                  priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/cyprus-visa-application",                 priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/dubai-visa-application",                  priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/europe-visa-application",                 priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/georgia-visa-application",                priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/germany-visa-application",                priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/india-visa-application",                  priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/indonesia-visa-application",              priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/japan-visa-application",                  priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/kosovo-visa-application",                 priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/malaysia-visa-application",               priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/montenegro-visa-application",             priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/morocco-visa-application",                priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/portugal-visa-application",               priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/qatar-visa-application",                  priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/russia-visa-application",                 priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/saudi-arabia-visa-application",           priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/serbia-visa-application",                 priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/singapore-visa-application",              priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/south-africa-visa-application",           priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/south-korea-visa-application",            priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/spain-visa-application",                  priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/srilanka-visa-application",               priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/thailand-visa-application",               priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/turkey-visa-application",                 priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/uk-visa-application",                     priority: 0.8, cf: "monthly" },
    { url: "/our-services/visa/usa-visa-application",                    priority: 0.8, cf: "monthly" },
    { url: "/study-abroad",                                              priority: 0.95, cf: "weekly" },
    { url: "/study-abroad/student-visa",                                 priority: 0.9,  cf: "weekly" },
    { url: "/visa",                                                      priority: 0.95, cf: "daily"  },
    { url: "/visa/visa-guide",                                           priority: 0.9,  cf: "daily"  },
    { url: "/travel-resources",                                          priority: 0.8,  cf: "weekly" },
    { url: "/travel-resources/travel-document-generator",               priority: 0.7,  cf: "monthly"},
    { url: "/travel-resources/visa-checklist-generator",                priority: 0.7,  cf: "monthly"},
    { url: "/travel-resources/visa-processing-time-tracker",            priority: 0.8,  cf: "weekly" },
    { url: "/contact/travel-agency-armenia",                            priority: 0.7,  cf: "monthly"},
    { url: "/contact/travel-agency-bangladesh",                         priority: 0.7,  cf: "monthly"},
    { url: "/contact/travel-agency-dubai",                              priority: 0.7,  cf: "monthly"},
    { url: "/contact/travel-agency-georgia",                            priority: 0.7,  cf: "monthly"},
    { url: "/online-travel-agency-bangladesh",                          priority: 0.8,  cf: "monthly"},
    { url: "/eammu-dairy-poultry",                                       priority: 0.6,  cf: "monthly"},
    { url: "/eammu-fashion",                                             priority: 0.6,  cf: "monthly"},
    { url: "/eammu-fashion/eammu-store",                                 priority: 0.6,  cf: "monthly"},
    { url: "/eammu-social-responsibility",                               priority: 0.6,  cf: "monthly"},
    { url: "/eammu-textile-bangladesh",                                  priority: 0.6,  cf: "monthly"},
    { url: "/web-development-digital-marketing",                         priority: 0.7,  cf: "monthly"},
    { url: "/flight-booking",                                            priority: 0.8,  cf: "monthly"},
    { url: "/event-management",                                          priority: 0.7,  cf: "monthly"},
    { url: "/target-ielts-immigration-center",                           priority: 0.8,  cf: "monthly"},
    { url: "/target-usa-visa-interview-preparation",                     priority: 0.8,  cf: "monthly"},
  ];

  // studentVisa slug routes
  const studentRoutes = SLUGS.map((slug) => ({
    url: `/study-abroad/student-visa/${slug}`,
    priority: 0.85,
    cf: "monthly",
  }));

  // visaSlug routes
  const visaSlugRoutes = SLUGS.map((slug) => ({
    url: `/visa/${slug}-visa`,
    priority: 0.85,
    cf: "weekly",
  }));

  return [...staticUrls, ...studentRoutes, ...visaSlugRoutes].map((r) => ({
    url: `${BASE_URL}${r.url.startsWith("/") ? r.url : `/${r.url}`}`,
    lastModified: now,
    changeFrequency: r.cf,
    priority: r.priority,
  }));
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. generateSitemaps — tells Next.js how many sitemap pages exist
//    id=0                          → static
//    id=1 … GUIDE_CHUNKS           → visaGuide chunks
//    id=GUIDE_CHUNKS+1 … +PROC_CHUNKS → processingTime chunks
// ─────────────────────────────────────────────────────────────────────────────
export function generateSitemaps() {
  const total = 1 + GUIDE_CHUNKS + PROC_CHUNKS;
  return Array.from({ length: total }, (_, i) => ({ id: i }));
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. Default export — called once per id by Next.js
// ─────────────────────────────────────────────────────────────────────────────
export default function sitemap({ id = 0 } = {}) {
  const now = new Date();

  // ── id = 0 : static pages ─────────────────────────────────────────────────
  if (id === 0) {
    return buildStaticEntries(now);
  }

  // ── id = 1 … GUIDE_CHUNKS : visaGuide ────────────────────────────────────
  if (id <= GUIDE_CHUNKS) {
    const chunkIndex = id - 1;                        // 0-based chunk
    const start      = chunkIndex * CHUNK_SIZE;
    const end        = Math.min(start + CHUNK_SIZE, TOTAL_GUIDE);
    const entries    = [];

    for (let i = start; i < end; i++) {
      const url = guideUrl(i);
      if (!url) continue;
      entries.push({
        url,
        lastModified:      now,
        changeFrequency:   "monthly",
        priority:          0.8,
      });
    }
    return entries;
  }

  // ── id > GUIDE_CHUNKS : processingTime ───────────────────────────────────
  const chunkIndex = id - 1 - GUIDE_CHUNKS;           // 0-based chunk
  const start      = chunkIndex * CHUNK_SIZE;
  const end        = Math.min(start + CHUNK_SIZE, TOTAL_PROC);
  const entries    = [];

  for (let i = start; i < end; i++) {
    const url = procUrl(i);
    if (!url) continue;
    entries.push({
      url,
      lastModified:    now,
      changeFrequency: "weekly",
      priority:        0.7,
    });
  }
  return entries;
}