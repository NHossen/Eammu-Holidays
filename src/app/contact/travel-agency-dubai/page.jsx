import TravelAgencyDubai from '@/Components/Client/TravelAgency/TravelAgencyDubai/TravelAgencyDubai';
import Link from 'next/link';
import React from 'react';

/* ─────────────────────────────────────────────────────────────────────────────
   SERVER COMPONENT — /contact/travel-agency-dubai
   All SEO, JSON-LD, and breadcrumbs rendered server-side (zero client JS cost)
───────────────────────────────────────────────────────────────────────────── */

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Eammu Holidays: Travel Agency in Dubai",

  description:
    "Eammu Holidays is a trusted travel agency in Business Bay, Dubai (Office 12B, Executive Tower). Expert UAE Golden Visa, Dubai resident visas for Albania, Andorra, Armenia, Serbia & Kosovo, Schengen, UK, USA & Canada visas, desert tours, and 24/7 VIP support. Call +971 50 707 8334.",

  keywords: [
    // Core geo + brand
    "travel agency Dubai",
    "travel agency Business Bay Dubai",
    "Eammu Holidays Dubai",
    "Eammu Holidays Business Bay",
    "visa agency Dubai",
    "visa consultant Dubai 2025",
    // UAE residency
    "UAE Golden Visa consultant",
    "Dubai Golden Visa 10 year",
    "investor visa Dubai",
    "freelance visa UAE",
    "UAE residency visa",
    "Dubai resident visa services",
    // Dubai resident visas by country
    "visa for Albania from Dubai",
    "visa for Andorra from Dubai",
    "visa for Armenia from Dubai",
    "visa for Serbia from Dubai",
    "visa for Kosovo from Dubai",
    "Dubai residents Albania visa",
    "Dubai residents Serbia visa",
    "Dubai residents Kosovo visa",
    // Global visas from Dubai
    "Schengen visa from Dubai",
    "UK visa from Dubai",
    "USA visa from Dubai",
    "Canada visa from Dubai",
    "India visa from Dubai",
    "Europe visa consultant Dubai",
    // Tours
    "Dubai desert safari booking",
    "Dubai tour packages 2025",
    "luxury tours Dubai",
    "Dubai city tour Business Bay",
    // Long-tail
    "best travel agency in Dubai for Bangladeshis",
    "visa processing agency Dubai Business Bay",
    "travel agency Executive Tower Dubai",
    "DED licensed travel agency Dubai",
    "cheap tour packages from Dubai",
    "holiday packages from Dubai 2025",
  ],

  alternates: {
    canonical: "https://www.eammu.com/contact/travel-agency-dubai",
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
    url: "https://www.eammu.com/contact/travel-agency-dubai",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title:
      "Eammu Holidays Dubai — Travel Agency & Visa Experts in Business Bay, UAE",
    description:
      "Expert UAE Golden Visa, Dubai resident visas for Albania, Serbia, Kosovo & more, Schengen, UK, USA visa processing, and luxury tours from our Business Bay Dubai office. +971 50 707 8334.",
    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Holidays travel agency in Business Bay Dubai — visa and tour services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Travel Agency in Dubai | Eammu Holidays Business Bay",
    description:
      "UAE Golden Visa, Dubai resident visas for Albania/Serbia/Kosovo, Schengen, UK, USA processing & luxury tours from Business Bay Dubai.",
    images: ["/preview-banner.webp"],
  },

  icons: { icon: "/emf.jpg" },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD  ── LocalBusiness + FAQPage + BreadcrumbList
