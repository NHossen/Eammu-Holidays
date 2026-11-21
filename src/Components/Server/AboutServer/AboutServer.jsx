import Image from "next/image";
import Link from "next/link";
import AboutClient from "@/Components/Client/AboutClient/AboutClient";

/* ══════════════════════════════════════════════════════════════════
   SINGLE SOURCE OF TRUTH
   Exported so app/about/page.jsx builds its JSON-LD from exactly the
   same data that is shown to visitors (no visible/schema mismatch).
   Every value marked "CONFIRM" must be verified by the business owner.
══════════════════════════════════════════════════════════════════ */

export const SITE = "https://eammu.com";

/** CONFIRM: set to "2012" only after the documented founding year is verified.
 *  The old page said "Since 2012" AND "3+ years experience" – they contradict. */
export const FOUNDING_YEAR = null;

/** CONFIRM: all three numbers existed in the old files; the old files used them inconsistently. */
export const CONTACT = {
  email: "info@eammu.com",
  phone: "+8801631312524", // CONFIRM primary phone
  whatsapp: "8801701699743", // CONFIRM primary WhatsApp (used by every old CTA link)
  uaePhone: "+971507078334", // CONFIRM UAE line
};

export const whatsappLink = (text = "Hello Eammu Holidays, I would like to discuss your services.") =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;

/** Service markets. CONFIRM: the old page called these "offices"; they are treated as
 *  service markets here until the owner confirms office status. */
export const SERVICE_MARKETS = [
  { code: "BD", name: "Bangladesh", role: "Home market and place of origin", href: "/contact/travel-agency-bangladesh" },
  { code: "AE", name: "United Arab Emirates (Dubai)", role: "Service market", href: "/contact/travel-agency-dubai" },
  { code: "AM", name: "Armenia", role: "Service market", href: "/contact/travel-agency-armenia" },
  { code: "GE", name: "Georgia", role: "Service market", href: "/contact/travel-agency-georgia" },
];

/** Routes below were taken from your HomeSeoLinks route map. `null` = no matching page exists yet,
 *  so no link is rendered. Add a path when you create that page. */
export const ROUTES = {
  home: "/",
  webDev: "/web-development-digital-marketing",
  events: "/event-management",
  fashion: "/eammu-fashion",
  dairy: "/eammu-dairy-poultry",
  textile: "/eammu-textile-bangladesh",
  studyAbroad: "/study-abroad",
  studyUK: "/study-abroad/student-visa/united-kingdom",
  studyUSA: "/study-abroad/student-visa/united-states",
  studyCanada: "/study-abroad/student-visa/canada",
  studyAustralia: "/study-abroad/student-visa/australia",
  studyGermany: "/study-abroad/student-visa/germany",
  studyMalaysia: "/study-abroad/student-visa/malaysia",
  studentVisa: "/our-services/visa-services/student-visa-from-bangladesh",
  allStudentVisas: "/study-abroad/student-visa",
  touristVisa: "/our-services/visa-services/tourist-visa-from-bangladesh",
  workVisa: "/our-services/visa-services/work-visa-from-bangladesh",
  visaServices: "/our-services/visa-services",
  schengenVisa: "/schengen-visa",
  visaChecker: "/visa-checker",
  scholarships: "/scholarships",
  airTickets: "/flight-booking",
  travelInsurance: "/travel-insurance",
  contact: "/contact",
  dhakaAgency: "/travel-agency-dhaka",
  bangladeshAgency: "/travel-agency-bangladesh",
  // No matching pages exist yet (create them, then add the path):
  tourPackages: null,
  umrah: null,
  corporateTravel: null,
};

/* ─────────────── Content data ─────────────── */

const countriesStudy = [
  { name: "United Kingdom", href: ROUTES.studyUK },
  { name: "United States", href: ROUTES.studyUSA },
  { name: "Canada", href: ROUTES.studyCanada },
  { name: "Australia", href: ROUTES.studyAustralia },
  { name: "Germany", href: ROUTES.studyGermany },
  { name: "Malaysia", href: ROUTES.studyMalaysia },
  { name: "France", href: null },
  { name: "Italy", href: null },
  { name: "Cyprus", href: null },
  { name: "Malta", href: null },
];

const studySteps = [
  ["Profile assessment", "We review your academic record, language ability, budget and goals before suggesting any direction."],
  ["Country and university shortlist", "Options are matched to your profile, with an honest view of entry requirements, costs and post-study conditions."],
  ["Course selection", "We help you compare programmes, intakes and career outcomes so the course fits your plan."],
  ["Applications and documents", "Guidance on application forms, transcripts, recommendation letters and Statement of Purpose (SOP) structure."],
  ["Finance and scholarships", "Tuition, living-cost estimates, proof-of-funds documentation and information on scholarships you may qualify for."],
  ["Student visa and departure", "Visa document checklists, interview preparation and pre-departure guidance on travel, accommodation and arrival."],
];

const visaTypes = [
  "Schengen tourist visas",
  "UK visitor visas",
  "USA visitor visas",
  "Canada visitor visas",
  "Australia visitor visas",
  "Dubai tourist visas",
  "European and Asian destinations",
  "Family visit visas",
];

const visaSupport = [
  "Applicant profile assessment",
  "Destination-specific requirements",
  "Document checklists",
  "Financial documentation guidance",
  "Travel itinerary preparation",
  "Hotel and flight reservation guidance",
  "Travel insurance information",
  "Application form guidance",
  "Appointment and interview preparation, where applicable",
];

