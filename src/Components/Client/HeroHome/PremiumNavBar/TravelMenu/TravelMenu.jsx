"use client";

import React, { useState, useRef, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plane, 
  Globe, 
  GraduationCap, 
  Palmtree, 
  Ticket,
  ChevronRight as ChevronRightIcon,
  Search,
  Clock,
  FileText,
  BookOpen,
  XCircle,
} from 'lucide-react';

import countries from "@/app/data/countries.json";
import { createSlug } from '@/app/lib/utils';
import CountrySelector from './CountrySelector';
import StudySearch from './StudySearch';
import ProcessingCountrySelector from './Processingcountryselector';

// ─── WhatsApp config ──────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "8801631312524"; // +880 1631-312524
const buildWhatsAppLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// Message + button label for each WhatsApp tab (bottom centre button)
const WHATSAPP_CTA = {
  flight: {
    label: "Talk to an Advisor",
    message: [
      "Hello Eammu Holidays, I would like to inquire about flight bookings.",
      "",
      "Route (From → To):",
      "Travel date:",
      "Return date (if round trip):",
      "Passengers:",
      "Preferred airline (or cheapest):",
    ].join("\n"),
  },
  tour: {
    label: "Talk to an Advisor",
    message: [
      "Hello Eammu Holidays, I would like to inquire about tour packages.",
      "",
      "Destination:",
      "Travel month:",
      "Number of travellers:",
      "Budget:",
    ].join("\n"),
  },
  activities: {
    label: "Talk to an Advisor",
    message: [
      "Hello Eammu Holidays, I would like to inquire about things to do and activities.",
      "",
      "City / Country:",
      "Preferred activities:",
      "Date:",
      "Number of people:",
    ].join("\n"),
  },
};

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

// ─── eammu API ────────────────────────────────────────────────────────────────
const EAMMU_KEY  = process.env.NEXT_PUBLIC_EAMMU_API_KEY;
const EAMMU_BASE = "https://api.eammu.com/api/v1";

const VISA_STATUS_META = {
  "visa required":   { color: "#DC2626", light: "#FFF5F5", label: "Visa Required",   slug: "visa-required"   },
  "e-visa":          { color: "#2563EB", light: "#EFF6FF", label: "E-Visa",          slug: "e-visa"          },
  "visa on arrival": { color: "#059669", light: "#ECFDF5", label: "Visa on Arrival", slug: "visa-on-arrival" },
  "eta":             { color: "#7C3AED", light: "#F5F3FF", label: "ETA",             slug: "eta"             },
  "no admission":    { color: "#B45309", light: "#FFFBEB", label: "No Admission",    slug: "no-admission"    },
  "visa free":       { color: "#16A34A", light: "#F0FDF4", label: "Visa Free",       slug: "visa-free"       },
};

// Single source of truth for status → meta/slug, handles numeric day-counts too
function resolveVisaStatus(rawStatus) {
  if (rawStatus == null || rawStatus === "") return null;
  const key = String(rawStatus).trim().toLowerCase();

  if (/^\d+$/.test(key)) {
    return {
      ...VISA_STATUS_META["visa free"],
      label: `Visa-Free · ${key} day${key === "1" ? "" : "s"}`,
    };
  }

  return (
    VISA_STATUS_META[key] ||
    { color: "#10b981", light: "#ecfdf5", label: rawStatus, slug: "visa-required" }
  );
}

function extractGuideSlug(url) {
  if (!url) return null;
  const part = url.split("/visa-guides/")[1];
  if (!part) return null;
  return part.split("?")[0].split("#")[0].trim() || null;
}

