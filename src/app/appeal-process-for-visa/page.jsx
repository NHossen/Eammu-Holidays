

import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";
import {
  Scale,
  RefreshCw,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
  AlertTriangle,
  Landmark,
  Globe2,
  ClipboardCheck,
  Ban,
  Plus,
  FileText,
  ExternalLink,
  Gavel,
  ListChecks,
  Wallet,
  Users,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────
const PAGE_URL = "https://eammu.com/appeal-process-for-visa";
const WHATSAPP = "https://wa.me/8801701699743";
const DATE_PUBLISHED = "2026-01-25"; // existing value from the original page
const DATE_MODIFIED = "2026-11-15"; // date of this rewrite and research review
const LAST_REVIEWED = "15 November 2026";
const PAGE_TITLE =
  "Visa Rejection Appeal Process in Bangladesh: Appeal, Review or Reapply | Eammu Holidays";
const PAGE_DESCRIPTION =
  "Visa refused? Learn how appeals, administrative review, reconsideration and reapplication differ, with country guides for Bangladeshi applicants and next steps.";

const wa = (text) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://eammu.com"),
  title: { default: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "visa rejection appeal process",
    "visa appeal process bangladesh",
    "visa rejection appeal bangladesh",
    "how to appeal visa refusal",
    "visa reapplication after rejection",
    "reapply after visa rejection",
    "visa refused what to do next",
    "schengen visa appeal bangladesh",
    "uk visa refusal appeal",
    "canada visa refusal reapply",
    "usa visa rejection 214b",
    "dubai visa rejection reapply",
    "visa refusal letter review",
    "appeal letter for visa rejection",
    "visa refusal explanation letter",
    "visa rejection consultancy bangladesh",
    "administrative review visa refusal",
  ],
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Visa Rejection Appeal Process in Bangladesh | Eammu Holidays",
    description:
      "Appeal, administrative review, reconsideration or reapplication? Understand your options after a visa refusal, with country-by-country guidance for Bangladeshi applicants.",
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_MODIFIED,
    images: [
      {
        url: "https://eammu.com/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Visa rejection appeal process guide by Eammu Holidays",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    title: "Visa Rejection Appeal Process in Bangladesh | Eammu Holidays",
    description:
      "How visa appeals, administrative review, reconsideration and reapplication differ, with country guidance for Bangladeshi applicants.",
    images: ["https://eammu.com/preview-banner.webp"],
  },
  icons: { icon: "/emf.jpg", shortcut: "/emf.jpg", apple: "/emf.jpg" },
  category: "travel",
};

// ─── FAQ data (single source for visible FAQ and FAQPage JSON-LD) ─────────────
const faqs = [
  {
    q: "Can I appeal after my visa is rejected?",
    a: "Sometimes. It depends on the country, the visa category and the type of decision. Schengen states must give refused applicants a right of appeal under their national law. The UK offers administrative review or an appeal only for certain decisions, and your decision letter states whether either applies. Canada, the USA and the UAE generally do not offer a conventional appeal for visitor visa refusals. Your refusal notice is the first place to check.",
  },
  {
    q: "Can I apply again after visa rejection?",
    a: "In most cases yes. A refusal does not normally stop you from submitting a new application. What matters is whether the new application is meaningfully different from the refused one and answers the concerns that were raised. Always disclose the previous refusal truthfully.",
  },
  {
    q: "How soon can I reapply after a visa refusal?",
    a: "There is no universal waiting period. Some refusals can be followed by a quick reapplication if the problem was a simple, fixable document error. Refusals based on finances, ties to Bangladesh or travel purpose usually need genuine time and change before a stronger application is possible. Check the rules of the specific country and your refusal letter.",
  },
  {
    q: "Does visa rejection affect future applications?",
    a: "A refusal is usually recorded, and many application forms ask about previous refusals. A single refusal does not automatically make you ineligible, but officers may read your history alongside the new file. A clear, honest explanation of what has changed helps.",
  },
  {
    q: "Can I appeal a Schengen visa refusal?",
    a: "Article 32(3) of the EU Visa Code says applicants refused a visa have the right to appeal, conducted against the Member State that took the final decision and under that state's national law. The body, form, language, fee and deadline differ by country, so follow the instructions on your refusal form exactly.",
  },
  {
    q: "Can I appeal a UK visitor visa refusal?",
    a: "Standard visitor visa refusals generally do not carry a right of administrative review or a full appeal. Your decision letter states whether any review right exists. Where administrative review is available for an entry clearance refusal, gov.uk states a 28 calendar day window for applicants outside the UK. A fresh application is often the practical route for visitors.",
  },
  {
    q: "Can I appeal a Canadian visitor visa refusal?",
    a: "Canada does not generally provide a conventional appeal for visitor visa refusals. Options are a new application, a reconsideration request (which is discretionary and has no set process), or judicial review at the Federal Court, which is a legal remedy with a strict deadline, commonly 60 days for decisions made outside Canada. A reconsideration request does not pause that court deadline.",
  },
  {
    q: "Can I appeal a US 214(b) refusal?",
    a: "No conventional appeal exists for a refusal under section 214(b) of the Immigration and Nationality Act. You may submit a new application, but it is usually helpful to understand what the officer concluded and whether your circumstances or documents have materially changed before applying again.",
  },
  {
    q: "What happens if my appeal is rejected?",
    a: "Your refusal usually stands. Depending on the country, further steps might include a higher administrative or judicial route, or a new application. Where a legal challenge is possible, seek advice from a qualified lawyer quickly because deadlines are short.",
  },
  {
    q: "Can I submit new documents during an appeal?",
    a: "It depends on the procedure. Some reviews, such as UK administrative review, are generally limited to checking whether an error was made on the evidence already submitted. Some appeals may allow additional evidence. A fresh application is the usual route when you have new documents. Check the rules that apply to your decision.",
  },
  {
    q: "Do I need to disclose previous visa refusals?",
    a: "Yes. Many applications ask directly about previous refusals for any country. Answer truthfully and consistently. Concealing a refusal can create a separate misrepresentation concern that is often harder to resolve than the original refusal.",
  },
  {
    q: "Can Eammu Holidays help with a rejected visa?",
    a: "Yes. Eammu Holidays can review your refusal letter and application, help you understand likely concerns, explain the routes that may be available, and assist with documents, letters and application preparation. Eammu Holidays cannot guarantee approval, influence an embassy decision or act as your legal representative. Final decisions rest with the immigration authority.",
  },
  {
    q: "How much does a visa appeal cost?",
    a: "Costs depend on the country and procedure. Some routes charge a government fee, some charge court or tribunal fees, and a fresh application normally requires the visa fee again. Translation, attestation, medical checks, courier and professional fees may also apply. Check the official website for the current government fee. Eammu Holidays service charges are separate from government fees.",
  },
  {
    q: "Is a second visa application more difficult?",
    a: "It can feel harder because the officer may see the earlier refusal, but a second application is judged on its own evidence. A well-prepared file that clearly addresses the previous concerns can be assessed on its merits. Repeating the same file with no change is what typically leads to a repeat refusal.",
  },
  {
    q: "Can I change my travel purpose after refusal?",
    a: "You can apply for a different purpose if you genuinely qualify, but the purpose must be true. Changing it only to find a route that might succeed can look inconsistent and can raise credibility concerns. Explain any genuine change of plans clearly in your cover letter.",
  },
  {
    q: "Can I apply through another embassy after refusal?",
    a: "Rules vary. For Schengen visas, you generally must apply to the Member State responsible for your main destination, and choosing another country to avoid a refusal can be a problem. Refusals are often visible to other Schengen states. Declare the earlier refusal and apply to the state that is genuinely correct for your trip.",
  },
  {
    q: "What is the difference between an appeal and reapplication?",
    a: "An appeal or review asks an authority to check the decision already made, under a legal procedure with its own rules and deadline. A reapplication is a new application assessed afresh, usually with a new fee and updated evidence. They are different procedures and are not interchangeable.",
  },
  {
    q: "Can a weak bank statement be corrected before reapplying?",
    a: "A weak statement cannot be corrected by adding money shortly before you apply. Officers look at the history of funds, regular income and the source of deposits. Genuine improvement over time, with clear explanations for any large deposit, is more convincing than a last-minute balance.",
  },
  {
    q: "Can I appeal without a lawyer?",
    a: "In some systems you can file an administrative appeal or review yourself, and the refusal form often explains how. Other systems, such as court challenges, may require or strongly benefit from a lawyer. If your case involves fraud allegations, bans or court proceedings, seek qualified legal advice.",
  },
  {
    q: "Does a visa rejection mean I am banned?",
    a: "Not normally. A standard refusal is not the same as an entry ban. Bans or inadmissibility findings are separate decisions, usually linked to serious issues such as misrepresentation, overstays or removal. Your decision letter should say if a re-entry restriction applies. If it does, speak to a qualified immigration lawyer.",
  },
  {
    q: "Can I get my visa fee refunded?",
    a: "Visa fees are usually non-refundable after a refusal because they pay for processing the application. Some specific review or appeal fees may be refunded if the challenge succeeds. Check the official fee rules for your destination and procedure.",
  },
  {
    q: "Should I wait six months after visa rejection?",
    a: "There is no universal six month rule. The right timing depends on the refusal reasons. A documentation error may be fixed quickly. Financial, employment or ties-related concerns usually need real change that takes time. Waiting without improving anything does not help.",
  },
  {
    q: "Can I get a refusal letter reviewed?",
    a: "Yes. Eammu Holidays can review your refusal letter alongside your original application to help identify the likely concerns and discuss realistic next steps. Share the documents through a secure channel and avoid posting personal documents publicly.",
  },
  {
    q: "What documents should I send to Eammu Holidays?",
    a: "Send your refusal letter or notification, a copy of the application and supporting documents you submitted, your passport bio page and previous visa history, and any new evidence you plan to use. Share them only through a secure channel agreed with the team.",
  },
];

// ─── Structured data (kept consistent with visible content) ───────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline:
        "Visa Rejection Appeal Process: Appeal, Administrative Review, Reconsideration or Reapply",
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Visa Rejection Help",
          item: "https://eammu.com/visa-rejection",
        },
        { "@type": "ListItem", position: 3, name: "Visa Appeal Process", item: PAGE_URL },
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
  { id: "after-rejection", label: "What to do first" },
  { id: "why-rejected", label: "Why visas are refused" },
  { id: "compare-routes", label: "Appeal vs review vs reapply" },
  { id: "country-guide", label: "Country-by-country guide" },
  { id: "reapply-timing", label: "Reapplying after refusal" },
  { id: "documents", label: "Documents checklist" },
  { id: "appeal-letter", label: "Appeal letter" },
  { id: "cover-letter", label: "Reapplication cover letter" },
  { id: "multiple-refusals", label: "Refused more than once" },
  { id: "costs", label: "Costs" },
  { id: "eammu-help", label: "How Eammu helps" },
  { id: "legal-advice", label: "When to see a lawyer" },
  { id: "faq", label: "FAQs" },
];

