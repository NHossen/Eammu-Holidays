import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Info,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

/* ═════════════════════════════════════════════════════════════
   AlbaniaVisa — Server Component (no hooks, no "use client")
   ═════════════════════════════════════════════════════════════ */

const SITE_URL = "https://eammu.com";
const PAGE_URL = `${SITE_URL}/our-services/visa/albania-visa-application`;
const LAST_REVIEWED = "2026-11-23"; // update whenever you re-verify the content

const OFFICIAL_EVISA = "https://e-visa.al";
const OFFICIAL_MFA =
  "https://punetejashtme.gov.al/en/informacione-mbi-regjimin-e-vizave-te-shtetasve-te-huaj/";

const CONTACT = {
  whatsapp:
    "https://wa.me/37494810585?text=Hello%20Eammu%20Holidays%2C%20I%20need%20help%20with%20an%20Albania%20visa.",
  uaePhone: { label: "UAE", display: "+971 50 707 8334", href: "tel:+971507078334" },
  armeniaPhone: { label: "Armenia", display: "+374 94 810585", href: "tel:+37494810585" },
  bdPhone: { label: "Bangladesh", display: "+880 1701 699 743", href: "tel:+8801701699743" },
  email: "info@eammu.com",
};

/* ───────────────────────── Content data ───────────────────────── */

const TOC = [
  ["overview", "Albania visa overview"],
  ["visa-types", "Visa types"],
  ["requirements", "Document requirements"],
  ["fees", "Visa fees and costs"],
  ["processing-time", "Processing time"],
  ["how-to-apply", "Application steps"],
  ["from-dubai", "Albania visa from Dubai"],
  ["other-nationalities", "Other UAE-based nationalities"],
  ["entry-rules", "Entry rules: e-Visa or visa-free"],
  ["rejection", "Visa rejection"],
  ["extension-overstay", "Extension and overstay"],
  ["travel-information", "Travel information"],
  ["sample-itinerary", "Sample 7-day itinerary"],
  ["why-eammu", "How Eammu helps"],
  ["faq", "FAQ"],
];

const OVERVIEW = [
  {
    q: "What is an Albania visa?",
    a: "An Albania visa is an entry authorisation issued by the Albanian authorities to foreign nationals who are not visa-exempt. For most visitors the relevant document is the Type C short-stay visa, which can be requested online through the official e-Visa portal. Longer stays for work, study or family reasons fall under the Type D long-stay category and are followed by a residence procedure inside Albania.",
  },
  {
    q: "Is Albania part of the Schengen Area?",
    a: "No. Albania is a candidate for EU membership but is not in the Schengen Area, so it has its own visa rules and its own application system. A Schengen visa does not authorise travel to Albania by itself, although Albanian rules recognise some valid Schengen, US and UK visas as a basis for visa-free entry under specific conditions. Always confirm the current conditions on the official pages before you travel.",
  },
  {
    q: "Who needs an Albania visa?",
    a: "It depends on your passport, your purpose of travel and any qualifying visa or residence permit you hold. Citizens of many countries can enter without a visa for short stays, while others must apply in advance. Check your nationality on the official e-Visa portal or the Albanian Ministry for Europe and Foreign Affairs page before booking anything.",
  },
  {
    q: "Albania visa for Bangladeshi citizens",
    a: "Bangladeshi passport holders should plan on applying for a visa before travel unless an official exemption clearly applies to them. Most visitors use the Type C short-stay e-Visa. Because Bangladeshi applicants are often asked to show strong evidence of funds, employment or business, and ties to Bangladesh, document preparation matters more than the form itself.",
  },
  {
    q: "Albania visa for UAE residents and Dubai-based expatriates",
    a: "Living in the UAE does not on its own exempt you from an Albania visa. The rule that applies is based on your passport. Your UAE residence permit still plays an important role as supporting evidence: it shows where you live, work and are settled. Some valid visas or long-term residence documents may create an exemption in certain cases, so verify your exact situation on the official pages before relying on it.",
  },
];

const VISA_TYPES = [
  {
    badge: "Type C",
    title: "Tourist visa",
    purpose: "Holidays, sightseeing, visiting friends or family, short leisure trips.",
    stay: "Up to 90 days within any 180-day period.",
    eligibility: "Applicants whose nationality requires a visa and who are not covered by an exemption.",
    notes:
      "Usually requested online at e-visa.al. Typical supporting documents include a passport, photo, proof of funds, accommodation and travel insurance. This visa does not allow employment in Albania.",
  },
  {
    badge: "Type C",
    title: "Business visa",
    purpose: "Meetings, conferences, trade events, short business visits.",
    stay: "Up to 90 days within any 180-day period.",
    eligibility: "Business travelers whose nationality requires a visa and whose visit does not involve employment in Albania.",
    notes:
      "Expect to provide an invitation or a company letter explaining the trip, along with your normal travel documents. Business owners should be ready with company registration and financial records.",
  },
  {
    badge: "Type A",
    title: "Airport transit visa",
    purpose: "Changing planes at an Albanian airport without entering the country.",
    stay: "Limited to the transit period and the international zone of the airport.",
    eligibility: "Only travelers from nationalities that are required to hold a transit visa.",
    notes:
      "You will normally need proof of onward travel and any entry permission for your final destination. If you are leaving the airport, Type A is not the right category.",
  },
  {
    badge: "Type D",
    title: "Long-stay visa",
    purpose: "Stays above 90 days, such as work, study or family reunification.",
    stay: "Set by the issuing authority and linked to the purpose of the stay.",
    eligibility: "Applicants with a qualifying purpose and the supporting documents the Albanian authorities require for that purpose.",
    notes:
      "A Type D visa is an entry visa. After arrival, holders usually need to complete a residence permit procedure. Documents such as police certificates, degrees or civil records often need apostille or legalisation and Albanian translation.",
  },
  {
    badge: "Work",
    title: "Employment and work-related residence",
    purpose: "Working for an Albanian employer or running a business in Albania.",
    stay: "Granted as a residence and work authorisation, not as a tourist visa.",
    eligibility: "Foreign nationals with a job offer or a business activity, subject to Albanian labour and migration rules.",
    notes:
      "This is a residence and work permit procedure, usually combined with a Type D visa where one is required. A tourist or short-stay visa cannot be used for employment. Requirements are set by Albanian law and may change, so confirm them with the competent authorities.",
  },
  {
    badge: "Residence",
    title: "Remote-worker (digital nomad) residence",
    purpose: "Living in Albania while working remotely for clients or employers outside Albania.",
    stay: "Granted as a residence permit, not as a short-stay visa.",
    eligibility: "Remote workers who can document foreign income or contracts, subject to current Albanian rules.",
    notes:
      "Albania does not issue a tourist visa for this purpose. Eligibility, income evidence and the exact procedure are defined by the Albanian authorities and have been updated over time, so check the latest official guidance. See our dedicated digital nomad visa page for a broader overview.",
  },
];

