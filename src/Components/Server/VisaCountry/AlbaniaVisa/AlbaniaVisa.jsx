"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle, Globe, ShieldCheck, FileText, 
  HelpCircle, Clock, Wallet, TrendingUp, PlayCircle,
  ArrowRight, ChevronDown, ChevronRight, AlertTriangle,
  MapPin, Star, Users, Award, Briefcase, Home, Plane,
  Phone, Mail, MessageCircle, ExternalLink, Info,
  CheckSquare, XCircle, Calendar, DollarSign
} from 'lucide-react';

/* ─────────────────────────────────────────────
   SEO SCHEMA HELPER  (rendered as JSON-LD)
───────────────────────────────────────────── */
const SchemaScript = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How long does Albania visa processing take?", "acceptedAnswer": { "@type": "Answer", "text": "Albania e-Visa (Type C) processing takes 15–20 working days. Express service may be available for €50 extra." } },
      { "@type": "Question", "name": "Can I get an Albania visa from Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. UAE residents can apply online via the official e-visa portal or through Eammu Holidays consultancy from Dubai." } },
      { "@type": "Question", "name": "What is the Albania work permit fee?", "acceptedAnswer": { "@type": "Answer", "text": "Temporary Work Visa starts at €100; Permanent Work Visa at €150. Consultancy fees apply separately." } }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};

