export default function sitemap() {
  const baseUrl = "https://eammu.com";

  const staticRoutes = [
    // Main Pages
    { url: "/", priority: 1.0, changeFrequency: "daily" },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { url: "/careers", priority: 0.7, changeFrequency: "monthly" },
    { url: "/testimonials", priority: 0.8, changeFrequency: "weekly" },
    { url: "/blogs", priority: 0.9, changeFrequency: "weekly" },
    { url: "/news-feeds", priority: 0.8, changeFrequency: "daily" },
    { url: "/offers", priority: 0.9, changeFrequency: "weekly" },

    // Services & Study Abroad
    { url: "/our-services", priority: 0.9, changeFrequency: "weekly" },
    { url: "/study-abroad", priority: 0.95, changeFrequency: "weekly" },
    { url: "/study-abroad/student-visa", priority: 0.9, changeFrequency: "weekly" },
    { url: "/visa", priority: 0.95, changeFrequency: "daily" },
    { url: "/visa/visa-guide", priority: 0.9, changeFrequency: "daily" },
    { url: "/flight-booking", priority: 0.8, changeFrequency: "monthly" },
    { url: "/event-management", priority: 0.7, changeFrequency: "monthly" },
    
    // Regional/Agency Contacts
    { url: "/contact/travel-agency-armenia", priority: 0.7, changeFrequency: "daily" },
    { url: "/contact/travel-agency-bangladesh", priority: 0.7, changeFrequency: "monthly" },
    { url: "/contact/travel-agency-dubai", priority: 0.7, changeFrequency: "daily" },
    { url: "/contact/travel-agency-georgia", priority: 0.7, changeFrequency: "monthly" },
    { url: "/online-travel-agency-bangladesh", priority: 0.8, changeFrequency: "monthly" },

    // Business & Other Verticals
    { url: "/eammu-dairy-poultry", priority: 0.6, changeFrequency: "monthly" },
    { url: "/eammu-fashion", priority: 0.6, changeFrequency: "monthly" },
    { url: "/eammu-fashion/eammu-store", priority: 0.6, changeFrequency: "monthly" },
    { url: "/eammu-social-responsibility", priority: 0.6, changeFrequency: "monthly" },
    { url: "/eammu-textile-bangladesh", priority: 0.6, changeFrequency: "monthly" },
    { url: "/web-development-digital-marketing", priority: 0.7, changeFrequency: "monthly" },

    // Specialized Visa Services
    { url: "/our-services/visa-services/student-visa-from-bangladesh", priority: 0.9, changeFrequency: "monthly" },
    { url: "/our-services/visa-services/tourist-visa-from-bangladesh", priority: 0.9, changeFrequency: "monthly" },
    { url: "/our-services/visa-services/work-visa-from-bangladesh", priority: 0.9, changeFrequency: "monthly" },
    { url: "/target-ielts-immigration-center", priority: 0.8, changeFrequency: "monthly" },
    { url: "/target-usa-visa-interview-preparation", priority: 0.8, changeFrequency: "monthly" },
    { url: "/study-abroad/student-visa/canada", priority: 0.8, changeFrequency: "monthly" },
    { url: "/study-abroad/student-visa/japan", priority: 0.8, changeFrequency: "monthly" },
    { url: "/study-abroad/student-visa/albania", priority: 0.8, changeFrequency: "monthly" },
    { url: "/study-abroad/student-visa/european-union", priority: 0.8, changeFrequency: "monthly" },
    { url: "/study-abroad/student-visa/united-states", priority: 0.8, changeFrequency: "monthly" },
    { url: "/study-abroad/student-visa/united-kingdom", priority: 0.8, changeFrequency: "monthly" },
    { url: "/study-abroad/student-visa/china", priority: 0.8, changeFrequency: "monthly" },
    { url: "/study-abroad/student-visa/india", priority: 0.8, changeFrequency: "monthly" },
    { url: "/study-abroad/student-visa/australia", priority: 0.8, changeFrequency: "monthly" },
    { url: "/study-abroad/student-visa/spain", priority: 0.8, changeFrequency: "monthly" },
    { url: "/study-abroad/student-visa/armenia", priority: 0.8, changeFrequency: "monthly" },
    { url: "/study-abroad/student-visa/germany", priority: 0.8, changeFrequency: "monthly" },
    { url: "/study-abroad/student-visa/hungary", priority: 0.8, changeFrequency: "monthly" },
    { url: "/study-abroad/student-visa/russia", priority: 0.8, changeFrequency: "monthly" },

    { url: "/visa/visa-guide/albania-visa-for-ghana", priority: 0.8, changeFrequency: "monthly" },
    { url: "/visa/visa-guide/canada-visa-for-ghana", priority: 0.8, changeFrequency: "monthly" },
    { url: "/visa/visa-guide/germany-visa-for-ghana", priority: 0.8, changeFrequency: "monthly" },
    { url: "/visa/visa-guide/serbia-visa-for-ghana", priority: 0.8, changeFrequency: "monthly" },
    { url: "/visa/visa-guide/armenia-visa-for-ghana", priority: 0.8, changeFrequency: "monthly" },
    { url: "/visa/visa-guide/spain-visa-for-ghana", priority: 0.8, changeFrequency: "monthly" },
    { url: "/visa/visa-guide/albania-visa-for-india", priority: 0.8, changeFrequency: "monthly" },
    { url: "/visa/visa-guide/germany-visa-for-india", priority: 0.8, changeFrequency: "monthly" },
    { url: "/visa/visa-guide/canada-visa-for-india", priority: 0.8, changeFrequency: "monthly" },
    { url: "/visa/visa-guide/serbia-visa-for-india", priority: 0.8, changeFrequency: "monthly" },
    { url: "/visa/visa-guide/armenia-visa-for-india", priority: 0.8, changeFrequency: "monthly" },
    { url: "/visa/visa-guide/russia-visa-for-india", priority: 0.8, changeFrequency: "monthly" },
    { url: "/visa/visa-guide/united-states-visa-for-india", priority: 0.8, changeFrequency: "monthly" },
    { url: "/visa/visa-guide/germany-visa-for-bangladesh", priority: 0.8, changeFrequency: "monthly" },
    { url: "/visa/visa-guide/albania-visa-for-bangladesh", priority: 0.8, changeFrequency: "monthly" },
    { url: "/visa/visa-guide/united-states-visa-for-bangladesh", priority: 0.8, changeFrequency: "monthly" },
    { url: "/visa/visa-guide/canada-visa-for-bangladesh", priority: 0.8, changeFrequency: "monthly" },
  ];

  // Specific Country Visa Application Pages /visa/visa-guide/albania-visa-for-ghana
  const visaCountries = [
    "albania", "armenia", "australia", "azerbaijan", "brazil", "canada", "china", 
    "cyprus", "dubai", "europe", "georgia", "germany", "india", "indonesia", 
    "japan", "kosovo", "malaysia", "montenegro", "morocco", "portugal", "qatar", 
    "russia", "saudi-arabia", "serbia", "singapore", "south-africa", 
    "south-korea", "spain", "srilanka", "thailand", "turkey", "uk", "usa"
  ];

  const visaRoutes = visaCountries.map(country => ({
    url: `/our-services/visa/${country}-visa-application`,
    priority: 0.8,
    changeFrequency: "monthly"
  }));

  const allRoutes = [...staticRoutes, ...visaRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.url.startsWith('/') ? route.url : '/' + route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}