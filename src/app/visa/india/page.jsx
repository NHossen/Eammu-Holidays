"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { createSlug } from "@/app/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA — export from app/visa/india/metadata.js (App Router)
// ─────────────────────────────────────────────────────────────────────────────
// export const metadata = {
//   title: "Tourist Visa from India 2026 — 200+ Countries | Visa Expert Hub",
//   description: "Apply for a tourist visa from India. Expert consultancy for USA, UK, Canada, Schengen, Japan, Australia & 200+ countries. 98% approval rate. Embassy-verified documents.",
//   keywords: "tourist visa India 2026, visa consultancy India, USA visa India, UK visa India, Schengen visa India, Canada visa India, tourist visa Indian passport, visa on arrival India, e-visa India, Indian passport visa free countries",
//   alternates: { canonical: "https://eammu.com/visa/india" },
//   openGraph: {
//     title: "Tourist Visa from India 2026 — 200+ Countries",
//     description: "Expert visa consultancy for Indian passport holders. 98% approval rate.",
//     url: "https://eammu.com/visa/india",
//     siteName: "eammu.com",
//     locale: "en_IN",
//     type: "website",
//   },
// };

// ─────────────────────────────────────────────────────────────────────────────
// STATIC DATA
// ─────────────────────────────────────────────────────────────────────────────
const POPULAR = [
  { name: "United States",   emoji: "🇺🇸" },
  { name: "United Kingdom",  emoji: "🇬🇧" },
  { name: "Canada",          emoji: "🇨🇦" },
  { name: "Australia",       emoji: "🇦🇺" },
  { name: "Germany",         emoji: "🇩🇪" },
  { name: "France",          emoji: "🇫🇷" },
  { name: "Japan",           emoji: "🇯🇵" },
  { name: "Singapore",       emoji: "🇸🇬" },
  { name: "Thailand",        emoji: "🇹🇭" },
  { name: "Malaysia",        emoji: "🇲🇾" },
  { name: "Italy",           emoji: "🇮🇹" },
  { name: "Turkey",          emoji: "🇹🇷" },
];

// Visa-free / Visa-on-arrival countries for Indian passport (high search volume)
const VISA_FREE_COUNTRIES = [
  { name: "Thailand",    type: "Visa on Arrival",  days: "30 days",  emoji: "🇹🇭" },
  { name: "Maldives",    type: "Visa on Arrival",  days: "30 days",  emoji: "🇲🇻" },
  { name: "Indonesia",   type: "Visa on Arrival",  days: "30 days",  emoji: "🇮🇩" },
  { name: "Sri Lanka",   type: "e-Visa",           days: "30 days",  emoji: "🇱🇰" },
  { name: "Nepal",       type: "Visa Free",        days: "Unlimited",emoji: "🇳🇵" },
  { name: "Bhutan",      type: "Visa Free",        days: "Unlimited",emoji: "🇧🇹" },
  { name: "Qatar",       type: "Visa on Arrival",  days: "30 days",  emoji: "🇶🇦" },
  { name: "Mauritius",   type: "Visa Free",        days: "90 days",  emoji: "🇲🇺" },
  { name: "Cambodia",    type: "Visa on Arrival",  days: "30 days",  emoji: "🇰🇭" },
  { name: "Zimbabwe",    type: "Visa on Arrival",  days: "30 days",  emoji: "🇿🇼" },
  { name: "Kenya",       type: "e-Visa",           days: "90 days",  emoji: "🇰🇪" },
  { name: "Jordan",      type: "Visa on Arrival",  days: "30 days",  emoji: "🇯🇴" },
];

const WHY_US = [
  { icon: "🛡️", title: "98% Approval Rate",          desc: "Our consultants have helped 1,00,000+ Indian travelers get approved. We know exactly what embassies look for." },
  { icon: "📋", title: "Embassy-Accurate Documents",  desc: "Every checklist verified against official embassy circulars & VFS Global announcements, updated monthly for 2026 protocols." },
  { icon: "⚡", title: "24-Hour Document Review",     desc: "Rapid document review and feedback eliminates back-and-forth delays before submission." },
  { icon: "🌍", title: "200+ Countries Covered",      desc: "Schengen to Southeast Asia — tourist, business, student & medical visas for Indian passport holders." },
];

const TESTIMONIALS = [
  { name: "Priya Sharma",    country: "UK Visa Approved ✅",      text: "Got my UK Standard Visitor visa in 12 days. The team reviewed all my documents and cover letter — zero issues at the British High Commission.", stars: 5 },
  { name: "Rahul Mehta",     country: "Schengen Approved ✅",     text: "Applied for Germany Schengen through them. Perfect document checklist, no rejection. Highly recommend for first-timers applying from India.", stars: 5 },
  { name: "Ananya Iyer",     country: "Canada Visa Approved ✅",  text: "Canada Visitor Visa (TRV) — they helped me format everything the IRCC way. Approved in 3 weeks from Delhi!", stars: 5 },
  { name: "Vikram Singh",    country: "USA B1/B2 Approved ✅",    text: "Was nervous about the DS-160 and interview prep. Their mock interview sessions and document review made me feel confident. Got the visa stamped!", stars: 5 },
  { name: "Sunita Nair",     country: "Japan Visa Approved ✅",   text: "Japan embassy checklist was very detailed. They helped me with the itinerary format, hotel bookings, and bank statement. Smooth experience!", stars: 5 },
  { name: "Arjun Kapoor",    country: "Australia Visa Approved ✅",text: "Subclass 600 can be tricky. They guided me through the genuine temporary entrant statement and financial docs. Approved in 18 days!", stars: 5 },
];

