// app/travel-resources/sponsor-financial-documents-for-visa/page.jsx
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),
  title: { default: "Sponsor Financial Documents for Visa 2026 | Complete Checklist | Eammu Holidays" },
  description:
    "What financial documents are required when a sponsor is funding your visa application? Complete 2026 guide to sponsor bank statements, affidavit of support, sponsor letters, and relationship proof for Schengen, UK, USA, Canada & Dubai visas — by Eammu Holidays.",
  keywords: [
    "sponsor financial documents for visa",
    "sponsor bank statement for visa bangladesh",
    "affidavit of support for visa",
    "sponsor letter for visa bangladesh",
    "financial sponsor visa documents",
    "parent sponsor visa documents",
    "spouse sponsor visa application",
    "sponsor document checklist for schengen visa",
    "sponsor document for uk visa bangladesh",
    "how to use sponsor for visa",
    "third party sponsor visa bangladesh",
    "guarantor letter for visa",
    "proof of relationship sponsor visa",
    "sponsor visa documents 2026",
  ],
  alternates: { canonical: "https://www.eammu.com/travel-resources/sponsor-financial-documents-for-visa" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "article",
    url: "https://www.eammu.com/travel-resources/sponsor-financial-documents-for-visa",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Sponsor Financial Documents for Visa 2026 — Full Checklist | Eammu Holidays",
    description: "Everything a visa sponsor needs to provide — bank statements, solvency certificate, affidavit of support, sponsor letter, and relationship proof for Bangladesh visa applications.",
    images: [{ url: "https://www.eammu.com/preview-banner.webp", width: 1200, height: 630, alt: "Sponsor Financial Documents for Visa — Eammu Holidays" }],
  },
  twitter: { card: "summary_large_image", site: "@eammuholidays", title: "Sponsor Financial Documents for Visa 2026 | Eammu Holidays", images: ["https://www.eammu.com/preview-banner.webp"] },
  icons: { icon: "/emf.jpg", shortcut: "/emf.jpg", apple: "/emf.jpg" },
  category: "travel",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.eammu.com/travel-resources/sponsor-financial-documents-for-visa#article",
      headline: "Sponsor Financial Documents for Visa 2026 — Complete Checklist for Bangladesh Applicants",
      description: "Full guide to documents required when a sponsor is funding your visa: bank statements, solvency certificate, affidavit of support, sponsor letter, and proof of relationship.",
      image: "https://www.eammu.com/preview-banner.webp",
      author: { "@type": "Organization", name: "Eammu Holidays", url: "https://www.eammu.com" },
      publisher: { "@type": "Organization", name: "Eammu Holidays", logo: { "@type": "ImageObject", url: "https://www.eammu.com/emf.jpg" } },
      datePublished: "2026-01-15",
      dateModified: "2026-06-01",
      mainEntityOfPage: "https://www.eammu.com/travel-resources/sponsor-financial-documents-for-visa",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.eammu.com" },
        { "@type": "ListItem", position: 2, name: "Travel Resources", item: "https://www.eammu.com/travel-resources" },
        { "@type": "ListItem", position: 3, name: "Sponsor Financial Documents for Visa", item: "https://www.eammu.com/travel-resources/sponsor-financial-documents-for-visa" },
      ],
    },
  ],
};

