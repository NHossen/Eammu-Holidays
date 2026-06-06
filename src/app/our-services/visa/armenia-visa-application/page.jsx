import ArmeniaVisa from '@/Components/Server/VisaCountry/ArmeniaVisa/ArmeniaVisa'
import React from 'react'

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: "Armenia Visa Application 2026 | E-Visa, Tourist & Residency | Eammu Holidays",

  description:
    "Apply for Armenia visa online with Eammu Holidays. Expert support for Armenia e-visa, tourist visa, residency permit & work permit from Dubai, Bangladesh & GCC. 98% approval rate. Processing in 3-5 days. Armenia visa requirements, fees & step-by-step guide.",

  keywords: [
    // Primary keywords
    "Armenia visa application",
    "Armenia e-visa",
    "Armenia tourist visa",
    "Armenia visa online",
    "apply Armenia visa 2026",
    // Geo-targeted
    "Armenia visa from Dubai",
    "Armenia visa from UAE",
    "Armenia visa from Bangladesh",
    "Armenia visa for Dubai residents",
    "Armenia visa for GCC residents",
    "Armenia visa for Indian expats Dubai",
    "Armenia visa for Pakistani Dubai",
    "Armenia visa for Bangladeshi Dubai",
    // Intent-based
    "Armenia visa requirements",
    "Armenia visa fees",
    "Armenia visa processing time",
    "Armenia visa documents required",
    "Armenia e-visa how to apply",
    "Armenia visa on arrival",
    "Armenia visa free countries",
    // Long-tail
    "how to get Armenia visa from UAE",
    "Armenia visa application from Bangladesh",
    "Armenia residency permit",
    "Armenia work permit",
    "Yerevan visa application",
    "Armenia travel visa support",
    "Eammu Holidays Armenia visa",
    "Armenia visa agency Dubai",
    "IATA accredited Armenia visa agent",
    "Armenia visa consultancy"
  ],

  alternates: {
    canonical: "https://www.eammu.com/our-services/visa/armenia-visa-application",
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
    title: "Armenia Visa Application 2026 | E-Visa, Tourist & Residency | Eammu Holidays",
    description:
      "Apply for Armenia visa with 98% approval rate. Eammu Holidays offers expert Armenia e-visa, tourist visa & residency support from Dubai, UAE & Bangladesh. Fast 3-5 day processing.",
    url: "https://www.eammu.com/our-services/visa/armenia-visa-application",
    siteName: "Eammu Holidays",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Armenia visa application service by Eammu Holidays - Dubai and Bangladesh",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Armenia Visa Application 2026 | Eammu Holidays",
    description:
      "98% approval rate. Armenia e-visa, tourist visa & residency from Dubai & Bangladesh. Fast 3-5 day processing by IATA-accredited Eammu Holidays.",
    images: ["/eammu_banner_four.webp"],
    site: "@eammuholidays",
    creator: "@eammuholidays",
  },

  authors: [{ name: "Eammu Holidays", url: "https://www.eammu.com" }],
  category: "Travel & Visa Services",
  creator: "Eammu Holidays",
  publisher: "Eammu Holidays",

  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
    "geo.position": "25.2048;55.2708",
    "ICBM": "25.2048, 55.2708",
    "revisit-after": "7 days",
    "language": "English",
    "rating": "General",
    "coverage": "Worldwide",
    "distribution": "Global",
    "target": "all",
    "HandheldFriendly": "True",
    "MobileOptimized": "320",
    "og:price:amount": "10",
    "og:price:currency": "USD",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.eammu.com/our-services/visa/armenia-visa-application#service",
      "name": "Armenia Visa Application Service",
      "description": "Professional Armenia e-visa, tourist visa, work permit and residency permit application service for UAE, Dubai and Bangladesh residents. IATA-accredited travel agency with 98% approval rate.",
      "provider": {
        "@type": "TravelAgency",
        "@id": "https://www.eammu.com#organization",
        "name": "Eammu Holidays",
        "url": "https://www.eammu.com",
        "logo": "https://www.eammu.com/logo.png",
        "telephone": ["+971507078334", "+37494810585", "+8801701699743"],
        "email": "info@eammu.com",
        "address": [
          {
            "@type": "PostalAddress",
            "addressCountry": "AE",
            "addressRegion": "Dubai",
            "addressLocality": "Dubai"
          },
          {
            "@type": "PostalAddress",
            "addressCountry": "AM",
            "addressLocality": "Yerevan"
          },
          {
            "@type": "PostalAddress",
            "addressCountry": "BD",
            "addressLocality": "Bangladesh"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/eammuholidays",
          "https://www.instagram.com/eammuholidays"
        ]
      },
      "areaServed": [
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Bangladesh" },
        { "@type": "Country", "name": "Armenia" },
        { "@type": "AdministrativeArea", "name": "GCC Countries" }
      ],
      "serviceType": "Visa Application Assistance",
      "offers": [
        {
          "@type": "Offer",
          "name": "Armenia E-Visa (21-day)",
          "price": "6",
          "priceCurrency": "USD",
          "description": "Armenia short-stay e-visa valid for 21 days",
          "availability": "https://schema.org/InStock",
          "url": "https://www.eammu.com/our-services/visa/armenia-visa-application"
        },
        {
          "@type": "Offer",
          "name": "Armenia E-Visa (120-day)",
          "price": "31",
          "priceCurrency": "USD",
          "description": "Armenia long-stay e-visa valid for 120 days",
          "availability": "https://schema.org/InStock",
          "url": "https://www.eammu.com/our-services/visa/armenia-visa-application"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "312",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.eammu.com/our-services/visa/armenia-visa-application#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does the Armenia E-Visa take to process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The standard Armenia e-visa processing time is 3 to 4 working days. Express processing may be available. We recommend applying at least 1 week before your travel date to Armenia."
          }
        },
        {
          "@type": "Question",
          "name": "How much does an Armenia visa cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Armenian government e-visa fee is approximately $6 USD for a 21-day stay and $31 USD for a 120-day stay. Eammu Holidays service fee covers application handling, document review, and full support."
          }
        },
        {
          "@type": "Question",
          "name": "Can Dubai or UAE residents apply for an Armenia visa online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. UAE and Dubai residents can apply for an Armenia e-visa entirely online through the official Armenian e-visa portal. Eammu Holidays provides expert assistance for UAE-based applicants including Indians, Pakistanis, Bangladeshis, and Filipinos in Dubai."
          }
        },
        {
          "@type": "Question",
          "name": "Do Bangladeshi nationals need a visa for Armenia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Bangladeshi passport holders need a visa to visit Armenia. They can apply for an Armenia e-visa online. Eammu Holidays, based in both Dubai and Bangladesh, provides complete document support and application assistance."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are required for Armenia visa application?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Required documents for Armenia visa include: valid passport (6+ months validity), digital biometric photo (35x45mm), flight booking, hotel reservation, valid email address, and proof of occupation. A bank statement and travel insurance are recommended."
          }
        },
        {
          "@type": "Question",
          "name": "Can GCC residents get a visa on arrival in Armenia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many GCC residents including Indians, Pakistanis, and Filipinos holding valid GCC residency permits may be eligible for an Armenia visa on arrival or e-visa. Requirements vary by nationality so contact Eammu Holidays to confirm your eligibility."
          }
        },
        {
          "@type": "Question",
          "name": "Is the Armenia E-Visa valid for multiple entries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Armenia offers both single entry and multiple entry e-visas. Short-term visas are typically valid for 21 or 120 days of stay. Multiple-entry options are available for frequent travelers."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get Armenia residency through employment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If you have an employment contract with an Armenian-registered company, Eammu Holidays can process your work-based Temporary Residence Card (TRC), valid for 1 year and renewable. Our Yerevan office provides full ground support."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.eammu.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Our Services",
          "item": "https://www.eammu.com/our-services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visa Services",
          "item": "https://www.eammu.com/our-services/visa"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Armenia Visa Application",
          "item": "https://www.eammu.com/our-services/visa/armenia-visa-application"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.eammu.com/our-services/visa/armenia-visa-application",
      "url": "https://www.eammu.com/our-services/visa/armenia-visa-application",
      "name": "Armenia Visa Application 2026 | E-Visa, Tourist & Residency | Eammu Holidays",
      "description": "Apply for Armenia visa online with Eammu Holidays. Expert support for Armenia e-visa, tourist visa & residency from Dubai, UAE & Bangladesh. 98% approval rate.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.eammu.com#website",
        "url": "https://www.eammu.com",
        "name": "Eammu Holidays",
        "description": "IATA-accredited travel agency offering visa services, holiday packages and immigration support worldwide.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.eammu.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      "datePublished": "2024-01-01",
      "dateModified": "2026-01-15",
      "breadcrumb": {
        "@id": "https://www.eammu.com/our-services/visa/armenia-visa-application#breadcrumb"
      }
    }
  ]
};

export default function page() {
  return (
    <>
      {/* Inject JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArmeniaVisa />
    </>
  )
}