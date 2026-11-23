import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileText,
  Globe,
  Info,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wallet,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  CONSTANTS                                                                 */
/* -------------------------------------------------------------------------- */

const SITE_URL = "https://eammu.com";
const PAGE_URL = `${SITE_URL}/our-services/visa/india-visa-application`;
const OFFICIAL_PORTAL = "https://indianvisaonline.gov.in/evisa/";
const OFFICIAL_PORTAL_NAME = "indianvisaonline.gov.in";
const LAST_REVIEWED = "November 2026";
const WHATSAPP = "https://wa.me/37494810585";

const CONTACTS = [
  { label: "UAE support", display: "+971 50 707 8334", href: "tel:+971507078334" },
  { label: "Armenia office", display: "+374 94 810585", href: "tel:+37494810585" },
  { label: "Bangladesh hotline", display: "+880 1701 699 743", href: "tel:+8801701699743" },
  { label: "Email", display: "info@eammu.com", href: "mailto:info@eammu.com" },
];

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "visa-types", label: "Visa types" },
  { id: "requirements", label: "Requirements" },
  { id: "fees", label: "Fees" },
  { id: "processing", label: "Processing time" },
  { id: "process", label: "Application steps" },
  { id: "dubai", label: "From Dubai & UAE" },
  { id: "rejection", label: "Rejection reasons" },
  { id: "travel-info", label: "Travel information" },
  { id: "why-eammu", label: "Why Eammu" },
  { id: "faq", label: "FAQ" },
];

const SNAPSHOT = [
  {
    icon: Globe,
    label: "Application route",
    value: "e-Visa or regular visa, depending on nationality",
  },
  {
    icon: Wallet,
    label: "Government fee",
    value: "Country-specific, non-refundable",
  },
  {
    icon: Clock,
    label: "Official advice",
    value: "Apply at least 4 days before arrival",
  },
  {
    icon: ShieldCheck,
    label: "Passport",
    value: "6+ months validity, 2 blank pages",
  },
];

const VISA_TYPES = [
  {
    name: "e-Tourist Visa",
    route: "Online (e-Visa)",
    purpose:
      "Sightseeing, visiting friends or relatives, short recreational stays and short informal yoga programmes.",
    eligibility:
      "Only for nationalities listed on the official e-Visa portal. Not available for diplomatic or official passports.",
    stay:
      "Offered as 30-day, 1-year and 5-year options. Permitted continuous stay per visit depends on the option and nationality, so check the portal conditions.",
    docs: "Passport bio page, recent photo, return or onward ticket, funds for the stay.",
  },
  {
    name: "e-Business Visa",
    route: "Online (e-Visa)",
    purpose:
      "Business meetings, trade fairs, setting up ventures, recruiting manpower and similar business activity listed by the authorities.",
    eligibility:
      "Eligible nationalities only. Employment in India is not covered by this category.",
    stay: "Multiple-entry validity with a defined continuous stay limit. Confirm current limits on the portal.",
    docs: "Passport, photo, business card or email signature, invitation letter from the Indian host company.",
  },
  {
    name: "e-Medical Visa and e-Medical Attendant Visa",
    route: "Online (e-Visa)",
    purpose:
      "Medical treatment at recognised hospitals, plus visas for attendants accompanying the patient.",
    eligibility:
      "Eligible nationalities only. Treatment must be at a recognised hospital or centre.",
    stay: "Short-stay validity with limited entries. Attendant visas are linked to the patient visa.",
    docs: "Passport, photo, hospital letter confirming treatment, proof of funds.",
  },
  {
    name: "e-Conference Visa",
    route: "Online (e-Visa)",
    purpose:
      "Attending a conference, seminar or workshop organised by a government body or public-sector organisation.",
    eligibility:
      "Eligible nationalities, with the required clearance from the organiser or Indian authorities.",
    stay: "Single entry for a short period linked to the event.",
    docs: "Passport, photo, event invitation and any political clearance reference supplied by the organiser.",
  },
  {
    name: "Regular visa (sticker visa)",
    route: "Via Indian visa application centre",
    purpose:
      "Tourist, business, medical, employment, student, entry (X) and other categories, including all travellers whose passports are not eligible for the e-Visa.",
    eligibility:
      "Open to all nationalities. Many Bangladeshi passport holders apply for a regular visa through the Indian Visa Application Centre (IVAC) network, so confirm the route for your passport on the official portal.",
    stay: "Set by the visa category and the Indian authorities at issue.",
    docs: "Online form printout, passport, photos, category-specific supporting documents, appointment at the application centre.",
  },
];

