// app/travel-resources/embassy-appointment-tips/page.jsx
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import Link from "next/link";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://eammu.com"),
  title: {
    default:
      "Embassy Appointment Tips 2026 | How to Get Visa Appointment Fast + Day-of Checklist | Eammu Holidays",
  },
  description:
    "Expert tips for securing embassy and VFS Global visa appointments fast from Bangladesh in 2026. How to get Schengen, UK, USA, Canada appointment slots, premium lounge explained, biometric requirements, day-of timeline, rescheduling rules, fraud warnings, and common mistakes — by Eammu Holidays.",
  keywords: [
    "embassy appointment tips bangladesh",
    "how to get visa appointment fast",
    "embassy visa appointment tips 2026",
    "vfs appointment tips bangladesh",
    "how to get schengen appointment quickly",
    "uk visa appointment tips dhaka",
    "usa visa appointment tips bangladesh",
    "embassy appointment do's and don'ts",
    "what to bring to embassy appointment",
    "how to reschedule visa appointment",
    "embassy appointment checklist bangladesh",
    "vfs premium lounge worth it",
    "visa biometric appointment requirements",
    "vfs global appointment scam warning",
    "vfs appointment day process",
  ],
  alternates: { canonical: "https://eammu.com/embassy-appointment-tips" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "article",
    url: "https://eammu.com/embassy-appointment-tips",
    siteName: "Eammu Holidays",
    locale: "en_US",
    title: "Embassy Appointment Tips 2026 | Eammu Holidays",
    description:
      "How to secure embassy and VFS appointment slots fast from Bangladesh, what to bring, premium lounge explained, and what NOT to do on appointment day.",
    images: [
      {
        url: "https://eammu.com/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Embassy Appointment Tips — Eammu Holidays",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@eammuholidays",
    title: "Embassy Appointment Tips 2026 | Eammu Holidays",
    images: ["https://eammu.com/preview-banner.webp"],
  },
  icons: { icon: "/emf.jpg", shortcut: "/emf.jpg", apple: "/emf.jpg" },
  category: "travel",
};

// ─── FAQ data ──────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What is the fastest way to get a visa appointment slot from Bangladesh?",
    a: "Check the VFS Global or embassy portal at the exact time new slots are typically released — often early morning or midnight local time — and have your documents, payment method, and application reference ready so you can complete the booking within minutes. Booking 6–8 weeks ahead during peak season also helps significantly.",
  },
  {
    q: "Is the VFS Premium Lounge worth paying for?",
    a: "Premium Lounge gives you a separate, usually less contested slot pool, a quieter waiting area, and a faster in-centre process. It does not speed up the embassy's decision or improve your approval chances — VFS Global itself is clear that premium services affect comfort and scheduling only, not the outcome of your application.",
  },
  {
    q: "Can someone else attend my visa appointment on my behalf?",
    a: "No. Because biometric data (fingerprints and a photograph) is unique to you, you must attend your appointment in person. Children under 5 are generally exempt from fingerprinting but still need to attend for a photograph, and children under 16 must be accompanied by a responsible adult.",
  },
  {
    q: "What happens during a VFS or embassy appointment?",
    a: "Typically: arrival and security screening, a token number, a wait in the seating area, a counter call where an officer checks your documents and collects your passport, biometric enrollment (fingerprints and photo), fee payment, and a receipt with a tracking number. The whole process usually takes 1–3 hours depending on the centre and season.",
  },
  {
    q: "How do I reschedule or cancel a visa appointment?",
    a: "Log in to your VFS or embassy portal account and use the 'Manage Appointment' option, ideally at least 24–48 hours before your slot. During peak season, a cancelled slot may not free up an equally convenient date, so only reschedule if genuinely necessary.",
  },
  {
    q: "Is the VFS or embassy service fee refunded if my visa is refused?",
    a: "No. The service and processing fees cover the handling and assessment of your application, not a guaranteed outcome, so they are not refunded if your visa is refused.",
  },
  {
    q: "Are there scams involving fake 'guaranteed' visa appointments?",
    a: "Yes, and travellers should be cautious. Genuine VFS Global and embassy staff never sell guaranteed appointments or approvals for an extra fee outside official channels. Any individual or agency promising a guaranteed slot or approval for a private payment should be treated as a red flag — always book through the official portal or a licensed agency like Eammu Holidays.",
  },
  {
    q: "What is 'First-Time Right' and why does it matter?",
    a: "It refers to submitting a complete, correctly formatted document set on your very first attempt. Many VACs will refuse to accept an application if even one document is missing or incorrectly formatted, forcing you to rebook an entirely new appointment in an already crowded system — so document accuracy before booking matters as much as booking speed.",
  },
  {
    q: "What happens if I'm turned away at the counter for a missing document?",
    a: "Some centres will refuse to accept an incomplete application on the spot, meaning you'll need to fix the missing item and book an entirely new appointment. This is why reviewing your full document set — ideally with a consultant — a day or two before your slot matters as much as booking the slot itself.",
  },
  {
    q: "Can I bring someone to translate or help me at the appointment?",
    a: "Most VACs allow you to bring one companion into the general waiting area for support, though only the applicant is usually permitted at the counter itself for document handling and biometrics. If language is a concern, check the specific centre's policy in advance or bring a translated cover letter where documents aren't in English.",
  },
  {
    q: "Can Eammu Holidays book my embassy appointment for me?",
    a: "Yes. Eammu Holidays monitors appointment availability across Schengen countries, the UK, USA, and Canada, and handles booking, document preparation, and submission on your behalf as part of our visa consultancy service.",
  },
];

