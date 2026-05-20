import TravelAgencyGeorgia from '@/Components/Client/TravelAgency/TravelAgencyGeorgia/TravelAgencyGeorgia';
import Link from 'next/link';
import React from 'react';

/* ─────────────────────────────────────────────────────────────────────────────
   SERVER COMPONENT — /contact/travel-agency-georgia
───────────────────────────────────────────────────────────────────────────── */

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Travel Agency in Tbilisi, Georgia | Visa, TRC, Student Consultancy & Tours — Eammu Holidays",

  description:
    "Eammu Holidays is a trusted travel agency in Tbilisi, Georgia (Floor 5, Levan Gotua St #3). Expert Georgia TRC (Temporary Residence Permit), business visa, student university admissions, Kazbegi & Batumi tours, and 24/7 WhatsApp support. Call +995 574 446 218.",

  keywords: [
    // Core geo + brand
    "travel agency Tbilisi Georgia",
    "travel agency Georgia",
    "Eammu Holidays Georgia",
    "Eammu Holidays Tbilisi office",
    "Levan Gotua Street travel agency Tbilisi",
    "visa consultant Tbilisi Georgia",
    "visa services Georgia 2025",
    // Residency
    "Georgia TRC permit",
    "Georgia temporary residence card",
    "Georgia residence permit consultant",
    "TRC Georgia Tbilisi",
    "business setup Georgia",
    "company formation Georgia Tbilisi",
    // Student / study
    "study in Georgia consultancy",
    "student visa Georgia",
    "university admission Georgia Tbilisi",
    "medical university Georgia admission",
    "study abroad Georgia Bangladesh",
    // Tours
    "Georgia tour packages",
    "Tbilisi city tour",
    "Kazbegi mountain tour from Tbilisi",
    "Batumi Black Sea tour",
    "Georgia wine tour Kakheti",
    "cheap tours Georgia Tbilisi",
    // Global visas from Georgia
    "Schengen visa from Georgia",
    "UK visa from Georgia",
    "visa consultant Georgia for Bangladeshis",
    // Long-tail
    "Bangladesh travel agency Georgia",
    "Bengali speaking guide Georgia",
    "international travel agency Tbilisi",
    "best travel agency Georgia 2025",
    "Georgia visa free Bangladesh 365 days",
    "halal tour Georgia",
  ],

  alternates: {
    canonical: "https://www.eammu.com/contact/travel-agency-georgia",
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
    url: "https://www.eammu.com/contact/travel-agency-georgia",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title:
      "Eammu Holidays Georgia — Travel Agency, TRC & Visa Experts in Tbilisi",
    description:
      "Visit Eammu Holidays at Floor 5, Levan Gotua St #3, Tbilisi for Georgia TRC, business visa, student admissions, Kazbegi & Batumi tours, and 24/7 support. Trusted by Bangladeshi and international travelers.",
    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Holidays travel agency in Tbilisi Georgia — TRC visa and tour services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Travel Agency in Tbilisi, Georgia | Eammu Holidays",
    description:
      "Georgia TRC, student admissions, Schengen visa processing, and Kazbegi/Batumi tours from our Tbilisi office. +995 574 446 218.",
    images: ["/preview-banner.webp"],
  },

  icons: { icon: "/emf.jpg" },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD — LocalBusiness + FAQPage + BreadcrumbList
