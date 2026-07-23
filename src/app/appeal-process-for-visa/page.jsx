// app/visa-rejection/appeal-process-for-visa/page.jsx
// Server Component — no 'use client' — maximum SEO indexing
// All motion is done with plain CSS keyframes (see globals.css addition at
// the bottom of this file's comments) so the entire page stays server-rendered.

import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";
import {
  Scale,
  RefreshCw,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
  AlertTriangle,
  Landmark,
  Globe2,
  ClipboardCheck,
  Ban,
  Plus,
} from "lucide-react";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://eammu.com"),

  title: {
    default:
      "Visa Rejection Appeal Process 2026 — How to Appeal or Reapply After Refusal | Eammu Holidays",
  },

  description:
    "Visa refused? Complete 2026 guide to the appeal and reapplication process for Bangladeshi applicants — Canada, UK, USA, Schengen & Dubai/UAE. Country-specific deadlines, appeal letter guidance, and how to fix the exact reasons cited in your refusal letter. Free letter review by Eammu Holidays.",

  keywords: [
    "visa rejection appeal bangladesh",
    "visa appeal process bangladesh",
    "how to appeal visa refusal",
    "visa reapplication after rejection bangladesh",
    "schengen visa appeal bangladesh",
    "canada visa refusal appeal",
    "uk visa refusal administrative review",
    "us visa refusal 214b reapply",
    "dubai visa rejection reapply",
    "visa refused what to do next",
    "visa rejection letter bangladesh",
    "reapply for visa after rejection",
    "visa appeal letter sample",
    "administrative review visa refusal",
  ],

  alternates: {
    canonical: "https://eammu.com/visa-rejection/appeal-process-for-visa",
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
    url: "https://eammu.com/visa-rejection/appeal-process-for-visa",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Visa Rejection Appeal Process 2026 | Eammu Holidays",
    description:
      "Country-specific appeal and reapplication guide for Bangladeshi applicants — Canada, UK, USA, Schengen & Dubai. Free refusal letter review by Eammu Holidays.",
    images: [
      {
        url: "https://eammu.com/preview-banner.webp",
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
    description:
      "Country-specific appeal and reapplication guide for Bangladeshi applicants after a visa refusal.",
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
      "@id": "https://eammu.com/visa-rejection/appeal-process-for-visa#article",
      headline:
        "Visa Rejection Appeal Process 2026 — How to Appeal or Reapply After Refusal",
      description:
        "A country-specific guide for Bangladeshi applicants on the visa appeal and reapplication process after a refusal for Canada, UK, USA, Schengen, or Dubai/UAE visas.",
      image: "https://eammu.com/preview-banner.webp",
      author: {
        "@type": "Organization",
        name: "Eammu Holidays",
        url: "https://eammu.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Eammu Holidays",
        logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" },
      },
      datePublished: "2026-01-25",
      dateModified: "2026-07-16",
      mainEntityOfPage: "https://eammu.com/visa-rejection/appeal-process-for-visa",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Visa Rejection Help",
          item: "https://eammu.com/visa-rejection",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Visa Appeal Process",
          item: "https://eammu.com/visa-rejection/appeal-process-for-visa",
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "How to Appeal or Reapply After a Visa Refusal",
      description:
        "Step-by-step process for Bangladeshi applicants to respond to a visa refusal, from reading the refusal letter to filing an appeal or a stronger reapplication.",
      totalTime: "P30D",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Read the Refusal Letter Line by Line",
          text: "Identify every reason cited for refusal, not just the headline reason. Embassies often list a primary refusal ground plus secondary concerns — both matter, and both need a response.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Check Your Deadline and Your Options",
          text: "Some countries, such as the UK, offer a formal appeal or Administrative Review within a strict deadline, often 14 or 28 days. Others, such as Schengen states, allow an appeal to the issuing consulate within roughly 15 to 60 days depending on the country. The USA and UAE generally have no formal appeal route — the practical path is a fresh application.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Build Evidence Against Each Cited Reason",
          text: "For every reason listed in the refusal letter, gather new or stronger evidence — improved financial documents, clearer ties to Bangladesh, corrected form entries, or additional supporting letters.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Get a Professional Review of the Refusal Letter",
          text: "Have a visa consultant compare your original application against the refusal letter to identify exactly what the officer found insufficient, and to confirm whether an appeal or a reapplication gives you better odds.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "File the Appeal or Submit the New Application",
          text: "Submit the formal appeal within its deadline where one exists, or file a new, materially stronger application with updated documents and a cover letter that directly addresses the previous refusal.",
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
            text: "For most countries you can technically reapply the next day, but doing so before you have addressed the specific reasons in your refusal letter almost always produces a second refusal for the same reasons, and a growing refusal history that later officers will see.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a formal appeal process for Schengen visa refusals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most Schengen countries allow a formal appeal to the embassy, consulate, or a designated ministry within a set window after the refusal letter, commonly between 15 and 60 days depending on the issuing country, and the letter itself states the exact procedure and deadline.",
          },
        },
        {
          "@type": "Question",
          name: "Does the USA have a visa appeal process after a 214(b) refusal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. A refusal under section 214(b) of the Immigration and Nationality Act has no formal appeal. The only realistic path forward is a new DS-160 application and a new interview once your circumstances or documentation have materially improved.",
          },
        },
        {
          "@type": "Question",
          name: "Should I file a formal appeal or just submit a new application?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on the country and the reason for refusal. If the refusal stemmed from a clear factual error or a document the officer overlooked, an appeal can be faster and cheaper. If the refusal points to a genuine weakness such as thin financials or unclear travel purpose, a fresh, better-prepared application is usually the stronger route.",
          },
        },
        {
          "@type": "Question",
          name: "Do I have to mention a previous refusal in my new application?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Nearly every visa application form asks whether you have been refused a visa before, for that country or any other. Answering honestly and briefly explaining what has changed is viewed far better than an omission that a visa officer later discovers through system records.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to appeal or reapply for a visa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most countries charge the full visa fee again for a fresh application, since it is processed as a new case. A handful of appeal or Administrative Review routes, such as the UK's, charge a separate and usually lower fee than a full new application, though this varies by visa category.",
          },
        },
        {
          "@type": "Question",
          name: "Can Eammu Holidays help after my visa has already been refused?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Eammu Holidays reviews your refusal letter against your original application line by line, identifies exactly what the visa officer found insufficient, and builds a targeted plan — whether that means a formal appeal, an Administrative Review, or a rebuilt reapplication.",
          },
        },
      ],
    },
  ],
};

