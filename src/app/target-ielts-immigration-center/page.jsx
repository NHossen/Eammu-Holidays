import TIICPage from '@/Components/Client/eammuGroupClient/TIICPage/TIICPage';
import Link from 'next/link';
import React from 'react';

/* ─────────────────────────────────────────────────────────────────────────────
   SERVER COMPONENT — /target-ielts-immigration-center
───────────────────────────────────────────────────────────────────────────── */

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Target IELTS & Immigration Center (TIIC) Cumilla | Best IELTS Coaching, PTE & Study Abroad — Eammu Holidays",

  description:
    "Target IELTS & Immigration Center (TIIC) is the most trusted IELTS Academic & General, PTE Academic, and Study Abroad consultancy in Cumilla Cantonment, Bangladesh. 5,000+ students trained, Band 8.5 achieved, 98% visa success rate. Located at Gomoti Tower, Cumilla. Call +880 1701-699743.",

  keywords: [
    // Core brand + location
    "IELTS coaching Cumilla",
    "IELTS center Cumilla Bangladesh",
    "Target IELTS Immigration Center Cumilla",
    "TIIC Cumilla",
    "best IELTS center Cumilla",
    "IELTS coaching Cumilla Cantonment",
    "IELTS preparation Cumilla Bangladesh",
    // IELTS keywords
    "IELTS Academic Cumilla",
    "IELTS General Training Cumilla",
    "IELTS band 7 coaching Bangladesh",
    "IELTS band 8 coaching Cumilla",
    "IELTS mock test Cumilla",
    "IELTS speaking practice Bangladesh",
    // PTE
    "PTE Academic training Cumilla",
    "PTE coaching Bangladesh",
    "AI PTE practice software Bangladesh",
    // Study abroad
    "study abroad consultancy Cumilla",
    "study abroad Bangladesh Cumilla",
    "UK student visa consultant Cumilla",
    "USA student visa Cumilla",
    "Canada student visa Bangladesh",
    "Australia student visa consultant",
    "university admission consultancy Cumilla",
    // Immigration
    "immigration consultant Cumilla Bangladesh",
    "visa consultant Cumilla",
    "student visa processing Bangladesh",
    "visa interview preparation Bangladesh",
    // Spoken English
    "spoken English course Cumilla",
    "English language center Cumilla",
    // Long-tail
    "best IELTS coaching center near Cumilla Cantonment",
    "IELTS band 8.5 strategy Bangladesh",
    "Gomoti Tower IELTS center Cumilla",
    "TIIC Eammu Holidays Cumilla",
    "IELTS immigration center Bangladesh 2025",
  ],

  alternates: {
    canonical: "https://www.eammu.com/target-ielts-immigration-center",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.eammu.com/target-ielts-immigration-center",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title:
      "TIIC — Best IELTS Coaching & Immigration Center in Cumilla | Eammu Holidays",
    description:
      "IELTS Academic & General, PTE Academic, Spoken English, and Study Abroad consultancy at Gomoti Tower, Cumilla Cantonment. 5,000+ students trained, Band 8.5 achieved. +880 1701-699743.",
    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Target IELTS Immigration Center Cumilla Bangladesh — IELTS PTE Study Abroad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TIIC Cumilla — Best IELTS & Immigration Center | Eammu Holidays",
    description:
      "IELTS Academic/General, PTE Academic, Spoken English & Study Abroad from Gomoti Tower, Cumilla Cantonment. Call +880 1701-699743.",
    images: ["/preview-banner.webp"],
  },

  icons: { icon: "/emf.jpg" },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD — EducationalOrganization + FAQPage + BreadcrumbList + Course
