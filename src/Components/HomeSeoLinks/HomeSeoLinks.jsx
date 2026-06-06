// Links.jsx — Eammu.com SEO Internal Linking Server Component (Next.js)
// Pure server component — zero client JS
// Import on: Homepage, /visa, /our-services, /our-services/visa-services, 404 page

import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const VISA_GUIDES = [
  {
    label: "Tourist Visa",
    slug: "tourist-visa",
    icon: "✈️",
    color: "#0057FF",
    description: "Leisure travel visas for Bangladeshi passport holders",
    href: "/our-services/visa-services/tourist-visa-from-bangladesh",
    links: [
      { label: "Dubai Visa Application", href: "/our-services/visa/dubai-visa-application" },
      { label: "Malaysia Visa Application", href: "/our-services/visa/malaysia-visa-application" },
      { label: "Thailand Visa Application", href: "/our-services/visa/thailand-visa-application" },
      { label: "Singapore Visa Application", href: "/our-services/visa/singapore-visa-application" },
      { label: "Turkey Visa Application", href: "/our-services/visa/turkey-visa-application" },
      { label: "Georgia Visa Application", href: "/our-services/visa/georgia-visa-application" },
      { label: "Armenia Visa Application", href: "/our-services/visa/armenia-visa-application" },
      { label: "Albania Visa Application", href: "/our-services/visa/albania-visa-application" },
      { label: "Indonesia Visa Application", href: "/our-services/visa/indonesia-visa-application" },
      { label: "Sri Lanka Visa Application", href: "/our-services/visa/srilanka-visa-application" },
    ],
  },
  {
    label: "Student Visa",
    slug: "student-visa",
    icon: "🎓",
    color: "#7C3AED",
    description: "Study abroad visa guidance from Bangladesh",
    href: "/our-services/visa-services/student-visa-from-bangladesh",
    links: [
      { label: "USA Student Visa", href: "/study-abroad/student-visa/united-states" },
      { label: "UK Student Visa", href: "/our-services/visa/uk-visa-application" },
      { label: "Canada Student Visa", href: "/our-services/visa/canada-visa-application" },
      { label: "Australia Student Visa", href: "/our-services/visa/australia-visa-application" },
      { label: "Germany Student Visa", href: "/our-services/visa/germany-visa-application" },
      { label: "Japan Student Visa", href: "/our-services/visa/japan-visa-application" },
      { label: "South Korea Student Visa", href: "/our-services/visa/south-korea-visa-application" },
      { label: "Malaysia Student Visa", href: "/our-services/visa/malaysia-visa-application" },
      { label: "Russia Student Visa", href: "/our-services/visa/russia-visa-application" },
      { label: "China Student Visa", href: "/our-services/visa/china-visa-application" },
    ],
  },
  {
    label: "Work Visa",
    slug: "work-visa",
    icon: "💼",
    color: "#059669",
    description: "Legal work authorization abroad from Bangladesh",
    href: "/our-services/visa-services/work-visa-from-bangladesh",
    links: [
      { label: "Dubai Work Visa", href: "/our-services/visa/dubai-visa-application" },
      { label: "Canada Work Visa", href: "/our-services/visa/canada-visa-application" },
      { label: "UK Work Visa", href: "/our-services/visa/uk-visa-application" },
      { label: "Qatar Work Visa", href: "/our-services/visa/qatar-visa-application" },
      { label: "Saudi Arabia Work Visa", href: "/our-services/visa/saudi-arabia-visa-application" },
      { label: "Portugal Work Visa", href: "/our-services/visa/portugal-visa-application" },
      { label: "Germany Work Visa", href: "/our-services/visa/germany-visa-application" },
      { label: "Australia Work Visa", href: "/our-services/visa/australia-visa-application" },
      { label: "Japan Work Visa", href: "/our-services/visa/japan-visa-application" },
      { label: "South Korea Work Visa", href: "/our-services/visa/south-korea-visa-application" },
    ],
  },
  {
    label: "Europe Visa",
    slug: "europe-visa",
    icon: "🇪🇺",
    color: "#DC2626",
    description: "Schengen & European country visas",
    href: "/our-services/visa/europe-visa-application",
    links: [
      { label: "Germany Visa", href: "/our-services/visa/germany-visa-application" },
      { label: "Spain Visa", href: "/our-services/visa/spain-visa-application" },
      { label: "Portugal Visa", href: "/our-services/visa/portugal-visa-application" },
      { label: "Albania Visa", href: "/our-services/visa/albania-visa-application" },
      { label: "Serbia Visa", href: "/our-services/visa/serbia-visa-application" },
      { label: "Montenegro Visa", href: "/our-services/visa/montenegro-visa-application" },
      { label: "Kosovo Visa", href: "/our-services/visa/kosovo-visa-application" },
      { label: "Cyprus Visa", href: "/our-services/visa/cyprus-visa-application" },
      { label: "Schengen Visa Guide", href: "/schengen-visa" },
      { label: "Europe Visa Overview", href: "/our-services/visa/europe-visa-application" },
    ],
  },
];

