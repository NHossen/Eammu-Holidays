// /app/travel-resources/visa-processing-time-tracker/[slug]/_client.jsx
// ── NO "use client" at the top — this is now a SERVER COMPONENT ──────────
// Interactive islands are split into separate tiny client components below.

import Link from "next/link";
import {
  Clock, AlertCircle, CheckCircle2, ChevronRight, ArrowLeft,
  Calendar, Timer, Zap, Info, TrendingUp, FileText,
  AlertTriangle, Globe, Phone, ExternalLink, ChevronDown
} from "lucide-react";
import COUNTRIES from "@/app/data/countries.json";
import { VisaTypeSwitcher } from "@/Components/Client/VisaProcessingSlugPage/VisaTypeSwitcher/VisaTypeSwitcher";
import { ReverseCalculator } from "@/Components/Client/VisaProcessingSlugPage/ReverseCalculator/ReverseCalculator";


// ── FULL VISA RULES (including Transit) ───────────────────────────────────
const VISA_RULES = {
  canada: {
    name: "Canada", flag: "🇨🇦",
    types: {
      "e-visa":           { min:2,  max:4,   label:"eTA (Electronic Travel Authorization)" },
      "sticker":          { min:15, max:21,  label:"Temporary Resident Visa (TRV)" },
      "sticker-extended": { min:45, max:60,  label:"TRV (Complex / Administrative Processing)" },
      "transit":          { min:6,  max:24,  unit:"hours", label:"Canada Transit Visa" },
    },
    embassyUrl: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    notes: [
      "Biometrics required for most nationalities — must be submitted in person at a VAC",
      "IRCC online portal may show 'Decision Made' 24–48 hrs before physical stamp arrives",
      "Summer months (Jun–Aug) and December add 5–10 business days on average",
      "Students and workers have different processing streams — may be faster or slower",
      "Transit visa (6–24 hrs) is required for Bangladeshi, Pakistani, and several other nationals at Canadian airports",
    ],
    delayReasons: [
      "Background security check (GCMS notes often silent on exact reason)",
      "Additional documents requested via procedural fairness letter",
      "High application volume from Bangladesh, India, Pakistan during peak months",
      "Missing or inconsistent financial proof / travel history gaps",
      "Biometrics not submitted — application put on hold",
    ],
    tips: [
      "Apply at least 8–10 weeks before your intended travel date",
      "Use IRCC's online portal for faster processing vs paper application",
      "Include a strong cover letter clearly explaining ties to home country",
      "Bank statements must show consistent balance for the last 6 months",
      "For transit visa, confirm your layover duration and airline before applying",
    ],
  },
  "united-states": {
    name: "United States", flag: "🇺🇸",
    types: {
      "e-visa":           { min:3,  max:5,   label:"ESTA (Visa Waiver Program)" },
      "sticker":          { min:21, max:60,  label:"B1/B2 Tourist/Business Visa" },
      "sticker-extended": { min:60, max:180, label:"Administrative Processing (221g)" },
      "transit":          { min:6,  max:24,  unit:"hours", label:"C-1 Transit Visa" },
    },
    embassyUrl: "https://travel.state.gov/content/travel/en/us-visas.html",
    notes: [
      "Interview appointment wait times vary greatly — Dhaka embassy often 60–90 days wait",
      "DS-160 form must be completed online before scheduling interview",
      "ESTA only available for 40 Visa Waiver Program countries — not Bangladesh",
      "221(g) administrative processing has no fixed timeline — can take months",
      "C-1 Transit visa needed if you change planes in a US airport without cleared status",
    ],
    delayReasons: [
      "221(g) administrative processing — unpredictable security review period",
      "High demand and long appointment backlogs at South Asian consulates",
      "Prior visa refusals increase scrutiny and processing time significantly",
      "Travel history to certain countries may trigger security review",
      "Incomplete or inconsistent documentation",
    ],
    tips: [
      "Schedule your interview the moment your travel is confirmed — slots fill fast",
      "Strong employment letter and 3–6 months pay stubs significantly help approval",
      "Bring original documents — copies alone may cause interview complications",
      "Previous US visa holders often get faster processing and easier approval",
      "For C-1 transit, apply at least 3–4 weeks before your transit date",
    ],
  },
  "united-kingdom": {
    name: "United Kingdom", flag: "🇬🇧",
    types: {
      "e-visa":           { min:3,  max:5,  label:"eVisa (UK digital visa)" },
      "sticker":          { min:15, max:21, label:"Standard Visitor Visa" },
      "sticker-extended": { min:30, max:60, label:"Priority / Complex Case" },
      "transit":          { min:6,  max:24, unit:"hours", label:"Direct Airside Transit Visa (DATV)" },
    },
    embassyUrl: "https://www.gov.uk/apply-uk-visa",
    notes: [
      "UK switched to digital eVisa in 2024 — physical vignette stickers phased out",
      "UKVI online account required to prove permission to enter the UK",
      "Biometrics collected at Visa Application Centre (VFS Global)",
      "Priority service (extra fee) cuts standard time to 5 business days",
      "DATV (Direct Airside Transit Visa) required for Bangladeshi, Pakistani, Ghanaian and several other nationalities even for short UK layovers",
    ],
    delayReasons: [
      "Incomplete travel history documentation or gaps unexplained",
      "Financial evidence not meeting the required threshold",
      "Gaps in employment history require detailed explanation letters",
      "Deferred decision — Home Office may request further evidence (Section 120)",
      "Incorrect or missing biometrics submission",
    ],
    tips: [
      "Apply no more than 3 months before travel — applications opened too early may be rejected",
      "Use the priority service if your travel is within 4 weeks",
      "Include strong evidence of accommodation, detailed itinerary, and return ticket",
      "An employer letter on company letterhead with salary details is essential",
      "DATV holders must remain in the international transit zone — no entry to UK",
    ],
  },
  schengen: {
    name: "Schengen Area", flag: "🇪🇺",
    types: {
      "e-visa":           { min:5,  max:10, label:"ETIAS (From 2025)" },
      "sticker":          { min:15, max:30, label:"Schengen Short-Stay Visa (C Visa)" },
      "sticker-extended": { min:45, max:90, label:"Complex Case / Document Request" },
      "transit":          { min:6,  max:24, unit:"hours", label:"Airport Transit Visa (ATV)" },
    },
    embassyUrl: "https://ec.europa.eu/home-affairs/what-we-do/policies/borders-and-visas_en",
    notes: [
      "Apply at the embassy of the country where you'll spend the most time",
      "Maximum stay is 90 days within any 180-day rolling period",
      "Travel insurance with minimum €30,000 coverage is mandatory",
      "Some consulates use VFS Global or TLScontact for appointment booking",
      "Airport Transit Visa (ATV) required for specific nationalities transiting Schengen airports without entering the zone",
    ],
    delayReasons: [
      "Incomplete or inconsistent itinerary and hotel bookings",
      "Insufficient financial proof (min €50–100/day of stay recommended)",
      "Hotel bookings not in applicant's name or non-refundable bookings suspicious",
      "Previous Schengen refusals significantly slow down new applications",
      "Missing travel insurance or insufficient coverage amount",
    ],
    tips: [
      "Apply 3–6 weeks in advance (no earlier than 6 months before travel)",
      "Book refundable hotels and flexible flights specifically for the application",
      "Show strong bank balance — ideally 3× the estimated trip cost",
      "A prior Schengen visa record significantly improves future approval chances",
      "ATV applicants must remain in the international zone — not allowed into Schengen territory",
    ],
  },
  australia: {
    name: "Australia", flag: "🇦🇺",
    types: {
      "e-visa":           { min:1,  max:3,   label:"ETA / eVisitor (Subclass 601/651)" },
      "sticker":          { min:20, max:35,  label:"Visitor Visa (Subclass 600)" },
      "sticker-extended": { min:60, max:120, label:"Complex Health/Character Check" },
      "transit":          { min:6,  max:24,  unit:"hours", label:"Transit Visa (Subclass 771)" },
    },
    embassyUrl: "https://immi.homeaffairs.gov.au/",
    notes: [
      "All Australian visas are fully digital — no physical stamp or sticker issued",
      "ImmiAccount portal tracks real-time application status with document requests",
      "Health examination required for stays over 12 months or specific health conditions",
      "Character requirements apply — police clearance may be needed for some nationalities",
      "Subclass 771 Transit Visa required for some nationalities transiting Australian airports",
    ],
    delayReasons: [
      "Health examination results pending or referral to Medical Officer of Commonwealth",
      "Character assessment or police certificate requested",
      "High application volume from South and Southeast Asian nationalities",
      "Sponsor or host verification delays for visitor visa streams",
      "Genuine Temporary Entrant (GTE) concerns",
    ],
    tips: [
      "Submit complete health exam results upfront if medical is likely required",
      "The 600 visa can be applied for up to 12 months in advance of travel",
      "Keep ImmiAccount notifications active — document requests expire in 28 days",
      "A convincing GTE (Genuine Temporary Entrant) statement is the most critical document",
      "771 transit visa processing: apply at least 2 weeks before transit date",
    ],
  },
  "united-arab-emirates": {
    name: "United Arab Emirates", flag: "🇦🇪",
    types: {
      "e-visa":           { min:2,  max:4,  label:"UAE e-Visa (Tourist/Visit)" },
      "sticker":          { min:5,  max:10, label:"Visa on Arrival / Embassy Visa" },
      "sticker-extended": { min:15, max:30, label:"Complex / Employment Visa" },
      "transit":          { min:6,  max:24, unit:"hours", label:"UAE Transit Visa (96-hour)" },
    },
    embassyUrl: "https://icp.gov.ae/",
    notes: [
      "Most nationalities can apply online via icp.gov.ae or reputable travel agents",
      "30-day and 60-day tourist visas often approved within 48 hours",
      "Emirates and Etihad offer integrated visa-on-booking for passengers",
      "No medical required for tourist visas under 90 days",
      "96-hour transit visa available for travelers connecting through Dubai or Abu Dhabi",
    ],
    delayReasons: [
      "Criminal record or previous overstay in any GCC country",
      "Name mismatch or inconsistency across passport and booking documents",
      "Expired or near-expiry passport (must have 6+ months validity)",
      "High application volume during Ramadan, Eid, and Dubai Shopping Festival",
      "Background check delays for certain nationalities",
    ],
    tips: [
      "Apply 3–5 days before travel for e-visa — processing is very fast",
      "Use Dubai Tourism official portal or established travel agents only",
      "Ensure passport photo meets UAE-specific background and size requirements",
      "96-hour transit visa can be extended to allow Dubai city access between flights",
      "Travel insurance is not mandatory for UAE but strongly recommended",
    ],
  },
  germany: {
    name: "Germany", flag: "🇩🇪",
    types: {
      "sticker":          { min:15, max:21, label:"National Visa / Schengen Visa" },
      "sticker-extended": { min:45, max:90, label:"Complex Case / Student Visa" },
      "transit":          { min:6,  max:24, unit:"hours", label:"Airport Transit Visa (TATV)" },
    },
    embassyUrl: "https://www.germany-visa.org/",
    notes: [
      "APS Certificate (Academic Evaluation Centre) required for Bangladeshi students",
      "Blocked account (Sperrkonto) with €11,208/year required for student visas",
      "Visa appointments at German embassies can be 4–8 weeks ahead — book early",
      "TATV (Temporary Airport Transit Visa) required for Bangladeshis transiting Frankfurt, Munich",
    ],
    delayReasons: [
      "APS or document authentication pending",
      "Blocked account not yet funded or certificate not received",
      "University enrollment proof not meeting German standards",
      "High application volume — German embassies in South Asia handle large numbers",
    ],
    tips: [
      "Start your blocked account process 6–8 weeks before application",
      "Book your appointment as soon as you have your university acceptance",
      "For TATV: apply 3–4 weeks before your German transit to allow processing",
      "German language skills (even basic) significantly strengthen non-language course applications",
    ],
  },
  france: {
    name: "France", flag: "🇫🇷",
    types: {
      "e-visa":           { min:5,  max:10, label:"ETIAS (from 2025)" },
      "sticker":          { min:15, max:30, label:"Schengen C Visa / Long-Stay D Visa" },
      "sticker-extended": { min:45, max:90, label:"Complex Case" },
      "transit":          { min:6,  max:24, unit:"hours", label:"Airport Transit Visa (ATV)" },
    },
    embassyUrl: "https://france-visas.gouv.fr/",
    notes: [
      "Campus France pre-registration required for student visa applicants",
      "Long-stay D visa (over 3 months) requires OFII registration on arrival",
      "VFS Global handles biometrics for French visa applications in most countries",
      "ATV required for Bangladeshi, Pakistani, Nigerian nationals transiting French airports",
    ],
    delayReasons: [
      "Campus France evaluation pending",
      "Insufficient financial proof per day of stay",
      "Travel insurance not meeting minimum €30,000 coverage",
      "Hotel bookings not confirmed or inconsistent with itinerary",
    ],
    tips: [
      "Complete Campus France pre-registration at least 6 weeks before applying",
      "Book refundable hotels for application — switch to actual booking after visa approval",
      "Show strong bank balance and employment evidence for tourist visas",
      "ATV applicants must stay in the international transit zone — no entry to France",
    ],
  },
  "saudi-arabia": {
    name: "Saudi Arabia", flag: "🇸🇦",
    types: {
      "e-visa":           { min:2,  max:4,  label:"Saudi e-Visa (Tourist)" },
      "sticker":          { min:10, max:21, label:"Saudi Sticker Visa" },
      "sticker-extended": { min:30, max:60, label:"Work Visa / Iqama" },
      "transit":          { min:6,  max:24, unit:"hours", label:"Saudi Transit Visa" },
    },
    embassyUrl: "https://visa.mofa.gov.sa/",
    notes: [
      "Saudi tourist e-visa available for 50+ nationalities through Tawakkalna",
      "Women under 21 require guardian's consent documentation",
      "Iqama (residence permit) required for work visa holders within 90 days of arrival",
      "Medical examination at MOH-approved centers required for employment visas",
    ],
    delayReasons: [
      "Ministry of Foreign Affairs manual review for certain nationalities",
      "Sponsor delays for employment or family visit visas",
      "Medical fitness certificate not from approved Saudi MOH center",
      "Attested educational certificates not meeting Saudi standards",
    ],
    tips: [
      "Use Tawakkalna or Enjazit official portals only for visa applications",
      "Ensure all documents are attested through proper channels (MFA, Saudi Embassy)",
      "Medical examination must be done at MOH-approved center in your home country",
      "Transit visa applicants should confirm their transit airport and layover duration",
    ],
  },
  singapore: {
    name: "Singapore", flag: "🇸🇬",
    types: {
      "e-visa":           { min:3,  max:5,  label:"Singapore e-Visa (SAVE)" },
      "sticker":          { min:7,  max:14, label:"Singapore Visit Visa" },
      "sticker-extended": { min:21, max:45, label:"Employment Pass / S-Pass" },
      "transit":          { min:6,  max:24, unit:"hours", label:"Transit Without Visa / Transit Visa" },
    },
    embassyUrl: "https://www.ica.gov.sg/",
    notes: [
      "Most visa applications submitted through ICA (Immigration and Checkpoints Authority)",
      "Singapore Employment Pass requires monthly salary above SGD 5,000",
      "In-Principle Approval (IPA) letter issued first, then physical pass on arrival",
      "Many nationalities can transit Singapore without a visa for short layovers",
    ],
    delayReasons: [
      "Salary assessment for EP/S-Pass below Fair Consideration Framework guidelines",
      "Previous immigration violations in Singapore or ASEAN countries",
      "Incomplete company sponsorship documentation for employment visas",
      "Background check delays for certain nationalities",
    ],
    tips: [
      "Student visa holders must complete STP (Student's Pass) formalities within 30 days",
      "Employment Pass applications: submit all educational credentials upfront",
      "Check Singapore TVWP (Transit Without Visa) eligibility before assuming you need a visa",
      "Keep ICA online portal notifications on for document requests",
    ],
  },
  japan: {
    name: "Japan", flag: "🇯🇵",
    types: {
      "sticker":          { min:5,  max:7,  label:"Japan Tourist Visa" },
      "sticker-extended": { min:21, max:45, label:"Japan Long-Stay / Work Visa" },
      "transit":          { min:6,  max:24, unit:"hours", label:"Japan Shore Pass / Transit" },
    },
    embassyUrl: "https://www.mofa.go.jp/j_info/visit/visa/",
    notes: [
      "Japanese embassy does not do interviews — application submitted through embassy or agent",
      "All Japan visas are sticker visas — no e-visa system for most nationalities",
      "Financial documents must be translated into Japanese or English",
      "Japan transit (shore pass or transit without visa) available for short layovers at specified airports",
    ],
    delayReasons: [
      "Insufficient financial documentation or inconsistent bank statements",
      "Travel history raises concerns about overstay risk",
      "Incomplete itinerary or hotel bookings",
      "Previous Japan visa refusal significantly impacts new applications",
    ],
    tips: [
      "Include a highly detailed day-by-day itinerary — Japan embassies love specifics",
      "Book hotels before applying — cancellable bookings are acceptable",
      "Apply 3–4 weeks in advance; peak season adds 3–5 business days",
      "Strong bank statement and employer letter are the two most critical documents",
    ],
  },
};

