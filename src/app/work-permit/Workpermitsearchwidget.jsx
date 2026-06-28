"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Search, Globe, ArrowRight, Clock, CheckCircle, X } from "lucide-react";

// ─── Config ───────────────────────────────────────────────────────────────────
const API_KEY = process.env.NEXT_PUBLIC_EAMMU_API_KEY;
const BASE    = "https://api.eammu.com/api/v1";

// ─── All countries (mirrors work-permit page data) ────────────────────────────
// Add new entries here — they will automatically appear in search + slug pages
const ALL_WORK_PERMIT_COUNTRIES = [
  // Tier 1
  {
    flag: "🇨🇦", country: "Canada", route: "Skilled Work Permit",
    types: ["Express Entry", "LMIA-Backed", "Provincial Nominee", "Open Work Permit"],
    processing: "2–6 months",
    eligibility: "Job offer, NOC skill level, language proof (IELTS/CELPIP), ECA",
    slug: "canada", tier: "tier1", highlight: "Most Popular",
    region: "North America",
  },
  {
    flag: "🇮🇹", country: "Italy", route: "Decreto Flussi",
    types: ["Seasonal Worker", "Non-Seasonal Worker", "Self-Employed", "Highly Skilled"],
    processing: "3–6 months",
    eligibility: "Employer sponsorship, quota availability, clean criminal record",
    slug: "italy", tier: "tier1", highlight: "High Demand",
    region: "Europe",
  },
  {
    flag: "🇵🇹", country: "Portugal", route: "Job Seeker & Work Visa",
    types: ["Job Seeker Visa (120 days)", "Work Residence Permit", "Tech Visa", "Highly Qualified Activity"],
    processing: "2–4 months",
    eligibility: "Proof of qualifications, language aptitude, financial means",
    slug: "portugal", tier: "tier1", highlight: "EU Gateway",
    region: "Europe",
  },
  // Balkans & Eastern Europe
  {
    flag: "🇷🇸", country: "Serbia", route: "Employment Visa",
    types: ["Temporary Work Permit", "Employment Visa"],
    processing: "4–8 weeks",
    eligibility: "Valid employer contract, registered Serbian company",
    slug: "serbia", tier: "balkans",
    region: "Balkans",
  },
  {
    flag: "🇽🇰", country: "Kosovo", route: "Work & Residence Permit",
    types: ["Work Permit", "Residence Permit"],
    processing: "4–10 weeks",
    eligibility: "Work contract, employer registration with Ministry of Labour",
    slug: "kosovo", tier: "balkans",
    region: "Balkans",
  },
  {
    flag: "🇲🇰", country: "North Macedonia", route: "Work & Residence Permit",
    types: ["Work & Residence Permit", "Seasonal Permit"],
    processing: "4–8 weeks",
    eligibility: "Employment contract, qualified profession",
    slug: "north-macedonia", tier: "balkans",
    region: "Balkans",
  },
  {
    flag: "🇲🇪", country: "Montenegro", route: "Temporary Residence",
    types: ["Temporary Residence for Employment", "Work Permit"],
    processing: "6–10 weeks",
    eligibility: "Employer sponsorship, no criminal record, health insurance",
    slug: "montenegro", tier: "balkans",
    region: "Balkans",
  },
  {
    flag: "🇲🇩", country: "Moldova", route: "Employment Visa",
    types: ["Work Permit for Foreigners", "Permanent Employment Visa"],
    processing: "3–6 weeks",
    eligibility: "Employer invitation letter, valid passport, skill documentation",
    slug: "moldova", tier: "balkans",
    region: "Eastern Europe",
  },
  {
    flag: "🇷🇺", country: "Russia", route: "Work Permit",
    types: ["Highly Qualified Specialist Permit", "Standard Work Permit"],
    processing: "4–8 weeks",
    eligibility: "Employer invitation, profession registration, health clearance",
    slug: "russia", tier: "balkans",
    region: "Eastern Europe",
  },
  {
    flag: "🇦🇲", country: "Armenia", route: "Employment Visa",
    types: ["Temporary Residence for Work", "Employment Visa"],
    processing: "3–5 weeks",
    eligibility: "Employment agreement, company registration proof",
    slug: "armenia", tier: "balkans",
    region: "Eastern Europe",
  },
  // Latin America
  {
    flag: "🇧🇷", country: "Brazil", route: "Temporary Work Visa",
    types: ["Temporary Work Visa (VITEM V)", "Permanent Work Visa", "Technical Cooperation Visa"],
    processing: "6–12 weeks",
    eligibility: "Job offer from Brazilian entity, CNPq/MRE approval where applicable",
    slug: "brazil", tier: "latam",
    region: "Latin America",
  },
  {
    flag: "🇲🇽", country: "Mexico", route: "Temporary Resident Visa",
    types: ["Temporary Resident Visa (Work)", "Intra-Company Transfer", "Qualified Professional Permit"],
    processing: "4–8 weeks",
    eligibility: "Employer sponsorship, professional qualifications, income threshold",
    slug: "mexico", tier: "latam",
    region: "Latin America",
  },
];

