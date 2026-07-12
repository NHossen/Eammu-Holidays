"use client";


import { useState, useCallback } from "react";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  Stethoscope,
  HeartPulse,
  CalendarX,
  Luggage,
  PlaneTakeoff,
  Ambulance,
  Car,
  Mountain,
  ListChecks,
  ChevronDown,
  ChevronUp,
  TriangleAlert,
  Check,
  X,
} from "lucide-react";

// ─── PRICING DATA ─────────────────────────────────────────────────────────────

const DESTINATIONS = [
  { id: "asia",      label: "Asia & Middle East", sub: "Malaysia, Dubai, Thailand",    mult: 1.00, flag: "🌏" },
  { id: "schengen",  label: "Schengen Europe",     sub: "Germany, France, Italy",       mult: 1.35, flag: "🌍", schengen: true },
  { id: "uk",        label: "United Kingdom",      sub: "England, Scotland, Wales",      mult: 1.55, flag: "🇬🇧" },
  { id: "usa",       label: "USA & Canada",        sub: "Highest medical costs",         mult: 2.20, flag: "🇺🇸" },
  { id: "australia", label: "Australia & NZ",      sub: "Subclass 600 visa",            mult: 1.75, flag: "🇦🇺" },
  { id: "worldwide", label: "Worldwide",           sub: "All destinations",             mult: 2.60, flag: "🌐" },
];

const PLANS = [
  {
    id: "basic",
    label: "Basic",
    sub: "USD 50k medical",
    baseBDT: 1500,
    coverage: { medical: "USD 50,000", cancel: "USD 2,000", baggage: "USD 1,000", delay: "USD 200", death: "USD 25,000" },
    Icon: Shield,
  },
  {
    id: "standard",
    label: "Standard",
    sub: "USD 75k + cancellation",
    baseBDT: 2200,
    coverage: { medical: "USD 75,000", cancel: "USD 3,000", baggage: "USD 1,500", delay: "USD 300", death: "USD 50,000" },
    Icon: ShieldCheck,
    recommended: true,
  },
  {
    id: "premium",
    label: "Premium",
    sub: "USD 100k + adventure",
    baseBDT: 3800,
    coverage: { medical: "USD 100,000", cancel: "USD 10,000", baggage: "USD 3,000", delay: "USD 500", death: "USD 100,000" },
    Icon: ShieldAlert,
  },
];

const TRAVELER_TYPES = [
  { id: "adult",   label: "Adult (18–60)", mult: 1.00 },
  { id: "senior",  label: "Senior (60+)",  mult: 1.60 },
  { id: "student", label: "Student",        mult: 0.85 },
  { id: "family",  label: "Family pack",    mult: 1.00 },
];

const ADDONS = [
  { id: "adventure",    label: "Adventure sports",         sub: "Trekking, skiing, diving",    baseCost: 600,  Icon: Mountain },
  { id: "preexisting",  label: "Pre-existing conditions",  sub: "Stable conditions only",      baseCost: 800,  Icon: HeartPulse },
  { id: "rental",       label: "Rental car damage",        sub: "Up to USD 5,000",             baseCost: 400,  Icon: Car },
  { id: "cancel",       label: "Cancel for any reason",    sub: "75% refund of trip cost",     baseCost: 900,  Icon: CalendarX },
];