const sponsorTypes = [
  { icon: "👨‍👩‍👧", type: "Parent Sponsoring Child", relationship: "Birth certificate (applicant) + NID of parent", extra: "Most common sponsorship type in Bangladesh. Parent's bank statement should show 6 months of activity. If child is under 18, both parents should sign the affidavit." },
  { icon: "💑", type: "Spouse Sponsoring Partner", relationship: "Marriage certificate (attested)", extra: "Marriage certificate must be attested by the Ministry of Foreign Affairs (MOFA) of Bangladesh for use abroad. Spouse's employment letter strengthens the application." },
  { icon: "👨‍👩‍👦", type: "Sibling Sponsor", relationship: "Birth certificates of both applicant and sponsor", extra: "Sibling sponsorship is accepted by most embassies but scrutinised more than parent/spouse. Sibling's NID and proof of legal residence (if abroad) required." },
  { icon: "🏢", type: "Employer / Company Sponsor", relationship: "Company registration + trade license", extra: "For business visa applications. Company must provide an official sponsorship letter on letterhead, employee ID or appointment letter, and the company's bank statement." },
  { icon: "🤝", type: "Host/Inviter Sponsorship (Abroad)", relationship: "Host's passport copy + proof of residence abroad", extra: "If you are invited by a friend or relative living abroad who will cover your costs, their bank statement, invitation letter, and legal residency proof are all required. See our invitation letter guide." },
];

const docChecklist = [
  { doc: "Sponsor's Bank Statement (6 months)", note: "Must be stamped and signed by the bank. Must show regular income deposits and a healthy maintained balance — not a sudden lump sum." },
  { doc: "Bank Solvency / Balance Confirmation Certificate", note: "A separate official certificate from the bank confirming the account holder's current balance and financial standing on a specific date." },
  { doc: "Affidavit of Support (Notarised)", note: "A legal declaration by the sponsor stating they will cover all costs of the applicant's trip. Must be notarised by a first-class magistrate or notary in Bangladesh." },
  { doc: "Sponsor Letter (Personal Letter from Sponsor)", note: "A personal letter explaining the relationship, the purpose of the trip, duration, and a clear statement of financial undertaking. Must be signed and dated." },
  { doc: "Proof of Relationship Document", note: "Birth certificate, marriage certificate, or other legal document proving the relationship between applicant and sponsor. Must match names exactly." },
  { doc: "Sponsor's NID / Passport Copy", note: "A clear photocopy of the sponsor's valid National ID (if in Bangladesh) or passport (if abroad)." },
  { doc: "Sponsor's Income Proof", note: "Employment letter, salary certificate, business ownership documents, or tax return showing the source of sponsor's income." },
  { doc: "MOFA Attestation (If Required)", note: "Some embassies (UK, Schengen) require relationship documents like marriage and birth certificates to be attested by Bangladesh's Ministry of Foreign Affairs." },
];