// Tourist Visa Bangladesh Nationals — /visa/[country]-visa
const BANGLADESH_TOURIST_VISAS = [
  { label: "Japan Visa", href: "/visa/japan-visa", flag: "🇯🇵" },
  { label: "Albania Visa", href: "/visa/albania-visa", flag: "🇦🇱" },
  { label: "Georgia Visa", href: "/visa/georgia-visa", flag: "🇬🇪" },
  { label: "Armenia Visa", href: "/visa/armenia-visa", flag: "🇦🇲" },
  { label: "Turkey Visa", href: "/visa/turkey-visa", flag: "🇹🇷" },
  { label: "Dubai Visa", href: "/visa/united-arab-emirates-visa", flag: "🇦🇪" },
  { label: "Malaysia Visa", href: "/visa/malaysia-visa", flag: "🇲🇾" },
  { label: "Thailand Visa", href: "/visa/thailand-visa", flag: "🇹🇭" },
  { label: "Singapore Visa", href: "/visa/singapore-visa", flag: "🇸🇬" },
  { label: "Indonesia Visa", href: "/visa/indonesia-visa", flag: "🇮🇩" },
  { label: "Sri Lanka Visa", href: "/visa/srilanka-visa", flag: "🇱🇰" },
  { label: "Canada Visa", href: "/visa/canada-visa", flag: "🇨🇦" },
  { label: "UK Visa", href: "/visa/united-kingdom-visa", flag: "🇬🇧" },
  { label: "USA Visa", href: "/visa/united-states-visa", flag: "🇺🇸" },
  { label: "Australia Visa", href: "/visa/australia-visa", flag: "🇦🇺" },
  { label: "Germany Visa", href: "/visa/germany-visa", flag: "🇩🇪" },
  { label: "South Korea Visa", href: "/visa/south-korea-visa", flag: "🇰🇷" },
  { label: "Serbia Visa", href: "/visa/serbia-visa", flag: "🇷🇸" },
  { label: "Portugal Visa", href: "/visa/portugal-visa", flag: "🇵🇹" },
  { label: "Spain Visa", href: "/visa/spain-visa", flag: "🇪🇸" },
  { label: "China Visa", href: "/visa/china-visa", flag: "🇨🇳" },
  { label: "Russia Visa", href: "/visa/russia-visa", flag: "🇷🇺" },
  { label: "Saudi Arabia Visa", href: "/visa/saudi-arabia-visa", flag: "🇸🇦" },
  { label: "Qatar Visa", href: "/visa/qatar-visa", flag: "🇶🇦" },
];

// Visa Guide slug pages: /visa/visa-guide/[country]-visa-for-[nationality]
const VISA_GUIDE_SLUGS = [
  { label: "Armenia Visa for India", href: "/visa/visa-guide/armenia-visa-for-india" },
  { label: "Albania Visa for Bangladesh", href: "/visa/visa-guide/albania-visa-for-bangladesh" },
  { label: "Georgia Visa for Bangladesh", href: "/visa/visa-guide/georgia-visa-for-bangladesh" },
  { label: "Dubai Visa for India", href: "/visa/visa-guide/united-arab-emirates-visa-for-india" },
  { label: "Turkey Visa for Bangladesh", href: "/visa/visa-guide/turkey-visa-for-bangladesh" },
  { label: "Malaysia Visa for Bangladesh", href: "/visa/visa-guide/malaysia-visa-for-bangladesh" },
  { label: "Singapore Visa for Bangladesh", href: "/visa/visa-guide/singapore-visa-for-bangladesh" },
  { label: "Canada Visa for Bangladesh", href: "/visa/visa-guide/canada-visa-for-bangladesh" },
  { label: "UK Visa for Bangladesh", href: "/visa/visa-guide/uk-visa-for-bangladesh" },
  { label: "Japan Visa for Bangladesh", href: "/visa/visa-guide/japan-visa-for-bangladesh" },
  { label: "South Korea Visa for Bangladesh", href: "/visa/visa-guide/south-korea-visa-for-bangladesh" },
  { label: "Australia Visa for Bangladesh", href: "/visa/visa-guide/australia-visa-for-bangladesh" },
  { label: "USA Visa for Bangladesh", href: "/visa/visa-guide/usa-visa-for-bangladesh" },
  { label: "Germany Visa for Bangladesh", href: "/visa/visa-guide/germany-visa-for-bangladesh" },
  { label: "Thailand Visa for Bangladesh", href: "/visa/visa-guide/thailand-visa-for-bangladesh" },
  { label: "Serbia Visa for Bangladesh", href: "/visa/visa-guide/serbia-visa-for-bangladesh" },
  { label: "Armenia Visa for Bangladesh", href: "/visa/visa-guide/armenia-visa-for-bangladesh" },
  { label: "Portugal Visa for Bangladesh", href: "/visa/visa-guide/portugal-visa-for-bangladesh" },
];

