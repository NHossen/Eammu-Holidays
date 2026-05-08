"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaUniversity, FaFileSignature,
  FaAward, FaUserGraduate,
  FaArrowRight, FaBookOpen,
  FaClock, FaHeadset, FaMapMarkerAlt, FaSearchLocation,
  FaBriefcase, FaHandHoldingUsd, FaFileContract
} from "react-icons/fa";
import TopStudyDestinations from "./TopStudyDestinations/TopStudyDestinations";
import StudentVisa from "./StudentVisa/StudentVisa";

// ─── INTERNAL LINKING DATA ────────────────────────────────────────────────────

// Tier 1 & 2 upward links
const BREADCRUMB = [
  { label: "Home",         href: "/" },
  { label: "Our services", href: "/our-services" },
  { label: "Visa services",href: "/our-services/visa-services" },
  { label: "Student visa from Bangladesh" },
];

// Country student visa pages — spoke links going DOWN
const COUNTRY_STUDENT_VISAS = [
  {
    name: "USA",
    desc: "F-1 student visa support for Bangladeshi applicants. I-20 guidance, SEVIS, and embassy interview prep included.",
    icon: "🇺🇸",
    color: "bg-blue-50 text-blue-700",
    href: "/study-abroad/student-visa/usa",
    scholarshipHref: "/scholarships/usa",
    rejectionHref: "/visa-rejection/usa-visa-rejection-rate-for-bangladesh?type=student",
  },
  {
    name: "UK",
    desc: "UK Student Route visa (formerly Tier 4). CAS letter assistance, financial proof, and IHS surcharge guidance.",
    icon: "🇬🇧",
    color: "bg-red-50 text-red-700",
    href: "/study-abroad/student-visa/uk",
    scholarshipHref: "/scholarships/united-kingdom",
    rejectionHref: "/visa-rejection/uk-visa-rejection-rate-for-bangladesh?type=student",
  },
  {
    name: "Canada",
    desc: "Study Permit and PGWP planning for Bangladeshi students. DLI-listed universities and biometrics support.",
    icon: "🇨🇦",
    color: "bg-orange-50 text-orange-700",
    href: "/study-abroad/student-visa/canada",
    scholarshipHref: "/scholarships/canada",
    rejectionHref: "/visa-rejection/canada-visa-rejection-rate-for-bangladesh?type=student",
  },
  {
    name: "Australia",
    desc: "Subclass 500 student visa with GTE statement help and OSHC health cover guidance for Bangladeshi nationals.",
    icon: "🇦🇺",
    color: "bg-green-50 text-green-700",
    href: "/study-abroad/student-visa/australia",
    scholarshipHref: "/scholarships/australia",
    rejectionHref: "/visa-rejection/australia-visa-rejection-rate-for-bangladesh?type=student",
  },
  {
    name: "Germany",
    desc: "Germany student visa for public universities — often tuition-free. Blocked account and German embassy process.",
    icon: "🇩🇪",
    color: "bg-yellow-50 text-yellow-700",
    href: "/study-abroad/student-visa/germany",
    scholarshipHref: "/scholarships/germany",
    rejectionHref: "/visa-rejection/germany-visa-rejection-rate-for-bangladesh?type=student",
  },
  {
    name: "Portugal",
    desc: "Portugal D-student visa. One of the most affordable EU study destinations for Bangladeshi students.",
    icon: "🇵🇹",
    color: "bg-red-50 text-red-700",
    href: "/study-abroad/student-visa/portugal",
    scholarshipHref: "/scholarships/portugal",
    rejectionHref: "/visa-rejection/portugal-visa-rejection-rate-for-bangladesh?type=student",
  },
];

// Across-section resource links
const RESOURCE_LINKS = [
  { label: "Visa checklist generator",     href: "/travel-resources/visa-checklist-generator",           icon: "✓", desc: "Build your student visa document list" },
  { label: "Visa processing time tracker", href: "/travel-resources/visa-processing-time-tracker",       icon: "⏱", desc: "Check expected processing times by country" },
  { label: "Scholarships by country",      href: "/scholarships",                                        icon: "🎓", desc: "Find fully-funded and merit scholarships" },
  { label: "IELTS preparation center",     href: "/target-ielts-immigration-center",                     icon: "📝", desc: "Boost your IELTS score before applying" },
  { label: "USA visa interview prep",      href: "/target-usa-visa-interview-preparation",               icon: "🎤", desc: "F-1 mock interviews and embassy coaching" },
  { label: "Visa rejection rates",         href: "/visa-rejection",                                      icon: "📊", desc: "Know your approval odds before you apply" },
];

