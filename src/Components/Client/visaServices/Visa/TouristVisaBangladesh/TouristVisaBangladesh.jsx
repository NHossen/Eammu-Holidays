"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaPassport, FaCheckCircle, FaFileAlt,
  FaGlobeAmericas, FaClock, FaHeadset,
  FaArrowRight, FaMapMarkerAlt, FaSuitcase,
  FaUserShield, FaHandHoldingHeart, FaPlaneDeparture,
  FaBuilding, FaFileSignature, FaHistory, FaExclamationTriangle,
  FaPlane, FaMoneyBillWave, FaClipboardList, FaShieldAlt
} from "react-icons/fa";
import TouristVisa from "@/Components/Client/visaServices/Visa/TouristVisaBangladesh/TouristVisa/TouristVisa";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    title: "Free profile analysis",
    desc: "Deep assessment of your financial standing, employment, home ties, and travel history to build the strongest possible application.",
  },
  {
    title: "Error-free documentation",
    desc: "Personalised checklists covering bank statements, NOC, Trade License, tax returns, and IATA-standard flight and hotel reservations.",
  },
  {
    title: "Appointment & submission",
    desc: "Fast-track VFS and embassy slot booking. We submit your complete file on your behalf with a professional cover letter.",
  },
  {
    title: "Visa collection & briefing",
    desc: "Track your passport in real time. We brief you on entry conditions, part-time work rules, and customs before you travel.",
  },
];

const FEATURE_BOXES = [
  {
    icon: <FaPassport />,
    title: "USA B1/B2 Visa",
    desc: "5–10 year multiple-entry tourist visa. Embassy interview prep and I-20 documentation included.",
    color: "bg-blue-50 text-blue-600",
    href: "/visa/united-states-visa",
  },
  {
    icon: <FaGlobeAmericas />,
    title: "Schengen 2026",
    desc: "Access all 29 Schengen countries including Bulgaria and Romania. Travel insurance and ITF arranged.",
    color: "bg-orange-50 text-orange-600",
    href: "/schengen-visa",
  },
  {
    icon: <FaFileAlt />,
    title: "UK Visitor Visa",
    desc: "Standard 6-month to 10-year UK visitor visa expertise. CAS letter and financial proof guidance.",
    color: "bg-red-50 text-red-600",
    href: "/visa/united-kingdom-visa",
  },
  {
    icon: <FaPlaneDeparture />,
    title: "Asia E-Visas",
    desc: "Vietnam, Thailand, Malaysia, and UAE e-visas processed in 24–72 hours from Bangladesh.",
    color: "bg-green-50 text-green-600",
    href: "/visa/e-visa",
  },
];

const REJECTION_REASONS = [
  { icon: <FaMoneyBillWave />, title: "Weak financial proof", desc: "Insufficient balance, irregular transactions, or improperly formatted bank statements are the #1 rejection cause." },
  { icon: <FaClipboardList />, title: "Incomplete documents", desc: "Missing NOC, trade licence, or incorrect photo specifications result in immediate rejection for Bangladeshi applicants." },
  { icon: <FaShieldAlt />, title: "Poor home ties", desc: "No property ownership, no dependants, or unstable employment signals low intention to return — a major risk factor." },
  { icon: <FaExclamationTriangle />, title: "Previous refusals", desc: "Undisclosed past rejections or inconsistent travel history can trigger automatic refusal from multiple embassies." },
];

