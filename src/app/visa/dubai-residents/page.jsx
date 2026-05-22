// app/visa/dubai-residents/page.jsx  ← Server Component (no "use client")
import Link from "next/link";
import CountryExplorer from "./CountryExplorer";

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Tourist Visa for Dubai Residents 2026 — 200+ Countries | Eammu Holidays",
    template: "%s | Eammu Holidays Dubai Visa Consultancy",
  },

  description:
    "Apply for a tourist visa as a Dubai or UAE resident in 2026. Expert visa consultancy for USA B1/B2, UK Standard Visitor, Canada TRV, Schengen, Japan, Australia & 200+ countries. 98% approval rate. Embassy-verified documents for UAE expats.",

  keywords: [
    // Primary — Dubai resident visa
    "tourist visa for Dubai residents 2026",
    "visa from Dubai",
    "visa consultancy Dubai",
    "visa agency Dubai",
    "UAE resident visa application",
    "tourist visa UAE residents",
    "visa for expats in Dubai",
    "Dubai resident tourist visa 2026",
    // Country-specific from Dubai
    "USA visa Dubai residents",
    "USA B1 B2 visa from Dubai",
    "UK visa Dubai residents",
    "UK Standard Visitor visa from UAE",
    "Schengen visa Dubai residents",
    "Schengen visa from Dubai 2026",
    "Canada visa Dubai residents",
    "Canada TRV from UAE",
    "Japan visa Dubai residents",
    "Australia visa from Dubai",
    "Germany visa Dubai residents",
    "France visa from Dubai",
    "Italy Schengen visa UAE residents",
    "Singapore visa Dubai expats",
    "Malaysia visa from Dubai",
    "Thailand visa from Dubai",
    // Tool/intent queries
    "visa checklist Dubai residents",
    "visa processing time UAE 2026",
    "VFS Global Dubai appointment",
    "visa documents for UAE residents",
    "visa rejection rate Dubai",
    "apply tourist visa from Dubai",
    "e-visa destinations Dubai residents",
    "visa on arrival UAE passport holders",
    "how to apply tourist visa Dubai",
    "best visa agency Dubai",
    "Bangladeshi expat visa Dubai",
    "Dubai expat travel visa",
  ],

  alternates: {
    canonical: "https://www.eammu.com/visa/dubai-residents",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.eammu.com/visa/dubai-residents",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title:
      "Tourist Visa for Dubai Residents 2026 — 98% Approval Rate | Eammu Holidays",
    description:
      "Dubai's trusted visa consultancy for UAE residents. Expert help for USA, UK, Schengen, Canada, Japan & 200+ countries. Embassy-accurate documents. 24-hr review. 1,00,000+ visas processed.",
    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Tourist visa for Dubai and UAE residents — Eammu Holidays",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@EammuHolidays",
    title:
      "Tourist Visa for Dubai Residents 2026 — Expert Consultancy | Eammu Holidays",
    description:
      "98% approval rate. USA, UK, Schengen, Canada & 200+ countries for UAE residents. Embassy-accurate docs, 24-hr review.",
    images: ["/eammu_banner_four.webp"],
  },

  icons: {
    icon: "/emf.jpg",
    apple: "/emf.jpg",
  },

  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai, United Arab Emirates",
    "geo.position": "25.2048;55.2708",
    "ICBM": "25.2048, 55.2708",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// STATIC DATA
// ─────────────────────────────────────────────────────────────────────────────
const POPULAR = [
  { name: "United States", emoji: "🇺🇸" },
  { name: "United Kingdom", emoji: "🇬🇧" },
  { name: "Canada",         emoji: "🇨🇦" },
  { name: "Australia",      emoji: "🇦🇺" },
  { name: "Germany",        emoji: "🇩🇪" },
  { name: "France",         emoji: "🇫🇷" },
  { name: "Japan",          emoji: "🇯🇵" },
  { name: "Singapore",      emoji: "🇸🇬" },
  { name: "Thailand",       emoji: "🇹🇭" },
  { name: "Malaysia",       emoji: "🇲🇾" },
  { name: "Italy",          emoji: "🇮🇹" },
  { name: "Turkey",         emoji: "🇹🇷" },
];

const WHY_US = [
  {
    icon: "🛡️",
    title: "98% Approval Rate for UAE Residents",
    desc: "Our consultants have helped 1,00,000+ Dubai residents get approved. We know exactly what embassies require from UAE-based expat applicants in 2026.",
    linkHref: "/testimonials",
    linkLabel: "Read Dubai client testimonials",
  },
  {
    icon: "📋",
    title: "Embassy-Accurate Documents",
    desc: "Every checklist verified against official embassy circulars and VFS Global UAE announcements, updated monthly for 2026 protocols for Dubai and Abu Dhabi residents.",
    linkHref: "/travel-resources/visa-checklist-generator",
    linkLabel: "Generate your free Dubai checklist",
  },
  {
    icon: "⚡",
    title: "24-Hour Document Review",
    desc: "Rapid review of your UAE bank statements, NOC, and cover letter eliminates delays before submission at Dubai or Abu Dhabi VFS centres.",
    linkHref: "/travel-resources/visa-processing-time-tracker",
    linkLabel: "Track UAE VFS processing times",
  },
  {
    icon: "🌍",
    title: "200+ Countries for UAE Residents",
    desc: "Schengen to Southeast Asia — tourist, business, student and medical visas for Dubai and UAE residents covered by specialist consultants.",
    linkHref: "/visa",
    linkLabel: "Browse all visa destinations",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    country: "UK Visa Approved ✅",
    text: "Got my UK Standard Visitor visa in 12 days applying from Dubai. The team reviewed all my documents and cover letter — zero issues at the British Embassy in Abu Dhabi.",
    stars: 5,
  },
  {
    name: "Rahul Mehta",
    country: "Schengen Approved ✅",
    text: "Applied for Germany Schengen as a Dubai resident. Perfect document checklist, no rejection. Highly recommend for first-timers applying from the UAE.",
    stars: 5,
  },
  {
    name: "Ananya Iyer",
    country: "Canada Visa Approved ✅",
    text: "Canada Visitor Visa (TRV) — they helped me format everything the IRCC way as a UAE resident. Approved in 3 weeks from Dubai!",
    stars: 5,
  },
  {
    name: "Md. Karim Hossain",
    country: "USA B1/B2 Approved ✅",
    text: "Applied for USA B2 tourist visa from Dubai. Eammu prepared all my documents perfectly — bank statements, employment letter, everything. Approved first try.",
    stars: 5,
  },
];

