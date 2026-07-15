// Server Component — no 'use client' — maximum SEO indexing

import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://eammu.com"),

  title: {
    default: "Travel Agency Bangladesh | visa, tours, and flight booking",
  },

  description:
    "Travel Agency Bangladesh – Eammu Holidays is an IATA-accredited travel agency offering tourist visas, Schengen visas, air tickets, Umrah packages, holiday tours and travel services worldwide.",
  keywords: [
    // ── Core brand & agency
    "online travel agency Bangladesh",
    "best travel agency in Bangladesh",
    "best travel agency Bangladesh 2026",
    "travel agency Bangladesh",
    "travel agency in Bangladesh",
    "travel agency Cumilla Bangladesh",
    "travel agency Dhaka Bangladesh",
    "travel agency near me Dhaka",
    "travel agency near me Cumilla",
    "trusted travel agency Bangladesh",
    "IATA accredited travel agency Bangladesh",
    "Eammu Holidays Bangladesh",
    "Eammu travel agency",
    "tour operator Bangladesh",
    "tour and travel agency Bangladesh",
    "travel company Bangladesh",
    "travel consultant Bangladesh",
    "travel services Bangladesh",
    "Bangladeshi travel agency",

    // ── Visa – General
    "visa agency Bangladesh",
    "visa consultancy Bangladesh",
    "visa services Bangladesh online",
    "immigration consultant Bangladesh",
    "visa processing Bangladesh",
    "best visa agency Bangladesh 2026",
    "visa help Bangladesh",
    "visa rejection help Bangladesh",
    "visa consultant near me Bangladesh",

    // ── Visa – Country-specific
    "Canada visa Bangladesh 2026",
    "Canada tourist visa Bangladesh",
    "Canada PR from Bangladesh",
    "UK visa Bangladesh 2026",
    "UK visit visa Bangladesh",
    "UK student visa Bangladesh",
    "USA visa Bangladesh 2026",
    "USA tourist visa Bangladesh",
    "USA B1 B2 visa Bangladesh",
    "F1 student visa USA Bangladesh",
    "Schengen visa Bangladesh",
    "Schengen visa from Bangladesh",
    "Europe visa Bangladesh",
    "Dubai visa Bangladesh",
    "UAE visa Bangladesh",
    "Dubai visit visa Bangladeshi citizen",
    "Australia visa Bangladesh",
    "Australia student visa Bangladesh",
    "India visa Bangladesh",
    "India e-visa Bangladesh",
    "tourist visa Bangladesh",
    "visit visa Bangladesh",

    // ── Work permits
    "work permit visa Europe from Bangladesh",
    "Europe work permit Bangladesh 2026",
    "Poland work permit Bangladesh",
    "Romania work permit Bangladesh",
    "Portugal work permit Bangladesh",
    "Europe work visa Bangladesh",
    "overseas job visa Bangladesh",

    // ── Student / Education
    "student visa Bangladesh",
    "student visa UK USA Canada Bangladesh",
    "education consultancy Bangladesh",
    "study abroad Bangladesh",
    "IELTS preparation Bangladesh",
    "scholarship Bangladesh",
    "university admission abroad Bangladesh",

    // ── Tours & Umrah
    "Umrah package Bangladesh 2026",
    "Umrah package from Bangladesh",
    "best Umrah package Bangladesh",
    "Dubai tour package from Bangladesh",
    "holiday packages Bangladesh 2026",
    "Cox's Bazar tour package",
    "honeymoon package Bangladesh",
    "group tour Bangladesh",
    "Thailand tour from Bangladesh",
    "Malaysia tour from Bangladesh",
    "Europe tour from Bangladesh",

    // ── Flights
    "air ticket booking Bangladesh",
    "flight booking Bangladesh online",
    "cheap air ticket Bangladesh",
    "international flight booking Dhaka",
    "Dhaka to Dubai flight ticket",
    "Dhaka to London flight",

    // ── UAE / Dubai audience
    "travel agency UAE for Bangladeshi",
    "visit visa UAE for Bangladeshi",
    "Dubai visa price for Bangladeshi",
    "Bangladeshi travel agency Dubai",

    // ── Geo-targeted long-tail
    "travel agency Cumilla",
    "visa agency Cumilla Bangladesh",
    "travel agent Dhaka Bangladesh",
    "visa office Dhaka Bangladesh",
    "travel agency Chittagong Bangladesh",
    "travel agency Sylhet Bangladesh",
  ],

  alternates: {
    canonical: "https://eammu.com/online-travel-agency-bangladesh",
    languages: {
      "en-US": "https://eammu.com/online-travel-agency-bangladesh",
      "bn-BD": "https://eammu.com/online-travel-agency-bangladesh",
    },
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
    url: "https://eammu.com/online-travel-agency-bangladesh",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title:
      "Best Online Travel Agency in Bangladesh 2026 | Eammu Holidays",
    description:
      "IATA-accredited travel agency in Bangladesh since 2012. Canada, UK, USA, Schengen, Dubai & Europe work permit visas — 98% success rate. Air tickets, Umrah packages, student visa. Free consultation.",
    images: [
      {
        url: "https://eammu.com/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Holidays – Best Online Travel and Visa Agency Bangladesh 2026",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    creator: "@eammuholidays",
    title: "Best Online Travel & Visa Agency Bangladesh 2026 | Eammu Holidays",
    description:
      "Canada, UK, USA, Dubai, Schengen visa from Bangladesh — 98% success rate. Air tickets, Umrah, student visa, work permit. IATA-accredited. Free consultation.",
    images: ["https://eammu.com/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
    shortcut: "/emf.jpg",
    apple: "/emf.jpg",
  },


  category: "travel",

  other: {
    "geo.region": "BD",
    "geo.placename": "Cumilla, Bangladesh",
    "geo.position": "23.4607;91.1809",
    ICBM: "23.4607, 91.1809",
    "revisit-after": "3 days",
    language: "English",
    rating: "General",
    distribution: "Global",
    coverage: "Worldwide",
    target: "all",
    "HandheldFriendly": "True",
    "MobileOptimized": "320",
  },
};

// ─── Structured Data ───────────────────────────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // ── 1. TravelAgency / LocalBusiness (primary)
    {
      "@type": ["TravelAgency", "LocalBusiness"],
      "@id": "https://eammu.com/#organization",
      name: "Eammu Holidays",
      alternateName: [
        "Eammu Travel Agency Bangladesh",
        "ইমু হলিডেজ",
        "Eammu Holidays Cumilla",
        "Eammu Holidays Dhaka",
      ],
      url: "https://eammu.com",
      logo: {
        "@type": "ImageObject",
        url: "https://eammu.com/emf.jpg",
        width: 200,
        height: 200,
      },
      image: {
        "@type": "ImageObject",
        url: "https://eammu.com/preview-banner.webp",
        width: 1200,
        height: 630,
      },
      description:
        "Eammu Holidays is Bangladesh's #1 IATA-accredited online travel and visa agency since 2012, with offices in Cumilla, Dhaka, Dubai, Armenia, and Georgia. We process Canada, UK, USA, Schengen, Dubai, Australia, and Europe work permit visas with a 98% success rate. Services include air ticket booking, Umrah packages, holiday tours, student visa consultancy, and overseas work permits.",
      telephone: "+8801631312524",
      email: "bangladesh@eammu.com",
      foundingDate: "2012",
      priceRange: "$$",
      currenciesAccepted: "BDT, USD, AED",
      paymentAccepted: "Cash, Bank Transfer, bKash, Nagad",
      openingHours: "Mo-Sa 09:00-20:00",
      areaServed: [
        { "@type": "Country", name: "Bangladesh" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Armenia" },
        { "@type": "Country", name: "Georgia" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office No-178, 1st Floor, Gomoti Tower, Cantonment",
        addressLocality: "Cumilla",
        addressRegion: "Chattogram Division",
        postalCode: "3500",
        addressCountry: "BD",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.4607,
        longitude: 91.1809,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "320",
        reviewCount: "280",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Rafiqul Islam" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Best travel agency in Bangladesh. Got my Canada tourist visa approved on the first try. Highly professional team at Eammu Holidays Cumilla.",
          datePublished: "2025-11-15",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Nusrat Jahan" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Excellent visa agency in Bangladesh. My Schengen visa was approved within 2 weeks. The team guided me through every document perfectly.",
          datePublished: "2026-01-20",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Mohammad Hasan" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Got my UK visit visa approved through Eammu Holidays. They are the most trusted travel agency in Bangladesh for visa processing.",
          datePublished: "2026-03-08",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Eammu Holidays Visa & Travel Services 2026",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Canada Visa Processing Bangladesh",
            itemOffered: {
              "@type": "Service",
              name: "Canada Visa Processing",
              url: "https://eammu.com/visa",
              description: "Canada tourist, student, PR and work permit visa processing from Bangladesh",
            },
          },
          {
            "@type": "Offer",
            name: "UK Visa Bangladesh",
            itemOffered: {
              "@type": "Service",
              name: "UK Visa Processing",
              url: "https://eammu.com/visa",
            },
          },
          {
            "@type": "Offer",
            name: "USA Visa Interview Coaching Bangladesh",
            itemOffered: {
              "@type": "Service",
              name: "USA Visa Assistance & Interview Preparation",
              url: "https://eammu.com/target-usa-visa-interview-preparation",
            },
          },
          {
            "@type": "Offer",
            name: "Dubai UAE Visa for Bangladeshi",
            itemOffered: {
              "@type": "Service",
              name: "Dubai / UAE Visa",
              url: "https://eammu.com/visa/dubai-residents",
            },
          },
          {
            "@type": "Offer",
            name: "Schengen Visa Bangladesh",
            itemOffered: {
              "@type": "Service",
              name: "Schengen Visa Processing",
              url: "https://eammu.com/visa",
            },
          },
          {
            "@type": "Offer",
            name: "Europe Work Permit Bangladesh 2026",
            itemOffered: {
              "@type": "Service",
              name: "Europe Work Permit – Poland, Romania, Portugal",
              url: "https://eammu.com/visa",
            },
          },
          {
            "@type": "Offer",
            name: "Student Visa Consultancy Bangladesh",
            itemOffered: {
              "@type": "Service",
              name: "Student Visa Consultancy",
              url: "https://eammu.com/study-abroad/student-visa",
            },
          },
          {
            "@type": "Offer",
            name: "Umrah Package Bangladesh 2026",
            itemOffered: {
              "@type": "Service",
              name: "Umrah Packages Bangladesh",
              url: "https://eammu.com/our-services/tour-packages",
            },
          },
          {
            "@type": "Offer",
            name: "Air Ticket Booking Bangladesh",
            itemOffered: {
              "@type": "Service",
              name: "International Air Ticket Booking",
              url: "https://eammu.com/flight-booking",
            },
          },
          {
            "@type": "Offer",
            name: "Australia Visa Bangladesh",
            itemOffered: {
              "@type": "Service",
              name: "Australia Visa Processing",
              url: "https://eammu.com/visa",
            },
          },
        ],
      },
      sameAs: [
        "https://www.facebook.com/eammutourism",
        "https://www.instagram.com/eammuholidays",
        "https://www.linkedin.com/company/eammu-immigration-services",
        "https://twitter.com/eammuholidays",
        "https://www.youtube.com/@eammutours",
        "https://eammu.com",
      ],
    },

    // ── 2. Multiple branch LocalBusiness nodes
    {
      "@type": "LocalBusiness",
      "@id": "https://eammu.com/#branch-dubai",
      name: "Eammu Holidays – Dubai Office",
      parentOrganization: { "@id": "https://eammu.com/#organization" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Business Bay",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      telephone: "+971507078334",
      email: "dubai@eammu.com",
      url: "https://eammu.com/contact/travel-agency-dubai",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://eammu.com/#branch-armenia",
      name: "Eammu Holidays – Yerevan Office",
      parentOrganization: { "@id": "https://eammu.com/#organization" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Lambron 39",
        addressLocality: "Yerevan",
        addressCountry: "AM",
      },
      telephone: "+37494810585",
      email: "armenia@eammu.com",
      url: "https://eammu.com/contact/travel-agency-armenia",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://eammu.com/#branch-georgia",
      name: "Eammu Holidays – Tbilisi Office",
      parentOrganization: { "@id": "https://eammu.com/#organization" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Levan Gotua Street #3",
        addressLocality: "Tbilisi",
        addressCountry: "GE",
      },
      telephone: "+995574446218",
      email: "georgia@eammu.com",
      url: "https://eammu.com/contact/travel-agency-georgia",
    },

    // ── 3. WebPage
    {
      "@type": "WebPage",
      "@id": "https://eammu.com/online-travel-agency-bangladesh#webpage",
      url: "https://eammu.com/online-travel-agency-bangladesh",
      name: "Best Online Travel Agency in Bangladesh 2026 | Eammu Holidays",
      description:
        "Eammu Holidays is Bangladesh's #1 IATA-accredited travel and visa agency. Canada, UK, USA, Schengen, Dubai, Australia & Europe work permit visas with 98% success rate.",
      isPartOf: { "@id": "https://eammu.com/#website" },
      about: { "@id": "https://eammu.com/#organization" },
      breadcrumb: { "@id": "https://eammu.com/online-travel-agency-bangladesh#breadcrumb" },
      inLanguage: "en-US",
      datePublished: "2023-01-01",
      dateModified: "2026-06-01",
      potentialAction: {
        "@type": "ReadAction",
        target: "https://eammu.com/online-travel-agency-bangladesh",
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".speakable-intro"],
      },
    },

    // ── 4. Website with SiteLinksSearchBox
    {
      "@type": "WebSite",
      "@id": "https://eammu.com/#website",
      url: "https://eammu.com",
      name: "Eammu Holidays",
      publisher: { "@id": "https://eammu.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://eammu.com/visa?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },

    // ── 5. BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "@id": "https://eammu.com/online-travel-agency-bangladesh#breadcrumb",
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
          name: "Online Travel Agency Bangladesh",
          item: "https://eammu.com/online-travel-agency-bangladesh",
        },
      ],
    },

    // ── 6. FAQPage
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is the best travel agency in Bangladesh for visa processing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eammu Holidays is rated 4.9/5 by 320+ verified clients and is widely regarded as the best travel agency in Bangladesh for visa processing. They hold IATA accreditation and have maintained a 98% visa success rate for Canada, UK, USA, Dubai, and Schengen visas since 2012.",
          },
        },
        {
          "@type": "Question",
          name: "Does Eammu Holidays help with Europe work permits from Bangladesh in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Eammu Holidays offers specialized consulting for Europe work permits from Bangladesh in 2026, including Poland work permit, Romania work permit, and Portugal work visa — with legal, transparent processing, full document preparation, and employer matching support.",
          },
        },
        {
          "@type": "Question",
          name: "What is the cost of a Dubai visa for Bangladeshi citizens?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dubai visa prices for Bangladeshi citizens vary by duration: 14-day, 30-day, and 90-day options are available. Prices change frequently based on UAE immigration policy. Contact Eammu Holidays at +8801631312524 or visit their Dubai office (+971507078334) for the latest 2026 UAE visit visa prices.",
          },
        },
        {
          "@type": "Question",
          name: "Can Eammu Holidays help with student visa applications from Bangladesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Eammu Holidays is a certified education consultancy in Bangladesh, helping students get university admissions and student visas for UK, USA, Canada, and Australia — with or without IELTS. They also provide scholarship guidance and IELTS preparation through their Target IELTS center.",
          },
        },
        {
          "@type": "Question",
          name: "Where are Eammu Holidays offices in Bangladesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eammu Holidays' main Bangladesh office is at Office No-178, 1st Floor, Gomoti Tower, Cantonment Road, Cumilla (Phone: +8801631312524). They serve clients across Dhaka, Chittagong, Sylhet, and all of Bangladesh. International offices are located in Dubai (UAE), Yerevan (Armenia), and Tbilisi (Georgia).",
          },
        },
        {
          "@type": "Question",
          name: "Is Eammu Holidays IATA accredited?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Eammu Holidays is IATA (International Air Transport Association) accredited, making them one of the most trusted travel and visa agencies in Bangladesh for international air ticket booking and travel services.",
          },
        },
        {
          "@type": "Question",
          name: "How long does Schengen visa processing take from Bangladesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Schengen visa processing from Bangladesh typically takes 15 working days from the date of biometric submission, though it can vary by country and season. Eammu Holidays prepares a complete, error-free application to minimize delays and maximize approval chances.",
          },
        },
        {
          "@type": "Question",
          name: "Does Eammu Holidays offer Umrah packages from Bangladesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Eammu Holidays offers comprehensive Umrah packages from Bangladesh in 2026 with premium hotels near the Haram, Makkah-Madinah ground transport, dedicated guides, and flexible departure dates from Dhaka.",
          },
        },
      ],
    },

    // ── 7. HowTo: How to apply for a visa through Eammu Holidays
    {
      "@type": "HowTo",
      name: "How to Apply for a Visa Through Eammu Holidays Bangladesh",
      description:
        "Step-by-step process to apply for any international visa through Eammu Holidays, the best travel agency in Bangladesh.",
      totalTime: "P7D",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Free Consultation",
          text: "Contact Eammu Holidays via WhatsApp (+8801631312524) or walk into their Cumilla or Dhaka office for a free visa eligibility consultation.",
          url: "https://eammu.com/contact/travel-agency-bangladesh",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Document Checklist",
          text: "Receive a tailored document checklist for your target visa type — Canada, UK, USA, Schengen, Dubai, or any other country.",
          url: "https://eammu.com/travel-resources/visa-checklist-generator",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Document Preparation",
          text: "Our expert team reviews and prepares all your documents including bank statements, cover letters, travel itineraries, and supporting files.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Embassy Submission",
          text: "Eammu Holidays submits your visa application to the embassy and tracks its progress, keeping you updated at every stage.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Visa Collection",
          text: "Once your visa is approved, collect it from our office or receive it by courier. Our 98% success rate means you travel with confidence.",
        },
      ],
    },

    // ── 8. ItemList of services
    {
      "@type": "ItemList",
      name: "Eammu Holidays Visa & Travel Services – Bangladesh 2026",
      description: "Top visa and travel services offered by the best travel agency in Bangladesh",
      itemListOrder: "https://schema.org/ItemListUnordered",
      numberOfItems: 10,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Canada Visa Processing from Bangladesh", url: "https://eammu.com/visa" },
        { "@type": "ListItem", position: 2, name: "UK Visa Bangladesh", url: "https://eammu.com/visa" },
        { "@type": "ListItem", position: 3, name: "USA Visa Interview Preparation Bangladesh", url: "https://eammu.com/target-usa-visa-interview-preparation" },
        { "@type": "ListItem", position: 4, name: "Schengen Visa Bangladesh", url: "https://eammu.com/visa" },
        { "@type": "ListItem", position: 5, name: "Dubai UAE Visa for Bangladeshi Citizens", url: "https://eammu.com/visa/dubai-residents" },
        { "@type": "ListItem", position: 6, name: "Europe Work Permit Bangladesh 2026", url: "https://eammu.com/visa" },
        { "@type": "ListItem", position: 7, name: "Australia Visa Bangladesh", url: "https://eammu.com/visa" },
        { "@type": "ListItem", position: 8, name: "Student Visa Consultancy Bangladesh", url: "https://eammu.com/study-abroad/student-visa" },
        { "@type": "ListItem", position: 9, name: "Umrah Packages Bangladesh 2026", url: "https://eammu.com/our-services/tour-packages" },
        { "@type": "ListItem", position: 10, name: "International Air Ticket Booking Bangladesh", url: "https://eammu.com/flight-booking" },
      ],
    },
  ],
};

