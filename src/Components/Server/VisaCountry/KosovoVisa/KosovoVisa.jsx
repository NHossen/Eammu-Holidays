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
   KosovoVisa — Server Component (no hooks, no client directive)
   ═════════════════════════════════════════════════════════════ */

const SITE_URL = "https://eammu.com";
const PAGE_URL = `${SITE_URL}/our-services/visa/kosovo-visa-application`;
const LAST_REVIEWED = "2026-11-24"; // update whenever you re-verify the content

const OFFICIAL_MFA = "https://www.mfa-ks.net";

const CONTACT = {
  whatsapp:
    "https://wa.me/37494810585?text=Hello%20Eammu%20Holidays%2C%20I%20need%20help%20with%20a%20Kosovo%20visa.",
  uaePhone: { label: "UAE", display: "+971 50 707 8334", href: "tel:+971507078334" },
  armeniaPhone: { label: "Armenia", display: "+374 94 810585", href: "tel:+37494810585" },
  bdPhone: { label: "Bangladesh", display: "+880 1701 699 743", href: "tel:+8801701699743" },
  email: "info@eammu.com",
};

/* ───────────────────────── Content data ───────────────────────── */

const TOC = [
  ["overview", "Kosovo visa overview"],
  ["sticker-visa", "Sticker visa explained"],
  ["visa-types", "Visa types"],
  ["requirements", "Document requirements"],
  ["schengen-exemption", "Schengen exemption"],
  ["fees", "Visa fees and costs"],
  ["processing-time", "Processing time"],
  ["how-to-apply", "Application steps"],
  ["from-bangladesh", "From Bangladesh"],
  ["from-dubai", "From Dubai and the UAE"],
  ["rejection", "Visa rejection"],
  ["travel-information", "Travel information"],
  ["sample-itinerary", "Sample 7-day itinerary"],
  ["why-eammu", "How Eammu helps"],
  ["faq", "FAQ"],
];

const OVERVIEW = [
  {
    q: "Do Bangladeshi citizens need a visa for Kosovo?",
    a: "Yes. Bangladeshi passport holders need a visa to enter Kosovo. The visa is a sticker placed in your passport, so the process involves your physical passport. Do not book non-refundable travel until the visa is in your hands.",
  },
  {
    q: "Is there a Kosovo e-visa or visa on arrival for Bangladeshis?",
    a: "Do not plan on either. Bangladeshi applicants should expect to apply through a Kosovo diplomatic or consular mission and receive a visa sticker before travel. Confirm the current procedure with the mission or the Kosovo Ministry of Foreign Affairs.",
  },
  {
    q: "Is Kosovo part of the Schengen Area or the EU?",
    a: "No. Kosovo is not in the Schengen Area or the European Union, and it runs its own visa regime. A Schengen visa does not replace a Kosovo visa, although Kosovo exempts holders of a valid multiple-entry Schengen visa or a valid biometric Schengen residence permit for a short stay, under specific conditions.",
  },
  {
    q: "Why is Kosovo’s EU visa-free access not relevant to me?",
    a: "Since 1 January 2024, holders of Kosovo passports can travel to the Schengen Area without a visa. That rule applies to Kosovar citizens only. It does not change what Bangladeshi, Indian, Pakistani or Filipino passport holders need to enter Kosovo.",
  },
  {
    q: "Kosovo visa for UAE residents and Dubai-based expatriates",
    a: "A UAE residence permit does not exempt you from a Kosovo visa. Your passport nationality decides the rule. Your Emirates ID, residence permit, employment and bank records still matter, because they show where you live and work and why you will return.",
  },
];

const STICKER_POINTS = [
  {
    title: "What a sticker visa means",
    text: "The visa is a printed sticker attached to a page in your passport. It is not an electronic approval you print at home, and it is not issued at the border.",
  },
  {
    title: "Your passport is involved",
    text: "In most cases the mission needs your original passport, either in person or through an arrangement it allows. Plan for the period without your passport, and do not apply for other visas at the same time unless you have confirmed the timing.",
  },
  {
    title: "Blank pages and validity",
    text: "Make sure your passport has at least one clear blank page and enough validity for the stay. Damaged or nearly full passports can cause problems.",
  },
  {
    title: "Check the sticker on collection",
    text: "When you receive your passport, check the name, passport number, dates of validity, number of entries and permitted stay before you book non-refundable tickets.",
  },
  {
    title: "Which mission accepts your application",
    text: "Acceptance depends on where you live and which Kosovo mission covers your country of residence. This can differ between Bangladesh and the UAE, so confirm the correct mission and its procedure before you prepare documents.",
  },
  {
    title: "Keep copies of everything",
    text: "Scan the passport page, every document you submit, the payment receipt and the final sticker. Copies help with later applications and with border questions.",
  },
];

