"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaUniversity, FaFileSignature,
  FaUserGraduate,
  FaArrowRight, FaBookOpen,
  FaClock, FaHeadset, FaMapMarkerAlt, FaSearchLocation,
  FaBriefcase, FaHandHoldingUsd, FaFileContract,
} from "react-icons/fa";
import TopStudyDestinations from "./TopStudyDestinations/TopStudyDestinations";
import StudentVisa from "./StudentVisa/StudentVisa";

// ─── SHARED SPACING / LAYOUT TOKENS ───────────────────────────────────────────
// Tightened rhythm: one consistent vertical scale, no stacked mb + pt + py.
const SECTION_Y = "py-10 md:py-14";
const SECTION_Y_SM = "py-8 md:py-10";
const CONTAINER = "container mx-auto px-4 sm:px-6 lg:px-8";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const COUNTRY_STUDENT_VISAS = [
  {
    name: "USA",
    visaType: "F-1 Student Visa",
    desc: "F-1 visa support from I-20 issuance and SEVIS I-901 fee payment to DS-160 filing and US embassy Dhaka interview prep, with a financial and academic profile built to satisfy the F-1 non-immigrant intent test.",
    icon: "🇺🇸",
    color: "bg-blue-50 text-blue-700",
    href: "/study-abroad/student-visa/usa",
    scholarshipHref: "/scholarships/usa",
    rejectionHref: "/visa-rejection/usa-visa-rejection-rate-for-bangladesh?type=student",
    minIELTS: "6.5",
    processingTime: "3–5 weeks",
    intake: "Fall (Aug–Sep) & Spring (Jan)",
  },
  {
    name: "UK",
    visaType: "UK Student Route Visa",
    desc: "Student Route (formerly Tier 4) guidance covering your CAS letter, TB test scheduling, the 28-day bank statement rule, and Immigration Health Surcharge (IHS) payment.",
    icon: "🇬🇧",
    color: "bg-red-50 text-red-700",
    href: "/study-abroad/student-visa/uk",
    scholarshipHref: "/scholarships/united-kingdom",
    rejectionHref: "/visa-rejection/uk-visa-rejection-rate-for-bangladesh?type=student",
    minIELTS: "6.0",
    processingTime: "3 weeks",
    intake: "Fall (Sept), Jan & May",
  },
  {
    name: "Canada",
    visaType: "Canada Study Permit",
    desc: "Study Permit and Post-Graduate Work Permit (PGWP) planning: DLI-listed university selection, the Student Direct Stream route where it applies, biometrics booking, and GIC setup.",
    icon: "🇨🇦",
    color: "bg-orange-50 text-orange-700",
    href: "/study-abroad/student-visa/canada",
    scholarshipHref: "/scholarships/canada",
    rejectionHref: "/visa-rejection/canada-visa-rejection-rate-for-bangladesh?type=student",
    minIELTS: "6.0",
    processingTime: "6–8 weeks",
    intake: "Fall (Sept), Winter (Jan) & Summer (May)",
  },
  {
    name: "Australia",
    visaType: "Subclass 500 Student Visa",
    desc: "Subclass 500 filing built around a carefully drafted Genuine Temporary Entrant statement, OSHC enrolment, and Confirmation of Enrolment verification for Bangladeshi passport holders.",
    icon: "🇦🇺",
    color: "bg-green-50 text-green-700",
    href: "/study-abroad/student-visa/australia",
    scholarshipHref: "/scholarships/australia",
    rejectionHref: "/visa-rejection/australia-visa-rejection-rate-for-bangladesh?type=student",
    minIELTS: "6.0",
    processingTime: "4–6 weeks",
    intake: "Feb, Jul & Nov",
  },
  {
    name: "Germany",
    visaType: "Germany Student Visa",
    desc: "Support for tuition-free public universities, including the mandatory blocked account (currently around €11,208/year), APS certificate guidance, and Dhaka embassy appointment booking.",
    icon: "🇩🇪",
    color: "bg-yellow-50 text-yellow-700",
    href: "/study-abroad/student-visa/germany",
    scholarshipHref: "/scholarships/germany",
    rejectionHref: "/visa-rejection/germany-visa-rejection-rate-for-bangladesh?type=student",
    minIELTS: "6.0 / TestDaF",
    processingTime: "6–12 weeks",
    intake: "Winter (Oct) & Summer (Apr)",
  },
  {
    name: "Portugal",
    visaType: "Portugal D-Student Visa",
    desc: "Filing for one of the most affordable EU study routes open to Bangladeshi students, with a clear path to EU residency after graduation and full proof-of-funds support.",
    icon: "🇵🇹",
    color: "bg-red-50 text-red-700",
    href: "/study-abroad/student-visa/portugal",
    scholarshipHref: "/scholarships/portugal",
    rejectionHref: "/visa-rejection/portugal-visa-rejection-rate-for-bangladesh?type=student",
    minIELTS: "5.5–6.0",
    processingTime: "8–10 weeks",
    intake: "Sept & Feb",
  },
];

