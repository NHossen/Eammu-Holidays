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

const TABS = [
  { id: 'visa',         label: 'Visa',              icon: Globe,         activeColor: 'text-green-700',  underline: 'bg-green-500'  },
  { id: 'flight',       label: 'Flight',            icon: Plane,         activeColor: 'text-blue-700',   underline: 'bg-blue-500'   },
  { id: 'study',        label: 'Study Abroad',      icon: GraduationCap, activeColor: 'text-purple-700', underline: 'bg-purple-500' },
  { id: 'scholarships', label: 'Scholarships',      icon: BookOpen,      activeColor: 'text-amber-700',  underline: 'bg-amber-400'  },
  { id: 'templates',    label: 'Templates',         icon: FileText,      activeColor: 'text-rose-600',   underline: 'bg-rose-500'   },
  { id: 'processing',   label: 'Visa Processing',   icon: Clock,         activeColor: 'text-yellow-600', underline: 'bg-yellow-500' },
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
  const [isInteracting, setIsInteracting] = useState(false);
  const [animatingTab, setAnimatingTab]   = useState('visa');

  // For processing tab
  const [visaType, setVisaType]   = useState('sticker');
  const [procOrigin, setProcOrigin]           = useState('bangladesh');
  const [procDestination, setProcDestination] = useState('canada');

  // Scholarship search
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  // Countries list (loaded via API or imported)
  // Using the imported countries.json; if you prefer the API, replace accordingly
  const countriesList = countries; // alias for clarity

  const scrollRef = useRef(null);

  const filteredStudyCountries = useMemo(() => {
    return countriesList.filter(c =>
      c.country.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 4);
  }, [searchTerm, countriesList]);

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

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setSearchTerm('');
    setShowSuggestions(false);
    setAnimatingTab(tabId);
    setTimeout(() => setAnimatingTab(null), 700);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-2 font-sans relative mt-24 mb-4">
      
      {/* 1. FLOATING MENU BAR */}
      <div className="relative z-20 flex justify-center px-2">
        <div className="flex items-center bg-white border border-gray-100 shadow-xl rounded-2xl p-1 w-full sm:w-auto">
          
          <button onClick={() => scroll('left')} className="p-1.5 cursor-pointer hover:bg-gray-50 rounded-xl shrink-0 sm:hidden">
            <ChevronLeft size={16} className="text-gray-400" />
          </button>

          <div 
            ref={scrollRef}
            className="flex items-center overflow-x-auto no-scrollbar scroll-smooth flex-nowrap px-1"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {TABS.map((tab) => {
              const Icon     = tab.icon;
              const isActive = activeTab === tab.id;
              const anim     = iconAnimations[tab.id];

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
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

          <button onClick={() => scroll('right')} className="p-1.5 cursor-pointer hover:bg-gray-50 rounded-xl shrink-0 sm:hidden">
            <ChevronRight size={16} className="text-gray-400" />
          </button>
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
                <h2 className="text-sm sm:text-lg font-black text-gray-800 text-center tracking-tight leading-none">
                  Check Your Visa Requirements
                </h2>
                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 max-w-4xl mx-auto w-full">
                  <CountrySelector
                    label="Citizenship"
                    value={origin}
                    onChange={setOrigin}
                    exclude={destination}
                    recentKey="recent_origin"
                  />
                  <div className="hidden md:flex shrink-0 px-1">
                    <ChevronRightIcon size={14} className="text-slate-300" />
                  </div>
                  <CountrySelector
                    label="Destination"
                    value={destination}
                    onChange={setDestination}
                    exclude={origin}
                    recentKey="recent_dest"
                  />
                  <div className="md:w-32 bg-slate-50/70 px-3 py-2.5 rounded-xl border border-slate-100 text-left">
                    <p className="text-[8px] font-black uppercase text-blue-900 leading-none mb-1">Visa Type</p>
                    <p className="font-bold text-blue-900 text-[13px]">Tourist</p>
                  </div>
                </div>
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
              <div className="space-y-2 w-full text-center">
                <div
                  className={`w-full relative rounded-xl bg-white/40 overflow-hidden transition-all duration-300 ease-in-out
                    ${isInteracting ? 'h-[380px] sm:h-[520px] z-50' : 'h-[220px] sm:h-[110px] z-10'}`}
                  onMouseEnter={() => setIsInteracting(true)}
                  onMouseLeave={() => setIsInteracting(false)}
                >
                  <div className="w-full h-full overflow-y-auto overflow-x-hidden">
                    <iframe
                      src="/travelpayouts.html"
                      scrolling="yes"
                      className="w-full h-[900px] border-0"
                      style={{ background: 'transparent', display: 'block' }}
                    />
                  </div>
                  {!isInteracting && (
                    <div
                      className="absolute inset-0 z-20 cursor-pointer"
                      onClick={() => setIsInteracting(true)}
                    />
                  )}
                </div>
              </div>
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
              <div className="space-y-3 w-full text-center">
                <h2 className="text-sm sm:text-lg font-black text-gray-800 tracking-tight leading-none">Find Best Tour Packages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl mx-auto w-full">
                  <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-left">
                    <p className="text-[8px] font-black uppercase text-amber-700 leading-none mb-0.5">Destination</p>
                    <p className="text-[13px] font-bold">Search Packages...</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-left">
                    <p className="text-[8px] font-black uppercase text-amber-700 leading-none mb-0.5">Month</p>
                    <p className="text-[13px] font-bold">Anytime</p>
                  </div>
                </div>
              </div>
            )}

            {/* ════════════════ ACTIVITIES TAB ════════════════ */}
            {activeTab === 'activities' && (
              <div className="space-y-3 w-full text-center">
                <h2 className="text-sm sm:text-lg font-black text-gray-800 tracking-tight leading-none">Discover Things to Do</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl mx-auto w-full">
                  <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-left">
                    <p className="text-[8px] font-black uppercase text-rose-600 leading-none mb-0.5">Location</p>
                    <p className="text-[13px] font-bold">City or Activity...</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-left">
                    <p className="text-[8px] font-black uppercase text-rose-600 leading-none mb-0.5">Category</p>
                    <p className="text-[13px] font-bold">Adventure & Fun</p>
                  </div>
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>

        {/* ── OVERLAPPING CTA BUTTON ── */}
        {activeTab !== 'flight' && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex justify-center w-full px-8">
            <Link 
              href={
                activeTab === 'visa'         ? `/visa/visa-guide/${createSlug(destination)}-visa-for-${createSlug(origin)}` :
                activeTab === 'study'        ? '/study-abroad/student-visa' :
                activeTab === 'scholarships' ? '/scholarships' :
                activeTab === 'templates'    ? '/travel-resources' :
                activeTab === 'processing'   ? `/travel-resources/visa-processing-time-tracker/${procOrigin.replace(/\s+/g, "-")}-national-visa-processing-time-for-${procDestination.replace(/\s+/g, "-")}-${visaType}` :
                activeTab === 'tour'         ? '/our-services/tour-packages' :
                                               '/our-services/things-to-do'
              }
              className="w-full sm:w-64 bg-[#FFC107] hover:bg-yellow-500 text-blue-950 py-3.5 rounded-xl font-black text-sm uppercase shadow-xl text-center active:scale-95 transition-all"
            >
              {activeTab === 'visa'         ? 'Search Visa' :
               activeTab === 'study'        ? 'Search Study' :
               activeTab === 'scholarships' ? 'Find Scholarships' :
               activeTab === 'templates'    ? 'Download Templates' :
               activeTab === 'processing'   ? 'Track Processing' :
               activeTab === 'tour'         ? 'Search Tour' :
                                              'Search Activities'}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}