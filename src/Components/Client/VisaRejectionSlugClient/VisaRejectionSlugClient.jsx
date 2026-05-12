"use client";

/**
 * ✅ CLIENT COMPONENT
 * File: Components/Client/VisaRejectionSlugClient/VisaRejectionSlugClient.jsx
 *
 * Receives pre-fetched data from the Server Component.
 * Handles all interactive state (tab switching, visa type switching).
 */

import { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle, ChevronRight, ArrowLeft, ShieldCheck, XCircle,
  CheckCircle2, TrendingUp, TrendingDown, FileText, Globe,
  ExternalLink, Zap, BarChart2, Lightbulb, ThumbsUp, Minus,
} from "lucide-react";
import { VISA_TYPE_LABELS, RISK_CONFIG, IMPACT_CONFIG } from "@/app/lib/rejectionData";

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────
const TABS = [
  { id: "overview",   label: "Overview",      icon: BarChart2     },
  { id: "reasons",    label: "Why Rejected",  icon: XCircle       },
  { id: "fixes",      label: "How to Fix",    icon: Zap           },
  { id: "documents",  label: "Documents",     icon: FileText      },
  { id: "tips",       label: "Expert Tips",   icon: Lightbulb     },
];

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
  const [activeType, setActiveType] = useState(initialVisaType || "tourist");
  const [activeTab,  setActiveTab]  = useState("overview");

  const rule    = rejData.types[activeType] || initialRule;
  const riskCfg = RISK_CONFIG[rule.risk]   || RISK_CONFIG["Medium"];
  const related = Object.entries(rejData.types).filter(([k]) => k !== activeType);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── BREADCRUMB ────────────────────────────── */}
      <div className="bg-slate-50 border-b border-slate-100 px-6 py-3">
        <div className="container mx-auto max-w-6xl flex items-center gap-2 text-xs text-slate-400 font-semibold">
          <Link href="/"               className="hover:text-red-500">Home</Link>
          <ChevronRight size={12} />
          <Link href="/visa-rejection" className="hover:text-red-500">Visa Rejection</Link>
          <ChevronRight size={12} />
          <span className="text-slate-600">{natName} → {destName}</span>
        </div>
      </div>

      {/* ── HERO ──────────────────────────────────── */}
      <section className="relative bg-white pt-14 pb-10 px-6 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 text-[220px] opacity-[0.035] select-none pointer-events-none leading-none">
          {rejData.flag}
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">

          <Link href="/visa-rejection" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-red-500 mb-8">
            <ArrowLeft size={16} /> Back to Checker
          </Link>

          {/* Visa Type Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {Object.entries(rejData.types).map(([k]) => (
              <button
                key={k}
                onClick={() => setActiveType(k)}
                className={`px-4 py-2 rounded-xl border-2 text-xs font-black uppercase transition-all ${
                  activeType === k
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                }`}
              >
                {VISA_TYPE_LABELS[k]?.icon} {VISA_TYPE_LABELS[k]?.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left — Title */}
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
                {natName} Visa<br />Rejection Risk<br />
                <span className="text-transparent" style={{ WebkitTextStroke: "2px #ef4444" }}>
                  for {destName}
                </span>
              </h1>
              <p className="text-slate-500 font-medium mb-6 text-sm">
                Real refusal data for <strong>{natName}</strong> passport holders applying for{" "}
                <strong>{rule.label}</strong>.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className={`px-4 py-2 rounded-xl border text-xs font-black ${VISA_TYPE_LABELS[activeType]?.color}`}>
                  {VISA_TYPE_LABELS[activeType]?.icon} {VISA_TYPE_LABELS[activeType]?.label}
                </span>
                <span className={`px-4 py-2 rounded-xl border text-xs font-black ${riskCfg.color} ${riskCfg.bg} ${riskCfg.border}`}>
                  {rule.risk} Risk
                </span>
              </div>
            </div>

            {/* Right — Rate Card */}
            <div className="bg-slate-900 rounded-[2rem] p-8 text-white">
              <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                Rejection Rate — {natName}
              </div>
              <div className="flex items-end gap-3 mb-1">
                <span className="text-7xl font-black text-red-400">{rule.rate}%</span>
              </div>
              <div className="text-sm text-slate-400 font-semibold mb-6">{rule.label}</div>

              {/* Trend */}
              <div className="flex items-center gap-2 mb-6">
                {rule.trend === "up"     && <TrendingUp   size={14} className="text-red-400"   />}
                {rule.trend === "down"   && <TrendingDown size={14} className="text-green-400" />}
                {rule.trend === "stable" && <Minus        size={14} className="text-slate-400" />}
                <span className="text-xs text-slate-500">{rule.trendNote}</span>
              </div>

              {/* Progress Bar */}
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-red-500 transition-all duration-500"
                  style={{ width: `${rule.rate}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TAB NAV ───────────────────────────────── */}
      <div className="sticky top-0 z-30 bg-white border-b border-slate-100 px-6">
        <div className="container mx-auto max-w-6xl flex gap-1 overflow-x-auto py-3">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase whitespace-nowrap flex-shrink-0 transition-all ${
                activeTab === id
                  ? "bg-slate-900 text-white"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              <Icon size={13} /> {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── CONTENT ───────────────────────────────── */}
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Main */}
          <div className="lg:col-span-2 space-y-10">

            {/* OVERVIEW */}
            {activeTab === "overview" && (
              <>
                {rule.successStories && (
                  <div className={`flex items-start gap-4 p-6 rounded-2xl border-2 ${riskCfg.bg} ${riskCfg.border}`}>
                    <ThumbsUp size={20} className={riskCfg.color} />
                    <p className={`text-sm font-semibold ${riskCfg.color}`}>{rule.successStories}</p>
                  </div>
                )}

                {/* Stats Grid */}
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <BarChart2 size={22} className="text-red-500" /> At a Glance
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { label: "Rejection Rate",  value: `${rule.rate}%`,                                   icon: "📊", sub: `${rule.risk} Risk`                                         },
                      { label: "Processing Time", value: rule.stats?.approvalTime?.split(" ")[0] || "—",    icon: "⏱️", sub: rule.stats?.approvalTime || ""                               },
                      { label: "Biometrics",      value: rule.stats?.biometricsRequired ? "Yes" : "No",     icon: "👆", sub: rule.stats?.biometricsRequired ? "Required" : "Not required" },
                      { label: "Interview",       value: rule.stats?.interviewRequired  ? "Yes" : "No",     icon: "🗣️", sub: rule.stats?.interviewRequired  ? "Required" : "Not required" },
                      { label: "Online Apply",    value: rule.stats?.onlineApply        ? "Yes" : "No",     icon: "💻", sub: rule.stats?.onlineApply        ? "Available" : "In-person"  },
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

                {/* Top Reasons Preview */}
                {(rule.topReasons?.length > 0) && (
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                      <AlertTriangle size={22} className="text-red-500" /> Top Rejection Reasons
                    </h2>
                    <div className="space-y-4">
                      {rule.topReasons.slice(0, 3).map(({ pct, reason, detail }, i) => (
                        <div key={i} className="p-5 bg-red-50 border border-red-100 rounded-2xl">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-black text-red-800">{reason}</span>
                            <span className="text-sm font-black text-red-500">{pct}%</span>
                          </div>
                          <div className="h-2 bg-red-100 rounded-full mb-3">
                            <div className="h-full bg-red-500 rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                          <p className="text-xs text-red-700">{detail}</p>
                        </div>
                      ))}
                    </div>
                    {rule.topReasons.length > 3 && (
                      <button
                        onClick={() => setActiveTab("reasons")}
                        className="mt-4 text-sm font-black text-red-500 hover:text-red-700 flex items-center gap-2"
                      >
                        See all {rule.topReasons.length} reasons <ChevronRight size={16} />
                      </button>
                    )}
                  </div>
                )}
              </>
            )}

            {/* REASONS */}
            {activeTab === "reasons" && (
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <XCircle size={22} className="text-red-500" /> Why {natName} Applicants Get Refused
                </h2>
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
              </div>
            )}

            {/* FIXES */}
            {activeTab === "fixes" && (
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <Zap size={22} className="text-amber-500" /> Proven Fixes to Get Approved
                </h2>
                {(rule.fixes?.length > 0) ? (
                  <div className="space-y-5">
                    {rule.fixes.map(({ title, icon, impact, desc }, i) => (
                      <div key={i} className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-amber-200 transition-colors">
                        <div className="flex items-start gap-4">
                          <span className="text-3xl flex-shrink-0">{icon}</span>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3 flex-wrap">
                              <h3 className="text-base font-black text-slate-800">{title}</h3>
                              <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-lg border ${IMPACT_CONFIG[impact]?.color || IMPACT_CONFIG["Medium"].color}`}>
                                {impact}
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
              </div>
            )}

            {/* DOCUMENTS */}
            {activeTab === "documents" && (
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <FileText size={22} className="text-blue-500" /> Document Checklist
                </h2>
                {(rule.documents?.length > 0) ? (
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
                ) : (
                  <p className="text-slate-400 text-sm">No document checklist available for this visa type.</p>
                )}
              </div>
            )}

            {/* TIPS */}
            {activeTab === "tips" && (
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <Lightbulb size={22} className="text-yellow-500" /> Expert Tips
                </h2>
                {(rule.tips?.length > 0) ? (
                  <div className="space-y-4">
                    {rule.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-4 p-5 bg-yellow-50 border border-yellow-100 rounded-2xl">
                        <div className="w-7 h-7 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-yellow-900">
                          {i + 1}
                        </div>
                        <p className="text-sm font-semibold text-yellow-900">{tip}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-400 text-sm">No expert tips available for this visa type.</p>
                )}
              </div>
            )}

          </div>

          {/* ── SIDEBAR ──────────────────────────────── */}
          <div className="space-y-6">

            {/* Embassy Link */}
            {rejData.embassyUrl && (
              <a
                href={rejData.embassyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 bg-white border-2 border-slate-100 rounded-2xl hover:border-red-300 transition-colors"
              >
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                  <Globe size={18} className="text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="font-black text-sm text-slate-800">Official Portal</div>
                  <div className="text-xs text-slate-400">Apply & check requirements</div>
                </div>
                <ExternalLink size={16} className="text-slate-300" />
              </a>
            )}

            {/* Risk Summary */}
            <div className={`rounded-2xl p-6 border-2 ${riskCfg.bg} ${riskCfg.border}`}>
              <h4 className={`font-black text-sm mb-4 ${riskCfg.color}`}>{rule.risk} Rejection Risk</h4>
              <div className={`text-4xl font-black ${riskCfg.color} mb-1`}>{rule.rate}%</div>
              <p className={`text-xs font-semibold ${riskCfg.color} opacity-80`}>
                of {natName} applicants refused
              </p>
            </div>

            {/* CTA */}
            <div className="bg-slate-900 rounded-[2rem] p-7 text-white text-center">
              <div className="text-3xl mb-3">🧑‍💼</div>
              <h4 className="font-black text-lg mb-2">Need Help?</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-5">
                Our visa experts help {natName} applicants get approved for {destName} visas.
              </p>
              <a
                href="https://wa.me/8801631312524"
                className="block w-full py-4 bg-red-500 hover:bg-red-400 text-white font-black rounded-xl text-sm transition-colors"
              >
                Talk to Expert →
              </a>
            </div>

            {/* Other Visa Types */}
            {related.length > 0 && (
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6">
                <h4 className="font-black text-sm text-slate-800 uppercase mb-4">Other Visa Types</h4>
                <div className="space-y-3">
                  {related.map(([k, v]) => (
                    <button
                      key={k}
                      onClick={() => { setActiveType(k); setActiveTab("overview"); }}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-red-50 border border-transparent hover:border-red-100 text-left transition-colors"
                    >
                      <div>
                        <div className="text-xs font-black text-slate-800">
                          {VISA_TYPE_LABELS[k]?.icon} {VISA_TYPE_LABELS[k]?.label}
                        </div>
                        <div className="text-[10px] font-bold mt-0.5 text-red-600">
                          {v.rate}% · {v.risk}
                        </div>
                      </div>
                      <ChevronRight size={14} className="text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* ── BOTTOM CTA ───────────────────────────── */}
      <section className="bg-red-500 py-16 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-black text-white mb-4">Check Another Country</h2>
          <p className="text-red-100 font-medium mb-8">195+ countries · All visa types</p>
          <Link
            href="/visa-rejection"
            className="inline-flex items-center gap-3 bg-white text-red-600 px-10 py-5 rounded-2xl font-black hover:bg-red-50 transition-colors"
          >
            <ShieldCheck size={20} /> Back to Checker
          </Link>
        </div>
      </section>

    </div>
  );
}