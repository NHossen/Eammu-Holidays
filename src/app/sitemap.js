/**
 * app/sitemap.js  ← ROOT SITEMAP INDEX
 *
 * Next.js App Router calls this function and expects an array of objects
 * when you want a <sitemapindex>.  However, the built-in MetadataRoute.Sitemap
 * type only supports <urlset>.  We therefore use a Route Handler approach:
 *
 *   app/sitemap.xml/route.js   ← the actual sitemap index endpoint
 *
 * THIS FILE (app/sitemap.js) is intentionally a pass-through that redirects
 * to the route handler so the /sitemap.xml URL still works as expected.
 *
 * ──────────────────────────────────────────────────────────────────────────────
 * WHY NOT USE next-sitemap OR app/sitemap.js DIRECTLY?
 *
 * Next.js 14+ `app/sitemap.js` exports a function that returns MetadataRoute.Sitemap
 * — an ARRAY OF URL OBJECTS.  This always produces a <urlset>, never a
 * <sitemapindex>.  To get a real sitemapindex we MUST use a Route Handler.
 *
 * The cleanest production pattern is:
 *   app/sitemap.xml/route.js          → <sitemapindex>
 *   app/sitemap-static.xml/route.js   → <urlset> static pages
 *   app/sitemap-guide.xml/route.js    → <urlset> visa-guide chunk 1
 *   app/sitemap-guide-2.xml/route.js  → <urlset> visa-guide chunk 2 (if needed)
 *   app/sitemap-proc.xml/route.js     → <urlset> processing-time routes
 *   ... more chunks as needed
 *
 * We also export a minimal sitemap() here so Next.js doesn't throw a build
 * warning about a missing app/sitemap.js export.  It simply points crawlers
 * to the real index.
 * ──────────────────────────────────────────────────────────────────────────────
 */

// This export satisfies Next.js but is overridden by the route handler below.
// Googlebot will follow the 307 from /sitemap.xml → /sitemap-index.xml
// if you also set up a redirect in next.config.js (see README comment).
export default function sitemap() {
  // Returning a minimal entry so the build does not error.
  // The REAL sitemap index is served by app/sitemap.xml/route.js
  return [
    {
      url: "https://eammu.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}

/*
 * ─── IMPORTANT: add this redirect to next.config.js ──────────────────────────
 *
 * async redirects() {
 *   return [
 *     {
 *       source: "/sitemap.xml",
 *       destination: "/sitemap-index.xml",
 *       permanent: false,  // 307 — keeps flexibility to change later
 *     },
 *   ];
 * },
 *
 * OR — simpler — just delete this file (app/sitemap.js) entirely and let
 * app/sitemap-index.xml/route.js handle everything.  Tell Google your sitemap
 * is at https://eammu.com/sitemap-index.xml instead of /sitemap.xml.
 * ─────────────────────────────────────────────────────────────────────────────
 */