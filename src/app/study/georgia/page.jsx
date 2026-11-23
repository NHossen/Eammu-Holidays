import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/georgia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Georgia from Bangladesh 2026 | Eammu Holidays",
  "description": "Complete 2026 guide to studying in Georgia for Bangladeshi students: tuition in BDT, MBBS, D3 visa, residence permit, new 2026 rules, work limits and counseling across Bangladesh.",
  "alternates": {
    "canonical": "https://eammu.com/study/georgia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Georgia from Bangladesh 2026 | Eammu Holidays",
    "description": "Complete 2026 guide to studying in Georgia for Bangladeshi students: tuition in BDT, MBBS, D3 visa, residence permit, new 2026 rules, work limits and counseling across Bangladesh.",
    "url": "https://eammu.com/study/georgia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Georgia from Bangladesh 2026 | Eammu Holidays",
    "description": "Complete 2026 guide to studying in Georgia for Bangladeshi students: tuition in BDT, MBBS, D3 visa, residence permit, new 2026 rules, work limits and counseling across Bangladesh."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Georgia", "href": "/study/georgia"}];
const NAV = [
  {
    "label": "Georgia Hub",
    "pages": [
      {
        "href": "/study/georgia",
        "label": "Study in Georgia Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/georgia/study-in-georgia-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/georgia/georgia-reality-check-eu-schengen-and-new-rules",
        "label": "Reality Check: EU, Schengen & Rules"
      },
      {
        "href": "/study/georgia/why-study-in-georgia-pros-and-cons",
        "label": "Pros & Cons"
      },
      {
        "href": "/study/georgia/study-in-georgia-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/georgia/english-and-georgian-language-requirements",
        "label": "Language Requirements"
      },
      {
        "href": "/study/georgia/tuition-fees-in-georgia-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/georgia/cost-of-living-in-georgia-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/georgia/cheapest-universities-in-georgia",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/georgia/top-universities-in-georgia",
        "label": "Top Universities"
      },
      {
        "href": "/study/georgia/public-vs-private-universities-in-georgia",
        "label": "Public vs Private"
      },
      {
        "href": "/study/georgia/scholarships-in-georgia-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/georgia/admission-requirements-in-georgia-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/georgia/study-gap-accepted-in-georgia",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/georgia/study-in-georgia-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/georgia/study-in-georgia-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/georgia/georgia-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Courses, Housing & Life",
    "pages": [
      {
        "href": "/study/georgia/application-guide-for-georgian-universities",
        "label": "Application Guide"
      },
      {
        "href": "/study/georgia/degree-recognition-and-eligibility-in-georgia",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/georgia/mbbs-and-md-in-georgia-for-bangladeshi-students",
        "label": "MBBS & MD in Georgia"
      },
      {
        "href": "/study/georgia/dentistry-and-pharmacy-in-georgia",
        "label": "Dentistry & Pharmacy"
      },
      {
        "href": "/study/georgia/nursing-and-public-health-in-georgia",
        "label": "Nursing & Public Health"
      },
      {
        "href": "/study/georgia/it-and-cse-courses-in-georgia",
        "label": "IT & CSE Courses"
      },
      {
        "href": "/study/georgia/business-and-mba-in-georgia",
        "label": "Business & MBA"
      },
      {
        "href": "/study/georgia/engineering-and-architecture-in-georgia",
        "label": "Engineering & Architecture"
      },
      {
        "href": "/study/georgia/tourism-and-hospitality-in-georgia",
        "label": "Tourism & Hospitality"
      },
      {
        "href": "/study/georgia/premed-foundation-and-language-courses-in-georgia",
        "label": "Pre-Med & Language Courses"
      },
      {
        "href": "/study/georgia/student-accommodation-in-georgia",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/georgia/health-insurance-for-students-in-georgia",
        "label": "Health Insurance"
      },
      {
        "href": "/study/georgia/student-life-halal-food-and-safety-in-georgia",
        "label": "Student Life, Halal & Safety"
      }
    ]
  },
  {
    "label": "Visa, Permit & Rules",
    "pages": [
      {
        "href": "/study/georgia/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/georgia/study-visa-application-step-by-step",
        "label": "Study Visa Step by Step"
      },
      {
        "href": "/study/georgia/study-residence-permit-guide-for-georgia",
        "label": "Study Residence Permit Guide"
      },
      {
        "href": "/study/georgia/new-2026-rules-for-foreign-students-in-georgia",
        "label": "New 2026 Rules Explained"
      },
      {
        "href": "/study/georgia/keep-your-study-permit-valid-in-georgia",
        "label": "Keep Your Permit Valid"
      },
      {
        "href": "/study/georgia/proof-of-funds-requirements-for-georgia-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/georgia/visa-processing-time-and-cost-georgia",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/georgia/visa-refusal-reasons-and-how-to-avoid-them",
        "label": "Visa Refusal Reasons"
      },
      {
        "href": "/study/georgia/part-time-job-and-work-rules-in-georgia",
        "label": "Work Rules"
      },
      {
        "href": "/study/georgia/after-graduation-stay-options-in-georgia",
        "label": "After Graduation"
      },
      {
        "href": "/study/georgia/scams-and-fake-offer-warning-georgia",
        "label": "Scams & Fake Offers"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/georgia/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/georgia/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/georgia/study-in-georgia-from-bangladesh",
    "title": "Study in Georgia from Bangladesh: Complete Step-by-Step Guide",
    "description": "Costs in BDT, English-taught MBBS and degrees, the D3 study visa, the study residence permit and the stricter 2026 rules every Bangladeshi family must know."
  },
  {
    "href": "/study/georgia/new-2026-rules-for-foreign-students-in-georgia",
    "title": "Georgia's New 2026 Rules for Foreign Students Explained (Effective After June 2026)",
    "description": "Accredited-only enrolment, language certificates or state exams, quotas, academic progress and permit revocation, in plain English."
  },
  {
    "href": "/study/georgia/mbbs-and-md-in-georgia-for-bangladeshi-students",
    "title": "MBBS (MD) in Georgia for Bangladeshi Students: Fees, Rules and Risks",
    "description": "English-taught medicine in Georgia, published fees, the new 2026 rules, recognition questions and what to verify before paying."
  },
  {
    "href": "/study/georgia/tuition-fees-in-georgia-for-bangladeshi-students",
    "title": "Tuition Fees in Georgia for Bangladeshi Students",
    "description": "A clear USD/GEL-to-BDT look at what each level of study costs and the extra fees families forget."
  }
];
const FAQS = [
  {
    "q": "Is it worth studying in Georgia from Bangladesh?",
    "a": "For well-informed students who choose accredited programmes, verify recognition and budget realistically, it can be a low-cost option. It is not a shortcut to the EU."
  },
  {
    "q": "Which guide should I read first?",
    "a": "Start with Study in Georgia from Bangladesh and the new 2026 rules."
  },
  {
    "q": "Do I need an agent?",
    "a": "Not required. If you use one, pay the university directly and get everything in writing."
  },
  {
    "q": "Where can I get a free consultation?",
    "a": "Contact Eammu Holidays by WhatsApp, phone or email shown below."
  }
];
const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://eammu.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Study",
          "item": "https://eammu.com/study"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Georgia",
          "item": "https://eammu.com/study/georgia"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Georgia 2026: Complete Guide for Bangladeshi Students",
      "description": "Complete 2026 guide to studying in Georgia for Bangladeshi students: tuition in BDT, MBBS, D3 visa, residence permit, new 2026 rules, work limits and counseling across Bangladesh.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/georgia",
      "author": {
        "@type": "Organization",
        "name": "Eammu Holidays"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Eammu Holidays",
        "url": "https://eammu.com"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is it worth studying in Georgia from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For well-informed students who choose accredited programmes, verify recognition and budget realistically, it can be a low-cost option. It is not a shortcut to the EU."
          }
        },
        {
          "@type": "Question",
          "name": "Which guide should I read first?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start with Study in Georgia from Bangladesh and the new 2026 rules."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an agent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not required. If you use one, pay the university directly and get everything in writing."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I get a free consultation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact Eammu Holidays by WhatsApp, phone or email shown below."
          }
        }
      ]
    }
  ]
};

