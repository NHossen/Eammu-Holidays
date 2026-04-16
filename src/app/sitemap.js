export default function sitemap() {
  const baseUrl = "https://eammu-holidays.vercel.app";

  const routes = [
    // ================= HOME =================
    {
      url: "",
      priority: 1.0,
      changeFrequency: "daily",
    },

    // ================= CORE PAGES =================
    {
      url: "/about",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: "/contact",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: "/testimonials",
      priority: 0.8,
      changeFrequency: "weekly",
    },

    // ================= BLOG =================
    {
      url: "/blogs",
      priority: 0.9,
      changeFrequency: "weekly",
    },

    // ================= SERVICES HUB =================
    {
      url: "/our-services",
      priority: 0.95,
      changeFrequency: "weekly",
    },

    // ================= VISA SYSTEM =================
    {
      url: "/visa",
      priority: 0.95,
      changeFrequency: "weekly",
    },
    {
      url: "/visa-guide",
      priority: 0.9,
      changeFrequency: "weekly",
    },

    // Visa Services Hub
    {
      url: "/our-services/visa-services",
      priority: 0.95,
      changeFrequency: "weekly",
    },

    // Visa Sub Pages (HIGH VALUE SEO)
    {
      url: "/our-services/visa-services/student-visa-from-bangladesh",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: "/our-services/visa-services/tourist-visa-from-bangladesh",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: "/our-services/visa-services/work-visa-from-bangladesh",
      priority: 0.9,
      changeFrequency: "monthly",
    },

    // ================= STUDY ABROAD =================
    {
      url: "/study-abroad",
      priority: 0.95,
      changeFrequency: "weekly",
    },

    // ================= TOURS =================
    {
      url: "/our-services/tour-packages",
      priority: 0.9,
      changeFrequency: "weekly",
    },

    // ================= ACTIVITIES =================
    {
      url: "/our-services/things-to-do",
      priority: 0.8,
      changeFrequency: "monthly",
    },

    // ================= DIGITAL SERVICES =================
    {
      url: "/web-development-digital-marketing",
      priority: 0.85,
      changeFrequency: "monthly",
    },

    // ================= OFFERS =================
    {
      url: "/offers",
      priority: 0.9,
      changeFrequency: "weekly",
    },

    // ================= NEWS =================
    {
      url: "/news-feeds",
      priority: 0.8,
      changeFrequency: "daily",
    },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}