"use client";
import { useState, useEffect } from "react";
import countries from "@/app/data/countries.json";
import Link from "next/link";
import { createSlug } from "@/app/lib/utils";
import Image from "next/image";

export default function StudentVisa() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 8;

  // Images taken from your public folder structure
 const slides = [
  {
    src: "/denmark-bottom-slides.jpg",
    alt: "International students exploring Copenhagen while studying abroad in Denmark"
  },
  {
    src: "/study-uk-banner.jpg",
    alt: "UK student visa guide for international applicants at a British university campus"
  },
  {
    src: "/russia-header.jpg",
    alt: "Student life and higher education opportunities for foreigners in Russia"
  }
];

  // Automatic Slide Logic
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  // 1. Filter Logic (Letter + Search)
  const filteredCountries = countries.filter((c) => {
    const matchesLetter = selectedLetter === "All" || (c.country && c.country[0].toUpperCase() === selectedLetter);
    const matchesSearch = c.country && c.country.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLetter && matchesSearch;
  });

  // 2. Pagination Logic
  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCountries.slice(indexOfFirstItem, indexOfLastItem);

  const alphabet = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

  return (
    <div className="min-h-screen text-[#1a1c1e]">
      
      {/* --- HERO SECTION WITH AUTOMATIC SLIDES & SEARCH INSIDE --- */}
      <div className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden py-22">
        {/* Slide Backgrounds */}
        {slides.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              width='1800'
              height='900'
            />
            {/* Darker overlay to make search box pop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
          </div>
        ))}

        {/* Hero Content (Floating on Slides) */}
        <div className="relative text-center z-10 w-full max-w-7xl px-6">
          <div className=" mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5  rounded-full bg-green-500 text-white text-sm font-semibold mb-5 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white "></span>
              </span>
              200+ Countries Available
            </span>
           <h1 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
              Seamless <span className="text-orange-400">Student Visa</span> Consultancy in Dhaka
            </h1>
           <p className="text-white/90 max-w-6xl mb-8 leading-relaxed text-sm md:text-lg font-medium">
              Expert documentation support for <strong>USA F1/F2, UK Standard Visitor, Canada V-1,</strong> and the <strong>29-country Schengen Area</strong>. We turn complex embassy requirements into approved visas.
            </p>
          </div>

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

            <div className="border-t border-gray-100 pt-6 flex flex-wrap justify-center gap-x-2 gap-y-2">
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  onClick={() => { setSelectedLetter(letter); setCurrentPage(1); }}
                  className={`flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full text-xs md:text-sm font-bold transition-all duration-150 ${
                    selectedLetter === letter 
                    ? "bg-green-600 text-white shadow-lg scale-110" 
                    : "bg-gray-100 text-gray-500 hover:bg-green-100 hover:text-green-700"
                  }`}
                >
                  {letter}
                </button>
              ))}
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

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-center items-center gap-5">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium disabled:opacity-40 disabled:pointer-events-none hover:bg-gray-50 transition"
            >
              Previous
            </button>
            <span className="text-gray-700 font-medium px-4 py-2 bg-gray-100 rounded-full text-sm">
              Page <span className="font-bold text-gray-950">{currentPage}</span> of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className="px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium disabled:opacity-40 disabled:pointer-events-none hover:bg-gray-50 transition"
            >
              Next
            </button>
          </div>
        )}

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