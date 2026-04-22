import countries from "@/app/data/countries.json";
import visadata from "@/app/data/studentvisadata.json";
import { createSlug } from "@/app/lib/utils";
import Link from "next/link";
import {
  CheckCircle, Clock, CreditCard, Camera, Info,
  MapPin, AlertTriangle, Lightbulb, HelpCircle,
  Calendar, ShieldCheck, Landmark, GraduationCap,
  BookOpen, Briefcase, Award, Plane, ChevronRight,
  ArrowRightCircle, Languages, ListOrdered, Globe,
  Users, TrendingUp, CircleDashed, TriangleAlert,
  MessageCircle, Wallet
} from "lucide-react";

// ── SEO METADATA ─────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cleanSlug = slug.replace(/-student-visa$/, "").replace(/-visa$/, "");
  const country = countries.find((c) => createSlug(c.country) === cleanSlug);
  const d = visadata[cleanSlug];

  const countryName = country?.country || "International";
  const currentYear = new Date().getFullYear();

  const defaultTitle = `${countryName} Student Visa for Bangladeshi Students ${currentYear} — Requirements, Fees & Scholarships`;
  const defaultDesc = `Complete ${currentYear} guide to studying in ${countryName} for Bangladesh passport holders. Find student visa requirements, application steps, scholarships, IELTS/PTE scores, bank balance needed, and processing time.`;

  return {
    metadataBase: new URL("https://www.eammu.com"),
    title: d?.title || defaultTitle,
    description: d?.description || defaultDesc,
    keywords: d?.seo_keywords?.join(", ") ||
      `${countryName} student visa Bangladesh ${currentYear}, study in ${countryName} from Bangladesh, ${countryName} student visa requirements, ${countryName} scholarship for Bangladeshi students, ${countryName} student visa bank balance, how to apply ${countryName} student visa Bangladesh, ${countryName} study permit Bangladesh, ${countryName} IELTS requirement student visa`,
    alternates: {
      canonical: `https://www.eammu.com/study-abroad/student-visa/${cleanSlug}`,
    },
    openGraph: {
      title: `Study in ${countryName} — Student Visa Guide for Bangladesh ${currentYear}`,
      description: defaultDesc,
      images: [country?.flag || ""],
      type: "article",
    },
  };
}

