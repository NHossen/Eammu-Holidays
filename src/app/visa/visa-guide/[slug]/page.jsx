import visaData from '@/app/data/countries.json';
import { createSlug } from '@/app/lib/utils';
import HomeSeoLinks from '@/Components/HomeSeoLinks/HomeSeoLinks';
import Link from 'next/link';

export const revalidate = 86400;

// ✅ এখানে নতুন ফাংশনটা পেস্ট করুন — generateMetadata এর ঠিক আগে
export async function generateStaticParams() {
  const popularOrigins = ['bangladesh', 'india', 'pakistan', 'nepal', 'sri-lanka', 'united-arab-emirates'];
  const popularDestinations = [
    'united-states', 'united-kingdom', 'canada', 'australia',
    'germany', 'malaysia', 'singapore', 'turkey', 'japan', 'thailand',
  ];

  const params = [];
  for (const dest of popularDestinations) {
    for (const orig of popularOrigins) {
      params.push({ slug: `${dest}-visa-for-${orig}` });
    }
  }
  return params;
}
// ✅ নতুন যুক্ত করুন — module load-এ একবারই তৈরি হবে, O(1) lookup
const visaBySlug = new Map(visaData.map(c => [createSlug(c.country), c]));
// ─────────────────────────────────────────────────────────────────────────────
// METADATA — dynamic, keyword-rich, covers every user intent variant
// ─────────────────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const parts     = slug.split('-visa-for-');
  const destSlug  = parts[0];
  const origSlug  = parts[1];

 // ✅ এভাবে করুন
const destination = visaBySlug.get(destSlug);
const origin      = visaBySlug.get(origSlug);
  const dest        = destination?.country || 'Destination';
  const orig        = origin?.country      || 'Your Country';

const title = `${dest} Visa for ${orig} Citizens — Requirements & Fees (2026)`;
// ~65 chars max. Year at end = cleaner, still keyword-rich

const description = `Apply for a ${dest} visa from ${orig}. Get the full document checklist, processing times, visa fees, photo requirements, and step-by-step application guide. Updated 2026.`;
// ~155 chars. Conversational, benefit-driven, no stuffing

  return {
    metadataBase: new URL('https://www.eammu.com'),

    title,
    description,

    keywords: [
      `${dest} visa for ${orig} citizens`,
      `${dest} visa requirements ${orig} 2026`,
      `how to apply ${dest} visa from ${orig}`,
      `${dest} visa documents ${orig} passport`,
      `${dest} tourist visa ${orig} citizens`,
      `${dest} visa processing time ${orig}`,
      `${dest} visa fees for ${orig} nationals`,
      `${dest} visa checklist ${orig}`,
      `${dest} visa bank statement requirement`,
      `${dest} visa cover letter ${orig}`,
      `${dest} visa rejection ${orig}`,
      `${dest} visa photo specification`,
      `${dest} visa application guide 2026`,
      `${orig} passport ${dest} visa on arrival`,
      `${orig} to ${dest} visa process`,
      `eammu holidays ${dest} visa`,
      `${dest} embassy visa ${orig}`,
      `${orig} ${dest} visa approval tips`,
    ].join(', '),

    alternates: {
      canonical: `https://www.eammu.com/visa/visa-guide/${slug}`,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },

    openGraph: {
      type: 'article',
      url: `https://www.eammu.com/visa/visa-guide/${slug}`,
      siteName: 'Eammu Holidays',
      locale: 'en_US',
      title: `${dest} Visa for ${orig} Citizens — Complete 2026 Guide`,
      description: `Embassy-verified ${dest} visa requirements for ${orig} nationals. Document checklist, fees, bank statement rules & expert tips. 98% approval rate.`,
      images: [
        {
          url: destination?.flag || '/og/visa-guide.jpg',
          width: 1200,
          height: 630,
          alt: `${dest} visa guide for ${orig} citizens — Eammu Holidays`,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      site: '@eammuholidays',
      title: `${dest} Visa for ${orig} Citizens 2026 | Requirements & Docs`,
      description: `${dest} visa document checklist, fees & tips for ${orig} passport holders. 98% approval rate.`,
      images: [destination?.flag || '/og/visa-guide.jpg'],
    },

    other: {
      'geo.region': 'BD',
      'DC.language': 'en',
      'DC.coverage': 'Worldwide',
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD SCHEMAS (generated per slug)
// ─────────────────────────────────────────────────────────────────────────────
function buildSchemas({ slug, dest, orig, originData, destinationData }) {
  const pageUrl = `https://www.eammu.com/visa/visa-guide/${slug}`;

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',          item: 'https://www.eammu.com' },
      { '@type': 'ListItem', position: 2, name: 'Visa Services', item: 'https://www.eammu.com/visa' },
      { '@type': 'ListItem', position: 3, name: 'Visa Guide',    item: 'https://www.eammu.com/visa/visa-guide' },
      { '@type': 'ListItem', position: 4, name: `${dest} Visa for ${orig}`, item: pageUrl },
    ],
  };

  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline: `${dest} Visa for ${orig} Citizens 2026 — Requirements, Documents & Fees`,
    description: `Complete embassy-verified ${dest} visa guide for ${orig} nationals — document checklist, bank statement rules, processing times and expert tips.`,
    image: { '@type': 'ImageObject', url: destinationData?.flag || '', width: 800, height: 500 },
    datePublished: '2024-01-01T00:00:00Z',
    dateModified: new Date().toISOString(),
    author: { '@type': 'Organization', name: 'Eammu Holidays', url: 'https://www.eammu.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Eammu Holidays',
      logo: { '@type': 'ImageObject', url: 'https://www.eammu.com/emf.jpg' },
    },
    mainEntityOfPage: pageUrl,
    keywords: `${dest} visa, ${orig} visa, ${dest} visa requirements, ${orig} ${dest} visa 2026`,
    articleSection: 'Visa Guides',
    inLanguage: 'en-US',
    about: [
      { '@type': 'Thing', name: `${dest} Visa` },
      { '@type': 'Place', name: dest },
      { '@type': 'Place', name: orig },
    ],
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How long does ${dest} visa processing take for ${orig} citizens?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Standard ${dest} visa processing for ${orig} nationals takes 10–21 business days. During peak seasons (June–August, December–January) it may extend to 30–45 days. Priority processing reduces time to 3–5 business days where available. Apply at least 6–8 weeks before travel.`,
        },
      },
      {
        '@type': 'Question',
        name: `What documents are required for ${dest} visa for ${orig} citizens?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${orig} citizens applying for a ${dest} visa must submit: valid passport (6+ months), completed typed application form, 47×36mm passport photos, 6-month bank statement with branch stamps on every page, bank solvency certificate, employer NOC, income tax documents, cover letter, hotel booking, flight reservation, travel itinerary, and travel insurance (minimum €30,000 for Schengen).`,
        },
      },
      {
        '@type': 'Question',
        name: `What is the bank balance required for ${dest} visa from ${orig}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `For ${orig} applicants, the ${dest} embassy looks for consistent bank activity over 3–6 months — not just a high single balance. Recommended minimum is USD 3,000–5,000 equivalent for a 2-week trip. Large sudden deposits before application are a red flag. Bank statements must carry the official branch stamp on every page.`,
        },
      },
      {
        '@type': 'Question',
        name: `What is the photo size for ${dest} visa?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${dest} visa photos must be exactly 47×36mm (rectangular format). Pure white background, no shadows, no glasses, no heavy filters. Face must fill 70–80% of the frame. Must be taken within the last 90 days. Minimum 2 copies required. This specification is strictly enforced for 2026 applications.`,
        },
      },
      {
        '@type': 'Question',
        name: `Can I apply for ${dest} visa if I have a previous visa rejection?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes — you must always declare prior refusals honestly. Undisclosed rejections trigger permanent bans. A prior refusal increases scrutiny but does not disqualify you. A stronger, more complete application directly addressing the previous rejection reason is key. Our consultants specialize in refusal resubmission cases.`,
        },
      },
      {
        '@type': 'Question',
        name: `Do I need to buy flight tickets before applying for ${dest} visa?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `No. You only need a flight reservation (PNR-confirmed itinerary, not a paid ticket) for your ${dest} visa application. Buying non-refundable tickets before visa approval is risky. Purchase actual tickets only after approval. Most travel agents provide reservation documents at minimal cost.`,
        },
      },
    ],
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Apply for ${dest} Visa from ${orig} — Step-by-Step 2026`,
    description: `Complete step-by-step guide for ${orig} citizens applying for a ${dest} visa through Eammu Holidays.`,
    image: destinationData?.flag || '',
    totalTime: 'P21D',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Prepare documents', text: `Gather all required documents per the ${dest} visa checklist: passport, photos, bank statements, NOC, hotel bookings, flight reservation, and travel insurance.`, url: pageUrl },
      { '@type': 'HowToStep', position: 2, name: 'Expert document review', text: 'Have Eammu Holidays certified consultants review your complete dossier for errors, missing items, and financial inconsistencies.', url: 'https://www.eammu.com/contact' },
      { '@type': 'HowToStep', position: 3, name: 'Pay fees & book appointment', text: `Pay the ${dest} embassy visa fee. Book VFS Global or BLS appointment if required for ${orig} citizens.` },
      { '@type': 'HowToStep', position: 4, name: 'Submit to embassy', text: 'Submit your complete dossier to the embassy or VAC. Attend biometrics if required.' },
      { '@type': 'HowToStep', position: 5, name: 'Track & collect', text: `Track your ${dest} visa application online. Collect passport once decision is made — verify all visa details immediately.` },
    ],
  };

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: `${dest} Visa Application Assistance for ${orig} Citizens`,
    provider: {
      '@type': 'TravelAgency',
      name: 'Eammu Holidays',
      url: 'https://www.eammu.com',
      logo: 'https://www.eammu.com/emf.jpg',
    },
    serviceType: 'Visa Consultancy',
    description: `Complete ${dest} visa assistance for ${orig} passport holders — document preparation, cover letter writing, embassy appointment booking, application tracking, and refusal resubmission.`,
    areaServed: { '@type': 'Country', name: orig },
    offers: { '@type': 'Offer', description: 'Free initial consultation. Paid document preparation and submission support.' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '1247', bestRating: '5' },
  };

  return { breadcrumb, article, faq, howTo, service };
}