const RESOURCE_LINKS = [
  { label: "Visa checklist generator",     href: "/travel-resources/visa-checklist-generator",     icon: "✓", desc: "Build your student visa document list" },
  { label: "Visa processing time tracker", href: "/travel-resources/visa-processing-time-tracker", icon: "⏱", desc: "Check expected processing times by country" },
  { label: "Scholarships by country",      href: "/scholarships",                                  icon: "🎓", desc: "Find fully-funded and merit scholarships" },
  { label: "IELTS preparation center",     href: "/target-ielts-immigration-center",               icon: "📝", desc: "Boost your IELTS score before applying" },
  { label: "USA visa interview prep",      href: "/target-usa-visa-interview-preparation",         icon: "🎤", desc: "F-1 mock interviews and embassy coaching" },
  { label: "Visa rejection rates",         href: "/visa-rejection",                                icon: "📊", desc: "Know your approval odds before you apply" },
];

const RELATED_VISA_PAGES = [
  { label: "Tourist visa from Bangladesh", href: "/our-services/visa-services/tourist-visa-from-bangladesh" },
  { label: "Work visa from Bangladesh",    href: "/our-services/visa-services/work-visa-from-bangladesh" },
  { label: "Schengen visa guide",          href: "/schengen-visa" },
  { label: "Dubai visa application",       href: "/our-services/visa/dubai-visa-application" },
  { label: "All visa services",            href: "/visa" },
  { label: "Study abroad guide",           href: "/study-abroad" },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Free eligibility & country counseling",
    desc: "We review your academic background, IELTS score, and budget, then shortlist 2–3 countries and universities with realistic admission and visa approval chances.",
  },
  {
    step: "02",
    title: "Admission & scholarship application",
    desc: "Our team submits your university applications, SOP, and reference letters, and applies for merit-based or need-based scholarships on your behalf.",
  },
  {
    step: "03",
    title: "Financial & document preparation",
    desc: "We prepare bank statements, sponsorship letters, and affidavits that meet each embassy's exact financial proof standard so your file isn't flagged for insufficient funds.",
  },
  {
    step: "04",
    title: "Visa filing & embassy interview",
    desc: "We complete the online visa application, book your biometrics or interview slot, and run mock interviews before your actual embassy appointment.",
  },
];

