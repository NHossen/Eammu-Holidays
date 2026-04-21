import visaData from '@/app/data/countries.json';
import { createSlug } from '@/app/lib/utils';
import Link from 'next/link';

// ── SEO METADATA ──────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const parts = slug.split('-visa-for-');
  const destSlug = parts[0];
  const originSlug = parts[1];

  const destination = visaData.find(c => createSlug(c.country) === destSlug);
  const origin = visaData.find(c => createSlug(c.country) === originSlug);
  const destName = destination?.country || 'Destination';
  const originName = origin?.country || 'Citizens';

  return {
    title: `${destName} Visa Requirements for ${originName} Citizens 2026 | Documents, Fees & Processing Time`,
    description: `Complete ${destName} visa guide for ${originName} passport holders. Mandatory documents, 47x36mm photo specs, 6-month bank statement, NOC, processing time (10–21 days), embassy fees, and expert tips for 2026.`,
    keywords: [
      `${destName} visa for ${originName}`,
      `${destName} visa requirements ${originName}`,
      `${destName} visa documents ${originName} 2026`,
      `${destName} visa processing time ${originName}`,
      `how to apply ${destName} visa from ${originName}`,
      `${destName} tourist visa ${originName} citizens`,
    ].join(', '),
    openGraph: {
      title: `${destName} Visa for ${originName} Citizens — 2026 Complete Guide`,
      description: `Get ${destName} visa for ${originName} nationals. Full document checklist, processing timeline, and fees — updated for 2026.`,
      images: [destination?.flag || ''],
      type: 'article',
    },
    alternates: {
      canonical: `/visa/visa-guide/${slug}`,
    },
  };
}

// ── DOCUMENT CATEGORIES ───────────────────────────────────────────────────
function getDocuments(destName, originName) {
  return {
    identity: [
      {
        title: `Original ${originName} Passport`,
        desc: `Must be valid for at least 6 months beyond your intended return date. Minimum 2 blank visa pages required. Old/expired passports with prior visas must also be submitted.`,
        required: true,
      },
      {
        title: 'Visa Application Form',
        desc: `Typed digital form — handwritten forms are rejected. Must include accurate travel dates, accommodation details, and be signed. A machine-readable QR code is mandatory for 2026 submissions.`,
        required: true,
      },
      {
        title: 'Passport-Size Photographs',
        desc: `47×36mm rectangular format. Pure white background, no shadows, no glasses. Face must cover 70–80% of the frame. Taken within the last 90 days. Minimum 2 copies required.`,
        required: true,
      },
    ],
    financial: [
      {
        title: 'Bank Statement (Last 6 Months)',
        desc: `Original statement from your bank with the official bank seal on every page. Must show consistent financial activity — not a dormant account suddenly loaded with funds. Embassy officers specifically look for recent large deposits as red flags.`,
        required: true,
      },
      {
        title: 'Bank Solvency Certificate',
        desc: `Official letter from your bank on bank letterhead explicitly stating your current balance in BDT and USD equivalent. Must be signed by the branch manager and dated within 30 days of application.`,
        required: true,
      },
      {
        title: 'Income Tax Documentation (ITDR)',
        desc: `Income Tax Deposit Receipt or Tax Return Certificates for the last 2–3 assessment years. Required to prove legitimate, declared income. Self-employed individuals must provide business financials.`,
        required: true,
      },
    ],
    professional: [
      {
        title: 'NOC / Leave Certificate',
        desc: `Original No Objection Certificate (NOC) on company letterhead — not photocopied. Must state your designation, salary, confirmed leave dates, and a statement that you are permitted to travel. Signed by HR Manager or Managing Director with company seal.`,
        required: true,
      },
      {
        title: 'Business Documents (Self-Employed)',
        desc: `Trade License with official English translation (notarized). Company Bank Statement (last 6 months). Chamber of Commerce membership certificate or relevant trade association card.`,
        required: false,
        note: 'Required if self-employed or business owner',
      },
      {
        title: 'Student Documents (If Applicable)',
        desc: `Student ID, enrollment letter from institution, NOC from the educational institute, scholarship documents if applicable.`,
        required: false,
        note: 'Required for student applicants',
      },
    ],
    travel: [
      {
        title: `Cover Letter / Visa Request Letter`,
        desc: `Addressed to the Visa Officer at the ${destName} Embassy. Must clearly state: full name, passport number, exact travel dates, purpose of visit, itinerary overview, financial standing, and strong ties to home country (employment, property, family).`,
        required: true,
      },
      {
        title: 'Flight Reservation (Not Paid Ticket)',
        desc: `Confirmed round-trip itinerary with PNR number. You do NOT need to purchase the ticket yet — a hold/reservation is sufficient and preferred (in case of refusal). Must show departure and return dates matching your itinerary.`,
        required: true,
      },
      {
        title: `Hotel Booking / Accommodation Proof`,
        desc: `Confirmed hotel reservations for all nights in ${destName}. Must include full address, check-in/check-out dates, and booking reference. If staying with family, provide a letter of invitation with host's residence proof and passport copy.`,
        required: true,
      },
      {
        title: `Detailed Day-by-Day Itinerary`,
        desc: `A comprehensive travel plan for each day of your visit to ${destName}. Include city names, planned activities, attractions, restaurant names, and inter-city travel mode. Embassy officers check itinerary plausibility against hotel bookings.`,
        required: true,
      },
      {
        title: 'Travel Insurance',
        desc: `Minimum coverage of €30,000 (for Schengen) or equivalent for other destinations. Must cover emergency medical, hospitalization, and repatriation for the entire duration of your trip including all countries visited.`,
        required: true,
        note: `Minimum €30,000 coverage for Schengen`,
      },
    ],
  };
}