// Live-search input powered by eammu /suggest
function VisaCountryInput({ label, placeholder, value, onChange, excludeCode }) {
  const [query,       setQuery]       = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [open,        setOpen]        = useState(false);
  const [focused,     setFocused]     = useState(false);
  const [busy,        setBusy]        = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false); setFocused(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  useEffect(() => {
    if (query.length < 1) { setSuggestions([]); setOpen(false); return; }
    const t = setTimeout(async () => {
      setBusy(true);
      try {
        const r = await fetch(`${EAMMU_BASE}/suggest?q=${encodeURIComponent(query)}&api_key=${EAMMU_KEY}`);
        const d = await r.json();
        const list = (d.suggestions || []).filter(s => s.code !== excludeCode);
        setSuggestions(list); setOpen(list.length > 0);
      } catch { setSuggestions([]); }
      finally { setBusy(false); }
    }, 220);
    return () => clearTimeout(t);
  }, [query, excludeCode]);

  const handleFocus = async () => {
    setFocused(true);
    if (value || query.length > 0) return;
    setBusy(true);
    try {
      const r = await fetch(`${EAMMU_BASE}/suggest?q=a&api_key=${EAMMU_KEY}`);
      const d = await r.json();
      const list = (d.suggestions || []).filter(s => s.code !== excludeCode);
      if (list.length > 0) { setSuggestions(list); setOpen(true); }
    } catch {}
    finally { setBusy(false); }
  };

  const pick  = (s) => { onChange(s); setQuery(""); setSuggestions([]); setOpen(false); setFocused(false); };
  const clear = ()  => { onChange(null); setQuery(""); setSuggestions([]); };

  return (
    <div ref={ref} className="relative flex-1 min-w-0">
      <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all
        ${focused
          ? "border-yellow-400 bg-white shadow-sm"
          : value ? "border-slate-200 bg-slate-50/70" : "border-slate-100 bg-slate-50/70"
        }`}
      >
        {value?.flag
          ? <img src={value.flag} alt="" className="w-5 h-3.5 object-cover rounded-sm shrink-0" />
          : <span className="text-slate-300 text-sm shrink-0">🌍</span>
        }
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-[8px] font-black uppercase text-yellow-600 leading-none mb-0.5">{label}</span>
          <input
            type="text"
            className="bg-transparent text-[13px] font-bold outline-none w-full text-slate-700 placeholder:text-slate-300"
            placeholder={placeholder}
            value={value ? value.name : query}
            onChange={(e) => {
              if (value) clear();
              setQuery(e.target.value);
              if (e.target.value.length === 0) setOpen(false);
            }}
            onFocus={handleFocus}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        {busy && (
          <span className="w-3 h-3 border border-slate-200 border-t-yellow-500 rounded-full animate-spin shrink-0" />
        )}
        {value && (
          <button
            onClick={clear}
            className="text-slate-300 hover:text-slate-500 text-lg leading-none shrink-0"
          >×</button>
        )}
      </div>

      {open && suggestions.length > 0 && (
        <ul className="absolute top-full mt-1 left-0 right-0 bg-white border border-slate-200 rounded-xl shadow-lg z-50 max-h-48 overflow-y-auto py-1">
          {suggestions.map(s => (
            <li
              key={s.code}
              onMouseDown={(e) => { e.preventDefault(); pick(s); }}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer text-xs text-slate-600 hover:bg-yellow-50 font-medium"
            >
              {s.flag && <img src={s.flag} alt="" className="w-4 h-3 object-cover rounded-sm shrink-0" />}
              <span>{s.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
// ─── end eammu helpers ────────────────────────────────────────────────────────

// ─── One-line info row (Flight / Tours / Activities) ─────────────────────────
// Left: icon + title + subtitle · Divider · Right: label + content
function InfoRow({ icon: Icon, iconClass = 'text-slate-700', title, subtitle, rightLabel, children }) {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row md:items-center gap-3 md:gap-0 pb-1">
      {/* Left */}
      <div className="flex items-center gap-3 md:w-[300px] shrink-0 md:pr-5">
        <div className={`w-11 h-11 shrink-0 rounded-xl bg-slate-100 flex items-center justify-center ${iconClass}`}>
          <Icon size={20} />
        </div>
        <div className="text-left min-w-0">
          <h2 className="text-[13px] sm:text-[15px] font-black text-gray-900 tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-snug mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Divider (desktop) */}
      <div className="hidden md:block w-px self-stretch bg-slate-200" />

      {/* Right */}
      <div className="min-w-0 flex-1 md:pl-5 border-t border-slate-100 md:border-t-0 pt-3 md:pt-0 text-left">
        <p className="text-[10px] sm:text-[11px] font-black uppercase text-slate-400 tracking-widest mb-1.5">
          {rightLabel}
        </p>
        {children}
      </div>
    </div>
  );
}

// Airline logo with text fallback if the image can't load
const AIRLINE_PARTNERS = [
  { code: 'BS', name: 'US-Bangla'        },
  { code: 'VQ', name: 'NovoAir'          },
  { code: '2A', name: 'Air Astra'        },
  { code: 'BG', name: 'Biman Bangladesh' },
  { code: 'EK', name: 'Emirates'         },
  { code: 'QR', name: 'Qatar Airways'    },
  { code: 'EY', name: 'Etihad Airways'   },
  { code: 'TK', name: 'Turkish Airlines' },
  { code: 'SV', name: 'Saudia'           },
  { code: 'FZ', name: 'flydubai'         },
];

function AirlineLogo({ code, name }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="shrink-0 h-7 flex items-center" title={name}>
      {failed ? (
        <span className="text-[10px] sm:text-[11px] font-black text-slate-500 whitespace-nowrap">{name}</span>
      ) : (
        <img
          src={`https://pics.avs.io/160/48/${code}.png`}
          alt={name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-5 sm:h-6 w-auto object-contain"
        />
      )}
    </div>
  );
}

const TOUR_DESTINATIONS = [
  { name: 'Dubai',     flag: 'https://flagcdn.com/w40/ae.png' },
  { name: 'Turkey',    flag: 'https://flagcdn.com/w40/tr.png' },
  { name: 'Thailand',  flag: 'https://flagcdn.com/w40/th.png' },
  { name: 'Malaysia',  flag: 'https://flagcdn.com/w40/my.png' },
  { name: 'Maldives',  flag: 'https://flagcdn.com/w40/mv.png' },
  { name: 'Armenia',   flag: 'https://flagcdn.com/w40/am.png' },
  { name: 'Georgia',   flag: 'https://flagcdn.com/w40/ge.png' },
  { name: 'Singapore', flag: 'https://flagcdn.com/w40/sg.png' },
];