const REGIONS = ["All", "North America", "Europe", "Balkans", "Eastern Europe", "Latin America"];

// ─── Status config for visa checker result ────────────────────────────────────
const STATUS_META = {
  "visa required":   { color: "#DC2626", light: "#FFF5F5", label: "Visa Required"  },
  "e-visa":          { color: "#2563EB", light: "#EFF6FF", label: "E-Visa"          },
  "visa on arrival": { color: "#059669", light: "#ECFDF5", label: "Visa on Arrival" },
  "eta":             { color: "#7C3AED", light: "#F5F3FF", label: "ETA"             },
  "no admission":    { color: "#B45309", light: "#FFFBEB", label: "No Admission"    },
  "visa free":       { color: "#0891B2", light: "#ECFEFF", label: "Visa Free"       },
};

function resolveStatusMeta(raw) {
  if (!raw) return null;
  const key = String(raw).trim().toLowerCase();
  if (/^\d+$/.test(key)) return { ...STATUS_META["visa free"], label: `Visa-Free · ${key} days` };
  return STATUS_META[key] || STATUS_META[key.replace(/-/g, " ")] || STATUS_META[key.replace(/\s+/g, "-")] || null;
}

// ─── Mini country card for search results ─────────────────────────────────────
function MiniCountryCard({ flag, country, route, types, processing, slug }) {
  return (
    <a
      href={`/work-permit/${slug}`}
      className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-white hover:border-yellow-300 hover:shadow-sm transition-all duration-150 group"
    >
      <span className="text-2xl flex-shrink-0 mt-0.5">{flag}</span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold text-gray-900 text-sm">{country}</span>
          <span className="text-xs text-yellow-600 font-medium">{route}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
          <Clock className="w-3 h-3 flex-shrink-0" />
          <span>{processing}</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {types.slice(0, 2).map((t) => (
            <span key={t} className="text-xs bg-gray-50 text-gray-600 border border-gray-100 px-2 py-0.5 rounded-full">
              {t}
            </span>
          ))}
          {types.length > 2 && (
            <span className="text-xs text-gray-400">+{types.length - 2} more</span>
          )}
        </div>
      </div>
      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-yellow-500 flex-shrink-0 mt-1 transition-colors" />
    </a>
  );
}

