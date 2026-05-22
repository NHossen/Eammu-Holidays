"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, AlertTriangle, Loader2 } from "lucide-react";

export default function VisaRejectionTracker() {
  // State Management
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  // Simulated Data Fetching (Replace this with your actual API endpoint)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Replace with your actual API fetch: await fetch('/api/visa-data')
        const mockData = [
          { id: 1, country: "United States", rate: "12%", type: "B1/B2" },
          { id: 2, country: "United Kingdom", rate: "8%", type: "Standard Visitor" },
          { id: 3, country: "Canada", rate: "15%", type: "Study Permit" },
          { id: 4, country: "Australia", rate: "5%", type: "Visitor" },
          { id: 5, country: "Germany (Schengen)", rate: "10%", type: "Tourist" },
        ];
        setData(mockData);
      } catch (error) {
        console.error("Error fetching visa data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Optimized Filter Logic
  const filteredData = useMemo(() => {
    if (!query.trim()) return data;
    return data.filter((item) =>
      item.country.toLowerCase().includes(query.toLowerCase()) ||
      item.type.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, data]);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Visa Rejection Tracker</h2>
        <p className="text-slate-500 text-sm">Monitor rejection rates and processing trends.</p>
      </div>

      {/* Search Input */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input
          type="text"
          placeholder="Search country or visa type..."
          className="w-full py-4 pl-12 pr-4 bg-white/50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-800"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Data Display */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="animate-spin text-blue-600" size={32} />
        </div>
      ) : (
        <div className="grid gap-3">
          <AnimatePresence mode="popLayout">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-100 rounded-lg">
                      <MapPin size={20} className="text-slate-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.country}</h3>
                      <p className="text-xs text-slate-500">{item.type} Visa</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-red-600">{item.rate}</span>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Rejection Rate</p>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 text-slate-400"
              >
                <AlertTriangle size={48} className="mx-auto mb-4 opacity-50" />
                <p>No results found for "{query}"</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}