// ─── Data ──────────────────────────────────────────────────────────────────────
const visaServices = [
  {
    flag: "🇨🇦",
    country: "Canada Visa",
    types: "Tourist, Student, PR, Work Permit",
    desc: "End-to-end documentation support for Canada tourist visas, student visas, Express Entry PR, and work permits from Bangladesh. Our consultants ensure applications meet 2026 IRCC immigration standards.",
    href: "/visa",
    badge: "Most Applied",
    keyword: "canada visa bangladesh",
  },
  {
    flag: "🇬🇧",
    country: "UK Visa",
    types: "Visit, Student, Work, Family",
    desc: "UK Standard Visitor Visas, UK Student Visas, Skilled Worker visas, and family reunion visas processed with expert document review and a high approval track record for Bangladeshi applicants.",
    href: "/visa",
    badge: "High Demand",
    keyword: "uk visa bangladesh",
  },
  {
    flag: "🇺🇸",
    country: "USA Visa",
    types: "B1/B2, F1, J1, H1B",
    desc: "Expert coaching for USA B1/B2 tourist, F1 student, and J1 exchange visas. Our exclusive 'Target USA' interview preparation program has maintained a 98% visa success rate since 2015.",
    href: "/target-usa-visa-interview-preparation",
    badge: "98% Success",
    keyword: "usa visa bangladesh",
  },
  {
    flag: "🇦🇪",
    country: "Dubai / UAE Visa",
    types: "Visit, Work, Residence",
    desc: "UAE visit visa (14/30/90-day), Dubai work permits, and residence visas for Bangladeshi citizens. Get the latest 2026 UAE visit visa prices and fast processing from our Dubai and Bangladesh offices.",
    href: "/visa/dubai-residents",
    badge: "Fast Processing",
    keyword: "dubai visa bangladesh",
  },
  {
    flag: "🇪🇺",
    country: "Schengen Visa",
    types: "26 European Countries",
    desc: "Single-entry and multi-entry Schengen visas covering Germany, France, Italy, Netherlands, Spain, and 21 more countries. Complete documentation support and embassy appointment guidance from Bangladesh.",
    href: "/visa",
    badge: "26 Countries",
    keyword: "schengen visa bangladesh",
  },
  {
    flag: "🌍",
    country: "Europe Work Permit 2026",
    types: "Poland, Romania, Portugal",
    desc: "Specialized consulting for Europe work permits from Bangladesh. Legal and transparent processing for Poland, Romania, and Portugal — one of the most in-demand visa services in Bangladesh 2026.",
    href: "/visa",
    badge: "2026 Updated",
    keyword: "europe work permit bangladesh 2026",
  },
  {
    flag: "🇦🇺",
    country: "Australia Visa",
    types: "Student, Skilled, Tourist",
    desc: "Australia student visas, skilled migration (189/190 points test), and tourist ETA visas from Bangladesh. Full document review, skill assessment support, and DHA application lodgement.",
    href: "/visa",
    badge: "PR Pathway",
    keyword: "australia visa bangladesh",
  },
  {
    flag: "🇮🇳",
    country: "India E-Visa",
    types: "Tourist, Business, Medical",
    desc: "Fast India e-visa processing for Bangladeshi citizens — tourist, business, and medical categories. Typically processed within 3–5 business days with expert document support.",
    href: "/visa/india",
    badge: "3–5 Day",
    keyword: "india e-visa bangladesh",
  },
];

