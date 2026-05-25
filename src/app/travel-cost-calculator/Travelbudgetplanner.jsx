"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Plane, Calculator, Globe, CheckCircle, ArrowRight,
  Clock, Star, ChevronDown, MapPin, ShieldCheck,
  BookOpen, Target, AlertCircle, TrendingUp,
  Navigation, Wallet, Calendar, Search, X,
  MessageCircle, Users, Award, BarChart3,
} from "lucide-react";

/* ─────────────────────────────────────────────
   STATIC DESTINATION BUDGET DATA
   (Country name must match MongoDB country field)
───────────────────────────────────────────── */
const DEST_DATA = {
  "Georgia":          { region: "Caucasus",        visa: "Visa-Free 365d", visaCost: 0,     flight: [30000,55000],  hotel: [1200,4000],  daily: [2500,5000],  tag: "Cheapest",        tagColor: "bg-green-500",    tip: "365-day visa-free for Bangladeshis. Tbilisi has halal food everywhere.",        href: "/contact/travel-agency-georgia",   bestTime: "Apr–Jun · Sep–Oct",   currency: "GEL (~BDT 40)" },
  "Nepal":            { region: "South Asia",       visa: "Visa on Arrival",visaCost: 4300,  flight: [8000,18000],   hotel: [800,3000],   daily: [1800,4000],  tag: "Nearest",         tagColor: "bg-blue-500",     tip: "Cheapest international trip. Kathmandu + Pokhara is a classic combo.",         href: "/visa",                            bestTime: "Oct–Nov · Mar–Apr",   currency: "NPR (~BDT 0.85)" },
  "Thailand":         { region: "Southeast Asia",   visa: "Visa on Arrival",visaCost: 3800,  flight: [18000,35000],  hotel: [1500,6000],  daily: [3000,7000],  tag: "Most Popular",    tagColor: "bg-orange-500",   tip: "Bangkok + Pattaya combo is most popular. Best budget beach holiday.",           href: "/visa",                            bestTime: "Nov–Feb",             currency: "THB (~BDT 3.2)" },
  "Malaysia":         { region: "Southeast Asia",   visa: "e-Visa",         visaCost: 2700,  flight: [18000,32000],  hotel: [1800,6000],  daily: [3500,7500],  tag: "Halal Friendly",  tagColor: "bg-emerald-600",  tip: "Muslim-friendly, abundant halal food. KL + Langkawi is excellent value.",      href: "/visa/e-visa",                     bestTime: "Mar–Sep",             currency: "MYR (~BDT 26)" },
  "United Arab Emirates": { region: "Middle East",  visa: "Tourist Visa",   visaCost: 13500, flight: [22000,50000],  hotel: [5000,18000], daily: [8000,20000], tag: "Premium",         tagColor: "bg-yellow-500",   tip: "Desert safari + Burj Khalifa. Budget carefully — expensive city.",              href: "/contact/travel-agency-dubai",     bestTime: "Oct–Apr",             currency: "AED (~BDT 30)" },
  "Turkey":           { region: "Eurasia",          visa: "e-Visa",         visaCost: 4500,  flight: [35000,70000],  hotel: [2500,9000],  daily: [4000,10000], tag: "Value for Money", tagColor: "bg-red-500",      tip: "Cappadocia hot air balloon + Istanbul mosques. Rich history at low cost.",      href: "/visa/e-visa",                     bestTime: "Apr–Jun · Sep–Nov",   currency: "TRY (~BDT 3.5)" },
  "Maldives":         { region: "South Asia",       visa: "Visa Free",      visaCost: 0,     flight: [25000,55000],  hotel: [8000,50000], daily: [6000,30000], tag: "Luxury Beach",    tagColor: "bg-cyan-500",     tip: "Stay on local islands (Maafushi) for 1/10 the cost of overwater bungalows.",   href: "/visa",                            bestTime: "Dec–Mar",             currency: "MVR (~BDT 7)" },
  "Singapore":        { region: "Southeast Asia",   visa: "Tourist Visa",   visaCost: 8000,  flight: [20000,40000],  hotel: [7000,20000], daily: [8000,18000], tag: "Stopover Hub",    tagColor: "bg-purple-500",   tip: "Combine with Malaysia — Singapore 2 days + KL 4 days is great value.",         href: "/visa",                            bestTime: "Feb–Apr",             currency: "SGD (~BDT 87)" },
  "Japan":            { region: "East Asia",        visa: "Tourist Visa",   visaCost: 5500,  flight: [40000,80000],  hotel: [3500,12000], daily: [6000,15000], tag: "Dream Destination",tagColor: "bg-pink-500",    tip: "Japan Rail Pass saves 40%. Book cherry blossom hotels 6 months ahead.",         href: "/visa",                            bestTime: "Mar–Apr · Oct–Nov",   currency: "JPY (100≈BDT 75)" },
  "Germany":          { region: "Europe",           visa: "Schengen Visa",  visaCost: 8500,  flight: [65000,130000], hotel: [3500,14000], daily: [7000,16000], tag: "Schengen Gateway",tagColor: "bg-indigo-500",   tip: "Apply Schengen through Germany embassy — fastest processing from Bangladesh.",  href: "/visa",                            bestTime: "May–Jun · Sep",       currency: "EUR (~BDT 120)" },
  "Armenia":          { region: "Caucasus",         visa: "e-Visa 3 days",  visaCost: 1500,  flight: [32000,58000],  hotel: [1500,5000],  daily: [2500,5500],  tag: "Hidden Gem",      tagColor: "bg-rose-500",     tip: "Ancient monasteries + affordable food. Combine with Georgia for Caucasus trip.",href: "/contact/travel-agency-armenia",   bestTime: "Apr–Jun · Sep–Oct",   currency: "AMD (~BDT 0.27)" },
  "Indonesia":        { region: "Southeast Asia",   visa: "e-VOA",          visaCost: 3200,  flight: [22000,45000],  hotel: [1200,6000],  daily: [2500,7000],  tag: "Nature & Beach",  tagColor: "bg-lime-600",     tip: "Bali has the best budget beach resorts in Asia. Muslim-friendly in Jakarta.",   href: "/visa/e-visa",                     bestTime: "Apr–Oct",             currency: "IDR (10k≈BDT 8)" },
  "France":           { region: "Europe",           visa: "Schengen Visa",  visaCost: 8500,  flight: [70000,140000], hotel: [5000,18000], daily: [9000,20000], tag: "Iconic Europe",   tagColor: "bg-blue-600",     tip: "Paris in off-season (Jan–Mar) is 40% cheaper. Book Eiffel tickets 3 months ahead.", href: "/visa",                          bestTime: "May–Jun · Sep",       currency: "EUR (~BDT 120)" },
  "Saudi Arabia":     { region: "Middle East",      visa: "e-Visa / Umrah", visaCost: 5000,  flight: [20000,45000],  hotel: [3000,12000], daily: [4000,10000], tag: "Umrah Destination",tagColor: "bg-green-700",   tip: "Combine Umrah with Makkah + Madinah sightseeing. Book via Eammu Holidays.",    href: "/offers",                          bestTime: "Ramadan · Hajj",      currency: "SAR (~BDT 30)" },
  "India":            { region: "South Asia",       visa: "e-Visa",         visaCost: 1200,  flight: [5000,12000],   hotel: [700,3000],   daily: [1500,3500],  tag: "Nearest & Cheapest",tagColor:"bg-orange-600", tip: "Kolkata, Delhi, Mumbai, Agra Taj Mahal — most affordable from Bangladesh.",    href: "/visa/india",                      bestTime: "Oct–Mar",             currency: "INR (~BDT 1.3)" },
  "Qatar":            { region: "Middle East",      visa: "Visa Free",      visaCost: 0,     flight: [22000,45000],  hotel: [5000,16000], daily: [7000,18000], tag: "FIFA Legacy",     tagColor: "bg-purple-600",   tip: "Visa-free for Bangladesh. Doha souk + desert + world-class museums.",          href: "/visa",                            bestTime: "Nov–Mar",             currency: "QAR (~BDT 30)" },
};