// ── PROCESSING TIMELINE STEPS ─────────────────────────────────────────────
const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Document Preparation',
    body: 'Gather all mandatory documents per the checklist. Ensure bank statements have stamps on every page, photos are exactly 47×36mm, and all forms are typed (not handwritten).',
    time: '3–5 days',
    icon: '📋',
  },
  {
    num: '02',
    title: 'Expert Review & Verification',
    body: 'Our certified consultants review your complete dossier for errors, missing items, or issues that could trigger rejection. We check financial consistency, photo compliance, and form accuracy.',
    time: '1–2 days',
    icon: '🛡️',
  },
  {
    num: '03',
    title: 'Fee Payment & Appointment',
    body: 'Embassy visa fee and service charges are processed. For countries requiring VFS Global or BLS, appointment slots are booked. Some embassies require biometrics in-person.',
    time: '1–3 days',
    icon: '💳',
  },
  {
    num: '04',
    title: 'Embassy Submission',
    body: 'Documents submitted to embassy or VFS Global. Biometrics collected if required. Some embassies offer priority processing for an additional fee.',
    time: 'Day of submission',
    icon: '🏛️',
  },
  {
    num: '05',
    title: 'Processing Period',
    body: 'Embassy processes your application. Status can be tracked online. Additional documents may be requested (procedural fairness letter). Avoid travel bookings until passport is returned.',
    time: '10–21 business days',
    icon: '⏳',
  },
  {
    num: '06',
    title: 'Visa Collection',
    body: 'Passport returned with visa sticker or digital visa notification. Verify all details immediately — name spelling, validity dates, number of entries, and duration of stay.',
    time: 'Same day as decision',
    icon: '✅',
  },
];

