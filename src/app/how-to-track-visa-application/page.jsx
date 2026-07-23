// app/travel-resources/how-to-track-visa-application/page.jsx
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://eammu.com"),
  title: { default: "How to Track Visa Application 2026 | Check Status Online | Eammu Holidays" },
  description:
    "How to track your visa application status online in 2026. Step-by-step guide for checking Schengen, UK, USA, Canada, Dubai visa status through VFS Global, UKVI, CEAC, IRCC, and embassy portals — by Eammu Holidays Bangladesh.",
  keywords: [
    "how to track visa application",
    "visa application status check",
    "check visa status online bangladesh",
    "vfs global track application",
    "uk visa status check",
    "usa visa status check ceac",
    "canada visa status check ircc",
    "schengen visa track application",
    "how to check if visa is approved",
    "visa processing status 2026",
    "visa application reference number",
    "how long visa processing takes",
    "visa status pending what to do",
    "visa application tracker bangladesh",
  ],
  alternates: { canonical: "https://eammu.com/how-to-track-visa-application" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "article",
    url: "https://eammu.com/how-to-track-visa-application",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "How to Track Visa Application 2026 | Check Status Online | Eammu Holidays",
    description: "Step-by-step guide to checking your visa application status for Schengen, UK, USA, Canada, and Dubai — portals, reference numbers, and what each status means.",
    images: [{ url: "https://eammu.com/preview-banner.webp", width: 1200, height: 630, alt: "Track Visa Application — Eammu Holidays" }],
  },
  twitter: { card: "summary_large_image", site: "@eammuholidays", title: "How to Track Visa Application 2026 | Eammu Holidays", images: ["https://eammu.com/preview-banner.webp"] },
  icons: { icon: "/emf.jpg", shortcut: "/emf.jpg", apple: "/emf.jpg" },
  category: "travel",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://eammu.com/how-to-track-visa-application#article",
      headline: "How to Track Your Visa Application Status Online — 2026 Guide for Bangladesh",
      description: "Complete guide to tracking visa application status for Schengen, UK, USA, Canada, and UAE visa applications from Bangladesh — portals, reference numbers, processing timelines, and what status messages mean.",
      image: "https://eammu.com/preview-banner.webp",
      author: { "@type": "Organization", name: "Eammu Holidays", url: "https://eammu.com" },
      publisher: { "@type": "Organization", name: "Eammu Holidays", logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" } },
      datePublished: "2026-01-10",
      dateModified: "2026-06-01",
      mainEntityOfPage: "https://eammu.com/how-to-track-visa-application",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
        { "@type": "ListItem", position: 2, name: "Travel Resources", item: "https://eammu.com/travel-resources" },
        { "@type": "ListItem", position: 3, name: "How to Track Visa Application", item: "https://eammu.com/how-to-track-visa-application" },
      ],
    },
  ],
};

const trackingPortals = [
  { flag: "🇪🇺", country: "Schengen Visa", portal: "VFS Global Tracking Portal", url: "visa.vfsglobal.com", how: "Log in to your VFS account using the email and reference number from your appointment. Status updates to 'Under Process', 'Decision Made', or 'Ready for Collection' as it progresses.", processingTime: "15–45 business days" },
  { flag: "🇬🇧", country: "UK Visa", portal: "UKVI Status Checker", url: "www.vfsglobal.co.uk", how: "Use your GWF (Global Web Form) number from your application confirmation email on the UKVI tracking page. You'll receive email updates when your passport is ready to collect from VFS.", processingTime: "3–8 weeks (standard), 5 business days (priority)" },
  { flag: "🇺🇸", country: "USA Visa (B1/B2)", portal: "CEAC — ceac.state.gov", url: "ceac.state.gov", how: "Enter your Case Number (from your DS-160 or MRV receipt) and passport number on CEAC. Status shows as 'Refused', 'Issued', 'Ready', or 'Administrative Processing'.", processingTime: "1–5 business days post-interview; administrative processing can take weeks" },
  { flag: "🇨🇦", country: "Canada Visa", portal: "IRCC Online Account", url: "www.canada.ca/en/immigration-refugees-citizenship", how: "Log into your IRCC account and view your application status under 'Check application status'. You'll see if biometrics are needed, if the application is in review, or a decision has been made.", processingTime: "4–8 weeks (visitor), 8–20 weeks (study/work permit)" },
  { flag: "🇦🇪", country: "Dubai / UAE Visa", portal: "ICP Smart Services / EDNRD", url: "smartservices.icp.gov.ae", how: "Track your UAE visa through the ICA Smart Services portal using your application reference number, or via the travel agency that submitted your application. UAE visas typically arrive by email within 3–5 working days.", processingTime: "3–5 working days (standard), 24 hours (express)" },
  { flag: "🇦🇺", country: "Australia Visa", portal: "VEVO — Visa Entitlement Verification Online", url: "immi.homeaffairs.gov.au", how: "Australian visas are electronic and attached to your passport. Use VEVO to verify your visa grant online — enter your passport and transaction reference number from your ImmiAccount.", processingTime: "15–45 calendar days (tourist subclass 600)" },
];