const GENERAL_DOCS = [
  "Passport valid for at least six months from arrival, with at least two blank pages",
  "Clear scan of the passport bio page",
  "Recent passport-style photo that meets the portal specification",
  "Return or onward travel ticket",
  "Proof of accommodation or host details in India",
  "Evidence of funds for the stay",
];

const CHECKLISTS = [
  {
    title: "Bangladeshi applicants",
    tag: "Nationality-specific",
    items: [
      "Original machine-readable passport and photocopies of the data page",
      "Completed online visa application form and appointment confirmation, where applicable",
      "National ID card or birth registration certificate if requested",
      "Evidence of occupation, income and ties to Bangladesh",
      "Bank statements covering the period requested by the centre",
      "Invitation, hospital letter or hotel booking matching the stated purpose",
    ],
  },
  {
    title: "UAE residents",
    tag: "Residence-based",
    items: [
      "UAE residence visa valid for the whole travel period",
      "Emirates ID copy (front and back)",
      "Passport valid for six months or more with blank pages",
      "Recent UAE bank statements",
      "Return ticket and accommodation details",
      "Employer NOC or sponsor documents if your category requires them",
    ],
  },
  {
    title: "Employed applicants",
    tag: "Supporting evidence",
    items: [
      "Employer letter stating position, salary and approved leave",
      "Recent payslips",
      "Bank statements showing salary credits",
      "Company trade licence copy, where requested",
    ],
  },
  {
    title: "Business owners",
    tag: "Supporting evidence",
    items: [
      "Trade licence and company registration documents",
      "Business bank statements and personal bank statements",
      "Letter describing the business purpose of travel",
      "Invitation from the Indian company for business visits",
    ],
  },
  {
    title: "Self-employed applicants",
    tag: "Supporting evidence",
    items: [
      "Freelance licence, permit or tax registration where available",
      "Personal bank statements showing regular income",
      "Client contracts or invoices as evidence of work",
      "Short cover letter explaining the purpose and length of stay",
    ],
  },
  {
    title: "Sponsored applicants",
    tag: "Sponsor documents",
    items: [
      "Sponsor's passport and visa or residence copy",
      "Sponsor's bank statements and employment letter",
      "Proof of relationship, such as a marriage or birth certificate",
      "Sponsorship declaration letter with the sponsor's contact details",
    ],
  },
  {
    title: "Students",
    tag: "Supporting evidence",
    items: [
      "Enrolment letter or student ID from the institution",
      "No-objection or leave letter from the school or university",
      "Parent or guardian bank statements if funds are sponsored",
      "Parental consent letter for applicants under 18",
    ],
  },
  {
    title: "Family visitors",
    tag: "Visiting relatives",
    items: [
      "Details of the relative in India (name, address, contact number)",
      "Copy of the host's ID or Indian passport data page",
      "Proof of relationship where available",
      "Accommodation arrangements and return ticket",
    ],
  },
];

const FEE_ROWS = [
  {
    category: "Government visa fee",
    detail:
      "e-Tourist fees are published by the Bureau of Immigration as a country-wise schedule. For many nationalities, published figures have been US$10 or US$25 (30 days, depending on the month of travel), US$40 (1 year) and US$80 (5 years), but some nationalities pay different amounts. Regular visa fees are set separately.",
    who: "Government of India",
    note: "Check your passport's exact fee on the official schedule. Fees are non-refundable once paid.",
  },
  {
    category: "Bank or payment charges",
    detail:
      "The official portal can add card or bank transaction charges to the visa fee.",
    who: "Payment gateway",
    note: "Shown during payment on the official portal.",
  },
  {
    category: "Visa application centre charges",
    detail:
      "Regular visa applications submitted through an application centre can carry service and courier charges on top of the government fee.",
    who: "Application centre",
    note: "Confirm the current schedule with the centre.",
  },
  {
    category: "Eammu consultancy fee",
    detail:
      "Optional help with form review, document checking and itinerary planning. Quoted per case before you decide.",
    who: "Eammu Holidays",
    note: "Separate from every government fee. Contact us for a written quote.",
  },
  {
    category: "Translation and attestation",
    detail:
      "Only if a supporting document is not in English or needs certification.",
    who: "Third-party provider",
    note: "Varies by document.",
  },
  {
    category: "Travel insurance",
    detail:
      "Not a mandatory requirement for every visa category, but strongly recommended for medical and trip-cancellation cover.",
    who: "Insurer",
    note: "Depends on age, trip length and cover level.",
  },
  {
    category: "Flights and hotels",
    detail:
      "Flight tickets and accommodation are paid for travel itself, not for the visa.",
    who: "Airline and hotel",
    note: "Refundable or reservation-only options can lower upfront cost.",
  },
];

