import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/japan-student-visa-refusal-reasons';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Japan Student Visa Refusal Reasons and Fixes 2026",
  "description": "Common reasons Japan student visas and COEs are refused for Bangladeshi applicants in 2026, and how to prepare a stronger file or reapply.",
  "keywords": [
    "Japan visa refusal reasons",
    "Japan student visa rejected",
    "COE rejected Japan",
    "reapply Japan visa"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/japan-student-visa-refusal-reasons"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Japan Student Visa Refusal Reasons and Fixes 2026",
    "description": "Common reasons Japan student visas and COEs are refused for Bangladeshi applicants in 2026, and how to prepare a stronger file or reapply.",
    "url": "https://eammu.com/study/japan/japan-student-visa-refusal-reasons",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Japan Student Visa Refusal Reasons and Fixes 2026",
    "description": "Common reasons Japan student visas and COEs are refused for Bangladeshi applicants in 2026, and how to prepare a stronger file or reapply."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "Visa Refusal Reasons", "href": "/study/japan/japan-student-visa-refusal-reasons"}];
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
    "href": "/study/japan/japan-student-documents-checklist",
    "title": "Japan Student Admission, COE and Visa Documents Checklist for Bangladeshis",
    "description": "Complete documents checklist for Japan admission, COE and student visa in 2026 for Bangladeshi students: academic, financial, language and travel papers."
  },
  {
    "href": "/study/japan/financial-proof-requirements-for-japan-student-visa",
    "title": "Financial Proof and Sponsor Rules for a Japan Student Visa",
    "description": "Financial proof for a Japan student visa in 2026: how Bangladeshi students should show funds, sponsor documents, planning estimates and common mistakes."
  },
  {
    "href": "/study/japan/student-visa-requirements-bangladesh",
    "title": "Japan Student Visa Requirements for Bangladeshis: COE, Funds and Documents",
    "description": "Japan student visa requirements for Bangladeshi students in 2026: Certificate of Eligibility, admission, financial proof, language and Embassy documents."
  },
  {
    "href": "/study/japan/japanese-language-schools-in-japan",
    "title": "Japanese Language Schools in Japan for Bangladeshi Students",
    "description": "Japanese language schools in Japan for Bangladeshi students in 2026: costs, A1 requirement, COE, student visa screening and how to avoid risky agents."
  }
];
const FAQS = [
  {
    "q": "Why was my Japan student visa rejected?",
    "a": "Common reasons are funds, document consistency, unclear plans and school issues."
  },
  {
    "q": "Can I reapply after refusal?",
    "a": "Yes, after fixing the issues."
  },
  {
    "q": "Will a refusal affect future applications?",
    "a": "It can; be honest and consistent."
  },
  {
    "q": "Should I change the school after refusal?",
    "a": "Only if the refusal related to the school."
  },
  {
    "q": "Can Eammu guarantee approval?",
    "a": "No. We help you prepare a stronger, honest file."
  },
  {
    "q": "How soon can I reapply?",
    "a": "Check the school and immigration guidance."
  },
  {
    "q": "Is a refused COE the same as a refused visa?",
    "a": "No, they are separate steps with separate decisions."
  },
  {
    "q": "Will changing agents help?",
    "a": "Only if your documents and plan improve."
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
          "name": "Visa Refusal Reasons",
          "item": "https://eammu.com/study/japan/japan-student-visa-refusal-reasons"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Japan Student Visa and COE Refusal Reasons and How to Avoid Them (2026)",
      "description": "Common reasons Japan student visas and COEs are refused for Bangladeshi applicants in 2026, and how to prepare a stronger file or reapply.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/japan-student-visa-refusal-reasons",
      "keywords": "Japan visa refusal reasons, Japan student visa rejected, COE rejected Japan, reapply Japan visa",
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
          "name": "Why was my Japan student visa rejected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common reasons are funds, document consistency, unclear plans and school issues."
          }
        },
        {
          "@type": "Question",
          "name": "Can I reapply after refusal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, after fixing the issues."
          }
        },
        {
          "@type": "Question",
          "name": "Will a refusal affect future applications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can; be honest and consistent."
          }
        },
        {
          "@type": "Question",
          "name": "Should I change the school after refusal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only if the refusal related to the school."
          }
        },
        {
          "@type": "Question",
          "name": "Can Eammu guarantee approval?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We help you prepare a stronger, honest file."
          }
        },
        {
          "@type": "Question",
          "name": "How soon can I reapply?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check the school and immigration guidance."
          }
        },
        {
          "@type": "Question",
          "name": "Is a refused COE the same as a refused visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, they are separate steps with separate decisions."
          }
        },
        {
          "@type": "Question",
          "name": "Will changing agents help?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only if your documents and plan improve."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Japan Student Visa and COE Refusal Reasons and How to Avoid Them (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Most refusals come from weak or inconsistent files, not bad luck.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Weak financial proof, inconsistent documents and unclear study plans are common causes.</li><li>Language preparation and recognised schools matter.</li><li>Read the refusal information carefully before reapplying.</li><li>Never use forged documents.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#common-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Common reasons</a></li><li><a href="#how-to-strengthen-your-file" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to strengthen your file</a></li><li><a href="#fix-list-by-problem-type" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Fix list by problem type</a></li><li><a href="#if-you-are-refused" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">If you are refused</a></li><li><a href="#avoid-risky-advice" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Avoid risky advice</a></li><li><a href="#interview-and-file-preparation" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Interview and file preparation</a></li><li><a href="#mistakes-agents-make-that-hurt-your-file" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mistakes agents make that hurt your file</a></li></ol>
          </nav>

          <article>
<section id="common-reasons" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Common reasons</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Financial documents that do not convincingly support tuition and living costs.</li><li>Forged, altered or inconsistent documents.</li><li>Unclear or inconsistent study plan.</li><li>Insufficient Japanese language preparation, see <Link href="/study/japan/japanese-language-requirements-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Japanese requirements</Link>.</li><li>Unexplained study gap, see <Link href="/study/japan/study-gap-and-japan-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study gap guide</Link>.</li><li>Problems with the school, such as poor attendance records or weak compliance.</li><li>Previous immigration violations.</li></ul>
</section>
<section id="how-to-strengthen-your-file" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to strengthen your file</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Use the <Link href="/study/japan/japan-student-documents-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">documents checklist</Link>.</li><li>Match every date and number across papers.</li><li>Show funds clearly, see <Link href="/study/japan/financial-proof-requirements-for-japan-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">financial proof</Link>.</li><li>Prepare a short, consistent study plan.</li><li>Verify the school and its support for international students.</li></ol>
</section>
<section id="fix-list-by-problem-type" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Fix list by problem type</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Problem</th><th scope="col" className="px-3 py-2 text-left font-bold">Fix</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Weak funds</td><td className="px-3 py-2 align-top">Provide clearer, traceable funds and sponsor documents</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Unclear study plan</td><td className="px-3 py-2 align-top">Explain why this course, school and Japan</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Language weakness</td><td className="px-3 py-2 align-top">Study consistently and show test results</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Document mismatch</td><td className="px-3 py-2 align-top">Correct and re-verify every document</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Gap</td><td className="px-3 py-2 align-top">Add evidence and an honest explanation</td></tr></tbody></table></div>
</section>
<section id="if-you-are-refused" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">If you are refused</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Ask the school what the immigration bureau said about the COE.</li><li>Correct the weakness before reapplying.</li><li>Do not reapply with the same file.</li><li>Consider the next intake.</li></ul>
</section>
<section id="avoid-risky-advice" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Avoid risky advice</h2>
<p className="mt-4 leading-7 text-slate-700">No consultant can guarantee approval. If someone promises it or offers to produce bank statements, walk away. See <Link href="/study/japan/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa requirements</Link>.</p>
</section>
<section id="interview-and-file-preparation" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Interview and file preparation</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Know your course, school and city.</li><li>Know your budget and who pays.</li><li>Be ready to explain your plan after graduation.</li><li>Answer honestly and calmly.</li></ul>
</section>
<section id="mistakes-agents-make-that-hurt-your-file" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Mistakes agents make that hurt your file</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Submitting templated letters that sound identical to others&apos;.</li><li>Arranging last-minute bank deposits.</li><li>Using schools with poor reputations.</li><li>Giving unrealistic promises about work and permanent residence.</li></ul>
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
