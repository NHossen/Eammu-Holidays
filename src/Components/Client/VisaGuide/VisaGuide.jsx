"use client";
import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import visaData from '@/app/data/visaguide.json';
import { createSlug } from '@/app/lib/utils';

// ─────────────────────────────────────────────────────────────────────────────
// DATA CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

const POPULAR_ROUTES = [
  { origin: 'Bangladesh', dest: 'Canada',        time: '8–12 weeks',  type: 'Sticker Visa' },
  { origin: 'Bangladesh', dest: 'United States', time: '4–8 weeks',   type: 'Non-immigrant B1/B2' },
  { origin: 'Bangladesh', dest: 'United Kingdom',time: '3–6 weeks',   type: 'Standard Visitor' },
  { origin: 'Bangladesh', dest: 'Australia',     time: '4–8 weeks',   type: 'Tourist Subclass 600' },
  { origin: 'Bangladesh', dest: 'Germany',       time: '2–3 weeks',   type: 'Schengen Type-C' },
  { origin: 'Bangladesh', dest: 'Italy',         time: '10–15 days',  type: 'Schengen Type-C' },
  { origin: 'Bangladesh', dest: 'Malaysia',      time: '3–7 days',    type: 'eNTRI / Sticker' },
  { origin: 'Bangladesh', dest: 'Thailand',      time: '3–5 days',    type: 'Tourist / VOA' },
];

const STATS = [
  { value: '195+', label: 'Countries Covered',   icon: '🌏', sub: 'Every passport, every destination' },
  { value: '98%',  label: 'Approval Rate',        icon: '✅', sub: 'Industry-leading success rate' },
  { value: '42K+', label: 'Travelers Served',     icon: '✈️', sub: 'Since 2018' },
  { value: '24/7', label: 'Expert Support',       icon: '🛡️', sub: 'Bangladesh & Dubai offices' },
];

const VISA_TYPES = [
  { icon: '🏖️', label: 'Tourist',   desc: 'Leisure & sightseeing',       href: '/our-services/visa-services/tourist-visa-from-bangladesh',  badge: 'Most popular' },
  { icon: '💼', label: 'Business',  desc: 'Meetings, conferences',        href: '/our-services/visa-services',                                badge: null },
  { icon: '🎓', label: 'Student',   desc: 'Academic enrollment',          href: '/our-services/visa-services/student-visa-from-bangladesh',  badge: 'High demand' },
  { icon: '👨‍👩‍👧', label: 'Family',    desc: 'Reunification & sponsorship', href: '/our-services/visa-services',                                badge: null },
  { icon: '💊', label: 'Medical',   desc: 'Treatment & healthcare',       href: '/our-services/visa-services',                                badge: null },
  { icon: '🧳', label: 'Transit',   desc: 'Layover & onward travel',      href: '/our-services/visa-services',                                badge: null },
  { icon: '🏢', label: 'Work',      desc: 'Employment abroad',            href: '/our-services/visa-services/work-visa-from-bangladesh',     badge: null },
  { icon: '🇪🇺', label: 'Schengen',  desc: '27-country Europe access',     href: '/schengen-visa',                                             badge: 'New guide' },
];

const RESOURCE_LINKS = [
  { icon: '✓',  label: 'Visa Checklist Generator',      href: '/travel-resources/visa-checklist-generator',          desc: 'Personalized document list' },
  { icon: '⏱', label: 'Processing Time Tracker',        href: '/travel-resources/visa-processing-time-tracker',      desc: 'Real-time wait estimates' },
  { icon: '📄', label: 'Travel Document Generator',     href: '/travel-resources/travel-document-generator',         desc: 'Itinerary & cover letters' },
  { icon: '📊', label: 'Visa Rejection Rates',          href: '/visa-rejection',                                     desc: 'Know your odds first' },
  { icon: '🇪🇺', label: 'Schengen Visa Guide',           href: '/schengen-visa',                                      desc: 'Europe multi-country visa' },
  { icon: '🎓', label: 'Study Abroad Hub',              href: '/study-abroad',                                       desc: 'Visa + scholarships' },
  { icon: '📱', label: 'E-Visa Countries',              href: '/visa/e-visa',                                        desc: 'Apply online, skip embassy' },
  { icon: '🇦🇪', label: 'Dubai Residents Visas',        href: '/visa/dubai-residents',                               desc: 'For UAE residents' },
];

