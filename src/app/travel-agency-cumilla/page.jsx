import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://eammu.com";
const PAGE_PATH = "/travel-agency-cumilla";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/og/travel-agency-cumilla.jpg`; // create this 1200x630 image
const CONTENT_LAST_UPDATED = "2026-11-14";

// Fill in ONLY after confirming the number is current and monitored.
const VERIFIED_PHONE_DISPLAY = "+8801631312524"; // e.g. "+880-XXXX-XXXXXX"
const VERIFIED_PHONE_TEL = "+8801521351712"; // e.g. "+880XXXXXXXXXX"

// ─── METADATA ────────────────────────────────────────────────────────────────
export const metadata = {
  title: "Travel Agency & Education Consultancy in Cumilla | Eammu Holidays",
  description:
    "Eammu Holidays helps people in Cumilla (Comilla) with study abroad consultancy, student and tourist visa assistance, international air tickets, tour and Umrah packages, and travel insurance guidance.",
  keywords: [
    "travel agency in Cumilla",
    "travel agency Comilla",
    "education consultancy in Cumilla",
    "study abroad consultancy Cumilla",
    "higher study abroad from Cumilla",
    "visa assistance Cumilla",
    "student visa consultancy Cumilla",
    "air ticket booking Cumilla",
    "Umrah package Cumilla",
    "tour packages from Cumilla",
    "overseas education consultant Bangladesh",
    "Eammu Holidays Cumilla",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { "en-BD": PAGE_URL },
  },
  openGraph: {
    title: "Travel Agency & Education Consultancy in Cumilla | Eammu Holidays",
    description:
      "Study abroad consultancy, visa assistance, air tickets, tour and Umrah packages for students and travelers in Cumilla.",
    url: PAGE_URL,
    siteName: "Eammu Holidays",
    locale: "en_BD",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Eammu Holidays travel agency and education consultancy for Cumilla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Agency & Education Consultancy in Cumilla | Eammu Holidays",
    description:
      "Study abroad, visa assistance, air tickets and Umrah support for Cumilla students and families.",
    images: [OG_IMAGE],
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
const quickNav = [
  { label: "Study Abroad", href: "#study-abroad" },
  { label: "Visa Help", href: "#visa" },
  { label: "Air Tickets", href: "#air-tickets" },
  { label: "Umrah & Tours", href: "#umrah-tours" },
  { label: "Cumilla Areas", href: "#areas" },
  { label: "FAQ", href: "#faq" },
];

const heroHighlights = [
  "Higher study abroad counselling",
  "Student and tourist visa guidance",
  "International air tickets",
  "Umrah and tour packages",
];

const services = [
  {
    title: "Study Abroad & Education Consultancy",
    href: "/our-services/visa-services/student-visa-from-bangladesh",
    icon: "🎓",
    text: "Course and country selection, university shortlisting, admission documents, SOP guidance and student visa preparation for students from Cumilla.",
  },
  {
    title: "Tourist Visa Assistance",
    href: "/our-services/visa-services/tourist-visa-from-bangladesh",
    icon: "🛂",
    text: "Document checklist, cover letter support and application guidance for Bangladeshi passport holders traveling to Asia, the Middle East and Europe.",
  },
  {
    title: "Schengen Visa Guidance",
    href: "/schengen-visa",
    icon: "🇪🇺",
    text: "Lead-country selection, insurance, itinerary, financial documents and appointment guidance for European travel.",
  },
  {
    title: "International Air Tickets",
    href: "/flight-booking",
    icon: "✈️",
    text: "Flight booking from Dhaka (DAC) and Chattogram (CGP) with route comparison, baggage guidance and fare-rule explanation.",
  },
  {
    title: "Umrah Packages",
    href: "/our-services/umrah-packages",
    icon: "🕌",
    text: "Umrah planning for families and groups, including flights, Makkah and Madinah hotels, transport and visa guidance. Ask for current availability.",
  },
  {
    title: "Tour & Holiday Packages",
    href: "/our-services/tour-packages",
    icon: "🏝️",
    text: "Family, honeymoon, group and corporate holidays built around your dates and budget.",
  },
  {
    title: "Dubai & UAE Visa",
    href: "/visa/united-arab-emirates-visa",
    icon: "🏙️",
    text: "UAE visa guidance, flight and hotel coordination for visitors and families.",
  },
  {
    title: "Business & Work Visa Support",
    href: "/our-services/visa-services",
    icon: "💼",
    text: "Business visa documents, invitation letter review and employment-related documentation guidance.",
  },
  {
    title: "Travel Insurance",
    href: "/travel-insurance",
    icon: "🛡️",
    text: "Guidance on visa-related insurance requirements and medical and trip-disruption cover.",
  },
];

const educationServices = [
  "Student profile and academic review",
  "Country and course selection",
  "University shortlisting and eligibility check",
  "Tuition and living cost comparison",
  "Scholarship research and application guidance",
  "Admission application preparation",
  "IELTS and alternative English-test guidance",
  "SOP, CV and recommendation letter guidance",
  "Financial documentation guidance",
  "Offer letter review",
  "Student visa file preparation",
  "Pre-departure, accommodation and flight planning",
];

const studyTimeline = [
  { title: "Counselling", text: "Discuss your results, goals, budget and timeline. Parents and sponsors are welcome." },
  { title: "Profile and shortlist", text: "Compare countries, courses and universities that match your eligibility." },
  { title: "Documents and tests", text: "Organize certificates, English-test plans, SOP, CV and referee letters." },
  { title: "Applications", text: "Submit admission and scholarship applications before their deadlines." },
  { title: "Offer review", text: "Understand conditions, deposits and next steps for each offer." },
  { title: "Student visa", text: "Prepare financial and supporting documents for the visa application." },
  { title: "Departure", text: "Plan accommodation, insurance and flights after approvals are in place." },
];

const studyDestinations = [
  { label: "Study in Malaysia", href: "/study-abroad/student-visa/malaysia", note: "Foundation to postgraduate options at many institutions." },
  { label: "Study in the UK", href: "/study-abroad/student-visa/united-kingdom", note: "Offers from licensed sponsors; check GOV.UK for current rules." },
  { label: "Study in the USA", href: "/study-abroad/student-visa/united-states", note: "Wide range of schools; I-20 and embassy interview steps apply." },
  { label: "Study in Canada", href: "/study-abroad/student-visa/canada", note: "Acceptance from an eligible institution; check IRCC rules." },
  { label: "Study in Australia", href: "/study-abroad/student-visa/australia", note: "Confirmed enrolment and funds evidence; check Home Affairs." },
  { label: "Study in Germany", href: "/study-abroad/student-visa/germany", note: "Tuition rules vary by state and programme; verify officially." },
  { label: "Study in Japan", href: "/study-abroad/student-visa/japan", note: "Language and Certificate of Eligibility steps depend on the school." },
  { label: "All Student Visa Guides", href: "/study-abroad/student-visa", note: "Compare destinations and requirements in one place." },
  { label: "Scholarships Abroad", href: "/study-abroad/scholarships", note: "Awards are decided by providers; check official pages." },
];

const studyChecklist = [
  { title: "Academic", text: "SSC, HSC, bachelor's or master's certificates and transcripts." },
  { title: "Identity", text: "Valid passport, national ID and photographs." },
  { title: "English", text: "IELTS or another accepted test, or a documented exemption where allowed." },
  { title: "Application", text: "SOP, CV, recommendation letters and test scores where required." },
  { title: "Financial", text: "Bank statements, sponsor and income documents as the visa requires." },
];

const visaCanCannot = {
  can: [
    "Explain the requirements for your visa category",
    "Review and organize your documents",
    "Draft cover letters and explain forms",
    "Guide you on appointments and application centre steps",
    "Help you spot gaps before you submit",
  ],
  cannot: [
    "Guarantee a visa, because the embassy decides",
    "Control appointment availability or processing time",
    "Change government or application centre fees",
    "Promise a scholarship or university admission",
  ],
};

const feeTypes = [
  { title: "Government fee", text: "Set by the destination country and usually non-refundable." },
  { title: "Application centre charge", text: "A separate service fee when VFS or a similar centre is used." },
  { title: "Agency service fee", text: "Our fee for document guidance. Ask for it in writing." },
  { title: "Other costs", text: "Translation, courier, insurance or medical tests if required." },
];

const ticketChecks = [
  "Name on ticket matches the passport exactly",
  "Passport validity and blank pages",
  "Total fare including taxes and exclusions",
  "Baggage allowance on every segment",
  "Change, cancellation and refund rules",
  "Layover length and any transit visa need",
  "Destination entry and onward-ticket rules",
  "Booking reference you can verify with the airline",
];

const cumillaAreas = [
  "Cumilla Sadar",
  "Cumilla Sadar Dakshin",
  "Adarsha Sadar",
  "Laksam",
  "Daudkandi",
  "Chandina",
  "Chauddagram",
  "Barura",
  "Brahmanpara",
  "Burichang",
  "Debidwar",
  "Homna",
  "Meghna",
  "Muradnagar",
  "Nangalkot",
  "Titas",
  "Lalmai",
  "Monohorgonj",
];

const nearbyPlaces = ["Brahmanbaria", "Chandpur", "Feni", "Noakhali", "Narayanganj", "Dhaka"];

const getHelpSteps = [
  { title: "Send an enquiry", text: "Use the contact page and tell us your service, destination and preferred time." },
  { title: "Get a consultation", text: "We confirm how your session will take place and review your goals." },
  { title: "Share documents", text: "Send clear scans or photos. We explain which originals will be needed." },
  { title: "Apply and travel", text: "We guide appointments, submissions and, once approvals are clear, flights and travel." },
];

const chooseChecks = [
  "Clear business identity and contact channels",
  "Fees explained in writing before payment",
  "Written scope of what the agency will do",
  "Official receipt for every payment",
  "Ticket details you can verify with the airline",
  "Copies of every document submitted for you",
  "No guarantee of visa, admission or scholarship",
];

const tools = [
  { label: "Visa Checker — 195 Countries", href: "/visa-checker" },
  { label: "Visa Checklist Generator", href: "/travel-resources/visa-checklist-generator" },
  { label: "Visa Processing Time Tracker", href: "/travel-resources/visa-processing-time-tracker" },
  { label: "Visa Rejection Statistics", href: "/visa-rejection" },
  { label: "Travel Cost Calculator", href: "/travel-cost-calculator" },
  { label: "Travel Document Generator", href: "/travel-resources/travel-document-generator" },
  { label: "All Travel Resources", href: "/travel-resources" },
];

const relatedPages = [
  { label: "Travel Agency Dhaka", href: "/travel-agency-dhaka" },
  { label: "Travel Agency Bangladesh", href: "/travel-agency-bangladesh" },
  { label: "Travel Agency Abu Dhabi", href: "/travel-agency-abu-dhabi" },
  { label: "Travel Agency Sharjah", href: "/travel-agency-sharjah" },
];

const faqGroups = [
  {
    category: "Education & Study Abroad",
    items: [
      {
        question: "Which education consultancy can help me study abroad from Cumilla?",
        answer:
          "Eammu Holidays offers study abroad counselling for students in Cumilla, covering country and course selection, admission documents, SOP guidance and student visa preparation. Whichever consultancy you choose, check that fees are written down and university details can be verified on official sites.",
      },
      {
        question: "Can I get higher study counselling online if I live in Cumilla?",
        answer:
          "Yes. Students and parents in Cumilla can start with online counselling through our contact page and share documents digitally. We explain any step that must be done in person.",
      },
      {
        question: "Which countries can students from Cumilla consider?",
        answer:
          "Common choices include Malaysia, the UK, the USA, Canada, Australia, Germany and Japan. The right country depends on your results, budget, language ability and career plans.",
      },
      {
        question: "Can I apply without IELTS?",
        answer:
          "Sometimes. Some universities accept other English tests or earlier English-medium study, while others require a specific test. Check each university's official policy, because rules change.",
      },
      {
        question: "Can students with a study gap apply abroad?",
        answer:
          "Many do, but you should be ready to explain the gap with supporting documents. Requirements differ by university and by the visa authority.",
      },
      {
        question: "Do you guarantee admission or a scholarship?",
        answer:
          "No. Universities decide admissions and providers decide scholarships. We help you prepare a complete application and research options.",
      },
      {
        question: "What documents are needed for university admission?",
        answer:
          "Usually academic certificates and transcripts, passport, English-test results where required, SOP, CV and recommendation letters. Each university publishes its own list.",
      },
      {
        question: "Can Eammu help with student visa documentation?",
        answer:
          "Yes. After an offer, we help prepare financial documents, the study plan and forms based on the destination's current rules. The visa decision stays with the authority.",
      },
    ],
  },
  {
    category: "Visa Assistance",
    items: [
      {
        question: "Does Eammu provide visa assistance in Cumilla?",
        answer:
          "Yes. We support tourist, business, family visit and student visa preparation for people in Cumilla and nearby districts through our contact channels.",
      },
      {
        question: "Does an agency guarantee visa approval?",
        answer:
          "No legitimate agency can. The embassy, consulate or immigration authority decides every visa. We help you prepare a complete and accurate file.",
      },
      {
        question: "What documents are generally needed for a tourist visa?",
        answer:
          "Commonly a valid passport, photos, financial and employment or business documents, itinerary, reservations where required, insurance and a cover letter. The exact list differs by country and visa type, so confirm it officially.",
      },
      {
        question: "What is the difference between embassy fees and agency fees?",
        answer:
          "Embassy fees are set by the destination country, application centres may add a service charge, and an agency fee covers the agency's work. Ask for each in writing.",
      },
      {
        question: "Can you help with Schengen visa documents?",
        answer:
          "Yes. We help with lead-country choice, insurance, itinerary, financial documents and appointment guidance. Requirements change by country, so always check current rules.",
      },
    ],
  },
  {
    category: "Air Tickets, Umrah & Tours",
    items: [
      {
        question: "Can I book international flights from Cumilla?",
        answer:
          "Yes. Most international flights from Bangladesh depart from Dhaka (DAC) or Chattogram (CGP). We help compare routes and fares and explain baggage and refund rules.",
      },
      {
        question: "Can I change or cancel an air ticket?",
        answer:
          "Possibly. The airline's fare rules decide whether changes or refunds are allowed and what fees apply. We can explain the rules and help submit a request.",
      },
      {
        question: "Do you offer Umrah packages for families from Cumilla?",
        answer:
          "Yes. We plan Umrah travel including flights, hotels, transport and visa guidance. Prices and dates change, so contact us for current options.",
      },
      {
        question: "Can you arrange tour packages for groups or families?",
        answer:
          "Yes. We build family, honeymoon and group itineraries around your dates and budget. Prices are confirmed when you enquire.",
      },
    ],
  },
  {
    category: "Contact & Location",
    items: [
      {
        question: "Where can I meet Eammu Holidays in Cumilla?",
        answer:
          "Please confirm meeting arrangements through our contact page before visiting or sending documents. We do not publish an address on this page until it is verified.",
      },
      {
        question: "How can I contact Eammu Holidays?",
        answer:
          "Use the contact page at eammu.com/contact for study abroad, visa, ticket, tour and Umrah enquiries.",
      },
      {
        question: "Does Eammu provide both travel and education consultancy?",
        answer:
          "Yes. We support study abroad planning, visa preparation, flights, tours and Umrah, and can coordinate them for students who need admission, visa and travel planning.",
      },
    ],
  },
];

const faqs = faqGroups.flatMap((g) => g.items);

// ─── STRUCTURED DATA ──────────────────────────────────────────────────────────
function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `${SITE_URL}#travelagency`,
        name: "Eammu Holidays",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: OG_IMAGE,
        description:
          "Eammu Holidays provides study abroad consultancy, visa assistance, air ticket booking, tour and Umrah packages and travel insurance guidance for people in Cumilla and across Bangladesh.",
        areaServed: [
          { "@type": "City", name: "Cumilla" },
          { "@type": "Country", name: "Bangladesh" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          url: `${SITE_URL}/contact`,
          areaServed: "BD",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Eammu Holidays Services for Cumilla",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              url: `${SITE_URL}${s.href}`,
              description: s.text,
            },
          })),
        },
        sameAs: [
          "https://www.facebook.com/eammuholidays",
          "https://www.instagram.com/eammuholidays",
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Travel Agency & Education Consultancy in Cumilla | Eammu Holidays",
        description: metadata.description,
        inLanguage: "en-BD",
        isPartOf: { "@type": "WebSite", name: "Eammu Holidays", url: SITE_URL },
        about: { "@id": `${SITE_URL}#travelagency` },
        primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
        dateModified: CONTENT_LAST_UPDATED,
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Travel Agency & Education Consultancy Cumilla", item: PAGE_URL },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#study-links`,
        name: "Study abroad guides for students from Bangladesh",
        itemListElement: studyDestinations.map((d, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: d.label,
          url: `${SITE_URL}${d.href}`,
        })),
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Education Consultancy and Travel Agency Services in Cumilla",
        provider: { "@id": `${SITE_URL}#travelagency` },
        serviceType: "Travel agency and education consultancy",
        areaServed: [
          { "@type": "City", name: "Cumilla" },
          { "@type": "Country", name: "Bangladesh" },
        ],
      },
    ],
  };
}

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────
function Heading({ id, kicker, title, children, light = false }) {
  return (
    <div className="mb-10 max-w-3xl">
      <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
          light ? "bg-[#facc15] text-[#0b3d2e]" : "bg-[#0b3d2e] text-[#facc15]"
        }`}
      >
        {kicker}
      </span>
      <h2
        id={id}
        className={`mt-4 text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl ${
          light ? "text-white" : "text-[#0b3d2e]"
        }`}
      >
        {title}
      </h2>
      {children ? (
        <p className={`mt-3 text-base leading-7 ${light ? "text-green-100" : "text-gray-600"}`}>
          {children}
        </p>
      ) : null}
    </div>
  );
}

function Bullets({ items, dark = false }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6">
          <span
            aria-hidden="true"
            className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full text-xs font-bold ${
              dark ? "bg-[#facc15] text-[#0b3d2e]" : "bg-[#0b3d2e] text-[#facc15]"
            }`}
          >
            ✓
          </span>
          <span className={dark ? "text-green-50" : "text-gray-700"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-lg bg-[#facc15] px-6 py-3 text-sm font-extrabold text-[#0b3d2e] shadow transition hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      {children}
    </Link>
  );
}

