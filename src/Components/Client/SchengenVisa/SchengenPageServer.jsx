// app/schengen-visa/SchengenPageServer.jsx
// SERVER COMPONENT — no 'use client'. Renders JSON-LD + all static SEO sections.
// Import this inside page.jsx (which handles metadata export).

import Link from 'next/link';

import FlagImg from './FlagImg';
import SchengenPageClient from './SchengenPageClient';

/* ─── JSON-LD ───────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.visaexpresshub.ae/schengen-visa#service',
      name: 'Schengen Visa Application Service — UAE',
      description:
        'Professional Schengen visa application assistance for UAE residents. We handle document preparation, appointment booking, cover letters, SOP, and full embassy submission support from Dubai and Abu Dhabi.',
      provider: {
        '@type': 'Organization',
        name: 'Eammu Holidays',
        url: 'https://www.visaexpresshub.ae',
        telephone: '+971-4-000-0000',
        logo: 'https://www.visaexpresshub.ae/logo.png',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Dubai',
          addressLocality: 'Dubai',
          addressCountry: 'AE',
        },
        sameAs: ['https://www.instagram.com/visaexpresshub', 'https://www.facebook.com/visaexpresshub'],
      },
      areaServed: ['AE', 'SA', 'QA', 'KW', 'BH', 'OM'],
      serviceType: 'Visa Consulting',
      offers: [
        {
          '@type': 'Offer',
          name: 'Schengen Visa Government Fee — Adults',
          price: '90',
          priceCurrency: 'EUR',
          description: 'Official Schengen visa government fee for adults aged 12 and above (updated June 2024)',
        },
        {
          '@type': 'Offer',
          name: 'Schengen Visa Government Fee — Children 6–12',
          price: '45',
          priceCurrency: 'EUR',
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.visaexpresshub.ae/schengen-visa',
      url: 'https://www.visaexpresshub.ae/schengen-visa',
      name: 'Schengen Visa from UAE 2026 — Complete Guide, Fees & Requirements',
      description:
        'Complete 2026 guide to applying for a Schengen visa from the UAE. Covers official fees (€90), processing time (15 days), 29-country coverage, required documents, consulate selection rules, and step-by-step application process from Dubai.',
      dateModified: '2026-05-01',
      inLanguage: 'en',
      isPartOf: { '@id': 'https://www.visaexpresshub.ae' },
      about: {
        '@type': 'Thing',
        name: 'Schengen Visa',
        description: 'A short-stay visa valid for up to 90 days in any 180-day period across all 29 Schengen Area member states.',
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.speakable-intro'],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.visaexpresshub.ae' },
        { '@type': 'ListItem', position: 2, name: 'Visa Services', item: 'https://www.visaexpresshub.ae/visa-services' },
        { '@type': 'ListItem', position: 3, name: 'Visa Guides', item: 'https://www.visaexpresshub.ae/visa' },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Schengen Visa from UAE 2026',
          item: 'https://www.visaexpresshub.ae/schengen-visa',
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply for a Schengen Visa from the UAE',
      description: 'Step-by-step process for UAE residents applying for a Schengen visa from Dubai or Abu Dhabi.',
      totalTime: 'P30D',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'EUR', value: '90' },
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Free Consultation', text: 'Speak to a Schengen visa specialist to determine the right visa type and consulate.' },
        { '@type': 'HowToStep', position: 2, name: 'Document Preparation', text: 'Prepare application form, cover letter, Statement of Purpose, and full document package.' },
        { '@type': 'HowToStep', position: 3, name: 'Appointment Booking', text: 'Book a consulate or VFS Global appointment — ideally 4–6 weeks before travel.' },
        { '@type': 'HowToStep', position: 4, name: 'Application Submission', text: 'Submit documents with biometrics at the designated visa application centre.' },
        { '@type': 'HowToStep', position: 5, name: 'Application Tracking', text: 'Monitor status and respond promptly to any additional document requests.' },
        { '@type': 'HowToStep', position: 6, name: 'Visa Collection', text: 'Collect approved visa and confirm entry conditions, validity, and 90/180-day rule.' },
      ],
    },
    {
      '@type': 'Table',
      name: 'Schengen Visa Fee Structure 2026',
      about: 'Official Schengen visa fees applicable from June 2024 onwards',
    },
  ],
};

/* ─── STATIC DATA ───────────────────────────────────────────────── */
const VISA_TYPES = [
  { label: 'Business Visa', href: '/visa' },
  { label: 'Work Visa', href: '/visa' },
  { label: 'Student Visa', href: '/visa/study-abroad/student-visa' },
  { label: 'Tourist Visa', href: '/visa' },
  { label: 'Transit Visa', href: '/visa' },
  { label: 'Schengen Visa', href: '/schengen-visa', active: true },
];

export const SCHENGEN_COUNTRY_NAMES = [
  { name: 'Austria', slug: 'austria', code: 'at' },
  { name: 'Belgium', slug: 'belgium', code: 'be' },
  { name: 'Bulgaria', slug: 'bulgaria', code: 'bg' },
  { name: 'Croatia', slug: 'croatia', code: 'hr' },
  { name: 'Czech Republic', slug: 'czechia', code: 'cz' },
  { name: 'Denmark', slug: 'denmark', code: 'dk' },
  { name: 'Estonia', slug: 'estonia', code: 'ee' },
  { name: 'Finland', slug: 'finland', code: 'fi' },
  { name: 'France', slug: 'france', code: 'fr' },
  { name: 'Germany', slug: 'germany', code: 'de' },
  { name: 'Greece', slug: 'greece', code: 'gr' },
  { name: 'Hungary', slug: 'hungary', code: 'hu' },
  { name: 'Iceland', slug: 'iceland', code: 'is' },
  { name: 'Italy', slug: 'italy', code: 'it' },
  { name: 'Latvia', slug: 'latvia', code: 'lv' },
  { name: 'Liechtenstein', slug: 'liechtenstein', code: 'li' },
  { name: 'Lithuania', slug: 'lithuania', code: 'lt' },
  { name: 'Luxembourg', slug: 'luxembourg', code: 'lu' },
  { name: 'Malta', slug: 'malta', code: 'mt' },
  { name: 'Netherlands', slug: 'netherlands', code: 'nl' },
  { name: 'Norway', slug: 'norway', code: 'no' },
  { name: 'Poland', slug: 'poland', code: 'pl' },
  { name: 'Portugal', slug: 'portugal', code: 'pt' },
  { name: 'Romania', slug: 'romania', code: 'ro' },
  { name: 'Slovakia', slug: 'slovakia', code: 'sk' },
  { name: 'Slovenia', slug: 'slovenia', code: 'si' },
  { name: 'Spain', slug: 'spain', code: 'es' },
  { name: 'Sweden', slug: 'sweden', code: 'se' },
  { name: 'Switzerland', slug: 'switzerland', code: 'ch' },
];