// ── FAQ DATA ──────────────────────────────────────────────────────────────
function getFAQs(destName, originName) {
  return [
    {
      q: `How long does ${destName} visa processing take for ${originName} citizens?`,
      a: `Standard processing takes 10–21 business days for most ${originName} applicants. During peak seasons (June–August and December–January), this can extend to 30–45 days. Priority processing (available at extra cost for some embassies) reduces time to 3–5 business days. We recommend applying at least 6–8 weeks before your intended travel date.`,
    },
    {
      q: `What is the exact photo specification for ${destName} visa?`,
      a: `Photos must be 47×36mm (rectangular format). Pure white background with no shadows or patterns. No glasses, headwear (except religious), or heavy filters. Face must fill 70–80% of the frame. Photo must be taken within 90 days. Most rejection cases involve photos with grey backgrounds or incorrect dimensions — this is strictly enforced.`,
    },
    {
      q: `Why must the bank statement have a stamp on every page?`,
      a: `This is a mandatory embassy requirement to prevent document tampering. Unstamped pages are considered unofficial documents and will cause immediate rejection. The stamp must be the bank's official branch stamp — digital prints alone are not accepted. Your bank manager should stamp and sign each page.`,
    },
    {
      q: `Do I need to buy the flight ticket before applying?`,
      a: `No — and in fact, buying a non-refundable ticket before receiving visa approval is risky. A flight reservation (hold/itinerary with PNR number) is sufficient for the application. You purchase the actual ticket only after visa approval. Most travel agents can provide reservation documents at low cost.`,
    },
    {
      q: `What is a Cover Letter and is it really necessary?`,
      a: `A cover letter (also called visa request letter or SOT) is critical, especially for nationalities with high refusal rates. It's a formal letter to the Visa Officer explaining your purpose of visit, financial capability, accommodation plan, and — most importantly — your strong ties to ${originName} (employment, property, family) that guarantee your return. A weak or missing cover letter is one of the top reasons for visa refusals.`,
    },
    {
      q: `What if my visa application is refused?`,
      a: `A refusal is not permanent. You can reapply after strengthening your application. Common refusal reasons include: insufficient financial proof, weak cover letter, inconsistent documents, and lack of demonstrated ties to home country. We analyze refusal letters and prepare a stronger application for resubmission. Contact our experts via WhatsApp for a free consultation.`,
    },
    {
      q: `Can I apply for ${destName} visa if I have a previous visa refusal?`,
      a: `Yes, but you must disclose previous refusals honestly in the application form. Undisclosed refusals lead to permanent bans. Having a prior refusal increases scrutiny but does not automatically disqualify you. A stronger, more complete application addressing the previous rejection reason is key. Our consultants specialize in refusal cases.`,
    },
  ];
}

// ── REJECTION REASONS ──────────────────────────────────────────────────────
const REJECTION_REASONS = [
  { icon: '💰', title: 'Insufficient Financial Proof', desc: 'Bank balance too low, recently deposited large sums, or no consistent income history over 6 months.' },
  { icon: '📝', title: 'Weak or Missing Cover Letter', desc: 'No clear ties to home country, vague purpose of visit, or generic template letters copied from the internet.' },
  { icon: '📸', title: 'Non-Compliant Photos', desc: 'Wrong dimensions, grey/off-white backgrounds, glasses, shadows, or photos older than 90 days.' },
  { icon: '📄', title: 'Incomplete Documentation', desc: 'Missing bank stamps, unsigned forms, expired NOC, or incorrect application form format.' },
  { icon: '📅', title: 'Inconsistent Dates', desc: 'Hotel booking dates don\'t match flight reservations, or itinerary doesn\'t cover all days of stay.' },
  { icon: '🏠', title: 'Weak Ties to Home Country', desc: 'No employment, no property ownership, no family dependents — suggests immigration intent rather than tourism.' },
];

// ── TIPS ──────────────────────────────────────────────────────────────────
const EXPERT_TIPS = [
  'Apply 6–8 weeks before travel — never less than 3 weeks.',
  'Maintain a consistent bank balance for 3+ months before applying.',
  'Your cover letter should dedicate a paragraph to why you will return home.',
  'Itinerary must be realistic — don\'t plan 5 cities in 3 days.',
  'Book refundable hotels for the application — convert to actual booking after approval.',
  'If your NOC is from a small company, include company registration documents.',
  'Photocopy everything — keep a complete copy of your submitted dossier.',
  'Track your application online daily once submitted.',
];