const relatedResources = [
  { label: "Common Visa Rejection Reasons", href: "/visa-rejection/common-reasons" },
  { label: "Visa Rejection Help", href: "/visa-rejection" },
  { label: "Bank Statement for Visa", href: "/travel-resources/bank-statement-for-visa" },
  { label: "Visa Checklist Generator", href: "/travel-resources/visa-checklist-generator" },
  { label: "DS-160 Form Guide", href: "/target-usa-visa-interview-preparation/ds-160-form-guide" },
  { label: "USA Visa Interview Preparation", href: "/target-usa-visa-interview-preparation" },
  { label: "Spouse Visa Documents", href: "/visa/spouse-visa-documents" },
  { label: "All Visa Services", href: "/visa" },
];

// ─── Section B: first steps ───────────────────────────────────────────────────
const firstSteps = [
  { title: "Read the refusal notice in full", text: "Read every line, including the small print. The notice usually states the reasons, whether any review or appeal right exists, and how to use it. Do not rely on a summary from an agent or friend." },
  { title: "Identify the exact refusal grounds", text: "Write down each ground cited, such as a code, a ticked box or a paragraph. Refusals often list a main concern and secondary concerns, and each needs an answer." },
  { title: "Check the deadline the same day", text: "If a review or appeal right is mentioned, note the deadline immediately and check how it is counted (from the decision date or the date you received it). Deadlines can be short and are often strict." },
  { title: "Check whether your passport and documents are returned", text: "Confirm how and when your passport and original documents will be returned. Do not make travel or new application plans until you have them." },
  { title: "Understand the effect on future applications", text: "Different countries keep different records and many forms ask about previous refusals. A refusal does not automatically bar you from applying again, but it will be part of your history." },
  { title: "Keep copies of everything", text: "Save the refusal letter, your application form, receipts, the documents you submitted and any emails. You will need them to compare what you submitted with what the officer concluded." },
  { title: "Avoid a rushed reapplication", text: "Submitting the same file again quickly is one of the most common ways to receive a second refusal. Decide first whether to appeal, review or reapply, and what you will change." },
  { title: "Answer previous-refusal questions truthfully", text: "Always disclose earlier refusals when asked. Immigration systems and authorities may share or keep records, and a false answer can cause a more serious problem than the refusal itself." },
];

// ─── Section C: refusal reasons ───────────────────────────────────────────────
const reasons = [
  { title: "Insufficient financial evidence", officer: "Whether your funds, income and savings clearly cover the trip, and whether they look genuine and stable.", check: "Whether the statement covers the period requested, shows regular activity and matches your stated income and trip cost.", evidence: "Several months of consistent bank history, salary or business income records, tax documents and a sponsor's evidence where relevant.", route: "Usually a fresh application after genuine financial improvement. An appeal is rarely helpful unless the officer misread documents you did submit." },
  { title: "Unexplained bank deposits", officer: "Large or sudden deposits that do not match your income may suggest borrowed or temporary funds.", check: "Every large credit in your statements and whether you can show where it came from.", evidence: "Sale deeds, loan or gift documents, business invoices, salary slips or a written explanation with proof of source.", route: "Fresh application with a clear explanation. A review may be possible only where the rules allow and the evidence was already in the file." },
  { title: "Weak employment or business evidence", officer: "Whether your job or business is real, current and gives you a reason to return.", check: "Employment letter details, leave approval, trade licence, tax records and whether dates match the trip.", evidence: "Updated employment certificate, pay slips, business registration, tax returns and business financial records where applicable.", route: "Usually a fresh application with stronger records." },
  { title: "Insufficient ties to Bangladesh", officer: "Whether your family, job, property, studies or business make it likely you will leave the destination country on time.", check: "Whether your file actually shows your ties instead of assuming they are obvious.", evidence: "Family details, property or business documents, dependants, ongoing study or work commitments.", route: "Fresh application after addressing the concern, unless a formal route exists and the officer clearly overlooked evidence." },
  { title: "Unclear travel purpose", officer: "Whether the trip is credible, consistent with your profile and supported by a believable plan.", check: "Whether your itinerary, invitation, event details and form answers tell the same story.", evidence: "A clear itinerary, event or meeting proof, invitation letter, and a short explanation of why you are travelling.", route: "Fresh application with a clearer purpose. Do not change the purpose unless it genuinely changed." },
  { title: "Incomplete supporting documents", officer: "Missing, unreadable, unsigned or unstamped documents may prevent the officer from verifying your claims.", check: "The checklist for your visa category against what you submitted.", evidence: "Complete, legible and correctly certified documents, translated where required.", route: "A quick fresh application is sometimes possible once a simple omission is corrected, if rules allow." },
  { title: "Inconsistent information", officer: "Differences between forms, letters and documents can reduce confidence in the whole application.", check: "Names, dates, addresses, employer details, income, itinerary and prior travel across every document.", evidence: "Corrected forms and an honest explanation for any real discrepancy.", route: "Fresh application. An appeal may help only if the officer made a factual error." },
  { title: "Doubts about leaving before visa expiry", officer: "Whether you are likely to depart when the visa ends, based on your overall profile.", check: "Travel history, stability of life in Bangladesh and the reasonableness of the trip length and cost.", evidence: "Evidence of commitments at home, return ticket plans where appropriate, and a coherent travel history.", route: "Usually a fresh application with improved ties and a stronger explanation." },
  { title: "Previous immigration violations", officer: "Overstays, refusals, removals or breaches in your history can weigh heavily.", check: "Whether any past event is accurately declared and what the official record says.", evidence: "Official records, explanations and any proof of resolved issues.", route: "Take qualified legal advice. This may involve admissibility or ban rules." },
  { title: "Unclear accommodation or travel arrangements", officer: "Whether plans are realistic, affordable and verifiable.", check: "Hotel or host details, dates, routes and whether bookings are refundable and consistent with the form.", evidence: "Verifiable accommodation, host documents, itinerary and travel insurance where required.", route: "Fresh application with a clear, consistent plan." },
  { title: "Inadequate sponsorship evidence", officer: "Whether the sponsor can genuinely support you and the relationship and purpose are credible.", check: "Sponsor identity, income, relationship proof, sponsor letter and who pays for what.", evidence: "Sponsor bank statements, income proof, relationship evidence, invitation or sponsorship letter.", route: "Fresh application with stronger sponsor proof. Check if a formal review exists for family-related routes." },
  { title: "Insufficient academic or study-purpose evidence", officer: "Whether your study plan is credible, matches your background and is financially supported.", check: "Course fit, academic gaps, funding sources and the reasoning in your statement of purpose.", evidence: "Transcripts, admission letters, tuition payment proof, a clear statement of purpose and a believable career plan.", route: "Study routes may have their own rules. Check the refusal notice, then compare review options with a fresh application." },
  { title: "Failure to meet eligibility requirements", officer: "Whether you meet the basic legal conditions for the visa category.", check: "Age, category, language, sponsor, health, income or other requirements for that route.", evidence: "Only evidence that truthfully shows you meet the requirement. If you do not, a different category may be the answer.", route: "Depends on the rule. Consider legal advice if you believe the law was applied incorrectly." },
  { title: "Misrepresentation or false documentation concerns", officer: "Whether information or documents appear false, altered or misleading.", check: "Every document and answer for accuracy, and any third party who prepared the file.", evidence: "Genuine originals, official verification and a truthful written response if you are given the chance.", route: "Serious. Seek a qualified immigration lawyer before taking any action. Never submit false documents." },
];

