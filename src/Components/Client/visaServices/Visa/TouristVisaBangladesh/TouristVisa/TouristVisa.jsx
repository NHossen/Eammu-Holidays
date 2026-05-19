"use client";
import { useState, useEffect } from "react";
import countries from "@/app/data/countries.json";
import Link from "next/link";
import { createSlug } from "@/app/lib/utils";
import VisaSearch from "./VisaSearch/VisaSearch";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const POPULAR = [
  "Japan", "Canada", "United States", "United Kingdom", "Australia",
  "Germany", "France", "Italy", "Malaysia", "Thailand"
];

const WHY_US = [
  {
    icon: "🛡️",
    title: "98% tourist visa approval rate",
    desc: "Our consultants have helped 12,000+ Bangladeshi travelers get approved — we know exactly what embassies in 2026 are looking for.",
    linkHref: "/testimonials",
    linkLabel: "Read client testimonials",
  },
  {
    icon: "📋",
    title: "Embassy-accurate documentation",
    desc: "Every visa checklist is verified against official embassy circulars and VFS Global announcements, updated monthly for 2026 protocols.",
    linkHref: "/travel-resources/visa-checklist-generator",
    linkLabel: "Generate your free checklist",
  },
  {
    icon: "⚡",
    title: "24-hour document review",
    desc: "We eliminate back-and-forth delays before submission. Your bank statement, NOC, and cover letter reviewed within one business day.",
    linkHref: "/travel-resources/visa-processing-time-tracker",
    linkLabel: "Track processing times",
  },
  {
    icon: "🌍",
    title: "200+ visa destinations",
    desc: "From Schengen to Southeast Asia — tourist, student, work, and medical visas from Bangladesh covered by expert consultants.",
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

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function TouristVisa() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 12;

  const slides = [
    { src: "/the-love-island.webp",                  alt: "Tourist visa from Bangladesh — international travel destinations" },
    { src: "/top-travel-agency-bangladesh.webp",     alt: "Top travel agency in Bangladesh — Eammu Holidays" },
    { src: "/travel_banner_second_part_one.webp",    alt: "Tourist visa consultancy Bangladesh 2026" },
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

  return (
    <div className="min-h-screen bg-[#f8f9fb] text-[#1a1c1e] font-sans">

      {/* ── HERO WITH SLIDESHOW ── */}
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

        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 text-center  py-20 ">
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
          <div className="bg-white/95 backdrop-blur-lg rounded-[2rem] shadow-2xl p-5 md:p-6 border border-white/30">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 text-left">
              Search tourist visa destination
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center mb-5">
              <div className="relative flex-1 w-full">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="search"
                  placeholder="Search destination country for tourist visa..."
                  aria-label="Search tourist visa destination country"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-100 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none bg-gray-50 text-base font-semibold transition-all"
                  value={searchTerm}
                  onChange={e => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                />
              </div>
              <div className="flex items-center gap-3">
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

            {/* A–Z filter */}
            <nav aria-label="Filter countries by first letter">
              <div className="flex flex-wrap justify-center gap-1.5">
                {alphabet.map(l => (
                  <button
                    key={l}
                    onClick={() => { setSelectedLetter(l); setCurrentPage(1); }}
                    aria-pressed={selectedLetter === l}
                    aria-label={l === "All" ? "Show all countries" : `Countries starting with ${l}`}
                    className={`w-8 h-8 md:w-9 md:h-9 rounded-full text-xs font-black transition-all ${
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

          {/* Quick links below search */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {QUICK_LINKS.map((ql) => (
              <Link
                key={ql.href}
                href={ql.href}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-xs font-semibold hover:bg-white/30 transition"
              >
                <span aria-hidden="true">{ql.icon}</span> {ql.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── REUSABLE SEARCH COMPONENT ── */}
      <VisaSearch />

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

      {/* ── COUNTRIES GRID ── */}
      <section className="max-w-7xl mx-auto px-5 pb-16" aria-labelledby="countries-heading">
        {/* Section header */}
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
                  aria-label={`${c.country} tourist visa guide for Bangladeshi applicants`}
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

      {/* ── SEO FOOTER TEXT ── */}
      <section aria-labelledby="seo-guide-heading" className="bg-gray-50 border-t border-gray-100 py-16">
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
                <Link href="/visa/australia-visa" className="text-[#005a31] font-semibold hover:underline">Australia</Link>, and{" "}
                <Link href="/visa" className="text-[#005a31] font-semibold hover:underline">200+ destinations</Link>.
                Our consultants prepare every document to the exact specification required by each embassy and VFS Global.
              </p>
              <p>
                From{" "}
                <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">
                  bank statement formatting and visa checklist generation
                </Link>{" "}
                to NOC drafting and cover letter writing — we handle everything so your tourist visa application from Bangladesh is complete and approved.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Our 2026 tourist visa guides are updated monthly based on official embassy circulars and{" "}
                <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#005a31] font-semibold hover:underline">
                  current VFS Global processing times
                </Link>
                . We also cover{" "}
                <Link href="/visa-rejection" className="text-[#005a31] font-semibold hover:underline">
                  tourist visa rejection rates for Bangladeshi applicants
                </Link>{" "}
                so you know your odds before you apply.
              </p>
              <p>
                Eammu Holidays also handles{" "}
                <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                  student visas
                </Link>
                ,{" "}
                <Link href="/our-services/visa-services/work-visa-from-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                  work visas
                </Link>
                ,{" "}
                <Link href="/visa/e-visa" className="text-[#005a31] font-semibold hover:underline">e-visa destinations</Link>, and{" "}
                <Link href="/scholarships" className="text-[#005a31] font-semibold hover:underline">scholarships</Link>.
                Visit our{" "}
                <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                  Cumilla office
                </Link>
                ,{" "}
                <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-semibold hover:underline">Dubai branch</Link>
                , or connect via our{" "}
                <Link href="/online-travel-agency-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                  online travel agency
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}