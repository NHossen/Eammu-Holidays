// app/robots.js

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/signup", "/login"],
      },
    ],
    sitemap: "https://eammu-holidays.vercel.app/sitemap.xml",
  };
}