const FEE_TABLE = [
  { category: 'Adults (aged 12 and above)', fee: '€90', note: 'Standard rate — all nationalities', highlight: true },
  { category: 'Children aged 6–12 years', fee: '€45', note: '50% reduction on standard fee' },
  { category: 'Children under 6 years', fee: 'Free', note: 'Fully exempt from visa fee' },
  { category: 'Armenia, Azerbaijan, Belarus', fee: '€35', note: 'Bilateral agreement rate' },
  { category: 'Cabo Verde nationals', fee: '€67.50', note: 'Bilateral agreement rate (75% of €90)' },
  { category: 'VFS Global service fee (UAE)', fee: 'AED 60–120', note: 'Varies by consulate and service type' },
  { category: 'Optional premium lounge service', fee: 'AED 150–300', note: 'At select VFS centres in Dubai/Abu Dhabi' },
];

const DOCUMENTS = [
  { icon: '🛂', title: 'Valid Passport', detail: 'Issued within the last 10 years. Must remain valid for at least 3 months beyond your intended departure from Schengen Area. Minimum 2 blank pages required for visa sticker.', mandatory: true },
  { icon: '📋', title: 'Completed Visa Application Form', detail: 'Signed and dated. Each member state has its own form — we prepare and review this for you to eliminate errors that commonly lead to rejection.', mandatory: true },
  { icon: '📸', title: 'Passport-Size Photographs', detail: '2 recent ICAO-compliant photos. White background, matte finish, 35×45mm. Taken within the last 6 months. No glasses. Digital submissions accepted by some consulates.', mandatory: true },
  { icon: '🛡️', title: 'Travel Medical Insurance', detail: 'Minimum €30,000 coverage for emergency medical treatment, hospitalisation, and repatriation to home country. Must cover all Schengen states you plan to visit, for the entire duration of your stay.', mandatory: true },
  { icon: '✈️', title: 'Round-Trip Flight Itinerary', detail: 'A confirmed reservation showing entry and exit dates from the Schengen Area. A ticketed booking is not always required — most consulates accept a confirmed (not necessarily paid) itinerary.', mandatory: true },
  { icon: '🏨', title: 'Accommodation Proof', detail: 'Hotel booking confirmations, Airbnb reservations, or an official invitation/host letter for every night of your stay. Must cover the complete travel period.', mandatory: true },
  { icon: '🏦', title: 'Bank Statements (3–6 Months)', detail: 'Must show consistent financial activity and sufficient funds — typically a minimum of €100 per day of stay is recommended. Avoid large unexplained lump-sum deposits immediately before applying.', mandatory: true },
  { icon: '💼', title: 'Employment Letter & Salary Slips', detail: 'Letter on company letterhead confirming your position, salary, start date, and approved leave dates. Accompanied by 3 months of recent payslips. Essential for employed UAE residents.', mandatory: true },
  { icon: '💳', title: 'Visa Fee Payment', detail: '€90 for adults, €45 for children aged 6–12, free for under 6. Paid at the visa application centre at the time of submission. Some consulates accept card; others require cash in AED equivalent.', mandatory: true },
  { icon: '🖐️', title: 'Biometric Data (Fingerprints)', detail: 'Fingerprints are collected at the VFS Global centre or consulate during submission. All applicants aged 12 and above must attend in person. Biometrics stored for up to 59 months and may be reused.', mandatory: true },
  { icon: '📄', title: 'Cover Letter / Statement of Purpose', detail: 'A signed personal letter explaining your travel purpose, itinerary, and intent to return to the UAE. Critical for first-time applicants or those with limited travel history.', mandatory: true },
  { icon: '🏢', title: 'Trade Licence / Company Documents', detail: 'For self-employed applicants and business owners: valid UAE trade licence, company bank statements, and a letter from your own company confirming travel purpose.', mandatory: false },
  { icon: '🎓', title: 'Student Enrollment Letter', detail: 'A letter from your UAE educational institution confirming enrollment status and approved leave. Required for full-time students applying from the UAE.', mandatory: false },
  { icon: '👨‍👩‍👧', title: 'Parental Consent Letter (Minors)', detail: 'If a child is travelling with only one parent or with a guardian, a notarised consent letter from the absent parent(s) is required by most Schengen consulates.', mandatory: false },
  { icon: '🏠', title: 'Proof of UAE Residency', detail: 'A copy of your valid UAE residence visa (for non-UAE-national residents). Required to confirm legal residence in the country where you are applying.', mandatory: true },
];

const STEPS = [
  { num: '01', title: 'Free Expert Consultation', desc: 'Speak to our Schengen visa specialist. We assess your travel plan, passport nationality, purpose of travel, and financial profile — and recommend the right visa type, consulate, and timing for your application.' },
  { num: '02', title: 'Document Preparation & Review', desc: 'We prepare your application form, cover letter, Statement of Purpose, and full document checklist tailored to your chosen consulate. We review every document to catch errors, inconsistencies, and missing items before submission.' },
  { num: '03', title: 'Consulate Appointment Booking', desc: 'We book your consulate or VFS Global appointment on your behalf. Slots — especially for France, Germany, and Italy — fill up weeks in advance during peak season. We aim to book as early as 6 months before your travel date.' },
  { num: '04', title: 'Application Submission at VFS', desc: 'Submit your complete document package and provide biometrics at the designated visa application centre. Our team gives you a final checklist walkthrough before your appointment so you arrive fully prepared.' },
  { num: '05', title: 'Real-Time Application Tracking', desc: 'We monitor your application status through the consulate tracking portal and VFS system. If the consulate requests additional documents, we respond quickly with the right supporting evidence to avoid delays or rejection.' },
  { num: '06', title: 'Visa Collection & Travel Briefing', desc: 'Once approved, collect your passport with the Schengen visa sticker. We debrief you on entry conditions, validity dates, number of permitted entries, the 90/180-day rule, and which countries you can visit — so you travel with full confidence.' },
];

