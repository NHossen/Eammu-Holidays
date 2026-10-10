// app/travel-resources/can-i-reapply-after-visa-rejection/page.jsx
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://eammu.com"),
  title: {
    default:
      "Can I Reapply After Visa Rejection? 2026 | How Long to Wait + Refusal Reasons + Step-by-Step Guide | Eammu Holidays",
  },
  description:
    "Can you reapply for a visa right after rejection? 2026 guide on when to reapply, how long to wait, refusal reason breakdowns for Schengen, UK, USA, Canada, and Dubai, a week-by-week reapplication plan, document rebuild checklist, and FAQs — by Eammu Holidays.",
  keywords: [
    "can i reapply after visa rejection",
    "reapply for visa after rejection bangladesh",
    "when to reapply for visa after refusal",
    "how long to wait before reapplying for visa",
    "schengen visa reapply after rejection",
    "uk visa reapply after refusal",
    "usa visa reapply after denial",
    "canada visa reapply after rejection",
    "how soon can i reapply for visa",
    "visa reapplication process bangladesh",
    "improve visa application after rejection",
    "reapply visa strategy 2026",
    "how many times can i apply for visa",
    "does visa rejection affect future applications",
    "visa reapplication mistakes to avoid",
    "schengen visa refusal reasons annex vi",
    "214b visa refusal reapply",
    "visa refusal letter meaning",
    "visa reapplication checklist bangladesh",
  ],
  alternates: { canonical: "https://eammu.com/can-i-reapply-after-visa-rejection" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "article",
    url: "https://eammu.com/can-i-reapply-after-visa-rejection",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Can I Reapply After Visa Rejection? 2026 | Eammu Holidays",
    description:
      "Step-by-step guide on reapplying for a visa after rejection — timing, refusal reasons, document fixes, common mistakes, and country-specific advice for Bangladeshi applicants.",
    images: [
      {
        url: "https://eammu.com/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Can I Reapply After Visa Rejection — Eammu Holidays",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    title: "Can I Reapply After Visa Rejection? 2026 | Eammu Holidays",
    images: ["https://eammu.com/preview-banner.webp"],
  },
  icons: { icon: "/emf.jpg", shortcut: "/emf.jpg", apple: "/emf.jpg" },
  category: "travel",
};

// ─── FAQ data ──────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Can I reapply immediately after a visa rejection?",
    a: "In most cases, yes — Schengen, UK, USA, and Canada all allow you to submit a new application right away, with no mandatory cooling-off period. The exception is often Dubai/UAE, where a short waiting period of around 30 days is commonly required. That said, being allowed to reapply immediately doesn't mean you should — reapplying before fixing the actual problem almost always ends the same way.",
  },
  {
    q: "How long should I wait before reapplying for a visa?",
    a: "There's no universal rule, but a commonly recommended window is 3–6 months — enough time to genuinely improve your financial history, correct documentation issues, or gather new evidence of ties to Bangladesh. The right wait time depends entirely on your specific refusal reason, not a fixed calendar rule.",
  },
  {
    q: "Does a visa rejection affect my future applications?",
    a: "A rejection itself isn't a permanent black mark, but it does become part of your record, and future visa officers can usually see it. What matters most is whether your next application shows real, demonstrable change — the same profile submitted twice invites the same outcome, while a genuinely stronger file is judged on its own merits.",
  },
  {
    q: "How many times can I apply for the same visa?",
    a: "There's generally no fixed legal limit on how many times you can apply. However, repeated refusals without addressing the underlying reason can make consular officers more skeptical over time, so quality of preparation matters far more than the number of attempts.",
  },
  {
    q: "Do I have to disclose a previous visa refusal when reapplying?",
    a: "Yes. Nearly every visa application form asks whether you've been refused a visa before, for that country or elsewhere. Always answer honestly — undisclosed refusals that are later discovered are treated far more seriously than the original rejection itself.",
  },
  {
    q: "What's the biggest mistake people make when reapplying?",
    a: "Resubmitting the same documents without addressing the specific reason for refusal. Visa officers compare your new application against your history, and an unchanged profile signals that nothing has actually improved — which is the single most common cause of a second rejection.",
  },
  {
    q: "What does my Schengen refusal letter actually mean?",
    a: "Schengen refusal letters use a standard checklist form under Annex VI of the EU Visa Code — the officer ticks one or more boxes rather than writing a detailed explanation. Common boxes relate to unclear purpose of travel, insufficient financial means, missing travel insurance, or doubts about your intention to leave before the visa expires. Understanding exactly which box (or boxes) were ticked is the starting point for any reapplication strategy.",
  },
  {
    q: "What is a 214(b) refusal for a US visa, and can I still reapply?",
    a: "A 214(b) refusal under the US Immigration and Nationality Act means the officer wasn't convinced you have strong enough ties to Bangladesh to guarantee your return. You can reapply immediately, but it only makes sense once you have new, concrete evidence of ties — employment, property, family obligations, or a stronger travel history — since reapplying with an unchanged profile almost always repeats the outcome.",
  },
  {
    q: "What is a 221(g) refusal, and is it different from a full denial?",
    a: "A 221(g) is technically a 'refusal pending', not a final denial — it means the consular officer needs additional documents or administrative processing before a decision can be made. If you receive one, follow the instructions in your notice and submit the requested items as soon as possible rather than starting a brand-new application.",
  },
  {
    q: "Can I request the reason for a Canadian visa refusal?",
    a: "Yes. You can request your GCMS (Global Case Management System) notes from IRCC, which typically provide more detail than the refusal letter itself about the officer's specific concerns. Reviewing these notes before reapplying helps you target the exact issue instead of guessing.",
  },
  {
    q: "Should I use an immigration lawyer or a visa consultant to reapply?",
    a: "For straightforward refusals — insufficient funds, weak documentation, an incomplete file — a visa consultant can usually rebuild your case effectively. For refusals involving past immigration violations, security flags, or a formal ban, it's worth getting a qualified immigration lawyer involved alongside your travel consultant.",
  },
  {
    q: "Can a previous refusal lead to an entry ban?",
    a: "A standard refusal for reasons like insufficient funds or unclear travel purpose does not, by itself, result in a ban. Bans are more commonly linked to serious issues such as fraud, misrepresentation, document forgery, or a prior overstay. If your refusal letter references any of these, treat it as a signal to seek specialised legal advice before reapplying.",
  },
  {
    q: "Will visiting other countries first improve my next application?",
    a: "It can help, especially for first-time applicants with no travel history. A track record of visiting other countries (UAE, Malaysia, Thailand, or Schengen states) and returning to Bangladesh on time — without any overstays — adds credibility to your travel intentions on a later, more demanding application such as the USA or UK.",
  },
  {
    q: "Is the visa fee refunded if my application is rejected?",
    a: "No. The visa processing fee is charged for the assessment of your application, not for a guaranteed outcome, so it is not refunded if the visa is refused. You will need to pay the fee again when you submit a new application.",
  },
  {
    q: "Can Eammu Holidays help me understand why my visa was rejected?",
    a: "Yes. Our consultants review your refusal letter or decision notice, identify the specific reason cited, and help you rebuild a stronger, more consistent document package before you reapply.",
  },
];

