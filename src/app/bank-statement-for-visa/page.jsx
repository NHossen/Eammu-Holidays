// app/travel-resources/bank-statement-for-visa/page.jsx
// Server Component — no 'use client' — maximum SEO indexing

import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://eammu.com"),

  title: {
    default:
      "Bank Statement Requirement for Visa 2026 | How Much Balance Needed | Eammu Holidays",
  },

  description:
    "How much bank balance is required for a visa from Bangladesh? Complete 2026 guide to bank statement requirements for Canada, UK, USA, Schengen, Dubai & Australia visas — minimum balance, transaction history, and solvency certificate tips from Eammu Holidays.",

  keywords: [
    "bank statement for visa bangladesh",
    "bank statement requirement for visa",
    "how much bank balance needed for visa",
    "minimum bank balance for canada visa",
    "minimum bank balance for uk visa",
    "minimum bank balance for schengen visa",
    "bank solvency certificate for visa",
    "bank statement for tourist visa bangladesh",
    "fund showing for visa bangladesh",
    "bank statement format for visa",
    "how many months bank statement for visa",
    "bank balance requirement schengen visa bangladesh",
    "bank statement for dubai visa bangladesh",
    "financial proof for visa application",
    "bank certificate for visa bangladesh",
    "solvency certificate format bangladesh",
  ],

  alternates: {
    canonical: "https://eammu.com/bank-statement-for-visa",
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
    type: "article",
    url: "https://eammu.com/bank-statement-for-visa",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Bank Statement Requirement for Visa 2026 — Complete Guide | Eammu Holidays",
    description:
      "How much bank balance do you need for Canada, UK, USA, Schengen, Dubai & Australia visas from Bangladesh? Full 2026 breakdown with solvency certificate guidance.",
    images: [
      {
        url: "https://eammu.com/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Bank Statement Requirement for Visa — Eammu Holidays",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    title: "Bank Statement Requirement for Visa 2026 | Eammu Holidays",
    description:
      "Minimum bank balance & statement requirements for Canada, UK, USA, Schengen, Dubai & Australia visas from Bangladesh — explained.",
    images: ["https://eammu.com/preview-banner.webp"],
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
      "@type": "Article",
      "@id": "https://eammu.com/bank-statement-for-visa#article",
      headline: "Bank Statement Requirement for Visa 2026 — How Much Balance Do You Need?",
      description:
        "Complete 2026 guide to bank statement and minimum balance requirements for Canada, UK, USA, Schengen, Dubai, and Australia visa applications from Bangladesh.",
      image: "https://eammu.com/preview-banner.webp",
      author: { "@type": "Organization", name: "Eammu Holidays", url: "https://eammu.com" },
      publisher: {
        "@type": "Organization",
        name: "Eammu Holidays",
        logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" },
      },
      datePublished: "2026-01-10",
      dateModified: "2026-06-01",
      mainEntityOfPage: "https://eammu.com/bank-statement-for-visa",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
        { "@type": "ListItem", position: 2, name: "Travel Resources", item: "https://eammu.com/travel-resources" },
        { "@type": "ListItem", position: 3, name: "Bank Statement for Visa", item: "https://eammu.com/bank-statement-for-visa" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much bank balance is required for a Schengen visa from Bangladesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Schengen embassies expect proof of funds covering at least €60–100 per day of your stay, plus return flight and accommodation costs. A maintained balance of BDT 3–5 lakh for at least 30–60 days is commonly recommended, though exact requirements vary by embassy.",
          },
        },
        {
          "@type": "Question",
          name: "How many months of bank statement are needed for a visa application?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most embassies request 6 months of bank statements showing consistent balance and transaction history. Some, like certain Schengen countries, may accept 3 months, while UK and Canada often prefer 6 months of clean statements.",
          },
        },
        {
          "@type": "Question",
          name: "What is a bank solvency certificate and is it required for visa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A bank solvency certificate is an official letter from your bank confirming your account balance and financial standing on a specific date. Many embassies, including Schengen countries and Dubai, require this alongside your regular bank statement.",
          },
        },
        {
          "@type": "Question",
          name: "Can a sponsor's bank statement be used for visa application from Bangladesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, most embassies accept a sponsor's bank statement (parent, spouse, or sibling) along with an affidavit of support, sponsor letter, and proof of relationship documents such as a birth certificate or marriage certificate.",
          },
        },
        {
          "@type": "Question",
          name: "Will sudden large deposits in my bank account hurt my visa application?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Visa officers carefully review transaction history, and a sudden large deposit shortly before applying can raise red flags about the source of funds. It's best to maintain a steady balance for at least 2–3 months before applying.",
          },
        },
      ],
    },
  ],
};