const GENERAL_DOCS = [
  "Passport valid for the whole stay, with blank pages and in good condition",
  "Completed online application with details matching your passport",
  "Passport-style photo that follows the e-Visa portal’s specifications",
  "Proof of the purpose of travel, such as an itinerary or invitation",
  "Accommodation booking or host details in Albania",
  "Travel medical insurance covering your stay",
  "Proof of sufficient funds for the trip",
  "Return or onward travel booking",
  "Payment receipt for the government visa fee",
];

const NATIONALITY_DOCS = [
  {
    title: "Bangladeshi applicants",
    note: "Albanian authorities decide by passport nationality, so these items are often reviewed closely.",
    items: [
      "Bangladeshi passport and a copy of the data page",
      "National ID card (NID) copy",
      "Bank statements with a clear income and balance history",
      "Evidence of ties to Bangladesh, such as a job letter, trade licence or property papers",
      "Tax documents (TIN certificate or tax returns) where available",
      "Any previous visas and travel history",
    ],
  },
  {
    title: "UAE residents",
    note: "Your UAE status supports your application but does not replace the visa rule for your passport.",
    items: [
      "Valid UAE residence permit and Emirates ID copy",
      "Passport with sufficient validity for the trip",
      "Salary certificate and NOC from the employer, if employed",
      "Recent UAE bank statements",
      "Company trade licence, if you own or manage a business",
      "Return flight reservation back to the UAE",
    ],
  },
];

const PROFILE_DOCS = [
  {
    title: "Employed applicants",
    items: [
      "Employment letter stating position, salary and joining date",
      "Approved leave letter or NOC",
      "Last 3 to 6 months of payslips",
      "Bank statements showing salary credits",
    ],
  },
  {
    title: "Business owners",
    items: [
      "Trade licence and company registration papers",
      "Company bank statements and personal bank statements",
      "Tax or VAT records",
      "Letter explaining the purpose of the trip",
    ],
  },
  {
    title: "Self-employed applicants",
    items: [
      "Business or freelance registration, if applicable",
      "Invoices or contracts that show regular income",
      "Personal and business bank statements",
      "Tax filings where available",
    ],
  },
  {
    title: "Sponsored applicants",
    items: [
      "Sponsor’s letter confirming they will cover costs",
      "Sponsor’s passport or ID, and proof of relationship",
      "Sponsor’s bank statements and proof of income",
      "Your own proof of employment or study",
    ],
  },
  {
    title: "Students",
    items: [
      "Student ID or enrolment certificate",
      "Letter from the school or university",
      "Parent or guardian bank statements and consent letter",
      "Proof of the family’s financial support",
    ],
  },
  {
    title: "Family visitors",
    items: [
      "Invitation letter from the host in Albania",
      "Host’s ID or residence document copy",
      "Proof of relationship, such as a marriage or birth certificate",
      "Host’s address and accommodation details",
    ],
  },
  {
    title: "Children and minors",
    items: [
      "Child’s passport and birth certificate",
      "Parents’ passport copies and proof of relationship",
      "Written parental consent if a child travels with one parent or someone else",
      "Parents’ employment and bank documents for financial support",
    ],
  },
];

const FEE_ROWS = [
  {
    item: "Government visa fee",
    who: "Albanian authorities, paid on the official portal",
    note: "The amount depends on your nationality and the visa category. Published figures differ between websites, so use the amount shown on e-visa.al when you apply. The fee is normally not refundable if the application is refused.",
  },
  {
    item: "Service or consultancy fee",
    who: "Eammu Holidays",
    note: "A separate fee for guidance, document review and application support. It is agreed with you in advance and is never part of the government fee.",
  },
  {
    item: "Translation and certification",
    who: "Translators, notaries or attestation offices",
    note: "Mainly relevant for long-stay or residence procedures where documents may need apostille, legalisation or Albanian translation.",
  },
  {
    item: "Travel insurance",
    who: "Insurance provider",
    note: "Price depends on your age, trip length and cover level. Make sure the policy covers medical expenses for the whole stay.",
  },
  {
    item: "Flights and accommodation",
    who: "Airlines, hotels or hosts",
    note: "Reservations can support an application, but avoid paying for non-refundable tickets until you have a decision.",
  },
  {
    item: "Other possible expenses",
    who: "Various",
    note: "Photos, printing, courier, bank statement stamping and currency conversion charges.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Determine whether you need a visa",
    text: "Check your passport on the official e-Visa portal or the Ministry for Europe and Foreign Affairs page. Confirm whether you are exempt, and whether a valid Schengen, US or UK visa or another residence document changes your position.",
  },
  {
    title: "Select the correct visa category",
    text: "Choose Type C for a short tourist or business trip, Type A for airport transit only, or Type D when you plan to stay longer for work, study or family reasons.",
  },
  {
    title: "Prepare supporting documents",
    text: "Use the checklists on this page as a starting point. Scan documents clearly, and make sure names, dates and figures are consistent across every document.",
  },
  {
    title: "Complete the official application",
    text: "Fill in the form on the official portal. Enter details exactly as they appear in your passport and upload the requested files in the accepted format.",
  },
  {
    title: "Pay the applicable government fee",
    text: "Pay on the official portal and keep the receipt. Be careful with websites that look similar to the official system.",
  },
  {
    title: "Submit the application",
    text: "Review everything once more before you submit. Errors can be difficult to correct after submission.",
  },
  {
    title: "Monitor the application status",
    text: "Keep your application reference and check your email, including spam folders, for requests for more information.",
  },
  {
    title: "Receive the decision",
    text: "If approved, check every detail on the visa, such as name, passport number, validity and number of entries, before you book non-refundable travel.",
  },
];

