"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search, Clock, TrendingUp, Globe, ChevronRight, Zap,
  AlertCircle, CheckCircle2, Timer, Users, Star, ArrowRight, Filter
} from "lucide-react";
import COUNTRIES from "@/app/data/countries.json";

// ── VISA TYPES (with Transit — NO time shown) ─────────────────────────────
const VISA_TYPES = [
  { value: "e-visa",           label: "E-Visa (Online)",         icon: "⚡" },
  { value: "sticker",          label: "Sticker Visa",            icon: "🏷️" },
  { value: "sticker-extended", label: "Sticker (Complex Case)",  icon: "📋" },
  { value: "transit",          label: "Transit Visa",            icon: "🔁" },
];

// ── POPULAR SEARCHES ───────────────────────────────────────────────────────
const POPULAR = [
  { nationality: "Bangladesh", destination: "Canada",               type: "sticker",  searches: "18.4K/mo" },
  { nationality: "Bangladesh", destination: "United States",        type: "sticker",  searches: "14.1K/mo" },
  { nationality: "Bangladesh", destination: "United Kingdom",       type: "sticker",  searches: "12.8K/mo" },
  { nationality: "India",      destination: "Canada",               type: "sticker",  searches: "9.6K/mo"  },
  { nationality: "Bangladesh", destination: "Schengen",             type: "sticker",  searches: "8.3K/mo"  },
  { nationality: "Pakistan",   destination: "United Arab Emirates", type: "e-visa",   searches: "7.1K/mo"  },
  { nationality: "Nigeria",    destination: "United Kingdom",       type: "sticker",  searches: "6.9K/mo"  },
  { nationality: "Bangladesh", destination: "Australia",            type: "sticker",  searches: "5.7K/mo"  },
  { nationality: "Bangladesh", destination: "Germany",              type: "sticker",  searches: "4.9K/mo"  },
  { nationality: "Bangladesh", destination: "United Arab Emirates", type: "transit",  searches: "4.1K/mo"  },
];

// ── STATS ─────────────────────────────────────────────────────────────────
const STATS = [
  { label: "Countries Covered",  value: "195+",  icon: Globe   },
  { label: "Processing Times",   value: "1,200+",icon: Clock   },
  { label: "Monthly Users",      value: "42K+",  icon: Users   },
  { label: "Avg. Accuracy",      value: "94%",   icon: Star    },
];

function makeSlug(nationality, destination, type) {
  const nat  = nationality.toLowerCase().replace(/\s+/g, "-");
  const dest = destination.toLowerCase().replace(/\s+/g, "-");
  return `${nat}-national-visa-processing-time-for-${dest}`;
}

