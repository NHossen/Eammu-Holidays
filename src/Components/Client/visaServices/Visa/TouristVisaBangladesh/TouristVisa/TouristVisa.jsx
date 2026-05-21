"use client";
import { useState, useEffect } from "react";
import countries from "@/app/data/countries.json";
import Link from "next/link";
import { createSlug } from "@/app/lib/utils";
import VisaSearch from "./VisaSearch/VisaSearch";
import { useRouter } from 'next/navigation';
// ─── DATA ─────────────────────────────────────────────────────────────────────

const POPULAR = [
  "Japan", "Canada", "United States", "United Kingdom", "Australia",
  "Germany", "France", "Italy", "Malaysia", "Thailand"
];

const WHY_US = [
  {
    icon: "🛡️",
    title: "98% tourist visa approval rate",
    desc: "Our consultants have helped 12,000+ Bangladeshi travelers get approved. We know exactly what embassies in 2026 are looking for — from bank statement formats to cover letter language.",
    linkHref: "/testimonials",
    linkLabel: "Read client testimonials",
  },
  {
    icon: "📋",
    title: "Embassy-accurate documentation",
    desc: "Every visa checklist is verified against official embassy circulars and VFS Global announcements, updated monthly for 2026 protocols. Never submit an incomplete application again.",
    linkHref: "/travel-resources/visa-checklist-generator",
    linkLabel: "Generate your free checklist",
  },
  {
    icon: "⚡",
    title: "24-hour document review",
    desc: "We eliminate back-and-forth delays before submission. Your bank statement, NOC, and cover letter reviewed and corrected within one business day — guaranteed.",
    linkHref: "/travel-resources/visa-processing-time-tracker",
    linkLabel: "Track processing times",
  },
  {
    icon: "🌍",
    title: "200+ visa destinations",
    desc: "From Schengen to Southeast Asia — tourist, student, work, and medical visas from Bangladesh covered by expert consultants who specialize in Bangladeshi applicant profiles.",
    linkHref: "/visa",
    linkLabel: "Browse all destinations",
  },
];

const QUICK_LINKS = [
  { label: "Schengen visa 2026",         href: "/schengen-visa",                                           icon: "🇪🇺" },
  { label: "Dubai tourist visa",          href: "/our-services/visa/dubai-visa-application",               icon: "🇦🇪" },
  { label: "E-visa destinations",         href: "/visa/e-visa",                                             icon: "⚡" },
  { label: "Dubai residents guide",       href: "/visa/dubai-residents",                                    icon: "🏙️" },
  { label: "India visa",                  href: "/visa/india",                                              icon: "🇮🇳" },
  { label: "Student visa",                href: "/our-services/visa-services/student-visa-from-bangladesh", icon: "🎓" },
  { label: "Visa rejection rates",        href: "/visa-rejection",                                          icon: "📊" },
  { label: "Visa checklist generator",    href: "/travel-resources/visa-checklist-generator",               icon: "✓" },
];

const STATS = [
  { value: "12,000+", label: "Passports processed" },
  { value: "98%",     label: "Approval rate" },
  { value: "200+",    label: "Countries covered" },
  { value: "24 hrs",  label: "Document review" },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Pick your destination",
    desc: "Browse 200+ tourist visa guides or search your country. Each page lists 2026 requirements specific to Bangladeshi passport holders.",
    href: "/visa",
    cta: "Browse destinations",
  },
  {
    step: "02",
    title: "Generate your checklist",
    desc: "Our free checklist tool gives you a country-specific document list verified against official embassy circulars — no guesswork.",
    href: "/travel-resources/visa-checklist-generator",
    cta: "Get free checklist",
  },
  {
    step: "03",
    title: "24-hr document review",
    desc: "Submit your bank statement, NOC, and cover letter. Our experts fix every issue before embassy submission — within one business day.",
    href: "/contact/travel-agency-bangladesh",
    cta: "Talk to a consultant",
  },
  {
    step: "04",
    title: "VFS / embassy submission",
    desc: "We guide you through the VFS Global or embassy appointment and submission process. Everything is verified on the day.",
    href: "/travel-resources/visa-processing-time-tracker",
    cta: "Check processing times",
  },
  {
    step: "05",
    title: "Travel with confidence",
    desc: "Collect your approved visa. Our 98% approval rate means you can book flights and hotels with confidence while waiting.",
    href: "/testimonials",
    cta: "See success stories",
  },
];

