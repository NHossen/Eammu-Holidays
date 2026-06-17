// app/travel-resources/visa-processing-time-tracker/page.jsx
// SERVER COMPONENT — metadata + structured data live here

import VisaProcessingTimeTracker from "@/Components/Client/VisaProcessingTimeTracker/VisaProcessingTimeTracker";
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";

export const revalidate    = 86400;  // cache each page 24h
// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Visa Processing Time Tracker 2026 — Check Wait Times by Country & Visa Type | Eammu Holidays",
    template: "%s | Eammu Holidays Visa Processing Time Tracker",
  },

  description:
    "Check exact visa processing times for 2026 — by nationality, destination country, and visa type (e-visa, sticker, transit, extended). Real-time data for USA, UK, Schengen, Canada, Japan, Australia & 200+ countries. Used by 42,000+ travelers monthly.",

  keywords: [
    // Primary intent
    "visa processing time tracker 2026",
    "how long does visa processing take",
    "visa processing time by country",
    "visa wait time tracker",
    "visa processing time calculator",
    // Visa type queries
    "e-visa processing time 2026",
    "sticker visa processing time",
    "transit visa processing time",
    "schengen visa processing time",
    "tourist visa processing time 2026",
    // Country-specific
    "USA visa processing time Bangladesh",
    "UK visa processing time 2026",
    "Canada visa processing time 2026",
    "Japan visa processing time Bangladesh",
    "Australia visa processing time UAE",
    "Schengen visa processing time 2026",
    "Germany visa processing time",
    "France visa processing time Bangladesh",
    // Location-specific
    "VFS processing time Dubai",
    "VFS processing time Bangladesh",
    "embassy visa processing time 2026",
    "visa processing time UAE residents",
    // Tool queries
    "visa processing time checker",
    "check visa processing time",
    "visa appointment wait time",
    "visa approval time",
    "how long for visa approval",
    "visa timeline 2026",
    "visa status tracker",
  ],

  alternates: {
    canonical: "https://www.eammu.com/travel-resources/visa-processing-time-tracker",
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
    url: "https://www.eammu.com/travel-resources/visa-processing-time-tracker",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title:
      "Visa Processing Time Tracker 2026 — Check Wait Times by Country & Visa Type",
    description:
      "Real-time visa processing times for 200+ countries. Check e-visa, sticker, transit & Schengen wait times by nationality. Used by 42,000+ travelers monthly.",
    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Visa processing time tracker 2026 — Eammu Holidays",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@EammuHolidays",
    title: "Visa Processing Time Tracker 2026 | Eammu Holidays",
    description:
      "Check exact visa wait times for USA, UK, Schengen, Canada & 200+ countries. E-visa, sticker, transit & extended visa processing times.",
    images: ["/eammu_banner_four.webp"],
  },

  icons: { icon: "/emf.jpg", apple: "/emf.jpg" },
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
    "Bangladesh's leading tourist visa consultancy with offices in Cumilla and Dubai. Expert visa processing time guidance for 200+ countries.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "3241",
    bestRating: "5",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.eammu.com/travel-resources/visa-processing-time-tracker/#webpage",
  url: "https://www.eammu.com/travel-resources/visa-processing-time-tracker",
  name: "Visa Processing Time Tracker 2026 — Check Wait Times by Country & Visa Type",
  description:
    "Real-time visa processing times for 200+ countries by nationality, destination, and visa type.",
  inLanguage: "en-US",
  dateModified: new Date().toISOString().split("T")[0],
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.eammu.com/#website",
    name: "Eammu Holidays",
    url: "https://www.eammu.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.eammu.com/travel-resources/visa-processing-time-tracker?nationality={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#tracker-heading", "#faq-heading", "#seo-guide-heading"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",             item: "https://www.eammu.com" },
    { "@type": "ListItem", position: 2, name: "Travel Resources", item: "https://www.eammu.com/travel-resources" },
    { "@type": "ListItem", position: 3, name: "Visa Processing Time Tracker 2026", item: "https://www.eammu.com/travel-resources/visa-processing-time-tracker" },
  ],
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": "https://www.eammu.com/travel-resources/visa-processing-time-tracker/#app",
  name: "Visa Processing Time Tracker",
  url: "https://www.eammu.com/travel-resources/visa-processing-time-tracker",
  applicationCategory: "TravelApplication",
  operatingSystem: "Web",
  description:
    "Free online tool to check visa processing times for 200+ countries by nationality, destination, and visa type (e-visa, sticker, transit, extended).",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "2847",
    bestRating: "5",
  },
  provider: { "@id": "https://www.eammu.com/#organization" },
  featureList: [
    "Check e-visa processing times by nationality",
    "Check sticker visa processing times",
    "Check transit visa processing times",
    "Real-time VFS Global processing data",
    "Schengen visa wait time by country",
    "USA, UK, Canada, Japan, Australia processing times",
    "200+ destination countries covered",
    "Updated weekly from official embassy sources",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does visa processing take in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visa processing times in 2026 vary significantly by type: Transit visa — 6 to 24 hours (fastest). E-visa — 2 to 4 business days. Sticker/standard tourist visa — 15 to 21 business days after biometrics. USA B1/B2 — 2 to 6 months (interview wait). UK Standard Visitor — 3 to 8 weeks. Schengen — 15 working days. Canada TRV — 4 to 12 weeks. Japan — 4 to 7 business days. Australia subclass 600 — 4 to 8 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What affects visa processing time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key factors affecting visa processing time: (1) Visa type — transit, e-visa, sticker, or extended stay. (2) Your nationality and bilateral relations with the destination. (3) Embassy backlog and seasonal demand — summer and holidays add 2–3 weeks. (4) Whether biometrics or an in-person interview is required. (5) Application completeness — missing documents cause major delays. (6) Administrative processing or security checks — can add 45–60+ days unpredictably.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a Schengen visa take to process in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Schengen visa processing takes 15 working days from the date of application submission in 2026. This is the legal maximum under Schengen rules. In practice, most applications are decided in 5–10 working days. Apply at least 3 weeks before your travel date. Summer months (June–August) and Christmas see higher backlogs — apply 6 weeks in advance during peak periods.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a UK visa take to process from Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UK Standard Visitor Visa processing takes 3 to 8 weeks from Bangladesh in 2026. Priority service is available at some VFS Global centres for an additional fee, reducing processing to approximately 5 working days. Super Priority processing can give a same-day decision in some cases. Standard processing from Dhaka through VFS Global is typically 15–21 working days.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a USA visa take to process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "USA B1/B2 tourist visa processing in 2026 depends primarily on the interview appointment wait time. The interview wait at the US Embassy Dhaka can be 2 to 6 months. After the interview, visa processing itself takes 2–5 business days. Administrative Processing (AP) can add 60–120+ days without a guaranteed timeline. Total timeline: plan for 3 to 8 months minimum.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between e-visa and sticker visa processing time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "E-visa processing is automated and typically takes 2 to 4 business days because it is processed online without an in-person appointment or biometrics. Sticker visa (traditional visa in your passport) requires physical document submission, biometrics, and sometimes an interview — typically 15 to 21 business days. E-visas are available for Turkey, India, Sri Lanka, Egypt, Kenya, Azerbaijan, and 40+ more countries.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a Japan visa take to process from Bangladesh or Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Japan tourist visa processing takes 4 to 7 business days from both Bangladesh and Dubai in 2026. Japan has one of the fastest embassy processing times for tourist visas. A day-by-day itinerary, hotel bookings, bank statements, and employment letter are required. The Japan consulate does not typically require an interview, which speeds up processing significantly.",
      },
    },
    {
      "@type": "Question",
      name: "What is VFS Global and how does it affect visa processing time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VFS Global is the world's largest outsourced visa processing service, operating visa application centres on behalf of 67+ governments including UK, Canada, Australia, Schengen countries, and many more. VFS Global processing times are the time from document submission to passport return — this is separate from embassy processing time. Combined, VFS + embassy processing typically adds 3–5 business days to the total visa processing timeline.",
      },
    },
    {
      "@type": "Question",
      name: "Does seasonal demand affect visa processing times?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, significantly. Summer (June–August) and holiday periods (December, Ramadan travel season) see 30–50% higher application volumes at most embassies and VFS centres. This can add 2–3 weeks to standard processing times. Plan ahead: apply at least 6–8 weeks before travel during peak seasons. Our Visa Processing Time Tracker reflects current seasonal backlogs in real time.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Check Visa Processing Time Using Eammu's Tracker",
  description:
    "Step-by-step guide to checking visa processing time by nationality, destination, and visa type.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Select your nationality", text: "Choose your passport nationality from the dropdown. Processing times vary significantly by nationality due to bilateral visa agreements and embassy workload.", url: "https://www.eammu.com/travel-resources/visa-processing-time-tracker" },
    { "@type": "HowToStep", position: 2, name: "Choose your destination country", text: "Select the country you want to visit. Each country has different embassy processing speeds, seasonal backlogs, and VFS Global wait times." },
    { "@type": "HowToStep", position: 3, name: "Select your visa type", text: "Choose from e-visa, sticker visa, transit visa, or sticker-extended. Each type has dramatically different processing times — e-visa is fastest (2–4 days), sticker visa slowest (15–21 days)." },
    { "@type": "HowToStep", position: 4, name: "View your processing time estimate", text: "Get a real-time estimate based on current embassy data, VFS backlogs, and seasonal demand. The tracker shows standard, priority, and peak-season processing times." },
    { "@type": "HowToStep", position: 5, name: "Plan your application timeline", text: "Use the processing time to calculate when to apply. Always apply at least 2x the standard processing time before your travel date to allow for delays." },
  ],
};

const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Visa Processing Times 2026 — Global Database",
  description:
    "Comprehensive database of visa processing times for 200+ destination countries across 180+ nationalities, covering e-visa, sticker, transit, and extended-stay visa types. Updated weekly from official embassy and VFS Global sources.",
  url: "https://www.eammu.com/travel-resources/visa-processing-time-tracker",
  creator: { "@id": "https://www.eammu.com/#organization" },
  dateModified: new Date().toISOString().split("T")[0],
  keywords: [
    "visa processing time", "visa wait time", "embassy processing time",
    "VFS Global processing", "e-visa processing", "sticker visa processing",
    "transit visa processing", "Schengen processing time", "UK visa processing",
    "USA visa processing", "Canada visa processing", "Japan visa processing",
  ],
  license: "https://www.eammu.com/terms-privacy-policy",
  temporalCoverage: "2026",
  spatialCoverage: "Worldwide",
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function VisaProcessingTimeTrackerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />

      <VisaProcessingTimeTracker />
      <HomeSeoLinks />
    </>
  );
}