// /app/visa/e-visa/page.jsx  — SERVER COMPONENT (no "use client")
// ─────────────────────────────────────────────────────────────────────────────
// SEO Strategy:
//  • All static content renders as real HTML — Google crawls every link on page 1.
//  • Interactive checker (autocomplete dropdowns) is a tiny client island.
//  • A-Z filter & pagination use URL search params (?letter=A&page=2) —
//    every filtered view has a stable, crawlable URL.
//  • Countries grid populated from JSON at build/request time — no client fetch.
//  • Rich content: e-Visa types, nationality-specific tables, document checklist,
//    processing times, fee comparison, rejection tips, scholarship cross-links.
//  • Mobile overflow fix: overflow-x-hidden on root + hero section.
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import COUNTRIES from "@/app/data/countries.json";
import { createSlug } from "@/app/lib/utils";
import { EVISAChecker }   from "./_evisa-checker";
import { AZFilter }       from "./_az-filter";
import { ViewModeToggle } from "./_view-mode-toggle";

// ── METADATA ──────────────────────────────────────────────────────────────────
// export const metadata = {
//   title: "e-Visa Requirements by Nationality & Destination 2026 | eammu.com",
//   description: "Check e-Visa eligibility, documents, fees & processing time for any nationality + destination. Nigerian, Ghanaian, Indian passport e-Visa guides updated for 2026.",
//   keywords: "e-visa requirements 2026, e-visa Indian passport, Nigerian passport e-visa, Ghanaian passport e-visa, Turkey e-visa, UAE e-visa, Kenya ETA, Sri Lanka ETA, e-visa online apply",
//   alternates: { canonical: "https://eammu.com/visa/e-visa" },
//   openGraph: {
//     title: "e-Visa Requirements by Nationality & Destination 2026",
//     description: "100% online. No embassy visit. Check exact e-Visa requirements for 200+ destinations.",
//     url: "https://eammu.com/visa/e-visa",
//     siteName: "eammu.com",
//     type: "website",
//   },
// };

// ── STATIC DATA ───────────────────────────────────────────────────────────────

const FEATURED_COMBOS = [
  { nationality: "Nigerian",     natSlug: "nigerian",     destination: "Turkey",                destSlug: "turkey",               tag: "e-Visa Online" },
  { nationality: "Ghanaian",     natSlug: "ghanaian",     destination: "UAE",                   destSlug: "united-arab-emirates", tag: "e-Visa" },
  { nationality: "Indian",       natSlug: "indian",       destination: "Sri Lanka",             destSlug: "sri-lanka",            tag: "ETA" },
  { nationality: "Nigerian",     natSlug: "nigerian",     destination: "Malaysia",              destSlug: "malaysia",             tag: "eNTRI" },
  { nationality: "Ghanaian",     natSlug: "ghanaian",     destination: "Kenya",                 destSlug: "kenya",                tag: "e-Visa" },
  { nationality: "Indian",       natSlug: "indian",       destination: "Singapore",             destSlug: "singapore",            tag: "e-Visa" },
  { nationality: "Nigerian",     natSlug: "nigerian",     destination: "Kenya",                 destSlug: "kenya",                tag: "e-Visa" },
  { nationality: "Ghanaian",     natSlug: "ghanaian",     destination: "Turkey",                destSlug: "turkey",               tag: "e-Visa" },
  { nationality: "Indian",       natSlug: "indian",       destination: "Thailand",              destSlug: "thailand",             tag: "e-Visa" },
  { nationality: "Nigerian",     natSlug: "nigerian",     destination: "Cambodia",              destSlug: "cambodia",             tag: "e-Visa" },
  { nationality: "Ghanaian",     natSlug: "ghanaian",     destination: "Rwanda",                destSlug: "rwanda",               tag: "e-Visa" },
  { nationality: "Indian",       natSlug: "indian",       destination: "UAE",                   destSlug: "united-arab-emirates", tag: "e-Visa" },
  { nationality: "Bangladeshi",  natSlug: "bangladeshi",  destination: "Turkey",                destSlug: "turkey",               tag: "e-Visa" },
  { nationality: "Pakistani",    natSlug: "pakistani",    destination: "Turkey",                destSlug: "turkey",               tag: "e-Visa" },
  { nationality: "South African",natSlug: "south-african",destination: "Kenya",                 destSlug: "kenya",                tag: "e-Visa" },
  { nationality: "Kenyan",       natSlug: "kenyan",       destination: "Rwanda",                destSlug: "rwanda",               tag: "e-Visa" },
  { nationality: "Indian",       natSlug: "indian",       destination: "Cambodia",              destSlug: "cambodia",             tag: "e-Visa" },
  { nationality: "Nigerian",     natSlug: "nigerian",     destination: "Rwanda",                destSlug: "rwanda",               tag: "e-Visa" },
];

const POPULAR_DESTINATIONS = [
  { name: "Turkey",               emoji: "🇹🇷", tag: "e-Visa Online",   slug: "turkey" },
  { name: "United Arab Emirates", emoji: "🇦🇪", tag: "e-Visa",          slug: "united-arab-emirates" },
  { name: "Kenya",                emoji: "🇰🇪", tag: "e-Visa",          slug: "kenya" },
  { name: "Sri Lanka",            emoji: "🇱🇰", tag: "ETA",             slug: "sri-lanka" },
  { name: "Cambodia",             emoji: "🇰🇭", tag: "e-Visa",          slug: "cambodia" },
  { name: "Rwanda",               emoji: "🇷🇼", tag: "e-Visa",          slug: "rwanda" },
  { name: "Malaysia",             emoji: "🇲🇾", tag: "eNTRI / eVISA",   slug: "malaysia" },
  { name: "Singapore",            emoji: "🇸🇬", tag: "e-Visa",          slug: "singapore" },
  { name: "Thailand",             emoji: "🇹🇭", tag: "e-Visa",          slug: "thailand" },
  { name: "Egypt",                emoji: "🇪🇬", tag: "e-Visa",          slug: "egypt" },
  { name: "Bahrain",              emoji: "🇧🇭", tag: "e-Visa",          slug: "bahrain" },
  { name: "Oman",                 emoji: "🇴🇲", tag: "e-Visa",          slug: "oman" },
];

