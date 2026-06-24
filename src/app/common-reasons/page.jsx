// app/visa-rejection/common-reasons/page.jsx
// Server Component — no 'use client' — maximum SEO indexing

import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Common Visa Rejection Reasons 2026 — Canada, UK, Schengen & USA | Eammu Holidays",
  },

  description:
    "Why do visa applications get rejected from Bangladesh? Top common visa rejection reasons for Canada, UK, USA, Schengen & Dubai visas in 2026 — weak financials, travel history, ties to home country & documentation errors — with solutions from Eammu Holidays.",

  keywords: [
    "visa rejection reasons bangladesh",
    "why visa gets rejected bangladesh",
    "common visa rejection reasons",
    "canada visa rejection reasons",
    "uk visa rejection reasons bangladesh",
    "schengen visa rejection reasons",
    "usa visa rejection reasons bangladesh",
    "dubai visa rejection reasons",
    "visa refusal reasons bangladesh",
    "tourist visa rejection bangladesh",
    "student visa rejection reasons bangladesh",
    "how to avoid visa rejection",
    "visa application mistakes bangladesh",
    "visa refused bangladesh what to do",
  ],

  alternates: {
    canonical: "https://www.eammu.com/common-reasons",
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
    url: "https://www.eammu.com/common-reasons",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Common Visa Rejection Reasons 2026 | Eammu Holidays",
    description:
      "Top reasons visa applications get rejected from Bangladesh for Canada, UK, USA, Schengen & Dubai — and how to fix them.",
    images: [
      {
        url: "https://www.eammu.com/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Common Visa Rejection Reasons — Eammu Holidays",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    title: "Common Visa Rejection Reasons 2026 | Eammu Holidays",
    description:
      "Top reasons visas get rejected from Bangladesh — and how to fix each one before you apply.",
    images: ["https://www.eammu.com/preview-banner.webp"],
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
      "@id": "https://www.eammu.com/common-reasons#article",
      headline: "Common Visa Rejection Reasons 2026 — Canada, UK, Schengen, USA & Dubai",
      description:
        "A breakdown of the most common visa rejection reasons for Bangladeshi applicants applying for Canada, UK, USA, Schengen, and Dubai visas, with practical fixes.",
      image: "https://www.eammu.com/preview-banner.webp",
      author: { "@type": "Organization", name: "Eammu Holidays", url: "https://www.eammu.com" },
      publisher: {
        "@type": "Organization",
        name: "Eammu Holidays",
        logo: { "@type": "ImageObject", url: "https://www.eammu.com/emf.jpg" },
      },
      datePublished: "2026-01-18",
      dateModified: "2026-06-01",
      mainEntityOfPage: "https://www.eammu.com/common-reasons",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.eammu.com" },
        { "@type": "ListItem", position: 2, name: "Visa Rejection Help", item: "https://www.eammu.com/visa-rejection" },
        { "@type": "ListItem", position: 3, name: "Common Visa Rejection Reasons", item: "https://www.eammu.com/common-reasons" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the most common reason for visa rejection from Bangladesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common reasons are insufficient or unconvincing proof of funds, weak ties to Bangladesh (no strong reason to return), unclear travel purpose, and inconsistent or incomplete documentation.",
          },
        },
        {
          "@type": "Question",
          name: "Can I reapply immediately after a visa rejection?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, in most cases you can reapply, but it's important to address the specific reasons for the previous refusal before reapplying. Reapplying with the same documents and weaknesses often results in another rejection.",
          },
        },
        {
          "@type": "Question",
          name: "Does a previous visa rejection affect future visa applications?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A previous rejection itself does not permanently bar future approvals, but you may be asked about it in future applications. Being honest about prior refusals and showing improved circumstances helps your case.",
          },
        },
        {
          "@type": "Question",
          name: "How does weak travel history affect visa approval?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Limited or no international travel history can make it harder for visa officers to assess your travel intentions. This isn't disqualifying, but it means other parts of your application — finances, ties to home, and purpose — need to be especially strong.",
          },
        },
        {
          "@type": "Question",
          name: "Can Eammu Holidays review my documents before I apply to avoid rejection?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Eammu Holidays offers a free document review service where our consultants check your financial documents, cover letter, employment proof, and overall application for weaknesses before submission — helping maintain our 98% success rate.",
          },
        },
      ],
    },
  ],
};

