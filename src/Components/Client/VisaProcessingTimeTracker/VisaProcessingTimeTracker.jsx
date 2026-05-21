// Components/Client/VisaProcessingTimeTracker/VisaProcessingTimeTracker.jsx
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
  FileText,
  BarChart3,
  MapPin,
  Shield,
} from "lucide-react";
import { STATS, POPULAR, HOW_IT_WORKS, VISA_TYPES, makeSlug } from "@/app/data/data.js";
import SearchCard from "./Searchcard";

// ─────────────────────────────────────────────────────────────────────────────
// DATA — Processing time tables & SEO content
// ─────────────────────────────────────────────────────────────────────────────

const PROCESSING_TABLE = [
  { visaType: "Transit Visa",          fastest: "6 hrs",    typical: "24 hrs",      slowest: "3 days",   note: "Same-day in most cases" },
  { visaType: "E-Visa (Online)",       fastest: "24 hrs",   typical: "2–4 days",    slowest: "7 days",   note: "Fully automated" },
  { visaType: "Sticker Visa",          fastest: "5 days",   typical: "15–21 days",  slowest: "45 days",  note: "Requires biometrics" },
  { visaType: "Sticker Extended",      fastest: "10 days",  typical: "21–30 days",  slowest: "60+ days", note: "Long-stay/work visas" },
  { visaType: "Schengen (Type C)",     fastest: "5 days",   typical: "15 days",     slowest: "30 days",  note: "15 days legal max" },
  { visaType: "USA B1/B2",             fastest: "3 months", typical: "4–6 months",  slowest: "8+ months",note: "Interview wait dominates" },
  { visaType: "UK Visitor Visa",       fastest: "5 days",   typical: "3–8 weeks",   slowest: "12 weeks", note: "Priority option available" },
  { visaType: "Canada TRV",            fastest: "4 weeks",  typical: "4–12 weeks",  slowest: "16 weeks", note: "Online biometric needed" },
  { visaType: "Japan Tourist",         fastest: "4 days",   typical: "5–7 days",    slowest: "14 days",  note: "No interview required" },
  { visaType: "Australia Subclass 600",fastest: "2 weeks",  typical: "4–8 weeks",   slowest: "12 weeks", note: "Online ImmiAccount" },
];

const COUNTRY_PROCESSING = [
  {
    flag: "🇺🇸", country: "United States",  visaType: "B1/B2 Tourist",     time: "4–6 months",  difficulty: "Hard",   href: "/visa/united-states-visa",         serviceHref: "/our-services/visa/usa-visa-application",
  },
  {
    flag: "🇬🇧", country: "United Kingdom", visaType: "Standard Visitor",  time: "3–8 weeks",   difficulty: "Hard",   href: "/visa/united-kingdom-visa",        serviceHref: "/our-services/visa/uk-visa-application",
  },
  {
    flag: "🇪🇺", country: "Schengen Area",  visaType: "Type C Tourist",    time: "15 work days",difficulty: "Medium", href: "/schengen-visa",                   serviceHref: "/our-services/visa/europe-visa-application",
  },
  {
    flag: "🇨🇦", country: "Canada",         visaType: "Temp Resident Visa",time: "4–12 weeks",  difficulty: "Hard",   href: "/visa/canada-visa",                serviceHref: "/our-services/visa/canada-visa-application",
  },
  {
    flag: "🇯🇵", country: "Japan",          visaType: "Tourist Visa",      time: "4–7 days",    difficulty: "Easy",   href: "/visa/japan-visa",                 serviceHref: "/our-services/visa/japan-visa-application",
  },
  {
    flag: "🇦🇺", country: "Australia",      visaType: "Visitor (600)",     time: "4–8 weeks",   difficulty: "Medium", href: "/visa/australia-visa",             serviceHref: "/our-services/visa/australia-visa-application",
  },
  {
    flag: "🇩🇪", country: "Germany",        visaType: "Schengen Visa",     time: "15 work days",difficulty: "Medium", href: "/visa/germany-visa",               serviceHref: "/our-services/visa/germany-visa-application",
  },
  {
    flag: "🇸🇬", country: "Singapore",      visaType: "Tourist Visa",      time: "3–5 days",    difficulty: "Easy",   href: "/visa/singapore-visa",             serviceHref: "/our-services/visa/singapore-visa-application",
  },
  {
    flag: "🇲🇾", country: "Malaysia",       visaType: "e-NTRI / eVISA",   time: "1–3 days",    difficulty: "Easy",   href: "/visa/malaysia-visa",              serviceHref: "/our-services/visa/malaysia-visa-application",
  },
  {
    flag: "🇰🇷", country: "South Korea",    visaType: "Tourist Visa",      time: "5–7 days",    difficulty: "Easy",   href: "/visa/south-korea-visa",           serviceHref: "/our-services/visa/south-korea-visa-application",
  },
  {
    flag: "🇹🇷", country: "Turkey",         visaType: "e-Visa",            time: "24–72 hrs",   difficulty: "Easy",   href: "/visa/turkey-visa",                serviceHref: "/our-services/visa/turkey-visa-application",
  },
  {
    flag: "🇮🇳", country: "India",          visaType: "e-Visa",            time: "3–5 days",    difficulty: "Easy",   href: "/visa/india",                      serviceHref: "/our-services/visa/india-visa-application",
  },
];

