// app/travel-resources/bank-statement-for-visa-how-to-prepare/page.jsx
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://eammu.com"),
  title: { default: "How to Prepare Bank Statement for Visa 2026 | Step-by-Step Guide | Eammu Holidays" },
  description:
    "How to prepare and organise your bank statement for a visa application from Bangladesh. 2026 guide covering format, transaction cleaning, solvency certificate, 6-month statement rules, and common mistakes — by Eammu Holidays.",
  keywords: [
    "how to prepare bank statement for visa",
    "bank statement for visa preparation",
    "bank statement format for visa application",
    "how to organise bank statement for schengen visa",
    "clean bank statement for visa",
    "bank statement preparation tips bangladesh",
    "how to get bank statement for visa bangladesh",
    "6 month bank statement for visa",
    "bank statement mistakes visa rejection",
    "how to prepare financial documents for visa",
  ],
  alternates: { canonical: "https://eammu.com/bank-statement-for-visa-how-to-prepare" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "article",
    url: "https://eammu.com/bank-statement-for-visa-how-to-prepare",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "How to Prepare Bank Statement for Visa 2026 | Eammu Holidays",
    description: "Step-by-step guide to preparing your bank statement for a visa application from Bangladesh — format, 6-month rules, solvency certificate, and expert tips.",
    images: [{ url: "https://eammu.com/preview-banner.webp", width: 1200, height: 630, alt: "How to Prepare Bank Statement for Visa — Eammu Holidays" }],
  },
  twitter: { card: "summary_large_image", site: "@eammuholidays", title: "How to Prepare Bank Statement for Visa 2026 | Eammu Holidays", images: ["https://eammu.com/preview-banner.webp"] },
  icons: { icon: "/emf.jpg", shortcut: "/emf.jpg", apple: "/emf.jpg" },
  category: "travel",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://eammu.com/bank-statement-for-visa-how-to-prepare#article",
      headline: "How to Prepare Your Bank Statement for a Visa Application — 2026 Guide",
      description: "Step-by-step guide to preparing a bank statement for a Bangladeshi visa application in 2026 — format, timing, mistakes to avoid, and solvency certificate requirements.",
      image: "https://eammu.com/preview-banner.webp",
      author: { "@type": "Organization", name: "Eammu Holidays", url: "https://eammu.com" },
      publisher: { "@type": "Organization", name: "Eammu Holidays", logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" } },
      datePublished: "2026-01-10",
      dateModified: "2026-06-01",
      mainEntityOfPage: "https://eammu.com/bank-statement-for-visa-how-to-prepare",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
        { "@type": "ListItem", position: 2, name: "Travel Resources", item: "https://eammu.com/travel-resources" },
        { "@type": "ListItem", position: 3, name: "How to Prepare Bank Statement for Visa", item: "https://eammu.com/travel-resources/bank-statement-for-visa-how-to-prepare" },
      ],
    },
  ],
};

const steps = [
  { step: "01", title: "Start Preparing 3–6 Months Before You Apply", desc: "The most important step is also the earliest. Begin building a clean financial history at least 3 months before your application — ideally 6. This means consistent salary/income credits, avoidance of unexplained large cash deposits, and a maintained balance appropriate for your target country." },
  { step: "02", title: "Identify the Right Account to Submit", desc: "Use your primary account — not a newly opened one. If you have multiple accounts, choose the one with the strongest transaction history and highest maintained balance. Submit a combined statement if you have complementary accounts (e.g., savings + current)." },
  { step: "03", title: "Request an Official Stamped Statement from Your Bank", desc: "Visit your bank branch and request a stamped and signed 6-month bank statement. For most Bangladeshi banks (BRAC, Dutch-Bangla, Islami Bank, AB Bank), this requires an in-person visit. Ensure every page is stamped and the statement matches your passport name exactly." },
  { step: "04", title: "Request the Solvency Certificate Separately", desc: "On the same visit, request a bank solvency certificate confirming your current balance. This is a separate document from the statement and must be dated within 1–3 months of your application. Most embassies require both documents." },
  { step: "05", title: "Review for Red Flags Before Submitting", desc: "Before submitting, scan your statement for: sudden large deposits with no salary context, very low month-end balances, unexplained transfers, or months of near-zero activity. Visa officers check all of these. Our consultants at Eammu Holidays review your statement and flag issues before you apply." },
  { step: "06", title: "Organise and Present Documents Neatly", desc: "Submit your bank documents in clear order: solvency certificate on top, followed by 6-month statement pages in chronological order. Place in a clear folder with your other financial proof (income certificate, employment letter, income tax return)." },
];