const STEPS = [
  {
    title: "Check which route applies to your passport",
    text: "Open the official e-Visa portal and confirm whether your nationality is eligible for an e-Visa. If it is not, you will need a regular visa through an Indian visa application centre.",
  },
  {
    title: "Select the right visa category",
    text: "Match the visa to your real purpose of travel: tourism, business, medical treatment or a conference. The category cannot be treated as interchangeable.",
  },
  {
    title: "Prepare your supporting documents",
    text: "Collect your passport scan, photo, tickets, accommodation details, financial evidence and any category-specific letters before opening the form.",
  },
  {
    title: "Complete the official application",
    text: "Fill in the form exactly as it appears in your passport. Mismatched names, dates or passport numbers are a common cause of delay.",
  },
  {
    title: "Pay the applicable government fee",
    text: "Pay on the official portal or at the application centre. The fee is non-refundable whatever the outcome.",
  },
  {
    title: "Submit the application",
    text: "Upload documents for an e-Visa, or attend your appointment and submit the passport for a regular visa.",
  },
  {
    title: "Monitor the application status",
    text: "Use the status tool on the official portal with your application ID. Respond promptly if the authorities request more information.",
  },
  {
    title: "Receive the decision and prepare to travel",
    text: "Carry a printed copy of the approval and your passport. Biometrics are captured at the Indian immigration desk on arrival for e-Visa travellers.",
  },
];

const REJECTION_REASONS = [
  {
    title: "Incomplete documentation",
    text: "Missing pages, unclear scans or documents that do not match the visa category slow the file down or stop it.",
  },
  {
    title: "Insufficient financial evidence",
    text: "Bank statements that do not show enough funds, or irregular deposits with no explanation, raise questions about how the trip will be paid for.",
  },
  {
    title: "Inconsistent application details",
    text: "Names, dates, addresses or employment details that differ between the form, passport and supporting letters are treated as discrepancies.",
  },
  {
    title: "Weak or unclear travel purpose",
    text: "A tourist application with no itinerary, or a business application with no host invitation, leaves the purpose unproven.",
  },
  {
    title: "Wrong visa category",
    text: "Applying for tourism while planning business or paid work is a mismatch the authorities can refuse.",
  },
  {
    title: "Previous immigration violations",
    text: "A history of overstays or breaches of visa conditions can influence the decision. Be accurate about previous travel.",
  },
];

const TRAVEL_INFO = [
  {
    title: "Entry points",
    text: "e-Visa holders must enter through designated airports and seaports named on the official portal. Check the current list against your flight route before booking.",
  },
  {
    title: "Best time to visit",
    text: "October to March is generally cooler across much of northern and central India, while the monsoon runs roughly from June to September. Regional climates differ widely, so match the season to your destination.",
  },
  {
    title: "Accommodation",
    text: "Keep a confirmed or reservable booking that matches your itinerary dates. Multi-city trips should list the first city of stay.",
  },
  {
    title: "Flights",
    text: "Dates on your ticket should fall within the visa validity. Reservation-only tickets can help you prepare an itinerary before a decision.",
  },
  {
    title: "Travel insurance",
    text: "Cover for medical expenses and trip disruption is advisable, particularly for longer stays or medical travel.",
  },
  {
    title: "Arrival formalities",
    text: "Check the official Bureau of Immigration guidance for any arrival card or declaration requirements before you fly.",
  },
];

const SERVICES = [
  "Visa consultation and route check",
  "Application guidance step by step",
  "Document checklist for your profile",
  "Document review before submission",
  "Travel itinerary assistance",
  "Flight reservation assistance",
  "Hotel booking assistance",
  "Travel insurance guidance",
  "Application support and status follow-up",
];

