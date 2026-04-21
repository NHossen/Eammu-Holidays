"use client";
import { useState, useEffect } from "react";
import countries from "@/app/data/countries.json";
import Link from "next/link";
import { createSlug } from "@/app/lib/utils";
import VisaSearch from "./VisaSearch/VisaSearch";

const POPULAR = [
  "Japan", "Canada", "United States", "United Kingdom", "Australia",
  "Germany", "France", "Italy", "Malaysia", "Thailand"
];

const WHY_US = [
  { icon: "🛡️", title: "98% Approval Rate", desc: "Our consultants have helped 50,000+ travelers get approved — we know exactly what embassies look for." },
  { icon: "📋", title: "Embassy-Accurate Docs", desc: "Every checklist is verified against official embassy circulars, updated monthly for 2026 protocols." },
  { icon: "⚡", title: "Fast Processing", desc: "Document review in 24 hours. We eliminate back-and-forth delays before submission." },
  { icon: "🌍", title: "200+ Countries", desc: "From Schengen to Southeast Asia — tourist, business, student, and medical visas covered." },
];

export default function TouristVisa() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 12;

  const slides = [
    "/the-love-island.webp",
    "/top-travel-agency-bangladesh.webp",
    "/travel_banner_second_part_one.webp",
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

      {/* ── HERO WITH SLIDESHOW ───────────────────────────────────────────── */}
      <section className="relative w-full min-h-[680px] flex items-center justify-center overflow-hidden">
        {slides.map((img, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <img src={img} alt="Travel" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          </div>
        ))}

        {/* Slide dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)}
              className={`rounded-full transition-all ${i === currentSlide ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/40"}`} />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-full mb-6 shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            200+ Countries · Expert Visa Consultancy · Dhaka
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight">
            Get Your <span className="text-amber-400">Tourist Visa</span><br className="hidden md:block" /> Done Right, First Time.
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Embassy-accurate documentation for <strong className="text-white">USA B1/B2, UK Standard Visitor, Canada V-1,</strong> and the <strong className="text-white">29-country Schengen Area</strong> — handled by expert consultants.
          </p>

          {/* Search inside hero */}
          <div className="bg-white/95 backdrop-blur-lg rounded-[2rem] shadow-2xl p-5 md:p-6 border border-white/30">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-5">
              <div className="relative flex-1 w-full">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search destination country..."
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
                  <button onClick={() => { setSearchTerm(""); setSelectedLetter("All"); setCurrentPage(1); }}
                    className="px-4 py-3 bg-red-50 border border-red-100 rounded-xl text-sm font-bold text-red-600 hover:bg-red-100 transition whitespace-nowrap">
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* A–Z filter */}
            <div className="flex flex-wrap justify-center gap-1.5">
              {alphabet.map(l => (
                <button key={l} onClick={() => { setSelectedLetter(l); setCurrentPage(1); }}
                  className={`w-8 h-8 md:w-9 md:h-9 rounded-full text-xs font-black transition-all ${
                    selectedLetter === l
                      ? "bg-green-600 text-white shadow-lg scale-110"
                      : "bg-gray-100 text-gray-500 hover:bg-green-100 hover:text-green-700"
                  }`}>
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REUSABLE SEARCH COMPONENT ─────────────────────────────────────── */}
      <VisaSearch />

      {/* ── POPULAR COUNTRIES QUICK CHIPS ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 py-8">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-black uppercase tracking-widest text-gray-400">🔥 Popular:</span>
          {POPULAR.map(name => {
            const c = countries.find(x => x.country === name);
            return (
              <Link key={name} href={`/visa/${createSlug(name)}-visa`}
                className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-100 rounded-full text-sm font-bold text-gray-700 hover:border-green-400 hover:text-green-700 hover:shadow-md transition-all">
                {c?.flag && <img src={c.flag} className="w-5 h-3.5 object-cover rounded-sm" alt="" />}
                {name}
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── COUNTRIES GRID ────────────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-5 pb-16">
        {/* Section header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              {selectedLetter === "All" && !searchTerm
                ? "All Visa Destinations"
                : searchTerm
                ? `Results for "${searchTerm}"`
                : `Countries Starting with "${selectedLetter}"`}
            </h2>
            <p className="text-gray-500 text-sm mt-1">{filteredCountries.length} countries · Click any to view requirements & documents</p>
          </div>
          {selectedLetter !== "All" || searchTerm ? (
            <button onClick={() => { setSelectedLetter("All"); setSearchTerm(""); setCurrentPage(1); }}
              className="text-sm font-bold text-green-700 bg-green-50 border border-green-100 px-4 py-2 rounded-xl hover:bg-green-100 transition">
              Show All
            </button>
          ) : null}
        </div>

        {currentItems.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {currentItems.map((c, i) => (
              <Link
                key={`${c.code}-${i}`}
                href={`/visa/${createSlug(c.country)}-visa`}
                className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-green-400 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-28 overflow-hidden bg-gray-100">
                  <img src={c.flag} alt={c.country} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition" />
                </div>
                <div className="p-3 flex flex-col flex-1 justify-between">
                  <h3 className="text-sm font-black text-gray-800 leading-tight group-hover:text-green-700 transition-colors mb-2">{c.country}</h3>
                  <div className="text-[10px] font-bold text-green-600 bg-green-50 rounded-lg px-2 py-1 text-center group-hover:bg-green-600 group-hover:text-white transition-all">
                    View Guide →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-gray-200">
            <div className="text-6xl mb-4">🌍</div>
            <h3 className="text-xl font-black text-gray-700">No destinations found</h3>
            <p className="text-gray-400 mt-2 text-sm">Try a different search term or clear the letter filter.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-3">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}
              className="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl font-bold text-gray-700 disabled:opacity-40 disabled:pointer-events-none hover:border-green-400 hover:text-green-700 transition">
              ← Previous
            </button>
            <div className="flex gap-1">
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map(n => (
                <button key={n} onClick={() => setCurrentPage(n)}
                  className={`w-10 h-10 rounded-xl font-black text-sm transition-all ${currentPage === n ? "bg-green-600 text-white shadow-lg" : "bg-white border-2 border-gray-100 text-gray-600 hover:border-green-300"}`}>
                  {n}
                </button>
              ))}
              {totalPages > 5 && <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>}
            </div>
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}
              className="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl font-bold text-gray-700 disabled:opacity-40 disabled:pointer-events-none hover:border-green-400 hover:text-green-700 transition">
              Next →
            </button>
          </div>
        )}
      </main>

      {/* ── WHY CHOOSE EAMMU ──────────────────────────────────────────────── */}
      <section className="bg-white border-t border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Why 50,000+ Travelers Trust Eammu Holidays</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">We don't just tell you what documents you need — we verify them, format them, and ensure your application is embassy-ready.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((w, i) => (
              <div key={i} className="p-7 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{w.icon}</div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{w.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO FOOTER TEXT ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-t border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-2xl font-black text-gray-900 mb-5">Tourist Visa Consultancy in Bangladesh — Complete Guide 2026</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-500 leading-relaxed">
            <div className="space-y-4">
              <p>
                Eammu Holidays is Bangladesh's leading tourist visa consultancy, helping thousands of Bangladeshi travelers 
                secure visas for <strong className="text-gray-700">USA, UK, Canada, Schengen, Japan, Australia</strong> and 200+ destinations worldwide. 
                Our embassy-certified consultants prepare every document to the exact specification required by each embassy.
              </p>
              <p>
                From <strong className="text-gray-700">bank statement formatting</strong> and NOC drafting to photo compliance checks 
                and cover letter writing — we handle everything so your application is complete, accurate, and approved.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Our 2026 visa guides are updated monthly based on official embassy circulars and VFS Global announcements. 
                We track policy changes so you don't have to. Every checklist, fee, and processing timeline is verified 
                by our team before publication.
              </p>
              <p>
                Whether you're a first-time traveler or a frequent flyer, our expert consultants provide personalized guidance — 
                from document preparation to application submission and passport collection.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
