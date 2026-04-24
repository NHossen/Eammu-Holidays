/**
 * app/robots.js
 *
 * Generates /robots.txt via Next.js App Router MetadataRoute.
 * Points crawlers to the sitemap index.
 *
 * Replace (or merge with) your existing app/robots.js.
 */

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow:     "/",
        // Disallow resource-heavy pages that have no SEO value
        disallow: [
          "/api/",
          "/log-in",
          "/sign-up",
          "/_next/",
        ],
      },
    ],
    // Point to the sitemapindex — Googlebot follows it to child sitemaps
    sitemap: "https://eammu.com/sitemap.xml",
  };
}