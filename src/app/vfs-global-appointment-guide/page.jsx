// app/travel-resources/vfs-global-guide/page.jsx
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://eammu.com"),
  title: { default: "VFS Global Guide Bangladesh 2026 | How to Use VFS for Visa Application | Eammu Holidays" },
  description:
    "Complete guide to using VFS Global for visa applications from Bangladesh in 2026. How to register, book appointments, submit documents, pay fees, and collect your passport from VFS Global Dhaka — by Eammu Holidays.",
  keywords: [
    "vfs global guide bangladesh",
    "vfs global bangladesh dhaka",
    "how to use vfs global for visa",
    "vfs global appointment booking bangladesh",
    "vfs global schengen visa dhaka",
    "vfs global uk visa bangladesh",
    "vfs global canada visa dhaka",
    "vfs global document submission",
    "vfs global fees bangladesh",
    "vfs global dhaka contact",
    "vfs global track application bangladesh",
    "vfs global premium lounge bangladesh",
    "what is vfs global",
  ],
  alternates: { canonical: "https://eammu.com/travel-resources/vfs-global-guide" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "article",
    url: "https://eammu.com/travel-resources/vfs-global-guide",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "VFS Global Guide Bangladesh 2026 | Complete How-To | Eammu Holidays",
    description: "How to use VFS Global Dhaka for visa applications — registration, appointments, document submission, fees, tracking, and passport collection.",
    images: [{ url: "https://eammu.com/preview-banner.webp", width: 1200, height: 630, alt: "VFS Global Guide Bangladesh — Eammu Holidays" }],
  },
  twitter: { card: "summary_large_image", site: "@eammuholidays", title: "VFS Global Guide Bangladesh 2026 | Eammu Holidays", images: ["https://eammu.com/preview-banner.webp"] },
  icons: { icon: "/emf.jpg", shortcut: "/emf.jpg", apple: "/emf.jpg" },
  category: "travel",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://eammu.com/travel-resources/vfs-global-guide#article",
      headline: "VFS Global Bangladesh 2026 — Complete How-To Guide for Visa Applicants",
      description: "How to use VFS Global in Dhaka for visa applications — registration, appointments, document submission, tracking, and passport collection step by step.",
      image: "https://eammu.com/preview-banner.webp",
      author: { "@type": "Organization", name: "Eammu Holidays", url: "https://eammu.com" },
      publisher: { "@type": "Organization", name: "Eammu Holidays", logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" } },
      datePublished: "2026-01-10",
      dateModified: "2026-06-01",
      mainEntityOfPage: "https://eammu.com/travel-resources/vfs-global-guide",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
        { "@type": "ListItem", position: 2, name: "Travel Resources", item: "https://eammu.com/travel-resources" },
        { "@type": "ListItem", position: 3, name: "VFS Global Guide", item: "https://eammu.com/travel-resources/vfs-global-guide" },
      ],
    },
  ],
};

const vfsCountries = [
  { flag: "🇩🇪🇫🇷🇮🇹🇳🇱", label: "Schengen Countries", desc: "VFS Global handles applications for Germany, France, Italy, Netherlands, Spain, Belgium, Denmark, and many other Schengen states from its Dhaka centre. Each country uses a separate VFS portal and may require different supporting documents." },
  { flag: "🇬🇧", label: "United Kingdom", desc: "UK visa applications are submitted at VFS Global Dhaka (and Chittagong). VFS collects biometrics, processes documents, and handles passport collection. Decisions are made by UKVI in the UK." },
  { flag: "🇨🇦", label: "Canada", desc: "Canada biometrics collection is done at VFS Global Dhaka for applicants who apply online via IRCC. VFS does not process the Canadian visa itself — only biometrics." },
  { flag: "🇦🇺", label: "Australia", desc: "Australian visa biometric enrollment is handled at VFS Global AVAC centres. Australia Tourist Visa (600) applications are lodged online via ImmiAccount separately." },
  { flag: "🇿🇦🇳🇿🇳🇴", label: "Other Countries", desc: "VFS Global Dhaka also handles applications for South Africa, New Zealand, Norway, and several other countries. Always verify the current list on the VFS website as it updates regularly." },
];

const vfsSteps = [
  { step: "01", title: "Register on the VFS Portal", desc: "Go to visa.vfsglobal.com and select Bangladesh as your country of residence and your destination country. Create an account with a valid email address — all communications will be sent here." },
  { step: "02", title: "Complete Your Visa Application Form", desc: "Fill out the official visa application form for your destination country (e.g., the national Schengen form or UK online form) before booking your VFS appointment. You will need the form reference number." },
  { step: "03", title: "Pay the Visa Fee", desc: "Pay the embassy visa fee and the VFS service charge. Payment methods vary by country — some allow online card payment; others require payment at the VFS centre on the appointment day." },
  { step: "04", title: "Book Your Appointment", desc: "Select your preferred date, time, and VFS centre (Dhaka Gulshan, Dhaka Banani, or Chittagong if available). You'll receive a confirmation email — print this and bring it to your appointment." },
  { step: "05", title: "Attend Your Appointment", desc: "Arrive 15 minutes early with your complete document set, appointment confirmation, and fee receipts. VFS staff will check your documents, collect biometrics (fingerprints and photo), and submit your application to the embassy." },
  { step: "06", title: "Track and Collect", desc: "Track your application status via your VFS account. Once a decision is made, you'll receive an SMS or email. Collect your passport from the VFS centre — or use VFS courier service to have it delivered." },
];

