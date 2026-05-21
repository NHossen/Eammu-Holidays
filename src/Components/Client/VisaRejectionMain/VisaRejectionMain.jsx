/**
 * CLIENT COMPONENT — Visa Rejection Main
 * File: components/VisaRejectionMain/VisaRejectionMain.jsx
 *
 * SEO: All static content is rich, keyword-dense, and cross-linked
 * UX:  Accessible dropdowns, FAQ accordion, country rejection quick-links
 */

"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search, Globe, ChevronRight, AlertTriangle, ShieldCheck,
  XCircle, TrendingUp, Users, Star, ArrowRight, FileWarning,
  AlertCircle, CheckCircle2, Clock,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const VISA_TYPES = [
  { value: "tourist",  label: "Tourist / Visitor",  icon: "✈️" },
  { value: "student",  label: "Student Visa",        icon: "🎓" },
  { value: "work",     label: "Work Visa",           icon: "💼" },
  { value: "transit",  label: "Transit Visa",        icon: "🔁" },
  { value: "business", label: "Business Visa",       icon: "🤝" },
  { value: "family",   label: "Family / Spouse",     icon: "👨‍👩‍👧" },
];

// Top popular nationality→destination combos — directly linked to slug pages
const POPULAR = [
  { nationality: "Bangladesh", destination: "Canada",         type: "tourist",  rate: 38, trend: "up" },
  { nationality: "Bangladesh", destination: "United States",  type: "tourist",  rate: 42, trend: "up" },
  { nationality: "Bangladesh", destination: "United Kingdom", type: "tourist",  rate: 29, trend: "stable" },
  { nationality: "Bangladesh", destination: "Australia",      type: "student",  rate: 22, trend: "down" },
  { nationality: "Bangladesh", destination: "Germany",        type: "tourist",  rate: 33, trend: "stable" },
  { nationality: "Bangladesh", destination: "Italy",          type: "tourist",  rate: 28, trend: "stable" },
  { nationality: "India",      destination: "Canada",         type: "student",  rate: 18, trend: "down" },
  { nationality: "Pakistan",   destination: "United Kingdom", type: "tourist",  rate: 34, trend: "up" },
];

// Top country-specific rejection hub pages — sitemap: /visa-rejection/[slug]
const TOP_COUNTRY_REJECTION_PAGES = [
  {
    flag: "🇨🇦", country: "Canada",         slug: "bangladesh-visa-rejection-rate-for-canada-tourist",
    label: "Bangladesh → Canada",      rate: "38%", type: "Tourist", color: "red",
    tip: "Insufficient funds & weak ties are top reasons",
  },
  {
    flag: "🇺🇸", country: "USA",             slug: "bangladesh-visa-rejection-rate-for-united-states-tourist",
    label: "Bangladesh → USA",         rate: "42%", type: "B1/B2",  color: "red",
    tip: "Non-immigrant intent hardest to prove",
  },
  {
    flag: "🇬🇧", country: "UK",              slug: "bangladesh-visa-rejection-rate-for-united-kingdom-tourist",
    label: "Bangladesh → UK",          rate: "29%", type: "Tourist", color: "orange",
    tip: "Financial & employment docs critical",
  },
  {
    flag: "🇪🇺", country: "Schengen",        slug: "bangladesh-visa-rejection-rate-for-germany-tourist",
    label: "Bangladesh → Schengen",    rate: "33%", type: "Schengen",color: "orange",
    tip: "Travel insurance & hotel bookings mandatory",
  },
  {
    flag: "🇦🇺", country: "Australia",       slug: "bangladesh-visa-rejection-rate-for-australia-student",
    label: "Bangladesh → Australia",   rate: "22%", type: "Student", color: "yellow",
    tip: "GTE requirement is key for students",
  },
  {
    flag: "🇯🇵", country: "Japan",           slug: "bangladesh-visa-rejection-rate-for-japan-tourist",
    label: "Bangladesh → Japan",       rate: "19%", type: "Tourist", color: "yellow",
    tip: "Detailed itinerary & hotel bookings help most",
  },
  {
    flag: "🇩🇪", country: "Germany",         slug: "bangladesh-visa-rejection-rate-for-germany-tourist",
    label: "Bangladesh → Germany",     rate: "33%", type: "Schengen",color: "orange",
    tip: "Strict income-to-trip-cost ratio required",
  },
  {
    flag: "🇮🇹", country: "Italy",           slug: "bangladesh-visa-rejection-rate-for-italy-tourist",
    label: "Bangladesh → Italy",       rate: "28%", type: "Schengen",color: "orange",
    tip: "Invitation letter strengthens applications",
  },
  {
    flag: "🇸🇬", country: "Singapore",       slug: "bangladesh-visa-rejection-rate-for-singapore-tourist",
    label: "Bangladesh → Singapore",   rate: "16%", type: "Tourist", color: "green",
    tip: "Easiest with strong employment proof",
  },
  {
    flag: "🇲🇾", country: "Malaysia",        slug: "bangladesh-visa-rejection-rate-for-malaysia-tourist",
    label: "Bangladesh → Malaysia",    rate: "8%",  type: "Tourist", color: "green",
    tip: "Low rejection rate, eVisa available",
  },
  {
    flag: "🇹🇷", country: "Turkey",          slug: "bangladesh-visa-rejection-rate-for-turkey-tourist",
    label: "Bangladesh → Turkey",      rate: "5%",  type: "e-Visa",  color: "green",
    tip: "eVisa — very high approval rate",
  },
  {
    flag: "🇰🇷", country: "South Korea",     slug: "bangladesh-visa-rejection-rate-for-south-korea-tourist",
    label: "Bangladesh → South Korea", rate: "24%", type: "Tourist", color: "yellow",
    tip: "Biometrics & strong finances required",
  },
];

