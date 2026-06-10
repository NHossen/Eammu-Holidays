import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://eammu.com";
const PAGE_PATH = "/travel-agency-dhaka";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

// ─── METADATA ────────────────────────────────────────────────────────────────
export const metadata = {
  title:
    "Best Travel Agency in Dhaka | Visa, Air Ticket & Tour Packages — Eammu Holidays",
  description:
    "Eammu Holidays is a leading travel agency in Dhaka, Bangladesh offering visa processing, international air tickets, tour packages, Umrah, study abroad consultancy, and travel insurance. Serving customers across Dhaka, Mirpur, Uttara, Gulshan, Dhanmondi, and all of Dhaka Division.",
  keywords: [
    "travel agency Dhaka",
    "best travel agency in Dhaka",
    "travel agency in Dhaka Bangladesh",
    "visa agency Dhaka",
    "visa processing Dhaka",
    "air ticket booking Dhaka",
    "international air ticket Dhaka",
    "tour operator Dhaka",
    "tour packages from Dhaka",
    "Umrah package Dhaka",
    "student visa from Dhaka",
    "tourist visa from Dhaka",
    "Schengen visa from Dhaka",
    "Dubai visa from Dhaka",
    "Malaysia visa from Dhaka",
    "travel consultancy Dhaka",
    "holiday packages Dhaka",
    "visa consultancy Dhaka",
    "travel agency Gulshan Dhaka",
    "travel agency Dhanmondi Dhaka",
    "travel agency Uttara Dhaka",
    "travel agency Mirpur Dhaka",
    "Eammu Holidays Dhaka",
    "travel agency near me Dhaka",
    "online travel agency Dhaka",
    "cheap air tickets Dhaka",
    "flight booking Dhaka",
    "Dhaka to Dubai ticket",
    "Dhaka to Malaysia ticket",
    "IATA travel agency Dhaka",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-BD": PAGE_URL,
      "bn-BD": PAGE_URL,
    },
  },
  openGraph: {
    title: "Best Travel Agency in Dhaka | Eammu Holidays",
    description:
      "Leading travel agency in Dhaka, Bangladesh — visa processing, international air tickets, tour packages, Umrah, study abroad, and travel insurance from Gulshan, Dhanmondi, Uttara, and Mirpur.",
    url: PAGE_URL,
    siteName: "Eammu Holidays",
    locale: "en_BD",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og/travel-agency-dhaka.jpg`,
        width: 1200,
        height: 630,
        alt: "Eammu Holidays — Best Travel Agency in Dhaka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Travel Agency in Dhaka | Eammu Holidays",
    description:
      "Visa, air tickets, tour packages, Umrah & study abroad from a leading Dhaka travel agency — Eammu Holidays Bangladesh.",
    images: [`${SITE_URL}/og/travel-agency-dhaka.jpg`],
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
    phone: "+880-1631-312524",
    description:
      "Visa consultation, international air ticket booking, holiday planning, study abroad file preparation, Umrah packages, and corporate travel support for customers across Dhaka — including Gulshan, Dhanmondi, Uttara, Mirpur, Motijheel, and Narayanganj.",
  },
  {
    city: "Cumilla",
    name: "Cumilla, Bangladesh Office",
    area: "Cumilla, Bangladesh",
    phone: "+880-1631-312524",
    description:
      "Travel agency support for Cumilla and Comilla district clients — tourist visa guidance, student visa documents, air ticket booking, family tour packages, and Umrah travel.",
  },
  {
    city: "UAE",
    name: "UAE Offices",
    area: "Dubai, Abu Dhabi & Sharjah, UAE",
    phone: "+971-XXXX-XXXXXX",
    description:
      "Eammu Holidays UAE offices support Bangladeshi expatriates in Dubai, Abu Dhabi, and Sharjah with return ticket bookings, visa guidance, and Umrah packages — coordinated directly with Dhaka HQ.",
  },
];

const primaryServices = [
  {
    title: "Tourist Visa Processing from Dhaka",
    href: "/our-services/visa-services/tourist-visa-from-bangladesh",
    icon: "🛂",
    text:
      "Document checklist, application preparation, VFS appointment guidance, cover letter support, and destination-specific visa advice for Bangladeshi passport holders in Dhaka traveling to Europe, Middle East, Asia, and beyond.",
  },
  {
    title: "International Air Ticket Booking",
    href: "/flight-booking",
    icon: "✈️",
    text:
      "International and domestic air ticket booking from Dhaka (DAC / Hazrat Shahjalal International Airport) — with route planning, fare comparison, baggage guidance, and flexible date support for all major global destinations.",
  },
  {
    title: "Dubai Visa from Dhaka",
    href: "/visa/united-arab-emirates-visa",
    icon: "🏙️",
    text:
      "Dubai and UAE tourist visa assistance for Dhaka applicants — document checklist, application guidance, appointment support, and air ticket + hotel coordination for a smooth UAE trip.",
  },
  {
    title: "Umrah Packages from Dhaka",
    href: "/our-services/umrah-packages",
    icon: "🕌",
    text:
      "Umrah packages from Dhaka including return flights from DAC/CGP/ZYL, hotel accommodation in Makkah and Madinah, visa guidance, transport, and group coordination for a smooth spiritual journey.",
  },
  {
    title: "Student Visa Consultancy",
    href: "/our-services/visa-services/student-visa-from-bangladesh",
    icon: "🎓",
    text:
      "Study abroad planning from Dhaka — admission document review, financial file preparation, SOP guidance, and student visa support for USA, UK, Canada, Australia, Germany, Japan, and Malaysia.",
  },
  {
    title: "Schengen Visa Consultancy",
    href: "/schengen-visa",
    icon: "🇪🇺",
    text:
      "Comprehensive Schengen visa guidance for Dhaka applicants — country-specific documents, VFS appointment strategy, bank statement advice, and rejection risk assessment for European travel.",
  },
  {
    title: "Tour & Holiday Packages",
    href: "/our-services/tour-packages",
    icon: "🏝️",
    text:
      "Custom holiday packages for families, couples, groups, and corporate travelers from Dhaka — hotels, transfers, sightseeing, travel insurance guidance, and full itinerary planning.",
  },
  {
    title: "Business & Work Visa Support",
    href: "/our-services/visa-services",
    icon: "💼",
    text:
      "Business visa document preparation, invitation letter review, work permit guidance, and employment-based visa consultancy for Dhaka-based professionals traveling internationally.",
  },
  {
    title: "Travel Insurance",
    href: "/travel-insurance",
    icon: "🛡️",
    text:
      "Travel insurance guidance for Dhaka applicants — covering visa application requirements, medical emergencies, trip interruption, lost baggage, and destination-specific entry mandates.",
  },
];

const popularRoutes = [
  { from: "Dhaka", to: "Dubai / UAE", flag: "🇦🇪", href: "/visa/united-arab-emirates-visa" },
  { from: "Dhaka", to: "Malaysia", flag: "🇲🇾", href: "/visa-checker/bangladesh-visa-for-malaysia/e-visa" },
  { from: "Dhaka", to: "Thailand", flag: "🇹🇭", href: "/visa-checker/bangladesh-visa-for-thailand/e-visa" },
  { from: "Dhaka", to: "Singapore", flag: "🇸🇬", href: "/visa-checker/bangladesh-visa-for-singapore/e-visa" },
  { from: "Dhaka", to: "Turkey", flag: "🇹🇷", href: "/visa/visa-guide/turkey-visa-for-bangladesh" },
  { from: "Dhaka", to: "UK", flag: "🇬🇧", href: "/visa/visa-guide/united-kingdom-visa-for-bangladesh" },
  { from: "Dhaka", to: "USA", flag: "🇺🇸", href: "/visa/visa-guide/united-states-visa-for-bangladesh" },
  { from: "Dhaka", to: "Canada", flag: "🇨🇦", href: "/visa/visa-guide/canada-visa-for-bangladesh" },
  { from: "Dhaka", to: "Australia", flag: "🇦🇺", href: "/visa/visa-guide/australia-visa-for-bangladesh" },
  { from: "Dhaka", to: "Germany / Schengen", flag: "🇩🇪", href: "/visa/visa-guide/germany-visa-for-bangladesh" },
  { from: "Dhaka", to: "Japan", flag: "🇯🇵", href: "/visa/visa-guide/japan-visa-for-bangladesh" },
  { from: "Dhaka", to: "South Korea", flag: "🇰🇷", href: "/visa/visa-guide/south-korea-visa-for-bangladesh" },
];

const visaLinks = [
  { label: "Dubai Visa from Dhaka", href: "/visa/united-arab-emirates-visa" },
  { label: "Malaysia Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-malaysia/e-visa" },
  { label: "Thailand Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-thailand/e-visa" },
  { label: "Singapore Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-singapore/e-visa" },
  { label: "Turkey Visa for Bangladesh", href: "/visa/visa-guide/turkey-visa-for-bangladesh" },
  { label: "Canada Visa for Bangladesh", href: "/visa/visa-guide/canada-visa-for-bangladesh" },
  { label: "UK Visa for Bangladesh", href: "/visa/visa-guide/united-kingdom-visa-for-bangladesh" },
  { label: "USA Visa for Bangladesh", href: "/visa/visa-guide/united-states-visa-for-bangladesh" },
  { label: "Australia Visa for Bangladesh", href: "/visa/visa-guide/australia-visa-for-bangladesh" },
  { label: "Germany Visa for Bangladesh", href: "/visa/visa-guide/germany-visa-for-bangladesh" },
  { label: "Japan Visa for Bangladesh", href: "/visa/visa-guide/japan-visa-for-bangladesh" },
  { label: "South Korea Visa for Bangladesh", href: "/visa/visa-guide/south-korea-visa-for-bangladesh" },
  { label: "Schengen Visa from Bangladesh", href: "/schengen-visa" },
  { label: "Armenia Visa (e-Visa)", href: "/visa-checker/bangladesh-visa-for-armenia/e-visa" },
  { label: "Sri Lanka Visa (ETA)", href: "/visa-checker/bangladesh-visa-for-srilanka/eta" },
  { label: "Indonesia Visa (e-Visa)", href: "/visa-checker/bangladesh-visa-for-indonesia/e-visa" },
  { label: "Vietnam Visa (e-Visa)", href: "/visa-checker/bangladesh-visa-for-vietnam/e-visa" },
  { label: "Nepal Visa on Arrival", href: "/visa-checker/bangladesh-visa-for-nepal/visa-on-arrival" },
  { label: "Oman Visa (e-Visa)", href: "/visa-checker/bangladesh-visa-for-oman/e-visa" },
  { label: "Qatar Visa (e-Visa)", href: "/visa-checker/bangladesh-visa-for-qatar/e-visa" },
  { label: "Portugal Visa for Bangladesh", href: "/visa-checker/portugal-visa-for-bangladesh/visa-required" },
  { label: "Albania Visa (e-Visa)", href: "/visa-checker/bangladesh-visa-for-albania/e-visa" },
  { label: "Montenegro Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-montenegro/visa-required" },
  { label: "Saudi Arabia Visa for Bangladesh", href: "/visa-checker/bangladesh-visa-for-saudi-arabia/visa-required" },
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
      "Contact Eammu Holidays Dhaka via phone, WhatsApp, or our website. Tell us your travel purpose — tourist visa, Umrah, student visa, business travel, or holiday package — and your destination country.",
  },
  {
    step: "02",
    title: "Document Checklist Review",
    description:
      "We review your passport, employment status, bank statements, and destination requirements to prepare a clear, accurate document checklist tailored to your profile and Bangladeshi passport holder requirements.",
  },
  {
    step: "03",
    title: "File Preparation & Guidance",
    description:
      "We assist with cover letter drafting, financial document structuring, application form guidance, VFS or embassy appointment booking tips, and rejection risk assessment before you submit.",
  },
  {
    step: "04",
    title: "Application Submission Support",
    description:
      "We guide you through embassy appointment booking, VFS Dhaka submission, online e-visa portals, or consular procedures — with country-specific accuracy from our experienced Dhaka team.",
  },
  {
    step: "05",
    title: "Air Ticket & Travel Booking",
    description:
      "Once your visa is confirmed, book international air tickets from Dhaka (DAC), hotel accommodation, airport transfers, travel insurance, and tour packages through Eammu Holidays.",
  },
  {
    step: "06",
    title: "Post-Travel Support",
    description:
      "We remain available for travel queries, itinerary changes, emergency contact support, and repeat travel consultancy — our Dhaka office is your long-term travel partner.",
  },
];

const trustSignals = [
  { value: "IATA", label: "Accredited Agency", sub: "Internationally recognized" },
  { value: "5000+", label: "Travelers Supported", sub: "From Dhaka and all Bangladesh" },
  { value: "50+", label: "Destination Countries", sub: "Middle East, Asia, Europe, Americas" },
  { value: "5", label: "Global Offices", sub: "Dhaka · Cumilla · Abu Dhabi · Sharjah · Yerevan" },
  { value: "8+", label: "Years of Experience", sub: "Serving Bangladeshi travelers since 2016" },
  { value: "95%", label: "Client Satisfaction", sub: "Based on post-service feedback" },
];

const reasons = [
  {
    title: "IATA-Accredited Dhaka Travel Agency",
    desc: "Eammu Holidays holds IATA accreditation, ensuring internationally recognized, compliant travel and ticketing services from our Dhaka office.",
  },
  {
    title: "Dhaka-Focused Visa Expertise",
    desc: "Deep knowledge of Bangladeshi passport requirements, VFS Dhaka procedures, common visa rejection reasons, and embassy expectations for every major destination.",
  },
  {
    title: "Offices Across Bangladesh & UAE",
    desc: "Physical presence in Dhaka, Cumilla, Abu Dhabi, and Sharjah means coordinated support for Bangladeshi travelers whether they are at home or abroad.",
  },
  {
    title: "Transparent Document Guidance",
    desc: "We explain exactly what documents are needed, why they matter, and what risk factors to address — before you pay any embassy fee or VFS booking charge.",
  },
  {
    title: "End-to-End Travel Support",
    desc: "From visa file preparation and air ticket booking to travel insurance and tour packages — Eammu Holidays handles your complete travel journey from Dhaka.",
  },
  {
    title: "Free Internal Travel Tools",
    desc: "Visa checker, processing time tracker, cost calculator, and checklist generator are all free on eammu.com — purpose-built for Bangladeshi passport holders.",
  },
];

const faqs = [
  {
    question: "Which is the best travel agency in Dhaka for visa and air tickets?",
    answer:
      "Eammu Holidays is an IATA-accredited travel agency in Dhaka, Bangladesh offering visa processing support, international air ticket booking from DAC, tour packages, Umrah packages, travel insurance guidance, and study abroad consultancy. We serve customers across Gulshan, Dhanmondi, Uttara, Mirpur, Motijheel, and all of Dhaka.",
  },
  {
    question: "Does Eammu Holidays process tourist visas from Dhaka?",
    answer:
      "Yes. Eammu Holidays assists Bangladeshi passport holders in Dhaka with tourist visa applications for Dubai, Malaysia, Thailand, Singapore, UK, USA, Canada, Australia, Germany, Japan, and many more destinations. We prepare document checklists, draft cover letters, and guide applicants through VFS Dhaka or embassy procedures.",
  },
  {
    question: "Can I book a Dhaka to Dubai air ticket through Eammu Holidays?",
    answer:
      "Yes. We support international air ticket booking from Dhaka (Hazrat Shahjalal International Airport, DAC) to Dubai (DXB), Abu Dhabi (AUH), Doha (DOH), Riyadh (RUH), Kuala Lumpur (KUL), Bangkok (BKK), Singapore (SIN), London (LHR), and all major global destinations.",
  },
  {
    question: "Do you offer Umrah packages from Dhaka?",
    answer:
      "Yes. Eammu Holidays provides Umrah packages from Dhaka including return flights from DAC, Chittagong (CGP), or Sylhet (ZYL), hotel accommodation in Makkah and Madinah, ground transport, Saudi visa guidance, and group coordination. Contact us for current Umrah package pricing and departure schedules.",
  },
  {
    question: "Where is the Eammu Holidays office in Dhaka?",
    answer:
      "Eammu Holidays has a Dhaka office serving customers across the city. You can also contact us via WhatsApp at +880-1631-312524 or through the contact form at eammu.com/contact for appointments, visa consultations, and ticket bookings.",
  },
  {
    question: "How much does visa processing cost from Dhaka?",
    answer:
      "Visa processing costs from Dhaka vary by destination and visa type. Government embassy fees and VFS service charges are set by each country. Eammu Holidays charges a service fee for document review, file preparation, and application guidance. Contact us directly for a clear cost breakdown for your destination.",
  },
  {
    question: "Do you guarantee visa approval for Dhaka applicants?",
    answer:
      "No ethical travel agency can guarantee visa approval. Visa decisions are made by the embassy, consulate, or immigration authority of the destination country. Eammu Holidays helps you prepare a stronger, more complete application file and reduces avoidable rejection risks — but final approval is never within our control.",
  },
  {
    question: "Can Eammu Holidays help with Schengen visa from Dhaka?",
    answer:
      "Yes. We provide full Schengen visa guidance for Dhaka applicants — country selection strategy (lead country), document preparation, VFS Dhaka appointment guidance, bank statement advice, and rejection risk assessment. See our Schengen visa guide at eammu.com/schengen-visa.",
  },
  {
    question: "Can Eammu Holidays assist with student visa applications from Dhaka?",
    answer:
      "Yes. We provide study abroad consultancy for popular destinations including USA, UK, Canada, Australia, Germany, Japan, and Malaysia. Services include admission document review, financial file structuring, Statement of Purpose (SOP) guidance, and student visa preparation.",
  },
  {
    question: "Does Eammu Holidays serve customers in Uttara, Mirpur, and Dhanmondi?",
    answer:
      "Yes. Eammu Holidays serves customers from all areas of Dhaka — including Uttara, Mirpur, Dhanmondi, Gulshan, Banani, Motijheel, Mohammadpur, and surrounding districts such as Narayanganj, Gazipur, and Manikganj.",
  },
  {
    question: "What documents are needed for a tourist visa from Dhaka?",
    answer:
      "Required documents typically include a valid Bangladeshi passport (minimum 6 months validity), recent passport-size photos, bank statements (last 3–6 months), salary certificate or income proof, hotel booking, return air ticket, travel insurance, and a cover letter. Requirements vary by destination country.",
  },
  {
    question: "Is Eammu Holidays an IATA-accredited travel agency in Dhaka?",
    answer:
      "Yes. Eammu Holidays is an IATA-accredited travel agency, meaning we meet international aviation and travel industry compliance standards for ticketing, booking, and travel consultancy services in Dhaka and across Bangladesh.",
  },
];

// ─── STRUCTURED DATA ──────────────────────────────────────────────────────────
function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TravelAgency", "LocalBusiness"],
        "@id": `${SITE_URL}#travelagency-dhaka`,
        name: "Eammu Holidays Dhaka",
        alternateName: ["Eammu Holidays", "Eammu Bangladesh", "ইম্মু হলিডেজ ঢাকা"],
        url: PAGE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/og/travel-agency-dhaka.jpg`,
        description:
          "Leading IATA-accredited travel agency in Dhaka, Bangladesh offering visa processing, international air ticket booking from DAC, Umrah packages, tour packages, travel insurance, and study abroad guidance.",
        foundingDate: "2016",
        areaServed: [
          { "@type": "City", name: "Dhaka" },
          { "@type": "AdministrativeArea", name: "Dhaka Division" },
          { "@type": "Country", name: "Bangladesh" },
          { "@type": "City", name: "Narayanganj" },
          { "@type": "City", name: "Gazipur" },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressRegion: "Dhaka Division",
          addressCountry: "BD",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Eammu Holidays Travel Services Dhaka",
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
          reviewCount: "284",
          bestRating: "5",
          worstRating: "1",
        },
        sameAs: [
          "https://www.facebook.com/eammuholidays",
          "https://www.instagram.com/eammuholidays",
          `${SITE_URL}/travel-agency-bangladesh`,
          `${SITE_URL}/travel-agency-abu-dhabi`,
          `${SITE_URL}/travel-agency-sharjah`,
        ],
        parentOrganization: {
          "@type": "TravelAgency",
          "@id": `${SITE_URL}#travelagency`,
          name: "Eammu Holidays",
          url: SITE_URL,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Best Travel Agency in Dhaka | Visa, Air Ticket & Tour Packages",
        description: metadata.description,
        inLanguage: "en-BD",
        isPartOf: { "@type": "WebSite", name: "Eammu Holidays", url: SITE_URL },
        about: { "@id": `${SITE_URL}#travelagency-dhaka` },
        primaryImageOfPage: `${SITE_URL}/og/travel-agency-dhaka.jpg`,
        dateModified: new Date().toISOString().split("T")[0],
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".page-intro", ".faq-section"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Travel Agency Dhaka", item: PAGE_URL },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "HowTo",
        "@id": `${PAGE_URL}#howto`,
        name: "How to Get Visa Help from a Travel Agency in Dhaka",
        description:
          "Step-by-step process for getting visa processing and travel support from Eammu Holidays in Dhaka, Bangladesh.",
        step: processSteps.map((s) => ({
          "@type": "HowToStep",
          name: s.title,
          text: s.description,
          position: parseInt(s.step),
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#visa-links`,
        name: "Popular visa services for Dhaka-based travelers",
        itemListElement: visaLinks.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          url: `${SITE_URL}${item.href}`,
        })),
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Travel Agency Services in Dhaka Bangladesh",
        provider: { "@id": `${SITE_URL}#travelagency-dhaka` },
        serviceType: "Travel Agency",
        areaServed: [
          { "@type": "City", name: "Dhaka" },
          { "@type": "Country", name: "Bangladesh" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dhaka Travel Services",
          itemListElement: [
            "Tourist Visa Processing from Dhaka",
            "International Air Ticket Booking Dhaka",
            "Umrah Packages Dhaka",
            "Tour Packages from Dhaka",
            "Schengen Visa from Dhaka",
            "Study Abroad Consultancy Dhaka",
            "Travel Insurance Dhaka",
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
export default function TravelAgencyDhakaPage() {
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
              IATA-Accredited Travel Agency in Dhaka, Bangladesh
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Best Travel Agency in Dhaka for Visa, Air Tickets &amp; Tour Packages
            </h1>
            <p className="page-intro mt-6 max-w-3xl text-lg leading-8 text-green-100">
              Eammu Holidays in Dhaka helps Bangladeshi travelers plan international travel with
              visa processing, air ticket booking from DAC, tour packages, Umrah packages,
              travel insurance, and study abroad guidance — serving Gulshan, Dhanmondi, Uttara,
              Mirpur, and all of Dhaka Division.
            </p>
            <p className="mt-3 text-sm text-green-200">
              ঢাকার সেরা ট্রাভেল এজেন্সি — ভিসা, এয়ার টিকেট ও ট্যুর প্যাকেজ সেবা
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

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <h2 className="text-xl font-bold">Dhaka Office & Global Coverage</h2>
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
          <SectionHeader eyebrow="About Eammu Holidays Dhaka" title="Dhaka's Trusted Travel & Visa Agency">
            Eammu Holidays operates from Dhaka as the Bangladesh headquarters — serving
            customers across the capital with visa processing support, international air tickets
            from Hazrat Shahjalal International Airport (DAC), Umrah packages, tour packages,
            travel insurance guidance, and study abroad consultancy. Backed by offices in
            Cumilla, Abu Dhabi, Sharjah, and Yerevan, we offer coordinated support for
            Bangladeshi travelers at home and abroad.
          </SectionHeader>
          <div className="mt-4 rounded-2xl border border-[#003d22]/20 bg-green-50 p-6 text-sm leading-7 text-gray-700">
            <strong className="text-[#003d22]">Why this page exists:</strong> We built this page
            for travelers in Dhaka searching for a "travel agency in Dhaka," "visa agency
            Dhaka," "air ticket booking Dhaka," "Umrah package Dhaka," or "Dubai visa from
            Dhaka." This page connects you directly to the visa guide, service, or travel tool
            you need — with no runaround.
          </div>
        </div>
      </section>

      {/* ── POPULAR ROUTES ── */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Popular Destinations" title="Most Popular Travel Routes from Dhaka">
            Dhaka-based travelers most frequently visit these destinations for tourism, work,
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
          <SectionHeader eyebrow="Our Services" title="Complete Travel Agency Services in Dhaka, Bangladesh">
            From visa processing and air tickets to Umrah packages and study abroad guidance —
            Eammu Holidays covers the full travel journey for Dhaka-based travelers.
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
            title="How Eammu Holidays Helps You Travel from Dhaka"
            inverted
          >
            A simple 6-step process from initial consultation to your flight departure from DAC.
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
          <SectionHeader eyebrow="Visa Guides" title="Popular Visa Searches from Dhaka">
            These links take Dhaka-based travelers directly to country-specific visa guides,
            e-visa pages, and visa requirement pages on Eammu Holidays.
          </SectionHeader>
          <InternalLinkGrid links={visaLinks} />
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Why Choose Us" title="Why Dhaka Travelers Choose Eammu Holidays">
            Practical support, honest document guidance, and a team that understands the
            realities of travelling on a Bangladeshi passport from Dhaka.
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
          <SectionHeader eyebrow="Study Abroad" title="Student Visa & Study Abroad from Dhaka">
            Eammu Holidays connects Dhaka-based students with destination-specific study pages,
            scholarship resources, and application planning for studying abroad.
          </SectionHeader>
          <InternalLinkGrid links={studyLinks} />
        </div>
      </section>

      {/* ── TRAVEL TOOLS ── */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Free Travel Tools" title="Free Visa & Travel Resources for Dhaka Travelers">
            Check visa requirements, estimate travel costs, prepare document checklists, review
            rejection data, and track visa processing times — all free on Eammu Holidays.
          </SectionHeader>
          <InternalLinkGrid links={resourceLinks} />
        </div>
      </section>

      {/* ── OFFICES ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="Our Offices" title="Eammu Holidays Office Locations">
            Eammu Holidays serves Dhaka travelers with support from our network of offices
            across Bangladesh, UAE, and Armenia.
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
          <SectionHeader eyebrow="FAQ" title="Travel Agency Dhaka — Frequently Asked Questions">
            Common questions from Dhaka travelers about visa processing, air tickets, tour
            packages, Umrah, and travel support from Bangladesh.
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
            Need a Travel Agency in Dhaka?
          </h2>
          <p className="mt-4 text-base leading-7 text-green-100">
            Contact Eammu Holidays in Dhaka for visa processing, air ticket booking from DAC,
            tour packages, Umrah travel, travel insurance, and study abroad support. We serve
            all areas of Dhaka and beyond.
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
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-green-200">
            <Link href="/travel-agency-bangladesh" className="hover:text-white underline underline-offset-2">
              Travel Agency Bangladesh →
            </Link>
            <Link href="/travel-agency-abu-dhabi" className="hover:text-white underline underline-offset-2">
              Travel Agency Abu Dhabi →
            </Link>
            <Link href="/travel-agency-sharjah" className="hover:text-white underline underline-offset-2">
              Travel Agency Sharjah →
            </Link>
            <Link href="/travel-agency-delhi" className="hover:text-white underline underline-offset-2">
              Travel Agency Delhi →
            </Link>
          </div>
        </div>
      </section>
      <HomeSeoLinks />
    </main>
  );
}