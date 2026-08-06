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
      "DS-160 Form Guide 2026: Who Needs It, Fees, Documents & Step-by-Step | Eammu Holidays",
  },

  description:
    "The complete 2026 DS-160 guide for Bangladeshi USA visa applicants: who must file, MRV fee by category, required documents, a section-by-section walkthrough of the form, visa-specific tips (B1/B2, F-1, J-1), common mistakes, and processing time — from Eammu Holidays' Target USA program.",

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
    "who needs ds-160 form",
    "ds-160 required documents",
    "ds-160 processing time",
    "ds-160 fee amount",
    "mrv fee bangladesh",
    "ds-160 vs ds-260",
    "ds-160 photo requirements",
    "ds-160 barcode number",
    "usa visa form bangladesh 2026",
    "ceac ds-160 bangladesh",
    "ds-160 application id",
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
    title: "DS-160 Form Guide 2026: Fees, Documents & Step-by-Step | Eammu Holidays",
    description:
      "Who needs the DS-160, MRV fee by visa category, required documents, a section-by-section walkthrough, and common mistakes for Bangladeshi USA visa applicants.",
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
      "Who needs the DS-160, MRV fee by category, required documents, and a section-by-section walkthrough for Bangladeshi USA visa applicants.",
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
      headline: "DS-160 Form Guide 2026: Who Needs It, Fees, Documents & Step-by-Step for USA Visa Applicants",
      description:
        "A complete DS-160 guide for Bangladeshi USA visa applicants covering who must file, MRV fees, required documents, a section-by-section walkthrough of the form, visa-specific tips, processing time, and common mistakes.",
      image: "https://eammu.com/preview-banner.webp",
      author: { "@type": "Organization", name: "Eammu Holidays", url: "https://eammu.com" },
      publisher: {
        "@type": "Organization",
        name: "Eammu Holidays",
        logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" },
      },
      datePublished: "2026-01-15",
      dateModified: "2026-08-07",
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
          name: "Gather Your Documents",
          text: "Collect your passport, travel itinerary, national ID number, employment and travel history, family details, and (for students) your SEVIS ID before you start — the session times out after 30 minutes.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Select Your Visa Type & Location",
          text: "Go to the CEAC website, select 'New Application,' choose your visa type (B1/B2, F1, J1, etc.) and the embassy location (Dhaka).",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Upload Your Photo",
          text: "Upload a recent photo meeting U.S. visa photo requirements: 2x2 inches, white background, no glasses, neutral expression, taken within the last 6 months.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Fill Personal & Passport Information",
          text: "Enter your name exactly as it appears on your passport, date of birth, nationality, national identification number, and passport details.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Travel & Contact Information",
          text: "Provide your travel purpose, intended arrival date, U.S. point of contact (if applicable), and current address and phone number.",
        },
        {
          "@type": "HowToStep",
          position: 6,
          name: "Family, Work & Education History",
          text: "Complete sections on family members, current and previous employment, and educational background — be consistent with your supporting documents.",
        },
        {
          "@type": "HowToStep",
          position: 7,
          name: "Security & Background Questions",
          text: "Answer the security questions honestly. Most applicants will answer 'No' to all, but any 'Yes' answer requires an explanation.",
        },
        {
          "@type": "HowToStep",
          position: 8,
          name: "Review, Submit & Pay the MRV Fee",
          text: "Review every section carefully, submit the form, print the DS-160 confirmation page with the barcode, then pay the MRV fee so you can schedule your interview.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who needs to complete the DS-160 form?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anyone applying for a U.S. nonimmigrant (temporary) visa must complete the DS-160, regardless of the purpose of travel. This covers B1/B2 visitor visas, K visas for fiancés and spouses of U.S. citizens, F-1 and M-1 student visas, J-1 exchange visitor visas, H-1B specialty occupation visas, L-1 intracompany transfer visas, O-1 visas for extraordinary ability, and P visas for athletes, artists, and entertainers. Every applicant, including each child, needs their own DS-160.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between DS-160 and DS-260?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The DS-160 is for nonimmigrant (temporary) visas such as tourist, student, and work visas. The DS-260 is a separate form used for immigrant visa applications, such as family- or employment-based green card cases. The two forms are not interchangeable, and using the wrong one will not move your application forward.",
          },
        },
        {
          "@type": "Question",
          name: "How much does the DS-160 / MRV visa fee cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The DS-160 form itself is free to submit. What you pay is the Machine Readable Visa (MRV) application processing fee, which is non-refundable and required before you can schedule your interview. As of 2026 it is generally 185 US dollars for B1/B2, F, and J categories, 205 US dollars for petition-based categories like H, L, O, and P, and 315 US dollars for E treaty visas, with K fiancé visas priced separately. Fees can change, so confirm the current amount on the official U.S. visa website before paying.",
          },
        },
        {
          "@type": "Question",
          name: "Can someone else fill out the DS-160 for me?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Applicants aged 16 or younger, or anyone physically unable to complete the form on their own, can have a third party fill it out on their behalf. That helper must be identified on the 'Sign and Submit' page at the end of the form.",
          },
        },
        {
          "@type": "Question",
          name: "What documents do I need before starting the DS-160?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Have your passport (valid at least 6 months beyond your intended U.S. stay), a travel itinerary, your national ID number, and your Social Security or U.S. Taxpayer ID number if you have one. You'll also need your travel and employment history, basic family details, a recent compliant photo, and — for students — your SEVIS ID from your I-20 or DS-2019 along with your school's address.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to complete the DS-160 form?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Completing the DS-160 form typically takes 60 to 90 minutes if you have all your documents (passport, travel history, employment details) ready beforehand. The form cannot be saved permanently, so it's best to complete it in one sitting or save your Application ID to resume later.",
          },
        },
        {
          "@type": "Question",
          name: "What if I lose my DS-160 Application ID or confirmation page?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your Application ID lets you retrieve an in-progress or submitted DS-160 on the CEAC portal using your secure questions and answers, so keep it somewhere safe as soon as it's generated. If you've already submitted the form and lost the printed confirmation page, you can log back into CEAC with your Application ID to retrieve and reprint it before your interview.",
          },
        },
        {
          "@type": "Question",
          name: "Can I edit the DS-160 after I submit it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Once a DS-160 is submitted, its answers generally cannot be changed. If you notice an error afterward, the usual approach is to raise it with the consular officer at your interview, or in some cases submit a new DS-160 referencing the earlier one — your visa counsellor can advise on the best path for your specific mistake.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a processing time for the DS-160 itself?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The DS-160 form has no separate processing time — once submitted, you immediately receive a confirmation page with a barcode to print and bring to your interview. If your visa is approved at the interview, passport and visa delivery typically takes about 7 to 10 working days, though this varies by embassy or consulate.",
          },
        },
        {
          "@type": "Question",
          name: "What happens after I submit the DS-160 form?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After submitting the DS-160, you receive a confirmation page with a barcode and confirmation number. You then pay the MRV fee, schedule your interview, and bring the printed confirmation page to your visa interview appointment at the U.S. Embassy in Dhaka.",
          },
        },
        {
          "@type": "Question",
          name: "What are common mistakes to avoid on the DS-160 form?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common mistakes include name mismatches with the passport, incorrect dates, inconsistent employment or travel history compared to other documents, uploading a non-compliant photo, picking the wrong visa classification, and leaving the application incomplete past the 30-minute timeout.",
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

const tocItems = [
  { id: "what-is-ds160", label: "What Is the DS-160?" },
  { id: "who-needs-it", label: "Who Needs to File It" },
  { id: "ds160-fee", label: "DS-160 / MRV Fee" },
  { id: "documents", label: "Documents You Need" },
  { id: "form-sections", label: "Form, Section by Section" },
  { id: "steps", label: "Step-by-Step Guide" },
  { id: "by-visa-type", label: "Tips by Visa Type" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "processing-time", label: "Processing Time" },
  { id: "after-submission", label: "After You Submit" },
  { id: "faq", label: "FAQs" },
];

const visaTypes = [
  { code: "B1/B2", title: "Visitor Visas", desc: "For temporary travel for business (B-1), tourism or medical treatment (B-2), or a combination of both." },
  { code: "K", title: "Fiancé & Spouse Visas", desc: "For fiancés and spouses of U.S. citizens, along with their eligible children." },
  { code: "F-1 / M-1", title: "Student Visas", desc: "For students pursuing academic (F-1) or vocational (M-1) studies at a U.S. school or college." },
  { code: "J-1", title: "Exchange Visitor Visas", desc: "For participants in cultural and educational exchange programs in the U.S." },
  { code: "H-1B", title: "Specialty Occupation Visas", desc: "For professionals working in specialty occupations that require specialized knowledge." },
  { code: "L-1", title: "Intracompany Transferee Visas", desc: "For employees transferring within the same company to a U.S. office, branch, or subsidiary." },
  { code: "O-1", title: "Extraordinary Ability Visas", desc: "For individuals with extraordinary ability or achievement in their field." },
  { code: "P", title: "Athlete, Artist & Entertainer Visas", desc: "For athletes, artists, and entertainers coming to the U.S. to perform or compete." },
];

const requiredDocs = [
  { icon: "🛂", title: "Valid Passport", desc: "Must remain valid for at least 6 months beyond your intended stay in the U.S." },
  { icon: "🗺️", title: "Travel Itinerary", desc: "Your planned arrival date, purpose of travel, and where you intend to stay." },
  { icon: "🪪", title: "National ID Number", desc: "The national identification number issued by your home country." },
  { icon: "🔢", title: "SSN / U.S. Taxpayer ID", desc: "If you previously held a Social Security Number or U.S. Taxpayer ID, have it ready." },
  { icon: "👪", title: "Family & Travel History", desc: "Basic biographical details for family members and travel companions, plus your past travel and employment history." },
  { icon: "🎓", title: "SEVIS ID (Students)", desc: "F-1/M-1 applicants need the SEVIS ID from their I-20 or DS-2019, plus the school's address." },
  { icon: "💼", title: "Form I-129 (Workers)", desc: "Temporary workers should keep a copy of their approved I-129 petition on hand if one exists." },
  { icon: "📸", title: "Recent Photo", desc: "A recent 2x2 inch (51x51mm) photo, taken within the last 6 months, on a white background, meeting U.S. visa photo requirements." },
];

const formSections = [
  {
    n: "01",
    title: "Personal Information (Parts 1 & 2)",
    desc: "Full name exactly as printed on your passport, any other names used, sex, marital status, date and place of birth, and national identification, passport, and driving licence numbers where applicable.",
  },
  {
    n: "02",
    title: "Travel Information",
    desc: "Purpose of your trip, the specific visa classification you're applying for, intended date of arrival, length of stay, and address where you'll stay in the U.S.",
  },
  {
    n: "03",
    title: "Travel Companions",
    desc: "Whether anyone is travelling with you, their relationship to you, and whether they are part of the same group or applying separately.",
  },
  {
    n: "04",
    title: "Previous U.S. Travel & Visa History",
    desc: "Past U.S. visits, prior visas (approved, denied, or revoked), and, for some applicants, U.S. driver's licence details.",
  },
  {
    n: "05",
    title: "U.S. Point of Contact",
    desc: "Name and contact details of a person or organisation you'll be visiting, working with, or studying with in the United States.",
  },
  {
    n: "06",
    title: "Family Information",
    desc: "Details about your parents and, where relevant, your spouse and other immediate family members, including whether any relatives are U.S. citizens or green card holders.",
  },
  {
    n: "07",
    title: "Work, Education & Training",
    desc: "Current occupation and employer, income, and up to five years of prior employment and education history — this must line up with your bank statements and employment letter.",
  },
  {
    n: "08",
    title: "Security & Background",
    desc: "A series of yes/no questions covering health, criminal history, and prior immigration violations. Most applicants answer 'No' throughout; any 'Yes' needs a clear, honest explanation.",
  },
];

const visaTips = [
  {
    tag: "B1/B2",
    title: "Visitor Visa Tips",
    points: [
      "State your travel purpose clearly — business meetings, tourism, or medical treatment — and keep it consistent with your bank statements and invitation letter, if any.",
      "List a realistic, specific U.S. itinerary rather than a vague 'sightseeing' answer.",
      "Be ready to show ties to Bangladesh: job, property, or family, since B1/B2 is a temporary-intent visa.",
    ],
  },
  {
    tag: "F-1",
    title: "Student Visa Tips",
    points: [
      "Your SEVIS ID and school details on the DS-160 must exactly match your I-20.",
      "Be consistent about your intended major and how it connects to your academic background — officers often ask about this at interview.",
      "Have your funding source (self, family, scholarship, or loan) ready to explain, matching your bank statements.",
    ],
  },
  {
    tag: "J-1",
    title: "Exchange Visitor Tips",
    points: [
      "Use the program details from your DS-2019 exactly as issued by your sponsor organisation.",
      "Government-sponsored program participants (program codes starting with G) may be exempt from the MRV fee — confirm your program code with your sponsor.",
      "Be clear about your plan to return home after the exchange program ends, since many J-1 categories carry a two-year home-residency expectation.",
    ],
  },
];

const mistakes = [
  { icon: "📛", title: "Name Mismatch with Passport", desc: "Even minor spelling differences between your DS-160 and passport can cause delays or red flags at the interview." },
  { icon: "🖼️", title: "Non-Compliant Photo", desc: "Photos with glasses, shadows, non-white backgrounds, or incorrect dimensions are a leading cause of rejected uploads." },
  { icon: "⏱️", title: "Session Timeout", desc: "The DS-160 portal logs you out after 30 minutes of inactivity. Save your Application ID frequently to avoid losing progress." },
  { icon: "📑", title: "Inconsistent Travel/Work History", desc: "Your DS-160 answers must match your bank statements, employment letters, and travel history shown to the visa officer." },
  { icon: "❓", title: "Vague Security Answers", desc: "Answering security questions inconsistently or providing incomplete explanations for 'Yes' answers can trigger additional scrutiny." },
  { icon: "🖨️", title: "Forgetting the Confirmation Page", desc: "You must print and bring the DS-160 confirmation page with barcode to your interview — it cannot be skipped." },
  { icon: "🏷️", title: "Wrong Visa Classification", desc: "Selecting the wrong visa category on the form can misroute your entire application and interview questions." },
  { icon: "💳", title: "Paying the Fee Too Early or Late", desc: "The MRV fee receipt is tied to a 12-month validity window — pay it close to when you plan to schedule your interview, not months in advance." },
];

export default function DS160FormGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="sr-only" aria-hidden="true">
        <h1>DS-160 Form Guide 2026 — Who Needs It, Fees, Documents & Step-by-Step for USA Visa | Eammu Holidays</h1>
        <p>
          Complete DS-160 form guide for Bangladeshi USA visa applicants. Who needs to file,
          eligible visa types, the MRV fee by category, required documents, a section-by-section
          walkthrough of the online nonimmigrant visa application, photo requirements, visa-type
          specific tips, processing time, common mistakes, and confirmation page tips for B1/B2,
          K, F-1, M-1, J-1, H-1B, L-1, O-1, and P visas. By Eammu Holidays — Target USA visa
          interview preparation program.
        </p>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="https://eammu.com">Home</a></li>
            <li><a href="https://eammu.com/target-usa-visa-interview-preparation">Target USA Visa Interview Preparation</a></li>
            <li><a href="https://eammu.com/ds-160-form-guide">DS-160 Form Guide</a></li>
          </ol>
        </nav>
      </div>

      <main className="min-h-screen mt-8 bg-[#f8fafc] text-gray-800 font-sans">
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
              🇺🇸 2026 Guide · Updated August 2026 · Target USA Program by Eammu Holidays
            </div>

            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              DS-160 Form Guide 2026: Who Needs It, Fees,{" "}
              <span className="text-orange-400">Documents</span> & Step-by-Step
            </h1>

            <p className="text-lg md:text-xl text-blue-50/90 max-w-3xl mx-auto leading-relaxed mb-8">
              The <strong className="text-white">DS-160</strong> is the most important form in your
              USA visa application. This guide covers who needs to file, the MRV fee by category,
              the documents to gather, a section-by-section walkthrough, and visa-specific tips for{" "}
              <strong className="text-white">B1/B2, K, F-1, M-1, J-1, H-1B, L-1, O-1, and P
              visas</strong>.
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

          {/* ── QUICK ANSWER (featured-snippet target) ── */}
          <section className="bg-white border-2 border-[#0d3a66]/10 rounded-3xl p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-wider text-orange-500 mb-2">Quick Answer</p>
            <p className="text-lg text-gray-800 leading-relaxed">
              The <strong>DS-160</strong> is the free, mandatory online form every applicant for a
              U.S. nonimmigrant (temporary) visa must submit through the CEAC portal before their
              visa interview. It covers your personal, travel, family, and work details. After
              submitting, you print a confirmation page with a barcode, pay the separate MRV
              application fee, and bring the confirmation page to your interview at the U.S.
              Embassy in Dhaka.
            </p>
          </section>

          {/* ── TABLE OF CONTENTS ── */}
          <nav aria-label="Table of contents" className="bg-[#0d3a66] rounded-3xl p-6 md:p-8">
            <p className="text-orange-400 font-black text-xs uppercase tracking-wider mb-4">On This Page</p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-blue-50/90 text-sm list-decimal list-inside">
              {tocItems.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="hover:text-orange-400 transition-colors">
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ── INTRO ── */}
          <section id="what-is-ds160" className="scroll-mt-24">
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
                It's worth noting the DS-160 is only for <em>nonimmigrant</em> (temporary) visas.
                If you're applying for an immigrant visa or green card through a consulate, that
                process uses a different form, the DS-260, instead.
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

          {/* ── WHO NEEDS TO COMPLETE DS-160 ── */}
          <section id="who-needs-it" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3a66] mb-3 border-l-8 border-orange-500 pl-5">
              Who Needs to Complete Form DS-160?
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Anyone applying for a temporary (nonimmigrant) visa to the United States needs to
              complete the DS-160 — regardless of the purpose of the trip. Below are the most
              common visa categories that require it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {visaTypes.map((v) => (
                <article key={v.code} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-start">
                  <div className="w-14 h-10 rounded-lg bg-[#0d3a66] text-white flex items-center justify-center font-black text-xs flex-shrink-0">
                    {v.code}
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 text-sm mb-1">{v.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6 bg-orange-50 border border-orange-200 rounded-2xl p-5 text-sm text-gray-700 leading-relaxed">
              <strong className="text-[#0d3a66]">Good to know:</strong> Every applicant needs their
              own DS-160, including each child traveling with you. If an applicant is 16 or
              younger, or is physically unable to complete the form themselves, a third party can
              help — that person must be identified on the "Sign and Submit" page at the end of
              the form. Not sure which visa category fits your trip? Message us on WhatsApp and
              our team will help you confirm it before you start.
            </div>
          </section>

          {/* ── FEE ── */}
          <section id="ds160-fee" className="scroll-mt-24 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3a66] mb-5 border-l-8 border-orange-500 pl-5">
              DS-160 & MRV Fee: How Much Does It Cost?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg mb-8">
              <p>
                Submitting the DS-160 form itself is free. What you actually pay is the{" "}
                <strong className="text-[#0d3a66]">Machine Readable Visa (MRV) application
                processing fee</strong> — a separate, non-refundable charge required before you can
                schedule your interview. The fee amount depends on your visa category and is paid
                after you submit the DS-160.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-100">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#0d3a66] text-white">
                  <tr>
                    <th className="px-5 py-3 font-black">Visa Category</th>
                    <th className="px-5 py-3 font-black">Examples</th>
                    <th className="px-5 py-3 font-black">Typical 2026 Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-semibold text-[#0d3a66]">Non-petition based</td>
                    <td className="px-5 py-3 text-gray-600">B1/B2, F-1, M-1, J-1</td>
                    <td className="px-5 py-3 text-gray-600">≈ $185 USD</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-semibold text-[#0d3a66]">Petition based</td>
                    <td className="px-5 py-3 text-gray-600">H, L, O, P, Q, R</td>
                    <td className="px-5 py-3 text-gray-600">≈ $205 USD</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-semibold text-[#0d3a66]">Treaty trader / investor</td>
                    <td className="px-5 py-3 text-gray-600">E-1, E-2, E-3</td>
                    <td className="px-5 py-3 text-gray-600">≈ $315 USD</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-semibold text-[#0d3a66]">Fiancé(e) visa</td>
                    <td className="px-5 py-3 text-gray-600">K-1, K-2</td>
                    <td className="px-5 py-3 text-gray-600">≈ $265 USD</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              Fee amounts are set by the U.S. Department of State and can change — always confirm
              the current fee on the official U.S. visa appointment website for Bangladesh before
              paying. Some categories, including certain U.S. government-sponsored J-1 exchange
              programs and diplomatic visas, are fee-exempt. A separate, larger Visa Integrity Fee
              was introduced by law in 2025 for issued visas; check the official site for whether
              it applies and is being collected at the time you apply. The MRV fee receipt is
              generally valid for 12 months from payment, so pay it close to when you plan to book
              your interview.
            </p>
          </section>

          {/* ── REQUIRED DOCUMENTS ── */}
          <section id="documents" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3a66] mb-3 border-l-8 border-orange-500 pl-5">
              Documents You'll Need Before Starting
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Have everything below ready before you open the DS-160 — the session times out
              after 30 minutes of inactivity, and gathering documents midway will cost you
              progress.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requiredDocs.map((d) => (
                <article key={d.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-3xl mb-3">{d.icon}</div>
                  <h3 className="font-black text-[#0d3a66] text-base mb-2">{d.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ── FORM SECTIONS EXPLAINED ── */}
          <section id="form-sections" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3a66] mb-3 border-l-8 border-orange-500 pl-5">
              Inside the DS-160: What Each Section Actually Asks
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              The DS-160 is organized into several parts. Here's what each one covers, so nothing
              catches you off guard mid-form.
            </p>
            <div className="space-y-4">
              {formSections.map((f) => (
                <div key={f.n} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-5 items-start">
                  <div className="text-2xl font-black text-orange-500/70 flex-shrink-0 w-12">{f.n}</div>
                  <div>
                    <h3 className="font-black text-gray-900 text-sm mb-1">{f.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── STEP BY STEP (HowTo) ── */}
          <section id="steps" className="scroll-mt-24">
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

          {/* ── TIPS BY VISA TYPE ── */}
          <section id="by-visa-type" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3a66] mb-3 border-l-8 border-orange-500 pl-5">
              DS-160 Tips by Visa Type
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              The base form is the same for everyone, but a few details deserve extra attention
              depending on the visa you're applying for.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visaTips.map((v) => (
                <article key={v.tag} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="inline-block bg-[#0d3a66] text-white text-xs font-black px-3 py-1 rounded-full mb-3">
                    {v.tag}
                  </div>
                  <h3 className="font-black text-[#0d3a66] text-base mb-3">{v.title}</h3>
                  <ul className="space-y-2">
                    {v.points.map((p, i) => (
                      <li key={i} className="text-gray-600 text-sm leading-relaxed flex gap-2">
                        <span className="text-orange-500 flex-shrink-0">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* ── COMMON MISTAKES ── */}
          <section id="mistakes" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3a66] mb-3 border-l-8 border-orange-500 pl-5">
              8 Common DS-160 Mistakes That Hurt Your Application
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

          {/* ── PROCESSING TIME ── */}
          <section id="processing-time" className="scroll-mt-24 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3a66] mb-5 border-l-8 border-orange-500 pl-5">
              DS-160 Processing Time — What to Expect
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                The DS-160 itself has{" "}
                <strong className="text-[#0d3a66]">no separate processing time</strong>. As soon
                as you submit it, you receive a confirmation page with a barcode and confirmation
                number — print this page immediately, since you'll need it at your visa interview.
              </p>
              <p>
                If your visa is approved at the interview, passport and visa delivery typically
                takes about <strong className="text-[#0d3a66]">7 to 10 working days</strong>, plus
                courier time — though this varies by embassy or consulate, so it's worth
                confirming current timelines with the U.S. Embassy in Dhaka closer to your
                interview date.
              </p>
            </div>
          </section>

          {/* ── AFTER DS-160 ── */}
          <section id="after-submission" className="scroll-mt-24 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
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
          <section id="faq" className="scroll-mt-24">
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