const TIPS = [
  "Buy early — trip cancellation protection starts immediately after purchase.",
  "Annual multi-trip plans save 30–50% if you travel 3+ times per year.",
  "Family plans cover 2 adults + children for less than individual policies.",
  "Basic plan is sufficient for Asia and Middle East travel.",
  "Only add adventure sports coverage if you plan trekking, skiing, or diving.",
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function getDurationMultiplier(days) {
  if (days <= 7)  return 0.60;
  if (days <= 14) return 1.00;
  if (days <= 30) return 1.00 + (days - 14) * 0.04;
  if (days <= 60) return 1.68 + (days - 30) * 0.025;
  return 2.43 + (days - 60) * 0.012;
}

function fmtBDT(n) {
  return "BDT " + Math.round(n).toLocaleString("en-BD");
}

function fmtUSD(n) {
  return "USD " + (n / 110).toFixed(2);
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function InsuranceCalculator() {
  const [dest,      setDest]      = useState("schengen");
  const [plan,      setPlan]      = useState("standard");
  const [ttype,     setTtype]     = useState("adult");
  const [travelers, setTravelers] = useState(1);
  const [days,      setDays]      = useState(14);
  const [addons,    setAddons]    = useState(new Set());
  const [showBreakdown, setShowBreakdown] = useState(false);

  const toggleAddon = useCallback((id) => {
    setAddons(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  // ── Calculations ──────────────────────────────────────────────────────────
  const destData   = DESTINATIONS.find(d => d.id === dest);
  const planData   = PLANS.find(p => p.id === plan);
  const ttypeData  = TRAVELER_TYPES.find(t => t.id === ttype);

  const durMult    = getDurationMultiplier(days);
  const typeMult   = ttype === "family"
    ? (travelers <= 2 ? 1.0 : 1.0 + (travelers - 2) * 0.35)
    : ttypeData.mult;

  const perTraveler   = Math.round(planData.baseBDT * durMult * destData.mult * typeMult);
  const subtotal      = ttype === "family" ? perTraveler : perTraveler * travelers;
  const addonDurMult  = days <= 14 ? 1 : days <= 30 ? 1.3 : 1.7;
  const addonCost     = Array.from(addons).reduce((sum, id) => {
    const a = ADDONS.find(x => x.id === id);
    return sum + Math.round(a.baseCost * addonDurMult);
  }, 0);
  const total    = subtotal + addonCost;
  const perDay   = Math.round(total / days);

  const isSchengen = destData.schengen;
  const cov        = planData.coverage;
  const hasAdv     = addons.has("adventure");
  const hasPre     = addons.has("preexisting");

  // ── Shared pill style helper ───────────────────────────────────────────────
  const pill = (active) =>
    `flex flex-col items-center gap-1 p-3 rounded-xl border-2 text-center cursor-pointer transition-all text-sm font-medium select-none
     ${active
       ? "border-green-600 bg-green-50 text-green-800"
       : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-800"}`;

  const addonPill = (active) =>
    `flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all text-sm font-medium select-none
     ${active
       ? "border-green-600 bg-green-50 text-green-800"
       : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-800"}`;

  return (
    <section
      aria-labelledby="calc-heading"
      className="bg-white rounded-3xl max-w-7xl mx-auto border-2 border-gray-100 mt-24 p-6 md:p-8 shadow-sm"
      itemScope
      itemType="https://schema.org/WebApplication"
    >
      <meta itemProp="name" content="Travel Insurance Cost Calculator — Eammu Holidays" />
      <meta itemProp="applicationCategory" content="TravelApplication" />
      <meta itemProp="operatingSystem" content="Web" />
      <meta itemProp="url" content="https://eammu.com/travel-insurance" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-11 h-11 bg-[#005a31] rounded-2xl flex items-center justify-center flex-shrink-0">
          <Shield size={22} className="text-white" />
        </div>
        <div>
          <h2 id="calc-heading" className="text-xl font-black text-gray-900 leading-tight">
            Travel Insurance Cost Calculator — Bangladesh 2026
          </h2>
          <p className="text-xs text-gray-400 font-medium mt-0.5">
            Instant estimate · Embassy-compliant Schengen coverage included
          </p>
        </div>
      </div>

      {/* ── STEP 1: Destination ── */}
      <fieldset className="mb-7">
        <legend className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">
          Step 1 — Destination
        </legend>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {DESTINATIONS.map(d => (
            <button
              key={d.id}
              onClick={() => setDest(d.id)}
              className={pill(dest === d.id)}
              aria-pressed={dest === d.id}
              aria-label={`Select ${d.label} as destination`}
            >
              <span className="text-xl" aria-hidden="true">{d.flag}</span>
              <span className="font-black text-xs leading-tight">{d.label}</span>
              <span className="text-[10px] opacity-60 leading-tight">{d.sub}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <hr className="border-gray-100 mb-7" />

      {/* ── STEP 2: Plan ── */}
      <fieldset className="mb-7">
        <legend className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">
          Step 2 — Coverage plan
        </legend>
        <div className="grid grid-cols-3 gap-2.5">
          {PLANS.map(p => (
            <button
              key={p.id}
              onClick={() => setPlan(p.id)}
              className={`${pill(plan === p.id)} relative`}
              aria-pressed={plan === p.id}
              aria-label={`Select ${p.label} plan`}
            >
              {p.recommended && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase tracking-wide bg-amber-400 text-amber-900 px-2 py-0.5 rounded-full whitespace-nowrap">
                  Best value
                </span>
              )}
              <p.Icon size={20} aria-hidden="true" />
              <span className="font-black text-xs">{p.label}</span>
              <span className="text-[10px] opacity-60">{p.sub}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <hr className="border-gray-100 mb-7" />

      {/* ── STEP 3: Travelers ── */}
      <fieldset className="mb-7">
        <legend className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">
          Step 3 — Travelers
        </legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="travelers-slider" className="flex justify-between text-sm font-black text-gray-700 mb-2">
              Number of travelers
              <span className="font-normal text-gray-400">{travelers} traveler{travelers > 1 ? "s" : ""}</span>
            </label>
            <input
              id="travelers-slider"
              type="range" min="1" max="8" step="1"
              value={travelers}
              onChange={e => setTravelers(Number(e.target.value))}
              className="w-full accent-[#005a31]"
              aria-label="Number of travelers"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>1</span><span>4</span><span>8</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-black text-gray-700 mb-2">Traveler type</p>
            <div className="grid grid-cols-2 gap-1.5">
              {TRAVELER_TYPES.map(t => (
                <button
                  key={t.id}
                  onClick={() => setTtype(t.id)}
                  className={`py-2 px-3 rounded-lg border-2 text-xs font-bold transition-all cursor-pointer
                    ${ttype === t.id ? "border-green-600 bg-green-50 text-green-800" : "border-gray-200 text-gray-600 hover:border-gray-300"}`}
                  aria-pressed={ttype === t.id}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </fieldset>

      <hr className="border-gray-100 mb-7" />

      {/* ── STEP 4: Duration ── */}
      <fieldset className="mb-7">
        <legend className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">
          Step 4 — Trip duration
        </legend>
        <label htmlFor="days-slider" className="flex justify-between text-sm font-black text-gray-700 mb-2">
          How many days?
          <span className="font-normal text-gray-400">{days} days</span>
        </label>
        <input
          id="days-slider"
          type="range" min="3" max="180" step="1"
          value={days}
          onChange={e => setDays(Number(e.target.value))}
          className="w-full accent-[#005a31]"
          aria-label="Trip duration in days"
        />
        <div className="flex justify-between text-[10px] text-gray-400 mt-1">
          <span>3 days</span><span>30 days</span><span>90 days</span><span>180 days</span>
        </div>
      </fieldset>

      <hr className="border-gray-100 mb-7" />

      {/* ── STEP 5: Add-ons ── */}
      <fieldset className="mb-8">
        <legend className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">
          Step 5 — Add-ons (optional)
        </legend>
        <div className="grid sm:grid-cols-2 gap-2.5">
          {ADDONS.map(a => (
            <button
              key={a.id}
              onClick={() => toggleAddon(a.id)}
              className={addonPill(addons.has(a.id))}
              aria-pressed={addons.has(a.id)}
              aria-label={`Toggle ${a.label} add-on`}
            >
              <a.Icon size={20} className="flex-shrink-0" aria-hidden="true" />
              <div className="text-left">
                <p className="font-black text-xs leading-tight">{a.label}</p>
                <p className="text-[10px] opacity-60 leading-tight">{a.sub}</p>
              </div>
              {addons.has(a.id) && (
                <Check size={14} className="ml-auto flex-shrink-0 text-green-700" aria-hidden="true" />
              )}
            </button>
          ))}
        </div>
      </fieldset>

      {/* ── RESULT PANEL ── */}
      <div className="bg-gray-50 rounded-2xl border-2 border-gray-100 p-6">

        {/* Schengen warning */}
        {isSchengen && (
          <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-3 mb-5 text-xs text-amber-800 leading-relaxed">
            <TriangleAlert size={16} className="flex-shrink-0 mt-0.5 text-amber-600" aria-hidden="true" />
            <span>
              <strong>Schengen embassy requirement met.</strong> This plan includes the mandatory €30,000 minimum
              medical coverage. Your embassy-accepted insurance certificate is included — required for your{" "}
              <Link href="/schengen-visa" className="font-black underline hover:no-underline">
                Schengen visa application
              </Link>
              .
            </span>
          </div>
        )}

        {/* Price headline */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Estimated total premium</p>
            <p className="text-4xl font-black text-gray-900" aria-live="polite" aria-label={`Estimated premium ${fmtBDT(total)}`}>
              {fmtBDT(total)}
            </p>
            <p className="text-sm text-gray-400 mt-1">≈ {fmtUSD(total)}</p>
          </div>
          <span className={`text-xs font-black px-3 py-1.5 rounded-xl border self-start
            ${plan === "basic" ? "bg-amber-50 text-amber-700 border-amber-200"
            : plan === "standard" ? "bg-green-50 text-green-700 border-green-200"
            : "bg-blue-50 text-blue-700 border-blue-200"}`}>
            {planData.label} plan
          </span>
        </div>

        {/* Metric cards */}
        <dl className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: "Per traveler", val: ttype === "family" ? "Family rate" : fmtBDT(perTraveler) },
            { label: "Per day",      val: fmtBDT(perDay) },
            { label: "Duration",     val: `${days} days` },
          ].map(m => (
            <div key={m.label} className="bg-white rounded-xl border border-gray-100 p-3">
              <dt className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">{m.label}</dt>
              <dd className="text-sm font-black text-gray-800">{m.val}</dd>
            </div>
          ))}
        </dl>

        {/* Breakdown toggle */}
        <button
          onClick={() => setShowBreakdown(v => !v)}
          className="flex items-center gap-1.5 text-xs font-bold text-[#005a31] hover:underline mb-4"
          aria-expanded={showBreakdown}
        >
          <ListChecks size={14} aria-hidden="true" />
          {showBreakdown ? "Hide" : "Show"} cost breakdown
          {showBreakdown ? <ChevronUp size={13} aria-hidden="true" /> : <ChevronDown size={13} aria-hidden="true" />}
        </button>

        {showBreakdown && (
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden mb-5 text-xs">
            {[
              { label: "Base premium",          val: fmtBDT(planData.baseBDT) },
              { label: "Destination multiplier",val: `${destData.mult.toFixed(2)}× (${destData.label})` },
              { label: "Duration multiplier",   val: `${durMult.toFixed(2)}× (${days} days)` },
              { label: "Traveler type",         val: ttype === "family" ? "Family pack" : ttypeData.label },
              { label: "Travelers",             val: ttype === "family" ? `${travelers} members` : `${travelers} × ${fmtBDT(perTraveler)}` },
              ...(addonCost > 0 ? [{ label: "Add-ons", val: `+ ${fmtBDT(addonCost)}` }] : []),
            ].map((r, i) => (
              <div key={i} className="flex justify-between px-4 py-2.5 border-b border-gray-50 last:border-b-0">
                <span className="text-gray-500">{r.label}</span>
                <span className="font-bold text-gray-800">{r.val}</span>
              </div>
            ))}
            <div className="flex justify-between px-4 py-2.5 bg-gray-50 font-black">
              <span className="text-gray-700">Total</span>
              <span className="text-gray-900">{fmtBDT(total)}</span>
            </div>
          </div>
        )}

        {/* Coverage details */}
        <div className="border-t border-gray-100 pt-4 mb-5">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">
            What this plan covers
          </p>
          <div className="space-y-2.5">
            {[
              { Icon: Stethoscope, label: "Emergency medical",      val: cov.medical,      ok: true },
              { Icon: Ambulance,   label: "Medical evacuation",     val: "Included",       ok: true },
              { Icon: CalendarX,   label: "Trip cancellation",      val: cov.cancel,       ok: true },
              { Icon: Luggage,     label: "Baggage loss",           val: cov.baggage,      ok: true },
              { Icon: PlaneTakeoff,label: "Flight delay",           val: cov.delay,        ok: true },
              { Icon: ShieldCheck, label: "Accidental death",       val: cov.death,        ok: true },
              { Icon: Mountain,    label: "Adventure sports",       val: hasAdv ? "Included" : "Not included",     ok: hasAdv },
              { Icon: HeartPulse,  label: "Pre-existing conditions",val: hasPre ? "Limited coverage" : "Not included", ok: hasPre },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <span className={`flex items-center gap-2 ${row.ok ? "text-gray-600" : "text-gray-400"}`}>
                  {row.ok
                    ? <Check size={14} className="text-green-600 flex-shrink-0" aria-hidden="true" />
                    : <X     size={14} className="text-gray-300 flex-shrink-0" aria-hidden="true" />
                  }
                  <row.Icon size={14} aria-hidden="true" />
                  {row.label}
                </span>
                <span className={`font-bold text-xs ${row.ok ? "text-gray-800" : "text-gray-300"}`}>
                  {row.val}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/contact/travel-agency-bangladesh"
          className="block w-full text-center py-3.5 bg-[#005a31] text-white font-black rounded-2xl hover:bg-[#004d2c] transition text-sm shadow-lg"
          aria-label="Get this travel insurance plan from Eammu Holidays"
        >
          <Shield size={15} className="inline mr-2 -mt-0.5" aria-hidden="true" />
          Get this plan from Eammu Holidays
        </Link>
        <div className="flex flex-wrap justify-center gap-4 mt-3 text-[10px] text-gray-400 font-medium">
          <span>Final price confirmed by our team</span>
          <span>·</span>
          <span>Embassy certificate included for Schengen</span>
          <span>·</span>
          <span>Instant delivery</span>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <p className="text-sm font-black text-gray-700 mb-3">Tips to reduce your premium</p>
        <ul className="space-y-2.5">
          {TIPS.map((tip, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75] flex-shrink-0 mt-2" aria-hidden="true" />
              {tip}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-3 text-xs">
          <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">
            Free visa checklist →
          </Link>
          <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#005a31] font-semibold hover:underline">
            Visa processing times →
          </Link>
          <Link href="/schengen-visa" className="text-[#005a31] font-semibold hover:underline">
            Schengen visa guide →
          </Link>
          <Link href="/visa" className="text-[#005a31] font-semibold hover:underline">
            All visa destinations →
          </Link>
        </div>
      </div>
    </section>
  );
}