// ── COUNTRY AUTOCOMPLETE ───────────────────────────────────────────────────
function CountrySelect({ label, value, onChange, placeholder }) {
  const [open,  setOpen]  = useState(false);
  const [query, setQuery] = useState(value || "");
  const ref = useRef(null);

  useEffect(() => {
    const fn = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const filtered = useMemo(() => {
    if (!query) return COUNTRIES.slice(0, 8);
    return COUNTRIES.filter(c =>
      c.country.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);
  }, [query]);

  const select = (c) => { onChange(c.country); setQuery(c.country); setOpen(false); };

  return (
    <div ref={ref} className="relative">
      <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{label}</label>
      <div className="relative">
        <Globe size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        <input
          className="w-full pl-10 pr-4 py-4 bg-white border-2 border-slate-100 rounded-2xl text-sm font-semibold text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-[#005a31] transition-all"
          placeholder={placeholder}
          value={query}
          onChange={e => { setQuery(e.target.value); onChange(""); setOpen(true); }}
          onFocus={() => setOpen(true)}
        />
      </div>
      {open && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden">
          {filtered.length === 0 && (
            <div className="px-4 py-3 text-sm text-slate-400">No country found</div>
          )}
          {filtered.map(c => (
            <button
              key={c.code}
              onMouseDown={() => select(c)}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-left"
            >
              <img src={c.flag} alt="" className="w-5 h-4 object-cover rounded-sm shrink-0" />
              <span className="text-sm font-semibold text-slate-800">{c.country}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── VISA TYPE SELECT (dropdown, no time shown) ────────────────────────────
function VisaTypeSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const fn = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const selected = VISA_TYPES.find(v => v.value === value);

  return (
    <div ref={ref} className="relative">
      <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Visa Type</label>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-4 bg-white border-2 border-slate-100 hover:border-[#005a31] rounded-2xl text-sm text-left transition-all outline-none"
      >
        {selected
          ? <><span className="text-lg">{selected.icon}</span><span className="font-bold text-slate-800 flex-1">{selected.label}</span></>
          : <span className="text-slate-300 flex-1 font-semibold">Select visa type…</span>
        }
        <svg className={`w-4 h-4 text-slate-400 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden">
          {VISA_TYPES.map(v => (
            <button
              key={v.value}
              onMouseDown={() => { onChange(v.value); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm hover:bg-slate-50 transition-colors
                ${value === v.value ? "bg-[#005a31]/5 text-[#005a31] font-bold" : "text-slate-700 font-semibold"}`}
            >
              <span className="text-lg">{v.icon}</span>
              {v.label}
              {value === v.value && <span className="ml-auto text-[#005a31] font-bold text-xs">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── MAIN PAGE COMPONENT ───────────────────────────────────────────────────
export default function VisaProcessingTimeTrackerClient() {
  const router = useRouter();
  const [nationality, setNationality] = useState("");
  const [destination, setDestination] = useState("");
  const [visaType,    setVisaType]    = useState("");
  const [error,       setError]       = useState("");

  const handleCheck = () => {
    if (!nationality || !destination || !visaType) {
      setError("Please fill in all fields to continue.");
      return;
    }
    setError("");
    const slug = makeSlug(nationality, destination, visaType);
    router.push(`/travel-resources/visa-processing-time-tracker/${slug}?type=${visaType}`);
  };

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-white pt-24 pb-20 px-6 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#005a31]/4 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/8 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }} />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#005a31]/8 border border-[#005a31]/15 px-4 py-2 rounded-full mb-6">
              <Timer size={14} className="text-[#005a31]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#005a31]">Real-Time Processing Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#004d2c] leading-[0.88] tracking-tighter mb-6">
              Visa Processing<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #004d2c" }}>Time Tracker.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Find out exactly how long your visa will take — by nationality, destination, and visa type.
              Covers E-Visa, Sticker, Transit & complex cases. Used by{" "}
              <strong className="text-slate-800">42,000+ travelers</strong> every month.
            </p>
          </div>

          {/* ── SEARCH CARD ───────────────────────────────────────────────── */}
          <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/80 max-w-4xl mx-auto">
            <h2 className="text-xl font-black text-slate-800 mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-amber-400 rounded-xl flex items-center justify-center">
                <Search size={16} className="text-[#004d2c]" />
              </div>
              Check Your Visa Processing Time
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <CountrySelect
                label="Your Nationality"
                value={nationality}
                onChange={setNationality}
                placeholder="e.g. Bangladesh"
              />
              <CountrySelect
                label="Applying For"
                value={destination}
                onChange={setDestination}
                placeholder="e.g. Canada"
              />
              <VisaTypeSelect value={visaType} onChange={setVisaType} />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-600 text-sm font-semibold mb-4">
                <AlertCircle size={16} /> {error}
              </div>
            )}

            <button
              onClick={handleCheck}
              className="w-full py-5 bg-amber-400 hover:bg-[#004d2c] text-[#004d2c] hover:text-white font-black text-lg rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98] shadow-lg shadow-amber-200"
            >
              <Timer size={22} />
              Check Processing Time
              <ArrowRight size={20} />
            </button>

            <p className="text-center text-xs text-slate-400 mt-4 font-medium">
              Free · No signup required · Updated monthly
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────────────── */}
      <section className="bg-[#004d2c] py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-xl font-black text-white">{value}</div>
                  <div className="text-xs text-green-300/70 font-semibold">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR SEARCHES ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-600 block mb-2">🔥 Trending</span>
              <h2 className="text-3xl font-black text-[#004d2c] tracking-tight">Most Searched Processing Times</h2>
              <p className="text-slate-500 text-sm mt-2 font-medium">Based on real search volume data · Updated weekly</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <TrendingUp size={14} /> Live Data
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {POPULAR.map((p, i) => {
              const slug = makeSlug(p.nationality, p.destination, p.type);
              const type = VISA_TYPES.find(v => v.value === p.type);
              return (
                <Link
                  key={i}
                  href={`/travel-resources/visa-processing-time-tracker/${slug}?type=${p.type}`}
                  className="group flex items-center justify-between p-5 bg-white border-2 border-slate-100 rounded-2xl hover:border-[#005a31] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center font-black text-lg text-slate-400 group-hover:bg-[#005a31] group-hover:text-white transition-colors">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-black text-slate-800 text-sm">{p.nationality} → {p.destination}</div>
                      <div className="text-xs font-bold mt-0.5 text-slate-400">{type?.icon} {type?.label}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full">{p.searches}</span>
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-[#005a31] transition-colors" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-[#004d2c] tracking-tight mb-3">How Visa Processing Time Works</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">Understanding why some visas take hours and others take months</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                color: "bg-blue-500",
                title: "Transit Visa (6–24 Hrs)",
                desc: "For layovers and airport transit. Usually decided the same day or overnight. Required when passing through certain countries even without leaving the airport.",
                tags: ["UK Transit", "UAE Transit", "Germany TATV"],
              },
              {
                icon: Zap,
                color: "bg-amber-400",
                title: "E-Visa (2–4 Days)",
                desc: "Online applications processed through automated systems. Ideal for UAE, Turkey, Sri Lanka, India. Approval emailed directly.",
                tags: ["UAE", "Turkey", "India", "Sri Lanka"],
              },
              {
                icon: Clock,
                color: "bg-[#005a31]",
                title: "Sticker Visa (15–21 Days)",
                desc: "Physical visa stamped in passport. Biometrics, sometimes interview, document verification. Standard for USA, UK, Canada, Schengen.",
                tags: ["USA", "UK", "Canada", "Schengen"],
              },
              {
                icon: AlertCircle,
                color: "bg-slate-800",
                title: "Extended Cases (45–60 Days)",
                desc: "Complex background checks, administrative processing, or peak demand. Can happen for any nationality if additional documents are requested.",
                tags: ["Admin Processing", "Background Check", "High Season"],
              },
            ].map(({ icon: Icon, color, title, desc, tags }) => (
              <div key={title} className="bg-white rounded-[2rem] p-7 border border-slate-100 shadow-sm">
                <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center mb-5`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-base font-black text-slate-800 mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map(t => (
                    <span key={t} className="text-[10px] font-black uppercase tracking-wider bg-slate-50 text-slate-500 px-3 py-1.5 rounded-lg border border-slate-100">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO CONTENT ────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-black text-[#004d2c] mb-4">Visa Processing Time: Complete Guide for 2025</h2>
          <p className="text-slate-600 leading-relaxed mb-6 text-sm">
            Visa processing time varies dramatically depending on your nationality, the destination country, visa type, and
            the current season. Our Visa Processing Time Tracker gives you accurate, up-to-date estimates based on real
            applicant data and official embassy guidelines — so you never miss a travel deadline.
          </p>
          <h3 className="text-xl font-black text-[#004d2c] mb-3">What Affects Visa Processing Time?</h3>
          <ul className="space-y-3 text-slate-600">
            {[
              "Transit visa: 6–24 hours — fastest type, usually same-day decision",
              "E-Visa: 2–4 business days via online automated processing",
              "Sticker visa: 15–21 business days after biometrics and interview",
              "Your nationality and bilateral relations with the destination country",
              "Embassy backlog and seasonal demand (summer & holiday peaks add 2–3 weeks)",
              "Whether biometrics or an in-person interview is required",
              "Application completeness — missing documents cause major delays",
              "Administrative processing (security checks) — unpredictable, 45–60+ days",
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-[#005a31] shrink-0 mt-1 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-black text-[#004d2c] mt-10 mb-3">Transit Visa: When Do You Need One?</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            A transit visa is required when you pass through certain countries even without leaving the airport. Processing
            typically takes 6–24 hours — making it the fastest visa type available. Countries like the UK, Germany (TATV),
            and some GCC nations require transit visas for specific nationalities. Always check with the embassy or your
            airline before booking a connecting flight.
          </p>
        </div>
      </section>

    </div>
  );
}
