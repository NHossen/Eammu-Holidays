/**
 * app/lib/sitemap-xml.js
 *
 * Tiny XML helpers.  No external dependencies.
 */

/**
 * Escape characters that are illegal in XML attribute values / text nodes.
 * This is critical — a single & in a URL will make the whole sitemap invalid.
 */
export function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Build a <urlset> sitemap from an array of route objects.
 *
 * @param {Array<{url:string, lastModified:string, changeFrequency:string, priority:number}>} routes
 * @returns {string} Complete XML document string
 */
export function buildUrlsetXml(routes) {
  const urls = routes
    .map(
      ({ url, lastModified, changeFrequency, priority }) => `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${lastModified ? lastModified.slice(0, 10) : new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>${changeFrequency ?? "monthly"}</changefreq>
    <priority>${(priority ?? 0.5).toFixed(1)}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

/**
 * Build a <sitemapindex> document.
 *
 * @param {Array<{loc:string, lastmod?:string}>} sitemaps
 * @returns {string} Complete XML document string
 */
export function buildSitemapIndexXml(sitemaps) {
  const today = new Date().toISOString().slice(0, 10);
  const items = sitemaps
    .map(
      ({ loc, lastmod }) => `  <sitemap>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod ?? today}</lastmod>
  </sitemap>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>`;
}

/**
 * Standard Response headers for sitemap XML.
 * - Cache for 12 h on CDN, 1 h in browser
 * - s-maxage keeps Vercel Edge Cache warm
 */
export const XML_HEADERS = {
  "Content-Type": "application/xml; charset=utf-8",
  // Vercel Edge: cache 12 h, stale-while-revalidate 24 h
  "Cache-Control": "public, s-maxage=43200, stale-while-revalidate=86400",
};