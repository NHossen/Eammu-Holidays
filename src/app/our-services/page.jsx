
import OurServices from "@/Components/Client/Ourservices/Ourservices";
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import React from "react";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://eammu.com"),

  title: {
    default:
      "Eammu: Visa Services, Tour Packages & Travel Agency Bangladesh",
  },

  description:
    "Eammu Holidays is Bangladesh's #1 travel agency offering Canada, UK, USA, Dubai & Schengen visa processing, air ticket booking, Umrah packages, IELTS prep, study abroad consultancy, and USA interview coaching. 5,000+ happy clients. 98% visa success rate.",

  keywords: [
    // Brand
    "Eammu Holidays",
    "Eammu Holidays services",
    "best travel agency Bangladesh",
    "trusted travel agency Dhaka",
    "online travel agency Bangladesh",
    // Visa
    "visa consultancy Bangladesh",
    "Canada visa Bangladesh",
    "UK visa Bangladesh",
    "USA visa Bangladesh",
    "Schengen visa Bangladesh",
    "Dubai visa Bangladesh",
    "India e-visa Bangladesh",
    "Australia visa Bangladesh",
    "visa processing Dhaka",
    "tourist visa Bangladesh",
    "work permit Bangladesh",
    "student visa Bangladesh",
    "e-visa services Bangladesh",
    "visa rejection help Bangladesh",
    // Study
    "study abroad consultancy Bangladesh",
    "student visa consultancy Dhaka",
    "IELTS preparation Bangladesh",
    "Canada immigration Bangladesh",
    "scholarship consultancy Bangladesh",
    // USA Prep
    "USA visa interview preparation Bangladesh",
    "B1 B2 visa coaching Bangladesh",
    "Target USA program Dhaka",
    // Tours
    "tour packages Bangladesh",
    "Umrah package Bangladesh",
    "honeymoon package Bangladesh",
    "group tour Bangladesh",
    "Cox's Bazar tour package",
    // Air
    "cheap flights Bangladesh",
    "air ticket booking Dhaka",
    "international flight booking Bangladesh",
    // Locations
    "travel agency Dubai Bangladeshi",
    "travel agency Armenia",
    "travel agency Georgia",
    "travel agency Dhaka Bangladesh",
  ],

  alternates: {
    canonical: "https://eammu.com/our-services",
    languages: {
      "en-US": "https://eammu.com/our-services",
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
    url: "https://eammu.com/our-services",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Visa, Tours & Travel Services | Eammu Holidays Bangladesh",
    description:
      "Bangladesh's most trusted travel agency. Canada, UK, USA, Schengen visa processing, air tickets, Umrah, group tours, IELTS, study abroad & USA interview prep. 98% visa success rate.",
    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Holidays – Best Travel Agency and Visa Services in Bangladesh",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    title: "Visa & Travel Services Bangladesh | Eammu Holidays",
    description:
      "Canada, UK, USA, Dubai visa processing, air tickets, tour packages, IELTS & study abroad — trusted by 5,000+ clients. 98% visa success rate.",
    images: ["/eammu_banner_four.webp"],
  },

  icons: {
    icon: "/emf.jpg",
    shortcut: "/emf.jpg",
    apple: "/emf.jpg",
  },

  category: "travel",
};

// ─── Structured Data ───────────────────────────────────────────────────────────

const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Eammu Holidays",
  url: "https://eammu.com",
  logo: "https://eammu.com/emf.jpg",
  image: "https://eammu.com/eammu_banner_four.webp",
  description:
    "Eammu Holidays is Bangladesh's leading travel agency offering visa processing, air tickets, tour packages, Umrah, IELTS, study abroad, and USA interview preparation with a 98% visa success rate.",
  telephone: "+880-1631312524",
  email: "info@eammu.com",
  foundingDate: "2015",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BD",
    addressLocality: "Dhaka",
    addressRegion: "Dhaka Division",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Eammu Holidays Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Global Visa Processing", url: "https://eammu.com/visa" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air Ticket Booking", url: "https://eammu.com/flight-booking" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Holiday & Tour Packages", url: "https://eammu.com/our-services/tour-packages" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "USA Visa Interview Preparation", url: "https://eammu.com/target-usa-visa-interview-preparation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IELTS & Study Abroad", url: "https://eammu.com/target-ielts-immigration-center" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Umrah Packages", url: "https://eammu.com/our-services/tour-packages" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "320",
    reviewCount: "280",
  },
  sameAs: [
    "https://www.facebook.com/eammuholidays",
    "https://www.instagram.com/eammuholidays",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
    { "@type": "ListItem", position: 2, name: "Our Services", item: "https://eammu.com/our-services" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What visa services does Eammu Holidays provide from Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eammu Holidays provides visa processing for Canada, UK, USA (B1/B2, F1, J1), Dubai/UAE, Schengen (26 countries), Australia, India e-visa, and work permits for clients from Bangladesh. They also help with visa rejections and appeals.",
      },
    },
    {
      "@type": "Question",
      name: "Does Eammu Holidays help with USA visa interview preparation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Eammu Holidays runs the 'Target USA' program — Bangladesh's #1 USA visa interview coaching service featuring mock interviews, DS-160 review, document preparation, and expert trainers with a 98% success rate.",
      },
    },
    {
      "@type": "Question",
      name: "Can Eammu Holidays help me study abroad and apply for a student visa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Eammu Holidays is an official IELTS preparation centre and study abroad consultancy. They help students from Bangladesh with university admissions, scholarships, and student visa applications for Canada, UK, Australia, and Europe.",
      },
    },
    {
      "@type": "Question",
      name: "What tour packages does Eammu Holidays offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eammu Holidays offers customized holiday packages including Umrah packages, honeymoon packages, group tours, Cox's Bazar tours, and international tours to Thailand, Malaysia, Dubai, Europe, and more from Bangladesh.",
      },
    },
    {
      "@type": "Question",
      name: "Where are Eammu Holidays offices located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eammu Holidays has offices in Dhaka (Bangladesh), Dubai (UAE), Yerevan (Armenia), and Tbilisi (Georgia), serving clients across South Asia, the Middle East, and Eastern Europe.",
      },
    },
  ],
};

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Eammu Holidays Services",
  url: "https://eammu.com/our-services",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Global Visa Processing", url: "https://eammu.com/visa" },
    { "@type": "ListItem", position: 2, name: "Air Ticket Booking", url: "https://eammu.com/flight-booking" },
    { "@type": "ListItem", position: 3, name: "Holiday & Tour Packages", url: "https://eammu.com/our-services/tour-packages" },
    { "@type": "ListItem", position: 4, name: "Special Travel Offers", url: "https://eammu.com/offers" },
    { "@type": "ListItem", position: 5, name: "USA Visa Interview Prep", url: "https://eammu.com/target-usa-visa-interview-preparation" },
    { "@type": "ListItem", position: 6, name: "IELTS & Study Abroad", url: "https://eammu.com/target-ielts-immigration-center" },
  ],
};