const airServices = [
  "One-way and return tickets",
  "Multi-city itineraries",
  "Economy and business class",
  "Family and student bookings",
  "Group bookings",
  "Corporate air travel",
  "Changes and cancellation assistance",
];

const tourTypes = [
  "Europe holidays",
  "Middle East tours",
  "Southeast Asia, including Malaysia and Thailand",
  "Turkey",
  "Maldives",
  "Dubai",
  "Egypt",
  "Family holidays",
  "Honeymoon packages",
  "Group tours",
  "Customised holidays",
  "Bangladesh domestic tourism, including Cox's Bazar",
];

const umrahServices = [
  "Umrah package planning",
  "Flight arrangements",
  "Hotel options",
  "Saudi travel requirements guidance",
  "Group and family travel",
  "Travel coordination",
];

const whyPoints = [
  ["🧭", "One team for travel, study and visas", "Flights, tours, visa guidance and education consultancy are handled under one roof, so your plans stay consistent."],
  ["📝", "Documentation support", "Clear checklists and careful review of paperwork before anything is submitted."],
  ["💬", "Transparent communication", "We explain requirements, costs and realistic outcomes up front, including when an application is weak."],
  ["🗺️", "Personalised planning", "Itineraries, study plans and visa strategies are built around your circumstances, not a template."],
  ["🌐", "International destination knowledge", "Guidance across Europe, North America, Australia, the Middle East and Asia."],
  ["🏢", "Business and corporate travel", "Air travel and itinerary support for company staff and delegations."],
];

const services = [
  { id: "education", title: "Overseas education consultancy", desc: "Guidance from course selection to student visa documents.", href: "#education" },
  { id: "tourist-visa", title: "Tourist and visitor visa guidance", desc: "Document and itinerary support for worldwide destinations.", href: "#tourist-visa" },
  { id: "air-ticketing", title: "International air ticketing", desc: "Reservations and itinerary planning for individuals and groups.", href: "#air-ticketing" },
  { id: "tours", title: "Worldwide tour packages", desc: "Customised holidays from Europe to Southeast Asia.", href: "#tours" },
  { id: "umrah", title: "Umrah travel", desc: "Flights, hotels and coordination for Umrah journeys.", href: "#umrah" },
  { id: "business", title: "Other business activities", desc: "Digital, events, fashion, agro and textile ventures.", href: "#business" },
];

const otherBusinesses = [
  { title: "IT and digital marketing", sub: "Web development, SEO and online branding", img: "/it-marketing-eammu.png", alt: "Web development and digital marketing work by Eammu", href: ROUTES.webDev },
  { title: "Event management", sub: "Corporate events, conferences and weddings", img: "/event-eammu-holidays.jpeg", alt: "Event setup managed by Eammu event management", href: ROUTES.events },
  { title: "Fashion and lifestyle", sub: "Apparel blending Bangladeshi craft and modern style", img: "/eammu-fashion.jpeg", alt: "Eammu fashion and lifestyle apparel collection", href: ROUTES.fashion },
  { title: "Dairy and agro", sub: "Dairy and agricultural produce", img: "/eammu-dairy-farm.avif", alt: "Dairy farm operated under the Eammu brand", href: ROUTES.dairy },
  { title: "Textile and industry", sub: "Fabric and garment manufacturing", img: "/eammu-textile.jpg", alt: "Textile production under the Eammu brand", href: ROUTES.textile },
];

const values = [
  ["Transparency", "Clear information on requirements, fees and likely outcomes."],
  ["Customer satisfaction", "Success is measured by how well your plan works for you."],
  ["Professionalism", "Organised processes and timely, accurate communication."],
  ["Integrity", "Honest documentation only. We do not support false or misleading applications."],
  ["Innovation", "Digital tools that make enquiries and follow-ups easier."],
  ["Responsibility", "Careful handling of personal data and responsible travel advice."],
  ["Long-term relationships", "Many clients return for their next trip, course or family visit."],
];

const regionCards = [
  {
    title: "Dhaka, Narayanganj and Gazipur",
    text: "Students, business travellers and families in and around Dhaka use us for study abroad consultancy, visa guidance, international flight bookings and holiday planning.",
    href: ROUTES.dhakaAgency,
    link: "Eammu travel agency page for Dhaka",
  },
  {
    title: "Chattogram, Cox's Bazar and Feni",
    text: "From Chattogram and Cox's Bazar we assist with overseas education, tourist visas, Umrah travel and tickets, as well as domestic holiday plans.",
  },
  {
    title: "Sylhet",
    text: "Many families in Sylhet travel to relatives in the UK and Europe. We help with family visit visa documents, flights and itinerary preparation.",
  },
  {
    title: "Cumilla, Noakhali, Chandpur and nearby",
    text: "Clients in Cumilla, Noakhali, Chandpur, Lakshmipur, Feni and Brahmanbaria can get student visa assistance, visa checklists and flight reservations without travelling to Dhaka.",
  },
  {
    title: "Mymensingh, Rajshahi, Khulna, Barishal and Rangpur",
    text: "Across the north and south of the country we support study abroad applicants, tourists and Umrah travellers by WhatsApp, phone and email.",
    href: ROUTES.bangladeshAgency,
    link: "Eammu travel agency page for Bangladesh",
  },
];

const reachServices = [
  { label: "Overseas education consultancy", href: ROUTES.studyAbroad },
  { label: "Tourist visa guidance", href: ROUTES.touristVisa },
  { label: "Student visa assistance", href: ROUTES.studentVisa },
  { label: "International flight reservations", href: ROUTES.airTickets },
  { label: "Travel insurance information", href: ROUTES.travelInsurance },
  { label: "Check visa requirements", href: ROUTES.visaChecker },
];