const VISA_TYPES = [
  {
    badge: "Type C",
    title: "Tourist visa",
    purpose: "Holidays, sightseeing and short leisure trips.",
    stay: "Up to 90 days within a 180-day period, as stated on the visa.",
    eligibility: "Applicants whose passport requires a visa and who are not covered by an exemption.",
    notes:
      "Expect to show passport, photo, itinerary, accommodation, health insurance, proof of funds and proof of ties to your country of residence. A Type C visa does not allow employment.",
  },
  {
    badge: "Type C",
    title: "Business visa",
    purpose: "Meetings, trade fairs and short business visits.",
    stay: "Up to 90 days within a 180-day period, as stated on the visa.",
    eligibility: "Business travelers whose visit does not involve employment in Kosovo.",
    notes:
      "Business visas usually need more evidence: an invitation or confirmation letter from the Kosovo host, your company documents and proof that your employer or business covers or supports the trip.",
  },
  {
    badge: "Type C",
    title: "Family or private visit",
    purpose: "Visiting relatives or friends living in Kosovo.",
    stay: "Short stay as stated on the visa.",
    eligibility: "Applicants invited by a host who can document their identity and address in Kosovo.",
    notes:
      "An invitation from the host, copies of the host’s ID or residence document and proof of the relationship are normally important. Your own financial and ties documents still matter.",
  },
  {
    badge: "Type A",
    title: "Airport transit visa",
    purpose: "Changing planes in Kosovo without entering the country.",
    stay: "Limited to the transit and the international area of the airport.",
    eligibility: "Nationalities that are required to hold a transit visa.",
    notes:
      "Some sources indicate Bangladeshi passport holders need a transit visa even when staying airside. Confirm with the mission and your airline before you buy a ticket through Pristina.",
  },
  {
    badge: "Type D",
    title: "Long-stay visa",
    purpose: "Stays above 90 days, such as study, work or family reasons.",
    stay: "Set by the issuing authority and tied to the purpose of the stay.",
    eligibility: "Applicants with a qualifying purpose and approval or documents required for that purpose.",
    notes:
      "A Type D visa lets you enter for a long stay, and a residence procedure normally follows in Kosovo. Work and study cases may need an employer, university or permit approval first.",
  },
  {
    badge: "Residence",
    title: "Work and study residence",
    purpose: "Living in Kosovo for a job, business or university programme.",
    stay: "Granted as a temporary residence permit, not as a tourist visa.",
    eligibility: "Applicants with an employer, business or university that meets Kosovo’s legal requirements.",
    notes:
      "Residence permits are separate from visas and follow Kosovo’s migration rules, including quotas for some employment cases. Do not try to turn a tourist visa into work permission.",
  },
];

const GENERAL_DOCS = [
  "Original passport with a blank page and enough validity for the stay",
  "Completed visa application form, filled in clearly and consistently",
  "Passport photo that meets the mission’s specifications",
  "Proof of the purpose of travel, such as an itinerary or invitation",
  "Accommodation booking or host details in Kosovo",
  "Valid health insurance covering the whole stay in Kosovo",
  "Proof of sufficient funds for the trip",
  "Return or onward travel booking",
  "Proof that the visa fee has been paid, if the mission requires it",
];

const NATIONALITY_DOCS = [
  {
    title: "Bangladeshi applicants",
    note: "Officers pay close attention to funds, employment and ties to Bangladesh.",
    items: [
      "Bangladeshi passport and a copy of the data page",
      "National ID card (NID) copy",
      "Recent bank statements with a clear income and balance history",
      "Employment letter, trade licence or business registration",
      "Tax documents (TIN certificate or returns) where available",
      "Previous visas and travel history",
    ],
  },
  {
    title: "UAE residents",
    note: "Your UAE status supports the application but does not replace the visa rule for your passport.",
    items: [
      "Valid UAE residence permit and Emirates ID copy",
      "Passport with enough validity and blank pages",
      "Salary certificate and NOC from the employer, if employed",
      "Recent UAE bank statements",
      "Company trade licence, if you own or manage a business",
      "Return flight reservation to the UAE",
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
      "Company and personal bank statements",
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
      "Sponsor’s passport or ID and proof of relationship",
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
      "Invitation letter from the host in Kosovo",
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
      "Written parental consent if the child travels with one parent or someone else",
      "Parents’ employment and bank documents",
    ],
  },
];