const FEATURED_COUNTRIES = [
  { name: 'Canada',       href: '/our-services/visa/canada-visa-application',       flag: '🇨🇦', time: '8–12w' },
  { name: 'USA',          href: '/our-services/visa/usa-visa-application',           flag: '🇺🇸', time: '4–8w' },
  { name: 'UK',           href: '/our-services/visa/uk-visa-application',           flag: '🇬🇧', time: '3–6w' },
  { name: 'Australia',    href: '/our-services/visa/australia-visa-application',    flag: '🇦🇺', time: '4–8w' },
  { name: 'Germany',      href: '/our-services/visa/germany-visa-application',      flag: '🇩🇪', time: '10–15d' },
  { name: 'Dubai',        href: '/our-services/visa/dubai-visa-application',        flag: '🇦🇪', time: '3–5d' },
  { name: 'Japan',        href: '/our-services/visa/japan-visa-application',        flag: '🇯🇵', time: '5–7d' },
  { name: 'Malaysia',     href: '/our-services/visa/malaysia-visa-application',     flag: '🇲🇾', time: '3–7d' },
  { name: 'Thailand',     href: '/our-services/visa/thailand-visa-application',     flag: '🇹🇭', time: '3–5d' },
  { name: 'Singapore',    href: '/our-services/visa/singapore-visa-application',    flag: '🇸🇬', time: '5–7d' },
  { name: 'Turkey',       href: '/our-services/visa/turkey-visa-application',       flag: '🇹🇷', time: '1–3d' },
  { name: 'Portugal',     href: '/our-services/visa/portugal-visa-application',     flag: '🇵🇹', time: '10–15d' },
  { name: 'India',        href: '/our-services/visa/india-visa-application',        flag: '🇮🇳', time: '3–5d' },
  { name: 'Georgia',      href: '/our-services/visa/georgia-visa-application',      flag: '🇬🇪', time: '1–3d' },
  { name: 'Saudi Arabia', href: '/our-services/visa/saudi-arabia-visa-application', flag: '🇸🇦', time: '5–10d' },
  { name: 'South Korea',  href: '/our-services/visa/south-korea-visa-application',  flag: '🇰🇷', time: '5–7d' },
  { name: 'Qatar',        href: '/our-services/visa/qatar-visa-application',        flag: '🇶🇦', time: '3–7d' },
  { name: 'China',        href: '/our-services/visa/china-visa-application',        flag: '🇨🇳', time: '4–7d' },
];

// All sitemap-mapped hub links for footer internal linking
const ALL_INTERNAL_LINKS = [
  // Visa hubs
  { label: 'All Visa Services',                   href: '/visa' },
  { label: 'Visa Guide',                          href: '/visa/visa-guide' },
  { label: 'E-Visa Countries',                    href: '/visa/e-visa' },
  { label: 'Schengen Visa',                       href: '/schengen-visa' },
  { label: 'Visas for Dubai Residents',           href: '/visa/dubai-residents' },
  { label: 'Visas from India',                    href: '/visa/india' },
  { label: 'Visa Rejection Rates',                href: '/visa-rejection' },
  // Service pages
  { label: 'Tourist Visa from Bangladesh',        href: '/our-services/visa-services/tourist-visa-from-bangladesh' },
  { label: 'Student Visa from Bangladesh',        href: '/our-services/visa-services/student-visa-from-bangladesh' },
  { label: 'Work Visa from Bangladesh',           href: '/our-services/visa-services/work-visa-from-bangladesh' },
  // Tools
  { label: 'Visa Checklist Generator',            href: '/travel-resources/visa-checklist-generator' },
  { label: 'Processing Time Tracker',             href: '/travel-resources/visa-processing-time-tracker' },
  { label: 'Travel Document Generator',           href: '/travel-resources/travel-document-generator' },
  // Study
  { label: 'Study Abroad Guide',                  href: '/study-abroad' },
  { label: 'Student Visa Hub',                    href: '/study-abroad/student-visa' },
  { label: 'Scholarships by Country',             href: '/scholarships' },
  { label: 'IELTS & Immigration Center',          href: '/target-ielts-immigration-center' },
  // Other
  { label: 'Tour Packages',                       href: '/our-services/tour-packages' },
  { label: 'Flight Booking',                      href: '/flight-booking' },
  { label: 'News & Travel Feeds',                 href: '/news-feeds' },
  { label: 'Eammu Offers',                        href: '/offers' },
  // Office contacts
  { label: 'Bangladesh Office',                   href: '/contact/travel-agency-bangladesh' },
  { label: 'Dubai Office',                        href: '/contact/travel-agency-dubai' },
  { label: 'Armenia Office',                      href: '/contact/travel-agency-armenia' },
  { label: 'Georgia Office',                      href: '/contact/travel-agency-georgia' },
];

const FAQ_ITEMS = [
  {
    q: "What documents are required for a tourist visa from Bangladesh?",
    a: "For most destinations, you need: valid passport (6+ months remaining), completed application form, bank statements (3–6 months, minimum $3,000–$5,000 balance), employment letter or business registration, confirmed hotel bookings, return flight tickets, travel insurance, and NOC from employer. Use our Visa Checklist Generator for a country-specific document list.",
  },
  {
    q: "How long does visa processing take from Bangladesh?",
    a: "Processing times vary widely: UK Standard Visitor Visa takes 3–6 weeks; Canada Temporary Resident Visa 8–12 weeks; Schengen visas 10–15 business days; Malaysia/Thailand/Dubai 3–7 days. Our Processing Time Tracker shows real-time estimates per country and visa type.",
  },
  {
    q: "Which countries offer e-visa or visa on arrival for Bangladeshi passport holders?",
    a: "E-visa countries include Turkey, Georgia, Azerbaijan, Sri Lanka, Kenya, Cambodia, and more. Visa on arrival is available in Thailand (15 days), Maldives (30 days), Nepal (90 days), and others. See our complete E-Visa Countries guide for the updated 2026 list.",
  },
  {
    q: "What is a Schengen visa and how many countries does it cover?",
    a: "A Schengen visa lets you travel across all 27 Schengen member states with a single visa — including Germany, France, Italy, Spain, Portugal, Netherlands, and more. You apply at the embassy of your primary destination. See our full Schengen Visa Guide.",
  },
  {
    q: "Why do Bangladesh visa applications get rejected most often?",
    a: "Top rejection reasons: insufficient bank balance, missing strong ties to Bangladesh (job, property, family), incomplete documents, prior overstay history, inconsistent information, and weak travel history. Check our Visa Rejection Rate Database by country to understand your risk before applying.",
  },
  {
    q: "Can I apply for a visa without a travel agent in Bangladesh?",
    a: "Yes, most visas can be applied for directly. However, working with our certified consultants significantly reduces rejection risk through document review, application verification, and embassy submission support — backed by our 98% approval rate across 42,000+ applications.",
  },
];