const INTERNAL_LINKS = [
  { label: "Schengen visa guide 2026",                href: "/schengen-visa",                                             icon: "🇪🇺" },
  { label: "Dubai visa application",                  href: "/our-services/visa/dubai-visa-application",                  icon: "🇦🇪" },
  { label: "Student visa from Bangladesh",            href: "/our-services/visa-services/student-visa-from-bangladesh",   icon: "🎓" },
  { label: "Work visa from Bangladesh",               href: "/our-services/visa-services/work-visa-from-bangladesh",      icon: "💼" },
  { label: "E-visa destinations",                     href: "/visa/e-visa",                                               icon: "⚡" },
  { label: "Dubai residents visa guide",              href: "/visa/dubai-residents",                                      icon: "🏙️" },
  { label: "India visa from Bangladesh",              href: "/visa/india",                                                icon: "🇮🇳" },
  { label: "All visa services",                       href: "/visa",                                                      icon: "🌍" },
  { label: "Visa checklist generator",                href: "/travel-resources/visa-checklist-generator",                  icon: "✓" },
  { label: "Visa processing time tracker",            href: "/travel-resources/visa-processing-time-tracker",             icon: "⏱" },
  { label: "Visa rejection rates Bangladesh",         href: "/visa-rejection",                                            icon: "📊" },
  { label: "Scholarships by country",                 href: "/scholarships",                                              icon: "🏆" },
  { label: "IELTS preparation center",                href: "/target-ielts-immigration-center",                           icon: "📝" },
  { label: "USA visa interview preparation",          href: "/target-usa-visa-interview-preparation",                     icon: "🎤" },
  { label: "Study abroad guide",                      href: "/study-abroad",                                              icon: "📚" },
  { label: "Online travel agency Bangladesh",         href: "/online-travel-agency-bangladesh",                           icon: "🖥️" },
  { label: "Contact Cumilla office",                  href: "/contact/travel-agency-bangladesh",                          icon: "📍" },
  { label: "Contact Dubai office",                    href: "/contact/travel-agency-dubai",                               icon: "🏢" },
];