function GhostButton({ href, children, onDark = true }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg border-2 px-6 py-3 text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#facc15] ${
        onDark
          ? "border-white/60 text-white hover:bg-white/10"
          : "border-[#0b3d2e] text-[#0b3d2e] hover:bg-[#0b3d2e] hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function TravelAgencyCumillaPage() {
  const structuredData = buildStructuredData();

  return (
    <main className="overflow-x-hidden bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── HERO ── */}
      <section className="relative bg-[#0b3d2e] px-4 pb-16 pt-14 text-white sm:px-6 sm:pt-20">
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2 bg-[#facc15]" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="inline-block rounded-full border border-[#facc15]/60 px-4 py-1 text-xs font-semibold text-[#facc15] sm:text-sm">
              Cumilla (Comilla) · Education · Visa · Travel
            </p>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Travel Agency &amp; Education Consultancy in Cumilla
            </h1>
            <p className="page-intro mt-5 max-w-2xl text-base leading-7 text-green-50 sm:text-lg sm:leading-8">
              Eammu Holidays helps students and families in Cumilla plan higher study abroad,
              prepare visa documents, book international flights, and arrange Umrah and holiday
              travel, with clear guidance and no false promises.
            </p>
            <p className="mt-3 text-sm text-green-200">
              কুমিল্লার ট্রাভেল এজেন্সি ও বিদেশে উচ্চশিক্ষা পরামর্শ — ভিসা, এয়ার টিকেট, ওমরাহ ও ট্যুর
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {heroHighlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm font-semibold">
                  <span aria-hidden="true" className="text-[#facc15]">●</span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="/contact">Get Free Consultation</PrimaryButton>
              <GhostButton href="/study-abroad/student-visa">Explore Study Abroad</GhostButton>
              <GhostButton href="/flight-booking">Book Air Ticket</GhostButton>
            </div>
          </div>

          <aside className="rounded-2xl bg-white p-6 text-gray-900 shadow-2xl">
            <h2 className="text-xl font-extrabold text-[#0b3d2e]">Start from Cumilla</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Tell us what you need and we will confirm how your consultation will take place.
            </p>
            <div className="mt-5 space-y-3">
              <Link href="/contact" className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 text-sm font-bold text-[#0b3d2e] transition hover:border-[#facc15] hover:bg-yellow-50">
                <span>Study abroad counselling</span><span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 text-sm font-bold text-[#0b3d2e] transition hover:border-[#facc15] hover:bg-yellow-50">
                <span>Visa assistance</span><span aria-hidden="true">→</span>
              </Link>
              <Link href="/visa-checker" className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 text-sm font-bold text-[#0b3d2e] transition hover:border-[#facc15] hover:bg-yellow-50">
                <span>Check visa requirements</span><span aria-hidden="true">→</span>
              </Link>
              <Link href="/our-services/umrah-packages" className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 text-sm font-bold text-[#0b3d2e] transition hover:border-[#facc15] hover:bg-yellow-50">
                <span>Umrah packages</span><span aria-hidden="true">→</span>
              </Link>
            </div>
            {VERIFIED_PHONE_DISPLAY && VERIFIED_PHONE_TEL ? (
              <p className="mt-4 text-sm text-gray-600">
                Call:{" "}
                <a href={`tel:${VERIFIED_PHONE_TEL}`} className="font-bold text-[#0b3d2e] underline">
                  {VERIFIED_PHONE_DISPLAY}
                </a>
              </p>
            ) : null}
          </aside>
        </div>
      </section>

      {/* ── QUICK NAV ── */}
      <nav aria-label="Page sections" className="border-b border-gray-200 bg-white px-4 py-4 sm:px-6">
        <ul className="mx-auto flex max-w-7xl flex-wrap gap-2">
          {quickNav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="inline-block rounded-full border border-[#0b3d2e]/30 px-4 py-1.5 text-sm font-semibold text-[#0b3d2e] transition hover:bg-[#facc15] hover:border-[#facc15]"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── INTRO ── */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <Heading kicker="About this page" title="Support for Cumilla Students, Families and Travelers">
              Many people in Cumilla travel through Dhaka (DAC) or Chattogram (CGP) for
              international flights, and many students plan higher education abroad. Eammu
              Holidays brings education counselling, visa preparation and travel booking into
              one place, so you do not manage each step with a different provider.
            </Heading>
            <Link href="/contact" className="inline-flex text-sm font-bold text-[#0b3d2e] underline underline-offset-4 hover:text-[#14532d]">
              Ask a question about your plan →
            </Link>
          </div>
          <div className="rounded-2xl border-l-8 border-[#facc15] bg-green-50 p-6 text-sm leading-7 text-gray-700">
            <p className="font-extrabold text-[#0b3d2e]">Honest guidance, always</p>
            <p className="mt-2">
              Visa decisions belong to embassies, admission decisions belong to universities,
              and fare rules belong to airlines. We help you prepare and understand the
              process, and we never guarantee an outcome. Rules change, so confirm current
              requirements on official websites.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Heading kicker="Our services" title="Education, Visa and Travel Services for Cumilla">
            Choose a service to see details, or send one enquiry and we will point you to the
            right team.
          </Heading>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.href + s.title}
                className="flex flex-col rounded-xl border border-gray-200 border-l-4 border-l-[#facc15] bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <span className="text-3xl" aria-hidden="true">{s.icon}</span>
                <h3 className="mt-3 text-lg font-extrabold text-[#0b3d2e]">
                  <Link href={s.href} className="hover:underline">{s.title}</Link>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">{s.text}</p>
                <Link href={s.href} className="mt-4 text-sm font-bold text-[#0b3d2e] hover:text-[#14532d]">
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDY ABROAD ── */}
      <section id="study-abroad" className="scroll-mt-4 bg-[#0b3d2e] px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Heading
            light
            kicker="Higher study abroad"
            title="Education Consultancy and Study Abroad from Cumilla"
          >
            From your first counselling session to departure, we help students and parents
            understand each step. We guide the process, while universities, scholarship
            providers and immigration authorities make the decisions.
          </Heading>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
              <h3 className="text-xl font-extrabold text-[#facc15]">What our counselling covers</h3>
              <div className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                <Bullets items={educationServices.slice(0, 6)} dark />
                <Bullets items={educationServices.slice(6)} dark />
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 text-gray-900">
              <h3 className="text-xl font-extrabold text-[#0b3d2e]">Your study abroad journey</h3>
              <ol className="mt-4 space-y-4">
                {studyTimeline.map((t, i) => (
                  <li key={t.title} className="flex gap-4">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#facc15] text-sm font-extrabold text-[#0b3d2e]">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-bold text-[#0b3d2e]">{t.title}</p>
                      <p className="text-sm leading-6 text-gray-600">{t.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-extrabold">Popular study destinations</h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-green-100">
              Requirements, tuition and scholarships change often. Use these guides as a
              starting point and verify details on official university and government sites.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {studyDestinations.map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className="rounded-xl bg-white p-5 text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:ring-2 hover:ring-[#facc15]"
                >
                  <p className="font-extrabold text-[#0b3d2e]">{d.label}</p>
                  <p className="mt-1 text-sm leading-6 text-gray-600">{d.note}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-white p-6 text-gray-900">
            <h3 className="text-xl font-extrabold text-[#0b3d2e]">Study abroad document checklist</h3>
            <p className="mt-1 text-sm text-gray-600">A starting point. Each university and visa has its own list.</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {studyChecklist.map((c) => (
                <div key={c.title} className="rounded-lg bg-green-50 p-4">
                  <p className="font-extrabold text-[#0b3d2e]">{c.title}</p>
                  <p className="mt-1 text-sm leading-6 text-gray-600">{c.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <PrimaryButton href="/contact">Request Study Abroad Counselling</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISA ── */}
      <section id="visa" className="scroll-mt-4 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Heading kicker="Visa assistance" title="Visa Assistance and Consultancy for Cumilla Applicants">
            We help Bangladeshi passport holders understand requirements and prepare strong,
            accurate files. No single checklist fits every country, so we work from each
            destination's current rules.
          </Heading>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#0b3d2e]">What we can help with</h3>
              <div className="mt-4"><Bullets items={visaCanCannot.can} /></div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-yellow-50 p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#0b3d2e]">What no agency can promise</h3>
              <ul className="mt-4 space-y-2.5">
                {visaCanCannot.cannot.map((c) => (
                  <li key={c} className="flex gap-3 text-sm leading-6 text-gray-700">
                    <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#facc15] text-xs font-bold text-[#0b3d2e]">!</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="mb-4 mt-12 text-xl font-extrabold text-[#0b3d2e]">Understand the fees before you pay</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {feeTypes.map((f) => (
              <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="font-extrabold text-[#0b3d2e]">{f.title}</p>
                <p className="mt-1 text-sm leading-6 text-gray-600">{f.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-7 text-gray-600">
            Start with the{" "}
            <Link href="/visa-checker" className="font-bold text-[#0b3d2e] underline underline-offset-2">visa checker</Link>,
            read the{" "}
            <Link href="/schengen-visa" className="font-bold text-[#0b3d2e] underline underline-offset-2">Schengen visa guide</Link>,
            or open a country guide:{" "}
            <Link href="/visa/united-arab-emirates-visa" className="font-bold text-[#0b3d2e] underline underline-offset-2">Dubai</Link>,{" "}
            <Link href="/visa-checker/bangladesh-visa-for-malaysia/e-visa" className="font-bold text-[#0b3d2e] underline underline-offset-2">Malaysia</Link>,{" "}
            <Link href="/visa/visa-guide/united-kingdom-visa-for-bangladesh" className="font-bold text-[#0b3d2e] underline underline-offset-2">UK</Link>,{" "}
            <Link href="/visa/visa-guide/canada-visa-for-bangladesh" className="font-bold text-[#0b3d2e] underline underline-offset-2">Canada</Link>,{" "}
            <Link href="/visa/visa-guide/australia-visa-for-bangladesh" className="font-bold text-[#0b3d2e] underline underline-offset-2">Australia</Link>,{" "}
            <Link href="/visa/visa-guide/japan-visa-for-bangladesh" className="font-bold text-[#0b3d2e] underline underline-offset-2">Japan</Link>.
          </p>
        </div>
      </section>

      {/* ── AIR TICKETS ── */}
      <section id="air-tickets" className="scroll-mt-4 bg-gray-50 px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <Heading kicker="Air tickets" title="International Air Ticket Booking for Cumilla Travelers">
              We help you compare routes from Dhaka (DAC) and Chattogram (CGP), choose
              between one-way and return tickets, and understand baggage and refund rules
              before you pay. We also support family, group and corporate bookings.
            </Heading>
            <div className="flex flex-wrap gap-3">
              <Link href="/flight-booking" className="inline-flex rounded-lg bg-[#0b3d2e] px-6 py-3 text-sm font-extrabold text-[#facc15] hover:bg-[#14532d]">
                Open Flight Booking
              </Link>
              <Link href="/contact" className="inline-flex rounded-lg border-2 border-[#0b3d2e] px-6 py-3 text-sm font-bold text-[#0b3d2e] hover:bg-[#0b3d2e] hover:text-white">
                Ask About a Route
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-[#0b3d2e]">Check these before buying any ticket</h3>
            <div className="mt-4"><Bullets items={ticketChecks} /></div>
          </div>
        </div>
      </section>

      {/* ── UMRAH & TOURS ── */}
      <section id="umrah-tours" className="scroll-mt-4 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Heading kicker="Umrah & holidays" title="Umrah Packages and Tour Packages from Cumilla">
            We do not publish fixed prices because costs and availability change. Contact us
            with your dates, group size and budget for current options.
          </Heading>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-gray-200 border-t-4 border-t-[#facc15] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#0b3d2e]">Umrah travel</h3>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                Planning can include flights, hotels in Makkah and Madinah, ground transport,
                visa guidance and coordination for families and groups. Hotel distance,
                season and group size all affect the package.
              </p>
              <Link href="/our-services/umrah-packages" className="mt-4 inline-flex text-sm font-bold text-[#0b3d2e] hover:text-[#14532d]">
                View Umrah packages →
              </Link>
            </article>
            <article className="rounded-2xl border border-gray-200 border-t-4 border-t-[#facc15] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#0b3d2e]">Tours and holidays</h3>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                Family trips, honeymoons, group tours and corporate travel to destinations
                such as Thailand, Malaysia, Singapore, Dubai and Europe, with hotels,
                transfers and sightseeing planned around you.
              </p>
              <Link href="/our-services/tour-packages" className="mt-4 inline-flex text-sm font-bold text-[#0b3d2e] hover:text-[#14532d]">
                View tour packages →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ── AREAS ── */}
      <section id="areas" className="scroll-mt-4 bg-[#0b3d2e] px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Heading
            light
            kicker="Cumilla coverage"
            title="Serving Cumilla and Nearby Districts"
          >
            We support people across Cumilla district through online consultation and our
            contact channels. We do not claim a branch in every upazila, so please confirm
            meeting arrangements with us first.
          </Heading>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-extrabold text-[#facc15]">Cumilla upazilas</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cumillaAreas.map((a) => (
                  <li key={a} className="rounded-full bg-white/10 px-3 py-1.5 text-sm ring-1 ring-white/20">{a}</li>
                ))}
              </ul>
              <h3 className="mt-8 text-lg font-extrabold text-[#facc15]">Nearby districts and cities</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {nearbyPlaces.map((a) => (
                  <li key={a} className="rounded-full bg-white/10 px-3 py-1.5 text-sm ring-1 ring-white/20">{a}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 text-gray-900">
              <h3 className="text-lg font-extrabold text-[#0b3d2e]">How to get help from anywhere in Cumilla</h3>
              <ol className="mt-4 space-y-4">
                {getHelpSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#facc15] text-sm font-extrabold text-[#0b3d2e]">{i + 1}</span>
                    <div>
                      <p className="font-bold text-[#0b3d2e]">{s.title}</p>
                      <p className="text-sm leading-6 text-gray-600">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHOOSING ── */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <Heading kicker="Choose with confidence" title="How to Choose a Travel Agency or Education Consultancy in Cumilla">
              Whoever you work with, these checks protect your money and your application.
              You are welcome to use them on us too.
            </Heading>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <Bullets items={chooseChecks} />
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Heading kicker="Free tools" title="Free Visa and Travel Tools">
            Prepare before you contact us.
          </Heading>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-[#0b3d2e] transition hover:border-[#facc15] hover:bg-yellow-50"
              >
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="faq-section scroll-mt-4 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Heading kicker="FAQ" title="Questions from Cumilla Students and Travelers">
            Short answers to common questions about study abroad, visas, flights and Umrah.
          </Heading>
          <div className="space-y-10">
            {faqGroups.map((g) => (
              <div key={g.category}>
                <h3 className="mb-3 text-xl font-extrabold text-[#0b3d2e]">{g.category}</h3>
                <div className="space-y-3">
                  {g.items.map((f) => (
                    <details
                      key={f.question}
                      className="group rounded-xl border border-gray-200 bg-white shadow-sm open:border-[#facc15] open:shadow-md"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-bold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#facc15]">
                        <span>{f.question}</span>
                        <span aria-hidden="true" className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#0b3d2e] text-lg font-bold text-[#facc15] transition group-open:rotate-45">+</span>
                      </summary>
                      <p className="px-5 pb-5 text-sm leading-7 text-gray-600">{f.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[#0b3d2e] px-4 py-16 text-center text-white sm:px-6">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-2 bg-[#facc15]" />
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold sm:text-3xl md:text-4xl">
            Ready to Study, Travel or Plan Umrah from Cumilla?
          </h2>
          <p className="mt-4 text-base leading-7 text-green-100">
            Send your enquiry and get clear next steps for your education plan, visa file,
            flights or holiday.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryButton href="/contact">Contact Eammu Holidays</PrimaryButton>
            <GhostButton href="/study-abroad/student-visa">Study Abroad Guides</GhostButton>
            <GhostButton href="/flight-booking">Book Air Ticket</GhostButton>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-green-200">
            {relatedPages.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="underline underline-offset-2 hover:text-white">{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HomeSeoLinks />
    </main>
  );
}