"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, GraduationCap, Clock, X, Globe } from "lucide-react";
import COUNTRIES from "@/app/data/countries.json";

const RECENT_KEY = "scholarship_history";
const MAX_RECENT = 4;

const toSlug = (name) => name?.toLowerCase().replace(/\s+/g, "-") ?? "";

export default function ScholarshipSearch() {
  const [query, setQuery] = useState("");
  const [dropOpen, setDropOpen] = useState(false);
  const [recent, setRecent] = useState([]);
  const wrapRef = useRef(null);

  // Load Recent Searches
  useEffect(() => {
    const saved = localStorage.getItem(RECENT_KEY);
    if (saved) setRecent(JSON.parse(saved));
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setDropOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (country) => {
    const newRecent = [country, ...recent.filter((c) => c.country !== country.country)].slice(0, MAX_RECENT);
    setRecent(newRecent);
    localStorage.setItem(RECENT_KEY, JSON.stringify(newRecent));
    setDropOpen(false);
    setQuery("");
  };

  const filtered = query.length > 0 
    ? COUNTRIES.filter(c => c.country.toLowerCase().includes(query.toLowerCase())).slice(0, 6)
    : [];

  // Top Countries: Slicing from our dataset (Dynamic)
  const topCountries = COUNTRIES.filter(c => 
    ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Netherlands"].includes(c.country)
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white border-2 border-gray-100 rounded-3xl shadow-xl shadow-gray-100/80 p-5 md:p-6">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <GraduationCap size={20} className="text-white" />
          </div>
          <div>
            <h2 className="text-lg font-black text-gray-800 tracking-tight">Scholarship Finder</h2>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Find fully funded programs by country</p>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative mb-8" ref={wrapRef}>
          <div className="relative flex items-center">
            <Search size={18} className="absolute left-4 text-gray-400" />
            <input
              className="w-full pl-11 pr-4 py-4 bg-gray-50 border-2 border-gray-100 focus:border-amber-400 rounded-2xl text-sm font-semibold text-gray-800 outline-none transition-all"
              placeholder="Search by country (e.g. Canada)..."
              value={query}
              onChange={(e) => { setQuery(e.target.value); setDropOpen(true); }}
              onFocus={() => setDropOpen(true)}
            />
          </div>

          {/* Dropdown */}
          {dropOpen && query.length > 0 && (
            <div className="absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden">
              {filtered.length > 0 ? filtered.map(c => (
                <Link
                  key={c.code}
                  href={`/scholarships/${toSlug(c.country)}`}
                  onClick={() => handleSelect(c)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-amber-50 transition-colors"
                >
                  <img src={c.flag} width={24} height={16} className="rounded-sm object-cover" alt="" />
                  <span className="text-sm font-semibold text-gray-700">{c.country}</span>
                </Link>
              )) : <p className="px-4 py-3 text-sm text-gray-400">No results found</p>}
            </div>
          )}
        </div>

        {/* Top Countries Grid */}
        <div className="mb-8">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 px-1">Popular Destinations</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {topCountries.map((c) => (
                <Link
                key={c.code}
                href={`/scholarships/${toSlug(c.country)}`}
                onClick={() => handleSelect(c)}
                className="flex items-center gap-2 px-3 py-3 border-2 border-gray-100 rounded-xl hover:border-amber-200 hover:bg-amber-50 transition-all text-left"
                >
                <img src={c.flag} width={20} height={14} className="rounded-sm flex-shrink-0" alt="" />
                <span className="text-xs font-bold text-gray-700 truncate">{c.country}</span>
                </Link>
            ))}
            </div>
        </div>

        {/* Recent Searches */}
        {recent.length > 0 && (
            <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3 px-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-1.5">
                        <Clock size={12} /> Recently Searched
                    </p>
                    <button onClick={() => { setRecent([]); localStorage.removeItem(RECENT_KEY); }} className="text-[10px] font-bold text-gray-300 hover:text-red-400 transition-colors">Clear</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {recent.map((c) => (
                        <Link 
                            key={c.code} 
                            href={`/scholarships/${toSlug(c.country)}`}
                            className="flex items-center gap-3 px-3 py-2.5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                            <img src={c.flag} width={20} height={14} className="rounded-sm" alt="" />
                            <span className="text-xs font-semibold text-gray-700 flex-1">{c.country}</span>
                            <Globe size={12} className="text-gray-300" />
                        </Link>
                    ))}
                </div>
            </div>
        )}
      </div>
    </div>
  );
}