// Dubai Residents hub: /visa/dubai-residents/[country]
const DUBAI_RESIDENTS = {
  label: "Dubai Residents",
  href: "/visa/dubai-residents",
  icon: "🇦🇪",
  tagline: "Visas for UAE-based expats",
  links: [
    { label: "Canada Visa for Dubai Residents", href: "/visa/dubai-residents/canada" },
    { label: "Albania Visa for Dubai Residents", href: "/visa/dubai-residents/albania" },
    { label: "Serbia Visa for Dubai Residents", href: "/visa/dubai-residents/serbia" },
    { label: "Armenia Visa for Dubai Residents", href: "/visa/dubai-residents/armenia" },
    { label: "Georgia Visa for Dubai Residents", href: "/visa/dubai-residents/georgia" },
    { label: "UK Visa for Dubai Residents", href: "/visa/dubai-residents/united-kingdom" },
    { label: "USA Visa for Dubai Residents", href: "/visa/dubai-residents/united-states" },
    { label: "Australia Visa for Dubai Residents", href: "/visa/dubai-residents/australia" },
    { label: "Germany Visa for Dubai Residents", href: "/visa/dubai-residents/germany" },
    { label: "Japan Visa for Dubai Residents", href: "/visa/dubai-residents/japan" },
    { label: "South Korea Visa for Dubai Residents", href: "/visa/dubai-residents/south-korea" },
    { label: "Turkey Visa for Dubai Residents", href: "/visa/dubai-residents/turkey" },
  ],
};

// India hub: /visa/india/[country]
const INDIA_HUB = {
  label: "India Passport",
  href: "/visa/india",
  icon: "🇮🇳",
  tagline: "Visas for Indian passport holders",
  links: [
    { label: "Albania Visa for India", href: "/visa/india/albania" },
    { label: "Serbia Visa for India", href: "/visa/india/serbia" },
    { label: "Armenia Visa for India", href: "/visa/india/armenia" },
    { label: "Georgia Visa for India", href: "/visa/india/georgia" },
    { label: "Canada Visa for India", href: "/visa/india/canada" },
    { label: "UK Visa for India", href: "/visa/india/united-kingdom" },
    { label: "USA Visa for India", href: "/visa/india/united-states" },
    { label: "Australia Visa for India", href: "/visa/india/australia" },
    { label: "Germany Visa for India", href: "/visa/india/germany" },
    { label: "Japan Visa for India", href: "/visa/india/japan" },
    { label: "Turkey Visa for India", href: "/visa/india/turkey" },
    { label: "Malaysia Visa for India", href: "/visa/india/malaysia" },
  ],
};

// Popular visa destinations
const POPULAR_DESTINATIONS = [
  { label: "Dubai", href: "/our-services/visa/dubai-visa-application", flag: "🇦🇪" },
  { label: "Canada", href: "/our-services/visa/canada-visa-application", flag: "🇨🇦" },
  { label: "USA", href: "/our-services/visa/usa-visa-application", flag: "🇺🇸" },
  { label: "UK", href: "/our-services/visa/uk-visa-application", flag: "🇬🇧" },
  { label: "Germany", href: "/our-services/visa/germany-visa-application", flag: "🇩🇪" },
  { label: "Australia", href: "/our-services/visa/australia-visa-application", flag: "🇦🇺" },
  { label: "Japan", href: "/our-services/visa/japan-visa-application", flag: "🇯🇵" },
  { label: "Singapore", href: "/our-services/visa/singapore-visa-application", flag: "🇸🇬" },
  { label: "Malaysia", href: "/our-services/visa/malaysia-visa-application", flag: "🇲🇾" },
  { label: "Turkey", href: "/our-services/visa/turkey-visa-application", flag: "🇹🇷" },
  { label: "Georgia", href: "/our-services/visa/georgia-visa-application", flag: "🇬🇪" },
  { label: "Armenia", href: "/our-services/visa/armenia-visa-application", flag: "🇦🇲" },
  { label: "Thailand", href: "/our-services/visa/thailand-visa-application", flag: "🇹🇭" },
  { label: "South Korea", href: "/our-services/visa/south-korea-visa-application", flag: "🇰🇷" },
  { label: "Portugal", href: "/our-services/visa/portugal-visa-application", flag: "🇵🇹" },
  { label: "Qatar", href: "/our-services/visa/qatar-visa-application", flag: "🇶🇦" },
];