───────────────────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": "https://www.eammu.com/target-ielts-immigration-center#tiic",
      "name": "Target IELTS & Immigration Center (TIIC)",
      "alternateName": "TIIC Cumilla",
      "description":
        "Target IELTS & Immigration Center (TIIC) is Cumilla's most trusted IELTS Academic & General Training, PTE Academic, and Study Abroad consultancy, operating under Eammu Holidays at Gomoti Tower, Cumilla Cantonment, Bangladesh.",
      "url": "https://www.eammu.com/target-ielts-immigration-center",
      "telephone": "+8801701699743",
      "email": "info@eammu.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gomoti Tower, 1st Floor, Cumilla Cantonment",
        "addressLocality": "Cumilla",
        "addressRegion": "Chattogram Division",
        "addressCountry": "BD",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "23.4682",
        "longitude": "91.1788",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"],
          "opens": "10:00",
          "closes": "19:00",
        },
      ],
      "parentOrganization": {
        "@type": "Organization",
        "name": "Eammu Holidays",
        "url": "https://www.eammu.com",
      },
      "hasMap": "https://maps.google.com/?q=Gomoti+Tower+Cumilla+Cantonment",
      "priceRange": "৳৳",
      "currenciesAccepted": "BDT",
      "paymentAccepted": "Cash, bKash, Nagad, Bank Transfer",
      "areaServed": { "@type": "City", "name": "Cumilla" },
      "knowsLanguage": ["bn", "en"],
      "image": "https://www.eammu.com/preview-banner.webp",
      "sameAs": [
        "https://wa.me/8801701699743",
        "https://www.facebook.com/eammuholidays",
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "480",
        "bestRating": "5",
      },
    },
    // Course schema — IELTS
    {
      "@type": "Course",
      "name": "IELTS Academic & General Training",
      "description": "Comprehensive IELTS preparation covering Listening, Reading, Writing, and Speaking. British Council exam pattern, weekly full mock tests, Band 8+ strategy, and personalised feedback.",
      "provider": { "@id": "https://www.eammu.com/target-ielts-immigration-center#tiic" },
      "url": "https://www.eammu.com/target-ielts-immigration-center",
      "courseLanguage": "Bengali",
      "educationalLevel": "Advanced",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Blended",
        "location": {
          "@type": "Place",
          "name": "Gomoti Tower, Cumilla Cantonment",
        },
      },
    },
    // Course schema — PTE
    {
      "@type": "Course",
      "name": "PTE Academic Training",
      "description": "AI-based PTE Academic preparation with real exam environment, scoring techniques, and 30-day fast-track programme.",
      "provider": { "@id": "https://www.eammu.com/target-ielts-immigration-center#tiic" },
      "url": "https://www.eammu.com/target-ielts-immigration-center",
    },
    // FAQPage
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is Target IELTS & Immigration Center (TIIC) located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TIIC is located at Gomoti Tower, 1st Floor, Cumilla Cantonment, Bangladesh. Open Saturday–Thursday, 10AM–7PM. Walk-ins welcome.",
          },
        },
        {
          "@type": "Question",
          "name": "What courses does TIIC offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TIIC offers IELTS Academic & General Training, PTE Academic Training (AI-based software), Spoken English, and Study Abroad consultancy for USA, UK, Canada, and Australia.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the highest IELTS band achieved at TIIC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TIIC students have achieved a highest IELTS band score of 8.5. Our Band 8+ strategy, personalised feedback, and weekly mock tests are specifically designed to push students to their maximum potential.",
          },
        },
        {
          "@type": "Question",
          "name": "Does TIIC help with student visa applications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. TIIC, operating under Eammu Holidays, provides complete student visa support for UK, USA, Canada, and Australia — including document preparation, SOP writing, financial statement review, and embassy submission. Our visa success rate is 98%.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does the IELTS course take at TIIC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TIIC offers flexible course durations: Intensive (30 days), Standard (60 days), and Extended (90 days) programmes. After a free diagnostic assessment, a customised study plan is created based on your target band score.",
          },
        },
        {
          "@type": "Question",
          "name": "Does TIIC offer scholarship guidance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. TIIC provides scholarship guidance for fully and partially funded programmes in UK, USA, Canada, and Australia. We help students identify eligible scholarships and prepare strong applications.",
          },
        },
      ],
    },
    // BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",    "item": "https://www.eammu.com" },
        { "@type": "ListItem", "position": 2, "name": "TIIC — IELTS & Immigration Center", "item": "https://www.eammu.com/target-ielts-immigration-center" },
      ],
    },
  ],
};

export default function TIICPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    

      <TIICPage />
        {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-0">
        <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          <li><Link href="/" className="hover:text-[#005a31] transition-colors font-medium">Home</Link></li>
          <li className="text-gray-300">/</li>
          <li className="text-[#005a31] font-bold">Target IELTS & Immigration Center</li>
        </ol>
      </nav>
    </>
  );
}