// FAQ data — mirrored in page.jsx FAQPage schema. Keep in sync if edited.
const FAQ_ITEMS = [
  {
    question: "What is the IELTS requirement for a student visa in 2026?",
    answer:
      "Typically 6.0 for Bachelor's and 6.5 for Master's programs. Some UK and USA universities now waive IELTS with a Medium of Instruction (MOI) letter. Germany may require TestDaF or Goethe certification for German-language programs instead.",
    linkHref: "/target-ielts-immigration-center",
    linkLabel: "Prepare for IELTS at our center",
  },
  {
    question: "What documents are required for a student visa from Bangladesh?",
    answer:
      "Most embassies ask for a valid passport, admission or CAS/I-20 letter, academic transcripts, IELTS certificate, bank statement or sponsorship letter, a Statement of Purpose, and passport photos. Requirements vary by country, so we build a country-specific checklist for every applicant.",
    linkHref: "/travel-resources/visa-checklist-generator",
    linkLabel: "Generate your document checklist",
  },
  {
    question: "Can Eammu Holidays help with spousal visas alongside student visas?",
    answer:
      "Yes. We process dependent visas for spouses and children for UK Student Route and Canada Study Permit applicants. Contact our Cumilla office for a combined application plan covering both the primary student and dependents.",
    linkHref: "/contact",
    linkLabel: "Book a free counseling session",
  },
  {
    question: "When should I start my student visa application from Bangladesh?",
    answer:
      "For a September intake, start at least 6 months ahead — ideally January to February. That leaves enough time for university admission, scholarship applications, IELTS, financial documentation, and your visa appointment.",
    linkHref: "/scholarships",
    linkLabel: "Find scholarships by country",
  },
  {
    question: "Which countries have the lowest student visa rejection rates for Bangladeshi applicants?",
    answer:
      "Georgia, Albania, Serbia, and Malaysia typically show higher approval rates for Bangladeshi passport holders, while the USA and UK apply stricter scrutiny. Our team identifies and fixes weak points before submission to raise your approval chance.",
    linkHref: "/visa-rejection",
    linkLabel: "Check rejection rates by country",
  },
];

// ─── INTRO / OVERVIEW SECTION ─────────────────────────────────────────────────