const VISA_CATEGORIES = [
  {
    icon: "✈️",
    title: "Tourist Visa",
    desc: "Leisure travel, sightseeing, visiting family. USA B1/B2, UK Standard Visitor, Schengen Type C, and more.",
    href: "/visa",
    tag: "Most popular",
  },
  {
    icon: "🎓",
    title: "Student Visa",
    desc: "Study abroad from Bangladesh. UK, USA, Canada, Germany, and Malaysia student visas with university offer support.",
    href: "/our-services/visa-services/student-visa-from-bangladesh",
    tag: "High demand",
  },
  {
    icon: "💼",
    title: "Work Visa",
    desc: "Employment visas for Bangladesh professionals. Europe, Middle East, and Southeast Asia work permits.",
    href: "/our-services/visa-services/work-visa-from-bangladesh",
    tag: null,
  },
  {
    icon: "⚡",
    title: "E-Visa",
    desc: "Fast online visa processing for Turkey, India, Sri Lanka, Kenya, Azerbaijan & 40+ more destinations.",
    href: "/visa/e-visa",
    tag: "Fastest",
  },
  {
    icon: "🏥",
    title: "Medical Visa",
    desc: "Medical treatment visas for India, Thailand, Singapore, and Malaysia with hospital invitation letter support.",
    href: "/visa",
    tag: null,
  },
  {
    icon: "🏙️",
    title: "Dubai Residents",
    desc: "Special visa guide for Bangladeshis residing in Dubai applying for third-country tourist visas.",
    href: "/visa/dubai-residents",
    tag: "New 2026",
  },
];