// ─── Structured data ────────────────────────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://eammu.com/embassy-appointment-tips#article",
      headline: "Embassy Visa Appointment Tips 2026 — How to Get Slots Fast from Bangladesh",
      description:
        "Expert tips for securing embassy and VFS Global visa appointment slots from Bangladesh, with a preparation checklist, premium lounge explainer, and day-of guidance.",
      image: "https://eammu.com/preview-banner.webp",
      author: { "@type": "Organization", name: "Eammu Holidays", url: "https://eammu.com" },
      publisher: {
        "@type": "Organization",
        name: "Eammu Holidays",
        logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" },
      },
      datePublished: "2026-01-10",
      dateModified: "2026-09-02",
      mainEntityOfPage: "https://eammu.com/embassy-appointment-tips",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://eammu.com" },
        { "@type": "ListItem", position: 2, name: "Travel Resources", item: "https://eammu.com/travel-resources" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Embassy Appointment Tips",
          item: "https://eammu.com/embassy-appointment-tips",
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "How to Get an Embassy or VFS Visa Appointment Fast",
      description: "Steps to secure a visa appointment slot quickly from Bangladesh and prepare for appointment day.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Check Portals at Opening Time" },
        { "@type": "HowToStep", position: 2, name: "Book 6–8 Weeks in Advance for Peak Season" },
        { "@type": "HowToStep", position: 3, name: "Use Appointment Alert Services" },
        { "@type": "HowToStep", position: 4, name: "Have Payment Ready Before Booking" },
        { "@type": "HowToStep", position: 5, name: "Prepare All Documents Before Booking a Slot" },
        { "@type": "HowToStep", position: 6, name: "Reschedule Correctly — Don't Just No-Show" },
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
const slotTips = [
  {
    icon: "⏰",
    title: "Check Portals at Opening Time",
    desc: "VFS Global and embassy portals typically release new slots at specific times — often early morning or midnight local time. Set a daily alarm and check the moment slots are released. Waiting until afternoon means all slots are gone.",
  },
  {
    icon: "📅",
    title: "Book 6–8 Weeks in Advance for Peak Season",
    desc: "For Eid, summer (June–August), and December holiday season, popular destinations like Germany, Italy, France, and UK see appointment queues extend 6–8 weeks. Start your visa process well before your planned travel date.",
  },
  {
    icon: "🔔",
    title: "Use Appointment Alert Services",
    desc: "Several Telegram channels and third-party tools notify subscribers when new VFS slots open. Eammu Holidays also monitors slot availability for clients as part of our full visa service.",
  },
  {
    icon: "📱",
    title: "Have Payment Ready Before Booking",
    desc: "Many portals time out within minutes of a slot becoming available. Have your payment card details, application reference number, and personal details on hand so you can complete the booking in under 3 minutes.",
  },
  {
    icon: "🗂️",
    title: "Prepare All Documents Before Booking a Slot",
    desc: "Don't book an appointment for a date two days away unless your documents are 100% ready. A rushed or incomplete document set wastes your slot and may result in rejection at the gate.",
  },
  {
    icon: "📞",
    title: "Reschedule Correctly — Don't Just No-Show",
    desc: "If you can't attend, reschedule or cancel at least 24–48 hours in advance through the portal. No-shows are recorded on some systems and may affect future appointment bookings.",
  },
  {
    icon: "🗓️",
    title: "Try Mid-Week Slots When Possible",
    desc: "Monday and Friday slots tend to book out first, since applicants often plan around weekends. Tuesday to Thursday appointments frequently have better availability, especially at busier centres.",
  },
  {
    icon: "👀",
    title: "Watch for Cancellation Slots",
    desc: "Cancelled appointments reappear on the portal in real time. Refreshing the booking calendar a few times a day — especially in the evening, when some applicants cancel last-minute — can surface a much earlier date.",
  },
];