───────────────────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TravelAgency"],
      "@id": "https://www.eammu.com/contact/travel-agency-georgia#business",
      "name": "Eammu Holidays — Tbilisi Georgia Branch",
      "alternateName": "Eammu Holidays Georgia",
      "description":
        "Eammu Holidays Georgia is a licensed travel and visa consultancy at Floor 5, Levan Gotua Street #3, Tbilisi. We specialise in Georgia TRC (Temporary Residence Permit), business visa, student university admissions, guided tours to Kazbegi, Batumi, Kakheti, and Mtskheta, and Schengen/UK visa processing for Georgia-based clients.",
      "url": "https://www.eammu.com/contact/travel-agency-georgia",
      "telephone": "+995574446218",
      "email": "georgia@eammu.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Floor 5, Levan Gotua Street #3",
        "addressLocality": "Tbilisi",
        "addressCountry": "GE",
        "postalCode": "0177",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "41.6938",
        "longitude": "44.8015",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "17:00",
        },
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+995574446218",
        "contactType": "customer service",
        "availableLanguage": ["English", "Bengali", "Georgian"],
      },
      "hasMap": "https://maps.google.com/?q=Levan+Gotua+Street+3+Tbilisi+Georgia",
      "priceRange": "$$",
      "currenciesAccepted": "GEL, USD",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "areaServed": [
        { "@type": "City",    "name": "Tbilisi"  },
        { "@type": "Country", "name": "Georgia"  },
        { "@type": "Country", "name": "Bangladesh" },
      ],
      "knowsLanguage": ["en", "bn", "ka"],
      "sameAs": ["https://wa.me/995574446218", "https://www.facebook.com/eammuholidays"],
      "image": "https://www.eammu.com/preview-banner.webp",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is Eammu Holidays' Georgia office?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eammu Holidays Georgia is located at Floor 5, Levan Gotua Street #3, Tbilisi, Georgia. Open Monday–Friday 9AM–7PM and Saturday 10AM–5PM. Walk-ins welcome.",
          },
        },
        {
          "@type": "Question",
          "name": "Can Eammu Holidays help with Georgia TRC (Temporary Residence Permit)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our Tbilisi team specialises in Georgia TRC (Temporary Residence Card) processing through investment, business registration, or employment. We handle all documentation, Public Service Hall submission, and follow-up.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Eammu Holidays help with student admissions in Georgia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide direct university admissions support for Bangladeshi and international students seeking medical, engineering, and business degrees at top-ranked Georgian universities in Tbilisi and Batumi. We assist with application, document apostille, and student visa processing.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Georgia visa-free for Bangladeshi citizens?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Bangladeshi passport holders can enter Georgia visa-free for up to 365 days. No prior application needed. Georgia is one of the most accessible international destinations for Bangladeshi travelers with affordable living costs (~$30–50/day).",
          },
        },
        {
          "@type": "Question",
          "name": "What tours does Eammu Holidays offer in Georgia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer Tbilisi City Tour (1 day), Mtskheta Heritage Tour (1 day), Kazbegi Mountain Adventure (2 days), Batumi & Black Sea Tour (2 days), Wine & Kakheti Valley (1 day), and Uplistsikhe & Gori Tour (1 day). Custom multi-day Caucasus packages also available.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Eammu Holidays process Schengen or UK visas from Georgia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our Tbilisi office processes Schengen, UK, USA, and Canada visa applications for Georgia-based clients and expatriates. We handle document preparation, embassy appointment booking, and application submission.",
          },
        },
        {
          "@type": "Question",
          "name": "How can I contact Eammu Holidays Georgia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "WhatsApp / Phone: +995 574 446 218 | Email: georgia@eammu.com | Office: Floor 5, Levan Gotua Street #3, Tbilisi, Georgia. We respond to WhatsApp 24/7.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",    "item": "https://www.eammu.com" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.eammu.com/contact" },
        { "@type": "ListItem", "position": 3, "name": "Travel Agency Georgia", "item": "https://www.eammu.com/contact/travel-agency-georgia" },
      ],
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────────────────── */
export default function TravelAgencyGeorgiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />



      <TravelAgencyGeorgia />

            <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-0">
        <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          <li><Link href="/" className="hover:text-[#005a31] transition-colors font-medium">Home</Link></li>
          <li className="text-gray-300">/</li>
          <li><Link href="/contact" className="hover:text-[#005a31] transition-colors font-medium">Contact</Link></li>
          <li className="text-gray-300">/</li>
          <li className="text-[#005a31] font-bold">Travel Agency Georgia</li>
        </ol>
      </nav>
      
    </>
  );
}