const FAQS = [
  {
    q: "Can I get an India visa on arrival?",
    a: "No general visa on arrival exists for India. Travellers either obtain an e-Visa online before departure, if their nationality is eligible, or apply for a regular visa through an Indian visa application centre.",
  },
  {
    q: "Can Bangladeshi passport holders apply for an e-Visa?",
    a: "Eligibility depends on the list of countries shown on the official e-Visa portal, which can change. Bangladeshi travellers have generally applied for regular visas through the IVAC network. Confirm the current position on the official portal before you pay any fee.",
  },
  {
    q: "Can UAE residents apply for an India e-Visa?",
    a: "UAE residency does not by itself determine eligibility. The nationality shown on your passport decides whether you can use the e-Visa. If you are eligible, you apply online. If not, you apply through the application centre serving the UAE.",
  },
  {
    q: "Where do I apply for the official e-Visa?",
    a: `The Government of India states that its official e-Visa website is ${OFFICIAL_PORTAL_NAME}. The e-Visa process is fully online and does not require an intermediary.`,
  },
  {
    q: "How much does an India visa cost?",
    a: "The government fee is country-specific and non-refundable. For many nationalities the published e-Tourist fees have been US$10 or US$25 for 30 days, US$40 for one year and US$80 for five years, though some passports pay different amounts. Always confirm on the official fee schedule.",
  },
  {
    q: "How long does an India visa take?",
    a: "Official guidance asks e-Visa applicants to apply at least four days before arrival. Actual time varies by nationality, category and verification. Regular visas often take longer because of the appointment and the review. Nobody can guarantee a timeline.",
  },
  {
    q: "Is the India visa fee refundable if the application is refused?",
    a: "No. The government fee is non-refundable once paid, whether or not the visa is granted.",
  },
  {
    q: "How long can I stay in India on an e-Tourist Visa?",
    a: "Stay depends on the option you hold (30-day, 1-year or 5-year) and on your nationality. The validity period and the permitted continuous stay are different things, so read the conditions on your approval.",
  },
  {
    q: "Do I need to visit a centre for an e-Visa?",
    a: "No. The e-Visa application is submitted online. Biometrics are captured by immigration officers when you arrive in India. A regular visa needs a visit to the application centre.",
  },
  {
    q: "Does Eammu Holidays guarantee approval?",
    a: "No. Eammu Holidays is a travel consultancy. We are not a government body or an embassy and cannot guarantee a decision. We help you understand requirements, organise documents and avoid avoidable mistakes.",
  },
];

/* -------------------------------------------------------------------------- */
/*  STRUCTURED DATA                                                           */
/* -------------------------------------------------------------------------- */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": `${SITE_URL}/#organization`,
      name: "Eammu Holidays",
      url: SITE_URL,
      email: "info@eammu.com",
      telephone: "+971507078334",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+971507078334",
          contactType: "customer support",
          areaServed: "AE",
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+8801701699743",
          contactType: "customer support",
          areaServed: "BD",
          availableLanguage: ["English", "Bengali"],
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "India Visa from Bangladesh & Dubai: Requirements, Fees & Application",
      description:
        "India visa guidance for Bangladeshi passport holders and UAE residents covering visa types, document checklists, fees, processing and application support.",
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", name: "Eammu Holidays", url: SITE_URL },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      about: { "@id": `${PAGE_URL}#service` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "India Visa Application",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "India visa application assistance",
      serviceType: "Visa consultation and application support",
      description:
        "Consultation, document checklist, document review and application guidance for India visa applications from Bangladesh and the UAE. Eammu Holidays is a private travel consultancy and not a government authority.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "Country", name: "Bangladesh" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      url: PAGE_URL,
    },
  ],
};

// Escape "<" so the serialized JSON can never close the script tag early.
const jsonLdString = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

/* -------------------------------------------------------------------------- */
/*  SMALL SERVER COMPONENTS                                                   */
/* -------------------------------------------------------------------------- */

function SectionHeading({ eyebrow, title, intro, id }) {
  return (
    <header className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#005a31]">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-3 h-1 w-12 rounded-full bg-[#ffb800]" />
      {intro ? <p className="mt-4 text-base leading-relaxed text-slate-600">{intro}</p> : null}
    </header>
  );
}

function CheckList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
          <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#005a31]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Notice({ children, title }) {
  return (
    <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-slate-700 sm:p-5">
      <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-amber-600" />
      <div>
        {title ? <p className="mb-1 font-semibold text-slate-900">{title}</p> : null}
        {children}
      </div>
    </div>
  );
}

function ButtonLink({ href, children, variant = "primary", external = false }) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a31]";
  const styles = {
    primary: "bg-[#005a31] text-white hover:bg-[#00472a]",
    accent: "bg-[#ffb800] text-slate-900 hover:bg-[#e6a600]",
    outline: "border border-slate-300 bg-white text-[#005a31] hover:border-[#005a31]",
  };
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a href={href} className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </a>
  );
}

