// app/work-permit/[slug]/page.jsx
// ✅ Dynamic SEO: generateMetadata + JSON-LD + ISR

import { Suspense }           from "react";
import WorkPermitSlugClient   from "./WorkPermitSlugClient";

// ─── Country static data (single source of truth) ────────────────────────────
// To add a new country: add an entry here, WorkPermitSearchWidget picks it up automatically.
const COUNTRY_META = {
  canada: {
    name: "Canada", flag: "🇨🇦", region: "North America",
    route: "Skilled Work Permit",
    types: ["Express Entry", "LMIA-Backed", "Provincial Nominee", "Open Work Permit"],
    processing: "2–6 months",
    summary:
      "Canada's points-based Express Entry system ranks candidates by language, education, and work experience. A strong CRS score, a valid job offer, or a Provincial Nominee Program invitation can fast-track your application.",
    keyFacts: [
      "Minimum IELTS/CELPIP CLB 7 recommended for most NOC TEER 0–2 roles",
      "Educational Credential Assessment (ECA) required from a designated body",
      "LMIA-backed offers exempt most CRS score thresholds",
      "Open Work Permits available for spouses of skilled workers",
    ],
    relatedSlug: "canada-work-permit",
  },
  italy: {
    name: "Italy", flag: "🇮🇹", region: "Europe",
    route: "Decreto Flussi",
    types: ["Seasonal Worker", "Non-Seasonal Worker", "Self-Employed", "Highly Skilled"],
    processing: "3–6 months",
    summary:
      "Italy releases annual non-EU worker quotas under the Decreto Flussi. Quota windows open on specific dates in the Italian Official Gazette — preparation before the window opens is critical to securing a place.",
    keyFacts: [
      "Quotas published annually in the Italian Official Gazette (Gazzetta Ufficiale)",
      "Employer must file a sponsorship (nulla osta) before the applicant applies for a visa",
      "Healthcare, construction, agriculture, and domestic work are consistently in-demand sectors",
      "Processing handled at the local Prefecture (Prefettura) after employer filing",
    ],
    relatedSlug: "italy-work-permit",
  },
  portugal: {
    name: "Portugal", flag: "🇵🇹", region: "Europe",
    route: "Job Seeker & Work Visa",
    types: ["Job Seeker Visa (120 days)", "Work Residence Permit", "Tech Visa", "Highly Qualified Activity"],
    processing: "2–4 months",
    summary:
      "Portugal's Job Seeker Visa grants 120 days in-country to find employment, then converts to a work residence permit. It is the EU's most accessible entry point for qualified non-EU professionals.",
    keyFacts: [
      "Job Seeker Visa requires proof of financial means (minimum monthly minimum wage × 3)",
      "Tech Visa targets professionals working for recognised tech companies",
      "Highly Qualified Activity permit fast-tracks senior professionals and researchers",
      "SEF (now AIMA) appointment required for residence permit conversion",
    ],
    relatedSlug: "portugal-work-permit",
  },
  serbia: {
    name: "Serbia", flag: "🇷🇸", region: "Balkans",
    route: "Employment Visa",
    types: ["Temporary Work Permit", "Employment Visa"],
    processing: "4–8 weeks",
    summary:
      "Serbia's work permit is tied to a specific employer and role. A registered Serbian company must initiate the process before the applicant can apply for an entry visa.",
    keyFacts: [
      "Work permit issued by the National Employment Service (NES)",
      "Employer must prove no suitable local candidate is available (labour market test)",
      "Permit is initially issued for 1 year, renewable annually",
      "Serbia's EU candidacy status makes work experience here strategically valuable",
    ],
    relatedSlug: "serbia-work-permit",
  },
  kosovo: {
    name: "Kosovo", flag: "🇽🇰", region: "Balkans",
    route: "Work & Residence Permit",
    types: ["Work Permit", "Residence Permit"],
    processing: "4–10 weeks",
    summary:
      "Kosovo requires an employment contract with a registered Kosovar employer before the Ministry of Labour can issue a work permit. Growing bilateral mobility channels with Germany and Switzerland make Kosovo a useful regional base.",
    keyFacts: [
      "Work permit filed with the Ministry of Labour and Social Welfare",
      "Employment contract must be registered with Kosovar tax authorities",
      "Residence permit issued by Ministry of Internal Affairs after work permit granted",
      "Strong diaspora networks in Germany and Switzerland support onward mobility",
    ],
    relatedSlug: "kosovo-work-permit",
  },
  "north-macedonia": {
    name: "North Macedonia", flag: "🇲🇰", region: "Balkans",
    route: "Work & Residence Permit",
    types: ["Work & Residence Permit", "Seasonal Permit"],
    processing: "4–8 weeks",
    summary:
      "North Macedonia's combined work and residence permit is filed by the employer with the Employment Service Agency. EU membership candidacy means professional networks built here carry long-term value.",
    keyFacts: [
      "Combined permit covers both the right to work and right of residence",
      "Employer files with the Employment Service Agency of North Macedonia",
      "Seasonal permits available for agriculture and tourism sectors",
      "EU accession candidacy adds long-term career mobility value",
    ],
    relatedSlug: "north-macedonia-work-permit",
  },
  montenegro: {
    name: "Montenegro", flag: "🇲🇪", region: "Balkans",
    route: "Temporary Residence for Employment",
    types: ["Temporary Residence for Employment", "Work Permit"],
    processing: "6–10 weeks",
    summary:
      "Montenegro is one of the most advanced EU accession candidates in the Western Balkans. Employer sponsorship is required, and work permits are managed by the Employment Agency of Montenegro.",
    keyFacts: [
      "Montenegro opened EU accession negotiations in 2012 — the most advanced in the region",
      "Work permit quota system applies in certain sectors",
      "Mandatory health insurance coverage required from day of entry",
      "Tourism, hospitality, and IT sectors have active demand for international staff",
    ],
    relatedSlug: "montenegro-work-permit",
  },
  moldova: {
    name: "Moldova", flag: "🇲🇩", region: "Eastern Europe",
    route: "Employment Visa",
    types: ["Work Permit for Foreigners", "Permanent Employment Visa"],
    processing: "3–6 weeks",
    summary:
      "Moldova's work permit process is employer-driven. An invitation letter from a Moldovan company enables the initial visa, which then converts to a work permit. Bilateral agreements with several EU states support onward mobility.",
    keyFacts: [
      "Employer invitation letter (permis de muncă) is the starting document",
      "Work permit registered with the National Employment Agency",
      "Agriculture, light manufacturing, and IT are active recruitment sectors",
      "EU Association Agreement enables simplified travel to Schengen states",
    ],
    relatedSlug: "moldova-work-permit",
  },
  russia: {
    name: "Russia", flag: "🇷🇺", region: "Eastern Europe",
    route: "Work Permit",
    types: ["Highly Qualified Specialist Permit", "Standard Work Permit"],
    processing: "4–8 weeks",
    summary:
      "Russia's Highly Qualified Specialist (HQS) permit is the fastest and most flexible route for professionals earning above the statutory salary threshold. Standard permits are employer-filed with regional migration authorities.",
    keyFacts: [
      "HQS salary threshold: RUB 167,000+ per month (most professional roles)",
      "HQS permit allows family members to reside and, in some cases, work",
      "Standard permit requires employer quota registration in Q4 of the prior year",
      "Medical examination and HIV test required before permit issuance",
    ],
    relatedSlug: "russia-work-permit",
  },
  armenia: {
    name: "Armenia", flag: "🇦🇲", region: "Eastern Europe",
    route: "Employment Visa",
    types: ["Temporary Residence for Work", "Employment Visa"],
    processing: "3–5 weeks",
    summary:
      "Armenia offers visa-free or on-arrival entry for citizens of over 60 countries, making employer engagement straightforward before a formal work permit is filed. Eammu's Yerevan office handles Armenian filings directly.",
    keyFacts: [
      "Over 60 nationalities can enter visa-free for 180 days — useful for initial employer meetings",
      "Employment agreement must be registered with Armenian tax authorities",
      "Temporary residence permit valid for 1 year, renewable",
      "Eammu's Yerevan office provides on-the-ground employer liaison",
    ],
    relatedSlug: "armenia-work-permit",
  },
  brazil: {
    name: "Brazil", flag: "🇧🇷", region: "Latin America",
    route: "Temporary Work Visa (VITEM V)",
    types: ["Temporary Work Visa (VITEM V)", "Permanent Work Visa", "Technical Cooperation Visa"],
    processing: "6–12 weeks",
    summary:
      "Brazilian work visas are categorised by employment type: direct hire, intra-company transfer, or technical cooperation. Federal authority approvals (CNPq, MRE) may be required depending on the visa category.",
    keyFacts: [
      "VITEM V covers most direct-hire and intra-company transfer scenarios",
      "Technical cooperation visas require MRE (Ministry of Foreign Affairs) pre-clearance",
      "Applicants must apply at a Brazilian consulate in their home country before travel",
      "Work visa converts to permanent residence after 2 years of continuous legal employment",
    ],
    relatedSlug: "brazil-work-permit",
  },
  mexico: {
    name: "Mexico", flag: "🇲🇽", region: "Latin America",
    route: "Temporary Resident Visa (Work)",
    types: ["Temporary Resident Visa (Work)", "Intra-Company Transfer", "Qualified Professional Permit"],
    processing: "4–8 weeks",
    summary:
      "Mexico's work authorisation begins with INM pre-approval submitted by the sponsoring employer. The applicant then applies at a Mexican consulate in their home country before travelling.",
    keyFacts: [
      "Employer must obtain INM (Instituto Nacional de Migración) pre-approval first",
      "Consular interview required in applicant's country of residence",
      "Minimum income threshold applies (currently 3× monthly minimum wage in Mexico)",
      "Intra-company transfers can be fast-tracked for multinationals with Mexican subsidiaries",
    ],
    relatedSlug: "mexico-work-permit",
  },
};

