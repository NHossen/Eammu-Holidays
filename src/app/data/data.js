import { Globe, Clock, Users, Star } from "lucide-react";

// ── VISA TYPES ─────────────────────────────────────────────────────────────
export const VISA_TYPES = [
  { value: "e-visa",           label: "E-Visa (Online)",        icon: "⚡" },
  { value: "sticker",          label: "Sticker Visa",           icon: "🏷️" },
  { value: "sticker-extended", label: "Sticker (Complex Case)", icon: "📋" },
  { value: "transit",          label: "Transit Visa",           icon: "🔁" },
];

// ── POPULAR SEARCHES ────────────────────────────────────────────────────────
export const POPULAR = [
  { nationality: "Bangladesh", destination: "Canada",               type: "sticker",  searches: "18.4K/mo" },
  { nationality: "Bangladesh", destination: "United States",        type: "sticker",  searches: "14.1K/mo" },
  { nationality: "Bangladesh", destination: "United Kingdom",       type: "sticker",  searches: "12.8K/mo" },
  { nationality: "India",      destination: "Canada",               type: "sticker",  searches: "9.6K/mo"  },
  { nationality: "Bangladesh", destination: "Schengen",             type: "sticker",  searches: "8.3K/mo"  },
  { nationality: "Pakistan",   destination: "United Arab Emirates", type: "e-visa",   searches: "7.1K/mo"  },
  { nationality: "Nigeria",    destination: "United Kingdom",       type: "sticker",  searches: "6.9K/mo"  },
  { nationality: "Bangladesh", destination: "Australia",            type: "sticker",  searches: "5.7K/mo"  },
  { nationality: "Bangladesh", destination: "Germany",              type: "sticker",  searches: "4.9K/mo"  },
  { nationality: "Bangladesh", destination: "United Arab Emirates", type: "transit",  searches: "4.1K/mo"  },
];

// ── STATS ───────────────────────────────────────────────────────────────────
export const STATS = [
  { label: "Countries Covered",  value: "195+",   icon: Globe  },
  { label: "Processing Times",   value: "1,200+", icon: Clock  },
  { label: "Monthly Users",      value: "42K+",   icon: Users  },
  { label: "Avg. Accuracy",      value: "94%",    icon: Star   },
];

// ── HOW IT WORKS DATA ───────────────────────────────────────────────────────
export const HOW_IT_WORKS = [
  {
    colorClass: "bg-blue-500",
    iconType: "zap",
    title: "Transit Visa (6–24 Hrs)",
    desc: "For layovers and airport transit. Usually decided the same day or overnight. Required when passing through certain countries even without leaving the airport.",
    tags: ["UK Transit", "UAE Transit", "Germany TATV"],
  },
  {
    colorClass: "bg-amber-400",
    iconType: "zap",
    title: "E-Visa (2–4 Days)",
    desc: "Online applications processed through automated systems. Ideal for UAE, Turkey, Sri Lanka, India. Approval emailed directly.",
    tags: ["UAE", "Turkey", "India", "Sri Lanka"],
  },
  {
    colorClass: "bg-[#005a31]",
    iconType: "clock",
    title: "Sticker Visa (15–21 Days)",
    desc: "Physical visa stamped in passport. Biometrics, sometimes interview, document verification. Standard for USA, UK, Canada, Schengen.",
    tags: ["USA", "UK", "Canada", "Schengen"],
  },
  {
    colorClass: "bg-slate-800",
    iconType: "alert",
    title: "Extended Cases (45–60 Days)",
    desc: "Complex background checks, administrative processing, or peak demand. Can happen for any nationality if additional documents are requested.",
    tags: ["Admin Processing", "Background Check", "High Season"],
  },
];

// ── SLUG HELPER ─────────────────────────────────────────────────────────────
export function makeSlug(nationality, destination) {
  const nat  = nationality.toLowerCase().replace(/\s+/g, "-");
  const dest = destination.toLowerCase().replace(/\s+/g, "-");
  return `${nat}-national-visa-processing-time-for-${dest}`;
}