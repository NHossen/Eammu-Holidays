"use client";
// ScholarshipsClient.jsx — CLIENT COMPONENT
// Receives all data as props from the Server Component.

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  Search, X, ChevronDown, BookOpen, Globe, Award, Clock,
  CheckCircle, ArrowRight, Star, Users, GraduationCap,
  FileText, Lightbulb, Target, Calendar, MapPin, TrendingUp,
  MessageCircle, ShieldCheck, AlertCircle, Navigation, Wallet,
} from "lucide-react";

const COUNTRIES_PER_PAGE = 24;
const slug = (name) => name?.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, "-") || "";

/* ─────────────────────────────────────────────
   RICH STATIC DATA — scholarship types, guides, etc.
───────────────────────────────────────────── */

const SCHOLARSHIP_TYPES = [
  {
    icon: "🎓", title: "Fully Funded Scholarships",
    desc: "Cover 100% of tuition + living allowance + return flights. Examples: Chevening (UK), Fulbright (USA), DAAD (Germany), Commonwealth, MEXT (Japan).",
    tag: "Best Value", tagColor: "bg-green-500",
    link: "/scholarships", linkLabel: "Browse fully funded →",
  },
  {
    icon: "💰", title: "Partial Scholarships",
    desc: "Cover tuition or part of living costs. Common at UK, Canadian, and Australian universities. Often combined with part-time work.",
    tag: "Most Available", tagColor: "bg-blue-500",
    link: "/scholarships", linkLabel: "View partial awards →",
  },
  {
    icon: "🏛️", title: "Government Scholarships",
    desc: "Government-funded programmes: CSC China, Korean Government Scholarship (KGSP), Turkish Government Scholarship, Hungarian Stipendium Hungaricum.",
    tag: "Highly Competitive", tagColor: "bg-purple-500",
    link: "/study-abroad", linkLabel: "Study abroad guide →",
  },
  {
    icon: "🏫", title: "University Scholarships",
    desc: "Merit-based awards directly from universities. Many UK, US, and Canadian universities offer 20–50% tuition waivers for high-achieving international students.",
    tag: "Easiest to Apply", tagColor: "bg-orange-500",
    link: "/study-abroad/student-visa", linkLabel: "Student visa guide →",
  },
  {
    icon: "🔬", title: "Research / PhD Funding",
    desc: "Full funding for PhD programmes in Europe, Australia, and North America. Includes stipend, tuition waiver, and research budget.",
    tag: "For Graduates", tagColor: "bg-rose-500",
    link: "/scholarships", linkLabel: "PhD scholarships →",
  },
  {
    icon: "🌍", title: "Country-Specific Awards",
    desc: "Country-bilateral scholarships: Bangladesh-China, Bangladesh-India ICCR, Commonwealth for Bangladesh, and regional South Asian funding programmes.",
    tag: "For Bangladeshis", tagColor: "bg-emerald-600",
    link: "/scholarships", linkLabel: "Country awards →",
  },
];

const TOP_SCHOLARSHIPS_EXTENDED = [
  { emoji: "🇬🇧", name: "Chevening Scholarship",        country: "United Kingdom",  tag: "Fully Funded",    deadline: "Nov 2025",  slug: "united-kingdom", amount: "Full tuition + £14,000/yr" },
  { emoji: "🇺🇸", name: "Fulbright Program",             country: "United States",   tag: "Fully Funded",    deadline: "Oct 2025",  slug: "united-states",  amount: "Full tuition + stipend" },
  { emoji: "🇩🇪", name: "DAAD Scholarship",              country: "Germany",         tag: "Fully Funded",    deadline: "Oct 2025",  slug: "germany",        amount: "€861–1,200/month" },
  { emoji: "🇯🇵", name: "MEXT Scholarship",              country: "Japan",           tag: "Fully Funded",    deadline: "May 2025",  slug: "japan",          amount: "Full tuition + ¥143,000/mo" },
  { emoji: "🇨🇦", name: "Vanier CGS",                    country: "Canada",          tag: "PhD Only",        deadline: "Nov 2025",  slug: "canada",         amount: "CA$50,000/year" },
  { emoji: "🇦🇺", name: "Australia Awards",               country: "Australia",       tag: "Fully Funded",    deadline: "Apr 2025",  slug: "australia",      amount: "Full tuition + AUD28,854/yr" },
  { emoji: "🇳🇿", name: "NZ Commonwealth Scholarship",  country: "New Zealand",     tag: "Postgrad",        deadline: "Mar 2026",  slug: "new-zealand",    amount: "Full tuition + NZD25,000/yr" },
  { emoji: "🇨🇳", name: "CSC China Scholarship",         country: "China",           tag: "Fully Funded",    deadline: "Mar 2026",  slug: "china",          amount: "Full tuition + ¥3,500/month" },
  { emoji: "🇸🇦", name: "King Abdullah Scholarship",    country: "Saudi Arabia",    tag: "Fully Funded",    deadline: "Feb 2026",  slug: "saudi-arabia",   amount: "Full tuition + allowance" },
  { emoji: "🇰🇷", name: "KGSP Korea Scholarship",       country: "South Korea",     tag: "Fully Funded",    deadline: "Sep 2025",  slug: "south-korea",    amount: "Full tuition + KRW900,000/mo" },
  { emoji: "🇹🇷", name: "Türkiye Burslari",              country: "Turkey",          tag: "Fully Funded",    deadline: "Feb 2026",  slug: "turkey",         amount: "Full tuition + $700/month" },
  { emoji: "🇭🇺", name: "Stipendium Hungaricum",         country: "Hungary",         tag: "Fully Funded",    deadline: "Jan 2026",  slug: "hungary",        amount: "Full tuition + HUF 40,000/mo" },
  { emoji: "🇸🇬", name: "ASEAN Scholarship",             country: "Singapore",       tag: "Undergrad",       deadline: "Mar 2026",  slug: "singapore",      amount: "Full tuition + SGD2,200/year" },
  { emoji: "🇸🇪", name: "Swedish Institute Scholarship", country: "Sweden",          tag: "Masters",         deadline: "Feb 2026",  slug: "sweden",         amount: "Full tuition + SEK11,000/mo" },
  { emoji: "🇳🇴", name: "Norwegian Government Quota",   country: "Norway",          tag: "Quota Scheme",    deadline: "Dec 2025",  slug: "norway",         amount: "Full tuition + NOK10,000/mo" },
  { emoji: "🇮🇹", name: "Italian Government Scholarship",country: "Italy",           tag: "Fully Funded",    deadline: "May 2026",  slug: "italy",          amount: "€900/month + tuition" },
];

