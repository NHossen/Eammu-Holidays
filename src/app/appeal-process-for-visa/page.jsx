// app/visa-rejection/appeal-process-for-visa/page.jsx
// Server Component — no 'use client' — maximum SEO indexing

import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Visa Rejection Appeal Process 2026 — How to Reapply After Refusal | Eammu Holidays",
  },

  description:
    "Got your visa rejected? Complete 2026 guide to the visa appeal and reapplication process for Bangladeshi applicants — Canada, UK, USA, Schengen & Dubai. Learn how to appeal, when to reapply, and how to fix the issues that caused refusal. Free review by Eammu Holidays.",

  keywords: [
    "visa rejection appeal bangladesh",
    "visa appeal process bangladesh",
    "how to appeal visa refusal",
    "visa reapplication after rejection bangladesh",
    "schengen visa appeal bangladesh",
    "canada visa refusal appeal",
    "uk visa refusal appeal bangladesh",
    "visa refused what to do next",
    "visa rejection letter bangladesh",
    "reapply for visa after rejection",
    "visa appeal letter sample",
    "administrative review visa refusal",
  ],

  alternates: {
    canonical: "https://www.eammu.com/appeal-process-for-visa",
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
    url: "https://www.eammu.com/appeal-process-for-visa",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Visa Rejection Appeal Process 2026 | Eammu Holidays",
    description:
      "Step-by-step visa appeal and reapplication guide for Bangladeshi applicants — Canada, UK, USA, Schengen & Dubai. Free review by Eammu Holidays.",
    images: [
      {
        url: "https://www.eammu.com/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Visa Rejection Appeal Process — Eammu Holidays",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    title: "Visa Rejection Appeal Process 2026 | Eammu Holidays",
    description: "Step-by-step visa appeal and reapplication guide for Bangladeshi applicants.",
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
      "@id": "https://www.eammu.com/appeal-process-for-visa#article",
      headline: "Visa Rejection Appeal Process 2026 — How to Reapply After Refusal",
      description:
        "A guide for Bangladeshi applicants on the visa appeal and reapplication process after a refusal for Canada, UK, USA, Schengen, or Dubai visas.",
      image: "https://www.eammu.com/preview-banner.webp",
      author: { "@type": "Organization", name: "Eammu Holidays", url: "https://www.eammu.com" },
      publisher: {
        "@type": "Organization",
        name: "Eammu Holidays",
        logo: { "@type": "ImageObject", url: "https://www.eammu.com/emf.jpg" },
      },
      datePublished: "2026-01-25",
      dateModified: "2026-06-01",
      mainEntityOfPage: "https://www.eammu.com/appeal-process-for-visa",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.eammu.com" },
        { "@type": "ListItem", position: 2, name: "Visa Rejection Help", item: "https://www.eammu.com/visa-rejection" },
        { "@type": "ListItem", position: 3, name: "Visa Appeal Process", item: "https://www.eammu.com/visa-rejection/appeal-process-for-visa" },
      ],
    },
    {
      "@type": "HowTo",
      name: "How to Appeal or Reapply After a Visa Refusal",
      description: "Step-by-step process for Bangladeshi applicants to respond to a visa refusal.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Read the Refusal Letter Carefully",
          text: "Identify the exact reason(s) cited for refusal — this determines whether you should appeal, request administrative review, or reapply with stronger documents.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Determine Your Options: Appeal vs Reapply",
          text: "Some countries (like the UK) offer a formal appeal or administrative review within a set deadline. Others (like Schengen countries) allow an appeal to the embassy or a fresh reapplication at any time.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Address Each Cited Reason Specifically",
          text: "For every reason listed in the refusal letter, gather new or stronger evidence — improved financial documents, clearer ties to Bangladesh, or corrected form errors.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Get a Professional Document Review",
          text: "Have a visa consultant review your original application alongside the refusal letter to identify gaps and build a stronger case before resubmitting.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Submit Appeal or New Application",
          text: "File the formal appeal within the deadline if applicable, or submit a new, strengthened application with updated supporting documents and a cover letter addressing the previous refusal.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How soon can I reapply after a visa refusal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most countries, you can reapply immediately after a refusal, but it's strongly recommended to wait until you've addressed the specific reasons for refusal — otherwise the new application is likely to be refused again for the same reasons.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a formal appeal process for Schengen visa refusals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, most Schengen countries allow applicants to file a formal appeal with the embassy or consulate within a specified period (often around 15-30 days) after receiving the refusal letter, which states the reasons and the appeal procedure.",
          },
        },
        {
          "@type": "Question",
          name: "Should I appeal or just submit a new application?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on the country and the reason for refusal. If the refusal was due to a clear error or missing document that can be quickly corrected, an appeal may be faster. If significant changes are needed (e.g., building a financial history), a fresh, well-prepared reapplication is often more effective.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to mention a previous refusal in my new application?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most visa application forms ask whether you have been refused a visa before. Being honest about a previous refusal and explaining how your circumstances have improved is viewed far more favorably than omitting this information.",
          },
        },
        {
          "@type": "Question",
          name: "Can Eammu Holidays help after my visa has been refused?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Eammu Holidays reviews your refusal letter and original application to identify exactly what went wrong, then helps you build a stronger appeal or reapplication addressing each issue raised by the embassy.",
          },
        },
      ],
    },
  ],
};

