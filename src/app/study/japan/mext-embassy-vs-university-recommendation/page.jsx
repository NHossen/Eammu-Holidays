import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/mext-embassy-vs-university-recommendation';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "MEXT Embassy vs University Recommendation 2026 | Eammu",
  "description": "MEXT embassy recommendation vs university recommendation for Bangladeshi students: differences, timelines, English-taught tracks and how to choose.",
  "keywords": [
    "MEXT university recommendation",
    "MEXT embassy recommendation",
    "MEXT difference"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/mext-embassy-vs-university-recommendation"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "MEXT Embassy vs University Recommendation 2026 | Eammu",
    "description": "MEXT embassy recommendation vs university recommendation for Bangladeshi students: differences, timelines, English-taught tracks and how to choose.",
    "url": "https://eammu.com/study/japan/mext-embassy-vs-university-recommendation",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "MEXT Embassy vs University Recommendation 2026 | Eammu",
    "description": "MEXT embassy recommendation vs university recommendation for Bangladeshi students: differences, timelines, English-taught tracks and how to choose."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "Embassy vs University Recommendation", "href": "/study/japan/mext-embassy-vs-university-recommendation"}];
const NAV = [
  {
    "label": "Japan Hub",
    "pages": [
      {
        "href": "/study/japan",
        "label": "Study in Japan Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/japan/study-in-japan-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/japan/study-in-japan-in-english-without-japanese",
        "label": "English & Without Japanese"
      },
      {
        "href": "/study/japan/tuition-fees-in-japan-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/japan/cost-of-living-in-japan-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/japan/affordable-universities-in-japan",
        "label": "Affordable Universities"
      },
      {
        "href": "/study/japan/top-universities-in-japan",
        "label": "Top Universities"
      },
      {
        "href": "/study/japan/national-vs-private-universities-in-japan",
        "label": "National vs Private Universities"
      },
      {
        "href": "/study/japan/admission-requirements-in-japan-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/japan/study-gap-and-japan-student-visa",
        "label": "Study Gap & Japan Visa"
      },
      {
        "href": "/study/japan/study-in-japan-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/japan/study-in-japan-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/japan/japan-intake-dates",
        "label": "Intake Dates"
      },
      {
        "href": "/study/japan/japan-vs-south-korea-vs-germany-for-bangladeshi-students",
        "label": "Japan vs South Korea vs Germany"
      }
    ]
  },
  {
    "label": "Scholarships & Funding",
    "pages": [
      {
        "href": "/study/japan/scholarships-in-japan-for-bangladeshi-students",
        "label": "Scholarships Overview"
      },
      {
        "href": "/study/japan/mext-scholarship-guide-for-bangladeshi-students",
        "label": "MEXT Scholarship Guide"
      },
      {
        "href": "/study/japan/mext-eligibility-and-deadlines",
        "label": "MEXT Eligibility & Deadlines"
      },
      {
        "href": "/study/japan/mext-embassy-vs-university-recommendation",
        "label": "Embassy vs University Recommendation"
      },
      {
        "href": "/study/japan/jasso-and-university-scholarships-in-japan",
        "label": "JASSO & University Scholarships"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/japan/how-to-apply-to-japanese-universities",
        "label": "How to Apply (Step by Step)"
      },
      {
        "href": "/study/japan/degree-recognition-and-eligibility-in-japan",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/japan/bachelors-in-japan-for-bangladeshi-students",
        "label": "Bachelor's Degrees"
      },
      {
        "href": "/study/japan/masters-and-phd-in-japan-for-bangladeshi-students",
        "label": "Master's & PhD"
      },
      {
        "href": "/study/japan/english-taught-programs-in-japan",
        "label": "English-Taught Programmes"
      },
      {
        "href": "/study/japan/japanese-language-schools-in-japan",
        "label": "Japanese Language Schools"
      },
      {
        "href": "/study/japan/japanese-language-requirements-for-bangladeshi-students",
        "label": "Japanese Language Requirements"
      },
      {
        "href": "/study/japan/cse-and-it-courses-in-japan",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/japan/engineering-courses-in-japan",
        "label": "Engineering Courses"
      },
      {
        "href": "/study/japan/mba-and-business-degrees-in-japan",
        "label": "MBA & Business"
      },
      {
        "href": "/study/japan/kosen-and-vocational-colleges-in-japan",
        "label": "KOSEN & Vocational Colleges"
      },
      {
        "href": "/study/japan/sop-and-study-plan-for-japan",
        "label": "SOP & Study Plan"
      },
      {
        "href": "/study/japan/eju-exam-for-japanese-universities",
        "label": "EJU Exam"
      }
    ]
  },
  {
    "label": "Cities & Student Life",
    "pages": [
      {
        "href": "/study/japan/student-accommodation-in-japan",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/japan/study-in-tokyo",
        "label": "Study in Tokyo"
      },
      {
        "href": "/study/japan/study-in-osaka-and-kyoto",
        "label": "Osaka & Kyoto"
      },
      {
        "href": "/study/japan/study-in-fukuoka-and-other-cities",
        "label": "Fukuoka & Other Cities"
      },
      {
        "href": "/study/japan/health-insurance-for-students-in-japan",
        "label": "Health Insurance"
      },
      {
        "href": "/study/japan/halal-food-and-bangladeshi-community-in-japan",
        "label": "Halal Food & Community"
      },
      {
        "href": "/study/japan/life-in-japan-for-international-students",
        "label": "Life in Japan"
      },
      {
        "href": "/study/japan/japan-bank-account-phone-and-residence-card",
        "label": "Bank, Phone & Residence Card"
      }
    ]
  },
  {
    "label": "Visa, COE & Work Rules",
    "pages": [
      {
        "href": "/study/japan/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/japan/certificate-of-eligibility-coe-guide",
        "label": "COE Guide"
      },
      {
        "href": "/study/japan/japan-student-visa-application-guide-dhaka",
        "label": "Dhaka Visa Application Guide"
      },
      {
        "href": "/study/japan/japan-student-documents-checklist",
        "label": "Documents Checklist"
      },
      {
        "href": "/study/japan/financial-proof-requirements-for-japan-student-visa",
        "label": "Financial Proof"
      },
      {
        "href": "/study/japan/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/japan/japan-student-visa-refusal-reasons",
        "label": "Visa Refusal Reasons"
      },
      {
        "href": "/study/japan/part-time-job-rules-for-students-in-japan",
        "label": "Part-Time Job Rules"
      },
      {
        "href": "/study/japan/post-study-work-and-job-hunting-visa-in-japan",
        "label": "Post-Study Work & Job Hunting"
      },
      {
        "href": "/study/japan/bring-family-to-japan-as-a-student",
        "label": "Family & Dependents"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/japan/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/japan/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/japan/mext-scholarship-guide-for-bangladeshi-students",
    "title": "MEXT (Japanese Government) Scholarship for Bangladeshi Students: Full Guide",
    "description": "MEXT scholarship guide for Bangladeshi students: categories, benefits, Ministry of Education step, written exam, interview and common mistakes."
  },
  {
    "href": "/study/japan/mext-eligibility-and-deadlines",
    "title": "MEXT Eligibility, Deadlines and Documents (2027–2028 Cycle)",
    "description": "MEXT eligibility, deadlines and documents for Bangladeshi applicants: age, grades, recommendation, health certificate and typical annual schedule."
  },
  {
    "href": "/study/japan/english-taught-programs-in-japan",
    "title": "English-Taught Degree Programs in Japan for Bangladeshi Students",
    "description": "English-taught degree programs in Japan in 2026 for Bangladeshi students: universities, undergraduate and graduate options, requirements and scholarships."
  },
  {
    "href": "/study/japan/masters-and-phd-in-japan-for-bangladeshi-students",
    "title": "Master's and PhD in Japan for Bangladeshi Students",
    "description": "Master's and PhD study in Japan for Bangladeshi students in 2026: research student route, supervisors, MEXT funding, fees and application steps."
  }
];
const FAQS = [
  {
    "q": "What is the difference between the two routes?",
    "a": "Embassy recommendation is run through the Embassy and Ministry; university recommendation is run by the host university."
  },
  {
    "q": "Which is easier?",
    "a": "Neither is easy; both are competitive."
  },
  {
    "q": "Can I apply to both?",
    "a": "Check each call's rules; many students try both."
  },
  {
    "q": "Is English enough for university recommendation?",
    "a": "Some English-taught programmes accept English, but check each one."
  },
  {
    "q": "When does university recommendation open?",
    "a": "Often between November and February."
  },
  {
    "q": "Do I need a supervisor?",
    "a": "For research categories, a supervisor or placement is helpful."
  },
  {
    "q": "Is the benefit the same?",
    "a": "Benefits are generally similar but check each guideline."
  },
  {
    "q": "Where do I find calls?",
    "a": "Embassy pages, Study in Japan portal and university sites."
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
          "name": "Japan",
          "item": "https://eammu.com/study/japan"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Embassy vs University Recommendation",
          "item": "https://eammu.com/study/japan/mext-embassy-vs-university-recommendation"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "MEXT Embassy Recommendation vs University Recommendation: Which Fits You?",
      "description": "MEXT embassy recommendation vs university recommendation for Bangladeshi students: differences, timelines, English-taught tracks and how to choose.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/mext-embassy-vs-university-recommendation",
      "keywords": "MEXT university recommendation, MEXT embassy recommendation, MEXT difference",
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
          "name": "What is the difference between the two routes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Embassy recommendation is run through the Embassy and Ministry; university recommendation is run by the host university."
          }
        },
        {
          "@type": "Question",
          "name": "Which is easier?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither is easy; both are competitive."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply to both?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check each call's rules; many students try both."
          }
        },
        {
          "@type": "Question",
          "name": "Is English enough for university recommendation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some English-taught programmes accept English, but check each one."
          }
        },
        {
          "@type": "Question",
          "name": "When does university recommendation open?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often between November and February."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a supervisor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For research categories, a supervisor or placement is helpful."
          }
        },
        {
          "@type": "Question",
          "name": "Is the benefit the same?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Benefits are generally similar but check each guideline."
          }
        },
        {
          "@type": "Question",
          "name": "Where do I find calls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Embassy pages, Study in Japan portal and university sites."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Japan 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">MEXT Embassy Recommendation vs University Recommendation: Which Fits You?</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">There are two main ways to receive MEXT, and they work differently.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} counseling team &middot; Updated <time dateTime="2026-11-22">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Japan guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 64 Japan guides</summary>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Embassy recommendation is organised through the Embassy and, for Bangladesh, the Ministry of Education.</li><li>University recommendation is organised by the host university for its own applicants.</li><li>Timelines differ; university recommendation often opens in November–February according to Embassy information.</li><li>You can pursue both if rules allow.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#comparison" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Comparison</a></li><li><a href="#how-to-choose" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to choose</a></li><li><a href="#preparation-tips" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Preparation tips</a></li><li><a href="#back-up-plan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Back-up plan</a></li><li><a href="#sample-preparation-timeline" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Sample preparation timeline</a></li><li><a href="#documents-you-can-reuse" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Documents you can reuse</a></li></ol>
          </nav>

          <article>
