"use client"
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import {
  Clock, AlertCircle, CheckCircle2, ChevronRight, ArrowLeft,
  Calendar, Timer, Zap, Info, TrendingUp, FileText,
  AlertTriangle, Globe, Phone, ExternalLink, ChevronDown
} from "lucide-react";

// ── COUNTRIES DATA ────────────────────────────────────────────────────────
import COUNTRIES from "@/app/data/countries.json";

// ── VISA PROCESSING RULES ─────────────────────────────────────────────────
// Manual config: add more countries here
const VISA_RULES = {
  canada: {
    name: "Canada",
    flag: "🇨🇦",
    types: {
      "e-visa": { min: 2, max: 4, unit: "days", label: "eTA (Electronic Travel Authorization)" },
      "sticker": { min: 15, max: 21, unit: "days", label: "Temporary Resident Visa (TRV)" },
      "sticker-extended": { min: 45, max: 60, unit: "days", label: "TRV (Complex / Administrative Processing)" },
    },
    embassyUrl: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    notes: [
      "Biometrics required for most nationalities — must be submitted in person",
      "IRCC online portal may show 'Decision Made' 24–48 hrs before physical stamp",
      "Summer months (Jun–Aug) add 5–10 business days on average",
      "Students and workers may have different streams with faster processing",
    ],
    delayReasons: [
      "Background security check (GCMS notes often silent on reason)",
      "Additional documents requested (procedural fairness letter)",
      "High application volume from Bangladesh, India, Pakistan",
      "Missing financial proof or travel history gaps",
    ],
    tips: [
      "Apply at least 8 weeks before your intended travel date",
      "Use IRCC's online portal for faster processing vs paper",
      "Include a strong cover letter explaining ties to home country",
      "Bank statements must show consistent balance for 6 months",
    ],
  },
  "united-states": {
    name: "United States",
    flag: "🇺🇸",
    types: {
      "e-visa": { min: 3, max: 5, unit: "days", label: "ESTA (Visa Waiver Program)" },
      "sticker": { min: 21, max: 60, unit: "days", label: "B1/B2 Tourist/Business Visa" },
      "sticker-extended": { min: 60, max: 180, unit: "days", label: "Administrative Processing (221g)" },
    },
    embassyUrl: "https://travel.state.gov/content/travel/en/us-visas.html",
    notes: [
      "Interview appointment wait times vary by embassy/consulate — book early",
      "DS-160 form must be completed online before scheduling interview",
      "Dhaka embassy often has 60–90 day appointment wait times",
      "ESTA only available for 40 Visa Waiver Program countries",
    ],
    delayReasons: [
      "221(g) administrative processing — no fixed timeline",
      "High demand at South Asian consulates",
      "Prior visa refusals increase scrutiny time",
      "Travel to certain countries may trigger security review",
    ],
    tips: [
      "Schedule your interview the moment your travel is confirmed",
      "Strong employment letter and pay stubs significantly help",
      "Bring original documents — copies alone may cause delays",
      "Previous US visa holders often get faster processing",
    ],
  },
  "united-kingdom": {
    name: "United Kingdom",
    flag: "🇬🇧",
    types: {
      "e-visa": { min: 3, max: 5, unit: "days", label: "eVisa (Existing holders migrating to eVisa)" },
      "sticker": { min: 15, max: 21, unit: "days", label: "Standard Visitor Visa" },
      "sticker-extended": { min: 30, max: 60, unit: "days", label: "Priority/Complex Case" },
    },
    embassyUrl: "https://www.gov.uk/apply-uk-visa",
    notes: [
      "UK switched to digital eVisa in 2024 — physical vignette stickers phased out",
      "UKVI online account required to prove permission to enter",
      "Biometrics collected at Visa Application Centre (VAC)",
      "Priority service (extra fee) cuts standard time to 5 business days",
    ],
    delayReasons: [
      "Incomplete travel history documentation",
      "Financial evidence not meeting the threshold",
      "Gaps in employment history require extra explanation",
      "Deferred decision — Home Office may request further evidence",
    ],
    tips: [
      "Apply no more than 3 months before travel",
      "Use the priority service if your travel is within 4 weeks",
      "Include strong evidence of accommodation and itinerary",
      "Letter from employer on company letterhead is essential",
    ],
  },
  schengen: {
    name: "Schengen Area",
    flag: "🇪🇺",
    types: {
      "e-visa": { min: 5, max: 10, unit: "days", label: "ETIAS (From 2025 — not yet fully launched)" },
      "sticker": { min: 15, max: 30, unit: "days", label: "Schengen Short-Stay Visa (C Visa)" },
      "sticker-extended": { min: 45, max: 90, unit: "days", label: "Complex Case / Document Request" },
    },
    embassyUrl: "https://ec.europa.eu/home-affairs/what-we-do/policies/borders-and-visas_en",
    notes: [
      "Apply at the embassy of the country where you'll spend most time",
      "Maximum stay is 90 days within any 180-day period",
      "Travel insurance minimum €30,000 coverage required",
      "Some consulates use VFS Global for appointment booking",
    ],
    delayReasons: [
      "Incomplete or inconsistent itinerary",
      "Insufficient financial proof per day (min €50–100/day recommended)",
      "Hotel bookings not in applicant's name",
      "Inconsistent travel history or previous Schengen refusals",
    ],
    tips: [
      "Apply 3–6 weeks in advance (max 6 months before travel)",
      "Book refundable hotels and flights for application purposes",
      "Show strong bank balance — ideally 3× the trip cost",
      "Schengen visa record significantly improves future applications",
    ],
  },
  australia: {
    name: "Australia",
    flag: "🇦🇺",
    types: {
      "e-visa": { min: 1, max: 3, unit: "days", label: "ETA / eVisitor (Subclass 601/651)" },
      "sticker": { min: 20, max: 35, unit: "days", label: "Visitor Visa (Subclass 600)" },
      "sticker-extended": { min: 60, max: 120, unit: "days", label: "Complex Health/Character Check" },
    },
    embassyUrl: "https://immi.homeaffairs.gov.au/",
    notes: [
      "All Australian visas are digital — no physical stamp issued",
      "ImmiAccount portal tracks real-time application status",
      "Health examination required for stays over 12 months",
      "Character requirements apply — police clearance may be needed",
    ],
    delayReasons: [
      "Health examination results pending",
      "Character assessment (police certificate required)",
      "High application volume from South/Southeast Asia",
      "Sponsor or host verification for visitor streams",
    ],
    tips: [
      "Submit complete health exam results upfront if required",
      "The 600 visa can be applied for up to 12 months in advance",
      "Keep ImmiAccount notifications on — requests expire in 28 days",
      "Genuine Temporary Entrant (GTE) statement is critical",
    ],
  },
  "united-arab-emirates": {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    types: {
      "e-visa": { min: 2, max: 4, unit: "days", label: "UAE e-Visa (Tourist/Visit)" },
      "sticker": { min: 5, max: 10, unit: "days", label: "Visa on Arrival / Embassy Visa" },
      "sticker-extended": { min: 15, max: 30, unit: "days", label: "Complex / Employment Visa" },
    },
    embassyUrl: "https://icp.gov.ae/",
    notes: [
      "Most nationalities can apply online via icp.gov.ae or travel agent",
      "30-day and 60-day tourist visas available instantly in many cases",
      "Emirates and Etihad offer visa on booking for passengers",
      "No medical required for tourist visas under 90 days",
    ],
    delayReasons: [
      "Criminal record or previous overstay in GCC",
      "Name mismatch across documents",
      "Expired or near-expiry passport (must be 6+ months valid)",
      "High volume during Ramadan and National Day periods",
    ],
    tips: [
      "Apply 3–5 days before travel for e-visa — it's very fast",
      "Use Dubai Tourism official portal or reputable agents only",
      "Ensure passport photo meets UAE specifications exactly",
      "Travel insurance is not mandatory but recommended",
    ],
  },
};

