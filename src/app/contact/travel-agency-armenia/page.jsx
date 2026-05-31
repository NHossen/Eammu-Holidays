import Link from 'next/link';
import TravelAgencyArmenia from '@/Components/Client/TravelAgency/TravelAgencyArmenia/TravelAgencyArmenia';
import React from 'react';

/* ─────────────────────────────────────────────────────────────────────────────
   SERVER COMPONENT — All SEO metadata lives here, zero client JS cost
───────────────────────────────────────────────────────────────────────────── */

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Eammu Holidays : Travel Agency in Yerevan, Armenia",

  description:
    "Eammu Holidays is a certified travel agency in Yerevan, Armenia, located at Lambron 39. We offer Armenia e-visa processing, guided tours to Garni, Geghard & Lake Sevan, airport transfers, hotel bookings, and 24/7 WhatsApp support for Bangladeshi and international travelers.",

  keywords: [
    "travel agency Yerevan Armenia",
    "travel agency Armenia",
    "visa services Yerevan Armenia",
    "Eammu Holidays Armenia",
    "Eammu Armenia office Lambron 39",
    "Armenia e-visa processing",
    "Bangladesh travel agency Armenia",
    "tour packages Armenia Yerevan",
    "Garni Geghard Lake Sevan tour",
    "Armenia visa consultant Yerevan",
    "international travel agency Armenia",
    "airport transfer Yerevan Zvartnots",
    "Bengali speaking guide Armenia",
    "Armenia transit visa help",
    "Yerevan hotel booking agency",
    "Eammu Holidays Yerevan",
    "travel agency Lambron 39 Yerevan",
    "Armenia sightseeing tours 2025",
    "travel consultant Armenia 2025",
    "Bangladeshi travel agency Yerevan",
  ],

  alternates: {
    canonical: "https://www.eammu.com/contact/travel-agency-armenia",
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
    url: "https://www.eammu.com/contact/travel-agency-armenia",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Eammu Holidays Armenia — Travel Agency & Visa Services in Yerevan",
    description:
      "Visit Eammu Holidays at Lambron 39, Yerevan, Armenia for expert visa processing, guided tours, hotel bookings, and 24/7 travel support. Trusted by Bangladeshi and international travelers.",
    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Holidays travel agency in Yerevan Armenia — visa services and tours",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Travel Agency in Yerevan, Armenia | Eammu Holidays",
    description:
      "Expert visa processing, Armenia tour packages, and 24/7 travel support from Eammu Holidays' Yerevan office at Lambron 39.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   STRUCTURED DATA — JSON-LD (server-rendered, zero client JS)
   Covers: LocalBusiness + TravelAgency + FAQPage
───────────────────────────────────────────────────────────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TravelAgency"],
      "@id": "https://www.eammu.com/contact/travel-agency-armenia#business",
      "name": "Eammu Holidays — Yerevan Armenia Branch",
      "alternateName": "Eammu Holidays Armenia",
      "description":
        "Eammu Holidays is a certified travel agency and visa consultancy located in Yerevan, Armenia. We specialise in Armenia e-visa processing, guided tours to Garni Temple, Geghard Monastery and Lake Sevan, airport transfers from Zvartnots International Airport, and hotel bookings for Bangladeshi and international travelers.",
      "url": "https://www.eammu.com/contact/travel-agency-armenia",
      "telephone": "+37494810585",
      "email": "armenia@eammu.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lambron 39",
        "addressLocality": "Yerevan",
        "addressCountry": "AM",
        "postalCode": "0002",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.1872",
        "longitude": "44.5152",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "10:00",
          "closes": "18:00",
        },
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+37494810585",
        "contactType": "customer service",
        "availableLanguage": ["English", "Bengali", "Armenian"],
        "contactOption": "TollFree",
      },
      "sameAs": [
        "https://wa.me/37494810585",
        "https://www.facebook.com/eammuholidays",
      ],
      "priceRange": "$$",
      "currenciesAccepted": "AMD, USD, EUR",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "hasMap": "https://maps.google.com/?q=Lambron+39+Yerevan+Armenia",
      "areaServed": [
        { "@type": "Country", "name": "Armenia" },
        { "@type": "Country", "name": "Bangladesh" },
        { "@type": "Country", "name": "Georgia" },
      ],
      "knowsLanguage": ["en", "bn", "hy"],
      "image": "https://www.eammu.com/preview-banner.webp",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is Eammu Holidays located in Armenia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eammu Holidays' Armenia branch is located at Lambron 39, Yerevan, Armenia. We are open Saturday to Thursday, 9 AM to 8 PM, and on Fridays from 10 AM to 6 PM.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Eammu Holidays provide Armenia e-visa services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Eammu Holidays provides complete Armenia e-visa and transit visa processing support for Bangladeshi and international travelers. Our local experts at Lambron 39 handle all documentation, form submission, and follow-up.",
          },
        },
        {
          "@type": "Question",
          "name": "What tours does Eammu Holidays offer in Armenia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer guided day tours and multi-day packages including: Yerevan City Tour (1 day), Garni Temple & Geghard Monastery tour (1 day), Lake Sevan & Dilijan Forest tour (2 days), Mount Ararat View tour (1 day), and custom Caucasus region tours to Georgia and Azerbaijan.",
          },
        },
        {
          "@type": "Question",
          "name": "Is there a Bengali-speaking guide available in Yerevan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Eammu Holidays employs Bengali and English-speaking local guides in Yerevan who are familiar with the cultural needs of Bangladeshi travelers, including halal food guidance and prayer time coordination.",
          },
        },
        {
          "@type": "Question",
          "name": "How can I contact Eammu Holidays Armenia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reach us via WhatsApp at +374 94 810585, by email at armenia@eammu.com, or visit us in person at Lambron 39, Yerevan. We provide 24/7 WhatsApp support for urgent travel queries.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",    "item": "https://www.eammu.com" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.eammu.com/contact" },
        { "@type": "ListItem", "position": 3, "name": "Travel Agency Armenia", "item": "https://www.eammu.com/contact/travel-agency-armenia" },
      ],
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE COMPONENT (Server)
───────────────────────────────────────────────────────────────────────────── */

export default function TravelAgencyArmeniaPage() {
  return (
    <>
      {/* Structured data — injected server-side, no client JS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    

      {/* Client component — all interactive UI */}
      <TravelAgencyArmenia />
        {/* Breadcrumb — visible, SEO-friendly */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 pt-4 pb-0">
        <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          <li><Link href="/" className="hover:text-[#005a31] transition-colors font-medium">Home</Link></li>
          <li className="text-gray-300">/</li>
          <li><Link href="/contact" className="hover:text-[#005a31] transition-colors font-medium">Contact</Link></li>
          <li className="text-gray-300">/</li>
          <li className="text-[#005a31] font-bold">Travel Agency Armenia</li>
        </ol>
      </nav>
    </>
  );
}