// Study abroad
const STUDY_ABROAD = [
  { label: "Study in USA", href: "/study-abroad/student-visa/united-states", flag: "🇺🇸" },
  { label: "Study in UK", href: "/study-abroad/student-visa/united-kingdom", flag: "🇬🇧" },
  { label: "Study in Canada", href: "/study-abroad/student-visa/canada", flag: "🇨🇦" },
  { label: "Study in Australia", href: "/study-abroad/student-visa/australia", flag: "🇦🇺" },
  { label: "Study in Germany", href: "/study-abroad/student-visa/germany", flag: "🇩🇪" },
  { label: "Study in Japan", href: "/study-abroad/student-visa/japan", flag: "🇯🇵" },
  { label: "Study in South Korea", href: "/study-abroad/student-visa/south-korea", flag: "🇰🇷" },
  { label: "Study in Malaysia", href: "/study-abroad/student-visa/malaysia", flag: "🇲🇾" },
  { label: "Study in Russia", href: "/study-abroad/student-visa/russia", flag: "🇷🇺" },
  { label: "Study in China", href: "/study-abroad/student-visa/china", flag: "🇨🇳" },
];

// Scholarships
const SCHOLARSHIPS = [
  { label: "USA Scholarships", href: "/scholarships/united-states" },
  { label: "UK Scholarships", href: "/scholarships/united-kingdom" },
  { label: "Canada Scholarships", href: "/scholarships/canada" },
  { label: "Australia Scholarships", href: "/scholarships/australia" },
  { label: "Germany Scholarships", href: "/scholarships/germany" },
  { label: "Japan Scholarships", href: "/scholarships/japan" },
  { label: "South Korea Scholarships", href: "/scholarships/south-korea" },
  { label: "Malaysia Scholarships", href: "/scholarships/malaysia" },
  { label: "All Scholarships", href: "/scholarships" },
];

// Processing times
const PROCESSING_TIMES = [
  { label: "India Visa Processing — Armenia (E-Visa)", href: "/travel-resources/visa-processing-time-tracker/india-national-visa-processing-time-for-armenia-e-visa" },
  { label: "Bangladesh Visa Processing — Andorra (Sticker)", href: "/travel-resources/visa-processing-time-tracker/bangladesh-national-visa-processing-time-for-andorra-sticker" },
  { label: "Bangladesh Visa Processing — Albania (Transit)", href: "/travel-resources/visa-processing-time-tracker/bangladesh-national-visa-processing-time-for-albania-transit" },
  { label: "Bangladesh Visa Processing — Canada", href: "/travel-resources/visa-processing-time-tracker/india-national-visa-processing-time-for-canada" },
  { label: "Bangladesh Visa Processing — UK", href: "/travel-resources/visa-processing-time-tracker/india-national-visa-processing-time-for-united-kingdom" },
  { label: "Bangladesh Visa Processing — USA", href: "/travel-resources/visa-processing-time-tracker/bangladesh-national-visa-processing-time-for-usa" },
  { label: "Bangladesh Visa Processing — Germany", href: "/travel-resources/visa-processing-time-tracker/bangladesh-national-visa-processing-time-for-germany" },
  { label: "India Visa Processing — Canada", href: "/travel-resources/visa-processing-time-tracker/india-national-visa-processing-time-for-canada" },
  { label: "Bangladesh Visa Processing — Australia", href: "/travel-resources/visa-processing-time-tracker/bangladesh-national-visa-processing-time-for-australia" },
  { label: "Bangladesh Visa Processing — Japan", href: "/travel-resources/visa-processing-time-tracker/bangladesh-national-visa-processing-time-for-japan" },
];

// Rejection rates
const REJECTION_RATES = [
  { label: "Bangladesh Student Visa Rejection — Albania", href: "/visa-rejection/bangladesh-visa-rejection-rate-for-albania-student" },
  { label: "India Tourist Visa Rejection — Canada", href: "/visa-rejection/india-visa-rejection-rate-for-canada-tourist" },
  { label: "India Work Visa Rejection — Canada", href: "/visa-rejection/india-visa-rejection-rate-for-canada-work" },
  { label: "Bangladesh Student Visa Rejection — Germany", href: "/visa-rejection/iran-visa-rejection-rate-for-germany-student" },
  { label: "Bangladesh Tourist Visa Rejection — UK", href: "/visa-rejection/bangladesh-visa-rejection-rate-for-united-kingdom-tourist" },
  { label: "Bangladesh Student Visa Rejection — USA", href: "/visa-rejection/bangladesh-visa-rejection-rate-for-united-states-student" },
  { label: "Bangladesh Tourist Visa Rejection — Australia", href: "/visa-rejection/bangladesh-visa-rejection-rate-for-australia-tourist" },
  { label: "Bangladesh Work Visa Rejection — UAE", href: "/visa-rejection/bangladesh-visa-rejection-rate-for-united-arab-emirates-work" },
];

