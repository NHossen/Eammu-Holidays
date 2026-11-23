import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/serbia/student-accommodation-in-serbia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Student Accommodation in Serbia Guide 2026 | Eammu",
  "description": "Student accommodation in Serbia for Bangladeshi students in 2026: dormitories, shared flats and rent in EUR and BDT, plus how to avoid rental scams.",
  "keywords": [
    "student accommodation Serbia",
    "dormitory Belgrade",
    "rent for students Serbia",
    "housing Serbia international students"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/serbia/student-accommodation-in-serbia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Student Accommodation in Serbia Guide 2026 | Eammu",
    "description": "Student accommodation in Serbia for Bangladeshi students in 2026: dormitories, shared flats and rent in EUR and BDT, plus how to avoid rental scams.",
    "url": "https://eammu.com/study/serbia/student-accommodation-in-serbia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Student Accommodation in Serbia Guide 2026 | Eammu",
    "description": "Student accommodation in Serbia for Bangladeshi students in 2026: dormitories, shared flats and rent in EUR and BDT, plus how to avoid rental scams."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Serbia", "href": "/study/serbia"}, {"name": "Student Accommodation", "href": "/study/serbia/student-accommodation-in-serbia"}];
const NAV = [
  {
    "label": "Serbia Hub",
    "pages": [
      {
        "href": "/study/serbia",
        "label": "Study in Serbia Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/serbia/study-in-serbia-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/serbia/study-in-serbia-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/serbia/tuition-fees-in-serbia-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/serbia/cost-of-living-in-serbia-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/serbia/cheapest-universities-in-serbia",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/serbia/top-universities-in-serbia",
        "label": "Top Universities"
      },
      {
        "href": "/study/serbia/public-vs-private-universities-in-serbia",
        "label": "Public vs Private Universities"
      },
      {
        "href": "/study/serbia/admission-requirements-in-serbia-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/serbia/study-gap-accepted-universities-in-serbia",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/serbia/study-in-serbia-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/serbia/study-in-serbia-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/serbia/serbia-intake-dates",
        "label": "Intake Dates"
      },
      {
        "href": "/study/serbia/serbia-vs-hungary-vs-poland-for-bangladeshi-students",
        "label": "Serbia vs Hungary vs Poland"
      }
    ]
  },
  {
    "label": "Scholarships & Funding",
    "pages": [
      {
        "href": "/study/serbia/scholarships-in-serbia-for-bangladeshi-students",
        "label": "Scholarships Overview"
      },
      {
        "href": "/study/serbia/world-in-serbia-scholarship-guide",
        "label": "World in Serbia Guide"
      },
      {
        "href": "/study/serbia/world-in-serbia-eligibility-and-deadlines",
        "label": "World in Serbia Eligibility & Deadlines"
      },
      {
        "href": "/study/serbia/university-scholarships-and-fee-waivers-in-serbia",
        "label": "University Scholarships & Fee Waivers"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/serbia/how-to-apply-to-serbian-universities",
        "label": "How to Apply (Step by Step)"
      },
      {
        "href": "/study/serbia/degree-recognition-and-eligibility-in-serbia",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/serbia/entrance-exams-in-serbia",
        "label": "Entrance Exams in Serbia"
      },
      {
        "href": "/study/serbia/bachelors-in-serbia-for-bangladeshi-students",
        "label": "Bachelor's Degrees"
      },
      {
        "href": "/study/serbia/masters-and-phd-in-serbia-for-bangladeshi-students",
        "label": "Master's & PhD"
      },
      {
        "href": "/study/serbia/cse-and-it-courses-in-serbia",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/serbia/engineering-courses-in-serbia",
        "label": "Engineering Courses"
      },
      {
        "href": "/study/serbia/mba-and-business-degrees-in-serbia",
        "label": "MBA & Business"
      },
      {
        "href": "/study/serbia/mbbs-and-medical-degrees-in-serbia",
        "label": "Medicine, Dentistry & Pharmacy"
      },
      {
        "href": "/study/serbia/foundation-year-and-serbian-language-courses-in-serbia",
        "label": "Foundation & Serbian Language"
      },
      {
        "href": "/study/serbia/sop-and-motivation-letter-for-serbia",
        "label": "SOP & Motivation Letter"
      }
    ]
  },
  {
    "label": "Cities & Student Life",
    "pages": [
      {
        "href": "/study/serbia/student-accommodation-in-serbia",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/serbia/study-in-belgrade",
        "label": "Study in Belgrade"
      },
      {
        "href": "/study/serbia/study-in-novi-sad",
        "label": "Study in Novi Sad"
      },
      {
        "href": "/study/serbia/study-in-nis-and-kragujevac",
        "label": "Niš & Kragujevac"
      },
      {
        "href": "/study/serbia/health-insurance-for-students-in-serbia",
        "label": "Health Insurance for Students"
      },
      {
        "href": "/study/serbia/halal-food-and-bangladeshi-community-in-serbia",
        "label": "Halal Food & Bangladeshi Community"
      },
      {
        "href": "/study/serbia/life-in-serbia-for-international-students",
        "label": "Life in Serbia"
      }
    ]
  },
  {
    "label": "Visa, Permit & Work Rules",
    "pages": [
      {
        "href": "/study/serbia/student-visa-requirements-bangladesh",
        "label": "Student Visa & Permit Requirements"
      },
      {
        "href": "/study/serbia/serbia-d-visa-and-temporary-residence-application-guide",
        "label": "D-Visa Application Guide"
      },
      {
        "href": "/study/serbia/serbia-student-documents-checklist",
        "label": "Documents Checklist"
      },
      {
        "href": "/study/serbia/bank-solvency-requirements-for-serbia-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/serbia/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/serbia/serbia-student-visa-refusal-reasons",
        "label": "Visa Refusal Reasons"
      },
      {
        "href": "/study/serbia/part-time-job-and-post-study-work-rules-in-serbia",
        "label": "Work & Post-Study Rules"
      },
      {
        "href": "/study/serbia/bring-family-to-serbia-as-a-student",
        "label": "Family & Dependents"
      },
      {
        "href": "/study/serbia/serbia-police-registration-and-permit-renewal",
        "label": "Police Registration & Renewal"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/serbia/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/serbia/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/serbia/cost-of-living-in-serbia-for-bangladeshi-students",
    "title": "Cost of Living in Serbia for Bangladeshi Students: Monthly Budget",
    "description": "Monthly cost of living in Serbia for Bangladeshi students in 2026: rent, food, transport and insurance in Belgrade, Novi Sad, Niš and Kragujevac."
  },
  {
    "href": "/study/serbia/study-in-belgrade",
    "title": "Study in Belgrade for Bangladeshi Students: Universities, Costs, Life",
    "description": "Study in Belgrade in 2026: University of Belgrade, private universities, rent, transport, jobs and student life for Bangladeshi students."
  },
  {
    "href": "/study/serbia/serbia-student-documents-checklist",
    "title": "Serbia Student Visa and Admission Documents Checklist for Bangladeshis",
    "description": "Complete documents checklist for Serbia admission and student visa in 2026 for Bangladeshi students: academic, financial, housing and insurance papers."
  },
  {
    "href": "/study/serbia/halal-food-and-bangladeshi-community-in-serbia",
    "title": "Halal Food, Prayer Spaces and the Bangladeshi Community in Serbia",
    "description": "Halal food, prayer spaces and Bangladeshi student communities in Serbia in 2026: where to find them and how to settle in."
  }
];
const FAQS = [
  {
    "q": "Are dorms available for international students?",
    "a": "Sometimes, but places are limited. Ask your faculty."
  },
  {
    "q": "How much is rent in Belgrade?",
    "a": "Shared rooms may start around EUR 200–400, with private flats higher."
  },
  {
    "q": "Do I need a contract for the permit?",
    "a": "You need proof of accommodation, such as a lease."
  },
  {
    "q": "Is it safe to rent online?",
    "a": "Only with verification. Scams exist."
  },
  {
    "q": "Can I live with Bangladeshi friends?",
    "a": "Yes, but check lease and occupancy rules."
  },
  {
    "q": "Is accommodation covered by the scholarship?",
    "a": "Check the World in Serbia call for details."
  },
  {
    "q": "When should I book?",
    "a": "As soon as you accept your offer."
  },
  {
    "q": "Who registers my address?",
    "a": "You must register with the police, and landlords often assist."
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
          "name": "Serbia",
          "item": "https://eammu.com/study/serbia"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Student Accommodation",
          "item": "https://eammu.com/study/serbia/student-accommodation-in-serbia"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Student Accommodation in Serbia for Bangladeshi Students (2026)",
      "description": "Student accommodation in Serbia for Bangladeshi students in 2026: dormitories, shared flats and rent in EUR and BDT, plus how to avoid rental scams.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/serbia/student-accommodation-in-serbia",
      "keywords": "student accommodation Serbia, dormitory Belgrade, rent for students Serbia, housing Serbia international students",
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
          "name": "Are dorms available for international students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sometimes, but places are limited. Ask your faculty."
          }
        },
        {
          "@type": "Question",
          "name": "How much is rent in Belgrade?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Shared rooms may start around EUR 200–400, with private flats higher."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a contract for the permit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You need proof of accommodation, such as a lease."
          }
        },
        {
          "@type": "Question",
          "name": "Is it safe to rent online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only with verification. Scams exist."
          }
        },
        {
          "@type": "Question",
          "name": "Can I live with Bangladeshi friends?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but check lease and occupancy rules."
          }
        },
        {
          "@type": "Question",
          "name": "Is accommodation covered by the scholarship?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check the World in Serbia call for details."
          }
        },
        {
          "@type": "Question",
          "name": "When should I book?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As soon as you accept your offer."
          }
        },
        {
          "@type": "Question",
          "name": "Who registers my address?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You must register with the police, and landlords often assist."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Serbia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Student Accommodation in Serbia for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Housing proof is needed for your residence permit, so plan it early.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} counseling team &middot; Updated <time dateTime="2026-11-22">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Serbia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 59 Serbia guides</summary>
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
          <section aria-labelledby="takeaways-heading" className="rounded-xl border-l-4 border-yellow-400 bg-white p-5 shadow-sm">
            <h2 id="takeaways-heading" className="text-lg font-bold text-emerald-900">Key takeaways</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Proof of accommodation, such as a lease, is part of student residence applications.</li><li>University of Niš visa guidance, for example, lists a lease contract among documents.</li><li>Rent in Belgrade has risen in recent years.</li><li>Never pay a deposit for a flat you have not verified.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#main-housing-options" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Main housing options</a></li><li><a href="#dormitory-tips" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Dormitory tips</a></li><li><a href="#avoiding-rental-scams" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Avoiding rental scams</a></li><li><a href="#housing-and-your-permit" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Housing and your permit</a></li><li><a href="#search-timeline" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Search timeline</a></li><li><a href="#what-to-check-in-a-private-rental-contract" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What to check in a private rental contract</a></li></ol>
          </nav>

          <article>
