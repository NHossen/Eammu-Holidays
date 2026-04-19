"use client";

import React, { useState, useRef, useMemo } from 'react';
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
  ChevronRightIcon,
  Search
} from 'lucide-react';

// --- Data & Utils ---
import countries from "@/app/data/countries.json";
import { createSlug } from '@/app/lib/utils';

const TABS = [
  { id: 'visa', label: 'Visa', icon: Globe },
  { id: 'flight', label: 'Flight', icon: Plane },
  { id: 'study', label: 'Study Abroad', icon: GraduationCap },
  { id: 'tour', label: 'Tour', icon: Palmtree },
  { id: 'activities', label: 'Activities', icon: Ticket },
];

export default function TravelMenu() {
  const [activeTab, setActiveTab] = useState('visa');
  const [origin, setOrigin] = useState('bangladesh');
  const [destination, setDestination] = useState('canada');
  const [searchTerm, setSearchTerm] = useState("");
  const scrollRef = useRef(null);

  const filteredStudyCountries = useMemo(() => {
    return countries.filter(c => 
      c.country.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 4); 
  }, [searchTerm]);
// ... inside your component ...Flight
// ... inside your component ...
const [isInteracting, setIsInteracting] = useState(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6; 
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-2 font-sans relative mt-24 mb-4">
      
      {/* 1. FLOATING MENU BAR */}
      <div className="relative z-20 flex justify-center px-2">
        <div className="flex items-center bg-white border border-gray-100 shadow-xl rounded-2xl p-1 w-full sm:w-auto">
          
          <button onClick={() => scroll('left')} className="p-1.5 hover:bg-gray-50 rounded-xl shrink-0 sm:hidden">
            <ChevronLeft size={16} className="text-gray-400" />
          </button>

          <div 
            ref={scrollRef}
            className="flex items-center overflow-x-auto no-scrollbar scroll-smooth flex-nowrap px-1"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSearchTerm(""); 
                  }}
                  className="flex-shrink-0 relative flex flex-col items-center px-4 sm:px-6 py-1.5 transition-all outline-none"
                >
                  <Icon size={18} className={`mb-0.5 ${isActive ? 'text-green-800' : 'text-gray-400'}`} />
                  <span className={`text-[10px] sm:text-[11px] font-extrabold whitespace-nowrap tracking-tight ${isActive ? 'text-green-800' : 'text-gray-400'}`}>
                    {tab.label}
                  </span>
                  {isActive && (
                    <motion.div layoutId="tabMarker" className="absolute bottom-0 left-3 right-3 h-[2px] bg-yellow-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          <button onClick={() => scroll('right')} className="p-1.5 hover:bg-gray-50 rounded-xl shrink-0 sm:hidden">
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
            {/* --- VISA TAB --- */}
            {activeTab === 'visa' && (
              <div className="space-y-3 w-full">
                <h2 className="text-sm sm:text-lg font-black text-gray-800 text-center tracking-tight leading-none">Check Your Visa Requirements</h2>
                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 max-w-4xl mx-auto w-full">
                  <div className="flex-1 min-w-0 bg-slate-50/70 px-3 py-1.5 rounded-xl border border-slate-100 flex items-center gap-3">
                    <div className="w-7 h-4.5 rounded-sm overflow-hidden border border-slate-200 shrink-0">
                      <img src={countries.find(c => c.country.toLowerCase() === origin)?.flag} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="flex-1 text-left">
                      <label className="block text-[8px] font-black uppercase text-slate-400 leading-none mb-0.5">Citizenship</label>
                      <select value={origin} onChange={(e) => setOrigin(e.target.value)} className="bg-transparent text-[13px] font-bold outline-none w-full appearance-none">
                        {countries.filter(c => c.country.toLowerCase() !== destination).map((c) => (
                          <option key={c.code} value={c.country.toLowerCase()}>{c.country}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="hidden md:flex shrink-0 px-1"><ChevronRightIcon size={14} className="text-slate-300" /></div>

                  <div className="flex-1 min-w-0 bg-slate-50/70 px-3 py-1.5 rounded-xl border border-slate-100 flex items-center gap-3">
                    <div className="w-7 h-4.5 rounded-sm overflow-hidden border border-slate-200 shrink-0">
                      <img src={countries.find(c => c.country.toLowerCase() === destination)?.flag} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="flex-1 text-left">
                      <label className="block text-[8px] font-black uppercase text-slate-400 leading-none mb-0.5">Destination</label>
                      <select value={destination} onChange={(e) => setDestination(e.target.value)} className="bg-transparent text-[13px] font-bold outline-none w-full appearance-none">
                        {countries.filter(c => c.country.toLowerCase() !== origin).map((c) => (
                          <option key={c.code} value={c.country.toLowerCase()}>{c.country}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="md:w-32 bg-slate-50/70 px-3 py-1.5 rounded-xl border border-slate-100 text-left">
                    <p className="text-[8px] font-black uppercase text-blue-900 leading-none mb-0.5">Visa Type</p>
                    <p className="font-bold text-blue-900 text-[13px]">Tourist</p>
                  </div>
                </div>
              </div>
            )}

           {/* --- STUDY ABROAD TAB --- */}
{activeTab === 'study' && (
  <div className="space-y-4 w-full">
    <div className="flex flex-col items-center gap-2 max-w-4xl mx-auto w-full relative">
      <h2 className="text-sm sm:text-lg font-black text-gray-800 text-center tracking-tight leading-none">
        Find Your Higher Study Destinations
      </h2>
      
      {/* Search & Auto-suggestion Input */}
      <div className="relative w-full max-w-2xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
        <input 
          type="text"
          placeholder="Search  Your Study destination ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[13px] font-bold outline-none focus:border-yellow-400 transition-colors"
        />

        {/* Auto-suggestion Dropdown */}
        <AnimatePresence>
          {searchTerm.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-50 left-0 right-0 top-full mt-1 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden"
            >
              {countries
                .filter(c => c.country.toLowerCase().includes(searchTerm.toLowerCase()))
                .slice(0, 5)
                .map((c) => (
                  <Link
                    key={c.code}
                    href={`/study-abroad/student-visa/${createSlug(c.country)}`}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors border-b border-gray-50 last:border-none"
                  >
                    <img src={c.flag} className="w-6 h-4 object-cover rounded-sm" alt="" />
                    <span className="text-[13px] font-bold text-gray-700">{c.country}</span>
                  </Link>
                ))}
              {countries.filter(c => c.country.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && (
                <div className="px-4 py-3 text-[12px] text-gray-400 font-medium">No countries found</div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>

    {/* Top Destinations Section (Shows when not searching) */}
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Top Destinations</p>
        <div className="h-[1px] flex-1 bg-slate-100 ml-4"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {/* You can manually pick top countries or use slice */}
        {countries
          .filter(c => ["Canada", "European Union", "United States", "Australia"].includes(c.country))
          .map((c) => (
            <Link 
              key={c.code} 
              href={`/study-abroad/student-visa/${createSlug(c.country)}`} 
              className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-yellow-400 hover:shadow-md transition-all"
            >
              <div className="h-16 bg-gray-100 overflow-hidden">
                <img 
                  src={c.flag} 
                  alt={c.country} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-2 text-center bg-white">
                <p className="text-[11px] font-black text-gray-800 truncate">{c.country}</p>
              </div>
              {/* Optional Hot Badge */}
              <div className="absolute top-1 right-1 bg-red-500 text-white text-[7px] font-black px-1.5 py-0.5 rounded-full uppercase">
                Hot
              </div>
            </Link>
          ))}
      </div>
    </div>
  </div>
)}

{/* --- FLIGHT TAB --- */}
{activeTab === 'flight' && (
  <div className="space-y-2 w-full text-center">

    {/* OUTER WRAPPER */}
    <div
      className={`w-full relative rounded-xl bg-white/40 overflow-hidden transition-all duration-300 ease-in-out
        ${isInteracting ? 'h-[380px] sm:h-[520px] z-50' : 'h-[220px] sm:h-[110px] z-10'}`}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
    >

      {/* SCROLL CONTAINER (FORCES Y ONLY) */}
      <div className="w-full h-full overflow-y-auto overflow-x-hidden">

        <iframe
          src="/travelpayouts.html"
          scrolling="yes"
          className="w-full h-[900px] border-0"
          style={{
            background: 'transparent',
            display: 'block'
          }}
        />

      </div>

      {/* CLICK TO EXPAND OVERLAY */}
      {!isInteracting && (
        <div
          className="absolute inset-0 z-20 cursor-pointer"
          onClick={() => setIsInteracting(true)}
        />
      )}

    </div>
  </div>
)}
            {/* --- TOUR TAB --- */}
            {activeTab === 'tour' && (
              <div className="space-y-3 w-full text-center">
                <h2 className="text-sm sm:text-lg font-black text-gray-800 tracking-tight leading-none">Find Best Tour Packages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl mx-auto w-full">
                  <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-left">
                    <p className="text-[8px] font-black text-slate-400 uppercase leading-none mb-0.5">Destination</p>
                    <p className="text-[13px] font-bold">Search Packages...</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-left">
                    <p className="text-[8px] font-black text-slate-400 uppercase leading-none mb-0.5">Month</p>
                    <p className="text-[13px] font-bold">Anytime</p>
                  </div>
                </div>
              </div>
            )}

            {/* --- ACTIVITIES TAB --- */}
            {activeTab === 'activities' && (
              <div className="space-y-3 w-full text-center">
                <h2 className="text-sm sm:text-lg font-black text-gray-800 tracking-tight leading-none">Discover Things to Do</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl mx-auto w-full">
                  <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-left">
                    <p className="text-[8px] font-black text-slate-400 uppercase leading-none mb-0.5">Location</p>
                    <p className="text-[13px] font-bold">City or Activity...</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-left">
                    <p className="text-[8px] font-black text-slate-400 uppercase leading-none mb-0.5">Category</p>
                    <p className="text-[13px] font-bold">Adventure & Fun</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

       {/* --- PERFECTLY CENTERED OVERLAPPING BUTTON --- */}
{activeTab !== 'flight' && (
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex justify-center w-full px-8">
    <Link 
      href={
        activeTab === 'visa' ? `/visa/visa-guide/${createSlug(destination)}-visa-for-${createSlug(origin)}` : 
        activeTab === 'study' ? "/study-abroad/student-visa" : 
        activeTab === 'tour' ? "/our-services/tour-packages" : "/our-services/things-to-do"
      } 
      className="w-full sm:w-64 bg-[#FFC107] hover:bg-yellow-500 text-blue-950 py-3.5 rounded-xl font-black text-sm uppercase shadow-xl text-center active:scale-95 transition-all"
    >
      Search {activeTab === 'activities' ? 'Activities' : activeTab === 'visa' ? 'Visa' : activeTab}
    </Link>
  </div>
)}
      </div>
    </div>
  );
}