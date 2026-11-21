import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/study-in-budapest';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Budapest for Bangladeshi Students 2026",
  "description": "Study in Budapest in 2026: universities, rent, transport, jobs and student life for Bangladeshi students in Hungary's capital.",
  "keywords": [
    "study in Budapest",
    "Budapest universities international students",
    "Budapest student cost of living"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/study-in-budapest"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Budapest for Bangladeshi Students 2026",
    "description": "Study in Budapest in 2026: universities, rent, transport, jobs and student life for Bangladeshi students in Hungary's capital.",
    "url": "https://eammu.com/study/hungary/study-in-budapest",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Budapest for Bangladeshi Students 2026",
    "description": "Study in Budapest in 2026: universities, rent, transport, jobs and student life for Bangladeshi students in Hungary's capital."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Study in Budapest", "href": "/study/hungary/study-in-budapest"}];
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
    "href": "/study/hungary/study-in-debrecen",
    "title": "Study in Debrecen for Bangladeshi Students: University, Costs, Life",
    "description": "Study in Debrecen in 2026: University of Debrecen, medicine and engineering, rent, student life and costs for Bangladeshi students."
  },
  {
    "href": "/study/hungary/student-accommodation-in-hungary",
    "title": "Student Accommodation in Hungary for Bangladeshi Students",
    "description": "Student accommodation in Hungary for Bangladeshi students in 2026: dormitories, shared flats and rent in EUR and BDT, plus how to avoid rental scams."
  },
  {
    "href": "/study/hungary/top-universities-in-hungary",
    "title": "Top Universities in Hungary for Bangladeshi Students",
    "description": "Top universities in Hungary for Bangladeshi students in 2026: ELTE, BME, Semmelweis, Debrecen, Szeged, Pécs and Corvinus with strengths and fit."
  },
  {
    "href": "/study/hungary/cost-of-living-in-hungary-for-bangladeshi-students",
    "title": "Cost of Living in Hungary for Bangladeshi Students: Monthly Budget",
    "description": "Monthly cost of living in Hungary for Bangladeshi students in 2026: rent, food, transport and phone in Budapest, Debrecen, Szeged and Pécs in EUR and BDT."
  }
];
const FAQS = [
  {
    "q": "Is Budapest good for international students?",
    "a": "Yes, it has the widest choice of universities and jobs."
  },
  {
    "q": "Is Budapest expensive?",
    "a": "It is the most expensive Hungarian city but still cheaper than many Western European capitals."
  },
  {
    "q": "Is Budapest safe?",
    "a": "Generally yes, but watch for pickpockets and rental scams."
  },
  {
    "q": "Can I find part-time work?",
    "a": "Yes within legal limits, though Hungarian often helps."
  },
  {
    "q": "Is it easy to find halal food?",
    "a": "Yes, there are halal shops and restaurants."
  },
  {
    "q": "Is it better than Debrecen?",
    "a": "Depends on budget and course; see our Debrecen guide."
  },
  {
    "q": "Which district is best for students?",
    "a": "It depends on your campus and budget; look for good transport access."
  },
  {
    "q": "Is Budapest good for networking?",
    "a": "Yes, with many events, startups and international organisations."
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
          "name": "Study in Budapest",
          "item": "https://eammu.com/study/hungary/study-in-budapest"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Budapest for Bangladeshi Students (2026): Universities, Costs, Life",
      "description": "Study in Budapest in 2026: universities, rent, transport, jobs and student life for Bangladeshi students in Hungary's capital.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/study-in-budapest",
      "keywords": "study in Budapest, Budapest universities international students, Budapest student cost of living",
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
          "name": "Is Budapest good for international students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, it has the widest choice of universities and jobs."
          }
        },
        {
          "@type": "Question",
          "name": "Is Budapest expensive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is the most expensive Hungarian city but still cheaper than many Western European capitals."
          }
        },
        {
          "@type": "Question",
          "name": "Is Budapest safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally yes, but watch for pickpockets and rental scams."
          }
        },
        {
          "@type": "Question",
          "name": "Can I find part-time work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes within legal limits, though Hungarian often helps."
          }
        },
        {
          "@type": "Question",
          "name": "Is it easy to find halal food?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, there are halal shops and restaurants."
          }
        },
        {
          "@type": "Question",
          "name": "Is it better than Debrecen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depends on budget and course; see our Debrecen guide."
          }
        },
        {
          "@type": "Question",
          "name": "Which district is best for students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your campus and budget; look for good transport access."
          }
        },
        {
          "@type": "Question",
          "name": "Is Budapest good for networking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, with many events, startups and international organisations."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Budapest for Bangladeshi Students (2026): Universities, Costs, Life</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Budapest is Hungary&apos;s academic and business hub, and its most expensive student city.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Home to ELTE, BME, Semmelweis, Corvinus, Óbuda and more.</li><li>Largest job and internship market in Hungary.</li><li>Higher rents than regional cities.</li><li>Good public transport and Schengen connectivity.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#universities-in-budapest" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Universities in Budapest</a></li><li><a href="#costs" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Costs</a></li><li><a href="#student-life" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Student life</a></li><li><a href="#jobs-and-internships" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Jobs and internships</a></li><li><a href="#budapest-districts-and-commuting" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Budapest districts and commuting</a></li><li><a href="#weekend-and-travel" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Weekend and travel</a></li><li><a href="#pros-and-cons-at-a-glance" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Pros and cons at a glance</a></li></ol>
          </nav>

          <article>
<section id="universities-in-budapest" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Universities in Budapest</h2>
<p className="mt-4 leading-7 text-slate-700">ELTE, BME, Semmelweis, Corvinus, Óbuda University and Budapest Business University are major choices. See <Link href="/study/hungary/top-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities</Link>.</p>
</section>
<section id="costs" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Costs</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Expense</th><th scope="col" className="px-3 py-2 text-left font-bold">EUR (per month)</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT approx. (per month)</th><th scope="col" className="px-3 py-2 text-left font-bold">What to check</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Dormitory or shared room</td><td className="px-3 py-2 align-top">EUR 150 – 450</td><td className="px-3 py-2 align-top">Tk 21,000 – 63,000</td><td className="px-3 py-2 align-top">Higher than regional cities</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Food</td><td className="px-3 py-2 align-top">EUR 170 – 280</td><td className="px-3 py-2 align-top">Tk 23,800 – 39,200</td><td className="px-3 py-2 align-top">Cooking saves money</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Transport</td><td className="px-3 py-2 align-top">EUR 10 – 20</td><td className="px-3 py-2 align-top">Tk 1,400 – 2,800</td><td className="px-3 py-2 align-top">Student pass</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 EUR = about HUF 400 = about Tk 140 and are indicative planning estimates for 2026–2027, based on published university pages and Hungarian immigration guidance. Fees, funds rules and exchange rates change, so always confirm with the university, the Hungarian immigration authority (oif.gov.hu) and an Eammu Holidays counselor before paying anything.</p>
</section>
<section id="student-life" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Student life</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Large international student communities.</li><li>Cafés, libraries and cultural events.</li><li>Easy travel to Vienna, Bratislava and Prague.</li><li>South Asian shops and halal options, see <Link href="/study/hungary/halal-food-and-bangladeshi-community-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">community guide</Link>.</li></ul>
</section>
<section id="jobs-and-internships" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Jobs and internships</h2>
<p className="mt-4 leading-7 text-slate-700">Budapest has the most English-friendly jobs, but student work is capped at 30 hours a week in term. Read <Link href="/study/hungary/part-time-job-and-post-study-work-rules-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">work rules</Link>.</p>
</section>
<section id="budapest-districts-and-commuting" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Budapest districts and commuting</h2>
<p className="mt-4 leading-7 text-slate-700">Budapest is divided into districts, and many students choose areas near metro, tram or train lines to reach campuses quickly. Check commuting time before signing a lease and compare costs with <Link href="/study/hungary/student-accommodation-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">accommodation options</Link>.</p>
</section>
<section id="weekend-and-travel" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Weekend and travel</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Danube riverside, thermal baths and museums with student discounts.</li><li>Day trips to Vienna, Bratislava and Prague.</li><li>Affordable regional trains and buses.</li></ul>
</section>
<section id="pros-and-cons-at-a-glance" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Pros and cons at a glance</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Pros</th><th scope="col" className="px-3 py-2 text-left font-bold">Cons</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Widest choice of universities and programmes</td><td className="px-3 py-2 align-top">Highest rent and living costs</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Biggest job and internship market</td><td className="px-3 py-2 align-top">Dorm places are competitive</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Excellent public transport</td><td className="px-3 py-2 align-top">Busy and crowded in peak times</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Strong international community</td><td className="px-3 py-2 align-top">Some scams target newcomers</td></tr></tbody></table></div>
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