const offices = [
  {
    flag: "🇧🇩",
    city: "Cumilla, Bangladesh",
    label: "Head Office – Bangladesh",
    address: "Office No-178, 1st Floor, Gomoti Tower, Cantonment Road, Cumilla-3500",
    phone: "+8801631312524, +971507078334",
    whatsapp: "+8801631312524",
    email: "bangladesh@eammu.com",
    href: "/contact/travel-agency-bangladesh",
    hours: "Sat–Thu: 9am–8pm",
  },
  {
    flag: "🇦🇪",
    city: "Business Bay, Dubai",
    label: "International Office – UAE",
    address: "Business Bay, Dubai, United Arab Emirates",
    phone: "+971507078334",
    whatsapp: "+971507078334",
    email: "dubai@eammu.com",
    href: "/contact/travel-agency-dubai",
    hours: "Mon–Sat: 9am–7pm",
  },
  {
    flag: "🇦🇲",
    city: "Yerevan, Armenia",
    label: "Europe Hub – Armenia",
    address: "Eammu Holidays, Lambron Street 39, Yerevan",
    phone: "+37494810585",
    whatsapp: "+37494810585",
    email: "armenia@eammu.com",
    href: "/contact/travel-agency-armenia",
    hours: "Mon–Fri: 9am–6pm",
  },
  {
    flag: "🇬🇪",
    city: "Tbilisi, Georgia",
    label: "Europe Hub – Georgia",
    address: "Levan Gotua Street #3, Tbilisi, Georgia",
    phone: "+995574446218",
    whatsapp: "+995574446218",
    email: "georgia@eammu.com",
    href: "/contact/travel-agency-georgia",
    hours: "Mon–Fri: 9am–6pm",
  },
];