const dayOfChecklist = [
  "Appointment confirmation printout or screenshot",
  "Valid passport (original) — not expired",
  "All original supporting documents in organised folder, in the order listed on the official checklist",
  "Passport-size photos as per specifications",
  "Visa fee and service fee payment receipt (if paid online in advance)",
  "Completed and printed application form (if required)",
  "Bank statement and solvency certificate (originals)",
  "Travel insurance certificate (for Schengen)",
  "Hotel booking and itinerary",
  "Employment letter / business documents",
  "A photocopy of your national ID or NID card, in case it's requested",
  "A pen — for last-minute form corrections at the counter",
];

// Country / region-specific appointment guidance
const countryGuidance = [
  {
    flag: "🇪🇺",
    region: "Schengen Countries",
    operator: "VFS Global, TLScontact, or BLS International, depending on the destination country",
    notes:
      "Slots are scarcest April–September. Some smaller consulates (outside the capital of your destination country) can have noticeably faster availability than the busiest ones — apply through the country where you'll spend the most nights, not necessarily the most convenient VAC.",
  },
  {
    flag: "🇬🇧",
    region: "United Kingdom",
    operator: "VFS Global",
    notes:
      "Application is submitted online first, then a VAC appointment is booked separately for biometric enrollment and document submission. Priority and Super Priority services can shorten the decision wait, but do not skip the biometric appointment itself.",
  },
  {
    flag: "🇺🇸",
    region: "United States",
    operator: "US Embassy Dhaka (direct booking, not via VFS)",
    notes:
      "Interview slots are booked directly through the embassy's own appointment system after paying the MRV fee. Wait times fluctuate seasonally — checking regularly for earlier openings and being flexible on interview dates helps.",
  },
  {
    flag: "🇨🇦",
    region: "Canada",
    operator: "VFS Global (for biometrics) — application typically submitted online first",
    notes:
      "Most Canadian visa applications are submitted online, with a separate biometric appointment booked afterward at the VAC. Watch your email for the biometric instruction letter and book promptly once it arrives.",
  },
  {
    flag: "🇦🇪",
    region: "UAE / Dubai",
    operator: "Typically processed through a licensed travel/visa agency",
    notes:
      "Many UAE visa categories are processed through licensed agencies rather than a walk-in VAC appointment. Working with an IATA-accredited agency like Eammu Holidays removes most of the appointment-booking burden entirely.",
  },
];

const mistakes = [
  {
    icon: "❌",
    title: "Booking Before Documents Are Ready",
    desc: "Securing an early slot feels like a win, but if your documents aren't complete, some VACs will refuse to accept the application outright — forcing you to rebook in an already crowded system.",
  },
  {
    icon: "❌",
    title: "Arriving Without the Appointment Confirmation",
    desc: "Most centres are strict about entry — no confirmation printout or screenshot usually means no entry, regardless of how far you've travelled.",
  },
  {
    icon: "❌",
    title: "Bringing Unauthorised People or Items",
    desc: "Only applicants listed in the booking are typically allowed inside. Large bags, electronic devices, and certain personal items may not be permitted through security.",
  },
  {
    icon: "❌",
    title: "Believing 'Guaranteed Appointment' Offers",
    desc: "No legitimate agent can guarantee a slot outside the official portal. Payments made to third parties promising guaranteed appointments or approvals are a common scam target for Bangladeshi applicants.",
  },
  {
    icon: "❌",
    title: "Assuming Premium Lounge Speeds Up the Decision",
    desc: "Premium services affect your comfort and in-centre waiting time only — they have no bearing on whether your visa is approved or how fast the embassy processes the decision.",
  },
  {
    icon: "❌",
    title: "No-Showing Instead of Cancelling",
    desc: "A missed appointment without cancellation can be recorded against your account on some systems, potentially affecting how future bookings are handled.",
  },
];

