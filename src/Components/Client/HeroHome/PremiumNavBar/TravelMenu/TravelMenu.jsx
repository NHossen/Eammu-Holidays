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

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6; 
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-2 font-sans relative mt-24 mb-4">
      
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
                  <Icon size={18} className={`mb-0.5 ${isActive ? 'text-blue-900' : 'text-gray-400'}`} />
                  <span className={`text-[10px] sm:text-[11px] font-extrabold whitespace-nowrap tracking-tight ${isActive ? 'text-blue-900' : 'text-gray-400'}`}>
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
              <div className="space-y-3 w-full">
                <div className="flex flex-col items-center gap-2 max-w-4xl mx-auto w-full">
                  <h2 className="text-sm sm:text-lg font-black text-gray-800 text-center tracking-tight leading-none">Find Study Abroad Programs</h2>
                  <div className="relative w-full max-w-2xl">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <input 
                      type="text"
                      placeholder="Search destination country..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[13px] font-bold outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-4xl mx-auto w-full">
                  {filteredStudyCountries.map((c) => (
                    <Link key={c.code} href={`/study-abroad/student-visa/${createSlug(c.country)}`} className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-yellow-400 transition-all">
                      <div className="h-14 bg-gray-100"><img src={c.flag} alt={c.country} className="w-full h-full object-cover" /></div>
                      <div className="p-1.5 text-center"><p className="text-[10px] font-black text-gray-800 truncate">{c.country}</p></div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* --- FLIGHT TAB --- */}
            {activeTab === 'flight' && (
              <div className="space-y-3 w-full text-center">
                <h2 className="text-sm sm:text-lg font-black text-gray-800 tracking-tight leading-none">Search Cheap Air Tickets</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-4xl mx-auto w-full">
                  {['From', 'To', 'Departure', 'Class'].map((label, i) => (
                    <div key={label} className="bg-slate-50 border border-slate-100 p-2 rounded-xl text-left">
                      <p className="text-[8px] font-black text-slate-400 uppercase leading-none mb-0.5">{label}</p>
                      <p className="text-[13px] font-bold">{['Dhaka', 'Toronto', 'Select Date', 'Economy'][i]}</p>
                    </div>
                  ))}
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
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex justify-center w-full px-8">
          <Link 
            href={
              activeTab === 'visa' ? `/visa/visa-guide/${createSlug(destination)}-visa-for-${createSlug(origin)}` : 
              activeTab === 'study' ? "/study-abroad/student-visa" : 
              activeTab === 'flight' ? "/our-services/air-tickets" :
              activeTab === 'tour' ? "/our-services/tour-packages" : "/our-services/things-to-do"
            } 
            className="w-full sm:w-64 bg-[#FFC107] hover:bg-yellow-500 text-blue-950 py-3.5 rounded-xl font-black text-sm uppercase shadow-xl text-center active:scale-95 transition-all"
          >
            Search {activeTab === 'activities' ? 'Activities' : activeTab === 'visa' ? 'Visa' : activeTab}
          </Link>
        </div>
      </div>
    </div>
  );
}