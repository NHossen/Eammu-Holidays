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
      "Bank Statement for Visa in Bangladesh — Requirements & Balance Guide (2026) | Eammu Holidays",
  },

  description:
    "What bank statement do you need for a visa from Bangladesh, and how much balance is enough? A practical guide covering statement duration, transaction history, solvency certificates, and sponsor documents for Schengen, UK, USA, Canada, Dubai & Australia visas.",

  keywords: [
    "bank statement for visa bangladesh",
    "bank statement requirement for visa",
    "how much bank balance needed for visa",
    "bank statement for schengen visa bangladesh",
    "bank statement for uk visa bangladesh",
    "bank statement for canada visa bangladesh",
    "bank statement for usa visa bangladesh",
    "bank statement for dubai visa bangladesh",
    "how many months bank statement for visa",
    "bank statement format for visa",
    "fund showing for visa bangladesh",
    "sponsor bank statement for visa",
    "sudden deposit visa rejection",
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
    title: "Bank Statement for Visa in Bangladesh — Requirements & Balance Guide",
    description:
      "How much bank balance and how many months of statement do you actually need for a Schengen, UK, USA, Canada, Dubai, or Australia visa? A grounded, no-fluff guide.",
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
    title: "Bank Statement for Visa in Bangladesh — Requirements & Balance Guide",
    description:
      "Statement duration, balance expectations, and common mistakes for Schengen, UK, USA, Canada, Dubai & Australia visa applications from Bangladesh.",
    images: ["https://eammu.com/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
    shortcut: "/emf.jpg",
    apple: "/emf.jpg",
  },

  category: "travel",
};

const LAST_UPDATED = "August 2026";
const WHATSAPP_NUMBER = "8801631312524";
const WHATSAPP_TEXT = encodeURIComponent(
  "I need help with my bank statement / financial documents for my visa"
);

// ─── Content data ──────────────────────────────────────────────────────────

const faqs = [
  {
    q: "How much bank balance is required for a visa from Bangladesh?",
    a: "There is no single number that applies to every visa. It depends on the destination country, visa category, trip length, and your individual circumstances — including whether a sponsor is involved. Check the official checklist for your specific visa rather than relying on a generic figure.",
  },
  {
    q: "How many months of bank statement are needed for a visa application?",
    a: "This varies by embassy and visa type. Some checklists ask for 3 months, others for 6 months or longer. Confirm the exact requirement for the destination and visa category you're applying under.",
  },
  {
    q: "What is a bank solvency certificate, and do I need one alongside my bank statement?",
    a: "A solvency certificate is a separate, point-in-time letter from your bank confirming your current balance and standing. Some visa checklists ask for it in addition to a bank statement, some don't mention it at all. See our dedicated guide on bank solvency certificates for a full breakdown.",
  },
  {
    q: "Can a sponsor's bank statement be used for a visa application?",
    a: "Many visa categories allow a sponsor's financial documents when the applicant themselves doesn't hold sufficient funds — typically alongside a sponsorship letter and evidence of the relationship. Whether this is accepted, and what supporting documents are needed, depends on the specific visa program.",
  },
  {
    q: "Will a sudden large deposit in my account hurt my visa application?",
    a: "It can raise questions. Visa officers reviewing transaction history often look for consistency over time, and an unexplained lump-sum deposit shortly before applying is a common reason financial documents get scrutinised or challenged. Being able to explain the source of any large deposit helps.",
  },
  {
    q: "Does a higher bank balance guarantee visa approval?",
    a: "No. A strong, well-explained financial picture is one factor among several that a visa officer considers — alongside ties to your home country, travel history, and the overall application. There's no balance amount that guarantees approval.",
  },
  {
    q: "Should I get my bank statement stamped and signed?",
    a: "Yes — most embassies expect an official bank statement carrying the bank's stamp and an authorised signature, not just a printout or PDF from online banking, though this can vary. Confirm what format your bank offers and what the visa checklist specifically asks for.",
  },
  {
    q: "What's the difference between a bank statement and a solvency certificate?",
    a: "A bank statement shows transaction history over a period (commonly 3–6 months). A solvency certificate is a separate, point-in-time declaration of your current balance and standing. Some visa checklists ask for one, some for the other, and some for both.",
  },
];