// e-Visa types explanation — high-value SEO content
const EVISA_TYPES = [
  {
    type: "Standard e-Visa",
    icon: "💻",
    desc: "Applied online via the destination country's official government portal. Approved as a PDF sent to your email. Most common type — Turkey, Egypt, Azerbaijan, Cambodia.",
    examples: ["Turkey", "Egypt", "Azerbaijan", "Cambodia"],
  },
  {
    type: "ETA (Electronic Travel Authorisation)",
    icon: "✈️",
    desc: "Electronically linked to your passport — no document to print. Common for Australia, Sri Lanka, and UK. Approval is automatic for most nationalities.",
    examples: ["Sri Lanka", "Australia", "Canada", "UK"],
  },
  {
    type: "eNTRI / eVISA",
    icon: "🔗",
    desc: "Malaysia's specific system. eNTRI is for single-entry short stays; eVISA for longer or multiple-entry stays. Both applied online, fast approval.",
    examples: ["Malaysia eNTRI", "Malaysia eVISA"],
  },
  {
    type: "e-VOA (Visa on Arrival, Pre-approved)",
    icon: "🛬",
    desc: "Pre-approved online before arrival, collected at the airport immigration counter. Avoids long queues at the border. Common for Vietnam, Indonesia.",
    examples: ["Vietnam", "Indonesia", "Bolivia"],
  },
];

// Nationality-specific e-visa access table
const NATIONALITY_EVISA_TABLE = [
  { nationality: "Indian",        natSlug: "indian",        countries: ["Turkey","Sri Lanka","Thailand","UAE","Cambodia","Egypt","Azerbaijan","Armenia","Georgia","Kenya"],       strongPassport: false },
  { nationality: "Nigerian",      natSlug: "nigerian",      countries: ["Turkey","Kenya","Rwanda","Cambodia","Mozambique","Bahrain","Oman","Qatar","Egypt","Togo"],               strongPassport: false },
  { nationality: "Ghanaian",      natSlug: "ghanaian",      countries: ["Turkey","Kenya","Rwanda","UAE","Cambodia","Bahrain","Egypt","Sierra Leone","Senegal","Togo"],            strongPassport: false },
  { nationality: "Bangladeshi",   natSlug: "bangladeshi",   countries: ["Turkey","Sri Lanka","Cambodia","Maldives","Nepal","Bhutan","Indonesia","Thailand","Egypt","Jordan"],     strongPassport: false },
  { nationality: "Pakistani",     natSlug: "pakistani",     countries: ["Turkey","Sri Lanka","Cambodia","Indonesia","Malaysia","Thailand","Egypt","Azerbaijan","Jordan","Nepal"],  strongPassport: false },
  { nationality: "South African", natSlug: "south-african", countries: ["Kenya","Rwanda","Mozambique","Zambia","Zimbabwe","Egypt","Turkey","Malaysia","Thailand","Singapore"],    strongPassport: true },
];

// Processing time & fee comparison — rich snippet candidate
const EVISA_FEE_TABLE = [
  { country: "Turkey",   flag: "🇹🇷", fee: "$51",  processingMin: "Instant",    processingMax: "3 hours",      validity: "180 days",  stay: "90 days", multi: "Single" },
  { country: "UAE",      flag: "🇦🇪", fee: "AED 300–600", processingMin: "24hr", processingMax: "5 days",   validity: "60 days",   stay: "30–90 days", multi: "Single/Multi" },
  { country: "Kenya",    flag: "🇰🇪", fee: "$51",  processingMin: "24hr",       processingMax: "3 days",       validity: "90 days",  stay: "90 days", multi: "Single" },
  { country: "Sri Lanka",flag: "🇱🇰", fee: "$50",  processingMin: "Instant",    processingMax: "24hr",         validity: "6 months", stay: "30 days", multi: "Double" },
  { country: "Cambodia", flag: "🇰🇭", fee: "$30",  processingMin: "3 days",     processingMax: "5 days",       validity: "3 months", stay: "30 days", multi: "Single" },
  { country: "Egypt",    flag: "🇪🇬", fee: "$25",  processingMin: "2hr",        processingMax: "72hr",         validity: "90 days",  stay: "30 days", multi: "Single" },
  { country: "Azerbaijan",flag:"🇦🇿", fee: "$23",  processingMin: "3 days",     processingMax: "3 days",       validity: "90 days",  stay: "30 days", multi: "Single" },
  { country: "Rwanda",   flag: "🇷🇼", fee: "$50",  processingMin: "24hr",       processingMax: "48hr",         validity: "90 days",  stay: "30 days", multi: "Single" },
];

// Document checklist — most-searched informational content
const EVISA_DOCUMENT_CHECKLIST = [
  { item: "Valid Passport",              detail: "Minimum 6 months validity beyond arrival date. Must have at least 1–2 blank pages." },
  { item: "Digital Photo",              detail: "ICAO-compliant, white background, taken within 3 months. Most portals require JPEG under 2MB." },
  { item: "Return/Onward Flight",        detail: "Confirmed booking showing you'll leave within the permitted stay. Refundable tickets acceptable." },
  { item: "Hotel or Accommodation",      detail: "Booking confirmation for your full stay. Airbnb or guesthouse confirmation usually accepted." },
  { item: "e-Visa Fee Payment Card",     detail: "Valid debit or credit card (Visa/Mastercard). Some portals only accept international cards." },
  { item: "Email Address",              detail: "Your approved e-Visa will be sent here. Use a reliable address you check regularly." },
  { item: "Travel Insurance (optional)", detail: "Not mandatory for most e-Visas but strongly recommended. Schengen requires €30,000 minimum." },
  { item: "Bank Statement (some only)",  detail: "UAE, Kenya, and some others may ask for proof of funds. 3-month statements usually sufficient." },
];

// Rejection reasons — "e-visa rejected" high-search queries
const EVISA_REJECTION_REASONS = [
  { reason: "Passport validity under 6 months",   fix: "Renew your passport before applying. Most portals auto-reject short-validity passports." },
  { reason: "Photo not meeting ICAO standards",    fix: "Use a professional photo service or online ICAO photo tool. White background is mandatory." },
  { reason: "Wrong or outdated personal details",  fix: "Exactly match your passport. Typos in name, DOB, or passport number cause instant rejection." },
  { reason: "Payment card declined",              fix: "Use an international Visa/Mastercard. Prepaid cards and local-only cards often fail." },
  { reason: "Nationality not eligible",           fix: "Not all e-Visas are open to all nationalities. Check eligibility before applying." },
  { reason: "Previous immigration violations",     fix: "Prior overstays or deportations may cause rejection. Disclose honestly and consult an expert." },
];

