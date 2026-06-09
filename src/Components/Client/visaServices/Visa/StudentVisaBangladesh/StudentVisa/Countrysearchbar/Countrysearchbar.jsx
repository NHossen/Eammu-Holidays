"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import countries from "@/app/data/countries.json";
import { createSlug } from "@/app/lib/utils";
import {
  Search, X, ChevronRight, GraduationCap, Globe,
  TrendingUp, Sparkles, ArrowUpRight
} from "lucide-react";

// ── TOP STUDY DESTINATIONS ────────────────────────────────────────────────────
const TOP_STUDY = [
  { country: "Canada",           emoji: "🍁", tag: "Most Popular",      color: "#ef4444" },
  { country: "United Kingdom",   emoji: "🎡", tag: "Top Ranked",        color: "#3b82f6" },
  { country: "Australia",        emoji: "🦘", tag: "Work & Study",      color: "#f59e0b" },
  { country: "Germany",          emoji: "🏰", tag: "Free Tuition",      color: "#1d4ed8" },
  { country: "United States",    emoji: "🦅", tag: "Dream Dest.",       color: "#7c3aed" },
  { country: "Malaysia",         emoji: "🌴", tag: "Affordable",        color: "#059669" },
  { country: "Japan",            emoji: "⛩️",  tag: "Scholarships",     color: "#db2777" },
  { country: "Turkey",           emoji: "🕌", tag: "Budget Friendly",   color: "#dc2626" },
];

// ── TOP TOURIST VISA DESTINATIONS ─────────────────────────────────────────────
const TOP_VISA = [
  { country: "Thailand",                emoji: "🏝️", tag: "Visa on Arrival", color: "#f59e0b" },
  { country: "Turkey",                  emoji: "🕌", tag: "E-Visa",          color: "#dc2626" },
  { country: "Malaysia",                emoji: "🌴", tag: "Easy Approval",   color: "#059669" },
  { country: "Japan",                   emoji: "⛩️",  tag: "Popular",        color: "#db2777" },
  { country: "Singapore",               emoji: "🦁", tag: "Quick Process",   color: "#2563eb" },
  { country: "United Arab Emirates",    emoji: "🏙️", tag: "Business Hub",   color: "#7c3aed" },
  { country: "United Kingdom",          emoji: "🎡", tag: "Trending",        color: "#3b82f6" },
  { country: "France",                  emoji: "🗼", tag: "Schengen",        color: "#0891b2" },
];

