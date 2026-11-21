import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/study-in-hungary-after-ssc';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Hungary After SSC 2026 | Eammu Holidays",
  "description": "Can you study in Hungary after SSC? Bangladeshi students in 2026: why SSC alone is not enough, foundation routes, HSC and what to do next.",
  "keywords": [
    "study in Hungary after SSC",
    "Hungary foundation program Bangladesh",
    "Hungary after 10th grade"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/study-in-hungary-after-ssc"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Hungary After SSC 2026 | Eammu Holidays",
    "description": "Can you study in Hungary after SSC? Bangladeshi students in 2026: why SSC alone is not enough, foundation routes, HSC and what to do next.",
    "url": "https://eammu.com/study/hungary/study-in-hungary-after-ssc",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Hungary After SSC 2026 | Eammu Holidays",
    "description": "Can you study in Hungary after SSC? Bangladeshi students in 2026: why SSC alone is not enough, foundation routes, HSC and what to do next."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "After SSC", "href": "/study/hungary/study-in-hungary-after-ssc"}];
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
    "href": "/study/hungary/foundation-year-and-preparatory-courses-in-hungary",
    "title": "Foundation Year and Preparatory Courses in Hungary",
    "description": "Foundation year and preparatory courses in Hungary for Bangladeshi students in 2026: who needs them, costs, language prep and permit rules."
  },
  {
    "href": "/study/hungary/study-in-hungary-after-diploma",
    "title": "Study in Hungary After Diploma in Engineering",
    "description": "Study in Hungary after a Bangladesh diploma in 2026: bachelor's entry, credit transfer, recognition and visa tips for diploma holders."
  },
  {
    "href": "/study/hungary/bachelors-in-hungary-for-bangladeshi-students",
    "title": "Bachelor's Degree in Hungary for Bangladeshi Students",
    "description": "Bachelor's degrees in Hungary for Bangladeshi students in 2026: popular courses, entry requirements, fees in BDT and how to apply after HSC."
  },
  {
    "href": "/study/hungary/admission-requirements-in-hungary-for-bangladeshi-students",
    "title": "Admission Requirements in Hungary for Bangladeshi Students",
    "description": "Admission requirements for Hungarian universities in 2026 for Bangladeshi students: HSC, bachelor's, English tests, entrance exams and documents."
  }
];
const FAQS = [
  {
    "q": "Can I go to Hungary directly after SSC?",
    "a": "Usually not for a bachelor's degree. You normally need HSC or an equivalent 12-year qualification."
  },
  {
    "q": "Is there a foundation year in Hungary?",
    "a": "Yes, some universities run preparatory courses, but access and recognition rules vary."
  },
  {
    "q": "Can a diploma holder skip HSC?",
    "a": "A four-year diploma may be considered by some universities; confirm recognition."
  },
  {
    "q": "What if I only have SSC and a gap?",
    "a": "Complete further study first; a long gap and low qualification raise visa risk."
  },
  {
    "q": "Can I get a scholarship after SSC?",
    "a": "Stipendium Hungaricum targets applicants with the required prior qualification, so SSC alone does not qualify."
  },
  {
    "q": "Which subjects should I take in HSC?",
    "a": "Match the course: science for medicine and engineering, business or science for economics."
  },
  {
    "q": "Can I do HSC through open schooling?",
    "a": "Check whether the target university accepts the specific qualification route."
  },
  {
    "q": "Is A-level better than HSC for Hungary?",
    "a": "Both can work if requirements are met; confirm with the programme."
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
          "name": "After SSC",
          "item": "https://eammu.com/study/hungary/study-in-hungary-after-ssc"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Hungary After SSC (2026): Foundation and Pathway Options",
      "description": "Can you study in Hungary after SSC? Bangladeshi students in 2026: why SSC alone is not enough, foundation routes, HSC and what to do next.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/study-in-hungary-after-ssc",
      "keywords": "study in Hungary after SSC, Hungary foundation program Bangladesh, Hungary after 10th grade",
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
          "name": "Can I go to Hungary directly after SSC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually not for a bachelor's degree. You normally need HSC or an equivalent 12-year qualification."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a foundation year in Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, some universities run preparatory courses, but access and recognition rules vary."
          }
        },
        {
          "@type": "Question",
          "name": "Can a diploma holder skip HSC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A four-year diploma may be considered by some universities; confirm recognition."
          }
        },
        {
          "@type": "Question",
          "name": "What if I only have SSC and a gap?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Complete further study first; a long gap and low qualification raise visa risk."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a scholarship after SSC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stipendium Hungaricum targets applicants with the required prior qualification, so SSC alone does not qualify."
          }
        },
        {
          "@type": "Question",
          "name": "Which subjects should I take in HSC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Match the course: science for medicine and engineering, business or science for economics."
          }
        },
        {
          "@type": "Question",
          "name": "Can I do HSC through open schooling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check whether the target university accepts the specific qualification route."
          }
        },
        {
          "@type": "Question",
          "name": "Is A-level better than HSC for Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both can work if requirements are met; confirm with the programme."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Hungary After SSC (2026): Foundation and Pathway Options</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">SSC alone is usually not enough for a Hungarian bachelor&apos;s degree, but there are routes.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Hungarian bachelor&apos;s programmes normally need 12 years of schooling.</li><li>Completing HSC is the simplest route.</li><li>A foundation or preparatory year may help some applicants, depending on rules.</li><li>Be wary of agents promising direct bachelor&apos;s entry after SSC.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#why-ssc-is-not-enough" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Why SSC is not enough</a></li><li><a href="#your-realistic-options" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Your realistic options</a></li><li><a href="#planning-while-finishing-hsc" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Planning while finishing HSC</a></li><li><a href="#what-to-avoid" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What to avoid</a></li><li><a href="#a-sample-plan-from-ssc-to-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">A sample plan from SSC to Hungary</a></li><li><a href="#if-you-are-already-out-of-school" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">If you are already out of school</a></li><li><a href="#why-bangladeshi-students-should-not-rush-after-ssc" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Why Bangladeshi students should not rush after SSC</a></li></ol>
          </nav>

          <article>
<section id="why-ssc-is-not-enough" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Why SSC is not enough</h2>
<p className="mt-4 leading-7 text-slate-700">Bangladeshi SSC represents about 10 years of schooling. Most Hungarian universities require completion of secondary education equivalent to 12 years, which in Bangladesh means HSC, A-levels or an accepted equivalent. See <Link href="/study/hungary/admission-requirements-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link>.</p>
</section>
<section id="your-realistic-options" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Your realistic options</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Option</th><th scope="col" className="px-3 py-2 text-left font-bold">Suitable for</th><th scope="col" className="px-3 py-2 text-left font-bold">Note</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Finish HSC, then apply</td><td className="px-3 py-2 align-top">Most SSC students</td><td className="px-3 py-2 align-top">Cleanest route and widest choice</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Diploma in Engineering route</td><td className="px-3 py-2 align-top">Technical students</td><td className="px-3 py-2 align-top">Check recognition, see <Link href="/study/hungary/study-in-hungary-after-diploma" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">after diploma</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Foundation or preparatory year</td><td className="px-3 py-2 align-top">Students needing bridge</td><td className="px-3 py-2 align-top">Rules differ; see <Link href="/study/hungary/foundation-year-and-preparatory-courses-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">foundation year</Link></td></tr></tbody></table></div>
</section>
<section id="planning-while-finishing-hsc" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Planning while finishing HSC</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Choose HSC subjects that match your target course (science for medicine and engineering).</li><li>Start English test preparation early.</li><li>Research programmes through <Link href="/study/hungary/top-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities</Link>.</li><li>Build a budget using <Link href="/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees</Link>.</li></ul>
</section>
<section id="what-to-avoid" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What to avoid</h2>
<p className="mt-4 leading-7 text-slate-700">Do not accept offers that skip academic requirements or ask for money before verifying the institution. Residence permits depend on genuine enrolment; see <Link href="/study/hungary/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa requirements</Link>.</p>
</section>
<section id="a-sample-plan-from-ssc-to-hungary" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">A sample plan from SSC to Hungary</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Stage</th><th scope="col" className="px-3 py-2 text-left font-bold">Action</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Year 1 of HSC</td><td className="px-3 py-2 align-top">Pick subjects aligned with your target course; research programmes</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Year 2 of HSC</td><td className="px-3 py-2 align-top">Prepare English; shortlist universities; collect documents</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">After HSC</td><td className="px-3 py-2 align-top">Apply to universities and scholarship; prepare funds</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Admission</td><td className="px-3 py-2 align-top">Apply for D-visa and permit</td></tr></tbody></table></div>
</section>
<section id="if-you-are-already-out-of-school" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">If you are already out of school</h2>
<p className="mt-4 leading-7 text-slate-700">If you completed SSC some time ago, evaluate whether to complete HSC through a recognised route, take a diploma or explore a foundation route. A longer gap needs a strong explanation; see <Link href="/study/hungary/study-gap-accepted-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study gap guide</Link>.</p>
</section>
<section id="why-bangladeshi-students-should-not-rush-after-ssc" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Why Bangladeshi students should not rush after SSC</h2>
<p className="mt-4 leading-7 text-slate-700">Completing HSC or an accepted equivalent gives you a wider choice of programmes, better scholarship eligibility and a stronger visa file. Rushing into an unverified shortcut can lead to non-recognised qualifications, wasted fees and refusal. Spend the time building grades, English and a clear plan.</p>
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