const WHY_US = [
  { icon: "⚡", title: "100% Online Applications",  desc: "Skip embassy queues entirely. Our experts guide you through every e-Visa portal step by step — error-free, first time." },
  { icon: "🛡️", title: "98% Approval Rate",         desc: "We know exactly what each e-Visa system flags. Our document review eliminates the most common rejection triggers." },
  { icon: "📋", title: "Updated Monthly 2026",      desc: "e-Visa rules change frequently. Our guides are verified monthly against official government portals and immigration authority announcements." },
  { icon: "🌍", title: "200+ Countries Covered",    desc: "From Turkey e-Visa to Cambodia ETA — we cover every major e-Visa destination for every nationality." },
];

const TESTIMONIALS = [
  { name: "Abena Mensah",     country: "Turkey e-Visa Approved ✅",    text: "Got my Turkey e-Visa in 3 hours as a Ghanaian passport holder. The team filled out the form correctly and I avoided the rejection I had last time trying alone.", stars: 5 },
  { name: "Emeka Obi",        country: "UAE e-Visa Approved ✅",       text: "Nigerian passport holder — UAE e-Visa approved in 24 hours. The process was seamless with their guidance. Highly recommended!", stars: 5 },
  { name: "Priya Nair",       country: "Kenya e-Visa Approved ✅",     text: "Got Kenya e-Visa within 48 hours from India. The team walked me through the ETA portal perfectly. No issues at the border.", stars: 5 },
  { name: "Amir Hassan",      country: "Sri Lanka ETA Approved ✅",    text: "Applied for Sri Lanka ETA for our family trip. All 4 passports processed overnight. Perfect documents, zero stress at Colombo airport.", stars: 5 },
  { name: "Chinwe Adeyemi",   country: "Rwanda e-Visa Approved ✅",    text: "Nigerian passport. Rwanda e-Visa approved in under 36 hours. The gorilla trekking permit and e-visa sorted in one session. Brilliant service.", stars: 5 },
  { name: "Rohan Sharma",     country: "Cambodia e-Visa Approved ✅",  text: "Indian passport, Cambodia e-Visa. The guide showed me exactly what photo format and file size the portal accepts. Approved same day.", stars: 5 },
];

const HOW_IT_WORKS = [
  { n: "01", title: "Select Nationality & Destination", desc: "Choose your passport nationality and the country you want to visit. We instantly match you with the correct e-Visa type and portal." },
  { n: "02", title: "Check Exact Requirements",         desc: "View the exact documents, fees, photo specs, and eligibility criteria for your specific nationality + destination combination." },
  { n: "03", title: "Submit Your Application",          desc: "Our team fills the official government e-Visa portal on your behalf — accurately, with zero form errors or photo rejections." },
  { n: "04", title: "Receive Your e-Visa",              desc: "Your approved e-Visa is emailed to you within 24–72 hours. Print it or show digitally on arrival — no embassy visit ever needed." },
];

// Internal cross-links using sitemap routes
const NATIONALITY_NAV_LINKS = [
  { label: "Nigerian e-Visa",        href: "/visa/e-visa/nigerian-national-e-visa-requirements-for-turkey" },
  { label: "Ghanaian e-Visa",        href: "/visa/e-visa/ghanaian-national-e-visa-requirements-for-turkey" },
  { label: "Indian e-Visa",          href: "/visa/e-visa/indian-national-e-visa-requirements-for-turkey" },
  { label: "Pakistani e-Visa",       href: "/visa/e-visa/pakistani-national-e-visa-requirements-for-turkey" },
  { label: "Bangladeshi e-Visa",     href: "/visa/e-visa/bangladeshi-national-e-visa-requirements-for-turkey" },
  { label: "South African e-Visa",   href: "/visa/e-visa/south-african-national-e-visa-requirements-for-kenya" },
  { label: "Kenyan e-Visa",          href: "/visa/e-visa/kenyan-national-e-visa-requirements-for-rwanda" },
  { label: "Tanzanian e-Visa",       href: "/visa/e-visa/tanzanian-national-e-visa-requirements-for-kenya" },
];

const DESTINATION_NAV_LINKS = [
  { label: "Turkey e-Visa",         href: "/visa/e-visa/nigerian-national-e-visa-requirements-for-turkey" },
  { label: "UAE e-Visa",            href: "/visa/e-visa/nigerian-national-e-visa-requirements-for-united-arab-emirates" },
  { label: "Kenya e-Visa",          href: "/visa/e-visa/nigerian-national-e-visa-requirements-for-kenya" },
  { label: "Sri Lanka ETA",         href: "/visa/e-visa/indian-national-e-visa-requirements-for-sri-lanka" },
  { label: "Rwanda e-Visa",         href: "/visa/e-visa/nigerian-national-e-visa-requirements-for-rwanda" },
  { label: "Cambodia e-Visa",       href: "/visa/e-visa/nigerian-national-e-visa-requirements-for-cambodia" },
  { label: "Egypt e-Visa",          href: "/visa/e-visa/nigerian-national-e-visa-requirements-for-egypt" },
  { label: "Thailand e-Visa",       href: "/visa/e-visa/indian-national-e-visa-requirements-for-thailand" },
  { label: "Azerbaijan e-Visa",     href: "/visa/e-visa/indian-national-e-visa-requirements-for-azerbaijan" },
  { label: "Armenia e-Visa",        href: "/visa/e-visa/indian-national-e-visa-requirements-for-armenia" },
];

