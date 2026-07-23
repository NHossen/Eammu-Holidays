// app/travel-resources/travel-itinerary-for-visa-how-to-make/page.jsx
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://eammu.com"),
  title: { default: "Travel Itinerary for Visa — How to Make One 2026 | Sample Format | Eammu Holidays" },
  description:
    "How to create a travel itinerary for a visa application from Bangladesh. 2026 guide with sample format, day-by-day template, and what Schengen, UK, USA, Canada & Dubai embassies require — by Eammu Holidays.",
  keywords: [
    "travel itinerary for visa",
    "how to make travel itinerary for visa",
    "visa itinerary sample",
    "travel plan for visa application",
    "schengen visa itinerary template",
    "travel itinerary format for visa bangladesh",
    "day by day itinerary for visa",
    "trip itinerary for visa application",
    "travel schedule for visa",
    "how to write itinerary for visa",
    "itinerary letter for visa",
    "travel itinerary 2026 visa",
  ],
  alternates: { canonical: "https://eammu.com/travel-resources/travel-itinerary-for-visa-how-to-make" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "article",
    url: "https://eammu.com/travel-resources/travel-itinerary-for-visa-how-to-make",
    siteName: "Eammu Holidays",
    title: "Travel Itinerary for Visa — How to Make One 2026 | Eammu Holidays",
    description: "Step-by-step guide to creating a travel itinerary for a visa application — sample format, what to include, and common mistakes to avoid.",
    images: [{ url: "https://eammu.com/preview-banner.webp", width: 1200, height: 630, alt: "Travel Itinerary for Visa — Eammu Holidays" }],
  },
  twitter: { card: "summary_large_image", site: "@eammuholidays", title: "Travel Itinerary for Visa 2026 | Eammu Holidays", images: ["https://eammu.com/preview-banner.webp"] },
  icons: { icon: "/emf.jpg", shortcut: "/emf.jpg", apple: "/emf.jpg" },
  category: "travel",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://eammu.com/travel-resources/travel-itinerary-for-visa-how-to-make#article",
      headline: "How to Make a Travel Itinerary for a Visa Application — 2026 Sample & Guide",
      description: "Complete guide to creating a visa itinerary for Schengen, UK, USA, Canada, and UAE applications from Bangladesh — with sample day-by-day format and what to include.",
      image: "https://eammu.com/preview-banner.webp",
      author: { "@type": "Organization", name: "Eammu Holidays", url: "https://eammu.com" },
      publisher: { "@type": "Organization", name: "Eammu Holidays", logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" } },
      datePublished: "2026-01-10",
      dateModified: "2026-06-01",
      mainEntityOfPage: "https://eammu.com/travel-resources/travel-itinerary-for-visa-how-to-make",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
        { "@type": "ListItem", position: 2, name: "Travel Resources", item: "https://eammu.com/travel-resources" },
        { "@type": "ListItem", position: 3, name: "Travel Itinerary for Visa", item: "https://eammu.com/travel-resources/travel-itinerary-for-visa-how-to-make" },
      ],
    },
  ],
};

const itineraryElements = [
  { item: "Full Name & Passport Number", note: "At the top of the document — must match your passport exactly." },
  { item: "Travel Dates (Entry & Exit)", note: "Clear departure date from Bangladesh and return date, with specific flight details if confirmed." },
  { item: "Countries / Cities to be Visited", note: "All destinations in order of visit — essential for Schengen multi-country trips." },
  { item: "Day-by-Day Activity Plan", note: "A brief note for each day: city, planned activity or sight, and accommodation." },
  { item: "Hotel Name & Address for Each Night", note: "Must match your hotel booking confirmation document." },
  { item: "Flight Information (If Available)", note: "Airline, flight number, departure and arrival times. If not booked, mention 'to be confirmed after visa approval'." },
  { item: "Transportation Between Cities", note: "Train, car hire, or internal flights — show how you plan to move between destinations." },
  { item: "Estimated Daily Budget", note: "Some embassies appreciate a rough daily cost estimate demonstrating your financial planning." },
];

const sampleItinerary = [
  { day: "Day 1", city: "Paris, France", plan: "Arrival at CDG Airport. Check-in at Hotel X, 12 Rue de Example, Paris. Eiffel Tower visit and rest." },
  { day: "Day 2", city: "Paris, France", plan: "Louvre Museum, Notre Dame Cathedral. Dinner at local restaurant. Overnight at Hotel X, Paris." },
  { day: "Day 3", city: "Amsterdam, Netherlands", plan: "Eurostar/Thalys train to Amsterdam. Rijksmuseum. Check-in at Hotel Y. Canal cruise." },
  { day: "Day 4", city: "Amsterdam, Netherlands", plan: "Anne Frank House. Van Gogh Museum. Overnight at Hotel Y." },
  { day: "Day 5", city: "Return to Dhaka", note: "Flight AMS–DAC, departure 14:00. Arrival Hazrat Shahjalal International Airport, Dhaka." },
];

