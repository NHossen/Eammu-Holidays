// app/study-abroad/student-visa/[slug]/page.jsx
// ✅ SERVER COMPONENT — generateMetadata + full page
// Targets every "[country] student visa Bangladesh" search query

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
  MessageCircle, Wallet, FileText, Star, BadgeCheck,
  Building2, Banknote, Clock3, Target, BookMarked,
  Stethoscope, Home
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA — dynamic per country
// ─────────────────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cleanSlug = slug.replace(/-student-visa$/, "").replace(/-visa$/, "");
  const country = countries.find((c) => createSlug(c.country) === cleanSlug);
  const d = visadata[cleanSlug];

  const countryName = country?.country || "International";
  const currentYear = new Date().getFullYear();

  const defaultTitle = `${countryName} Student Visa for Bangladeshi Students ${currentYear} — Requirements, Fees & Scholarships | Eammu Holidays`;
  const defaultDesc = `Complete ${currentYear} guide to the ${countryName} student visa for Bangladesh passport holders. IELTS/PTE scores, bank balance required, processing time, scholarships, documents checklist, SOP tips, and step-by-step application process. 98% approval rate.`;

  const keywords = d?.seo_keywords?.join(", ") ||
    `${countryName} student visa Bangladesh ${currentYear}, study in ${countryName} from Bangladesh, ${countryName} student visa requirements Bangladesh, ${countryName} scholarship Bangladeshi students ${currentYear}, ${countryName} student visa bank balance, how to apply ${countryName} student visa Bangladesh, ${countryName} study permit Bangladesh, ${countryName} IELTS requirement student visa, ${countryName} student visa processing time Bangladesh, ${countryName} student visa rejection reasons Bangladesh, ${countryName} student visa fee Bangladesh, study abroad Bangladesh ${countryName}, ${countryName} university admission Bangladesh, student visa consultancy Bangladesh ${countryName}`;

  return {
    metadataBase: new URL("https://eammu.com"),

    title: d?.title || defaultTitle,

    description: d?.description || defaultDesc,

    keywords,

    alternates: {
      canonical: `https://eammu.com/study-abroad/student-visa/${cleanSlug}`,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },

    openGraph: {
      type: "article",
      url: `https://eammu.com/study-abroad/student-visa/${cleanSlug}`,
      siteName: "Eammu Holidays",
      title: `Study in ${countryName} — Student Visa Guide for Bangladesh ${currentYear} | Eammu Holidays`,
      description: defaultDesc,
      images: [
        { url: country?.flag || "/eammu_banner_four.webp", width: 1200, height: 630, alt: `Study in ${countryName} — student visa Bangladesh ${currentYear}` },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@EammuHolidays",
      title: `${countryName} Student Visa Bangladesh ${currentYear} | Eammu Holidays`,
      description: defaultDesc,
      images: [country?.flag || "/eammu_banner_four.webp"],
    },

    icons: { icon: "/emf.jpg", apple: "/emf.jpg" },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA GENERATOR — per country
// ─────────────────────────────────────────────────────────────────────────────
function buildSchemas(country, d, cleanSlug) {
  const countryName = country.country;
  const currentYear = new Date().getFullYear();
  const pageUrl = `https://eammu.com/study-abroad/student-visa/${cleanSlug}`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://eammu.com/#organization",
    name: "Eammu Holidays",
    url: "https://eammu.com",
    logo: { "@type": "ImageObject", url: "https://eammu.com/emf.jpg" },
    description: `Bangladesh's leading student visa consultancy with 98% approval rate for ${countryName} and 200+ destinations.`,
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "3241", bestRating: "5" },
    address: [
      { "@type": "PostalAddress", addressLocality: "Cumilla", addressCountry: "BD" },
      { "@type": "PostalAddress", addressLocality: "Dubai",   addressCountry: "AE" },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",          item: "https://eammu.com" },
      { "@type": "ListItem", position: 2, name: "Study Abroad",  item: "https://eammu.com/study-abroad" },
      { "@type": "ListItem", position: 3, name: "Student Visa",  item: "https://eammu.com/study-abroad/student-visa" },
      { "@type": "ListItem", position: 4, name: `${countryName} Student Visa Bangladesh ${currentYear}`, item: pageUrl },
    ],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}/#webpage`,
    url: pageUrl,
    name: `${countryName} Student Visa for Bangladeshi Students ${currentYear} — Requirements, Fees & Scholarships`,
    description: `Complete ${currentYear} guide to the ${countryName} student visa for Bangladesh passport holders.`,
    inLanguage: "en-US",
    dateModified: d?.last_updated || new Date().toISOString().split("T")[0],
    isPartOf: { "@type": "WebSite", "@id": "https://eammu.com/#website", name: "Eammu Holidays", url: "https://eammu.com" },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["#page-heading", "#faq-heading", "#checklist-heading"] },
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}/#service`,
    serviceType: `${countryName} Student Visa Consultancy for Bangladeshi Students`,
    name: `${countryName} Student Visa from Bangladesh — Expert Consultancy`,
    description: `Professional ${countryName} student visa consultancy for Bangladeshi students. Document preparation, SOP writing, university admission support, and complete visa application handling.`,
    provider: { "@id": "https://eammu.com/#organization" },
    areaServed: { "@type": "Country", name: "Bangladesh" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "BDT", description: "Free initial consultation" },
  };

  const faqItems = d?.faq_student_edition?.map(f => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })) || [
    {
      "@type": "Question",
      name: `Do Bangladeshi students need a visa to study in ${countryName}?`,
      acceptedAnswer: { "@type": "Answer", text: `Yes, Bangladeshi students need a student visa or study permit to study in ${countryName}. Contact Eammu Holidays for exact current requirements.` },
    },
    {
      "@type": "Question",
      name: `How much bank balance is needed for ${countryName} student visa?`,
      acceptedAnswer: { "@type": "Answer", text: `Most countries require proof of full first-year tuition plus living expenses. For ${countryName}, maintain a consistent 6–12 month banking history. Eammu Holidays can advise on the exact amount.` },
    },
    {
      "@type": "Question",
      name: `What IELTS score is needed for ${countryName} student visa?`,
      acceptedAnswer: { "@type": "Answer", text: `IELTS Academic scores of 6.0–7.0 are typically required for ${countryName} universities. PTE, TOEFL, and Duolingo are also accepted by many institutions. Check your target university's specific requirement.` },
    },
    {
      "@type": "Question",
      name: `How long does ${countryName} student visa processing take from Bangladesh?`,
      acceptedAnswer: { "@type": "Answer", text: `${countryName} student visa processing typically takes 4–16 weeks from Bangladesh. Apply at least 3 months before your course start date. Eammu Holidays tracks current processing times.` },
    },
  ];

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems,
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Apply for ${countryName} Student Visa from Bangladesh`,
    description: `Step-by-step guide to getting a ${countryName} student visa for Bangladeshi students in ${currentYear}.`,
    step: [
      { "@type": "HowToStep", position: 1, name: "Choose program and university", text: `Research accredited ${countryName} institutions. Confirm the program is eligible for post-study work rights.`, url: pageUrl },
      { "@type": "HowToStep", position: 2, name: "Take language tests (IELTS/PTE)", text: "Score the minimum required by your target university. IELTS 6.0–7.0 is typical for most destinations." },
      { "@type": "HowToStep", position: 3, name: "Receive your admission offer letter", text: "Apply to 3–5 universities and secure a Letter of Acceptance (LOA) before applying for a visa." },
      { "@type": "HowToStep", position: 4, name: "Prepare financial documents", text: "Gather 6–12 months of bank statements, solvency certificate, and financial affidavit from your sponsor." },
      { "@type": "HowToStep", position: 5, name: "Write your Statement of Purpose (SOP)", text: "Explain your study goals, career plan, and why you will return to Bangladesh after graduation." },
      { "@type": "HowToStep", position: 6, name: "Submit visa application", text: `Apply at the ${countryName} embassy or VFS Global Dhaka with your complete document package.` },
      { "@type": "HowToStep", position: 7, name: "Complete biometrics and interview", text: "Some countries require biometric enrollment or an interview at the consulate in Dhaka." },
      { "@type": "HowToStep", position: 8, name: "Collect visa and book flight", text: "Receive your passport with visa stamp, arrange travel insurance, and begin your study journey." },
    ],
  };

  return { organization, breadcrumb, webPage, service, faq, howTo };
}

// ─────────────────────────────────────────────────────────────────────────────
// STATIC CONTENT — used in both full data and fallback pages
// ─────────────────────────────────────────────────────────────────────────────
const GENERAL_DOCS = [
  "Valid passport — minimum 6 months validity beyond your study duration",
  "University / College admission letter or Offer of Admission (LOA)",
  "Completed student visa application form (signed and dated)",
  "Recent passport-size photographs — white background, ICAO standard",
  "Academic certificates and transcripts (SSC, HSC, Bachelor's) — notarized and attested",
  "English language test scores: IELTS, PTE Academic, TOEFL iBT, or Duolingo (as required)",
  "Personal bank statement — last 6–12 months showing sufficient and consistent funds",
  "Sponsor's bank statement, solvency certificate, and income proof",
  "Statement of Purpose (SOP) — study goals, career plan, and intent to return to Bangladesh",
  "Financial affidavit or proof of scholarship / sponsorship letter",
  "Travel insurance covering the full duration of study",
  "Biometric appointment at VFS Global Dhaka (if required by destination country)",
];

const BY_PROFESSION = [
  {
    role: "Fresh Graduate",
    color: "blue",
    items: [
      "SSC & HSC certificates + all transcripts",
      "Bachelor's degree certificate + mark sheets",
      "Gap explanation letter (if any study gap exists)",
      "Parents' financial documents — bank statements & income proof",
    ],
  },
  {
    role: "Working Professional",
    color: "green",
    items: [
      "Current employer NOC (on company letterhead)",
      "Salary certificate and pay slips — last 6 months",
      "Income tax return (last 2–3 years)",
      "Employment verification letter with salary confirmation",
    ],
  },
  {
    role: "Self-Sponsored",
    color: "amber",
    items: [
      "Trade license (English translation + notary attestation)",
      "Business bank statement — last 6–12 months",
      "CA-certified financial statement",
      "Asset documents — land deeds, property papers",
    ],
  },
  {
    role: "Scholarship Holder",
    color: "purple",
    items: [
      "Official scholarship award letter",
      "University sponsor confirmation letter",
      "No-objection from sponsoring body",
      "Scholarship terms showing coverage amounts",
    ],
  },
];

const LANG_TESTS = [
  { name: "IELTS Academic", min: "6.0 – 6.5", target: "7.0+", note: "Most widely accepted globally. Preferred by UK, Australia, Canada" },
  { name: "PTE Academic",   min: "50 – 58",   target: "65+",  note: "Fast results (48hrs). Accepted by most universities worldwide" },
  { name: "TOEFL iBT",     min: "80 – 90",   target: "100+", note: "Preferred by USA and many Canadian universities" },
  { name: "Duolingo DET",  min: "100 – 110", target: "125+", note: "Accepted by 4,000+ universities. Cheapest and fastest option" },
];

const APPLICATION_STEPS = [
  { n: "01", title: "Research & Choose Your Program",     desc: "Select an accredited institution in your target country. Verify the program qualifies for post-study work rights. Check ranking, tuition, and scholarship eligibility." },
  { n: "02", title: "Pass Your English Language Test",   desc: "Book IELTS, PTE, TOEFL, or Duolingo at least 2–3 months before your application deadline. Meet both the overall and individual band score requirements." },
  { n: "03", title: "Apply to Universities (3–5 min)",  desc: "Submit applications to multiple universities simultaneously to maximize your chances. Secure your Letter of Acceptance (LOA) — this is the most critical document." },
  { n: "04", title: "Build Your Financial Evidence",     desc: "Maintain consistent bank statements for 6–12 months. Avoid large sudden deposits. Gather solvency certificate, income proof, and financial affidavit from your sponsor." },
  { n: "05", title: "Write a Powerful SOP",              desc: "Your Statement of Purpose must clearly link the destination country's degree to a specific career path back to Bangladesh. Officers are looking for genuine intent and 'home ties'." },
  { n: "06", title: "Submit Visa Application",           desc: "Apply at the embassy, VFS Global Dhaka, or JVAC with your complete document package. Pay the application fee — non-refundable regardless of outcome." },
  { n: "07", title: "Complete Biometrics (if required)", desc: "Many countries require biometric fingerprinting at a designated centre. Book your biometric appointment immediately after submitting your application." },
  { n: "08", title: "Collect Visa & Prepare to Travel",  desc: "Receive your passport with visa stamp. Arrange travel insurance, book your flight, confirm accommodation, and attend pre-departure orientation if offered." },
];

const REJECTION_RISKS = [
  { risk: "Weak Statement of Purpose", detail: "Fails to prove genuine study intent, career plan in Bangladesh, and why you chose that specific institution and program." },
  { risk: "Inconsistent financial proof", detail: "Large unexplained deposits, low balance, short banking history, or mismatched sponsor income vs. claimed sponsorship amount." },
  { risk: "Program mismatch", detail: "Chosen course doesn't logically connect to your previous academic background or stated career goals." },
  { risk: "Undisclosed visa rejections", detail: "Failing to declare prior visa rejections is treated as misrepresentation — an automatic refusal and potential ban." },
  { risk: "Weak home ties evidence", detail: "No family property, employment, or community ties to Bangladesh — the embassy questions your intention to return." },
  { risk: "Unexplained study gaps", detail: "Gap years or breaks in education without a formal explanation letter attached to your application." },
];

const EXPERT_TIPS = [
  { n: "01", tip: "Build banking history 6–12 months before applying. A consistent growing balance always beats a large last-minute deposit." },
  { n: "02", tip: "Your SOP must explain a clear career path back to Bangladesh. 'Dual intent' — genuine study purpose plus intention to return — is the key to approval." },
  { n: "03", tip: "Apply to 3–5 universities simultaneously. Multiple offer letters significantly strengthen your visa profile and give you alternatives." },
  { n: "04", tip: "Include any previous international visa approvals or stamps in your passport — they build credibility with embassy officers." },
  { n: "05", tip: "Book a flight itinerary (not a paid ticket) and provisional accommodation confirmation before submitting your application." },
  { n: "06", tip: "Get your SSC, HSC, and degree certificates officially attested and translated before application — this takes 3–4 weeks." },
];

const INTERNAL_LINKS = [
  { label: "Student Visa from Bangladesh (all countries)", href: "/our-services/visa-services/student-visa-from-bangladesh" },
  { label: "Study abroad hub",                             href: "/study-abroad" },
  { label: "All student visa destinations",               href: "/study-abroad/student-visa" },
  { label: "UK student visa",                             href: "/study-abroad/student-visa/united-kingdom" },
  { label: "USA student visa",                            href: "/study-abroad/student-visa/united-states" },
  { label: "Canada student visa",                         href: "/study-abroad/student-visa/canada" },
  { label: "Australia student visa",                      href: "/study-abroad/student-visa/australia" },
  { label: "Germany student visa",                        href: "/study-abroad/student-visa/germany" },
  { label: "Malaysia student visa",                       href: "/study-abroad/student-visa/malaysia" },
  { label: "Scholarships from Bangladesh",                href: "/scholarships" },
  { label: "IELTS & immigration center",                  href: "/target-ielts-immigration-center" },
  { label: "Tourist visa from Bangladesh",                href: "/visa" },
  { label: "Schengen visa 2026",                          href: "/schengen-visa" },
  { label: "Visa checklist generator",                    href: "/travel-resources/visa-checklist-generator" },
  { label: "Visa processing time tracker",                href: "/travel-resources/visa-processing-time-tracker" },
  { label: "Work visa from Bangladesh",                   href: "/our-services/visa-services/work-visa-from-bangladesh" },
  { label: "Visa rejection rates",                        href: "/visa-rejection" },
  { label: "Contact Bangladesh office",                   href: "/contact/travel-agency-bangladesh" },
  { label: "Contact Dubai office",                        href: "/contact/travel-agency-dubai" },
  { label: "Client testimonials",                         href: "/testimonials" },
  { label: "Flight booking Bangladesh",                   href: "/flight-booking" },
  { label: "Travel insurance Bangladesh",                 href: "/travel-insurance" },
  { label: "Online travel agency Bangladesh",             href: "/online-travel-agency-bangladesh" },
];

// ─────────────────────────────────────────────────────────────────────────────
// FALLBACK PAGE — country exists, no specific data yet
// ─────────────────────────────────────────────────────────────────────────────
function FallbackStudentVisaPage({ country, whatsappUrl, schemas }) {
  const countryName = country.country;
  const currentYear = new Date().getFullYear();

  const generalFaqs = [
    {
      q: `Do Bangladeshi students need a visa to study in ${countryName}?`,
      a: `Yes. Bangladeshi students require a student visa or study permit to enroll in ${countryName}. Requirements vary by program level and institution type. Contact our consultants for the exact 2026 policy for ${countryName}.`,
    },
    {
      q: `How much bank balance is needed for ${countryName} student visa?`,
      a: `Most countries require proof of full first-year tuition plus living expenses. For ${countryName}, this typically means BDT 3–10 lakh depending on the institution and city. A consistent 6–12 month banking history is equally critical.`,
    },
    {
      q: `Is IELTS mandatory for ${countryName} student visa?`,
      a: `IELTS Academic is widely accepted for ${countryName}. Many institutions also accept PTE Academic, TOEFL iBT, or Duolingo. Check the specific language requirement of your target university and the visa category for ${countryName}.`,
    },
    {
      q: `Can I work part-time while studying in ${countryName}?`,
      a: `Most popular study destinations allow 20–24 hours per week during the semester and full-time during official academic breaks. Rules vary by country — our consultants can confirm the current work rights policy for ${countryName}.`,
    },
    {
      q: `How long does ${countryName} student visa processing take from Bangladesh?`,
      a: `Processing times range from 4–16 weeks depending on the country, season, and completeness of your application. Apply at least 3 months before your course start date. Use our visa processing time tracker for current data.`,
    },
    {
      q: `What is a Statement of Purpose and why is it important for ${countryName} student visa?`,
      a: `A Statement of Purpose (SOP) is a 600–1000 word personal essay explaining why you want to study a specific course at a specific institution in ${countryName}, your career plan, and why you will return to Bangladesh after graduation. A weak SOP is the #1 reason for student visa rejections.`,
    },
    {
      q: `Can Eammu Holidays help with my ${countryName} student visa application?`,
      a: `Yes. Eammu Holidays provides complete ${countryName} student visa support — university selection, application assistance, document preparation, SOP writing, financial document review, and visa submission. Our 98% approval rate reflects the quality of our preparation. Contact our Cumilla office or Dubai branch.`,
    },
    {
      q: `Are there scholarships to study in ${countryName} for Bangladeshi students?`,
      a: `Yes. Many ${countryName} universities and government bodies offer scholarships for international students including Bangladeshis. These range from partial tuition waivers to fully-funded programs. Our consultants can guide you to the best funding options available for ${currentYear} intake.`,
    },
  ];

  return (
    <>
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.howTo) }} />

      <div className="min-h-screen bg-[#F9FAFB] text-[#2D2D2D] font-sans">

        {/* ── HERO ── */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#f5c800]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full" />

          <div className="max-w-7xl mx-auto px-5 py-16 md:py-24 relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-xs text-white/40 font-semibold mb-8 flex-wrap"
                itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/" className="hover:text-white/70 transition" itemProp="item"><span itemProp="name">Home</span></Link>
                  <meta itemProp="position" content="1" />
                </li>
                <ChevronRight size={12} />
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/study-abroad" className="hover:text-white/70 transition" itemProp="item"><span itemProp="name">Study Abroad</span></Link>
                  <meta itemProp="position" content="2" />
                </li>
                <ChevronRight size={12} />
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/study-abroad/student-visa" className="hover:text-white/70 transition" itemProp="item"><span itemProp="name">Student Visa</span></Link>
                  <meta itemProp="position" content="3" />
                </li>
                <ChevronRight size={12} />
                <li className="text-white/60" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span itemProp="name">{countryName}</span>
                  <meta itemProp="position" content="4" />
                </li>
              </ol>
            </nav>

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

                <h1 id="page-heading" className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-3">
                  Study in {countryName}<br />
                  <span className="text-[#f5c800]">Student Visa Guide {currentYear}</span>
                </h1>
                <p className="text-white/50 text-sm font-medium mb-2">
                  {countryName} student visa requirements for Bangladeshi students — updated {currentYear}
                </p>
                <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-lg">
                  Complete {countryName} student visa requirements, documents checklist, IELTS scores, bank balance needed, scholarships, SOP tips, and step-by-step application process for Bangladesh passport holders.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["✅ 98% Approval Rate", "📋 Document Checklist", "🎓 Scholarship Guidance", "🔒 Confidential", "⚡ 2-Hour Response"].map(b => (
                    <span key={b} className="bg-white/8 border border-white/10 px-3 py-2 rounded-xl text-xs font-bold text-white/60">{b}</span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-[#f5c800]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-700" />
                  <div className="relative bg-white/10 border border-white/20 p-4 rounded-3xl overflow-hidden w-72 h-52 flex items-center justify-center">
                    <img src={country.flag} alt={`Study in ${countryName} — student visa Bangladesh ${currentYear}`}
                      className="w-full h-full object-cover rounded-2xl" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#f5c800] text-black px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap shadow-xl">
                    Student Visa {currentYear}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── QUICK STATS ── */}
        <div className="max-w-7xl mx-auto px-5 -mt-6 relative z-20 mb-10">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Consultancy", val: "Student visa experts",  Icon: GraduationCap, color: "blue" },
              { label: "Approval Rate", val: "98% approved",        Icon: BadgeCheck,    color: "green" },
              { label: "Response Time", val: "Within 2 hours",       Icon: Clock3,        color: "amber" },
              { label: "Experience", val: "10+ years Bangladesh",   Icon: Award,         color: "purple" },
            ].map(({ label, val, Icon, color }) => (
              <div key={label} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center hover:shadow-md transition">
                <Icon size={22} className={`text-${color}-600 mx-auto mb-2`} aria-hidden="true" />
                <dt className="text-[9px] uppercase text-gray-400 font-black mb-1 tracking-widest">{label}</dt>
                <dd className="text-xs font-black text-gray-800 leading-snug">{val}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ── NOTICE ── */}
        <div className="max-w-7xl mx-auto px-5 mb-8">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 flex gap-4 items-start">
            <div className="p-2 bg-amber-100 rounded-xl shrink-0">
              <CircleDashed size={20} className="text-amber-600" aria-hidden="true" />
            </div>
            <div>
              <p className="font-black text-amber-800 text-sm mb-1">
                Detailed {countryName} student visa data being verified
              </p>
              <p className="text-amber-700 text-xs leading-relaxed">
                Our team is finalizing verified {currentYear} data for {countryName}. The comprehensive guide below is an accurate general starting point. WhatsApp our consultants for confirmed country-specific guidance — they respond within 2 hours.
              </p>
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="max-w-7xl mx-auto px-5 pb-20">
          <div className="grid lg:grid-cols-12 gap-8">

            {/* MAIN LEFT */}
            <div className="lg:col-span-8 space-y-8">

              {/* SEO INTRO ARTICLE */}
              <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-[#f5c800] rounded-full" />
                  <h2 className="text-2xl font-black text-gray-900">
                    How to Get a {countryName} Student Visa from Bangladesh — {currentYear} Guide
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    For <strong className="text-gray-800">Bangladeshi students</strong> pursuing higher education in{" "}
                    <strong className="text-gray-800">{countryName}</strong>, the journey begins with securing an admission offer from an accredited institution, followed by applying for a student visa or study permit through the {countryName} Embassy or an authorised Visa Application Centre (VFS Global) in Dhaka.
                  </p>
                  <p>
                    The <strong className="text-gray-800">{countryName} student visa {currentYear}</strong> process requires comprehensive documentation — proof of admission, English language proficiency (IELTS/PTE/TOEFL), financial evidence, and a well-crafted{" "}
                    <strong className="text-gray-800">Statement of Purpose (SOP)</strong> that demonstrates your academic intent and ties to Bangladesh. Use our{" "}
                    <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">
                      free visa checklist generator
                    </Link>{" "}
                    to ensure your documents are complete.
                  </p>
                  <p>
                    Embassy officers scrutinize the <strong className="text-gray-800">consistency of bank statements</strong>, the clarity of career plans, and whether the chosen program aligns with the applicant's academic background. Common rejection reasons include weak financial documentation, vague SOPs, and unexplained study gaps. See our{" "}
                    <Link href="/visa-rejection" className="text-[#005a31] font-semibold hover:underline">
                      visa rejection rate analysis
                    </Link>{" "}
                    for detailed data.
                  </p>
                  <p>
                    Eammu Holidays has helped thousands of Bangladeshi students secure visas for{" "}
                    <Link href="/study-abroad/student-visa/united-kingdom" className="text-[#005a31] font-semibold hover:underline">UK</Link>,{" "}
                    <Link href="/study-abroad/student-visa/united-states" className="text-[#005a31] font-semibold hover:underline">USA</Link>,{" "}
                    <Link href="/study-abroad/student-visa/canada" className="text-[#005a31] font-semibold hover:underline">Canada</Link>,{" "}
                    <Link href="/study-abroad/student-visa/australia" className="text-[#005a31] font-semibold hover:underline">Australia</Link>,{" "}
                    <Link href="/study-abroad/student-visa/germany" className="text-[#005a31] font-semibold hover:underline">Germany</Link>, and{" "}
                    <Link href="/study-abroad/student-visa" className="text-[#005a31] font-semibold hover:underline">50+ more destinations</Link>.
                    Our 98% approval rate is built on embassy-accurate documents and expert guidance.
                  </p>
                </div>
              </section>

              {/* DOCUMENTS CHECKLIST */}
              <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-green-50 rounded-2xl"><CheckCircle size={26} className="text-green-600" aria-hidden="true" /></div>
                  <div>
                    <h2 id="checklist-heading" className="text-2xl font-black text-gray-900">
                      {countryName} Student Visa Documents Checklist {currentYear}
                    </h2>
                    <p className="text-sm text-gray-400 mt-0.5">Standard requirements for Bangladeshi student visa applications</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {GENERAL_DOCS.map((item, i) => (
                    <li key={i} className="flex gap-3 p-4 bg-green-50/60 border border-green-100 rounded-2xl">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <p className="text-sm text-gray-700 font-medium leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-100 pt-8">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">
                    Additional Documents by Applicant Profile
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {BY_PROFESSION.map(({ role, items, color }) => (
                      <div key={role} className={`bg-${color}-50/50 rounded-2xl border border-${color}-100 p-5`}>
                        <h4 className={`text-xs font-black text-${color}-700 uppercase tracking-wider mb-3`}>{role}</h4>
                        <ul className="space-y-2">
                          {items.map((item, i) => (
                            <li key={i} className="text-xs text-gray-500 flex gap-2 leading-relaxed">
                              <span className="text-green-500 shrink-0 mt-0.5" aria-hidden="true">✓</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-2xl">
                  <p className="text-sm text-blue-800 font-medium leading-relaxed">
                    <strong>Pro tip:</strong> Use our{" "}
                    <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-black hover:underline">
                      free visa checklist generator
                    </Link>{" "}
                    to get a country-specific document list verified against official embassy requirements. Never submit an incomplete application.
                  </p>
                </div>
              </section>

              {/* LANGUAGE REQUIREMENTS */}
              <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-indigo-50 rounded-2xl"><Languages size={26} className="text-indigo-600" aria-hidden="true" /></div>
                  <div>
                    <h2 className="text-2xl font-black text-gray-900">
                      English Language Test Requirements — {countryName} Student Visa
                    </h2>
                    <p className="text-sm text-gray-400 mt-0.5">IELTS, PTE, TOEFL, Duolingo scores for {currentYear}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 border-l-4 border-indigo-100 pl-4">
                  Standardized English test scores are mandatory for both university admission and the {countryName} student visa application. Minimum scores vary by institution and program level — always check your specific university's requirements.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {LANG_TESTS.map((test, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 hover:bg-white hover:shadow-md transition-all">
                      <p className="font-black text-indigo-900 mb-3 text-base">{test.name}</p>
                      <div className="space-y-1 mb-3">
                        <p className="text-xs font-bold text-indigo-700">Min score: {test.min}</p>
                        <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-tight">Competitive: {test.target}</p>
                      </div>
                      <p className="text-[10px] text-gray-500 leading-relaxed">{test.note}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 p-4 bg-amber-50 border border-amber-100 rounded-2xl">
                  <p className="text-sm text-amber-800 font-medium">
                    <strong>IELTS preparation:</strong> Our{" "}
                    <Link href="/target-ielts-immigration-center" className="text-[#005a31] font-black hover:underline">
                      IELTS & immigration center
                    </Link>{" "}
                    provides specialist coaching for Bangladeshi students targeting study abroad. Many students improve their score band within 6–8 weeks of structured preparation.
                  </p>
                </div>
              </section>

              {/* BANK BALANCE GUIDE */}
              <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-50 rounded-2xl"><Wallet size={26} className="text-blue-600" aria-hidden="true" /></div>
                  <div>
                    <h2 className="text-2xl font-black text-gray-900">
                      Bank Balance Required for {countryName} Student Visa
                    </h2>
                    <p className="text-sm text-gray-400 mt-0.5">Financial requirements and how to present them for maximum approval</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "First year tuition",   val: "Full 1st year tuition fee shown in full", color: "blue",   Icon: Building2 },
                    { label: "Living expenses",       val: "BDT 3–8 lakh per year (varies by country and city)", color: "green",  Icon: Home },
                    { label: "Emergency reserve",     val: "25–30% extra above total estimated costs",  color: "amber",  Icon: Banknote },
                    { label: "Banking history",       val: "6–12 months consistent transaction history",color: "purple", Icon: Clock3 },
                  ].map(({ label, val, color, Icon }) => (
                    <div key={label} className={`bg-${color}-50 border border-${color}-100 rounded-2xl p-5`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={16} className={`text-${color}-600`} aria-hidden="true" />
                        <p className={`text-[9px] font-black uppercase tracking-widest text-${color}-500`}>{label}</p>
                      </div>
                      <p className="text-sm font-black text-gray-800 leading-snug">{val}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-5 flex gap-3 mb-4">
                  <TriangleAlert size={18} className="text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-red-800 font-medium leading-relaxed">
                    <strong>Critical warning:</strong> Never deposit a large lump sum immediately before applying. Embassy officers scrutinize transaction patterns — sudden spikes are flagged as fabricated funds. Build a consistent, gradually growing balance over 6–12 months.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-2xl p-5 flex gap-3">
                  <Info size={18} className="text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-green-800 font-medium leading-relaxed">
                    <strong>Eammu Holidays can review your bank statements</strong> before submission — we identify and fix common presentation issues that cause rejections. Our 24-hour document review catches problems before they reach the embassy.
                  </p>
                </div>
              </section>

              {/* STEP-BY-STEP ROADMAP */}
              <section className="bg-[#1A1A1A] text-white rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden shadow-2xl">
                <Plane className="absolute top-10 right-10 text-white opacity-5 rotate-45" size={200} aria-hidden="true" />
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-[#f5c800] rounded-2xl text-black"><ListOrdered size={28} aria-hidden="true" /></div>
                  <div>
                    <h2 className="text-2xl font-black tracking-tight">
                      {countryName} Student Visa — Step by Step Process for Bangladesh
                    </h2>
                    <p className="text-gray-500 text-sm mt-0.5">Complete {currentYear} application roadmap</p>
                  </div>
                </div>
                <ol className="grid gap-6 relative z-10">
                  {APPLICATION_STEPS.map((s, i) => (
                    <li key={i} className="flex gap-5 group">
                      <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 font-black text-sm group-hover:bg-[#f5c800] group-hover:text-black group-hover:border-[#f5c800] transition-all">
                        {s.n}
                      </div>
                      <div className="pt-2">
                        <h3 className="font-black text-white text-sm mb-1">{s.title}</h3>
                        <p className="text-gray-400 text-xs font-medium leading-relaxed group-hover:text-gray-300">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* REJECTION RISKS */}
              <section className="bg-red-50 border border-red-100 rounded-[2rem] p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-red-100 rounded-xl"><AlertTriangle size={22} className="text-red-600" aria-hidden="true" /></div>
                  <div>
                    <h2 className="text-2xl font-black text-red-900">
                      {countryName} Student Visa Rejection Reasons — Bangladesh
                    </h2>
                    <p className="text-sm text-red-400 mt-0.5">Why Bangladeshi students get rejected and how to avoid it</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {REJECTION_RISKS.map(({ risk, detail }, i) => (
                    <div key={i} className="flex gap-3 p-4 bg-white border border-red-100 rounded-xl">
                      <span className="text-red-400 shrink-0 font-black text-sm mt-0.5">0{i + 1}.</span>
                      <div>
                        <p className="text-sm font-black text-red-900 mb-1">{risk}</p>
                        <p className="text-xs text-red-700/70 leading-relaxed">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-5 bg-green-50 border border-green-200 rounded-2xl">
                  <p className="text-xs font-black text-green-700 uppercase tracking-wider mb-2">
                    ✅ How Eammu Holidays maximizes your approval chances
                  </p>
                  <p className="text-sm text-green-800 font-medium leading-relaxed">
                    We review every document before submission — bank statements, SOP, NOC, and transcripts. Our consultants have processed thousands of {countryName}-bound student applications and know exactly what each embassy looks for. Our 98% approval rate speaks for itself. See{" "}
                    <Link href="/testimonials" className="text-[#005a31] font-black hover:underline">
                      client testimonials
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* SCHOLARSHIPS SEO SECTION */}
              <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-yellow-50 rounded-2xl"><Award size={26} className="text-yellow-600" aria-hidden="true" /></div>
                  <div>
                    <h2 className="text-2xl font-black text-gray-900">
                      Scholarships to Study in {countryName} for Bangladeshi Students {currentYear}
                    </h2>
                    <p className="text-sm text-gray-400 mt-0.5">Government and university funding opportunities</p>
                  </div>
                </div>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed mb-6">
                  <p>
                    Many {countryName} universities and government programs offer scholarships specifically accessible to international students from Bangladesh. These range from partial tuition waivers (10–50% reduction) to fully-funded programs covering tuition, living costs, health insurance, and return airfare.
                  </p>
                  <p>
                    <strong className="text-gray-800">Government scholarships</strong> are typically the most competitive but most generous — they require strong academic results (GPA 3.5+), community involvement, and a compelling application essay. Application windows typically open 9–12 months before the course start date.
                  </p>
                  <p>
                    <strong className="text-gray-800">University merit scholarships</strong> are awarded automatically based on your academic record and sometimes your English test score. Many are available to students who apply early — another reason to start your application process at least 12 months ahead.
                  </p>
                  <p>
                    Our consultants maintain an updated database of all scholarships available to Bangladeshi students applying to {countryName} for the {currentYear} intake. Visit our{" "}
                    <Link href="/scholarships" className="text-[#005a31] font-semibold hover:underline">
                      scholarships from Bangladesh guide
                    </Link>{" "}
                    or{" "}
                    <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                      contact our office
                    </Link>{" "}
                    for a personalized scholarship assessment.
                  </p>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { type: "Fully Funded",   desc: "Tuition + living + travel covered",  color: "green" },
                    { type: "Partial Grants", desc: "10–75% tuition reduction available",  color: "blue" },
                    { type: "Work-Study",     desc: "Campus jobs cover living expenses",   color: "amber" },
                  ].map(({ type, desc, color }) => (
                    <div key={type} className={`bg-${color}-50 border border-${color}-100 rounded-2xl p-5 text-center`}>
                      <p className={`font-black text-${color}-800 text-sm mb-1`}>{type}</p>
                      <p className="text-xs text-gray-500">{desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* EXPERT TIPS */}
              <section className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 rounded-[2rem] p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb size={22} className="text-amber-600" aria-hidden="true" />
                  <h2 className="text-2xl font-black text-gray-900">Expert Tips — {countryName} Student Visa Bangladesh</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {EXPERT_TIPS.map((t, i) => (
                    <div key={i} className="flex gap-4 bg-white rounded-2xl p-4 border border-amber-100 shadow-sm">
                      <span className="text-base font-black text-amber-200 shrink-0">{t.n}</span>
                      <p className="text-xs text-gray-700 font-medium leading-relaxed">{t.tip}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 bg-purple-50 rounded-xl"><HelpCircle size={22} className="text-purple-600" aria-hidden="true" /></div>
                  <div>
                    <h2 id="faq-heading" className="text-2xl font-black text-gray-900">
                      {countryName} Student Visa FAQ — Bangladesh {currentYear}
                    </h2>
                    <p className="text-sm text-gray-400 mt-0.5">Most asked questions from Bangladeshi students</p>
                  </div>
                </div>
                <dl className="space-y-4">
                  {generalFaqs.map((item, i) => (
                    <div key={i} className="group border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#f5c800]/60 transition-all"
                      itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <details>
                        <summary className="list-none flex items-center justify-between p-6 cursor-pointer" itemProp="name">
                          <span className="font-black text-gray-800 pr-4 leading-snug text-sm">
                            <span className="text-amber-500 mr-2" aria-hidden="true">Q.</span>{item.q}
                          </span>
                          <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shrink-0 group-open:bg-[#f5c800] group-open:border-[#f5c800] transition-all" aria-hidden="true">
                            <ChevronRight size={14} className="text-gray-500 group-open:text-black rotate-90" />
                          </div>
                        </summary>
                        <dd className="px-6 pb-6 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 ml-8"
                          itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                          <span itemProp="text">{item.a}</span>
                        </dd>
                      </details>
                    </div>
                  ))}
                </dl>
              </section>

              {/* SEO ARTICLE */}
              <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gray-400 rounded-full" />
                  <h2 className="text-2xl font-black text-gray-900">
                    Study in {countryName} from Bangladesh — Complete {currentYear} Guide
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-600 leading-relaxed">
                  <div className="space-y-4">
                    <p>
                      Studying in <strong className="text-gray-800">{countryName}</strong> is increasingly popular among Bangladeshi students seeking quality higher education and international career opportunities. The student visa process typically takes 2–4 months from admission to visa approval — including document preparation, IELTS testing, and submission.
                    </p>
                    <h3 className="text-lg font-black text-gray-800">{countryName} Student Visa Fee for Bangladeshi Students</h3>
                    <p>
                      Student visa fees for {countryName} vary by program level and nationality. Embassy application fees are generally non-refundable. VFS Global service charges (BDT 1,500–4,000 approximately) apply on top of the visa fee. Check our{" "}
                      <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#005a31] font-semibold hover:underline">
                        visa processing time tracker
                      </Link>{" "}
                      for current processing times for {countryName}.
                    </p>
                    <h3 className="text-lg font-black text-gray-800">Post-Study Work Rights in {countryName}</h3>
                    <p>
                      Many major study destinations offer post-study work visas allowing graduates to work for 1–3 years after completing their degree. This is a major factor in destination selection — our consultants can advise on the specific post-study rights available in {countryName} for Bangladeshi graduates.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-black text-gray-800">Why Choose Eammu Holidays for {countryName} Student Visa?</h3>
                    <p>
                      Our student visa consultants in Dhaka handle the complete process — university selection, application assistance, document preparation, SOP writing, IELTS guidance through our{" "}
                      <Link href="/target-ielts-immigration-center" className="text-[#005a31] font-semibold hover:underline">
                        IELTS center
                      </Link>
                      , and visa submission. We also offer{" "}
                      <Link href="/target-usa-visa-interview-preparation" className="text-[#005a31] font-semibold hover:underline">
                        USA visa interview preparation
                      </Link>{" "}
                      for US Embassy Dhaka interviews.
                    </p>
                    <p>
                      For <strong className="text-gray-800">Dubai-based Bangladeshi students</strong> applying for third-country study visas, our{" "}
                      <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-semibold hover:underline">
                        Dubai office
                      </Link>{" "}
                      provides the same specialist support alongside our{" "}
                      <Link href="/visa/dubai-residents" className="text-[#005a31] font-semibold hover:underline">
                        Dubai residents visa guide
                      </Link>
                      . Contact us at support@eammu.com or WhatsApp our team for a free consultation.
                    </p>
                    <p>
                      After completing your studies, you may need a{" "}
                      <Link href="/our-services/visa-services/work-visa-from-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                        work visa from Bangladesh
                      </Link>{" "}
                      or a tourist visa for family members to visit — Eammu Holidays handles both. See our{" "}
                      <Link href="/testimonials" className="text-[#005a31] font-semibold hover:underline">
                        client testimonials
                      </Link>{" "}
                      from successful student visa applicants.
                    </p>
                  </div>
                </div>

                {/* Internal link mesh */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Related Visa Resources</p>
                  <div className="flex flex-wrap gap-2.5">
                    {INTERNAL_LINKS.map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-xs font-semibold text-gray-500 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full hover:bg-[#f5c800] hover:text-black hover:border-[#f5c800] transition"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 space-y-6">

              {/* CTA CARD */}
              <div className="bg-[#1A1A1A] rounded-[2rem] p-7 text-white sticky top-6 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#f5c800]/10 rounded-full blur-3xl -mr-20 -mt-20" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 bg-[#f5c800]/20 border border-[#f5c800]/30 rounded-2xl flex items-center justify-center">
                      <MessageCircle size={20} className="text-[#f5c800]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-black text-lg leading-none">Free Consultation</h3>
                      <p className="text-gray-400 text-xs font-bold mt-0.5">Reply within 2 hours</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6">
                    Not sure about <strong className="text-white/80">{countryName}</strong> student visa requirements? Our expert consultants know the latest rules and will guide you step by step at no upfront cost.
                  </p>
                  {[
                    { icon: "🎓", label: "Service",     val: "Full student visa support" },
                    { icon: "📈", label: "Success Rate", val: "98% approval rate" },
                    { icon: "💬", label: "Response",     val: "Within 2 hours" },
                    { icon: "📋", label: "Includes",     val: "SOP review + doc check" },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-3 p-3.5 bg-white/5 border border-white/10 rounded-2xl mb-2">
                      <span className="text-lg" aria-hidden="true">{s.icon}</span>
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-[#f5c800]">{s.label}</p>
                        <p className="font-black text-white text-sm">{s.val}</p>
                      </div>
                    </div>
                  ))}
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 mt-4 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black transition-all shadow-xl active:scale-95 mb-2 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                    WhatsApp — {countryName} Visa Help
                    <ChevronRight size={16} aria-hidden="true" />
                  </a>
                  <p className="text-[9px] text-center text-gray-500 font-bold">FREE ADVICE · NO UPFRONT FEES · EXPERT TEAM</p>
                </div>
              </div>

              {/* QUICK LINKS SIDEBAR */}
              <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-6">
                <h3 className="font-black text-gray-900 text-base mb-4 flex items-center gap-2">
                  <Globe size={18} className="text-[#005a31]" aria-hidden="true" />
                  Popular Student Visa Destinations
                </h3>
                <ul className="space-y-2">
                  {[
                    { label: "🇬🇧 UK student visa",         href: "/study-abroad/student-visa/united-kingdom" },
                    { label: "🇺🇸 USA student visa",        href: "/study-abroad/student-visa/united-states" },
                    { label: "🇨🇦 Canada student visa",     href: "/study-abroad/student-visa/canada" },
                    { label: "🇦🇺 Australia student visa",  href: "/study-abroad/student-visa/australia" },
                    { label: "🇩🇪 Germany student visa",    href: "/study-abroad/student-visa/germany" },
                    { label: "🇲🇾 Malaysia student visa",   href: "/study-abroad/student-visa/malaysia" },
                    { label: "📚 All student visa countries", href: "/study-abroad/student-visa" },
                  ].map(link => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-[#f5c800] hover:bg-amber-50 transition text-sm font-semibold text-gray-700 hover:text-gray-900"
                      >
                        <span>{link.label}</span>
                        <ChevronRight size={14} className="text-gray-400" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* EXPERT TIPS SIDEBAR */}
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 rounded-[2rem] p-7">
                <div className="flex items-center gap-2 mb-5">
                  <Lightbulb size={20} className="text-amber-600" aria-hidden="true" />
                  <h3 className="font-black text-gray-900 text-base">Expert Tips</h3>
                </div>
                <div className="space-y-3">
                  {EXPERT_TIPS.slice(0, 3).map((t, i) => (
                    <div key={i} className="flex gap-3 bg-white rounded-xl p-4 border border-amber-100 shadow-sm">
                      <span className="text-xs font-black text-amber-200 shrink-0 mt-0.5" aria-hidden="true">{t.n}</span>
                      <p className="text-xs text-gray-700 font-medium leading-relaxed">{t.tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* EMAIL CTA */}
              <div className="bg-[#f5c800] rounded-[2rem] p-7 text-center">
                <div className="text-4xl mb-3" aria-hidden="true">🎓</div>
                <h4 className="font-black text-xl text-black mb-2">Ready to Study in {countryName}?</h4>
                <p className="text-black/70 text-xs leading-relaxed mb-5">
                  Our student visa specialists handle everything — admission support, SOP writing, document review, and full visa application. Free initial consultation.
                </p>
                <a href="mailto:support@eammu.com"
                  className="block bg-black text-white py-3 rounded-xl font-black text-sm hover:bg-gray-800 transition mb-3">
                  📧 support@eammu.com
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                  className="block bg-green-600 text-white py-3 rounded-xl font-black text-sm hover:bg-green-700 transition">
                  💬 WhatsApp Now — Free Advice
                </a>
              </div>

            </aside>
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="bg-gray-900 py-16 px-5 text-center">
          <div className="max-w-2xl mx-auto">
            <img src={country.flag} alt={`Study in ${countryName} from Bangladesh`}
              className="w-20 h-14 object-cover rounded-xl mx-auto mb-5 shadow-xl" />
            <h2 className="text-3xl font-black text-white mb-3">Plan Your Studies in {countryName}</h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm">
              Let our student visa experts guide your complete journey — from university selection to visa approval. 98% success rate for Bangladeshi students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black transition-all text-sm">
                Start Application via WhatsApp →
              </a>
              <Link href="/study-abroad/student-visa"
                className="inline-flex items-center justify-center px-8 py-5 border-2 border-white/20 text-white rounded-2xl font-black hover:bg-white/10 transition-all text-sm">
                Browse All Countries
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FULL DATA PAGE — uses visadata[cleanSlug]
// ─────────────────────────────────────────────────────────────────────────────
function FullDataStudentVisaPage({ country, d, cleanSlug, whatsappUrl, schemas }) {
  const countryName = country.country;
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.howTo) }} />

      <div className="min-h-screen text-[#2D2D2D] font-sans bg-[#F9FAFB]">

        {/* ── HERO ── */}
        <div className="relative bg-[#dabeff] py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-xs text-black/40 font-semibold mb-8 flex-wrap"
                itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/" className="hover:text-black/70 transition" itemProp="item"><span itemProp="name">Home</span></Link>
                  <meta itemProp="position" content="1" />
                </li>
                <ChevronRight size={12} />
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/study-abroad" className="hover:text-black/70 transition" itemProp="item"><span itemProp="name">Study Abroad</span></Link>
                  <meta itemProp="position" content="2" />
                </li>
                <ChevronRight size={12} />
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/study-abroad/student-visa" className="hover:text-black/70 transition" itemProp="item"><span itemProp="name">Student Visa</span></Link>
                  <meta itemProp="position" content="3" />
                </li>
                <ChevronRight size={12} />
                <li className="text-black/60" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span itemProp="name">{countryName}</span>
                  <meta itemProp="position" content="4" />
                </li>
              </ol>
            </nav>

            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                <div className="relative w-72 h-44 bg-white p-2 rounded-2xl shadow-2xl overflow-hidden">
                  <img src={country.flag} alt={`Study in ${countryName} from Bangladesh ${currentYear}`}
                    className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                  <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase border border-white/30 tracking-widest">
                    Academic Year {currentYear}
                  </span>
                  <span className="bg-[#f5c800] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    {d?.visa_category_details?.visa_type}
                  </span>
                </div>
                <h1 id="page-heading" className="text-4xl md:text-6xl font-black mb-4 italic tracking-tighter drop-shadow-lg">
                  <span className="text-[#f5c800]">Study in</span> {countryName}
                </h1>
                <p className="text-xl md:text-2xl font-semibold opacity-90 mb-3">{d?.title}</p>
                <p className="max-w-3xl opacity-80 leading-relaxed mb-5 font-light text-sm">{d?.description}</p>
                <div className="flex items-center justify-center md:justify-start gap-4 text-xs font-mono opacity-60">
                  <Calendar size={13} aria-hidden="true" /> Updated: {d?.last_updated}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── QUICK STATS ── */}
        <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "COE Processing",  val: d?.processing_and_approval_metrics?.coe_processing_time, Icon: Clock },
            { label: "Approval Rate",   val: d?.processing_and_approval_metrics?.approval_chances,   Icon: GraduationCap },
            { label: "Part-Time Work",  val: d?.work_rights_and_stay?.part_time_permission,          Icon: Briefcase },
            { label: "Visa Category",   val: d?.visa_category_details?.main_category,                Icon: ShieldCheck },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
              <stat.Icon size={22} className="text-indigo-600 mx-auto mb-2" aria-hidden="true" />
              <dt className="text-[9px] uppercase text-gray-400 font-black mb-1 tracking-widest">{stat.label}</dt>
              <dd className="text-xs font-black text-gray-800 leading-snug">{stat.val}</dd>
            </div>
          ))}
        </div>

        {/* ── MAIN GRID ── */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid lg:grid-cols-12 gap-8">

            {/* MAIN LEFT */}
            <div className="lg:col-span-8 space-y-10">

              {/* SEO INTRO */}
              <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-[#f5c800] rounded-full" />
                  <h2 className="text-2xl font-black text-gray-900">
                    {countryName} Student Visa from Bangladesh — {currentYear} Complete Guide
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    The <strong className="text-gray-800">{countryName} student visa {currentYear}</strong> process for Bangladeshi applicants requires an admission offer from an accredited institution, English language proficiency test results, comprehensive financial evidence, and a compelling Statement of Purpose. Use our{" "}
                    <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">
                      free visa checklist generator
                    </Link>{" "}
                    to prepare your document package.
                  </p>
                  <p>
                    Eammu Holidays has helped thousands of Bangladeshi students secure visas for{" "}
                    <Link href="/study-abroad/student-visa/united-kingdom" className="text-[#005a31] font-semibold hover:underline">UK</Link>,{" "}
                    <Link href="/study-abroad/student-visa/united-states" className="text-[#005a31] font-semibold hover:underline">USA</Link>,{" "}
                    <Link href="/study-abroad/student-visa/canada" className="text-[#005a31] font-semibold hover:underline">Canada</Link>,{" "}
                    <Link href="/study-abroad/student-visa/australia" className="text-[#005a31] font-semibold hover:underline">Australia</Link>, and{" "}
                    <Link href="/study-abroad/student-visa" className="text-[#005a31] font-semibold hover:underline">50+ destinations</Link> with a 98% approval rate. See{" "}
                    <Link href="/testimonials" className="text-[#005a31] font-semibold hover:underline">client testimonials</Link>.
                  </p>
                </div>
              </section>

              {/* SCHOLARSHIPS */}
              {d?.scholarship_ecosystem_2026 && (
                <section className="bg-white rounded-[2.5rem] shadow-sm p-10 border border-gray-100">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-yellow-50 rounded-2xl text-yellow-600"><Award size={32} aria-hidden="true" /></div>
                    <div>
                      <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                        {countryName} Scholarships for Bangladeshi Students {currentYear}
                      </h2>
                      <p className="text-gray-400 text-sm mt-0.5">Government and university funding opportunities · See all{" "}
                        <Link href="/scholarships" className="text-[#005a31] font-semibold hover:underline">scholarships from Bangladesh →</Link>
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {d.scholarship_ecosystem_2026.government_funded?.map((sch, i) => (
                      <div key={i} className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100 relative overflow-hidden group">
                        <div className="absolute -right-4 -top-4 text-blue-100 opacity-20 group-hover:scale-110 transition-transform">
                          <Award size={120} aria-hidden="true" />
                        </div>
                        <h3 className="text-blue-900 font-black text-xl mb-3">{sch.name}</h3>
                        <p className="text-sm text-blue-800/80 mb-4 leading-relaxed">{sch.benefits}</p>
                        <div className="flex flex-wrap gap-4 items-center">
                          <span className="text-[10px] bg-white text-blue-600 px-4 py-1.5 rounded-full font-black shadow-sm uppercase border border-blue-100">
                            Window: {sch.application_window}
                          </span>
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
                    <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600"><Languages size={30} aria-hidden="true" /></div>
                    <div>
                      <h2 className="text-2xl font-black text-gray-900">
                        English Test Requirements — {countryName} Student Visa {currentYear}
                      </h2>
                      <p className="text-gray-400 text-sm mt-0.5">
                        IELTS, PTE, TOEFL, Duolingo minimum scores · Training available at our{" "}
                        <Link href="/target-ielts-immigration-center" className="text-[#005a31] font-semibold hover:underline">IELTS center →</Link>
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-8 border-l-4 border-indigo-100 pl-4 leading-relaxed">
                    {d.english_language_test_requirements_2026.overview}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { name: "IELTS Academic", data: d.english_language_test_requirements_2026.ielts_academic },
                      { name: "PTE Academic",   data: d.english_language_test_requirements_2026.pte_academic },
                      { name: "Duolingo DET",   data: d.english_language_test_requirements_2026.duolingo_det },
                      { name: "TOEFL iBT",      data: d.english_language_test_requirements_2026.toefl_ibt },
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
                  <div className="p-3 bg-green-50 rounded-2xl text-green-600"><BookOpen size={30} aria-hidden="true" /></div>
                  <div>
                    <h2 id="checklist-heading" className="text-2xl font-black text-gray-900">
                      {countryName} Student Visa Documents — Complete Checklist {currentYear}
                    </h2>
                    <p className="text-gray-400 text-sm mt-0.5">
                      All required documents for Bangladeshi applicants · Also use our{" "}
                      <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">free checklist generator →</Link>
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-blue-600 font-black text-xs uppercase tracking-[0.2em] border-b pb-4 mb-5">Embassy Submission Documents</h3>
                    <ul className="space-y-3">
                      {d.comprehensive_requirements_checklist?.embassy_submission_docs?.map((doc, i) => (
                        <li key={i} className="flex gap-3 p-4 bg-blue-50/50 border border-blue-100 rounded-2xl">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                            <CheckCircle size={11} className="text-white" />
                          </div>
                          <p className="text-xs text-gray-700 font-medium leading-relaxed">{doc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-green-600 font-black text-xs uppercase tracking-[0.2em] border-b pb-4 mb-5">Financial & COE Phase Documents</h3>
                    <ul className="space-y-3">
                      {d.comprehensive_requirements_checklist?.coe_phase_documents?.map((doc, i) => (
                        <li key={i} className="flex gap-3 p-4 bg-green-50/50 border border-green-100 rounded-2xl">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                            <CheckCircle size={11} className="text-white" />
                          </div>
                          <p className="text-xs text-gray-700 font-medium leading-relaxed">{doc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* ROADMAP */}
              {d?.step_by_step_application_roadmap && (
                <section className="bg-[#1A1A1A] text-white rounded-[3rem] p-12 relative overflow-hidden shadow-2xl">
                  <Plane className="absolute top-10 right-10 text-white opacity-5 rotate-45" size={200} aria-hidden="true" />
                  <div className="flex items-center gap-4 mb-12">
                    <div className="p-3 bg-[#f5c800] rounded-2xl text-black"><ListOrdered size={28} aria-hidden="true" /></div>
                    <div>
                      <h2 className="text-2xl font-black">{countryName} Study Permit — Step by Step</h2>
                      <p className="text-gray-500 text-sm mt-0.5">Official application process for Bangladeshi students</p>
                    </div>
                  </div>
                  <ol className="grid gap-8 relative z-10">
                    {Object.entries(d.step_by_step_application_roadmap).map(([key, step], i) => (
                      <li key={key} className="flex gap-8 group">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 font-black text-xl group-hover:bg-[#f5c800] group-hover:text-black transition-all">
                          {i + 1}
                        </div>
                        <div className="pt-2">
                          <p className="text-gray-300 text-sm font-medium leading-relaxed group-hover:text-white">{step}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {/* REJECTION RISKS */}
              <section className="bg-red-50 rounded-[2.5rem] p-10 border border-red-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-red-100 rounded-2xl text-red-600"><AlertTriangle size={28} aria-hidden="true" /></div>
                  <div>
                    <h2 className="text-2xl font-black text-red-900">
                      {countryName} Student Visa Rejection Reasons — Bangladesh
                    </h2>
                    <p className="text-red-400 text-sm mt-0.5">
                      Also see our{" "}
                      <Link href="/visa-rejection" className="text-red-600 font-semibold hover:underline">visa rejection rate analysis →</Link>
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    {d.rejection_risk_matrix?.high_risk_reasons?.map((risk, i) => (
                      <div key={i} className="flex gap-4 items-start p-4 bg-white border border-red-100 rounded-xl">
                        <span className="text-red-400 font-black text-xs shrink-0">0{i + 1}.</span>
                        <p className="text-xs font-bold text-red-900/80 leading-relaxed">{risk}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-red-200 flex flex-col justify-center">
                    <p className="text-[10px] font-black text-green-700 uppercase mb-3 tracking-widest">✅ How to Get Approved</p>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      {d.rejection_risk_matrix?.mitigation_strategy}
                    </p>
                  </div>
                </div>
              </section>

              {/* YOUTUBE */}
              {d?.youtube_video_options?.length > 0 && (
                <section>
                  <h2 className="text-2xl font-black text-gray-900 mb-6">Study in {countryName} — Watch & Learn</h2>
                  <div className="grid md:grid-cols-3 gap-5">
                    {d.youtube_video_options.map((video, i) => {
                      const getYouTubeId = (url) => {
                        const match = url?.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
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
                              <div className="w-14 h-14 bg-[#f5c800] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform" aria-hidden="true">
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
                    <div className="p-2.5 bg-blue-50 rounded-xl"><HelpCircle size={24} className="text-blue-600" aria-hidden="true" /></div>
                    <div>
                      <h2 id="faq-heading" className="text-2xl font-black text-gray-900">
                        {countryName} Student Visa FAQ — Bangladesh {currentYear}
                      </h2>
                      <p className="text-gray-400 text-sm mt-0.5">Answers to questions Bangladeshi students ask most</p>
                    </div>
                  </div>
                  <dl className="space-y-5">
                    {d.faq_student_edition.map((faq, i) => (
                      <div key={i} className="group border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#f5c800]/60 transition-all"
                        itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                        <details>
                          <summary className="list-none flex items-center justify-between p-6 cursor-pointer" itemProp="name">
                            <span className="font-black text-gray-900 pr-4 text-sm group-hover:text-blue-600 transition-colors">
                              <span className="text-blue-500 mr-2" aria-hidden="true">Q.</span>{faq.question}
                            </span>
                            <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shrink-0 group-open:bg-[#f5c800] group-open:border-[#f5c800] transition-all" aria-hidden="true">
                              <ChevronRight size={14} className="text-gray-500 group-open:text-black rotate-90" />
                            </div>
                          </summary>
                          <dd className="px-6 pb-6 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 ml-8 border-l-2 border-l-blue-100"
                            itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <span itemProp="text">{faq.answer}</span>
                          </dd>
                        </details>
                      </div>
                    ))}
                  </dl>
                </section>
              )}

              {/* SEO ARTICLE */}
              <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gray-400 rounded-full" />
                  <h2 className="text-2xl font-black text-gray-900">
                    Study in {countryName} from Bangladesh — Complete {currentYear} Guide
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-600 leading-relaxed">
                  <div className="space-y-4">
                    <p>
                      Studying in <strong className="text-gray-800">{countryName}</strong> offers world-class education, post-study work rights, and international career opportunities for Bangladeshi graduates. Eammu Holidays has helped thousands of Bangladeshi students secure{" "}
                      <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                        student visas from Bangladesh
                      </Link>{" "}
                      with a 98% approval rate. See{" "}
                      <Link href="/testimonials" className="text-[#005a31] font-semibold hover:underline">client testimonials</Link>.
                    </p>
                    <p>
                      Our{" "}
                      <Link href="/target-ielts-immigration-center" className="text-[#005a31] font-semibold hover:underline">
                        IELTS and immigration center
                      </Link>{" "}
                      provides specialist preparation for Bangladeshi students targeting study in {countryName}. For USA-bound students, our{" "}
                      <Link href="/target-usa-visa-interview-preparation" className="text-[#005a31] font-semibold hover:underline">
                        US visa interview preparation
                      </Link>{" "}
                      program significantly improves approval rates.
                    </p>
                    <p>
                      After graduation, many students need a{" "}
                      <Link href="/our-services/visa-services/work-visa-from-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                        work visa from Bangladesh
                      </Link>{" "}
                      or a tourist visa for family — Eammu Holidays handles both. Check{" "}
                      <Link href="/travel-resources/visa-processing-time-tracker" className="text-[#005a31] font-semibold hover:underline">
                        current processing times
                      </Link>{" "}
                      for all visa types.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p>
                      For <strong className="text-gray-800">Dubai-based Bangladeshi students</strong> applying for study visas, our{" "}
                      <Link href="/contact/travel-agency-dubai" className="text-[#005a31] font-semibold hover:underline">
                        Dubai office
                      </Link>{" "}
                      provides the same specialist support alongside our{" "}
                      <Link href="/visa/dubai-residents" className="text-[#005a31] font-semibold hover:underline">
                        Dubai residents visa guide
                      </Link>
                      .
                    </p>
                    <p>
                      Also available: our{" "}
                      <Link href="/scholarships" className="text-[#005a31] font-semibold hover:underline">
                        scholarships from Bangladesh guide
                      </Link>
                      , the{" "}
                      <Link href="/travel-resources/visa-checklist-generator" className="text-[#005a31] font-semibold hover:underline">
                        free visa checklist generator
                      </Link>
                      , and{" "}
                      <Link href="/flight-booking" className="text-[#005a31] font-semibold hover:underline">
                        cheap student flights from Bangladesh
                      </Link>
                      . Contact our{" "}
                      <Link href="/contact/travel-agency-bangladesh" className="text-[#005a31] font-semibold hover:underline">
                        Cumilla Bangladesh office
                      </Link>{" "}
                      for a free consultation.
                    </p>
                  </div>
                </div>

                {/* Internal link mesh */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Related Resources</p>
                  <div className="flex flex-wrap gap-2.5">
                    {INTERNAL_LINKS.map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-xs font-semibold text-gray-500 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full hover:bg-[#f5c800] hover:text-black hover:border-[#f5c800] transition"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

            </div>

            {/* SIDEBAR — same as fallback */}
            <aside className="lg:col-span-4 space-y-6">

              {/* FINANCIAL SOLVENCY */}
              <div className="bg-[#1A1A1A] p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden sticky top-6">
                <Landmark className="absolute -top-6 -right-6 text-white/5" size={150} aria-hidden="true" />
                <h3 className="text-lg font-black mb-6 text-[#f5c800] uppercase tracking-tight flex items-center gap-2">
                  <CreditCard size={18} aria-hidden="true" /> Financial Requirements
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
                      <Info size={14} className="text-[#f5c800] shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-[11px] text-gray-400 leading-relaxed">{d?.financial_solvency_thresholds?.bank_history_requirement}</p>
                    </div>
                    <p className="text-[10px] text-gray-500 leading-relaxed pl-1">{d?.financial_solvency_thresholds?.logic}</p>
                  </div>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#f5c800] hover:bg-white text-black py-4 rounded-2xl font-black transition-all shadow-lg no-underline mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                    Apply via WhatsApp
                    <ArrowRightCircle size={18} aria-hidden="true" />
                  </a>
                  <p className="text-[9px] text-center text-gray-600 font-bold">FREE ADVICE · NO UPFRONT FEES</p>
                </div>
              </div>

              {/* WORK RIGHTS */}
              {d?.work_rights_and_stay && (
                <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
                  <Briefcase className="absolute -bottom-4 -left-4 text-white opacity-10" size={120} aria-hidden="true" />
                  <h3 className="font-black text-lg mb-6 uppercase tracking-tight flex items-center gap-2">
                    <Briefcase size={18} aria-hidden="true" /> Work Rights in {countryName}
                  </h3>
                  <div className="space-y-3 relative z-10">
                    <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                      <p className="text-[9px] uppercase opacity-60 font-black mb-1 tracking-widest">During Semester</p>
                      <p className="font-black text-base">{d.work_rights_and_stay.part_time_permission}</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                      <p className="text-[9px] uppercase opacity-60 font-black mb-1 tracking-widest">Academic Breaks</p>
                      <p className="font-black text-base">{d.work_rights_and_stay.vacation_hours}</p>
                    </div>
                    {d.work_rights_and_stay.post_study_work && (
                      <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                        <p className="text-[9px] uppercase opacity-60 font-black mb-1 tracking-widest">Post-Study Work</p>
                        <p className="font-bold text-sm text-blue-100">{d.work_rights_and_stay.post_study_work}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* QUICK LINKS */}
              <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-6">
                <h3 className="font-black text-gray-900 text-base mb-4 flex items-center gap-2">
                  <Globe size={18} className="text-[#005a31]" aria-hidden="true" />
                  Popular Student Visa Destinations
                </h3>
                <ul className="space-y-2">
                  {[
                    { label: "🇬🇧 UK student visa",          href: "/study-abroad/student-visa/united-kingdom" },
                    { label: "🇺🇸 USA student visa",         href: "/study-abroad/student-visa/united-states" },
                    { label: "🇨🇦 Canada student visa",      href: "/study-abroad/student-visa/canada" },
                    { label: "🇦🇺 Australia student visa",   href: "/study-abroad/student-visa/australia" },
                    { label: "🇩🇪 Germany student visa",     href: "/study-abroad/student-visa/germany" },
                    { label: "🇲🇾 Malaysia student visa",    href: "/study-abroad/student-visa/malaysia" },
                    { label: "🎓 All scholarship guides",    href: "/scholarships" },
                    { label: "📚 All student destinations",  href: "/study-abroad/student-visa" },
                  ].map(link => (
                    <li key={link.href}>
                      <Link href={link.href}
                        className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-[#f5c800] hover:bg-amber-50 transition text-sm font-semibold text-gray-700 hover:text-gray-900">
                        <span>{link.label}</span>
                        <ChevronRight size={14} className="text-gray-400" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* EMAIL CTA */}
              <div className="bg-[#f5c800] rounded-[2rem] p-7 text-center">
                <div className="text-4xl mb-3" aria-hidden="true">🎓</div>
                <h4 className="font-black text-xl text-black mb-2">Ready to Study in {countryName}?</h4>
                <p className="text-black/70 text-xs leading-relaxed mb-5">
                  Our specialists handle admission support, SOP writing, document review, and full visa application. Free consultation.
                </p>
                <a href="mailto:support@eammu.com"
                  className="block bg-black text-white py-3 rounded-xl font-black text-sm hover:bg-gray-800 transition mb-3">
                  📧 support@eammu.com
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                  className="block bg-green-600 text-white py-3 rounded-xl font-black text-sm hover:bg-green-700 transition">
                  💬 WhatsApp Now — Free Advice
                </a>
              </div>

            </aside>
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
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
              <Link href="/study-abroad/student-visa"
                className="inline-flex items-center justify-center px-8 py-5 border-2 border-white/20 text-white rounded-2xl font-black hover:bg-white/10 transition-all text-sm">
                Browse Other Countries
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ROOT EXPORT
// ─────────────────────────────────────────────────────────────────────────────
export default async function StudentVisaSlugPage({ params }) {
  const { slug } = await params;
  const cleanSlug = slug.replace(/-student-visa$/, "").replace(/-visa$/, "");
  const country = countries.find((c) => createSlug(c.country) === cleanSlug);

  if (!country) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-10">
        <div className="text-7xl mb-6" aria-hidden="true">🎓</div>
        <h1 className="text-3xl font-black text-gray-900 mb-3">Country Not Found</h1>
        <p className="text-gray-500 mb-8">We couldn't find that destination. Please browse all student visa countries.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/study-abroad/student-visa"
            className="px-8 py-4 bg-[#f5c800] text-black rounded-2xl font-black hover:bg-amber-400 transition">
            ← Browse All Countries
          </Link>
          <Link href="/contact/travel-agency-bangladesh"
            className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-black hover:bg-gray-800 transition">
            Contact Our Team
          </Link>
        </div>
      </div>
    );
  }

  const d = visadata[cleanSlug];
  const countryName = country.country;
  const whatsappUrl = `https://wa.me/8801701699743?text=${encodeURIComponent(`Hi, I want to apply for a ${countryName} Student Visa. I checked the guide on Eammu Holidays.`)}`;
  const schemas = buildSchemas(country, d, cleanSlug);

  if (!d) {
    return <FallbackStudentVisaPage country={country} whatsappUrl={whatsappUrl} schemas={schemas} />;
  }

  return <FullDataStudentVisaPage country={country} d={d} cleanSlug={cleanSlug} whatsappUrl={whatsappUrl} schemas={schemas} />;
}