/* Popular destinations shown by default */
const POPULAR_NAMES = ["Thailand","Malaysia","Georgia","Dubai","Turkey","Japan","Maldives","India"];

const BUDGET_TIERS = [
  { tier: "Backpacker", icon: "🎒", range: "BDT 40,000–80,000", usd: "$400–800 / person",
    desc: "Hostel dorms, street food, local transport, free attractions.",
    best: ["Georgia","Nepal","Thailand","Indonesia"], color: "border-green-200 hover:border-green-400" },
  { tier: "Mid-Range",  icon: "🏨", range: "BDT 80,000–1,80,000", usd: "$800–1,800 / person",
    desc: "3-star hotels, restaurant meals, mix of tours and self-exploration.",
    best: ["Thailand","Malaysia","Turkey","Armenia"], color: "border-blue-200 hover:border-blue-400" },
  { tier: "Comfortable",icon: "✈️", range: "BDT 1,80,000–3,50,000", usd: "$1,800–3,500 / person",
    desc: "4-star hotels, guided tours, fine dining, major attractions.",
    best: ["Dubai","Singapore","Japan","Europe"], color: "border-orange-200 hover:border-orange-400" },
  { tier: "Luxury",     icon: "💎", range: "BDT 3,50,000+", usd: "$3,500+ / person",
    desc: "5-star resorts, overwater villas, private transfers, VIP experiences.",
    best: ["Maldives","Dubai 5-star","Tokyo","Swiss Alps"], color: "border-yellow-200 hover:border-yellow-400" },
];

