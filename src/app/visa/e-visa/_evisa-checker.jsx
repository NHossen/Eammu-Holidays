"use client";
// /app/visa/e-visa/_evisa-checker.jsx
// ── TINY CLIENT ISLAND — only the autocomplete dropdowns need JS ──────────

import { useState, useEffect, useRef } from "react";
import { createSlug } from "@/app/lib/utils";

function buildEvisaSlug(natSlug, destSlug) {
  return `/visa/e-visa/${natSlug}-national-e-visa-requirements-for-${destSlug}`;
}

export function EVISAChecker({ countries }) {
  const [selectedNat,     setSelectedNat]     = useState("");
  const [selectedDest,    setSelectedDest]    = useState("");
  const [natSearch,       setNatSearch]       = useState("");
  const [destSearch,      setDestSearch]      = useState("");
  const [natSuggestions,  setNatSuggestions]  = useState([]);
  const [destSuggestions, setDestSuggestions] = useState([]);
  const [showNatDrop,     setShowNatDrop]     = useState(false);
  const [showDestDrop,    setShowDestDrop]    = useState(false);
  const natRef  = useRef(null);
  const destRef = useRef(null);

  // Nationality suggestions
  useEffect(() => {
    if (natSearch.length >= 1) {
      setNatSuggestions(
        countries.filter(c => c.country?.toLowerCase().startsWith(natSearch.toLowerCase())).slice(0, 6)
      );
      setShowNatDrop(true);
    } else {
      setNatSuggestions([]);
      setShowNatDrop(false);
    }
  }, [natSearch, countries]);

  // Destination suggestions
  useEffect(() => {
    if (destSearch.length >= 1) {
      setDestSuggestions(
        countries.filter(c => c.country?.toLowerCase().startsWith(destSearch.toLowerCase())).slice(0, 6)
      );
      setShowDestDrop(true);
    } else {
      setDestSuggestions([]);
      setShowDestDrop(false);
    }
  }, [destSearch, countries]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = e => {
      if (natRef.current  && !natRef.current.contains(e.target))  setShowNatDrop(false);
      if (destRef.current && !destRef.current.contains(e.target)) setShowDestDrop(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleCheck = () => {
    if (selectedNat && selectedDest) {
      window.location.href = buildEvisaSlug(createSlug(selectedNat), createSlug(selectedDest));
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 max-w-3xl shadow-2xl">
      <p className="text-xs font-black uppercase tracking-widest text-black/30 mb-5">
        🔍 Check Your e-Visa Eligibility
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-5">
        {/* Nationality selector */}
        <div ref={natRef} className="relative">
          <label className="block text-[10px] font-black uppercase tracking-widest text-black/40 mb-2">
            Your Nationality / Passport
          </label>
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f5c800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <input
              type="text"
              placeholder="e.g. Nigeria, Ghana, India..."
              className="w-full pl-11 pr-10 py-4 rounded-2xl text-sm font-semibold outline-none"
              style={{ background: "#f8f8f8", border: "1.5px solid rgba(0,0,0,0.06)", color: "black" }}
              value={natSearch}
              onChange={e => { setNatSearch(e.target.value); setSelectedNat(""); }}
              onFocus={() => natSuggestions.length > 0 && setShowNatDrop(true)}
              autoComplete="off"
              aria-label="Select your nationality"
            />
            {natSearch && (
              <button
                onClick={() => { setNatSearch(""); setSelectedNat(""); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full text-black/30 hover:text-black text-sm font-bold"
              >✕</button>
            )}
          </div>
          {showNatDrop && natSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 rounded-2xl overflow-hidden z-50 shadow-2xl bg-white border border-[#f5c800]/30">
              {natSuggestions.map((c, i) => (
                <button
                  key={i}
                  className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-50 transition text-left"
                  onClick={() => { setSelectedNat(c.country); setNatSearch(c.country); setShowNatDrop(false); }}
                >
                  {c.flag && <img src={c.flag} alt="" className="w-8 h-5 object-cover rounded" />}
                  <span className="text-sm font-bold text-black">{c.country}</span>
                  <span className="ml-auto text-[10px] font-black text-[#f5c800]">SELECT</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Destination selector */}
        <div ref={destRef} className="relative">
          <label className="block text-[10px] font-black uppercase tracking-widest text-black/40 mb-2">
            Destination Country
          </label>
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f5c800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <input
              type="text"
              placeholder="e.g. Turkey, UAE, Kenya..."
              className="w-full pl-11 pr-10 py-4 rounded-2xl text-sm font-semibold outline-none"
              style={{ background: "#f8f8f8", border: "1.5px solid rgba(0,0,0,0.06)", color: "black" }}
              value={destSearch}
              onChange={e => { setDestSearch(e.target.value); setSelectedDest(""); }}
              onFocus={() => destSuggestions.length > 0 && setShowDestDrop(true)}
              autoComplete="off"
              aria-label="Select destination country"
            />
            {destSearch && (
              <button
                onClick={() => { setDestSearch(""); setSelectedDest(""); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full text-black/30 hover:text-black text-sm font-bold"
              >✕</button>
            )}
          </div>
          {showDestDrop && destSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 rounded-2xl overflow-hidden z-50 shadow-2xl bg-white border border-[#f5c800]/30">
              {destSuggestions.map((c, i) => (
                <button
                  key={i}
                  className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-50 transition text-left"
                  onClick={() => { setSelectedDest(c.country); setDestSearch(c.country); setShowDestDrop(false); }}
                >
                  {c.flag && <img src={c.flag} alt="" className="w-8 h-5 object-cover rounded" />}
                  <span className="text-sm font-bold text-black">{c.country}</span>
                  <span className="ml-auto text-[10px] font-black text-[#f5c800]">SELECT</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        onClick={handleCheck}
        disabled={!selectedNat || !selectedDest}
        className="w-full py-4 rounded-2xl font-black text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        style={{
          background: selectedNat && selectedDest ? "#f5c800" : "#eee",
          color: selectedNat && selectedDest ? "#000" : "#999",
        }}
      >
        {selectedNat && selectedDest
          ? `Check ${selectedNat} e-Visa Requirements for ${selectedDest} →`
          : "Select Nationality & Destination to Check e-Visa Requirements"}
      </button>

      <div className="flex flex-wrap gap-2 mt-4">
        {["⚡ Instant Results", "📋 2026 Requirements", "🔒 Official Data Only", "💬 Expert Support"].map(b => (
          <span key={b} className="text-[10px] font-bold text-black/40 bg-gray-50 border border-black/5 px-3 py-1.5 rounded-full">
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}