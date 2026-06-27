"use client";
// /Components/Client/VisaProcessingSlugPage/VisaTypeSwitcher/VisaTypeSwitcher.jsx
//
// ✅ FIX: router.push(?type=k) বাদ দিয়ে <Link href="/slug-type"> দিয়ে replace করা হয়েছে
// কারণ: query param → প্রতিটা tab click = নতুন server invocation (9K invocations-এর মূল কারণ)
// slug-based URL → static, cacheable, Google-crawlable

import Link from "next/link";

export function VisaTypeSwitcher({ types, activeType, baseSlug, visaTypeLabels }) {
  // baseSlug = slug থেকে type suffix বাদ দেওয়া অংশ
  // যেমন: "bangladeshi-national-visa-processing-time-for-canada"
  // (type suffix আগে থেকে parse করে পাঠানো হবে page.jsx থেকে)

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {Object.entries(types).map(([k]) => {
        const isActive = activeType === k;
        return (
          // ✅ Link ব্যবহার করা হচ্ছে — button + router.push নয়
          // এতে Google সব tab crawl করতে পারবে এবং server cache কাজ করবে
          <Link
            key={k}
            href={`/travel-resources/visa-processing-time-tracker/${baseSlug}-${k}`}
            prefetch={false}
            className={`px-4 py-2 rounded-xl border-2 text-xs font-black uppercase tracking-wider transition-all
              ${isActive
                ? "bg-[#004d2c] text-white border-[#004d2c]"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
              }`}
          >
            {visaTypeLabels[k]?.label || k}
          </Link>
        );
      })}
    </div>
  );
}