function IntroSection() {
  return (
    <section aria-labelledby="intro-heading" className={`${SECTION_Y_SM} ${CONTAINER}`}>
      <div className="max-w-4xl">
        <p className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-2">
          Student visa consultancy in Cumilla &amp; Dhaka
        </p>
        <h1 id="intro-heading" className="text-3xl md:text-5xl font-black text-[#005a31] mb-4 tracking-tight">
          Student Visa from Bangladesh — Complete 2026 Guide
        </h1>
        <div className="space-y-3 text-gray-600 text-sm md:text-base leading-relaxed">
          <p>
            Eammu Holidays is an IATA-accredited travel and education consultancy that has helped
            Bangladeshi students apply for study visas since 2018. From our Cumilla head office and
            Dhaka branch, licensed counselors have guided over 1,000 students through university
            admission, scholarship applications, and student visa filing for the USA, UK, Canada,
            Australia, Germany, Portugal, and 25+ other countries.
          </p>
          <p>
            A student visa application from Bangladesh runs through several linked steps: university
            admission, IELTS or English-proficiency proof, a convincing Statement of Purpose, financial
            documentation that satisfies the destination embassy, and often an in-person interview at
            the embassy in Dhaka. Missing or inconsistent paperwork is the single biggest cause of
            student visa refusal for Bangladeshi applicants, so every case we handle goes through a
            document review before submission.
          </p>
          <p>
            Below are country-specific student visa guides with current IELTS thresholds, processing
            times, and intake seasons, plus free tools to check visa processing time, build a
            personalised document checklist, and compare scholarships by country.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── RESOURCE STRIP ──────────────────────────────────────────────────────────

function ResourceStrip() {
  return (
    <section
      aria-label="Student visa tools and resources for Bangladeshi applicants"
      className={`${SECTION_Y_SM} bg-[#f7faf9] border-y border-[#d0e8db]`}
    >
      <div className={CONTAINER}>
        <h2 className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
          Free student visa tools &amp; resources
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {RESOURCE_LINKS.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="flex flex-col items-center gap-1.5 p-3 bg-white border border-gray-100 rounded-xl text-center hover:border-[#005a31] hover:shadow-sm transition group"
            >
              <span className="text-xl" aria-hidden="true">{r.icon}</span>
              <span className="text-xs font-semibold text-gray-700 group-hover:text-[#005a31] transition leading-snug">
                {r.label}
              </span>
              <span className="text-[10px] text-gray-400 leading-snug">{r.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROCESS STRIP ────────────────────────────────────────────────────────────

function ProcessStrip() {
  return (
    <section aria-labelledby="process-heading" className={`${SECTION_Y} bg-slate-50 border-y border-slate-200`}>
      <div className={CONTAINER}>
        <header className="max-w-2xl mb-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
            How the process works
          </p>
          <h2 id="process-heading" className="text-2xl md:text-4xl font-black text-[#005a31] tracking-tight">
            Four steps from counseling to visa approval
          </h2>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROCESS_STEPS.map((s) => (
            <div key={s.step} className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
              <span className="text-2xl font-black text-orange-500/80">{s.step}</span>
              <h3 className="font-black text-gray-800 text-base mt-2 mb-1.5">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── COUNTRY CARD ─────────────────────────────────────────────────────────────

function CountryStudyCard({ country, index }) {
  return (
    <article
      className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all group flex flex-col"
      itemScope
      itemType="https://schema.org/ListItem"
    >
      <meta itemProp="position" content={String(index + 1)} />
      <div className="p-4 flex-1">
        <div
          className={`w-10 h-10 ${country.color} rounded-xl flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform`}
          aria-hidden="true"
        >
          {country.icon}
        </div>
        <h3 className="font-black text-gray-800 text-lg mb-0.5" itemProp="name">
          {country.visaType}
        </h3>
        <p className="text-[11px] text-gray-400 font-semibold mb-2 uppercase tracking-wider">
          Study in {country.name} from Bangladesh
        </p>
        <p className="text-sm text-gray-500 font-medium leading-relaxed mb-3">
          {country.desc}
        </p>

        <dl className="grid grid-cols-3 gap-1.5 mb-3 text-center">
          <div className="bg-slate-50 rounded-lg py-1.5">
            <dt className="text-[9px] text-gray-400 uppercase tracking-wider">IELTS</dt>
            <dd className="text-xs font-bold text-gray-700">{country.minIELTS}</dd>
          </div>
          <div className="bg-slate-50 rounded-lg py-1.5">
            <dt className="text-[9px] text-gray-400 uppercase tracking-wider">Processing</dt>
            <dd className="text-xs font-bold text-gray-700">{country.processingTime}</dd>
          </div>
          <div className="bg-slate-50 rounded-lg py-1.5">
            <dt className="text-[9px] text-gray-400 uppercase tracking-wider">Intake</dt>
            <dd className="text-[10px] font-bold text-gray-700 leading-tight">{country.intake}</dd>
          </div>
        </dl>

        <div className="flex flex-wrap gap-1.5 mb-3">
          <Link
            href={country.scholarshipHref}
            className="text-xs text-[#005a31] font-semibold border border-[#005a31]/30 px-2.5 py-1 rounded-full hover:bg-[#005a31] hover:text-white transition"
          >
            🎓 {country.name} scholarships
          </Link>
          <Link
            href={country.rejectionHref}
            className="text-xs text-gray-500 border border-gray-200 px-2.5 py-1 rounded-full hover:border-[#005a31] hover:text-[#005a31] transition"
          >
            📊 {country.name} rejection rates
          </Link>
        </div>
      </div>

      <div className="px-4 pb-4">
        <Link
          href={country.href}
          itemProp="url"
          className="w-full bg-[#005a31] text-white text-center py-2.5 rounded-xl font-bold text-sm hover:bg-black transition-all flex items-center justify-center gap-2"
        >
          {country.name} student visa guide 2026 <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </article>
  );
}

// ─── RELATED VISA LINKS FOOTER ────────────────────────────────────────────────

function RelatedVisaLinks() {
  return (
    <nav aria-label="Related visa services" className="pt-6 border-t border-gray-100">
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
        Related visa services from Bangladesh
      </h2>
      <div className="flex flex-wrap gap-2">
        {RELATED_VISA_PAGES.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="px-3.5 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-sm hover:border-[#005a31] hover:text-[#005a31] transition"
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div className="mt-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-[#f7faf9] border border-[#d0e8db] rounded-xl p-5">
        <p className="text-sm text-gray-600 max-w-lg">
          Not sure which country is right for you?{" "}
          <Link href="/study-abroad" className="text-[#005a31] font-semibold hover:underline">
            Browse our full study abroad guide for Bangladeshi students
          </Link>{" "}
          or explore{" "}
          <Link href="/scholarships" className="text-[#005a31] font-semibold hover:underline">
            fully-funded scholarships by country
          </Link>
          .
        </p>
        <Link
          href="/contact"
          className="flex-shrink-0 px-5 py-2.5 bg-[#005a31] text-white rounded-lg text-sm font-bold hover:bg-black transition"
        >
          Speak to a student visa expert →
        </Link>
      </div>
    </nav>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const StudentVisaBangladesh = () => {
  return (
    <main className="bg-[#fcfcfc] min-h-screen font-sans overflow-x-hidden" itemScope itemType="https://schema.org/WebPage">
      <meta itemProp="name" content="Student Visa from Bangladesh 2026 — Eammu Holidays" />
      <meta itemProp="description" content="Expert student visa consultancy from Bangladesh for USA, UK, Canada, Australia, Germany, and 25+ countries. Free counseling. 1,000+ students placed." />

      {/* ── HERO / STUDENT VISA COMPONENT ── */}
      <StudentVisa />

      {/* ── SEO INTRO COPY ── */}
      <IntroSection />

      {/* ── RESOURCE STRIP ── */}
      <ResourceStrip />

      {/* ── TOP STUDY DESTINATIONS ── */}
      <TopStudyDestinations />

      {/* ── HOW THE PROCESS WORKS ── */}
      <ProcessStrip />

      {/* ── COMPLETE GUIDANCE SERVICES ── */}
      <section aria-labelledby="complete-guidance-heading" className={`${SECTION_Y} ${CONTAINER}`}>
        <header className="text-center mb-10">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
            End-to-end student visa support from Bangladesh
          </p>
          <h2 id="complete-guidance-heading" className="text-2xl md:text-4xl font-black text-[#005a31] mb-3 tracking-tight">
            Complete Student Visa Guidance
          </h2>
          <div className="w-16 h-1.5 bg-orange-500 mx-auto rounded-full" />
          <p className="text-gray-500 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            From{" "}
            <Link href="/target-ielts-immigration-center" className="text-[#005a31] font-semibold hover:underline">
              IELTS preparation
            </Link>{" "}
            to student visa filing and{" "}
            <Link href="/scholarships" className="text-[#005a31] font-semibold hover:underline">
              scholarship applications
            </Link>
            , Eammu Holidays covers every step of your study abroad journey from Bangladesh.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-5">
          <ServiceCard
            icon={<FaUniversity />}
            title="University mapping & admission"
            desc="We match your GPA, IELTS score, and budget with universities offering the best scholarships and career prospects for Bangladeshi students, and manage the admission application end to end."
            linkHref="/scholarships"
            linkLabel="Browse scholarships by country"
          />
          <ServiceCard
            icon={<FaBookOpen />}
            title="SOP writing & documentation"
            desc="Professional help writing winning Statements of Purpose and organising academic transcripts, financial documents, and reference letters for faster visa approval."
            linkHref="/travel-resources/visa-checklist-generator"
            linkLabel="Generate your student visa document checklist"
          />
          <ServiceCard
            icon={<FaFileSignature />}
            title="Express student visa filing"
            desc="Meticulous financial proof preparation and filing for UK CAS, US I-20, Canada Study Permits, Australia Subclass 500, and Schengen student visas from Bangladesh."
            linkHref="/schengen-visa"
            linkLabel="Schengen student visa guide"
          />
        </div>
      </section>

      {/* ── COUNTRY STUDENT VISA CARDS ── */}
      <section
        aria-labelledby="destinations-heading"
        className={`${SECTION_Y} bg-slate-50 border-y border-slate-200`}
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <meta itemProp="name" content="Student Visa Guide by Country for Bangladeshi Students" />
        <div className={CONTAINER}>
          <header className="text-center mb-8">
            <h2 id="destinations-heading" className="text-2xl md:text-4xl font-black text-[#005a31] mb-3 tracking-tight">
              Top Study Destinations for Bangladeshi Students 2026
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              Each guide covers student visa requirements, minimum IELTS scores, available
              scholarships, and processing timelines — tailored for Bangladeshi passport holders
              applying from Cumilla, Dhaka, or anywhere in Bangladesh.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {COUNTRY_STUDENT_VISAS.map((c, i) => (
              <CountryStudyCard key={c.name} country={c} index={i} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/study-abroad/student-visa"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#005a31] text-[#005a31] rounded-xl font-bold text-sm hover:bg-[#005a31] hover:text-white transition"
            >
              View all student visa country guides <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY EAMMU ── */}
      <section aria-labelledby="why-eammu-heading" className={`${SECTION_Y} ${CONTAINER}`}>
        <div className="bg-[#005a31] rounded-[2rem] p-6 md:p-12 text-white relative overflow-hidden shadow-xl">
          <FaUserGraduate className="absolute -bottom-16 -right-16 text-white/5 text-[18rem] hidden md:block" aria-hidden="true" />
          <div className="relative z-10 max-w-4xl">
            <h2 id="why-eammu-heading" className="text-2xl md:text-4xl font-black mb-3 tracking-tight">
              Why Choose Eammu Holidays for Your Student Visa?
            </h2>
            <p className="text-green-100/80 text-sm mb-8 max-w-lg leading-relaxed">
              Bangladesh&apos;s trusted student visa consultancy since 2018. Over 1,000 Bangladeshi students placed in universities across{" "}
              <Link href="/scholarships" className="text-orange-400 font-semibold hover:underline">
                25+ countries worldwide
              </Link>
              .
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <TrustItem
                icon={<FaBriefcase />}
                title="Pre-departure briefing"
                desc="Know the local laws, part-time work limits, accommodation, and culture before you fly out from Bangladesh."
                href="/study-abroad"
                linkLabel="Read our study abroad guide"
              />
              <TrustItem
                icon={<FaHandHoldingUsd />}
                title="Scholarship application help"
                desc="We target 50–100% merit-based funding for Bangladeshi students across all study destinations."
                href="/scholarships"
                linkLabel="Browse fully-funded scholarships"
              />
              <TrustItem
                icon={<FaFileContract />}
                title="Embassy mock interviews"
                desc="Face the visa embassy with confidence through our intensive F-1, UK, and Canada interview training sessions."
                href="/target-usa-visa-interview-preparation"
                linkLabel="USA student visa interview prep"
              />
              <TrustItem
                icon={<FaSearchLocation />}
                title="IELTS coaching center"
                desc="Dedicated IELTS preparation to help Bangladeshi students meet university entry requirements and boost their band score."
                href="/target-ielts-immigration-center"
                linkLabel="Visit our IELTS center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── REJECTION RATES CALLOUT ── */}
      <section aria-label="Student visa rejection rate information" className={`pb-10 md:pb-14 ${CONTAINER}`}>
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-black text-gray-800 text-lg mb-1.5">
              Worried about student visa rejection from Bangladesh?
            </h3>
            <p className="text-sm text-gray-600 max-w-lg leading-relaxed">
              Check country-specific{" "}
              <Link href="/visa-rejection" className="text-[#005a31] font-semibold hover:underline">
                student visa rejection rates for Bangladeshi applicants
              </Link>{" "}
              before you apply. Our team identifies and fixes the weak points in your application before you submit.
            </p>
          </div>
          <div className="flex gap-2.5 flex-shrink-0">
            <Link
              href="/visa-rejection"
              className="px-5 py-2.5 bg-[#005a31] text-white rounded-lg font-bold text-sm hover:bg-black transition"
            >
              Check rejection rates
            </Link>
            <Link
              href="/travel-resources/visa-checklist-generator"
              className="px-5 py-2.5 border border-[#005a31] text-[#005a31] rounded-lg font-bold text-sm hover:bg-[#005a31] hover:text-white transition"
            >
              Build my document checklist
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section aria-labelledby="faq-heading" className={`${SECTION_Y} bg-slate-50 border-y border-slate-200`}>
        <div className={CONTAINER}>
          <div className="max-w-4xl mx-auto">
            <h2 id="faq-heading" className="text-2xl md:text-4xl font-black text-[#005a31] mb-3 text-center tracking-tight">
              Student Visa FAQ — Bangladesh 2026
            </h2>
            <p className="text-center text-sm text-gray-500 mb-8">
              More questions about applying for a student visa from Bangladesh?{" "}
              <Link href="/contact" className="text-[#005a31] font-semibold hover:underline">
                Contact our visa counselors
              </Link>{" "}
              or visit our{" "}
              <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                Cumilla office
              </Link>
              .
            </p>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {FAQ_ITEMS.map((faq) => (
                <FAQItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section aria-labelledby="contact-heading" className={`${SECTION_Y} ${CONTAINER}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white shadow-lg rounded-[2rem] p-6 md:p-10 border border-slate-50">
          <div className="flex-1 w-full">
            <span className="bg-orange-500 text-white px-4 py-1.5 rounded-lg text-[10px] font-black mb-4 inline-block uppercase tracking-widest">
              Free student visa counseling
            </span>
            <h2 id="contact-heading" className="text-2xl md:text-4xl font-black text-[#005a31] mb-3">
              Let&apos;s plan your study abroad journey
            </h2>
            <p className="text-sm text-gray-500 mb-5 leading-relaxed">
              Visit us in Cumilla or reach out online. Eammu Holidays also has offices in{" "}
              <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-semibold hover:underline">
                Dubai
              </Link>
              ,{" "}
              <Link href="/contact/travel-agency-armenia" className="text-[#005a31] font-semibold hover:underline">
                Armenia
              </Link>
              , and{" "}
              <Link href="/contact/travel-agency-georgia" className="text-[#005a31] font-semibold hover:underline">
                Georgia
              </Link>
              .
            </p>
            <address className="not-italic space-y-4">
              <ContactInfo icon={<FaMapMarkerAlt />} text="Gomoti Tower (4th Floor), Cantonment, Cumilla, Bangladesh" />
              <ContactInfo icon={<FaClock />} text="Saturday – Thursday, 10 AM – 7 PM" />
              <ContactInfo icon={<FaHeadset />} text="+8801631312524" />
            </address>
          </div>
          <div
            className="flex-1 w-full bg-slate-50 h-56 md:h-80 rounded-[2rem] border-4 border-white shadow-inner flex items-center justify-center"
            aria-label="Eammu Holidays office location map"
          >
            <span className="text-slate-400 font-black italic text-sm tracking-widest uppercase">
              Office location loading…
            </span>
          </div>
        </div>
      </section>

      {/* ── RELATED VISA LINKS FOOTER ── */}
      <section aria-label="Related student visa resources" className={`pb-10 md:pb-12 ${CONTAINER}`}>
        <RelatedVisaLinks />
      </section>

      {/* ── FOOTER CTA ── */}
      <footer className={`${SECTION_Y_SM} text-center px-4`}>
        <motion.div whileHover={{ scale: 1.02 }}>
          <a
            href="https://wa.me/8801631312524"
            className="inline-flex items-center gap-3 bg-[#005a31] text-white px-8 md:px-14 py-4 md:py-5 rounded-2xl text-base md:text-xl font-black shadow-xl hover:bg-orange-600 transition-all uppercase"
            rel="noopener noreferrer"
            aria-label="Contact Eammu Holidays on WhatsApp for free student visa counseling"
          >
            Get free student visa counseling <FaArrowRight />
          </a>
        </motion.div>
        <p className="mt-5 text-gray-400 text-xs">
          Also explore:{" "}
          <Link href="/our-services/visa-services/tourist-visa-from-bangladesh" className="hover:text-[#005a31] transition underline underline-offset-2">
            Tourist visa from Bangladesh
          </Link>{" "}
          ·{" "}
          <Link href="/our-services/visa-services/work-visa-from-bangladesh" className="hover:text-[#005a31] transition underline underline-offset-2">
            Work visa from Bangladesh
          </Link>{" "}
          ·{" "}
          <Link href="/visa" className="hover:text-[#005a31] transition underline underline-offset-2">
            All visa services
          </Link>
        </p>
        <p className="mt-3 text-gray-400 font-black uppercase text-[10px] tracking-[0.3em]">
          Excellence in education consultancy since 2018
        </p>
      </footer>
    </main>
  );
};

// ─── HELPER COMPONENTS ────────────────────────────────────────────────────────

const ServiceCard = ({ icon, title, desc, linkHref, linkLabel }) => (
  <motion.article
    whileHover={{ y: -6 }}
    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-50 group hover:border-green-100 transition-all duration-300 flex flex-col"
  >
    <div className="w-12 h-12 bg-green-50 text-[#005a31] rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:bg-[#005a31] group-hover:text-white transition-all duration-300 shadow-sm" aria-hidden="true">
      {icon}
    </div>
    <h3 className="text-lg font-black text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm font-medium flex-1">{desc}</p>
    {linkHref && (
      <Link href={linkHref} className="mt-4 text-sm text-[#005a31] font-semibold hover:underline inline-flex items-center gap-1">
        {linkLabel} <FaArrowRight className="text-xs" />
      </Link>
    )}
  </motion.article>
);

const TrustItem = ({ icon, title, desc, href, linkLabel }) => (
  <div className="flex gap-4">
    <div className="mt-0.5 text-orange-400 text-2xl flex-shrink-0" aria-hidden="true">{icon}</div>
    <div>
      <h3 className="font-black text-lg mb-1">{title}</h3>
      <p className="text-green-100/70 text-sm leading-relaxed font-medium mb-1.5">{desc}</p>
      {href && (
        <Link href={href} className="text-orange-400 text-xs font-semibold hover:underline">
          {linkLabel} →
        </Link>
      )}
    </div>
  </div>
);

const FAQItem = ({ question, answer, linkHref, linkLabel }) => (
  <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-100 shadow-sm" itemScope itemType="https://schema.org/Question">
    <h3 className="text-base md:text-lg font-black text-[#005a31] mb-2 flex items-start gap-2.5" itemProp="name">
      <span className="bg-orange-100 text-orange-600 w-5 h-5 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5" aria-hidden="true">
        Q
      </span>
      {question}
    </h3>
    <div className="text-gray-600 text-sm font-medium leading-relaxed ml-7 mb-2" itemScope itemType="https://schema.org/Answer">
      <p itemProp="text">{answer}</p>
    </div>
    {linkHref && (
      <Link href={linkHref} className="ml-7 text-xs text-[#005a31] font-semibold hover:underline inline-flex items-center gap-1">
        {linkLabel} <FaArrowRight className="text-[10px]" />
      </Link>
    )}
  </div>
);

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm" aria-hidden="true">
      {icon}
    </div>
    <span className="font-black text-gray-700 text-base">{text}</span>
  </div>
);

export default StudentVisaBangladesh;