const FAQ_ITEMS = [
  {
    question: "What documents are required for a tourist visa from Bangladesh?",
    answer:
      "Core documents include a valid Bangladeshi passport (minimum 6 months validity), bank statements for the last 3–6 months showing adequate funds, an NOC from your employer or Trade Licence for business owners, IATA-standard hotel bookings and flight reservations, travel insurance (mandatory for Schengen), 2 recent passport photos meeting embassy specs, a detailed travel itinerary, and a professional cover letter. Eammu Holidays prepares all of these for you.",
    linkHref: "/travel-resources/visa-checklist-generator",
    linkLabel: "Generate your free visa document checklist",
  },
  {
    question: "How long does tourist visa processing take from Bangladesh?",
    answer:
      "Processing times in 2026: UAE/Dubai e-visa 24–72 hours, Vietnam e-visa 3–5 business days, Schengen visa 15–30 working days, UK Standard Visitor 3–8 weeks, Canada tourist visa 4–8 weeks, USA B1/B2 2–4 months (interview required). Check current wait times using our visa processing time tracker.",
    linkHref: "/travel-resources/visa-processing-time-tracker",
    linkLabel: "Track current processing times",
  },
  {
    question: "Why do tourist visa applications from Bangladesh get rejected?",
    answer:
      "The most common reasons are: weak bank balance or irregular transactions, poor home ties (no property, no dependants), incomplete documents (missing NOC or wrong photo format), inconsistent travel purpose, and undisclosed prior rejections. Our consultants identify and fix every one of these issues before you submit.",
    linkHref: "/visa-rejection",
    linkLabel: "Check tourist visa rejection rates by country",
  },
  {
    question: "Can Eammu Holidays help after a tourist visa rejection?",
    answer:
      "Yes. Our rejection recovery service analyses your refusal letter, identifies the exact grounds for rejection, rebuilds your financial and home-tie documentation, writes a stronger cover letter, and resubmits a compelling application. Most clients successfully reapply within 4–8 weeks.",
    linkHref: "/contact",
    linkLabel: "Book a free rejection analysis",
  },
  {
    question: "Does Eammu Holidays provide hotel and flight reservations for visa applications?",
    answer:
      "Yes. We provide IATA-standard dummy flight reservations and confirmed hotel booking letters accepted by Schengen embassies, the UK Home Office, the US Embassy, and VFS Global Bangladesh. These are required documents — not actual ticket purchases — and are fully legitimate for visa application purposes.",
    linkHref: "/contact/travel-agency-bangladesh",
    linkLabel: "Contact our Cumilla office",
  },
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

const FeatureBox = ({ icon, title, desc, color, href }) => (
  <motion.article
    whileHover={{ y: -8 }}
    className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-50 flex flex-col items-center text-center group"
  >
    <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm`} aria-hidden="true">
      {icon}
    </div>
    <h3 className="text-xl font-black text-gray-800 mb-3 uppercase tracking-tighter">{title}</h3>
    <p className="text-[11px] text-gray-500 leading-relaxed font-bold uppercase tracking-widest mb-4">{desc}</p>
    {href && (
      <Link href={href} className="text-xs text-[#005a31] font-semibold hover:underline inline-flex items-center gap-1">
        Full guide <FaArrowRight className="text-[10px]" />
      </Link>
    )}
  </motion.article>
);

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-12 h-12 bg-white shadow-md rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all" aria-hidden="true">
      {icon}
    </div>
    <span className="font-bold text-gray-700 text-sm md:text-base">{text}</span>
  </div>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const TouristVisaBangladesh = () => {
  return (
    <main className="bg-[#fcfcfc] min-h-screen font-sans overflow-x-hidden" itemScope itemType="https://schema.org/WebPage">
      <meta itemProp="name" content="Tourist Visa from Bangladesh 2026 — Eammu Holidays" />
      <meta itemProp="description" content="Expert tourist visa consultancy from Bangladesh. USA B1/B2, UK Visitor, Canada, Schengen, Dubai, Japan and 200+ countries. 98% approval rate." />

      {/* ── HERO (TouristVisa component handles the slideshow, search, country grid) ── */}
      <TouristVisa />

      {/* ── TRUSTED PARTNER SECTION ── */}
      <section
        id="services"
        aria-labelledby="trusted-partner-heading"
        className="py-16 md:py-24 container mx-auto px-6"
      >
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Bangladesh&apos;s most trusted tourist visa consultancy
            </p>
            <h2
              id="trusted-partner-heading"
              className="text-3xl md:text-5xl font-black text-[#005a31] mb-6 leading-tight"
            >
              Your Trusted Partner for <br />
              <span className="text-orange-500">Global Tourist Visas from Bangladesh</span>
            </h2>
            <div className="prose prose-slate max-w-none text-gray-600 mb-8">
              <p className="text-base md:text-lg leading-relaxed">
                Applying for a <strong>tourist visa from Bangladesh</strong> in 2026 requires more than just filling a form. At <strong>Eammu Holidays</strong>, we focus on the two biggest rejection triggers — <strong>home ties</strong> and <strong>financial solvency</strong>. Whether you are a business owner with a Trade Licence or a service holder needing an NOC, we customise your complete file to current embassy standards. Our consultants have processed over <strong>12,000 Bangladeshi passports</strong> with a <strong>98% approval rate</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <FaFileSignature className="text-orange-500 mb-2 text-xl" aria-hidden="true" />
                <h3 className="font-bold text-gray-800 text-sm">Custom visa checklists</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Tailored to your profession, income source, and destination.{" "}
                  <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">
                    Generate yours free →
                  </Link>
                </p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <FaHistory className="text-[#005a31] mb-2 text-xl" aria-hidden="true" />
                <h3 className="font-bold text-gray-800 text-sm">Rejection recovery</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Expert analysis of your refusal letter and a rebuilt application.{" "}
                  <Link href="/visa-rejection" className="text-[#005a31] font-semibold hover:underline">
                    Check rejection rates →
                  </Link>
                </p>
              </div>
            </div>

            <ul className="space-y-4" aria-label="Tourist visa services included">
              {[
                { text: "IATA-standard flight & hotel reservations for visa application", href: "/travel-resources/visa-checklist-generator" },
                { text: "Professional cover letter & detailed travel itinerary writing", href: "/contact" },
                { text: "Embassy interview coaching for USA B1/B2 and Schengen visas", href: "/target-usa-visa-interview-preparation" },
                { text: "Bank statement audit & financial document formatting", href: "/contact/travel-agency-bangladesh" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-50">
                  <FaCheckCircle className="text-green-600 text-lg flex-shrink-0" aria-hidden="true" />
                  <span className="font-bold text-gray-700 text-sm">
                    {item.text}{" "}
                    <Link href={item.href} className="text-[#005a31] hover:underline font-semibold">→</Link>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURE_BOXES.map((f) => (
              <FeatureBox key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section aria-label="Tourist visa success statistics" className="bg-[#005a31] py-12">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "98%",  label: "Approval rate" },
            { stat: "12k+", label: "Passports processed" },
            { stat: "200+", label: "Countries covered" },
            { stat: "24/7", label: "Expert support" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="text-3xl md:text-5xl font-black text-orange-400">{stat}</p>
              <p className="text-white text-[10px] uppercase font-bold tracking-widest mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4-STEP PROCESS ── */}
      <section aria-labelledby="process-heading" className="py-16 md:py-24 container mx-auto px-6">
        <h2
          id="process-heading"
          className="text-3xl md:text-5xl font-black text-center mb-4 text-[#005a31] uppercase italic"
        >
          Our 4-Step Tourist Visa Success Method
        </h2>
        <p className="text-center text-sm text-gray-500 max-w-xl mx-auto mb-16">
          Every tourist visa application from Bangladesh follows our proven process — from free profile analysis to passport collection.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <div className="w-16 h-16 bg-orange-500 text-white rounded-3xl flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-xl" aria-hidden="true">
                {idx + 1}
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-800">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── REJECTION REASONS ── */}
      <section aria-labelledby="rejection-heading" className="py-16 md:py-20 bg-orange-50 border-y border-orange-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              id="rejection-heading"
              className="text-3xl md:text-4xl font-black text-gray-800 mb-4"
            >
              Why Tourist Visas from Bangladesh Get Rejected
            </h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
              Understanding these reasons lets you fix them before you apply. Eammu Holidays addresses every one of these in your file.{" "}
              <Link href="/visa-rejection" className="text-[#005a31] font-semibold hover:underline">
                Check country-specific rejection rates →
              </Link>
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REJECTION_REASONS.map((r) => (
              <div key={r.title} className="bg-white p-6 rounded-2xl border border-orange-100 shadow-sm">
                <div className="text-orange-500 text-2xl mb-4" aria-hidden="true">{r.icon}</div>
                <h3 className="font-black text-gray-800 text-base mb-2">{r.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/travel-resources/visa-checklist-generator"
              className="px-8 py-4 bg-[#005a31] text-white rounded-xl font-bold text-sm hover:bg-black transition"
            >
              Generate my visa checklist
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-[#005a31] text-[#005a31] rounded-xl font-bold text-sm hover:bg-[#005a31] hover:text-white transition"
            >
              Book a free rejection assessment
            </Link>
          </div>
        </div>
      </section>

      {/* ── RELATED VISA RESOURCES ── */}
      <section aria-labelledby="resources-heading" className="py-16 container mx-auto px-6">
        <h2
          id="resources-heading"
          className="text-2xl md:text-3xl font-black text-[#005a31] mb-2"
        >
          Tourist Visa Tools & Related Services
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          Everything you need to apply for a tourist visa from Bangladesh — from free tools to expert consultancy.
        </p>
        <div className="flex flex-wrap gap-3">
          {INTERNAL_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:border-[#005a31] hover:text-[#005a31] transition"
            >
              <span aria-hidden="true">{l.icon}</span> {l.label}
            </Link>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        aria-labelledby="faq-heading"
        className="py-20 bg-slate-50 border-y border-slate-200"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2
            id="faq-heading"
            className="text-3xl md:text-5xl font-black text-[#005a31] mb-4 text-center tracking-tighter italic"
          >
            Tourist Visa FAQ — Bangladesh 2026
          </h2>
          <p className="text-center text-sm text-gray-500 mb-12">
            More questions?{" "}
            <Link href="/contact" className="text-[#005a31] font-semibold hover:underline">
              Contact our tourist visa experts
            </Link>{" "}
            or{" "}
            <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-semibold hover:underline">
              visit our Cumilla office
            </Link>
            .
          </p>
          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {FAQ_ITEMS.map((faq) => (
              <div
                key={faq.question}
                className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm"
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3
                  className="text-lg md:text-xl font-black text-[#005a31] mb-3 flex items-start gap-3"
                  itemProp="name"
                >
                  <span className="bg-orange-100 text-orange-600 w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1" aria-hidden="true">Q</span>
                  {faq.question}
                </h3>
                <div itemScope itemType="https://schema.org/Answer">
                  <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed ml-9 mb-3" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
                {faq.linkHref && (
                  <Link href={faq.linkHref} className="ml-9 text-xs text-[#005a31] font-semibold hover:underline inline-flex items-center gap-1">
                    {faq.linkLabel} <FaArrowRight className="text-[10px]" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANCH INFO ── */}
      <section aria-labelledby="office-heading" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="bg-orange-500 text-white px-5 py-1.5 rounded-xl text-[10px] font-black mb-6 inline-block uppercase tracking-widest">
              Free tourist visa counseling
            </span>
            <h2 id="office-heading" className="text-3xl md:text-4xl font-black text-[#005a31] mb-6">
              Expert Tourist Visa Advice is Just a Visit Away
            </h2>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
              Visit us in Cumilla or connect online. Eammu Holidays also has offices in{" "}
              <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-semibold hover:underline">Dubai</Link>
              ,{" "}
              <Link href="/contact/travel-agency-armenia" className="text-[#005a31] font-semibold hover:underline">Armenia</Link>
              , and{" "}
              <Link href="/contact/travel-agency-georgia" className="text-[#005a31] font-semibold hover:underline">Georgia</Link>
              .
            </p>
            <address className="not-italic space-y-6">
              <ContactInfo icon={<FaMapMarkerAlt />} text="Gomoti Tower (4th Floor), Cantonment, Cumilla, Bangladesh" />
              <ContactInfo icon={<FaBuilding />} text="Branch offices: Dhaka & Dubai, UAE" />
              <ContactInfo icon={<FaHeadset />} text="+8801701699743" />
              <ContactInfo icon={<FaClock />} text="Saturday – Thursday, 10 AM – 7 PM" />
            </address>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact/travel-agency-bangladesh"
                className="px-6 py-3 bg-[#005a31] text-white rounded-xl font-bold text-sm hover:bg-black transition"
              >
                Visit Cumilla office
              </Link>
              <Link
                href="/contact/travel-agency-dubai"
                className="px-6 py-3 border border-[#005a31] text-[#005a31] rounded-xl font-bold text-sm hover:bg-[#005a31] hover:text-white transition"
              >
                Contact Dubai office
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full bg-white h-64 md:h-80 rounded-[3rem] shadow-2xl border-8 border-white overflow-hidden relative">
            <Image
              src="/eammuicon.jpg"
              alt="Eammu Holidays tourist visa office in Cumilla Bangladesh"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── SEO TEXT SECTION ── */}
      <section aria-labelledby="guide-heading" className="bg-gray-50 border-t border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="guide-heading" className="text-2xl font-black text-gray-900 mb-5">
            Tourist Visa from Bangladesh — Complete Guide 2026
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-500 leading-relaxed">
            <div className="space-y-4">
              <p>
                Eammu Holidays is Bangladesh&apos;s leading tourist visa consultancy, helping thousands of Bangladeshi travelers
                secure visas for{" "}
                <Link href="/visa/united-states-visa" className="text-[#005a31] font-semibold hover:underline">USA</Link>,{" "}
                <Link href="/visa/united-kingdom-visa" className="text-[#005a31] font-semibold hover:underline">UK</Link>,{" "}
                <Link href="/visa/canada-visa" className="text-[#005a31] font-semibold hover:underline">Canada</Link>,{" "}
                <Link href="/schengen-visa" className="text-[#005a31] font-semibold hover:underline">Schengen</Link>,{" "}
                <Link href="/visa/japan-visa" className="text-[#005a31] font-semibold hover:underline">Japan</Link>,{" "}
                <Link href="/visa/australia-visa" className="text-[#005a31] font-semibold hover:underline">Australia</Link>, and{" "}
                <Link href="/visa" className="text-[#005a31] font-semibold hover:underline">200+ destinations</Link> worldwide.
                Our embassy-certified consultants prepare every document to the exact specification required by each embassy.
              </p>
              <p>
                From{" "}
                <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">
                  bank statement formatting and visa checklist generation
                </Link>{" "}
                to NOC drafting, photo compliance, and cover letter writing — we handle everything so your application is complete, accurate, and approved.
                Bangladeshi travelers planning their first trip abroad or recovering from a{" "}
                <Link href="/visa-rejection" className="text-[#005a31] font-semibold hover:underline">prior visa rejection</Link>{" "}
                can rely on our end-to-end consultancy.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Our 2026 tourist visa guides are updated monthly based on official embassy circulars and{" "}
                <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#005a31] font-semibold hover:underline">
                  VFS Global processing time updates
                </Link>
                . We track policy changes so you don&apos;t have to — every checklist, fee, and processing timeline is verified before publication.
              </p>
              <p>
                Beyond tourist visas, Eammu Holidays also handles{" "}
                <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                  student visas
                </Link>
                ,{" "}
                <Link href="/our-services/visa-services/work-visa-from-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                  work visas
                </Link>
                ,{" "}
                <Link href="/scholarships" className="text-[#005a31] font-semibold hover:underline">scholarship applications</Link>
                , and{" "}
                <Link href="/target-ielts-immigration-center" className="text-[#005a31] font-semibold hover:underline">
                  IELTS coaching
                </Link>{" "}
                from our Cumilla office. We also serve{" "}
                <Link href="/online-travel-agency-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                  online clients across Bangladesh
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <footer className="py-20 text-center bg-white px-6 border-t border-slate-100">
        <motion.div whileHover={{ scale: 1.02 }}>
          <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-4">Ready to travel in 2026?</h2>
          <p className="text-sm text-gray-500 mb-8">
            Get a free tourist visa assessment from Bangladesh&apos;s most trusted consultancy.
          </p>
          <a
            href="https://wa.me/8801701699743"
            className="inline-flex items-center gap-3 bg-[#005a31] text-white px-12 py-6 rounded-[2rem] text-lg font-black shadow-2xl hover:bg-orange-600 transition-all"
            rel="noopener noreferrer"
            aria-label="Contact Eammu Holidays on WhatsApp for free tourist visa assessment"
          >
            START FREE ASSESSMENT <FaArrowRight />
          </a>
          <p className="mt-6 text-gray-400 text-xs font-bold uppercase tracking-widest">
            Trusted by 12,000+ Bangladeshi travelers since 2018
          </p>
        </motion.div>
        <nav aria-label="Related visa services" className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/schengen-visa" className="text-xs text-gray-500 hover:text-[#005a31] underline underline-offset-2 transition">Schengen visa</Link>
          <span className="text-gray-300">·</span>
          <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-xs text-gray-500 hover:text-[#005a31] underline underline-offset-2 transition">Student visa</Link>
          <span className="text-gray-300">·</span>
          <Link href="/our-services/visa-services/work-visa-from-bangladesh" className="text-xs text-gray-500 hover:text-[#005a31] underline underline-offset-2 transition">Work visa</Link>
          <span className="text-gray-300">·</span>
          <Link href="/visa/e-visa" className="text-xs text-gray-500 hover:text-[#005a31] underline underline-offset-2 transition">E-visa destinations</Link>
          <span className="text-gray-300">·</span>
          <Link href="/visa" className="text-xs text-gray-500 hover:text-[#005a31] underline underline-offset-2 transition">All visa services</Link>
        </nav>
      </footer>
    </main>
  );
};

export default TouristVisaBangladesh;