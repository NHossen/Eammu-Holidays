import TravelAgencyBangladesh from '@/Components/Client/TravelAgency/TravelAgencyBangladesh/TravelAgencyBangladesh';
import HomeSeoLinks from '@/Components/HomeSeoLinks/HomeSeoLinks';
import Link from 'next/link';
import React from 'react';

/* ─────────────────────────────────────────────────────────────────────────────
   SERVER COMPONENT — SEO metadata, JSON-LD structured data
   Page: /contact/travel-agency-bangladesh
───────────────────────────────────────────────────────────────────────────── */

export const metadata = {
  metadataBase: new URL("https://eammu.com"),

  title:
    "Travel Agency in Cumilla , Bangladesh | Eammu Holidays",

  description:
    "Eammu Holidays is Bangladesh's trusted travel agency with offices in Cumilla Cantonment (Gomoti Tower) and Mirpur 12, Dhaka. Expert visa processing for UK, USA, Canada, Dubai & Schengen, Umrah packages, student visa support, domestic & international tour packages. Call +880 1701-699743.",

  keywords: [
    // Primary geo keywords
    "travel agency Cumilla Bangladesh",
    "travel agency Dhaka Bangladesh",
    "travel agency Mirpur Dhaka",
    "travel agency Cumilla Cantonment",
    "Eammu Holidays Cumilla",
    "Eammu Holidays Dhaka",
    "Gomoti Tower travel agency Cumilla",
    // Service keywords
    "visa services Bangladesh",
    "Dubai visa from Bangladesh",
    "UK student visa Bangladesh",
    "USA visa consultant Bangladesh",
    "Canada PR Bangladesh",
    "Schengen visa Bangladesh",
    "Umrah package Bangladesh 2025",
    "student visa consultant Cumilla",
    "work permit Bangladesh",
    "visa consultant Cumilla",
    "tour packages Bangladesh",
    "Cox's Bazar tour package",
    "Sajek Valley tour package Bangladesh",
    "Sundarbans tour Bangladesh",
    "online travel agency Bangladesh",
    "best travel agency Bangladesh 2025",
    "visa processing Cumilla",
    "cheap flight booking Bangladesh",
    "travel agency near me Cumilla",
    "travel agency near me Dhaka Mirpur",
  ],

  alternates: {
    canonical: "https://eammu.com/contact/travel-agency-bangladesh",
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
    url: "https://eammu.com/contact/travel-agency-bangladesh",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title:
      "Eammu Holidays Bangladesh — Travel Agency in Cumilla & Dhaka | Visa, Tours & Umrah",
    description:
      "Visit Eammu Holidays in Cumilla Cantonment or Mirpur 12 Dhaka for visa processing, international tour packages, Umrah services, student visa guidance, and 24/7 travel support.",
    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Holidays travel agency in Cumilla and Dhaka Bangladesh",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Travel Agency in Cumilla & Dhaka | Eammu Holidays Bangladesh",
    description:
      "Visa processing, Umrah packages, and international tours from our Cumilla Cantonment and Mirpur Dhaka offices. Call +880 1701-699743.",
    images: ["/preview-banner.webp"],
  },

  icons: { icon: "/emf.jpg" },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD — LocalBusiness (2 locations) + FAQPage + BreadcrumbList
───────────────────────────────────────────────────────────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // ── Main Branch — Cumilla
    {
      "@type": ["LocalBusiness", "TravelAgency"],
      "@id": "https://eammu.com/contact/travel-agency-bangladesh#cumilla",
      "name": "Eammu Holidays — Cumilla Cantonment Branch",
      "alternateName": "Eammu Holidays Cumilla",
      "description":
        "Eammu Holidays main branch in Cumilla Cantonment, Bangladesh. Specialises in visa processing for UK, USA, Canada, Dubai & Schengen, Umrah packages, student visa consultancy, domestic tour packages, and flight bookings.",
      "url": "https://eammu.com/contact/travel-agency-bangladesh",
      "telephone": "+971507078334",
      "email": "info@eammu.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gomoti Tower, Office-178, Cumilla Cantonment",
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
          "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "09:00",
          "closes": "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Friday",
          "opens": "14:00",
          "closes": "20:00",
        },
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+971507078334",
          "contactType": "customer service",
          "availableLanguage": ["Bengali", "English"],
        },
        {
          "@type": "ContactPoint",
          "telephone": "+8801631312524",
          "contactType": "customer support",
          "contactOption": "TollFree",
          "availableLanguage": ["Bengali"],
        },
      ],
      "hasMap": "https://maps.google.com/?q=Gomoti+Tower+Cumilla+Cantonment+Bangladesh",
      "priceRange": "৳৳",
      "currenciesAccepted": "BDT",
      "paymentAccepted": "Cash, bKash, Nagad, Bank Transfer, Credit Card",
      "areaServed": [
        { "@type": "City", "name": "Cumilla" },
        { "@type": "City", "name": "Dhaka" },
        { "@type": "Country", "name": "Bangladesh" },
      ],
      "knowsLanguage": ["bn", "en"],
      "image": "https://eammu.com/preview-banner.webp",
      "sameAs": [
        "https://www.facebook.com/eammuholidays",
        "https://wa.me/8801631312524",
      ],
    },
    // ── Branch 2 — Mirpur 12, Dhaka
    {
      "@type": ["LocalBusiness", "TravelAgency"],
      "@id": "https://eammu.com/contact/travel-agency-bangladesh#dhaka",
      "name": "Eammu Holidays — Mirpur 12, Dhaka Branch",
      "alternateName": "Eammu Holidays Dhaka",
      "description":
        "Eammu Holidays Dhaka branch at Mirpur 12. Full-service travel agency offering visa processing, international tour packages, Umrah deals, student visa support, and flight booking for Dhaka clients.",
      "url": "https://eammu.com/contact/travel-agency-bangladesh",
      "telephone": "+8801631312524",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mirpur 12",
        "addressLocality": "Dhaka",
        "addressRegion": "Dhaka Division",
        "addressCountry": "BD",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "23.8273",
        "longitude": "90.3667",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "09:00",
          "closes": "20:00",
        },
      ],
      "parentOrganization": {
        "@id": "https://eammu.com/contact/travel-agency-bangladesh#cumilla",
      },
    },
    // ── FAQPage
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where are Eammu Holidays offices in Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eammu Holidays has two offices in Bangladesh: the Main Branch at Gomoti Tower (Office-178), Cumilla Cantonment, Cumilla; and a second branch at Mirpur 12, Dhaka. Both offices are open Saturday to Thursday, 9 AM to 8 PM.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Eammu Holidays process Dubai visas from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Eammu Holidays processes Dubai tourist and visit visas from both our Cumilla and Dhaka offices within 3–5 working days. We handle all documentation, online application submission, and follow-up. Cost is approximately BDT 12,000–15,000 all-inclusive.",
          },
        },
        {
          "@type": "Question",
          "name": "Can Eammu Holidays help with UK student visa from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Eammu Holidays provides complete UK student visa support including CAS letter guidance, IELTS preparation referrals, financial statement review, tuberculosis test coordination, and full application filing. We have a high approval rate for UK student visa applications from Bangladesh.",
          },
        },
        {
          "@type": "Question",
          "name": "What Umrah packages does Eammu Holidays offer from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eammu Holidays offers Umrah packages from Bangladesh starting from BDT 1,20,000, covering return flights, Umrah visa, 3–5 star hotel accommodation in Makkah and Madinah, and guided local support. We serve clients from both Cumilla and Dhaka offices.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Eammu Holidays offer domestic tour packages within Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer premium domestic Bangladesh tour packages including Cox's Bazar Beach (3N/4D from BDT 8,999), Sajek Valley (2N/3D from BDT 7,500), Sundarbans Safari (3N/4D from BDT 12,500), Srimangal Tea Garden (1N/2D from BDT 4,200), and Kaptai Lake Cruise.",
          },
        },
        {
          "@type": "Question",
          "name": "How can I contact Eammu Holidays Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cumilla Main Branch: +880 1701-699743 | Dhaka Branch (Mirpur 12): +880 1631-312524 | WhatsApp: +880 1631-312524 | Email: info@eammu.com. Walk-ins welcome at both offices, Saturday to Thursday.",
          },
        },
      ],
    },
    // ── BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",    "item": "https://eammu.com" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://eammu.com/contact" },
        { "@type": "ListItem", "position": 3, "name": "Travel Agency Bangladesh", "item": "https://eammu.com/contact/travel-agency-bangladesh" },
      ],
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE (Server Component)
───────────────────────────────────────────────────────────────────────────── */

export default function TravelAgencyBangladeshPage() {
  return (
    <>
      {/* Structured data — server-rendered, zero client JS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    

      <TravelAgencyBangladesh />
        {/* Breadcrumb — visible + crawlable */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-0">
        <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          <li><Link href="/"        className="hover:text-[#005a31] transition-colors font-medium">Home</Link></li>
          <li className="text-gray-300">/</li>
          <li><Link href="/contact" className="hover:text-[#005a31] transition-colors font-medium">Contact</Link></li>
          <li className="text-gray-300">/</li>
          <li className="text-[#005a31] font-bold">Travel Agency Bangladesh</li>
        </ol>
      </nav>
      <HomeSeoLinks />
    </>
  );
}