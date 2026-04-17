"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlaneTakeoff, 
  PlaneLanding, 
  Calendar, 
  Users, 
  Search, 
  Filter, 
  ArrowRightLeft, 
  ChevronDown,
  Clock,
  Briefcase
} from 'lucide-react';

const FlightSearch = () => {
  const [tripType, setTripType] = useState('round-trip');
  const [isSearching, setIsSearching] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#050807] selection:bg-[#005a31]/10">
      {/* --- Header/Search Hero Section --- */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden bg-white">
        {/* Soft Background Blurs */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#005a31]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-500/5 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-10"
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              Find your next <span className="text-[#005a31] italic">Adventure.</span>
            </h1>
            <p className="text-slate-500 font-medium">Search the best deals from over 500+ airlines worldwide.</p>
          </motion.div>

          {/* Search Bar Container */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-slate-100 shadow-[0_30px_100px_rgba(0,0,0,0.04)] rounded-[2.5rem] p-4 md:p-8"
          >
            {/* Trip Type Tabs */}
            <div className="flex gap-2 mb-8 p-1 bg-slate-50 w-fit rounded-2xl border border-slate-100">
              {['one-way', 'round-trip', 'multi-city'].map((type) => (
                <button
                  key={type}
                  onClick={() => setTripType(type)}
                  className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    tripType === type 
                    ? 'bg-white text-[#005a31] shadow-sm ring-1 ring-slate-100' 
                    : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {type.replace('-', ' ')}
                </button>
              ))}
            </div>

            <form onSubmit={handleSearch} className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <SearchInput icon={<PlaneTakeoff size={18}/>} label="From" placeholder="Dubai (DXB)" />
                <div className="relative">
                  <div className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white border border-slate-100 rounded-full items-center justify-center text-slate-400 hover:text-[#005a31] cursor-pointer shadow-sm transition-all">
                    <ArrowRightLeft size={14} />
                  </div>
                  <SearchInput icon={<PlaneLanding size={18}/>} label="To" placeholder="London (LHR)" />
                </div>
              </div>

              <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <SearchInput icon={<Calendar size={18}/>} label="Departure" placeholder="Select Date" type="text" />
                <SearchInput icon={<Calendar size={18}/>} label="Return" placeholder="Select Date" type="text" />
              </div>

              <div className="lg:col-span-2">
                <SearchInput icon={<Users size={18}/>} label="Travelers" placeholder="1 Adult, Economy" />
              </div>

              <div className="lg:col-span-1 flex items-end">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-[60px] bg-[#005a31] hover:bg-[#004824] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-green-900/10 transition-all"
                >
                  {isSearching ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Search size={24} />}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* --- Results Section --- */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filters Sidebar (Hidden on mobile) */}
          <aside className="hidden lg:block space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Filters</h3>
              <button className="text-[10px] font-bold text-orange-500 uppercase tracking-tighter">Clear All</button>
            </div>
            
            <FilterGroup title="Stops">
              <FilterOption label="Non-stop" price="$840" checked />
              <FilterOption label="1 Stop" price="$620" />
              <FilterOption label="2+ Stops" price="$450" />
            </FilterGroup>

            <FilterGroup title="Airlines">
              <FilterOption label="Emirates" price="$920" checked />
              <FilterOption label="Qatar Airways" price="$890" />
              <FilterOption label="British Airways" price="$740" />
            </FilterGroup>
          </aside>

          {/* Results List */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-slate-500 font-medium">Showing <span className="text-[#050807] font-bold">124</span> flights for DXB → LHR</p>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#005a31] bg-[#005a31]/5 px-4 py-2 rounded-full border border-[#005a31]/10">
                Sort by: Best Price <ChevronDown size={14} />
              </div>
            </div>

            <AnimatePresence>
              {[1, 2, 3].map((item) => (
                <FlightCard key={item} index={item} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- Sub-Components ---

const SearchInput = ({ icon, label, placeholder, type = "text" }) => (
  <div className="space-y-1.5">
    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#005a31] ml-1">{label}</label>
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#005a31] transition-colors">
        {icon}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-[60px] bg-slate-50/50 border border-slate-100 rounded-2xl pl-12 pr-4 text-sm font-medium focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#005a31]/5 focus:border-[#005a31]/20 transition-all"
      />
    </div>
  </div>
);

const FlightCard = ({ index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="group bg-white border border-slate-100 p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all flex flex-col md:flex-row items-center gap-8"
  >
    {/* Airline Info */}
    <div className="w-full md:w-32 flex flex-col items-center gap-2 text-center">
      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center p-2 border border-slate-100 group-hover:border-[#005a31]/20 transition-all">
        {/* Placeholder for Airline Logo */}
        <PlaneTakeoff size={24} className="text-[#005a31]" />
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Emirates</span>
    </div>

    {/* Flight Route */}
    <div className="flex-1 w-full grid grid-cols-7 items-center gap-2">
      <div className="col-span-2 text-right">
        <h4 className="text-xl md:text-2xl font-black">10:30</h4>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">DXB</p>
      </div>
      
      <div className="col-span-3 flex flex-col items-center px-4 relative">
        <span className="text-[9px] font-black text-[#005a31] uppercase tracking-widest mb-1">7h 45m</span>
        <div className="w-full h-[2px] bg-slate-100 relative">
          <div className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-slate-200" />
          <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-slate-200" />
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-0 left-0 h-full bg-[#005a31]"
          />
          <PlaneTakeoff size={14} className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-[#005a31] bg-white px-0.5" />
        </div>
        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Non-stop</span>
      </div>

      <div className="col-span-2 text-left">
        <h4 className="text-xl md:text-2xl font-black">18:15</h4>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">LHR</p>
      </div>
    </div>

    {/* Price & Action */}
    <div className="w-full md:w-48 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 flex flex-col items-center md:items-end justify-center">
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Economy</span>
      <h3 className="text-3xl font-black text-[#050807] mb-4 tracking-tighter">$840</h3>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-3.5 bg-orange-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-orange-500/20"
      >
        Select Flight
      </motion.button>
    </div>
  </motion.div>
);

const FilterGroup = ({ title, children }) => (
  <div className="space-y-4">
    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#005a31] ml-1">{title}</h4>
    <div className="space-y-2">{children}</div>
  </div>
);

const FilterOption = ({ label, price, checked = false }) => (
  <label className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl cursor-pointer hover:border-[#005a31]/20 transition-all group">
    <div className="flex items-center gap-3">
      <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${checked ? 'bg-[#005a31] border-[#005a31]' : 'bg-slate-50 border-slate-200'}`}>
        {checked && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
      </div>
      <span className="text-xs font-bold text-slate-600 group-hover:text-[#050807]">{label}</span>
    </div>
    <span className="text-[10px] font-bold text-slate-400 tracking-tighter">{price}</span>
  </label>
);

export default FlightSearch;