const REJECTION_REASONS = [
  {
    icon: "💰", title: "Insufficient Bank Balance",
    desc: "Bank balance too low for trip duration, or recent lump-sum deposits without salary history. Embassies look for 3–6 months of stable income.",
    fix: "Show 6 months bank statements with consistent salary deposits, not a sudden large transfer.",
  },
  {
    icon: "📋", title: "Incomplete or Incorrect Documents",
    desc: "Missing pages, expired passport, incorrect application form, or unsigned documents — any gap triggers rejection.",
    fix: "Use our Visa Checklist Generator to build a country-specific document list before applying.",
    link: "/travel-resources/visa-checklist-generator",
  },
  {
    icon: "🏠", title: "Weak Ties to Home Country",
    desc: "No proof of employment, property ownership, family responsibilities, or business operations that confirm you will return to Bangladesh.",
    fix: "Submit employer NOC, salary certificate, land documents, or trade license as evidence of strong home ties.",
  },
  {
    icon: "✈️", title: "Poor or No Travel History",
    desc: "First-time applicants with no prior visa stamps face automatic higher scrutiny. Embassies view zero travel history as higher flight-risk.",
    fix: "Build travel history with easier destinations first (Malaysia, Thailand, Turkey). Each visa stamp strengthens future applications.",
  },
  {
    icon: "🚫", title: "Undeclared Prior Rejection",
    desc: "Failing to declare previous visa refusals is treated as misrepresentation — it automatically causes rejection and may trigger a ban.",
    fix: "Always declare prior rejections. Address each refusal reason in your new application with supporting evidence.",
  },
  {
    icon: "📅", title: "Poor Application Timing",
    desc: "Applying too early (more than 6 months before travel) or too late (under 2 weeks) both cause rejections. Peak season brings stricter standards.",
    fix: "Apply 6–8 weeks before travel for most countries. Schengen and UK processing can take 3–6 weeks.",
  },
];

const STATS = [
  { label: "Countries Covered",  value: "195+", Icon: Globe       },
  { label: "Rejection Reasons",  value: "80+",  Icon: FileWarning },
  { label: "Monthly Checks",     value: "38K+", Icon: Users       },
  { label: "Avg. Accuracy",      value: "91%",  Icon: Star        },
];

const FAQ_ITEMS = [
  {
    q: "What is the visa rejection rate for Bangladeshi passport holders to Canada?",
    a: "The tourist visa rejection rate for Bangladeshi applicants to Canada is approximately 35–42%. The main reasons are insufficient bank balance, weak employment ties, and lack of prior travel history. Use our checker for the current rate and specific fix tips.",
  },
  {
    q: "Can I reapply for a visa after rejection?",
    a: "Yes. Wait for the cooling-off period (3–6 months for Schengen; varies per country), address all reasons in the refusal letter, and always declare the previous rejection in your new application. Never hide a prior refusal.",
  },
  {
    q: "Does a UK visa rejection affect other countries' visa applications?",
    a: "A UK rejection must be declared when applying to USA, Canada, Schengen, and most countries. It doesn't auto-disqualify you elsewhere if you address the original reasons. Countries like Malaysia and Turkey are less affected.",
  },
  {
    q: "What bank balance is needed to avoid visa rejection?",
    a: "UK: £2,000–£5,000+. Schengen: €3,000–€5,000 (€100/day minimum). Canada: CAD $5,000–$10,000+. USA: 3 months consistent salary + savings. Key: stable 3–6 month banking history, not just a recent large deposit.",
  },
  {
    q: "What is the Schengen visa rejection rate for Bangladesh?",
    a: "Schengen visa rejection for Bangladeshi applicants ranges from 28–35% depending on embassy and season. German and French embassies are strictest. Strong bank statements, employer NOC, hotel bookings, and travel insurance are critical.",
  },
  {
    q: "How long does a visa rejection ban last?",
    a: "Most countries don't impose a formal ban for a first rejection — you can reapply after the cooling-off period. However, multiple rejections in a short period, or rejection for misrepresentation, can result in 1–10 year bans depending on the country.",
  },
];