// ─── Data ──────────────────────────────────────────────────────────────────────
const appealVsReapply = [
  {
    title: "Formal Appeal / Administrative Review",
    Icon: Scale,
    when: "Choose this route when:",
    points: [
      "The refusal letter itself offers a named appeal or review process with a stated deadline",
      "You believe the decision misreads evidence you already submitted, rather than reflecting a genuine gap",
      "Nothing material has changed in your finances, employment, or travel purpose since you applied",
      "You want to preserve the original application date, which sometimes matters for processing queues",
    ],
    accent: "border-blue-200 bg-blue-50",
    iconWrap: "bg-blue-600",
  },
  {
    title: "Fresh Reapplication",
    Icon: RefreshCw,
    when: "Choose this route when:",
    points: [
      "The refusal cited a real weakness that needs new evidence — stronger financials, better ties to Bangladesh, a clearer itinerary",
      "There is no formal appeal option for that country, or the deadline to appeal has already passed",
      "You can meaningfully improve the application before submitting again, not just resend the same file",
      "Months have passed and your situation (job, savings, family circumstances) has genuinely changed",
    ],
    accent: "border-green-200 bg-green-50",
    iconWrap: "bg-[#005a31]",
  },
];

const countryBreakdown = [
  {
    country: "Canada",
    Icon: Landmark,
    deadline: "No formal appeal for most visitor visas",
    path: "Reapplication with fresh evidence",
    detail:
      "IRCC visitor visa refusals rarely come with a right of appeal — that's mostly reserved for certain permanent residence and sponsorship decisions. For a refused visitor, study, or work permit application, the practical route is a new application built around the exact 'reasons for refusal' shown in your GCMS notes. Requesting your GCMS notes through an Access to Information request gives you the officer's actual comments, which are usually more specific than the refusal letter itself, and are worth the extra week or two of waiting before you refile.",
  },
  {
    country: "United Kingdom",
    Icon: Landmark,
    deadline: "Administrative Review within 28 days (14 days if refused outside the UK on some routes)",
    path: "Administrative Review or fresh application",
    detail:
      "The UK is one of the few destinations with a clearly defined, paid Administrative Review process, used when you believe the decision-maker applied the rules incorrectly to evidence you already provided. It is not a route for submitting new documents — that's what a fresh application is for. If your refusal cites a genuine documentary gap (for example, unexplained deposits in a bank statement), reapplying with a corrected, better-explained file is usually faster and more effective than a review.",
  },
  {
    country: "United States",
    Icon: Landmark,
    deadline: "No appeal for 214(b) refusals",
    path: "New DS-160 and new interview",
    detail:
      "The vast majority of Bangladeshi non-immigrant visa refusals fall under INA 214(b) — the officer wasn't convinced you'd return home after your trip. There's no appeal for this. The consulate's own guidance is that circumstances need to change before reapplying, which in practice means stronger, verifiable ties: a longer job history, property, family responsibilities, or a clearer, more specific travel purpose than the last interview presented. Reapplying immediately with the same profile tends to produce the same result.",
  },
  {
    country: "Schengen Area",
    Icon: Globe2,
    deadline: "Appeal window typically 15–60 days depending on the issuing country",
    path: "Formal appeal to the consulate/ministry, or reapplication",
    detail:
      "Every Schengen refusal letter must state the specific reason under the EU Visa Code and the appeal procedure for that particular country, since the right to appeal is written into EU law. France, Germany, and the Netherlands each run this differently — some route appeals through the consulate, others through a national administrative court. Given the variation, always work from the exact instructions printed on your own refusal letter rather than a general rule, and note the deadline the moment you receive it.",
  },
  {
    country: "Dubai / UAE",
    Icon: Globe2,
    deadline: "No formal appeal route",
    path: "Reapplication through a licensed sponsor",
    detail:
      "UAE visa refusals, whether tourist or employment-sponsored, don't come with a stated reason or a formal appeal channel in most cases. The sponsoring travel agency or company typically receives a rejection code rather than a detailed explanation. The realistic path is working with your sponsor to identify likely causes — incomplete documentation, a mismatched profile, or an immigration flag — and reapplying with a corrected file, sometimes through a different, more suitable visa category.",
  },
];