const countryRequirements = [
  {
    flag: "🇪🇺",
    country: "Schengen Visa",
    months: "3 months",
    note: "Proof of funds covering daily expenses (approx. €60–100/day), accommodation & return ticket. A maintained balance of BDT 3–5 lakh is commonly recommended.",
    href: "/visa",
  },
  {
    flag: "🇨🇦",
    country: "Canada Visa",
    months: "6 months",
    note: "No fixed amount, but visa officers look for funds covering the entire trip plus a buffer. GIC (Guaranteed Investment Certificate) is required for some student visas.",
    href: "/visa",
  },
  {
    flag: "🇬🇧",
    country: "UK Visa",
    months: "6 months",
    note: "UKVI requires funds to be held for at least 28 consecutive days without dipping below the required level, with no unexplained large deposits.",
    href: "/visa",
  },
  {
    flag: "🇺🇸",
    country: "USA Visa (B1/B2)",
    months: "6 months",
    note: "No minimum balance specified, but consular officers assess overall financial stability and ties to Bangladesh. Strong, steady balances support approval.",
    href: "/target-usa-visa-interview-preparation",
  },
  {
    flag: "🇦🇪",
    country: "Dubai / UAE Visa",
    months: "3-6 months",
    note: "Bank solvency certificate often required showing sufficient balance for the visit duration. Requirements vary by visa type and duration (14/30/90-day).",
    href: "/visa/dubai-residents",
  },
  {
    flag: "🇦🇺",
    country: "Australia Visa",
    months: "6 months",
    note: "Evidence of funds to support your stay, including travel, accommodation, and living costs, plus proof of return ties to Bangladesh.",
    href: "/visa",
  },
];

const tips = [
  {
    icon: "📅",
    title: "Maintain Balance for 2–3 Months Minimum",
    desc: "Avoid depositing large sums right before applying. Visa officers review transaction history and sudden deposits can trigger scrutiny or rejection.",
  },
  {
    icon: "📄",
    title: "Request an Official Bank Statement & Solvency Certificate",
    desc: "Ask your bank for a stamped, signed statement covering 6 months along with a solvency/balance confirmation certificate dated close to your application date.",
  },
  {
    icon: "💳",
    title: "Show Consistent Income, Not Just Balance",
    desc: "Regular salary deposits, business income, or remittances demonstrate financial stability better than a one-time lump sum.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Sponsor Statements Need Supporting Documents",
    desc: "If a sponsor is funding your trip, include their bank statement, an affidavit of support, sponsor letter, and proof of relationship (birth/marriage certificate).",
  },
  {
    icon: "🏦",
    title: "Use a Reputable Bank with Online Verification",
    desc: "Statements from well-known Bangladeshi banks with verifiable stamps and online verification codes are processed faster and trusted more by embassies.",
  },
  {
    icon: "🚫",
    title: "Avoid Borrowed Money Without Explanation",
    desc: "If funds were borrowed, be prepared to explain the source honestly if asked — undisclosed loans used as 'show money' are a common rejection reason.",
  },
];