const TOP_DESTINATIONS = [
  {
    country: "United States",
    visaType: "B1/B2 Tourist Visa",
    processingTime: "2–6 months (interview wait)",
    difficulty: "Hard",
    difficultyColor: "red",
    fee: "USD 185",
    submission: "US Embassy Abu Dhabi / VFS",
    href: "/visa/dubai-residents/united-states",
    tips: "Strong UAE employment proof and bank statements critical. Interview at US Embassy Abu Dhabi.",
    serviceHref: "/our-services/visa/usa-visa-application",
  },
  {
    country: "United Kingdom",
    visaType: "Standard Visitor Visa",
    processingTime: "3–8 weeks",
    difficulty: "Hard",
    difficultyColor: "red",
    fee: "GBP 115",
    submission: "VFS Global Dubai / Abu Dhabi",
    href: "/visa/dubai-residents/united-kingdom",
    tips: "UKVI requires 6-month UAE bank statements. Strong ties to Dubai residency help approval.",
    serviceHref: "/our-services/visa/uk-visa-application",
  },
  {
    country: "Schengen Area",
    visaType: "Schengen Type C Visa",
    processingTime: "15 working days",
    difficulty: "Medium",
    difficultyColor: "amber",
    fee: "EUR 90",
    submission: "VFS / Consulate Dubai",
    href: "/visa/dubai-residents/germany",
    tips: "Apply to the Schengen country where you spend most nights. Travel insurance mandatory.",
    serviceHref: "/our-services/visa/europe-visa-application",
  },
  {
    country: "Canada",
    visaType: "Temporary Resident Visa (TRV)",
    processingTime: "4–8 weeks",
    difficulty: "Hard",
    difficultyColor: "red",
    fee: "CAD 100",
    submission: "VFS Global Dubai",
    href: "/visa/dubai-residents/canada",
    tips: "Ties-to-home (UAE employment, property) are the deciding factor for Dubai-based applicants.",
    serviceHref: "/our-services/visa/canada-visa-application",
  },
  {
    country: "Japan",
    visaType: "Tourist Visa",
    processingTime: "4–7 working days",
    difficulty: "Easy",
    difficultyColor: "green",
    fee: "AED 150 approx.",
    submission: "Japan Consulate Dubai",
    href: "/visa/dubai-residents/japan",
    tips: "One of the fastest from Dubai. Day-by-day itinerary and hotel bookings required.",
    serviceHref: "/our-services/visa/japan-visa-application",
  },
  {
    country: "Australia",
    visaType: "Visitor Visa (Subclass 600)",
    processingTime: "4–8 weeks",
    difficulty: "Medium",
    difficultyColor: "amber",
    fee: "AUD 190",
    submission: "Online (ImmiAccount)",
    href: "/visa/dubai-residents/australia",
    tips: "Applied online. UAE residency status and bank statements are key evidence.",
    serviceHref: "/our-services/visa/australia-visa-application",
  },
];

const VISA_CATEGORIES = [
  {
    label: "Europe & Schengen Visa",
    icon: "🏰",
    desc: "Germany, France, Italy, Spain & 22 more Schengen nations from Dubai",
    href: "/schengen-visa",
    tag: "Most popular",
  },
  {
    label: "USA & North America",
    icon: "🗽",
    desc: "USA B1/B2, Canada TRV — expert help for Dubai-based applicants",
    href: "/visa/dubai-residents/united-states",
    tag: null,
  },
  {
    label: "Asia Pacific Visa",
    icon: "🏯",
    desc: "Japan, Singapore, Thailand, Malaysia, South Korea from Dubai",
    href: "/visa/dubai-residents/japan",
    tag: null,
  },
  {
    label: "Australia & New Zealand",
    icon: "🦘",
    desc: "Australian Subclass 600, NZ Visitor Visa for UAE residents",
    href: "/visa/dubai-residents/australia",
    tag: null,
  },
  {
    label: "E-Visa Destinations",
    icon: "⚡",
    desc: "Turkey, India, Sri Lanka, Kenya — fast e-visas for Dubai residents",
    href: "/visa/e-visa",
    tag: "Fastest",
  },
  {
    label: "Student Visa from Dubai",
    icon: "🎓",
    desc: "Study abroad from Dubai — UK, USA, Canada, Germany student visas",
    href: "/our-services/visa-services/student-visa-from-bangladesh",
    tag: null,
  },
];

const STATS = [
  { val: "1,00,000+", label: "Visas Processed" },
  { val: "98%",       label: "Approval Rate" },
  { val: "200+",      label: "Countries Covered" },
  { val: "24hr",      label: "Document Review" },
  { val: "2026",      label: "Updated Protocols" },
];