export default function VFSGlobalGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="sr-only" aria-hidden="true">
        <h1>VFS Global Guide Bangladesh 2026 — Complete How-To for Visa Applications | Eammu Holidays</h1>
        <nav aria-label="Breadcrumb"><ol><li><a href="https://eammu.com">Home</a></li><li><a href="https://eammu.com/travel-resources">Travel Resources</a></li><li><a href="https://eammu.com/travel-resources/vfs-global-guide">VFS Global Guide</a></li></ol></nav>
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
                <li className="text-white font-semibold" aria-current="page">VFS Global Guide</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6">🏢 2026 Guide · Updated by Eammu Holidays</div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">VFS Global <span className="text-orange-400">Bangladesh Guide</span> — 2026</h1>
            <p className="text-lg md:text-xl text-green-50/90 max-w-3xl mx-auto leading-relaxed mb-8">Everything you need to know about using <strong className="text-white">VFS Global Dhaka</strong> for your visa application — which countries it serves, step-by-step process, fees, tracking, and common mistakes — by Eammu Holidays, Bangladesh's IATA-accredited travel agency.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/8801631312524?text=I%20need%20help%20with%20VFS%20appointment" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base" rel="noopener noreferrer">💬 Get VFS Help</a>
              <Link href="/visa" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base">View Visa Services →</Link>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 space-y-16">

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-5 border-l-8 border-orange-500 pl-5">What Is VFS Global and How Does It Work?</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p><strong className="text-[#005a31]">VFS Global</strong> is the world's largest outsourced visa services company. Governments of over 60 countries — including <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">Schengen nations</Link>, <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">UK</Link>, Canada, and Australia — outsource the administrative parts of visa processing to VFS. This means VFS collects your documents, takes your biometrics, and submits your application to the relevant embassy. <strong className="text-[#005a31]">VFS does not make visa decisions</strong> — that is always done by the embassy or government immigration authority.</p>
              <p>In Bangladesh, VFS Global operates Visa Application Centres (VACs) in Dhaka. Different floors or centres serve different countries. Eammu Holidays navigates VFS on behalf of clients — booking appointments, preparing documents, and accompanying or guiding applicants through the process.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">Countries Served by VFS Global Dhaka</h2>
            <div className="space-y-4 mt-4">
              {vfsCountries.map((c) => (
                <article key={c.label} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all flex gap-4">
                  <span className="text-2xl flex-shrink-0">{c.flag}</span>
                  <div>
                    <h3 className="font-black text-gray-900 text-sm mb-1">{c.label}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">Step-by-Step VFS Global Process</h2>
            <div className="space-y-4 mt-6">
              {vfsSteps.map((s) => (
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
            <h2 className="text-xl font-black text-[#005a31] mb-6 text-center">Related <span className="text-orange-500">Appointment Guides</span></h2>
            <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Related appointment guides">
              {[
                { label: "Visa Appointment Booking Guide", href: "/travel-resources/visa-appointment-booking-guide" },
                { label: "Embassy Appointment Tips", href: "/travel-resources/embassy-appointment-tips" },
                { label: "How to Track Visa Application", href: "/travel-resources/how-to-track-visa-application" },
                { label: "Visa Processing Time Tracker", href: "/travel-resources/visa-processing-time-tracker" },
                { label: "All Visa Services", href: "/visa" },
              ].map((lnk) => (
                <Link key={lnk.href} href={lnk.href} className="bg-white border border-gray-200 hover:border-[#005a31] hover:text-[#005a31] text-gray-600 rounded-full px-4 py-2 text-xs font-semibold transition-all shadow-sm hover:shadow">{lnk.label}</Link>
              ))}
            </nav>
          </section>

          <section className="bg-[#005a31] text-white rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-orange-400 mb-4">Need Help with Your VFS Appointment?</h2>
            <p className="text-lg max-w-2xl mx-auto text-green-50/90 leading-relaxed mb-8">Eammu Holidays books VFS appointments, prepares complete document packs, and guides clients through the entire submission process — from first contact to passport collection.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/8801631312524?text=I%20need%20help%20with%20my%20VFS%20visa%20application" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base" rel="noopener noreferrer">💬 Get VFS Help (WhatsApp)</a>
              <Link href="/visa" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base">View All Visa Services →</Link>
            </div>
          </section>
        </div>
      </main>
      <HomeSeoLinks />
    </>
  );
}