// Related visa pages — across links
const RELATED_VISA_PAGES = [
  { label: "Tourist visa from Bangladesh", href: "/our-services/visa-services/tourist-visa-from-bangladesh" },
  { label: "Work visa from Bangladesh",    href: "/our-services/visa-services/work-visa-from-bangladesh" },
  { label: "Schengen visa guide",          href: "/schengen-visa" },
  { label: "Dubai visa application",       href: "/our-services/visa/dubai-visa-application" },
  { label: "All visa services",            href: "/visa" },
  { label: "Study abroad guide",           href: "/study-abroad" },
];

// ─── BREADCRUMB ───────────────────────────────────────────────────────────────

function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb" className="bg-white border-b border-gray-100 py-2.5 px-4">
      <div className="container mx-auto flex flex-wrap gap-1.5 items-center text-xs text-gray-500">
        {BREADCRUMB.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {item.href ? (
              <Link href={item.href} className="hover:text-[#005a31] transition">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-800 font-semibold">{item.label}</span>
            )}
            {i < BREADCRUMB.length - 1 && <span className="text-gray-300">/</span>}
          </span>
        ))}
      </div>
    </nav>
  );
}

// ─── RESOURCE STRIP ──────────────────────────────────────────────────────────

function ResourceStrip() {
  return (
    <section aria-label="Student visa tools and resources" className="py-14 bg-[#f7faf9] border-y border-[#d0e8db]">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Student visa tools &amp; resources
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {RESOURCE_LINKS.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-100 rounded-2xl text-center hover:border-[#005a31] hover:shadow-sm transition group"
            >
              <span className="text-2xl" aria-hidden="true">{r.icon}</span>
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

// ─── COUNTRY CARD ─────────────────────────────────────────────────────────────

function CountryStudyCard({ country }) {
  return (
    <article className="bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
      <div className="p-6 flex-1">
        <div className={`w-12 h-12 ${country.color} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
          {country.icon}
        </div>
        <h3 className="font-black text-gray-800 text-xl mb-2">
          Study in {country.name}
        </h3>
        <p className="text-sm text-gray-500 font-medium leading-relaxed mb-5">
          {country.desc}
        </p>

        {/* Supporting micro-links inside card */}
        <div className="flex flex-wrap gap-2 mb-5">
          <Link
            href={country.scholarshipHref}
            className="text-xs text-[#005a31] font-semibold border border-[#005a31]/30 px-3 py-1 rounded-full hover:bg-[#005a31] hover:text-white transition"
          >
            🎓 Scholarships
          </Link>
          <Link
            href={country.rejectionHref}
            className="text-xs text-gray-500 border border-gray-200 px-3 py-1 rounded-full hover:border-[#005a31] hover:text-[#005a31] transition"
          >
            📊 Rejection rates
          </Link>
        </div>
      </div>

      <div className="px-6 pb-6">
        <Link
          href={country.href}
          className="w-full bg-[#005a31] text-white text-center py-3 rounded-2xl font-bold text-sm hover:bg-black transition-all flex items-center justify-center gap-2"
        >
          {country.name} student visa guide <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </article>
  );
}

// ─── RELATED VISA LINKS FOOTER ────────────────────────────────────────────────

function RelatedVisaLinks() {
  return (
    <div className="mt-16 pt-10 border-t border-gray-100">
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
        Related visa services
      </h2>
      <div className="flex flex-wrap gap-3">
        {RELATED_VISA_PAGES.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-sm hover:border-[#005a31] hover:text-[#005a31] transition"
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-[#f7faf9] border border-[#d0e8db] rounded-2xl p-6">
        <p className="text-sm text-gray-600 max-w-lg">
          Not sure which country is right for you?{" "}
          <Link href="/study-abroad" className="text-[#005a31] font-semibold hover:underline">
            Browse our full study abroad guide
          </Link>{" "}
          or check{" "}
          <Link href="/scholarships" className="text-[#005a31] font-semibold hover:underline">
            scholarships by country
          </Link>
          .
        </p>
        <Link
          href="/contact"
          className="flex-shrink-0 px-6 py-3 bg-[#005a31] text-white rounded-xl text-sm font-bold hover:bg-black transition"
        >
          Speak to a visa expert →
        </Link>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const StudentVisaBangladesh = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans overflow-x-hidden mt-20">

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Eammu Holidays",
            "url": "https://eammu.com",
            "logo": "https://eammu.com/images/logo.png",
            "description": "Student visa consultancy from Bangladesh to USA, UK, Canada, Australia, Germany and 25+ countries.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Gomoti Tower, 1st Floor, Cantonment",
              "addressLocality": "Cumilla",
              "addressCountry": "BD",
            },
            "sameAs": ["https://eammu.com/our-services/visa-services/student-visa-from-bangladesh"],
          }),
        }}
      />

      {/* ── BREADCRUMB ── */}
      <Breadcrumb />

      {/* ── HERO / STUDENT VISA COMPONENT ── */}
      <StudentVisa />

      {/* ── RESOURCE STRIP ── */}
      <ResourceStrip />

      {/* ── TOP STUDY DESTINATIONS ── */}
      <TopStudyDestinations />

      {/* ── COMPLETE GUIDANCE SERVICES ── */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            End-to-end student visa support from Bangladesh
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-4 uppercase italic tracking-tighter">
            Complete Guidance
          </h2>
          <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full" />
          <p className="text-gray-500 text-sm max-w-xl mx-auto mt-5 leading-relaxed">
            From{" "}
            <Link href="/target-ielts-immigration-center" className="text-[#005a31] font-semibold hover:underline">
              IELTS preparation
            </Link>{" "}
            to visa filing and{" "}
            <Link href="/scholarships" className="text-[#005a31] font-semibold hover:underline">
              scholarship applications
            </Link>
            , our team covers every step of your study abroad journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<FaUniversity />}
            title="University mapping"
            desc="We match your GPA and budget with global universities offering the best scholarships and career prospects."
            linkHref="/scholarships"
            linkLabel="Browse scholarships by country"
          />
          <ServiceCard
            icon={<FaBookOpen />}
            title="SOP & documentation"
            desc="Professional help writing winning Statements of Purpose and organizing academic transcripts for fast approval."
            linkHref="/travel-resources/visa-checklist-generator"
            linkLabel="Generate your document checklist"
          />
          <ServiceCard
            icon={<FaFileSignature />}
            title="Express visa filing"
            desc="Meticulous financial proof preparation and filing for UK CAS, US I-20, Canada Study Permits, and Schengen student visas."
            linkHref="/schengen-visa"
            linkLabel="Schengen student visa guide"
          />
        </div>
      </section>

      {/* ── COUNTRY STUDENT VISA CARDS ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#005a31] mb-4 uppercase tracking-tighter italic leading-tight">
              Top Destinations For Bangladeshi Students
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              Each guide covers visa requirements, IELTS scores, scholarships, and processing times — specific to Bangladeshi passport holders.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {COUNTRY_STUDENT_VISAS.map((c) => (
              <CountryStudyCard key={c.name} country={c} />
            ))}
          </div>

          {/* See all countries link */}
          <div className="text-center">
            <Link
              href="/study-abroad/student-visa"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#005a31] text-[#005a31] rounded-2xl font-bold text-sm hover:bg-[#005a31] hover:text-white transition"
            >
              View all student visa countries <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY EAMMU ── */}
      <section className="py-20 container mx-auto px-6">
        <div className="bg-[#005a31] rounded-[3rem] md:rounded-[5rem] p-10 md:p-24 text-white relative overflow-hidden shadow-2xl">
          <FaUserGraduate className="absolute -bottom-20 -right-20 text-white/5 text-[25rem] hidden md:block" />
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-3xl md:text-6xl font-black mb-4 tracking-tighter italic">
              Why Eammu Holidays?
            </h2>
            <p className="text-green-100/80 text-sm mb-12 max-w-lg leading-relaxed">
              Bangladesh&apos;s trusted student visa consultancy since 2018. Over 1,000 students placed in universities across{" "}
              <Link href="/scholarships" className="text-orange-400 font-semibold hover:underline">
                25+ countries
              </Link>
              .
            </p>
            <div className="grid md:grid-cols-2 gap-10">
              <TrustItem
                icon={<FaBriefcase />}
                title="Pre-departure briefs"
                desc="Know the laws, part-time work limits, and culture before you fly."
                href="/study-abroad"
                linkLabel="Study abroad guide"
              />
              <TrustItem
                icon={<FaHandHoldingUsd />}
                title="Scholarship help"
                desc="We target 50–100% merit-based funding for students across all destinations."
                href="/scholarships"
                linkLabel="Browse scholarships"
              />
              <TrustItem
                icon={<FaFileContract />}
                title="Mock interviews"
                desc="Face the embassy with confidence through our intensive training sessions."
                href="/target-usa-visa-interview-preparation"
                linkLabel="USA interview prep"
              />
              <TrustItem
                icon={<FaSearchLocation />}
                title="IELTS preparation"
                desc="Dedicated IELTS coaching to help you meet university entry requirements."
                href="/target-ielts-immigration-center"
                linkLabel="IELTS center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── REJECTION RATES CALLOUT ── */}
      <section className="container mx-auto px-6 mb-8">
        <div className="bg-orange-50 border border-orange-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-black text-gray-800 text-xl mb-2">
              Worried about visa rejection?
            </h3>
            <p className="text-sm text-gray-600 max-w-lg leading-relaxed">
              Check country-specific{" "}
              <Link href="/visa-rejection" className="text-[#005a31] font-semibold hover:underline">
                student visa rejection rates for Bangladeshi applicants
              </Link>{" "}
              before you apply. Our team helps you fix weak points before submission.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/visa-rejection"
              className="px-6 py-3 bg-[#005a31] text-white rounded-xl font-bold text-sm hover:bg-black transition"
            >
              Check rejection rates
            </Link>
            <Link
              href="/travel-resources/visa-checklist-generator"
              className="px-6 py-3 border border-[#005a31] text-[#005a31] rounded-xl font-bold text-sm hover:bg-[#005a31] hover:text-white transition"
            >
              Build checklist
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-4 text-center tracking-tighter italic">
            Common questions
          </h2>
          <p className="text-center text-sm text-gray-500 mb-12">
            More questions?{" "}
            <Link href="/contact" className="text-[#005a31] font-semibold hover:underline">
              Contact our visa counselors
            </Link>{" "}
            or visit our{" "}
            <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-semibold hover:underline">
              Bangladesh office
            </Link>
            .
          </p>
          <div className="space-y-4">
            <FAQItem
              question="What is the IELTS requirement for 2026?"
              answer="Typically 6.0 for Bachelor's and 6.5 for Master's, but some UK and USA universities now offer IELTS waivers based on Medium of Instruction (MOI) letters."
              linkHref="/target-ielts-immigration-center"
              linkLabel="Prepare for IELTS at our center"
            />
            <FAQItem
              question="Can Eammu help with spousal visas alongside student visas?"
              answer="Absolutely. We process dependent visas for spouses and children for UK and Canada student routes. Contact our office for a combined application plan."
              linkHref="/contact"
              linkLabel="Book a counseling session"
            />
            <FAQItem
              question="When should I start my student visa application?"
              answer="For the September intake, start at least 6 months in advance (January–February) to secure university seats, scholarships, and visa slots."
              linkHref="/scholarships"
              linkLabel="Find scholarships by country"
            />
            <FAQItem
              question="Which countries have the lowest student visa rejection rates for Bangladesh?"
              answer="Georgia, Albania, Serbia, and Malaysia typically have higher approval rates. Countries like the USA and UK have stricter requirements — our experts help you build a stronger application."
              linkHref="/visa-rejection"
              linkLabel="Check rejection rates by country"
            />
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="py-12 md:py-24 container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-white shadow-2xl rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 border border-slate-50">
          <div className="flex-1 w-full">
            <span className="bg-orange-500 text-white px-5 py-2 rounded-xl text-[10px] font-black mb-6 inline-block uppercase tracking-widest">
              Free counseling center
            </span>
            <h3 className="text-3xl md:text-5xl font-black text-[#005a31] mb-4">
              Let&apos;s design your future
            </h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Visit us in Cumilla or reach out online. We also have offices in{" "}
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
            <div className="space-y-6">
              <ContactInfo icon={<FaMapMarkerAlt />} text="Gomoti Tower (4th Floor), Cantonment, Cumilla" />
              <ContactInfo icon={<FaClock />} text="Sat – Thu (10 AM – 7 PM)" />
              <ContactInfo icon={<FaHeadset />} text="+8801631312524" />
            </div>
          </div>
          <div className="flex-1 w-full bg-slate-50 h-72 md:h-[400px] rounded-[3rem] md:rounded-[4rem] border-4 border-white shadow-inner flex items-center justify-center">
            <span className="text-slate-400 font-black italic text-sm md:text-base tracking-widest uppercase">
              Office location loading…
            </span>
          </div>
        </div>
      </section>

      {/* ── RELATED VISA LINKS FOOTER ── */}
      <div className="container mx-auto px-6 pb-10">
        <RelatedVisaLinks />
      </div>

      {/* ── FOOTER CTA ── */}
      <footer className="py-20 text-center px-6">
        <motion.div whileHover={{ scale: 1.02 }}>
          <a
            href="https://wa.me/8801631312524"
            className="inline-flex items-center gap-4 bg-[#005a31] text-white px-10 md:px-20 py-5 md:py-7 rounded-[2rem] text-lg md:text-2xl font-black shadow-2xl hover:bg-orange-600 transition-all uppercase"
          >
            Get free counseling <FaArrowRight />
          </a>
        </motion.div>
        <p className="mt-8 text-gray-400 text-xs">
          Also explore:{" "}
          <Link href="/our-services/visa-services/tourist-visa-from-bangladesh" className="hover:text-[#005a31] transition underline underline-offset-2">
            Tourist visa
          </Link>{" "}
          ·{" "}
          <Link href="/our-services/visa-services/work-visa-from-bangladesh" className="hover:text-[#005a31] transition underline underline-offset-2">
            Work visa
          </Link>{" "}
          ·{" "}
          <Link href="/visa" className="hover:text-[#005a31] transition underline underline-offset-2">
            All visa services
          </Link>
        </p>
        <p className="mt-4 text-gray-400 font-black uppercase text-[10px] tracking-[0.3em]">
          Excellence in education since 2018
        </p>
      </footer>
    </div>
  );
};

// ─── HELPER COMPONENTS ────────────────────────────────────────────────────────

const ServiceCard = ({ icon, title, desc, linkHref, linkLabel }) => (
  <motion.div
    whileHover={{ y: -15 }}
    className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-50 group hover:border-green-100 transition-all duration-500 flex flex-col"
  >
    <div className="w-16 h-16 bg-green-50 text-[#005a31] rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-[#005a31] group-hover:text-white transition-all duration-500 shadow-sm">
      {icon}
    </div>
    <h3 className="text-2xl font-black text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm font-medium flex-1">{desc}</p>
    {linkHref && (
      <Link
        href={linkHref}
        className="mt-6 text-sm text-[#005a31] font-semibold hover:underline inline-flex items-center gap-1"
      >
        {linkLabel} <FaArrowRight className="text-xs" />
      </Link>
    )}
  </motion.div>
);

const TrustItem = ({ icon, title, desc, href, linkLabel }) => (
  <div className="flex gap-6">
    <div className="mt-1 text-orange-400 text-3xl flex-shrink-0">{icon}</div>
    <div>
      <h4 className="font-black text-xl md:text-2xl mb-2">{title}</h4>
      <p className="text-green-100/70 text-sm md:text-base leading-relaxed font-medium mb-2">{desc}</p>
      {href && (
        <Link href={href} className="text-orange-400 text-xs font-semibold hover:underline">
          {linkLabel} →
        </Link>
      )}
    </div>
  </div>
);

const FAQItem = ({ question, answer, linkHref, linkLabel }) => (
  <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm">
    <h4 className="text-lg md:text-xl font-black text-[#005a31] mb-3 flex items-start gap-3">
      <span className="bg-orange-100 text-orange-600 w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">
        Q
      </span>
      {question}
    </h4>
    <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed ml-9 mb-3">{answer}</p>
    {linkHref && (
      <Link href={linkHref} className="ml-9 text-xs text-[#005a31] font-semibold hover:underline inline-flex items-center gap-1">
        {linkLabel} <FaArrowRight className="text-[10px]" />
      </Link>
    )}
  </div>
);

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center gap-5 group">
    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
      {icon}
    </div>
    <span className="font-black text-gray-700 text-base md:text-xl">{text}</span>
  </div>
);

export default StudentVisaBangladesh;