const SEO_FAQ = [
  {
    q: "What is an e-Visa and how is it different from a regular visa?",
    a: "An e-Visa (electronic visa) is a digital travel authorisation issued entirely online — no embassy visit, no physical sticker, and no biometrics appointment needed. You apply on the destination country's official government portal, pay the fee online, and receive your e-Visa by email, usually within minutes to 72 hours. A regular (sticker) visa requires attending an embassy or consulate in person, often with weeks of waiting.",
  },
  {
    q: "Which countries offer e-Visa for Nigerian passport holders in 2026?",
    a: "Nigerian passport holders can apply for e-Visas to Turkey, Kenya, Rwanda, Cambodia, Sri Lanka, Egypt, Bahrain, Oman, Mozambique, Togo, Bolivia, and several others. The accessible list expands every year. Use our nationality + destination checker above for exact requirements per combination.",
  },
  {
    q: "Which countries offer e-Visa for Ghanaian passport holders in 2026?",
    a: "Ghanaian passport holders can access e-Visas for Turkey, Kenya, Rwanda, Cambodia, Sri Lanka, Egypt, Bahrain, UAE, Senegal, Sierra Leone, and more. Ghana's passport has one of the stronger West African e-Visa access profiles. Check our destination guides for Ghana-specific requirements.",
  },
  {
    q: "Which countries offer e-Visa for Indian passport holders in 2026?",
    a: "Indian passport holders can apply for e-Visas to Turkey, Sri Lanka, Thailand, UAE, Cambodia, Egypt, Azerbaijan, Armenia, Georgia, Kenya, Ethiopia, Malaysia, and 40+ more countries. Some destinations offer visa-on-arrival alongside the e-Visa option. Always apply online in advance to avoid airport queues.",
  },
  {
    q: "How long does an e-Visa take to process in 2026?",
    a: "Processing times: Turkey e-Visa is often instant to 3 hours. Sri Lanka ETA is typically instant. Egypt e-Visa takes 2–72 hours. Kenya ETA takes 1–3 business days. Rwanda e-Visa takes 24–48 hours. UAE e-Visa takes 2–5 business days. We always recommend applying at least 7 days before travel.",
  },
  {
    q: "What documents are needed for an e-Visa application?",
    a: "Most e-Visas require: valid passport (minimum 6 months validity), ICAO-compliant digital photo (white background), confirmed return flight booking, hotel or accommodation details, and an international debit/credit card for payment. Some countries additionally require bank statements, travel insurance, or employment proof.",
  },
  {
    q: "Can my e-Visa application be rejected?",
    a: "Yes. Common rejection reasons include: passport validity under 6 months, non-ICAO photo, typos in personal details, payment card issues, nationality not eligible, or prior immigration violations. Our experts review every application before submission to eliminate these risks — our 98% approval rate reflects this.",
  },
  {
    q: "Is an e-Visa the same as a visa on arrival?",
    a: "No. A visa on arrival (VOA) is obtained at the airport immigration counter upon arrival — no advance application needed. An e-Visa must be applied for and approved BEFORE you travel. Some countries offer both options. We always recommend the e-Visa route to avoid arrival delays and potential denial at the border.",
  },
];

const STATS = [
  { val: "200+",    label: "e-Visa Destinations" },
  { val: "98%",     label: "Approval Rate" },
  { val: "24–72hr", label: "Avg Processing" },
  { val: "100%",    label: "Online Process" },
  { val: "2026",    label: "Updated Guides" },
];

const alphabet  = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
const ITEMS_PER_PAGE = 12;

// ── HELPERS ───────────────────────────────────────────────────────────────────
function buildEvisaSlug(natSlug, destSlug) {
  return `/visa/e-visa/${natSlug}-national-e-visa-requirements-for-${destSlug}`;
}

