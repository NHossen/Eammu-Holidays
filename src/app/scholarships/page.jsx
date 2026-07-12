// app/scholarships/page.jsx — SERVER COMPONENT
// Full SEO: 7 JSON-LD schemas, 30+ keywords, rich metadata

import ScholarshipsClient from "@/Components/Client/ScholarshipsMain/ScholarshipsClient";
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import clientPromise from "@/app/lib/mongodb";

export const revalidate = 86400;

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://eammu.com"),

  title: {
    default: "Scholarships 2026 – Fully Funded Study Abroad for Bangladeshi Students | Eammu Holidays",
    template: "%s | Eammu Holidays Scholarships",
  },

  description:
    "Browse 850+ verified fully funded scholarships for Bangladeshi students in 2026. Fulbright, Chevening, DAAD, MEXT, CSC, Erasmus+, and more — covering tuition, living costs, and airfare. Expert application support from Bangladesh.",

  keywords: [
    // High-volume transactional
    "fully funded scholarships for bangladeshi students 2026",
    "scholarships for bangladeshi students",
    "study abroad scholarships bangladesh",
    "international scholarships 2026",
    "free scholarship for bangladeshi students",
    // Program-specific
    "fulbright scholarship bangladesh",
    "chevening scholarship bangladesh",
    "daad scholarship bangladesh",
    "erasmus scholarship bangladesh",
    "commonwealth scholarship bangladesh",
    "mext scholarship bangladesh",
    "csc scholarship bangladesh",
    "australia awards bangladesh",
    "türkiye burslari scholarship bangladesh",
    "gates cambridge scholarship",
    "vanier cgs scholarship",
    // Degree-level
    "fully funded masters scholarship bangladesh",
    "phd scholarship abroad for bangladeshi",
    "undergraduate scholarship for bangladeshi students",
    "bachelor scholarship abroad bangladesh",
    // Country-specific
    "scholarship to study in uk from bangladesh",
    "scholarship to study in usa from bangladesh",
    "scholarship to study in canada from bangladesh",
    "scholarship to study in germany from bangladesh",
    "scholarship to study in australia from bangladesh",
    "scholarship to study in japan from bangladesh",
    "scholarship to study in south korea from bangladesh",
    "scholarship to study in china from bangladesh",
    // Informational
    "how to apply for scholarship from bangladesh",
    "scholarship consultants bangladesh",
    "study abroad help bangladesh",
    "eammu holidays scholarship",
  ].join(", "),

  alternates: {
    canonical: "https://eammu.com/scholarships",
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
    url: "https://eammu.com/scholarships",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Scholarships 2026 – 850+ Fully Funded Programs for Bangladeshi Students",
    description:
      "Fulbright, Chevening, DAAD, MEXT, CSC, Erasmus+, and 850+ more — browse verified fully funded scholarships for 260+ countries. Expert guidance from Eammu Holidays Bangladesh.",
    images: [
      {
        url: "/og/scholarships-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Fully funded scholarships 2026 for Bangladeshi students — Eammu Holidays",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    creator: "@eammuholidays",
    title: "Scholarships 2026 — Fully Funded Study Abroad for Bangladeshi Students",
    description:
      "850+ verified scholarships for 260+ countries. Fulbright, Chevening, DAAD, MEXT & more.",
    images: ["/og/scholarships-2026.jpg"],
  },

  icons: {
    icon: "/emf.jpg",
    shortcut: "/emf.jpg",
    apple: "/emf.jpg",
  },

  other: {
    "geo.region": "BD",
    "geo.placename": "Bangladesh",
    "DC.language": "en",
    "DC.subject": "International Scholarships, Study Abroad, Higher Education Funding",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// STATIC DATA
// ─────────────────────────────────────────────────────────────────────────────
const popularScholarships = [
  { name: "Fulbright Program",       country: "USA",         slug: "united-states",  tag: "Fully Funded", emoji: "🇺🇸", deadline: "Oct 2025", coverage: "Full tuition + living + airfare" },
  { name: "Chevening Scholarship",   country: "UK",          slug: "united-kingdom", tag: "Fully Funded", emoji: "🇬🇧", deadline: "Nov 2025", coverage: "Full tuition + living + flights" },
  { name: "DAAD Scholarship",        country: "Germany",     slug: "germany",        tag: "Fully Funded", emoji: "🇩🇪", deadline: "Oct 2025", coverage: "Stipend + tuition + insurance" },
  { name: "Türkiye Bursları",        country: "Turkey",      slug: "turkey",         tag: "Fully Funded", emoji: "🇹🇷", deadline: "Feb 2026", coverage: "Tuition + accommodation + allowance" },
  { name: "Australia Awards",        country: "Australia",   slug: "australia",      tag: "Fully Funded", emoji: "🇦🇺", deadline: "Apr 2026", coverage: "Full tuition + living + return airfare" },
  { name: "Vanier CGS",             country: "Canada",      slug: "canada",         tag: "PhD",          emoji: "🇨🇦", deadline: "Nov 2025", coverage: "CAD $50,000/year" },
  { name: "Erasmus+ Program",        country: "Europe",      slug: "europe",         tag: "Exchange",     emoji: "🇪🇺", deadline: "Mar 2026", coverage: "Monthly grant + travel allowance" },
  { name: "Gates Cambridge",         country: "UK",          slug: "united-kingdom", tag: "PhD",          emoji: "🇬🇧", deadline: "Dec 2025", coverage: "Full cost of study at Cambridge" },
  { name: "CSC Scholarship",         country: "China",       slug: "china",          tag: "Fully Funded", emoji: "🇨🇳", deadline: "Mar 2026", coverage: "Tuition + accommodation + stipend" },
  { name: "MEXT Scholarship",        country: "Japan",       slug: "japan",          tag: "Fully Funded", emoji: "🇯🇵", deadline: "May 2026", coverage: "Tuition + living + airfare" },
  { name: "KGSP Scholarship",        country: "South Korea", slug: "south-korea",    tag: "Fully Funded", emoji: "🇰🇷", deadline: "Sep 2025", coverage: "Tuition + living + language training" },
  { name: "NZ Excellence Awards",   country: "New Zealand", slug: "new-zealand",    tag: "Fully Funded", emoji: "🇳🇿", deadline: "Mar 2026", coverage: "Full tuition + living + establishment" },
];

const seoTextBlocks = [
  {
    heading: "Why Use Eammu Holidays' Scholarship Database?",
    body: "We manually verify every scholarship listing — checking official embassy sources, funding scope, GPA requirements, and 2026 deadlines before publishing. Our database covers government flagship programs like Fulbright, Chevening, DAAD, and MEXT, as well as university-direct awards and private foundation grants across every continent. All links go directly to official scholarship portals — no third-party redirects.",
  },
  {
    heading: "How to Find the Right Scholarship from Bangladesh",
    body: "Start by selecting your target country from our 260+ country database, then filter by degree level (Bachelor's, Master's, or PhD). Each listing clearly shows the minimum GPA requirement, English language score requirement (IELTS/TOEFL), application deadline, and exact funding coverage — so you know precisely what you're applying for and whether you're eligible before investing time in the application.",
  },
  {
    heading: "Fully Funded vs Partial Scholarships — What's the Difference?",
    body: "Fully funded scholarships cover 100% of your education costs: tuition fees, monthly living allowance, round-trip airfare, and health insurance — at zero cost to you. Programs like Fulbright, Chevening, and MEXT are fully funded. Partial awards typically cover tuition only, leaving living costs to the student. We clearly tag each program so you can filter to fully funded opportunities and plan to study abroad at zero cost.",
  },
  {
    heading: "How to Write a Winning Scholarship Application",
    body: "A successful scholarship application from Bangladesh requires: a compelling Statement of Purpose (SOP) that addresses your specific research interests and career goals, strong academic references from professors who know your work, a realistic study plan that aligns with the host country's education system, and clear documentation of financial need or merit. Use our Travel Document Generator for SOP drafts and cover letter templates.",
  },
  {
    heading: "IELTS and English Requirements for International Scholarships",
    body: "Most fully funded scholarships require English proficiency proof. Fulbright and Chevening typically require IELTS 6.5–7.0. DAAD (Germany) offers many English-taught programs with an IELTS 6.0 minimum. CSC (China) and MEXT (Japan) may waive requirements if the program is in English. Our IELTS preparation center in Bangladesh helps you hit the score you need for your target scholarship.",
  },
  {
    heading: "Scholarship Deadlines — 2026 Application Calendar",
    body: "Missing a deadline means waiting another full year. Most competitive scholarships close between October and February for the following academic year. Fulbright closes in October, Chevening in November, DAAD in October, KGSP in September, and Australia Awards in April. Set your target scholarship now, prepare documents 3 months in advance, and apply before the deadline with our consultant's review.",
  },
];

const faqItems = [
  {
    q: "What is a fully funded scholarship for Bangladeshi students?",
    a: "A fully funded scholarship covers all costs of studying abroad — including 100% tuition fees, monthly living allowance (typically $500–$2,000/month depending on country), round-trip international airfare, and health insurance. Programs like Fulbright (USA), Chevening (UK), DAAD (Germany), MEXT (Japan), and Australia Awards are fully funded. You pay nothing to attend — the scholarship covers everything.",
  },
  {
    q: "How do I apply for international scholarships from Bangladesh in 2026?",
    a: "Select your target country and degree level. Review eligibility criteria — especially GPA requirements (usually 3.0–3.5/4.0 or equivalent), English language scores, and nationality restrictions. Prepare your SOP, academic transcripts, reference letters, and passport. Apply directly through the official scholarship portal before the posted deadline. Eammu Holidays provides document preparation and application review support.",
  },
  {
    q: "What IELTS score do I need for fully funded scholarships?",
    a: "Requirements vary by program: Chevening (UK) requires IELTS 6.5 minimum; Fulbright (USA) requires TOEFL 80 or IELTS 6.5+; DAAD (Germany) typically requires IELTS 6.0 for English-taught programs; Australia Awards require IELTS 6.5 overall; CSC (China) programs taught in English may require IELTS 6.0. Some programs like MEXT (Japan) accept applicants without IELTS if applying for Japanese-taught programs. Our IELTS center in Bangladesh helps you prepare.",
  },
  {
    q: "Can I apply for multiple scholarships at the same time from Bangladesh?",
    a: "Yes — and it's strongly recommended. Apply to 5–10 scholarships simultaneously to maximize your chances. Prioritize fully funded programs that match your field of study and GPA. Some scholarships like Chevening and Fulbright require you to disclose other applications. Apply early, keep copies of all documents, and track deadlines carefully.",
  },
  {
    q: "What scholarships are available for Master's students from Bangladesh?",
    a: "Top fully funded Master's scholarships for Bangladeshi students include: Chevening Scholarship (UK) — 1-year Master's at any UK university; DAAD (Germany) — wide range of Master's programs; Erasmus Mundus (Europe) — joint degree across 2–3 European universities; Türkiye Bursları (Turkey); CSC (China); and Australia Awards. Each covers full tuition and living costs.",
  },
  {
    q: "Are there PhD scholarships available from Bangladesh?",
    a: "Yes. Top PhD scholarships for Bangladeshi students include: Vanier CGS (Canada) — CAD $50,000/year; Gates Cambridge (UK) — full cost at Cambridge University; MEXT (Japan) — full tuition + living allowance; CSC (China) — full PhD funding; Commonwealth Scholarship — PhD at UK universities. Most PhD scholarships require a research proposal and a confirmed supervisor at the host university.",
  },
  {
    q: "How can Eammu Holidays help with my scholarship application?",
    a: "Eammu Holidays provides end-to-end scholarship application support from Bangladesh: SOP (Statement of Purpose) drafting and review, document preparation (transcripts, certificates, reference letters), IELTS preparation through our Target IELTS center, university shortlisting and application submission, and student visa processing after scholarship confirmation. Contact our Dhaka office for a free consultation.",
  },
  {
    q: "Which country has the highest scholarship acceptance rate for Bangladeshi students?",
    a: "Based on historical data, Germany (DAAD), Turkey (Türkiye Bursları), and China (CSC) have relatively higher acceptance rates for Bangladeshi applicants compared to highly competitive programs like Fulbright and Chevening. Japan (MEXT), South Korea (KGSP), and Malaysia also have good acceptance rates. The key factor is matching your academic profile to the scholarship's specific requirements.",
  },
];

const stats = [
  { label: "Total Scholarships", value: "850+", icon: "🏆", sub: "Verified programs" },
  { label: "Countries Covered",  value: "260+", icon: "🌍", sub: "Worldwide" },
  { label: "Fully Funded",       value: "400+", icon: "💰", sub: "Zero cost programs" },
  { label: "Avg. Acceptance",    value: "94%",  icon: "📈", sub: "With our support" },
];

const degreeLinks = [
  { label: "Bachelor's Scholarships",     href: "/scholarships" },
  { label: "Master's Scholarships",       href: "/scholarships" },
  { label: "PhD Scholarships",            href: "/scholarships" },
  { label: "Fully Funded Only",           href: "/scholarships" },
  { label: "No IELTS Required",           href: "/scholarships" },
];

const dynamicHeadlines = [
  { title: "850+ Verified",    highlight: "Scholarships",       subtitle: "for Bangladeshi Students 2026" },
  { title: "Study Abroad",     highlight: "Fully Funded",       subtitle: "— Zero Cost Programs Worldwide" },
  { title: "Fulbright to",     highlight: "Erasmus+",           subtitle: "Every Major Scholarship, One Place" },
];

const dynamicSubtitles = [
  "Browse 850+ verified fully funded scholarships covering tuition, living costs, and airfare — updated with 2026 deadlines.",
  "Fulbright, Chevening, DAAD, MEXT, CSC, Australia Awards, and 844 more programs across 260+ countries.",
  "Filter by degree level, country, and funding type. Apply directly through official links — expert guidance available.",
];

const featuredCodes = ["us", "gb", "ca", "au", "de", "tr", "jp", "kr"];

const internalLinks = [
  { label: "Student Visa from Bangladesh",         href: "/our-services/visa-services/student-visa-from-bangladesh" },
  { label: "Study Abroad Guide",                   href: "/study-abroad" },
  { label: "Student Visa Hub",                     href: "/study-abroad/student-visa" },
  { label: "IELTS & Immigration Center",           href: "/target-ielts-immigration-center" },
  { label: "USA Visa Interview Preparation",       href: "/target-usa-visa-interview-preparation" },
  { label: "UK Visa Application",                  href: "/our-services/visa/uk-visa-application" },
  { label: "Canada Visa Application",              href: "/our-services/visa/canada-visa-application" },
  { label: "USA Visa Application",                 href: "/our-services/visa/usa-visa-application" },
  { label: "Australia Visa Application",           href: "/our-services/visa/australia-visa-application" },
  { label: "Germany Visa Application",             href: "/our-services/visa/germany-visa-application" },
  { label: "Japan Visa Application",               href: "/our-services/visa/japan-visa-application" },
  { label: "South Korea Visa Application",         href: "/our-services/visa/south-korea-visa-application" },
  { label: "Visa Guide 2026",                      href: "/visa/visa-guide" },
  { label: "Visa Rejection Checker",               href: "/visa-rejection" },
  { label: "Visa Checklist Generator",             href: "/travel-resources/visa-checklist-generator" },
  { label: "Processing Time Tracker",              href: "/travel-resources/visa-processing-time-tracker" },
  { label: "Travel Document Generator",            href: "/travel-resources/travel-document-generator" },
  { label: "Bangladesh Office",                    href: "/contact/travel-agency-bangladesh" },
  { label: "Dubai Office",                         href: "/contact/travel-agency-dubai" },
  { label: "All Visa Services",                    href: "/visa" },
  { label: "Work Visa from Bangladesh",            href: "/our-services/visa-services/work-visa-from-bangladesh" },
  { label: "Tourist Visa from Bangladesh",         href: "/our-services/visa-services/tourist-visa-from-bangladesh" },
];

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD SCHEMAS
// ─────────────────────────────────────────────────────────────────────────────
function buildSchemas() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://eammu.com/#organization",
    name: "Eammu Holidays",
    url: "https://eammu.com",
    logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" },
    description: "Bangladesh-based visa consultancy and scholarship guidance center helping students secure fully funded international scholarships and student visas.",
    areaServed: { "@type": "Country", name: "Bangladesh" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1247", bestRating: "5" },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://eammu.com/scholarships#webpage",
    url: "https://eammu.com/scholarships",
    name: "Scholarships 2026 – 850+ Fully Funded Programs for Bangladeshi Students",
    description: "Browse 850+ verified fully funded scholarships for Bangladeshi students. Fulbright, Chevening, DAAD, MEXT, CSC, Erasmus+, Australia Awards, and more — updated 2026.",
    isPartOf: { "@type": "WebSite", "@id": "https://eammu.com/#website", url: "https://eammu.com", name: "Eammu Holidays" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",         item: "https://eammu.com" },
        { "@type": "ListItem", position: 2, name: "Study Abroad", item: "https://eammu.com/study-abroad" },
        { "@type": "ListItem", position: 3, name: "Scholarships", item: "https://eammu.com/scholarships" },
      ],
    },
    primaryImageOfPage: { "@type": "ImageObject", url: "https://eammu.com/og/scholarships-2026.jpg", width: 1200, height: 630 },
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: "en-US",
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".seo-speakable"] },
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://eammu.com/scholarships#service",
    name: "International Scholarship Guidance & Application Support",
    provider: { "@id": "https://eammu.com/#organization" },
    serviceType: "Scholarship Consultancy",
    description: "End-to-end scholarship application support for Bangladeshi students — SOP writing, document preparation, university shortlisting, IELTS preparation, and student visa processing after scholarship confirmation.",
    areaServed: { "@type": "Country", name: "Bangladesh" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Scholarship Programs",
      itemListElement: popularScholarships.slice(0, 6).map(s => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${s.name} Application Support`,
          url: `https://eammu.com/scholarships/${s.slug}`,
        },
      })),
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1247", bestRating: "5" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://eammu.com/scholarships#article",
    headline: "Scholarships 2026 – 850+ Fully Funded Programs for Bangladeshi Students",
    description: "Complete guide to fully funded international scholarships for Bangladeshi students — Fulbright, Chevening, DAAD, MEXT, CSC, Australia Awards, and 844 more.",
    image: { "@type": "ImageObject", url: "https://eammu.com/og/scholarships-2026.jpg", width: 1200, height: 630 },
    datePublished: "2024-01-01T00:00:00Z",
    dateModified: new Date().toISOString(),
    author: { "@type": "Organization", name: "Eammu Holidays", url: "https://eammu.com" },
    publisher: { "@type": "Organization", name: "Eammu Holidays", logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" } },
    mainEntityOfPage: "https://eammu.com/scholarships",
    keywords: "fully funded scholarships bangladeshi students, fulbright scholarship bangladesh, chevening scholarship bangladesh, daad scholarship bangladesh",
    articleSection: "Scholarships",
    inLanguage: "en-US",
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top Fully Funded Scholarships 2026",
    description: "Most popular fully funded scholarships for Bangladeshi students in 2026",
    url: "https://eammu.com/scholarships",
    numberOfItems: popularScholarships.length,
    itemListElement: popularScholarships.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      description: `${s.name} — ${s.country} — ${s.tag} — ${s.coverage}`,
      url: `https://eammu.com/scholarships/${s.slug}`,
    })),
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Apply for Fully Funded Scholarships from Bangladesh — 2026 Guide",
    description: "Step-by-step guide for Bangladeshi students applying for international fully funded scholarships.",
    totalTime: "P90D",
    step: [
      { "@type": "HowToStep", position: 1, name: "Choose your target scholarship", text: "Browse our database and filter by country, degree level, and funding type. Match your GPA and IELTS score to the scholarship's requirements.", url: "https://eammu.com/scholarships" },
      { "@type": "HowToStep", position: 2, name: "Prepare your IELTS score", text: "Most fully funded scholarships require IELTS 6.5+. Enroll in our IELTS preparation center in Bangladesh to hit your target score.", url: "https://eammu.com/target-ielts-immigration-center" },
      { "@type": "HowToStep", position: 3, name: "Write your Statement of Purpose", text: "Draft a compelling SOP addressing your research interests, career goals, and why this specific scholarship and country. Use our Travel Document Generator for SOP templates.", url: "https://eammu.com/travel-resources/travel-document-generator" },
      { "@type": "HowToStep", position: 4, name: "Collect supporting documents", text: "Gather academic transcripts, reference letters, passport copy, bank statements, and any scholarship-specific forms. Use our Visa Checklist Generator for a complete list.", url: "https://eammu.com/travel-resources/visa-checklist-generator" },
      { "@type": "HowToStep", position: 5, name: "Submit application before deadline", text: "Apply directly through the official scholarship portal before the stated deadline. Have Eammu Holidays review your application package before submission.", url: "https://eammu.com/contact" },
      { "@type": "HowToStep", position: 6, name: "Apply for student visa after confirmation", text: "Once scholarship is confirmed, apply for your student visa. Eammu Holidays handles the complete student visa process from Bangladesh.", url: "https://eammu.com/our-services/visa-services/student-visa-from-bangladesh" },
    ],
  };

  return { organization, webPage, service, faqSchema, article, itemList, howTo };
}

// ─────────────────────────────────────────────────────────────────────────────
// MONGODB FETCH
// ─────────────────────────────────────────────────────────────────────────────
async function getCountries() {
  try {
    const client = await clientPromise;
    const db     = client.db("Eammu-Holidays");
    return await db
      .collection("countries")
      .find({})
      .project({ _id: 0, country: 1, flag: 1, code: 1 })
      .sort({ country: 1 })
      .toArray();
  } catch (err) {
    console.error("MongoDB fetch error:", err.message);
    return [];
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// SERVER COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default async function ScholarshipsPage() {
  const countries = await getCountries();
  const schemas   = buildSchemas();

  const headlineIdx = 0; // stable SSG — no random
  const subtitleIdx = 0;

  return (
    <>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.howTo) }} />

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
        internalLinks={internalLinks}
      />

      <HomeSeoLinks />
    </>
  );
}