const TOP_DESTINATIONS = [
  {
    country: "United States",
    visaType: "B1/B2 Tourist Visa",
    processingTime: "2–4 weeks",
    difficulty: "Hard",
    difficultyColor: "red",
    href: "/visa/united-states-visa",
    tips: "Strong bank statements & employment NOC are critical for Bangladeshi applicants.",
  },
  {
    country: "United Kingdom",
    visaType: "Standard Visitor Visa",
    processingTime: "3–8 weeks",
    difficulty: "Hard",
    difficultyColor: "red",
    href: "/visa/united-kingdom-visa",
    tips: "UKVI requires detailed financial history. 6-month bank statements recommended.",
  },
  {
    country: "Schengen Area",
    visaType: "Schengen Type C",
    processingTime: "15–30 days",
    difficulty: "Medium",
    difficultyColor: "amber",
    href: "/schengen-visa",
    tips: "Apply to the country where you spend most nights. Travel insurance is mandatory.",
  },
  {
    country: "Canada",
    visaType: "Temporary Resident Visa",
    processingTime: "4–12 weeks",
    difficulty: "Hard",
    difficultyColor: "red",
    href: "/visa/canada-visa",
    tips: "Ties-to-home documentation (property, family, employment) is the deciding factor.",
  },
  {
    country: "Japan",
    visaType: "Tourist Visa",
    processingTime: "5–7 business days",
    difficulty: "Easy",
    difficultyColor: "green",
    href: "/visa/japan-visa",
    tips: "One of the fastest processing times. Day-by-day itinerary required.",
  },
  {
    country: "Australia",
    visaType: "Visitor Visa (600)",
    processingTime: "4–8 weeks",
    difficulty: "Medium",
    difficultyColor: "amber",
    href: "/visa/australia-visa",
    tips: "Online application via ImmiAccount. Funds evidence and purpose of visit are key.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What tourist visas can Eammu Holidays get from Bangladesh?",
    a: "Eammu Holidays processes tourist visas for 200+ countries from Bangladesh, including USA B1/B2, UK Standard Visitor Visa, Canada Temporary Resident Visa, all 29 Schengen countries, Japan, Australia, Malaysia, Thailand, Dubai, and more. Our consultants specialize in embassy requirements for Bangladeshi passport holders.",
  },
  {
    q: "What is the tourist visa approval rate for Bangladeshi applicants at Eammu Holidays?",
    a: "Eammu Holidays maintains a 98% tourist visa approval rate for Bangladeshi applicants. We have processed 12,000+ passports. Our success comes from embassy-accurate documentation, 24-hour document review, and deep expertise in what each embassy requires from Bangladeshi applicants in 2026.",
  },
  {
    q: "What documents are needed for a tourist visa from Bangladesh?",
    a: (
      <>
        Common tourist visa documents from Bangladesh include: valid passport (min. 6 months), bank statements (3–6 months), employment letter or NOC, income tax returns, application form, passport photos, travel itinerary, and hotel bookings. Requirements vary by country.{" "}
        <Link href="/travel-resources/visa-checklist-generator" className="text-green-700 font-semibold underline">
          Use our free visa checklist generator
        </Link>{" "}
        for a country-specific document list.
      </>
    ),
    aText: "Common tourist visa documents from Bangladesh include: valid passport (min. 6 months), bank statements (3–6 months), employment letter or NOC, income tax returns, application form, passport photos, travel itinerary, and hotel bookings. Requirements vary by country. Use our free visa checklist generator at eammu.com/travel-resources/visa-checklist-generator.",
  },
  {
    q: "How long does tourist visa processing take from Bangladesh?",
    a: (
      <>
        Processing times vary: USA B1/B2 — 2–4 weeks after interview; UK Visitor Visa — 3–8 weeks; Schengen — 15–30 days; Canada — 4–12 weeks; Japan — 5–7 business days; Malaysia e-Visa — 3–5 days. Check our{" "}
        <Link href="/travel-resources/visa-processing-time-tracker" className="text-green-700 font-semibold underline">
          live VFS processing time tracker
        </Link>{" "}
        for current data.
      </>
    ),
    aText: "Processing times: USA B1/B2 — 2–4 weeks; UK — 3–8 weeks; Schengen — 15–30 days; Canada — 4–12 weeks; Japan — 5–7 business days; Malaysia e-Visa — 3–5 days.",
  },
  {
    q: "What is a Schengen visa and can Bangladeshi citizens apply?",
    a: (
      <>
        A Schengen visa lets you travel across 29 European countries with one visa — France, Germany, Italy, Spain, Netherlands, and more. Yes, Bangladeshi citizens can apply. It requires strong financial proof, a day-by-day itinerary, hotel bookings, and travel insurance.{" "}
        <Link href="/schengen-visa" className="text-green-700 font-semibold underline">
          See our Schengen visa guide for Bangladeshi applicants →
        </Link>
      </>
    ),
    aText: "A Schengen visa lets Bangladeshi citizens travel across 29 European countries with one visa. Requirements include financial proof, travel itinerary, hotel bookings, and travel insurance.",
  },
  {
    q: "Can I apply for a USA tourist visa from Bangladesh without a consultant?",
    a: (
      <>
        Yes, but the USA B1/B2 visa has a 40–60% refusal rate for Bangladeshi applicants without proper document preparation. Common rejection reasons: insufficient bank balance presentation, weak ties-to-home documentation, and inconsistent cover letters. See our{" "}
        <Link href="/visa-rejection" className="text-green-700 font-semibold underline">
          visa rejection rates guide for Bangladeshi applicants
        </Link>{" "}
        to understand your risk before applying alone.
      </>
    ),
    aText: "Yes, but the USA B1/B2 visa has a 40–60% refusal rate for Bangladeshi applicants without proper preparation. Common rejection reasons include insufficient bank balance presentation, weak ties-to-home documentation, and inconsistent cover letters.",
  },
  {
    q: "Does Eammu Holidays offer student and work visa services from Bangladesh?",
    a: (
      <>
        Yes. Beyond tourist visas, Eammu Holidays handles{" "}
        <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-green-700 font-semibold underline">
          student visas from Bangladesh
        </Link>
        ,{" "}
        <Link href="/our-services/visa-services/work-visa-from-bangladesh" className="text-green-700 font-semibold underline">
          work visas
        </Link>
        ,{" "}
        <Link href="/visa/e-visa" className="text-green-700 font-semibold underline">
          e-visa applications
        </Link>
        , medical visas, and{" "}
        <Link href="/scholarships" className="text-green-700 font-semibold underline">
          scholarship guidance
        </Link>
        . Contact our{" "}
        <Link href="/contact/travel-agency-bangladesh" className="text-green-700 font-semibold underline">
          Cumilla office
        </Link>{" "}
        or{" "}
        <Link href="/contact/travel-agency-dubai" className="text-green-700 font-semibold underline">
          Dubai branch
        </Link>
        .
      </>
    ),
    aText: "Yes. Eammu Holidays handles student visas, work visas, e-visas, medical visas, and scholarship guidance from Bangladesh. Contact our Cumilla or Dubai offices.",
  },
  {
    q: "What is the minimum bank balance required for a tourist visa from Bangladesh?",
    a: "Minimum bank balance requirements vary by country: USA requires demonstrating sufficient funds for the entire trip (no fixed minimum, but $3,000–$10,000 USD equivalent is typical); Schengen requires approx. €50–€100/day; UK requires enough to cover accommodation, transport, and daily expenses; Canada requires CAD 5,000–$10,000. Eammu Holidays reviews your bank statements to ensure they are formatted and presented to maximize approval chances.",
  },
];