const DUBAI_POINTS = [
  {
    title: "UAE residence permit",
    text: "Keep your residence permit and Emirates ID valid for the whole planned trip. They show you have a lawful base in the UAE and a reason to return.",
  },
  {
    title: "Bangladeshi passport holders in Dubai",
    text: "Your passport nationality decides the Albanian visa rule. Be ready to show proof of your life in the UAE, such as work, family and housing, together with your passport and residence documents.",
  },
  {
    title: "Employment and salary documents",
    text: "A recent salary certificate, an employer NOC or leave approval, and payslips help show that your trip is temporary and that you have a job to return to.",
  },
  {
    title: "Bank statements",
    text: "Statements covering recent months should show regular income and a balance that fits the cost of your trip. Large unexplained deposits can raise questions.",
  },
  {
    title: "Itinerary, hotel and flights",
    text: "A realistic day-by-day itinerary, a hotel booking and a return flight to the UAE make your plan easy to understand. Our flight reservation service can help with this.",
  },
  {
    title: "Travel insurance",
    text: "Choose a policy that covers medical expenses in Albania for the entire stay and keep a copy of the certificate with your documents.",
  },
];

const REJECTION_REASONS = [
  {
    reason: "Incomplete documentation",
    prep: "Use a checklist and confirm that every requested file is uploaded, readable and in the accepted format.",
  },
  {
    reason: "Insufficient financial evidence",
    prep: "Show regular income and a balance that realistically covers the trip. Add sponsor documents if someone else is paying.",
  },
  {
    reason: "Inconsistent application details",
    prep: "Compare names, dates, job titles and addresses across your passport, application, bank statements and letters.",
  },
  {
    reason: "Weak or unclear travel purpose",
    prep: "Write a short cover letter and provide an itinerary and bookings that match the stated purpose.",
  },
  {
    reason: "Inadequate supporting documents",
    prep: "Include proof of employment, business or study, and evidence that connects you to your country of residence.",
  },
  {
    reason: "Previous immigration violations",
    prep: "Do not hide earlier overstays or refusals. Answer questions honestly and add a short explanation if relevant.",
  },
];

const TRAVEL_INFO = [
  {
    title: "Tirana",
    text: "Tirana is the capital and the main arrival point for most visitors. Skanderbeg Square, the Blloku district, the Bunk’Art museums and the Dajti Ekspres cable car are popular stops, and the city works well as a base for day trips.",
  },
  {
    title: "Best time to visit",
    text: "Spring (April to June) and early autumn (September to October) are generally comfortable for city visits and sightseeing. Summer is the main beach season along the coast and is typically hot, especially inland.",
  },
  {
    title: "Accommodation",
    text: "Visa officers usually want to see where you will stay. Choose a booking that can be cancelled free of charge, or provide a host’s address with an invitation letter.",
  },
  {
    title: "Flight reservations",
    text: "Check current routes from Dubai or your departure city, as options often include a connection. Use a reservation you can change or cancel until your visa is approved.",
  },
  {
    title: "Travel insurance",
    text: "Take a policy that covers medical care for the full duration of the trip. Keep the certificate ready for the application and for travel.",
  },
  {
    title: "Planning considerations",
    text: "Budget for the visa fee, insurance, flights, accommodation, local transport and daily expenses. Allow extra time before departure in case the visa takes longer than expected.",
  },
];

const EAMMU_SERVICES = [
  "Visa consultation based on your passport and purpose",
  "Step-by-step application guidance",
  "Personalised document checklist",
  "Document review before submission",
  "Travel itinerary assistance",
  "Flight reservation assistance",
  "Hotel booking assistance",
  "Travel insurance guidance",
  "Application support through the official process",
];

const RELATED = [
  {
    label: "Europe visa application",
    href: "/our-services/visa/europe-visa-application",
    desc: "Plan a wider European trip and compare visa routes.",
  },
  {
    label: "Schengen visa",
    href: "/our-services/visa/schengen-visa",
    desc: "If your route includes Schengen countries, you need a separate Schengen visa.",
  },
  {
    label: "UAE residence visa",
    href: "/our-services/visa/uae-residence-visa",
    desc: "Residence visa support for people living or moving to the UAE.",
  },
  {
    label: "Work permit",
    href: "/our-services/visa/work-permit",
    desc: "Guidance on work permits and employment-based visas.",
  },
  {
    label: "Digital nomad visa",
    href: "/our-services/visa/digital-nomad-visa",
    desc: "Residence options for remote workers.",
  },
  {
    label: "Flight reservation",
    href: "/our-services/travel/flight-reservation",
    desc: "Flight reservations for visa applications.",
  },
  {
    label: "Armenia visa application",
    href: "/our-services/visa/armenia-visa-application",
    desc: "Combining Albania with a trip to Yerevan? See the Armenia visa guide.",
  },
];

