import ContactWithUs from '@/Components/Client/ContactWithUs/ContactWithUs';
import HomeSeoLinks from '@/Components/HomeSeoLinks/HomeSeoLinks';
import React from 'react';

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Eammu: Best Travel Agency in Bangladesh",

  description:
    "Eammu Holidays — a globally trusted travel and visa consultancy. Reach our offices in Cumilla (Bangladesh), Business Bay (Dubai), Yerevan (Armenia), and Tbilisi (Georgia). WhatsApp, call, or email for student visa, Umrah, holiday tours & immigration help.",

  keywords: [
    "contact Eammu Holidays",
    "travel agency Bangladesh contact",
    "visa consultant Bangladesh contact",
    "Eammu Holidays phone number",
    "travel agency Cumilla Bangladesh",
    "visa support Bangladesh",
    "Dubai travel agency contact",
    "travel agency Business Bay Dubai",
    "immigration consultant Bangladesh",
    "student visa consultant Bangladesh",
    "Umrah package contact Bangladesh",
    "international travel agency Bangladesh",
    "Eammu Holidays office locations",
    "visa agency Dhaka Bangladesh",
    "contact travel agency Dubai UAE",
    "Eammu Holidays WhatsApp",
    "Eammu Holidays email",
    "travel consultant Cumilla",
  ],

  alternates: {
    canonical: "https://www.eammu.com/contact",
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

  openGraph: {
    type: "website",
    url: "https://www.eammu.com/contact",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Contact Eammu Holidays – Global Travel & Visa Experts",
    description:
      "Get in touch with Eammu Holidays for student visa, Umrah, holiday tours & immigration. Offices in Bangladesh, UAE, Armenia & Georgia. 24/7 WhatsApp support.",
    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Contact Eammu Holidays – Travel and Visa Agency Bangladesh Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Eammu Holidays | Travel & Visa Agency",
    description:
      "Reach our expert consultants for student visa, Umrah packages, holiday tours & immigration. Available 24/7 via WhatsApp.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};

/* ─── JSON-LD Schemas ─── */

// Primary organization + all branch offices
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Eammu Holidays",
  alternateName: ["Eammu Tours", "Eammu Immigration Services"],
  url: "https://www.eammu.com",
  logo: "https://www.eammu.com/logo.png",
  image: "https://www.eammu.com/preview-banner.webp",
  description:
    "Eammu Holidays is a globally trusted travel and visa consultancy founded in 2022, offering student visa processing, Umrah packages, holiday tours, immigration consulting, and work permits from offices in Bangladesh, UAE, Armenia, and Georgia.",
  foundingDate: "2022",
  slogan: "Connecting Dreams to Destinations Worldwide",
  areaServed: ["BD", "AE", "AM", "GE", "GB", "CA", "US", "AU"],
  email: "info@eammu.com",
  telephone: "+8801701699743",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office No-178, 1st Floor, Gomoti Tower, Cantonment",
    addressLocality: "Cumilla",
    addressRegion: "Chittagong Division",
    postalCode: "3500",
    addressCountry: "BD",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.483984",
    longitude: "91.139884",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+8801701699743",
      contactType: "customer service",
      areaServed: "BD",
      availableLanguage: ["English", "Bengali"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
    {
      "@type": "ContactPoint",
      telephone: "+8801631312524",
      contactType: "sales",
      areaServed: "BD",
      availableLanguage: ["English", "Bengali"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+971507078334",
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic", "Bengali"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/eammutourism",
    "https://www.instagram.com/eammuholidays",
    "https://www.linkedin.com/company/eammu-immigration-services",
    "https://www.youtube.com/@Eammutour",
  ],
  subOrganization: [
    {
      "@type": "TravelAgency",
      name: "Eammu Holidays Dubai",
      url: "https://www.eammu.com/contact/travel-agency-dubai",
      telephone: "+971507078334",
      email: "dubai@eammu.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Business Bay",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
    {
      "@type": "TravelAgency",
      name: "Eammu Holidays Armenia",
      url: "https://www.eammu.com/contact/travel-agency-armenia",
      telephone: "+37494810585",
      email: "armenia@eammu.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Lambron 39",
        addressLocality: "Yerevan",
        addressCountry: "AM",
      },
    },
    {
      "@type": "TravelAgency",
      name: "Eammu Holidays Georgia",
      url: "https://www.eammu.com/contact/travel-agency-georgia",
      telephone: "+995574446218",
      email: "georgia@eammu.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Levan Gotua Street #3, Floor 5",
        addressLocality: "Tbilisi",
        addressCountry: "GE",
      },
    },
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
            "Professional student visa processing for UK, USA, Canada, and Australia.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Umrah Packages Bangladesh",
          description:
            "All-inclusive Umrah travel packages from Bangladesh with flights, hotel & visa.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Holiday Tour Packages",
          description:
            "Custom holiday packages to Europe, Middle East, and Asia from Bangladesh.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Work Permit & Immigration Consulting",
          description:
            "Immigration and work permit assistance for UAE, Canada, and Europe.",
        },
      },
    ],
  },
};

// Breadcrumb
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.eammu.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.eammu.com/contact" },
  ],
};

// FAQ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where are Eammu Holidays offices located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eammu Holidays has offices in Cumilla, Bangladesh (Gomoti Tower, Cantonment); Business Bay, Dubai, UAE; Lambron 39, Yerevan, Armenia; and Levan Gotua Street #3, Tbilisi, Georgia.",
      },
    },
    {
      "@type": "Question",
      name: "How can I apply for a visa through Eammu Holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact us via WhatsApp (+8801701699743), email (info@eammu.com), or visit any of our offices. Our certified consultants handle student visas, tourist visas, and work permits for UK, USA, Canada, UAE, and Europe.",
      },
    },
    {
      "@type": "Question",
      name: "Does Eammu Holidays offer 24/7 support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our WhatsApp support (+8801701699743) is available 24/7. Office hours are 9AM–9PM (BD time) Sunday to Thursday.",
      },
    },
    {
      "@type": "Question",
      name: "What is the phone number for Eammu Holidays Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach Eammu Holidays Bangladesh at +8801631312524 or +8801701699743. For UAE: +971507078334.",
      },
    },
    {
      "@type": "Question",
      name: "Does Eammu Holidays provide Umrah packages from Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Eammu Holidays offers all-inclusive Umrah packages from Bangladesh including flights, hotel bookings, Umrah visa processing, and guide services.",
      },
    },
  ],
};

// WebPage schema
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Eammu Holidays",
  description:
    "Contact page for Eammu Holidays – travel and visa consultancy with offices in Bangladesh, Dubai, Armenia, and Georgia.",
  url: "https://www.eammu.com/contact",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.eammu.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.eammu.com/contact" },
    ],
  },
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: "https://www.eammu.com", name: "Eammu Holidays" },
};

export default function ContactPage() {
  return (
    <>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <ContactWithUs />
      <HomeSeoLinks />
    </>
  );
}