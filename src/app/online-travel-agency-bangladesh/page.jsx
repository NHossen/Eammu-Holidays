// app/online-travel-agency-bangladesh/page.jsx
// Server Component — no 'use client' — maximum SEO indexing

import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Eammu: Travel Agency Bangladesh and Dubai",

  },

  description:
    "Eammu Holidays is Bangladesh's #1 online travel and visa agency. We process Canada, UK, USA, Dubai, Schengen, Australia & Europe visas with a 98% success rate. Air ticket booking, Umrah packages, student visa, work permit, and holiday tours from Cumilla, Dhaka, and Dubai. Free consultation available.",

  keywords: [
    // Core brand
    "online travel agency Bangladesh",
    "best travel agency Bangladesh 2026",
    "travel agency Cumilla Bangladesh",
    "travel agency Dhaka Bangladesh",
    "trusted travel agency near me Dhaka",
    "IATA travel agency Bangladesh",
    "Eammu Holidays Bangladesh",
    // Visa
    "visa agency Bangladesh",
    "visa services Bangladesh online",
    "Canada visa Bangladesh 2026",
    "UK visa Bangladesh 2026",
    "USA visa Bangladesh 2026",
    "Schengen visa Bangladesh",
    "Dubai visa Bangladesh",
    "Australia visa Bangladesh",
    "India visa Bangladesh",
    "tourist visa Bangladesh",
    "work permit visa Europe from Bangladesh",
    "Europe work permit Bangladesh 2026",
    "Poland work permit Bangladesh",
    "Romania work permit Bangladesh",
    "student visa Bangladesh",
    "student visa UK USA Canada Bangladesh",
    "visa rejection help Bangladesh",
    "visa consultancy Bangladesh",
    "immigration consultant Bangladesh",
    // Tours
    "Dubai tour package from Bangladesh",
    "Umrah package Bangladesh 2026",
    "holiday packages Bangladesh 2026",
    "Cox's Bazar tour package",
    "honeymoon package Bangladesh",
    "group tour Bangladesh",
    // Flights
    "flight booking Bangladesh online",
    "cheap air ticket Bangladesh",
    "international flight booking Dhaka",
    // Education
    "education consultancy Bangladesh",
    "study abroad Bangladesh",
    "IELTS preparation Bangladesh",
    // UAE
    "visit visa UAE prices for Bangladeshi",
    "Dubai visa for Bangladeshi",
    "travel agency UAE Bangladesh",
  ],

  alternates: {
    canonical: "https://www.eammu.com/online-travel-agency-bangladesh",
    languages: {
      "en-US": "https://www.eammu.com/online-travel-agency-bangladesh",
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
    url: "https://www.eammu.com/online-travel-agency-bangladesh",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title:
      "Best Online Travel & Visa Agency in Bangladesh 2026 | Eammu Holidays",
    description:
      "Canada, UK, USA, Dubai, Schengen, Australia & Europe visa processing from Bangladesh with 98% success rate. Air tickets, Umrah packages, student visa, work permit, group tours — Eammu Holidays Cumilla & Dhaka.",
    images: [
      {
        url: "/preview-banner.webp",
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
    title: "Best Online Travel & Visa Agency Bangladesh 2026 | Eammu Holidays",
    description:
      "Canada, UK, USA, Dubai, Schengen visa processing from Bangladesh. Air tickets, Umrah, student visa, work permit — 98% success rate. Free consultation.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
    shortcut: "/emf.jpg",
    apple: "/emf.jpg",
  },

  category: "travel",
};

// ─── Structured Data ───────────────────────────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": "https://www.eammu.com/#organization",
      name: "Eammu Holidays",
      url: "https://www.eammu.com",
      logo: "https://www.eammu.com/emf.jpg",
      image: "https://www.eammu.com/preview-banner.webp",
      description:
        "Eammu Holidays is Bangladesh's most trusted online travel and visa agency with offices in Cumilla, Dhaka, Dubai, Armenia, and Georgia. We offer visa processing, air tickets, tour packages, Umrah, student visa, and work permits.",
      telephone: "+8801631312524",
      email: "bangladesh@eammu.com",
      foundingDate: "2012",
      priceRange: "$$",
      areaServed: ["BD", "AE", "AM", "GE"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office No-178, 1st Floor, Gomoti Tower, Cantonment",
        addressLocality: "Cumilla",
        addressRegion: "Chattogram Division",
        addressCountry: "BD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "320",
        reviewCount: "280",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Eammu Holidays Visa & Travel Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Canada Visa Processing", url: "https://www.eammu.com/visa" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "UK Visa Processing", url: "https://www.eammu.com/visa" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "USA Visa Assistance", url: "https://www.eammu.com/target-usa-visa-interview-preparation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dubai / UAE Visa", url: "https://www.eammu.com/visa/dubai-residents" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Schengen Visa Processing", url: "https://www.eammu.com/visa" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Europe Work Permit", url: "https://www.eammu.com/visa" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Student Visa Consultancy", url: "https://www.eammu.com/study-abroad/student-visa" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Umrah Packages", url: "https://www.eammu.com/our-services/tour-packages" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air Ticket Booking", url: "https://www.eammu.com/flight-booking" } },
        ],
      },
      sameAs: [
        "https://www.facebook.com/eammuholidays",
        "https://www.instagram.com/eammuholidays",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is the best travel agency in Bangladesh for visa processing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eammu Holidays is rated 4.9/5 by 320+ clients and is widely considered the best travel agency in Bangladesh for visa processing. They have a 98% visa success rate for Canada, UK, USA, Dubai, and Schengen visas.",
          },
        },
        {
          "@type": "Question",
          name: "Does Eammu Holidays help with Europe work permits from Bangladesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Eammu Holidays offers specialized consulting for Europe work permits from Bangladesh including Poland, Romania, and Portugal work visas, with transparent and legal processing.",
          },
        },
        {
          "@type": "Question",
          name: "What is the cost of a Dubai visa for Bangladeshi citizens?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dubai visa prices for Bangladeshi citizens vary by duration (14-day, 30-day, 90-day). Contact Eammu Holidays at +8801631312524 or visit their Dubai office for the latest UAE visit visa prices.",
          },
        },
        {
          "@type": "Question",
          name: "Can Eammu Holidays help with student visa applications from Bangladesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Eammu Holidays is a certified education consultancy in Bangladesh, helping students secure admissions and student visas for UK, USA, Canada, and Australia — with or without IELTS.",
          },
        },
        {
          "@type": "Question",
          name: "Where are Eammu Holidays offices in Bangladesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eammu Holidays has offices in Cumilla (Office No-178, Gomoti Tower, Cantonment) and serves clients across Bangladesh. They also have international offices in Dubai, Armenia, and Georgia.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.eammu.com" },
        { "@type": "ListItem", position: 2, name: "Online Travel Agency Bangladesh", item: "https://www.eammu.com/online-travel-agency-bangladesh" },
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
    desc: "End-to-end documentation support for Canada tourist visas, student visas, Express Entry, and work permits. Our consultants ensure applications meet 2026 IRCC immigration standards.",
    href: "/visa",
    badge: "Most Applied",
  },
  {
    flag: "🇬🇧",
    country: "UK Visa",
    types: "Visit, Student, Work, Family",
    desc: "UK Standard Visitor Visas, UK Student Visas (Tier 4), Skilled Worker visas, and family reunion visas processed with expert document review and a high approval track record.",
    href: "/visa",
    badge: "High Demand",
  },
  {
    flag: "🇺🇸",
    country: "USA Visa",
    types: "B1/B2, F1, J1, H1B",
    desc: "Expert coaching for USA B1/B2 tourist, F1 student, and J1 exchange visas. Includes our exclusive 'Target USA' interview preparation program with 98% success rate.",
    href: "/target-usa-visa-interview-preparation",
    badge: "98% Success",
  },
  {
    flag: "🇦🇪",
    country: "Dubai / UAE Visa",
    types: "Visit, Work, Residence",
    desc: "UAE visit visa (14/30/90-day), Dubai work permits, and residence visas for Bangladeshi citizens. Get the latest UAE visit visa prices and fast processing from our Dubai office.",
    href: "/visa/dubai-residents",
    badge: "Fast Processing",
  },
  {
    flag: "🇪🇺",
    country: "Schengen Visa",
    types: "26 European Countries",
    desc: "Single-entry and multi-entry Schengen visas covering Germany, France, Italy, Netherlands, and 22 more countries. Complete documentation support and embassy appointment guidance.",
    href: "/visa",
    badge: "26 Countries",
  },
  {
    flag: "🌍",
    country: "Europe Work Permit 2026",
    types: "Poland, Romania, Portugal",
    desc: "Specialized consulting for Europe work permits from Bangladesh. Legal and transparent processing for Poland, Romania, and Portugal — one of the most in-demand services in 2026.",
    href: "/visa",
    badge: "2026 Updated",
  },
  {
    flag: "🇦🇺",
    country: "Australia Visa",
    types: "Student, Skilled, Tourist",
    desc: "Australia student visas, skilled migration (189/190 points), and tourist ETA visas from Bangladesh. Full document review, skill assessment support, and application lodgement.",
    href: "/visa",
    badge: "PR Pathway",
  },
  {
    flag: "🇮🇳",
    country: "India E-Visa",
    types: "Tourist, Business, Medical",
    desc: "Fast India e-visa processing for Bangladeshi citizens — tourist, business, and medical categories. Typically processed within 3–5 business days with our expert support.",
    href: "/visa/india",
    badge: "3–5 Day",
  },
];