const reasons = [
  {
    icon: "💰",
    title: "Insufficient or Unconvincing Financial Proof",
    desc: "The visa officer isn't convinced you can afford the trip without working illegally or overstaying. This includes low balances, sudden large deposits, or no clear income source.",
    fix: "Maintain a steady balance for 2-3+ months, obtain a bank solvency certificate, and show consistent income. See our ",
    fixLink: "/travel-resources/bank-statement-for-visa",
    fixLinkText: "bank statement guide",
  },
  {
    icon: "🏠",
    title: "Weak Ties to Bangladesh",
    desc: "Visa officers assess whether you have strong reasons to return — a stable job, family, property, or business. Weak ties suggest a higher risk of overstaying.",
    fix: "Provide employment letters, property documents, family ties evidence, and a clear return plan in your cover letter.",
    fixLink: "/travel-resources/visa-cover-letter-samples",
    fixLinkText: "cover letter samples",
  },
  {
    icon: "❓",
    title: "Unclear or Inconsistent Travel Purpose",
    desc: "If your stated purpose doesn't match your itinerary, financial capacity, or background (e.g., a short business trip with a year-long hotel booking), it raises doubts.",
    fix: "Keep your itinerary realistic and consistent with your visa type, income level, and the duration requested.",
    fixLink: "/visa",
    fixLinkText: "visa services",
  },
  {
    icon: "📑",
    title: "Incomplete or Inconsistent Documentation",
    desc: "Missing documents, expired certificates, or information that doesn't match across your application, bank statements, and supporting letters are major red flags.",
    fix: "Use a complete checklist and have a professional review every document for consistency before submission.",
    fixLink: "/travel-resources/visa-checklist-generator",
    fixLinkText: "visa checklist generator",
  },
  {
    icon: "✈️",
    title: "Limited Travel History",
    desc: "First-time international travelers may face extra scrutiny since there's no track record of compliant travel and timely return.",
    fix: "Strengthen other areas of your application — finances, ties to home, and a detailed, credible itinerary — to offset limited travel history.",
    fixLink: "/visa/visa-guide",
    fixLinkText: "visa guide",
  },
  {
    icon: "🗣️",
    title: "Poor Interview Performance",
    desc: "For countries requiring interviews (notably USA), inconsistent, vague, or rehearsed-sounding answers can lead to refusal even with strong documents.",
    fix: "Practice with mock interviews based on your actual application — Eammu Holidays' Target USA program is built specifically for this.",
    fixLink: "/target-usa-visa-interview-preparation",
    fixLinkText: "Target USA program",
  },
  {
    icon: "🖊️",
    title: "Form Errors & Name/Date Mismatches",
    desc: "Spelling errors, date mismatches between your passport and application forms, or inconsistent personal details across documents can cause automatic flags.",
    fix: "Double-check every field against your passport. For USA visas, see our ",
    fixLink: "/target-usa-visa-interview-preparation/ds-160-form-guide",
    fixLinkText: "DS-160 form guide",
  },
  {
    icon: "🔍",
    title: "Suspicious Sponsor or Fund Source",
    desc: "If a sponsor's financial documents don't clearly connect to you, or large unexplained deposits appear before applying, officers may doubt the authenticity of your funding.",
    fix: "Provide a clear sponsor letter, affidavit of support, and proof of relationship — especially for ",
    fixLink: "/visa/spouse-visa-documents",
    fixLinkText: "spouse and family visas",
  },
];

export default function CommonVisaRejectionReasonsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="sr-only" aria-hidden="true">
        <h1>Common Visa Rejection Reasons 2026 — Canada, UK, Schengen, USA & Dubai | Eammu Holidays</h1>
        <p>
          Top reasons visa applications get rejected from Bangladesh for Canada, UK, USA,
          Schengen, and Dubai visas in 2026 — including weak financials, weak ties to home
          country, unclear travel purpose, documentation errors, limited travel history, and
          poor interview performance — with practical fixes from Eammu Holidays.
        </p>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="https://www.eammu.com">Home</a></li>
            <li><a href="https://www.eammu.com/visa-rejection">Visa Rejection Help</a></li>
            <li><a href="https://www.eammu.com/common-reasons">Common Visa Rejection Reasons</a></li>
          </ol>
        </nav>
      </div>

      <main className="min-h-screen bg-[#f8fafc] text-gray-800 font-sans">
        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-[#3a0d0d] via-[#5c1414] to-[#8a1f1f] text-white py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex justify-center gap-2 text-xs text-red-200 flex-wrap">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-red-400" aria-hidden="true">/</li>
                <li><Link href="/visa-rejection" className="hover:text-white transition-colors">Visa Rejection Help</Link></li>
                <li className="text-red-400" aria-hidden="true">/</li>
                <li className="text-white font-semibold" aria-current="page">Common Rejection Reasons</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6">
              ⚠️ 2026 Guide · Avoid These Mistakes
            </div>

            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              Common Visa Rejection Reasons —{" "}
              <span className="text-orange-400">2026 Guide</span>
            </h1>

            <p className="text-lg md:text-xl text-red-50/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Why do <strong className="text-white">Canada, UK, USA, Schengen, and Dubai visa</strong>{" "}
              applications get rejected from Bangladesh? Here are the 8 most common reasons —
              and exactly how to fix each one before you apply, based on Eammu Holidays' 14+
              years of visa consultancy experience.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801631312524?text=I%20want%20a%20free%20document%20review%20before%20applying"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                💬 Free Pre-Application Review
              </a>
              <Link
                href="/appeal-process-for-visa"
                className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base"
              >
                Already Rejected? Appeal Process →
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 space-y-16">

          {/* ── INTRO ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#8a1f1f] mb-5 border-l-8 border-orange-500 pl-5">
              Why Do Visa Applications Get Rejected?
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Every year, thousands of Bangladeshi applicants face{" "}
                <strong className="text-[#8a1f1f]">visa refusals</strong> for{" "}
                <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">Canada</Link>,{" "}
                <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">UK</Link>,{" "}
                <Link href="/target-usa-visa-interview-preparation" className="text-[#005a31] font-semibold hover:text-orange-500">USA</Link>,{" "}
                <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">Schengen</Link>, and{" "}
                <Link href="/visa/dubai-residents" className="text-[#005a31] font-semibold hover:text-orange-500">Dubai/UAE</Link>{" "}
                visas. Most rejections aren't random — they follow a small set of recurring
                patterns that visa officers are trained to look for.
              </p>
              <p>
                Understanding these patterns{" "}
                <strong className="text-[#8a1f1f]">before you apply</strong> dramatically improves
                your chances. Below are the 8 most common rejection reasons we see at Eammu
                Holidays, along with the practical steps our consultants use to fix each one —
                part of why we maintain a{" "}
                <strong className="text-[#005a31]">98% visa success rate</strong>.
              </p>
            </div>
          </section>

          {/* ── REASONS LIST ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#8a1f1f] mb-3 border-l-8 border-orange-500 pl-5">
              8 Most Common Visa Rejection Reasons &amp; How to Fix Them
            </h2>
            <div className="space-y-5 mt-8">
              {reasons.map((r, i) => (
                <article key={r.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-red-50 border-2 border-[#8a1f1f] text-[#8a1f1f] flex items-center justify-center font-black text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{r.icon}</span>
                        <h3 className="font-black text-gray-900 text-base">{r.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{r.desc}</p>
                      <div className="bg-green-50 border border-green-100 rounded-xl p-3 text-sm text-gray-700">
                        <strong className="text-[#005a31]">✅ How to fix it: </strong>
                        {r.fix}
                        <Link href={r.fixLink} className="text-[#005a31] font-semibold hover:text-orange-500">
                          {r.fixLinkText}
                        </Link>
                        {r.title.includes("Travel Purpose") || r.title.includes("Travel History") ? "." : "."}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ── ALREADY REJECTED CTA STRIP ── */}
          <section className="bg-gradient-to-br from-[#004526] to-[#007a45] text-white rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Already Got a Visa Rejection?</h2>
            <p className="text-green-50/90 text-lg leading-relaxed mb-6 max-w-2xl">
              A rejection doesn't mean the end. Many refusals can be appealed or addressed in a
              stronger reapplication. Eammu Holidays' visa rejection help service identifies
              exactly what went wrong and builds a corrective plan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/visa-rejection/appeal-process-for-visa"
                className="bg-white/15 hover:bg-white/25 border border-white/20 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
              >
                Visa Appeal Process Guide →
              </Link>
              <Link
                href="/visa-rejection"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
              >
                Get Visa Rejection Help →
              </Link>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#8a1f1f] mb-8 text-center">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
            <div className="space-y-4">
              {structuredData["@graph"][2].mainEntity.map((item) => (
                <details key={item.name} className="border border-gray-200 rounded-2xl p-5 group bg-white">
                  <summary className="font-bold text-[#8a1f1f] cursor-pointer list-none flex justify-between items-center gap-4">
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
            <h2 className="text-xl font-black text-[#8a1f1f] mb-6 text-center">
              Related <span className="text-orange-500">Resources</span>
            </h2>
            <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Related visa resources">
              {[
                { label: "Visa Appeal Process", href: "/appeal-process-for-visa" },
                { label: "Bank Statement for Visa", href: "/bank-statement-for-visa" },
                { label: "Visa Checklist Generator", href: "/travel-resources/visa-checklist-generator" },
                { label: "Police Clearance Certificate", href: "/police-clearance-certificate" },
                { label: "DS-160 Form Guide", href: "/ds-160-form-guide" },
                { label: "Spouse Visa Documents", href: "/visa" },
                { label: "Best Time for Schengen Visa", href: "/best-time-to-apply-schengen-visa" },
                { label: "All Visa Services", href: "/visa" },
              ].map((lnk) => (
                <Link
                  key={lnk.href}
                  href={lnk.href}
                  className="bg-white border border-gray-200 hover:border-[#8a1f1f] hover:text-[#8a1f1f] text-gray-600 rounded-full px-4 py-2 text-xs font-semibold transition-all shadow-sm hover:shadow"
                >
                  {lnk.label}
                </Link>
              ))}
            </nav>
          </section>

          {/* ── CTA ── */}
          <section className="bg-[#005a31] text-white rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-orange-400 mb-4">
              Don't Risk a Rejection — Get a Free Review First
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-green-50/90 leading-relaxed mb-8">
              Eammu Holidays' consultants review your full application before submission —
              helping maintain our 98% visa success rate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801631312524?text=I%20want%20a%20free%20document%20review%20before%20applying%20for%20visa"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                💬 Free Application Review
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