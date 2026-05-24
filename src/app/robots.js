// app/robots.js
export default function robots() {
  return {
    rules: [
      // ── AI scrapers — no indexing value, pure bandwidth waste ──────────────
      { userAgent: "GPTBot",          disallow: "/" },
      { userAgent: "ChatGPT-User",    disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "CCBot",           disallow: "/" },
      { userAgent: "anthropic-ai",    disallow: "/" },
      { userAgent: "Claude-Web",      disallow: "/" },
      { userAgent: "cohere-ai",       disallow: "/" },
      { userAgent: "PerplexityBot",   disallow: "/" },
      { userAgent: "Diffbot",         disallow: "/" },
      { userAgent: "Omgilibot",       disallow: "/" },
      { userAgent: "Applebot-Extended", disallow: "/" },

      // ── Aggressive SEO crawlers — block entirely ───────────────────────────
      { userAgent: "AhrefsBot",       disallow: "/" },
      { userAgent: "SemrushBot",      disallow: "/" },
      { userAgent: "MJ12bot",         disallow: "/" },
      { userAgent: "DotBot",          disallow: "/" },
      { userAgent: "BLEXBot",         disallow: "/" },
      { userAgent: "PetalBot",        disallow: "/" },
      { userAgent: "DataForSeoBot",   disallow: "/" },
      { userAgent: "SeekportBot",     disallow: "/" },

      // ── Meta Bot Handling ──────────────────────────────────────────────────
      // মেটা বটকে শুধু ব্যয়বহুল ডাইনামিক রুটগুলো থেকে ব্লক করার জন্য:
      {
        userAgent: "meta-externalagent",
        disallow: ["/travel-resources/visa-processing-time-tracker/", "/visa-rejection/"],
      },

      // ── Googlebot — explicit fast allow (no crawl-delay) ──────────────────
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/log-in/", "/sign-up/", "/_next/", "/admin/"],
      },

      // ── Bingbot — small delay is fine ─────────────────────────────────────
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/log-in/", "/sign-up/"],
      },

      // ── Main rule for all other bots (Always keep this at the bottom) ──────
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/log-in/", "/sign-up/", "/_next/", "/admin/"],
      },
    ],

    sitemap: "https://eammu.com/sitemap.xml",
  };
}