const SLIDES = [
  { img: "/the-love-island.webp",               tag: "Island Getaways", title: "Explore Paradise from Dubai" },
  { img: "/top-travel-agency.webp",             tag: "Trusted Agency",  title: "Expert Visa Guidance UAE" },
  { img: "/travel_banner_second_part_one.webp", tag: "200+ Countries",  title: "Your World Awaits" },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Choose your destination",
    desc: "Browse 200+ tourist visa guides for Dubai residents or search your country. Each page has 2026 requirements specific to UAE-based applicants.",
    href: "/visa/dubai-residents",
    cta: "Browse all destinations",
  },
  {
    step: "02",
    title: "Generate your free visa checklist",
    desc: "Our free checklist tool gives you a destination-specific document list verified against official embassy circulars for UAE residents — no guesswork.",
    href: "/travel-resources/visa-checklist-generator",
    cta: "Get free checklist",
  },
  {
    step: "03",
    title: "24-hr document review",
    desc: "Submit your UAE bank statements, Dubai employment NOC, Emirates ID copy, and cover letter. Our experts fix issues before you go to VFS or the consulate.",
    href: "/contact/travel-agency-dubai",
    cta: "Talk to our Dubai team",
  },
  {
    step: "04",
    title: "VFS / Consulate submission",
    desc: "We guide you through VFS Global UAE appointment booking and submission in Dubai or Abu Dhabi. Everything verified before you walk in.",
    href: "/travel-resources/visa-processing-time-tracker",
    cta: "Check VFS processing times",
  },
  {
    step: "05",
    title: "Collect your visa & travel",
    desc: "Collect your approved visa from VFS Global UAE. Our 98% approval rate means you can book flights with confidence while waiting.",
    href: "/testimonials",
    cta: "See UAE approval stories",
  },
];

const FAQS = [
  {
    q: "Which countries can Dubai residents visit without a visa in 2026?",
    a: "Dubai residents (UAE residence visa holders) enjoy several benefits depending on passport nationality. Many countries offer visa-on-arrival or e-visa options specifically for UAE residence visa holders. Countries like Singapore, Georgia, Azerbaijan, and many others grant easy access. Use our country search above to check requirements for any destination.",
  },
  {
    q: "What bank balance is required for a tourist visa for Dubai residents?",
    a: "Most embassies expect the equivalent of AED 5,000–15,000 (USD 1,500–4,000) with 3–6 months of stable UAE bank history. Schengen visas typically require €3,000–5,000 equivalent. USA and UK require strong financial documentation. Our consultants advise based on your specific destination and nationality profile.",
  },
  {
    q: "What documents do Dubai residents need for a tourist visa application?",
    a: "Core documents include: valid passport (min. 6 months validity), UAE residence visa copy, Emirates ID, UAE bank statements (3–6 months), employment/business proof in Dubai, confirmed return flights and hotel bookings, and a cover letter. Specific requirements vary by destination. Use our free visa checklist generator for a country-specific list.",
  },
  {
    q: "Where do Dubai residents submit visa applications in the UAE?",
    a: "Depending on the destination: UK, Canada, Australia, India visa applications go through VFS Global UAE (Dubai and Abu Dhabi). Schengen visas go through VFS or the respective consulate in Dubai. USA visa applications require an interview appointment at the US Embassy in Abu Dhabi. Japan and Singapore have consulates in Dubai. Our team guides you to the exact submission point for your country.",
  },
  {
    q: "How long does visa processing take for Dubai residents in 2026?",
    a: "Processing times from Dubai in 2026: Schengen — 15 working days; UK — 3–8 weeks; USA — 2–6 months (interview wait at US Embassy Abu Dhabi); Canada — 4–8 weeks; Japan — 4–7 working days; Australia — 4–8 weeks. Apply well in advance and track real-time processing times on our VFS processing time tracker.",
  },
  {
    q: "Can Bangladeshi expats in Dubai apply for third-country tourist visas?",
    a: "Yes. Bangladeshi nationals residing in Dubai can apply for tourist visas to the USA, UK, Canada, Schengen area, Japan, Australia, and many more countries. Your UAE residence visa strengthens your application as it demonstrates financial stability and ties to the UAE. Eammu Holidays specializes in third-country visa applications for Bangladeshi expats in Dubai.",
  },
  {
    q: "What is the visa rejection rate for Dubai residents applying for USA or UK visas?",
    a: "Rejection rates vary by nationality. South Asian passport holders in Dubai face higher scrutiny for USA and UK visas. A strong UAE bank statement, employment letter from a Dubai company, and a professional cover letter significantly improve approval chances. See our visa rejection rate analysis for detailed data and how to avoid common refusal reasons.",
  },
  {
    q: "Does Eammu Holidays have an office in Dubai for visa consultancy?",
    a: "Yes. Eammu Holidays operates a Dubai branch specifically serving UAE residents and expats. We provide in-person document review, VFS appointment guidance, and full visa application support from Dubai. Contact our Dubai office for an appointment.",
  },
];

const SEO_LINKS = [
  { name: "USA B1/B2 Tourist Visa from Dubai",    slug: "united-states",  desc: "DS-160 form, bank statement, interview tips from UAE" },
  { name: "UK Standard Visitor Visa from Dubai",  slug: "united-kingdom", desc: "UKVI checklist, photo specs, financial proof for UAE residents" },
  { name: "Canada Visitor Visa (TRV) from Dubai", slug: "canada",         desc: "IRCC requirements, biometrics, checklist from Dubai" },
  { name: "Schengen Visa from Dubai",             slug: "germany",        desc: "Germany, France, Italy — single Schengen visa from UAE" },
  { name: "Japan Tourist Visa from Dubai",        slug: "japan",          desc: "Consulate checklist, bank balance for UAE residents" },
  { name: "Australia Tourist Visa from Dubai",    slug: "australia",      desc: "Subclass 600, documents, processing time from UAE" },
  { name: "Malaysia e-Visa from Dubai",           slug: "malaysia",       desc: "eNTRI, eVISA — quick & easy for UAE residents" },
  { name: "Thailand Tourist Visa from Dubai",     slug: "thailand",       desc: "TR visa from Royal Thai Consulate, Dubai" },
  { name: "Singapore Tourist Visa from Dubai",    slug: "singapore",      desc: "ICA requirements, tourist pass guide from Dubai" },
  { name: "South Korea Visa from Dubai",          slug: "south-korea",    desc: "K-ETA, tourist visa guide for UAE residents" },
  { name: "Turkey e-Visa from Dubai",             slug: "turkey",         desc: "Online e-visa, fast processing for Dubai residents" },
  { name: "Italy Schengen Visa from Dubai",       slug: "italy",          desc: "Italian consulate Dubai, Schengen requirements 2026" },
];