const INTERNAL_LINKS = [
  { label: "Visa Guide",                        href: "/visa/visa-guide" },
  { label: "All Visa Services",                 href: "/visa" },
  { label: "Schengen Visa Guide",               href: "/schengen-visa" },
  { label: "E-Visa Countries",                  href: "/visa/e-visa" },
  { label: "Visas for Dubai Residents",         href: "/visa/dubai-residents" },
  { label: "Visa Processing Time Tracker",      href: "/travel-resources/visa-processing-time-tracker" },
  { label: "Visa Checklist Generator",          href: "/travel-resources/visa-checklist-generator" },
  { label: "Travel Document Generator",         href: "/travel-resources/travel-document-generator" },
  { label: "Tourist Visa from Bangladesh",      href: "/our-services/visa-services/tourist-visa-from-bangladesh" },
  { label: "Student Visa from Bangladesh",      href: "/our-services/visa-services/student-visa-from-bangladesh" },
  { label: "Work Visa from Bangladesh",         href: "/our-services/visa-services/work-visa-from-bangladesh" },
  { label: "Study Abroad Guide",                href: "/study-abroad" },
  { label: "Scholarships by Country",           href: "/scholarships" },
  { label: "Canada Visa Application",           href: "/our-services/visa/canada-visa-application" },
  { label: "UK Visa Application",               href: "/our-services/visa/uk-visa-application" },
  { label: "USA Visa Application",              href: "/our-services/visa/usa-visa-application" },
  { label: "Australia Visa Application",        href: "/our-services/visa/australia-visa-application" },
  { label: "Germany Visa Application",          href: "/our-services/visa/germany-visa-application" },
  { label: "USA Interview Preparation",         href: "/target-usa-visa-interview-preparation" },
  { label: "IELTS & Immigration Center",        href: "/target-ielts-immigration-center" },
  { label: "Bangladesh Office",                 href: "/contact/travel-agency-bangladesh" },
  { label: "Dubai Office",                      href: "/contact/travel-agency-dubai" },
];

const BREADCRUMB = [
  { label: "Home",          href: "/" },
  { label: "Visa Services", href: "/visa" },
  { label: "Visa Rejection Checker" },
];

const container = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.07, duration: 0.4 } },
};
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/** Matches sitemap pattern: /visa-rejection/bangladesh-visa-rejection-rate-for-canada-tourist */
function makeSlug(nationality, destination, type) {
  const nat  = nationality.toLowerCase().replace(/\s+/g, "-");
  const dest = destination.toLowerCase().replace(/\s+/g, "-");
  return `${nat}-visa-rejection-rate-for-${dest}-${type}`;
}

function rateColor(rate) {
  if (rate >= 40) return { pill: "bg-red-100 text-red-700",    bar: "bg-red-500",    label: "High Risk" };
  if (rate >= 25) return { pill: "bg-orange-100 text-orange-700", bar: "bg-orange-500", label: "Medium Risk" };
  if (rate >= 15) return { pill: "bg-yellow-100 text-yellow-700", bar: "bg-yellow-400", label: "Low–Medium" };
  return            { pill: "bg-green-100 text-green-700",   bar: "bg-green-500",  label: "Low Risk" };
}

// ─────────────────────────────────────────────────────────────────────────────
// COUNTRY AUTOCOMPLETE
// ─────────────────────────────────────────────────────────────────────────────

