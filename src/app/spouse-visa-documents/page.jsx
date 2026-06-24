// app/visa/spouse-visa-documents/page.jsx
// Server Component — no 'use client' — maximum SEO indexing

import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Spouse Visa Documents Checklist 2026 — Bangladesh to UK, Canada, USA & Dubai | Eammu Holidays",
  },

  description:
    "Complete spouse visa documents checklist for Bangladeshi applicants in 2026 — marriage certificate, relationship proof, sponsor's financial documents, and affidavits for UK, Canada, USA, Schengen & Dubai spouse/dependent visas. Expert guidance from Eammu Holidays.",

  keywords: [
    "spouse visa documents bangladesh",
    "spouse visa checklist bangladesh",
    "uk spouse visa documents bangladesh",
    "canada spouse visa documents bangladesh",
    "dependent visa documents bangladesh",
    "marriage certificate for visa bangladesh",
    "spouse visa requirements bangladesh",
    "family visa documents bangladesh",
    "dubai spouse visa documents bangladesh",
    "relationship proof for visa",
    "affidavit of support spouse visa",
    "spouse visa application process bangladesh",
    "wife visa documents bangladesh",
    "husband visa documents bangladesh",
  ],

  alternates: {
    canonical: "https://www.eammu.com/spouse-visa-documents",
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
    url: "https://www.eammu.com/spouse-visa-documents",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Spouse Visa Documents Checklist 2026 | Eammu Holidays",
    description:
      "Complete spouse/dependent visa documents checklist for Bangladeshi applicants — UK, Canada, USA, Schengen & Dubai. Marriage certificate, relationship proof, sponsor documents.",
    images: [
      {
        url: "https://www.eammu.com/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Spouse Visa Documents Checklist — Eammu Holidays",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    title: "Spouse Visa Documents Checklist 2026 | Eammu Holidays",
    description: "Complete documents checklist for spouse/dependent visas from Bangladesh.",
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
      "@id": "https://www.eammu.com/spouse-visa-documents#article",
      headline: "Spouse Visa Documents Checklist 2026 — Bangladesh to UK, Canada, USA & Dubai",
      description:
        "A complete documents checklist for Bangladeshi applicants applying for a spouse or dependent visa to the UK, Canada, USA, Schengen countries, or Dubai/UAE.",
      image: "https://www.eammu.com/preview-banner.webp",
      author: { "@type": "Organization", name: "Eammu Holidays", url: "https://www.eammu.com" },
      publisher: {
        "@type": "Organization",
        name: "Eammu Holidays",
        logo: { "@type": "ImageObject", url: "https://www.eammu.com/emf.jpg" },
      },
      datePublished: "2026-01-22",
      dateModified: "2026-06-01",
      mainEntityOfPage: "https://www.eammu.com/spouse-visa-documents",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.eammu.com" },
        { "@type": "ListItem", position: 2, name: "Visa Services", item: "https://www.eammu.com/visa" },
        { "@type": "ListItem", position: 3, name: "Spouse Visa Documents", item: "https://www.eammu.com/spouse-visa-documents" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What documents are required for a UK spouse visa from Bangladesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UK spouse visa applicants from Bangladesh typically need a valid passport, marriage certificate, proof of relationship (photos, chat history, call logs), the sponsor's financial documents meeting the minimum income requirement, proof of accommodation in the UK, and an English language test certificate (such as IELTS) unless exempt.",
          },
        },
        {
          "@type": "Question",
          name: "What is considered proof of relationship for a spouse visa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Proof of relationship includes the marriage certificate, photographs together over time, communication records (calls, messages, emails), evidence of joint financial commitments if any, and statements from family members or community leaders confirming the relationship is genuine.",
          },
        },
        {
          "@type": "Question",
          name: "Does the sponsor need to meet a minimum income requirement for spouse visa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, for UK spouse visas, the sponsor (the UK-based partner) generally needs to meet a minimum income threshold, which can be met through employment income, savings, or a combination, depending on current immigration rules. Canada and other countries have their own sponsorship financial requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How long does spouse visa processing take from Bangladesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spouse visa processing times vary significantly by country — UK spouse visas often take around 8-12 weeks, while Canada spousal sponsorship can take several months to over a year. Schengen family visas typically follow the standard 15-working-day timeline if all documents are in order.",
          },
        },
        {
          "@type": "Question",
          name: "Can Eammu Holidays help prepare spouse visa documents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Eammu Holidays assists with compiling marriage certificates, relationship evidence, sponsor financial documents, affidavits, and translations for spouse and dependent visa applications to the UK, Canada, USA, Schengen countries, and Dubai/UAE.",
          },
        },
      ],
    },
  ],
};

