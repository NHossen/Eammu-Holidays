// app/travel-resources/how-to-track-visa-application/page.jsx
// Server Component. No 'use client'. FAQs use native <details>.

import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";
import {
  Search,
  CheckCircle2,
  AlertTriangle,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  Plus,
  FileText,
  ShieldCheck,
  ListChecks,
  Clock,
  Globe2,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────
const PAGE_URL = "https://eammu.com/how-to-track-visa-application";
const WHATSAPP = "https://wa.me/8801701699743";
const DATE_PUBLISHED = "2026-01-10"; // existing value
const DATE_MODIFIED = "2026-11-15"; // date of this rewrite and research review
const LAST_REVIEWED = "15 November 2026";
const PAGE_TITLE =
  "How to Track Visa Application Status Online from Bangladesh | Schengen, UK, USA, Canada, UAE | Eammu Holidays";
const PAGE_DESCRIPTION =
  "How to check your visa application status from Bangladesh: Schengen, UK, USA (CEAC), Canada, Dubai/UAE and Australia. Reference numbers, official portals, status meanings and what to do if it is delayed.";

const wa = (text) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://eammu.com"),
  title: { default: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "how to track visa application",
    "visa application status check",
    "check visa status online bangladesh",
    "vfs global track application",
    "uk visa status check",
    "usa visa status check ceac",
    "canada visa status check ircc",
    "schengen visa track application",
    "dubai visa status check",
    "how to check if visa is approved",
    "visa application reference number",
    "visa status pending what to do",
    "visa processing delay",
    "visa application tracker bangladesh",
  ],
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "How to Track Your Visa Application Status Online | Eammu Holidays",
    description:
      "Official portals, reference numbers and status meanings for Schengen, UK, USA, Canada, UAE and Australia visa applications.",
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_MODIFIED,
    images: [
      {
        url: "https://eammu.com/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "How to track a visa application, Eammu Holidays",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    title: "How to Track Your Visa Application Status | Eammu Holidays",
    description:
      "Where to check your visa status for each destination, what the status messages mean and what to do about delays.",
    images: ["https://eammu.com/preview-banner.webp"],
  },
  icons: { icon: "/emf.jpg", shortcut: "/emf.jpg", apple: "/emf.jpg" },
  category: "travel",
};

// ─── FAQ (single source for visible FAQ and FAQPage JSON-LD) ──────────────────
const faqs = [
  {
    q: "How can I track my visa application?",
    a: "Use the official channel for your destination and the reference number from your receipt. Depending on the country this is the visa application centre portal (such as VFS Global or TLScontact), a government account (such as IRCC), the US CEAC status checker, or the UAE issuing authority's portal. Always type the website address yourself and avoid look-alike sites.",
  },
  {
    q: "Which reference number do I need?",
    a: "It depends on the system. UK applications made overseas use a GWF reference number on the visa centre portal. US cases use an application ID or case number on CEAC together with the location and passport details. Canadian applications use your IRCC account and application number. UAE applications use the application, file or passport details on the relevant portal. Your receipt and confirmation emails show which one applies.",
  },
  {
    q: "Is there one tracker that works for every visa?",
    a: "No. Each country and often each application centre has its own system. The UK, for example, does not offer a public real-time visa tracker, so overseas applicants usually check milestones through the visa centre portal or ask UKVI through its enquiry service.",
  },
  {
    q: "How long does a visa take to process?",
    a: "It varies by destination, visa type, season and your own case. Use the official processing time information for your destination and visa type rather than a fixed number from a blog. For Schengen short-stay visas, the EU Visa Code sets a decision period that is normally 15 calendar days but can be extended in individual cases.",
  },
  {
    q: "What does Decision Made mean?",
    a: "It means a decision has been recorded, not that the visa was approved. Some systems do not show the outcome until your passport is returned or you receive an official notification. Wait for the official result before making non-refundable plans.",
  },
  {
    q: "My US case shows Refused. Is my visa denied?",
    a: "Not necessarily. The US State Department changed CEAC so that cases under additional administrative review under section 221(g) display as Refused. Read the written instructions the officer gave you at the interview and provide anything requested. If you were refused under section 214(b), that is a final refusal for that application. See our guide to the visa appeal and reapplication process.",
  },
  {
    q: "Where do I check a Dubai visa?",
    a: "Use the portal of the authority that issued the visa. Dubai-issued visas are checked on GDRFA Dubai. Visas issued through the federal system or other emirates are checked on ICP Smart Services. Your sponsor, airline or travel agent can tell you which one applies.",
  },
  {
    q: "My status has not changed for weeks. What should I do?",
    a: "First compare the time elapsed with the official processing time for your visa. If it is still within that period, wait. If it has passed, contact the visa centre or authority through its official channel with your reference number. Do not submit a duplicate application unless you are told to.",
  },
  {
    q: "The embassy asked for additional documents. What now?",
    a: "Read the request carefully, send exactly what is asked within the deadline and keep proof of submission. Incomplete or late responses can lead to refusal. Eammu Holidays can help you check that your documents are complete and consistent before you send them.",
  },
  {
    q: "Can someone speed up my visa for a fee?",
    a: "No individual can legitimately guarantee faster processing by an embassy. Some destinations offer official priority services for a published fee through official channels. Be careful of anyone claiming inside contacts or asking for payment to a personal account.",
  },
  {
    q: "How can I avoid fake tracking websites?",
    a: "Type the official address yourself, check the domain, and never enter passport details on a site reached through an unsolicited message. The domains named on this page are the official ones as of the review date, but always confirm on the visa centre or government site named on your receipt.",
  },
  {
    q: "What should I check when my visa is approved?",
    a: "Check your name, passport number, validity dates, number of entries, permitted stay and visa type against your plans. Report any error to the issuing office quickly, before you travel.",
  },
  {
    q: "What if my visa is refused?",
    a: "Read the refusal notice and note any deadline for appeal or review immediately. Not every country offers an appeal. See our visa appeal and reapplication guide and our common rejection reasons guide before deciding on a next step.",
  },
  {
    q: "Can Eammu Holidays help me understand my visa status?",
    a: "Yes. If you applied through or with Eammu Holidays, ask your consultant for updates. If you applied on your own, the team can help you work out which portal and reference number apply and explain what a message means. Eammu Holidays cannot see inside an embassy's decision process or guarantee an outcome.",
  },
];

// ─── Structured data ──────────────────────────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "How to Track Your Visa Application Status Online: Guide for Bangladeshi Applicants",
      description: PAGE_DESCRIPTION,
      image: "https://eammu.com/preview-banner.webp",
      inLanguage: "en",
      author: { "@type": "Organization", name: "Eammu Holidays", url: "https://eammu.com" },
      publisher: {
        "@type": "Organization",
        name: "Eammu Holidays",
        logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" },
      },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      mainEntityOfPage: PAGE_URL,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
        { "@type": "ListItem", position: 2, name: "Travel Resources", item: "https://eammu.com/travel-resources" },
        { "@type": "ListItem", position: 3, name: "How to Track Visa Application", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

// ─── Navigation ───────────────────────────────────────────────────────────────
const toc = [
  { id: "before-you-start", label: "What you need first" },
  { id: "by-destination", label: "Track by destination" },
  { id: "status-meanings", label: "What statuses mean" },
  { id: "processing-time", label: "How long to wait" },
  { id: "delays", label: "If it is delayed" },
  { id: "documents-requested", label: "Extra documents requested" },
  { id: "after-decision", label: "After the decision" },
  { id: "scams", label: "Avoiding fake sites" },
  { id: "eammu-help", label: "How Eammu helps" },
  { id: "faq", label: "FAQs" },
];

const relatedLinks = [
  { label: "Visa Processing Time Tracker", href: "/travel-resources/visa-processing-time-tracker" },
  { label: "Visa Delay Reasons and What to Do", href: "/travel-resources/visa-delay-reasons-what-to-do" },
  { label: "Visa Rejected, What to Do", href: "/travel-resources/visa-cancelled-what-to-do" },
  { label: "Can I Reapply After Rejection", href: "/travel-resources/can-i-reapply-after-visa-rejection" },
  { label: "Visa Appeal and Reapplication Guide", href: "/appeal-process-for-visa" },
  { label: "Common Visa Rejection Reasons", href: "/visa-rejection/common-reasons" },
  { label: "Visa Checklist Generator", href: "/travel-resources/visa-checklist-generator" },
  { label: "Visa Rejection Help", href: "/visa-rejection" },
  { label: "All Visa Services", href: "/visa" },
];

// ─── Tracking data ────────────────────────────────────────────────────────────
const preparation = [
  { t: "Your reference number", d: "Find the application, GWF, case or file number on your receipt, payment confirmation or emails. Save a photo of it." },
  { t: "The exact details you entered", d: "Many portals ask for your passport number, surname spelling, date of birth and email exactly as in the application." },
  { t: "The channel you used", d: "Know whether you applied through an embassy portal, a visa application centre such as VFS Global or TLScontact, or a sponsor or agent." },
  { t: "Access to your email and phone", d: "Updates and passport-ready notices often arrive by email or SMS. Check spam folders as well." },
];

const destinations = [
  {
    id: "schengen", flag: "🇪🇺", name: "Schengen Visa",
    where: "The visa application centre or consulate portal named on your receipt. Many Schengen states use external providers such as VFS Global or TLScontact, but this varies by country.",
    need: "The tracking or reference number on your submission receipt, plus the details the portal asks for.",
    steps: [
      "Open the tracking page of the centre or consulate that took your application.",
      "Enter the reference number and requested details exactly as on your receipt.",
      "Read the milestone shown and any collection or dispatch instructions.",
    ],
    note: "The EU Visa Code sets a decision period for short-stay visas that is normally 15 calendar days and can be extended in individual cases. Some centres only show milestones such as received, sent to the consulate or passport returned, not the decision itself.",
    links: [["VFS Global", "https://www.vfsglobal.com"], ["TLScontact", "https://www.tlscontact.com"], ["EU Home Affairs", "https://home-affairs.ec.europa.eu"]],
  },
  {
    id: "uk", flag: "🇬🇧", name: "UK Visa",
    where: "The UK does not run a public real-time visa tracker. If you applied from Bangladesh, check milestones on the visa application centre portal using your GWF reference. Applications made digitally may also appear in a UKVI account.",
    need: "GWF reference number (shown in your confirmation email and receipt) and the details the portal asks for.",
    steps: [
      "Open the tracking page of the application centre where you gave biometrics.",
      "Enter your GWF reference and requested details.",
      "If you need more than milestone updates, use the UKVI enquiry service on gov.uk. A fee may apply, so check the current terms.",
    ],
    note: "Milestones show progress, not an advance decision. Check gov.uk for the current processing time information for your visa type.",
    links: [["GOV.UK", "https://www.gov.uk"], ["VFS Global", "https://www.vfsglobal.com"]],
  },
  {
    id: "usa", flag: "🇺🇸", name: "USA Visa (CEAC)",
    where: "The State Department's CEAC visa status check at ceac.state.gov. You do not need to pay a third party.",
    need: "Application location, your application ID or case number, passport number and the first letters of your surname.",
    steps: [
      "Open ceac.state.gov yourself and choose the nonimmigrant visa status check.",
      "Select the location where you interviewed and enter your application ID or case number.",
      "Enter the passport and surname details and complete the security check.",
    ],
    note: "The State Department changed CEAC so that cases under additional administrative review under section 221(g) now display as Refused. Read the written instructions you were given at the interview. A 221(g) case can still be issued later, but a 214(b) refusal is final for that application.",
    links: [["CEAC visa status check", "https://ceac.state.gov"], ["travel.state.gov", "https://travel.state.gov"]],
  },
  {
    id: "canada", flag: "🇨🇦", name: "Canada Visa",
    where: "Your IRCC online account, where you can view the status of an application you submitted online.",
    need: "Your IRCC account login and your application or file number.",
    steps: [
      "Sign in to your IRCC account.",
      "Open your application and check the status and any messages.",
      "Look for requests such as biometrics, medical exams or extra documents, which have deadlines.",
    ],
    note: "Use the official IRCC processing time tool on canada.ca for current estimates for your application type. Messages in your account may be the only place a request appears, so check it regularly.",
    links: [["IRCC (canada.ca)", "https://www.canada.ca"]],
  },
  {
    id: "uae", flag: "🇦🇪", name: "Dubai / UAE Visa",
    where: "The authority that issued the visa. Dubai-issued visas are checked on GDRFA Dubai. Visas issued through federal channels or other emirates are checked on ICP Smart Services.",
    need: "Application reference, passport details or the file number, depending on the service. For Dubai you may be asked for details such as a transaction number and payment date.",
    steps: [
      "Ask your sponsor, airline or agent which authority issued the visa.",
      "Open the GDRFA Dubai or ICP Smart Services status page for that authority.",
      "Choose the visa or application status service and enter your details.",
    ],
    note: "UAE visas are often processed through a sponsor, so the sponsor may receive updates first. Confirm the exact steps on the official UAE portal.",
    links: [["GDRFA Dubai status inquiry", "https://smart.gdrfad.gov.ae/Public_Th/StatusInquiry_New.aspx"], ["ICP Smart Services", "https://smartservices.icp.gov.ae"], ["UAE government portal", "https://u.ae/en/information-and-services/visa-and-emirates-id/Apply-and-track-visa/track-visa-application-and-validity"]],
  },
  {
    id: "australia", flag: "🇦🇺", name: "Australia Visa",
    where: "Your ImmiAccount for application progress. VEVO lets you check the details and conditions of a visa that has already been granted.",
    need: "ImmiAccount login and your application reference. For VEVO, your passport details and visa reference.",
    steps: [
      "Sign in to ImmiAccount to see the status and any requests for information.",
      "Respond to any request within the time given.",
      "After a grant, use VEVO to confirm validity, entries and conditions.",
    ],
    note: "Check the Department of Home Affairs website for current processing time guidance for your subclass.",
    links: [["Department of Home Affairs", "https://immi.homeaffairs.gov.au"]],
  },
];

const statusGuide = [
  { s: "Application received or submitted", m: "Your application or biometrics were recorded. Nothing else is needed unless you are asked." },
  { s: "In process or under review", m: "The application is being assessed. Timing is outside your control. Compare elapsed time with the official processing time." },
  { s: "Additional documents or information requested", m: "The authority needs something more. Follow the instructions and deadline exactly. See the section on extra documents below." },
  { s: "Administrative processing (US)", m: "The consular officer needs further review. CEAC may display this as Refused under section 221(g). It is not always a final denial." },
  { s: "Decision made", m: "A decision has been recorded, but this does not tell you whether the visa was granted. Wait for the official result or your returned passport." },
  { s: "Passport dispatched or ready for collection", m: "Your passport is on its way back or ready at the centre. Check the outcome as soon as you have it." },
  { s: "Approved, granted or issued", m: "The visa has been granted. Check the details carefully before you travel." },
  { s: "Refused", m: "The application was not approved. Read the notice for reasons and any appeal or review deadline." },
];

const delaySteps = [
  { t: "Compare with the official processing time", d: "Use the official information for your destination and visa type. A case inside that period is not necessarily delayed." },
  { t: "Check that nothing is waiting for you", d: "Look at email (including spam), SMS, your account messages and the courier status for a request or a passport-ready notice." },
  { t: "Confirm your reference and details", d: "A wrong reference or a mistyped detail can make a portal show nothing." },
  { t: "Contact the official channel", d: "If the period has passed, contact the visa centre or authority through its official enquiry route, quoting your reference. Be concise." },
  { t: "Avoid duplicate applications", d: "Do not apply again or pay another fee unless an official notice tells you to." },
  { t: "Avoid non-refundable plans", d: "Hold off on non-refundable flights, bookings or resignations until you have an official decision." },
];

const requestedDocTips = [
  "Read the request in full and list every item asked for",
  "Send exactly what is requested, in the format and by the method stated",
  "Meet the deadline and keep proof of submission",
  "Make sure the new documents agree with your original application",
  "Do not add unrelated documents, and never submit false or altered documents",
];

const afterDecision = [
  { t: "If approved", d: "Check name, passport number, validity, entries, permitted stay and visa type. Report errors to the issuing office quickly. Read the entry conditions for your destination." },
  { t: "If refused", d: "Read the refusal notice carefully, note any deadline for review or appeal, and keep copies of everything. Not every country offers an appeal, and a fresh application is often the practical route." },
  { t: "If your case is on hold", d: "Follow the written instructions you were given and provide what is requested. Wait for the official result." },
];

const scamTips = [
  "Type the official website address yourself or use a link from a government or visa centre site.",
  "Check the domain before entering passport details.",
  "Do not trust messages promising faster approval for a personal payment.",
  "Never pay to a personal account for a visa decision.",
  "Official trackers like CEAC are free to use.",
  "Keep your reference numbers private.",
];

const services = [
  "Working out which portal and reference number apply to your application",
  "Explaining what a status message means in plain language",
  "Checking whether a reply to a document request is complete and consistent",
  "Guidance on next steps if a delay seems longer than expected",
  "Reviewing a refusal letter and explaining the options that may exist",
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function SectionHeading({ icon: Icon, title, children }) {
  return (
    <div className="mb-8">
      <div className="flex items-start gap-3">
        {Icon ? (
          <span className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#005a31]">
            <Icon className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
        ) : null}
        <h2 className="text-2xl font-extrabold leading-tight text-[#005a31] md:text-3xl">{title}</h2>
      </div>
      {children ? <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">{children}</p> : null}
    </div>
  );
}

function OfficialLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-[#005a31]/30 bg-white px-3 py-1.5 text-xs font-semibold text-[#005a31] hover:bg-[#005a31] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
    >
      {children}
      <ExternalLink className="h-3 w-3" aria-hidden="true" />
    </a>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TrackVisaApplicationPage() {
  const tocList = (
    <ol className="space-y-1 text-sm">
      {toc.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="block rounded-lg px-3 py-1.5 text-gray-700 hover:bg-[#005a31]/10 hover:text-[#005a31] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <style>{`
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
        details > summary::-webkit-details-marker { display: none; }
      `}</style>

      <main className="min-h-screen bg-[#f6f8f7] font-sans text-gray-800">
        {/* ── HERO (extra top space for the fixed site header) ── */}
        <section className="bg-gradient-to-br from-[#002d18] via-[#004526] to-[#006b3a] px-4 pb-16 pt-32 text-white md:pb-20 md:pt-44">
          <div className="mx-auto max-w-5xl text-center">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap justify-center gap-2 text-xs text-green-200">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/travel-resources" className="hover:text-white">Travel Resources</Link></li>
                <li aria-hidden="true">/</li>
                <li className="font-semibold text-white" aria-current="page">How to Track Visa Application</li>
              </ol>
            </nav>

            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold">
              <Search className="h-3.5 w-3.5 text-orange-300" aria-hidden="true" />
              Last reviewed {LAST_REVIEWED}
            </p>

            <h1 className="mb-6 text-3xl font-black leading-tight tracking-tight md:text-5xl">
              How to Track Your Visa Application Status Online: Guide for Bangladeshi Applicants
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-green-50 md:text-lg">
              Find the right official portal and reference number for Schengen, UK, USA, Canada, Dubai/UAE and
              Australia visas, understand what each status message means, and know what to do if your application
              seems delayed.
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={wa("I need help tracking my visa application")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto md:text-base"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Get Help With My Application
              </a>
              <a
                href="#by-destination"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/15 px-8 py-4 text-sm font-bold text-white hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto md:text-base"
              >
                Find My Tracking Portal
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-28 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="mb-2 px-3 text-sm font-bold text-[#005a31]">On this page</p>
              {tocList}
            </nav>
          </aside>

          <div className="min-w-0 space-y-16">
            <details className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm lg:hidden">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between font-bold text-[#005a31]">
                On this page
                <Plus className="h-5 w-5 text-orange-500" aria-hidden="true" />
              </summary>
              <nav aria-label="On this page (mobile)" className="mt-3">{tocList}</nav>
            </details>

            {/* ── BEFORE YOU START ── */}
            <section id="before-you-start" className="scroll-mt-28">
              <SectionHeading icon={ListChecks} title="What You Need Before You Track Your Visa" />
              <div className="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
                <p>
                  There is no single tracker for every visa. Each destination, and often each application centre,
                  runs its own system. After you submit your application you should receive a{" "}
                  <strong className="text-[#005a31]">reference, application or case number</strong>. That number
                  is your tracking key, so save it as soon as you receive it.
                </p>
                <p>
                  Processing times change with the destination, visa type and season. For general timelines see our{" "}
                  <Link href="/travel-resources/visa-processing-time-tracker" className="font-semibold text-[#005a31] underline hover:text-orange-600">
                    visa processing time tracker
                  </Link>
                  , and always compare with the official information for your destination.
                </p>
              </div>
              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                {preparation.map((p) => (
                  <li key={p.t} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                    <h3 className="mb-1 text-base font-black text-[#005a31]">{p.t}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{p.d}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── BY DESTINATION ── */}
            <section id="by-destination" className="scroll-mt-28">
              <SectionHeading icon={Globe2} title="How to Track a Visa Application by Destination">
                Each guide names the official channel, what you need and what to expect. Policies and portals
                change, so confirm on the website named on your receipt. Reviewed {LAST_REVIEWED}.
              </SectionHeading>

              <nav aria-label="Jump to a destination" className="mb-8 flex flex-wrap gap-2">
                {destinations.map((d) => (
                  <a key={d.id} href={`#track-${d.id}`} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-[#005a31] hover:text-[#005a31] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
                    {d.name}
                  </a>
                ))}
              </nav>

              <div className="space-y-6">
                {destinations.map((d) => (
                  <article key={d.id} id={`track-${d.id}`} className="scroll-mt-28 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 flex items-center gap-3 text-xl font-black text-gray-900">
                      <span aria-hidden="true" className="text-2xl">{d.flag}</span>
                      {d.name}
                    </h3>
                    <dl className="space-y-3 text-sm leading-relaxed text-gray-600">
                      <div><dt className="font-bold text-[#005a31]">Where to check</dt><dd>{d.where}</dd></div>
                      <div><dt className="font-bold text-[#005a31]">What you need</dt><dd>{d.need}</dd></div>
                    </dl>
                    <h4 className="mb-2 mt-4 text-sm font-bold text-gray-900">Steps</h4>
                    <ol className="list-decimal space-y-1 pl-5 text-sm leading-relaxed text-gray-600">
                      {d.steps.map((s) => (<li key={s}>{s}</li>))}
                    </ol>
                    <p className="mt-4 rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-600">
                      <strong className="text-gray-900">Good to know: </strong>{d.note}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {d.links.map(([label, href]) => (
                        <OfficialLink key={href} href={href}>{label}</OfficialLink>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* ── STATUS MEANINGS ── */}
            <section id="status-meanings" className="scroll-mt-28">
              <SectionHeading icon={FileText} title="What Each Visa Status Message Means">
                Wording differs between systems, but most messages fall into these groups.
              </SectionHeading>
              <ul className="space-y-3">
                {statusGuide.map((s) => (
                  <li key={s.s} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                    <h3 className="mb-1 text-sm font-black text-[#005a31]">{s.s}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{s.m}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── PROCESSING TIME ── */}
            <section id="processing-time" className="scroll-mt-28">
              <SectionHeading icon={Clock} title="How Long Should You Wait?">
                Because processing times change, we do not give fixed numbers that could go out of date.
              </SectionHeading>
              <div className="space-y-4 text-base leading-relaxed text-gray-700">
                <p>
                  Use the official processing time information for your destination and visa type: for example the
                  processing time tools on canada.ca and gov.uk, or the guidance on your embassy or visa centre
                  site. For Schengen short-stay visas the EU Visa Code sets a decision period that is normally 15
                  calendar days and can be extended in individual cases.
                </p>
                <p>
                  Your own case can take longer if extra checks, interviews or documents are needed. Peak travel
                  seasons also affect appointment availability and processing, so apply early.
                </p>
              </div>
            </section>

            {/* ── DELAYS ── */}
            <section id="delays" className="scroll-mt-28">
              <SectionHeading icon={AlertTriangle} title="What to Do If Your Visa Status Has Not Changed">
                More background is in our guide to{" "}
                <Link href="/travel-resources/visa-delay-reasons-what-to-do" className="font-semibold text-[#005a31] underline hover:text-orange-600">
                  visa delay reasons and what to do
                </Link>
                .
              </SectionHeading>
              <ol className="space-y-3">
                {delaySteps.map((d, i) => (
                  <li key={d.t} className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#005a31] text-sm font-black text-white">{i + 1}</span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{d.t}</p>
                      <p className="text-sm leading-relaxed text-gray-600">{d.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* ── DOCUMENTS REQUESTED ── */}
            <section id="documents-requested" className="scroll-mt-28">
              <SectionHeading icon={FileText} title="If the Embassy Asks for Additional Documents" />
              <ul className="grid gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:grid-cols-2">
                {requestedDocTips.map((t) => (
                  <li key={t} className="flex gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#005a31]" aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── AFTER DECISION ── */}
            <section id="after-decision" className="scroll-mt-28">
              <SectionHeading icon={ShieldCheck} title="After the Decision: Approved, Refused or On Hold" />
              <div className="grid gap-4 md:grid-cols-3">
                {afterDecision.map((a) => (
                  <article key={a.t} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                    <h3 className="mb-1 text-base font-black text-[#005a31]">{a.t}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{a.d}</p>
                  </article>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                If you were refused, read our{" "}
                <Link href="/appeal-process-for-visa" className="font-semibold text-[#005a31] underline hover:text-orange-600">visa appeal and reapplication guide</Link>{" "}
                and{" "}
                <Link href="/visa-rejection/common-reasons" className="font-semibold text-[#005a31] underline hover:text-orange-600">common visa rejection reasons</Link>.
              </p>
            </section>

            {/* ── SCAMS ── */}
            <section id="scams" className="scroll-mt-28">
              <SectionHeading icon={AlertTriangle} title="Avoid Fake Tracking Websites and Visa Scams" />
              <ul className="grid gap-3 rounded-2xl border border-red-100 bg-white p-6 shadow-sm sm:grid-cols-2">
                {scamTips.map((t) => (
                  <li key={t} className="flex gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#005a31]" aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── EAMMU HELP ── */}
            <section id="eammu-help" className="scroll-mt-28 rounded-3xl border border-green-100 bg-white p-6 shadow-sm md:p-10">
              <SectionHeading icon={ShieldCheck} title="How Eammu Holidays Can Help">
                If you applied with Eammu Holidays, ask your consultant for updates. If you applied on your own,
                the team can help you make sense of where your application stands.
              </SectionHeading>
              <ul className="grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#005a31]" aria-hidden="true" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm leading-relaxed text-gray-700">
                Eammu Holidays cannot see inside an embassy decision, speed up processing, guarantee approval or
                provide legal representation. Final decisions remain with the relevant immigration authority.
              </p>
            </section>

            {/* ── FAQ ── */}
            <section id="faq" className="scroll-mt-28">
              <h2 className="mb-8 text-center text-2xl font-black text-[#005a31] md:text-3xl">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((f) => (
                  <details key={f.q} className="group rounded-2xl border border-gray-200 bg-white p-5 open:border-orange-300">
                    <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#005a31]">
                      <span>{f.q}</span>
                      <Plus className="h-5 w-5 flex-shrink-0 text-orange-500 transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* ── RELATED ── */}
            <section aria-labelledby="related-heading">
              <h2 id="related-heading" className="mb-6 text-center text-xl font-black text-[#005a31]">Related Visa Resources</h2>
              <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Related visa resources">
                {relatedLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-600 shadow-sm hover:border-[#005a31] hover:text-[#005a31] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </section>

            {/* ── CTA ── */}
            <section className="rounded-3xl bg-[#005a31] p-8 text-center text-white md:p-12">
              <h2 className="mb-4 text-2xl font-black text-orange-300 md:text-3xl">Applied and Unsure About Your Status?</h2>
              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-green-50 md:text-lg">
                Tell Eammu Holidays which destination you applied for and what your portal shows, and the team can
                help you understand the message and the sensible next step.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={wa("I need help understanding my visa application status")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto md:text-base"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Get Application Help on WhatsApp
                </a>
                <Link
                  href="/visa"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/15 px-8 py-4 text-sm font-bold text-white hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto md:text-base"
                >
                  View All Visa Services
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-green-100">
                General information, not legal advice. Portals and rules change. Last reviewed {LAST_REVIEWED}.
              </p>
            </section>
          </div>
        </div>
      </main>

      <HomeSeoLinks />
    </>
  );
}