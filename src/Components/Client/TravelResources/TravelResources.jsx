"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  FileText, Download, Search, Calculator, Compass, Briefcase,
  ShieldCheck, Banknote, ScrollText, Lightbulb, ArrowRight,
  MessageSquare, FileSearch, CheckCircle, PlusCircle,
  X, Copy, Check, Filter, Globe, Plane, CreditCard, Landmark,
  ChevronRight, Sparkles, FileEdit, ListChecks, Zap,
  GraduationCap, Wallet, Heart, Clock, TrendingUp, BookOpen,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const RESOURCES = [
  { id: 1, category: "corporate", title: "Standard NOC Letter", desc: "No Objection Certificate template for private and government employees. Embassy-verified format for UK, Canada, Schengen, and US visa applications from Bangladesh.", format: "DOCX", icon: <Briefcase /> },
  { id: 2, category: "financial", title: "Salary Certificate Template", desc: "Official monthly income breakdown including basic salary, house rent allowance, and medical benefit — required for all visa financial documents.", format: "PDF", icon: <Banknote /> },
  { id: 3, category: "legal", title: "Power of Attorney", desc: "Legal authorization draft for visa processing via third-party agents — required by Eammu Holidays for document submission on your behalf.", format: "DOCX", icon: <ShieldCheck /> },
  { id: 4, category: "financial", title: "6-Month Bank Statement Log", desc: "Excel tracker to organize your transaction history for visa applications. Embassy officers specifically review 6-month consistency — use this to prepare.", format: "XLSX", icon: <Landmark /> },
  { id: 5, category: "visa-tools", title: "Day-by-Day Itinerary Template", desc: "Structured daily travel planner for Schengen, US, UK, and Canada visas. Embassy officers cross-check itinerary against hotel and flight bookings.", format: "DOCX", icon: <Compass /> },
  { id: 6, category: "corporate", title: "Trade License (English Translation)", desc: "Certified English translation template for business owners in Bangladesh and UAE — required for business visa and self-employment proof.", format: "PDF", icon: <FileText /> },
  { id: 7, category: "legal", title: "Affidavit of Support", desc: "Sponsor declaration form required when a third party is funding the traveler's trip expenses. Mandatory for family visa applications.", format: "DOCX", icon: <ScrollText /> },
  { id: 8, category: "financial", title: "Tax Return Certificate (IT-10B)", desc: "Standard income tax certificate format for high-net-worth applicants from Bangladesh. Required for Canada, UK, and Australia visa applications.", format: "PDF", icon: <CreditCard /> },
  { id: 9, category: "visa-tools", title: "Visa Cover Letter — Ties to Home", desc: "Persuasive cover letter template focused on demonstrating home country ties — the #1 factor in preventing visa rejections for Bangladeshi applicants.", format: "DOCX", icon: <Plane /> },
];

const AI_PROMPTS = [
  { id: "p1", title: "The 'Ties to Home' Cover Letter", prompt: "Write a visa cover letter for a [Country] visa. Focus heavily on my property ownership, stable employment at [Company], and elderly parents in Bangladesh to prove I will return after my 15-day visit." },
  { id: "p2", title: "Corporate Travel Justification", prompt: "Draft a formal letter from a company CEO justifying why [Employee Name] needs to attend [Event Name] in [City], highlighting the business impact and confirming their return to employment." },
  { id: "p3", title: "Employment Gap Explanation", prompt: "Write a polite explanation for a 6-month employment gap in my CV for a visa application, focusing on personal development, caregiving responsibilities, and confirmed re-employment." },
  { id: "p4", title: "10-Day Country Itinerary", prompt: "Create a detailed 10-day itinerary for [Country]. For each day, provide one historical site, one local restaurant, estimated transport time, and realistic daily spending in USD." },
  { id: "p5", title: "Visa Interview Preparation", prompt: "Act as a Visa Officer at the [Country] Consulate. Ask me 5 tough questions about my financial standing, travel history, and return intent. Critique my answers and suggest improvements." },
];

const INTERNAL_LINKS = [
  { label: "Visa Guide 2026",                  href: "/visa/visa-guide" },
  { label: "All Visa Services",                href: "/visa" },
  { label: "Visa Rejection Checker",           href: "/visa-rejection" },
  { label: "Schengen Visa Guide",              href: "/schengen-visa" },
  { label: "E-Visa Countries",                 href: "/visa/e-visa" },
  { label: "Tourist Visa from Bangladesh",     href: "/our-services/visa-services/tourist-visa-from-bangladesh" },
  { label: "Student Visa from Bangladesh",     href: "/our-services/visa-services/student-visa-from-bangladesh" },
  { label: "Work Visa from Bangladesh",        href: "/our-services/visa-services/work-visa-from-bangladesh" },
  { label: "Study Abroad Guide",               href: "/study-abroad" },
  { label: "Scholarships by Country",          href: "/scholarships" },
  { label: "Canada Visa Application",          href: "/our-services/visa/canada-visa-application" },
  { label: "UK Visa Application",              href: "/our-services/visa/uk-visa-application" },
  { label: "USA Visa Application",             href: "/our-services/visa/usa-visa-application" },
  { label: "Australia Visa Application",       href: "/our-services/visa/australia-visa-application" },
  { label: "Schengen Visa Application",        href: "/our-services/visa/europe-visa-application" },
  { label: "Dubai Visa Application",           href: "/our-services/visa/dubai-visa-application" },
  { label: "USA Interview Preparation",        href: "/target-usa-visa-interview-preparation" },
  { label: "IELTS & Immigration Center",       href: "/target-ielts-immigration-center" },
  { label: "Tour Packages",                    href: "/our-services/tour-packages" },
  { label: "Flight Booking",                   href: "/flight-booking" },
  { label: "Travel Offers & Deals",            href: "/offers" },
  { label: "Bangladesh Office",                href: "/contact/travel-agency-bangladesh" },
  { label: "Dubai Office",                     href: "/contact/travel-agency-dubai" },
];