export default function BankStatementForVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="sr-only" aria-hidden="true">
        <h1>Bank Statement Requirement for Visa 2026 — How Much Balance Do You Need? | Eammu Holidays</h1>
        <p>
          Complete guide to bank statement and minimum balance requirements for Canada, UK, USA,
          Schengen, Dubai, and Australia visa applications from Bangladesh. Includes solvency
          certificate, sponsor statement, and transaction history tips. By Eammu Holidays —
          IATA-accredited visa agency in Bangladesh.
        </p>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="https://eammu.com">Home</a></li>
            <li><a href="https://eammu.com/travel-resources">Travel Resources</a></li>
            <li><a href="https://eammu.com/travel-resources/bank-statement-for-visa">Bank Statement for Visa</a></li>
          </ol>
        </nav>
      </div>

      <main className="min-h-screen bg-[#f8fafc] text-gray-800 font-sans">
        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-[#002d18] via-[#004526] to-[#006b3a] text-white py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex justify-center gap-2 text-xs text-green-300 flex-wrap">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-green-500" aria-hidden="true">/</li>
                <li><Link href="/travel-resources" className="hover:text-white transition-colors">Travel Resources</Link></li>
                <li className="text-green-500" aria-hidden="true">/</li>
                <li className="text-white font-semibold" aria-current="page">Bank Statement for Visa</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6">
              📊 2026 Guide · Updated by Eammu Holidays
            </div>

            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              Bank Statement &amp; Balance Requirement for{" "}
              <span className="text-orange-400">Visa</span> — 2026 Guide
            </h1>

            <p className="text-lg md:text-xl text-green-50/90 max-w-3xl mx-auto leading-relaxed mb-8">
              How much money should be in your bank account for a{" "}
              <strong className="text-white">Canada, UK, USA, Schengen, Dubai, or Australia visa</strong>?
              This guide breaks down minimum balance expectations, statement duration, solvency
              certificates, and sponsor documentation — based on Eammu Holidays' 14+ years of
              visa processing experience in Bangladesh.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801631312524?text=I%20need%20help%20with%20bank%20statement%20for%20visa"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                💬 Get Free Document Review
              </a>
              <Link
                href="/visa"
                className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base"
              >
                View Visa Services →
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 space-y-16">

          {/* ── INTRO ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-5 border-l-8 border-orange-500 pl-5">
              Why Bank Statements Matter for Visa Applications
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                For most international visa applications — whether{" "}
                <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">Schengen</Link>,{" "}
                <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">Canada</Link>, or{" "}
                <Link href="/visa/dubai-residents" className="text-[#005a31] font-semibold hover:text-orange-500">Dubai</Link> —
                a <strong>bank statement</strong> is the primary way visa officers verify that you can
                financially support your trip without overstaying or working illegally.
              </p>
              <p>
                Embassies are not just looking at the number on the page. They examine{" "}
                <strong className="text-[#005a31]">transaction history, salary patterns, deposit
                frequency, and the overall financial picture</strong>. A high balance with no
                history of income can sometimes be more suspicious than a moderate, consistently
                maintained balance.
              </p>
              <p>
                At Eammu Holidays, our consultants review your bank statement before submission and
                advise on what to add — like a solvency certificate, sponsor documents, or income
                proof — to strengthen your{" "}
                <Link href="/visa-rejection" className="text-[#005a31] font-semibold hover:text-orange-500">visa application</Link>.
              </p>
            </div>
          </section>

          {/* ── COUNTRY TABLE ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              Bank Statement Requirements by Country (2026)
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              General guidelines based on common embassy practice. Always confirm exact figures
              with our consultants as requirements can change.
            </p>
            <div className="space-y-4">
              {countryRequirements.map((c) => (
                <article
                  key={c.country}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all flex flex-col md:flex-row md:items-center gap-4"
                >
                  <div className="flex items-center gap-3 md:w-48 flex-shrink-0">
                    <span className="text-2xl">{c.flag}</span>
                    <div>
                      <h3 className="font-black text-gray-900 text-sm">{c.country}</h3>
                      <p className="text-xs text-orange-500 font-semibold">{c.months} statement</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{c.note}</p>
                  <Link
                    href={c.href}
                    className="text-[#005a31] text-xs font-bold hover:text-orange-500 transition-colors flex-shrink-0"
                  >
                    Visa Details →
                  </Link>
                </article>
              ))}
            </div>
          </section>

          {/* ── TIPS ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              6 Tips to Strengthen Your Financial Documents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {tips.map((t) => (
                <article key={t.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-3xl mb-3">{t.icon}</div>
                  <h3 className="font-black text-[#005a31] text-base mb-2">{t.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#005a31] mb-8 text-center">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
            <div className="space-y-4">
              {structuredData["@graph"][2].mainEntity.map((item) => (
                <details key={item.name} className="border border-gray-200 rounded-2xl p-5 group bg-white">
                  <summary className="font-bold text-[#005a31] cursor-pointer list-none flex justify-between items-center gap-4">
                    <span>{item.name}</span>
                    <span className="text-orange-500 text-xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ── RELATED RESOURCES ── */}
          <section>
            <h2 className="text-xl font-black text-[#005a31] mb-6 text-center">
              Related <span className="text-orange-500">Visa Resources</span>
            </h2>
            <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Related visa resources">
              {[
                { label: "Visa Checklist Generator", href: "/travel-resources/visa-checklist-generator" },
                { label: "Visa Processing Time Tracker", href: "/travel-resources/visa-processing-time-tracker" },
                { label: "Police Clearance Certificate Guide", href: "/travel-resources" },
                { label: "Spouse Visa Documents", href: "/spouse-visa-documents" },
                { label: "Visa Rejection Help", href: "/visa-rejection" },
                { label: "Common Visa Rejection Reasons", href: "/visa-rejection/common-reasons" },
                { label: "All Visa Services", href: "/visa" },
                { label: "Visa Guide 2026", href: "/visa/visa-guide" },
              ].map((lnk) => (
                <Link
                  key={lnk.href}
                  href={lnk.href}
                  className="bg-white border border-gray-200 hover:border-[#005a31] hover:text-[#005a31] text-gray-600 rounded-full px-4 py-2 text-xs font-semibold transition-all shadow-sm hover:shadow"
                >
                  {lnk.label}
                </Link>
              ))}
            </nav>
          </section>

          {/* ── CTA ── */}
          <section className="bg-[#005a31] text-white rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-orange-400 mb-4">
              Not Sure if Your Bank Statement Is Strong Enough?
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-green-50/90 leading-relaxed mb-8">
              Get a free document review from Eammu Holidays' visa consultants — Bangladesh's
              IATA-accredited travel agency with a 98% visa success rate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801631312524?text=I%20need%20a%20free%20document%20review%20for%20my%20visa"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                💬 Free Document Review (WhatsApp)
              </a>
              <Link
                href="/visa"
                className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base"
              >
                View All Visa Services →
              </Link>
            </div>
          </section>
        </div>
      </main>

      <HomeSeoLinks />
    </>
  );
}