const EXEMPTION_POINTS = [
  "A valid multiple-entry Schengen visa",
  "A valid biometric residence permit issued by a Schengen state",
];

const FEE_ROWS = [
  {
    item: "Government or consular visa fee",
    who: "Kosovo diplomatic or consular mission",
    note: "Several sources list €40 for a short-stay Type C visa and €80 for a Type D visa, with exemptions for some groups such as young children. Fees can change and depend on the mission, so confirm the exact amount and payment method before you apply.",
  },
  {
    item: "Service or consultancy fee",
    who: "Eammu Holidays",
    note: "A separate fee for guidance, document review and application support, agreed with you in advance. It is never part of the government fee.",
  },
  {
    item: "Courier and document handling",
    who: "Courier companies or the mission’s arrangement",
    note: "Because a sticker visa goes in your passport, you may need to pay for passport submission and return, depending on the mission’s process.",
  },
  {
    item: "Translation and certification",
    who: "Translators, notaries or attestation offices",
    note: "Documents not in English or an official language of Kosovo may need translation. Follow the mission’s checklist.",
  },
  {
    item: "Health insurance",
    who: "Insurance provider",
    note: "Price depends on age, trip length and cover. The policy must be valid for Kosovo and for the full stay.",
  },
  {
    item: "Flights and accommodation",
    who: "Airlines, hotels or hosts",
    note: "Reservations support the application, but avoid non-refundable tickets until the visa is approved.",
  },
  {
    item: "Other possible expenses",
    who: "Various",
    note: "Photos, printing, bank statement stamping and currency conversion charges.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Confirm that you need a visa",
    text: "Bangladeshi passport holders need one. Check whether any exemption applies to you, such as a valid multiple-entry Schengen visa or a valid biometric Schengen residence permit.",
  },
  {
    title: "Choose the right visa category",
    text: "Type C for a short tourist, business or family visit, Type A for airport transit only, and Type D when you plan a longer stay.",
  },
  {
    title: "Find the mission that handles your application",
    text: "Confirm which Kosovo diplomatic or consular mission accepts applications from your country of residence, and check its procedure, appointment rules and working days.",
  },
  {
    title: "Prepare the documents",
    text: "Use the checklists on this page as a starting point, then match them to the mission’s own list. Keep names, dates and figures consistent in every document.",
  },
  {
    title: "Complete the application form",
    text: "Fill in the visa application form carefully. Enter details exactly as they appear in your passport, and avoid corrections and blank fields.",
  },
  {
    title: "Pay the fee",
    text: "Pay the fee in the way the mission requires and keep the receipt. Fees are normally not refundable if the application is refused.",
  },
  {
    title: "Submit the application and passport",
    text: "Submit the application as the mission requires, including your original passport for the sticker. Ask how long the mission keeps the passport and how you will receive it back.",
  },
  {
    title: "Collect the passport and check the visa",
    text: "Check the sticker for your name, passport number, validity, entries and permitted stay before you book non-refundable travel.",
  },
];

const BD_POINTS = [
  {
    title: "Start early",
    text: "Sticker visas involve physical documents and passport handling, so allow extra time in your plan, including time for courier or travel to the mission.",
  },
  {
    title: "Strong financial evidence",
    text: "Use bank statements that show regular income over several months. Avoid large unexplained deposits shortly before you apply.",
  },
  {
    title: "Ties to Bangladesh",
    text: "A job letter, trade licence, business papers, property documents or family ties help show that your trip is temporary.",
  },
  {
    title: "Consistent documents",
    text: "Match names, occupations and addresses across your NID, passport, bank statements, tax papers and application form.",
  },
  {
    title: "Travel purpose",
    text: "A short cover letter and a realistic itinerary make your purpose easy to understand. For business or family visits, add an invitation letter.",
  },
  {
    title: "Support from our Bangladesh offices",
    text: "Eammu Holidays has offices in Dhaka and Cumilla and can help you check your documents and plan your application before you submit it.",
  },
];