// ─────────────────────────────────────────────────────────────────────────────
// DOCUMENT CATEGORIES
// ─────────────────────────────────────────────────────────────────────────────
function getDocuments(dest, orig) {
  return {
    identity: [
      {
        title: `Original ${orig} Passport`,
        desc: `Valid for at least 6 months beyond your intended return from ${dest}. Minimum 2 blank visa pages. All old/expired passports with prior stamps must also be submitted — embassies check complete travel history.`,
        required: true,
        seoNote: `Most ${orig} applicants are rejected because their passport has fewer than 6 months validity or insufficient blank pages.`,
      },
      {
        title: 'Visa Application Form — Typed (Not Handwritten)',
        desc: `Officially typed digital application form — handwritten forms are rejected outright. Must include accurate travel dates, accommodation details, host information, and be signed in original ink. For 2026, the ${dest} embassy requires machine-readable QR-coded forms for all ${orig} applicants.`,
        required: true,
      },
      {
        title: 'Passport-Size Photographs — 47×36mm Format',
        desc: `Exactly 47×36mm rectangular (not square). Pure white background — grey, off-white, or cream are rejected. No glasses, no headwear (except religious head coverings). Face fills 70–80% of frame. Taken within last 90 days. Minimum 2 copies. Digital studio photos with printed backgrounds are frequently rejected.`,
        required: true,
        seoNote: `Incorrect photo dimensions are one of the top 3 reasons ${orig} applicants are rejected for ${dest} visa.`,
      },
    ],
    financial: [
      {
        title: 'Bank Statement — Last 6 Months (Stamped Every Page)',
        desc: `Original statement from your bank showing the last 6 full months of transactions. Official branch stamp required on every single page — not just the cover page. Embassy officers check for consistent transaction history: regular salary credits, bill payments, and stable balance. Accounts that show sudden large deposits 1–2 weeks before application submission are flagged as a red flag.`,
        required: true,
        seoNote: `Insufficient bank balance and unstamped pages are the #1 and #2 reasons ${orig} to ${dest} visa applications are rejected.`,
      },
      {
        title: 'Bank Solvency Certificate',
        desc: `Official letter on bank letterhead explicitly stating your current account balance in local currency and USD equivalent. Must be signed by branch manager and dated within 30 days of application. The certificate must include account number, account holder's name (matching passport exactly), and account type.`,
        required: true,
      },
      {
        title: 'Income Tax Documents (ITDR / Tax Return)',
        desc: `Income Tax Deposit Receipt or Tax Return Acknowledgment for the last 2–3 assessment years. Proves your income is declared, legal, and consistent. Self-employed applicants must provide business tax filings, trading statements, and company audited financials. Students must provide sponsor's tax documents.`,
        required: true,
      },
      {
        title: 'Salary Certificate / Pay Stub (Last 3 Months)',
        desc: `Official letter from your employer on company letterhead stating your monthly gross and net salary, position, and duration of employment. Must be dated within 30 days. For government employees, an official government pay certificate is required.`,
        required: false,
        note: 'Required for salaried applicants — strengthens financial proof significantly',
      },
    ],
    professional: [
      {
        title: 'No Objection Certificate (NOC) / Leave Approval Letter',
        desc: `Original NOC on company letterhead — photocopies or scanned prints are rejected. Must state: your exact designation, monthly salary, approved leave dates matching your ${dest} travel itinerary, and a formal statement that the company has no objection to your travel. Signed by HR Manager or Managing Director with official company stamp/seal.`,
        required: true,
        seoNote: `Embassy officers verify NOC authenticity. Generic template NOCs are identified and frequently trigger refusals for ${orig} applicants.`,
      },
      {
        title: 'Company Registration / Trade License (Self-Employed)',
        desc: `Valid trade license with certified English translation (notarized if original is in Bengali/other language). Company bank statements (6 months). Chamber of Commerce certificate or trade association membership. Board resolution authorizing your travel if applicable.`,
        required: false,
        note: 'Required for business owners and self-employed applicants',
      },
      {
        title: 'Student Documents',
        desc: `Valid student ID, current enrollment letter from institution, institution's NOC for travel, scholarship/grant documents if applicable. If studying abroad, include host institution documentation.`,
        required: false,
        note: 'Required for student applicants',
      },
      {
        title: 'Retired / Pensioner Documents',
        desc: `Pension book or pension certificate from employer or government. Proof of regular pension credits in bank statement. Property documents or fixed deposit certificates showing additional financial stability.`,
        required: false,
        note: 'Required for retired applicants',
      },
    ],
    travel: [
      {
        title: `Cover Letter / Visa Request Letter — Critical Document`,
        desc: `Addressed personally to the Visa Officer, ${dest} Embassy. Must clearly state: (1) your full name and passport number, (2) exact travel dates and itinerary overview, (3) purpose of visit in detail, (4) financial capability proof summary, (5) accommodation plan, and — most critically — (6) your strong ties to ${orig} that guarantee your return: current employment, owned property, family dependents, business operations. A generic or template cover letter is a fast track to rejection.`,
        required: true,
        seoNote: `A weak cover letter is the #1 controllable reason ${orig} citizens are rejected for ${dest} visa. This document requires the most effort and personalization.`,
      },
      {
        title: 'Flight Reservation — Not a Paid Ticket',
        desc: `Round-trip confirmed itinerary with valid PNR number. You do NOT need to purchase the actual ticket before visa approval — a reservation/hold is sufficient and strongly preferred (protects your money if visa is refused). Must show exact departure and return dates matching your stated travel period. Book refundable seats or use an agency-provided reservation document.`,
        required: true,
      },
      {
        title: `Hotel Booking / Accommodation Confirmation in ${dest}`,
        desc: `Confirmed hotel reservations for every night of your stay in ${dest}. Must include: full hotel name and address, check-in/check-out dates matching flight reservation, and booking reference number. If staying with a relative or friend, provide a formal Invitation Letter from the host with their residence proof (utility bill or tenancy agreement) and a copy of their passport or national ID.`,
        required: true,
      },
      {
        title: `Detailed Day-by-Day Travel Itinerary`,
        desc: `A comprehensive day-by-day plan for your entire visit to ${dest}. Include city names, planned attractions, museums, day trips, restaurant names, and inter-city travel modes. Embassy officers cross-check the itinerary against hotel booking locations for plausibility. A generic "sightseeing in ${dest}" note is not sufficient.`,
        required: true,
      },
      {
        title: 'International Travel Insurance',
        desc: `Coverage of minimum €30,000 for Schengen destinations, or equivalent medical/hospitalization coverage for non-Schengen countries. Must cover the entire duration of travel including transit countries. Repatriation coverage required. Must name the insured person matching passport exactly. Annual multi-trip policies are accepted.`,
        required: true,
        note: 'Minimum €30,000 for Schengen · Medical + repatriation coverage mandatory',
      },
      {
        title: `Proof of Home Country Ties — Supporting Documents`,
        desc: `Additional documents proving you will return to ${orig}: property ownership documents (land deed, apartment title), dependent family member details (spouse/children passports or birth certificates), club memberships, vehicle registration, or any other evidence of established life in ${orig}. This section is particularly important for first-time ${orig} to ${dest} applicants.`,
        required: false,
        note: 'Highly recommended — directly addresses the most common refusal reason',
      },
    ],
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// PROCESS STEPS
// ─────────────────────────────────────────────────────────────────────────────
function getProcessSteps(dest, orig) {
  return [
    {
      num: '01', icon: '📋', time: '3–5 days',
      title: 'Document Collection & Preparation',
      body: `Gather every document from the checklist above. Ensure all bank statements have official branch stamps on every page, photos are exactly 47×36mm white-background format, and all forms are typed and signed. Collect original NOC — photocopied NOCs are rejected.`,
    },
    {
      num: '02', icon: '🛡️', time: '1–2 days',
      title: 'Expert Document Review by Eammu Consultants',
      body: `Our certified visa consultants check your complete dossier for: date inconsistencies between hotel/flight/itinerary, financial document completeness, photo compliance, NOC authenticity format, and cover letter strength. We identify rejection risks before submission.`,
    },
    {
      num: '03', icon: '✍️', time: '1 day',
      title: 'Cover Letter Drafting & Finalization',
      body: `We draft your personalized cover letter for the ${dest} Visa Officer — addressing your specific circumstances, financial situation, and ${orig} ties. Generic template letters are flagged by embassy officers. Personalization is critical.`,
    },
    {
      num: '04', icon: '💳', time: '1–3 days',
      title: 'Fee Payment & Embassy Appointment',
      body: `${dest} embassy visa fees are paid (non-refundable regardless of outcome). For VFS Global or BLS processing, we book your appointment slot. Some embassies require in-person biometric submission — we guide you through the attendance process.`,
    },
    {
      num: '05', icon: '🏛️', time: 'Appointment day',
      title: 'Embassy / VAC Submission',
      body: `Complete dossier submitted to ${dest} Embassy or designated Visa Application Centre. Biometrics collected if required. Original passport handed over. We confirm receipt and provide the tracking reference.`,
    },
    {
      num: '06', icon: '⏳', time: '10–21 business days',
      title: 'Processing Period — Active Tracking',
      body: `Embassy processes your ${dest} visa application. We track the status daily and alert you immediately to any Procedural Fairness Letter (request for additional documents). Never book non-refundable travel during this period.`,
    },
    {
      num: '07', icon: '✅', time: 'Decision day',
      title: 'Visa Collection & Verification',
      body: `Passport returned with visa sticker (or digital notification for eVisa countries). Immediately verify: your name spelling matches passport exactly, travel dates are correct, number of entries (single/multiple) matches your plans, and duration of stay is accurate. Report any errors within 24 hours.`,
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// REJECTION REASONS
// ─────────────────────────────────────────────────────────────────────────────
function getRejectionReasons(dest, orig) {
  return [
    {
      icon: '💰', title: 'Insufficient or Inconsistent Financial Proof',
      desc: `Bank balance too low for trip duration, or sudden large deposits 1–2 weeks before application. ${dest} embassy officers look for 3–6 months of consistent income history.`,
      fix: 'Maintain consistent balance for 3+ months. Avoid large lump-sum deposits just before applying.',
    },
    {
      icon: '📝', title: `Weak Cover Letter — No Proof of Return to ${orig}`,
      desc: `Generic template letters, vague purpose of visit, or failure to clearly demonstrate strong ties to ${orig} (employment, property, family) are among the most common rejection triggers.`,
      fix: `Write a personalized cover letter dedicating a full paragraph to why you will return to ${orig}.`,
    },
    {
      icon: '📸', title: 'Non-Compliant Photographs',
      desc: `Wrong dimensions (not exactly 47×36mm), grey or off-white backgrounds, glasses, facial shadows, or photos older than 90 days. The ${dest} embassy strictly enforces this for 2026.`,
      fix: 'Get photos taken at a professional studio. Confirm 47×36mm white background before submitting.',
    },
    {
      icon: '📄', title: 'Missing or Unstamped Bank Statement Pages',
      desc: `Bank statements without the official branch stamp on every page are considered unofficial. Missing even one page causes rejection. This is the #1 document error for ${orig} applicants.`,
      fix: 'Request your bank to stamp every single page at the branch. Never submit bank-printed online statements alone.',
    },
    {
      icon: '📅', title: 'Inconsistent Dates Across Documents',
      desc: `Hotel check-in dates that don't match flight arrival, itinerary that doesn't cover all days, or travel insurance dates shorter than actual trip duration are caught immediately.`,
      fix: 'Triple-check all dates: flight departure → hotel check-in → itinerary day 1 → hotel check-out → return flight → insurance end.',
    },
    {
      icon: '🏠', title: `Weak Ties to ${orig} — Suggests Immigration Intent`,
      desc: `No employment, no property, no family dependents, no business — particularly for young single ${orig} applicants — suggests intent to overstay in ${dest} rather than return home.`,
      fix: 'Submit property documents, family evidence (spouse/children IDs), employment confirmation, and any club or association memberships.',
    },
    {
      icon: '🚫', title: 'Undeclared Prior Visa Refusal',
      desc: `Failing to declare a previous visa rejection in any destination is treated as deliberate misrepresentation — triggering immediate rejection and potential long-term banning.`,
      fix: 'Always declare prior refusals. Address the original rejection reason with stronger supporting documents in the new application.',
    },
    {
      icon: '📋', title: 'Incomplete, Unsigned, or Handwritten Forms',
      desc: `Partially completed forms, missing signatures, handwritten entries, or outdated 2024 form versions that don't match 2026 embassy requirements are all grounds for rejection.`,
      fix: 'Use the current 2026 typed form template. Sign in original ink. Check every field is completed — including fields you might consider optional.',
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ DATA
// ─────────────────────────────────────────────────────────────────────────────
function getFAQs(dest, orig) {
  return [
    {
      q: `How long does ${dest} visa processing take for ${orig} citizens?`,
      a: `Standard ${dest} visa processing for ${orig} nationals takes 10–21 business days. During peak seasons (June–August and December–January) this can extend to 30–45 days. Priority processing, where available, reduces time to 3–5 business days at extra cost. We recommend applying at least 6–8 weeks before your travel date — never less than 3 weeks.`,
    },
    {
      q: `What is the exact photo size for ${dest} visa application?`,
      a: `Photos must be exactly 47×36mm (rectangular format — not the common 35×45mm square). Pure white background with no shadows, no glasses, no headwear (unless religious). Face must fill 70–80% of the frame. Taken within the last 90 days. Minimum 2 copies. This specification is strictly enforced for all 2026 ${dest} visa applications from ${orig}.`,
    },
    {
      q: `Why must every page of the bank statement have a branch stamp?`,
      a: `The ${dest} embassy requires official bank stamps on every page to confirm authenticity and prevent tampering. A digital bank printout alone is insufficient. The branch stamp must be the physical branch rubber stamp (not a digital watermark), and each page should also carry the authorized bank officer's signature or initials. This is consistently the top document error for ${orig} applicants.`,
    },
    {
      q: `How much bank balance do I need for a ${dest} visa from ${orig}?`,
      a: `The embassy doesn't publish an exact minimum, but our experience with ${orig} to ${dest} applications suggests USD 3,000–5,000 equivalent is the safe threshold for a 2-week trip. More importantly, the balance must be consistent — not a large recent deposit. The statement must show regular income credits and bill payments over 3–6 months. Lump-sum deposits within 2 weeks of application are flagged as red flags.`,
    },
    {
      q: `Do I need to buy the flight ticket before applying for ${dest} visa?`,
      a: `No — and buying a non-refundable ticket before visa approval is financially risky. A flight reservation (PNR-confirmed hold/itinerary) is sufficient for the visa application. You purchase the actual ticket only after receiving your ${dest} visa. Most travel agencies and online booking platforms provide reservation documents at minimal cost for visa application purposes.`,
    },
    {
      q: `What should a cover letter for ${dest} visa contain for ${orig} applicants?`,
      a: `Your cover letter must include: your full name and passport number, exact travel dates, detailed purpose of visit, financial capability summary, accommodation plan, and — most critically — specific evidence of strong ties to ${orig} that ensure your return. This means: your current employer and position, property you own in ${orig}, family members (spouse, children, parents) who are dependent on you. A generic cover letter without this specific ${orig} context is one of the most common reasons for rejection.`,
    },
    {
      q: `Can ${orig} citizens with a previous visa refusal apply for ${dest} visa?`,
      a: `Yes, but you must disclose all prior refusals honestly in the application form. Hiding a previous rejection triggers permanent disqualification for misrepresentation. A prior refusal increases scrutiny but does not ban you from reapplying. The key is a stronger application that directly addresses the reasons for the original rejection. Our consultants at Eammu Holidays specialize in refusal case resubmissions.`,
    },
    {
      q: `Does a ${dest} visa refusal affect future visa applications to other countries?`,
      a: `Most countries require you to declare prior visa refusals in your application. A ${dest} rejection must be declared when applying for visas to the USA, Canada, UK, and other Schengen countries. However, it does not automatically disqualify you — a stronger application addressing the original rejection reason is what matters. Some countries like Malaysia and Turkey are less affected by prior refusals from other destinations.`,
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPERT TIPS
// ─────────────────────────────────────────────────────────────────────────────
function getExpertTips(dest, orig) {
  return [
    `Apply 6–8 weeks before travel — never less than 3 weeks before your intended departure.`,
    `Maintain a consistent bank balance for 3+ months before applying. Avoid sudden large deposits.`,
    `Your cover letter must name your ${orig} employer, property, and family — these are what the ${dest} embassy looks for.`,
    `Itinerary must be day-by-day and realistic — avoid planning 5 cities in 3 days; embassies check plausibility.`,
    `Book refundable hotels for the application — switch to non-refundable rates only after visa approval.`,
    `If your NOC is from a small company, attach the company's trade license and registration to strengthen it.`,
    `Get your photos taken at a professional studio and confirm they are exactly 47×36mm before submission.`,
    `Keep a complete photocopy of your entire submitted dossier — critical if the embassy requests additional documents.`,
    `Track your application online from day 1 — Procedural Fairness Letters require fast responses.`,
    `If previously rejected for ${dest} visa, have Eammu consultants review your refusal letter before reapplying.`,
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// INTERNAL LINKS (sitemap-mapped)
// ─────────────────────────────────────────────────────────────────────────────
const INTERNAL_LINKS = [
  { label: 'All Visa Services',                href: '/visa' },
  { label: 'Full Visa Guide',                  href: '/visa/visa-guide' },
  { label: 'E-Visa Countries',                 href: '/visa/e-visa' },
  { label: 'Schengen Visa Guide',              href: '/schengen-visa' },
  { label: 'Visa Rejection Checker',           href: '/visa-rejection' },
  { label: 'Visa Checklist Generator',         href: '/travel-resources/visa-checklist-generator' },
  { label: 'Processing Time Tracker',          href: '/travel-resources/visa-processing-time-tracker' },
  { label: 'Travel Document Generator',        href: '/travel-resources/travel-document-generator' },
  { label: 'Tourist Visa from Bangladesh',     href: '/our-services/visa-services/tourist-visa-from-bangladesh' },
  { label: 'Student Visa from Bangladesh',     href: '/our-services/visa-services/student-visa-from-bangladesh' },
  { label: 'Work Visa from Bangladesh',        href: '/our-services/visa-services/work-visa-from-bangladesh' },
  { label: 'Study Abroad Guide',               href: '/study-abroad' },
  { label: 'Scholarships by Country',          href: '/scholarships' },
  { label: 'Visa for Dubai Residents',         href: '/visa/dubai-residents' },
  { label: 'Visas from India',                 href: '/visa/india' },
  { label: 'USA Interview Preparation',        href: '/target-usa-visa-interview-preparation' },
  { label: 'IELTS & Immigration Center',       href: '/target-ielts-immigration-center' },
  { label: 'Flight Booking',                   href: '/flight-booking' },
  { label: 'Tour Packages',                    href: '/our-services/tour-packages' },
  { label: 'News & Travel Updates',            href: '/news-feeds' },
  { label: 'Travel Deals & Offers',            href: '/offers' },
  { label: 'Bangladesh Office',               href: '/contact/travel-agency-bangladesh' },
  { label: 'Dubai Office',                    href: '/contact/travel-agency-dubai' },
];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default async function VisaDetails({ params }) {
  const { slug } = await params;
  const parts    = slug.split('-visa-for-');
  const destSlug = parts[0];
  const origSlug = parts[1];

  // ✅ এভাবে করুন
const destinationData = visaBySlug.get(destSlug);
const originData      = visaBySlug.get(origSlug);

  if (!destinationData || !originData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
        <div className="text-6xl mb-6">🌍</div>
        <h1 className="text-3xl font-black text-slate-900 mb-4">Visa Guide Not Found</h1>
        <p className="text-slate-500 mb-8 max-w-md">
          We couldn't find a visa guide for this route. Use our search tool to find the right guide.
        </p>
        <Link href="/visa/visa-guide"
          className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all">
          ← Back to Visa Guide
        </Link>
      </div>
    );
  }

  const dest     = destinationData.country;
  const orig     = originData.country;
  const documents = getDocuments(dest, orig);
  const faqs      = getFAQs(dest, orig);
  const tips      = getExpertTips(dest, orig);
  const steps     = getProcessSteps(dest, orig);
  const rejections = getRejectionReasons(dest, orig);
  const schemas   = buildSchemas({ slug, dest, orig, originData, destinationData });

  const whatsappMsg = encodeURIComponent(
    `Hello, I need help applying for a ${dest} visa as a ${orig} citizen. I reviewed the requirements on eammu.com.`
  );
  const whatsappUrl = `https://wa.me/8801631312524?text=${whatsappMsg}`;

  // Related visa guides for sidebar (first 6 other destinations for same origin)
  const relatedDestinations = visaData
    .filter(c => createSlug(c.country) !== destSlug)
    .slice(0, 6);

  // Related origin guides for same destination
  const relatedOrigins = visaData
    .filter(c => createSlug(c.country) !== origSlug)
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-[#fafbfc] pb-24 font-sans antialiased text-slate-900">

      {/* ── JSON-LD Schemas ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.service) }} />

      {/* ══════════════════════════════════════════════════════════
          HERO HEADER
      ══════════════════════════════════════════════════════════ */}
      <div className="relative bg-gradient-to-br from-[#02c7e0] via-[#0ea5d0] to-[#0284c7] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-indigo-600/20 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-5 pt-24 pb-20 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-white/60 text-xs font-semibold mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/visa" className="hover:text-white transition-colors">Visa Services</Link>
            <span>/</span>
            <Link href="/visa/visa-guide" className="hover:text-white transition-colors">Visa Guide</Link>
            <span>/</span>
            <span className="text-white capitalize">{dest} Visa for {orig}</span>
          </nav>

          {/* Flag origin-destination pill */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-7">
            <img src={originData.flag} className="w-6 h-4 object-cover rounded-sm shadow" alt={`${orig} flag`} width={24} height={16} />
            <span className="text-white text-[10px] font-black uppercase tracking-widest">Embassy-Verified · Eammu Holidays · 2026</span>
            <img src={destinationData.flag} className="w-6 h-4 object-cover rounded-sm shadow" alt={`${dest} flag`} width={24} height={16} />
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                {dest} Visa<br />
                <span className="text-white/80 font-light text-2xl md:text-3xl">
                  for {orig} Citizens — 2026
                </span>
              </h1>

              <p className="text-white/80 text-base leading-relaxed mb-5 max-w-lg">
                Embassy-verified document checklist, bank statement rules, photo specifications,
                cover letter tips, and processing timeline — the complete {dest} visa guide for{' '}
                {orig} passport holders, updated for 2026. Backed by our{' '}
                <strong className="text-white">98% approval rate</strong>.
              </p>

              {/* SEO-keyword quick-links */}
              <div className="flex flex-wrap gap-2 mb-6" role="navigation" aria-label="Visa guide quick links">
                {[
                  { label: 'Visa Checklist',       href: '/travel-resources/visa-checklist-generator' },
                  { label: 'Processing Times',      href: '/travel-resources/visa-processing-time-tracker' },
                  { label: 'Rejection Rates',       href: '/visa-rejection' },
                  { label: 'Schengen Guide',        href: '/schengen-visa' },
                  { label: 'All Visa Services',     href: '/visa' },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="text-[10px] font-bold px-3 py-1.5 bg-white/15 border border-white/25 rounded-full text-white hover:bg-white/25 transition">
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {['Embassy Verified', '2026 Updated', 'Expert Reviewed', '98% Approval Rate', 'Zero Hidden Fees'].map(b => (
                  <span key={b} className="px-3 py-1.5 bg-white/15 border border-white/20 rounded-full text-[10px] font-black text-white uppercase tracking-wider">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Processing Time', value: '10–21 Days',    sub: 'Business days',      icon: '⏱️' },
                { label: 'Photo Size',       value: '47 × 36 mm',   sub: 'White background',   icon: '📸' },
                { label: 'Bank Statement',   value: '6 Months',      sub: 'Stamped every page', icon: '🏦' },
                { label: 'Eammu Success',    value: '98%',           sub: 'Approval rate',      icon: '📈' },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4">
                  <div className="text-xl mb-1" aria-hidden="true">{s.icon}</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-white/50 mb-1">{s.label}</div>
                  <div className="text-lg font-black text-white">{s.value}</div>
                  <div className="text-[10px] text-white/50 font-medium">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          MAIN CONTENT + SIDEBAR GRID
      ══════════════════════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-5 -mt-8 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* ── LEFT / MAIN COLUMN ── */}
          <main className="lg:col-span-8 space-y-8">

            {/* QUICK STAT BAR */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: 'Validity',       value: '30–180 Days',      icon: '📅' },
                { label: 'Entry Type',     value: 'Single / Multi',   icon: '🛂' },
                { label: 'Processing',     value: '10–21 Days',       icon: '⚡' },
                { label: 'Photo Size',     value: '47 × 36 mm',       icon: '📸' },
              ].map((s, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform">
                  <div className="text-2xl mb-1.5" aria-hidden="true">{s.icon}</div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">{s.label}</p>
                  <p className="text-sm font-black text-slate-800">{s.value}</p>
                </div>
              ))}
            </div>

            {/* ── INTRODUCTION ── */}
            <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10" aria-label={`${dest} visa introduction for ${orig} citizens`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" aria-hidden="true" />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  {dest} Visa for {orig} Citizens — What You Need to Know in 2026
                </h2>
              </div>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  The <strong>{dest} visa for {orig} citizens</strong> is a sticker visa obtained through the{' '}
                  {dest} Embassy or designated Visa Application Centre (VFS Global / BLS International).
                  As a <strong>{orig} passport holder</strong>, you must submit a comprehensive document dossier,
                  pay the non-refundable embassy fee, and in some cases attend an in-person biometrics appointment.
                </p>
                <p>
                  Processing typically takes <strong>10–21 business days</strong> for {orig} applicants, though this
                  extends to 30–45 days during peak season (June–August and December–January). Priority processing
                  is available at extra cost for some {dest} embassy submissions and reduces wait to 3–5 days.
                </p>
                <p>
                  The most critical documents for {orig} applicants are the{' '}
                  <strong>6-month bank statement</strong> (with branch stamps on every page) and the{' '}
                  <strong>cover letter</strong> — which must explicitly demonstrate strong ties to {orig} that
                  guarantee your return. A generic cover letter is the single most controllable reason for rejection.
                  Check our{' '}
                  <Link href="/visa-rejection" className="text-blue-600 font-semibold hover:underline">
                    {dest} visa rejection rate checker
                  </Link>{' '}
                  and our{' '}
                  <Link href="/travel-resources/visa-checklist-generator" className="text-blue-600 font-semibold hover:underline">
                    personalized visa checklist generator
                  </Link>{' '}
                  before starting your application.
                </p>
                <p>
                  Use our{' '}
                  <Link href={`/travel-resources/visa-processing-time-tracker/${destSlug}-national-visa-processing-time-for-${origSlug}-sticker`}
                    className="text-blue-600 font-semibold hover:underline">
                    {dest} visa processing time tracker for {orig} applicants
                  </Link>{' '}
                  to check current real-time estimates before booking your travel.
                </p>
              </div>
            </section>

            {/* ── DOCUMENT CHECKLIST ── */}
            <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10" aria-label={`${dest} visa document checklist for ${orig} citizens`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" aria-hidden="true" />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Mandatory Document Checklist — {dest} Visa for {orig} Citizens
                </h2>
              </div>
              <p className="text-slate-500 text-sm mb-8 ml-4">
                All documents are required unless marked conditional. Missing even one item triggers
                rejection without refund. Use our{' '}
                <Link href="/travel-resources/visa-checklist-generator" className="text-blue-600 font-semibold hover:underline">
                  Visa Checklist Generator
                </Link>{' '}
                for a printable version.
              </p>

              <DocCategory number="01" title="Travel Identity Documents" color="blue"  docs={documents.identity} />
              <DocCategory number="02" title="Financial Standing Proof"   color="green" docs={documents.financial}
                note={`Financial documents are the #1 reason ${orig} citizens are rejected for ${dest} visa. Every bank statement page must carry the official branch stamp.`} />
              <DocCategory number="03" title="Professional / Employment"  color="purple" docs={documents.professional} />
              <DocCategory number="04" title="Travel Planning Documents"  color="amber"  docs={documents.travel}
                note={`Your itinerary, hotel bookings, and flight reservation must all show identical consistent dates — embassy officers cross-check these for ${orig} applicants.`} />
            </section>

            {/* ── PROCESS STEPS ── */}
            <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10" aria-label={`How to apply for ${dest} visa from ${orig}`}>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full" aria-hidden="true" />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  How to Apply for {dest} Visa from {orig} — Step-by-Step 2026
                </h2>
              </div>
              <div className="space-y-3">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border-2 border-slate-100 group-hover:bg-blue-600 group-hover:border-blue-600 flex items-center justify-center text-xl transition-all shrink-0" aria-hidden="true">
                        {step.icon}
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-slate-200 to-transparent mt-2 min-h-[2rem]" aria-hidden="true" />
                      )}
                    </div>
                    <div className="pb-5 flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">Step {step.num}</span>
                        <span className="text-[9px] font-black text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full">⏱ {step.time}</span>
                      </div>
                      <h3 className="text-sm font-black text-slate-800 mb-1">{step.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── REJECTION REASONS + FIXES ── */}
            <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10" aria-label={`Why ${dest} visas get rejected for ${orig} citizens`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-rose-500 rounded-full" aria-hidden="true" />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Why {dest} Visa Gets Rejected for {orig} Citizens — & How to Fix It
                </h2>
              </div>
              <p className="text-slate-500 text-sm mb-7 ml-4">
                Understanding these rejection patterns dramatically increases your approval odds.
                Each issue has a specific fix.{' '}
                <Link href={`/visa-rejection/${origSlug}-visa-rejection-rate-for-${destSlug}-tourist`}
                  className="text-red-600 font-semibold hover:underline">
                  Check the exact {dest} visa rejection rate for {orig} citizens →
                </Link>
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {rejections.map((r, i) => (
                  <article key={i} className="p-5 bg-red-50 border border-red-100 rounded-2xl">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl shrink-0" aria-hidden="true">{r.icon}</span>
                      <h3 className="font-black text-red-900 text-sm leading-snug">{r.title}</h3>
                    </div>
                    <p className="text-xs text-red-700/80 leading-relaxed mb-3">{r.desc}</p>
                    <div className="flex items-start gap-2 p-2.5 bg-green-50 border border-green-100 rounded-xl">
                      <span className="text-green-600 text-xs font-black shrink-0">✓ Fix:</span>
                      <p className="text-xs text-green-700 leading-snug font-semibold">{r.fix}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* ── EXPERT TIPS ── */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] p-8 md:p-10 text-white" aria-label="Expert visa application tips">
              <div className="flex items-center gap-3 mb-7">
                <span className="text-3xl" aria-hidden="true">💡</span>
                <div>
                  <h2 className="text-2xl font-black tracking-tight">
                    Expert Tips — {dest} Visa for {orig} Citizens
                  </h2>
                  <p className="text-blue-200 text-sm mt-1">
                    Proven strategies from our consultants who have processed 42,000+ visa applications
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white/10 rounded-2xl border border-white/10">
                    <span className="w-6 h-6 bg-amber-400 text-slate-900 rounded-lg flex items-center justify-center font-black text-xs shrink-0 mt-0.5" aria-hidden="true">
                      {i + 1}
                    </span>
                    <p className="text-sm text-white/90 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── FAQ ── */}
            <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10" aria-label={`${dest} visa FAQ for ${orig} citizens`}>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full" aria-hidden="true" />
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    {dest} Visa FAQ for {orig} Citizens — 2026
                  </h2>
                  <p className="text-slate-500 text-sm mt-1">
                    The most-asked questions from {orig} applicants — embassy-verified answers
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <FAQItem key={i} question={f.q} answer={f.a} />
                ))}
              </div>
            </section>

            {/* ── SEO ARTICLE BLOCK ── */}
            <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10" aria-label={`${dest} visa complete guide for ${orig} nationals 2026`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full" aria-hidden="true" />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  {dest} Visa Guide for {orig} Nationals — Full Reference 2026
                </h2>
              </div>
              <div className="space-y-5 text-sm text-slate-600 leading-relaxed">
                <p>
                  The <strong>{dest} visa for {orig} citizens</strong> requires precise document preparation and a
                  compelling cover letter demonstrating genuine tourist or business intent. As {orig} nationals
                  must prove strong ties to their home country, the financial and professional documentation
                  sections carry the most weight in the embassy's evaluation.
                </p>

                <h3 className="text-lg font-black text-slate-800 pt-2">
                  {dest} Visa Bank Statement Rules for {orig} Applicants
                </h3>
                <p>
                  {dest} Embassy officers scrutinize the financial documents of {orig} applicants very carefully.
                  They look for: a minimum balance sufficient to cover daily expenses in {dest} (typically USD
                  3,000–5,000 for a 2-week trip), consistent transaction history over 3–6 months — not a dormant
                  account suddenly loaded with funds — official bank branch stamp on every single page of the
                  statement, and account holder's name matching passport exactly. Large deposits within 2 weeks
                  of application are flagged as red flags. Use our{' '}
                  <Link href="/travel-resources/visa-checklist-generator" className="text-blue-600 font-semibold hover:underline">
                    Visa Checklist Generator
                  </Link>{' '}
                  for the complete financial document list.
                </p>

                <h3 className="text-lg font-black text-slate-800 pt-2">
                  How to Write a Cover Letter for {dest} Visa — {orig} Citizens Guide
                </h3>
                <p>
                  Your cover letter for the {dest} visa must be personally written (not a generic template),
                  addressed to the Visa Officer at the {dest} Embassy, and must cover: (1) your full name and
                  passport number, (2) exact travel dates matching your booking, (3) detailed and specific
                  purpose of visit, (4) accommodation and itinerary summary, (5) your financial capability, and —
                  most critically — (6) your strong ties to {orig}: your employment position, property you own,
                  family members who depend on you, and any other evidence that proves you will return. Embassies
                  can identify copied template letters instantly and they consistently result in rejection.
                </p>

                <h3 className="text-lg font-black text-slate-800 pt-2">
                  {dest} Visa Fees for {orig} Citizens — 2026
                </h3>
                <p>
                  Embassy visa fees for {orig} citizens applying for a {dest} visa are non-refundable regardless
                  of the outcome. Additional service charges apply for VFS Global or BLS International processing
                  centres. Our consultants provide a complete, transparent fee breakdown during the free initial
                  consultation — before you commit to any payment. Contact our{' '}
                  <Link href="/contact/travel-agency-bangladesh" className="text-blue-600 font-semibold hover:underline">
                    Bangladesh office
                  </Link>{' '}
                  or{' '}
                  <Link href="/contact/travel-agency-dubai" className="text-blue-600 font-semibold hover:underline">
                    Dubai office
                  </Link>{' '}
                  for the current fee schedule.
                </p>

                <h3 className="text-lg font-black text-slate-800 pt-2">
                  {dest} Visa Photo Specifications — {orig} Citizens 2026
                </h3>
                <p>
                  The {dest} embassy enforces strict photo compliance for 2026 applications from {orig} nationals.
                  Photos must be exactly <strong>47×36mm</strong> (rectangular format — different from the common
                  35×45mm square used for other applications). Pure white background — grey, off-white, cream, or
                  digitally added backgrounds are rejected. No glasses, no headwear except for religious purposes,
                  no heavy filters or retouching. Face filling 70–80% of the frame. Taken within 90 days. Minimum
                  2 copies. Incorrect photo specifications are the third most common rejection reason for{' '}
                  {orig} applicants seeking the {dest} visa.
                </p>

                <h3 className="text-lg font-black text-slate-800 pt-2">
                  Reapplying for {dest} Visa After Rejection — {orig} Citizens Guide
                </h3>
                <p>
                  A {dest} visa refusal is not permanent. {orig} citizens who receive a rejection should first
                  carefully read the refusal letter to identify the stated reasons. They must then wait the
                  appropriate cooling-off period (typically 3–6 months for most destinations), address every
                  stated rejection reason with specific supporting documents, and always declare the previous
                  rejection in the new application. Check our{' '}
                  <Link href={`/visa-rejection/${origSlug}-visa-rejection-rate-for-${destSlug}-tourist`}
                    className="text-blue-600 font-semibold hover:underline">
                    {dest} visa rejection rate for {orig} citizens
                  </Link>{' '}
                  before reapplying. Our consultants at Eammu Holidays specialize in refusal resubmission cases
                  and have a strong track record of turning prior rejections into approvals.
                </p>
              </div>
            </section>

            {/* ── INTERNAL LINKS FOOTER ── */}
            <section aria-label="Related visa services and tools">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-5">
                Related Visa Services &amp; Tools
              </h2>
              <div className="flex flex-wrap gap-2">
                {INTERNAL_LINKS.map((l) => (
                  <Link key={l.href} href={l.href}
                    className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-semibold hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition">
                    {l.label}
                  </Link>
                ))}
              </div>
            </section>

            {/* ── SIMILAR ROUTES — same dest, other origins ── */}
            <section aria-label={`${dest} visa guides for other nationalities`}>
              <div className="flex items-center gap-3 mb-5">
                <h2 className="text-base font-black text-slate-800 shrink-0">
                  {dest} Visa Guides for Other Nationalities
                </h2>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="flex flex-wrap gap-2">
                {relatedOrigins.map((c) => (
                  <Link
                    key={c.code}
                    href={`/visa/visa-guide/${destSlug}-visa-for-${createSlug(c.country)}`}
                    className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition group"
                  >
                    {c.flag && <img src={c.flag} className="w-5 h-3 object-cover rounded-sm" alt={c.country} width={20} height={12} />}
                    {c.country} → {dest}
                  </Link>
                ))}
              </div>
            </section>

          </main>

          {/* ── SIDEBAR ── */}
          <aside className="lg:col-span-4 space-y-6" aria-label="Visa application sidebar">

            {/* STICKY APPLY CARD */}
            <div className="bg-slate-900 rounded-[2rem] p-7 text-white sticky top-6 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" aria-hidden="true" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-black">Apply for {dest} Visa</h3>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Expert-Assisted Application</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { icon: '⏱️', label: 'Processing Time', value: '10–21 Business Days' },
                    { icon: '📸', label: 'Photo Required', value: '47×36mm White Background' },
                    { icon: '🏦', label: 'Bank Statement', value: '6 Months — Stamped Every Page' },
                    { icon: '📈', label: 'Eammu Success Rate', value: '98% Approval' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3.5 bg-white/5 border border-white/10 rounded-2xl">
                      <span className="text-lg shrink-0" aria-hidden="true">{item.icon}</span>
                      <div>
                        <div className="text-[9px] font-black text-blue-400 uppercase tracking-widest">{item.label}</div>
                        <div className="text-xs font-black text-white">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Apply for ${dest} visa via WhatsApp`}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black transition-all shadow-xl shadow-green-900/30 active:scale-95 group mb-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  <span>Apply via WhatsApp</span>
                  <svg className="group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                  </svg>
                </a>

                <Link href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-white/20 text-white/80 rounded-2xl font-bold text-sm hover:bg-white/10 transition mb-4">
                  📍 Visit Our Office
                </Link>

                <p className="text-[9px] text-center text-slate-500 font-bold leading-relaxed">
                  FREE CONSULTATION · ZERO UPFRONT FEE · EXPERT CONSULTANTS AVAILABLE 24/7
                </p>
              </div>
            </div>

            {/* WHAT EAMMU PROVIDES */}
            <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm">
              <h3 className="font-black text-slate-900 mb-5 text-base">What Eammu Provides</h3>
              <ul className="space-y-3" aria-label="Eammu Holidays visa services">
                {[
                  'Complete document verification',
                  'Personalized cover letter drafting',
                  'Correct 47×36mm photo formatting',
                  'Embassy fee guidance',
                  'VFS / BLS appointment booking',
                  'Application tracking & status alerts',
                  'Procedural fairness letter response',
                  'Refusal case analysis & resubmission',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* QUICK TOOL LINKS */}
            <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm">
              <h3 className="font-black text-slate-900 mb-4 text-base">Visa Tools — Use Before Applying</h3>
              <div className="space-y-2">
                {[
                  { icon: '✓', label: 'Generate Visa Checklist',       href: '/travel-resources/visa-checklist-generator',     desc: 'Personalized document list' },
                  { icon: '⏱', label: 'Check Processing Time',          href: '/travel-resources/visa-processing-time-tracker',  desc: 'Real-time estimates' },
                  { icon: '📊', label: 'Check Rejection Rate',          href: '/visa-rejection',                                 desc: 'Know your approval odds' },
                  { icon: '📄', label: 'Travel Document Generator',     href: '/travel-resources/travel-document-generator',     desc: 'Itinerary & cover letter' },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-all group">
                    <span className="text-base" aria-hidden="true">{l.icon}</span>
                    <div>
                      <div className="text-xs font-black text-slate-700 group-hover:text-blue-600 transition">{l.label}</div>
                      <div className="text-[9px] text-slate-400">{l.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* RELATED VISA GUIDES — same origin, other destinations */}
            <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm">
              <h3 className="font-black text-slate-900 mb-4 text-base">
                More Visa Guides for {orig} Citizens
              </h3>
              <div className="space-y-2">
                {relatedDestinations.map(c => (
                  <Link
                    key={c.code}
                    href={`/visa/visa-guide/${createSlug(c.country)}-visa-for-${origSlug}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                    aria-label={`${c.country} visa guide for ${orig} citizens`}
                  >
                    <img src={c.flag} className="w-8 h-5 object-cover rounded shadow-sm shrink-0" alt={c.country} width={32} height={20} loading="lazy" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-black text-slate-700 group-hover:text-blue-600 transition truncate">{c.country} Visa</div>
                      <div className="text-[9px] text-slate-400">for {orig} citizens</div>
                    </div>
                    <svg className="text-slate-300 group-hover:text-blue-400 shrink-0" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </Link>
                ))}
                <Link href="/visa/visa-guide" className="block text-center text-xs font-black text-blue-600 hover:underline pt-2">
                  View all destination guides →
                </Link>
              </div>
            </div>

            {/* REJECTION CHECKER CTA */}
            <div className="bg-red-600 text-white rounded-[2rem] p-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-red-200 mb-2">📊 Know Before You Apply</p>
              <h3 className="font-black text-base mb-2">
                {dest} Visa Rejection Rate for {orig} Citizens
              </h3>
              <p className="text-red-100 text-xs leading-relaxed mb-4">
                See the real refusal rate before applying. Our checker covers all visa types — tourist, student, work, and business.
              </p>
              <Link
                href={`/visa-rejection/${origSlug}-visa-rejection-rate-for-${destSlug}-tourist`}
                className="block text-center px-5 py-3 bg-white text-red-600 rounded-xl font-black text-xs hover:bg-red-50 transition">
                Check {dest} Rejection Rate →
              </Link>
            </div>

          </aside>
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="max-w-6xl mx-auto px-5 mt-16">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-[60px]" aria-hidden="true" />
          <div className="relative z-10">
            <div className="flex justify-center items-center gap-3 mb-6">
              <img src={originData.flag} className="w-10 h-6 object-cover rounded shadow-md" alt={orig} width={40} height={24} />
              <span className="text-white text-2xl" aria-hidden="true">✈️</span>
              <img src={destinationData.flag} className="w-10 h-6 object-cover rounded shadow-md" alt={dest} width={40} height={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
              Ready to Apply for Your {dest} Visa?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-2 leading-relaxed text-sm">
              Skip the guesswork. Let our certified consultants prepare your complete {dest} visa application —
              correctly, on time, with a 98% success rate for {orig} citizens.
            </p>
            <p className="text-slate-500 text-xs mb-8">
              Free consultation ·{' '}
              <Link href="/contact/travel-agency-bangladesh" className="text-slate-400 hover:text-white hover:underline">Bangladesh office</Link>
              {' '}·{' '}
              <Link href="/contact/travel-agency-dubai" className="text-slate-400 hover:text-white hover:underline">Dubai office</Link>
              {' '}· 24/7 WhatsApp
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Apply for ${dest} visa via WhatsApp`}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black transition-all shadow-xl shadow-green-900/30 active:scale-95"
              >
                Apply via WhatsApp
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </a>
              <Link href="/visa/visa-guide"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 border-2 border-white/20 text-white rounded-2xl font-black hover:bg-white/10 transition-all">
                Search Another Country
              </Link>
              <Link href="/travel-resources/visa-checklist-generator"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 border-2 border-white/20 text-white/80 rounded-2xl font-bold hover:bg-white/10 transition-all text-sm">
                Generate Checklist →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <HomeSeoLinks />

    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function DocCategory({ number, title, color, docs, note }) {
  const colorMap = {
    blue:   { label: 'text-blue-600',   badge: 'bg-blue-50 border-blue-100',   dot: 'bg-blue-500' },
    green:  { label: 'text-green-600',  badge: 'bg-green-50 border-green-100',  dot: 'bg-green-500' },
    purple: { label: 'text-purple-600', badge: 'bg-purple-50 border-purple-100', dot: 'bg-purple-500' },
    amber:  { label: 'text-amber-700',  badge: 'bg-amber-50 border-amber-100',  dot: 'bg-amber-500' },
  };
  const c = colorMap[color];

  return (
    <div className="mb-9">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-2 h-2 rounded-full shrink-0 ${c.dot}`} aria-hidden="true" />
        <h3 className={`text-xs font-black uppercase tracking-[0.2em] ${c.label}`}>
          {number}. {title}
        </h3>
      </div>
      {note && (
        <div className={`flex items-start gap-2 p-3 rounded-xl border mb-4 ${c.badge}`}>
          <span className="text-base shrink-0" aria-hidden="true">⚠️</span>
          <p className={`text-xs font-bold ${c.label} leading-relaxed`}>{note}</p>
        </div>
      )}
      <div className="space-y-2">
        {docs.map((doc, i) => (
          <article key={i} className="flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/60 transition-all">
            <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4 className="font-black text-slate-800 text-sm leading-snug">{doc.title}</h4>
                <div className="flex gap-1 shrink-0">
                  {doc.required
                    ? <span className="text-[8px] font-black bg-red-100 text-red-700 px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">Required</span>
                    : <span className="text-[8px] font-black bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">Conditional</span>
                  }
                </div>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">{doc.desc}</p>
              {doc.note && (
                <p className="text-amber-700 text-[10px] font-bold mt-1.5">📌 {doc.note}</p>
              )}
              {doc.seoNote && (
                <p className="text-blue-600 text-[10px] font-bold mt-1.5 bg-blue-50 px-2 py-1 rounded-lg">
                  ℹ️ {doc.seoNote}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  return (
    <div className="border-2 border-slate-100 rounded-2xl overflow-hidden bg-white hover:border-slate-200 transition-all"
      itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <details className="group">
        <summary
          className="list-none w-full p-5 text-left flex items-center justify-between cursor-pointer hover:bg-slate-50/80 transition-colors select-none"
          itemProp="name"
        >
          <span className="font-bold text-slate-800 pr-4 text-sm leading-snug">{question}</span>
          <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 text-slate-500 group-open:rotate-180 group-open:bg-blue-600 group-open:text-white transition-all duration-300" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        </summary>
        <div
          className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/40"
          itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
        >
          <p itemProp="text">{answer}</p>
        </div>
      </details>
    </div>
  );
}