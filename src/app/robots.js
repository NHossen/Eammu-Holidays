export default function robots() {
  return {
    rules: [
      // Main rule
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/log-in", "/sign-up"],
      },

      // Block common scrapers
      { userAgent: "AhrefsBot", disallow: "/" },
      { userAgent: "SemrushBot", disallow: "/" },
      { userAgent: "MJ12bot", disallow: "/" },
      { userAgent: "DotBot", disallow: "/" },

      // Explicitly allow Google
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: "https://eammu.com/sitemap.xml",
  };
}