const ELIGIBILITY_CRITERIA = [
  { icon: "📋", label: "Academic Transcripts",    desc: "Minimum GPA 3.0 (most scholarships). Some require top 10% of your class." },
  { icon: "🌐", label: "IELTS / TOEFL Score",     desc: "Most require IELTS 6.0–7.0 or TOEFL 80–100. Chevening requires IELTS 6.5+." },
  { icon: "✍️", label: "Statement of Purpose",    desc: "2-page SOP explaining your goals, background, and why you deserve funding." },
  { icon: "📝", label: "Reference Letters",        desc: "2–3 academic or professional references. Quality > quantity." },
  { icon: "🛂", label: "Valid Passport",           desc: "Bangladesh passport with 6+ months validity at time of application." },
  { icon: "💼", label: "Work Experience",          desc: "Chevening requires 2 years. Many others prefer 1+ year professional experience." },
  { icon: "🎯", label: "Research Proposal",        desc: "Required for PhD and research scholarships. 1,500–3,000 words typically." },
  { icon: "🏅", label: "Awards & Achievements",   desc: "Extracurriculars, leadership roles, publications, and community service strengthen applications." },
];

const APPLICATION_STEPS = [
  { num: "01", title: "Research & Shortlist",     desc: "Identify 3–5 scholarships matching your academic level, field, and destination. Use our country filter below. Start 12–18 months before the deadline." },
  { num: "02", title: "IELTS / TOEFL Test",        desc: "Book your IELTS test at our partner centre. Most scholarships require IELTS 6.0–7.5. Score available in 13 days. Book at /target-ielts-immigration-center.", link: "/target-ielts-immigration-center", linkLabel: "Book IELTS →" },
  { num: "03", title: "Prepare Documents",         desc: "Gather transcripts, reference letters, CV, and passport. Use our free visa checklist generator for country-specific requirements.", link: "/travel-resources/visa-checklist-generator", linkLabel: "Free Checklist →" },
  { num: "04", title: "Write SOP & Essays",        desc: "Statement of Purpose is the most important document. Eammu Holidays consultants review and polish your SOP for maximum impact.", link: "/contact/travel-agency-bangladesh", linkLabel: "Get SOP Help →" },
  { num: "05", title: "Submit Application",        desc: "Apply through the official scholarship portal. Deadline strict — late by 1 minute = rejected. Set calendar reminders for 30, 14, and 3 days before." },
  { num: "06", title: "Visa Processing",           desc: "After receiving your offer letter, apply for a student visa. Our 98% visa success rate covers UK, USA, Canada, and Australia student visas.", link: "/study-abroad/student-visa", linkLabel: "Student Visa Guide →" },
];

const DEADLINE_GUIDE = [
  { month: "Sep–Oct", scholarships: ["Chevening (UK)", "Fulbright (USA)", "Australia Awards"], tip: "Biggest deadlines — start preparing in March" },
  { month: "Nov–Dec", scholarships: ["Vanier CGS (Canada)", "Dutch Government", "Norwegian Quota"], tip: "Winter deadlines — SOP should be ready by September" },
  { month: "Jan–Feb", scholarships: ["Turkish Burslari", "Hungarian Stipendium", "Swedish Institute"], tip: "New Year deadlines — apply in autumn" },
  { month: "Mar–May", scholarships: ["MEXT Japan", "CSC China", "Singapore ASEAN"], tip: "Spring deadlines — often require embassy nomination" },
];