// ─── Static params for all known slugs ───────────────────────────────────────
export async function generateStaticParams() {
  return Object.keys(COUNTRY_META).map((slug) => ({ slug }));
}

// ─── Dynamic metadata ─────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = COUNTRY_META[slug];

  if (!c) {
    return {
      title: "Work Permit Guide | Eammu Holidays",
      description: "Expert work permit and immigration consultancy services for skilled professionals worldwide.",
    };
  }

  return {
    title: `${c.name} Work Permit Guide ${new Date().getFullYear()} – Requirements, Processing & Apply | Eammu`,
    description: `Complete ${c.name} work permit guide for ${new Date().getFullYear()}. Visa types, processing times, eligibility, document requirements, and step-by-step application support from Eammu Holidays – IATA-accredited immigration consultancy.`,
    keywords: [
      `${c.name} work permit`,
      `${c.name} work visa`,
      `how to get a work permit in ${c.name}`,
      `${c.name} work permit requirements`,
      `${c.name} employment visa`,
      `${c.route} ${c.name}`,
      "work permit consultancy Bangladesh",
      "Eammu Holidays immigration",
    ].join(", "),
    alternates: {
      canonical: `https://eammu.com/work-permit/${slug}`,
    },
    openGraph: {
      title: `${c.name} Work Permit ${new Date().getFullYear()} | Eammu Holidays`,
      description: `Everything you need to know about getting a work permit in ${c.name} — visa types, processing times, documents, and expert support.`,
      url: `https://eammu.com/work-permit/${slug}`,
      siteName: "Eammu Holidays",
      type: "website",
      images: [
        {
          url: `https://eammu.com/og/work-permit-${slug}.jpg`,
          width: 1200, height: 630,
          alt: `${c.name} Work Permit Guide – Eammu Holidays`,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${c.name} Work Permit Guide | Eammu Holidays`,
      description: `Visa types, requirements, and processing times for ${c.name} work permits. Expert guidance from Eammu.`,
      images: [`https://eammu.com/og/work-permit-${slug}.jpg`],
      site: "@eammuholidays",
    },
    robots: {
      index: true, follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    },
  };
}

// ─── JSON-LD builder ──────────────────────────────────────────────────────────
function buildJsonLd(slug, c) {
  const url = `https://eammu.com/work-permit/${slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      name: `${c.name} Work Permit Guide`,
      url,
      description: `Complete guide to obtaining a work permit in ${c.name} — visa types, eligibility, processing times, and document requirements.`,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home",        item: "https://eammu.com" },
          { "@type": "ListItem", position: 2, name: "Work Permit", item: "https://eammu.com/work-permit" },
          { "@type": "ListItem", position: 3, name: c.name,        item: url },
        ],
      },
      isPartOf: {
        "@type": "WebSite", "@id": "https://eammu.com/#website",
        name: "Eammu Holidays", url: "https://eammu.com",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: `${c.name} Work Permit Consultancy`,
      serviceType: "Immigration & Visa Consultancy",
      description: `Eammu provides end-to-end ${c.name} work permit processing — eligibility assessment, document authentication, employer liaison, and application submission.`,
      provider: {
        "@type": "Organization", "@id": "https://eammu.com/#org",
        name: "Eammu Holidays", url: "https://eammu.com",
        logo: "https://eammu.com/logo.png",
        sameAs: ["https://www.facebook.com/eammuholidays"],
      },
      areaServed: { "@type": "Country", name: c.name },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${c.name} Work Permit Types`,
        itemListElement: c.types.map((t) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t, description: `${t} for ${c.name}` },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `How long does a ${c.name} work permit take to process?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Processing times for a ${c.name} work permit (${c.route}) typically range from ${c.processing}, depending on the specific permit type, document completeness, and current authority workloads. Eammu prepares your file in advance to minimise delays.`,
          },
        },
        {
          "@type": "Question",
          name: `What types of work permits are available in ${c.name}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `${c.name} offers the following work permit categories: ${c.types.join(", ")}. The right permit depends on your profession, employer type, and intended length of stay.`,
          },
        },
        {
          "@type": "Question",
          name: `Can Eammu help with my ${c.name} work permit application?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes. Eammu's immigration specialists provide end-to-end support for ${c.name} work permit applications — from eligibility assessment and document authentication to employer liaison and application submission. Contact us for a free eligibility consultation.`,
          },
        },
      ],
    },
  ];
}

// ─── Page shell ───────────────────────────────────────────────────────────────
export default async function WorkPermitSlugPage({ params }) {
  const { slug } = await params;
  const c = COUNTRY_META[slug] || null;

  const jsonLd = c ? buildJsonLd(slug, c) : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <WorkPermitSlugClient slug={slug} staticMeta={c} />
      </Suspense>
    </>
  );
}