export default function CountrySearchBar({ mode = "student", className = "" }) {
  const [query,       setQuery]       = useState("");
  const [open,        setOpen]        = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeMode,  setActiveMode]  = useState(mode);

  const inputRef = useRef(null);
  const wrapRef  = useRef(null);
  const listRef  = useRef(null);
  const router   = useRouter();

  const isStudent = activeMode === "student";
  const topList   = isStudent ? TOP_STUDY : TOP_VISA;

  // ── filtered results ────────────────────────────────────────────────────
  const filtered = query.trim().length > 0
    ? countries.filter((c) =>
        c.country.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 7)
    : [];

  const showResults  = filtered.length > 0;
  const showEmpty    = query.trim().length > 1 && filtered.length === 0;
  const showDefaults = !showResults && !showEmpty;

  // ── URL helper ──────────────────────────────────────────────────────────
  const buildHref = useCallback((countryName) => {
    const match = countries.find(
      (c) => c.country.toLowerCase() === countryName.toLowerCase()
    );
    const s = createSlug(match?.country || countryName);
    return activeMode === "student"
      ? `/study-abroad/student-visa/${s}`
      : `/visa/${s}-visa`;
  }, [activeMode]);

  const handleSelect = (countryName) => {
    router.push(buildHref(countryName));
    setQuery("");
    setOpen(false);
  };

  // ── keyboard ────────────────────────────────────────────────────────────
  const handleKeyDown = (e) => {
    const list = showResults ? filtered.map(c => ({ country: c.country })) : topList;
    if (e.key === "ArrowDown")  { e.preventDefault(); setActiveIndex(i => Math.min(i + 1, list.length - 1)); }
    else if (e.key === "ArrowUp")   { e.preventDefault(); setActiveIndex(i => Math.max(i - 1, 0)); }
    else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0) handleSelect(list[activeIndex].country);
      else if (filtered.length > 0) handleSelect(filtered[0].country);
    }
    else if (e.key === "Escape") { setOpen(false); setQuery(""); }
  };

  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      listRef.current.querySelectorAll("[data-item]")[activeIndex]?.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  useEffect(() => { setActiveIndex(-1); }, [query, activeMode]);

  // close on outside click
  useEffect(() => {
    const fn = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  // highlight match
  const hl = (text, q) => {
    if (!q.trim()) return text;
    const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    return text.split(re).map((p, i) =>
      p.toLowerCase() === q.toLowerCase()
        ? <mark key={i} className="bg-green-100 text-green-800 not-italic font-black rounded-sm px-0.5">{p}</mark>
        : p
    );
  };

  const getFlag = (name) =>
    countries.find((c) => c.country.toLowerCase() === name.toLowerCase())?.flag;

  return (
    <div ref={wrapRef} className={`relative w-full max-w-7xl mx-auto px-4 sm:px-2 mb:px-2 ${className}`}>

      {/* ══ SEARCH PILL ══════════════════════════════════════════════════ */}
      <div className={`
        relative flex items-stretch bg-white rounded-2xl overflow-visible transition-all duration-300
        ${open
          ? "shadow-[0_8px_60px_rgba(0,0,0,0.20)] ring-2 ring-green-400/50"
          : "shadow-[0_4px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06] hover:shadow-[0_6px_40px_rgba(0,0,0,0.16)]"
        }
      `}>

        {/* ── TYPE TABS ─────────────────────────────────────────────── */}
        {/* On mobile: stacked above input row; on sm+: inline left side */}
        <div className="
          flex sm:flex-col items-stretch sm:items-center gap-1
          px-2 py-2
          border-b sm:border-b-0 sm:border-r border-gray-100
          shrink-0 w-full sm:w-auto
          absolute sm:static top-0 left-0 right-0
          bg-white sm:bg-transparent
          rounded-t-2xl sm:rounded-none
          z-10
        ">
          {/* Invisible spacer so the pill body doesn't overlap tabs on mobile */}
          <div className="sm:hidden" aria-hidden="true" />
          {[
            { key: "student", icon: <GraduationCap size={13} />, label: "Student Visa" },
            { key: "visa",    icon: <Globe size={13} />,          label: "Tourist Visa" },
          ].map(({ key, icon, label }) => (
            <button
              key={key}
              type="button"
              onMouseDown={(e) => { e.preventDefault(); setActiveMode(key); setOpen(true); inputRef.current?.focus(); }}
              className={`
                flex-1 sm:flex-none cursor-pointer flex items-center justify-center gap-1.5
                px-3 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all duration-200
                ${activeMode === key
                  ? key === "student"
                    ? "bg-green-600 text-white shadow-md shadow-green-200/70"
                    : "bg-blue-600 text-white shadow-md shadow-blue-200/70"
                  : "text-gray-400 hover:text-gray-700 hover:bg-gray-100/70"
                }
              `}
            >
              {icon}
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* ── INPUT ROW ─────────────────────────────────────────────── */}
        {/*
          On mobile, tabs sit at top as a full-width row.
          We push the input row down with padding-top to clear the tabs.
          On sm+ the tabs are inline-left, no top offset needed.
        */}
        <div className="flex flex-1 items-center pt-[52px] sm:pt-0 min-w-0">

          {/* Input + search icon */}
          <div className="flex-1 flex items-center px-3 sm:px-4 min-w-0 gap-2 sm:gap-3">
            <Search
              size={16}
              className={`shrink-0 transition-colors duration-200 ${open ? (isStudent ? "text-green-500" : "text-blue-500") : "text-gray-400"}`}
            />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
              onFocus={() => setOpen(true)}
              onKeyDown={handleKeyDown}
              placeholder={
                isStudent
                  ? "Search study destination…"
                  : "Search destination…"
              }
              className="flex-1 py-3.5 bg-transparent outline-none text-[14px] sm:text-[15px] font-semibold text-gray-800 placeholder:text-gray-400 placeholder:font-normal min-w-0"
              autoComplete="off"
              spellCheck={false}
            />
            {query && (
              <button
                type="button"
                onMouseDown={(e) => { e.preventDefault(); setQuery(""); setOpen(true); inputRef.current?.focus(); }}
                className="shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* ── SEARCH BUTTON ───────────────────────────────────────── */}
          <div className="flex items-center p-2 shrink-0">
            <button
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                if (filtered.length > 0) handleSelect(filtered[0].country);
                else setOpen(true);
              }}
              className={`
                flex items-center cursor-pointer justify-center gap-2
                px-4 sm:px-6 py-3 rounded-xl font-black text-sm text-white
                transition-all duration-200 active:scale-[0.97] shadow-lg
                min-w-[44px] min-h-[44px]
                ${isStudent
                  ? "bg-green-600 hover:bg-green-700 shadow-green-200"
                  : "bg-blue-600 hover:bg-blue-700 shadow-blue-200"
                }
              `}
            >
              <Search size={15} />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* ══ DROPDOWN ═════════════════════════════════════════════════════ */}
      {open && (
        <div
          className="
            absolute top-[calc(100%+8px)] left-0 right-0
            bg-white rounded-2xl border border-gray-100
            z-[9999] overflow-hidden
            max-h-[70vh] overflow-y-auto
            sm:max-h-[600px]
          "
          style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.18), 0 4px 20px rgba(0,0,0,0.08)" }}
        >

          {/* ── SEARCH RESULTS ──────────────────────────────────────── */}
          {showResults && (
            <>
              <div className="flex items-center justify-between px-4 sm:px-5 pt-3.5 pb-2.5">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-gray-400 flex items-center gap-1.5">
                  <Search size={9} /> {filtered.length} result{filtered.length !== 1 ? "s" : ""}
                </p>
                <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${
                  isStudent ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"
                }`}>
                  {isStudent ? "Student Visa" : "Tourist Visa"}
                </span>
              </div>

              <div ref={listRef} className="px-2 pb-2 space-y-0.5">
                {filtered.map((c, i) => (
                  <button
                    key={c.code}
                    data-item
                    type="button"
                    onMouseDown={(e) => { e.preventDefault(); handleSelect(c.country); }}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`
                      w-full flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-3 rounded-xl text-left
                      transition-all duration-100 group
                      ${i === activeIndex
                        ? isStudent ? "bg-green-50 ring-1 ring-green-200" : "bg-blue-50 ring-1 ring-blue-200"
                        : "hover:bg-gray-50/80"
                      }
                    `}
                  >
                    <div className="w-9 h-[24px] rounded-md overflow-hidden shrink-0 shadow-sm border border-gray-100">
                      <img src={c.flag} alt={c.country} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`font-black text-[13px] sm:text-[14px] leading-tight transition-colors truncate ${
                        i === activeIndex ? (isStudent ? "text-green-700" : "text-blue-700") : "text-gray-800"
                      }`}>
                        {hl(c.country, query)}
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-gray-400 mt-0.5 font-medium">
                        {isStudent ? "Student Visa Guide" : "Tourist Visa Guide"} · {c.code?.toUpperCase()}
                      </p>
                    </div>
                    {/* Tag — hidden on very small screens */}
                    <span className={`hidden xs:inline-flex items-center gap-1 text-[9px] font-black px-2 py-1.5 rounded-full uppercase tracking-wider shrink-0 ${
                      isStudent ? "bg-green-50 text-green-600 border border-green-100" : "bg-blue-50 text-blue-600 border border-blue-100"
                    }`}>
                      {isStudent ? <GraduationCap size={9} /> : <Globe size={9} />}
                      <span className="hidden sm:inline">{isStudent ? "Study" : "Visa"} Guide</span>
                    </span>
                    <ChevronRight size={14} className={`shrink-0 transition-all ${
                      i === activeIndex
                        ? isStudent ? "text-green-400 translate-x-0.5" : "text-blue-400 translate-x-0.5"
                        : "text-gray-200"
                    }`} />
                  </button>
                ))}
              </div>

              {/* Keyboard hints — desktop only */}
              <div className="hidden sm:block px-5 py-3 bg-gray-50/80 border-t border-gray-100">
                <p className="text-[10px] font-bold text-gray-400">↑↓ navigate &nbsp;·&nbsp; Enter to open &nbsp;·&nbsp; Esc to close</p>
              </div>
            </>
          )}

          {/* ── EMPTY STATE ─────────────────────────────────────────── */}
          {showEmpty && (
            <div className="px-5 py-8 sm:py-10 text-center">
              <div className="text-4xl sm:text-5xl mb-3">🌍</div>
              <p className="font-black text-gray-700 mb-1 text-sm sm:text-base">No results for "{query}"</p>
              <p className="text-gray-400 text-xs sm:text-sm">Try a different spelling, or browse top destinations below.</p>
            </div>
          )}

          {/* ── DEFAULT: TOP DESTINATIONS ────────────────────────────── */}
          {showDefaults && (
            <div className="p-3 sm:p-5">

              {/* Header */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2 min-w-0">
                  <div className={`p-1.5 rounded-lg shrink-0 ${isStudent ? "bg-green-100" : "bg-blue-100"}`}>
                    {isStudent
                      ? <TrendingUp size={12} className="text-green-600" />
                      : <Sparkles size={12} className="text-blue-600" />
                    }
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.12em] text-gray-600 truncate leading-tight">
                    {isStudent
                      ? "Top Study Destinations"
                      : "Popular Visa Destinations"
                    }
                  </p>
                </div>
                <span className={`shrink-0 ml-2 text-[9px] font-black px-2 py-1 rounded-full uppercase tracking-wider ${
                  isStudent ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"
                }`}>
                  {new Date().getFullYear()}
                </span>
              </div>

              {/* Destination grid
                  Mobile:  2 columns — compact row layout (flag + name + tag)
                  sm+:     4 columns — original card layout                    */}
              <div ref={listRef} className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                {topList.map((dest, i) => {
                  const flag = getFlag(dest.country);
                  return (
                    <button
                      key={dest.country}
                      data-item
                      type="button"
                      onMouseDown={(e) => { e.preventDefault(); handleSelect(dest.country); }}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={`
                        group relative flex items-center gap-2 sm:gap-3
                        p-2.5 sm:p-3 rounded-xl border-2 text-left
                        transition-all duration-150 w-full
                        ${activeIndex === i
                          ? "border-green-300 bg-green-50/80 shadow-md scale-[1.02]"
                          : "border-gray-100 bg-gray-50/50 hover:border-green-200 hover:bg-green-50/40 hover:shadow-sm hover:scale-[1.01]"
                        }
                      `}
                    >
                      {/* Flag */}
                      <div className="w-8 h-[22px] sm:w-9 sm:h-6 rounded-md overflow-hidden shrink-0 shadow-sm border border-gray-200 bg-white flex items-center justify-center">
                        {flag
                          ? <img src={flag} alt={dest.country} className="w-full h-full object-cover" loading="lazy" />
                          : <span className="text-xs">{dest.emoji}</span>
                        }
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <p className="font-black text-[11px] sm:text-[12px] text-gray-800 truncate leading-tight mb-0.5">
                          {dest.country}
                        </p>
                        <span
                          className="inline-block text-[8px] sm:text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wide leading-none"
                          style={{ backgroundColor: dest.color + "1a", color: dest.color }}
                        >
                          {dest.tag}
                        </span>
                      </div>

                      {/* Arrow — desktop only */}
                      <ArrowUpRight
                        size={10}
                        className={`absolute top-2 right-2 transition-all opacity-0 group-hover:opacity-100 hidden sm:block ${
                          isStudent ? "text-green-500" : "text-blue-500"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 flex items-center justify-between">
                <p className="text-[10px] sm:text-[11px] text-gray-400 font-medium">
                  {countries.length}+ countries
                </p>
                <button
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    router.push(isStudent ? "/study-abroad/student-visa" : "/visa");
                    setOpen(false);
                  }}
                  className={`flex items-center gap-1 text-xs font-black transition-colors ${
                    isStudent ? "text-green-600 hover:text-green-700" : "text-blue-600 hover:text-blue-700"
                  }`}
                >
                  Browse all <ChevronRight size={11} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}