"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Plane, Calculator, Globe, CheckCircle, ArrowRight,
  Clock, Star, ChevronDown, MapPin, ShieldCheck,
  BookOpen, Target, AlertCircle, TrendingUp,
  Navigation, Wallet, Calendar, Search, X,
  MessageCircle, Users, Award, BarChart3, RefreshCw,
} from "lucide-react";

/* ─────────────────────────────────────────────
   CURRENCY CONFIG
   Live-ish fixed rates (May 2025 approximate)
   BDT base: 1 USD ≈ 110 BDT | 1 AED ≈ 30 BDT
───────────────────────────────────────────── */
const CURRENCIES = {
  BDT: { symbol: "৳", code: "BDT", label: "Bangladeshi Taka",  rate: 1,        flag: "🇧🇩" },
  USD: { symbol: "$", code: "USD", label: "US Dollar",          rate: 1 / 110,  flag: "🇺🇸" },
  AED: { symbol: "د.إ",code: "AED", label: "UAE Dirham",        rate: 1 / 30,   flag: "🇦🇪" },
};

function useCurrency() {
  const [cur, setCur] = useState("BDT");
  const cfg = CURRENCIES[cur];
  const fmt = (bdtAmount) => {
    const converted = bdtAmount * cfg.rate;
    if (cur === "BDT") return `৳${Math.round(converted).toLocaleString("en-IN")}`;
    if (cur === "USD") return `$${converted < 1000 ? converted.toFixed(0) : Math.round(converted).toLocaleString()}`;
    if (cur === "AED") return `AED ${Math.round(converted).toLocaleString()}`;
    return `${cfg.symbol}${Math.round(converted).toLocaleString()}`;
  };
  return { cur, setCur, cfg, fmt };
}