export default function TravelItineraryForVisaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="sr-only" aria-hidden="true">
        <h1>How to Make a Travel Itinerary for Visa 2026 — Sample Format Bangladesh | Eammu Holidays</h1>
        <nav aria-label="Breadcrumb"><ol><li><a href="https://eammu.com">Home</a></li><li><a href="https://eammu.com/travel-resources">Travel Resources</a></li><li><a href="https://eammu.com/travel-resources/travel-itinerary-for-visa-how-to-make">Travel Itinerary for Visa</a></li></ol></nav>
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
                <li className="text-white font-semibold" aria-current="page">Travel Itinerary for Visa</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6">🗺️ 2026 Guide · Updated by Eammu Holidays</div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">Travel Itinerary for Visa — <span className="text-orange-400">How to Make One</span></h1>
            <p className="text-lg md:text-xl text-green-50/90 max-w-3xl mx-auto leading-relaxed mb-8">A complete guide to creating a <strong className="text-white">visa travel itinerary</strong> from Bangladesh — what to include, sample day-by-day format, embassy requirements for Schengen, UK, USA, Canada, and Dubai, and common mistakes to avoid.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/8801701699743?text=I%20need%20help%20making%20a%20travel%20itinerary%20for%20visa" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base" rel="noopener noreferrer">💬 Get Itinerary Prepared</a>
              <Link href="/visa" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base">View Visa Services →</Link>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 space-y-16">
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-5 border-l-8 border-orange-500 pl-5">Why Embassies Require a Travel Itinerary</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>A <strong className="text-[#005a31]">travel itinerary</strong> demonstrates to visa officers that your trip is planned, purposeful, and temporary. It shows you know exactly where you'll be staying, how long you'll be visiting, and when you plan to return to Bangladesh. This is a key document for <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">Schengen visa</Link>, <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">UK visa</Link>, and <Link href="/visa/dubai-residents" className="text-[#005a31] font-semibold hover:text-orange-500">UAE visa</Link> applications.</p>
              <p>Your itinerary doesn't need to be a rigid minute-by-minute schedule. A clear, realistic day-by-day plan that aligns with your hotel bookings and visa duration is all that's needed. At Eammu Holidays, we prepare custom itineraries for our clients as part of the full <Link href="/visa" className="text-[#005a31] font-semibold hover:text-orange-500">visa processing service</Link>.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">What Your Travel Itinerary Must Include</h2>
            <div className="space-y-3 mt-6">
              {itineraryElements.map((el, i) => (
                <article key={el.item} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                  <span className="text-orange-500 font-black flex-shrink-0 text-lg">✓</span>
                  <div>
                    <h3 className="font-black text-gray-900 text-sm mb-0.5">{el.item}</h3>
                    <p className="text-gray-600 text-sm">{el.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-5 border-l-8 border-orange-500 pl-5">Sample Travel Itinerary — Schengen Visa (5-Day France + Netherlands)</h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-[#005a31] text-white px-6 py-3">
                <p className="font-bold text-sm">Sample Itinerary — Applicant: [Your Full Name] | Passport: [Number] | Travel: 10 July 2026 – 14 July 2026</p>
              </div>
              <div className="divide-y divide-gray-100">
                {sampleItinerary.map((day) => (
                  <div key={day.day} className="px-6 py-4 flex gap-4">
                    <span className="font-black text-orange-500 text-sm w-16 flex-shrink-0">{day.day}</span>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{day.city}</p>
                      <p className="text-gray-600 text-sm">{day.plan || day.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">This is a sample format. Adapt with your actual bookings and destinations. Eammu Holidays prepares custom itineraries for all clients.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#005a31] mb-6 text-center">Related <span className="text-orange-500">Visa Document Guides</span></h2>
            <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Related guides">
              {[
                { label: "Hotel Booking Without Full Payment", href: "/travel-resources/hotel-booking-for-visa-without-paying" },
                { label: "Visa Checklist Generator", href: "/travel-resources/visa-checklist-generator" },
                { label: "Bank Statement for Visa", href: "/travel-resources/bank-statement-for-visa" },
                { label: "Invitation Letter Sample", href: "/travel-resources/invitation-letter-sample-for-visa" },
                { label: "All Visa Services", href: "/visa" },
              ].map((lnk) => (
                <Link key={lnk.href} href={lnk.href} className="bg-white border border-gray-200 hover:border-[#005a31] hover:text-[#005a31] text-gray-600 rounded-full px-4 py-2 text-xs font-semibold transition-all shadow-sm hover:shadow">{lnk.label}</Link>
              ))}
            </nav>
          </section>

          <section className="bg-[#005a31] text-white rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-orange-400 mb-4">Need a Custom Visa Itinerary?</h2>
            <p className="text-lg max-w-2xl mx-auto text-green-50/90 leading-relaxed mb-8">Eammu Holidays prepares professional day-by-day travel itineraries for all visa types — accepted by Schengen, UK, Dubai, Canada, and USA embassies.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/8801701699743?text=I%20need%20a%20travel%20itinerary%20for%20my%20visa" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base" rel="noopener noreferrer">💬 Get Itinerary Prepared (WhatsApp)</a>
              <Link href="/visa" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base">View All Visa Services →</Link>
            </div>
          </section>
        </div>
      </main>
      <HomeSeoLinks />
    </>
  );
}