// ── MAIN COMPONENT ────────────────────────────────────────────────────────
export default async function VisaDetails({ params }) {
  const { slug } = await params;
  const parts = slug.split('-visa-for-');
  const destSlug = parts[0];
  const originSlug = parts[1];

  const destinationData = visaData.find(c => createSlug(c.country) === destSlug);
  const originData = visaData.find(c => createSlug(c.country) === originSlug);

  if (!destinationData || !originData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
        <div className="text-6xl mb-6">🌍</div>
        <h1 className="text-3xl font-black text-slate-900 mb-4">Visa Guide Not Found</h1>
        <p className="text-slate-500 mb-8 max-w-md">We couldn't find a guide for this route. Please search again using our visa guide tool.</p>
        <Link href="/visa/visa-guide" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all">
          Back to Visa Guide
        </Link>
      </div>
    );
  }

  const destName = destinationData.country;
  const originName = originData.country;
  const documents = getDocuments(destName, originName);
  const faqs = getFAQs(destName, originName);

  const whatsappMsg = encodeURIComponent(
    `Hello, I need help applying for a ${destName} visa as a ${originName} citizen. I have reviewed the requirements on Eammu Holidays.`
  );
  const whatsappUrl = `https://wa.me/8801631312524?text=${whatsappMsg}`;

  return (
    <div className="min-h-screen bg-[#fafbfc] pb-24 font-sans antialiased text-slate-900">

      {/* ── CINEMATIC HEADER ────────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-[#02c7e0] via-[#0ea5d0] to-[#0284c7] overflow-hidden py-10">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-indigo-600/20 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-5 py-16 md:py-20 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-xs font-semibold mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/visa/visa-guide" className="hover:text-white transition-colors">Visa Guide</Link>
            <span>/</span>
            <span className="text-white capitalize">{destName} Visa for {originName}</span>
          </div>

          {/* Flag pill */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
            <img src={originData.flag} className="w-6 h-4 object-cover rounded-sm shadow" alt={originName} />
            <span className="text-white text-[10px] font-black uppercase tracking-widest">Official Protocol · Eammu Holidays</span>
            <img src={destinationData.flag} className="w-6 h-4 object-cover rounded-sm shadow" alt={destName} />
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight capitalize">
                {destName} Visa<br />
                <span className="text-white/80 font-light text-2xl md:text-3xl">for {originName} Citizens</span>
              </h1>

              <p className="text-white/80 text-base leading-relaxed mb-6 max-w-lg">
                Dreaming of a trip to {destName}? Getting your visa as a {originName} citizen is straightforward when you have the right documents. 
                Our expert consultants at Eammu Holidays have processed thousands of successful {destName} visas — we know exactly what the embassy looks for.
              </p>

              {/* Quick badges */}
              <div className="flex flex-wrap gap-2">
                {['Embassy Verified', '2026 Updated', 'Expert Reviewed', '98% Success Rate'].map(b => (
                  <span key={b} className="px-3 py-1.5 bg-white/15 border border-white/20 rounded-full text-[10px] font-black text-white uppercase tracking-wider">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Header stat cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Processing Time', value: '10–21 Days', sub: 'Business days', icon: '⏱️' },
                { label: 'Visa Type', value: 'Sticker + eVisa', sub: 'Available options', icon: '🪪' },
                { label: 'Entry Type', value: 'Single / Multi', sub: 'Embassy decides', icon: '🛂' },
                { label: 'Success Rate', value: '98%', sub: 'With Eammu', icon: '📈' },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4">
                  <div className="text-xl mb-1">{s.icon}</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-white/50 mb-1">{s.label}</div>
                  <div className="text-lg font-black text-white">{s.value}</div>
                  <div className="text-[10px] text-white/50 font-medium">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT GRID ────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-5 -mt-8 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* ── LEFT MAIN COLUMN ──────────────────────────────────────────── */}
          <div className="lg:col-span-8 space-y-8">

            {/* QUICK STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: 'Validity', value: '30–180 Days', icon: '📅' },
                { label: 'Entry', value: 'Single / Multi', icon: '🛂' },
                { label: 'Processing', value: '10–21 Days', icon: '⚡' },
                { label: 'Fee (Approx)', value: 'Check Below', icon: '💰' },
              ].map((s, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">{s.label}</p>
                  <p className="text-sm font-black text-slate-800">{s.value}</p>
                </div>
              ))}
            </div>

            {/* ── INTRODUCTION ARTICLE ─────────────────────────────────────── */}
            <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  {destName} Visa for {originName} Citizens — What You Need to Know
                </h2>
              </div>
              <div className="prose prose-sm prose-slate max-w-none space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  The <strong>{destName} visa for {originName} citizens</strong> is one of the most commonly applied-for visas through 
                  Eammu Holidays. As a {originName} passport holder, you must submit a sticker visa application through the 
                  {destName} Embassy or designated Visa Application Centre (VFS Global / BLS International). 
                  The process involves submitting a comprehensive dossier of documents, paying the embassy fee, 
                  and in some cases attending an in-person interview.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Processing typically takes <strong>10 to 21 business days</strong>, though this can extend during peak seasons 
                  (summer and year-end holidays) or if additional documents are requested. 
                  The embassy may issue a <em>Procedural Fairness Letter</em> requesting clarifications — 
                  responding promptly and accurately is critical.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The most common reason for {originName} applicants being refused a {destName} visa is 
                  <strong> insufficient financial documentation</strong> and a <strong>weak cover letter</strong> that fails to demonstrate 
                  strong ties to {originName}. Our checklist below covers every requirement in detail — follow it precisely.
                </p>
              </div>
            </section>

            {/* ── MANDATORY DOCUMENTS ──────────────────────────────────────── */}
            <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Mandatory Documents Checklist
                </h2>
              </div>
              <p className="text-slate-500 text-sm mb-8 ml-4">
                All documents below are required for {originName} citizens applying for a {destName} visa. 
                Missing even one item will result in rejection without refund.
              </p>

              {/* Category: Identity */}
              <DocCategory
                number="01"
                title="Travel Identity"
                color="blue"
                docs={documents.identity}
              />

              {/* Category: Financial */}
              <DocCategory
                number="02"
                title="Financial Standing"
                color="green"
                docs={documents.financial}
                note="Financial documents are the #1 reason for refusal — ensure bank statements have branch stamps on every single page."
              />

              {/* Category: Professional */}
              <DocCategory
                number="03"
                title="Professional Status"
                color="purple"
                docs={documents.professional}
              />

              {/* Category: Travel */}
              <DocCategory
                number="04"
                title="Travel Planning"
                color="amber"
                docs={documents.travel}
                note="Your itinerary, hotel bookings, and flight reservations must all have consistent matching dates."
              />
            </section>

            {/* ── PROCESSING TIMELINE ───────────────────────────────────────── */}
            <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full" />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Step-by-Step Application Process
                </h2>
              </div>

              <div className="space-y-4">
                {PROCESS_STEPS.map((step, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border-2 border-slate-100 group-hover:bg-blue-600 group-hover:border-blue-600 flex items-center justify-center text-xl transition-all shrink-0">
                        {step.icon}
                      </div>
                      {i < PROCESS_STEPS.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-slate-200 to-transparent mt-2" />
                      )}
                    </div>
                    <div className="pb-6 flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">Step {step.num}</span>
                        <span className="text-[9px] font-black text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full">⏱ {step.time}</span>
                      </div>
                      <h3 className="text-base font-black text-slate-800 mb-1">{step.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── WHY APPLICATIONS GET REJECTED ────────────────────────────── */}
            <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-rose-500 rounded-full" />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Why {destName} Visas Get Rejected
                </h2>
              </div>
              <p className="text-slate-500 text-sm mb-8 ml-4">
                Understanding these common mistakes helps you avoid them and prepare a flawless application.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {REJECTION_REASONS.map((r, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-red-50 border border-red-100 rounded-2xl">
                    <span className="text-2xl shrink-0">{r.icon}</span>
                    <div>
                      <h4 className="font-black text-red-900 text-sm mb-1">{r.title}</h4>
                      <p className="text-xs text-red-700/80 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── EXPERT TIPS ───────────────────────────────────────────────── */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] p-8 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">💡</span>
                <div>
                  <h2 className="text-2xl font-black tracking-tight">Expert Tips from Our Visa Consultants</h2>
                  <p className="text-blue-200 text-sm mt-1">Proven strategies that increase approval chances significantly</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {EXPERT_TIPS.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white/10 rounded-2xl border border-white/10">
                    <span className="w-6 h-6 bg-amber-400 text-slate-900 rounded-lg flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-white/90 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── FAQ SECTION ───────────────────────────────────────────────── */}
            <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full" />
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    {destName} Visa FAQ for {originName} Citizens
                  </h2>
                  <p className="text-slate-500 text-sm mt-1">Answers to the most common questions from our applicants</p>
                </div>
              </div>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <FAQItem key={i} question={f.q} answer={f.a} />
                ))}
              </div>
            </section>

            {/* ── SEO ARTICLE ───────────────────────────────────────────────── */}
            <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full" />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Complete {destName} Visa Guide for {originName} Nationals — 2026
                </h2>
              </div>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  The <strong>{destName} visa for {originName} citizens</strong> requires careful document preparation and 
                  a strong cover letter demonstrating genuine tourist intent. As {originName} nationals must demonstrate financial 
                  capability and strong ties to their home country, the financial documentation section is the most critical 
                  part of the application.
                </p>
                <h3 className="text-lg font-black text-slate-800 pt-2">{destName} Visa Fees for {originName} Citizens</h3>
                <p>
                  Embassy fees for the {destName} visa vary by visa type and are typically non-refundable regardless of outcome. 
                  Additional service charges apply for VFS Global or BLS International processing. 
                  Our consultants provide a complete fee breakdown during the consultation call.
                </p>
                <h3 className="text-lg font-black text-slate-800 pt-2">Bank Statement Requirements — Detailed Guide</h3>
                <p>
                  For {originName} applicants, the bank statement is scrutinized heavily. Embassy officers look for: 
                  minimum balance sufficient to cover daily expenses in {destName}, consistent transaction history 
                  (not a dormant account suddenly loaded with funds), official bank stamps on every single page, 
                  and account holder's name matching passport exactly.
                  <br /><br />
                  The recommended minimum balance varies by destination — generally USD 3,000–5,000 equivalent for 
                  a 2-week trip is considered safe. However, balance alone is not enough — income regularity matters.
                </p>
                <h3 className="text-lg font-black text-slate-800 pt-2">Applying for {destName} Visa from {originName} — 2026 Updates</h3>
                <p>
                  For 2026, the {destName} embassy has updated its photo specifications to strictly enforce the 47×36mm 
                  rectangular format. Applications with non-compliant photos are now returned without processing. 
                  Additionally, handwritten application forms are no longer accepted — typed digital forms with QR codes 
                  are mandatory. Eammu Holidays provides correctly formatted forms as part of our service.
                </p>
              </div>
            </section>

          </div>

          {/* ── RIGHT SIDEBAR ─────────────────────────────────────────────── */}
          <div className="lg:col-span-4 space-y-6">

            {/* STICKY APPLY CARD */}
            <div className="bg-slate-900 rounded-[2rem] p-7 text-white sticky top-6 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-black">Fast-Track Apply</h3>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Expert Consultation</p>
                  </div>
                </div>

                {/* Info items */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <span className="text-xl">⏱️</span>
                    <div>
                      <div className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Processing Time</div>
                      <div className="text-base font-black">10–21 Business Days</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <span className="text-xl">🏛️</span>
                    <div>
                      <div className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Submission</div>
                      <div className="text-base font-black">Embassy / VFS Global</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <span className="text-xl">📈</span>
                    <div>
                      <div className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Our Success Rate</div>
                      <div className="text-base font-black">98% Approval</div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-5 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black transition-all shadow-xl shadow-green-900/30 active:scale-95 group mb-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  <span>Apply via WhatsApp</span>
                  <svg className="group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                  </svg>
                </a>

                <p className="text-[9px] text-center text-slate-500 font-bold leading-relaxed">
                  FREE CONSULTATION · NO UPFRONT FEES · EXPERT VISA CONSULTANTS AVAILABLE 24/7
                </p>
              </div>
            </div>

            {/* WHAT'S INCLUDED */}
            <div className="bg-white border border-slate-100 rounded-[2rem] p-7 shadow-sm">
              <h4 className="font-black text-slate-900 mb-5 text-lg">What Eammu Provides</h4>
              <div className="space-y-3">
                {[
                  'Complete document verification',
                  'Cover letter drafting',
                  'Correct photo formatting',
                  'Embassy fee guidance',
                  'Appointment booking help',
                  'Application tracking support',
                  'Refusal case resubmission',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RELATED GUIDES */}
            <div className="bg-white border border-slate-100 rounded-[2rem] p-7 shadow-sm">
              <h4 className="font-black text-slate-900 mb-5">Related Visa Guides</h4>
              <div className="space-y-2">
                {visaData.slice(0, 5).filter(c => createSlug(c.country) !== destSlug).map(c => (
                  <Link
                    key={c.code}
                    href={`/visa/visa-guide/${createSlug(c.country)}-visa-for-${originSlug}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                  >
                    <img src={c.flag} className="w-8 h-5 object-cover rounded shadow-sm" alt={c.country} />
                    <span className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors flex-1">{c.country} Visa</span>
                    <svg className="text-slate-300 group-hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-5 mt-16">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-10 md:p-14 text-center overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-[60px]" />
          <div className="relative z-10">
            <div className="flex justify-center gap-3 mb-6">
              <img src={originData.flag} className="w-10 h-6 object-cover rounded shadow-md" alt={originName} />
              <span className="text-white text-2xl">✈️</span>
              <img src={destinationData.flag} className="w-10 h-6 object-cover rounded shadow-md" alt={destName} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              Ready to Apply for Your {destName} Visa?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Skip the confusion. Let our expert consultants prepare your complete application — 
              correctly, on time, and with a 98% success rate for {originName} citizens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black transition-all shadow-xl shadow-green-900/30 active:scale-95"
              >
                Apply via WhatsApp
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </a>
              <Link
                href="/visa/visa-guide"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 border-2 border-white/20 text-white rounded-2xl font-black hover:bg-white/10 transition-all"
              >
                Search Another Country
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

// ── SUB-COMPONENTS ────────────────────────────────────────────────────────

function DocCategory({ number, title, color, docs, note }) {
  const colorMap = {
    blue: { label: 'text-blue-600', badge: 'bg-blue-50 border-blue-100', dot: 'bg-blue-500' },
    green: { label: 'text-green-600', badge: 'bg-green-50 border-green-100', dot: 'bg-green-500' },
    purple: { label: 'text-purple-600', badge: 'bg-purple-50 border-purple-100', dot: 'bg-purple-500' },
    amber: { label: 'text-amber-700', badge: 'bg-amber-50 border-amber-100', dot: 'bg-amber-500' },
  };
  const c = colorMap[color];

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-2 h-2 rounded-full ${c.dot}`} />
        <h3 className={`text-xs font-black uppercase tracking-[0.2em] ${c.label}`}>
          {number}. {title}
        </h3>
      </div>
      {note && (
        <div className={`flex items-start gap-2 p-3 rounded-xl border mb-4 ${c.badge}`}>
          <span className="text-base">⚠️</span>
          <p className={`text-xs font-bold ${c.label} leading-relaxed`}>{note}</p>
        </div>
      )}
      <div className="space-y-2">
        {docs.map((doc, i) => (
          <div key={i} className="flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all">
            <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-black text-slate-800 text-sm">{doc.title}</h4>
                <div className="flex gap-1 shrink-0">
                  {doc.required ? (
                    <span className="text-[8px] font-black bg-red-100 text-red-700 px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">Required</span>
                  ) : (
                    <span className="text-[8px] font-black bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">Conditional</span>
                  )}
                </div>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed mt-1">{doc.desc}</p>
              {doc.note && (
                <p className="text-amber-700 text-[10px] font-bold mt-1.5">📌 {doc.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  return (
    <div className="border-2 border-slate-100 rounded-2xl overflow-hidden bg-white hover:border-slate-200 transition-all">
      <details className="group">
        <summary className="list-none w-full p-6 text-left flex items-center justify-between cursor-pointer hover:bg-slate-50/80 transition-colors select-none">
          <span className="font-bold text-slate-800 pr-4 text-sm leading-snug">{question}</span>
          <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 text-slate-500 group-open:rotate-180 group-open:bg-blue-600 group-open:text-white transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        </summary>
        <div className="px-6 pb-6 text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/40">
          {answer}
        </div>
      </details>
    </div>
  );
}