const commonMistakes = [
  {
    Icon: Ban,
    title: "Resubmitting the identical application",
    text: "Sending the same documents again, hoping for a different officer or a better day, almost always produces the same refusal — the file hasn't actually changed.",
  },
  {
    Icon: Ban,
    title: "Ignoring the secondary reasons",
    text: "Refusal letters often list more than one concern. Fixing only the first line and leaving a smaller issue unaddressed gives the next officer an easy reason to refuse again.",
  },
  {
    Icon: Ban,
    title: "Missing the appeal deadline",
    text: "Administrative Review and Schengen appeal windows are strict and calendar-based. Once the deadline passes, your only remaining option is a fresh application, even if your case for review was strong.",
  },
  {
    Icon: Ban,
    title: "Hiding the previous refusal",
    text: "Leaving the 'have you been refused a visa before' question blank or answering no, when application systems already show the refusal, damages credibility far more than the original refusal did.",
  },
  {
    Icon: Ban,
    title: "Applying again with no real change",
    text: "If your bank balance, job, and itinerary look the same as they did three weeks ago, so will the outcome. Give your file time to genuinely improve before you refile.",
  },
];

const relatedResources = [
  { label: "Common Visa Rejection Reasons", href: "/visa-rejection/common-reasons" },
  { label: "Visa Rejection Help", href: "/visa-rejection" },
  { label: "Bank Statement for Visa", href: "/travel-resources/bank-statement-for-visa" },
  { label: "Visa Checklist Generator", href: "/travel-resources/visa-checklist-generator" },
  { label: "DS-160 Form Guide", href: "/target-usa-visa-interview-preparation/ds-160-form-guide" },
  { label: "Spouse Visa Documents", href: "/visa/spouse-visa-documents" },
  { label: "All Visa Services", href: "/visa" },
];

const faqItems = structuredData["@graph"][3].mainEntity;
const howToSteps = structuredData["@graph"][2].step;

// Small helper so every section gets the same load-in animation without any
// client-side JS — pure CSS keyframes defined in the <style> tag below.
const reveal = "animate-fade-up [animation-fill-mode:backwards]";

