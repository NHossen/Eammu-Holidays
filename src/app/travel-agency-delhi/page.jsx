import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://eammu.com";
const PAGE_PATH = "/travel-agency-delhi";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

// ─── METADATA ────────────────────────────────────────────────────────────────
export const metadata = {
  title:
    "Best Travel Agency in Delhi for Bangladeshi Travelers | Eammu Holidays",
  description:
    "Eammu Holidays serves Bangladeshi nationals and Indian travelers in Delhi with visa processing, international air tickets, tour packages, Umrah packages, Bangladesh visa, and study abroad consultancy. Expert guidance for Delhi-based Bangladeshi visitors and residents.",
  keywords: [
    "travel agency Delhi",
    "travel agency in Delhi for Bangladeshi",
    "Bangladesh visa from Delhi",
    "visa agency Delhi",
    "Bangladesh visa agent Delhi",
    "Bangladesh high commission Delhi visa",
    "Bangladeshi travel agency Delhi",
    "air ticket booking Delhi",
    "international air ticket Delhi",
    "tour packages from Delhi",
    "Umrah package Delhi",
    "student visa from Delhi",
    "tourist visa from Delhi",
    "Schengen visa from Delhi",
    "travel consultancy Delhi",
    "holiday packages Delhi",
    "visa consultancy Delhi",
    "Eammu Holidays Delhi",
    "travel agency near me Delhi",
    "online travel agency Delhi",
    "cheap air tickets Delhi",
    "flight booking Delhi",
    "Delhi to Dhaka ticket",
    "Delhi to Bangladesh ticket",
    "Bangladesh visa for Indian",
    "India to Bangladesh visa",
    "travel agency New Delhi",
    "visa processing Delhi Bangladesh",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-IN": PAGE_URL,
      "bn-BD": PAGE_URL,
    },
  },
  openGraph: {
    title: "Best Travel Agency in Delhi for Bangladeshi Travelers | Eammu Holidays",
    description:
      "Travel agency in Delhi specializing in Bangladesh visa, international air tickets, tour packages, Umrah, and study abroad for Bangladeshi nationals and Indian travelers visiting Bangladesh.",
    url: PAGE_URL,
    siteName: "Eammu Holidays",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og/travel-agency-delhi.jpg`,
        width: 1200,
        height: 630,
        alt: "Eammu Holidays — Travel Agency in Delhi for Bangladeshi Travelers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Agency in Delhi for Bangladeshi Travelers | Eammu Holidays",
    description:
      "Bangladesh visa, air tickets, tour packages & Umrah from Delhi — Eammu Holidays serves Bangladeshi nationals and Indian travelers.",
    images: [`${SITE_URL}/og/travel-agency-delhi.jpg`],
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
    name: "Dhaka, Bangladesh HQ",
    area: "Dhaka, Bangladesh",
    phone: "+880-1631-312524",
    description:
      "Eammu Holidays main office in Dhaka coordinating visa guidance, file preparation support, and air ticket booking for Bangladeshi nationals currently in Delhi — with direct liaison to Bangladesh High Commission New Delhi.",
  },
  {
    city: "Cumilla",
    name: "Cumilla, Bangladesh Office",
    area: "Cumilla, Bangladesh",
    phone: "+880-1631-312524",
    description:
      "Support for Cumilla-origin Bangladeshi nationals traveling through Delhi — tourist visa assistance, document guidance, air ticket booking, and onward travel planning from India.",
  },
  {
    city: "UAE",
    name: "UAE Offices",
    area: "Abu Dhabi & Sharjah, UAE",
    phone: "+971-XXXX-XXXXXX",
    description:
      "Coordinated services for Bangladeshi travelers transiting through Delhi to UAE destinations — air ticket booking, UAE visa guidance, and travel planning support.",
  },
];

const primaryServices = [
  {
    title: "Bangladesh Visa from Delhi",
    href: "/visa-checker/bangladesh-visa-for-india/visa-required",
    icon: "🇧🇩",
    text:
      "Comprehensive guidance for Bangladesh visa applications from Delhi — tourist visa, emergency visa, and entry permit documentation for Indian nationals and third-country nationals applying at Bangladesh High Commission New Delhi.",
  },
  {
    title: "Air Ticket Booking from Delhi",
    href: "/flight-booking",
    icon: "✈️",
    text:
      "International and regional air ticket booking from Delhi (IGI — Indira Gandhi International Airport, DEL) — with routes to Dhaka (DAC), Chittagong (CGP), Sylhet (ZYL), and all major global destinations.",
  },
  {
    title: "Tourist Visa Processing",
    href: "/our-services/visa-services/tourist-visa-from-bangladesh",
    icon: "🛂",
    text:
      "Visa guidance for Bangladeshi passport holders temporarily in Delhi — tourist visa applications for UAE, Malaysia, Thailand, Singapore, UK, Schengen, and other destinations while in India.",
  },
  {
    title: "Umrah Packages from Delhi",
    href: "/our-services/umrah-packages",
    icon: "🕌",
    text:
      "Umrah packages for Delhi-based Bangladeshi nationals and Indian Muslims — return flights from DEL, hotel accommodation in Makkah and Madinah, Saudi visa guidance, transport, and group coordination.",
  },
  {
    title: "Schengen Visa Consultancy",
    href: "/schengen-visa",
    icon: "🇪🇺",
    text:
      "Schengen visa guidance for Bangladeshi nationals in Delhi — country-specific documents, VFS India appointment strategy, bank statement advice, and rejection risk assessment from our Bangladesh-based expert team.",
  },
  {
    title: "Tour & Holiday Packages",
    href: "/our-services/tour-packages",
    icon: "🏝️",
    text:
      "Custom holiday packages for travelers based in Delhi — Southeast Asia, Middle East, Europe tours, Bangladesh sightseeing packages, and budget-friendly options for Indian and Bangladeshi travelers.",
  },
  {
    title: "Student Visa Consultancy",
    href: "/our-services/visa-services/student-visa-from-bangladesh",
    icon: "🎓",
    text:
      "Study abroad planning for Bangladeshi students based in Delhi — admission document review, financial file preparation, SOP guidance, and student visa support for USA, UK, Canada, Australia, Germany, and Malaysia.",
  },
  {
    title: "India to Bangladesh Travel Planning",
    href: "/visa-checker/bangladesh-visa-for-india/visa-required",
    icon: "🚆",
    text:
      "End-to-end travel planning for Delhi-based travelers visiting Bangladesh — Bangladesh visa guidance, Dhaka hotel booking, onward domestic travel, air or rail route planning, and travel insurance advice.",
  },
  {
    title: "Travel Insurance",
    href: "/travel-insurance",
    icon: "🛡️",
    text:
      "Travel insurance guidance for visa applications from Delhi, medical emergencies abroad, trip interruption, and destination-specific insurance requirements for Bangladeshi and Indian travelers.",
  },
];

const popularRoutes = [
  { from: "Delhi", to: "Dhaka / Bangladesh", flag: "🇧🇩", href: "/visa-checker/bangladesh-visa-for-india/visa-required" },
  { from: "Delhi", to: "Dubai / UAE", flag: "🇦🇪", href: "/visa/united-arab-emirates-visa" },
  { from: "Delhi", to: "Malaysia", flag: "🇲🇾", href: "/visa-checker/bangladesh-visa-for-malaysia/e-visa" },
  { from: "Delhi", to: "Thailand", flag: "🇹🇭", href: "/visa-checker/bangladesh-visa-for-thailand/e-visa" },
  { from: "Delhi", to: "Singapore", flag: "🇸🇬", href: "/visa-checker/bangladesh-visa-for-singapore/e-visa" },
  { from: "Delhi", to: "Turkey", flag: "🇹🇷", href: "/visa/visa-guide/turkey-visa-for-bangladesh" },
  { from: "Delhi", to: "UK", flag: "🇬🇧", href: "/visa/visa-guide/united-kingdom-visa-for-bangladesh" },
  { from: "Delhi", to: "USA", flag: "🇺🇸", href: "/visa/visa-guide/united-states-visa-for-bangladesh" },
  { from: "Delhi", to: "Canada", flag: "🇨🇦", href: "/visa/visa-guide/canada-visa-for-bangladesh" },
  { from: "Delhi", to: "Australia", flag: "🇦🇺", href: "/visa/visa-guide/australia-visa-for-bangladesh" },
  { from: "Delhi", to: "Germany / Schengen", flag: "🇩🇪", href: "/visa/visa-guide/germany-visa-for-bangladesh" },
  { from: "Delhi", to: "Japan", flag: "🇯🇵", href: "/visa/visa-guide/japan-visa-for-bangladesh" },
];

const visaLinks = [
  { label: "Bangladesh Visa from India", href: "/visa-checker/bangladesh-visa-for-india/visa-required" },
  { label: "Dubai / UAE Visa Guide", href: "/visa/united-arab-emirates-visa" },
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
  { label: "Saudi Arabia Visa Guide", href: "/visa-checker/bangladesh-visa-for-saudi-arabia/visa-required" },
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
      "Contact Eammu Holidays via phone, WhatsApp, or our website. Tell us whether you need a Bangladesh visa for India, a third-country visa while in Delhi, an air ticket, Umrah package, or tour planning.",
  },
  {
    step: "02",
    title: "Document Checklist Review",
    description:
      "We review your passport nationality, purpose of travel, and destination requirements. For Bangladesh visa from Delhi, we clarify Bangladesh High Commission New Delhi requirements, fees, and processing timelines.",
  },
  {
    step: "03",
    title: "File Preparation & Guidance",
    description:
      "We assist with application form guidance, supporting document structuring, cover letter drafting, and risk assessment before you submit at the Bangladesh High Commission or VFS India centre.",
  },
  {
    step: "04",
    title: "Application Submission Support",
    description:
      "We guide you through Bangladesh High Commission appointment booking, VFS India submission for third-country visas, or online e-visa portal procedures — step by step.",
  },
  {
    step: "05",
    title: "Air Ticket & Travel Booking",
    description:
      "Once your visa is confirmed, book air tickets from Delhi (DEL/IGI) to Dhaka, Chittagong, or your onward destination, plus hotel accommodation, travel insurance, and tour packages.",
  },
  {
    step: "06",
    title: "Post-Travel Support",
    description:
      "We remain available for travel queries, itinerary changes, and repeat travel consultancy — whether your next trip originates from Delhi, Dhaka, or UAE.",
  },
];

const trustSignals = [
  { value: "India", label: "Serving Delhi Travelers", sub: "Bangladesh visa & air tickets" },
  { value: "5000+", label: "Travelers Supported", sub: "Bangladesh, India, UAE & beyond" },
  { value: "50+", label: "Destination Countries", sub: "Middle East, Asia, Europe, Americas" },
  { value: "5", label: "Global Offices", sub: "Dhaka · Cumilla · Abu Dhabi · Sharjah · Yerevan" },
  { value: "8+", label: "Years of Experience", sub: "Serving travelers since 2016" },
  { value: "95%", label: "Client Satisfaction", sub: "Based on post-service feedback" },
];

const reasons = [
  {
    title: "Bangladesh Visa Specialists",
    desc: "Deep expertise in Bangladesh visa requirements for Indian nationals and third-country passport holders applying at Bangladesh High Commission New Delhi — document checklists, fee structures, and processing timelines.",
  },
  {
    title: "Remote & WhatsApp Consultation",
    desc: "Our Bangladesh-based team provides full consultation for Delhi-based travelers via WhatsApp, phone, and video call — no in-person office visit required for most services.",
  },
  {
    title: "Air Ticket Booking DEL → DAC",
    desc: "We book Delhi (DEL) to Dhaka (DAC), Chittagong (CGP), and Sylhet (ZYL) air tickets, plus onward international routes from Delhi to UAE, Southeast Asia, and Europe.",
  },
  {
    title: "Transparent Document Guidance",
    desc: "We explain exactly what documents are needed for Bangladesh visa or third-country visa — before you spend time at the Bangladesh High Commission or VFS India.",
  },
  {
    title: "Bangladesh + UAE Network",
    desc: "Eammu Holidays offices in Dhaka, Cumilla, Abu Dhabi, and Sharjah mean seamless support if your travel plans span India, Bangladesh, and the Gulf.",
  },
  {
    title: "Free Online Travel Tools",
    desc: "Visa checker, processing time tracker, cost calculator, and checklist generator are all free on eammu.com — useful for Delhi-based travelers planning Bangladesh or third-country trips.",
  },
];

const faqs = [
  {
    question: "Can Eammu Holidays help with Bangladesh visa from Delhi?",
    answer:
      "Yes. Eammu Holidays provides guidance for Bangladesh visa applications from Delhi — including tourist visa and emergency visa documentation for Indian nationals and third-country passport holders applying at Bangladesh High Commission New Delhi. We help with document checklists, application forms, and processing guidance.",
  },
  {
    question: "Does Eammu Holidays have a physical office in Delhi?",
    answer:
      "Eammu Holidays does not currently have a walk-in office in Delhi. However, our Bangladesh HQ team (Dhaka) provides full remote consultation for Delhi-based travelers via WhatsApp, phone, and video call. Contact us at +880-1631-312524 or via eammu.com/contact.",
  },
  {
    question: "Can I book a Delhi to Dhaka air ticket through Eammu Holidays?",
    answer:
      "Yes. We support air ticket booking from Delhi (Indira Gandhi International Airport, DEL) to Dhaka (DAC), Chittagong (CGP), and Sylhet (ZYL), as well as international routes from Delhi to UAE, Malaysia, Thailand, Singapore, and other destinations.",
  },
  {
    question: "What documents does an Indian national need for a Bangladesh visa from Delhi?",
    answer:
      "Indian nationals applying for a Bangladesh tourist visa at Bangladesh High Commission New Delhi typically need a valid Indian passport (minimum 6 months validity), recent passport-size photographs, a completed visa application form, proof of travel purpose, hotel booking or invitation letter, and the applicable visa fee. Requirements can change — contact us or the Bangladesh High Commission for the most current checklist.",
  },
  {
    question: "Does Eammu Holidays assist Bangladeshi nationals temporarily in Delhi with visa applications?",
    answer:
      "Yes. Bangladeshi nationals visiting Delhi who need to apply for third-country visas (e.g., UK, Schengen, Canada, USA) while in India can contact Eammu Holidays for document preparation guidance, file review, and application support — including VFS India appointment strategy.",
  },
  {
    question: "Do you offer Umrah packages from Delhi?",
    answer:
      "Yes. Eammu Holidays provides Umrah packages for Delhi-based travelers — including Bangladeshi nationals and Indian Muslims — with return flights from DEL, hotel accommodation in Makkah and Madinah, Saudi visa guidance, and group coordination. Contact us for current pricing and schedules.",
  },
  {
    question: "Can Eammu Holidays help with Schengen visa for Bangladeshi passport holders in Delhi?",
    answer:
      "Yes. We provide Schengen visa guidance for Bangladeshi passport holders currently in Delhi — including country selection, document preparation, VFS India appointment guidance, bank statement advice, and rejection risk assessment.",
  },
  {
    question: "What air ticket routes does Eammu Holidays cover from Delhi?",
    answer:
      "We support air ticket booking from Delhi (DEL) to Bangladesh (Dhaka, Chittagong, Sylhet), UAE (Dubai, Abu Dhabi), Southeast Asia (Kuala Lumpur, Bangkok, Singapore), Europe, North America, Australia, East Asia, and all major international destinations.",
  },
  {
    question: "Do you guarantee Bangladesh visa approval for applicants in Delhi?",
    answer:
      "No. Visa approval decisions are made by the Bangladesh High Commission New Delhi or relevant immigration authority — not by Eammu Holidays. We help you prepare a complete, well-documented application to reduce avoidable delays or rejections, but the final decision is not within our control.",
  },
  {
    question: "Can Eammu Holidays arrange a tour package from Delhi to Bangladesh?",
    answer:
      "Yes. We can plan a complete Bangladesh tour package from Delhi — including Bangladesh visa guidance, return air ticket from DEL to DAC, hotel accommodation in Dhaka, Cox's Bazar, or Sylhet, domestic transport, and sightseeing itinerary.",
  },
  {
    question: "How do I contact Eammu Holidays from Delhi?",
    answer:
      "You can contact Eammu Holidays from Delhi via WhatsApp at +880-1631-312524, through our website contact form at eammu.com/contact, or via email. We respond in Bengali, Hindi, and English. Consultation is available via phone and video call for Delhi-based customers.",
  },
  {
    question: "Does Eammu Holidays serve customers in Noida, Gurgaon, and NCR?",
    answer:
      "Yes. Through our remote consultation service, Eammu Holidays serves customers across the Delhi NCR region — including Noida, Gurgaon, Faridabad, Ghaziabad, and Greater Noida — for Bangladesh visa guidance, air ticket booking, and international travel planning.",
  },
];

// ─── STRUCTURED DATA ──────────────────────────────────────────────────────────
function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TravelAgency", "LocalBusiness"],
        "@id": `${SITE_URL}#travelagency-delhi`,
        name: "Eammu Holidays Delhi",
        alternateName: ["Eammu Holidays", "Eammu India", "ইম্মু হলিডেজ দিল্লি"],
        url: PAGE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/og/travel-agency-delhi.jpg`,
        description:
          "Travel agency serving Delhi-based travelers with Bangladesh visa guidance, international air ticket booking from DEL, Umrah packages, tour packages, and study abroad consultancy for Bangladeshi nationals and Indian travelers.",
        foundingDate: "2016",
        areaServed: [
          { "@type": "City", name: "Delhi" },
          { "@type": "City", name: "New Delhi" },
          { "@type": "AdministrativeArea", name: "Delhi NCR" },
          { "@type": "Country", name: "India" },
          { "@type": "City", name: "Noida" },
          { "@type": "City", name: "Gurgaon" },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "New Delhi",
          addressRegion: "Delhi",
          addressCountry: "IN",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Eammu Holidays Travel Services Delhi",
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
          reviewCount: "142",
          bestRating: "5",
          worstRating: "1",
        },
        sameAs: [
          "https://www.facebook.com/eammuholidays",
          "https://www.instagram.com/eammuholidays",
          `${SITE_URL}/travel-agency-bangladesh`,
          `${SITE_URL}/travel-agency-dhaka`,
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
        name: "Best Travel Agency in Delhi for Bangladeshi Travelers | Visa & Air Tickets",
        description: metadata.description,
        inLanguage: "en-IN",
        isPartOf: { "@type": "WebSite", name: "Eammu Holidays", url: SITE_URL },
        about: { "@id": `${SITE_URL}#travelagency-delhi` },
        primaryImageOfPage: `${SITE_URL}/og/travel-agency-delhi.jpg`,
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
          { "@type": "ListItem", position: 2, name: "Travel Agency Delhi", item: PAGE_URL },
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
        name: "How to Get Bangladesh Visa and Travel Support from Delhi",
        description:
          "Step-by-step process for getting Bangladesh visa guidance and travel support from Eammu Holidays for Delhi-based travelers.",
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
        name: "Popular visa services for Delhi-based travelers",
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
        name: "Travel Agency Services in Delhi India",
        provider: { "@id": `${SITE_URL}#travelagency-delhi` },
        serviceType: "Travel Agency",
        areaServed: [
          { "@type": "City", name: "Delhi" },
          { "@type": "Country", name: "India" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Delhi Travel Services",
          itemListElement: [
            "Bangladesh Visa from Delhi",
            "International Air Ticket Booking Delhi",
            "Umrah Packages Delhi",
            "Tour Packages from Delhi",
            "Schengen Visa from India",
            "Study Abroad Consultancy India",
            "Travel Insurance Delhi",
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
export default function TravelAgencyDelhiPage() {
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
              Bangladesh Visa & Travel Agency Services — Delhi, India
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Travel Agency in Delhi for Bangladesh Visa, Air Tickets &amp; Tour Packages
            </h1>
            <p className="page-intro mt-6 max-w-3xl text-lg leading-8 text-green-100">
              Eammu Holidays serves Bangladeshi nationals visiting Delhi and Indian travelers
              planning to visit Bangladesh — with Bangladesh visa guidance, air ticket booking
              from DEL, Umrah packages, international tour packages, and study abroad
              consultancy.
            </p>
            <p className="mt-3 text-sm text-green-200">
              দিল্লি থেকে বাংলাদেশ ভিসা, এয়ার টিকেট ও ট্যুর প্যাকেজ — ইম্মু হলিডেজ
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#f97316] px-7 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/visa-checker/bangladesh-visa-for-india/visa-required"
                className="rounded-full border border-white/70 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Bangladesh Visa Guide
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
            <h2 className="text-xl font-bold">Delhi Service & Global Office Coverage</h2>
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
          <SectionHeader eyebrow="About Eammu Holidays Delhi" title="Bangladesh Visa & Travel Services for Delhi-Based Travelers">
            Eammu Holidays provides remote travel consultation for Delhi-based customers —
            specializing in Bangladesh visa guidance for Indian nationals, air ticket booking
            from Indira Gandhi International Airport (DEL), Umrah packages, Schengen visa
            assistance, and international tour packages. Our Bangladesh HQ in Dhaka, combined
            with offices in Cumilla, Abu Dhabi, and Sharjah, allows us to serve travelers whose
            journeys span India, Bangladesh, and the Gulf.
          </SectionHeader>
          <div className="mt-4 rounded-2xl border border-[#003d22]/20 bg-green-50 p-6 text-sm leading-7 text-gray-700">
            <strong className="text-[#003d22]">Why this page exists:</strong> We built this page
            for travelers in Delhi searching for "Bangladesh visa from Delhi," "Bangladesh visa
            agent Delhi," "travel agency in Delhi for Bangladeshi," "Delhi to Dhaka air ticket,"
            or "Bangladesh High Commission Delhi visa process." This page connects you directly
            to the right visa guide or service — with no runaround.
          </div>
        </div>
      </section>

      {/* ── POPULAR ROUTES ── */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Popular Destinations" title="Most Popular Travel Routes from Delhi">
            Delhi-based travelers most frequently use these routes for Bangladesh visits,
            tourism, work, and international study. Click any route for detailed visa guidance.
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
          <SectionHeader eyebrow="Our Services" title="Travel Agency Services in Delhi for Bangladeshi Travelers">
            From Bangladesh visa processing and Delhi–Dhaka air tickets to Umrah packages and
            international tour planning — Eammu Holidays covers your complete travel journey.
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
            title="How Eammu Holidays Helps Delhi-Based Travelers"
            inverted
          >
            A simple 6-step process from initial remote consultation to your flight departure from DEL.
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
          <SectionHeader eyebrow="Visa Guides" title="Popular Visa Searches from Delhi & India">
            These links take Delhi-based travelers directly to country-specific visa guides,
            e-visa pages, and Bangladesh visa requirement pages on Eammu Holidays.
          </SectionHeader>
          <InternalLinkGrid links={visaLinks} />
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Why Choose Us" title="Why Delhi Travelers Choose Eammu Holidays">
            Specialist Bangladesh knowledge, transparent guidance, and a team that responds in
            Bengali, Hindi, and English — serving Bangladeshi nationals and Indian travelers alike.
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
          <SectionHeader eyebrow="Study Abroad" title="Student Visa & Study Abroad from Delhi">
            Eammu Holidays connects Delhi-based Bangladeshi students with destination-specific
            study pages, scholarship resources, and application planning for studying abroad.
          </SectionHeader>
          <InternalLinkGrid links={studyLinks} />
        </div>
      </section>

      {/* ── TRAVEL TOOLS ── */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Free Travel Tools" title="Free Visa & Travel Resources for Delhi-Based Travelers">
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
            Delhi-based travelers are served remotely by our global network of offices across
            Bangladesh, UAE, and Armenia — available via WhatsApp, phone, and video call.
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
          <SectionHeader eyebrow="FAQ" title="Travel Agency Delhi — Frequently Asked Questions">
            Common questions from Delhi-based travelers about Bangladesh visa, air tickets,
            Umrah packages, tour packages, and travel support from India.
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
            Need Travel Help from Delhi?
          </h2>
          <p className="mt-4 text-base leading-7 text-green-100">
            Contact Eammu Holidays for Bangladesh visa guidance, Delhi–Dhaka air tickets, tour
            packages, Umrah travel, and international travel support. We serve Bangladeshi
            nationals and Indian travelers across Delhi NCR via WhatsApp and phone.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#f97316] px-8 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Contact Eammu Holidays
            </Link>
            <Link
              href="/visa-checker/bangladesh-visa-for-india/visa-required"
              className="rounded-full border border-white/70 px-8 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Bangladesh Visa Guide
            </Link>
            <Link
              href="/flight-booking"
              className="rounded-full border border-white/70 px-8 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Book Air Ticket
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-green-200">
            <Link href="/travel-agency-dhaka" className="hover:text-white underline underline-offset-2">
              Travel Agency Dhaka →
            </Link>
            <Link href="/travel-agency-bangladesh" className="hover:text-white underline underline-offset-2">
              Travel Agency Bangladesh →
            </Link>
            <Link href="/travel-agency-abu-dhabi" className="hover:text-white underline underline-offset-2">
              Travel Agency Abu Dhabi →
            </Link>
            <Link href="/travel-agency-sharjah" className="hover:text-white underline underline-offset-2">
              Travel Agency Sharjah →
            </Link>
          </div>
        </div>
      </section>
      <HomeSeoLinks />
    </main>
  );
}