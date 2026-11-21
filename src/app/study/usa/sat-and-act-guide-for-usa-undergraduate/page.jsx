import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/usa/sat-and-act-guide-for-usa-undergraduate';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "SAT and ACT Guide for USA Bachelor Admission | Eammu Holidays",
  "description": "SAT and ACT guide for Bangladeshi students applying to US universities in 2026: test-optional policies, target scores, test centres, preparation and costs.",
  "alternates": {
    "canonical": "https://eammu.com/study/usa/sat-and-act-guide-for-usa-undergraduate"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "SAT and ACT Guide for USA Bachelor Admission | Eammu Holidays",
    "description": "SAT and ACT guide for Bangladeshi students applying to US universities in 2026: test-optional policies, target scores, test centres, preparation and costs.",
    "url": "https://eammu.com/study/usa/sat-and-act-guide-for-usa-undergraduate",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "SAT and ACT Guide for USA Bachelor Admission | Eammu Holidays",
    "description": "SAT and ACT guide for Bangladeshi students applying to US universities in 2026: test-optional policies, target scores, test centres, preparation and costs."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "USA", "href": "/study/usa"}, {"name": "SAT and ACT Guide", "href": "/study/usa/sat-and-act-guide-for-usa-undergraduate"}];
const NAV = [
  {
    "label": "USA Hub",
    "pages": [
      {
        "href": "/study/usa",
        "label": "Study in USA Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/usa/study-in-usa-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/usa/study-in-usa-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/usa/tuition-fees-in-usa-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/usa/cost-of-living-in-usa-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/usa/cheapest-universities-in-usa",
        "label": "Affordable Universities"
      },
      {
        "href": "/study/usa/top-universities-in-usa",
        "label": "Top Universities"
      },
      {
        "href": "/study/usa/community-college-transfer-pathway-in-usa",
        "label": "Community College Pathway"
      },
      {
        "href": "/study/usa/scholarships-in-usa-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/usa/fulbright-scholarship-guide-for-bangladeshi-students",
        "label": "Fulbright Guide"
      },
      {
        "href": "/study/usa/assistantships-ta-ra-funding-in-usa",
        "label": "TA and RA Funding"
      },
      {
        "href": "/study/usa/admission-requirements-in-usa-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/usa/study-gap-accepted-universities-in-usa",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/usa/study-in-usa-after-hsc",
        "label": "After HSC"
      },
      {
        "href": "/study/usa/study-in-usa-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/usa/usa-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Tests & Applications",
    "pages": [
      {
        "href": "/study/usa/sat-and-act-guide-for-usa-undergraduate",
        "label": "SAT and ACT Guide"
      },
      {
        "href": "/study/usa/gre-and-gmat-guide-for-usa-masters",
        "label": "GRE and GMAT Guide"
      },
      {
        "href": "/study/usa/toefl-ielts-and-duolingo-for-usa",
        "label": "TOEFL, IELTS and Duolingo"
      },
      {
        "href": "/study/usa/us-university-application-guide",
        "label": "Application Guide"
      },
      {
        "href": "/study/usa/statement-of-purpose-and-lor-guide-for-usa",
        "label": "SOP and LOR Guide"
      },
      {
        "href": "/study/usa/degree-recognition-and-wes-evaluation-for-usa",
        "label": "Degree Recognition and WES"
      }
    ]
  },
  {
    "label": "Programs & Student Life",
    "pages": [
      {
        "href": "/study/usa/cse-and-it-courses-in-usa",
        "label": "CSE and IT Courses"
      },
      {
        "href": "/study/usa/stem-programs-and-stem-designation-in-usa",
        "label": "STEM Programs and Designation"
      },
      {
        "href": "/study/usa/engineering-courses-in-usa-for-bangladeshi-students",
        "label": "Engineering Courses"
      },
      {
        "href": "/study/usa/data-science-and-ai-masters-in-usa",
        "label": "Data Science and AI"
      },
      {
        "href": "/study/usa/mba-in-usa-for-bangladeshi-students",
        "label": "MBA in USA"
      },
      {
        "href": "/study/usa/masters-in-usa-for-bangladeshi-students",
        "label": "Master's in USA"
      },
      {
        "href": "/study/usa/phd-in-usa-for-bangladeshi-students",
        "label": "PhD in USA"
      },
      {
        "href": "/study/usa/medicine-and-md-pathway-in-usa-for-bangladeshi-students",
        "label": "Medicine and MD Pathway"
      },
      {
        "href": "/study/usa/best-states-and-cities-to-study-in-usa",
        "label": "Best States and Cities"
      },
      {
        "href": "/study/usa/student-accommodation-in-usa",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/usa/halal-food-and-student-life-in-usa-for-bangladeshis",
        "label": "Halal Food and Student Life"
      },
      {
        "href": "/study/usa/health-insurance-for-international-students-in-usa",
        "label": "Health Insurance"
      },
      {
        "href": "/study/usa/banking-and-sending-money-to-usa-from-bangladesh",
        "label": "Banking and Sending Money"
      },
      {
        "href": "/study/usa/avoid-scams-and-unaccredited-universities-in-usa",
        "label": "Avoid Scams and Fake Universities"
      }
    ]
  },
  {
    "label": "Visa, OPT & Work Rules",
    "pages": [
      {
        "href": "/study/usa/f1-student-visa-requirements-bangladesh",
        "label": "F-1 Visa Requirements"
      },
      {
        "href": "/study/usa/form-i-20-explained-for-f1-visa",
        "label": "Form I-20 Explained"
      },
      {
        "href": "/study/usa/ds-160-and-sevis-fee-guide",
        "label": "DS-160 and SEVIS Fee"
      },
      {
        "href": "/study/usa/proof-of-funds-requirements-for-usa-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/usa/student-visa-processing-time-and-cost-usa",
        "label": "Visa Time and Cost"
      },
      {
        "href": "/study/usa/f1-visa-interview-questions-and-tips",
        "label": "Interview Questions and Tips"
      },
      {
        "href": "/study/usa/f1-visa-rejection-214b-and-reapplication",
        "label": "Visa Rejection and Reapplication"
      },
      {
        "href": "/study/usa/f2-visa-for-spouse-and-children-of-students",
        "label": "F-2 Visa for Dependents"
      },
      {
        "href": "/study/usa/cpt-opt-and-stem-opt-rules-in-usa",
        "label": "CPT, OPT and STEM OPT"
      },
      {
        "href": "/study/usa/h1b-and-post-study-work-pathways-in-usa",
        "label": "H-1B and Post-Study Pathways"
      },
      {
        "href": "/study/usa/usa-student-visa-rule-changes-2026",
        "label": "Visa Rule Changes 2026"
      },
      {
        "href": "/study/usa/pre-departure-checklist-for-usa-students",
        "label": "Pre-Departure Checklist"
      },
      {
        "href": "/study/usa/maintaining-f1-status-in-usa",
        "label": "Maintaining F-1 Status"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/usa/bangladesh-offices",
        "label": "Bangladesh Offices and Support"
      },
      {
        "href": "/study/usa/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/usa/study-in-usa-after-hsc",
    "title": "Study in the USA After HSC: Bachelor Options for 2026",
    "description": "Bachelor options, tests and routes for HSC students."
  },
  {
    "href": "/study/usa/top-universities-in-usa",
    "title": "Top Universities in the USA for Bangladeshi Students (2026)",
    "description": "Top-tier universities, aid facts and a realistic shortlist method."
  },
  {
    "href": "/study/usa/admission-requirements-in-usa-for-bangladeshi-students",
    "title": "Admission Requirements in the USA for Bangladeshi Students",
    "description": "Grades, tests and documents by level."
  },
  {
    "href": "/study/usa/us-university-application-guide",
    "title": "How to Apply to US Universities from Bangladesh: Step-by-Step",
    "description": "Common App, portals, documents and timeline."
  }
];
const FAQS = [
  {
    "q": "Is SAT mandatory for US universities?",
    "a": "No, not everywhere. Many universities are test-optional, but a growing number of selective universities have reinstated requirements. Check each school before deciding."
  },
  {
    "q": "Which is easier, SAT or ACT?",
    "a": "Neither is easier overall. The SAT has a more reading-and-math format, while the ACT includes a science section and moves faster. Take a practice test of each and choose the one you score better on."
  },
  {
    "q": "Can I take the SAT in Bangladesh?",
    "a": "Yes, the SAT is offered at test centres in Bangladesh on specific dates. Register early because seats fill, and confirm the current format and centre list on the College Board website."
  },
  {
    "q": "What SAT score is competitive?",
    "a": "For selective universities, scores around 1450 and above are common among admitted students, while many good universities admit students with lower scores. Targets vary by school."
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
          "name": "USA",
          "item": "https://eammu.com/study/usa"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "SAT and ACT Guide",
          "item": "https://eammu.com/study/usa/sat-and-act-guide-for-usa-undergraduate"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "SAT and ACT Guide for US Bachelor Admission (Bangladeshi Students)",
      "description": "SAT and ACT guide for Bangladeshi students applying to US universities in 2026: test-optional policies, target scores, test centres, preparation and costs.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/usa/sat-and-act-guide-for-usa-undergraduate",
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
          "name": "Is SAT mandatory for US universities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, not everywhere. Many universities are test-optional, but a growing number of selective universities have reinstated requirements. Check each school before deciding."
          }
        },
        {
          "@type": "Question",
          "name": "Which is easier, SAT or ACT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither is easier overall. The SAT has a more reading-and-math format, while the ACT includes a science section and moves faster. Take a practice test of each and choose the one you score better on."
          }
        },
        {
          "@type": "Question",
          "name": "Can I take the SAT in Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the SAT is offered at test centres in Bangladesh on specific dates. Register early because seats fill, and confirm the current format and centre list on the College Board website."
          }
        },
        {
          "@type": "Question",
          "name": "What SAT score is competitive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For selective universities, scores around 1450 and above are common among admitted students, while many good universities admit students with lower scores. Targets vary by school."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in USA 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">SAT and ACT Guide for US Bachelor Admission (Bangladeshi Students)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Whether you need the SAT or ACT, which scores matter, test-optional policies and how to prepare from Bangladesh.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-21">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in USA guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 63 USA guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Do you need it?</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li><strong>Test-required:</strong> some selective universities now expect SAT or ACT scores again.</li><li><strong>Test-optional:</strong> you may submit scores if they strengthen your application.</li><li><strong>Test-blind:</strong> a few universities do not consider scores at all.</li><li>For merit scholarships, a strong score can still help even at test-optional schools.</li></ul>
<p className="mt-4 leading-7 text-slate-700">Because policies change from year to year, confirm each university&apos;s current policy on its admissions page; see <Link href="/study/usa/admission-requirements-in-usa-for-bangladeshi-students" className={linkClass}>admission requirements</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">SAT vs ACT</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Feature</th><th scope="col" className="px-3 py-2 text-left font-bold">SAT</th><th scope="col" className="px-3 py-2 text-left font-bold">ACT</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Sections</td><td className="px-3 py-2 align-top">Reading and Writing, Math (digital format)</td><td className="px-3 py-2 align-top">English, Math, Reading, Science, optional Writing</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Scoring</td><td className="px-3 py-2 align-top">400 to 1600</td><td className="px-3 py-2 align-top">1 to 36</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Pace</td><td className="px-3 py-2 align-top">Adaptive and shorter</td><td className="px-3 py-2 align-top">Faster, more questions</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Best for</td><td className="px-3 py-2 align-top">Students strong in reasoning and data</td><td className="px-3 py-2 align-top">Students comfortable with speed and science passages</td></tr></tbody></table></div>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Preparation plan for Bangladeshi students</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Take a full practice test under timed conditions to find your starting score.</li><li>Study 6 to 12 weeks with official practice materials.</li><li>Focus on your weak sections, then retest.</li><li>Register early and plan one retake if needed.</li><li>Send scores to universities only when the policy says so.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Costs</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">USD</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">SAT registration (international, indicative)</td><td className="px-3 py-2 align-top">$100 – $140</td><td className="px-3 py-2 align-top">Tk 12,300 – 17,220</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Additional score reports</td><td className="px-3 py-2 align-top">$15 – $15</td><td className="px-3 py-2 align-top">Tk 1,845 – 1,845</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 USD = about Tk 123 and are indicative estimates for the 2026–2027 intake. Fees, scholarship rules, test dates, visa policy and exchange rates change, so always confirm with the university, official US government sources or an Eammu Holidays counselor before paying anything.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">A 12-week preparation plan</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Weeks</th><th scope="col" className="px-3 py-2 text-left font-bold">Focus</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">1</td><td className="px-3 py-2 align-top">Diagnostic test and goal setting</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">2 to 6</td><td className="px-3 py-2 align-top">Targeted practice by section</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">7 to 9</td><td className="px-3 py-2 align-top">Full-length timed tests and error review</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">10 to 12</td><td className="px-3 py-2 align-top">Final polish and test-day routine</td></tr></tbody></table></div>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Official sources to confirm this information</h2>
<p className="mt-4 leading-7 text-slate-700">Policies, fees, test formats and deadlines change. Before you act on anything on this page, check the current version at:</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Official test sites: ets.org, ielts.org, englishtest.duolingo.com, collegeboard.org, mba.com, pearsonpte.com</li><li>The university&apos;s admissions page for accepted scores</li><li>wes.org or ece.org for credential evaluation</li></ul>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays reviews these pages regularly, last updated November 2026, but official sources always take priority.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related USA Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in the USA</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and scholarship shortlist, F-1 visa interview preparation and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