// ── GENERIC FALLBACK ───────────────────────────────────────────────────────
function getCountryData(destSlug) {
  const key = Object.keys(VISA_RULES).find(k => destSlug.includes(k));
  if (key) return { key, ...VISA_RULES[key] };
  const destName = destSlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return {
    key: "generic",
    name: destName,
    flag: "🌍",
    types: {
      "e-visa":           { min:2,  max:5,  label:"E-Visa (Online)" },
      "sticker":          { min:15, max:21, label:"Sticker Visa" },
      "sticker-extended": { min:45, max:60, label:"Complex / Extended Processing" },
      "transit":          { min:6,  max:24, unit:"hours", label:"Transit Visa" },
    },
    embassyUrl: null,
    notes: [
      "Processing times are estimates based on typical embassy timelines",
      "Always verify with the official embassy or consulate of the destination country",
      "Apply well in advance — at least 6–8 weeks before travel for sticker visas",
      "Transit visa (6–24 hours): confirm with your airline and destination embassy",
    ],
    delayReasons: [
      "Incomplete or inconsistent documentation",
      "High application volume or peak seasonal demand",
      "Additional security or background checks",
      "Administrative processing delays at the embassy",
    ],
    tips: [
      "Submit a complete, well-organized application package with all required documents",
      "Include a strong cover letter and detailed supporting documents",
      "Track your application status regularly via the official portal",
      "Contact the embassy if no update is received after the maximum stated timeframe",
    ],
  };
}

