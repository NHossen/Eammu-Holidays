import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/cost-of-living-in-hungary-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Cost of Living in Hungary for Bangladeshi Students 2026",
  "description": "Monthly cost of living in Hungary for Bangladeshi students in 2026: rent, food, transport and phone in Budapest, Debrecen, Szeged and Pécs in EUR and BDT.",
  "keywords": [
    "cost of living in Hungary",
    "Hungary student budget",
    "Budapest cost of living student",
    "living cost Hungary BDT"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/cost-of-living-in-hungary-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Cost of Living in Hungary for Bangladeshi Students 2026",
    "description": "Monthly cost of living in Hungary for Bangladeshi students in 2026: rent, food, transport and phone in Budapest, Debrecen, Szeged and Pécs in EUR and BDT.",
    "url": "https://eammu.com/study/hungary/cost-of-living-in-hungary-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Cost of Living in Hungary for Bangladeshi Students 2026",
    "description": "Monthly cost of living in Hungary for Bangladeshi students in 2026: rent, food, transport and phone in Budapest, Debrecen, Szeged and Pécs in EUR and BDT."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Cost of Living", "href": "/study/hungary/cost-of-living-in-hungary-for-bangladeshi-students"}];
const NAV = [
  {
    "label": "Hungary Hub",
    "pages": [
      {
        "href": "/study/hungary",
        "label": "Study in Hungary Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/hungary/study-in-hungary-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/hungary/study-in-hungary-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/hungary/cost-of-living-in-hungary-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/hungary/cheapest-universities-in-hungary",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/hungary/top-universities-in-hungary",
        "label": "Top Universities"
      },
      {
        "href": "/study/hungary/public-vs-private-universities-in-hungary",
        "label": "Public vs Private Universities"
      },
      {
        "href": "/study/hungary/admission-requirements-in-hungary-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/hungary/study-gap-accepted-universities-in-hungary",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/hungary/study-in-hungary-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/hungary/study-in-hungary-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/hungary/hungary-intake-dates",
        "label": "Intake Dates"
      },
      {
        "href": "/study/hungary/hungary-vs-finland-vs-germany-for-bangladeshi-students",
        "label": "Hungary vs Finland vs Germany"
      }
    ]
  },
  {
    "label": "Scholarships & Funding",
    "pages": [
      {
        "href": "/study/hungary/scholarships-in-hungary-for-bangladeshi-students",
        "label": "Scholarships Overview"
      },
      {
        "href": "/study/hungary/stipendium-hungaricum-scholarship-guide",
        "label": "Stipendium Hungaricum Guide"
      },
      {
        "href": "/study/hungary/stipendium-hungaricum-eligibility-and-deadlines",
        "label": "SH Eligibility & Deadlines"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/hungary/how-to-apply-to-hungarian-universities",
        "label": "How to Apply (Step by Step)"
      },
      {
        "href": "/study/hungary/degree-recognition-and-eligibility-in-hungary",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/hungary/bachelors-in-hungary-for-bangladeshi-students",
        "label": "Bachelor's Degrees"
      },
      {
        "href": "/study/hungary/masters-and-phd-in-hungary-for-bangladeshi-students",
        "label": "Master's & PhD"
      },
      {
        "href": "/study/hungary/cse-and-it-courses-in-hungary",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/hungary/engineering-courses-in-hungary",
        "label": "Engineering Courses"
      },
      {
        "href": "/study/hungary/mba-in-hungary-for-bangladeshi-students",
        "label": "MBA & Business"
      },
      {
        "href": "/study/hungary/mbbs-and-medical-degrees-in-hungary",
        "label": "Medicine, Dentistry & Pharmacy"
      },
      {
        "href": "/study/hungary/foundation-year-and-preparatory-courses-in-hungary",
        "label": "Foundation Year"
      },
      {
        "href": "/study/hungary/sop-and-motivation-letter-for-hungary",
        "label": "SOP & Motivation Letter"
      }
    ]
  },
  {
    "label": "Cities & Student Life",
    "pages": [
      {
        "href": "/study/hungary/student-accommodation-in-hungary",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/hungary/study-in-budapest",
        "label": "Study in Budapest"
      },
      {
        "href": "/study/hungary/study-in-debrecen",
        "label": "Study in Debrecen"
      },
      {
        "href": "/study/hungary/study-in-szeged-pecs-and-other-cities",
        "label": "Szeged, Pécs & Other Cities"
      },
      {
        "href": "/study/hungary/health-insurance-for-students-in-hungary",
        "label": "Health Insurance for Students"
      },
      {
        "href": "/study/hungary/halal-food-and-bangladeshi-community-in-hungary",
        "label": "Halal Food & Bangladeshi Community"
      }
    ]
  },
  {
    "label": "Visa, Permit & Work Rules",
    "pages": [
      {
        "href": "/study/hungary/student-visa-requirements-bangladesh",
        "label": "Student Visa & Permit Requirements"
      },
      {
        "href": "/study/hungary/hungary-student-visa-application-guide-bangladesh",
        "label": "Visa Application Guide (D-Visa)"
      },
      {
        "href": "/study/hungary/hungary-student-documents-checklist",
        "label": "Documents Checklist"
      },
      {
        "href": "/study/hungary/bank-solvency-requirements-for-hungary-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/hungary/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/hungary/hungary-student-visa-refusal-reasons",
        "label": "Visa Refusal Reasons"
      },
      {
        "href": "/study/hungary/part-time-job-and-post-study-work-rules-in-hungary",
        "label": "Work & Post-Study Rules"
      },
      {
        "href": "/study/hungary/bring-family-to-hungary-as-a-student",
        "label": "Family & Dependents"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/hungary/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/hungary/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students",
    "title": "Tuition Fees in Hungary for Bangladeshi Students in EUR and BDT",
    "description": "Tuition fees in Hungary for Bangladeshi students in 2026: bachelor, master, PhD and medicine fees in EUR and BDT, plus scholarship savings."
  },
  {
    "href": "/study/hungary/student-accommodation-in-hungary",
    "title": "Student Accommodation in Hungary for Bangladeshi Students",
    "description": "Student accommodation in Hungary for Bangladeshi students in 2026: dormitories, shared flats and rent in EUR and BDT, plus how to avoid rental scams."
  },
  {
    "href": "/study/hungary/study-in-budapest",
    "title": "Study in Budapest for Bangladeshi Students: Universities, Costs, Life",
    "description": "Study in Budapest in 2026: universities, rent, transport, jobs and student life for Bangladeshi students in Hungary's capital."
  },
  {
    "href": "/study/hungary/bank-solvency-requirements-for-hungary-student-visa",
    "title": "Proof of Funds and Bank Solvency for a Hungary Student Visa",
    "description": "Proof of funds for a Hungary student visa in 2026: how Bangladeshi students should show means of subsistence, sponsor rules and planning estimates."
  }
];
const FAQS = [
  {
    "q": "How much money do I need per month in Hungary?",
    "a": "Plan about EUR 450–900 a month depending on city and housing, excluding tuition."
  },
  {
    "q": "Which Hungarian city is cheapest for students?",
    "a": "Regional cities such as Debrecen, Miskolc, Szeged and Pécs are typically cheaper than Budapest."
  },
  {
    "q": "Is it possible to live on part-time work?",
    "a": "No. Work is allowed up to 30 hours a week in term, but you should plan to fund studies from savings or scholarship."
  },
  {
    "q": "Is public transport cheap for students?",
    "a": "Yes, student passes are heavily discounted in most Hungarian cities."
  },
  {
    "q": "Does the Stipendium Hungaricum cover living costs?",
    "a": "It includes a monthly stipend and accommodation support, but Bangladeshi students often still need a cushion for the first months."
  },
  {
    "q": "How much is a dormitory in Budapest?",
    "a": "Dormitory costs vary widely by building and room type; budget roughly EUR 120–300 a month and confirm with the university."
  },
  {
    "q": "How much do groceries cost per week?",
    "a": "Plan roughly EUR 30–60 a week when cooking at home, depending on city and habits."
  },
  {
    "q": "Do students get discounts?",
    "a": "Yes, on public transport, museums, software and some cultural events, with a valid student card."
  },
  {
    "q": "Should I carry cash or card?",
    "a": "Cards are widely accepted, but keep some cash in forints for small shops and markets."
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
          "name": "Hungary",
          "item": "https://eammu.com/study/hungary"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Cost of Living",
          "item": "https://eammu.com/study/hungary/cost-of-living-in-hungary-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Cost of Living in Hungary for Bangladeshi Students (2026): Monthly Budget",
      "description": "Monthly cost of living in Hungary for Bangladeshi students in 2026: rent, food, transport and phone in Budapest, Debrecen, Szeged and Pécs in EUR and BDT.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/cost-of-living-in-hungary-for-bangladeshi-students",
      "keywords": "cost of living in Hungary, Hungary student budget, Budapest cost of living student, living cost Hungary BDT",
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
          "name": "How much money do I need per month in Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plan about EUR 450–900 a month depending on city and housing, excluding tuition."
          }
        },
        {
          "@type": "Question",
          "name": "Which Hungarian city is cheapest for students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Regional cities such as Debrecen, Miskolc, Szeged and Pécs are typically cheaper than Budapest."
          }
        },
        {
          "@type": "Question",
          "name": "Is it possible to live on part-time work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Work is allowed up to 30 hours a week in term, but you should plan to fund studies from savings or scholarship."
          }
        },
        {
          "@type": "Question",
          "name": "Is public transport cheap for students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, student passes are heavily discounted in most Hungarian cities."
          }
        },
        {
          "@type": "Question",
          "name": "Does the Stipendium Hungaricum cover living costs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It includes a monthly stipend and accommodation support, but Bangladeshi students often still need a cushion for the first months."
          }
        },
        {
          "@type": "Question",
          "name": "How much is a dormitory in Budapest?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dormitory costs vary widely by building and room type; budget roughly EUR 120–300 a month and confirm with the university."
          }
        },
        {
          "@type": "Question",
          "name": "How much do groceries cost per week?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plan roughly EUR 30–60 a week when cooking at home, depending on city and habits."
          }
        },
        {
          "@type": "Question",
          "name": "Do students get discounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, on public transport, museums, software and some cultural events, with a valid student card."
          }
        },
        {
          "@type": "Question",
          "name": "Should I carry cash or card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cards are widely accepted, but keep some cash in forints for small shops and markets."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Hungary 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Cost of Living in Hungary for Bangladeshi Students (2026): Monthly Budget</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A realistic monthly budget in euros and taka, with city-by-city differences.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} counseling team &middot; Updated <time dateTime="2026-11-21">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Hungary guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 55 Hungary guides</summary>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Expect roughly EUR 450–900 a month, with Budapest at the top of the range.</li><li>Rent is the biggest cost; dormitories are far cheaper than private flats.</li><li>Student transport passes are heavily discounted.</li><li>Cooking at home is the main way to cut food costs.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#monthly-budget-indicative" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Monthly budget (indicative)</a></li><li><a href="#city-differences" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">City differences</a></li><li><a href="#money-saving-tips" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Money-saving tips</a></li><li><a href="#cost-of-living-and-your-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cost of living and your visa</a></li><li><a href="#sample-monthly-budgets" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Sample monthly budgets</a></li><li><a href="#hidden-and-one-off-costs" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Hidden and one-off costs</a></li><li><a href="#seasonal-considerations" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Seasonal considerations</a></li></ol>
          </nav>

          <article>