// ─────────────────────────────────────────────────────────────────────────────
// CALCULATOR: TRAVEL BUDGET
// ─────────────────────────────────────────────────────────────────────────────
function TravelBudgetCalculator() {
  const [dest, setDest]       = useState("schengen");
  const [days, setDays]       = useState(10);
  const [people, setPeople]   = useState(1);
  const [style, setStyle]     = useState("mid");

  const DEST_RATES = {
    schengen:   { budget: 80,  mid: 140, luxury: 280, name: "Schengen / Europe" },
    uk:         { budget: 90,  mid: 160, luxury: 320, name: "United Kingdom" },
    usa:        { budget: 100, mid: 180, luxury: 350, name: "United States" },
    canada:     { budget: 85,  mid: 150, luxury: 300, name: "Canada" },
    dubai:      { budget: 70,  mid: 130, luxury: 280, name: "Dubai / UAE" },
    malaysia:   { budget: 35,  mid: 70,  luxury: 140, name: "Malaysia" },
    thailand:   { budget: 30,  mid: 60,  luxury: 120, name: "Thailand" },
    australia:  { budget: 90,  mid: 160, luxury: 320, name: "Australia" },
  };

  const VISA_FEES = {
    schengen: 80, uk: 115, usa: 185, canada: 100, dubai: 35, malaysia: 20, thailand: 0, australia: 145,
  };

  const FLIGHT_USD = {
    schengen: 750, uk: 680, usa: 900, canada: 820, dubai: 300, malaysia: 250, thailand: 280, australia: 950,
  };

  const rateObj  = DEST_RATES[dest];
  const daily    = rateObj[style];
  const living   = daily * days * people;
  const visa     = VISA_FEES[dest] * people;
  const flight   = FLIGHT_USD[dest] * people;
  const insurance = Math.round(people * days * 3.5);
  const total    = living + visa + flight + insurance;
  const bdt      = Math.round(total * 110);

  return (
    <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-[#005a31] rounded-xl flex items-center justify-center shrink-0">
          <Wallet size={18} className="text-white" />
        </div>
        <div>
          <h3 className="font-black text-slate-900 text-lg leading-tight">Travel Budget Calculator</h3>
          <p className="text-xs text-slate-400 font-medium">Estimate your full trip cost from Bangladesh</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Destination</label>
          <select value={dest} onChange={e => setDest(e.target.value)}
            className="w-full p-3 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 bg-slate-50 focus:outline-none focus:border-[#005a31]">
            {Object.entries(DEST_RATES).map(([k, v]) => <option key={k} value={k}>{v.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Travel Style</label>
          <div className="grid grid-cols-3 gap-1.5">
            {[["budget", "Budget"], ["mid", "Mid-range"], ["luxury", "Luxury"]].map(([val, lbl]) => (
              <button key={val} onClick={() => setStyle(val)}
                className={`py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                  style === val ? "bg-[#005a31] text-white" : "bg-slate-50 text-slate-500 hover:bg-slate-100"}`}>
                {lbl}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Duration: <span className="text-[#005a31]">{days} days</span></label>
          <input type="range" min={3} max={60} value={days} onChange={e => setDays(Number(e.target.value))}
            className="w-full accent-[#005a31]" />
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Travelers: <span className="text-[#005a31]">{people}</span></label>
          <input type="range" min={1} max={6} value={people} onChange={e => setPeople(Number(e.target.value))}
            className="w-full accent-[#005a31]" />
        </div>
      </div>

      <div className="bg-slate-50 rounded-xl p-4 space-y-2 mb-4">
        {[
          ["✈️ Flights (approx)", `$${flight.toLocaleString()}`],
          ["🏨 Living & hotel", `$${living.toLocaleString()}`],
          ["🪪 Visa fees", `$${visa.toLocaleString()}`],
          ["🛡️ Travel insurance", `$${insurance.toLocaleString()}`],
        ].map(([label, val]) => (
          <div key={label} className="flex justify-between items-center text-sm">
            <span className="text-slate-500 font-medium">{label}</span>
            <span className="font-black text-slate-800">{val}</span>
          </div>
        ))}
        <div className="border-t border-slate-200 pt-2 mt-2 flex justify-between items-center">
          <span className="font-black text-slate-900 text-sm">Total Estimate</span>
          <div className="text-right">
            <div className="font-black text-[#005a31] text-lg">${total.toLocaleString()}</div>
            <div className="text-[10px] text-slate-400 font-bold">≈ ৳{bdt.toLocaleString()} BDT</div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Link href="/travel-resources/visa-checklist-generator"
          className="flex-1 text-center py-3 bg-[#005a31] text-white rounded-xl text-xs font-black hover:bg-[#004d2c] transition">
          Build Visa Checklist →
        </Link>
        <a href="https://wa.me/8801701699743" target="_blank" rel="noopener noreferrer"
          className="flex-1 text-center py-3 bg-[#ffcc00] text-[#005a31] rounded-xl text-xs font-black hover:bg-yellow-300 transition">
          💬 Get Quote
        </a>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CALCULATOR: TRAVEL INSURANCE
// ─────────────────────────────────────────────────────────────────────────────
function TravelInsuranceCalculator() {
  const [dest, setDest]       = useState("schengen");
  const [days, setDays]       = useState(14);
  const [people, setPeople]   = useState(1);
  const [age, setAge]         = useState("adult");
  const [coverage, setCoverage] = useState("standard");

  const BASE = { schengen: 4.5, uk: 4, usa: 6, canada: 5, dubai: 3, malaysia: 2, thailand: 2, australia: 5.5 };
  const AGE_MULT  = { adult: 1, senior: 1.9, child: 0.5 };
  const COV_MULT  = { standard: 1, premium: 1.6, comprehensive: 2.2 };
  const COVERAGE_USD = { standard: 30000, premium: 50000, comprehensive: 100000 };
  const DEST_NAMES = {
    schengen: "Schengen / Europe", uk: "United Kingdom", usa: "United States",
    canada: "Canada", dubai: "Dubai / UAE", malaysia: "Malaysia", thailand: "Thailand", australia: "Australia",
  };

  const dailyRate  = BASE[dest] * AGE_MULT[age] * COV_MULT[coverage];
  const perPerson  = Math.round(dailyRate * days);
  const total      = perPerson * people;
  const bdt        = Math.round(total * 110);
  const coverageAmt = COVERAGE_USD[coverage].toLocaleString();

  return (
    <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center shrink-0">
          <Heart size={18} className="text-white" />
        </div>
        <div>
          <h3 className="font-black text-slate-900 text-lg leading-tight">Travel Insurance Calculator</h3>
          <p className="text-xs text-slate-400 font-medium">Estimate insurance cost — Schengen requires min €30,000</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Destination</label>
          <select value={dest} onChange={e => setDest(e.target.value)}
            className="w-full p-3 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 bg-slate-50 focus:outline-none focus:border-red-500">
            {Object.entries(DEST_NAMES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Coverage Level</label>
          <div className="grid grid-cols-3 gap-1.5">
            {[["standard", "Standard"], ["premium", "Premium"], ["comprehensive", "Full Cover"]].map(([val, lbl]) => (
              <button key={val} onClick={() => setCoverage(val)}
                className={`py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                  coverage === val ? "bg-red-600 text-white" : "bg-slate-50 text-slate-500 hover:bg-slate-100"}`}>
                {lbl}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Duration: <span className="text-red-600">{days} days</span></label>
          <input type="range" min={3} max={90} value={days} onChange={e => setDays(Number(e.target.value))}
            className="w-full accent-red-600" />
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Traveler Age</label>
          <div className="grid grid-cols-3 gap-1.5">
            {[["child", "Child"], ["adult", "Adult"], ["senior", "Senior 60+"]].map(([val, lbl]) => (
              <button key={val} onClick={() => setAge(val)}
                className={`py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                  age === val ? "bg-red-600 text-white" : "bg-slate-50 text-slate-500 hover:bg-slate-100"}`}>
                {lbl}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Travelers: <span className="text-red-600">{people}</span></label>
          <input type="range" min={1} max={6} value={people} onChange={e => setPeople(Number(e.target.value))}
            className="w-full accent-red-600" />
        </div>
      </div>

      <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-slate-500 font-medium">Coverage amount</span>
          <span className="font-black text-slate-800">${coverageAmt}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-500 font-medium">Per person ({days} days)</span>
          <span className="font-black text-slate-800">${perPerson}</span>
        </div>
        <div className="border-t border-red-100 pt-2 flex justify-between items-center">
          <span className="font-black text-slate-900 text-sm">Total ({people} traveler{people > 1 ? "s" : ""})</span>
          <div className="text-right">
            <div className="font-black text-red-600 text-lg">${total}</div>
            <div className="text-[10px] text-slate-400 font-bold">≈ ৳{bdt.toLocaleString()} BDT</div>
          </div>
        </div>
      </div>

      {dest === "schengen" && (
        <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4">
          <span className="text-amber-600 text-xs font-black shrink-0 mt-0.5">⚠️</span>
          <p className="text-xs text-amber-700 font-semibold leading-snug">
            Schengen visa mandates minimum €30,000 coverage. Standard plan meets this requirement.
          </p>
        </div>
      )}

      <div className="flex gap-2">
        <Link href="/travel-resources/visa-checklist-generator"
          className="flex-1 text-center py-3 bg-red-600 text-white rounded-xl text-xs font-black hover:bg-red-700 transition">
          Check Visa Checklist →
        </Link>
        <a href="https://wa.me/8801701699743" target="_blank" rel="noopener noreferrer"
          className="flex-1 text-center py-3 bg-slate-900 text-white rounded-xl text-xs font-black hover:bg-slate-700 transition">
          💬 Get Insurance
        </a>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CALCULATOR: STUDY ABROAD COST
// ─────────────────────────────────────────────────────────────────────────────
function StudyAbroadCalculator() {
  const [country, setCountry]   = useState("uk");
  const [duration, setDuration] = useState(12);
  const [level, setLevel]       = useState("undergrad");
  const [accom, setAccom]       = useState("shared");

  const COUNTRIES = {
    uk:        { name: "United Kingdom",  tuition: { undergrad: 15000, masters: 20000, phd: 10000 }, living: { shared: 900, private: 1400, campus: 1100 }, visa: 490 },
    usa:       { name: "United States",   tuition: { undergrad: 28000, masters: 35000, phd: 18000 }, living: { shared: 1100, private: 1600, campus: 1200 }, visa: 185 },
    canada:    { name: "Canada",          tuition: { undergrad: 18000, masters: 22000, phd: 12000 }, living: { shared: 800,  private: 1300, campus: 1000 }, visa: 150 },
    australia: { name: "Australia",       tuition: { undergrad: 20000, masters: 25000, phd: 14000 }, living: { shared: 950,  private: 1500, campus: 1100 }, visa: 620 },
    germany:   { name: "Germany",         tuition: { undergrad: 300,   masters: 500,   phd: 300  }, living: { shared: 700,  private: 1100, campus: 850  }, visa: 75  },
    malaysia:  { name: "Malaysia",        tuition: { undergrad: 5000,  masters: 7000,  phd: 5000 }, living: { shared: 350,  private: 600,  campus: 450  }, visa: 50  },
  };

  const c           = COUNTRIES[country];
  const annualTuition = c.tuition[level];
  const monthlyLiving = c.living[accom];
  const totalTuition  = Math.round((annualTuition / 12) * duration);
  const totalLiving   = monthlyLiving * duration;
  const insurance     = Math.round(duration * 25);
  const flights       = 1000;
  const total         = totalTuition + totalLiving + insurance + flights + c.visa;
  const bdt           = Math.round(total * 110);

  return (
    <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
          <GraduationCap size={18} className="text-white" />
        </div>
        <div>
          <h3 className="font-black text-slate-900 text-lg leading-tight">Study Abroad Cost Calculator</h3>
          <p className="text-xs text-slate-400 font-medium">Estimate your full overseas education cost from Bangladesh</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Study Destination</label>
          <select value={country} onChange={e => setCountry(e.target.value)}
            className="w-full p-3 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 bg-slate-50 focus:outline-none focus:border-blue-500">
            {Object.entries(COUNTRIES).map(([k, v]) => <option key={k} value={k}>{v.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Degree Level</label>
          <div className="grid grid-cols-3 gap-1.5">
            {[["undergrad", "Undergrad"], ["masters", "Masters"], ["phd", "PhD"]].map(([val, lbl]) => (
              <button key={val} onClick={() => setLevel(val)}
                className={`py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                  level === val ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-500 hover:bg-slate-100"}`}>
                {lbl}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Duration: <span className="text-blue-600">{duration} months</span></label>
          <input type="range" min={3} max={48} step={3} value={duration} onChange={e => setDuration(Number(e.target.value))}
            className="w-full accent-blue-600" />
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Accommodation</label>
          <div className="grid grid-cols-3 gap-1.5">
            {[["shared", "Shared"], ["campus", "Campus"], ["private", "Private"]].map(([val, lbl]) => (
              <button key={val} onClick={() => setAccom(val)}
                className={`py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                  accom === val ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-500 hover:bg-slate-100"}`}>
                {lbl}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4 space-y-2">
        {[
          ["📚 Tuition fees", `$${totalTuition.toLocaleString()}`],
          ["🏠 Living costs", `$${totalLiving.toLocaleString()}`],
          ["✈️ Flights", `$${flights.toLocaleString()}`],
          ["🪪 Student visa fee", `$${c.visa}`],
          ["🛡️ Health insurance", `$${insurance.toLocaleString()}`],
        ].map(([label, val]) => (
          <div key={label} className="flex justify-between text-sm">
            <span className="text-slate-500 font-medium">{label}</span>
            <span className="font-black text-slate-800">{val}</span>
          </div>
        ))}
        <div className="border-t border-blue-200 pt-2 flex justify-between items-center">
          <span className="font-black text-slate-900 text-sm">Total Estimate</span>
          <div className="text-right">
            <div className="font-black text-blue-600 text-lg">${total.toLocaleString()}</div>
            <div className="text-[10px] text-slate-400 font-bold">≈ ৳{bdt.toLocaleString()} BDT</div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Link href="/our-services/visa-services/student-visa-from-bangladesh"
          className="flex-1 text-center py-3 bg-blue-600 text-white rounded-xl text-xs font-black hover:bg-blue-700 transition">
          Student Visa Guide →
        </Link>
        <Link href="/scholarships"
          className="flex-1 text-center py-3 bg-slate-900 text-white rounded-xl text-xs font-black hover:bg-slate-700 transition">
          🎓 Scholarships
        </Link>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DOC CARD
// ─────────────────────────────────────────────────────────────────────────────
const DocCard = ({ icon, title, desc, format }) => (
  <div className="bg-white p-7 rounded-[2rem] border-2 border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 group relative overflow-hidden">
    <div className="absolute top-0 right-0 w-20 h-20 bg-[#005a31]/5 rounded-bl-[3rem] group-hover:bg-[#ffcc00]/10 transition-all" aria-hidden="true" />
    <div className="flex justify-between items-start mb-6 relative z-10">
      <div className="w-14 h-14 bg-slate-50 text-[#005a31] rounded-2xl flex items-center justify-center group-hover:bg-[#005a31] group-hover:text-white transition-all duration-300">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <span className="text-[10px] font-black text-[#005a31] uppercase tracking-widest bg-green-50 border border-green-100 px-3 py-1.5 rounded-full">{format}</span>
    </div>
    <h3 className="text-base font-black text-slate-800 mb-2 tracking-tight group-hover:text-[#005a31] transition-colors leading-snug">{title}</h3>
    <p className="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-2">{desc}</p>
    <button
      className="w-full py-4 bg-slate-50 hover:bg-[#ffcc00] hover:text-[#004d2c] text-[#005a31] font-black rounded-xl transition-all flex items-center justify-center gap-2 text-xs border border-slate-100 active:scale-95"
      aria-label={`Download ${title}`}
    >
      <Download size={16} /> Download Template
    </button>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// PROMPT BOX
// ─────────────────────────────────────────────────────────────────────────────
const PromptBox = ({ title, prompt, onCopy, isCopied }) => (
  <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-xl group hover:border-[#ffcc00]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-5">
    <div className="flex-1">
      <h4 className="font-black text-white text-sm mb-2 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ffcc00] shrink-0" aria-hidden="true" />
        {title}
      </h4>
      <p className="bg-black/20 p-4 rounded-xl text-slate-300 text-xs font-medium leading-relaxed italic border border-white/5">
        "{prompt}"
      </p>
    </div>
    <button
      onClick={onCopy}
      className={`shrink-0 flex items-center gap-2 px-5 py-3.5 rounded-xl font-black text-xs transition-all ${
        isCopied ? "bg-green-500 text-white" : "bg-[#ffcc00] text-[#004d2c] hover:bg-white hover:text-slate-900"}`}
      aria-label={isCopied ? "Copied" : `Copy ${title} prompt`}
    >
      {isCopied ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy</>}
    </button>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const TravelResources = () => {
  const [searchTerm, setSearchTerm]   = useState("");
  const [activeTab, setActiveTab]     = useState("all");
  const [copyStatus, setCopyStatus]   = useState(null);
  const [activeCalc, setActiveCalc]   = useState("budget");

  const filteredResources = useMemo(() => RESOURCES.filter(r => {
    const q = searchTerm.toLowerCase();
    const matchSearch = r.title.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q);
    const matchTab    = activeTab === "all" || r.category === activeTab;
    return matchSearch && matchTab;
  }), [searchTerm, activeTab]);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopyStatus(id);
    setTimeout(() => setCopyStatus(null), 2200);
  };

  return (
    <div className="bg-[#fafbfc] min-h-screen font-sans text-slate-900">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 px-6 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-10 right-10 w-80 h-80 bg-[#ffcc00]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#005a31]/6 rounded-full blur-[140px]" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-2xl mb-6">
            <Sparkles size={13} className="text-[#ffcc00]" aria-hidden="true" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              Free Visa Tools & Travel Resources — 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#004d2c] leading-[0.92] tracking-tighter mb-4">
            Visa Document
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-amber-500">
              Resource Center.
            </span>
          </h1>

          <p className="seo-speakable text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mb-4">
            Free visa document templates, travel budget calculators, insurance estimators, and
            study abroad cost tools — built for Bangladeshi travelers applying for{" "}
            <Link href="/our-services/visa/uk-visa-application" className="text-[#005a31] font-bold hover:underline">UK</Link>,{" "}
            <Link href="/our-services/visa/canada-visa-application" className="text-[#005a31] font-bold hover:underline">Canada</Link>,{" "}
            <Link href="/our-services/visa/usa-visa-application" className="text-[#005a31] font-bold hover:underline">USA</Link>,{" "}
            <Link href="/schengen-visa" className="text-[#005a31] font-bold hover:underline">Schengen</Link>, and{" "}
            <Link href="/visa" className="text-[#005a31] font-bold hover:underline">195+ country visas</Link>.
          </p>

          {/* Hero cross-links */}
          <div className="flex flex-wrap justify-center gap-2 mb-10" role="navigation" aria-label="Visa tool quick links">
            {[
              { label: "← Visa Guide",         href: "/visa/visa-guide" },
              { label: "Rejection Checker",     href: "/visa-rejection" },
              { label: "Student Visa",          href: "/our-services/visa-services/student-visa-from-bangladesh" },
              { label: "Schengen Guide",        href: "/schengen-visa" },
              { label: "Study Abroad",          href: "/study-abroad" },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="text-xs font-semibold text-slate-600 border border-slate-200 px-4 py-1.5 rounded-full hover:border-[#005a31] hover:text-[#005a31] hover:bg-green-50 transition">
                {l.label}
              </Link>
            ))}
          </div>

          {/* ── TOOL CARDS ── */}
          <div className="grid md:grid-cols-3 gap-5 max-w-7xl mx-auto mb-12">
            {/* Travel Document Generator */}
            <Link href="/travel-resources/travel-document-generator"
              className="group relative bg-[#004d2c] rounded-[2.5rem] p-7 text-left overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl block">
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full border-[20px] border-white/5 group-hover:border-white/10 transition-all duration-500" aria-hidden="true" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#ffcc00] text-[#004d2c] px-4 py-2 rounded-2xl mb-5">
                  <FileEdit size={16} strokeWidth={2.5} aria-hidden="true" />
                  <span className="text-[10px] font-black uppercase tracking-widest">AI Generator</span>
                </div>
                <h2 className="text-2xl font-black text-white leading-tight mb-2">
                  Travel Document Generator
                </h2>
                <p className="text-green-200/70 text-xs font-medium mb-4 leading-relaxed">
                  Instantly generate NOC, salary certificates, SOP, cover letters — embassy-formatted.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["NOC", "Cover Letter", "SOP", "Salary Cert"].map(tag => (
                    <span key={tag} className="bg-white/10 text-green-100 text-[9px] font-bold uppercase px-2.5 py-1 rounded-xl border border-white/10">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 bg-[#ffcc00] text-[#004d2c] px-5 py-3 rounded-2xl font-black text-xs group-hover:bg-white transition-all duration-300 w-fit">
                  Generate Now <ArrowRight size={14} aria-hidden="true" />
                </div>
              </div>
            </Link>

            {/* Visa Checklist Generator */}
            <Link href="/travel-resources/visa-checklist-generator"
              className="group relative bg-white border-2 border-slate-100 rounded-[2.5rem] p-7 text-left overflow-hidden hover:scale-[1.02] hover:border-[#005a31]/30 transition-all duration-300 shadow-sm hover:shadow-xl block">
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full border-[20px] border-slate-100 group-hover:border-[#005a31]/10 transition-all duration-500" aria-hidden="true" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#004d2c] text-white px-4 py-2 rounded-2xl mb-5">
                  <ListChecks size={16} strokeWidth={2.5} aria-hidden="true" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Smart Checklist</span>
                </div>
                <h2 className="text-2xl font-black text-[#004d2c] leading-tight mb-2">
                  Visa Checklist Generator
                </h2>
                <p className="text-slate-400 text-xs font-medium mb-4 leading-relaxed">
                  Country-specific document checklists — Schengen, USA, UK, Canada, Australia, and more.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["Schengen", "USA", "UK", "Canada", "Australia"].map(tag => (
                    <span key={tag} className="bg-slate-50 text-[#004d2c] text-[9px] font-bold uppercase px-2.5 py-1 rounded-xl border border-slate-200">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 bg-[#004d2c] group-hover:bg-[#ffcc00] text-white group-hover:text-[#004d2c] px-5 py-3 rounded-2xl font-black text-xs transition-all duration-300 w-fit">
                  Build Checklist <ArrowRight size={14} aria-hidden="true" />
                </div>
              </div>
            </Link>

            {/* Processing Time Tracker */}
            <Link href="/travel-resources/visa-processing-time-tracker"
              className="group relative bg-[#004d2c] rounded-[2.5rem] p-7 text-left overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl block">
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full border-[20px] border-white/5 group-hover:border-white/10 transition-all duration-500" aria-hidden="true" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#ffcc00] text-[#004d2c] px-4 py-2 rounded-2xl mb-5">
                  <Clock size={16} strokeWidth={2.5} aria-hidden="true" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Processing Time</span>
                </div>
                <h2 className="text-2xl font-black text-white leading-tight mb-2">
                  Visa Processing Time Tracker
                </h2>
                <p className="text-green-200/70 text-xs font-medium mb-4 leading-relaxed">
                  Real-time wait estimates by country and visa type — plan your application timeline.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["Schengen", "USA", "UK", "Canada", "Australia"].map(tag => (
                    <span key={tag} className="bg-slate-50 text-[#004d2c] text-[9px] font-bold uppercase px-2.5 py-1 rounded-xl border border-slate-200">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 bg-[#ffcc00] text-[#004d2c] px-5 py-3 rounded-2xl font-black text-xs group-hover:bg-white transition-all duration-300 w-fit">
                  Track Now <ArrowRight size={14} aria-hidden="true" />
                </div>
              </div>
            </Link>
          </div>

          {/* Search */}
          <div className="w-full max-w-2xl mx-auto relative">
            <div className="relative bg-white rounded-[2rem] border-2 border-slate-100 shadow-lg flex items-center">
              <Search size={20} className="ml-5 text-slate-400 shrink-0" aria-hidden="true" />
              <input
                type="search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search templates — 'NOC', 'SOP', 'Bank', 'Cover Letter'..."
                className="w-full py-5 px-4 rounded-[2rem] outline-none text-sm font-semibold placeholder:text-slate-300 bg-transparent"
                aria-label="Search visa document templates"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm("")} className="mr-4 p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-400 rounded-full transition" aria-label="Clear search">
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CALCULATORS ── */}
      <section className="container mx-auto max-w-7xl px-6 py-16" aria-label="Free visa and travel calculators">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight shrink-0">
            Free Travel & Visa Calculators
          </h2>
          <div className="h-px flex-1 bg-slate-200 hidden sm:block" />
        </div>
        <p className="text-sm text-slate-500 max-w-2xl mb-8 leading-relaxed">
          Estimate your full trip cost, travel insurance premium, and study abroad expenses before applying.
          Use these calculators alongside our{" "}
          <Link href="/visa/visa-guide" className="text-[#005a31] font-semibold hover:underline">Visa Guide</Link>{" "}
          and{" "}
          <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">Visa Checklist Generator</Link>.
        </p>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-8 flex-wrap" role="tablist" aria-label="Calculator tabs">
          {[
            { id: "budget",   icon: <Wallet size={14} />,          label: "Travel Budget" },
            { id: "insurance",icon: <Heart size={14} />,            label: "Insurance Cost" },
            { id: "study",    icon: <GraduationCap size={14} />,    label: "Study Abroad" },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCalc(tab.id)}
              role="tab"
              aria-selected={activeCalc === tab.id}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all ${
                activeCalc === tab.id
                  ? "bg-[#005a31] text-white shadow-lg"
                  : "bg-white border-2 border-slate-100 text-slate-500 hover:border-[#005a31]/30 hover:text-[#005a31]"}`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <div className="max-w-3xl" role="tabpanel">
          {activeCalc === "budget"    && <TravelBudgetCalculator />}
          {activeCalc === "insurance" && <TravelInsuranceCalculator />}
          {activeCalc === "study"     && <StudyAbroadCalculator />}
        </div>
      </section>

      {/* ── SEO CONTENT BLOCK ── */}
      <section className="container mx-auto max-w-7xl px-6 pb-10" aria-label="Visa travel resources guide">
        <div className="bg-white rounded-[2rem] border-2 border-slate-100 p-8 md:p-12">
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            Free Visa Document Templates & Travel Tools — Complete Guide 2026
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-500 leading-relaxed">
            <div className="space-y-4">
              <p>
                Eammu Holidays' Travel Resource Center provides free, embassy-verified document templates
                for{" "}
                <Link href="/our-services/visa-services/tourist-visa-from-bangladesh" className="text-[#005a31] font-semibold hover:underline">tourist visa</Link>,{" "}
                <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-[#005a31] font-semibold hover:underline">student visa</Link>, and{" "}
                <Link href="/our-services/visa-services/work-visa-from-bangladesh" className="text-[#005a31] font-semibold hover:underline">work visa</Link>{" "}
                applications from Bangladesh. Our NOC templates, salary certificates, cover letter formats,
                and bank statement trackers are formatted to match exact embassy requirements — covering
                the UK, USA, Canada, Schengen, and Australia.
              </p>
              <p>
                The <strong className="text-slate-700">Travel Budget Calculator</strong> helps you estimate the
                full cost of your trip — including flights, daily living, visa fees, and travel insurance —
                so you can prepare accurate bank balance requirements before applying.
                For <Link href="/schengen-visa" className="text-[#005a31] font-semibold hover:underline">Schengen visa</Link>{" "}
                applicants, embassy officers look for sufficient funds to cover approximately €100/day.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Our <strong className="text-slate-700">Travel Insurance Calculator</strong> estimates your
                insurance premium for any destination and duration — critical for Schengen visas which
                mandate minimum €30,000 medical coverage. The{" "}
                <strong className="text-slate-700">Study Abroad Cost Calculator</strong> covers tuition,
                living costs, student visa fees, and insurance for the UK, USA, Canada, Australia, Germany,
                and Malaysia — essential planning for{" "}
                <Link href="/study-abroad" className="text-[#005a31] font-semibold hover:underline">study abroad</Link>{" "}
                applicants.
              </p>
              <p>
                Use our{" "}
                <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">Visa Checklist Generator</Link>{" "}
                alongside these templates to build a complete, embassy-ready document package.
                Check our{" "}
                <Link href="/visa-rejection" className="text-[#005a31] font-semibold hover:underline">Visa Rejection Checker</Link>{" "}
                to understand your approval odds before submitting. For personalized help,
                contact our{" "}
                <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-semibold hover:underline">Dhaka office</Link>{" "}
                or{" "}
                <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-semibold hover:underline">Dubai office</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOCUMENT EXPLORER ── */}
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-14">

          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-10 space-y-7">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-5 flex items-center gap-2">
                  <Filter size={12} aria-hidden="true" /> Filter Documents
                </h3>
                <nav className="flex flex-col gap-2.5" aria-label="Document category filter">
                  {[
                    { id: "all",        label: "All Templates" },
                    { id: "financial",  label: "Financial Docs" },
                    { id: "corporate",  label: "Corporate / NOC" },
                    { id: "legal",      label: "Legal Drafts" },
                    { id: "visa-tools", label: "Visa Tools" },
                  ].map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id)}
                      aria-pressed={activeTab === cat.id}
                      className={`flex items-center justify-between px-5 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border ${
                        activeTab === cat.id
                          ? "bg-[#005a31] text-white border-[#005a31] shadow-lg"
                          : "bg-white text-slate-500 border-slate-100 hover:border-[#ffcc00]/60 hover:text-[#005a31]"}`}
                    >
                      {cat.label}
                      <ChevronRight size={13} className={activeTab === cat.id ? "opacity-100" : "opacity-30"} aria-hidden="true" />
                    </button>
                  ))}
                </nav>
              </div>

              {/* Quick Tool Shortcuts */}
              <div className="space-y-2">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Zap size={12} className="text-[#ffcc00]" aria-hidden="true" /> Quick Tools
                </h3>
                {[
                  { href: "/travel-resources/travel-document-generator", icon: <FileEdit size={14} />, label: "Doc Generator", color: "amber" },
                  { href: "/travel-resources/visa-checklist-generator",  icon: <ListChecks size={14} />, label: "Checklist Builder", color: "green" },
                  { href: "/visa-rejection",                              icon: <TrendingUp size={14} />, label: "Rejection Checker", color: "red" },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className={`flex items-center gap-2.5 px-4 py-3.5 rounded-xl group transition-all border text-xs font-black uppercase tracking-tight
                      ${l.color === "amber" ? "bg-[#ffcc00]/10 border-[#ffcc00]/20 text-[#005a31] hover:bg-[#ffcc00] hover:text-[#004d2c]"
                      : l.color === "green" ? "bg-green-50 border-green-100 text-[#005a31] hover:bg-[#005a31] hover:text-white"
                      : "bg-red-50 border-red-100 text-red-700 hover:bg-red-600 hover:text-white"}`}>
                    {l.icon} {l.label}
                  </Link>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-[#004d2c] p-6 rounded-[2rem] text-white relative overflow-hidden">
                <h4 className="font-black text-base mb-2 relative z-10">Need Custom Drafts?</h4>
                <p className="text-xs text-green-100/60 mb-4 relative z-10 leading-relaxed">
                  Specialized legal letters for unusual visa cases — prepared by our certified consultants.
                </p>
                <a href="https://wa.me/8801701699743" target="_blank" rel="noopener noreferrer"
                  className="block text-center w-full py-3 bg-[#ffcc00] text-[#004d2c] rounded-xl font-black text-xs hover:bg-white transition-all relative z-10">
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
              <h2 className="text-2xl font-black text-[#005a31] uppercase tracking-tight">
                {activeTab === "all" ? "All Document Templates" : activeTab.replace("-", " ") + " Templates"}
              </h2>
              <span className="bg-slate-100 px-4 py-1.5 rounded-full text-[10px] font-black text-slate-400 uppercase">
                {filteredResources.length} Template{filteredResources.length !== 1 ? "s" : ""}
              </span>
            </div>

            {filteredResources.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6" aria-label="Visa document templates">
                {filteredResources.map(res => <DocCard key={res.id} {...res} />)}
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                <FileSearch size={40} className="mx-auto text-slate-300 mb-4" aria-hidden="true" />
                <h3 className="text-lg font-black text-slate-800">No templates found</h3>
                <p className="text-slate-500 mt-2 text-sm">Try "NOC", "Bank", or "Cover Letter".</p>
              </div>
            )}

            {/* AI PROMPTS */}
            <div className="mt-20 bg-slate-900 rounded-[3rem] p-8 lg:p-14 relative overflow-hidden" aria-label="AI visa writing prompts">
              <div className="absolute top-0 right-0 p-8 opacity-[0.04] pointer-events-none" aria-hidden="true">
                <MessageSquare size={250} />
              </div>
              <div className="relative z-10">
                <div className="mb-10">
                  <span className="text-[#ffcc00] font-black tracking-widest uppercase text-[10px]">AI Writing Tools</span>
                  <h2 className="text-3xl font-black text-white mt-3 mb-4">Visa AI Prompt Templates</h2>
                  <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
                    Copy these expert-engineered prompts into ChatGPT or Gemini to generate
                    professional visa letters, SOPs, and interview preparation instantly.
                    Combine with our{" "}
                    <Link href="/travel-resources/travel-document-generator" className="text-[#ffcc00] hover:underline font-semibold">
                      Document Generator
                    </Link>{" "}
                    for embassy-ready output.
                  </p>
                </div>
                <div className="grid gap-4">
                  {AI_PROMPTS.map(p => (
                    <PromptBox
                      key={p.id}
                      title={p.title}
                      prompt={p.prompt}
                      onCopy={() => handleCopy(p.prompt, p.id)}
                      isCopied={copyStatus === p.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── RELATED SERVICES BANNERS ── */}
      <section className="container mx-auto max-w-7xl px-6 pb-16" aria-label="Related visa services">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-600 text-white rounded-3xl p-7 flex flex-col justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-2">🎓 Study Abroad</p>
              <h3 className="font-black text-lg mb-1">Student Visa Planning</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-[#ffcc00] font-semibold hover:underline">Student visa</Link>,{" "}
                <Link href="/scholarships" className="text-[#ffcc00] font-semibold hover:underline">scholarships</Link>, and{" "}
                <Link href="/target-ielts-immigration-center" className="text-[#ffcc00] font-semibold hover:underline">IELTS prep</Link> — all in one place.
              </p>
            </div>
            <Link href="/study-abroad" className="self-start px-5 py-3 bg-[#ffcc00] text-[#005a31] rounded-xl font-black text-xs hover:bg-white transition">
              Study Abroad Guide →
            </Link>
          </div>
          <div className="bg-red-600 text-white rounded-3xl p-7 flex flex-col justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-red-200 mb-2">📊 Before You Apply</p>
              <h3 className="font-black text-lg mb-1">Visa Rejection Checker</h3>
              <p className="text-sm text-red-100 leading-relaxed">
                Real refusal rates for 195+ countries — know your approval odds before spending on documents and fees.
              </p>
            </div>
            <Link href="/visa-rejection" className="self-start px-5 py-3 bg-white text-red-600 rounded-xl font-black text-xs hover:bg-red-50 transition">
              Check Rejection Rate →
            </Link>
          </div>
          <div className="bg-[#004d2c] text-white rounded-3xl p-7 flex flex-col justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-green-400 mb-2">🇺🇸 USA Specialist</p>
              <h3 className="font-black text-lg mb-1">US Visa Interview Coaching</h3>
              <p className="text-sm text-green-100 leading-relaxed">
                B1/B2, F1, and immigrant visa interview preparation at our{" "}
                <Link href="/contact/travel-agency-bangladesh" className="text-[#ffcc00] hover:underline font-semibold">Dhaka office</Link>.
              </p>
            </div>
            <Link href="/target-usa-visa-interview-preparation" className="self-start px-5 py-3 bg-[#ffcc00] text-[#004d2c] rounded-xl font-black text-xs hover:bg-white transition">
              Book Interview Prep →
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ── */}
      <section className="container mx-auto max-w-7xl px-6 pb-12" aria-label="Related visa services and pages">
        <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-5">
          Related Visa Services &amp; Resources
        </h2>
        <div className="flex flex-wrap gap-2">
          {INTERNAL_LINKS.map(l => (
            <Link key={l.href} href={l.href}
              className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-semibold hover:border-[#005a31] hover:text-[#005a31] hover:bg-green-50 transition">
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <footer className="bg-[#005a31] text-white py-20 mx-6 mb-10 rounded-[3rem]">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <span className="inline-block px-4 py-2 bg-[#ffcc00] text-[#005a31] rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            🛡️ 98% Visa Approval Rate · 42,000+ Travelers Helped
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight">
            Zero-Stress Visa Documentation.
          </h2>
          <p className="text-green-100 text-sm max-w-xl mx-auto mb-10 leading-relaxed">
            Let our certified consultants handle everything — from document preparation to embassy submission.
            Offices in{" "}
            <Link href="/contact/travel-agency-bangladesh" className="text-[#ffcc00] hover:underline font-semibold">Dhaka</Link>,{" "}
            <Link href="/contact/travel-agency-dubai" className="text-[#ffcc00] hover:underline font-semibold">Dubai</Link>,{" "}
            <Link href="/contact/travel-agency-armenia" className="text-[#ffcc00] hover:underline font-semibold">Armenia</Link>, and{" "}
            <Link href="/contact/travel-agency-georgia" className="text-[#ffcc00] hover:underline font-semibold">Georgia</Link>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/8801701699743" target="_blank" rel="noopener noreferrer"
              className="bg-[#ffcc00] text-[#004d2c] px-10 py-5 rounded-[2rem] font-black shadow-2xl hover:bg-white transition-all flex items-center justify-center gap-2 text-sm">
              💬 Talk to a Visa Expert <ArrowRight size={18} aria-hidden="true" />
            </a>
            <Link href="/visa/visa-guide"
              className="px-10 py-5 rounded-[2rem] font-black border-2 border-white/20 hover:bg-white/10 transition-all text-sm">
              Browse Visa Guides →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TravelResources;