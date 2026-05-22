// components/StudySearch.jsx
"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, Clock, ArrowRight, X } from "lucide-react";
import countries from "@/app/data/countries.json";
import { createSlug } from "@/app/lib/utils";

const RECENT_KEY = "study_recents";
const RECENT_MAX = 5;

export default function StudySearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [recents, setRecents] = useState([]);
  const wrapRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    try {
      setRecents(JSON.parse(localStorage.getItem(RECENT_KEY) || "[]"));
    } catch {}
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const saveRecent = (name) => {
    const updated = [name, ...recents.filter(n => n !== name)].slice(0, RECENT_MAX);
    setRecents(updated);
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(updated)); } catch {}
    setOpen(false);
    setQuery("");
  };

  const filtered = query.trim()
    ? countries.filter(c =>
        c.country.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 7)
    : [];

  const recentCountries = recents
    .map(name => countries.find(c => c.country === name))
    .filter(Boolean);

  // Always show dropdown when open — either recents or search results or empty state
  const showDropdown = open;

  const highlight = (text) => {
    if (!query) return text;
    const i = text.toLowerCase().indexOf(query.toLowerCase());
    if (i === -1) return text;
    return (
      <>
        {text.slice(0, i)}
        <strong className="font-black text-purple-700">
          {text.slice(i, i + query.length)}
        </strong>
        {text.slice(i + query.length)}
      </>
    );
  };

  return (
    <div ref={wrapRef} className="relative w-full max-w-2xl">
      {/* Search input */}
      <div className={`flex items-center gap-2 bg-slate-50 border rounded-xl px-3 py-2 transition-colors
        ${open ? "border-purple-400 ring-1 ring-purple-100" : "border-slate-100"}`}>
        <Search size={14} className="text-gray-400 shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setOpen(true)}
          placeholder="Search your study destination..."
          className="flex-1 bg-transparent text-[13px] font-bold outline-none placeholder:font-normal placeholder:text-gray-400"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); inputRef.current?.focus(); }}
            className="text-gray-300 hover:text-gray-500"
          >
            <X size={13} />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute z-50 left-0 right-0 top-full mt-1.5 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden">

          {/* No query — show recents or a prompt */}
          {!query.trim() && (
            recentCountries.length > 0 ? (
              <>
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest px-4 pt-2.5 pb-1">
                  Recent searches
                </p>
                {recentCountries.map(c => (
                  <Link
                    key={c.code + "-r"}
                    href={`/study-abroad/student-visa/${createSlug(c.country)}`}
                    onClick={() => saveRecent(c.country)}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-purple-50 transition-colors border-b border-gray-50 last:border-none"
                  >
                    <Clock size={12} className="text-gray-300 shrink-0" />
                    <img src={c.flag} className="w-5 h-[13px] object-cover rounded-sm border border-slate-100 shrink-0" alt="" />
                    <span className="text-[13px] font-bold text-gray-700 flex-1">{c.country}</span>
                    <ArrowRight size={12} className="text-gray-300" />
                  </Link>
                ))}
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest px-4 pt-2.5 pb-1">
                  All destinations
                </p>
                {countries.slice(0, 5).map(c => (
                  <Link
                    key={c.code + "-all"}
                    href={`/study-abroad/student-visa/${createSlug(c.country)}`}
                    onClick={() => saveRecent(c.country)}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-purple-50 transition-colors border-b border-gray-50 last:border-none"
                  >
                    <img src={c.flag} className="w-5 h-[13px] object-cover rounded-sm border border-slate-100 shrink-0" alt="" />
                    <span className="text-[13px] font-bold text-gray-700 flex-1">{c.country}</span>
                    <ArrowRight size={12} className="text-gray-300" />
                  </Link>
                ))}
              </>
            ) : (
              <>
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest px-4 pt-2.5 pb-1">
                  Popular destinations
                </p>
                {["Canada", "United States", "Australia", "United Kingdom", "Germany"]
                  .map(name => countries.find(c => c.country === name))
                  .filter(Boolean)
                  .map(c => (
                    <Link
                      key={c.code + "-pop"}
                      href={`/study-abroad/student-visa/${createSlug(c.country)}`}
                      onClick={() => saveRecent(c.country)}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-purple-50 transition-colors border-b border-gray-50 last:border-none"
                    >
                      <img src={c.flag} className="w-5 h-[13px] object-cover rounded-sm border border-slate-100 shrink-0" alt="" />
                      <span className="text-[13px] font-bold text-gray-700 flex-1">{c.country}</span>
                      <ArrowRight size={12} className="text-gray-300" />
                    </Link>
                  ))
                }
              </>
            )
          )}

          {/* Has query — show filtered results */}
          {query.trim() && (
            filtered.length === 0
              ? <p className="text-[12px] text-gray-400 px-4 py-3">No countries found</p>
              : filtered.map(c => (
                <Link
                  key={c.code}
                  href={`/study-abroad/student-visa/${createSlug(c.country)}`}
                  onClick={() => saveRecent(c.country)}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-purple-50 transition-colors border-b border-gray-50 last:border-none"
                >
                  <img src={c.flag} className="w-5 h-[13px] object-cover rounded-sm border border-slate-100 shrink-0" alt="" />
                  <span className="text-[13px] font-bold text-gray-700 flex-1">{highlight(c.country)}</span>
                  <ArrowRight size={12} className="text-gray-300" />
                </Link>
              ))
          )}
        </div>
      )}
    </div>
  );
}