"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, AlertCircle, Timer, ArrowRight } from "lucide-react";

import { makeSlug } from "@/app/data/data.js";
import CountrySelect from "./Countryselect";
import VisaTypeSelect from "./Visatypeselect";

export default function SearchCard() {
  const router = useRouter();
  const [nationality, setNationality] = useState("");
  const [destination, setDestination] = useState("");
  const [visaType,    setVisaType]    = useState("");
  const [error,       setError]       = useState("");

  const handleCheck = () => {
    if (!nationality || !destination || !visaType) {
      setError("Please fill in all fields to continue.");
      return;
    }
    setError("");
    const slug = makeSlug(nationality, destination);
    router.push(
      `/travel-resources/visa-processing-time-tracker/${slug}?type=${visaType}`
    );
  };

  return (
    <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/80 max-w-4xl mx-auto">
      <h2 className="text-xl font-black text-slate-800 mb-8 flex items-center gap-3">
        <div className="w-8 h-8 bg-amber-400 rounded-xl flex items-center justify-center">
          <Search size={16} className="text-[#004d2c]" />
        </div>
        Check Your Visa Processing Time
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <CountrySelect
          label="Your Nationality"
          value={nationality}
          onChange={setNationality}
          placeholder="e.g. Bangladesh"
        />
        <CountrySelect
          label="Applying For"
          value={destination}
          onChange={setDestination}
          placeholder="e.g. Canada"
        />
        <VisaTypeSelect value={visaType} onChange={setVisaType} />

  
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-600 text-sm font-semibold mb-4">
          <AlertCircle size={16} /> {error}
        </div>
      )}

      <button
        onClick={handleCheck}
        className="w-full py-5 bg-amber-400 hover:bg-[#004d2c] text-[#004d2c] hover:text-white font-black text-lg rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98] shadow-lg shadow-amber-200"
      >
        <Timer size={22} />
        Check Processing Time
        <ArrowRight size={20} />
      </button>

      <p className="text-center text-xs text-slate-400 mt-4 font-medium">
        Free · No signup required · Updated monthly
      </p>
    </div>
  );
}