const TESTIMONIALS = [
  {
    name: "Md. Rakibul Islam",
    destination: "USA B1/B2 Visa",
    text: "Got my USA visa approved on first attempt. Eammu prepared every document perfectly — my bank statements, cover letter, even my interview preparation. Highly recommended.",
    rating: 5,
  },
  {
    name: "Fariha Akter",
    destination: "Schengen Visa (France)",
    text: "Applied for France Schengen through Eammu. They guided me through every step and I got my visa in 18 days. Perfect service for first-time applicants.",
    rating: 5,
  },
  {
    name: "Ariful Haque",
    destination: "UK Standard Visitor Visa",
    text: "UK visa is tough for Bangladeshis. Eammu's document preparation was thorough — they caught issues I would have missed. Approved in 5 weeks.",
    rating: 5,
  },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function TouristVisa() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const itemsPerPage = 12;
  const router = useRouter();
  const slides = [
    { src: "/the-love-island.webp",                  alt: "Tourist visa from Bangladesh — international travel destinations 2026" },
    { src: "/top-travel-agency-bangladesh.webp",     alt: "Top travel agency in Bangladesh — Eammu Holidays visa consultancy" },
    { src: "/travel_banner_second_part_one.webp",    alt: "Tourist visa consultancy Bangladesh 2026 — 98% approval rate" },
  ];

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  const filteredCountries = countries.filter(c => {
    const matchLetter = selectedLetter === "All" || c.country?.[0]?.toUpperCase() === selectedLetter;
    const matchSearch = c.country?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchLetter && matchSearch;
  });

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const currentItems = filteredCountries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const alphabet = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

  const difficultyColors = {
    red:   "bg-red-50 text-red-600 border-red-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
    green: "bg-green-50 text-green-600 border-green-100",
  };

  return (
    // FIX 1: overflow-x-hidden on the root wrapper prevents ANY child from
    // expanding the page width beyond 100vw on mobile.
    <div className="min-h-screen bg-[#f8f9fb] text-[#1a1c1e] font-sans overflow-x-hidden">

      {/* ── HERO WITH SLIDESHOW ── */}
      {/*
        FIX 2: Breadcrumb moved to AFTER the hero (see below).
        overflow-hidden here is critical — it clips the absolutely-positioned
        slide images so they can never add horizontal scroll.
      */}
      <section
        aria-labelledby="hero-heading"
        className="relative w-full min-h-[680px] flex items-center justify-center overflow-hidden"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
            aria-hidden={i !== currentSlide}
          >
            <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          </div>
        ))}

        {/* Slide dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20" role="tablist" aria-label="Slideshow navigation">
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === currentSlide}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setCurrentSlide(i)}
              className={`rounded-full transition-all ${i === currentSlide ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/40"}`}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 text-center py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-full mb-6 shadow-lg">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            200+ Countries · Expert Visa Consultancy · Bangladesh 2026
          </div>

          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight"
          >
            Tourist Visa from Bangladesh —<br className="hidden md:block" />
            <span className="text-amber-400">Done Right, First Time.</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Embassy-accurate documentation for{" "}
            <strong className="text-white">USA B1/B2, UK Standard Visitor, Canada V-1</strong>, and the{" "}
            <strong className="text-white">29-country Schengen Area</strong> — handled by expert Bangladeshi visa consultants.
            Over 12,000 passports processed. 98% approval rate.
          </p>

       {/* Search inside hero */}
