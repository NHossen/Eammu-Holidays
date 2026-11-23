import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/serbia/part-time-job-and-post-study-work-rules-in-serbia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Part-Time Job and Post-Study Work Rules in Serbia 2026",
  "description": "Work rules for international students in Serbia in 2026: up to 16 hours a week for regulated study residence, tax notes and post-study options.",
  "keywords": [
    "part time job Serbia international students",
    "work while studying Serbia",
    "post study work Serbia",
    "Serbia work permit student"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/serbia/part-time-job-and-post-study-work-rules-in-serbia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Part-Time Job and Post-Study Work Rules in Serbia 2026",
    "description": "Work rules for international students in Serbia in 2026: up to 16 hours a week for regulated study residence, tax notes and post-study options.",
    "url": "https://eammu.com/study/serbia/part-time-job-and-post-study-work-rules-in-serbia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Part-Time Job and Post-Study Work Rules in Serbia 2026",
    "description": "Work rules for international students in Serbia in 2026: up to 16 hours a week for regulated study residence, tax notes and post-study options."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Serbia", "href": "/study/serbia"}, {"name": "Work & Post-Study Rules", "href": "/study/serbia/part-time-job-and-post-study-work-rules-in-serbia"}];
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
    "href": "/study/serbia/bring-family-to-serbia-as-a-student",
    "title": "Can You Bring Family to Serbia as an International Student?",
    "description": "Can Bangladeshi students bring spouse or children to Serbia in 2026? Family reunification basics, conditions and alternatives for student residents."
  },
  {
    "href": "/study/serbia/cost-of-living-in-serbia-for-bangladeshi-students",
    "title": "Cost of Living in Serbia for Bangladeshi Students: Monthly Budget",
    "description": "Monthly cost of living in Serbia for Bangladeshi students in 2026: rent, food, transport and insurance in Belgrade, Novi Sad, Niš and Kragujevac."
  },
  {
    "href": "/study/serbia/masters-and-phd-in-serbia-for-bangladeshi-students",
    "title": "Master's and PhD in Serbia for Bangladeshi Students",
    "description": "Master's and PhD study in Serbia for Bangladeshi students in 2026: English programmes, entry requirements, funding, supervisors and fees."
  },
  {
    "href": "/study/serbia/study-in-belgrade",
    "title": "Study in Belgrade for Bangladeshi Students: Universities, Costs, Life",
    "description": "Study in Belgrade in 2026: University of Belgrade, private universities, rent, transport, jobs and student life for Bangladeshi students."
  }
];
const FAQS = [
  {
    "q": "Can international students work in Serbia?",
    "a": "Yes, within limits. The official portal says up to 16 hours a week for those with regulated stay based on study."
  },
  {
    "q": "Do I need a work permit?",
    "a": "You need regulated residence; check whether your card records the right to work."
  },
  {
    "q": "Can I stay in Serbia after graduation?",
    "a": "Possibly through an extension or a work-based permit; confirm the conditions."
  },
  {
    "q": "Is Serbian required for jobs?",
    "a": "Often yes, except in some international companies and IT roles."
  },
  {
    "q": "Can I work full-time during holidays?",
    "a": "The portal states 16 hours a week; confirm if holiday rules differ."
  },
  {
    "q": "Will work affect my permit?",
    "a": "Only unauthorised work or exceeding limits does."
  },
  {
    "q": "Can I bring family while working?",
    "a": "See the family guide for rules."
  },
  {
    "q": "How much can I earn?",
    "a": "Modest amounts; do not plan to fund your studies from wages."
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
          "name": "Work & Post-Study Rules",
          "item": "https://eammu.com/study/serbia/part-time-job-and-post-study-work-rules-in-serbia"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Part-Time Job and Post-Study Work Rules in Serbia for International Students (2026)",
      "description": "Work rules for international students in Serbia in 2026: up to 16 hours a week for regulated study residence, tax notes and post-study options.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/serbia/part-time-job-and-post-study-work-rules-in-serbia",
      "keywords": "part time job Serbia international students, work while studying Serbia, post study work Serbia, Serbia work permit student",
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
          "name": "Can international students work in Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, within limits. The official portal says up to 16 hours a week for those with regulated stay based on study."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a work permit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You need regulated residence; check whether your card records the right to work."
          }
        },
        {
          "@type": "Question",
          "name": "Can I stay in Serbia after graduation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possibly through an extension or a work-based permit; confirm the conditions."
          }
        },
        {
          "@type": "Question",
          "name": "Is Serbian required for jobs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often yes, except in some international companies and IT roles."
          }
        },
        {
          "@type": "Question",
          "name": "Can I work full-time during holidays?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The portal states 16 hours a week; confirm if holiday rules differ."
          }
        },
        {
          "@type": "Question",
          "name": "Will work affect my permit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only unauthorised work or exceeding limits does."
          }
        },
        {
          "@type": "Question",
          "name": "Can I bring family while working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the family guide for rules."
          }
        },
        {
          "@type": "Question",
          "name": "How much can I earn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Modest amounts; do not plan to fund your studies from wages."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Part-Time Job and Post-Study Work Rules in Serbia for International Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">What students may do regarding work, and what to expect after graduation.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>The Welcome to Serbia portal states that foreigners with regulated stay on the basis of study may work up to 16 hours a week.</li><li>Residence based on studying can carry a note on the card showing whether work is permitted.</li><li>University of Niš guidance says temporary residence may be extended for a period after the programme ends, subject to conditions.</li><li>Always check current law; rules change.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#work-during-studies" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Work during studies</a></li><li><a href="#realistic-earnings" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Realistic earnings</a></li><li><a href="#after-graduation" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">After graduation</a></li><li><a href="#tax-and-contracts" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Tax and contracts</a></li><li><a href="#tips" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Tips</a></li><li><a href="#types-of-student-jobs" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Types of student jobs</a></li><li><a href="#planning-for-post-study-options" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Planning for post-study options</a></li></ol>
          </nav>

          <article>
<section id="work-during-studies" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Work during studies</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">What the official portal says</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Weekly hours</td><td className="px-3 py-2 align-top">Up to 16 hours a week for foreigners with regulated stay based on study</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Basis</td><td className="px-3 py-2 align-top">A residence permit or temporary residence is needed before working</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Permit card</td><td className="px-3 py-2 align-top">The card records whether the right to work exists</td></tr></tbody></table></div><p className="mt-4 leading-7 text-slate-700">Do not rely on informal jobs: unauthorised work can affect your permit. Confirm with your university and the police administration before accepting any job.</p>
</section>
<section id="realistic-earnings" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Realistic earnings</h2>
<p className="mt-4 leading-7 text-slate-700">Student jobs are often hospitality, retail and call-centre roles, and English-only options are limited outside Belgrade and Novi Sad. Wages are modest. Plan funds using <Link href="/study/serbia/cost-of-living-in-serbia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living</Link> and <Link href="/study/serbia/bank-solvency-requirements-for-serbia-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link>.</p>
</section>
<section id="after-graduation" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">After graduation</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Temporary residence for work typically needs a job offer and a work-based permit.</li><li>University guidance indicates study-based residence may be extended for a limited time after the programme; confirm current conditions.</li><li>Serbian language, field and employer demand matter.</li><li>Plan internships and networking during study.</li></ul>
</section>
<section id="tax-and-contracts" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Tax and contracts</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Get a written contract and keep payslips.</li><li>Understand income tax rules on student work.</li><li>Avoid cash-in-hand arrangements.</li></ul>
</section>
<section id="tips" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Tips</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Confirm work rules with the university and the authorities.</li><li>Learn basic Serbian.</li><li>See <Link href="/study/serbia/study-in-belgrade" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Belgrade</Link> and <Link href="/study/serbia/study-in-novi-sad" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Novi Sad</Link> for the largest job markets.</li></ul>
</section>
<section id="types-of-student-jobs" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Types of student jobs</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Campus roles and research assistance.</li><li>Hospitality and retail.</li><li>Tutoring and language teaching.</li><li>IT freelancing, subject to rules.</li></ul><p className="mt-4 leading-7 text-slate-700">Check with the authorities before taking any job that is not clearly allowed.</p>
</section>
<section id="planning-for-post-study-options" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Planning for post-study options</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Build language skills and a professional network.</li><li>Do internships.</li><li>Track permit expiry dates.</li><li>Apply early for any work-based permit.</li><li>Keep documents from your studies.</li></ol>
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
