// app/sitemap.js — Next.js App Router
//
// JSON file locations (do not change these paths):
//   @/app/data/countries.json       → used for /visa/[slug] and /visa/visa-guide/[slug]
//   @/app/data/studentvisadata.json → used for /study-abroad/student-visa/[slug]
//
// /our-services/visa/[country]-visa-application are ALL static (○ in build output)
// so they are hardcoded below — no JSON import needed for them.

import visaData from "@/app/data/countries.json";
import studentvisadata from "@/app/data/studentvisadata.json";
import { createSlug } from "@/app/lib/utils";

export default function sitemap() {
  const baseUrl = "https://eammu.com";
  const now = new Date();

  // ─── Visa processing time tracker ?type= values ───────────────────────────
  const visaTypes = ["sticker", "e-visa", "transit", "sticker-extended"];

  // ─── Static routes ────────────────────────────────────────────────────────
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

    // ── /our-services/visa/[country]-visa-application ─────────────────────
    // These are ALL static (○) — hardcoded to match your build output exactly.
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
    { url: "/study-abroad",                               priority: 0.95, changeFreq: "weekly" },
    { url: "/study-abroad/student-visa",                  priority: 0.9,  changeFreq: "weekly" },

    // Visa hub
    { url: "/visa",                                       priority: 0.95, changeFreq: "daily"  },
    { url: "/visa/visa-guide",                            priority: 0.9,  changeFreq: "daily"  },

    // Travel Resources
    { url: "/travel-resources",                           priority: 0.8,  changeFreq: "weekly"  },
    { url: "/travel-resources/travel-document-generator", priority: 0.7,  changeFreq: "monthly" },
    { url: "/travel-resources/visa-checklist-generator",  priority: 0.7,  changeFreq: "monthly" },
    { url: "/travel-resources/visa-processing-time-tracker", priority: 0.8, changeFreq: "weekly" },

    // Regional contacts
    { url: "/contact/travel-agency-armenia",              priority: 0.7, changeFreq: "monthly" },
    { url: "/contact/travel-agency-bangladesh",           priority: 0.7, changeFreq: "monthly" },
    { url: "/contact/travel-agency-dubai",                priority: 0.7, changeFreq: "monthly" },
    { url: "/contact/travel-agency-georgia",              priority: 0.7, changeFreq: "monthly" },
    { url: "/online-travel-agency-bangladesh",            priority: 0.8, changeFreq: "monthly" },

    // Other verticals
    { url: "/eammu-dairy-poultry",                        priority: 0.6, changeFreq: "monthly" },
    { url: "/eammu-fashion",                              priority: 0.6, changeFreq: "monthly" },
    { url: "/eammu-fashion/eammu-store",                  priority: 0.6, changeFreq: "monthly" },
    { url: "/eammu-social-responsibility",                priority: 0.6, changeFreq: "monthly" },
    { url: "/eammu-textile-bangladesh",                   priority: 0.6, changeFreq: "monthly" },
    { url: "/web-development-digital-marketing",          priority: 0.7, changeFreq: "monthly" },
    { url: "/flight-booking",                             priority: 0.8, changeFreq: "monthly" },
    { url: "/event-management",                           priority: 0.7, changeFreq: "monthly" },
    { url: "/target-ielts-immigration-center",            priority: 0.8, changeFreq: "monthly" },
    { url: "/target-usa-visa-interview-preparation",      priority: 0.8, changeFreq: "monthly" },
  ];

  // ─── /study-abroad/student-visa/[slug] (dynamic ƒ) ───────────────────────
  // Uses your exact import: import studentvisadata from "@/app/data/studentvisadata.json"
  // createSlug() matches how your [slug] page generates generateStaticParams.
  // If your JSON uses a different field name, replace `entry.country` below.
  const studentVisaRoutes = studentvisadata.map((entry) => ({
    url: `/study-abroad/student-visa/${createSlug(entry.country ?? entry.name ?? entry.slug ?? "")}`,
    priority: 0.85,
    changeFreq: "monthly",
  }));

  // ─── /visa/[slug] (dynamic ƒ) ─────────────────────────────────────────────
  // Pattern used on your site: [country-slug]-visa  e.g. "turkey-visa"
  // Uses your exact import: import visaData from "@/app/data/countries.json"
  // Replace `entry.country` with whichever field holds the country name in your JSON.
  const visaSlugRoutes = visaData.map((entry) => ({
    url: `/visa/${createSlug(entry.country ?? entry.name ?? entry.slug ?? "")}-visa`,
    priority: 0.85,
    changeFreq: "weekly",
  }));

  // ─── /visa/visa-guide/[slug] (dynamic ƒ) ─────────────────────────────────
  // Pattern: [destination]-visa-for-[nationality]
  // e.g. canada-visa-for-denmark
  // Replace field names below to match your countries.json structure.
  // Common patterns — pick the one that matches your JSON:
  //   entry.destination + entry.nationality
  //   entry.destinationCountry + entry.nationalityCountry
  //   entry.to + entry.from
  const visaGuideRoutes = visaData.map((entry) => ({
    url: `/visa/visa-guide/${
      createSlug(entry.destination ?? entry.destinationCountry ?? entry.to ?? entry.country ?? "")
    }-visa-for-${
      createSlug(entry.nationality ?? entry.nationalityCountry ?? entry.from ?? "")
    }`,
    priority: 0.8,
    changeFreq: "monthly",
  }));

  // ─── /travel-resources/visa-processing-time-tracker/[slug] (dynamic ƒ) ──
  // Pattern: [destination]-national-visa-processing-time-for-[nationality]?type=[type]
  // 4 entries generated per country pair × 4 visa types = lots of URLs.
  const processingTimeRoutes = visaData.flatMap((entry) =>
    visaTypes.map((type) => ({
      url: `/travel-resources/visa-processing-time-tracker/${
        createSlug(entry.destination ?? entry.destinationCountry ?? entry.to ?? entry.country ?? "")
      }-national-visa-processing-time-for-${
        createSlug(entry.nationality ?? entry.nationalityCountry ?? entry.from ?? "")
      }?type=${type}`,
      priority: 0.7,
      changeFreq: "weekly",
    }))
  );

  // ─── Merge & return ───────────────────────────────────────────────────────
  const allRoutes = [
    ...staticRoutes,
    ...studentVisaRoutes,
    ...visaSlugRoutes,
    ...visaGuideRoutes,
    ...processingTimeRoutes,
  ];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.url.startsWith("/") ? route.url : "/" + route.url}`,
    lastModified: now,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}