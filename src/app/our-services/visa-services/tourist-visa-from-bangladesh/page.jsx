import TouristVisaBangladesh from "@/Components/Client/visaServices/Visa/TouristVisaBangladesh/TouristVisaBangladesh";
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";

// ─── PAGE METADATA ────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://eammu.com"),

  title: {
    default:
      "Apply for Tourist Visa from Bangladesh | Eammu Holidays",
  },

  description:
    "Apply for a tourist visa from Bangladesh in 2026. Expert assistance for USA B1/B2, UK Standard Visitor, Canada V-1, Schengen 29-country, Dubai, Japan, and 200+ destinations. 98% approval rate. Free document checklist. Call +8801701699743.",

  keywords: [
    "tourist visa from Bangladesh",
    "visit visa from Bangladesh 2026",
    "tourist visa Bangladesh apply",
    "USA tourist visa from Bangladesh",
    "UK visitor visa Bangladesh",
    "Canada visit visa Bangladesh",
    "Schengen visa from Bangladesh",
    "Dubai tourist visa from Bangladesh",
    "Japan tourist visa Bangladesh",
    "Australia tourist visa Bangladesh",
    "visa agency Bangladesh",
    "tourist visa consultancy Bangladesh",
    "tourist visa checklist Bangladesh",
    "tourist visa rejection Bangladesh",
    "Eammu Holidays tourist visa",
    "VFS visa appointment Bangladesh",
    "NOC for tourist visa Bangladesh",
    "bank statement tourist visa Bangladesh",
    "travel visa processing Bangladesh",
    "visit visa approval Bangladesh 2026",
  ],

  alternates: {
    canonical:
      "https://eammu.com/our-services/visa-services/tourist-visa-from-bangladesh",
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
    url: "https://eammu.com/our-services/visa-services/tourist-visa-from-bangladesh",
    siteName: "Eammu Holidays",
    locale: "en_BD",

    title:
      "Tourist Visa from Bangladesh 2026 — USA, UK, Canada, Schengen & 200+ Countries",

    description:
      "Get expert tourist visa assistance from Bangladesh. Eammu Holidays has processed 12,000+ passports with a 98% approval rate. Free checklist. Embassy-ready documentation for USA, UK, Canada, Schengen, Dubai, Japan, and 200+ destinations.",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Tourist visa consultancy from Bangladesh — Eammu Holidays",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tourist Visa from Bangladesh 2026 | Eammu Holidays",
    description:
      "USA B1/B2, UK Visitor, Canada V-1, Schengen & 200+ countries. 98% approval rate. Free consultation.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};

// ─── STRUCTURED DATA ──────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://eammu.com/#organization",
  name: "Eammu Holidays",
  url: "https://eammu.com",
  logo: {
    "@type": "ImageObject",
    url: "https://eammu.com/images/logo.png",
    width: 200,
    height: 60,
  },
  description:
    "Bangladesh's leading tourist and student visa consultancy. Expert assistance for USA, UK, Canada, Schengen, Dubai, Japan, Australia, and 200+ destinations worldwide since 2018.",
  foundingDate: "2018",
  areaServed: { "@type": "Country", name: "Bangladesh" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gomoti Tower, 4th Floor, Cantonment",
    addressLocality: "Cumilla",
    addressCountry: "BD",
    postalCode: "3500",
  },
  telephone: "+8801701699743",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "10:00",
    closes: "19:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2400",
    bestRating: "5",
  },
  sameAs: ["https://www.facebook.com/eammuholidays"],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://eammu.com/our-services/visa-services/tourist-visa-from-bangladesh#service",
  name: "Tourist Visa Consultancy from Bangladesh",
  alternateName: "Visit Visa Assistance Bangladesh",
  serviceType: "Tourist Visa Application Assistance",
  provider: { "@id": "https://eammu.com/#organization" },
  areaServed: { "@type": "Country", name: "Bangladesh" },
  description:
    "Complete tourist visa application support for Bangladeshi travelers — from document checklist preparation, NOC drafting, bank statement audit, cover letter writing, VFS appointment booking, and embassy interview coaching.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BDT",
    description: "Free initial document assessment",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tourist Visa Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "USA B1/B2 Tourist Visa from Bangladesh" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "UK Standard Visitor Visa from Bangladesh" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Canada V-1 Tourist Visa from Bangladesh" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Schengen Tourist Visa from Bangladesh" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dubai Tourist Visa from Bangladesh" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Japan Tourist Visa from Bangladesh" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Australia Tourist Visa from Bangladesh" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "NOC & Bank Statement Preparation for Tourist Visa" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "VFS Appointment Booking Bangladesh" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Embassy Interview Coaching for USA & Schengen Visa" } },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
    { "@type": "ListItem", position: 2, name: "Visa Services", item: "https://eammu.com/our-services/visa-services" },
    { "@type": "ListItem", position: 3, name: "Tourist Visa from Bangladesh", item: "https://eammu.com/our-services/visa-services/tourist-visa-from-bangladesh" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What documents are required for a tourist visa from Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Required documents typically include a valid Bangladeshi passport (minimum 6 months validity), bank statements showing sufficient funds (last 3-6 months), an NOC from employer or Trade License for business owners, hotel bookings and flight reservations, travel insurance (mandatory for Schengen), passport photos, and a detailed travel itinerary. Specific requirements vary by destination country. Use Eammu Holidays' free visa checklist generator for a complete list.",
      },
    },
    {
      "@type": "Question",
      name: "How long does tourist visa processing take from Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Processing times vary by country: UAE/Dubai e-visa takes 24-72 hours, Vietnam e-visa 3-5 business days, Schengen visa 15-30 working days, UK Standard Visitor visa 3-8 weeks, USA B1/B2 visa 2-4 months (interview required), Canada tourist visa 4-8 weeks. Eammu Holidays uses our visa processing time tracker to give you updated estimates before you apply.",
      },
    },
    {
      "@type": "Question",
      name: "Why do tourist visas from Bangladesh get rejected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common reasons for tourist visa rejection for Bangladeshi applicants are: insufficient bank balance or irregular transactions, weak home ties (no property, no dependents, no stable job), incomplete or incorrect documents, previous visa rejection history, and inconsistent travel purpose. Eammu Holidays specialises in identifying and fixing these weak points before your application is submitted.",
      },
    },
    {
      "@type": "Question",
      name: "Can Eammu Holidays help with visa rejection recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Eammu Holidays offers a dedicated rejection recovery service. Our consultants analyse your previous refusal letter, identify the specific grounds for rejection, rebuild your financial and home-tie documentation, and resubmit a stronger application. Contact our Cumilla office or WhatsApp +8801701699743 to book a free rejection assessment.",
      },
    },
    {
      "@type": "Question",
      name: "Does Eammu Holidays provide IATA-standard hotel and flight reservations for visa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Eammu Holidays provides IATA-standard dummy flight reservations and hotel booking confirmations that are accepted by all major embassies including Schengen, UK, USA, and Canada. These are official reservation documents, not ticket purchases, and are a standard requirement for most tourist visa applications from Bangladesh.",
      },
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tourist Visa Destinations from Bangladesh",
  description: "Top tourist visa destinations for Bangladeshi passport holders with expert consultancy from Eammu Holidays.",
  numberOfItems: 7,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "USA B1/B2 Tourist Visa from Bangladesh", url: "https://eammu.com/visa/united-states-visa" },
    { "@type": "ListItem", position: 2, name: "UK Standard Visitor Visa from Bangladesh", url: "https://eammu.com/visa/united-kingdom-visa" },
    { "@type": "ListItem", position: 3, name: "Canada Tourist Visa from Bangladesh", url: "https://eammu.com/visa/canada-visa" },
    { "@type": "ListItem", position: 4, name: "Schengen Tourist Visa from Bangladesh", url: "https://eammu.com/schengen-visa" },
    { "@type": "ListItem", position: 5, name: "Dubai Tourist Visa from Bangladesh", url: "https://eammu.com/our-services/visa/dubai-visa-application" },
    { "@type": "ListItem", position: 6, name: "Japan Tourist Visa from Bangladesh", url: "https://eammu.com/visa/japan-visa" },
    { "@type": "ListItem", position: 7, name: "Australia Tourist Visa from Bangladesh", url: "https://eammu.com/visa/australia-visa" },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://eammu.com/our-services/visa-services/tourist-visa-from-bangladesh",
  name: "Tourist Visa from Bangladesh 2026 — Eammu Holidays",
  url: "https://eammu.com/our-services/visa-services/tourist-visa-from-bangladesh",
  description:
    "Comprehensive tourist visa consultancy for Bangladeshi travelers. Expert assistance for 200+ countries including USA, UK, Canada, Schengen, Dubai, and Japan.",
  inLanguage: "en",
  isPartOf: { "@id": "https://eammu.com/#website" },
  about: { "@id": "https://eammu.com/our-services/visa-services/tourist-visa-from-bangladesh#service" },
  breadcrumb: { "@id": "https://eammu.com/our-services/visa-services/tourist-visa-from-bangladesh#breadcrumb" },
  dateModified: "2026-05-01",
  publisher: { "@id": "https://eammu.com/#organization" },
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function TouristVisaFromBangladeshPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <TouristVisaBangladesh />
      <HomeSeoLinks />
    </>
  );
}