// The physical, on-the-day flow at a typical VAC
const dayOfTimeline = [
  { time: "T–15 min", action: "Arrive at the Visa Application Centre. Most centres ask you not to arrive earlier than 15 minutes before your slot." },
  { time: "Entry", action: "Security screening at the entrance — expect a bag check and to pass through a metal detector, similar to airport security." },
  { time: "Reception", action: "Present your appointment confirmation at the reception desk and receive a token or queue number." },
  { time: "Waiting Area", action: "Wait to be called — typically 30 minutes to 2 hours depending on the centre and season, less with Premium Lounge." },
  { time: "Counter Call", action: "An officer reviews your documents against the checklist, collects your passport, and opens your file." },
  { time: "Biometrics", action: "Fingerprints (usually all ten) and a digital photograph are captured. This step is mandatory and cannot be delegated to anyone else." },
  { time: "Payment", action: "Pay the visa fee and VAC service fee at the cashier counter, if not already paid online." },
  { time: "Receipt & Exit", action: "You receive a receipt with a tracking or reference number — keep this safe, as you'll need it to track your application and later collect your passport." },
];

const premiumLoungeFacts = [
  "A separate, usually less crowded slot pool — often available even when standard slots are fully booked",
  "A private, air-conditioned waiting area instead of the general queue",
  "Typically shorter total time at the centre — often 30–60 minutes versus 1–3 hours standard",
  "Does not affect the embassy's decision, processing time, or approval chances in any way",
  "Not available at every centre or for every destination country — check availability before assuming it applies to you",
];

const biometricRules = [
  "Biometric enrollment (fingerprints and a photograph) must be done in person — no one can attend on your behalf",
  "Children under 5 are generally exempt from fingerprinting but still need to attend for a photograph",
  "Children under 16 must be accompanied by a responsible adult and will usually provide a photo and fingerprints, but not a signature",
  "Biometric data is often valid for a set period (commonly around 5 years for Schengen) and may not need to be re-captured on your very next application within that window",
  "Without valid biometrics on file, your application generally cannot be processed further, regardless of how complete your paperwork is",
];

const reschedulingRules = [
  "Log in to your VFS or embassy portal account and use the 'Manage Appointment' or equivalent option",
  "Reschedule or cancel at least 24–48 hours before your slot wherever possible",
  "During peak season, a new slot after cancellation may be significantly later than your original date — only reschedule if genuinely necessary",
  "Repeated no-shows (missing an appointment without cancelling) can be recorded against your applicant profile on some systems",
  "If you must cancel due to a genuine emergency, check whether the centre offers a documented emergency/humanitarian process rather than simply not attending",
];

// Guidance for families or groups applying together
const familyGroupTips = [
  {
    title: "Book Linked Appointments Where Possible",
    desc: "Many portals let you book consecutive or grouped slots for family members applying together. This keeps the family together in the queue instead of being called at different times across the day.",
  },
  {
    title: "Every Applicant Needs Their Own Full Document Set",
    desc: "Even for a joint family trip, each applicant — including children — typically needs an individually completed application form and, in most cases, their own supporting documents such as photos and, where applicable, financial proof.",
  },
  {
    title: "Bring an Extra Adult for Larger Families",
    desc: "If you're travelling with several children, having a second adult present makes it easier to manage the queue, biometric steps for each child, and document handling without holding up the counter.",
  },
  {
    title: "Confirm Each Child's Biometric Requirement in Advance",
    desc: "Rules differ by age band (typically under 5, 5–11, and 12–15), so confirm exactly what's required for each child's age before your appointment day to avoid confusion at the counter.",
  },
];

// Practical, Dhaka-specific logistics tips
const logisticsTips = [
  "Factor in Dhaka traffic generously — arriving even 30–45 minutes earlier than your planned buffer is safer than risking a missed slot.",
  "Keep a printed copy of every document, even ones you also have digitally — some centres do not have printing facilities on site.",
  "Carry small denomination cash for any on-the-spot service fees, since not every counter accepts cards.",
  "If travelling from outside Dhaka, plan for the possibility of a same-day return being tight — an overnight stay removes unnecessary stress before an important appointment.",
  "Keep your phone charged and accessible, since some centres send SMS or app updates about counter calls or queue position.",
];