// Internal SEO links — maps to /visa/india/[slug] from sitemap mongoSlugs routes
const SEO_LINKS = [
  { name: "USA B1/B2 Tourist Visa",        slug: "united-states",  desc: "DS-160 form, bank statement, interview tips from India" },
  { name: "UK Standard Visitor Visa",      slug: "united-kingdom", desc: "UKVI checklist, photo specs, financial proof for Indians" },
  { name: "Canada Visitor Visa (TRV)",     slug: "canada",         desc: "IRCC requirements, biometrics, checklist India" },
  { name: "Germany Schengen Visa",         slug: "germany",        desc: "Germany, France, Italy — single Schengen visa guide" },
  { name: "Japan Tourist Visa",            slug: "japan",          desc: "Embassy checklist, bank balance for Indian passport" },
  { name: "Australia Tourist Visa",        slug: "australia",      desc: "Subclass 600, documents, processing time from India" },
  { name: "France Schengen Visa",          slug: "france",         desc: "French consulate requirements, VFS application from India" },
  { name: "Italy Schengen Visa",           slug: "italy",          desc: "Italian visa from India, consulate checklist 2026" },
  { name: "Malaysia e-Visa",               slug: "malaysia",       desc: "eNTRI, eVISA — quick & easy for Indian travelers" },
  { name: "Thailand Tourist Visa",         slug: "thailand",       desc: "TR visa from Royal Thai Embassy, New Delhi" },
  { name: "Singapore Tourist Visa",        slug: "singapore",      desc: "ICA requirements, tourist pass guide from India" },
  { name: "Dubai / UAE Tourist Visa",      slug: "united-arab-emirates", desc: "UAE visa fees, documents, 30/60/90-day options" },
  { name: "New Zealand Visitor Visa",      slug: "new-zealand",    desc: "INZ requirements, financial proof from India 2026" },
  { name: "South Korea Tourist Visa",      slug: "south-korea",    desc: "Seoul embassy checklist, Indian passport guide" },
  { name: "Switzerland Schengen Visa",     slug: "switzerland",    desc: "Swiss consulate via VFS, complete checklist" },
  { name: "Portugal Schengen Visa",        slug: "portugal",       desc: "Lisbon embassy, NRI and Indian resident application" },
];

// e-Visa routes — maps to /visa/e-visa/indian-national-e-visa-requirements-for-[dest]
const EVISA_DESTINATIONS = [
  { name: "Sri Lanka", slug: "sri-lanka",    note: "Online, ~$50, instant" },
  { name: "Kenya",     slug: "kenya",        note: "eCitizen portal, $51" },
  { name: "Egypt",     slug: "egypt",        note: "Online, fast approval" },
  { name: "Cambodia",  slug: "cambodia",     note: "e-Arrival, $30" },
  { name: "Turkey",    slug: "turkey",       note: "e-Visa, $51, 3 mins" },
  { name: "Azerbaijan",slug: "azerbaijan",   note: "ASAN Visa, $23" },
  { name: "Armenia",   slug: "armenia",      note: "e-Visa $31, 3-day" },
  { name: "Georgia",   slug: "georgia",      note: "Visa on arrival free" },
  { name: "Morocco",   slug: "morocco",      note: "Visa required, consulate" },
];

// Processing time routes — maps to /travel-resources/visa-processing-time-tracker/[dest]-national-visa-processing-time-for-indian-[type]
const PROCESSING_TIME_DATA = [
  { dest: "united-states", destName: "USA",        days: "60–180 days", note: "Interview waitlist", type: "sticker" },
  { dest: "united-kingdom", destName: "UK",         days: "15 working days", note: "Priority service available", type: "sticker" },
  { dest: "canada",         destName: "Canada",     days: "28–56 days", note: "Biometrics required", type: "sticker" },
  { dest: "germany",        destName: "Germany",    days: "15 working days", note: "Schengen rules apply", type: "sticker" },
  { dest: "japan",          destName: "Japan",      days: "4–7 working days", note: "No interview", type: "sticker" },
  { dest: "australia",      destName: "Australia",  days: "18–30 days", note: "Online lodgement", type: "e-visa" },
  { dest: "singapore",      destName: "Singapore",  days: "3–5 working days", note: "ICA fast track", type: "sticker" },
  { dest: "malaysia",       destName: "Malaysia",   days: "1–3 days",   note: "eNTRI instant", type: "e-visa" },
];

// Rejection routes — maps to /visa-rejection/indian-visa-rejection-rate-for-[dest]-[type]
const REJECTION_GUIDES = [
  { dest: "united-states", destName: "USA",     type: "tourist",  rate: "~25%",  tip: "Strong ties to India required" },
  { dest: "united-kingdom",destName: "UK",      type: "tourist",  rate: "~14%",  tip: "Financial credibility key" },
  { dest: "canada",        destName: "Canada",  type: "tourist",  rate: "~32%",  tip: "Immigration intent scrutinized" },
  { dest: "germany",       destName: "Germany", type: "tourist",  rate: "~8%",   tip: "Schengen lowest rejection" },
  { dest: "australia",     destName: "Australia",type: "tourist", rate: "~10%",  tip: "GTE statement critical" },
];

const VISA_CATEGORIES = [
  { label: "Europe & Schengen",   icon: "🏰", desc: "Germany, France, Italy, Spain & 22 more Schengen nations",   href: "/schengen-visa" },
  { label: "North America",       icon: "🗽", desc: "USA B1/B2, Canada TRV, Mexico & beyond",                      href: "/visa/india/united-states" },
  { label: "Asia Pacific",        icon: "🏯", desc: "Japan, Singapore, Thailand, Malaysia, South Korea",           href: "/visa/india/japan" },
  { label: "Australia & NZ",      icon: "🦘", desc: "Australian Subclass 600, NZ Visitor Visa",                    href: "/visa/india/australia" },
  { label: "Middle East & UAE",   icon: "🕌", desc: "UAE, Saudi Arabia, Qatar, Oman — Indian passport guide",      href: "/visa/dubai-residents" },
  { label: "Business Visa",       icon: "💼", desc: "Short-stay business visas — USA, UK, Schengen & Asia",        href: "/visa/visa-guide" },
];

const STATS = [
  { val: "1,00,000+", label: "Visas Processed" },
  { val: "98%",       label: "Approval Rate" },
  { val: "200+",      label: "Countries Covered" },
  { val: "24hr",      label: "Document Review" },
  { val: "2026",      label: "Updated Protocols" },
];

// Bank balance requirements — high-search-volume informational content
const BANK_BALANCE_TABLE = [
  { country: "USA B1/B2",        currency: "USD",  amount: "$5,000–$15,000",  inr: "₹4.2L–₹12.5L", notes: "6-month bank history, stable transactions" },
  { country: "UK Visitor",       currency: "GBP",  amount: "£3,000–£5,000",   inr: "₹3.2L–₹5.3L",  notes: "3-month statements, must show savings" },
  { country: "Schengen",         currency: "EUR",  amount: "€3,000–€5,000",   inr: "₹2.7L–₹4.5L",  notes: "€100/day rule, return ticket required" },
  { country: "Canada TRV",       currency: "CAD",  amount: "CAD 5,000–10,000",inr: "₹3.1L–₹6.2L",  notes: "IRCC scrutinizes family ties heavily" },
  { country: "Japan",            currency: "JPY",  amount: "¥3,00,000–¥5,00,000", inr: "₹1.7L–₹2.8L", notes: "Clean statement, no large debits" },
  { country: "Australia (600)",  currency: "AUD",  amount: "AUD 5,000–8,000", inr: "₹2.8L–₹4.5L",  notes: "GTE + financial evidence combined" },
];

