/**
 * app/sitemap-static.xml/route.js
 *
 * Serves:  GET /sitemap-static.xml
 *
 * Contains:
 *   - All hardcoded static pages
 *   - /visa/[slug]-visa  pages (one per country)
 *   - /study-abroad/student-visa/[slug]  pages
 *
 * These are relatively few URLs so they all fit in one file.
 */

import { buildUrlsetXml, XML_HEADERS } from "@/app/lib/sitemap-xml";
import { getStaticRoutes } from "@/app/lib/sitemap-data";

export const dynamic  = "force-dynamic";
export const revalidate = 43200; // 12 h

export async function GET() {
  try {
    const routes = getStaticRoutes();
    const xml    = buildUrlsetXml(routes);
    return new Response(xml, { status: 200, headers: XML_HEADERS });
  } catch (err) {
    console.error("[sitemap-static] ERROR:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}