<div className="bg-white/95 backdrop-blur-lg rounded-[2rem] shadow-2xl p-5 md:p-6 border border-white/30 relative">
  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 text-left">
    Search tourist visa destination
  </p>
  <div className="flex flex-col md:flex-row gap-4 items-center mb-5">
    {/* Wrap this column in relative so the absolute dropdown positions correctly */}
    <div className="relative flex-1 w-full">
      <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="search"
        placeholder="e.g. Japan, Canada, Germany, Dubai..."
        aria-label="Search tourist visa destination country"
        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-100 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none bg-gray-50 text-base font-semibold text-gray-800 transition-all"
        value={searchTerm}
        onChange={e => { setSearchTerm(e.target.value); setCurrentPage(1); }}
      />

      {/* AUTO-SUGGESTION DROPDOWN WITH REDIRECT ROUTING */}
      {searchTerm && filteredCountries.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-2xl z-50 text-left divide-y divide-gray-100 block p-0 m-0 list-none">
          {filteredCountries.slice(0, 8).map((country) => {
            const countryName = country.country || country.name || country;
            const countryCode = country.code || country.id || countryName;
            
            return (
              <li key={countryCode} className="block m-0 p-0">
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm(countryName); 
                    setCurrentPage(1);
                    // REDIRECT ROUTE SYSTEM ATTACHED HERE
                    router.push(`/visa/${createSlug(countryName)}-visa`);
                  }}
                  className="w-full px-5 py-3.5 text-left font-bold text-gray-800 bg-white hover:bg-green-50 hover:text-green-700 transition-colors flex items-center justify-between border-none outline-none group"
                >
                  <span className="text-gray-800 group-hover:text-green-700 text-sm md:text-base transition-colors flex items-center gap-3">
                    {country.flag && (
                      <img 
                        src={country.flag} 
                        alt={`${countryName} flag`} 
                        className="w-6 h-4 object-contain rounded-sm flex-shrink-0"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    )}
                    <span>{countryName}</span>
                  </span>
                  <span className="text-xs font-bold text-gray-400 bg-gray-100 group-hover:bg-green-100 group-hover:text-green-700 px-2.5 py-1 rounded-md transition-colors">
                    Visa Info
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {/* NO RESULTS STATE */}
      {searchTerm && filteredCountries.length === 0 && (
        <div className="absolute left-0 right-0 mt-2 p-5 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 text-left text-sm text-gray-600 font-bold">
          No destinations found matching <span className="text-red-500">"{searchTerm}"</span>
        </div>
      )}
    </div>

    <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
      <div className="bg-green-50 border border-green-100 px-4 py-3 rounded-xl text-sm font-black text-green-700 whitespace-nowrap">
        {filteredCountries.length} destinations
      </div>
      {searchTerm && (
        <button
          onClick={() => { setSearchTerm(""); setSelectedLetter("All"); setCurrentPage(1); }}
          className="px-4 py-3 bg-red-50 border border-red-100 rounded-xl text-sm font-bold text-red-600 hover:bg-red-100 transition whitespace-nowrap"
          aria-label="Clear search"
        >
          Clear
        </button>
      )}
    </div>
  </div>

  {/* A–Z Alphabet Filter */}
  <nav aria-label="Filter countries by first letter" className="overflow-x-auto pb-1 -mx-1 px-1">
    <div className="flex gap-1.5 w-max mx-auto">
      {alphabet.map(l => (
        <button
          key={l}
          onClick={() => { setSelectedLetter(l); setCurrentPage(1); }}
          aria-pressed={selectedLetter === l}
          aria-label={l === "All" ? "Show all countries" : `Countries starting with ${l}`}
          className={`w-8 h-8 md:w-9 md:h-9 rounded-full text-xs font-black transition-all flex-shrink-0 ${
            selectedLetter === l
              ? "bg-green-600 text-white shadow-lg scale-110"
              : "bg-gray-100 text-gray-500 hover:bg-green-100 hover:text-green-700"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  </nav>
</div>
        </div>
      </section>

      {/* ── BREADCRUMB — moved below hero ── */}
      {/*
        FIX 2: Breadcrumb is now rendered after the hero section,
        so it appears visually below it as intended.
      */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
        <ol className="max-w-7xl mx-auto px-5 py-2.5 flex items-center gap-2 text-xs text-gray-500" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" className="hover:text-green-700 font-medium transition" itemProp="item">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li aria-hidden="true" className="text-gray-300">›</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/visa" className="hover:text-green-700 font-medium transition" itemProp="item">
              <span itemProp="name">Visa Services</span>
            </Link>
            <meta itemProp="position" content="2" />
          </li>
          <li aria-hidden="true" className="text-gray-300">›</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="font-semibold text-gray-700">
            <span itemProp="name">Tourist Visa from Bangladesh 2026</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ── TRUST STATS BAR ── */}
      <section aria-label="Eammu Holidays visa service statistics" className="bg-green-700 py-5">
        <div className="max-w-7xl mx-auto px-5">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {STATS.map((s, i) => (
              <div key={i} className="flex flex-col">
                <dt className="text-3xl md:text-4xl font-black text-white">{s.value}</dt>
                <dd className="text-green-200 text-sm font-semibold mt-0.5">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── REUSABLE SEARCH COMPONENT ── */}
      <section className="py-6">
        <VisaSearch />
      </section>
      

      {/* ── POPULAR COUNTRIES QUICK CHIPS ── */}
      <section aria-labelledby="popular-heading" className="max-w-7xl mx-auto px-5 py-8">
        <div className="flex items-center gap-3 flex-wrap">
          <span id="popular-heading" className="text-xs font-black uppercase tracking-widest text-gray-400">
            🔥 Popular tourist visa destinations from Bangladesh:
          </span>
          {POPULAR.map(name => {
            const c = countries.find(x => x.country === name);
            return (
              <Link
                key={name}
                href={`/visa/${createSlug(name)}-visa`}
                className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-100 rounded-full text-sm font-bold text-gray-700 hover:border-green-400 hover:text-green-700 hover:shadow-md transition-all"
                aria-label={`${name} tourist visa from Bangladesh`}
              >
                {c?.flag && <img src={c.flag} className="w-5 h-3.5 object-cover rounded-sm" alt={`${name} flag`} />}
                {name}
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── TOP DESTINATIONS DETAIL TABLE ── */}
      <section aria-labelledby="top-dest-heading" className="max-w-7xl mx-auto px-5 pb-12">
        <h2 id="top-dest-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tight">
          Top Tourist Visa Destinations from Bangladesh — 2026 Overview
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Processing times, difficulty ratings, and expert tips for Bangladeshi passport holders — updated for 2026.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOP_DESTINATIONS.map((d, i) => (
            <article key={i} className="bg-white rounded-2xl border-2 border-gray-100 p-5 hover:border-green-300 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-black text-gray-900 text-base">
                  <Link href={d.href} className="hover:text-green-700 transition">
                    {d.country} {d.visaType}
                  </Link>
                </h3>
                <span className={`text-xs font-black px-2 py-1 rounded-lg border ${difficultyColors[d.difficultyColor]}`}>
                  {d.difficulty}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-gray-400 font-semibold">⏱ Processing:</span>
                <span className="text-xs font-black text-gray-700">{d.processingTime}</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">{d.tips}</p>
              <Link
                href={d.href}
                className="text-xs font-black text-green-700 bg-green-50 hover:bg-green-600 hover:text-white px-4 py-2 rounded-xl transition inline-block"
              >
                View 2026 requirements →
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-5 text-center">
          <Link
            href="/visa-rejection"
            className="text-sm text-gray-500 hover:text-green-700 font-semibold underline transition"
          >
            📊 See tourist visa rejection rates for Bangladeshi applicants →
          </Link>
        </div>
      </section>

      {/* ── VISA CATEGORIES ── */}
      <section aria-labelledby="categories-heading" className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-5">
          <h2 id="categories-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tight">
            All Visa Types from Bangladesh — Eammu Holidays Services
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Tourist, student, work, and e-visa services — all handled by specialist Bangladeshi visa consultants.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VISA_CATEGORIES.map((v, i) => (
              <Link
                key={i}
                href={v.href}
                className="group relative bg-gray-50 border-2 border-gray-100 rounded-2xl p-6 hover:border-green-300 hover:shadow-xl transition-all"
              >
                {v.tag && (
                  <span className="absolute top-4 right-4 text-[10px] font-black bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                    {v.tag}
                  </span>
                )}
                <div className="text-3xl mb-3" aria-hidden="true">{v.icon}</div>
                <h3 className="font-black text-gray-900 text-lg mb-1 group-hover:text-green-700 transition">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section aria-labelledby="how-heading" className="py-20 bg-[#f8f9fb] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 id="how-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              How to Get a Tourist Visa from Bangladesh — Our 5-Step Process
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              From choosing your destination to collecting your approved visa — Eammu Holidays handles every step so nothing falls through the cracks.
            </p>
          </div>
          <ol className="relative" aria-label="Visa application process steps">
            <div className="hidden md:block absolute left-[28px] top-8 bottom-8 w-0.5 bg-green-100" aria-hidden="true" />
            <div className="space-y-6">
              {HOW_IT_WORKS.map((s, i) => (
                <li key={i} className="flex gap-6 items-start bg-white rounded-2xl border-2 border-gray-100 hover:border-green-200 p-6 transition-all">
                  <div className="flex-shrink-0 w-14 h-14 bg-green-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg">
                    {s.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-gray-900 text-lg mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">{s.desc}</p>
                    <Link
                      href={s.href}
                      className="text-xs font-black text-green-700 hover:underline"
                    >
                      {s.cta} →
                    </Link>
                  </div>
                </li>
              ))}
            </div>
          </ol>
        </div>
      </section>

      {/* ── COUNTRIES GRID ── */}
      <section className="max-w-7xl mx-auto px-5 pb-16" aria-labelledby="countries-heading">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 id="countries-heading" className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              {selectedLetter === "All" && !searchTerm
                ? "Tourist Visa Guide — All Destinations from Bangladesh"
                : searchTerm
                ? `Tourist visa results for "${searchTerm}"`
                : `Tourist visa destinations starting with "${selectedLetter}"`}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {filteredCountries.length} countries · Click any destination to view 2026 visa requirements & documents
            </p>
          </div>
          {(selectedLetter !== "All" || searchTerm) && (
            <button
              onClick={() => { setSelectedLetter("All"); setSearchTerm(""); setCurrentPage(1); }}
              className="text-sm font-bold text-green-700 bg-green-50 border border-green-100 px-4 py-2 rounded-xl hover:bg-green-100 transition"
            >
              Show All
            </button>
          )}
        </div>

        {currentItems.length > 0 ? (
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" role="list">
            {currentItems.map((c, i) => (
              <li key={`${c.code}-${i}`}>
                <Link
                  href={`/visa/${createSlug(c.country)}-visa`}
                  className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-green-400 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  aria-label={`${c.country} tourist visa requirements for Bangladeshi applicants 2026`}
                >
                  <div className="relative h-28 overflow-hidden bg-gray-100">
                    <img
                      src={c.flag}
                      alt={`${c.country} flag — tourist visa from Bangladesh`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition" />
                  </div>
                  <div className="p-3 flex flex-col flex-1 justify-between">
                    <h3 className="text-sm font-black text-gray-800 leading-tight group-hover:text-green-700 transition-colors mb-2">
                      {c.country} visa
                    </h3>
                    <div className="text-[10px] font-bold text-green-600 bg-green-50 rounded-lg px-2 py-1 text-center group-hover:bg-green-600 group-hover:text-white transition-all">
                      View 2026 guide →
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-gray-200">
            <div className="text-6xl mb-4" aria-hidden="true">🌍</div>
            <h3 className="text-xl font-black text-gray-700">No destinations found</h3>
            <p className="text-gray-400 mt-2 text-sm">Try a different search term or clear the letter filter.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav aria-label="Country list pagination" className="mt-12 flex justify-center items-center gap-3">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              aria-label="Previous page"
              className="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl font-bold text-gray-700 disabled:opacity-40 disabled:pointer-events-none hover:border-green-400 hover:text-green-700 transition"
            >
              ← Previous
            </button>
            <div className="flex gap-1">
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map(n => (
                <button
                  key={n}
                  onClick={() => setCurrentPage(n)}
                  aria-label={`Page ${n}`}
                  aria-current={currentPage === n ? "page" : undefined}
                  className={`w-10 h-10 rounded-xl font-black text-sm transition-all ${currentPage === n ? "bg-green-600 text-white shadow-lg" : "bg-white border-2 border-gray-100 text-gray-600 hover:border-green-300"}`}
                >
                  {n}
                </button>
              ))}
              {totalPages > 5 && <span className="w-10 h-10 flex items-center justify-center text-gray-400">…</span>}
            </div>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              aria-label="Next page"
              className="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl font-bold text-gray-700 disabled:opacity-40 disabled:pointer-events-none hover:border-green-400 hover:text-green-700 transition"
            >
              Next →
            </button>
          </nav>
        )}
      </section>

      {/* ── WHY CHOOSE EAMMU ── */}
      <section aria-labelledby="why-eammu-heading" className="bg-white border-t border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 id="why-eammu-heading" className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Why 12,000+ Bangladeshi Travelers Choose Eammu Holidays
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              We don&apos;t just tell you what documents you need — we prepare, verify, format, and submit them.
              Your tourist visa application from Bangladesh is embassy-ready before it leaves our office.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((w, i) => (
              <div key={i} className="p-7 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4" aria-hidden="true">{w.icon}</div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{w.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{w.desc}</p>
                {w.linkHref && (
                  <Link href={w.linkHref} className="text-xs text-[#005a31] font-semibold hover:underline">
                    {w.linkLabel} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section aria-labelledby="testimonials-heading" className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-5">
          <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-black text-white text-center mb-10">
            Real Visa Approvals — What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex mb-3" aria-label={`Rating: ${t.rating} out of 5`}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-amber-400 text-lg" aria-hidden="true">★</span>
                  ))}
                </div>
                <blockquote className="text-white/90 text-sm leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption>
                  <p className="text-white font-black text-sm">{t.name}</p>
                  <p className="text-green-200 text-xs font-semibold">{t.destination} — Approved ✓</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/testimonials"
              className="inline-block px-8 py-3 bg-white text-green-700 font-black rounded-full hover:bg-green-50 transition text-sm shadow-lg"
            >
              Read all client testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section aria-labelledby="faq-heading" className="py-20 bg-[#f8f9fb] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Frequently Asked Questions — Tourist Visa from Bangladesh
            </h2>
            <p className="text-gray-500 text-sm">
              Answers to the most common tourist visa questions from Bangladeshi applicants in 2026.
            </p>
          </div>
          <dl className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-green-200 transition-all"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="w-full flex items-center justify-between p-5 text-left font-black text-gray-800 text-sm md:text-base hover:text-green-700 transition"
                  >
                    <span itemProp="name">{item.q}</span>
                    <span
                      aria-hidden="true"
                      className={`ml-4 flex-shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-700 font-black text-lg transition-transform ${openFaq === i ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd
                    className="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <span itemProp="text">
                      {item.a}
                    </span>
                  </dd>
                )}
              </div>
            ))}
          </dl>
          <div className="text-center mt-10">
            <p className="text-sm text-gray-500 mb-4">Have a question not answered here?</p>
            <Link
              href="/contact/travel-agency-bangladesh"
              className="inline-block px-8 py-3 bg-green-600 text-white font-black rounded-full hover:bg-green-700 transition text-sm shadow-lg"
            >
              Talk to a visa consultant →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SEO FOOTER TEXT ── */}
      <section aria-labelledby="seo-guide-heading" className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-5">
          <h2 id="seo-guide-heading" className="text-2xl font-black text-gray-900 mb-5">
            Tourist Visa Consultancy in Bangladesh — Complete 2026 Guide
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
                <Link href="/visa/australia-visa" className="text-[#005a31] font-semibold hover:underline">Australia</Link>,{" "}
                <Link href="/our-services/visa/dubai-visa-application" className="text-[#005a31] font-semibold hover:underline">Dubai</Link>, and{" "}
                <Link href="/visa" className="text-[#005a31] font-semibold hover:underline">200+ destinations</Link>.
                Our consultants prepare every document to the exact specification required by each embassy and VFS Global.
              </p>
              <p>
                From{" "}
                <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">
                  bank statement formatting and visa checklist generation
                </Link>{" "}
                to NOC drafting and cover letter writing — we handle everything so your tourist visa application from Bangladesh is complete and approved. Our{" "}
                <Link href="/visa-rejection" className="text-[#005a31] font-semibold hover:underline">
                  visa rejection rate analysis
                </Link>{" "}
                helps you understand your risk before applying.
              </p>
              <p>
                Bangladeshi applicants face above-average refusal rates at USA, UK, and Canada embassies. Our consultants understand exactly what these embassies look for — from the specific wording of employment NOCs to how bank statements should be prepared to demonstrate financial stability without raising red flags.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Our 2026 tourist visa guides are updated monthly based on official embassy circulars and{" "}
                <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#005a31] font-semibold hover:underline">
                  current VFS Global processing times
                </Link>
                . We cover all 29 Schengen countries individually — because German, French, and Italian embassy requirements differ significantly for Bangladeshi applicants.
              </p>
              <p>
                Eammu Holidays also handles{" "}
                <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                  student visas from Bangladesh
                </Link>
                ,{" "}
                <Link href="/our-services/visa-services/work-visa-from-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                  work visas
                </Link>
                ,{" "}
                <Link href="/visa/e-visa" className="text-[#005a31] font-semibold hover:underline">e-visa destinations</Link>,{" "}
                medical visas, and{" "}
                <Link href="/scholarships" className="text-[#005a31] font-semibold hover:underline">scholarships</Link>.
                We serve Bangladeshi applicants from our{" "}
                <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                  Cumilla office
                </Link>
                ,{" "}
                <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-semibold hover:underline">Dubai branch</Link>
                , and{" "}
                <Link href="/online-travel-agency-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                  online travel agency
                </Link>
                — so you can get expert visa help no matter where you are.
              </p>
              <p>
                <strong className="text-gray-700">2026 update:</strong> VFS Global Bangladesh has updated appointment systems for UK, Schengen, and Australia visa categories. Eammu Holidays tracks all changes in real time and updates client guidance accordingly. Check our{" "}
                <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#005a31] font-semibold hover:underline">
                  live processing time tracker
                </Link>{" "}
                for the latest slot availability.
              </p>
            </div>
          </div>

          {/* Additional internal links block */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <h3 className="text-base font-black text-gray-800 mb-4">Related Visa Resources</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Schengen visa from Bangladesh", href: "/schengen-visa" },
                { label: "USA B1/B2 visa Bangladesh", href: "/visa/united-states-visa" },
                { label: "UK visitor visa Bangladesh", href: "/visa/united-kingdom-visa" },
                { label: "Canada tourist visa", href: "/visa/canada-visa" },
                { label: "Japan tourist visa", href: "/visa/japan-visa" },
                { label: "Australia visa Bangladesh", href: "/visa/australia-visa" },
                { label: "Dubai visa application", href: "/our-services/visa/dubai-visa-application" },
                { label: "India visa from Bangladesh", href: "/visa/india" },
                { label: "Malaysia tourist visa", href: "/visa/malaysia-visa" },
                { label: "E-visa destinations", href: "/visa/e-visa" },
                { label: "Student visa from Bangladesh", href: "/our-services/visa-services/student-visa-from-bangladesh" },
                { label: "Work visa from Bangladesh", href: "/our-services/visa-services/work-visa-from-bangladesh" },
                { label: "Visa checklist generator", href: "/travel-resources/visa-checklist-generator" },
                { label: "Visa processing time tracker", href: "/travel-resources/visa-processing-time-tracker" },
                { label: "Visa rejection rates Bangladesh", href: "/visa-rejection" },
                { label: "Dubai residents visa guide", href: "/visa/dubai-residents" },
                { label: "Scholarships from Bangladesh", href: "/scholarships" },
                { label: "Online travel agency Bangladesh", href: "/online-travel-agency-bangladesh" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-semibold text-[#005a31] bg-green-50 border border-green-100 px-3 py-1.5 rounded-full hover:bg-green-600 hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}