/* ─────────────────────────────────────────────
   INTERNAL NAV LINKS DATA
───────────────────────────────────────────── */
const relatedPages = [
  { label: "Europe Visa Application", href: "/our-services/visa/europe-visa-application", icon: <Globe size={16}/> },
  { label: "Schengen Visa Guide", href: "/our-services/visa/schengen-visa", icon: <MapPin size={16}/> },
  { label: "UAE Residence Visa", href: "/our-services/visa/uae-residence-visa", icon: <Home size={16}/> },
  { label: "Work Permit Services", href: "/our-services/visa/work-permit", icon: <Briefcase size={16}/> },
  { label: "Digital Nomad Permits", href: "/our-services/visa/digital-nomad-visa", icon: <Globe size={16}/> },
  { label: "Flight Reservations", href: "/our-services/travel/flight-reservation", icon: <Plane size={16}/> },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const AlbaniaVisa = () => {
  const [activeTab, setActiveTab] = useState("tourist");

  return (
    <>
      <SchemaScript />
      <main className="bg-white min-h-screen font-sans text-slate-900">

        {/* ── BREADCRUMB (SEO) ── */}
        <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-slate-100 px-6 py-22">
          <ol className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-400 font-semibold flex-wrap">
            <li><Link href="/" className="hover:text-[#005a31] transition-colors">Home</Link></li>
            <li><ChevronRight size={12}/></li>
            <li><Link href="/our-services" className="hover:text-[#005a31] transition-colors">Our Services</Link></li>
            <li><ChevronRight size={12}/></li>
            <li><Link href="/visa" className="hover:text-[#005a31] transition-colors">Visa Services</Link></li>
            <li><ChevronRight size={12}/></li>
            <li className="text-[#005a31]">Albania Visa Application</li>
          </ol>
        </nav>

        {/* ── HERO ── */}
        <section className="relative pt-16 pb-20 px-6 lg:px-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl -z-10 opacity-50" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50 rounded-full blur-3xl -z-10 opacity-50" />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#005a31] px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-5 border border-emerald-200">
                <ShieldCheck size={13}/> Official Albania Visa Consultants · 2026
              </div>

              {/* H1 — primary keyword */}
              <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black text-[#005a31] mb-5 leading-[1.05] tracking-tight">
                Albania Visa<br/>
                <span className="text-[#ff6b00]">Application 2026</span>
              </h1>

              {/* SEO-rich intro paragraph */}
              <p className="text-lg text-slate-600 mb-5 max-w-xl leading-relaxed">
                Apply for your <strong>Albania E-Visa (Type C)</strong>, <strong>Work Permit (Type D)</strong>, or <strong>Digital Nomad Unique Permit</strong> with expert support from Eammu Holidays — the trusted immigration consultancy for UAE, Bangladesh, and Armenia residents. Fast processing, 97.8% success rate, 100% online.
              </p>

              {/* Key facts for SEO snippet */}
              <ul className="space-y-2 mb-8">
                {[
                  "Processing time: 15–20 working days (express available)",
                  "Valid Schengen/US/UK visa holders enter Albania visa-free",
                  "Work permits from €100 | Tourist e-visa from €30",
                  "Albania welcomed 10 million+ tourists in 2025",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle size={15} className="text-[#ff6b00] shrink-0"/>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/37494810585"
                   className="bg-[#005a31] hover:bg-[#ff6b00] text-white px-8 py-4 rounded-2xl font-black text-base shadow-xl transition-all flex items-center justify-center gap-3">
                  <MessageCircle size={20}/> Apply via WhatsApp
                </a>
                <a href="tel:+971507078334"
                   className="bg-white border-2 border-slate-200 hover:border-[#005a31] text-[#005a31] px-8 py-4 rounded-2xl font-black text-base transition-all flex items-center justify-center gap-3">
                  <Phone size={18}/> Call UAE Hotline
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200"
                  alt="Albania coastline — Albania Visa Application 2026"
                  className="w-full h-[320px] md:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#005a31]/60 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-black text-2xl">🇦🇱 Republic of Albania</p>
                    <p className="text-sm text-white/80 font-medium">Balkans · Europe · Open for Business</p>
                  </div>
                </div>
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-5 -left-5 bg-white p-5 rounded-3xl shadow-xl border border-slate-50 hidden md:block">
                <p className="text-[#005a31] font-black text-3xl">97.8%</p>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Approval Rate</p>
              </div>
              <div className="absolute -top-5 -right-5 bg-[#ff6b00] p-5 rounded-3xl shadow-xl hidden md:block">
                <p className="text-white font-black text-2xl">10M+</p>
                <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest">Tourists 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── METRICS ── */}
        <section className="py-10 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricBox icon={<Clock/>} label="Processing Time" value="15–20 Days" sub="Express available"/>
            <MetricBox icon={<Wallet/>} label="Work Visa From" value="€100" sub="Type D Permit"/>
            <MetricBox icon={<TrendingUp/>} label="Success Rate" value="97.8%" sub="All visa types"/>
            <MetricBox icon={<Globe/>} label="Application" value="100% Online" sub="Apply from anywhere"/>
          </div>
        </section>

        {/* ── INTERNAL LINK NAVIGATION (SEO) ── */}
        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Related Visa Services</p>
            <div className="flex flex-wrap gap-3">
              {relatedPages.map((p) => (
                <a key={p.href} href={p.href}
                   className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-[#005a31] hover:text-[#005a31] text-slate-600 px-4 py-2 rounded-xl text-sm font-bold transition-all">
                  {p.icon} {p.label} <ExternalLink size={11}/>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── VISA TYPES TAB SECTION ── */}
        <section className="py-20 px-6 bg-white" id="visa-types">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-[#005a31] uppercase tracking-tighter mb-3">
                Albania Visa Types 2026
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Albania issues three official visa categories under Law No. 79/2021 "On Foreigners." Choose the correct type before applying to avoid rejection.
              </p>
              <div className="h-1.5 w-20 bg-[#ff6b00] mx-auto rounded-full mt-4"/>
            </div>

            {/* Tab selector */}
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {[
                { key: "tourist", label: "Type C — Tourist / Short Stay" },
                { key: "work", label: "Type D — Work / Long Stay" },
                { key: "nomad", label: "Unique Permit — Digital Nomad" },
                { key: "transit", label: "Type A — Airport Transit" },
              ].map((t) => (
                <button key={t.key} onClick={() => setActiveTab(t.key)}
                  className={`px-5 py-3 rounded-xl font-black text-sm uppercase tracking-wide transition-all border-2 ${
                    activeTab === t.key
                      ? "bg-[#005a31] text-white border-[#005a31] shadow-lg"
                      : "bg-white text-slate-500 border-slate-200 hover:border-[#005a31]"
                  }`}>
                  {t.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "tourist" && (
              <VisaTypeCard
                badge="Type C E-Visa"
                title="Albania Short-Stay Tourist & Business Visa"
                color="#005a31"
                highlight="Most popular for UAE residents & Bangladeshi nationals"
                description="The Albania Type C E-Visa is issued electronically and allows a stay of up to 90 days within any 180-day period. It covers tourism, family visits, business meetings, medical treatment, and cultural events. Applications are submitted online — no embassy visit required."
                facts={[
                  { label: "Stay Allowed", value: "Up to 90 days in 180 days" },
                  { label: "Validity Window", value: "180 days from issue" },
                  { label: "Entries", value: "Single or Multiple" },
                  { label: "Processing", value: "15–20 working days" },
                  { label: "Fee", value: "From €30 (varies by nationality)" },
                  { label: "Application", value: "100% online at e-visa.al" },
                ]}
                docs={[
                  "Valid passport (6+ months validity beyond intended stay)",
                  "Biometric photo (47x36mm / 555×425px, 300DPI)",
                  "Confirmed round-trip flight reservation",
                  "Hotel booking or host address in Albania",
                  "Travel health insurance (minimum €30,000 coverage)",
                  "Bank statements — last 6 months (€50/day minimum funds)",
                  "Proof of employment or business license",
                  "Cover letter explaining purpose of visit",
                  "Residence permit copy (if applying outside home country)",
                ]}
                warnings={[
                  "E-Visa does NOT permit working in Albania",
                  "Application must be submitted from OUTSIDE Albania",
                  "Payment is non-refundable if rejected",
                  "12% rejection rate in 2025 — incorrect docs is #1 cause",
                ]}
              />
            )}

            {activeTab === "work" && (
              <VisaTypeCard
                badge="Type D Visa + Work Permit"
                title="Albania Work Visa & Long-Stay Permit"
                color="#1e40af"
                highlight="Required for any employment exceeding 90 days"
                description="The Albania Type D Work Visa is required for foreign nationals intending to work in Albania for more than 90 days. It is issued as a stamp visa or electronic format and entitles the holder to apply for a Residence Permit after entry. Work permits are valid for 1 year and can be renewed up to 3 years. Processing takes 15–30 working days."
                facts={[
                  { label: "Stay Allowed", value: "90 days initial + residency" },
                  { label: "Permit Duration", value: "1 year (renewable to 3 years)" },
                  { label: "Temporary Work Visa", value: "€100" },
                  { label: "Permanent Work Visa", value: "€150" },
                  { label: "Processing Time", value: "15–30 working days" },
                  { label: "Pathway to PR", value: "After 5 years of employment" },
                ]}
                docs={[
                  "Signed Type D visa application form",
                  "Valid passport (with 6+ months remaining validity)",
                  "Formal employment contract (attested)",
                  "Degree/Diploma — notarized and translated into Albanian",
                  "Health certificate confirming fitness to work",
                  "Company registration / National Registration Center extract",
                  "Police clearance certificate (apostilled + Albanian translation)",
                  "Biometric photos (official specifications)",
                  "Health insurance for the duration of stay",
                  "Proof of accommodation in Albania",
                ]}
                warnings={[
                  "Documents must be translated into Albanian by a licensed translator",
                  "Cannot convert Tourist Visa to Work Permit inside Albania",
                  "EU/Schengen citizens are exempt from work permit requirements",
                  "Employer must prove no qualified Albanian candidate was available",
                ]}
              />
            )}

            {activeTab === "nomad" && (
              <VisaTypeCard
                badge="Unique Permit (Remote Worker)"
                title="Albania Digital Nomad Visa — Unique Permit"
                color="#7c3aed"
                highlight="Live in Albania up to 1 year — remote income only"
                description="Albania does not have a visa officially labelled 'Digital Nomad Visa,' but remote workers use a legal pathway: a Type D Long-Stay Visa followed by a Unique Permit for Residence. This allows you to live in Albania for up to 1 year (renewable) while working for clients outside Albania. Albania's flat 15% income tax and low cost of living make it one of Europe's best digital nomad destinations."
                facts={[
                  { label: "Permit Duration", value: "1 year (renewable)" },
                  { label: "Minimum Monthly Income", value: "~€1,000 (remote clients)" },
                  { label: "Income Tax Rate", value: "15% (flat rate)" },
                  { label: "Processing Time", value: "~30 days" },
                  { label: "Albania Residence Permits Issued 2025", value: "45,000 (+25% YoY)" },
                  { label: "Eligibility", value: "Must work for non-Albanian employers" },
                ]}
                docs={[
                  "Type D visa application form (if your nationality requires it)",
                  "Valid passport with sufficient remaining validity",
                  "Proof of remote employment (contract, client invoices, letters)",
                  "Bank statements showing regular income (~€1,000+/month)",
                  "Criminal record certificate (apostilled + Albanian translation)",
                  "Proof of accommodation in Albania (lease or property deed)",
                  "Health insurance valid in Albania",
                  "Biometric passport photos",
                ]}
                warnings={[
                  "Must not have Albanian-source income for this permit",
                  "Criminal record certificate is the most common rejection reason",
                  "Visa-exempt nationals can apply after arriving in Albania",
                  "Tax registration in Albania required within 30 days of residency",
                ]}
              />
            )}

            {activeTab === "transit" && (
              <VisaTypeCard
                badge="Type A Visa"
                title="Albania Airport Transit Visa"
                color="#b45309"
                highlight="For transit through Tirana International Airport"
                description="The Type A Airport Transit Visa allows the holder to remain in the international zone of Tirana's Mother Teresa Airport while waiting for a connecting flight. It does not grant entry into Albania. It can be issued for one, two, or multiple entries. Validity matches the layover and flight reservation period."
                facts={[
                  { label: "Zone", value: "International airport zone only" },
                  { label: "Entries", value: "Single, double, or multiple" },
                  { label: "Validity", value: "Matches flight layover" },
                  { label: "Entry to Albania", value: "Not permitted" },
                  { label: "Application", value: "Online or at consulate" },
                  { label: "Fee", value: "Varies by nationality" },
                ]}
                docs={[
                  "Valid passport",
                  "Confirmed onward flight reservation",
                  "Visa/entry permit for final destination country",
                  "Biometric photo",
                  "Completed application form",
                ]}
                warnings={[
                  "Does not permit leaving the transit zone",
                  "Required only for certain nationalities",
                  "Check with airline before travel — they verify this pre-boarding",
                ]}
              />
            )}
          </div>
        </section>

        {/* ── VIDEO GUIDES ── */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-[#005a31] uppercase tracking-tighter mb-3">
                Albania Visa Video Guides
              </h2>
              <p className="text-slate-500">Step-by-step walkthroughs by our immigration experts</p>
              <div className="h-1.5 w-20 bg-[#ff6b00] mx-auto rounded-full mt-4"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard id="98fSRoZIkWs" title="Avoid Visa Rejection" desc="Top 8 reasons Albania e-Visa applications get rejected and how to prevent them." />
              <VideoCard id="mVo9V7RR5fE" title="Apply from Dubai (UAE)" desc="Complete step-by-step guide for UAE & GCC residents applying for Albania visa." />
              <VideoCard id="NrSjr1GnotY" title="Fast-Track Processing" desc="How express service delivers Albania visa approval in 10 working days." />
            </div>
          </div>
        </section>

        {/* ── VISA PROGRAMS POSTER GRID ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-3 uppercase tracking-tighter">
              Albania <span className="text-[#ff6b00]">Visa Programs</span>
            </h2>
            <p className="text-slate-500 mb-10 max-w-2xl">Four official immigration pathways to suit every purpose — from a beach holiday to long-term residency.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <PosterCard img="https://i.ytimg.com/vi/mVo9V7RR5fE/maxresdefault.jpg" type="Tourist" title="Type C E-Visa" sub="Up to 90 days" href="/our-services/visa/albania-visa-application" />
              <PosterCard img="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800" type="Business" title="Work Permit D" sub="1–3 years" href="/our-services/visa/work-permit" />
              <PosterCard img="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800" type="Remote Work" title="Digital Nomad" sub="Unique Permit" href="/our-services/visa/digital-nomad-visa" />
              <PosterCard img="https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=800" type="Long-term" title="Residency" sub="5+ Year Path" href="/our-services/visa/albania-visa-application" />
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT + SIDEBAR ── */}
        <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
          
          <div className="lg:col-span-8 space-y-16">

            {/* DOCUMENT CHECKLIST */}
            <div id="documents">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-[#005a31] p-4 rounded-[1.25rem] text-white shadow-lg">
                  <FileText size={30}/>
                </div>
                <div>
                  <h2 className="text-3xl font-black uppercase tracking-tight">Document Checklist</h2>
                  <p className="text-slate-400 font-medium text-sm mt-1">Requirements vary by nationality · Updated April 2026</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <DocCard title="Identity & Travel" items={[
                  "Passport (valid 6+ months beyond stay)",
                  "National ID digital scan",
                  "2 biometric photos (47×36mm, 300DPI)",
                  "Signed visa application form",
                ]}/>
                <DocCard title="Logistics & Itinerary" items={[
                  "Detailed travel itinerary",
                  "Round-trip flight reservation",
                  "Hotel booking or host address",
                  "Travel insurance (min €30,000)",
                ]}/>
                <DocCard title="Financial & Work" items={[
                  "6–12 months bank statements",
                  "Proof of employment or business",
                  "Proof of ties to home country",
                  "Statement of Purpose (recommended)",
                ]}/>
                <DocCard title="Correspondence" items={[
                  "Cover letter (purpose of visit)",
                  "Appointment confirmation",
                  "Police clearance (Type D only)",
                  "Invitation letter (if applicable)",
                ]}/>
                <div className="bg-[#005a31] md:col-span-2 p-7 rounded-[2rem] shadow-xl text-white relative overflow-hidden">
                  <h4 className="text-[#ff6b00] font-black text-xs uppercase tracking-[0.2em] mb-5">Work Permit (Type D) — Additional Docs</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {["Attested employment contract", "Notarized degree/diploma", "Health certificate (fit to work)", "Company registration extract", "Albanian-translated documents", "Employer labor market test proof"].map((d,i)=>(
                      <div key={i} className="flex items-center gap-2 text-sm text-white/90 font-medium">
                        <CheckCircle size={14} className="text-[#ff6b00] shrink-0"/> {d}
                      </div>
                    ))}
                  </div>
                  <div className="absolute -right-8 -bottom-8 opacity-10"><ShieldCheck size={160}/></div>
                </div>
              </div>

              {/* Important note */}
              <div className="mt-8 p-7 bg-amber-50 border border-amber-100 rounded-2xl flex gap-5 items-start">
                <div className="bg-amber-500 text-white p-3 rounded-xl shrink-0"><AlertTriangle size={24}/></div>
                <div>
                  <p className="font-black text-amber-800 uppercase text-xs tracking-widest mb-1">⚠ Important — 2026 Update</p>
                  <p className="text-sm text-amber-900 leading-relaxed">
                    Albania now requires <strong>biometric photos uploaded digitally</strong> — paper applications are being phased out. All Type D Work Permit documents must be <strong>translated into Albanian</strong> by a licensed translator. Our Dubai office provides certified translation and appointment scheduling as part of our full package.
                  </p>
                </div>
              </div>
            </div>

            {/* VISA-FREE CONDITIONS */}
            <div className="bg-emerald-50 rounded-[2.5rem] p-8 md:p-12 border border-emerald-100">
              <h3 className="text-2xl font-black text-[#005a31] mb-2 tracking-tight uppercase">Who Can Enter Albania Visa-Free?</h3>
              <p className="text-slate-500 text-sm mb-6">Under Albanian Law No. 79/2021 and Council of Ministers Decision No. 858/2021</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { t: "Schengen Visa Holders", d: "Valid multiple-entry Schengen visa previously used in a Schengen state. Must leave Albania within 3 days of visa expiry." },
                  { t: "US / UK / EU Visa Holders", d: "Valid multiple-entry US, UK, or EU residence permit holders — entry for up to 90 days." },
                  { t: "UAE Golden Visa (10-year)", d: "High-tier UAE residency permits qualify for visa-free entry into Albania." },
                  { t: "American Citizens", d: "US passport holders get up to 365 days visa-free — the longest exemption window." },
                ].map((x,i)=>(
                  <div key={i} className="bg-white p-5 rounded-2xl border border-emerald-100">
                    <p className="font-black text-[#005a31] mb-1 flex items-center gap-2"><CheckCircle size={15} className="text-[#ff6b00]"/> {x.t}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{x.d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white border border-red-100 rounded-2xl">
                <p className="text-sm text-red-700 font-semibold flex items-center gap-2">
                  <XCircle size={16} className="shrink-0 text-red-500"/>
                  <span><strong>Overstay Warning (2026):</strong> Albania applies fines of €100–€500 and a <strong>5-year entry ban</strong> for overstays. E-gate digital tracking at Tirana Airport launched January 2026.</span>
                </p>
              </div>
            </div>

            {/* STEP BY STEP PROCESS */}
            <div id="how-to-apply">
              <h3 className="text-3xl font-black text-[#005a31] uppercase tracking-tight mb-8">
                How to Apply for Albania E-Visa — Step by Step
              </h3>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Check Eligibility", desc: "Verify whether your nationality requires a visa. Many nationalities can apply via the e-visa.al portal. If you hold a valid Schengen, US, or UK visa, you may qualify for visa-free entry." },
                  { step: "02", title: "Gather Documents", desc: "Prepare all required documents: passport, biometric photo (555×425px, 300DPI), insurance, bank statements, hotel confirmation, and flight reservation." },
                  { step: "03", title: "Submit Online Application", desc: "Apply at the official Albanian e-visa portal (e-visa.al) while outside Albania. Complete all fields accurately — inconsistencies are the top rejection cause." },
                  { step: "04", title: "Pay the Visa Fee", desc: "Pay the government visa fee online. This fee is non-refundable regardless of outcome. Fees start at €30 for Type C and €100 for Type D." },
                  { step: "05", title: "Track & Wait", desc: "Standard processing is 15–20 working days. Do not contact the embassy during processing. You'll receive an email notification with your application code." },
                  { step: "06", title: "Receive & Print E-Visa", desc: "Upon approval, your e-Visa arrives by email in PDF format. Print a copy or save it digitally. Present it at the Albanian border alongside your passport." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-5 p-6 bg-white border border-slate-100 rounded-2xl hover:border-[#005a31] hover:shadow-md transition-all">
                    <div className="bg-[#005a31] text-white font-black text-lg w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">{s.step}</div>
                    <div>
                      <p className="font-black text-[#005a31] uppercase tracking-wide text-sm mb-1">{s.title}</p>
                      <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* REJECTION REASONS */}
            <div className="bg-red-50 border border-red-100 rounded-[2.5rem] p-8 md:p-12">
              <h3 className="text-2xl font-black text-red-700 uppercase tracking-tight mb-2">Top Albania Visa Rejection Reasons</h3>
              <p className="text-slate-500 text-sm mb-6">Albania's rejection rate reached 12% in 2025. Here's why — and how we prevent it for our clients.</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { bad: "Invalid or expired travel insurance", fix: "We source compliant €30,000 coverage instantly" },
                  { bad: "Insufficient proof of financial means", fix: "We advise exact bank statement format required" },
                  { bad: "Incorrect biometric photo format", fix: "We verify 555×425px, 300DPI compliance" },
                  { bad: "No proof of accommodation", fix: "We provide hotel vouchers accepted by Albanian portal" },
                  { bad: "Weak ties to home country", fix: "We help draft a strong Statement of Purpose" },
                  { bad: "Inconsistent information across documents", fix: "We cross-check every document before submission" },
                ].map((r, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-red-50">
                    <p className="text-red-600 font-bold text-sm flex items-start gap-2 mb-2">
                      <XCircle size={15} className="shrink-0 mt-0.5"/> {r.bad}
                    </p>
                    <p className="text-emerald-700 font-bold text-xs flex items-start gap-2">
                      <CheckCircle size={13} className="shrink-0 mt-0.5"/> <em>Eammu fix: {r.fix}</em>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* EXPANDED FAQ */}
            <div id="faq">
              <h3 className="text-3xl font-black text-[#005a31] uppercase tracking-tight mb-2">
                Albania Visa FAQs 2026
              </h3>
              <p className="text-slate-400 text-sm mb-8">Frequently asked questions from UAE, Bangladesh & Armenia applicants</p>
              <div className="space-y-3">
                {[
                  { q: "How long is the Albania E-Visa valid?", a: "A Type C E-Visa allows up to 90 days within a 180-day period. The visa window (entry timeframe) is typically 180 days from the issue date. Single or multiple entries are available depending on your profile." },
                  { q: "Can I convert a Tourist Visa to a Work Permit inside Albania?", a: "No. Albania requires a Type D Work Visa to be applied for from your country of residence or nearest Albanian consulate before traveling for employment. Attempting to change status inside Albania is not permitted." },
                  { q: "Are bank statements mandatory for Albania E-Visa?", a: "Yes. You must demonstrate financial sufficiency — usually €50 per day per adult. A 6–12 month bank statement showing regular income and a positive balance is required. Sponsored travelers may use a guarantor's statements." },
                  { q: "Do documents need to be translated into Albanian?", a: "For the Type C E-Visa, English language documents are generally accepted. However, for Work Permits (Type D) and Residency applications, all key documents — including degrees, police clearances, and contracts — must be notarized and officially translated into Albanian." },
                  { q: "Is Albania in the Schengen Area?", a: "No, Albania is not yet a Schengen member as of 2026. However, it grants visa-free access to holders of valid Schengen, US, UK, EU, and select UAE residency documents. Albania is currently an EU candidate country." },
                  { q: "What is the Albania Digital Nomad 'Unique Permit'?", a: "Albania's Unique Permit for remote workers allows you to live in Albania for up to 1 year while earning income from non-Albanian clients. It requires proof of ~€1,000/month income and a clean criminal record. Albania's 15% flat tax rate is a major financial advantage for nomads." },
                  { q: "What happens if I overstay my Albania visa?", a: "Overstaying results in fines of €100–€500 and a 5-year ban from re-entering Albania. Since January 2026, Albania uses digital e-gate tracking at Tirana Airport, making overstays much harder to conceal." },
                  { q: "Can Eammu Holidays help with flight and hotel booking for visa purposes?", a: "Yes. As a full-service travel agency, we issue visa-purpose flight reservations and hotel vouchers that meet the Albanian immigration portal's exact requirements — accepted without issue." },
                  { q: "How do I apply for an Albania visa from Dubai (UAE)?", a: "UAE residents can apply via the official Albania e-visa portal online, or use our Dubai-based consultancy service at Eammu Holidays. We handle document review, photo compliance, insurance, and submission for UAE, GCC, and South Asian applicants." },
                  { q: "What is Albania's e-visa approval rate?", a: "Albania's overall e-visa approval rate is strong. Our clients at Eammu Holidays maintain a 97.8% success rate. The national rejection rate was 12% in 2025, primarily due to document errors — which our pre-submission review eliminates." },
                ].map((f, i) => (
                  <FAQBox key={i} q={f.q} a={f.a}/>
                ))}
              </div>
            </div>

            {/* WHY CHOOSE ALBANIA */}
            <div className="bg-[#005a31] text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Why Move or Travel to Albania in 2026?</h3>
              <p className="text-white/70 text-sm mb-8">Albania is one of Europe's fastest-growing destinations for tourists, remote workers, and businesses.</p>
              <div className="grid md:grid-cols-3 gap-6 relative z-10">
                {[
                  { icon: <DollarSign size={24}/>, t: "Low Cost of Living", d: "Average monthly costs €600–€900. Significantly cheaper than Western Europe or UAE." },
                  { icon: <Award size={24}/>, t: "15% Flat Income Tax", d: "One of Europe's lowest tax rates, making it ideal for entrepreneurs and freelancers." },
                  { icon: <Globe size={24}/>, t: "10M+ Annual Tourists", d: "Albania welcomed over 10 million tourists in 2025, a record driven by EU candidate status." },
                  { icon: <Plane size={24}/>, t: "Easy Accessibility", d: "Regular flights from Dubai, Istanbul, Rome, and Vienna. Tirana Airport expanding for 2026." },
                  { icon: <Star size={24}/>, t: "EU Candidate Country", d: "Albania's EU accession path makes it a strategic base for businesses targeting European markets." },
                  { icon: <Users size={24}/>, t: "Growing Expat Community", d: "45,000 new residence permits issued in 2025 — a 25% year-on-year rise in expats choosing Albania." },
                ].map((x, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur p-5 rounded-2xl border border-white/10">
                    <div className="text-[#ff6b00] mb-3">{x.icon}</div>
                    <p className="font-black mb-1">{x.t}</p>
                    <p className="text-white/60 text-xs leading-relaxed">{x.d}</p>
                  </div>
                ))}
              </div>
              <div className="absolute -right-20 -bottom-20 opacity-5"><Globe size={300}/></div>
            </div>

            {/* RELATED SERVICES LINKS (internal SEO) */}
            <div className="border border-slate-100 rounded-[2rem] p-8">
              <h3 className="text-xl font-black text-[#005a31] uppercase tracking-tight mb-6">Explore Related Visa Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "Europe Visa Application Guide", href: "/our-services/visa/europe-visa-application", desc: "Schengen, UK, and multi-country European visas" },
                  { label: "UAE Work & Residence Visa", href: "/our-services/visa/uae-residence-visa", desc: "Dubai & Abu Dhabi residence permit services" },
                  { label: "Schengen Visa from Dubai", href: "/our-services/visa/schengen-visa", desc: "French, German, Italian, and other Schengen visas" },
                  { label: "Work Permit Consultancy", href: "/our-services/visa/work-permit", desc: "International employment visa across 40+ countries" },
                  { label: "Digital Nomad Visa Guide", href: "/our-services/visa/digital-nomad-visa", desc: "Remote work permits: Albania, Georgia, Portugal" },
                  { label: "Flight Reservation for Visa", href: "/our-services/travel/flight-reservation", desc: "Visa-purpose confirmed bookings accepted by embassies" },
                ].map((l, i) => (
                  <a key={i} href={l.href}
                     className="flex items-start gap-3 p-4 bg-slate-50 hover:bg-emerald-50 border border-transparent hover:border-emerald-200 rounded-2xl transition-all group">
                    <ChevronRight size={16} className="text-[#ff6b00] mt-1 shrink-0 group-hover:translate-x-1 transition-transform"/>
                    <div>
                      <p className="font-black text-[#005a31] text-sm">{l.label}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{l.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* ── STICKY SIDEBAR ── */}
          <aside className="lg:col-span-4 lg:sticky lg:top-8 self-start space-y-6">
            {/* Contact Card */}
            <div className="bg-[#005a31] text-white p-8 rounded-[2.5rem] shadow-2xl shadow-emerald-900/20 relative overflow-hidden">
              <h3 className="text-lg font-black mb-1 text-[#ff6b00] italic">Eammu Holidays</h3>
              <p className="text-white/60 text-xs mb-8 uppercase tracking-widest font-bold">Immigration Consultancy</p>
              <div className="space-y-7">
                <SidebarContact label="UAE Support" val="+971 50 707 8334" href="tel:+971507078334"/>
                <SidebarContact label="Armenia Office" val="+374 94 810585" href="tel:+37494810585"/>
                <SidebarContact label="BD Hotline" val="+880 1701 699 743" href="tel:+8801701699743"/>
                <SidebarContact label="Email Us" val="info@eammu.com" href="mailto:info@eammu.com"/>
              </div>
              <a href="https://wa.me/37494810585"
                 className="mt-8 block w-full bg-[#ff6b00] text-white text-center py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#005a31] transition-all shadow-lg">
                💬 Chat on WhatsApp
              </a>
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/5 rounded-full"/>
            </div>

            {/* Quick Visa Fee Table */}
            <div className="bg-white border border-slate-100 rounded-[2rem] p-6">
              <h4 className="font-black text-[#005a31] uppercase tracking-wide text-sm mb-4">Albania Visa Fees 2026</h4>
              <div className="space-y-3">
                {[
                  { type: "Type C E-Visa (Tourist)", fee: "From €30", color: "text-emerald-700" },
                  { type: "Type A (Transit)", fee: "Varies", color: "text-slate-500" },
                  { type: "Type D (Work — Temporary)", fee: "€100", color: "text-blue-700" },
                  { type: "Type D (Work — Permanent)", fee: "€150", color: "text-purple-700" },
                  { type: "Express Processing", fee: "+€50", color: "text-[#ff6b00]" },
                  { type: "Appeal Fee (if rejected)", fee: "€20", color: "text-red-600" },
                ].map((r, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                    <span className="text-xs text-slate-500 font-medium">{r.type}</span>
                    <span className={`font-black text-sm ${r.color}`}>{r.fee}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-300 mt-4 font-medium">Government fees subject to change. Consultancy fees apply separately.</p>
            </div>

            {/* Trust Box */}
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-white shadow border border-slate-100 flex items-center justify-center text-[#005a31] mx-auto mb-4">
                <ShieldCheck size={28}/>
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-1">Global Immigration</p>
              <p className="text-[#005a31] font-black italic text-xl tracking-tighter">Eammu Holidays</p>
              <div className="flex items-center justify-center gap-1 mt-3">
                {[1,2,3,4,5].map(s=><Star key={s} size={13} fill="#ff6b00" className="text-[#ff6b00]"/>)}
                <span className="text-xs text-slate-400 ml-1 font-bold">4.9/5 — 1,200+ reviews</span>
              </div>
            </div>

            {/* Quick links sidebar */}
            <div className="bg-white border border-slate-100 rounded-[2rem] p-6">
              <h4 className="font-black text-slate-400 uppercase tracking-widest text-[10px] mb-4">Page Navigation</h4>
              {[
                ["#visa-types", "Visa Types Overview"],
                ["#documents", "Document Checklist"],
                ["#how-to-apply", "Application Steps"],
                ["#faq", "FAQs"],
              ].map(([href, label]) => (
                <a key={href} href={href}
                   className="flex items-center gap-2 py-2 text-sm text-slate-500 hover:text-[#005a31] font-semibold border-b border-slate-50 last:border-0 transition-colors">
                  <ChevronRight size={13} className="text-[#ff6b00]"/> {label}
                </a>
              ))}
            </div>
          </aside>
        </section>

        {/* ── FOOTER CTA STRIP ── */}
        <section className="bg-[#ff6b00] py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
              Ready to Apply for Your Albania Visa?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Expert guidance from application to approval. 97.8% success rate across UAE, Bangladesh, and Armenian applicants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/37494810585"
                 className="bg-white text-[#ff6b00] px-8 py-4 rounded-2xl font-black uppercase tracking-wide shadow-xl hover:bg-[#005a31] hover:text-white transition-all">
                Start WhatsApp Application
              </a>
              <a href="mailto:info@eammu.com"
                 className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-black uppercase tracking-wide hover:bg-white hover:text-[#ff6b00] transition-all">
                Email for Consultation
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

/* ─────────────────────────────────────────────
   HELPER COMPONENTS
───────────────────────────────────────────── */

const MetricBox = ({ icon, label, value, sub }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
    <div className="text-[#ff6b00] mb-3">{React.cloneElement(icon, { size: 26 })}</div>
    <span className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-0.5">{label}</span>
    <span className="text-[#005a31] font-black text-sm md:text-base leading-tight">{value}</span>
    {sub && <span className="text-[9px] text-slate-300 font-bold mt-0.5">{sub}</span>}
  </div>
);

const VideoCard = ({ id, title, desc }) => (
  <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm">
    <div className="aspect-video">
      <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${id}`} title={title} allowFullScreen loading="lazy"/>
    </div>
    <div className="p-5">
      <h4 className="font-black text-[#005a31] uppercase mb-1 text-sm leading-tight">{title}</h4>
      <p className="text-slate-400 text-xs font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

const PosterCard = ({ img, type, title, sub, href }) => (
  <a href={href} className="relative w-full min-h-[380px] rounded-[2.5rem] overflow-hidden group shadow-xl bg-slate-100 flex flex-col justify-end block">
    <img src={img} alt={`Albania ${title} visa`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
    <div className="absolute inset-0 bg-gradient-to-t from-[#005a31] via-[#005a31]/10 to-transparent opacity-90"/>
    <div className="relative z-10 p-7 w-full">
      <span className="text-[#ff6b00] font-black text-[10px] uppercase tracking-[0.2em] bg-white/10 backdrop-blur px-3 py-1 rounded-lg mb-3 inline-block">{type}</span>
      <h4 className="text-white font-black text-2xl uppercase tracking-tighter leading-tight">{title}</h4>
      <p className="text-white/60 text-xs font-semibold mt-1">{sub}</p>
      <div className="w-0 group-hover:w-10 h-1 bg-[#ff6b00] mt-3 transition-all duration-500 rounded-full"/>
    </div>
  </a>
);

const DocCard = ({ title, items }) => (
  <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 hover:border-emerald-200 transition-colors">
    <h4 className="text-[#ff6b00] font-black text-[10px] uppercase tracking-[0.2em] mb-5">{title}</h4>
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-2">
          <CheckCircle size={14} className="text-[#ff6b00] shrink-0 mt-0.5"/>
          <span className="text-sm font-semibold text-slate-600 leading-snug">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

const VisaTypeCard = ({ badge, title, color, highlight, description, facts, docs, warnings }) => (
  <div className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm">
    <div className="p-1" style={{ backgroundColor: color }}>
      <div className="bg-white/10 text-white text-center py-2 rounded-t-[1.75rem]">
        <span className="font-black text-xs uppercase tracking-widest">{badge}</span>
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-black text-slate-800 mb-1">{title}</h3>
      <p className="text-[#ff6b00] font-black text-xs uppercase tracking-wide mb-4">{highlight}</p>
      <p className="text-slate-500 text-sm leading-relaxed mb-8">{description}</p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-4">Key Facts</h4>
          <div className="space-y-3">
            {facts.map((f, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[10px] text-slate-300 font-black uppercase tracking-widest">{f.label}</span>
                <span className="font-black text-slate-700 text-sm">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-4">Required Documents</h4>
          <div className="grid sm:grid-cols-2 gap-2">
            {docs.map((d, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                <CheckCircle size={13} className="text-[#ff6b00] shrink-0 mt-0.5"/> {d}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
        <p className="font-black text-red-700 text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
          <AlertTriangle size={13}/> Important Notes
        </p>
        <div className="space-y-2">
          {warnings.map((w, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-red-600 font-semibold">
              <XCircle size={12} className="shrink-0 mt-0.5"/> {w}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SidebarContact = ({ label, val, href }) => (
  <div className="relative pl-5">
    <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-[#ff6b00] rounded-full"/>
    <p className="text-[#ff6b00] text-[9px] font-black uppercase tracking-widest mb-0.5">{label}</p>
    <a href={href} className="text-base font-bold hover:text-[#ff6b00] transition-colors">{val}</a>
  </div>
);

const FAQBox = ({ q, a }) => (
  <details className="group bg-white border border-slate-100 rounded-2xl p-5 open:shadow-md transition-all">
    <summary className="flex justify-between items-start cursor-pointer font-black text-[#005a31] text-sm uppercase tracking-tight list-none gap-4">
      <span className="leading-snug">{q}</span>
      <ChevronDown size={18} className="text-[#ff6b00] shrink-0 group-open:rotate-180 transition-transform mt-0.5"/>
    </summary>
    <p className="mt-4 text-sm text-slate-500 font-medium leading-relaxed border-l-2 border-[#ff6b00] pl-4">
      {a}
    </p>
  </details>
);

export default AlbaniaVisa;