// ─── Section D: comparison ────────────────────────────────────────────────────
const compareRows = [
  { name: "Formal visa appeal", what: "A request to an independent body or authority to reconsider the decision under a legal appeal right.", when: "Only where the law or your refusal notice grants it. Schengen states must provide a right of appeal under national law.", newDocs: "Depends on the system. Some allow additional evidence, others do not.", reassess: "Yes, to the extent the appeal body can review.", fee: "May apply. Varies by country.", deadline: "Yes. Often short and stated in the notice.", consider: "Check the exact body, language, form and deadline. A narrow factual error is a better fit than a weak file." },
  { name: "Administrative review", what: "A check by a different official or team of whether the decision-maker made an error on the evidence already submitted.", when: "Only for decisions the rules list as eligible. The UK uses this for some decisions, and the decision letter says if it applies.", newDocs: "Generally not. Usually limited to the original evidence, with narrow exceptions.", reassess: "Yes, for errors only.", fee: "Often a fee applies.", deadline: "Yes. Strict.", consider: "Use when you can point to a clear error. If the real issue is missing evidence, a fresh application may be stronger." },
  { name: "Reconsideration request", what: "An informal or discretionary request to the deciding office to take another look.", when: "Not a universal right. Some authorities accept such requests, usually in limited circumstances such as a clear mistake.", newDocs: "Sometimes, if the authority accepts them. Check the guidance.", reassess: "Only if the office agrees to reopen.", fee: "Usually none, but not guaranteed.", deadline: "May not be fixed, and it does not usually pause any legal deadline.", consider: "Never rely on it alone if a formal deadline is running." },
  { name: "Judicial review", what: "A court examines whether the decision was lawful, reasonable and procedurally fair. It is not a new application.", when: "Only in countries and situations where courts can review immigration decisions, with specific legal requirements.", newDocs: "Generally no. The court usually looks at what the officer had.", reassess: "The court reviews lawfulness. A win often sends the case back for a new decision.", fee: "Court fees and legal costs may apply.", deadline: "Yes. Often strict and short.", consider: "A legal remedy. Speak to a qualified lawyer promptly." },
  { name: "Fresh visa reapplication", what: "A new application assessed on its own evidence.", when: "Usually available in most systems, subject to rules.", newDocs: "Yes. This is where new evidence belongs.", reassess: "A new decision is made. The previous refusal is disclosed.", fee: "A new visa fee normally applies.", deadline: "No appeal-style deadline, but your travel dates and validity of documents matter.", consider: "Best when the refusal showed a genuine gap you can fix. Do not reapply with the same file." },
];

