import TouristVisa from '@/Components/Client/visaServices/Visa/TouristVisaBangladesh/TouristVisa/TouristVisa'
import HomeSeoLinks from '@/Components/HomeSeoLinks/HomeSeoLinks';
import React from 'react'

export const metadata = {
  metadataBase: new URL("https://eammu.com"),

  title: {
    default:
      "Tourist Visa from Bangladesh 2026 — Expert Visa Consultancy | Eammu Holidays",
    template: "%s | Eammu Holidays Visa Services",
  },

  description:
    "Apply for tourist visa from Bangladesh with 98% approval rate. Expert consultancy for USA B1/B2, UK visitor visa, Canada, Schengen, Japan, Australia & 200+ countries. Embassy-accurate documents, 24-hr review. 12,000+ visas processed.",

  keywords: [
    // Primary
    "tourist visa from Bangladesh",
    "visa consultancy Bangladesh",
    "tourist visa Bangladesh 2026",
    "visa agency Bangladesh",
    // Country-specific
    "USA tourist visa from Bangladesh",
    "UK visitor visa Bangladesh",
    "Canada tourist visa Bangladesh",
    "Schengen visa Bangladesh",
    "Japan visa from Bangladesh",
    "Australia tourist visa Bangladesh",
    "Dubai visa from Bangladesh",
    "Germany visa Bangladesh",
    "France visa Bangladesh",
    "Italy visa Bangladesh",
    // Intent-based
    "how to apply tourist visa from Bangladesh",
    "tourist visa requirements Bangladesh",
    "visa consultancy Dhaka",
    "visa consultancy Cumilla",
    "best visa agency Bangladesh",
    "tourist visa approval Bangladesh",
    "visa processing Bangladesh",
    "B1 B2 visa Bangladesh",
    "Schengen visa from Bangladesh 2026",
    "tourist visa documents Bangladesh",
    "visa checklist Bangladesh",
    "student visa Bangladesh",
    "work visa Bangladesh",
    "e-visa destinations Bangladesh",
    "travel agency Bangladesh visa services",
    "online visa agency Bangladesh",
  ],

  alternates: {
    canonical: "https://eammu.com/visa",
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
    url: "https://eammu.com/visa",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title:
      "Tourist Visa from Bangladesh 2026 — 98% Approval Rate | Eammu Holidays",
    description:
      "Bangladesh's #1 tourist visa consultancy. Expert help for USA, UK, Canada, Schengen & 200+ countries. 12,000+ passports processed. Embassy-accurate documents, 24-hr review.",
    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Tourist visa from Bangladesh — Eammu Holidays visa consultancy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@EammuHolidays",
    title:
      "Tourist Visa from Bangladesh 2026 — Expert Consultancy | Eammu Holidays",
    description:
      "98% approval rate. USA, UK, Canada, Schengen & 200+ countries. 12,000+ visas processed. Embassy-accurate documents, 24-hr review.",
    images: ["/eammu_banner_four.webp"],
  },

  icons: {
    icon: "/emf.jpg",
    apple: "/emf.jpg",
  },

  other: {
    "geo.region": "BD",
    "geo.placename": "Bangladesh",
    "geo.position": "23.6850;90.3563",
    "ICBM": "23.6850, 90.3563",
  },
};

