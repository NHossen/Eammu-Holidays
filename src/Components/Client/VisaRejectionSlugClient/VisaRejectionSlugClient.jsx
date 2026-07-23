"use client";
// টপে import যুক্ত করুন
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  AlertTriangle, ChevronRight, ArrowLeft, ShieldCheck, XCircle,
  CheckCircle2, TrendingUp, TrendingDown, FileText, Globe,
  ExternalLink, Zap, BarChart2, Lightbulb, ThumbsUp, Minus,
  ChevronDown, ChevronUp, AlertCircle, Clock, History,
  Search, Star, BookOpen, Users, Award, MapPin, CalendarDays,
  Phone, Mail, MessageSquare, Info, Percent, Target, Eye,
} from "lucide-react";
import { VISA_TYPE_LABELS, RISK_CONFIG, IMPACT_CONFIG } from "@/app/lib/rejectionData";

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────
const TABS = [
  { id: "overview",    label: "Overview",     icon: BarChart2   },
  { id: "reasons",     label: "Why Rejected", icon: XCircle     },
  { id: "fixes",       label: "How to Fix",   icon: Zap         },
  { id: "documents",   label: "Documents",    icon: FileText    },
  { id: "tips",        label: "Expert Tips",  icon: Lightbulb   },
  { id: "compare",     label: "Compare",      icon: Eye         },
];

// All popular destinations for internal linking
const ALL_DESTINATIONS = [
  { slug: "united-states",   name: "USA",           flag: "🇺🇸" },
  { slug: "united-kingdom",  name: "UK",            flag: "🇬🇧" },
  { slug: "canada",          name: "Canada",        flag: "🇨🇦" },
  { slug: "australia",       name: "Australia",     flag: "🇦🇺" },
  { slug: "germany",         name: "Germany",       flag: "🇩🇪" },
  { slug: "france",          name: "France",        flag: "🇫🇷" },
  { slug: "italy",           name: "Italy",         flag: "🇮🇹" },
  { slug: "spain",           name: "Spain",         flag: "🇪🇸" },
  { slug: "japan",           name: "Japan",         flag: "🇯🇵" },
  { slug: "singapore",       name: "Singapore",     flag: "🇸🇬" },
  { slug: "south-korea",     name: "South Korea",   flag: "🇰🇷" },
  { slug: "malaysia",        name: "Malaysia",      flag: "🇲🇾" },
  { slug: "thailand",        name: "Thailand",      flag: "🇹🇭" },
  { slug: "turkey",          name: "Turkey",        flag: "🇹🇷" },
  { slug: "uae",             name: "UAE",           flag: "🇦🇪" },
  { slug: "new-zealand",     name: "New Zealand",   flag: "🇳🇿" },
  { slug: "netherlands",     name: "Netherlands",   flag: "🇳🇱" },
  { slug: "switzerland",     name: "Switzerland",   flag: "🇨🇭" },
];

const NATIONALITY_LINKS = [
  { slug: "bangladesh", name: "Bangladesh", flag: "🇧🇩" },
  { slug: "india",      name: "India",      flag: "🇮🇳" },
  { slug: "pakistan",   name: "Pakistan",   flag: "🇵🇰" },
  { slug: "nepal",      name: "Nepal",      flag: "🇳🇵" },
  { slug: "sri-lanka",  name: "Sri Lanka",  flag: "🇱🇰" },
  { slug: "nigeria",    name: "Nigeria",    flag: "🇳🇬" },
  { slug: "ghana",      name: "Ghana",      flag: "🇬🇭" },
  { slug: "philippines",name: "Philippines",flag: "🇵🇭" },
  { slug: "indonesia",  name: "Indonesia",  flag: "🇮🇩" },
  { slug: "china",      name: "China",      flag: "🇨🇳" },
];

// ─────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
        aria-expanded={open}
      >
        <span className="text-sm font-black text-slate-800 leading-snug" itemProp="name">{q}</span>
        {open
          ? <ChevronUp size={16} className="text-slate-400 flex-shrink-0 mt-0.5" />
          : <ChevronDown size={16} className="text-slate-400 flex-shrink-0 mt-0.5" />}
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
          <span itemProp="text">{a}</span>
        </div>
      )}
    </div>
  );
}