export default function SponsorFinancialDocumentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="sr-only" aria-hidden="true">
        <h1>Sponsor Financial Documents for Visa 2026 — Complete Checklist for Bangladesh | Eammu Holidays</h1>
        <nav aria-label="Breadcrumb"><ol><li><a href="https://www.eammu.com">Home</a></li><li><a href="https://www.eammu.com/travel-resources">Travel Resources</a></li><li><a href="https://www.eammu.com/travel-resources/sponsor-financial-documents-for-visa">Sponsor Financial Documents</a></li></ol></nav>
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
                <li className="text-white font-semibold" aria-current="page">Sponsor Financial Documents</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6">
              🤝 2026 Guide · Updated by Eammu Holidays
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              Sponsor Financial Documents for <span className="text-orange-400">Visa</span> — 2026 Checklist
            </h1>
            <p className="text-lg md:text-xl text-green-50/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Using a <strong className="text-white">parent, spouse, sibling, employer, or overseas host</strong> as your financial sponsor? This guide covers every document embassies require — bank statements, affidavit of support, sponsor letter, relationship proof, and MOFA attestation — for visa applications from Bangladesh.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/8801631312524?text=I%20need%20help%20with%20sponsor%20documents%20for%20visa" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base" rel="noopener noreferrer">💬 Get Document Help</a>
              <Link href="/visa" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base">View Visa Services →</Link>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 space-y-16">

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-5 border-l-8 border-orange-500 pl-5">Can I Use a Sponsor's Bank Statement for My Visa?</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>Yes — most visa-issuing countries, including <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">Schengen member states</Link>, the <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">UK</Link>, <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">Canada</Link>, the <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">USA</Link>, and the <Link href="/visa/dubai-residents" className="text-[#005a31] font-semibold hover:text-orange-500">UAE</Link>, accept third-party sponsorship for visa applications from Bangladesh — provided the documentation is complete and clearly establishes the relationship and the financial commitment.</p>
              <p>The critical difference between a strong and a weak sponsored application is <strong className="text-[#005a31]">documentation quality</strong>. Simply attaching someone else's bank statement without a notarised affidavit, sponsor letter, and relationship proof is the most common reason sponsored applications are rejected.</p>
              <p>Eammu Holidays prepares complete sponsor document packages — including drafting the <Link href="/travel-resources/sponsor-letter-sample-for-visa" className="text-[#005a31] font-semibold hover:text-orange-500">sponsor letter</Link>, affidavit of support, and advising on MOFA attestation — as part of our full <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">visa processing service</Link>.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">Complete Document Checklist for Visa Sponsor</h2>
            <p className="text-gray-600 mb-8 text-lg">All eight of the following documents are typically required when a sponsor is funding your international visa application from Bangladesh.</p>
            <div className="space-y-3">
              {docChecklist.map((item, i) => (
                <article key={item.doc} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all flex gap-4">
                  <span className="text-orange-500 font-black text-lg flex-shrink-0 w-6">✓</span>
                  <div>
                    <h3 className="font-black text-gray-900 text-sm mb-1">{item.doc}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">Sponsor Types: What Additional Documents Are Required?</h2>
            <div className="space-y-4 mt-6">
              {sponsorTypes.map((s) => (
                <article key={s.type} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all">
                  <div className="flex gap-4">
                    <span className="text-3xl flex-shrink-0">{s.icon}</span>
                    <div>
                      <h3 className="font-black text-gray-900 text-base mb-1">{s.type}</h3>
                      <p className="text-xs text-orange-500 font-semibold mb-2">Relationship Proof: {s.relationship}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{s.extra}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#005a31] mb-6 text-center">Related <span className="text-orange-500">Document Guides</span></h2>
            <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Related visa document guides">
              {[
                { label: "Sponsor Letter Sample", href: "/travel-resources/sponsor-letter-sample-for-visa" },
                { label: "Invitation Letter Sample", href: "/travel-resources/invitation-letter-sample-for-visa" },
                { label: "Bank Statement Preparation", href: "/travel-resources/bank-statement-for-visa-how-to-prepare" },
                { label: "Bank Solvency Certificate", href: "/travel-resources/bank-solvency-certificate-for-visa" },
                { label: "Marriage Certificate for Visa", href: "/travel-resources/marriage-certificate-for-visa" },
                { label: "How Much Bank Balance for Visa", href: "/travel-resources/how-much-bank-balance-needed-for-visa" },
                { label: "Visa Rejection Help", href: "/visa-rejection" },
                { label: "All Visa Services", href: "/visa" },
              ].map((lnk) => (
                <Link key={lnk.href} href={lnk.href} className="bg-white border border-gray-200 hover:border-[#005a31] hover:text-[#005a31] text-gray-600 rounded-full px-4 py-2 text-xs font-semibold transition-all shadow-sm hover:shadow">{lnk.label}</Link>
              ))}
            </nav>
          </section>

          <section className="bg-[#005a31] text-white rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-orange-400 mb-4">Need Help Preparing Your Sponsor Documents?</h2>
            <p className="text-lg max-w-2xl mx-auto text-green-50/90 leading-relaxed mb-8">Eammu Holidays drafts sponsor letters, affidavits of support, and complete document packages for visa applications — with a 98% approval rate from Bangladesh.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/8801631312524?text=I%20need%20help%20with%20sponsor%20documents%20for%20visa" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base" rel="noopener noreferrer">💬 Get Sponsor Document Help (WhatsApp)</a>
              <Link href="/visa" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base">View All Visa Services →</Link>
            </div>
          </section>
        </div>
      </main>
      <HomeSeoLinks />
    </>
  );
}