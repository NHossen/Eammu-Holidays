// app/travel-resources/sponsor-letter-sample-for-visa/page.jsx
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://eammu.com"),
  title: { default: "Sponsor Letter Sample for Visa 2026 | Format & Template Bangladesh | Eammu Holidays" },
  description:
    "How to write a sponsor letter (affidavit of support) for a visa application from Bangladesh. 2026 sample format for parent, spouse, sibling sponsors — Schengen, UK, USA, Canada & Dubai visa requirements by Eammu Holidays.",
  keywords: [
    "sponsor letter sample for visa",
    "sponsor letter format bangladesh",
    "affidavit of support sample",
    "financial sponsor letter visa",
    "sponsor letter for schengen visa",
    "sponsor letter for uk visa",
    "sponsor letter for canada visa",
    "parent sponsor letter visa bangladesh",
    "spouse sponsor letter visa",
    "how to write sponsor letter visa",
    "sponsor letter template 2026",
    "financial undertaking letter visa",
  ],
  alternates: { canonical: "https://eammu.com/sponsor-letter-sample-for-visa" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "article",
    url: "https://eammu.com/sponsor-letter-sample-for-visa",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Sponsor Letter Sample for Visa 2026 | Eammu Holidays",
    description: "Sample sponsor letter / affidavit of support format for visa applications — parent, spouse, sibling sponsorship for Schengen, UK, USA, Canada, and Dubai.",
    images: [{ url: "https://eammu.com/preview-banner.webp", width: 1200, height: 630, alt: "Sponsor Letter Sample for Visa — Eammu Holidays" }],
  },
  twitter: { card: "summary_large_image", site: "@eammuholidays", title: "Sponsor Letter Sample for Visa 2026 | Eammu Holidays", images: ["https://eammu.com/preview-banner.webp"] },
  icons: { icon: "/emf.jpg", shortcut: "/emf.jpg", apple: "/emf.jpg" },
  category: "travel",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://eammu.com/sponsor-letter-sample-for-visa#article",
      headline: "Sponsor Letter Sample for Visa 2026 — Format & Template for Bangladesh Applicants",
      description: "How to write a sponsor letter or affidavit of support for a visa application from Bangladesh — required elements, sample template, and country-specific guidance.",
      image: "https://eammu.com/preview-banner.webp",
      author: { "@type": "Organization", name: "Eammu Holidays", url: "https://eammu.com" },
      publisher: { "@type": "Organization", name: "Eammu Holidays", logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" } },
      datePublished: "2026-01-10",
      dateModified: "2026-06-01",
      mainEntityOfPage: "https://eammu.com/sponsor-letter-sample-for-visa",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
        { "@type": "ListItem", position: 2, name: "Travel Resources", item: "https://eammu.com/travel-resources" },
        { "@type": "ListItem", position: 3, name: "Sponsor Letter Sample for Visa", item: "https://eammu.com/sponsor-letter-sample-for-visa" },
      ],
    },
  ],
};

const requiredElements = [
  "Sponsor's full name, address, NID/passport number",
  "Sponsor's relationship to the applicant (parent, spouse, sibling)",
  "Applicant's full name and passport number",
  "Clear statement of financial undertaking for the trip",
  "Specific costs being covered (flights, accommodation, daily expenses)",
  "Sponsor's source of income or financial standing reference",
  "Sponsor's signature, date, and contact information",
  "Notarisation by a notary public or first-class magistrate",
];

const sampleLetterText = `AFFIDAVIT OF SUPPORT / SPONSOR LETTER

I, [Sponsor's Full Name], son/daughter of [Father's/Husband's Name], holder of National ID No. [NID Number], residing at [Full Address], do hereby solemnly declare and affirm as follows:

1. That I am the [relationship — e.g., father, husband, brother] of [Applicant's Full Name], holder of Bangladeshi passport No. [Passport Number].

2. That [Applicant's Name] intends to travel to [Country Name] for the purpose of [tourism/business/study] from [Start Date] to [End Date].

3. That I am financially capable of supporting this visit and undertake full responsibility for all costs related to this trip, including airfare, accommodation, and daily living expenses, as evidenced by my attached bank statement and solvency certificate.

4. That my source of income is [employment/business — specify], and I am in a stable financial position to provide this support without it affecting my own financial obligations.

5. That I request the concerned Visa Officer/Embassy to kindly consider this affidavit favourably in support of [Applicant's Name]'s visa application.

I solemnly affirm that the information given above is true and correct to the best of my knowledge and belief.

Signature: _______________________
[Sponsor's Full Name]
Date: [DD/MM/YYYY]

Notarised by: [Notary Public / First Class Magistrate Name & Seal]`;

