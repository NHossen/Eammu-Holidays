// app/sitemap.js
// ─────────────────────────────────────────────────────────────────────────────
// HOW THIS WORKS:
//
// Next.js App Router supports multiple sitemaps via two exports:
//   1. export async function generateSitemaps()  → tells Next how many shards
//   2. export default function sitemap({ id })   → returns URLs for that shard
//
// Next.js will automatically create:
//   /sitemap.xml          → sitemap index listing all shards
//   /sitemap/0.xml        → shard 0  (URLs   0 – 44,999)
//   /sitemap/1.xml        → shard 1  (URLs 45,000 – 89,999)
//   /sitemap/2.xml        → shard 2  (URLs 90,000 – 134,999)
//   … etc
//
// REQUIREMENT: Next.js 13.4.0 or later
// DOCS: https://nextjs.org/docs/app/api-reference/file-conventions/sitemap#generating-multiple-sitemaps
// ─────────────────────────────────────────────────────────────────────────────

import rawVisaData        from "@/app/data/countries.json";
import rawStudentVisaData from "@/app/data/studentvisadata.json";
import { createSlug }     from "@/app/lib/utils";

const BASE_URL       = "https://eammu.com";
const URLS_PER_SHARD = 45_000;

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
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

function getSlug(entry, ...keys) {
  for (const key of keys) {
    if (entry[key] && typeof entry[key] === "string") {
      return createSlug(entry[key]);
    }
  }
  return "";
}

// ─────────────────────────────────────────────────────────────────────────────
// BUILD ALL ROUTES — exactly the same as your original working sitemap
// Returns a flat array of sitemap entry objects
// ─────────────────────────────────────────────────────────────────────────────