<section id="monthly-budget-indicative" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Monthly budget (indicative)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Expense</th><th scope="col" className="px-3 py-2 text-left font-bold">EUR (per month)</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT approx. (per month)</th><th scope="col" className="px-3 py-2 text-left font-bold">What to check</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Dormitory or shared room</td><td className="px-3 py-2 align-top">EUR 120 – 400</td><td className="px-3 py-2 align-top">Tk 16,800 – 56,000</td><td className="px-3 py-2 align-top">Budapest higher; dorms cheapest</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Private studio or flat share</td><td className="px-3 py-2 align-top">EUR 300 – 700</td><td className="px-3 py-2 align-top">Tk 42,000 – 98,000</td><td className="px-3 py-2 align-top">Utilities may be extra</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Food and groceries</td><td className="px-3 py-2 align-top">EUR 150 – 250</td><td className="px-3 py-2 align-top">Tk 21,000 – 35,000</td><td className="px-3 py-2 align-top">Cooking at home</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Local transport</td><td className="px-3 py-2 align-top">EUR 10 – 20</td><td className="px-3 py-2 align-top">Tk 1,400 – 2,800</td><td className="px-3 py-2 align-top">Student pass, city dependent</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Phone and internet</td><td className="px-3 py-2 align-top">EUR 10 – 25</td><td className="px-3 py-2 align-top">Tk 1,400 – 3,500</td><td className="px-3 py-2 align-top">Prepaid or monthly plan</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Health contribution / insurance</td><td className="px-3 py-2 align-top">EUR 15 – 40</td><td className="px-3 py-2 align-top">Tk 2,100 – 5,600</td><td className="px-3 py-2 align-top">Depends on your status</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Study materials and personal</td><td className="px-3 py-2 align-top">EUR 30 – 80</td><td className="px-3 py-2 align-top">Tk 4,200 – 11,200</td><td className="px-3 py-2 align-top">Books, printing, clothing</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 EUR = about HUF 400 = about Tk 140 and are indicative planning estimates for 2026–2027, based on published university pages and Hungarian immigration guidance. Fees, funds rules and exchange rates change, so always confirm with the university, the Hungarian immigration authority (oif.gov.hu) and an Eammu Holidays counselor before paying anything.</p>
</section>
<section id="city-differences" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">City differences</h2>
<p className="mt-4 leading-7 text-slate-700">Budapest is the most expensive city for rent and eating out. Debrecen, Szeged, Pécs, Miskolc and Győr usually have lower rents and shorter commutes. See city guides for <Link href="/study/hungary/study-in-budapest" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Budapest</Link>, <Link href="/study/hungary/study-in-debrecen" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Debrecen</Link> and <Link href="/study/hungary/study-in-szeged-pecs-and-other-cities" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Szeged, Pécs and other cities</Link>.</p>
</section>
<section id="money-saving-tips" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Money-saving tips</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Apply early for a university dormitory place.</li><li>Share a flat with other students, but check the lease and occupancy rules.</li><li>Use student ID discounts for travel, museums and software.</li><li>Buy groceries from discount supermarkets and local markets.</li><li>Find halal and South Asian groceries through the <Link href="/study/hungary/halal-food-and-bangladeshi-community-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">community guide</Link>.</li></ul>
</section>
<section id="cost-of-living-and-your-visa" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Cost of living and your visa</h2>
<p className="mt-4 leading-7 text-slate-700">Authorities ask you to show means of subsistence. See <Link href="/study/hungary/bank-solvency-requirements-for-hungary-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link> and plan your budget with <Link href="/study/hungary/student-accommodation-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">accommodation options</Link> and <Link href="/study/hungary/part-time-job-and-post-study-work-rules-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">work rules</Link> in mind.</p>
</section>
<section id="sample-monthly-budgets" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Sample monthly budgets</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Lifestyle</th><th scope="col" className="px-3 py-2 text-left font-bold">Budapest</th><th scope="col" className="px-3 py-2 text-left font-bold">Regional city</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Frugal (dorm, cooking)</td><td className="px-3 py-2 align-top">EUR 450 – 600</td><td className="px-3 py-2 align-top">EUR 380 – 520</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Moderate (shared flat)</td><td className="px-3 py-2 align-top">EUR 650 – 850</td><td className="px-3 py-2 align-top">EUR 500 – 700</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Comfortable (private studio)</td><td className="px-3 py-2 align-top">EUR 900 – 1,200</td><td className="px-3 py-2 align-top">EUR 700 – 950</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 EUR = about HUF 400 = about Tk 140 and are indicative planning estimates for 2026–2027, based on published university pages and Hungarian immigration guidance. Fees, funds rules and exchange rates change, so always confirm with the university, the Hungarian immigration authority (oif.gov.hu) and an Eammu Holidays counselor before paying anything.</p>
</section>
<section id="hidden-and-one-off-costs" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Hidden and one-off costs</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Deposit for private rent, often one or two months.</li><li>Bedding, kitchen items and winter clothing.</li><li>Residence permit-related costs and document copies.</li><li>Return flights home during holidays.</li><li>Laptop and software needs for your course.</li></ul>
</section>
<section id="seasonal-considerations" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Seasonal considerations</h2>
<p className="mt-4 leading-7 text-slate-700">Hungary has cold winters and hot summers. Heating costs can rise in winter in private flats, so ask whether utilities are included. Winter clothing is a first-month expense for students from Bangladesh.</p>
</section>
          </article>

          <section className="mt-12" aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="text-xl font-bold text-emerald-900">Official sources to verify before you pay or apply</h2>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-6 text-slate-700"><li><a href="https://stipendiumhungaricum.hu/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Stipendium Hungaricum (Tempus Public Foundation)</a></li><li><a href="https://studyinhungary.hu/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Study in Hungary – official study portal</a></li><li><a href="https://oif.gov.hu/students" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Hungarian immigration authority (OIF) – students</a></li><li><a href="https://hungary.blsinternational.com/bangladesh/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">BLS International – Hungary visa centre, Dhaka</a></li></ul>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Hungary Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Hungary</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and Stipendium Hungaricum shortlist, visa guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
