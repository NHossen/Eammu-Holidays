import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/study-in-japan-in-english-without-japanese';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Japan in English Without Japanese 2026",
  "description": "Can Bangladeshi students study in Japan in English without Japanese in 2026? English-taught degrees, IELTS and TOEFL, EJU alternatives and limits.",
  "keywords": [
    "study in Japan without Japanese",
    "study in Japan in English",
    "Japan English taught university",
    "Japan IELTS requirement"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/study-in-japan-in-english-without-japanese"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Japan in English Without Japanese 2026",
    "description": "Can Bangladeshi students study in Japan in English without Japanese in 2026? English-taught degrees, IELTS and TOEFL, EJU alternatives and limits.",
    "url": "https://eammu.com/study/japan/study-in-japan-in-english-without-japanese",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Japan in English Without Japanese 2026",
    "description": "Can Bangladeshi students study in Japan in English without Japanese in 2026? English-taught degrees, IELTS and TOEFL, EJU alternatives and limits."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "English & Without Japanese", "href": "/study/japan/study-in-japan-in-english-without-japanese"}];
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
    "href": "/study/japan/english-taught-programs-in-japan",
    "title": "English-Taught Degree Programs in Japan for Bangladeshi Students",
    "description": "English-taught degree programs in Japan in 2026 for Bangladeshi students: universities, undergraduate and graduate options, requirements and scholarships."
  },
  {
    "href": "/study/japan/mext-scholarship-guide-for-bangladeshi-students",
    "title": "MEXT (Japanese Government) Scholarship for Bangladeshi Students: Full Guide",
    "description": "MEXT scholarship guide for Bangladeshi students: categories, benefits, Ministry of Education step, written exam, interview and common mistakes."
  },
  {
    "href": "/study/japan/admission-requirements-in-japan-for-bangladeshi-students",
    "title": "Admission Requirements in Japan for Bangladeshi Students",
    "description": "Admission requirements for Japanese universities in 2026 for Bangladeshi students: HSC, bachelor's, language tests, EJU, entrance exams and documents."
  },
  {
    "href": "/study/japan/japanese-language-requirements-for-bangladeshi-students",
    "title": "Japanese Language Requirements for Bangladeshi Students: JLPT, JFT-Basic and A1",
    "description": "Japanese language requirements for Bangladeshi students in 2026: JLPT N5, JFT-Basic A1, N2 for universities, test options and study tips."
  }
];
const FAQS = [
  {
    "q": "Can I study in Japan without Japanese?",
    "a": "Yes in English-taught programmes, but you will still need basic Japanese for daily life."
  },
  {
    "q": "Is IELTS required for Japan?",
    "a": "Many English programmes require IELTS or TOEFL; Japanese-taught programmes require Japanese tests such as JLPT."
  },
  {
    "q": "What IELTS score is needed?",
    "a": "Often around 6.0–6.5 for undergraduates and higher for competitive graduate programmes, but check each programme."
  },
  {
    "q": "Are English programmes cheaper?",
    "a": "Not necessarily. Fees follow the university type and faculty."
  },
  {
    "q": "Can I get MEXT for English programmes?",
    "a": "Some MEXT university-recommendation tracks support English programmes; check each call."
  },
  {
    "q": "Do English programmes lead to jobs in Japan?",
    "a": "They can, but many employers expect Japanese, so keep studying it."
  },
  {
    "q": "Is the visa different?",
    "a": "No. You still need a COE and Student visa."
  },
  {
    "q": "Which fields have more English options?",
    "a": "Engineering, science, business, international studies and some IT programmes."
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
          "name": "English & Without Japanese",
          "item": "https://eammu.com/study/japan/study-in-japan-in-english-without-japanese"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Japan in English Without Japanese (2026): Options, IELTS and Reality Check",
      "description": "Can Bangladeshi students study in Japan in English without Japanese in 2026? English-taught degrees, IELTS and TOEFL, EJU alternatives and limits.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/study-in-japan-in-english-without-japanese",
      "keywords": "study in Japan without Japanese, study in Japan in English, Japan English taught university, Japan IELTS requirement",
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
          "name": "Can I study in Japan without Japanese?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes in English-taught programmes, but you will still need basic Japanese for daily life."
          }
        },
        {
          "@type": "Question",
          "name": "Is IELTS required for Japan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many English programmes require IELTS or TOEFL; Japanese-taught programmes require Japanese tests such as JLPT."
          }
        },
        {
          "@type": "Question",
          "name": "What IELTS score is needed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often around 6.0–6.5 for undergraduates and higher for competitive graduate programmes, but check each programme."
          }
        },
        {
          "@type": "Question",
          "name": "Are English programmes cheaper?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Fees follow the university type and faculty."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get MEXT for English programmes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some MEXT university-recommendation tracks support English programmes; check each call."
          }
        },
        {
          "@type": "Question",
          "name": "Do English programmes lead to jobs in Japan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They can, but many employers expect Japanese, so keep studying it."
          }
        },
        {
          "@type": "Question",
          "name": "Is the visa different?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. You still need a COE and Student visa."
          }
        },
        {
          "@type": "Question",
          "name": "Which fields have more English options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Engineering, science, business, international studies and some IT programmes."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Japan in English Without Japanese (2026): Options, IELTS and Reality Check</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">English-taught degrees exist, but they are a minority and still need strong grades and funds.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Many Japanese universities run English-taught undergraduate and graduate programmes, usually in selected faculties.</li><li>These programmes typically ask for IELTS, TOEFL or similar English evidence, and sometimes SAT, EJU or their own exams.</li><li>Daily life and part-time jobs still need Japanese, so plan to learn it.</li><li>Do not trust agents claiming any university accepts you without English or Japanese proof.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#where-english-taught-study-is-available" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Where English-taught study is available</a></li><li><a href="#typical-english-evidence" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Typical English evidence</a></li><li><a href="#what-you-still-need-japanese-for" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What you still need Japanese for</a></li><li><a href="#scholarships-for-english-programmes" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Scholarships for English programmes</a></li><li><a href="#mistakes-to-avoid" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mistakes to avoid</a></li><li><a href="#evidence-that-strengthens-your-english-profile" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Evidence that strengthens your English profile</a></li></ol>
          </nav>

          <article>
<section id="where-english-taught-study-is-available" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Where English-taught study is available</h2>
<p className="mt-4 leading-7 text-slate-700">Japan&apos;s government and many universities have promoted programmes taught in English, including degrees at universities such as the University of Tokyo, Kyoto University, Osaka University, Tohoku University, Nagoya University, Waseda University, Keio University, Ritsumeikan Asia Pacific University and others. Offerings change, so verify on the university site and on the official Study in Japan portal. See <Link href="/study/japan/english-taught-programs-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">English-taught programmes in Japan</Link>.</p>
</section>
<section id="typical-english-evidence" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Typical English evidence</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Option</th><th scope="col" className="px-3 py-2 text-left font-bold">Used for</th><th scope="col" className="px-3 py-2 text-left font-bold">Notes</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">IELTS or TOEFL</td><td className="px-3 py-2 align-top">Most English-taught programmes</td><td className="px-3 py-2 align-top">Minimum scores vary by university and faculty</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Duolingo or PTE</td><td className="px-3 py-2 align-top">Some universities</td><td className="px-3 py-2 align-top">Check accepted tests</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">English-medium schooling</td><td className="px-3 py-2 align-top">Some programmes</td><td className="px-3 py-2 align-top">Needs certificate stating language of instruction</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">University interview or test</td><td className="px-3 py-2 align-top">Some programmes</td><td className="px-3 py-2 align-top">Prepare academic English</td></tr></tbody></table></div>
</section>
<section id="what-you-still-need-japanese-for" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What you still need Japanese for</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Daily life: shopping, housing, city office paperwork.</li><li>Part-time work: most jobs need conversational Japanese.</li><li>Job hunting after graduation in Japanese companies.</li><li>Visa: some schools ask for Japanese study evidence even for English programmes.</li></ul>
</section>
<section id="scholarships-for-english-programmes" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Scholarships for English programmes</h2>
<p className="mt-4 leading-7 text-slate-700">MEXT university recommendation and some university scholarships support English-taught programmes. See <Link href="/study/japan/mext-scholarship-guide-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MEXT guide</Link> and <Link href="/study/japan/jasso-and-university-scholarships-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">JASSO and university awards</Link>.</p>
</section>
<section id="mistakes-to-avoid" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Mistakes to avoid</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Assuming &quot;English-taught&quot; means no application exam.</li><li>Applying to Japanese-taught programmes with only English.</li><li>Ignoring tuition differences at private universities.</li><li>Paying agents for a promised seat.</li></ul>
</section>
<section id="evidence-that-strengthens-your-english-profile" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Evidence that strengthens your English profile</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Evidence</th><th scope="col" className="px-3 py-2 text-left font-bold">How it helps</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">IELTS or TOEFL</td><td className="px-3 py-2 align-top">Standard proof</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">English-medium schooling certificate</td><td className="px-3 py-2 align-top">Supports admission</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Academic paper or project in English</td><td className="px-3 py-2 align-top">Shows writing skill</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Strong HSC English grades</td><td className="px-3 py-2 align-top">Supportive but rarely sufficient alone</td></tr></tbody></table></div>
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