const visaDestinations = [
  { label: "Dubai and UAE visa application", href: "/our-services/visa/dubai-visa-application" },
  { label: "UK visa application", href: "/our-services/visa/uk-visa-application" },
  { label: "USA visa application", href: "/our-services/visa/usa-visa-application" },
  { label: "Canada visa application", href: "/our-services/visa/canada-visa-application" },
  { label: "Australia visa application", href: "/our-services/visa/australia-visa-application" },
  { label: "Europe (Schengen) visa application", href: "/our-services/visa/europe-visa-application" },
  { label: "Turkey visa application", href: "/our-services/visa/turkey-visa-application" },
  { label: "Malaysia visa application", href: "/our-services/visa/malaysia-visa-application" },
  { label: "Thailand visa application", href: "/our-services/visa/thailand-visa-application" },
  { label: "Saudi Arabia visa application", href: "/our-services/visa/saudi-arabia-visa-application" },
];

const tourVisaLinks = visaDestinations.filter((d) =>
  /dubai|turkey|malaysia|thailand|saudi|europe/i.test(d.label)
);

const resourceGroups = [
  {
    title: "Visa services and requirements",
    items: [
      { label: "All visa services from Bangladesh", href: ROUTES.visaServices },
      { label: "Tourist visa from Bangladesh", href: ROUTES.touristVisa },
      { label: "Student visa from Bangladesh", href: ROUTES.studentVisa },
      { label: "Work visa from Bangladesh", href: ROUTES.workVisa },
      { label: "Schengen visa guide", href: ROUTES.schengenVisa },
      { label: "Visa requirement checker", href: ROUTES.visaChecker },
    ],
  },
  {
    title: "Prepare your documents",
    items: [
      { label: "Bank statement for a visa", href: "/bank-statement-for-visa" },
      { label: "How much bank balance a visa needs", href: "/how-much-bank-balance-needed-for-visa" },
      { label: "Sponsor letter sample", href: "/sponsor-letter-sample-for-visa" },
      { label: "SOP sample for a student visa", href: "/sop-sample-for-student-visa" },
      { label: "Building a travel itinerary for a visa", href: "/travel-itinerary-for-visa-how-to-make" },
      { label: "Visa interview tips", href: "/visa-interview-tips" },
      { label: "VFS Global appointment guide", href: "/vfs-global-appointment-guide" },
      { label: "Common reasons for visa refusal", href: "/common-reasons" },
      { label: "Reapplying after a refusal", href: "/can-i-reapply-after-visa-rejection" },
    ],
  },
  {
    title: "Study, travel and planning tools",
    items: [
      { label: "Study abroad guide", href: ROUTES.studyAbroad },
      { label: "All student visa guides", href: ROUTES.allStudentVisas },
      { label: "Scholarships by country", href: ROUTES.scholarships },
      { label: "Visa checklist generator", href: "/travel-resources/visa-checklist-generator" },
      { label: "Travel cost calculator", href: "/travel-cost-calculator" },
      { label: "Travel insurance", href: ROUTES.travelInsurance },
      { label: "Flight booking", href: ROUTES.airTickets },
    ],
  },
];

const commitments = [
  ["Transparent consultancy", "You receive plain-language explanations of each step and its cost."],
  ["Realistic expectations", "Admission and visa decisions rest with universities and government authorities. We never guarantee outcomes."],
  ["Proper documentation", "Only genuine, accurate documents are prepared or submitted."],
  ["Customer communication", "A named point of contact and regular updates during your application or booking."],
  ["Responsible travel advice", "Entry rules, insurance and safety information are shared so you can travel prepared."],
  ["Confidentiality", "Your application details are used only to deliver the service you asked for."],
  ["Post-booking assistance", "Help with changes and questions after booking, where available."],
];