const glossary = [
  { term: "VAC (Visa Application Centre)", def: "A facility, often run by an outsourcing partner like VFS Global, TLScontact, or BLS International, where applicants submit documents and biometrics on behalf of an embassy or consulate." },
  { term: "Biometric enrollment", def: "The in-person process of capturing your fingerprints and a digital photograph, required for most modern visa categories and non-transferable to anyone else." },
  { term: "Premium Lounge", def: "An optional paid service offering a separate slot pool, private waiting area, and faster in-centre process — with no effect on the embassy's actual visa decision." },
  { term: "Token / queue number", def: "A number issued at reception that determines your position in the waiting queue inside the centre." },
  { term: "Reference / tracking number", def: "The number printed on your receipt after your appointment, used to track your application status and later collect your passport." },
  { term: "No-show", def: "Missing a booked appointment without cancelling in advance — recorded on some booking systems and potentially affecting future bookings." },
  { term: "First-Time Right", def: "Submitting a complete, correctly formatted set of documents on your very first appointment attempt, avoiding rejection at the counter and the need to rebook." },
  { term: "Courier passport return", def: "An optional paid service offered at some centres that delivers your passport back to your address once a decision is made, instead of requiring an in-person collection visit." },
  { term: "MRV fee (USA)", def: "The Machine-Readable Visa application fee paid before booking a US visa interview slot directly with the embassy, separate from any VFS-style service fee." },
  { term: "Prime Time / out-of-hours slots", def: "An optional service at some centres allowing appointments outside standard business hours, useful for applicants who cannot easily take time off during the working day." },
  { term: "Emergency / humanitarian slot", def: "A limited, exception-based appointment offered by some embassies for genuine emergencies such as medical travel or bereavement, requested directly rather than through the standard booking calendar." },
];

export default function EmbassyAppointmentTipsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="sr-only" aria-hidden="true">
        <h1>Embassy Appointment Tips 2026 — How to Get Visa Appointment Fast Bangladesh | Eammu Holidays</h1>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="https://eammu.com">Home</a></li>
            <li><a href="https://eammu.com/travel-resources">Travel Resources</a></li>
            <li><a href="https://eammu.com/travel-resources/embassy-appointment-tips">Embassy Appointment Tips</a></li>
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
                  Embassy Appointment Tips
                </li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6">
              📋 2026 Guide · Updated by Eammu Holidays
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              Embassy Appointment Tips — <span className="text-orange-400">2026 Guide</span>
            </h1>
            <p className="text-lg md:text-xl text-green-50/90 max-w-3xl mx-auto leading-relaxed mb-8">
              How to get <strong className="text-white">visa appointment slots fast</strong>, whether Premium
              Lounge is worth it, what to bring on appointment day, how rescheduling works, and what visa
              applicants in Bangladesh get wrong — expert guidance from Eammu Holidays.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801701699743?text=I%20need%20help%20booking%20embassy%20appointment"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                💬 Book My Appointment
              </a>
              <Link
                href="/visa"
                className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base"
              >
                View Visa Services →
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 space-y-16">
          {/* Quick Answer box */}
          <section id="quick-answer" className="bg-white border-2 border-[#005a31]/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-lg font-black text-[#005a31] mb-3">Quick Answer</h2>
            <p className="text-gray-700 leading-relaxed">
              To get an embassy or VFS appointment fast: check the portal right when new slots release (often
              early morning), have your documents and payment ready in advance, book 6–8 weeks ahead during peak
              season, and consider Premium Lounge if it's available for your destination — it opens a separate,
              often less contested slot pool, though it does not affect your visa decision. Never pay a third
              party for a "guaranteed" appointment outside the official portal.
            </p>
          </section>

          {/* TOC */}
          <nav aria-label="Table of contents" className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-sm font-black text-[#005a31] mb-3 uppercase tracking-wide">On This Page</h2>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600 list-decimal list-inside">
              <li><a href="#slot-tips" className="hover:text-[#005a31]">8 Tips to Secure a Slot Faster</a></li>
              <li><a href="#country-guidance" className="hover:text-[#005a31]">Appointment Guidance by Destination</a></li>
              <li><a href="#premium-lounge" className="hover:text-[#005a31]">Is Premium Lounge Worth It?</a></li>
              <li><a href="#biometrics" className="hover:text-[#005a31]">Biometric Appointment Rules</a></li>
              <li><a href="#day-of-checklist" className="hover:text-[#005a31]">What to Bring — Checklist</a></li>
              <li><a href="#day-of-timeline" className="hover:text-[#005a31]">What Happens on Appointment Day</a></li>
              <li><a href="#rescheduling" className="hover:text-[#005a31]">Rescheduling & Cancellation Rules</a></li>
              <li><a href="#missed-appointment" className="hover:text-[#005a31]">If You Miss Your Appointment</a></li>
              <li><a href="#family-group" className="hover:text-[#005a31]">Booking for Families or Groups</a></li>
              <li><a href="#logistics" className="hover:text-[#005a31]">Practical Logistics Tips (Dhaka)</a></li>
              <li><a href="#mistakes" className="hover:text-[#005a31]">Mistakes to Avoid</a></li>
              <li><a href="#fraud-warning" className="hover:text-[#005a31]">Fraud Warning: Fake Appointment Sellers</a></li>
              <li><a href="#glossary" className="hover:text-[#005a31]">Glossary of Appointment Terms</a></li>
              <li><a href="#faq" className="hover:text-[#005a31]">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="slot-tips">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-5 border-l-8 border-orange-500 pl-5">
              8 Tips to Secure an Appointment Slot Faster
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slotTips.map((t) => (
                <article key={t.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-3xl mb-3">{t.icon}</div>
                  <h3 className="font-black text-[#005a31] text-base mb-2">{t.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* NEW: country/region guidance table */}
          <section id="country-guidance">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              Appointment Guidance by Destination
            </h2>
            <p className="text-gray-600 mt-3 mb-6">
              Not every visa appointment works the same way. Here's how the booking process differs across the
              destinations Bangladeshi applicants most often apply to.
            </p>
            <div className="space-y-4">
              {countryGuidance.map((c) => (
                <article
                  key={c.region}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{c.flag}</span>
                    <div>
                      <h3 className="font-black text-gray-900 text-sm">{c.region}</h3>
                      <p className="text-xs text-orange-500 font-semibold">Booked through: {c.operator}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.notes}</p>
                </article>
              ))}
            </div>
          </section>

          {/* NEW: premium lounge explainer */}
          <section id="premium-lounge" className="bg-white rounded-3xl border border-orange-100 shadow-sm p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-4">Is Premium Lounge Worth It?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Premium Lounge is an optional paid add-on offered at many VFS Global centres. Here's exactly what
              you're paying for — and, just as importantly, what it doesn't change:
            </p>
            <ul className="space-y-2 mb-4">
              {premiumLoungeFacts.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-orange-500 font-black">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              In practice, it's most worth considering during peak season (April–August), when standard slots can
              be booked out for weeks — a Premium Lounge slot pool that's open the same week is often worth the
              extra fee purely for the time saved. It's not necessary for most applicants during quieter months.
            </p>
          </section>

          {/* NEW: biometric rules */}
          <section id="biometrics">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              Biometric Appointment Rules
            </h2>
            <p className="text-gray-600 mt-3 mb-6">
              Nearly all Schengen, UK, and Canadian visa categories require biometric enrollment as part of your
              VAC visit. A few rules catch applicants out:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {biometricRules.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                  <span className="text-green-600 font-black">✓</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="day-of-checklist">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-5 border-l-8 border-orange-500 pl-5">
              Appointment Day Checklist — What to Bring
            </h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {dayOfChecklist.map((item, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <span className="text-orange-500 font-black">✓</span>
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* NEW: day-of timeline */}
          <section id="day-of-timeline">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              What Happens on Appointment Day, Step by Step
            </h2>
            <p className="text-gray-600 mt-3 mb-6">
              Knowing the flow in advance helps you feel less rushed and avoid missing a step. Total time at the
              centre is usually 1–3 hours, less with Premium Lounge.
            </p>
            <div className="space-y-3">
              {dayOfTimeline.map((step, i) => (
                <div key={step.time} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-[#005a31] text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-black text-gray-900 text-sm mb-1">{step.time}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* NEW: rescheduling rules */}
          <section id="rescheduling">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              Rescheduling & Cancellation Rules
            </h2>
            <ul className="space-y-3 mt-6">
              {reschedulingRules.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                  <span className="text-blue-600 font-black">→</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* NEW: family/group appointments */}
          <section id="family-group">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              Booking for Families or Groups
            </h2>
            <p className="text-gray-600 mt-3 mb-6">
              Applying together as a family or group adds a few extra planning steps worth handling in advance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {familyGroupTips.map((t) => (
                <article key={t.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="font-black text-[#005a31] text-base mb-2">{t.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* NEW: Dhaka-specific logistics tips */}
          <section id="logistics">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              Practical Logistics Tips for Applicants in Dhaka
            </h2>
            <ul className="space-y-3 mt-6">
              {logisticsTips.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                  <span className="text-orange-500 font-black">→</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* NEW: what to do if you miss your appointment */}
          <section id="missed-appointment" className="bg-white rounded-3xl border border-blue-100 shadow-sm p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-4">
              What to Do If You Miss Your Appointment
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                If an emergency genuinely prevents you from attending, don't simply stay home and hope it goes
                unnoticed. Log into your portal account as soon as possible to see whether the system still allows
                a late cancellation, and check the centre's contact details for a same-day emergency line.
              </p>
              <p>
                In most cases, a missed appointment simply means booking a new one from scratch — through the same
                portal, using your existing application reference where the system allows it. During peak season,
                the next available date may be weeks later, which is exactly why the rescheduling rules above
                matter: a proactive cancellation almost always leaves you in a better position than a no-show.
              </p>
            </div>
          </section>

          <section id="mistakes">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              6 Mistakes to Avoid on Appointment Day
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

          {/* NEW: fraud warning */}
          <section id="fraud-warning" className="bg-red-50 border-2 border-red-100 rounded-3xl p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-red-600 mb-4">
              ⚠️ Fraud Warning: Fake "Guaranteed Appointment" Sellers
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                As genuine appointment slots become scarce during peak season, individuals and unofficial "agents"
                sometimes offer to sell guaranteed appointments or promise faster visa approvals for an extra
                payment outside the official portal. This is never legitimate — appointment slots and visa
                decisions are entirely controlled by the embassy, consulate, or VFS Global's official system, not
                by any private individual.
              </p>
              <p>
                Only ever book through the official VFS Global, TLScontact, BLS International, or embassy website,
                or through a licensed, IATA-accredited agency such as Eammu Holidays. If a slot or approval sounds
                too easy or too certain for the money, treat it as a red flag and verify independently before
                paying anyone.
              </p>
            </div>
          </section>

          {/* NEW: glossary */}
          <section id="glossary">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#005a31] mb-3 border-l-8 border-orange-500 pl-5">
              Glossary of Appointment Terms
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
              Related <span className="text-orange-500">Appointment & Visa Guides</span>
            </h2>
            <nav className="flex flex-wrap justify-center gap-2.5" aria-label="Related resources">
              {[
                { label: "Visa Appointment Booking Guide", href: "/travel-resources/visa-appointment-booking-guide" },
                { label: "VFS Global Guide Bangladesh", href: "/travel-resources/vfs-global-guide" },
                { label: "How to Track Visa Application", href: "/travel-resources/how-to-track-visa-application" },
                { label: "Visa Interview Tips", href: "/travel-resources/visa-interview-tips" },
                { label: "Best Time to Apply for Schengen Visa", href: "/best-time-to-apply-schengen-visa" },
                { label: "Bank Statement for Visa", href: "/bank-statement-for-visa-how-to-prepare" },
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
            <h2 className="text-2xl md:text-3xl font-black text-orange-400 mb-4">Can't Get an Appointment Slot?</h2>
            <p className="text-lg max-w-2xl mx-auto text-green-50/90 leading-relaxed mb-8">
              Eammu Holidays monitors VFS portals daily and books slots the moment they open. We handle the entire
              appointment process for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801701699743?text=I%20can't%20get%20a%20visa%20appointment%20slot"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                rel="noopener noreferrer"
              >
                💬 Get Appointment Help (WhatsApp)
              </a>
              <Link
                href="/visa"
                className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base"
              >
                View All Visa Services →
              </Link>
            </div>
          </section>
        </div>
      </main>
      <HomeSeoLinks />
    </>
  );
}