const stats = [
  { value: "4.9★", label: "Google Rating", sub: "320+ verified reviews" },
  { value: "98%", label: "Visa Success Rate", sub: "all categories 2026" },
  { value: "5,000+", label: "Happy Clients", sub: "since 2012" },
  { value: "30+", label: "Countries Covered", sub: "visa & tours" },
  { value: "14+", label: "Years Experience", sub: "IATA accredited" },
  { value: "4", label: "Global Offices", sub: "BD · UAE · AM · GE" },
];

const quickLinks = [
  { label: "All Visa Services", href: "/visa" },
  { label: "Visa Guide 2026", href: "/visa/visa-guide" },
  { label: "E-Visa Services", href: "/visa/e-visa" },
  { label: "Dubai Residents Visa", href: "/visa/dubai-residents" },
  { label: "India Visa", href: "/visa/india" },
  { label: "Visa Rejection Help", href: "/visa-rejection" },
  { label: "Study Abroad", href: "/study-abroad" },
  { label: "Student Visa Guide", href: "/study-abroad/student-visa" },
  { label: "Scholarships 2026", href: "/scholarships" },
  { label: "IELTS Center", href: "/target-ielts-immigration-center" },
  { label: "USA Interview Prep", href: "/target-usa-visa-interview-preparation" },
  { label: "Visa Checklist Tool", href: "/travel-resources/visa-checklist-generator" },
  { label: "Processing Tracker", href: "/travel-resources/visa-processing-time-tracker" },
  { label: "Tour Packages", href: "/our-services/tour-packages" },
  { label: "Flight Booking", href: "/flight-booking" },
  { label: "Customer Reviews", href: "/testimonials" },
  { label: "Our Blog", href: "/blogs" },
  { label: "Travel Resources", href: "/travel-resources" },
  { label: "News & Updates", href: "/news" },
  { label: "Contact Us", href: "/contact/travel-agency-bangladesh" },
];

const faqItems = [
  {
    q: "Which is the best travel agency in Bangladesh for visa processing?",
    a: "Eammu Holidays is rated 4.9/5 by 320+ verified clients and is widely regarded as the best travel agency in Bangladesh for visa processing. IATA-accredited with a 98% visa success rate for Canada, UK, USA, Dubai, and Schengen visas since 2012.",
  },
  {
    q: "Does Eammu Holidays help with Europe work permits from Bangladesh in 2026?",
    a: "Yes. Eammu Holidays offers specialized consulting for Europe work permits from Bangladesh in 2026, including Poland, Romania, and Portugal work visas — with legal, transparent processing, full document preparation, and employer matching.",
  },
  {
    q: "What is the cost of a Dubai visa for Bangladeshi citizens?",
    a: "Dubai visa prices for Bangladeshi citizens vary by duration (14-day, 30-day, 90-day) and change with UAE immigration policy. Contact Eammu Holidays at +8801631312524 or our Dubai office at +971507078334 for the latest 2026 UAE visit visa prices.",
  },
  {
    q: "Can Eammu Holidays help with student visa applications from Bangladesh?",
    a: "Yes. Eammu Holidays is a certified education consultancy in Bangladesh, helping students secure admissions and student visas for UK, USA, Canada, and Australia — with or without IELTS — including full scholarship guidance.",
  },
  {
    q: "Where are Eammu Holidays offices in Bangladesh?",
    a: "Eammu Holidays' main Bangladesh office is at Office No-178, 1st Floor, Gomoti Tower, Cantonment Road, Cumilla. They serve clients across Dhaka, Chittagong, Sylhet, and all of Bangladesh. International offices are in Dubai, Yerevan, and Tbilisi.",
  },
  {
    q: "Is Eammu Holidays IATA accredited?",
    a: "Yes, Eammu Holidays holds IATA accreditation, making them one of the most credible and trusted travel and visa agencies in Bangladesh for international flight booking and travel services.",
  },
  {
    q: "How long does Schengen visa processing take from Bangladesh?",
    a: "Schengen visa processing from Bangladesh typically takes 15 working days after biometric submission. Eammu Holidays prepares a complete, error-free application to minimize delays and maximize approval chances.",
  },
  {
    q: "Does Eammu Holidays offer Umrah packages from Bangladesh?",
    a: "Yes. Eammu Holidays offers comprehensive Umrah packages from Bangladesh 2026 including premium hotels near the Haram, Makkah–Madinah ground transport, visa processing, and flexible Dhaka departure dates.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "WhatsApp or walk into our Cumilla / Dhaka office. Our consultants assess your profile and recommend the best visa pathway — no charge.",
    icon: "💬",
  },
  {
    step: "02",
    title: "Custom Document Checklist",
    desc: "Receive a tailored checklist for your specific visa type — Canada, UK, USA, Schengen, Dubai, or any other country.",
    icon: "📋",
  },
  {
    step: "03",
    title: "Expert Document Preparation",
    desc: "Our team reviews and formats all documents: bank statements, cover letters, NOC, travel itinerary, and supporting files — zero errors.",
    icon: "📂",
  },
  {
    step: "04",
    title: "Embassy Submission & Tracking",
    desc: "We submit your visa application and track it at every stage, giving you real-time updates until a decision is made.",
    icon: "🏛️",
  },
  {
    step: "05",
    title: "Visa Collection",
    desc: "Collect your approved visa from our office or by courier. 98% of our applications get approved. Your journey starts here.",
    icon: "✈️",
  },
];

const testimonials = [
  {
    name: "Rafiqul Islam",
    location: "Cumilla, Bangladesh",
    rating: 5,
    text: "Best travel agency in Bangladesh. Got my Canada tourist visa approved on the first attempt. Extremely professional team. Highly recommend Eammu Holidays.",
    service: "Canada Visa",
    date: "November 2025",
  },
  {
    name: "Nusrat Jahan",
    location: "Dhaka, Bangladesh",
    rating: 5,
    text: "My Schengen visa was approved in under 2 weeks. Eammu Holidays guided me through every document perfectly. The most trusted visa agency in Bangladesh.",
    service: "Schengen Visa",
    date: "January 2026",
  },
  {
    name: "Mohammad Hasan",
    location: "Chittagong, Bangladesh",
    rating: 5,
    text: "UK visit visa approved through Eammu Holidays. Their document preparation was flawless. Best travel agency I've worked with in Bangladesh.",
    service: "UK Visa",
    date: "March 2026",
  },
];