function ContactPanel() {
  return (
    <div className="rounded-2xl bg-[#005a31] p-6 text-white shadow-lg sm:p-7">
      <h3 className="text-lg font-bold">Talk to Eammu Holidays</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/80">
        Ask about your passport, visa category and documents before you apply.
      </p>
      <ul className="mt-5 space-y-3">
        {CONTACTS.map((c) => (
          <li key={c.label}>
            <a href={c.href} className="block rounded-lg border border-white/15 px-4 py-3 transition-colors hover:bg-white/10">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#ffb800]">
                {c.label}
              </span>
              <span className="block break-words text-sm font-medium">{c.display}</span>
            </a>
          </li>
        ))}
      </ul>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#ffb800] px-4 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-white"
      >
        <MessageCircle aria-hidden="true" className="size-4" />
        Chat on WhatsApp
      </a>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                      */
/* -------------------------------------------------------------------------- */

export default function IndiaVisa() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />

      <main className="bg-white text-slate-800 antialiased">
        {/* ------------------------------ HERO ------------------------------ */}
        <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white pt-24 sm:pt-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-[#005a31] hover:underline">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-medium text-slate-800">
                  India Visa Application
                </li>
              </ol>
            </nav>

            <div className="grid items-center gap-10 pb-14 lg:grid-cols-12 lg:gap-14 lg:pb-20">
              <div className="lg:col-span-7">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-[#005a31]">
                  <ShieldCheck aria-hidden="true" className="size-3.5" />
                  Private travel consultancy. Not a government body.
                </p>

                <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#005a31] sm:text-4xl lg:text-5xl">
                  India Visa Application from Bangladesh and Dubai
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  Understand India visa requirements, fees, document checklists and
                  processing before you apply. Eammu Holidays helps Bangladeshi passport
                  holders and UAE residents choose the right route, prepare complete
                  documents and plan travel with confidence.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={WHATSAPP} variant="accent" external>
                    Ask about your visa on WhatsApp
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </ButtonLink>
                  <ButtonLink href={OFFICIAL_PORTAL} variant="outline" external>
                    Open the official e-Visa portal
                  </ButtonLink>
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  Information reviewed {LAST_REVIEWED}. Rules and fees change, so confirm
                  final details on the official portal.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                  <Image
                    src="/eammu_banner_four.webp"
                    alt="Eammu Holidays India visa application guidance for travellers from Bangladesh and Dubai"
                    width={1200}
                    height={630}
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------- SNAPSHOT ---------------------------- */}
        <section aria-label="Visa snapshot" className="border-b border-slate-100 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {SNAPSHOT.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <span className="rounded-lg bg-emerald-50 p-2 text-[#005a31]">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
                  <p className="mt-0.5 text-sm font-semibold leading-snug text-slate-900">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------- CONTENT ----------------------------- */}
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-20">
          <div className="min-w-0 space-y-20 lg:col-span-8">
            {/* Table of contents */}
            <nav aria-label="On this page" className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="mb-3 text-sm font-semibold text-slate-900">On this page</p>
              <ul className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                {TOC.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-[#005a31] hover:underline">
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* A. OVERVIEW */}
            <section id="overview" aria-labelledby="overview-h" className="scroll-mt-24">
              <SectionHeading
                id="overview-h"
                eyebrow="Overview"
                title="India visa overview"
                intro="A visa is the permission to enter India issued before you travel. The right route depends on your passport, your purpose and where you apply from."
              />

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">What is an India visa?</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    An India visa is an authorisation issued by the Government of India
                    that allows a foreign national to enter and stay for a stated purpose
                    and period. It is issued either electronically (e-Visa) or as a sticker
                    in the passport (regular visa). India is not part of the Schengen Area
                    and has its own separate visa system.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Who needs an India visa?</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    Most foreign nationals need a visa before entering India. A small
                    number of nationalities and special categories are treated differently,
                    so check your own passport against the official portal rather than
                    relying on general advice.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 p-5">
                    <h3 className="text-base font-semibold text-slate-900">
                      India visa for Bangladeshi citizens
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Bangladeshi applicants have generally applied through the Indian Visa
                      Application Centre (IVAC) network with an online form, supporting
                      documents and an appointment. Confirm the current route and document
                      list on the official portal before you book.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-5">
                    <h3 className="text-base font-semibold text-slate-900">
                      India visa for UAE residents and expatriates
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Living in the UAE does not change the route that applies to your
                      passport. Residents with e-Visa-eligible passports can apply online.
                      Others apply through the application centre that serves the UAE, and
                      a valid UAE residence permit is normally part of the file.
                    </p>
                  </div>
                </div>

                <Notice title="Official source">
                  The Government of India says its only official e-Visa website is{" "}
                  <a
                    href={OFFICIAL_PORTAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#005a31] underline"
                  >
                    {OFFICIAL_PORTAL_NAME}
                  </a>
                  . The e-Visa process is completed online and does not require a travel
                  agent. Eammu Holidays offers optional guidance and document support,
                  and we are not affiliated with any embassy or government authority.
                </Notice>
              </div>
            </section>

            {/* B. VISA TYPES */}
            <section id="visa-types" aria-labelledby="types-h" className="scroll-mt-24">
              <SectionHeading
                id="types-h"
                eyebrow="Visa categories"
                title="India visa types"
                intro="The e-Visa covers a limited set of categories. Anything outside them, such as employment or study, goes through the regular visa route."
              />
              <div className="grid gap-5 md:grid-cols-2">
                {VISA_TYPES.map((v, index) => (
                  <article
                    key={v.name}
                    className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${
                      index === VISA_TYPES.length - 1 ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="text-lg font-semibold text-slate-900">{v.name}</h3>
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-[#005a31]">
                        {v.route}
                      </span>
                    </div>
                    <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                      <div>
                        <dt className="font-semibold text-slate-900">Purpose</dt>
                        <dd className="text-slate-600">{v.purpose}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-900">Eligibility</dt>
                        <dd className="text-slate-600">{v.eligibility}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-900">Duration and stay</dt>
                        <dd className="text-slate-600">{v.stay}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-900">General requirements</dt>
                        <dd className="text-slate-600">{v.docs}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  Working, studying or living in India
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Employment, student and long-stay purposes are handled through regular
                  visa categories and the registration rules that follow after arrival.
                  Overseas Citizen of India (OCI) status is a separate status for people of
                  Indian origin and is not a tourist visa. Check the official portal
                  for the category and conditions that apply to you. For work abroad
                  elsewhere, see our guides to a{" "}
                  <Link href="/our-services/visa/work-permit" className="font-semibold text-[#005a31] underline">
                    work permit
                  </Link>{" "}
                  or a{" "}
                  <Link href="/our-services/visa/digital-nomad-visa" className="font-semibold text-[#005a31] underline">
                    digital nomad visa
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* C. REQUIREMENTS */}
            <section id="requirements" aria-labelledby="req-h" className="scroll-mt-24">
              <SectionHeading
                id="req-h"
                eyebrow="Documents"
                title="India visa requirements and document checklists"
                intro="Start with the general documents, then add the ones for your nationality and situation. The official portal and application centre decide the final list."
              />

              <div className="rounded-2xl border border-[#005a31]/20 bg-emerald-50/50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">General documents (most applicants)</h3>
                <p className="mt-1 text-sm text-slate-600">
                  These come from the official e-Visa instructions and common application practice.
                </p>
                <div className="mt-4">
                  <CheckList items={GENERAL_DOCS} />
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {CHECKLISTS.map((c) => (
                  <article key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-semibold text-slate-900">{c.title}</h3>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                        {c.tag}
                      </span>
                    </div>
                    <CheckList items={c.items} />
                  </article>
                ))}
              </div>

              <div className="mt-6">
                <Notice title="Photo and passport details">
                  Photos must follow the specification published on the official portal,
                  and the passport scan must be clear and complete. Enter your name, date
                  of birth and passport number exactly as printed in the passport.
                  The checklists above are Eammu&apos;s guidance for preparing a strong file.
                  They are not an official list.
                </Notice>
              </div>
            </section>

            {/* D. FEES */}
            <section id="fees" aria-labelledby="fees-h" className="scroll-mt-24">
              <SectionHeading
                id="fees-h"
                eyebrow="Costs"
                title="India visa fees"
                intro="Government fees and service costs are separate. We only list government figures that the official sources publish, and we mark everything else as variable."
              />
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <caption className="sr-only">India visa cost categories and who charges them</caption>
                  <thead className="bg-[#005a31] text-white">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">Cost</th>
                      <th scope="col" className="px-4 py-3 font-semibold">What to know</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Charged by</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {FEE_ROWS.map((r) => (
                      <tr key={r.category} className="align-top">
                        <th scope="row" className="px-4 py-4 font-semibold text-slate-900">
                          {r.category}
                        </th>
                        <td className="px-4 py-4 leading-relaxed text-slate-600">
                          {r.detail}
                          <span className="mt-1 block text-xs text-slate-500">{r.note}</span>
                        </td>
                        <td className="px-4 py-4 text-slate-700">{r.who}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Scroll the table sideways on small screens. Government fees change, so check the
                official fee schedule for your passport and travel month before paying.
              </p>
            </section>

            {/* E. PROCESSING */}
            <section id="processing" aria-labelledby="proc-h" className="scroll-mt-24">
              <SectionHeading
                id="proc-h"
                eyebrow="Timing"
                title="India visa processing time"
              />
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-semibold text-slate-900">Standard processing</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    The official guidance asks e-Visa applicants to apply at least four days
                    before arrival. Some approvals come back sooner, but there is no fixed
                    guarantee. Regular visas add an appointment and passport handling, so
                    allow more time.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-semibold text-slate-900">Additional verification</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Authorities can ask for more documents or clarification. This pauses the
                    file until you respond.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-semibold text-slate-900">Why times vary</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Nationality, visa category, season, public holidays, document quality
                    and payment status all affect how long a decision takes.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-semibold text-slate-900">When to apply</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Apply well ahead of your departure, but only after your dates are
                    firm. Do not buy non-refundable tickets until you have a decision.
                  </p>
                </div>
              </div>
            </section>

            {/* F. PROCESS */}
            <section id="process" aria-labelledby="steps-h" className="scroll-mt-24">
              <SectionHeading
                id="steps-h"
                eyebrow="Step by step"
                title="India visa application process"
              />
              <ol className="space-y-4">
                {STEPS.map((s, i) => (
                  <li key={s.title} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
                    <span
                      aria-hidden="true"
                      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#005a31] text-sm font-bold text-white"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-sm text-slate-600">
                Official links:{" "}
                <a href={OFFICIAL_PORTAL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#005a31] underline">
                  Government of India e-Visa portal
                </a>
                . Use only this site for the e-Visa form and payment.
              </p>
            </section>

            {/* G. DUBAI */}
            <section id="dubai" aria-labelledby="dubai-h" className="scroll-mt-24">
              <SectionHeading
                id="dubai-h"
                eyebrow="UAE residents"
                title="India visa from Dubai"
                intro="Eammu Holidays has a UAE support line, so many of our questions come from Bangladeshi passport holders and other expatriates living in Dubai and the other emirates."
              />
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-slate-900">Residence and passport</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Keep your UAE residence permit valid for the whole trip and for a
                    comfortable period afterwards. Bangladeshi passport holders in Dubai
                    should confirm the application route for their passport on the
                    official portal and check the current process of the application
                    centre serving the UAE.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-slate-900">Employment and salary documents</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    An employer letter with position, salary and leave approval, together
                    with recent payslips, shows stable ties to the UAE. Business owners
                    should add the trade licence.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-slate-900">Bank statements</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Statements should show regular income and a balance that matches the
                    length and cost of the trip. Explain large one-off deposits in a
                    short note.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-slate-900">Itinerary, hotels and insurance</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Prepare a travel itinerary, accommodation details and a return flight
                    reservation that match your visa dates. Travel insurance is advisable
                    even where not mandatory. See our{" "}
                    <Link href="/our-services/travel/flight-reservation" className="font-semibold text-[#005a31] underline">
                      flight reservation service
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-900">How Eammu Holidays can assist in the UAE</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  We check which route applies to your passport, review your documents
                  against a checklist, and help you arrange flights and accommodation.
                  If you also need residency documents in the UAE, read about the{" "}
                  <Link href="/our-services/visa/uae-residence-visa" className="font-semibold text-[#005a31] underline">
                    UAE residence visa
                  </Link>
                  . Planning a wider trip? Compare the{" "}
                  <Link href="/our-services/visa/schengen-visa" className="font-semibold text-[#005a31] underline">
                    Schengen visa
                  </Link>{" "}
                  and{" "}
                  <Link href="/our-services/visa/europe-visa-application" className="font-semibold text-[#005a31] underline">
                    Europe visa options
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* H. REJECTION */}
            <section id="rejection" aria-labelledby="rej-h" className="scroll-mt-24">
              <SectionHeading
                id="rej-h"
                eyebrow="Avoid mistakes"
                title="Why India visa applications are refused"
                intro="Authorities do not publish a full breakdown of reasons for every refusal. These are the practical issues that applicants most often need to fix."
              />
              <div className="grid gap-4 md:grid-cols-2">
                {REJECTION_REASONS.map((r) => (
                  <div key={r.title} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="font-semibold text-slate-900">{r.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{r.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[#005a31]/20 bg-emerald-50/50 p-6">
                <h3 className="font-semibold text-slate-900">How to prepare a stronger application</h3>
                <div className="mt-3">
                  <CheckList
                    items={[
                      "Choose the visa category that matches your real purpose",
                      "Check every name, date and number against the passport",
                      "Use clear, complete scans in the requested format",
                      "Provide an itinerary and accommodation that match your dates",
                      "Include supporting letters for employment, business or medical purposes",
                      "Answer any request for extra information quickly and accurately",
                    ]}
                  />
                </div>
                <p className="mt-4 text-xs text-slate-500">
                  Good preparation reduces avoidable errors. It does not guarantee approval, which is
                  decided only by the Indian authorities.
                </p>
              </div>
            </section>

            {/* I. TRAVEL INFO */}
            <section id="travel-info" aria-labelledby="travel-h" className="scroll-mt-24">
              <SectionHeading
                id="travel-h"
                eyebrow="Trip planning"
                title="India travel information for visa applicants"
                intro="Your visa file should match a believable trip. These points help you plan one."
              />
              <div className="grid gap-4 md:grid-cols-2">
                {TRAVEL_INFO.map((t) => (
                  <div key={t.title} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="font-semibold text-slate-900">{t.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{t.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-slate-600">
                Combining India with other destinations? See{" "}
                <Link href="/our-services/visa/europe-visa-application" className="font-semibold text-[#005a31] underline">
                  Europe visa application support
                </Link>
                .
              </p>
            </section>

            {/* J. WHY EAMMU */}
            <section id="why-eammu" aria-labelledby="why-h" className="scroll-mt-24">
              <SectionHeading
                id="why-h"
                eyebrow="Our role"
                title="Why choose Eammu Holidays for India visa support"
                intro="We are a private travel consultancy serving travellers from Bangladesh and the UAE. We explain the process clearly and keep official requirements separate from our own recommendations."
              />
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-slate-900">Services we can provide</h3>
                  <div className="mt-4">
                    <CheckList items={SERVICES} />
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-semibold text-slate-900">What we do not do</h3>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-600">
                    <li>We do not represent the Government of India or any embassy.</li>
                    <li>We do not guarantee approval or a processing time.</li>
                    <li>We do not control the government fee or the decision.</li>
                    <li>We recommend you apply on the official portal for e-Visas.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" aria-labelledby="faq-h" className="scroll-mt-24">
              <SectionHeading
                id="faq-h"
                eyebrow="Questions"
                title="India visa FAQ"
              />
              <div className="space-y-3">
                {FAQS.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-xl border border-slate-200 bg-white open:shadow-sm"
                  >
                    <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
                      <span>{f.q}</span>
                      <ChevronDown
                        aria-hidden="true"
                        className="size-5 shrink-0 text-[#005a31] transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <p className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* FINAL CTA */}
            <section
              aria-labelledby="cta-h"
              className="rounded-2xl bg-[#005a31] p-8 text-white sm:p-10"
            >
              <h2 id="cta-h" className="text-2xl font-bold">
                Not sure which India visa route applies to you?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85">
                Send us your nationality, purpose of travel and travel dates. We will explain
                the likely route and the documents to prepare.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={WHATSAPP} variant="accent" external>
                  <MessageCircle aria-hidden="true" className="size-4" />
                  WhatsApp us
                </ButtonLink>
                <a
                  href="tel:+971507078334"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Phone aria-hidden="true" className="size-4" />
                  Call UAE support
                </a>
                <a
                  href="mailto:info@eammu.com"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Mail aria-hidden="true" className="size-4" />
                  Email us
                </a>
              </div>
            </section>

            <p className="text-xs leading-relaxed text-slate-500">
              <FileText aria-hidden="true" className="mr-1 inline size-3.5 align-text-bottom" />
              Disclaimer: This page gives general information, reviewed {LAST_REVIEWED}, and is not legal
              or immigration advice. Visa rules, fees and eligibility are set by the Government of India and
              can change without notice. Eammu Holidays is a private travel consultancy and is not
              affiliated with the Government of India or any embassy.
            </p>
          </div>

          {/* ----------------------------- SIDEBAR ---------------------------- */}
          <aside aria-label="Contact Eammu Holidays" className="min-w-0 lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <ContactPanel />
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-base font-semibold text-slate-900">Related services</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <Link href="/our-services/visa/schengen-visa" className="text-[#005a31] hover:underline">
                      Schengen visa
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/visa/europe-visa-application" className="text-[#005a31] hover:underline">
                      Europe visa application
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/visa/uae-residence-visa" className="text-[#005a31] hover:underline">
                      UAE residence visa
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/visa/work-permit" className="text-[#005a31] hover:underline">
                      Work permit
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/visa/digital-nomad-visa" className="text-[#005a31] hover:underline">
                      Digital nomad visa
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/travel/flight-reservation" className="text-[#005a31] hover:underline">
                      Flight reservation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}