// ── GENERIC FALLBACK ───────────────────────────────────────────────────────
function getCountryData(destSlug) {
  const key = Object.keys(VISA_RULES).find(k =>
    destSlug.includes(k.replace(/-/g, "-"))
  );
  if (key) return { key, ...VISA_RULES[key] };

  // Fallback generic
  const destName = destSlug
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    key: "generic",
    name: destName,
    flag: "🌍",
    types: {
      "e-visa": { min: 2, max: 5, unit: "days", label: "E-Visa (Online)" },
      "sticker": { min: 15, max: 21, unit: "days", label: "Sticker Visa" },
      "sticker-extended": { min: 45, max: 60, unit: "days", label: "Complex / Extended Processing" },
    },
    embassyUrl: null,
    notes: [
      "Processing times are estimates based on typical embassy timelines",
      "Always verify with the official embassy or consulate",
      "Apply well in advance — at least 6–8 weeks before travel",
    ],
    delayReasons: [
      "Incomplete documentation",
      "High application volume",
      "Additional security checks",
      "Administrative processing",
    ],
    tips: [
      "Submit a complete, well-organized application package",
      "Include a strong cover letter and supporting documents",
      "Track your application status regularly",
      "Contact the embassy if no update after the maximum timeframe",
    ],
  };
}

