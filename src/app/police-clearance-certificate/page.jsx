// app/travel-resources/police-clearance-certificate/page.jsx
// Server Component — no 'use client' — maximum SEO indexing

import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Police Clearance Certificate (PCC) Bangladesh 2026 — Apply Online, Documents & Fees | Eammu Holidays",
  },

  description:
    "Complete 2026 guide to getting a Police Clearance Certificate (PCC) in Bangladesh — application process, required documents, fees, processing time, and how PCC is used for Canada, UK, Australia & work visas. Step-by-step help from Eammu Holidays.",

  keywords: [
    "police clearance certificate bangladesh",
    "pcc bangladesh",
    "police clearance certificate apply online bangladesh",
    "pcc application bangladesh",
    "police clearance certificate for visa",
    "pcc for canada visa bangladesh",
    "pcc for australia visa bangladesh",
    "pcc for work permit bangladesh",
    "pcc fee bangladesh",
    "pcc processing time bangladesh",
    "police clearance certificate documents required",
    "pcc online application police.gov.bd",
    "good conduct certificate bangladesh",
    "criminal record certificate bangladesh",
    "pcc for immigration bangladesh",
  ],

  alternates: {
    canonical: "https://www.eammu.com/police-clearance-certificate",
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
    url: "https://www.eammu.com/police-clearance-certificate",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Police Clearance Certificate (PCC) Bangladesh 2026 — Full Guide | Eammu Holidays",
    description:
      "How to apply for a Police Clearance Certificate in Bangladesh — documents, fees, processing time, and how PCC is used for Canada, UK, Australia & work visa applications.",
    images: [
      {
        url: "https://www.eammu.com/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Police Clearance Certificate Bangladesh — Eammu Holidays",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    title: "Police Clearance Certificate (PCC) Bangladesh 2026 | Eammu Holidays",
    description:
      "Step-by-step PCC application guide for Bangladesh — documents, fees, processing time, and visa use cases.",
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
      "@id": "https://www.eammu.com/police-clearance-certificate#article",
      headline: "Police Clearance Certificate (PCC) Bangladesh 2026 — Complete Guide",
      description:
        "Step-by-step guide to applying for a Police Clearance Certificate in Bangladesh, including required documents, fees, processing time, and visa use cases.",
      image: "https://www.eammu.com/preview-banner.webp",
      author: { "@type": "Organization", name: "Eammu Holidays", url: "https://www.eammu.com" },
      publisher: {
        "@type": "Organization",
        name: "Eammu Holidays",
        logo: { "@type": "ImageObject", url: "https://www.eammu.com/emf.jpg" },
      },
      datePublished: "2026-01-12",
      dateModified: "2026-06-01",
      mainEntityOfPage: "https://www.eammu.com/police-clearance-certificate",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.eammu.com" },
        { "@type": "ListItem", position: 2, name: "Travel Resources", item: "https://www.eammu.com/travel-resources" },
        { "@type": "ListItem", position: 3, name: "Police Clearance Certificate", item: "https://www.eammu.com/police-clearance-certificate" },
      ],
    },
    {
      "@type": "HowTo",
      name: "How to Apply for a Police Clearance Certificate in Bangladesh",
      description: "Step-by-step process to obtain a PCC in Bangladesh for visa or immigration purposes.",
      totalTime: "P15D",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Apply Online",
          text: "Submit an online application through the official Bangladesh Police PCC portal with your personal details, passport information, and reason for the certificate.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Upload Documents",
          text: "Upload scanned copies of your NID, passport, passport-size photo, and address verification documents as required.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Pay the Fee",
          text: "Pay the applicable PCC fee online via the designated payment gateway.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Verification Visit",
          text: "Visit the local police station (Thana) for biometric verification and address confirmation if required.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Collect the Certificate",
          text: "Once verification is complete, download or collect your Police Clearance Certificate, typically within 10-20 working days.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does it take to get a Police Clearance Certificate in Bangladesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Police Clearance Certificate in Bangladesh typically takes 10 to 20 working days after the online application and verification visit, though it can take longer if address verification is delayed.",
          },
        },
        {
          "@type": "Question",
          name: "What documents are required for PCC application in Bangladesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You generally need a valid National ID (NID) or birth certificate, passport copy, passport-size photographs, proof of present and permanent address, and in some cases a citizenship certificate from the local Union/Ward office.",
          },
        },
        {
          "@type": "Question",
          name: "Which visa applications require a Police Clearance Certificate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PCC is commonly required for Canada PR and work visas, Australia visas (especially for stays over 12 months), UK settlement visas, work permits in Europe and the Middle East, and student visas for certain countries.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a Police Clearance Certificate cost in Bangladesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The PCC application fee in Bangladesh is a fixed government charge paid online during application. Additional charges may apply for urgent processing or courier delivery. Contact Eammu Holidays for the current fee structure.",
          },
        },
        {
          "@type": "Question",
          name: "Can Eammu Holidays help me apply for a PCC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Eammu Holidays assists clients with PCC applications as part of our complete visa documentation service for Canada, Australia, UK, and Europe work permit applications from Bangladesh.",
          },
        },
      ],
    },
  ],
};