const FLIGHT_TIPS = [
  { icon: "📅", tip: "Book 6–8 weeks ahead", detail: "For Asia routes. Book 3–6 months ahead for Europe/USA. Last-minute is 2–3× more expensive." },
  { icon: "🗓️", tip: "Fly Tue–Thu", detail: "Tuesday–Thursday departures are 15–30% cheaper than Friday–Saturday." },
  { icon: "🔔", tip: "Set price alerts", detail: "Google Flights price alerts catch the dips automatically. Set multiple routes." },
  { icon: "🔄", tip: "Use connecting hubs", detail: "Dhaka→Dubai/KL/Istanbul→destination is often 30–50% cheaper than direct." },
  { icon: "🛄", tip: "Go carry-on only", detail: "Budget airlines charge BDT 3,000–8,000 per checked bag each way." },
  { icon: "📱", tip: "Use incognito mode", detail: "Sites raise prices after repeated searches. Always use private/incognito browser." },
  { icon: "⚡", tip: "Follow flash sales", detail: "AirAsia, Air Arabia, Biman run flash sales during Eid/New Year. Follow their pages." },
  { icon: "⚖️", tip: "Compare CGP vs DAC", detail: "Some routes are cheaper from Chittagong (CGP) than Dhaka (DAC). Compare both." },
];