<section id="main-housing-options" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Main housing options</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Option</th><th scope="col" className="px-3 py-2 text-left font-bold">EUR (per month)</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT approx. (per month)</th><th scope="col" className="px-3 py-2 text-left font-bold">What to check</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Student dormitory (where available)</td><td className="px-3 py-2 align-top">EUR 60 – 150</td><td className="px-3 py-2 align-top">Tk 8,400 – 21,000</td><td className="px-3 py-2 align-top">Limited places; rules differ</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Shared private room</td><td className="px-3 py-2 align-top">EUR 180 – 400</td><td className="px-3 py-2 align-top">Tk 25,200 – 56,000</td><td className="px-3 py-2 align-top">Belgrade higher</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Private studio or one-bedroom</td><td className="px-3 py-2 align-top">EUR 300 – 650</td><td className="px-3 py-2 align-top">Tk 42,000 – 91,000</td><td className="px-3 py-2 align-top">Utilities may be extra</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 EUR = about RSD 117 = about Tk 140 and are indicative planning estimates for 2026–2027, based on published university pages and Serbian official guidance. Fees, funds rules and exchange rates change, so always confirm with the university, the Serbian Ministry of Interior (mup.gov.rs) and an Eammu Holidays counselor before paying anything.</p>
</section>
<section id="dormitory-tips" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Dormitory tips</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Ask the faculty whether foreign self-financed students can apply.</li><li>Check distance to campus and public transport.</li><li>Keep your allocation letter for the permit.</li><li>Ask about deposit and rules.</li></ul>
</section>
<section id="avoiding-rental-scams" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Avoiding rental scams</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Never pay a deposit for a flat you have not seen or verified by trusted video tour.</li><li>Avoid sending money to strangers; use traceable payment.</li><li>Get a written lease and receipts.</li><li>Confirm the landlord will help with address registration.</li></ul>
</section>
<section id="housing-and-your-permit" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Housing and your permit</h2>
<p className="mt-4 leading-7 text-slate-700">Your accommodation address is registered with the police and used for your residence application. See <Link href="/study/serbia/serbia-police-registration-and-permit-renewal" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">police registration and renewal</Link> and <Link href="/study/serbia/serbia-student-documents-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">documents checklist</Link>. Compare rent with <Link href="/study/serbia/cost-of-living-in-serbia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">living costs</Link>.</p>
</section>
<section id="search-timeline" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Search timeline</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">When</th><th scope="col" className="px-3 py-2 text-left font-bold">Action</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">After offer</td><td className="px-3 py-2 align-top">Ask about dormitories and note deadlines</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">2–3 months before</td><td className="px-3 py-2 align-top">Compare private options and verify landlords</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">1 month before</td><td className="px-3 py-2 align-top">Confirm contract and payment method</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">On arrival</td><td className="px-3 py-2 align-top">Check inventory, register address and keep receipts</td></tr></tbody></table></div>
</section>
<section id="what-to-check-in-a-private-rental-contract" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What to check in a private rental contract</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Names, address and rent amount.</li><li>Deposit amount and return conditions.</li><li>Utilities and internet.</li><li>Notice period and termination rules.</li><li>Whether the landlord supports address registration.</li></ul>
</section>
          </article>

          <section className="mt-12" aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="text-xl font-bold text-emerald-900">Official sources to verify before you pay or apply</h2>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-6 text-slate-700"><li><a href="https://studyinserbia.rs/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Study in Serbia – official portal</a></li><li><a href="https://welcometoserbia.gov.rs/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Welcome to Serbia – official government portal for foreigners</a></li><li><a href="https://mfa.gov.rs/en/citizens/travel-serbia/visa-requirements" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Ministry of Foreign Affairs – visa requirements</a></li><li><a href="https://mup.gov.rs/wps/portal/en/information" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Ministry of Interior – residence information</a></li><li><a href="https://prosveta.gov.rs/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Ministry of Education – scholarships</a></li></ul>
            <p className="mt-3 text-sm leading-6 text-slate-600">Eammu Holidays is a counseling service, not a government body, and cannot guarantee admission, a scholarship or a visa. Rules and fees change; the official sources above always override this page.</p>
          </section>

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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Serbia Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Serbia</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and scholarship shortlist, visa guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