// ── SERVER COMPONENT ──────────────────────────────────────────────────────────
export default async function EVISAMainPage({ searchParams }) {
  const resolvedParams = await searchParams;
  const selectedLetter = resolvedParams?.letter  || "All";
  const currentPage    = Math.max(1, parseInt(resolvedParams?.page || "1", 10));
  const viewMode       = resolvedParams?.view === "nationalities" ? "nationalities" : "destinations";

  const filteredCountries = COUNTRIES.filter(c =>
    selectedLetter === "All" || c.country?.[0]?.toUpperCase() === selectedLetter
  );

  const totalPages      = Math.ceil(filteredCountries.length / ITEMS_PER_PAGE);
  const safeCurrentPage = Math.min(currentPage, totalPages || 1);
  const currentItems    = filteredCountries.slice(
    (safeCurrentPage - 1) * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE
  );

  return (
    // ── ROOT: overflow-x-hidden fixes the mobile right-padding/scroll bug ──
    <div
      className="min-h-screen bg-white text-black overflow-x-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans','DM Sans',system-ui,sans-serif" }}
    >

 

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      {/*
        overflow-hidden here is CRITICAL — it clips the radial glow that causes
        the horizontal scroll / right padding bug on mobile.
        The glow uses percentage width (80%) instead of fixed 700px to stay contained.
      */}
      <section
        className="relative overflow-hidden py-10"
        style={{ background: "#111111", minHeight: "600px" }}
      >
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow — percentage width so it never exceeds viewport on mobile */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(700px, 100%)",   /* ← MOBILE FIX: never wider than viewport */
            height: "380px",
            background: "radial-gradient(ellipse, #f5c800 0%, transparent 70%)",
            opacity: 0.18,
            filter: "blur(60px)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-5 pt-14 pb-24">
          {/* Live badge */}
          <div
            className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 mb-8 rounded-full border"
            style={{ background: "rgba(245,200,0,0.1)", borderColor: "rgba(245,200,0,0.3)" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#f5c800] animate-pulse shrink-0" />
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase" style={{ color: "#f5c800" }}>
              100% Online · No Embassy Visit · Instant to 72hr Processing
            </span>
          </div>

          {/* H1 — primary keyword */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-5 text-white">
            e-Visa Requirements<br />
            <span style={{ color: "#f5c800" }}>by Nationality &amp; Destination</span>
          </h1>

          <p
            className="text-base md:text-lg max-w-2xl mb-12 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Check exact e-Visa eligibility, documents required, fees, and processing time for any
            nationality + destination combination — verified for <strong style={{ color: "rgba(255,255,255,0.85)" }}>2026</strong>.
          </p>

          {/* Client island — autocomplete checker */}
          <EVISAChecker countries={COUNTRIES} />
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────────────────────── */}
      <section style={{ background: "#f5c800" }} className="py-5 shadow-sm" aria-label="Key statistics">
        <div className="max-w-6xl mx-auto px-4 sm:px-5">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-black text-black">{s.val}</p>
                <p className="text-xs font-bold text-black/60 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR DESTINATIONS QUICK LINKS ───────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-5 py-10" aria-label="Popular e-visa destinations">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-black uppercase tracking-widest text-black/30 shrink-0">🔥 Popular:</span>
          {POPULAR_DESTINATIONS.map(d => (
            <Link
              key={d.slug}
              href={buildEvisaSlug("nigerian", d.slug)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold text-black/60 hover:text-black border border-black/5 hover:border-[#f5c800]/40 transition-all bg-gray-50 hover:bg-white shadow-sm"
            >
              <span>{d.emoji}</span>{d.name}
              <span className="text-[9px] text-[#f5c800] font-black">{d.tag}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURED COMBOS ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-5 pb-16" aria-labelledby="featured-heading">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-2">Most Searched Combinations</p>
            <h2 id="featured-heading" className="text-3xl md:text-4xl font-black text-black">
              Popular e-Visa Guides — 2026
            </h2>
          </div>
          <Link href="/visa/e-visa?view=nationalities" className="text-xs font-bold text-black/40 hover:text-[#f5c800] transition border border-black/10 px-4 py-2 rounded-xl hover:border-[#f5c800]/40">
            Browse by nationality →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_COMBOS.map((combo, i) => {
            const destCountry = COUNTRIES.find(c =>
              createSlug(c.country) === combo.destSlug ||
              c.country.toLowerCase().includes(combo.destination.toLowerCase())
            );
            return (
              <Link
                key={i}
                href={buildEvisaSlug(combo.natSlug, combo.destSlug)}
                title={`${combo.nationality} National e-Visa Requirements for ${combo.destination} 2026`}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-black/5 bg-gray-50 hover:bg-white hover:shadow-lg hover:border-[#f5c800]/30 transition-all duration-300"
              >
                {destCountry?.flag
                  ? <img src={destCountry.flag} alt={combo.destination} className="w-12 h-8 object-cover rounded-lg shadow-sm shrink-0" />
                  : <span className="text-3xl shrink-0">{POPULAR_DESTINATIONS.find(d => d.name === combo.destination)?.emoji || "🌍"}</span>}
                <div className="flex-1 min-w-0">
                  <p className="font-black text-black text-sm leading-tight group-hover:text-[#d4a800] transition truncate">
                    {combo.nationality} → {combo.destination}
                  </p>
                  <p className="text-xs text-black/40 mt-0.5">{combo.tag} · e-Visa Guide 2026</p>
                </div>
                <span className="text-[#f5c800] font-black text-sm opacity-0 group-hover:opacity-100 transition shrink-0">→</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── e-VISA TYPES ────────────────────────────────────────────────────── */}
      {/* Targets: "types of e-visa", "ETA vs e-visa", "eNTRI Malaysia" etc. */}
      <section className="border-t border-black/5 py-20 bg-gray-50" aria-labelledby="evisa-types-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-5">
          <div className="mb-12 text-center">
            <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-3">Know Before You Apply</p>
            <h2 id="evisa-types-heading" className="text-3xl md:text-4xl font-black text-black">
              Types of e-Visa &amp; Electronic Travel Authorisation
            </h2>
            <p className="text-black/40 text-sm mt-3 max-w-2xl mx-auto">
              Not all "e-Visas" are the same. Understanding the type helps you apply through the right channel.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EVISA_TYPES.map((t, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">{t.icon}</div>
                <h3 className="font-black text-black text-sm mb-2 leading-snug">{t.type}</h3>
                <p className="text-xs text-black/40 leading-relaxed mb-4">{t.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {t.examples.map(ex => (
                    <span key={ex} className="text-[10px] font-bold bg-[#f5c800]/10 text-[#d4a800] px-2 py-0.5 rounded-full">{ex}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-5 py-20 border-t border-black/5" aria-labelledby="how-heading">
        <div className="text-center mb-12">
          <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-3">Simple 4-Step Process</p>
          <h2 id="how-heading" className="text-3xl md:text-4xl font-black text-black">
            How Our e-Visa Service Works
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOW_IT_WORKS.map((step, i) => (
            <div key={i} className="p-7 rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-xl transition-all relative">
              <div className="text-4xl font-black mb-4" style={{ color: "#f5c800", opacity: 0.3 }}>{step.n}</div>
              <h3 className="font-black text-black text-base mb-2">{step.title}</h3>
              <p className="text-sm text-black/40 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── NATIONALITY e-VISA ACCESS TABLE ─────────────────────────────────── */}
      {/* Targets: "X passport e-visa countries list 2026" */}
      <section className="border-t border-black/5 py-20 bg-gray-50" aria-labelledby="nat-table-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-5">
          <div className="mb-10">
            <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-2">By Passport Nationality</p>
            <h2 id="nat-table-heading" className="text-3xl md:text-4xl font-black text-black">
              e-Visa Eligible Countries by Nationality — 2026
            </h2>
            <p className="text-black/40 text-sm mt-3 max-w-2xl">
              Approximate list based on current e-Visa portals. Policies change — always verify with our nationality-specific guides.
            </p>
          </div>
          <div className="space-y-4">
            {NATIONALITY_EVISA_TABLE.map((row, i) => (
              <div key={i} className="bg-white rounded-2xl border border-black/5 p-5 hover:shadow-md transition-all">
                <div className="flex items-start gap-4 flex-wrap">
                  <div className="shrink-0">
                    <Link
                      href={`/visa/e-visa/${row.natSlug}-national-e-visa-requirements-for-turkey`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f5c800] text-black font-black text-xs hover:bg-yellow-400 transition"
                    >
                      {row.nationality} Passport
                    </Link>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-2">
                      {row.countries.map(country => {
                        const slug = createSlug(country);
                        return (
                          <Link
                            key={country}
                            href={`/visa/e-visa/${row.natSlug}-national-e-visa-requirements-for-${slug}`}
                            className="text-xs font-bold text-black/50 hover:text-black border border-black/10 px-3 py-1.5 rounded-lg hover:border-[#f5c800]/40 bg-gray-50 hover:bg-white transition"
                          >
                            {country}
                          </Link>
                        );
                      })}
                      <Link
                        href={`/visa/e-visa?view=nationalities`}
                        className="text-xs font-bold text-[#f5c800] border border-[#f5c800]/30 px-3 py-1.5 rounded-lg hover:bg-[#f5c800]/5 transition"
                      >
                        +40 more →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCUMENT CHECKLIST ──────────────────────────────────────────────── */}
      {/* Targets: "e-visa documents required", "what do I need for e-visa" */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-5" aria-labelledby="docs-heading">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-2">What You'll Need</p>
            <h2 id="docs-heading" className="text-3xl md:text-4xl font-black text-black">
              e-Visa Document Checklist — 2026
            </h2>
          </div>
          <Link
            href="/travel-resources/visa-checklist-generator"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#f5c800] rounded-xl font-black text-sm text-black hover:bg-yellow-400 transition shadow-md shrink-0"
          >
            🛠️ Generate Country Checklist
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {EVISA_DOCUMENT_CHECKLIST.map((doc, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-2xl border border-black/5 bg-gray-50 hover:bg-white hover:shadow-md transition-all">
              <div className="w-7 h-7 rounded-lg bg-[#f5c800] flex items-center justify-center text-xs font-black text-black shrink-0 mt-0.5">{i + 1}</div>
              <div>
                <p className="font-black text-black text-sm">{doc.item}</p>
                <p className="text-xs text-black/40 mt-0.5 leading-relaxed">{doc.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-5 rounded-2xl border border-[#f5c800]/30 bg-[#f5c800]/5 flex items-start gap-4">
          <span className="text-2xl">💡</span>
          <p className="text-xs text-black/50 leading-relaxed">
            Requirements vary per destination and nationality. Use our{" "}
            <Link href="/travel-resources/visa-checklist-generator" className="text-[#f5c800] font-bold hover:underline">
              country-specific checklist generator
            </Link>{" "}
            for exact requirements, or check individual{" "}
            <Link href="/visa/e-visa" className="text-[#f5c800] font-bold hover:underline">
              nationality + destination guides
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── FEE & PROCESSING TIME TABLE ─────────────────────────────────────── */}
      {/* Targets: "e-visa fee 2026", "Turkey e-visa cost", "how long e-visa takes" */}
      <section className="border-t border-black/5 py-20 bg-gray-50" aria-labelledby="fees-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-5">
          <div className="mb-10">
            <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-2">Fees &amp; Processing Times</p>
            <h2 id="fees-heading" className="text-3xl md:text-4xl font-black text-black">
              e-Visa Fees &amp; Processing Times — 2026 Comparison
            </h2>
            <p className="text-black/40 text-sm mt-3">
              Fees are official government portal charges and do not include our service fee. Updated January 2026.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-black/5 shadow-sm">
            <table className="w-full text-sm bg-white min-w-[600px]">
              <thead>
                <tr style={{ background: "#f5c800" }}>
                  <th className="text-left px-4 py-4 font-black text-black text-xs uppercase tracking-wider">Country</th>
                  <th className="text-left px-4 py-4 font-black text-black text-xs uppercase tracking-wider">Gov Fee</th>
                  <th className="text-left px-4 py-4 font-black text-black text-xs uppercase tracking-wider">Processing</th>
                  <th className="text-left px-4 py-4 font-black text-black text-xs uppercase tracking-wider hidden sm:table-cell">Validity</th>
                  <th className="text-left px-4 py-4 font-black text-black text-xs uppercase tracking-wider hidden md:table-cell">Max Stay</th>
                  <th className="px-4 py-4" />
                </tr>
              </thead>
              <tbody>
                {EVISA_FEE_TABLE.map((row, i) => (
                  <tr key={i} className={`border-t border-black/5 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} hover:bg-[#f5c800]/5 transition-colors`}>
                    <td className="px-4 py-4 font-black text-black/80">
                      <span className="mr-2">{row.flag}</span>{row.country}
                    </td>
                    <td className="px-4 py-4 font-bold text-black/60">{row.fee}</td>
                    <td className="px-4 py-4">
                      <span className="text-xs font-black bg-green-50 text-green-600 px-2 py-1 rounded-lg whitespace-nowrap">
                        {row.processingMin}–{row.processingMax}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-black/40 text-xs hidden sm:table-cell">{row.validity}</td>
                    <td className="px-4 py-4 text-black/40 text-xs hidden md:table-cell">{row.stay}</td>
                    <td className="px-4 py-4">
                      <Link
                        href={buildEvisaSlug("nigerian", createSlug(row.country))}
                        className="text-[10px] font-black text-[#f5c800] whitespace-nowrap hover:underline"
                      >
                        Full guide →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-black/25 mt-4">
            * Fees and times vary by nationality. Check the{" "}
            <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#f5c800] font-bold hover:underline">
              visa processing time tracker
            </Link>{" "}
            for your specific combination.
          </p>
        </div>
      </section>

      {/* ── REJECTION REASONS ───────────────────────────────────────────────── */}
      {/* Targets: "e-visa rejected reason", "why was my e-visa rejected" */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-5" aria-labelledby="rejection-heading">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-2">Avoid Common Mistakes</p>
            <h2 id="rejection-heading" className="text-3xl md:text-4xl font-black text-black">
              Why e-Visa Applications Get Rejected<br />&amp; How to Avoid It
            </h2>
          </div>
          <Link href="/visa-rejection" className="text-xs font-bold text-black/40 hover:text-[#f5c800] transition border border-black/10 px-4 py-2 rounded-xl hover:border-[#f5c800]/40 shrink-0">
            Full rejection guide →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EVISA_REJECTION_REASONS.map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-black/5 hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5 shrink-0">⚠️</span>
                <div>
                  <p className="font-black text-black text-sm mb-1">{item.reason}</p>
                  <p className="text-xs text-black/40 leading-relaxed">{item.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 rounded-2xl bg-black text-white flex items-start gap-5 flex-wrap md:flex-nowrap">
          <div className="text-4xl shrink-0">🛡️</div>
          <div className="flex-1">
            <p className="font-black text-lg mb-1">Our 98% approval rate is no accident</p>
            <p className="text-sm text-white/50 leading-relaxed">
              We review every detail before submission — passport scan quality, photo ICAO compliance, exact name matching, card compatibility.
              One error can mean rejection and lost fees. Let us get it right the first time.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#f5c800] rounded-xl font-black text-sm text-black hover:bg-yellow-400 transition shrink-0 self-start"
          >
            Get Expert Help →
          </Link>
        </div>
      </section>

      {/* ── COUNTRIES GRID ──────────────────────────────────────────────────── */}
      <main
        className="max-w-6xl mx-auto px-4 sm:px-5 pb-20 border-t border-black/5 pt-16"
        id="all-countries"
        aria-labelledby="grid-heading"
      >
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 id="grid-heading" className="text-2xl md:text-3xl font-black text-black">
              {viewMode === "destinations"
                ? "All e-Visa Destination Countries — 2026"
                : "Browse e-Visa by Nationality — 2026"}
            </h2>
            <p className="text-black/30 text-sm mt-1">
              {filteredCountries.length} countries · Click any to see e-Visa requirements
            </p>
          </div>
          <ViewModeToggle viewMode={viewMode} selectedLetter={selectedLetter} />
        </div>

        <AZFilter selectedLetter={selectedLetter} viewMode={viewMode} alphabet={alphabet} />

        {currentItems.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {currentItems.map((c, i) => {
              const countrySlug = createSlug(c.country);
              const href = viewMode === "destinations"
                ? buildEvisaSlug("india", countrySlug)
                : buildEvisaSlug(countrySlug, "any");
              const titleText = viewMode === "destinations"
                ? `e-Visa Requirements to Visit ${c.country} — 2026 Guide`
                : `${c.country} Passport e-Visa Requirements — 2026 Guide`;

              return (
                <Link
                  key={`${c.code}-${i}`}
                  href={href}
                  className="group rounded-2xl overflow-hidden border border-black/5 flex flex-col bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
                  title={titleText}
                >
                  <div className="relative h-28 overflow-hidden bg-gray-200">
                    <img
                      src={c.flag}
                      alt={`${c.country} e-Visa requirements 2026`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading={i < 6 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,0,0.25) 0%,transparent 60%)" }} />
                  </div>
                  <div className="p-3 flex flex-col flex-1 justify-between">
                    <h3 className="text-sm font-black text-black/80 leading-tight group-hover:text-black transition-colors mb-2">
                      {c.country}
                    </h3>
                    <div className="text-[10px] font-bold text-[#f5c800] bg-[#f5c800]/5 rounded-lg px-2 py-1 text-center group-hover:bg-[#f5c800] group-hover:text-black transition-all">
                      {viewMode === "destinations" ? "e-Visa Guide →" : "Check e-Visa →"}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24 rounded-3xl border border-black/5 bg-gray-50">
            <div className="text-6xl mb-4">🌍</div>
            <h3 className="text-xl font-black text-black">No countries found</h3>
            <p className="text-black/40 mt-2 text-sm">Try a different letter or reset the filter.</p>
            <Link href="/visa/e-visa" className="inline-block mt-5 px-6 py-3 bg-[#f5c800] rounded-xl font-black text-sm">
              Show All Countries
            </Link>
          </div>
        )}

        {/* Pagination — static server-rendered links, fully crawlable */}
        {totalPages > 1 && (
          <nav className="mt-12 flex justify-center items-center gap-3 flex-wrap" aria-label="Country pagination">
            {safeCurrentPage > 1 && (
              <Link
                href={`/visa/e-visa?letter=${selectedLetter}&page=${safeCurrentPage - 1}&view=${viewMode}`}
                className="px-5 py-3 rounded-xl font-bold text-black/60 hover:text-black transition border border-black/10 hover:border-[#f5c800]/40 text-sm"
              >← Prev</Link>
            )}
            <div className="flex gap-1.5 flex-wrap justify-center">
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => i + 1).map(n => (
                <Link
                  key={n}
                  href={`/visa/e-visa?letter=${selectedLetter}&page=${n}&view=${viewMode}`}
                  aria-label={`Page ${n}`}
                  aria-current={safeCurrentPage === n ? "page" : undefined}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl font-black text-sm transition-all ${
                    safeCurrentPage === n
                      ? "bg-[#f5c800] text-black shadow-md"
                      : "text-black/40 hover:text-black bg-gray-50 border border-black/5"
                  }`}
                >{n}</Link>
              ))}
              {totalPages > 7 && <span className="w-10 h-10 flex items-center justify-center text-black/30">…</span>}
            </div>
            {safeCurrentPage < totalPages && (
              <Link
                href={`/visa/e-visa?letter=${selectedLetter}&page=${safeCurrentPage + 1}&view=${viewMode}`}
                className="px-5 py-3 rounded-xl font-bold text-black/60 hover:text-black transition border border-black/10 hover:border-[#f5c800]/40 text-sm"
              >Next →</Link>
            )}
          </nav>
        )}
      </main>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────────── */}
      <section className="border-t border-black/5 py-24 bg-gray-50" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-5">
          <div className="text-center mb-16">
            <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-3">Why Thousands Choose Us</p>
            <h2 id="why-heading" className="text-4xl md:text-5xl font-black text-black mb-4">
              The Smarter Way to Apply for e-Visa
            </h2>
            <p className="text-black/40 max-w-xl mx-auto text-sm leading-relaxed">
              Stop guessing. Start with accurate requirements, expert guidance, and a near-perfect approval record.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map((w, i) => (
              <div key={i} className="p-7 rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-5">{w.icon}</div>
                <h3 className="font-black text-black text-lg mb-2">{w.title}</h3>
                <p className="text-sm text-black/40 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-5" aria-labelledby="testimonials-heading">
        <div className="text-center mb-12">
          <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-3">Real Stories</p>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-black text-black">
            e-Visa Approved — Real Travelers
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="p-7 rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {"★".repeat(t.stars).split("").map((s, j) => <span key={j} className="text-[#f5c800] text-sm">{s}</span>)}
              </div>
              <p className="text-black/70 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div>
                <p className="font-black text-black text-sm">{t.name}</p>
                <p className="text-xs text-[#f5c800] font-bold">{t.country}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/testimonials" className="inline-flex items-center gap-2 px-6 py-3 border border-black/10 rounded-xl text-sm font-bold text-black/50 hover:text-black hover:border-[#f5c800]/40 transition">
            Read all testimonials →
          </Link>
        </div>
      </section>

      {/* ── SEO ARTICLE + INTERNAL LINKS ─────────────────────────────────────── */}
      <section className="border-t border-black/5 py-20" aria-label="About e-Visa requirements">
        <div className="max-w-4xl mx-auto px-4 sm:px-5">
          <h2 className="text-2xl font-black text-black mb-8">
            e-Visa Requirements by Nationality — Complete Guide 2026
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-black/50 leading-relaxed">
            <div className="space-y-4">
              <p>
                An <strong className="text-black/80">e-Visa (electronic visa)</strong> is the fastest, simplest way to get
                travel authorisation for many popular destinations. Unlike traditional visas, e-Visas are applied entirely
                online — no embassy queues, no biometrics appointments, and no waiting weeks for a stamp.
              </p>
              <p>
                However, e-Visa eligibility varies significantly based on your passport nationality. What works for a
                British passport may not apply to a{" "}
                <strong className="text-black/80">Nigerian, Ghanaian, Indian, or Bangladeshi</strong> passport holder.
                Our nationality-specific guides give you exact, verified requirements for your passport.
              </p>
              <p>
                We also track cross-over between e-Visa access and rejection rates. If you've been rejected before,
                read our{" "}
                <Link href="/visa-rejection" className="text-[#f5c800] font-bold hover:underline">
                  visa rejection guide
                </Link>{" "}
                before reapplying.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Our 2026 e-Visa guides are updated monthly based on official government portals and immigration authority
                announcements. We track policy changes for every nationality + destination combination.
              </p>
              <p>
                From <strong className="text-black/80">Turkey e-Visa</strong> and{" "}
                <strong className="text-black/80">UAE e-Visa</strong> to{" "}
                <strong className="text-black/80">Kenya ETA</strong> and{" "}
                <strong className="text-black/80">Sri Lanka ETA</strong> — our expert team handles your complete
                application, ensuring it's approved quickly and correctly.
              </p>
              <p>
                Need a more complex visa like{" "}
                <Link href="/visa/india/united-states" className="text-[#f5c800] font-bold hover:underline">USA B1/B2</Link>
                {" "}or{" "}
                <Link href="/schengen-visa" className="text-[#f5c800] font-bold hover:underline">Schengen</Link>?
                Those require embassy visits — see our full{" "}
                <Link href="/visa/visa-guide" className="text-[#f5c800] font-bold hover:underline">visa guide</Link>
                {" "}for sticker and interview visas.
              </p>
            </div>
          </div>

          {/* Internal nav — by nationality */}
          <div className="mt-10 pt-8 border-t border-black/5">
            <p className="text-xs text-black/25 font-bold uppercase tracking-widest mb-4">Browse e-Visa by Nationality</p>
            <div className="flex flex-wrap gap-3">
              {NATIONALITY_NAV_LINKS.map(link => (
                <Link key={link.label} href={link.href}
                  className="text-xs font-bold text-black/40 hover:text-[#f5c800] transition border border-black/10 px-3 py-1.5 rounded-lg hover:border-[#f5c800]/30 bg-white"
                >{link.label}</Link>
              ))}
            </div>
          </div>

          {/* Internal nav — by destination */}
          <div className="mt-6 pt-6 border-t border-black/5">
            <p className="text-xs text-black/25 font-bold uppercase tracking-widest mb-4">Browse e-Visa by Destination</p>
            <div className="flex flex-wrap gap-3">
              {DESTINATION_NAV_LINKS.map(link => (
                <Link key={link.label} href={link.href}
                  className="text-xs font-bold text-black/40 hover:text-[#f5c800] transition border border-black/10 px-3 py-1.5 rounded-lg hover:border-[#f5c800]/30 bg-white"
                >{link.label}</Link>
              ))}
            </div>
          </div>

          {/* Cross-site internal links from sitemap */}
          <div className="mt-6 pt-6 border-t border-black/5">
            <p className="text-xs text-black/25 font-bold uppercase tracking-widest mb-4">Related Visa Resources</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Tourist Visa from India",     href: "/visa/india" },
                { label: "Schengen Visa Guide",         href: "/schengen-visa" },
                { label: "Visa Rejection Rates",        href: "/visa-rejection" },
                { label: "Processing Time Tracker",     href: "/travel-resources/visa-processing-time-tracker" },
                { label: "Checklist Generator",         href: "/travel-resources/visa-checklist-generator" },
                { label: "Dubai Residents Visa",        href: "/visa/dubai-residents" },
                { label: "Student Visa Guide",          href: "/study-abroad/student-visa" },
                { label: "Scholarships Abroad",         href: "/scholarships" },
                { label: "All Visa Services",           href: "/our-services/visa-services" },
                { label: "Visa Guide Hub",              href: "/visa/visa-guide" },
              ].map(link => (
                <Link key={link.label} href={link.href}
                  className="text-xs font-bold text-black/40 hover:text-[#f5c800] transition border border-black/10 px-3 py-1.5 rounded-lg hover:border-[#f5c800]/30 bg-white"
                >{link.label}</Link>
              ))}
            </div>
          </div>

          {/* FAQ — static HTML for featured snippets */}
          <div className="mt-10 pt-8 border-t border-black/5">
            <p className="text-xs text-black/25 font-bold uppercase tracking-widest mb-5">
              Frequently Asked Questions — e-Visa 2026
            </p>
            <div className="space-y-4">
              {SEO_FAQ.map((faq, i) => (
                <details key={i} className="border border-black/5 rounded-xl overflow-hidden group bg-white">
                  <summary className="px-5 py-4 cursor-pointer font-bold text-black/80 text-sm flex items-center justify-between list-none hover:bg-gray-50">
                    <span>{faq.q}</span>
                    <span className="text-[#f5c800] font-black group-open:rotate-45 transition-transform inline-block shrink-0 ml-3">+</span>
                  </summary>
                  <div className="px-5 pb-4 pt-2 text-sm text-black/50 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────────── */}
      <div className="py-20 px-4 sm:px-5 text-center overflow-hidden" style={{ background: "#111111" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-6xl mb-6">⚡</div>
          <h2 className="text-3xl md:text-4xl font-black mb-3 text-white">
            Ready to Apply for Your{" "}
            <span style={{ color: "#f5c800" }}>e-Visa Online?</span>
          </h2>
          <p className="mb-10 leading-relaxed text-sm max-w-lg mx-auto" style={{ color: "rgba(255,255,255,.45)" }}>
            Select your nationality and destination above, check exact requirements, and let our experts handle your
            complete e-Visa application — approved in 24–72 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/971507078334?text=Hi%2C%20I%20want%20to%20apply%20for%20an%20e-Visa.%20Please%20help%20me%20check%20requirements."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-black text-sm text-white transition"
              style={{ background: "#25D366" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              WhatsApp for e-Visa Help
            </a>
            <Link
              href="/visa/india"
              className="inline-flex items-center justify-center px-8 py-5 rounded-2xl font-black text-sm transition hover:bg-white hover:text-black"
              style={{ border: "2px solid rgba(255,255,255,.2)", color: "rgba(255,255,255,.6)" }}
            >
              Browse Tourist Visa Guides
            </Link>
          </div>

          {/* Office links */}
          <div className="mt-10 flex flex-wrap justify-center gap-5 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            <Link href="/contact/travel-agency-bangladesh" className="hover:text-[#f5c800] transition font-bold">📍 Bangladesh</Link>
            <Link href="/contact/travel-agency-dubai"      className="hover:text-[#f5c800] transition font-bold">📍 Dubai</Link>
            <Link href="/contact/travel-agency-armenia"    className="hover:text-[#f5c800] transition font-bold">📍 Armenia</Link>
            <Link href="/contact/travel-agency-georgia"    className="hover:text-[#f5c800] transition font-bold">📍 Georgia</Link>
          </div>
        </div>
      </div>
     {/* ── BREADCRUMB ──────────────────────────────────────────────────────── */}
      <nav className="w-full" style={{ background: "#111111" }} aria-label="Breadcrumb">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 py-3">
          <ol className="flex items-center gap-2 text-xs flex-wrap" style={{ color: "rgba(255,255,255,0.35)" }}>
            <li><Link href="/" className="hover:text-[#f5c800] transition">Home</Link></li>
            <li className="opacity-30">›</li>
            <li><Link href="/visa" className="hover:text-[#f5c800] transition">Visa Services</Link></li>
            <li className="opacity-30">›</li>
            <li><Link href="/visa/visa-guide" className="hover:text-[#f5c800] transition">Visa Guide</Link></li>
            <li className="opacity-30">›</li>
            <li style={{ color: "rgba(255,255,255,0.6)" }} className="font-bold">e-Visa Requirements 2026</li>
          </ol>
        </div>
      </nav>
    </div>
  );
}