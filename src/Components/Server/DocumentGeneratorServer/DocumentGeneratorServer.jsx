// app/travel-resources/travel-document-generator/DocumentGeneratorServer.jsx
// ✅ FULL SERVER COMPONENT
// Wraps the interactive client island with SEO-rich server-rendered content.
// Targets: SOP, NOC, Cover Letter, Salary Certificate, Sponsor Letter, Power of Attorney

import Link from "next/link";
import {
  FileText, CheckCircle2, AlertTriangle, Lightbulb,
  Clock, Shield, Star, ChevronRight, Globe,
  GraduationCap, Briefcase, Users, BadgeCheck,
  BookOpen, Wallet, Plane, Building2, ArrowRight,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// STATIC DATA
// ─────────────────────────────────────────────────────────────────────────────

const DOCUMENT_TYPES = [
  {
    id: "sop",
    icon: "📝",
    title: "Statement of Purpose (SOP)",
    altTitle: "Personal Statement / Study Plan",
    color: "blue",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    tag: "Student Visa Essential",
    usedFor: ["UK student visa", "USA student visa", "Canada student visa", "Australia student visa", "Germany student visa", "Schengen student visa", "Scholarship applications"],
    keyPoints: [
      "Explain your academic background and why you chose the specific course and institution",
      "Describe your career goals and how the degree directly supports them",
      "Demonstrate strong ties to Bangladesh — why you will return after graduation",
      "Address any study gaps, failed attempts, or unusual circumstances honestly",
      "Keep it 600–1,000 words. Focused, specific, evidence-based — not generic",
    ],
    rejectionRisk: "A vague or generic SOP is the #1 reason student visa applications are rejected. Embassy officers read thousands — yours must answer 'why this course, why this institution, why now'.",
    timeToWrite: "2–4 hours for first draft. Allow 1 week for review and revisions.",
  },
  {
    id: "noc",
    icon: "🏢",
    title: "No Objection Certificate (NOC)",
    altTitle: "Employer NOC / Educational NOC",
    color: "green",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-700",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
    tag: "Tourist & Student Visa",
    usedFor: ["UK Standard Visitor Visa", "USA B1/B2 visa", "Schengen tourist visa", "Canada TRV", "Japan tourist visa", "Dubai visa from Bangladesh", "Any visa requiring employment proof"],
    keyPoints: [
      "Written on official company letterhead with full address, company registration, and contact details",
      "Must state your designation, salary, leave approval dates, and that you will return to your position",
      "Include company seal/stamp and signature of HR Manager or MD",
      "For students: issued by university confirming enrollment and expected return",
      "For self-employed: include trade license number and CA-certified financials",
    ],
    rejectionRisk: "An NOC without company seal, without specific travel dates, or from an unregistered company is flagged immediately by embassy officers.",
    timeToWrite: "30–60 minutes on company letterhead.",
  },
  {
    id: "cover-letter",
    icon: "✉️",
    title: "Visa Cover Letter",
    altTitle: "Application Cover Letter / Supporting Letter",
    color: "amber",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
    badgeColor: "bg-amber-100 text-amber-700 border-amber-200",
    tag: "All Visa Types",
    usedFor: ["UK tourist visa", "USA B1/B2 visa", "Schengen visa", "Canada TRV", "Australia tourist visa", "Japan visa", "All tourist and business visa applications"],
    keyPoints: [
      "Address the letter to the specific visa section (e.g., 'The Visa Officer, British High Commission')",
      "State your purpose of visit, travel dates, and accommodation details",
      "Briefly reference your supporting documents — bank statement, hotel booking, itinerary",
      "Reaffirm your ties to Bangladesh: employment, family, property, financial commitments",
      "Keep it to one page (3–4 paragraphs). Professional tone. No emotional language.",
    ],
    rejectionRisk: "A cover letter that contradicts other documents — e.g., different travel dates from hotel bookings — immediately flags inconsistency and triggers manual review.",
    timeToWrite: "30–45 minutes.",
  },
  {
    id: "salary-certificate",
    icon: "💼",
    title: "Salary Certificate",
    altTitle: "Employment & Salary Verification Letter",
    color: "purple",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-700",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    tag: "Financial Proof",
    usedFor: ["UK visitor visa financial proof", "Schengen visa financial evidence", "USA B1/B2 visa", "Canada TRV financial documents", "Australia visa", "Scholarship applications", "Loan applications"],
    keyPoints: [
      "Must include full name, designation, date of joining, monthly gross salary, and annual CTC",
      "Written on company letterhead with HR or Finance Manager signature and company seal",
      "Some embassies require notarized copies — check destination-specific requirements",
      "Must match figures in your bank statement — discrepancies cause immediate suspicion",
      "For government employees: requires additional departmental seal and countersignature",
    ],
    rejectionRisk: "If your salary certificate shows BDT 80,000/month but your bank shows irregular deposits totaling BDT 40,000/month, the embassy will reject. Consistency is critical.",
    timeToWrite: "20–30 minutes on company letterhead.",
  },
  {
    id: "sponsor-letter",
    icon: "🤝",
    title: "Sponsor Letter",
    altTitle: "Financial Sponsorship Letter / Bank Guarantee Letter",
    color: "rose",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    textColor: "text-rose-700",
    badgeColor: "bg-rose-100 text-rose-700 border-rose-200",
    tag: "Financial Sponsorship",
    usedFor: ["Student visa financial support proof", "Tourist visa sponsored travel", "Medical visa sponsor", "Family visit visa sponsor", "Any visa where someone else is paying for your trip"],
    keyPoints: [
      "The sponsor clearly states their relationship to you, their willingness to fund your entire trip, and their financial capacity",
      "Include sponsor's bank statement showing sufficient funds alongside this letter",
      "Sponsor's employment proof or business documents should accompany the letter",
      "If sponsor is abroad: notarize and apostille the letter from their country of residence",
      "For student visas: sponsor must prove they can support full tuition + living costs for the study duration",
    ],
    rejectionRisk: "A sponsor letter without supporting bank statements is meaningless to embassy officers. The letter alone proves nothing — the financial documents must validate the claim.",
    timeToWrite: "30–45 minutes.",
  },
  {
    id: "power-of-attorney",
    icon: "⚖️",
    title: "Power of Attorney (PoA)",
    altTitle: "Authorisation Letter / General Power of Attorney",
    color: "indigo",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    textColor: "text-indigo-700",
    badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
    tag: "Legal Document",
    usedFor: ["Authorizing visa consultant to act on your behalf", "Property transactions in Bangladesh while abroad", "Bank transactions while studying or working overseas", "Business decisions while traveling", "Emergency document handling"],
    keyPoints: [
      "Clearly identify the grantor (you) and the attorney-in-fact (the person you authorize)",
      "Specify exactly which actions are authorized — general PoA vs. specific limited PoA",
      "Must be signed before a notary public in Bangladesh — stamp duty and registration required",
      "If used abroad: may require apostille certification and translation into destination language",
      "Always include an expiry date — open-ended PoAs are riskier and sometimes rejected",
    ],
    rejectionRisk: "A PoA without proper notarization is legally invalid. Always register at the Sub-Registrar office in Bangladesh for full legal effect.",
    timeToWrite: "Requires notary appointment — allow 1–2 business days.",
  },
];

const DOCUMENT_USE_CASES = [
  {
    flag: "🇬🇧",
    destination: "UK Standard Visitor Visa",
    docs: ["Cover Letter", "NOC (Employer)", "Salary Certificate"],
    critical: "Cover letter must reference your hotel booking reference numbers. NOC must include approved leave dates.",
    href: "/visa/united-kingdom-visa",
  },
  {
    flag: "🇺🇸",
    destination: "USA B1/B2 Tourist Visa",
    docs: ["Cover Letter", "NOC (Employer)", "Salary Certificate", "Sponsor Letter (if applicable)"],
    critical: "Documents must show strong US visa intent — why your trip is temporary and why you will return to Bangladesh.",
    href: "/visa/united-states-visa",
  },
  {
    flag: "🇪🇺",
    destination: "Schengen Visa (Europe)",
    docs: ["Cover Letter", "NOC (Employer)", "Salary Certificate"],
    critical: "Cover letter must include a day-by-day itinerary with hotel names and addresses for every night of your stay.",
    href: "/schengen-visa",
  },
  {
    flag: "🇨🇦",
    destination: "Canada TRV",
    docs: ["Cover Letter", "NOC (Employer)", "Salary Certificate", "Sponsor Letter (if applicable)"],
    critical: "IRCC requires proof of home ties. NOC should explicitly state you have approved leave and will return to your position.",
    href: "/visa/canada-visa",
  },
  {
    flag: "🇦🇺",
    destination: "Australia Visitor Visa",
    docs: ["Cover Letter", "NOC (Employer)", "Salary Certificate"],
    critical: "ImmiAccount online application. Documents must prove genuine temporary stay intention.",
    href: "/visa/australia-visa",
  },
  {
    flag: "🎓",
    destination: "Student Visa (Any Country)",
    docs: ["SOP (Statement of Purpose)", "NOC (Educational)", "Sponsor Letter"],
    critical: "SOP is the most critical document. It must link your academic history → chosen program → career plan → return to Bangladesh.",
    href: "/our-services/visa-services/student-visa-from-bangladesh",
  },
  {
    flag: "🇦🇪",
    destination: "Dubai Tourist Visa",
    docs: ["Cover Letter", "NOC (Employer)", "Salary Certificate"],
    critical: "Dubai visa process is relatively straightforward. NOC and salary certificate from Bangladesh employer are key for longer stays.",
    href: "/our-services/visa/dubai-visa-application",
  },
  {
    flag: "🇯🇵",
    destination: "Japan Tourist Visa",
    docs: ["Cover Letter", "NOC (Employer)", "Salary Certificate"],
    critical: "Japan consulate requires a day-by-day itinerary with hotel names, booking references, and transport plans.",
    href: "/visa/japan-visa",
  },
];

const WRITING_TIPS = [
  {
    icon: "🎯",
    title: "Be specific, not generic",
    desc: "Embassy officers reject generic documents immediately. Every document must reference specific dates, amounts, company names, and circumstances unique to your application.",
  },
  {
    icon: "🔗",
    title: "Ensure consistency across all documents",
    desc: "Your cover letter, NOC, salary certificate, and bank statements must tell the same story. Inconsistent figures or dates between documents trigger immediate manual review.",
  },
  {
    icon: "📅",
    title: "Include exact travel dates everywhere",
    desc: "The travel dates in your cover letter must exactly match your hotel bookings, flight itinerary, and NOC approval dates. Any mismatch is a red flag.",
  },
  {
    icon: "🏢",
    title: "Use proper letterhead and seals",
    desc: "NOC and salary certificates on plain paper are not accepted. Company letterhead, company seal, HR signature with designation, and company registration details are mandatory.",
  },
  {
    icon: "📊",
    title: "Match bank statement figures",
    desc: "Salary certificates must match bank statement deposits. Sponsor letters must match the sponsor's bank balance. Any financial inconsistency causes rejection.",
  },
  {
    icon: "✏️",
    title: "Professional language only",
    desc: "No emotional language, no spelling errors, no casual phrasing. Use formal English throughout. Have every document reviewed by an expert before submission.",
  },
];

const FAQS = [
  {
    q: "What is a Statement of Purpose (SOP) and why is it important for visa?",
    a: "A Statement of Purpose (SOP) is a 600–1,000 word personal essay explaining why you want to study a specific course at a specific institution in a specific country, your career goals, and why you will return to Bangladesh after graduation. It is mandatory for all student visa applications and scholarship applications. A weak SOP is the #1 reason student visas are rejected — embassy officers use it to assess your genuine intent.",
  },
  {
    q: "What is an NOC and who needs one for a visa application?",
    a: "A No Objection Certificate (NOC) is a letter from your employer confirming that they have no objection to you traveling abroad on specified dates, that you will return to your position, and that they will continue your employment. It is required for UK, USA, Schengen, Canada, Australia, and Japan visa applications from employed Bangladeshi applicants. Students need an NOC from their university. Self-employed applicants need a business NOC with trade license.",
  },
  {
    q: "What should a visa cover letter include?",
    a: "A visa cover letter should include: your full name and passport number, the visa type you are applying for, purpose of visit, exact travel dates, countries you will visit, accommodation details (hotel names and booking references), financial means of support, statement of ties to Bangladesh (employment, family, property), and a list of all documents attached. Address it to the specific visa section of the embassy you are applying to.",
  },
  {
    q: "Do I need a salary certificate for a tourist visa?",
    a: "Yes — a salary certificate is a key financial document for UK, Schengen, Canada, USA, and Australia tourist visa applications from Bangladeshi applicants. It proves your employment status and income level. The figures must exactly match your bank statement deposits. It must be on company letterhead with company seal, HR signature, your designation, and monthly gross salary.",
  },
  {
    q: "What documents do I need for a Schengen visa from Bangladesh?",
    a: "Schengen visa documents for Bangladeshi applicants include: valid passport, VFS appointment confirmation, completed application form, cover letter with day-by-day itinerary, NOC from employer, salary certificate, 3–6 months bank statement, hotel bookings, confirmed flight itinerary, travel insurance (minimum €30,000 medical coverage), and passport photos. Use our free visa checklist generator for a complete country-specific list.",
  },
  {
    q: "Can Eammu Holidays write my SOP or NOC for me?",
    a: "Yes. Eammu Holidays provides professional document writing services for SOP, NOC, visa cover letters, salary certificates, and sponsor letters. Our documents are embassy-accurate, reviewed against current visa officer standards, and formatted specifically for your destination country and visa type. Our 24-hour document review service has helped 12,000+ Bangladeshi travelers get approved.",
  },
  {
    q: "How long should a Statement of Purpose be for a UK student visa?",
    a: "For UK student visa applications, a Statement of Purpose (Personal Statement) is typically 600–800 words. For scholarship applications like Chevening, the personal statement is split into separate essays with specific word limits (usually 500 words each for leadership, networking, and study plan questions). Always check the specific word limit for your visa category and institution.",
  },
  {
    q: "What is the difference between a cover letter and an NOC for a visa?",
    a: "A cover letter is written BY YOU to the embassy explaining your trip purpose, dates, and why you will return. An NOC is written BY YOUR EMPLOYER confirming your employment, salary, approved leave dates, and that they have no objection to your travel. Both are required for most tourist visa applications from Bangladesh — they serve different purposes and must be consistent with each other.",
  },
  {
    q: "Is a sponsor letter the same as a bank guarantee letter?",
    a: "Similar but not the same. A sponsor letter is a personal letter from your financial sponsor (parent, relative, employer) stating they will financially support your trip and study. A bank guarantee letter is an official document issued by a bank guaranteeing a specific amount. For most visa applications, a sponsor letter plus the sponsor's bank statement is sufficient — a formal bank guarantee is only required for some business visas and official delegations.",
  },
];

const SEO_LINKS = [
  { label: "Tourist visa from Bangladesh",                href: "/visa" },
  { label: "Schengen visa 2026",                          href: "/schengen-visa" },
  { label: "USA tourist visa Bangladesh",                 href: "/visa/united-states-visa" },
  { label: "UK visitor visa Bangladesh",                  href: "/visa/united-kingdom-visa" },
  { label: "Canada tourist visa Bangladesh",              href: "/visa/canada-visa" },
  { label: "Japan tourist visa Bangladesh",               href: "/visa/japan-visa" },
  { label: "Australia tourist visa Bangladesh",           href: "/visa/australia-visa" },
  { label: "Dubai tourist visa",                          href: "/our-services/visa/dubai-visa-application" },
  { label: "Student visa from Bangladesh",                href: "/our-services/visa-services/student-visa-from-bangladesh" },
  { label: "Work visa from Bangladesh",                   href: "/our-services/visa-services/work-visa-from-bangladesh" },
  { label: "Dubai residents visa guide",                  href: "/visa/dubai-residents" },
  { label: "E-visa destinations 2026",                    href: "/visa/e-visa" },
  { label: "Free visa checklist generator",               href: "/travel-resources/visa-checklist-generator" },
  { label: "Visa processing time tracker",                href: "/travel-resources/visa-processing-time-tracker" },
  { label: "Travel insurance Bangladesh",                 href: "/travel-insurance" },
  { label: "Travel insurance cost calculator",            href: "/travel-insurance#calculator" },
  { label: "Travel cost calculator",                      href: "/travel-resources/travel-cost-calculator" },
  { label: "Visa rejection rates Bangladesh",             href: "/visa-rejection" },
  { label: "IELTS & immigration center",                  href: "/target-ielts-immigration-center" },
  { label: "USA visa interview preparation",              href: "/target-usa-visa-interview-preparation" },
  { label: "Scholarships from Bangladesh",                href: "/scholarships" },
  { label: "Study abroad Bangladesh",                     href: "/study-abroad" },
  { label: "Flight booking Bangladesh",                   href: "/flight-booking" },
  { label: "Contact Bangladesh office",                   href: "/contact/travel-agency-bangladesh" },
  { label: "Contact Dubai office",                        href: "/contact/travel-agency-dubai" },
  { label: "Client testimonials",                         href: "/testimonials" },
];

const colorMap = {
  blue:   { bg: "bg-blue-50",   border: "border-blue-100",   text: "text-blue-700",   badge: "bg-blue-100 text-blue-700 border-blue-200"   },
  green:  { bg: "bg-green-50",  border: "border-green-100",  text: "text-green-700",  badge: "bg-green-100 text-green-700 border-green-200"  },
  amber:  { bg: "bg-amber-50",  border: "border-amber-100",  text: "text-amber-700",  badge: "bg-amber-100 text-amber-700 border-amber-200"  },
  purple: { bg: "bg-purple-50", border: "border-purple-100", text: "text-purple-700", badge: "bg-purple-100 text-purple-700 border-purple-200" },
  rose:   { bg: "bg-rose-50",   border: "border-rose-100",   text: "text-rose-700",   badge: "bg-rose-100 text-rose-700 border-rose-200"   },
  indigo: { bg: "bg-indigo-50", border: "border-indigo-100", text: "text-indigo-700", badge: "bg-indigo-100 text-indigo-700 border-indigo-200" },
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

// Pass your actual client island as the `generator` prop
// e.g. <DocumentGeneratorServer generator={<DocumentGeneratorClient />} />
export default function DocumentGeneratorServer({ generator }) {
  return (
    <div className="min-h-screen bg-[#F8FAFB] font-sans">

      {/* ── STATS STRIP ── */}
      <section className="bg-[#005a31] py-5 px-6" aria-label="Document generator statistics">
        <div className="max-w-7xl mx-auto">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "6",       label: "Document types" },
              { val: "12,000+", label: "Documents generated" },
              { val: "98%",     label: "Visa approval rate" },
              { val: "Free",    label: "Always" },
            ].map(s => (
              <div key={s.label}>
                <dt className="text-2xl md:text-3xl font-black text-white">{s.val}</dt>
                <dd className="text-xs font-bold text-green-200 uppercase tracking-wider mt-0.5">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── DOCUMENT TYPES — detailed guide ── */}
      <section aria-labelledby="docs-heading" className="max-w-7xl mx-auto px-5 py-20">
        <div className="text-center mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-[#005a31] block mb-2">Complete Guide</span>
          <h2 id="docs-heading" className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3">
            Visa Document Types — What Each One Does & How to Write It
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Understand the purpose, requirements, and common mistakes for every visa document — so you submit the right
            document in the right format, every time. Pair with our{" "}
            <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">
              free visa checklist generator
            </Link>{" "}
            for a complete document package.
          </p>
        </div>

        <div className="space-y-6">
          {DOCUMENT_TYPES.map((doc) => {
            const c = colorMap[doc.color];
            return (
              <article
                key={doc.id}
                id={doc.id}
                className={`bg-white rounded-3xl border-2 ${c.border} p-7 md:p-9 hover:shadow-xl transition-all`}
                itemScope
                itemType="https://schema.org/HowTo"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl" aria-hidden="true">{doc.icon}</span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-black text-gray-900 text-xl" itemProp="name">{doc.title}</h3>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${c.badge}`}>
                          {doc.tag}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 font-medium">Also called: {doc.altTitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold">
                    <Clock size={14} aria-hidden="true" />
                    {doc.timeToWrite}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-5">
                  {/* Used for */}
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Used for these visas</p>
                    <ul className="flex flex-wrap gap-2">
                      {doc.usedFor.map(use => (
                        <li key={use} className={`text-xs font-bold px-3 py-1 rounded-full ${c.bg} ${c.text} border ${c.border}`}>
                          {use}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key requirements */}
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Key requirements</p>
                    <ul className="space-y-2" itemProp="step">
                      {doc.keyPoints.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                          <CheckCircle2 size={13} className="text-[#005a31] flex-shrink-0 mt-0.5" aria-hidden="true" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Rejection risk warning */}
                <div className="flex gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
                  <AlertTriangle size={16} className="text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-xs text-red-700 leading-relaxed">
                    <strong>Rejection risk:</strong> {doc.rejectionRisk}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── DOCUMENTS BY DESTINATION ── */}
      <section aria-labelledby="dest-docs-heading" className="bg-gray-50 border-t border-gray-100 py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#005a31] block mb-2">By Visa Destination</span>
            <h2 id="dest-docs-heading" className="text-3xl font-black text-gray-900 tracking-tight mb-2">
              Which Documents Do You Need? — By Visa Type & Country
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl">
              Each embassy has specific document requirements. Use the correct combination for your destination.
              After generating your documents, check our{" "}
              <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#005a31] font-semibold hover:underline">
                visa processing time tracker
              </Link>{" "}
              to plan your application timeline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {DOCUMENT_USE_CASES.map((uc, i) => (
              <article key={i} className="bg-white rounded-2xl border-2 border-gray-100 p-5 hover:border-[#005a31]/30 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl" aria-hidden="true">{uc.flag}</span>
                  <div>
                    <h3 className="font-black text-gray-800 text-sm">
                      <Link href={uc.href} className="hover:text-[#005a31] transition">
                        {uc.destination}
                      </Link>
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {uc.docs.map(doc => (
                    <span key={doc} className="text-[10px] font-black bg-[#005a31]/5 text-[#005a31] border border-[#005a31]/15 px-2 py-0.5 rounded-full">
                      {doc}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 bg-amber-50 border border-amber-100 rounded-xl p-3">
                  <Lightbulb size={13} className="text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-[11px] text-amber-700 leading-relaxed font-medium">{uc.critical}</p>
                </div>

                <Link href={uc.href}
                  className="mt-3 inline-block text-xs font-black text-[#005a31] hover:underline">
                  View full {uc.destination} guide →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-6 p-5 bg-blue-50 border border-blue-100 rounded-2xl flex items-start gap-3">
            <FileText size={18} className="text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-blue-800 leading-relaxed">
              <strong>Pro tip:</strong> Use our{" "}
              <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-black hover:underline">
                free visa checklist generator
              </Link>{" "}
              to get a complete, country-specific document checklist verified against official embassy requirements.
              It covers every document you need — not just the ones this generator creates.
            </p>
          </div>
        </div>
      </section>

      {/* ── WRITING TIPS ── */}
      <section aria-labelledby="tips-heading" className="py-20 px-5 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-[#005a31] block mb-2">Expert Advice</span>
            <h2 id="tips-heading" className="text-3xl font-black text-gray-900 tracking-tight mb-3">
              6 Rules for Writing Perfect Visa Documents
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              These rules apply to every visa document type. Follow them and your application package will be embassy-ready.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WRITING_TIPS.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-[#005a31]/20 transition-all">
                <div className="text-2xl mb-4" aria-hidden="true">{t.icon}</div>
                <h3 className="font-black text-gray-900 text-base mb-2">{t.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Related tools */}
          <div className="mt-10 bg-gradient-to-r from-[#005a31] to-[#007a42] rounded-3xl p-8 text-white">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-black text-lg mb-2">Travel Cost Calculator</h3>
                <p className="text-green-200 text-sm leading-relaxed mb-3">
                  Estimate how much your trip will cost — flights, accommodation, visa fees, travel insurance, and daily spending — before you apply.
                </p>
                <Link href="/travel-cost-calculator"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition">
                  Open calculator <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>
              <div>
                <h3 className="font-black text-lg mb-2">Travel Insurance Calculator</h3>
                <p className="text-green-200 text-sm leading-relaxed mb-3">
                  Estimate your travel insurance premium — required for Schengen visas (€30,000 minimum). Get an instant quote for any destination.
                </p>
                <Link href="/travel-insurance"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition">
                  Get insurance quote <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>
              <div>
                <h3 className="font-black text-lg mb-2">Visa Processing Time Tracker</h3>
                <p className="text-green-200 text-sm leading-relaxed mb-3">
                  Check how long your visa will take — by nationality, destination, and visa type. Plan your document submission timeline.
                </p>
                <Link href="/travel-resources/visa-processing-time-tracker"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition">
                  Check processing times <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section aria-labelledby="faq-heading" className="py-20 px-5 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#005a31] block mb-2">FAQs</span>
            <h2 id="faq-heading" className="text-3xl font-black text-gray-900 tracking-tight mb-2">
              Visa Document Generator — Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm">
              Everything Bangladeshi travelers need to know about visa documents in 2026.
            </p>
          </div>
          <dl className="space-y-3">
            {FAQS.map((item, i) => (
              <div key={i}
                className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-[#005a31]/30 transition-all"
                itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <details className="group">
                  <summary
                    className="w-full flex items-center justify-between p-5 text-left font-black text-gray-800 text-sm md:text-base cursor-pointer hover:text-[#005a31] transition list-none"
                    itemProp="name">
                    {item.q}
                    <span className="ml-4 flex-shrink-0 w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-[#005a31] font-black text-lg group-open:rotate-45 transition-transform" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <dd className="px-5 pb-5 pt-3 text-sm text-gray-500 leading-relaxed border-t border-gray-50"
                    itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <span itemProp="text">{item.a}</span>
                  </dd>
                </details>
              </div>
            ))}
          </dl>
          <div className="text-center mt-10">
            <Link href="/contact/travel-agency-bangladesh"
              className="inline-block px-8 py-3 bg-[#005a31] text-white font-black rounded-full hover:bg-[#004d2c] transition text-sm shadow-lg">
              Ask a visa document expert →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SEO ARTICLE ── */}
      <section aria-labelledby="guide-heading" className="py-20 px-5 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 id="guide-heading" className="text-2xl font-black text-gray-900 mb-6">
            Visa Document Generator — Complete Guide for Bangladeshi Travelers 2026
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-500 leading-relaxed">
            <div className="space-y-4">
              <p>
                Eammu Holidays&apos; free visa document generator creates embassy-accurate{" "}
                <strong className="text-gray-700">Statement of Purpose (SOP)</strong>,{" "}
                <strong className="text-gray-700">No Objection Certificate (NOC)</strong>,{" "}
                <strong className="text-gray-700">Visa Cover Letter</strong>,{" "}
                <strong className="text-gray-700">Salary Certificate</strong>,{" "}
                <strong className="text-gray-700">Sponsor Letter</strong>, and{" "}
                <strong className="text-gray-700">Power of Attorney</strong> for any visa destination.
                These documents are required for{" "}
                <Link href="/visa/united-kingdom-visa" className="text-[#005a31] font-semibold hover:underline">UK</Link>,{" "}
                <Link href="/visa/united-states-visa" className="text-[#005a31] font-semibold hover:underline">USA</Link>,{" "}
                <Link href="/schengen-visa" className="text-[#005a31] font-semibold hover:underline">Schengen</Link>,{" "}
                <Link href="/visa/canada-visa" className="text-[#005a31] font-semibold hover:underline">Canada</Link>,{" "}
                <Link href="/visa/japan-visa" className="text-[#005a31] font-semibold hover:underline">Japan</Link>, and{" "}
                <Link href="/visa/australia-visa" className="text-[#005a31] font-semibold hover:underline">Australia</Link> visa applications.
              </p>
              <p>
                The most important document for{" "}
                <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                  student visa applications from Bangladesh
                </Link>{" "}
                is the Statement of Purpose. A weak or generic SOP is the #1 reason Bangladeshi student visa applications
                are rejected. Our generator creates a structured SOP framework — personalized for your destination,
                degree level, and career goals.
              </p>
              <p>
                For tourist visas, the combination of a well-written{" "}
                <strong className="text-gray-700">cover letter + employer NOC + salary certificate</strong>{" "}
                forms the backbone of a strong application. These three documents must be internally consistent —
                the travel dates, salary figures, and employment details must match exactly across all three.
                Our{" "}
                <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">
                  visa checklist generator
                </Link>{" "}
                helps ensure you have every document before submission.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                <strong className="text-gray-700">Schengen visa applicants</strong> need a{" "}
                <Link href="/schengen-visa" className="text-[#005a31] font-semibold hover:underline">Schengen-compliant</Link>{" "}
                cover letter with a day-by-day itinerary including hotel names and booking references for every night.
                The cover letter must also reference your{" "}
                <Link href="/travel-insurance" className="text-[#005a31] font-semibold hover:underline">
                  travel insurance certificate
                </Link>{" "}
                (mandatory minimum €30,000). Our document generator includes all required Schengen-specific sections.
              </p>
              <p>
                After generating your documents, check our{" "}
                <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#005a31] font-semibold hover:underline">
                  visa processing time tracker
                </Link>{" "}
                to plan when to submit, and use our{" "}
                <Link href="/travel-resources/travel-cost-calculator" className="text-[#005a31] font-semibold hover:underline">
                  travel cost calculator
                </Link>{" "}
                to estimate your trip budget — which you&apos;ll need to reference in your cover letter and bank statements.
              </p>
              <p>
                Our expert consultants review all generated documents within 24 hours and flag any issues
                before you submit to the embassy or VFS Global. This service has helped{" "}
                <Link href="/testimonials" className="text-[#005a31] font-semibold hover:underline">
                  12,000+ Bangladeshi travelers
                </Link>{" "}
                get their visa approved first time. Contact our{" "}
                <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                  Cumilla Bangladesh office
                </Link>{" "}
                or{" "}
                <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-semibold hover:underline">
                  Dubai branch
                </Link>{" "}
                for expert review.
              </p>
            </div>
          </div>

          {/* Internal link mesh */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
              Related Visa Resources
            </p>
            <div className="flex flex-wrap gap-2.5">
              {SEO_LINKS.map(link => (
                <Link key={link.href} href={link.href}
                  className="text-xs font-semibold text-gray-500 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full hover:bg-[#005a31] hover:text-white hover:border-[#005a31] transition">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
   {/* ── BREADCRUMB ── */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
        <ol className="max-w-7xl mx-auto px-5 py-2.5 flex items-center gap-2 text-xs text-gray-400 flex-wrap"
          itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" className="hover:text-[#005a31] font-medium transition" itemProp="item">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li className="text-gray-200" aria-hidden="true">›</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/travel-resources" className="hover:text-[#005a31] font-medium transition" itemProp="item">
              <span itemProp="name">Travel Resources</span>
            </Link>
            <meta itemProp="position" content="2" />
          </li>
          <li className="text-gray-200" aria-hidden="true">›</li>
          <li className="font-semibold text-gray-600" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Free Visa Document Generator 2026</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

    </div>
  );
}