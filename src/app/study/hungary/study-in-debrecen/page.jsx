import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/study-in-debrecen';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Debrecen for Bangladeshi Students 2026",
  "description": "Study in Debrecen in 2026: University of Debrecen, medicine and engineering, rent, student life and costs for Bangladeshi students.",
  "keywords": [
    "study in Debrecen",
    "University of Debrecen Bangladeshi",
    "Debrecen cost of living"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/study-in-debrecen"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Debrecen for Bangladeshi Students 2026",
    "description": "Study in Debrecen in 2026: University of Debrecen, medicine and engineering, rent, student life and costs for Bangladeshi students.",
    "url": "https://eammu.com/study/hungary/study-in-debrecen",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Debrecen for Bangladeshi Students 2026",
    "description": "Study in Debrecen in 2026: University of Debrecen, medicine and engineering, rent, student life and costs for Bangladeshi students."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Study in Debrecen", "href": "/study/hungary/study-in-debrecen"}];
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
    "href": "/study/hungary/study-in-szeged-pecs-and-other-cities",
    "title": "Study in Szeged, Pécs, Győr and Miskolc: Hungary's Regional University Cities",
    "description": "Compare Szeged, Pécs, Győr, Miskolc and Veszprém in 2026: universities, costs and student life for Bangladeshi students."
  },
  {
    "href": "/study/hungary/mbbs-and-medical-degrees-in-hungary",
    "title": "Medicine, Dentistry and Pharmacy in Hungary for Bangladeshi Students",
    "description": "Study medicine (MD), dentistry and pharmacy in Hungary in 2026 for Bangladeshi students: universities, fees, entrance exams and BMDC recognition."
  },
  {
    "href": "/study/hungary/cheapest-universities-in-hungary",
    "title": "Cheapest Universities in Hungary for Bangladeshi Students",
    "description": "How to find the cheapest universities in Hungary in 2026: low-fee regional public universities, hidden costs and a checklist for Bangladeshi students."
  }
];
const FAQS = [
  {
    "q": "Is Debrecen good for Bangladeshi students?",
    "a": "Yes, many international students choose it for cost and community."
  },
  {
    "q": "Is Debrecen cheaper than Budapest?",
    "a": "Usually yes."
  },
  {
    "q": "Can I study medicine in Debrecen?",
    "a": "Yes, in English."
  },
  {
    "q": "Is there a job market?",
    "a": "It is smaller than Budapest but offers student jobs."
  },
  {
    "q": "How do I get to Budapest?",
    "a": "By train or bus in a few hours."
  },
  {
    "q": "Is Debrecen safe?",
    "a": "Generally yes."
  },
  {
    "q": "Is Debrecen quiet?",
    "a": "It is calmer than Budapest but active during the semester."
  },
  {
    "q": "Can I find internships in Debrecen?",
    "a": "Some are available, though Budapest has more options."
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
          "name": "Study in Debrecen",
          "item": "https://eammu.com/study/hungary/study-in-debrecen"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Debrecen for Bangladeshi Students (2026): University, Costs, Life",
      "description": "Study in Debrecen in 2026: University of Debrecen, medicine and engineering, rent, student life and costs for Bangladeshi students.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/study-in-debrecen",
      "keywords": "study in Debrecen, University of Debrecen Bangladeshi, Debrecen cost of living",
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
          "name": "Is Debrecen good for Bangladeshi students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, many international students choose it for cost and community."
          }
        },
        {
          "@type": "Question",
          "name": "Is Debrecen cheaper than Budapest?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually yes."
          }
        },
        {
          "@type": "Question",
          "name": "Can I study medicine in Debrecen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, in English."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a job market?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is smaller than Budapest but offers student jobs."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get to Budapest?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "By train or bus in a few hours."
          }
        },
        {
          "@type": "Question",
          "name": "Is Debrecen safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally yes."
          }
        },
        {
          "@type": "Question",
          "name": "Is Debrecen quiet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is calmer than Budapest but active during the semester."
          }
        },
        {
          "@type": "Question",
          "name": "Can I find internships in Debrecen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some are available, though Budapest has more options."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Debrecen for Bangladeshi Students (2026): University, Costs, Life</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Debrecen is Hungary&apos;s second-largest city with a large international student community and lower costs.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>University of Debrecen offers a wide programme range, including medicine and engineering.</li><li>Lower rents than Budapest.</li><li>Large Bangladeshi and South Asian student presence.</li><li>Smaller job market than Budapest.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#why-debrecen" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Why Debrecen</a></li><li><a href="#programmes" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Programmes</a></li><li><a href="#cost-snapshot" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cost snapshot</a></li><li><a href="#student-life" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Student life</a></li><li><a href="#campus-life" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Campus life</a></li><li><a href="#who-should-choose-debrecen" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Who should choose Debrecen</a></li><li><a href="#a-first-month-plan-for-debrecen" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">A first-month plan for Debrecen</a></li></ol>
          </nav>

          <article>
<section id="why-debrecen" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Why Debrecen</h2>
<p className="mt-4 leading-7 text-slate-700">A compact campus city with direct links to Budapest. See <Link href="/study/hungary/cheapest-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cheapest universities</Link> for cost comparisons.</p>
</section>
<section id="programmes" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Programmes</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Medicine, dentistry, pharmacy and health sciences.</li><li>Engineering and informatics.</li><li>Agriculture, business and humanities.</li></ul><p className="mt-4 leading-7 text-slate-700">See <Link href="/study/hungary/mbbs-and-medical-degrees-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">medical degrees</Link> and <Link href="/study/hungary/engineering-courses-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">engineering</Link>.</p>
</section>
<section id="cost-snapshot" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Cost snapshot</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Expense</th><th scope="col" className="px-3 py-2 text-left font-bold">EUR (per month)</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT approx. (per month)</th><th scope="col" className="px-3 py-2 text-left font-bold">What to check</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Dormitory or shared room</td><td className="px-3 py-2 align-top">EUR 100 – 300</td><td className="px-3 py-2 align-top">Tk 14,000 – 42,000</td><td className="px-3 py-2 align-top">Lower than Budapest</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Food</td><td className="px-3 py-2 align-top">EUR 150 – 240</td><td className="px-3 py-2 align-top">Tk 21,000 – 33,600</td><td className="px-3 py-2 align-top">Cooking at home</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 EUR = about HUF 400 = about Tk 140 and are indicative planning estimates for 2026–2027, based on published university pages and Hungarian immigration guidance. Fees, funds rules and exchange rates change, so always confirm with the university, the Hungarian immigration authority (oif.gov.hu) and an Eammu Holidays counselor before paying anything.</p>
</section>
<section id="student-life" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Student life</h2>
<p className="mt-4 leading-7 text-slate-700">Student communities are active, and South Asian groceries are available. See <Link href="/study/hungary/halal-food-and-bangladeshi-community-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">halal food and community</Link>.</p>
</section>
<section id="campus-life" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Campus life</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Large campus with sports and student societies.</li><li>Active international student community.</li><li>Easy cycling and local transport.</li><li>Cultural events and festivals.</li></ul>
</section>
<section id="who-should-choose-debrecen" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Who should choose Debrecen</h2>
<p className="mt-4 leading-7 text-slate-700">Students seeking a balance of cost, campus community and a wide programme range may prefer Debrecen, especially in health sciences and engineering.</p>
</section>
<section id="a-first-month-plan-for-debrecen" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">A first-month plan for Debrecen</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Collect your keys or dormitory allocation and register your address.</li><li>Complete university enrolment and permit formalities.</li><li>Buy a student transport pass.</li><li>Find groceries and halal food sources.</li><li>Join an international student group.</li></ol><p className="mt-4 leading-7 text-slate-700">Allow extra time in September, when many new students arrive at once.</p>
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