const appealVsReapply = [
  {
    title: "Formal Appeal / Administrative Review",
    icon: "⚖️",
    when: "Use when:",
    points: [
      "The refusal letter offers a specific appeal or review process with a deadline",
      "You believe the decision was based on an error or misunderstanding of the evidence already submitted",
      "Your circumstances haven't changed significantly since applying",
    ],
    color: "border-blue-200 bg-blue-50",
  },
  {
    title: "Fresh Reapplication",
    icon: "🔄",
    when: "Use when:",
    points: [
      "The refusal cited weaknesses that need new evidence (e.g., stronger financials, better ties to home)",
      "There's no formal appeal option, or the deadline has passed",
      "You can meaningfully improve your application before submitting again",
    ],
    color: "border-green-200 bg-green-50",
  },
];

export default function VisaAppealProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="sr-only" aria-hidden="true">
        <h1>Visa Rejection Appeal Process 2026 — How to Reapply After Refusal | Eammu Holidays</h1>
        <p>
          Step-by-step guide to the visa appeal and reapplication process for Bangladeshi
          applicants after a visa refusal — Canada, UK, USA, Schengen, and Dubai visas. Covers
          formal appeals, administrative review, and how to rebuild a stronger application. By
          Eammu Holidays — IATA-accredited visa agency in Bangladesh.
        </p>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="https://www.eammu.com">Home</a></li>
            <li><a href="https://www.eammu.com/visa-rejection">Visa Rejection Help</a></li>
            <li><a href="https://www.eammu.com/visa-rejection/appeal-process-for-visa">Visa Appeal Process</a></li>
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
                <li className="text-white font-semibold" aria-current="page">Visa Appeal Process</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6">
              🆘 2026 Guide · Eammu Holidays Rejection Help
            </div>

            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              Visa Rejection? Here's the{" "}
              <span className="text-orange-400">Appeal &amp; Reapplication</span> Process
            </h1>

            <p className="text-lg md:text-xl text-red-50/90 max-w-3xl mx-auto leading-relaxed mb-8">
              A visa refusal isn't the end of the road. This guide explains your options —{" "}
              <strong className="text-white">formal appeal vs reapplication</strong> — and how to
              build a stronger case for <strong className="text-white">Canada, UK, USA,
              Schengen, and Dubai</strong> visa applications.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801631312524?text=My%20visa%20was%20rejected%2C%20I%20need%20help"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                💬 My Visa Was Rejected — Help Me
              </a>
              <Link
                href="/visa-rejection/common-reasons"
                className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base"
              >
                Why Was I Rejected? →
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 space-y-16">

          {/* ── INTRO ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#8a1f1f] mb-5 border-l-8 border-orange-500 pl-5">
              Don't Panic — A Refusal Is a Setback, Not a Dead End
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Receiving a <strong className="text-[#8a1f1f]">visa refusal letter</strong> can be
                discouraging, but most refusals are addressable. Embassies are required to state
                the reason(s) for refusal, which gives you a clear roadmap for what needs to
                improve. The key is understanding{" "}
                <strong className="text-[#8a1f1f]">whether to formally appeal or to submit a
                fresh, stronger application</strong> — and to never simply resubmit the same
                application unchanged.
              </p>
              <p>
                If you're unsure why your application was refused, start with our{" "}
                <Link href="/visa-rejection/common-reasons" className="text-[#005a31] font-semibold hover:text-orange-500">
                  common visa rejection reasons guide
                </Link>{" "}
                to understand the typical patterns embassies flag.
              </p>
            </div>
          </section>

          {/* ── APPEAL VS REAPPLY ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#8a1f1f] mb-3 border-l-8 border-orange-500 pl-5">
              Appeal vs Reapplication — Which One Should You Choose?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {appealVsReapply.map((a) => (
                <article key={a.title} className={`p-6 rounded-2xl border ${a.color}`}>
                  <div className="text-3xl mb-3">{a.icon}</div>
                  <h3 className="font-black text-gray-900 text-lg mb-3">{a.title}</h3>
                  <p className="text-sm font-bold text-gray-700 mb-2">{a.when}</p>
                  <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                    {a.points.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <span className="font-black flex-shrink-0">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* ── HOW TO RESPOND — HowTo ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#8a1f1f] mb-3 border-l-8 border-orange-500 pl-5">
              5 Steps to Respond to a Visa Refusal
            </h2>
            <div className="space-y-4 mt-8">
              {structuredData["@graph"][2].step.map((s) => (
                <div key={s.position} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#8a1f1f] text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                    {s.position}
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 text-sm mb-1">{s.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHAT TO IMPROVE ── */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#8a1f1f] mb-5 border-l-8 border-orange-500 pl-5">
              Strengthening Your Reapplication
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                A successful reapplication addresses the{" "}
                <strong className="text-[#8a1f1f]">specific wording</strong> of your refusal
                letter. Common improvements include:
              </p>
              <ul className="space-y-2 list-none">
                <li className="flex gap-3"><span className="text-[#005a31] font-black">✓</span> Strengthening your{" "}
                  <Link href="/travel-resources/bank-statement-for-visa" className="text-[#005a31] font-semibold hover:text-orange-500">
                    bank statement and financial history
                  </Link>{" "}
                  over the months following the refusal</li>
                <li className="flex gap-3"><span className="text-[#005a31] font-black">✓</span> Adding clearer evidence of{" "}
                  <strong>ties to Bangladesh</strong> — employment letters, property documents, family details</li>
                <li className="flex gap-3"><span className="text-[#005a31] font-black">✓</span> Correcting any form errors or inconsistencies flagged in the refusal</li>
                <li className="flex gap-3"><span className="text-[#005a31] font-black">✓</span> Writing a clear cover letter that{" "}
                  <strong>directly addresses the previous refusal reason</strong> and explains what has changed</li>
                <li className="flex gap-3"><span className="text-[#005a31] font-black">✓</span> If applicable, completing a{" "}
                  <Link href="/target-usa-visa-interview-preparation" className="text-[#005a31] font-semibold hover:text-orange-500">
                    mock interview
                  </Link>{" "}
                  to improve interview performance for USA visas</li>
              </ul>
              <p>
                Eammu Holidays' rejection review service compares your original application to the
                refusal letter line-by-line, then builds a targeted plan to fix each issue —
                whether that means a formal appeal or a stronger reapplication.
              </p>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#8a1f1f] mb-8 text-center">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
            <div className="space-y-4">
              {structuredData["@graph"][3].mainEntity.map((item) => (
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
                { label: "Common Visa Rejection Reasons", href: "/visa-rejection/common-reasons" },
                { label: "Visa Rejection Help", href: "/visa-rejection" },
                { label: "Bank Statement for Visa", href: "/travel-resources/bank-statement-for-visa" },
                { label: "Visa Checklist Generator", href: "/travel-resources/visa-checklist-generator" },
                { label: "DS-160 Form Guide", href: "/target-usa-visa-interview-preparation/ds-160-form-guide" },
                { label: "Spouse Visa Documents", href: "/visa/spouse-visa-documents" },
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
              Get a Free Review of Your Refusal Letter
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-green-50/90 leading-relaxed mb-8">
              Send us your refusal letter — Eammu Holidays' consultants will identify the exact
              issues and recommend the best path forward, appeal or reapplication.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801631312524?text=I%20want%20a%20free%20review%20of%20my%20visa%20refusal%20letter"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                💬 Review My Refusal Letter
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