// ── VISA TYPE CONFIG ────────────────────────────────────────────────────────
const VISA_TYPE_LABELS = {
  "e-visa":           { label:"E-Visa",      color:"bg-emerald-100 text-emerald-800 border-emerald-200" },
  "sticker":          { label:"Sticker Visa", color:"bg-blue-100 text-blue-800 border-blue-200"         },
  "sticker-extended": { label:"Complex Case", color:"bg-amber-100 text-amber-800 border-amber-200"      },
  "transit":          { label:"Transit Visa", color:"bg-purple-100 text-purple-800 border-purple-200"   },
};

// ── MAIN SERVER COMPONENT ──────────────────────────────────────────────────
// params and searchParams are now plain server props (Next.js 13/14 App Router)
export default async function VisaProcessingSlugPage({ params, searchParams }) {
  // In Next.js 14 App Router, params & searchParams are plain objects — no hooks needed.
  const slug          = params?.slug || "";
  const visaTypeParam = searchParams?.type || "sticker";

  // ── Parse nationality / destination from slug ──────────────────────────
  const marker = "-national-visa-processing-time-for-";
  const idx    = slug.indexOf(marker);
  const [nationalitySlug, destinationSlug] =
    idx === -1
      ? [slug, "unknown"]
      : [slug.slice(0, idx), slug.slice(idx + marker.length)];

  // ── Resolve nationality name from countries list ────────────────────────
  const found = COUNTRIES.find(
    c => c.country.toLowerCase().replace(/\s+/g, "-") === nationalitySlug
  );
  const nationalityName =
    found?.country ||
    nationalitySlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  // ── Resolve country / visa data ────────────────────────────────────────
  const countryData = getCountryData(destinationSlug);

  // Resolve active visa type (fall back to "sticker" if the param is invalid)
  const activeType =
    countryData.types[visaTypeParam] ? visaTypeParam : "sticker";
  const activeRule = countryData.types[activeType];
  const isHours    = activeRule?.unit === "hours";

  const RELATED = Object.entries(countryData.types).filter(([k]) => k !== activeType);

  const timeDisplay = isHours
    ? `${activeRule.min}–${activeRule.max} hours`
    : `${activeRule.min}–${activeRule.max} business days`;

  return (
    <div className="min-h-screen bg-white font-sans my-20">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <div className="bg-slate-50 border-b border-slate-100 px-6 py-3">
        <div className="container mx-auto max-w-6xl flex items-center gap-2 text-xs text-slate-400 font-semibold flex-wrap">
          <Link href="/" className="hover:text-[#005a31] transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/travel-resources/visa-processing-time-tracker" className="hover:text-[#005a31] transition-colors">
            Visa Processing Time Tracker
          </Link>
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
          <Link
            href="/travel-resources/visa-processing-time-tracker"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-[#005a31] mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Tracker
          </Link>

          {/*
            ── VISA TYPE SWITCHER (client island) ──────────────────────────
            Switching tabs changes the URL ?type= query param so Googlebot
            still sees every tab at a stable, crawlable URL. The client island
            only handles the UX of pressing the button and navigating.
          */}
          <VisaTypeSwitcher
            types={countryData.types}
            activeType={activeType}
            slug={slug}
            visaTypeLabels={VISA_TYPE_LABELS}
          />
        

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-[#004d2c] leading-tight tracking-tight mb-4">
                {nationalityName} National<br />
                Visa Processing Time<br />
                <span className="text-transparent" style={{ WebkitTextStroke:"2px #004d2c" }}>
                  for {countryData.name}
                </span>
              </h1>
              <p className="text-slate-500 font-medium leading-relaxed mb-6 text-sm">
                Accurate, up-to-date processing time for{" "}
                <strong className="text-slate-800">{nationalityName} passport holders</strong> applying for a{" "}
                <strong className="text-slate-800">{activeRule?.label}</strong> to {countryData.name}.
                Data updated monthly from real applicant reports and embassy guidelines.
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className={`px-4 py-2 rounded-xl border text-xs font-black uppercase tracking-wider ${
                    VISA_TYPE_LABELS[activeType]?.color || "bg-slate-50 border-slate-200 text-slate-600"
                  }`}
                >
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

            {/* Processing time card — fully static, no client JS needed */}
            <div className="bg-[#004d2c] rounded-[2rem] p-8 text-white">
              <div className="text-xs font-black uppercase tracking-widest text-green-300/70 mb-2">
                Estimated Processing Time
              </div>
              <div className="flex items-end gap-3 mb-2">
                <span className="text-6xl font-black text-amber-400 leading-none">
                  {activeRule?.min}–{activeRule?.max}
                </span>
                <span className="text-2xl font-black text-white/60 mb-1">
                  {isHours ? "hours" : "business\ndays"}
                </span>
              </div>
              <div className="text-sm text-green-200/70 font-semibold mb-6">{activeRule?.label}</div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-lg font-black text-amber-400">
                    {activeRule?.min}{isHours ? "h" : "d"}
                  </div>
                  <div className="text-[10px] text-green-300/60 font-bold uppercase">Best Case</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-lg font-black text-white">
                    {Math.round(((activeRule?.min || 0) + (activeRule?.max || 0)) / 2)}
                    {isHours ? "h" : "d"}
                  </div>
                  <div className="text-[10px] text-green-300/60 font-bold uppercase">Average</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-lg font-black text-red-300">
                    {activeRule?.max}{isHours ? "h" : "d"}
                  </div>
                  <div className="text-[10px] text-green-300/60 font-bold uppercase">Worst Case</div>
                </div>
              </div>

              {isHours && (
                <div className="mt-4 bg-purple-500/20 border border-purple-400/30 rounded-xl px-4 py-3 text-xs font-bold text-purple-200">
                  🔁 Transit visa — same-day or overnight decision in most cases
                </div>
              )}
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
                {(countryData.notes || []).map((note, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <CheckCircle2 size={18} className="text-[#005a31] shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium leading-relaxed">{note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why delays */}
            <div>
              <h2 className="text-2xl font-black text-[#004d2c] mb-6 flex items-center gap-3">
                <AlertTriangle size={22} className="text-red-500" />
                Why Your Visa Might Be Delayed
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {(countryData.delayReasons || []).map((reason, i) => (
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
                {(countryData.tips || []).map((tip, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-amber-50 border border-amber-100 rounded-2xl">
                    <span className="text-amber-600 font-black text-sm shrink-0 w-6 text-center">{i + 1}.</span>
                    <span className="text-sm text-amber-900 font-medium leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SEO article */}
            <div className="border-t border-slate-100 pt-10">
              <h2 className="text-2xl font-black text-[#004d2c] mb-4">
                {nationalityName} to {countryData.name} {VISA_TYPE_LABELS[activeType]?.label}: Full Guide 2025
              </h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  For <strong>{nationalityName}</strong> passport holders, obtaining a{" "}
                  <strong>{countryData.name} {VISA_TYPE_LABELS[activeType]?.label}</strong> ({activeRule?.label}) is
                  one of the most common travel documentation requirements. The current processing time is{" "}
                  <strong className="text-[#005a31]">{timeDisplay}</strong>, though this varies by season, embassy
                  workload, and individual circumstances.
                </p>
                {isHours ? (
                  <p>
                    Transit visas are the fastest visa category available. Most decisions are made within 6–24 hours,
                    making same-day or next-day processing common. {nationalityName} travelers transiting{" "}
                    {countryData.name} should confirm transit visa requirements with their airline and the official
                    embassy portal before booking connecting flights.
                  </p>
                ) : (
                  <p>
                    The key to a smooth, on-time visa approval is applying well in advance and submitting a complete,
                    well-organized application. {nationalityName} applicants should pay particular attention to
                    financial documentation, as embassies often request additional proof of funds from South Asian
                    and African nationalities. In peak travel seasons — typically June through August and December
                    through January — processing times can increase by 30–50%.
                  </p>
                )}
                <p>
                  We strongly recommend using the <strong>Reverse Application Calculator</strong> on this page to
                  determine your ideal application submission date based on your intended travel or transit date.
                  Applying with at least the maximum processing time plus a 2-week buffer gives you the safest margin.
                </p>
              </div>
            </div>

          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/*
              ── REVERSE CALCULATOR (client island) ──────────────────────
              Only the date-picker and urgency logic needs JS.
              We pass static min/max/unit from the server.
            */}
            <ReverseCalculator
              min={activeRule?.min || 15}
              max={activeRule?.max || 21}
              unit={activeRule?.unit}
            />

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
                  <div className="text-xs text-slate-400">Apply & check status online</div>
                </div>
                <ExternalLink size={16} className="text-slate-300 group-hover:text-[#005a31]" />
              </a>
            )}

            {/* Expert CTA */}
            <div className="bg-slate-900 rounded-[2rem] p-7 text-white text-center">
              <div className="text-3xl mb-3">🧑‍💼</div>
              <h4 className="font-black text-lg mb-2">Need Help?</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-5">
                Our visa experts handle your entire {countryData.name} application from start to finish — documents,
                forms, and submission.
              </p>
              <a
                href="https://wa.me/8801631312524"
                className="block w-full py-4 bg-amber-400 text-[#004d2c] font-black rounded-xl hover:bg-white transition-all text-sm"
              >
                Talk to an Expert →
              </a>
            </div>

            {/* Other visa types — static links, fully crawlable */}
            {RELATED.length > 0 && (
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-6">
                <h4 className="font-black text-sm text-slate-800 uppercase tracking-wider mb-4">
                  Other Visa Types for {countryData.name}
                </h4>
                <div className="space-y-3">
                  {RELATED.map(([k, v]) => (
                    <Link
                      key={k}
                      href={`/travel-resources/visa-processing-time-tracker/${slug}?type=${k}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-[#005a31]/8 border border-transparent hover:border-[#005a31]/20 transition-all"
                    >
                      <div>
                        <div className="text-xs font-black text-slate-800">{VISA_TYPE_LABELS[k]?.label}</div>
                        <div className="text-[10px] text-slate-400">
                          {v.min}–{v.max} {v.unit === "hours" ? "hours" : "business days"}
                        </div>
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

      {/* ── BACK CTA ────────────────────────────────────────────────────── */}
      <section className="bg-[#005a31] py-16 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-black text-white mb-4">Check Another Country</h2>
          <p className="text-green-200/70 font-medium mb-8">
            Search 195+ countries — E-Visa, Sticker, Transit &amp; complex cases
          </p>
          <Link
            href="/travel-resources/visa-processing-time-tracker"
            className="inline-flex items-center gap-3 bg-amber-400 text-[#004d2c] px-10 py-5 rounded-2xl font-black hover:bg-white transition-all shadow-xl"
          >
            <Timer size={20} /> Back to Visa Tracker
          </Link>
        </div>
      </section>

    </div>
  );
}