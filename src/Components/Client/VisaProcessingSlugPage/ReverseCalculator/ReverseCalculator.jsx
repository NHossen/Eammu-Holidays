"use client";
// /app/travel-resources/visa-processing-time-tracker/[slug]/_reverse-calculator.jsx
// ── TINY CLIENT ISLAND — only the interactive date-picker lives here ───────

import { useState, useMemo } from "react";
import { Calendar } from "lucide-react";

export function ReverseCalculator({ min, max, unit }) {
  const isHours = unit === "hours";
  const [travelDate, setTravelDate] = useState("");

  const applyBy = useMemo(() => {
    if (!travelDate) return null;
    const d = new Date(travelDate);
    if (isHours) {
      // For transit/hours: apply 3 days before as buffer
      const apply = new Date(d);
      apply.setDate(apply.getDate() - 3);
      return apply;
    }
    const safeBuffer = max + 14;
    const apply = new Date(d);
    apply.setDate(apply.getDate() - safeBuffer);
    return apply;
  }, [travelDate, max, isHours]);

  const urgency = useMemo(() => {
    if (!applyBy) return null;
    const today    = new Date();
    const daysLeft = Math.floor((applyBy - today) / 86400000);
    if (daysLeft < 0)
      return { label:`⚠️ Already overdue — apply TODAY`,            color:"text-red-600 bg-red-50 border-red-200"        };
    if (daysLeft < 3)
      return { label:`🔴 Apply within ${daysLeft} days — urgent!`,  color:"text-orange-700 bg-orange-50 border-orange-200"};
    if (daysLeft < 14)
      return { label:`🟡 Apply within ${daysLeft} days — soon`,     color:"text-amber-700 bg-amber-50 border-amber-200"  };
    return   { label:`🟢 You have ${daysLeft} days — you're on time`, color:"text-green-700 bg-green-50 border-green-200" };
  }, [applyBy]);

  return (
    <div className="bg-[#004d2c] rounded-[2rem] p-8 text-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center shrink-0">
          <Calendar size={20} className="text-[#004d2c]" />
        </div>
        <div>
          <h3 className="font-black text-lg">Reverse Application Calculator</h3>
          <p className="text-green-200/70 text-sm">When do you need to apply by?</p>
        </div>
      </div>

      <label className="block text-xs font-black uppercase tracking-widest text-green-300/70 mb-2">
        {isHours ? "Your Transit / Travel Date" : "Your Intended Travel Date"}
      </label>
      <input
        type="date"
        value={travelDate}
        onChange={e => setTravelDate(e.target.value)}
        min={new Date().toISOString().split("T")[0]}
        className="w-full px-4 py-4 bg-white/10 border-2 border-white/10 rounded-2xl text-white font-bold text-sm focus:outline-none focus:border-amber-400 transition-all mb-4"
      />

      {applyBy && (
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-white/10 px-5 py-4 rounded-2xl">
            <span className="text-sm text-green-200/80 font-semibold">Apply by (safe date):</span>
            <span className="font-black text-amber-400 text-lg">
              {applyBy.toLocaleDateString("en-GB", { day:"numeric", month:"short", year:"numeric" })}
            </span>
          </div>
          <div className="flex items-center justify-between bg-white/10 px-5 py-4 rounded-2xl">
            <span className="text-sm text-green-200/80 font-semibold">Processing window:</span>
            <span className="font-black text-white">
              {isHours ? `${min}–${max} hours` : `${min}–${max} business days`}
            </span>
          </div>
          {urgency && (
            <div className={`border-2 px-5 py-4 rounded-2xl font-bold text-sm ${urgency.color}`}>
              {urgency.label}
            </div>
          )}
        </div>
      )}

      {!travelDate && (
        <p className="text-green-200/50 text-sm text-center py-4">
          Enter your travel date above to calculate
        </p>
      )}
    </div>
  );
}