// ─── Section E: countries ─────────────────────────────────────────────────────
// Each remedy line: A appeal, B administrative review, C reconsideration, D judicial remedy, E fresh application.
const countries = [
  {
    id: "canada", name: "Canada", Icon: Landmark,
    A: "No conventional appeal for most visitor, study and work permit refusals.",
    B: "Not a standard option for these refusals.",
    C: "A reconsideration request to IRCC may be possible, but it is discretionary and has no set process. It does not stop the court deadline.",
    D: "Judicial review at the Federal Court. Reported statutory deadline: 15 days for decisions made in Canada and 60 days for decisions made outside Canada. A lawyer is strongly advisable.",
    E: "Yes. A new application can be filed.",
    waiting: "No general waiting period is stated for a new visitor application. Timing depends on how much your situation has improved.",
    deadlines: "Judicial review deadlines run from when you were notified of the decision. Confirm with the Federal Court and a lawyer.",
    docs: "Updated funds history, employment or business proof, ties to Bangladesh, a clear itinerary, invitation or host details, and a cover letter that addresses the officer's reasons.",
    first: "Read the refusal and any officer notes. Decide whether the issue is a gap in evidence (reapply) or a possible officer error (seek legal advice quickly).",
    links: [["IRCC (canada.ca)", "https://www.canada.ca"]],
  },
  {
    id: "uk", name: "United Kingdom", Icon: Landmark,
    A: "Rights of appeal depend on the type of decision. Standard visitor visa refusals generally do not carry a full appeal right. Your decision letter states what applies.",
    B: "Administrative review exists for some eligible decisions. Gov.uk states that for entry clearance refusals the application must be made within 28 calendar days while outside the UK, and your decision letter says whether it is available. Reviews are generally limited to checking for errors.",
    C: "Not a general right. Do not rely on it where a formal deadline applies.",
    D: "Judicial review exists as a legal remedy with strict requirements. Seek regulated legal advice.",
    E: "Yes. A new application can be made, which is where new documents belong.",
    waiting: "No fixed UK waiting period for reapplying after a standard refusal is stated here. Check the guidance for your route and any re-entry restrictions in your decision.",
    deadlines: "Review deadlines depend on the decision type and the place of application. Use the date and instructions in your decision letter.",
    docs: "Bank statements with explained deposits, income proof, accommodation and itinerary, evidence of ties, sponsor or host evidence where relevant, and an explanation of any previous refusal.",
    first: "Check your decision letter for review or appeal rights and the deadline. If none applies, plan a stronger new application.",
    links: [["Ask for a visa administrative review (gov.uk)", "https://www.gov.uk/ask-for-a-visa-administrative-review"], ["UK Home Office guidance (gov.uk)", "https://www.gov.uk"]],
  },
  {
    id: "usa", name: "United States", Icon: Landmark,
    A: "No conventional appeal for a 214(b) refusal.",
    B: "Not available for 214(b) refusals.",
    C: "No formal reconsideration right. Consular officers may sometimes review certain cases, but you should not plan around it.",
    D: "Court challenges to consular visa refusals are generally very limited. Take legal advice if you believe a legal error occurred.",
    E: "Yes. A new application can be made, usually with a new DS-160 and a new interview fee and appointment.",
    waiting: "No universal waiting period. A new application is most useful when your circumstances or presentation have materially changed.",
    deadlines: "No appeal deadline for 214(b). Other refusal grounds, such as section 221(g), have different instructions. Follow your refusal paperwork.",
    docs: "Evidence of employment or business, family and property ties, funds, a clear trip purpose, previous travel history and any document requested under 221(g).",
    first: "Identify the refusal section. Do not rush a new application if nothing has changed.",
    links: [["U.S. Department of State (travel.state.gov)", "https://travel.state.gov"], ["USCIS (uscis.gov)", "https://www.uscis.gov"]],
  },
  {
    id: "schengen", name: "Schengen Area (overview)", Icon: Globe2,
    A: "Article 32(3) of the EU Visa Code gives refused applicants the right to appeal, conducted against the state that made the final decision and under its national law.",
    B: "Some states also allow a review or remonstration stage. Your refusal form states what is available.",
    C: "Varies. Do not assume it exists. Use the procedure on your notice.",
    D: "Some states route appeals or challenges to courts. Court routes often need a lawyer.",
    E: "Yes. You can apply again, normally to the state responsible for your main destination, and you must disclose the refusal.",
    waiting: "No single Schengen-wide waiting period for a standard reapplication is stated here.",
    deadlines: "Set by the issuing state's national law and stated in the standard refusal form. Some states give days, some weeks.",
    docs: "Corrected forms, travel insurance, accommodation, itinerary, funds, employment or business proof, ties to Bangladesh and a cover letter explaining changes.",
    first: "Identify which state issued the refusal and read the standard form. Note the appeal body, language, form and deadline.",
    links: [["EU Home Affairs (home-affairs.ec.europa.eu)", "https://home-affairs.ec.europa.eu"]],
  },
  {
    id: "germany", name: "Germany", Icon: Globe2,
    A: "A remedy exists under German procedures and is explained in the refusal notice.",
    B: "A remonstration (objection) to the mission may be available. Deadline and format are given on the notice.",
    C: "Treat remonstration as the formal step. Do not rely on informal requests.",
    D: "Court action may be possible after the administrative step. Seek legal advice.",
    E: "Yes, with updated evidence.",
    waiting: "No general waiting period stated here.",
    deadlines: "Stated in the refusal notice. Confirm on the official mission website.",
    docs: "Updated finances, employer proof, itinerary and accommodation, travel insurance, invitation or sponsor documents where relevant.",
    first: "Read the notice, note the deadline and use the instructions of the German mission that decided your case.",
    links: [["German Federal Foreign Office (diplo.de)", "https://www.diplo.de"]],
  },
  {
    id: "france", name: "France", Icon: Globe2,
    A: "France has an administrative appeal procedure for short-stay visa refusals, explained in the notice.",
    B: "A prior administrative appeal stage may be required before any court challenge. Confirm on the notice.",
    C: "Do not assume an informal reconsideration is available.",
    D: "Court action may follow the administrative stage. Legal advice is recommended.",
    E: "Yes, with a stronger file.",
    waiting: "No general waiting period stated here.",
    deadlines: "Stated in the notice. Some guidance mentions a 30 day period for the prior administrative appeal, but you must confirm it on your own notice.",
    docs: "Funds, employment or business proof, accommodation, insurance, a clear itinerary and an explanation of changes since the refusal.",
    first: "Use France-Visas and the notice to identify the body and deadline.",
    links: [["France-Visas (france-visas.gouv.fr)", "https://france-visas.gouv.fr"]],
  },
  {
    id: "italy", name: "Italy", Icon: Globe2,
    A: "Appeals are handled under Italian procedure as stated on the refusal notice.",
    B: "Check whether the notice offers any administrative step.",
    C: "Not to be assumed.",
    D: "Italian guidance indicates court action before a regional administrative court is possible in some cases. Deadlines are strict and legal representation may be required. Check with the Italian authority.",
    E: "Yes, with new evidence.",
    waiting: "No general waiting period stated here.",
    deadlines: "Stated in the notice and Italian official guidance.",
    docs: "Funds, itinerary, accommodation, insurance, invitation documents and employment or business evidence.",
    first: "Check the Italian visa portal and the refusal form, then consult a lawyer if a court route is under consideration.",
    links: [["Visto per l'Italia (vistoperitalia.esteri.it)", "https://vistoperitalia.esteri.it"]],
  },
  {
    id: "netherlands", name: "Netherlands", Icon: Globe2,
    A: "An objection procedure is available under Dutch law and explained in the notice.",
    B: "The objection stage is administrative. Follow the notice.",
    C: "Not to be assumed.",
    D: "Further court steps may be possible after an objection decision. Seek legal advice.",
    E: "Yes.",
    waiting: "No general waiting period stated here.",
    deadlines: "Stated in the notice. Confirm on official Dutch government pages.",
    docs: "Updated finances, employer proof, itinerary, accommodation, insurance and ties to Bangladesh.",
    first: "Read the notice and note the objection deadline and address.",
    links: [["Netherlands Worldwide (netherlandsworldwide.nl)", "https://www.netherlandsworldwide.nl"]],
  },
  {
    id: "spain", name: "Spain", Icon: Globe2,
    A: "Spanish procedures are stated on the refusal notice.",
    B: "Check whether an administrative step is offered.",
    C: "Not to be assumed.",
    D: "Court options may exist. Seek legal advice.",
    E: "Yes.",
    waiting: "No general waiting period stated here.",
    deadlines: "Stated in the notice. Check the Spanish foreign ministry website.",
    docs: "Funds, itinerary, accommodation, insurance, employer proof and ties to Bangladesh.",
    first: "Read the notice and confirm the route with the Spanish authority.",
    links: [["Spanish Ministry of Foreign Affairs (exteriores.gob.es)", "https://www.exteriores.gob.es"]],
  },
  {
    id: "poland", name: "Poland", Icon: Globe2,
    A: "Polish procedures are stated on the notice.",
    B: "Follow any administrative step it offers.",
    C: "Not to be assumed.",
    D: "Court options may exist. Seek legal advice.",
    E: "Yes.",
    waiting: "No general waiting period stated here.",
    deadlines: "Stated in the notice. Check official Polish government pages.",
    docs: "Funds, itinerary, accommodation, insurance, invitation or employer proof where relevant.",
    first: "Read the notice and confirm the authority and deadline.",
    links: [["Polish government (gov.pl)", "https://www.gov.pl"]],
  },
  {
    id: "portugal", name: "Portugal", Icon: Globe2,
    A: "Portuguese procedures are stated on the notice.",
    B: "Follow any administrative step it offers.",
    C: "Not to be assumed.",
    D: "Court options may exist. Seek legal advice.",
    E: "Yes.",
    waiting: "No general waiting period stated here.",
    deadlines: "Stated in the notice. Check the official Portuguese visa portal.",
    docs: "Funds, itinerary, accommodation, insurance and ties to Bangladesh.",
    first: "Read the notice and confirm the route with the Portuguese authority.",
    links: [["Portuguese visa portal (vistos.mne.gov.pt)", "https://vistos.mne.gov.pt"]],
  },
  {
    id: "australia", name: "Australia", Icon: Landmark,
    A: "Review rights depend on the visa subclass and the decision. Many visitor visa refusals have no review right. Your decision notice states whether a review body can look at it.",
    B: "Where available, review is typically by a tribunal. Confirm the current body and process on the official site.",
    C: "Not a general right.",
    D: "Judicial review exists in courts for legal errors. Take legal advice.",
    E: "Yes, a new application can usually be lodged, subject to the rules for your visa.",
    waiting: "No general waiting period stated here.",
    deadlines: "Review deadlines are stated in the decision notice and can be short.",
    docs: "Funds, employment, ties, itinerary, sponsor or host evidence and a clear purpose statement.",
    first: "Read the decision notice carefully for review rights and deadlines.",
    links: [["Department of Home Affairs (immi.homeaffairs.gov.au)", "https://immi.homeaffairs.gov.au"]],
  },
  {
    id: "new-zealand", name: "New Zealand", Icon: Landmark,
    A: "Appeal rights are limited and depend on the visa type. Many visitor visa declines have no appeal.",
    B: "Check whether the decline letter offers any review or reconsideration step.",
    C: "Possible only where Immigration New Zealand allows it. Do not assume it exists.",
    D: "Court review is a legal remedy. Seek legal advice.",
    E: "Yes.",
    waiting: "No general waiting period stated here.",
    deadlines: "Stated in the decline letter where any process applies.",
    docs: "Funds, itinerary, ties to Bangladesh, employment proof and host or sponsor evidence.",
    first: "Read the decline letter and confirm options on the official website.",
    links: [["Immigration New Zealand (immigration.govt.nz)", "https://www.immigration.govt.nz"]],
  },
  {
    id: "japan", name: "Japan", Icon: Globe2,
    A: "No formal visa appeal for short-term visits is generally described. Check with the Japanese embassy.",
    B: "Not a standard option.",
    C: "Not a standard option.",
    D: "Court challenges are possible in principle but uncommon. Seek legal advice.",
    E: "Yes. Japanese missions may not provide detailed reasons, so a careful review of your file is important.",
    waiting: "Check with the embassy. Do not assume a fixed period.",
    deadlines: "No appeal deadline is generally stated for visitor visas.",
    docs: "Itinerary, guarantor or invitation documents where required, funds, employment or business proof and ties to Bangladesh.",
    first: "Ask the embassy or visa application centre what information they can provide about your refusal.",
    links: [["Ministry of Foreign Affairs of Japan (mofa.go.jp)", "https://www.mofa.go.jp"]],
  },
  {
    id: "south-korea", name: "South Korea", Icon: Globe2,
    A: "No standard appeal is generally described for short-term visas. Confirm with the Korean mission.",
    B: "Not a standard option.",
    C: "Not a standard option.",
    D: "Legal options are limited. Seek advice.",
    E: "Yes.",
    waiting: "Check with the mission. Do not assume a fixed period.",
    deadlines: "Not generally stated for short-term visas.",
    docs: "Funds, employment or business proof, ties to Bangladesh, a clear itinerary, invitation documents where required.",
    first: "Check the Korea Visa Portal and ask the mission what it can disclose about your case.",
    links: [["Korea Visa Portal (visa.go.kr)", "https://www.visa.go.kr"], ["Ministry of Foreign Affairs of Korea (mofa.go.kr)", "https://www.mofa.go.kr"]],
  },
  {
    id: "china", name: "China", Icon: Globe2,
    A: "No standard appeal is generally described for visitor visas.",
    B: "Not a standard option.",
    C: "Not a standard option.",
    D: "Legal options are limited. Seek advice.",
    E: "Yes, with a corrected application and supporting invitation documents.",
    waiting: "Check with the embassy or visa centre. Do not assume a fixed period.",
    deadlines: "Not generally stated.",
    docs: "Invitation letter where required, itinerary, funds, employment proof and ties to Bangladesh.",
    first: "Ask the visa centre or embassy whether they can explain the refusal.",
    links: [["Ministry of Foreign Affairs of China (mfa.gov.cn)", "https://www.mfa.gov.cn"]],
  },
  {
    id: "uae", name: "UAE / Dubai", Icon: Landmark,
    A: "No standard appeal right is generally described. Procedures depend on the issuing authority, the visa category and the sponsor.",
    B: "Not a standard option.",
    C: "Your sponsor, airline or agent may be able to ask the issuing channel about the status or cause. This is not a legal right.",
    D: "Legal options are limited. Seek advice for complex cases.",
    E: "Yes. A new application is usually the practical route.",
    waiting: "No general waiting period stated here.",
    deadlines: "Not generally stated for tourist visas. Follow the instructions from the issuing authority.",
    docs: "Passport copy, photo, travel booking, accommodation, funds and sponsor documents if applicable.",
    first: "Confirm who issued the visa (ICP or GDRFA Dubai or another channel) and ask them for the correct process.",
    links: [["ICP (icp.gov.ae)", "https://icp.gov.ae"], ["GDRFA Dubai (gdrfad.gov.ae)", "https://gdrfad.gov.ae"]],
  },
];

