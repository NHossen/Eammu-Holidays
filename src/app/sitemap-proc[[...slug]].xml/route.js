/**
 * app/sitemap-proc[[...slug]].xml/route.js
 *
 * Handles:
 *   GET /sitemap-proc.xml        → chunk 1 of processingTimeRoutes
 *   GET /sitemap-proc-2.xml      → chunk 2
 *   GET /sitemap-proc-3.xml      → chunk 3
 *   … automatically as data grows
 *
 * DIRECTORY NAME:  app/sitemap-proc[[...slug]].xml/
 *
 * Same optional catch-all pattern as sitemap-guide[[...slug]].xml.
 *
 * ─── IMPORTANT: Clean-URL routes ─────────────────────────────────────────────
 * This sitemap references URLs like:
 *   /travel-resources/visa-processing-time-tracker/turkey-processing-time-for-bangladesh/sticker
 *
 * NOT like:
 *   /travel-resources/visa-processing-time-tracker/turkey-processing-time-for-bangladesh?type=sticker
 *
 * You MUST create a corresponding Next.js dynamic route:
 *   app/travel-resources/visa-processing-time-tracker/[page]/[type]/page.js
 *
 * Where [type] matches one of: sticker | e-visa | transit | sticker-extended
 *
 * This gives each visa type its own canonical URL, which Google crawls and
 * indexes correctly (query params in sitemaps are largely ignored).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { buildUrlsetXml, XML_HEADERS } from "@/app/lib/sitemap-xml";
import {
  CHUNK_SIZE,
  getProcessingTimeRoutes,
  chunk,
} from "@/app/lib/sitemap-data";

export const dynamic  = "force-dynamic";
export const revalidate = 43200;

export async function GET(_request, { params }) {
  try {
    const slugParts  = params?.slug ?? [];
    const suffix     = slugParts[0] ?? "";
    const chunkIndex = suffix ? parseInt(suffix.replace("-", ""), 10) - 1 : 0;

    if (isNaN(chunkIndex) || chunkIndex < 0) {
      return new Response("Not Found", { status: 404 });
    }

    const allRoutes = getProcessingTimeRoutes();
    const chunks    = chunk(allRoutes, CHUNK_SIZE);

    if (chunkIndex >= chunks.length) {
      return new Response("Not Found", { status: 404 });
    }

    const xml = buildUrlsetXml(chunks[chunkIndex]);
    return new Response(xml, { status: 200, headers: XML_HEADERS });
  } catch (err) {
    console.error("[sitemap-proc] ERROR:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}