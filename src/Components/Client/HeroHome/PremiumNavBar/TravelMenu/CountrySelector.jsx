// components/CountrySelector.jsx
"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import { Search, Check, Clock, ChevronDown } from "lucide-react";
import countries from "@/app/data/countries.json";

const RECENT_MAX = 4;

export default function CountrySelector({ label, value, onChange, exclude, recentKey }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [recents, setRecents] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(recentKey) || "[]");
    } catch { return []; }
  });
  const ref = useRef(null);
  const inputRef = useRef(null);

  const selected = countries.find(c => c.country.toLowerCase() === value);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return countries
      .filter(c => c.country.toLowerCase() !== exclude)
      .filter(c => !q || c.country.toLowerCase().includes(q));
  }, [query, exclude]);

  const recentCountries = useMemo(() =>
    recents
      .map(name => countries.find(c => c.country === name))
      .filter(Boolean)
      .filter(c => c.country.toLowerCase() !== exclude)
      .slice(0, RECENT_MAX),
    [recents, exclude]
  );

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleOpen = () => {
    setOpen(true);
    setQuery("");
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleSelect = (country) => {
    onChange(country.country.toLowerCase());
    const updated = [country.country, ...recents.filter(n => n !== country.country)].slice(0, RECENT_MAX);
    setRecents(updated);
    try { localStorage.setItem(recentKey, JSON.stringify(updated)); } catch {}
    setOpen(false);
  };

  const highlight = (text, q) => {
    if (!q) return text;
    const i = text.toLowerCase().indexOf(q.toLowerCase());
    if (i === -1) return text;
    return (
      <>
        {text.slice(0, i)}
        <strong className="font-black text-gray-900">{text.slice(i, i + q.length)}</strong>
        {text.slice(i + q.length)}
      </>
    );
  };

  return (
    <div ref={ref} className="flex-1 min-w-0 relative">
      {/* Trigger */}
      <button
        onClick={() => open ? setOpen(false) : handleOpen()}
        className={`w-full bg-slate-50/70 px-3 py-2 rounded-xl border text-left flex items-center gap-3 transition-colors
          ${open ? "border-purple-400 ring-1 ring-purple-200" : "border-slate-100 hover:border-slate-300"}`}
      >
        {selected?.flag
          ? <img src={selected.flag} className="w-7 h-[18px] object-cover rounded-sm border border-slate-200 shrink-0" alt="" />
          : <div className="w-7 h-[18px] rounded-sm bg-slate-200 shrink-0" />
        }
        <div className="flex-1 min-w-0">
          <span className="block text-[8px] font-black uppercase text-slate-400 leading-none mb-0.5">{label}</span>
          <span className="block text-[13px] font-bold text-gray-800 truncate">{selected?.country ?? "Select country"}</span>
        </div>
        <ChevronDown size={13} className={`text-slate-400 transition-transform shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1.5 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden">
          {/* Search input */}
          <div className="flex items-center gap-2 px-3 py-2.5 border-b border-gray-50">
            <Search size={13} className="text-gray-400 shrink-0" />
            <input
              ref={inputRef}
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search country..."
              className="flex-1 bg-transparent text-[13px] font-bold outline-none placeholder:font-normal placeholder:text-gray-400"
            />
            {query && (
              <button onClick={() => setQuery("")} className="text-gray-300 hover:text-gray-500 text-xs">✕</button>
            )}
          </div>

          <div className="max-h-60 overflow-y-auto">
            {/* Recent searches — shown only when no query */}
            {!query && recentCountries.length > 0 && (
              <>
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest px-3 pt-2.5 pb-1">Recent</p>
                {recentCountries.map(c => (
                  <button
                    key={c.code + "-recent"}
                    onClick={() => handleSelect(c)}
                    className="w-full flex items-center gap-3 px-3 py-2 hover:bg-purple-50 transition-colors text-left"
                  >
                    <Clock size={12} className="text-gray-300 shrink-0" />
                    <img src={c.flag} className="w-5 h-[13px] object-cover rounded-sm border border-slate-100 shrink-0" alt="" />
                    <span className="text-[13px] font-bold text-gray-700 flex-1">{c.country}</span>
                    {c.country.toLowerCase() === value && <Check size={12} className="text-purple-500" />}
                  </button>
                ))}
                <div className="mx-3 my-1 border-t border-gray-50" />
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest px-3 pt-1 pb-1">All countries</p>
              </>
            )}

            {/* Results */}
            {filtered.length === 0
              ? <p className="text-[12px] text-gray-400 px-3 py-3">No countries found</p>
              : filtered.map(c => (
                <button
                  key={c.code}
                  onClick={() => handleSelect(c)}
                  className={`w-full flex items-center gap-3 px-3 py-2 hover:bg-purple-50 transition-colors text-left
                    ${c.country.toLowerCase() === value ? "bg-purple-50/60" : ""}`}
                >
                  <img src={c.flag} className="w-5 h-[13px] object-cover rounded-sm border border-slate-100 shrink-0" alt="" />
                  <span className="text-[13px] font-bold text-gray-700 flex-1">{highlight(c.country, query)}</span>
                  {c.country.toLowerCase() === value && <Check size={12} className="text-purple-500" />}
                </button>
              ))
            }
          </div>
        </div>
      )}
    </div>
  );
}