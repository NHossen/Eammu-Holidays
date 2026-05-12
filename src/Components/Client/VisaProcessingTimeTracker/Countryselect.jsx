"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import COUNTRIES from "@/app/data/countries.json";

export default function CountrySelect({ label, value, onChange, placeholder }) {
  const [open,  setOpen]  = useState(false);
  const [query, setQuery] = useState(value || "");
  const ref = useRef(null);

  useEffect(() => {
    const fn = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const filtered = useMemo(() => {
    if (!query) return COUNTRIES.slice(0, 8);
    return COUNTRIES.filter((c) =>
      c.country.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);
  }, [query]);

  const select = (c) => {
    onChange(c.country);
    setQuery(c.country);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
        {label}
      </label>
      <div className="relative">
        <Globe
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />
        <input
          className="w-full pl-10 pr-4 py-4 bg-white border-2 border-slate-100 rounded-2xl text-sm font-semibold text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-[#005a31] transition-all"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange("");
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
        />
      </div>
      {open && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden">
          {filtered.length === 0 && (
            <div className="px-4 py-3 text-sm text-slate-400">No country found</div>
          )}
          {filtered.map((c) => (
            <button
              key={c.code}
              onMouseDown={() => select(c)}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-left"
            >
              <img
                src={c.flag}
                alt=""
                className="w-5 h-4 object-cover rounded-sm shrink-0"
              />
              <span className="text-sm font-semibold text-slate-800">{c.country}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}