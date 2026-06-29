// /app/travel-resources/visa-processing-time-tracker/[slug]/page.jsx
// ✅ OPTIMIZED: searchParams সরানো হয়েছে — type এখন slug-এর শেষে
// URL: /bangladeshi-national-visa-processing-time-for-canada-sticker  (static ✅)
// আগে: /bangladeshi-national-visa-processing-time-for-canada?type=sticker (dynamic ❌)

import COUNTRIES from "@/app/data/countries.json";
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import VisaProcessingSlugPage from "@/Components/Server/VisaProcessingTimeTracker/VisaProcessingTimeTracker";

// এই দুটো line শুধু পরিবর্তন করুন, বাকি সব same থাকবে

//export const dynamicParams = true; // ← এটা যোগ করুন
//export const revalidate = 2592000; // ← 86400 থেকে 2592000 করুন (30 দিন)
export const dynamic = "force-dynamic";
// ── VISA RULES ─────────────────────────────────────────────────────────────
const VISA_RULES = {
  canada: {
    name: "Canada", flag: "🇨🇦",
    types: {
      "e-visa":            { min:2,  max:4,   label:"eTA (Electronic Travel Authorization)" },
      "sticker":           { min:15, max:21,  label:"Temporary Resident Visa (TRV)" },
      "sticker-extended":  { min:45, max:60,  label:"TRV (Complex / Administrative Processing)" },
      "transit":           { min:6,  max:24,  unit:"hours", label:"Canada Transit Visa" },
    },
  },
  "united-states": {
    name: "United States", flag: "🇺🇸",
    types: {
      "e-visa":            { min:3,  max:5,   label:"ESTA (Visa Waiver Program)" },
      "sticker":           { min:21, max:60,  label:"B1/B2 Tourist/Business Visa" },
      "sticker-extended":  { min:60, max:180, label:"Administrative Processing (221g)" },
      "transit":           { min:6,  max:24,  unit:"hours", label:"C-1 Transit Visa" },
    },
  },
  "united-kingdom": {
    name: "United Kingdom", flag: "🇬🇧",
    types: {
      "e-visa":            { min:3,  max:5,  label:"eVisa (UK digital visa)" },
      "sticker":           { min:15, max:21, label:"Standard Visitor Visa" },
      "sticker-extended":  { min:30, max:60, label:"Priority / Complex Case" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Direct Airside Transit Visa (DATV)" },
    },
  },
  schengen: {
    name: "Schengen Area", flag: "🇪🇺",
    types: {
      "e-visa":            { min:5,  max:10, label:"ETIAS (From 2025)" },
      "sticker":           { min:15, max:30, label:"Schengen Short-Stay Visa (C Visa)" },
      "sticker-extended":  { min:45, max:90, label:"Complex Case / Document Request" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Airport Transit Visa (ATV)" },
    },
  },
  australia: {
    name: "Australia", flag: "🇦🇺",
    types: {
      "e-visa":            { min:1,  max:3,   label:"ETA / eVisitor (601/651)" },
      "sticker":           { min:20, max:35,  label:"Visitor Visa (Subclass 600)" },
      "sticker-extended":  { min:60, max:120, label:"Complex Health/Character Check" },
      "transit":           { min:6,  max:24,  unit:"hours", label:"Transit Visa (771)" },
    },
  },
  "united-arab-emirates": {
    name: "United Arab Emirates", flag: "🇦🇪",
    types: {
      "e-visa":            { min:2,  max:4,  label:"UAE e-Visa (Tourist/Visit)" },
      "sticker":           { min:5,  max:10, label:"Visa on Arrival / Embassy Visa" },
      "sticker-extended":  { min:15, max:30, label:"Complex / Employment Visa" },
      "transit":           { min:6,  max:24, unit:"hours", label:"UAE Transit Visa (96-hr)" },
    },
  },
  germany: {
    name: "Germany", flag: "🇩🇪",
    types: {
      "sticker":           { min:15, max:21, label:"National Visa / Schengen Visa" },
      "sticker-extended":  { min:45, max:90, label:"Complex Case" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Airport Transit Visa (TATV)" },
    },
  },
  france: {
    name: "France", flag: "🇫🇷",
    types: {
      "e-visa":            { min:5,  max:10, label:"ETIAS (from 2025)" },
      "sticker":           { min:15, max:30, label:"Schengen C Visa / Long-Stay D Visa" },
      "sticker-extended":  { min:45, max:90, label:"Complex Case" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Airport Transit Visa" },
    },
  },
  "saudi-arabia": {
    name: "Saudi Arabia", flag: "🇸🇦",
    types: {
      "e-visa":            { min:2,  max:4,  label:"Saudi e-Visa (Tourist)" },
      "sticker":           { min:10, max:21, label:"Saudi Sticker Visa" },
      "sticker-extended":  { min:30, max:60, label:"Work / Iqama Visa" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Saudi Transit Visa" },
    },
  },
  singapore: {
    name: "Singapore", flag: "🇸🇬",
    types: {
      "e-visa":            { min:3,  max:5,  label:"Singapore e-Visa (SAVE)" },
      "sticker":           { min:7,  max:14, label:"Singapore Visit Visa" },
      "sticker-extended":  { min:21, max:45, label:"EP / Employment Pass" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Singapore Transit Visa" },
    },
  },
  japan: {
    name: "Japan", flag: "🇯🇵",
    types: {
      "sticker":           { min:5,  max:7,  label:"Japan Tourist Visa" },
      "sticker-extended":  { min:21, max:45, label:"Japan Long-Stay Visa" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Japan Transit Visa" },
    },
  },
  malaysia: {
    name: "Malaysia", flag: "🇲🇾",
    types: {
      "e-visa":            { min:1,  max:3,  label:"Malaysia eNTRI / eVisa" },
      "sticker":           { min:7,  max:14, label:"Malaysia Sticker Visa" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Malaysia Transit Visa" },
    },
  },
  thailand: {
    name: "Thailand", flag: "🇹🇭",
    types: {
      "e-visa":            { min:3,  max:5,  label:"Thailand eVisa" },
      "sticker":           { min:7,  max:14, label:"Thailand Tourist Visa" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Thailand Transit Visa" },
    },
  },
  "south-korea": {
    name: "South Korea", flag: "🇰🇷",
    types: {
      "e-visa":            { min:3,  max:5,  label:"Korea Electronic Visa (K-ETA)" },
      "sticker":           { min:5,  max:10, label:"Korea Tourist Visa (C-3)" },
      "sticker-extended":  { min:30, max:60, label:"Korea D-2/D-10 Student or Long-Stay" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Korea Transit Visa (TWOV)" },
    },
  },
  georgia: {
    name: "Georgia", flag: "🇬🇪",
    types: {
      "e-visa":            { min:1,  max:5,  label:"Georgia e-Visa" },
      "sticker":           { min:1,  max:1,  label:"Georgia Visa-Free Entry (365 days)" },
      "sticker-extended":  { min:30, max:60, label:"Georgia TRC (Temporary Residence)" },
      "transit":           { min:1,  max:3,  unit:"hours", label:"Georgia Transit (Visa-Free)" },
    },
  },
  armenia: {
    name: "Armenia", flag: "🇦🇲",
    types: {
      "e-visa":            { min:1,  max:3,  label:"Armenia e-Visa (evisa.am)" },
      "sticker":           { min:3,  max:5,  label:"Armenia Visa on Arrival" },
      "sticker-extended":  { min:30, max:60, label:"Armenia Residence Permit" },
      "transit":           { min:1,  max:3,  unit:"hours", label:"Armenia Transit Visa" },
    },
  },
  turkey: {
    name: "Turkey", flag: "🇹🇷",
    types: {
      "e-visa":            { min:1,  max:2,  label:"Turkey e-Visa (evisa.gov.tr)" },
      "sticker":           { min:10, max:21, label:"Turkey Sticker Visa" },
      "sticker-extended":  { min:30, max:60, label:"Turkey Residence / Long-Stay" },
      "transit":           { min:6,  max:24, unit:"hours", label:"Turkey Airport Transit Visa" },
    },
  },
};

// ── VISA TYPE LABELS ────────────────────────────────────────────────────────
const VISA_TYPE_LABELS = {
  "e-visa":           "E-Visa",
  "sticker":          "Sticker Visa",
  "sticker-extended": "Complex Case Visa",
  "transit":          "Transit Visa",
};

// ── ALL VISA TYPE KEYS (longest first to avoid partial matches) ─────────────
const VISA_TYPE_KEYS = ["sticker-extended", "e-visa", "sticker", "transit"];

// ── SLUG PARSER ─────────────────────────────────────────────────────────────
// ✅ type এখন slug-এর শেষে: "bangladeshi-...-for-canada-sticker"
function parseSlug(slug = "") {
  let visaType = "sticker";
  let baseSlug = slug;

  // longest match first ("sticker-extended" before "sticker")
  for (const t of VISA_TYPE_KEYS) {
    if (baseSlug.endsWith(`-${t}`)) {
      visaType = t;
      baseSlug = baseSlug.slice(0, -(t.length + 1));
      break;
    }
  }

  const marker = "-national-visa-processing-time-for-";
  const idx = baseSlug.indexOf(marker);
  if (idx === -1) return { natSlug: baseSlug, destSlug: "unknown", visaType };

  return {
    natSlug:  baseSlug.slice(0, idx),
    destSlug: baseSlug.slice(idx + marker.length),
    visaType,
  };
}

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
  };
}

function toName(slugPart) {
  const found = COUNTRIES.find(
    c => c.country.toLowerCase().replace(/\s+/g, "-") === slugPart
  );
  return found?.country ||
    slugPart.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

// ✅ Single shared function — generateMetadata ও page component উভয়ে use করে
// আগে দুটো আলাদা আলাদা same calculation করছিল
function getPageData(slug) {
  const { natSlug, destSlug, visaType } = parseSlug(slug);
  const natName     = toName(natSlug);
  const countryData = getCountryData(destSlug);
  const activeType  = countryData.types[visaType] ? visaType : "sticker";
  const rule        = countryData.types[activeType];
  const isHours     = rule?.unit === "hours";
  const timeStr     = isHours
    ? `${rule.min}–${rule.max} hours`
    : `${rule.min}–${rule.max} business days`;
  const visaLabel   = VISA_TYPE_LABELS[activeType] || "Visa";
  // baseSlug = type suffix ছাড়া — VisaTypeSwitcher-এ পাঠানো হবে
  const baseSlug    = visaType !== "sticker" || slug.endsWith("-sticker")
    ? slug.slice(0, slug.lastIndexOf(`-${visaType}`))
    : slug;

  return { natSlug, destSlug, natName, countryData, activeType, rule, isHours, timeStr, visaLabel, baseSlug };
}


// ── METADATA ───────────────────────────────────────────────────────────────
// ✅ searchParams নেই — params.slug থেকেই সব বের হয়
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "";

  const { natName, destSlug, countryData, timeStr, visaLabel, activeType } = getPageData(slug);
  const destName = countryData.name;

  const title       = `${natName} Visa Processing Time for ${destName} (${visaLabel}) 2026`;
  const description = `${natName} passport holders: ${destName} ${visaLabel} processing takes ${timeStr}. Learn what causes delays, pro tips to speed up your visa, and when to apply. Free tracker by Eammu.`;

  // ✅ Canonical-এ ?type= নেই — clean slug URL
  const canonical = `https://eammu.com/travel-resources/visa-processing-time-tracker/${slug}`;

  return {
    title,
    description,
    keywords: [
      `${natName} visa processing time ${destName}`,
      `${natName} ${destName} ${visaLabel.toLowerCase()} processing time`,
      `how long ${destName} visa takes ${natName}`,
      `${destName} ${visaLabel.toLowerCase()} ${natName} 2026`,
      `${natName} passport ${destName} visa duration`,
      `${destName} visa processing time 2026`,
      `${visaLabel.toLowerCase()} processing time`,
      "visa processing time tracker",
      "eammu visa tracker",
    ],
    openGraph: {
      title,
      description,
      url:      canonical,
      siteName: "Eammu",
      type:     "article",
      images: [{
        url:    `https://eammu.com/og/visa-processing-${destSlug}.jpg`,
        width:  1200,
        height: 630,
        alt:    `${natName} to ${destName} Visa Processing Time`,
      }],
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical },
    robots: {
      index: true, follow: true,
      googleBot: {
        index: true, follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet":       -1,
      },
    },
    other: {
      "article:published_time": "2025-01-01",
      // ✅ new Date() সরানো হয়েছে — এটা প্রতি request-এ আলাদা value দিয়ে cache break করছিল
      "article:modified_time":  "2026-01-01",
    },
  };
}

// ── JSON-LD ────────────────────────────────────────────────────────────────
function JsonLd({ natName, destName, visaLabel, timeStr }) {
  const data = {
    "@context": "https://schema.org",
    "@type":    "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name:    `How long does ${destName} ${visaLabel} take for ${natName} passport holders?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:   `${natName} passport holders applying for a ${destName} ${visaLabel} typically wait ${timeStr}. Processing time depends on embassy workload, seasonal demand, and application completeness.`,
        },
      },
      {
        "@type": "Question",
        name:    `What documents does a ${natName} citizen need for a ${destName} ${visaLabel}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:   `${natName} citizens need a valid passport (6+ months), photographs, bank statements, visa application form, and supporting documents specific to the ${visaLabel} type. Check the official embassy website for the complete list.`,
        },
      },
      {
        "@type": "Question",
        name:    `Can a ${natName} apply for ${destName} visa online?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:   `Depending on the visa type, ${natName} passport holders may be eligible to apply online for a ${destName} e-visa. Sticker visas and transit visas typically require in-person biometrics at an authorized visa application centre.`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ── PAGE ───────────────────────────────────────────────────────────────────
// ✅ searchParams parameter সম্পূর্ণ সরানো হয়েছে
export default async function VisaProcessingSlugPageSeo({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "";

  const { natName, countryData, timeStr, visaLabel } = getPageData(slug);

  return (
    <>
      <JsonLd
        natName={natName}
        destName={countryData.name}
        visaLabel={visaLabel}
        timeStr={timeStr}
      />
      {/* ✅ slug একটাই prop — searchParams পাঠানো হচ্ছে না */}
      <VisaProcessingSlugPage slug={slug} />
      <HomeSeoLinks />
    </>
  );
}