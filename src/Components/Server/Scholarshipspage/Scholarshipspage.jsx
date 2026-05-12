// app/scholarships/page.jsx  ← SERVER COMPONENT (no "use client")
// Fetches data on the server, passes to client component

import ScholarshipsClient from "@/Components/Client/ScholarshipsMain/ScholarshipsClient";



const seoTextBlocks = [
  {
    heading: "Why Use Our Scholarship Database?",
    body: "We manually verify every scholarship listed — checking official links, funding scope, and deadlines before publishing. Our database covers government programs like Fulbright and Chevening, university-direct awards, and private foundation grants across every continent.",
  },
  {
    heading: "How to Find the Right Scholarship",
    body: "Start by selecting your target country, then filter by degree level (Bachelor's, Master's, or PhD). Each listing shows the minimum GPA, language requirements, application deadline, and exact coverage — so you know exactly what you're applying for.",
  },
  {
    heading: "Fully Funded vs Partial Scholarships",
    body: "Fully funded scholarships cover 100% of your tuition, plus living allowance, airfare, and health insurance. Partial awards typically cover tuition only. We tag each program clearly so you can filter to fully funded opportunities and study abroad at zero cost.",
  },
];

const popularScholarships = [
  { name: "Fulbright Program",    country: "USA",         slug: "united-states",  tag: "Fully Funded", emoji: "🇺🇸" },
  { name: "Chevening Scholarship",country: "UK",          slug: "united-kingdom", tag: "Fully Funded", emoji: "🇬🇧" },
  { name: "DAAD Scholarship",     country: "Germany",     slug: "germany",        tag: "Fully Funded", emoji: "🇩🇪" },
  { name: "Türkiye Bursları",     country: "Turkey",      slug: "turkey",         tag: "Fully Funded", emoji: "🇹🇷" },
  { name: "Australia Awards",     country: "Australia",   slug: "australia",      tag: "Fully Funded", emoji: "🇦🇺" },
  { name: "Vanier CGS",           country: "Canada",      slug: "canada",         tag: "PhD",          emoji: "🇨🇦" },
  { name: "Erasmus+ Program",     country: "Europe",      slug: "europe",         tag: "Exchange",     emoji: "🇪🇺" },
  { name: "Gates Cambridge",      country: "UK",          slug: "united-kingdom", tag: "PhD",          emoji: "🇬🇧" },
  { name: "CSC Scholarship",      country: "China",       slug: "china",          tag: "Fully Funded", emoji: "🇨🇳" },
  { name: "MEXT Scholarship",     country: "Japan",       slug: "japan",          tag: "Fully Funded", emoji: "🇯🇵" },
  { name: "KGSP Scholarship",     country: "South Korea", slug: "south-korea",    tag: "Fully Funded", emoji: "🇰🇷" },
  { name: "NZ Scholarship",       country: "New Zealand", slug: "new-zealand",    tag: "Fully Funded", emoji: "🇳🇿" },
];

const dynamicHeadlines = [
  { title: "Your Future",   highlight: "Scholarship",   subtitle: "Starts Here" },
  { title: "Discover",      highlight: "Fully Funded",  subtitle: "Opportunities Worldwide" },
  { title: "Study Abroad",  highlight: "For Free",      subtitle: "in 2026" },
];

const dynamicSubtitles = [
  "Explore 850+ verified fully funded programs across 260+ countries. Filter by degree, country, and funding type.",
  "Find scholarships that cover full tuition, living costs, and travel — updated with 2026 deadlines.",
  "International students worldwide secured funding through our database. Start your search today.",
];

const faqItems = [
  {
    q: "What is a fully funded scholarship?",
    a: "A fully funded scholarship covers all costs of study including tuition fees, monthly living allowance, round-trip airfare, and health insurance. Programs like Fulbright, Chevening, and DAAD are fully funded.",
  },
  {
    q: "How do I apply for international scholarships in 2026?",
    a: "Start by selecting your target country and degree level. Review each scholarship's eligibility criteria — especially GPA and language score requirements. Apply directly through the official link on each listing before the posted deadline.",
  },
  {
    q: "Can I apply to multiple scholarships at the same time?",
    a: "Yes. It is strongly recommended to apply to 5–10 scholarships simultaneously to maximize your chances. Prioritize fully funded programs in countries that match your field of study.",
  },
  {
    q: "Do I need IELTS or TOEFL for these scholarships?",
    a: "Most international scholarships require proof of English proficiency. The most common requirement is IELTS 6.5+ for Master's programs and 7.0+ for competitive programs like Fulbright. Some countries like Germany and Turkey have programs taught in English with relaxed requirements.",
  },
];

const stats = [
  { label: "Total Scholarships", value: "850+", icon: "🏆" },
  { label: "Countries Covered",  value: "260+", icon: "🌍" },
  { label: "Success Rate",       value: "94%",  icon: "📈" },
  { label: "Fully Funded",       value: "400+", icon: "💰" },
];

const degreeLinks = [
  { label: "Bachelor's",      href: "/scholarships" },
  { label: "Master's",        href: "/scholarships" },
  { label: "PhD",             href: "/scholarships" },
  { label: "Fully Funded Only", href: "/scholarships" },
];

const featuredCodes = ['us', 'gb', 'ca', 'au', 'de', 'tr'];

// ─── Server-side data fetch ───────────────────────────────────────────────────
// ✅ REPLACE with this (direct DB):
import clientPromise from '@/app/lib/mongodb';

async function getCountries() {
  try {
    const client = await clientPromise;
    const db = client.db('Eammu-Holidays');
    const countries = await db
      .collection('countries')
      .find({})
      .project({ _id: 0, country: 1, flag: 1, code: 1 })
      .sort({ country: 1 })
      .toArray();
    return countries;
  } catch (err) {
    console.error('MongoDB fetch error:', err.message);
    return [];
  }
}

// ─── JSON-LD (server-rendered, great for SEO) ─────────────────────────────────
function SchemaScript() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Scholarships 2026 – Fully Funded Opportunities in 260+ Countries",
    "description": "Browse 850+ verified scholarships for international students in 2026.",
    "url": "https://yoursite.com/scholarships",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",         "item": "https://yoursite.com" },
        { "@type": "ListItem", "position": 2, "name": "Scholarships", "item": "https://yoursite.com/scholarships" },
      ],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Server Component (default export) ───────────────────────────────────────
export default async function ScholarshipsPage() {
  const countries = await getCountries();

  // Pick random headline/subtitle indices on the server (stable per request)
  const headlineIdx = Math.floor(Math.random() * dynamicHeadlines.length);
  const subtitleIdx = Math.floor(Math.random() * dynamicSubtitles.length);

  return (
    <>
      <SchemaScript />

      {/*
        Pass all static data as props to the Client Component.
        The client component handles: search state, dropdown, pagination,
        and any other interactive behaviour.
      */}
      <ScholarshipsClient 
        countries={countries}
        headline={dynamicHeadlines[headlineIdx]}
        subtitle={dynamicSubtitles[subtitleIdx]}
        popularScholarships={popularScholarships}
        seoTextBlocks={seoTextBlocks}
        faqItems={faqItems}
        stats={stats}
        degreeLinks={degreeLinks}
        featuredCodes={featuredCodes}
      />

      </>

  );
}