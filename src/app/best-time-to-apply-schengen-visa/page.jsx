// app/visa/best-time-to-apply-schengen-visa/page.jsx
// Server Component — no 'use client' — maximum SEO indexing

import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://eammu.com"),

  title: {
    default:
      "Best Time to Apply for Schengen Visa 2026 — Avoid Peak Season Delays | Eammu Holidays",
  },

  description:
    "When is the best time to apply for a Schengen visa from Bangladesh in 2026? Avoid embassy peak-season delays, learn the 15-day processing window, the 6-month/15-day application rule, which country to apply to, visa fees, and seasonal booking tips from Eammu Holidays.",

  keywords: [
    "best time to apply schengen visa",
    "schengen visa processing time bangladesh",
    "when to apply for schengen visa",
    "schengen visa appointment availability",
    "schengen visa peak season",
    "schengen visa 2026 bangladesh",
    "how early to apply schengen visa",
    "schengen visa appointment delay bangladesh",
    "schengen visa application timeline",
    "schengen visa summer rush",
    "europe visa best time to apply bangladesh",
    "schengen visa slot booking bangladesh",
    "schengen visa fee bangladesh",
    "which country to apply schengen visa multiple countries",
    "schengen visa documents required bangladesh",
  ],

  alternates: {
    canonical: "https://eammu.com/best-time-to-apply-schengen-visa",
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
    url: "https://eammu.com/best-time-to-apply-schengen-visa",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Best Time to Apply for Schengen Visa 2026 | Eammu Holidays",
    description:
      "When should Bangladeshi applicants apply for a Schengen visa to avoid peak-season delays? Full 2026 timing guide from Eammu Holidays.",
    images: [
      {
        url: "https://eammu.com/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Best Time to Apply for Schengen Visa — Eammu Holidays",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    title: "Best Time to Apply for Schengen Visa 2026 | Eammu Holidays",
    description: "Avoid peak-season Schengen visa delays — when to apply from Bangladesh in 2026.",
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
const faqItems = [
  {
    q: "How early can I apply for a Schengen visa before my trip?",
    a: "You can apply for a Schengen visa up to 6 months before your intended travel date, and no later than 15 calendar days before departure. Applying around 2-3 months ahead is generally recommended for a comfortable buffer.",
  },
  {
    q: "What is the busiest season for Schengen visa applications from Bangladesh?",
    a: "Peak season for Schengen visa applications is typically from April to August, coinciding with the European summer travel season, as well as the weeks leading up to major holidays like Christmas and Eid travel periods.",
  },
  {
    q: "Why is it harder to get a Schengen visa appointment during summer?",
    a: "Embassies and visa application centers in Dhaka receive significantly more applications during the European summer (June-August) and around major holidays, leading to longer waits for appointment slots and processing.",
  },
  {
    q: "Does applying early guarantee faster Schengen visa approval?",
    a: "Applying early doesn't change the standard processing time (typically 15 working days), but it gives you a buffer in case of delays, additional document requests, or appointment rescheduling — reducing stress before your travel date.",
  },
  {
    q: "Which country's embassy should I apply to if I'm visiting several Schengen countries?",
    a: "For a short-stay visa covering multiple countries, you apply through the embassy or VAC of your main destination — the country where you'll spend the most days. If your time is split evenly, you apply to the country you enter first. For long-stay visas, you apply to the country where you intend to live or stay the longest.",
  },
  {
    q: "What is the Schengen visa fee for Bangladeshi applicants?",
    a: "The standard short-stay Schengen visa fee is set by the EU and is generally around €90 for adults and €45 for children aged 6-12, with no fee for children under 6. Service charges from the visa application centre are usually added on top, so always confirm the exact total with your VAC or with Eammu Holidays before paying.",
  },
  {
    q: "What documents do I need ready before booking my Schengen visa appointment?",
    a: "At minimum you'll need a passport valid for at least 3 months beyond your planned departure from the Schengen Area, a completed application form, travel/medical insurance covering the Schengen Area, flight and hotel bookings, and proof of sufficient funds such as a bank statement. Requirements can vary slightly by destination country.",
  },
  {
    q: "Can Eammu Holidays help me book a Schengen visa appointment?",
    a: "Yes. Eammu Holidays assists with Schengen visa appointment booking, document preparation, and embassy submission — helping you navigate appointment availability and avoid common timing mistakes.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://eammu.com/best-time-to-apply-schengen-visa#article",
      headline: "Best Time to Apply for Schengen Visa 2026 — Avoid Peak Season Delays",
      description:
        "A timing guide for Bangladeshi applicants on when to apply for a Schengen visa to avoid appointment delays during peak travel seasons.",
      image: "https://eammu.com/preview-banner.webp",
      author: { "@type": "Organization", name: "Eammu Holidays", url: "https://eammu.com" },
      publisher: {
        "@type": "Organization",
        name: "Eammu Holidays",
        logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" },
      },
      datePublished: "2026-01-20",
      dateModified: "2026-09-02",
      mainEntityOfPage: "https://eammu.com/best-time-to-apply-schengen-visa",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
        { "@type": "ListItem", position: 2, name: "Visa Services", item: "https://eammu.com/visa" },
        { "@type": "ListItem", position: 3, name: "Best Time to Apply for Schengen Visa", item: "https://eammu.com/best-time-to-apply-schengen-visa" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const timeline = [
  { period: "6 months before travel", action: "Earliest you can submit your Schengen visa application. Good for planned long trips or when you anticipate high demand for appointment slots.", color: "bg-green-50 border-green-100 text-green-800" },
  { period: "2-3 months before travel", action: "Recommended sweet spot — gives you a comfortable buffer for the 15-day standard processing time plus possible delays or additional document requests.", color: "bg-blue-50 border-blue-100 text-blue-800" },
  { period: "1 month before travel", action: "Still workable in most cases, but appointment slots may be limited during peak periods. Apply as soon as possible within this window.", color: "bg-yellow-50 border-yellow-100 text-yellow-800" },
  { period: "15 days before travel", action: "Absolute minimum — this is the legal cutoff for Schengen visa applications. Cutting it this close is high-risk and not recommended.", color: "bg-red-50 border-red-100 text-red-800" },
];

const peakSeasons = [
  { icon: "☀️", title: "April – August (European Summer)", desc: "The highest volume of Schengen visa applications occurs as Bangladeshis and other travelers plan European summer holidays. Appointment slots fill up fastest during this window." },
  { icon: "🎄", title: "November – December (Holiday Season)", desc: "Christmas and New Year travel drives a secondary surge in applications, particularly for short visits to family or holiday trips to Europe." },
  { icon: "🕌", title: "Around Eid Holidays", desc: "When Eid holidays align with school/work breaks, many Bangladeshi families plan European trips, adding to appointment demand at VACs in Dhaka." },
  { icon: "📚", title: "August – September (Academic Intake)", desc: "Though primarily for student visas, this period sees increased overall visa center traffic as academic-year travel overlaps with tourist season." },
];

const documentChecklist = [
  "Passport valid for at least 3 months beyond your planned departure from the Schengen Area, with at least 2 blank pages",
  "Completed and signed Schengen visa application form",
  "Recent passport-size photo meeting Schengen photo specifications",
  "Travel or medical insurance valid across the Schengen Area with adequate coverage",
  "Confirmed flight reservation (round trip)",
  "Hotel booking or accommodation proof for the full stay",
  "Proof of sufficient funds — bank statement and, where applicable, a sponsor letter",
  "Cover letter and travel itinerary explaining the purpose of your visit",
];

export default function BestTimeSchengenVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="sr-only" aria-hidden="true">
        <h1>Best Time to Apply for Schengen Visa 2026 — Avoid Peak Season Delays | Eammu Holidays</h1>
        <p>
          Timing guide for Bangladeshi applicants on when to apply for a Schengen visa to avoid
          appointment delays. Covers the 6-month application window, the 15-day minimum, peak
          season periods (April-August summer, holiday season, Eid travel), which country's
          embassy to apply to, required documents, visa fees, and appointment booking tips from
          Eammu Holidays — IATA-accredited visa agency in Bangladesh.
        </p>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="https://eammu.com">Home</a></li>
            <li><a href="https://eammu.com/visa">Visa Services</a></li>
            <li><a href="https://eammu.com/best-time-to-apply-schengen-visa">Best Time to Apply for Schengen Visa</a></li>
          </ol>
        </nav>
      </div>

      <main className="min-h-screen bg-[#f8fafc] text-gray-800 font-sans">
        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-[#1a2f5c] via-[#22407a] to-[#2e5aa8] text-white pt-28 md:pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex justify-center gap-2 text-xs text-blue-200 flex-wrap">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-blue-400" aria-hidden="true">/</li>
                <li><Link href="/visa" className="hover:text-white transition-colors">Visa Services</Link></li>
                <li className="text-blue-400" aria-hidden="true">/</li>
                <li className="text-white font-semibold" aria-current="page">Best Time for Schengen Visa</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6">
              🇪🇺 2026 Timing Guide · Eammu Holidays
            </div>

            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              Best Time to Apply for a{" "}
              <span className="text-orange-400">Schengen Visa</span> — 2026
            </h1>

            <p className="text-lg md:text-xl text-blue-50/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Timing your <strong className="text-white">Schengen visa application</strong> right
              can mean the difference between a smooth 15-day process and weeks of waiting for an
              appointment. Here's exactly when Bangladeshi applicants should apply in 2026 — and
              which months to avoid.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801701699743?text=I%20want%20help%20booking%20my%20Schengen%20visa%20appointment"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                💬 Help with Appointment Booking
              </a>
              <Link
                href="/visa"
                className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base"
              >
                View Schengen Visa Services →
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 space-y-16">

          {/* ── TOC ── */}
          <nav aria-label="Table of contents" className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-sm font-black text-[#22407a] mb-3 uppercase tracking-wide">On This Page</h2>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600 list-decimal list-inside">
              <li><a href="#application-window" className="hover:text-[#22407a]">The Application Window</a></li>
              <li><a href="#timeline" className="hover:text-[#22407a]">When Should You Apply? Timeline</a></li>
              <li><a href="#peak-seasons" className="hover:text-[#22407a]">Peak Seasons to Avoid</a></li>
              <li><a href="#which-country" className="hover:text-[#22407a]">Which Country's Embassy to Apply To</a></li>
              <li><a href="#documents" className="hover:text-[#22407a]">Documents to Have Ready</a></li>
              <li><a href="#fees" className="hover:text-[#22407a]">Schengen Visa Fees</a></li>
              <li><a href="#tips" className="hover:text-[#22407a]">Practical Timing Tips</a></li>
              <li><a href="#faq" className="hover:text-[#22407a]">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          {/* ── INTRO ── */}
          <section id="application-window">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#22407a] mb-5 border-l-8 border-orange-500 pl-5">
              The Schengen Visa Application Window
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Under Schengen visa regulations, applicants can submit their application{" "}
                <strong className="text-[#22407a]">up to 6 months before their intended travel
                date</strong>, and no later than{" "}
                <strong className="text-[#22407a]">15 calendar days before departure</strong>.
                Standard processing takes around{" "}
                <strong className="text-[#22407a]">15 working days</strong>, though this can
                extend during busy periods or if additional documents are requested.
              </p>
              <p>
                The key challenge for Bangladeshi applicants isn't usually the processing time
                itself — it's{" "}
                <strong className="text-[#22407a]">getting an appointment slot</strong> at the
                Visa Application Centre (VAC) in Dhaka. During peak months, slots can be booked
                out weeks in advance, and consular staff routinely note that incomplete or
                incorrect paperwork is what turns a busy season into a rejected or delayed
                application — so accuracy matters just as much as timing.
              </p>
              <p>
                At <Link href="/visa" className="text-[#22407a] font-semibold hover:text-orange-500">Eammu Holidays</Link>,
                we monitor appointment availability across Schengen countries and help clients
                secure slots efficiently, while ensuring documents are{" "}
                <Link href="/travel-resources/visa-checklist-generator" className="text-[#22407a] font-semibold hover:text-orange-500">
                  fully prepared
                </Link>{" "}
                before the appointment date.
              </p>
            </div>
          </section>

          {/* ── TIMELINE ── */}
          <section id="timeline">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#22407a] mb-3 border-l-8 border-orange-500 pl-5">
              When Should You Apply? Timeline Breakdown
            </h2>
            <div className="space-y-4 mt-8">
              {timeline.map((t) => (
                <div key={t.period} className={`p-5 rounded-2xl border ${t.color} flex flex-col md:flex-row md:items-center gap-3`}>
                  <div className="font-black text-sm md:w-56 flex-shrink-0">{t.period}</div>
                  <p className="text-sm leading-relaxed">{t.action}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── PEAK SEASONS ── */}
          <section id="peak-seasons">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#22407a] mb-3 border-l-8 border-orange-500 pl-5">
              Peak Seasons to Avoid (or Plan Around)
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              These periods typically see the highest demand for Schengen visa appointments and
              processing in Dhaka.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {peakSeasons.map((p) => (
                <article key={p.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <h3 className="font-black text-[#22407a] text-base mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ── NEW: WHICH COUNTRY TO APPLY TO ── */}
          <section id="which-country" className="bg-white rounded-3xl border border-blue-100 shadow-sm p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#22407a] mb-4">
              Which Country's Embassy Should You Apply To?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                If your trip covers only one Schengen country, this is simple — you apply to that
                country's embassy or VAC. Things get more specific if you're{" "}
                <strong className="text-[#22407a]">visiting several countries on one trip</strong>:
                for a short-stay visa, you apply through the embassy or visa centre of your{" "}
                <strong className="text-[#22407a]">main destination</strong> — the country where
                you'll spend the most days. If your time is split evenly across countries, you
                apply to the country you plan to enter first.
              </p>
              <p>
                For long-stay (national/Type D) visas — such as study or long-term work permits —
                you apply to the country where you intend to live or stay the longest, and
                requirements can differ noticeably between countries. Applications are generally
                submitted through an authorised visa application centre such as VFS Global,
                TLScontact, or BLS International, or directly at the embassy or consulate,
                depending on the destination country.
              </p>
              <p>
                Getting this wrong is a common, avoidable cause of delay — our team at Eammu
                Holidays confirms the correct embassy for your itinerary before you book any
                appointment.
              </p>
            </div>
          </section>

          {/* ── NEW: DOCUMENT CHECKLIST ── */}
          <section id="documents">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#22407a] mb-3 border-l-8 border-orange-500 pl-5">
              Documents to Have Ready Before You Book
            </h2>
            <p className="text-gray-600 mt-3 mb-6">
              Booking your appointment before your paperwork is ready is one of the biggest causes
              of rescheduling during peak season. Confirm you can produce the following before you
              book:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {documentChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                  <span className="text-blue-600 font-black">✓</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mt-6 leading-relaxed">
              Exact requirements vary slightly by destination country, so always cross-check with
              our{" "}
              <Link href="/travel-resources/visa-checklist-generator" className="text-[#22407a] font-semibold hover:text-orange-500">
                visa checklist
              </Link>{" "}
              or your Eammu Holidays consultant before your appointment date.
            </p>
          </section>

          {/* ── NEW: FEES ── */}
          <section id="fees" className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#22407a] mb-5 border-l-8 border-orange-500 pl-5">
              Schengen Visa Fees
            </h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                The standard short-stay Schengen visa fee is set at the EU level and is generally{" "}
                <strong className="text-[#22407a]">around €90 for adults</strong> and{" "}
                <strong className="text-[#22407a]">around €45 for children aged 6–12</strong>,
                with <strong className="text-[#22407a]">no fee for children under 6</strong>. The
                visa application centre typically adds its own service charge on top of this
                government fee.
              </p>
              <p>
                Fees can change, and long-stay (national) visa fees vary by country and purpose,
                so always confirm the current total with the relevant VAC, embassy, or your Eammu
                Holidays consultant before making payment.
              </p>
            </div>
          </section>

          {/* ── PRACTICAL TIPS ── */}
          <section id="tips" className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#22407a] mb-5 border-l-8 border-orange-500 pl-5">
              Practical Tips for Smooth Schengen Visa Timing
            </h2>
            <ul className="space-y-3 text-gray-700 text-lg leading-relaxed list-none">
              <li className="flex gap-3"><span className="text-[#22407a] font-black">→</span> Aim to apply <strong>2-3 months before travel</strong> — early enough to absorb delays, late enough that your documents (bank statements, bookings) remain valid and current.</li>
              <li className="flex gap-3"><span className="text-[#22407a] font-black">→</span> If traveling during <strong>April-August</strong>, try to book your appointment at least 4-6 weeks earlier than you normally would.</li>
              <li className="flex gap-3"><span className="text-[#22407a] font-black">→</span> Double-check your passport is valid for at least <strong>3 months beyond your planned departure</strong> from the Schengen Area before you book — an expiring passport is a common, avoidable rejection reason.</li>
              <li className="flex gap-3"><span className="text-[#22407a] font-black">→</span> Have all documents — including <Link href="/travel-resources/bank-statement-for-visa" className="text-[#22407a] font-semibold hover:text-orange-500">bank statements</Link> and <Link href="/travel-resources/police-clearance-certificate" className="text-[#22407a] font-semibold hover:text-orange-500">PCC</Link> if needed — ready before booking your appointment to avoid rescheduling.</li>
              <li className="flex gap-3"><span className="text-[#22407a] font-black">→</span> Avoid applying exactly at the 15-day minimum — unexpected delays leave no room for error.</li>
              <li className="flex gap-3"><span className="text-[#22407a] font-black">→</span> Build a little flexibility into your travel dates where possible — peak-season backlogs at the embassy or VAC are outside your control, but a buffer of a few extra days protects your itinerary.</li>
              <li className="flex gap-3"><span className="text-[#22407a] font-black">→</span> Work with a consultant who tracks VAC appointment availability in real time, rather than checking manually and risking missed slots.</li>
            </ul>
          </section>

          {/* ── FAQ ── */}
          <section id="faq">
            <h2 className="text-2xl md:text-3xl font-black text-[#22407a] mb-8 text-center">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details key={item.q} className="border border-gray-200 rounded-2xl p-5 group bg-white">
                  <summary className="font-bold text-[#22407a] cursor-pointer list-none flex justify-between items-center gap-4">
                    <span>{item.q}</span>
                    <span className="text-orange-500 text-xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ── RELATED RESOURCES ── */}
          <section>
            <h2 className="text-xl font-black text-[#22407a] mb-6 text-center">
              Related <span className="text-orange-500">Resources</span>
            </h2>
            <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Related visa resources">
              {[
                { label: "Schengen Visa Services", href: "/visa" },
                { label: "Visa Checklist Generator", href: "/visa-checklist-generator" },
                { label: "Visa Processing Time Tracker", href: "/visa-processing-time-tracker" },
                { label: "Bank Statement for Visa", href: "/bank-statement-for-visa" },
                { label: "Common Visa Rejection Reasons", href: "/common-reasons" },
                { label: "Visa Appeal Process", href: "/appeal-process-for-visa" },
                { label: "Visa Guide 2026", href: "/visa/visa-guide" },
              ].map((lnk) => (
                <Link
                  key={lnk.href}
                  href={lnk.href}
                  className="bg-white border border-gray-200 hover:border-[#22407a] hover:text-[#22407a] text-gray-600 rounded-full px-4 py-2 text-xs font-semibold transition-all shadow-sm hover:shadow"
                >
                  {lnk.label}
                </Link>
              ))}
            </nav>
          </section>

          {/* ── CTA ── */}
          <section className="bg-[#005a31] text-white rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-orange-400 mb-4">
              Plan Your Schengen Visa Timing With Experts
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-green-50/90 leading-relaxed mb-8">
              Eammu Holidays helps you choose the right application window, book appointments,
              and prepare documents — for a smooth Schengen visa process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801701699743?text=I%20need%20help%20planning%20my%20Schengen%20visa%20timing"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                💬 Plan My Schengen Visa
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