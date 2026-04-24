/**
 * app/sitemap-guide[[...slug]].xml/route.js
 *
 * Next.js App Router optional catch-all route.
 *
 * Handles:
 *   GET /sitemap-guide.xml        → chunk 1 of visaGuideRoutes
 *   GET /sitemap-guide-2.xml      → chunk 2
 *   GET /sitemap-guide-3.xml      → chunk 3
 *   … and so on automatically
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * DIRECTORY NAME:  app/sitemap-guide[[...slug]].xml/
 *
 * Next.js decodes the filename:
 *   sitemap-guide.xml          → params.slug = undefined  (chunk 1)
 *   sitemap-guide-2.xml        → params.slug = ["-2"]     (chunk 2)
 *
 * This one file handles ALL guide chunks with zero duplication.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { buildUrlsetXml, XML_HEADERS } from "@/app/lib/sitemap-xml";
import {
  CHUNK_SIZE,
  getVisaGuideRoutes,
  chunk,
} from "@/app/lib/sitemap-data";

export const dynamic  = "force-dynamic";
export const revalidate = 43200;

export async function GET(_request, { params }) {
  try {
    // Parse chunk index from the optional slug segment.
    // /sitemap-guide.xml    → slug undefined → index 0
    // /sitemap-guide-2.xml  → slug ["-2"]    → index 1
    const slugParts = params?.slug ?? [];
    const suffix    = slugParts[0] ?? ""; // e.g. "-2" or ""
    const chunkIndex = suffix ? parseInt(suffix.replace("-", ""), 10) - 1 : 0;

    if (isNaN(chunkIndex) || chunkIndex < 0) {
      return new Response("Not Found", { status: 404 });
    }

    const allRoutes = getVisaGuideRoutes();
    const chunks    = chunk(allRoutes, CHUNK_SIZE);

    if (chunkIndex >= chunks.length) {
      return new Response("Not Found", { status: 404 });
    }

    const xml = buildUrlsetXml(chunks[chunkIndex]);
    return new Response(xml, { status: 200, headers: XML_HEADERS });
  } catch (err) {
    console.error("[sitemap-guide] ERROR:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}