const coreDocuments = [
  { icon: "📜", title: "Marriage Certificate", desc: "Official marriage registration certificate, often required to be translated into English and sometimes notarized or apostilled depending on the destination country." },
  { icon: "📷", title: "Relationship Evidence", desc: "Photos together over time, communication records (WhatsApp, calls, emails), and any joint travel history showing an ongoing, genuine relationship." },
  { icon: "👨‍👩‍👧", title: "Birth Certificates (for children/dependents)", desc: "If applying for dependent children, their birth certificates establishing the parent-child relationship are required." },
  { icon: "💰", title: "Sponsor's Financial Documents", desc: "Bank statements, salary slips, employment letters, or business documents from the sponsoring spouse showing they meet the minimum income/financial requirement." },
  { icon: "🏠", title: "Proof of Accommodation", desc: "Tenancy agreement, property deed, or letter from the sponsor confirming suitable accommodation is available for the applicant." },
  { icon: "📝", title: "Affidavit of Support / Sponsorship Letter", desc: "A formal letter or affidavit from the sponsor confirming financial and accommodation support for the applicant." },
  { icon: "🗣️", title: "English Language Certificate (if required)", desc: "For UK and some other countries, an approved English test (e.g., IELTS) may be required unless the applicant is exempt." },
  { icon: "🆔", title: "Passport & National ID", desc: "Valid passport with sufficient validity, plus National ID card or birth certificate for identity verification." },
];

const countrySpecifics = [
  {
    flag: "🇬🇧",
    country: "UK Spouse / Partner Visa",
    points: [
      "Marriage certificate + relationship evidence over time",
      "Sponsor must meet the minimum income requirement (via salary, savings, or combination)",
      "English language requirement (IELTS or equivalent) unless exempt",
      "Proof of accommodation suitable for the family size",
    ],
  },
  {
    flag: "🇨🇦",
    country: "Canada Spousal Sponsorship",
    points: [
      "Sponsor must be a Canadian citizen or permanent resident meeting eligibility criteria",
      "Proof of genuine relationship (photos, communication, shared finances)",
      "Police clearance certificates for the applicant — see our PCC guide",
      "Medical examination from an approved panel physician",
    ],
  },
  {
    flag: "🇦🇪",
    country: "Dubai / UAE Spouse Visa",
    points: [
      "Attested marriage certificate (often requires MOFA attestation)",
      "Sponsor's UAE residence visa and salary certificate meeting minimum threshold",
      "Tenancy contract (Ejari) in the sponsor's name",
      "Medical fitness test and Emirates ID application after entry",
    ],
  },
  {
    flag: "🇪🇺",
    country: "Schengen Family Visa",
    points: [
      "Marriage/relationship certificate translated and often apostilled",
      "Sponsor's residence permit and proof of accommodation in the Schengen country",
      "Travel and health insurance covering the Schengen area",
      "Standard 15-working-day processing if documents are complete",
    ],
  },
];