const BREADCRUMB = [
  { label: 'Home', href: '/' },
  { label: 'Visa Services', href: '/visa' },
  { label: 'Visa Guide' },
];

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────────────────────────────────────
const container = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.07, duration: 0.4 } },
};
const item = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb" className="bg-white border-b border-slate-100 py-3 px-5">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-1.5 items-center text-xs text-slate-500">
        {BREADCRUMB.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-yellow-600 transition-colors font-medium">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-slate-900 font-bold">{crumb.label}</span>
            )}
            {i < BREADCRUMB.length - 1 && (
              <span className="text-slate-300 text-xs">›</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}

function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <motion.section variants={item} aria-label="Frequently asked questions about visa applications" className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-black tracking-tight text-slate-900 shrink-0">
          Visa FAQ — 2026
        </h2>
        <div className="h-px flex-1 bg-slate-200" />
      </div>
      <div className="space-y-3">
        {FAQ_ITEMS.map((faq, i) => (
          <div
            key={i}
            className={`bg-white border-2 rounded-2xl overflow-hidden transition-all ${
              openIdx === i ? 'border-yellow-400 shadow-lg shadow-yellow-50' : 'border-slate-100 hover:border-slate-200'
            }`}
          >
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full text-left p-5 flex items-start justify-between gap-4 group"
              aria-expanded={openIdx === i}
            >
              <span className="font-bold text-slate-800 text-sm leading-snug group-hover:text-yellow-700 transition-colors">
                {faq.q}
              </span>
              <span className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-black transition-all ${
                openIdx === i ? 'bg-yellow-400 border-yellow-400 text-white rotate-45' : 'border-slate-200 text-slate-400'
              }`}>
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIdx === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function ResourceGrid() {
  return (
    <motion.section variants={item} aria-label="Visa tools and resources" className="mb-14">
      <div className="flex items-center gap-4 mb-5">
        <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 shrink-0">
          Visa Tools &amp; Resources
        </h2>
        <div className="h-px flex-1 bg-slate-200/80" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
        {RESOURCE_LINKS.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="flex flex-col items-center gap-2 p-3.5 bg-white border-2 border-slate-100 rounded-2xl text-center hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-50 transition-all group"
          >
            <span className="text-xl" aria-hidden="true">{r.icon}</span>
            <span className="text-[10px] font-black text-slate-700 group-hover:text-yellow-700 transition leading-snug">
              {r.label}
            </span>
            <span className="text-[9px] text-slate-400 leading-snug hidden sm:block">{r.desc}</span>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}

function InternalLinksFooter() {
  return (
    <motion.section variants={item} className="mt-20 pt-10 border-t-2 border-slate-100">
      <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-5">
        Explore All Visa Services &amp; Resources
      </h2>
      <div className="flex flex-wrap gap-2 mb-10">
        {ALL_INTERNAL_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-semibold hover:border-yellow-400 hover:text-yellow-700 hover:bg-yellow-50 transition"
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* CTA bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 bg-slate-900 text-white rounded-3xl p-7">
        <div>
          <p className="font-black text-lg mb-1">Need personalised visa help?</p>
          <p className="text-sm text-slate-400 leading-relaxed">
            Speak to our certified visa consultants in{' '}
            <Link href="/contact/travel-agency-bangladesh" className="text-yellow-400 font-semibold hover:underline">
              Dhaka
            </Link>{' '}
            or{' '}
            <Link href="/contact/travel-agency-dubai" className="text-yellow-400 font-semibold hover:underline">
              Dubai
            </Link>
            . 98% approval rate · 42,000+ travelers helped.
          </p>
        </div>
        <div className="flex gap-3 shrink-0 flex-wrap">
          <Link
            href="/our-services/tour-packages"
            className="px-5 py-2.5 border border-slate-600 text-slate-300 rounded-xl text-xs font-bold hover:border-yellow-400 hover:text-yellow-400 transition"
          >
            Tour Packages
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-yellow-400 text-black rounded-xl text-xs font-black hover:bg-yellow-300 transition"
          >
            Book Consultation →
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function VisaGuide() {
  const [origin, setOrigin] = useState('bangladesh');
  const [destination, setDestination] = useState('canada');
  const [searchQ, setSearchQ] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  const originData = useMemo(() => visaData.find(c => c.country.toLowerCase() === origin), [origin]);
  const destData   = useMemo(() => visaData.find(c => c.country.toLowerCase() === destination), [destination]);

  const suggestions = useMemo(() => {
    if (!searchQ.trim()) return [];
    return visaData
      .filter(c => c.country.toLowerCase().includes(searchQ.toLowerCase()))
      .slice(0, 6);
  }, [searchQ]);

  const handleSuggestionClick = useCallback((country) => {
    setDestination(country.toLowerCase());
    setSearchQ(country);
    setShowSuggestions(false);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-[#fafbfc] font-sans antialiased text-slate-900 overflow-x-hidden pt-20">

      {/* ── Background decoration ── */}
      <div className="fixed inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-yellow-50/40 to-transparent" />
        <div className="absolute top-[-5%] right-[-8%] w-[500px] h-[500px] bg-yellow-200/10 rounded-full blur-[140px]" />
        <div className="absolute top-[30%] left-[-5%] w-[300px] h-[300px] bg-slate-200/20 rounded-full blur-[100px]" />
      </div>

      {/* ── Breadcrumb ── */}
      <Breadcrumb />

      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        className="max-w-6xl mx-auto px-5 py-12 md:py-18"
      >

        {/* ══════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════ */}
        <motion.header variants={item} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-yellow-50 border border-yellow-200 rounded-full">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-[10px] font-black tracking-[0.2em] text-yellow-700 uppercase">
              Eammu Holidays · Visa Intelligence Portal · Updated 2026
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-5 tracking-tight text-slate-900 leading-[1.04]">
            Visa requirements,{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-600">
                embassy verified.
              </span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200/60 rounded -z-0" aria-hidden="true" />
            </span>
          </h1>

          <p className="seo-speakable text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed mb-2">
            The most comprehensive visa guide for Bangladeshi travelers — accurate document checklists, processing times,
            rejection rates, and step-by-step application guidance for{' '}
            <strong className="text-slate-700">195+ countries in 2026</strong>.
            Trusted by <strong className="text-slate-700">42,000+ travelers</strong>.
          </p>

          {/* Hero quick-links — internal cross-linking */}
          <div className="flex flex-wrap justify-center gap-2 mt-6" role="navigation" aria-label="Quick visa links">
            {[
              { label: '← All Visa Services', href: '/visa' },
              { label: 'Schengen Guide', href: '/schengen-visa' },
              { label: 'E-Visa Countries', href: '/visa/e-visa' },
              { label: 'Rejection Rates', href: '/visa-rejection' },
              { label: 'Dubai Residents', href: '/visa/dubai-residents' },
              { label: 'India Visas', href: '/visa/india' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs font-semibold text-slate-600 border border-slate-200 px-4 py-1.5 rounded-full hover:border-yellow-400 hover:text-yellow-700 hover:bg-yellow-50 transition"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </motion.header>

        {/* ══════════════════════════════════════════════════════════
            STATS BAR
        ══════════════════════════════════════════════════════════ */}
        <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {STATS.map(s => (
            <div key={s.label} className="bg-white border-2 border-slate-100 rounded-2xl p-5 text-center shadow-sm hover:border-yellow-300 transition">
              <div className="text-2xl mb-2" aria-hidden="true">{s.icon}</div>
              <div className="text-2xl font-black text-slate-900 tracking-tight">{s.value}</div>
              <div className="text-xs font-black uppercase tracking-wider text-slate-500 mt-0.5">{s.label}</div>
              <div className="text-[9px] text-slate-400 mt-1">{s.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* ══════════════════════════════════════════════════════════
            SEARCH / SELECTOR COMMAND CENTER
        ══════════════════════════════════════════════════════════ */}
        <motion.section variants={item} aria-label="Visa guide search" className="relative z-20 mb-16">
          <div className="bg-white/90 backdrop-blur-2xl p-5 md:p-8 rounded-[2.5rem] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.10)] border-2 border-slate-100">
            <p className="text-center text-xs font-black uppercase tracking-widest text-slate-400 mb-7">
              Select your nationality &amp; destination — get your personalised visa guide instantly
            </p>

            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">

              {/* Origin selector */}
              <div className="flex-1 bg-slate-50 p-5 rounded-[1.8rem] border-2 border-slate-100 hover:border-yellow-300 focus-within:border-yellow-400 transition-all">
                <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                  🌍 Your Nationality / Passport
                </label>
                <div className="flex items-center gap-3">
                  {originData?.flag && (
                    <img
                      src={originData.flag}
                      className="w-8 h-5 object-cover rounded shadow-sm shrink-0"
                      alt={`${originData.country} flag`}
                      width={32}
                      height={20}
                    />
                  )}
                  <select
                    value={origin}
                    onChange={e => setOrigin(e.target.value)}
                    className="bg-transparent text-lg font-bold outline-none cursor-pointer capitalize w-full appearance-none text-slate-800"
                    aria-label="Select your nationality"
                  >
                    {visaData.filter(c => c.country.toLowerCase() !== destination).map(c => (
                      <option key={c.code} value={c.country.toLowerCase()}>{c.country}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Arrow */}
              <div
                className="hidden md:flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full shadow-lg shadow-yellow-200 text-black shrink-0"
                aria-hidden="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </div>

              {/* Destination — with autocomplete */}
              <div className="flex-1 bg-slate-50 p-5 rounded-[1.8rem] border-2 border-slate-100 hover:border-yellow-300 focus-within:border-yellow-400 transition-all relative" ref={searchRef}>
                <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                  📍 Destination Country
                </label>
                <div className="flex items-center gap-3">
                  {destData?.flag && (
                    <img
                      src={destData.flag}
                      className="w-8 h-5 object-cover rounded shadow-sm shrink-0"
                      alt={`${destData.country} flag`}
                      width={32}
                      height={20}
                    />
                  )}
                  <input
                    type="text"
                    value={searchQ || destData?.country || ''}
                    onChange={e => { setSearchQ(e.target.value); setShowSuggestions(true); }}
                    onFocus={() => setShowSuggestions(true)}
                    placeholder="Search destination..."
                    className="bg-transparent text-lg font-bold outline-none capitalize w-full text-slate-800 placeholder:text-slate-400"
                    aria-label="Search destination country"
                    aria-autocomplete="list"
                    aria-expanded={showSuggestions && suggestions.length > 0}
                  />
                </div>

                {/* Suggestions dropdown */}
                <AnimatePresence>
                  {showSuggestions && suggestions.length > 0 && (
                    <motion.ul
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-yellow-200 rounded-2xl shadow-xl z-50 overflow-hidden"
                      role="listbox"
                    >
                      {suggestions.map((c) => (
                        <li key={c.code} role="option" aria-selected={destination === c.country.toLowerCase()}>
                          <button
                            onClick={() => handleSuggestionClick(c.country)}
                            className="w-full text-left px-5 py-3 flex items-center gap-3 hover:bg-yellow-50 transition text-sm font-semibold text-slate-800"
                          >
                            {c.flag && (
                              <img src={c.flag} className="w-6 h-4 object-cover rounded shadow-sm shrink-0" alt="" width={24} height={16} />
                            )}
                            {c.country}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA */}
              <Link
                href={`/visa/visa-guide/${createSlug(destination)}-visa-for-${createSlug(origin)}`}
                className="w-full md:w-auto bg-white hover:bg-yellow-400 hover:text-black text-white px-8 py-6 rounded-[1.8rem] font-black transition-all shadow-xl active:scale-95 text-center flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                <span>Check Requirements</span>
                <svg className="group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </Link>
            </div>

            {/* Quick preview row */}
            {originData && destData && (
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 font-semibold">
                <span>Showing guide for:</span>
                {originData.flag && <img src={originData.flag} className="w-5 h-3 object-cover rounded-sm" alt="" />}
                <span className="capitalize font-black text-slate-800">{origin}</span>
                <span className="text-slate-300">→</span>
                {destData.flag && <img src={destData.flag} className="w-5 h-3 object-cover rounded-sm" alt="" />}
                <span className="capitalize font-black text-slate-800">{destination}</span>
                <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-black text-[9px] uppercase tracking-wider">Ready</span>
                <span className="text-slate-300">·</span>
                <Link
                  href={`/visa-rejection/${createSlug(destination)}-visa-rejection-rate-for-${createSlug(origin)}-tourist`}
                  className="text-yellow-600 hover:underline font-semibold"
                >
                  Check rejection rate →
                </Link>
                <span className="text-slate-300">·</span>
                <Link
                  href={`/travel-resources/visa-processing-time-tracker/${createSlug(destination)}-national-visa-processing-time-for-${createSlug(origin)}-sticker`}
                  className="text-yellow-600 hover:underline font-semibold"
                >
                  Processing time →
                </Link>
              </div>
            )}
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════
            RESOURCE TOOLS GRID
        ══════════════════════════════════════════════════════════ */}
        <ResourceGrid />

        {/* ══════════════════════════════════════════════════════════
            VISA TYPES
        ══════════════════════════════════════════════════════════ */}
        <motion.section variants={item} aria-label="Browse by visa type" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl font-black tracking-tight text-slate-900 shrink-0">Browse by visa type</h2>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {VISA_TYPES.map(v => (
              <Link
                key={v.label}
                href={v.href}
                className="group relative flex flex-col items-center gap-2 p-4 bg-white border-2 border-slate-100 rounded-2xl hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-50 transition-all text-center"
              >
                {v.badge && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-yellow-400 text-black text-[8px] font-black rounded-full uppercase tracking-wider whitespace-nowrap">
                    {v.badge}
                  </span>
                )}
                <span className="text-2xl" aria-hidden="true">{v.icon}</span>
                <span className="text-[10px] font-black text-slate-700 group-hover:text-yellow-700 transition leading-snug">{v.label}</span>
                <span className="text-[9px] text-slate-400 text-center leading-tight hidden md:block">{v.desc}</span>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════
            FEATURED COUNTRY VISA PAGES
        ══════════════════════════════════════════════════════════ */}
        <motion.section variants={item} aria-label="Visa application guides by country" className="mb-16">
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <h2 className="text-xl font-black tracking-tight text-slate-900 shrink-0">
              Visa application guides by country
            </h2>
            <div className="h-px flex-1 bg-slate-200 hidden sm:block" />
            <Link href="/visa" className="text-xs font-semibold text-yellow-600 hover:underline shrink-0">
              View all destinations →
            </Link>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
            {FEATURED_COUNTRIES.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="flex flex-col items-center gap-1.5 p-3.5 bg-white border-2 border-slate-100 rounded-2xl hover:border-yellow-400 hover:shadow-md hover:shadow-yellow-50 transition-all group text-center"
              >
                <span className="text-xl" aria-label={c.name}>{c.flag}</span>
                <span className="text-[10px] font-black text-slate-700 group-hover:text-yellow-700 transition leading-tight">
                  {c.name}
                </span>
                <span className="text-[9px] text-slate-400">{c.time}</span>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════
            POPULAR ROUTES
        ══════════════════════════════════════════════════════════ */}
        <motion.section variants={item} aria-label="Most searched visa routes" className="mb-16">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-slate-900">
                🔥 Most searched visa routes
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Based on real monthly search volume — updated weekly.{' '}
                <Link href="/visa-rejection" className="text-yellow-600 hover:underline font-semibold">
                  Check rejection rates
                </Link>{' '}
                before you apply.
              </p>
            </div>
            <Link
              href="/travel-resources/visa-checklist-generator"
              className="text-xs font-bold text-yellow-700 border-2 border-yellow-300 px-4 py-2 rounded-full hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition shrink-0"
            >
              Generate checklist →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {POPULAR_ROUTES.map((r, i) => {
              const destEntry = visaData.find(c => c.country === r.dest);
              const origEntry = visaData.find(c => c.country === r.origin);
              return (
                <Link
                  key={i}
                  href={`/visa/visa-guide/${createSlug(r.dest)}-visa-for-${createSlug(r.origin)}`}
                  className="group flex items-center gap-4 p-4 bg-white border-2 border-slate-100 rounded-2xl hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-50 transition-all"
                >
                  <div className="w-9 h-9 bg-slate-50 rounded-xl flex items-center justify-center text-sm font-black text-slate-400 group-hover:bg-yellow-400 group-hover:text-black transition-all shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    {origEntry?.flag && <img src={origEntry.flag} className="w-7 h-5 object-cover rounded shadow-sm shrink-0" alt={r.origin} width={28} height={20} />}
                    <span className="text-xs text-slate-300 font-bold shrink-0">→</span>
                    {destEntry?.flag && <img src={destEntry.flag} className="w-7 h-5 object-cover rounded shadow-sm shrink-0" alt={r.dest} width={28} height={20} />}
                    <div className="ml-1 min-w-0">
                      <div className="text-sm font-black text-slate-800 truncate">{r.origin} → {r.dest}</div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] text-slate-400 font-semibold">{r.type} · {r.time}</span>
                        <Link
                          href={`/visa-rejection/${createSlug(r.dest)}-visa-rejection-rate-for-${createSlug(r.origin)}-tourist`}
                          onClick={e => e.stopPropagation()}
                          className="text-[10px] text-yellow-600 font-semibold hover:underline"
                        >
                          Rejection rate →
                        </Link>
                      </div>
                    </div>
                  </div>
                  <svg className="text-slate-300 group-hover:text-yellow-500 shrink-0 transition-colors" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </Link>
              );
            })}
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════
            ALL DESTINATIONS GRID (dynamic, filtered by origin)
        ══════════════════════════════════════════════════════════ */}
        <motion.section variants={item} aria-label={`Visa destinations for ${origin} citizens`} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-black tracking-tight shrink-0">
              All destinations for <span className="capitalize">{origin}</span> citizens
            </h2>
            <div className="h-px w-full bg-slate-200/60" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {visaData
              .filter(d => d.country.toLowerCase() !== origin)
              .slice(0, 20)
              .map((c, idx) => (
                <motion.div
                  key={c.code}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.025 }}
                  whileHover={{ y: -5 }}
                >
                  <Link
                    href={`/visa/visa-guide/${createSlug(c.country)}-visa-for-${createSlug(origin)}`}
                    className="group relative flex flex-col items-center p-6 bg-white rounded-[2rem] border-2 border-slate-100 hover:border-yellow-400 shadow-sm hover:shadow-xl hover:shadow-yellow-50 transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/0 to-yellow-50/60 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    <div className="relative z-10 w-14 h-9 mb-4 overflow-hidden rounded-lg shadow-md">
                      <img
                        src={c.flag}
                        alt={`${c.country} visa for ${origin} citizens`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        width={56}
                        height={36}
                        loading="lazy"
                      />
                    </div>
                    <span className="relative z-10 text-sm font-black text-slate-800 tracking-tight text-center capitalize group-hover:text-yellow-700 transition-colors leading-tight">
                      {c.country}
                    </span>
                    <span className="relative z-10 text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-widest group-hover:text-yellow-500 transition-colors">
                      View guide →
                    </span>
                  </Link>
                </motion.div>
              ))}
          </div>

          <div className="text-center mt-6">
            <Link
              href="/visa"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold text-sm hover:border-yellow-400 hover:text-yellow-700 transition"
            >
              View all visa destinations →
            </Link>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════
            STUDY ABROAD BANNER
        ══════════════════════════════════════════════════════════ */}
        <motion.aside variants={item} className="mb-14" aria-label="Study abroad visa services">
          <div className="bg-slate-900 text-white rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/20 rounded-full mb-3">
                <span className="text-yellow-400 text-xs font-black uppercase tracking-wider">🎓 Study Abroad 2026</span>
              </div>
              <h3 className="font-black text-white text-xl mb-2">Planning to study abroad?</h3>
              <p className="text-sm text-slate-400 max-w-lg leading-relaxed">
                We handle{' '}
                <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-yellow-400 font-semibold hover:underline">
                  student visas
                </Link>
                ,{' '}
                <Link href="/scholarships" className="text-yellow-400 font-semibold hover:underline">
                  scholarships for 258+ countries
                </Link>
                , and{' '}
                <Link href="/target-ielts-immigration-center" className="text-yellow-400 font-semibold hover:underline">
                  IELTS preparation
                </Link>{' '}
                — all in one place. View specific guides for{' '}
                <Link href="/study-abroad/student-visa" className="text-yellow-400 font-semibold hover:underline">
                  student visa requirements by country
                </Link>.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link href="/study-abroad" className="px-6 py-3 bg-yellow-400 text-black rounded-xl font-black text-sm hover:bg-yellow-300 transition">
                Study Abroad Guide
              </Link>
              <Link href="/scholarships" className="px-6 py-3 border border-slate-600 text-slate-300 rounded-xl font-bold text-sm hover:border-yellow-400 hover:text-yellow-400 transition">
                Find Scholarships
              </Link>
            </div>
          </div>
        </motion.aside>

        {/* ══════════════════════════════════════════════════════════
            WHY CHOOSE US
        ══════════════════════════════════════════════════════════ */}
        <motion.section variants={item} className="grid md:grid-cols-3 gap-8 border-t-2 border-slate-100 pt-14 mb-16">
          {[
            {
              icon: '📡',
              title: 'Live 2026 Embassy Data',
              desc: 'Requirements refreshed monthly across 195+ countries. Policy changes, fee updates, and VFS announcements tracked automatically — so your application is never rejected for outdated information.',
              href: '/travel-resources/visa-processing-time-tracker',
              linkLabel: 'Track processing times →',
            },
            {
              icon: '🛡️',
              title: 'Certified Consultant Review',
              desc: 'Every document package is reviewed by our certified visa consultants before submission. We catch errors, missing signatures, and insufficient bank balances before the embassy does.',
              href: '/travel-resources/visa-checklist-generator',
              linkLabel: 'Generate your checklist →',
            },
            {
              icon: '📈',
              title: '98% Approval Rate',
              desc: 'Our proven document preparation process has helped 42,000+ travelers get approved across UK, US, Canada, Schengen, and more. We know exactly what embassies look for — and what gets rejected.',
              href: '/visa-rejection',
              linkLabel: 'See rejection rates by country →',
            },
          ].map((f, i) => (
            <article key={i} className="flex gap-4">
              <span className="text-4xl shrink-0" aria-hidden="true">{f.icon}</span>
              <div>
                <h3 className="font-black text-slate-900 mb-2 text-lg">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">{f.desc}</p>
                <Link href={f.href} className="text-xs font-black text-yellow-600 hover:underline">
                  {f.linkLabel}
                </Link>
              </div>
            </article>
          ))}
        </motion.section>

        {/* ══════════════════════════════════════════════════════════
            FAQ SECTION (JSON-LD matched)
        ══════════════════════════════════════════════════════════ */}
        <FAQSection />

        {/* ══════════════════════════════════════════════════════════
            SEO TEXT CONTENT BLOCK
        ══════════════════════════════════════════════════════════ */}
        <motion.section
          variants={item}
          className="mb-14 bg-white rounded-[2rem] border-2 border-slate-100 p-8 md:p-12"
          aria-label="Visa guide information for Bangladeshi travelers"
        >
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            Complete Visa Guide for Bangladeshi Travelers — 2026
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-500 leading-relaxed">
            <div className="space-y-4">
              <p>
                Getting an international visa as a Bangladeshi passport holder requires understanding each embassy's specific
                requirements — and those requirements change frequently. Eammu Holidays maintains Bangladesh's most up-to-date
                visa intelligence portal, covering{' '}
                <Link href="/visa" className="text-yellow-600 font-semibold hover:underline">
                  195+ destination countries
                </Link>{' '}
                with embassy-verified accuracy.
              </p>
              <p>
                For the most popular routes — including{' '}
                <Link href="/our-services/visa/canada-visa-application" className="text-yellow-600 font-semibold hover:underline">
                  Canada tourist visa
                </Link>
                ,{' '}
                <Link href="/our-services/visa/uk-visa-application" className="text-yellow-600 font-semibold hover:underline">
                  UK Standard Visitor Visa
                </Link>
                ,{' '}
                <Link href="/our-services/visa/usa-visa-application" className="text-yellow-600 font-semibold hover:underline">
                  US B1/B2 visa
                </Link>
                , and{' '}
                <Link href="/schengen-visa" className="text-yellow-600 font-semibold hover:underline">
                  Schengen multi-entry visa
                </Link>{' '}
                — our guides cover mandatory documents, bank statement requirements, photo specifications, and step-by-step
                processing timelines.
              </p>
              <p>
                Worried about rejection? Use our{' '}
                <Link href="/visa-rejection" className="text-yellow-600 font-semibold hover:underline">
                  visa rejection rate database
                </Link>{' '}
                to check approval odds before applying, and our{' '}
                <Link href="/travel-resources/visa-checklist-generator" className="text-yellow-600 font-semibold hover:underline">
                  visa checklist generator
                </Link>{' '}
                to ensure your documents are complete.
              </p>
              <p>
                Dubai residents and{' '}
                <Link href="/visa/dubai-residents" className="text-yellow-600 font-semibold hover:underline">
                  UAE-based Bangladeshi professionals
                </Link>{' '}
                can access a separate guide covering visa requirements from the UAE — including{' '}
                <Link href="/visa/india" className="text-yellow-600 font-semibold hover:underline">
                  visa applications from India
                </Link>
                .
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Our team of certified visa consultants monitors embassy circulars, VFS Global announcements, and consulate
                policy updates daily. Every guide reflects current 2026 protocols — not outdated information from years ago.
              </p>
              <p>
                From{' '}
                <Link href="/travel-resources/travel-document-generator" className="text-yellow-600 font-semibold hover:underline">
                  travel document generation
                </Link>{' '}
                (itineraries, hotel bookings, cover letters, bank statements guidance) to{' '}
                <Link href="/travel-resources/visa-processing-time-tracker" className="text-yellow-600 font-semibold hover:underline">
                  real-time processing time tracking
                </Link>
                , we give you everything you need to prepare a complete and compelling visa application.
              </p>
              <p>
                Planning to study abroad? We assist with{' '}
                <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-yellow-600 font-semibold hover:underline">
                  student visas from Bangladesh
                </Link>
                ,{' '}
                <Link href="/scholarships" className="text-yellow-600 font-semibold hover:underline">
                  scholarship applications for 258+ countries
                </Link>
                , and{' '}
                <Link href="/target-ielts-immigration-center" className="text-yellow-600 font-semibold hover:underline">
                  IELTS &amp; immigration preparation
                </Link>
                .
              </p>
              <p>
                Want to skip the embassy queue?{' '}
                <Link href="/visa/e-visa" className="text-yellow-600 font-semibold hover:underline">
                  E-visa countries for Bangladeshi passport holders
                </Link>{' '}
                are expanding every year — including Turkey, Georgia, Azerbaijan, Cambodia, and Sri Lanka. Check our updated
                e-visa list for the fastest approval options.
              </p>
            </div>
          </div>

          {/* How it works — structured for HowTo schema match */}
          <div className="mt-10 pt-8 border-t border-slate-100">
            <h3 className="text-lg font-black text-slate-800 mb-5">How to apply for a visa from Bangladesh — step by step</h3>
            <ol className="grid sm:grid-cols-5 gap-4 list-none">
              {[
                { n: '01', title: 'Check Requirements',       desc: 'Use our visa guide to look up exact requirements for your nationality & destination.', href: '/visa/visa-guide' },
                { n: '02', title: 'Build Your Checklist',     desc: 'Generate a personalised document list using our visa checklist tool.', href: '/travel-resources/visa-checklist-generator' },
                { n: '03', title: 'Verify Processing Times',  desc: 'Plan your application timeline using our real-time processing tracker.', href: '/travel-resources/visa-processing-time-tracker' },
                { n: '04', title: 'Prepare Documents',        desc: 'Our consultants review your full document package before submission.', href: '/contact' },
                { n: '05', title: 'Submit & Track',           desc: 'We handle embassy appointment scheduling and application submission.', href: '/contact/travel-agency-bangladesh' },
              ].map(step => (
                <li key={step.n}>
                  <Link
                    href={step.href}
                    className="group flex flex-col gap-2 p-4 bg-slate-50 hover:bg-yellow-50 border-2 border-slate-100 hover:border-yellow-300 rounded-2xl transition h-full"
                  >
                    <span className="text-2xl font-black text-slate-200 group-hover:text-yellow-300 transition">{step.n}</span>
                    <span className="text-xs font-black text-slate-800 group-hover:text-yellow-700 transition leading-snug">{step.title}</span>
                    <span className="text-[10px] text-slate-400 leading-relaxed">{step.desc}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════
            USA VISA INTERVIEW BANNER (high-value page)
        ══════════════════════════════════════════════════════════ */}
        <motion.aside variants={item} className="mb-14">
          <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-3xl p-7 flex flex-col sm:flex-row items-center gap-5 justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-blue-300 mb-1">🇺🇸 USA Visa Specialist</p>
              <h3 className="font-black text-white text-lg mb-1">US Visa Interview Preparation</h3>
              <p className="text-sm text-slate-400">
                Expert coaching for B1/B2, F1 student, and immigrant visa interviews — from our{' '}
                <Link href="/target-usa-visa-interview-preparation" className="text-blue-300 font-semibold hover:underline">
                  USA visa interview preparation center
                </Link>
                .
              </p>
            </div>
            <Link
              href="/target-usa-visa-interview-preparation"
              className="shrink-0 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-xl font-black text-sm transition"
            >
              Prepare for interview →
            </Link>
          </div>
        </motion.aside>

        {/* ══════════════════════════════════════════════════════════
            FULL INTERNAL LINKS FOOTER
        ══════════════════════════════════════════════════════════ */}
        <InternalLinksFooter />

      </motion.div>
    </div>
  );
}