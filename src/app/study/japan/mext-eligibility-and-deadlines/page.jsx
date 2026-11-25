import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/mext-eligibility-and-deadlines';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "MEXT Eligibility and Deadlines 2027–2028 for Bangladesh",
  "description": "MEXT eligibility, deadlines and documents for Bangladeshi applicants: age, grades, recommendation, health certificate and typical annual schedule.",
  "keywords": [
    "MEXT eligibility",
    "MEXT deadline Bangladesh",
    "MEXT documents",
    "MEXT age limit"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/mext-eligibility-and-deadlines"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "MEXT Eligibility and Deadlines 2027–2028 for Bangladesh",
    "description": "MEXT eligibility, deadlines and documents for Bangladeshi applicants: age, grades, recommendation, health certificate and typical annual schedule.",
    "url": "https://eammu.com/study/japan/mext-eligibility-and-deadlines",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "MEXT Eligibility and Deadlines 2027–2028 for Bangladesh",
    "description": "MEXT eligibility, deadlines and documents for Bangladeshi applicants: age, grades, recommendation, health certificate and typical annual schedule."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "MEXT Eligibility & Deadlines", "href": "/study/japan/mext-eligibility-and-deadlines"}];
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
    "href": "/study/japan/mext-embassy-vs-university-recommendation",
    "title": "MEXT Embassy Recommendation vs University Recommendation: Which Fits You?",
    "description": "MEXT embassy recommendation vs university recommendation for Bangladeshi students: differences, timelines, English-taught tracks and how to choose."
  },
  {
    "href": "/study/japan/japan-intake-dates",
    "title": "Japan Intake Dates and Application Deadlines (2026–2027)",
    "description": "Japan intake dates and deadlines for Bangladeshi students: April and October intakes, language school intakes, COE windows and scholarship timing."
  },
  {
    "href": "/study/japan/scholarships-in-japan-for-bangladeshi-students",
    "title": "Scholarships in Japan for Bangladeshi Students: Complete Overview",
    "description": "Scholarships in Japan for Bangladeshi students in 2026: MEXT, JASSO, university awards, language school aid and how to avoid scholarship scams."
  }
];
const FAQS = [
  {
    "q": "Who is eligible for MEXT from Bangladesh?",
    "a": "Bangladeshi citizens who meet the guideline criteria for their category."
  },
  {
    "q": "Is there an age limit?",
    "a": "Yes, depending on category. FY2027 undergraduate guidelines say born on or after 2 April 2002 in principle."
  },
  {
    "q": "Can I apply to several categories?",
    "a": "Check the guideline rules."
  },
  {
    "q": "Where can I check updates?",
    "a": "Embassy of Japan in Bangladesh pages and the Ministry of Education."
  },
  {
    "q": "Is the call the same every year?",
    "a": "Structure is similar; details change."
  },
  {
    "q": "What if I miss the deadline?",
    "a": "Wait for the next call or consider other scholarships."
  },
  {
    "q": "Do I need Japanese for the exam?",
    "a": "Some categories include Japanese in exams; check the guideline."
  },
  {
    "q": "Do I need a supervisor for research categories?",
    "a": "Not always at application stage, but a clear research plan is required."
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
          "name": "MEXT Eligibility & Deadlines",
          "item": "https://eammu.com/study/japan/mext-eligibility-and-deadlines"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "MEXT Eligibility, Deadlines and Documents (2027–2028 Cycle)",
      "description": "MEXT eligibility, deadlines and documents for Bangladeshi applicants: age, grades, recommendation, health certificate and typical annual schedule.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/mext-eligibility-and-deadlines",
      "keywords": "MEXT eligibility, MEXT deadline Bangladesh, MEXT documents, MEXT age limit",
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
          "name": "Who is eligible for MEXT from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bangladeshi citizens who meet the guideline criteria for their category."
          }
        },
        {
          "@type": "Question",
          "name": "Is there an age limit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, depending on category. FY2027 undergraduate guidelines say born on or after 2 April 2002 in principle."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply to several categories?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check the guideline rules."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I check updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Embassy of Japan in Bangladesh pages and the Ministry of Education."
          }
        },
        {
          "@type": "Question",
          "name": "Is the call the same every year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Structure is similar; details change."
          }
        },
        {
          "@type": "Question",
          "name": "What if I miss the deadline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wait for the next call or consider other scholarships."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need Japanese for the exam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some categories include Japanese in exams; check the guideline."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a supervisor for research categories?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not always at application stage, but a clear research plan is required."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">MEXT Eligibility, Deadlines and Documents (2027–2028 Cycle)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Check eligibility and dates before you invest time in an application.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Bangladeshi embassy-recommendation applicants submit through the Ministry of Education in Bangladesh.</li><li>Age limits, grade requirements and categories change each year.</li><li>A typical embassy cycle has a call in early year, written exam and interview in spring or summer, and departure the following April or October.</li><li>Keep copies of every submission.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#typical-annual-schedule-embassy-recommendation" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Typical annual schedule (embassy recommendation)</a></li><li><a href="#eligibility-essentials" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Eligibility essentials</a></li><li><a href="#documents-commonly-required" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Documents commonly required</a></li><li><a href="#after-selection" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">After selection</a></li><li><a href="#preparing-early" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Preparing early</a></li><li><a href="#common-eligibility-questions" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Common eligibility questions</a></li></ol>
          </nav>

          <article>
<section id="typical-annual-schedule-embassy-recommendation" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Typical annual schedule (embassy recommendation)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Stage</th><th scope="col" className="px-3 py-2 text-left font-bold">What to know</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Announcement</td><td className="px-3 py-2 align-top">Published on the Ministry of Education and Embassy pages, often early in the year</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Submission</td><td className="px-3 py-2 align-top">To the Ministry of Education, Bangladesh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Written exam and interview</td><td className="px-3 py-2 align-top">Organised with the Embassy of Japan</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Provisional selection</td><td className="px-3 py-2 align-top">Several months later</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Visa and departure</td><td className="px-3 py-2 align-top">April or October of the following year</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">The schedule above reflects the Embassy&apos;s published pattern in recent years; it can change. Check the current announcement.</p>
</section>
<section id="eligibility-essentials" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Eligibility essentials</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Be a Bangladeshi citizen.</li><li>Meet the age limit for your category.</li><li>Meet academic requirements, often high grades.</li><li>Be in good health, with a health certificate.</li><li>Meet the language criteria in the guideline.</li></ul>
</section>
<section id="documents-commonly-required" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Documents commonly required</h2>
<p className="mt-4 leading-7 text-slate-700">Expect an application form, placement preferences, field of study and research plan, transcripts, certificates, recommendation and health certificate. See the <Link href="/study/japan/japan-student-documents-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">documents checklist</Link>.</p>
</section>
<section id="after-selection" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">After selection</h2>
<p className="mt-4 leading-7 text-slate-700">If recommended, you move through MEXT&apos;s final selection, placement and visa steps. See <Link href="/study/japan/certificate-of-eligibility-coe-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">COE guide</Link> and <Link href="/study/japan/mext-scholarship-guide-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">main MEXT guide</Link>.</p>
</section>
<section id="preparing-early" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Preparing early</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Request certified transcripts well before the deadline.</li><li>Ask referees early.</li><li>Write multiple drafts of your plan.</li><li>Create a document folder with names matching your passport.</li></ul>
</section>
<section id="common-eligibility-questions" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Common eligibility questions</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Question</th><th scope="col" className="px-3 py-2 text-left font-bold">Practical answer</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Do I need a bachelor&apos;s for research students?</td><td className="px-3 py-2 align-top">Yes, a relevant degree is normally required</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Can final-year students apply?</td><td className="px-3 py-2 align-top">Check the guideline</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Do I need Japanese?</td><td className="px-3 py-2 align-top">Depends on category and programme</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Can I apply to several universities?</td><td className="px-3 py-2 align-top">Follow the guideline&apos;s placement rules</td></tr></tbody></table></div>
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
