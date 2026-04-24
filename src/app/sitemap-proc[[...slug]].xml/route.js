/**
 * app/sitemap-proc[[...slug]].xml/route.js
 *
 * Handles:
 *   GET /sitemap-proc.xml        → chunk 1 of processingTimeRoutes
 *   GET /sitemap-proc-2.xml      → chunk 2
 *   GET /sitemap-proc-3.xml      → chunk 3  (auto-scales with data)
 *
 * DIRECTORY NAME: app/sitemap-proc[[...slug]].xml/
 *
 * URLs use CLEAN PATH SEGMENTS (not ?type= query params):
 *   /travel-resources/visa-processing-time-tracker/turkey-processing-time-for-bangladesh/sticker
 *
 * You MUST have a matching Next.js route:
 *   app/travel-resources/visa-processing-time-tracker/[page]/[type]/page.js
 */

import { buildUrlsetXml, XML_HEADERS } from "@/app/lib/sitemap-xml";
import { CHUNK_SIZE, getProcessingTimeRoutes, chunk } from "@/app/lib/sitemap-data";

export const dynamic    = "force-dynamic";
export const revalidate = 43200;

export async function GET(_request, context) {
  try {
    // Next.js 15: params may be a Promise — await defensively
    const params     = await Promise.resolve(context?.params ?? {});
    const slugParts  = Array.isArray(params?.slug) ? params.slug : [];
    const suffix     = slugParts[0] ?? "";
    const chunkIndex = suffix ? parseInt(suffix.replace(/^-/, ""), 10) - 1 : 0;

    if (!Number.isFinite(chunkIndex) || chunkIndex < 0) {
      return new Response("Not Found", { status: 404 });
    }

    const chunks = chunk(getProcessingTimeRoutes(), CHUNK_SIZE);

    if (chunkIndex >= chunks.length) {
      return new Response("Not Found", { status: 404 });
    }

    return new Response(buildUrlsetXml(chunks[chunkIndex]), {
      status:  200,
      headers: XML_HEADERS,
    });
  } catch (err) {
    console.error("[sitemap-proc] ERROR:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}