/* ─────────────────────────────────────────────
   REALISTIC 2025 DESTINATION BUDGET DATA (BDT)
   All prices updated for May 2025 actuals
   flight = [economy_budget, economy_peak]
   hotel  = [budget_per_night, midrange_per_night]  (room only)
   daily  = [backpacker_day, midrange_day]
───────────────────────────────────────────── */
const DEST_DATA = {
  "Georgia": {
    region: "Caucasus", visa: "Visa-Free 365d", visaCost: 0,
    flight: [32000, 58000], hotel: [1400, 4500], daily: [2800, 5500],
    tag: "Cheapest", tagColor: "bg-green-500",
    tip: "365-day visa-free for Bangladeshis. Tbilisi has halal food everywhere. Castel/guesthouse scene is excellent value.",
    href: "/contact/travel-agency-georgia", bestTime: "Apr–Jun · Sep–Oct", currency: "GEL (1 GEL ≈ ৳40)",
    highlights: ["Tbilisi Old Town", "Kazbegi Mountains", "Batumi Beach"],
    visaNote: "No visa required — show onward ticket",
  },
  "Nepal": {
    region: "South Asia", visa: "Visa on Arrival", visaCost: 4500,
    flight: [9000, 20000], hotel: [900, 3200], daily: [2000, 4500],
    tag: "Nearest", tagColor: "bg-blue-500",
    tip: "Cheapest international trip from Bangladesh. Kathmandu + Pokhara combo is unmissable. Trekking season: Oct–Nov.",
    href: "/visa", bestTime: "Oct–Nov · Mar–Apr", currency: "NPR (1 NPR ≈ ৳0.85)",
    highlights: ["Kathmandu", "Pokhara", "Everest Base Camp Trek"],
    visaNote: "15-day VOA: $30 | 30-day: $50",
  },
  "Thailand": {
    region: "Southeast Asia", visa: "Visa on Arrival", visaCost: 4200,
    flight: [20000, 40000], hotel: [1800, 7000], daily: [3200, 8000],
    tag: "Most Popular", tagColor: "bg-orange-500",
    tip: "Bangkok + Pattaya + Phuket is the classic trio. Street food is world-class and incredibly cheap. Book Dec–Jan hotels 3 months ahead.",
    href: "/visa", bestTime: "Nov–Feb", currency: "THB (1 THB ≈ ৳3.2)",
    highlights: ["Bangkok", "Phuket", "Pattaya", "Chiang Mai"],
    visaNote: "VOA 15 days: THB 2,000 (~৳6,400) at airport",
  },
  "Malaysia": {
    region: "Southeast Asia", visa: "eNTRI / eVisa", visaCost: 2800,
    flight: [20000, 38000], hotel: [2000, 7000], daily: [3800, 8500],
    tag: "Halal Friendly", tagColor: "bg-emerald-600",
    tip: "Muslim-friendly with abundant halal food. KL + Langkawi + Penang is outstanding value. AirAsia flies Dhaka–KL cheaply.",
    href: "/visa/e-visa", bestTime: "Mar–Sep", currency: "MYR (1 MYR ≈ ৳26)",
    highlights: ["Kuala Lumpur", "Langkawi", "Penang", "Genting Highlands"],
    visaNote: "eNTRI: MYR 45 (~৳1,170) | eVisa: MYR 80",
  },
  "United Arab Emirates": {
    region: "Middle East", visa: "Tourist Visa", visaCost: 15000,
    flight: [25000, 55000], hotel: [6000, 22000], daily: [9000, 25000],
    tag: "Premium", tagColor: "bg-yellow-500",
    tip: "Desert safari + Burj Khalifa + Dubai Mall. Budget carefully — one of the world's most expensive cities. Cook or eat at Indian restaurants to cut food costs.",
    href: "/contact/travel-agency-dubai", bestTime: "Oct–Apr", currency: "AED (1 AED ≈ ৳30)",
    highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Abu Dhabi"],
    visaNote: "30-day single entry: AED 500 (~৳15,000)",
  },
  "Turkey": {
    region: "Eurasia", visa: "e-Visa", visaCost: 5000,
    flight: [38000, 78000], hotel: [2800, 10000], daily: [4500, 11000],
    tag: "Value for Money", tagColor: "bg-red-500",
    tip: "Cappadocia hot air balloon + Istanbul Blue Mosque + Ephesus ruins. Rich history at affordable cost. Turkish lira devaluation makes it great value for foreign visitors.",
    href: "/visa/e-visa", bestTime: "Apr–Jun · Sep–Nov", currency: "TRY (1 TRY ≈ ৳3.3)",
    highlights: ["Istanbul", "Cappadocia", "Ephesus", "Pamukkale"],
    visaNote: "e-Visa: $50 (~৳5,500) online in minutes",
  },
  "Maldives": {
    region: "South Asia", visa: "Visa Free", visaCost: 0,
    flight: [28000, 62000], hotel: [9000, 60000], daily: [7000, 35000],
    tag: "Luxury Beach", tagColor: "bg-cyan-500",
    tip: "Stay on local islands (Maafushi, Thulusdhoo) for 1/10th the cost of overwater bungalows. Snorkeling from local islands is free!",
    href: "/visa", bestTime: "Dec–Mar", currency: "MVR (1 MVR ≈ ৳7)",
    highlights: ["Maafushi Local Island", "Overwater Bungalows", "Snorkeling", "Whale Shark Diving"],
    visaNote: "Visa free on arrival — 30 days",
  },
  "Singapore": {
    region: "Southeast Asia", visa: "Tourist Visa", visaCost: 8500,
    flight: [22000, 45000], hotel: [8000, 22000], daily: [9000, 20000],
    tag: "Stopover Hub", tagColor: "bg-purple-500",
    tip: "Combine with Malaysia — Singapore 2 nights + KL 4 nights is great value. Hawker centres have amazing cheap food. Many attractions are free.",
    href: "/visa", bestTime: "Feb–Apr", currency: "SGD (1 SGD ≈ ৳90)",
    highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa", "Hawker Centres"],
    visaNote: "Single entry tourist visa: SGD 30–40",
  },
  "Japan": {
    region: "East Asia", visa: "Tourist Visa", visaCost: 6000,
    flight: [45000, 95000], hotel: [4000, 15000], daily: [7000, 18000],
    tag: "Dream Destination", tagColor: "bg-pink-500",
    tip: "Japan Rail Pass saves 40% on transport. Book cherry blossom (Mar–Apr) hotels 6 months ahead. 7-Eleven convenience food is surprisingly tasty and cheap.",
    href: "/visa", bestTime: "Mar–Apr · Oct–Nov", currency: "JPY (100 JPY ≈ ৳75)",
    highlights: ["Tokyo", "Kyoto", "Osaka", "Mount Fuji", "Hiroshima"],
    visaNote: "Tourist sticker visa: ৳5,500–6,500",
  },
  "Germany": {
    region: "Europe", visa: "Schengen Visa", visaCost: 9000,
    flight: [70000, 145000], hotel: [4000, 16000], daily: [8000, 18000],
    tag: "Schengen Gateway", tagColor: "bg-indigo-500",
    tip: "Apply Schengen through Germany embassy — fastest processing from Bangladesh. One visa covers 26 countries. Supermarkets have excellent cheap food.",
    href: "/visa", bestTime: "May–Jun · Sep", currency: "EUR (1 EUR ≈ ৳130)",
    highlights: ["Berlin", "Munich", "Neuschwanstein Castle", "Rhine Valley"],
    visaNote: "Schengen visa: €80 (~৳10,400)",
  },
  "Armenia": {
    region: "Caucasus", visa: "e-Visa", visaCost: 1600,
    flight: [35000, 65000], hotel: [1600, 5500], daily: [2800, 6000],
    tag: "Hidden Gem", tagColor: "bg-rose-500",
    tip: "Ancient monasteries + affordable food. Combine with Georgia for a full Caucasus trip (both cheap!). Yerevan has a fantastic nightlife and café culture.",
    href: "/contact/travel-agency-armenia", bestTime: "Apr–Jun · Sep–Oct", currency: "AMD (1 AMD ≈ ৳0.27)",
    highlights: ["Yerevan", "Geghard Monastery", "Lake Sevan", "Tatev Monastery"],
    visaNote: "e-Visa: $6 (~৳660) for 21 days",
  },
  "Indonesia": {
    region: "Southeast Asia", visa: "e-VOA", visaCost: 3500,
    flight: [25000, 50000], hotel: [1400, 7000], daily: [2800, 8000],
    tag: "Nature & Beach", tagColor: "bg-lime-600",
    tip: "Bali has the best budget beach resorts in Asia. Lombok is less crowded and 30% cheaper. Muslim-friendly in Jakarta. The rice terraces in Ubud are stunning.",
    href: "/visa/e-visa", bestTime: "Apr–Oct", currency: "IDR (10,000 IDR ≈ ৳80)",
    highlights: ["Bali", "Lombok", "Yogyakarta", "Komodo Island"],
    visaNote: "e-VOA: $35 (~৳3,850) — pay online",
  },
  "France": {
    region: "Europe", visa: "Schengen Visa", visaCost: 9000,
    flight: [72000, 155000], hotel: [5500, 20000], daily: [10000, 22000],
    tag: "Iconic Europe", tagColor: "bg-blue-600",
    tip: "Paris in off-season (Jan–Mar) is 40% cheaper. Book Eiffel Tower tickets 3 months ahead. The free Louvre on first Sundays is a great money-saver.",
    href: "/visa", bestTime: "May–Jun · Sep", currency: "EUR (1 EUR ≈ ৳130)",
    highlights: ["Paris", "Eiffel Tower", "Louvre", "French Riviera"],
    visaNote: "Schengen visa: €80 (~৳10,400)",
  },
  "Saudi Arabia": {
    region: "Middle East", visa: "e-Visa / Umrah", visaCost: 5500,
    flight: [22000, 50000], hotel: [3500, 14000], daily: [4500, 12000],
    tag: "Umrah Destination", tagColor: "bg-green-700",
    tip: "Combine Umrah with Makkah + Madinah sightseeing + AlUla. Book via Eammu Holidays for best package rates. AlUla is breathtaking and recently opened to tourists.",
    href: "/offers", bestTime: "Ramadan · Winter", currency: "SAR (1 SAR ≈ ৳32)",
    highlights: ["Makkah", "Madinah", "AlUla", "Diriyah Heritage Site"],
    visaNote: "Tourist e-Visa: SAR 300 (~৳9,600) | Umrah: separate",
  },
  "India": {
    region: "South Asia", visa: "e-Visa", visaCost: 1300,
    flight: [5500, 14000], hotel: [800, 3500], daily: [1600, 4000],
    tag: "Nearest & Cheapest", tagColor: "bg-orange-600",
    tip: "Kolkata is just a short flight. Delhi, Mumbai, Agra Taj Mahal, Rajasthan — most affordable from Bangladesh. AC trains are comfortable and very cheap.",
    href: "/visa/india", bestTime: "Oct–Mar", currency: "INR (1 INR ≈ ৳1.35)",
    highlights: ["Kolkata", "Delhi", "Agra (Taj Mahal)", "Rajasthan", "Mumbai"],
    visaNote: "e-Tourist Visa: $25 (~৳2,750) online",
  },
  "Qatar": {
    region: "Middle East", visa: "Visa Free", visaCost: 0,
    flight: [24000, 50000], hotel: [5500, 18000], daily: [7500, 20000],
    tag: "FIFA Legacy", tagColor: "bg-purple-600",
    tip: "Visa-free for Bangladeshis. Doha souk + Pearl Qatar + world-class museums (free entry). Qatar is a great stopover if flying via Doha.",
    href: "/visa", bestTime: "Nov–Mar", currency: "QAR (1 QAR ≈ ৳33)",
    highlights: ["Souq Waqif", "The Pearl Qatar", "National Museum", "Desert Safari"],
    visaNote: "Visa free — 30 days for Bangladeshi passport",
  },
};

