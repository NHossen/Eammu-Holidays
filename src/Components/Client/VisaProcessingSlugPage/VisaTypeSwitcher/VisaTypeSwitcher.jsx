"use client";
// /app/travel-resources/visa-processing-time-tracker/[slug]/_visa-type-switcher.jsx
// ── TINY CLIENT ISLAND — tab switcher that navigates via URL ?type= ────────
//
// Using URL-based navigation (router.push) instead of local state means:
//  • Every tab is a real, stable URL → fully crawlable by Googlebot
//  • The server component re-renders with the correct data per tab
//  • No hydration mismatch — server and client agree on the active tab

import { useRouter } from "next/navigation";

export function VisaTypeSwitcher({ types, activeType, slug, visaTypeLabels }) {
  const router = useRouter();

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {Object.entries(types).map(([k]) => (
        <button
          key={k}
          onClick={() =>
            router.push(
              `/travel-resources/visa-processing-time-tracker/${slug}?type=${k}`
            )
          }
          className={`px-4 py-2 rounded-xl border-2 text-xs font-black uppercase tracking-wider transition-all
            ${activeType === k
              ? "bg-[#004d2c] text-white border-[#004d2c]"
              : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"}`}
        >
          {visaTypeLabels[k]?.label || k}
        </button>
      ))}
    </div>
  );
}