const FAQS = [
  {
    q: "Can I apply for an Albania visa from Dubai?",
    a: "Yes. If you need a visa, you can usually apply online through the official e-Visa portal while you are in the UAE. Eammu Holidays can guide you through the documents and the application, but the visa is issued by the Albanian authorities.",
  },
  {
    q: "Do Bangladeshi citizens need a visa for Albania?",
    a: "Bangladeshi passport holders should generally expect to need a visa unless an official exemption clearly applies. Check the official e-Visa portal and the Ministry for Europe and Foreign Affairs page for the latest rules before you plan your trip.",
  },
  {
    q: "How long can I stay in Albania on a Type C visa?",
    a: "A Type C short-stay visa allows stays of up to 90 days within any 180-day period. The visa itself states the validity and the number of entries granted to you.",
  },
  {
    q: "How much is the Albania visa fee?",
    a: "The government fee depends on your nationality and visa category, and different websites quote different amounts. The reliable figure is the one shown on the official portal when you apply. Eammu’s service fee is separate and is agreed with you in advance.",
  },
  {
    q: "How long does the Albania visa take?",
    a: "Processing times are set by the Albanian authorities and are measured in working days. They can be longer during busy periods or when extra checks are needed, so apply well before your travel date and do not buy non-refundable tickets until the visa is approved.",
  },
  {
    q: "Can I work in Albania on a tourist visa?",
    a: "No. A tourist or short-stay visa does not allow employment. Working in Albania requires the proper work and residence authorisation under Albanian law.",
  },
  {
    q: "Is there an Albania digital nomad visa?",
    a: "Albania offers a residence option for remote workers, but it is a residence permit procedure rather than a tourist visa. Requirements can change, so confirm the current rules before you apply.",
  },
  {
    q: "Does a Schengen visa let me enter Albania?",
    a: "Albania is not in the Schengen Area. Under Albanian rules, holders of certain valid Schengen, US or UK visas may enter without applying for an Albania visa, under specific conditions. Check the official page for the current conditions that apply to you.",
  },
  {
    q: "Why do Albania visa applications get rejected?",
    a: "Common causes include incomplete documents, weak financial evidence, inconsistent details, an unclear travel purpose and previous immigration problems. Careful preparation reduces avoidable mistakes, but no one can guarantee approval.",
  },
  {
    q: "What does Eammu Holidays do, and what does it not do?",
    a: "Eammu Holidays is a private travel and visa consultancy. We help with guidance, document checks, itineraries and bookings. We are not the Albanian government or an embassy, we do not decide visa outcomes, and we cannot guarantee approval or processing times.",
  },
];

const NATIONALITY_GUIDE = [
  {
    title: "Indian passport holders in the UAE",
    text: "Check the country list on the official e-Visa portal and any exemption linked to a valid Schengen, US or UK visa. If you need a Type C e-Visa, prepare your Indian passport, UAE residence permit, salary certificate and recent bank statements.",
  },
  {
    title: "Pakistani passport holders in the UAE",
    text: "Confirm whether your passport requires a visa. If it does, prepare your Pakistani passport, CNIC copy, UAE residence permit, employer letter and bank statements, plus a clear itinerary and bookings.",
  },
  {
    title: "Filipino passport holders in the UAE",
    text: "Visa rules depend on your passport, so verify them on the official pages first. Prepare your Philippine passport, UAE residence permit, employment certificate, bank statements and travel insurance.",
  },
  {
    title: "Nepali and Sri Lankan passport holders in the UAE",
    text: "Check your nationality on the e-Visa portal before booking. If a visa is required, applicants usually need the passport, UAE residence documents, proof of employment and funds, and accommodation details.",
  },
  {
    title: "Arab and other expatriates in the UAE",
    text: "Some nationalities may enter Albania for short stays without a visa, while others must apply. Do not assume that your UAE residence permit changes the rule. The passport you travel on decides it.",
  },
  {
    title: "Bangladeshi passport holders",
    text: "Bangladeshi applicants should plan for a visa before travel and prepare strong evidence of funds, employment or business, and ties to Bangladesh or the UAE. See the Bangladesh section of the checklists above.",
  },
];

const ENTRY_ROWS = [
  {
    situation: "Your passport requires a visa",
    meaning: "You need approval before you travel, normally a Type C e-Visa for a short visit.",
    action: "Apply on the official e-Visa portal with complete documents and wait for the decision.",
  },
  {
    situation: "You hold a qualifying Schengen, US or UK visa",
    meaning: "Albanian rules may allow visa-free entry under specific conditions, such as the type, validity and earlier use of that visa.",
    action: "Check the exact conditions on the Ministry for Europe and Foreign Affairs page before you rely on it.",
  },
  {
    situation: "You live in the UAE on a non-exempt passport",
    meaning: "Your residence permit supports the application but does not replace the visa rule for your passport.",
    action: "Apply as a UAE resident and attach residence, employment and financial documents.",
  },
  {
    situation: "You only change planes in Albania",
    meaning: "Some nationalities need a Type A airport transit visa even if they never leave the airport.",
    action: "Check transit rules for your passport and confirm with your airline.",
  },
  {
    situation: "You plan to work or live in Albania",
    meaning: "A tourist visa is not enough. Longer stays use a Type D visa and a residence or work permit procedure.",
    action: "Contact us before you travel so the correct procedure is chosen from the start.",
  },
];

const BORDER_CHECKS = [
  "Passport with sufficient validity for your stay",
  "Your approved e-Visa, printed or saved on your phone",
  "Return or onward ticket",
  "Accommodation details for your stay",
  "Proof of funds, in case officers ask",
  "Travel insurance certificate",
];

const SAMPLE_ITINERARY = [
  { day: "Day 1", title: "Arrive in Tirana", text: "Check in, then walk Skanderbeg Square and the Blloku district." },
  { day: "Day 2", title: "Tirana", text: "Visit the Bunk’Art museums and take the Dajti Ekspres cable car." },
  { day: "Day 3", title: "Krujë and Durrës", text: "Day trip to the old town of Krujë and the coastal city of Durrës." },
  { day: "Day 4", title: "Berat", text: "Explore the old Ottoman quarter and the hilltop castle." },
  { day: "Day 5", title: "Gjirokastër", text: "Visit the stone old town and its castle." },
  { day: "Day 6", title: "Sarandë, Butrint and Ksamil", text: "See the ancient site of Butrint and the beaches near Ksamil." },
  { day: "Day 7", title: "Return and departure", text: "Travel back to Tirana and fly out." },
];

