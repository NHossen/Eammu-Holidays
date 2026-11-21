// app/travel-resources/how-much-bank-balance-needed-for-visa/page.jsx
// Server Component. No 'use client'. FAQs use native <details>.

import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";
import {
  Wallet,
  CheckCircle2,
  AlertTriangle,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  Plus,
  FileText,
  ShieldCheck,
  ListChecks,
  Users,
  Globe2,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────
const PAGE_URL = "https://eammu.com/how-much-bank-balance-needed-for-visa";
const WHATSAPP = "https://wa.me/8801701699743";
const DATE_PUBLISHED = "2026-01-10"; // existing value
const DATE_MODIFIED = "2026-11-15"; // date of this rewrite and research review
const LAST_REVIEWED = "15 November 2026";
const PAGE_TITLE =
  "How Much Bank Balance Is Needed for a Visa? Country-Wise Guide for Bangladesh | Eammu Holidays";
const PAGE_DESCRIPTION =
  "How much bank balance do you need for a visa from Bangladesh? Verified rules for Schengen, UK, USA, Canada, UAE, Australia, Malaysia and Thailand, plus how to calculate your own funds.";

const wa = (text) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://eammu.com"),
  title: { default: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "how much bank balance needed for visa",
    "minimum bank balance for visa bangladesh",
    "bank balance requirement for schengen visa",
    "bank balance for uk visa bangladesh",
    "bank balance for canada visa bangladesh",
    "how much money needed for usa visa",
    "bank balance for dubai visa bangladesh",
    "bank balance for australia visa",
    "bank balance for malaysia visa bangladesh",
    "bank balance for thailand visa bangladesh",
    "how much money show for visa bangladesh",
    "proof of funds for visa",
    "bank solvency certificate for visa",
    "financial requirement for tourist visa",
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
    title: "How Much Bank Balance Is Needed for a Visa? | Eammu Holidays",
    description:
      "What visa officers really check in your bank account, with verified country rules and a simple way to calculate your own funds.",
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_MODIFIED,
    images: [
      {
        url: "https://eammu.com/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "How much bank balance is needed for a visa, Eammu Holidays",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    title: "How Much Bank Balance Is Needed for a Visa? | Eammu Holidays",
    description:
      "Country-wise proof of funds guide for Bangladeshi visa applicants. Verified rules, no guesswork.",
    images: ["https://eammu.com/preview-banner.webp"],
  },
  icons: { icon: "/emf.jpg", shortcut: "/emf.jpg", apple: "/emf.jpg" },
  category: "travel",
};

// ─── FAQ (single source for visible FAQ and FAQPage JSON-LD) ──────────────────
const faqs = [
  {
    q: "How much bank balance is needed for a visa from Bangladesh?",
    a: "There is no single amount. Many countries, including the UK, USA, Canada and Australia, do not publish a fixed minimum for visitor visas. They expect you to show enough money for your whole trip and enough income or savings to support the plan. Some, such as Thailand, publish a specific amount. Check the official rules for your destination and visa type.",
  },
  {
    q: "Is there a minimum bank balance for a UK visitor visa?",
    a: "No. The Standard Visitor route has no fixed minimum balance. You must show you can pay for your trip and accommodation without working or using public funds. The 28-day holding rule you may see online belongs to other routes such as student visas, so do not apply it to a visitor application.",
  },
  {
    q: "How much money do I need to show for a Schengen visa?",
    a: "Schengen states use daily reference amounts for means of subsistence, and they differ by country and sometimes by accommodation type. Reported examples include 45 euros per day for Germany, 55 euros for the Netherlands and 120 euros for France without accommodation proof (65 euros with a hotel booking). These are reference amounts, not a bank balance rule, so confirm them on the official European Commission table and the consulate website.",
  },
  {
    q: "Is there a fixed bank balance for a USA B1/B2 visa?",
    a: "No fixed amount is published. The consular officer assesses whether you can fund the trip and whether your finances, work, family and other ties make it likely you will return to Bangladesh. A balance on its own does not decide the outcome.",
  },
  {
    q: "How much money do I need for a Canada visitor visa?",
    a: "Canada does not set one amount for all visitors. Officers consider the length and purpose of your trip, the estimated costs and whether your funds and income make the plan realistic. Show your own funds or a sponsor's funds with clear evidence.",
  },
  {
    q: "How much money do I need for a Thailand tourist visa?",
    a: "Thai guidance for a tourist visa is 20,000 baht per person or 40,000 baht per family. The VFS Thailand checklist for Bangladesh converts this to 60,000 taka per person or 120,000 taka per family and asks for an original bank statement and bank solvency letter. Requirements can change, so check the latest checklist before applying.",
  },
  {
    q: "How many months of bank statements do I need?",
    a: "It depends on the destination and visa type. Some checklists ask for three months and others for six. For example, Thai e-visa guidance refers to three months while the VFS Bangladesh checklist refers to six. Follow the checklist for your exact visa and provide longer history if it genuinely helps explain your finances.",
  },
  {
    q: "Can I deposit money just before applying?",
    a: "Large last-minute deposits are a common concern for officers because they do not show stable finances. If a deposit is genuine, such as a property sale or business payment, keep documents showing its source. A steady history of income and savings is more convincing than a high balance created shortly before submission.",
  },
  {
    q: "Can someone else sponsor my trip?",
    a: "Often yes, but you must follow the rules of the destination. A sponsor usually needs to provide their own bank statements, proof of income, a sponsorship or support letter and proof of relationship to you. The officer will assess whether the sponsor can genuinely cover the costs.",
  },
  {
    q: "What is a bank solvency certificate and do I need one?",
    a: "A bank solvency certificate is a letter from your bank confirming your balance on a certain date. Some checklists require one alongside statements, as the Thailand checklist for Bangladesh does, while others do not. It does not replace the transaction history that statements show.",
  },
  {
    q: "Does a high balance guarantee visa approval?",
    a: "No. Officers also consider your travel purpose, employment or business, ties to Bangladesh, travel history and the consistency of your documents. A high balance with an unclear source or weak ties can still lead to refusal.",
  },
  {
    q: "What if my bank balance is low?",
    a: "Consider whether the trip is realistic for your income, shorten or simplify the plan, or use a genuine sponsor with proper documents. Do not borrow money temporarily just for the statement, as officers can see unexplained deposits and short-term funds.",
  },
  {
    q: "Should I show a fixed deposit, savings or other assets?",
    a: "Genuine savings, fixed deposits, property or business records can support your application when they are documented and consistent with your income. Provide them only if they are relevant to the checklist and your circumstances.",
  },
  {
    q: "My visa was refused because of finances. What should I do?",
    a: "Read the refusal letter, identify the exact financial concern, and allow time for genuine improvement and clear documentation before reapplying. See our guide to the visa appeal and reapplication process for the options that may be available.",
  },
  {
    q: "Can Eammu Holidays check my bank statement before I apply?",
    a: "Yes. Eammu Holidays can review your statements and documents, point out possible concerns such as unexplained deposits or inconsistencies, and advise on presentation. Eammu Holidays cannot guarantee approval, and final decisions rest with the immigration authority.",
  },
];

// ─── Structured data ──────────────────────────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "How Much Bank Balance Is Needed for a Visa? Country-Wise Guide for Bangladeshi Applicants",
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
        { "@type": "ListItem", position: 3, name: "How Much Bank Balance for Visa", item: PAGE_URL },
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
  { id: "short-answer", label: "The short answer" },
  { id: "what-officers-check", label: "What officers check" },
  { id: "country-guide", label: "Country-wise requirements" },
  { id: "calculate", label: "Calculate your funds" },
  { id: "statements", label: "Statements and solvency" },
  { id: "applicant-types", label: "By applicant type" },
  { id: "sponsor", label: "Sponsor funds" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "preparation", label: "Preparation plan" },
  { id: "eammu-help", label: "How Eammu helps" },
  { id: "faq", label: "FAQs" },
];

const relatedLinks = [
  { label: "Bank Statement Preparation Guide", href: "/travel-resources/bank-statement-for-visa-how-to-prepare" },
  { label: "Bank Solvency Certificate Guide", href: "/travel-resources/bank-solvency-certificate-for-visa" },
  { label: "Sponsor Financial Documents", href: "/travel-resources/sponsor-financial-documents-for-visa" },
  { label: "Bank Statement for Visa Overview", href: "/travel-resources/bank-statement-for-visa" },
  { label: "Invitation Letter Sample", href: "/travel-resources/invitation-letter-sample-for-visa" },
  { label: "Visa Checklist Generator", href: "/travel-resources/visa-checklist-generator" },
  { label: "Common Visa Rejection Reasons", href: "/visa-rejection/common-reasons" },
  { label: "Visa Appeal and Reapplication Guide", href: "/appeal-process-for-visa" },
  { label: "Visa Rejection Help", href: "/visa-rejection" },
  { label: "All Visa Services", href: "/visa" },
];

// ─── Country data (only verified figures are given as numbers) ────────────────
const countries = [
  {
    id: "schengen", flag: "🇪🇺", name: "Schengen Visa",
    fixed: "No single bank balance. Each state uses daily reference amounts.",
    how: "Consulates compare your funds with the daily reference amount for the state, the length of stay and your accommodation arrangements, then look at your income and statement history.",
    tips: "Reported examples: Germany 45 euros per day, Netherlands 55 euros per day, France 120 euros per day without accommodation proof or 65 euros with a hotel booking. These are reference amounts for means of subsistence, not a required balance. Confirm current figures on the European Commission table and your consulate's website. Show comfortably more than the minimum for your trip.",
    links: [["European Commission, Home Affairs", "https://home-affairs.ec.europa.eu"]],
  },
  {
    id: "uk", flag: "🇬🇧", name: "UK Standard Visitor Visa",
    fixed: "No fixed minimum balance.",
    how: "You must show you can pay for your trip and accommodation without working or using public funds. The funds are judged against the realistic cost of your own trip.",
    tips: "Do not apply the 28-day holding rule you see on student-visa pages. For visitors, a clear statement history, explained deposits and evidence of income are what help. If someone else pays, provide their evidence and relationship proof.",
    links: [["Standard Visitor visa (gov.uk)", "https://www.gov.uk/standard-visitor"]],
  },
  {
    id: "usa", flag: "🇺🇸", name: "USA Visa (B1/B2)",
    fixed: "No fixed amount is published.",
    how: "The officer looks at whether you can fund the trip and whether your job, family, property and other ties suggest you will return to Bangladesh.",
    tips: "Bring organised proof of income and savings that match what you say at the interview. A balance that does not fit your profile can raise questions rather than answer them.",
    links: [["U.S. Department of State (travel.state.gov)", "https://travel.state.gov"]],
  },
  {
    id: "canada", flag: "🇨🇦", name: "Canada Visitor Visa",
    fixed: "No single amount for all visitors.",
    how: "Officers consider trip length and purpose, estimated costs, and whether your funds and income make the plan realistic. Sponsored trips need clear sponsor evidence.",
    tips: "Show consistent finances over time, employment or business proof and a coherent budget. Explain unusual deposits in writing with supporting documents.",
    links: [["IRCC (canada.ca)", "https://www.canada.ca"]],
  },
  {
    id: "uae", flag: "🇦🇪", name: "Dubai / UAE Visa",
    fixed: "Requirements depend on the visa type and the issuing channel.",
    how: "Tourist visas are often arranged through airlines, agents or sponsors, and the documents they request can differ. Confirm what applies to your visa.",
    tips: "Ask the issuing channel or check the official UAE portals for the current requirements instead of relying on a general figure you read online.",
    links: [["ICP (icp.gov.ae)", "https://icp.gov.ae"], ["GDRFA Dubai (gdrfad.gov.ae)", "https://gdrfad.gov.ae"]],
  },
  {
    id: "australia", flag: "🇦🇺", name: "Australia Visitor Visa",
    fixed: "No single amount is set for all applicants.",
    how: "Home Affairs assesses whether you have enough funds for your stay and whether you intend to stay temporarily.",
    tips: "Document your funds, employment or business, family and other ties and your trip costs. Check the visa subclass page for the current requirements.",
    links: [["Department of Home Affairs (immi.homeaffairs.gov.au)", "https://immi.homeaffairs.gov.au"]],
  },
  {
    id: "malaysia", flag: "🇲🇾", name: "Malaysia Visa",
    fixed: "We could not verify a fixed published amount. Check your visa channel.",
    how: "Requirements depend on the visa type and application channel.",
    tips: "Check the current checklist on the Malaysian Immigration Department site or the channel you use, and prepare statements and a trip budget that support the stay.",
    links: [["Malaysia Immigration Department (imi.gov.my)", "https://www.imi.gov.my"]],
  },
  {
    id: "thailand", flag: "🇹🇭", name: "Thailand Visa",
    fixed: "Published: 20,000 baht per person or 40,000 baht per family for a tourist visa.",
    how: "The VFS Thailand checklist for Bangladesh lists 60,000 taka per person or 120,000 taka per family, with an original bank statement and bank solvency letter. Thai e-visa guidance refers to three months of statements while the VFS checklist refers to six, so use the version for your channel.",
    tips: "Thailand's tourist visa and visa-on-arrival amounts differ, and rules can change. Confirm on the Thai e-visa site or your VFS checklist before you apply.",
    links: [["Thailand e-Visa (thaievisa.go.th)", "https://thaievisa.go.th"]],
  },
];

const glanceRows = [
  ["Schengen", "Daily reference amounts by state", "Varies by consulate"],
  ["UK (visitor)", "No fixed minimum", "No set period for visitors"],
  ["USA (B1/B2)", "No fixed amount", "Bring recent statements"],
  ["Canada", "No single amount", "Check your checklist"],
  ["UAE", "Depends on visa and channel", "Check the issuing channel"],
  ["Australia", "No single amount", "Check the subclass page"],
  ["Malaysia", "Not verified here", "Check the current checklist"],
  ["Thailand", "20,000 baht per person (tourist visa)", "3 or 6 months, depending on the channel"],
];

const officerChecks = [
  { t: "Source of funds", d: "Salary, business income, savings or a genuine sponsor. Officers want to understand where money came from." },
  { t: "Consistency over time", d: "Regular credits and ordinary spending suggest real finances. A dormant account with a sudden spike raises questions." },
  { t: "Fit with your profile", d: "Your balance should make sense next to your job, income, age and the trip you describe." },
  { t: "Cost of this trip", d: "Flights, accommodation, daily costs, insurance and fees compared with what you can pay." },
  { t: "Ties to Bangladesh", d: "Money is one part of the picture. Work, business, family and property also matter." },
  { t: "Document authenticity", d: "Statements should be genuine, complete, consistent and issued by your bank in the required format." },
];

const costComponents = [
  "Return flights and any internal transport",
  "Accommodation for every night of the stay",
  "Daily food, local transport and activities",
  "Travel insurance where required",
  "Visa, service and biometric fees",
  "A reasonable buffer for unexpected costs",
];

const applicantTypes = [
  { t: "Salaried employees", d: "Salary credits that match your pay slips and employment letter, plus approved leave dates." },
  { t: "Business owners", d: "Trade licence, tax records, business bank statements and personal statements that agree with each other." },
  { t: "Students", d: "Usually funded by a parent or guardian. Provide the sponsor's documents and proof of relationship, and proof of your enrolment." },
  { t: "Freelancers and self-employed", d: "Contracts, invoices, tax records and bank history that show regular income." },
  { t: "Homemakers and dependants", d: "Usually supported by a spouse or family member. Provide their statements, income proof and proof of relationship." },
  { t: "Retired applicants", d: "Pension or savings records and any family support documents." },
];

const sponsorDocs = [
  "Sponsor's recent bank statements",
  "Proof of the sponsor's income or business",
  "Sponsorship or support letter stating what they will pay",
  "Proof of relationship to the applicant",
  "Copy of the sponsor's identity document",
  "Sponsor's immigration status, if they live abroad",
];

const mistakes = [
  { t: "Depositing a large sum just before applying", d: "It can look like temporary funds. Keep documents for any genuine large deposit." },
  { t: "Using borrowed money for the statement", d: "Short-term funds that leave the account soon after can damage credibility." },
  { t: "Statements that do not match other documents", d: "Income, employer and address details should agree across the whole file." },
  { t: "Showing only the minimum", d: "A trip that barely fits the minimum leaves no room for the officer's doubts." },
  { t: "Altered or edited statements", d: "Never edit or fabricate a statement. This can lead to a misrepresentation finding that affects future applications." },
  { t: "Relying on a figure from a social media post", d: "Rules change and differ by visa type. Use the official checklist." },
];

const prepPlan = [
  { t: "Choose the destination and visa type", d: "Then read the official checklist for it. Note any published amounts, statement period and bank letter requirements." },
  { t: "Estimate your trip cost", d: "Add flights, accommodation, daily costs, insurance and fees. Compare it with your income and savings." },
  { t: "Review your statements", d: "Mark every large credit and prepare a note and proof for each one." },
  { t: "Decide whether you need a sponsor", d: "If yes, collect the sponsor's documents and relationship proof early." },
  { t: "Request bank documents", d: "Ask for statements and any solvency letter in the format your checklist requires, with the bank's stamp or signature where needed." },
  { t: "Check consistency", d: "Compare names, dates, income and employer details across forms, letters and statements." },
  { t: "Submit and keep copies", d: "Keep a full copy of what you submit in case you need it later." },
];

const services = [
  "Bank statement review before you apply",
  "Flagging unexplained deposits and inconsistencies",
  "Estimating your trip budget against your finances",
  "Guidance on sponsor documents",
  "Solvency certificate and statement format guidance",
  "Document consistency checks",
  "Support with explanation letters",
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
export default function HowMuchBankBalancePage() {
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
        {/* ── HERO (extra top space so the fixed site header never overlaps) ── */}
        <section className="bg-gradient-to-br from-[#002d18] via-[#004526] to-[#006b3a] px-4 pb-16 pt-32 text-white md:pb-20 md:pt-44">
          <div className="mx-auto max-w-5xl text-center">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap justify-center gap-2 text-xs text-green-200">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/travel-resources" className="hover:text-white">Travel Resources</Link></li>
                <li aria-hidden="true">/</li>
                <li className="font-semibold text-white" aria-current="page">How Much Bank Balance for Visa</li>
              </ol>
            </nav>

            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold">
              <Wallet className="h-3.5 w-3.5 text-orange-300" aria-hidden="true" />
              Last reviewed {LAST_REVIEWED}
            </p>

            <h1 className="mb-6 text-3xl font-black leading-tight tracking-tight md:text-5xl">
              How Much Bank Balance Is Needed for a Visa? Country-Wise Guide for Bangladeshi Applicants
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-green-50 md:text-lg">
              Most countries do not publish one required balance. This guide shows what is officially stated for
              Schengen, the UK, USA, Canada, UAE, Australia, Malaysia and Thailand, what officers actually look at
              in your account, and how to work out the right amount for your own trip.
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={wa("I need help checking my bank statement for a visa")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto md:text-base"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Get My Bank Statement Reviewed
              </a>
              <a
                href="#country-guide"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/15 px-8 py-4 text-sm font-bold text-white hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto md:text-base"
              >
                See Country Requirements
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

            {/* ── SHORT ANSWER ── */}
            <section id="short-answer" className="scroll-mt-28">
              <SectionHeading icon={ShieldCheck} title="How Much Bank Balance Do You Need? The Short Answer" />
              <div className="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
                <p>
                  <strong className="text-[#005a31]">There is no single amount that works for every visa.</strong>{" "}
                  Many destinations, including the UK, USA, Canada and Australia, do not publish a fixed minimum
                  for visitor visas. They expect you to show enough money to pay for your whole trip and finances
                  that make sense for your job, income and plans. A few, such as Thailand, state a specific amount.
                </p>
                <p>
                  Applicants often focus on one number. Officers read the whole account: where the money came
                  from, how long it has been there, and whether it fits your profile. A moderate balance with a
                  clear history is usually easier to trust than a large balance that appeared recently.
                </p>
              </div>
              <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-5 text-sm leading-relaxed text-gray-700">
                <p className="mb-1 font-bold text-gray-900">Important</p>
                <p>
                  Figures on this page are limited to what we could verify from official or checklist sources as
                  of {LAST_REVIEWED}. Visa rules change and differ by visa type, so always confirm on the
                  official website for your destination. No bank balance guarantees a visa.
                </p>
              </div>
            </section>

            {/* ── WHAT OFFICERS CHECK ── */}
            <section id="what-officers-check" className="scroll-mt-28">
              <SectionHeading icon={FileText} title="What Visa Officers Look For in Your Bank Account">
                A bank statement is evidence about your finances, not a target number. These are the questions an
                officer is trying to answer. Our{" "}
                <Link href="/travel-resources/bank-statement-for-visa" className="font-semibold text-[#005a31] underline hover:text-orange-600">
                  bank statement for visa guide
                </Link>{" "}
                explains the format in more detail.
              </SectionHeading>
              <ul className="grid gap-4 md:grid-cols-2">
                {officerChecks.map((o) => (
                  <li key={o.t} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                    <h3 className="mb-1 text-base font-black text-[#005a31]">{o.t}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{o.d}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── COUNTRY GUIDE ── */}
            <section id="country-guide" className="scroll-mt-28">
              <SectionHeading icon={Globe2} title="Country-Wise Bank Balance Requirements">
                What each destination officially says, in plain language. We only quote numbers that come from
                published guidance or official checklists. Where no fixed amount exists, we say so.
              </SectionHeading>

              <div className="mb-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <caption className="sr-only">Bank balance requirements at a glance by destination</caption>
                  <thead className="bg-[#005a31] text-white">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-bold">Destination</th>
                      <th scope="col" className="px-4 py-3 font-bold">Published amount</th>
                      <th scope="col" className="px-4 py-3 font-bold">Statement period</th>
                    </tr>
                  </thead>
                  <tbody>
                    {glanceRows.map((r) => (
                      <tr key={r[0]} className="border-t border-gray-100 odd:bg-gray-50">
                        <th scope="row" className="px-4 py-3 font-bold text-[#005a31]">{r[0]}</th>
                        <td className="px-4 py-3">{r[1]}</td>
                        <td className="px-4 py-3">{r[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-5">
                {countries.map((c) => (
                  <article key={c.id} id={`country-${c.id}`} className="scroll-mt-28 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                    <h3 className="mb-3 flex items-center gap-3 text-xl font-black text-gray-900">
                      <span aria-hidden="true" className="text-2xl">{c.flag}</span>
                      {c.name}
                    </h3>
                    <dl className="space-y-3 text-sm leading-relaxed text-gray-600">
                      <div><dt className="font-bold text-[#005a31]">What is stated</dt><dd>{c.fixed}</dd></div>
                      <div><dt className="font-bold text-[#005a31]">How it is assessed</dt><dd>{c.how}</dd></div>
                      <div><dt className="font-bold text-[#005a31]">Practical guidance</dt><dd>{c.tips}</dd></div>
                    </dl>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {c.links.map(([label, href]) => (
                        <OfficialLink key={href} href={href}>{label}</OfficialLink>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* ── CALCULATE ── */}
            <section id="calculate" className="scroll-mt-28">
              <SectionHeading icon={Wallet} title="How to Calculate the Right Amount for Your Trip">
                Because many countries set no fixed amount, the most useful number is your own realistic trip cost.
              </SectionHeading>
              <ul className="grid gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:grid-cols-2">
                {costComponents.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#005a31]" aria-hidden="true" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-gray-600">
                <p>
                  <strong className="text-gray-900">Simple method:</strong> add the items above for your whole trip,
                  then check that your savings and regular income comfortably cover the total without strain.
                </p>
                <p>
                  <strong className="text-gray-900">Schengen example (illustrative only):</strong> if a state&apos;s
                  daily reference amount is 65 euros and you stay 10 days, the reference figure is 650 euros. That
                  is the reference for daily means of subsistence only. Flights, insurance and fees are on top, and
                  showing more than the reference strengthens your case.
                </p>
              </div>
            </section>

            {/* ── STATEMENTS ── */}
            <section id="statements" className="scroll-mt-28">
              <SectionHeading icon={FileText} title="Bank Statements, Duration and Solvency Certificates">
                How many months to show depends on the visa and the channel, so use the checklist that applies to
                you.
              </SectionHeading>
              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <h3 className="mb-1 font-black text-[#005a31]">Statement duration</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Checklists range from a few months to six months. For example, Thai e-visa guidance refers to
                    three months while the VFS Bangladesh checklist refers to six. A longer, consistent history can
                    help when it genuinely shows stable finances, but follow the stated format.
                  </p>
                </article>
                <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <h3 className="mb-1 font-black text-[#005a31]">Bank solvency certificate</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    A letter from your bank confirming your balance on a date. Some checklists require it, such as
                    the Thailand checklist for Bangladesh, which asks for the original statement and solvency
                    letter. It does not replace the transaction history. Read our{" "}
                    <Link href="/travel-resources/bank-solvency-certificate-for-visa" className="font-semibold text-[#005a31] underline hover:text-orange-600">solvency certificate guide</Link>.
                  </p>
                </article>
                <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <h3 className="mb-1 font-black text-[#005a31]">Format</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Use official bank-issued statements with your name, account number and running balance. Screenshots
                    of mobile apps are generally not accepted as official proof. Follow the checklist for stamps,
                    signatures and issue dates.
                  </p>
                </article>
                <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <h3 className="mb-1 font-black text-[#005a31]">Large or unusual deposits</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Keep proof of source, such as a sale deed, business invoice, loan or gift document, and add a
                    short written explanation. See our{" "}
                    <Link href="/travel-resources/bank-statement-for-visa-how-to-prepare" className="font-semibold text-[#005a31] underline hover:text-orange-600">statement preparation guide</Link>.
                  </p>
                </article>
              </div>
            </section>

            {/* ── APPLICANT TYPES ── */}
            <section id="applicant-types" className="scroll-mt-28">
              <SectionHeading icon={Users} title="What to Show Based on Your Situation">
                The strongest file matches your real circumstances.
              </SectionHeading>
              <ul className="grid gap-4 md:grid-cols-2">
                {applicantTypes.map((a) => (
                  <li key={a.t} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                    <h3 className="mb-1 text-base font-black text-[#005a31]">{a.t}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{a.d}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── SPONSOR ── */}
            <section id="sponsor" className="scroll-mt-28">
              <SectionHeading icon={Users} title="Sponsor Funds: When Someone Else Pays">
                Many visas accept a sponsor, but the officer must be satisfied that the support is genuine. See our{" "}
                <Link href="/travel-resources/sponsor-financial-documents-for-visa" className="font-semibold text-[#005a31] underline hover:text-orange-600">sponsor financial documents guide</Link>{" "}
                and our{" "}
                <Link href="/travel-resources/invitation-letter-sample-for-visa" className="font-semibold text-[#005a31] underline hover:text-orange-600">invitation letter sample</Link>.
              </SectionHeading>
              <ul className="grid gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:grid-cols-2">
                {sponsorDocs.map((d) => (
                  <li key={d} className="flex gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#005a31]" aria-hidden="true" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── MISTAKES ── */}
            <section id="mistakes" className="scroll-mt-28">
              <SectionHeading icon={AlertTriangle} title="Bank Balance Mistakes That Can Lead to Refusal">
                Financial concerns are a common reason for refusal. If it has already happened, read our{" "}
                <Link href="/visa-rejection/common-reasons" className="font-semibold text-[#005a31] underline hover:text-orange-600">common visa rejection reasons</Link>{" "}
                and our{" "}
                <Link href="/appeal-process-for-visa" className="font-semibold text-[#005a31] underline hover:text-orange-600">visa appeal and reapplication guide</Link>.
              </SectionHeading>
              <ul className="grid gap-4 md:grid-cols-2">
                {mistakes.map((m) => (
                  <li key={m.t} className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
                    <h3 className="mb-1 text-sm font-black text-gray-900">{m.t}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{m.d}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── PREPARATION ── */}
            <section id="preparation" className="scroll-mt-28">
              <SectionHeading icon={ListChecks} title="Step-by-Step: Preparing Your Finances for a Visa Application" />
              <ol className="space-y-3">
                {prepPlan.map((p, i) => (
                  <li key={p.t} className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#005a31] text-sm font-black text-white">{i + 1}</span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{p.t}</p>
                      <p className="text-sm leading-relaxed text-gray-600">{p.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* ── EAMMU HELP ── */}
            <section id="eammu-help" className="scroll-mt-28 rounded-3xl border border-green-100 bg-white p-6 shadow-sm md:p-10">
              <SectionHeading icon={ShieldCheck} title="How Eammu Holidays Can Help With Your Financial Documents">
                Eammu Holidays can review your documents before you apply and point out issues an officer may
                question.
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
                Eammu Holidays cannot guarantee visa approval or influence an embassy decision, and does not
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
              <h2 id="related-heading" className="mb-6 text-center text-xl font-black text-[#005a31]">Related Financial Document Guides</h2>
              <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Related resources">
                {relatedLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-600 shadow-sm hover:border-[#005a31] hover:text-[#005a31] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </section>

            {/* ── CTA ── */}
            <section className="rounded-3xl bg-[#005a31] p-8 text-center text-white md:p-12">
              <h2 className="mb-4 text-2xl font-black text-orange-300 md:text-3xl">Is Your Bank Balance Ready for Your Visa Application?</h2>
              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-green-50 md:text-lg">
                Share your destination and visa type, and Eammu Holidays can review your financial documents and
                suggest what to clarify before you submit.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={wa("I need help with my bank balance and documents for a visa")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto md:text-base"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Free Document Review on WhatsApp
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
                General information, not legal or financial advice. Visa rules change. Last reviewed {LAST_REVIEWED}.
              </p>
            </section>
          </div>
        </div>
      </main>

      <HomeSeoLinks />
    </>
  );
}