const documents = [
  { icon: "🆔", title: "National ID Card (NID)", desc: "A valid NID is the primary identity document required for the PCC application form." },
  { icon: "📘", title: "Passport Copy", desc: "Clear scanned copy of your passport's information page, including any previous visa pages if requested." },
  { icon: "📷", title: "Passport-Size Photo", desc: "Recent passport-size photograph meeting the specifications of the online PCC portal." },
  { icon: "🏠", title: "Proof of Address", desc: "Utility bill, rental agreement, or certificate from the local Union/Ward Commissioner confirming your present and permanent address." },
  { icon: "📄", title: "Citizenship Certificate", desc: "Some Thanas request a citizenship/character certificate from the Union Parishad or Ward Councillor for additional verification." },
  { icon: "✈️", title: "Visa/Immigration Purpose Letter", desc: "A cover letter stating the purpose of the PCC (e.g., for Canada PR, Australia visa, or overseas employment)." },
];

const useCases = [
  { flag: "🇨🇦", country: "Canada PR & Work Visa", note: "Required for all applicants aged 18+ who have lived in Bangladesh for 6+ months, as part of IRCC's background check process." },
  { flag: "🇦🇺", country: "Australia Visa", note: "Required for visa applicants intending to stay 12 months or longer, including skilled migration and student visas." },
  { flag: "🇬🇧", country: "UK Settlement Visa", note: "Often requested for spouse, family, and long-term settlement visa applications to the UK." },
  { flag: "🌍", country: "Europe Work Permit", note: "Poland, Romania, and other European work permit applications often require a PCC as part of the employment authorization process." },
  { flag: "🕌", country: "Middle East Work Visa", note: "Many GCC countries including Saudi Arabia and UAE require PCC for long-term work visa categories." },
];