// Tools
const TOOLS = [
  { label: "Visa Processing Time Tracker", href: "/travel-resources/visa-processing-time-tracker", icon: "⏱️", desc: "Real-time processing durations by country & visa type" },
  { label: "Visa Rejection Rate Stats", href: "/visa-rejection", icon: "📊", desc: "Historical rejection data to plan smarter applications" },
  { label: "Visa Checklist Generator", href: "/travel-resources/visa-checklist-generator", icon: "✅", desc: "Auto-generate a personalized document checklist" },
  { label: "Travel Document Generator", href: "/travel-resources/travel-document-generator", icon: "📄", desc: "Generate required travel documents for any visa" },
  { label: "Travel Cost Calculator", href: "/travel-cost-calculator", icon: "🧮", desc: "Estimate total travel & visa costs in advance" },
  { label: "Travel Insurance", href: "/travel-insurance", icon: "🛡️", desc: "Compare and buy travel insurance for your trip" },
  { label: "Study Abroad Guide", href: "/study-abroad", icon: "🎓", desc: "Complete guide to studying outside Bangladesh" },
  { label: "Schengen Visa Guide", href: "/schengen-visa", icon: "🇪🇺", desc: "Requirements & tips for all Schengen countries" },
  { label: "Flight Booking", href: "/flight-booking", icon: "✈️", desc: "Book flights to any destination worldwide" },
];

// Footer quick links
const FOOTER_LINKS = [
  { label: "All Visa Services", href: "/our-services/visa-services" },
  { label: "Tourist Visa from Bangladesh", href: "/our-services/visa-services/tourist-visa-from-bangladesh" },
  { label: "Student Visa from Bangladesh", href: "/our-services/visa-services/student-visa-from-bangladesh" },
  { label: "Work Visa from Bangladesh", href: "/our-services/visa-services/work-visa-from-bangladesh" },
  { label: "Bangladesh Tourist Visa", href: "/visa" },
  { label: "Dubai Residents Visa", href: "/visa/dubai-residents" },
  { label: "India Passport Visas", href: "/visa/india" },
  { label: "Visa Guide", href: "/visa/visa-guide" },
  { label: "Schengen Visa", href: "/schengen-visa" },
  { label: "Study Abroad", href: "/study-abroad" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Processing Times", href: "/travel-resources/visa-processing-time-tracker" },
  { label: "Rejection Rates", href: "/visa-rejection" },
  { label: "Travel Resources", href: "/travel-resources" },
  { label: "Travel Insurance", href: "/travel-insurance" },
  { label: "Flight Booking", href: "/flight-booking" },
  { label: "Tour Packages", href: "/our-services/tour-packages" },
  { label: "News & Updates", href: "/news-feeds" },
  { label: "Blogs", href: "/blogs" },
  { label: "About Us", href: "/online-travel-agency-bangladesh" },
  { label: "Our Team", href: "/our-leading-team" },
  { label: "Offers", href: "/offers" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/terms-privacy-policy" },
];

// ─────────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// ─────────────────────────────────────────────────────────────────────────────

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://eammu.com";

function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        name: "Eammu Holidays",
        url: SITE_URL,
        description: "IATA-accredited travel agency in Bangladesh offering visa services, tour packages, flight booking, and study abroad guidance.",
        areaServed: ["Bangladesh", "United Arab Emirates", "India"],
        serviceType: ["Tourist Visa Services", "Student Visa Services", "Work Visa Services", "Tour Packages", "Flight Booking", "Travel Insurance"],
      },
      {
        "@type": "ItemList",
        name: "Tourist Visa Pages for Bangladesh Nationals — Eammu Holidays",
        itemListElement: BANGLADESH_TOURIST_VISAS.map((v, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: v.label,
          url: `${SITE_URL}${v.href}`,
        })),
      },
      {
        "@type": "ItemList",
        name: "Visa Services by Type — Eammu Holidays",
        itemListElement: VISA_GUIDES.map((v, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: v.label,
          url: `${SITE_URL}${v.href}`,
        })),
      },
      {
        "@type": "ItemList",
        name: "Country Visa Guides — Eammu Holidays",
        itemListElement: VISA_GUIDE_SLUGS.map((v, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: v.label,
          url: `${SITE_URL}${v.href}`,
        })),
      },
      {
        "@type": "ItemList",
        name: "Travel Tools & Resources — Eammu Holidays",
        itemListElement: TOOLS.map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: t.label,
          url: `${SITE_URL}${t.href}`,
        })),
      },
      {
        "@type": "ItemList",
        name: "Study Abroad Guides — Eammu Holidays",
        itemListElement: STUDY_ABROAD.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.label,
          url: `${SITE_URL}${s.href}`,
        })),
      },
      {
        "@type": "ItemList",
        name: "Scholarships by Country — Eammu Holidays",
        itemListElement: SCHOLARSHIPS.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.label,
          url: `${SITE_URL}${s.href}`,
        })),
      },
    ],
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-[#0057FF] mb-3 letter-spacing-widest">
      {children}
    </span>
  );
}

