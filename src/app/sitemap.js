export default function sitemap() {
  const baseUrl = "https://eammu-holidays.vercel.app";

  const routes = [
    {
      url: "",
      priority: 1.0,
      changeFrequency: "daily",
    },
    {
      url: "/about",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: "/contact",
      priority: 0.7,
      changeFrequency: "yearly",
    },
    {
      url: "/blogs",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: "/our-services",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: "/our-services/visa-services",
      priority: 0.9,
      changeFrequency: "monthly",
    },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}