const statusMessages = [
  { status: "Application Received / Under Process", meaning: "Your application has been submitted and is being reviewed. No action needed. Avoid contacting the embassy during this stage unless the processing time has significantly exceeded the standard timeline." },
  { status: "Additional Documents Requested", meaning: "The embassy needs more information. Respond quickly and completely. Missing the deadline for additional documents can result in refusal. Contact Eammu Holidays immediately for guidance on what to submit." },
  { status: "Decision Made / Ready for Collection", meaning: "A decision has been made on your application. This does NOT confirm approval — it means a decision (approved or refused) has been reached. Collect your passport from the VFS centre or wait for email notification." },
  { status: "Administrative Processing (USA)", meaning: "Specific to US visa applications. Your application requires additional security or background checks. This is common and can take days to months. It does not mean your visa is refused." },
  { status: "Approved / Visa Granted", meaning: "Your visa has been approved. Check the validity dates, number of entries, and allowed duration carefully before travelling. Report any errors immediately." },
  { status: "Refused / Rejected", meaning: "Your application has been refused. Collect your passport and refusal letter. Review the reason carefully — our visa team at Eammu Holidays can assess your case and advise on reapplication or appeal options." },
];

export default function TrackVisaApplicationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="sr-only" aria-hidden="true">
        <h1>How to Track Visa Application 2026 — Check Status Online Bangladesh | Eammu Holidays</h1>
        <nav aria-label="Breadcrumb"><ol><li><a href="https://eammu.com">Home</a></li><li><a href="https://eammu.com/travel-resources">Travel Resources</a></li><li><a href="https://eammu.com/how-to-track-visa-application">How to Track Visa Application</a></li></ol></nav>
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
                <li className="text-white font-semibold" aria-current="page">How to Track Visa Application</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6">🔍 2026 Guide · Updated by Eammu Holidays</div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              How to <span className="text-orange-400">Track Your Visa Application</span> — 2026 Guide
            </h1>
            <p className="text-lg md:text-xl text-green-50/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Step-by-step guide to checking your <strong className="text-white">visa application status online</strong> for Schengen, UK, USA, Canada, Dubai, and Australia — tracking portals, reference numbers, what each status message means, and typical processing timelines from Bangladesh.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/8801701699743?text=I%20need%20help%20tracking%20my%20visa%20application" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base" rel="noopener noreferrer">💬 Get Application Help</a>
              <Link href="/visa" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base">View Visa Services →</Link>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 space-y-16">

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-5 border-l-8 border-orange-500 pl-5">Tracking Your Application: What You Need</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>After submitting your visa application at a VFS centre or embassy, you should receive a <strong className="text-[#005a31]">reference number, application ID, or receipt number</strong>. This is your tracking key — save it immediately. Without this number, you cannot check your status online.</p>
              <p>Processing times vary significantly by country, season, and application volume. <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#005a31] font-semibold hover:text-orange-500">Typical processing times</Link> range from 3 days for UAE to 8+ weeks for Canada. Avoid contacting the embassy before the standard processing time has passed.</p>
              <p>If you applied through Eammu Holidays, our team monitors your application and notifies you of status changes — you don't need to check manually.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">How to Track Visa Application by Country</h2>
            <div className="space-y-4 mt-4">
              {trackingPortals.map((c) => (
                <article key={c.country} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{c.flag}</span>
                    <div>
                      <h3 className="font-black text-gray-900 text-sm">{c.country}</h3>
                      <p className="text-xs text-orange-500 font-semibold">{c.portal} · Processing: {c.processingTime}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.how}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">What Each Visa Status Message Means</h2>
            <div className="space-y-3 mt-4">
              {statusMessages.map((s) => (
                <article key={s.status} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="font-black text-[#005a31] text-sm mb-1">📌 {s.status}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.meaning}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#005a31] mb-6 text-center">Related <span className="text-orange-500">Visa Resources</span></h2>
            <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Related visa resources">
              {[
                { label: "Visa Processing Time Tracker", href: "/travel-resources/visa-processing-time-tracker" },
                { label: "Visa Delay Reasons & What to Do", href: "/travel-resources/visa-delay-reasons-what-to-do" },
                { label: "Visa Rejected — What to Do", href: "/travel-resources/visa-cancelled-what-to-do" },
                { label: "Can I Reapply After Rejection", href: "/travel-resources/can-i-reapply-after-visa-rejection" },
                { label: "Visa Rejection Help", href: "/visa-rejection" },
                { label: "All Visa Services", href: "/visa" },
              ].map((lnk) => (
                <Link key={lnk.href} href={lnk.href} className="bg-white border border-gray-200 hover:border-[#005a31] hover:text-[#005a31] text-gray-600 rounded-full px-4 py-2 text-xs font-semibold transition-all shadow-sm hover:shadow">{lnk.label}</Link>
              ))}
            </nav>
          </section>

          <section className="bg-[#005a31] text-white rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-orange-400 mb-4">Applied and Worried About Your Status?</h2>
            <p className="text-lg max-w-2xl mx-auto text-green-50/90 leading-relaxed mb-8">Eammu Holidays monitors visa applications for clients and provides real-time status updates. If you applied independently and need help understanding a status message or delay — contact us.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/8801701699743?text=I%20need%20help%20tracking%20my%20visa%20application" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base" rel="noopener noreferrer">💬 Get Application Help (WhatsApp)</a>
              <Link href="/visa" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base">View All Visa Services →</Link>
            </div>
          </section>
        </div>
      </main>
      <HomeSeoLinks />
    </>
  );
}