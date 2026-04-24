// app/sitemap-index/route.js
// Handles: GET /sitemap.xml  (via next.config.js rewrite)
// Returns sitemap index XML listing all shards

import { buildAllRoutes, buildIndexXML, buildUrlsetXML, URLS_PER_SHARD } from "@/app/lib/sitemapData";

export const dynamic = "force-dynamic";

export async function GET() {
  const all        = buildAllRoutes();
  const total      = all.length;
  const shardCount = Math.ceil(total / URLS_PER_SHARD);

  // If only 1 shard — return plain urlset (no index needed)
  const xml = shardCount <= 1 ? buildUrlsetXML(all) : buildIndexXML(shardCount);

  return new Response(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}