const offices = [
  {
    flag: "🇧🇩",
    city: "Cumilla, Bangladesh",
    address: "Office No-178, 1st Floor, Gomoti Tower, Cantonment, Cumilla",
    phone: "+8801631312524, +8801701699743",
    whatsapp: "+8801631312524",
    email: "bangladesh@eammu.com",
    href: "/contact/travel-agency-bangladesh",
  },
  {
    flag: "🇦🇪",
    city: "Business Bay, Dubai",
    address: "Business Bay, Dubai, United Arab Emirates",
    phone: "+971507078334",
    whatsapp: "+971507078334",
    email: "dubai@eammu.com",
    href: "/contact/travel-agency-dubai",
  },
  {
    flag: "🇦🇲",
    city: "Yerevan, Armenia",
    address: "Eammu Holidays, Lambron 39, Yerevan",
    phone: "+37494810585",
    whatsapp: "+37494810585",
    email: "armenia@eammu.com",
    href: "/contact/travel-agency-armenia",
  },
  {
    flag: "🇬🇪",
    city: "Tbilisi, Georgia",
    address: "Levan Gotua Street #3, Tbilisi, Georgia",
    phone: "+995574446218",
    whatsapp: "+995574446218",
    email: "georgia@eammu.com",
    href: "/contact/travel-agency-georgia",
  },
];