// ── FALLBACK PAGE ─────────────────────────────────────────────────────────────
function FallbackStudentVisaPage({ country, whatsappUrl }) {
  const countryName = country.country;
  const currentYear = new Date().getFullYear();

  const generalDocs = [
    "Original valid passport (minimum 6 months validity beyond study duration)",
    "University / College admission letter or Offer of Admission (LOA)",
    "Completed student visa application form (signed)",
    "Recent passport-size photographs — white background, ICAO standard",
    "Academic certificates and transcripts (SSC, HSC, Bachelor's) — notarized and attested",
    "English language test scores: IELTS, PTE Academic, TOEFL, or Duolingo (as required by institution)",
    "Personal bank statement — last 6 months showing sufficient funds",
    "Sponsor's bank statement, solvency certificate and income proof",
    "Statement of Purpose (SOP) — explaining study goals, career plan and intent to return",
    "Financial affidavit or proof of scholarship / sponsorship",
    "Travel insurance covering the full duration of study",
    "Biometric appointment at VFS Global Dhaka (if required)",
  ];

  const byProfession = [
    {
      role: "Fresh Graduate",
      items: ["SSC & HSC certificates + transcripts", "Bachelor's degree certificate + mark sheets", "Gap explanation letter (if any study gap)", "Parents' financial documents"]
    },
    {
      role: "Working Professional",
      items: ["Current employer NOC (on letterhead)", "Salary certificate / pay slips (6 months)", "Income tax return (last 2–3 years)", "Employment verification letter"]
    },
    {
      role: "Self-Sponsored",
      items: ["Trade license (English translation + notary)", "Business bank statement (6–12 months)", "CA-certified financial statement", "Asset documents (land, property)"]
    },
    {
      role: "Scholarship Holder",
      items: ["Official scholarship award letter", "University sponsor confirmation letter", "No-objection from sponsoring body", "Scholarship terms and coverage proof"]
    },
  ];

  const langTests = [
    { name: "IELTS Academic", min: "6.0 – 6.5", target: "7.0+", note: "Most widely accepted globally" },
    { name: "PTE Academic", min: "50 – 58", target: "65+", note: "Fast results, accepted widely" },
    { name: "TOEFL iBT", min: "80 – 90", target: "100+", note: "Preferred by US/Canada universities" },
    { name: "Duolingo DET", min: "100 – 110", target: "125+", note: "Accepted by many colleges" },
  ];

  const bankBalance = [
    { label: "Tuition (1st Year)", val: "Full 1st year tuition fee proof", color: "blue" },
    { label: "Living Expenses", val: "~BDT 3–8 lakh per year (varies by country)", color: "green" },
    { label: "Emergency Reserve", val: "25–30% extra above total estimate", color: "amber" },
    { label: "History Needed", val: "6–12 months consistent transaction history", color: "purple" },
  ];

  const steps = [
    { n: "01", title: "Choose Your Program & University", desc: "Research accredited institutions and confirm your program is eligible for post-study work rights." },
    { n: "02", title: "Take Language Tests (IELTS/PTE)", desc: "Meet the minimum score required by the institution and visa category." },
    { n: "03", title: "Receive Admission / Offer Letter", desc: "Apply to universities and secure your Letter of Acceptance (LOA) before applying for visa." },
    { n: "04", title: "Prepare Financial Documents", desc: "Gather bank statements, solvency certificate, and financial affidavit from your sponsor." },
    { n: "05", title: "Write a Strong Statement of Purpose", desc: "Clearly explain your study goals, career plan, and why you will return to Bangladesh." },
    { n: "06", title: "Submit Visa Application", desc: "Apply at the embassy or JVAC/VFS Global Dhaka with your complete document package." },
    { n: "07", title: "Biometrics & Interview (if required)", desc: "Some countries require biometric enrollment or an interview at the consulate." },
    { n: "08", title: "Receive Visa & Book Flight", desc: "Collect your passport, arrange travel insurance, and begin your study journey." },
  ];

  const faqs = [
    {
      q: `Do Bangladeshi students need a visa to study in ${countryName}?`,
      a: `Yes, in most cases Bangladeshi students need a student visa or study permit to enrol in ${countryName}. Requirements vary — contact our consultants for the exact current policy for ${countryName}.`,
    },
    {
      q: `How much bank balance do I need for a ${countryName} student visa?`,
      a: `Most countries require proof of full first-year tuition plus living expenses. For ${countryName}, this typically means BDT 3–10 lakh depending on the institution and location. Consistent 6–12 month banking history is equally important.`,
    },
    {
      q: `Is IELTS mandatory for ${countryName} student visa?`,
      a: `IELTS Academic is widely required, but many institutions in ${countryName} also accept PTE Academic, TOEFL iBT, or Duolingo. Check the specific requirement of your target university and the visa category.`,
    },
    {
      q: `Can I work part-time while studying in ${countryName}?`,
      a: `Most popular study destinations allow 20–24 hours per week during semester and full-time during official academic breaks. Rules vary by country — our consultants can confirm the current policy for ${countryName}.`,
    },
    {
      q: `How long does the ${countryName} student visa take to process?`,
      a: `Processing times vary widely — typically 4–16 weeks depending on the country, season, and completeness of your application. We recommend applying at least 3 months before your course start date.`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#2D2D2D] font-sans">

      {/* ── HERO ── */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#f5c800]/5 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-5 py-16 md:py-24 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/40 font-semibold mb-8 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition">Home</Link>
            <ChevronRight size={12} />
            <Link href="/study-abroad/student-visa" className="hover:text-white/70 transition">Student Visa</Link>
            <ChevronRight size={12} />
            <span className="text-white/60">{countryName}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-[#f5c800]/20 border border-[#f5c800]/40 text-[#f5c800] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                  {currentYear} Student Visa Guide
                </span>
                <span className="bg-white/10 border border-white/20 text-white/60 px-4 py-1.5 rounded-full text-xs font-bold">
                  Bangladesh Passport Holders
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-3">
                Study in {countryName}<br />
                <span className="text-[#f5c800]">Student Visa Guide</span>
              </h1>
              <p className="text-sm text-white/50 font-medium mb-2">
                {countryName} student visa requirements for Bangladeshi students — {currentYear}
              </p>
              <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-lg">
                Complete {countryName} student visa data is being verified by our team. The general requirements and application process below apply to most international student visa applications. Contact our consultants for country-specific confirmed details.
              </p>

              <div className="flex flex-wrap gap-3">
                {["✅ Expert Consultants", "📋 Document Checklist", "🎓 Scholarship Guidance", "🔒 Confidential"].map(b => (
                  <span key={b} className="flex items-center gap-1.5 bg-white/8 border border-white/10 px-3 py-2 rounded-xl text-xs font-bold text-white/60">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-br from-[#f5c800]/20 to-blue-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-700" />
                <div className="relative bg-white/10 backdrop-blur border border-white/20 p-4 rounded-3xl overflow-hidden w-72 h-52 flex items-center justify-center">
                  <img src={country.flag} alt={`Study in ${countryName} — student visa Bangladesh`} className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#f5c800] text-black px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap shadow-xl">
                  Student Visa {currentYear}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── NOTICE BANNER ── */}
      <div className="max-w-7xl mx-auto px-5 mt-10 mb-2">
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 flex gap-4 items-start">
          <div className="p-2 bg-amber-100 rounded-xl shrink-0">
            <CircleDashed size={20} className="text-amber-600" />
          </div>
          <div>
            <p className="font-black text-amber-800 text-sm mb-1">Detailed {countryName} student visa data coming soon</p>
            <p className="text-amber-700 text-xs leading-relaxed">Our team is finalizing verified {currentYear} requirements for {countryName}. The comprehensive guide below is an accurate general starting point. WhatsApp our consultants for confirmed country-specific guidance — they respond within 2 hours.</p>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-5 py-10 pb-20">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* LEFT / MAIN */}
          <div className="lg:col-span-8 space-y-8">

            {/* SEO INTRO ARTICLE */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-[#f5c800] to-amber-500 rounded-full" />
                <h2 className="text-2xl font-black text-gray-900">How to Apply for {countryName} Student Visa from Bangladesh</h2>
              </div>
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  For <strong className="text-gray-800">Bangladeshi students</strong> aspiring to pursue higher education in <strong className="text-gray-800">{countryName}</strong>, the journey begins with securing an admission offer from an accredited institution, followed by applying for a student visa or study permit through the {countryName} Embassy or an authorised Visa Application Centre (JVAC/VFS Global) in Dhaka.
                </p>
                <p>
                  The <strong className="text-gray-800">{countryName} student visa {currentYear}</strong> process requires comprehensive documentation including proof of admission, English language proficiency (IELTS/PTE/TOEFL), strong financial evidence, and a well-crafted Statement of Purpose (SOP) that clearly demonstrates your academic intent and ties to Bangladesh.
                </p>
                <p>
                  Embassy officers pay close attention to the <strong className="text-gray-800">consistency of your bank statements</strong>, the clarity of your career plans, and whether your chosen program aligns with your academic background. Common rejection reasons include weak financial documentation, vague SOPs, and study gaps without explanation letters.
                </p>
              </div>
            </section>

            {/* DOCUMENTS CHECKLIST */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-green-50 rounded-2xl"><CheckCircle size={26} className="text-green-600" /></div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">{countryName} Student Visa Documents Checklist</h2>
                  <p className="text-sm text-gray-400 mt-0.5">Standard requirements for most international student visa applications</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {generalDocs.map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-green-50/60 border border-green-100 rounded-2xl">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={12} className="text-white" />
                    </div>
                    <p className="text-sm text-gray-700 font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              {/* By Profession */}
              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Additional Documents by Profile</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {byProfession.map(({ role, items }) => (
                    <div key={role} className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
                      <h4 className="text-xs font-black text-gray-700 uppercase tracking-wider mb-3">{role}</h4>
                      <ul className="space-y-2">
                        {items.map((item, i) => (
                          <li key={i} className="text-xs text-gray-500 flex gap-2 leading-relaxed">
                            <span className="text-green-500 shrink-0 mt-0.5">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* LANGUAGE REQUIREMENTS */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-indigo-50 rounded-2xl"><Languages size={26} className="text-indigo-600" /></div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">English Language Requirements — {countryName}</h2>
                  <p className="text-sm text-gray-400 mt-0.5">Required test scores for {countryName} student visa and university admission</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 border-l-4 border-indigo-100 pl-4">
                For English-medium programs in {countryName}, standardized English test scores are mandatory for both university admission and student visa applications. Check your target institution's specific requirements as minimum scores vary.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {langTests.map((test, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 hover:bg-white hover:shadow-md transition-all">
                    <p className="font-black text-indigo-900 mb-2 text-base">{test.name}</p>
                    <div className="space-y-1 mb-3">
                      <p className="text-xs font-bold text-indigo-700">Min Score: {test.min}</p>
                      <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-tight">Competitive: {test.target}</p>
                    </div>
                    <p className="text-[10px] text-gray-500 leading-relaxed">{test.note}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* BANK BALANCE GUIDE */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-50 rounded-2xl"><Wallet size={26} className="text-blue-600" /></div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">How Much Bank Balance for {countryName} Student Visa?</h2>
                  <p className="text-sm text-gray-400 mt-0.5">Financial requirements for Bangladeshi student visa applicants</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {bankBalance.map(({ label, val, color }) => (
                  <div key={label} className={`bg-${color}-50 border border-${color}-100 rounded-2xl p-5`}>
                    <p className={`text-[9px] font-black uppercase tracking-widest text-${color}-500 mb-2`}>{label}</p>
                    <p className="text-sm font-black text-gray-800 leading-snug">{val}</p>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 flex gap-3">
                <TriangleAlert size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 font-medium leading-relaxed">
                  <strong>Critical:</strong> Never deposit a large lump sum right before applying. Embassy officers scrutinize transaction patterns — sudden spikes are flagged as red signals. Build a consistent, growing balance over 6–12 months.
                </p>
              </div>
            </section>

            {/* STEP-BY-STEP ROADMAP */}
            <section className="bg-[#1A1A1A] text-white rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden shadow-2xl">
              <Plane className="absolute top-10 right-10 text-white opacity-5 rotate-45" size={200} />
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-[#f5c800] rounded-2xl text-black"><ListOrdered size={28} /></div>
                <div>
                  <h2 className="text-2xl font-black tracking-tight">{countryName} Student Visa — Step by Step</h2>
                  <p className="text-gray-500 text-sm mt-0.5">Complete application roadmap for Bangladeshi students</p>
                </div>
              </div>
              <div className="grid gap-6 relative z-10">
                {steps.map((s, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 font-black text-sm group-hover:bg-[#f5c800] group-hover:text-black group-hover:border-[#f5c800] transition-all">
                      {s.n}
                    </div>
                    <div className="pt-2">
                      <p className="font-black text-white text-sm mb-1">{s.title}</p>
                      <p className="text-gray-400 text-xs font-medium leading-relaxed group-hover:text-gray-300">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* REJECTION RISKS */}
            <section className="bg-red-50 border border-red-100 rounded-[2rem] p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-red-100 rounded-xl"><AlertTriangle size={22} className="text-red-600" /></div>
                <div>
                  <h2 className="text-2xl font-black text-red-900">Common Student Visa Rejection Reasons</h2>
                  <p className="text-sm text-red-400 mt-0.5">Why Bangladeshi students get rejected — and how to avoid it</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  "Weak Statement of Purpose — fails to prove genuine study intent and post-study career plan in Bangladesh",
                  "Insufficient financial proof — inconsistent bank statements or large unexplained deposits",
                  "Program mismatch — chosen course doesn't align with previous academic background",
                  "Undisclosed prior visa rejections — considered misrepresentation by embassies",
                  "Weak 'home ties' — no evidence of family, property, or employment ties to Bangladesh",
                  "Missing or incorrect documents — incomplete applications are automatically rejected",
                ].map((risk, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-white border border-red-100 rounded-xl">
                    <span className="text-red-400 shrink-0 font-black text-sm mt-0.5">0{i+1}.</span>
                    <p className="text-sm text-red-800 font-medium leading-relaxed">{risk}</p>
                  </div>
                ))}
              </div>
              <div className="p-5 bg-green-50 border border-green-200 rounded-2xl">
                <p className="text-xs font-black text-green-700 uppercase tracking-wider mb-2">✅ How to Maximize Approval Chances</p>
                <p className="text-sm text-green-800 font-medium leading-relaxed">
                  Write a highly specific SOP linking the {countryName} degree to a clear career path in Bangladesh. Maintain consistent banking history for 6–12 months, explain any study gaps with genuine letters, and ensure every document is consistent with your stated travel dates and purpose.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-purple-50 rounded-xl"><HelpCircle size={22} className="text-purple-600" /></div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">{countryName} Student Visa FAQ — Bangladesh</h2>
                  <p className="text-sm text-gray-400 mt-0.5">Most asked questions from Bangladeshi students applying to study in {countryName}</p>
                </div>
              </div>
              <div className="space-y-4">
                {faqs.map((item, i) => (
                  <details key={i} className="group bg-gray-50 border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#f5c800]/60 transition-all">
                    <summary className="list-none flex items-center justify-between p-6 cursor-pointer">
                      <span className="font-black text-gray-800 pr-4 leading-snug text-sm">
                        <span className="text-amber-500 mr-2">Q.</span>{item.q}
                      </span>
                      <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shrink-0 group-open:bg-[#f5c800] group-open:border-[#f5c800] transition-all">
                        <ChevronRight size={14} className="text-gray-500 group-open:text-black rotate-90" />
                      </div>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 ml-8">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* SEO BOTTOM ARTICLE */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full" />
                <h2 className="text-2xl font-black text-gray-900">Study in {countryName} from Bangladesh — {currentYear} Complete Guide</h2>
              </div>
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  Pursuing a <strong className="text-gray-800">degree in {countryName}</strong> is increasingly popular among Bangladeshi students seeking quality higher education and international career prospects. The student visa or study permit application process requires careful preparation, typically taking 2–4 months from admission to visa approval.
                </p>
                <h3 className="text-lg font-black text-gray-800">{countryName} Student Visa Fee for Bangladeshi Students</h3>
                <p>
                  Student visa fees for {countryName} vary by program level and nationality. Embassy application fees are generally non-refundable. VFS Global service charges (BDT 1,500–4,000 approximately) apply on top. Contact our consultants for the current exact fee structure for {countryName}.
                </p>
                <h3 className="text-lg font-black text-gray-800">Scholarships to Study in {countryName} for Bangladeshi Students</h3>
                <p>
                  Many {countryName} universities and government bodies offer scholarships to international students from Bangladesh. These range from partial tuition waivers to fully-funded programs covering tuition, living costs, and travel. Our consultants can guide you to the best funding options available for {currentYear} intake.
                </p>
                <h3 className="text-lg font-black text-gray-800">Can Eammu Help with My {countryName} Student Visa?</h3>
                <p>
                  Yes — our experienced student visa consultants in Dhaka handle the complete process including university selection, application assistance, document preparation, SOP writing, and visa submission. WhatsApp us or email <strong className="text-gray-800">support@eammu.com</strong> to start today.
                </p>
              </div>
            </section>

          </div>

          {/* ── SIDEBAR ── */}
          <aside className="lg:col-span-4 space-y-6">

            {/* CTA */}
            <div className="bg-[#1A1A1A] rounded-[2rem] p-7 text-white sticky top-6 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#f5c800]/10 rounded-full blur-3xl -mr-20 -mt-20" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-[#f5c800]/20 border border-[#f5c800]/30 rounded-2xl flex items-center justify-center">
                    <MessageCircle size={20} className="text-[#f5c800]" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg leading-none">Free Consultation</h3>
                    <p className="text-gray-400 text-xs font-bold mt-0.5">Reply within 2 hours</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-6">
                  Not sure about <strong className="text-white/80">{countryName}</strong> student visa requirements? Our expert consultants know the latest rules and will guide you step by step.
                </p>
                {[
                  { icon: "🎓", label: "Service", val: "Full student visa support" },
                  { icon: "📈", label: "Success Rate", val: "98% approved" },
                  { icon: "💬", label: "Response", val: "Within 2 hours" },
                  { icon: "📋", label: "Includes", val: "SOP review + doc check" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 bg-white/5 border border-white/10 rounded-2xl mb-2">
                    <span className="text-lg">{s.icon}</span>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-[#f5c800]">{s.label}</p>
                      <p className="font-black text-white text-sm">{s.val}</p>
                    </div>
                  </div>
                ))}
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 mt-4 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black transition-all shadow-xl active:scale-95 mb-2 group text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  WhatsApp — {countryName} Visa
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-[9px] text-center text-gray-500 font-bold">FREE ADVICE · NO UPFRONT FEES · EXPERT TEAM</p>
              </div>
            </div>

            {/* QUICK TIPS */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 rounded-[2rem] p-7">
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb size={20} className="text-amber-600" />
                <h3 className="font-black text-gray-900 text-base">Expert Tips for {countryName} Student Visa</h3>
              </div>
              <div className="space-y-4">
                {[
                  "Start banking 6–12 months before applying. Consistent history beats a large single deposit every time.",
                  "Your SOP should explain a clear career path back to Bangladesh — 'dual intent' is key.",
                  "Apply to 3–5 universities simultaneously. Having multiple offers strengthens your visa profile.",
                  "Include previous international visa approvals (if any) — they significantly boost confidence.",
                  "Book a flight itinerary (not ticket) and provisional accommodation before submitting.",
                ].map((tip, i) => (
                  <div key={i} className="flex gap-3 bg-white rounded-2xl p-4 border border-amber-100 shadow-sm">
                    <span className="text-base font-black text-amber-200 shrink-0">0{i+1}</span>
                    <p className="text-xs text-gray-700 font-medium leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* EMAIL CONTACT */}
            <div className="bg-[#f5c800] rounded-[2rem] p-7 text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h4 className="font-black text-xl text-black mb-2">Ready to Study in {countryName}?</h4>
              <p className="text-black/70 text-xs leading-relaxed mb-5">
                Our student visa specialists handle everything — admission support, SOP writing, document review, and full visa application for {countryName}.
              </p>
              <a href="mailto:support@eammu.com" className="block bg-black text-white py-3 rounded-xl font-black text-sm hover:bg-gray-800 transition mb-3">
                📧 support@eammu.com
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="block bg-green-600 text-white py-3 rounded-xl font-black text-sm hover:bg-green-700 transition">
                💬 WhatsApp Now
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="bg-gray-900 py-16 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <img src={country.flag} alt={`Study in ${countryName}`} className="w-20 h-14 object-cover rounded-xl mx-auto mb-5 shadow-xl" />
          <h2 className="text-3xl font-black text-white mb-3">Plan Your Studies in {countryName}</h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-sm">
            Let our student visa experts guide your complete journey — from university selection to visa approval. 98% success rate for Bangladeshi students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black transition-all text-sm">
              Start Application via WhatsApp →
            </a>
            <Link href="/study-abroad/student-visa" className="inline-flex items-center justify-center px-8 py-5 border-2 border-white/20 text-white rounded-2xl font-black hover:bg-white/10 transition-all text-sm">
              Browse All Countries
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default async function StudentVisaSlugPage({ params }) {
  const { slug } = await params;
  const cleanSlug = slug.replace(/-student-visa$/, "").replace(/-visa$/, "");
  const country = countries.find((c) => createSlug(c.country) === cleanSlug);

  // Country not found at all — hard 404
  if (!country) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-10">
        <div className="text-7xl mb-6">🎓</div>
        <h1 className="text-3xl font-black text-gray-900 mb-3">Country Not Found</h1>
        <p className="text-gray-500 mb-8">We couldn't find that destination. Please browse all countries.</p>
        <Link href="/study-abroad/student-visa" className="px-8 py-4 bg-green-600 text-white rounded-2xl font-black hover:bg-green-700 transition">← Browse All Countries</Link>
      </div>
    );
  }

  const d = visadata[cleanSlug];
  const countryName = country.country;
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/8801631312524?text=${encodeURIComponent(`Hi, I want to apply for a ${countryName} Student Visa. I checked the guide on Eammu Holidays.`)}`;

  // ── FALLBACK: country exists but no visa data ──
  if (!d) {
    return <FallbackStudentVisaPage country={country} whatsappUrl={whatsappUrl} />;
  }

  // ── FULL DATA PAGE ────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen text-[#2D2D2D] font-sans bg-[#F9FAFB]">

      {/* ── HERO ── */}
      <div className="relative bg-[#dabeff] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-black/40 font-semibold mb-8 flex-wrap">
            <Link href="/" className="hover:text-black/70 transition">Home</Link>
            <ChevronRight size={12} />
            <Link href="/study-abroad/student-visa" className="hover:text-black/70 transition">Student Visa</Link>
            <ChevronRight size={12} />
            <span className="text-black/60">{countryName}</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 text-white">
            <div className="relative group shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
              <div className="relative w-72 h-44 bg-white p-2 rounded-2xl shadow-2xl overflow-hidden">
                <img src={country.flag} alt={`Study in ${countryName} from Bangladesh`} className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase border border-white/30 tracking-widest">Academic Year {currentYear}</span>
                <span className="bg-[#f5c800] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{d?.visa_category_details?.visa_type}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-4 italic tracking-tighter drop-shadow-lg">
                <span className="text-[#f5c800]">Study in</span> {countryName}
              </h1>
              <p className="text-xl md:text-2xl font-semibold opacity-90 mb-3">{d?.title}</p>
              <p className="max-w-3xl opacity-80 leading-relaxed mb-5 font-light text-sm">{d?.description}</p>
              <div className="flex items-center justify-center md:justify-start gap-4 text-xs font-mono opacity-60">
                <Calendar size={13} /> Updated: {d?.last_updated}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── QUICK STATS ── */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: "COE Processing", val: d?.processing_and_approval_metrics?.coe_processing_time, icon: <Clock className="text-blue-600" size={22} /> },
          { label: "Approval Rate", val: d?.processing_and_approval_metrics?.approval_chances, icon: <GraduationCap className="text-green-600" size={22} /> },
          { label: "Part-Time Work", val: d?.work_rights_and_stay?.part_time_permission, icon: <Briefcase className="text-amber-600" size={22} /> },
          { label: "Visa Category", val: d?.visa_category_details?.main_category, icon: <ShieldCheck className="text-purple-600" size={22} /> },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-2">{stat.icon}</div>
            <p className="text-[9px] uppercase text-gray-400 font-black mb-1 tracking-widest">{stat.label}</p>
            <p className="text-xs font-black text-gray-800 leading-snug">{stat.val}</p>
          </div>
        ))}
      </div>

      {/* ── MAIN GRID ── */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* LEFT / MAIN */}
          <div className="lg:col-span-8 space-y-10">

            {/* SCHOLARSHIPS */}
            {d?.scholarship_ecosystem_2026 && (
              <section className="bg-white rounded-[2.5rem] shadow-sm p-10 border border-gray-100">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-yellow-50 rounded-2xl text-yellow-600"><Award size={32} /></div>
                  <div>
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">{countryName} Scholarships for Bangladeshi Students {currentYear}</h2>
                    <p className="text-gray-400 text-sm mt-0.5">Government and private funding opportunities</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {d.scholarship_ecosystem_2026.government_funded?.map((sch, i) => (
                    <div key={i} className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100 relative overflow-hidden group">
                      <div className="absolute -right-4 -top-4 text-blue-100 opacity-20 group-hover:scale-110 transition-transform"><Award size={120} /></div>
                      <h3 className="text-blue-900 font-black text-xl mb-3">{sch.name}</h3>
                      <p className="text-sm text-blue-800/80 mb-4 leading-relaxed">{sch.benefits}</p>
                      <div className="flex flex-wrap gap-4 items-center">
                        <span className="text-[10px] bg-white text-blue-600 px-4 py-1.5 rounded-full font-black shadow-sm uppercase border border-blue-100">Window: {sch.application_window}</span>
                        <p className="text-[10px] text-blue-400 font-medium">Criteria: {sch.selection_criteria}</p>
                      </div>
                    </div>
                  ))}
                  <div className="grid md:grid-cols-2 gap-6">
                    {d.scholarship_ecosystem_2026.private_and_partial?.map((sch, i) => (
                      <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                        <h4 className="font-black text-gray-800 mb-2 uppercase text-xs tracking-widest">{sch.name}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{sch.benefits}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* LANGUAGE TESTS */}
            {d?.english_language_test_requirements_2026 && (
              <section className="bg-white rounded-[2.5rem] shadow-sm p-10 border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600"><Languages size={30} /></div>
                  <div>
                    <h2 className="text-2xl font-black text-gray-900">English Test Requirements — {countryName} Student Visa</h2>
                    <p className="text-gray-400 text-sm mt-0.5">IELTS, PTE, TOEFL and Duolingo minimum scores for {currentYear}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-8 border-l-4 border-indigo-100 pl-4 leading-relaxed">{d.english_language_test_requirements_2026.overview}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { name: "IELTS Academic", data: d.english_language_test_requirements_2026.ielts_academic },
                    { name: "PTE Academic", data: d.english_language_test_requirements_2026.pte_academic },
                    { name: "Duolingo DET", data: d.english_language_test_requirements_2026.duolingo_det },
                    { name: "TOEFL iBT", data: d.english_language_test_requirements_2026.toefl_ibt },
                  ].map((test, i) => test.data && (
                    <div key={i} className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 hover:bg-white hover:shadow-md transition-all">
                      <p className="font-black text-indigo-900 mb-3 text-base">{test.name}</p>
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-indigo-700">Min: {test.data.min_score}</p>
                        <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-tight">Target: {test.data.competitive_score}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* DOCUMENTS */}
            <section className="bg-white rounded-[2.5rem] shadow-sm p-10 border border-gray-100">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-green-50 rounded-2xl text-green-600"><BookOpen size={30} /></div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">{countryName} Student Visa Documents — Complete Checklist</h2>
                  <p className="text-gray-400 text-sm mt-0.5">All required documents for Bangladeshi applicants</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-blue-600 font-black text-xs uppercase tracking-[0.2em] border-b pb-4 mb-5">Embassy Submission</h3>
                  <div className="space-y-3">
                    {d.comprehensive_requirements_checklist?.embassy_submission_docs?.map((doc, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-blue-50/50 border border-blue-100 rounded-2xl">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shrink-0 mt-0.5"><CheckCircle size={11} className="text-white" /></div>
                        <p className="text-xs text-gray-700 font-medium leading-relaxed">{doc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-green-600 font-black text-xs uppercase tracking-[0.2em] border-b pb-4 mb-5">COE / Financial Phase</h3>
                  <div className="space-y-3">
                    {d.comprehensive_requirements_checklist?.coe_phase_documents?.map((doc, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-green-50/50 border border-green-100 rounded-2xl">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5"><CheckCircle size={11} className="text-white" /></div>
                        <p className="text-xs text-gray-700 font-medium leading-relaxed">{doc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ROADMAP */}
            {d?.step_by_step_application_roadmap && (
              <section className="bg-[#1A1A1A] text-white rounded-[3rem] p-12 relative overflow-hidden shadow-2xl">
                <Plane className="absolute top-10 right-10 text-white opacity-5 rotate-45" size={200} />
                <div className="flex items-center gap-4 mb-12">
                  <div className="p-3 bg-[#f5c800] rounded-2xl text-black"><ListOrdered size={28} /></div>
                  <div>
                    <h2 className="text-2xl font-black">{countryName} Study Permit — Step by Step Application</h2>
                    <p className="text-gray-500 text-sm mt-0.5">Official process for Bangladeshi students</p>
                  </div>
                </div>
                <div className="grid gap-8 relative z-10">
                  {Object.entries(d.step_by_step_application_roadmap).map(([key, step], i) => (
                    <div key={key} className="flex gap-8 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 font-black text-xl group-hover:bg-[#f5c800] group-hover:text-black transition-all">
                        {i + 1}
                      </div>
                      <div className="pt-2">
                        <p className="text-gray-300 text-sm font-medium leading-relaxed group-hover:text-white">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* REJECTION RISKS */}
            <section className="bg-red-50 rounded-[2.5rem] p-10 border border-red-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-red-100 rounded-2xl text-red-600"><AlertTriangle size={28} /></div>
                <div>
                  <h2 className="text-2xl font-black text-red-900">{countryName} Student Visa Rejection Reasons</h2>
                  <p className="text-red-400 text-sm mt-0.5">Common mistakes Bangladeshi applicants make</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  {d.rejection_risk_matrix?.high_risk_reasons?.map((risk, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 bg-white border border-red-100 rounded-xl">
                      <span className="text-red-400 font-black text-xs shrink-0">0{i+1}.</span>
                      <p className="text-xs font-bold text-red-900/80 leading-relaxed">{risk}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-red-200 flex flex-col justify-center">
                  <p className="text-[10px] font-black text-green-700 uppercase mb-3 tracking-widest">✅ How to Get Approved</p>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">{d.rejection_risk_matrix?.mitigation_strategy}</p>
                </div>
              </div>
            </section>

            {/* YOUTUBE */}
            {d?.youtube_video_options?.length > 0 && (
              <section>
                <h2 className="text-2xl font-black text-gray-900 mb-6">
                  Study in {countryName} — Watch & Learn
                </h2>
                <div className="grid md:grid-cols-3 gap-5">
                  {d.youtube_video_options.map((video, i) => {
                    const getYouTubeId = (url) => {
                      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                      const match = url?.match(regExp);
                      return (match && match[2]?.length === 11) ? match[2] : null;
                    };
                    const videoId = getYouTubeId(video.video_link);
                    const thumbUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
                    return (
                      <a key={i} href={video.video_link} target="_blank" rel="noopener noreferrer"
                        className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#f5c800] shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="relative aspect-video bg-gray-100 overflow-hidden">
                          {thumbUrl && <img src={thumbUrl} alt={video.video_title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 flex items-center justify-center">
                            <div className="w-14 h-14 bg-[#f5c800] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                              <svg className="w-6 h-6 fill-black ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="font-black text-sm text-gray-800 group-hover:text-amber-600 line-clamp-2 mb-2 transition-colors">{video.video_title}</h3>
                          <span className="text-xs font-bold text-gray-400 group-hover:text-amber-500 transition-colors">Watch on YouTube →</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </section>
            )}

            {/* FAQ */}
            {d?.faq_student_edition?.length > 0 && (
              <section className="bg-white rounded-[2.5rem] shadow-sm p-10 border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 bg-blue-50 rounded-xl"><HelpCircle size={24} className="text-blue-600" /></div>
                  <div>
                    <h2 className="text-2xl font-black text-gray-900">{countryName} Student Visa FAQ — Bangladesh</h2>
                    <p className="text-gray-400 text-sm mt-0.5">Answers to questions Bangladeshi students ask most</p>
                  </div>
                </div>
                <div className="space-y-5">
                  {d.faq_student_edition.map((faq, i) => (
                    <details key={i} className="group bg-gray-50 border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#f5c800]/60 transition-all">
                      <summary className="list-none flex items-center justify-between p-6 cursor-pointer">
                        <span className="font-black text-gray-900 pr-4 text-sm group-hover:text-blue-600 transition-colors">
                          <span className="text-blue-500 mr-2">Q.</span>{faq.question}
                        </span>
                        <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shrink-0 group-open:bg-[#f5c800] group-open:border-[#f5c800] transition-all">
                          <ChevronRight size={14} className="text-gray-500 group-open:text-black rotate-90" />
                        </div>
                      </summary>
                      <div className="px-6 pb-6 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 ml-8 border-l-2 border-l-blue-100">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* ── SIDEBAR ── */}
          <aside className="lg:col-span-4 space-y-6">

            {/* FINANCIAL SOLVENCY */}
            <div className="bg-[#1A1A1A] p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden sticky top-6">
              <Landmark className="absolute -top-6 -right-6 text-white/5" size={150} />
              <h3 className="text-lg font-black mb-6 text-[#f5c800] uppercase tracking-tight flex items-center gap-2">
                <CreditCard size={18} /> Financial Requirements
              </h3>
              <div className="space-y-4 relative z-10">
                <div>
                  <p className="text-[10px] uppercase text-gray-500 font-black tracking-widest mb-1">Minimum Balance Required</p>
                  <p className="text-3xl font-black text-white italic leading-none mb-1">
                    {d?.financial_solvency_thresholds?.self_funded_min_balance?.split(' ').slice(0, 2).join(' ')}
                  </p>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{d?.financial_solvency_thresholds?.self_funded_min_balance}</p>
                </div>
                <div className="pt-5 border-t border-white/10 space-y-3">
                  <div className="flex gap-3 items-start bg-white/5 border border-white/10 rounded-xl p-4">
                    <Info size={14} className="text-[#f5c800] shrink-0 mt-0.5" />
                    <p className="text-[11px] text-gray-400 leading-relaxed">{d?.financial_solvency_thresholds?.bank_history_requirement}</p>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-relaxed pl-1">{d?.financial_solvency_thresholds?.logic}</p>
                </div>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#f5c800] hover:bg-white text-black py-4 rounded-2xl font-black transition-all shadow-lg no-underline mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  Apply via WhatsApp
                  <ArrowRightCircle size={18} />
                </a>
                <p className="text-[9px] text-center text-gray-600 font-bold">FREE ADVICE · NO UPFRONT FEES</p>
              </div>
            </div>

            {/* WORK RIGHTS */}
            {d?.work_rights_and_stay && (
              <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
                <Briefcase className="absolute -bottom-4 -left-4 text-white opacity-10" size={120} />
                <h3 className="font-black text-lg mb-6 uppercase tracking-tight flex items-center gap-2">
                  <Briefcase size={18} /> Work Rights in {countryName}
                </h3>
                <div className="space-y-3 relative z-10">
                  <div className="bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/10">
                    <p className="text-[9px] uppercase opacity-60 font-black mb-1 tracking-widest">During Semester</p>
                    <p className="font-black text-base">{d.work_rights_and_stay.part_time_permission}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/10">
                    <p className="text-[9px] uppercase opacity-60 font-black mb-1 tracking-widest">Academic Breaks</p>
                    <p className="font-black text-base">{d.work_rights_and_stay.vacation_hours}</p>
                  </div>
                  {d.work_rights_and_stay.post_study_work && (
                    <div className="bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/10">
                      <p className="text-[9px] uppercase opacity-60 font-black mb-1 tracking-widest">Post Study Work</p>
                      <p className="font-bold text-sm text-blue-100">{d.work_rights_and_stay.post_study_work}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TIPS */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-[2.5rem] border border-amber-100 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <Lightbulb className="text-amber-500" size={22} />
                <h3 className="font-black text-gray-900 text-base">Expert Advice</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed font-medium border-l-2 border-amber-300 pl-4 mb-4">
                {d?.faq_student_edition?.[0]?.answer}
              </p>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Maintain your minimum balance consistently for 12 months for a strong financial solvency profile.
              </p>
            </div>

            {/* EMAIL */}
            <div className="bg-[#f5c800] rounded-[2rem] p-7 text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h4 className="font-black text-xl text-black mb-2">Ready to Study in {countryName}?</h4>
              <p className="text-black/70 text-xs leading-relaxed mb-5">
                Our experts handle admission support, SOP writing, document review and full visa application for {countryName}.
              </p>
              <a href="mailto:support@eammu.com" className="block bg-black text-white py-3 rounded-xl font-black text-sm hover:bg-gray-800 transition mb-3">
                📧 support@eammu.com
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="block bg-green-600 text-white py-3 rounded-xl font-black text-sm hover:bg-green-700 transition">
                💬 WhatsApp Now
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="bg-gray-900 py-16 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <img src={country.flag} alt={`Study in ${countryName}`} className="w-20 h-14 object-cover rounded-xl mx-auto mb-5 shadow-xl" />
          <h2 className="text-3xl font-black text-white mb-3">Ready to Study in {countryName}?</h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-sm">
            Let our student visa experts handle your complete journey — from university shortlisting to visa stamping — with a 98% approval rate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black transition-all text-sm">
              Start Application via WhatsApp →
            </a>
            <Link href="/study-abroad/student-visa" className="inline-flex items-center justify-center px-8 py-5 border-2 border-white/20 text-white rounded-2xl font-black hover:bg-white/10 transition-all text-sm">
              Browse Other Countries
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
