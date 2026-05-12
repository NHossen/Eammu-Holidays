// ✅ SERVER COMPONENT — no "use client" directive
// All sections are server-rendered. Only SearchCard is a client island.

import Link from "next/link";
import {
  Clock,
  TrendingUp,
  Globe,
  ChevronRight,
  Zap,
  AlertCircle,
  CheckCircle2,
  Timer,
} from "lucide-react";
import { STATS, POPULAR, HOW_IT_WORKS, VISA_TYPES, makeSlug } from "@/app/data/data.js";
import SearchCard from "./Searchcard";

// ── HERO SECTION ──────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative bg-white pt-24 pb-20 px-6 overflow-hidden border-b border-slate-100">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#005a31]/4 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/8 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#005a31]/8 border border-[#005a31]/15 px-4 py-2 rounded-full mb-6">
            <Timer size={14} className="text-[#005a31]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#005a31]">
              Real-Time Processing Intelligence
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#004d2c] leading-[0.88] tracking-tighter mb-6">
            Visa Processing<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #004d2c" }}>
              Time Tracker.
            </span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Find out exactly how long your visa will take — by nationality, destination, and visa type.
            Covers E-Visa, Sticker, Transit & complex cases. Used by{" "}
            <strong className="text-slate-800">42,000+ travelers</strong> every month.
          </p>
        </div>

        {/* Interactive search form — CLIENT component */}
        <SearchCard />
      </div>
    </section>
  );
}

// ── STATS BAR ─────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <section className="bg-[#004d2c] py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                <Icon size={18} className="text-amber-400" />
              </div>
              <div>
                <div className="text-xl font-black text-white">{value}</div>
                <div className="text-xs text-green-300/70 font-semibold">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── POPULAR SEARCHES ──────────────────────────────────────────────────────
function PopularSearches() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-amber-600 block mb-2">
              🔥 Trending
            </span>
            <h2 className="text-3xl font-black text-[#004d2c] tracking-tight">
              Most Searched Processing Times
            </h2>
            <p className="text-slate-500 text-sm mt-2 font-medium">
              Based on real search volume data · Updated weekly
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <TrendingUp size={14} /> Live Data
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {POPULAR.map((p, i) => {
            const slug = makeSlug(p.nationality, p.destination);
            const type = VISA_TYPES.find((v) => v.value === p.type);
            return (
              <Link
                key={i}
                href={`/travel-resources/visa-processing-time-tracker/${slug}?type=${p.type}`}
                className="group flex items-center justify-between p-5 bg-white border-2 border-slate-100 rounded-2xl hover:border-[#005a31] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center font-black text-lg text-slate-400 group-hover:bg-[#005a31] group-hover:text-white transition-colors">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-black text-slate-800 text-sm">
                      {p.nationality} → {p.destination}
                    </div>
                    <div className="text-xs font-bold mt-0.5 text-slate-400">
                      {type?.icon} {type?.label}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full">
                    {p.searches}
                  </span>
                  <ChevronRight
                    size={18}
                    className="text-slate-300 group-hover:text-[#005a31] transition-colors"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── HOW IT WORKS ──────────────────────────────────────────────────────────
function HowItWorks() {
  const iconMap = {
    zap:   <Zap size={22} className="text-white" />,
    clock: <Clock size={22} className="text-white" />,
    alert: <AlertCircle size={22} className="text-white" />,
  };

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-[#004d2c] tracking-tight mb-3">
            How Visa Processing Time Works
          </h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto">
            Understanding why some visas take hours and others take months
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS.map(({ colorClass, iconType, title, desc, tags }) => (
            <div key={title} className="bg-white rounded-[2rem] p-7 border border-slate-100 shadow-sm">
              <div className={`w-12 h-12 ${colorClass} rounded-2xl flex items-center justify-center mb-5`}>
                {iconMap[iconType]}
              </div>
              <h3 className="text-base font-black text-slate-800 mb-3">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-black uppercase tracking-wider bg-slate-50 text-slate-500 px-3 py-1.5 rounded-lg border border-slate-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SEO CONTENT ───────────────────────────────────────────────────────────
function SeoContent() {
  const factors = [
    "Transit visa: 6–24 hours — fastest type, usually same-day decision",
    "E-Visa: 2–4 business days via online automated processing",
    "Sticker visa: 15–21 business days after biometrics and interview",
    "Your nationality and bilateral relations with the destination country",
    "Embassy backlog and seasonal demand (summer & holiday peaks add 2–3 weeks)",
    "Whether biometrics or an in-person interview is required",
    "Application completeness — missing documents cause major delays",
    "Administrative processing (security checks) — unpredictable, 45–60+ days",
  ];

  return (
    <section className="py-20 px-6 bg-white border-t border-slate-100">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-black text-[#004d2c] mb-4">
          Visa Processing Time: Complete Guide for 2025
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6 text-sm">
          Visa processing time varies dramatically depending on your nationality, the destination country, visa type,
          and the current season. Our Visa Processing Time Tracker gives you accurate, up-to-date estimates based on
          real applicant data and official embassy guidelines — so you never miss a travel deadline.
        </p>

        <h3 className="text-xl font-black text-[#004d2c] mb-3">What Affects Visa Processing Time?</h3>
        <ul className="space-y-3 text-slate-600">
          {factors.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-[#005a31] shrink-0 mt-1 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-black text-[#004d2c] mt-10 mb-3">
          Transit Visa: When Do You Need One?
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          A transit visa is required when you pass through certain countries even without leaving the airport.
          Processing typically takes 6–24 hours — making it the fastest visa type available. Countries like the UK,
          Germany (TATV), and some GCC nations require transit visas for specific nationalities. Always check with
          the embassy or your airline before booking a connecting flight.
        </p>
      </div>
    </section>
  );
}

// ── ROOT PAGE (server component) ──────────────────────────────────────────
export default function VisaProcessingTimeTrackerPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <HeroSection />      {/* server — embeds <SearchCard /> client island */}
      <StatsBar />         {/* server */}
      <PopularSearches />  {/* server */}
      <HowItWorks />       {/* server */}
      <SeoContent />       {/* server */}
    </div>
  );
}