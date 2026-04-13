"use client";
import { useState } from 'react';
import Link from 'next/link';
import visaData from '@/app/data/countries.json';
import { createSlug } from '@/app/lib/utils';

export default function VisaSearchBar() {
  const [origin, setOrigin] = useState('bangladesh');
  const [destination, setDestination] = useState('canada');

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {/* Unified Container with dynamic padding */}
      <div className="bg-white/70 backdrop-blur-2xl  p-2 md:p-3 lg:p-3 rounded-2xl md:rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-white">


        {/* Action Row - Responsive logic ensures it stays balanced */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2">
          
          {/* Origin Selection */}
          <div className="flex-1 min-w-0 bg-slate-50/50 px-4 py-2 md:py-3 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 hover:border-blue-200 transition-all flex items-center gap-3 group">
            <div className="w-8 h-5 rounded-sm overflow-hidden shadow-sm shrink-0 border border-slate-200">
              <img 
                src={visaData.find(c => c.country.toLowerCase() === origin)?.flag} 
                className="w-full h-full object-cover" 
                alt="" 
              />
            </div>
            <div className="flex-1 min-w-0">
              <label className="block text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Citizenship</label>
              <select 
                value={origin} 
                onChange={(e) => setOrigin(e.target.value)}
                className="bg-transparent text-sm md:text-base font-bold outline-none cursor-pointer capitalize w-full appearance-none truncate"
              >
                {visaData.filter(c => c.country.toLowerCase() !== destination).map((c) => (
                  <option key={c.code} value={c.country.toLowerCase()}>{c.country}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Separator Icon - Hidden on mobile, subtle on desktop */}
          <div className="hidden md:flex items-center justify-center shrink-0 px-1">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
          </div>

          {/* Destination Selection */}
          <div className="flex-1 min-w-0 bg-slate-50/50 px-4 py-2 md:py-3 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 hover:border-blue-200 transition-all flex items-center gap-3 group">
            <div className="w-8 h-5 rounded-sm overflow-hidden shadow-sm shrink-0 border border-slate-200">
              <img 
                src={visaData.find(c => c.country.toLowerCase() === destination)?.flag} 
                className="w-full h-full object-cover" 
                alt="" 
              />
            </div>
            <div className="flex-1 min-w-0">
              <label className="block text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Destination</label>
              <select 
                value={destination} 
                onChange={(e) => setDestination(e.target.value)}
                className="bg-transparent text-sm md:text-base font-bold outline-none cursor-pointer capitalize w-full appearance-none truncate"
              >
                {visaData.filter(c => c.country.toLowerCase() !== origin).map((c) => (
                  <option key={c.code} value={c.country.toLowerCase()}>{c.country}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Action Button - Full width on mobile, auto-width on desktop */}
          <Link 
            href={`/visa/visa-guide/${createSlug(destination)}-visa-for-${createSlug(origin)}`}
            className="w-full md:w-auto bg-green-800 hover:bg-yellow-500 text-white px-6 md:px-10 py-4 md:py-5 rounded-[1.5rem] md:rounded-[2rem] font-black transition-all active:scale-95 flex items-center justify-center gap-2 group whitespace-nowrap shadow-xl md:ml-2"
          >
            <span className="text-sm md:text-base">Check Your Visa Requirements</span>
            <svg className="group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}