// ─────────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// ─────────────────────────────────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://www.eammu.com/#organization",
  name: "Eammu Holidays",
  url: "https://www.eammu.com",
  logo: { "@type": "ImageObject", url: "https://www.eammu.com/emf.jpg" },
  description:
    "Dubai's trusted tourist visa consultancy for UAE residents. 98% approval rate. Expert help for USA, UK, Schengen, Canada, Japan & 200+ countries.",
  areaServed: ["AE", "BD", "Worldwide"],
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
      streetAddress: "Dubai Branch",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Cumilla",
      addressRegion: "Chittagong Division",
      addressCountry: "BD",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "3241",
    bestRating: "5",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.eammu.com/visa/dubai-residents/#service",
  serviceType: "Tourist Visa Consultancy for Dubai Residents",
  name: "Tourist Visa for Dubai & UAE Residents — Expert Visa Consultancy",
  description:
    "Professional tourist visa consultancy for Dubai and UAE residents. We prepare embassy-accurate documentation for USA B1/B2, UK Standard Visitor, Canada TRV, Schengen, Japan, Australia & 200+ destinations with a 98% approval rate.",
  provider: { "@id": "https://www.eammu.com/#organization" },
  areaServed: { "@type": "City", name: "Dubai", containedInPlace: { "@type": "Country", name: "United Arab Emirates" } },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Visa Services for Dubai Residents",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "USA B1/B2 Visa for Dubai Residents", url: "https://www.eammu.com/visa/dubai-residents/united-states" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "UK Standard Visitor Visa from Dubai", url: "https://www.eammu.com/visa/dubai-residents/united-kingdom" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Schengen Visa for UAE Residents", url: "https://www.eammu.com/schengen-visa" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Canada TRV from Dubai", url: "https://www.eammu.com/visa/dubai-residents/canada" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Japan Tourist Visa from Dubai", url: "https://www.eammu.com/visa/dubai-residents/japan" } },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",          item: "https://www.eammu.com" },
    { "@type": "ListItem", position: 2, name: "Visa Services", item: "https://www.eammu.com/visa" },
    { "@type": "ListItem", position: 3, name: "Dubai Residents Visa Guide 2026", item: "https://www.eammu.com/visa/dubai-residents" },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.eammu.com/visa/dubai-residents/#webpage",
  url: "https://www.eammu.com/visa/dubai-residents",
  name: "Tourist Visa for Dubai Residents 2026 — 200+ Countries | Eammu Holidays",
  description: "Expert tourist visa consultancy for Dubai and UAE residents. 98% approval rate. 200+ countries covered.",
  inLanguage: "en-US",
  dateModified: new Date().toISOString().split("T")[0],
  breadcrumb: { "@id": "https://www.eammu.com/visa/dubai-residents/#breadcrumb" },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#hero-heading", "#why-heading", "#faq-heading", "#top-dest-heading"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which countries can Dubai residents visit without a visa in 2026?",
      acceptedAnswer: { "@type": "Answer", text: "Dubai residents (UAE residence visa holders) enjoy visa-free or visa-on-arrival access to many countries including Singapore, Georgia, Azerbaijan, Turkey, Malaysia, and more, depending on their passport nationality. Check each country's entry requirements via our country search tool." },
    },
    {
      "@type": "Question",
      name: "What bank balance is required for a tourist visa for Dubai residents?",
      acceptedAnswer: { "@type": "Answer", text: "Most embassies expect AED 5,000–15,000 equivalent with 3–6 months of stable UAE bank history. Schengen requires €3,000–5,000. USA and UK require strong financial documentation tailored to your income profile in Dubai." },
    },
    {
      "@type": "Question",
      name: "What documents do Dubai residents need for a tourist visa application?",
      acceptedAnswer: { "@type": "Answer", text: "Core documents: valid passport (min. 6 months), UAE residence visa copy, Emirates ID, UAE bank statements (3–6 months), Dubai employment or business proof, confirmed return flights and hotel bookings, and a cover letter. Requirements vary by destination country." },
    },
    {
      "@type": "Question",
      name: "Where do Dubai residents submit visa applications in the UAE?",
      acceptedAnswer: { "@type": "Answer", text: "UK, Canada, Australia, India through VFS Global UAE (Dubai/Abu Dhabi). Schengen through VFS or respective consulate in Dubai. USA through the US Embassy in Abu Dhabi (appointment required). Japan and Singapore have consulates in Dubai." },
    },
    {
      "@type": "Question",
      name: "How long does visa processing take for Dubai residents in 2026?",
      acceptedAnswer: { "@type": "Answer", text: "Processing times from Dubai: Schengen 15 working days; UK 3–8 weeks; USA 2–6 months; Canada 4–8 weeks; Japan 4–7 working days; Australia 4–8 weeks. Track real-time VFS processing times at eammu.com/travel-resources/visa-processing-time-tracker." },
    },
    {
      "@type": "Question",
      name: "Can Bangladeshi expats in Dubai apply for third-country tourist visas?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Bangladeshi nationals residing in Dubai can apply for tourist visas to USA, UK, Canada, Schengen, Japan, Australia, and more. UAE residency strengthens applications. Eammu Holidays specializes in third-country visa applications for Bangladeshi expats in Dubai." },
    },
    {
      "@type": "Question",
      name: "What is the visa rejection rate for Dubai residents applying for USA or UK visas?",
      acceptedAnswer: { "@type": "Answer", text: "South Asian passport holders in Dubai face higher scrutiny for USA and UK visas. A strong UAE bank statement, Dubai employment letter, and professional cover letter significantly improve approval. See eammu.com/visa-rejection for detailed rejection rate analysis." },
    },
    {
      "@type": "Question",
      name: "Does Eammu Holidays have an office in Dubai for visa consultancy?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Eammu Holidays operates a Dubai branch specifically serving UAE residents and expats with in-person document review, VFS appointment guidance, and full visa application support." },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Apply for a Tourist Visa from Dubai with Eammu Holidays",
  description: "Step-by-step process for Dubai and UAE residents to apply for a tourist visa through Eammu Holidays visa consultancy.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Choose your destination", text: "Browse 200+ tourist visa guides for Dubai residents at eammu.com/visa/dubai-residents.", url: "https://www.eammu.com/visa/dubai-residents" },
    { "@type": "HowToStep", position: 2, name: "Generate your free visa checklist", text: "Use our free checklist generator for a destination-specific document list for UAE residents.", url: "https://www.eammu.com/travel-resources/visa-checklist-generator" },
    { "@type": "HowToStep", position: 3, name: "24-hr document review", text: "Submit your UAE bank statements, Dubai NOC, and cover letter for expert review." },
    { "@type": "HowToStep", position: 4, name: "VFS / Consulate submission in Dubai", text: "We guide you through VFS Global UAE appointment booking and submission." },
    { "@type": "HowToStep", position: 5, name: "Collect your visa", text: "Collect your approved visa from VFS Global UAE or the relevant consulate in Dubai or Abu Dhabi." },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.eammu.com/contact/travel-agency-dubai/#localbusiness",
  name: "Eammu Holidays — Dubai Branch",
  description: "Dubai's leading tourist visa consultancy for UAE residents and expats. Expert help for USA, UK, Schengen, Canada & 200+ countries.",
  url: "https://www.eammu.com/contact/travel-agency-dubai",
  image: "https://www.eammu.com/eammu_banner_four.webp",
  priceRange: "$$",
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  geo: { "@type": "GeoCoordinates", latitude: "25.2048", longitude: "55.2708" },
  areaServed: "Dubai, United Arab Emirates",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "3241", bestRating: "5" },
};