const INTERNAL_LINKS = [
  { href: "/study-abroad",                                  icon: <GraduationCap size={13}/>, label: "Study Abroad Hub",             desc: "UK, USA, Canada, Australia" },
  { href: "/study-abroad/student-visa",                     icon: <FileText size={13}/>,      label: "Student Visa Processing",      desc: "98% success rate" },
  { href: "/target-ielts-immigration-center",               icon: <BookOpen size={13}/>,      label: "IELTS Center — Cumilla",       desc: "Band 8.5 achieved" },
  { href: "/target-usa-visa-interview-preparation",         icon: <Users size={13}/>,         label: "USA Visa Interview Prep",      desc: "Mock interview coaching" },
  { href: "/visa",                                          icon: <ShieldCheck size={13}/>,   label: "All Visa Services",            desc: "200+ countries" },
  { href: "/visa/e-visa",                                   icon: <Globe size={13}/>,         label: "E-Visa Destinations",          desc: "Fast online visas" },
  { href: "/visa/visa-guide",                               icon: <BookOpen size={13}/>,      label: "Visa Guides",                  desc: "Country-by-country" },
  { href: "/visa-rejection",                                icon: <AlertCircle size={13}/>,   label: "Visa Rejection Help",          desc: "Re-application support" },
  { href: "/travel-resources/visa-checklist-generator",     icon: <CheckCircle size={13}/>,   label: "Visa Checklist Generator",     desc: "Free personalised list" },
  { href: "/travel-resources/visa-processing-time-tracker", icon: <Clock size={13}/>,         label: "Processing Time Tracker",     desc: "Real timelines" },
  { href: "/offers",                                        icon: <Star size={13}/>,          label: "Tour Offers & Packages",       desc: "Bangladesh travel deals" },
  { href: "/contact/travel-agency-bangladesh",              icon: <MapPin size={13}/>,        label: "Bangladesh Offices",           desc: "Cumilla & Dhaka" },
  { href: "/contact/travel-agency-dubai",                   icon: <MapPin size={13}/>,        label: "Dubai Office",                 desc: "Business Bay, UAE" },
  { href: "/contact/travel-agency-georgia",                 icon: <MapPin size={13}/>,        label: "Georgia Office",               desc: "Tbilisi" },
  { href: "/contact/travel-agency-armenia",                 icon: <MapPin size={13}/>,        label: "Armenia Office",               desc: "Yerevan" },
  { href: "/blogs",                                         icon: <BookOpen size={13}/>,      label: "Travel & Visa Blog",           desc: "Expert guides" },
  { href: "/testimonials",                                  icon: <Star size={13}/>,          label: "Client Testimonials",          desc: "10,000+ reviews" },
  { href: "/travel-budget-planner",                         icon: <Wallet size={13}/>,        label: "Travel Budget Planner",        desc: "Trip cost calculator" },
  { href: "/online-travel-agency-bangladesh",               icon: <Navigation size={13}/>,    label: "Online Travel Agency",         desc: "Book online" },
];