const tips = [
  { icon: "⚖️", title: "Always Get the Letter Notarised", desc: "Most embassies require the sponsor letter / affidavit of support to be notarised by a notary public or first-class magistrate in Bangladesh, not just signed by the sponsor." },
  { icon: "📎", title: "Attach Supporting Financial Documents", desc: "The sponsor letter alone is insufficient. It must be accompanied by the sponsor's bank statement, solvency certificate, and income proof — see our sponsor financial documents guide for the full checklist." },
  { icon: "🔗", title: "Match Details Exactly Across Documents", desc: "Names, passport numbers, and relationship descriptions in the sponsor letter must match exactly with the applicant's passport, the proof of relationship document, and the bank statement." },
  { icon: "💬", title: "Be Specific About What's Being Covered", desc: "Vague statements like 'I will support my relative' are weak. Specify exactly what costs are covered — flights, hotel, daily expenses — to give visa officers clarity on the financial arrangement." },
];

export default function SponsorLetterSamplePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="sr-only" aria-hidden="true">
        <h1>Sponsor Letter Sample for Visa 2026 — Format & Template Bangladesh | Eammu Holidays</h1>
        <nav aria-label="Breadcrumb"><ol><li><a href="https://eammu.com">Home</a></li><li><a href="https://eammu.com/travel-resources">Travel Resources</a></li><li><a href="https://eammu.com/travel-resources/sponsor-letter-sample-for-visa">Sponsor Letter Sample for Visa</a></li></ol></nav>
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
                <li className="text-white font-semibold" aria-current="page">Sponsor Letter Sample for Visa</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6">📝 2026 Guide · Updated by Eammu Holidays</div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">Sponsor Letter Sample for <span className="text-orange-400">Visa</span> — 2026 Format</h1>
            <p className="text-lg md:text-xl text-green-50/90 max-w-3xl mx-auto leading-relaxed mb-8">Complete guide and ready-to-adapt <strong className="text-white">affidavit of support / sponsor letter template</strong> for visa applications from Bangladesh — required elements, notarisation rules, and supporting documents for Schengen, UK, USA, Canada & Dubai applications.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/8801631312524?text=I%20need%20help%20drafting%20a%20sponsor%20letter%20for%20visa" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base" rel="noopener noreferrer">💬 Get Sponsor Letter Drafted</a>
              <Link href="/visa" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base">View Visa Services →</Link>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 space-y-16">

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-5 border-l-8 border-orange-500 pl-5">What Is a Sponsor Letter and Why It's Needed</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>A <strong className="text-[#005a31]">sponsor letter</strong> (also called an affidavit of support or financial undertaking letter) is a legal declaration in which a family member, relative, or other sponsor formally states they will fund the applicant's trip. It is a core part of the <Link href="/travel-resources/sponsor-financial-documents-for-visa" className="text-[#005a31] font-semibold hover:text-orange-500">sponsor financial documents</Link> package for any visa application where the applicant is not self-funding.</p>
              <p>This document carries legal weight — it is typically notarised in Bangladesh and must be consistent with the sponsor's bank statement, solvency certificate, and proof of relationship to the applicant.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">What Your Sponsor Letter Must Include</h2>
            <div className="space-y-2 mt-4">
              {requiredElements.map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex gap-3 items-start">
                  <span className="text-orange-500 font-black flex-shrink-0">✓</span>
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-5 border-l-8 border-orange-500 pl-5">Sample Sponsor Letter / Affidavit of Support Template</h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
              <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700 leading-relaxed">{sampleLetterText}</pre>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">This is a generic template. Adapt all bracketed fields with accurate information and have it notarised. Eammu Holidays drafts customised sponsor letters for clients.</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">4 Tips for a Strong Sponsor Letter</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {tips.map((t) => (
                <article key={t.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-3xl mb-3">{t.icon}</div>
                  <h3 className="font-black text-[#005a31] text-base mb-2">{t.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#005a31] mb-6 text-center">Related <span className="text-orange-500">Document Guides</span></h2>
            <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Related guides">
              {[
                { label: "Sponsor Financial Documents", href: "/travel-resources" },
                { label: "Invitation Letter Sample", href: "/travel-resources" },
                { label: "Marriage Certificate for Visa", href: "/travel-resources" },
                { label: "Bank Solvency Certificate", href: "/travel-resources" },
                { label: "How Much Bank Balance for Visa", href: "/travel-resources" },
                { label: "All Visa Services", href: "/visa" },
              ].map((lnk) => (
                <Link key={lnk.href} href={lnk.href} className="bg-white border border-gray-200 hover:border-[#005a31] hover:text-[#005a31] text-gray-600 rounded-full px-4 py-2 text-xs font-semibold transition-all shadow-sm hover:shadow">{lnk.label}</Link>
              ))}
            </nav>
          </section>

          <section className="bg-[#005a31] text-white rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-orange-400 mb-4">Need a Sponsor Letter Drafted Correctly?</h2>
            <p className="text-lg max-w-2xl mx-auto text-green-50/90 leading-relaxed mb-8">Eammu Holidays drafts notarisation-ready sponsor letters and full affidavit of support documents, consistent with your other visa application materials.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/8801631312524?text=I%20need%20a%20sponsor%20letter%20drafted%20for%20visa" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base" rel="noopener noreferrer">💬 Get Sponsor Letter (WhatsApp)</a>
              <Link href="/visa" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base">View All Visa Services →</Link>
            </div>
          </section>
        </div>
      </main>
      <HomeSeoLinks />
    </>
  );
}