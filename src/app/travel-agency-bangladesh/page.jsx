import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://eammu.com";
const PAGE_PATH = "/travel-agency-bangladesh";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

// ─── METADATA ────────────────────────────────────────────────────────────────
export const metadata = {
  title:
    "Bangladesh Travel Agency | Visa, Air Ticket & Tour Packages — Eammu Holidays",
  description:
    "Bangladesh's leading IATA-accredited travel agency offering visa processing, international air tickets, holiday tour packages, Umrah, study abroad consultancy, and travel insurance. Eammu Holidays serves clients from Dhaka, Cumilla, Chattogram, Dubai, and worldwide.",
  keywords: [
    "travel agency Bangladesh",
    "best travel agency in Bangladesh",
    "travel agency in Dhaka Bangladesh",
    "travel agency in Cumilla Bangladesh",
    "travel agency in Chittagong Bangladesh",
    "visa agency in Bangladesh",
    "visa processing Bangladesh",
    "air ticket booking Bangladesh",
    "international air ticket Bangladesh",
    "tour operator Bangladesh",
    "tour packages from Bangladesh",
    "Umrah package Bangladesh",
    "student visa from Bangladesh",
    "tourist visa from Bangladesh",
    "Schengen visa from Bangladesh",
    "Dubai visa from Bangladesh",
    "Malaysia visa from Bangladesh",
    "travel consultancy Bangladesh",
    "IATA travel agency Bangladesh",
    "holiday packages Bangladesh",
    "travel agency Dhaka",
    "travel agency Cumilla",
    "travel agency Chittagong",
    "visa consultancy Bangladesh",
    "study abroad from Bangladesh",
    "Eammu Holidays",
    "travel agency near me Bangladesh",
    "online travel agency Bangladesh",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-BD": PAGE_URL,
      "bn-BD": PAGE_URL,
    },
  },
  openGraph: {
    title: "Best Travel Agency in Bangladesh | Eammu Holidays",
    description:
      "IATA-accredited travel agency in Bangladesh — visa processing, international air tickets, tour packages, Umrah, study abroad, and travel insurance from Dhaka, Cumilla, and Chittagong.",
    url: PAGE_URL,
    siteName: "Eammu Holidays",
    locale: "en_BD",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og/travel-agency-bangladesh.jpg`,
        width: 1200,
        height: 630,
        alt: "Eammu Holidays — Best Travel Agency in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Travel Agency in Bangladesh | Eammu Holidays",
    description:
      "Visa, air tickets, tour packages, Umrah & study abroad from an IATA-accredited Bangladesh travel agency — Dhaka, Cumilla, Chittagong.",
    images: [`${SITE_URL}/og/travel-agency-bangladesh.jpg`],
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

// ─── DATA ─────────────────────────────────────────────────────────────────────
const offices = [
  {
    city: "Dhaka",
    name: "Dhaka, Bangladesh Office",
    area: "Dhaka, Bangladesh",
    phone: "+880-1234-567890",
    description:
      "Visa consultation, international air ticket booking, holiday planning, study abroad file preparation, Umrah packages, and corporate travel support for customers across Dhaka.",
  },
  {
    city: "Cumilla",
    name: "Cumilla, Bangladesh Office",
    area: "Cumilla, Bangladesh",
    phone: "+880-1234-567891",
    description:
      "Travel agency support for Cumilla and Comilla district clients — tourist visa guidance, student visa documents, air ticket booking, family tour packages, and Umrah travel.",
  },
  {
    city: "Chittagong",
    name: "Chittagong, Bangladesh Office",
    area: "Chittagong (Chattogram), Bangladesh",
    phone: "+880-1234-567892",
    description:
      "Visa, ticketing, tour package, Umrah, and business travel assistance for travelers from Chittagong, Chattogram, Cox's Bazar, and nearby districts.",
  },
];

const primaryServices = [
  {
    title: "Tourist Visa Processing from Bangladesh",
    href: "/our-services/visa-services/tourist-visa-from-bangladesh",
    icon: "🛂",
    text:
      "Document checklist, application preparation, appointment guidance, cover letter support, and destination-specific visa advice for Bangladeshi passport holders traveling to Europe, Middle East, Asia, and beyond.",
  },
  {
    title: "Student Visa Consultancy",
    href: "/our-services/visa-services/student-visa-from-bangladesh",
    icon: "🎓",
    text:
      "Study abroad planning, admission document review, financial file preparation, SOP guidance, and student visa support for USA, UK, Canada, Australia, Germany, Japan, and Malaysia.",
  },
  {
    title: "International Air Ticket Booking",
    href: "/flight-booking",
    icon: "✈️",
    text:
      "International and domestic air ticket booking from Bangladesh with route planning, fare comparison, baggage guidance, layover advice, and flexible date support.",
  },
  {
    title: "Tour & Holiday Packages",
    href: "/our-services/tour-packages",
    icon: "🏝️",
    text:
      "Custom holiday packages for families, couples, groups, and corporate travelers — hotels, transfers, sightseeing, travel insurance guidance, and itinerary planning.",
  },
  {
    title: "Umrah Packages from Bangladesh",
    href: "/our-services",
    icon: "🕌",
    text:
      "Umrah travel planning from Bangladesh including flight, hotel, transport, visa guidance, and group support for a smoother spiritual journey to Makkah and Madinah.",
  },
  {
    title: "Schengen Visa Consultancy",
    href: "/schengen-visa",
    icon: "🇪🇺",
    text:
      "Comprehensive Schengen visa guidance for Bangladeshi travelers — country-specific documents, appointment strategy, bank statement advice, and rejection risk assessment.",
  },
  {
    title: "Business & Work Visa Support",
    href: "/our-services/visa-services",
    icon: "💼",
    text:
      "Business visa document preparation, invitation letter review, work permit guidance, and employment-based visa consultancy for Bangladeshi professionals traveling abroad.",
  },
  {
    title: "Travel Insurance",
    href: "/travel-insurance",
    icon: "🛡️",
    text:
      "Travel insurance guidance for visa applications, medical emergencies, trip interruption, lost baggage, and destination-specific entry requirements.",
  },
  {
    title: "Dubai & UAE Travel Packages",
    href: "/visa/united-arab-emirates-visa",
    icon: "🏙️",
    text:
      "Dubai visa from Bangladesh, UAE tourist packages, Burj Khalifa tours, desert safari, hotel booking, and air ticket support for Bangladeshi travelers visiting Dubai.",
  },
];

const popularRoutes = [
  { from: "Bangladesh", to: "Dubai / UAE", flag: "🇦🇪", href: "/visa/united-arab-emirates-visa" },
  { from: "Bangladesh", to: "Malaysia", flag: "🇲🇾", href: "/visa-checker/bangladesh-visa-for-malaysia/e-visa" },
  { from: "Bangladesh", to: "Thailand", flag: "🇹🇭", href: "/visa-checker/bangladesh-visa-for-thailand/e-visa" },
  { from: "Bangladesh", to: "Singapore", flag: "🇸🇬", href: "/visa-checker/bangladesh-visa-for-singapore/e-visa" },
  { from: "Bangladesh", to: "Turkey", flag: "🇹🇷", href: "/visa/visa-guide/turkey-visa-for-bangladesh" },
  { from: "Bangladesh", to: "UK", flag: "🇬🇧", href: "/visa/visa-guide/united-kingdom-visa-for-bangladesh" },
  { from: "Bangladesh", to: "USA", flag: "🇺🇸", href: "/visa/visa-guide/united-states-visa-for-bangladesh" },
  { from: "Bangladesh", to: "Canada", flag: "🇨🇦", href: "/visa/visa-guide/canada-visa-for-bangladesh" },
  { from: "Bangladesh", to: "Australia", flag: "🇦🇺", href: "/visa/visa-guide/australia-visa-for-bangladesh" },
  { from: "Bangladesh", to: "Germany / Schengen", flag: "🇩🇪", href: "/visa/visa-guide/germany-visa-for-bangladesh" },
  { from: "Bangladesh", to: "Japan", flag: "🇯🇵", href: "/visa/visa-guide/japan-visa-for-bangladesh" },
  { from: "Bangladesh", to: "South Korea", flag: "🇰🇷", href: "/visa/visa-guide/south-korea-visa-for-bangladesh" },
];

const bangladeshVisaLinks = [
  { label: "Dubai Visa from Bangladesh", href: "/visa/united-arab-emirates-visa" },
  { label: "Malaysia Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-malaysia/e-visa" },
  { label: "Thailand Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-thailand/e-visa" },
  { label: "Singapore Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-singapore/e-visa" },
  { label: "Sri Lanka Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-srilanka/eta" },
  { label: "Albania Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-albania/e-visa" },
  { label: "Turkey Visa for Bangladesh", href: "/visa/visa-guide/turkey-visa-for-bangladesh" },
  { label: "Canada Visa for Bangladesh", href: "/visa/visa-guide/canada-visa-for-bangladesh" },
  { label: "UK Visa for Bangladesh", href: "/visa/visa-guide/united-kingdom-visa-for-bangladesh" },
  { label: "USA Visa for Bangladesh", href: "/visa/visa-guide/united-states-visa-for-bangladesh" },
  { label: "Australia Visa for Bangladesh", href: "/visa/visa-guide/australia-visa-for-bangladesh" },
  { label: "Germany Visa for Bangladesh", href: "/visa/visa-guide/germany-visa-for-bangladesh" },
  { label: "Japan Visa for Bangladesh", href: "/visa/visa-guide/japan-visa-for-bangladesh" },
  { label: "South Korea Visa for Bangladesh", href: "/visa/visa-guide/south-korea-visa-for-bangladesh" },
  { label: "Portugal Visa for Bangladesh", href: "/visa-checker/portugal-visa-for-bangladesh/visa-required" },
  { label: "Montenegro Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-montenegro/visa-required" },
  { label: "Indonesia Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-indonesia/e-visa" },
  { label: "Vietnam Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-vietnam/e-visa" },
  { label: "Nepal Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-nepal/visa-on-arrival" },
  { label: "Saudi Arabia Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-saudi-arabia/visa-required" },
  { label: "Oman Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-oman/e-visa" },
  { label: "Qatar Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-qatar/e-visa" },
  { label: "Schengen Visa from Bangladesh", href: "/schengen-visa" },
  { label: "Armenia Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-armenia/e-visa" },
];

const studyLinks = [
  { label: "Study in USA from Bangladesh", href: "/study-abroad/student-visa/united-states" },
  { label: "Study in UK from Bangladesh", href: "/study-abroad/student-visa/united-kingdom" },
  { label: "Study in Canada from Bangladesh", href: "/study-abroad/student-visa/canada" },
  { label: "Study in Australia from Bangladesh", href: "/study-abroad/student-visa/australia" },
  { label: "Study in Germany from Bangladesh", href: "/study-abroad/student-visa/germany" },
  { label: "Study in Japan from Bangladesh", href: "/study-abroad/student-visa/japan" },
  { label: "Study in Malaysia from Bangladesh", href: "/study-abroad/student-visa/malaysia" },
  { label: "All Student Visa Guides", href: "/study-abroad/student-visa" },
  { label: "Scholarships Abroad", href: "/study-abroad/scholarships" },
];

const resourceLinks = [
  { label: "Visa Checker — 195 Countries", href: "/visa-checker" },
  { label: "Visa Processing Time Tracker", href: "/travel-resources/visa-processing-time-tracker" },
  { label: "Visa Rejection Rate Statistics", href: "/visa-rejection" },
  { label: "Visa Checklist Generator", href: "/travel-resources/visa-checklist-generator" },
  { label: "Travel Document Generator", href: "/travel-resources/travel-document-generator" },
  { label: "Travel Cost Calculator", href: "/travel-cost-calculator" },
  { label: "Schengen Visa Complete Guide", href: "/schengen-visa" },
  { label: "All Travel Resources", href: "/travel-resources" },
];

const processSteps = [
  {
    step: "01",
    title: "Free Initial Consultation",
    description:
      "Contact Eammu Holidays via phone, WhatsApp, or our website. Describe your travel purpose — tourist, student, Umrah, business, or family — and destination country.",
  },
  {
    step: "02",
    title: "Document Checklist Review",
    description:
      "We review your passport, purpose of travel, and destination requirements to prepare a clear, accurate document checklist tailored to your profile and Bangladeshi passport holder requirements.",
  },
  {
    step: "03",
    title: "File Preparation & Guidance",
    description:
      "We assist with cover letter drafting, financial document structuring, application form guidance, appointment booking tips, and risk assessment before you submit.",
  },
  {
    step: "04",
    title: "Application Submission Support",
    description:
      "We guide you through embassy appointment booking, VFS submission, online e-visa portals, or consular procedures with country-specific accuracy.",
  },
  {
    step: "05",
    title: "Air Ticket & Travel Booking",
    description:
      "Once your visa is confirmed, book international air tickets, hotel accommodation, airport transfers, travel insurance, and tour packages through Eammu Holidays.",
  },
  {
    step: "06",
    title: "Post-Travel Support",
    description:
      "We remain available for travel queries, itinerary changes, emergency contact support, and repeat travel consultancy from Bangladesh.",
  },
];

const trustSignals = [
  { value: "IATA", label: "Accredited Travel Agency", sub: "Internationally recognized certification" },
  { value: "5000+", label: "Travelers Supported", sub: "From Dhaka, Cumilla, Chittagong & beyond" },
  { value: "50+", label: "Destination Countries", sub: "Middle East, Asia, Europe, Americas" },
  { value: "3", label: "Bangladesh Offices", sub: "Dhaka · Cumilla · Chittagong" },
  { value: "8+", label: "Years of Experience", sub: "Serving Bangladeshi travelers since 2016" },
  { value: "95%", label: "Client Satisfaction", sub: "Based on post-service feedback" },
];

const reasons = [
  {
    title: "IATA-Accredited Agency",
    desc: "Eammu Holidays holds IATA accreditation, ensuring internationally recognized, compliant travel and ticketing services.",
  },
  {
    title: "Bangladesh-Focused Visa Expertise",
    desc: "Deep knowledge of Bangladeshi passport requirements, common rejection reasons, and embassy expectations for each destination.",
  },
  {
    title: "Offices in Dhaka, Cumilla & Chittagong",
    desc: "Physical presence in three major Bangladesh cities means faster, more personalized consultation for travelers across the country.",
  },
  {
    title: "Transparent Document Guidance",
    desc: "We explain exactly what documents are needed, why they matter, and what risk factors to address — before you pay any embassy fee.",
  },
  {
    title: "End-to-End Travel Support",
    desc: "From visa file to air ticket to travel insurance and tour packages — one agency handles your complete travel journey.",
  },
  {
    title: "Free Internal Travel Tools",
    desc: "Visa checker, processing time tracker, cost calculator, and checklist generator are all free on eammu.com for Bangladeshi travelers.",
  },
];

const faqs = [
  {
    question: "Which is the best travel agency in Bangladesh for visa and air tickets?",
    answer:
      "Eammu Holidays is an IATA-accredited travel agency in Bangladesh offering visa processing support, international air ticket booking, tour packages, Umrah packages, travel insurance guidance, and study abroad consultancy. We operate from offices in Dhaka, Cumilla, and Chittagong.",
  },
  {
    question: "Does Eammu Holidays provide visa processing from Bangladesh?",
    answer:
      "Yes. Eammu Holidays assists Bangladeshi passport holders with tourist visa, student visa, e-visa, Schengen visa, Dubai visa, Malaysia visa, and destination-specific document preparation. Final visa approval always depends on the embassy, immigration authority, or visa platform — no agency can guarantee an outcome.",
  },
  {
    question: "Can I book international air tickets from Bangladesh through Eammu Holidays?",
    answer:
      "Yes. We support international air ticket booking from Bangladesh to the Middle East (Dubai, Doha, Riyadh), Southeast Asia (Kuala Lumpur, Bangkok, Singapore), Europe, North America, Australia, and East Asia. Contact our Dhaka, Cumilla, or Chittagong office for ticket support.",
  },
  {
    question: "Do you offer Umrah packages from Bangladesh?",
    answer:
      "Yes. Eammu Holidays provides Umrah packages from Bangladesh including return flights, hotel accommodation in Makkah and Madinah, transport, visa guidance, and group coordination. Contact us for current Umrah package pricing and departure schedules.",
  },
  {
    question: "Do you have a travel agency office in Cumilla, Bangladesh?",
    answer:
      "Yes. Eammu Holidays serves customers from Cumilla (Comilla) district, including tourist visa, student visa, Umrah, air ticket, and tour package support. Customers from Cumilla can contact us directly for in-person or online consultation.",
  },
  {
    question: "How much does visa processing cost from Bangladesh?",
    answer:
      "Visa processing costs from Bangladesh vary by destination and visa type. Government embassy fees are set by each country. Eammu Holidays charges a service fee for document review, file preparation, and application guidance. Contact us directly for a clear cost breakdown for your specific destination.",
  },
  {
    question: "Do you guarantee visa approval for Bangladeshi applicants?",
    answer:
      "No ethical travel agency can guarantee visa approval. Visa decisions are made by the embassy, consulate, or immigration authority of the destination country. Eammu Holidays helps you prepare a stronger, more complete application file and reduces avoidable rejection risks — but final approval is never within our control.",
  },
  {
    question: "What documents are needed for a tourist visa from Bangladesh?",
    answer:
      "Required documents for a tourist visa from Bangladesh typically include a valid passport (minimum 6 months validity), recent passport-size photos, bank statements (last 3–6 months), salary certificate or income proof, hotel booking, return air ticket, travel insurance, and a cover letter. Requirements vary significantly by destination country.",
  },
  {
    question: "Can Eammu Holidays help with student visa applications from Bangladesh?",
    answer:
      "Yes. We provide student visa consultancy for popular study destinations including USA, UK, Canada, Australia, Germany, Japan, and Malaysia. Services include admission document review, financial file structuring, Statement of Purpose (SOP) guidance, and university conditional offer letter review.",
  },
  {
    question: "Is Eammu Holidays an IATA-accredited travel agency in Bangladesh?",
    answer:
      "Yes. Eammu Holidays is an IATA-accredited travel agency, meaning we meet international aviation and travel industry compliance standards for ticketing, booking, and travel consultancy services in Bangladesh.",
  },
  {
    question: "How do I contact a travel agency in Dhaka, Bangladesh?",
    answer:
      "You can contact Eammu Holidays — a travel agency in Dhaka, Bangladesh — through our website contact form at eammu.com/contact, via WhatsApp, or by visiting our Dhaka office. We offer consultations for visa, air tickets, tour packages, Umrah, and study abroad.",
  },
  {
    question: "What is the Schengen visa process from Bangladesh?",
    answer:
      "Bangladeshi passport holders require a Schengen visa to visit most European countries. The process involves choosing a lead country (the country of longest stay), gathering financial documents, booking a VFS or embassy appointment, and submitting the application. See our full Schengen visa guide for step-by-step details.",
  },
];

// ─── STRUCTURED DATA ──────────────────────────────────────────────────────────
function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      // Primary TravelAgency entity
      {
        "@type": ["TravelAgency", "LocalBusiness"],
        "@id": `${SITE_URL}#travelagency`,
        name: "Eammu Holidays",
        alternateName: ["Eammu", "Eammu Holidays Bangladesh", "ইম্মু হলিডেজ"],
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/og/travel-agency-bangladesh.jpg`,
        description:
          "IATA-accredited travel agency in Bangladesh offering visa processing, international air ticket booking, tour packages, Umrah packages, travel insurance, and study abroad guidance from Dhaka, Cumilla, and Chittagong.",
        foundingDate: "2016",
        numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 50 },
        areaServed: [
          { "@type": "Country", name: "Bangladesh" },
          { "@type": "City", name: "Dhaka" },
          { "@type": "City", name: "Cumilla" },
          { "@type": "City", name: "Chittagong" },
          { "@type": "City", name: "Comilla" },
          { "@type": "City", name: "Chattogram" },
        ],
        address: [
          {
            "@type": "PostalAddress",
            addressLocality: "Dhaka",
            addressRegion: "Dhaka Division",
            addressCountry: "BD",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Cumilla",
            addressRegion: "Chittagong Division",
            addressCountry: "BD",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Chittagong",
            addressRegion: "Chittagong Division",
            addressCountry: "BD",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Eammu Holidays Travel Services Bangladesh",
          itemListElement: primaryServices.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              url: `${SITE_URL}${service.href}`,
              description: service.text,
            },
          })),
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "342",
          bestRating: "5",
          worstRating: "1",
        },
        sameAs: [
          "https://www.facebook.com/eammuholidays",
          "https://www.instagram.com/eammuholidays",
        ],
        knowsAbout: [
          "Visa Processing Bangladesh",
          "Tourist Visa from Bangladesh",
          "Student Visa Bangladesh",
          "Umrah Packages Bangladesh",
          "International Air Tickets Bangladesh",
          "Schengen Visa Bangladesh",
          "Dubai Visa Bangladesh",
          "Tour Packages Bangladesh",
        ],
      },
      // WebPage schema
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Best Travel Agency in Bangladesh | Visa, Air Ticket & Tour Packages",
        description: metadata.description,
        inLanguage: "en-BD",
        isPartOf: {
          "@type": "WebSite",
          name: "Eammu Holidays",
          url: SITE_URL,
        },
        about: { "@id": `${SITE_URL}#travelagency` },
        primaryImageOfPage: `${SITE_URL}/og/travel-agency-bangladesh.jpg`,
        dateModified: new Date().toISOString().split("T")[0],
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".page-intro", ".faq-section"],
        },
      },
      // BreadcrumbList
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Travel Agency Bangladesh",
            item: PAGE_URL,
          },
        ],
      },
      // FAQPage
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      // HowTo — visa consultation process
      {
        "@type": "HowTo",
        "@id": `${PAGE_URL}#howto`,
        name: "How to Get Visa Help from a Travel Agency in Bangladesh",
        description:
          "Step-by-step process for getting visa processing and travel support from Eammu Holidays, a travel agency in Bangladesh.",
        step: processSteps.map((s) => ({
          "@type": "HowToStep",
          name: s.title,
          text: s.description,
          position: parseInt(s.step),
        })),
      },
      // ItemList — Popular visa links
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#visa-links`,
        name: "Popular visa services for Bangladeshi passport holders",
        itemListElement: bangladeshVisaLinks.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          url: `${SITE_URL}${item.href}`,
        })),
      },
      // Service schema — primary page service
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Travel Agency Services in Bangladesh",
        provider: { "@id": `${SITE_URL}#travelagency` },
        serviceType: "Travel Agency",
        areaServed: { "@type": "Country", name: "Bangladesh" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Bangladesh Travel Services",
          itemListElement: [
            "Visa Processing from Bangladesh",
            "International Air Ticket Booking Bangladesh",
            "Tour Packages Bangladesh",
            "Umrah Packages Bangladesh",
            "Study Abroad Consultancy Bangladesh",
            "Schengen Visa Bangladesh",
            "Travel Insurance Bangladesh",
          ].map((name, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
    ],
  };
}

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────
function SectionHeader({ eyebrow, title, children, inverted = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p
        className={`text-sm font-semibold uppercase tracking-[0.2em] ${
          inverted ? "text-orange-300" : "text-[#003d22]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight md:text-4xl ${
          inverted ? "text-white" : "text-gray-950"
        }`}
      >
        {title}
      </h2>
      {children ? (
        <p
          className={`mt-4 text-base leading-7 ${
            inverted ? "text-green-100" : "text-gray-600"
          }`}
        >
          {children}
        </p>
      ) : null}
    </div>
  );
}