// ─── Structured data ────────────────────────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://eammu.com/can-i-reapply-after-visa-rejection#article",
      headline: "Can I Reapply After a Visa Rejection? — 2026 Step-by-Step Guide for Bangladesh",
      description:
        "When and how to reapply for a visa after rejection — timing considerations, refusal reason breakdowns, document improvements, common mistakes, and country-specific guidance for Bangladeshi applicants.",
      image: "https://eammu.com/preview-banner.webp",
      author: { "@type": "Organization", name: "Eammu Holidays", url: "https://eammu.com" },
      publisher: {
        "@type": "Organization",
        name: "Eammu Holidays",
        logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" },
      },
      datePublished: "2026-01-10",
      dateModified: "2026-09-02",
      mainEntityOfPage: "https://eammu.com/can-i-reapply-after-visa-rejection",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
        { "@type": "ListItem", position: 2, name: "Travel Resources", item: "https://eammu.com/travel-resources" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Can I Reapply After Visa Rejection",
          item: "https://eammu.com/can-i-reapply-after-visa-rejection",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

// ─── Data arrays ─────────────────────────────────────────────────────────────
const timing = [
  {
    flag: "🇪🇺",
    country: "Schengen Visa",
    canReapply: "Yes, immediately",
    bestPractice:
      "Wait until you can show a meaningful change — stronger finances, new employment proof, or corrected documents. Reapplying within days with identical documents almost always fails again.",
  },
  {
    flag: "🇬🇧",
    country: "UK Visa",
    canReapply: "Yes, immediately",
    bestPractice:
      "UKVI recommends submitting a fresh, complete application addressing the specific refusal reason listed in your decision letter. No mandatory cooling-off period, but rushed reapplications rarely succeed. An Administrative Review is a separate, faster route if you believe the officer made a factual or legal error, rather than a full reapplication.",
  },
  {
    flag: "🇺🇸",
    country: "USA Visa (B1/B2)",
    canReapply: "Yes, but pay new MRV fee",
    bestPractice:
      "You can book a new interview any time, but consular officers see your refusal history. Most successful reapplicants wait 2–6 months and bring substantially new evidence of ties and finances. The category cited on your form (214(b), 221(g), or 212(a)) changes the right next step significantly.",
  },
  {
    flag: "🇨🇦",
    country: "Canada Visa",
    canReapply: "Yes, immediately",
    bestPractice:
      "IRCC allows immediate reapplication, but recommends addressing the specific reasons given in your refusal letter. GCMS notes can be requested from IRCC for more detail on the refusal reasoning before you decide what to change.",
  },
  {
    flag: "🇦🇪",
    country: "Dubai / UAE Visa",
    canReapply: "Usually after 30 days",
    bestPractice:
      "UAE authorities often require a short cooling-off period. Reapplying through a licensed travel agency like Eammu Holidays with corrected documentation and a clear sponsor arrangement significantly improves success rates.",
  },
];

const fixSteps = [
  {
    step: "01",
    title: "Get Your Refusal Letter Reviewed",
    desc: "Have a professional visa consultant analyse your specific refusal reason — not just the general category, but the exact wording used by the embassy. This determines your entire reapplication strategy.",
  },
  {
    step: "02",
    title: "Address the Root Cause Directly",
    desc: "If refused for insufficient funds, fix your bank statement and balance. If refused for weak ties, strengthen your employment, property, or family documentation. Never reapply without fixing the specific issue cited.",
  },
  {
    step: "03",
    title: "Wait for a Meaningful Change",
    desc: "Give yourself time to genuinely improve your situation — a few months of consistent salary deposits, a property purchase, or a promotion at work all create real, demonstrable change.",
  },
  {
    step: "04",
    title: "Rebuild Your Document Package Completely",
    desc: "Don't just patch the weak point — review every document for consistency, currency, and completeness. A reapplication should be noticeably stronger across the board, not just in one area.",
  },
  {
    step: "05",
    title: "Disclose the Previous Rejection Honestly",
    desc: "Every reapplication form will ask about prior refusals. Always answer truthfully and, where space allows, briefly note what has changed since the rejection.",
  },
];

const mistakes = [
  {
    icon: "❌",
    title: "Reapplying With the Exact Same Documents",
    desc: "If nothing in your file has changed — same job status, same bank balance, same itinerary — the outcome almost always repeats. Officers compare each new application against your history.",
  },
  {
    icon: "❌",
    title: "Ignoring the Stated Refusal Reason",
    desc: "Trying again 'and hoping for a different officer' isn't a strategy. Every reapplication should visibly respond to the exact wording of your original refusal.",
  },
  {
    icon: "❌",
    title: "Hiding a Previous Refusal",
    desc: "Leaving the refusal question blank or answering 'no' when it isn't true is treated far more seriously than the original rejection, and can lead to a longer-term ban in some countries.",
  },
  {
    icon: "❌",
    title: "Reapplying Too Soon Without Real Change",
    desc: "A cosmetic fix — like a single large deposit — rarely convinces an officer. Genuine improvement takes a little time to show up in your documents.",
  },
  {
    icon: "❌",
    title: "Submitting an Identical Cover Letter or Itinerary",
    desc: "If your travel story, dates, or explanation letter read exactly like the refused application, it signals nothing has been reconsidered. Rewrite your itinerary and cover letter to reflect what has actually changed.",
  },
  {
    icon: "❌",
    title: "Panicking Into a Different, Unrelated Visa Category",
    desc: "Switching from a tourist to a business visa (or vice versa) purely to 'try something different', without a genuine reason for the change, usually raises more questions than it answers.",
  },
];

// Refusal reasons mapped to practical fixes — generic, cross-country reference table
const refusalReasonFixes = [
  {
    reason: "Insufficient or unclear financial means",
    whatItMeans:
      "The officer isn't convinced your funds genuinely cover the trip, or your bank statement shows inconsistent, unexplained, or very recent large deposits.",
    fix: "Rebuild your bank statement over 2–3 months with steady balances, get a fresh solvency certificate, and if needed add a sponsor's documents with a signed letter.",
  },
  {
    reason: "Weak or unclear ties to home country",
    whatItMeans:
      "Your file didn't convince the officer that you have strong enough reasons — job, family, property — to return to Bangladesh after the trip.",
    fix: "Add an employment or leave-approval letter, property or land documents, family dependency proof, or evidence of an ongoing business — anything that anchors you at home.",
  },
  {
    reason: "Unclear or unverifiable purpose of travel",
    whatItMeans:
      "Your itinerary, invitation letter, or cover letter didn't tell a clear, consistent story about why you're travelling and what you'll be doing.",
    fix: "Rewrite your cover letter and itinerary so dates, bookings, and the stated purpose all match exactly, and attach any invitation or conference/event confirmation if relevant.",
  },
  {
    reason: "Missing or invalid travel insurance",
    whatItMeans:
      "Your Schengen application lacked proof of medical/travel insurance meeting the minimum coverage and validity requirements.",
    fix: "Purchase Schengen-compliant travel insurance covering at least €30,000 in medical and repatriation costs for the full length of your trip, and attach the policy certificate.",
  },
  {
    reason: "Incomplete or inconsistent documents",
    whatItMeans:
      "Pages were missing, dates didn't line up across documents, or your form answers contradicted your supporting paperwork.",
    fix: "Go through every document line by line against your application form before resubmitting — names, dates, employer details, and travel dates must all match exactly.",
  },
  {
    reason: "Previous overstay or visa violation",
    whatItMeans:
      "A past overstay, unauthorised work, or breach of visa conditions — yours or a close family member's on a linked application — raised concerns about compliance.",
    fix: "This category needs more than document fixes. Seek advice from an immigration lawyer alongside your travel consultant before reapplying, since a formal ban may apply in serious cases.",
  },
];

const monthsByReason = [
  { reason: "Missing or minor document error", wait: "As soon as corrected", note: "Fix the gap, then reapply — no real waiting period needed." },
  { reason: "Insufficient funds / weak financial history", wait: "2–4 months", note: "Time needed to build a steady, verifiable balance and salary trail." },
  { reason: "Weak ties to home country", wait: "3–6 months", note: "Time to add or update employment, property, or family documentation." },
  { reason: "Unclear travel purpose / inconsistent itinerary", wait: "As soon as corrected", note: "Rewrite the itinerary and cover letter; no long wait usually needed." },
  { reason: "Previous overstay or violation", wait: "6+ months, legal advice first", note: "Consult an immigration lawyer before setting any timeline." },
];

const weeklyPlan = [
  { week: "Week 1", focus: "Get and read your refusal letter carefully. Book a consultation with Eammu Holidays or another advisor to identify exactly which box or reason applies to your case." },
  { week: "Week 2", focus: "List every document from your refused application and mark which ones directly relate to the stated refusal reason. Start requesting fresh copies (bank statement, employment letter, etc.)." },
  { week: "Weeks 3–6", focus: "Actively build the missing evidence — maintain a steady bank balance, gather updated employment or property proof, or arrange a sponsor if needed. This is usually the longest phase." },
  { week: "Week 7", focus: "Rebuild your full document package from scratch — don't just add one new paper to the old file. Rewrite your cover letter and itinerary to reflect the current situation." },
  { week: "Week 8", focus: "Have your full package reviewed by a consultant before booking your appointment. Cross-check every date, name, and figure across every document." },
  { week: "Week 9+", focus: "Book your appointment (or submit online, where applicable) once your file is genuinely stronger than the refused one — not on a fixed calendar date." },
];

const documentChecklist = {
  financial: [
    "Bank statement covering the last 3–6 months, bank-stamped where required",
    "Bank solvency certificate dated close to your application date",
    "Sponsor's bank statement and signed sponsorship letter, if applicable",
    "Fixed deposit receipt (FDR) or other savings proof, if you're using it to strengthen the file",
  ],
  employment: [
    "Updated employment certificate or leave-approval letter (NOC) on company letterhead",
    "Latest salary certificate or pay slips matching your bank credits",
    "Trade licence and bank statement, if self-employed or a business owner",
    "Promotion letter or updated appointment letter, if your position has changed since the refusal",
  ],
  travel: [
    "Updated, realistic itinerary matching your new flight and hotel bookings",
    "Fresh cover letter explaining the purpose of travel and referencing what has changed since the refusal",
    "Valid travel/medical insurance certificate meeting the destination's minimum requirements",
    "Invitation letter or event confirmation, if relevant to the purpose of your visit",
  ],
  personal: [
    "Passport valid well beyond your planned return date, with enough blank pages",
    "Property, land, or family dependency documents supporting your ties to Bangladesh",
    "Marriage certificate, birth certificates of dependents, or other family documents, if relevant",
    "A copy of the previous refusal letter/notice, ready to reference honestly on the new form",
  ],
};

const scenarios = [
  {
    title: "Scenario: Tourist Visa Refused for Insufficient Funds",
    body:
      "An applicant's Schengen tourist visa was refused after a large deposit appeared in their account just two weeks before the appointment, with no clear salary history behind it. Rather than reapplying immediately with the same statement, the right approach is to let the balance sit and grow naturally with visible salary credits for 2–3 months, get a fresh solvency certificate, and add a clear source explanation for that earlier deposit before booking a new appointment.",
  },
  {
    title: "Scenario: Business Visa Refused for Unclear Purpose",
    body:
      "A business visa applicant was refused because their invitation letter and itinerary didn't clearly match — the invitation mentioned a conference, but the itinerary showed leisure destinations with no conference dates. The fix here isn't financial at all: it's rewriting the itinerary so it matches the invitation exactly, adding the event registration confirmation, and trimming out unrelated leisure stops that don't support the stated business purpose.",
  },
  {
    title: "Scenario: Student Visa Refused Under 214(b) (Weak Ties)",
    body:
      "A US student visa applicant was refused under 214(b) because the officer wasn't convinced they intended to return to Bangladesh after their studies. A stronger second attempt typically adds concrete post-study plans, family or property ties in Bangladesh, and — where genuinely true — a clearer explanation of career plans at home, rather than simply resubmitting the same financial documents with a bigger number.",
  },
];

const doItYourselfVsConsultant = [
  {
    aspect: "Reading the refusal letter",
    diy: "Applicants often read only the general category, missing which specific box or clause was actually ticked.",
    consultant: "A consultant cross-references the exact wording against known refusal categories to target the real issue.",
  },
  {
    aspect: "Document rebuilding",
    diy: "Risk of only patching the one weak document instead of strengthening the whole package.",
    consultant: "A full document audit ensures consistency across every paper, not just the one flagged as weak.",
  },
  {
    aspect: "Timing the reapplication",
    diy: "Easy to either rush back too soon or wait far longer than necessary out of uncertainty.",
    consultant: "Timing is based on how long it realistically takes to build the specific missing evidence.",
  },
  {
    aspect: "Appointment & submission logistics",
    diy: "Requires manually tracking VAC slot availability, which can be time-consuming during peak season.",
    consultant: "Eammu Holidays tracks appointment availability and books efficiently on your behalf.",
  },
];

const glossary = [
  { term: "Refusal letter / decision notice", def: "The official written explanation an embassy or consulate issues when your visa is denied, citing the reason(s) under their legal framework." },
  { term: "Annex VI form (Schengen)", def: "The standard EU refusal form used across all Schengen states, where the officer ticks one or more pre-defined boxes rather than writing a custom explanation." },
  { term: "214(b) refusal (USA)", def: "A refusal under US immigration law meaning the officer wasn't convinced of your strong ties to your home country and intention to return." },
  { term: "221(g) refusal (USA)", def: "A temporary refusal pending additional documents or administrative processing — not a final denial." },
  { term: "GCMS notes (Canada)", def: "Internal case notes from IRCC that can be requested to see more detail behind a refusal decision than the letter itself provides." },
  { term: "Administrative Review (UK)", def: "A formal request to have a UK visa decision rechecked for a factual or legal error, separate from submitting a brand-new application." },
  { term: "Cooling-off period", def: "A required waiting period before you're permitted to reapply, applied by some countries (commonly the UAE) but not others." },
  { term: "Ties to home country", def: "Evidence — employment, property, family, business — that shows an officer you have strong reasons to return home after your trip." },
];

export default function CanIReapplyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="sr-only" aria-hidden="true">
        <h1>Can I Reapply After Visa Rejection 2026 — Step-by-Step Guide Bangladesh | Eammu Holidays</h1>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="https://eammu.com">Home</a></li>
            <li><a href="https://eammu.com/travel-resources">Travel Resources</a></li>
            <li><a href="https://eammu.com/can-i-reapply-after-visa-rejection">Can I Reapply After Rejection</a></li>
          </ol>
        </nav>
      </div>

      <main className="min-h-screen bg-[#f8fafc] text-gray-800 font-sans">
        <section className="bg-gradient-to-br from-[#002d18] via-[#004526] to-[#006b3a] text-white pt-28 md:pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex justify-center gap-2 text-xs text-green-300 flex-wrap">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-green-500" aria-hidden="true">
                  /
                </li>
                <li>
                  <Link href="/travel-resources" className="hover:text-white transition-colors">
                    Travel Resources
                  </Link>
                </li>
                <li className="text-green-500" aria-hidden="true">
                  /
                </li>
                <li className="text-white font-semibold" aria-current="page">
                  Can I Reapply After Rejection
                </li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6">
              🔄 2026 Guide · Updated by Eammu Holidays
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              Can I <span className="text-orange-400">Reapply</span> After a Visa Rejection?
            </h1>
            <p className="text-lg md:text-xl text-green-50/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Yes — but timing and preparation matter enormously. This guide covers{" "}
              <strong className="text-white">
                when to reapply, how long to wait, exactly what your refusal reason means, and the mistakes to avoid
              </strong>{" "}
              for Schengen, UK, USA, Canada, and Dubai visa reapplications from Bangladesh, with expert guidance from
              Eammu Holidays.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801701699743?text=I%20want%20to%20reapply%20for%20a%20visa%20after%20rejection"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                💬 Get Reapplication Help
              </a>
              <Link
                href="/visa-rejection"
                className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base"
              >
                Visa Rejection Services →
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 space-y-16">
          {/* Quick Answer box — targets featured snippets */}
          <section id="quick-answer" className="bg-white border-2 border-[#005a31]/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-lg font-black text-[#005a31] mb-3">Quick Answer</h2>
            <p className="text-gray-700 leading-relaxed">
              Yes, you can reapply after a visa rejection — most countries (Schengen, UK, USA, Canada) allow it
              immediately, while UAE/Dubai typically expects a short wait of around 30 days. But being allowed to
              reapply isn't the same as being ready to: fix the exact reason stated in your refusal, rebuild your
              document package, and only reapply once your situation has genuinely improved — usually after{" "}
              <strong>2–6 months</strong>, depending on the issue.
            </p>
          </section>

          {/* Table of contents */}
          <nav aria-label="Table of contents" className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-sm font-black text-[#005a31] mb-3 uppercase tracking-wide">On This Page</h2>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600 list-decimal list-inside">
              <li>
                <a href="#timing-matters" className="hover:text-[#005a31]">
                  Yes, You Can Reapply — But Timing Matters
                </a>
              </li>
              <li>
                <a href="#timing-by-country" className="hover:text-[#005a31]">
                  Reapplication Timing by Country
                </a>
              </li>
              <li>
                <a href="#refusal-reasons" className="hover:text-[#005a31]">
                  What Your Refusal Reason Actually Means
                </a>
              </li>
              <li>
                <a href="#months-by-reason" className="hover:text-[#005a31]">
                  How Long to Wait, By Refusal Reason
                </a>
              </li>
              <li>
                <a href="#five-steps" className="hover:text-[#005a31]">
                  5-Step Reapplication Process
                </a>
              </li>
              <li>
                <a href="#weekly-plan" className="hover:text-[#005a31]">
                  Week-by-Week Reapplication Plan
                </a>
              </li>
              <li>
                <a href="#checklist" className="hover:text-[#005a31]">
                  Document Rebuild Checklist
                </a>
              </li>
              <li>
                <a href="#scenarios" className="hover:text-[#005a31]">
                  Real-World Scenarios
                </a>
              </li>
              <li>
                <a href="#future-applications" className="hover:text-[#005a31]">
                  Does Rejection Affect Future Applications?
                </a>
              </li>
              <li>
                <a href="#mistakes" className="hover:text-[#005a31]">
                  Mistakes to Avoid When Reapplying
                </a>
              </li>
              <li>
                <a href="#diy-vs-consultant" className="hover:text-[#005a31]">
                  DIY vs Working With a Consultant
                </a>
              </li>
              <li>
                <a href="#glossary" className="hover:text-[#005a31]">
                  Glossary of Visa Refusal Terms
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#005a31]">
                  Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          <section id="timing-matters">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-5 border-l-8 border-orange-500 pl-5">
              Yes, You Can Reapply — But Timing Is Everything
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Almost every visa-issuing country allows you to{" "}
                <Link
                  href="/travel-resources/visa-cancelled-what-to-do"
                  className="text-[#005a31] font-semibold hover:text-orange-500"
                >
                  reapply after a rejection
                </Link>{" "}
                — there is generally no legal barrier preventing a fresh application. The real question isn't "can I
                reapply" but <strong className="text-[#005a31]">"when should I reapply, and what needs to change?"</strong>
              </p>
              <p>
                Reapplying too quickly with the same documents is the single most common mistake we see at Eammu
                Holidays. Visa officers can see your application history, and a near-identical resubmission signals
                that you haven't addressed the underlying concern — leading to a near-certain second refusal.
              </p>
              <p>
                As a general rule, most applicants who succeed on a second attempt wait somewhere between{" "}
                <strong className="text-[#005a31]">two and six months</strong> — not because of any fixed regulation,
                but because that's realistically how long it takes to build a stronger financial history or gather
                new supporting evidence. The exact figure depends heavily on which reason was cited on your refusal
                notice, which we break down in detail further down this page.
              </p>
            </div>
          </section>

          <section id="timing-by-country">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              Reapplication Timing by Country
            </h2>
            <div className="space-y-4 mt-4">
              {timing.map((c) => (
                <article
                  key={c.country}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{c.flag}</span>
                    <div>
                      <h3 className="font-black text-gray-900 text-sm">{c.country}</h3>
                      <p className="text-xs text-orange-500 font-semibold">Can reapply: {c.canReapply}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.bestPractice}</p>
                </article>
              ))}
            </div>
          </section>

          {/* NEW: refusal reasons deep dive */}
          <section id="refusal-reasons">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              What Your Refusal Reason Actually Means (And How to Fix It)
            </h2>
            <p className="text-gray-600 mt-3 mb-6">
              Refusal letters are often written in broad legal language that doesn't explain exactly what to do next.
              Here's what the most common wording actually means in practice, and the fix that matches it.
            </p>
            <div className="overflow-x-auto bg-white rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[#005a31]/5 text-[#005a31]">
                    <th className="p-4 font-black">Refusal Reason</th>
                    <th className="p-4 font-black">What It Usually Means</th>
                    <th className="p-4 font-black">How to Fix It</th>
                  </tr>
                </thead>
                <tbody>
                  {refusalReasonFixes.map((row) => (
                    <tr key={row.reason} className="border-t border-gray-100 align-top">
                      <td className="p-4 font-semibold text-gray-800">{row.reason}</td>
                      <td className="p-4 text-gray-600">{row.whatItMeans}</td>
                      <td className="p-4 text-gray-600">{row.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mt-6 leading-relaxed">
              For Schengen refusals specifically, the reason is recorded on a standardised Annex VI form, where the
              consulate ticks one or more boxes rather than explaining in full sentences — multiple boxes can be
              ticked at once if several concerns applied. For US refusals, the category is usually a short code such
              as 214(b), 221(g), or 212(a); see the glossary further down this page for what each one means. Canadian
              refusal letters tend to be brief, but you can request more detailed GCMS case notes directly from
              IRCC.
            </p>
          </section>

          {/* NEW: months by reason table */}
          <section id="months-by-reason">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              How Long to Wait, By Refusal Reason
            </h2>
            <p className="text-gray-600 mt-3 mb-6">
              Rather than a single fixed number, the right waiting period depends on what actually needs to change in
              your file.
            </p>
            <div className="overflow-x-auto bg-white rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[#005a31]/5 text-[#005a31]">
                    <th className="p-4 font-black">Refusal Reason</th>
                    <th className="p-4 font-black">Suggested Wait</th>
                    <th className="p-4 font-black">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {monthsByReason.map((row) => (
                    <tr key={row.reason} className="border-t border-gray-100">
                      <td className="p-4 font-semibold text-gray-800">{row.reason}</td>
                      <td className="p-4 text-gray-600">{row.wait}</td>
                      <td className="p-4 text-gray-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="five-steps">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              5-Step Reapplication Process
            </h2>
            <div className="space-y-4 mt-6">
              {fixSteps.map((s) => (
                <article
                  key={s.step}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all flex gap-4"
                >
                  <span className="text-3xl font-black text-orange-400 flex-shrink-0 leading-none">{s.step}</span>
                  <div>
                    <h3 className="font-black text-gray-900 text-base mb-1">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* NEW: week by week plan */}
          <section id="weekly-plan">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              A Week-by-Week Reapplication Plan
            </h2>
            <p className="text-gray-600 mt-3 mb-6">
              If you're not sure where to start, this rough timeline gives structure to the "wait and improve" advice
              above. Adjust the pace depending on how serious your refusal reason is.
            </p>
            <div className="space-y-4">
              {weeklyPlan.map((w) => (
                <div
                  key={w.week}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-start gap-3"
                >
                  <div className="font-black text-[#005a31] text-sm md:w-32 flex-shrink-0">{w.week}</div>
                  <p className="text-sm text-gray-700 leading-relaxed">{w.focus}</p>
                </div>
              ))}
            </div>
          </section>

          {/* NEW: document rebuild checklist by category */}
          <section id="checklist">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              Document Rebuild Checklist
            </h2>
            <p className="text-gray-600 mt-3 mb-6">
              A reapplication should be stronger across every category, not just the one flagged in your refusal
              letter. Use this checklist to review your full file before booking a new appointment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-black text-[#005a31] text-sm mb-3 uppercase tracking-wide">Financial Documents</h3>
                <ul className="space-y-2">
                  {documentChecklist.financial.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-black">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-black text-[#005a31] text-sm mb-3 uppercase tracking-wide">Employment Documents</h3>
                <ul className="space-y-2">
                  {documentChecklist.employment.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-black">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-black text-[#005a31] text-sm mb-3 uppercase tracking-wide">Travel Documents</h3>
                <ul className="space-y-2">
                  {documentChecklist.travel.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-black">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-black text-[#005a31] text-sm mb-3 uppercase tracking-wide">Personal Documents</h3>
                <ul className="space-y-2">
                  {documentChecklist.personal.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-black">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* NEW: scenario walkthroughs */}
          <section id="scenarios">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              Real-World Scenarios: What a Stronger Reapplication Looks Like
            </h2>
            <p className="text-gray-600 mt-3 mb-6">
              These illustrative examples show how the same general advice plays out differently depending on the
              actual refusal reason.
            </p>
            <div className="space-y-4">
              {scenarios.map((s) => (
                <article key={s.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="font-black text-gray-900 text-base mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                </article>
              ))}
            </div>
          </section>

          {/* does rejection affect future applications */}
          <section
            id="future-applications"
            className="bg-white rounded-3xl border border-orange-100 shadow-sm p-6 md:p-10"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-4">
              Does a Rejection Affect Your Future Applications?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                A visa refusal is recorded, and future consular officers reviewing your file can usually see it. That
                doesn't mean it follows you forever as a black mark — what matters most to the officer sitting
                across from you is a single question:{" "}
                <strong className="text-[#005a31]">what has actually changed since last time?</strong>
              </p>
              <p>
                If your income, savings, employment, or travel history has genuinely improved, a past refusal
                carries far less weight. If nothing has changed and you're simply hoping for a different outcome,
                the previous refusal becomes a strong signal that the same result is likely again. There's also
                generally no fixed cap on <strong className="text-[#005a31]">how many times</strong> you can apply
                for the same visa — but each unexplained repeat refusal makes officers more cautious, so the quality
                of your preparation matters far more than the number of attempts.
              </p>
              <p>
                It's also worth understanding the difference between an ordinary refusal and a formal entry ban. A
                standard refusal — for insufficient funds, unclear purpose, or incomplete paperwork — does not, by
                itself, restrict future applications. Bans are typically tied to more serious issues such as
                document fraud, misrepresentation, or an earlier overstay, and those cases need specialised legal
                advice rather than a straightforward document rebuild.
              </p>
            </div>
          </section>

          <section id="mistakes">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              6 Mistakes to Avoid When Reapplying
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {mistakes.map((m) => (
                <article key={m.title} className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm">
                  <div className="text-3xl mb-3">{m.icon}</div>
                  <h3 className="font-black text-red-600 text-base mb-2">{m.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* NEW: DIY vs consultant comparison */}
          <section id="diy-vs-consultant">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              Reapplying Yourself vs Working With a Consultant
            </h2>
            <p className="text-gray-600 mt-3 mb-6">
              Many applicants can successfully reapply on their own once they understand the refusal reason clearly.
              Here's where a consultant typically adds the most value.
            </p>
            <div className="overflow-x-auto bg-white rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[#005a31]/5 text-[#005a31]">
                    <th className="p-4 font-black">Aspect</th>
                    <th className="p-4 font-black">Doing It Yourself</th>
                    <th className="p-4 font-black">With Eammu Holidays</th>
                  </tr>
                </thead>
                <tbody>
                  {doItYourselfVsConsultant.map((row) => (
                    <tr key={row.aspect} className="border-t border-gray-100 align-top">
                      <td className="p-4 font-semibold text-gray-800">{row.aspect}</td>
                      <td className="p-4 text-gray-600">{row.diy}</td>
                      <td className="p-4 text-gray-600">{row.consultant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* NEW: glossary */}
          <section id="glossary">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              Glossary of Visa Refusal Terms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {glossary.map((g) => (
                <div key={g.term} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <h3 className="font-black text-gray-900 text-sm mb-2">{g.term}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{g.def}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 mt-6">
              {faqs.map((f) => (
                <details key={f.q} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 group">
                  <summary className="font-black text-gray-900 text-base cursor-pointer list-none flex justify-between items-center gap-4">
                    {f.q}
                    <span className="text-orange-500 group-open:rotate-45 transition-transform text-xl leading-none">
                      +
                    </span>
                  </summary>
                  <p className="text-gray-600 text-sm leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#005a31] mb-6 text-center">
              Related <span className="text-orange-500">Rejection Guides</span>
            </h2>
            <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Related guides">
              {[
                { label: "Visa Rejected — What to Do", href: "/visa-cancelled-what-to-do" },
                { label: "How Many Times Can I Apply", href: "/how-many-times-can-i-apply-for-visa" },
                { label: "Rejection Effects on Future Applications", href: "/visa-rejection-effects-on-future-applications" },
                { label: "Common Rejection Reasons", href: "/common-reasons" },
                { label: "Bank Statement for Visa", href: "/bank-statement-for-visa-how-to-prepare" },
                { label: "Best Time to Apply for Schengen Visa", href: "/best-time-to-apply-schengen-visa" },
                { label: "All Visa Services", href: "/visa" },
              ].map((lnk) => (
                <Link
                  key={lnk.href}
                  href={lnk.href}
                  className="bg-white border border-gray-200 hover:border-[#005a31] hover:text-[#005a31] text-gray-600 rounded-full px-4 py-2 text-xs font-semibold transition-all shadow-sm hover:shadow"
                >
                  {lnk.label}
                </Link>
              ))}
            </nav>
          </section>

          <section className="bg-[#005a31] text-white rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-orange-400 mb-4">Ready to Reapply the Right Way?</h2>
            <p className="text-lg max-w-2xl mx-auto text-green-50/90 leading-relaxed mb-8">
              Eammu Holidays reviews your refusal letter, rebuilds your application, and times your reapplication
              strategically to maximise your chances of approval.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801701699743?text=I%20want%20to%20reapply%20for%20a%20visa%20after%20rejection"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                💬 Get Reapplication Help (WhatsApp)
              </a>
              <Link
                href="/visa-rejection"
                className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base"
              >
                Visa Rejection Services →
              </Link>
            </div>
          </section>
        </div>
      </main>
      <HomeSeoLinks />
    </>
  );
}