/* ─────────────────────────────────────────────
   FAQ ITEM
───────────────────────────────────────────── */
const FaqItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-blue-100 transition-colors overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left focus:outline-none"
        aria-expanded={open}
      >
        <span className={`font-bold text-sm md:text-base transition-colors ${open ? "text-blue-600" : "text-gray-800"}`}>
          {item.q}
        </span>
        <span className={`text-blue-600 text-xl shrink-0 transition-transform duration-200 mt-0.5 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-l-4 border-blue-500 ml-6">
          {item.a}
        </p>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function ScholarshipsClient({
  countries,
  headline,
  subtitle,
  popularScholarships,
  seoTextBlocks,
  faqItems,
  stats,
  degreeLinks,
  featuredCodes,
}) {
  const [search, setSearch]           = useState("");
  const [searchOpen, setSearchOpen]   = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeType, setActiveType]   = useState("All");
  const searchRef = useRef(null);

  useEffect(() => {
    const fn = (e) => { if (!searchRef.current?.contains(e.target)) setSearchOpen(false); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const searchResults = search.length > 1
    ? countries.filter(c => c.country.toLowerCase().includes(search.toLowerCase())).slice(0, 8)
    : [];

  const filteredCountries = countries.filter(c =>
    c.country.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages       = Math.ceil(filteredCountries.length / COUNTRIES_PER_PAGE);
  const currentCountries = filteredCountries.slice(
    (currentPage - 1) * COUNTRIES_PER_PAGE,
    currentPage * COUNTRIES_PER_PAGE
  );

  const handleSearch = (e) => { setSearch(e.target.value); setCurrentPage(1); setSearchOpen(true); };
  const clearSearch  = () => { setSearch(""); setSearchOpen(false); };
  const goToPage     = (p) => { setCurrentPage(p); window.scrollTo({ top: 600, behavior: "smooth" }); };

  /* Build combined FAQ — static rich FAQs merged with prop FAQs */
  const RICH_FAQS = [
    { q: "What is the best scholarship for Bangladeshi students in 2025–2026?", a: "The top fully funded scholarships for Bangladeshi students are: (1) Chevening (UK) — full tuition + £14,000/year living cost, deadline November. (2) Fulbright (USA) — full funding, competitive. (3) DAAD (Germany) — €861–1,200/month. (4) Australia Awards — full tuition + AUD28,854/year. (5) CSC China Scholarship — full tuition + ¥3,500/month. Contact Eammu Holidays for application support." },
    { q: "What IELTS score is needed for international scholarships?", a: "Most scholarships require IELTS 6.0–7.0: Chevening requires 6.5 in all bands; Fulbright varies by university (typically 6.5–7.0); Australia Awards require 6.5; DAAD Germany requires 6.0–6.5. Our IELTS coaching center in Cumilla has achieved Band 8.5 — visit /target-ielts-immigration-center to book your preparation course." },
    { q: "How do I apply for the Chevening Scholarship from Bangladesh?", a: "Apply online at chevening.org between August and November. Requirements: IELTS 6.5 in all bands, 2 years work experience, 3 essays (leadership/networking/career goals), 2 referees. You must apply to 3 UK universities simultaneously. Results announced April. Eammu Holidays provides Chevening SOP review and interview preparation." },
    { q: "Can Bangladeshi students study for free in Germany?", a: "Yes. German public universities charge no tuition fees for all international students (only a semester fee of €150–350). You need IELTS 6.0+ or TestDaF. Living costs are €850–1,200/month. DAAD provides ~5,000 scholarships/year including for Bangladeshis. Germany has the highest number of Bangladeshi scholarship recipients in Europe." },
    { q: "What is the deadline for scholarship applications in 2025–2026?", a: "Key deadlines: Chevening (UK) — November 2025; Fulbright (USA) — October 2025; DAAD (Germany) — October 2025; Australia Awards — April 2025; CSC China — March 2026; Korean KGSP — September 2025; Turkish Burslari — February 2026; Hungarian Stipendium — January 2026. Always verify on official websites as dates change." },
    { q: "Is IELTS compulsory for all scholarships?", a: "Most scholarships require IELTS or TOEFL. However, some accept alternatives: TOEFL (instead of IELTS), Duolingo English Test (some US universities), or proof of English-medium education from Bangladesh (HSC from English-medium school). Germany accepts IELTS 6.0 or TestDaF 4. Japan's MEXT scholarship provides Japanese language training." },
    { q: "How do I write a winning Statement of Purpose (SOP) for scholarships?", a: "A winning SOP has 5 elements: (1) Opening hook — memorable personal story. (2) Academic background — specific achievements and GPA. (3) Research/career goals — specific and measurable. (4) Why this scholarship/country — aligned with your goals. (5) Future impact — how you'll contribute to Bangladesh. 2–3 pages, 12pt font, no grammar errors. Eammu Holidays provides SOP review service." },
    { q: "What is the scholarship success rate for Bangladeshi students?", a: "Chevening Bangladesh accepts approximately 50–70 scholars/year from 1,500+ applications (~4–5% acceptance). Fulbright Bangladesh: ~30–40/year. DAAD: 100+ Bangladeshis/year. Australia Awards Bangladesh: ~100–120/year. Your chances improve significantly with IELTS 7.0+, clear career narrative, and strong references. Contact Eammu Holidays for personalised application strategy." },
    ...(faqItems || []),
  ];

  return (
    <div className="min-h-screen bg-[#FBFDFF] pb-20">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        aria-labelledby="scholarships-hero-h"
        className="bg-white border-b border-gray-100 pt-16 pb-20 px-4 sm:px-6 relative overflow-hidden"
      >
        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-blue-50 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[50%] bg-indigo-50 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex justify-center gap-2 text-[10px] text-gray-400 mb-6 uppercase tracking-widest font-bold flex-wrap">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <span>/</span>
            <Link href="/study-abroad" className="hover:text-blue-600 transition">Study Abroad</Link>
            <span>/</span>
            <span className="text-blue-600">Scholarships 2026</span>
          </nav>

          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-xs font-black uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            2025–2026 Scholarship Database · Updated Monthly
          </div>

          <h1 id="scholarships-hero-h" className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight mb-5 leading-[1.1]">
            {headline?.title || "International"}{" "}
            <span className="text-blue-600">{headline?.highlight || "Scholarships"}</span>{" "}
            <br />
            {headline?.subtitle || "for Bangladesh 2026"}
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto mb-6 text-base sm:text-lg font-medium leading-relaxed">
            {subtitle || "Find fully funded scholarships for Bangladeshi students — UK Chevening, US Fulbright, DAAD Germany, Australia Awards, Japanese MEXT, and 200+ more programmes. Free guidance from Eammu Holidays consultants."}
          </p>

          {/* Degree filter pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {(degreeLinks || [
              { label: "Undergraduate", href: "/scholarships" },
              { label: "Masters / MSc", href: "/scholarships" },
              { label: "PhD & Research", href: "/scholarships" },
              { label: "Short Courses",  href: "/scholarships" },
              { label: "Fully Funded",   href: "/scholarships" },
              { label: "Germany Free",   href: "/scholarships/germany" },
            ]).map(d => (
              <Link
                key={d.label}
                href={d.href}
                className="text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded-full border border-blue-200 text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white transition-all"
              >
                {d.label}
              </Link>
            ))}
          </div>

          {/* Search with live dropdown */}
          <div className="relative max-w-2xl mx-auto mb-10" ref={searchRef}>
            <div className={`flex items-center bg-white rounded-2xl border-2 transition-all duration-200 ${
              searchOpen && search.length > 1 ? "border-blue-500 shadow-2xl shadow-blue-100/50" : "border-gray-200 shadow-xl shadow-gray-100/40"
            }`}>
              <span className="pl-5 text-xl text-gray-400 flex-shrink-0">🔍</span>
              <input
                type="search"
                aria-label="Search scholarships by country"
                placeholder="Search a country — Germany, Japan, Canada, UK..."
                value={search}
                onChange={handleSearch}
                onFocus={() => setSearchOpen(true)}
                className="flex-1 px-4 py-4 bg-transparent outline-none text-gray-800 font-bold text-base placeholder:text-gray-300 placeholder:font-medium"
              />
              {search && (
                <button onClick={clearSearch} aria-label="Clear search" className="pr-3 text-gray-300 hover:text-gray-500 transition">
                  <X size={18} />
                </button>
              )}
              <Link
                href={searchResults[0] ? `/scholarships/${slug(searchResults[0].country)}` : "/scholarships"}
                className="m-2 shrink-0 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-6 py-3 rounded-xl font-black text-sm transition-all"
              >
                Search
              </Link>
            </div>

            {/* Dropdown */}
            <AnimatePresence>
              {searchOpen && search.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.13 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden z-50"
                  role="listbox"
                >
                  {searchResults.length > 0 ? (
                    <div className="p-2">
                      <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest px-3 pt-3 pb-2">
                        {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} found
                      </p>
                      {searchResults.map(c => (
                        <Link
                          key={c.code || c.country}
                          href={`/scholarships/${slug(c.country)}`}
                          onClick={() => { setSearchOpen(false); setSearch(""); }}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition group"
                        >
                          {c.flag ? (
                            <img src={c.flag} className="w-9 h-6 object-cover rounded-md shadow-sm border border-gray-100 shrink-0" alt={`${c.country} flag`} />
                          ) : (
                            <div className="w-9 h-6 bg-gray-100 rounded-md shrink-0 flex items-center justify-center text-sm">🌍</div>
                          )}
                          <div className="flex-1 text-left">
                            <p className="font-black text-gray-800 text-sm group-hover:text-blue-600 transition">{c.country}</p>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">View Scholarships</p>
                          </div>
                          <span className="text-gray-300 group-hover:text-blue-500 transition shrink-0">→</span>
                        </Link>
                      ))}
                      <div className="border-t border-gray-50 mt-2 p-3">
                        <Link href="/scholarships" onClick={() => setSearchOpen(false)} className="block text-center text-xs font-black text-blue-600 hover:underline py-1">
                          Browse all {countries.length || "260"}+ countries →
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="p-10 text-center">
                      <p className="text-3xl mb-3">🌐</p>
                      <p className="font-black text-gray-700 mb-1">No results for "{search}"</p>
                      <p className="text-sm text-gray-400 mb-4">Try a different spelling or browse all countries.</p>
                      <Link href="/scholarships" onClick={() => setSearchOpen(false)} className="text-sm font-black text-blue-600 hover:underline">Browse all countries →</Link>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Featured destinations */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] w-full mb-1">
              Most Popular Scholarship Destinations 2026
            </span>
            {(featuredCodes || ["GB","US","DE","JP","AU","CA","KR","TR"]).map(code => {
              const country = countries.find(c => c.code === code);
              if (!country) return null;
              return (
                <Link
                  key={code}
                  href={`/scholarships/${slug(country.country)}`}
                  className="flex items-center gap-2.5 bg-white border border-gray-100 px-4 py-2.5 rounded-full shadow-sm hover:shadow-lg hover:border-blue-300 hover:-translate-y-0.5 transition-all group"
                >
                  {country.flag && <img src={country.flag} className="w-7 h-5 object-cover rounded shadow-sm" alt={`${country.country} flag`} />}
                  <span className="text-sm font-black text-gray-600 group-hover:text-blue-600">{country.country}</span>
                </Link>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {(stats || [
              { icon: "🌍", value: "260+", label: "Countries" },
              { icon: "🎓", value: "500+", label: "Scholarships" },
              { icon: "✅", value: "98%",  label: "Visa Success" },
              { icon: "🏅", value: "Free", label: "Guidance" },
            ]).map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl px-6 py-5 hover:bg-blue-50 transition-all cursor-default group">
                <div className="text-2xl mb-1">{s.icon}</div>
                <p className="text-3xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">{s.value}</p>
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SCHOLARSHIP TYPES — 6 cards
      ══════════════════════════════════════════ */}
      <section aria-labelledby="types-h" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12">
          <span className="text-blue-600 text-xs font-black uppercase tracking-widest">Types of Funding</span>
          <h2 id="types-h" className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
            Types of Scholarships for Bangladeshi Students
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
            Understanding funding types helps you identify which programmes you're eligible for and when to apply.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCHOLARSHIP_TYPES.map(s => (
            <div key={s.title} className="bg-white rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all p-6 group">
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{s.icon}</span>
                <span className={`text-[10px] font-black px-2.5 py-1 rounded-full text-white ${s.tagColor}`}>{s.tag}</span>
              </div>
              <h3 className="font-black text-gray-900 text-lg mb-3 group-hover:text-blue-600 transition-colors">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <Link href={s.link} className="inline-flex items-center gap-1 text-blue-600 font-black text-xs hover:underline">
                {s.linkLabel} <ArrowRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TOP SCHOLARSHIPS — extended table
      ══════════════════════════════════════════ */}
      <section aria-labelledby="top-h" className="bg-white border-y border-gray-100 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="text-blue-600 text-xs font-black uppercase tracking-widest">2025–2026</span>
              <h2 id="top-h" className="text-3xl md:text-4xl font-black text-gray-900 mt-1">
                🏅 Top Scholarships for Bangladeshi Students
              </h2>
              <p className="text-gray-400 text-sm mt-1 font-medium">
                Fully funded programmes with highest acceptance rates for Bangladesh passport holders.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {TOP_SCHOLARSHIPS_EXTENDED.map(s => {
              const countryObj = countries.find(c => c.country.toLowerCase().includes(s.country.toLowerCase()));
              return (
                <Link
                  key={s.name}
                  href={`/scholarships/${s.slug}`}
                  className="group flex flex-col bg-white border-2 border-gray-100 rounded-2xl p-5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {countryObj?.flag ? (
                      <img src={countryObj.flag} className="w-10 h-7 object-cover rounded-lg shadow-sm border border-gray-100 shrink-0" alt={s.country} />
                    ) : (
                      <span className="text-2xl shrink-0">{s.emoji}</span>
                    )}
                    <div className="min-w-0">
                      <p className="font-black text-gray-900 text-sm truncate group-hover:text-blue-600 transition">{s.name}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">{s.country}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full text-white ${
                      s.tag === "Fully Funded" ? "bg-green-500" : s.tag === "PhD Only" ? "bg-purple-500" : "bg-blue-500"
                    }`}>{s.tag}</span>
                    <span className="text-[10px] font-bold text-orange-500 flex items-center gap-1">
                      <Clock size={10} /> {s.deadline}
                    </span>
                  </div>
                  <p className="text-[11px] font-bold text-gray-600 mt-auto">{s.amount}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          APPLICATION STEPS
      ══════════════════════════════════════════ */}
      <section aria-labelledby="steps-h" className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 text-xs font-black uppercase tracking-widest">How to Apply</span>
          <h2 id="steps-h" className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
            Step-by-Step Scholarship Application Guide
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
            From preparation to visa approval — follow this 6-step process used by 5,000+ successful Bangladeshi scholarship applicants.
          </p>
        </div>
        <div className="grid gap-4">
          {APPLICATION_STEPS.map(step => (
            <div
              key={step.num}
              className="flex flex-col sm:flex-row gap-5 items-start group p-6 sm:p-8 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-blue-50 transition-all border border-transparent hover:border-blue-100"
            >
              <div className="text-5xl font-black text-gray-100 group-hover:text-blue-200 transition-colors italic leading-none shrink-0 w-16 text-center">
                {step.num}
              </div>
              <div className="flex-1">
                <h3 className="font-black text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                {step.link && (
                  <Link href={step.link} className="inline-flex items-center gap-1 text-blue-600 font-black text-xs mt-3 hover:underline">
                    {step.linkLabel} <ArrowRight size={12} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ELIGIBILITY CRITERIA
      ══════════════════════════════════════════ */}
      <section aria-labelledby="eligibility-h" className="bg-white border-y border-gray-100 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-xs font-black uppercase tracking-widest">Requirements</span>
            <h2 id="eligibility-h" className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
              Common Scholarship Eligibility Criteria
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
              Most international scholarships for Bangladeshi students require these 8 key elements.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ELIGIBILITY_CRITERIA.map(e => (
              <div key={e.label} className="bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-white hover:shadow-lg transition-all p-5 group">
                <div className="text-2xl mb-3">{e.icon}</div>
                <h3 className="font-black text-gray-900 text-sm mb-2 group-hover:text-blue-600 transition-colors">{e.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/target-ielts-immigration-center"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-black text-sm hover:bg-blue-700 transition shadow-lg"
            >
              <BookOpen size={16} /> Prepare IELTS at Our Cumilla Center <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DEADLINE CALENDAR
      ══════════════════════════════════════════ */}
      <section aria-labelledby="deadline-h" className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 text-xs font-black uppercase tracking-widest">Application Calendar</span>
          <h2 id="deadline-h" className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
            Scholarship Deadlines 2025–2026
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
            Plan ahead — most major scholarships close 6–12 months before the programme starts.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DEADLINE_GUIDE.map(d => (
            <div key={d.month} className="bg-white rounded-3xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl p-6 transition-all group">
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={16} className="text-blue-500" />
                <h3 className="font-black text-blue-600 text-lg">{d.month}</h3>
              </div>
              <ul className="space-y-2 mb-4">
                {d.scholarships.map(s => (
                  <li key={s} className="flex items-start gap-2 text-xs text-gray-700 font-semibold">
                    <CheckCircle size={12} className="text-green-500 shrink-0 mt-0.5" /> {s}
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-orange-500 font-bold italic">⚡ {d.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COUNTRY GRID — with MongoDB flags
      ══════════════════════════════════════════ */}
      <section aria-labelledby="countries-h" className="bg-white border-y border-gray-100 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8 border-b border-gray-100 pb-6 flex-wrap gap-4">
            <div>
              <span className="text-blue-600 text-xs font-black uppercase tracking-widest">Full Database</span>
              <h2 id="countries-h" className="text-3xl font-black text-gray-900 mt-1 tracking-tight">
                Explore Scholarships by Country
              </h2>
              <p className="text-gray-400 text-sm mt-1 font-medium">
                Click any country for its full 2025–2026 scholarship list, requirements, and deadlines.
              </p>
            </div>
            <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-wider">
              {filteredCountries.length} Countries Available
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {currentCountries.map(c => (
              <Link
                key={c.code || c.country}
                href={`/scholarships/${slug(c.country)}`}
                title={`Scholarships in ${c.country} 2026`}
                className="group flex flex-col items-center bg-white p-5 rounded-[2rem] border border-gray-50 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] transition-all duration-500"
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full scale-0 group-hover:scale-125 transition-transform duration-500" />
                  {c.flag ? (
                    <img
                      src={c.flag}
                      alt={`${c.country} scholarships 2026`}
                      className="relative w-14 h-10 object-cover rounded-xl shadow-md border-2 border-white group-hover:rotate-6 transition-all duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="relative w-14 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">🌍</div>
                  )}
                </div>
                <h3 className="text-xs font-black text-gray-800 group-hover:text-blue-600 transition-colors text-center leading-tight">{c.country}</h3>
                <p className="mt-2 text-[10px] font-black text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">View →</p>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-14 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <button
                  onClick={() => goToPage(Math.max(currentPage - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm disabled:opacity-20 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center font-bold text-gray-400"
                >←</button>
                <div className="flex gap-2 flex-wrap justify-center">
                  {[...Array(totalPages)].map((_, i) => {
                    const n = i + 1;
                    if (n === 1 || n === totalPages || Math.abs(n - currentPage) < 2) {
                      return (
                        <button
                          key={i}
                          onClick={() => goToPage(n)}
                          aria-current={currentPage === n ? "page" : undefined}
                          className={`w-12 h-12 rounded-xl font-black transition-all ${currentPage === n ? "bg-blue-600 text-white shadow-lg scale-110" : "bg-white border border-gray-100 text-gray-400 hover:text-blue-600"}`}
                        >{n}</button>
                      );
                    } else if (n === currentPage - 2 || n === currentPage + 2) {
                      return <span key={i} className="flex items-center text-gray-300 px-1">...</span>;
                    }
                    return null;
                  })}
                </div>
                <button
                  onClick={() => goToPage(Math.min(currentPage + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm disabled:opacity-20 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center font-bold text-gray-400"
                >→</button>
              </div>
              <p className="text-xs font-bold text-gray-300 uppercase tracking-widest">Page {currentPage} of {totalPages}</p>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEO TEXT BLOCKS (from props + extra)
      ══════════════════════════════════════════ */}
      <section aria-labelledby="seo-blocks-h" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 id="seo-blocks-h" className="text-2xl font-black text-gray-900 mb-8 text-center">
          Everything You Need to Know About International Scholarships
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ...(seoTextBlocks || []),
            {
              heading: "Scholarships for Bangladeshi Students 2026",
              body: "Bangladesh students have excellent scholarship opportunities abroad. The UK offers Chevening (50–70 scholars from Bangladesh/year), Commonwealth Scholarships, and GREAT Scholarships. Germany provides DAAD funding and free public university tuition (no fees). Japan's MEXT scholarship is one of the most generous globally. Apply through Eammu Holidays for SOP review and interview preparation.",
            },
            {
              heading: "How to Get IELTS 7.0+ for Scholarship Applications",
              body: "Most scholarships require IELTS 6.5–7.5. Our Target IELTS & Immigration Center in Cumilla Cantonment has trained 5,000+ students with a highest achieved band of 8.5. We use British Council-pattern mock tests, AI-powered scoring, and personalised feedback. Book your preparation at /target-ielts-immigration-center.",
            },
            {
              heading: "Student Visa After Scholarship Acceptance",
              body: "Once you receive your scholarship offer letter, you need a student visa. Eammu Holidays has a 98% student visa success rate for UK, USA, Canada, and Australia. We handle CAS letters, financial evidence, SOP, and TB tests. Visit /study-abroad/student-visa for complete guidance.",
            },
          ].map((block, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all">
              <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-sm mb-5">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-base font-black text-gray-900 mb-3">{block.heading}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{block.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTERNAL LINK HUB
      ══════════════════════════════════════════ */}
      <section aria-labelledby="links-h" className="bg-gray-900 py-14 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="links-h" className="text-2xl md:text-3xl font-black text-white">
              All Study Abroad & Visa Resources
            </h2>
            <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
              IELTS coaching, student visa processing, scholarship support, and global offices — all Eammu Holidays services.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {INTERNAL_LINKS.map(link => (
              <Link key={link.href} href={link.href}>
                <div className="group bg-white/5 hover:bg-white/10 rounded-2xl p-3.5 border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-blue-400 shrink-0">{link.icon}</div>
                    <span className="text-white font-black text-[11px] leading-tight group-hover:text-blue-300 transition-colors">{link.label}</span>
                  </div>
                  <p className="text-gray-500 group-hover:text-gray-400 text-[10px] leading-relaxed transition-colors">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section aria-labelledby="faq-h" className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12">
          <span className="text-blue-600 text-xs font-black uppercase tracking-widest">Expert Answers</span>
          <h2 id="faq-h" className="text-3xl md:text-4xl font-black text-gray-900 mt-2">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
            The most searched scholarship questions from Bangladeshi students — answered by Eammu Holidays consultants.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>
        <div className="space-y-3">
          {RICH_FAQS.map((item, i) => <FaqItem key={i} item={item} />)}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEO RICH TEXT FOOTER
      ══════════════════════════════════════════ */}
      <section aria-labelledby="guide-h" className="bg-gray-50 border-t border-gray-100 py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 id="guide-h" className="text-2xl font-black text-gray-900 mb-5">
            International Scholarships for Bangladeshi Students — Complete 2026 Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-500 leading-relaxed">
            <div className="space-y-4">
              <p>
                Eammu Holidays is Bangladesh's most trusted scholarship and study abroad consultancy, helping students secure{" "}
                <strong className="text-gray-700">Chevening (UK)</strong>,{" "}
                <strong className="text-gray-700">Fulbright (USA)</strong>,{" "}
                <strong className="text-gray-700">DAAD (Germany)</strong>,{" "}
                <strong className="text-gray-700">Australia Awards</strong>, and{" "}
                <strong className="text-gray-700">MEXT Japan</strong> scholarships. Our{" "}
                <Link href="/target-ielts-immigration-center" className="text-blue-600 font-bold hover:underline">IELTS preparation center in Cumilla</Link>{" "}
                has helped 5,000+ students achieve their target band score — a prerequisite for all major scholarships. For complete{" "}
                <Link href="/study-abroad/student-visa" className="text-blue-600 font-bold hover:underline">student visa processing</Link>, our team maintains a 98% approval rate.
              </p>
              <p>
                Germany offers arguably the best value for Bangladeshi students — public universities are <strong className="text-gray-700">tuition-free</strong> for all international students. Combined with the{" "}
                <Link href="/scholarships/germany" className="text-blue-600 font-bold hover:underline">DAAD scholarship</Link> covering living costs, Germany is the top destination for budget-conscious scholars. Apply 12 months before your intended start date. Our{" "}
                <Link href="/contact/travel-agency-bangladesh" className="text-blue-600 font-bold hover:underline">Cumilla office</Link> provides full DAAD application support.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                For students who have faced{" "}
                <Link href="/visa-rejection" className="text-blue-600 font-bold hover:underline">visa rejection</Link>, our consultants provide free re-application analysis and strengthen every weak point in your application. Use our free{" "}
                <Link href="/travel-resources/visa-checklist-generator" className="text-blue-600 font-bold hover:underline">visa document checklist generator</Link> and{" "}
                <Link href="/travel-resources/visa-processing-time-tracker" className="text-blue-600 font-bold hover:underline">visa processing time tracker</Link>{" "}
                to plan your application timeline accurately.
              </p>
              <p>
                Beyond scholarships, Eammu Holidays supports the full international study journey — from{" "}
                <Link href="/target-usa-visa-interview-preparation" className="text-blue-600 font-bold hover:underline">USA visa interview preparation</Link> to accommodation guidance in{" "}
                <Link href="/contact/travel-agency-georgia" className="text-blue-600 font-bold hover:underline">Georgia (Tbilisi)</Link>,{" "}
                <Link href="/contact/travel-agency-armenia" className="text-blue-600 font-bold hover:underline">Armenia (Yerevan)</Link>, and{" "}
                <Link href="/contact/travel-agency-dubai" className="text-blue-600 font-bold hover:underline">Dubai (UAE)</Link>. Read our{" "}
                <Link href="/blogs" className="text-blue-600 font-bold hover:underline">travel blog</Link> for monthly scholarship deadline updates and student visa guides.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {["Scholarship Bangladesh 2026","Chevening Scholarship Bangladesh","DAAD Germany Free Tuition","Fulbright USA Bangladesh","Australia Awards Bangladesh","MEXT Japan Scholarship","Korea KGSP Bangladesh","Turkey Burslari Bangladesh","Study Abroad Consultancy Cumilla","Student Visa Bangladesh 98%"].map(kw => (
              <span key={kw} className="text-[11px] px-3 py-1 bg-white border border-gray-200 text-gray-500 font-semibold rounded-full">{kw}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 mb-8">
        <div className="bg-gray-900 rounded-[2.5rem] p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600 blur-[120px] opacity-20 rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-600 blur-[120px] opacity-20 rounded-full pointer-events-none" />
          <div className="relative z-10">
            <p className="text-[10px] uppercase font-black text-blue-400 tracking-[0.3em] mb-3">Start Your Journey</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">Don't Miss 2026 Scholarship Deadlines</h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
              Chevening closes November · Fulbright closes October · DAAD closes October. Let Eammu Holidays guide you from IELTS preparation to final visa approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://wa.me/8801701699743"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-green-400 transition shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} /> Free WhatsApp Consultation
              </a>
              <Link href="/study-abroad/student-visa" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-blue-700 transition flex items-center justify-center gap-2">
                <GraduationCap size={16} /> Student Visa Guide <ArrowRight size={14} />
              </Link>
              <Link href="/target-ielts-immigration-center" className="bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-white/20 transition flex items-center justify-center gap-2">
                <BookOpen size={16} /> IELTS Coaching
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {(featuredCodes || ["GB","US","DE","JP","AU","CA"]).map(code => {
                const country = countries.find(c => c.code === code);
                if (!country) return null;
                return (
                  <Link
                    key={code}
                    href={`/scholarships/${slug(country.country)}`}
                    className="flex items-center gap-2 bg-white/10 hover:bg-blue-600 border border-white/10 px-5 py-3 rounded-2xl transition-all text-white text-sm font-bold"
                  >
                    {country.flag && <img src={country.flag} className="w-6 h-4 object-cover rounded" alt="" aria-hidden="true" />}
                    {country.country}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}