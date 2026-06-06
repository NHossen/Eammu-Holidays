import Offers from '@/Components/Client/Offers/Offers';
import HomeSeoLinks from '@/Components/HomeSeoLinks/HomeSeoLinks';
import React from 'react';

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Best Travel Deals & Offers 2026",
 
  },

  description:
    "Exclusive travel deals and offers from Eammu Holidays Bangladesh — 15% off international tour packages, student visa promo, Umrah package discounts, early bird flight deals, and family tour offers. Limited time deals for Bangladesh, Dubai, UK & Europe travelers.",

  keywords: [
    "travel deals Bangladesh 2025",
    "best travel offers Bangladesh",
    "cheap tour packages Bangladesh",
    "Dubai tour package offer",
    "Umrah package discount Bangladesh",
    "student visa promo Bangladesh",
    "visa service discount Bangladesh",
    "flight ticket deals Bangladesh",
    "holiday packages discount Bangladesh",
    "travel agency offers Bangladesh",
    "international tour package offer",
    "family tour package Bangladesh",
    "cheap Europe tour Bangladesh",
    "fast track visa offer Bangladesh",
    "limited time travel deals",
    "Eammu Holidays offers",
    "summer travel deals Bangladesh",
    "early bird flight deal Bangladesh",
    "group tour discount Bangladesh",
    "travel promo 2025 Bangladesh",
  ],

  alternates: {
    canonical: "https://www.eammu.com/offers",
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
    url: "https://www.eammu.com/offers",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Best Travel Deals & Offers 2025 | Eammu Holidays Bangladesh",
    description:
      "Grab exclusive deals on visa processing, Umrah packages, international tours, and flights. Limited-time offers from Bangladesh's trusted travel agency — Eammu Holidays.",
    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Best Travel Deals & Offers 2025 – Eammu Holidays Bangladesh",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Travel Deals & Offers 2025 | Eammu Holidays",
    description:
      "Save on student visas, Umrah packages, international tours, and flights. Exclusive limited-time travel deals from Bangladesh.",
    images: ["/preview-banner.webp"],
  },

  icons: { icon: "/emf.jpg" },
};

/* ─── JSON-LD Schemas ─── */

const offerListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Eammu Holidays Travel Deals & Offers 2025",
  description:
    "Exclusive travel deals on visa processing, Umrah packages, holiday tours, and flights from Eammu Holidays Bangladesh.",
  url: "https://www.eammu.com/offers",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Offer",
        name: "Summer Special Discount – 15% Off International Tours",
        description:
          "Get 15% off on all international tour packages booked before July 31. Valid for Dubai, Europe, Thailand, Malaysia, and more.",
        url: "https://www.eammu.com/offers/summer-special-discount",
        seller: { "@type": "Organization", name: "Eammu Holidays" },
        priceCurrency: "BDT",
        availability: "https://schema.org/LimitedAvailability",
        validThrough: "2025-07-31",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Offer",
        name: "Student Visa Promo – Flat $100 Off Processing Fee",
        description:
          "Flat $100 off on student visa processing fees for UK, USA, Canada, and Australia. Contact Eammu Holidays to claim.",
        url: "https://www.eammu.com/offers/student-visa-promo",
        seller: { "@type": "Organization", name: "Eammu Holidays" },
        availability: "https://schema.org/LimitedAvailability",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Offer",
        name: "Early Bird Flight Deal – Save Up to 20%",
        description:
          "Book international air tickets 3 months in advance and save up to 20% on flights from Bangladesh.",
        url: "https://www.eammu.com/offers/early-bird-flight-deal",
        seller: { "@type": "Organization", name: "Eammu Holidays" },
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Offer",
        name: "Family Tour Package – Group Discounts for 4+ Members",
        description:
          "Book for 4 or more family members and enjoy special group discounts on international holiday packages.",
        url: "https://www.eammu.com/offers/family-tour-package",
        seller: { "@type": "Organization", name: "Eammu Holidays" },
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Offer",
        name: "Fast Track Visa – Zero Extra Charge",
        description:
          "Fast track your visa application with zero extra processing charge for June. Available for select countries.",
        url: "https://www.eammu.com/offers/fast-track-visa",
        seller: { "@type": "Organization", name: "Eammu Holidays" },
        availability: "https://schema.org/LimitedAvailability",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Offer",
        name: "Travel Promo Deals 2025 – Exclusive Packages",
        description:
          "Exclusive 2025 promo travel deals with zero extra visa charge for select months. Book now for the best rates.",
        url: "https://www.eammu.com/offers/travel-promo-2026",
        seller: { "@type": "Organization", name: "Eammu Holidays" },
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Eammu Holidays",
  url: "https://www.eammu.com",
  logo: "https://www.eammu.com/logo.png",
  description:
    "Bangladesh's trusted travel and visa consultancy offering exclusive travel deals on student visa processing, Umrah packages, holiday tours, and international flights.",
  telephone: "+8801701699743",
  email: "info@eammu.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cumilla",
    addressCountry: "BD",
  },
  sameAs: [
    "https://www.facebook.com/eammutourism",
    "https://www.instagram.com/eammuholidays",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.eammu.com" },
    { "@type": "ListItem", position: 2, name: "Offers", item: "https://www.eammu.com/offers" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What travel deals does Eammu Holidays offer in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eammu Holidays offers summer discounts (15% off international tours), student visa processing promos ($100 off), early bird flight deals (save 20%), family group discounts, fast track visa offers, and exclusive 2025 travel promo packages.",
      },
    },
    {
      "@type": "Question",
      name: "How do I claim an offer from Eammu Holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply contact Eammu Holidays via WhatsApp (+8801701699743) or email (info@eammu.com) mentioning the offer code or name. Our team will confirm availability and guide you through the booking process.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any Umrah package discounts from Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Eammu Holidays regularly offers Umrah package promotions from Bangladesh including early booking discounts and group rates. Contact us on WhatsApp for the latest Umrah deals.",
      },
    },
    {
      "@type": "Question",
      name: "Does Eammu Holidays offer family tour package discounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Groups of 4 or more family members qualify for special group discounts on international holiday packages. The more you travel together, the more you save.",
      },
    },
  ],
};

export default function OffersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Offers />
      <HomeSeoLinks />
    </>
  );
}