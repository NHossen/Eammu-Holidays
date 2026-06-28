import { Globe, FileText, CheckCircle, ArrowRight, Clock, Users, Building2, BadgeCheck } from "lucide-react";
import WorkPermitSearchWidget from "./Workpermitsearchwidget";

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata = {
  title: "Global Work Permit Services | Europe, Canada & International",
  description:
    "Expert Work Permit & Skilled Worker Route assistance for Canada, Europe, Balkans & beyond. Fast visa processing, document auth & end-to-end immigration support.",
  keywords: [
    "work permit",
    "skilled worker visa",
    "Canada work permit",
    "Europe work permit",
    "Italy work permit",
    "Portugal work permit",
    "Serbia work permit",
    "visa processing",
    "immigration services",
    "international work visa",
  ],
  alternates: {
    canonical: "https://eammu.com/work-permit",
    languages: {
      "en-US": "https://eammu.com/work-permit",
      "en-GB": "https://eammu.com/work-permit",
    },
  },
  openGraph: {
    title: "Global Work Permit Services | Europe, Canada & International",
    description:
      "Expert Work Permit & Skilled Worker Route assistance for Canada, Europe, Balkans & beyond. Fast visa processing, document auth & end-to-end immigration support.",
    url: "https://eammu.com/work-permit",
    siteName: "Eammu Holidays",
    type: "website",
    images: [
      {
        url: "https://eammu.com/og/work-permit.jpg",
        width: 1200,
        height: 630,
        alt: "Eammu Global Work Permit Services",
        secureUrl: "https://eammu.com/og/work-permit.jpg",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Work Permit Services | Europe, Canada & International",
    description:
      "Expert Work Permit & Skilled Worker Route assistance for Canada, Europe, Balkans & beyond. Fast visa processing & end-to-end immigration support.",
    images: ["https://eammu.com/og/work-permit.jpg"],
    site: "@eammuholidays",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://eammu.com/work-permit#webpage",
    name: "Global Work Permit Services",
    url: "https://eammu.com/work-permit",
    description:
      "End-to-end Work Permit and Skilled Worker Route services covering Canada, Europe, the Balkans, Latin America, and more.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://eammu.com/#website",
      name: "Eammu Holidays",
      url: "https://eammu.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
        { "@type": "ListItem", position: 2, name: "Work Permit", item: "https://eammu.com/work-permit" },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://eammu.com/work-permit#service",
    name: "Global Work Permit Consultancy",
    serviceType: "Immigration & Visa Consultancy",
    description:
      "Eammu provides professional Work Permit and Skilled Worker Visa processing services for Canada, Italy, Portugal, Serbia, Kosovo, North Macedonia, Montenegro, Moldova, Russia, Armenia, Brazil, and Mexico.",
    provider: {
      "@type": "Organization",
      "@id": "https://eammu.com/#org",
      name: "Eammu Holidays",
      url: "https://eammu.com",
      logo: "https://eammu.com/logo.png",
      sameAs: ["https://www.facebook.com/eammuholidays"],
    },
    areaServed: { "@type": "Place", name: "Worldwide" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Work Permit Pathways",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Canada Skilled Work Permit",
            description: "Express Entry, LMIA-backed, and Provincial Nominee Program work permits for Canada.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Italy Work Permit – Decreto Flussi",
            description: "Seasonal and non-seasonal work permits under Italy's annual Decreto Flussi quota system.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Portugal Work Visa",
            description:
              "Portugal's Job Seeker Visa and work permit for skilled professionals relocating to Europe.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Balkans & Eastern Europe Work Permits",
            description:
              "Work permit and employment visa processing for Serbia, Kosovo, North Macedonia, Montenegro, Moldova, Russia, and Armenia.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Latin America Work Permits",
            description:
              "Brazilian and Mexican work authorization and visa processing for international skilled workers.",
          },
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What documents are required for a Canada Skilled Work Permit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Canada Skilled Work Permit typically requires a valid job offer or LMIA, educational credential assessment (ECA), language test results (IELTS/CELPIP), passport, police clearances, and proof of funds. Eammu's consultants guide you through every document at every stage.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Italy work permit processing take under Decreto Flussi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Italy's Decreto Flussi work permit typically takes 3 to 6 months from quota opening to visa issuance, depending on prefecture workload and document completeness. Eammu prepares your file in advance of each annual quota opening to maximise approval speed.",
        },
      },
      {
        "@type": "Question",
        name: "Can I apply for a work permit in Serbia or Kosovo without a local job offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both Serbia and Kosovo require a confirmed employment contract from a registered local employer before a work permit can be issued. Eammu works with a verified employer network in the Balkans to help qualified candidates secure compliant job offers.",
        },
      },
    ],
  },
];