export default function VisaAppealProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Scoped, dependency-free CSS animation — keeps this a pure Server Component */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.6s ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up { animation: none; }
        }
      `}</style>

      <div className="sr-only" aria-hidden="true">
        <h1>
          Visa Rejection Appeal Process 2026 — How to Appeal or Reapply After Refusal | Eammu
          Holidays
        </h1>
        <p>
          Country-specific guide to the visa appeal and reapplication process for Bangladeshi
          applicants after a visa refusal — Canada, UK, USA, Schengen, and Dubai/UAE visas.
          Covers formal appeals, Administrative Review, common refusal mistakes, and how to
          rebuild a stronger application. By Eammu Holidays — IATA-accredited visa agency in
          Bangladesh.
        </p>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="https://eammu.com">Home</a></li>
            <li><a href="https://eammu.com/visa-rejection">Visa Rejection Help</a></li>
            <li><a href="https://eammu.com/visa-rejection/appeal-process-for-visa">Visa Appeal Process</a></li>
          </ol>
        </nav>
      </div>

      <main className="min-h-screen bg-[#f8fafc] text-gray-800 font-sans ">
        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-[#3a0d0d]  via-[#5c1414] to-[#8a1f1f] text-white py-16 px-4 overflow-hidden relative">
          <div className="max-w-6xl mx-auto text-center relative z-10 mt-8 ">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex justify-center gap-2 text-xs text-red-200 flex-wrap">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-red-400" aria-hidden="true">/</li>
                <li><Link href="/visa-rejection" className="hover:text-white transition-colors">Visa Rejection Help</Link></li>
                <li className="text-red-400" aria-hidden="true">/</li>
                <li className="text-white font-semibold" aria-current="page">Visa Appeal Process</li>
              </ol>
            </nav>

            <div className={`inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6 ${reveal}`}>
              <AlertTriangle className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
              2026 Guide · Eammu Holidays Rejection Help
            </div>

            <h1 className={`text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight ${reveal}`} style={{ animationDelay: "80ms" }}>
              Visa Rejected? Here's the{" "}
              <span className="text-orange-400">Appeal &amp; Reapplication</span> Process,
              Country by Country
            </h1>

            <p className={`text-lg md:text-xl text-red-50/90 max-w-3xl mx-auto leading-relaxed mb-8 ${reveal}`} style={{ animationDelay: "160ms" }}>
              A refusal letter isn't a verdict — it's a checklist. This guide breaks down
              your real options — <strong className="text-white">formal appeal versus
              reapplication</strong> — with the exact deadlines and procedures for{" "}
              <strong className="text-white">Canada, UK, USA, Schengen, and Dubai/UAE</strong>{" "}
              visa refusals.
            </p>

            <div className={`flex flex-wrap justify-center gap-4 ${reveal}`} style={{ animationDelay: "240ms" }}>
              <a
                href="https://wa.me/8801701699743?text=My%20visa%20was%20rejected%2C%20I%20need%20help"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                My Visa Was Rejected — Help Me
              </a>
              <Link
                href="/visa-rejection/common-reasons"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base"
              >
                Why Was I Rejected?
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 space-y-16">

          {/* ── INTRO ── */}
          <section className={reveal}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#8a1f1f] mb-5 border-l-8 border-orange-500 pl-5">
              A Refusal Is a Setback, Not a Dead End
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Getting a <strong className="text-[#8a1f1f]">visa refusal letter</strong> stings,
                especially after weeks of gathering documents and paying fees. But here's what
                most applicants don't realize the first time it happens: embassies are legally
                required, in almost every jurisdiction, to state the reason for refusal. That
                requirement hands you a roadmap. The officer is effectively telling you what
                needs to change before the next application succeeds — the question is whether
                you read that roadmap carefully or just resend the same file and hope.
              </p>
              <p>
                The path forward splits into two very different tracks, and picking the wrong
                one wastes both time and money. A <strong className="text-[#8a1f1f]">formal
                appeal</strong> challenges how the officer read the evidence you already gave
                them. A <strong className="text-[#8a1f1f]">fresh reapplication</strong> gives you
                the chance to submit genuinely stronger evidence. Some countries — the UK and
                most Schengen states — offer both. Others, like the USA and UAE, effectively
                only offer the second. Knowing which door is open to you, and how long it stays
                open, is the first decision that determines everything that follows.
              </p>
              <p>
                If you're not yet sure why your application was refused, start with our{" "}
                <Link href="/visa-rejection/common-reasons" className="text-[#005a31] font-semibold hover:text-orange-500">
                  common visa rejection reasons guide
                </Link>{" "}
                — it breaks down the patterns embassies flag most often, from thin bank
                statements to unclear travel purpose, before you decide how to respond.
              </p>
            </div>
          </section>

          {/* ── APPEAL VS REAPPLY ── */}
          <section className={reveal}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#8a1f1f] mb-3 border-l-8 border-orange-500 pl-5">
              Appeal vs Reapplication — Which One Fits Your Case?
            </h2>
            <p className="text-gray-600 text-base mt-3 max-w-3xl">
              There's no universal right answer — it depends entirely on what your refusal
              letter actually says, and whether that country even offers a formal appeal for
              your visa category. Here's how to tell the two routes apart.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {appealVsReapply.map((a) => (
                <article
                  key={a.title}
                  className={`p-6 rounded-2xl border h-full transition-transform duration-300 hover:-translate-y-1 ${a.accent}`}
                >
                  <div className={`w-12 h-12 rounded-xl ${a.iconWrap} flex items-center justify-center mb-4`}>
                    <a.Icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-black text-gray-900 text-lg mb-3">{a.title}</h3>
                  <p className="text-sm font-bold text-gray-700 mb-2">{a.when}</p>
                  <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                    {a.points.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#005a31]" aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* ── COUNTRY BY COUNTRY ── */}
          <section className={reveal}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#8a1f1f] mb-3 border-l-8 border-orange-500 pl-5">
              Appeal Rules by Destination
            </h2>
            <p className="text-gray-600 text-base mt-3 max-w-3xl mb-8">
              Every country handles refusals differently, and treating them all the same is the
              single biggest reason applicants miss their window. Here's what actually applies
              to each major destination for Bangladeshi travelers.
            </p>
            <div className="space-y-5">
              {countryBreakdown.map((c) => (
                <div
                  key={c.country}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-7 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#8a1f1f] flex items-center justify-center flex-shrink-0">
                        <c.Icon className="w-5 h-5 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="font-black text-gray-900 text-xl">{c.country}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-700 text-xs font-bold px-3 py-1.5 rounded-full">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        {c.deadline}
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-green-50 text-[#005a31] text-xs font-bold px-3 py-1.5 rounded-full">
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        {c.path}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{c.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── HOW TO RESPOND — HowTo ── */}
          <section className={reveal}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#8a1f1f] mb-3 border-l-8 border-orange-500 pl-5">
              5 Steps to Respond to a Visa Refusal
            </h2>
            <div className="space-y-4 mt-8">
              {howToSteps.map((s) => (
                <div
                  key={s.position}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-start"
                >
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

          {/* ── COMMON MISTAKES ── */}
          <section className={`bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm ${reveal}`}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#8a1f1f] mb-5 border-l-8 border-orange-500 pl-5">
              Five Mistakes That Turn One Refusal Into Two
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              A second refusal is almost always more damaging than the first, since it builds a
              visible pattern in your travel history that future officers will see. These are
              the mistakes we see most often in refusal letters that come across our desk.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {commonMistakes.map((m) => (
                <div key={m.title} className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <m.Icon className="w-4.5 h-4.5 text-[#8a1f1f]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{m.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHAT TO IMPROVE ── */}
          <section className={reveal}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#8a1f1f] mb-5 border-l-8 border-orange-500 pl-5">
              Strengthening Your Reapplication
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                A successful reapplication answers the{" "}
                <strong className="text-[#8a1f1f]">specific wording</strong> of your refusal
                letter, not a generic idea of what a "good" application looks like. The
                improvements that move the needle most often include:
              </p>
              <ul className="space-y-3 list-none">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#005a31]" aria-hidden="true" />
                  <span>
                    Strengthening your{" "}
                    <Link href="/travel-resources/bank-statement-for-visa" className="text-[#005a31] font-semibold hover:text-orange-500">
                      bank statement and financial history
                    </Link>{" "}
                    over the months following the refusal, rather than a single large deposit
                    right before you refile, which officers are trained to notice
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#005a31]" aria-hidden="true" />
                  <span>
                    Adding clearer, documented evidence of{" "}
                    <strong>ties to Bangladesh</strong> — an employment letter with your actual
                    leave dates, property documents, or a family or business reason to return
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#005a31]" aria-hidden="true" />
                  <span>
                    Correcting every form error or inconsistency the refusal flagged, down to
                    mismatched dates between your itinerary and your bank statement
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#005a31]" aria-hidden="true" />
                  <span>
                    Writing a short, direct cover letter that names the previous refusal reason
                    and states plainly what has changed since — officers respond far better to
                    this than to an application that pretends the refusal never happened
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#005a31]" aria-hidden="true" />
                  <span>
                    For USA visas, completing a{" "}
                    <Link href="/target-usa-visa-interview-preparation" className="text-[#005a31] font-semibold hover:text-orange-500">
                      mock interview
                    </Link>{" "}
                    to fix the specific answers that likely triggered the 214(b) finding, since
                    the interview — not the paperwork — is usually the deciding factor
                  </span>
                </li>
              </ul>
              <p>
                Eammu Holidays' rejection review service compares your original application to
                the refusal letter line by line, then builds a targeted plan to fix each
                individual issue — whether that means a formal appeal, an Administrative Review,
                or a rebuilt reapplication.
              </p>
            </div>
          </section>

          {/* ── TIMELINE ── */}
          <section className={`bg-[#fff7ed] border border-orange-100 rounded-3xl p-8 md:p-12 ${reveal}`}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center flex-shrink-0">
                <ClipboardCheck className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#8a1f1f]">
                What to Expect, Timeline-Wise
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Applicants often ask how long they should wait before submitting again. There's
                no fixed answer, but a rough guide: if your refusal cited a documentation issue
                you can fix immediately — a missing bank seal, an unsigned form — you can
                reapply within days once the fix is in place. If it cited financial insufficiency
                or weak ties, give your file real time to change; two to four months of a
                stronger, verifiable savings pattern carries far more weight than a rushed
                two-week turnaround.
              </p>
              <p>
                Formal appeal and Administrative Review timelines run on the embassy's clock,
                not yours — expect anywhere from a few weeks to a few months for a decision,
                depending on the country and current caseload. During that window you generally
                cannot submit a fresh application for the same visa category, so factor that
                into any travel dates you're planning around.
              </p>
            </div>
          </section>

          {/* ── FAQ (native <details>, no client JS needed) ── */}
          <section className={reveal}>
            <h2 className="text-2xl md:text-3xl font-black text-[#8a1f1f] mb-8 text-center">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.name}
                  className="border border-gray-200 rounded-2xl p-5 group bg-white transition-colors duration-300 open:border-orange-300"
                >
                  <summary className="font-bold text-[#8a1f1f] cursor-pointer list-none flex justify-between items-center gap-4">
                    <span>{item.name}</span>
                    <Plus className="w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ── RELATED RESOURCES ── */}
          <section className={reveal}>
            <h2 className="text-xl font-black text-[#8a1f1f] mb-6 text-center">
              Related <span className="text-orange-500">Resources</span>
            </h2>
            <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Related visa resources">
              {relatedResources.map((lnk) => (
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

          {/* ── CONCLUSION ── */}
          <section className={`bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm ${reveal}`}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[#005a31] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#8a1f1f]">
                The Short Version
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                A visa refusal tells you exactly what to fix — it's a document worth reading
                twice, not filing away. Start by identifying whether your destination even
                offers a formal appeal, and if it does, note the deadline the same day you
                receive the letter, since that window can close faster than it feels like it
                should. If no appeal exists, or the reasons point to a real gap in your file,
                put your energy into a genuinely stronger reapplication instead of a faster one.
              </p>
              <p>
                The applicants who succeed the second time are rarely the ones who reapplied
                quickest — they're the ones who addressed every line of the refusal letter,
                waited long enough for their financial or employment picture to actually
                improve, and were upfront about the previous refusal rather than hoping it
                wouldn't come up. That pattern holds across Canada, the UK, the USA, Schengen,
                and the UAE, even though the specific procedures differ.
              </p>
              <p className="text-gray-900 font-semibold">
                If you're not sure which path applies to your refusal, send us the letter. It
                costs nothing to find out, and it's the fastest way to stop guessing.
              </p>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className={`bg-[#005a31] text-white rounded-3xl p-10 text-center ${reveal}`}>
            <h2 className="text-2xl md:text-3xl font-black text-orange-400 mb-4">
              Get a Free Review of Your Refusal Letter
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-green-50/90 leading-relaxed mb-8">
              Send us your refusal letter — Eammu Holidays' consultants will identify the exact
              issues and recommend the best path forward, appeal or reapplication.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801701699743?text=I%20want%20a%20free%20review%20of%20my%20visa%20refusal%20letter"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Review My Refusal Letter
              </a>
              <Link
                href="/visa"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base"
              >
                View All Visa Services
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <HomeSeoLinks />
    </>
  );
}