const MORE_FAQS = [
  {
    q: "Can I get an Albania visa on arrival?",
    a: "Do not plan on it. If your passport requires a visa, plan to have the approved visa before you fly, unless an official source confirms a different procedure for your case. Check the official portal before booking.",
  },
  {
    q: "Is a multiple-entry Albania visa available?",
    a: "A Type C visa can be issued for one or more entries depending on the decision. The visa itself shows the number of entries and the validity period granted to you.",
  },
  {
    q: "How early should I apply for an Albania visa?",
    a: "Apply well before your planned departure date and allow extra time for requests for more documents. Keep flights and hotels flexible until the visa is approved.",
  },
  {
    q: "Is an invitation letter needed for the Albania visa?",
    a: "It depends on your purpose of travel and the portal’s current requirements. A letter is especially useful for business and family visits, and a host’s address with an invitation can support an accommodation record.",
  },
  {
    q: "Can I use a flight reservation for the application?",
    a: "Many applicants use changeable reservations until the visa is decided. Make sure the dates and names match your application and itinerary, and avoid paying for non-refundable tickets before approval.",
  },
  {
    q: "Can Indian, Pakistani or Filipino residents of the UAE apply from Dubai?",
    a: "Yes, if their passport requires a visa they can generally apply online from the UAE. The rule depends on the passport, not on UAE residence, so confirm it on the official portal first.",
  },
  {
    q: "Do children need a visa for Albania?",
    a: "If the child’s passport requires a visa, yes. Prepare the birth certificate, parents’ passport copies and a consent letter if the child does not travel with both parents.",
  },
  {
    q: "Can I extend my stay in Albania?",
    a: "Extensions are decided by the Albanian authorities and must be requested before your authorised stay ends. They are not guaranteed, so plan your dates carefully from the start.",
  },
];

const ALL_FAQS = [...FAQS, ...MORE_FAQS];

/* ───────────────────────── Structured data ───────────────────────── */