// ─────────────────────────────────────────────────────────────────────────────
// SERVER-SIDE DATA FETCH
// ─────────────────────────────────────────────────────────────────────────────
async function getCountries() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL 
      ?? process.env.VERCEL_URL 
        ? `https://${process.env.VERCEL_URL}` 
        : "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/countries`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE — Server Component
// ─────────────────────────────────────────────────────────────────────────────
export default async function TouristVisaDubaiResidents() {
  const countries = await getCountries();

  const difficultyColors = {
    red:   "bg-red-50 text-red-600 border-red-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
    green: "bg-green-50 text-green-600 border-green-100",
  };

  return (
    <>
      {/* ── STRUCTURED DATA ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <div
        className="min-h-[60vh] bg-white text-black font-sans"
        style={{ fontFamily: "'Plus Jakarta Sans','DM Sans',system-ui,sans-serif" }}
      >
        {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-black/5">
          <ol
            className="max-w-6xl mx-auto px-5 py-2.5 flex items-center gap-2 text-xs text-black/40"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" className="hover:text-[#d4a800] font-medium transition" itemProp="item">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-black/20">›</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/visa" className="hover:text-[#d4a800] font-medium transition" itemProp="item">
                <span itemProp="name">Visa Services</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <li className="text-black/20">›</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="font-semibold text-black/60">
              <span itemProp="name">Dubai Residents Visa Guide 2026</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* ── HERO — Client Component ── */}
        <CountryExplorer countries={countries} slides={SLIDES} popular={POPULAR} />

        {/* ── STATS STRIP ── */}
        <section style={{ background: "#f5c800" }} className="py-5 shadow-sm" aria-label="Key statistics">
          <div className="max-w-6xl mx-auto px-5">
            <dl className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              {STATS.map((s, i) => (
                <div key={i} className="text-center">
                  <dt className="text-2xl md:text-3xl font-black text-black">{s.val}</dt>
                  <dd className="text-xs font-bold text-black/60 uppercase tracking-widest">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── TOP DESTINATIONS — detailed cards ── */}
        <section aria-labelledby="top-dest-heading" className="max-w-6xl mx-auto px-5 py-16">
          <div className="mb-10">
            <p className="text-[#d4a800] text-xs font-black uppercase tracking-widest mb-2">2026 Updated</p>
            <h2 id="top-dest-heading" className="text-3xl md:text-4xl font-black text-black mb-2">
              Most Popular Tourist Visas for Dubai Residents
            </h2>
            <p className="text-black/40 text-sm max-w-2xl">
              Processing times, embassy fees, difficulty ratings, and expert tips — all verified for
              UAE-based applicants in 2026. View country pages for full{" "}
              <Link href="/travel-resources/visa-checklist-generator" className="text-[#d4a800] font-semibold hover:underline">
                document checklists
              </Link>{" "}
              and{" "}
              <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#d4a800] font-semibold hover:underline">
                VFS processing times
              </Link>
              .
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOP_DESTINATIONS.map((d, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl border border-black/5 hover:border-[#f5c800]/40 hover:shadow-xl transition-all p-5"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-black text-black text-base mb-0.5" itemProp="name">
                      <Link href={d.href} className="hover:text-[#d4a800] transition">
                        {d.country} {d.visaType}
                      </Link>
                    </h3>
                    <p className="text-[10px] text-black/30 font-semibold">{d.submission}</p>
                  </div>
                  <span className={`text-xs font-black px-2 py-1 rounded-lg border ${difficultyColors[d.difficultyColor]}`}>
                    {d.difficulty}
                  </span>
                </div>
                <div className="flex gap-4 mb-3">
                  <div>
                    <p className="text-[10px] text-black/30 font-bold uppercase">Processing</p>
                    <p className="text-xs font-black text-black/70">{d.processingTime}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-black/30 font-bold uppercase">Fee</p>
                    <p className="text-xs font-black text-black/70">{d.fee}</p>
                  </div>
                </div>
                <p className="text-xs text-black/40 leading-relaxed mb-4">{d.tips}</p>
                <div className="flex gap-2">
                  <Link
                    href={d.href}
                    className="flex-1 text-center text-xs font-black text-black bg-[#f5c800] hover:bg-[#d4a800] px-3 py-2 rounded-xl transition"
                  >
                    Full guide →
                  </Link>
                  <Link
                    href={d.serviceHref}
                    className="text-xs font-bold text-black/40 hover:text-black border border-black/10 px-3 py-2 rounded-xl transition hover:border-[#f5c800]/40"
                  >
                    Apply
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link
              href="/visa-rejection"
              className="text-black/40 hover:text-[#d4a800] font-semibold underline transition"
            >
              📊 Visa rejection rates for Dubai-based applicants →
            </Link>
            <Link
              href="/schengen-visa"
              className="text-black/40 hover:text-[#d4a800] font-semibold underline transition"
            >
              🇪🇺 Full Schengen visa guide for UAE residents →
            </Link>
          </div>
        </section>

        {/* ── VISA CATEGORIES ── */}
        <section className="max-w-6xl mx-auto px-5 py-10 border-t border-black/5" aria-labelledby="categories-heading">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#d4a800] text-xs font-black uppercase tracking-widest mb-2">Browse by Category</p>
              <h2 id="categories-heading" className="text-3xl md:text-4xl font-black text-black">
                All Visa Types for Dubai &amp; UAE Residents
              </h2>
            </div>
            <Link
              href="/visa"
              className="text-xs font-bold text-black/40 hover:text-[#d4a800] transition border border-black/10 px-4 py-2 rounded-xl hover:border-[#f5c800]/40"
            >
              All visa types →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VISA_CATEGORIES.map((cat, i) => (
              <Link
                key={i}
                href={cat.href}
                className="group relative flex items-start gap-4 p-5 rounded-2xl border border-black/5 bg-gray-50 hover:bg-white hover:shadow-lg hover:border-[#f5c800]/30 transition-all duration-300"
              >
                {cat.tag && (
                  <span className="absolute top-4 right-4 text-[10px] font-black bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                    {cat.tag}
                  </span>
                )}
                <span className="text-3xl">{cat.icon}</span>
                <div>
                  <h3 className="font-black text-black text-sm mb-1 group-hover:text-[#d4a800] transition">{cat.label}</h3>
                  <p className="text-xs text-black/40 leading-relaxed">{cat.desc}</p>
                </div>
                <span className="ml-auto text-[#f5c800] font-black text-sm opacity-0 group-hover:opacity-100 transition">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section aria-labelledby="how-heading" className="py-20 bg-gray-50 border-t border-black/5">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-12">
              <p className="text-[#d4a800] text-xs font-black uppercase tracking-widest mb-3">Simple Process</p>
              <h2 id="how-heading" className="text-3xl md:text-4xl font-black text-black mb-2">
                How to Get Your Tourist Visa from Dubai — 5 Steps
              </h2>
              <p className="text-black/40 text-sm max-w-xl mx-auto">
                From choosing your destination to collecting your visa at{" "}
                <Link href="/contact/travel-agency-dubai" className="text-[#d4a800] font-semibold hover:underline">
                  VFS Global UAE
                </Link>{" "}
                — Eammu Holidays handles every step.
              </p>
            </div>
            <ol className="space-y-4" aria-label="Visa application steps for Dubai residents">
              {HOW_IT_WORKS.map((s, i) => (
                <li
                  key={i}
                  className="flex gap-5 items-start bg-white rounded-2xl border border-black/5 hover:border-[#f5c800]/30 p-6 transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f5c800] text-black rounded-2xl flex items-center justify-center font-black text-lg shadow">
                    {s.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-black text-base mb-1">{s.title}</h3>
                    <p className="text-sm text-black/40 leading-relaxed mb-2">{s.desc}</p>
                    <Link href={s.href} className="text-xs font-black text-[#d4a800] hover:underline">
                      {s.cta} →
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="border-t border-black/5 py-24 bg-white" aria-labelledby="why-heading">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-16">
              <p className="text-[#d4a800] text-xs font-black uppercase tracking-widest mb-3">
                Why 1,00,000+ UAE Residents Trust Us
              </p>
              <h2 id="why-heading" className="text-4xl md:text-5xl font-black text-black mb-4">
                Dubai&apos;s Most Trusted<br />Tourist Visa Consultancy
              </h2>
              <p className="text-black/40 max-w-xl mx-auto text-sm leading-relaxed">
                We don&apos;t just tell you what documents you need — we verify them, format them to embassy
                standards, and ensure your application is submission-ready from Dubai.{" "}
                <Link href="/testimonials" className="text-[#d4a800] font-semibold hover:underline">
                  Read client testimonials →
                </Link>
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {WHY_US.map((w, i) => (
                <div
                  key={i}
                  className="p-7 rounded-2xl border border-black/5 bg-gray-50 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-5">{w.icon}</div>
                  <h3 className="font-black text-black text-lg mb-2">{w.title}</h3>
                  <p className="text-sm text-black/40 leading-relaxed mb-3">{w.desc}</p>
                  {w.linkHref && (
                    <Link href={w.linkHref} className="text-xs text-[#d4a800] font-semibold hover:underline">
                      {w.linkLabel} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-20 bg-gray-50 border-t border-black/5" aria-labelledby="testimonials-heading">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-12">
              <p className="text-[#d4a800] text-xs font-black uppercase tracking-widest mb-3">Real Stories</p>
              <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-black text-black">
                Approved by Dubai Residents
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {TESTIMONIALS.map((t, i) => (
                <figure
                  key={i}
                  className="p-6 rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-lg transition-all"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="flex gap-0.5 mb-4" aria-label={`${t.stars} out of 5 stars`}>
                    {"★".repeat(t.stars).split("").map((_, j) => (
                      <span key={j} className="text-[#f5c800] text-sm" aria-hidden="true">★</span>
                    ))}
                  </div>
                  <blockquote className="text-black/60 text-sm leading-relaxed mb-4 italic" itemProp="reviewBody">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption>
                    <p className="font-black text-black text-sm" itemProp="author">{t.name}</p>
                    <p className="text-xs text-[#d4a800] font-bold">{t.country}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/testimonials"
                className="inline-block px-8 py-3 bg-[#f5c800] text-black font-black rounded-full hover:bg-[#d4a800] transition text-sm shadow"
              >
                Read all Dubai client testimonials →
              </Link>
            </div>
          </div>
        </section>

        {/* ── SEO INTERNAL LINKS — country guides ── */}
        <section className="border-t border-black/5 py-20 bg-white" aria-labelledby="guides-heading">
          <div className="max-w-6xl mx-auto px-5">
            <h2 id="guides-heading" className="text-2xl md:text-3xl font-black text-black mb-3">
              Tourist Visa Guides for Dubai Residents — 2026 Edition
            </h2>
            <p className="text-black/40 text-sm mb-10">
              Complete visa guides with required documents, VFS fees, UAE bank balance requirements &amp; expert
              tips for Dubai and UAE expat applicants. Also see our{" "}
              <Link href="/visa-rejection" className="text-[#d4a800] font-semibold hover:underline">
                visa rejection rate tracker
              </Link>{" "}
              and{" "}
              <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#d4a800] font-semibold hover:underline">
                live VFS processing time tracker
              </Link>
              .
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {SEO_LINKS.map((link, i) => (
                <Link
                  key={i}
                  href={`/visa/dubai-residents/${link.slug}`}
                  className="flex items-start gap-3 p-4 rounded-xl border border-black/5 bg-gray-50 hover:bg-white hover:border-[#f5c800]/30 hover:shadow-md transition-all group"
                  title={`${link.name} — Complete guide for Dubai & UAE residents 2026`}
                >
                  <span className="text-[#f5c800] font-black text-lg mt-0.5">→</span>
                  <div>
                    <p className="font-bold text-black/80 text-sm group-hover:text-black transition">{link.name}</p>
                    <p className="text-xs text-black/35 mt-0.5">{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO ARTICLE + FAQ ── */}
        <section className="border-t border-black/5 py-20 bg-gray-50" aria-label="About tourist visa from Dubai">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="text-2xl font-black text-black mb-8">
              Tourist Visa Consultancy for Dubai Residents — Complete Guide 2026
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-sm text-black/50 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Eammu Holidays is Dubai&apos;s trusted tourist visa consultancy, helping UAE residents and
                  expats secure visas for{" "}
                  <Link href="/visa/dubai-residents/united-states" className="text-[#d4a800] font-semibold hover:underline">USA</Link>,{" "}
                  <Link href="/visa/dubai-residents/united-kingdom" className="text-[#d4a800] font-semibold hover:underline">UK</Link>,{" "}
                  <Link href="/visa/dubai-residents/canada" className="text-[#d4a800] font-semibold hover:underline">Canada</Link>,{" "}
                  <Link href="/schengen-visa" className="text-[#d4a800] font-semibold hover:underline">Schengen</Link>,{" "}
                  <Link href="/visa/dubai-residents/japan" className="text-[#d4a800] font-semibold hover:underline">Japan</Link>,{" "}
                  <Link href="/visa/dubai-residents/australia" className="text-[#d4a800] font-semibold hover:underline">Australia</Link>, and{" "}
                  <Link href="/visa" className="text-[#d4a800] font-semibold hover:underline">200+ destinations worldwide</Link>.
                  Our embassy-certified consultants prepare every document to the exact specification required
                  by each embassy — so your application gets approved from Dubai.
                </p>
                <p>
                  From <strong className="text-black/70">UAE bank statement formatting</strong> and Dubai
                  employment NOC drafting to photo compliance checks and cover letter writing — we handle
                  everything. Our{" "}
                  <Link href="/travel-resources/visa-checklist-generator" className="text-[#d4a800] font-semibold hover:underline">
                    free visa checklist generator
                  </Link>{" "}
                  gives you a country-specific list verified for UAE residents in 2026.
                </p>
                <p>
                  <strong className="text-black/70">Bangladeshi expats in Dubai</strong> benefit especially
                  from our specialist knowledge. As Bangladesh passport holders, UAE residency significantly
                  strengthens third-country visa applications. We know exactly what the US Embassy in Abu
                  Dhabi, UKVI, IRCC, and Schengen embassies in Dubai expect. See our{" "}
                  <Link href="/visa-rejection" className="text-[#d4a800] font-semibold hover:underline">
                    visa rejection rate analysis
                  </Link>{" "}
                  to understand your risk before applying.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Our 2026 tourist visa guides are updated monthly based on official embassy circulars and
                  {" "}
                  <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#d4a800] font-semibold hover:underline">
                    current VFS Global UAE processing times
                  </Link>
                  . We track policy changes across VFS Dubai, VFS Abu Dhabi, and all consulates in the
                  UAE — so you never submit with outdated documents.
                </p>
                <p>
                  Beyond tourist visas, Eammu Holidays Dubai helps UAE residents with{" "}
                  <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-[#d4a800] font-semibold hover:underline">
                    student visas
                  </Link>
                  ,{" "}
                  <Link href="/our-services/visa-services/work-visa-from-bangladesh" className="text-[#d4a800] font-semibold hover:underline">
                    work visas
                  </Link>
                  ,{" "}
                  <Link href="/visa/e-visa" className="text-[#d4a800] font-semibold hover:underline">e-visa applications</Link>, and{" "}
                  <Link href="/scholarships" className="text-[#d4a800] font-semibold hover:underline">scholarship guidance</Link>.
                  We also run{" "}
                  <Link href="/target-usa-visa-interview-preparation" className="text-[#d4a800] font-semibold hover:underline">
                    USA visa interview preparation
                  </Link>{" "}
                  for US Embassy Abu Dhabi interviews and{" "}
                  <Link href="/target-ielts-immigration-center" className="text-[#d4a800] font-semibold hover:underline">
                    IELTS preparation
                  </Link>{" "}
                  for UAE residents planning to study abroad.
                </p>
                <p>
                  <strong className="text-black/70">2026 update:</strong> VFS Global UAE has updated
                  appointment systems for UK, Canada, and Australia visa categories in Dubai and Abu Dhabi.
                  Eammu Holidays tracks all changes in real time.{" "}
                  <Link href="/contact/travel-agency-dubai" className="text-[#d4a800] font-semibold hover:underline">
                    Visit our Dubai office
                  </Link>{" "}
                  or connect via our{" "}
                  <Link href="/online-travel-agency-bangladesh" className="text-[#d4a800] font-semibold hover:underline">
                    online visa agency
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-12 pt-8 border-t border-black/5" id="faq-heading">
              <p className="text-[#d4a800] text-xs font-black uppercase tracking-widest mb-2">FAQs</p>
              <h2 className="text-2xl font-black text-black mb-6">
                Frequently Asked Questions — Tourist Visa for Dubai Residents
              </h2>
              <div className="space-y-3">
                {FAQS.map((faq, i) => (
                  <details
                    key={i}
                    className="border border-black/5 rounded-xl overflow-hidden group bg-white"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <summary className="px-5 py-4 cursor-pointer font-bold text-black/80 text-sm flex items-center justify-between list-none hover:bg-gray-50" itemProp="name">
                      {faq.q}
                      <span className="text-[#f5c800] font-black group-open:rotate-45 transition-transform inline-block ml-4 flex-shrink-0">
                        +
                      </span>
                    </summary>
                    <div
                      className="px-5 pb-4 pt-2 text-sm text-black/50 leading-relaxed border-t border-black/5"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <span itemProp="text">{faq.a}</span>
                    </div>
                  </details>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/contact/travel-agency-dubai"
                  className="inline-block px-8 py-3 bg-[#f5c800] text-black font-black rounded-full hover:bg-[#d4a800] transition text-sm shadow"
                >
                  Talk to our Dubai visa consultant →
                </Link>
              </div>
            </div>

            {/* Internal Link Mesh */}
            <div className="mt-12 pt-8 border-t border-black/5">
              <p className="text-xs text-black/25 font-bold uppercase tracking-widest mb-4">
                Related Visa Resources — Dubai &amp; UAE Residents
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { label: "Tourist visa from Bangladesh",           href: "/visa" },
                  { label: "Schengen visa 2026",                     href: "/schengen-visa" },
                  { label: "USA visa from Dubai",                    href: "/visa/dubai-residents/united-states" },
                  { label: "UK visa from Dubai",                     href: "/visa/dubai-residents/united-kingdom" },
                  { label: "Canada visa Dubai residents",            href: "/visa/dubai-residents/canada" },
                  { label: "Japan visa from Dubai",                  href: "/visa/dubai-residents/japan" },
                  { label: "Australia visa from Dubai",              href: "/visa/dubai-residents/australia" },
                  { label: "Germany Schengen visa Dubai",            href: "/our-services/visa/germany-visa-application" },
                  { label: "France visa Dubai residents",            href: "/our-services/visa/europe-visa-application" },
                  { label: "Singapore visa from Dubai",              href: "/visa/dubai-residents/singapore" },
                  { label: "Malaysia visa Dubai residents",          href: "/visa/dubai-residents/malaysia" },
                  { label: "Thailand visa from Dubai",               href: "/visa/dubai-residents/thailand" },
                  { label: "Turkey e-visa from Dubai",               href: "/visa/dubai-residents/turkey" },
                  { label: "E-visa destinations UAE residents",      href: "/visa/e-visa" },
                  { label: "Free visa checklist generator",          href: "/travel-resources/visa-checklist-generator" },
                  { label: "VFS UAE processing time tracker",        href: "/travel-resources/visa-processing-time-tracker" },
                  { label: "Visa rejection rates Dubai",             href: "/visa-rejection" },
                  { label: "USA visa interview prep Dubai",          href: "/target-usa-visa-interview-preparation" },
                  { label: "IELTS center Dubai",                     href: "/target-ielts-immigration-center" },
                  { label: "Student visa from Dubai",                href: "/our-services/visa-services/student-visa-from-bangladesh" },
                  { label: "Work visa UAE residents",                href: "/our-services/visa-services/work-visa-from-bangladesh" },
                  { label: "Scholarships for Dubai residents",       href: "/scholarships" },
                  { label: "Eammu Dubai office",                     href: "/contact/travel-agency-dubai" },
                  { label: "Online visa agency",                     href: "/online-travel-agency-bangladesh" },
                  { label: "India visa from Dubai",                  href: "/our-services/visa/india-visa-application" },
                  { label: "All visa services",                      href: "/our-services/visa-services" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs font-semibold text-black/50 bg-white border border-black/10 px-3 py-1.5 rounded-full hover:bg-[#f5c800] hover:text-black hover:border-[#f5c800] transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}