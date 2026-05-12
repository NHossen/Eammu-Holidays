"use client";
import { useState, useRef, useEffect } from "react";
import { VISA_TYPES } from "@/app/data/data.js";

export default function VisaTypeSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const fn = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const selected = VISA_TYPES.find((v) => v.value === value);

  return (
    <div ref={ref} className="relative">
      <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
        Visa Type
      </label>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-4 py-4 bg-white border-2 border-slate-100 hover:border-[#005a31] rounded-2xl text-sm text-left transition-all outline-none"
      >
        {selected ? (
          <>
            <span className="text-lg">{selected.icon}</span>
            <span className="font-bold text-slate-800 flex-1">{selected.label}</span>
          </>
        ) : (
          <span className="text-slate-300 flex-1 font-semibold">Select visa type…</span>
        )}
        <svg
          className={`w-4 h-4 text-slate-400 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden">
          {VISA_TYPES.map((v) => (
            <button
              key={v.value}
              onMouseDown={() => {
                onChange(v.value);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm hover:bg-slate-50 transition-colors ${
                value === v.value
                  ? "bg-[#005a31]/5 text-[#005a31] font-bold"
                  : "text-slate-700 font-semibold"
              }`}
            >
              <span className="text-lg">{v.icon}</span>
              {v.label}
              {value === v.value && (
                <span className="ml-auto text-[#005a31] font-bold text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}