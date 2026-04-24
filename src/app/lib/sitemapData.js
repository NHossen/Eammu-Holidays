// app/lib/sitemapData.js
// Shared between sitemap-index and sitemaps/[id] route handlers

import rawVisaData        from "@/app/data/countries.json";
import rawStudentVisaData from "@/app/data/studentvisadata.json";
import { createSlug }     from "@/app/lib/utils";

export const BASE_URL       = "https://eammu.com";
export const URLS_PER_SHARD = 45_000;

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
    if (entry[key] && typeof entry[key] === "string") return createSlug(entry[key]);
  }
  return "";
}

export function buildAllRoutes() {
  const now       = new Date().toISOString().split("T")[0];
  const visaTypes = ["sticker", "e-visa", "transit", "sticker-extended"];

  const staticRoutes = [
    { url: "/",                                                          p: 1.0,  cf: "daily"   },
    { url: "/about",                                                     p: 0.8,  cf: "monthly" },
    { url: "/contact",                                                   p: 0.8,  cf: "monthly" },
    { url: "/careers",                                                   p: 0.7,  cf: "monthly" },
    { url: "/testimonials",                                              p: 0.8,  cf: "weekly"  },
    { url: "/blogs",                                                     p: 0.9,  cf: "weekly"  },
    { url: "/news-feeds",                                                p: 0.8,  cf: "daily"   },
    { url: "/offers",                                                    p: 0.9,  cf: "weekly"  },
    { url: "/log-in",                                                    p: 0.5,  cf: "yearly"  },
    { url: "/sign-up",                                                   p: 0.5,  cf: "yearly"  },
    { url: "/terms-privacy-policy",                                      p: 0.4,  cf: "yearly"  },
    { url: "/naeem-hossen",                                              p: 0.6,  cf: "monthly" },
    { url: "/our-leading-team",                                          p: 0.6,  cf: "monthly" },
    { url: "/pdf-editor",                                                p: 0.5,  cf: "monthly" },
    { url: "/our-services",                                              p: 0.9,  cf: "weekly"  },
    { url: "/our-services/things-to-do",                                 p: 0.7,  cf: "monthly" },
    { url: "/our-services/tour-packages",                                p: 0.8,  cf: "weekly"  },
    { url: "/our-services/visa-services",                                p: 0.9,  cf: "weekly"  },
    { url: "/our-services/visa-services/student-visa-from-bangladesh",   p: 0.9,  cf: "monthly" },
    { url: "/our-services/visa-services/tourist-visa-from-bangladesh",   p: 0.9,  cf: "monthly" },
    { url: "/our-services/visa-services/work-visa-from-bangladesh",      p: 0.9,  cf: "monthly" },
    { url: "/our-services/visa/albania-visa-application",                p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/armenia-visa-application",                p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/australia-visa-application",              p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/azerbaijan-visa-application",             p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/brazil-visa-application",                 p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/canada-visa-application",                 p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/china-visa-application",                  p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/cyprus-visa-application",                 p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/dubai-visa-application",                  p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/europe-visa-application",                 p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/georgia-visa-application",                p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/germany-visa-application",                p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/india-visa-application",                  p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/indonesia-visa-application",              p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/japan-visa-application",                  p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/kosovo-visa-application",                 p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/malaysia-visa-application",               p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/montenegro-visa-application",             p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/morocco-visa-application",                p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/portugal-visa-application",               p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/qatar-visa-application",                  p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/russia-visa-application",                 p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/saudi-arabia-visa-application",           p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/serbia-visa-application",                 p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/singapore-visa-application",              p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/south-africa-visa-application",           p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/south-korea-visa-application",            p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/spain-visa-application",                  p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/srilanka-visa-application",               p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/thailand-visa-application",               p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/turkey-visa-application",                 p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/uk-visa-application",                     p: 0.8,  cf: "monthly" },
    { url: "/our-services/visa/usa-visa-application",                    p: 0.8,  cf: "monthly" },
    { url: "/study-abroad",                                              p: 0.95, cf: "weekly"  },
    { url: "/study-abroad/student-visa",                                 p: 0.9,  cf: "weekly"  },
    { url: "/visa",                                                      p: 0.95, cf: "daily"   },
    { url: "/visa/visa-guide",                                           p: 0.9,  cf: "daily"   },
    { url: "/travel-resources",                                          p: 0.8,  cf: "weekly"  },
    { url: "/travel-resources/travel-document-generator",                p: 0.7,  cf: "monthly" },
    { url: "/travel-resources/visa-checklist-generator",                 p: 0.7,  cf: "monthly" },
    { url: "/travel-resources/visa-processing-time-tracker",             p: 0.8,  cf: "weekly"  },
    { url: "/contact/travel-agency-armenia",                             p: 0.7,  cf: "monthly" },
    { url: "/contact/travel-agency-bangladesh",                          p: 0.7,  cf: "monthly" },
    { url: "/contact/travel-agency-dubai",                               p: 0.7,  cf: "monthly" },
    { url: "/contact/travel-agency-georgia",                             p: 0.7,  cf: "monthly" },
    { url: "/online-travel-agency-bangladesh",                           p: 0.8,  cf: "monthly" },
    { url: "/eammu-dairy-poultry",                                       p: 0.6,  cf: "monthly" },
    { url: "/eammu-fashion",                                             p: 0.6,  cf: "monthly" },
    { url: "/eammu-fashion/eammu-store",                                 p: 0.6,  cf: "monthly" },
    { url: "/eammu-social-responsibility",                               p: 0.6,  cf: "monthly" },
    { url: "/eammu-textile-bangladesh",                                  p: 0.6,  cf: "monthly" },
    { url: "/web-development-digital-marketing",                         p: 0.7,  cf: "monthly" },
    { url: "/flight-booking",                                            p: 0.8,  cf: "monthly" },
    { url: "/event-management",                                          p: 0.7,  cf: "monthly" },
    { url: "/target-ielts-immigration-center",                           p: 0.8,  cf: "monthly" },
    { url: "/target-usa-visa-interview-preparation",                     p: 0.8,  cf: "monthly" },
  ].map((r) => ({ url: `${BASE_URL}${r.url}`, lastmod: now, changefreq: r.cf, priority: r.p }));

  const studentVisaRoutes = visaData.map((entry) => {
    const slug = getSlug(entry, "slug", "country", "name", "title");
    if (!slug) return null;
    return { url: `${BASE_URL}/study-abroad/student-visa/${slug}`, lastmod: now, changefreq: "monthly", priority: 0.85 };
  }).filter(Boolean);

  const visaSlugRoutes = visaData.map((entry) => {
    const slug = getSlug(entry, "slug", "country", "name", "title", "destination");
    if (!slug) return null;
    return { url: `${BASE_URL}/visa/${slug}-visa`, lastmod: now, changefreq: "weekly", priority: 0.85 };
  }).filter(Boolean);

  const visaGuideRoutes = visaData.flatMap((entry) => {
    const dest = getSlug(entry, "slug", "country", "name", "title", "destination");
    if (!dest) return [];
    return visaData.map((country) => {
      const nat = createSlug(country.name || country.country || country.title || "");
      if (!nat || nat === dest) return null;
      return { url: `${BASE_URL}/visa/visa-guide/${dest}-visa-for-${nat}`, lastmod: now, changefreq: "monthly", priority: 0.8 };
    }).filter(Boolean);
  });

  const processingTimeRoutes = visaData.flatMap((entry) => {
    const dest = getSlug(entry, "slug", "country", "name", "title", "destination");
    if (!dest) return [];
    return visaData.flatMap((country) => {
      const nat = createSlug(country.name || country.country || country.title || "");
      if (!nat || nat === dest) return [];
      return visaTypes.map((type) => ({
        url: `${BASE_URL}/travel-resources/visa-processing-time-tracker/${dest}-national-visa-processing-time-for-${nat}?type=${type}`,
        lastmod: now, changefreq: "weekly", priority: 0.7,
      }));
    });
  });

  return [...staticRoutes, ...studentVisaRoutes, ...visaSlugRoutes, ...visaGuideRoutes, ...processingTimeRoutes];
}

function esc(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

export function buildUrlsetXML(entries) {
  const urls = entries.map((e) =>
    `  <url>\n    <loc>${esc(e.url)}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${Number(e.priority).toFixed(1)}</priority>\n  </url>`
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

export function buildIndexXML(shardCount) {
  const today    = new Date().toISOString().split("T")[0];
  const sitemaps = Array.from({ length: shardCount }, (_, i) =>
    `  <sitemap>\n    <loc>${BASE_URL}/sitemap/${i}.xml</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>`
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemaps}\n</sitemapindex>`;
}