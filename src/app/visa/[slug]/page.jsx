import countries from "@/app/data/countries.json";
import visadata from "@/app/data/visadata.json";
import { createSlug } from "@/app/lib/utils";
import Link from "next/link";
import {
  CheckCircle, Clock, CreditCard, Camera, Info,
  MapPin, AlertTriangle, Lightbulb, HelpCircle,
  Calendar, ShieldCheck, Landmark, Map, Users, Zap,
  FileText, Globe, Phone, ChevronRight, Star,
  ArrowRight, MessageCircle, Mail, Building2,
  Plane, Wallet, BadgeCheck, CircleDashed,
  TrendingUp, BookOpen, TriangleAlert
} from "lucide-react";

export const revalidate = 86400; // cache for 24 hours

// ── SEO METADATA ─────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cleanSlug = slug.replace(/-visa$/, "");
  const country = countries.find(c => createSlug(c.country) === cleanSlug);
  const d = visadata[cleanSlug];

  const countryName = country?.country || "Destination";
  const currentYear = new Date().getFullYear();

  // Rich natural-language title + description that mirrors how people actually search
  const defaultTitle = `${countryName} Visa for Bangladeshi Citizens ${currentYear} — Requirements, Fees & How to Apply`;
  const defaultDesc = `Planning to visit ${countryName}? Get the complete ${currentYear} visa guide for Bangladesh passport holders — documents needed, embassy fees, bank balance required, photo size, processing time, and step-by-step application tips.`;

  return {
    title: d?.seo_and_metadata?.meta_title || defaultTitle,
    description: d?.description || defaultDesc,
    keywords: d?.seo_and_metadata?.keywords?.join(", ") ||
      `${countryName} visa Bangladesh ${currentYear}, ${countryName} visa requirements Bangladeshi, ${countryName} visa fee Dhaka, ${countryName} visa bank balance, ${countryName} visa processing time, ${countryName} visa documents Bangladesh, ${countryName} embassy Bangladesh, how to get ${countryName} visa from Bangladesh`,
    alternates: { canonical: d?.seo_and_metadata?.canonical_url },
    openGraph: {
      title: `${countryName} Visa for Bangladeshi Citizens — ${currentYear} Complete Guide`,
      description: `Embassy-verified ${countryName} visa checklist, processing time, fees & tips for Bangladesh passport holders. Updated ${currentYear}.`,
      images: [country?.flag || ""],
      type: "article",
    },
  };
}