export default function PoliceClearanceCertificatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="sr-only" aria-hidden="true">
        <h1>Police Clearance Certificate (PCC) Bangladesh 2026 — Apply Online, Documents & Fees | Eammu Holidays</h1>
        <p>
          Step-by-step guide to applying for a Police Clearance Certificate (PCC) in Bangladesh —
          required documents, fees, processing time, and how PCC is used for Canada, UK,
          Australia, and Europe work permit visa applications. By Eammu Holidays — IATA-accredited
          visa agency in Bangladesh.
        </p>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="https://www.eammu.com">Home</a></li>
            <li><a href="https://www.eammu.com/travel-resources">Travel Resources</a></li>
            <li><a href="https://www.eammu.com/police-clearance-certificate">Police Clearance Certificate</a></li>
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
                <li className="text-white font-semibold" aria-current="page">Police Clearance Certificate</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6">
              📋 2026 Guide · Updated by Eammu Holidays
            </div>

            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              Police Clearance Certificate (PCC){" "}
              <span className="text-orange-400">Bangladesh</span> — Complete 2026 Guide
            </h1>

            <p className="text-lg md:text-xl text-green-50/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Everything you need to know about applying for a{" "}
              <strong className="text-white">Police Clearance Certificate (PCC) in Bangladesh</strong> —
              required documents, fees, processing time, and how it's used for{" "}
              <strong className="text-white">Canada, Australia, UK, and Europe work permit</strong> visa
              applications.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801631312524?text=I%20need%20help%20with%20Police%20Clearance%20Certificate"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                💬 Get Help with PCC
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
              What Is a Police Clearance Certificate (PCC)?
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                A <strong className="text-[#005a31]">Police Clearance Certificate (PCC)</strong> is an
                official document issued by Bangladesh Police confirming that an applicant has no
                criminal record on file. It is one of the most commonly requested documents for{" "}
                <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">Canada PR applications</Link>,{" "}
                <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">Australia visas</Link>,
                UK settlement visas, and overseas work permits.
              </p>
              <p>
                The PCC application in Bangladesh is processed online through the official Bangladesh
                Police portal, followed by a verification step at your local police station (Thana).
                Processing typically takes{" "}
                <strong className="text-[#005a31]">10 to 20 working days</strong>, though delays can
                occur if address verification takes longer.
              </p>
              <p>
                At Eammu Holidays, we help clients prepare and submit PCC applications as part of
                our complete{" "}
                <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">visa documentation service</Link>{" "}
                — ensuring your application meets the exact requirements for your destination country.
              </p>
            </div>
          </section>

          {/* ── DOCUMENTS REQUIRED ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              Documents Required for PCC Application
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Gather these documents before starting your online PCC application to avoid delays.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((d) => (
                <article key={d.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-3xl mb-3">{d.icon}</div>
                  <h3 className="font-black text-[#005a31] text-base mb-2">{d.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ── HOW TO APPLY (HowTo schema) ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              How to Apply for PCC in Bangladesh — Step by Step
            </h2>
            <div className="space-y-4 mt-8">
              {structuredData["@graph"][2].step.map((s) => (
                <div key={s.position} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#005a31] text-white flex items-center justify-center font-black text-sm flex-shrink-0">
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

          {/* ── USE CASES ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              Which Visa Applications Need a PCC?
            </h2>
            <div className="space-y-4 mt-8">
              {useCases.map((u) => (
                <article
                  key={u.country}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center gap-4"
                >
                  <div className="flex items-center gap-3 md:w-56 flex-shrink-0">
                    <span className="text-2xl">{u.flag}</span>
                    <h3 className="font-black text-gray-900 text-sm">{u.country}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{u.note}</p>
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
              {structuredData["@graph"][3].mainEntity.map((item) => (
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
                { label: "Bank Statement for Visa", href: "/travel-resources/bank-statement-for-visa" },
                { label: "Visa Checklist Generator", href: "/travel-resources/visa-checklist-generator" },
                { label: "Spouse Visa Documents", href: "/visa/spouse-visa-documents" },
                { label: "Visa Rejection Help", href: "/visa-rejection" },
                { label: "Common Visa Rejection Reasons", href: "/visa-rejection/common-reasons" },
                { label: "Visa Appeal Process", href: "/visa-rejection/appeal-process-for-visa" },
                { label: "All Visa Services", href: "/visa" },
                { label: "Study Abroad", href: "/study-abroad" },
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
              Need Help With Your PCC Application?
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-green-50/90 leading-relaxed mb-8">
              Eammu Holidays helps you prepare and submit your Police Clearance Certificate
              application correctly — as part of our complete visa documentation service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801631312524?text=I%20need%20help%20with%20my%20PCC%20application"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                💬 Get PCC Help (WhatsApp)
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