const POPULAR_NAMES = ["Thailand","Malaysia","Georgia","United Arab Emirates","Turkey","Japan","Maldives","India"];

const BUDGET_TIERS = [
  { tier: "Backpacker", icon: "🎒", bdtRange: [40000, 80000], usd: "$360–730", aed: "AED 1,300–2,650",
    desc: "Hostel dorms, street food, local transport, free attractions.",
    best: ["Georgia","Nepal","Thailand","Indonesia"], color: "border-green-200 hover:border-green-400" },
  { tier: "Mid-Range", icon: "🏨", bdtRange: [80000, 180000], usd: "$730–1,640", aed: "AED 2,650–6,000",
    desc: "3-star hotels, restaurant meals, mix of guided and self-exploration.",
    best: ["Thailand","Malaysia","Turkey","Armenia"], color: "border-blue-200 hover:border-blue-400" },
  { tier: "Comfortable", icon: "✈️", bdtRange: [180000, 350000], usd: "$1,640–3,180", aed: "AED 6,000–11,650",
    desc: "4-star hotels, guided tours, fine dining, major attractions.",
    best: ["UAE","Singapore","Japan","Schengen"], color: "border-orange-200 hover:border-orange-400" },
  { tier: "Luxury", icon: "💎", bdtRange: [350000, 1000000], usd: "$3,180+", aed: "AED 11,650+",
    desc: "5-star resorts, overwater villas, private transfers, VIP experiences.",
    best: ["Maldives","Dubai 5★","Tokyo","Swiss Alps"], color: "border-yellow-200 hover:border-yellow-400" },
];

const FLIGHT_TIPS = [
  { icon: "📅", tip: "Book 6–8 weeks ahead", detail: "For Asia routes from DAC. Book 3–6 months ahead for Europe/USA. Last-minute fares are 2–3× more expensive." },
  { icon: "🗓️", tip: "Fly Tue–Thu", detail: "Tuesday–Thursday departures are 15–30% cheaper than Friday–Sunday peak days." },
  { icon: "🔔", tip: "Set price alerts", detail: "Google Flights and Skyscanner alerts catch price dips automatically. Track multiple routes simultaneously." },
  { icon: "🔄", tip: "Use connecting hubs", detail: "Dhaka→Dubai / KL / Istanbul / Doha→destination is often 30–50% cheaper than attempting a direct route." },
  { icon: "🛄", tip: "Go carry-on only", detail: "Budget airlines charge ৳4,000–10,000 per checked bag each way. One 7kg cabin bag changes everything." },
  { icon: "📱", tip: "Use incognito mode", detail: "Airline and OTA sites raise prices after repeated searches. Always use private/incognito browser mode." },
  { icon: "⚡", tip: "Follow flash sales", detail: "AirAsia, Air Arabia, Biman run flash sales during Eid/New Year/Black Friday. Follow their social pages." },
  { icon: "⚖️", tip: "Compare CGP vs DAC", detail: "Some routes (especially to KL, Kolkata) are cheaper from Chittagong (CGP) than Dhaka (DAC). Always compare." },
];

const INTERNAL_LINKS = [
  { href: "/visa", icon: <ShieldCheck size={13}/>, label: "All Visa Services", desc: "200+ countries" },
  { href: "/visa/e-visa", icon: <Globe size={13}/>, label: "E-Visa Destinations", desc: "Fast online visas" },
  { href: "/visa/visa-guide", icon: <BookOpen size={13}/>, label: "Visa Guides", desc: "Step-by-step" },
  { href: "/travel-resources/visa-checklist-generator", icon: <CheckCircle size={13}/>, label: "Visa Checklist", desc: "Free doc list" },
  { href: "/travel-resources/visa-processing-time-tracker", icon: <Clock size={13}/>, label: "Processing Tracker", desc: "Real timelines" },
  { href: "/travel-cost-calculator", icon: <Calculator size={13}/>, label: "Cost Calculator", desc: "Trip estimator" },
  { href: "/offers", icon: <Star size={13}/>, label: "Tour Offers", desc: "Package deals" },
  { href: "/study-abroad", icon: <Target size={13}/>, label: "Study Abroad", desc: "UK, USA, Canada" },
  { href: "/scholarships", icon: <Award size={13}/>, label: "Scholarships", desc: "Funded programmes" },
  { href: "/visa-rejection", icon: <AlertCircle size={13}/>, label: "Visa Rejection", desc: "Re-application" },
  { href: "/contact/travel-agency-bangladesh", icon: <MapPin size={13}/>, label: "Bangladesh Offices", desc: "Cumilla & Dhaka" },
  { href: "/contact/travel-agency-dubai", icon: <Plane size={13}/>, label: "Dubai Office", desc: "Business Bay" },
  { href: "/contact/travel-agency-georgia", icon: <Plane size={13}/>, label: "Georgia Office", desc: "Tbilisi" },
  { href: "/contact/travel-agency-armenia", icon: <Plane size={13}/>, label: "Armenia Office", desc: "Yerevan" },
  { href: "/blogs", icon: <BookOpen size={13}/>, label: "Travel Blog", desc: "Tips & guides" },
  { href: "/testimonials", icon: <Star size={13}/>, label: "Testimonials", desc: "10,000+ reviews" },
  { href: "/target-ielts-immigration-center", icon: <BookOpen size={13}/>, label: "IELTS Center", desc: "Cumilla coaching" },
  { href: "/visa/dubai-residents", icon: <Globe size={13}/>, label: "Dubai Resident Visas", desc: "For UAE residents" },
  { href: "/online-travel-agency-bangladesh", icon: <Navigation size={13}/>, label: "Online Agency", desc: "Book online" },
  { href: "/contact", icon: <MessageCircle size={13}/>, label: "Contact All Offices", desc: "Global network" },
];