export default function SpouseVisaDocumentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="sr-only" aria-hidden="true">
        <h1>Spouse Visa Documents Checklist 2026 — Bangladesh to UK, Canada, USA & Dubai | Eammu Holidays</h1>
        <p>
          Complete documents checklist for spouse and dependent visa applications from
          Bangladesh — marriage certificate, relationship evidence, sponsor financial documents,
          affidavits, and country-specific requirements for UK, Canada, USA, Schengen, and
          Dubai/UAE. By Eammu Holidays — IATA-accredited visa agency in Bangladesh.
        </p>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="https://www.eammu.com">Home</a></li>
            <li><a href="https://www.eammu.com/visa">Visa Services</a></li>
            <li><a href="https://www.eammu.com/visa/spouse-visa-documents">Spouse Visa Documents</a></li>
          </ol>
        </nav>
      </div>

      <main className="min-h-screen bg-[#f8fafc] text-gray-800 font-sans">
        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-[#3d1a4a] via-[#5a2a6e] to-[#7a3e94] text-white py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex justify-center gap-2 text-xs text-purple-200 flex-wrap">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-purple-400" aria-hidden="true">/</li>
                <li><Link href="/visa" className="hover:text-white transition-colors">Visa Services</Link></li>
                <li className="text-purple-400" aria-hidden="true">/</li>
                <li className="text-white font-semibold" aria-current="page">Spouse Visa Documents</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6">
              💍 2026 Checklist · Eammu Holidays
            </div>

            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              Spouse Visa Documents Checklist —{" "}
              <span className="text-orange-400">2026</span>
            </h1>

            <p className="text-lg md:text-xl text-purple-50/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Applying for a <strong className="text-white">spouse or dependent visa</strong> from
              Bangladesh to the <strong className="text-white">UK, Canada, USA, Schengen, or
              Dubai/UAE</strong>? This complete checklist covers the core documents every
              applicant needs, plus country-specific requirements.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801631312524?text=I%20need%20help%20with%20spouse%20visa%20documents"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                💬 Get Spouse Visa Help
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
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#5a2a6e] mb-5 border-l-8 border-orange-500 pl-5">
              What Is a Spouse / Dependent Visa?
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                A <strong className="text-[#5a2a6e]">spouse visa</strong> (also called a partner
                or dependent visa) allows the husband, wife, or dependent children of someone
                living abroad to join them in the UK, Canada, USA, a Schengen country, or
                Dubai/UAE. These applications are{" "}
                <strong className="text-[#5a2a6e]">document-heavy</strong> and focus heavily on
                proving the relationship is genuine and that the sponsor can financially support
                their family.
              </p>
              <p>
                Unlike tourist visas, spouse visa processing can take{" "}
                <strong className="text-[#5a2a6e]">weeks to several months</strong> depending on
                the country, and missing even one document can significantly delay the process.
                At <Link href="/visa" className="text-[#5a2a6e] font-semibold hover:text-orange-500">Eammu Holidays</Link>,
                we help compile, translate, and organize the full document set before submission.
              </p>
            </div>
          </section>

          {/* ── CORE DOCUMENTS ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#5a2a6e] mb-3 border-l-8 border-orange-500 pl-5">
              Core Documents Needed for Most Spouse Visas
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              While exact requirements vary by country, these documents form the foundation of
              almost every spouse visa application.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreDocuments.map((d) => (
                <article key={d.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-3xl mb-3">{d.icon}</div>
                  <h3 className="font-black text-[#5a2a6e] text-sm mb-2">{d.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{d.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ── COUNTRY SPECIFIC ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#5a2a6e] mb-3 border-l-8 border-orange-500 pl-5">
              Country-Specific Spouse Visa Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {countrySpecifics.map((c) => (
                <article key={c.country} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{c.flag}</span>
                    <h3 className="font-black text-gray-900 text-base">{c.country}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                    {c.points.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <span className="text-[#5a2a6e] font-black flex-shrink-0">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#5a2a6e] mb-8 text-center">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
            <div className="space-y-4">
              {structuredData["@graph"][2].mainEntity.map((item) => (
                <details key={item.name} className="border border-gray-200 rounded-2xl p-5 group bg-white">
                  <summary className="font-bold text-[#5a2a6e] cursor-pointer list-none flex justify-between items-center gap-4">
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
            <h2 className="text-xl font-black text-[#5a2a6e] mb-6 text-center">
              Related <span className="text-orange-500">Resources</span>
            </h2>
            <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Related visa resources">
              {[
                { label: "Bank Statement for Visa", href: "/bank-statement-for-visa" },
                { label: "Police Clearance Certificate", href: "/police-clearance-certificate" },
                { label: "Visa Checklist Generator", href: "/visa-checklist-generator" },
                { label: "Common Visa Rejection Reasons", href: "/visa-rejection/common-reasons" },
                { label: "Visa Appeal Process", href: "/visa-rejection/appeal-process-for-visa" },
                { label: "Dubai Residents Visa", href: "/visa/dubai-residents" },
                { label: "All Visa Services", href: "/visa" },
              ].map((lnk) => (
                <Link
                  key={lnk.href}
                  href={lnk.href}
                  className="bg-white border border-gray-200 hover:border-[#5a2a6e] hover:text-[#5a2a6e] text-gray-600 rounded-full px-4 py-2 text-xs font-semibold transition-all shadow-sm hover:shadow"
                >
                  {lnk.label}
                </Link>
              ))}
            </nav>
          </section>

          {/* ── CTA ── */}
          <section className="bg-[#005a31] text-white rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-orange-400 mb-4">
              Get Help Preparing Your Spouse Visa Application
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-green-50/90 leading-relaxed mb-8">
              Eammu Holidays compiles, translates, and organizes your full spouse visa document
              set for UK, Canada, USA, Schengen, and Dubai/UAE applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801631312524?text=I%20need%20help%20with%20my%20spouse%20visa%20application"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                💬 Get Spouse Visa Help
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