const VISA_CATEGORIES = [
  {
    icon: '✈️',
    title: 'Single-Entry Visa (Type C)',
    desc: 'Authorises one entry into the Schengen Area. Once you exit — even if unused days remain — the visa is void and cannot be used again. Ideal for first-time visitors planning a single holiday or business trip.',
    badge: 'Tourist / Short Stay',
    color: 'bg-amber-100 text-amber-800',
    who: 'Best for: first-time applicants, single destination trips, short holidays',
  },
  {
    icon: '🔄',
    title: 'Multiple-Entry Visa (MEV)',
    desc: 'Permits multiple entries within the visa validity period — typically issued for 1, 2, or 5 years for proven frequent travellers. Each stay must not exceed 90 days in any 180-day period. Significantly reduces paperwork for repeat visits.',
    badge: 'Business / Frequent Travel',
    color: 'bg-slate-100 text-slate-700',
    who: 'Best for: business travellers, returning visitors, UAE residents with strong travel history',
  },
  {
    icon: '🛫',
    title: 'Airport Transit Visa (Type A)',
    desc: 'Required for nationals of certain countries to pass through the international transit zone of a Schengen airport — without formally entering the country. Does not permit entry into the Schengen Area itself.',
    badge: 'Transit Only',
    color: 'bg-slate-100 text-slate-600',
    who: 'Best for: passengers connecting through major Schengen hubs (Frankfurt, Paris CDG, Amsterdam)',
  },
  {
    icon: '🏥',
    title: 'Medical / Humanitarian Visa',
    desc: 'Issued for applicants travelling to a Schengen country for medical treatment. Requires a letter from the treating hospital or clinic in the destination country. Processing is often expedited.',
    badge: 'Special Purpose',
    color: 'bg-green-100 text-green-800',
    who: 'Best for: patients seeking specialist medical treatment in Europe',
  },
];

const TOP_ROUTES = [
  { name: 'France', slug: 'france', code: 'fr', consulate: 'TLScontact Dubai', time: '10–15 days', popular: 'Paris, Nice, Lyon' },
  { name: 'Germany', slug: 'germany', code: 'de', consulate: 'German Consulate Dubai / VFS', time: '10–15 days', popular: 'Berlin, Munich, Frankfurt' },
  { name: 'Italy', slug: 'italy', code: 'it', consulate: 'Italian Consulate Dubai / VFS', time: '10–15 days', popular: 'Rome, Milan, Florence' },
  { name: 'Spain', slug: 'spain', code: 'es', consulate: 'Spanish Consulate Dubai / BLS', time: '10–15 days', popular: 'Madrid, Barcelona, Seville' },
  { name: 'Greece', slug: 'greece', code: 'gr', consulate: 'Greek Consulate Dubai / VFS', time: '10–15 days', popular: 'Athens, Santorini, Mykonos' },
  { name: 'Netherlands', slug: 'netherlands', code: 'nl', consulate: 'Dutch Embassy Abu Dhabi', time: '10–15 days', popular: 'Amsterdam, Rotterdam, The Hague' },
  { name: 'Portugal', slug: 'portugal', code: 'pt', consulate: 'Portuguese Consulate / VFS', time: '10–15 days', popular: 'Lisbon, Porto, Algarve' },
  { name: 'Switzerland', slug: 'switzerland', code: 'ch', consulate: 'Swiss Embassy Abu Dhabi', time: '10–15 days', popular: 'Zurich, Geneva, Interlaken' },
];

const INTERNAL_LINKS = [
  { href: '/visa', label: 'Tourist Visa Guide', icon: '🌍' },
  { href: '/visa', label: 'Work Visa Guide', icon: '💼' },
  { href: '/visa', label: 'Business Visa Guide', icon: '🤝' },
  { href: '/visa/study-abroad/student-visa', label: 'Student Visa Guide', icon: '🎓' },
  { href: '/visa', label: 'Transit Visa Guide', icon: '🛫' },
  { href: '/visa-resources/visa-checklist-generator', label: 'Visa Checklist Generator', icon: '📋' },
  { href: '/visa-resources/visa-document-generator', label: 'SOP Template', icon: '📝' },
  { href: '/visa-resources/visa-document-generator', label: 'Cover Letter Template', icon: '📄' },
  { href: '/visa-resources/visa-document-generator', label: 'NOC Letter Template', icon: '⚖️' },
  { href: '/visa-resources/visa-document-generator', label: 'Bank Statement Template', icon: '🏦' },
  { href: '/visa-processing-time-tracker', label: 'Processing Time Tracker', icon: '⏱️' },
  { href: '/visa-resources', label: 'Embassy Directory', icon: '🏛️' },
];

/* ─── STATIC SECTIONS (rendered on server) ──────────────────────── */

