import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/hungary-intake-dates';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Hungary Intake Dates 2026–2027 for Bangladeshi Students",
  "description": "Hungary intake dates and deadlines for Bangladeshi students: September and February intakes, Stipendium Hungaricum timing and self-financed deadlines.",
  "keywords": [
    "Hungary intake dates",
    "Hungary September intake",
    "Hungary February intake",
    "Hungary application deadline"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/hungary-intake-dates"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Hungary Intake Dates 2026–2027 for Bangladeshi Students",
    "description": "Hungary intake dates and deadlines for Bangladeshi students: September and February intakes, Stipendium Hungaricum timing and self-financed deadlines.",
    "url": "https://eammu.com/study/hungary/hungary-intake-dates",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Hungary Intake Dates 2026–2027 for Bangladeshi Students",
    "description": "Hungary intake dates and deadlines for Bangladeshi students: September and February intakes, Stipendium Hungaricum timing and self-financed deadlines."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Intake Dates", "href": "/study/hungary/hungary-intake-dates"}];
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
    "href": "/study/hungary/how-to-apply-to-hungarian-universities",
    "title": "How to Apply to Hungarian Universities from Bangladesh: Step-by-Step Guide",
    "description": "How to apply to Hungarian universities from Bangladesh in 2026: direct applications, Stipendium Hungaricum, documents, fees, offers and next steps."
  },
  {
    "href": "/study/hungary/stipendium-hungaricum-eligibility-and-deadlines",
    "title": "Stipendium Hungaricum Eligibility, Deadlines and Documents (2026–2027)",
    "description": "Stipendium Hungaricum eligibility, deadlines and documents for Bangladeshi applicants: January deadline, language proof and Ministry of Education step."
  },
  {
    "href": "/study/hungary/student-visa-processing-time-and-cost",
    "title": "Hungary Student Visa Processing Time and Cost for Bangladeshis",
    "description": "Hungary student visa and residence permit processing time and cost in 2026 for Bangladeshi applicants: fees, service charges and planning timelines."
  },
  {
    "href": "/study/hungary/admission-requirements-in-hungary-for-bangladeshi-students",
    "title": "Admission Requirements in Hungary for Bangladeshi Students",
    "description": "Admission requirements for Hungarian universities in 2026 for Bangladeshi students: HSC, bachelor's, English tests, entrance exams and documents."
  }
];
const FAQS = [
  {
    "q": "What is the main intake in Hungary?",
    "a": "September (autumn semester)."
  },
  {
    "q": "Is there a February intake in Hungary?",
    "a": "Some universities admit in February, but fewer programmes are available."
  },
  {
    "q": "When is the Stipendium Hungaricum deadline?",
    "a": "Normally mid-January. The 2026/27 deadline was 15 January 2026; check the official portal for the next call."
  },
  {
    "q": "When should I apply for the visa?",
    "a": "As soon as you have your admission letter and documents, since peak season is slow."
  },
  {
    "q": "Are deadlines the same for all universities?",
    "a": "No. They vary by university and programme."
  },
  {
    "q": "Can I apply late?",
    "a": "Sometimes, but late applications risk missing visa timelines."
  },
  {
    "q": "Can I apply for the September 2027 intake now?",
    "a": "Many universities and the scholarship cycle open in autumn. Check each programme's page."
  },
  {
    "q": "Do medical programmes have different dates?",
    "a": "Often yes, with earlier deadlines and entrance exams."
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
          "name": "Intake Dates",
          "item": "https://eammu.com/study/hungary/hungary-intake-dates"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Hungary Intake Dates and Application Deadlines (2026–2027)",
      "description": "Hungary intake dates and deadlines for Bangladeshi students: September and February intakes, Stipendium Hungaricum timing and self-financed deadlines.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/hungary-intake-dates",
      "keywords": "Hungary intake dates, Hungary September intake, Hungary February intake, Hungary application deadline",
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
          "name": "What is the main intake in Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "September (autumn semester)."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a February intake in Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some universities admit in February, but fewer programmes are available."
          }
        },
        {
          "@type": "Question",
          "name": "When is the Stipendium Hungaricum deadline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Normally mid-January. The 2026/27 deadline was 15 January 2026; check the official portal for the next call."
          }
        },
        {
          "@type": "Question",
          "name": "When should I apply for the visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As soon as you have your admission letter and documents, since peak season is slow."
          }
        },
        {
          "@type": "Question",
          "name": "Are deadlines the same for all universities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. They vary by university and programme."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply late?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sometimes, but late applications risk missing visa timelines."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply for the September 2027 intake now?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many universities and the scholarship cycle open in autumn. Check each programme's page."
          }
        },
        {
          "@type": "Question",
          "name": "Do medical programmes have different dates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often yes, with earlier deadlines and entrance exams."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Hungary Intake Dates and Application Deadlines (2026–2027)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">When to apply, and which deadlines matter most.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>September is the main intake; February is available at some universities.</li><li>Stipendium Hungaricum normally closes in mid-January (the 2026/27 deadline was 15 January 2026, 14:00 CET).</li><li>Self-financed deadlines vary widely, often March to July.</li><li>Visa processing needs time: apply as soon as you hold an admission letter.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#main-intakes" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Main intakes</a></li><li><a href="#stipendium-hungaricum-timing" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Stipendium Hungaricum timing</a></li><li><a href="#backward-planning" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Backward planning</a></li><li><a href="#missing-a-deadline" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Missing a deadline</a></li><li><a href="#month-by-month-planner-for-september-2027" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Month-by-month planner for September 2027</a></li><li><a href="#why-early-applications-matter" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Why early applications matter</a></li><li><a href="#common-deadline-mistakes" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Common deadline mistakes</a></li></ol>
          </nav>

          <article>
<section id="main-intakes" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Main intakes</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Intake</th><th scope="col" className="px-3 py-2 text-left font-bold">Start</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical application window</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Autumn (main)</td><td className="px-3 py-2 align-top">September</td><td className="px-3 py-2 align-top">November – July depending on programme</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Spring</td><td className="px-3 py-2 align-top">February</td><td className="px-3 py-2 align-top">September – December</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Stipendium Hungaricum</td><td className="px-3 py-2 align-top">September</td><td className="px-3 py-2 align-top">Autumn opening, deadline mid-January</td></tr></tbody></table></div><p className="mt-4 leading-7 text-slate-700">Medical programmes often have earlier deadlines and entrance exams. Always follow the programme page, not general lists.</p>
</section>
<section id="stipendium-hungaricum-timing" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Stipendium Hungaricum timing</h2>
<p className="mt-4 leading-7 text-slate-700">The official call for the 2026/27 cycle closed on 15 January 2026 at 14:00 Central European Time. The cycle normally repeats each year, so check the official portal for the 2027/28 call and also the Ministry of Education in Dhaka for local requirements. See <Link href="/study/hungary/stipendium-hungaricum-eligibility-and-deadlines" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">eligibility and deadlines</Link>.</p>
</section>
<section id="backward-planning" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Backward planning</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>9–12 months before: choose programmes and book English tests.</li><li>6–8 months before: submit applications and prepare attested documents.</li><li>3–5 months before: accept offer, arrange funds and accommodation.</li><li>2–3 months before: apply for D-visa and permit.</li><li>1 month before: insurance, tickets and arrival plan.</li></ol><p className="mt-4 leading-7 text-slate-700">See the <Link href="/study/hungary/how-to-apply-to-hungarian-universities" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">application guide</Link> and <Link href="/study/hungary/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa processing time and cost</Link>.</p>
</section>
<section id="missing-a-deadline" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Missing a deadline</h2>
<p className="mt-4 leading-7 text-slate-700">If you miss a September deadline, ask about late rounds, February intake or a one-year delay. Use the time to improve your profile with <Link href="/study/hungary/study-in-hungary-without-ielts" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">English test options</Link> and <Link href="/study/hungary/sop-and-motivation-letter-for-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">a stronger motivation letter</Link>.</p>
</section>
<section id="month-by-month-planner-for-september-2027" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Month-by-month planner for September 2027</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Month</th><th scope="col" className="px-3 py-2 text-left font-bold">Task</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">November 2026</td><td className="px-3 py-2 align-top">Check Stipendium Hungaricum call and start documents</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">December 2026</td><td className="px-3 py-2 align-top">Finish attestation and motivation letters</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">January 2027</td><td className="px-3 py-2 align-top">Submit scholarship application before the deadline</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">February – April 2027</td><td className="px-3 py-2 align-top">Self-financed applications and entrance tests</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">May – June 2027</td><td className="px-3 py-2 align-top">Accept offers and arrange funds</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">June – August 2027</td><td className="px-3 py-2 align-top">Visa and permit application</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">September 2027</td><td className="px-3 py-2 align-top">Arrival and enrolment</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Dates are planning estimates; always follow official calls and university pages.</p>
</section>
<section id="why-early-applications-matter" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Why early applications matter</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>More programme choices and housing options.</li><li>Time for visa appointments.</li><li>Time to correct document problems.</li><li>Better scholarship preparation.</li></ul>
</section>
<section id="common-deadline-mistakes" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Common deadline mistakes</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Assuming all universities share the same date.</li><li>Forgetting time zone differences.</li><li>Submitting at the last minute when systems are slow.</li><li>Ignoring separate entrance exam registration dates.</li></ul>
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