<section id="comparison" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Comparison</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Feature</th><th scope="col" className="px-3 py-2 text-left font-bold">Embassy recommendation</th><th scope="col" className="px-3 py-2 text-left font-bold">University recommendation</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Who runs it</td><td className="px-3 py-2 align-top">Embassy of Japan and Ministry of Education</td><td className="px-3 py-2 align-top">Japanese university</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Where you apply</td><td className="px-3 py-2 align-top">Through the Ministry of Education in Bangladesh</td><td className="px-3 py-2 align-top">To the university</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Selection</td><td className="px-3 py-2 align-top">Written exam and interview</td><td className="px-3 py-2 align-top">University screening and interview</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Typical timing</td><td className="px-3 py-2 align-top">Call in early year; departure following April or October</td><td className="px-3 py-2 align-top">Application often November to February</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Best for</td><td className="px-3 py-2 align-top">Applicants who want a broad placement</td><td className="px-3 py-2 align-top">Applicants with a specific university or supervisor</td></tr></tbody></table></div>
</section>
<section id="how-to-choose" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to choose</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Do you have a supervisor or programme in mind? Consider university recommendation.</li><li>Do you prefer a national exam route? Consider embassy recommendation.</li><li>Can you prepare for both? Prepare strong documents once and adapt.</li></ul>
</section>
<section id="preparation-tips" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Preparation tips</h2>
<p className="mt-4 leading-7 text-slate-700">Build strong grades, a clear study or research plan and contact potential universities early. See <Link href="/study/japan/sop-and-study-plan-for-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study plan guide</Link> and <Link href="/study/japan/mext-scholarship-guide-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MEXT guide</Link>.</p>
</section>
<section id="back-up-plan" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Back-up plan</h2>
<p className="mt-4 leading-7 text-slate-700">Always keep a self-financed or alternative scholarship option. See <Link href="/study/japan/jasso-and-university-scholarships-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">JASSO and university awards</Link> and <Link href="/study/japan/tuition-fees-in-japan-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees</Link>.</p>
</section>
<section id="sample-preparation-timeline" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Sample preparation timeline</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Period</th><th scope="col" className="px-3 py-2 text-left font-bold">Task</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Autumn</td><td className="px-3 py-2 align-top">Choose universities and contact supervisors</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Winter</td><td className="px-3 py-2 align-top">Prepare university recommendation applications</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Spring</td><td className="px-3 py-2 align-top">Watch for embassy announcements and prepare for exams</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Summer</td><td className="px-3 py-2 align-top">Interviews and results</td></tr></tbody></table></div>
</section>
<section id="documents-you-can-reuse" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Documents you can reuse</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Transcripts and certificates.</li><li>Study or research plan.</li><li>Recommendation letters.</li><li>Language test results.</li></ul>
</section>
          </article>

          <section className="mt-12" aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="text-xl font-bold text-emerald-900">Official sources to verify before you pay or apply</h2>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-6 text-slate-700"><li><a href="https://www.studyinjapan.go.jp/en/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Study in Japan – official portal (JASSO)</a></li><li><a href="https://www.bd.emb-japan.go.jp/en/visa/visainfohowto.html" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Embassy of Japan in Bangladesh – visa information</a></li><li><a href="https://www.moj.go.jp/isa/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Immigration Services Agency of Japan</a></li><li><a href="https://visa.vfsglobal.com/bgd/en/jpn" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">VFS Global – Japan visa application centre, Dhaka</a></li><li><a href="https://www.bd.emb-japan.go.jp/itpr_en/scholarshipnotice.html" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Embassy of Japan in Bangladesh – scholarships (MEXT)</a></li></ul>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Japan Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Japan</h2>
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
