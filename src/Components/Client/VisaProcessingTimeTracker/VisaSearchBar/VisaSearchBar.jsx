"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Globe, ChevronDown, ArrowRight, Timer } from "lucide-react";
import COUNTRIES from "@/app/data/countries.json";

// ── VISA TYPES (no time shown — added Transit) ─────────────────────────────
const VISA_TYPES = [
  { value: "e-visa",             label: "E-Visa (Online)",           icon: "⚡" },
  { value: "sticker",            label: "Sticker Visa",              icon: "🏷️" },
  { value: "sticker-extended",   label: "Sticker (Complex Case)",    icon: "📋" },
  { value: "transit",            label: "Transit Visa",              icon: "🔁" },
];

function makeSlug(nationality, destination, type) {
  const nat  = nationality.toLowerCase().replace(/\s+/g, "-");
  const dest = destination.toLowerCase().replace(/\s+/g, "-");
  return `${nat}-national-visa-processing-time-for-${dest}`;
}

// ── MINI COUNTRY DROPDOWN ─────────────────────────────────────────────────
function CountryPicker({ label, value, onChange, placeholder }) {
  const [open, setOpen]   = useState(false);
  const [query, setQuery] = useState(value?.country || "");
  const ref = useRef(null);

  useEffect(() => {
    const fn = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const filtered = useMemo(() => {
    if (!query) return COUNTRIES.slice(0, 8);
    return COUNTRIES.filter(c => c.country.toLowerCase().includes(query.toLowerCase())).slice(0, 8);
  }, [query]);

  const select = (c) => { onChange(c); setQuery(c.country); setOpen(false); };

  return (
    <div ref={ref} className="relative flex-1 min-w-0">
      <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 px-1">{label}</label>
      <div className="relative">
        {value?.flag
          ? <img src={value.flag} width={20} height={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 object-contain rounded-sm pointer-events-none z-10" alt="" />
          : <Globe size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10" />
        }
        <input
          className="w-full pl-9 pr-4 py-3 bg-white border-2 border-gray-100 hover:border-green-300 focus:border-green-600 rounded-xl text-sm font-semibold text-gray-800 placeholder:text-gray-300 outline-none transition-all"
          placeholder={placeholder}
          value={query}
          onChange={e => { setQuery(e.target.value); onChange(null); setOpen(true); }}
          onFocus={() => setOpen(true)}
        />
      </div>
      {open && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1.5 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden">
          {filtered.length === 0
            ? <div className="px-4 py-3 text-sm text-gray-400">No country found</div>
            : filtered.map(c => (
              <button
                key={c.code}
                onMouseDown={() => select(c)}
                className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-green-50 text-left transition-colors"
              >
                <img src={c.flag} width={20} height={14} className="object-contain rounded-sm flex-shrink-0" alt="" />
                <span className="text-sm font-semibold text-gray-800">{c.country}</span>
              </button>
            ))
          }
        </div>
      )}
    </div>
  );
}

// ── VISA TYPE DROPDOWN ────────────────────────────────────────────────────
function VisaTypePicker({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const fn = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const selected = VISA_TYPES.find(v => v.value === value);

  return (
    <div ref={ref} className="relative flex-1 min-w-0">
      <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 px-1">Visa Type</label>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-2 px-3.5 py-3 bg-white border-2 border-gray-100 hover:border-green-300 rounded-xl text-sm font-semibold text-left transition-all outline-none"
      >
        {selected
          ? <><span>{selected.icon}</span><span className="text-gray-800 flex-1 truncate">{selected.label}</span></>
          : <span className="text-gray-300 flex-1">Select type…</span>
        }
        <ChevronDown size={14} className={`text-gray-400 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1.5 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden">
          {VISA_TYPES.map(v => (
            <button
              key={v.value}
              onMouseDown={() => { onChange(v.value); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm font-semibold hover:bg-green-50 transition-colors
                ${value === v.value ? "bg-green-50 text-green-800" : "text-gray-700"}`}
            >
              <span className="text-base">{v.icon}</span>
              <span>{v.label}</span>
              {value === v.value && <span className="ml-auto text-green-600 font-bold text-xs">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── MAIN EXPORT ─────────────────────────────────────────────────────────────
// Usage on homepage:
//   import VisaSearchBar from "@/components/VisaSearchBar"
//   <VisaSearchBar />
// ─────────────────────────────────────────────────────────────────────────────
export default function VisaSearchBar() {
  const router = useRouter();
  const [fromCountry, setFromCountry] = useState(null);
  const [toCountry,   setToCountry]   = useState(null);
  const [visaType,    setVisaType]    = useState("");
  const [error,       setError]       = useState("");

  const handleSearch = () => {
    if (!fromCountry || !toCountry || !visaType) {
      setError("Please fill in all three fields.");
      return;
    }
    setError("");
    const slug = makeSlug(fromCountry.country, toCountry.country, visaType);
    router.push(`/travel-resources/visa-processing-time-tracker/${slug}?type=${visaType}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="bg-white border-2 border-gray-100 rounded-3xl shadow-xl shadow-gray-100/80 p-5 md:p-6">

        {/* Label row */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 bg-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
            <Timer size={14} className="text-white" />
          </div>
          <span className="text-sm font-black text-gray-800 tracking-tight">Visa Processing Time Tracker</span>
          <span className="ml-auto text-[10px] font-bold text-gray-400 uppercase tracking-wider hidden sm:block">Free · No signup</span>
        </div>

        {/* Fields Row */}
        <div className="flex flex-col sm:flex-row gap-3 mb-3">
          {/* Divider */}
          <CountryPicker
            label="Your Nationality"
            value={fromCountry}
            onChange={setFromCountry}
            placeholder="e.g. Bangladesh"
          />

          {/* Arrow divider — desktop only */}
          <div className="hidden sm:flex items-end pb-3 flex-shrink-0">
            <ArrowRight size={16} className="text-gray-300" />
          </div>

          <CountryPicker
            label="Applying For"
            value={toCountry}
            onChange={setToCountry}
            placeholder="e.g. Canada"
          />

          <VisaTypePicker value={visaType} onChange={setVisaType} />

          {/* Search Button */}
          <div className="flex-shrink-0 flex flex-col justify-end">
            <div className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-transparent mb-1.5 select-none">.</div>
            <button
              onClick={handleSearch}
              className="w-full sm:w-auto px-6 py-3 bg-green-700 hover:bg-green-800 active:scale-[0.98] text-white font-black text-sm rounded-xl transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-md shadow-green-200"
            >
              <Timer size={15} />
              Check Now
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <p className="text-xs font-bold text-red-500 flex items-center gap-1.5 mt-1">
            <span>⚠️</span> {error}
          </p>
        )}

        {/* Footer hint */}
        <p className="text-[11px] text-gray-400 font-medium mt-1">
          195+ countries · E-Visa, Sticker, Transit & more · Updated monthly
        </p>
      </div>
    </div>
  );
}
