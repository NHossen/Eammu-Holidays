"use client";

import { useState } from "react";

/**
 * The only interactive part of the About page: an FAQ with category filters.
 * All answers stay in the DOM (native <details>), so the visible content always
 * matches the FAQPage JSON-LD generated in app/about/page.jsx from the same data.
 * No animation library is used, which keeps client JavaScript small and
 * respects reduced-motion preferences by default.
 */
export default function AboutClient({ faqs = [], categories = [] }) {
  const [active, setActive] = useState("All");
  const tabs = ["All", ...categories];

  if (!faqs.length) return null;

  return (
    <div>
      <div role="group" aria-label="Filter questions by topic" className="mb-6 flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            aria-pressed={active === tab}
            className={`min-h-[44px] rounded-full border px-4 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a31] ${
              active === tab
                ? "border-[#005a31] bg-[#005a31] text-white"
                : "border-gray-200 bg-white text-gray-700 hover:border-[#005a31]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="rounded-3xl border border-gray-100 bg-white p-2 shadow-sm md:p-4">
        {faqs.map((faq) => {
          const hidden = active !== "All" && faq.category !== active;
          return (
            <details
              key={faq.question}
              hidden={hidden}
              className="group border-b border-gray-100 last:border-0 open:bg-green-50/40"
            >
              <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-left font-bold text-gray-800 marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#005a31] [&::-webkit-details-marker]:hidden">
                <span className="text-base md:text-lg">{faq.question}</span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 text-xl font-light text-[#005a31] transition-transform motion-reduce:transition-none group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-4 pb-5 text-sm leading-relaxed text-gray-600 md:text-base">{faq.answer}</p>
            </details>
          );
        })}
      </div>
    </div>
  );
}