function buildAllRoutes() {
  const visaData    = toArray(rawVisaData);
  const now         = new Date();
  const visaTypes   = ["sticker", "e-visa", "transit", "sticker-extended"];

  // ── 1. Static routes ────────────────────────────────────────────────────
  const staticRoutes = [
    { url: "/",                                                          priority: 1.0,  changeFrequency: "daily"   },
    { url: "/about",                                                     priority: 0.8,  changeFrequency: "monthly" },
    { url: "/contact",                                                   priority: 0.8,  changeFrequency: "monthly" },
    { url: "/careers",                                                   priority: 0.7,  changeFrequency: "monthly" },
    { url: "/testimonials",                                              priority: 0.8,  changeFrequency: "weekly"  },
    { url: "/blogs",                                                     priority: 0.9,  changeFrequency: "weekly"  },
    { url: "/news-feeds",                                                priority: 0.8,  changeFrequency: "daily"   },
    { url: "/offers",                                                    priority: 0.9,  changeFrequency: "weekly"  },
    { url: "/log-in",                                                    priority: 0.5,  changeFrequency: "yearly"  },
    { url: "/sign-up",                                                   priority: 0.5,  changeFrequency: "yearly"  },
    { url: "/terms-privacy-policy",                                      priority: 0.4,  changeFrequency: "yearly"  },
    { url: "/naeem-hossen",                                              priority: 0.6,  changeFrequency: "monthly" },
    { url: "/our-leading-team",                                          priority: 0.6,  changeFrequency: "monthly" },
    { url: "/pdf-editor",                                                priority: 0.5,  changeFrequency: "monthly" },
    { url: "/our-services",                                              priority: 0.9,  changeFrequency: "weekly"  },
    { url: "/our-services/things-to-do",                                 priority: 0.7,  changeFrequency: "monthly" },
    { url: "/our-services/tour-packages",                                priority: 0.8,  changeFrequency: "weekly"  },
    { url: "/our-services/visa-services",                                priority: 0.9,  changeFrequency: "weekly"  },
    { url: "/our-services/visa-services/student-visa-from-bangladesh",   priority: 0.9,  changeFrequency: "monthly" },
    { url: "/our-services/visa-services/tourist-visa-from-bangladesh",   priority: 0.9,  changeFrequency: "monthly" },
    { url: "/our-services/visa-services/work-visa-from-bangladesh",      priority: 0.9,  changeFrequency: "monthly" },
    { url: "/our-services/visa/albania-visa-application",                priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/armenia-visa-application",                priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/australia-visa-application",              priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/azerbaijan-visa-application",             priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/brazil-visa-application",                 priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/canada-visa-application",                 priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/china-visa-application",                  priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/cyprus-visa-application",                 priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/dubai-visa-application",                  priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/europe-visa-application",                 priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/georgia-visa-application",                priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/germany-visa-application",                priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/india-visa-application",                  priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/indonesia-visa-application",              priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/japan-visa-application",                  priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/kosovo-visa-application",                 priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/malaysia-visa-application",               priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/montenegro-visa-application",             priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/morocco-visa-application",                priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/portugal-visa-application",               priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/qatar-visa-application",                  priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/russia-visa-application",                 priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/saudi-arabia-visa-application",           priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/serbia-visa-application",                 priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/singapore-visa-application",              priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/south-africa-visa-application",           priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/south-korea-visa-application",            priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/spain-visa-application",                  priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/srilanka-visa-application",               priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/thailand-visa-application",               priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/turkey-visa-application",                 priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/uk-visa-application",                     priority: 0.8,  changeFrequency: "monthly" },
    { url: "/our-services/visa/usa-visa-application",                    priority: 0.8,  changeFrequency: "monthly" },
    { url: "/study-abroad",                                              priority: 0.95, changeFrequency: "weekly"  },
    { url: "/study-abroad/student-visa",                                 priority: 0.9,  changeFrequency: "weekly"  },
    { url: "/visa",                                                      priority: 0.95, changeFrequency: "daily"   },
    { url: "/visa/visa-guide",                                           priority: 0.9,  changeFrequency: "daily"   },
    { url: "/travel-resources",                                          priority: 0.8,  changeFrequency: "weekly"  },
    { url: "/travel-resources/travel-document-generator",                priority: 0.7,  changeFrequency: "monthly" },
    { url: "/travel-resources/visa-checklist-generator",                 priority: 0.7,  changeFrequency: "monthly" },
    { url: "/travel-resources/visa-processing-time-tracker",             priority: 0.8,  changeFrequency: "weekly"  },
    { url: "/contact/travel-agency-armenia",                             priority: 0.7,  changeFrequency: "monthly" },
    { url: "/contact/travel-agency-bangladesh",                          priority: 0.7,  changeFrequency: "monthly" },
    { url: "/contact/travel-agency-dubai",                               priority: 0.7,  changeFrequency: "monthly" },
    { url: "/contact/travel-agency-georgia",                             priority: 0.7,  changeFrequency: "monthly" },
    { url: "/online-travel-agency-bangladesh",                           priority: 0.8,  changeFrequency: "monthly" },
    { url: "/eammu-dairy-poultry",                                       priority: 0.6,  changeFrequency: "monthly" },
    { url: "/eammu-fashion",                                             priority: 0.6,  changeFrequency: "monthly" },
    { url: "/eammu-fashion/eammu-store",                                 priority: 0.6,  changeFrequency: "monthly" },
    { url: "/eammu-social-responsibility",                               priority: 0.6,  changeFrequency: "monthly" },
    { url: "/eammu-textile-bangladesh",                                  priority: 0.6,  changeFrequency: "monthly" },
    { url: "/web-development-digital-marketing",                         priority: 0.7,  changeFrequency: "monthly" },
    { url: "/flight-booking",                                            priority: 0.8,  changeFrequency: "monthly" },
    { url: "/event-management",                                          priority: 0.7,  changeFrequency: "monthly" },
    { url: "/target-ielts-immigration-center",                           priority: 0.8,  changeFrequency: "monthly" },
    { url: "/target-usa-visa-interview-preparation",                     priority: 0.8,  changeFrequency: "monthly" },
  ].map((r) => ({
    url:             `${BASE_URL}${r.url}`,
    lastModified:    now,
    changeFrequency: r.changeFrequency,
    priority:        r.priority,
  }));

  // ── 2. /study-abroad/student-visa/[slug] ────────────────────────────────
  const studentVisaRoutes = visaData
    .map((entry) => {
      const slug = getSlug(entry, "slug", "country", "name", "title");
      if (!slug) return null;
      return {
        url:             `${BASE_URL}/study-abroad/student-visa/${slug}`,
        lastModified:    now,
        changeFrequency: "monthly",
        priority:        0.85,
      };
    })
    .filter(Boolean);

  // ── 3. /visa/[slug]-visa ────────────────────────────────────────────────
  const visaSlugRoutes = visaData
    .map((entry) => {
      const slug = getSlug(entry, "slug", "country", "name", "title", "destination");
      if (!slug) return null;
      return {
        url:             `${BASE_URL}/visa/${slug}-visa`,
        lastModified:    now,
        changeFrequency: "weekly",
        priority:        0.85,
      };
    })
    .filter(Boolean);

  // ── 4. /visa/visa-guide/[dest]-visa-for-[nat] ───────────────────────────
  const visaGuideRoutes = visaData.flatMap((entry) => {
    const dest = getSlug(entry, "slug", "country", "name", "title", "destination");
    if (!dest) return [];
    return visaData
      .map((country) => {
        const nat = createSlug(country.name || country.country || country.title || "");
        if (!nat || nat === dest) return null;
        return {
          url:             `${BASE_URL}/visa/visa-guide/${dest}-visa-for-${nat}`,
          lastModified:    now,
          changeFrequency: "monthly",
          priority:        0.8,
        };
      })
      .filter(Boolean);
  });

  // ── 5. /travel-resources/visa-processing-time-tracker/[slug] ────────────
  const processingTimeRoutes = visaData.flatMap((entry) => {
    const dest = getSlug(entry, "slug", "country", "name", "title", "destination");
    if (!dest) return [];
    return visaData.flatMap((country) => {
      const nat = createSlug(country.name || country.country || country.title || "");
      if (!nat || nat === dest) return [];
      return visaTypes.map((type) => ({
        url:             `${BASE_URL}/travel-resources/visa-processing-time-tracker/${dest}-national-visa-processing-time-for-${nat}?type=${type}`,
        lastModified:    now,
        changeFrequency: "weekly",
        priority:        0.7,
      }));
    });
  });

  // ── Merge everything ─────────────────────────────────────────────────────
  return [
    ...staticRoutes,
    ...studentVisaRoutes,
    ...visaSlugRoutes,
    ...visaGuideRoutes,
    ...processingTimeRoutes,
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPORTED: generateSitemaps
// Next.js calls this to find out how many shards exist.
// It then calls the default export once per shard with { id }.
// ─────────────────────────────────────────────────────────────────────────────
export async function generateSitemaps() {
  const total      = buildAllRoutes().length;
  const shardCount = Math.ceil(total / URLS_PER_SHARD);
  // Must return an array of objects each containing an `id` field
  return Array.from({ length: shardCount }, (_, i) => ({ id: i }));
}

// ─────────────────────────────────────────────────────────────────────────────
// DEFAULT EXPORT: sitemap({ id })
//
// Next.js calls this once per shard.
//   - id = 0  → URLs slice(0, 45000)
//   - id = 1  → URLs slice(45000, 90000)
//   - id = 2  → URLs slice(90000, 135000)
//   … etc
//
// When there is only 1 shard (total < 45000), this behaves exactly
// like the original single sitemap — nothing breaks.
// ─────────────────────────────────────────────────────────────────────────────
export default function sitemap({ id = 0 } = {}) {
  const all   = buildAllRoutes();
  const start = Number(id) * URLS_PER_SHARD;
  const end   = start + URLS_PER_SHARD;
  // .slice() is safe — if end > array length it just returns to the end
  return all.slice(start, end);
}