const DUBAI_POINTS = [
  {
    title: "UAE residence permit",
    text: "Keep your residence permit and Emirates ID valid for the whole trip. They show you have a lawful base in the UAE and a reason to return.",
  },
  {
    title: "Bangladeshi passport holders in Dubai",
    text: "Your passport decides the Kosovo visa rule. Show proof of your life in the UAE, such as work, housing and family, together with your passport and residence documents.",
  },
  {
    title: "Employment and salary documents",
    text: "A recent salary certificate, employer NOC and payslips show that your trip is temporary and that you have a job to return to.",
  },
  {
    title: "Bank statements",
    text: "Statements covering recent months should show regular income and a balance that fits the cost of the trip.",
  },
  {
    title: "Itinerary, hotel and flights",
    text: "A day-by-day itinerary, a hotel booking and a return flight to the UAE make your plan easy to follow.",
  },
  {
    title: "Health insurance",
    text: "Choose a policy valid for Kosovo and for the full stay, and keep the certificate with your documents.",
  },
];

const NATIONALITY_GUIDE = [
  {
    title: "Indian passport holders in the UAE",
    text: "Check whether your passport needs a visa and whether a valid multiple-entry Schengen visa or Schengen residence permit applies. Prepare your passport, UAE residence permit, salary certificate and bank statements.",
  },
  {
    title: "Pakistani passport holders in the UAE",
    text: "Confirm the visa rule for your passport. If a visa is required, prepare your passport, CNIC copy, UAE residence documents, employer letter and bank statements.",
  },
  {
    title: "Filipino passport holders in the UAE",
    text: "Verify the rule for your passport first. Prepare your Philippine passport, UAE residence permit, employment certificate, bank statements and health insurance.",
  },
  {
    title: "Nepali and Sri Lankan passport holders in the UAE",
    text: "Check your nationality with the mission before booking. If a visa is required, you usually need the passport, UAE residence documents, proof of employment and funds, and accommodation details.",
  },
];

const REJECTION_REASONS = [
  {
    reason: "Incomplete documentation",
    prep: "Check every document against the mission’s list before submission and make sure copies are clear.",
  },
  {
    reason: "Insufficient financial evidence",
    prep: "Show regular income and a balance that realistically covers the trip. Add sponsor documents if someone else pays.",
  },
  {
    reason: "Inconsistent details",
    prep: "Compare names, dates, job titles and addresses across your passport, form, statements and letters.",
  },
  {
    reason: "Weak or unclear travel purpose",
    prep: "Write a short cover letter and provide an itinerary and bookings that match your stated purpose.",
  },
  {
    reason: "Weak ties to the country of residence",
    prep: "Include proof of employment, business, study or family that connects you to Bangladesh or the UAE.",
  },
  {
    reason: "Previous immigration violations",
    prep: "Do not hide earlier overstays or refusals. Answer questions honestly and add a short explanation if relevant.",
  },
];

const TRAVEL_INFO = [
  {
    title: "Pristina",
    text: "Pristina is the capital and the main arrival point, served by Pristina International Airport. The city centre has cafés, museums and Mother Teresa Boulevard, and it works well as a base.",
  },
  {
    title: "Prizren, Peja and Gjakova",
    text: "Prizren is known for its old town and fortress, Peja for the Rugova mountains, and Gjakova for its old bazaar. All can be reached from Pristina by road.",
  },
  {
    title: "Best time to visit",
    text: "Spring and early autumn are generally comfortable for city trips. Summer suits mountain areas, and winter suits skiing in the mountain regions.",
  },
  {
    title: "Currency",
    text: "Kosovo uses the euro, so you can budget in euros without currency exchange for most spending.",
  },
  {
    title: "Accommodation",
    text: "Choose a booking you can cancel free of charge, or provide a host’s address with an invitation letter if you stay with family or friends.",
  },
  {
    title: "Flights and the region",
    text: "Check current routes from Dubai or your departure city, as options often include a connection. If you plan to cross into Serbia from Kosovo, check the entry rules first, because border crossings can be complicated.",
  },
];