const whyItMatters = [
  "Confirms you can cover your own trip costs — travel, accommodation, and living expenses",
  "Shows a pattern of income or savings, not just a single balance figure",
  "Helps demonstrate you're not likely to overstay or seek unauthorised work",
  "Supports other parts of the application, like ties to your home country",
];

const whatOfficersLookAt = [
  {
    title: "Consistency over time",
    desc: "A steady balance built up over months generally reads better than one large, isolated deposit right before applying.",
  },
  {
    title: "Source of income",
    desc: "Regular salary credits, business income, or remittances help explain where the money in the account actually comes from.",
  },
  {
    title: "Balance relative to the trip",
    desc: "Whether the funds shown reasonably cover the length and nature of the planned trip, not just an arbitrary number.",
  },
  {
    title: "Consistency across documents",
    desc: "Names, account numbers, and figures should match between your bank statement, solvency certificate (if used), and other financial documents.",
  },
];

const destinationNotes = [
  {
    flag: "🇪🇺",
    country: "Schengen Visa",
    note: "Financial-proof expectations are set by the specific Schengen consulate handling your application, not a single EU-wide number. Some consulates focus on bank statements alone; others also request a solvency letter. Confirm with the consulate you're applying through.",
    href: "/visa",
  },
  {
    flag: "🇬🇧",
    country: "UK Visa",
    note: "UK visa guidance generally expects funds to be genuinely available and held for a period before application, with unexplained large deposits often questioned. Exact rules differ by visa category — check the current UKVI guidance for your route.",
    href: "/visa",
  },
  {
    flag: "🇨🇦",
    country: "Canada Visa",
    note: "There's no single published minimum for most visitor visas; officers assess whether funds reasonably cover the trip. Some study programs use specific financial instruments (like a GIC) instead of a plain bank statement — check the requirement for your program.",
    href: "/visa",
  },
  {
    flag: "🇺🇸",
    country: "USA Visa (B1/B2)",
    note: "There's no published minimum balance. Consular officers weigh overall financial stability and ties to Bangladesh alongside the bank statement — a moderate, well-explained balance can matter more than a large one with no history.",
    href: "/target-usa-visa-interview-preparation",
  },
  {
    flag: "🇦🇪",
    country: "Dubai / UAE Visa",
    note: "Financial evidence expectations vary by visa type and duration. Some applications are supported by a bank statement, some by a solvency certificate, and requirements can differ across visa categories.",
    href: "/visa/dubai-residents",
  },
  {
    flag: "🇦🇺",
    country: "Australia Visa",
    note: "Evidence should show you can support your stay — travel, accommodation, and living costs — plus ties to Bangladesh. Requirements vary by visa subclass, so check the specific subclass you're applying under.",
    href: "/visa",
  },
];

const strengthTips = [
  {
    icon: "📅",
    title: "Build Balance Over Time, Not Right Before Applying",
    desc: "A steady balance maintained for at least a few months generally looks more credible than a lump sum deposited just before submission.",
  },
  {
    icon: "📄",
    title: "Get an Official, Stamped Statement",
    desc: "Ask your bank for a statement covering the period your visa checklist requires, carrying the bank's stamp and an authorised signature.",
  },
  {
    icon: "💳",
    title: "Show Where the Money Comes From",
    desc: "Regular salary deposits, business income, or remittances help explain your balance better than an unexplained one-time credit.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Sponsor Statements Need Supporting Documents",
    desc: "If a sponsor is funding the trip, include their bank statement plus a sponsorship letter and proof of relationship — see our sponsor documents guide.",
  },
  {
    icon: "🧾",
    title: "Keep a Solvency Certificate Ready if Asked",
    desc: "Some checklists request a separate solvency/balance certificate alongside the statement. Check whether yours does before you assume the statement alone is enough.",
  },
  {
    icon: "🗣️",
    title: "Be Ready to Explain Any Unusual Transaction",
    desc: "If you can't avoid a large or unusual deposit, keep documentation (like a loan agreement, sale deed, or salary letter) ready to explain it if asked.",
  },
];

const mistakes = [
  "Depositing a large lump sum right before applying with no transaction history to back it up",
  "Submitting an unstamped printout instead of an official bank statement",
  "Name on the statement not matching the passport exactly",
  "Ignoring the specific number of months requested and submitting whatever the bank prints by default",
  "Not including sponsor documents when the account isn't in the applicant's own name",
  "Assuming a generic 'safe' balance figure instead of checking the actual requirement for the destination and visa type",
  "Inconsistent figures between the bank statement and a solvency certificate, if both are submitted",
  "Not being able to explain the source of a specific deposit if asked",
];

