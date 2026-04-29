// app/lib/sitemap-data.js

import rawVisaData    from "@/app/data/countries.json";
import rawStudentData from "@/app/data/studentvisadata.json";
import { createSlug } from "@/app/lib/utils";

const BASE_URL   = "https://eammu.com";
const VISA_TYPES = ["sticker", "e-visa", "transit", "sticker-extended"];
const BUILD_TIME = new Date().toISOString();

export const URLS_PER_SHARD = 45_000;

// ── Helpers ────────────────────────────────────────────────────────────────

function toArray(json) {
  if (Array.isArray(json)) return json;
  if (json && typeof json === "object") {
    const COMMON = ["data", "countries", "visas", "items", "list", "results"];
    for (const k of COMMON) if (Array.isArray(json[k])) return json[k];
    const ak = Object.keys(json).find((k) => Array.isArray(json[k]));
    if (ak) return json[ak];
    return Object.values(json);
  }
  return [];
}

function getSlug(entry, ...keys) {
  for (const key of keys) {
    if (entry[key] && typeof entry[key] === "string") return createSlug(entry[key]);
  }
  return "";
}

function uniqueSlugs(entries, ...keys) {
  const seen = new Set();
  const result = [];
  for (const entry of entries) {
    const slug = getSlug(entry, ...keys);
    if (slug && !seen.has(slug)) { seen.add(slug); result.push(slug); }
  }
  return result;
}

function r(path, priority, changeFrequency) {
  return {
    url: `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`,
    lastModified: BUILD_TIME,
    changeFrequency,
    priority,
  };
}

// ── Module-level singleton ─────────────────────────────────────────────────

let _cache = null;

