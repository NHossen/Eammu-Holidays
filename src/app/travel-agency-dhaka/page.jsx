import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://eammu.com";
const PAGE_PATH = "/travel-agency-dhaka";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

// Update this date whenever the page content is genuinely reviewed.
const CONTENT_LAST_UPDATED = "2026-11-14";

// ─── VERIFIED CONTACT DETAILS ────────────────────────────────────────────────
// Fill these in ONLY after confirming the number is current and monitored.
// While empty, no phone number is shown on the page and all CTAs use /contact.
const VERIFIED_PHONE_DISPLAY = ""; // e.g. "+880-XXXX-XXXXXX"
const VERIFIED_PHONE_TEL = ""; // e.g. "+880XXXXXXXXXX"

// ─── METADATA ────────────────────────────────────────────────────────────────
export const metadata = {
  title: "Travel Agency & Education Consultancy in Dhaka | Eammu Holidays",
  description:
    "Eammu Holidays supports travelers and students in Dhaka and across Bangladesh with visa assistance, international air tickets, tour and Umrah packages, travel insurance guidance, and study abroad consultancy.",
  keywords: [
    "travel agency in Dhaka",
    "travel agency Bangladesh",
    "visa assistance Dhaka",
    "visa consultancy Dhaka",
    "air ticket booking Dhaka",
    "international flight booking Bangladesh",
    "tour packages from Bangladesh",
    "Umrah packages from Bangladesh",
    "Schengen visa consultancy Dhaka",
    "education consultancy in Dhaka",
    "study abroad consultancy Bangladesh",
    "student visa consultancy Dhaka",
    "overseas education consultant Bangladesh",
    "Eammu Holidays",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-BD": PAGE_URL,
    },
  },
  openGraph: {
    title: "Travel Agency & Education Consultancy in Dhaka | Eammu Holidays",
    description:
      "Visa assistance, international air tickets, tour and Umrah packages, and study abroad consultancy for travelers and students in Dhaka and across Bangladesh.",
    url: PAGE_URL,
    siteName: "Eammu Holidays",
    locale: "en_BD",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og/travel-agency-dhaka.jpg`,
        width: 1200,
        height: 630,
        alt: "Eammu Holidays travel agency and education consultancy for Dhaka and Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Agency & Education Consultancy in Dhaka | Eammu Holidays",
    description:
      "Visa assistance, air tickets, tour and Umrah packages, and study abroad consultancy for Dhaka and Bangladesh.",
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

// ─── DATA: EXISTING ARRAYS (ALL ROUTES PRESERVED) ────────────────────────────
// Office details are deliberately neutral: no street addresses, no phone numbers
// and no walk-in claims until the business confirms them. Contact goes via /contact.
const offices = [
  {
    city: "Dhaka",
    name: "Dhaka Consultation & Support",
    area: "Dhaka, Bangladesh",
    description:
      "Visa consultation, international air ticket booking, holiday planning, study abroad file preparation, Umrah packages, and corporate travel support for customers in Dhaka, including Gulshan, Dhanmondi, Uttara, Mirpur, Motijheel, and Narayanganj. Start with a request on our contact page.",
    pages: [{ label: "Travel Agency Bangladesh", href: "/travel-agency-bangladesh" }],
  },
  {
    city: "Cumilla",
    name: "Cumilla Support",
    area: "Cumilla, Bangladesh",
    description:
      "Travel and visa support for Cumilla district clients, including tourist visa guidance, student visa documents, air ticket booking, family tour packages, and Umrah travel.",
    pages: [],
  },
  {
    city: "UAE",
    name: "UAE Support",
    area: "Abu Dhabi & Sharjah, UAE",
    description:
      "Information and coordination for Bangladeshi expatriates in the UAE, including return ticket bookings, visa guidance, and Umrah packages. See the dedicated Abu Dhabi and Sharjah pages for details.",
    pages: [
      { label: "Travel Agency Abu Dhabi", href: "/travel-agency-abu-dhabi" },
      { label: "Travel Agency Sharjah", href: "/travel-agency-sharjah" },
    ],
  },
];

const primaryServices = [
  {
    title: "Tourist Visa Processing from Dhaka",
    href: "/our-services/visa-services/tourist-visa-from-bangladesh",
    icon: "🛂",
    text:
      "Document checklist, application preparation, VFS appointment guidance, cover letter support, and destination-specific visa advice for Bangladeshi passport holders in Dhaka traveling to Europe, the Middle East, Asia, and beyond.",
  },
  {
    title: "International Air Ticket Booking",
    href: "/flight-booking",
    icon: "✈️",
    text:
      "International and domestic air ticket booking from Dhaka (DAC / Hazrat Shahjalal International Airport) with route planning, fare comparison, baggage guidance, and flexible date support for major global destinations.",
  },
  {
    title: "Dubai Visa from Dhaka",
    href: "/visa/united-arab-emirates-visa",
    icon: "🏙️",
    text:
      "Dubai and UAE tourist visa assistance for Dhaka applicants, including document checklist, application guidance, and air ticket and hotel coordination for a smooth UAE trip.",
  },
  {
    title: "Umrah Packages from Dhaka",
    href: "/our-services/umrah-packages",
    icon: "🕌",
    text:
      "Umrah travel from Dhaka, including flights from DAC, CGP, or ZYL, hotel accommodation in Makkah and Madinah, visa guidance, transport, and group coordination. Ask us for current availability and pricing.",
  },
  {
    title: "Student Visa & Study Abroad Consultancy",
    href: "/our-services/visa-services/student-visa-from-bangladesh",
    icon: "🎓",
    text:
      "Study abroad planning from Dhaka: admission document review, financial file preparation, SOP guidance, and student visa support for the USA, UK, Canada, Australia, Germany, Japan, Malaysia, and other destinations.",
  },
  {
    title: "Schengen Visa Consultancy",
    href: "/schengen-visa",
    icon: "🇪🇺",
    text:
      "Schengen visa guidance for Dhaka applicants: country-specific documents, VFS appointment guidance, bank statement advice, and rejection risk assessment for European travel.",
  },
  {
    title: "Tour & Holiday Packages",
    href: "/our-services/tour-packages",
    icon: "🏝️",
    text:
      "Custom holiday packages for families, couples, groups, and corporate travelers from Dhaka, including hotels, transfers, sightseeing, travel insurance guidance, and itinerary planning.",
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
      "Travel insurance guidance for Dhaka applicants, covering visa application requirements, medical emergencies, trip interruption, lost baggage, and destination-specific entry rules.",
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

// ─── DATA: TRUST & PROCESS (NON-NUMERIC, VERIFIABLE FROM THIS PAGE) ─────────
const trustSignals = [
  { value: "Travel + Study", label: "Connected Services", sub: "Tickets, visas, tours, Umrah and education" },
  { value: "BD Passport", label: "Focused Guidance", sub: "Requirements explained for Bangladeshi applicants" },
  { value: "Online", label: "Consultation Support", sub: "For Dhaka and customers across Bangladesh" },
  { value: "Free Tools", label: "Visa & Travel Resources", sub: "Checker, tracker, checklist and cost calculator" },
  { value: "No Guarantees", label: "Honest Visa Guidance", sub: "Embassies make the final decision" },
  { value: "Clear Scope", label: "Fees Explained", sub: "Ask for a written breakdown before you pay" },
];

const processSteps = [
  {
    step: "01",
    title: "Free Initial Consultation",
    description:
      "Contact Eammu Holidays through our contact page. Tell us your purpose (tourist visa, Umrah, student visa, business travel, or a holiday package) and your destination country.",
  },
  {
    step: "02",
    title: "Document Checklist Review",
    description:
      "We review your passport, employment status, financial documents, and destination requirements to prepare a checklist matched to your profile and the current rules for Bangladeshi passport holders.",
  },
  {
    step: "03",
    title: "File Preparation & Guidance",
    description:
      "We assist with cover letter drafting, financial document structuring, application form guidance, appointment booking tips, and a risk review before you submit.",
  },
  {
    step: "04",
    title: "Application Submission Support",
    description:
      "We guide you through embassy appointments, VFS or application centre submission, online e-visa portals, or consular procedures, depending on the destination.",
  },
  {
    step: "05",
    title: "Air Ticket & Travel Booking",
    description:
      "Once the visa outcome is clear, book international air tickets from Dhaka (DAC), hotels, airport transfers, travel insurance, and tour packages through Eammu Holidays.",
  },
  {
    step: "06",
    title: "Post-Travel Support",
    description:
      "We stay available for travel queries, itinerary questions, and repeat travel or study consultancy after your trip.",
  },
];

const reasons = [
  {
    title: "Travel and Education Under One Roof",
    desc: "Eammu Holidays is not only a ticketing desk. We support visa applications, flights, tours, Umrah, and overseas education planning, so one team understands your whole journey.",
  },
  {
    title: "Dhaka-Focused Visa Guidance",
    desc: "Practical knowledge of Bangladeshi passport requirements, application centre procedures, common refusal reasons, and what embassies usually look for in an application.",
  },
  {
    title: "Support Beyond Dhaka",
    desc: "Customers in Cumilla, Chattogram, Sylhet and other districts can start with online consultation, and Bangladeshi expatriates in the UAE can use our Abu Dhabi and Sharjah pages.",
  },
  {
    title: "Transparent Document Guidance",
    desc: "We explain which documents are needed, why they matter, and which risk factors to address, before you pay any embassy fee or application centre charge.",
  },
  {
    title: "End-to-End Travel Support",
    desc: "From visa file preparation and air ticket booking to travel insurance and tour packages, we help with the full travel journey from Dhaka.",
  },
  {
    title: "Free Internal Travel Tools",
    desc: "The visa checker, processing time tracker, cost calculator, and checklist generator are free on eammu.com and built for Bangladeshi passport holders.",
  },
];

// ─── DATA: SERVICE DETAIL ─────────────────────────────────────────────────────
const travelServiceDetails = [
  { title: "International & Domestic Air Tickets", text: "Booking support from DAC and other Bangladesh airports for international and domestic routes." },
  { title: "Airline Comparison & Route Planning", text: "We compare available routes, timings, baggage and layovers so you can choose with the full picture." },
  { title: "One-Way & Return Tickets", text: "Return, one-way and multi-city options, with guidance on onward-travel requirements." },
  { title: "Group & Corporate Ticketing", text: "Coordinated bookings for teams, delegations, pilgrim groups and families traveling together." },
  { title: "Family Travel Arrangements", text: "Seating, baggage, infant and child fare questions, and shared itineraries for families." },
  { title: "Hotel Booking Assistance", text: "Hotel options and reservations that match your itinerary and, where relevant, visa documentation." },
  { title: "International Tour Packages", text: "Packages for destinations such as Thailand, Malaysia, Singapore, Dubai and Europe, planned around your group and budget." },
  { title: "Customized Holiday Planning", text: "Honeymoon, family and group holidays built around your dates, interests and budget." },
  { title: "Airport Transfer Coordination", text: "Pickup and drop-off arrangements so arrival at your destination is simpler." },
  { title: "Travel Insurance Guidance", text: "Help understanding visa-related insurance requirements and what a policy should cover." },
  { title: "Business Travel Support", text: "Flights, hotels and visa documents for professionals and company travel." },
  { title: "Travel Document Guidance", text: "Passport validity, visa, entry-rule and transit-document checks before you fly." },
  { title: "Date Change & Cancellation Guidance", text: "Explanation of fare rules, change fees and refund conditions. The airline sets the final terms." },
  { title: "Baggage Allowance Information", text: "Help reading baggage allowances, which differ by airline, route and fare type." },
  { title: "Transit & Connecting Flights", text: "Guidance on layover length, separate tickets, and whether a transit visa may be needed." },
];

const ticketChecks = [
  "Passenger names exactly as shown on the passport",
  "Passport validity (many countries ask for at least six months) and blank pages",
  "Total fare including taxes and fees, and what is excluded",
  "Fare rules for date changes, cancellations and refunds",
  "Checked and cabin baggage allowance for every flight segment",
  "Layover length, airport changes and any transit visa requirement",
  "Whether the ticket is a confirmed booking, not just a reservation hold",
  "Entry requirements of the destination, including onward-ticket rules",
  "Written confirmation, receipt, and the airline booking reference (PNR) you can verify with the airline",
];

const travelChecklist = [
  { title: "Passport & visa", text: "Valid passport, correct visa or e-visa printout, and copies stored separately." },
  { title: "Ticket & reservation", text: "Confirmed e-ticket, airline reference, and return or onward ticket where required." },
  { title: "Baggage", text: "Allowance checked, restricted items reviewed, and valuables kept in cabin bags." },
  { title: "Accommodation", text: "Hotel booking or host address for the first nights and for immigration questions." },
  { title: "Insurance", text: "Policy covering medical care and trip disruption, and meeting any visa rule." },
  { title: "Transit", text: "Layover time, terminal changes and transit visa needs confirmed in advance." },
  { title: "Money & contacts", text: "Funds, cards, emergency contacts and the embassy details of your destination." },
  { title: "Airport day (DAC)", text: "Arrive early, keep documents together, and check the check-in deadline with the airline." },
];

// ─── DATA: VISA ───────────────────────────────────────────────────────────────
const visaCategories = [
  { title: "Tourist & Visitor Visa", text: "Itinerary, funds and ties-to-home documentation for leisure travel." },
  { title: "Family Visit Visa", text: "Invitation, relationship proof and host documents where the destination requires them." },
  { title: "Business Visa", text: "Company letters, invitation letters and trip purpose for meetings, fairs and trade visits." },
  { title: "Student Visa", text: "Offer letter, financial proof and study plan, coordinated with your admission file." },
  { title: "Work Visa & Employment Documents", text: "Employment contract and sponsor-related documents, prepared according to the authority's rules." },
  { title: "Schengen Visa", text: "Lead-country selection, appointment planning, insurance, itinerary and financial documents." },
  { title: "UK & USA Visitor Visas", text: "Detailed forms, interview preparation where applicable, and clear supporting evidence." },
  { title: "Canada & Australia Visitor Visas", text: "Online application preparation, biometrics steps and supporting document organization." },
  { title: "UAE / Dubai, Malaysia & Japan", text: "Destination-specific guidance, including e-visa or sponsor routes where they apply." },
];

const visaRoles = [
  {
    party: "Travel agency (Eammu Holidays)",
    handles: "Ticketing, tour and hotel arrangements, travel insurance guidance, and document guidance for visa files.",
    notControl: "Visa decisions, airline fare rules, and embassy processing times.",
  },
  {
    party: "Visa consultant / application assistance",
    handles: "Reviewing requirements, organizing documents, drafting cover letters, and preparing you for the process.",
    notControl: "Whether a visa is granted. That decision belongs to the authority.",
  },
  {
    party: "Embassy, consulate or immigration authority",
    handles: "Assessing the application and deciding to approve or refuse, and setting the rules and government fees.",
    notControl: "Agency service fees, or how an agency prepares your file.",
  },
  {
    party: "VFS or other application centre",
    handles: "Accepting applications, collecting biometrics and documents, and charging its own service fee where used.",
    notControl: "The visa decision, which stays with the embassy or consulate.",
  },
  {
    party: "Airline",
    handles: "Operating the flight, setting fare rules, baggage allowance, changes and refunds.",
    notControl: "Visa approval, or an agency's service charges.",
  },
  {
    party: "Education consultancy",
    handles: "Course and university guidance, admission applications, scholarship research and offer review.",
    notControl: "University admission decisions and scholarship awards.",
  },
];

const feeTypes = [
  { title: "Government / embassy fee", text: "Set by the destination country, usually non-refundable even if the visa is refused." },
  { title: "Application centre charge", text: "A separate service fee when an application centre such as VFS is used." },
  { title: "Agency service fee", text: "Eammu Holidays' fee for document review, preparation and guidance. Ask for it in writing." },
  { title: "Other costs", text: "Translation, notarization, courier, insurance, medical tests or photos, if the process needs them." },
];

const visaDocumentTopics = [
  { title: "Passport requirements", text: "Validity period, blank pages, and previous passports that show travel history." },
  { title: "Financial documentation", text: "Recent bank statements, income proof and source-of-funds explanations that match each other." },
  { title: "Bank statements & solvency", text: "Consistent activity over time looks stronger than a sudden large deposit before applying." },
  { title: "Employment & business documents", text: "Employer letter, leave approval, trade licence, TIN and tax documents as relevant." },
  { title: "Travel history", text: "Previous visas and stamps help show a record of compliant travel." },
  { title: "Travel itinerary", text: "A realistic plan that matches your dates, leave and budget." },
  { title: "Hotel & flight reservations", text: "Check whether the embassy wants reservations or only an itinerary, and avoid paying for non-refundable tickets too early." },
  { title: "Cover letter", text: "A clear, truthful explanation of your purpose, dates, funding and ties to Bangladesh." },
  { title: "Invitation letters", text: "Only where required, with the host's details and supporting documents." },
  { title: "Travel insurance", text: "Mandatory for some visas, such as Schengen, and wise for most international trips." },
  { title: "Visa interview preparation", text: "Know your own file, answer honestly and keep answers consistent with your documents." },
  { title: "Photos & application forms", text: "Photo size and background rules vary, and form details must match your passport." },
];

const commonMistakes = [
  "Submitting a generic checklist instead of the destination's current requirements",
  "Bank statements that do not match declared income or travel budget",
  "Inconsistent dates between itinerary, leave letter and reservations",
  "Missing translations or unclear photocopies",
  "Incomplete forms or answers that differ from supporting documents",
  "Applying very close to the travel date",
  "Using unverified third-party documents or advice",
];

const refusalReasons = [
  "Insufficient or unclear proof of funds",
  "Doubts about the purpose or plan of the trip",
  "Weak ties to Bangladesh, or doubts that the applicant will return",
  "Incomplete, inconsistent or inaccurate documents",
  "Unclear employment or business evidence",
  "Previous refusals not explained",
  "Missing mandatory items such as insurance or invitation",
];

const strongerApplication = [
  "Check the official requirements for your visa category before collecting documents",
  "Keep financial records consistent and explainable",
  "Prepare a truthful, specific cover letter",
  "Match the itinerary to your leave and funds",
  "Apply with enough time for appointments and processing",
  "If you were refused before, understand the reason before reapplying",
];

const visaChecklist = [
  "Valid passport with sufficient validity and blank pages",
  "Completed application form or online application confirmation",
  "Recent photographs meeting the destination's specifications",
  "Financial documents such as bank statements and income proof",
  "Employment, business or student documents",
  "Travel itinerary and, where required, accommodation and flight reservations",
  "Travel insurance if required",
  "Cover letter and any invitation or sponsor documents",
  "Previous visas or travel history, if any",
  "Appointment confirmation and fee payment receipt",
];

// ─── DATA: CHOOSING A SERVICE PROVIDER ────────────────────────────────────────
const chooseTravel = [
  "Clear business identity and verifiable contact channels",
  "Service fees explained before payment, preferably in writing",
  "Written fare conditions for changes, cancellations and refunds",
  "Ticket details you can verify directly with the airline",
  "A stated refund and cancellation policy",
  "Visa advice that never promises guaranteed approval",
  "Written scope of what the agency will and will not do",
  "Responsive communication before and after booking",
];

const chooseEducation = [
  "Understands the destination country and your chosen course level",
  "Gives university information you can verify on official websites",
  "Explains fees and payment conditions clearly",
  "Checks your eligibility honestly before applying",
  "Gives you copies of everything submitted for you",
  "Supports scholarship statements with official sources",
  "Avoids promising guaranteed admission, scholarships or visas",
];

const beforePaying = [
  "Ask for a fee breakdown separating government, application centre and agency fees",
  "Request a written service agreement describing the scope of work",
  "Ask for an official receipt for every payment",
  "Verify ticket details with the airline using the booking reference",
  "Read refund and cancellation terms before paying",
  "Keep copies of every document and form submitted for you",
  "Pay through traceable methods, not informal cash handovers",
];

// ─── DATA: EDUCATION CONSULTANCY ──────────────────────────────────────────────
const educationServices = [
  { title: "Student Profile & Academic Review", text: "We assess your education history, grades, study gaps and goals, and evaluate your Bangladeshi qualifications for your target destinations." },
  { title: "Country, Course & Subject Selection", text: "Compare countries and subjects against your budget, career plans and eligibility." },
  { title: "University Shortlisting & Eligibility", text: "Build a shortlist of programmes and review admission eligibility before you apply." },
  { title: "Tuition & Cost Comparison", text: "Compare tuition, living costs and funding options using each university's official figures." },
  { title: "Scholarship Research & Applications", text: "Identify scholarships you may qualify for and prepare applications. Awards are decided by the provider." },
  { title: "Admission Applications & Documents", text: "Prepare application forms, review transcripts and certificates, and organize required documents." },
  { title: "English-Language Guidance", text: "IELTS and alternative English tests, including which tests a university accepts and when exemptions may apply." },
  { title: "SOP, CV & Recommendation Letters", text: "Guidance on a personal, honest statement of purpose, a strong CV and referee letters." },
  { title: "Financial Documentation", text: "Guidance on proof of funds, sponsor documents and bank statements for admission and visa." },
  { title: "Offer Letter Review", text: "Read conditions, deadlines, deposits and course details before you accept an offer." },
  { title: "Student Visa Documentation", text: "Prepare your student visa file based on the destination's current rules and your offer." },
  { title: "Pre-Departure, Accommodation & Flights", text: "Accommodation information, flight planning, insurance and orientation checklists before you travel." },
];

const educationProcess = [
  { step: "1", title: "First counselling session", text: "Discuss your academic background, goals, budget and timeline, with parents or sponsors welcome." },
  { step: "2", title: "Profile and country assessment", text: "Review your qualifications and compare suitable countries and study levels." },
  { step: "3", title: "Course and university shortlist", text: "Select programmes that match your eligibility, budget and plans." },
  { step: "4", title: "Document and test preparation", text: "Organize academic records, English-test plans, SOP, CV and referee letters." },
  { step: "5", title: "Applications and scholarships", text: "Submit applications and any scholarship forms before their deadlines." },
  { step: "6", title: "Offer review", text: "Understand conditions, fees and next steps for each offer you receive." },
  { step: "7", title: "Student visa file", text: "Prepare financial and supporting documents and guide you through the application." },
  { step: "8", title: "Pre-departure and travel", text: "Accommodation, insurance, flight planning and arrival preparation." },
];

const serviceTogether = [
  { title: "Education consultancy", text: "Handles study planning, university selection, admission applications and scholarship research." },
  { title: "Student visa assistance", text: "Helps prepare immigration documents once you have an offer. The embassy decides." },
  { title: "Travel services", text: "Flights and travel arrangements, planned after the relevant approvals, so you avoid early non-refundable bookings." },
  { title: "Insurance & accommodation guidance", text: "Supports pre-departure planning so you arrive prepared." },
];

const studyDestinations = [
  {
    country: "Malaysia",
    href: "/study-abroad/student-visa/malaysia",
    levels: "Foundation, diploma, bachelor's and postgraduate programmes at public and private institutions.",
    admission: "Apply to the institution; English requirements vary, and some programmes accept alternatives to IELTS.",
    costs: "Compare tuition, accommodation and daily costs per institution, and whether it is a public or private university.",
    scholarships: "Some universities and organizations offer scholarships; check each provider's official page.",
    visa: "A student pass is usually arranged through the institution and official Malaysian processes. Confirm the current steps and documents with the university and authorities.",
  },
  {
    country: "United Kingdom",
    href: "/study-abroad/student-visa/united-kingdom",
    levels: "Foundation, undergraduate, master's and research degrees.",
    admission: "Applications usually go through the university or UCAS; English-test requirements depend on the course and institution.",
    costs: "Compare international tuition, living costs and health-related charges using official figures.",
    scholarships: "Look at university awards and national schemes, and confirm eligibility on the provider's site.",
    visa: "A student visa generally requires an offer from a licensed sponsor and proof of funds. Check GOV.UK for current rules.",
  },
  {
    country: "United States",
    href: "/study-abroad/student-visa/united-states",
    levels: "Associate, bachelor's, master's and doctoral programmes.",
    admission: "Applications are made to each university; tests such as English proficiency, SAT, GRE or GMAT may or may not be required.",
    costs: "Tuition and living costs vary widely by institution and city; review each school's published estimates.",
    scholarships: "Merit aid, assistantships and external awards may exist; confirm on each university's page.",
    visa: "An F-1 student visa usually needs an I-20 from an approved school, financial evidence and an embassy appointment. Check the US government sources for current steps.",
  },
  {
    country: "Canada",
    href: "/study-abroad/student-visa/canada",
    levels: "Diploma, college, bachelor's, master's and PhD programmes.",
    admission: "Apply to the institution; English-test requirements vary and programmes have their own prerequisites.",
    costs: "Compare tuition, living costs and the funds proof required for the study permit using official sources.",
    scholarships: "Institution-level awards may be available; verify with each university.",
    visa: "A study permit usually requires an acceptance letter from an eligible institution; additional attestation requirements may apply. Check IRCC for current rules.",
  },
  {
    country: "Australia",
    href: "/study-abroad/student-visa/australia",
    levels: "Vocational, bachelor's, master's and research programmes.",
    admission: "Apply to the institution; English requirements and entry criteria depend on the course.",
    costs: "Compare tuition, living costs and minimum funds guidance published by the government and universities.",
    scholarships: "Government and university scholarships exist but are competitive and change over time.",
    visa: "A student visa generally requires a confirmed enrolment and evidence of funds and intent to study. Check the Department of Home Affairs for current rules.",
  },
  {
    country: "Germany",
    href: "/study-abroad/student-visa/germany",
    levels: "Bachelor's, master's and doctoral programmes, taught in German or English depending on the course.",
    admission: "Check the university and DAAD resources for recognition of Bangladeshi qualifications, language requirements and application portals.",
    costs: "Tuition rules differ by state and programme; living costs and proof of funds are important to compare.",
    scholarships: "DAAD and other organizations offer scholarships; verify eligibility on official pages.",
    visa: "A national student visa generally needs admission, financial proof and health insurance. Check the German embassy information for current requirements.",
  },
  {
    country: "Japan",
    href: "/study-abroad/student-visa/japan",
    levels: "Language schools, undergraduate, graduate and research programmes.",
    admission: "Requirements differ for Japanese-taught and English-taught programmes, and entrance exams or interviews may apply.",
    costs: "Compare tuition, accommodation and living costs from each institution's official information.",
    scholarships: "Government and university scholarships may exist; confirm details with official providers.",
    visa: "Student status usually involves a Certificate of Eligibility arranged through the school. Check Japan's official immigration and embassy sources.",
  },
  {
    country: "Other European Destinations",
    href: "/study-abroad/student-visa",
    levels: "Programmes vary by country, with many English-taught master's courses.",
    admission: "Each country and university sets its own admission, language and recognition rules.",
    costs: "Tuition ranges from low-cost to high-cost depending on the country, so compare using official university pages.",
    scholarships: "National programmes and university awards may exist; verify each one.",
    visa: "National visa rules differ from country to country. Start with the destination's embassy or immigration website.",
  },
];

const compareBeforeSelecting = [
  "Recognition and accreditation of the university and programme",
  "Course content, level and whether it matches your academic background",
  "Total cost: tuition, living costs, insurance and deposits",
  "Scholarship rules and whether they apply to international students",
  "English-language requirements and accepted tests",
  "Work-while-studying and post-study rules, checked on official sites",
  "Location, accommodation options and support for international students",
  "Visa requirements, funds proof and processing timelines",
];

const studyChecklist = [
  { title: "Academic", text: "SSC, HSC, bachelor's or master's certificates and transcripts, plus any translations or attestations required." },
  { title: "Identity", text: "Valid passport, national ID and photographs." },
  { title: "English-language", text: "IELTS or another accepted test result, or a documented exemption where a university allows it." },
  { title: "Application documents", text: "SOP, CV, recommendation letters, portfolio or test scores where required." },
  { title: "Financial", text: "Bank statements, sponsor documents, income proof and proof of funds as required by the visa." },
];

// ─── DATA: LOCAL & BANGLADESH-WIDE ────────────────────────────────────────────
const localZones = [
  { zone: "North Dhaka", areas: "Gulshan, Banani, Baridhara, Uttara, Mirpur, Bashundhara, Badda", note: "Many applicants here prepare tourist, student and business visa files." },
  { zone: "Central Dhaka", areas: "Dhanmondi, Mohammadpur, Farmgate, Tejgaon, Motijheel, Paltan", note: "Close to many offices, universities and embassies." },
  { zone: "East & South Dhaka", areas: "Rampura, Khilgaon, Jatrabari, Wari, Lalbagh, Old Dhaka", note: "Family, Umrah and group travel enquiries are common." },
  { zone: "Cantonment & Outer Dhaka", areas: "Cantonment, Keraniganj, Savar, Ashulia", note: "Online consultation helps avoid long travel across the city." },
  { zone: "Nearby Districts", areas: "Narayanganj, Gazipur", note: "Online enquiry is the simplest way to get started." },
];

const bangladeshRegions = [
  "Dhaka",
  "Cumilla",
  "Chattogram",
  "Sylhet",
  "Rajshahi",
  "Khulna",
  "Barishal",
  "Rangpur",
  "Mymensingh",
  "Bogura",
  "Narayanganj",
  "Gazipur",
];

const outsideDhakaSteps = [
  { title: "Send your enquiry", text: "Use the contact page to share your destination, purpose and preferred time." },
  { title: "Online consultation", text: "We review your goals and documents remotely and explain the next steps." },
  { title: "Share documents digitally", text: "Prepare scans or photos of your documents. We tell you which originals will be needed and when." },
  { title: "Submission and travel", text: "We explain where applications or biometrics must be completed, then help with ticketing and travel planning." },
];

// ─── DATA: FAQS (GROUPED) ─────────────────────────────────────────────────────
const faqGroups = [
  {
    category: "Travel Agency",
    items: [
      {
        question: "Which travel agency can help me book international flights from Dhaka?",
        answer:
          "Eammu Holidays assists with international and domestic air ticket booking from Hazrat Shahjalal International Airport (DAC), including route and fare comparison and baggage guidance. Share your destination, dates and number of passengers through our contact page or the flight booking page.",
      },
      {
        question: "How can I choose a reliable travel agency in Dhaka?",
        answer:
          "Check that the agency is transparent about its identity and contact channels, explains fees in writing, gives fare conditions and refund terms, lets you verify the ticket with the airline, and never guarantees visa approval. Our checklist on this page covers each point.",
      },
      {
        question: "Does Eammu Holidays provide online travel consultation?",
        answer:
          "Yes. You can start a consultation through our contact page, which works for customers in Dhaka and other parts of Bangladesh. Include your destination, travel dates and purpose so the first reply is useful.",
      },
      {
        question: "Can I book a one-way or return ticket?",
        answer:
          "Yes, both are available on many routes. Some destinations or airlines may ask for proof of onward or return travel, so check entry rules before booking a one-way ticket.",
      },
      {
        question: "Can Eammu Holidays arrange group and corporate flight bookings?",
        answer:
          "We can help with group, family and corporate ticketing. Share the number of travelers, dates and budget. Group fares and conditions are set by airlines and depend on availability.",
      },
      {
        question: "Can I get help with flight changes or cancellations?",
        answer:
          "We can explain your fare rules and help request a change or cancellation. Whether it is allowed, and any fee or refund, is decided by the airline and your fare conditions.",
      },
      {
        question: "What should I check before buying an international air ticket?",
        answer:
          "Check the passenger name against your passport, the total fare, baggage allowance, change and refund rules, layover length, transit visa needs and the destination's entry requirements. Then confirm the booking reference with the airline.",
      },
      {
        question: "Does Eammu offer tour and Umrah packages from Bangladesh?",
        answer:
          "Yes. We plan customized holiday packages and Umrah travel, including flights, hotels, transport and visa guidance. Prices and departure dates change, so contact us for current availability instead of relying on any fixed figure.",
      },
    ],
  },
  {
    category: "Visa Assistance",
    items: [
      {
        question: "Which agency provides visa assistance in Dhaka?",
        answer:
          "Eammu Holidays provides visa assistance and consultancy for Bangladeshi applicants, covering tourist, business, student and family visit visas. We help with document preparation and guidance, while the embassy or immigration authority makes the decision.",
      },
      {
        question: "Can I get tourist visa guidance for Europe?",
        answer:
          "Yes. We guide applicants through Schengen and other European visa requirements, including choosing the correct country to apply to, preparing documents and understanding appointment steps.",
      },
      {
        question: "Can Eammu help with Schengen visa documentation?",
        answer:
          "Yes. We assist with the document checklist, itinerary, travel insurance, financial documents and application preparation. See our Schengen visa guide for background, and remember that requirements differ by country and change over time.",
      },
      {
        question: "Can Eammu assist with UK and USA visa applications?",
        answer:
          "We can help you prepare documents and understand the process for UK and USA visitor and student visas. Both are detailed applications decided by the respective governments, so no outcome can be promised.",
      },
      {
        question: "Can Eammu help with Dubai, Malaysia or Japan visas?",
        answer:
          "Yes. We provide guidance for UAE, Malaysia, Japan and many other destinations. Visit the visa checker or the destination guides on this page to see the route that applies to Bangladeshi passport holders.",
      },
      {
        question: "What documents are generally needed for a tourist visa?",
        answer:
          "Commonly requested items include a valid passport, photos, financial documents, employment or business proof, an itinerary, accommodation and travel reservations where required, insurance and a cover letter. Requirements vary by country, visa type and applicant profile, so always confirm the official checklist.",
      },
      {
        question: "Does an agency guarantee visa approval?",
        answer:
          "No legitimate agency can. Visa decisions belong to the embassy, consulate or immigration authority. Eammu Holidays helps you prepare a complete, accurate application, but we never promise approval.",
      },
      {
        question: "What is the difference between embassy fees and agency service fees?",
        answer:
          "Embassy or government fees are set by the destination country, and application centres such as VFS may add their own service charge. An agency service fee covers the agency's work on your file. Ask for these amounts separately and in writing.",
      },
      {
        question: "Can customers outside Dhaka receive visa assistance?",
        answer:
          "Yes. Customers in Cumilla, Chattogram, Sylhet and other areas can start with an online consultation and share documents digitally. We will explain what has to be done in person, such as biometrics.",
      },
      {
        question: "Can I get help with VFS appointment guidance?",
        answer:
          "Yes. We explain when an application centre is required, what to prepare for the appointment and common booking issues. We do not control appointment availability, which is managed by the application centre or embassy.",
      },
    ],
  },
  {
    category: "Education Consultancy",
    items: [
      {
        question: "Which education consultancy can help me study abroad from Dhaka?",
        answer:
          "Eammu Holidays offers study abroad consultancy for Bangladeshi students, from choosing a country and course to admission documents and student visa preparation. Choose any consultancy by checking transparency, written scope and verifiable university information.",
      },
      {
        question: "Does Eammu Holidays provide study abroad counselling?",
        answer:
          "Yes. We offer counselling on country selection, course choice, university shortlisting, documents and student visa preparation. You can request a session through the contact page.",
      },
      {
        question: "Which countries can Bangladeshi students consider?",
        answer:
          "Popular options include Malaysia, the UK, the USA, Canada, Australia, Germany, Japan and other European countries. The right choice depends on your academic profile, budget, language ability and career plans.",
      },
      {
        question: "Can I apply to Malaysian universities from Bangladesh?",
        answer:
          "Yes, students from Bangladesh can apply to Malaysian institutions, subject to each institution's entry requirements. Confirm admission and student pass steps with the university and official Malaysian sources.",
      },
      {
        question: "Can students receive scholarship application guidance?",
        answer:
          "Yes. We help you research scholarships you may be eligible for and prepare applications. Scholarships are awarded by the provider, so we cannot guarantee any award, and we encourage checking the provider's official page.",
      },
      {
        question: "Can I apply without IELTS?",
        answer:
          "Sometimes. Some universities accept other English tests or consider previous English-medium study, while others require specific tests. Check each university's official policy, because rules change.",
      },
      {
        question: "Can students with study gaps apply abroad?",
        answer:
          "Many students with a gap do apply, but you should be ready to explain the gap with supporting documents such as work or course evidence. Requirements differ by university and by visa authority.",
      },
      {
        question: "What documents are needed for university admission?",
        answer:
          "Typically academic certificates and transcripts, passport, English-test results where required, SOP, CV, recommendation letters and sometimes a portfolio or test scores. Each university publishes its own list.",
      },
      {
        question: "Can Eammu help with student visa documentation?",
        answer:
          "Yes. After you receive an offer, we help prepare your financial documents, study plan and application forms based on the destination's current requirements. The visa decision remains with the authority.",
      },
      {
        question: "How can I compare tuition fees and living costs?",
        answer:
          "Use each university's official fee pages and the government's published funds requirements. Compare the total cost of the full course, including tuition, housing, insurance, travel and any deposits, not just the first-year tuition.",
      },
    ],
  },
  {
    category: "Location & Support",
    items: [
      {
        question: "Does Eammu serve customers in Uttara and Mirpur?",
        answer:
          "Yes. We support customers from Uttara, Mirpur and other areas of Dhaka, including Gulshan, Dhanmondi, Mohammadpur and nearby Narayanganj and Gazipur, through our contact channels. We do not claim a branch in every area.",
      },
      {
        question: "Can students from outside Dhaka receive online counselling?",
        answer:
          "Yes. Students and parents from other districts can use online counselling and share documents digitally. We explain any steps that require attending in person.",
      },
      {
        question: "How can I arrange an appointment?",
        answer:
          "Send your request through the contact page with your service type, destination and preferred time. We will confirm the consultation method and the time with you.",
      },
      {
        question: "How can I contact Eammu Holidays?",
        answer:
          "Use the contact page at eammu.com/contact for visa, ticket, tour, Umrah and education enquiries. Please confirm our contact details on that page before sharing documents or making payments.",
      },
      {
        question: "Does Eammu provide both travel and education consultancy?",
        answer:
          "Yes. Eammu Holidays supports international travel, visa assistance, tours and Umrah, along with overseas education consultancy, and these services can be coordinated for students who need admission, visa and flight planning.",
      },
    ],
  },
];

const faqs = faqGroups.flatMap((group) => group.items);

// ─── STRUCTURED DATA ──────────────────────────────────────────────────────────
// Only facts supported by visible page content. No address, rating, IATA,
// founding date or customer-count claims are published.
function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `${SITE_URL}#travelagency`,
        name: "Eammu Holidays",
        alternateName: ["Eammu Bangladesh"],
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/og/travel-agency-dhaka.jpg`,
        description:
          "Eammu Holidays provides visa assistance, international air ticket booking, tour and Umrah packages, travel insurance guidance, and study abroad consultancy for travelers and students in Dhaka and across Bangladesh.",
        areaServed: [
          { "@type": "City", name: "Dhaka" },
          { "@type": "Country", name: "Bangladesh" },
          { "@type": "City", name: "Narayanganj" },
          { "@type": "City", name: "Gazipur" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          url: `${SITE_URL}/contact`,
          areaServed: "BD",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Eammu Holidays Travel and Education Services",
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
        sameAs: [
          "https://www.facebook.com/eammuholidays",
          "https://www.instagram.com/eammuholidays",
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Travel Agency & Education Consultancy in Dhaka | Eammu Holidays",
        description: metadata.description,
        inLanguage: "en-BD",
        isPartOf: { "@type": "WebSite", name: "Eammu Holidays", url: SITE_URL },
        about: { "@id": `${SITE_URL}#travelagency` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}/og/travel-agency-dhaka.jpg`,
        },
        dateModified: CONTENT_LAST_UPDATED,
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Travel Agency & Education Consultancy Dhaka", item: PAGE_URL },
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
        "@type": "ItemList",
        "@id": `${PAGE_URL}#visa-links`,
        name: "Popular visa guides for Bangladeshi travelers",
        itemListElement: visaLinks.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          url: `${SITE_URL}${item.href}`,
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#study-links`,
        name: "Study abroad guides for Bangladeshi students",
        itemListElement: studyLinks.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          url: `${SITE_URL}${item.href}`,
        })),
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Travel Agency and Education Consultancy Services for Dhaka and Bangladesh",
        provider: { "@id": `${SITE_URL}#travelagency` },
        serviceType: "Travel agency and education consultancy",
        areaServed: [
          { "@type": "City", name: "Dhaka" },
          { "@type": "Country", name: "Bangladesh" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Travel and Education Services",
          itemListElement: [
            "Visa Assistance and Consultancy",
            "International Air Ticket Booking",
            "Umrah Packages",
            "Tour and Holiday Packages",
            "Schengen Visa Guidance",
            "Study Abroad and Education Consultancy",
            "Student Visa Documentation Guidance",
            "Travel Insurance Guidance",
          ].map((name) => ({
            "@type": "Offer",
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

function SubHeading({ children, intro }) {
  return (
    <div className="mb-6 mt-14">
      <h3 className="text-2xl font-bold tracking-tight text-gray-950">{children}</h3>
      {intro ? <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-600">{intro}</p> : null}
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

function InfoGrid({ items, columns = "md:grid-cols-2 lg:grid-cols-3" }) {
  return (
    <div className={`grid gap-4 ${columns}`}>
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <h4 className="font-bold text-gray-950">{item.title}</h4>
          <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

function ListCard({ title, items }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h4 className="font-bold text-[#003d22]">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-600">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#f97316]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Notice({ children }) {
  return (
    <div className="rounded-2xl border border-[#003d22]/20 bg-green-50 p-5 text-sm leading-7 text-gray-700">
      {children}
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
              Travel, Visa &amp; Study Abroad Support for Dhaka and Bangladesh
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Travel Agency &amp; Education Consultancy in Dhaka, Bangladesh
            </h1>
            <p className="page-intro mt-6 max-w-3xl text-lg leading-8 text-green-100">
              Eammu Holidays helps Bangladeshi travelers and students with visa assistance, air
              ticket booking from DAC, tour and Umrah packages, travel insurance guidance, and
              overseas education consultancy. We support customers in Gulshan, Dhanmondi, Uttara,
              Mirpur and across Dhaka, and online for the rest of Bangladesh.
            </p>
            <p className="mt-3 text-sm text-green-200">
              ঢাকার ট্রাভেল এজেন্সি — ভিসা, এয়ার টিকেট, ট্যুর প্যাকেজ ও বিদেশে উচ্চশিক্ষা পরামর্শ
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
              <Link
                href="/study-abroad/student-visa"
                className="rounded-full border border-white/70 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Explore Study Abroad
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <h2 className="text-xl font-bold">Support from Dhaka and Beyond</h2>
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
                <p className="text-xl font-extrabold text-[#003d22]">{t.value}</p>
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
          <SectionHeader
            eyebrow="About Eammu Holidays Dhaka"
            title="Travel Agency and Education Consultancy in Dhaka"
          >
            Eammu Holidays supports customers in the capital with visa assistance, international
            air tickets from Hazrat Shahjalal International Airport (DAC), Umrah and tour
            packages, travel insurance guidance, and overseas education consultancy. People
            across Bangladesh can start with an online consultation, and our Abu Dhabi and
            Sharjah pages serve Bangladeshi expatriates in the UAE.
          </SectionHeader>
          <Notice>
            <strong className="text-[#003d22]">What you can find on this page:</strong> clear
            information for people searching for a travel agency in Dhaka, visa consultancy,
            air ticket booking, Umrah packages, or study abroad consultancy. Each section links
            to the visa guide, service or tool you need. Visa decisions, university admissions
            and airline fare rules are always decided by the relevant authority or provider,
            and requirements change, so please confirm current rules on official websites.
          </Notice>

          <SubHeading intro="Eammu Holidays covers three connected areas, so you do not need to deal with separate providers for each step of an international journey.">
            Travel, Visa and Education Services Work Together
          </SubHeading>
          <InfoGrid items={serviceTogether} columns="md:grid-cols-2 lg:grid-cols-4" />
          <p className="mt-4 text-sm leading-7 text-gray-600">
            For students, the usual order is education counselling and admission first, then
            student visa preparation, and finally flights and travel arrangements once the
            relevant approvals are in place. Explore our{" "}
            <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="font-semibold text-[#003d22] underline underline-offset-2">
              student visa service
            </Link>{" "}
            or{" "}
            <Link href="/flight-booking" className="font-semibold text-[#003d22] underline underline-offset-2">
              flight booking
            </Link>{" "}
            pages for details.
          </p>
        </div>
      </section>

      {/* ── POPULAR ROUTES ── */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Popular Destinations" title="Most Popular Travel Routes from Dhaka">
            Dhaka-based travelers often visit these destinations for tourism, work, study, and
            family visits. Open any route for detailed visa guidance.
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
          <SectionHeader eyebrow="Our Services" title="Complete Travel Services in Dhaka and Bangladesh">
            From visa assistance and air tickets to Umrah packages and study abroad
            consultancy, Eammu Holidays covers the full travel journey for Dhaka-based travelers.
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

          <SubHeading intro="Here is how our travel desk can support international and domestic trips from Bangladesh.">
            International Air Ticket Booking and Travel Support from Dhaka
          </SubHeading>
          <InfoGrid items={travelServiceDetails} />

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <ListCard title="What to check before buying an air ticket" items={ticketChecks} />
            <div className="space-y-5">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h4 className="font-bold text-[#003d22]">Tour packages and international holidays</h4>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  We plan family, honeymoon, group and corporate holidays to destinations such
                  as Thailand, Malaysia, Singapore, Dubai and Europe. Itineraries, hotels,
                  transfers and sightseeing are built around your dates and budget, and prices
                  are confirmed at enquiry. See our{" "}
                  <Link href="/our-services/tour-packages" className="font-semibold text-[#003d22] underline underline-offset-2">
                    tour packages
                  </Link>{" "}
                  page.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h4 className="font-bold text-[#003d22]">Umrah packages from Bangladesh</h4>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Umrah planning can include flights from Dhaka, Chattogram or Sylhet, hotels
                  in Makkah and Madinah, transport, visa guidance and group coordination for
                  families or groups. Availability, hotel distance and pricing change, so ask
                  us for current options on the{" "}
                  <Link href="/our-services/umrah-packages" className="font-semibold text-[#003d22] underline underline-offset-2">
                    Umrah packages
                  </Link>{" "}
                  page.
                </p>
              </div>
            </div>
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
            A simple 6-step process from first consultation to departure from DAC.
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

      {/* ── VISA CONSULTANCY ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Visa Consultancy" title="Visa Consultancy and Visa Assistance in Dhaka">
            Eammu Holidays can help you understand requirements and prepare your documents and
            application. The embassy, consulate or immigration authority makes the final decision,
            and we never promise guaranteed visa approval.
          </SectionHeader>

          <SubHeading intro="Requirements differ by country, visa category, applicant profile and current government rules, so there is no single checklist that works for every destination.">
            Visa Types We Can Help You Prepare For
          </SubHeading>
          <InfoGrid items={visaCategories} />

          <SubHeading intro="Knowing who does what helps you ask the right questions and avoid misunderstandings.">
            Travel Agency vs Airline vs Visa Consultant vs Embassy
          </SubHeading>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <caption className="sr-only">
                Responsibilities of travel agencies, airlines, visa consultants, embassies and application centres
              </caption>
              <thead className="bg-green-50 text-[#003d22]">
                <tr>
                  <th scope="col" className="px-4 py-3 font-bold">Who</th>
                  <th scope="col" className="px-4 py-3 font-bold">What they handle</th>
                  <th scope="col" className="px-4 py-3 font-bold">What they do not control</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                {visaRoles.map((row) => (
                  <tr key={row.party}>
                    <th scope="row" className="px-4 py-3 font-semibold text-gray-900">{row.party}</th>
                    <td className="px-4 py-3 leading-6">{row.handles}</td>
                    <td className="px-4 py-3 leading-6">{row.notControl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SubHeading intro="A visa application can involve more than one type of cost. Ask for each one separately.">
            Government Fees vs Agency Service Fees
          </SubHeading>
          <InfoGrid items={feeTypes} columns="md:grid-cols-2 lg:grid-cols-4" />

          <SubHeading intro="These are the areas embassies commonly look at. Confirm the exact list on the destination's official website.">
            Documents and Preparation Topics for Bangladeshi Applicants
          </SubHeading>
          <InfoGrid items={visaDocumentTopics} />

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <ListCard title="Common documentation mistakes" items={commonMistakes} />
            <ListCard title="Common reasons applications may be refused" items={refusalReasons} />
            <ListCard title="How to prepare a stronger application" items={strongerApplication} />
          </div>

          <div className="mt-8">
            <ListCard title="General visa application preparation checklist" items={visaChecklist} />
            <p className="mt-3 text-sm leading-6 text-gray-600">
              This is a general guide only. Each embassy publishes its own current document list,
              so use our{" "}
              <Link href="/travel-resources/visa-checklist-generator" className="font-semibold text-[#003d22] underline underline-offset-2">
                visa checklist generator
              </Link>
              ,{" "}
              <Link href="/travel-resources/visa-processing-time-tracker" className="font-semibold text-[#003d22] underline underline-offset-2">
                processing time tracker
              </Link>{" "}
              and{" "}
              <Link href="/visa-rejection" className="font-semibold text-[#003d22] underline underline-offset-2">
                visa rejection statistics
              </Link>{" "}
              alongside official sources. For Europe, read the{" "}
              <Link href="/schengen-visa" className="font-semibold text-[#003d22] underline underline-offset-2">
                Schengen visa guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── VISA LINKS ── */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Visa Guides" title="Popular Visa Searches from Dhaka">
            These links take Dhaka-based travelers directly to country-specific visa guides,
            e-visa pages, and visa requirement pages on Eammu Holidays.
          </SectionHeader>
          <InternalLinkGrid links={visaLinks} />
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Why Choose Us" title="Why Dhaka Travelers Choose Eammu Holidays">
            Practical support, honest document guidance, and a team that understands the
            realities of traveling on a Bangladeshi passport from Dhaka.
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

          <SubHeading intro="Whichever agency you use, these checks help you protect your money and your application.">
            How to Choose a Travel Agency in Dhaka
          </SubHeading>
          <div className="grid gap-5 lg:grid-cols-2">
            <ListCard title="What to look for in a travel agency" items={chooseTravel} />
            <ListCard title="Before you pay any agency" items={beforePaying} />
          </div>
        </div>
      </section>

      {/* ── STUDY ABROAD ── */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Study Abroad" title="Education Consultancy and Study Abroad from Dhaka">
            Eammu Holidays supports Bangladeshi students and parents from the first counselling
            session through admission, student visa preparation and travel planning. We help you
            prepare, but universities decide admissions, scholarship providers decide awards, and
            immigration authorities decide visas.
          </SectionHeader>

          <SubHeading intro="Our overseas education consultancy covers the full path from choosing a course to arriving on campus.">
            Education Consultancy Services
          </SubHeading>
          <InfoGrid items={educationServices} />

          <SubHeading intro="From the first counselling session to departure.">
            Study Abroad Process Step by Step
          </SubHeading>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {educationProcess.map((s) => (
              <div key={s.step} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-2xl font-extrabold text-[#f97316]">{s.step}</p>
                <h4 className="mt-2 font-bold text-gray-950">{s.title}</h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#f97316] px-8 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Request Study Abroad Counselling
            </Link>
          </div>

          <SubHeading intro="Each card is a general overview. Tuition, ranking and scholarship details change, so verify current requirements on the official university and government websites before applying.">
            Study Abroad Destinations for Bangladeshi Students
          </SubHeading>
          <div className="grid gap-5 md:grid-cols-2">
            {studyDestinations.map((d) => (
              <article key={d.country} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-bold text-gray-950">
                  <Link href={d.href} className="hover:text-[#003d22]">
                    Study in {d.country} from Bangladesh
                  </Link>
                </h4>
                <dl className="mt-3 space-y-2 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="inline font-semibold text-[#003d22]">Study levels: </dt>
                    <dd className="inline">{d.levels}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-[#003d22]">Admission &amp; English: </dt>
                    <dd className="inline">{d.admission}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-[#003d22]">Costs to compare: </dt>
                    <dd className="inline">{d.costs}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-[#003d22]">Scholarships: </dt>
                    <dd className="inline">{d.scholarships}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-[#003d22]">Student visa: </dt>
                    <dd className="inline">{d.visa}</dd>
                  </div>
                </dl>
                <Link
                  href={d.href}
                  className="mt-4 inline-flex text-sm font-bold text-[#003d22] hover:text-[#005c33]"
                >
                  Read the {d.country} student visa guide →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <ListCard title="Factors to compare before selecting a university" items={compareBeforeSelecting} />
            <ListCard title="How to choose an education consultancy in Bangladesh" items={chooseEducation} />
          </div>

          <SubHeading intro="Exact requirements vary by university and country. Use this as a starting point.">
            Study Abroad Preparation Checklist
          </SubHeading>
          <InfoGrid items={studyChecklist} columns="md:grid-cols-2 lg:grid-cols-5" />

          <div className="mt-10">
            <InternalLinkGrid links={studyLinks} />
          </div>
        </div>
      </section>

      {/* ── TRAVEL TOOLS ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Free Travel Tools" title="Free Visa & Travel Resources for Dhaka Travelers">
            Check visa requirements, estimate travel costs, prepare document checklists, review
            rejection data, and track visa processing times, all free on Eammu Holidays.
          </SectionHeader>
          <InternalLinkGrid links={resourceLinks} />

          <SubHeading intro="Use this before every international trip.">
            International Travel Checklist
          </SubHeading>
          <InfoGrid items={travelChecklist} columns="md:grid-cols-2 lg:grid-cols-4" />
          <p className="mt-4 text-sm leading-7 text-gray-600">
            Consider buying travel protection too: see our{" "}
            <Link href="/travel-insurance" className="font-semibold text-[#003d22] underline underline-offset-2">
              travel insurance guidance
            </Link>{" "}
            and estimate your budget with the{" "}
            <Link href="/travel-cost-calculator" className="font-semibold text-[#003d22] underline underline-offset-2">
              travel cost calculator
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── LOCAL COVERAGE ── */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Dhaka & Bangladesh Coverage" title="Travel and Education Services Across Dhaka and Bangladesh">
            Dhaka is our main focus, and we also support customers in other districts through
            online consultation. We do not claim a branch in every area. Start by sending an
            enquiry through our contact page, then we will confirm how your consultation will
            take place.
          </SectionHeader>

          <h3 className="mb-4 text-xl font-bold text-gray-950">Areas of Dhaka We Support</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {localZones.map((z) => (
              <div key={z.zone} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h4 className="font-bold text-[#003d22]">{z.zone}</h4>
                <p className="mt-2 text-sm font-semibold leading-6 text-gray-800">{z.areas}</p>
                <p className="mt-2 text-sm leading-6 text-gray-600">{z.note}</p>
              </div>
            ))}
          </div>

          <h3 className="mb-4 mt-12 text-xl font-bold text-gray-950">Customers Outside Dhaka</h3>
          <p className="mb-5 max-w-3xl text-sm leading-7 text-gray-600">
            Applicants in{" "}
            {bangladeshRegions.join(", ")}{" "}
            and other parts of Bangladesh can get visa, ticketing, travel and education
            consultancy support in four steps. See also our{" "}
            <Link href="/travel-agency-bangladesh" className="font-semibold text-[#003d22] underline underline-offset-2">
              Travel Agency Bangladesh
            </Link>{" "}
            page.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {outsideDhakaSteps.map((s, i) => (
              <div key={s.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-2xl font-extrabold text-[#f97316]">{i + 1}</p>
                <h4 className="mt-2 font-bold text-gray-950">{s.title}</h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICES / LOCATIONS ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="Our Locations" title="Eammu Holidays Support Locations">
            Eammu Holidays supports Dhaka travelers and students with help from our teams
            serving Bangladesh and the UAE. Please use the contact page to confirm how and
            where to meet or consult before visiting or sending documents.
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
                {office.pages.length > 0 ? (
                  <ul className="mt-3 space-y-1 text-sm">
                    {office.pages.map((p) => (
                      <li key={p.href}>
                        <Link href={p.href} className="font-semibold text-[#003d22] underline underline-offset-2">
                          {p.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <Link
                  href="/contact"
                  className="mt-5 inline-flex text-sm font-bold text-[#003d22] hover:text-[#005c33]"
                >
                  Contact for {office.city} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions: Travel, Visa & Education Consultancy">
            Common questions from Dhaka travelers and students about air tickets, visa
            assistance, tour packages, Umrah, and study abroad consultancy.
          </SectionHeader>
          <div className="space-y-10">
            {faqGroups.map((group) => (
              <div key={group.category}>
                <h3 className="mb-4 text-xl font-bold text-[#003d22]">{group.category} FAQs</h3>
                <div className="space-y-4">
                  {group.items.map((faq) => (
                    <article
                      key={faq.question}
                      className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                    >
                      <h4 className="text-base font-bold text-gray-950">{faq.question}</h4>
                      <p className="mt-3 text-sm leading-7 text-gray-600">{faq.answer}</p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-[#003d22] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Ready to Travel or Study Abroad?
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Need a Travel Agency or Education Consultancy in Dhaka?
          </h2>
          <p className="mt-4 text-base leading-7 text-green-100">
            Contact Eammu Holidays for visa assistance, air ticket booking from DAC, tour
            packages, Umrah travel, travel insurance guidance, and study abroad counselling.
            We support Dhaka and customers across Bangladesh.
          </p>
          {VERIFIED_PHONE_DISPLAY && VERIFIED_PHONE_TEL ? (
            <p className="mt-4 text-sm text-green-100">
              Call us:{" "}
              <a href={`tel:${VERIFIED_PHONE_TEL}`} className="font-bold text-white underline underline-offset-2">
                {VERIFIED_PHONE_DISPLAY}
              </a>
            </p>
          ) : null}
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
            <Link
              href="/study-abroad/student-visa"
              className="rounded-full border border-white/70 px-8 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Explore Study Abroad
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