const relatedLinks = [
  { label: "Bank Solvency Certificate Guide", href: "/travel-resources/bank-solvency-certificate-for-visa" },
  { label: "How Much Bank Balance Is Needed for a Visa", href: "/travel-resources/how-much-bank-balance-needed-for-visa" },
  { label: "How to Prepare a Bank Statement", href: "/travel-resources/bank-statement-for-visa-how-to-prepare" },
  { label: "Sponsor Financial Documents for Visa", href: "/travel-resources/sponsor-financial-documents-for-visa" },
  { label: "Visa Checklist Generator", href: "/travel-resources/visa-checklist-generator" },
  { label: "All Visa Services", href: "/visa" },
];

// ─── Structured Data ───────────────────────────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://eammu.com/bank-statement-for-visa#article",
      headline: "Bank Statement for Visa in Bangladesh — Requirements & Balance Guide",
      description:
        "What bank statement and balance a visa application from Bangladesh actually needs, how officers read it, and how it differs from a solvency certificate.",
      image: "https://eammu.com/preview-banner.webp",
      author: { "@type": "Organization", name: "Eammu Holidays", url: "https://eammu.com" },
      publisher: {
        "@type": "Organization",
        name: "Eammu Holidays",
        logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" },
      },
      datePublished: "2026-01-10",
      dateModified: "2026-08-01",
      mainEntityOfPage: "https://eammu.com/bank-statement-for-visa",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
        { "@type": "ListItem", position: 2, name: "Travel Resources", item: "https://eammu.com/travel-resources" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bank Statement for Visa",
          item: "https://eammu.com/bank-statement-for-visa",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

function SectionHeading({ children, id }) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-5 border-l-8 border-orange-500 pl-5 scroll-mt-24"
    >
      {children}
    </h2>
  );
}

