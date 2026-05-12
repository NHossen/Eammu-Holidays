"use client";
// /app/visa/e-visa/_az-filter.jsx
// ── A-Z filter — uses router.push so each letter is a real crawlable URL ──

import { useRouter } from "next/navigation";

export function AZFilter({ selectedLetter, viewMode, alphabet }) {
  const router = useRouter();

  const navigate = (letter) => {
    const params = new URLSearchParams({ letter, page: "1", view: viewMode });
    router.push(`/visa/e-visa?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-1.5 mb-8 p-5 bg-gray-50 rounded-2xl">
      {alphabet.map(l => (
        <button
          key={l}
          onClick={() => navigate(l)}
          aria-label={`Filter by ${l}`}
          className={`w-8 h-8 md:w-9 md:h-9 rounded-xl text-xs font-black transition-all ${
            selectedLetter === l
              ? "bg-[#f5c800] text-black shadow-md scale-110"
              : "text-black/40 hover:text-black bg-white hover:bg-gray-100 border border-black/5"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}