// ─── Country Data ─────────────────────────────────────────────────────────────
const tier1Countries = [
  {
    flag: "🇨🇦",
    country: "Canada",
    route: "Skilled Work Permit",
    types: ["Express Entry", "LMIA-Backed", "Provincial Nominee", "Open Work Permit"],
    processing: "2–6 months",
    eligibility: "Job offer, NOC skill level, language proof (IELTS/CELPIP), ECA",
    slug: "canada",
    highlight: "Most Popular",
  },
  {
    flag: "🇮🇹",
    country: "Italy",
    route: "Decreto Flussi",
    types: ["Seasonal Worker", "Non-Seasonal Worker", "Self-Employed", "Highly Skilled"],
    processing: "3–6 months",
    eligibility: "Employer sponsorship, quota availability, clean criminal record",
    slug: "italy",
    highlight: "High Demand",
  },
  {
    flag: "🇵🇹",
    country: "Portugal",
    route: "Job Seeker & Work Visa",
    types: ["Job Seeker Visa (120 days)", "Work Residence Permit", "Tech Visa", "Highly Qualified Activity"],
    processing: "2–4 months",
    eligibility: "Proof of qualifications, language aptitude, financial means",
    slug: "portugal",
    highlight: "EU Gateway",
  },
];

const balkanCountries = [
  {
    flag: "🇷🇸",
    country: "Serbia",
    types: ["Temporary Work Permit", "Employment Visa"],
    processing: "4–8 weeks",
    eligibility: "Valid employer contract, registered Serbian company",
    slug: "serbia",
  },
  {
    flag: "🇽🇰",
    country: "Kosovo",
    types: ["Work Permit", "Residence Permit"],
    processing: "4–10 weeks",
    eligibility: "Work contract, employer registration with Ministry of Labour",
    slug: "kosovo",
  },
  {
    flag: "🇲🇰",
    country: "North Macedonia",
    types: ["Work & Residence Permit", "Seasonal Permit"],
    processing: "4–8 weeks",
    eligibility: "Employment contract, qualified profession",
    slug: "north-macedonia",
  },
  {
    flag: "🇲🇪",
    country: "Montenegro",
    types: ["Temporary Residence for Employment", "Work Permit"],
    processing: "6–10 weeks",
    eligibility: "Employer sponsorship, no criminal record, health insurance",
    slug: "montenegro",
  },
  {
    flag: "🇲🇩",
    country: "Moldova",
    types: ["Work Permit for Foreigners", "Permanent Employment Visa"],
    processing: "3–6 weeks",
    eligibility: "Employer invitation letter, valid passport, skill documentation",
    slug: "moldova",
  },
  {
    flag: "🇷🇺",
    country: "Russia",
    types: ["Highly Qualified Specialist Permit", "Standard Work Permit"],
    processing: "4–8 weeks",
    eligibility: "Employer invitation, profession registration, health clearance",
    slug: "russia",
  },
  {
    flag: "🇦🇲",
    country: "Armenia",
    types: ["Temporary Residence for Work", "Employment Visa"],
    processing: "3–5 weeks",
    eligibility: "Employment agreement, company registration proof",
    slug: "armenia",
  },
];