const linkClass = 'text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600';

export default function Page() {
  const whatsapp = `https://wa.me/${AGENCY.phone.replace(/\D/g, '')}`;
  return (
    <div className="bg-slate-50 text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-white">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 text-sm text-slate-600">
          {BREADCRUMBS.map((b, i) => (
            <li key={b.href} className="flex items-center gap-2">
              {i === BREADCRUMBS.length - 1 ? (
                <span aria-current="page" className="font-semibold text-emerald-900">{b.name}</span>
              ) : (
                <Link href={b.href} className="hover:text-emerald-700 hover:underline">{b.name}</Link>
              )}
              {i < BREADCRUMBS.length - 1 && <span aria-hidden="true">/</span>}
            </li>
          ))}
        </ol>
      </nav>

      <header className="bg-emerald-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Georgia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Georgia 2026: Complete Guide for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Costs in BDT, English-taught MBBS and degrees, the D3 study visa, the study residence permit, the stricter 2026 rules and honest advice on what Georgia is and is not.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-21">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Georgia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 55 Georgia guides</summary>
            <div className="mt-3 max-h-[70vh] overflow-y-auto">
              {NAV.map((g) => (
                <details key={g.label} className="mb-1" open={g.pages.some((p) => p.href === PAGE_HREF)}>
                  <summary className="cursor-pointer rounded-md px-2 py-2 text-sm font-bold text-emerald-900 hover:bg-emerald-50">{g.label} ({g.pages.length})</summary>
                  <ul className="mb-2 ml-2 border-l border-slate-200 pl-2">
                    {g.pages.map((p) => (
                      <li key={p.href}>
                        <Link
                          href={p.href}
                          aria-current={p.href === PAGE_HREF ? 'page' : undefined}
                          className={`block rounded-md px-2 py-1.5 text-sm ${p.href === PAGE_HREF ? 'bg-yellow-400 font-bold text-emerald-950' : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'}`}
                        >
                          {p.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </details>
        </aside>

        <div>
          <article>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Read this first: the honest summary</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li><strong>Low tuition, not free:</strong> MBBS about $4,000 to $8,000 a year at private universities, and non-medical English degrees often $2,500 to $5,000.</li><li><strong>New 2026 rules:</strong> Georgia adopted stricter foreign-student rules on 25 June 2026, covering accreditation, language proof, quotas and academic progress.</li><li><strong>Visa needed:</strong> Bangladeshi citizens need a visa; for study the route is a D3 study visa, then a study residence permit at the Public Service Hall.</li><li><strong>Not in the EU or Schengen:</strong> a Georgian permit gives no right to live or work elsewhere in Europe.</li><li><strong>Work:</strong> restricted for foreigners without the proper permit; do not plan to fund study through work.</li><li><strong>Recognition:</strong> check recognition in Bangladesh, especially for medicine.</li></ul>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Verify current rules with the Georgian Ministry of Foreign Affairs consular portal (geoconsul.gov.ge), the Public Service Hall (psh.gov.ge) and the university&apos;s international office.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Why Bangladeshi students consider Georgia</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Low-cost English-taught medicine and dentistry.</li><li>English programmes in IT, business and engineering at several universities.</li><li>A safe, scenic country with mosques and halal food in Tbilisi and Batumi.</li><li>A compact capital and a Black Sea coast.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Where to begin</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">If you are...</th><th scope="col" className="px-3 py-2 text-left font-bold">Start here</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">After HSC with science, wanting MBBS</td><td className="px-3 py-2 align-top"><Link href="/study/georgia/mbbs-and-md-in-georgia-for-bangladeshi-students" className={linkClass}>MBBS and MD in Georgia</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">After HSC, wanting a bachelor</td><td className="px-3 py-2 align-top"><Link href="/study/georgia/admission-requirements-in-georgia-for-bangladeshi-students" className={linkClass}>Admission requirements</Link> and <Link href="/study/georgia/english-and-georgian-language-requirements" className={linkClass}>language requirements</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">After SSC</td><td className="px-3 py-2 align-top"><Link href="/study/georgia/study-in-georgia-after-ssc" className={linkClass}>Study in Georgia after SSC</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">A diploma holder</td><td className="px-3 py-2 align-top"><Link href="/study/georgia/study-in-georgia-after-diploma" className={linkClass}>Study in Georgia after diploma</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">A graduate wanting a master or MBA</td><td className="px-3 py-2 align-top"><Link href="/study/georgia/business-and-mba-in-georgia" className={linkClass}>Business and MBA</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Worried about the new law</td><td className="px-3 py-2 align-top"><Link href="/study/georgia/new-2026-rules-for-foreign-students-in-georgia" className={linkClass}>New 2026 rules explained</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Worried about scams</td><td className="px-3 py-2 align-top"><Link href="/study/georgia/scams-and-fake-offer-warning-georgia" className={linkClass}>Scam warning</Link></td></tr></tbody></table></div>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Indicative cost snapshot (USD and BDT)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">USD</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT (about Tk 122 per USD)</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">MBBS tuition per year</td><td className="px-3 py-2 align-top">$4,000 – 8,000</td><td className="px-3 py-2 align-top">Tk 4.9 – 9.8 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">English bachelor or master (non-medical)</td><td className="px-3 py-2 align-top">$2,500 – 5,000</td><td className="px-3 py-2 align-top">Tk 3.1 – 6.1 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs per month (Tbilisi, Batumi)</td><td className="px-3 py-2 align-top">$340 – 685</td><td className="px-3 py-2 align-top">Tk 41,000 – 84,000</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Flights from Dhaka</td><td className="px-3 py-2 align-top">$400 – 800</td><td className="px-3 py-2 align-top">Tk 49,000 – 98,000</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Indicative 2026–2027 estimates. Confirm fees and rules with the university and official portals before paying.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Your step-by-step journey</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Profile and budget check.</li><li>Shortlist state-accredited universities; see <Link href="/study/georgia/top-universities-in-georgia" className={linkClass}>top universities</Link> and <Link href="/study/georgia/public-vs-private-universities-in-georgia" className={linkClass}>public vs private</Link>.</li><li>Prove language level; see <Link href="/study/georgia/study-in-georgia-without-ielts" className={linkClass}>study without IELTS</Link>.</li><li>Apply, receive an acceptance letter and pay the deposit; see <Link href="/study/georgia/application-guide-for-georgian-universities" className={linkClass}>application guide</Link>.</li><li>Apply for the D3 study visa; see <Link href="/study/georgia/study-visa-application-step-by-step" className={linkClass}>study visa step by step</Link>.</li><li>Arrive and apply for the study residence permit; see <Link href="/study/georgia/study-residence-permit-guide-for-georgia" className={linkClass}>residence permit guide</Link>.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">How Eammu Holidays supports you</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Free profile review and a realistic BDT budget.</li><li>Accreditation and fee checks for your shortlist.</li><li>Document, legalisation and funds checklists.</li><li>Visa and permit guidance, and a pre-departure briefing.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Complete Directory: Every Georgia Study Guide</h2>
<div className="mt-5 grid gap-4 sm:grid-cols-2">{NAV.map((g) => (<div key={g.label} className="rounded-xl border border-slate-200 bg-white p-4"><h3 className="font-bold text-emerald-900">{g.label}</h3><ul className="mt-2 space-y-1 text-sm">{g.pages.map((p) => (<li key={p.href}><Link href={p.href} className={linkClass}>{p.label}</Link></li>))}</ul></div>))}</div>
</section>
          </article>

          <section className="mt-14" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-emerald-900">Frequently Asked Questions</h2>
            <div className="mt-5 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
              {FAQS.map((f, i) => (
                <details key={f.q} className="group px-5 py-4" open={i === 0}>
                  <summary className="cursor-pointer list-none font-semibold text-emerald-900"><h3 className="inline text-base font-semibold">{f.q}</h3></summary>
                  <p className="mt-3 leading-7 text-slate-700">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section aria-labelledby="related-heading" className="mt-14">
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Georgia Study Guides</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {RELATED.map((r) => (
                <Link key={r.href} href={r.href} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-yellow-400 hover:shadow-md">
                  <h3 className="text-lg font-bold text-emerald-900">{r.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{r.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-2xl bg-emerald-900 p-6 text-white shadow-lg sm:p-8" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Georgia</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and scholarship shortlist, visa and residence permit guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block rounded-lg bg-yellow-400 px-6 py-3 font-bold text-emerald-950 transition hover:bg-yellow-300">Book Free Counseling with Eammu Holidays</a>
            <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
              <li><a href={`tel:${AGENCY.phone}`} className="hover:underline">Call / WhatsApp: {AGENCY.phone}</a></li>
              <li><a href={`mailto:${AGENCY.email}`} className="hover:underline">{AGENCY.email}</a></li>
              <li>{AGENCY.address}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