// ── FALLBACK PAGE (no visa data, but country exists) ─────────────────────────
// Drop-in replacement — same props signature as before
function FallbackVisaPage({ country, whatsappUrl }) {
  const countryName  = country.country;
  const currentYear  = new Date().getFullYear();
  const countrySlug  = createSlug(countryName);

  // ── JSON-LD (rendered server-side inside the component via dangerouslySetInnerHTML) ──
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",         item: "https://www.eammu.com" },
      { "@type": "ListItem", position: 2, name: "Visa Services",item: "https://www.eammu.com/visa" },
      { "@type": "ListItem", position: 3, name: "Visa Guide",   item: "https://www.eammu.com/visa/visa-guide" },
      { "@type": "ListItem", position: 4, name: `${countryName} Visa for Bangladeshi Citizens`, item: `https://www.eammu.com/visa/${countrySlug}-visa` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${countryName} Visa for Bangladeshi Citizens ${currentYear} — Requirements, Documents & Fees`,
    description: `Complete ${countryName} visa guide for Bangladesh passport holders — document checklist, bank balance requirements, photo specifications, processing times, and expert tips for ${currentYear}.`,
    datePublished: "2024-01-01T00:00:00Z",
    dateModified: new Date().toISOString(),
    author: { "@type": "Organization", name: "Eammu Holidays", url: "https://www.eammu.com" },
    publisher: { "@type": "Organization", name: "Eammu Holidays", logo: { "@type": "ImageObject", url: "https://www.eammu.com/emf.jpg" } },
    mainEntityOfPage: `https://www.eammu.com/visa/${countrySlug}-visa`,
    keywords: `${countryName} visa Bangladesh, ${countryName} visa requirements Bangladeshi, ${countryName} visa documents, ${countryName} visa bank balance`,
    inLanguage: "en-US",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${countryName} Visa Application Assistance for Bangladeshi Citizens`,
    provider: { "@type": "TravelAgency", name: "Eammu Holidays", url: "https://www.eammu.com" },
    serviceType: "Visa Consultancy",
    description: `Complete ${countryName} visa assistance for Bangladesh passport holders — document preparation, cover letter writing, embassy submission, and tracking.`,
    areaServed: { "@type": "Country", name: "Bangladesh" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1247", bestRating: "5" },
  };

  const faqSchemaItems = [
    { q: `Do Bangladeshi citizens need a visa to visit ${countryName}?`,          a: `Most Bangladeshi passport holders require a visa to enter ${countryName}. The application is submitted at the ${countryName} Embassy in Dhaka or a designated Visa Application Centre (JVAC/VFS Global). Contact Eammu Holidays for the most current ${currentYear} policy and whether any exemptions apply.` },
    { q: `How long does the ${countryName} visa take to process?`,                a: `Standard processing for a ${countryName} visa from Bangladesh is typically 7–15 working days. During peak seasons (June–August, December–January) this can extend to 30–45 days. We strongly recommend applying at least 6–8 weeks before your travel date.` },
    { q: `How much bank balance is needed for a ${countryName} visa?`,            a: `Bangladeshi applicants typically need to show BDT 2–5 lakh for solo travel with a consistent 3–6 month banking history. Avoid large lump-sum deposits immediately before applying — embassy officers flag sudden balance spikes as suspicious.` },
    { q: `What photo size is required for a ${countryName} visa?`,                a: `Most embassies require 47×36mm or 35×45mm passport photos with a pure white background, ICAO-compliant, taken within 90 days. No glasses, headwear, or heavy filters. Incorrect photo dimensions are one of the top 3 administrative rejection causes.` },
    { q: `Can I apply for a ${countryName} visa after a previous rejection?`,     a: `Yes. Declare all prior visa refusals — hiding them causes immediate disqualification. Address every stated rejection reason with stronger documentation. Eammu Holidays specialises in refusal resubmission cases. Contact our Dhaka office for a free consultation.` },
    { q: `What is the ${countryName} visa fee for Bangladeshi applicants?`,       a: `Embassy visa fees for ${countryName} are typically USD 50–200 depending on visa type, plus VFS Global service charges. All fees are non-refundable regardless of outcome. Contact us for the current ${currentYear} fee schedule.` },
    { q: `Do I need travel insurance for a ${countryName} visa?`,                 a: `Many embassies including all Schengen countries require travel insurance as a mandatory visa document. Minimum coverage is typically €30,000 for Schengen destinations. Even where not mandatory, including insurance strengthens your application.` },
    { q: `Where do I submit my ${countryName} visa application in Bangladesh?`,   a: `Depending on the destination, submission is either at the ${countryName} Embassy in Dhaka, a VFS Global Visa Application Centre, or JVAC. Some embassies accept applications only via authorised travel agents. Eammu Holidays handles end-to-end submission.` },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSchemaItems.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Apply for ${countryName} Visa from Bangladesh — Step-by-Step ${currentYear}`,
    description: `Complete step-by-step guide for Bangladeshi citizens applying for a ${countryName} visa.`,
    totalTime: "P14D",
    step: [
      { "@type": "HowToStep", position: 1, name: "Check requirements & build checklist", text: `Use Eammu Holidays' Visa Checklist Generator to get a personalized ${countryName} document list.`, url: "https://www.eammu.com/travel-resources/visa-checklist-generator" },
      { "@type": "HowToStep", position: 2, name: "Prepare financial documents",           text: "Gather 3–6 months of bank statements (stamped every page), bank solvency certificate, and income tax returns." },
      { "@type": "HowToStep", position: 3, name: "Write your cover letter",               text: `Write a personalized cover letter to the ${countryName} Visa Officer demonstrating your home-country ties and clear travel purpose.`, url: "https://www.eammu.com/travel-resources/travel-document-generator" },
      { "@type": "HowToStep", position: 4, name: "Book appointment & submit",             text: `Submit at the ${countryName} Embassy or VFS Dhaka with all original documents and fees.` },
      { "@type": "HowToStep", position: 5, name: "Track & collect",                       text: "Monitor application status via the embassy portal. Collect your passport once the decision is made — verify all details immediately.", url: "https://www.eammu.com/travel-resources/visa-processing-time-tracker" },
    ],
  };

  // ── Static document data ──
  const MANDATORY_DOCS = [
    {
      title: "Original Passport (6+ months validity)",
      desc: "Valid for at least 6 months beyond your intended return date. Minimum 2 blank visa pages. All previous passports with prior visa stamps must also be submitted.",
      cat: "identity", required: true,
    },
    {
      title: "Passport-Size Photographs — 47×36mm",
      desc: "Pure white background, ICAO-compliant, no glasses, no headwear, face filling 70–80% of frame. Taken within 90 days. Minimum 2 copies. This is one of the top 3 administrative rejection causes — get photos verified before submitting.",
      cat: "identity", required: true,
    },
    {
      title: "Visa Application Form (Typed — Not Handwritten)",
      desc: "Completed and signed official form. Handwritten forms are rejected. For 2026 applications, typed digital forms with all fields accurately completed are mandatory.",
      cat: "identity", required: true,
    },
    {
      title: "Bank Statement — Last 6 Months (Stamped Every Page)",
      desc: "Official statement from your bank with branch stamp on every single page. Must show consistent income history — not a dormant account with sudden large deposits. This is the #1 rejection reason for Bangladeshi applicants.",
      cat: "financial", required: true,
    },
    {
      title: "Bank Solvency Certificate",
      desc: "Official letter from your bank on bank letterhead stating current balance in BDT and USD equivalent. Signed by branch manager, dated within 30 days of application.",
      cat: "financial", required: true,
    },
    {
      title: "Income Tax Return (IT-10B) — Last 2–3 Years",
      desc: "Income Tax Deposit Receipt proving declared, consistent income. Required for all salaried and self-employed applicants. Self-employed must also provide business financials.",
      cat: "financial", required: true,
    },
    {
      title: "Employer NOC / Leave Approval Letter",
      desc: "Original No Objection Certificate on company letterhead (not a photocopy). Must state: designation, salary, approved leave dates matching travel itinerary, signed by HR Manager or MD with company seal.",
      cat: "professional", required: true,
    },
    {
      title: "Cover Letter Addressed to Visa Officer",
      desc: `Personalized letter to the ${countryName} Visa Officer. Must state: travel purpose, dates, accommodation plan, financial capacity, and — critically — your strong ties to Bangladesh (employment, property, family) proving you will return. Generic template letters cause rejection.`,
      cat: "travel", required: true,
    },
    {
      title: "Round-Trip Flight Reservation (PNR Hold — Not Paid Ticket)",
      desc: "Confirmed itinerary with PNR number. Do NOT buy a paid ticket before visa approval. A reservation/hold is sufficient and protects your money if the visa is refused.",
      cat: "travel", required: true,
    },
    {
      title: `Hotel Booking / Accommodation in ${countryName}`,
      desc: `Confirmed reservations for every night of your stay. Must include hotel name, address, check-in/check-out dates, and booking reference. If staying with family, provide a formal invitation letter with host's passport copy and residence proof.`,
      cat: "travel", required: true,
    },
    {
      title: `Day-by-Day Travel Itinerary`,
      desc: `Detailed daily plan for your entire stay in ${countryName}. Include city names, planned attractions, restaurants, and transport modes. Embassy officers cross-check itinerary dates against hotel bookings.`,
      cat: "travel", required: true,
    },
    {
      title: "Travel Insurance",
      desc: "Minimum €30,000 coverage for Schengen countries; equivalent medical/hospitalization coverage for others. Must cover the entire trip duration and all countries visited. Repatriation coverage required.",
      cat: "travel", required: true,
    },
  ];

  const OCCUPATION_DOCS = [
    {
      role: "Employed / Salaried",
      icon: "💼",
      items: [
        "NOC from employer on official company letterhead (original, not photocopy)",
        "Salary certificate showing monthly gross and net pay",
        "Employee ID card or visiting card",
        "Last 3 months pay stubs / salary slips",
      ],
    },
    {
      role: "Business Owner",
      icon: "🏢",
      items: [
        "Trade License with certified English translation",
        "Company bank statement — last 6 months",
        "Chamber of Commerce membership certificate",
        "Board resolution authorizing your travel (if applicable)",
      ],
    },
    {
      role: "Student",
      icon: "🎓",
      items: [
        "Valid student ID and current enrollment letter",
        "NOC / leave certificate from educational institution",
        "Sponsor's financial guarantee (parent/guardian)",
        "Sponsor's bank statements and employment proof",
      ],
    },
    {
      role: "Government Employee",
      icon: "🏛️",
      items: [
        "Government Order (GO) copy — English version",
        "NOC approved by relevant ministry/department",
        "Service book (first few pages) as employment proof",
        "Office ID card",
      ],
    },
    {
      role: "Retired / Pensioner",
      icon: "🏠",
      items: [
        "Pension book or pension certificate",
        "Fixed deposit certificates or investment statements",
        "Property ownership documents",
        "Retirement letter from previous employer",
      ],
    },
    {
      role: "Homemaker / Dependent",
      icon: "👨‍👩‍👧",
      items: [
        "Sponsor's (spouse's) full document package",
        "Marriage certificate (official translation if needed)",
        "Sponsor's NOC and financial documents",
        "Family dependency proof",
      ],
    },
  ];

  const BANK_TIERS = [
    { label: "Solo Traveler",     min: "BDT 2–3 lakh",  rec: "BDT 4–5 lakh",    color: "blue" },
    { label: "Couple Travel",     min: "BDT 4–6 lakh",  rec: "BDT 6–8 lakh",    color: "green" },
    { label: "Family (4 people)", min: "BDT 8–12 lakh", rec: "BDT 12–15 lakh+", color: "purple" },
  ];

  const REJECTION_REASONS = [
    { icon: "💰", title: "Insufficient or Inconsistent Bank Balance",   risk: "HIGH",   desc: `Bank balance too low, or sudden large deposit 1–2 weeks before application. Embassy officers look for 3–6 months of stable consistent income.`, fix: "Maintain a consistent balance for 3+ months. Avoid lump-sum deposits before applying." },
    { icon: "📝", title: `Weak Cover Letter — No Bangladesh Ties`,       risk: "HIGH",   desc: `Generic template letter, vague travel purpose, or no explicit evidence of employment/property/family in Bangladesh.`, fix: "Write a personalized letter dedicating a full paragraph to why you will return to Bangladesh." },
    { icon: "📸", title: "Non-Compliant Photos",                         risk: "HIGH",   desc: "Wrong dimensions (not 47×36mm), grey or off-white background, glasses, shadows, or photos older than 90 days.", fix: "Get photos taken at a professional studio. Confirm 47×36mm white background before submitting." },
    { icon: "📄", title: "Unstamped Bank Statement Pages",               risk: "HIGH",   desc: "Bank statements without the official branch stamp on every single page are considered unofficial documents.", fix: "Request your bank to stamp every page at the branch. Never submit digital bank prints alone." },
    { icon: "📅", title: "Inconsistent Dates Across Documents",          risk: "MEDIUM", desc: "Hotel dates don't match flight dates, or itinerary doesn't cover all days of stay.", fix: "Triple-check all dates: flight arrival → hotel check-in → itinerary day 1 → return flight." },
    { icon: "🏠", title: "Weak Ties to Home Country",                   risk: "MEDIUM", desc: "No employment, no property, no family dependents — suggests immigration intent rather than tourism.", fix: "Submit property documents, family evidence, employer NOC, and any association memberships." },
    { icon: "🚫", title: "Undeclared Prior Visa Refusal",                risk: "HIGH",   desc: "Failing to declare a previous rejection triggers automatic rejection and potential long-term banning.", fix: "Always declare prior refusals. Address the original rejection reason with stronger documents." },
    { icon: "📋", title: "Incomplete or Unsigned Forms",                 risk: "MEDIUM", desc: "Missing pages, unsigned sections, or using outdated form versions.", fix: "Use the current 2026 typed form. Sign in original ink. Double-check every field before submitting." },
  ];

  const APPROVAL_TIPS = [
    { num: "01", tip: `Apply at least 6–8 weeks before travel — peak season (June–August, December–January) requires 10–12 weeks.` },
    { num: "02", tip: `Maintain a consistent bank balance for 3+ months. Avoid large lump-sum deposits 1–2 weeks before applying — this is a major red flag.` },
    { num: "03", tip: `Your cover letter must explicitly name your Bangladesh employer, salary, property owned, and family dependents — proving you will return home after the trip.` },
    { num: "04", tip: `Day-by-day itinerary must be realistic. Don't plan 5 cities in 3 days — embassy officers cross-check itinerary plausibility.` },
    { num: "05", tip: `Book refundable hotels for the visa application. Cancel or convert to non-refundable only after your visa is approved.` },
    { num: "06", tip: `If your NOC is from a small company, attach the company's trade license and registration certificate to strengthen credibility.` },
    { num: "07", tip: `Include copies of prior international visas (UK, US, Canada, Schengen, etc.) — each stamp significantly boosts approval chances.` },
    { num: "08", tip: `Keep a full photocopy of every document submitted. If the embassy sends a further information letter, you'll need to respond quickly.` },
  ];

  const PROCESS_STEPS = [
    { n: "01", icon: "📋", title: "Build Your Checklist",         desc: `Use our Visa Checklist Generator for a ${countryName}-specific document list.`,                                           link: "/travel-resources/visa-checklist-generator" },
    { n: "02", icon: "🏦", title: "Prepare Financial Documents",  desc: "Gather 6 months of stamped bank statements and solvency certificate.",                                                    link: null },
    { n: "03", icon: "✍️", title: "Write Cover Letter",           desc: `Draft a personalized cover letter for the ${countryName} Visa Officer demonstrating your Bangladesh ties.`,               link: "/travel-resources/travel-document-generator" },
    { n: "04", icon: "📅", title: "Book Appointment & Submit",    desc: "Submit at the embassy or VFS Dhaka with all originals. Pay non-refundable fees.",                                        link: null },
    { n: "05", icon: "⏳", title: "Track & Collect",              desc: "Monitor status via the embassy portal. Verify all visa details on collection.",                                          link: "/travel-resources/visa-processing-time-tracker" },
  ];

  // Internal links mapped to sitemap
  const RELATED_LINKS = [
    { label: "Visa Guide 2026",                        href: "/visa/visa-guide" },
    { label: "All Visa Services",                      href: "/visa" },
    { label: "Visa Rejection Checker",                 href: "/visa-rejection" },
    { label: "Visa Checklist Generator",               href: "/travel-resources/visa-checklist-generator" },
    { label: "Processing Time Tracker",                href: "/travel-resources/visa-processing-time-tracker" },
    { label: "Travel Document Generator",              href: "/travel-resources/travel-document-generator" },
    { label: "Schengen Visa Guide",                    href: "/schengen-visa" },
    { label: "E-Visa Countries",                       href: "/visa/e-visa" },
    { label: "Tourist Visa from Bangladesh",           href: "/our-services/visa-services/tourist-visa-from-bangladesh" },
    { label: "Student Visa from Bangladesh",           href: "/our-services/visa-services/student-visa-from-bangladesh" },
    { label: "Work Visa from Bangladesh",              href: "/our-services/visa-services/work-visa-from-bangladesh" },
    { label: "UK Visa Application",                    href: "/our-services/visa/uk-visa-application" },
    { label: "Canada Visa Application",                href: "/our-services/visa/canada-visa-application" },
    { label: "USA Visa Application",                   href: "/our-services/visa/usa-visa-application" },
    { label: "Schengen / Germany Visa",                href: "/our-services/visa/germany-visa-application" },
    { label: "Dubai Visa Application",                 href: "/our-services/visa/dubai-visa-application" },
    { label: "Australia Visa Application",             href: "/our-services/visa/australia-visa-application" },
    { label: "Japan Visa Application",                 href: "/our-services/visa/japan-visa-application" },
    { label: "USA Interview Preparation",              href: "/target-usa-visa-interview-preparation" },
    { label: "IELTS & Immigration Center",             href: "/target-ielts-immigration-center" },
    { label: "Study Abroad Guide",                     href: "/study-abroad" },
    { label: "Scholarships by Country",                href: "/scholarships" },
    { label: "Travel Deals & Offers",                  href: "/offers" },
    { label: "Bangladesh Office",                      href: "/contact/travel-agency-bangladesh" },
    { label: "Dubai Office",                           href: "/contact/travel-agency-dubai" },
  ];

  const riskColor = (risk) =>
    risk === "HIGH"
      ? "bg-red-50 border-red-100 text-red-800"
      : "bg-amber-50 border-amber-100 text-amber-800";

  const riskPill = (risk) =>
    risk === "HIGH"
      ? "bg-red-100 text-red-700"
      : "bg-amber-100 text-amber-700";

  return (
    <div className="min-h-screen bg-[#f8f9fb] font-sans antialiased text-[#1a1c1e]">

      {/* ── JSON-LD Schemas ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* ── HERO ── */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} aria-hidden="true" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-5 py-16 md:py-22 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-white/40 font-semibold mb-8 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition">Home</Link>
            <ChevronRight size={11} aria-hidden="true" />
            <Link href="/visa" className="hover:text-white/70 transition">Visa Services</Link>
            <ChevronRight size={11} aria-hidden="true" />
            <span className="text-white/60">{countryName} Visa</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Hero quick-links */}
              <div className="flex flex-wrap gap-2 mb-5" role="navigation" aria-label="Related visa tools">
                {[
                  { label: "← All Visa Guides", href: "/visa/visa-guide" },
                  { label: "Rejection Checker",  href: "/visa-rejection" },
                  { label: "Visa Checklist",      href: "/travel-resources/visa-checklist-generator" },
                  { label: "Processing Times",    href: "/travel-resources/visa-processing-time-tracker" },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="bg-white/10 border border-white/20 text-white/70 px-3 py-1.5 rounded-full text-[10px] font-bold hover:bg-white/20 hover:text-white transition">
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-amber-400/20 border border-amber-400/30 text-amber-300 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                  {currentYear} Guide
                </span>
                <span className="bg-white/10 border border-white/20 text-white/60 px-4 py-1.5 rounded-full text-xs font-bold">
                  Bangladesh Passport Holders
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-3">
                {countryName} Visa Requirements<br />
                <span className="text-amber-400">for Bangladeshi Citizens</span>
              </h1>
              <h2 className="text-sm text-white/50 mb-3 font-medium">
                How to apply for {countryName} visa from Bangladesh — {currentYear}
              </h2>
              <p className="seo-speakable text-white/40 leading-relaxed text-sm mb-7 max-w-lg">
                Embassy-verified document checklist, bank balance requirements, photo specifications,
                processing times, and expert application tips for <strong className="text-white/60">{countryName}</strong> —
                updated {currentYear}. Expert consultants available 24/7 for personalized guidance.
              </p>

              <div className="flex flex-wrap gap-2">
                {["✅ Expert Consultants", "📋 Document Review", "⚡ 48hr Processing", "🔒 98% Approval Rate"].map(b => (
                  <span key={b} className="flex items-center gap-1.5 bg-white/8 border border-white/10 px-3 py-2 rounded-xl text-xs font-bold text-white/60">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Flag card */}
            <div className="flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-br from-amber-400/20 to-blue-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-700" aria-hidden="true" />
                <div className="relative bg-white/10 backdrop-blur border border-white/20 p-4 rounded-3xl shadow-2xl overflow-hidden w-72 h-48 flex items-center justify-center">
                  <img src={country.flag} alt={`${countryName} flag`} className="w-full h-full object-cover rounded-2xl" width={280} height={176} />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber-400 text-black px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap shadow-xl">
                  {countryName} Visa Guide
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── QUICK STATS BAR ── */}
      <div className="max-w-7xl mx-auto px-5 -mt-5 relative z-20 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: <Clock size={20} className="text-amber-500" />,    label: "Standard Processing", val: "7–15 business days",       bg: "bg-amber-50 border-amber-100" },
            { icon: <Calendar size={20} className="text-blue-500" />,  label: "Apply Before Travel",  val: "6–8 weeks minimum",        bg: "bg-blue-50 border-blue-100" },
            { icon: <Wallet size={20} className="text-green-500" />,   label: "Min Bank Balance",     val: "BDT 2–3 lakh (solo)",      bg: "bg-green-50 border-green-100" },
            { icon: <Camera size={20} className="text-red-500" />,     label: "Photo Size",           val: "47×36mm white background", bg: "bg-red-50 border-red-100" },
          ].map((s, i) => (
            <div key={i} className={`${s.bg} border-2 p-4 rounded-2xl bg-white shadow-sm flex flex-col items-center text-center`}>
              <div className="mb-1.5" aria-hidden="true">{s.icon}</div>
              <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
              <p className="text-xs font-black text-gray-800 leading-tight">{s.val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-5 pb-20">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* ── LEFT MAIN COLUMN ── */}
          <div className="lg:col-span-8 space-y-8">

            {/* SEO INTRO */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10" aria-label={`${countryName} visa overview for Bangladeshi citizens`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full" aria-hidden="true" />
                <h2 className="text-2xl font-black text-gray-900">
                  {countryName} Visa for Bangladeshi Citizens — {currentYear} Complete Guide
                </h2>
              </div>
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-800">Bangladeshi passport holders</strong> planning to visit{" "}
                  <strong className="text-gray-800">{countryName}</strong> in {currentYear} must apply for a visa in advance
                  through the {countryName} Embassy in Dhaka or a designated Visa Application Centre (JVAC/VFS Global).
                  The process involves submitting a comprehensive document dossier, paying non-refundable embassy fees,
                  and in some cases attending a biometric or in-person interview appointment.
                </p>
                <p>
                  The <strong className="text-gray-800">{countryName} visa for Bangladeshi citizens</strong> requires precise
                  preparation. Embassy officers pay close attention to financial documentation — specifically the
                  6-month bank statement with branch stamps on every page — and the cover letter, which must
                  clearly demonstrate your strong ties to Bangladesh and genuine intent to return.{" "}
                  <Link href="/visa-rejection" className="text-amber-600 font-semibold hover:underline">
                    Check the {countryName} visa rejection rate →
                  </Link>
                </p>
                <p>
                  Use our{" "}
                  <Link href="/travel-resources/visa-checklist-generator" className="text-amber-600 font-semibold hover:underline">
                    Visa Checklist Generator
                  </Link>{" "}
                  for a personalized {countryName} document list, our{" "}
                  <Link href="/travel-resources/visa-processing-time-tracker" className="text-amber-600 font-semibold hover:underline">
                    Processing Time Tracker
                  </Link>{" "}
                  to plan your application timeline, and our{" "}
                  <Link href="/travel-resources/travel-document-generator" className="text-amber-600 font-semibold hover:underline">
                    Travel Document Generator
                  </Link>{" "}
                  to draft your cover letter, NOC, and itinerary.
                </p>
              </div>
            </section>

            {/* MANDATORY DOCUMENTS */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10" aria-label={`${countryName} visa mandatory documents checklist`}>
              <div className="flex items-center gap-4 mb-7">
                <div className="p-3 bg-green-50 rounded-2xl" aria-hidden="true"><CheckCircle size={24} className="text-green-600" /></div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">{countryName} Visa — Mandatory Documents Checklist</h2>
                  <p className="text-sm text-gray-400 mt-0.5">
                    All items required. Missing even one causes rejection without refund. Generate a printable version →{" "}
                    <Link href="/travel-resources/visa-checklist-generator" className="text-amber-600 font-semibold hover:underline">Checklist Generator</Link>
                  </p>
                </div>
              </div>

              {/* Documents by category */}
              {["identity", "financial", "professional", "travel"].map(cat => {
                const catDocs  = MANDATORY_DOCS.filter(d => d.cat === cat);
                const catMeta = {
                  identity:     { num: "01", label: "Travel Identity",       color: "blue",   accent: "bg-blue-50 border-blue-100",   dot: "bg-blue-500" },
                  financial:    { num: "02", label: "Financial Documents",    color: "green",  accent: "bg-green-50 border-green-100", dot: "bg-green-500",  note: `Financial documents are the #1 rejection reason for ${countryName} visa from Bangladesh. Every bank statement page must carry the official branch stamp.` },
                  professional: { num: "03", label: "Professional / Employment", color: "purple", accent: "bg-purple-50 border-purple-100", dot: "bg-purple-500" },
                  travel:       { num: "04", label: "Travel Planning",        color: "amber",  accent: "bg-amber-50 border-amber-100", dot: "bg-amber-500",  note: "Itinerary dates, hotel check-in/out, and flight arrival/departure must all match exactly." },
                };
                const m = catMeta[cat];
                return (
                  <div key={cat} className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${m.dot}`} aria-hidden="true" />
                      <h3 className={`text-[10px] font-black uppercase tracking-[0.2em] text-${m.color}-600`}>
                        {m.num}. {m.label}
                      </h3>
                    </div>
                    {m.note && (
                      <div className={`flex items-start gap-2 p-3 rounded-xl border mb-4 ${m.accent}`}>
                        <TriangleAlert size={14} className={`text-${m.color}-600 shrink-0 mt-0.5`} aria-hidden="true" />
                        <p className={`text-xs font-bold text-${m.color}-700 leading-relaxed`}>{m.note}</p>
                      </div>
                    )}
                    <div className="space-y-2">
                      {catDocs.map((doc, i) => (
                        <article key={i} className="flex gap-3 p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:border-gray-200 hover:bg-white transition-all">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                            <CheckCircle size={11} className="text-white" />
                          </div>
                          <div>
                            <h4 className="font-black text-gray-800 text-sm mb-1 leading-snug flex items-center gap-2">
                              {doc.title}
                              <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-full ${doc.required ? "bg-red-100 text-red-700" : "bg-slate-100 text-slate-500"}`}>
                                {doc.required ? "Required" : "Conditional"}
                              </span>
                            </h4>
                            <p className="text-xs text-gray-500 font-medium leading-relaxed">{doc.desc}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                );
              })}
            </section>

            {/* OCCUPATION-SPECIFIC DOCS */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10" aria-label="Occupation-specific visa documents">
              <div className="flex items-center gap-3 mb-7">
                <div className="p-2.5 bg-slate-100 rounded-xl" aria-hidden="true"><Users size={21} className="text-slate-600" /></div>
                <div>
                  <h2 className="text-xl font-black text-gray-900">Additional Documents by Profession</h2>
                  <p className="text-sm text-gray-400 mt-0.5">Submit the section that matches your employment status</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {OCCUPATION_DOCS.map(({ role, icon, items }) => (
                  <div key={role} className="bg-gray-50 rounded-2xl border border-gray-100 p-5 hover:border-amber-200 hover:shadow-md transition-all">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl" aria-hidden="true">{icon}</span>
                      <h3 className="text-xs font-black text-gray-700 uppercase tracking-wider">{role}</h3>
                    </div>
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
            </section>

            {/* PHOTO + HOW TO APPLY */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Photo specs */}
              <section className="bg-gradient-to-br from-rose-50 to-red-50 border border-red-100 rounded-[2rem] p-8 relative overflow-hidden" aria-label="Photo specifications for visa">
                <Camera className="absolute top-4 right-4 text-red-200/50" size={80} aria-hidden="true" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 bg-red-100 rounded-xl" aria-hidden="true"><Camera size={20} className="text-red-600" /></div>
                    <h2 className="text-xl font-black text-gray-900">Photo Specifications</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { label: "Size",        val: "47×36mm (rectangular)" },
                      { label: "Background", val: "Pure White only" },
                      { label: "Standard",   val: "ICAO Compliant" },
                      { label: "Recency",    val: "Taken within 90 days" },
                      { label: "Face",       val: "70–80% of frame" },
                      { label: "Copies",     val: "Minimum 2 copies" },
                    ].map(({ label, val }) => (
                      <div key={label} className="bg-white rounded-xl p-3 shadow-sm border border-red-100">
                        <p className="text-[9px] font-black uppercase tracking-widest text-red-400 mb-1">{label}</p>
                        <p className="text-xs font-bold text-gray-800 leading-snug">{val}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-red-500 mb-2">❌ Not Accepted</p>
                  {["Glasses, hats, or headwear (except religious)", "Heavy filters, retouching, or beauty apps", "Grey, off-white, or cream background", "Old photos over 90 days", "White clothing blending with background", "Dark or patterned backgrounds"].map((no, i) => (
                    <div key={i} className="flex gap-2 text-xs text-red-700 font-medium bg-red-100 rounded-lg px-3 py-2 mb-1.5">
                      <span className="shrink-0" aria-hidden="true">✕</span> {no}
                    </div>
                  ))}
                </div>
              </section>

              {/* How to apply steps */}
              <section className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm" aria-label={`How to apply for ${countryName} visa step by step`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-amber-50 rounded-xl" aria-hidden="true"><Plane size={20} className="text-amber-600" /></div>
                  <h2 className="text-xl font-black text-gray-900">How to Apply — 5 Steps</h2>
                </div>
                <div className="space-y-4 relative">
                  <div className="absolute left-[18px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-amber-300 to-transparent" aria-hidden="true" />
                  {PROCESS_STEPS.map((s, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-0 top-1 w-9 h-9 bg-amber-400 rounded-xl flex items-center justify-center text-base shadow-sm" aria-hidden="true">
                        {s.icon}
                      </div>
                      <h3 className="font-black text-gray-800 text-sm mb-0.5">{s.title}</h3>
                      <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                      {s.link && (
                        <Link href={s.link} className="text-[10px] font-black text-amber-600 hover:underline mt-1 block">
                          Open tool →
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* BANK BALANCE GUIDE */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10" aria-label={`Bank balance required for ${countryName} visa from Bangladesh`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-blue-50 rounded-xl" aria-hidden="true"><Wallet size={22} className="text-blue-600" /></div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">Bank Balance Required for {countryName} Visa</h2>
                  <p className="text-sm text-gray-400 mt-0.5">General guidelines for Bangladeshi applicants — {currentYear}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {BANK_TIERS.map(({ label, min, rec, color }) => (
                  <div key={label} className={`bg-${color}-50 border-2 border-${color}-100 rounded-2xl p-5`}>
                    <p className={`text-[9px] font-black uppercase tracking-widest text-${color}-500 mb-2`}>{label}</p>
                    <p className="text-lg font-black text-gray-800 leading-tight mb-1">{min}</p>
                    <p className="text-xs text-gray-500 font-bold">Recommended: {rec}</p>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">⏳ Statement Period</p>
                  <p className="text-sm font-black text-gray-800">Last 3–6 months — stamped every page by branch</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">📊 Pattern Check</p>
                  <p className="text-sm font-black text-gray-800">Consistent income — not a sudden large deposit</p>
                </div>
              </div>

              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 flex gap-3">
                <TriangleAlert size={17} className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-amber-800 font-medium leading-relaxed">
                  <strong>Critical:</strong> Do NOT deposit a large lump sum 1–2 weeks before applying. Embassy officers
                  specifically look for sudden balance spikes — it signals financial instability, not strength.
                  Maintain a stable, growing balance over 3–6 months.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-3 p-3 bg-slate-900 rounded-2xl">
                <span aria-hidden="true">📊</span>
                <p className="text-sm text-slate-300 font-medium">
                  Check the exact{" "}
                  <Link href="/visa-rejection" className="text-amber-400 font-black hover:underline">
                    {countryName} visa rejection rate for Bangladeshi applicants →
                  </Link>
                </p>
              </div>
            </section>

            {/* REJECTION REASONS + FIXES */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10" aria-label={`${countryName} visa rejection reasons and how to fix them`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-red-50 rounded-xl" aria-hidden="true"><AlertTriangle size={22} className="text-red-600" /></div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">Why {countryName} Visas Get Rejected — and How to Fix It</h2>
                  <p className="text-sm text-gray-400 mt-0.5">Most common rejection reasons for Bangladeshi applicants</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {REJECTION_REASONS.map((r, i) => (
                  <article key={i} className={`p-5 rounded-2xl border ${riskColor(r.risk)}`}>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-start gap-2">
                        <span className="text-xl shrink-0" aria-hidden="true">{r.icon}</span>
                        <h3 className="font-black text-sm leading-snug">{r.title}</h3>
                      </div>
                      <span className={`text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 ${riskPill(r.risk)}`}>
                        {r.risk}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed mb-3 opacity-80">{r.desc}</p>
                    <div className="flex items-start gap-1.5 bg-green-50 border border-green-100 rounded-xl p-2.5">
                      <CheckCircle size={12} className="text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-[10px] text-green-700 font-bold leading-snug"><strong>Fix:</strong> {r.fix}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* EXPERT APPROVAL TIPS */}
            <section className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 rounded-[2rem] p-8 md:p-10 relative overflow-hidden" aria-label={`Expert tips to get ${countryName} visa approved`}>
              <Lightbulb className="absolute -bottom-8 -right-8 text-amber-200/60" size={160} aria-hidden="true" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-7">
                  <div className="p-2.5 bg-amber-100 rounded-xl" aria-hidden="true"><Lightbulb size={22} className="text-amber-600" /></div>
                  <div>
                    <h2 className="text-2xl font-black text-gray-900">{countryName} Visa Approval Tips — Expert Guide</h2>
                    <p className="text-sm text-gray-500 mt-0.5">Proven strategies from consultants who have processed 42,000+ visas</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {APPROVAL_TIPS.map(({ num, tip }) => (
                    <div key={num} className="bg-white rounded-2xl p-5 flex gap-4 shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
                      <span className="text-2xl font-black text-amber-200 shrink-0" aria-hidden="true">{num}</span>
                      <p className="text-sm text-gray-700 font-medium leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ ACCORDION */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10" aria-label={`Frequently asked questions — ${countryName} visa Bangladesh`}>
              <div className="flex items-center gap-3 mb-7">
                <div className="p-2.5 bg-purple-50 rounded-xl" aria-hidden="true"><HelpCircle size={22} className="text-purple-600" /></div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">FAQ — {countryName} Visa for Bangladeshi Citizens</h2>
                  <p className="text-sm text-gray-400 mt-0.5">Most common questions from Bangladeshi travelers applying for {countryName} visa</p>
                </div>
              </div>
              <div className="space-y-3">
                {faqSchemaItems.map((item, i) => (
                  <details
                    key={i}
                    className="group bg-gray-50 border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-amber-300 transition-all"
                    itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
                  >
                    <summary className="list-none flex items-center justify-between p-5 cursor-pointer" itemProp="name">
                      <span className="font-black text-gray-800 pr-4 leading-snug text-sm">
                        <span className="text-amber-500 mr-2" aria-hidden="true">Q.</span>{item.q}
                      </span>
                      <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shrink-0 group-open:bg-amber-400 group-open:border-amber-400 transition-all duration-300" aria-hidden="true">
                        <ChevronRight size={13} className="text-gray-500 group-open:text-white rotate-90" />
                      </div>
                    </summary>
                    <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 ml-6"
                      itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p itemProp="text">{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* SEO ARTICLE BLOCK */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10" aria-label={`${countryName} visa complete guide ${currentYear}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full" aria-hidden="true" />
                <h2 className="text-2xl font-black text-gray-900">
                  {countryName} Visa from Bangladesh — Full Reference Guide {currentYear}
                </h2>
              </div>
              <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
                <p>
                  Getting a <strong className="text-gray-800">{countryName} visa from Bangladesh</strong> in {currentYear} requires
                  a complete, well-organized application package submitted at the {countryName} Embassy or an authorised JVAC
                  in Dhaka. Whether you are applying for a tourist visa, family visit visa, or business visa, the core financial
                  and identity documentation requirements are largely the same.
                </p>

                <h3 className="text-lg font-black text-gray-800">{countryName} Visa Application Process for Bangladeshis</h3>
                <p>
                  Applications are typically submitted in person at the {countryName} Embassy or a VFS Global / JVAC centre in
                  Dhaka. You'll complete the official visa application form, attach your document package, pay the embassy fee
                  (non-refundable), and wait for a decision. Some countries require biometric enrollment at the time of
                  application. Use our{" "}
                  <Link href="/travel-resources/visa-processing-time-tracker" className="text-amber-600 font-semibold hover:underline">
                    Visa Processing Time Tracker
                  </Link>{" "}
                  to check current {countryName} processing estimates.
                </p>

                <h3 className="text-lg font-black text-gray-800">How Long Does the {countryName} Visa Take from Bangladesh?</h3>
                <p>
                  Standard processing typically takes <strong className="text-gray-800">7–15 working days</strong>. During peak
                  travel seasons (June–August and December–January), this can extend to 30–45 days. We recommend applying at
                  minimum 6–8 weeks before your travel date — and 10–12 weeks during peak season. Priority processing is
                  available at some embassies for an additional fee.
                </p>

                <h3 className="text-lg font-black text-gray-800">Cover Letter for {countryName} Visa — What to Include</h3>
                <p>
                  Your cover letter to the {countryName} Visa Officer must address: (1) your full name and passport number,
                  (2) exact travel dates and purpose, (3) accommodation details, (4) financial capability summary, and —
                  most critically — (5) your strong ties to Bangladesh: current employment, owned property, spouse and
                  children in Bangladesh, and any other evidence proving you will return after the trip.
                  A generic template letter is immediately identifiable and frequently causes rejection.
                  Use our{" "}
                  <Link href="/travel-resources/travel-document-generator" className="text-amber-600 font-semibold hover:underline">
                    Travel Document Generator
                  </Link>{" "}
                  for a personalized cover letter draft.
                </p>

                <h3 className="text-lg font-black text-gray-800">Can Eammu Holidays Help with My {countryName} Visa?</h3>
                <p>
                  Yes — our certified visa consultants manage the complete {countryName} visa application for Bangladeshi
                  citizens: document checklist verification, photo compliance check, cover letter drafting, NOC preparation,
                  VFS appointment booking, embassy submission, and application tracking. With a 98% approval rate across
                  42,000+ processed applications, we know exactly what the {countryName} Embassy looks for.{" "}
                  <Link href="/contact/travel-agency-bangladesh" className="text-amber-600 font-semibold hover:underline">
                    Contact our Dhaka office
                  </Link>{" "}
                  or{" "}
                  <Link href="/contact/travel-agency-dubai" className="text-amber-600 font-semibold hover:underline">
                    Dubai office
                  </Link>{" "}
                  for a free consultation.
                </p>

                <h3 className="text-lg font-black text-gray-800">Reapplying for {countryName} Visa After Rejection</h3>
                <p>
                  A {countryName} visa refusal is not permanent. Read the refusal letter carefully, wait the cooling-off period
                  (typically 3–6 months), address every stated rejection reason with stronger supporting documents, and always
                  declare the prior refusal in your new application. Hiding a previous rejection causes automatic disqualification.
                  Use our{" "}
                  <Link href="/visa-rejection" className="text-amber-600 font-semibold hover:underline">
                    Visa Rejection Checker
                  </Link>{" "}
                  to understand your approval odds before reapplying.
                </p>
              </div>
            </section>

            {/* INTERNAL LINKS */}
            <section aria-label="Related visa services and tools">
              <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-5">
                Related Visa Services &amp; Resources
              </h2>
              <div className="flex flex-wrap gap-2">
                {RELATED_LINKS.map(l => (
                  <Link key={l.href} href={l.href}
                    className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-full text-xs font-semibold hover:border-amber-400 hover:text-amber-700 hover:bg-amber-50 transition">
                    {l.label}
                  </Link>
                ))}
              </div>
            </section>

          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <aside className="lg:col-span-4 space-y-6" aria-label="Visa application sidebar">

            {/* STICKY CTA */}
            <div className="bg-gray-900 rounded-[2rem] p-7 text-white sticky top-6 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl -mr-20 -mt-20" aria-hidden="true" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center" aria-hidden="true">
                    <MessageCircle size={20} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-black text-base leading-none">{countryName} Visa Help</h3>
                    <p className="text-gray-400 text-xs font-bold mt-0.5">Free consultation · Reply in 2 hours</p>
                  </div>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed mb-5">
                  Our certified consultants know the exact {currentYear} requirements for{" "}
                  <strong className="text-white/80">{countryName}</strong> and will guide you through every step —
                  from document preparation to embassy submission.
                </p>

                {[
                  { icon: "📈", label: "Success Rate",       val: "98% Approved" },
                  { icon: "📋", label: "Service",            val: "Full document review" },
                  { icon: "⏱️", label: "Processing",         val: "7–15 business days" },
                  { icon: "💬", label: "Response",           val: "Within 2 hours" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 bg-white/5 border border-white/10 rounded-2xl mb-2">
                    <span className="text-base" aria-hidden="true">{s.icon}</span>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-amber-400">{s.label}</p>
                      <p className="font-black text-white text-sm">{s.val}</p>
                    </div>
                  </div>
                ))}

                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                  aria-label={`Apply for ${countryName} visa via WhatsApp`}
                  className="flex items-center justify-center gap-3 w-full py-4 mt-5 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black transition-all shadow-xl shadow-green-900/20 active:scale-95 mb-2 group text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  Apply for {countryName} Visa
                  <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
                <p className="text-[9px] text-center text-gray-500 font-bold">FREE ADVICE · NO UPFRONT FEES · 24/7 EXPERT TEAM</p>
              </div>
            </div>

            {/* QUICK TOOLS */}
            <div className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm">
              <h3 className="font-black text-gray-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <Zap size={14} className="text-amber-500" aria-hidden="true" /> Visa Tools — Use Before Applying
              </h3>
              <div className="space-y-2">
                {[
                  { icon: "✓",  label: "Visa Checklist Generator",    href: "/travel-resources/visa-checklist-generator",        desc: "Personalized document list" },
                  { icon: "⏱", label: "Processing Time Tracker",      href: "/travel-resources/visa-processing-time-tracker",     desc: "Real-time wait estimates" },
                  { icon: "📊", label: "Visa Rejection Checker",       href: "/visa-rejection",                                    desc: "Know your approval odds" },
                  { icon: "📄", label: "Travel Document Generator",    href: "/travel-resources/travel-document-generator",        desc: "Cover letter & itinerary" },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-amber-50 border border-transparent hover:border-amber-100 transition-all group">
                    <span className="text-base w-5 text-center" aria-hidden="true">{l.icon}</span>
                    <div>
                      <div className="text-xs font-black text-gray-700 group-hover:text-amber-700 transition">{l.label}</div>
                      <div className="text-[9px] text-gray-400">{l.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* STUDY ABROAD BANNER */}
            <div className="bg-blue-600 text-white rounded-[2rem] p-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-2">🎓 Study Abroad</p>
              <h3 className="font-black text-base mb-2">Studying in {countryName}?</h3>
              <p className="text-xs text-blue-100 leading-relaxed mb-4">
                We handle{" "}
                <Link href="/our-services/visa-services/student-visa-from-bangladesh" className="text-yellow-300 font-semibold hover:underline">student visas</Link>,{" "}
                <Link href="/scholarships" className="text-yellow-300 font-semibold hover:underline">scholarships</Link>, and{" "}
                <Link href="/target-ielts-immigration-center" className="text-yellow-300 font-semibold hover:underline">IELTS prep</Link>.
              </p>
              <Link href="/study-abroad" className="block text-center py-3 bg-yellow-400 text-blue-900 rounded-xl font-black text-xs hover:bg-yellow-300 transition">
                Study Abroad Guide →
              </Link>
            </div>

            {/* CONTACT */}
            <div className="bg-[#f5c800] rounded-[2rem] p-7 text-center">
              <div className="text-4xl mb-3" aria-hidden="true">🙋</div>
              <h4 className="font-black text-xl text-black mb-2">Need Personalized Help?</h4>
              <p className="text-black/70 text-xs leading-relaxed mb-5">
                Our consultants confirm the exact {countryName} requirements for your specific situation
                and handle the entire process — no guesswork.
              </p>
              <a href="mailto:support@eammu.com"
                className="block bg-black text-white py-3 rounded-xl font-black text-sm hover:bg-gray-800 transition mb-3">
                📧 support@eammu.com
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="block bg-green-600 text-white py-3 rounded-xl font-black text-sm hover:bg-green-700 transition">
                💬 WhatsApp Now
              </a>
              <div className="mt-4 pt-4 border-t border-black/10 flex justify-center gap-4">
                <Link href="/contact/travel-agency-bangladesh" className="text-[10px] font-black text-black/60 hover:text-black hover:underline transition">Dhaka Office</Link>
                <span className="text-black/20">·</span>
                <Link href="/contact/travel-agency-dubai" className="text-[10px] font-black text-black/60 hover:text-black hover:underline transition">Dubai Office</Link>
              </div>
            </div>

          </aside>
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="bg-gray-900 py-14 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <img src={country.flag} alt={`${countryName} flag`} className="w-20 h-14 object-cover rounded-xl mx-auto mb-5 shadow-xl" width={80} height={56} loading="lazy" />
          <h2 className="text-3xl font-black text-white mb-3">Ready to Apply for Your {countryName} Visa?</h2>
          <p className="text-gray-400 mb-2 leading-relaxed text-sm">
            Let our certified consultants prepare your complete application — correctly, on time, with a 98% approval rate for Bangladeshi citizens.
          </p>
          <p className="text-gray-600 text-xs mb-8">
            Offices in{" "}
            <Link href="/contact/travel-agency-bangladesh" className="text-gray-500 hover:text-white hover:underline">Dhaka</Link>,{" "}
            <Link href="/contact/travel-agency-dubai" className="text-gray-500 hover:text-white hover:underline">Dubai</Link>,{" "}
            <Link href="/contact/travel-agency-armenia" className="text-gray-500 hover:text-white hover:underline">Armenia</Link>, and{" "}
            <Link href="/contact/travel-agency-georgia" className="text-gray-500 hover:text-white hover:underline">Georgia</Link>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              aria-label={`Apply for ${countryName} visa via WhatsApp`}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black transition-all text-sm active:scale-95">
              Apply via WhatsApp →
            </a>
            <Link href="/visa/visa-guide"
              className="inline-flex items-center justify-center px-8 py-5 border-2 border-white/20 text-white rounded-2xl font-black hover:bg-white/10 transition-all text-sm">
              Browse All Visa Guides
            </Link>
            <Link href="/travel-resources/visa-checklist-generator"
              className="inline-flex items-center justify-center px-8 py-5 border-2 border-white/20 text-white/80 rounded-2xl font-bold hover:bg-white/10 transition-all text-sm">
              Generate Checklist →
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default async function CountryVisaPage({ params }) {
  const { slug } = await params;
  const cleanSlug = slug.replace(/-visa$/, "");
  const country = countries.find(c => createSlug(c.country) === cleanSlug);

  // Country not found at all — hard 404
  if (!country) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-10">
        <div className="text-7xl mb-6">🌍</div>
        <h1 className="text-3xl font-black text-gray-900 mb-3">Country Not Found</h1>
        <p className="text-gray-500 mb-8">We couldn't find that destination. Please search again.</p>
        <Link href="/visa" className="px-8 py-4 bg-green-600 text-white rounded-2xl font-black hover:bg-green-700 transition">← Browse All Countries</Link>
      </div>
    );
  }

  const d = visadata[cleanSlug];
  const countryName = country.country;
  const whatsappMsg = encodeURIComponent(`Hi, I want to apply for a ${countryName} Visa. I checked the requirements on Eammu Holidays.`);
  const whatsappUrl = `https://wa.me/8801631312524?text=${whatsappMsg}`;

  // ── FALLBACK: country exists but no visa data yet ──
  if (!d) {
    return <FallbackVisaPage country={country} whatsappUrl={whatsappUrl} />;
  }

  // ── FULL DATA PAGE ────────────────────────────────────────────────────────
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#f8f9fb] font-sans antialiased text-[#1a1c1e]">

      {/* ── HERO ── */}
      <div className="relative bg-[#f5c800] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-5 py-16 md:py-20 relative z-10">
          <div className="flex items-center gap-2 text-sm text-black/50 font-semibold mb-8">
            <Link href="/" className="hover:text-black transition">Home</Link>
            <ChevronRight size={14} />
            <Link href="/visa" className="hover:text-black transition">Tourist Visa</Link>
            <ChevronRight size={14} />
            <span className="text-black font-bold">{countryName} Visa</span>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-black/10 backdrop-blur px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-black/70">
                  {currentYear} Embassy Protocol
                </span>
                <span className="bg-green-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                  {d.visa_category_details?.visa_type}
                </span>
                <span className="bg-white/80 text-gray-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1">
                  <Calendar size={11} /> Updated: {d.last_updated}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-black leading-tight tracking-tight mb-3">
                {countryName} Tourist Visa Requirements<br />
                <span className="text-green-700">for Bangladeshi Citizens</span>
              </h1>
              <h2 className="text-base md:text-lg font-semibold text-black/70 mb-4 leading-relaxed">{d.title}</h2>
              <p className="text-black/60 leading-relaxed text-sm mb-7 max-w-lg">{d.description}</p>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: "✅", label: "98% Success Rate" },
                  { icon: "📋", label: "Embassy Verified" },
                  { icon: "⚡", label: "24hr Document Review" },
                  { icon: "🔒", label: "Secure & Confidential" },
                ].map(b => (
                  <span key={b.label} className="flex items-center gap-1.5 bg-white/60 backdrop-blur px-3 py-2 rounded-xl text-xs font-bold text-black/70 border border-black/10">
                    {b.icon} {b.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-700" />
                <div className="relative bg-white p-3 rounded-2xl shadow-2xl overflow-hidden w-72 h-48">
                  <img src={country.flag} alt={`${countryName} flag`} className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap shadow-lg">
                  {d.visa_category_details?.main_category}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── QUICK STATS ── */}
      <div className="max-w-7xl mx-auto px-5 -mt-6 relative z-20 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: <Clock size={22} className="text-amber-500" />, label: "Processing Time", val: d.processing_time_metrics?.standard_turnaround, bg: "bg-amber-50 border-amber-100" },
            { icon: <Calendar size={22} className="text-blue-500" />, label: "Stay Duration", val: d.stay_and_validity_rules?.standard_stay, bg: "bg-blue-50 border-blue-100" },
            { icon: <ShieldCheck size={22} className="text-green-500" />, label: "Visa Validity", val: d.stay_and_validity_rules?.visa_validity_window, bg: "bg-green-50 border-green-100" },
            { icon: <Landmark size={22} className="text-purple-500" />, label: "Embassy Fee", val: d.visa_fee_structure_2026?.embassy_visa_fee, bg: "bg-purple-50 border-purple-100" },
          ].map((s, i) => (
            <div key={i} className={`${s.bg} border-2 p-5 rounded-2xl bg-white shadow-sm flex flex-col items-center text-center`}>
              <div className="mb-2">{s.icon}</div>
              <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
              <p className="text-sm font-black text-gray-800 leading-tight">{s.val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-5 pb-20">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 space-y-8">

            {/* INTRO */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-yellow-500 rounded-full" />
                <h2 className="text-2xl font-black text-gray-900">{countryName} Visa from Bangladesh — Everything You Need to Know</h2>
              </div>
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  For <strong className="text-gray-800">Bangladeshi citizens</strong>, obtaining a <strong className="text-gray-800">{countryName} tourist visa</strong> requires careful document preparation,
                  a strong financial profile, and a complete application dossier submitted to the {countryName} Embassy or the
                  designated Visa Application Centre (JVAC/VFS Global) in Dhaka.
                </p>
                <p>
                  The standard <strong className="text-gray-800">{d.visa_category_details?.visa_type}</strong> for {countryName}
                  is processed in <strong className="text-gray-800">{d.processing_time_metrics?.standard_turnaround}</strong>.
                  During peak seasons, this can extend to <strong className="text-gray-800">{d.processing_time_metrics?.peak_season_delay}</strong>.
                  We strongly recommend applying at least 6–8 weeks before your travel date.
                </p>
                <p>
                  The most common reasons Bangladeshi applicants face rejection are <strong className="text-gray-800">insufficient financial documentation</strong>,
                  a weak or missing cover letter, non-compliant photographs, and inconsistent travel itinerary dates.
                  Our expert checklist below covers every requirement in detail.
                </p>
              </div>
            </section>

            {/* DOCUMENTS */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-green-50 rounded-2xl"><CheckCircle size={26} className="text-green-600" /></div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">{countryName} Visa — Mandatory Documents</h2>
                  <p className="text-sm text-gray-400 mt-0.5">All items below are required. Missing even one causes rejection.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600 mb-5 pb-2 border-b border-gray-100">01. Primary Documents</h3>
                  <div className="space-y-3">
                    {d.comprehensive_requirements_checklist?.primary_documents.map((item, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-green-50/50 border border-green-100 rounded-2xl">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle size={12} className="text-white" />
                        </div>
                        <p className="text-sm text-gray-700 font-medium leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-5 pb-2 border-b border-gray-100">02. Financial Proof</h3>
                  <div className="space-y-3">
                    {d.comprehensive_requirements_checklist?.financial_proofs.map((item, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-blue-50/50 border border-blue-100 rounded-2xl">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle size={12} className="text-white" />
                        </div>
                        <p className="text-sm text-gray-700 font-medium leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>

                  {d.comprehensive_requirements_checklist?.logistics_proofs && (
                    <>
                      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-600 mt-8 mb-5 pb-2 border-b border-gray-100">03. Travel Logistics</h3>
                      <div className="space-y-3">
                        {d.comprehensive_requirements_checklist.logistics_proofs.map((item, i) => (
                          <div key={i} className="flex gap-3 p-4 bg-purple-50/50 border border-purple-100 rounded-2xl">
                            <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle size={12} className="text-white" />
                            </div>
                            <p className="text-sm text-gray-700 font-medium leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {d.comprehensive_requirements_checklist?.occupation_specific && (
                <div className="border-t border-gray-100 pt-8">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">04. Occupation-Specific Documents</h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(d.comprehensive_requirements_checklist.occupation_specific).map(([role, items]) => (
                      <div key={role} className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
                        <h4 className="text-xs font-black text-gray-700 uppercase tracking-wider mb-3 capitalize">{role.replace(/_/g, " ")}</h4>
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
              )}
            </section>

            {/* PHOTO + ITINERARY */}
            <div className="grid md:grid-cols-2 gap-6">
              <section className="bg-gradient-to-br from-rose-50 to-red-50 border border-red-100 rounded-[2rem] p-8 relative overflow-hidden">
                <Camera className="absolute top-6 right-6 text-red-200" size={80} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 bg-red-100 rounded-xl"><Camera size={22} className="text-red-600" /></div>
                    <h2 className="text-xl font-black text-gray-900">Photo Specifications</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-red-100">
                      <p className="text-[9px] font-black uppercase tracking-widest text-red-400 mb-1">Size</p>
                      <p className="text-lg font-black text-gray-800 font-mono">{d.technical_photo_specifications?.dimensions}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-red-100">
                      <p className="text-[9px] font-black uppercase tracking-widest text-red-400 mb-1">Background</p>
                      <p className="text-base font-bold text-gray-800">{d.technical_photo_specifications?.background_color}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-red-100">
                      <p className="text-[9px] font-black uppercase tracking-widest text-red-400 mb-1">Standard</p>
                      <p className="text-xs font-bold text-gray-700">{d.technical_photo_specifications?.standard}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-red-100">
                      <p className="text-[9px] font-black uppercase tracking-widest text-red-400 mb-1">Face Size</p>
                      <p className="text-xs font-bold text-gray-700">{d.technical_photo_specifications?.facial_metrics}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-red-500 mb-3">❌ Strictly Prohibited</p>
                    <div className="space-y-2">
                      {d.technical_photo_specifications?.strict_donots?.map((no, i) => (
                        <div key={i} className="flex gap-2 text-xs text-red-700 font-medium bg-red-100 rounded-lg px-3 py-2">
                          <span className="shrink-0">✕</span> {no}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-orange-50 rounded-xl"><Map size={22} className="text-orange-600" /></div>
                  <h2 className="text-xl font-black text-gray-900">Itinerary Strategy</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-5 bg-amber-50 border-2 border-amber-200 rounded-2xl">
                    <p className="text-[9px] font-black uppercase tracking-widest text-amber-600 mb-2">⭐ Recommended Route</p>
                    <p className="font-black text-gray-800 text-lg">{d.itinerary_design_strategy?.golden_route}</p>
                  </div>
                  {d.itinerary_design_strategy?.regional_focus && (
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Seasonal Focus</p>
                      <p className="text-sm font-bold text-gray-700">{d.itinerary_design_strategy.regional_focus}</p>
                    </div>
                  )}
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="text-[9px] font-black uppercase tracking-widest text-blue-500 mb-1">📌 Embassy Rule</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{d.itinerary_design_strategy?.requirements}</p>
                  </div>
                </div>
              </section>
            </div>

            {/* JVAC CENTERS */}
            {d.geospatial_submission_data?.length > 0 && (
              <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 bg-blue-50 rounded-xl"><MapPin size={22} className="text-blue-600" /></div>
                  <div>
                    <h2 className="text-2xl font-black text-gray-900">Official JVAC Submission Centers</h2>
                    <p className="text-sm text-gray-400 mt-0.5">Where to submit your {countryName} visa application in Bangladesh</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {d.geospatial_submission_data.map((loc, i) => (
                    <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                          <MapPin size={16} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-black text-gray-900">{loc.center}</h4>
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed">{loc.address}</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-gray-100 space-y-2 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-gray-500">Submission Hours</span>
                          <span className="font-black text-gray-800">{loc.submission_hours}</span>
                        </div>
                        {loc.passport_collection && (
                          <div className="flex justify-between items-center border-t pt-2">
                            <span className="font-bold text-gray-500">Passport Collection</span>
                            <span className="font-black text-gray-800">{loc.passport_collection}</span>
                          </div>
                        )}
                        {loc.gps_coordinates && (
                          <div className="pt-2 border-t">
                            <span className="text-[9px] text-gray-400 font-bold">GPS: {loc.gps_coordinates}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* EXPERT HACKS */}
            <section className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
              <Lightbulb className="absolute -bottom-8 -right-8 text-amber-200/60" size={180} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 bg-amber-100 rounded-xl"><Lightbulb size={22} className="text-amber-600" /></div>
                  <div>
                    <h2 className="text-2xl font-black text-gray-900">{countryName} Visa Approval Tips</h2>
                    <p className="text-sm text-gray-500 mt-0.5">Insider tips from our consultants — what embassies actually look for</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {d.expert_approval_hacks?.map((hack, i) => (
                    <div key={i} className="bg-white rounded-2xl p-5 flex gap-4 shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
                      <span className="text-2xl font-black text-amber-200 shrink-0">0{i + 1}</span>
                      <p className="text-sm text-gray-700 font-medium leading-relaxed">{hack}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* REJECTION RISKS */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-red-50 rounded-xl"><AlertTriangle size={22} className="text-red-600" /></div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">{countryName} Visa Rejection Risks</h2>
                  <p className="text-sm text-gray-400 mt-0.5">Why Bangladeshi applicants get rejected — and how to avoid it</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {d.rejection_risk_matrix?.high_risk?.map((risk, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
                    <span className="text-red-400 shrink-0 font-black text-lg leading-none">●</span>
                    <p className="text-sm text-red-800 font-medium leading-relaxed">{risk}</p>
                  </div>
                ))}
                {d.rejection_risk_matrix?.medium_risk?.map((risk, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-amber-50 border border-amber-100 rounded-xl">
                    <span className="text-amber-400 shrink-0 font-black text-lg leading-none">◐</span>
                    <p className="text-sm text-amber-800 font-medium leading-relaxed">{risk}</p>
                  </div>
                ))}
              </div>
              <div className="p-5 bg-green-50 border border-green-200 rounded-2xl">
                <p className="text-xs font-black text-green-700 uppercase tracking-wider mb-2">✅ Mitigation Strategy</p>
                <p className="text-sm text-green-800 font-medium leading-relaxed">{d.rejection_risk_matrix?.mitigation}</p>
              </div>
            </section>

            {/* ADDITIONAL LOGISTICS */}
            {d.additional_logistics_2026 && (
              <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-gray-100 rounded-xl"><Info size={22} className="text-gray-600" /></div>
                  <h2 className="text-2xl font-black text-gray-900">Essential {countryName} {currentYear} Logistics</h2>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {Object.entries(d.additional_logistics_2026).map(([key, val]) => (
                    <div key={key} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2 capitalize">{key.replace(/_/g, " ")}</p>
                      <p className="text-sm text-gray-700 font-medium leading-relaxed">{val}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* YOUTUBE */}
            {d.youtube_video_options?.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-black text-gray-900">{countryName} Visa — Watch & Learn</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  {d.youtube_video_options.map((video, i) => {
                    const videoId = video.video_link?.split("v=")[1]?.split("&")[0];
                    const thumb = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
                    return (
                      <a key={i} href={video.video_link} target="_blank" rel="noopener noreferrer"
                        className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="relative aspect-video bg-gray-100 overflow-hidden">
                          {thumb && <img src={thumb} alt={video.video_title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 flex items-center justify-center transition-all">
                            <div className="w-14 h-14 bg-amber-400 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                              <svg className="w-6 h-6 fill-white ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="font-black text-sm text-gray-800 group-hover:text-amber-600 transition-colors line-clamp-2 mb-2">{video.video_title}</h3>
                          <span className="text-xs font-bold text-gray-400 group-hover:text-amber-500 transition-colors">Watch on YouTube →</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </section>
            )}

            {/* FAQ */}
            {d.faq_extended?.length > 0 && (
              <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 bg-purple-50 rounded-xl"><HelpCircle size={22} className="text-purple-600" /></div>
                  <div>
                    <h2 className="text-2xl font-black text-gray-900">Frequently Asked Questions — {countryName} Visa from Bangladesh</h2>
                    <p className="text-sm text-gray-400 mt-0.5">Real questions from Bangladeshi travelers applying for {countryName} visa</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {d.faq_extended.map((item, i) => (
                    <details key={i} className="group bg-gray-50 border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-amber-300 transition-all">
                      <summary className="list-none flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50">
                        <span className="font-black text-gray-800 pr-4 leading-snug text-sm">
                          <span className="text-amber-500 mr-2">Q.</span>{item.question}
                        </span>
                        <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shrink-0 group-open:bg-amber-400 group-open:border-amber-400 transition-all duration-300">
                          <ChevronRight size={14} className="text-gray-500 group-open:text-white rotate-90" />
                        </div>
                      </summary>
                      <div className="px-6 pb-6 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 ml-8">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* SEO FOOTER ARTICLE */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full" />
                <h2 className="text-2xl font-black text-gray-900">{countryName} Visa for Bangladesh — {currentYear} Complete Guide</h2>
              </div>
              <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
                <p>
                  Applying for a <strong className="text-gray-800">{countryName} visa from Bangladesh</strong> involves submitting a comprehensive
                  document package to the {countryName} Embassy or JVAC Dhaka. The {d.visa_category_details?.visa_type} is the most common
                  category for Bangladeshi tourists and is valid for <strong className="text-gray-800">{d.stay_and_validity_rules?.standard_stay}</strong>.
                </p>
                <h3 className="text-lg font-black text-gray-800">{countryName} Visa Fee for Bangladeshi Citizens — {currentYear}</h3>
                <p>
                  The current {countryName} embassy visa fee is <strong className="text-gray-800">{d.visa_fee_structure_2026?.embassy_visa_fee}</strong>.
                  VFS Global service charge adds <strong className="text-gray-800">{d.visa_fee_structure_2026?.vfs_service_charge}</strong>.
                  All fees are <strong className="text-gray-800">non-refundable</strong> regardless of visa outcome.
                  Payment is accepted in cash and by card at the JVAC.
                </p>
                <h3 className="text-lg font-black text-gray-800">Bank Balance Required for {countryName} Visa from Bangladesh</h3>
                <p>
                  Applicants should maintain a minimum bank balance of <strong className="text-gray-800">{d.financial_thresholds_2026?.solo_traveler_min}</strong> for
                  solo travel, with a recommended balance of <strong className="text-gray-800">{d.financial_thresholds_2026?.solo_traveler_recommended}</strong>.
                  Family travelers should have at least <strong className="text-gray-800">{d.financial_thresholds_2026?.family_travel_min}</strong>.
                  Avoid large last-minute deposits — embassy officers specifically flag these as red signals.
                </p>
                <h3 className="text-lg font-black text-gray-800">{countryName} Visa Photo Size for Bangladeshi Applicants</h3>
                <p>
                  Photos must be exactly <strong className="text-gray-800">{d.technical_photo_specifications?.dimensions}</strong>
                  ({d.technical_photo_specifications?.standard}). Background must be <strong className="text-gray-800">{d.technical_photo_specifications?.background_color}</strong>.
                  Non-compliant photos are the #1 administrative rejection reason. Our photo verification service ensures 100% compliance.
                </p>
              </div>
            </section>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:col-span-4 space-y-6">

            {/* CTA */}
            <div className="bg-gray-900 rounded-[2rem] p-7 text-white sticky top-6 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl -mr-20 -mt-20" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center">
                    <Phone size={22} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg">Fast-Track Apply</h3>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Expert Consultant</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  {[
                    { icon: "⏱️", label: "Processing Time", val: d.processing_time_metrics?.standard_turnaround },
                    { icon: "🏛️", label: "Submission Center", val: "JVAC / Embassy Dhaka" },
                    { icon: "📈", label: "Our Success Rate", val: "98% Approved" },
                    { icon: "💬", label: "Response Time", val: "Within 2 hours" },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
                      <span className="text-xl">{s.icon}</span>
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-amber-400">{s.label}</p>
                        <p className="font-black text-white text-sm">{s.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-5 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black transition-all shadow-xl shadow-green-900/20 active:scale-95 mb-3 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  Apply via WhatsApp
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-[9px] text-center text-gray-500 font-bold">FREE CONSULTATION · NO UPFRONT PAYMENT · 24/7 TEAM</p>
              </div>
            </div>

            {/* COST BREAKDOWN */}
            <div className="bg-amber-50 border-2 border-amber-100 rounded-[2rem] p-7">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard size={20} className="text-amber-600" />
                <h3 className="font-black text-gray-900 text-lg">{currentYear} Cost Breakdown</h3>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-amber-100">
                  <span className="text-sm text-gray-600 font-semibold">Embassy Fee</span>
                  <span className="font-black text-gray-900">{d.visa_fee_structure_2026?.embassy_visa_fee}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-amber-100">
                  <span className="text-sm text-gray-600 font-semibold">VFS Service Charge</span>
                  <span className="font-black text-gray-900">{d.visa_fee_structure_2026?.vfs_service_charge}</span>
                </div>
                {d.visa_fee_structure_2026?.optional_value_added_services && (
                  <div className="pt-2">
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-3">Optional Add-ons</p>
                    {Object.entries(d.visa_fee_structure_2026.optional_value_added_services).map(([k, v]) => (
                      <div key={k} className="flex justify-between text-xs py-1.5">
                        <span className="text-gray-500 capitalize">{k.replace(/_/g, " ")}</span>
                        <span className="font-bold text-gray-700">{v}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="bg-amber-100 rounded-xl p-3 text-xs text-amber-800 font-bold text-center">
                ⚠️ {d.visa_fee_structure_2026?.payment_policy}
              </div>
            </div>

            {/* TIMELINE */}
            <div className="bg-white border border-gray-100 rounded-[2rem] p-7 shadow-sm">
              <div className="flex items-center gap-2 mb-7">
                <Clock size={20} className="text-gray-600" />
                <h3 className="font-black text-gray-900 text-lg">Processing Timeline</h3>
              </div>
              <div className="space-y-5 relative">
                <div className="absolute left-[13px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-green-400 via-amber-400 to-orange-400" />
                {[
                  { label: "Standard Turnaround", time: d.processing_time_metrics?.standard_turnaround, color: "bg-green-500" },
                  { label: "Embassy Review Phase", time: d.processing_time_metrics?.embassy_review_phase, color: "bg-blue-500" },
                  { label: "Peak Season Delay", time: d.processing_time_metrics?.peak_season_delay, color: "bg-orange-500" },
                  ...(d.processing_time_metrics?.express_service ? [{ label: "Express Option", time: d.processing_time_metrics.express_service, color: "bg-purple-500" }] : []),
                ].map((item, i) => (
                  <div key={i} className="relative pl-9">
                    <div className={`absolute left-0 top-1.5 w-7 h-7 rounded-full ${item.color} border-4 border-white shadow-md flex items-center justify-center`}>
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <p className="text-[9px] uppercase font-black text-gray-400 tracking-widest">{item.label}</p>
                    <p className="font-black text-gray-800 text-sm">{item.time}</p>
                  </div>
                ))}
              </div>
              {d.processing_time_metrics?.notes && (
                <div className="mt-5 p-3 bg-blue-50 rounded-xl border border-blue-100 text-xs text-blue-700 font-medium leading-relaxed">
                  ℹ️ {d.processing_time_metrics.notes}
                </div>
              )}
            </div>

            {/* BANK BALANCE */}
            <div className="bg-blue-600 rounded-[2rem] p-7 text-white shadow-xl shadow-blue-200">
              <div className="flex items-center gap-2 mb-5">
                <CreditCard size={20} />
                <h3 className="font-black text-lg">Minimum Bank Balance</h3>
              </div>
              <div className="text-5xl font-black mb-1 text-amber-300">{d.financial_thresholds_2026?.solo_traveler_min}</div>
              <p className="text-blue-100 text-sm mb-4">Recommended: <strong>{d.financial_thresholds_2026?.solo_traveler_recommended}</strong></p>
              <div className="grid grid-cols-1 gap-2 mb-5 text-xs">
                <div className="bg-white/10 rounded-xl p-3">
                  <p className="text-blue-200 font-bold">Family Travel</p>
                  <p className="font-black">{d.financial_thresholds_2026?.family_travel_min}</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <p className="text-blue-200 font-bold">Calculation Logic</p>
                  <p className="font-bold text-blue-100">{d.financial_thresholds_2026?.logic}</p>
                </div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 flex gap-2 text-xs">
                <AlertTriangle size={14} className="shrink-0 mt-0.5" />
                <p className="leading-relaxed">{d.financial_thresholds_2026?.warning}</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="bg-[#f5c800] rounded-[2rem] p-7 text-center">
              <div className="text-5xl mb-4">🙋</div>
              <h4 className="font-black text-xl text-black mb-2">Need Help?</h4>
              <p className="text-black/70 text-sm leading-relaxed mb-5">
                Our experts handle form-filling, photo verification & document review for {countryName} visa applications.
              </p>
              <a href="mailto:support@eammu.com" className="block bg-black text-white py-3 rounded-xl font-black text-sm hover:bg-gray-800 transition mb-3">
                📧 support@eammu.com
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="block bg-green-600 text-white py-3 rounded-xl font-black text-sm hover:bg-green-700 transition">
                💬 WhatsApp Us Now
              </a>
            </div>

          </aside>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="bg-gray-900 py-16 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <img src={country.flag} alt={countryName} className="w-20 h-14 object-cover rounded-xl mx-auto mb-5 shadow-xl" />
          <h2 className="text-3xl font-black text-white mb-3">Ready to Apply for Your {countryName} Visa?</h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-sm">Let our experts handle your complete application — correctly, on time, and with a 98% success rate for Bangladeshi citizens.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black transition-all text-sm">
              Start Application via WhatsApp →
            </a>
            <Link href="/visa" className="inline-flex items-center justify-center px-8 py-5 border-2 border-white/20 text-white rounded-2xl font-black hover:bg-white/10 transition-all text-sm">
              Browse Other Countries
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