function InternalLinkGrid({ links }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {links.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-[#003d22] hover:bg-green-50 hover:text-[#003d22]"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function TravelAgencyBangladeshPage() {
  const structuredData = buildStructuredData();

  return (
    <main className="bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-[#003d22] via-[#005c33] to-[#007a45] px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300">
              IATA-Accredited Travel Agency in Bangladesh
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Best Travel Agency in Bangladesh for Visa, Air Tickets &amp; Tour Packages
            </h1>
            <p className="page-intro mt-6 max-w-3xl text-lg leading-8 text-green-100">
              Eammu Holidays helps Bangladeshi travelers plan international travel with visa
              processing, air ticket booking, tour packages, Umrah packages, travel insurance,
              and study abroad guidance — from offices in Dhaka, Cumilla, and Chittagong.
            </p>
            {/* Bangla trust signal */}
            <p className="mt-3 text-sm text-green-200">
              বাংলাদেশের সেরা ট্রাভেল এজেন্সি — ভিসা, এয়ার টিকেট ও ট্যুর প্যাকেজ সেবা
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#f97316] px-7 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/visa-checker"
                className="rounded-full border border-white/70 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Check Visa Requirements
              </Link>
              <Link
                href="/flight-booking"
                className="rounded-full border border-white/70 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Book Air Ticket
              </Link>
            </div>
          </div>

          {/* Office cards */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <h2 className="text-xl font-bold">Bangladesh Office Coverage</h2>
            <div className="mt-5 space-y-4">
              {offices.map((office) => (
                <article key={office.city} className="rounded-xl bg-white p-4 text-gray-900">
                  <h3 className="font-bold text-[#003d22]">{office.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">{office.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <section className="border-b border-gray-100 bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {trustSignals.map((t) => (
              <div key={t.value} className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
                <p className="text-2xl font-extrabold text-[#003d22]">{t.value}</p>
                <p className="mt-1 text-sm font-bold text-gray-800">{t.label}</p>
                <p className="mt-1 text-xs text-gray-500">{t.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / INTRO ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="About Eammu Holidays" title="Bangladesh-Focused Travel & Visa Agency">
            Eammu Holidays is an IATA-accredited travel agency in Bangladesh, serving customers
            from Dhaka, Cumilla, and Chittagong with visa processing support, international air
            tickets, tour packages, Umrah travel, travel insurance, and study abroad consultancy.
            Our services are built for Bangladeshi passport holders who need clear, accurate, and
            practical travel support — not generic advice.
          </SectionHeader>
          <div className="mt-4 rounded-2xl border border-[#003d22]/20 bg-green-50 p-6 text-sm leading-7 text-gray-700">
            <strong className="text-[#003d22]">Why this page exists:</strong> We built this page
            for travelers searching for a "travel agency in Bangladesh," "visa agency in
            Bangladesh," "air ticket booking agency Bangladesh," "tour operator Bangladesh," or
            "Umrah package from Bangladesh." Our goal is to give you direct access to the exact
            visa guide, service page, or travel tool you need — with zero runaround.
          </div>
        </div>
      </section>

      {/* ── POPULAR ROUTES ── */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Popular Destinations"
            title="Most Popular Travel Routes from Bangladesh"
          >
            Bangladeshi travelers most frequently visit these destinations for tourism, work,
            study, and family visits. Click any route for detailed visa guidance.
          </SectionHeader>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {popularRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-[#003d22] hover:bg-green-50"
              >
                <span className="text-3xl">{route.flag}</span>
                <div>
                  <p className="text-xs text-gray-500">{route.from} →</p>
                  <p className="font-bold text-gray-900 group-hover:text-[#003d22]">{route.to}</p>
                  <p className="text-xs font-semibold text-[#f97316]">View visa guide →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Our Services" title="Complete Travel Agency Services in Bangladesh">
            From visa processing and air tickets to tour packages and Umrah — Eammu Holidays
            covers the full travel journey for Bangladeshi travelers.
          </SectionHeader>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {primaryServices.map((service) => (
              <article
                key={service.href}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-[#003d22]/40 hover:shadow-md"
              >
                <div className="mb-3 text-3xl">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-950">
                  <Link href={service.href} className="hover:text-[#003d22]">
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{service.text}</p>
                <Link
                  href={service.href}
                  className="mt-5 inline-flex text-sm font-bold text-[#003d22] hover:text-[#005c33]"
                >
                  View service details →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#003d22] px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="How It Works"
            title="How Eammu Holidays Helps You Travel from Bangladesh"
            inverted
          >
            A simple 6-step process from initial consultation to your trip departure.
          </SectionHeader>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur"
              >
                <p className="text-4xl font-extrabold text-orange-400">{step.step}</p>
                <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-green-100">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#f97316] px-8 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Start Your Travel Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── VISA LINKS ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Visa Guides" title="Popular Visa Searches from Bangladesh">
            These links take Bangladeshi travelers directly to country-specific visa guides,
            e-visa pages, and visa requirement pages on Eammu Holidays.
          </SectionHeader>
          <InternalLinkGrid links={bangladeshVisaLinks} />
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Why Bangladeshi Travelers Choose Eammu Holidays"
          >
            Practical support, honest document guidance, and a team that understands the
            realities of travelling on a Bangladeshi passport.
          </SectionHeader>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-bold text-gray-950">{reason.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDY ABROAD ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Study Abroad"
            title="Student Visa & Study Abroad from Bangladesh"
          >
            Eammu Holidays connects student visa guidance with destination-specific study pages,
            scholarship resources, and application planning for Bangladeshi students.
          </SectionHeader>
          <InternalLinkGrid links={studyLinks} />
        </div>
      </section>

      {/* ── TRAVEL TOOLS ── */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Free Travel Tools" title="Free Visa & Travel Resources for Bangladeshi Travelers">
            Check visa requirements, estimate travel costs, prepare document checklists, review
            rejection data, and track visa processing times — all free on Eammu Holidays.
          </SectionHeader>
          <InternalLinkGrid links={resourceLinks} />
        </div>
      </section>

      {/* ── OFFICES ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Bangladesh Offices"
            title="Travel Agency Offices in Bangladesh"
          >
            Eammu Holidays serves travelers from three major Bangladesh locations — Dhaka,
            Cumilla, and Chittagong.
          </SectionHeader>
          <div className="grid gap-5 md:grid-cols-3">
            {offices.map((office) => (
              <article
                key={office.city}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#003d22]">{office.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  {office.area}
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-600">{office.description}</p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex text-sm font-bold text-[#003d22] hover:text-[#005c33]"
                >
                  Contact {office.city} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="FAQ" title="Travel Agency Bangladesh — Frequently Asked Questions">
            Common questions from Bangladeshi travelers about visa processing, air tickets, tour
            packages, Umrah, and travel support.
          </SectionHeader>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-bold text-gray-950">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-[#003d22] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Ready to Travel?
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Need a Travel Agency in Bangladesh?
          </h2>
          <p className="mt-4 text-base leading-7 text-green-100">
            Contact Eammu Holidays for visa processing, air ticket booking, tour packages, Umrah
            travel, travel insurance, and study abroad support from Dhaka, Cumilla, or
            Chittagong, Bangladesh.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#f97316] px-8 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Contact Eammu Holidays
            </Link>
            <Link
              href="/visa-checker"
              className="rounded-full border border-white/70 px-8 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Check Visa Requirements
            </Link>
            <Link
              href="/flight-booking"
              className="rounded-full border border-white/70 px-8 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Book Air Ticket
            </Link>
          </div>
        </div>
      </section>
      <HomeSeoLinks />
    </main>
  );
}