const SAMPLE_ITINERARY = [
  { day: "Day 1", title: "Arrive in Pristina", text: "Check in, then walk the city centre and Mother Teresa Boulevard." },
  { day: "Day 2", title: "Pristina", text: "Visit the National Museum and nearby landmarks, and explore the café districts." },
  { day: "Day 3", title: "Prizren", text: "Day trip to the old town, the stone bridge and the fortress." },
  { day: "Day 4", title: "Gjakova", text: "See the old bazaar and nearby historic sites." },
  { day: "Day 5", title: "Peja and Rugova", text: "Travel to Peja and visit the Rugova mountains." },
  { day: "Day 6", title: "Return to Pristina", text: "Relax, shop and prepare for departure." },
  { day: "Day 7", title: "Departure", text: "Fly out from Pristina International Airport." },
];

const EAMMU_SERVICES = [
  "Visa consultation based on your passport and purpose",
  "Step-by-step application guidance",
  "Personalised document checklist",
  "Document review before submission",
  "Travel itinerary assistance",
  "Flight reservation assistance",
  "Hotel booking assistance",
  "Health insurance guidance",
  "Support through the mission’s application process",
];

const RELATED = [
  {
    label: "Albania visa application",
    href: "/our-services/visa/albania-visa-application",
    desc: "Combining Kosovo with Albania? See the Albania visa guide.",
  },
  {
    label: "Europe visa application",
    href: "/our-services/visa/europe-visa-application",
    desc: "Plan a wider European trip and compare visa routes.",
  },
  {
    label: "Schengen visa",
    href: "/our-services/visa/schengen-visa",
    desc: "Schengen visa guidance for trips that include Schengen countries.",
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
    label: "Flight reservation",
    href: "/our-services/travel/flight-reservation",
    desc: "Flight reservations for visa applications.",
  },
  {
    label: "Armenia visa application",
    href: "/our-services/visa/armenia-visa-application",
    desc: "Planning to continue to Yerevan? See the Armenia visa guide.",
  },
];