// ── REVERSE CALCULATOR ────────────────────────────────────────────────────
function ReverseCalculator({ min, max }) {
  const [travelDate, setTravelDate] = useState("");

  const applyBy = useMemo(() => {
    if (!travelDate) return null;
    const d = new Date(travelDate);
    const safeBuffer = max + 14; // add 2-week buffer
    const applyDate = new Date(d);
    applyDate.setDate(applyDate.getDate() - safeBuffer);
    return applyDate;
  }, [travelDate, max]);

  const urgency = useMemo(() => {
    if (!applyBy) return null;
    const today = new Date();
    const daysLeft = Math.floor((applyBy - today) / 86400000);
    if (daysLeft < 0) return { label: "⚠️ Already overdue — apply TODAY", color: "text-red-600 bg-red-50 border-red-200" };
    if (daysLeft < 7) return { label: `🔴 Apply within ${daysLeft} days — urgent!`, color: "text-orange-700 bg-orange-50 border-orange-200" };
    if (daysLeft < 21) return { label: `🟡 Apply within ${daysLeft} days — soon`, color: "text-amber-700 bg-amber-50 border-amber-200" };
    return { label: `🟢 You have ${daysLeft} days — you're on time`, color: "text-green-700 bg-green-50 border-green-200" };
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

      <label className="block text-xs font-black uppercase tracking-widest text-green-300/70 mb-2">Your Intended Travel Date</label>
      <input
        type="date"
        value={travelDate}
        onChange={e => setTravelDate(e.target.value)}
        min={new Date().toISOString().split("T")[0]}
        className="w-full px-4 py-4 bg-white/10 border-2 border-white/10 rounded-2xl text-white font-bold text-sm placeholder:text-white/30 focus:outline-none focus:border-amber-400 transition-all mb-4"
      />

      {applyBy && (
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-white/10 px-5 py-4 rounded-2xl">
            <span className="text-sm text-green-200/80 font-semibold">Apply by (safe date):</span>
            <span className="font-black text-amber-400 text-lg">
              {applyBy.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
            </span>
          </div>
          <div className="flex items-center justify-between bg-white/10 px-5 py-4 rounded-2xl">
            <span className="text-sm text-green-200/80 font-semibold">Processing window:</span>
            <span className="font-black text-white">{min}–{max} business days</span>
          </div>
          {urgency && (
            <div className={`border-2 px-5 py-4 rounded-2xl font-bold text-sm ${urgency.color}`}>
              {urgency.label}
            </div>
          )}
        </div>
      )}

      {!travelDate && (
        <p className="text-green-200/50 text-sm text-center py-4">Enter your travel date above to calculate</p>
      )}
    </div>
  );
}

// ── SLUG PAGE ─────────────────────────────────────────────────────────────
export default function VisaProcessingSlugPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params?.slug || "";
  const visaTypeParam = searchParams?.get("type") || "sticker";

  // Parse slug: "{nationality}-national-visa-processing-time-for-{destination}"
  const [nationalitySlug, destinationSlug] = useMemo(() => {
    const marker = "-national-visa-processing-time-for-";
    const idx = slug.indexOf(marker);
    if (idx === -1) return [slug, "unknown"];
    return [slug.slice(0, idx), slug.slice(idx + marker.length)];
  }, [slug]);

  const nationalityName = useMemo(() => {
    const found = COUNTRIES.find(c =>
      c.country.toLowerCase().replace(/\s+/g, "-") === nationalitySlug
    );
    return found?.country || nationalitySlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  }, [nationalitySlug]);

  const countryData = useMemo(() => getCountryData(destinationSlug), [destinationSlug]);
  const visaRule = countryData.types[visaTypeParam] || countryData.types["sticker"];
  const [activeType, setActiveType] = useState(visaTypeParam);

  const activeRule = countryData.types[activeType] || visaRule;

  const VISA_TYPE_LABELS = {
    "e-visa": { label: "E-Visa", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
    "sticker": { label: "Sticker Visa", color: "bg-blue-100 text-blue-800 border-blue-200" },
    "sticker-extended": { label: "Complex Case", color: "bg-amber-100 text-amber-800 border-amber-200" },
  };

  const RELATED = Object.entries(countryData.types).filter(([k]) => k !== activeType);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <div className="bg-slate-50 border-b border-slate-100 px-6 py-3">
        <div className="container mx-auto max-w-6xl flex items-center gap-2 text-xs text-slate-400 font-semibold">
          <Link href="/" className="hover:text-[#005a31]">Home</Link>
          <ChevronRight size={12} />
          <Link href="/visa-processing-time-tracker" className="hover:text-[#005a31]">Visa Processing Time Tracker</Link>
          <ChevronRight size={12} />
          <span className="text-slate-600 truncate">{nationalityName} → {countryData.name}</span>
        </div>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative bg-white pt-16 pb-12 px-6 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 text-[200px] opacity-[0.04] select-none pointer-events-none leading-none">
          {countryData.flag}
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <Link href="/visa-processing-time-tracker" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-[#005a31] mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Tracker
          </Link>

          {/* Visa type switcher */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(countryData.types).map(([k, v]) => (
              <button
                key={k}
                onClick={() => setActiveType(k)}
                className={`px-4 py-2 rounded-xl border-2 text-xs font-black uppercase tracking-wider transition-all ${
                  activeType === k
                    ? "bg-[#004d2c] text-white border-[#004d2c]"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                }`}
              >
                {VISA_TYPE_LABELS[k]?.label || k}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-[#004d2c] leading-tight tracking-tight mb-4">
                {nationalityName} National<br />
                Visa Processing Time<br />
                <span className="text-transparent" style={{ WebkitTextStroke: "2px #004d2c" }}>
                  for {countryData.name}
                </span>
              </h1>
              <p className="text-slate-500 font-medium leading-relaxed mb-6 text-sm">
                Accurate, up-to-date processing time estimate for <strong className="text-slate-800">{nationalityName} passport holders</strong> applying 
                for a <strong className="text-slate-800">{activeRule.label}</strong> to enter {countryData.name}. 
                Data updated monthly based on real applicant reports.
              </p>

              {/* Meta badges */}
              <div className="flex flex-wrap gap-2">
                <span className={`px-4 py-2 rounded-xl border text-xs font-black uppercase tracking-wider ${VISA_TYPE_LABELS[activeType]?.color}`}>
                  {VISA_TYPE_LABELS[activeType]?.label}
                </span>
                <span className="px-4 py-2 rounded-xl border bg-slate-50 border-slate-200 text-slate-600 text-xs font-black uppercase tracking-wider">
                  Updated 2025
                </span>
                <span className="px-4 py-2 rounded-xl border bg-slate-50 border-slate-200 text-slate-600 text-xs font-black uppercase tracking-wider">
                  {countryData.flag} {countryData.name}
                </span>
              </div>
            </div>

            {/* Processing time card */}
            <div className="bg-[#004d2c] rounded-[2rem] p-8 text-white">
              <div className="text-xs font-black uppercase tracking-widest text-green-300/70 mb-2">Estimated Processing Time</div>
              <div className="flex items-end gap-3 mb-6">
                <span className="text-7xl font-black text-amber-400 leading-none">{activeRule.min}–{activeRule.max}</span>
                <span className="text-2xl font-black text-white/60 mb-2">business<br />days</span>
              </div>
              <div className="text-sm text-green-200/70 font-semibold mb-6">{activeRule.label}</div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-lg font-black text-amber-400">{activeRule.min}d</div>
                  <div className="text-[10px] text-green-300/60 font-bold uppercase">Best Case</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-lg font-black text-white">{Math.round((activeRule.min + activeRule.max) / 2)}d</div>
                  <div className="text-[10px] text-green-300/60 font-bold uppercase">Average</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-lg font-black text-red-300">{activeRule.max}d</div>
                  <div className="text-[10px] text-green-300/60 font-bold uppercase">Worst Case</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left — main info */}
          <div className="lg:col-span-2 space-y-10">

            {/* Important notes */}
            <div>
              <h2 className="text-2xl font-black text-[#004d2c] mb-6 flex items-center gap-3">
                <Info size={22} className="text-amber-500" />
                What You Must Know
              </h2>
              <div className="space-y-3">
                {countryData.notes.map((note, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <CheckCircle2 size={18} className="text-[#005a31] shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium leading-relaxed">{note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why delays happen */}
            <div>
              <h2 className="text-2xl font-black text-[#004d2c] mb-6 flex items-center gap-3">
                <AlertTriangle size={22} className="text-red-500" />
                Why Your Visa Might Be Delayed
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {countryData.delayReasons.map((reason, i) => (
                  <div key={i} className="flex items-start gap-3 p-5 bg-red-50 border border-red-100 rounded-2xl">
                    <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-red-900 font-medium leading-relaxed">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro tips */}
            <div>
              <h2 className="text-2xl font-black text-[#004d2c] mb-6 flex items-center gap-3">
                <Zap size={22} className="text-amber-500" />
                Pro Tips to Speed Up Your Visa
              </h2>
              <div className="space-y-3">
                {countryData.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-amber-50 border border-amber-100 rounded-2xl">
                    <span className="text-amber-600 font-black text-sm shrink-0 w-6 text-center">{i + 1}.</span>
                    <span className="text-sm text-amber-900 font-medium leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SEO article section */}
            <div className="border-t border-slate-100 pt-10">
              <h2 className="text-2xl font-black text-[#004d2c] mb-4">
                {nationalityName} to {countryData.name} Visa Processing: Full Guide 2025
              </h2>
              <div className="prose prose-sm prose-slate max-w-none space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  For {nationalityName} passport holders, obtaining a visa for {countryData.name} is one of the most common travel documentation 
                  requirements. The standard <strong>{activeRule.label}</strong> typically takes between{" "}
                  <strong className="text-[#005a31]">{activeRule.min} to {activeRule.max} business days</strong> to process, 
                  though this can vary significantly based on the time of year, your individual circumstances, and application completeness.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The key to a smooth, on-time visa approval is applying well in advance and submitting a complete, well-organized 
                  application. {nationalityName} applicants should pay particular attention to financial documentation, as embassies 
                  often request additional proof of funds from South Asian and African nationalities.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  In peak travel seasons — typically June through August and December through January — processing times can 
                  increase by 30–50%. We strongly recommend using the Reverse Calculator above to determine your ideal 
                  application date based on your intended travel date.
                </p>
              </div>
            </div>

          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/* Reverse calculator */}
            <ReverseCalculator min={activeRule.min} max={activeRule.max} />

            {/* Embassy link */}
            {countryData.embassyUrl && (
              <a
                href={countryData.embassyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 bg-white border-2 border-slate-100 rounded-2xl hover:border-[#005a31] transition-all group"
              >
                <div className="w-10 h-10 bg-slate-50 group-hover:bg-[#005a31] rounded-xl flex items-center justify-center transition-colors">
                  <Globe size={18} className="text-slate-400 group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-black text-sm text-slate-800">Official {countryData.name} Portal</div>
                  <div className="text-xs text-slate-400">Apply & check status</div>
                </div>
                <ExternalLink size={16} className="text-slate-300 group-hover:text-[#005a31]" />
              </a>
            )}

            {/* CTA */}
            <div className="bg-slate-900 rounded-[2rem] p-7 text-white text-center">
              <div className="text-3xl mb-3">🧑‍💼</div>
              <h4 className="font-black text-lg mb-2">Need Help?</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-5">
                Our visa experts can handle your entire {countryData.name} application from start to finish.
              </p>
              <a
                href="https://wa.me/8801631312524"
                className="block w-full py-4 bg-amber-400 text-[#004d2c] font-black rounded-xl hover:bg-white transition-all text-sm"
              >
                Talk to an Expert
              </a>
            </div>

            {/* Other visa types for same country */}
            {RELATED.length > 0 && (
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6">
                <h4 className="font-black text-sm text-slate-800 uppercase tracking-wider mb-4">Other Visa Types</h4>
                <div className="space-y-3">
                  {RELATED.map(([k, v]) => (
                    <Link
                      key={k}
                      href={`/visa-processing-time-tracker/${slug}?type=${k}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-[#005a31]/8 border border-transparent hover:border-[#005a31]/20 transition-all"
                    >
                      <div>
                        <div className="text-xs font-black text-slate-800">{VISA_TYPE_LABELS[k]?.label}</div>
                        <div className="text-[10px] text-slate-400">{v.min}–{v.max} business days</div>
                      </div>
                      <ChevronRight size={14} className="text-slate-400" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ── BACK CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-[#005a31] py-16 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-black text-white mb-4">Check Another Country</h2>
          <p className="text-green-200/70 font-medium mb-8">Search 195+ countries and all visa types</p>
          <Link
            href="/visa-processing-time-tracker"
            className="inline-flex items-center gap-3 bg-amber-400 text-[#004d2c] px-10 py-5 rounded-2xl font-black hover:bg-white transition-all shadow-xl"
          >
            <Timer size={20} /> Back to Visa Tracker
          </Link>
        </div>
      </section>

    </div>
  );
}