// Document checklist — most searched content
const DOCUMENT_CHECKLIST = [
  { item: "Valid Indian Passport",        detail: "Minimum 6 months validity beyond travel dates. At least 2 blank pages." },
  { item: "Passport-size Photos",         detail: "35×45mm, white background, ICAO-compliant, taken within last 3 months." },
  { item: "Bank Statements",              detail: "Last 3–6 months. Shows consistent balance, no large unexplained credits." },
  { item: "ITR / Form 16",               detail: "Last 2–3 years of Income Tax Returns. Proof of financial stability." },
  { item: "Employment Proof",             detail: "Leave approval letter, employment contract, salary slips (3 months)." },
  { item: "Travel Insurance",             detail: "Minimum €30,000 medical coverage for Schengen. Recommended for all destinations." },
  { item: "Hotel Bookings",               detail: "Confirmed (refundable) accommodation for entire stay duration." },
  { item: "Flight Tickets",               detail: "Confirmed onward & return tickets. Use refundable fares during application." },
  { item: "Cover Letter",                 detail: "Explains purpose of visit, itinerary, and ties to India (why you'll return)." },
  { item: "Property / Investment Proof",  detail: "Property ownership, FD receipts, mutual fund statements — shows India ties." },
];

const SCHOLARSHIP_COUNTRIES = [
  { name: "Australia",    slug: "australia" },
  { name: "Canada",       slug: "canada" },
  { name: "Germany",      slug: "germany" },
  { name: "UK",           slug: "united-kingdom" },
  { name: "USA",          slug: "united-states" },
  { name: "Japan",        slug: "japan" },
];