const stats = [
  { value: "4.9★", label: "Google Rating", sub: "320+ verified reviews" },
  { value: "98%", label: "Visa Success Rate", sub: "all categories" },
  { value: "5,000+", label: "Happy Clients", sub: "since 2012" },
  { value: "30+", label: "Countries Covered", sub: "visa & tours" },
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
  { label: "Scholarships", href: "/scholarships" },
  { label: "IELTS Center", href: "/target-ielts-immigration-center" },
  { label: "USA Interview Prep", href: "/target-usa-visa-interview-preparation" },
  { label: "Visa Checklist Tool", href: "/travel-resources/visa-checklist-generator" },
  { label: "Processing Tracker", href: "/travel-resources/visa-processing-time-tracker" },
  { label: "Tour Packages", href: "/our-services/tour-packages" },
  { label: "Flight Booking", href: "/flight-booking" },
  { label: "Customer Reviews", href: "/testimonials" },
  { label: "Our Blog", href: "/blogs" },
];

const faqItems = [
  {
    q: "Which is the best travel agency in Bangladesh for visa processing?",
    a: "Eammu Holidays is rated 4.9/5 by 320+ clients and is widely considered the best travel agency in Bangladesh for visa processing. They have a 98% visa success rate for Canada, UK, USA, Dubai, and Schengen visas.",
  },
  {
    q: "Does Eammu Holidays help with Europe work permits from Bangladesh?",
    a: "Yes. Eammu Holidays offers specialized consulting for Europe work permits from Bangladesh including Poland, Romania, and Portugal work visas, with transparent and legal processing.",
  },
  {
    q: "What is the cost of a Dubai visa for Bangladeshi citizens?",
    a: "Dubai visa prices for Bangladeshi citizens vary by duration (14-day, 30-day, 90-day). Contact Eammu Holidays at +8801631312524 or visit their Dubai office for the latest UAE visit visa prices.",
  },
  {
    q: "Can Eammu Holidays help with student visa applications from Bangladesh?",
    a: "Yes. Eammu Holidays is a certified education consultancy in Bangladesh, helping students secure admissions and student visas for UK, USA, Canada, and Australia — with or without IELTS.",
  },
  {
    q: "Where are Eammu Holidays offices in Bangladesh?",
    a: "Eammu Holidays has their main Bangladesh office at Office No-178, 1st Floor, Gomoti Tower, Cantonment, Cumilla. They also have international offices in Dubai, Armenia, and Georgia.",
  },
];

