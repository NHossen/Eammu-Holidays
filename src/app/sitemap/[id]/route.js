// app/sitemap/[id]/route.js
// Handles: GET /sitemap/0.xml  /sitemap/1.xml  etc
// Each shard returns up to 45,000 URLs

import { buildAllRoutes, buildUrlsetXML, URLS_PER_SHARD } from "@/app/lib/sitemapData";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  const id  = parseInt(String(params?.id ?? "0").replace(/\.xml$/i, ""), 10);
  const all = buildAllRoutes();

  if (isNaN(id) || id < 0 || id * URLS_PER_SHARD >= all.length) {
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`,
      { status: 404, headers: { "Content-Type": "application/xml; charset=utf-8" } }
    );
  }

  const entries = all.slice(id * URLS_PER_SHARD, id * URLS_PER_SHARD + URLS_PER_SHARD);
  const xml     = buildUrlsetXML(entries);

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type":    "application/xml; charset=utf-8",
      "Cache-Control":   "public, max-age=3600",
      "X-Sitemap-Shard": String(id),
      "X-Sitemap-Count": String(entries.length),
    },
  });
}