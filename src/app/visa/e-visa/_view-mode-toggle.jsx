"use client";
// /app/visa/e-visa/_view-mode-toggle.jsx
// ── Toggle between destinations / nationalities view — URL-based ──────────

import { useRouter } from "next/navigation";

export function ViewModeToggle({ viewMode, selectedLetter }) {
  const router = useRouter();

  const switchTo = (mode) => {
    const params = new URLSearchParams({ letter: selectedLetter, page: "1", view: mode });
    router.push(`/visa/e-visa?${params.toString()}`);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchTo("destinations")}
        className={`px-5 py-2.5 rounded-xl font-black text-xs transition-all ${
          viewMode === "destinations"
            ? "bg-[#f5c800] text-black"
            : "bg-gray-100 text-black/50 hover:bg-gray-200"
        }`}
      >
        🌍 Destinations
      </button>
      <button
        onClick={() => switchTo("nationalities")}
        className={`px-5 py-2.5 rounded-xl font-black text-xs transition-all ${
          viewMode === "nationalities"
            ? "bg-[#f5c800] text-black"
            : "bg-gray-100 text-black/50 hover:bg-gray-200"
        }`}
      >
        🛂 By Nationality
      </button>
    </div>
  );
}