// app/target-usa-visa-interview-preparation/ds-160-form-guide/page.jsx
// Server Component — no 'use client' — maximum SEO indexing

import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://eammu.com"),

  title: {
    default:
      "DS-160 Form Guide 2026 — Step-by-Step Instructions for USA Visa | Eammu Holidays",
  },

  description:
    "Complete DS-160 form guide for Bangladeshi USA visa applicants in 2026. Step-by-step instructions for filling out the DS-160, common mistakes to avoid, confirmation page tips, and how it connects to your visa interview — from Eammu Holidays' Target USA program.",

  keywords: [
    "ds-160 form guide",
    "ds-160 form bangladesh",
    "how to fill ds-160 form",
    "ds-160 step by step",
    "ds-160 confirmation page",
    "ds-160 form mistakes to avoid",
    "ds-160 online application",
    "usa visa application form bangladesh",
    "ds-160 form for b1 b2 visa",
    "ds-160 form for f1 visa",
    "ds-160 photo requirements",
    "ds-160 barcode number",
    "usa visa form bangladesh 2026",
    "ceac ds-160 bangladesh",
  ],

  alternates: {
    canonical: "https://eammu.com/ds-160-form-guide",
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
    url: "https://eammu.com/ds-160-form-guide",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "DS-160 Form Guide 2026 — Step-by-Step | Eammu Holidays Target USA",
    description:
      "Step-by-step DS-160 form guide for Bangladeshi USA visa applicants — common mistakes, confirmation page tips, and interview connection.",
    images: [
      {
        url: "https://eammu.com/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "DS-160 Form Guide — Eammu Holidays",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    title: "DS-160 Form Guide 2026 | Eammu Holidays",
    description:
      "Step-by-step DS-160 form guide for Bangladeshi USA visa applicants — common mistakes and tips.",
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
      "@id": "https://eammu.com/ds-160-form-guide#article",
      headline: "DS-160 Form Guide 2026 — Step-by-Step Instructions for USA Visa Applicants",
      description:
        "Step-by-step DS-160 guide for Bangladeshi USA visa applicants, covering the online form, photo requirements, common mistakes, and the confirmation page.",
      image: "https://eammu.com/preview-banner.webp",
      author: { "@type": "Organization", name: "Eammu Holidays", url: "https://eammu.com" },
      publisher: {
        "@type": "Organization",
        name: "Eammu Holidays",
        logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" },
      },
      datePublished: "2026-01-15",
      dateModified: "2026-06-01",
      mainEntityOfPage: "https://eammu.com/ds-160-form-guide",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
        { "@type": "ListItem", position: 2, name: "Target USA Visa Interview Preparation", item: "https://eammu.com/target-usa-visa-interview-preparation" },
        { "@type": "ListItem", position: 3, name: "DS-160 Form Guide", item: "https://eammu.com/ds-160-form-guide" },
      ],
    },
    {
      "@type": "HowTo",
      name: "How to Fill Out the DS-160 Form for a USA Visa",
      description: "Step-by-step process to complete the DS-160 online nonimmigrant visa application form.",
      totalTime: "PT1H30M",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Select Your Visa Type & Location",
          text: "Go to the CEAC website, select 'New Application,' choose your visa type (B1/B2, F1, J1, etc.) and the embassy location (Dhaka).",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Upload Your Photo",
          text: "Upload a recent photo meeting U.S. visa photo requirements: 2x2 inches, white background, no glasses, neutral expression.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Fill Personal & Passport Information",
          text: "Enter your name exactly as it appears on your passport, date of birth, nationality, national identification number, and passport details.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Travel & Contact Information",
          text: "Provide your travel purpose, intended arrival date, U.S. point of contact (if applicable), and current address and phone number.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Family, Work & Education History",
          text: "Complete sections on family members, current and previous employment, and educational background — be consistent with your supporting documents.",
        },
        {
          "@type": "HowToStep",
          position: 6,
          name: "Security & Background Questions",
          text: "Answer the security questions honestly. Most applicants will answer 'No' to all, but any 'Yes' answer requires an explanation.",
        },
        {
          "@type": "HowToStep",
          position: 7,
          name: "Review & Submit",
          text: "Review every section carefully, submit the form, and print the DS-160 confirmation page with the barcode — you'll need this for your visa interview.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the DS-160 form and who needs to fill it out?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The DS-160 is the Online Nonimmigrant Visa Application form required for all applicants applying for a U.S. nonimmigrant visa, including B1/B2 tourist visas, F1 student visas, and J1 exchange visitor visas.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to complete the DS-160 form?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Completing the DS-160 form typically takes 60 to 90 minutes if you have all your documents (passport, travel history, employment details) ready beforehand. The form cannot be saved permanently, so it's best to complete it in one sitting or save your application ID to resume later.",
          },
        },
        {
          "@type": "Question",
          name: "What happens after I submit the DS-160 form?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After submitting the DS-160, you receive a confirmation page with a barcode and confirmation number. You must print this page and bring it to your visa interview appointment at the U.S. Embassy in Dhaka.",
          },
        },
        {
          "@type": "Question",
          name: "What are common mistakes to avoid on the DS-160 form?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common mistakes include name mismatches with the passport, incorrect dates, inconsistent employment or travel history compared to other documents, uploading a non-compliant photo, and leaving the application incomplete past the 30-minute timeout.",
          },
        },
        {
          "@type": "Question",
          name: "Can Eammu Holidays help me fill out the DS-160 form?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. As part of our 'Target USA' visa interview preparation program, Eammu Holidays reviews and assists with DS-160 form completion to ensure accuracy and consistency with your interview answers and supporting documents.",
          },
        },
      ],
    },
  ],
};

