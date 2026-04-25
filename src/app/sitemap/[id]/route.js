import { NextResponse } from 'next/server';
import rawVisaData from "@/app/data/countries.json";
import rawStudentData from "@/app/data/studentvisadata.json";
import { createSlug } from "@/app/lib/utils";

const BASE_URL = "https://eammu.com";
const PAGE_SIZE = 45000;
const BUILD_TIME = new Date().toISOString();
const VISA_TYPES = ["sticker", "e-visa", "transit", "sticker-extended"];

// Helper to ensure data is an array
function toArray(json) {
  if (Array.isArray(json)) return json;
  if (json && typeof json === "object") {
    const COMMON = ["data", "countries", "visas", "items", "list", "results"];
    for (const k of COMMON) if (Array.isArray(json[k])) return json[k];
    return Object.values(json).find(Array.isArray) || [];
  }
  return [];
}

function uniqueSlugs(entries, ...keys) {
  const seen = new Set();
  const result = [];
  for (const entry of entries) {
    let slug = "";
    for (const key of keys) {
      if (entry[key] && typeof entry[key] === "string") {
        slug = createSlug(entry[key]);
        break;
      }
    }
    if (slug && !seen.has(slug)) {
      seen.add(slug);
      result.push(slug);
    }
  }
  return result;
}

// ─────────────────────────────────────────────────────────────────────────────
// The Router Cache (Singleton)
// ─────────────────────────────────────────────────────────────────────────────
let _routeCache = null;