const FACTORS = [
  {
    icon: <FileText size={20} className="text-white" />,
    color: "bg-[#005a31]",
    title: "Visa Type",
    points: [
      "Transit: 6–24 hrs — fastest category",
      "E-Visa: 2–4 days — fully automated",
      "Sticker: 15–21 days — needs biometrics",
      "Extended stay: 21–60+ days",
    ],
  },
  {
    icon: <Globe size={20} className="text-white" />,
    color: "bg-amber-500",
    title: "Your Nationality",
    points: [
      "Bilateral visa treaties between countries",
      "South Asian passports face higher scrutiny",
      "GCC residency improves third-country odds",
      "Prior travel history matters significantly",
    ],
  },
  {
    icon: <BarChart3 size={20} className="text-white" />,
    color: "bg-blue-600",
    title: "Seasonal Demand",
    points: [
      "Summer (Jun–Aug): +2–3 weeks added",
      "Christmas/Eid peak: +2–4 weeks",
      "Off-peak (Jan–Feb): fastest processing",
      "Ramadan travel season: plan 8 weeks ahead",
    ],
  },
  {
    icon: <Shield size={20} className="text-white" />,
    color: "bg-rose-600",
    title: "Application Quality",
    points: [
      "Missing documents = major delays",
      "Inconsistent financials = scrutiny hold",
      "Weak cover letter = manual review",
      "Embassy-accurate docs = fastest approval",
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "How long does visa processing take in 2026?",
    a: (
      <>
        Processing times vary by type: Transit — 6–24 hrs. E-Visa — 2–4 days.
        Sticker/tourist — 15–21 days. USA B1/B2 — 4–6 months (interview wait).
        UK Visitor — 3–8 weeks. Schengen — 15 working days. Canada TRV — 4–12 weeks.
        Japan — 4–7 days. Australia — 4–8 weeks. Use our{" "}
        <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">
          free visa checklist generator
        </Link>{" "}
        to ensure your documents are complete before submitting — incomplete applications are the #1 cause of delays.
      </>
    ),
  },
  {
    q: "What factors affect visa processing time the most?",
    a: (
      <>
        Four main factors: (1) Visa type — transit is fastest, sticker slowest.
        (2) Nationality — bilateral treaties and past application history.
        (3) Seasonal demand — summer and holidays add 2–3 weeks.
        (4) Document quality — missing or inconsistent documents cause administrative holds.
        See our{" "}
        <Link href="/visa-rejection" className="text-[#005a31] font-semibold hover:underline">
          visa rejection rate analysis
        </Link>{" "}
        to understand which applications face the most delays.
      </>
    ),
  },
  {
    q: "How long does a Schengen visa take to process in 2026?",
    a: (
      <>
        Schengen visa processing takes a maximum of 15 working days under EU rules.
        Most applications are decided in 5–10 working days in practice.
        Apply at least 3 weeks before travel — 6 weeks during summer or Christmas.
        See our full{" "}
        <Link href="/schengen-visa" className="text-[#005a31] font-semibold hover:underline">
          Schengen visa guide for Bangladeshi applicants
        </Link>{" "}
        and check the specific processing times for{" "}
        <Link href="/our-services/visa/germany-visa-application" className="text-[#005a31] font-semibold hover:underline">
          Germany
        </Link>
        ,{" "}
        <Link href="/our-services/visa/europe-visa-application" className="text-[#005a31] font-semibold hover:underline">
          France, Italy, and Spain
        </Link>
        .
      </>
    ),
  },
  {
    q: "How long does a UK visa take from Bangladesh?",
    a: (
      <>
        UK Standard Visitor Visa from Bangladesh takes 3–8 weeks in 2026.
        Priority service at VFS Global Dhaka reduces this to ~5 working days.
        Super Priority gives a same-day decision in some cases.
        Standard processing through VFS Global Bangladesh is typically 15–21 working days.
        Read our full{" "}
        <Link href="/visa/united-kingdom-visa" className="text-[#005a31] font-semibold hover:underline">
          UK visitor visa guide for Bangladeshi applicants
        </Link>
        .
      </>
    ),
  },
  {
    q: "How long does a USA visa take to process from Bangladesh or Dubai?",
    a: (
      <>
        USA B1/B2 tourist visa processing in 2026 is dominated by interview wait time —
        currently 2–6 months at the US Embassy Dhaka and 1–3 months at the US Embassy Abu Dhabi.
        After the interview, processing takes 2–5 business days. Administrative Processing can add 60–120+ days.
        Prepare thoroughly with our{" "}
        <Link href="/target-usa-visa-interview-preparation" className="text-[#005a31] font-semibold hover:underline">
          USA visa interview preparation program
        </Link>{" "}
        and see the full{" "}
        <Link href="/visa/united-states-visa" className="text-[#005a31] font-semibold hover:underline">
          USA tourist visa guide
        </Link>
        .
      </>
    ),
  },
  {
    q: "What is the difference between e-visa and sticker visa processing time?",
    a: (
      <>
        E-Visa processing is automated: 24 hours to 4 days, no appointment or biometrics needed.
        Sticker visa requires physical document submission, biometrics, sometimes an interview: 15–21 days minimum.
        E-visas are available for Turkey, India, Sri Lanka, Egypt, Kenya, Azerbaijan, and 40+ destinations.
        See all{" "}
        <Link href="/visa/e-visa" className="text-[#005a31] font-semibold hover:underline">
          e-visa destinations for Bangladeshi applicants
        </Link>
        .
      </>
    ),
  },
  {
    q: "Does VFS Global affect visa processing time?",
    a: (
      <>
        Yes. VFS Global processes visa applications on behalf of 67+ governments.
        VFS appointment availability adds 3–10 business days before embassy processing even begins.
        During peak season, VFS appointment slots can be fully booked 4–6 weeks ahead.
        Combined, VFS submission + embassy decision + passport return typically adds 5–10 business days
        to the core embassy processing time. Our tracker reflects current VFS Global Bangladesh and
        VFS Global UAE slot availability.
      </>
    ),
  },
  {
    q: "How early should I apply for a visa?",
    a: (
      <>
        General rule: apply at least 2× the standard processing time before your travel date.
        Minimum lead times: USA — 6 months ahead. UK — 8 weeks. Schengen — 3 weeks (6 weeks in summer).
        Canada — 10 weeks. Japan — 2 weeks. Australia — 6 weeks. E-visa destinations — 1 week.
        Use our{" "}
        <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">
          free visa checklist generator
        </Link>{" "}
        to ensure your documents are ready before you book appointments.
      </>
    ),
  },
  {
    q: "Can a visa consultant speed up processing time?",
    a: (
      <>
        A consultant cannot speed up embassy processing itself, but can significantly reduce
        the time lost to document errors, resubmissions, and administrative holds — which are
        the leading causes of avoidable delays. Eammu Holidays reviews all documents within
        24 hours and ensures your application is embassy-ready before submission, eliminating
        back-and-forth delays. See our{" "}
        <Link href="/testimonials" className="text-[#005a31] font-semibold hover:underline">
          client testimonials
        </Link>{" "}
        or{" "}
        <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-semibold hover:underline">
          contact our Cumilla office
        </Link>{" "}
        /{" "}
        <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-semibold hover:underline">
          Dubai branch
        </Link>
        .
      </>
    ),
  },
];

const SEO_LINKS = [
  { label: "Tourist Visa from Bangladesh",           href: "/visa" },
  { label: "Schengen Visa 2026",                     href: "/schengen-visa" },
  { label: "USA B1/B2 Visa Guide",                   href: "/visa/united-states-visa" },
  { label: "UK Standard Visitor Visa",               href: "/visa/united-kingdom-visa" },
  { label: "Canada Tourist Visa",                    href: "/visa/canada-visa" },
  { label: "Japan Visa from Bangladesh",             href: "/visa/japan-visa" },
  { label: "Australia Tourist Visa",                 href: "/visa/australia-visa" },
  { label: "Germany Schengen Visa",                  href: "/our-services/visa/germany-visa-application" },
  { label: "Malaysia e-Visa",                        href: "/visa/malaysia-visa" },
  { label: "Turkey e-Visa",                          href: "/visa/turkey-visa" },
  { label: "India e-Visa from Bangladesh",           href: "/visa/india" },
  { label: "E-Visa Destinations 2026",               href: "/visa/e-visa" },
  { label: "Free Visa Checklist Generator",          href: "/travel-resources/visa-checklist-generator" },
  { label: "Visa Rejection Rates Bangladesh",        href: "/visa-rejection" },
  { label: "Travel Document Generator",              href: "/travel-resources/travel-document-generator" },
  { label: "All Travel Resources",                   href: "/travel-resources" },
  { label: "Dubai Residents Visa Guide",             href: "/visa/dubai-residents" },
  { label: "USA Visa Interview Preparation",         href: "/target-usa-visa-interview-preparation" },
  { label: "Student Visa from Bangladesh",           href: "/our-services/visa-services/student-visa-from-bangladesh" },
  { label: "Work Visa from Bangladesh",              href: "/our-services/visa-services/work-visa-from-bangladesh" },
  { label: "Schengen Processing — Bangladesh",       href: "/travel-resources/visa-processing-time-tracker/schengen-national-visa-processing-time-for-bangladesh-sticker" },
  { label: "UK Processing — Bangladesh",             href: "/travel-resources/visa-processing-time-tracker/united-kingdom-national-visa-processing-time-for-bangladesh-sticker" },
  { label: "USA Processing — Bangladesh",            href: "/travel-resources/visa-processing-time-tracker/united-states-national-visa-processing-time-for-bangladesh-sticker" },
  { label: "Contact Dubai Office",                   href: "/contact/travel-agency-dubai" },
  { label: "Contact Bangladesh Office",              href: "/contact/travel-agency-bangladesh" },
  { label: "Client Testimonials",                    href: "/testimonials" },
];

const difficultyStyle = {
  Hard:   "bg-red-50 text-red-600 border border-red-100",
  Medium: "bg-amber-50 text-amber-600 border border-amber-100",
  Easy:   "bg-green-50 text-green-600 border border-green-100",
};

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS — all server-rendered
// ─────────────────────────────────────────────────────────────────────────────

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-100">
      <ol className="container mx-auto max-w-6xl px-6 py-2.5 flex items-center gap-2 text-xs text-slate-400"
        itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link href="/" className="hover:text-[#005a31] font-medium transition" itemProp="item">
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        <li className="text-slate-200">›</li>
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link href="/travel-resources" className="hover:text-[#005a31] font-medium transition" itemProp="item">
            <span itemProp="name">Travel Resources</span>
          </Link>
          <meta itemProp="position" content="2" />
        </li>
        <li className="text-slate-200">›</li>
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"
          className="font-semibold text-slate-600">
          <span itemProp="name">Visa Processing Time Tracker 2026</span>
          <meta itemProp="position" content="3" />
        </li>
      </ol>
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      className="relative bg-white pt-16 pb-20 px-6 overflow-hidden border-b border-slate-100"
      aria-labelledby="tracker-heading"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#005a31]/4 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/8 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#005a31]/8 border border-[#005a31]/15 px-4 py-2 rounded-full mb-6">
            <Timer size={14} className="text-[#005a31]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#005a31]">
              Real-Time Processing Intelligence — 200+ Countries · Updated Weekly
            </span>
          </div>

          <h1
            id="tracker-heading"
            className="text-5xl md:text-7xl font-black text-[#004d2c] leading-[0.88] tracking-tighter mb-6"
          >
            Visa Processing<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #004d2c" }}>
              Time Tracker.
            </span>
          </h1>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mb-4">
            Find out exactly how long your visa will take — by nationality, destination, and visa type.
            Covers{" "}
            <Link href="/visa/e-visa" className="text-[#005a31] font-semibold hover:underline">E-Visa</Link>,
            {" "}Sticker,{" "}
            Transit &amp; complex cases. Used by{" "}
            <strong className="text-slate-800">42,000+ travelers</strong> every month.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 font-semibold mb-10">
            {[
              { label: "Schengen Visa Times",    href: "/schengen-visa" },
              { label: "USA Visa Processing",    href: "/visa/united-states-visa" },
              { label: "UK Visa Timeline",       href: "/visa/united-kingdom-visa" },
              { label: "Canada Visa Wait",       href: "/visa/canada-visa" },
              { label: "Japan Fast Processing",  href: "/visa/japan-visa" },
              { label: "E-Visa Destinations",    href: "/visa/e-visa" },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full hover:border-[#005a31] hover:text-[#005a31] transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Interactive search — CLIENT island */}
        <SearchCard />
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="bg-[#004d2c] py-8 px-6" aria-label="Tracker statistics">
      <div className="container mx-auto max-w-6xl">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                <Icon size={18} className="text-amber-400" />
              </div>
              <div>
                <dt className="text-xl font-black text-white">{value}</dt>
                <dd className="text-xs text-green-300/70 font-semibold">{label}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function ProcessingTimeTable() {
  return (
    <section aria-labelledby="table-heading" className="py-20 px-6 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#005a31] block mb-2">
            Quick Reference
          </span>
          <h2 id="table-heading" className="text-3xl font-black text-[#004d2c] tracking-tight mb-2">
            Visa Processing Times — 2026 Reference Table
          </h2>
          <p className="text-slate-500 text-sm font-medium max-w-2xl">
            Typical processing windows by visa type. Times shown are business days from complete application submission.
            Use the{" "}
            <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">
              free visa checklist generator
            </Link>{" "}
            to make sure your application is complete before you submit.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
          <table className="w-full bg-white text-sm" role="table" aria-label="Visa processing time by type">
            <thead>
              <tr className="bg-[#004d2c] text-white">
                <th className="text-left px-5 py-4 font-black text-xs uppercase tracking-wider">Visa Type</th>
                <th className="text-left px-5 py-4 font-black text-xs uppercase tracking-wider">Fastest</th>
                <th className="text-left px-5 py-4 font-black text-xs uppercase tracking-wider">Typical</th>
                <th className="text-left px-5 py-4 font-black text-xs uppercase tracking-wider">Peak Season</th>
                <th className="text-left px-5 py-4 font-black text-xs uppercase tracking-wider hidden md:table-cell">Note</th>
              </tr>
            </thead>
            <tbody>
              {PROCESSING_TABLE.map((row, i) => (
                <tr
                  key={i}
                  className={`border-t border-slate-50 hover:bg-slate-50 transition ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                >
                  <td className="px-5 py-4 font-black text-slate-800">{row.visaType}</td>
                  <td className="px-5 py-4 font-bold text-green-600">{row.fastest}</td>
                  <td className="px-5 py-4 font-bold text-slate-600">{row.typical}</td>
                  <td className="px-5 py-4 font-bold text-red-500">{row.slowest}</td>
                  <td className="px-5 py-4 text-slate-400 text-xs font-medium hidden md:table-cell">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 font-medium mt-3">
          * Peak season = June–August and December. Administrative processing holds not included.
          Always check embassy announcements for current backlogs. See{" "}
          <Link href="/visa-rejection" className="text-[#005a31] hover:underline font-semibold">
            visa rejection rates
          </Link>{" "}
          to understand approval risk alongside processing time.
        </p>
      </div>
    </section>
  );
}

function CountryProcessingCards() {
  return (
    <section aria-labelledby="country-heading" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-amber-600 block mb-2">
              By Destination
            </span>
            <h2 id="country-heading" className="text-3xl font-black text-[#004d2c] tracking-tight">
              Processing Times — Top 12 Destinations
            </h2>
            <p className="text-slate-500 text-sm mt-2 font-medium">
              Current 2026 processing times for Bangladeshi and UAE-resident applicants ·{" "}
              <Link href="/visa-rejection" className="text-[#005a31] font-semibold hover:underline">
                See rejection rates →
              </Link>
            </p>
          </div>
          <Link
            href="/visa"
            className="hidden md:flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider hover:text-[#005a31] transition border border-slate-100 px-4 py-2 rounded-xl"
          >
            <Globe size={14} /> All destinations
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COUNTRY_PROCESSING.map((c, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl border-2 border-slate-100 p-5 hover:border-[#005a31] hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{c.flag}</span>
                  <div>
                    <h3 className="font-black text-slate-800 text-sm leading-tight">
                      <Link href={c.href} className="hover:text-[#005a31] transition">
                        {c.country}
                      </Link>
                    </h3>
                    <p className="text-[10px] text-slate-400 font-semibold">{c.visaType}</p>
                  </div>
                </div>
                <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${difficultyStyle[c.difficulty]}`}>
                  {c.difficulty}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Clock size={14} className="text-[#005a31]" />
                <span className="text-sm font-black text-slate-700">{c.time}</span>
              </div>

              <div className="flex gap-2">
                <Link
                  href={c.href}
                  className="flex-1 text-center text-xs font-black text-[#005a31] bg-[#005a31]/5 hover:bg-[#005a31] hover:text-white px-3 py-2 rounded-xl transition"
                >
                  Full guide →
                </Link>
                <Link
                  href={c.serviceHref}
                  className="text-xs font-bold text-slate-400 hover:text-slate-700 border border-slate-100 px-3 py-2 rounded-xl transition hover:border-slate-300"
                >
                  Apply
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 p-5 bg-amber-50 border border-amber-100 rounded-2xl">
          <p className="text-sm text-amber-800 font-medium leading-relaxed">
            <strong>Planning tip:</strong> Always apply at least 2× the typical processing time before your
            travel date. Book refundable flights and hotels until your visa is approved.
            Need help preparing your documents?{" "}
            <Link href="/travel-resources/visa-checklist-generator" className="font-black text-[#005a31] hover:underline">
              Generate your free visa checklist →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function PopularSearches() {
  return (
    <section className="py-20 px-6 bg-slate-50 border-t border-slate-100" aria-labelledby="popular-heading">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-amber-600 block mb-2">
              🔥 Trending
            </span>
            <h2 id="popular-heading" className="text-3xl font-black text-[#004d2c] tracking-tight">
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
                href={`/travel-resources/visa-processing-time-tracker/${slug}-${p.type}`}
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
                  <ChevronRight size={18} className="text-slate-300 group-hover:text-[#005a31] transition-colors" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhatAffectsTime() {
  return (
    <section aria-labelledby="factors-heading" className="py-20 px-6 bg-white border-t border-slate-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-[#005a31] block mb-2">
            Key Factors
          </span>
          <h2 id="factors-heading" className="text-3xl font-black text-[#004d2c] tracking-tight mb-3">
            What Affects Visa Processing Time in 2026?
          </h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto text-sm">
            Understanding why some visas take hours and others take months — and what you can control.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACTORS.map((f, i) => (
            <div key={i} className="bg-white rounded-[2rem] p-7 border border-slate-100 shadow-sm hover:shadow-lg transition-all">
              <div className={`w-12 h-12 ${f.color} rounded-2xl flex items-center justify-center mb-5`}>
                {f.icon}
              </div>
              <h3 className="text-base font-black text-slate-800 mb-4">{f.title}</h3>
              <ul className="space-y-2">
                {f.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-slate-500 leading-relaxed">
                    <CheckCircle2 size={12} className="text-[#005a31] shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const iconMap = {
    zap:   <Zap size={22} className="text-white" />,
    clock: <Clock size={22} className="text-white" />,
    alert: <AlertCircle size={22} className="text-white" />,
    globe: <Globe size={22} className="text-white" />,
  };

  return (
    <section className="py-20 px-6 bg-slate-50 border-t border-slate-100" aria-labelledby="how-heading">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 id="how-heading" className="text-3xl font-black text-[#004d2c] tracking-tight mb-3">
            How Visa Processing Time Works
          </h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto">
            Understanding the stages from application to passport return
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS.map(({ colorClass, iconType, title, desc, tags }) => (
            <div key={title} className="bg-white rounded-[2rem] p-7 border border-slate-100 shadow-sm">
              <div className={`w-12 h-12 ${colorClass} rounded-2xl flex items-center justify-center mb-5`}>
                {iconMap[iconType] ?? <Globe size={22} className="text-white" />}
              </div>
              <h3 className="text-base font-black text-slate-800 mb-3">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-[10px] font-black uppercase tracking-wider bg-slate-50 text-slate-500 px-3 py-1.5 rounded-lg border border-slate-100">
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

function FaqSection() {
  return (
    <section aria-labelledby="faq-heading" className="py-20 px-6 bg-white border-t border-slate-100">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#005a31] block mb-2">FAQs</span>
          <h2 id="faq-heading" className="text-3xl font-black text-[#004d2c] tracking-tight mb-2">
            Visa Processing Time — Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Answers to the most common visa processing time questions from Bangladeshi and UAE-based applicants in 2026.
          </p>
        </div>
        <dl className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden hover:border-[#005a31]/30 transition-all"
              itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
            >
              <dt>
                <details className="group">
                  <summary
                    className="w-full flex items-center justify-between p-5 text-left font-black text-slate-800 text-sm md:text-base cursor-pointer hover:text-[#005a31] transition list-none"
                    itemProp="name"
                  >
                    {item.q}
                    <span className="ml-4 flex-shrink-0 w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-[#005a31] font-black text-lg group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <dd
                    className="px-5 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-4"
                    itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
                  >
                    <span itemProp="text">{item.a}</span>
                  </dd>
                </details>
              </dt>
            </div>
          ))}
        </dl>
        <div className="text-center mt-10">
          <Link
            href="/contact/travel-agency-bangladesh"
            className="inline-block px-8 py-3 bg-[#005a31] text-white font-black rounded-full hover:bg-[#004d2c] transition text-sm shadow-lg"
          >
            Ask a visa consultant →
          </Link>
        </div>
      </div>
    </section>
  );
}

function SeoArticle() {
  return (
    <section className="py-20 px-6 bg-slate-50 border-t border-slate-100" aria-label="Visa processing time complete guide">
      <div className="container mx-auto max-w-4xl">
        <h2 id="seo-guide-heading" className="text-2xl font-black text-[#004d2c] mb-6">
          Visa Processing Time — Complete Guide for 2026
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-500 leading-relaxed">
          <div className="space-y-4">
            <p>
              Visa processing time is the single most important variable when planning international travel.
              Miss the window and your trip falls apart — apply too early and your visa expires before you travel.
              Eammu Holidays&apos; Visa Processing Time Tracker gives you accurate, real-time estimates for{" "}
              <Link href="/visa/united-states-visa" className="text-[#005a31] font-semibold hover:underline">USA</Link>,{" "}
              <Link href="/visa/united-kingdom-visa" className="text-[#005a31] font-semibold hover:underline">UK</Link>,{" "}
              <Link href="/schengen-visa" className="text-[#005a31] font-semibold hover:underline">Schengen</Link>,{" "}
              <Link href="/visa/canada-visa" className="text-[#005a31] font-semibold hover:underline">Canada</Link>,{" "}
              <Link href="/visa/japan-visa" className="text-[#005a31] font-semibold hover:underline">Japan</Link>,{" "}
              <Link href="/visa/australia-visa" className="text-[#005a31] font-semibold hover:underline">Australia</Link>, and{" "}
              <Link href="/visa" className="text-[#005a31] font-semibold hover:underline">200+ destinations</Link>.
            </p>
            <p>
              <strong className="text-slate-700">Transit visa processing</strong> is the fastest — typically 6 to 24
              hours, often same-day. You need a transit visa when passing through certain countries even without leaving
              the airport. Countries like the UK, Germany (TATV), and some GCC nations require transit visas for
              specific nationalities. Always check before booking a connecting flight.
            </p>
            <p>
              <strong className="text-slate-700">E-Visa processing</strong> typically takes 2 to 4 business days
              because it is fully automated — no appointment, no biometrics, no in-person submission.
              See all{" "}
              <Link href="/visa/e-visa" className="text-[#005a31] font-semibold hover:underline">
                e-visa destinations available for Bangladeshi passport holders
              </Link>
              .
            </p>
            <p>
              <strong className="text-slate-700">Sticker visa processing</strong> is the most common type for
              major destinations like USA, UK, Schengen, and Canada. It requires physical document submission,
              biometrics, and sometimes an in-person interview — adding 15 to 21 business days at minimum.
              Using our{" "}
              <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">
                free visa checklist generator
              </Link>{" "}
              reduces the risk of incomplete applications that cause avoidable delays.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              <strong className="text-slate-700">Seasonal backlogs</strong> are the most underestimated factor.
              Summer (June–August) and Christmas add 2–3 weeks to standard processing. Eid travel peaks create
              backlogs at VFS Global Bangladesh and VFS Global UAE. Our tracker reflects current seasonal demand
              so you can time your application strategically.
            </p>
            <p>
              <strong className="text-slate-700">Administrative processing</strong> — also called AP or security
              checks — is the most unpredictable delay. Triggered automatically for certain nationalities and
              travel histories, AP adds 45 to 120+ days to USA visa processing with no guaranteed timeline.
              Strong, consistent documentation reduces the risk of being flagged. See our{" "}
              <Link href="/visa-rejection" className="text-[#005a31] font-semibold hover:underline">
                visa rejection and delay analysis for Bangladeshi applicants
              </Link>
              .
            </p>
            <p>
              For{" "}
              <Link href="/visa/dubai-residents" className="text-[#005a31] font-semibold hover:underline">
                Dubai and UAE resident applicants
              </Link>
              , processing times from Dubai and Abu Dhabi VFS centres differ from Bangladesh — often faster
              for Schengen and Japan, sometimes slower for USA due to Abu Dhabi Embassy interview wait times.
              Our tracker covers both Bangladesh and UAE submission points.
            </p>
            <p>
              Need help preparing your application to avoid delays?{" "}
              <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                Contact our Cumilla Bangladesh office
              </Link>{" "}
              or our{" "}
              <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-semibold hover:underline">
                Dubai visa consultancy branch
              </Link>
              . Our 24-hour document review service has helped 12,000+ travelers avoid the avoidable delays that
              cost weeks off their processing time. Read{" "}
              <Link href="/testimonials" className="text-[#005a31] font-semibold hover:underline">
                client testimonials
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Internal link mesh */}
        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="text-xs text-slate-400 font-black uppercase tracking-widest mb-4">
            Related Visa Resources
          </p>
          <div className="flex flex-wrap gap-2.5">
            {SEO_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-slate-500 bg-white border border-slate-100 px-3 py-1.5 rounded-full hover:bg-[#005a31] hover:text-white hover:border-[#005a31] transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ROOT EXPORT
// ─────────────────────────────────────────────────────────────────────────────
export default function VisaProcessingTimeTracker() {
  return (
    <div className="min-h-screen bg-white font-sans py-6">
      
      <HeroSection />
      <StatsBar />
      <ProcessingTimeTable />
      <CountryProcessingCards />
      <PopularSearches />
      <WhatAffectsTime />
      <HowItWorksSection />
      <FaqSection />
      <SeoArticle />
      <Breadcrumb />
    </div>
  );
}