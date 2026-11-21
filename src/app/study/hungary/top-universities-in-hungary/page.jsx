import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/top-universities-in-hungary';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Top Universities in Hungary for International Students 2026",
  "description": "Top universities in Hungary for Bangladeshi students in 2026: ELTE, BME, Semmelweis, Debrecen, Szeged, Pécs and Corvinus with strengths and fit.",
  "keywords": [
    "top universities in Hungary",
    "best universities in Hungary for international students",
    "ELTE BME Semmelweis Debrecen"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/top-universities-in-hungary"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Top Universities in Hungary for International Students 2026",
    "description": "Top universities in Hungary for Bangladeshi students in 2026: ELTE, BME, Semmelweis, Debrecen, Szeged, Pécs and Corvinus with strengths and fit.",
    "url": "https://eammu.com/study/hungary/top-universities-in-hungary",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Top Universities in Hungary for International Students 2026",
    "description": "Top universities in Hungary for Bangladeshi students in 2026: ELTE, BME, Semmelweis, Debrecen, Szeged, Pécs and Corvinus with strengths and fit."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Top Universities", "href": "/study/hungary/top-universities-in-hungary"}];
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
    "href": "/study/hungary/cheapest-universities-in-hungary",
    "title": "Cheapest Universities in Hungary for Bangladeshi Students",
    "description": "How to find the cheapest universities in Hungary in 2026: low-fee regional public universities, hidden costs and a checklist for Bangladeshi students."
  },
  {
    "href": "/study/hungary/public-vs-private-universities-in-hungary",
    "title": "Public vs Private Universities in Hungary: Recognition, Fees and Visa Impact",
    "description": "Public, foundation-run, church and private universities in Hungary explained for Bangladeshi students: fees, recognition and residence permit rules."
  },
  {
    "href": "/study/hungary/cse-and-it-courses-in-hungary",
    "title": "CSE and IT Courses in Hungary for Bangladeshi Students",
    "description": "CSE and IT courses in Hungary for Bangladeshi students in 2026: computer science, software engineering and data science programmes, fees and careers."
  },
  {
    "href": "/study/hungary/mbbs-and-medical-degrees-in-hungary",
    "title": "Medicine, Dentistry and Pharmacy in Hungary for Bangladeshi Students",
    "description": "Study medicine (MD), dentistry and pharmacy in Hungary in 2026 for Bangladeshi students: universities, fees, entrance exams and BMDC recognition."
  }
];
const FAQS = [
  {
    "q": "Which is the best university in Hungary?",
    "a": "There is no single best. ELTE, BME, Semmelweis, Debrecen and Szeged are common choices, depending on your subject."
  },
  {
    "q": "Which Hungarian university is best for IT?",
    "a": "BME, ELTE, Szeged, Debrecen and Óbuda are among popular choices for computing."
  },
  {
    "q": "Where can I study medicine in Hungary?",
    "a": "Semmelweis in Budapest, Debrecen, Szeged and Pécs offer English-taught medicine."
  },
  {
    "q": "Are Hungarian degrees recognised in Bangladesh?",
    "a": "Recognition depends on the profession and regulator. Check with the relevant Bangladeshi authority before enrolling."
  },
  {
    "q": "Do rankings matter for visas?",
    "a": "No, but state recognition and genuine study intent do."
  },
  {
    "q": "Can I switch universities after arriving?",
    "a": "Switching is possible but affects your residence permit and credits. Plan carefully."
  },
  {
    "q": "Do rankings matter in Hungary?",
    "a": "They can help with comparison, but programme quality, cost and recognition matter more for most Bangladeshi students."
  },
  {
    "q": "Is it easy to get into top universities?",
    "a": "Competition varies by programme; medicine and popular IT courses are more competitive."
  },
  {
    "q": "Can I apply to multiple top universities?",
    "a": "Yes, follow each university's process and deadlines."
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
          "name": "Top Universities",
          "item": "https://eammu.com/study/hungary/top-universities-in-hungary"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Top Universities in Hungary for Bangladeshi Students (2026)",
      "description": "Top universities in Hungary for Bangladeshi students in 2026: ELTE, BME, Semmelweis, Debrecen, Szeged, Pécs and Corvinus with strengths and fit.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/top-universities-in-hungary",
      "keywords": "top universities in Hungary, best universities in Hungary for international students, ELTE BME Semmelweis Debrecen",
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
          "name": "Which is the best university in Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no single best. ELTE, BME, Semmelweis, Debrecen and Szeged are common choices, depending on your subject."
          }
        },
        {
          "@type": "Question",
          "name": "Which Hungarian university is best for IT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BME, ELTE, Szeged, Debrecen and Óbuda are among popular choices for computing."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I study medicine in Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Semmelweis in Budapest, Debrecen, Szeged and Pécs offer English-taught medicine."
          }
        },
        {
          "@type": "Question",
          "name": "Are Hungarian degrees recognised in Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recognition depends on the profession and regulator. Check with the relevant Bangladeshi authority before enrolling."
          }
        },
        {
          "@type": "Question",
          "name": "Do rankings matter for visas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, but state recognition and genuine study intent do."
          }
        },
        {
          "@type": "Question",
          "name": "Can I switch universities after arriving?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Switching is possible but affects your residence permit and credits. Plan carefully."
          }
        },
        {
          "@type": "Question",
          "name": "Do rankings matter in Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They can help with comparison, but programme quality, cost and recognition matter more for most Bangladeshi students."
          }
        },
        {
          "@type": "Question",
          "name": "Is it easy to get into top universities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Competition varies by programme; medicine and popular IT courses are more competitive."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply to multiple top universities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, follow each university's process and deadlines."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Top Universities in Hungary for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A strengths-based guide to the Hungarian universities Bangladeshi students apply to most.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Choose by programme, language of instruction and cost, not just by rank.</li><li>Medicine is concentrated in Budapest, Debrecen, Szeged and Pécs.</li><li>Technical programmes are strongest at BME, Óbuda and regional engineering universities.</li><li>Check state recognition and English-taught availability.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#leading-universities-and-what-they-are-known-for" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Leading universities and what they are known for</a></li><li><a href="#how-to-choose" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to choose</a></li><li><a href="#programme-shortlists" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Programme shortlists</a></li><li><a href="#public-church-and-private-institutions" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Public, church and private institutions</a></li><li><a href="#matching-universities-to-goals" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Matching universities to goals</a></li><li><a href="#questions-to-ask-before-applying" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Questions to ask before applying</a></li></ol>
          </nav>

          <article>
<section id="leading-universities-and-what-they-are-known-for" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Leading universities and what they are known for</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">University</th><th scope="col" className="px-3 py-2 text-left font-bold">City</th><th scope="col" className="px-3 py-2 text-left font-bold">Known for</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Eötvös Loránd University (ELTE)</td><td className="px-3 py-2 align-top">Budapest</td><td className="px-3 py-2 align-top">Sciences, informatics, law, social sciences</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Budapest University of Technology and Economics (BME)</td><td className="px-3 py-2 align-top">Budapest</td><td className="px-3 py-2 align-top">Engineering, IT, architecture, business</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Semmelweis University</td><td className="px-3 py-2 align-top">Budapest</td><td className="px-3 py-2 align-top">Medicine, dentistry, pharmacy, health sciences</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Corvinus University of Budapest</td><td className="px-3 py-2 align-top">Budapest</td><td className="px-3 py-2 align-top">Business, economics, international relations</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">University of Debrecen</td><td className="px-3 py-2 align-top">Debrecen</td><td className="px-3 py-2 align-top">Broad range, medicine, engineering, agriculture</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">University of Szeged</td><td className="px-3 py-2 align-top">Szeged</td><td className="px-3 py-2 align-top">Sciences, medicine, informatics, pharmacy</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">University of Pécs</td><td className="px-3 py-2 align-top">Pécs</td><td className="px-3 py-2 align-top">Medicine, engineering, business, arts</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Óbuda University</td><td className="px-3 py-2 align-top">Budapest</td><td className="px-3 py-2 align-top">Applied engineering, IT, business</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Széchenyi István University</td><td className="px-3 py-2 align-top">Győr</td><td className="px-3 py-2 align-top">Engineering, automotive, IT, logistics</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Hungarian University of Agriculture and Life Sciences (MATE)</td><td className="px-3 py-2 align-top">Gödöllő and other campuses</td><td className="px-3 py-2 align-top">Agriculture, environment, food, economics</td></tr></tbody></table></div><p className="mt-4 leading-7 text-slate-700">This list is indicative and not a ranking. Offerings and English-taught programmes change yearly; verify on each university site.</p>
</section>
<section id="how-to-choose" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to choose</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Pick the programme first, then the university.</li><li>Compare tuition and living costs with <Link href="/study/hungary/cheapest-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cheapest universities</Link>.</li><li>Check whether the programme is accredited and taught fully in English.</li><li>Consider the city: see <Link href="/study/hungary/study-in-budapest" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Budapest</Link>, <Link href="/study/hungary/study-in-debrecen" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Debrecen</Link> and <Link href="/study/hungary/study-in-szeged-pecs-and-other-cities" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">other cities</Link>.</li></ul>
</section>
<section id="programme-shortlists" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Programme shortlists</h2>
<p className="mt-4 leading-7 text-slate-700">For computing, read <Link href="/study/hungary/cse-and-it-courses-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT courses</Link>; for engineering, <Link href="/study/hungary/engineering-courses-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">engineering courses</Link>; for business, <Link href="/study/hungary/mba-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MBA and business degrees</Link>; for health sciences, <Link href="/study/hungary/mbbs-and-medical-degrees-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">medicine, dentistry and pharmacy</Link>.</p>
</section>
<section id="public-church-and-private-institutions" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Public, church and private institutions</h2>
<p className="mt-4 leading-7 text-slate-700">Hungary has state, foundation-run, church and private institutions. Residence permits require a state-recognised institution; see <Link href="/study/hungary/public-vs-private-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">public vs private universities</Link>.</p>
</section>
<section id="matching-universities-to-goals" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Matching universities to goals</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Goal</th><th scope="col" className="px-3 py-2 text-left font-bold">Universities to examine</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Research and science</td><td className="px-3 py-2 align-top">ELTE, University of Szeged, University of Debrecen</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Engineering and technology</td><td className="px-3 py-2 align-top">BME, Óbuda University, Széchenyi István University, University of Miskolc</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Business and economics</td><td className="px-3 py-2 align-top">Corvinus University, Budapest Business University, University of Debrecen</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Health sciences</td><td className="px-3 py-2 align-top">Semmelweis, Debrecen, Szeged, Pécs</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Agriculture and environment</td><td className="px-3 py-2 align-top">Hungarian University of Agriculture and Life Sciences</td></tr></tbody></table></div>
</section>
<section id="questions-to-ask-before-applying" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Questions to ask before applying</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>How many students are admitted to the English programme each year?</li><li>What are the graduation and employment outcomes?</li><li>Are internships built into the curriculum?</li><li>Is housing guaranteed for international students?</li><li>Is the degree recognised for my intended career?</li></ul>
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
