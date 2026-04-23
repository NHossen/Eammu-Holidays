// app/sitemap-1.js
// Contains: staticRoutes + studentVisaRoutes + visaSlugRoutes
//
// NOTE: rawStudentVisaData is intentionally NOT imported — it is unused.
//       All slug generation uses visaData (countries.json) only.

import rawVisaData    from "@/app/data/countries.json";
import { createSlug } from "@/app/lib/utils";

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

// ── Helper: get a slug-safe string from an entry ───────────────────────────
function getSlug(entry, ...keys) {
  for (const key of keys) {
    if (entry[key] && typeof entry[key] === "string") {
      return createSlug(entry[key]);
    }
  }
  return "";
}

export default function sitemap() {
  const baseUrl = "https://eammu.com";
  const now     = new Date();

  // ── Static routes ──────────────────────────────────────────────────────────
  const staticRoutes = [
    // Core
    { url: "/",                                           priority: 1.0, changeFreq: "daily"   },
    { url: "/about",                                      priority: 0.8, changeFreq: "monthly" },
    { url: "/contact",                                    priority: 0.8, changeFreq: "monthly" },
    { url: "/careers",                                    priority: 0.7, changeFreq: "monthly" },
    { url: "/testimonials",                               priority: 0.8, changeFreq: "weekly"  },
    { url: "/blogs",                                      priority: 0.9, changeFreq: "weekly"  },
    { url: "/news-feeds",                                 priority: 0.8, changeFreq: "daily"   },
    { url: "/offers",                                     priority: 0.9, changeFreq: "weekly"  },
    { url: "/log-in",                                     priority: 0.5, changeFreq: "yearly"  },
    { url: "/sign-up",                                    priority: 0.5, changeFreq: "yearly"  },
    { url: "/terms-privacy-policy",                       priority: 0.4, changeFreq: "yearly"  },
    { url: "/naeem-hossen",                               priority: 0.6, changeFreq: "monthly" },
    { url: "/our-leading-team",                           priority: 0.6, changeFreq: "monthly" },
    { url: "/pdf-editor",                                 priority: 0.5, changeFreq: "monthly" },

    // Services
    { url: "/our-services",                               priority: 0.9, changeFreq: "weekly"  },
    { url: "/our-services/things-to-do",                  priority: 0.7, changeFreq: "monthly" },
    { url: "/our-services/tour-packages",                 priority: 0.8, changeFreq: "weekly"  },
    { url: "/our-services/visa-services",                 priority: 0.9, changeFreq: "weekly"  },
    { url: "/our-services/visa-services/student-visa-from-bangladesh", priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa-services/tourist-visa-from-bangladesh", priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa-services/work-visa-from-bangladesh",    priority: 0.9, changeFreq: "monthly" },

    // Static visa application pages
    { url: "/our-services/visa/albania-visa-application",      priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/armenia-visa-application",      priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/australia-visa-application",    priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/azerbaijan-visa-application",   priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/brazil-visa-application",       priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/canada-visa-application",       priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/china-visa-application",        priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/cyprus-visa-application",       priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/dubai-visa-application",        priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/europe-visa-application",       priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/georgia-visa-application",      priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/germany-visa-application",      priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/india-visa-application",        priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/indonesia-visa-application",    priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/japan-visa-application",        priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/kosovo-visa-application",       priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/malaysia-visa-application",     priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/montenegro-visa-application",   priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/morocco-visa-application",      priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/portugal-visa-application",     priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/qatar-visa-application",        priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/russia-visa-application",       priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/saudi-arabia-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/serbia-visa-application",       priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/singapore-visa-application",    priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/south-africa-visa-application", priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/south-korea-visa-application",  priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/spain-visa-application",        priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/srilanka-visa-application",     priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/thailand-visa-application",     priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/turkey-visa-application",       priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/uk-visa-application",           priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/visa/usa-visa-application",          priority: 0.8, changeFreq: "monthly" },

    // Study Abroad
    { url: "/study-abroad",              priority: 0.95, changeFreq: "weekly" },
    { url: "/study-abroad/student-visa", priority: 0.9,  changeFreq: "weekly" },

    // Visa hub
    { url: "/visa",            priority: 0.95, changeFreq: "daily" },
    { url: "/visa/visa-guide", priority: 0.9,  changeFreq: "daily" },

    // Travel Resources
    { url: "/travel-resources",                              priority: 0.8, changeFreq: "weekly"  },
    { url: "/travel-resources/travel-document-generator",    priority: 0.7, changeFreq: "monthly" },
    { url: "/travel-resources/visa-checklist-generator",     priority: 0.7, changeFreq: "monthly" },
    { url: "/travel-resources/visa-processing-time-tracker", priority: 0.8, changeFreq: "weekly"  },

    // Regional contacts
    { url: "/contact/travel-agency-armenia",    priority: 0.7, changeFreq: "monthly" },
    { url: "/contact/travel-agency-bangladesh", priority: 0.7, changeFreq: "monthly" },
    { url: "/contact/travel-agency-dubai",      priority: 0.7, changeFreq: "monthly" },
    { url: "/contact/travel-agency-georgia",    priority: 0.7, changeFreq: "monthly" },
    { url: "/online-travel-agency-bangladesh",  priority: 0.8, changeFreq: "monthly" },

    // Other verticals
    { url: "/eammu-dairy-poultry",               priority: 0.6, changeFreq: "monthly" },
    { url: "/eammu-fashion",                     priority: 0.6, changeFreq: "monthly" },
    { url: "/eammu-fashion/eammu-store",         priority: 0.6, changeFreq: "monthly" },
    { url: "/eammu-social-responsibility",       priority: 0.6, changeFreq: "monthly" },
    { url: "/eammu-textile-bangladesh",          priority: 0.6, changeFreq: "monthly" },
    { url: "/web-development-digital-marketing", priority: 0.7, changeFreq: "monthly" },
    { url: "/flight-booking",                    priority: 0.8, changeFreq: "monthly" },
    { url: "/event-management",                  priority: 0.7, changeFreq: "monthly" },
    { url: "/target-ielts-immigration-center",   priority: 0.8, changeFreq: "monthly" },
    { url: "/target-usa-visa-interview-preparation", priority: 0.8, changeFreq: "monthly" },
  ];

  // ── /study-abroad/student-visa/[slug] ─────────────────────────────────────
  const studentVisaRoutes = visaData
    .map((entry) => {
      const slug = getSlug(entry, "slug", "country", "name", "title");
      if (!slug) return null;
      return { url: `/study-abroad/student-visa/${slug}`, priority: 0.85, changeFreq: "monthly" };
    })
    .filter(Boolean);

  // ── /visa/[slug] ──────────────────────────────────────────────────────────
  const visaSlugRoutes = visaData
    .map((entry) => {
      const slug = getSlug(entry, "slug", "country", "name", "title", "destination");
      if (!slug) return null;
      return { url: `/visa/${slug}-visa`, priority: 0.85, changeFreq: "weekly" };
    })
    .filter(Boolean);

  // ── Merge & return ────────────────────────────────────────────────────────
  const allRoutes = [
    ...staticRoutes,
    ...studentVisaRoutes,
    ...visaSlugRoutes,
  ];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.url.startsWith("/") ? route.url : `/${route.url}`}`,
    lastModified: now,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}