const whyUsPoints = [
  {
    icon: "🏆",
    title: "IATA Accredited Since 2012",
    desc: "One of the few IATA-accredited travel agencies in Bangladesh — a global stamp of trust and credibility for international travel and ticketing.",
  },
  {
    icon: "📊",
    title: "98% Visa Success Rate",
    desc: "Our meticulous document review and preparation process has maintained a 98% visa approval rate across Canada, UK, USA, Schengen, and Dubai applications.",
  },
  {
    icon: "🌐",
    title: "4 International Offices",
    desc: "Bangladesh (Cumilla & Dhaka), Dubai (UAE), Yerevan (Armenia), and Tbilisi (Georgia) — local expertise wherever Bangladeshi travellers need support.",
  },
  {
    icon: "💼",
    title: "14+ Years of Experience",
    desc: "Founded in 2012, Eammu Holidays has over 14 years of hands-on experience in international visa processing, tours, and immigration consultancy.",
  },
  {
    icon: "🤝",
    title: "Transparent & Legal Processing",
    desc: "No hidden fees, no illegal shortcuts. Every visa application we file is 100% legal, ethical, and fully compliant with embassy requirements.",
  },
  {
    icon: "⭐",
    title: "4.9★ on Google – 320+ Reviews",
    desc: "Our client satisfaction speaks for itself. 320+ verified reviews and a 4.9-star Google rating make us the most reviewed travel agency in Bangladesh.",
  },
];

const cityServices = [
  { city: "Cumilla", desc: "Main office — walk-in visa consultancy, Umrah bookings, air tickets, work permits." },
  { city: "Dhaka", desc: "Visa consultancy and student visa services for clients across Dhaka division." },
  { city: "Chittagong", desc: "Remote consultancy and document support for Chittagong-based clients." },
  { city: "Sylhet", desc: "UK visa and student visa processing support for Sylheti Bangladeshis and British Bangladeshis." },
  { city: "Rajshahi", desc: "Schengen visa and Europe work permit guidance for clients in Rajshahi division." },
  { city: "Bangladesh (All Districts)", desc: "Online visa consultation, document review, and application tracking for every district in Bangladesh." },
];