const quickNav = [
  ["Company", "#company"],
  ["Why Eammu", "#why"],
  ["Study abroad", "#education"],
  ["Tourist visas", "#tourist-visa"],
  ["Flights", "#air-ticketing"],
  ["Tours", "#tours"],
  ["Umrah", "#umrah"],
  ["Guides", "#resources"],
  ["Reach", "#reach"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

export const faqCategories = [
  "Company",
  "Education",
  "Visas",
  "Flights and tours",
  "Reach and contact",
];

export const faqs = [
  {
    category: "Company",
    question: "What is Eammu Holidays?",
    answer:
      "Eammu Holidays is a travel, overseas education and visa consultancy that originates from Bangladesh. It supports individuals, families, students and businesses with air ticketing, tour packages, Umrah travel, visa guidance and study abroad consultancy.",
  },
  {
    category: "Company",
    question: "Is Eammu Holidays a travel agency or an education consultancy?",
    answer:
      "Both. Travel and overseas education are our main focus, supported by visa guidance and global mobility assistance. We also run separate businesses in other fields, listed in the Other business activities section.",
  },
  {
    category: "Company",
    question: "Does Eammu Holidays guarantee visa approval or admission?",
    answer:
      "No. Universities, embassies and immigration authorities make the final decisions. We help you prepare accurate, complete applications and set realistic expectations, but no agency can guarantee an outcome.",
  },
  {
    category: "Company",
    question: "What makes Eammu Holidays different from other agencies?",
    answer:
      "We combine travel, education and visa services in one place and focus on honest guidance, careful documentation and clear communication. We explain weaknesses in a profile instead of hiding them.",
  },
  {
    category: "Education",
    question: "How does Eammu help students who want to study abroad?",
    answer:
      "We assess your profile, shortlist countries and universities, help you choose a course, guide your application and SOP, advise on finances and scholarships, prepare student visa documents and offer interview and pre-departure guidance.",
  },
  {
    category: "Education",
    question: "Which study destinations can Eammu advise on?",
    answer:
      "We offer guidance for the UK, USA, Canada, Australia, Germany, France, Italy, Malaysia, Cyprus, Malta and other destinations. Available options depend on your profile and the current rules of each country.",
  },
  {
    category: "Education",
    question: "Who decides my university admission?",
    answer:
      "The university decides. Eammu helps you choose suitable programmes, prepare your documents and submit a complete application, but we cannot influence admission decisions.",
  },
  {
    category: "Education",
    question: "Can Eammu help with scholarships and living costs?",
    answer:
      "We share information on scholarships you may be eligible for and give guidance on tuition and living costs so you can plan your budget. Scholarship awards are decided by the funding body.",
  },
  {
    category: "Education",
    question: "What documents are usually needed for a student visa?",
    answer:
      "Requirements vary by country, but commonly include a passport, an admission or offer letter, academic records, language test results, proof of funds and a completed application form. We provide a checklist specific to your destination.",
  },
  {
    category: "Visas",
    question: "Which tourist visas does Eammu provide guidance for?",
    answer:
      "We guide applicants for Schengen, UK, USA, Canada, Australia and Dubai visas, as well as many European and Asian destinations and family visit visas.",
  },
  {
    category: "Visas",
    question: "How do you support a Schengen visa application?",
    answer:
      "We review your profile, explain which country's embassy or visa centre to apply through, prepare the document checklist, help with the travel itinerary, hotel and flight reservations, travel insurance information and form completion, and prepare you for appointments.",
  },
  {
    category: "Visas",
    question: "Do you help with family visit visas?",
    answer:
      "Yes. We guide applicants who are visiting relatives abroad on the documents that show the relationship, purpose of the trip and ties to Bangladesh.",
  },
  {
    category: "Visas",
    question: "Can I apply if I have been refused a visa before?",
    answer:
      "A previous refusal does not always rule out a new application, but it must be declared honestly. We will review the refusal reasons and tell you whether reapplying is sensible and what needs to change.",
  },
  {
    category: "Visas",
    question: "Where can I check visa requirements before I apply?",
    answer:
      "Our visa requirement checker shows whether a destination needs a visa, an e-visa or no visa for a given passport. Our guides also cover bank statements, sponsor letters, itineraries and interview tips, so you can prepare before a consultation.",
  },
  {
    category: "Flights and tours",
    question: "What air ticketing services do you offer?",
    answer:
      "We arrange one-way, return and multi-city international tickets in economy and business class, plus family, student, group and corporate bookings. We also assist with changes and cancellations according to airline rules.",
  },
  {
    category: "Flights and tours",
    question: "Is a flight reservation the same as a confirmed ticket?",
    answer:
      "No. A reservation holds an itinerary for a limited time, while a ticket is issued after payment. Some visa applications ask for a reservation only. We explain what each embassy accepts so you do not buy a ticket too early.",
  },
  {
    category: "Flights and tours",
    question: "What kinds of tour packages are available?",
    answer:
      "We plan holidays to Europe, the Middle East, Southeast Asia, Turkey, Malaysia, Thailand, the Maldives, Dubai and Egypt, as well as family, honeymoon and group tours and domestic trips within Bangladesh.",
  },
  {
    category: "Flights and tours",
    question: "Can a tour package be customised?",
    answer:
      "Yes. We adjust accommodation, flights, pace and activities to your budget and dates, and prepare an itinerary you can also use for visa applications.",
  },
  {
    category: "Flights and tours",
    question: "Do you arrange Umrah travel?",
    answer:
      "Yes. We assist with Umrah packages, flights, hotel options, Saudi travel requirements and coordination for individuals, families and groups.",
  },
  {
    category: "Reach and contact",
    question: "Can I use your services from outside Dhaka?",
    answer:
      "Yes. We assist clients across Bangladesh, including Chattogram, Sylhet, Cumilla, Noakhali and Chandpur, by WhatsApp, phone and email. We do not claim branch offices in these districts.",
  },
  {
    category: "Reach and contact",
    question: "Do you serve customers outside Bangladesh?",
    answer:
      "Yes. We work with clients connected to the UAE, Armenia and Georgia as well as Bangladesh. Service availability can vary by destination, so please ask about your specific case.",
  },
  {
    category: "Reach and contact",
    question: "How do I book a consultation?",
    answer: `Send us a message on WhatsApp (+${CONTACT.whatsapp}), call ${CONTACT.phone} or email ${CONTACT.email} with your destination and purpose of travel. We will reply with the next steps.`,
  },
  {
    category: "Reach and contact",
    question: "What details should I share in my first enquiry?",
    answer:
      "Share your name, destination, purpose (study, tourism, visit or business), approximate travel dates and any previous visa history. For study enquiries, add your latest qualification and results.",
  },
];

/* ─────────────── Small server helpers ─────────────── */

function SmartLink({ href, children, className = "" }) {
  if (!href) return <span className={className}>{children}</span>;
  const external = /^https?:/.test(href);
  const hash = href.startsWith("#");
  if (external || hash) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function SectionHead({ title, intro, center = false }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight text-balance">{title}</h2>
      <div className={`mt-4 h-1 w-14 rounded-full bg-[#ffcc00] ${center ? "mx-auto" : ""}`} />
      {intro && <p className="mt-5 text-gray-600 leading-relaxed text-base md:text-lg">{intro}</p>}
    </div>
  );
}

function Check({ children }) {
  return (
    <li className="flex gap-3 text-gray-700 text-sm md:text-base">
      <span aria-hidden="true" className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[#005a31] text-[#ffcc00] text-xs flex items-center justify-center">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

function PillLinks({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items
        .filter((i) => i.href)
        .map((i) => (
          <li key={i.href + i.label}>
            <Link
              href={i.href}
              className="inline-block rounded-full border border-green-200 bg-green-50 px-3.5 py-2 text-[13px] font-semibold leading-snug text-[#005a31] transition-colors hover:bg-[#005a31] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a31]"
            >
              {i.label}
            </Link>
          </li>
        ))}
    </ul>
  );
}

const btnPrimary =
  "inline-flex items-center justify-center rounded-xl bg-[#ffcc00] px-6 py-3 min-h-[44px] text-sm font-bold text-[#005a31] shadow-md transition hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffcc00]";
const btnGhost =
  "inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 py-3 min-h-[44px] text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const btnGreen =
  "inline-flex items-center justify-center rounded-xl bg-[#005a31] px-6 py-3 min-h-[44px] text-sm font-bold text-white shadow-md transition hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a31]";

/* ─────────────── Page ─────────────── */

export default function AboutServer() {
  const founded = FOUNDING_YEAR ? `Founded in ${FOUNDING_YEAR}, ` : "";

  return (
    <main className="overflow-x-clip bg-white text-gray-800">
      {/* ═══ 1. HERO ═══ */}
      <section aria-labelledby="about-hero-heading" className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-[#003d21] px-4 py-20 md:py-28">
        <Image
          src="/the-love-island.webp"
          alt="Tropical island holiday scene representing Eammu Holidays international travel packages"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="-z-10 object-cover opacity-60"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#003d21]/90 via-[#003d21]/60 to-transparent" />
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full bg-[#ffcc00] px-4 py-1.5 text-sm font-bold text-[#005a31]">
              About Eammu Holidays
            </p>
            <h1 id="about-hero-heading" className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl text-balance">
              Your trusted travel, visa and overseas education partner from Bangladesh
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-100">
              Eammu Holidays is a Bangladesh-based international travel agency, study abroad consultancy and visa guidance provider. We support clients in Dhaka, Chattogram, Sylhet, Cumilla, Chandpur, Noakhali and across the country, and travellers connected to the UAE, Armenia and Georgia. From flights and holidays to student visas and Umrah, we plan every step with clear, honest advice.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#services" className={btnPrimary}>Explore our services</a>
              <a href="#education" className={btnGhost}>Study abroad consultation</a>
              <a href="#tourist-visa" className={btnGhost}>Tourist visa assistance</a>
              <a href="#air-ticketing" className={btnGhost}>Book international flights</a>
              <a href="#contact" className={btnGhost}>Contact our team</a>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility strip – non-numerical, verifiable statements only */}
      <section aria-label="Our approach" className="bg-[#005a31] py-4">
        <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-2 px-4 text-sm font-semibold text-white">
          <li>Transparent guidance</li>
          <li>Documentation support</li>
          <li>No guaranteed approvals</li>
          <li>Support across Bangladesh</li>
        </ul>
      </section>

      {/* In-page navigation */}
      <nav aria-label="On this page" className="sticky top-0 z-30 border-b border-gray-100 bg-white/95 backdrop-blur">
        <ul className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 text-sm">
          {quickNav.map(([label, href]) => (
            <li key={href} className="flex-shrink-0">
              <a href={href} className="block rounded-lg px-3 py-2 font-medium text-gray-600 hover:bg-green-50 hover:text-[#005a31] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#005a31]">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-6xl space-y-24 px-4 py-16 sm:px-6 lg:px-8 md:py-24 [&>section]:scroll-mt-20">
        {/* ═══ 2. COMPANY INTRO ═══ */}
        <section id="company" aria-labelledby="company-heading" className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <h2 id="company-heading" className="text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl text-balance">
              A Bangladesh-born company for travel, study and global mobility
            </h2>
            <div className="h-1 w-14 rounded-full bg-[#ffcc00]" />
            <p>
              {founded}Eammu Holidays began in Bangladesh as a travel and visa consultancy and has grown into a company
              that helps people move, study and holiday internationally. Our core work is travel, overseas education and
              visa guidance, with global mobility assistance for clients planning longer stays abroad.
            </p>
            <p>
              Over time we have built working knowledge of how airlines, embassies, visa centres and universities
              handle applications. That experience lets us tell you early what a destination expects, which documents
              matter and where an application may be weak.
            </p>
            <p>
              Most of our clients are in Bangladesh, and we also support clients connected to Dubai, Armenia and
              Georgia. Whether you are a student comparing universities, a family planning a holiday or a company
              arranging staff travel, you work with advisers who explain each step and keep you informed.
            </p>
            <p>
              Customers choose us for straightforward advice, careful paperwork and a team that stays reachable through WhatsApp, phone and email. Based in Bangladesh and working with destinations across Europe, North America, Australia, the Middle East and Asia, we aim to be a dependable travel and global mobility partner for individuals, families, students and companies.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-green-900/10">
            <Image
              src="/eammu-banner.jpg"
              alt="Travellers from Bangladesh planning a European holiday with Eammu Holidays"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* Services overview */}
        <section id="services" aria-labelledby="services-heading" className="space-y-10">
          <SectionHead
            center
            title={<span id="services-heading">What Eammu Holidays does</span>}
            intro="Six areas of work, from a single flight ticket to a full study abroad plan."
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  className="block h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-green-200 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#005a31]"
                >
                  <h3 className="text-lg font-bold text-[#005a31]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* ═══ 3. WHY EAMMU ═══ */}
        <section id="why" aria-labelledby="why-heading" className="space-y-10">
          <SectionHead
            title={<span id="why-heading">Why clients choose Eammu Holidays</span>}
            intro="We do not promise outcomes we cannot control. We promise careful work and honest advice."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map(([icon, title, text]) => (
              <article key={title} className="rounded-2xl bg-green-50/60 p-6">
                <div aria-hidden="true" className="mb-3 text-2xl">{icon}</div>
                <h3 className="font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ═══ 4. EDUCATION ═══ */}
        <section id="education" aria-labelledby="education-heading" className="space-y-10 rounded-[2rem] bg-[#005a31] p-6 text-white md:p-12">
          <div className="max-w-3xl">
            <h2 id="education-heading" className="text-3xl font-extrabold leading-tight md:text-4xl text-balance">
              Overseas education consultancy for students from Bangladesh
            </h2>
            <div className="mt-4 h-1 w-14 rounded-full bg-[#ffcc00]" />
            <p className="mt-5 leading-relaxed text-green-50/90">
              Choosing where to study abroad affects your finances, career and immigration options for years. Our study
              abroad consultancy guides Bangladeshi students through higher education abroad, one stage at a time.
            </p>
          </div>
          <ol className="grid gap-4 md:grid-cols-2">
            {studySteps.map(([title, text], i) => (
              <li key={title} className="flex gap-4 rounded-2xl bg-white/10 p-5">
                <span aria-hidden="true" className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#ffcc00] font-bold text-[#005a31]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-green-50/90">{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div>
            <h3 className="font-bold">Study destinations we advise on</h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {countriesStudy.map((c) => (
                <li key={c.name}>
                  {c.href ? (
                    <Link href={c.href} className="inline-block rounded-full bg-white px-4 py-1.5 font-semibold text-[#005a31] hover:bg-[#ffcc00]">
                      Study in {c.name}
                    </Link>
                  ) : (
                    <span className="inline-block rounded-full border border-white/30 px-4 py-1.5">{c.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-green-100/90">
            Universities decide admissions and the relevant government authorities decide student visas. Eammu
            prepares and guides your application but does not make or influence these decisions.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink("Hello Eammu Holidays, I would like a study abroad consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className={btnPrimary}
            >
              Start your study abroad journey
            </a>
            {ROUTES.studyAbroad && <SmartLink href={ROUTES.studyAbroad} className={btnGhost}>See study abroad options</SmartLink>}
          </div>
        </section>

        {/* ═══ 5. TOURIST VISA ═══ */}
        <section id="tourist-visa" aria-labelledby="visa-heading" className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <SectionHead
              title={<span id="visa-heading">Worldwide tourist visa consultancy</span>}
              intro="Visitor visas are refused more often because of incomplete or inconsistent paperwork than because of the destination. We help you present an honest, well-organised application."
            />
            <h3 className="font-bold text-gray-900">Visas we guide</h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {visaTypes.map((v) => (
                <Check key={v}>{v}</Check>
              ))}
            </ul>
            <h3 className="font-bold text-gray-900">Destination guidance</h3>
            <PillLinks items={visaDestinations} />
            <p className="text-sm leading-relaxed text-gray-600">
              We guide applicants using accurate documents only and never promise approval. Consulates and visa
              centres make every decision.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappLink("Hello Eammu Holidays, I need tourist visa assistance.")}
                target="_blank"
                rel="noopener noreferrer"
                className={btnGreen}
              >
                Get tourist visa assistance
              </a>
              {ROUTES.touristVisa && <SmartLink href={ROUTES.touristVisa} className="inline-flex items-center text-sm font-semibold text-[#005a31] underline underline-offset-4">Tourist visa details</SmartLink>}
              {ROUTES.schengenVisa && <SmartLink href={ROUTES.schengenVisa} className="inline-flex items-center text-sm font-semibold text-[#005a31] underline underline-offset-4">Schengen visa guide</SmartLink>}
            </div>
          </div>
          <div className="rounded-3xl border border-green-100 bg-green-50/50 p-6 md:p-8">
            <h3 className="font-bold text-gray-900">How we support your application</h3>
            <ul className="mt-4 space-y-3">
              {visaSupport.map((v) => (
                <Check key={v}>{v}</Check>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 6. AIR TICKETING ═══ */}
        <section id="air-ticketing" aria-labelledby="air-heading" className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative order-last aspect-[4/3] overflow-hidden rounded-3xl shadow-xl md:order-first">
            <Image
              src="/flight_eammu.webp"
              alt="Aircraft in flight representing international air ticket booking by Eammu Holidays"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-5">
            <SectionHead
              title={<span id="air-heading">International air ticketing</span>}
              intro="We plan and book international flights for travellers from Bangladesh, from a simple return ticket to a complex multi-city route, and stay available if plans change."
            />
            <ul className="grid gap-2 sm:grid-cols-2">
              {airServices.map((v) => (
                <Check key={v}>{v}</Check>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappLink("Hello Eammu Holidays, I want to book an international flight.")}
                target="_blank"
                rel="noopener noreferrer"
                className={btnGreen}
              >
                Book your international flight
              </a>
              {ROUTES.airTickets && <SmartLink href={ROUTES.airTickets} className="inline-flex items-center text-sm font-semibold text-[#005a31] underline underline-offset-4">View air ticket services</SmartLink>}
            </div>
          </div>
        </section>

        {/* ═══ 7. TOURS ═══ */}
        <section id="tours" aria-labelledby="tours-heading" className="space-y-8">
          <SectionHead
            title={<span id="tours-heading">Worldwide tour packages</span>}
            intro="Every holiday is planned around your budget, dates and travel style. We coordinate accommodation guidance, flights and day-by-day itineraries so you are not piecing it together alone."
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tourTypes.map((t) => (
              <li key={t} className="rounded-xl border border-gray-100 bg-white px-5 py-4 text-sm font-medium text-gray-700 shadow-sm">
                {t}
              </li>
            ))}
          </ul>
          <div>
            <h3 className="mb-3 font-bold text-gray-900">Need a visa for your holiday?</h3>
            <PillLinks items={tourVisaLinks} />
          </div>
          <div className="flex flex-wrap gap-4">
            {ROUTES.tourPackages && <SmartLink href={ROUTES.tourPackages} className={btnGreen}>Browse tour packages</SmartLink>}
            {ROUTES.travelInsurance && <SmartLink href={ROUTES.travelInsurance} className="inline-flex items-center text-sm font-semibold text-[#005a31] underline underline-offset-4">Travel insurance information</SmartLink>}
            {ROUTES.corporateTravel && <SmartLink href={ROUTES.corporateTravel} className="inline-flex items-center text-sm font-semibold text-[#005a31] underline underline-offset-4">Corporate travel support</SmartLink>}
          </div>
        </section>

        {/* ═══ 8. UMRAH ═══ */}
        <section id="umrah" aria-labelledby="umrah-heading" className="rounded-[2rem] border border-green-100 bg-green-50/50 p-6 md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <SectionHead
              title={<span id="umrah-heading">Umrah travel services</span>}
              intro="Umrah involves coordinating flights, visas, accommodation and group arrangements. We help families and groups from Bangladesh plan the journey so they can focus on the pilgrimage."
            />
            <div>
              <ul className="space-y-3">
                {umrahServices.map((v) => (
                  <Check key={v}>{v}</Check>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={whatsappLink("Hello Eammu Holidays, I would like Umrah travel information.")} target="_blank" rel="noopener noreferrer" className={btnGreen}>
                  Ask about Umrah travel
                </a>
                {ROUTES.umrah && <SmartLink href={ROUTES.umrah} className="inline-flex items-center text-sm font-semibold text-[#005a31] underline underline-offset-4">View Umrah packages</SmartLink>}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9. OTHER BUSINESSES ═══ */}
        <section id="business" aria-labelledby="business-heading" className="space-y-10">
          <SectionHead
            title={<span id="business-heading">Other Eammu business activities</span>}
            intro="Travel and overseas education remain our main focus. Alongside them, the Eammu name is used for these separate ventures."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherBusinesses.map((b) => (
              <article key={b.title} className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="relative h-44">
                  <Image src={b.img} alt={b.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-bold text-gray-900">{b.title}</h3>
                  <p className="mt-1 flex-1 text-sm text-gray-600">{b.sub}</p>
                  <SmartLink href={b.href} className="mt-4 inline-block text-sm font-semibold text-[#005a31] underline underline-offset-4">
                    Learn about {b.title.toLowerCase()}
                  </SmartLink>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ═══ 10. MISSION, VISION, VALUES ═══ */}
        <section aria-labelledby="mission-heading" className="space-y-10 rounded-[2rem] bg-[#005a31] p-6 text-white md:p-12">
          <h2 id="mission-heading" className="text-3xl font-extrabold md:text-4xl">Mission, vision and values</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-6">
              <h3 className="font-bold text-[#ffcc00]">Our mission</h3>
              <p className="mt-2 leading-relaxed text-green-50/90">
                To make international travel and overseas education guidance more accessible to customers from Bangladesh.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6">
              <h3 className="font-bold text-[#ffcc00]">Our vision</h3>
              <p className="mt-2 leading-relaxed text-green-50/90">
                To build a trusted international travel and global mobility brand.
              </p>
            </div>
          </div>
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(([t, d]) => (
              <div key={t} className="rounded-xl border border-white/15 p-4">
                <dt className="font-semibold">{t}</dt>
                <dd className="mt-1 text-sm text-green-100/80">{d}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ═══ 11. BANGLADESH REACH ═══ */}
        <section id="reach" aria-labelledby="reach-heading" className="space-y-8">
          <SectionHead
            title={<span id="reach-heading">Serving students and travellers across Bangladesh</span>}
            intro="Eammu Holidays is based in Bangladesh and supports people in every division. Whether you live in Dhaka, Chattogram, Sylhet, Cumilla, Chandpur, Noakhali or another district, you can get advice by WhatsApp, phone or email."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {regionCards.map((r) => (
              <article key={r.title} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-[#005a31]">{r.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{r.text}</p>
                {r.href && (
                  <Link href={r.href} className="mt-3 text-sm font-semibold text-[#005a31] underline underline-offset-4">
                    {r.link}
                  </Link>
                )}
              </article>
            ))}
          </div>
          <div>
            <h3 className="mb-3 font-bold text-gray-900">What we provide to clients nationwide</h3>
            <PillLinks items={reachServices} />
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-600">
            These districts are areas where we assist clients remotely. They are not listed as Eammu branch offices.
          </p>
        </section>


        {/* ═══ 12. INTERNATIONAL PRESENCE ═══ */}
        <section aria-labelledby="intl-heading" className="space-y-8">
          <SectionHead
            title={<span id="intl-heading">International presence</span>}
            intro="Eammu Holidays originates from Bangladesh and works with clients connected to several other markets. We separate the types of presence so there is no confusion."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_MARKETS.map((m) => (
              <li key={m.code} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-gray-900">{m.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{m.role}</p>
                {m.href && (
                  <Link href={m.href} className="mt-3 inline-block text-sm font-semibold text-[#005a31] underline underline-offset-4">
                    Contact page
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-600">
            Our global mobility, tour and education guidance covers destinations such as the UK, USA, Canada,
            Australia, Germany, France, Italy, Spain, Portugal, Poland, Cyprus, Malta, Malaysia, China, Japan, South
            Korea, UAE, Saudi Arabia, Armenia, Georgia, Turkey, Egypt and Azerbaijan. Guidance is not the same as
            representation: we do not claim official partnerships or authorisation with any embassy or university unless
            stated.
          </p>
        </section>

        {/* ═══ 13. COMMITMENT ═══ */}
        <section aria-labelledby="commit-heading" className="space-y-8">
          <SectionHead title={<span id="commit-heading">Our customer commitment</span>} />
          <div className="grid gap-4 md:grid-cols-2">
            {commitments.map(([t, d]) => (
              <article key={t} className="rounded-2xl bg-green-50/60 p-5">
                <h3 className="font-bold text-gray-900">{t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ═══ RESOURCES (internal links to existing guides) ═══ */}
        <section id="resources" aria-labelledby="resources-heading" className="space-y-8">
          <SectionHead
            title={<span id="resources-heading">Free visa guides, checklists and planning tools</span>}
            intro="Prepare before you speak to us. These guides cover documents, interviews, requirements and costs for travellers and students from Bangladesh."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {resourceGroups.map((g) => (
              <div key={g.title} className="rounded-2xl border border-green-100 bg-green-50/40 p-5">
                <h3 className="mb-3 font-bold text-gray-900">{g.title}</h3>
                <PillLinks items={g.items} />
              </div>
            ))}
          </div>
        </section>

        {/* ═══ 14. FAQ (client – category filter) ═══ */}
        <section id="faq" aria-labelledby="faq-heading" className="space-y-8">
          <SectionHead center title={<span id="faq-heading">Frequently asked questions</span>} intro="Straight answers about our services, visas and how to get started." />
          <AboutClient faqs={faqs} categories={faqCategories} />
        </section>

        {/* ═══ 15. CONTACT ═══ */}
        <section id="contact" aria-labelledby="contact-heading" className="space-y-8 rounded-[2rem] border-2 border-green-100 bg-gradient-to-br from-white to-green-50/60 p-6 text-center md:p-12">
          <div className="mx-auto max-w-2xl">
            <h2 id="contact-heading" className="text-3xl font-extrabold text-gray-900 md:text-4xl text-balance">
              Talk to the Eammu Holidays team
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Tell us your destination and goal. We will explain the options, the documents and the realistic next steps.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-4 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-green-100 bg-white p-5">
              <h3 className="text-sm font-bold">WhatsApp</h3>
              <a className="mt-1 block text-sm text-[#005a31] underline" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                +{CONTACT.whatsapp}
              </a>
            </div>
            <div className="rounded-2xl border border-green-100 bg-white p-5">
              <h3 className="text-sm font-bold">Phone</h3>
              <a className="mt-1 block text-sm text-[#005a31] underline" href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
              <a className="mt-1 block text-sm text-[#005a31] underline" href={`tel:${CONTACT.uaePhone}`}>{CONTACT.uaePhone} (UAE)</a>
            </div>
            <div className="rounded-2xl border border-green-100 bg-white p-5">
              <h3 className="text-sm font-bold">Email</h3>
              <a className="mt-1 block break-all text-sm text-[#005a31] underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a href={whatsappLink("Hello Eammu Holidays, I would like to book a consultation.")} target="_blank" rel="noopener noreferrer" className={btnGreen}>
              Book a consultation on WhatsApp
            </a>
            <a href={`mailto:${CONTACT.email}`} className={btnPrimary}>Send an email</a>
            <Link href={ROUTES.contact} className="inline-flex min-h-[44px] items-center justify-center rounded-xl border-2 border-[#005a31] px-6 py-3 text-sm font-bold text-[#005a31] hover:bg-green-50">
              Full contact page
            </Link>
            <Link href={ROUTES.home} className="inline-flex min-h-[44px] items-center justify-center rounded-xl border-2 border-[#005a31] px-6 py-3 text-sm font-bold text-[#005a31] hover:bg-green-50">
              Back to home
            </Link>
          </div>
          <nav aria-label="Related services" className="text-sm text-gray-600">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <li><a className="underline" href="#education">Study abroad</a></li>
              <li><a className="underline" href="#tourist-visa">Tourist visas</a></li>
              <li><a className="underline" href="#air-ticketing">Flights</a></li>
              <li><a className="underline" href="#tours">Tour packages</a></li>
              <li><a className="underline" href="#umrah">Umrah</a></li>
              <li><Link className="underline" href={ROUTES.webDev}>Digital services</Link></li>
              <li><Link className="underline" href={ROUTES.events}>Events</Link></li>
            </ul>
          </nav>
        </section>
      </div>
    </main>
  );
}