const FAQS = [
  {
    q: "Do Bangladeshi citizens need a visa for Kosovo?",
    a: "Yes. Bangladeshi passport holders need a Kosovo visa, and it is issued as a sticker in the passport. Check the current procedure with the Kosovo mission that handles applications for your country of residence.",
  },
  {
    q: "Can I get a Kosovo visa on arrival or an e-visa as a Bangladeshi?",
    a: "Do not plan on it. Plan to obtain the visa sticker before you travel, and confirm any change with the Kosovo Ministry of Foreign Affairs or the mission.",
  },
  {
    q: "What is a sticker visa?",
    a: "A sticker visa is a printed label attached to a page in your passport. It means your original passport is normally part of the application process, so allow time for submission and return.",
  },
  {
    q: "Can Dubai or UAE residents apply for a Kosovo visa?",
    a: "Yes, UAE residents whose passports require a visa can apply, but the passport decides the rule, not UAE residence. Confirm which mission accepts applications from the UAE and prepare your residence, employment and bank documents.",
  },
  {
    q: "Does a Schengen visa let me enter Kosovo without a Kosovo visa?",
    a: "Kosovo exempts holders of a valid multiple-entry Schengen visa and holders of a valid biometric Schengen residence permit, under specific conditions, usually for a short stay. Confirm the conditions and the permitted length of stay with the Ministry of Foreign Affairs or a mission before relying on it.",
  },
  {
    q: "Do US or UK visas give me visa-free entry to Kosovo?",
    a: "Do not assume so. The exemption most commonly described for visa-required nationalities is based on a Schengen visa or Schengen residence permit. Check the official list before travel.",
  },
  {
    q: "How much is the Kosovo visa fee?",
    a: "Several sources list €40 for a Type C short-stay visa and €80 for a Type D visa. Fees can change and may depend on the mission, so confirm the amount and the payment method before you apply. Eammu’s service fee is separate and agreed in advance.",
  },
  {
    q: "How long does the Kosovo visa take?",
    a: "Processing time depends on the mission and the completeness of your documents. Many sources mention around two weeks, but it can be longer, and your passport may be held during that time. Apply well before travel and avoid non-refundable bookings.",
  },
  {
    q: "How long can I stay in Kosovo on a Type C visa?",
    a: "A Type C visa is for short stays of up to 90 days within a 180-day period, but the visa itself states the stay and number of entries granted to you.",
  },
  {
    q: "Do I need health insurance for the Kosovo visa?",
    a: "Yes, valid health insurance covering the whole stay in Kosovo is normally required. Follow the mission’s requirements for the cover level.",
  },
  {
    q: "Do children need a visa for Kosovo?",
    a: "If the child’s passport requires a visa, yes. Some sources say very young children are exempt from the fee. Prepare the birth certificate, parents’ passport copies and a consent letter if the child does not travel with both parents.",
  },
  {
    q: "Is a Kosovo transit visa needed for a layover?",
    a: "Some sources say Bangladeshi passport holders need a transit visa even when staying in the airport. Confirm with the mission and your airline before booking a ticket via Pristina.",
  },
  {
    q: "Do I need an invitation letter?",
    a: "It depends on your purpose. An invitation is important for business and family visits, and a host’s address and documents can support an accommodation record for private visits.",
  },
  {
    q: "Why do Kosovo visa applications get rejected?",
    a: "Common causes are incomplete documents, weak financial evidence, inconsistent details, an unclear purpose and previous immigration problems. Careful preparation reduces avoidable mistakes, but no one can guarantee approval.",
  },
  {
    q: "Can I travel from Kosovo to Serbia?",
    a: "Crossing from Kosovo into Serbia can be complicated, particularly if you did not enter the region through Serbia first. Check the entry rules for the countries on your route before you finalise bookings.",
  },
  {
    q: "Can I use a flight reservation for the application?",
    a: "Many applicants use changeable reservations until the visa is decided. Make sure dates and names match your application and itinerary, and avoid paying for non-refundable tickets before approval.",
  },
  {
    q: "Can I work in Kosovo on a tourist visa?",
    a: "No. A Type C visa does not allow gainful activity. Working in Kosovo requires the proper work and residence authorisation.",
  },
  {
    q: "What does Eammu Holidays do, and what does it not do?",
    a: "Eammu Holidays is a private travel and visa consultancy. We help with guidance, document checks, itineraries and bookings. We are not the Kosovo government or an embassy, we do not decide visa outcomes, and we cannot guarantee approval or processing times.",
  },
];

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
      name: "Kosovo Visa for Bangladeshis & UAE Residents 2026",
      description:
        "Kosovo sticker visa guide: visa types, document checklists, fees, processing time and application steps for Bangladeshi passport holders in Bangladesh and the UAE.",
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
        { "@type": "ListItem", position: 2, name: "Kosovo visa application", item: PAGE_URL },
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
      name: "Kosovo visa application consultancy",
      serviceType: "Visa consultation and application support",
      description:
        "Guidance, document review and application support for travelers applying for a Kosovo visa from Bangladesh or the UAE. Eammu Holidays is a private consultancy and does not issue visas.",
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
      mainEntity: FAQS.map((f) => ({
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
const inlineLink = `font-semibold text-[#005a31] underline underline-offset-2 ${linkFocus}`;

const Section = ({ id, title, intro, children }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 border-t border-slate-200 pt-12 first:border-t-0 first:pt-0">
    <h2 id={`${id}-title`} className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
      {title}
    </h2>
    {intro ? <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">{intro}</p> : null}
    <div className="mt-8">{children}</div>
  </section>
);

const CardGrid = ({ items, cols = "md:grid-cols-2" }) => (
  <div className={`grid gap-5 ${cols}`}>
    {items.map((it) => (
      <article key={it.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-slate-900">{it.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.text}</p>
      </article>
    ))}
  </div>
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

export default function KosovoVisa() {
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
              Kosovo visa application
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-16">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-[#005a31]">
                Sticker visa support for travelers from Bangladesh and the UAE
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Kosovo visa for Bangladeshi citizens and UAE residents
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Bangladeshi passport holders need a Kosovo sticker visa before travel. Learn which visa type fits your
                trip, which documents to prepare, what the costs usually include and how the application works.
                Eammu Holidays helps you prepare a clear, well-documented application from Bangladesh or Dubai.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                  <MessageCircle aria-hidden="true" size={18} />
                  Ask about your Kosovo visa
                </a>
                <a href={CONTACT.bdPhone.href} className={btnOutline}>
                  <Phone aria-hidden="true" size={18} />
                  Call the Bangladesh office
                </a>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-500">
                Eammu Holidays is a private consultancy. We are not an embassy or a government body, and visa decisions
                are made only by the Kosovo authorities.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                <Image
                  src="/eammu_kosovo_banner.webp"
                  alt="Eammu Holidays Kosovo sticker visa guide for Bangladeshi citizens and UAE residents"
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
                        "Bangladeshi passport holders need a Kosovo visa",
                        "The visa is issued as a sticker in your passport",
                        "Type C is for short stays, Type D for longer stays",
                        "Fees and processing time depend on the mission and your case",
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
            {/* Overview */}
            <Section
              id="overview"
              title="Kosovo visa overview"
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
                  Check the official source before you apply: the{" "}
                  <ExternalA href={OFFICIAL_MFA}>Kosovo Ministry of Foreign Affairs and Diaspora</ExternalA> publishes
                  consular and visa information. Rules can change, and official sources always take priority over this
                  page.
                </Callout>
              </div>
            </Section>

            {/* Sticker visa */}
            <Section
              id="sticker-visa"
              title="Kosovo sticker visa explained"
              intro="Because Bangladeshi applicants need a sticker visa, the process is more hands-on than an online e-visa. This is what to expect."
            >
              <CardGrid items={STICKER_POINTS} />
            </Section>

            {/* Visa types */}
            <Section
              id="visa-types"
              title="Kosovo visa types"
              intro="Kosovo uses short-stay Type C, airport transit Type A and long-stay Type D visas. Work and study stays also involve residence procedures."
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
                Looking at a longer stay for work? Read our{" "}
                <Link href="/our-services/visa/work-permit" className={inlineLink}>
                  work permit guide
                </Link>
                .
              </p>
            </Section>

            {/* Requirements */}
            <Section
              id="requirements"
              title="Kosovo visa requirements and document checklists"
              intro="The mission that accepts your application gives the final list. These checklists separate general documents from nationality-specific and profile-specific documents."
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
                  <strong>Government requirement vs. Eammu recommendation:</strong> the passport, application form, fee,
                  health insurance and documents on the mission’s list are official requirements. A cover letter, a clear
                  itinerary or employer letters are recommendations from Eammu Holidays to make your case easier to
                  understand. If you need a reservation, see our{" "}
                  <Link href="/our-services/travel/flight-reservation" className={inlineLink}>
                    flight reservation service
                  </Link>
                  . Documents not in English or an official language of Kosovo may need translation.
                </Callout>
              </div>
            </Section>

            {/* Schengen exemption */}
            <Section
              id="schengen-exemption"
              title="Kosovo visa exemption for Schengen visa and residence permit holders"
              intro="Kosovo’s Ministry of Foreign Affairs describes an exemption for citizens of visa-required countries who hold certain Schengen documents."
            >
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="mb-4 text-base font-semibold text-slate-900">You may be exempt if you hold</h3>
                <CheckList items={EXEMPTION_POINTS} />
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                The exemption is limited and conditional. It usually allows only a short stay, so confirm the permitted
                length with the Ministry of Foreign Affairs or a Kosovo mission, and make sure your Schengen visa or
                permit is valid for the whole trip. If you plan to enter Schengen countries too, see our{" "}
                <Link href="/our-services/visa/schengen-visa" className={inlineLink}>
                  Schengen visa page
                </Link>
                . Do not assume that a US, UK or other visa gives the same exemption.
              </p>
            </Section>

            {/* Fees */}
            <Section
              id="fees"
              title="Kosovo visa fees and other costs"
              intro="The total cost has several parts. Only the visa fee is set by Kosovo, and it can depend on the visa type and the mission."
            >
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <caption className="sr-only">Kosovo visa cost breakdown</caption>
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
                Fee figures reported online differ in detail and can change. Confirm the amount with the{" "}
                <ExternalA href={OFFICIAL_MFA}>Ministry of Foreign Affairs</ExternalA> or the mission before you pay.
              </p>
            </Section>

            {/* Processing time */}
            <Section
              id="processing-time"
              title="Kosovo visa processing time"
              intro="Processing is handled by the Kosovo authorities and the mission. No agency can guarantee a decision date or an outcome."
            >
              <CardGrid
                items={[
                  {
                    title: "Standard processing",
                    text: "Processing depends on the mission and the completeness of your documents. Many sources mention around two weeks, but treat that as an estimate and ask the mission for its current timing.",
                  },
                  {
                    title: "Additional verification",
                    text: "Officials may ask for more documents or clarification, which adds time. Answer quickly and clearly.",
                  },
                  {
                    title: "Passport handling time",
                    text: "For a sticker visa your passport may be held, and courier time to and from the mission is added to the processing period.",
                  },
                  {
                    title: "When to apply",
                    text: "Apply well before your planned departure, ask whether the mission sets an application window, and keep flights and hotels flexible until you have a decision.",
                  },
                ]}
              />
            </Section>

            {/* Process */}
            <Section
              id="how-to-apply"
              title="How to apply for a Kosovo visa, step by step"
              intro="This is the general sequence for a short-stay sticker visa. The mission’s own procedure always takes priority."
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
                Official source: <ExternalA href={OFFICIAL_MFA}>Kosovo Ministry of Foreign Affairs and Diaspora</ExternalA>
              </p>
            </Section>

            {/* From Bangladesh */}
            <Section
              id="from-bangladesh"
              title="Kosovo visa from Bangladesh"
              intro="Bangladeshi applicants are often asked for stronger evidence of funds and ties. This is how to prepare."
            >
              <CardGrid items={BD_POINTS} />
            </Section>

            {/* From Dubai */}
            <Section
              id="from-dubai"
              title="Kosovo visa from Dubai for UAE residents"
              intro="Many of our applicants live and work in the UAE, including Bangladeshi, Indian, Pakistani and Filipino expatriates."
            >
              <CardGrid items={DUBAI_POINTS} />

              <h3 className="mt-10 text-lg font-semibold text-slate-900">
                Indian, Pakistani, Filipino and other UAE-based nationalities
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                The rule depends on your passport, not on UAE residence, so confirm it before you prepare documents.
              </p>
              <div className="mt-4">
                <CardGrid items={NATIONALITY_GUIDE} />
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">Application procedure from the UAE</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  The procedure follows the same steps: confirm your requirement, find the mission that accepts
                  applications from the UAE, prepare documents, complete the form, pay the fee and submit your passport.
                  Our Dubai office can review your documents with you before you submit them and help with itineraries
                  and reservations.
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

            {/* Rejection */}
            <Section
              id="rejection"
              title="Kosovo visa rejection: common reasons and how to prepare"
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
                If your application is refused, read the decision carefully and ask the mission about any review options.
                Do not reapply with the same documents without fixing the problem.
              </p>
            </Section>

            {/* Travel info */}
            <Section
              id="travel-information"
              title="Kosovo travel information"
              intro="Practical points to plan around once your visa plan is clear."
            >
              <CardGrid items={TRAVEL_INFO} />
              <p className="mt-6 text-sm leading-relaxed text-slate-600">
                Combining Kosovo with the region? See our{" "}
                <Link href="/our-services/visa/albania-visa-application" className={inlineLink}>
                  Albania visa guide
                </Link>{" "}
                and our{" "}
                <Link href="/our-services/visa/europe-visa-application" className={inlineLink}>
                  Europe visa application guide
                </Link>{" "}
                for multi-country trips.
              </p>
            </Section>

            {/* Sample itinerary */}
            <Section
              id="sample-itinerary"
              title="Sample 7-day Kosovo itinerary for your visa application"
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
                <Link href="/our-services/travel/flight-reservation" className={inlineLink}>
                  flight reservation service
                </Link>
                .
              </p>
            </Section>

            {/* Why Eammu */}
            <Section
              id="why-eammu"
              title="How Eammu Holidays can help"
              intro="Eammu Holidays is a travel and visa consultancy with offices in Dubai, Dhaka, Cumilla, Yerevan and Tbilisi. This is what we do for Kosovo applicants."
            >
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <CheckList items={EAMMU_SERVICES} />
              </div>
              <div className="mt-6">
                <Callout>
                  <strong>What we do not do:</strong> we are not the Kosovo government, an embassy or an official
                  representative, we do not issue visas, and we cannot guarantee approval or a processing time. Our role
                  is to help you prepare a clear and accurate application.
                </Callout>
              </div>
            </Section>

            {/* FAQ */}
            <Section
              id="faq"
              title="Kosovo visa FAQ"
              intro="Answers to common questions from applicants in Bangladesh and the UAE."
            >
              <div className="space-y-3">
                {FAQS.map((f) => (
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
              Last reviewed: {LAST_REVIEWED}. Visa rules, fees and processing times are set by the Kosovo authorities
              and can change. Always confirm with the official sources or the responsible mission.
            </p>
          </aside>
        </div>

        {/* Final CTA */}
        <section aria-labelledby="cta-title" className="bg-[#005a31]">
          <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8">
            <h2 id="cta-title" className="text-2xl font-bold text-white sm:text-3xl">
              Planning to apply for a Kosovo visa?
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