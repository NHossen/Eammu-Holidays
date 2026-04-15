"use client";
import { useState, useEffect } from "react";
import countries from "@/app/data/countries.json";
import Link from "next/link";
import { createSlug } from "@/app/lib/utils";


export default function StudentVisa() {
 
  const [currentPage, setCurrentPage] = useState(1);

 
  return (
    <div className="min-h-screen text-[#1a1c1e]">
      
      {/* --- HERO SECTION WITH AUTOMATIC SLIDES & SEARCH INSIDE --- */}
      <div className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden py-22">
  

        {/* Hero Content (Floating on Slides) */}
        <div className="relative text-center z-10 w-full max-w-7xl px-6">
        
          {/* Search & Filter Panel - MOVED INSIDE HERO */}
          <div className="bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-6">
              <div className="relative w-full md:max-w-2xl">
                <input
                  type="text"
                  placeholder="Search destination country..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400 focus:border-green-500 outline-none transition duration-150 bg-gray-50 text-lg shadow-inner"
                  onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              
              <p className="text-sm font-bold text-green-700 bg-green-50 px-4 py-2 rounded-lg whitespace-nowrap border border-green-100">
                Found: {filteredCountries.length} destinations
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto p-6 md:p-10 lg:p-16">
        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentItems.map((c, index) => (
            <div 
              key={`${c.code}-${index}`}
              className="bg-white group rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100/50 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col"
            >
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img 
                  src={c.flag} 
                  alt={c.country} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition" />
              </div>

              <div className="p-7 flex flex-col grow justify-between">
                <div>
                  <h2 className="text-[#111] text-2xl font-bold mb-1 tracking-tight">
                    {c.country}
                  </h2>
                  <p className="text-gray-500 text-sm font-medium mb-6">
                    Professional Student Visa Guide
                  </p>
                </div>
                
                <Link
                  href={`/study-abroad/student-visa/${createSlug(c.country)}`}
                  className="w-full py-3.5 bg-gradient-to-b from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-center rounded-xl font-semibold transition-all duration-200 shadow-md shadow-green-100 hover:shadow-green-200 active:scale-[0.98] active:shadow-inner"
                >
                    Apply for {c.country}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCountries.length === 0 && (
          <div className="text-center py-24 bg-white rounded-2xl shadow-inner border border-gray-100">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2 2 2 0 012 2v.604M8.967 8.967l.033.033M18 10.5V12"></path></svg>
            <h3 className="text-xl font-bold text-gray-700">No destinations found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search term or letter filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}