function WhatIsSchengen() {
  return (
    <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
      <h2 className="text-xl font-bold mb-4">What is a Schengen Visa? — Complete Overview for UAE Residents</h2>
      <p className="text-slate-600 leading-relaxed text-sm mb-4 speakable-intro">
        A <strong>Schengen visa</strong> is a short-stay entry permit that grants non-EU nationals the right to travel freely across all{' '}
        <strong>29 Schengen member states</strong> for up to <strong>90 days in any 180-day rolling period</strong> — using a single visa. Issued by one Schengen country on behalf of all member states, it eliminates the need for separate visas to visit France, Germany, Italy, Spain, Greece, or any other participating nation on the same trip.
      </p>
      <p className="text-slate-600 leading-relaxed text-sm mb-4">
        For residents of the UAE — whether holding a UAE passport or an expatriate residence visa — the Schengen visa is the primary route to Europe for tourism, family visits, business conferences, medical travel, and short-term study programmes. UAE nationals enjoy bilateral visa-free access to many Schengen countries, but must still obtain a visa for certain destinations and purposes. All other UAE residents require a full Schengen visa before departure.
      </p>
      <p className="text-slate-600 leading-relaxed text-sm mb-5">
        The Schengen Area is governed by the 1985 Schengen Agreement and its implementing conventions — now fully integrated into EU law. The official fee structure was revised in June 2024, raising the adult fee from €80 to €90. The 29-country area as of 2026 includes all original Schengen signatories plus <strong>Bulgaria and Romania</strong>, which joined the air and sea Schengen borders in March 2024, and are expected to achieve full land-border integration imminently.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Official Visa Fee', value: '€90', sub: 'Updated June 2024' },
          { label: 'Processing Time', value: '15 days', sub: 'Standard applications' },
          { label: 'Maximum Stay', value: '90 days', sub: 'Per 180-day period' },
          { label: 'Countries Covered', value: '29', sub: 'As of March 2024' },
        ].map((item) => (
          <div key={item.label} className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100">
            <p className="text-2xl font-extrabold text-slate-900 mb-0.5">{item.value}</p>
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">{item.label}</p>
            <p className="text-[9px] text-slate-400">{item.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
        <p className="text-sm font-bold text-amber-800 mb-2">🇪🇺 The Schengen 90/180-Day Rule — How It Works</p>
        <p className="text-xs text-amber-700 leading-relaxed mb-2">
          Your 90-day allowance is counted across <em>all 29 Schengen countries combined</em> — not per country, and not per visa. Every day you spend in France, Germany, Italy, or any other Schengen state counts toward the same shared 90-day total within a rolling 180-day window.
        </p>
        <p className="text-xs text-amber-700 leading-relaxed">
          The 180-day window is rolling, not a fixed calendar period. Before each trip, count back 180 days from your intended entry date — any days spent in Schengen during that period reduce your remaining allowance. Overstaying the 90-day limit can result in a ban, fine, and a negative visa history that affects all future Schengen applications.
        </p>
        <a
          href="https://ec.europa.eu/assets/home/visa-calculator/calculator.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-xs font-bold text-amber-800 underline underline-offset-4"
        >
          Use the official EU short-stay calculator →
        </a>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
        <h3 className="text-sm font-bold text-slate-900 mb-3">What Changed in 2024–2026: Key Schengen Updates</h3>
        <div className="space-y-2">
          {[
            { year: 'Jun 2024', update: 'Official Schengen visa fee increased from €80 to €90 for adults, and from €40 to €45 for children aged 6–12.' },
            { year: 'Mar 2024', update: 'Bulgaria and Romania joined the Schengen Area for air and sea travel. Their Schengen sticker is now valid at their airports and ports.' },
            { year: '2025', update: 'EU Entry/Exit System (EES) — a biometric border registration system — began phased rollout at select Schengen borders. Replaces passport stamping for non-EU nationals.' },
            { year: '2026', update: 'ETIAS (European Travel Information and Authorisation System) is planned to become mandatory for visa-exempt nationalities, including UAE passport holders travelling to Schengen countries.' },
          ].map((item) => (
            <div key={item.year} className="flex gap-3 text-xs">
              <span className="shrink-0 font-black text-amber-600 w-14">{item.year}</span>
              <span className="text-slate-500 leading-relaxed">{item.update}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisaTypes() {
  return (
    <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
      <h2 className="text-xl font-bold mb-2">Types of Schengen Visa — Which One Do You Need?</h2>
      <p className="text-sm text-slate-500 mb-6">
        The Schengen visa system has several sub-categories. Selecting the wrong type at the time of application is one of the most common — and costly — mistakes UAE applicants make. Our experts advise you on the exact category before submission.
      </p>
      <div className="space-y-4">
        {VISA_CATEGORIES.map((v) => (
          <div key={v.title} className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-100 rounded-xl hover:border-amber-200 transition-colors">
            <span className="text-2xl shrink-0 mt-0.5">{v.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h3 className="font-bold text-sm text-slate-900">{v.title}</h3>
                <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full shrink-0 ${v.color}`}>{v.badge}</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-2">{v.desc}</p>
              <p className="text-[10px] font-bold text-amber-600">{v.who}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 bg-slate-50 border border-slate-100 rounded-xl p-4">
        <p className="text-xs text-slate-500">
          Not sure which visa category applies to your trip?{' '}
          <Link href="/contact" className="text-amber-600 font-bold hover:underline">
            Contact our visa team for a free assessment →
          </Link>
        </p>
      </div>
    </section>
  );
}

function Documents() {
  const mandatory = DOCUMENTS.filter((d) => d.mandatory);
  const optional = DOCUMENTS.filter((d) => !d.mandatory);
  return (
    <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
      <h2 className="text-xl font-bold mb-2">Schengen Visa Documents Required from UAE — 2026 Checklist</h2>
      <p className="text-sm text-slate-500 mb-2">
        The following documents are required for UAE residents applying for a Schengen visa from Dubai or Abu Dhabi. Specific consulates may request additional items. Generate a personalised checklist using our{' '}
        <Link href="/visa-resources/visa-checklist-generator" className="text-amber-600 font-bold hover:underline">
          free Visa Checklist Generator →
        </Link>
      </p>
      <p className="text-xs text-slate-400 mb-6">
        Note: Document requirements vary slightly by destination country and consulate. France, Germany, and Italy each have minor additional requirements. Our team prepares consulate-specific packages.
      </p>

      <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Mandatory Documents</h3>
      <div className="space-y-3 mb-6">
        {mandatory.map((doc) => (
          <div key={doc.title} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-amber-200 transition-colors">
            <span className="text-xl shrink-0 mt-0.5">{doc.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h4 className="font-bold text-sm text-slate-900">{doc.title}</h4>
                <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full shrink-0 bg-amber-100 text-amber-700">Required</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{doc.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Situation-Specific Documents</h3>
      <div className="space-y-3 mb-6">
        {optional.map((doc) => (
          <div key={doc.title} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-amber-200 transition-colors">
            <span className="text-xl shrink-0 mt-0.5">{doc.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h4 className="font-bold text-sm text-slate-900">{doc.title}</h4>
                <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full shrink-0 bg-slate-200 text-slate-500">If Applicable</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{doc.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link
          href="/visa-resources/visa-checklist-generator"
          className="flex items-center justify-center gap-2 bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-amber-500 transition-all"
        >
          📋 Download Document Checklist
        </Link>
        <Link
          href="/visa-resources/visa-document-generator"
          className="flex items-center justify-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all border border-slate-200"
        >
          📝 Generate SOP & Cover Letter
        </Link>
      </div>
    </section>
  );
}

function FeeSection() {
  return (
    <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
      <h2 className="text-xl font-bold mb-2">Schengen Visa Fee Structure 2026 — UAE Applicants</h2>
      <p className="text-sm text-slate-500 mb-1">
        Fees were revised upward in June 2024 under EU Regulation 2024/1358. The €90 fee applies to all standard adult applicants regardless of nationality (subject to bilateral agreements).{' '}
        <a
          href="https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/visa-policy_en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-600 font-semibold hover:underline"
        >
          Official EU visa policy ↗
        </a>
      </p>
      <p className="text-xs text-slate-400 mb-6">
        Visa fees are non-refundable even if the application is refused. Fees must be paid at the time of submission at the visa application centre in UAE dirham equivalent at the current exchange rate.
      </p>

      <div className="overflow-hidden rounded-xl border border-slate-200 mb-6">
        <table className="w-full text-sm" role="table">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="text-left px-5 py-4 font-bold text-xs uppercase tracking-widest">Applicant Category</th>
              <th className="text-right px-5 py-4 font-bold text-xs uppercase tracking-widest">Fee</th>
              <th className="text-right px-5 py-4 font-bold text-xs uppercase tracking-widest hidden md:table-cell">Note</th>
            </tr>
          </thead>
          <tbody>
            {FEE_TABLE.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-slate-100 last:border-0 hover:bg-amber-50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
              >
                <td className={`px-5 py-4 font-semibold text-slate-800 text-sm ${row.highlight ? 'font-bold' : ''}`}>{row.category}</td>
                <td className={`px-5 py-4 text-right font-extrabold text-base ${row.highlight ? 'text-amber-600 text-lg' : 'text-slate-700'}`}>{row.fee}</td>
                <td className="px-5 py-4 text-right text-slate-400 text-xs hidden md:table-cell">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="font-bold text-slate-900 text-base mb-3">Processing Times — Schengen from UAE</h3>
      <div className="space-y-3 mb-5">
        {[
          {
            time: '15 calendar days',
            label: 'Standard processing',
            desc: 'The consulate must decide within 15 calendar days of receiving a complete application. The vast majority of straightforward applications are processed within this window.',
            color: 'border-green-400 bg-green-50',
          },
          {
            time: '30 calendar days',
            label: 'Extended — peak periods',
            desc: 'During summer (June–August) and Christmas holiday periods, processing at high-demand consulates (France, Italy, Spain) can extend to 30 days. Apply 6–8 weeks in advance during these periods.',
            color: 'border-amber-400 bg-amber-50',
          },
          {
            time: 'Up to 45 calendar days',
            label: 'Complex / exceptional cases',
            desc: 'Permitted in exceptional circumstances where additional consultation, documentation review, or security checks are required. The consulate must notify the applicant if this extension is invoked.',
            color: 'border-orange-400 bg-orange-50',
          },
          {
            time: 'Accelerated (no fixed limit)',
            label: 'EU/EEA family members',
            desc: 'Spouses, children, and dependent relatives of EU/EEA citizens are entitled to a free, expedited application procedure under EU Directive 2004/38. Supporting documents required.',
            color: 'border-slate-300 bg-slate-50',
          },
        ].map((p) => (
          <div key={p.label} className={`border-l-4 px-5 py-4 rounded-r-xl ${p.color}`}>
            <div className="flex items-baseline gap-3 mb-1 flex-wrap">
              <span className="font-extrabold text-lg text-slate-900">{p.time}</span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">{p.label}</span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="text-sm font-bold text-amber-900">
          ⚡ Apply at least 4–6 weeks before your travel date. During summer and December, book an appointment 8–10 weeks in advance.
        </p>
        <Link href="/visa-processing-time-tracker" className="inline-block mt-2 text-xs font-bold text-amber-700 hover:underline underline-offset-4">
          ⏱ Check live processing times by country →
        </Link>
      </div>
    </section>
  );
}

function ConsulateSection() {
  return (
    <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
      <h2 className="text-xl font-bold mb-3">Which Schengen Consulate Should UAE Residents Apply To?</h2>
      <p className="text-sm text-slate-500 mb-6">
        One of the most common sources of confusion for UAE applicants is selecting the correct consulate. Applying to the wrong consulate results in automatic rejection. The rules are governed by the EU Visa Code (Regulation EC 810/2009).
      </p>
      <div className="space-y-3 mb-7">
        {[
          { icon: '🎯', heading: 'Single destination trip', body: 'Apply at the consulate of the one Schengen country you intend to visit — regardless of whether you transit through another Schengen country en route.' },
          { icon: '⏱️', heading: 'Multiple countries — unequal stays', body: 'Apply at the consulate of the country where you will spend the most nights in total across your trip. If you spend 7 nights in Italy and 3 in France, apply at the Italian consulate.' },
          { icon: '✈️', heading: 'Multiple countries — equal stays', body: 'If your nights are evenly split across countries, apply at the consulate of the first Schengen country you will enter (your port of entry). Keep your booking itinerary consistent with this.' },
          { icon: '🏢', heading: 'No overnight stay in main country', body: 'If you are travelling on a cruise or short trip with no dominant overnight stay, apply at the consulate of your primary purpose destination — the country where the main purpose of your trip takes place.' },
          { icon: '🏠', heading: 'Jurisdiction — UAE residents', body: 'All Schengen consulates in the UAE process applications only from individuals who are legally resident in the UAE (with a valid UAE residence visa or UAE national passport). You must apply in the country where you legally reside.' },
        ].map((item) => (
          <div key={item.heading} className="flex gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-amber-200 transition-colors">
            <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
            <div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">{item.heading}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="font-bold text-sm text-slate-900 mb-3">Schengen Consulates & Application Centres in UAE</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 mb-5">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="text-left px-4 py-3 font-bold uppercase tracking-widest">Country</th>
              <th className="text-left px-4 py-3 font-bold uppercase tracking-widest">Centre</th>
              <th className="text-left px-4 py-3 font-bold uppercase tracking-widest">Location</th>
              <th className="text-left px-4 py-3 font-bold uppercase tracking-widest hidden sm:table-cell">Processing</th>
            </tr>
          </thead>
          <tbody>
            {[
              { country: 'France', centre: 'TLScontact', location: 'Dubai (Business Bay)', processing: '10–15 days' },
              { country: 'Germany', centre: 'VFS Global', location: 'Dubai & Abu Dhabi', processing: '10–15 days' },
              { country: 'Italy', centre: 'VFS Global', location: 'Dubai & Abu Dhabi', processing: '10–15 days' },
              { country: 'Spain', centre: 'BLS International', location: 'Dubai (Deira)', processing: '10–15 days' },
              { country: 'Greece', centre: 'VFS Global', location: 'Dubai', processing: '10–15 days' },
              { country: 'Netherlands', centre: 'Dutch Embassy', location: 'Abu Dhabi (direct)', processing: '10–15 days' },
              { country: 'Switzerland', centre: 'Swiss Embassy', location: 'Abu Dhabi (direct)', processing: '10–15 days' },
              { country: 'Portugal', centre: 'VFS Global', location: 'Dubai', processing: '10–15 days' },
              { country: 'Austria', centre: 'Austrian Embassy', location: 'Abu Dhabi / VFS Dubai', processing: '10–15 days' },
              { country: 'Belgium', centre: 'VFS Global', location: 'Dubai', processing: '10–15 days' },
            ].map((r, i) => (
              <tr key={r.country} className={`border-b border-slate-100 last:border-0 hover:bg-amber-50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                <td className="px-4 py-3 font-bold text-slate-800">{r.country}</td>
                <td className="px-4 py-3 text-slate-600">{r.centre}</td>
                <td className="px-4 py-3 text-slate-500">{r.location}</td>
                <td className="px-4 py-3 text-amber-600 font-bold hidden sm:table-cell">{r.processing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-400">
        ⚠️ Consulate locations and third-party service providers change periodically. Always verify the current application centre at the official consulate website before booking an appointment.
      </p>
    </section>
  );
}

function ApplicationSteps() {
  return (
    <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
      <h2 className="text-xl font-bold mb-2">How to Apply for a Schengen Visa from UAE — Step-by-Step</h2>
      <p className="text-sm text-slate-500 mb-6">
        Our Dubai-based team manages the full application process on your behalf — from initial consultation to visa collection. Here's how it works, and what you need at every stage.
      </p>
      <div className="space-y-5">
        {STEPS.map((step) => (
          <div key={step.num} className="flex gap-5">
            <div className="shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-black text-sm">
              {step.num}
            </div>
            <div className="pt-1 border-b border-slate-100 pb-5 flex-1 last:border-0 last:pb-0">
              <h3 className="font-bold text-sm text-slate-900 mb-1">{step.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-amber-500 transition-all"
        >
          Start Your Schengen Application →
        </Link>
      </div>
    </section>
  );
}

function BeforeYouApply() {
  return (
    <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
      <h2 className="text-xl font-bold mb-2">Critical Things UAE Applicants Must Know Before Applying</h2>
      <p className="text-sm text-slate-500 mb-6">
        These are the most common reasons Schengen visa applications from UAE residents are delayed, refused, or returned incomplete. Review these before you submit.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            heading: 'Strong, Consistent Financial Proof Is Non-Negotiable',
            body: 'Consulates scrutinise bank statements closely. Maintain at least €100 per day of your stay as a general benchmark — though this varies by destination country. Avoid large one-time deposits immediately before applying; they raise red flags. Consistent salary credits and regular outgoing expenses build credibility.',
          },
          {
            heading: 'Travel Insurance Must Cover the Entire Schengen Area',
            body: 'Your policy must be valid across all 29 Schengen states — not just your primary destination. Minimum coverage: €30,000 for emergency medical treatment, hospitalisation, and repatriation. Policies limited to a single country are insufficient and will result in rejection.',
          },
          {
            heading: 'Your Itinerary Must Be Internally Consistent',
            body: 'Your flight bookings, hotel reservations, cover letter, Statement of Purpose, and visa application form must all tell the same story. Contradictions between your stated purpose and your bookings — or between your stated itinerary and your booked accommodation — are a common rejection trigger.',
          },
          {
            heading: 'Visa Refusals Stay on Your Record — Handle with Care',
            body: 'A Schengen visa refusal is recorded in the Visa Information System (VIS), which is accessible to all Schengen consulates. Future applications from the same individual will be evaluated against this history. If you have a prior refusal, you must disclose it and provide a written explanation in your next application.',
          },
          {
            heading: 'Appointment Slots — Especially for France and Italy — Fill Fast',
            body: 'TLScontact (France) and VFS Global (Italy, Germany) appointment slots in Dubai can be fully booked 4–6 weeks in advance during peak periods (June–August, December–January). Do not wait until you have all documents ready to start searching for appointment slots. Book the appointment first.',
          },
          {
            heading: 'Children Require Separate Applications, Not Just Family Listing',
            body: 'Each child needs their own visa application form and photographs. Children under 12 are exempt from biometrics but must still appear at the centre. If a child is travelling with one parent, a notarised consent letter from the absent parent is required — even for UAE nationals.',
          },
          {
            heading: 'EES Is Being Rolled Out — Be Prepared for Biometric Border Checks',
            body: 'The EU Entry/Exit System (EES) — which digitally records non-EU nationals entering and exiting the Schengen Area — is being rolled out at borders across Europe. It will replace passport stamping. Your travel history in the system will be fully traceable. Accurate self-reporting of past visits is essential.',
          },
          {
            heading: 'Tie to UAE Residency Must Be Clearly Demonstrated',
            body: 'Consulates assess your likelihood of returning to the UAE after your trip. Evidence of strong ties — employment contract, property ownership, family in UAE, ongoing business operations — significantly improves your application. First-time applicants with no previous travel history should give extra attention to this.',
          },
        ].map((item) => (
          <div key={item.heading} className="border-l-4 border-amber-300 pl-5">
            <h3 className="font-bold text-sm text-slate-900 mb-1">{item.heading}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function OfficialResources() {
  return (
    <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
      <h2 className="text-xl font-bold mb-2">Official EU & UAE Government Resources</h2>
      <p className="text-sm text-slate-500 mb-6">
        Always verify current requirements and fees using official government sources. Consulate websites, not third-party aggregators, are the authoritative source for document checklists.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          {
            name: 'EU Schengen Visa Policy (2026)',
            url: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/visa-policy_en',
            desc: 'Official European Commission Schengen visa policy, fee regulations, and current country lists',
          },
          {
            name: 'EU Short-Stay Calculator',
            url: 'https://ec.europa.eu/assets/home/visa-calculator/calculator.htm',
            desc: 'Official tool to calculate your remaining 90/180-day permitted days before your next trip',
          },
          {
            name: 'Schengen Visa Required Countries List',
            url: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/visa-policy/visa-lists_en',
            desc: 'Official EU list of nationalities that require a Schengen visa vs visa-free access',
          },
          {
            name: 'VFS Global UAE — Appointment Booking',
            url: 'https://www.vfsglobal.com/en/individuals/index.html',
            desc: 'Book your Schengen visa appointment at VFS Global centres in Dubai and Abu Dhabi',
          },
          {
            name: 'Schengen Area — European Commission',
            url: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/schengen-area_en',
            desc: 'Official list of 29 Schengen member states and area governance information',
          },
          {
            name: 'EU Entry/Exit System (EES) Information',
            url: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/smart-borders/entry-exit-system_en',
            desc: 'Information on the new EES biometric border system currently being rolled out at Schengen borders',
          },
        ].map((r) => (
          <a
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-between gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-amber-300 hover:shadow-sm group transition-all"
          >
            <div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">{r.name}</h3>
              <p className="text-xs text-slate-500">{r.desc}</p>
            </div>
            <span className="text-slate-300 group-hover:text-amber-500 font-bold transition-colors text-lg shrink-0">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function FreeTools() {
  return (
    <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
      <h2 className="text-xl font-bold mb-2">Free Schengen Visa Document Tools</h2>
      <p className="text-sm text-slate-500 mb-6">
        Generate professional Schengen visa documents in minutes — free for all UAE applicants. Used by thousands of successful applicants from Dubai and Abu Dhabi.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { href: '/visa-resources/visa-checklist-generator', label: '📋 Schengen Visa Document Checklist', badge: 'Free', desc: 'Tailored to your destination country and applicant type' },
          { href: '/visa-resources/visa-document-generator', label: '📝 Statement of Purpose (SOP)', badge: 'Free', desc: 'First-time applicants and complex cases' },
          { href: '/visa-resources/visa-document-generator', label: '📄 Cover Letter Template', badge: 'Free', desc: 'For tourist, business, and family visit visas' },
          { href: '/visa-resources/visa-document-generator', label: '⚖️ NOC Letter from Employer', badge: 'Free', desc: 'For employed UAE residents' },
          { href: '/visa-resources/visa-document-generator', label: '🏦 Bank Statement Cover Letter', badge: 'Free', desc: 'Explaining financial history to the consulate' },
          { href: '/visa-resources/visa-document-generator', label: '👨‍👩‍👧 Parental Consent Letter', badge: 'Free', desc: 'For minors travelling with one parent or guardians' },
        ].map((tool) => (
          <Link
            key={tool.href + tool.label}
            href={tool.href}
            className="flex items-start justify-between gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-amber-300 hover:bg-amber-50 group transition-all"
          >
            <div>
              <span className="text-sm font-semibold text-slate-700 group-hover:text-amber-700 transition-colors block mb-1">{tool.label}</span>
              <span className="text-[10px] text-slate-400">{tool.desc}</span>
            </div>
            <span className="text-[10px] font-black tracking-widest bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full shrink-0 mt-0.5">{tool.badge}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function OtherVisaTypes() {
  return (
    <section className="bg-amber-400 rounded-2xl p-8">
      <h2 className="text-xl font-bold text-slate-900 mb-2">Explore Other Visa Types</h2>
      <p className="text-sm text-amber-900 mb-6">
        Planning work, study, or longer stays in Europe? Find the right visa category below.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Business Visa', desc: 'Meetings & conferences', href: '/visa/business-visa', icon: '🤝' },
          { label: 'Work Visa', desc: 'Employment & sponsorship', href: '/visa/work-visa', icon: '💼' },
          { label: 'Student Visa', desc: 'Study & university', href: '/visa/student-visa', icon: '🎓' },
          { label: 'Transit Visa', desc: 'Layovers & connections', href: '/visa/transit-visa', icon: '🛫' },
        ].map((v) => (
          <Link key={v.label} href={v.href} className="bg-white rounded-xl p-4 hover:shadow-md transition-all group">
            <span className="text-2xl block mb-2">{v.icon}</span>
            <p className="font-bold text-sm text-slate-900 group-hover:text-amber-700 transition-colors">{v.label}</p>
            <p className="text-[10px] text-slate-400 mt-0.5">{v.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ─── SIDEBAR (static parts) ────────────────────────────────────── */
function StaticSidebar({ topRoutes = TOP_ROUTES }) {
  return (
    <>
      {/* Apply CTA */}
      <div className="bg-slate-900 rounded-2xl p-7 text-white sticky top-10">
        <h2 className="text-lg font-bold mb-1">Apply for Schengen Visa</h2>
        <p className="text-amber-400 text-xs font-bold mb-4 uppercase tracking-widest">Expert assistance · Dubai based</p>
        <p className="text-slate-400 text-xs mb-6 leading-relaxed">
          Our visa specialists manage your full Schengen application — from document prep to approval. Free initial consultation, no commitment required.
        </p>
        <Link
          href="/contact"
          className="block w-full bg-amber-400 hover:bg-amber-300 text-slate-900 text-center py-3.5 rounded-xl font-bold transition-all text-sm mb-3"
        >
          Book Free Consultation →
        </Link>
        <Link
          href="/visa-resources/visa-checklist-generator"
          className="block w-full bg-slate-800 hover:bg-slate-700 text-white text-center py-3 rounded-xl font-bold transition-all text-sm"
        >
          📋 Get Document Checklist
        </Link>
        <div className="mt-6 border-t border-slate-800 pt-5 space-y-3">
          {[
            { label: 'Visa Fee', value: '€90 (adults)' },
            { label: 'Fee Updated', value: 'June 2024' },
            { label: 'Processing', value: '15 calendar days' },
            { label: 'Max Stay', value: '90 / 180 days' },
            { label: 'Countries', value: '29 Schengen states' },
            { label: 'Insurance Min.', value: '€30,000 coverage' },
            { label: 'Apply From', value: 'Up to 6 months ahead' },
            { label: 'Latest Apply', value: '15 days before travel' },
            { label: 'Biometrics', value: 'Required · in-person' },
          ].map((row) => (
            <div key={row.label} className="flex justify-between text-xs">
              <span className="text-slate-500">{row.label}</span>
              <span className="text-slate-200 font-bold text-right max-w-[55%]">{row.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top routes static */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200">
        <h3 className="text-sm font-bold text-slate-900 mb-1">🌍 Top Routes from UAE</h3>
        <p className="text-[10px] text-slate-400 mb-4">Most popular Schengen applications from Dubai & Abu Dhabi</p>
        <div className="space-y-2">
          {topRoutes.map((r) => (
            <Link
              key={r.name}
              href={`/visa/${r.slug}`}
              className="group flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl hover:border-amber-300 hover:bg-amber-50 transition-all"
            >
              <FlagImg
                src={`https://flagcdn.com/w40/${r.code}.png`}
                alt={r.name}
                className="w-8 h-5 object-cover rounded shrink-0 border border-slate-100"
              />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-xs text-slate-900 group-hover:text-amber-700 transition-colors">{r.name}</p>
                <p className="text-[10px] text-slate-400 truncate">{r.popular}</p>
              </div>
              <span className="text-slate-300 group-hover:text-amber-500 text-sm font-bold transition-colors shrink-0">›</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Other visa types */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200">
        <h3 className="text-sm font-bold text-slate-900 mb-4">Other Visa Types</h3>
        <div className="space-y-2">
          {[
            { label: 'Business Visa Guides', href: '/visa/business-visa', icon: '🤝' },
            { label: 'Work Visa Guides', href: '/visa/work-visa', icon: '💼' },
            { label: 'Student Visa Guides', href: '/visa/student-visa', icon: '🎓' },
            { label: 'Tourist Visa Guides', href: '/visa/tourist-visa', icon: '🌍' },
            { label: 'Transit Visa Guides', href: '/visa/transit-visa', icon: '🛫' },
          ].map((v) => (
            <Link key={v.label} href={v.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-amber-50 border border-transparent hover:border-amber-200 transition-all">
              <span className="text-lg">{v.icon}</span>
              <span className="text-sm font-semibold text-slate-700">{v.label}</span>
              <span className="ml-auto text-slate-300 text-sm">›</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Document tools */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200">
        <h3 className="text-sm font-bold text-slate-900 mb-4">📋 Free Document Tools</h3>
        <div className="space-y-2">
          {[
            { label: 'Visa Checklist Generator', href: '/visa-resources/visa-checklist-generator' },
            { label: 'SOP Template', href: '/visa-resources/visa-document-generator' },
            { label: 'NOC Letter Template', href: '/visa-resources/visa-document-generator' },
            { label: 'Cover Letter Template', href: '/visa-resources/visa-document-generator' },
            { label: 'Bank Statement Template', href: '/visa-resources/visa-document-generator' },
            { label: 'Embassy Directory', href: '/visa-resources/embassy-directory' },
            { label: 'Processing Time Tracker', href: '/visa-processing-time-tracker' },
          ].map((r) => (
            <Link key={r.label + r.href} href={r.href} className="block text-xs font-semibold text-slate-500 hover:text-amber-600 hover:underline underline-offset-4 py-1 transition-colors">
              {r.label} →
            </Link>
          ))}
        </div>
      </div>

      {/* Tip box */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <h3 className="text-sm font-bold text-amber-900 mb-2">💡 Consulate Selection Rule</h3>
        <p className="text-xs text-amber-800 leading-relaxed mb-3">
          Apply at the consulate of your <em>primary destination</em> — where you spend the most nights. If stays are equal, apply at the first Schengen country you enter.
        </p>
        <a
          href="https://ec.europa.eu/assets/home/visa-calculator/calculator.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-amber-700 hover:underline underline-offset-4"
        >
          Use EU 90/180-day calculator →
        </a>
      </div>
    </>
  );
}

/* ─── MAIN SERVER COMPONENT ─────────────────────────────────────── */
export default function SchengenPageServer() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans py-20">

        {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-100 px-6 py-3">
          <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-slate-400 font-medium flex-wrap">
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/visa-services" className="hover:text-amber-600 transition-colors">Visa Services</Link>
            <span>›</span>
            <Link href="/visa" className="hover:text-amber-600 transition-colors">Visa Guides</Link>
            <span>›</span>
            <span className="text-slate-600 font-semibold">Schengen Visa from UAE 2026</span>
          </div>
        </nav>

        {/* ── TOP BANNER ── */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="flex flex-wrap gap-2 mb-6">
              {VISA_TYPES.map((v) => (
                <Link
                  key={v.label}
                  href={v.href}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-bold border transition-all ${
                    v.active
                      ? 'bg-amber-400 text-slate-900 border-amber-400'
                      : 'border-slate-200 text-slate-500 hover:border-amber-300 hover:text-amber-700'
                  }`}
                >
                  {v.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-amber-500 mb-2">
                  Eammu Holidays — Fees Updated June 2024 · EES Update 2025
                </p>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 leading-tight">
                  Schengen Visa from UAE <span className="text-amber-500">2026</span> — Complete Guide
                </h1>
                <p className="text-sm text-slate-500 max-w-2xl leading-relaxed speakable-intro">
                  One visa. 29 European countries. The definitive 2026 guide for UAE residents applying for a Schengen visa from Dubai or Abu Dhabi — covering official requirements, the updated €90 fee, 15-day processing timeline, document checklist, consulate selection rules, and step-by-step application process with expert assistance.
                </p>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-xs font-bold border border-amber-200 uppercase tracking-wider">
                  🇪🇺 29 Countries · 1 Visa
                </span>
                <span className="px-3 py-1.5 bg-green-100 text-green-800 rounded-full text-[10px] font-bold border border-green-200 uppercase tracking-wider">
                  ✅ Fees Updated Jun 2024
                </span>
                <p className="text-[10px] text-slate-400">Expert visa assistance · Dubai based</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN LAYOUT ── */}
        <div className="max-w-6xl mx-auto px-6 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* MAIN CONTENT */}
            <main className="lg:col-span-2 space-y-8">
              <WhatIsSchengen />
              {/* Client component handles the dynamic country grid + country-specific links */}
              <SchengenPageClient schengenCountries={SCHENGEN_COUNTRY_NAMES} topRoutes={TOP_ROUTES} />
              <VisaTypes />
              <Documents />
              <FeeSection />
              <ConsulateSection />
              <ApplicationSteps />
              <BeforeYouApply />
              <OfficialResources />
              <FreeTools />
              <OtherVisaTypes />

            
            </main>

            {/* SIDEBAR */}
            <aside className="space-y-5">
              <StaticSidebar topRoutes={TOP_ROUTES} />
            </aside>

          </div>
        </div>

        {/* ── INTERNAL LINKS HUB ── */}
        <div className="max-w-6xl mx-auto px-6 mt-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <div className="mb-6">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1">More Resources</p>
              <h2 className="text-xl font-extrabold text-slate-900">Explore All Visa Services</h2>
              <p className="text-sm text-slate-500 mt-1">
                Everything you need for a successful Schengen visa application — guides, tools, and templates in one place.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {INTERNAL_LINKS.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl hover:border-amber-300 hover:bg-amber-50 group transition-all"
                >
                  <span className="text-xl shrink-0 group-hover:scale-110 transition-transform">{link.icon}</span>
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-amber-700 leading-tight transition-colors">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA BANNER ── */}
        <div className="max-w-6xl mx-auto px-6 mt-8 mb-12">
          <div className="bg-amber-400 rounded-2xl p-10 text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-amber-800 mb-2">Ready to Visit Europe?</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3 leading-tight">
              Get Your Schengen Visa — Expert Help from Dubai
            </h2>
            <p className="text-sm text-amber-900 max-w-lg mx-auto mb-7 leading-relaxed">
              Talk to a Schengen visa specialist today. No queues, no confusion — complete application support from Dubai's trusted visa consultants. Free initial consultation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-700 transition-all text-sm">
                Book Free Consultation →
              </Link>
              <Link href="/visa-resources/visa-checklist-generator" className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all border border-slate-200 text-sm">
                📋 Get Document Checklist
              </Link>
            </div>
            <p className="text-amber-800 text-xs mt-5">🔒 Your information is secure. Eammu Holidays is a registered visa consultancy based in Dubai, UAE.</p>
          </div>
        </div>

        {/* ── FOOTER NAV ── */}
        <div className="bg-white border-t border-slate-100 px-6 py-5">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              Page last updated:{' '}
              <time dateTime="2026-05-01" className="font-semibold text-slate-600">May 2026</time> · Fees source:{' '}
              <a href="https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/visa-policy_en" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline font-semibold">
                European Commission
              </a>
            </p>
            <nav aria-label="Related visa pages" className="flex flex-wrap gap-4">
              {[
                { href: '/our-services/visa-services/tourist-visa-from-bangladesh', label: 'Tourist Visa' },
                { href: '/our-services/visa-services/work-visa-from-bangladesh', label: 'Work Visa' },
                { href: '/our-services/visa-services/student-visa-from-bangladesh', label: 'Student Visa' },
                { href: '/travel-resources/visa-processing-time-tracker', label: 'Processing Times' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-xs font-semibold text-slate-500 hover:text-amber-600 transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

      </div>
    </>
  );
}