// ─── Visa Checker Sub-widget ──────────────────────────────────────────────────
function CountryAutocomplete({ label, placeholder, value, onChange, excludeCode }) {
  const [query,       setQuery]       = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [open,        setOpen]        = useState(false);
  const [busy,        setBusy]        = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  useEffect(() => {
    if (query.length < 1) { setSuggestions([]); setOpen(false); return; }
    const t = setTimeout(async () => {
      setBusy(true);
      try {
        const r = await fetch(`${BASE}/suggest?q=${encodeURIComponent(query)}&api_key=${API_KEY}`);
        const d = await r.json();
        const list = (d.suggestions || []).filter((s) => s.code !== excludeCode);
        setSuggestions(list);
        setOpen(list.length > 0);
      } catch { setSuggestions([]); }
      finally { setBusy(false); }
    }, 220);
    return () => clearTimeout(t);
  }, [query, excludeCode]);

  const pick  = (s) => { onChange(s); setQuery(""); setOpen(false); };
  const clear = ()  => { onChange(null); setQuery(""); };

  return (
    <div ref={ref} className="relative">
      <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{label}</label>
      <div className={`flex items-center gap-2 px-3.5 rounded-xl border-2 transition-colors duration-150 min-h-[50px] ${open || value ? "border-yellow-400 bg-white" : "border-gray-200 bg-gray-50"}`}>
        {value?.flag
          ? <img src={value.flag} alt="" className="w-6 h-4 object-cover rounded-sm flex-shrink-0" />
          : <Globe className="w-5 h-5 text-gray-300 flex-shrink-0" />
        }
        <input
          type="text"
          className="flex-1 py-3 bg-transparent text-sm text-gray-900 outline-none border-none min-w-0"
          placeholder={placeholder}
          value={value ? value.name : query}
          onChange={(e) => { if (value) clear(); setQuery(e.target.value); }}
          autoComplete="off"
          spellCheck={false}
        />
        {busy && <div className="w-4 h-4 border-2 border-gray-200 border-t-yellow-400 rounded-full animate-spin flex-shrink-0" />}
        {value && (
          <button onClick={clear} className="text-gray-400 hover:text-gray-600 text-xl leading-none flex-shrink-0" aria-label="Clear">×</button>
        )}
      </div>
      {open && suggestions.length > 0 && (
        <ul className="absolute top-full mt-1.5 left-0 right-0 bg-white border border-gray-100 rounded-xl shadow-lg z-50 max-h-56 overflow-y-auto py-1.5 list-none m-0 p-0">
          {suggestions.map((s) => (
            <li
              key={s.code}
              onMouseDown={(e) => { e.preventDefault(); pick(s); }}
              className="flex items-center gap-2.5 px-3.5 py-2.5 cursor-pointer text-sm text-gray-700 hover:bg-gray-50"
            >
              {s.flag && <img src={s.flag} alt="" className="w-5 h-3.5 object-cover rounded-sm flex-shrink-0" />}
              <span>{s.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function VisaCheckerWidget() {
  const [passport,    setPassport]    = useState(null);
  const [destination, setDestination] = useState(null);
  const [result,      setResult]      = useState(null);
  const [loading,     setLoading]     = useState(false);
  const [error,       setError]       = useState("");

  const canCheck = passport && destination;

  const check = useCallback(async () => {
    if (!passport || !destination) return;
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const r = await fetch(`${BASE}/passport?from=${encodeURIComponent(passport.name)}&to=${encodeURIComponent(destination.name)}&api_key=${API_KEY}`);
      if (!r.ok) throw new Error();
      const data = await r.json();
      setResult(data);
    } catch {
      setError("Could not fetch visa data. Please try again or contact us.");
    } finally {
      setLoading(false);
    }
  }, [passport, destination]);

  const meta = result ? resolveStatusMeta(result.visa_status) : null;

  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Quick Visa Check</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <CountryAutocomplete
          label="Your Passport"
          placeholder="Your nationality…"
          value={passport}
          onChange={setPassport}
          excludeCode={destination?.code}
        />
        <CountryAutocomplete
          label="Destination"
          placeholder="Where are you going?"
          value={destination}
          onChange={setDestination}
          excludeCode={passport?.code}
        />
      </div>

      <button
        onClick={check}
        disabled={!canCheck || loading}
        className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-colors duration-150 ${
          canCheck && !loading
            ? "bg-yellow-400 hover:bg-yellow-300 text-gray-950 cursor-pointer"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        {loading
          ? <><div className="w-4 h-4 border-2 border-gray-400 border-t-gray-700 rounded-full animate-spin" />Checking…</>
          : "Check Visa Requirements →"
        }
      </button>

      {error && (
        <div className="mt-3 p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs">{error}</div>
      )}

      {result && meta && (
        <div
          className="mt-4 rounded-xl border-2 p-4 flex items-center justify-between gap-4 animate-[fadeUp_0.25s_ease]"
          style={{ borderColor: meta.color, background: meta.light }}
        >
          <div className="flex items-center gap-3 min-w-0">
            {result.from?.flag && <img src={result.from.flag} alt={result.from.name} className="w-8 h-6 object-cover rounded shadow-sm flex-shrink-0" />}
            <span className="text-xs text-gray-500 flex-shrink-0">→</span>
            {result.to?.flag && <img src={result.to.flag} alt={result.to.name} className="w-8 h-6 object-cover rounded shadow-sm flex-shrink-0" />}
            <div className="min-w-0">
              <p className="text-xs text-gray-500 truncate">{result.from?.name} → {result.to?.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span
              className="text-xs font-bold px-3 py-1.5 rounded-full text-white whitespace-nowrap"
              style={{ background: meta.color }}
            >
              {meta.label}
            </span>
            {result.visa_guide_url && (
              <a
                href={result.visa_guide_url}
                className="text-xs font-semibold underline underline-offset-2 whitespace-nowrap"
                style={{ color: meta.color }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Guide →
              </a>
            )}
          </div>
        </div>
      )}

      <style>{`@keyframes fadeUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function WorkPermitSearchWidget() {
  const [query,         setQuery]         = useState("");
  const [activeRegion,  setActiveRegion]  = useState("All");
  const [showChecker,   setShowChecker]   = useState(false);

  const filtered = ALL_WORK_PERMIT_COUNTRIES.filter((c) => {
    const matchesQuery = query.length === 0
      || c.country.toLowerCase().includes(query.toLowerCase())
      || c.route.toLowerCase().includes(query.toLowerCase())
      || c.types.some((t) => t.toLowerCase().includes(query.toLowerCase()));
    const matchesRegion = activeRegion === "All" || c.region === activeRegion;
    return matchesQuery && matchesRegion;
  });

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10" aria-label="Work permit search">

      {/* ── Search bar + Visa checker toggle ── */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search country, route, or permit type…"
            className="w-full pl-10 pr-10 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-150"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <button
          onClick={() => setShowChecker((v) => !v)}
          className={`flex items-center gap-2 px-5 py-3.5 rounded-xl border-2 font-semibold text-sm transition-colors duration-150 whitespace-nowrap ${
            showChecker
              ? "border-yellow-400 bg-yellow-50 text-yellow-700"
              : "border-gray-200 bg-white text-gray-600 hover:border-yellow-300"
          }`}
        >
          <Globe className="w-4 h-4" />
          Visa Checker
        </button>
      </div>

      {/* ── Visa checker panel ── */}
      {showChecker && (
        <div className="mb-6">
          <VisaCheckerWidget />
        </div>
      )}

      {/* ── Region filter pills ── */}
      <div className="flex flex-wrap gap-2 mb-6">
        {REGIONS.map((r) => (
          <button
            key={r}
            onClick={() => setActiveRegion(r)}
            className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors duration-150 ${
              activeRegion === r
                ? "bg-yellow-400 border-yellow-400 text-gray-950"
                : "bg-white border-gray-200 text-gray-600 hover:border-yellow-300"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* ── Results ── */}
      {filtered.length === 0 ? (
        <div className="text-center py-14 text-gray-400">
          <Search className="w-8 h-8 mx-auto mb-3 opacity-40" />
          <p className="font-medium">No countries match &ldquo;{query}&rdquo;</p>
          <p className="text-sm mt-1">Try a different keyword or <button onClick={() => { setQuery(""); setActiveRegion("All"); }} className="text-yellow-600 underline">clear filters</button></p>
        </div>
      ) : (
        <>
          <p className="text-xs text-gray-400 mb-4">
            {filtered.length} countr{filtered.length === 1 ? "y" : "ies"} found
            {activeRegion !== "All" ? ` in ${activeRegion}` : ""}
            {query ? ` matching "${query}"` : ""}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map((c) => (
              <MiniCountryCard key={c.slug} {...c} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

// Re-export country list so slug pages can import it
export { ALL_WORK_PERMIT_COUNTRIES };