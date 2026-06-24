import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://eammu.com";
const PAGE_PATH = "/travel-agency-abu-dhabi";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

// ─── METADATA ────────────────────────────────────────────────────────────────
export const metadata = {
  title:
    "Travel Agency in Abu Dhabi , United Arab Emirates | Eammu Holidays",
  description:
    "Trusted travel agency in Abu Dhabi, UAE offering visa processing, international air tickets, tour packages, Umrah, Bangladesh visa, and travel insurance. Serving Bangladeshi expats and all nationalities across Abu Dhabi and Al Ain.",
  keywords: [
    "travel agency Abu Dhabi",
    "best travel agency in Abu Dhabi",
    "travel agency in Abu Dhabi UAE",
    "visa agency Abu Dhabi",
    "visa processing Abu Dhabi",
    "air ticket booking Abu Dhabi",
    "international air ticket Abu Dhabi",
    "tour operator Abu Dhabi",
    "tour packages from Abu Dhabi",
    "Umrah package Abu Dhabi",
    "Bangladesh visa from Abu Dhabi",
    "tourist visa from Abu Dhabi",
    "Schengen visa from Abu Dhabi",
    "travel consultancy Abu Dhabi",
    "holiday packages Abu Dhabi",
    "visa consultancy Abu Dhabi",
    "Bangladeshi travel agency Abu Dhabi",
    "Eammu Holidays Abu Dhabi",
    "travel agency near me Abu Dhabi",
    "online travel agency Abu Dhabi",
    "cheap air tickets Abu Dhabi",
    "flight booking Abu Dhabi",
    "Abu Dhabi to Dhaka ticket",
    "Abu Dhabi to Bangladesh ticket",
    "expat travel agency Abu Dhabi",
    "travel agency Al Ain",
    "Bangladesh air ticket AUH",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-AE": PAGE_URL,
      "bn-BD": PAGE_URL,
    },
  },
  openGraph: {
    title: "Best Travel Agency in Abu Dhabi | Eammu Holidays",
    description:
      "Trusted travel agency in Abu Dhabi, UAE — visa processing, international air tickets, tour packages, Umrah, Bangladesh visa, and travel insurance for Bangladeshi expats and all nationalities.",
    url: PAGE_URL,
    siteName: "Eammu Holidays",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og/travel-agency-abu-dhabi.jpg`,
        width: 1200,
        height: 630,
        alt: "Eammu Holidays — Best Travel Agency in Abu Dhabi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Travel Agency in Abu Dhabi | Eammu Holidays",
    description:
      "Visa, air tickets, tour packages, Umrah & Bangladesh travel from a trusted Abu Dhabi travel agency — Eammu Holidays UAE.",
    images: [`${SITE_URL}/og/travel-agency-abu-dhabi.jpg`],
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
    city: "Abu Dhabi",
    name: "Abu Dhabi, UAE Office",
    area: "Abu Dhabi, United Arab Emirates",
    phone: "+971-XXXX-XXXXXX",
    description:
      "Visa consultation, international air ticket booking, Bangladesh travel planning, Umrah packages, tour packages, and study abroad support for customers across Abu Dhabi, Al Ain, and the Western Region.",
  },
  {
    city: "Bangladesh HQ",
    name: "Bangladesh Offices",
    area: "Dhaka, Cumilla & Chittagong",
    phone: "+880-1631-312524",
    description:
      "Eammu Holidays headquarters in Bangladesh with offices in Dhaka, Cumilla, and Chittagong — coordinated support for travelers moving between Bangladesh and the UAE.",
  },
  {
    city: "Armenia",
    name: "Yerevan, Armenia Office",
    area: "Yerevan, Republic of Armenia",
    phone: "+374-XXXX-XXXXXX",
    description:
      "Europe-gateway services including Armenian visa, CIS travel, Schengen route planning, and transit support for UAE-based travelers exploring Europe via Armenia.",
  },
];

const primaryServices = [
  {
    title: "Bangladesh Visa from Abu Dhabi",
    href: "/visa-checker/bangladesh-visa-for-united-arab-emirates/visa-required",
    icon: "🇧🇩",
    text:
      "Assistance with Bangladesh tourist visa, emergency visa, and documentation for Bangladeshi expatriates in Abu Dhabi traveling home — including airline ticket coordination and OTC visa support from the Bangladesh Embassy Abu Dhabi.",
  },
  {
    title: "Tourist Visa Processing from Abu Dhabi",
    href: "/our-services/visa-services/tourist-visa-from-bangladesh",
    icon: "🛂",
    text:
      "Document checklist, application preparation, appointment guidance, cover letter support, and destination-specific visa advice for travelers in Abu Dhabi planning holidays abroad.",
  },
  {
    title: "International Air Ticket Booking",
    href: "/flight-booking",
    icon: "✈️",
    text:
      "International air ticket booking from Abu Dhabi (AUH) and Al Ain (AAN) — with route planning, fare comparison, baggage guidance, and flexible date support for Dhaka, Chittagong, Sylhet, and all major destinations.",
  },
  {
    title: "Umrah Packages from Abu Dhabi",
    href: "/our-services/umrah-packages",
    icon: "🕌",
    text:
      "Umrah packages for Abu Dhabi-based travelers — return flights, hotel accommodation in Makkah and Madinah, visa guidance, transport, and group coordination. Ground packages also available for Abu Dhabi residents traveling overland.",
  },
  {
    title: "Tour & Holiday Packages",
    href: "/our-services/tour-packages",
    icon: "🏝️",
    text:
      "Custom holiday packages for families, couples, and groups from Abu Dhabi — Europe tours, Southeast Asia packages, Bangladesh homecoming trips, Maldives, and budget-friendly packages for UAE expats.",
  },
  {
    title: "Schengen Visa Consultancy",
    href: "/schengen-visa",
    icon: "🇪🇺",
    text:
      "Comprehensive Schengen visa guidance for Abu Dhabi-based travelers — country-specific documents, VFS Abu Dhabi appointment strategy, bank statement advice, and rejection risk assessment.",
  },
  {
    title: "Student Visa Consultancy",
    href: "/our-services/visa-services/student-visa-from-bangladesh",
    icon: "🎓",
    text:
      "Study abroad planning from UAE — admission document review, financial file preparation, SOP guidance, and student visa support for USA, UK, Canada, Australia, Germany, Japan, and Malaysia.",
  },
  {
    title: "Travel Insurance",
    href: "/travel-insurance",
    icon: "🛡️",
    text:
      "Travel insurance guidance for visa applications, medical emergencies, trip interruption, and destination-specific entry requirements — essential for Schengen and many Western country visa applications from UAE.",
  },
  {
    title: "Business & Work Visa Support",
    href: "/our-services/visa-services",
    icon: "💼",
    text:
      "Business visa document preparation, invitation letter review, work permit guidance, and employment-based visa consultancy for professionals based in Abu Dhabi traveling internationally for meetings or relocation.",
  },
];

const popularRoutes = [
  { from: "Abu Dhabi", to: "Dhaka / Bangladesh", flag: "🇧🇩", href: "/visa-checker/bangladesh-visa-for-united-arab-emirates/visa-required" },
  { from: "Abu Dhabi", to: "Malaysia", flag: "🇲🇾", href: "/visa-checker/bangladesh-visa-for-malaysia/e-visa" },
  { from: "Abu Dhabi", to: "Thailand", flag: "🇹🇭", href: "/visa-checker/bangladesh-visa-for-thailand/e-visa" },
  { from: "Abu Dhabi", to: "Singapore", flag: "🇸🇬", href: "/visa-checker/bangladesh-visa-for-singapore/e-visa" },
  { from: "Abu Dhabi", to: "Turkey", flag: "🇹🇷", href: "/visa/visa-guide/turkey-visa-for-bangladesh" },
  { from: "Abu Dhabi", to: "UK", flag: "🇬🇧", href: "/visa/visa-guide/united-kingdom-visa-for-bangladesh" },
  { from: "Abu Dhabi", to: "USA", flag: "🇺🇸", href: "/visa/visa-guide/united-states-visa-for-bangladesh" },
  { from: "Abu Dhabi", to: "Canada", flag: "🇨🇦", href: "/visa/visa-guide/canada-visa-for-bangladesh" },
  { from: "Abu Dhabi", to: "Australia", flag: "🇦🇺", href: "/visa/visa-guide/australia-visa-for-bangladesh" },
  { from: "Abu Dhabi", to: "Germany / Schengen", flag: "🇩🇪", href: "/visa/visa-guide/germany-visa-for-bangladesh" },
  { from: "Abu Dhabi", to: "Armenia / Europe", flag: "🇦🇲", href: "/visa-checker/bangladesh-visa-for-armenia/e-visa" },
  { from: "Abu Dhabi", to: "Japan", flag: "🇯🇵", href: "/visa/visa-guide/japan-visa-for-bangladesh" },
];

const visaLinks = [
  { label: "Bangladesh Visa from UAE", href: "/visa-checker/bangladesh-visa-for-united-arab-emirates/visa-required" },
  { label: "Malaysia Visa Guide", href: "/visa-checker/bangladesh-visa-for-malaysia/e-visa" },
  { label: "Thailand Visa Guide", href: "/visa-checker/bangladesh-visa-for-thailand/e-visa" },
  { label: "Singapore Visa Guide", href: "/visa-checker/bangladesh-visa-for-singapore/e-visa" },
  { label: "Turkey Visa Guide", href: "/visa/visa-guide/turkey-visa-for-bangladesh" },
  { label: "Canada Visa Guide", href: "/visa/visa-guide/canada-visa-for-bangladesh" },
  { label: "UK Visa Guide", href: "/visa/visa-guide/united-kingdom-visa-for-bangladesh" },
  { label: "USA Visa Guide", href: "/visa/visa-guide/united-states-visa-for-bangladesh" },
  { label: "Australia Visa Guide", href: "/visa/visa-guide/australia-visa-for-bangladesh" },
  { label: "Germany Visa Guide", href: "/visa/visa-guide/germany-visa-for-bangladesh" },
  { label: "Japan Visa Guide", href: "/visa/visa-guide/japan-visa-for-bangladesh" },
  { label: "South Korea Visa Guide", href: "/visa/visa-guide/south-korea-visa-for-bangladesh" },
  { label: "Schengen Visa Complete Guide", href: "/schengen-visa" },
  { label: "Armenia Visa (e-Visa)", href: "/visa-checker/bangladesh-visa-for-armenia/e-visa" },
  { label: "Sri Lanka Visa (ETA)", href: "/visa-checker/bangladesh-visa-for-srilanka/eta" },
  { label: "Indonesia Visa (e-Visa)", href: "/visa-checker/bangladesh-visa-for-indonesia/e-visa" },
  { label: "Vietnam Visa (e-Visa)", href: "/visa-checker/bangladesh-visa-for-vietnam/e-visa" },
  { label: "Nepal Visa on Arrival", href: "/visa-checker/bangladesh-visa-for-nepal/visa-on-arrival" },
  { label: "Oman Visa (e-Visa)", href: "/visa-checker/bangladesh-visa-for-oman/e-visa" },
  { label: "Qatar Visa (e-Visa)", href: "/visa-checker/bangladesh-visa-for-qatar/e-visa" },
  { label: "Portugal Visa Guide", href: "/visa-checker/portugal-visa-for-bangladesh/visa-required" },
  { label: "Albania Visa (e-Visa)", href: "/visa-checker/bangladesh-visa-for-albania/e-visa" },
  { label: "Montenegro Visa Guide", href: "/visa-checker/bangladesh-visa-for-montenegro/visa-required" },
  { label: "Saudi Arabia Visa Guide", href: "/visa-checker/bangladesh-visa-for-saudi-arabia/visa-required" },
];

const studyLinks = [
  { label: "Study in USA", href: "/study-abroad/student-visa/united-states" },
  { label: "Study in UK", href: "/study-abroad/student-visa/united-kingdom" },
  { label: "Study in Canada", href: "/study-abroad/student-visa/canada" },
  { label: "Study in Australia", href: "/study-abroad/student-visa/australia" },
  { label: "Study in Germany", href: "/study-abroad/student-visa/germany" },
  { label: "Study in Japan", href: "/study-abroad/student-visa/japan" },
  { label: "Study in Malaysia", href: "/study-abroad/student-visa/malaysia" },
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
      "Contact Eammu Holidays Abu Dhabi via phone, WhatsApp, or our website. Tell us your travel purpose — Bangladesh homecoming, tourist holiday, Umrah, business, or student visa — and your destination country.",
  },
  {
    step: "02",
    title: "Document Checklist Review",
    description:
      "We review your passport (Bangladesh or other nationality), UAE residency status, purpose of travel, and destination requirements to prepare an accurate, tailored document checklist.",
  },
  {
    step: "03",
    title: "File Preparation & Guidance",
    description:
      "We assist with cover letter drafting, financial document structuring, application form guidance, VFS Abu Dhabi appointment strategy, and risk assessment — before you pay any embassy fee.",
  },
  {
    step: "04",
    title: "Application Submission Support",
    description:
      "We guide you through embassy appointment booking, VFS Abu Dhabi submission, online e-visa portals, or Bangladesh Embassy Abu Dhabi procedures — with accurate, up-to-date guidance.",
  },
  {
    step: "05",
    title: "Air Ticket & Travel Booking",
    description:
      "Once your visa is confirmed, book international air tickets from Abu Dhabi (AUH), hotel accommodation, airport transfers, travel insurance, and tour packages through Eammu Holidays.",
  },
  {
    step: "06",
    title: "Post-Travel Support",
    description:
      "We remain available for travel queries, itinerary changes, emergency contact support, and repeat travel consultancy — whether you are traveling from Abu Dhabi or returning from Bangladesh.",
  },
];

const trustSignals = [
  { value: "UAE", label: "Based in Abu Dhabi", sub: "Capital city — serving all UAE" },
  { value: "5000+", label: "Travelers Supported", sub: "UAE, Bangladesh & beyond" },
  { value: "50+", label: "Destination Countries", sub: "Middle East, Asia, Europe, Americas" },
  { value: "5", label: "Global Offices", sub: "Abu Dhabi · Sharjah · Dhaka · Cumilla · Yerevan" },
  { value: "8+", label: "Years of Experience", sub: "Serving travelers since 2016" },
  { value: "95%", label: "Client Satisfaction", sub: "Based on post-service feedback" },
];

const reasons = [
  {
    title: "Specialist in Bangladeshi Expat Travel",
    desc: "Deep knowledge of Bangladesh visa requirements, OTC emergency visa processing via the Bangladesh Embassy Abu Dhabi, and air ticket routes from AUH for Bangladeshi passport holders.",
  },
  {
    title: "Abu Dhabi Office + Bangladesh Headquarters",
    desc: "Our Abu Dhabi office works directly with our Bangladesh offices in Dhaka, Cumilla, and Chittagong — providing end-to-end support for travelers moving between Bangladesh and the UAE capital.",
  },
  {
    title: "Transparent Document Guidance",
    desc: "We explain exactly what documents are needed, why they matter, and what risk factors to address — before you pay any embassy fee, VFS Abu Dhabi charge, or airline deposit.",
  },
  {
    title: "Air Tickets from AUH & DXB",
    desc: "We book international air tickets from Abu Dhabi International Airport (AUH) and Dubai International Airport (DXB) — whichever route is cheaper or more convenient for you.",
  },
  {
    title: "Umrah & Hajj Travel Planning",
    desc: "UAE-based Umrah packages with flights from Abu Dhabi, hotel, transport, and visa guidance. Convenient for Bangladeshi expat communities living across Abu Dhabi and Al Ain.",
  },
  {
    title: "Free Online Travel Tools",
    desc: "Visa checker, processing time tracker, cost calculator, and checklist generator are all free on eammu.com — available to all UAE-based travelers planning international trips.",
  },
];

const faqs = [
  {
    question: "Which is the best travel agency in Abu Dhabi for Bangladeshi expats?",
    answer:
      "Eammu Holidays is a trusted travel agency in Abu Dhabi serving Bangladeshi expatriates and all nationalities across the UAE capital. We offer visa processing support, Bangladesh air tickets, international flight booking from AUH, Umrah packages, tour packages, and travel insurance guidance.",
  },
  {
    question: "Does Eammu Holidays have an office in Abu Dhabi, UAE?",
    answer:
      "Yes. Eammu Holidays operates in Abu Dhabi, UAE, coordinated with our Bangladesh offices in Dhaka, Cumilla, and Chittagong, and our Yerevan, Armenia office. Customers in Abu Dhabi can contact us by phone, WhatsApp, or through eammu.com.",
  },
  {
    question: "Can I book an Abu Dhabi to Dhaka air ticket through Eammu Holidays?",
    answer:
      "Yes. We support international air ticket booking from Abu Dhabi (AUH) and Dubai (DXB) to Dhaka (DAC), Chittagong (CGP), and Sylhet (ZYL), as well as all major international destinations. Contact us for current fares and schedules on Biman, Air Arabia, flydubai, and other carriers.",
  },
  {
    question: "Does Eammu Holidays process Bangladesh visa from Abu Dhabi?",
    answer:
      "Yes. We assist Bangladeshi passport holders based in Abu Dhabi with Bangladesh tourist visa, emergency/OTC visa through the Bangladesh Embassy Abu Dhabi, and related documentation. We also assist other nationalities with their Bangladesh visa requirements.",
  },
  {
    question: "Do you offer Umrah packages from Abu Dhabi?",
    answer:
      "Yes. Eammu Holidays provides Umrah packages from Abu Dhabi including return flights from AUH, hotel accommodation in Makkah and Madinah, transport, visa guidance, and group coordination. Ground packages are also available for those who prefer to travel overland from the UAE. Contact us for current pricing.",
  },
  {
    question: "Can Eammu Holidays help with Schengen visa from Abu Dhabi?",
    answer:
      "Yes. We provide Schengen visa guidance for Abu Dhabi-based travelers — country-specific document preparation, VFS Abu Dhabi appointment strategy, bank statement advice, and rejection risk assessment. See our full Schengen visa guide on eammu.com.",
  },
  {
    question: "What air ticket routes does Eammu Holidays cover from Abu Dhabi?",
    answer:
      "We support air ticket booking from Abu Dhabi (AUH) to Bangladesh (Dhaka, Chittagong, Sylhet), Southeast Asia (Kuala Lumpur, Bangkok, Singapore), Europe, North America, Australia, East Asia, and all major Middle East destinations. We also book from Dubai (DXB) when fares are lower.",
  },
  {
    question: "Do you guarantee visa approval for applicants in Abu Dhabi?",
    answer:
      "No ethical travel agency can guarantee visa approval. Visa decisions are made by the embassy, consulate, or immigration authority of the destination country. Eammu Holidays helps you prepare a stronger, more complete application file — but final approval is never within our control.",
  },
  {
    question: "Can Eammu Holidays arrange tours and holiday packages from Abu Dhabi?",
    answer:
      "Yes. We offer holiday packages for travelers based in Abu Dhabi — including Europe tours, Southeast Asia packages, Bangladesh homecoming trips, Maldives, and budget-friendly packages designed for UAE expats and residents.",
  },
  {
    question: "What services does Eammu Holidays provide for students in Abu Dhabi?",
    answer:
      "We provide study abroad consultancy and student visa guidance for UAE-based students planning to study in USA, UK, Canada, Australia, Germany, Japan, and Malaysia. Services include admission document review, SOP guidance, financial file structuring, and visa preparation.",
  },
  {
    question: "How do I contact Eammu Holidays in Abu Dhabi?",
    answer:
      "You can contact Eammu Holidays in Abu Dhabi via WhatsApp at +971-XXXX-XXXXXX, through our website contact form at eammu.com/contact, or via our Bangladesh offices at +880-1631-312524. We respond in Bengali, Arabic, and English.",
  },
  {
    question: "Does Eammu Holidays serve customers in Al Ain?",
    answer:
      "Yes. Through our Abu Dhabi office and online consultation, Eammu Holidays serves customers across Abu Dhabi Emirate — including Al Ain and the Western Region — for visa processing, Bangladesh air tickets, Umrah packages, and international travel packages.",
  },
];

// ─── STRUCTURED DATA ──────────────────────────────────────────────────────────
function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TravelAgency", "LocalBusiness"],
        "@id": `${SITE_URL}#travelagency-abudhabi`,
        name: "Eammu Holidays Abu Dhabi",
        alternateName: ["Eammu Holidays", "Eammu UAE", "ইম্মু হলিডেজ আবুধাবি"],
        url: PAGE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/og/travel-agency-abu-dhabi.jpg`,
        description:
          "Trusted travel agency in Abu Dhabi, UAE offering visa processing, international air ticket booking from AUH, Bangladesh air tickets, Umrah packages, tour packages, travel insurance, and study abroad guidance.",
        foundingDate: "2016",
        areaServed: [
          { "@type": "City", name: "Abu Dhabi" },
          { "@type": "State", name: "Abu Dhabi Emirate" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "City", name: "Al Ain" },
          { "@type": "AdministrativeArea", name: "Western Region" },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Abu Dhabi",
          addressRegion: "Abu Dhabi Emirate",
          addressCountry: "AE",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Eammu Holidays Travel Services Abu Dhabi",
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
          reviewCount: "196",
          bestRating: "5",
          worstRating: "1",
        },
        sameAs: [
          "https://www.facebook.com/eammuholidays",
          "https://www.instagram.com/eammuholidays",
          `${SITE_URL}/travel-agency-bangladesh`,
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
        name: "Best Travel Agency in Abu Dhabi | Visa, Air Ticket & Tour Packages",
        description: metadata.description,
        inLanguage: "en-AE",
        isPartOf: { "@type": "WebSite", name: "Eammu Holidays", url: SITE_URL },
        about: { "@id": `${SITE_URL}#travelagency-abudhabi` },
        primaryImageOfPage: `${SITE_URL}/og/travel-agency-abu-dhabi.jpg`,
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
          { "@type": "ListItem", position: 2, name: "Travel Agency Abu Dhabi", item: PAGE_URL },
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
        name: "How to Get Visa Help from a Travel Agency in Abu Dhabi",
        description:
          "Step-by-step process for getting visa processing and travel support from Eammu Holidays in Abu Dhabi, UAE.",
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
        name: "Popular visa services for Abu Dhabi-based travelers",
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
        name: "Travel Agency Services in Abu Dhabi UAE",
        provider: { "@id": `${SITE_URL}#travelagency-abudhabi` },
        serviceType: "Travel Agency",
        areaServed: [
          { "@type": "City", name: "Abu Dhabi" },
          { "@type": "Country", name: "United Arab Emirates" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Abu Dhabi Travel Services",
          itemListElement: [
            "Bangladesh Visa from Abu Dhabi",
            "International Air Ticket Booking Abu Dhabi",
            "Umrah Packages Abu Dhabi",
            "Tour Packages from Abu Dhabi",
            "Schengen Visa from UAE",
            "Study Abroad Consultancy UAE",
            "Travel Insurance Abu Dhabi",
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
export default function TravelAgencyAbuDhabiPage() {
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
              Trusted Travel Agency in Abu Dhabi, UAE
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Best Travel Agency in Abu Dhabi for Visa, Air Tickets &amp; Bangladesh Travel
            </h1>
            <p className="page-intro mt-6 max-w-3xl text-lg leading-8 text-green-100">
              Eammu Holidays in Abu Dhabi helps UAE-based travelers — especially Bangladeshi
              expatriates — with visa processing, Bangladesh air tickets from AUH, international
              flight booking, Umrah packages, tour packages, and travel insurance guidance.
            </p>
            {/* Bangla trust signal for Bangladeshi expat audience */}
            <p className="mt-3 text-sm text-green-200">
              আবুধাবি থেকে বাংলাদেশ টিকেট, ভিসা ও উমরাহ প্যাকেজ — ইম্মু হলিডেজ
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
            <h2 className="text-xl font-bold">Abu Dhabi & Global Office Coverage</h2>
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
          <SectionHeader eyebrow="About Eammu Holidays Abu Dhabi" title="Travel Agency in Abu Dhabi for Bangladeshi Expats & UAE Residents">
            Eammu Holidays operates in Abu Dhabi, UAE — providing visa processing support,
            Bangladesh air ticket booking from AUH, Umrah packages, international holiday
            packages, and study abroad consultancy for Bangladeshi expatriates and all
            nationalities living in Abu Dhabi and Al Ain. Backed by offices in Dhaka, Cumilla,
            Chittagong, Sharjah, and Yerevan, we offer end-to-end travel support across the
            UAE and Bangladesh.
          </SectionHeader>
          <div className="mt-4 rounded-2xl border border-[#003d22]/20 bg-green-50 p-6 text-sm leading-7 text-gray-700">
            <strong className="text-[#003d22]">Why this page exists:</strong> We built this page
            for travelers in Abu Dhabi searching for a "travel agency in Abu Dhabi," "visa agency
            Abu Dhabi," "Bangladesh air ticket from Abu Dhabi," "Umrah package Abu Dhabi," or
            "cheap ticket Abu Dhabi to Dhaka." This page connects you directly to the visa guide,
            service, or travel tool you need — with no runaround.
          </div>
        </div>
      </section>

      {/* ── POPULAR ROUTES ── */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Popular Destinations" title="Most Popular Travel Routes from Abu Dhabi">
            UAE-based travelers most frequently use these routes for home visits, tourism,
            work, and family trips. Click any route for detailed visa guidance.
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
          <SectionHeader eyebrow="Our Services" title="Complete Travel Agency Services in Abu Dhabi, UAE">
            From Bangladesh air tickets and visa processing to Umrah packages and Schengen visa
            guidance — Eammu Holidays covers the full travel journey from Abu Dhabi.
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
            title="How Eammu Holidays Helps You Travel from Abu Dhabi"
            inverted
          >
            A simple 6-step process from initial consultation to your flight departure from AUH or DXB.
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
          <SectionHeader eyebrow="Visa Guides" title="Popular Visa Searches from Abu Dhabi & UAE">
            These links take Abu Dhabi-based travelers directly to country-specific visa guides,
            e-visa pages, and visa requirement pages on Eammu Holidays.
          </SectionHeader>
          <InternalLinkGrid links={visaLinks} />
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Why Choose Us" title="Why Abu Dhabi Travelers Choose Eammu Holidays">
            Honest document guidance, transparent pricing, and a team that understands the
            realities of traveling as a Bangladeshi expat or UAE resident.
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
          <SectionHeader eyebrow="Study Abroad" title="Student Visa & Study Abroad from UAE">
            Eammu Holidays connects Abu Dhabi-based students with destination-specific study
            pages, scholarship resources, and application planning for studying abroad.
          </SectionHeader>
          <InternalLinkGrid links={studyLinks} />
        </div>
      </section>

      {/* ── TRAVEL TOOLS ── */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Free Travel Tools" title="Free Visa & Travel Resources for Abu Dhabi-Based Travelers">
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
            Eammu Holidays serves travelers from Abu Dhabi, UAE with support from our global
            network of offices across UAE, Bangladesh, and Armenia.
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
          <SectionHeader eyebrow="FAQ" title="Travel Agency Abu Dhabi — Frequently Asked Questions">
            Common questions from Abu Dhabi travelers about visa processing, Bangladesh air
            tickets, Umrah packages, tour packages, and travel support from UAE.
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
            Need a Travel Agency in Abu Dhabi?
          </h2>
          <p className="mt-4 text-base leading-7 text-green-100">
            Contact Eammu Holidays in Abu Dhabi for visa processing, Bangladesh air tickets,
            international flight booking from AUH, Umrah packages, tour packages, and travel
            insurance support. We serve Bangladeshi expats and all nationalities across the
            UAE capital and Al Ain.
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
          {/* Cross-links to sister pages */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-green-200">
            <Link href="/travel-agency-sharjah" className="hover:text-white underline underline-offset-2">
              Travel Agency Sharjah →
            </Link>
            <Link href="/travel-agency-bangladesh" className="hover:text-white underline underline-offset-2">
              Travel Agency Bangladesh →
            </Link>
          </div>
        </div>
      </section>
      <HomeSeoLinks />
    </main>
  );
}