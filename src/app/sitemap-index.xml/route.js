/**
 * app/sitemap-index.xml/route.js
 *
 * Serves:  GET /sitemap-index.xml
 *
 * Returns a <sitemapindex> listing every child sitemap.
 * The number of child sitemaps is computed at runtime from actual data size,
 * so adding more countries to countries.json automatically creates new chunks.
 *
 * Submit THIS URL (https://eammu.com/sitemap-index.xml) to Google Search Console.
 */

import { buildSitemapIndexXml, XML_HEADERS } from "@/app/lib/sitemap-xml";
import {
  BASE_URL,
  CHUNK_SIZE,
  getVisaGuideRoutes,
  getProcessingTimeRoutes,
} from "@/app/lib/sitemap-data";

// Tell Next.js not to try to statically render this route.
export const dynamic = "force-dynamic";
// Vercel Edge Cache: revalidate every 12 hours
export const revalidate = 43200;

export async function GET() {
  try {
    const today = new Date().toISOString().slice(0, 10);

    // ── How many chunks do we need for each group? ─────────────────────────
    const guideRoutes = getVisaGuideRoutes();
    const procRoutes  = getProcessingTimeRoutes();

    const guideChunkCount = Math.ceil(guideRoutes.length  / CHUNK_SIZE) || 1;
    const procChunkCount  = Math.ceil(procRoutes.length   / CHUNK_SIZE) || 1;

    // ── Build the sitemap list ─────────────────────────────────────────────
    const sitemaps = [
      // 1. Static pages + visa slugs + student visa slugs
      { loc: `${BASE_URL}/sitemap-static.xml`, lastmod: today },
    ];

    // 2. Visa guide chunks  (sitemap-guide.xml, sitemap-guide-2.xml, …)
    for (let i = 0; i < guideChunkCount; i++) {
      const suffix = i === 0 ? "" : `-${i + 1}`;
      sitemaps.push({
        loc: `${BASE_URL}/sitemap-guide${suffix}.xml`,
        lastmod: today,
      });
    }

    // 3. Processing-time chunks  (sitemap-proc.xml, sitemap-proc-2.xml, …)
    for (let i = 0; i < procChunkCount; i++) {
      const suffix = i === 0 ? "" : `-${i + 1}`;
      sitemaps.push({
        loc: `${BASE_URL}/sitemap-proc${suffix}.xml`,
        lastmod: today,
      });
    }

    const xml = buildSitemapIndexXml(sitemaps);

    return new Response(xml, { status: 200, headers: XML_HEADERS });
  } catch (err) {
    console.error("[sitemap-index] ERROR:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}