// ─── Sections F–M data ────────────────────────────────────────────────────────
const reapplyGuide = [
  { situation: "A simple document mistake (missing page, unsigned form, illegible copy)", guidance: "A quicker reapplication may be possible once the fault is fixed, if the destination's rules allow. Confirm the refusal was not based on a wider concern." },
  { situation: "Weak or unexplained bank statements", guidance: "Allow time for genuine improvement and keep a clear record of where funds come from. A large deposit just before applying rarely resolves the concern." },
  { situation: "Weak ties to Bangladesh or unclear purpose", guidance: "Reapply when you can show real change, such as longer employment, new responsibilities or a better-evidenced itinerary." },
  { situation: "Inconsistencies between forms and documents", guidance: "Correct the errors and be ready to explain any difference honestly." },
  { situation: "A legal or admissibility issue (fraud allegation, ban, removal)", guidance: "Do not reapply until you have qualified legal advice." },
];

const documentChecklist = [
  "Previous visa refusal letter or notification",
  "Copy of the previous application form and submitted documents",
  "Passport and travel history (previous visas and stamps)",
  "Updated bank statements with explanations for large deposits",
  "Income and salary documents",
  "Employment certificate with leave details",
  "Business registration and business financial evidence, where applicable",
  "Tax documents, where relevant",
  "Property or family ties evidence, where relevant",
  "Updated travel itinerary",
  "Accommodation details",
  "Sponsorship documents",
  "Invitation letter, where applicable",
  "Explanation letter or cover letter",
  "New supporting evidence addressing the specific refusal grounds",
];

const appealLetterElements = [
  { t: "Correct recipient", d: "Send it to the body named in your refusal notice, in the format and language it requires." },
  { t: "Applicant identification", d: "Full name as in your passport, date of birth, passport number and contact details." },
  { t: "Application reference", d: "Include the application, file or case number and the visa category." },
  { t: "Refusal decision date", d: "State the decision date and, if relevant, the date you received it." },
  { t: "Relevant refusal grounds", d: "Quote or list each ground in the notice exactly as written." },
  { t: "Clear factual explanation", d: "Respond to each ground with facts, not emotion. Point to where the evidence is in your original file." },
  { t: "Evidence for each argument", d: "Reference documents by name and page. Only add new evidence if the procedure allows it." },
  { t: "Respectful professional language", d: "Keep it short, polite and specific." },
  { t: "Requested remedy", d: "State what you ask the authority to do, using the wording of the procedure (for example, to review the decision)." },
  { t: "Supporting document list", d: "End with a numbered list of enclosures." },
];

const appealLetterSample = `[Date]

To: [Name of appeal body or authority exactly as stated on the refusal notice]
[Address or submission channel stated on the notice]

Subject: Appeal / request for review of visa decision, application reference [REFERENCE NUMBER]

Applicant: [Full name as in passport]
Date of birth: [DD/MM/YYYY]
Passport number: [PASSPORT NUMBER]
Visa type: [VISA CATEGORY]
Decision date: [DATE OF REFUSAL]
Refusal grounds cited: [List each ground as written in the notice]

Dear Sir or Madam,

I am writing to [appeal / request a review of] the decision dated [DATE] refusing my application for a [VISA TYPE], in accordance with the procedure described in my decision notice.

1. Ground cited: [GROUND 1]
My response: [Short factual explanation]. This is shown in [DOCUMENT NAME, page or section].

2. Ground cited: [GROUND 2]
My response: [Short factual explanation]. This is shown in [DOCUMENT NAME].

[Add further grounds as needed.]

I respectfully request that you [review the decision / reconsider the application] in light of the information above.

Enclosures:
1. Copy of the decision notice
2. Copy of the application and supporting documents originally submitted
3. [Any additional document, only if this procedure permits it]

Yours faithfully,
[Full name]
[Phone] | [Email]`;

const coverLetterElements = [
  { t: "Disclose the previous refusal", d: "State clearly that you were previously refused and for which visa." },
  { t: "Give the refusal date", d: "Include the date and the issuing office." },
  { t: "Name the specific concerns", d: "Summarise the concerns in the notice using plain words." },
  { t: "Explain what has changed", d: "Say what is different now, in concrete terms." },
  { t: "List new documents", d: "Point to the new evidence that responds to each concern." },
  { t: "Update the travel purpose", d: "Describe the trip, dates and arrangements clearly and consistently." },
  { t: "Show genuine financial improvement", d: "Only describe improvements that are true and documented." },
  { t: "Explain any inconsistency", d: "If a mismatch existed, correct it and explain it honestly." },
  { t: "Close respectfully", d: "Thank the officer and confirm you will provide anything further they need." },
];

const coverLetterSample = `[Date]

To: The Visa Officer, [Embassy / High Commission / Consulate]

Re: New application for a [VISA TYPE], passport number [PASSPORT NUMBER]

Dear Visa Officer,

I am applying for a [VISA TYPE] to travel to [COUNTRY] from [DATE] to [DATE] for [PURPOSE].

Previous refusal
I was refused a [VISA TYPE] on [DATE] by [OFFICE]. The concerns stated were: [SUMMARY OF CONCERNS].

What has changed
1. [Concern 1]: [What has changed and which document shows it].
2. [Concern 2]: [What has changed and which document shows it].
3. [Inconsistency, if any]: [Honest explanation and corrected document].

Travel plan
[Short description of itinerary, accommodation and who pays for what.]

Documents enclosed
[Numbered list of documents, noting which are new since the previous application.]

I have answered all questions in the application form truthfully, including the previous refusal. Please contact me if you need anything further.

Yours faithfully,
[Full name]
[Phone] | [Email]`;

const repeatedRefusals = [
  { t: "Do multiple refusals block future applications?", d: "Not automatically. No set number of refusals makes you permanently ineligible. Each application is assessed on its own facts, though earlier refusals are part of your history." },
  { t: "How repeated refusals may affect assessment", d: "An officer may look at whether the same concern appears again. If you repeat a file with no change, a repeat refusal is more likely." },
  { t: "Why hiding a refusal is dangerous", d: "A false or incomplete answer can lead to a misrepresentation concern, which can carry consequences beyond the visa refusal itself." },
  { t: "Review previous decisions together", d: "Lay out each refusal letter side by side and note what changed between applications." },
  { t: "Identify recurring weaknesses", d: "Look for patterns such as finances, ties, purpose or documents. Fix the pattern, not just the latest line." },
  { t: "When to get legal advice", d: "If a refusal mentions fraud, a ban, removal or admissibility, or if you are considering court action, speak to a qualified immigration lawyer." },
];