const INTERNAL_LINKS = [
  { href: "/visa",                                          icon: <ShieldCheck size={13}/>, label: "All Visa Services",              desc: "200+ countries" },
  { href: "/visa/e-visa",                                   icon: <Globe size={13}/>,       label: "E-Visa Destinations",            desc: "Fast online visas" },
  { href: "/visa/visa-guide",                               icon: <BookOpen size={13}/>,    label: "Visa Guides",                    desc: "Step-by-step" },
  { href: "/travel-resources/visa-checklist-generator",     icon: <CheckCircle size={13}/>, label: "Visa Checklist",                 desc: "Free doc list" },
  { href: "/travel-resources/visa-processing-time-tracker", icon: <Clock size={13}/>,       label: "Processing Tracker",             desc: "Real timelines" },
  { href: "/travel-cost-calculator",                        icon: <Calculator size={13}/>,  label: "Cost Calculator",                desc: "Trip estimator" },
  { href: "/offers",                                        icon: <Star size={13}/>,        label: "Tour Offers",                    desc: "Package deals" },
  { href: "/study-abroad",                                  icon: <Target size={13}/>,      label: "Study Abroad",                   desc: "UK, USA, Canada" },
  { href: "/scholarships",                                  icon: <Award size={13}/>,       label: "Scholarships",                   desc: "Funded programmes" },
  { href: "/visa-rejection",                                icon: <AlertCircle size={13}/>, label: "Visa Rejection",                 desc: "Re-application" },
  { href: "/contact/travel-agency-bangladesh",              icon: <MapPin size={13}/>,      label: "Bangladesh Offices",             desc: "Cumilla & Dhaka" },
  { href: "/contact/travel-agency-dubai",                   icon: <Plane size={13}/>,       label: "Dubai Office",                   desc: "Business Bay" },
  { href: "/contact/travel-agency-georgia",                 icon: <Plane size={13}/>,       label: "Georgia Office",                 desc: "Tbilisi" },
  { href: "/contact/travel-agency-armenia",                 icon: <Plane size={13}/>,       label: "Armenia Office",                 desc: "Yerevan" },
  { href: "/blogs",                                         icon: <BookOpen size={13}/>,    label: "Travel Blog",                    desc: "Tips & guides" },
  { href: "/testimonials",                                  icon: <Star size={13}/>,        label: "Testimonials",                   desc: "10,000+ reviews" },
  { href: "/target-ielts-immigration-center",               icon: <BookOpen size={13}/>,    label: "IELTS Center",                   desc: "Cumilla coaching" },
  { href: "/visa/dubai-residents",                          icon: <Globe size={13}/>,       label: "Dubai Resident Visas",           desc: "For UAE residents" },
  { href: "/online-travel-agency-bangladesh",               icon: <Navigation size={13}/>,  label: "Online Agency",                  desc: "Book online" },
  { href: "/contact",                                       icon: <MessageCircle size={13}/>,label: "Contact All Offices",           desc: "Global network" },
];

