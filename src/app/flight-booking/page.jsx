// app/flight-booking/page.jsx
// SERVER COMPONENT — metadata + structured data (@graph) + full SEO content

import Link from "next/link";

import {
  Plane,
  Clock,
  Shield,
  Users,
  TrendingDown,
  Globe,
  MessageCircle,
} from "lucide-react";
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";

// ─────────────────────────────────────────────────────────────────────────────
// CONFIG  (⚠️ replace the WhatsApp number — country code + number, digits only)
// ─────────────────────────────────────────────────────────────────────────────
const SITE = "https://eammu.com";
const PAGE_URL = `${SITE}/flight-booking`;
const WHATSAPP_NUMBER = "8801631312524"; // e.g. 8801712345678
const LAST_UPDATED = "2026-11-08"; // update manually when you change prices/content

const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(SITE),

  title: {
    absolute:
      "Cheap Flights from Bangladesh 2026 | Air Ticket Booking – Eammu Holidays",
  },

  description:
    "Book cheap flights from Dhaka & Bangladesh to Dubai, London, Toronto, USA, Malaysia & 200+ cities. One-way, return & group air tickets with expert WhatsApp support.",

  keywords: [
    "cheap flight booking Bangladesh",
    "cheap air tickets Bangladesh",
    "international flight booking Bangladesh",
    "online air ticket booking Bangladesh",
    "air ticket price Bangladesh 2026",
    "Dhaka to Dubai flight ticket price",
    "Dubai to Dhaka flight ticket",
    "Dhaka to London flights",
    "Dhaka to Toronto flights",
    "Dhaka to New York flights",
    "Dhaka to Kuala Lumpur flights",
    "Dhaka to Jeddah flights",
    "Dhaka to Bangkok flights",
    "Dhaka to Singapore flights",
    "Dhaka to Istanbul flights",
    "Chattogram international flights",
    "Sylhet international flights",
    "group flight booking Bangladesh",
    "one way flight Bangladesh",
    "return air ticket Dhaka",
    "last minute flights Bangladesh",
    "Umrah flight tickets Bangladesh",
    "travel agency Bangladesh flight",
    "Eammu Holidays flight booking",
  ],

  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-BD": PAGE_URL,
      "x-default": PAGE_URL,
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Cheap Flights from Bangladesh 2026 — Compare & Book Air Tickets",
    description:
      "Compare cheap international flights from Bangladesh. Dubai, UK, USA, Canada, Malaysia, Saudi Arabia & 200+ routes. One-way, return & group bookings.",
    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Cheap flight booking from Bangladesh — Eammu Holidays",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@EammuHolidays",
    title: "Cheap Flights from Bangladesh 2026 | Eammu Holidays",
    description:
      "Book cheap international flights from Bangladesh. Compare airfares to Dubai, UK, USA, Canada & 200+ destinations.",
    images: ["/preview-banner.webp"],
  },

  icons: { icon: "/emf.jpg", apple: "/emf.jpg" },

  other: {
    "geo.region": "BD",
    "geo.placename": "Bangladesh",
    "geo.position": "23.6850;90.3563",
    ICBM: "23.6850, 90.3563",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// STATIC DATA
// ─────────────────────────────────────────────────────────────────────────────

// stops: typical itinerary · best: usually cheaper months (indicative only)
const POPULAR_ROUTES = [
  { from: "Dhaka", to: "Dubai",        code: "DAC→DXB", time: "4h 30m", stops: "Nonstop",        best: "Jan–Feb, Sep–Oct", price: "From BDT 28,000",  airlines: "FlyDubai, Biman, Air Arabia", tag: "Most popular",   icon: "🇦🇪" },
  { from: "Dhaka", to: "London",       code: "DAC→LHR", time: "12–16h", stops: "1 stop / nonstop (Biman)", best: "Jan–Mar, Oct–Nov", price: "From BDT 75,000",  airlines: "Emirates, Qatar, Turkish, Biman", tag: "UK",         icon: "🇬🇧" },
  { from: "Dhaka", to: "Toronto",      code: "DAC→YYZ", time: "18–22h", stops: "1 stop",         best: "Jan–Mar, Sep–Nov", price: "From BDT 95,000",  airlines: "Qatar, Emirates, Air Canada",  tag: "Canada",         icon: "🇨🇦" },
  { from: "Dhaka", to: "New York",     code: "DAC→JFK", time: "18–22h", stops: "1 stop",         best: "Jan–Mar, Sep–Nov", price: "From BDT 90,000",  airlines: "Emirates, Qatar, United",      tag: "USA",            icon: "🇺🇸" },
  { from: "Dhaka", to: "Kuala Lumpur", code: "DAC→KUL", time: "3h 45m", stops: "Nonstop",        best: "Jan–Feb, May, Sep–Oct", price: "From BDT 18,000",  airlines: "MAS, Biman, AirAsia, US-Bangla", tag: "Best value", icon: "🇲🇾" },
  { from: "Dhaka", to: "Jeddah",       code: "DAC→JED", time: "5h 30m", stops: "Nonstop",        best: "Outside Ramadan/Hajj", price: "From BDT 32,000",  airlines: "Saudia, Biman, Flynas",        tag: "Hajj & Umrah",   icon: "🇸🇦" },
  { from: "Dhaka", to: "Bangkok",      code: "DAC→BKK", time: "2h 45m", stops: "Nonstop",        best: "May–Jun, Sep–Oct", price: "From BDT 15,000",  airlines: "Thai, Biman, Bangkok Air, US-Bangla", tag: "Asia popular", icon: "🇹🇭" },
  { from: "Dhaka", to: "Singapore",    code: "DAC→SIN", time: "4h 30m", stops: "Nonstop",        best: "Jan–Feb, Sep–Oct", price: "From BDT 22,000",  airlines: "Singapore Air, Scoot",         tag: "Business hub",   icon: "🇸🇬" },
  { from: "Dhaka", to: "Sydney",       code: "DAC→SYD", time: "16–20h", stops: "1 stop",         best: "Feb–Mar, May–Jun", price: "From BDT 110,000", airlines: "Emirates, Qatar, Qantas",      tag: "Australia",      icon: "🇦🇺" },
  { from: "Dhaka", to: "Doha",         code: "DAC→DOH", time: "4h",     stops: "Nonstop",        best: "Jan–Feb, Sep–Oct", price: "From BDT 20,000",  airlines: "Qatar Airways, Biman",         tag: "Qatar Airways",  icon: "🇶🇦" },
  { from: "Dhaka", to: "Istanbul",     code: "DAC→IST", time: "9–11h",  stops: "Nonstop / 1 stop", best: "Jan–Mar, Oct–Nov", price: "From BDT 48,000",  airlines: "Turkish Airlines, Pegasus",    tag: "Europe transit", icon: "🇹🇷" },
  { from: "Dhaka", to: "Riyadh",       code: "DAC→RUH", time: "5h",     stops: "Nonstop",        best: "Outside Ramadan/Eid", price: "From BDT 30,000",  airlines: "Saudia, Flynas, Biman",        tag: "Work routes",    icon: "🇸🇦" },
];

const AIRLINE_PARTNERS = [
  { name: "US-Bangla Airlines", cls: "text-red-600 italic font-black" },
  { name: "NOVOAIR",            cls: "text-sky-700 font-semibold tracking-wide" },
  { name: "Biman Bangladesh",   cls: "text-green-700 font-black" },
  { name: "Emirates",           cls: "text-white bg-red-600 px-2 py-0.5 rounded-sm font-black" },
  { name: "QATAR AIRWAYS",      cls: "text-[#5c0632] font-semibold tracking-wide" },
];

const TOC = [
  { id: "routes-heading",   label: "Popular routes & fares" },
  { id: "compare-heading",  label: "Fare comparison table" },
  { id: "guides-heading",   label: "Destination flight guides" },
  { id: "how-heading",      label: "How to book" },
  { id: "airports-heading", label: "Airports in Bangladesh" },
  { id: "fares-heading",    label: "Fare types explained" },
  { id: "checklist-heading",label: "Before-you-fly checklist" },
  { id: "season-heading",   label: "Best time to book" },
  { id: "faq-heading",      label: "FAQs" },
];

const WHY_US = [
  {
    icon: <TrendingDown size={24} className="text-blue-600" />,
    bg: "bg-blue-50",
    title: "Competitive Airfares",
    desc: "We compare prices across major airlines — Biman, Emirates, Qatar Airways, Turkish, Fly Dubai, Air Arabia and more — so you can pick the best-value fare for your route.",
  },
  {
    icon: <Shield size={24} className="text-green-600" />,
    bg: "bg-green-50",
    title: "Secure Booking",
    desc: "Safe booking process with e-ticket delivery after confirmation. Your payment and personal details are handled carefully at every step.",
  },
  {
    icon: <Clock size={24} className="text-amber-600" />,
    bg: "bg-amber-50",
    title: "Fast Expert Support",
    desc: "Our travel consultants help with bookings, schedule changes, refunds, and last-minute requests — reach us directly on WhatsApp.",
  },
  {
    icon: <Plane size={24} className="text-purple-600" />,
    bg: "bg-purple-50",
    title: "All Flight Types",
    desc: "One-way, return, multi-city, group bookings, and last-minute fares — all handled by our expert team, with group discounts available.",
  },
  {
    icon: <Globe size={24} className="text-rose-600" />,
    bg: "bg-rose-50",
    title: "200+ Destinations",
    desc: "Dubai, London, Toronto, New York, Kuala Lumpur, Bangkok, Sydney, Istanbul and every major international hub from Bangladesh.",
  },
  {
    icon: <Users size={24} className="text-indigo-600" />,
    bg: "bg-indigo-50",
    title: "Flight + Visa Together",
    desc: "Book your flight and apply for your visa with one team. Our visa experts make sure your travel documents match your flight schedule.",
    href: "/visa",
    cta: "Explore visa services →",
  },
];

const AIRLINES = [
  { name: "Emirates",           code: "EK", routes: "Dhaka → Dubai, London, USA, Canada, Australia" },
  { name: "Qatar Airways",      code: "QR", routes: "Dhaka → Doha, London, USA, Canada, Europe, Australia" },
  { name: "Turkish Airlines",   code: "TK", routes: "Dhaka → Istanbul, London, Europe, Americas" },
  { name: "Biman Bangladesh",   code: "BG", routes: "Dhaka → London, Doha, Dubai, Singapore, Kuala Lumpur" },
  { name: "US-Bangla Airlines", code: "BS", routes: "Dhaka → Dubai, Kuala Lumpur, Bangkok, Jeddah & more" },
  { name: "Novoair",            code: "VQ", routes: "Domestic Bangladesh routes" },
  { name: "Fly Dubai",          code: "FZ", routes: "Dhaka → Dubai (direct, budget)" },
  { name: "Air Arabia",         code: "G9", routes: "Dhaka → Sharjah (Dubai area, budget)" },
  { name: "Singapore Airlines", code: "SQ", routes: "Dhaka → Singapore, Australia, Europe, USA" },
  { name: "Malaysia Airlines",  code: "MH", routes: "Dhaka → Kuala Lumpur, London, Australia" },
  { name: "Thai Airways",       code: "TG", routes: "Dhaka → Bangkok, Europe, Australia" },
  { name: "Etihad Airways",     code: "EY", routes: "Dhaka → Abu Dhabi, Europe, USA, Australia" },
  { name: "Saudi Airlines",     code: "SV", routes: "Dhaka → Jeddah, Riyadh, Madinah" },
  { name: "Gulf Air",           code: "GF", routes: "Dhaka → Bahrain, Europe connections" },
];

// Long-form destination guides (heavy on helpful, crawlable text)
const ROUTE_GUIDES = [
  {
    id: "dubai",
    title: "Dhaka to Dubai & UAE Flights",
    intro:
      "Dhaka–Dubai is the busiest Gulf route for Bangladeshi travelers, workers, families and business visitors. Nonstop flights take roughly 4 hours 30 minutes to 5 hours, and several carriers compete, which keeps fares among the lowest of any Middle East route.",
    points: [
      "Airlines: Emirates, flydubai, Biman Bangladesh and US-Bangla fly to Dubai (DXB); Air Arabia flies to Sharjah (SHJ), about 30–40 minutes by road from Dubai.",
      "Cheapest options are usually flydubai and Air Arabia, while Emirates offers a full-service experience with generous baggage on most fares.",
      "Travelers need a valid UAE visa or entry permit before departure — check our Dubai visa page and book the flight to match your visa validity.",
      "Avoid Eid, Ramadan-end and school-holiday weeks, when Dhaka–Dubai fares can rise sharply.",
    ],
    link: { href: "/our-services/visa/dubai-visa-application", label: "Dubai tourist visa" },
  },
  {
    id: "uk-europe",
    title: "Dhaka to London, UK & Europe Flights",
    intro:
      "Most Dhaka–London itineraries connect through Doha, Dubai, Abu Dhabi or Istanbul, with total journey times of about 12–16 hours. Biman Bangladesh has operated nonstop Dhaka–London service on some schedules, so check the current timetable when comparing.",
    points: [
      "One-stop options via Emirates, Qatar Airways, Etihad and Turkish Airlines are the most common and often the best value.",
      "Book 8–12 weeks ahead for UK and Europe; summer (June–August) and December carry the highest fares.",
      "Turkish Airlines connects Dhaka to dozens of European cities through Istanbul, often with competitive fares.",
      "A UK Standard Visitor Visa or Schengen visa is required for Bangladeshi passport holders — secure your visa before paying for a non-refundable ticket.",
    ],
    link: { href: "/visa/united-kingdom-visa", label: "UK visitor visa" },
  },
  {
    id: "usa-canada",
    title: "Dhaka to USA & Canada Flights",
    intro:
      "Flights from Bangladesh to New York (JFK), Toronto (YYZ), Vancouver and other North American cities almost always involve one stop at a Gulf or European hub, and take roughly 18–24 hours door to door.",
    points: [
      "Qatar Airways, Emirates, Etihad and Turkish Airlines are the main carriers, usually connecting via Doha, Dubai, Abu Dhabi or Istanbul.",
      "Book 10–16 weeks ahead for the best fares; September–November and January–March are often cheaper than summer and December.",
      "Bangladeshi passport holders need a visa for the USA and Canada, so get approval first and then buy your ticket.",
      "Students and immigrants should compare baggage allowance — extra bags can matter more than a small fare difference.",
    ],
    link: { href: "/visa/canada-visa", label: "Canada visa" },
  },
  {
    id: "southeast-asia",
    title: "Dhaka to Malaysia, Thailand & Singapore Flights",
    intro:
      "Southeast Asia is the most popular short-haul region for Bangladeshi tourists, students and business travelers. Nonstop flights to Bangkok (about 2h 45m), Kuala Lumpur (about 3h 45m) and Singapore (about 4h 30m) keep fares low.",
    points: [
      "Kuala Lumpur: Malaysia Airlines, Biman, AirAsia and US-Bangla — often the cheapest long-distance fare from Dhaka.",
      "Bangkok: Thai Airways, Biman, Bangkok Airways and US-Bangla; popular for medical and leisure travel.",
      "Singapore: Singapore Airlines and Scoot; good onward connections to Australia and Indonesia.",
      "Visa rules differ by country and change often, so confirm requirements before you fly.",
    ],
    link: { href: "/visa/malaysia-visa", label: "Malaysia visa" },
  },
  {
    id: "saudi-umrah",
    title: "Dhaka to Saudi Arabia, Jeddah & Umrah Flights",
    intro:
      "Jeddah (JED), Madinah (MED), Riyadh (RUH) and Dammam are served from Dhaka by Saudia, Biman, Flynas and other carriers, with flight times of about 5–6 hours.",
    points: [
      "Umrah travelers usually fly into Jeddah or Madinah — ask us about group fares for families and larger Umrah groups.",
      "Fares peak around Ramadan, Eid and the Hajj season; booking early makes a big difference.",
      "Workers traveling abroad should check emigration and BMET clearance requirements before booking.",
      "Compare Saudia, Biman and Flynas for baggage allowance and meal inclusion, not just ticket price.",
    ],
  },
  {
    id: "australia",
    title: "Dhaka to Australia Flights",
    intro:
      "Sydney, Melbourne and other Australian cities are typically reached with one stop via Singapore, Kuala Lumpur, Bangkok or a Gulf hub, with total travel time of about 16–24 hours.",
    points: [
      "Singapore Airlines, Malaysia Airlines, Thai Airways, Emirates, Qatar Airways and Qantas are the usual carriers.",
      "Book 12–16 weeks ahead; student intake periods (February and July) see strong demand.",
      "Check transit visa rules for your connection city as well as your Australian visa.",
    ],
    link: { href: "/visa/australia-visa", label: "Australia visa" },
  },
];

const HOW_STEPS = [
  { title: "Search or message us", desc: "Enter your route, dates and passengers in the search box, or tap 'Talk to an Advisor' and send your trip details on WhatsApp." },
  { title: "Compare options", desc: "We show fares across airlines with stops, baggage and change rules so you can choose the right balance of price and comfort." },
  { title: "Share passport details", desc: "Passenger names must match the passport exactly. Send a clear passport copy for each traveler to avoid name-correction fees later." },
  { title: "Pay & get your e-ticket", desc: "After payment is confirmed, your e-ticket and booking reference (PNR) are issued. You can verify the PNR on the airline website." },
  { title: "Fly with confidence", desc: "We stay available for date changes, refunds, extra baggage and last-minute questions before and after you travel." },
];

const AIRPORTS = [
  { code: "DAC", name: "Hazrat Shahjalal International Airport, Dhaka", note: "Bangladesh's main international gateway with the widest choice of airlines and destinations." },
  { code: "CGP", name: "Shah Amanat International Airport, Chattogram", note: "Selected international flights, mostly to the Middle East and Asia — convenient for travelers from the south-east." },
  { code: "ZYL", name: "Osmani International Airport, Sylhet", note: "Direct flights on some routes to the Gulf and the UK-linked connections that serve the Sylhet region." },
];

const FARE_TYPES = [
  { type: "Economy Saver / Light", bags: "Hand baggage only or small allowance on some airlines", change: "Often not allowed or high fee", refund: "Usually non-refundable" },
  { type: "Economy Standard", bags: "Checked baggage typically included (often 20–30 kg)", change: "Allowed with a fee", refund: "Partly refundable after deductions" },
  { type: "Economy Flex", bags: "Checked baggage included", change: "Low or no change fee", refund: "More flexible refund rules" },
  { type: "Business Class", bags: "Higher baggage allowance and lounge access on many airlines", change: "Most flexible", refund: "Generally refundable or lower penalties" },
];

const CHECKLIST = [
  "Passport valid for at least 6 months from your travel date (many countries require this).",
  "Valid visa or entry permit for your destination and for any transit country that requires one.",
  "Printed or digital e-ticket with the booking reference (PNR).",
  "Return or onward ticket — airlines and immigration often ask for proof.",
  "Hotel booking or invitation letter, and travel insurance where required.",
  "Baggage allowance checked for every segment of your journey.",
  "Arrive at the airport about 3 hours before an international departure.",
  "Keep important documents, medicines and valuables in your hand baggage.",
];

const SERVICES = [
  { icon: "✈️", label: "Air Ticket Booking" },
  { icon: "🔄", label: "Return Flights" },
  { icon: "👥", label: "Group Booking" },
  { icon: "⚡", label: "Last-Minute Fares" },
  { icon: "🏨", label: "Hotel Reservation" },
  { icon: "🛂", label: "Tourist Visa Support",  href: "/visa" },
  { icon: "🎓", label: "Student Visa Guidance", href: "/our-services/visa-services/student-visa-from-bangladesh" },
  { icon: "💼", label: "Work Visa Support",     href: "/our-services/visa-services/work-visa-from-bangladesh" },
  { icon: "🕌", label: "Umrah Packages" },
  { icon: "🏝️", label: "Holiday Tour Packages", href: "/our-services/tour-packages" },
  { icon: "🎉", label: "Honeymoon Tours" },
  { icon: "📋", label: "Travel Document Help",  href: "/travel-resources/travel-document-generator" },
];

const TIPS = [
  { tip: "Book 6–8 weeks ahead", detail: "For Dubai, Saudi Arabia, and other Middle East routes for the best fares." },
  { tip: "Fly mid-week",         detail: "Tuesday and Wednesday departures are usually cheaper than Friday–Sunday." },
  { tip: "Off-peak months",      detail: "January–February and September–October often offer the lowest fares from Bangladesh." },
  { tip: "Consider a stopover",  detail: "Doha or Istanbul connections can reduce the total fare vs direct routes." },
  { tip: "Group discounts",      detail: "Groups of 10+ passengers can get negotiated group fares — ask for a quote." },
  { tip: "Return vs one-way",    detail: "Return tickets are often cheaper per leg than two one-way bookings — compare both." },
  { tip: "Check baggage first",  detail: "A cheaper fare with no checked bag can cost more once you add baggage." },
  { tip: "Compare nearby airports", detail: "Sharjah vs Dubai, or Chattogram vs Dhaka, can change the price noticeably." },
  { tip: "Book after visa approval", detail: "Pick flexible fares until your visa is approved to avoid losing money on changes." },
];

const SEASON_TABLE = [
  { period: "January – February",   level: "Low season",  note: "Post-winter, usually the cheapest window" },
  { period: "March – April",        level: "Medium",      note: "Fares rise ahead of Eid and holidays" },
  { period: "May",                  level: "Low–Medium",  note: "Good deals before the summer peak" },
  { period: "June – August",        level: "Peak season", note: "Summer holidays — highest fares to UK, Europe, Canada" },
  { period: "September – October",  level: "Low season",  note: "Great fares for most routes" },
  { period: "November",             level: "Medium",      note: "Prices start rising toward year-end" },
  { period: "December",             level: "Peak season", note: "Year-end travel — book very early" },
  { period: "Ramadan / Eid weeks",  level: "Peak season", note: "Strong demand on Middle East & Bangladesh routes" },
];

// Plain-text FAQ (same text goes to the visible page AND the FAQPage schema — Google requires they match)
const FAQ_ITEMS = [
  {
    q: "How do I book cheap international flights from Bangladesh?",
    a: "Book early (6–8 weeks ahead for most routes), compare airlines, stay flexible with dates, and watch for promotional fares. Eammu Holidays compares fares across multiple airlines and you can also confirm your ticket directly with our advisor on WhatsApp.",
    link: { href: "/visa", label: "Add tourist visa services" },
  },
  {
    q: "Which airlines fly from Dhaka, Bangladesh?",
    a: "Major airlines from Hazrat Shahjalal International Airport (DAC) include Biman Bangladesh, US-Bangla, Emirates, Qatar Airways, Turkish Airlines, Fly Dubai, Air Arabia, Singapore Airlines, Malaysia Airlines, Thai Airways, Etihad, Saudia and Gulf Air.",
  },
  {
    q: "What is the cheapest flight from Dhaka to Dubai?",
    a: "Dhaka to Dubai is usually cheapest with Fly Dubai, Air Arabia (via Sharjah), US-Bangla or Biman. One-way fares commonly range from BDT 25,000 to 55,000 depending on season. Nonstop flights take about 4 hours 30 minutes. Book 6–8 weeks ahead for the best prices.",
    link: { href: "/our-services/visa/dubai-visa-application", label: "Dubai tourist visa" },
  },
  {
    q: "How can I find cheap flights from Dubai to Dhaka?",
    a: "Compare Fly Dubai, Air Arabia, Emirates, Biman and US-Bangla, avoid Eid and school-holiday weeks, and travel mid-week. UAE-based travelers can message our Dubai team on WhatsApp for current Dubai to Dhaka fares.",
    link: { href: "/contact/travel-agency-dubai", label: "Contact our Dubai office" },
  },
  {
    q: "How much does a flight from Bangladesh to the UK cost?",
    a: "Dhaka to London Heathrow typically costs BDT 75,000–150,000 one-way depending on airline, season and booking time. Emirates, Qatar Airways and Turkish Airlines offer competitive one-stop fares, and Biman has operated nonstop service on some schedules. Expect 12–16 hours for most itineraries.",
    link: { href: "/visa/united-kingdom-visa", label: "UK Standard Visitor Visa" },
  },
  {
    q: "Can I book a flight and apply for a visa with Eammu Holidays?",
    a: "Yes. Eammu Holidays offers flight booking plus visa consultancy. Our visa team prepares tourist, student or work visa applications with embassy-accurate documents so your flight and visa timelines line up.",
    link: { href: "/visa", label: "Tourist visa services" },
  },
  {
    q: "Should I buy my air ticket before or after my visa is approved?",
    a: "In most cases it is safer to wait for visa approval, or to choose a flexible or refundable fare. Some embassies ask for a flight reservation (not a paid ticket) with the application — our advisors can arrange the right type of booking for your case.",
  },
  {
    q: "What is the cheapest time to fly from Bangladesh?",
    a: "The cheapest months are usually January–February, May and September–October. The most expensive are June–August, December and the Ramadan/Eid peaks. Tuesday and Wednesday departures are generally cheaper than Friday–Sunday.",
  },
  {
    q: "Does Eammu Holidays offer group flight booking?",
    a: "Yes. We arrange group bookings for 10+ passengers with negotiated group fares, flexible name-change policies where airlines allow, and dedicated support. Groups often save 10–20% compared with individual tickets, depending on airline and route.",
  },
  {
    q: "How early should I book international flights from Bangladesh?",
    a: "Middle East routes: 6–8 weeks ahead. UK and Europe: 8–12 weeks. USA and Canada: 10–16 weeks. Australia: 12–16 weeks. Last-minute deals sometimes appear on Middle East routes but are rare on long-haul flights.",
  },
  {
    q: "What baggage allowance can I expect on international flights?",
    a: "Allowances depend on the airline, route and fare type. Many economy fares include around 20–30 kg of checked baggage plus hand baggage, while budget carriers and 'Saver' fares may include less or none. Always confirm baggage for every flight segment before paying.",
  },
  {
    q: "Can I correct a spelling mistake in the passenger name?",
    a: "Minor name corrections are often possible, but rules and fees vary by airline and some do not allow changes at all. Send us the exact passport details when booking, and contact us immediately if you notice an error.",
  },
  {
    q: "Can I change or cancel my air ticket?",
    a: "Change and refund rules depend on the airline and fare type. Tell our advisor your booking details on WhatsApp and we will check the fare conditions and help with date changes or refund requests.",
  },
  {
    q: "How long does an air ticket refund take?",
    a: "Refund times depend on the airline and how the ticket was paid for. Airlines often take several weeks to process approved refunds. We follow up with the airline on your behalf and keep you updated.",
  },
  {
    q: "Which is the cheapest airline from Dhaka to Kuala Lumpur or Bangkok?",
    a: "On Southeast Asia routes, low-cost and regional carriers such as AirAsia, US-Bangla and Biman are often cheaper than full-service airlines, but fares change daily. Compare total price including baggage and meals before deciding.",
  },
  {
    q: "Do you book Umrah and Saudi Arabia flights from Bangladesh?",
    a: "Yes. We book flights from Dhaka to Jeddah, Madinah and Riyadh for Umrah pilgrims, families and workers, including group fares. Fares rise sharply around Ramadan, Eid and Hajj, so booking early is strongly recommended.",
  },
  {
    q: "Can I fly internationally from Chattogram or Sylhet?",
    a: "Yes, selected international flights operate from Chattogram (CGP) and Sylhet (ZYL), mainly to the Middle East and some Asian cities. Dhaka offers the widest choice, so we compare both when it helps you save money or travel time.",
  },
  {
    q: "What is the difference between a nonstop and a one-stop flight?",
    a: "A nonstop flight takes you directly to your destination without changing planes, while a one-stop flight includes a layover at a hub such as Doha, Dubai or Istanbul. One-stop itineraries are often cheaper but take longer, and may need a transit visa depending on your passport and the connection city.",
  },
  {
    q: "How do I confirm my ticket quickly?",
    a: "Use the flight search above, or tap 'Talk to an Advisor' to message us on WhatsApp with your route, dates and passenger count. We will send available options and confirm your e-ticket after payment.",
  },
];

const SEO_LINKS = [
  { label: "Tourist Visa from Bangladesh",    href: "/visa" },
  { label: "Dubai Tourist Visa",              href: "/our-services/visa/dubai-visa-application" },
  { label: "UK Visitor Visa Bangladesh",      href: "/visa/united-kingdom-visa" },
  { label: "USA Tourist Visa Bangladesh",     href: "/visa/united-states-visa" },
  { label: "Canada Tourist Visa",             href: "/visa/canada-visa" },
  { label: "Schengen Visa 2026",              href: "/schengen-visa" },
  { label: "Malaysia Visa Bangladesh",        href: "/visa/malaysia-visa" },
  { label: "Thailand Tourist Visa",           href: "/visa/thailand-visa" },
  { label: "Australia Tourist Visa",          href: "/visa/australia-visa" },
  { label: "Japan Tourist Visa",              href: "/visa/japan-visa" },
  { label: "Saudi Arabia Visa Bangladesh",    href: "/our-services/visa/saudi-arabia-visa-application" },
  { label: "Singapore Visa Bangladesh",       href: "/visa/singapore-visa" },
  { label: "Student Visa from Bangladesh",    href: "/our-services/visa-services/student-visa-from-bangladesh" },
  { label: "Work Visa from Bangladesh",       href: "/our-services/visa-services/work-visa-from-bangladesh" },
  { label: "Holiday Tour Packages",           href: "/our-services/tour-packages" },
  { label: "Dubai Residents Visa Guide",      href: "/visa/dubai-residents" },
  { label: "E-Visa Destinations 2026",        href: "/visa/e-visa" },
  { label: "Visa Checklist Generator",        href: "/travel-resources/visa-checklist-generator" },
  { label: "Visa Processing Time Tracker",    href: "/travel-resources/visa-processing-time-tracker" },
  { label: "Visa Rejection Rates",            href: "/visa-rejection" },
  { label: "IELTS & Immigration Center",      href: "/target-ielts-immigration-center" },
  { label: "USA Visa Interview Prep",         href: "/target-usa-visa-interview-preparation" },
  { label: "Contact Bangladesh Office",       href: "/contact/travel-agency-bangladesh" },
  { label: "Contact Dubai Office",            href: "/contact/travel-agency-dubai" },
  { label: "Online Travel Agency Bangladesh", href: "/online-travel-agency-bangladesh" },
  { label: "Client Testimonials",             href: "/testimonials" },
];

// ─────────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA — one @graph
// ─────────────────────────────────────────────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": `${SITE}/#organization`,
      name: "Eammu Holidays",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/emf.jpg` },
      image: `${SITE}/preview-banner.webp`,
      email: "info@eammu.com",
      description:
        "Online travel agency offering international flight booking, visa consultancy, Umrah and holiday packages from Bangladesh and the UAE.",
      areaServed: [
        { "@type": "Country", name: "Bangladesh" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      address: [
        { "@type": "PostalAddress", addressLocality: "Cumilla", addressCountry: "BD" },
        { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
        { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "info@eammu.com",
        availableLanguage: ["English", "Bengali"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Eammu Holidays",
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: "Cheap Flights from Bangladesh 2026 | Air Ticket Booking – Eammu Holidays",
      description:
        "Book cheap international flights from Bangladesh. Compare airfares to 200+ destinations.",
      inLanguage: "en",
      dateModified: LAST_UPDATED,
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${PAGE_URL}/#service` },
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE}/preview-banner.webp` },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#flight-heading", "#faq-heading", "#routes-heading"],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",         item: SITE },
        { "@type": "ListItem", position: 2, name: "Our Services", item: `${SITE}/our-services` },
        { "@type": "ListItem", position: 3, name: "Flight Booking from Bangladesh", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      serviceType: "Flight Booking Service",
      name: "Cheap International Flight Booking from Bangladesh",
      description:
        "One-way, return and group international air tickets from Bangladesh to Dubai, UK, USA, Canada, Malaysia, Saudi Arabia, Thailand, Australia and 200+ destinations.",
      provider: { "@id": `${SITE}/#organization` },
      areaServed: { "@type": "Country", name: "Bangladesh" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "International Flight Routes from Bangladesh",
        itemListElement: POPULAR_ROUTES.map((r) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: `${r.from} to ${r.to} Flights (${r.code.replace("→", "-")})` },
        })),
      },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#routes`,
      name: "Popular International Flight Routes from Bangladesh",
      itemListElement: POPULAR_ROUTES.map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${r.from} to ${r.to} flights`,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}/#faq`,
      mainEntity: FAQ_ITEMS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function FlightBookingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-white font-sans">
        {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
          <ol className="max-w-7xl mx-auto px-6 py-2.5 flex items-center gap-2 text-xs text-gray-400">
            <li>
              <Link href="/" className="hover:text-blue-600 font-medium transition">Home</Link>
            </li>
            <li aria-hidden="true" className="text-gray-300">›</li>
            <li>
              <Link href="/our-services" className="hover:text-blue-600 font-medium transition">Our Services</Link>
            </li>
            <li aria-hidden="true" className="text-gray-300">›</li>
            <li aria-current="page" className="font-semibold text-gray-600">
              Flight Booking from Bangladesh
            </li>
          </ol>
        </nav>

        {/* ── HERO + FLIGHT SEARCH ── */}
        <section
          className="relative bg-gradient-to-br from-green-950 via-green-900 to-green-800 pt-12 pb-20 px-6 overflow-hidden"
          aria-labelledby="flight-heading"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full -translate-y-1/3 translate-x-1/3" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-white">
                  Live Flight Search — 200+ Destinations — Best Fares 2026
                </span>
              </div>
            </div>

            <h1
              id="flight-heading"
              className="text-4xl md:text-6xl font-black text-white text-center leading-tight tracking-tight mb-4"
            >
              Cheap Flight Booking<br />
              <span className="text-blue-300">from Bangladesh</span>
            </h1>

            <p className="text-blue-200 text-center text-base md:text-lg max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
              Compare international airfares across{" "}
              <strong className="text-white">Emirates, Qatar Airways, Turkish, Biman, US-Bangla & 50+ airlines</strong>.
              One-way, return & group air tickets to{" "}
              <strong className="text-white">Dubai, London, USA, Canada, Malaysia & 200+ destinations</strong>.
            </p>

            <ul className="flex flex-wrap justify-center gap-2 mb-8">
              {POPULAR_ROUTES.slice(0, 8).map((r) => (
                <li key={r.code}>
                  <a
                    href="#routes-heading"
                    className="inline-block text-xs font-bold text-blue-200 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full hover:bg-white/20 transition"
                  >
                    ✈ {r.to}
                  </a>
                </li>
              ))}
            </ul>

            {/* ── EXPERT SUPPORT + AIRLINE PARTNERS + WHATSAPP ── */}
            <div className="relative mt-10">
              <div className="bg-white rounded-3xl shadow-xl px-6 md:px-10 pt-6 pb-12">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-center gap-4 md:w-[34%]">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center">
                      <Plane size={22} className="text-blue-900 -rotate-45" />
                    </div>
                    <div>
                      <h2 className="text-lg font-black text-gray-900 leading-tight">
                        Book with Expert Support
                      </h2>
                      <p className="text-sm text-gray-500 leading-snug">
                        Official airline tickets with instant confirmation.
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block w-px self-stretch bg-gray-200" />

                  <div className="flex-1">
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">
                      Our Official Airline Partners
                    </p>
                    <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
                      {AIRLINE_PARTNERS.map((a) => (
                        <li key={a.name} className={`text-sm md:text-base ${a.cls}`}>
                          {a.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 -bottom-6 flex justify-center">
                <a
                  href={waLink("Hi Eammu Holidays, I want to book a cheap flight. Please share the best fare.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Talk to an advisor on WhatsApp"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-black uppercase tracking-wide text-sm md:text-base px-8 py-3.5 rounded-xl shadow-lg transition"
                >
                  <MessageCircle size={20} />
                  Talk to an Advisor
                </a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-14 text-xs font-bold text-blue-200">
              {["🔒 Secure Booking", "⚡ E-Ticket Delivery", "✅ Competitive Fares", "👥 Group Discounts", "💬 WhatsApp Support"].map((b) => (
                <span key={b}>{b}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section className="bg-blue-600 py-6 px-6" aria-label="Flight booking highlights">
          <div className="max-w-7xl mx-auto">
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { val: "200+", label: "Destinations" },
                { val: "50+",  label: "Airlines" },
                { val: "5",    label: "Offices in 4 Countries" },
                { val: "WhatsApp", label: "Fast Support" },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl md:text-3xl font-black text-white">{s.val}</dt>
                  <dd className="text-xs font-bold text-blue-200 uppercase tracking-wider mt-0.5">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── INTRO + TABLE OF CONTENTS ── */}
        <section aria-labelledby="intro-heading" className="py-14 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 id="intro-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              Book Cheap International Air Tickets from Bangladesh
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Looking for the cheapest flight from Dhaka, Chattogram or Sylhet? Eammu Holidays helps travelers,
              students, workers, pilgrims and families book one-way, return, multi-city and group air tickets to more
              than 200 destinations. Compare airlines, check baggage and fare rules, and confirm your booking with a
              real travel advisor on WhatsApp.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Below you will find indicative fares for popular routes, destination guides, fare-type explanations, a
              pre-flight checklist and answers to the most common flight booking questions.
            </p>
            <nav aria-label="On this page" className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">On this page</p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
                {TOC.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-blue-600 font-semibold hover:underline">
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {/* ── POPULAR ROUTES ── */}
        <section aria-labelledby="routes-heading" className="py-16 px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 block mb-2">🔥 Most Booked</span>
              <h2 id="routes-heading" className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-2">
                Popular International Flight Routes from Bangladesh
              </h2>
              <p className="text-gray-500 text-sm font-medium max-w-2xl">
                Indicative fares and flight times from Dhaka (DAC) to top international destinations in 2026. Prices
                change daily — message us for today&apos;s best fare. Add{" "}
                <Link href="/visa" className="text-blue-600 font-semibold hover:underline">
                  tourist visa assistance
                </Link>{" "}
                for complete trip planning.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {POPULAR_ROUTES.map((r) => (
                <article
                  key={r.code}
                  className="bg-white rounded-2xl border-2 border-gray-100 p-5 hover:border-blue-400 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl" aria-hidden="true">{r.icon}</span>
                      <div>
                        <h3 className="font-black text-gray-800 text-sm leading-tight">
                          {r.from} to {r.to} Flights
                        </h3>
                        <p className="text-[10px] text-gray-400 font-semibold">{r.code}</p>
                      </div>
                    </div>
                    {r.tag && (
                      <span className="text-[10px] font-black bg-blue-50 text-blue-600 border border-blue-100 px-2 py-1 rounded-lg">
                        {r.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-4 mb-3">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Duration</p>
                      <p className="text-xs font-black text-gray-700">{r.time}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Price</p>
                      <p className="text-xs font-black text-green-600">{r.price}</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 font-medium mb-4">{r.airlines}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="#flight-search"
                      className="text-center text-xs font-black text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-xl transition"
                    >
                      Search flights
                    </a>
                    <a
                      href={waLink(`Hi Eammu Holidays, I need the best fare for ${r.from} to ${r.to} (${r.code.replace("→", "-")}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center text-xs font-black text-white bg-[#25D366] hover:bg-[#1ebe5b] px-3 py-2 rounded-xl transition"
                    >
                      WhatsApp quote
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── FARE COMPARISON TABLE ── */}
        <section aria-labelledby="compare-heading" className="py-16 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 id="compare-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Dhaka Flight Fare Comparison Table 2026
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Starting one-way fares, typical journey type and cheaper travel months for popular routes. Fares are
              indicative and change with season, airline and booking date.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white">
              <table className="w-full text-sm text-left min-w-[760px]">
                <caption className="sr-only">Comparison of flight fares, duration and best months from Dhaka</caption>
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-4 py-3">Route</th>
                    <th scope="col" className="px-4 py-3">Starting fare</th>
                    <th scope="col" className="px-4 py-3">Flight time</th>
                    <th scope="col" className="px-4 py-3">Journey</th>
                    <th scope="col" className="px-4 py-3">Usually cheaper</th>
                    <th scope="col" className="px-4 py-3">Main airlines</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {POPULAR_ROUTES.map((r) => (
                    <tr key={r.code}>
                      <th scope="row" className="px-4 py-3 font-bold text-gray-800">{r.from} → {r.to} ({r.code.split("→")[1]})</th>
                      <td className="px-4 py-3 text-green-700 font-semibold">{r.price.replace("From ", "")}</td>
                      <td className="px-4 py-3 text-gray-600">{r.time}</td>
                      <td className="px-4 py-3 text-gray-600">{r.stops}</td>
                      <td className="px-4 py-3 text-gray-600">{r.best}</td>
                      <td className="px-4 py-3 text-gray-500">{r.airlines}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── DESTINATION GUIDES ── */}
        <section aria-labelledby="guides-heading" className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 block mb-2">Destination Guides</span>
            <h2 id="guides-heading" className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3">
              Flight Guides for Popular Destinations from Bangladesh
            </h2>
            <p className="text-gray-500 text-sm font-medium max-w-2xl mb-10">
              Airlines, journey times, best booking windows and visa reminders for the most searched routes from Dhaka.
            </p>

            <div className="space-y-6">
              {ROUTE_GUIDES.map((g) => (
                <article key={g.id} id={g.id} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8 scroll-mt-24">
                  <h3 className="text-xl font-black text-gray-900 mb-3">{g.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{g.intro}</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 leading-relaxed">
                    {g.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href={waLink(`Hi Eammu Holidays, I need a quote for: ${g.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-black text-white bg-[#25D366] hover:bg-[#1ebe5b] px-4 py-2 rounded-xl transition"
                    >
                      <MessageCircle size={14} /> Get a quote
                    </a>
                    {g.link && (
                      <Link href={g.link.href} className="text-xs font-black text-blue-600 hover:underline">
                        {g.link.label} →
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── DUBAI ⇄ DHAKA ── */}
        <section aria-labelledby="dubai-heading" className="py-16 px-6 bg-green-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h2 id="dubai-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              Cheap Flights Between Dubai and Dhaka
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Dubai ⇄ Dhaka is one of the busiest routes for Bangladeshi expatriates. Fly Dubai, Air Arabia (via
              Sharjah), Emirates, Biman and US-Bangla operate this sector, with nonstop flights taking around 4 hours
              30 minutes. For the cheapest Dubai to Dhaka air ticket, avoid Eid and school-holiday weeks, travel
              mid-week, and book 6–8 weeks ahead.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              UAE residents can reach our{" "}
              <Link href="/contact/travel-agency-dubai" className="text-blue-600 font-semibold hover:underline">
                Dubai office
              </Link>{" "}
              or read the{" "}
              <Link href="/visa/dubai-residents" className="text-blue-600 font-semibold hover:underline">
                Dubai residents visa guide
              </Link>{" "}
              for onward travel to Europe, Asia and beyond.
            </p>
          </div>
        </section>

        {/* ── AIRLINES ── */}
        <section aria-labelledby="airlines-heading" className="py-16 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 block mb-2">All Carriers</span>
              <h2 id="airlines-heading" className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                Airlines We Search from Bangladesh
              </h2>
              <p className="text-gray-500 text-sm font-medium">
                We compare fares across every major carrier flying from Dhaka so you can choose the best price and schedule.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {AIRLINES.map((a) => (
                <div
                  key={a.code}
                  className="bg-white rounded-2xl border border-gray-100 p-4 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center font-black text-blue-600 text-xs">
                      {a.code}
                    </span>
                    <h3 className="font-black text-gray-800 text-sm">{a.name}</h3>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed">{a.routes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW TO BOOK ── */}
        <section aria-labelledby="how-heading" className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 id="how-heading" className="text-3xl font-black text-gray-900 tracking-tight mb-2">
              How to Book Your Flight with Eammu Holidays
            </h2>
            <p className="text-gray-500 text-sm font-medium mb-8">
              A simple five-step process from search to take-off.
            </p>
            <ol className="space-y-4">
              {HOW_STEPS.map((s, i) => (
                <li key={s.title} className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <span className="w-9 h-9 shrink-0 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-black text-gray-900 text-base mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── AIRPORTS ── */}
        <section aria-labelledby="airports-heading" className="py-16 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h2 id="airports-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              International Airports in Bangladesh
            </h2>
            <p className="text-sm text-gray-500 mb-8">
              Choose the airport that suits your route, schedule and budget — we compare options for you.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {AIRPORTS.map((a) => (
                <article key={a.code} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <p className="text-xs font-black text-blue-600 mb-1">{a.code}</p>
                  <h3 className="font-black text-gray-900 text-sm mb-2">{a.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{a.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── FARE TYPES ── */}
        <section aria-labelledby="fares-heading" className="py-16 px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h2 id="fares-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Air Ticket Fare Types Explained
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              The cheapest ticket is not always the best value. Rules differ by airline, so always confirm the exact
              conditions of your fare before paying.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-100">
              <table className="w-full text-sm text-left min-w-[640px]">
                <caption className="sr-only">Typical differences between economy and business fare types</caption>
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-4 py-3">Fare type</th>
                    <th scope="col" className="px-4 py-3">Baggage</th>
                    <th scope="col" className="px-4 py-3">Date change</th>
                    <th scope="col" className="px-4 py-3">Refund</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {FARE_TYPES.map((f) => (
                    <tr key={f.type}>
                      <th scope="row" className="px-4 py-3 font-bold text-gray-800">{f.type}</th>
                      <td className="px-4 py-3 text-gray-600">{f.bags}</td>
                      <td className="px-4 py-3 text-gray-600">{f.change}</td>
                      <td className="px-4 py-3 text-gray-600">{f.refund}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section aria-labelledby="why-heading" className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 block mb-2">
                Why Travelers Choose Us
              </span>
              <h2 id="why-heading" className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                A Trusted Flight Booking Agency in Bangladesh
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
                We don&apos;t just search flights — we support your entire trip from booking to arrival. Read our{" "}
                <Link href="/testimonials" className="text-blue-600 font-semibold hover:underline">
                  client testimonials
                </Link>
                .
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_US.map((w) => (
                <div key={w.title} className="p-7 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-lg transition-all">
                  <div className={`w-12 h-12 ${w.bg} rounded-2xl flex items-center justify-center mb-5`}>
                    {w.icon}
                  </div>
                  <h3 className="font-black text-gray-900 text-lg mb-2">{w.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{w.desc}</p>
                  {w.href && (
                    <Link href={w.href} className="text-xs font-black text-blue-600 hover:underline">
                      {w.cta}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOOKING TIPS ── */}
        <section aria-labelledby="tips-heading" className="py-16 px-6 bg-blue-950">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-blue-400 block mb-2">Expert Advice</span>
              <h2 id="tips-heading" className="text-3xl font-black text-white">
                How to Get the Cheapest Flights from Bangladesh
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {TIPS.map((t, i) => (
                <div key={t.tip} className="flex gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="w-8 h-8 bg-blue-500 rounded-xl flex items-center justify-center font-black text-white text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-black text-white text-sm mb-1">{t.tip}</h3>
                    <p className="text-xs text-blue-300 leading-relaxed">{t.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CHECKLIST ── */}
        <section aria-labelledby="checklist-heading" className="py-16 px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 id="checklist-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Before You Fly: International Travel Checklist
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Requirements vary by airline and country — treat this as a general guide and confirm the details for your trip.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {CHECKLIST.map((c) => (
                <li key={c} className="flex gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm text-gray-600 leading-relaxed">
                  <span aria-hidden="true" className="text-green-600 font-black">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-gray-500">
              Need help with documents? Try our{" "}
              <Link href="/travel-resources/visa-checklist-generator" className="text-blue-600 font-semibold hover:underline">
                visa checklist generator
              </Link>{" "}
              and{" "}
              <Link href="/travel-resources/travel-document-generator" className="text-blue-600 font-semibold hover:underline">
                travel document generator
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── BEST TIME TABLE ── */}
        <section aria-labelledby="season-heading" className="py-16 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 id="season-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Best Time to Book Cheap Air Tickets from Bangladesh
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              General fare trends for flights departing Dhaka. Exact prices vary by airline and route.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white">
              <table className="w-full text-sm text-left">
                <caption className="sr-only">Seasonal airfare trends from Bangladesh</caption>
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-4 py-3">Travel period</th>
                    <th scope="col" className="px-4 py-3">Fare level</th>
                    <th scope="col" className="px-4 py-3">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {SEASON_TABLE.map((s) => (
                    <tr key={s.period}>
                      <th scope="row" className="px-4 py-3 font-bold text-gray-800">{s.period}</th>
                      <td className="px-4 py-3 text-gray-700">{s.level}</td>
                      <td className="px-4 py-3 text-gray-500">{s.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── ALL SERVICES ── */}
        <section aria-labelledby="services-heading" className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 block mb-2">Complete Travel Agency</span>
              <h2 id="services-heading" className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                All Travel Services — Eammu Holidays
              </h2>
              <p className="text-gray-500 text-sm font-medium">
                Beyond flights — visa processing, tours, hotel booking, Umrah packages and more, all in one place.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {SERVICES.map((s) =>
                s.href ? (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md transition text-center group"
                  >
                    <span className="text-2xl" aria-hidden="true">{s.icon}</span>
                    <span className="text-xs font-black text-gray-700 group-hover:text-blue-700 leading-tight">{s.label}</span>
                  </Link>
                ) : (
                  <div
                    key={s.label}
                    className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center"
                  >
                    <span className="text-2xl" aria-hidden="true">{s.icon}</span>
                    <span className="text-xs font-black text-gray-600 leading-tight">{s.label}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq-heading" className="py-20 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 block mb-2">FAQs</span>
              <h2 id="faq-heading" className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                Frequently Asked Questions — Flight Booking Bangladesh
              </h2>
              <p className="text-gray-500 text-sm font-medium">
                Everything you need to know about booking cheap international flights from Bangladesh in 2026.
              </p>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((item) => (
                <div
                  key={item.q}
                  className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-blue-200 transition-all"
                >
                  <details className="group">
                    <summary className="w-full flex items-center justify-between p-5 text-left font-black text-gray-800 text-sm md:text-base cursor-pointer hover:text-blue-600 transition list-none">
                      <h3 className="text-sm md:text-base font-black">{item.q}</h3>
                      <span
                        aria-hidden="true"
                        className="ml-4 flex-shrink-0 w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-blue-600 font-black text-lg group-open:rotate-45 transition-transform"
                      >
                        +
                      </span>
                    </summary>
                    <div className="px-5 pb-5 pt-3 text-sm text-gray-500 leading-relaxed border-t border-gray-50">
                      <p>{item.a}</p>
                      {item.link && (
                        <p className="mt-2">
                          <Link href={item.link.href} className="text-blue-600 font-semibold hover:underline">
                            {item.link.label} →
                          </Link>
                        </p>
                      )}
                    </div>
                  </details>
                </div>
              ))}
            </div>

            <div className="text-center mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={waLink("Hi Eammu Holidays, I have a question about flight booking.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white font-black rounded-full hover:bg-[#1ebe5b] transition text-sm shadow-lg"
              >
                <MessageCircle size={18} /> Ask on WhatsApp
              </a>
              <Link
                href="/contact/travel-agency-bangladesh"
                className="inline-block px-8 py-3 bg-blue-600 text-white font-black rounded-full hover:bg-blue-700 transition text-sm shadow-lg"
              >
                Talk to a flight booking expert →
              </Link>
            </div>
          </div>
        </section>

        {/* ── SEO ARTICLE ── */}
        <section aria-labelledby="guide-heading" className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 id="guide-heading" className="text-2xl font-black text-gray-900 mb-6">
              Cheap Flight Booking from Bangladesh — Complete 2026 Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-500 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Eammu Holidays is an online travel agency for international flight booking from Bangladesh. We
                  compare airfares across Emirates, Qatar Airways, Turkish Airlines, Biman Bangladesh, US-Bangla, Fly
                  Dubai, Air Arabia, Singapore Airlines and 50+ carriers to help you find a low fare for your route —
                  whether you&apos;re flying to{" "}
                  <Link href="/our-services/visa/dubai-visa-application" className="text-blue-600 font-semibold hover:underline">Dubai</Link>,{" "}
                  <Link href="/visa/united-kingdom-visa" className="text-blue-600 font-semibold hover:underline">the UK</Link>,{" "}
                  <Link href="/visa/united-states-visa" className="text-blue-600 font-semibold hover:underline">the USA</Link>,{" "}
                  <Link href="/visa/canada-visa" className="text-blue-600 font-semibold hover:underline">Canada</Link>,{" "}
                  <Link href="/visa/malaysia-visa" className="text-blue-600 font-semibold hover:underline">Malaysia</Link>,{" "}
                  <Link href="/visa/thailand-visa" className="text-blue-600 font-semibold hover:underline">Thailand</Link>, or{" "}
                  <Link href="/visa/australia-visa" className="text-blue-600 font-semibold hover:underline">Australia</Link>.
                </p>
                <p>
                  The cheapest months to fly from Bangladesh are generally{" "}
                  <strong className="text-gray-700">January–February</strong> and{" "}
                  <strong className="text-gray-700">September–October</strong>. Avoid June–August and Ramadan/Eid
                  travel seasons, when fares can rise sharply. Mid-week departures (Tuesday, Wednesday) are usually
                  cheaper than weekends. Booking 6–8 weeks ahead is the sweet spot for Middle East routes and 10–16
                  weeks for USA and Canada.
                </p>
                <p>
                  We offer <strong className="text-gray-700">one-way, return, multi-city and group bookings</strong>{" "}
                  for 10+ passengers with negotiated group fares. Your e-ticket is issued after payment is confirmed.
                </p>
                <p>
                  Whether you are searching for an <strong className="text-gray-700">air ticket price from Dhaka to
                  Dubai</strong>, a cheap return ticket to Kuala Lumpur, or flights for Umrah, our advisors compare
                  schedules, baggage and fare rules so you can book with confidence.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  <strong className="text-gray-700">Combined flight and visa booking</strong> is our speciality. After
                  booking your flight, our visa consultancy team prepares your{" "}
                  <Link href="/visa" className="text-blue-600 font-semibold hover:underline">tourist visa</Link>,{" "}
                  <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-blue-600 font-semibold hover:underline">student visa</Link>, or{" "}
                  <Link href="/our-services/visa-services/work-visa-from-bangladesh" className="text-blue-600 font-semibold hover:underline">work visa</Link>{" "}
                  with embassy-accurate documents. Use our{" "}
                  <Link href="/travel-resources/visa-processing-time-tracker" className="text-blue-600 font-semibold hover:underline">
                    visa processing time tracker
                  </Link>{" "}
                  to check how long your visa may take before booking flights.
                </p>
                <p>
                  For <strong className="text-gray-700">Dubai and UAE residents</strong> flying to Bangladesh or
                  onward to third countries, our{" "}
                  <Link href="/visa/dubai-residents" className="text-blue-600 font-semibold hover:underline">
                    Dubai residents visa guide
                  </Link>{" "}
                  and{" "}
                  <Link href="/contact/travel-agency-dubai" className="text-blue-600 font-semibold hover:underline">
                    Dubai office
                  </Link>{" "}
                  provide specialist support. We also offer{" "}
                  <Link href="/our-services/tour-packages" className="text-blue-600 font-semibold hover:underline">
                    holiday tour packages
                  </Link>{" "}
                  combining flights, hotels and guided tours to Dubai, Thailand, Maldives, Turkey and Europe.
                </p>
                <p>
                  Students heading abroad can combine flights with{" "}
                  <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-blue-600 font-semibold hover:underline">
                    student visa guidance
                  </Link>
                  , while job seekers can pair tickets with{" "}
                  <Link href="/our-services/visa-services/work-visa-from-bangladesh" className="text-blue-600 font-semibold hover:underline">
                    work visa support
                  </Link>
                  . Families and groups can request special fares for weddings, pilgrimages and holidays.
                </p>
                <p>
                  Contact our{" "}
                  <Link href="/contact/travel-agency-bangladesh" className="text-blue-600 font-semibold hover:underline">
                    Cumilla Bangladesh office
                  </Link>{" "}
                  or{" "}
                  <Link href="/online-travel-agency-bangladesh" className="text-blue-600 font-semibold hover:underline">
                    book online
                  </Link>{" "}
                  for flight quotes, group fares or combined flight-and-visa packages. Read{" "}
                  <Link href="/testimonials" className="text-blue-600 font-semibold hover:underline">
                    what our travelers say
                  </Link>
                  .
                </p>
              </div>
            </div>

            <p className="mt-8 text-[11px] text-gray-400">
              Fares shown are indicative starting prices and may change without notice. Airline schedules, baggage
              rules and entry requirements change often — confirm details before travel. Last updated:{" "}
              <time dateTime={LAST_UPDATED}>{LAST_UPDATED}</time>.
            </p>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
                Related Services &amp; Resources
              </p>
              <div className="flex flex-wrap gap-2.5">
                {SEO_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs font-semibold text-gray-500 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <HomeSeoLinks />
    </>
  );
}