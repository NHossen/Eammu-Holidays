"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import countries from "@/app/data/countries.json";
import { useRouter } from "next/navigation";
import { createSlug } from "@/app/lib/utils";

const TRENDING = ["Japan", "Canada", "United Kingdom", "Australia", "Germany", "France"];

export default function VisaSearch({
  placeholder = "Search destination country...",
  className = "",
  variant = "default", // "default" | "compact" | "hero"
}) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const router = useRouter();

  // Filter suggestions
  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = countries
        .filter(c => c.country?.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 7);
      setSuggestions(filtered);
      setIsOpen(true);
      setActiveIndex(-1);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  // Click outside to close
  useEffect(() => {
    const handler = e => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setFocused(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = useCallback((countryName) => {
    setQuery(countryName);
    setIsOpen(false);
    setFocused(false);
    router.push(`/visa/${createSlug(countryName)}-visa`);
  }, [router]);

  const handleKeyDown = e => {
    if (!isOpen) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleSelect(suggestions[activeIndex].country);
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setFocused(false);
      inputRef.current?.blur();
    }
  };

  const handleSubmit = () => {
    if (suggestions.length > 0) handleSelect(suggestions[0].country);
    else if (query.trim()) {
      const exact = countries.find(c => c.country.toLowerCase() === query.toLowerCase());
      if (exact) handleSelect(exact.country);
    }
  };

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 ${className}`} ref={containerRef}>
      <div className="relative">

        {/* ── MAIN SEARCH BAR ─────────────────────────────────────────────── */}
        <div className={`
          flex items-stretch bg-white rounded-[1.8rem] transition-all duration-300 overflow-hidden
          ${focused
            ? "shadow-[0_0_0_3px_rgba(34,197,94,0.2),0_24px_60px_rgba(0,0,0,0.12)] border-2 border-green-400"
            : "shadow-[0_8px_40px_rgba(0,0,0,0.08)] border-2 border-gray-100 hover:border-gray-200 hover:shadow-[0_12px_50px_rgba(0,0,0,0.1)]"
          }
        `}>

          {/* Flag preview */}
          <div className="flex items-center pl-5 pr-2 shrink-0">
            {query && suggestions.length > 0 && suggestions[0]?.flag ? (
              <img
                src={suggestions[0].flag}
                alt=""
                className="w-9 h-6 object-cover rounded-lg shadow-sm border border-gray-100"
              />
            ) : (
              <div className="w-9 h-6 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            )}
          </div>

          {/* Input */}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            autoComplete="off"
            className="flex-1 py-5 px-3 text-lg font-semibold text-gray-800 placeholder:text-gray-300 bg-transparent outline-none min-w-0"
          />

          {/* Clear button */}
          {query && (
            <button
              onClick={() => { setQuery(""); setSuggestions([]); setIsOpen(false); inputRef.current?.focus(); }}
              className="flex items-center justify-center px-3 text-gray-300 hover:text-gray-500 transition-colors shrink-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {/* Divider */}
          <div className="w-px bg-gray-100 my-4" />

          {/* Visa type badge (static) */}
          <div className="hidden sm:flex items-center gap-2 px-5 bg-gray-50/80 shrink-0">
            <div className="p-1.5 bg-white rounded-lg shadow-sm">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-wider text-gray-400">Category</p>
              <p className="text-sm font-black text-gray-700">Tourist Visa</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px bg-gray-100 my-4" />

          {/* Search button */}
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-6 md:px-8 bg-green-600 hover:bg-green-700 text-white font-black transition-all duration-200 rounded-r-[calc(1.8rem-2px)] active:scale-[0.98] shrink-0 group"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="hidden md:block text-sm tracking-wide">Search</span>
          </button>
        </div>

        {/* ── SUGGESTIONS DROPDOWN ─────────────────────────────────────────── */}
        {isOpen && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-[1.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.14)] border border-gray-100 z-[200] overflow-hidden">

            {/* Results */}
            <div className="p-2">
              {suggestions.map((c, i) => (
                <button
                  key={c.code}
                  onMouseDown={() => handleSelect(c.country)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-[1rem] transition-all duration-150 group text-left ${
                    activeIndex === i ? "bg-green-50 border border-green-100" : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative shrink-0">
                      <img src={c.flag} alt="" className="w-11 h-7 object-cover rounded-lg shadow-sm" />
                      <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-lg" />
                    </div>
                    <div>
                      <p className={`font-black text-base transition-colors ${activeIndex === i ? "text-green-800" : "text-gray-800 group-hover:text-green-700"}`}>
                        {c.country}
                      </p>
                      <p className="text-xs text-gray-400 font-medium">Tourist Visa Guide</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-black px-3 py-1.5 rounded-full transition-all ${
                    activeIndex === i ? "bg-green-600 text-white" : "bg-gray-100 text-gray-400 group-hover:bg-green-600 group-hover:text-white"
                  }`}>
                    View
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-gray-50 border-t border-gray-100 px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Live Embassy Data · Updated 2026</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold">
                <span className="bg-gray-200 px-1.5 py-0.5 rounded text-[9px] font-black">↑↓</span> navigate
                <span className="bg-gray-200 px-1.5 py-0.5 rounded text-[9px] font-black ml-1">↵</span> select
              </div>
            </div>
          </div>
        )}

        {/* ── EMPTY STATE ───────────────────────────────────────────────────── */}
        {isOpen && query.trim().length > 0 && suggestions.length === 0 && (
          <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-[1.5rem] shadow-xl border border-gray-100 z-[200] p-8 text-center">
            <div className="text-4xl mb-3">🔍</div>
            <p className="font-black text-gray-700 mb-1">No country found for "{query}"</p>
            <p className="text-sm text-gray-400">Try a different spelling or browse all countries below.</p>
          </div>
        )}
      </div>

      {/* ── TRENDING PILLS (shown when not searching) ──────────────────────── */}
      {!query && (
        <div className="flex items-center gap-2 mt-4 flex-wrap px-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 whitespace-nowrap">🔥 Trending:</span>
          {TRENDING.map(name => {
            const c = countries.find(x => x.country === name);
            return (
              <button key={name} onClick={() => handleSelect(name)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:border-green-400 hover:text-green-700 hover:shadow-sm transition-all">
                {c?.flag && <img src={c.flag} className="w-4 h-3 object-cover rounded-sm" alt="" />}
                {name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