/* ─────────────────────────────────────────────
   TRIP COST CALCULATOR
───────────────────────────────────────────── */
function CostCalculator({ countries }) {
  const [dest, setDest]     = useState("Thailand");
  const [days, setDays]     = useState(7);
  const [people, setPeople] = useState(1);
  const [tier, setTier]     = useState("mid");

  // Find flag from MongoDB countries data
  const selectedCountryData = countries.find(c => c.country === dest);

  // Resolve budget data — fallback for countries without hardcoded data
  const d = DEST_DATA[dest] || {
    visa: "Check with embassy", visaCost: 5000,
    flight: [30000, 70000], hotel: [2000, 8000], daily: [3000, 9000],
  };

  const pick = (arr) => tier === "budget" ? arr[0] : tier === "mid" ? Math.round((arr[0]+arr[1])/2) : arr[1];

  const flightCost = pick(d.flight);
  const hotelNight = pick(d.hotel);
  const dailyCost  = pick(d.daily);
  const hotelTotal = hotelNight * days;
  const dailyTotal = dailyCost * days;
  const insurance  = tier === "budget" ? 2500 : 5000;
  const perPerson  = flightCost + hotelTotal + dailyTotal + (d.visaCost || 0) + insurance;
  const total      = perPerson * people;
  const buffer     = Math.round(total * 0.2);
  const grand      = total + buffer;

  const fmt = n => `৳${Number(n).toLocaleString("en-IN")}`;

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 bg-[#005a31] rounded-2xl flex items-center justify-center shadow-md">
          <Calculator size={22} className="text-white" />
        </div>
        <div>
          <h3 className="font-black text-gray-900 text-lg leading-tight">Trip Cost Calculator</h3>
          <p className="text-xs text-gray-400 font-medium">Real-time BDT estimate</p>
        </div>
      </div>

      {/* Inputs grid */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {/* Destination — pulls from MongoDB */}
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
        {/* Days */}
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
        {/* People */}
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
        {[["budget","🎒 Budget"],["mid","🏨 Mid"],["comfort","✈️ Comfort"]].map(([v,l]) => (
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

      {/* Breakdown */}
      <div className="flex-grow space-y-0 mb-4 rounded-2xl border border-gray-100 overflow-hidden">
        {[
          ["✈️","Return flights",  fmt(flightCost),  "per person"],
          ["🏨","Hotels total",    fmt(hotelTotal),  `${fmt(hotelNight)}/night × ${days}`],
          ["🍽️","Daily expenses",  fmt(dailyTotal),  `${fmt(dailyCost)}/day × ${days}`],
          ["🛂","Visa fee",        fmt(d.visaCost||0), d.visa || "Check embassy"],
          ["🛡️","Travel insurance",fmt(insurance),   "recommended"],
        ].map(([ico, label, val, note], idx) => (
          <div key={label} className={`flex items-center justify-between px-4 py-3 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-gray-700">{ico} {label}</span>
              <span className="text-[10px] text-gray-400">{note}</span>
            </div>
            <span className="font-black text-gray-800 text-sm tabular-nums">{val}</span>
          </div>
        ))}
        {people > 1 && (
          <div className="flex items-center justify-between px-4 py-3 bg-blue-50/50">
            <span className="text-xs font-semibold text-blue-700">× {people} travelers subtotal</span>
            <span className="font-black text-blue-700 text-sm">{fmt(total)}</span>
          </div>
        )}
        <div className="flex items-center justify-between px-4 py-3 bg-orange-50/60">
          <span className="text-xs font-semibold text-orange-600">+ 20% emergency buffer</span>
          <span className="font-black text-orange-500 text-sm">+{fmt(buffer)}</span>
        </div>
      </div>

      {/* Grand total */}
      <div className="bg-gradient-to-r from-[#005a31] to-[#007a42] rounded-2xl px-5 py-4 flex items-center justify-between shadow-lg">
        <div>
          <p className="text-green-200 text-[10px] font-black uppercase tracking-widest">Estimated Total</p>
          <p className="text-white font-black text-2xl tabular-nums">{fmt(grand)}</p>
          <p className="text-green-300 text-xs font-semibold">
            {people > 1 ? `${fmt(Math.round(grand/people))} per person · ` : ""}{days} days
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
        * Estimates based on 2025 avg. Prices vary.{" "}
        <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-bold hover:underline">Contact us</Link> for exact quote.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FAQ ACCORDION
───────────────────────────────────────────── */
const FAQS = [
  { q: "What is the cheapest country to visit from Bangladesh in 2025?",
    a: "Georgia (visa-free 365 days, ~BDT 2,500–5,000/day), Nepal (~BDT 1,800–4,000/day), and India (e-visa, ~BDT 1,500–3,500/day). Georgia offers the best combination of low cost + high quality experience." },
  { q: "How much does a 7-day Thailand trip cost from Bangladesh?",
    a: "Budget: BDT 55,000–65,000 | Mid-range: BDT 75,000–1,00,000 | Comfortable: BDT 1,10,000–1,50,000. Breakdown: Return flights BDT 20,000–35,000 + Hotel BDT 1,500–5,000/night × 7 + Visa on arrival ~BDT 3,800 + Daily expenses BDT 2,500–5,000/day." },
  { q: "When should I book flights from Bangladesh for cheapest prices?",
    a: "Book 6–8 weeks ahead for Asia, 3–6 months for Europe/USA. Fly Tuesday–Thursday (15–30% cheaper). Avoid Eid-ul-Fitr, Eid-ul-Adha, and Dec 20–Jan 5 (prices 50–100% higher). Set Google Flights price alerts for your route." },
  { q: "How much does a Europe/Schengen trip cost from Bangladesh?",
    a: "10-day trip: Budget BDT 2,00,000–2,50,000 | Mid-range BDT 2,80,000–3,50,000. Breakdown: Flights BDT 70,000–1,20,000 + Schengen visa BDT 8,500 + Hotels BDT 3,500–12,000/night + Daily BDT 7,000–15,000/day. Eastern Europe is 40–50% cheaper." },
  { q: "Do I need travel insurance for international travel from Bangladesh?",
    a: "Travel insurance is mandatory for Schengen and UK visas (min €30,000 coverage). For other destinations it's strongly recommended. Cost: BDT 2,000–8,000 for 7–14 days. Covers medical emergencies, trip cancellation, and baggage loss." },
  { q: "What are hidden costs I must budget for?",
    a: "Currency exchange loss (3–8%), checked baggage on budget airlines (BDT 3,000–8,000 each way), hotel resort fees ($10–30/night), airport transport ($10–50), travel SIM card, tipping (10–20% in Western countries), and entry fees to major attractions." },
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
   DESTINATION CARD
───────────────────────────────────────────── */
function DestCard({ destName, countryObj }) {
  const d = DEST_DATA[destName];
  if (!d) return null;

  const budget7d = d.flight[0] + d.hotel[0] * 7 + d.daily[0] * 7 + (d.visaCost || 0);
  const mid7d    = Math.round((d.flight[0]+d.flight[1])/2) + Math.round((d.hotel[0]+d.hotel[1])/2)*7 + Math.round((d.daily[0]+d.daily[1])/2)*7 + (d.visaCost||0);

  return (
    <div className="group bg-white rounded-3xl border-2 border-gray-100 hover:border-[#005a31] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Country header with dynamic flag from MongoDB */}
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
        {/* Region + visa */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{d.region}</span>
          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
            d.visaCost === 0 ? "bg-green-50 text-green-700" : "bg-blue-50 text-blue-700"
          }`}>
            {d.visa}
          </span>
        </div>

        {/* Cost breakdown rows */}
        <div className="space-y-1.5 mb-3">
          {[
            ["✈️ Flights",    `৳${d.flight[0].toLocaleString()} – ৳${d.flight[1].toLocaleString()}`],
            ["🏨 Hotel/night",`৳${d.hotel[0].toLocaleString()} – ৳${d.hotel[1].toLocaleString()}`],
            ["🍽️ Daily",      `৳${d.daily[0].toLocaleString()} – ৳${d.daily[1].toLocaleString()}`],
          ].map(([label, val]) => (
            <div key={label} className="flex items-center justify-between text-xs">
              <span className="text-gray-500 font-medium">{label}</span>
              <span className="font-black text-gray-800 tabular-nums">{val}</span>
            </div>
          ))}
        </div>

        {/* 7-day totals */}
        <div className="bg-gray-50 rounded-xl p-2.5 mb-3 border border-gray-100">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-400 font-semibold">Budget (7 days)</span>
            <span className="font-black text-green-700 tabular-nums">৳{budget7d.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-400 font-semibold">Mid-range (7 days)</span>
            <span className="font-black text-[#005a31] tabular-nums">৳{mid7d.toLocaleString()}</span>
          </div>
        </div>

        {/* Tip */}
        <p className="text-[11px] text-gray-400 italic leading-relaxed mb-3 flex-grow">💡 {d.tip}</p>

        {/* Best time + currency */}
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

  /* Fetch all countries from MongoDB via /api/countries */
  useEffect(() => {
    fetch("/api/countries")
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) setCountries(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  /* Countries with budget data available */
  const destNamesWithData = Object.keys(DEST_DATA);

  /* Merge MongoDB data with budget data */
  const enrichedDests = useMemo(() => {
    return destNamesWithData.map(name => ({
      name,
      countryObj: countries.find(c => c.country === name) || null,
    }));
  }, [countries]);

  /* Filter all countries from MongoDB for the country explorer */
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.02] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">

            {/* Left: copy */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-400/30 rounded-full text-orange-300 text-xs font-black uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                Free Tool · Updated 2025
              </div>

              <h1 id="budget-hero-heading" className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight mb-5">
                Travel Budget<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-400">Planner 2025</span>
              </h1>

              <p className="text-green-100 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Calculate your exact trip cost, discover the cheapest destinations from Bangladesh, get flight booking tips, and plan your dream vacation — all in one place with live country data.
              </p>

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

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-sm">
                {[
                  ["200+", "Countries"],
                  ["98%",  "Visa Success"],
                  ["Free", "To Use"],
                ].map(([n, l]) => (
                  <div key={l} className="bg-white/10 rounded-2xl p-3 text-center border border-white/10">
                    <div className="text-xl font-black text-white">{n}</div>
                    <div className="text-green-300 text-[10px] font-bold uppercase tracking-wide mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: calculator */}
            <div id="calculator" className="w-full">
              <CostCalculator countries={countries} />
            </div>
          </div>
        </div>
      </section>

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
            Match your travel style to a budget — from backpacker to luxury.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BUDGET_TIERS.map(t => (
            <div key={t.tier} className={`bg-white rounded-3xl border-2 p-6 shadow-sm transition-all group ${t.color}`}>
              <div className="text-4xl mb-3">{t.icon}</div>
              <h3 className="font-black text-gray-900 text-xl mb-1">{t.tier}</h3>
              <div className="font-black text-[#005a31] text-sm mb-1">{t.range}</div>
              <div className="text-[11px] text-gray-400 font-semibold mb-3">{t.usd}</div>
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
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DESTINATION BUDGET CARDS (with MongoDB flags)
      ══════════════════════════════════════════ */}
      <section id="destinations" aria-labelledby="dest-h" className="bg-white border-y border-gray-100 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#005a31] text-xs font-black uppercase tracking-widest">Budget Breakdown</span>
            <h2 id="dest-h" className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
              Trip Cost by Destination — 2025
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
              All costs in BDT per person. 7-day estimates include flights, hotel, visa & daily expenses.
            </p>
          </div>

          {/* Region filter pills */}
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
                <DestCard key={name} destName={name} countryObj={countryObj} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ALL COUNTRIES EXPLORER (MongoDB)
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

        {/* Search + filter */}
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

          {/* A–Z filter */}
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

        {/* Country grid — dynamic flags from MongoDB */}
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

        {/* Pagination */}
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
              Proven strategies used by experienced Bangladeshi travelers to save BDT 10,000–40,000 per trip.
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
          <h2 id="faq-h" className="text-3xl md:text-4xl font-black text-gray-900 mt-2">Travel Budget FAQs</h2>
          <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
            Most searched travel budget questions from Bangladeshi travelers — answered by Eammu Holidays experts.
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
            Travel Budget Planning Guide for Bangladesh — 2025 Complete Reference
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-500 leading-relaxed">
            <div className="space-y-4">
              <p>
                The most affordable international destinations from Bangladesh in 2025 are{" "}
                <Link href="/contact/travel-agency-georgia" className="text-[#005a31] font-bold hover:underline">Georgia (visa-free, ~BDT 2,500/day)</Link>,{" "}
                <strong className="text-gray-700">Nepal (~BDT 1,800/day)</strong>, and{" "}
                <strong className="text-gray-700">India (~BDT 1,500/day)</strong>. Our cost calculator above
                gives real-time estimates for all destinations using live data from our MongoDB country database.
                For group bookings, contact our{" "}
                <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-bold hover:underline">Cumilla or Dhaka office</Link>.
              </p>
              <p>
                Flights represent 30–50% of your total travel budget. Booking 6–8 weeks ahead and flying midweek saves
                BDT 10,000–30,000 per trip. For Europe, apply through our{" "}
                <Link href="/visa" className="text-[#005a31] font-bold hover:underline">Schengen visa service</Link> with a 98% approval rate.
                Use our free{" "}
                <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-bold hover:underline">visa checklist generator</Link> and{" "}
                <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#005a31] font-bold hover:underline">processing time tracker</Link>.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                For students, our{" "}
                <Link href="/study-abroad/student-visa" className="text-[#005a31] font-bold hover:underline">student visa processing</Link> and{" "}
                <Link href="/scholarships" className="text-[#005a31] font-bold hover:underline">scholarship guidance</Link> are available alongside
                IELTS preparation at our{" "}
                <Link href="/target-ielts-immigration-center" className="text-[#005a31] font-bold hover:underline">Cumilla IELTS center</Link>.
                Had a{" "}
                <Link href="/visa-rejection" className="text-[#005a31] font-bold hover:underline">visa rejection</Link>? Our consultants provide free re-application analysis.
              </p>
              <p>
                Eammu Holidays has offices in{" "}
                <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-bold hover:underline">Cumilla & Dhaka</Link>,{" "}
                <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-bold hover:underline">Dubai (Business Bay)</Link>,{" "}
                <Link href="/contact/travel-agency-georgia" className="text-[#005a31] font-bold hover:underline">Tbilisi (Georgia)</Link>, and{" "}
                <Link href="/contact/travel-agency-armenia" className="text-[#005a31] font-bold hover:underline">Yerevan (Armenia)</Link>.
                Read our <Link href="/blogs" className="text-[#005a31] font-bold hover:underline">travel blog</Link> for destination-specific cost breakdowns updated monthly.
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