const ACTIVITY_TYPES = [
  { icon: '🏜️', label: 'Desert Safari' },
  { icon: '🎢', label: 'Theme Parks'   },
  { icon: '🏙️', label: 'City Tours'    },
  { icon: '🚤', label: 'Cruises'       },
  { icon: '🎟️', label: 'Attractions'   },
  { icon: '🏄', label: 'Water Sports'  },
];
// ─── end info row helpers ─────────────────────────────────────────────────────

const TABS = [
  { id: 'visa',         label: 'Visa',              icon: Globe,         activeColor: 'text-green-700',  underline: 'bg-green-500'  },
  { id: 'flight',       label: 'Flight',            icon: Plane,         activeColor: 'text-blue-700',   underline: 'bg-blue-500'   },
  { id: 'study',        label: 'Study Abroad',      icon: GraduationCap, activeColor: 'text-purple-700', underline: 'bg-purple-500' },
  { id: 'scholarships', label: 'Scholarships',      icon: BookOpen,      activeColor: 'text-amber-700',  underline: 'bg-amber-400'  },
  { id: 'templates',    label: 'Templates',         icon: FileText,      activeColor: 'text-rose-600',   underline: 'bg-rose-500'   },
  { id: 'processing',   label: 'Visa Processing',   icon: Clock,         activeColor: 'text-yellow-600', underline: 'bg-yellow-500' },
  { id: 'tour',         label: 'Tours',             icon: Palmtree,      activeColor: 'text-teal-700',   underline: 'bg-teal-500'   },
  { id: 'activities',   label: 'Activities',        icon: Ticket,        activeColor: 'text-orange-600', underline: 'bg-orange-500' },
];

const VISA_TYPES_CAT = [
  { value: "e-visa",            label: "E-Visa (Online)",        icon: "⚡" },
  { value: "sticker",           label: "Sticker Visa",           icon: "🏷️" },
  { value: "sticker-extended",  label: "Sticker (Complex Case)", icon: "📋" },
  { value: "transit",           label: "Transit Visa",           icon: "🔁" },
];

const PROCESSING_COUNTRIES = [
  { name: 'Canada',      flag: 'https://flagcdn.com/w80/ca.png', time: '15–30 days' },
  { name: 'USA',         flag: 'https://flagcdn.com/w80/us.png', time: '3–5 weeks'  },
  { name: 'UK',          flag: 'https://flagcdn.com/w80/gb.png', time: '3 weeks'    },
  { name: 'Australia',   flag: 'https://flagcdn.com/w80/au.png', time: '4–6 weeks'  },
  { name: 'Schengen',    flag: 'https://flagcdn.com/w80/eu.png', time: '15 days'    },
  { name: 'Japan',       flag: 'https://flagcdn.com/w80/jp.png', time: '5–7 days'   },
  { name: 'UAE',         flag: 'https://flagcdn.com/w80/ae.png', time: '3–5 days'   },
  { name: 'New Zealand', flag: 'https://flagcdn.com/w80/nz.png', time: '20–25 days' },
];

