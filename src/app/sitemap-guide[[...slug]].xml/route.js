/**
 * app/sitemap-guide[[...slug]].xml/route.js
 *
 * Handles:
 *   GET /sitemap-guide.xml        → chunk 1 of visaGuideRoutes
 *   GET /sitemap-guide-2.xml      → chunk 2
 *   GET /sitemap-guide-3.xml      → chunk 3  (auto-scales with data)
 *
 * DIRECTORY NAME: app/sitemap-guide[[...slug]].xml/
 *
 * In Next.js 15 / Vercel, params may be a Promise — we await it defensively.
 * /sitemap-guide.xml    → slug undefined  → chunkIndex 0
 * /sitemap-guide-2.xml  → slug ["-2"]     → chunkIndex 1
 */

import { buildUrlsetXml, XML_HEADERS } from "@/app/lib/sitemap-xml";
import { CHUNK_SIZE, getVisaGuideRoutes, chunk } from "@/app/lib/sitemap-data";

export const dynamic    = "force-dynamic";
export const revalidate = 43200;

export async function GET(_request, context) {
  try {
    // Next.js 15: params may be a Promise — await defensively
    const params     = await Promise.resolve(context?.params ?? {});
    const slugParts  = Array.isArray(params?.slug) ? params.slug : [];
    const suffix     = slugParts[0] ?? ""; // e.g. "-2" | ""
    const chunkIndex = suffix ? parseInt(suffix.replace(/^-/, ""), 10) - 1 : 0;

    if (!Number.isFinite(chunkIndex) || chunkIndex < 0) {
      return new Response("Not Found", { status: 404 });
    }

    const chunks = chunk(getVisaGuideRoutes(), CHUNK_SIZE);

    if (chunkIndex >= chunks.length) {
      return new Response("Not Found", { status: 404 });
    }

    return new Response(buildUrlsetXml(chunks[chunkIndex]), {
      status:  200,
      headers: XML_HEADERS,
    });
  } catch (err) {
    console.error("[sitemap-guide] ERROR:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}