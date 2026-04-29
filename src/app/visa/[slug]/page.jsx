import countries from "@/app/data/countries.json";
import visadata from "@/app/data/visadata.json";
import { createSlug } from "@/app/lib/utils";
import Link from "next/link";
import {
  CheckCircle, Clock, CreditCard, Camera, Info,
  MapPin, AlertTriangle, Lightbulb, HelpCircle,
  Calendar, ShieldCheck, Landmark, Map, Users, Zap,
  FileText, Globe, Phone, ChevronRight, Star,
  ArrowRight, MessageCircle, Mail, Building2,
  Plane, Wallet, BadgeCheck, CircleDashed,
  TrendingUp, BookOpen, TriangleAlert
} from "lucide-react";

export const revalidate = 86400; // cache for 24 hours

// ── SEO METADATA ─────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cleanSlug = slug.replace(/-visa$/, "");
  const country = countries.find(c => createSlug(c.country) === cleanSlug);
  const d = visadata[cleanSlug];

  const countryName = country?.country || "Destination";
  const currentYear = new Date().getFullYear();

  // Rich natural-language title + description that mirrors how people actually search
  const defaultTitle = `${countryName} Visa for Bangladeshi Citizens ${currentYear} — Requirements, Fees & How to Apply`;
  const defaultDesc = `Planning to visit ${countryName}? Get the complete ${currentYear} visa guide for Bangladesh passport holders — documents needed, embassy fees, bank balance required, photo size, processing time, and step-by-step application tips.`;

  return {
    title: d?.seo_and_metadata?.meta_title || defaultTitle,
    description: d?.description || defaultDesc,
    keywords: d?.seo_and_metadata?.keywords?.join(", ") ||
      `${countryName} visa Bangladesh ${currentYear}, ${countryName} visa requirements Bangladeshi, ${countryName} visa fee Dhaka, ${countryName} visa bank balance, ${countryName} visa processing time, ${countryName} visa documents Bangladesh, ${countryName} embassy Bangladesh, how to get ${countryName} visa from Bangladesh`,
    alternates: { canonical: d?.seo_and_metadata?.canonical_url },
    openGraph: {
      title: `${countryName} Visa for Bangladeshi Citizens — ${currentYear} Complete Guide`,
      description: `Embassy-verified ${countryName} visa checklist, processing time, fees & tips for Bangladesh passport holders. Updated ${currentYear}.`,
      images: [country?.flag || ""],
      type: "article",
    },
  };
}

