"use client";
import { useState, useEffect, useRef } from "react";
import countries from "@/app/data/countries.json";
import { useRouter } from "next/navigation";
import { createSlug } from "@/app/lib/utils";

export default function VisaSearch() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (query.length > 0) {
      const filtered = countries
        .filter((c) => c.country.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 6);
      setSuggestions(filtered);
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [query]);

  const handleSelect = (countryName) => {
    setQuery(countryName);
    setIsOpen(false);
    router.push(`/visa/${createSlug(countryName)}-visa`);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 font-sans mb-6" ref={searchRef}>
      <div className="relative group">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row items-stretch bg-white/80 backdrop-blur-md rounded-[2rem] shadow-[0_22px_70px_4px_rgba(0,0,0,0.06)] border border-white transition-all duration-500 hover:shadow-[0_22px_80px_4px_rgba(0,0,0,0.1)] overflow-hidden">
          
          {/* Country Selection Area */}
          <div className="relative flex-1 flex flex-col px-8 py-6 cursor-text transition-colors hover:bg-gray-50/50">
            <span className="text-[11px] font-bold text-blue-600/70 uppercase tracking-[0.15em] mb-1">
              Destination
            </span>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="w-full bg-transparent text-2xl font-semibold text-slate-900 outline-none placeholder:text-slate-300"
                placeholder="Where to travel?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => query.length > 0 && setIsOpen(true)}
              />
            </div>
          </div>

          {/* Divider Line (Desktop Only) */}
          <div className="hidden md:block w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent my-6" />

          {/* Visa Type Area (Static) */}
          <div className="flex-1 flex flex-col px-8 py-6 bg-slate-50/30">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-1">
              Visa Category
            </span>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-200/50 rounded-lg text-slate-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span className="text-2xl font-semibold text-slate-400">Tourist Visa</span>
              </div>
              <div className="bg-green-100 px-3 py-1 rounded-full text-[10px] font-black text-green-700 uppercase tracking-tighter shadow-sm">
                Instant
              </div>
            </div>
          </div>
        </div>

        {/* Suggestion Menu (Floating Glass Style) */}
        {isOpen && suggestions.length > 0 && (
          <div className="absolute top-full left-0 mt-4 w-full md:w-2/3 bg-white backdrop-blur-2xl rounded-[1.5rem] shadow-[0_30px_90px_rgba(0,0,0,0.12)] border border-white/50 z-[100] overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <div className="p-3">
              {suggestions.map((c) => (
                <button
                  key={c.code}
                  onClick={() => handleSelect(c.country)}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-white group rounded-[1rem] transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                        <img src={c.flag} alt="" className="w-10 h-7 object-cover rounded shadow-sm group-hover:scale-110 transition-transform" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-slate-800 group-hover:text-green-800 transition-colors text-lg">
                        {c.country}
                      </span>
                      <span className="text-xs text-slate-400 group-hover:text-green-800">
                        View document checklist
                      </span>
                    </div>
                  </div>
                  <div className="opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
            <div className="bg-slate-50/80 px-6 py-3 border-t border-gray-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Live Updates from Embassies</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}