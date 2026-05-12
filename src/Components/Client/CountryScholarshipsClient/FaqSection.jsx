"use client";
// components/FaqSection.jsx  ← CLIENT COMPONENT
// Renders an accordion FAQ list. Requires useState for open/close toggling.

import { useState } from "react";

export default function FaqSection({ items = [], heading = "Frequently Asked Questions" }) {
  return (
    <div className="bg-white border border-gray-100 rounded-[2rem] p-10">
      <h2 className="text-2xl font-black text-gray-900 mb-6">{heading}</h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <FaqItem key={i} q={item.q} a={item.a} />
        ))}
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all ${
        open ? "border-blue-200 shadow-sm shadow-blue-50" : "border-gray-100"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition"
        aria-expanded={open}
      >
        <span className="font-bold text-gray-800 text-sm pr-4 leading-snug">{q}</span>
        <span
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
            open
              ? "border-blue-500 bg-blue-500 text-white rotate-45"
              : "border-gray-300 text-gray-400"
          }`}
        >
          <span className="text-sm font-black leading-none">+</span>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}