import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/study-in-szeged-pecs-and-other-cities';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Szeged, Pécs, Győr, Miskolc 2026 | Eammu",
  "description": "Compare Szeged, Pécs, Győr, Miskolc and Veszprém in 2026: universities, costs and student life for Bangladeshi students.",
  "keywords": [
    "study in Szeged",
    "study in Pécs",
    "Győr university",
    "Miskolc university",
    "regional universities Hungary"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/study-in-szeged-pecs-and-other-cities"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Szeged, Pécs, Győr, Miskolc 2026 | Eammu",
    "description": "Compare Szeged, Pécs, Győr, Miskolc and Veszprém in 2026: universities, costs and student life for Bangladeshi students.",
    "url": "https://eammu.com/study/hungary/study-in-szeged-pecs-and-other-cities",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Szeged, Pécs, Győr, Miskolc 2026 | Eammu",
    "description": "Compare Szeged, Pécs, Győr, Miskolc and Veszprém in 2026: universities, costs and student life for Bangladeshi students."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Szeged, Pécs & Other Cities", "href": "/study/hungary/study-in-szeged-pecs-and-other-cities"}];
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
    "href": "/study/hungary/study-in-budapest",
    "title": "Study in Budapest for Bangladeshi Students: Universities, Costs, Life",
    "description": "Study in Budapest in 2026: universities, rent, transport, jobs and student life for Bangladeshi students in Hungary's capital."
  },
  {
    "href": "/study/hungary/study-in-debrecen",
    "title": "Study in Debrecen for Bangladeshi Students: University, Costs, Life",
    "description": "Study in Debrecen in 2026: University of Debrecen, medicine and engineering, rent, student life and costs for Bangladeshi students."
  },
  {
    "href": "/study/hungary/engineering-courses-in-hungary",
    "title": "Engineering Courses in Hungary for Bangladeshi Students",
    "description": "Engineering courses in Hungary for Bangladeshi students in 2026: mechanical, electrical, civil and mechatronics programmes, universities and fees."
  },
  {
    "href": "/study/hungary/cheapest-universities-in-hungary",
    "title": "Cheapest Universities in Hungary for Bangladeshi Students",
    "description": "How to find the cheapest universities in Hungary in 2026: low-fee regional public universities, hidden costs and a checklist for Bangladeshi students."
  }
];
const FAQS = [
  {
    "q": "Which regional city is best?",
    "a": "It depends on your course. Szeged and Pécs are strong for science and medicine; Győr and Miskolc for engineering."
  },
  {
    "q": "Are regional cities cheaper?",
    "a": "Typically yes."
  },
  {
    "q": "Is it hard to find jobs there?",
    "a": "Student jobs exist but fewer English-speaking jobs."
  },
  {
    "q": "Is it easy to travel to Budapest?",
    "a": "Yes, by train or bus."
  },
  {
    "q": "Are there Bangladeshi communities?",
    "a": "Smaller than Budapest, but present in most university cities."
  },
  {
    "q": "Is Hungarian needed?",
    "a": "Daily life is easier with basic Hungarian."
  },
  {
    "q": "Which regional city is best for IT?",
    "a": "Szeged and Győr are popular, but check the specific programme."
  },
  {
    "q": "Is it easy to find a flat in a regional city?",
    "a": "Usually easier and cheaper than Budapest, but start early in September."
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
          "name": "Szeged, Pécs & Other Cities",
          "item": "https://eammu.com/study/hungary/study-in-szeged-pecs-and-other-cities"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Szeged, Pécs, Győr and Miskolc: Hungary's Regional University Cities",
      "description": "Compare Szeged, Pécs, Győr, Miskolc and Veszprém in 2026: universities, costs and student life for Bangladeshi students.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/study-in-szeged-pecs-and-other-cities",
      "keywords": "study in Szeged, study in Pécs, Győr university, Miskolc university, regional universities Hungary",
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
          "name": "Which regional city is best?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your course. Szeged and Pécs are strong for science and medicine; Győr and Miskolc for engineering."
          }
        },
        {
          "@type": "Question",
          "name": "Are regional cities cheaper?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically yes."
          }
        },
        {
          "@type": "Question",
          "name": "Is it hard to find jobs there?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Student jobs exist but fewer English-speaking jobs."
          }
        },
        {
          "@type": "Question",
          "name": "Is it easy to travel to Budapest?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, by train or bus."
          }
        },
        {
          "@type": "Question",
          "name": "Are there Bangladeshi communities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Smaller than Budapest, but present in most university cities."
          }
        },
        {
          "@type": "Question",
          "name": "Is Hungarian needed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Daily life is easier with basic Hungarian."
          }
        },
        {
          "@type": "Question",
          "name": "Which regional city is best for IT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Szeged and Győr are popular, but check the specific programme."
          }
        },
        {
          "@type": "Question",
          "name": "Is it easy to find a flat in a regional city?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually easier and cheaper than Budapest, but start early in September."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Szeged, Pécs, Győr and Miskolc: Hungary&apos;s Regional University Cities</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Regional cities can offer lower costs and a closer university community.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Szeged is strong in sciences, informatics and medicine.</li><li>Pécs offers medicine, engineering and arts.</li><li>Győr and Miskolc are strong in engineering.</li><li>Lower rents but smaller job markets.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#city-comparison" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">City comparison</a></li><li><a href="#costs" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Costs</a></li><li><a href="#pros-and-cons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Pros and cons</a></li><li><a href="#how-to-choose" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to choose</a></li><li><a href="#questions-to-ask-before-choosing-a-regional-city" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Questions to ask before choosing a regional city</a></li><li><a href="#getting-around-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Getting around Hungary</a></li><li><a href="#example-monthly-budgets-by-city" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Example monthly budgets by city</a></li></ol>
          </nav>

          <article>
<section id="city-comparison" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">City comparison</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">City</th><th scope="col" className="px-3 py-2 text-left font-bold">University</th><th scope="col" className="px-3 py-2 text-left font-bold">Strengths</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Szeged</td><td className="px-3 py-2 align-top">University of Szeged</td><td className="px-3 py-2 align-top">Sciences, informatics, medicine, pharmacy</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Pécs</td><td className="px-3 py-2 align-top">University of Pécs</td><td className="px-3 py-2 align-top">Medicine, engineering, business, arts</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Győr</td><td className="px-3 py-2 align-top">Széchenyi István University</td><td className="px-3 py-2 align-top">Engineering, automotive, logistics</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Miskolc</td><td className="px-3 py-2 align-top">University of Miskolc</td><td className="px-3 py-2 align-top">Engineering, materials, IT</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Veszprém</td><td className="px-3 py-2 align-top">University of Pannonia</td><td className="px-3 py-2 align-top">Engineering, chemistry, business</td></tr></tbody></table></div>
</section>
<section id="costs" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Costs</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Expense</th><th scope="col" className="px-3 py-2 text-left font-bold">EUR (per month)</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT approx. (per month)</th><th scope="col" className="px-3 py-2 text-left font-bold">What to check</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Dormitory or shared room</td><td className="px-3 py-2 align-top">EUR 100 – 280</td><td className="px-3 py-2 align-top">Tk 14,000 – 39,200</td><td className="px-3 py-2 align-top">Typically cheaper than Budapest</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Food</td><td className="px-3 py-2 align-top">EUR 140 – 230</td><td className="px-3 py-2 align-top">Tk 19,600 – 32,200</td><td className="px-3 py-2 align-top">Cooking at home</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 EUR = about HUF 400 = about Tk 140 and are indicative planning estimates for 2026–2027, based on published university pages and Hungarian immigration guidance. Fees, funds rules and exchange rates change, so always confirm with the university, the Hungarian immigration authority (oif.gov.hu) and an Eammu Holidays counselor before paying anything.</p>
</section>
<section id="pros-and-cons" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Pros and cons</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Pros: lower costs, campus feel, personal support.</li><li>Cons: fewer jobs and fewer South Asian shops.</li><li>Weigh these with <Link href="/study/hungary/study-in-budapest" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Budapest</Link> and <Link href="/study/hungary/study-in-debrecen" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Debrecen</Link>.</li></ul>
</section>
<section id="how-to-choose" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to choose</h2>
<p className="mt-4 leading-7 text-slate-700">Start with programme fit, then check <Link href="/study/hungary/cost-of-living-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living</Link> and <Link href="/study/hungary/student-accommodation-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">accommodation</Link>.</p>
</section>
<section id="questions-to-ask-before-choosing-a-regional-city" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Questions to ask before choosing a regional city</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Are the English programmes taught on this campus?</li><li>How many international students live here?</li><li>How far is the nearest big airport?</li><li>What are the local job options?</li><li>What halal and South Asian food options exist?</li></ul>
</section>
<section id="getting-around-hungary" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Getting around Hungary</h2>
<p className="mt-4 leading-7 text-slate-700">Hungary has an extensive rail and bus network, and student discounts are common. Many regional students visit Budapest on weekends for shopping, community events and airport travel.</p>
</section>
<section id="example-monthly-budgets-by-city" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Example monthly budgets by city</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">City</th><th scope="col" className="px-3 py-2 text-left font-bold">Frugal budget</th><th scope="col" className="px-3 py-2 text-left font-bold">Comfortable budget</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Szeged</td><td className="px-3 py-2 align-top">EUR 380 – 480</td><td className="px-3 py-2 align-top">EUR 600 – 800</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Pécs</td><td className="px-3 py-2 align-top">EUR 380 – 480</td><td className="px-3 py-2 align-top">EUR 600 – 800</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Győr</td><td className="px-3 py-2 align-top">EUR 400 – 520</td><td className="px-3 py-2 align-top">EUR 650 – 850</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Miskolc</td><td className="px-3 py-2 align-top">EUR 360 – 460</td><td className="px-3 py-2 align-top">EUR 580 – 780</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 EUR = about HUF 400 = about Tk 140 and are indicative planning estimates for 2026–2027, based on published university pages and Hungarian immigration guidance. Fees, funds rules and exchange rates change, so always confirm with the university, the Hungarian immigration authority (oif.gov.hu) and an Eammu Holidays counselor before paying anything.</p>
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
