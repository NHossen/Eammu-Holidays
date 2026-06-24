import VisaGuide from '@/Components/Client/VisaGuide/VisaGuide';
import HomeSeoLinks from '@/Components/HomeSeoLinks/HomeSeoLinks';
import React from 'react';

// ─── METADATA ────────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Visa Guide 2026 – Requirements, Documents & Application Process | Eammu Holidays",
    template: "%s | Eammu Holidays Visa Guide",
  },

  description:
    "Embassy-verified visa guide for Bangladeshi travelers — tourist, student, work & Schengen visa requirements, document checklists, processing times, and rejection rates for 195+ countries. Expert consultants. 98% approval rate.",

  keywords: [
    // High-volume transactional
    "visa guide bangladesh 2026",
    "visa requirements for bangladeshi passport",
    "how to apply for visa from bangladesh",
    "tourist visa from bangladesh",
    "student visa from bangladesh",
    "work visa from bangladesh",
    "schengen visa from bangladesh",
    // Country-specific (top converting)
    "canada visa requirements bangladesh",
    "usa visa requirements bangladesh",
    "uk visa requirements bangladesh",
    "australia visa requirements bangladesh",
    "germany visa requirements bangladesh",
    "dubai visa requirements bangladesh",
    "malaysia visa requirements bangladesh",
    "thailand visa requirements bangladesh",
    // Informational
    "visa document checklist",
    "visa processing time",
    "visa rejection rate",
    "visa application tips 2026",
    "e-visa countries for bangladeshi",
    "visa on arrival countries for bangladeshi",
    // Long-tail
    "how to get visa approval from bangladesh",
    "visa interview tips for bangladesh",
    "travel visa guide south asia",
    "eammu holidays visa consultancy",
  ],

  alternates: {
    canonical: "https://www.eammu.com/visa/visa-guide",
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
    url: "https://www.eammu.com/visa/visa-guide",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title:
      "Visa Guide 2026 – Requirements, Documents & Application Process",
    description:
      "Embassy-accurate visa requirements, document checklists, processing times & rejection rates for 195+ countries. Trusted by 42,000+ Bangladeshi travelers.",
    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Holidays Visa Guide 2026 – Requirements, Documents, Processing Times",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    creator: "@eammuholidays",
    title: "Visa Guide 2026 | Requirements, Documents & Process | Eammu Holidays",
    description:
      "Embassy-verified visa requirements for 195+ countries. Trusted by 42,000+ Bangladeshi travelers.",
    images: ["/eammu_banner_four.webp"],
  },

  icons: {
    icon: "/emf.jpg",
    shortcut: "/emf.jpg",
    apple: "/emf.jpg",
  },

  other: {
    "geo.region": "BD",
    "geo.placename": "Bangladesh",
    "DC.language": "en",
    "DC.coverage": "Worldwide",
  },
};