function SectionHeading({ label, title, subtitle, href, linkLabel }) {
  return (
    <div className="flex items-start justify-between gap-6 mb-6">
      <div>
        {label && <SectionLabel>{label}</SectionLabel>}
        <h2 className="text-[1.15rem] font-bold text-[#0D0D0D] leading-tight tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[0.8rem] text-[#6B7280] mt-1 leading-relaxed max-w-xl">{subtitle}</p>
        )}
      </div>
      {href && (
        <Link
          href={href}
          className="shrink-0 mt-1 text-[11px] font-semibold text-[#0057FF] hover:text-[#003FBF] flex items-center gap-1 transition-colors whitespace-nowrap"
        >
          {linkLabel || "View all"} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}

function Divider() {
  return <hr className="border-[#F0F0F0] my-12" />;
}

function VisaTypeCard({ type }) {
  const accentStyle = { borderTopColor: type.color };
  return (
    <div
      className="bg-white border border-[#EBEBEB] rounded-xl p-5 flex flex-col hover:border-[#C8C8C8] hover:shadow-md transition-all duration-200 group border-t-2"
      style={accentStyle}
    >
      <Link href={type.href} className="flex items-center gap-2.5 mb-1.5">
        <span className="text-xl" aria-hidden="true">{type.icon}</span>
        <span className="text-[0.9rem] font-bold text-[#0D0D0D] group-hover:text-[#0057FF] transition-colors leading-tight">
          {type.label}
        </span>
      </Link>
      <p className="text-[11px] text-[#9CA3AF] mb-4 leading-relaxed">{type.description}</p>
      <ul className="space-y-2 flex-1">
        {type.links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[12px] text-[#4B5563] hover:text-[#0057FF] transition-colors flex items-center gap-1.5 leading-snug"
            >
              <span className="w-1 h-1 rounded-full bg-[#D1D5DB] shrink-0" aria-hidden="true" />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={type.href}
        className="mt-4 text-[11px] font-semibold text-[#0057FF] hover:text-[#003FBF] transition-colors"
      >
        All {type.label} guides →
      </Link>
    </div>
  );
}

function ToolCard({ tool }) {
  return (
    <Link
      href={tool.href}
      className="group flex items-start gap-4 bg-white border border-[#EBEBEB] rounded-xl p-4 hover:border-[#0057FF] hover:shadow-sm transition-all duration-200"
    >
      <span
        className="text-[1.4rem] shrink-0 w-10 h-10 flex items-center justify-center bg-[#F5F8FF] rounded-lg group-hover:bg-[#EBF0FF] transition-colors"
        aria-hidden="true"
      >
        {tool.icon}
      </span>
      <div>
        <div className="text-[0.82rem] font-bold text-[#0D0D0D] group-hover:text-[#0057FF] transition-colors leading-tight mb-1">
          {tool.label}
        </div>
        <div className="text-[11px] text-[#9CA3AF] leading-relaxed">{tool.desc}</div>
      </div>
    </Link>
  );
}

function HubCard({ hub }) {
  return (
    <div className="bg-[#FAFAFA] border border-[#EBEBEB] rounded-xl p-5 hover:border-[#C8C8C8] transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <Link href={hub.href} className="flex items-center gap-2.5 group">
          <span className="text-xl" aria-hidden="true">{hub.icon}</span>
          <div>
            <div className="text-[0.88rem] font-bold text-[#0D0D0D] group-hover:text-[#0057FF] transition-colors leading-tight">
              {hub.label} Visas
            </div>
            <div className="text-[10px] text-[#9CA3AF]">{hub.tagline}</div>
          </div>
        </Link>
        <Link
          href={hub.href}
          className="text-[11px] font-semibold text-[#0057FF] hover:text-[#003FBF] transition-colors"
        >
          View all →
        </Link>
      </div>
      <ul className="grid grid-cols-1 gap-1.5">
        {hub.links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[12px] text-[#4B5563] hover:text-[#0057FF] transition-colors flex items-center gap-1.5"
            >
              <span className="w-1 h-1 rounded-full bg-[#D1D5DB] shrink-0" aria-hidden="true" />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CountryChip({ href, flag, label }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 bg-white border border-[#E5E7EB] hover:border-[#0057FF] hover:bg-[#F5F8FF] rounded-lg px-3 py-2 text-[12px] font-medium text-[#374151] hover:text-[#0057FF] transition-all duration-150"
    >
      <span aria-hidden="true">{flag}</span>
      {label}
    </Link>
  );
}

function PillLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex text-[12px] text-[#4B5563] hover:text-[#0057FF] bg-[#F9FAFB] hover:bg-[#EBF0FF] border border-[#E5E7EB] hover:border-[#0057FF] rounded-full px-3.5 py-1.5 transition-all duration-150 leading-none"
    >
      {children}
    </Link>
  );
}

function StatRow({ icon, label, href }) {
  return (
    <li>
      <Link href={href} className="flex items-start gap-2.5 group py-1.5">
        <span className="text-[#9CA3AF] text-[12px] mt-0.5 shrink-0" aria-hidden="true">{icon}</span>
        <span className="text-[12px] text-[#4B5563] group-hover:text-[#0057FF] transition-colors leading-snug">
          {label}
        </span>
      </Link>
    </li>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export default function HomeSeoLinks() {
  return (
    <section
      aria-label="Explore Visa Services, Study Abroad, Tools and Resources — Eammu Holidays"
      className="py-16 px-4"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredData()) }}
      />

      <div className="max-w-7xl mx-auto">

        {/* ── SECTION INTRO ─────────────────────────────────────────────── */}
        <div className="mb-12 pb-8 border-b border-[#EBEBEB]">
          <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-[#0057FF] mb-2">
            Eammu Holidays — Visa &amp; Travel Services
          </span>
          <h2 className="text-2xl font-bold text-[#0D0D0D] tracking-tight">
            Complete Visa &amp; Travel Resource Hub
          </h2>
          <p className="text-[0.85rem] text-[#6B7280] mt-2 max-w-2xl leading-relaxed">
            IATA-accredited visa assistance from Bangladesh · Tourist, student &amp; work visas · Study abroad · Travel tools &amp; resources
          </p>
        </div>

        {/* ── 1. VISA TYPES ────────────────────────────────────────────── */}
        <div id="visa-types">
          <SectionHeading
            label="Visa Services"
            title="Visa Services from Bangladesh"
            subtitle="Tourist, student, work, and European visa assistance — expert guidance for every journey"
            href="/our-services/visa-services"
            linkLabel="All visa services"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {VISA_GUIDES.map((type) => (
              <VisaTypeCard key={type.slug} type={type} />
            ))}
          </div>
        </div>

        <Divider />

        {/* ── 2. BANGLADESH TOURIST VISAS (/visa/[country]-visa) ────────── */}
        <div id="bangladesh-tourist-visas">
          <SectionHeading
            label="Bangladesh Nationals"
            title="Tourist Visa for Bangladesh Nationals"
            subtitle="Direct tourist visa pages — requirements, fees & application process for Bangladeshi passport holders"
            href="/visa"
            linkLabel="All tourist visas"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {BANGLADESH_TOURIST_VISAS.map((v) => (
              <CountryChip key={v.href} href={v.href} flag={v.flag} label={v.label} />
            ))}
          </div>
        </div>

        <Divider />

        {/* ── 3. POPULAR DESTINATIONS ──────────────────────────────────── */}
        <div id="popular-destinations">
          <SectionHeading
            label="Most Popular"
            title="Popular Visa Destinations"
            subtitle="Most searched countries for Bangladeshi passport holders"
            href="/our-services/visa-services"
            linkLabel="All destinations"
          />
          <div className="flex flex-wrap gap-2">
            {POPULAR_DESTINATIONS.map((d) => (
              <CountryChip key={d.href} href={d.href} flag={d.flag} label={d.label} />
            ))}
          </div>
        </div>

        <Divider />

        {/* ── 4. COUNTRY VISA GUIDES (slug pages) ──────────────────────── */}
        <div id="visa-guides">
          <SectionHeading
            label="In-Depth Guides"
            title="Visa Guides by Nationality"
            subtitle="Step-by-step visa guides — requirements, documents, fees, and processing times"
            href="/visa/visa-guide"
            linkLabel="All guides"
          />
          <div className="flex flex-wrap gap-2">
            {VISA_GUIDE_SLUGS.map((v) => (
              <PillLink key={v.href} href={v.href}>
                {v.label}
              </PillLink>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── 5. COUNTRY HUBS ───────────────────────────────────────────── */}
        <div id="country-hubs">
          <SectionHeading
            label="Passport Hubs"
            title="Visa Hub by Passport Country"
            subtitle="Tailored visa guides for Dubai-based residents and Indian passport holders"
            href="/visa"
            linkLabel="All passport hubs"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <HubCard hub={DUBAI_RESIDENTS} />
            <HubCard hub={INDIA_HUB} />
          </div>
        </div>

        <Divider />

        {/* ── 6. STUDY ABROAD + SCHOLARSHIPS ───────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10" id="study-scholarships">

          <div id="study-abroad">
            <SectionHeading
              label="Study Abroad"
              title="Study Abroad Destinations"
              subtitle="Student visa guidance for popular academic destinations"
              href="/study-abroad"
              linkLabel="Full study guide"
            />
            <div className="bg-white border border-[#EBEBEB] rounded-xl p-5">
              <div className="grid grid-cols-2 gap-2">
                {STUDY_ABROAD.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-2 text-[12px] text-[#4B5563] hover:text-[#0057FF] transition-colors py-1.5 border-b border-[#F3F4F6] last:border-0"
                  >
                    <span aria-hidden="true">{s.flag}</span>
                    {s.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/study-abroad/student-visa"
                className="inline-flex items-center gap-1.5 mt-4 text-[11px] font-bold text-[#0057FF] hover:text-[#003FBF] transition-colors"
              >
                🎓 All Student Visa Guides →
              </Link>
            </div>
          </div>

          <div id="scholarships">
            <SectionHeading
              label="Scholarships"
              title="Scholarships by Country"
              subtitle="Fully-funded and partial scholarships for Bangladeshi students"
              href="/scholarships"
              linkLabel="All scholarships"
            />
            <div className="bg-white border border-[#EBEBEB] rounded-xl p-5">
              <ul className="space-y-1">
                {SCHOLARSHIPS.map((s, i) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className={`flex items-center gap-2 text-[12px] text-[#4B5563] hover:text-[#0057FF] transition-colors py-2 ${i < SCHOLARSHIPS.length - 1 ? "border-b border-[#F3F4F6]" : ""}`}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#D1D5DB] shrink-0" aria-hidden="true" />
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── 7. TOOLS & RESOURCES ─────────────────────────────────────── */}
        <div id="visa-tools">
          <SectionHeading
            label="Free Tools"
            title="Travel &amp; Visa Tools"
            subtitle="Free tools to help you prepare, track, calculate, and successfully apply for any visa"
            href="/travel-resources"
            linkLabel="All resources"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {TOOLS.map((tool) => (
              <ToolCard key={tool.href} tool={tool} />
            ))}
          </div>
        </div>

        <Divider />

        {/* ── 8. PROCESSING TIMES + REJECTION RATES ────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div id="processing-times">
            <SectionHeading
              label="Processing Data"
              title="Visa Processing Time Data"
              subtitle="Real applicant data on how long each embassy takes"
              href="/travel-resources/visa-processing-time-tracker"
              linkLabel="Track all times"
            />
            <div className="bg-white border border-[#EBEBEB] rounded-xl p-4">
              <ul className="divide-y divide-[#F3F4F6]">
                {PROCESSING_TIMES.map((item) => (
                  <StatRow key={item.href} icon="⏱" label={item.label} href={item.href} />
                ))}
              </ul>
            </div>
          </div>

          <div id="rejection-rates">
            <SectionHeading
              label="Rejection Stats"
              title="Visa Rejection Rate Data"
              subtitle="Country-specific rejection rates to help you apply smarter"
              href="/visa-rejection"
              linkLabel="See all stats"
            />
            <div className="bg-white border border-[#EBEBEB] rounded-xl p-4">
              <ul className="divide-y divide-[#F3F4F6]">
                {REJECTION_RATES.map((item) => (
                  <StatRow key={item.href} icon="📊" label={item.label} href={item.href} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── 9. SEO FOOTER NAV ─────────────────────────────────────────── */}
        <nav
          aria-label="Eammu Holidays — site-wide quick navigation"
          className="pt-2"
        >
          <p className="text-[10px] font-bold text-[#C5C7CB] uppercase tracking-[0.15em] mb-5">
            Quick Navigation
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
            {FOOTER_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[11.5px] text-[#9CA3AF] hover:text-[#0057FF] hover:underline underline-offset-2 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[11px] text-[#C5C7CB]">
            © {new Date().getFullYear()} Eammu Holidays · IATA Accredited Travel Agency · Bangladesh
          </p>
        </nav>

      </div>
    </section>
  );
}