// ── FALLBACK PAGE (no visa data, but country exists) ─────────────────────────
function FallbackVisaPage({ country, whatsappUrl }) {
  const countryName = country.country;
  const currentYear = new Date().getFullYear();

  const commonDocs = [
    "Original Passport (valid for minimum 6 months, with at least 2 blank pages)",
    "Recent passport-size photographs (white background, taken within 3 months)",
    "Completed visa application form (signed)",
    "Confirmed round-trip flight reservation / itinerary",
    "Hotel booking or accommodation proof for entire stay",
    "Personal bank statement — last 3 to 6 months, minimum BDT 2–3 lakh recommended",
    "Bank solvency certificate from your bank",
    "Cover letter stating purpose of travel, dates, and itinerary",
    "Travel insurance covering the full duration (some embassies require this)",
    "Income proof: salary certificate / business trade license / student enrolment letter",
  ];

  const commonTips = [
    "Apply at least 6–8 weeks before your travel date to allow sufficient processing time.",
    "Keep your bank balance stable for 3–6 months. Avoid large last-minute cash deposits — embassies flag these.",
    "Write a clear, honest cover letter. Mention your job, reason for travel, and that you will return.",
    "Ensure all photocopies are clear and untampered. Poor quality copies are a common cause of rejection.",
    "If you have prior international travel history (USA, UK, Schengen, etc.), include those visa copies — it significantly boosts approval chances.",
  ];

  const faqs = [
    {
      q: `Do Bangladeshi citizens need a visa to visit ${countryName}?`,
      a: `Visa requirements depend on ${countryName}'s bilateral agreement with Bangladesh. Most countries require a visa in advance. Contact the ${countryName} Embassy in Dhaka or reach out to our consultants for the most up-to-date policy.`,
    },
    {
      q: `How long does the ${countryName} visa take to process?`,
      a: `Processing times vary by country and season. Standard processing typically takes 5–15 working days. We recommend applying at least 6–8 weeks before your travel date to be safe.`,
    },
    {
      q: `How much bank balance do I need for a ${countryName} visa?`,
      a: `Most embassies expect at least BDT 2–5 lakh for solo travelers, with a stable transaction history. The exact amount depends on your trip duration and destination cost of living. Our consultants can advise based on your specific case.`,
    },
    {
      q: `Where do I submit my ${countryName} visa application in Bangladesh?`,
      a: `Depending on the country, you may submit at the ${countryName} Embassy in Dhaka, a designated Visa Application Centre (JVAC/VFS Global), or via an authorised travel agent. Contact us and we'll guide you to the right submission point.`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fb] font-sans antialiased text-[#1a1c1e]">

      {/* ── HERO ── */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-5 py-16 md:py-24 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/40 font-semibold mb-8">
            <Link href="/" className="hover:text-white/70 transition">Home</Link>
            <ChevronRight size={12} />
            <Link href="/visa" className="hover:text-white/70 transition">Visa Guide</Link>
            <ChevronRight size={12} />
            <span className="text-white/60">{countryName} Visa</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-amber-400/20 border border-amber-400/30 text-amber-300 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                  {currentYear} Guide
                </span>
                <span className="bg-white/10 border border-white/20 text-white/60 px-4 py-1.5 rounded-full text-xs font-bold">
                  For Bangladesh Passport Holders
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-3">
                {countryName} Tourist Visa Requirements <br />
                <span className="text-amber-400">for Bangladeshis</span>
              </h1>
              <p className="text-white/50 leading-relaxed text-sm mb-2 font-medium">
                How to apply for {countryName} visa from Bangladesh — {currentYear}
              </p>
              <p className="text-white/40 leading-relaxed text-sm mb-8 max-w-lg">
                Detailed visa information for {countryName} is being prepared by our team. In the meantime, the general requirements below apply to most international visa applications. Contact our consultants for country-specific guidance.
              </p>

              <div className="flex flex-wrap gap-3">
                {["✅ Expert Consultants", "📋 Document Review", "⚡ Fast Processing", "🔒 Confidential"].map(b => (
                  <span key={b} className="flex items-center gap-1.5 bg-white/8 border border-white/10 px-3 py-2 rounded-xl text-xs font-bold text-white/60">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Flag card */}
            <div className="flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-br from-amber-400/20 to-blue-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-700" />
                <div className="relative bg-white/10 backdrop-blur border border-white/20 p-4 rounded-3xl shadow-2xl overflow-hidden w-72 h-52 flex items-center justify-center">
                  <img src={country.flag} alt={`${countryName} flag`} className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber-400 text-black px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap shadow-xl">
                  Tourist Visa Guide
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── INFO BANNER ── */}
      <div className="max-w-7xl mx-auto px-5 mt-10 mb-8">
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 flex gap-4 items-start">
          <div className="p-2 bg-amber-100 rounded-xl shrink-0">
            <CircleDashed size={20} className="text-amber-600" />
          </div>
          <div>
            <p className="font-black text-amber-800 text-sm mb-1">Detailed {countryName} visa data coming soon</p>
            <p className="text-amber-700 text-xs leading-relaxed">Our team is verifying the latest {currentYear} requirements for {countryName}. The general checklist below is a reliable starting point. For confirmed requirements, WhatsApp our consultants — they respond within 2 hours.</p>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-5 pb-20">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 space-y-8">

            {/* SEO INTRO */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full" />
                <h2 className="text-2xl font-black text-gray-900">{countryName} Visa from Bangladesh — What You Need to Know</h2>
              </div>
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  If you hold a <strong className="text-gray-800">Bangladeshi passport</strong> and are planning to visit <strong className="text-gray-800">{countryName}</strong>, you will most likely need to apply for a visa in advance. The process typically involves submitting a document package to the {countryName} Embassy or an authorised Visa Application Centre (JVAC/VFS Global) in Dhaka.
                </p>
                <p>
                  The <strong className="text-gray-800">{countryName} visa for Bangladeshi citizens</strong> in {currentYear} generally requires proof of financial solvency, a confirmed travel itinerary, hotel bookings, and a well-written cover letter. Embassy officers pay close attention to your bank statement history and the consistency of your application documents.
                </p>
                <p>
                  Common reasons for rejection include <strong className="text-gray-800">weak financial documentation</strong>, a vague itinerary, non-compliant photographs, and missing occupation-specific letters. Our guide below walks you through every requirement you'll likely need.
                </p>
              </div>
            </section>

            {/* GENERAL DOCUMENTS CHECKLIST */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-green-50 rounded-2xl"><CheckCircle size={26} className="text-green-600" /></div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">General Visa Documents for {countryName}</h2>
                  <p className="text-sm text-gray-400 mt-0.5">Standard checklist applicable to most international visa applications</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {commonDocs.map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-green-50/60 border border-green-100 rounded-2xl">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={12} className="text-white" />
                    </div>
                    <p className="text-sm text-gray-700 font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              {/* Occupation-specific */}
              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Additional Documents by Profession</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { role: "Employed", items: ["NOC from employer (on letterhead)", "Salary certificate / payslip", "Visiting card / employee ID"] },
                    { role: "Business Owner", items: ["Trade License (English translation)", "Company bank statement", "Chamber membership (if available)"] },
                    { role: "Student", items: ["University ID / enrollment letter", "Leave certificate from institution", "Sponsor's financial guarantee"] },
                    { role: "Govt. Employee", items: ["Government Order (GO) copy", "NOC approved by department (English)", "Service book first few pages"] },
                  ].map(({ role, items }) => (
                    <div key={role} className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
                      <h4 className="text-xs font-black text-gray-700 uppercase tracking-wider mb-3">{role}</h4>
                      <ul className="space-y-2">
                        {items.map((item, i) => (
                          <li key={i} className="text-xs text-gray-500 flex gap-2 leading-relaxed">
                            <span className="text-green-500 shrink-0 mt-0.5">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PHOTO SPECS + TIPS */}
            <div className="grid md:grid-cols-2 gap-6">
              <section className="bg-gradient-to-br from-rose-50 to-red-50 border border-red-100 rounded-[2rem] p-8 relative overflow-hidden">
                <Camera className="absolute top-4 right-4 text-red-200/60" size={80} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 bg-red-100 rounded-xl"><Camera size={20} className="text-red-600" /></div>
                    <h2 className="text-xl font-black text-gray-900">Photo Specifications</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { label: "Common Size", val: "35×45mm or 45×45mm" },
                      { label: "Background", val: "Plain White only" },
                      { label: "Standard", val: "ICAO Compliant" },
                      { label: "Age of Photo", val: "Taken within 3 months" },
                    ].map(({ label, val }) => (
                      <div key={label} className="bg-white rounded-xl p-4 shadow-sm border border-red-100">
                        <p className="text-[9px] font-black uppercase tracking-widest text-red-400 mb-1">{label}</p>
                        <p className="text-xs font-bold text-gray-800 leading-snug">{val}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-red-500 mb-3">❌ Not Accepted</p>
                    {["Glasses, hats, or accessories", "Heavy filters or retouching", "White clothing (blends with background)", "Old or blurry photos"].map((no, i) => (
                      <div key={i} className="flex gap-2 text-xs text-red-700 font-medium bg-red-100 rounded-lg px-3 py-2 mb-2">
                        <span className="shrink-0">✕</span> {no}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 rounded-[2rem] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-amber-100 rounded-xl"><Lightbulb size={20} className="text-amber-600" /></div>
                  <h2 className="text-xl font-black text-gray-900">Approval Tips</h2>
                </div>
                <div className="space-y-4">
                  {commonTips.map((tip, i) => (
                    <div key={i} className="flex gap-3 bg-white rounded-2xl p-4 border border-amber-100 shadow-sm">
                      <span className="text-xl font-black text-amber-200 shrink-0">0{i + 1}</span>
                      <p className="text-xs text-gray-700 font-medium leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* BANK BALANCE GUIDE */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-blue-50 rounded-xl"><Wallet size={22} className="text-blue-600" /></div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">How Much Bank Balance for {countryName} Visa?</h2>
                  <p className="text-sm text-gray-400 mt-0.5">General guidelines for Bangladeshi applicants</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Solo Traveler", val: "BDT 2–3 lakh minimum", note: "BDT 4–5 lakh recommended", color: "blue" },
                  { label: "Couple Travel", val: "BDT 4–6 lakh minimum", note: "Stable 6-month history", color: "green" },
                  { label: "Family Trip", val: "BDT 7–10 lakh+", note: "Varies by trip duration", color: "purple" },
                ].map(({ label, val, note, color }) => (
                  <div key={label} className={`bg-${color}-50 border border-${color}-100 rounded-2xl p-5`}>
                    <p className={`text-[9px] font-black uppercase tracking-widest text-${color}-500 mb-2`}>{label}</p>
                    <p className="text-lg font-black text-gray-800 leading-tight mb-1">{val}</p>
                    <p className="text-xs text-gray-500 font-medium">{note}</p>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 flex gap-3">
                <TriangleAlert size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 font-medium leading-relaxed">
                  <strong>Important:</strong> Do not deposit a large lump sum right before applying. Embassy officers check transaction patterns — a sudden spike looks suspicious. Maintain a stable, growing balance over 3–6 months.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-purple-50 rounded-xl"><HelpCircle size={22} className="text-purple-600" /></div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">Common Questions — {countryName} Visa Bangladesh</h2>
                  <p className="text-sm text-gray-400 mt-0.5">Answers to questions Bangladeshi travelers ask most</p>
                </div>
              </div>
              <div className="space-y-4">
                {faqs.map((item, i) => (
                  <details key={i} className="group bg-gray-50 border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-amber-300 transition-all">
                    <summary className="list-none flex items-center justify-between p-6 cursor-pointer">
                      <span className="font-black text-gray-800 pr-4 leading-snug text-sm">
                        <span className="text-amber-500 mr-2">Q.</span>{item.q}
                      </span>
                      <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shrink-0 group-open:bg-amber-400 group-open:border-amber-400 transition-all duration-300">
                        <ChevronRight size={14} className="text-gray-500 group-open:text-white rotate-90" />
                      </div>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 ml-8">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* SEO BOTTOM ARTICLE */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full" />
                <h2 className="text-2xl font-black text-gray-900">{countryName} Visa — {currentYear} Complete Guide for Bangladesh</h2>
              </div>
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  Getting a <strong className="text-gray-800">{countryName} visa from Bangladesh</strong> in {currentYear} requires careful preparation. Whether you are a tourist, visiting family, or attending a conference, the document requirements are largely similar — a strong financial file, a clear purpose of travel, and honest, consistent paperwork.
                </p>
                <h3 className="text-lg font-black text-gray-800">{countryName} Visa Application Process for Bangladeshis</h3>
                <p>
                  The process usually starts at the {countryName} Embassy or an authorised JVAC in Dhaka. You'll fill out a visa application form, attach your documents, pay the applicable embassy and service fees, and wait for a decision. In some cases, a biometric appointment is required.
                </p>
                <h3 className="text-lg font-black text-gray-800">How Long Does the {countryName} Visa Take?</h3>
                <p>
                  Standard processing usually takes <strong className="text-gray-800">7–15 working days</strong>, though some countries are faster or slower depending on the season. We always advise applying at least 6–8 weeks before your flight to avoid last-minute stress.
                </p>
                <h3 className="text-lg font-black text-gray-800">Can Eammu Holidays Help with My {countryName} Visa?</h3>
                <p>
                  Yes — our experienced visa consultants handle the complete application process, from document review and form filling to submission and status tracking. WhatsApp us or email <strong className="text-gray-800">support@eammu.com</strong> to get started today.
                </p>
              </div>
            </section>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:col-span-4 space-y-6">
            {/* CTA */}
            <div className="bg-gray-900 rounded-[2rem] p-7 text-white sticky top-6 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl -mr-20 -mt-20" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center">
                    <MessageCircle size={20} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg leading-none">Ask Our Experts</h3>
                    <p className="text-gray-400 text-xs font-bold mt-0.5">Free consultation, reply in 2 hours</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-6">
                  Not sure what documents you need for <strong className="text-white/80">{countryName}?</strong> Our visa consultants know the latest requirements and will guide you step by step.
                </p>
                {[
                  { icon: "📈", label: "Success Rate", val: "98% Approved" },
                  { icon: "📋", label: "Service", val: "Full document review" },
                  { icon: "💬", label: "Response", val: "Within 2 hours" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 bg-white/5 border border-white/10 rounded-2xl mb-2">
                    <span className="text-lg">{s.icon}</span>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-amber-400">{s.label}</p>
                      <p className="font-black text-white text-sm">{s.val}</p>
                    </div>
                  </div>
                ))}
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 mt-4 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black transition-all shadow-xl shadow-green-900/20 active:scale-95 mb-2 group text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  WhatsApp for {countryName} Visa
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-[9px] text-center text-gray-500 font-bold">FREE ADVICE · NO UPFRONT FEES · EXPERT TEAM</p>
              </div>
            </div>

            {/* QUICK STEPS */}
            <div className="bg-white border border-gray-100 rounded-[2rem] p-7 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Plane size={20} className="text-gray-600" />
                <h3 className="font-black text-gray-900 text-lg">How to Apply — 5 Steps</h3>
              </div>
              <div className="space-y-4">
                {[
                  { n: "01", title: "Check Requirements", desc: "Confirm if Bangladesh passport needs a visa for " + countryName },
                  { n: "02", title: "Collect Documents", desc: "Gather all required papers using the checklist above" },
                  { n: "03", title: "Book Appointment", desc: "Schedule at embassy or JVAC in Dhaka" },
                  { n: "04", title: "Submit & Pay Fees", desc: "Submit in person; fees are non-refundable" },
                  { n: "05", title: "Track & Collect", desc: "Monitor status via VFS portal; collect passport when ready" },
                ].map((s, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-[10px] font-black text-amber-500 w-6 shrink-0 mt-1">{s.n}</span>
                    <div>
                      <p className="font-black text-gray-800 text-sm">{s.title}</p>
                      <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EMAIL */}
            <div className="bg-[#f5c800] rounded-[2rem] p-7 text-center">
              <div className="text-4xl mb-3">🙋</div>
              <h4 className="font-black text-xl text-black mb-2">Need Help?</h4>
              <p className="text-black/70 text-xs leading-relaxed mb-5">
                Our consultants can confirm the exact {countryName} visa requirements for your situation and handle the entire process.
              </p>
              <a href="mailto:support@eammu.com" className="block bg-black text-white py-3 rounded-xl font-black text-sm hover:bg-gray-800 transition mb-3">
                📧 support@eammu.com
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="block bg-green-600 text-white py-3 rounded-xl font-black text-sm hover:bg-green-700 transition">
                💬 WhatsApp Us Now
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="bg-gray-900 py-16 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <img src={country.flag} alt={countryName} className="w-20 h-14 object-cover rounded-xl mx-auto mb-5 shadow-xl" />
          <h2 className="text-3xl font-black text-white mb-3">Planning to Visit {countryName}?</h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-sm">Let our expert consultants guide your {countryName} visa application — the right documents, the right way, with a 98% approval rate for Bangladeshi citizens.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black transition-all text-sm">
              Start Application via WhatsApp →
            </a>
            <Link href="/visa" className="inline-flex items-center justify-center px-8 py-5 border-2 border-white/20 text-white rounded-2xl font-black hover:bg-white/10 transition-all text-sm">
              Browse All Countries
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default async function CountryVisaPage({ params }) {
  const { slug } = await params;
  const cleanSlug = slug.replace(/-visa$/, "");
  const country = countries.find(c => createSlug(c.country) === cleanSlug);

  // Country not found at all — hard 404
  if (!country) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-10">
        <div className="text-7xl mb-6">🌍</div>
        <h1 className="text-3xl font-black text-gray-900 mb-3">Country Not Found</h1>
        <p className="text-gray-500 mb-8">We couldn't find that destination. Please search again.</p>
        <Link href="/visa" className="px-8 py-4 bg-green-600 text-white rounded-2xl font-black hover:bg-green-700 transition">← Browse All Countries</Link>
      </div>
    );
  }

  const d = visadata[cleanSlug];
  const countryName = country.country;
  const whatsappMsg = encodeURIComponent(`Hi, I want to apply for a ${countryName} Visa. I checked the requirements on Eammu Holidays.`);
  const whatsappUrl = `https://wa.me/8801631312524?text=${whatsappMsg}`;

  // ── FALLBACK: country exists but no visa data yet ──
  if (!d) {
    return <FallbackVisaPage country={country} whatsappUrl={whatsappUrl} />;
  }

  // ── FULL DATA PAGE ────────────────────────────────────────────────────────
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#f8f9fb] font-sans antialiased text-[#1a1c1e]">

      {/* ── HERO ── */}
      <div className="relative bg-[#f5c800] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-5 py-16 md:py-20 relative z-10">
          <div className="flex items-center gap-2 text-sm text-black/50 font-semibold mb-8">
            <Link href="/" className="hover:text-black transition">Home</Link>
            <ChevronRight size={14} />
            <Link href="/visa" className="hover:text-black transition">Tourist Visa</Link>
            <ChevronRight size={14} />
            <span className="text-black font-bold">{countryName} Visa</span>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-black/10 backdrop-blur px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-black/70">
                  {currentYear} Embassy Protocol
                </span>
                <span className="bg-green-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                  {d.visa_category_details?.visa_type}
                </span>
                <span className="bg-white/80 text-gray-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1">
                  <Calendar size={11} /> Updated: {d.last_updated}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-black leading-tight tracking-tight mb-3">
                {countryName} Tourist Visa Requirements<br />
                <span className="text-green-700">for Bangladeshi Citizens</span>
              </h1>
              <h2 className="text-base md:text-lg font-semibold text-black/70 mb-4 leading-relaxed">{d.title}</h2>
              <p className="text-black/60 leading-relaxed text-sm mb-7 max-w-lg">{d.description}</p>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: "✅", label: "98% Success Rate" },
                  { icon: "📋", label: "Embassy Verified" },
                  { icon: "⚡", label: "24hr Document Review" },
                  { icon: "🔒", label: "Secure & Confidential" },
                ].map(b => (
                  <span key={b.label} className="flex items-center gap-1.5 bg-white/60 backdrop-blur px-3 py-2 rounded-xl text-xs font-bold text-black/70 border border-black/10">
                    {b.icon} {b.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-700" />
                <div className="relative bg-white p-3 rounded-2xl shadow-2xl overflow-hidden w-72 h-48">
                  <img src={country.flag} alt={`${countryName} flag`} className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap shadow-lg">
                  {d.visa_category_details?.main_category}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── QUICK STATS ── */}
      <div className="max-w-7xl mx-auto px-5 -mt-6 relative z-20 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: <Clock size={22} className="text-amber-500" />, label: "Processing Time", val: d.processing_time_metrics?.standard_turnaround, bg: "bg-amber-50 border-amber-100" },
            { icon: <Calendar size={22} className="text-blue-500" />, label: "Stay Duration", val: d.stay_and_validity_rules?.standard_stay, bg: "bg-blue-50 border-blue-100" },
            { icon: <ShieldCheck size={22} className="text-green-500" />, label: "Visa Validity", val: d.stay_and_validity_rules?.visa_validity_window, bg: "bg-green-50 border-green-100" },
            { icon: <Landmark size={22} className="text-purple-500" />, label: "Embassy Fee", val: d.visa_fee_structure_2026?.embassy_visa_fee, bg: "bg-purple-50 border-purple-100" },
          ].map((s, i) => (
            <div key={i} className={`${s.bg} border-2 p-5 rounded-2xl bg-white shadow-sm flex flex-col items-center text-center`}>
              <div className="mb-2">{s.icon}</div>
              <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
              <p className="text-sm font-black text-gray-800 leading-tight">{s.val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-5 pb-20">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 space-y-8">

            {/* INTRO */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-yellow-500 rounded-full" />
                <h2 className="text-2xl font-black text-gray-900">{countryName} Visa from Bangladesh — Everything You Need to Know</h2>
              </div>
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  For <strong className="text-gray-800">Bangladeshi citizens</strong>, obtaining a <strong className="text-gray-800">{countryName} tourist visa</strong> requires careful document preparation,
                  a strong financial profile, and a complete application dossier submitted to the {countryName} Embassy or the
                  designated Visa Application Centre (JVAC/VFS Global) in Dhaka.
                </p>
                <p>
                  The standard <strong className="text-gray-800">{d.visa_category_details?.visa_type}</strong> for {countryName}
                  is processed in <strong className="text-gray-800">{d.processing_time_metrics?.standard_turnaround}</strong>.
                  During peak seasons, this can extend to <strong className="text-gray-800">{d.processing_time_metrics?.peak_season_delay}</strong>.
                  We strongly recommend applying at least 6–8 weeks before your travel date.
                </p>
                <p>
                  The most common reasons Bangladeshi applicants face rejection are <strong className="text-gray-800">insufficient financial documentation</strong>,
                  a weak or missing cover letter, non-compliant photographs, and inconsistent travel itinerary dates.
                  Our expert checklist below covers every requirement in detail.
                </p>
              </div>
            </section>

            {/* DOCUMENTS */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-green-50 rounded-2xl"><CheckCircle size={26} className="text-green-600" /></div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">{countryName} Visa — Mandatory Documents</h2>
                  <p className="text-sm text-gray-400 mt-0.5">All items below are required. Missing even one causes rejection.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600 mb-5 pb-2 border-b border-gray-100">01. Primary Documents</h3>
                  <div className="space-y-3">
                    {d.comprehensive_requirements_checklist?.primary_documents.map((item, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-green-50/50 border border-green-100 rounded-2xl">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle size={12} className="text-white" />
                        </div>
                        <p className="text-sm text-gray-700 font-medium leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-5 pb-2 border-b border-gray-100">02. Financial Proof</h3>
                  <div className="space-y-3">
                    {d.comprehensive_requirements_checklist?.financial_proofs.map((item, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-blue-50/50 border border-blue-100 rounded-2xl">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle size={12} className="text-white" />
                        </div>
                        <p className="text-sm text-gray-700 font-medium leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>

                  {d.comprehensive_requirements_checklist?.logistics_proofs && (
                    <>
                      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-600 mt-8 mb-5 pb-2 border-b border-gray-100">03. Travel Logistics</h3>
                      <div className="space-y-3">
                        {d.comprehensive_requirements_checklist.logistics_proofs.map((item, i) => (
                          <div key={i} className="flex gap-3 p-4 bg-purple-50/50 border border-purple-100 rounded-2xl">
                            <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle size={12} className="text-white" />
                            </div>
                            <p className="text-sm text-gray-700 font-medium leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {d.comprehensive_requirements_checklist?.occupation_specific && (
                <div className="border-t border-gray-100 pt-8">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">04. Occupation-Specific Documents</h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(d.comprehensive_requirements_checklist.occupation_specific).map(([role, items]) => (
                      <div key={role} className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
                        <h4 className="text-xs font-black text-gray-700 uppercase tracking-wider mb-3 capitalize">{role.replace(/_/g, " ")}</h4>
                        <ul className="space-y-2">
                          {items.map((item, i) => (
                            <li key={i} className="text-xs text-gray-500 flex gap-2 leading-relaxed">
                              <span className="text-green-500 shrink-0 mt-0.5">✓</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* PHOTO + ITINERARY */}
            <div className="grid md:grid-cols-2 gap-6">
              <section className="bg-gradient-to-br from-rose-50 to-red-50 border border-red-100 rounded-[2rem] p-8 relative overflow-hidden">
                <Camera className="absolute top-6 right-6 text-red-200" size={80} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 bg-red-100 rounded-xl"><Camera size={22} className="text-red-600" /></div>
                    <h2 className="text-xl font-black text-gray-900">Photo Specifications</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-red-100">
                      <p className="text-[9px] font-black uppercase tracking-widest text-red-400 mb-1">Size</p>
                      <p className="text-lg font-black text-gray-800 font-mono">{d.technical_photo_specifications?.dimensions}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-red-100">
                      <p className="text-[9px] font-black uppercase tracking-widest text-red-400 mb-1">Background</p>
                      <p className="text-base font-bold text-gray-800">{d.technical_photo_specifications?.background_color}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-red-100">
                      <p className="text-[9px] font-black uppercase tracking-widest text-red-400 mb-1">Standard</p>
                      <p className="text-xs font-bold text-gray-700">{d.technical_photo_specifications?.standard}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-red-100">
                      <p className="text-[9px] font-black uppercase tracking-widest text-red-400 mb-1">Face Size</p>
                      <p className="text-xs font-bold text-gray-700">{d.technical_photo_specifications?.facial_metrics}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-red-500 mb-3">❌ Strictly Prohibited</p>
                    <div className="space-y-2">
                      {d.technical_photo_specifications?.strict_donots?.map((no, i) => (
                        <div key={i} className="flex gap-2 text-xs text-red-700 font-medium bg-red-100 rounded-lg px-3 py-2">
                          <span className="shrink-0">✕</span> {no}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-orange-50 rounded-xl"><Map size={22} className="text-orange-600" /></div>
                  <h2 className="text-xl font-black text-gray-900">Itinerary Strategy</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-5 bg-amber-50 border-2 border-amber-200 rounded-2xl">
                    <p className="text-[9px] font-black uppercase tracking-widest text-amber-600 mb-2">⭐ Recommended Route</p>
                    <p className="font-black text-gray-800 text-lg">{d.itinerary_design_strategy?.golden_route}</p>
                  </div>
                  {d.itinerary_design_strategy?.regional_focus && (
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Seasonal Focus</p>
                      <p className="text-sm font-bold text-gray-700">{d.itinerary_design_strategy.regional_focus}</p>
                    </div>
                  )}
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="text-[9px] font-black uppercase tracking-widest text-blue-500 mb-1">📌 Embassy Rule</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{d.itinerary_design_strategy?.requirements}</p>
                  </div>
                </div>
              </section>
            </div>

            {/* JVAC CENTERS */}
            {d.geospatial_submission_data?.length > 0 && (
              <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 bg-blue-50 rounded-xl"><MapPin size={22} className="text-blue-600" /></div>
                  <div>
                    <h2 className="text-2xl font-black text-gray-900">Official JVAC Submission Centers</h2>
                    <p className="text-sm text-gray-400 mt-0.5">Where to submit your {countryName} visa application in Bangladesh</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {d.geospatial_submission_data.map((loc, i) => (
                    <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                          <MapPin size={16} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-black text-gray-900">{loc.center}</h4>
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed">{loc.address}</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-gray-100 space-y-2 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-gray-500">Submission Hours</span>
                          <span className="font-black text-gray-800">{loc.submission_hours}</span>
                        </div>
                        {loc.passport_collection && (
                          <div className="flex justify-between items-center border-t pt-2">
                            <span className="font-bold text-gray-500">Passport Collection</span>
                            <span className="font-black text-gray-800">{loc.passport_collection}</span>
                          </div>
                        )}
                        {loc.gps_coordinates && (
                          <div className="pt-2 border-t">
                            <span className="text-[9px] text-gray-400 font-bold">GPS: {loc.gps_coordinates}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* EXPERT HACKS */}
            <section className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
              <Lightbulb className="absolute -bottom-8 -right-8 text-amber-200/60" size={180} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 bg-amber-100 rounded-xl"><Lightbulb size={22} className="text-amber-600" /></div>
                  <div>
                    <h2 className="text-2xl font-black text-gray-900">{countryName} Visa Approval Tips</h2>
                    <p className="text-sm text-gray-500 mt-0.5">Insider tips from our consultants — what embassies actually look for</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {d.expert_approval_hacks?.map((hack, i) => (
                    <div key={i} className="bg-white rounded-2xl p-5 flex gap-4 shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
                      <span className="text-2xl font-black text-amber-200 shrink-0">0{i + 1}</span>
                      <p className="text-sm text-gray-700 font-medium leading-relaxed">{hack}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* REJECTION RISKS */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-red-50 rounded-xl"><AlertTriangle size={22} className="text-red-600" /></div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">{countryName} Visa Rejection Risks</h2>
                  <p className="text-sm text-gray-400 mt-0.5">Why Bangladeshi applicants get rejected — and how to avoid it</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {d.rejection_risk_matrix?.high_risk?.map((risk, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
                    <span className="text-red-400 shrink-0 font-black text-lg leading-none">●</span>
                    <p className="text-sm text-red-800 font-medium leading-relaxed">{risk}</p>
                  </div>
                ))}
                {d.rejection_risk_matrix?.medium_risk?.map((risk, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-amber-50 border border-amber-100 rounded-xl">
                    <span className="text-amber-400 shrink-0 font-black text-lg leading-none">◐</span>
                    <p className="text-sm text-amber-800 font-medium leading-relaxed">{risk}</p>
                  </div>
                ))}
              </div>
              <div className="p-5 bg-green-50 border border-green-200 rounded-2xl">
                <p className="text-xs font-black text-green-700 uppercase tracking-wider mb-2">✅ Mitigation Strategy</p>
                <p className="text-sm text-green-800 font-medium leading-relaxed">{d.rejection_risk_matrix?.mitigation}</p>
              </div>
            </section>

            {/* ADDITIONAL LOGISTICS */}
            {d.additional_logistics_2026 && (
              <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-gray-100 rounded-xl"><Info size={22} className="text-gray-600" /></div>
                  <h2 className="text-2xl font-black text-gray-900">Essential {countryName} {currentYear} Logistics</h2>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {Object.entries(d.additional_logistics_2026).map(([key, val]) => (
                    <div key={key} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2 capitalize">{key.replace(/_/g, " ")}</p>
                      <p className="text-sm text-gray-700 font-medium leading-relaxed">{val}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* YOUTUBE */}
            {d.youtube_video_options?.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-black text-gray-900">{countryName} Visa — Watch & Learn</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  {d.youtube_video_options.map((video, i) => {
                    const videoId = video.video_link?.split("v=")[1]?.split("&")[0];
                    const thumb = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
                    return (
                      <a key={i} href={video.video_link} target="_blank" rel="noopener noreferrer"
                        className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="relative aspect-video bg-gray-100 overflow-hidden">
                          {thumb && <img src={thumb} alt={video.video_title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 flex items-center justify-center transition-all">
                            <div className="w-14 h-14 bg-amber-400 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                              <svg className="w-6 h-6 fill-white ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="font-black text-sm text-gray-800 group-hover:text-amber-600 transition-colors line-clamp-2 mb-2">{video.video_title}</h3>
                          <span className="text-xs font-bold text-gray-400 group-hover:text-amber-500 transition-colors">Watch on YouTube →</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </section>
            )}

            {/* FAQ */}
            {d.faq_extended?.length > 0 && (
              <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 bg-purple-50 rounded-xl"><HelpCircle size={22} className="text-purple-600" /></div>
                  <div>
                    <h2 className="text-2xl font-black text-gray-900">Frequently Asked Questions — {countryName} Visa from Bangladesh</h2>
                    <p className="text-sm text-gray-400 mt-0.5">Real questions from Bangladeshi travelers applying for {countryName} visa</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {d.faq_extended.map((item, i) => (
                    <details key={i} className="group bg-gray-50 border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-amber-300 transition-all">
                      <summary className="list-none flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50">
                        <span className="font-black text-gray-800 pr-4 leading-snug text-sm">
                          <span className="text-amber-500 mr-2">Q.</span>{item.question}
                        </span>
                        <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shrink-0 group-open:bg-amber-400 group-open:border-amber-400 transition-all duration-300">
                          <ChevronRight size={14} className="text-gray-500 group-open:text-white rotate-90" />
                        </div>
                      </summary>
                      <div className="px-6 pb-6 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 ml-8">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* SEO FOOTER ARTICLE */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full" />
                <h2 className="text-2xl font-black text-gray-900">{countryName} Visa for Bangladesh — {currentYear} Complete Guide</h2>
              </div>
              <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
                <p>
                  Applying for a <strong className="text-gray-800">{countryName} visa from Bangladesh</strong> involves submitting a comprehensive
                  document package to the {countryName} Embassy or JVAC Dhaka. The {d.visa_category_details?.visa_type} is the most common
                  category for Bangladeshi tourists and is valid for <strong className="text-gray-800">{d.stay_and_validity_rules?.standard_stay}</strong>.
                </p>
                <h3 className="text-lg font-black text-gray-800">{countryName} Visa Fee for Bangladeshi Citizens — {currentYear}</h3>
                <p>
                  The current {countryName} embassy visa fee is <strong className="text-gray-800">{d.visa_fee_structure_2026?.embassy_visa_fee}</strong>.
                  VFS Global service charge adds <strong className="text-gray-800">{d.visa_fee_structure_2026?.vfs_service_charge}</strong>.
                  All fees are <strong className="text-gray-800">non-refundable</strong> regardless of visa outcome.
                  Payment is accepted in cash and by card at the JVAC.
                </p>
                <h3 className="text-lg font-black text-gray-800">Bank Balance Required for {countryName} Visa from Bangladesh</h3>
                <p>
                  Applicants should maintain a minimum bank balance of <strong className="text-gray-800">{d.financial_thresholds_2026?.solo_traveler_min}</strong> for
                  solo travel, with a recommended balance of <strong className="text-gray-800">{d.financial_thresholds_2026?.solo_traveler_recommended}</strong>.
                  Family travelers should have at least <strong className="text-gray-800">{d.financial_thresholds_2026?.family_travel_min}</strong>.
                  Avoid large last-minute deposits — embassy officers specifically flag these as red signals.
                </p>
                <h3 className="text-lg font-black text-gray-800">{countryName} Visa Photo Size for Bangladeshi Applicants</h3>
                <p>
                  Photos must be exactly <strong className="text-gray-800">{d.technical_photo_specifications?.dimensions}</strong>
                  ({d.technical_photo_specifications?.standard}). Background must be <strong className="text-gray-800">{d.technical_photo_specifications?.background_color}</strong>.
                  Non-compliant photos are the #1 administrative rejection reason. Our photo verification service ensures 100% compliance.
                </p>
              </div>
            </section>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:col-span-4 space-y-6">

            {/* CTA */}
            <div className="bg-gray-900 rounded-[2rem] p-7 text-white sticky top-6 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl -mr-20 -mt-20" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center">
                    <Phone size={22} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg">Fast-Track Apply</h3>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Expert Consultant</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  {[
                    { icon: "⏱️", label: "Processing Time", val: d.processing_time_metrics?.standard_turnaround },
                    { icon: "🏛️", label: "Submission Center", val: "JVAC / Embassy Dhaka" },
                    { icon: "📈", label: "Our Success Rate", val: "98% Approved" },
                    { icon: "💬", label: "Response Time", val: "Within 2 hours" },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
                      <span className="text-xl">{s.icon}</span>
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-amber-400">{s.label}</p>
                        <p className="font-black text-white text-sm">{s.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-5 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black transition-all shadow-xl shadow-green-900/20 active:scale-95 mb-3 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  Apply via WhatsApp
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-[9px] text-center text-gray-500 font-bold">FREE CONSULTATION · NO UPFRONT PAYMENT · 24/7 TEAM</p>
              </div>
            </div>

            {/* COST BREAKDOWN */}
            <div className="bg-amber-50 border-2 border-amber-100 rounded-[2rem] p-7">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard size={20} className="text-amber-600" />
                <h3 className="font-black text-gray-900 text-lg">{currentYear} Cost Breakdown</h3>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-amber-100">
                  <span className="text-sm text-gray-600 font-semibold">Embassy Fee</span>
                  <span className="font-black text-gray-900">{d.visa_fee_structure_2026?.embassy_visa_fee}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-amber-100">
                  <span className="text-sm text-gray-600 font-semibold">VFS Service Charge</span>
                  <span className="font-black text-gray-900">{d.visa_fee_structure_2026?.vfs_service_charge}</span>
                </div>
                {d.visa_fee_structure_2026?.optional_value_added_services && (
                  <div className="pt-2">
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-3">Optional Add-ons</p>
                    {Object.entries(d.visa_fee_structure_2026.optional_value_added_services).map(([k, v]) => (
                      <div key={k} className="flex justify-between text-xs py-1.5">
                        <span className="text-gray-500 capitalize">{k.replace(/_/g, " ")}</span>
                        <span className="font-bold text-gray-700">{v}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="bg-amber-100 rounded-xl p-3 text-xs text-amber-800 font-bold text-center">
                ⚠️ {d.visa_fee_structure_2026?.payment_policy}
              </div>
            </div>

            {/* TIMELINE */}
            <div className="bg-white border border-gray-100 rounded-[2rem] p-7 shadow-sm">
              <div className="flex items-center gap-2 mb-7">
                <Clock size={20} className="text-gray-600" />
                <h3 className="font-black text-gray-900 text-lg">Processing Timeline</h3>
              </div>
              <div className="space-y-5 relative">
                <div className="absolute left-[13px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-green-400 via-amber-400 to-orange-400" />
                {[
                  { label: "Standard Turnaround", time: d.processing_time_metrics?.standard_turnaround, color: "bg-green-500" },
                  { label: "Embassy Review Phase", time: d.processing_time_metrics?.embassy_review_phase, color: "bg-blue-500" },
                  { label: "Peak Season Delay", time: d.processing_time_metrics?.peak_season_delay, color: "bg-orange-500" },
                  ...(d.processing_time_metrics?.express_service ? [{ label: "Express Option", time: d.processing_time_metrics.express_service, color: "bg-purple-500" }] : []),
                ].map((item, i) => (
                  <div key={i} className="relative pl-9">
                    <div className={`absolute left-0 top-1.5 w-7 h-7 rounded-full ${item.color} border-4 border-white shadow-md flex items-center justify-center`}>
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <p className="text-[9px] uppercase font-black text-gray-400 tracking-widest">{item.label}</p>
                    <p className="font-black text-gray-800 text-sm">{item.time}</p>
                  </div>
                ))}
              </div>
              {d.processing_time_metrics?.notes && (
                <div className="mt-5 p-3 bg-blue-50 rounded-xl border border-blue-100 text-xs text-blue-700 font-medium leading-relaxed">
                  ℹ️ {d.processing_time_metrics.notes}
                </div>
              )}
            </div>

            {/* BANK BALANCE */}
            <div className="bg-blue-600 rounded-[2rem] p-7 text-white shadow-xl shadow-blue-200">
              <div className="flex items-center gap-2 mb-5">
                <CreditCard size={20} />
                <h3 className="font-black text-lg">Minimum Bank Balance</h3>
              </div>
              <div className="text-5xl font-black mb-1 text-amber-300">{d.financial_thresholds_2026?.solo_traveler_min}</div>
              <p className="text-blue-100 text-sm mb-4">Recommended: <strong>{d.financial_thresholds_2026?.solo_traveler_recommended}</strong></p>
              <div className="grid grid-cols-1 gap-2 mb-5 text-xs">
                <div className="bg-white/10 rounded-xl p-3">
                  <p className="text-blue-200 font-bold">Family Travel</p>
                  <p className="font-black">{d.financial_thresholds_2026?.family_travel_min}</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <p className="text-blue-200 font-bold">Calculation Logic</p>
                  <p className="font-bold text-blue-100">{d.financial_thresholds_2026?.logic}</p>
                </div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 flex gap-2 text-xs">
                <AlertTriangle size={14} className="shrink-0 mt-0.5" />
                <p className="leading-relaxed">{d.financial_thresholds_2026?.warning}</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="bg-[#f5c800] rounded-[2rem] p-7 text-center">
              <div className="text-5xl mb-4">🙋</div>
              <h4 className="font-black text-xl text-black mb-2">Need Help?</h4>
              <p className="text-black/70 text-sm leading-relaxed mb-5">
                Our experts handle form-filling, photo verification & document review for {countryName} visa applications.
              </p>
              <a href="mailto:support@eammu.com" className="block bg-black text-white py-3 rounded-xl font-black text-sm hover:bg-gray-800 transition mb-3">
                📧 support@eammu.com
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="block bg-green-600 text-white py-3 rounded-xl font-black text-sm hover:bg-green-700 transition">
                💬 WhatsApp Us Now
              </a>
            </div>

          </aside>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="bg-gray-900 py-16 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <img src={country.flag} alt={countryName} className="w-20 h-14 object-cover rounded-xl mx-auto mb-5 shadow-xl" />
          <h2 className="text-3xl font-black text-white mb-3">Ready to Apply for Your {countryName} Visa?</h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-sm">Let our experts handle your complete application — correctly, on time, and with a 98% success rate for Bangladeshi citizens.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black transition-all text-sm">
              Start Application via WhatsApp →
            </a>
            <Link href="/visa" className="inline-flex items-center justify-center px-8 py-5 border-2 border-white/20 text-white rounded-2xl font-black hover:bg-white/10 transition-all text-sm">
              Browse Other Countries
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