export default function BankStatementForVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-[#f8fafc] text-gray-800 font-sans py-7">
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
              📊 Updated {LAST_UPDATED} · Eammu Holidays
            </div>

            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              Bank Statement for <span className="text-orange-400">Visa</span> — What You Actually Need
            </h1>

            <p className="text-lg md:text-xl text-green-50/90 max-w-3xl mx-auto leading-relaxed mb-8">
              How much bank balance is enough, how many months of statement to submit, and what visa
              officers are really checking — a grounded guide for Schengen, UK, USA, Canada, Dubai,
              and Australia visa applications from Bangladesh.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
                target="_blank"
              >
                💬 Get Document Guidance
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

          {/* QUICK ANSWER */}
          <section aria-labelledby="quick-answer" className="bg-white border-2 border-[#005a31]/20 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 id="quick-answer" className="text-xl font-black text-[#005a31] mb-3">Quick Answer</h2>
            <p className="text-gray-700 leading-relaxed">
              There's no single bank balance figure that applies to every visa. Embassies generally want to see that you can genuinely cover your trip — through a bank statement showing consistent balance and income over a period (commonly 3–6 months, depending on the destination), not just a large number on a single day. Exact statement duration, balance expectations, and whether a separate solvency certificate is also needed depend on the destination country and visa category — always confirm against the current official checklist.
            </p>
          </section>

          {/* TOC */}
          <nav aria-label="Table of contents" className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-black text-[#005a31] mb-4">On This Page</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600 list-disc list-inside">
              <li><a href="#why-it-matters" className="hover:text-[#005a31]">Why Bank Statements Matter</a></li>
              <li><a href="#what-officers-check" className="hover:text-[#005a31]">What Visa Officers Actually Look At</a></li>
              <li><a href="#by-destination" className="hover:text-[#005a31]">Requirements by Destination</a></li>
              <li><a href="#how-much" className="hover:text-[#005a31]">How Much Balance Is Enough</a></li>
              <li><a href="#months" className="hover:text-[#005a31]">How Many Months of Statement</a></li>
              <li><a href="#statement-vs-solvency" className="hover:text-[#005a31]">Statement vs Solvency Certificate</a></li>
              <li><a href="#sponsors" className="hover:text-[#005a31]">Using a Sponsor's Statement</a></li>
              <li><a href="#deposits" className="hover:text-[#005a31]">Sudden Deposits &amp; Source of Funds</a></li>
              <li><a href="#tips" className="hover:text-[#005a31]">Tips to Strengthen Your Documents</a></li>
              <li><a href="#mistakes" className="hover:text-[#005a31]">Common Mistakes</a></li>
              <li><a href="#faq" className="hover:text-[#005a31]">FAQ</a></li>
            </ul>
          </nav>

          {/* WHY IT MATTERS */}
          <section id="why-it-matters">
            <SectionHeading>Why Bank Statements Matter for Visa Applications</SectionHeading>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                For most visa categories — whether{" "}
                <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">Schengen</Link>,{" "}
                <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">Canada</Link>, or{" "}
                <Link href="/visa/dubai-residents" className="text-[#005a31] font-semibold hover:text-orange-500">Dubai</Link> —
                a bank statement is one of the main ways an embassy checks whether you can support your own trip.
              </p>
              <ul className="list-disc list-inside space-y-1.5 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                {whyItMatters.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
              <p>
                Officers aren't only reading the final balance line. They're reading the story the statement tells — where the money came from, how it built up, and whether that story is consistent with the rest of the application.
              </p>
            </div>
          </section>

          {/* WHAT OFFICERS LOOK AT */}
          <section id="what-officers-check">
            <SectionHeading>What Visa Officers Actually Look At</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {whatOfficersLookAt.map((item) => (
                <article key={item.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="font-black text-[#005a31] text-base mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </article>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              A high balance with no visible income history can sometimes raise more questions than a moderate, well-explained, consistently maintained balance.
            </p>
          </section>

          {/* BY DESTINATION */}
          <section id="by-destination">
            <SectionHeading>Bank Statement Expectations by Destination</SectionHeading>
            <p className="text-gray-600 mb-6 text-sm">
              Financial-proof rules are set by each destination's immigration authority or the specific consulate handling your case, and they change over time. The notes below are general starting points — always confirm against the current official checklist before applying.
            </p>
            <div className="space-y-4">
              {destinationNotes.map((c) => (
                <article
                  key={c.country}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all flex flex-col md:flex-row md:items-start gap-4"
                >
                  <div className="flex items-center gap-3 md:w-48 flex-shrink-0">
                    <span className="text-2xl" aria-hidden="true">{c.flag}</span>
                    <h3 className="font-black text-gray-900 text-sm">{c.country}</h3>
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

          {/* HOW MUCH */}
          <section id="how-much">
            <SectionHeading>How Much Bank Balance Is Enough?</SectionHeading>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                There's no fixed number that works for every visa. What counts as "enough" depends on several factors together:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-gray-700 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <li>Destination country's specific financial-proof requirement</li>
                <li>Visa category (tourist, student, business, family visit, etc.)</li>
                <li>Length of the planned trip or stay</li>
                <li>Estimated accommodation and airfare costs</li>
                <li>Number of travelers relying on the same funds</li>
                <li>Your regular income and account activity</li>
                <li>Whether a sponsor is involved, and their financial position</li>
              </ul>
              <p>
                For a figure specific to your case, check our{" "}
                <Link href="/travel-resources/how-much-bank-balance-needed-for-visa" className="text-[#005a31] font-semibold hover:text-orange-500">
                  dedicated bank balance guide
                </Link>{" "}
                or the official checklist for your visa type, rather than relying on a number you saw somewhere online.
              </p>
            </div>
          </section>

          {/* MONTHS */}
          <section id="months">
            <SectionHeading>How Many Months of Bank Statement Are Needed?</SectionHeading>
            <p className="text-gray-700 leading-relaxed">
              This also varies. Some visa checklists ask for 3 months of statements, others for 6 months or more. Rather than assuming a default, request the statement duration the specific checklist for your destination and visa category actually asks for — submitting more than requested rarely hurts, but submitting less than requested can lead to a request for additional documents or delays.
            </p>
          </section>

          {/* STATEMENT VS SOLVENCY */}
          <section id="statement-vs-solvency">
            <SectionHeading>Bank Statement vs Solvency Certificate</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="bg-white p-6 rounded-2xl border-2 border-[#005a31] shadow-sm">
                <h3 className="font-black text-[#005a31] text-lg mb-3">📄 Bank Statement</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Shows transaction history over a period (commonly 3–6 months)</li>
                  <li>Reflects deposits, withdrawals, and running balance</li>
                  <li>Helps show income pattern, not just a single figure</li>
                  <li>Often available online, or stamped from a branch</li>
                </ul>
              </article>
              <article className="bg-white p-6 rounded-2xl border-2 border-orange-400 shadow-sm">
                <h3 className="font-black text-orange-500 text-lg mb-3">🏦 Solvency Certificate</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>A point-in-time confirmation of current balance and standing</li>
                  <li>Issued separately, on bank letterhead, on request</li>
                  <li>Usually needs an in-person branch visit</li>
                  <li>Some checklists request it in addition to a statement</li>
                </ul>
              </article>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Whether you need one, the other, or both depends entirely on the checklist for your visa. See our{" "}
              <Link href="/travel-resources/bank-solvency-certificate-for-visa" className="text-[#005a31] font-semibold hover:text-orange-500">
                full solvency certificate guide
              </Link>{" "}
              for details on getting one in Bangladesh.
            </p>
          </section>

          {/* SPONSORS */}
          <section id="sponsors">
            <SectionHeading>Using a Sponsor's Bank Statement</SectionHeading>
            <p className="text-gray-700 leading-relaxed">
              If someone else — a parent, spouse, or other family member — is funding the trip, many visa categories accept the sponsor's bank statement alongside a sponsorship letter and evidence of the relationship (such as a birth or marriage certificate). What's specifically required varies by visa program, so check the current checklist. See our{" "}
              <Link href="/travel-resources/sponsor-financial-documents-for-visa" className="text-[#005a31] font-semibold hover:text-orange-500">
                sponsor financial documents guide
              </Link>{" "}
              for a fuller breakdown.
            </p>
          </section>

          {/* DEPOSITS */}
          <section id="deposits">
            <SectionHeading>Sudden Deposits and Source of Funds</SectionHeading>
            <p className="text-gray-700 leading-relaxed">
              A large, unexplained deposit shortly before applying is one of the more common reasons financial documents get questioned — not because a fresh deposit is automatically disqualifying, but because it breaks the pattern the rest of the statement shows. If a lump-sum credit is unavoidable (a bonus, an asset sale, a loan), keep documentation ready to explain it if asked. This guide does not recommend, and won't describe, ways to disguise or misrepresent the source of funds — that's a genuine risk to the application, not a workaround.
            </p>
          </section>

          {/* TIPS */}
          <section id="tips">
            <SectionHeading>Tips to Strengthen Your Financial Documents</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              {strengthTips.map((t) => (
                <article key={t.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-3xl mb-3" aria-hidden="true">{t.icon}</div>
                  <h3 className="font-black text-[#005a31] text-base mb-2">{t.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* MISTAKES */}
          <section id="mistakes">
            <SectionHeading>Common Mistakes to Avoid</SectionHeading>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="space-y-2">
                {mistakes.map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="text-red-500 font-black flex-shrink-0" aria-hidden="true">✕</span>
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="text-2xl md:text-3xl font-black text-[#005a31] mb-8 text-center">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="border border-gray-200 rounded-2xl p-5 group bg-white">
                  <summary className="font-bold text-[#005a31] cursor-pointer list-none flex justify-between items-center gap-4">
                    <span>{f.q}</span>
                    <span className="text-orange-500 text-xl flex-shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* RELATED RESOURCES */}
          <section>
            <h2 className="text-xl font-black text-[#005a31] mb-6 text-center">
              Related <span className="text-orange-500">Visa Resources</span>
            </h2>
            <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Related visa resources">
              {relatedLinks.map((lnk) => (
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

          {/* LAST UPDATED */}
          <p className="text-center text-xs text-gray-400">
            Last updated: {LAST_UPDATED}. Financial requirements are set by each embassy or consulate and can change — always confirm current rules with the relevant authority before applying.
          </p>

          {/* CTA */}
          <section className="bg-[#005a31] text-white rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-orange-400 mb-4">
              Not Sure if Your Bank Statement Is Strong Enough?
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-green-50/90 leading-relaxed mb-8">
              Eammu Holidays can review your bank statement and financial documents before submission, and help you confirm the exact checklist for your destination and visa type.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
                target="_blank"
              >
                💬 Get Document Review (WhatsApp)
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