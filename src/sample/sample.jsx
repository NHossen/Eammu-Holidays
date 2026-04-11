"use client";

import { useState } from "react";
import countries from "@/app/data/countries.json";
import Link from "next/link";
import { createSlug } from "@/app/lib/utils";

export default function CountriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // 1. Filter Logic (Letter + Search)
  const filteredCountries = countries.filter((c) => {
    const matchesLetter = selectedLetter === "All" || c.country.startsWith(selectedLetter);
    const matchesSearch = c.country.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLetter && matchesSearch;
  });

  // 2. Pagination Logic
  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCountries.slice(indexOfFirstItem, indexOfLastItem);

  const alphabet = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Global Visa Applications
          </h1>
          <p className="text-gray-600">Select a country to start your application process.</p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-8 flex flex-col gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => { setSelectedLetter(letter); setCurrentPage(1); }}
                className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                  selectedLetter === letter 
                  ? "bg-green-600 text-white" 
                  : "bg-white text-gray-600 hover:bg-gray-200"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
          
          <input
            type="text"
            placeholder="Search country..."
            className="max-w-md mx-auto w-full p-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
          />
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentItems.map((c, index) => (
            <div 
              key={`${c.code}-${index}`}
              className="relative group h-64 rounded-2xl overflow-hidden shadow-lg bg-black"
            >
              {/* Background Flag Image with Overlay */}
              <img 
                src={c.flag} 
                alt={c.country} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Card Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h2 className="text-white text-xl font-bold mb-1">
                  {c.country}
                </h2>
                <p className="text-gray-300 text-xs mb-4 uppercase tracking-widest">
                  Visa Application
                </p>
                
                <Link
                  href={`/visa/${createSlug(c.country)}-visa-application`}
                  className="w-full py-2 bg-green-600 hover:bg-green-500 text-white text-center rounded-lg font-semibold transition shadow-md"
                >
                  Apply for {c.country}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="px-4 py-2 bg-white border rounded-lg disabled:opacity-50 hover:bg-gray-50"
            >
              Previous
            </button>
            <span className="text-gray-600 font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className="px-4 py-2 bg-white border rounded-lg disabled:opacity-50 hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        )}

        {filteredCountries.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No countries found matching your filter.
          </div>
        )}
      </div>
    </div>
  );
}