// app/flight-booking/page.jsx
// SERVER COMPONENT — metadata + structured data + full SEO content

import Link from "next/link";
import FlightSearch from "@/Components/Client/eammuGroupClient/FlightSearch/FlightSearch";
import {
  CheckCircle2,
  Plane,
  Clock,
  Shield,
  Star,
  MapPin,
  Users,
  Zap,
  TrendingDown,
  Globe,
  Phone,
  ChevronRight,
} from "lucide-react";
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://eammu.com"),

  title: {
    default:
      "Cheap Flight Booking from Bangladesh 2026 — International Air Tickets | Eammu Holidays",
    template: "%s | Eammu Holidays Flight Booking",
  },

  description:
    "Book cheap international flights from Bangladesh with Eammu Holidays. Compare airfares to Dubai, UK, USA, Canada, Saudi Arabia, Malaysia, Thailand, Australia & 200+ destinations. One-way, return & group tickets. Secure booking with expert travel support.",

  keywords: [
    // Primary
    "cheap flight booking Bangladesh",
    "international flight booking Bangladesh",
    "online flight booking Bangladesh 2026",
    "cheap air tickets Bangladesh",
    "flight tickets from Bangladesh",
    "best flight deals Bangladesh",
    // Route-specific
    "Dhaka to Dubai cheap flights",
    "Dhaka to London flights",
    "Bangladesh to UK air tickets",
    "Bangladesh to USA flights",
    "Bangladesh to Canada flights",
    "Dhaka to Kuala Lumpur flights",
    "Bangladesh to Saudi Arabia tickets",
    "Dhaka to Bangkok cheap flights",
    "Bangladesh to Australia flights",
    "Dhaka to Toronto flights",
    "Bangladesh to Qatar flights",
    "Dhaka to Singapore flights",
    "Bangladesh to Malaysia cheap tickets",
    "Dhaka to New York flights",
    // Type-specific
    "one way flight Bangladesh",
    "return flight Bangladesh",
    "group flight booking Bangladesh",
    "last minute flights Bangladesh",
    "cheap return tickets Dhaka",
    "discounted air tickets Bangladesh",
    // Brand + generic
    "Eammu Holidays flight booking",
    "travel agency flight Bangladesh",
    "online travel agency Bangladesh flights",
    "best airline deals Bangladesh 2026",
    // Dubai context
    "flights from Dubai to Bangladesh",
    "Dhaka Dubai air ticket price",
    "cheap Dubai tickets",
  ],

  alternates: {
    canonical: "https://eammu.com/flight-booking",
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
    url: "https://eammu.com/flight-booking",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title:
      "Cheap Flight Booking from Bangladesh 2026 — Compare & Book International Flights",
    description:
      "Compare cheap international flights from Bangladesh. Dubai, UK, USA, Canada, Malaysia, Saudi Arabia & 200+ routes. One-way, return & group bookings. Expert travel support.",
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
    title: "Cheap Flight Booking from Bangladesh 2026 | Eammu Holidays",
    description:
      "Book cheap international flights from Bangladesh. Compare airfares to Dubai, UK, USA, Canada & 200+ destinations.",
    images: ["/preview-banner.webp"],
  },

  icons: { icon: "/emf.jpg", apple: "/emf.jpg" },

  other: {
    "geo.region": "BD",
    "geo.placename": "Bangladesh",
    "geo.position": "23.6850;90.3563",
    "ICBM": "23.6850, 90.3563",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// ─────────────────────────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://eammu.com/#organization",
  name: "Eammu Holidays",
  url: "https://eammu.com",
  logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" },
  description:
    "Bangladesh's leading online travel agency offering cheap international flight booking, visa assistance, and holiday packages.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "3241",
    bestRating: "5",
  },
  address: [
    { "@type": "PostalAddress", addressLocality: "Cumilla", addressCountry: "BD" },
    { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://eammu.com/flight-booking/#webpage",
  url: "https://eammu.com/flight-booking",
  name: "Cheap Flight Booking from Bangladesh 2026 — International Air Tickets | Eammu Holidays",
  description:
    "Book cheap international flights from Bangladesh. Compare airfares to 200+ destinations.",
  inLanguage: "en-US",
  dateModified: new Date().toISOString().split("T")[0],
  isPartOf: { "@id": "https://eammu.com/#website" },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#flight-heading", "#faq-heading", "#routes-heading"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",          item: "https://eammu.com" },
    { "@type": "ListItem", position: 2, name: "Our Services",  item: "https://eammu.com/our-services" },
    { "@type": "ListItem", position: 3, name: "Flight Booking from Bangladesh 2026", item: "https://eammu.com/flight-booking" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://eammu.com/flight-booking/#service",
  serviceType: "Flight Booking Service",
  name: "Cheap International Flight Booking from Bangladesh",
  description:
    "Book cheap one-way, return, and group international flights from Bangladesh. Compare airfares to Dubai, UK, USA, Canada, Malaysia, Saudi Arabia, Thailand, Australia & 200+ destinations.",
  provider: { "@id": "https://eammu.com/#organization" },
  areaServed: { "@type": "Country", name: "Bangladesh" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "International Flight Routes from Bangladesh",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dhaka to Dubai Flights" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dhaka to London Flights" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bangladesh to USA Flights" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bangladesh to Canada Flights" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dhaka to Kuala Lumpur Flights" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bangladesh to Saudi Arabia Flights" } },
    ],
  },
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": "https://eammu.com/flight-booking/#app",
  name: "Eammu Holidays Flight Search",
  url: "https://eammu.com/flight-booking",
  applicationCategory: "TravelApplication",
  operatingSystem: "Web",
  description:
    "Free online flight search tool. Compare international airfares from Bangladesh — one-way, return, and group bookings.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "BDT" },
  provider: { "@id": "https://eammu.com/#organization" },
  featureList: [
    "Search one-way international flights from Bangladesh",
    "Compare return flight prices",
    "Group flight booking support",
    "Dhaka to Dubai, UK, USA, Canada airfare comparison",
    "Last-minute flight deals",
    "Secure online booking",
    "Expert travel consultant support",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I book cheap international flights from Bangladesh?",
      acceptedAnswer: { "@type": "Answer", text: "To book cheap flights from Bangladesh: (1) Search early — 6–8 weeks ahead for most routes. (2) Be flexible with dates — mid-week departures are typically cheaper. (3) Compare one-way vs return fares. (4) Watch for airline promotions and seasonal fare drops. Eammu Holidays compares fares across multiple airlines to find the lowest price for your route." },
    },
    {
      "@type": "Question",
      name: "Which airlines fly from Dhaka Bangladesh?",
      acceptedAnswer: { "@type": "Answer", text: "Major airlines flying from Hazrat Shahjalal International Airport (DAC) Dhaka include: Biman Bangladesh Airlines, Emirates, Qatar Airways, Etihad Airways, Singapore Airlines, Malaysian Airlines, Thai Airways, Turkish Airlines, Fly Dubai, Air Arabia, Saudi Airlines, and Gulf Air. Eammu Holidays searches across all carriers for the best fares." },
    },
    {
      "@type": "Question",
      name: "What is the cheapest route from Bangladesh to Dubai?",
      acceptedAnswer: { "@type": "Answer", text: "The cheapest Dhaka to Dubai flights are typically with Fly Dubai, Air Arabia, or Biman Bangladesh Airlines. Fares range from BDT 25,000 to 55,000 one-way depending on season. Direct flights take approximately 4 hours 30 minutes. Book 6–8 weeks ahead for best prices." },
    },
    {
      "@type": "Question",
      name: "How much does a flight from Bangladesh to UK cost?",
      acceptedAnswer: { "@type": "Answer", text: "Dhaka to London (Heathrow) flights typically cost BDT 75,000–150,000 one-way depending on airline, season, and booking time. Emirates, Qatar Airways, and Turkish Airlines offer competitive fares with one stopover. Direct routes are not available — typical journey times are 12–16 hours with one connection." },
    },
    {
      "@type": "Question",
      name: "Can I book flights and visa together with Eammu Holidays?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Eammu Holidays offers combined travel support — flight booking plus visa consultancy. After booking your flight, our visa team prepares your tourist visa, student visa, or work visa application with embassy-accurate documents. This ensures your flight and visa timelines align correctly." },
    },
    {
      "@type": "Question",
      name: "What is the cheapest time to fly from Bangladesh?",
      acceptedAnswer: { "@type": "Answer", text: "Cheapest months to fly from Bangladesh: January–February (post-Eid, low season), April–May (before summer peak), and September–October. Most expensive: June–August (summer), December (year-end), and Ramadan/Eid travel peaks. Mid-week flights (Tuesday, Wednesday) are consistently cheaper than Friday–Sunday." },
    },
    {
      "@type": "Question",
      name: "Does Eammu Holidays offer group flight booking?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Eammu Holidays provides group flight booking for 10+ passengers with negotiated group fares, flexible name-change policies, and dedicated booking support. Group bookings typically save 10–20% compared to individual ticket prices. Contact our office for a group fare quote." },
    },
    {
      "@type": "Question",
      name: "How early should I book international flights from Bangladesh?",
      acceptedAnswer: { "@type": "Answer", text: "For best prices: book 6–8 weeks ahead for Middle East routes (Dubai, Saudi Arabia, Qatar). Book 8–12 weeks ahead for UK, Europe, and Canada. Book 10–16 weeks ahead for USA flights. Last-minute deals (under 2 weeks) are occasionally available for Middle East routes but are rare for long-haul." },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STATIC DATA
// ─────────────────────────────────────────────────────────────────────────────

const POPULAR_ROUTES = [
  { from: "Dhaka", to: "Dubai",          code: "DAC→DXB", time: "4h 30m", price: "From BDT 28,000", airlines: "FlyDubai, Biman, Air Arabia", tag: "Most popular",  icon: "🇦🇪" },
  { from: "Dhaka", to: "London",         code: "DAC→LHR", time: "12–16h", price: "From BDT 75,000", airlines: "Emirates, Qatar, Turkish",     tag: "UK popular",     icon: "🇬🇧" },
  { from: "Dhaka", to: "Toronto",        code: "DAC→YYZ", time: "18–22h", price: "From BDT 95,000", airlines: "Qatar, Emirates, Air Canada",  tag: "Canada",         icon: "🇨🇦" },
  { from: "Dhaka", to: "New York",       code: "DAC→JFK", time: "18–22h", price: "From BDT 90,000", airlines: "Emirates, Qatar, United",      tag: "USA",            icon: "🇺🇸" },
  { from: "Dhaka", to: "Kuala Lumpur",   code: "DAC→KUL", time: "3h 45m", price: "From BDT 18,000", airlines: "MAS, Biman, AirAsia",          tag: "Best value",     icon: "🇲🇾" },
  { from: "Dhaka", to: "Jeddah",         code: "DAC→JED", time: "5h 30m", price: "From BDT 32,000", airlines: "Saudia, Biman, Flynas",        tag: "Hajj & Umrah",   icon: "🇸🇦" },
  { from: "Dhaka", to: "Bangkok",        code: "DAC→BKK", time: "2h 45m", price: "From BDT 15,000", airlines: "Thai, Biman, Bangkok Air",     tag: "Asia popular",   icon: "🇹🇭" },
  { from: "Dhaka", to: "Singapore",      code: "DAC→SIN", time: "4h 30m", price: "From BDT 22,000", airlines: "Singapore Air, Scoot",         tag: "Business hub",   icon: "🇸🇬" },
  { from: "Dhaka", to: "Sydney",         code: "DAC→SYD", time: "16–20h", price: "From BDT 110,000","airlines": "Emirates, Qatar, Qantas",    tag: "Australia",      icon: "🇦🇺" },
  { from: "Dhaka", to: "Doha",           code: "DAC→DOH", time: "4h",     price: "From BDT 20,000", airlines: "Qatar Airways, Biman",         tag: "Qatar Airways",  icon: "🇶🇦" },
  { from: "Dhaka", to: "Istanbul",       code: "DAC→IST", time: "9–11h",  price: "From BDT 48,000", airlines: "Turkish Airlines, Pegasus",    tag: "Europe transit", icon: "🇹🇷" },
  { from: "Dhaka", to: "Riyadh",         code: "DAC→RUH", time: "5h",     price: "From BDT 30,000", airlines: "Saudia, Flynas, Biman",        tag: "Work routes",    icon: "🇸🇦" },
];

const WHY_US = [
  {
    icon: <TrendingDown size={24} className="text-blue-600" />,
    bg: "bg-blue-50",
    title: "Lowest Fare Guarantee",
    desc: "We compare prices across all major airlines — Biman, Emirates, Qatar Airways, Turkish, Fly Dubai, Air Arabia and more — to find the cheapest fare for your route.",
  },
  {
    icon: <Shield size={24} className="text-green-600" />,
    bg: "bg-green-50",
    title: "Secure Online Booking",
    desc: "Fully encrypted booking process with instant e-ticket delivery. Your payment and personal details are protected at every step.",
  },
  {
    icon: <Clock size={24} className="text-amber-600" />,
    bg: "bg-amber-50",
    title: "24-Hour Expert Support",
    desc: "Our travel consultants are available around the clock for booking help, schedule changes, refunds, and last-minute assistance.",
  },
  {
    icon: <Plane size={24} className="text-purple-600" />,
    bg: "bg-purple-50",
    title: "All Flight Types",
    desc: "One-way, return, multi-city, group bookings, and last-minute fares — all handled by our expert team with group discounts available.",
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
    title: "Combined Flight + Visa",
    desc: "Book your flight and apply for your visa together. Our visa team ensures your travel documents align with your flight schedule.",
    href: "/visa",
    cta: "Explore visa services →",
  },
];

const AIRLINES = [
  { name: "Emirates",            code: "EK", routes: "Dhaka → Dubai, London, USA, Canada, Australia" },
  { name: "Qatar Airways",       code: "QR", routes: "Dhaka → Doha, London, USA, Canada, Europe, Australia" },
  { name: "Turkish Airlines",    code: "TK", routes: "Dhaka → Istanbul, London, Europe, Americas" },
  { name: "Biman Bangladesh",    code: "BG", routes: "Dhaka → London, Doha, Dubai, Singapore, Kuala Lumpur" },
  { name: "Fly Dubai",           code: "FZ", routes: "Dhaka → Dubai (direct, budget)" },
  { name: "Air Arabia",          code: "G9", routes: "Dhaka → Sharjah (Dubai area, budget)" },
  { name: "Singapore Airlines",  code: "SQ", routes: "Dhaka → Singapore, Australia, Europe, USA" },
  { name: "Malaysia Airlines",   code: "MH", routes: "Dhaka → Kuala Lumpur, London, Australia" },
  { name: "Thai Airways",        code: "TG", routes: "Dhaka → Bangkok, Europe, Australia" },
  { name: "Etihad Airways",      code: "EY", routes: "Dhaka → Abu Dhabi, Europe, USA, Australia" },
  { name: "Saudi Airlines",      code: "SV", routes: "Dhaka → Jeddah, Riyadh, Madinah" },
  { name: "Gulf Air",            code: "GF", routes: "Dhaka → Bahrain, Europe connections" },
];

const SERVICES = [
  { icon: "✈️", label: "Air Ticket Booking" },
  { icon: "🔄", label: "Return Flights" },
  { icon: "👥", label: "Group Booking" },
  { icon: "⚡", label: "Last-Minute Fares" },
  { icon: "🏨", label: "Hotel Reservation" },
  { icon: "🛂", label: "Tourist Visa Support",    href: "/visa" },
  { icon: "🎓", label: "Student Visa Guidance",   href: "/our-services/visa-services/student-visa-from-bangladesh" },
  { icon: "💼", label: "Work Visa Support",        href: "/our-services/visa-services/work-visa-from-bangladesh" },
  { icon: "🕌", label: "Umrah Packages" },
  { icon: "🏝️", label: "Holiday Tour Packages",   href: "/our-services/tour-packages" },
  { icon: "🎉", label: "Honeymoon Tours" },
  { icon: "📋", label: "Travel Document Help",    href: "/travel-resources/travel-document-generator" },
];

const TIPS = [
  { tip: "Book 6–8 weeks ahead", detail: "For Dubai, Saudi Arabia, and other Middle East routes for the best fares." },
  { tip: "Fly mid-week",         detail: "Tuesday and Wednesday departures are consistently cheaper than Friday–Sunday." },
  { tip: "Off-peak months",      detail: "January–February and September–October offer the lowest fares from Bangladesh." },
  { tip: "Flexible destination", detail: "Doha or Istanbul stopovers can reduce total fare vs direct routes." },
  { tip: "Group discounts",      detail: "Groups of 10+ passengers get negotiated group fares — 10–20% off individual prices." },
  { tip: "Return vs one-way",    detail: "Return tickets are often cheaper per leg than two one-way bookings — compare both." },
];

const FAQ_ITEMS = [
  {
    q: "How do I book cheap international flights from Bangladesh?",
    a: <>Book early (6–8 weeks ahead), compare airlines, be flexible with dates, and watch for promotional fares. Eammu Holidays compares fares across all major airlines automatically. Also consider combining your flight with <Link href="/visa" className="text-blue-600 font-semibold hover:underline">tourist visa services</Link> for a smoother trip.</>,
  },
  {
    q: "Which airlines fly from Dhaka Bangladesh?",
    a: "Major airlines from Dhaka (DAC) include Emirates, Qatar Airways, Biman Bangladesh, Turkish Airlines, Fly Dubai, Air Arabia, Singapore Airlines, Malaysian Airlines, Thai Airways, Etihad, Saudi Airlines, and Gulf Air. We search across all carriers for the best price.",
  },
  {
    q: "What is the cheapest route from Bangladesh to Dubai?",
    a: "Dhaka to Dubai is cheapest with Fly Dubai, Air Arabia, or Biman. Fares range BDT 25,000–55,000 one-way. Direct flights take ~4 hours 30 minutes. Book 6–8 weeks ahead for best prices.",
  },
  {
    q: "How much does a flight from Bangladesh to UK cost?",
    a: <>Dhaka to London Heathrow typically costs BDT 75,000–150,000 one-way. Emirates, Qatar Airways, and Turkish Airlines offer competitive fares with one stopover. No direct Dhaka–London routes exist — journey takes 12–16 hours. Combine your flight with a <Link href="/visa/united-kingdom-visa" className="text-blue-600 font-semibold hover:underline">UK Standard Visitor Visa</Link> application for smooth travel planning.</>,
  },
  {
    q: "Can I book flights and visa together with Eammu Holidays?",
    a: <>Yes. After booking your flight, our visa team prepares your <Link href="/visa" className="text-blue-600 font-semibold hover:underline">tourist visa</Link>, <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-blue-600 font-semibold hover:underline">student visa</Link>, or <Link href="/our-services/visa-services/work-visa-from-bangladesh" className="text-blue-600 font-semibold hover:underline">work visa</Link> with embassy-accurate documents, ensuring your flight and visa timelines align correctly.</>,
  },
  {
    q: "What is the cheapest time to fly from Bangladesh?",
    a: "Cheapest months: January–February and September–October. Most expensive: June–August (summer), December, Ramadan/Eid peaks. Mid-week departures (Tuesday, Wednesday) are consistently cheaper.",
  },
  {
    q: "Does Eammu Holidays offer group flight booking?",
    a: "Yes — group bookings for 10+ passengers with negotiated group fares, flexible name-change policies, and dedicated support. Groups typically save 10–20% vs individual ticket prices.",
  },
  {
    q: "How early should I book flights from Bangladesh?",
    a: "Middle East routes: 6–8 weeks ahead. UK and Europe: 8–12 weeks. USA and Canada: 10–16 weeks. Australia: 12–16 weeks.",
  },
];

const SEO_LINKS = [
  { label: "Tourist Visa from Bangladesh",           href: "/visa" },
  { label: "Dubai Tourist Visa",                     href: "/our-services/visa/dubai-visa-application" },
  { label: "UK Visitor Visa Bangladesh",             href: "/visa/united-kingdom-visa" },
  { label: "USA Tourist Visa Bangladesh",            href: "/visa/united-states-visa" },
  { label: "Canada Tourist Visa",                    href: "/visa/canada-visa" },
  { label: "Schengen Visa 2026",                     href: "/schengen-visa" },
  { label: "Malaysia Visa Bangladesh",               href: "/visa/malaysia-visa" },
  { label: "Thailand Tourist Visa",                  href: "/visa/thailand-visa" },
  { label: "Australia Tourist Visa",                 href: "/visa/australia-visa" },
  { label: "Japan Tourist Visa",                     href: "/visa/japan-visa" },
  { label: "Saudi Arabia Visa Bangladesh",           href: "/our-services/visa/saudi-arabia-visa-application" },
  { label: "Singapore Visa Bangladesh",              href: "/visa/singapore-visa" },
  { label: "Student Visa from Bangladesh",           href: "/our-services/visa-services/student-visa-from-bangladesh" },
  { label: "Work Visa from Bangladesh",              href: "/our-services/visa-services/work-visa-from-bangladesh" },
  { label: "Holiday Tour Packages",                  href: "/our-services/tour-packages" },
  { label: "Dubai Residents Visa Guide",             href: "/visa/dubai-residents" },
  { label: "E-Visa Destinations 2026",               href: "/visa/e-visa" },
  { label: "Visa Checklist Generator",               href: "/travel-resources/visa-checklist-generator" },
  { label: "Visa Processing Time Tracker",           href: "/travel-resources/visa-processing-time-tracker" },
  { label: "Visa Rejection Rates",                   href: "/visa-rejection" },
  { label: "IELTS & Immigration Center",             href: "/target-ielts-immigration-center" },
  { label: "USA Visa Interview Prep",                href: "/target-usa-visa-interview-preparation" },
  { label: "Contact Bangladesh Office",              href: "/contact/travel-agency-bangladesh" },
  { label: "Contact Dubai Office",                   href: "/contact/travel-agency-dubai" },
  { label: "Online Travel Agency Bangladesh",        href: "/online-travel-agency-bangladesh" },
  { label: "Client Testimonials",                    href: "/testimonials" },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function FlightBookingPage() {
  return (
    <>
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen bg-white font-sans ">

 

        {/* ── HERO + FLIGHT SEARCH ── */}
        <section
          className="relative bg-gradient-to-br  from-green-950 via-green-900 to-green-800 pt-16 pb-24 px-6 overflow-hidden"
          aria-labelledby="flight-heading"
        >
          {/* bg decoration */}
          <div className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full -translate-y-1/3 translate-x-1/3" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Badge */}
            <div className="flex justify-center mb-8 pt-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-white">
                  Live Flight Search — 200+ Destinations — Best Fares 2026
                </span>
              </div>
            </div>

            {/* H1 */}
            <h1
              id="flight-heading"
              className="text-4xl md:text-6xl font-black text-white text-center leading-tight tracking-tight mb-4"
            >
              Cheap Flight Booking<br />
              <span className="text-blue-300">from Bangladesh</span>
            </h1>
            <p className="text-blue-200 text-center text-base md:text-lg max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
              Compare international airfares across{" "}
              <strong className="text-white">Emirates, Qatar Airways, Turkish, Biman & 50+ airlines</strong>.
              One-way, return & group tickets to{" "}
              <strong className="text-white">Dubai, London, USA, Canada, Malaysia & 200+ destinations</strong>.
            </p>

            {/* quick route pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {["✈ Dubai", "✈ London", "✈ Toronto", "✈ New York", "✈ Kuala Lumpur", "✈ Bangkok", "✈ Jeddah", "✈ Singapore"].map(r => (
                <span key={r} className="text-xs font-bold text-blue-200 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
                  {r}
                </span>
              ))}
            </div>

            {/* Flight search client island */}
            <div className="bg-white rounded-3xl shadow-2xl p-2">
              <FlightSearch />
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 text-xs font-bold text-blue-200">
              {["🔒 Secure Booking", "⚡ Instant E-Ticket", "✅ Best Price Guarantee", "👥 Group Discounts Available", "📞 24/7 Support"].map(b => (
                <span key={b}>{b}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section className="bg-blue-600 py-6 px-6" aria-label="Flight booking statistics">
          <div className="max-w-7xl mx-auto">
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { val: "1,00,000+", label: "Tickets Booked" },
                { val: "200+",      label: "Destinations" },
                { val: "50+",       label: "Airlines" },
                { val: "24/7",      label: "Support" },
              ].map(s => (
                <div key={s.label}>
                  <dt className="text-2xl md:text-3xl font-black text-white">{s.val}</dt>
                  <dd className="text-xs font-bold text-blue-200 uppercase tracking-wider mt-0.5">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── POPULAR ROUTES ── */}
        <section aria-labelledby="routes-heading" className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 block mb-2">🔥 Most Booked</span>
              <h2 id="routes-heading" className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-2">
                Popular International Flight Routes from Bangladesh
              </h2>
              <p className="text-gray-500 text-sm font-medium max-w-2xl">
                Cheapest airfares and fastest routes from Dhaka (DAC) to top international destinations in 2026.
                After booking, add{" "}
                <Link href="/visa" className="text-blue-600 font-semibold hover:underline">
                  tourist visa assistance
                </Link>{" "}
                for complete trip planning.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {POPULAR_ROUTES.map((r, i) => (
                <article
                  key={i}
                  className="bg-white rounded-2xl border-2 border-gray-100 p-5 hover:border-blue-400 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{r.icon}</span>
                      <div>
                        <h3 className="font-black text-gray-800 text-sm leading-tight">
                          {r.from} → {r.to}
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
                  <button className="w-full text-xs font-black text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-xl transition">
                    Search {r.to} flights →
                  </button>
                </article>
              ))}
            </div>
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
                We compare fares across every major carrier flying from Dhaka — so you always get the lowest price.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {AIRLINES.map((a, i) => (
                <div
                  key={i}
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

        {/* ── WHY US ── */}
        <section aria-labelledby="why-heading" className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 block mb-2">
                Why 1,00,000+ Travelers Choose Us
              </span>
              <h2 id="why-heading" className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                Bangladesh&apos;s Most Trusted Flight Booking Agency
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
                We don&apos;t just search flights — we support your entire trip from booking to arrival.
                Read our{" "}
                <Link href="/testimonials" className="text-blue-600 font-semibold hover:underline">
                  client testimonials
                </Link>
                .
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_US.map((w, i) => (
                <div
                  key={i}
                  className="p-7 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-lg transition-all"
                >
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
                How to Get Cheapest Flights from Bangladesh
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {TIPS.map((t, i) => (
                <div key={i} className="flex gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
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

        {/* ── ALL SERVICES ── */}
        <section aria-labelledby="services-heading" className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 block mb-2">Complete Travel Agency</span>
              <h2 id="services-heading" className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                All Travel Services — Eammu Holidays Bangladesh
              </h2>
              <p className="text-gray-500 text-sm font-medium">
                Beyond flights — visa processing, tours, hotel booking, Umrah packages and more. Everything for
                Bangladeshi travelers in one place.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {SERVICES.map((s, i) =>
                s.href ? (
                  <Link
                    key={i}
                    href={s.href}
                    className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md transition text-center group"
                  >
                    <span className="text-2xl">{s.icon}</span>
                    <span className="text-xs font-black text-gray-700 group-hover:text-blue-700 leading-tight">{s.label}</span>
                  </Link>
                ) : (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center"
                  >
                    <span className="text-2xl">{s.icon}</span>
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
            <dl className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-blue-200 transition-all"
                  itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
                >
                  <details className="group">
                    <summary
                      className="w-full flex items-center justify-between p-5 text-left font-black text-gray-800 text-sm md:text-base cursor-pointer hover:text-blue-600 transition list-none"
                      itemProp="name"
                    >
                      {item.q}
                      <span className="ml-4 flex-shrink-0 w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-blue-600 font-black text-lg group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <dd
                      className="px-5 pb-5 pt-3 text-sm text-gray-500 leading-relaxed border-t border-gray-50"
                      itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
                    >
                      <span itemProp="text">{item.a}</span>
                    </dd>
                  </details>
                </div>
              ))}
            </dl>
            <div className="text-center mt-10">
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
                  Eammu Holidays is Bangladesh&apos;s leading online travel agency for international flight booking.
                  We compare airfares across Emirates, Qatar Airways, Turkish Airlines, Biman Bangladesh, Fly Dubai,
                  Air Arabia, Singapore Airlines, and 50+ carriers to find the lowest fare for your route —
                  whether you&apos;re flying to{" "}
                  <Link href="/our-services/visa/dubai-visa-application" className="text-blue-600 font-semibold hover:underline">Dubai</Link>,{" "}
                  <Link href="/visa/united-kingdom-visa" className="text-blue-600 font-semibold hover:underline">UK</Link>,{" "}
                  <Link href="/visa/united-states-visa" className="text-blue-600 font-semibold hover:underline">USA</Link>,{" "}
                  <Link href="/visa/canada-visa" className="text-blue-600 font-semibold hover:underline">Canada</Link>,{" "}
                  <Link href="/visa/malaysia-visa" className="text-blue-600 font-semibold hover:underline">Malaysia</Link>,{" "}
                  <Link href="/visa/thailand-visa" className="text-blue-600 font-semibold hover:underline">Thailand</Link>, or{" "}
                  <Link href="/visa/australia-visa" className="text-blue-600 font-semibold hover:underline">Australia</Link>.
                </p>
                <p>
                  The cheapest months to fly from Bangladesh are <strong className="text-gray-700">January–February</strong>{" "}
                  and <strong className="text-gray-700">September–October</strong>. Avoid June–August summer peaks and
                  Ramadan/Eid travel seasons when fares jump 40–70%. Mid-week departures (Tuesday, Wednesday) are
                  consistently cheaper than weekends. Booking 6–8 weeks ahead is the sweet spot for Middle East
                  routes; 10–16 weeks for USA and Canada.
                </p>
                <p>
                  We offer <strong className="text-gray-700">one-way, return, multi-city, and group bookings</strong>{" "}
                  for 10+ passengers with negotiated group fares. Our instant e-ticket delivery means your booking
                  is confirmed the moment payment processes — no waiting.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  <strong className="text-gray-700">Combined flight and visa booking</strong> is our speciality.
                  After booking your flight, our visa consultancy team prepares your{" "}
                  <Link href="/visa" className="text-blue-600 font-semibold hover:underline">tourist visa</Link>,{" "}
                  <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-blue-600 font-semibold hover:underline">student visa</Link>, or{" "}
                  <Link href="/our-services/visa-services/work-visa-from-bangladesh" className="text-blue-600 font-semibold hover:underline">work visa</Link>{" "}
                  with embassy-accurate documents — ensuring your flight timeline and visa approval align correctly.
                  Use our{" "}
                  <Link href="/travel-resources/visa-processing-time-tracker" className="text-blue-600 font-semibold hover:underline">
                    visa processing time tracker
                  </Link>{" "}
                  to check how long your visa will take before booking flights.
                </p>
                <p>
                  For <strong className="text-gray-700">Dubai and UAE residents</strong> flying back to Bangladesh
                  or onward to third countries, our{" "}
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
                  combining flights, hotels, and guided tours to Dubai, Thailand, Maldives, Turkey, and Europe.
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
                  for flight quotes, group fare negotiations, or combined flight-and-visa packages.
                  Read{" "}
                  <Link href="/testimonials" className="text-blue-600 font-semibold hover:underline">
                    what our travelers say
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Internal link mesh */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
                Related Services &amp; Resources
              </p>
              <div className="flex flex-wrap gap-2.5">
                {SEO_LINKS.map(link => (
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
       {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
          <ol className="max-w-7xl mx-auto px-6 py-2.5 flex items-center gap-2 text-xs text-gray-400"
            itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" className="hover:text-blue-600 font-medium transition" itemProp="item">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-gray-200">›</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/our-services" className="hover:text-blue-600 font-medium transition" itemProp="item">
                <span itemProp="name">Our Services</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <li className="text-gray-200">›</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"
              className="font-semibold text-gray-600">
              <span itemProp="name">Flight Booking Bangladesh 2026</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>
      </main>
      <HomeSeoLinks />
    </>
  );
}