function CountrySelect({ label, value, onChange, placeholder, countries, isLoading }) {
  const [open,  setOpen]  = useState(false);
  const [query, setQuery] = useState(value || "");
  const ref = useRef(null);

  useEffect(() => {
    const fn = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  useEffect(() => { if (!value) setQuery(""); }, [value]);

  const filtered = useMemo(() => {
    if (!query) return countries.slice(0, 8);
    return countries.filter(c => c.country.toLowerCase().includes(query.toLowerCase())).slice(0, 10);
  }, [query, countries]);

  const select = useCallback((c) => {
    onChange(c.country);
    setQuery(c.country);
    setOpen(false);
  }, [onChange]);

  return (
    <div ref={ref} className="relative">
      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{label}</label>
      <div className="relative">
        <Globe size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
        <input
          className="w-full pl-10 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-semibold text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-red-400 transition-all"
          placeholder={isLoading ? "Loading…" : placeholder}
          value={query}
          disabled={isLoading}
          onChange={e => { setQuery(e.target.value); onChange(""); setOpen(true); }}
          onFocus={() => setOpen(true)}
          autoComplete="off"
          aria-label={label}
          aria-autocomplete="list"
          aria-expanded={open && filtered.length > 0}
        />
        {isLoading && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <div className="w-4 h-4 border-2 border-red-200 border-t-red-500 rounded-full animate-spin" />
          </div>
        )}
      </div>
      <AnimatePresence>
        {open && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-2 bg-white border-2 border-red-100 rounded-2xl shadow-2xl overflow-hidden"
            role="listbox"
          >
            <div className="max-h-52 overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="px-4 py-3 text-sm text-slate-400">No country found for "{query}"</div>
              ) : (
                filtered.map(c => (
                  <button
                    key={c.code}
                    onMouseDown={() => select(c)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors text-left"
                    role="option"
                  >
                    {c.flag && <img src={c.flag} alt="" className="w-5 h-4 object-cover rounded-sm shrink-0" width={20} height={16} />}
                    <span className="text-sm font-semibold text-slate-800">{c.country}</span>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// VISA TYPE SELECT
// ─────────────────────────────────────────────────────────────────────────────

function VisaTypeSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const fn = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);
  const selected = VISA_TYPES.find(v => v.value === value);
  return (
    <div ref={ref} className="relative">
      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Visa Type</label>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-4 bg-slate-50 border-2 border-slate-100 hover:border-red-300 rounded-2xl text-sm text-left transition-all outline-none focus:border-red-400"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {selected
          ? <><span className="text-lg" aria-hidden="true">{selected.icon}</span><span className="font-bold text-slate-800 flex-1">{selected.label}</span></>
          : <span className="text-slate-300 flex-1 font-semibold">Select visa type…</span>
        }
        <svg className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-2 bg-white border-2 border-red-100 rounded-2xl shadow-2xl overflow-hidden"
            role="listbox"
          >
            {VISA_TYPES.map(v => (
              <button
                key={v.value}
                onMouseDown={() => { onChange(v.value); setOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-left text-sm hover:bg-red-50 transition-colors ${value === v.value ? "bg-red-50 text-red-800 font-black" : "text-slate-700 font-semibold"}`}
                role="option"
                aria-selected={value === v.value}
              >
                <span className="text-lg" aria-hidden="true">{v.icon}</span>
                {v.label}
                {value === v.value && <CheckCircle2 size={14} className="ml-auto text-red-500" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ ACCORDION
// ─────────────────────────────────────────────────────────────────────────────

function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <motion.section variants={fadeUp} className="mb-16" aria-label="Frequently asked questions about visa rejection">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight shrink-0">Visa Rejection FAQ</h2>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {FAQ_ITEMS.map((faq, i) => (
            <div
              key={i}
              className={`bg-white border-2 rounded-2xl overflow-hidden transition-all ${openIdx === i ? "border-red-400 shadow-lg shadow-red-50" : "border-slate-100 hover:border-slate-200"}`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full text-left p-5 flex items-start justify-between gap-4 group"
                aria-expanded={openIdx === i}
              >
                <span className="font-bold text-slate-800 text-sm leading-snug group-hover:text-red-700 transition-colors">{faq.q}</span>
                <span className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-black transition-all ${openIdx === i ? "bg-red-500 border-red-500 text-white rotate-45" : "border-slate-200 text-slate-400"}`}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────────────────────

export default function VisaRejectionMain({ countries = [] }) {
  const router = useRouter();
  const [nationality, setNationality] = useState("");
  const [destination, setDestination] = useState("");
  const [visaType,    setVisaType]    = useState("");
  const [error,       setError]       = useState("");
  const [isLoading,   setIsLoading]   = useState(countries.length === 0);

  useEffect(() => { if (countries.length > 0) setIsLoading(false); }, [countries]);

  const handleCheck = useCallback(() => {
    if (!nationality || !destination || !visaType) { setError("Please fill in all three fields to continue."); return; }
    if (nationality === destination) { setError("Nationality and destination cannot be the same."); return; }
    setError("");
    router.push(`/visa-rejection/${makeSlug(nationality, destination, visaType)}`);
  }, [nationality, destination, visaType, router]);

  return (
    <div className="min-h-screen bg-[#fafbfc] font-sans antialiased text-slate-900">

      {/* ── BREADCRUMB ── */}
      <nav aria-label="breadcrumb" className="bg-white border-b border-slate-100 py-3 px-6 pt-22">
        <div className="container mx-auto max-w-6xl flex flex-wrap gap-1.5 items-center text-xs text-slate-500">
          {BREADCRUMB.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {c.href ? (
                <Link href={c.href} className="hover:text-red-600 transition-colors font-medium">{c.label}</Link>
              ) : (
                <span className="text-slate-900 font-bold">{c.label}</span>
              )}
              {i < BREADCRUMB.length - 1 && <span className="text-slate-300">›</span>}
            </span>
          ))}
        </div>
      </nav>

      <motion.div variants={container} initial="initial" animate="animate">

        {/* ══════════════════════════════════════════════════════════
            HERO + CHECKER FORM
        ══════════════════════════════════════════════════════════ */}
        <section className="relative bg-white py-16 px-6 border-b border-slate-100 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/[0.03] rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-400/[0.04] rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="absolute inset-0 opacity-[0.012]" style={{
              backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }} />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.header variants={fadeUp} className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-2 rounded-full mb-6">
                <AlertTriangle size={13} className="text-red-500" aria-hidden="true" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-red-600">Know Before You Apply — 2026</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-5">
                Visa Rejection
                <span className="text-transparent" style={{ WebkitTextStroke: "2px #ef4444" }}> Risk Checker.</span>
              </h1>
              <p className="seo-speakable text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mb-5">
                Real visa refusal rates for <strong className="text-slate-800">195+ countries</strong>, by nationality and visa type.
                Understand why visas get refused and what to fix before you apply.
                Trusted by <strong className="text-slate-800">38,000+ travelers</strong> monthly.
              </p>
              {/* Hero cross-links */}
              <div className="flex flex-wrap justify-center gap-2" role="navigation" aria-label="Related visa tools">
                {[
                  { label: "← Visa Guide",          href: "/visa/visa-guide" },
                  { label: "Checklist Generator",    href: "/travel-resources/visa-checklist-generator" },
                  { label: "Processing Times",       href: "/travel-resources/visa-processing-time-tracker" },
                  { label: "Schengen Visa",          href: "/schengen-visa" },
                  { label: "E-Visa Countries",       href: "/visa/e-visa" },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="text-xs font-semibold text-slate-600 border border-slate-200 px-4 py-1.5 rounded-full hover:border-red-400 hover:text-red-700 hover:bg-red-50 transition">
                    {l.label}
                  </Link>
                ))}
              </div>
            </motion.header>

            {/* CHECKER CARD */}
            <motion.div variants={fadeUp} className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-7 md:p-10 shadow-2xl shadow-slate-200/50 max-w-5xl mx-auto">
              <h2 className="text-xl font-black text-slate-800 mb-7 flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500 rounded-xl flex items-center justify-center shrink-0" aria-hidden="true">
                  <Search size={15} className="text-white" />
                </div>
                Check Your Visa Rejection Risk
              </h2>

              <div className="grid md:grid-cols-3 gap-5 mb-5">
                <CountrySelect
                  label="Your Nationality"
                  value={nationality}
                  onChange={setNationality}
                  placeholder="e.g. Bangladesh"
                  countries={countries}
                  isLoading={isLoading}
                />
                <CountrySelect
                  label="Destination Country"
                  value={destination}
                  onChange={setDestination}
                  placeholder="e.g. Canada"
                  countries={countries}
                  isLoading={isLoading}
                />
                <VisaTypeSelect value={visaType} onChange={setVisaType} />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-600 text-sm font-semibold mb-4 px-4 py-3 bg-red-50 rounded-xl border border-red-100">
                  <AlertCircle size={16} aria-hidden="true" /> {error}
                </div>
              )}

              <button
                onClick={handleCheck}
                className="w-full py-5 bg-red-500 hover:bg-red-600 active:scale-[0.98] text-white font-black text-lg rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-red-200"
                aria-label="Check visa rejection risk"
              >
                <ShieldCheck size={21} aria-hidden="true" />
                Check Rejection Risk
                <ArrowRight size={19} aria-hidden="true" />
              </button>
              <p className="text-center text-xs text-slate-400 mt-3 font-medium">
                Free · No signup required · Based on real embassy data · Updated monthly
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            STATS BAR
        ══════════════════════════════════════════════════════════ */}
        <section className="bg-slate-900 py-8 px-6" aria-label="Rejection checker statistics">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map(({ label, value, Icon }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0" aria-hidden="true">
                    <Icon size={18} className="text-red-400" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-white">{value}</div>
                    <div className="text-xs text-slate-400 font-semibold">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            TOP COUNTRY REJECTION PAGES — direct slug links
        ══════════════════════════════════════════════════════════ */}
        <motion.section variants={fadeUp} className="py-16 px-6 bg-white" aria-label="Visa rejection rates by country">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-red-500 block mb-2">📊 Country-by-Country Data</span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Visa Rejection Rates by Country
                </h2>
                <p className="text-slate-500 text-sm mt-2 max-w-xl leading-relaxed">
                  Real refusal rates for the most-searched nationality → destination combinations.
                  Click any country to see the full breakdown, rejection reasons, and fix tips.
                </p>
              </div>
              <Link href="/visa/visa-guide" className="text-xs font-bold text-red-600 border-2 border-red-200 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white hover:border-red-500 transition shrink-0">
                Full visa guide →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TOP_COUNTRY_REJECTION_PAGES.map((c) => {
                const colors = rateColor(parseInt(c.rate));
                return (
                  <Link
                    key={c.slug}
                    href={`/visa-rejection/${c.slug}`}
                    className="group flex flex-col gap-3 p-5 bg-white border-2 border-slate-100 rounded-2xl hover:border-red-400 hover:shadow-xl hover:shadow-red-50 transition-all"
                    aria-label={`${c.label} visa rejection rate — ${c.rate} ${c.type}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl" aria-hidden="true">{c.flag}</span>
                        <div>
                          <div className="font-black text-slate-800 text-sm leading-tight">{c.label}</div>
                          <div className="text-[10px] text-slate-400 font-bold">{c.type}</div>
                        </div>
                      </div>
                      <span className={`text-sm font-black px-3 py-1.5 rounded-full ${colors.pill}`}>
                        {c.rate}
                      </span>
                    </div>

                    {/* Rate bar */}
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${colors.bar}`}
                        style={{ width: c.rate }}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-[10px] text-slate-400 leading-snug flex-1">{c.tip}</p>
                      <ChevronRight size={16} className="text-slate-300 group-hover:text-red-500 transition-colors shrink-0 ml-2" aria-hidden="true" />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Cross-links to country visa pages */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Also see visa application guides →</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Canada Visa",      href: "/our-services/visa/canada-visa-application" },
                  { label: "USA Visa",         href: "/our-services/visa/usa-visa-application" },
                  { label: "UK Visa",          href: "/our-services/visa/uk-visa-application" },
                  { label: "Australia Visa",   href: "/our-services/visa/australia-visa-application" },
                  { label: "Germany Visa",     href: "/our-services/visa/germany-visa-application" },
                  { label: "Japan Visa",       href: "/our-services/visa/japan-visa-application" },
                  { label: "Singapore Visa",   href: "/our-services/visa/singapore-visa-application" },
                  { label: "Malaysia Visa",    href: "/our-services/visa/malaysia-visa-application" },
                  { label: "Dubai Visa",       href: "/our-services/visa/dubai-visa-application" },
                  { label: "South Korea Visa", href: "/our-services/visa/south-korea-visa-application" },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-semibold hover:border-red-400 hover:text-red-700 transition">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════
            POPULAR HIGH-RISK COMBOS
        ══════════════════════════════════════════════════════════ */}
        <motion.section variants={fadeUp} className="py-16 px-6 bg-slate-50" aria-label="Most searched visa rejection combinations">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-red-500 block mb-2">🔥 Most Checked</span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Highest Rejection Rate Combinations</h2>
                <p className="text-slate-500 text-sm mt-1 font-medium">Based on real embassy refusal data · Updated monthly</p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider" aria-hidden="true">
                <TrendingUp size={13} /> Live Data
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {POPULAR.map((p, i) => {
                const slug = makeSlug(p.nationality, p.destination, p.type);
                const type = VISA_TYPES.find(v => v.value === p.type);
                const colors = rateColor(p.rate);
                return (
                  <Link
                    key={i}
                    href={`/visa-rejection/${slug}`}
                    className="group flex items-center justify-between p-5 bg-white border-2 border-slate-100 rounded-2xl hover:border-red-400 hover:shadow-lg transition-all"
                    aria-label={`${p.nationality} to ${p.destination} ${type?.label} rejection rate: ${p.rate}%`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center font-black text-slate-300 group-hover:bg-red-500 group-hover:text-white transition-all shrink-0 text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-black text-slate-800 text-sm">{p.nationality} → {p.destination}</div>
                        <div className="text-xs font-bold mt-0.5 text-slate-400" aria-hidden="true">
                          {type?.icon} {type?.label}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-black px-3 py-1.5 rounded-full ${colors.pill}`}>
                        {p.rate}% refused
                      </span>
                      <ChevronRight size={17} className="text-slate-300 group-hover:text-red-500 transition-colors" aria-hidden="true" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════
            REJECTION REASONS WITH FIXES
        ══════════════════════════════════════════════════════════ */}
        <motion.section variants={fadeUp} className="py-16 px-6 bg-white" aria-label="Visa rejection reasons and how to fix them">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-3">
                Why Visas Get Rejected — And How to Fix It
              </h2>
              <p className="text-slate-500 font-medium max-w-xl mx-auto text-sm leading-relaxed">
                The 6 most common reasons embassies refuse visa applications — with specific fixes for each.
                Use our{' '}
                <Link href="/travel-resources/visa-checklist-generator" className="text-red-600 font-semibold hover:underline">
                  Visa Checklist Generator
                </Link>{' '}
                to ensure your documents are complete.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {REJECTION_REASONS.map(({ icon, title, desc, fix, link }) => (
                <article
                  key={title}
                  className="bg-white rounded-[2rem] p-7 border-2 border-slate-100 hover:border-red-200 hover:shadow-lg hover:shadow-red-50 transition-all group"
                >
                  <div className="text-3xl mb-4" aria-hidden="true">{icon}</div>
                  <h3 className="text-base font-black text-slate-800 mb-2 group-hover:text-red-700 transition-colors">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">{desc}</p>
                  <div className="flex items-start gap-2 p-3 bg-green-50 border border-green-100 rounded-xl">
                    <CheckCircle2 size={14} className="text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-xs text-green-700 font-semibold leading-snug">
                      {link ? (
                        <><strong>Fix: </strong><Link href={link} className="text-green-700 hover:underline font-black">{fix}</Link></>
                      ) : (
                        <><strong>Fix: </strong>{fix}</>
                      )}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════
            HOW TO REAPPLY AFTER REJECTION
        ══════════════════════════════════════════════════════════ */}
        <motion.section variants={fadeUp} className="py-16 px-6 bg-slate-50" aria-label="How to reapply after visa rejection">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight shrink-0">
                Visa Rejected? Here's What to Do Next
              </h2>
              <div className="h-px flex-1 bg-slate-200 hidden sm:block" />
            </div>
            <div className="grid sm:grid-cols-5 gap-4">
              {[
                {
                  n: "01", title: "Read the Refusal Letter",
                  desc: "Every embassy rejection includes specific reasons. Read and understand each one before planning your reapplication.",
                  icon: "📩",
                },
                {
                  n: "02", title: "Wait the Cooling-Off Period",
                  desc: "Most countries require 3–6 months between applications. Reapplying too soon signals desperation and increases risk.",
                  icon: "⏳",
                },
                {
                  n: "03", title: "Fix Every Stated Reason",
                  desc: "Address each rejection reason with specific supporting documents. Use our Visa Checklist Generator to ensure completeness.",
                  icon: "📋",
                  link: "/travel-resources/visa-checklist-generator",
                },
                {
                  n: "04", title: "Declare the Prior Rejection",
                  desc: "Always disclose the previous refusal in your new application. Concealing it is misrepresentation and causes automatic rejection.",
                  icon: "✅",
                },
                {
                  n: "05", title: "Get Expert Review",
                  desc: "Have our certified visa consultants review your reapplication before submission to catch any remaining weak points.",
                  icon: "🛡️",
                  link: "/contact",
                },
              ].map(step => (
                <div key={step.n} className={`flex flex-col gap-3 p-5 bg-white border-2 border-slate-100 rounded-2xl hover:border-red-300 transition-all ${step.link ? "cursor-pointer" : ""}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl" aria-hidden="true">{step.icon}</span>
                    <span className="text-3xl font-black text-slate-100">{step.n}</span>
                  </div>
                  <h3 className="text-sm font-black text-slate-800 leading-snug">{step.title}</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
                  {step.link && (
                    <Link href={step.link} className="text-[11px] font-black text-red-600 hover:underline mt-auto">
                      {step.link === "/contact" ? "Book consultation →" : "Generate checklist →"}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════
            FAQ ACCORDION
        ══════════════════════════════════════════════════════════ */}
        <div className="py-16 bg-white">
          <FAQAccordion />
        </div>

        {/* ══════════════════════════════════════════════════════════
            SEO CONTENT BLOCK
        ══════════════════════════════════════════════════════════ */}
        <motion.section variants={fadeUp} className="py-16 px-6 bg-slate-50 border-t border-slate-100" aria-label="Visa rejection guide content">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-[2rem] border-2 border-slate-100 p-8 md:p-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">
                Visa Rejection Checker — Complete Guide 2026
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-500 leading-relaxed">
                <div className="space-y-4">
                  <p>
                    A visa rejection can delay your plans by months and negatively affect every future application. Our
                    Visa Rejection Risk Checker gives you the real refusal rate for your exact nationality and destination
                    — based on embassy statistics, VFS Global data, and official government transparency reports for{' '}
                    <Link href="/visa" className="text-red-600 font-semibold hover:underline">195+ countries</Link>.
                  </p>
                  <p>
                    For Bangladeshi applicants, the toughest destinations are the{' '}
                    <Link href="/visa-rejection/bangladesh-visa-rejection-rate-for-united-states-tourist" className="text-red-600 font-semibold hover:underline">USA (42%)</Link>,{' '}
                    <Link href="/visa-rejection/bangladesh-visa-rejection-rate-for-canada-tourist" className="text-red-600 font-semibold hover:underline">Canada (38%)</Link>, and{' '}
                    <Link href="/visa-rejection/bangladesh-visa-rejection-rate-for-germany-tourist" className="text-red-600 font-semibold hover:underline">Schengen Zone (28–35%)</Link>.
                    Lower-risk destinations include Malaysia, Turkey (e-visa), and Georgia.
                  </p>
                  <p>
                    Before applying for any visa, use our{' '}
                    <Link href="/travel-resources/visa-checklist-generator" className="text-red-600 font-semibold hover:underline">Visa Checklist Generator</Link>{' '}
                    to ensure every document is in order, and check our{' '}
                    <Link href="/travel-resources/visa-processing-time-tracker" className="text-red-600 font-semibold hover:underline">Processing Time Tracker</Link>{' '}
                    to plan your application timeline. The most preventable rejection cause is missing or incorrect documents —
                    responsible for over 30% of refusals.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    Financial documentation is the single biggest rejection factor. Embassies want to see 3–6 months
                    of stable, consistent salary deposits — not a sudden large transfer. For the{' '}
                    <Link href="/our-services/visa/uk-visa-application" className="text-red-600 font-semibold hover:underline">UK Standard Visitor Visa</Link>,
                    minimum balance is typically £2,000–£5,000. For{' '}
                    <Link href="/schengen-visa" className="text-red-600 font-semibold hover:underline">Schengen visas</Link>,
                    €100/day of stay is the standard rule.
                  </p>
                  <p>
                    Rejected for a{' '}
                    <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-red-600 font-semibold hover:underline">student visa</Link>?
                    The Genuine Temporary Entrant (GTE) requirement for Australia and the Statement of Purpose (SOP)
                    for many countries are the leading causes. Our consultants help prepare compelling SOPs and financial
                    sponsorship letters that dramatically improve approval rates.
                  </p>
                  <p>
                    If you're applying for the{' '}
                    <Link href="/target-usa-visa-interview-preparation" className="text-red-600 font-semibold hover:underline">US visa interview</Link>,
                    the B1/B2 in-person interview is critical — how you answer questions about travel purpose
                    and home ties directly determines your outcome. We provide dedicated interview coaching at our{' '}
                    <Link href="/contact/travel-agency-bangladesh" className="text-red-600 font-semibold hover:underline">Dhaka</Link>{' '}
                    and{' '}
                    <Link href="/contact/travel-agency-dubai" className="text-red-600 font-semibold hover:underline">Dubai</Link>{' '}
                    offices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════
            RELATED SERVICES BANNER
        ══════════════════════════════════════════════════════════ */}
        <motion.section variants={fadeUp} className="py-12 px-6 bg-white" aria-label="Related visa services">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Study abroad */}
              <div className="bg-slate-900 text-white rounded-3xl p-7 flex flex-col justify-between gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-yellow-400 mb-2">🎓 Study Abroad</p>
                  <h3 className="font-black text-white text-lg mb-1">Student Visa Rejected?</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    We handle{' '}
                    <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-yellow-400 font-semibold hover:underline">student visa applications</Link>,
                    SOP writing,{' '}
                    <Link href="/scholarships" className="text-yellow-400 font-semibold hover:underline">scholarship guidance</Link>,
                    and{' '}
                    <Link href="/target-ielts-immigration-center" className="text-yellow-400 font-semibold hover:underline">IELTS prep</Link>.
                  </p>
                </div>
                <Link href="/study-abroad" className="self-start px-5 py-2.5 bg-yellow-400 text-black rounded-xl font-black text-sm hover:bg-yellow-300 transition">
                  Study Abroad Guide →
                </Link>
              </div>
              {/* USA interview */}
              <div className="bg-blue-900 text-white rounded-3xl p-7 flex flex-col justify-between gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-blue-300 mb-2">🇺🇸 USA Specialist</p>
                  <h3 className="font-black text-white text-lg mb-1">US Visa Interview Coaching</h3>
                  <p className="text-sm text-blue-200 leading-relaxed">
                    Expert preparation for B1/B2, F1, and immigrant visa interviews.
                    Dramatically improves your chances after a prior refusal.
                  </p>
                </div>
                <Link href="/target-usa-visa-interview-preparation" className="self-start px-5 py-2.5 bg-blue-500 text-white rounded-xl font-black text-sm hover:bg-blue-400 transition">
                  Prepare for Interview →
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════
            FULL INTERNAL LINKS FOOTER
        ══════════════════════════════════════════════════════════ */}
        <motion.section variants={fadeUp} className="py-14 px-6 bg-slate-50 border-t-2 border-slate-100" aria-label="Related pages">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-5">
              Explore All Visa Services &amp; Tools
            </h2>
            <div className="flex flex-wrap gap-2 mb-10">
              {INTERNAL_LINKS.map((l) => (
                <Link key={l.href} href={l.href}
                  className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-semibold hover:border-red-400 hover:text-red-700 hover:bg-red-50 transition">
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 bg-slate-900 text-white rounded-3xl p-7">
              <div>
                <p className="font-black text-lg mb-1">Need personalised visa help?</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Certified visa consultants in{' '}
                  <Link href="/contact/travel-agency-bangladesh" className="text-red-400 font-semibold hover:underline">Dhaka</Link>{' '}
                  and{' '}
                  <Link href="/contact/travel-agency-dubai" className="text-red-400 font-semibold hover:underline">Dubai</Link>.
                  98% approval rate · 42,000+ travelers helped.
                </p>
              </div>
              <div className="flex gap-3 shrink-0 flex-wrap">
                <Link href="/visa/visa-guide"
                  className="px-5 py-2.5 border border-slate-600 text-slate-300 rounded-xl text-xs font-bold hover:border-red-400 hover:text-red-400 transition">
                  Visa Guide
                </Link>
                <Link href="/contact"
                  className="px-5 py-2.5 bg-red-500 text-white rounded-xl text-xs font-black hover:bg-red-400 transition">
                  Book Consultation →
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

      </motion.div>
    </div>
  );
}