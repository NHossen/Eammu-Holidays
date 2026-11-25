import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/japan-intake-dates';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Japan Intake Dates 2026–2027 for Bangladeshi Students",
  "description": "Japan intake dates and deadlines for Bangladeshi students: April and October intakes, language school intakes, COE windows and scholarship timing.",
  "keywords": [
    "Japan intake dates",
    "Japan April intake",
    "Japan October intake",
    "Japan application deadline"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/japan-intake-dates"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Japan Intake Dates 2026–2027 for Bangladeshi Students",
    "description": "Japan intake dates and deadlines for Bangladeshi students: April and October intakes, language school intakes, COE windows and scholarship timing.",
    "url": "https://eammu.com/study/japan/japan-intake-dates",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Japan Intake Dates 2026–2027 for Bangladeshi Students",
    "description": "Japan intake dates and deadlines for Bangladeshi students: April and October intakes, language school intakes, COE windows and scholarship timing."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "Intake Dates", "href": "/study/japan/japan-intake-dates"}];
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
    "href": "/study/japan/how-to-apply-to-japanese-universities",
    "title": "How to Apply to Japanese Universities from Bangladesh: Step-by-Step Guide",
    "description": "How to apply to Japanese universities from Bangladesh in 2026: direct applications, EJU, English programmes, MEXT routes, documents, fees and offers."
  },
  {
    "href": "/study/japan/mext-eligibility-and-deadlines",
    "title": "MEXT Eligibility, Deadlines and Documents (2027–2028 Cycle)",
    "description": "MEXT eligibility, deadlines and documents for Bangladeshi applicants: age, grades, recommendation, health certificate and typical annual schedule."
  },
  {
    "href": "/study/japan/certificate-of-eligibility-coe-guide",
    "title": "Certificate of Eligibility (COE) for Japan: Step-by-Step Guide for Bangladeshi Students",
    "description": "Japan Certificate of Eligibility guide for Bangladeshi students in 2026: who applies, documents, financial proof, timing, validity and common problems."
  },
  {
    "href": "/study/japan/admission-requirements-in-japan-for-bangladeshi-students",
    "title": "Admission Requirements in Japan for Bangladeshi Students",
    "description": "Admission requirements for Japanese universities in 2026 for Bangladeshi students: HSC, bachelor's, language tests, EJU, entrance exams and documents."
  }
];
const FAQS = [
  {
    "q": "What is the main intake in Japan?",
    "a": "April."
  },
  {
    "q": "Is there an October intake?",
    "a": "Yes, mainly for graduate and some English programmes."
  },
  {
    "q": "When do language schools start?",
    "a": "Usually January, April, July and October."
  },
  {
    "q": "When is the MEXT deadline?",
    "a": "It varies by category and year; check the Embassy and Ministry of Education announcements."
  },
  {
    "q": "When should I apply for the visa?",
    "a": "After you receive your COE."
  },
  {
    "q": "Are deadlines the same for all universities?",
    "a": "No."
  },
  {
    "q": "Can I apply late?",
    "a": "Sometimes, but COE timing makes late applications risky."
  },
  {
    "q": "Can I defer admission?",
    "a": "Rules vary; ask the school."
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
          "name": "Intake Dates",
          "item": "https://eammu.com/study/japan/japan-intake-dates"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Japan Intake Dates and Application Deadlines (2026–2027)",
      "description": "Japan intake dates and deadlines for Bangladeshi students: April and October intakes, language school intakes, COE windows and scholarship timing.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/japan-intake-dates",
      "keywords": "Japan intake dates, Japan April intake, Japan October intake, Japan application deadline",
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
          "name": "What is the main intake in Japan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "April."
          }
        },
        {
          "@type": "Question",
          "name": "Is there an October intake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, mainly for graduate and some English programmes."
          }
        },
        {
          "@type": "Question",
          "name": "When do language schools start?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually January, April, July and October."
          }
        },
        {
          "@type": "Question",
          "name": "When is the MEXT deadline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It varies by category and year; check the Embassy and Ministry of Education announcements."
          }
        },
        {
          "@type": "Question",
          "name": "When should I apply for the visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After you receive your COE."
          }
        },
        {
          "@type": "Question",
          "name": "Are deadlines the same for all universities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply late?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sometimes, but COE timing makes late applications risky."
          }
        },
        {
          "@type": "Question",
          "name": "Can I defer admission?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rules vary; ask the school."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Japan Intake Dates and Application Deadlines (2026–2027)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">When to apply, and which deadlines matter most.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>April is the main intake; October suits some graduate and English programmes.</li><li>Language schools usually admit in January, April, July and October.</li><li>COE applications are submitted by the school well before arrival.</li><li>MEXT and university recommendation calls follow separate calendars.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#main-intakes" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Main intakes</a></li><li><a href="#coe-timing" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">COE timing</a></li><li><a href="#backward-planning" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Backward planning</a></li><li><a href="#missing-an-intake" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Missing an intake</a></li><li><a href="#common-mistakes" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Common mistakes</a></li><li><a href="#month-by-month-planner-for-april-2027" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Month-by-month planner for April 2027</a></li><li><a href="#why-early-applications-matter" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Why early applications matter</a></li></ol>
          </nav>

          <article>
<section id="main-intakes" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Main intakes</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Intake</th><th scope="col" className="px-3 py-2 text-left font-bold">Start</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical application window</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Spring (main)</td><td className="px-3 py-2 align-top">April</td><td className="px-3 py-2 align-top">Autumn to winter of the previous year</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Autumn</td><td className="px-3 py-2 align-top">October</td><td className="px-3 py-2 align-top">Spring to early summer</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Language schools</td><td className="px-3 py-2 align-top">Jan, Apr, Jul, Oct</td><td className="px-3 py-2 align-top">About 5–8 months before start</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">MEXT</td><td className="px-3 py-2 align-top">April or October</td><td className="px-3 py-2 align-top">Embassy or university calls; check yearly</td></tr></tbody></table></div>
</section>
<section id="coe-timing" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">COE timing</h2>
<p className="mt-4 leading-7 text-slate-700">For April entry, schools usually submit COE applications in winter, and for October entry in late spring. Because processing takes time, you should have documents ready early. See <Link href="/study/japan/certificate-of-eligibility-coe-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">COE guide</Link>.</p>
</section>
<section id="backward-planning" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Backward planning</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>9–12 months before: choose pathway and book language tests.</li><li>6–8 months before: apply, take EJU or exams.</li><li>4–6 months before: accept offer, prepare funds and COE documents.</li><li>2–3 months before: Student visa application.</li><li>1 month before: housing, insurance and travel.</li></ol><p className="mt-4 leading-7 text-slate-700">See <Link href="/study/japan/how-to-apply-to-japanese-universities" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">application guide</Link> and <Link href="/study/japan/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa processing time and cost</Link>.</p>
</section>
<section id="missing-an-intake" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Missing an intake</h2>
<p className="mt-4 leading-7 text-slate-700">If you miss April, consider October, a language school intake or a one-year delay. Use the time to improve Japanese, see <Link href="/study/japan/japanese-language-requirements-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Japanese requirements</Link>.</p>
</section>
<section id="common-mistakes" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Common mistakes</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Assuming all schools share the same dates.</li><li>Starting COE documents too late.</li><li>Missing EJU registration deadlines.</li><li>Ignoring scholarship call dates.</li></ul>
</section>
<section id="month-by-month-planner-for-april-2027" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Month-by-month planner for April 2027</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Month</th><th scope="col" className="px-3 py-2 text-left font-bold">Task</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">November 2026</td><td className="px-3 py-2 align-top">Research programmes and tests</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Dec 2026 – Jan 2027</td><td className="px-3 py-2 align-top">Applications and COE preparation</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Feb – Mar 2027</td><td className="px-3 py-2 align-top">Visa application and housing</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">April 2027</td><td className="px-3 py-2 align-top">Arrival and enrolment</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Dates are planning estimates; always follow official calls and school pages.</p>
</section>
<section id="why-early-applications-matter" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Why early applications matter</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>More programme choices and housing options.</li><li>Time for COE processing.</li><li>Time to correct document problems.</li><li>Better scholarship preparation.</li></ul>
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
