// app/travel-insurance/page.jsx
// ✅ FULL SERVER COMPONENT — no "use client"
// Targets every travel insurance search query from Bangladesh & Dubai

import Link from "next/link";
import {
  Shield,
  CheckCircle2,
  AlertCircle,
  Clock,
  Globe,
  Heart,
  Plane,
  Luggage,
  Phone,
  FileText,
  Star,
  ChevronRight,
  BadgeCheck,
  Stethoscope,
  CircleDollarSign,
  Umbrella,
} from "lucide-react";


// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Travel Insurance Bangladesh 2026 — Best Plans for International Travel | Eammu Holidays",
    template: "%s | Eammu Holidays Travel Insurance",
  },

  description:
    "Get the best travel insurance from Bangladesh for 2026. Compare medical, trip cancellation, baggage loss, flight delay & Schengen travel insurance plans for USA, UK, Canada, Europe, Dubai & worldwide travel. Instant coverage, 24/7 emergency support.",

  keywords: [
    // Primary
    "travel insurance Bangladesh",
    "travel insurance Bangladesh 2026",
    "best travel insurance Bangladesh",
    "international travel insurance Bangladesh",
    "cheap travel insurance Bangladesh",
    "travel insurance policy Bangladesh",
    // Type specific
    "medical travel insurance Bangladesh",
    "Schengen travel insurance Bangladesh",
    "Schengen visa insurance 2026",
    "trip cancellation insurance Bangladesh",
    "baggage loss insurance travel",
    "flight delay insurance Bangladesh",
    "emergency medical insurance travel",
    "travel accident insurance Bangladesh",
    // Destination specific
    "travel insurance for USA from Bangladesh",
    "travel insurance for UK Bangladesh",
    "travel insurance for Europe Bangladesh",
    "travel insurance for Dubai",
    "travel insurance for Canada Bangladesh",
    "travel insurance for Japan Bangladesh",
    "travel insurance for Australia Bangladesh",
    "travel insurance for Malaysia Bangladesh",
    "travel insurance for Schengen area",
    // Intent queries
    "buy travel insurance online Bangladesh",
    "travel insurance for visa application",
    "travel insurance required for Schengen",
    "travel insurance certificate Bangladesh",
    "annual travel insurance Bangladesh",
    "single trip travel insurance Bangladesh",
    "family travel insurance Bangladesh",
    "senior travel insurance Bangladesh",
    "student travel insurance Bangladesh",
    "travel insurance Dubai residents",
    "how much is travel insurance Bangladesh",
  ],

  alternates: {
    canonical: "https://www.eammu.com/travel-insurance",
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
    url: "https://www.eammu.com/travel-insurance",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title:
      "Travel Insurance Bangladesh 2026 — Medical, Schengen & Trip Cancellation Plans",
    description:
      "Compare and buy travel insurance from Bangladesh. Medical emergencies, trip cancellation, baggage loss & Schengen coverage. Instant policy. 24/7 worldwide assistance.",
    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Travel insurance Bangladesh 2026 — Eammu Holidays",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@EammuHolidays",
    title: "Travel Insurance Bangladesh 2026 | Eammu Holidays",
    description:
      "Best travel insurance plans from Bangladesh. Medical, Schengen, trip cancellation & baggage coverage. Instant policy, 24/7 support.",
    images: ["/eammu_banner_four.webp"],
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
// STRUCTURED DATA — 7 schemas
// ─────────────────────────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://www.eammu.com/#organization",
  name: "Eammu Holidays",
  url: "https://www.eammu.com",
  logo: { "@type": "ImageObject", url: "https://www.eammu.com/emf.jpg" },
  description:
    "Bangladesh's leading travel agency offering travel insurance, visa consultancy, flight booking, and tour packages.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "3241",
    bestRating: "5",
  },
  address: [
    { "@type": "PostalAddress", addressLocality: "Cumilla", addressCountry: "BD" },
    { "@type": "PostalAddress", addressLocality: "Dubai",   addressCountry: "AE" },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.eammu.com/travel-insurance/#webpage",
  url: "https://www.eammu.com/travel-insurance",
  name: "Travel Insurance Bangladesh 2026 — Best Plans for International Travel | Eammu Holidays",
  description:
    "Compare and buy travel insurance from Bangladesh. Medical emergencies, Schengen coverage, trip cancellation, baggage loss & more.",
  inLanguage: "en-US",
  dateModified: new Date().toISOString().split("T")[0],
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#insurance-heading", "#faq-heading", "#plans-heading"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",          item: "https://www.eammu.com" },
    { "@type": "ListItem", position: 2, name: "Our Services",  item: "https://www.eammu.com/our-services" },
    { "@type": "ListItem", position: 3, name: "Travel Insurance Bangladesh 2026", item: "https://www.eammu.com/travel-insurance" },
  ],
};

const insuranceServiceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": "https://www.eammu.com/travel-insurance/#agency",
  name: "Eammu Holidays Travel Insurance",
  url: "https://www.eammu.com/travel-insurance",
  description:
    "Travel insurance plans for Bangladeshi travelers — medical emergency, Schengen visa insurance, trip cancellation, baggage loss, and annual multi-trip coverage.",
  provider: { "@id": "https://www.eammu.com/#organization" },
  areaServed: { "@type": "Country", name: "Bangladesh" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Travel Insurance Plans Bangladesh 2026",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Single Trip Travel Insurance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Annual Multi-Trip Travel Insurance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Schengen Visa Travel Insurance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medical Emergency Travel Insurance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Family Travel Insurance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Student Travel Insurance" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is travel insurance mandatory for a Schengen visa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Travel insurance is a mandatory requirement for a Schengen visa application. The policy must cover medical expenses of at least €30,000 and be valid for all Schengen area countries for the entire duration of your stay. It must include emergency medical evacuation and repatriation. Eammu Holidays provides Schengen-compliant travel insurance certificates accepted by all embassies.",
      },
    },
    {
      "@type": "Question",
      name: "How much does travel insurance cost from Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Travel insurance from Bangladesh typically costs BDT 1,500–5,000 for a single trip (7–30 days) depending on destination, coverage amount, and your age. Schengen-specific plans start from BDT 2,000. Annual multi-trip plans start from BDT 8,000–15,000. Medical coverage of USD 100,000 is recommended for USA and Canada travel.",
      },
    },
    {
      "@type": "Question",
      name: "What does travel insurance cover for Bangladeshi travelers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard travel insurance for Bangladeshi travelers covers: (1) Emergency medical expenses — hospitalization, surgery, medicine. (2) Medical evacuation and repatriation. (3) Trip cancellation or interruption. (4) Baggage loss, theft, or damage. (5) Flight delay compensation. (6) Accidental death and disability. (7) 24/7 worldwide emergency assistance. Premium plans also cover adventure sports, pre-existing conditions, and rental car damage.",
      },
    },
    {
      "@type": "Question",
      name: "Which countries require travel insurance from Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Countries that mandatorily require travel insurance for a visa from Bangladesh: All 29 Schengen Area countries (Germany, France, Italy, Spain, Netherlands, etc.) — minimum €30,000 medical coverage required. Cuba requires travel insurance for all visitors. Some travel insurance is strongly recommended (though not always mandatory) for USA, UK, Canada, Australia, and Japan due to high medical costs.",
      },
    },
    {
      "@type": "Question",
      name: "Can I buy travel insurance after buying my flight ticket?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can buy travel insurance any time before your departure date. However, trip cancellation coverage only applies to events that occur after the policy purchase date — so buying insurance as soon as you book your flight gives you the most protection. For Schengen visa applications, you must purchase insurance before submitting your visa application.",
      },
    },
    {
      "@type": "Question",
      name: "Does travel insurance cover pre-existing medical conditions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard travel insurance plans from Bangladesh typically do not cover pre-existing medical conditions. However, some premium plans offer limited coverage for stable pre-existing conditions that have not required treatment in the past 12–24 months. Always declare pre-existing conditions at the time of purchase to ensure your policy is valid.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum travel insurance coverage for a Schengen visa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a Schengen visa, travel insurance must: (1) Cover minimum €30,000 in medical expenses. (2) Be valid in all 29 Schengen countries. (3) Cover the entire duration of your stay plus 15 days buffer recommended. (4) Include emergency medical evacuation and repatriation to Bangladesh. (5) Be issued by a recognized insurer. Eammu Holidays provides Schengen-compliant certificates accepted by German, French, Italian, and all Schengen embassies.",
      },
    },
    {
      "@type": "Question",
      name: "How do I make a travel insurance claim from abroad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To make a travel insurance claim: (1) Contact the 24/7 emergency assistance number on your policy immediately. (2) Get all medical reports, receipts, and official documents. (3) File the claim within the timeframe specified in your policy (typically 30–90 days after the incident). (4) Submit claim form with supporting documents — medical bills, police report for theft, airline delay certificate for flight delays. (5) Claims for medical emergencies abroad should be reported before treatment where possible.",
      },
    },
    {
      "@type": "Question",
      name: "Is travel insurance available for Dubai residents traveling from UAE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Eammu Holidays provides travel insurance for Bangladeshi expats and other UAE residents traveling from Dubai to third countries. Coverage includes medical emergencies, trip cancellation, baggage loss, and Schengen-compliant certificates for UAE residents applying for European visas from Dubai.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Buy Travel Insurance from Bangladesh",
  description: "Step-by-step guide to purchasing travel insurance from Bangladesh for international travel.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Choose your destination and travel dates", text: "Your destination determines the required coverage level. Schengen travel requires minimum €30,000. USA and Canada require at least USD 100,000 medical coverage.", url: "https://www.eammu.com/travel-insurance" },
    { "@type": "HowToStep", position: 2, name: "Select your insurance plan type", text: "Choose single trip (one journey), annual multi-trip (multiple trips per year), or Schengen-specific insurance. Consider your age, pre-existing conditions, and activities planned." },
    { "@type": "HowToStep", position: 3, name: "Compare coverage and premium", text: "Compare medical coverage limits, trip cancellation amounts, baggage limits, and excess/deductible amounts. Higher coverage = higher premium but better protection." },
    { "@type": "HowToStep", position: 4, name: "Purchase and receive your certificate", text: "Complete the purchase with traveler details. Receive your insurance certificate instantly — required for Schengen visa applications and some other visa types." },
    { "@type": "HowToStep", position: 5, name: "Travel with confidence", text: "Keep your insurance certificate, emergency contact number, and policy number accessible throughout your trip. Save the 24/7 assistance number in your phone." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STATIC DATA
// ─────────────────────────────────────────────────────────────────────────────

const PLANS = [
  {
    name: "Basic Plan",
    badge: null,
    priceRange: "From BDT 1,500",
    duration: "Single Trip — up to 30 days",
    color: "border-gray-200",
    headerBg: "bg-gray-50",
    btnStyle: "bg-gray-800 text-white hover:bg-gray-900",
    coverage: [
      { label: "Medical Emergency",       value: "USD 50,000",   included: true },
      { label: "Medical Evacuation",       value: "Included",     included: true },
      { label: "Trip Cancellation",        value: "USD 2,000",    included: true },
      { label: "Baggage Loss",             value: "USD 1,000",    included: true },
      { label: "Flight Delay",             value: "USD 200",      included: true },
      { label: "Accidental Death",         value: "USD 25,000",   included: true },
      { label: "Pre-existing Conditions",  value: "Not covered",  included: false },
      { label: "Adventure Sports",         value: "Not covered",  included: false },
      { label: "Rental Car Damage",        value: "Not covered",  included: false },
    ],
    ideal: "Short leisure trips to Asia & Middle East",
  },
  {
    name: "Schengen Plan",
    badge: "Embassy Accepted",
    priceRange: "From BDT 2,000",
    duration: "Single Trip — up to 90 days",
    color: "border-blue-400",
    headerBg: "bg-blue-600",
    btnStyle: "bg-blue-600 text-white hover:bg-blue-700",
    coverage: [
      { label: "Medical Emergency",       value: "€30,000+",     included: true },
      { label: "Medical Evacuation",       value: "Included",     included: true },
      { label: "Trip Cancellation",        value: "USD 3,000",    included: true },
      { label: "Baggage Loss",             value: "USD 1,500",    included: true },
      { label: "Flight Delay",             value: "USD 300",      included: true },
      { label: "Accidental Death",         value: "USD 50,000",   included: true },
      { label: "All Schengen Countries",   value: "29 countries", included: true },
      { label: "Pre-existing Conditions",  value: "Not covered",  included: false },
      { label: "Adventure Sports",         value: "Not covered",  included: false },
    ],
    ideal: "Europe & Schengen visa applicants — embassy-compliant certificate",
  },
  {
    name: "Premium Plan",
    badge: "Best Value",
    priceRange: "From BDT 4,500",
    duration: "Single Trip or Annual Multi-Trip",
    color: "border-green-500",
    headerBg: "bg-[#005a31]",
    btnStyle: "bg-[#005a31] text-white hover:bg-[#004d2c]",
    coverage: [
      { label: "Medical Emergency",       value: "USD 100,000",  included: true },
      { label: "Medical Evacuation",       value: "Included",     included: true },
      { label: "Trip Cancellation",        value: "USD 10,000",   included: true },
      { label: "Baggage Loss",             value: "USD 3,000",    included: true },
      { label: "Flight Delay",             value: "USD 500",      included: true },
      { label: "Accidental Death",         value: "USD 100,000",  included: true },
      { label: "Pre-existing Conditions",  value: "Limited",      included: true },
      { label: "Adventure Sports",         value: "Included",     included: true },
      { label: "Rental Car Damage",        value: "USD 5,000",    included: true },
    ],
    ideal: "USA, Canada, Australia, UK — high-cost medical destinations",
  },
];

const COVERAGE_TYPES = [
  {
    icon: <Stethoscope size={22} className="text-white" />,
    bg: "bg-red-500",
    title: "Emergency Medical Expenses",
    desc: "Covers hospitalization, surgery, doctor fees, prescription medicine, and emergency dental treatment abroad. The most critical coverage — medical bills abroad can reach USD 50,000–500,000.",
    coverage: "USD 50,000–100,000",
  },
  {
    icon: <Plane size={22} className="text-white" />,
    bg: "bg-blue-600",
    title: "Medical Evacuation & Repatriation",
    desc: "Emergency medical evacuation by air ambulance to the nearest adequate hospital, or repatriation back to Bangladesh if required. Can cost USD 20,000–100,000 without coverage.",
    coverage: "Unlimited in premium plans",
  },
  {
    icon: <CircleDollarSign size={22} className="text-white" />,
    bg: "bg-amber-500",
    title: "Trip Cancellation & Interruption",
    desc: "Reimburses prepaid, non-refundable trip costs if you must cancel or cut short your trip due to illness, injury, bereavement, or other covered reasons.",
    coverage: "Up to USD 10,000",
  },
  {
    icon: <Luggage size={22} className="text-white" />,
    bg: "bg-purple-600",
    title: "Baggage Loss & Theft",
    desc: "Compensation for lost, stolen, or damaged baggage and personal belongings. Covers electronics, clothing, travel documents, and passport replacement costs.",
    coverage: "Up to USD 3,000",
  },
  {
    icon: <Clock size={22} className="text-white" />,
    bg: "bg-orange-500",
    title: "Flight Delay Compensation",
    desc: "Daily allowance for meals, accommodation, and essentials if your flight is delayed more than 6–12 hours due to airline issues, weather, or mechanical failure.",
    coverage: "USD 200–500 per delay",
  },
  {
    icon: <Shield size={22} className="text-white" />,
    bg: "bg-[#005a31]",
    title: "Accidental Death & Disability",
    desc: "Lump-sum payment to your family in the event of accidental death during your trip, or to you in case of permanent disability resulting from a travel accident.",
    coverage: "Up to USD 100,000",
  },
  {
    icon: <Phone size={22} className="text-white" />,
    bg: "bg-pink-600",
    title: "24/7 Emergency Assistance",
    desc: "Round-the-clock emergency helpline for medical referrals, emergency cash transfer coordination, legal assistance, and travel crisis support — wherever you are in the world.",
    coverage: "Included in all plans",
  },
  {
    icon: <Heart size={22} className="text-white" />,
    bg: "bg-rose-700",
    title: "Pre-existing Conditions",
    desc: "Premium plans offer limited coverage for stable pre-existing medical conditions not treated in the past 12 months. Must be declared at purchase. Basic plans exclude pre-existing conditions.",
    coverage: "Premium plans only",
  },
];

const DESTINATION_REQUIREMENTS = [
  {
    flag: "🇪🇺",
    region: "Schengen Area (29 countries)",
    mandatory: true,
    minCoverage: "€30,000 medical",
    notes: "Embassy-compliant certificate required for visa application. Must cover all Schengen countries.",
    visaHref: "/schengen-visa",
    visaLabel: "Schengen visa guide →",
  },
  {
    flag: "🇺🇸",
    region: "United States",
    mandatory: false,
    minCoverage: "USD 100,000+ recommended",
    notes: "Not mandatory but strongly recommended. US medical costs average USD 2,000–5,000/day. Without insurance, a single hospitalization can cost USD 50,000–500,000.",
    visaHref: "/visa/united-states-visa",
    visaLabel: "USA visa guide →",
  },
  {
    flag: "🇬🇧",
    region: "United Kingdom",
    mandatory: false,
    minCoverage: "USD 50,000+ recommended",
    notes: "Not mandatory but strongly recommended. NHS is not free for non-UK residents — full treatment costs apply.",
    visaHref: "/visa/united-kingdom-visa",
    visaLabel: "UK visa guide →",
  },
  {
    flag: "🇨🇦",
    region: "Canada",
    mandatory: false,
    minCoverage: "USD 100,000+ recommended",
    notes: "Provincial health insurance not available to tourists. Medical bills can be extremely high.",
    visaHref: "/visa/canada-visa",
    visaLabel: "Canada visa guide →",
  },
  {
    flag: "🇦🇺",
    region: "Australia",
    mandatory: false,
    minCoverage: "USD 50,000+ recommended",
    notes: "Medicare not available to tourists except from reciprocal agreement countries. Bangladesh does not have a reciprocal agreement.",
    visaHref: "/visa/australia-visa",
    visaLabel: "Australia visa guide →",
  },
  {
    flag: "🇯🇵",
    region: "Japan",
    mandatory: false,
    minCoverage: "USD 50,000 recommended",
    notes: "Japan is generally safe but medical costs are moderate-high. Travel insurance recommended for all visitors.",
    visaHref: "/visa/japan-visa",
    visaLabel: "Japan visa guide →",
  },
  {
    flag: "🇦🇪",
    region: "Dubai / UAE",
    mandatory: false,
    minCoverage: "USD 50,000 recommended",
    notes: "UAE medical costs are high. Travel insurance strongly recommended for tourist visitors.",
    visaHref: "/our-services/visa/dubai-visa-application",
    visaLabel: "Dubai visa guide →",
  },
  {
    flag: "🇨🇺",
    region: "Cuba",
    mandatory: true,
    minCoverage: "Medical coverage required",
    notes: "Cuba requires proof of travel insurance for all visitors. Must be presented on arrival.",
    visaHref: "/visa",
    visaLabel: "Browse visa guides →",
  },
];

const PLAN_TYPES = [
  {
    icon: "🗓️",
    title: "Single Trip Insurance",
    desc: "Covers one journey from departure to return. Best for travelers who take 1–2 international trips per year. Most affordable option for a specific trip.",
    best: "Best for: Occasional travelers",
  },
  {
    icon: "🔄",
    title: "Annual Multi-Trip Insurance",
    desc: "Covers all international trips within a 12-month period — typically up to 30–45 days per trip. Saves money if you travel 3+ times per year.",
    best: "Best for: Frequent travelers, business travelers",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Travel Insurance",
    desc: "One policy covers the entire family traveling together — typically 2 adults + children under 18. More economical than individual policies for each family member.",
    best: "Best for: Family holidays",
  },
  {
    icon: "🎓",
    title: "Student Travel Insurance",
    desc: "Specialized coverage for students studying abroad. Includes medical, tuition fee protection, and mental health support. Valid for study visa durations.",
    best: "Best for: Students on study visas",
    linkHref: "/our-services/visa-services/student-visa-from-bangladesh",
    linkLabel: "Student visa from Bangladesh →",
  },
  {
    icon: "👴",
    title: "Senior Travel Insurance",
    desc: "Designed for travelers over 60–65 with higher medical coverage limits and pre-existing condition accommodation. Age-specific premiums apply.",
    best: "Best for: Travelers aged 60+",
  },
  {
    icon: "🧗",
    title: "Adventure Sports Insurance",
    desc: "Covers high-risk activities — trekking, skiing, scuba diving, bungee jumping, paragliding. Standard plans exclude these activities.",
    best: "Best for: Adventure travelers",
  },
];

const TESTIMONIALS = [
  {
    name: "Md. Farhan Hossain",
    trip: "Germany (Schengen Visa)",
    text: "Eammu got my Schengen travel insurance certificate in 24 hours. The German embassy accepted it without any issue. The price was very reasonable compared to buying direct from insurers.",
    stars: 5,
  },
  {
    name: "Tahmina Sultana",
    trip: "USA — Medical Emergency",
    text: "I had a sudden illness in New York. The insurance covered $12,000 in hospital bills fully. The 24/7 helpline was excellent — they coordinated everything with the hospital directly.",
    stars: 5,
  },
  {
    name: "Arif Khan",
    trip: "UK Family Holiday",
    text: "Our family policy covered all 4 of us for the entire UK trip. Baggage was delayed 2 days and we got compensation for essentials. Excellent value for a family plan.",
    stars: 5,
  },
  {
    name: "Nadia Rahman",
    trip: "Japan — Baggage Theft",
    text: "My bag was stolen in Tokyo. Filed the claim online, got reimbursed within 2 weeks. The process was simple and the insurance team was responsive. Highly recommend.",
    stars: 5,
  },
];

const FAQ_ITEMS = [
  {
    q: "Is travel insurance mandatory for a Schengen visa?",
    a: <>Yes. Schengen travel insurance is a <strong>mandatory</strong> visa requirement covering minimum <strong>€30,000 in medical expenses</strong>, valid for all 29 Schengen countries for your entire stay. Eammu Holidays provides embassy-accepted certificates instantly. See our full <Link href="/schengen-visa" className="text-[#005a31] font-semibold hover:underline">Schengen visa guide</Link> for all requirements.</>,
  },
  {
    q: "How much does travel insurance cost from Bangladesh?",
    a: "Single trip plans start from BDT 1,500 (up to 30 days). Schengen-specific plans from BDT 2,000. Premium plans with USD 100,000 medical coverage from BDT 4,500. Annual multi-trip plans from BDT 8,000–15,000 per year.",
  },
  {
    q: "What does travel insurance cover for Bangladeshi travelers?",
    a: "Standard coverage includes: emergency medical expenses, medical evacuation and repatriation, trip cancellation/interruption, baggage loss and theft, flight delay compensation, accidental death and disability, and 24/7 worldwide emergency assistance. Premium plans also cover adventure sports, pre-existing conditions, and rental car damage.",
  },
  {
    q: "Which countries require travel insurance from Bangladesh?",
    a: <>All 29 <Link href="/schengen-visa" className="text-[#005a31] font-semibold hover:underline">Schengen Area countries</Link> require minimum €30,000 travel insurance for a visa. Cuba requires travel insurance for all visitors. Insurance is strongly recommended (though not mandatory) for <Link href="/visa/united-states-visa" className="text-[#005a31] font-semibold hover:underline">USA</Link>, <Link href="/visa/united-kingdom-visa" className="text-[#005a31] font-semibold hover:underline">UK</Link>, <Link href="/visa/canada-visa" className="text-[#005a31] font-semibold hover:underline">Canada</Link>, and <Link href="/visa/australia-visa" className="text-[#005a31] font-semibold hover:underline">Australia</Link>.</>,
  },
  {
    q: "Can I buy travel insurance after booking my flight?",
    a: "Yes — any time before departure. However, trip cancellation coverage only protects events occurring after the purchase date, so buying immediately after booking flights gives maximum protection.",
  },
  {
    q: "Does travel insurance cover pre-existing medical conditions?",
    a: "Standard plans do not cover pre-existing conditions. Premium plans offer limited coverage for stable conditions not requiring treatment in the past 12 months. Always declare conditions at purchase.",
  },
  {
    q: "What is the minimum coverage for a Schengen visa insurance?",
    a: "Minimum €30,000 medical expense coverage, valid in all 29 Schengen countries, covering the full stay duration plus repatriation. Must include emergency medical evacuation.",
  },
  {
    q: "Is travel insurance available for Dubai residents?",
    a: <>Yes. Eammu Holidays provides travel insurance for Bangladeshi expats in Dubai traveling to third countries — including <Link href="/schengen-visa" className="text-[#005a31] font-semibold hover:underline">Schengen</Link>, USA, UK, Canada, and more. Our <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-semibold hover:underline">Dubai office</Link> handles insurance alongside <Link href="/visa/dubai-residents" className="text-[#005a31] font-semibold hover:underline">third-country visa applications</Link>.</>,
  },
  {
    q: "How do I make a travel insurance claim?",
    a: "Call the 24/7 emergency assistance number on your policy immediately. Collect all medical reports, receipts, and official documents. File the claim within 30–90 days of the incident with supporting documentation — medical bills, police report for theft, airline delay certificate for flight delays.",
  },
];

const SEO_LINKS = [
  { label: "Tourist Visa from Bangladesh",              href: "/visa" },
  { label: "Schengen Visa 2026",                        href: "/schengen-visa" },
  { label: "USA Tourist Visa Bangladesh",               href: "/visa/united-states-visa" },
  { label: "UK Visitor Visa Bangladesh",                href: "/visa/united-kingdom-visa" },
  { label: "Canada Tourist Visa Bangladesh",            href: "/visa/canada-visa" },
  { label: "Japan Tourist Visa",                        href: "/visa/japan-visa" },
  { label: "Australia Visitor Visa",                    href: "/visa/australia-visa" },
  { label: "Germany Schengen Visa",                     href: "/our-services/visa/germany-visa-application" },
  { label: "France Visa Bangladesh",                    href: "/our-services/visa/europe-visa-application" },
  { label: "Dubai Tourist Visa",                        href: "/our-services/visa/dubai-visa-application" },
  { label: "Dubai Residents Visa Guide",                href: "/visa/dubai-residents" },
  { label: "E-Visa Destinations",                       href: "/visa/e-visa" },
  { label: "Student Visa from Bangladesh",              href: "/our-services/visa-services/student-visa-from-bangladesh" },
  { label: "Work Visa from Bangladesh",                 href: "/our-services/visa-services/work-visa-from-bangladesh" },
  { label: "Free Visa Checklist Generator",             href: "/travel-resources/visa-checklist-generator" },
  { label: "Visa Processing Time Tracker",              href: "/travel-resources/visa-processing-time-tracker" },
  { label: "Visa Rejection Rates Bangladesh",           href: "/visa-rejection" },
  { label: "Cheap Flight Booking Bangladesh",           href: "/flight-booking" },
  { label: "Holiday Tour Packages",                     href: "/our-services/tour-packages" },
  { label: "USA Visa Interview Preparation",            href: "/target-usa-visa-interview-preparation" },
  { label: "IELTS & Immigration Center",                href: "/target-ielts-immigration-center" },
  { label: "Contact Bangladesh Office",                 href: "/contact/travel-agency-bangladesh" },
  { label: "Contact Dubai Office",                      href: "/contact/travel-agency-dubai" },
  { label: "Client Testimonials",                       href: "/testimonials" },
  { label: "Online Travel Agency Bangladesh",           href: "/online-travel-agency-bangladesh" },
  { label: "All Travel Resources",                      href: "/travel-resources" },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function TravelInsurancePage() {
  return (
    <>
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(insuranceServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <main className="min-h-screen bg-white font-sans">

    

        {/* ── HERO ── */}
        <section
          className="relative bg-gradient-to-br from-[#003d22] via-[#005a31] to-[#007a42] pt-24 pb-24 px-6 overflow-hidden"
          aria-labelledby="insurance-heading"
        >
          <div className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/10 rounded-full translate-y-1/3 -translate-x-1/3" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-white">
                  Schengen-Compliant · Embassy-Accepted · Instant Certificate · 2026
                </span>
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <h1
                id="insurance-heading"
                className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6"
              >
                Travel Insurance<br />
                <span className="text-amber-400">from Bangladesh</span>
                <span className="text-white/40"> — 2026</span>
              </h1>
              <p className="text-green-100 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
                Medical emergencies. Trip cancellations. Baggage loss. Flight delays.{" "}
                <strong className="text-white">One policy covers everything</strong> — for{" "}
                <Link href="/schengen-visa" className="text-amber-400 font-semibold hover:underline">Schengen</Link>,{" "}
                <Link href="/visa/united-states-visa" className="text-amber-400 font-semibold hover:underline">USA</Link>,{" "}
                <Link href="/visa/united-kingdom-visa" className="text-amber-400 font-semibold hover:underline">UK</Link>,{" "}
                <Link href="/visa/canada-visa" className="text-amber-400 font-semibold hover:underline">Canada</Link> &amp; 200+ destinations.
              </p>

              {/* Quick action buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <Link
                  href="/travel-insurance/insurance-calculator"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-400 text-black font-black rounded-full hover:bg-amber-300 transition text-sm shadow-lg"
                >
                  <Shield size={16} /> Get Insurance Quote
                </Link>
                <Link
                  href="/contact/travel-agency-dubai"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/30 text-white font-black rounded-full hover:bg-white/20 transition text-sm"
                >
                  <Phone size={16} /> Dubai Office
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-green-200">
                {[
                  "🛡️ Embassy-Accepted Certificates",
                  "⚡ Instant Policy Delivery",
                  "📞 24/7 Global Emergency Line",
                  "✅ Schengen-Compliant (€30,000+)",
                  "🌍 200+ Countries Covered",
                ].map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-[#004d2c] py-6 px-6" aria-label="Insurance statistics">
          <div className="max-w-7xl mx-auto">
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { val: "50,000+", label: "Policies Issued" },
                { val: "€30,000+", label: "Schengen Coverage" },
                { val: "200+",     label: "Countries Covered" },
                { val: "24/7",     label: "Emergency Support" },
              ].map(s => (
                <div key={s.label}>
                  <dt className="text-2xl md:text-3xl font-black text-white">{s.val}</dt>
                  <dd className="text-xs font-bold text-green-300 uppercase tracking-wider mt-0.5">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

  

        {/* ── INSURANCE PLANS ── */}
        <section aria-labelledby="plans-heading" className="py-20 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-black uppercase tracking-widest text-[#005a31] block mb-2">Compare Plans</span>
              <h2 id="plans-heading" className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3">
                Travel Insurance Plans — Bangladesh 2026
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                Choose the right coverage for your destination and trip type.
                All plans include <strong className="text-gray-700">24/7 emergency assistance</strong> and{" "}
                <strong className="text-gray-700">instant certificate delivery</strong>.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {PLANS.map((plan, i) => (
                <article
                  key={i}
                  className={`bg-white rounded-3xl border-2 ${plan.color} overflow-hidden hover:shadow-xl transition-all`}
                >
                  {/* Plan header */}
                  <div className={`${plan.headerBg} px-6 pt-6 pb-5`}>
                    {plan.badge && (
                      <span className="inline-block text-[10px] font-black uppercase tracking-wider bg-amber-400 text-black px-3 py-1 rounded-full mb-3">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className={`text-xl font-black mb-1 ${plan.headerBg === "bg-gray-50" ? "text-gray-900" : "text-white"}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs font-semibold mb-3 ${plan.headerBg === "bg-gray-50" ? "text-gray-400" : "text-white/70"}`}>
                      {plan.duration}
                    </p>
                    <p className={`text-2xl font-black ${plan.headerBg === "bg-gray-50" ? "text-gray-900" : "text-white"}`}>
                      {plan.priceRange}
                    </p>
                  </div>

                  {/* Coverage list */}
                  <div className="p-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Coverage</p>
                    <ul className="space-y-3 mb-6">
                      {plan.coverage.map((c, j) => (
                        <li key={j} className="flex items-center justify-between">
                          <span className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                            {c.included
                              ? <CheckCircle2 size={14} className="text-[#005a31] flex-shrink-0" />
                              : <AlertCircle size={14} className="text-gray-300 flex-shrink-0" />
                            }
                            {c.label}
                          </span>
                          <span className={`text-[11px] font-black ${c.included ? "text-gray-800" : "text-gray-300"}`}>
                            {c.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-[11px] text-gray-400 font-medium mb-5 italic">{plan.ideal}</p>
                    <Link
                      href="/contact/travel-agency-bangladesh"
                      className={`block w-full text-center text-sm font-black px-5 py-3 rounded-2xl transition ${plan.btnStyle}`}
                    >
                      Get this plan →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT'S COVERED ── */}
        <section aria-labelledby="coverage-heading" className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-black uppercase tracking-widest text-[#005a31] block mb-2">Full Breakdown</span>
              <h2 id="coverage-heading" className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3">
                What Travel Insurance Covers — Complete Guide
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                Every type of coverage explained — so you know exactly what you&apos;re protected against before you travel.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {COVERAGE_TYPES.map((c, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-[#005a31]/20 transition-all"
                >
                  <div className={`w-11 h-11 ${c.bg} rounded-xl flex items-center justify-center mb-4`}>
                    {c.icon}
                  </div>
                  <h3 className="font-black text-gray-900 text-sm mb-2 leading-snug">{c.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{c.desc}</p>
                  <span className="text-[10px] font-black text-[#005a31] bg-green-50 border border-green-100 px-3 py-1 rounded-full">
                    {c.coverage}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DESTINATION REQUIREMENTS ── */}
        <section aria-labelledby="destination-heading" className="py-20 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-[#005a31] block mb-2">By Destination</span>
              <h2 id="destination-heading" className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3">
                Travel Insurance Requirements by Country — 2026
              </h2>
              <p className="text-gray-500 text-sm max-w-2xl">
                Insurance requirements vary significantly by destination. Schengen countries mandate it for visas —
                other major destinations strongly recommend it due to high medical costs abroad.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {DESTINATION_REQUIREMENTS.map((d, i) => (
                <article
                  key={i}
                  className="bg-white rounded-2xl border-2 border-gray-100 p-5 hover:border-[#005a31]/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{d.flag}</span>
                      <div>
                        <h3 className="font-black text-gray-800 text-sm">{d.region}</h3>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${d.mandatory ? "bg-red-50 text-red-600 border border-red-100" : "bg-amber-50 text-amber-600 border border-amber-100"}`}>
                          {d.mandatory ? "Mandatory for Visa" : "Strongly Recommended"}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-black text-[#005a31] bg-green-50 border border-green-100 px-3 py-1.5 rounded-xl text-right leading-tight">
                      {d.minCoverage}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{d.notes}</p>
                  <Link
                    href={d.visaHref}
                    className="text-xs font-black text-[#005a31] hover:underline"
                  >
                    {d.visaLabel}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLAN TYPES ── */}
        <section aria-labelledby="types-heading" className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-black uppercase tracking-widest text-[#005a31] block mb-2">Which Plan Suits You?</span>
              <h2 id="types-heading" className="text-3xl font-black text-gray-900 tracking-tight mb-3">
                Types of Travel Insurance for Bangladeshi Travelers
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PLAN_TYPES.map((t, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-[#005a31]/20 transition-all"
                >
                  <span className="text-3xl block mb-4">{t.icon}</span>
                  <h3 className="font-black text-gray-900 text-base mb-2">{t.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{t.desc}</p>
                  <p className="text-[11px] font-black text-[#005a31] bg-green-50 border border-green-100 px-3 py-1.5 rounded-xl inline-block mb-3">
                    {t.best}
                  </p>
                  {t.linkHref && (
                    <div>
                      <Link href={t.linkHref} className="text-xs font-black text-[#005a31] hover:underline">
                        {t.linkLabel}
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section aria-labelledby="how-heading" className="py-20 px-6 bg-[#004d2c]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 block mb-2">Simple Process</span>
              <h2 id="how-heading" className="text-3xl font-black text-white tracking-tight mb-3">
                How to Get Travel Insurance from Bangladesh — 5 Steps
              </h2>
            </div>
            <ol className="grid md:grid-cols-5 gap-6" aria-label="Travel insurance purchase steps">
              {[
                { step: "01", title: "Choose destination", desc: "Select your destination and trip duration. Requirements vary — Schengen needs €30,000 minimum." },
                { step: "02", title: "Select plan type", desc: "Single trip, annual, family, or student. Compare coverage limits and premiums." },
                { step: "03", title: "Review coverage", desc: "Check medical limits, cancellation amounts, baggage coverage, and exclusions carefully." },
                { step: "04", title: "Purchase policy", desc: "Complete purchase with traveler details. Receive your insurance certificate instantly by email." },
                { step: "05", title: "Travel protected", desc: "Save your emergency contact number. You're covered for medical emergencies, cancellations, and more." },
              ].map((s, i) => (
                <li key={i} className="text-center">
                  <div className="w-12 h-12 bg-amber-400 text-black font-black text-xl rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-black text-white text-sm mb-2">{s.title}</h3>
                  <p className="text-xs text-green-200 leading-relaxed">{s.desc}</p>
                </li>
              ))}
            </ol>
            <div className="text-center mt-12">
              <Link
                href="/contact/travel-agency-bangladesh"
                className="inline-block px-10 py-4 bg-amber-400 text-black font-black rounded-full hover:bg-amber-300 transition text-sm shadow-xl"
              >
                Get your travel insurance now →
              </Link>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section aria-labelledby="testimonials-heading" className="py-20 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-[#005a31] block mb-2">Real Stories</span>
              <h2 id="testimonials-heading" className="text-3xl font-black text-gray-900">
                Travel Insurance — Client Experiences
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {TESTIMONIALS.map((t, i) => (
                <figure
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all"
                  itemScope itemType="https://schema.org/Review"
                >
                  <div className="flex gap-0.5 mb-3" aria-label={`${t.stars} out of 5 stars`}>
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={14} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-gray-500 leading-relaxed mb-4 italic" itemProp="reviewBody">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption>
                    <p className="font-black text-gray-800 text-sm" itemProp="author">{t.name}</p>
                    <p className="text-xs text-[#005a31] font-bold mt-0.5">{t.trip}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/testimonials" className="inline-block px-8 py-3 bg-[#005a31] text-white font-black rounded-full hover:bg-[#004d2c] transition text-sm shadow">
                Read all testimonials →
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq-heading" className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-[#005a31] block mb-2">FAQs</span>
              <h2 id="faq-heading" className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                Travel Insurance — Frequently Asked Questions
              </h2>
              <p className="text-gray-500 text-sm">Everything Bangladeshi travelers need to know about travel insurance in 2026.</p>
            </div>
            <dl className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-[#005a31]/30 transition-all"
                  itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
                >
                  <details className="group">
                    <summary
                      className="w-full flex items-center justify-between p-5 text-left font-black text-gray-800 text-sm md:text-base cursor-pointer hover:text-[#005a31] transition list-none"
                      itemProp="name"
                    >
                      {item.q}
                      <span className="ml-4 flex-shrink-0 w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-[#005a31] font-black text-lg group-open:rotate-45 transition-transform">
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
                className="inline-block px-8 py-3 bg-[#005a31] text-white font-black rounded-full hover:bg-[#004d2c] transition text-sm shadow-lg"
              >
                Ask a travel insurance expert →
              </Link>
            </div>
          </div>
        </section>

        {/* ── SEO ARTICLE ── */}
        <section aria-labelledby="guide-heading" className="py-20 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 id="guide-heading" className="text-2xl font-black text-gray-900 mb-6">
              Travel Insurance from Bangladesh — Complete 2026 Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-500 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Travel insurance is the single most overlooked part of international trip planning for Bangladeshi
                  travelers — until something goes wrong. A single medical emergency in the{" "}
                  <Link href="/visa/united-states-visa" className="text-[#005a31] font-semibold hover:underline">USA</Link> can
                  cost USD 50,000–500,000. A cancelled trip to{" "}
                  <Link href="/visa/united-kingdom-visa" className="text-[#005a31] font-semibold hover:underline">UK</Link> can
                  mean losing BDT 200,000+ in non-refundable bookings. Travel insurance protects your investment and
                  your health — for as little as BDT 1,500 per trip.
                </p>
                <p>
                  <strong className="text-gray-700">Schengen visa applicants must purchase travel insurance</strong>{" "}
                  before submitting their visa application. The policy must cover minimum €30,000 in medical expenses
                  across all{" "}
                  <Link href="/schengen-visa" className="text-[#005a31] font-semibold hover:underline">29 Schengen countries</Link>.
                  Missing or insufficient insurance is one of the top reasons Schengen visa applications are rejected.
                  Eammu Holidays provides embassy-compliant Schengen insurance certificates instantly.
                </p>
                <p>
                  For <strong className="text-gray-700">annual multi-trip travelers</strong> — business professionals,
                  frequent flyers, and NRBs visiting family — annual travel insurance is far more cost-effective than
                  buying a new policy for every trip. A single annual plan covers unlimited international trips (up to
                  30–45 days each) for one fixed premium per year.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  <strong className="text-gray-700">Dubai and UAE residents</strong> traveling to{" "}
                  <Link href="/schengen-visa" className="text-[#005a31] font-semibold hover:underline">Europe</Link>,{" "}
                  <Link href="/visa/dubai-residents/united-states" className="text-[#005a31] font-semibold hover:underline">USA</Link>, or{" "}
                  <Link href="/visa/dubai-residents/canada" className="text-[#005a31] font-semibold hover:underline">Canada</Link>{" "}
                  can purchase travel insurance through our{" "}
                  <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-semibold hover:underline">Dubai office</Link>.
                  UAE resident policies are tailored for expats applying for third-country visas from Dubai.
                </p>
                <p>
                  <strong className="text-gray-700">Student travelers</strong> on{" "}
                  <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                    study visas from Bangladesh
                  </Link>{" "}
                  should consider long-term student travel insurance covering their full study period abroad —
                  separate from the travel insurance required for the visa application. Our team coordinates both.
                </p>
                <p>
                  Always combine travel insurance with the right visa documentation. Use our{" "}
                  <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">
                    free visa checklist generator
                  </Link>{" "}
                  to confirm all your visa documents are in order, and track{" "}
                  <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#005a31] font-semibold hover:underline">
                    visa processing times
                  </Link>{" "}
                  so your insurance and visa timelines align correctly. Contact our{" "}
                  <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                    Cumilla Bangladesh office
                  </Link>{" "}
                  for a combined travel insurance and{" "}
                  <Link href="/visa" className="text-[#005a31] font-semibold hover:underline">visa consultancy</Link> package.
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
                    className="text-xs font-semibold text-gray-500 bg-white border border-gray-100 px-3 py-1.5 rounded-full hover:bg-[#005a31] hover:text-white hover:border-[#005a31] transition"
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
          <ol
            className="max-w-7xl mx-auto px-6 py-2.5 flex items-center gap-2 text-xs text-gray-400"
            itemScope itemType="https://schema.org/BreadcrumbList"
          >
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" className="hover:text-[#005a31] font-medium transition" itemProp="item">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-gray-200">›</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/our-services" className="hover:text-[#005a31] font-medium transition" itemProp="item">
                <span itemProp="name">Our Services</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <li className="text-gray-200">›</li>
            <li className="font-semibold text-gray-600" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Travel Insurance Bangladesh 2026</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

      </main>
    </>
  );
}