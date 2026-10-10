// app/travel-resources/bank-statement-for-visa-how-to-prepare/page.jsx
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://eammu.com"),
  title: {
    default:
      "Bank Statement for Visa 2026: How to Prepare It Correctly | Format, Balance & FAQ | Eammu Holidays",
  },
  description:
    "Complete 2026 information guide on the bank statement for visa applications from Bangladesh — what it is, why embassies ask for it, how many months you need, minimum balance by country, formatting rules, common rejection mistakes, and answers to frequent questions, by Eammu Holidays.",
  keywords: [
    "bank statement for visa",
    "bank statement for visa application",
    "how to prepare bank statement for visa",
    "what is a bank statement for visa",
    "bank statement format for visa application",
    "how many months bank statement for visa",
    "minimum bank balance for visa from bangladesh",
    "bank statement for visa preparation",
    "bank statement mistakes visa rejection",
    "sponsor bank statement for visa",
    "bank solvency certificate bangladesh",
    "bank statement for schengen visa from bangladesh",
    "large deposit visa bank statement",
    "red flags on bank statement for visa",
  ],
  alternates: { canonical: "https://eammu.com/bank-statement-for-visa-how-to-prepare" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "article",
    url: "https://eammu.com/bank-statement-for-visa-how-to-prepare",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Bank Statement for Visa 2026: How to Prepare It Correctly | Eammu Holidays",
    description:
      "What a bank statement for visa is, why embassies ask for it, how many months you need, minimum balance by country, and how to avoid the mistakes that cause rejection.",
    images: [
      {
        url: "https://eammu.com/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Bank Statement for Visa — Eammu Holidays",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    title: "Bank Statement for Visa 2026: How to Prepare It Correctly | Eammu Holidays",
    images: ["https://eammu.com/preview-banner.webp"],
  },
  icons: { icon: "/emf.jpg", shortcut: "/emf.jpg", apple: "/emf.jpg" },
  category: "travel",
};

const faqs = [
  {
    q: "What exactly should a bank statement for a visa show?",
    a: "It should clearly show your full name, account number, bank name and branch, the statement period (usually the last 3–6 months), every transaction in that period, and your closing balance, along with a bank stamp or digital verification where the embassy asks for one.",
  },
  {
    q: "Do visa officers actually check bank statements closely?",
    a: "Yes. Officers go through your statement to confirm you have enough funds for the trip and that your financial record looks genuine and consistent — not just a high number on the last page.",
  },
  {
    q: "How many months of bank statement do I need for a visa?",
    a: "Most Schengen countries ask for around 3 months, while the UK, USA, and Canada typically ask for 6 months. Some student and long-stay categories add extra conditions, such as the UK's 28-day balance rule, so always confirm the exact period for your destination.",
  },
  {
    q: "What counts as a red flag on a bank statement?",
    a: "Large unexplained deposits, a balance that suddenly jumps or drops, frequent overdrafts, irregular or unusual transactions, and any sign that a page has been edited or removed are all treated as red flags by visa officers.",
  },
  {
    q: "Can a recent large deposit affect my visa application?",
    a: "Yes, it can. A large sum appearing shortly before you apply often prompts the embassy to ask where the money came from. If it is genuine — from a property sale, bonus, business income, or gift — keep the supporting proof ready. Building your balance gradually over a few months is always safer than a last-minute top-up.",
  },
  {
    q: "Can I use an internet banking printout instead of a stamped statement?",
    a: "Some embassies accept a self-downloaded PDF as long as it shows your name, account number, and bank branding. Others, especially several Schengen consulates, prefer or require a branch-stamped and signed copy. When you're not sure, carry both.",
  },
  {
    q: "Can I submit a sponsor's bank statement instead of my own?",
    a: "Yes. If a parent, spouse, relative, or employer is covering your trip, you can submit their statement and solvency certificate together with a signed sponsorship letter and proof of your relationship to them.",
  },
  {
    q: "Can I get a visa without submitting a bank statement?",
    a: "It depends on the country and visa category. A few visa types accept alternative financial proof, such as a sponsor's documents, a fixed deposit receipt, or property papers, but the large majority of applications still expect a bank statement as core evidence of your financial standing.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://eammu.com/bank-statement-for-visa-how-to-prepare#article",
      headline: "Bank Statement for Visa 2026 — What It Is and How to Prepare It",
      description:
        "Complete guide on the bank statement for a visa application from Bangladesh in 2026 — definition, why embassies ask for it, months required, minimum balance by country, format, and common mistakes.",
      image: "https://eammu.com/preview-banner.webp",
      author: { "@type": "Organization", name: "Eammu Holidays", url: "https://eammu.com" },
      publisher: {
        "@type": "Organization",
        name: "Eammu Holidays",
        logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" },
      },
      datePublished: "2026-01-10",
      dateModified: "2026-09-02",
      mainEntityOfPage: "https://eammu.com/bank-statement-for-visa-how-to-prepare",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
        { "@type": "ListItem", position: 2, name: "Travel Resources", item: "https://eammu.com/travel-resources" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bank Statement for Visa",
          item: "https://eammu.com/travel-resources/bank-statement-for-visa-how-to-prepare",
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "How to Prepare a Bank Statement for a Visa Application",
      description:
        "A 6-step process to prepare, clean, and present a bank statement for a visa application from Bangladesh.",
      totalTime: "P90D",
      step: [
        { "@type": "HowToStep", position: 1, name: "Start Preparing 3–6 Months Before You Apply" },
        { "@type": "HowToStep", position: 2, name: "Identify the Right Account to Submit" },
        { "@type": "HowToStep", position: 3, name: "Request an Official Stamped Statement from Your Bank" },
        { "@type": "HowToStep", position: 4, name: "Request the Solvency Certificate Separately" },
        { "@type": "HowToStep", position: 5, name: "Review for Red Flags Before Submitting" },
        { "@type": "HowToStep", position: 6, name: "Organise and Present Documents Neatly" },
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

const whyEmbassiesAsk = [
  { title: "Employment & Income Status", desc: "Regular salary or business credits tell the officer you have a real, ongoing source of income — not a one-off arrangement." },
  { title: "Spending Behaviour", desc: "Your day-to-day transactions show whether your lifestyle matches the income you're claiming, which builds or weakens credibility." },
  { title: "Savings Pattern", desc: "A gradually built balance across several months reads as genuine savings, unlike a balance that appears overnight." },
  { title: "Financial Stability", desc: "Consistency — no wild swings, no overdrafts — signals that you manage money responsibly and are unlikely to overstay for financial reasons." },
  { title: "Fit With Your Travel Cost", desc: "The officer checks whether your funds realistically cover flights, hotels, and daily expenses for the trip you've planned." },
];

const steps = [
  {
    step: "01",
    title: "Start Preparing 3–6 Months Before You Apply",
    desc: "The most important step is also the earliest. Begin building a clean financial history at least 3 months before your application — ideally 6. This means consistent salary/income credits, avoidance of unexplained large cash deposits, and a maintained balance appropriate for your target country.",
  },
  {
    step: "02",
    title: "Identify the Right Account to Submit",
    desc: "Use your primary account — not a newly opened one. If you have multiple accounts, choose the one with the strongest transaction history and highest maintained balance. Submit a combined statement if you have complementary accounts (e.g., savings + current).",
  },
  {
    step: "03",
    title: "Request an Official Stamped Statement from Your Bank",
    desc: "Visit your bank branch and request a stamped and signed 6-month bank statement. For most Bangladeshi banks (BRAC, Dutch-Bangla, Islami Bank, AB Bank), this requires an in-person visit. Ensure every page is stamped and the statement matches your passport name exactly.",
  },
  {
    step: "04",
    title: "Request the Solvency Certificate Separately",
    desc: "On the same visit, request a bank solvency certificate confirming your current balance. This is a separate document from the statement and must be dated within 1–3 months of your application. Most embassies require both documents.",
  },
  {
    step: "05",
    title: "Review for Red Flags Before Submitting",
    desc: "Before submitting, scan your statement for: sudden large deposits with no salary context, very low month-end balances, unexplained transfers, or months of near-zero activity. Visa officers check all of these. Our consultants at Eammu Holidays review your statement and flag issues before you apply.",
  },
  {
    step: "06",
    title: "Organise and Present Documents Neatly",
    desc: "Submit your bank documents in clear order: solvency certificate on top, followed by 6-month statement pages in chronological order. Place in a clear folder with your other financial proof (income certificate, employment letter, income tax return).",
  },
];

const mistakes = [
  {
    icon: "❌",
    title: "Sudden Large Deposits",
    desc: "Depositing a large lump sum a week before applying is the most common rejection trigger. Embassy officers call this 'fund showing' or 'show money' and treat it as misrepresentation.",
  },
  {
    icon: "❌",
    title: "Submitting Only One Month's Statement",
    desc: "Some applicants submit only the most recent month to show a high balance. Embassies require 3–6 months of history. Submitting less than required will result in your application being returned.",
  },
  {
    icon: "❌",
    title: "Name Mismatch Between Statement and Passport",
    desc: "Even a minor spelling difference between your bank account name and passport name raises serious concerns. Get it corrected at your bank before applying — don't assume it will be overlooked.",
  },
  {
    icon: "❌",
    title: "Using Printed Internet Banking Statements Only",
    desc: "Many embassies don't accept unverified internet banking printouts. Always get a bank-stamped, branch-certified statement with an authorised officer's signature.",
  },
  {
    icon: "❌",
    title: "Low Average Balance Despite a High Closing Balance",
    desc: "Visa officers look at your day-to-day balance trend, not just the final number on the statement. An account that dips close to zero mid-month, even if it ends high, looks inconsistent — keep a steady cushion throughout the period.",
  },
  {
    icon: "❌",
    title: "Statement Dated Too Far Back",
    desc: "A statement generated months before your application looks stale to visa officers. Request a fresh statement and solvency certificate within 1–3 months (ideally 2–4 weeks) of your submission date.",
  },
  {
    icon: "❌",
    title: "Edited, Cropped, or Incomplete Pages",
    desc: "Cropping out a section, skipping pages, or editing figures — even to hide an unrelated personal transaction — reads as document tampering and can lead to an outright refusal, not just a query.",
  },
  {
    icon: "❌",
    title: "Borrowed Funds Used to Inflate the Balance",
    desc: "Taking a short-term loan just to show a bigger balance rarely holds up under review, since the account will show the loan credit with no matching income history behind it.",
  },
];

const monthsByVisa = [
  { country: "Schengen (Europe)", months: "3 months", note: "Bank-stamped statement strongly preferred" },
  { country: "United Kingdom", months: "6 months", note: "Student visa requires 28-day balance rule" },
  { country: "United States (B1/B2)", months: "6 months (or latest 3–6)", note: "Combined with income/tax documents" },
  { country: "Canada", months: "4–6 months", note: "GIC or fixed deposit can supplement" },
  { country: "UAE / Gulf countries", months: "3–6 months", note: "Sponsor statement often accepted" },
  { country: "Australia", months: "3–6 months", note: "Consistent savings pattern is checked closely" },
];

const checklist = [
  "Full legal name exactly matching your passport",
  "Account number and bank branch name clearly visible",
  "Complete 3–6 months of transactions (no missing pages)",
  "Bank stamp and authorised signature on every page",
  "Opening and closing balance for each month",
  "No unexplained large single-day deposits",
  "Statement dated within 1–3 months of your application",
  "Matches the currency or has a clear conversion note, if required",
];

const strengthenTips = [
  "Keep a stable, unbroken balance across the full statement period rather than a spike near the end.",
  "Make sure salary or regular income credits are clearly visible and traceable.",
  "Never submit an edited, cropped, or partially deleted statement — always the full, original copy.",
  "Keep supporting proof ready for any unusual transaction (bonus letter, sale deed, gift declaration).",
  "Match your financial profile to your actual travel plan — a modest trip needs a modest, believable balance, not an inflated one.",
  "Pair your bank statement with an income certificate, employment letter, or tax return where the embassy allows it.",
];

export default function BankStatementPreparePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="sr-only" aria-hidden="true">
        <h1>Bank Statement for Visa 2026 — What It Is and How to Prepare It | Eammu Holidays</h1>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="https://eammu.com">Home</a></li>
            <li><a href="https://eammu.com/travel-resources">Travel Resources</a></li>
            <li><a href="https://eammu.com/travel-resources/bank-statement-for-visa-how-to-prepare">Bank Statement for Visa</a></li>
          </ol>
        </nav>
      </div>

      <main className="min-h-screen bg-[#f8fafc] text-gray-800 font-sans">
        <section className="bg-gradient-to-br from-[#002d18] via-[#004526] to-[#006b3a] text-white pt-28 md:pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex justify-center gap-2 text-xs text-green-300 flex-wrap">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-green-500" aria-hidden="true">/</li>
                <li><Link href="/travel-resources" className="hover:text-white transition-colors">Travel Resources</Link></li>
                <li className="text-green-500" aria-hidden="true">/</li>
                <li className="text-white font-semibold" aria-current="page">Bank Statement for Visa</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6">
              📊 2026 Guide · Updated by Eammu Holidays
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              Bank Statement for Visa: <span className="text-orange-400">Everything</span> You Need to Know
            </h1>
            <p className="text-lg md:text-xl text-green-50/90 max-w-3xl mx-auto leading-relaxed mb-8">
              What a <strong className="text-white">bank statement for visa</strong> actually is, why embassies ask for one, how many months you need, the minimum balance by country, correct formatting, and the mistakes that most often lead to rejection — explained by the visa consultants at Eammu Holidays.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/8801701699743?text=I%20need%20help%20preparing%20bank%20statement%20for%20visa" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base" rel="noopener noreferrer">💬 Get Free Statement Review</a>
              <Link href="/visa" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base">View Visa Services →</Link>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 space-y-16">

          {/* Quick Answer box — targets featured snippets */}
          <section id="quick-answer" className="bg-white border-2 border-[#005a31]/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-lg font-black text-[#005a31] mb-3">Quick Answer</h2>
            <p className="text-gray-700 leading-relaxed">
              A bank statement for visa is an official record of your account activity that embassies use to judge whether you can afford your trip. To prepare one properly: use your primary account, avoid large deposits in the last 2–3 months, request a bank-stamped statement covering <strong>3 months (Schengen) or 6 months (UK/USA/Canada)</strong>, get a separate <Link href="/bank-solvency-certificate-for-visa" className="text-[#005a31] font-semibold hover:text-orange-500">solvency certificate</Link>, make sure your name matches your passport exactly, and submit both documents dated within 1–3 months of your application.
            </p>
          </section>

          {/* Table of contents for on-page navigation & sitelinks */}
          <nav aria-label="Table of contents" className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-sm font-black text-[#005a31] mb-3 uppercase tracking-wide">On This Page</h2>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600 list-decimal list-inside">
              <li><a href="#what-is-it" className="hover:text-[#005a31]">What Is a Bank Statement for Visa?</a></li>
              <li><a href="#why-embassies-ask" className="hover:text-[#005a31]">Why Embassies Ask for It</a></li>
              <li><a href="#months-by-visa" className="hover:text-[#005a31]">How Many Months You Need (By Visa Type)</a></li>
              <li><a href="#checklist" className="hover:text-[#005a31]">What It Should Include</a></li>
              <li><a href="#six-steps" className="hover:text-[#005a31]">6-Step Preparation Process</a></li>
              <li><a href="#mistakes" className="hover:text-[#005a31]">Common Mistakes That Cause Rejection</a></li>
              <li><a href="#large-deposit" className="hover:text-[#005a31]">Can a Recent Large Deposit Hurt You?</a></li>
              <li><a href="#strengthen" className="hover:text-[#005a31]">Tips to Strengthen Your Application</a></li>
              <li><a href="#faq" className="hover:text-[#005a31]">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          {/* NEW: definition section */}
          <section id="what-is-it">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-5 border-l-8 border-orange-500 pl-5">What Is a Bank Statement for Visa?</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>A bank statement for a visa is the official record your bank issues showing every transaction in your account over a set period — usually the last three to six months. It lists your salary or income credits, day-to-day spending, withdrawals, and, most importantly, your closing balance.</p>
              <p>For a visa officer, this single document does a lot of work: it's how they judge whether your finances are real, active, and large enough to comfortably cover the trip you're planning — without you needing to work illegally or depend on public funds abroad.</p>
            </div>
          </section>

          {/* NEW: why embassies ask */}
          <section id="why-embassies-ask">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">Why Do Embassies Ask for a Bank Statement?</h2>
            <p className="text-gray-600 mt-3 mb-6">Beyond your closing balance, the statement lets the embassy read several things about you at once:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyEmbassiesAsk.map((w) => (
                <div key={w.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <h3 className="font-black text-gray-900 text-sm mb-2">{w.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-6 leading-relaxed">In short, the goal isn't to prove you're wealthy — it's to show a <strong className="text-[#005a31]">consistent, believable financial picture</strong> that matches the trip you say you're taking. Our team at <Link href="/" className="text-[#005a31] font-semibold hover:text-orange-500">Eammu Holidays</Link> reviews this fit before you submit anything.</p>
          </section>

          {/* months required by visa type table */}
          <section id="months-by-visa">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">How Many Months of Bank Statement Do You Need? (By Visa Type)</h2>
            <p className="text-gray-600 mt-3 mb-6">Requirements vary by destination and visa category. Use this as a general guide, and always confirm the exact requirement for your specific embassy or consulate.</p>
            <div className="overflow-x-auto bg-white rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[#005a31]/5 text-[#005a31]">
                    <th className="p-4 font-black">Destination / Visa Type</th>
                    <th className="p-4 font-black">Statement Period</th>
                    <th className="p-4 font-black">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {monthsByVisa.map((row) => (
                    <tr key={row.country} className="border-t border-gray-100">
                      <td className="p-4 font-semibold text-gray-800">{row.country}</td>
                      <td className="p-4 text-gray-600">{row.months}</td>
                      <td className="p-4 text-gray-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">Want an exact figure for your case? <Link href="/how-much-bank-balance-needed-for-visa" className="text-[#005a31] font-semibold hover:text-orange-500">See our minimum balance guide</Link> or message our consultants directly.</p>
          </section>

          {/* checklist section — "what should it include" */}
          <section id="checklist">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">What Should Your Bank Statement Include?</h2>
            <p className="text-gray-600 mt-3 mb-6">Before you submit, confirm your statement covers every item below. Missing even one can lead to a document return or delay.</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                  <span className="text-green-600 font-black">✓</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="six-steps">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">6-Step Bank Statement Preparation Process</h2>
            <div className="space-y-4 mt-6">
              {steps.map((s) => (
                <article key={s.step} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all flex gap-4">
                  <span className="text-3xl font-black text-orange-400 flex-shrink-0 leading-none">{s.step}</span>
                  <div>
                    <h3 className="font-black text-gray-900 text-base mb-1">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="mistakes">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">8 Common Bank Statement Mistakes That Cause Visa Rejections</h2>
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

          {/* NEW: large deposit explainer, its own dedicated section */}
          <section id="large-deposit" className="bg-white rounded-3xl border border-orange-100 shadow-sm p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-4">Can a Recent Large Deposit Affect Your Application?</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Yes — and this is one of the questions our consultants get asked most often. If a large sum lands in your account not long before you apply, the embassy will usually want to know where it came from. That's not automatically a problem, but it does shift the burden onto you to explain it clearly.</p>
              <p>If the deposit is genuine — say, from a property sale, a bonus, business income, or a gift from family — keep the paperwork ready: a sale deed, a salary or bonus letter, or a signed gift declaration. What visa officers are actually screening for is <strong className="text-[#005a31]">borrowed or arranged money used only to inflate the balance on paper</strong>, which rarely stands up once they look at the pattern around it.</p>
              <p>The safer route is always to let your balance build naturally over two to three months rather than solving it with one deposit right before you apply.</p>
            </div>
          </section>

          {/* NEW: strengthen application tips */}
          <section id="strengthen">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">Tips to Strengthen Your Visa Application</h2>
            <p className="text-gray-600 mt-3 mb-6">Alongside a well-prepared bank statement, these habits make the rest of your financial file more convincing:</p>
            <ul className="space-y-3">
              {strengthenTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                  <span className="text-orange-500 font-black">→</span>
                  <span className="text-sm text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ section, mirrors FAQPage schema above */}
          <section id="faq">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">Frequently Asked Questions</h2>
            <div className="space-y-4 mt-6">
              {faqs.map((f) => (
                <details key={f.q} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 group">
                  <summary className="font-black text-gray-900 text-base cursor-pointer list-none flex justify-between items-center gap-4">
                    {f.q}
                    <span className="text-orange-500 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="text-gray-600 text-sm leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#005a31] mb-6 text-center">Related <span className="text-orange-500">Financial Guides</span></h2>
            <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Related financial visa guides">
              {[
                { label: "Bank Statement Overview", href: "/bank-statement-for-visa" },
                { label: "How Much Bank Balance for Visa", href: "/how-much-bank-balance-needed-for-visa" },
                { label: "Bank Solvency Certificate", href: "/bank-solvency-certificate-for-visa" },
                { label: "Sponsor Financial Documents", href: "/sponsor-financial-documents-for-visa" },
                { label: "Visa Rejection Reasons", href: "/visa-rejection/common-reasons" },
                { label: "Schengen Visa Guide", href: "/visa/schengen" },
                { label: "All Visa Services", href: "/visa" },
              ].map((lnk) => (
                <Link key={lnk.href} href={lnk.href} className="bg-white border border-gray-200 hover:border-[#005a31] hover:text-[#005a31] text-gray-600 rounded-full px-4 py-2 text-xs font-semibold transition-all shadow-sm hover:shadow">{lnk.label}</Link>
              ))}
            </nav>
          </section>

          <section className="bg-[#005a31] text-white rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-orange-400 mb-4">Let Eammu Holidays Review Your Bank Statement</h2>
            <p className="text-lg max-w-2xl mx-auto text-green-50/90 leading-relaxed mb-8">Our visa consultants review your bank statement before submission, identify weaknesses, and guide you on presenting your finances in the strongest possible way.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/8801701699743?text=I%20need%20help%20preparing%20bank%20statement%20for%20visa" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base" rel="noopener noreferrer">💬 Free Statement Review (WhatsApp)</a>
              <Link href="/visa" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base">View All Visa Services →</Link>
            </div>
          </section>
        </div>
      </main>
      <HomeSeoLinks />
    </>
  );
}