// Safe JSON-LD serialisation: prevents "</script>" or HTML comments from breaking out of the tag.
const toJsonLd = (data) =>
  JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: toJsonLd(data) }}
  />
);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Albania Visa Application 2026 for Bangladesh & Dubai",
      description:
        "Albania visa types, document checklists, fees, processing time, entry rules and application steps for Bangladeshi and UAE-based travelers.",
      inLanguage: "en",
      dateModified: LAST_REVIEWED,
      isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}#website`, url: SITE_URL, name: "Eammu Holidays" },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      about: { "@id": `${PAGE_URL}#service` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Albania visa application", item: PAGE_URL },
      ],
    },
    {
      "@type": "TravelAgency",
      "@id": `${SITE_URL}#organization`,
      name: "Eammu Holidays",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      email: CONTACT.email,
      telephone: ["+971507078334", "+37494810585", "+8801701699743"],
      address: [
        { "@type": "PostalAddress", addressCountry: "AE", addressLocality: "Dubai" },
        { "@type": "PostalAddress", addressCountry: "AM", addressLocality: "Yerevan" },
        { "@type": "PostalAddress", addressCountry: "BD", addressLocality: "Dhaka" },
      ],
      sameAs: [
        "https://www.facebook.com/eammuholidays",
        "https://www.instagram.com/eammuholidays",
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Albania visa application consultancy",
      serviceType: "Visa consultation and application support",
      description:
        "Guidance, document review and application support for travelers applying for an Albania visa from Bangladesh or the UAE. Eammu Holidays is a private consultancy and does not issue visas.",
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: [
        { "@type": "Country", name: "Bangladesh" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      url: PAGE_URL,
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: ALL_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

/* ───────────────────────── Reusable server sections ───────────────────────── */

const linkFocus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a31]";

const btnPrimary = `inline-flex items-center justify-center gap-2 rounded-lg bg-[#005a31] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#00431f] ${linkFocus}`;
const btnAccent = `inline-flex items-center justify-center gap-2 rounded-lg bg-[#ffb800] px-6 py-3 text-base font-semibold text-slate-900 transition-colors hover:bg-[#e6a500] ${linkFocus}`;
const btnOutline = `inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-[#005a31] transition-colors hover:border-[#005a31] ${linkFocus}`;

const Section = ({ id, title, intro, children }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 border-t border-slate-200 pt-12 first:border-t-0 first:pt-0">
    <h2 id={`${id}-title`} className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
      {title}
    </h2>
    {intro ? <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">{intro}</p> : null}
    <div className="mt-8">{children}</div>
  </section>
);

const CheckList = ({ items }) => (
  <ul className="space-y-2.5">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
        <Check aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-[#005a31]" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Callout = ({ children }) => (
  <div className="flex gap-3 rounded-xl border border-[#ffb800]/60 bg-[#fff8e1] p-4 text-sm leading-relaxed text-slate-800">
    <Info aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-[#8a6100]" />
    <div>{children}</div>
  </div>
);

const ExternalA = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-1 font-semibold text-[#005a31] underline underline-offset-2 hover:text-[#00431f] ${linkFocus}`}
  >
    {children}
    <ExternalLink aria-hidden="true" size={14} />
  </a>
);

const ContactCard = () => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="text-lg font-bold text-slate-900">Talk to Eammu Holidays</h2>
    <p className="mt-1 text-sm text-slate-600">
      Ask about your passport, your purpose of travel and the documents you will need.
    </p>
    <ul className="mt-5 space-y-3 text-sm">
      {[CONTACT.uaePhone, CONTACT.armeniaPhone, CONTACT.bdPhone].map((p) => (
        <li key={p.href} className="flex items-center justify-between gap-3">
          <span className="text-slate-500">{p.label}</span>
          <a href={p.href} className={`font-semibold text-slate-900 hover:text-[#005a31] ${linkFocus}`}>
            {p.display}
          </a>
        </li>
      ))}
      <li className="flex items-center justify-between gap-3">
        <span className="text-slate-500">Email</span>
        <a href={`mailto:${CONTACT.email}`} className={`break-all font-semibold text-slate-900 hover:text-[#005a31] ${linkFocus}`}>
          {CONTACT.email}
        </a>
      </li>
    </ul>
    <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className={`${btnAccent} mt-6 w-full`}>
      <MessageCircle aria-hidden="true" size={18} />
      Chat on WhatsApp
    </a>
  </div>
);

/* ───────────────────────── Main component ───────────────────────── */

export default function AlbaniaVisa() {
  return (
    <>
      <JsonLd data={structuredData} />

      <main className="bg-white font-sans text-slate-800">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-slate-50">
          <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-3 text-sm text-slate-500 sm:px-6 lg:px-8">
            <li>
              <Link href="/" className={`hover:text-[#005a31] ${linkFocus}`}>
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li aria-current="page" className="font-medium text-slate-800">
              Albania visa application
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-16">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-[#005a31]">
                Visa consultancy for travelers from Bangladesh and the UAE
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Albania visa application from Bangladesh and Dubai
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Find out which Albania visa or e-Visa you need, which documents to prepare, what the costs usually include and how
                the e-Visa process works. Eammu Holidays helps Bangladeshi citizens and UAE residents prepare a clear,
                well-documented application.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                  <MessageCircle aria-hidden="true" size={18} />
                  Ask about your Albania visa
                </a>
                <a href={CONTACT.uaePhone.href} className={btnOutline}>
                  <Phone aria-hidden="true" size={18} />
                  Call the UAE office
                </a>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-500">
                Eammu Holidays is a private consultancy. We are not an embassy or a government body, and visa decisions
                are made only by the Albanian authorities.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                <Image
                  src="/eammu_banner_four.webp"
                  alt="Eammu Holidays travel and visa consultancy banner for Albania visa applications"
                  width={1200}
                  height={630}
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="aspect-[1200/630] h-auto w-full object-cover"
                />
                <div className="border-t border-slate-200 bg-white p-5">
                  <h2 className="text-base font-bold text-slate-900">Key points at a glance</h2>
                  <div className="mt-3">
                    <CheckList
                      items={[
                        "Type C short-stay visa: up to 90 days in any 180 days",
                        "Apply online on the official portal, e-visa.al",
                        "Government fees and processing time depend on your nationality and case",
                        "A tourist visa does not allow work in Albania",
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content + sidebar */}
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-16">
          <div className="space-y-14 lg:col-span-8">
            {/* A. Overview */}
            <Section
              id="overview"
              title="Albania visa overview"
              intro="Short answers to the questions applicants ask most often, written for Bangladeshi passport holders and people living in the UAE."
            >
              <div className="space-y-6">
                {OVERVIEW.map((o) => (
                  <article key={o.q}>
                    <h3 className="text-lg font-semibold text-slate-900">{o.q}</h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-600">{o.a}</p>
                  </article>
                ))}
              </div>
              <div className="mt-6">
                <Callout>
                  Check the official sources before you apply:{" "}
                  <ExternalA href={OFFICIAL_EVISA}>Albania e-Visa portal</ExternalA> and the{" "}
                  <ExternalA href={OFFICIAL_MFA}>Ministry for Europe and Foreign Affairs visa regime page</ExternalA>.
                  Rules can change, and the official sources always take priority over this page.
                </Callout>
              </div>
            </Section>

            {/* B. Visa types */}
            <Section
              id="visa-types"
              title="Albania visa types"
              intro="Albania uses visa categories A, C and D. Work and remote-worker stays are handled through residence procedures, not through a tourist visa."
            >
              <div className="grid gap-5 md:grid-cols-2">
                {VISA_TYPES.map((v) => (
                  <article key={v.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <span className="inline-flex w-fit rounded-md bg-[#005a31]/10 px-2.5 py-1 text-xs font-semibold text-[#005a31]">
                      {v.badge}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-slate-900">{v.title}</h3>
                    <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                      <div>
                        <dt className="font-semibold text-slate-900">Purpose</dt>
                        <dd className="text-slate-600">{v.purpose}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-900">Stay</dt>
                        <dd className="text-slate-600">{v.stay}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-900">Who it is for</dt>
                        <dd className="text-slate-600">{v.eligibility}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-900">Application notes</dt>
                        <dd className="text-slate-600">{v.notes}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-600">
                Looking at a longer stay? Read our guides on{" "}
                <Link href="/our-services/visa/work-permit" className={`font-semibold text-[#005a31] underline underline-offset-2 ${linkFocus}`}>
                  work permits
                </Link>{" "}
                and the{" "}
                <Link href="/our-services/visa/digital-nomad-visa" className={`font-semibold text-[#005a31] underline underline-offset-2 ${linkFocus}`}>
                  digital nomad visa
                </Link>
                .
              </p>
            </Section>

            {/* C. Requirements */}
            <Section
              id="requirements"
              title="Albania visa requirements and document checklists"
              intro="The official portal lists the final requirements for your case. The checklists below separate general documents from nationality-specific and profile-specific documents."
            >
              <h3 className="text-lg font-semibold text-slate-900">General documents for a Type C visa</h3>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <CheckList items={GENERAL_DOCS} />
              </div>

              <h3 className="mt-10 text-lg font-semibold text-slate-900">Nationality and residence-specific documents</h3>
              <div className="mt-4 grid gap-5 md:grid-cols-2">
                {NATIONALITY_DOCS.map((d) => (
                  <article key={d.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h4 className="text-base font-semibold text-slate-900">{d.title}</h4>
                    <p className="mt-1 mb-4 text-sm text-slate-500">{d.note}</p>
                    <CheckList items={d.items} />
                  </article>
                ))}
              </div>

              <h3 className="mt-10 text-lg font-semibold text-slate-900">Documents by applicant profile</h3>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                {PROFILE_DOCS.map((d) => (
                  <article key={d.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h4 className="mb-4 text-base font-semibold text-slate-900">{d.title}</h4>
                    <CheckList items={d.items} />
                  </article>
                ))}
              </div>

              <div className="mt-6">
                <Callout>
                  <strong>Government requirement vs. Eammu recommendation:</strong> the passport, application, photo, fee
                  and any documents requested on the portal are official requirements. Items such as a cover letter, a
                  clear itinerary or employer letters are recommendations from Eammu Holidays to make your case easier to
                  understand. If you need a reservation to support your application, see our{" "}
                  <Link href="/our-services/travel/flight-reservation" className={`font-semibold text-[#005a31] underline underline-offset-2 ${linkFocus}`}>
                    flight reservation service
                  </Link>
                  .
                </Callout>
              </div>
            </Section>

            {/* D. Fees */}
            <Section
              id="fees"
              title="Albania visa fees and other costs"
              intro="The total cost of an Albania visa has several parts. Only the government fee is set by Albania, and it varies by nationality and visa category."
            >
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <caption className="sr-only">Albania visa cost breakdown</caption>
                  <thead className="bg-[#005a31] text-white">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">Cost</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Who charges it</th>
                      <th scope="col" className="px-4 py-3 font-semibold">What to know</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {FEE_ROWS.map((r) => (
                      <tr key={r.item} className="align-top">
                        <th scope="row" className="px-4 py-3 font-semibold text-slate-900">{r.item}</th>
                        <td className="px-4 py-3 text-slate-600">{r.who}</td>
                        <td className="px-4 py-3 leading-relaxed text-slate-600">{r.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                We do not list a fixed government fee here because it depends on your nationality, the visa category and
                official changes. Confirm the amount on the{" "}
                <ExternalA href={OFFICIAL_EVISA}>official e-Visa portal</ExternalA> before you pay.
              </p>
            </Section>

            {/* E. Processing time */}
            <Section
              id="processing-time"
              title="Albania visa processing time"
              intro="Processing is handled by the Albanian authorities and is counted in working days. No agency can guarantee a decision date or an outcome."
            >
              <div className="grid gap-5 md:grid-cols-2">
                <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">Standard processing</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Official guidance and the portal show the expected processing period for your application. Treat it
                    as an estimate rather than a promise, and check the portal for the current figure.
                  </p>
                </article>
                <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">Additional verification</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Officials may request more documents or clarification. Answering quickly and clearly helps avoid
                    additional delay.
                  </p>
                </article>
                <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">Why times vary</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Time depends on your nationality, visa type, the quality of your documents, public holidays, and how
                    busy the system is during the travel season.
                  </p>
                </article>
                <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">When to apply</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Apply well ahead of your planned departure, and keep flights and hotels flexible until you have a
                    decision. Do not rely on a last-minute approval.
                  </p>
                </article>
              </div>
            </Section>

            {/* F. Process */}
            <Section
              id="how-to-apply"
              title="How to apply for an Albania visa, step by step"
              intro="This is the general sequence for a short-stay e-Visa. Long-stay and residence procedures follow additional steps."
            >
              <ol className="space-y-4">
                {PROCESS_STEPS.map((s, i) => (
                  <li key={s.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#005a31] text-sm font-bold text-white"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm text-slate-600">
                Official links:{" "}
                <ExternalA href={OFFICIAL_EVISA}>Albania e-Visa portal</ExternalA>
                {" · "}
                <ExternalA href={OFFICIAL_MFA}>Ministry for Europe and Foreign Affairs</ExternalA>
              </p>
            </Section>

            {/* G. Dubai */}
            <Section
              id="from-dubai"
              title="Albania visa from Dubai for UAE residents"
              intro="Many of our applicants live and work in the UAE, including a large number of Bangladeshi expatriates. This is how to prepare."
            >
              <div className="grid gap-5 md:grid-cols-2">
                {DUBAI_POINTS.map((p) => (
                  <article key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-base font-semibold text-slate-900">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
                  </article>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">Application procedure from the UAE</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  The procedure is the same as for other applicants: confirm your visa requirement, prepare documents,
                  complete the online application and pay the fee. Our Dubai office can review your documents with you
                  before you submit, help with itineraries and reservations, and answer questions along the way.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a href={CONTACT.uaePhone.href} className={btnPrimary}>
                    <Phone aria-hidden="true" size={18} />
                    Call Dubai: {CONTACT.uaePhone.display}
                  </a>
                  <Link href="/our-services/visa/uae-residence-visa" className={btnOutline}>
                    UAE residence visa services
                  </Link>
                </div>
              </div>
            </Section>

            {/* Other nationalities + entry rules */}
            <Section
              id="other-nationalities"
              title="Albania visa for Indian, Pakistani, Filipino and other UAE-based nationalities"
              intro="Albania decides visa requirements by passport nationality, so the answer differs for each community living in the UAE. Use these notes to prepare, then confirm your passport on the official portal."
            >
              <div className="grid gap-5 md:grid-cols-2">
                {NATIONALITY_GUIDE.map((n) => (
                  <article key={n.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-base font-semibold text-slate-900">{n.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{n.text}</p>
                  </article>
                ))}
              </div>
            </Section>

            <Section
              id="entry-rules"
              title="Albania entry rules: e-Visa or visa-free entry"
              intro="Whether you need to apply depends on your passport, your purpose and any qualifying visa you hold. This table summarises the common situations."
            >
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                  <caption className="sr-only">Albania entry situations and what to do</caption>
                  <thead className="bg-[#005a31] text-white">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">Your situation</th>
                      <th scope="col" className="px-4 py-3 font-semibold">What it means</th>
                      <th scope="col" className="px-4 py-3 font-semibold">What to do</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {ENTRY_ROWS.map((r) => (
                      <tr key={r.situation} className="align-top">
                        <th scope="row" className="px-4 py-3 font-semibold text-slate-900">{r.situation}</th>
                        <td className="px-4 py-3 leading-relaxed text-slate-600">{r.meaning}</td>
                        <td className="px-4 py-3 leading-relaxed text-slate-600">{r.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="mt-10 text-lg font-semibold text-slate-900">What to have ready at the Albanian border</h3>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <CheckList items={BORDER_CHECKS} />
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                Border officers decide on entry, and an approved visa does not guarantee admission. Visa on arrival should
                not be assumed for visa-required passports.
              </p>
            </Section>

            {/* H. Rejection */}
            <Section
              id="rejection"
              title="Albania visa rejection: common reasons and how to prepare"
              intro="Refusals usually trace back to documents or information that do not clearly support the purpose of the trip. Careful preparation reduces avoidable problems but cannot guarantee approval."
            >
              <div className="grid gap-4 md:grid-cols-2">
                {REJECTION_REASONS.map((r) => (
                  <article key={r.reason} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="text-base font-semibold text-slate-900">{r.reason}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      <span className="font-semibold text-[#005a31]">How to prepare: </span>
                      {r.prep}
                    </p>
                  </article>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-600">
                If your application is refused, read the decision notice carefully and check the official portal for any
                review or appeal options. Do not reapply with the same documents without fixing the problem.
              </p>
            </Section>

            {/* Extension and overstay */}
            <Section
              id="extension-overstay"
              title="Albania visa extension and overstay"
              intro="Staying within your authorised period matters for this trip and for future visa applications."
            >
              <div className="grid gap-5 md:grid-cols-2">
                <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">Extending your stay</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Extensions are decided by the Albanian authorities and must be requested before your authorised stay
                    ends. They are not guaranteed, and a tourist visa cannot be turned into permission to work.
                  </p>
                </article>
                <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">Overstaying</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Overstaying can lead to fines, difficulty with future visa applications and possible entry bans. The
                    exact penalties are set by Albanian law, so check the official sources rather than relying on figures
                    from unofficial websites.
                  </p>
                </article>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                For a Type C visa, count your days carefully against the 90-days-in-180 rule and keep your return ticket
                aligned with the dates on your visa.
              </p>
            </Section>

            {/* I. Travel info */}
            <Section
              id="travel-information"
              title="Albania travel information"
              intro="Practical points to plan around once your visa plan is clear."
            >
              <div className="grid gap-5 md:grid-cols-2">
                {TRAVEL_INFO.map((t) => (
                  <article key={t.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-base font-semibold text-slate-900">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.text}</p>
                  </article>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-600">
                Combining Albania with other countries? Albania is outside the Schengen Area, so a trip that also
                includes Schengen countries needs a{" "}
                <Link href="/our-services/visa/schengen-visa" className={`font-semibold text-[#005a31] underline underline-offset-2 ${linkFocus}`}>
                  Schengen visa
                </Link>{" "}
                as well. See our{" "}
                <Link href="/our-services/visa/europe-visa-application" className={`font-semibold text-[#005a31] underline underline-offset-2 ${linkFocus}`}>
                  Europe visa application guide
                </Link>{" "}
                for multi-country trips.
              </p>
            </Section>

            {/* Sample itinerary */}
            <Section
              id="sample-itinerary"
              title="Sample 7-day Albania itinerary for your visa application"
              intro="A clear itinerary helps explain your trip. This is a sample you can adapt. Make sure dates, cities and bookings match what you submit."
            >
              <ol className="space-y-3">
                {SAMPLE_ITINERARY.map((d) => (
                  <li key={d.day} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
                    <span className="w-14 shrink-0 text-sm font-bold text-[#005a31]">{d.day}</span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">{d.title}</h3>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{d.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                Need help with reservations? See our{" "}
                <Link href="/our-services/travel/flight-reservation" className={`font-semibold text-[#005a31] underline underline-offset-2 ${linkFocus}`}>
                  flight reservation service
                </Link>
                . Planning to continue to the Caucasus? Our{" "}
                <Link href="/our-services/visa/armenia-visa-application" className={`font-semibold text-[#005a31] underline underline-offset-2 ${linkFocus}`}>
                  Armenia visa guide
                </Link>{" "}
                covers Yerevan.
              </p>
            </Section>

            {/* J. Why Eammu */}
            <Section
              id="why-eammu"
              title="How Eammu Holidays can help"
              intro="Eammu Holidays is a travel and visa consultancy with offices in Dubai, Dhaka, Cumilla, Yerevan and Tbilisi. This is what we do for Albania applicants."
            >
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <CheckList items={EAMMU_SERVICES} />
              </div>
              <div className="mt-6">
                <Callout>
                  <strong>What we do not do:</strong> we are not the Albanian government, an embassy or an official
                  representative, we do not issue visas, and we cannot guarantee approval or a processing time. Our role
                  is to help you prepare a clear and accurate application.
                </Callout>
              </div>
            </Section>

            {/* FAQ */}
            <Section
              id="faq"
              title="Albania visa FAQ"
              intro="Answers to common questions from applicants in Bangladesh and the UAE."
            >
              <div className="space-y-3">
                {ALL_FAQS.map((f) => (
                  <details key={f.q} className="group rounded-xl border border-slate-200 bg-white open:shadow-sm">
                    <summary
                      className={`flex cursor-pointer list-none items-start justify-between gap-4 rounded-xl p-5 text-base font-semibold text-slate-900 [&::-webkit-details-marker]:hidden ${linkFocus}`}
                    >
                      <span>{f.q}</span>
                      <ChevronDown
                        aria-hidden="true"
                        size={20}
                        className="mt-0.5 shrink-0 text-[#005a31] transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p>
                  </details>
                ))}
              </div>
            </Section>

            {/* Related services */}
            <section aria-labelledby="related-title" className="border-t border-slate-200 pt-12">
              <h2 id="related-title" className="text-2xl font-bold tracking-tight text-slate-900">
                Related Eammu services
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {RELATED.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className={`flex h-full items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-[#005a31] ${linkFocus}`}
                    >
                      <ChevronRight aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-[#ffb800]" />
                      <span>
                        <span className="block text-sm font-semibold text-[#005a31]">{r.label}</span>
                        <span className="mt-0.5 block text-sm text-slate-600">{r.desc}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar: sticky on large screens, normal flow on mobile */}
          <aside aria-label="Page navigation and contact" className="space-y-6 lg:col-span-4 lg:sticky lg:top-6 lg:self-start">
            <ContactCard />
            <nav aria-label="On this page" className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-base font-bold text-slate-900">On this page</h2>
              <ul className="mt-3 divide-y divide-slate-100 text-sm">
                {TOC.map(([id, label]) => (
                  <li key={id}>
                    <a href={`#${id}`} className={`block py-2 text-slate-600 hover:text-[#005a31] ${linkFocus}`}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="px-1 text-xs leading-relaxed text-slate-500">
              Last reviewed: {LAST_REVIEWED}. Visa rules, fees and processing times are set by the Albanian authorities and
              can change. Always confirm on the official sources.
            </p>
          </aside>
        </div>

        {/* Final CTA */}
        <section aria-labelledby="cta-title" className="bg-[#005a31]">
          <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8">
            <h2 id="cta-title" className="text-2xl font-bold text-white sm:text-3xl">
              Planning to apply for an Albania visa?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/85">
              Tell us your passport, where you live and when you plan to travel. We will help you understand the
              documents you need before you apply.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className={btnAccent}>
                <MessageCircle aria-hidden="true" size={18} />
                Message us on WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/60 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-[#005a31] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Mail aria-hidden="true" size={18} />
                Email {CONTACT.email}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}