const alphabet = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function TouristVisaIndia() {
  const [searchTerm,     setSearchTerm]     = useState("");
  const [suggestions,    setSuggestions]    = useState([]);
  const [showSuggestions,setShowSuggestions]= useState(false);
  const [selectedLetter, setSelectedLetter] = useState("All");
  const [currentPage,    setCurrentPage]    = useState(1);
  const [currentSlide,   setCurrentSlide]   = useState(0);
  const [countries,      setCountries]      = useState([]);
  const [isLoaded,       setIsLoaded]       = useState(false);
  const [activeTab,      setActiveTab]      = useState("all"); // "all" | "evisa" | "visafree"
  const searchRef  = useRef(null);
  const itemsPerPage = 12;

  const slides = [
    { img: "/the-love-island.webp",               tag: "Island Getaways",   title: "Explore Paradise" },
    { img: "/top-travel-agency.webp",             tag: "Trusted Agency",    title: "Expert Guidance" },
    { img: "/travel_banner_second_part_one.webp", tag: "200+ Countries",    title: "Your World Awaits" },
  ];

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide(p => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, [slides.length]);

  useEffect(() => {
    fetch("/api/countries")
      .then(r => r.json())
      .then(data => { setCountries(data); setIsLoaded(true); })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (searchTerm.length >= 1) {
      const filtered = countries
        .filter(c => c.country?.toLowerCase().startsWith(searchTerm.toLowerCase()))
        .slice(0, 8);
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm, countries]);

  useEffect(() => {
    const handler = e => {
      if (searchRef.current && !searchRef.current.contains(e.target))
        setShowSuggestions(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filteredCountries = countries.filter(c => {
    const matchLetter = selectedLetter === "All" || c.country?.[0]?.toUpperCase() === selectedLetter;
    const matchSearch  = c.country?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchLetter && matchSearch;
  });

  const totalPages   = Math.ceil(filteredCountries.length / itemsPerPage);
  const currentItems = filteredCountries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSuggestionClick = country => {
    setSearchTerm(country.country);
    setShowSuggestions(false);
    setCurrentPage(1);
    setSelectedLetter("All");
  };

  const resetFilters = () => { setSelectedLetter("All"); setSearchTerm(""); setCurrentPage(1); };

  // ── RENDER ──────────────────────────────────────────────────────────────────
  return (
    <div
      className="min-h-[60vh] bg-white text-black font-sans"
      style={{ fontFamily: "'Plus Jakarta Sans','DM Sans',system-ui,sans-serif" }}
    >

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative w-full flex items-center justify-center py-12 overflow-hidden" style={{ minHeight: "560px" }}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
            style={{ transition: "opacity 1.5s ease" }}
          >
            <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(255,255,255,0.75) 0%,rgba(255,255,255,0.45) 50%,rgba(255,255,255,0.97) 100%)" }} />
          </div>
        ))}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.15) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-500 ${i === currentSlide ? "w-8 h-2.5 bg-[#f5c800]" : "w-2.5 h-2.5 bg-black/20 hover:bg-black/40"}`}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 text-center pt-10 pb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-7 rounded-full bg-white border border-black/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#f5c800] animate-pulse" />
            <span className="text-xs font-bold text-black/80 tracking-widest uppercase">200+ Countries · Expert Visa Consultancy · India 2026</span>
          </div>

          {/* H1 — Primary keyword: "tourist visa from India" */}
          <h1 className="text-3xl md:text-5xl lg:text-[52px] font-black leading-[0.95] tracking-tight mb-5 text-black">
            Tourist Visa from <span className="text-[#f5c800]">India</span> —<br />
            <span className="text-black/30">Done Right, First Time.</span>
          </h1>

          {/* Supporting keywords: USA, UK, Canada, Schengen, Indian passport */}
          <p className="text-black/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Embassy-accurate documentation for <strong className="text-black">USA B1/B2</strong>,{" "}
            <strong className="text-black">UK Standard Visitor</strong>,{" "}
            <strong className="text-black">Canada TRV</strong>, and the{" "}
            <strong className="text-black">29-country Schengen Area</strong> — handled by expert visa consultants for Indian passport holders.
          </p>

          {/* ── SEARCH CARD ────────────────────────────────────────────────── */}
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-7xl mx-auto border border-black/5 shadow-2xl mb-4">
            <div ref={searchRef} className="relative mb-5">
              <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f5c800] z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                placeholder="Search destination country… (e.g. Japan, Canada, Germany)"
                className="w-full pl-14 pr-12 py-5 rounded-2xl text-base font-semibold outline-none transition-all shadow-inner"
                style={{ background: "#f8f8f8", border: "1.5px solid rgba(0,0,0,0.05)", color: "black" }}
                value={searchTerm}
                onChange={e => { setSearchTerm(e.target.value); setCurrentPage(1); setSelectedLetter("All"); }}
                onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                onKeyDown={e => {
                  if (e.key === "Escape") setShowSuggestions(false);
                  if (e.key === "Enter" && suggestions.length > 0) handleSuggestionClick(suggestions[0]);
                }}
                autoComplete="off"
                aria-label="Search destination country for tourist visa from India"
              />
              {searchTerm && (
                <button
                  onClick={() => { setSearchTerm(""); setSelectedLetter("All"); setCurrentPage(1); setSuggestions([]); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full text-black/30 hover:text-black hover:bg-black/5 transition text-lg font-bold"
                  aria-label="Clear search"
                >✕</button>
              )}
              {showSuggestions && (
                <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl overflow-hidden z-50 shadow-2xl bg-white border border-[#f5c800]/30">
                  <div className="p-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/30 px-3 py-2">
                      🔍 {suggestions.length} countries found
                    </p>
                    {suggestions.map((c, i) => (
                      <Link
                        key={i}
                        href={`/visa/india/${createSlug(c.country)}`}
                        onClick={() => handleSuggestionClick(c)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer"
                      >
                        {c.flag && <img src={c.flag} alt={`${c.country} flag`} className="w-8 object-cover rounded shadow-sm" style={{ height: "22px" }} />}
                        <div className="text-left flex-1">
                          <p className="font-bold text-black text-sm">{c.country}</p>
                          <p className="text-[11px] text-black/40">Tourist Visa Guide for Indian Passport → Apply Now</p>
                        </div>
                        <span className="text-[#f5c800] text-xs font-black">View →</span>
                      </Link>
                    ))}
                    <div className="border-t border-black/5 mt-2 pt-2 px-3 pb-1">
                      <p className="text-[10px] text-black/25 font-medium">Press Enter to go to top result · Esc to close</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* A-Z Filter */}
            <div className="flex flex-wrap justify-center gap-1.5 mb-5">
              {alphabet.map(l => (
                <button
                  key={l}
                  onClick={() => { setSelectedLetter(l); setCurrentPage(1); setShowSuggestions(false); }}
                  aria-label={`Filter by ${l}`}
                  className={`w-8 h-8 md:w-9 md:h-9 rounded-xl text-xs font-black transition-all ${
                    selectedLetter === l
                      ? "bg-[#f5c800] text-black shadow-md scale-110"
                      : "text-black/40 hover:text-black bg-gray-100 hover:bg-gray-200"
                  }`}
                >{l}</button>
              ))}
            </div>
            <div className="flex items-center justify-between text-xs text-black/40 font-bold px-1">
              <span>{filteredCountries.length} destinations available for Indian passport holders</span>
              <span>2026 Embassy-Verified</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-xs font-bold text-black/50">
            {["✅ 98% Approval Rate", "📋 Embassy-Verified Docs", "⚡ 24hr Document Review", "🔒 100% Confidential"].map(b => (
              <span key={b} className="bg-white/80 border border-black/5 px-3 py-1.5 rounded-full">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────────────────────── */}
      <section style={{ background: "#f5c800" }} className="py-5 shadow-sm" aria-label="Key statistics">
        <div className="max-w-6xl mx-auto px-5">
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

      {/* ── BREADCRUMB (SEO schema) ──────────────────────────────────────────── */}
      <nav className="max-w-6xl mx-auto px-5 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs text-black/40 font-medium flex-wrap">
          <li><Link href="/" className="hover:text-[#f5c800] transition">Home</Link></li>
          <li className="text-black/20">›</li>
          <li><Link href="/visa" className="hover:text-[#f5c800] transition">Visa Services</Link></li>
          <li className="text-black/20">›</li>
          <li><Link href="/visa/india" className="hover:text-[#f5c800] transition">Tourist Visa from India</Link></li>
          <li className="text-black/20">›</li>
          <li className="text-black/60 font-bold">All Countries 2026</li>
        </ol>
      </nav>

      {/* ── VISA CATEGORIES ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 py-12" aria-labelledby="categories-heading">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-2">Browse by Region</p>
            <h2 id="categories-heading" className="text-3xl md:text-4xl font-black text-black">Popular Visa Categories — Indian Passport</h2>
          </div>
          <Link href="/visa/visa-guide" className="text-xs font-bold text-black/40 hover:text-[#f5c800] transition border border-black/10 px-4 py-2 rounded-xl hover:border-[#f5c800]/40">
            All visa types →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VISA_CATEGORIES.map((cat, i) => (
            <Link key={i} href={cat.href}
              className="group flex items-start gap-4 p-5 rounded-2xl border border-black/5 bg-gray-50 hover:bg-white hover:shadow-lg hover:border-[#f5c800]/30 transition-all duration-300"
            >
              <span className="text-3xl">{cat.icon}</span>
              <div>
                <h3 className="font-black text-black text-sm mb-1 group-hover:text-[#d4a800] transition">{cat.label}</h3>
                <p className="text-xs text-black/40 leading-relaxed">{cat.desc}</p>
              </div>
              <span className="ml-auto text-[#f5c800] font-black text-sm opacity-0 group-hover:opacity-100 transition">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── POPULAR COUNTRIES ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 pb-6" aria-label="Popular visa destinations">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-black uppercase tracking-widest text-black/30">🔥 Most Popular for Indians:</span>
          {POPULAR.map(({ name, emoji }) => {
            const c = countries.find(x => x.country === name);
            return (
              <Link key={name} href={`/visa/india/${createSlug(name)}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-black/60 hover:text-black border border-black/5 hover:border-[#f5c800]/40 transition-all bg-gray-50 hover:bg-white shadow-sm"
              >
                {c?.flag
                  ? <img src={c.flag} className="w-5 object-cover rounded-sm" style={{ height: "14px" }} alt="" />
                  : <span>{emoji}</span>}
                {name}
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── COUNTRIES GRID ──────────────────────────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-5 pb-20" id="all-countries" aria-labelledby="grid-heading">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 id="grid-heading" className="text-2xl md:text-3xl font-black text-black">
              {selectedLetter === "All" && !searchTerm
                ? "All Visa Destinations — India 2026"
                : searchTerm
                ? `Results for "${searchTerm}"`
                : `Countries Starting with "${selectedLetter}"`}
            </h2>
            <p className="text-black/30 text-sm mt-1">
              {filteredCountries.length} countries · Click any to view full visa requirements for Indian passport holders
            </p>
          </div>
          {(selectedLetter !== "All" || searchTerm) && (
            <button onClick={resetFilters}
              className="text-xs font-bold text-[#f5c800] border border-[#f5c800]/30 px-4 py-2 rounded-xl hover:bg-[#f5c800]/5 transition"
            >Show All</button>
          )}
        </div>

        {!isLoaded ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-black/5 animate-pulse bg-gray-100">
                <div className="h-28 bg-gray-200" /><div className="p-3"><div className="h-3 bg-gray-200 rounded mb-2" /><div className="h-6 bg-gray-200 rounded" /></div>
              </div>
            ))}
          </div>
        ) : currentItems.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {currentItems.map((c, i) => (
              <Link key={`${c.code}-${i}`} href={`/visa/india/${createSlug(c.country)}`}
                className="group rounded-2xl overflow-hidden border border-black/5 flex flex-col bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
                title={`${c.country} Tourist Visa — Indian Passport Guide 2026`}
              >
                <div className="relative h-28 overflow-hidden bg-gray-200">
                  <img src={c.flag} alt={`${c.country} tourist visa guide for Indian citizens 2026`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,0,0.2) 0%,transparent 60%)" }} />
                </div>
                <div className="p-3 flex flex-col flex-1 justify-between">
                  <h3 className="text-sm font-black text-black/80 leading-tight group-hover:text-black transition-colors mb-2">{c.country}</h3>
                  <div className="text-[10px] font-bold text-[#f5c800] bg-[#f5c800]/5 rounded-lg px-2 py-1 text-center group-hover:bg-[#f5c800] group-hover:text-black transition-all">
                    View Guide →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 rounded-3xl border border-black/5 bg-gray-50">
            <div className="text-6xl mb-4">🌍</div>
            <h3 className="text-xl font-black text-black">No destinations found</h3>
            <p className="text-black/40 mt-2 text-sm">Try a different search term or browse by letter above.</p>
            <button onClick={resetFilters} className="mt-5 px-6 py-3 bg-[#f5c800] rounded-xl font-black text-sm">Show All Countries</button>
          </div>
        )}

        {totalPages > 1 && (
          <nav className="mt-12 flex justify-center items-center gap-3" aria-label="Country pagination">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}
              className="px-6 py-3 rounded-xl font-bold text-black/60 disabled:opacity-30 disabled:pointer-events-none hover:text-black transition border border-black/10 hover:border-[#f5c800]/40"
            >← Prev</button>
            <div className="flex gap-1.5">
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => i + 1).map(n => (
                <button key={n} onClick={() => setCurrentPage(n)} aria-label={`Page ${n}`} aria-current={currentPage === n ? "page" : undefined}
                  className={`w-10 h-10 rounded-xl font-black text-sm transition-all ${currentPage === n ? "bg-[#f5c800] text-black shadow-md" : "text-black/40 hover:text-black bg-gray-50 border border-black/5"}`}
                >{n}</button>
              ))}
              {totalPages > 7 && <span className="w-10 h-10 flex items-center justify-center text-black/30">…</span>}
            </div>
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}
              className="px-6 py-3 rounded-xl font-bold text-black/60 disabled:opacity-30 disabled:pointer-events-none hover:text-black transition border border-black/10 hover:border-[#f5c800]/40"
            >Next →</button>
          </nav>
        )}
      </main>

      {/* ── VISA-FREE & e-VISA SECTION ───────────────────────────────────────── */}
      {/* Targets: "visa free countries for Indian passport 2026", "e-visa India" */}
      <section className="border-t border-black/5 py-20 bg-gray-50" aria-labelledby="visafree-heading">
        <div className="max-w-6xl mx-auto px-5">
          {/* Tab navigation */}
          <div className="flex gap-3 mb-10 flex-wrap">
            {[
              { id: "visafree", label: "🌴 Visa-Free Countries" },
              { id: "evisa",   label: "💻 e-Visa Countries" },
            ].map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-black text-sm transition-all ${activeTab === tab.id ? "bg-[#f5c800] text-black shadow-md" : "bg-white border border-black/10 text-black/50 hover:text-black"}`}
              >{tab.label}</button>
            ))}
          </div>

          {activeTab === "visafree" && (
            <>
              <div className="mb-8">
                <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-2">No Visa Required</p>
                <h2 id="visafree-heading" className="text-3xl md:text-4xl font-black text-black">
                  Visa-Free &amp; Visa-on-Arrival Countries<br />for Indian Passport 2026
                </h2>
                <p className="text-black/40 text-sm mt-3 max-w-2xl">
                  Indian passport holders can visit <strong className="text-black/70">60+ countries</strong> without a prior visa — either visa-free, visa on arrival, or with a quick e-Visa. Updated for 2026.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {VISA_FREE_COUNTRIES.map((c, i) => (
                  <Link key={i} href={`/visa/india/${createSlug(c.name)}`}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-black/5 hover:border-[#f5c800]/40 hover:shadow-lg transition-all"
                  >
                    <span className="text-3xl">{c.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-black text-sm">{c.name}</p>
                      <p className="text-[11px] text-[#f5c800] font-bold">{c.type}</p>
                      <p className="text-[11px] text-black/35">{c.days}</p>
                    </div>
                    <span className="text-[#f5c800] font-black text-xs opacity-0 group-hover:opacity-100 transition shrink-0">→</span>
                  </Link>
                ))}
              </div>
              <p className="text-xs text-black/30 mt-6">
                * Visa policies change frequently. Always verify at the official embassy or{" "}
                <Link href="/visa/visa-guide" className="text-[#f5c800] font-bold hover:underline">check our visa guide</Link> before travelling.
              </p>
            </>
          )}

          {activeTab === "evisa" && (
            <>
              <div className="mb-8">
                <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-2">Apply Online, Skip the Embassy</p>
                <h2 className="text-3xl md:text-4xl font-black text-black">
                  e-Visa Countries for Indian Passport 2026
                </h2>
                <p className="text-black/40 text-sm mt-3 max-w-2xl">
                  These countries offer fully online visa applications for Indian citizens — no embassy visit, no appointment, often approved within hours.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {EVISA_DESTINATIONS.map((c, i) => (
                  <Link key={i}
                    href={`/visa/e-visa/indian-national-e-visa-requirements-for-${c.slug}`}
                    className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-black/5 hover:border-[#f5c800]/40 hover:shadow-lg transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#f5c800]/10 flex items-center justify-center text-xl shrink-0">💻</div>
                    <div className="flex-1">
                      <p className="font-black text-black text-sm group-hover:text-[#d4a800] transition">{c.name} e-Visa</p>
                      <p className="text-[11px] text-black/40 mt-0.5">{c.note}</p>
                      <p className="text-[11px] text-[#f5c800] font-bold mt-1 opacity-0 group-hover:opacity-100 transition">View requirements →</p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── DOCUMENT CHECKLIST ──────────────────────────────────────────────── */}
      {/* Targets: "visa documents required from India", "visa checklist Indian passport" */}
      <section className="py-20 max-w-6xl mx-auto px-5" aria-labelledby="checklist-heading">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-2">What You'll Need</p>
            <h2 id="checklist-heading" className="text-3xl md:text-4xl font-black text-black">
              Tourist Visa Document Checklist<br />for Indian Passport Holders
            </h2>
          </div>
          <Link href="/travel-resources/visa-checklist-generator"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#f5c800] rounded-xl font-black text-sm text-black hover:bg-yellow-400 transition shadow-md"
          >
            🛠️ Generate My Checklist
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {DOCUMENT_CHECKLIST.map((doc, i) => (
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
          <div>
            <p className="font-black text-black text-sm">Country-specific requirements differ</p>
            <p className="text-xs text-black/50 mt-1">
              The checklist above is a general baseline. Each embassy has specific formats, photo sizes, and financial thresholds.
              Use our <Link href="/travel-resources/visa-checklist-generator" className="text-[#f5c800] font-bold hover:underline">country-specific checklist generator</Link> for exact requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ── BANK BALANCE TABLE ──────────────────────────────────────────────── */}
      {/* Targets: "bank balance required for visa from India", "how much money for USA visa India" */}
      <section className="border-t border-black/5 py-20 bg-gray-50" aria-labelledby="bankbalance-heading">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-10">
            <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-2">Financial Requirements</p>
            <h2 id="bankbalance-heading" className="text-3xl md:text-4xl font-black text-black">
              Bank Balance Required for Tourist Visa<br />from India — 2026 Guide
            </h2>
            <p className="text-black/40 text-sm mt-3">
              These are approximate figures. Our consultants will review your financial profile and advise on strengthening your application.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-black/5 shadow-sm">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr style={{ background: "#f5c800" }}>
                  <th className="text-left px-5 py-4 font-black text-black text-xs uppercase tracking-wider">Country</th>
                  <th className="text-left px-5 py-4 font-black text-black text-xs uppercase tracking-wider">Min. Balance</th>
                  <th className="text-left px-5 py-4 font-black text-black text-xs uppercase tracking-wider">In Rupees (approx)</th>
                  <th className="text-left px-5 py-4 font-black text-black text-xs uppercase tracking-wider hidden md:table-cell">Key Notes</th>
                  <th className="px-5 py-4" />
                </tr>
              </thead>
              <tbody>
                {BANK_BALANCE_TABLE.map((row, i) => (
                  <tr key={i} className={`border-t border-black/5 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} hover:bg-[#f5c800]/5 transition-colors`}>
                    <td className="px-5 py-4 font-black text-black/80">{row.country}</td>
                    <td className="px-5 py-4 font-bold text-black/60">{row.amount}</td>
                    <td className="px-5 py-4 font-bold text-[#d4a800]">{row.inr}</td>
                    <td className="px-5 py-4 text-black/40 text-xs hidden md:table-cell">{row.notes}</td>
                    <td className="px-5 py-4">
                      <Link href={`/visa/india/${createSlug(row.country.split(" ")[0].toLowerCase())}`}
                        className="text-[10px] font-black text-[#f5c800] whitespace-nowrap hover:underline"
                      >Full guide →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PROCESSING TIME SECTION ─────────────────────────────────────────── */}
      {/* Internal links → /travel-resources/visa-processing-time-tracker/[dest]-national-visa-processing-time-for-indian-[type] */}
      <section className="py-20 max-w-6xl mx-auto px-5" aria-labelledby="processing-heading">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-2">How Long Does It Take?</p>
            <h2 id="processing-heading" className="text-3xl md:text-4xl font-black text-black">
              Visa Processing Time from India — 2026
            </h2>
          </div>
          <Link href="/travel-resources/visa-processing-time-tracker"
            className="text-xs font-bold text-black/40 hover:text-[#f5c800] transition border border-black/10 px-4 py-2 rounded-xl hover:border-[#f5c800]/40"
          >Full tracker →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROCESSING_TIME_DATA.map((item, i) => (
            <Link key={i}
              href={`/travel-resources/visa-processing-time-tracker/${item.dest}-national-visa-processing-time-for-indian-${item.type}`}
              className="group p-5 rounded-2xl bg-white border border-black/5 hover:border-[#f5c800]/40 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="font-black text-black text-sm">{item.destName}</p>
                <span className="text-[10px] font-black bg-[#f5c800]/10 text-[#d4a800] px-2 py-1 rounded-lg uppercase">{item.type}</span>
              </div>
              <p className="text-2xl font-black text-black mb-1">{item.days}</p>
              <p className="text-xs text-black/35">{item.note}</p>
              <p className="text-[11px] text-[#f5c800] font-bold mt-3 opacity-0 group-hover:opacity-100 transition">Check details →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── VISA REJECTION GUIDE ────────────────────────────────────────────── */}
      {/* Internal links → /visa-rejection/indian-visa-rejection-rate-for-[dest]-[type] */}
      <section className="border-t border-black/5 py-20 bg-gray-50" aria-labelledby="rejection-heading">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-10">
            <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-2">Avoid Common Mistakes</p>
            <h2 id="rejection-heading" className="text-3xl md:text-4xl font-black text-black">
              Visa Rejection Rates for Indian Applicants<br />&amp; How to Avoid Rejection
            </h2>
            <p className="text-black/40 text-sm mt-3 max-w-2xl">
              India has one of the highest tourist visa rejection rates globally for certain destinations. Understanding why helps you avoid the same mistakes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REJECTION_GUIDES.map((item, i) => (
              <Link key={i}
                href={`/visa-rejection/indian-visa-rejection-rate-for-${item.dest}-${item.type}`}
                className="group p-5 rounded-2xl bg-white border border-black/5 hover:border-red-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="font-black text-black text-sm">{item.destName} — {item.type}</p>
                  <span className="text-xs font-black bg-red-50 text-red-400 px-2 py-1 rounded-lg">{item.rate}</span>
                </div>
                <p className="text-xs text-black/40 leading-relaxed">{item.tip}</p>
                <p className="text-[11px] text-[#f5c800] font-bold mt-3 opacity-0 group-hover:opacity-100 transition">Learn how to avoid →</p>
              </Link>
            ))}
            <Link href="/visa-rejection"
              className="group p-5 rounded-2xl border-2 border-dashed border-black/10 hover:border-[#f5c800]/40 hover:shadow-lg transition-all flex flex-col items-center justify-center text-center"
            >
              <span className="text-3xl mb-3">📊</span>
              <p className="font-black text-black/60 text-sm">View All Rejection Rate Guides</p>
              <p className="text-xs text-black/30 mt-1">200+ country-specific reports</p>
              <p className="text-[11px] text-[#f5c800] font-bold mt-3 opacity-0 group-hover:opacity-100 transition">Browse all →</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────────── */}
      <section className="border-t border-black/5 py-24" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-3">Why 1,00,000+ Indians Trust Us</p>
            <h2 id="why-heading" className="text-4xl md:text-5xl font-black text-black mb-4">
              India's Most Trusted<br />Tourist Visa Consultancy
            </h2>
            <p className="text-black/40 max-w-xl mx-auto text-sm leading-relaxed">
              We don't just tell you what documents you need — we verify them, format them, and ensure your application is embassy-ready.
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
      <section className="py-20 bg-gray-50 border-t border-black/5" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-3">Real Stories</p>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-black text-black">Approved by Indian Travelers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-7 rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-4">{"★".repeat(t.stars).split("").map((s, j) => <span key={j} className="text-[#f5c800] text-sm">{s}</span>)}</div>
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
        </div>
      </section>

      {/* ── SEO INTERNAL LINK SECTION ─────────────────────────────────────────── */}
      <section className="border-t border-black/5 py-20" aria-labelledby="guides-heading">
        <div className="max-w-6xl mx-auto px-5">
          <h2 id="guides-heading" className="text-2xl md:text-3xl font-black text-black mb-3">
            Popular Tourist Visa Guides — Indian Passport 2026
          </h2>
          <p className="text-black/40 text-sm mb-10">
            Complete visa guides with required documents, embassy fees, bank balance requirements &amp; expert tips for Indian citizens
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SEO_LINKS.map((link, i) => (
              <Link key={i} href={`/visa/india/${link.slug}`}
                className="flex items-start gap-3 p-4 rounded-xl border border-black/5 bg-gray-50 hover:bg-white hover:border-[#f5c800]/30 hover:shadow-md transition-all group"
                title={`${link.name} — Complete guide for Indian passport holders`}
              >
                <span className="text-[#f5c800] font-black text-lg mt-0.5">→</span>
                <div>
                  <p className="font-bold text-black/80 text-sm group-hover:text-black transition">{link.name}</p>
                  <p className="text-xs text-black/35 mt-0.5">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHOLARSHIP LINKS ────────────────────────────────────────────────── */}
      {/* Internal links → /scholarships/[slug] */}
      <section className="border-t border-black/5 py-16 bg-gray-50" aria-labelledby="scholarship-heading">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-2">For Students</p>
              <h2 id="scholarship-heading" className="text-2xl md:text-3xl font-black text-black">
                Scholarships &amp; Study Abroad for Indian Students
              </h2>
            </div>
            <Link href="/scholarships" className="text-xs font-bold text-black/40 hover:text-[#f5c800] transition border border-black/10 px-4 py-2 rounded-xl hover:border-[#f5c800]/40">
              All scholarships →
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {SCHOLARSHIP_COUNTRIES.map(c => (
              <Link key={c.slug} href={`/scholarships/${c.slug}`}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-black/5 bg-white hover:border-[#f5c800]/40 hover:shadow-md transition-all text-sm font-bold text-black/60 hover:text-black"
              >
                🎓 Scholarships in {c.name}
              </Link>
            ))}
            <Link href="/study-abroad/student-visa"
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[#f5c800]/30 bg-[#f5c800]/5 hover:bg-[#f5c800]/10 transition-all text-sm font-bold text-[#d4a800]"
            >
              📚 Student Visa Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* ── DUBAI RESIDENTS SECTION ──────────────────────────────────────────── */}
      {/* Internal link → /visa/dubai-residents */}
      <section className="py-16 max-w-6xl mx-auto px-5" aria-label="Visa guide for Indians living in Dubai">
        <div className="flex items-start gap-6 p-8 rounded-3xl border border-[#f5c800]/20 bg-gradient-to-r from-[#f5c800]/5 to-white flex-wrap md:flex-nowrap">
          <div className="text-5xl">🇦🇪</div>
          <div className="flex-1">
            <p className="text-[#f5c800] text-xs font-black uppercase tracking-widest mb-2">Indians Living in UAE</p>
            <h2 className="text-2xl font-black text-black mb-2">
              Tourist Visa Guides for Dubai &amp; UAE Residents
            </h2>
            <p className="text-black/50 text-sm leading-relaxed mb-5">
              Are you an Indian resident in Dubai, Abu Dhabi, or Sharjah? Our UAE-resident-specific visa guides cover applying for USA, UK, Schengen, and 100+ other visas from the UAE — with requirements tailored for Indian passport holders based in the Emirates.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/visa/dubai-residents"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#f5c800] rounded-xl font-black text-sm text-black hover:bg-yellow-400 transition"
              >Browse Dubai Resident Visa Guides →</Link>
              <Link href="/contact/travel-agency-dubai"
                className="inline-flex items-center gap-2 px-5 py-3 border border-black/10 rounded-xl font-bold text-sm text-black/50 hover:text-black hover:border-[#f5c800]/40 transition"
              >📍 Dubai Office</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO ARTICLE + FAQ ─────────────────────────────────────────────────── */}
      <section className="border-t border-black/5 py-20 bg-gray-50" aria-label="About tourist visa from India">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-2xl font-black text-black mb-8">Tourist Visa Consultancy in India — Complete Guide 2026</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-black/50 leading-relaxed">
            <div className="space-y-4">
              <p>
                We are India's leading tourist visa consultancy, helping lakhs of Indian travelers secure visas for{" "}
                <strong className="text-black/80">USA, UK, Canada, Schengen, Japan, Australia</strong> and 200+ destinations worldwide.
                Our embassy-certified consultants prepare every document to the exact specification required by each embassy.
              </p>
              <p>
                From <strong className="text-black/80">bank statement formatting</strong> and NOC letter drafting to photo compliance checks and cover letter writing — we handle everything so your visa application is complete, accurate, and embassy-ready.
              </p>
              <p>
                For <strong className="text-black/80">Indian residents in Dubai and the UAE</strong>, we also offer tailored visa consultancy services from our Dubai office.
                Visit our <Link href="/visa/dubai-residents" className="text-[#f5c800] font-bold hover:underline">Dubai residents visa hub</Link> for UAE-specific guides.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Our 2026 visa guides are updated monthly based on official embassy circulars and VFS Global announcements.
                We track policy changes — so you don't have to. Every checklist, fee, and processing timeline is verified by our team before publication.
              </p>
              <p>
                Whether you're a first-time traveler or a frequent flyer from India, our expert consultants provide personalised guidance — from document preparation to application submission and passport collection at{" "}
                <strong className="text-black/80">VFS Global centres</strong> across India.
              </p>
              <p>
                Worried about rejection? Read our in-depth{" "}
                <Link href="/visa-rejection" className="text-[#f5c800] font-bold hover:underline">visa rejection rate guides</Link>{" "}
                to understand exactly what causes rejections and how to avoid them.
              </p>
            </div>
          </div>

          {/* Internal nav */}
          <div className="mt-10 pt-8 border-t border-black/5">
            <p className="text-xs text-black/25 font-bold uppercase tracking-widest mb-4">More Visa Guides</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Tourist Visa",       href: "/visa/india" },
                { label: "Business Visa",      href: "/visa/visa-guide" },
                { label: "Student Visa",       href: "/study-abroad/student-visa" },
                { label: "Schengen Visa",      href: "/schengen-visa" },
                { label: "e-Visa Guide",       href: "/visa/e-visa" },
                { label: "Visa Rejection",     href: "/visa-rejection" },
                { label: "Processing Times",   href: "/travel-resources/visa-processing-time-tracker" },
                { label: "Checklist Generator",href: "/travel-resources/visa-checklist-generator" },
                { label: "USA Visa",           href: "/visa/india/united-states" },
                { label: "UK Visa",            href: "/visa/india/united-kingdom" },
                { label: "Canada Visa",        href: "/visa/india/canada" },
                { label: "Dubai Residents",    href: "/visa/dubai-residents" },
                { label: "Scholarships",       href: "/scholarships" },
              ].map(link => (
                <Link key={link.label} href={link.href}
                  className="text-xs font-bold text-black/40 hover:text-[#f5c800] transition border border-black/10 px-3 py-1.5 rounded-lg hover:border-[#f5c800]/30 bg-white"
                >{link.label}</Link>
              ))}
            </div>
          </div>

          {/* FAQ — structured data candidate */}
          <div className="mt-8 pt-8 border-t border-black/5">
            <p className="text-xs text-black/25 font-bold uppercase tracking-widest mb-4">Frequently Asked Questions</p>
            <div className="space-y-4 text-sm">
              {[
                {
                  q: "Which countries can Indian citizens visit without a visa in 2026?",
                  a: "Indian passport holders enjoy visa-free or visa-on-arrival access to 60+ countries including Thailand, Maldives, Indonesia, Nepal, Sri Lanka, Mauritius, Qatar, and more. Use our country search above to check requirements for any destination.",
                },
                {
                  q: "How much bank balance is required for a tourist visa from India?",
                  a: "Most embassies expect ₹1.5–3 lakh for solo travel with 3–6 months of stable history. Schengen visas typically require €3,000–5,000 equivalent. USA and UK require strong financial documentation. Our consultants advise based on your specific destination.",
                },
                {
                  q: "What is the photo size for a tourist visa from India?",
                  a: "Most embassies require 35×45mm on a plain white background, ICAO compliant, taken within 3 months. Schengen and UK visas require 35×45mm; USA DS-160 accepts 2×2 inch (51×51mm). Check our individual country guides for exact specifications.",
                },
                {
                  q: "How long does visa processing take from India?",
                  a: "Processing times vary: Schengen typically 15 working days, UK 3 weeks, USA 2–6 months (due to interview wait times), Canada 4–8 weeks, Japan 4–7 working days. Apply well in advance and always book refundable flights.",
                },
                {
                  q: "Can Indians apply for a tourist visa if they live in Dubai or the UAE?",
                  a: "Yes. Indians residing in the UAE can apply for tourist visas to most countries from Dubai. Some embassies require UAE residence visa holders to apply in their home country for certain destinations. Visit our Dubai Residents Visa Guide for country-specific guidance.",
                },
                {
                  q: "Why was my tourist visa from India rejected?",
                  a: "Common reasons include insufficient bank balance, weak ties to India, incomplete documents, incorrect photo format, and inconsistent travel history. Our visa rejection guides break down rejection rates by country and type so you can fix the issues before reapplying.",
                },
                {
                  q: "What is an e-Visa and which countries offer it for Indian passport holders?",
                  a: "An e-Visa is an online visa issued without visiting an embassy. Countries like Sri Lanka, Turkey, Azerbaijan, Kenya, Egypt, and Cambodia offer e-Visas for Indian citizens. Applications typically take minutes to hours and cost $20–$80. See our e-Visa guide for a full list.",
                },
              ].map((faq, i) => (
                <details key={i} className="border border-black/5 rounded-xl overflow-hidden group bg-white">
                  <summary className="px-5 py-4 cursor-pointer font-bold text-black/80 text-sm flex items-center justify-between list-none hover:bg-gray-50">
                    {faq.q}
                    <span className="text-[#f5c800] font-black group-open:rotate-45 transition-transform inline-block shrink-0 ml-3">+</span>
                  </summary>
                  <div className="px-5 pb-4 pt-2 text-sm text-black/50 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────────────────────────────────── */}
      <section className="py-20 max-w-6xl mx-auto px-5" aria-label="Contact visa consultancy">
        <div className="rounded-3xl p-10 md:p-16 text-center" style={{ background: "#f5c800" }}>
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
            Get Your Tourist Visa Approved — Guaranteed
          </h2>
          <p className="text-black/60 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Speak with a visa expert today. We'll review your profile, identify any weak points, and give you a clear action plan — free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-black text-sm hover:bg-black/80 transition shadow-xl"
            >📞 Book Free Consultation</Link>
            <Link href="/our-services/visa-services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-black text-sm hover:bg-gray-50 transition shadow-md border border-black/10"
            >View All Visa Services →</Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs font-bold text-black/50">
            <Link href="/contact/travel-agency-bangladesh" className="hover:text-black transition">📍 Bangladesh Office</Link>
            <Link href="/contact/travel-agency-dubai"      className="hover:text-black transition">📍 Dubai Office</Link>
            <Link href="/contact/travel-agency-armenia"    className="hover:text-black transition">📍 Armenia Office</Link>
            <Link href="/contact/travel-agency-georgia"    className="hover:text-black transition">📍 Georgia Office</Link>
          </div>
        </div>
      </section>

    </div>
  );
}