// ─── Page Component ────────────────────────────────────────────────────────────
export default function OnlineTravelAgencyBangladeshPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hidden crawler block */}
      <div className="sr-only" aria-hidden="true">
        <h1>Best Online Travel Agency and Visa Consultancy in Bangladesh 2026 – Eammu Holidays Cumilla Dhaka</h1>
        <p>
          Eammu Holidays is Bangladesh's most trusted online travel agency and visa consultancy
          with offices in Cumilla, Dhaka, Dubai, Armenia, and Georgia. Services include Canada,
          UK, USA, Dubai, Schengen, Australia, India e-visa, Europe work permit, student visa,
          Umrah packages, air ticket booking, and holiday tours. 4.9/5 rating, 98% visa success
          rate, 5,000+ happy clients since 2012.
        </p>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="https://www.eammu.com">Home</a></li>
            <li><a href="https://www.eammu.com/online-travel-agency-bangladesh">Online Travel Agency Bangladesh</a></li>
          </ol>
        </nav>
      </div>

      <main className="min-h-screen bg-[#f8fafc] text-gray-800 font-sans">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          className="bg-gradient-to-br from-[#003d22] via-[#005a31] to-[#007a45] text-white py-20 px-4"
          aria-label="Eammu Holidays – best online travel and visa agency Bangladesh"
        >
          <div className="max-w-5xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex justify-center gap-2 text-xs text-green-300 flex-wrap">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-green-500" aria-hidden="true">/</li>
                <li className="text-white font-semibold" aria-current="page">Online Travel Agency Bangladesh</li>
              </ol>
            </nav>

            {/* Rating pill */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6" aria-label="4.9 star rating from 320 reviews">
              ⭐⭐⭐⭐⭐ <span>4.9 / 5</span> <span className="text-green-200">· 320+ Verified Reviews</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              Best Online Travel Agency in{" "}
              <span className="text-orange-400">Bangladesh</span> &amp; UAE — 2026
            </h1>

            <p className="text-lg md:text-xl text-green-50/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Eammu Holidays is your premier{" "}
              <strong className="text-white">online travel and visa agency in Bangladesh</strong>.
              IATA-accredited, with offices in <strong className="text-white">Cumilla, Dhaka, Dubai, Armenia &amp; Georgia</strong>.
              We process <strong className="text-white">Canada, UK, USA, Schengen, Dubai &amp; Europe work permit</strong> visas
              with a <strong className="text-white">98% success rate</strong> — plus air tickets, Umrah packages, and holiday tours.
            </p>

            {/* Keyword tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {[
                "Visa Agency Bangladesh", "Canada Visa 2026", "UK Visa Bangladesh",
                "USA Visa Coaching", "Europe Work Permit", "Dubai Visa", "Schengen Visa",
                "Student Visa", "Umrah Package", "Air Ticket Booking",
              ].map((tag) => (
                <span key={tag} className="bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801631312524?text=Hello%2C%20I%20need%20visa%20services"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all"
                aria-label="Free visa consultation on WhatsApp"
              >
                Free Visa Consultation
              </a>
              <Link
                href="/visa"
                className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all"
                aria-label="View all visa services"
              >
                View All Visa Services →
              </Link>
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ──────────────────────────────────────────────────── */}
        <section className="bg-white border-b border-gray-100 py-8 px-4 shadow-sm" aria-label="Eammu Holidays statistics">
          <dl className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl md:text-3xl font-black text-[#005a31]">{s.value}</dt>
                <dd className="font-bold text-gray-700 text-sm mt-0.5">{s.label}</dd>
                <dd className="text-xs text-gray-400">{s.sub}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 space-y-20">

          {/* ── INTRO ────────────────────────────────────────────────────────── */}
          <section aria-label="About Eammu Holidays online travel agency Bangladesh">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#005a31] mb-6 border-l-8 border-orange-500 pl-5">
              Trusted Tour Operator &amp; Visa Consultancy in Bangladesh
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                In the evolving landscape of global tourism and international visa processing,
                Eammu Holidays stands as the most{" "}
                <strong className="text-[#005a31]">trusted online travel agency in Bangladesh</strong>.
                Founded in 2012 and headquartered in Cumilla with a presence across Dhaka, Dubai,
                Armenia, and Georgia, we have spent over a decade mastering the art of
                visa consultancy and international travel planning for Bangladeshi citizens.
              </p>
              <p>
                Our team of certified immigration consultants and travel experts processes{" "}
                <strong>Canada, UK, USA, Schengen, Dubai, Australia, and Europe work permit</strong>{" "}
                visas with a documented{" "}
                <strong className="text-[#005a31]">98% visa approval rate</strong>. Whether you need
                a simple <Link href="/visa/india" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">India e-visa</Link>,
                a complex <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">Canada PR application</Link>,
                or a{" "}
                <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">Schengen multi-entry visa</Link>,
                Eammu Holidays covers every step — from documentation to embassy submission to visa stamping.
              </p>
              <p>
                Beyond visa services, we offer{" "}
                <Link href="/flight-booking" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">international air ticket booking</Link>,{" "}
                <Link href="/our-services/tour-packages" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">Umrah packages</Link>,{" "}
                <Link href="/our-services/tour-packages" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">holiday tour packages</Link>,{" "}
                <Link href="/study-abroad/student-visa" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">student visa consultancy</Link>,
                and{" "}
                <Link href="/target-usa-visa-interview-preparation" className="text-[#005a31] font-semibold hover:text-orange-500 transition-colors">USA visa interview preparation</Link>{" "}
                — making us the most complete travel service provider in Bangladesh.
              </p>
            </div>
          </section>

          {/* ── VISA SERVICES GRID ───────────────────────────────────────────── */}
          <section aria-label="Visa services from Bangladesh by Eammu Holidays">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#005a31] mb-4 border-l-8 border-orange-500 pl-5">
              Visa Processing Services from Bangladesh — 2026
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed max-w-4xl">
              Eammu Holidays is a certified{" "}
              <strong className="text-gray-800">visa agency in Bangladesh</strong> processing
              8 major visa categories with expert documentation support, embassy appointment
              guidance, and a proven track record of approvals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visaServices.map((v) => (
                <article
                  key={v.country}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-green-200 transition-all group"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-3xl" aria-hidden="true">{v.flag}</span>
                    <span className="text-[10px] font-bold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full uppercase tracking-wide">
                      {v.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-black text-gray-900 mb-1 group-hover:text-[#005a31] transition-colors" itemProp="name">
                    {v.country}
                  </h3>
                  <p className="text-xs text-orange-500 font-semibold mb-3">{v.types}</p>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4" itemProp="description">
                    {v.desc}
                  </p>
                  <Link
                    href={v.href}
                    className="inline-flex items-center gap-1 text-[#005a31] text-xs font-bold hover:text-orange-500 transition-colors"
                    aria-label={`Learn more about ${v.country} services`}
                  >
                    Learn More →
                  </Link>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link href="/visa" className="bg-[#005a31] text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-500 transition-all shadow text-sm" aria-label="View all visa services">
                View All Visa Services
              </Link>
              <Link href="/visa/visa-guide" className="bg-white border border-gray-200 text-gray-700 font-bold px-6 py-3 rounded-xl hover:border-[#005a31] hover:text-[#005a31] transition-all shadow-sm text-sm" aria-label="Read visa guide 2026">
                Visa Guide 2026 →
              </Link>
              <Link href="/visa-rejection" className="bg-white border border-gray-200 text-gray-700 font-bold px-6 py-3 rounded-xl hover:border-orange-500 hover:text-orange-500 transition-all shadow-sm text-sm" aria-label="Visa rejection help">
                Visa Rejection Help →
              </Link>
            </div>
          </section>

          {/* ── EDUCATION & WORK PERMIT ──────────────────────────────────────── */}
          <section
            className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm"
            aria-label="Education consultancy and work permit services"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#005a31] mb-8 border-l-8 border-orange-500 pl-5">
              Education Consultancy &amp; Europe Work Permit 2026
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="space-y-3" itemScope itemType="https://schema.org/Service">
                <div className="w-12 h-12 bg-green-50 text-[#005a31] rounded-2xl flex items-center justify-center text-2xl">🎓</div>
                <h3 className="text-xl font-bold text-gray-900" itemProp="name">Student Visa — UK, USA &amp; Canada</h3>
                <p className="text-gray-600 text-sm leading-relaxed" itemProp="description">
                  As a leading <strong>education consultancy in Bangladesh</strong>, we assist students
                  with university admissions and{" "}
                  <Link href="/study-abroad/student-visa" className="text-[#005a31] font-semibold hover:text-orange-500">student visa applications</Link>{" "}
                  for UK, USA, Canada, and Australia — with or without IELTS. Full scholarship
                  guidance and{" "}
                  <Link href="/scholarships" className="text-[#005a31] font-semibold hover:text-orange-500">scholarship search support</Link>{" "}
                  included.
                </p>
                <Link href="/target-ielts-immigration-center" className="text-xs text-[#005a31] font-bold hover:text-orange-500 transition-colors">IELTS Center →</Link>
              </article>

              <article className="space-y-3" itemScope itemType="https://schema.org/Service">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center text-2xl">🌍</div>
                <h3 className="text-xl font-bold text-gray-900" itemProp="name">Europe Work Permit from Bangladesh</h3>
                <p className="text-gray-600 text-sm leading-relaxed" itemProp="description">
                  Looking for a{" "}
                  <strong>Europe work permit from Bangladesh in 2026</strong>? We offer specialized
                  consulting for <strong>Poland, Romania, and Portugal work visas</strong> — legal,
                  transparent processing with full document preparation and employer matching support.
                </p>
                <Link href="/visa" className="text-xs text-[#005a31] font-bold hover:text-orange-500 transition-colors">Work Permit Details →</Link>
              </article>

              <article className="space-y-3" itemScope itemType="https://schema.org/Service">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl">🇺🇸</div>
                <h3 className="text-xl font-bold text-gray-900" itemProp="name">USA Visa Interview Preparation</h3>
                <p className="text-gray-600 text-sm leading-relaxed" itemProp="description">
                  Bangladesh's #1 USA visa coaching — the{" "}
                  <strong>"Target USA" program</strong>. Expert trainers, mock visa interviews,
                  DS-160 review, and financial document preparation for B1/B2, F1, and J1 visa
                  applicants. 98% success rate since 2015.
                </p>
                <Link href="/target-usa-visa-interview-preparation" className="text-xs text-[#005a31] font-bold hover:text-orange-500 transition-colors">Target USA Program →</Link>
              </article>
            </div>
          </section>

          {/* ── TOURS & PACKAGES ─────────────────────────────────────────────── */}
          <section
            className="bg-gradient-to-br from-[#004526] to-[#007a45] text-white rounded-3xl p-8 md:p-12"
            aria-label="Umrah packages and holiday tours Bangladesh"
          >
            <h2 className="text-3xl font-extrabold mb-4">
              Umrah Packages, Holiday Tours &amp; Air Tickets — Bangladesh 2026
            </h2>
            <p className="text-green-100/90 text-lg leading-relaxed mb-8 max-w-3xl">
              Eammu Holidays is renowned for the <strong className="text-white">best Umrah packages from Bangladesh and Dubai</strong>,
              designed with premium hotels near the Haram, dedicated ground support, and flexible
              departure dates. Our{" "}
              <strong className="text-white">holiday packages</strong> cover Cox's Bazar, Sylhet,
              Thailand, Malaysia, Dubai, Europe, and beyond — with expert guides and seamless planning.
            </p>
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
                  aria-label={btn.label}
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </section>

          {/* ── OFFICE LOCATIONS ─────────────────────────────────────────────── */}
          <section aria-label="Eammu Holidays global office locations">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#005a31] mb-4 border-l-8 border-orange-500 pl-5">
              Our Global Branch Network
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-3xl">
              With offices in South Asia, the Middle East, and Eastern Europe, Eammu Holidays
              provides local expertise for{" "}
              <strong>Bangladeshi travellers worldwide</strong>. Walk in or contact us online.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offices.map((o) => (
                <article
                  key={o.city}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all"
                  itemScope
                  itemType="https://schema.org/LocalBusiness"
                >
                  <h3 className="text-base font-black text-[#005a31] mb-4 flex items-center gap-2" itemProp="name">
                    <span aria-hidden="true">{o.flag}</span> {o.city}
                  </h3>
                  <address className="not-italic text-sm text-gray-600 space-y-2 leading-relaxed">
                    <p itemProp="address">{o.address}</p>
                    <p>📞 <a href={`tel:${o.phone.split(",")[0].trim()}`} className="hover:text-[#005a31] transition-colors" itemProp="telephone">{o.phone}</a></p>
                    <p>💬 <a href={`https://wa.me/${o.whatsapp.replace("+", "")}`} className="hover:text-[#005a31] transition-colors">WhatsApp: {o.whatsapp}</a></p>
                    <p>✉️ <a href={`mailto:${o.email}`} className="hover:text-[#005a31] transition-colors" itemProp="email">{o.email}</a></p>
                  </address>
                  <Link href={o.href} className="inline-block mt-4 text-xs font-bold text-[#005a31] hover:text-orange-500 transition-colors" aria-label={`More about ${o.city} office`}>
                    Office Details →
                  </Link>
                </article>
              ))}
            </div>
          </section>

          {/* ── INTERNAL LINKS ───────────────────────────────────────────────── */}
          <section aria-label="Explore all Eammu Holidays services and resources">
            <h2 className="text-xl font-black text-[#005a31] mb-6 text-center">
              Explore All <span className="text-orange-500">Services &amp; Resources</span>
            </h2>
            <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Site-wide quick links">
              {quickLinks.map((lnk) => (
                <Link
                  key={lnk.href + lnk.label}
                  href={lnk.href}
                  className="bg-white border border-gray-200 hover:border-[#005a31] hover:text-[#005a31] text-gray-600 rounded-full px-4 py-2 text-xs font-semibold transition-all shadow-sm hover:shadow"
                  aria-label={lnk.label}
                >
                  {lnk.label}
                </Link>
              ))}
            </nav>
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────────────── */}
          <section aria-label="Frequently asked questions about Eammu Holidays visa services">
            <h2 className="text-2xl md:text-3xl font-black text-[#005a31] mb-8 text-center">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {faqItems.map(({ q, a }) => (
                <details key={q} className="border border-gray-200 rounded-2xl p-5 group">
                  <summary className="font-bold text-[#005a31] cursor-pointer list-none flex justify-between items-center gap-4">
                    <span>{q}</span>
                    <span className="text-orange-500 text-xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ── CTA ──────────────────────────────────────────────────────────── */}
          <section
            className="bg-[#005a31] text-white rounded-3xl p-10 md:p-14 text-center"
            aria-label="Contact Eammu Holidays for free visa consultation"
          >
            <h2 className="text-3xl font-black text-orange-400 mb-4">
              Start Your Journey with Eammu Holidays
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-green-50/90 leading-relaxed mb-8">
              Join thousands of satisfied clients who chose the{" "}
              <strong className="text-white">best travel agency in Bangladesh</strong> for their
              global journeys. From <strong>Schengen visit visas</strong> to{" "}
              <strong>UAE work permits</strong> to <strong>Canada PR</strong> — we make it happen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801631312524?text=Hello%2C%20I%20need%20visa%20consultation"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all"
                aria-label="Talk to a visa expert on WhatsApp"
              >
                Talk to Expert (WhatsApp)
              </a>
              <Link
                href="/testimonials"
                className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all"
                aria-label="Read customer testimonials"
              >
                Read Client Reviews →
              </Link>
            </div>
          </section>

        </div>
      
      </main>
        <HomeSeoLinks />  
    </>
  );
}