function getAllRoutes() {
  if (_routeCache) return _routeCache;

  const visaData = toArray(rawVisaData);
  const studentData = toArray(rawStudentData);

  // 1. Static Routes
  const staticPaths = [
     // Core
    { url: "/",                                           priority: 1.0, changeFreq: "daily"   },
    { url: "/about",                                      priority: 0.9, changeFreq: "monthly" },
    { url: "/contact",                                    priority: 0.9, changeFreq: "monthly" },
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
    { url: "/our-services",                               priority: 1.0, changeFreq: "weekly"  },
    { url: "/our-services/things-to-do",                  priority: 0.8, changeFreq: "monthly" },
    { url: "/our-services/tour-packages",                 priority: 0.9, changeFreq: "weekly"  },
    { url: "/our-services/visa-services",                 priority: 1.0, changeFreq: "weekly"  },
    { url: "/our-services/visa-services/student-visa-from-bangladesh", priority: 1.0, changeFreq: "monthly" },
    { url: "/our-services/visa-services/tourist-visa-from-bangladesh", priority: 1.0, changeFreq: "monthly" },
    { url: "/our-services/visa-services/work-visa-from-bangladesh",    priority: 1.0, changeFreq: "monthly" },

    // Static visa application pages (ALL are ○ static in your build output)
    { url: "/our-services/visa/albania-visa-application",      priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/armenia-visa-application",      priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/australia-visa-application",    priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/azerbaijan-visa-application",   priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/brazil-visa-application",       priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/canada-visa-application",       priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/china-visa-application",        priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/cyprus-visa-application",       priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/dubai-visa-application",        priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/europe-visa-application",       priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/georgia-visa-application",      priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/germany-visa-application",      priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/india-visa-application",        priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/indonesia-visa-application",    priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/japan-visa-application",        priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/kosovo-visa-application",       priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/malaysia-visa-application",     priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/montenegro-visa-application",   priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/morocco-visa-application",      priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/portugal-visa-application",     priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/qatar-visa-application",        priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/russia-visa-application",       priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/saudi-arabia-visa-application", priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/serbia-visa-application",       priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/singapore-visa-application",    priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/south-africa-visa-application", priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/south-korea-visa-application",  priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/spain-visa-application",        priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/srilanka-visa-application",     priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/thailand-visa-application",     priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/turkey-visa-application",       priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/uk-visa-application",           priority: 0.9, changeFreq: "monthly" },
    { url: "/our-services/visa/usa-visa-application",          priority: 0.9, changeFreq: "monthly" },

    // Study Abroad
    { url: "/study-abroad",              priority: 1.0, changeFreq: "weekly" },
    { url: "/study-abroad/student-visa", priority: 1.0, changeFreq: "weekly" },

    // Visa hub
    { url: "/visa",            priority: 1.0, changeFreq: "daily" },
    { url: "/visa/visa-guide", priority: 0.9, changeFreq: "daily" },

    // Travel Resources
    { url: "/travel-resources",                              priority: 0.9, changeFreq: "weekly"  },
    { url: "/travel-resources/travel-document-generator",    priority: 0.8, changeFreq: "monthly" },
    { url: "/travel-resources/visa-checklist-generator",     priority: 0.8, changeFreq: "monthly" },
    { url: "/travel-resources/visa-processing-time-tracker", priority: 0.8, changeFreq: "weekly"  },

    // Regional contacts
    { url: "/contact/travel-agency-armenia",    priority: 0.7, changeFreq: "monthly" },
    { url: "/contact/travel-agency-bangladesh", priority: 0.8, changeFreq: "monthly" },
    { url: "/contact/travel-agency-dubai",      priority: 0.8, changeFreq: "monthly" },
    { url: "/contact/travel-agency-georgia",    priority: 0.7, changeFreq: "monthly" },
    { url: "/online-travel-agency-bangladesh",  priority: 0.9, changeFreq: "monthly" },

    // Other verticals
    { url: "/eammu-dairy-poultry",              priority: 0.6, changeFreq: "monthly" },
    { url: "/eammu-fashion",                    priority: 0.6, changeFreq: "monthly" },
    { url: "/eammu-fashion/eammu-store",        priority: 0.6, changeFreq: "monthly" },
    { url: "/eammu-social-responsibility",      priority: 0.6, changeFreq: "monthly" },
    { url: "/eammu-textile-bangladesh",         priority: 0.6, changeFreq: "monthly" },
    { url: "/web-development-digital-marketing",priority: 0.7, changeFreq: "monthly" },
    { url: "/flight-booking",                   priority: 0.9, changeFreq: "monthly" },
    { url: "/event-management",                 priority: 0.7, changeFreq: "monthly" },
    { url: "/target-ielts-immigration-center",  priority: 0.9, changeFreq: "monthly" },
    { url: "/target-usa-visa-interview-preparation", priority: 0.9, changeFreq: "monthly" },
  ];

  const visaSlugs = uniqueSlugs(visaData, "slug", "country", "name");
  const studentSlugs = uniqueSlugs(visaData, "slug", "country", "name");

  const routes = [];

  // Add Statics — store as objects so priority/changeFreq survive into the XML
  staticPaths.forEach(path =>
    routes.push({ url: `${BASE_URL}${path.url}`, priority: path.priority, changeFreq: path.changeFreq })
  );

  // Add Student Visas
  studentSlugs.forEach(slug =>
    routes.push({ url: `${BASE_URL}/study-abroad/student-visa/${slug}`, priority: 0.85, changeFreq: "weekly" })
  );

  // Add Country Visas
  visaSlugs.forEach(slug =>
    routes.push({ url: `${BASE_URL}/visa/${slug}-visa`, priority: 0.85, changeFreq: "weekly" })
  );

  // Add Visa Guides (Bulk)
  visaSlugs.forEach(dest => {
    visaSlugs.forEach(nat => {
      if (dest !== nat) {
        routes.push({ url: `${BASE_URL}/visa/visa-guide/${dest}-visa-for-${nat}`, priority: 0.7, changeFreq: "weekly" });
      }
    });
  });

  // Add Processing Times (Bulk)
  visaSlugs.forEach(dest => {
    visaSlugs.forEach(nat => {
      if (dest !== nat) {
        VISA_TYPES.forEach(type => {
          routes.push({
            url: `${BASE_URL}/travel-resources/visa-processing-time-tracker/${dest}-national-visa-processing-time-for-${nat}?type=${type}`,
            priority: 0.8,
            changeFreq: "monthly",
          });
        });
      }
    });
  });

  _routeCache = routes;
  return _routeCache;
}

// ─────────────────────────────────────────────────────────────────────────────
// GET Handler
// ─────────────────────────────────────────────────────────────────────────────
export async function GET(request, { params }) {
  const { id } = await params;
  
  // Clean the ID (remove .xml if user types it in URL)
  const sitemapId = parseInt(id.replace('.xml', ''), 10) || 0;
  
  const allRoutes = getAllRoutes();
  const start = sitemapId * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const chunk = allRoutes.slice(start, end);

  console.log(`[SITEMAP] Serving ID: ${sitemapId} | Range: ${start.toLocaleString()} to ${end.toLocaleString()}`);

  if (chunk.length === 0) {
    return new NextResponse("No more URLs", { status: 404 });
  }

  // Generate XML string directly for speed
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunk.map(({ url, priority, changeFreq }) => `  <url>
    <loc>${url}</loc>
    <lastmod>${BUILD_TIME}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}