export function buildAllRoutes() {
  if (_cache) return _cache;

  const visaData    = toArray(rawVisaData);
  const studentData = toArray(rawStudentData);
  const visaSlugs    = uniqueSlugs(visaData,    "slug", "country", "name", "title", "destination");
  const studentSlugs = uniqueSlugs(studentData, "slug", "country", "name", "title");

  const staticRoutes = [
    r("/",                                                              1.0,  "daily"),
    r("/about",                                                         0.8,  "monthly"),
    r("/contact",                                                       0.8,  "monthly"),
    r("/careers",                                                       0.7,  "monthly"),
    r("/testimonials",                                                  0.8,  "weekly"),
    r("/blogs",                                                         0.9,  "weekly"),
    r("/news-feeds",                                                    0.8,  "daily"),
    r("/offers",                                                        0.9,  "weekly"),
    r("/log-in",                                                        0.5,  "yearly"),
    r("/sign-up",                                                       0.5,  "yearly"),
    r("/terms-privacy-policy",                                          0.4,  "yearly"),
    r("/naeem-hossen",                                                  0.6,  "monthly"),
    r("/our-leading-team",                                              0.6,  "monthly"),
    r("/pdf-editor",                                                    0.5,  "monthly"),
    r("/our-services",                                                  0.9,  "weekly"),
    r("/our-services/things-to-do",                                     0.7,  "monthly"),
    r("/our-services/tour-packages",                                    0.8,  "weekly"),
    r("/our-services/visa-services",                                    0.9,  "weekly"),
    r("/our-services/visa-services/student-visa-from-bangladesh",       0.9,  "monthly"),
    r("/our-services/visa-services/tourist-visa-from-bangladesh",       0.9,  "monthly"),
    r("/our-services/visa-services/work-visa-from-bangladesh",          0.9,  "monthly"),
    r("/our-services/visa/albania-visa-application",                    0.8,  "monthly"),
    r("/our-services/visa/armenia-visa-application",                    0.8,  "monthly"),
    r("/our-services/visa/australia-visa-application",                  0.8,  "monthly"),
    r("/our-services/visa/azerbaijan-visa-application",                 0.8,  "monthly"),
    r("/our-services/visa/brazil-visa-application",                     0.8,  "monthly"),
    r("/our-services/visa/canada-visa-application",                     0.8,  "monthly"),
    r("/our-services/visa/china-visa-application",                      0.8,  "monthly"),
    r("/our-services/visa/cyprus-visa-application",                     0.8,  "monthly"),
    r("/our-services/visa/dubai-visa-application",                      0.8,  "monthly"),
    r("/our-services/visa/europe-visa-application",                     0.8,  "monthly"),
    r("/our-services/visa/georgia-visa-application",                    0.8,  "monthly"),
    r("/our-services/visa/germany-visa-application",                    0.8,  "monthly"),
    r("/our-services/visa/india-visa-application",                      0.8,  "monthly"),
    r("/our-services/visa/indonesia-visa-application",                  0.8,  "monthly"),
    r("/our-services/visa/japan-visa-application",                      0.8,  "monthly"),
    r("/our-services/visa/kosovo-visa-application",                     0.8,  "monthly"),
    r("/our-services/visa/malaysia-visa-application",                   0.8,  "monthly"),
    r("/our-services/visa/montenegro-visa-application",                 0.8,  "monthly"),
    r("/our-services/visa/morocco-visa-application",                    0.8,  "monthly"),
    r("/our-services/visa/portugal-visa-application",                   0.8,  "monthly"),
    r("/our-services/visa/qatar-visa-application",                      0.8,  "monthly"),
    r("/our-services/visa/russia-visa-application",                     0.8,  "monthly"),
    r("/our-services/visa/saudi-arabia-visa-application",               0.8,  "monthly"),
    r("/our-services/visa/serbia-visa-application",                     0.8,  "monthly"),
    r("/our-services/visa/singapore-visa-application",                  0.8,  "monthly"),
    r("/our-services/visa/south-africa-visa-application",               0.8,  "monthly"),
    r("/our-services/visa/south-korea-visa-application",                0.8,  "monthly"),
    r("/our-services/visa/spain-visa-application",                      0.8,  "monthly"),
    r("/our-services/visa/srilanka-visa-application",                   0.8,  "monthly"),
    r("/our-services/visa/thailand-visa-application",                   0.8,  "monthly"),
    r("/our-services/visa/turkey-visa-application",                     0.8,  "monthly"),
    r("/our-services/visa/uk-visa-application",                         0.8,  "monthly"),
    r("/our-services/visa/usa-visa-application",                        0.8,  "monthly"),
    r("/study-abroad",                                                  0.95, "weekly"),
    r("/study-abroad/student-visa",                                     0.9,  "weekly"),
    r("/visa",                                                          0.95, "daily"),
    r("/visa/visa-guide",                                               0.9,  "daily"),
    r("/travel-resources",                                              0.8,  "weekly"),
    r("/travel-resources/travel-document-generator",                    0.7,  "monthly"),
    r("/travel-resources/visa-checklist-generator",                     0.7,  "monthly"),
    r("/travel-resources/visa-processing-time-tracker",                 0.8,  "weekly"),
    r("/contact/travel-agency-armenia",                                 0.7,  "monthly"),
    r("/contact/travel-agency-bangladesh",                              0.7,  "monthly"),
    r("/contact/travel-agency-dubai",                                   0.7,  "monthly"),
    r("/contact/travel-agency-georgia",                                 0.7,  "monthly"),
    r("/online-travel-agency-bangladesh",                               0.8,  "monthly"),
    r("/eammu-dairy-poultry",                                           0.6,  "monthly"),
    r("/eammu-fashion",                                                 0.6,  "monthly"),
    r("/eammu-fashion/eammu-store",                                     0.6,  "monthly"),
    r("/eammu-social-responsibility",                                   0.6,  "monthly"),
    r("/eammu-textile-bangladesh",                                      0.6,  "monthly"),
    r("/web-development-digital-marketing",                             0.7,  "monthly"),
    r("/flight-booking",                                                0.8,  "monthly"),
    r("/event-management",                                              0.7,  "monthly"),
    r("/target-ielts-immigration-center",                               0.8,  "monthly"),
    r("/target-usa-visa-interview-preparation",                         0.8,  "monthly"),
  ];

  const studentVisaRoutes = studentSlugs.map((slug) =>
    r(`/study-abroad/student-visa/${slug}`, 0.85, "monthly")
  );

  const visaSlugRoutes = visaSlugs.map((slug) =>
    r(`/visa/${slug}-visa`, 0.85, "weekly")
  );

  const visaGuideRoutes = visaSlugs.flatMap((dest) =>
    visaSlugs
      .filter((nat) => nat !== dest)
      .map((nat) => r(`/visa/visa-guide/${dest}-visa-for-${nat}`, 0.8, "monthly"))
  );

  const processingTimeRoutes = visaSlugs.flatMap((dest) =>
    visaSlugs
      .filter((nat) => nat !== dest)
      .flatMap((nat) =>
        VISA_TYPES.map((type) =>
          r(
            `/travel-resources/visa-processing-time-tracker/${dest}-processing-time-for-${nat}/${type}`,
            0.7,
            "weekly"
          )
        )
      )
  );

  _cache = [
    ...staticRoutes,
    ...studentVisaRoutes,
    ...visaSlugRoutes,
    ...visaGuideRoutes,
    ...processingTimeRoutes,
  ];

  return _cache;
}

// ── XML builder ────────────────────────────────────────────────────────────

export function buildUrlsetXML(entries) {
  const rows = entries
    .map(
      ({ url, lastModified, changeFrequency, priority }) =>
        `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastModified}</lastmod>\n    <changefreq>${changeFrequency}</changefreq>\n    <priority>${Number(priority).toFixed(1)}</priority>\n  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows}\n</urlset>`;
}