const mistakes = [
  { icon: "❌", title: "Sudden Large Deposits", desc: "Depositing a large lump sum a week before applying is the most common rejection trigger. Embassy officers call this 'fund showing' or 'show money' and treat it as misrepresentation." },
  { icon: "❌", title: "Submitting Only One Month's Statement", desc: "Some applicants submit only the most recent month to show a high balance. Embassies require 3–6 months of history. Submitting less than required will result in your application being returned." },
  { icon: "❌", title: "Name Mismatch Between Statement and Passport", desc: "Even a minor spelling difference between your bank account name and passport name raises serious concerns. Get it corrected at your bank before applying — don't assume it will be overlooked." },
  { icon: "❌", title: "Using Printed Internet Banking Statements Only", desc: "Many embassies don't accept unverified internet banking printouts. Always get a bank-stamped, branch-certified statement with an authorised officer's signature." },
];

export default function BankStatementPreparePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="sr-only" aria-hidden="true">
        <h1>How to Prepare Bank Statement for Visa 2026 — Step-by-Step Guide Bangladesh | Eammu Holidays</h1>
        <nav aria-label="Breadcrumb"><ol><li><a href="https://eammu.com">Home</a></li><li><a href="https://eammu.com/travel-resources">Travel Resources</a></li><li><a href="https://eammu.com/travel-resources/bank-statement-for-visa-how-to-prepare">How to Prepare Bank Statement</a></li></ol></nav>
      </div>

      <main className="min-h-screen bg-[#f8fafc] text-gray-800 font-sans">
        <section className="bg-gradient-to-br from-[#002d18] via-[#004526] to-[#006b3a] text-white py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex justify-center gap-2 text-xs text-green-300 flex-wrap">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-green-500" aria-hidden="true">/</li>
                <li><Link href="/travel-resources" className="hover:text-white transition-colors">Travel Resources</Link></li>
                <li className="text-green-500" aria-hidden="true">/</li>
                <li className="text-white font-semibold" aria-current="page">How to Prepare Bank Statement</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6">
              📊 2026 Guide · Updated by Eammu Holidays
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              How to Prepare Your <span className="text-orange-400">Bank Statement</span> for a Visa
            </h1>
            <p className="text-lg md:text-xl text-green-50/90 max-w-3xl mx-auto leading-relaxed mb-8">
              A step-by-step guide to getting, cleaning, and presenting your <strong className="text-white">bank statement for a visa application</strong> from Bangladesh in 2026 — mistakes to avoid, red flags visa officers look for, and how Eammu Holidays can help you get it right.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/8801701699743?text=I%20need%20help%20preparing%20bank%20statement%20for%20visa" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base" rel="noopener noreferrer">💬 Get Free Statement Review</a>
              <Link href="/visa" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base">View Visa Services →</Link>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 space-y-16">
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-5 border-l-8 border-orange-500 pl-5">Why Bank Statement Preparation Matters</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>Your <Link href="/travel-resources/bank-statement-for-visa" className="text-[#005a31] font-semibold hover:text-orange-500">bank statement</Link> is not just a formality — it is one of the most scrutinised documents in your visa file. Visa officers across <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">Schengen embassies</Link>, the UK, Canada, and the USA receive thousands of applications from Bangladesh and are specifically trained to identify weak or manipulated financial documents.</p>
              <p>The difference between an approved and rejected application often comes down to <strong className="text-[#005a31]">how the bank statement was prepared, what it shows, and whether it is presented with the right supporting documents</strong>. This guide gives you a six-step system that Eammu Holidays uses when reviewing client documents.</p>
            </div>
          </section>

          <section>
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

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">4 Common Bank Statement Mistakes That Cause Visa Rejections</h2>
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

          <section>
            <h2 className="text-xl font-black text-[#005a31] mb-6 text-center">Related <span className="text-orange-500">Financial Guides</span></h2>
            <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Related financial visa guides">
              {[
                { label: "Bank Statement Overview", href: "/bank-statement-for-visa" },
                { label: "How Much Bank Balance for Visa", href: "/how-much-bank-balance-needed-for-visa" },
                { label: "Bank Solvency Certificate", href: "/bank-solvency-certificate-for-visa" },
                { label: "Sponsor Financial Documents", href: "/sponsor-financial-documents-for-visa" },
                { label: "Visa Rejection Reasons", href: "/visa-rejection/common-reasons" },
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