const mistakes = [
  { icon: "📛", title: "Name Mismatch with Passport", desc: "Even minor spelling differences between your DS-160 and passport can cause delays or red flags at the interview." },
  { icon: "🖼️", title: "Non-Compliant Photo", desc: "Photos with glasses, shadows, non-white backgrounds, or incorrect dimensions are a leading cause of rejected uploads." },
  { icon: "⏱️", title: "Session Timeout", desc: "The DS-160 portal logs you out after 30 minutes of inactivity. Save your Application ID frequently to avoid losing progress." },
  { icon: "📑", title: "Inconsistent Travel/Work History", desc: "Your DS-160 answers must match your bank statements, employment letters, and travel history shown to the visa officer." },
  { icon: "❓", title: "Vague Security Answers", desc: "Answering security questions inconsistently or providing incomplete explanations for 'Yes' answers can trigger additional scrutiny." },
  { icon: "🖨️", title: "Forgetting the Confirmation Page", desc: "You must print and bring the DS-160 confirmation page with barcode to your interview — it cannot be skipped." },
];

export default function DS160FormGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="sr-only" aria-hidden="true">
        <h1>DS-160 Form Guide 2026 — Step-by-Step Instructions for USA Visa | Eammu Holidays</h1>
        <p>
          Complete DS-160 form guide for Bangladeshi USA visa applicants. Step-by-step
          instructions for the online nonimmigrant visa application, photo requirements, common
          mistakes, and confirmation page tips for B1/B2, F1, and J1 visas. By Eammu Holidays
          — Target USA visa interview preparation program.
        </p>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="https://eammu.com">Home</a></li>
            <li><a href="https://eammu.com/target-usa-visa-interview-preparation">Target USA Visa Interview Preparation</a></li>
            <li><a href="https://eammu.com/ds-160-form-guide">DS-160 Form Guide</a></li>
          </ol>
        </nav>
      </div>

      <main className="min-h-screen bg-[#f8fafc] text-gray-800 font-sans">
        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-[#0a2540] via-[#0d3a66] to-[#1e5a96] text-white py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex justify-center gap-2 text-xs text-blue-200 flex-wrap">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-blue-400" aria-hidden="true">/</li>
                <li><Link href="/target-usa-visa-interview-preparation" className="hover:text-white transition-colors">Target USA Program</Link></li>
                <li className="text-blue-400" aria-hidden="true">/</li>
                <li className="text-white font-semibold" aria-current="page">DS-160 Form Guide</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6">
              🇺🇸 2026 Guide · Target USA Program by Eammu Holidays
            </div>

            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              DS-160 Form Guide — Step-by-Step for{" "}
              <span className="text-orange-400">USA Visa</span> 2026
            </h1>

            <p className="text-lg md:text-xl text-blue-50/90 max-w-3xl mx-auto leading-relaxed mb-8">
              The <strong className="text-white">DS-160</strong> is the most important form in your
              USA visa application. This guide walks Bangladeshi applicants through every section —
              from photo upload to the confirmation page — to avoid mistakes that can affect your{" "}
              <strong className="text-white">B1/B2, F1, or J1 visa</strong> interview outcome.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801701699743?text=I%20need%20help%20with%20DS-160%20form"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                💬 Get DS-160 Help
              </a>
              <Link
                href="/target-usa-visa-interview-preparation"
                className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base"
              >
                Target USA Program →
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 space-y-16">

          {/* ── INTRO ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3a66] mb-5 border-l-8 border-orange-500 pl-5">
              What Is the DS-160 Form?
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                The <strong className="text-[#0d3a66]">DS-160 (Online Nonimmigrant Visa
                Application)</strong> is a mandatory form for anyone applying for a U.S.
                nonimmigrant visa — including{" "}
                <strong>B1/B2 tourist visas, F1 student visas, and J1 exchange visitor visas</strong>.
                It is completed entirely online through the CEAC (Consular Electronic Application
                Center) portal before your visa interview at the U.S. Embassy in Dhaka.
              </p>
              <p>
                Filling out the DS-160 correctly matters because{" "}
                <strong className="text-[#0d3a66]">your interview will be based directly on the
                information you provide</strong>. Any inconsistency between your DS-160, your
                bank statements, employment letters, and your spoken answers can raise doubts
                for the visa officer.
              </p>
              <p>
                As part of our{" "}
                <Link href="/target-usa-visa-interview-preparation" className="text-[#0d3a66] font-semibold hover:text-orange-500">
                  Target USA visa interview preparation program
                </Link>
                , Eammu Holidays reviews your DS-160 alongside your{" "}
                <Link href="/bank-statement-for-visa" className="text-[#0d3a66] font-semibold hover:text-orange-500">
                  financial documents
                </Link>{" "}
                and conducts mock interviews to ensure everything is consistent.
              </p>
            </div>
          </section>

          {/* ── STEP BY STEP (HowTo) ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3a66] mb-3 border-l-8 border-orange-500 pl-5">
              How to Fill Out the DS-160 — Step by Step
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Have your passport, travel itinerary, employment details, and a compliant photo
              ready before starting. The form session times out after 30 minutes of inactivity.
            </p>
            <div className="space-y-4">
              {structuredData["@graph"][2].step.map((s) => (
                <div key={s.position} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#0d3a66] text-white flex items-center justify-center font-black text-sm flex-shrink-0">
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

          {/* ── COMMON MISTAKES ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3a66] mb-3 border-l-8 border-orange-500 pl-5">
              6 Common DS-160 Mistakes That Hurt Your Application
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {mistakes.map((m) => (
                <article key={m.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-3xl mb-3">{m.icon}</div>
                  <h3 className="font-black text-[#0d3a66] text-base mb-2">{m.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ── AFTER DS-160 ── */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3a66] mb-5 border-l-8 border-orange-500 pl-5">
              After the DS-160: Preparing for Your Interview
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Once your DS-160 is submitted, the confirmation page becomes your reference document
                for the visa interview at the U.S. Embassy in Dhaka. Visa officers often ask
                questions directly related to your DS-160 answers — your travel purpose, your job,
                your finances, and your ties to Bangladesh.
              </p>
              <p>
                Our{" "}
                <Link href="/target-usa-visa-interview-preparation" className="text-[#0d3a66] font-semibold hover:text-orange-500">
                  Target USA program
                </Link>{" "}
                includes mock interviews based on your actual DS-160 responses, helping you answer
                confidently and consistently — a key factor in our{" "}
                <strong className="text-[#0d3a66]">98% success rate</strong> since 2015.
              </p>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#0d3a66] mb-8 text-center">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
            <div className="space-y-4">
              {structuredData["@graph"][3].mainEntity.map((item) => (
                <details key={item.name} className="border border-gray-200 rounded-2xl p-5 group bg-white">
                  <summary className="font-bold text-[#0d3a66] cursor-pointer list-none flex justify-between items-center gap-4">
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
            <h2 className="text-xl font-black text-[#0d3a66] mb-6 text-center">
              Related <span className="text-orange-500">Resources</span>
            </h2>
            <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Related visa resources">
              {[
                { label: "Target USA Visa Interview Program", href: "/target-usa-visa-interview-preparation" },
                { label: "Bank Statement for Visa", href: "/travel-resources/bank-statement-for-visa" },
                { label: "Visa Checklist Generator", href: "/travel-resources/visa-checklist-generator" },
                { label: "Visa Rejection Help", href: "/visa-rejection" },
                { label: "Common Visa Rejection Reasons", href: "/common-reasons" },
                { label: "All Visa Services", href: "/visa" },
                { label: "Study Abroad", href: "/study-abroad" },
              ].map((lnk) => (
                <Link
                  key={lnk.href}
                  href={lnk.href}
                  className="bg-white border border-gray-200 hover:border-[#0d3a66] hover:text-[#0d3a66] text-gray-600 rounded-full px-4 py-2 text-xs font-semibold transition-all shadow-sm hover:shadow"
                >
                  {lnk.label}
                </Link>
              ))}
            </nav>
          </section>

          {/* ── CTA ── */}
          <section className="bg-[#0d3a66] text-white rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-orange-400 mb-4">
              Get Expert DS-160 & Interview Preparation
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-blue-50/90 leading-relaxed mb-8">
              Join Eammu Holidays' Target USA program — DS-160 review, mock interviews, and
              document preparation with a 98% success rate since 2015.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801701699743?text=I%20want%20to%20join%20Target%20USA%20program"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                💬 Join Target USA Program
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