// ─── JSON-LD SCHEMAS ──────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://www.eammu.com/#organization",
  name: "Eammu Holidays",
  url: "https://www.eammu.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.eammu.com/emf.jpg",
  },
  description:
    "Bangladesh-based travel and visa consultancy with offices in Dhaka and Dubai. Certified visa consultants helping Bangladeshi travelers get visas for 195+ countries.",
  foundingLocation: {
    "@type": "Place",
    name: "Dhaka, Bangladesh",
  },
  areaServed: [
    { "@type": "Country", name: "Bangladesh" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Bengali"],
      areaServed: "BD",
      url: "https://www.eammu.com/contact/travel-agency-bangladesh",
    },
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English"],
      areaServed: "AE",
      url: "https://www.eammu.com/contact/travel-agency-dubai",
    },
  ],
  sameAs: [
    "https://www.eammu.com",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1247",
    bestRating: "5",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.eammu.com/visa/visa-guide#webpage",
  url: "https://www.eammu.com/visa/visa-guide",
  name: "Visa Guide 2026 – Requirements, Documents & Application Process",
  description:
    "Embassy-verified visa requirements, document checklists, processing times and rejection rates for 195+ countries.",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.eammu.com/#website",
    url: "https://www.eammu.com",
    name: "Eammu Holidays",
    publisher: { "@id": "https://www.eammu.com/#organization" },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.eammu.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Visa Services",
        item: "https://www.eammu.com/visa",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Visa Guide",
        item: "https://www.eammu.com/visa/visa-guide",
      },
    ],
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.eammu.com/eammu_banner_four.webp",
    width: 1200,
    height: 630,
  },
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".seo-speakable"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.eammu.com/visa/visa-guide#service",
  name: "Visa Consultation & Application Assistance",
  provider: { "@id": "https://www.eammu.com/#organization" },
  serviceType: "Visa Consultancy",
  description:
    "Professional visa consultation service for tourist, student, work, business and family visas. We provide document preparation, application review, and embassy submission support for 195+ countries.",
  areaServed: {
    "@type": "Country",
    name: "Bangladesh",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Visa Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tourist Visa Assistance",
          url: "https://www.eammu.com/our-services/visa-services/tourist-visa-from-bangladesh",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Student Visa Assistance",
          url: "https://www.eammu.com/our-services/visa-services/student-visa-from-bangladesh",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Work Visa Assistance",
          url: "https://www.eammu.com/our-services/visa-services/work-visa-from-bangladesh",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Schengen Visa Assistance",
          url: "https://www.eammu.com/schengen-visa",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1247",
    bestRating: "5",
  },
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
        text: "For most tourist visas from Bangladesh, you need: a valid passport (minimum 6 months validity), completed visa application form, recent passport-sized photos, bank statements (last 3–6 months), employment/business documents, travel itinerary, hotel booking confirmation, and travel insurance. Requirements vary by destination — use our Visa Checklist Generator for a country-specific list.",
      },
    },
    {
      "@type": "Question",
      name: "How long does visa processing take from Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visa processing times vary by country and visa type. Standard tourist visas typically take 5–15 business days; UK and Canada visas can take 3–8 weeks; Schengen visas average 10–15 business days. Use our Visa Processing Time Tracker for real-time estimates.",
      },
    },
    {
      "@type": "Question",
      name: "Which countries offer visa on arrival or e-visa for Bangladeshi passport holders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bangladeshi passport holders can access visa on arrival in countries including Thailand (15 days), Maldives (30 days), Nepal (90 days), Bhutan, and Cambodia. E-visa countries include Turkey, Azerbaijan, Georgia, Sri Lanka, and Kenya. Check our E-Visa guide for a complete updated list.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Schengen visa and how to apply from Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Schengen visa allows travel across 27 European countries with a single visa. To apply from Bangladesh, visit the embassy of your primary destination country (where you spend most nights). You need bank statements showing sufficient funds, travel insurance (€30,000 minimum coverage), confirmed return flights, and hotel bookings. Processing takes 10–15 business days.",
      },
    },
    {
      "@type": "Question",
      name: "Why do Bangladeshi visas get rejected and how to avoid rejection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common rejection reasons include insufficient bank balance, weak ties to home country, incomplete documentation, prior overstay history, and inconsistent application information. Use our Visa Rejection Rate Database to understand approval odds by country, and our Visa Checklist Generator to ensure your documents are complete before applying.",
      },
    },
    {
      "@type": "Question",
      name: "How much does visa assistance cost at Eammu Holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our visa consultation fees vary by visa type and destination. Contact our Dhaka or Dubai office for a quote. We provide document review, application preparation, embassy appointment booking, and full submission support with a 98% approval rate across 42,000+ processed applications.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Apply for a Visa from Bangladesh – Step-by-Step Guide",
  description:
    "Complete step-by-step guide to applying for an international visa from Bangladesh with Eammu Holidays.",
  image: "https://www.eammu.com/eammu_banner_four.webp",
  totalTime: "P14D",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "50-200",
  },
  supply: [
    { "@type": "HowToSupply", name: "Valid passport (6+ months validity)" },
    { "@type": "HowToSupply", name: "Bank statements (3–6 months)" },
    { "@type": "HowToSupply", name: "Passport-sized photographs" },
    { "@type": "HowToSupply", name: "Travel insurance" },
    { "@type": "HowToSupply", name: "Employment or business documents" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Check visa requirements",
      text: "Use Eammu Holidays' Visa Guide to look up the exact requirements for your nationality and destination.",
      url: "https://www.eammu.com/visa/visa-guide",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Generate your document checklist",
      text: "Use our Visa Checklist Generator to get a personalized list of required documents.",
      url: "https://www.eammu.com/travel-resources/visa-checklist-generator",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Check processing times & rejection rates",
      text: "Use our processing time tracker and rejection rate database to plan your application timeline.",
      url: "https://www.eammu.com/travel-resources/visa-processing-time-tracker",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Prepare and review documents",
      text: "Gather all required documents. Our certified consultants review your package before submission.",
      url: "https://www.eammu.com/contact",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Book visa appointment & submit",
      text: "We handle embassy appointment scheduling and application submission on your behalf.",
      url: "https://www.eammu.com/contact/travel-agency-bangladesh",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://www.eammu.com/visa/visa-guide#article",
  headline: "Complete Visa Guide for Bangladeshi Travelers 2026",
  description:
    "Embassy-verified visa requirements, document checklists, processing times and rejection rates for 195+ countries — updated for 2026.",
  image: {
    "@type": "ImageObject",
    url: "https://www.eammu.com/eammu_banner_four.webp",
    width: 1200,
    height: 630,
  },
  datePublished: "2024-01-01T00:00:00Z",
  dateModified: new Date().toISOString(),
  author: {
    "@type": "Organization",
    name: "Eammu Holidays",
    url: "https://www.eammu.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Eammu Holidays",
    logo: {
      "@type": "ImageObject",
      url: "https://www.eammu.com/emf.jpg",
    },
  },
  mainEntityOfPage: "https://www.eammu.com/visa/visa-guide",
  keywords: "visa guide, bangladesh visa, tourist visa, student visa, schengen visa, visa requirements 2026",
  articleSection: "Visa Guides",
  wordCount: 2800,
  inLanguage: "en-US",
  about: [
    { "@type": "Thing", name: "Visa Application" },
    { "@type": "Thing", name: "International Travel" },
    { "@type": "Place", name: "Bangladesh" },
  ],
};

const sitelinksSearchBoxSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.eammu.com/#website",
  url: "https://www.eammu.com",
  name: "Eammu Holidays",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.eammu.com/visa/visa-guide?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────
export default function VisaGuidePage() {
  return (
    <>
      {/* ── JSON-LD Schema Injection ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksSearchBoxSchema) }}
      />

      <VisaGuide />
      <HomeSeoLinks />
    </>
  );
}