import AboutServer from '@/Components/Server/AboutServer/AboutServer';
import React from 'react';

export const metadata = {
  title: "About Eammu Holidays | Trusted Travel & Visa Agency in Bangladesh, Dubai & UAE",

  description:
    "Eammu Holidays is a leading international travel and visa consultancy founded in 2022, serving clients from Bangladesh, Dubai, UAE, Armenia & Georgia. We offer student visa processing, Umrah packages, holiday tours, and immigration consulting with a 95% visa success rate.",

  keywords: [
    "about Eammu Holidays",
    "travel agency Bangladesh",
    "visa consultancy Bangladesh",
    "Dubai travel agency",
    "international tour operator Bangladesh",
    "Umrah travel agency Bangladesh",
    "student visa consultancy Bangladesh",
    "immigration consultant Bangladesh",
    "visa service Bangladesh",
    "travel agency Dhaka",
    "eammu holidays about",
    "best travel agency Bangladesh 2024",
    "trusted visa service provider",
    "global travel agency Bangladesh",
    "holiday packages Bangladesh",
    "work permit Bangladesh",
    "Canada visa Bangladesh",
    "UK student visa Bangladesh",
  ],

  metadataBase: new URL("https://www.eammu.com"),

  alternates: {
    canonical: "https://www.eammu.com/about",
  },

  openGraph: {
    title: "About Eammu Holidays | Trusted Travel & Visa Agency Since 2022",
    description:
      "Meet the team behind Eammu Holidays – a globally trusted travel & visa consultancy helping thousands explore the world from Bangladesh, UAE, Armenia & Georgia. 95% visa success rate.",
    url: "https://www.eammu.com/about",
    siteName: "Eammu Holidays",
    locale: "en_US",
    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Holidays – Trusted Travel and Visa Consultancy Bangladesh",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Eammu Holidays | Trusted Travel & Visa Agency",
    description:
      "Leading travel & visa consultancy from Bangladesh with 95% visa success rate. Student visas, Umrah, tours, and more.",
    images: ["/preview-banner.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Eammu Holidays",
  url: "https://www.eammu.com",
  logo: "https://www.eammu.com/logo.png",
  image: "https://www.eammu.com/preview-banner.webp",
  description:
    "Eammu Holidays is a professional global travel agency offering visa assistance, holiday packages, student visa services, Umrah packages, and international relocation solutions from Bangladesh, Dubai, UAE, Armenia & Georgia.",
  foundingDate: "2022",
  slogan: "Connecting Dreams to Destinations Worldwide",
  numberOfEmployees: { "@type": "QuantitativeValue", value: "50" },
  areaServed: ["BD", "AE", "AM", "GE", "GB", "CA", "US", "AU"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+8801701699743",
      contactType: "customer service",
      availableLanguage: ["English", "Bengali"],
      contactOption: "TollFree",
    },
    {
      "@type": "ContactPoint",
      telephone: "+971507078334",
      contactType: "customer service",
      areaServed: "AE",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "BD",
    addressLocality: "Dhaka",
  },
  sameAs: [
    "https://www.facebook.com/eammuholidays",
    "https://www.instagram.com/eammuholidays",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Eammu Holidays Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Student Visa Consultancy",
          description:
            "Professional student visa processing for UK, USA, Canada, Australia with documentation and interview preparation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Umrah Packages",
          description:
            "All-inclusive Umrah travel packages from Bangladesh with flights, hotel, and visa.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Holiday Tour Packages",
          description:
            "Custom holiday packages to destinations across Europe, Asia, and the Middle East.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Immigration & Work Permit",
          description:
            "Immigration consulting and work permit assistance for UAE, Canada, and Europe.",
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
      item: "https://www.eammu.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://www.eammu.com/about",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why travel with Eammu Holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With years of international experience and offices in Bangladesh, Dubai, Armenia, and Georgia, we provide ethical, transparent, and comprehensive visa and travel solutions with a 95% visa success rate.",
      },
    },
    {
      "@type": "Question",
      name: "Does Eammu Holidays offer 24/7 customer support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our support team is available 24/7 via WhatsApp (+8801701699743) and email (info@eammu.com).",
      },
    },
    {
      "@type": "Question",
      name: "What services does Eammu Holidays offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eammu Holidays offers student visa processing, Umrah packages, holiday tour packages, immigration consulting, work permit assistance, event management, IT services, fashion, dairy & agro, and textile services.",
      },
    },
    {
      "@type": "Question",
      name: "What is Eammu Holidays' visa success rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eammu Holidays maintains a 95% visa success rate across all categories including student visas, tourist visas, and work permits.",
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <AboutServer />
    </>
  );
}