// ─── Page Component ────────────────────────────────────────────────────────────
export default function OnlineTravelAgencyBangladeshPage() {
  return (
    <>
      {/* ── JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main
        className="min-h-screen bg-[#f8fafc] text-gray-800 font-sans"
        itemScope
        itemType="https://schema.org/TravelAgency"
      >
        {/* ──────────────────────────────────────────────────────────
            HERO
        ────────────────────────────────────────────────────────── */}
        <section
          className="bg-gradient-to-br from-[#002d18] via-[#004526] to-[#006b3a] text-white py-20 px-4 relative overflow-hidden"
          aria-label="Eammu Holidays – best online travel and visa agency Bangladesh 2026"
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5" style={{backgroundImage:"radial-gradient(circle at 25px 25px, white 2px, transparent 0)", backgroundSize:"50px 50px"}} aria-hidden="true" />

          <div className="relative max-w-5xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol
                className="flex justify-center gap-2 text-xs text-green-300 flex-wrap"
                itemScope
                itemType="https://schema.org/BreadcrumbList"
              >
                <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                  <Link href="/" className="hover:text-white transition-colors" itemProp="item">
                    <span itemProp="name">Home</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </li>
                <li className="text-green-500" aria-hidden="true">/</li>
                <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                  <span className="text-white font-semibold" itemProp="name" aria-current="page">
                    Online Travel Agency Bangladesh
                  </span>
                  <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>

            {/* Trust badges row */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-bold" aria-label="IATA accredited">
                ✅ IATA Accredited
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-bold" aria-label="4.9 star rating">
                ⭐ 4.9 / 5 — 320+ Reviews
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-bold" aria-label="Since 2012">
                🏆 Since 2012 — 14+ Years
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-bold" aria-label="98% visa success">
                📊 98% Visa Success Rate
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight"
              itemProp="name"
            >
              Travel &amp; Visa Agency in{" "}
              <span className="text-orange-400">Bangladesh</span> — 2026
            </h1>

            <p
              className="text-lg md:text-xl text-green-50/90 max-w-4xl mx-auto leading-relaxed mb-8 speakable-intro"
              itemProp="description"
            >
              <strong className="text-white">Eammu Holidays</strong> is Bangladesh's most trusted{" "}
              <strong className="text-white">online travel agency and visa consultancy</strong> —
              IATA-accredited since 2012, with offices in{" "}
              <strong className="text-white">Cumilla, Dhaka, Dubai, Armenia &amp; Georgia</strong>.
              We process <strong className="text-white">Canada, UK, USA, Schengen, Dubai, Australia &amp; Europe work permit</strong>{" "}
              visas with a verified <strong className="text-white">98% success rate</strong> — plus air tickets, Umrah packages, student visas &amp; holiday tours.
            </p>

            {/* Keyword tags — dense semantic signals */}
            <div className="flex flex-wrap justify-center gap-2 mb-10" aria-label="Services offered">
              {[
                "Travel Agency Bangladesh", "Visa Agency Bangladesh", "Canada Visa 2026",
                "UK Visa Bangladesh", "USA Visa Coaching", "Europe Work Permit",
                "Dubai Visa", "Schengen Visa", "Student Visa Bangladesh",
                "Umrah Package 2026", "Air Ticket Booking", "IATA Accredited",
                "Immigration Consultant BD", "Work Permit Bangladesh",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801631312524?text=Hello%2C%20I%20need%20visa%20consultation"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                aria-label="Free visa consultation on WhatsApp – Eammu Holidays Bangladesh"
                rel="noopener noreferrer"
              >
                💬 Free Visa Consultation (WhatsApp)
              </a>
              <Link
                href="/visa"
                className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base"
                aria-label="View all visa services – Eammu Holidays Bangladesh"
              >
                View All Visa Services →
              </Link>
            </div>

            {/* Contact strip */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-green-200">
              <a href="tel:+8801631312524" className="hover:text-white transition-colors flex items-center gap-1" aria-label="Call Bangladesh office">
                📞 Bangladesh: +880 1631 312524
              </a>
              <a href="tel:+971507078334" className="hover:text-white transition-colors flex items-center gap-1" aria-label="Call Dubai office">
                📞 Dubai: +971 50 707 8334
              </a>
              <a href="mailto:bangladesh@eammu.com" className="hover:text-white transition-colors flex items-center gap-1" aria-label="Email Eammu Holidays">
                ✉️ bangladesh@eammu.com
              </a>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────
            STATS STRIP
        ────────────────────────────────────────────────────────── */}
        <section
          className="bg-white border-b border-gray-100 py-8 px-4 shadow-sm"
          aria-label="Eammu Holidays key statistics"
        >
          <dl className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl md:text-3xl font-black text-[#005a31]">{s.value}</dt>
                <dd className="font-bold text-gray-700 text-sm mt-0.5">{s.label}</dd>
                <dd className="text-xs text-gray-400">{s.sub}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 space-y-24">

          {/* ──────────────────────────────────────────────────────────
              ABOUT / INTRO — high keyword density
          ────────────────────────────────────────────────────────── */}
          <section aria-label="About Eammu Holidays – online travel agency Bangladesh">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#005a31] mb-6 border-l-8 border-orange-500 pl-5">
              Bangladesh's Most Trusted Travel Agency &amp; Visa Consultancy
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>
                  When Bangladeshi citizens search for the{" "}
                  <strong className="text-[#005a31]">best travel agency in Bangladesh</strong>, one
                  name consistently appears at the top:{" "}
                  <strong className="text-[#005a31]">Eammu Holidays</strong>. Founded in 2012 and
                  headquartered in Cumilla with a full service presence across{" "}
                  <strong>Dhaka, Dubai, Armenia, and Georgia</strong>, we have spent over 14 years
                  mastering international{" "}
                  <strong>visa processing</strong> and travel planning for Bangladeshi citizens.
                </p>
                <p>
                  As an <strong className="text-[#005a31]">IATA-accredited travel and visa agency in Bangladesh</strong>,
                  Eammu Holidays processes{" "}
                  <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">Canada</Link>,{" "}
                  <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">UK</Link>,{" "}
                  <Link href="/target-usa-visa-interview-preparation" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">USA</Link>,{" "}
                  <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">Schengen</Link>,{" "}
                  <Link href="/visa/dubai-residents" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">Dubai / UAE</Link>,{" "}
                  <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">Australia</Link>, and{" "}
                  <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">Europe work permit</Link>{" "}
                  visas with a documented{" "}
                  <strong className="text-[#005a31]">98% visa approval rate</strong> — serving
                  5,000+ happy clients and counting.
                </p>
                <p>
                  Beyond visa consultancy, we offer{" "}
                  <Link href="/flight-booking" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">international air ticket booking</Link>,{" "}
                  <Link href="/our-services/tour-packages" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">Umrah packages from Bangladesh</Link>,{" "}
                  <Link href="/our-services/tour-packages" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">holiday tour packages</Link>,{" "}
                  <Link href="/study-abroad/student-visa" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">student visa consultancy</Link>,
                  and{" "}
                  <Link href="/target-usa-visa-interview-preparation" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">USA visa interview preparation</Link>{" "}
                  — making us the most complete{" "}
                  <strong>tour and travel agency in Bangladesh</strong>.
                </p>
                <p>
                  Whether you are in <strong>Cumilla, Dhaka, Chittagong, Sylhet, Rajshahi</strong> or
                  anywhere else in Bangladesh, Eammu Holidays is your gateway to a seamless
                  international travel experience. Our online visa consultancy means you can get
                  expert guidance from anywhere in Bangladesh without leaving your home.
                </p>
              </div>
              {/* Side trust card */}
              <aside className="bg-gradient-to-br from-[#004526] to-[#007a45] text-white rounded-2xl p-6 h-fit shadow-lg">
                <h3 className="font-black text-lg mb-4 text-orange-300">Why Choose Eammu Holidays?</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    "✅ IATA Accredited – Bangladesh",
                    "📊 98% Visa Approval Rate",
                    "⭐ 4.9★ Google Rating (320+ reviews)",
                    "🏆 14+ Years in Operation (since 2012)",
                    "🌐 4 Global Offices (BD, UAE, AM, GE)",
                    "👥 5,000+ Satisfied Clients",
                    "💼 30+ Countries Covered",
                    "🔒 100% Legal & Transparent",
                    "📞 Free Visa Consultation",
                  ].map((pt) => (
                    <li key={pt} className="text-green-50">{pt}</li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/8801631312524"
                  className="mt-6 block bg-orange-500 hover:bg-orange-600 text-white font-bold text-center py-3 rounded-xl text-sm transition-all"
                  aria-label="WhatsApp Eammu Holidays Bangladesh"
                  rel="noopener noreferrer"
                >
                  💬 Chat on WhatsApp Now
                </a>
              </aside>
            </div>
          </section>

          {/* ──────────────────────────────────────────────────────────
              VISA SERVICES GRID
          ────────────────────────────────────────────────────────── */}
          <section aria-label="Visa processing services from Bangladesh 2026 – Eammu Holidays">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#005a31] mb-4 border-l-8 border-orange-500 pl-5">
              Visa Processing Services from Bangladesh — 2026
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed max-w-4xl">
              As a certified <strong className="text-gray-800">visa agency in Bangladesh</strong>,
              Eammu Holidays processes 8 major visa categories with expert documentation support,
              embassy appointment guidance, and a proven 98% approval track record for Bangladeshi citizens.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visaServices.map((v) => (
                <article
                  key={v.country}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-green-200 transition-all group"
                  itemScope
                  itemType="https://schema.org/Service"
                  aria-label={`${v.country} from Bangladesh – Eammu Holidays`}
                >
                  <meta itemProp="provider" content="Eammu Holidays" />
                  <meta itemProp="areaServed" content="Bangladesh" />
                  <meta itemProp="serviceType" content="Visa Processing" />
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-3xl" aria-hidden="true">{v.flag}</span>
                    <span className="text-[10px] font-bold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full uppercase tracking-wide">
                      {v.badge}
                    </span>
                  </div>
                  <h3
                    className="text-base font-black text-gray-900 mb-1 group-hover:text-[#005a31] transition-colors"
                    itemProp="name"
                  >
                    {v.country}
                  </h3>
                  <p className="text-xs text-orange-500 font-semibold mb-3">{v.types}</p>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4" itemProp="description">
                    {v.desc}
                  </p>
                  <Link
                    href={v.href}
                    className="inline-flex items-center gap-1 text-[#005a31] text-xs font-bold hover:text-orange-500 transition-colors"
                    aria-label={`Apply for ${v.country} from Bangladesh – Eammu Holidays`}
                  >
                    Apply Now →
                  </Link>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link
                href="/visa"
                className="bg-[#005a31] text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-500 transition-all shadow text-sm"
                aria-label="View all visa services from Bangladesh – Eammu Holidays"
              >
                View All Visa Services
              </Link>
              <Link
                href="/visa/visa-guide"
                className="bg-white border border-gray-200 text-gray-700 font-bold px-6 py-3 rounded-xl hover:border-[#005a31] hover:text-[#005a31] transition-all shadow-sm text-sm"
                aria-label="Read the 2026 visa guide"
              >
                Visa Guide 2026 →
              </Link>
              <Link
                href="/visa-rejection"
                className="bg-white border border-gray-200 text-gray-700 font-bold px-6 py-3 rounded-xl hover:border-orange-500 hover:text-orange-500 transition-all shadow-sm text-sm"
                aria-label="Visa rejection help Bangladesh"
              >
                Visa Rejection Help →
              </Link>
              <Link
                href="/travel-resources/visa-checklist-generator"
                className="bg-white border border-gray-200 text-gray-700 font-bold px-6 py-3 rounded-xl hover:border-orange-500 hover:text-orange-500 transition-all shadow-sm text-sm"
                aria-label="Generate free visa checklist"
              >
                Free Visa Checklist →
              </Link>
            </div>
          </section>

          {/* ──────────────────────────────────────────────────────────
              HOW WE WORK — Process Steps (HowTo schema target)
          ────────────────────────────────────────────────────────── */}
          <section
            className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm"
            aria-label="How to apply for a visa through Eammu Holidays Bangladesh"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              How to Apply for a Visa Through Eammu Holidays
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-3xl">
              Our 5-step visa application process is designed for Bangladeshi citizens — simple,
              transparent, and optimized for approval.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((s, i) => (
                <div
                  key={s.step}
                  className="relative text-center group"
                  itemScope
                  itemType="https://schema.org/HowToStep"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-green-50 border-2 border-[#005a31] flex items-center justify-center text-2xl mb-3 group-hover:bg-[#005a31] transition-all">
                    <span className="group-hover:hidden">{s.icon}</span>
                    <span className="hidden group-hover:block text-white font-black text-sm">{s.step}</span>
                  </div>
                  <h3 className="font-black text-[#005a31] text-sm mb-2" itemProp="name">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed" itemProp="text">{s.desc}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-[calc(100%-12px)] w-6 text-gray-300 text-lg font-black" aria-hidden="true">→</div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href="https://wa.me/8801631312524?text=I%20want%20to%20start%20my%20visa%20application"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg inline-block"
                aria-label="Start your visa application with Eammu Holidays Bangladesh"
                rel="noopener noreferrer"
              >
                Start Your Visa Application Now →
              </a>
            </div>
          </section>

          {/* ──────────────────────────────────────────────────────────
              EDUCATION, WORK PERMIT, USA COACHING
          ────────────────────────────────────────────────────────── */}
          <section
            className="bg-gradient-to-br from-[#f0fdf4] to-[#ecfdf5] rounded-3xl p-8 md:p-12 border border-green-100"
            aria-label="Education consultancy and Europe work permit services Bangladesh"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#005a31] mb-8 border-l-8 border-orange-500 pl-5">
              Education Consultancy &amp; Europe Work Permit Bangladesh 2026
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article
                className="space-y-3 bg-white p-6 rounded-2xl border border-green-100 shadow-sm"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="w-12 h-12 bg-green-50 text-[#005a31] rounded-2xl flex items-center justify-center text-2xl">🎓</div>
                <h3 className="text-xl font-bold text-gray-900" itemProp="name">Student Visa — UK, USA &amp; Canada from Bangladesh</h3>
                <p className="text-gray-600 text-sm leading-relaxed" itemProp="description">
                  As a leading <strong>education consultancy in Bangladesh</strong>, we assist students
                  with university admissions and{" "}
                  <Link href="/study-abroad/student-visa" className="text-[#005a31] font-semibold hover:text-orange-500">student visa applications</Link>{" "}
                  for UK, USA, Canada, and Australia — with or without IELTS. Full{" "}
                  <Link href="/scholarships" className="text-[#005a31] font-semibold hover:text-orange-500">scholarship guidance</Link>{" "}
                  and IELTS preparation included.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Link href="/target-ielts-immigration-center" className="text-xs bg-green-50 text-[#005a31] font-bold border border-green-200 px-3 py-1 rounded-full hover:bg-[#005a31] hover:text-white transition-all">IELTS Center →</Link>
                  <Link href="/study-abroad/student-visa" className="text-xs bg-green-50 text-[#005a31] font-bold border border-green-200 px-3 py-1 rounded-full hover:bg-[#005a31] hover:text-white transition-all">Student Visa →</Link>
                </div>
              </article>

              <article
                className="space-y-3 bg-white p-6 rounded-2xl border border-orange-100 shadow-sm"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center text-2xl">🌍</div>
                <h3 className="text-xl font-bold text-gray-900" itemProp="name">Europe Work Permit from Bangladesh 2026</h3>
                <p className="text-gray-600 text-sm leading-relaxed" itemProp="description">
                  Looking for a{" "}
                  <strong>Europe work permit from Bangladesh in 2026</strong>? Eammu Holidays offers
                  specialized consulting for{" "}
                  <strong>Poland work permit, Romania work permit, and Portugal work visa</strong>{" "}
                  from Bangladesh — with 100% legal, transparent processing, full document preparation,
                  and employer matching support.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Link href="/visa" className="text-xs bg-orange-50 text-orange-600 font-bold border border-orange-200 px-3 py-1 rounded-full hover:bg-orange-500 hover:text-white transition-all">Work Permit 2026 →</Link>
                  <Link href="/visa" className="text-xs bg-orange-50 text-orange-600 font-bold border border-orange-200 px-3 py-1 rounded-full hover:bg-orange-500 hover:text-white transition-all">Poland Visa →</Link>
                </div>
              </article>

              <article
                className="space-y-3 bg-white p-6 rounded-2xl border border-blue-100 shadow-sm"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl">🇺🇸</div>
                <h3 className="text-xl font-bold text-gray-900" itemProp="name">USA Visa Interview Preparation Bangladesh</h3>
                <p className="text-gray-600 text-sm leading-relaxed" itemProp="description">
                  Bangladesh's #1 USA visa coaching — the exclusive{" "}
                  <strong>"Target USA" program</strong>. Expert trainers, mock visa interviews,
                  DS-160 review, and financial document preparation for B1/B2 tourist, F1 student,
                  and J1 visa applicants from Bangladesh. 98% success rate since 2015.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Link href="/target-usa-visa-interview-preparation" className="text-xs bg-blue-50 text-blue-700 font-bold border border-blue-200 px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-all">Target USA Program →</Link>
                </div>
              </article>
            </div>
          </section>

          {/* ──────────────────────────────────────────────────────────
              TOURS & PACKAGES
          ────────────────────────────────────────────────────────── */}
          <section
            className="bg-gradient-to-br from-[#004526] to-[#007a45] text-white rounded-3xl p-8 md:p-12"
            aria-label="Umrah packages and holiday tours from Bangladesh 2026"
          >
            <h2 className="text-3xl font-extrabold mb-4">
              Best Umrah Packages, Holiday Tours &amp; Air Tickets — Bangladesh 2026
            </h2>
            <p className="text-green-100/90 text-lg leading-relaxed mb-6 max-w-3xl">
              Eammu Holidays is renowned for the{" "}
              <strong className="text-white">best Umrah packages from Bangladesh and Dubai</strong>,
              featuring premium hotels near the Haram, dedicated ground support in Makkah &amp;
              Madinah, and flexible departure dates from Dhaka. Our{" "}
              <strong className="text-white">holiday tour packages</strong> cover Cox's Bazar,
              Sylhet, Thailand, Malaysia, Turkey, Dubai, Europe, and beyond — with expert
              tour guides and seamless visa &amp; ticketing support.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: "🕌", label: "Umrah 2026", sub: "Premium packages" },
                { icon: "🏖️", label: "Cox's Bazar", sub: "Best beach tours" },
                { icon: "🌏", label: "Thailand & Malaysia", sub: "Group packages" },
                { icon: "🇦🇪", label: "Dubai Tours", sub: "All inclusive" },
              ].map((t) => (
                <div key={t.label} className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-1">{t.icon}</div>
                  <div className="font-bold text-sm">{t.label}</div>
                  <div className="text-green-200 text-xs">{t.sub}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Umrah Packages 2026", href: "/our-services/tour-packages" },
                { label: "Holiday Tour Packages", href: "/our-services/tour-packages" },
                { label: "Book Air Tickets", href: "/flight-booking" },
                { label: "Special Offers", href: "/offers" },
              ].map((btn) => (
                <Link
                  key={btn.href + btn.label}
                  href={btn.href}
                  className="bg-white/15 hover:bg-white/25 border border-white/20 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
                  aria-label={`${btn.label} – Eammu Holidays Bangladesh`}
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </section>

          {/* ──────────────────────────────────────────────────────────
              WHY CHOOSE US
          ────────────────────────────────────────────────────────── */}
          <section aria-label="Why Eammu Holidays is the best travel agency in Bangladesh">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#005a31] mb-4 border-l-8 border-orange-500 pl-5">
              Why Eammu Holidays Is the #1 Travel Agency in Bangladesh
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-3xl">
              There are hundreds of travel agencies in Bangladesh — here is why 5,000+ clients
              chose Eammu Holidays and keep coming back.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyUsPoints.map((pt) => (
                <article
                  key={pt.title}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all"
                >
                  <div className="text-3xl mb-3">{pt.icon}</div>
                  <h3 className="font-black text-[#005a31] text-base mb-2">{pt.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{pt.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ──────────────────────────────────────────────────────────
              CLIENT TESTIMONIALS (Review schema)
          ────────────────────────────────────────────────────────── */}
          <section aria-label="Client reviews for Eammu Holidays – best travel agency Bangladesh">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              What Our Clients Say — Real Reviews
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Rated <strong>4.9 out of 5</strong> by 320+ verified clients on Google.{" "}
              <Link href="/testimonials" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">Read all reviews →</Link>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <article
                  key={t.name}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="flex items-center gap-1 text-orange-400 mb-3" aria-label={`${t.rating} out of 5 stars`}>
                    {"★".repeat(t.rating)}
                  </div>
                  <p
                    className="text-gray-700 text-sm leading-relaxed mb-4 italic"
                    itemProp="reviewBody"
                  >
                    {t.text}
                  </p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="font-bold text-[#005a31] text-sm" itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">{t.name}</span>
                      </p>
                      <p className="text-xs text-gray-400">{t.location}</p>
                    </div>
                    <span className="text-xs bg-orange-50 text-orange-600 font-semibold px-2 py-1 rounded-full border border-orange-100">
                      {t.service}
                    </span>
                  </div>
                  <meta itemProp="datePublished" content={t.date} />
                </article>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/testimonials"
                className="inline-block bg-white border border-gray-200 text-[#005a31] font-bold px-6 py-3 rounded-xl hover:border-[#005a31] hover:shadow-md transition-all text-sm"
                aria-label="Read all client reviews for Eammu Holidays Bangladesh"
              >
                Read All 320+ Client Reviews →
              </Link>
            </div>
          </section>

          {/* ──────────────────────────────────────────────────────────
              CITY/GEO TARGETING
          ────────────────────────────────────────────────────────── */}
          <section
            className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm"
            aria-label="Eammu Holidays visa services by city in Bangladesh"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              Serving Bangladeshi Clients Nationwide — Online &amp; In-Person
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-3xl">
              From our main office in Cumilla to our Dhaka consultancy and our fully online service,
              Eammu Holidays is the{" "}
              <strong>travel agency near you in Bangladesh</strong> — wherever you are.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cityServices.map((c) => (
                <div
                  key={c.city}
                  className="flex gap-3 items-start p-4 rounded-xl bg-green-50 border border-green-100"
                >
                  <span className="text-[#005a31] font-black text-lg mt-0.5">📍</span>
                  <div>
                    <h3 className="font-bold text-[#005a31] text-sm">{c.city}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed mt-0.5">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500 text-center">
              🌐 Can't visit in person?{" "}
              <a href="https://wa.me/8801631312524" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors" rel="noopener noreferrer">
                WhatsApp us
              </a>{" "}
              or email{" "}
              <a href="mailto:bangladesh@eammu.com" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">
                bangladesh@eammu.com
              </a>{" "}
              — we serve every district in Bangladesh online.
            </p>
          </section>

          {/* ──────────────────────────────────────────────────────────
              OFFICE LOCATIONS
          ────────────────────────────────────────────────────────── */}
          <section aria-label="Eammu Holidays global office locations – Bangladesh, Dubai, Armenia, Georgia">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#005a31] mb-4 border-l-8 border-orange-500 pl-5">
              Our Global Office Network
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-3xl">
              With offices in South Asia, the Middle East, and Eastern Europe, Eammu Holidays
              provides local expertise for <strong>Bangladeshi travellers</strong> worldwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offices.map((o) => (
                <article
                  key={o.city}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all"
                  itemScope
                  itemType="https://schema.org/LocalBusiness"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span aria-hidden="true" className="text-xl">{o.flag}</span>
                    <h3 className="text-sm font-black text-[#005a31]" itemProp="name">{o.city}</h3>
                  </div>
                  <p className="text-[10px] text-orange-500 font-bold uppercase tracking-wide mb-3">{o.label}</p>
                  <address className="not-italic text-sm text-gray-600 space-y-2 leading-relaxed">
                    <p itemProp="address">{o.address}</p>
                    <p>⏰ {o.hours}</p>
                    <p>📞 <a href={`tel:${o.phone.split(",")[0].trim()}`} className="hover:text-[#005a31] transition-colors" itemProp="telephone">{o.phone}</a></p>
                    <p>💬 <a href={`https://wa.me/${o.whatsapp.replace("+", "")}`} className="hover:text-[#005a31] transition-colors" rel="noopener noreferrer">WhatsApp: {o.whatsapp}</a></p>
                    <p>✉️ <a href={`mailto:${o.email}`} className="hover:text-[#005a31] transition-colors" itemProp="email">{o.email}</a></p>
                  </address>
                  <Link
                    href={o.href}
                    className="inline-block mt-4 text-xs font-bold text-[#005a31] hover:text-orange-500 transition-colors"
                    aria-label={`More details – ${o.city} office, Eammu Holidays`}
                  >
                    Office Details →
                  </Link>
                </article>
              ))}
            </div>
          </section>

          {/* ──────────────────────────────────────────────────────────
              INTERNAL LINKS — full site navigation
          ────────────────────────────────────────────────────────── */}
          <section aria-label="Explore all Eammu Holidays services and resources">
            <h2 className="text-xl font-black text-[#005a31] mb-6 text-center">
              Explore All <span className="text-orange-500">Services &amp; Resources</span>
            </h2>
            <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Eammu Holidays site-wide quick links">
              {quickLinks.map((lnk) => (
                <Link
                  key={lnk.href + lnk.label}
                  href={lnk.href}
                  className="bg-white border border-gray-200 hover:border-[#005a31] hover:text-[#005a31] text-gray-600 rounded-full px-4 py-2 text-xs font-semibold transition-all shadow-sm hover:shadow"
                  aria-label={`${lnk.label} – Eammu Holidays`}
                >
                  {lnk.label}
                </Link>
              ))}
            </nav>
          </section>

          {/* ──────────────────────────────────────────────────────────
              FAQ
          ────────────────────────────────────────────────────────── */}
          <section aria-label="Frequently asked questions about travel agency and visa services in Bangladesh – Eammu Holidays">
            <h2 className="text-2xl md:text-3xl font-black text-[#005a31] mb-3 text-center">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
            <p className="text-gray-500 text-center mb-8 text-sm">
              Common questions about Eammu Holidays — the best travel agency in Bangladesh for visas, tours &amp; flights.
            </p>
            <div className="space-y-4 max-w-3xl mx-auto">
              {faqItems.map(({ q, a }) => (
                <details
                  key={q}
                  className="border border-gray-200 rounded-2xl p-5 group"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <summary
                    className="font-bold text-[#005a31] cursor-pointer list-none flex justify-between items-center gap-4"
                    itemProp="name"
                  >
                    <span>{q}</span>
                    <span className="text-orange-500 text-xl flex-shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                  </summary>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed" itemProp="text">{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ──────────────────────────────────────────────────────────
              FINAL CTA
          ────────────────────────────────────────────────────────── */}
          <section
            className="bg-[#005a31] text-white rounded-3xl p-10 md:p-14 text-center"
            aria-label="Contact Eammu Holidays for free visa consultation – best travel agency Bangladesh"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6">
              ⭐ Rated #1 Travel Agency in Bangladesh · 4.9/5 · 320+ Reviews
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-orange-400 mb-4">
              Start Your Journey with Bangladesh's Best Travel Agency
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-green-50/90 leading-relaxed mb-8">
              Join 5,000+ satisfied clients who chose{" "}
              <strong className="text-white">Eammu Holidays — the #1 travel and visa agency in Bangladesh</strong>{" "}
              — for their global journeys. From{" "}
              <strong>Schengen visas</strong> to{" "}
              <strong>UAE work permits</strong> to{" "}
              <strong>Canada PR</strong> — we make it happen with a 98% success rate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801631312524?text=Hello%2C%20I%20need%20visa%20consultation%20from%20Eammu%20Holidays"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                aria-label="Talk to a visa expert at Eammu Holidays on WhatsApp"
                rel="noopener noreferrer"
              >
                💬 Talk to a Visa Expert (WhatsApp)
              </a>
              <a
                href="tel:+8801631312524"
                className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base"
                aria-label="Call Eammu Holidays Bangladesh"
              >
                📞 Call Bangladesh Office
              </a>
              <Link
                href="/testimonials"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base"
                aria-label="Read client reviews for Eammu Holidays"
              >
                ⭐ Read Client Reviews →
              </Link>
            </div>

            {/* Bottom contact row */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-6 text-xs text-green-200">
              <a href="tel:+8801631312524" className="hover:text-white transition-colors">📞 Bangladesh: +880 1631 312524</a>
              <a href="tel:+971507078334" className="hover:text-white transition-colors">📞 Dubai: +971 50 707 8334</a>
              <a href="mailto:bangladesh@eammu.com" className="hover:text-white transition-colors">✉️ bangladesh@eammu.com</a>
              <span>🌐 www.eammu.com</span>
            </div>
          </section>

        </div>
      </main>

      <HomeSeoLinks />
    </>
  );
}