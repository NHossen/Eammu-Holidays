"use client";
import { useState, useEffect } from "react";
import countries from "@/app/data/countries.json";
import Link from "next/link";
import { createSlug } from "@/app/lib/utils";
import { GraduationCap, Search, ChevronRight, Globe, BookOpen, Award, Users, ArrowRight } from "lucide-react";

export default function StudentVisa() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 12;

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

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const filteredCountries = countries.filter((c) => {
    const matchesLetter = selectedLetter === "All" || (c.country && c.country[0].toUpperCase() === selectedLetter);
    const matchesSearch = c.country && c.country.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLetter && matchesSearch;
  });

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCountries.slice(indexOfFirstItem, indexOfLastItem);

  const alphabet = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

  const stats = [
    { icon: <Globe size={20} />, value: "200+", label: "Destinations" },
    { icon: <GraduationCap size={20} />, value: "98%", label: "Visa Success" },
    { icon: <Award size={20} />, value: "500+", label: "Scholarships" },
    { icon: <Users size={20} />, value: "10,000+", label: "Students Helped" },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6F9] text-[#1a1c1e]">

      {/* ── HERO WITH SLIDES ── */}
      <div className="relative w-full min-h-[680px] flex items-center justify-center overflow-hidden">
        {slides.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
          </div>
        ))}

        {/* Slide dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`rounded-full transition-all duration-300 ${i === currentSlide ? "w-6 h-2 bg-[#f5c800]" : "w-2 h-2 bg-white/40"}`}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f5c800] text-black text-xs font-black px-5 py-2 rounded-full mb-6 uppercase tracking-wider shadow-lg">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-black/30 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black/50"></span>
            </span>
            Bangladesh's #1 Student Visa Consultancy
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight tracking-tight">
            Study Abroad Visa Guide<br />
            <span className="text-[#f5c800]">for Bangladeshi Students</span>
          </h1>
          <p className="text-white/75 text-base md:text-lg font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
            Complete student visa requirements, scholarship opportunities, document checklists and processing timelines for <strong className="text-white">200+ countries</strong> — updated for {new Date().getFullYear()}.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-5 py-3 rounded-2xl text-sm font-bold">
                <span className="text-[#f5c800]">{s.icon}</span>
                <span className="text-[#f5c800] font-black">{s.value}</span>
                <span className="text-white/70">{s.label}</span>
              </div>
            ))}
          </div>

          {/* ── SEARCH & FILTER PANEL ── */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 p-6 md:p-8">
            {/* Search Input */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search destination country (e.g. Canada, UK, Germany...)"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-green-400 focus:ring-0 outline-none transition text-base bg-gray-50 text-gray-800 font-medium"
                  onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                />
              </div>
              <div className="bg-green-50 border-2 border-green-100 text-green-700 px-6 py-4 rounded-2xl font-black text-sm flex items-center gap-2 whitespace-nowrap">
                <BookOpen size={16} />
                {filteredCountries.length} countries
              </div>
            </div>

            {/* Alphabet Filter */}
            <div className="border-t-2 border-gray-100 pt-5">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 text-left">Filter by letter</p>
              <div className="flex flex-wrap gap-1.5">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => { setSelectedLetter(letter); setCurrentPage(1); }}
                    className={`flex items-center justify-center min-w-[34px] h-[34px] px-1.5 rounded-xl text-xs font-black transition-all duration-150 ${
                      selectedLetter === letter
                        ? "bg-green-600 text-white shadow-lg shadow-green-200 scale-105"
                        : "bg-gray-100 text-gray-500 hover:bg-green-50 hover:text-green-700"
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── COUNTRIES GRID ── */}
      <div className="max-w-[1400px] mx-auto px-5 py-12 md:py-16">

        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-green-600 mb-1">
              {selectedLetter !== "All" ? `Countries starting with "${selectedLetter}"` : "All Destinations"}
              {searchTerm && ` · "${searchTerm}"`}
            </p>
            <h2 className="text-2xl font-black text-gray-900">
              Student Visa Guide — {filteredCountries.length} Countries
            </h2>
          </div>
          <span className="hidden md:flex items-center gap-1 text-xs font-bold text-gray-400">
            Page {currentPage} of {totalPages || 1}
          </span>
        </div>

        {/* Grid */}
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {currentItems.map((c, index) => (
              <Link
                key={`${c.code}-${index}`}
                href={`/study-abroad/student-visa/${createSlug(c.country)}`}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-green-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col no-underline"
              >
                {/* Flag */}
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  <img
                    src={c.flag}
                    alt={`Study in ${c.country} — student visa guide for Bangladeshi students`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 right-3 bg-green-600 text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    {new Date().getFullYear()} Guide
                  </div>
                </div>

                <div className="p-6 flex flex-col grow">
                  <div className="flex-1 mb-5">
                    <h2 className="text-gray-900 text-lg font-black mb-1 tracking-tight group-hover:text-green-700 transition-colors">
                      {c.country}
                    </h2>
                    <p className="text-gray-400 text-xs font-medium">
                      Student Visa · Scholarships · Requirements
                    </p>
                  </div>

                  <div className="flex items-center justify-between bg-gray-50 group-hover:bg-green-50 rounded-2xl px-4 py-3 transition-colors border border-gray-100 group-hover:border-green-200">
                    <span className="text-xs font-black text-gray-600 group-hover:text-green-700 transition-colors">
                      View Full Guide
                    </span>
                    <ArrowRight size={14} className="text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-gray-100">
            <div className="text-6xl mb-5">🔍</div>
            <h3 className="text-xl font-black text-gray-800 mb-2">No countries found</h3>
            <p className="text-gray-400 text-sm">Try a different search term or letter.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-center items-center gap-4">
            <button
              disabled={currentPage === 1}
              onClick={() => { setCurrentPage(p => p - 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="px-7 py-3.5 bg-white border-2 border-gray-200 rounded-2xl text-gray-700 font-black text-sm disabled:opacity-40 disabled:pointer-events-none hover:border-green-400 hover:text-green-700 transition"
            >
              ← Previous
            </button>
            <span className="text-sm font-black text-gray-600 px-5 py-3 bg-white rounded-2xl border-2 border-gray-100">
              {currentPage} / {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => { setCurrentPage(p => p + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="px-7 py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-black text-sm disabled:opacity-40 disabled:pointer-events-none transition shadow-lg shadow-green-200"
            >
              Next →
            </button>
          </div>
        )}
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="bg-gray-900 py-16 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#f5c800]/20 border border-[#f5c800]/40 text-[#f5c800] text-xs font-black px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            <GraduationCap size={14} /> Expert Student Visa Consultants
          </div>
          <h2 className="text-3xl font-black text-white mb-3">
            Ready to Study Abroad?
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Our student visa consultants help Bangladeshi students secure admission and visas for universities in Canada, UK, Australia, Germany, and 200+ more countries.
          </p>
          <a
            href={`https://wa.me/8801631312524?text=${encodeURIComponent("Hi, I need help with my student visa application.")}`}
            className="inline-flex items-center gap-3 px-10 py-5 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black transition-all text-sm shadow-xl shadow-green-900/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            Free Consultation via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
