"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { createSlug } from "@/app/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// COUNTRY EXPLORER — Client Component
//
// Receives `countries` pre-fetched by the Server Component (page.jsx).
// All interactivity lives here: hero slides, search autocomplete, A-Z filter,
// country grid, and pagination.
// ─────────────────────────────────────────────────────────────────────────────

const alphabet = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
const TRUST_BADGES = [
  "✅ 98% Approval Rate",
  "📋 Embassy-Verified Docs",
  "⚡ 24hr Document Review",
  "🔒 100% Confidential",
];

export default function CountryExplorer({ countries, slides, popular }) {
  const [searchTerm,      setSearchTerm]      = useState("");
  const [suggestions,     setSuggestions]     = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedLetter,  setSelectedLetter]  = useState("All");
  const [currentPage,     setCurrentPage]     = useState(1);
  const [currentSlide,    setCurrentSlide]    = useState(0);
  const searchRef  = useRef(null);
  const itemsPerPage = 12;

  // Auto-rotate slides
  useEffect(() => {
    const t = setInterval(() => setCurrentSlide(p => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, [slides.length]);

  // Auto-suggestions
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

  // Close dropdown on outside click
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
  const currentItems = filteredCountries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSuggestionClick = country => {
    setSearchTerm(country.country);
    setShowSuggestions(false);
    setCurrentPage(1);
    setSelectedLetter("All");
  };

  const resetFilters = () => {
    setSelectedLetter("All");
    setSearchTerm("");
    setCurrentPage(1);
  };

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ minHeight: "560px" }}
      >
        {/* Slide backgrounds */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
            style={{ transition: "opacity 1.5s ease" }}
          >
            <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom,rgba(255,255,255,0.75) 0%,rgba(255,255,255,0.45) 50%,rgba(255,255,255,0.97) 100%)",
              }}
            />
          </div>
        ))}

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.15) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Slide dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-500 ${
                i === currentSlide
                  ? "w-8 h-2.5 bg-[#f5c800]"
                  : "w-2.5 h-2.5 bg-black/20 hover:bg-black/40"
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 text-center pt-10 pb-20">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-7 rounded-full bg-white border border-black/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#f5c800] animate-pulse" />
            <span className="text-xs font-bold text-black/80 tracking-widest uppercase">
              200+ Countries · Expert Visa Consultancy · Dubai &amp; UAE
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl md:text-5xl lg:text-[52px] font-black leading-[0.95] tracking-tight mb-5 text-black">
            Tourist Visa for <span className="text-[#f5c800]">Dubai Residents</span> —<br />
            <span className="text-black/30">Done Right, First Time.</span>
          </h1>

          <p className="text-black/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Embassy-accurate documentation for{" "}
            <strong className="text-black">USA B1/B2</strong>,{" "}
            <strong className="text-black">UK Standard Visitor</strong>,{" "}
            <strong className="text-black">Canada TRV</strong>, and the{" "}
            <strong className="text-black">29-country Schengen Area</strong> — handled by expert visa
            consultants for Dubai and UAE residents.
          </p>

          {/* ── SEARCH CARD ──────────────────────────────────────────────── */}
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-3xl mx-auto border border-black/5 shadow-2xl mb-4">
            {/* Search with autocomplete */}
            <div ref={searchRef} className="relative mb-5">
              <svg
                className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f5c800] z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="search"
                placeholder="Search destination country… (e.g. Japan, Canada, Germany)"
                className="w-full pl-14 pr-12 py-5 rounded-2xl text-base font-semibold outline-none transition-all shadow-inner"
                style={{ background: "#f8f8f8", border: "1.5px solid rgba(0,0,0,0.05)", color: "black" }}
                value={searchTerm}
                onChange={e => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                  setSelectedLetter("All");
                }}
                onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                onKeyDown={e => {
                  if (e.key === "Escape") setShowSuggestions(false);
                  if (e.key === "Enter" && suggestions.length > 0)
                    handleSuggestionClick(suggestions[0]);
                }}
                autoComplete="off"
                aria-label="Search destination country for visa from Dubai"
              />
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedLetter("All");
                    setCurrentPage(1);
                    setSuggestions([]);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full text-black/30 hover:text-black hover:bg-black/5 transition text-lg font-bold"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}

              {/* Suggestions Dropdown */}
              {showSuggestions && (
                <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl overflow-hidden z-50 shadow-2xl bg-white border border-[#f5c800]/30">
                  <div className="p-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/30 px-3 py-2">
                      🔍 {suggestions.length} countries found
                    </p>
                    {suggestions.map((c, i) => (
                      <Link
                        key={i}
                        href={`/visa/dubai-residents/${createSlug(c.country)}`}
                        onClick={() => handleSuggestionClick(c)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer"
                      >
                        {c.flag && (
                          <img
                            src={c.flag}
                            alt={`${c.country} flag`}
                            className="w-8 object-cover rounded shadow-sm"
                            style={{ height: "22px" }}
                          />
                        )}
                        <div className="text-left flex-1">
                          <p className="font-bold text-black text-sm">{c.country}</p>
                          <p className="text-[11px] text-black/40">
                            Tourist Visa Guide for Dubai Residents → Apply Now
                          </p>
                        </div>
                        <span className="text-[#f5c800] text-xs font-black">View →</span>
                      </Link>
                    ))}
                    <div className="border-t border-black/5 mt-2 pt-2 px-3 pb-1">
                      <p className="text-[10px] text-black/25 font-medium">
                        Press Enter to go to top result · Esc to close
                      </p>
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
                  onClick={() => {
                    setSelectedLetter(l);
                    setCurrentPage(1);
                    setShowSuggestions(false);
                  }}
                  aria-label={`Filter by ${l}`}
                  className={`w-8 h-8 md:w-9 md:h-9 rounded-xl text-xs font-black transition-all ${
                    selectedLetter === l
                      ? "bg-[#f5c800] text-black shadow-md scale-110"
                      : "text-black/40 hover:text-black bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Counter */}
            <div className="flex items-center justify-between text-xs text-black/40 font-bold px-1">
              <span>{filteredCountries.length} destinations available for Dubai &amp; UAE residents</span>
              <span>2026 Embassy-Verified</span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 text-xs font-bold text-black/50">
            {TRUST_BADGES.map(b => (
              <span key={b} className="bg-white/80 border border-black/5 px-3 py-1.5 rounded-full">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR COUNTRIES ─────────────────────────────────────────────── */}
      <section
        className="max-w-6xl mx-auto px-5 pb-6"
        aria-label="Popular visa destinations for Dubai residents"
      >
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-black uppercase tracking-widest text-black/30">
            🔥 Most Popular for Dubai Residents:
          </span>
          {popular.map(({ name, emoji }) => {
            const c = countries.find(x => x.country === name);
            return (
              <Link
                key={name}
                href={`/visa/dubai-residents/${createSlug(name)}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-black/60 hover:text-black border border-black/5 hover:border-[#f5c800]/40 transition-all bg-gray-50 hover:bg-white shadow-sm"
              >
                {c?.flag ? (
                  <img
                    src={c.flag}
                    className="w-5 object-cover rounded-sm"
                    style={{ height: "14px" }}
                    alt=""
                  />
                ) : (
                  <span>{emoji}</span>
                )}
                {name}
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── COUNTRIES GRID ────────────────────────────────────────────────── */}
      <main
        className="max-w-6xl mx-auto px-5 pb-20"
        id="all-countries"
        aria-labelledby="grid-heading"
      >
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 id="grid-heading" className="text-2xl md:text-3xl font-black text-black">
              {selectedLetter === "All" && !searchTerm
                ? "All Visa Destinations — Dubai Residents 2026"
                : searchTerm
                ? `Results for "${searchTerm}"`
                : `Countries Starting with "${selectedLetter}"`}
            </h2>
            <p className="text-black/30 text-sm mt-1">
              {filteredCountries.length} countries · Click any to view full visa requirements for Dubai
              &amp; UAE residents
            </p>
          </div>
          {(selectedLetter !== "All" || searchTerm) && (
            <button
              onClick={resetFilters}
              className="text-xs font-bold text-[#f5c800] border border-[#f5c800]/30 px-4 py-2 rounded-xl hover:bg-[#f5c800]/5 transition"
            >
              Show All
            </button>
          )}
        </div>

        {/* Grid */}
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {currentItems.map((c, i) => (
              <Link
                key={`${c.code}-${i}`}
                href={`/visa/dubai-residents/${createSlug(c.country)}`}
                className="group rounded-2xl overflow-hidden border border-black/5 flex flex-col bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
                title={`${c.country} Tourist Visa — Dubai Resident Guide 2026`}
              >
                <div className="relative h-28 overflow-hidden bg-gray-200">
                  <img
                    src={c.flag}
                    alt={`${c.country} tourist visa guide for Dubai residents 2026`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top,rgba(0,0,0,0.2) 0%,transparent 60%)",
                    }}
                  />
                </div>
                <div className="p-3 flex flex-col flex-1 justify-between">
                  <h3 className="text-sm font-black text-black/80 leading-tight group-hover:text-black transition-colors mb-2">
                    {c.country}
                  </h3>
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
            <p className="text-black/40 mt-2 text-sm">
              Try a different search term or browse by letter above.
            </p>
            <button
              onClick={resetFilters}
              className="mt-5 px-6 py-3 bg-[#f5c800] rounded-xl font-black text-sm"
            >
              Show All Countries
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
            className="mt-12 flex justify-center items-center gap-3"
            aria-label="Country pagination"
          >
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="px-6 py-3 rounded-xl font-bold text-black/60 disabled:opacity-30 disabled:pointer-events-none hover:text-black transition border border-black/10 hover:border-[#f5c800]/40"
            >
              ← Prev
            </button>
            <div className="flex gap-1.5">
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => i + 1).map(n => (
                <button
                  key={n}
                  onClick={() => setCurrentPage(n)}
                  aria-label={`Page ${n}`}
                  aria-current={currentPage === n ? "page" : undefined}
                  className={`w-10 h-10 rounded-xl font-black text-sm transition-all ${
                    currentPage === n
                      ? "bg-[#f5c800] text-black shadow-md"
                      : "text-black/40 hover:text-black bg-gray-50 border border-black/5"
                  }`}
                >
                  {n}
                </button>
              ))}
              {totalPages > 7 && (
                <span className="w-10 h-10 flex items-center justify-center text-black/30">…</span>
              )}
            </div>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className="px-6 py-3 rounded-xl font-bold text-black/60 disabled:opacity-30 disabled:pointer-events-none hover:text-black transition border border-black/10 hover:border-[#f5c800]/40"
            >
              Next →
            </button>
          </nav>
        )}
      </main>
    </>
  );
}