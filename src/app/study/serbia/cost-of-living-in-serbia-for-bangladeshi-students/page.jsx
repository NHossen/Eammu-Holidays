import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/serbia/cost-of-living-in-serbia-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Cost of Living in Serbia for Bangladeshi Students 2026",
  "description": "Monthly cost of living in Serbia for Bangladeshi students in 2026: rent, food, transport and insurance in Belgrade, Novi Sad, Niš and Kragujevac.",
  "keywords": [
    "cost of living in Serbia",
    "Belgrade student cost of living",
    "Serbia student budget",
    "living cost Serbia BDT"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/serbia/cost-of-living-in-serbia-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Cost of Living in Serbia for Bangladeshi Students 2026",
    "description": "Monthly cost of living in Serbia for Bangladeshi students in 2026: rent, food, transport and insurance in Belgrade, Novi Sad, Niš and Kragujevac.",
    "url": "https://eammu.com/study/serbia/cost-of-living-in-serbia-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Cost of Living in Serbia for Bangladeshi Students 2026",
    "description": "Monthly cost of living in Serbia for Bangladeshi students in 2026: rent, food, transport and insurance in Belgrade, Novi Sad, Niš and Kragujevac."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Serbia", "href": "/study/serbia"}, {"name": "Cost of Living", "href": "/study/serbia/cost-of-living-in-serbia-for-bangladeshi-students"}];
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
    "href": "/study/serbia/tuition-fees-in-serbia-for-bangladeshi-students",
    "title": "Tuition Fees in Serbia for Bangladeshi Students in EUR and BDT",
    "description": "Tuition fees in Serbia for Bangladeshi students in 2026: bachelor, master, PhD and medicine in EUR and BDT, plus fee waivers and hidden costs."
  },
  {
    "href": "/study/serbia/student-accommodation-in-serbia",
    "title": "Student Accommodation in Serbia for Bangladeshi Students",
    "description": "Student accommodation in Serbia for Bangladeshi students in 2026: dormitories, shared flats and rent in EUR and BDT, plus how to avoid rental scams."
  },
  {
    "href": "/study/serbia/study-in-belgrade",
    "title": "Study in Belgrade for Bangladeshi Students: Universities, Costs, Life",
    "description": "Study in Belgrade in 2026: University of Belgrade, private universities, rent, transport, jobs and student life for Bangladeshi students."
  },
  {
    "href": "/study/serbia/bank-solvency-requirements-for-serbia-student-visa",
    "title": "Proof of Funds and Bank Solvency for a Serbia Student Visa",
    "description": "Proof of funds for a Serbia student visa in 2026: how Bangladeshi students should show means of support, sponsor rules and planning estimates."
  }
];
const FAQS = [
  {
    "q": "How much money do I need per month in Serbia?",
    "a": "Plan about EUR 350–700 a month depending on city and housing, excluding tuition."
  },
  {
    "q": "Which Serbian city is cheapest for students?",
    "a": "Niš, Kragujevac and other regional cities are usually cheaper than Belgrade and Novi Sad."
  },
  {
    "q": "Can I live on part-time work in Serbia?",
    "a": "No. Work is limited and wages are modest, so plan to fund studies from savings or a scholarship."
  },
  {
    "q": "Is public transport cheap?",
    "a": "Yes, local transport is inexpensive compared with Western Europe."
  },
  {
    "q": "How much is a dorm in Belgrade?",
    "a": "Dorm costs and availability vary; budget roughly EUR 60–150 and confirm with the university or student centre."
  },
  {
    "q": "Is Serbia cheaper than Hungary?",
    "a": "Often a little cheaper for rent and food, but costs depend on city and lifestyle."
  },
  {
    "q": "Does the World in Serbia scholarship cover living costs?",
    "a": "The scholarship is designed to cover study costs and support, but read the call for exact benefits."
  },
  {
    "q": "Should I carry cash?",
    "a": "Cards work in most places, but keep some dinars for markets and small shops."
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
          "name": "Cost of Living",
          "item": "https://eammu.com/study/serbia/cost-of-living-in-serbia-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Cost of Living in Serbia for Bangladeshi Students (2026): Monthly Budget",
      "description": "Monthly cost of living in Serbia for Bangladeshi students in 2026: rent, food, transport and insurance in Belgrade, Novi Sad, Niš and Kragujevac.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/serbia/cost-of-living-in-serbia-for-bangladeshi-students",
      "keywords": "cost of living in Serbia, Belgrade student cost of living, Serbia student budget, living cost Serbia BDT",
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
          "name": "How much money do I need per month in Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plan about EUR 350–700 a month depending on city and housing, excluding tuition."
          }
        },
        {
          "@type": "Question",
          "name": "Which Serbian city is cheapest for students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Niš, Kragujevac and other regional cities are usually cheaper than Belgrade and Novi Sad."
          }
        },
        {
          "@type": "Question",
          "name": "Can I live on part-time work in Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Work is limited and wages are modest, so plan to fund studies from savings or a scholarship."
          }
        },
        {
          "@type": "Question",
          "name": "Is public transport cheap?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, local transport is inexpensive compared with Western Europe."
          }
        },
        {
          "@type": "Question",
          "name": "How much is a dorm in Belgrade?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dorm costs and availability vary; budget roughly EUR 60–150 and confirm with the university or student centre."
          }
        },
        {
          "@type": "Question",
          "name": "Is Serbia cheaper than Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often a little cheaper for rent and food, but costs depend on city and lifestyle."
          }
        },
        {
          "@type": "Question",
          "name": "Does the World in Serbia scholarship cover living costs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The scholarship is designed to cover study costs and support, but read the call for exact benefits."
          }
        },
        {
          "@type": "Question",
          "name": "Should I carry cash?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cards work in most places, but keep some dinars for markets and small shops."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Cost of Living in Serbia for Bangladeshi Students (2026): Monthly Budget</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A realistic monthly budget in euros and taka, with differences between Belgrade and smaller university cities.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Expect roughly EUR 350–700 a month; Belgrade is the most expensive city.</li><li>Rent is the largest cost and has risen in Belgrade in recent years.</li><li>Mandatory health insurance for foreign students is an extra monthly cost (University of Belgrade information quotes about EUR 66 a month).</li><li>Cooking at home keeps food costs low.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#monthly-budget-indicative" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Monthly budget (indicative)</a></li><li><a href="#sample-monthly-budgets-by-lifestyle" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Sample monthly budgets by lifestyle</a></li><li><a href="#money-saving-tips" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Money-saving tips</a></li><li><a href="#city-differences" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">City differences</a></li><li><a href="#cost-of-living-and-your-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cost of living and your visa</a></li></ol>
          </nav>

          <article>
<section id="monthly-budget-indicative" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Monthly budget (indicative)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Expense</th><th scope="col" className="px-3 py-2 text-left font-bold">EUR (per month)</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT approx. (per month)</th><th scope="col" className="px-3 py-2 text-left font-bold">What to check</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Student dormitory (where available)</td><td className="px-3 py-2 align-top">EUR 60 – 150</td><td className="px-3 py-2 align-top">Tk 8,400 – 21,000</td><td className="px-3 py-2 align-top">Limited places; rules differ for foreign students</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Shared private room</td><td className="px-3 py-2 align-top">EUR 180 – 400</td><td className="px-3 py-2 align-top">Tk 25,200 – 56,000</td><td className="px-3 py-2 align-top">Belgrade higher</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Private studio or one-bedroom</td><td className="px-3 py-2 align-top">EUR 300 – 650</td><td className="px-3 py-2 align-top">Tk 42,000 – 91,000</td><td className="px-3 py-2 align-top">Utilities may be extra</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Food and groceries</td><td className="px-3 py-2 align-top">EUR 120 – 220</td><td className="px-3 py-2 align-top">Tk 16,800 – 30,800</td><td className="px-3 py-2 align-top">Cooking at home</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Local transport</td><td className="px-3 py-2 align-top">EUR 10 – 25</td><td className="px-3 py-2 align-top">Tk 1,400 – 3,500</td><td className="px-3 py-2 align-top">Monthly passes; student discounts vary</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Phone and internet</td><td className="px-3 py-2 align-top">EUR 8 – 20</td><td className="px-3 py-2 align-top">Tk 1,120 – 2,800</td><td className="px-3 py-2 align-top">Prepaid or monthly plan</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Health insurance (foreign students)</td><td className="px-3 py-2 align-top">EUR 40 – 70</td><td className="px-3 py-2 align-top">Tk 5,600 – 9,800</td><td className="px-3 py-2 align-top">Check exact amount for your status</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Study materials and personal</td><td className="px-3 py-2 align-top">EUR 30 – 80</td><td className="px-3 py-2 align-top">Tk 4,200 – 11,200</td><td className="px-3 py-2 align-top">Books, printing, clothing</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 EUR = about RSD 117 = about Tk 140 and are indicative planning estimates for 2026–2027, based on published university pages and Serbian official guidance. Fees, funds rules and exchange rates change, so always confirm with the university, the Serbian Ministry of Interior (mup.gov.rs) and an Eammu Holidays counselor before paying anything.</p>
</section>
<section id="sample-monthly-budgets-by-lifestyle" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Sample monthly budgets by lifestyle</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Lifestyle</th><th scope="col" className="px-3 py-2 text-left font-bold">Belgrade</th><th scope="col" className="px-3 py-2 text-left font-bold">Novi Sad, Niš, Kragujevac</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Frugal (dorm or shared room, cooking)</td><td className="px-3 py-2 align-top">EUR 400 – 520</td><td className="px-3 py-2 align-top">EUR 330 – 450</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Moderate (shared flat)</td><td className="px-3 py-2 align-top">EUR 520 – 700</td><td className="px-3 py-2 align-top">EUR 430 – 580</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Comfortable (private studio)</td><td className="px-3 py-2 align-top">EUR 700 – 950</td><td className="px-3 py-2 align-top">EUR 550 – 750</td></tr></tbody></table></div>
</section>
<section id="money-saving-tips" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Money-saving tips</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Apply early for any available student dormitory place.</li><li>Share a flat but get a written lease and know the occupancy rules.</li><li>Buy from markets and discount supermarkets.</li><li>Use student transport and ID discounts.</li><li>Find halal and South Asian food through the <Link href="/study/serbia/halal-food-and-bangladeshi-community-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">community guide</Link>.</li></ul>
</section>
<section id="city-differences" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">City differences</h2>
<p className="mt-4 leading-7 text-slate-700">See <Link href="/study/serbia/study-in-belgrade" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Belgrade</Link>, <Link href="/study/serbia/study-in-novi-sad" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Novi Sad</Link> and <Link href="/study/serbia/study-in-nis-and-kragujevac" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Niš and Kragujevac</Link>. Smaller cities usually offer cheaper rent and shorter commutes but fewer part-time jobs.</p>
</section>
<section id="cost-of-living-and-your-visa" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Cost of living and your visa</h2>
<p className="mt-4 leading-7 text-slate-700">Authorities and universities ask for proof of funds and accommodation. Read <Link href="/study/serbia/bank-solvency-requirements-for-serbia-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link>, <Link href="/study/serbia/student-accommodation-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">accommodation</Link> and <Link href="/study/serbia/part-time-job-and-post-study-work-rules-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">work rules</Link> when planning.</p>
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