const latinCountries = [
  {
    flag: "🇧🇷",
    country: "Brazil",
    types: ["Temporary Work Visa (VITEM V)", "Permanent Work Visa", "Technical Cooperation Visa"],
    processing: "6–12 weeks",
    eligibility: "Job offer from Brazilian entity, CNPq/MRE approval where applicable",
    slug: "brazil",
  },
  {
    flag: "🇲🇽",
    country: "Mexico",
    types: ["Temporary Resident Visa (Work)", "Intra-Company Transfer", "Qualified Professional Permit"],
    processing: "4–8 weeks",
    eligibility: "Employer sponsorship, professional qualifications, income threshold",
    slug: "mexico",
  },
];

const processSteps = [
  {
    icon: <Users className="w-6 h-6 text-yellow-400" aria-hidden="true" />,
    title: "Eligibility Assessment",
    description:
      "Our immigration specialists evaluate your professional profile against the specific requirements of your target country — occupation in-demand lists, language thresholds, salary benchmarks, and employer sponsorship conditions. You receive a candid, written eligibility report within 48 hours.",
  },
  {
    icon: <FileText className="w-6 h-6 text-yellow-400" aria-hidden="true" />,
    title: "Document Authentication",
    description:
      "Educational certificates, professional licences, employment references, and identity documents must meet strict authentication standards. Eammu's document team manages apostille certification, notarisation, and official translation into the target country's accepted language(s), reducing rejection risk significantly.",
  },
  {
    icon: <Building2 className="w-6 h-6 text-yellow-400" aria-hidden="true" />,
    title: "Employer & Authority Liaison",
    description:
      "For permits requiring employer sponsorship or Labour Market Impact Assessments, we liaise directly with registered companies and government ministries on your behalf. Our regional offices — including Yerevan and Dubai — give us on-the-ground access to labour authorities across multiple jurisdictions.",
  },
  {
    icon: <Globe className="w-6 h-6 text-yellow-400" aria-hidden="true" />,
    title: "Application Submission",
    description:
      "Complete files are submitted to the relevant embassy, consulate, or online immigration portal in strict compliance with current requirements. We track every submission in our case management system and send proactive status updates at every major milestone.",
  },
  {
    icon: <BadgeCheck className="w-6 h-6 text-yellow-400" aria-hidden="true" />,
    title: "Post-Approval Support",
    description:
      "Approval is the beginning, not the end. Eammu provides pre-departure orientation covering biometric enrolment timelines, travel document collection, port-of-entry requirements, and initial registration obligations in your destination country — keeping you compliant from day one.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function CountryCard({ flag, country, route, types, processing, eligibility, slug, highlight }) {
  return (
    <article
      className="relative flex flex-col bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
      aria-label={`${country} Work Permit`}
    >
      {highlight && (
        <span className="absolute top-4 right-4 text-xs font-semibold bg-yellow-100 text-yellow-800 px-2.5 py-1 rounded-full">
          {highlight}
        </span>
      )}
      <div className="p-6 pb-0">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl" role="img" aria-label={`${country} flag`}>
            {flag}
          </span>
          <div>
            <h3 className="text-lg font-bold text-gray-900 leading-tight">{country}</h3>
            <p className="text-sm text-yellow-600 font-medium">{route}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Clock className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          <span>
            <strong className="text-gray-700">Processing:</strong> {processing}
          </span>
        </div>
      </div>

      <div className="px-6 pb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Visa Types</p>
        <ul className="space-y-1 mb-4">
          {types.map((type) => (
            <li key={type} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
              {type}
            </li>
          ))}
        </ul>

        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Eligibility Highlights</p>
        <p className="text-sm text-gray-600 leading-relaxed">{eligibility}</p>
      </div>

      <div className="mt-auto px-6 py-4 border-t border-gray-50">
        <a
          href={`/work-permit/${slug}`}
          className="flex items-center gap-1.5 text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition-colors"
          aria-label={`Learn more about ${country} work permit`}
        >
          Full {country} Guide
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function ProcessStep({ icon, title, description, step }) {
  return (
    <div className="flex gap-5">
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-11 h-11 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center">
          {icon}
        </div>
        {step < 5 && <div className="w-px flex-1 bg-gray-800 mt-2" aria-hidden="true" />}
      </div>
      <div className="pb-8">
        <h3 className="text-base font-bold text-white mb-2">
          <span className="text-yellow-400 mr-1.5">0{step}.</span>
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default function WorkPermitPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content" className="bg-white">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <header className="relative bg-gray-950 overflow-hidden">
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
            aria-hidden="true"
          />
          {/* Yellow accent glow */}
          <div
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(ellipse, #FACC15 0%, transparent 70%)" }}
            aria-hidden="true"
          />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <Globe className="w-4 h-4 text-yellow-400" aria-hidden="true" />
              <span className="text-yellow-400 text-sm font-semibold tracking-wide uppercase">
                IATA-Accredited Immigration Consultancy
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight max-w-3xl mb-6">
              Global Work Permit{" "}
              <span className="text-yellow-400">Services</span> for Skilled Professionals
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10">
              Eammu's immigration specialists guide you through every stage of your work permit
              application — from eligibility assessment and document authentication to embassy
              submission and post-arrival compliance. We cover{" "}
              <strong className="text-white">Canada</strong>,{" "}
              <strong className="text-white">Europe</strong>,{" "}
              <strong className="text-white">the Balkans</strong>, and{" "}
              <strong className="text-white">Latin America</strong>.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-bold px-7 py-3.5 rounded-xl transition-colors duration-150 shadow-lg shadow-yellow-400/20"
              >
                Free Eligibility Check
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#country-pathways"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/15 transition-colors duration-150"
              >
                <Globe className="w-4 h-4" aria-hidden="true" />
                Explore All Countries
              </a>
            </div>

            {/* Trust bar */}
            <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: "15+", label: "Countries Covered" },
                { value: "5,000+", label: "Permits Processed" },
                { value: "IATA", label: "Accredited Agency" },
                { value: "5 Offices", label: "BD · Dubai · Yerevan · Georgia" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center sm:text-left">
                  <p className="text-2xl font-extrabold text-yellow-400 leading-none">{value}</p>
                  <p className="text-xs text-gray-400 mt-1 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <WorkPermitSearchWidget />

        {/* ── Tier 1: Canada + Italy + Portugal ─────────────────────────────── */}
        <section
          id="country-pathways"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
          aria-labelledby="tier1-heading"
        >
          <div className="mb-12">
            <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wider mb-2">
              Tier 1 Destinations
            </p>
            <h2
              id="tier1-heading"
              className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
            >
              Canada, Italy & Portugal Work Permits
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl leading-relaxed">
              Three of the world's most sought-after skilled worker destinations — each with distinct
              quota systems, occupation demand lists, and language requirements. Eammu maintains
              active case pipelines for all three pathways year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tier1Countries.map((c) => (
              <CountryCard key={c.country} {...c} />
            ))}
          </div>

          {/* Editorial paragraph — semantic depth for Google */}
          <div className="mt-10 bg-yellow-50 border border-yellow-100 rounded-2xl p-7">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">
              Why Canada, Italy & Portugal Lead Skilled Worker Immigration
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Canada's Express Entry system ranks candidates on a Comprehensive Ranking System (CRS)
              score, making language proficiency and educational credentials critical levers.
              Italy's Decreto Flussi releases annual quotas for non-EU workers, and competition for
              places opens on specific dates each year — early preparation is the single most
              important success factor. Portugal, meanwhile, has positioned itself as the EU's
              most accessible entry point for skilled non-EU talent through its Job Seeker Visa, which
              grants 120 days in-country to secure employment before converting to a work residence
              permit. Eammu's processing teams monitor quota calendars and policy changes for all
              three countries in real time, ensuring your application is aligned with the most
              current requirements before submission.
            </p>
          </div>
        </section>

        {/* ── Balkans & Eastern Europe ───────────────────────────────────────── */}
        <section
          className="bg-gray-50 py-20"
          aria-labelledby="balkans-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wider mb-2">
                Balkan & Eastern European Corridor
              </p>
              <h2
                id="balkans-heading"
                className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
              >
                Work Permits in Serbia, Kosovo, North Macedonia, Montenegro, Moldova, Russia & Armenia
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl leading-relaxed">
                The Western Balkans and Eastern Europe represent a rapidly growing corridor for
                international skilled workers. Lower cost-of-living, improving wage standards, and
                growing labour shortages in construction, IT, healthcare, and hospitality have
                created genuine demand for foreign talent across all seven countries below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {balkanCountries.map((c) => (
                <CountryCard key={c.country} {...c} />
              ))}
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-3">The Balkan Advantage</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Serbia and North Macedonia are candidate countries for EU membership, meaning
                  work experience and professional networks built in the region can become direct
                  stepping stones to EU work permits as enlargement progresses. Kosovo's growing
                  diaspora in Germany and Switzerland has created robust bilateral labour mobility
                  channels, and Montenegro's EU accession track makes it one of the region's most
                  strategically valuable work permit destinations for professionals building a
                  long-term European career path.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-3">Eastern Europe: Armenia & Moldova</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Armenia offers a visa-free or on-arrival entry for citizens of over 60 countries,
                  making initial employer engagement straightforward before a formal work permit is
                  filed. Moldova's labour market is small but growing, particularly in agriculture,
                  light manufacturing, and IT, and the country maintains bilateral agreements with
                  several EU states that simplify onward mobility. Eammu's Yerevan office handles
                  Armenia permit filings directly, with in-person employer liaison available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Latin America ─────────────────────────────────────────────────── */}
        <section
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
          aria-labelledby="latam-heading"
        >
          <div className="mb-12">
            <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wider mb-2">
              Latin American Channels
            </p>
            <h2
              id="latam-heading"
              className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
            >
              Brazil & Mexico Work Permits for International Professionals
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl leading-relaxed">
              Brazil and Mexico are Latin America's two largest economies and host some of the
              continent's most active markets for internationally recruited talent — particularly
              in engineering, technology, energy, and multinational corporate services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {latinCountries.map((c) => (
              <CountryCard key={c.country} {...c} />
            ))}
          </div>

          <div className="mt-10 bg-gray-50 rounded-2xl p-7">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Navigating Latin American Work Authorization</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Brazilian work visa categories depend heavily on the nature of the employment
              relationship: direct hire, intra-company transfer, technical cooperation, or
              independent professional activity each route through different federal authorities.
              Mexico's temporary resident work visa must be applied for at a Mexican consulate in
              the applicant's home country before travel, and employer-submitted pre-approval from
              INM (Instituto Nacional de Migración) is a prerequisite. Eammu's consultants are
              experienced in coordinating multi-party documentation flows — between the overseas
              applicant, the sponsoring employer in Latin America, and the relevant consular mission
              — to prevent the delays that most commonly arise from incomplete employer filings.
            </p>
          </div>
        </section>

        {/* ── Process Steps ─────────────────────────────────────────────────── */}
        <section
          className="bg-gray-950 py-20"
          aria-labelledby="process-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 max-w-2xl">
              <p className="text-yellow-400 text-sm font-semibold uppercase tracking-wider mb-2">
                How It Works
              </p>
              <h2
                id="process-heading"
                className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
              >
                Your Work Permit Journey, Step by Step
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Every Eammu work permit case follows a structured five-stage process — designed to
                eliminate the document errors, timeline surprises, and communication gaps that cause
                most visa refusals.
              </p>
            </div>

            <div className="max-w-2xl">
              {processSteps.map((step, i) => (
                <ProcessStep key={step.title} {...step} step={i + 1} />
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
          aria-labelledby="faq-heading"
        >
          <div className="mb-12">
            <h2
              id="faq-heading"
              className="text-3xl font-extrabold text-gray-900 tracking-tight"
            >
              Frequently Asked Questions
            </h2>
          </div>

          <dl className="space-y-6 max-w-3xl">
            {[
              {
                q: "What documents are required for a Canada Skilled Work Permit?",
                a: "A Canada Skilled Work Permit typically requires a valid job offer or Labour Market Impact Assessment (LMIA), an Educational Credential Assessment (ECA) from a designated body, language test results (IELTS or CELPIP), a valid passport, police clearance certificates, and proof of sufficient funds. Provincial Nominee Program applications may require additional province-specific documentation. Eammu's consultants prepare a personalised document checklist at the start of each case.",
              },
              {
                q: "How long does Italy work permit processing take under Decreto Flussi?",
                a: "Italy's Decreto Flussi work permit typically takes between 3 and 6 months from quota opening to visa issuance, depending on prefecture workload and the completeness of the employer's sponsorship file. Eammu prepares applicant files well in advance of each annual quota opening — usually published in the Italian Official Gazette in late autumn — to ensure submissions are made within hours of the quota window opening.",
              },
              {
                q: "Can I apply for a work permit in Serbia or Kosovo without a local job offer?",
                a: "Both Serbia and Kosovo require a confirmed employment contract from a registered local employer before a work permit application can be filed. Work permits in both countries are employer-tied, meaning the permit is issued for a specific role with a specific company. Eammu works with a verified network of regional employers and recruitment agencies in the Western Balkans to help professionally qualified candidates identify and secure compliant job offers before the permit process begins.",
              },
              {
                q: "Does Eammu assist with work permits for both individual applicants and companies sponsoring employees?",
                a: "Yes. Eammu provides services to both sides of the employment relationship. Individual applicants receive end-to-end case management from assessment through to permit collection. For companies sponsoring foreign employees — particularly those expanding into the Balkans, Eastern Europe, or Latin America — Eammu offers employer compliance advisory, bulk work permit filing, and workforce immigration planning. Contact our corporate team for group rates.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-gray-100 pb-6">
                <dt className="font-bold text-gray-900 mb-2 text-base">{q}</dt>
                <dd className="text-gray-600 text-sm leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── CTA Banner ────────────────────────────────────────────────────── */}
        <section
          className="bg-yellow-400 py-16"
          aria-label="Call to action"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">
              Ready to Start Your Work Permit Application?
            </h2>
            <p className="text-gray-800 max-w-xl mx-auto mb-8 leading-relaxed">
              Book a free 30-minute eligibility consultation with an Eammu immigration specialist.
              We'll assess your profile, identify the strongest pathway, and outline a realistic
              timeline — at no cost and no obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gray-950 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-xl transition-colors duration-150 shadow-lg"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="tel:+8801XXXXXXXXX"
                className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-950 font-semibold px-8 py-4 rounded-xl transition-colors duration-150"
              >
                Call Our Team
              </a>
            </div>
          </div>
        </section>

        {/* ── Internal Navigation ────────────────────────────────────────────── */}
        <nav
          aria-label="Related visa pages"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
            Explore Related Services
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Schengen Visa", href: "/visa/schengen" },
              { label: "Student Visa", href: "/visa/student" },
              { label: "Armenia Visa", href: "/visa/armenia" },
              { label: "Albania Visa", href: "/visa/albania" },
              { label: "Visa Rejection Help", href: "/visa/rejection" },
              { label: "Document Authentication", href: "/services/document-authentication" },
              { label: "Immigration Consultation", href: "/services/consultation" },
              { label: "Visa Checker Tool", href: "/visa-checker" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-gray-600 hover:text-yellow-600 border border-gray-200 hover:border-yellow-300 bg-white px-4 py-2 rounded-full transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

      </main>
    </>
  );
}