const costItems = [
  "Appeal or administrative review fees, where the procedure charges one",
  "New visa application fees",
  "Biometrics fees, if applicable",
  "Document translation and attestation",
  "Medical examination, if required",
  "Courier or application-centre charges",
  "Professional consultation and document-preparation fees",
];

const services = [
  "Visa refusal letter review",
  "Identification of refusal grounds",
  "Assessment of appeal eligibility",
  "Guidance on administrative review where applicable",
  "Reapplication strategy",
  "Supporting document checklist",
  "Financial document guidance",
  "Appeal letter preparation assistance",
  "Reapplication cover letter assistance",
  "Application form review",
  "Document consistency checks",
  "Travel purpose and itinerary guidance",
  "Appointment and submission guidance where applicable",
  "Follow-up guidance",
];

const journey = [
  { t: "Contact Eammu Holidays", d: "Message the team on WhatsApp or through the website." },
  { t: "Share your refusal letter", d: "Send the refusal letter and relevant application details through a secure communication channel the team confirms." },
  { t: "Team review", d: "Our team reviews the information you provide." },
  { t: "Guidance on routes", d: "Receive guidance on possible appeal, review or reapplication routes." },
  { t: "Prepare documents", d: "Prepare the documents required for the route you choose." },
  { t: "Proceed with the application or appeal", d: "Proceed with the applicable appeal or new application." },
  { t: "Preparation and submission guidance", d: "Receive application preparation and submission guidance." },
];

const legalSituations = [
  "Allegations of fraud or misrepresentation",
  "Immigration bans or re-entry restrictions",
  "Deportation or removal issues",
  "A complex immigration history with several countries",
  "Judicial review or any court proceeding",
  "Serious legal or admissibility concerns",
];

const officialSources = [
  ["Canada: canada.ca", "https://www.canada.ca"],
  ["United Kingdom: gov.uk", "https://www.gov.uk"],
  ["United States: travel.state.gov", "https://travel.state.gov"],
  ["European Union: home-affairs.ec.europa.eu", "https://home-affairs.ec.europa.eu"],
  ["Australia: immi.homeaffairs.gov.au", "https://immi.homeaffairs.gov.au"],
  ["New Zealand: immigration.govt.nz", "https://www.immigration.govt.nz"],
  ["Japan: mofa.go.jp", "https://www.mofa.go.jp"],
  ["UAE: icp.gov.ae", "https://icp.gov.ae"],
];

// ─── Small presentational helpers (server-safe) ───────────────────────────────
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