───────────────────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TravelAgency"],
      "@id": "https://www.eammu.com/contact/travel-agency-dubai#business",
      "name": "Eammu Holidays — Business Bay Dubai",
      "alternateName": "Eammu Holidays Dubai",
      "description":
        "Eammu Holidays Dubai is a DED-licensed travel agency and visa consultancy located at Office 12B, Executive Tower, Business Bay, Dubai, UAE. We specialise in UAE Golden Visa, Dubai resident visas for Albania, Andorra, Armenia, Serbia, Kosovo and 50+ countries, Schengen, UK, USA, Canada, India visa processing, desert safari tours, and luxury holiday packages.",
      "url": "https://www.eammu.com/contact/travel-agency-dubai",
      "telephone": "+971507078334",
      "email": "dubai@eammu.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office 12B, Executive Tower",
        "addressLocality": "Business Bay",
        "addressRegion": "Dubai",
        "addressCountry": "AE",
        "postalCode": "00000",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.1865",
        "longitude": "55.2650",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "09:00",
          "closes": "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Friday",
          "opens": "14:00",
          "closes": "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "18:00",
        },
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971507078334",
        "contactType": "customer service",
        "availableLanguage": ["English", "Bengali", "Arabic"],
        "contactOption": "TollFree",
      },
      "hasMap": "https://maps.google.com/?q=Executive+Tower+Business+Bay+Dubai",
      "priceRange": "$$",
      "currenciesAccepted": "AED, USD",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "areaServed": [
        { "@type": "City",    "name": "Dubai"  },
        { "@type": "Country", "name": "United Arab Emirates" },
      ],
      "knowsLanguage": ["en", "bn", "ar"],
      "sameAs": [
        "https://wa.me/971507078334",
        "https://www.facebook.com/eammuholidays",
      ],
      "image": "https://www.eammu.com/preview-banner.webp",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is Eammu Holidays Dubai office located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eammu Holidays Dubai is located at Office 12B, Executive Tower, Business Bay, Dubai, UAE. We are open Monday–Thursday 9AM–8PM, Friday 2PM–8PM, Saturday 9AM–6PM. Walk-ins welcome.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Eammu Holidays process UAE Golden Visa in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Eammu Holidays Dubai processes UAE Golden Visa (10-year), Investor Visa, Freelance Permits, and Family Sponsorship with full PRO support including medical assistance and Emirates ID filing.",
          },
        },
        {
          "@type": "Question",
          "name": "Can Dubai residents apply for Albania or Serbia visa through Eammu Holidays?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We process visas for Dubai and UAE residents travelling to Albania, Andorra, Armenia, Serbia, Kosovo, and 50+ other countries. Our Dubai office handles document preparation, application submission, and embassy follow-up.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Eammu Holidays process Schengen visas from Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We specialise in Schengen visa applications from Dubai for UAE residents, including Germany, France, Spain, Italy, Netherlands and all 27 Schengen countries. We also process UK, USA, and Canada visas.",
          },
        },
        {
          "@type": "Question",
          "name": "What tour packages does Eammu Holidays offer in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer Burj Khalifa & Dubai Mall (AED 179), Desert Safari Adventure (AED 150), Dubai Marina Cruise (AED 120), Palm Jumeirah Tour (AED 140), Global Village Experience (AED 80), Abu Dhabi Day Trip (AED 250), and luxury Maldives & Europe packages.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I contact Eammu Holidays Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call or WhatsApp: +971 50 707 8334 | Email: dubai@eammu.com | Office: 12B Executive Tower, Business Bay, Dubai. We respond to WhatsApp 24/7.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",    "item": "https://www.eammu.com" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.eammu.com/contact" },
        { "@type": "ListItem", "position": 3, "name": "Travel Agency Dubai", "item": "https://www.eammu.com/contact/travel-agency-dubai" },
      ],
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────────────────── */
export default function TravelAgencyDubaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

   

      <TravelAgencyDubai />
         {/* Breadcrumb — visible + crawlable */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-0">
        <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          <li><Link href="/" className="hover:text-[#004d2c] transition-colors font-medium">Home</Link></li>
          <li className="text-gray-300">/</li>
          <li><Link href="/contact" className="hover:text-[#004d2c] transition-colors font-medium">Contact</Link></li>
          <li className="text-gray-300">/</li>
          <li className="text-[#004d2c] font-bold">Travel Agency Dubai</li>
        </ol>
      </nav>
    </>
  );
}