// ─── STRUCTURED DATA ────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://eammu.com/#organization",
  name: "Eammu Holidays",
  url: "https://eammu.com",
  logo: {
    "@type": "ImageObject",
    url: "https://eammu.com/emf.jpg",
    width: 200,
    height: 200,
  },
  image: "https://eammu.com/eammu_banner_four.webp",
  description:
    "Bangladesh's leading tourist visa consultancy with 98% approval rate. Expert visa assistance for USA, UK, Canada, Schengen, Japan, Australia & 200+ countries.",
  foundingDate: "2015",
  areaServed: "Worldwide",
  currenciesAccepted: "BDT",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2847",
    bestRating: "5",
    worstRating: "1",
  },
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Cumilla",
      addressRegion: "Chittagong Division",
      addressCountry: "BD",
      streetAddress: "Cumilla Office",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
      streetAddress: "Dubai Branch",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      areaServed: "BD",
      availableLanguage: ["English", "Bengali"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/eammutourism",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://eammu.com/visa/#service",
  serviceType: "Tourist Visa Consultancy",
  name: "Tourist Visa from Bangladesh — Expert Consultancy",
  description:
    "Professional tourist visa consultancy for Bangladeshi travelers. We prepare embassy-accurate documentation for USA B1/B2, UK Standard Visitor, Canada, Schengen, Japan, Australia & 200+ destinations with a 98% approval rate.",
  provider: {
    "@id": "https://eammu.com/#organization",
  },
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
          name: "USA B1/B2 Tourist Visa",
          url: "https://eammu.com/visa/united-states-visa",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UK Standard Visitor Visa",
          url: "https://eammu.com/visa/united-kingdom-visa",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Schengen Area Visa",
          url: "https://eammu.com/schengen-visa",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Canada Tourist Visa",
          url: "https://eammu.com/visa/canada-visa",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Japan Tourist Visa",
          url: "https://eammu.com/visa/japan-visa",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Australia Tourist Visa",
          url: "https://eammu.com/visa/australia-visa",
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://eammu.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Visa Services",
      item: "https://eammu.com/visa",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Tourist Visa from Bangladesh 2026",
      item: "https://eammu.com/visa",
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://eammu.com/visa/#webpage",
  url: "https://eammu.com/visa",
  name: "Tourist Visa from Bangladesh 2026 — Expert Visa Consultancy | Eammu Holidays",
  description:
    "Apply for tourist visa from Bangladesh with 98% approval rate. Expert consultancy for USA B1/B2, UK visitor visa, Canada, Schengen, Japan, Australia & 200+ countries.",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://eammu.com/#website",
    name: "Eammu Holidays",
    url: "https://eammu.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://eammu.com/visa?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  },
  about: {
    "@id": "https://eammu.com/visa/#service",
  },
  provider: {
    "@id": "https://eammu.com/#organization",
  },
  dateModified: new Date().toISOString().split("T")[0],
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#hero-heading", "#why-eammu-heading", "#faq-heading"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What tourist visas can Eammu Holidays get from Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eammu Holidays processes tourist visas for 200+ countries from Bangladesh, including USA B1/B2, UK Standard Visitor Visa, Canada Temporary Resident Visa, all 29 Schengen countries, Japan, Australia, Malaysia, Thailand, Dubai, and more. Our consultants are experts in embassy requirements for Bangladeshi passport holders.",
      },
    },
    {
      "@type": "Question",
      name: "What is the tourist visa approval rate for Bangladeshi applicants at Eammu Holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eammu Holidays maintains a 98% tourist visa approval rate for Bangladeshi applicants. We have processed 12,000+ passports since 2015. Our high success rate comes from embassy-accurate documentation, 24-hour document review, and deep knowledge of what each embassy requires from Bangladeshi applicants in 2026.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are needed for a tourist visa from Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common documents for a tourist visa from Bangladesh include: valid passport (minimum 6 months validity), recent bank statements (typically 3–6 months), employment letter or NOC, income tax returns, visa application form, passport-size photos, travel itinerary, and hotel bookings. Requirements vary by destination country. Use our free visa checklist generator at eammu.com/travel-resources/visa-checklist-generator for a country-specific list.",
      },
    },
    {
      "@type": "Question",
      name: "How long does tourist visa processing take from Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tourist visa processing times from Bangladesh vary by country: USA B1/B2 visa — 2 to 4 weeks after interview; UK Standard Visitor Visa — 3 to 8 weeks; Schengen visa — 15 to 30 days; Canada tourist visa — 4 to 12 weeks; Japan visa — 5 to 7 business days; Malaysia e-Visa — 3 to 5 business days. Eammu Holidays tracks real-time VFS Global processing times so you submit at the right moment.",
      },
    },
    {
      "@type": "Question",
      name: "Can I apply for a USA tourist visa from Bangladesh without a consultant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but the USA B1/B2 visa has a high refusal rate for Bangladeshi applicants — often 40–60% — without proper document preparation. Common reasons for rejection include insufficient bank balance presentation, weak ties-to-home documentation, and inconsistent cover letters. Eammu Holidays prepares every document to the exact standard US embassies expect from Bangladeshi applicants, significantly improving your approval chances.",
      },
    },
    {
      "@type": "Question",
      name: "How much does visa consultancy cost at Eammu Holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eammu Holidays charges a consultancy fee that varies by visa type and destination. The fee covers document review, checklist generation, bank statement formatting, cover letter drafting, NOC preparation, and pre-submission verification. Contact our Cumilla office or Dubai branch for exact pricing for your specific visa destination.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Schengen visa and can Bangladeshi citizens apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Schengen visa allows travel across 29 European countries with a single visa, including France, Germany, Italy, Spain, Netherlands, and more. Yes, Bangladeshi citizens can apply for a Schengen visa. It requires strong financial proof, a detailed travel itinerary, confirmed hotel bookings, and travel insurance. Eammu Holidays has a specialized Schengen visa service for Bangladeshi applicants with expertise in each member country's embassy.",
      },
    },
    {
      "@type": "Question",
      name: "Does Eammu Holidays offer e-visa services from Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Eammu Holidays processes e-visas for all eligible destinations from Bangladesh, including Turkey, India, Sri Lanka, Egypt, Kenya, Azerbaijan, and more. E-visas are applied online and typically processed within 24–72 hours. Visit eammu.com/visa/e-visa for a full list of e-visa destinations available to Bangladeshi passport holders.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Apply for a Tourist Visa from Bangladesh with Eammu Holidays",
  description:
    "Step-by-step process for applying for a tourist visa from Bangladesh through Eammu Holidays visa consultancy.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Choose your destination",
      text: "Browse 200+ tourist visa destinations or search your country on eammu.com/visa. Each country page lists 2026 visa requirements for Bangladeshi applicants.",
      url: "https://eammu.com/visa",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Generate your free visa checklist",
      text: "Use our free visa checklist generator at eammu.com/travel-resources/visa-checklist-generator to get a destination-specific document list verified against official embassy circulars.",
      url: "https://eammu.com/travel-resources/visa-checklist-generator",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Submit documents for 24-hour review",
      text: "Our consultants review your bank statement, NOC, cover letter, and other documents within one business day and flag any issues before submission.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Embassy or VFS submission",
      text: "We guide you through the VFS Global or embassy appointment booking and submission process, ensuring everything is in order on the day.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Visa approval & travel",
      text: "Collect your approved visa. Our 98% approval rate means you can book flights and hotels with confidence before receiving your passport back.",
    },
  ],
};

export default function VisaPage() {
  return (
    <>
      {/* Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {/* FAQ — targets Google Featured Snippets & People Also Ask */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* HowTo — targets rich results for process queries */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <TouristVisa />
      <HomeSeoLinks />
    </>
  );
}