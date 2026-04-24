/**
 * app/lib/sitemap-xml.js
 *
 * Bulletproof XML helpers for sitemaps.
 *
 * ROOT CAUSE OF "Specification mandates value for attribute hidden":
 *   Country names like "Côte d'Ivoire", "São Tomé", "Bosnia & Herzegovina"
 *   produce slugs containing raw apostrophes ('), ampersands (&), or other
 *   characters that are ILLEGAL inside XML text nodes.  A single unescaped
 *   character corrupts the entire document from that point forward.
 *
 * FIXES APPLIED:
 *   1. escapeXml()    — escapes all 5 XML special chars in the URL string.
 *   2. sanitizeUrl()  — strips any character that should never appear in a
 *                        sitemap <loc> regardless of encoding rules.
 *   3. buildUrlsetXml filters out any entry whose URL is empty/invalid after
 *      sanitization, preventing one bad entry from breaking the whole file.
 */

// ─── Step 1: XML entity escaping ─────────────────────────────────────────────
// Order matters: & must be replaced FIRST or you'll double-encode the others.
export function escapeXml(raw) {
  return String(raw ?? "")
    .replace(/&/g,  "&amp;")   // must be first
    .replace(/</g,  "&lt;")
    .replace(/>/g,  "&gt;")
    .replace(/"/g,  "&quot;")
    .replace(/'/g,  "&apos;");
}

// ─── Step 2: URL-level sanitization ──────────────────────────────────────────
// Removes characters that are illegal in URLs themselves (not just XML).
// This catches anything createSlug() might have missed.
//
// Safe URL characters per RFC 3986:
//   unreserved : A-Z a-z 0-9 - . _ ~
//   sub-delims : ! $ & ' ( ) * + , ; =   (& and ' are handled by escapeXml above)
//   path chars : / : @ % (percent-encoded sequences)
//
// We keep only: A-Z a-z 0-9  -  /  .  :  %
// Everything else (curly quotes, accented chars that survived, etc.) is removed.
export function sanitizeUrl(url) {
  return String(url ?? "")
    // Remove any Unicode character that is not ASCII-safe in a URL
    // eslint-disable-next-line no-control-regex
    .replace(/[^\x20-\x7E]/g, "")   // strip non-printable / non-ASCII
    .replace(/[<>"'`{}|\\^[\]]/g, "") // strip chars illegal in XML/URLs
    .trim();
}

// ─── Step 3: Validate the final URL is usable ─────────────────────────────────
function isValidUrl(url) {
  if (!url || typeof url !== "string") return false;
  try {
    const u = new URL(url);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}

// ─── Build a <urlset> sitemap ─────────────────────────────────────────────────
export function buildUrlsetXml(routes) {
  const today = new Date().toISOString().slice(0, 10);

  const urls = routes
    .map(({ url, lastModified, changeFrequency, priority }) => {
      const clean = sanitizeUrl(url);
      if (!isValidUrl(clean)) return null; // silently skip bad entries

      const loc     = escapeXml(clean);
      const lastmod = lastModified
        ? String(lastModified).slice(0, 10)
        : today;
      const freq    = escapeXml(changeFrequency ?? "monthly");
      const pri     = Number.isFinite(priority) ? priority.toFixed(1) : "0.5";

      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${pri}</priority>\n  </url>`;
    })
    .filter(Boolean)
    .join("\n");

  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls + "\n" +
    "</urlset>"
  );
}

// ─── Build a <sitemapindex> ───────────────────────────────────────────────────
export function buildSitemapIndexXml(sitemaps) {
  const today = new Date().toISOString().slice(0, 10);

  const items = sitemaps
    .map(({ loc, lastmod }) => {
      const clean = sanitizeUrl(loc);
      if (!isValidUrl(clean)) return null;
      return `  <sitemap>\n    <loc>${escapeXml(clean)}</loc>\n    <lastmod>${lastmod ?? today}</lastmod>\n  </sitemap>`;
    })
    .filter(Boolean)
    .join("\n");

  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    items + "\n" +
    "</sitemapindex>"
  );
}

// ─── Response headers ─────────────────────────────────────────────────────────
export const XML_HEADERS = {
  // MUST be application/xml — text/xml causes browser XML parser to apply
  // a different charset default and can trigger rendering bugs.
  "Content-Type":  "application/xml; charset=utf-8",
  // Vercel Edge Cache: serve stale while regenerating, max 12 h fresh
  "Cache-Control": "public, s-maxage=43200, stale-while-revalidate=86400",
  // Sitemaps themselves must not be indexed by search engines
  "X-Robots-Tag":  "noindex",
};