const remedyLabels = [
  ["A", "Formal appeal rights"],
  ["B", "Administrative review"],
  ["C", "Reconsideration request"],
  ["D", "Judicial remedies"],
  ["E", "Fresh application"],
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function VisaAppealProcessPage() {
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <style>{`
        @keyframes heroIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        .hero-in { animation: heroIn 0.6s ease-out both; }
        @media (prefers-reduced-motion: reduce) { .hero-in { animation: none; } }
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
        details > summary::-webkit-details-marker { display: none; }
      `}</style>

      <main className="min-h-screen bg-[#f6f8f7] font-sans text-gray-800">
        {/* ── A. HERO ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#003d21] via-[#005a31] to-[#0b7a46] px-4 py-16 text-white md:py-20">
          <div className="relative z-10 mx-auto mt-8 max-w-5xl text-center">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap justify-center gap-2 text-xs text-green-100">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/visa-rejection" className="hover:text-white">Visa Rejection Help</Link></li>
                <li aria-hidden="true">/</li>
                <li className="font-semibold text-white" aria-current="page">Visa Appeal Process</li>
              </ol>
            </nav>

            <p className="hero-in mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold">
              <AlertTriangle className="h-3.5 w-3.5 text-orange-300" aria-hidden="true" />
              Last reviewed {LAST_REVIEWED}
            </p>

            <h1 className="hero-in mb-6 text-3xl font-black leading-tight tracking-tight md:text-5xl" style={{ animationDelay: "80ms" }}>
              Visa Rejected? Complete Visa Appeal &amp; Reapplication Guide for Bangladeshi Applicants
            </h1>

            <p className="hero-in mx-auto mb-8 max-w-3xl text-base leading-relaxed text-green-50 md:text-lg" style={{ animationDelay: "160ms" }}>
              A refusal does not automatically mean you can never receive a visa. Understand your refusal
              reasons, check whether an appeal, administrative review or reconsideration may be available,
              explore reapplication options and get professional assistance from Eammu Holidays. No one can
              guarantee approval, and the final decision always rests with the immigration authority.
            </p>

            <div className="hero-in flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap" style={{ animationDelay: "240ms" }}>
              <a
                href={wa("My visa was rejected and I need help")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto md:text-base"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Get Help With My Visa Rejection
              </a>
              <a
                href="#compare-routes"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/15 px-8 py-4 text-sm font-bold text-white hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto md:text-base"
              >
                Explore Appeal &amp; Reapplication Options
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          {/* Sticky TOC (desktop) */}
          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-28 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="mb-2 px-3 text-sm font-bold text-[#005a31]">On this page</p>
              {tocList}
            </nav>
          </aside>

          <div className="min-w-0 space-y-16">
            {/* TOC (mobile, collapsible) */}
            <details className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm lg:hidden">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between font-bold text-[#005a31]">
                On this page
                <Plus className="h-5 w-5 text-orange-500" aria-hidden="true" />
              </summary>
              <nav aria-label="On this page (mobile)" className="mt-3">{tocList}</nav>
            </details>

            {/* ── INTRO ── */}
            <section aria-labelledby="intro-heading">
              <h2 id="intro-heading" className="mb-5 border-l-8 border-orange-500 pl-5 text-2xl font-extrabold text-[#005a31] md:text-3xl">
                A Refusal Is a Setback, Not Always the End
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
                <p>
                  If you have just received a visa refusal, you may be worried about the money spent, cancelled plans
                  and whether another application will also fail. It helps to know that your options depend on the
                  country, the visa category, the reasons for refusal and the rules that apply to your decision.
                  Depending on those factors you may be able to appeal, request an administrative review, ask for
                  reconsideration where available, or submit a stronger new application.
                </p>
                <p>
                  These are different procedures. An appeal or review asks an authority to check the decision
                  already made. A reapplication is a new application assessed on its own evidence. Reconsideration
                  is not a right in every country, and judicial review is a legal remedy with specific requirements.
                  This guide explains each one in simple terms so you can choose your next step with confidence.
                </p>
                <p>
                  If you are not yet sure why you were refused, read our{" "}
                  <Link href="/visa-rejection/common-reasons" className="font-semibold text-[#005a31] underline hover:text-orange-600">
                    common visa rejection reasons guide
                  </Link>
                  . Immigration rules change, so always check the official website and your own refusal notice.
                </p>
              </div>
            </section>

            {/* ── B. AFTER REJECTION ── */}
            <section id="after-rejection" className="scroll-mt-28">
              <SectionHeading icon={ClipboardCheck} title="What Happens After Your Visa Is Rejected?">
                These are the steps to take in the first days after you receive a refusal.
              </SectionHeading>
              <ol className="grid gap-4 sm:grid-cols-2">
                {firstSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#005a31] text-sm font-black text-white">{i + 1}</span>
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-gray-900">{s.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-600">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* ── C. REASONS ── */}
            <section id="why-rejected" className="scroll-mt-28">
              <SectionHeading icon={AlertTriangle} title="Why Was My Visa Rejected?">
                Visa officers assess each case on its own facts. These are common concerns, what an officer may have
                considered and how you might respond. Open each one to read more. For a wider overview see our{" "}
                <Link href="/visa-rejection/common-reasons" className="font-semibold text-[#005a31] underline hover:text-orange-600">
                  guide to common visa rejection reasons
                </Link>
                .
              </SectionHeading>
              <div className="space-y-3">
                {reasons.map((r) => (
                  <details key={r.title} className="group rounded-2xl border border-gray-200 bg-white p-5 open:border-orange-300">
                    <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#005a31]">
                      <span>{r.title}</span>
                      <Plus className="h-5 w-5 flex-shrink-0 text-orange-500 transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
                    </summary>
                    <dl className="mt-3 space-y-3 text-sm leading-relaxed text-gray-600">
                      <div><dt className="font-bold text-gray-900">What the officer may have considered</dt><dd>{r.officer}</dd></div>
                      <div><dt className="font-bold text-gray-900">What to check</dt><dd>{r.check}</dd></div>
                      <div><dt className="font-bold text-gray-900">Evidence that may help</dt><dd>{r.evidence}</dd></div>
                      <div><dt className="font-bold text-gray-900">Appeal or fresh application?</dt><dd>{r.route}</dd></div>
                    </dl>
                  </details>
                ))}
              </div>
            </section>

            {/* ── D. COMPARISON ── */}
            <section id="compare-routes" className="scroll-mt-28">
              <SectionHeading icon={Scale} title="Visa Appeal vs Administrative Review vs Reapplication">
                Reconsideration is not a universal right, and judicial review is a legal remedy with specific
                requirements. Neither exists as a standard option in every country.
              </SectionHeading>

              {/* Table: tablet and desktop */}
              <div className="hidden overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm md:block">
                <table className="w-full min-w-[900px] border-collapse text-left text-sm">
                  <caption className="sr-only">Comparison of visa appeal, administrative review, reconsideration, judicial review and fresh reapplication</caption>
                  <thead className="bg-[#005a31] text-white">
                    <tr>
                      {["Procedure", "What it means", "When available", "New documents?", "Original decision reassessed?", "Fee", "Deadline", "Consider before choosing"].map((h) => (
                        <th key={h} scope="col" className="px-3 py-3 font-bold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {compareRows.map((r) => (
                      <tr key={r.name} className="border-t border-gray-100 align-top odd:bg-gray-50">
                        <th scope="row" className="px-3 py-3 font-bold text-[#005a31]">{r.name}</th>
                        <td className="px-3 py-3">{r.what}</td>
                        <td className="px-3 py-3">{r.when}</td>
                        <td className="px-3 py-3">{r.newDocs}</td>
                        <td className="px-3 py-3">{r.reassess}</td>
                        <td className="px-3 py-3">{r.fee}</td>
                        <td className="px-3 py-3">{r.deadline}</td>
                        <td className="px-3 py-3">{r.consider}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Cards: mobile */}
              <div className="space-y-4 md:hidden">
                {compareRows.map((r) => (
                  <article key={r.name} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="mb-3 text-lg font-black text-[#005a31]">{r.name}</h3>
                    <dl className="space-y-2 text-sm leading-relaxed text-gray-600">
                      <div><dt className="font-bold text-gray-900">What it means</dt><dd>{r.what}</dd></div>
                      <div><dt className="font-bold text-gray-900">When available</dt><dd>{r.when}</dd></div>
                      <div><dt className="font-bold text-gray-900">New documents?</dt><dd>{r.newDocs}</dd></div>
                      <div><dt className="font-bold text-gray-900">Original decision reassessed?</dt><dd>{r.reassess}</dd></div>
                      <div><dt className="font-bold text-gray-900">Fee</dt><dd>{r.fee}</dd></div>
                      <div><dt className="font-bold text-gray-900">Deadline</dt><dd>{r.deadline}</dd></div>
                      <div><dt className="font-bold text-gray-900">Consider before choosing</dt><dd>{r.consider}</dd></div>
                    </dl>
                  </article>
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <h3 className="mb-2 flex items-center gap-2 font-black text-gray-900"><Scale className="h-5 w-5 text-blue-700" aria-hidden="true" /> An appeal or review may fit when</h3>
                  <p className="text-sm leading-relaxed text-gray-700">The notice offers a named procedure with a deadline, and you can point to evidence you already submitted that the officer appears to have missed or misread.</p>
                </div>
                <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
                  <h3 className="mb-2 flex items-center gap-2 font-black text-gray-900"><RefreshCw className="h-5 w-5 text-[#005a31]" aria-hidden="true" /> A fresh application may fit when</h3>
                  <p className="text-sm leading-relaxed text-gray-700">The refusal showed a real gap, no formal route exists or has expired, and you can submit meaningfully stronger evidence.</p>
                </div>
              </div>
            </section>

            {/* ── E. COUNTRY GUIDE ── */}
            <section id="country-guide" className="scroll-mt-28">
              <SectionHeading icon={Globe2} title="Country-by-Country Visa Appeal & Reapplication Guide">
                Rules depend on visa category, nationality, where you applied, the type of decision and the date.
                We have not invented deadlines, fees or rights. Where a rule varies, the card tells you to check
                your own notice and the official source. Information last reviewed {LAST_REVIEWED}.
              </SectionHeading>

              <nav aria-label="Jump to a country" className="mb-8 flex flex-wrap gap-2">
                {countries.map((c) => (
                  <a key={c.id} href={`#country-${c.id}`} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-[#005a31] hover:text-[#005a31] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
                    {c.name.replace(" (overview)", "")}
                  </a>
                ))}
              </nav>

              <div className="grid gap-6 xl:grid-cols-2">
                {countries.map((c) => (
                  <article key={c.id} id={`country-${c.id}`} className="scroll-mt-28 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#005a31]">
                        <c.Icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </span>
                      <h3 className="text-xl font-black text-gray-900">{c.name}</h3>
                    </div>

                    <dl className="space-y-3 text-sm leading-relaxed text-gray-600">
                      {remedyLabels.map(([k, label]) => (
                        <div key={k}>
                          <dt className="font-bold text-[#005a31]">{label}</dt>
                          <dd>{c[k]}</dd>
                        </div>
                      ))}
                      <div>
                        <dt className="flex items-center gap-1.5 font-bold text-orange-700"><Clock className="h-4 w-4" aria-hidden="true" /> Waiting periods and restrictions</dt>
                        <dd>{c.waiting}</dd>
                      </div>
                      <div>
                        <dt className="font-bold text-orange-700">Deadlines</dt>
                        <dd>{c.deadlines}</dd>
                      </div>
                    </dl>

                    <details className="group mt-4 rounded-xl bg-gray-50 p-4">
                      <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between font-bold text-gray-900">
                        Documents to consider and first steps
                        <Plus className="h-4 w-4 text-orange-500 transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
                      </summary>
                      <div className="mt-2 space-y-2 text-sm leading-relaxed text-gray-600">
                        <p><strong className="text-gray-900">Documents that may strengthen a new application: </strong>{c.docs}</p>
                        <p><strong className="text-gray-900">What to do immediately: </strong>{c.first}</p>
                      </div>
                    </details>

                    <div className="mt-4">
                      <p className="mb-2 text-xs font-bold text-gray-500">Official sources</p>
                      <div className="flex flex-wrap gap-2">
                        {c.links.map(([label, href]) => (
                          <OfficialLink key={href} href={href}>{label}</OfficialLink>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <p className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm leading-relaxed text-gray-700">
                Policies change. Always check the deadline on your actual refusal notice and the current official
                rules. Where information cannot be verified here, contact the relevant authority.
              </p>
            </section>

            {/* ── F. REAPPLY ── */}
            <section id="reapply-timing" className="scroll-mt-28">
              <SectionHeading icon={RefreshCw} title="Can I Reapply Immediately After Visa Rejection?">
                In many systems you can reapply soon after a refusal, but being allowed to apply does not mean you
                should.
              </SectionHeading>
              <div className="space-y-4 text-base leading-relaxed text-gray-700">
                <p>
                  There is no universal waiting period for every country. Some destinations have no stated
                  waiting time for a standard visitor reapplication, while specific refusal types or immigration
                  history can carry restrictions. Check the official rules for your destination and the wording of
                  your refusal.
                </p>
                <p>
                  Submitting identical documents tends to produce the same concerns, and a growing refusal record
                  can make later files harder to assess. A simple documentation error, such as a missing page or
                  unsigned form, may be corrected sooner. Financial weakness or weak ties usually need a longer
                  period of genuine improvement, since officers look at the history of your funds and circumstances.
                  A previous refusal can affect how the next application is read, which is why honest disclosure and
                  a clear explanation matter.
                </p>
              </div>
              <h3 className="mb-3 mt-8 text-lg font-black text-gray-900">A practical decision guide</h3>
              <ul className="grid gap-4 md:grid-cols-2">
                {reapplyGuide.map((g) => (
                  <li key={g.situation} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                    <p className="mb-1 text-sm font-bold text-[#005a31]">{g.situation}</p>
                    <p className="text-sm leading-relaxed text-gray-600">{g.guidance}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5">
                <h3 className="mb-2 flex items-center gap-2 font-black text-gray-900"><Ban className="h-5 w-5 text-red-700" aria-hidden="true" /> Mistakes that can turn one refusal into two</h3>
                <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-700">
                  <li>Resubmitting the same application with no real change</li>
                  <li>Fixing only the first reason and ignoring secondary concerns</li>
                  <li>Missing an appeal or review deadline</li>
                  <li>Hiding the previous refusal</li>
                  <li>Adding a large deposit shortly before applying</li>
                </ul>
              </div>
            </section>

            {/* ── G. DOCUMENTS ── */}
            <section id="documents" className="scroll-mt-28">
              <SectionHeading icon={ListChecks} title="Documents Required After Visa Rejection">
                Only provide documents that are relevant to your circumstances and to the requirements of the
                country and visa category. Use the{" "}
                <Link href="/travel-resources/visa-checklist-generator" className="font-semibold text-[#005a31] underline hover:text-orange-600">visa checklist generator</Link>{" "}
                and our{" "}
                <Link href="/travel-resources/bank-statement-for-visa" className="font-semibold text-[#005a31] underline hover:text-orange-600">bank statement guide</Link>{" "}
                for more.
              </SectionHeading>
              <ul className="grid gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:grid-cols-2">
                {documentChecklist.map((d) => (
                  <li key={d} className="flex gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#005a31]" aria-hidden="true" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── H. APPEAL LETTER ── */}
            <section id="appeal-letter" className="scroll-mt-28">
              <SectionHeading icon={FileText} title="How to Write a Visa Appeal Letter">
                A formal appeal letter and a reapplication cover letter are different documents. A generic letter
                cannot replace country-specific legal requirements, so always follow the instructions on your
                refusal notice.
              </SectionHeading>
              <ul className="grid gap-3 sm:grid-cols-2">
                {appealLetterElements.map((e) => (
                  <li key={e.t} className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-[#005a31]">{e.t}</p>
                    <p className="text-sm leading-relaxed text-gray-600">{e.d}</p>
                  </li>
                ))}
              </ul>
              <h3 className="mb-3 mt-8 text-lg font-black text-gray-900">Sample appeal letter (replace every placeholder)</h3>
              <pre className="max-w-full overflow-x-auto whitespace-pre-wrap break-words rounded-2xl border border-gray-200 bg-white p-5 text-sm leading-relaxed text-gray-800">{appealLetterSample}</pre>
              <p className="mt-3 text-sm text-gray-500">This is a structure to adapt. Use the body, wording and format your decision notice requires.</p>
            </section>

            {/* ── I. COVER LETTER ── */}
            <section id="cover-letter" className="scroll-mt-28">
              <SectionHeading icon={FileText} title="Visa Reapplication Cover Letter After Refusal">
                A cover letter for a new application tells the officer what has changed since the refusal. It
                should be short, truthful and specific.
              </SectionHeading>
              <ul className="grid gap-3 sm:grid-cols-2">
                {coverLetterElements.map((e) => (
                  <li key={e.t} className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-[#005a31]">{e.t}</p>
                    <p className="text-sm leading-relaxed text-gray-600">{e.d}</p>
                  </li>
                ))}
              </ul>
              <h3 className="mb-3 mt-8 text-lg font-black text-gray-900">Sample cover letter structure</h3>
              <pre className="max-w-full overflow-x-auto whitespace-pre-wrap break-words rounded-2xl border border-gray-200 bg-white p-5 text-sm leading-relaxed text-gray-800">{coverLetterSample}</pre>
            </section>

            {/* ── J. MULTIPLE REFUSALS ── */}
            <section id="multiple-refusals" className="scroll-mt-28">
              <SectionHeading icon={AlertTriangle} title="What If My Visa Is Rejected More Than Once?">
                Repeated refusals are harder, but they are not an automatic permanent bar.
              </SectionHeading>
              <div className="grid gap-4 md:grid-cols-2">
                {repeatedRefusals.map((r) => (
                  <article key={r.t} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                    <h3 className="mb-1 text-sm font-bold text-[#005a31]">{r.t}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{r.d}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* ── K. COSTS ── */}
            <section id="costs" className="scroll-mt-28">
              <SectionHeading icon={Wallet} title="Visa Appeal & Reapplication Costs">
                Costs depend on the destination, the procedure and your circumstances. We do not list fixed amounts
                here because they change. Check the official website for current government fees.
              </SectionHeading>
              <ul className="grid gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:grid-cols-2">
                {costItems.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#005a31]" aria-hidden="true" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Government fees and Eammu Holidays service charges are separate and depend on the service and
                destination. Ask the team about service charges before you proceed.
              </p>
            </section>

            {/* ── L. EAMMU HELP ── */}
            <section id="eammu-help" className="scroll-mt-28 rounded-3xl border border-green-100 bg-white p-6 shadow-sm md:p-10">
              <SectionHeading icon={ShieldCheck} title="How Eammu Holidays Helps After Visa Rejection">
                Eammu Holidays is a travel and visa consultancy that helps applicants understand their options and
                prepare stronger, better-organised applications.
              </SectionHeading>
              <ul className="grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#005a31]" aria-hidden="true" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <h3 className="mb-4 mt-8 text-lg font-black text-gray-900">Your journey with us</h3>
              <ol className="space-y-3">
                {journey.map((j, i) => (
                  <li key={j.t} className="flex gap-4 rounded-2xl bg-gray-50 p-4">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-black text-white">{i + 1}</span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{j.t}</p>
                      <p className="text-sm leading-relaxed text-gray-600">{j.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm leading-relaxed text-gray-700">
                Important: Eammu Holidays cannot guarantee visa approval, overturn an embassy decision or
                influence immigration officers, and does not provide legal representation. Final decisions remain
                with the relevant immigration authorities.
              </p>
            </section>

            {/* ── M. LEGAL ADVICE ── */}
            <section id="legal-advice" className="scroll-mt-28">
              <SectionHeading icon={Gavel} title="When Should You Seek Professional Immigration Legal Advice?">
                Consider a qualified immigration lawyer or authorised legal representative in situations such as:
              </SectionHeading>
              <ul className="grid gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:grid-cols-2">
                {legalSituations.map((l) => (
                  <li key={l} className="flex gap-2 text-sm text-gray-700">
                    <Users className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#005a31]" aria-hidden="true" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Consultancy and administrative assistance, such as document preparation and application guidance,
                are different from regulated legal representation. Only a qualified or authorised lawyer can
                represent you in legal proceedings.
              </p>
              <div className="mt-6">
                <p className="mb-2 text-sm font-bold text-gray-700">Official government sources</p>
                <div className="flex flex-wrap gap-2">
                  {officialSources.map(([label, href]) => (
                    <OfficialLink key={href} href={href}>{label}</OfficialLink>
                  ))}
                </div>
              </div>
            </section>

            {/* ── N. FAQ ── */}
            <section id="faq" className="scroll-mt-28">
              <h2 className="mb-8 text-center text-2xl font-black text-[#005a31] md:text-3xl">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((f) => (
                  <details key={f.q} className="group rounded-2xl border border-gray-200 bg-white p-5 transition-colors open:border-orange-300">
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
              <h2 id="related-heading" className="mb-6 text-center text-xl font-black text-[#005a31]">Related Resources</h2>
              <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Related visa resources">
                {relatedResources.map((l) => (
                  <Link key={l.href} href={l.href} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-600 shadow-sm hover:border-[#005a31] hover:text-[#005a31] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </section>

            {/* ── O. FINAL CTA ── */}
            <section className="rounded-3xl bg-[#005a31] p-8 text-center text-white md:p-12">
              <h2 className="mb-4 text-2xl font-black text-orange-300 md:text-3xl">
                Your Visa Was Rejected. Let&apos;s Understand What Went Wrong.
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-green-50 md:text-lg">
                You do not have to navigate the next step alone. Eammu Holidays can help you review your refusal
                letter, understand available options and prepare a more informed appeal or reapplication strategy.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={wa("I want a free initial assessment of my visa refusal letter")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto md:text-base"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Get My Free Initial Refusal Assessment
                </a>
                <a
                  href={wa("Hello Eammu Holidays, I need help after my visa rejection")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/15 px-8 py-4 text-sm font-bold text-white hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto md:text-base"
                >
                  Contact Eammu Holidays on WhatsApp
                </a>
                <Link
                  href="/visa"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/15 px-8 py-4 text-sm font-bold text-white hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto md:text-base"
                >
                  Explore Visa Services
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-green-100">
                This page is general information, not legal advice. Immigration rules change. Last reviewed {LAST_REVIEWED}.
              </p>
            </section>
          </div>
        </div>
      </main>

      <HomeSeoLinks />
    </>
  );
}