function MiniTrendChart({ months, values, color = "#ef4444" }) {
  if (!months || !values || values.length === 0) return null;
  const max = Math.max(...values);
  const min = Math.min(...values);
  return (
    <div>
      <div className="flex items-end gap-1 h-16">
        {values.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col items-center justify-end gap-1">
            <div
              className="w-full rounded-sm transition-all"
              style={{
                height: `${Math.max(8, ((v - min) / (max - min + 1)) * 52 + 8)}px`,
                backgroundColor: color,
                opacity: i === values.length - 1 ? 1 : 0.4 + (i / values.length) * 0.5,
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-[9px] text-slate-400">{months[0]}</span>
        <span className="text-[9px] text-slate-400">{months[months.length - 1]}</span>
      </div>
    </div>
  );
}

/** Animated counter hook */
function useCounter(target, duration = 1200) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);
  useEffect(() => {
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration]);
  return count;
}

/** Stat card with animated counter */
function StatCard({ label, value, icon, sub, color = "slate" }) {
  const numericVal = parseFloat(String(value).replace(/[^0-9.]/g, "")) || 0;
  const suffix = String(value).replace(/[0-9.]/g, "");
  const animated = useCounter(numericVal);
  return (
    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-xl font-black text-slate-900">{animated}{suffix}</div>
      <div className="text-xs font-black text-slate-500 uppercase mt-1">{label}</div>
      <div className="text-[10px] text-slate-400 mt-0.5">{sub}</div>
    </div>
  );
}

/** Horizontal bar with label and percentage */
function BarRow({ label, pct, highlight = false, color = "red" }) {
  const colorMap = {
    red: "bg-red-500", blue: "bg-blue-500", green: "bg-green-500",
    amber: "bg-amber-500", slate: "bg-slate-400",
  };
  return (
    <div className="flex items-center gap-4">
      <div className={`w-28 text-xs font-black flex-shrink-0 ${highlight ? "text-red-700" : "text-slate-600"}`}>{label}</div>
      <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all duration-700 ${colorMap[color] || colorMap.red}`} style={{ width: `${pct}%` }} />
      </div>
      <div className={`text-sm font-black flex-shrink-0 w-10 text-right ${highlight ? "text-red-600" : "text-slate-500"}`}>{pct}%</div>
    </div>
  );
}

/** Comparison table for destinations */
function DestCompareTable({ destinations, natName }) {
  if (!destinations || destinations.length === 0) return null;
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-100">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50">
            <th className="text-left px-4 py-3 text-xs font-black text-slate-500 uppercase">Destination</th>
            <th className="text-left px-4 py-3 text-xs font-black text-slate-500 uppercase">Visa Type</th>
            <th className="text-left px-4 py-3 text-xs font-black text-slate-500 uppercase">Rejection Rate</th>
            <th className="text-left px-4 py-3 text-xs font-black text-slate-500 uppercase">Risk Level</th>
            <th className="text-left px-4 py-3 text-xs font-black text-slate-500 uppercase">Processing</th>
          </tr>
        </thead>
        <tbody>
          {destinations.map(({ slug, name, flag, rate, risk, processingTime, visaType }) => {
            const cfg = RISK_CONFIG[risk] || RISK_CONFIG["Medium"];
            return (
              <tr key={slug} className="border-t border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3">
                  <Link href={`/visa-rejection/${slug}`} className="flex items-center gap-2 font-black text-slate-800 hover:text-red-500 transition-colors">
                    <span className="text-lg">{flag}</span> {name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-slate-500 text-xs">{visaType || "Tourist"}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-red-500" style={{ width: `${rate}%` }} />
                    </div>
                    <span className="font-black text-red-600">{rate}%</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-lg border ${cfg.color} ${cfg.bg} ${cfg.border}`}>{risk}</span>
                </td>
                <td className="px-4 py-3 text-xs text-slate-500">{processingTime || "Varies"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function VisaRejectionSlugClient({
  slug,
  visaType: initialVisaType,
  natName,
  destName,
  rejData,
  rule: initialRule,
}) {
  // ✅ এভাবে করুন
// ✅ এখন (শুধু prop থেকে নিন):
const [activeType, setActiveType] = useState(initialVisaType || "tourist");
  const [activeTab,  setActiveTab]  = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const rule    = rejData.types?.[activeType] || initialRule;
  const riskCfg = RISK_CONFIG[rule?.risk]    || RISK_CONFIG["Medium"];
  const related = Object.entries(rejData.types || {}).filter(([k]) => k !== activeType);

  const trendValues = rejData.monthlyTrends?.[activeType];
  const trendMonths = rejData.monthlyTrends?.months;

  // Filtered destinations for search
  const filteredDests = ALL_DESTINATIONS.filter(d =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Generate SEO slug variants for internal linking
  const natSlug = natName?.toLowerCase().replace(/\s+/g, "-") || "bangladesh";

  // Derived approval rate
  const approvalRate = 100 - (rule?.rate || 0);

  if (!rule) return null;

  return (
    <div className="min-h-screen bg-white font-sans my-8">


      {/* ── HERO ── */}
      <section className="relative bg-white pt-14 pb-10 px-6 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 text-[220px] opacity-[0.035] select-none pointer-events-none leading-none" aria-hidden="true">
          {rejData.flag}
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">

          <Link href="/visa-rejection" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-red-500 mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Rejection Checker
          </Link>

          {/* Visa Type Pills */}
          <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Select visa type">
            {Object.entries(rejData.types || {}).map(([k]) => (
              <button
                key={k}
                onClick={() => { setActiveType(k); setActiveTab("overview"); }}
                className={`px-4 py-2 rounded-xl border-2 text-xs font-black uppercase transition-all ${
                  activeType === k
                    ? "bg-slate-900 text-white border-slate-900 shadow-lg"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                }`}
                aria-pressed={activeType === k}
              >
                {VISA_TYPE_LABELS[k]?.icon} {VISA_TYPE_LABELS[k]?.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left */}
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
                {natName} {rule.label} Visa Rejection Rate for{" "}
                <span className="text-transparent" style={{ WebkitTextStroke: "2px #ef4444" }}>
                  {destName}
                </span>
              </h1>
              <p className="text-slate-500 font-medium mb-4 text-sm leading-relaxed">
                Official refusal statistics for <strong className="text-slate-700">{natName}</strong> passport holders applying
                for a <strong className="text-slate-700">{rule.label}</strong> visa to{" "}
                <strong className="text-slate-700">{destName}</strong> — updated {new Date().getFullYear()}.
                Data sourced from official immigration authority statistics and annual reports.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={`px-4 py-2 rounded-xl border text-xs font-black ${VISA_TYPE_LABELS[activeType]?.color}`}>
                  {VISA_TYPE_LABELS[activeType]?.icon} {VISA_TYPE_LABELS[activeType]?.label}
                </span>
                <span className={`px-4 py-2 rounded-xl border text-xs font-black ${riskCfg.color} ${riskCfg.bg} ${riskCfg.border}`}>
                  {rule.risk} Rejection Risk
                </span>
                <span className="px-4 py-2 rounded-xl border text-xs font-black bg-green-50 text-green-700 border-green-200">
                  ✓ {approvalRate}% Approval Rate
                </span>
              </div>

              {/* Key meta links */}
              <div className="flex flex-wrap gap-2 text-xs">
                <Link href={`/visa/dubai-residents/${destName.toLowerCase().replace(/\s+/g, "-")}`} className="inline-flex items-center gap-1 text-red-500 hover:text-red-700 font-bold underline">
                  <BookOpen size={11} /> {destName} visa guide
                </Link>
                <span className="text-slate-300">·</span>
                <Link href="/travel-resources/visa-checklist-generator" className="inline-flex items-center gap-1 text-red-500 hover:text-red-700 font-bold underline">
                  <FileText size={11} /> Checklist generator
                </Link>
                <span className="text-slate-300">·</span>
                <Link href="/travel-resources/visa-processing-time-tracker" className="inline-flex items-center gap-1 text-red-500 hover:text-red-700 font-bold underline">
                  <Clock size={11} /> Processing times
                </Link>
              </div>
            </div>

            {/* Right — Rate Card */}
            <div className="bg-slate-900 rounded-[2rem] p-8 text-white">
              <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                {natName} → {destName} · {rule.label}
              </div>
              <div className="flex items-end gap-3 mb-1">
                <span className="text-7xl font-black text-red-400">{rule.rate}%</span>
                <div className="pb-2">
                  <div className="text-slate-400 text-xs">refusal rate</div>
                  <div className="text-green-400 text-sm font-black">{approvalRate}% approved</div>
                </div>
              </div>
              <div className="text-sm text-slate-400 font-semibold mb-4">{rule.label} · {natName} applicants</div>

              {/* Trend */}
              <div className="flex items-center gap-2 mb-5">
                {rule.trend === "up"     && <TrendingUp   size={14} className="text-red-400"   />}
                {rule.trend === "down"   && <TrendingDown size={14} className="text-green-400" />}
                {rule.trend === "stable" && <Minus        size={14} className="text-slate-400" />}
                <span className="text-xs text-slate-500">{rule.trendNote}</span>
              </div>

              {/* Dual Progress: Rejection vs Approval */}
              <div className="space-y-2 mb-4">
                <div>
                  <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                    <span>Rejection</span><span>{rule.rate}%</span>
                  </div>
                  <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-red-500 transition-all duration-700" style={{ width: `${rule.rate}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                    <span>Approval</span><span>{approvalRate}%</span>
                  </div>
                  <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-green-500 transition-all duration-700" style={{ width: `${approvalRate}%` }} />
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-slate-600 pt-3 border-t border-white/5">
                Source: Official {destName} immigration statistics · {new Date().getFullYear()} data
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO STATS BAR ── */}
      {(rule.seoStats?.length > 0) && (
        <div className="bg-slate-900 px-6 py-5 border-b border-slate-800">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-x-8 gap-y-3 items-center">
              {rule.seoStats.map(({ stat, context }, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-red-400 font-black text-sm">{stat}</span>
                  <span className="text-slate-400 text-xs">{context}</span>
                  {i < rule.seoStats.length - 1 && <span className="text-slate-700 ml-4 hidden md:inline">·</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── GLOBAL REJECTION STATS STRIP ── */}
      <div className="bg-red-500 px-6 py-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-x-10 gap-y-2 items-center justify-center text-white text-center">
            {[
              { val: `${rule.rate}%`,  label: `${natName} Refusal Rate`   },
              { val: `${approvalRate}%`, label: "Approval Rate"            },
              { val: rule.stats?.approvalTime || "Varies", label: "Processing Time" },
              { val: rule.topReasons?.[0]?.pct + "%" || "—", label: "Top Rejection Cause" },
              { val: rejData.processingHistory?.length > 0 ? `${rejData.processingHistory[rejData.processingHistory.length - 1]?.year}` : new Date().getFullYear(), label: "Latest Data Year" },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <div className="text-xl md:text-2xl font-black">{val}</div>
                <div className="text-xs text-red-100 font-semibold">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TAB NAV ── */}
      <div className="sticky top-0 z-30 bg-white border-b border-slate-100 px-6 shadow-sm">
        <div className="container mx-auto max-w-6xl flex gap-1 overflow-x-auto py-3">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase whitespace-nowrap flex-shrink-0 transition-all ${
                activeTab === id
                  ? "bg-slate-900 text-white shadow"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
              aria-current={activeTab === id ? "page" : undefined}
            >
              <Icon size={13} /> {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* ── MAIN COLUMN ── */}
          <div className="lg:col-span-2 space-y-12">

            {/* ────────── OVERVIEW TAB ────────── */}
            {activeTab === "overview" && (
              <>
                {/* Success banner */}
                {rule.successStories && (
                  <div className={`flex items-start gap-4 p-6 rounded-2xl border-2 ${riskCfg.bg} ${riskCfg.border}`}>
                    <ThumbsUp size={20} className={riskCfg.color} />
                    <p className={`text-sm font-semibold ${riskCfg.color}`}>{rule.successStories}</p>
                  </div>
                )}

                {/* ── AT A GLANCE STATS ── */}
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <BarChart2 size={22} className="text-red-500" />
                    {natName} → {destName} {rule.label} Visa: At a Glance
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { label: "Rejection Rate",  value: `${rule.rate}%`,                                   icon: "📊", sub: `${rule.risk} Risk`                                          },
                      { label: "Approval Rate",   value: `${approvalRate}%`,                                icon: "✅", sub: "Average success"                                            },
                      { label: "Processing Time", value: rule.stats?.approvalTime?.split(" ")[0] || "—",    icon: "⏱️", sub: rule.stats?.approvalTime || ""                                },
                      { label: "Biometrics",      value: rule.stats?.biometricsRequired ? "Yes" : "No",     icon: "👆", sub: rule.stats?.biometricsRequired ? "Required" : "Not required"  },
                      { label: "Interview",       value: rule.stats?.interviewRequired  ? "Yes" : "No",     icon: "🗣️", sub: rule.stats?.interviewRequired  ? "Required" : "Not required"  },
                      { label: "Appeal",          value: rule.stats?.appealAvailable    ? "Yes" : "No",     icon: "⚖️", sub: rule.stats?.appealAvailable    ? "Available" : "Not available" },
                    ].map(({ label, value, icon, sub }) => (
                      <div key={label} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                        <div className="text-2xl mb-2">{icon}</div>
                        <div className="text-xl font-black text-slate-900">{value}</div>
                        <div className="text-xs font-black text-slate-500 uppercase mt-1">{label}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── TOP REJECTION REASONS PREVIEW ── */}
                {(rule.topReasons?.length > 0) && (
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-3">
                      <AlertTriangle size={22} className="text-red-500" />
                      Top {destName} Visa Rejection Reasons for {natName}
                    </h2>
                    <p className="text-sm text-slate-400 mb-6">
                      Why {natName} applicants get refused for {destName} {rule.label} visas — based on official immigration data.
                    </p>
                    <div className="space-y-4">
                      {rule.topReasons.slice(0, 4).map(({ pct, reason, detail }, i) => (
                        <div key={i} className="p-5 bg-red-50 border border-red-100 rounded-2xl">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-6 h-6 bg-red-500 text-white rounded-lg flex items-center justify-center font-black text-xs flex-shrink-0">
                                {i + 1}
                              </div>
                              <span className="text-sm font-black text-red-800">{reason}</span>
                            </div>
                            <span className="text-sm font-black text-red-500 flex-shrink-0">{pct}%</span>
                          </div>
                          <div className="h-2 bg-red-100 rounded-full mb-3">
                            <div className="h-full bg-red-500 rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                          <p className="text-xs text-red-700">{detail}</p>
                        </div>
                      ))}
                    </div>
                    {rule.topReasons.length > 4 && (
                      <button
                        onClick={() => setActiveTab("reasons")}
                        className="mt-4 text-sm font-black text-red-500 hover:text-red-700 flex items-center gap-2 transition-colors"
                      >
                        See all {rule.topReasons.length} rejection reasons <ChevronRight size={16} />
                      </button>
                    )}
                  </div>
                )}

                {/* ── MONTHLY REFUSAL TREND ── */}
                {trendValues && trendMonths && (
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <h2 className="text-lg font-black text-slate-900 mb-1 flex items-center gap-2">
                      <TrendingUp size={18} className="text-red-500" />
                      {natName} → {destName}: Refusal Rate Trend (Last 12 Months)
                    </h2>
                    <p className="text-xs text-slate-400 mb-5">{rule.label} · official monthly statistics</p>
                    <MiniTrendChart months={trendMonths} values={trendValues} />
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200">
                      <div>
                        <div className="text-xs text-slate-400">12-month low</div>
                        <div className="text-base font-black text-green-600">{Math.min(...trendValues)}%</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-slate-400">Average</div>
                        <div className="text-base font-black text-slate-600">
                          {Math.round(trendValues.reduce((a, b) => a + b, 0) / trendValues.length)}%
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-slate-400">Current</div>
                        <div className="text-base font-black text-red-500">{trendValues[trendValues.length - 1]}%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-400">12-month high</div>
                        <div className="text-base font-black text-red-700">{Math.max(...trendValues)}%</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── YEAR-OVER-YEAR HISTORY TABLE ── */}
                {(rejData.processingHistory?.length > 0) && (
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-3">
                      <History size={22} className="text-slate-500" />
                      {destName} Visa Refusal History — {natName} Applicants
                    </h2>
                    <p className="text-sm text-slate-400 mb-6">
                      Year-by-year refusal statistics for {natName} nationals applying to {destName}.
                    </p>
                    <div className="overflow-x-auto rounded-2xl border border-slate-100">
                      <table className="w-full text-sm" role="table">
                        <thead>
                          <tr className="bg-slate-50">
                            <th className="text-left px-4 py-3 text-xs font-black text-slate-500 uppercase">Year</th>
                            <th className="text-left px-4 py-3 text-xs font-black text-slate-500 uppercase">Applications</th>
                            <th className="text-left px-4 py-3 text-xs font-black text-slate-500 uppercase">Approved</th>
                            <th className="text-left px-4 py-3 text-xs font-black text-slate-500 uppercase">Refusal Rate</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rejData.processingHistory.map(({ year, refusalRate, applications }) => {
                            const approved = Math.round(applications * (1 - refusalRate / 100));
                            return (
                              <tr key={year} className="border-t border-slate-50 hover:bg-slate-50 transition-colors">
                                <td className="px-4 py-3 font-black text-slate-800">{year}</td>
                                <td className="px-4 py-3 text-slate-600">{applications.toLocaleString()}</td>
                                <td className="px-4 py-3 text-green-600 font-bold">{approved.toLocaleString()}</td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center gap-3">
                                    <div className="flex-1 max-w-[100px] h-2 bg-slate-100 rounded-full">
                                      <div className="h-full rounded-full bg-red-500" style={{ width: `${refusalRate}%` }} />
                                    </div>
                                    <span className="font-black text-red-600">{refusalRate}%</span>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-3">
                      Sources: {destName} Home Office / immigration authority annual statistics.
                      2020–21 data reflects COVID-19 border restrictions.
                    </p>
                  </div>
                )}

                {/* ── COMMON MISTAKES ── */}
                {(rejData.commonMistakes?.length > 0) && (
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-3">
                      <AlertCircle size={22} className="text-orange-500" />
                      Common Mistakes That Cause {destName} Visa Refusals
                    </h2>
                    <p className="text-sm text-slate-400 mb-6">
                      Avoidable errors responsible for most {natName} rejections in {new Date().getFullYear()}.
                    </p>
                    <div className="space-y-3">
                      {rejData.commonMistakes.map(({ mistake, consequence }, i) => (
                        <div key={i} className="p-5 bg-orange-50 border border-orange-100 rounded-2xl">
                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 bg-orange-500 text-white rounded-lg flex items-center justify-center font-black text-xs flex-shrink-0 mt-0.5">
                              {i + 1}
                            </div>
                            <div>
                              <p className="text-sm font-black text-orange-900 mb-1">{mistake}</p>
                              <p className="text-xs text-orange-700">
                                <span className="font-bold">Consequence: </span>{consequence}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── SEO CONTEXTUAL ARTICLE ── */}
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 mb-4">
                    {natName} to {destName} Visa — What the {new Date().getFullYear()} Data Shows
                  </h2>
                  <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                    <p>
                      {natName} passport holders applying for a <strong className="text-slate-800">{destName} {rule.label} visa</strong> face
                      a <strong className="text-red-600">{rule.rate}% refusal rate</strong> — meaning roughly{" "}
                      <strong className="text-slate-800">{rule.rate} in every 100 applications</strong> are refused.
                      The remaining {approvalRate}% are approved, often due to strong financial documentation and clear travel intent.
                    </p>
                    <p>
                      The primary cause of refusal is <strong className="text-slate-800">{rule.topReasons?.[0]?.reason}</strong>,
                      accounting for approximately {rule.topReasons?.[0]?.pct}% of all refused applications.
                      This is followed by <strong className="text-slate-800">{rule.topReasons?.[1]?.reason}</strong> ({rule.topReasons?.[1]?.pct}%)
                      and <strong className="text-slate-800">{rule.topReasons?.[2]?.reason}</strong> ({rule.topReasons?.[2]?.pct}%).
                    </p>
                    <p>
                      Processing takes approximately <strong className="text-slate-800">{rule.stats?.approvalTime || "several weeks"}</strong>.
                      {rule.stats?.biometricsRequired && " Biometrics enrollment is mandatory for all applicants."}
                      {rule.stats?.interviewRequired && " An in-person interview at the embassy is required."}
                      {rule.stats?.onlineApply && " Online applications are accepted through the official portal."}
                    </p>
                    <p>
                      Applicants with clean 6-month bank histories, confirmed employment or business ties, and detailed
                      cover letters consistently achieve far higher approval rates. Our expert team has helped thousands
                      of {natName} nationals secure {destName} visas across all categories.
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap gap-3">
                    <Link href={`/visa/dubai-residents/${destName.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-xl text-xs font-black hover:bg-red-600 transition-colors">
                      <BookOpen size={13} /> Full {destName} Visa Guide
                    </Link>
                    <Link href="/travel-resources/visa-checklist-generator"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 rounded-xl text-xs font-black hover:bg-slate-50 transition-colors">
                      <FileText size={13} /> Generate Checklist
                    </Link>
                    <Link href="/contact/travel-agency-dubai"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 rounded-xl text-xs font-black hover:bg-slate-50 transition-colors">
                      <Phone size={13} /> Talk to Expert
                    </Link>
                  </div>
                </div>
              </>
            )}

            {/* ────────── REASONS TAB ────────── */}
            {activeTab === "reasons" && (
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-3">
                  <XCircle size={22} className="text-red-500" />
                  Why {natName} Applicants Get Refused for {destName} {rule.label} Visa
                </h2>
                <p className="text-sm text-slate-400 mb-8">
                  All {rule.topReasons?.length || 0} documented rejection reasons, ranked by frequency.
                  Data from official {destName} immigration authority statistics.
                </p>

                {(rule.topReasons?.length > 0) ? (
                  <div className="space-y-5">
                    {rule.topReasons.map(({ pct, reason, detail }, i) => (
                      <div key={i} className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-red-200 transition-colors">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-red-500 text-white rounded-xl flex items-center justify-center font-black flex-shrink-0">
                              {i + 1}
                            </div>
                            <h3 className="text-base font-black text-slate-800">{reason}</h3>
                          </div>
                          <div className="text-2xl font-black text-red-500 flex-shrink-0">{pct}%</div>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full mb-4">
                          <div className="h-full bg-red-500 rounded-full" style={{ width: `${pct}%` }} />
                        </div>
                        <p className="text-sm text-slate-600">{detail}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-400 text-sm">No specific rejection data available for this visa type.</p>
                )}

                {/* By Nationality Breakdown */}
                {rule.byNationality && (
                  <div className="mt-10">
                    <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center gap-2">
                      <Globe size={18} className="text-blue-500" />
                      {destName} Refusal Rate by Nationality (Comparison)
                    </h3>
                    <p className="text-sm text-slate-400 mb-5">
                      How {natName} compares with other nationalities applying for {destName} visas.
                    </p>
                    <div className="space-y-3">
                      {Object.entries(rule.byNationality).map(([nat, pct]) => (
                        <BarRow
                          key={nat}
                          label={nat}
                          pct={pct}
                          highlight={nat === natName || nat === "Average"}
                          color={nat === natName ? "red" : nat === "Average" ? "slate" : "red"}
                        />
                      ))}
                    </div>
                    <p className="text-[10px] text-slate-400 mt-4">
                      Source: {destName} immigration authority annual transparency report.
                    </p>
                  </div>
                )}

                {/* Rejection by month (if available) */}
                {trendValues && trendMonths && (
                  <div className="mt-10 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center gap-2">
                      <CalendarDays size={18} className="text-red-500" />
                      Best & Worst Months to Apply
                    </h3>
                    <p className="text-sm text-slate-400 mb-4">
                      Rejection rates vary by month — applying at the right time can improve your odds.
                    </p>
                    <MiniTrendChart months={trendMonths} values={trendValues} />
                    <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-200">
                      <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                        <div className="text-xs text-green-600 font-black uppercase mb-1">Best Month</div>
                        <div className="text-lg font-black text-green-700">
                          {trendMonths[trendValues.indexOf(Math.min(...trendValues))]} — {Math.min(...trendValues)}%
                        </div>
                        <div className="text-xs text-green-600">Lowest refusal rate</div>
                      </div>
                      <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                        <div className="text-xs text-red-600 font-black uppercase mb-1">Worst Month</div>
                        <div className="text-lg font-black text-red-700">
                          {trendMonths[trendValues.indexOf(Math.max(...trendValues))]} — {Math.max(...trendValues)}%
                        </div>
                        <div className="text-xs text-red-600">Highest refusal rate</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ────────── FIXES TAB ────────── */}
            {activeTab === "fixes" && (
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-3">
                  <Zap size={22} className="text-amber-500" />
                  How to Avoid {destName} Visa Rejection — {natName} Applicants
                </h2>
                <p className="text-sm text-slate-400 mb-8">
                  Proven fixes that have helped {natName} applicants improve approval rates for {destName} {rule.label} visas.
                </p>
                {(rule.fixes?.length > 0) ? (
                  <div className="space-y-5">
                    {rule.fixes.map(({ title, icon, impact, desc }, i) => (
                      <div key={i} className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-amber-200 transition-colors">
                        <div className="flex items-start gap-4">
                          <span className="text-3xl flex-shrink-0">{icon}</span>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3 flex-wrap">
                              <h3 className="text-base font-black text-slate-800">{title}</h3>
                              <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-lg border ${IMPACT_CONFIG[impact]?.color || IMPACT_CONFIG["Medium"]?.color || "text-slate-500 bg-slate-50 border-slate-200"}`}>
                                {impact} Impact
                              </span>
                            </div>
                            <p className="text-sm text-slate-600">{desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-400 text-sm">No specific fixes available for this visa type.</p>
                )}

                {/* CTA after fixes */}
                <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
                  <h3 className="font-black text-amber-900 mb-2">Need Help Preparing Your Application?</h3>
                  <p className="text-sm text-amber-800 mb-4">
                    Our Dubai visa consultants specialise in {natName} applications for {destName} visas.
                    98% approval rate across 1,00,000+ processed applications.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://wa.me/8801701699743" className="inline-flex items-center gap-2 px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-black text-sm transition-colors">
                      <MessageSquare size={15} /> WhatsApp Our Experts
                    </a>
                    <Link href="/travel-resources/visa-checklist-generator" className="inline-flex items-center gap-2 px-5 py-3 border border-amber-300 text-amber-800 rounded-xl font-black text-sm hover:bg-amber-100 transition-colors">
                      <FileText size={15} /> Free Document Checklist
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* ────────── DOCUMENTS TAB ────────── */}
            {activeTab === "documents" && (
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-3">
                  <FileText size={22} className="text-blue-500" />
                  {destName} {rule.label} Visa Document Checklist — {natName} Applicants
                </h2>
                <p className="text-sm text-slate-400 mb-8">
                  Complete document list verified against official {destName} embassy requirements in {new Date().getFullYear()}.
                  Missing even one document is a top cause of refusal.
                </p>
                {(rule.documents?.length > 0) ? (
                  <>
                    <div className="space-y-3">
                      {rule.documents.map((doc, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 size={14} className="text-white" />
                          </div>
                          <span className="text-sm font-semibold text-slate-700">{doc}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-5 bg-blue-50 border border-blue-100 rounded-2xl">
                      <p className="text-sm text-blue-800 font-semibold">
                        💡 Use our free{" "}
                        <Link href="/travel-resources/visa-checklist-generator" className="text-blue-600 underline font-black hover:text-blue-800">
                          visa checklist generator
                        </Link>{" "}
                        to get a personalised, embassy-verified document list for {natName} applicants applying to {destName}.
                      </p>
                    </div>
                  </>
                ) : (
                  <p className="text-slate-400 text-sm">No document checklist available for this visa type.</p>
                )}
              </div>
            )}

            {/* ────────── TIPS TAB ────────── */}
            {activeTab === "tips" && (
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-3">
                  <Lightbulb size={22} className="text-yellow-500" />
                  Expert Tips: Getting Your {destName} Visa Approved as a {natName} National
                </h2>
                <p className="text-sm text-slate-400 mb-8">
                  Insider advice from our visa consultants — based on thousands of {natName} applications to {destName}.
                </p>
                {(rule.tips?.length > 0) ? (
                  <div className="space-y-4">
                    {rule.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-4 p-5 bg-yellow-50 border border-yellow-100 rounded-2xl">
                        <div className="w-7 h-7 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-yellow-900 text-sm">
                          {i + 1}
                        </div>
                        <p className="text-sm font-semibold text-yellow-900 leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-400 text-sm">No expert tips available for this visa type.</p>
                )}

                {/* Appeal info if available */}
                {rule.stats?.appealAvailable && (
                  <div className="mt-8 p-6 bg-purple-50 border border-purple-100 rounded-2xl">
                    <h3 className="font-black text-purple-900 mb-2 flex items-center gap-2">
                      <Award size={16} /> Got Refused? You Can Appeal.
                    </h3>
                    <p className="text-sm text-purple-800 leading-relaxed">
                      {destName} offers an appeals process for refused applications. Our consultants can help
                      you build a stronger reapplication or appeal within the required timeframe.
                      Contact our Dubai office for a free assessment.
                    </p>
                    <a href="https://wa.me/8801701699743" className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-purple-500 text-white rounded-xl text-sm font-black hover:bg-purple-600 transition-colors">
                      <MessageSquare size={14} /> Discuss Your Refusal
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* ────────── COMPARE TAB ────────── */}
            {activeTab === "compare" && (
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-3">
                  <Eye size={22} className="text-blue-500" />
                  Compare {destName} With Other Destinations — {natName} Applicants
                </h2>
                <p className="text-sm text-slate-400 mb-8">
                  How does {destName} rank compared to other popular visa destinations for {natName} passport holders?
                </p>

                {/* All visa types for this destination */}
                <div className="mb-10">
                  <h3 className="text-lg font-black text-slate-900 mb-4">
                    All {destName} Visa Types — Rejection Rates
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(rejData.types || {}).map(([k, v]) => {
                      const cfg = RISK_CONFIG[v.risk] || RISK_CONFIG["Medium"];
                      return (
                        <div key={k} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <div className="w-32 text-sm font-black text-slate-700">{VISA_TYPE_LABELS[k]?.icon} {VISA_TYPE_LABELS[k]?.label}</div>
                          <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full rounded-full bg-red-500" style={{ width: `${v.rate}%` }} />
                          </div>
                          <div className="font-black text-red-600 w-10 text-right">{v.rate}%</div>
                          <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-lg border ${cfg.color} ${cfg.bg} ${cfg.border}`}>{v.risk}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Related destinations comparison */}
                {(rejData.relatedDestinations?.length > 0) && (
                  <div>
                    <h3 className="text-lg font-black text-slate-900 mb-4">
                      {natName} Rejection Rates: {destName} vs Similar Destinations
                    </h3>
                    <DestCompareTable destinations={rejData.relatedDestinations} natName={natName} />
                  </div>
                )}

                {/* Search other destinations */}
                <div className="mt-10">
                  <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                    <Search size={18} /> Search Another Destination
                  </h3>
                  <input
                    type="text"
                    placeholder="Type a country name…"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full px-5 py-3 rounded-2xl border-2 border-slate-200 text-sm font-semibold outline-none focus:border-red-300 transition-colors mb-4"
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {filteredDests.slice(0, 12).map(({ slug, name, flag }) => (
                      <Link
                        key={slug}
                        href={`/visa-rejection/${natSlug}-visa-rejection-rate-for-${slug}-tourist`}
                        className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-100 rounded-xl hover:bg-red-50 hover:border-red-200 transition-colors text-sm font-bold text-slate-700 hover:text-red-700"
                      >
                        <span className="text-lg">{flag}</span> {name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── FAQ — always shown below all tabs ── */}
            {(rule.faqs?.length > 0) && (
              <div className="mt-4" itemScope itemType="https://schema.org/FAQPage">
                <h2 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-3">
                  <AlertCircle size={22} className="text-blue-500" />
                  Frequently Asked Questions — {natName} to {destName} Visa
                </h2>
                <p className="text-sm text-slate-400 mb-6">
                  Common questions about {natName} visa rejection rates and how to improve approval chances for {destName}.
                </p>
                <div className="space-y-3">
                  {rule.faqs.map((faq, i) => (
                    <FAQItem key={i} q={faq.q} a={faq.a} />
                  ))}
                </div>
                <p className="text-[10px] text-slate-300 mt-4">
                  FAQs based on official {destName} immigration authority guidelines and published processing statistics.
                  Last reviewed {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}.
                </p>
              </div>
            )}

            {/* ── INTERNAL SEO LINK MESH ── */}
            <div className="mt-6 pt-8 border-t border-slate-100">
              <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
                <BookOpen size={14} /> Related Visa Rejection Data — {natName}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {ALL_DESTINATIONS.filter(d => d.slug !== destName.toLowerCase().replace(/\s+/g, "-")).slice(0, 10).map(({ slug, name, flag }) => (
                  <Link
                    key={slug}
                    href={`/visa-rejection/${natSlug}-visa-rejection-rate-for-${slug}-tourist`}
                    className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white hover:border-red-200 hover:shadow-sm transition-all text-sm font-bold text-slate-600 hover:text-red-600"
                  >
                    <span className="text-base">{flag}</span>
                    {natName} → {name} rejection rate
                    <ChevronRight size={12} className="ml-auto text-slate-300" />
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* ── SIDEBAR ── */}
          <div className="space-y-6">

            {/* Embassy Link */}
            {rejData.embassyUrl && (
              <a href={rejData.embassyUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 bg-white border-2 border-slate-100 rounded-2xl hover:border-red-300 transition-colors">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                  <Globe size={18} className="text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="font-black text-sm text-slate-800">Official Embassy Portal</div>
                  <div className="text-xs text-slate-400">Apply & check official requirements</div>
                </div>
                <ExternalLink size={16} className="text-slate-300" />
              </a>
            )}

            {/* Risk Summary */}
            <div className={`rounded-2xl p-6 border-2 ${riskCfg.bg} ${riskCfg.border}`}>
              <h4 className={`font-black text-sm mb-4 ${riskCfg.color}`}>{rule.risk} Rejection Risk — {natName}</h4>
              <div className={`text-5xl font-black ${riskCfg.color} mb-1`}>{rule.rate}%</div>
              <p className={`text-xs font-semibold ${riskCfg.color} opacity-80 mb-3`}>of {natName} applicants refused</p>
              <div className="text-lg font-black text-green-600">{approvalRate}% approved</div>
              <p className="text-xs text-green-600">average approval rate</p>
            </div>

            {/* Processing Time */}
            <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={16} className="text-blue-500" />
                <h4 className="font-black text-sm text-blue-800">{destName} Processing Time</h4>
              </div>
              <div className="text-2xl font-black text-blue-700 mb-1">{rule.stats?.approvalTime || "Varies"}</div>
              <p className="text-xs text-blue-600 font-semibold mb-3">{rule.label}</p>
              <div className="space-y-1.5 text-xs text-blue-600">
                {rule.stats?.onlineApply     && <div className="flex items-center gap-2"><CheckCircle2 size={12} /> Online application available</div>}
                {rule.stats?.biometricsRequired && <div className="flex items-center gap-2"><Info size={12} /> Biometrics required</div>}
                {rule.stats?.interviewRequired  && <div className="flex items-center gap-2"><Info size={12} /> Interview required</div>}
                {rule.stats?.appealAvailable    && <div className="flex items-center gap-2"><CheckCircle2 size={12} /> Appeals available</div>}
              </div>
            </div>

            {/* Quick Facts */}
            {(rejData.quickFacts?.length > 0) && (
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6">
                <h4 className="font-black text-sm text-slate-800 uppercase mb-4 flex items-center gap-2">
                  <BarChart2 size={14} className="text-slate-400" /> {destName} — Key Stats
                </h4>
                <div className="space-y-3">
                  {rejData.quickFacts.map(({ label, value, source }) => (
                    <div key={label} className="flex items-start justify-between gap-2">
                      <span className="text-xs text-slate-500 leading-tight">{label}</span>
                      <div className="text-right flex-shrink-0">
                        <div className="text-xs font-black text-slate-900">{value}</div>
                        {source && <div className="text-[9px] text-slate-400">{source}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-slate-900 rounded-[2rem] p-7 text-white text-center">
              <div className="text-3xl mb-3" aria-hidden="true">🧑‍💼</div>
              <h4 className="font-black text-lg mb-2">Need Expert Help?</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-5">
                Our visa consultants specialise in {natName} applications for {destName}.
                98% approval rate · Dubai office · 24-hr review.
              </p>
              <a href="https://wa.me/8801701699743"
                className="block w-full py-4 bg-red-500 hover:bg-red-400 text-white font-black rounded-xl text-sm transition-colors mb-3">
                Talk to Expert →
              </a>
              <Link href="/travel-resources/visa-checklist-generator"
                className="block w-full py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs transition-colors">
                Free Document Checklist
              </Link>
            </div>

            {/* Other Visa Types */}
            {related.length > 0 && (
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6">
                <h4 className="font-black text-sm text-slate-800 uppercase mb-4">Other {destName} Visa Types</h4>
                <div className="space-y-3">
                  {related.map(([k, v]) => {
                    const cfg = RISK_CONFIG[v.risk] || RISK_CONFIG["Medium"];
                    return (
                      <button key={k}
                        onClick={() => { setActiveType(k); setActiveTab("overview"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-red-50 border border-transparent hover:border-red-100 text-left transition-colors">
                        <div>
                          <div className="text-xs font-black text-slate-800">
                            {VISA_TYPE_LABELS[k]?.icon} {VISA_TYPE_LABELS[k]?.label}
                          </div>
                          <div className="text-[10px] font-bold mt-0.5 text-red-600">
                            {v.rate}% refusal · {v.risk} risk
                          </div>
                        </div>
                        <ChevronRight size={14} className="text-slate-400" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Visa guide links for this destination */}
            <div className="bg-white border-2 border-slate-100 rounded-2xl p-6">
              <h4 className="font-black text-sm text-slate-800 uppercase mb-4 flex items-center gap-2">
                <MapPin size={14} /> {destName} Visa Resources
              </h4>
              <div className="space-y-2">
                {[
                  { label: `${destName} tourist visa guide`,     href: `/visa/dubai-residents/${destName.toLowerCase().replace(/\s+/g, "-")}` },
                  { label: "Free visa checklist",                href: "/travel-resources/visa-checklist-generator" },
                  { label: "VFS processing times",               href: "/travel-resources/visa-processing-time-tracker" },
                  { label: "All rejection rates",                href: "/visa-rejection" },
                  { label: "Contact Dubai office",               href: "/contact/travel-agency-dubai" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href}
                    className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-red-500 transition-colors py-1">
                    <ChevronRight size={12} className="text-slate-300" /> {label}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── RELATED DESTINATIONS GRID ── */}
      {(rejData.relatedDestinations?.length > 0) && (
        <section className="bg-slate-50 border-t border-slate-100 py-14 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-black text-slate-900 mb-2">
              Compare {destName} With Other Destinations — {natName}
            </h2>
            <p className="text-slate-500 text-sm mb-8">
              Rejection rates for {natName} passport holders across popular destinations. Click any country to see full data.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {rejData.relatedDestinations.map(({ slug, name, flag, rate, risk }) => {
                const cfg = RISK_CONFIG[risk] || RISK_CONFIG["Medium"];
                return (
                  <Link key={slug} href={`/visa-rejection/${slug}`}
                    className="group bg-white rounded-2xl p-5 border-2 border-slate-100 hover:border-red-200 hover:shadow-md transition-all text-center">
                    <div className="text-4xl mb-3">{flag}</div>
                    <div className="text-xs font-black text-slate-800 mb-2 group-hover:text-red-600 transition-colors leading-tight">{name}</div>
                    <div className={`text-lg font-black ${cfg.color}`}>{rate}%</div>
                    <div className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-lg border mt-1 inline-block ${cfg.color} ${cfg.bg} ${cfg.border}`}>
                      {risk}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── ALL VISA TYPES GRID ── */}
      <section className="bg-white border-t border-slate-100 py-14 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            All {destName} Visa Types for {natName} — {new Date().getFullYear()} Rejection Data
          </h2>
          <p className="text-slate-500 text-sm mb-8">
            Switch between visa categories to see specific refusal rates, documents, and expert tips.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(rejData.types || {}).map(([k, v]) => {
              const cfg = RISK_CONFIG[v.risk] || RISK_CONFIG["Medium"];
              const lbl = VISA_TYPE_LABELS[k];
              const isActive = k === activeType;
              return (
                <button key={k}
                  onClick={() => { setActiveType(k); setActiveTab("overview"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className={`rounded-2xl p-5 border-2 text-left transition-all ${
                    isActive ? "bg-slate-900 border-slate-900 text-white shadow-xl" : "bg-white border-slate-100 hover:border-red-200 hover:shadow-sm"
                  }`}>
                  <div className="text-2xl mb-2">{lbl?.icon}</div>
                  <div className={`text-sm font-black mb-1 ${isActive ? "text-white" : "text-slate-800"}`}>{lbl?.label}</div>
                  <div className={`text-xs font-semibold mb-3 ${isActive ? "text-slate-400" : "text-slate-500"}`}>{v.label}</div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-lg font-black ${isActive ? "text-red-400" : cfg.color}`}>{v.rate}%</span>
                    <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-lg border ${
                      isActive ? "text-slate-400 bg-white/10 border-white/20" : `${cfg.color} ${cfg.bg} ${cfg.border}`
                    }`}>{v.risk}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── NATIONALITY EXPLORER (internal linking) ── */}
      <section className="bg-slate-50 border-t border-slate-100 py-14 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            {destName} Visa Rejection Rates by Nationality
          </h2>
          <p className="text-slate-500 text-sm mb-8">
            Compare refusal data for different nationalities applying to {destName} — select your passport country.
          </p>
          <div className="flex flex-wrap gap-3">
            {NATIONALITY_LINKS.map(({ slug, name, flag }) => (
              <Link key={slug}
                href={`/visa-rejection/${slug}-visa-rejection-rate-for-${destName.toLowerCase().replace(/\s+/g, "-")}-tourist`}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 text-sm font-bold transition-all ${
                  slug === natSlug
                    ? "bg-slate-900 border-slate-900 text-white"
                    : "bg-white border-slate-200 text-slate-700 hover:border-red-300 hover:bg-red-50 hover:text-red-700"
                }`}>
                <span>{flag}</span> {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO DESTINATION EXPLORER ── */}
      <section className="bg-white border-t border-slate-100 py-14 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            {natName} Visa Rejection Rates — All Destinations
          </h2>
          <p className="text-slate-500 text-sm mb-2">
            Find refusal data for any country {natName} passport holders apply to visit.
          </p>
          <div className="flex items-center gap-3 mb-6">
            <Link href="/visa-rejection" className="text-xs font-black text-red-500 hover:text-red-700 flex items-center gap-1">
              <Search size={12} /> Use our full rejection checker →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {ALL_DESTINATIONS.map(({ slug, name, flag }) => (
              <Link key={slug}
                href={`/visa-rejection/${natSlug}-visa-rejection-rate-for-${slug}-tourist`}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 text-center transition-all ${
                  slug === destName.toLowerCase().replace(/\s+/g, "-")
                    ? "bg-red-50 border-red-300 shadow-md"
                    : "bg-slate-50 border-slate-100 hover:bg-white hover:border-red-200 hover:shadow-sm"
                }`}>
                <span className="text-3xl">{flag}</span>
                <span className="text-xs font-black text-slate-700 leading-tight">{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO ARTICLE + STRUCTURED PROSE ── */}
      <section className="bg-slate-50 border-t border-slate-100 py-14 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {natName} to {destName}: Complete Visa Rejection Guide {new Date().getFullYear()}
          </h2>
          <div className="prose prose-slate max-w-none text-sm text-slate-600 space-y-4 leading-relaxed">
            <p>
              {natName} passport holders face a <strong>{rule.rate}% refusal rate</strong> for {destName} {rule.label} visas,
              based on official immigration statistics published by {destName}&apos;s immigration authority.
              This covers applications processed through{" "}
              {rejData.processingHistory?.at(-1)?.year || new Date().getFullYear()}.
            </p>
            <p>
              The most documented reason for refusal is{" "}
              <strong>{rule.topReasons?.[0]?.reason}</strong>, representing roughly{" "}
              <strong>{rule.topReasons?.[0]?.pct}%</strong> of all refused applications.
              This is followed by <strong>{rule.topReasons?.[1]?.reason}</strong> ({rule.topReasons?.[1]?.pct}%)
              and <strong>{rule.topReasons?.[2]?.reason}</strong> ({rule.topReasons?.[2]?.pct}%).
              Together, these three causes account for the majority of {natName} refusals.
            </p>
            <p>
              Average processing time for the {rule.label} is <strong>{rule.stats?.approvalTime}</strong>.
              {rule.stats?.biometricsRequired && " Biometric enrollment is required at an authorised centre."}
              {rule.stats?.interviewRequired && " An in-person interview at the consulate or embassy is mandatory."}
              {rule.stats?.onlineApply && " Applications can be submitted online through the official portal."}
            </p>
            <p>
              Applicants who consistently get approved include all required documents, maintain a clean 3–6 month
              bank history before applying, provide a well-structured cover letter, and demonstrate strong ties
              to their home country or current country of residence. Dubai and UAE-based {natName} applicants
              have an added advantage due to their stable UAE employment and residence status.
            </p>
            <p>
              Eammu Holidays has processed over 1,00,000 visa applications for {natName} nationals — including
              significant volumes to {destName}. Our 98% approval rate comes from knowing exactly what{" "}
              {destName} immigration officers look for, and preparing every document to match.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/visa-rejection" className="text-xs font-black text-red-500 hover:text-red-700 flex items-center gap-1 underline">
              <ChevronRight size={12} /> Check another country
            </Link>
            <Link href={`/visa-rejection/${natSlug}-visa-rejection-rate-for-united-states-tourist`} className="text-xs font-black text-slate-500 hover:text-red-500 flex items-center gap-1 underline">
              <ChevronRight size={12} /> {natName} → USA refusal data
            </Link>
            <Link href={`/visa-rejection/${natSlug}-visa-rejection-rate-for-canada-tourist`} className="text-xs font-black text-slate-500 hover:text-red-500 flex items-center gap-1 underline">
              <ChevronRight size={12} /> {natName} → Canada refusal data
            </Link>
            <Link href={`/visa-rejection/${natSlug}-visa-rejection-rate-for-united-kingdom-tourist`} className="text-xs font-black text-slate-500 hover:text-red-500 flex items-center gap-1 underline">
              <ChevronRight size={12} /> {natName} → UK refusal data
            </Link>
            <Link href={`/visa-rejection/${natSlug}-visa-rejection-rate-for-germany-tourist`} className="text-xs font-black text-slate-500 hover:text-red-500 flex items-center gap-1 underline">
              <ChevronRight size={12} /> {natName} → Germany/Schengen refusal data
            </Link>
          </div>

          {/* Mega internal link tags */}
          <div className="mt-10 pt-8 border-t border-slate-200">
            <p className="text-xs text-slate-400 font-black uppercase tracking-widest mb-4">
              Related Visa Resources — Eammu Holidays
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "All visa rejection rates",              href: "/visa-rejection" },
                { label: `${natName} visa guide`,                 href: `/visa/dubai-residents/${natSlug}` },
                { label: `${destName} visa guide`,                href: `/visa/dubai-residents/${destName.toLowerCase().replace(/\s+/g, "-")}` },
                { label: "Free visa checklist generator",         href: "/travel-resources/visa-checklist-generator" },
                { label: "VFS UAE processing time tracker",       href: "/travel-resources/visa-processing-time-tracker" },
                { label: "Schengen visa 2026",                    href: "/schengen-visa" },
                { label: "USA B1/B2 visa from Dubai",             href: "/visa/dubai-residents/united-states" },
                { label: "UK Standard Visitor visa",              href: "/visa/dubai-residents/united-kingdom" },
                { label: "Canada TRV from Dubai",                 href: "/visa/dubai-residents/canada" },
                { label: "Japan tourist visa Dubai",              href: "/visa/dubai-residents/japan" },
                { label: "Australia Subclass 600",                href: "/visa/dubai-residents/australia" },
                { label: "E-visa destinations UAE",               href: "/visa/e-visa" },
                { label: "USA visa interview prep Dubai",         href: "/target-usa-visa-interview-preparation" },
                { label: "Student visa from Dubai",               href: "/our-services/visa-services/student-visa-from-bangladesh" },
                { label: "Dubai visa consultancy office",         href: "/contact/travel-agency-dubai" },
                { label: "All visa services",                     href: "/our-services/visa-services" },
              ].map(({ label, href }) => (
                <Link key={href} href={href}
                  className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-full hover:bg-red-500 hover:text-white hover:border-red-500 transition-all">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-red-500 py-16 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-black text-white mb-3">
            Check Rejection Rates for Any Country
          </h2>
          <p className="text-red-100 font-medium mb-3">
            195+ nationalities · 200+ destinations · All visa types
          </p>
          <p className="text-red-200 text-sm mb-8 max-w-xl mx-auto">
            Eammu Holidays — Dubai&apos;s most trusted visa consultancy. 98% approval rate.
            Expert help for {natName} nationals applying from UAE.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/visa-rejection"
              className="inline-flex items-center gap-3 bg-white text-red-600 px-10 py-5 rounded-2xl font-black hover:bg-red-50 transition-colors shadow-lg">
              <ShieldCheck size={20} /> Visa Rejection Checker
            </Link>
            <Link href="/contact/travel-agency-dubai"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-black transition-colors">
              <Phone size={20} /> Talk to Dubai Expert
            </Link>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ─── */}
      <div className="bg-slate-50 border-b border-slate-100 px-6 py-3">
        <div className="container mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-slate-400 font-semibold flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <Link href="/" className="hover:text-red-500" itemProp="item"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <ChevronRight size={12} />
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <Link href="/visa-rejection" className="hover:text-red-500" itemProp="item"><span itemProp="name">Visa Rejection Checker</span></Link>
                <meta itemProp="position" content="2" />
              </li>

              <ChevronRight size={12} />
              <li className="text-slate-600" itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <span itemProp="name">{destName} {VISA_TYPE_LABELS[activeType]?.label}</span>
                <meta itemProp="position" content="4" />
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}