/* ─────────────────────────────────────────────
   CURRENCY SWITCHER PILL
───────────────────────────────────────────── */
function CurrencySwitcher({ cur, setCur }) {
  return (
    <div className="inline-flex items-center gap-1 bg-white/15 border border-white/25 rounded-2xl p-1 backdrop-blur-sm">
      {Object.entries(CURRENCIES).map(([code, cfg]) => (
        <button
          key={code}
          onClick={() => setCur(code)}
          title={cfg.label}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
            cur === code
              ? "bg-white text-[#005a31] shadow-md"
              : "text-white/70 hover:text-white hover:bg-white/10"
          }`}
        >
          <span>{cfg.flag}</span>
          <span>{code}</span>
        </button>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   TRIP COST CALCULATOR — multi-currency
───────────────────────────────────────────── */
function CostCalculator({ countries }) {
  const [dest, setDest]     = useState("Thailand");
  const [days, setDays]     = useState(7);
  const [people, setPeople] = useState(2);
  const [tier, setTier]     = useState("mid");
  const { cur, setCur, fmt } = useCurrency();

  const selectedCountryData = countries.find(c => c.country === dest);
  const d = DEST_DATA[dest] || {
    visa: "Check with embassy", visaCost: 5000,
    flight: [30000, 70000], hotel: [2000, 8000], daily: [3000, 9000],
  };

  // realistic pick based on tier
  const pick = (arr) => {
    if (tier === "budget")  return arr[0];
    if (tier === "mid")     return Math.round((arr[0] * 0.45 + arr[1] * 0.55));
    return arr[1]; // comfort
  };

  const flightCost  = pick(d.flight);
  const hotelNight  = pick(d.hotel);
  const dailyCost   = pick(d.daily);
  const hotelTotal  = hotelNight * days;
  const dailyTotal  = dailyCost * days;
  const insurance   = tier === "budget" ? 2800 : tier === "mid" ? 5500 : 9000;
  const airportTax  = 3500; // DAC airport departure tax + surcharges
  const simCard     = 800;
  const perPerson   = flightCost + hotelTotal + dailyTotal + (d.visaCost || 0) + insurance + airportTax + simCard;
  const total       = perPerson * people;
  const buffer      = Math.round(total * 0.15);
  const grand       = total + buffer;

  const rows = [
    ["✈️", "Return flights",       flightCost,              "per person · economy"],
    ["🏨", `Hotel (${days} nights)`,hotelTotal,            `${fmt(hotelNight)}/night × ${days}`],
    ["🍽️", `Daily expenses`,        dailyTotal,            `${fmt(dailyCost)}/day × ${days}`],
    ["🛂", "Visa fee",              d.visaCost || 0,        d.visa || "Check embassy"],
    ["🛡️", "Travel insurance",      insurance,             "strongly recommended"],
    ["🛫", "Airport tax & charges", airportTax,            "DAC departure + surcharges"],
    ["📱", "Local SIM / data",      simCard,               "7-day data plan"],
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 h-full flex flex-col">
      {/* Header with currency switcher */}
      <div className="flex items-start justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-[#005a31] rounded-2xl flex items-center justify-center shadow-md">
            <Calculator size={22} className="text-white" />
          </div>
          <div>
            <h3 className="font-black text-gray-900 text-lg leading-tight">Trip Cost Calculator</h3>
            <p className="text-xs text-gray-400 font-medium">2025 realistic BDT · USD · AED estimate</p>
          </div>
        </div>
        {/* Inline small currency switcher */}
        <div className="flex items-center gap-1 bg-gray-50 border border-gray-100 rounded-xl p-0.5 shrink-0">
          {Object.entries(CURRENCIES).map(([code, cfg]) => (
            <button
              key={code}
              onClick={() => setCur(code)}
              title={cfg.label}
              className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-black transition-all ${
                cur === code
                  ? "bg-[#005a31] text-white shadow-sm"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {cfg.flag} {code}
            </button>
          ))}
        </div>
      </div>

      {/* Exchange rate note */}
      <div className="bg-amber-50 border border-amber-100 rounded-xl px-3 py-2 mb-5 flex items-center gap-2">
        <RefreshCw size={12} className="text-amber-500 shrink-0" />
        <p className="text-[10px] text-amber-700 font-semibold">
          Rates (May 2025): 1 USD ≈ ৳110 &nbsp;|&nbsp; 1 AED ≈ ৳30 &nbsp;|&nbsp; All costs in BDT converted live
        </p>
      </div>

      {/* Inputs grid */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="col-span-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1.5">
            Destination Country
          </label>
          <div className="relative">
            {selectedCountryData?.flag && (
              <img
                src={selectedCountryData.flag}
                alt={dest}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-6 object-cover rounded-[3px] shadow-sm"
              />
            )}
            <select
              value={dest}
              onChange={e => setDest(e.target.value)}
              className="w-full rounded-xl border-2 border-gray-100 focus:border-[#005a31] py-3 pr-4 text-sm font-semibold text-gray-700 outline-none bg-gray-50 transition-all cursor-pointer"
              style={{ paddingLeft: selectedCountryData?.flag ? "2.75rem" : "0.75rem" }}
            >
              {countries.length > 0 ? (
                countries.map(c => (
                  <option key={c.code || c.country} value={c.country}>{c.country}</option>
                ))
              ) : (
                Object.keys(DEST_DATA).map(name => (
                  <option key={name} value={name}>{name}</option>
                ))
              )}
            </select>
          </div>
        </div>
        <div>
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1.5">
            No. of Days
          </label>
          <input
            type="number" min={1} max={30} value={days}
            onChange={e => setDays(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-full rounded-xl border-2 border-gray-100 focus:border-[#005a31] px-3 py-3 text-sm font-black text-gray-700 outline-none bg-gray-50 text-center transition-all"
          />
        </div>
        <div>
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1.5">
            Travelers
          </label>
          <input
            type="number" min={1} max={10} value={people}
            onChange={e => setPeople(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-full rounded-xl border-2 border-gray-100 focus:border-[#005a31] px-3 py-3 text-sm font-black text-gray-700 outline-none bg-gray-50 text-center transition-all"
          />
        </div>
      </div>

      {/* Tier selector */}
      <div className="flex gap-2 mb-5">
        {[["budget","🎒 Budget"],["mid","🏨 Mid-Range"],["comfort","✈️ Comfort"]].map(([v,l]) => (
          <button
            key={v}
            onClick={() => setTier(v)}
            className={`flex-1 py-2.5 rounded-xl text-xs font-black transition-all ${
              tier === v ? "bg-[#005a31] text-white shadow-md" : "bg-gray-50 text-gray-500 border border-gray-100 hover:border-[#005a31]"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Breakdown table */}
      <div className="flex-grow mb-4 rounded-2xl border border-gray-100 overflow-hidden">
        {rows.map(([ico, label, bdtVal, note], idx) => (
          <div key={label} className={`flex items-center justify-between px-4 py-3 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-gray-700">{ico} {label}</span>
              <span className="text-[10px] text-gray-400">{note}</span>
            </div>
            <div className="text-right">
              <div className="font-black text-gray-800 text-sm tabular-nums">{fmt(bdtVal)}</div>
              {cur !== "BDT" && (
                <div className="text-[9px] text-gray-400 tabular-nums">৳{bdtVal.toLocaleString("en-IN")}</div>
              )}
            </div>
          </div>
        ))}
        {people > 1 && (
          <div className="flex items-center justify-between px-4 py-3 bg-blue-50/50">
            <div>
              <span className="text-xs font-semibold text-blue-700">× {people} travelers subtotal</span>
              <div className="text-[10px] text-blue-500">{fmt(perPerson)} per person</div>
            </div>
            <div className="text-right">
              <div className="font-black text-blue-700 text-sm">{fmt(total)}</div>
              {cur !== "BDT" && <div className="text-[9px] text-blue-400">৳{total.toLocaleString("en-IN")}</div>}
            </div>
          </div>
        )}
        <div className="flex items-center justify-between px-4 py-3 bg-orange-50/60">
          <div>
            <span className="text-xs font-semibold text-orange-600">+ 15% emergency buffer</span>
            <div className="text-[10px] text-orange-400">For surprises & overruns</div>
          </div>
          <div className="text-right">
            <div className="font-black text-orange-500 text-sm">+{fmt(buffer)}</div>
            {cur !== "BDT" && <div className="text-[9px] text-orange-400">৳{buffer.toLocaleString("en-IN")}</div>}
          </div>
        </div>
      </div>

      {/* Grand total */}
      <div className="bg-gradient-to-r from-[#005a31] to-[#007a42] rounded-2xl px-5 py-4 flex items-center justify-between shadow-lg">
        <div>
          <p className="text-green-200 text-[10px] font-black uppercase tracking-widest">Estimated Grand Total</p>
          <p className="text-white font-black text-2xl tabular-nums">{fmt(grand)}</p>
          {cur !== "BDT" && (
            <p className="text-green-300 text-[10px] font-semibold">= ৳{grand.toLocaleString("en-IN")}</p>
          )}
          <p className="text-green-300 text-xs font-semibold mt-0.5">
            {people > 1 ? `${fmt(Math.round(grand / people))}/person · ` : ""}{days} days
          </p>
        </div>
        <Link
          href="/offers"
          className="bg-white text-[#005a31] px-4 py-2.5 rounded-xl font-black text-xs hover:bg-orange-500 hover:text-white transition-all whitespace-nowrap shadow-md"
        >
          Book Package →
        </Link>
      </div>
      <p className="text-[10px] text-gray-400 mt-3 text-center">
        * May 2025 averages. Actual prices vary by season & booking time.{" "}
        <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-bold hover:underline">
          Get exact quote →
        </Link>
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FAQ
───────────────────────────────────────────── */
const FAQS = [
  { q: "What is the cheapest country to visit from Bangladesh in 2025?",
    a: "Georgia (visa-free 365 days, ~৳2,800/day budget), Nepal (~৳2,000/day), and India (e-visa, ~৳1,600/day). Georgia offers the best combination of low cost + high-quality European-style experience. A 7-day Georgia trip can be done for around ৳65,000–75,000 total." },
  { q: "How much does a 7-day Thailand trip cost from Bangladesh in 2025?",
    a: "Budget: ৳55,000–70,000 | Mid-range: ৳80,000–1,10,000 | Comfortable: ৳1,20,000–1,70,000. Breakdown (mid): Return flights ৳20,000–35,000 + Hotel ৳3,500–5,000/night × 7 + Visa on arrival ~৳4,200 + Daily expenses ৳4,000–6,000/day + Insurance ৳5,500." },
  { q: "How much is a 7-day Dubai (UAE) trip in USD and AED from Bangladesh?",
    a: "Budget is very hard for Dubai. A comfortable 7-day trip: ~$1,200–2,000 per person (AED 4,400–7,350 | ৳1,35,000–2,20,000). Breakdown: Flights $230–500 + Tourist visa AED 500 ($136) + Hotel $55–200/night + Daily $80–225. Stay in Deira/Bur Dubai areas to cut hotel costs in half." },
  { q: "When should I book flights from Bangladesh for cheapest prices?",
    a: "Book 6–8 weeks ahead for Asia, 3–6 months for Europe/USA. Fly Tuesday–Thursday (15–30% cheaper). Avoid Eid-ul-Fitr, Eid-ul-Adha, and Dec 20–Jan 5 when prices jump 50–100%. Set Google Flights price alerts for your specific route." },
  { q: "How much does a Europe/Schengen trip cost from Bangladesh in 2025?",
    a: "10-day trip: Budget ৳2,10,000–2,60,000 ($1,900–2,360) | Mid-range ৳2,90,000–3,70,000 ($2,636–3,363). Breakdown: Flights ৳70,000–1,30,000 + Schengen visa ৳9,000 + Hotels ৳4,000–12,000/night + Daily ৳8,000–16,000. Eastern Europe (Poland, Czech, Hungary) is 40–50% cheaper than Western Europe." },
  { q: "What are hidden costs I must budget for in 2025?",
    a: "Currency exchange loss 3–5% (use Wise/Revolut instead of airport counters), checked baggage on budget airlines ৳4,000–10,000 each way, hotel resort fees ($10–40/night not shown in booking price), airport transfer $10–60, travel SIM ৳800–2,000, tipping (10–20% expected in USA/Europe), and entry fees to top attractions (Burj Khalifa $45, Eiffel Tower €30, Louvre €22)." },
];

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:border-[#005a31]/30 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left focus:outline-none"
        aria-expanded={open}
      >
        <span className={`font-bold text-sm transition-colors ${open ? "text-[#005a31]" : "text-gray-800"}`}>{faq.q}</span>
        <ChevronDown size={16} className={`shrink-0 mt-0.5 text-[#005a31] transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-l-4 border-[#005a31] ml-5">
          {faq.a}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   DESTINATION CARD — multi-currency
───────────────────────────────────────────── */
function DestCard({ destName, countryObj, fmt, cur }) {
  const d = DEST_DATA[destName];
  if (!d) return null;

  const budget7d = d.flight[0] + d.hotel[0] * 7 + d.daily[0] * 7 + (d.visaCost || 0) + 2800;
  const mid7d    = Math.round((d.flight[0]+d.flight[1])*0.5) + Math.round((d.hotel[0]+d.hotel[1])*0.5)*7 + Math.round((d.daily[0]+d.daily[1])*0.5)*7 + (d.visaCost||0) + 5500;

  return (
    <div className="group bg-white rounded-3xl border-2 border-gray-100 hover:border-[#005a31] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative h-28 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center overflow-hidden">
        {countryObj?.flag ? (
          <img
            src={countryObj.flag}
            alt={`${destName} travel budget guide`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <span className="text-5xl opacity-60">🌍</span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between">
          <h3 className="font-black text-white text-base leading-tight drop-shadow">{destName}</h3>
          <span className={`text-[9px] font-black px-2 py-0.5 rounded-full text-white shadow ${d.tagColor}`}>
            {d.tag}
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{d.region}</span>
          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
            d.visaCost === 0 ? "bg-green-50 text-green-700" : "bg-blue-50 text-blue-700"
          }`}>
            {d.visa}
          </span>
        </div>

        {/* Cost rows — converted */}
        <div className="space-y-1.5 mb-3">
          {[
            ["✈️ Flights",   d.flight],
            ["🏨 Hotel/night", d.hotel],
            ["🍽️ Daily",     d.daily],
          ].map(([label, arr]) => (
            <div key={label} className="flex items-center justify-between text-xs">
              <span className="text-gray-500 font-medium">{label}</span>
              <span className="font-black text-gray-800 tabular-nums">
                {fmt(arr[0])} – {fmt(arr[1])}
              </span>
            </div>
          ))}
        </div>

        {/* 7-day totals */}
        <div className="bg-gray-50 rounded-xl p-2.5 mb-3 border border-gray-100">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-400 font-semibold">Budget (7d, 1 pax)</span>
            <span className="font-black text-green-700 tabular-nums">{fmt(budget7d)}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-400 font-semibold">Mid-range (7d, 1 pax)</span>
            <span className="font-black text-[#005a31] tabular-nums">{fmt(mid7d)}</span>
          </div>
          {cur !== "BDT" && (
            <div className="mt-1.5 pt-1.5 border-t border-gray-100 flex justify-between text-[9px] text-gray-400">
              <span>৳{budget7d.toLocaleString("en-IN")} – ৳{mid7d.toLocaleString("en-IN")}</span>
              <span>in BDT</span>
            </div>
          )}
        </div>

        <p className="text-[11px] text-gray-400 italic leading-relaxed mb-3 flex-grow">💡 {d.tip}</p>

        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="flex items-center gap-1 text-[10px] text-gray-400 font-semibold">
            <Calendar size={10} />{d.bestTime}
          </span>
          <span className="text-[10px] text-gray-400 font-semibold">{d.currency}</span>
        </div>

        <Link
          href={d.href || "/visa"}
          className="mt-auto block text-center bg-[#005a31] group-hover:bg-orange-500 text-white py-2.5 rounded-xl font-black text-xs transition-all duration-300"
        >
          Plan This Trip →
        </Link>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function TravelBudgetPlanner() {
  const [countries, setCountries]       = useState([]);
  const [loadingCountries, setLoading]  = useState(true);
  const [searchQuery, setSearchQuery]   = useState("");
  const [activeRegion, setActiveRegion] = useState("All");
  const [letterFilter, setLetterFilter] = useState("All");
  const [currentPage, setCurrentPage]   = useState(1);
  const ITEMS_PER_PAGE = 24;

  // Global currency for cards/sections
  const { cur, setCur, fmt } = useCurrency();

  useEffect(() => {
    fetch("/api/countries")
      .then(r => r.json())
      .then(data => { if (Array.isArray(data)) setCountries(data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const destNamesWithData = Object.keys(DEST_DATA);

  const enrichedDests = useMemo(() => {
    return destNamesWithData.map(name => ({
      name,
      countryObj: countries.find(c => c.country === name) || null,
    }));
  }, [countries]);

  const filteredCountries = useMemo(() => {
    return countries.filter(c => {
      const matchSearch = c.country?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchLetter = letterFilter === "All" || c.country?.[0]?.toUpperCase() === letterFilter;
      return matchSearch && matchLetter;
    });
  }, [countries, searchQuery, letterFilter]);

  const totalPages = Math.ceil(filteredCountries.length / ITEMS_PER_PAGE);
  const pageItems  = filteredCountries.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  const alphabet   = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
  const regions    = ["All", "Southeast Asia", "South Asia", "Middle East", "Caucasus", "Europe", "East Asia", "Eurasia"];

  const filteredByRegion = activeRegion === "All"
    ? enrichedDests
    : enrichedDests.filter(d => DEST_DATA[d.name]?.region === activeRegion);

  return (
    <div className="min-h-screen bg-[#f8f9fb]">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        aria-labelledby="budget-hero-heading"
        className="relative bg-gradient-to-br from-[#002d18] via-[#005a31] to-[#007a42] py-20 sm:py-28 px-4 sm:px-6 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-400/30 rounded-full text-orange-300 text-xs font-black uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                Free Tool · Updated May 2025 · BDT / USD / AED
              </div>

              <h1 id="budget-hero-heading" className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight mb-5">
                Travel Budget<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-400">Planner 2025</span>
              </h1>

              <p className="text-green-100 text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
                Calculate your exact trip cost in <strong className="text-white">BDT, USD, or AED</strong> — with realistic 2025 prices for flights, hotels, visas and daily expenses. Live country data included.
              </p>

              {/* Hero currency switcher */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-green-300 text-xs font-bold">Display currency:</span>
                <CurrencySwitcher cur={cur} setCur={setCur} />
              </div>

              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href="#calculator"
                  className="bg-orange-500 hover:bg-orange-400 text-white px-7 py-3.5 rounded-2xl font-black text-sm transition-all shadow-lg flex items-center gap-2"
                >
                  <Calculator size={17} /> Calculate My Trip
                </a>
                <a
                  href="#destinations"
                  className="bg-white/15 border border-white/25 text-white px-7 py-3.5 rounded-2xl font-black text-sm hover:bg-white/25 transition-all flex items-center gap-2"
                >
                  <Globe size={17} /> Browse Destinations
                </a>
              </div>

              {/* Live rate display */}
              <div className="grid grid-cols-3 gap-3 max-w-sm">
                {[
                  ["🇧🇩 BDT", "1.00", "Base"],
                  ["🇺🇸 USD", "$1", "≈ ৳110"],
                  ["🇦🇪 AED", "1 AED", "≈ ৳30"],
                ].map(([label, val, sub]) => (
                  <div key={label} className="bg-white/10 rounded-2xl p-3 text-center border border-white/10">
                    <div className="text-xs font-black text-white">{label}</div>
                    <div className="text-green-300 text-[10px] font-bold mt-0.5">{val}</div>
                    <div className="text-green-400 text-[9px]">{sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div id="calculator" className="w-full">
              <CostCalculator countries={countries} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GLOBAL CURRENCY SWITCHER BAR
      ══════════════════════════════════════════ */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <p className="text-xs font-bold text-gray-500 hidden sm:block">
            💱 Change display currency for all destination cards below:
          </p>
          <div className="flex items-center gap-1 bg-gray-50 border border-gray-100 rounded-2xl p-1">
            {Object.entries(CURRENCIES).map(([code, cfg]) => (
              <button
                key={code}
                onClick={() => setCur(code)}
                title={cfg.label}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all ${
                  cur === code
                    ? "bg-[#005a31] text-white shadow-md"
                    : "text-gray-500 hover:text-[#005a31] hover:bg-green-50"
                }`}
              >
                <span className="text-sm">{cfg.flag}</span>
                <span>{code}</span>
                <span className={`text-[10px] font-medium ${cur === code ? "text-green-200" : "text-gray-400"}`}>
                  {cfg.symbol}
                </span>
              </button>
            ))}
            <div className="ml-2 pl-2 border-l border-gray-200">
              <p className="text-[9px] text-gray-400 font-semibold leading-tight">
                $1=৳110<br />AED1=৳30
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BUDGET TIERS
      ══════════════════════════════════════════ */}
      <section aria-labelledby="tiers-h" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12">
          <span className="text-[#005a31] text-xs font-black uppercase tracking-widest">Budget Levels</span>
          <h2 id="tiers-h" className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
            What Kind of Traveler Are You?
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
            Match your travel style to a budget — from backpacker to luxury. Showing in <strong>{cur}</strong>.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BUDGET_TIERS.map(t => {
            const low  = t.bdtRange[0];
            const high = t.bdtRange[1];
            return (
              <div key={t.tier} className={`bg-white rounded-3xl border-2 p-6 shadow-sm transition-all group ${t.color}`}>
                <div className="text-4xl mb-3">{t.icon}</div>
                <h3 className="font-black text-gray-900 text-xl mb-1">{t.tier}</h3>
                <div className="font-black text-[#005a31] text-sm mb-0.5">
                  {cur === "BDT" && `৳${low.toLocaleString("en-IN")} – ৳${high.toLocaleString("en-IN")}`}
                  {cur === "USD" && t.usd}
                  {cur === "AED" && t.aed}
                </div>
                <div className="text-[10px] text-gray-400 font-semibold mb-3">
                  {cur !== "BDT" && `৳${low.toLocaleString("en-IN")} – ৳${high.toLocaleString("en-IN")} BDT`}
                  {cur === "BDT" && t.usd}
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{t.desc}</p>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2">Best for</p>
                  <div className="flex flex-wrap gap-1">
                    {t.best.map(b => (
                      <span key={b} className="text-[10px] px-2 py-0.5 bg-green-50 text-[#005a31] rounded-full font-bold">{b}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DESTINATION BUDGET CARDS
      ══════════════════════════════════════════ */}
      <section id="destinations" aria-labelledby="dest-h" className="bg-white border-y border-gray-100 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#005a31] text-xs font-black uppercase tracking-widest">Budget Breakdown</span>
            <h2 id="dest-h" className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
              Trip Cost by Destination — May 2025
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
              Realistic 2025 costs per person including flights, hotel, visa & daily expenses. Currently showing in <strong>{cur}</strong>.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {regions.map(r => (
              <button
                key={r}
                onClick={() => setActiveRegion(r)}
                className={`px-4 py-2 rounded-full text-xs font-black transition-all ${
                  activeRegion === r ? "bg-[#005a31] text-white shadow-md" : "bg-gray-100 text-gray-500 hover:bg-green-50 hover:text-[#005a31]"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          {loadingCountries ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="bg-gray-100 rounded-3xl h-80 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {filteredByRegion.map(({ name, countryObj }) => (
                <DestCard key={name} destName={name} countryObj={countryObj} fmt={fmt} cur={cur} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ALL COUNTRIES EXPLORER
      ══════════════════════════════════════════ */}
      <section aria-labelledby="explorer-h" className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[#005a31] text-xs font-black uppercase tracking-widest">All Destinations</span>
          <h2 id="explorer-h" className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
            Explore All Countries — Visa & Travel Guide
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
            Browse all {countries.length || "200+"} destinations. Click any country for its full 2025 visa requirements.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 mb-8">
          <div className="flex flex-col sm:flex-row gap-3 items-center mb-5">
            <div className="relative flex-1 w-full">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search any country..."
                aria-label="Search destination country"
                value={searchQuery}
                onChange={e => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#005a31] outline-none bg-gray-50 text-sm font-semibold text-gray-700 transition-all"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-50 border border-green-100 px-4 py-2.5 rounded-xl text-sm font-black text-green-700 whitespace-nowrap">
                {filteredCountries.length} countries
              </div>
              {(searchQuery || letterFilter !== "All") && (
                <button
                  onClick={() => { setSearchQuery(""); setLetterFilter("All"); setCurrentPage(1); }}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-red-50 border border-red-100 rounded-xl text-sm font-bold text-red-600 hover:bg-red-100 transition"
                  aria-label="Clear filters"
                >
                  <X size={14} /> Clear
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {alphabet.map(l => (
              <button
                key={l}
                onClick={() => { setLetterFilter(l); setCurrentPage(1); }}
                aria-pressed={letterFilter === l}
                className={`w-8 h-8 rounded-full text-xs font-black transition-all ${
                  letterFilter === l ? "bg-[#005a31] text-white shadow-md scale-110" : "bg-gray-100 text-gray-500 hover:bg-green-100 hover:text-[#005a31]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {loadingCountries ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-2xl h-28 animate-pulse" />
            ))}
          </div>
        ) : pageItems.length > 0 ? (
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3" role="list">
            {pageItems.map((c, i) => (
              <li key={c.code || i}>
                <Link
                  href={`/visa/${c.country?.toLowerCase().replace(/[^a-z0-9\s]/g,"").replace(/\s+/g,"-")}-visa`}
                  className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#005a31] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  aria-label={`${c.country} visa guide 2025`}
                >
                  <div className="relative h-20 overflow-hidden bg-gray-100">
                    {c.flag ? (
                      <img
                        src={c.flag}
                        alt={`${c.country} flag`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-2xl">🌍</div>
                    )}
                  </div>
                  <div className="p-2.5">
                    <h3 className="text-xs font-black text-gray-800 leading-tight group-hover:text-[#005a31] transition-colors text-center truncate">
                      {c.country}
                    </h3>
                    <div className="text-[9px] font-bold text-[#005a31] bg-green-50 rounded px-1.5 py-0.5 text-center mt-1.5 group-hover:bg-[#005a31] group-hover:text-white transition-all">
                      Visa Guide →
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-lg font-black text-gray-700">No countries found</h3>
            <p className="text-gray-400 mt-2 text-sm">Try a different search term or clear filters.</p>
          </div>
        )}

        {totalPages > 1 && (
          <nav aria-label="Country pagination" className="mt-10 flex justify-center items-center gap-3 flex-wrap">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="px-5 py-2.5 bg-white border-2 border-gray-200 rounded-xl font-bold text-sm text-gray-700 disabled:opacity-40 disabled:pointer-events-none hover:border-[#005a31] hover:text-[#005a31] transition"
            >← Prev</button>
            <div className="flex gap-1.5">
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => i + 1).map(n => (
                <button
                  key={n}
                  onClick={() => setCurrentPage(n)}
                  aria-current={currentPage === n ? "page" : undefined}
                  className={`w-10 h-10 rounded-xl font-black text-sm transition-all ${
                    currentPage === n ? "bg-[#005a31] text-white shadow-md" : "bg-white border-2 border-gray-100 text-gray-600 hover:border-[#005a31]"
                  }`}
                >{n}</button>
              ))}
              {totalPages > 7 && <span className="w-10 h-10 flex items-center justify-center text-gray-400 font-bold">…</span>}
            </div>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className="px-5 py-2.5 bg-white border-2 border-gray-200 rounded-xl font-bold text-sm text-gray-700 disabled:opacity-40 disabled:pointer-events-none hover:border-[#005a31] hover:text-[#005a31] transition"
            >Next →</button>
          </nav>
        )}
      </section>

      {/* ══════════════════════════════════════════
          FLIGHT TIPS
      ══════════════════════════════════════════ */}
      <section aria-labelledby="flight-h" className="bg-white border-y border-gray-100 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#005a31] text-xs font-black uppercase tracking-widest">Save More on Flights</span>
            <h2 id="flight-h" className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
              8 Tips to Find Cheapest Flights from Bangladesh
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
              Proven strategies used by experienced Bangladeshi travelers to save ৳10,000–40,000 ($90–$365) per trip.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FLIGHT_TIPS.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#005a31] hover:bg-white hover:shadow-lg transition-all p-5 group">
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="font-black text-gray-900 text-sm mb-2 group-hover:text-[#005a31] transition-colors">{t.tip}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/offers" className="inline-flex items-center gap-2 bg-[#005a31] text-white px-8 py-3.5 rounded-2xl font-black text-sm hover:bg-orange-500 transition shadow-lg">
              View Current Flight & Tour Deals <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section aria-labelledby="faq-h" className="py-16 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#005a31] text-xs font-black uppercase tracking-widest">Common Questions</span>
          <h2 id="faq-h" className="text-3xl md:text-4xl font-black text-gray-900 mt-2">Travel Budget FAQs — 2025</h2>
          <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
            Most searched travel budget questions from Bangladeshi travelers — answered with realistic 2025 prices in BDT, USD, and AED.
          </p>
          <div className="w-12 h-1 bg-[#005a31] mx-auto rounded-full mt-4" />
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => <FaqItem key={i} faq={faq} />)}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTERNAL LINK HUB
      ══════════════════════════════════════════ */}
      <section aria-labelledby="links-h" className="bg-[#005a31] py-14 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="links-h" className="text-2xl md:text-3xl font-black text-white">
              All Travel & Visa Resources
            </h2>
            <p className="text-green-200 text-sm mt-2 max-w-xl mx-auto">
              Visa processing, IELTS coaching, tour packages, and global offices — all in one place.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {INTERNAL_LINKS.map(link => (
              <Link key={link.href} href={link.href}>
                <div className="group bg-white/10 hover:bg-white/20 rounded-2xl p-3.5 border border-white/10 hover:border-white/30 transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-orange-400 shrink-0">{link.icon}</div>
                    <span className="text-white font-black text-[11px] leading-tight group-hover:text-orange-300 transition-colors">{link.label}</span>
                  </div>
                  <p className="text-green-300 text-[10px] leading-relaxed">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEO RICH TEXT
      ══════════════════════════════════════════ */}
      <section aria-labelledby="seo-h" className="bg-gray-50 border-t border-gray-100 py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 id="seo-h" className="text-2xl font-black text-gray-900 mb-5">
            Travel Budget Planning Guide for Bangladesh — 2025 Complete Reference (BDT · USD · AED)
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-500 leading-relaxed">
            <div className="space-y-4">
              <p>
                The most affordable international destinations from Bangladesh in 2025 are{" "}
                <Link href="/contact/travel-agency-georgia" className="text-[#005a31] font-bold hover:underline">Georgia (visa-free, ~৳2,800/day · $25/day · AED 93/day)</Link>,{" "}
                <strong className="text-gray-700">Nepal (~৳2,000/day · $18/day)</strong>, and{" "}
                <strong className="text-gray-700">India (~৳1,600/day · $14.5/day)</strong>. Our cost calculator above
                converts all estimates live between BDT, USD, and AED using May 2025 exchange rates.
                For group bookings, contact our{" "}
                <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-bold hover:underline">Cumilla or Dhaka office</Link>.
              </p>
              <p>
                Flights represent 30–50% of your total travel budget. Booking 6–8 weeks ahead and flying midweek saves
                ৳10,000–30,000 ($90–$270) per trip. For Europe, apply through our{" "}
                <Link href="/visa" className="text-[#005a31] font-bold hover:underline">Schengen visa service</Link> with a 98% approval rate.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Dubai (UAE) trips are popular from Bangladesh — a 7-day comfortable trip costs approximately AED 4,500–7,500 per person ($1,225–$2,045 · ৳1,35,000–2,20,000) in 2025. The AED 500 tourist visa and Deira budget hotels make it more accessible. Our{" "}
                <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-bold hover:underline">Dubai Business Bay office</Link> handles UAE visa applications.
              </p>
              <p>
                Eammu Holidays has offices in{" "}
                <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-bold hover:underline">Cumilla & Dhaka</Link>,{" "}
                <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-bold hover:underline">Dubai (Business Bay)</Link>,{" "}
                <Link href="/contact/travel-agency-georgia" className="text-[#005a31] font-bold hover:underline">Tbilisi (Georgia)</Link>, and{" "}
                <Link href="/contact/travel-agency-armenia" className="text-[#005a31] font-bold hover:underline">Yerevan (Armenia)</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      <section aria-labelledby="cta-h" className="relative bg-[#005a31] py-16 sm:py-20 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-0 left-0 text-[300px] leading-none">✈️</div>
          <div className="absolute bottom-0 right-0 text-[300px] leading-none">🗺️</div>
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 id="cta-h" className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Plan Your Trip?</h2>
          <p className="text-green-100 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Let Eammu Holidays handle your visa, flight booking, hotel, and full trip planning — with 10,000+ happy travelers and a 98% success rate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/8801631312524"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-10 py-4 rounded-2xl font-black text-sm hover:bg-green-400 transition shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} /> WhatsApp Free Advice
            </a>
            <Link href="/offers" className="bg-orange-500 text-white px-10 py-4 rounded-2xl font-black text-sm hover:bg-orange-400 transition flex items-center justify-center gap-2">
              Browse Tour Packages <ArrowRight size={16} />
            </Link>
            <Link href="/visa" className="bg-white/15 border border-white/25 text-white px-10 py-4 rounded-2xl font-black text-sm hover:bg-white/25 transition flex items-center justify-center gap-2">
              All Visa Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}