const TEMPLATES = [
  { icon: '📝', label: 'SOP Template',           href: '/travel-resources/travel-document-generator',   badge: 'Free', color: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
  { icon: '📄', label: 'NOC Letter Template',     href: '/travel-resources/travel-document-generator',   badge: 'Free', color: 'bg-green-50 border-green-200 text-green-700'   },
  { icon: '⚖️', label: 'Power of Attorney',       href: '/travel-resources/travel-document-generator',   badge: 'Free', color: 'bg-blue-50 border-blue-200 text-blue-700'     },
  { icon: '📋', label: 'Visa Checklist', href: '/travel-resources/visa-checklist-generator',  badge: 'Free', color: 'bg-purple-50 border-purple-200 text-purple-700'},
  { icon: '💼', label: 'Cover Letter Template',   href: '/travel-resources/travel-document-generator',   badge: 'New',  color: 'bg-rose-50 border-rose-200 text-rose-700'     },
  { icon: '🏦', label: 'Salary Certificate Template', href: '/travel-resources/travel-document-generator',   badge: 'New',  color: 'bg-indigo-50 border-indigo-200 text-indigo-700'},
];

// ── Per-tab icon animation variants ──────────────────────────────────────────
const iconAnimations = {
  visa:         { animate: { rotate: [0, -15, 15, -10, 10, 0], scale: [1, 1.2, 1.2, 1.1, 1.1, 1] }, transition: { duration: 0.6, ease: 'easeInOut' } },
  flight:       { animate: { x: [0, 6, -2, 0], y: [0, -5, -3, 0], rotate: [0, 8, 4, 0] },           transition: { duration: 0.55, ease: 'easeInOut' } },
  study:        { animate: { y: [0, -5, 0, -3, 0], scale: [1, 1.2, 1, 1.1, 1] },                    transition: { duration: 0.55, ease: 'easeOut'  } },
  scholarships: { animate: { rotate: [0, -10, 12, -6, 0], scale: [1, 1.15, 1.1, 1.05, 1] },          transition: { duration: 0.6, ease: 'easeInOut' } },
  templates:    { animate: { scale: [1, 1.3, 0.9, 1.2, 1], rotate: [0, 8, -5, 3, 0] },              transition: { duration: 0.55, ease: 'easeOut'  } },
  processing:   { animate: { rotate: [0, 180, 360], scale: [1, 1.1, 1] },                             transition: { duration: 0.6, ease: 'easeInOut' } },
  tour:         { animate: { rotate: [0, -10, 12, -6, 0], scale: [1, 1.15, 1.1, 1.05, 1] },          transition: { duration: 0.6, ease: 'easeInOut' } },
  activities:   { animate: { scale: [1, 1.3, 0.9, 1.2, 1], rotate: [0, 8, -5, 3, 0] },              transition: { duration: 0.55, ease: 'easeOut'  } },
};

export default function TravelMenu() {
  const [activeTab, setActiveTab]     = useState('visa');
  const [origin, setOrigin]           = useState('bangladesh');
  const [destination, setDestination] = useState('canada');
  const [searchTerm, setSearchTerm]   = useState('');
  const [animatingTab, setAnimatingTab]   = useState('visa');

  // For processing tab
  const [visaType, setVisaType]   = useState('sticker');
  const [procOrigin, setProcOrigin]           = useState('bangladesh');
  const [procDestination, setProcDestination] = useState('canada');

  // ── Visa tab — eammu state ─────────────────────────────────────────────────
  const [visaPassport,    setVisaPassport]    = useState(null);
  const [visaDestination, setVisaDestination] = useState(null);
  const [visaResult,      setVisaResult]      = useState(null);
  const [visaLoading,     setVisaLoading]     = useState(false);
  const [visaError,       setVisaError]       = useState("");
  // ──────────────────────────────────────────────────────────────────────────

  // Scholarship search
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  // Countries list (loaded via API or imported)
  const countriesList = countries; // alias for clarity

  // Menu bar scroll + arrow state
  const scrollRef = useRef(null);
  const [canScrollLeft,  setCanScrollLeft]  = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, []);

  const showArrows = canScrollLeft || canScrollRight;

  const filteredStudyCountries = useMemo(() => {
    return countriesList.filter(c =>
      c.country.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 4);
  }, [searchTerm, countriesList]);

  // Pre-fill eammu visa selectors with Bangladesh → Canada
  useEffect(() => {
    const fetchDefault = async (name) => {
      try {
        const r = await fetch(`${EAMMU_BASE}/suggest?q=${encodeURIComponent(name)}&api_key=${EAMMU_KEY}`);
        const d = await r.json();
        return (d.suggestions || []).find(s => s.name.toLowerCase() === name.toLowerCase())
          || (d.suggestions || [])[0]
          || null;
      } catch { return null; }
    };
    Promise.all([fetchDefault("Bangladesh"), fetchDefault("Canada")]).then(([pp, dd]) => {
      if (pp) setVisaPassport(pp);
      if (dd) setVisaDestination(dd);
    });
  }, []);

  // ── eammu check ───────────────────────────────────────────────────────────
  const checkVisa = async () => {
    if (!visaPassport || !visaDestination) return;
    setVisaLoading(true); setVisaError(""); setVisaResult(null);
    try {
      const r = await fetch(
        `${EAMMU_BASE}/passport?from=${encodeURIComponent(visaPassport.name)}&to=${encodeURIComponent(visaDestination.name)}&api_key=${EAMMU_KEY}`
      );
      if (!r.ok) throw new Error();
      const data = await r.json();
      setVisaResult(data);
    } catch {
      setVisaError("Visa Details Not Available. Please Contact - info@eammu.com");
    } finally {
      setVisaLoading(false);
    }
  };
  // ──────────────────────────────────────────────────────────────────────────

  // ── Derived visa-guide slug & href ────────────────────────────────────────
  const visaStatusMeta = resolveVisaStatus(visaResult?.visa_status);

  const visaGuideSlug = visaResult
    ? extractGuideSlug(visaResult.visa_guide_url) || visaStatusMeta?.slug || "visa-required"
    : null;

  const visaRouteSlug = visaResult
    ? `${createSlug(visaPassport?.name || "")}-visa-for-${createSlug(visaDestination?.name || "")}`
    : null;
  // ──────────────────────────────────────────────────────────────────────────

  // Close scholarship dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleTabClick = (tabId, e) => {
    setActiveTab(tabId);
    setSearchTerm('');
    setShowSuggestions(false);
    setAnimatingTab(tabId);
    setTimeout(() => setAnimatingTab(null), 700);

    // Bring the clicked tab into view inside the menu bar
    if (e?.currentTarget?.scrollIntoView) {
      e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  const whatsappCta = WHATSAPP_CTA[activeTab] || null;

  return (
    <div className="w-full max-w-6xl mx-auto p-2 font-sans relative mt-24 mb-4">
      
      {/* 1. FLOATING MENU BAR */}
      <div className="relative z-20 flex justify-center px-2">
        <div className="flex items-center bg-white border border-gray-100 shadow-xl rounded-2xl p-1 w-full sm:w-auto max-w-full sm:max-w-2xl md:max-w-3xl">
          
          {showArrows && (
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll menu left"
              className={`p-1.5 rounded-xl shrink-0 transition-all ${
                canScrollLeft ? 'cursor-pointer hover:bg-gray-100' : 'opacity-30 cursor-default'
              }`}
            >
              <ChevronLeft size={18} className="text-gray-500" />
            </button>
          )}

          <div 
            ref={scrollRef}
            onScroll={updateArrows}
            className="flex items-center overflow-x-auto no-scrollbar scroll-smooth flex-nowrap px-1 min-w-0 flex-1"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {TABS.map((tab) => {
              const Icon     = tab.icon;
              const isActive = activeTab === tab.id;
              const anim     = iconAnimations[tab.id];

              return (
                <button
                  key={tab.id}
                  onClick={(e) => handleTabClick(tab.id, e)}
                  className="flex-shrink-0 cursor-pointer relative flex flex-col items-center px-4 sm:px-6 py-1.5 transition-all outline-none"
                >
                  <motion.div
                    animate={animatingTab === tab.id ? anim.animate : {}}
                    transition={animatingTab === tab.id ? anim.transition : {}}
                    className="mb-0.5"
                  >
                    <Icon size={18} className={isActive ? tab.activeColor : 'text-gray-400'} />
                  </motion.div>

                  <span className={`text-[10px] sm:text-[11px] font-extrabold whitespace-nowrap tracking-tight ${isActive ? tab.activeColor : 'text-gray-400'}`}>
                    {tab.label}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="tabMarker"
                      className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full ${tab.underline}`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {showArrows && (
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll menu right"
              className={`p-1.5 rounded-xl shrink-0 transition-all ${
                canScrollRight ? 'cursor-pointer hover:bg-gray-100' : 'opacity-30 cursor-default'
              }`}
            >
              <ChevronRight size={18} className="text-gray-500" />
            </button>
          )}
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="bg-white rounded-[24px] shadow-2xl border border-gray-100 -mt-3 pt-6 pb-10 px-4 sm:px-6 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col items-center" 
          >

            {/* ════════════════ VISA TAB ════════════════ */}
            {activeTab === 'visa' && (
              <div className="space-y-3 w-full">
                <h2 className="text-xs sm:text-lg font-black text-gray-800 text-center tracking-tight leading-none">
                  Check Your Visa Requirements Before You Fly
                </h2>

                {/* ── Country selectors row ── */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-2 max-w-4xl mx-auto w-full">
                  <VisaCountryInput
                    label="Your Passport"
                    placeholder="Select nationality…"
                    value={visaPassport}
                    onChange={(c) => { setVisaPassport(c); setVisaResult(null); }}
                    excludeCode={visaDestination?.code}
                  />

                  {/* Swap button */}
                  <button
                    onClick={() => {
                      setVisaPassport(visaDestination);
                      setVisaDestination(visaPassport);
                      setVisaResult(null);
                    }}
                    title="Swap"
                    className="hidden cursor-pointer sm:flex w-8 h-8 self-end mb-1 shrink-0 rounded-full border border-slate-200 bg-slate-50 items-center justify-center text-slate-400 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all text-sm"
                  >⇄</button>

                  <VisaCountryInput
                    label="Destination"
                    placeholder="Where are you going?"
                    value={visaDestination}
                    onChange={(c) => { setVisaDestination(c); setVisaResult(null); }}
                    excludeCode={visaPassport?.code}
                  />
                </div>

                {/* ── Error ── */}
                {visaError && (
                  <p className="text-center text-xs text-red-500 font-medium">{visaError}</p>
                )}

                {/* ── Result card ── */}
                {visaResult && (() => {
                  const meta = visaStatusMeta;
                  const color = meta?.color || "#10b981";
                  const light = meta?.light || "#ecfdf5";
                  const statusLabel = meta?.label || visaResult.visa_status;

                  return (
                    <div
                      className="rounded-2xl border-2 p-3 flex items-center gap-3 max-w-4xl mx-auto w-full"
                      style={{ borderColor: color, background: light }}
                    >
                      {/* From */}
                      <div className="flex flex-col items-center gap-1 shrink-0">
                        {visaResult.from?.passport_cover
                          ? <img src={visaResult.from.passport_cover} alt="" className="w-9 h-12 object-cover rounded-lg shadow" />
                          : visaResult.from?.flag
                            ? <img src={visaResult.from.flag} alt="" className="w-9 h-6 object-cover rounded shadow" />
                            : null
                        }
                        {visaResult.from?.flag && visaResult.from?.passport_cover && (
                          <img src={visaResult.from.flag} alt="" className="w-6 h-4 object-cover rounded-sm" />
                        )}
                        <span className="text-[9px] font-bold text-slate-500 text-center leading-tight max-w-[60px] truncate">
                          {visaResult.from?.name}
                        </span>
                      </div>

                      {/* Centre — status pill + arrow */}
                      <div className="flex-1 flex flex-col items-center gap-1.5 min-w-0">
                        <span
                          className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-white whitespace-nowrap"
                          style={{ background: color }}
                        >{statusLabel}</span>
                        <div className="flex items-center gap-1.5 w-full">
                          <div className="flex-1 h-px opacity-25" style={{ background: color }} />
                          <span className="text-base" style={{ color }}>✈</span>
                          <div className="flex-1 h-px opacity-25" style={{ background: color }} />
                        </div>
                      </div>

                      {/* To */}
                      <div className="flex flex-col items-center gap-1 shrink-0">
                        {visaResult.to?.passport_cover
                          ? <img src={visaResult.to.passport_cover} alt="" className="w-9 h-12 object-cover rounded-lg shadow" />
                          : visaResult.to?.flag
                            ? <img src={visaResult.to.flag} alt="" className="w-9 h-6 object-cover rounded shadow" />
                            : null
                        }
                        {visaResult.to?.flag && visaResult.to?.passport_cover && (
                          <img src={visaResult.to.flag} alt="" className="w-6 h-4 object-cover rounded-sm" />
                        )}
                        <span className="text-[9px] font-bold text-slate-500 text-center leading-tight max-w-[60px] truncate">
                          {visaResult.to?.name}
                        </span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* ════════════════ STUDY ABROAD TAB ════════════════ */}
            {activeTab === 'study' && (
              <div className="space-y-4 w-full">
                <div className="flex flex-col items-center gap-2 max-w-4xl mx-auto w-full relative">
                  <h2 className="text-sm sm:text-lg font-black text-gray-800 text-center tracking-tight leading-none">
                    Find Your Higher Study Destinations
                  </h2>
                  <StudySearch />
                </div>
                <div className="w-full max-w-4xl mx-auto">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Top Destinations</p>
                    <div className="h-[1px] flex-1 bg-slate-100 ml-4" />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {["Canada", "United States", "Australia", "United Kingdom"].map((name) => {
                      const c = countriesList.find(c => c.country === name);
                      if (!c) return null;
                      return (
                        <Link
                          key={c.code}
                          href={`/study-abroad/student-visa/${createSlug(c.country)}`}
                          className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-purple-400 hover:shadow-md transition-all"
                        >
                          <div className="h-16 bg-gray-100 overflow-hidden">
                            <img src={c.flag} alt={c.country} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <div className="p-2 text-center bg-white">
                            <p className="text-[11px] font-black text-gray-800 truncate">{c.country}</p>
                          </div>
                          <div className="absolute top-1 right-1 bg-purple-500 text-white text-[7px] font-black px-1.5 py-0.5 rounded-full uppercase">
                            Hot
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* ════════════════ FLIGHT TAB ════════════════ */}
            {activeTab === 'flight' && (
              <InfoRow
                icon={Plane}
                iconClass="text-blue-900"
                title="Book with Expert Support"
                subtitle="Official airline tickets with instant confirmation."
                rightLabel="Our official airline partners"
              >
                <div
                  className="flex items-center gap-4 sm:gap-5 overflow-x-auto no-scrollbar"
                  style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                >
                  {AIRLINE_PARTNERS.map(a => (
                    <AirlineLogo key={a.code} code={a.code} name={a.name} />
                  ))}
                </div>
              </InfoRow>
            )}

            {/* ════════════════ SCHOLARSHIPS TAB ════════════════ */}
            {activeTab === 'scholarships' && (
              <div className="space-y-3 w-full animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h2 className="text-sm sm:text-lg font-black text-gray-800 text-center tracking-tight leading-none">
                  Find Fully Funded Scholarships
                </h2>

                {/* Search Input with Dropdown Suggestions */}
                <div className="relative w-full max-w-2xl mx-auto" ref={searchRef}>
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                  <input
                    type="text"
                    placeholder="Search scholarships by country…"
                    value={searchTerm}
                    onChange={e => { setSearchTerm(e.target.value); setShowSuggestions(true); }}
                    onFocus={() => searchTerm && setShowSuggestions(true)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[13px] font-bold outline-none focus:border-rose-400 transition-colors"
                  />

                  {/* Dropdown Suggestions */}
                  {showSuggestions && searchTerm && (() => {
                    const results = countriesList.filter(c =>
                      c.country.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                    return results.length > 0 ? (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-100 rounded-xl shadow-lg z-50 overflow-hidden max-h-[220px] overflow-y-auto">
                        {results.slice(0, 6).map(c => (
                          <Link
                            key={c.code}
                            href={`/scholarships/${createSlug(c.country)}`}
                            onClick={() => { setSearchTerm(''); setShowSuggestions(false); }}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-rose-50 transition-colors group"
                          >
                            <img
                              src={c.flag}
                              alt={c.country}
                              className="w-7 h-5 object-cover rounded-sm border border-slate-100 shrink-0"
                              onError={(e) => e.target.src = "https://flagcdn.com/w80/un.png"}
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-[12px] font-black text-gray-800 truncate">{c.country}</p>
                              <p className="text-[10px] text-slate-400 font-semibold">Fully funded programs available</p>
                            </div>
                            <span className="text-[10px] text-rose-400 font-black uppercase tracking-tight opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                              View →
                            </span>
                          </Link>
                        ))}
                        {results.length > 6 && (
                          <div className="px-4 py-2 bg-slate-50 border-t border-slate-100">
                            <Link
                              href={`/scholarships?q=${encodeURIComponent(searchTerm)}`}
                              className="text-[10px] font-black text-rose-400 hover:text-rose-600 uppercase tracking-widest"
                            >
                              See all {results.length} results →
                            </Link>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-100 rounded-xl shadow-lg z-50 px-4 py-6 text-center">
                        <p className="text-xs font-bold text-slate-400 italic">No results for "{searchTerm}"</p>
                      </div>
                    );
                  })()}
                </div>

                {/* Top Destinations */}
                <div className="w-full max-w-4xl mx-auto">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Top Destinations</p>
                    <div className="h-[1px] flex-1 bg-slate-100 ml-4" />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1">
                    {countriesList
                      .filter(c => ['canada', 'germany', 'united kingdom', 'australia'].includes(c.country.toLowerCase()))
                      .slice(0, 4)
                      .map(c => (
                        <Link
                          key={c.code}
                          href={`/scholarships/${createSlug(c.country)}`}
                          className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-rose-400 hover:shadow-md transition-all active:scale-95"
                        >
                          <div className="h-14 bg-slate-50 overflow-hidden">
                            <img
                              src={c.flag}
                              alt={c.country}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => e.target.src = "https://flagcdn.com/w80/un.png"}
                            />
                          </div>
                          <div className="p-2 text-center bg-white">
                            <p className="text-[11px] font-black text-gray-800 truncate leading-tight">{c.country}</p>
                            <p className="text-[9px] text-rose-500 font-bold uppercase tracking-tighter mt-0.5">View Programs</p>
                          </div>
                          {['canada', 'usa', 'united kingdom', 'australia'].includes(c.country.toLowerCase()) && (
                            <div className="absolute top-1 right-1 bg-[#FFC107] text-black text-[7px] font-black px-1.5 py-0.5 rounded-full uppercase shadow-sm">
                              Hot
                            </div>
                          )}
                        </Link>
                      ))}
                  </div>
                  <div className="mt-3 text-center border-t border-slate-50 pt-2">
                    <Link
                      href="/scholarships"
                      className="text-[10px] font-black text-rose-400 hover:text-rose-600 transition-colors uppercase tracking-widest flex items-center justify-center gap-1"
                    >
                      Explore All Countries <span className="text-xs">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* ════════════════ TEMPLATES TAB ════════════════ */}
            {activeTab === 'templates' && (
              <div className="space-y-3 w-full">
                <h2 className="text-sm sm:text-lg font-black text-gray-800 text-center tracking-tight leading-none">
                  Free Visa Document Templates
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-4xl mx-auto w-full">
                  {TEMPLATES.map(t => (
                    <Link
                      key={t.label}
                      href={t.href}
                      className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl border bg-white hover:shadow-md transition-all duration-150 no-underline ${t.color}`}
                    >
                      <span className="text-xl flex-shrink-0">{t.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-black leading-tight truncate">{t.label}</p>
                      </div>
                      <span className="text-[9px] font-black px-1.5 py-0.5 rounded-full bg-white/60 flex-shrink-0">
                        {t.badge}
                      </span>
                    </Link>
                  ))}
                </div>
                <p className="text-[11px] text-center text-gray-400 font-medium">
                  ✅ All templates are free to download and customise
                </p>
              </div>
            )}

            {/* ════════════════ PROCESSING TAB ════════════════ */}
            {activeTab === 'processing' && (
              <div className="space-y-3 w-full">
                <h2 className="text-sm sm:text-lg font-black text-gray-800 text-center tracking-tight leading-none">
                  Visa Processing Time Tracker
                </h2>

                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 max-w-4xl mx-auto w-full">

                  {/* Your Passport */}
                  <ProcessingCountrySelector
                    label="Your Passport"
                    value={procOrigin}
                    onChange={setProcOrigin}
                    exclude={procDestination}
                    recentKey="recent_proc_origin"
                  />

                  <div className="hidden md:flex shrink-0 px-1">
                    <ChevronRightIcon size={14} className="text-slate-300" />
                  </div>

                  {/* Destination */}
                  <ProcessingCountrySelector
                    label="Destination"
                    value={procDestination}
                    onChange={setProcDestination}
                    exclude={procOrigin}
                    recentKey="recent_proc_dest"
                  />

                  {/* Visa Type */}
                  <div className="md:w-40 bg-slate-50/70 px-3 py-1.5 rounded-xl border border-slate-100 text-left">
                    <p className="text-[8px] font-black uppercase text-yellow-600 leading-none mb-0.5">Visa Type</p>
                    <select
                      value={visaType}
                      onChange={e => setVisaType(e.target.value)}
                      className="bg-transparent cursor-pointer text-[13px] font-bold outline-none w-full appearance-none text-yellow-700"
                    >
                      {VISA_TYPES_CAT.map(v => (
                        <option key={v.value} value={v.value}>{v.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Popular Destinations */}
                <div className="w-full max-w-4xl mx-auto">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Popular Destinations</p>
                    <div className="h-[1px] flex-1 bg-slate-100 ml-4" />
                  </div>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                    {PROCESSING_COUNTRIES.map(c => (
                      <Link
                        key={c.name}
                        href={`/travel-resources/visa-processing-time-tracker/${procOrigin.replace(/\s+/g, "-")}-national-visa-processing-time-for-${c.name.toLowerCase().replace(/\s+/g, "-")}-${visaType}`}
                        className="group flex flex-col items-center gap-1 bg-white border border-gray-100 rounded-xl p-2 hover:border-yellow-400 hover:shadow-sm transition-all"
                      >
                        <img src={c.flag} alt={c.name} className="w-8 h-5 object-cover rounded-sm" />
                        <span className="text-[9px] font-black text-gray-700 text-center leading-tight">{c.name}</span>
                        <span className="text-[8px] font-bold text-yellow-600 text-center leading-tight">{c.time}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ════════════════ TOUR TAB ════════════════ */}
            {activeTab === 'tour' && (
              <InfoRow
                icon={Palmtree}
                iconClass="text-teal-700"
                title="Find Best Tour Packages"
                subtitle="Custom packages with hotels, transfers and visa support."
                rightLabel="Popular destinations"
              >
                <div
                  className="flex items-center gap-2 overflow-x-auto no-scrollbar"
                  style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                >
                  {TOUR_DESTINATIONS.map(d => (
                    <div
                      key={d.name}
                      className="shrink-0 flex items-center gap-1.5 bg-slate-50 border border-slate-100 rounded-full pl-1.5 pr-2.5 py-1"
                    >
                      <img src={d.flag} alt="" className="w-4 h-3 object-cover rounded-[2px]" />
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-600 whitespace-nowrap">{d.name}</span>
                    </div>
                  ))}
                </div>
              </InfoRow>
            )}

            {/* ════════════════ ACTIVITIES TAB ════════════════ */}
            {activeTab === 'activities' && (
              <InfoRow
                icon={Ticket}
                iconClass="text-orange-600"
                title="Discover Things to Do"
                subtitle="Book tickets, tours and experiences for your trip."
                rightLabel="Popular activities"
              >
                <div
                  className="flex items-center gap-2 overflow-x-auto no-scrollbar"
                  style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                >
                  {ACTIVITY_TYPES.map(a => (
                    <div
                      key={a.label}
                      className="shrink-0 flex items-center gap-1.5 bg-slate-50 border border-slate-100 rounded-full px-2.5 py-1"
                    >
                      <span className="text-sm leading-none">{a.icon}</span>
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-600 whitespace-nowrap">{a.label}</span>
                    </div>
                  ))}
                </div>
              </InfoRow>
            )}

          </motion.div>
        </AnimatePresence>

        {/* ── OVERLAPPING CTA BUTTON ── */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex justify-center w-full px-8">
          {whatsappCta ? (
            /* Flight / Tours / Activities: green WhatsApp button, same position as "Check Visa Now" */
            <a
              href={buildWhatsAppLink(whatsappCta.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-64 bg-[#25D366] hover:bg-[#1ebe5a] text-white py-3 sm:py-3.5 rounded-xl font-black text-xs sm:text-sm uppercase shadow-xl text-center active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <WhatsAppIcon size={18} />
              {whatsappCta.label}
            </a>
          ) : (
            <Link 
              href={
                activeTab === 'visa'
                  ? (visaResult && visaGuideSlug
                      ? `/visa-checker/${visaRouteSlug}/${visaGuideSlug}`
                      : `/visa/visa-guide/${createSlug(visaDestination?.name || 'canada')}-visa-for-${createSlug(visaPassport?.name || 'bangladesh')}`)
                  : activeTab === 'study'        ? '/study-abroad/student-visa'
                  : activeTab === 'scholarships' ? '/scholarships'
                  : activeTab === 'templates'    ? '/travel-resources'
                  :                               `/travel-resources/visa-processing-time-tracker/${procOrigin.replace(/\s+/g, "-")}-national-visa-processing-time-for-${procDestination.replace(/\s+/g, "-")}-${visaType}`
              }
              onClick={(e) => {
                // On visa tab: first click fires the API check; second click navigates
                if (activeTab === 'visa' && !visaResult && !visaLoading) {
                  e.preventDefault();
                  checkVisa();
                }
              }}
              className="w-full sm:w-64 bg-[#FFC107] hover:bg-yellow-500 text-blue-950 py-3.5 rounded-xl font-black text-sm uppercase shadow-xl text-center active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              {visaLoading && activeTab === 'visa' && (
                <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
              )}
              {activeTab === 'visa'
                ? (visaLoading ? 'Checking…' : visaResult ? 'View Full Visa Guide →' : 'Check Visa Now')
                : activeTab === 'study'        ? 'Search Study'
                : activeTab === 'scholarships' ? 'Find Scholarships'
                : activeTab === 'templates'    ? 'Download Templates'
                :                               'Track Processing'}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}