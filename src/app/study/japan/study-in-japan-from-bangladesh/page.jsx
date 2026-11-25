import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/study-in-japan-from-bangladesh';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Japan from Bangladesh 2026 Roadmap | Eammu",
  "description": "Step-by-step roadmap to study in Japan from Bangladesh in 2026: pathways, costs in BDT, scholarships, COE, Student visa in Dhaka and arrival in Japan.",
  "keywords": [
    "study in Japan from Bangladesh",
    "Japan study visa from Bangladesh",
    "Japan university admission Bangladesh",
    "study abroad Japan cost BDT"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/study-in-japan-from-bangladesh"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Japan from Bangladesh 2026 Roadmap | Eammu",
    "description": "Step-by-step roadmap to study in Japan from Bangladesh in 2026: pathways, costs in BDT, scholarships, COE, Student visa in Dhaka and arrival in Japan.",
    "url": "https://eammu.com/study/japan/study-in-japan-from-bangladesh",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Japan from Bangladesh 2026 Roadmap | Eammu",
    "description": "Step-by-step roadmap to study in Japan from Bangladesh in 2026: pathways, costs in BDT, scholarships, COE, Student visa in Dhaka and arrival in Japan."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "Study from Bangladesh", "href": "/study/japan/study-in-japan-from-bangladesh"}];
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
    "href": "/study/japan",
    "title": "Study in Japan 2026",
    "description": "Complete 2026 guide to study in Japan from Bangladesh: MEXT scholarship, tuition in BDT, language schools, COE and student visa, work rules and costs."
  },
  {
    "href": "/study/japan/admission-requirements-in-japan-for-bangladeshi-students",
    "title": "Admission Requirements in Japan for Bangladeshi Students",
    "description": "Admission requirements for Japanese universities in 2026 for Bangladeshi students: HSC, bachelor's, language tests, EJU, entrance exams and documents."
  },
  {
    "href": "/study/japan/japan-intake-dates",
    "title": "Japan Intake Dates and Application Deadlines (2026–2027)",
    "description": "Japan intake dates and deadlines for Bangladeshi students: April and October intakes, language school intakes, COE windows and scholarship timing."
  },
  {
    "href": "/study/japan/mext-scholarship-guide-for-bangladeshi-students",
    "title": "MEXT (Japanese Government) Scholarship for Bangladeshi Students: Full Guide",
    "description": "MEXT scholarship guide for Bangladeshi students: categories, benefits, Ministry of Education step, written exam, interview and common mistakes."
  },
  {
    "href": "/study/japan/student-accommodation-in-japan",
    "title": "Student Accommodation in Japan for Bangladeshi Students",
    "description": "Student accommodation in Japan for Bangladeshi students in 2026: dormitories, share houses, apartments and costs in JPY and BDT, plus scam warnings."
  }
];
const FAQS = [
  {
    "q": "How can a Bangladeshi student apply to study in Japan?",
    "a": "Apply to a Japanese university, graduate school or language school, receive admission, let the school obtain your COE, then apply for a Student visa in Dhaka."
  },
  {
    "q": "Which intake is best for Bangladeshi students?",
    "a": "April is the main intake with the widest choice; October suits some graduate and English programmes; language schools have several intakes."
  },
  {
    "q": "How much money do I need before applying?",
    "a": "Plan first-year tuition plus living costs and show well-documented funds; see the financial proof guide for details."
  },
  {
    "q": "Is IELTS compulsory for Japan?",
    "a": "Only for English-taught programmes that ask for it. Japanese-taught programmes need Japanese proficiency instead."
  },
  {
    "q": "Can I study in Japan after HSC?",
    "a": "Yes. HSC is the standard qualification; also read about language-school and foundation routes."
  },
  {
    "q": "Is Japan safe for Bangladeshi students?",
    "a": "Japan is very safe, but you must follow strict legal, work and visa rules."
  },
  {
    "q": "Can I change my school after arriving?",
    "a": "Changing schools needs approval and can affect your status of residence, so ask the school and immigration office first."
  },
  {
    "q": "Do I need Japanese for daily life?",
    "a": "English works in some universities, but Japanese is needed for part-time jobs, housing and daily tasks."
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
          "name": "Study from Bangladesh",
          "item": "https://eammu.com/study/japan/study-in-japan-from-bangladesh"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Japan from Bangladesh: 2026 Roadmap, Costs and Visa Steps",
      "description": "Step-by-step roadmap to study in Japan from Bangladesh in 2026: pathways, costs in BDT, scholarships, COE, Student visa in Dhaka and arrival in Japan.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/study-in-japan-from-bangladesh",
      "keywords": "study in Japan from Bangladesh, Japan study visa from Bangladesh, Japan university admission Bangladesh, study abroad Japan cost BDT",
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
          "name": "How can a Bangladeshi student apply to study in Japan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Apply to a Japanese university, graduate school or language school, receive admission, let the school obtain your COE, then apply for a Student visa in Dhaka."
          }
        },
        {
          "@type": "Question",
          "name": "Which intake is best for Bangladeshi students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "April is the main intake with the widest choice; October suits some graduate and English programmes; language schools have several intakes."
          }
        },
        {
          "@type": "Question",
          "name": "How much money do I need before applying?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plan first-year tuition plus living costs and show well-documented funds; see the financial proof guide for details."
          }
        },
        {
          "@type": "Question",
          "name": "Is IELTS compulsory for Japan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only for English-taught programmes that ask for it. Japanese-taught programmes need Japanese proficiency instead."
          }
        },
        {
          "@type": "Question",
          "name": "Can I study in Japan after HSC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. HSC is the standard qualification; also read about language-school and foundation routes."
          }
        },
        {
          "@type": "Question",
          "name": "Is Japan safe for Bangladeshi students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Japan is very safe, but you must follow strict legal, work and visa rules."
          }
        },
        {
          "@type": "Question",
          "name": "Can I change my school after arriving?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Changing schools needs approval and can affect your status of residence, so ask the school and immigration office first."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need Japanese for daily life?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "English works in some universities, but Japanese is needed for part-time jobs, housing and daily tasks."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "Study in Japan from Bangladesh: 2026 Roadmap, Costs and Visa Steps",
      "description": "Step-by-step roadmap to study in Japan from Bangladesh in 2026: pathways, costs in BDT, scholarships, COE, Student visa in Dhaka and arrival in Japan.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Choose pathway and school",
          "text": "Compare universities, vocational colleges and language schools."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Apply and get admitted",
          "text": "Submit applications and meet language requirements."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "School obtains your COE",
          "text": "Provide documents and financial proof for the COE application."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Apply for Student visa",
          "text": "Submit COE and documents at the Dhaka visa channel."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Arrive and register",
          "text": "Collect your residence card, register address and join insurance."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Japan from Bangladesh: 2026 Roadmap, Costs and Visa Steps</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A practical, month-by-month roadmap for Bangladeshi students, from choosing a pathway to collecting a residence card.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Start 9–12 months before the April or October intake.</li><li>The school applies for your COE; you cannot apply for a Student visa without it.</li><li>Prepare funds, documents and language proof early because ISA and Embassy screening is strict.</li><li>Budget for living costs, insurance, housing deposits and flights, not only tuition.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#is-japan-right-for-you" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Is Japan right for you?</a></li><li><a href="#12-month-timeline-for-the-april-intake" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">12-month timeline for the April intake</a></li><li><a href="#typical-first-year-budget" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Typical first-year budget</a></li><li><a href="#documents-to-start-collecting-now" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Documents to start collecting now</a></li><li><a href="#visa-and-arrival" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Visa and arrival</a></li><li><a href="#settling-in" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Settling in</a></li></ol>
          </nav>

          <article>
<section id="is-japan-right-for-you" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Is Japan right for you?</h2>
<p className="mt-4 leading-7 text-slate-700">Japan suits students who value strong education, are willing to learn Japanese, can show well-documented funds and are comfortable with a disciplined, rule-based society. It is less suited to students who expect to cover most costs by part-time work or who want a very cheap destination. Compare options in <Link href="/study/japan/japan-vs-south-korea-vs-germany-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Japan vs South Korea vs Germany</Link>.</p>
</section>
<section id="12-month-timeline-for-the-april-intake" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">12-month timeline for the April intake</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">When</th><th scope="col" className="px-3 py-2 text-left font-bold">What to do</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Apr – Jun</td><td className="px-3 py-2 align-top">Choose pathway, research schools and scholarships, start Japanese or English test preparation</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Jul – Sep</td><td className="px-3 py-2 align-top">Take JLPT, JFT-Basic, EJU or English tests; collect and prepare documents</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Oct – Nov</td><td className="px-3 py-2 align-top">Apply to universities or language schools; MEXT and university recommendation calls may open</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Dec – Jan</td><td className="px-3 py-2 align-top">School submits COE application; prepare financial proof</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Feb – Mar</td><td className="px-3 py-2 align-top">Receive COE, pay fees, apply for Student visa at the Embassy channel in Dhaka</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Late Mar – Apr</td><td className="px-3 py-2 align-top">Fly to Japan, register address, enrol and apply for permissions</td></tr></tbody></table></div>
</section>
<section id="typical-first-year-budget" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Typical first-year budget</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Budget line</th><th scope="col" className="px-3 py-2 text-left font-bold">JPY (per year)</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT approx. (per year)</th><th scope="col" className="px-3 py-2 text-left font-bold">What to check</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">University tuition (public, standard)</td><td className="px-3 py-2 align-top">JPY 540,000 – 650,000</td><td className="px-3 py-2 align-top">Tk 4,32,000 – 5,20,000</td><td className="px-3 py-2 align-top">Plus admission fee in year one</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Language school tuition and fees</td><td className="px-3 py-2 align-top">JPY 700,000 – 950,000</td><td className="px-3 py-2 align-top">Tk 5,60,000 – 7,60,000</td><td className="px-3 py-2 align-top">Depends on course length and city</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs (12 months)</td><td className="px-3 py-2 align-top">JPY 1,080,000 – 1,800,000</td><td className="px-3 py-2 align-top">Tk 8,64,000 – 14,40,000</td><td className="px-3 py-2 align-top">Tokyo at the higher end</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Insurance, visa and documents</td><td className="px-3 py-2 align-top">JPY 60,000 – 150,000</td><td className="px-3 py-2 align-top">Tk 48,000 – 1,20,000</td><td className="px-3 py-2 align-top">Health insurance and translations</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Flight from Dhaka (one way)</td><td className="px-3 py-2 align-top">JPY 60,000 – 110,000</td><td className="px-3 py-2 align-top">Tk 48,000 – 88,000</td><td className="px-3 py-2 align-top">Seasonal pricing</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 JPY = about Tk 0.80 (roughly USD 1 = JPY 150) and are indicative planning estimates for 2026–2027, based on published university pages and Japanese official guidance. Fees, funds rules and exchange rates change, so always confirm with the school, the Immigration Services Agency of Japan (moj.go.jp/isa), the Embassy of Japan in Dhaka and an Eammu Holidays counselor before paying anything.</p>
</section>
<section id="documents-to-start-collecting-now" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Documents to start collecting now</h2>
<p className="mt-4 leading-7 text-slate-700">Academic certificates and transcripts, passport, language test results, study plan, CV, bank documents, sponsor documents and a tax or income record for your sponsor are the core set. See the <Link href="/study/japan/japan-student-documents-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">documents checklist</Link>, <Link href="/study/japan/sop-and-study-plan-for-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study plan guide</Link> and <Link href="/study/japan/degree-recognition-and-eligibility-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">degree recognition</Link>.</p>
</section>
<section id="visa-and-arrival" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Visa and arrival</h2>
<p className="mt-4 leading-7 text-slate-700">After the COE arrives, you apply for the Student visa at the channel the Embassy of Japan in Bangladesh designates, currently with VFS Global in Dhaka. Follow <Link href="/study/japan/japan-student-visa-application-guide-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Dhaka visa guide</Link>. After arriving, collect your residence card at the airport, register your address at the city office, join health insurance and apply for part-time work permission if needed. See <Link href="/study/japan/japan-bank-account-phone-and-residence-card" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bank, phone and residence card</Link>.</p>
</section>
<section id="settling-in" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Settling in</h2>
<p className="mt-4 leading-7 text-slate-700">Plan <Link href="/study/japan/student-accommodation-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">housing</Link>, <Link href="/study/japan/health-insurance-for-students-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">health insurance</Link> and halal food through the <Link href="/study/japan/halal-food-and-bangladeshi-community-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">community guide</Link>. Read <Link href="/study/japan/life-in-japan-for-international-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">life in Japan</Link> for culture, rules and safety.</p>
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