// ─── Page Component ────────────────────────────────────────────────────────────
export default function OurServicesPage() {
  return (
    <>
      {/* JSON-LD: TravelAgency with OfferCatalog + AggregateRating */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }}
      />
      {/* JSON-LD: Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* JSON-LD: FAQPage — triggers FAQ rich snippets in Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* JSON-LD: ItemList of Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />

      {/* Hidden semantic block for crawlers (not visible to users) */}
      <div className="sr-only" aria-hidden="true">
        <h1>
          Eammu Holidays – Best Travel Agency in Bangladesh for Visa Processing, Tours & Study Abroad
        </h1>
        <p>
          Eammu Holidays offers Canada, UK, USA, Dubai, Schengen, Australia, and India visa
          processing from Bangladesh. Services include air ticket booking, Umrah packages, group
          tours, honeymoon packages, IELTS preparation, study abroad consultancy, USA visa
          interview coaching, and scholarship guidance. Offices in Dhaka, Dubai, Armenia, and
          Georgia. 4.9/5 rating from 320+ verified clients. 98% visa success rate.
        </p>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="https://eammu.com">Home</a></li>
            <li><a href="https://eammu.com/our-services">Our Services</a></li>
          </ol>
        </nav>
      </div>

      {/* Client Component */}
     <OurServices />

      {/* Visible FAQ Section – crawlable HTML matches FAQPage schema */}
      <section
        className="max-w-3xl mx-auto px-4 py-16"
        aria-label="Frequently asked questions about Eammu Holidays services"
      >
        <h2 className="text-2xl font-black text-[#005a31] mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "What visa services does Eammu Holidays provide from Bangladesh?",
              a: "Eammu Holidays provides visa processing for Canada, UK, USA (B1/B2, F1, J1), Dubai/UAE, Schengen (26 countries), Australia, India e-visa, and work permits. They also help with visa rejections and appeals.",
            },
            {
              q: "Does Eammu Holidays help with USA visa interview preparation?",
              a: "Yes. Eammu Holidays runs the 'Target USA' program — Bangladesh's #1 USA visa interview coaching service with mock interviews, DS-160 review, document prep, and expert trainers with a 98% success rate.",
            },
            {
              q: "Can Eammu Holidays help me study abroad and apply for a student visa?",
              a: "Yes. Eammu Holidays is an official IELTS preparation centre and study abroad consultancy helping students with university admissions, scholarships, and student visa applications for Canada, UK, Australia, and Europe.",
            },
            {
              q: "What tour packages does Eammu Holidays offer?",
              a: "Eammu Holidays offers Umrah packages, honeymoon packages, group tours, Cox's Bazar tours, and international tours to Thailand, Malaysia, Dubai, Europe, and more from Bangladesh.",
            },
            {
              q: "Where are Eammu Holidays offices located?",
              a: "Eammu Holidays has offices in Dhaka (Bangladesh), Dubai (UAE), Yerevan (Armenia), and Tbilisi (Georgia).",
            },
          ].map(({ q, a }) => (
            <details key={q} className="border border-gray-200 rounded-xl p-5 group">
              <summary className="font-bold text-[#005a31] cursor-pointer list-none flex justify-between items-center gap-4">
                <span>{q}</span>
                <span className="text-orange-500 text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>
      <HomeSeoLinks />
    </>
  );
}