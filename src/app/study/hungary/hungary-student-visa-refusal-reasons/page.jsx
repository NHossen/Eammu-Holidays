import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/hungary-student-visa-refusal-reasons';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Hungary Student Visa Refusal Reasons and Fixes 2026",
  "description": "Common reasons Hungary student visas and permits are refused for Bangladeshi applicants in 2026, and how to prepare a stronger file or reapply.",
  "keywords": [
    "Hungary visa refusal reasons",
    "Hungary student visa rejected",
    "reapply Hungary visa"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/hungary-student-visa-refusal-reasons"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Hungary Student Visa Refusal Reasons and Fixes 2026",
    "description": "Common reasons Hungary student visas and permits are refused for Bangladeshi applicants in 2026, and how to prepare a stronger file or reapply.",
    "url": "https://eammu.com/study/hungary/hungary-student-visa-refusal-reasons",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Hungary Student Visa Refusal Reasons and Fixes 2026",
    "description": "Common reasons Hungary student visas and permits are refused for Bangladeshi applicants in 2026, and how to prepare a stronger file or reapply."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Visa Refusal Reasons", "href": "/study/hungary/hungary-student-visa-refusal-reasons"}];
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
    "href": "/study/hungary/hungary-student-documents-checklist",
    "title": "Hungary Student Visa and Admission Documents Checklist for Bangladeshis",
    "description": "Complete documents checklist for Hungary admission and student visa in 2026 for Bangladeshi students: academic, financial, travel and insurance papers."
  },
  {
    "href": "/study/hungary/bank-solvency-requirements-for-hungary-student-visa",
    "title": "Proof of Funds and Bank Solvency for a Hungary Student Visa",
    "description": "Proof of funds for a Hungary student visa in 2026: how Bangladeshi students should show means of subsistence, sponsor rules and planning estimates."
  },
  {
    "href": "/study/hungary/student-visa-requirements-bangladesh",
    "title": "Hungary Student Visa and Residence Permit Requirements for Bangladeshis",
    "description": "Hungary student visa and residence permit requirements for Bangladeshi students in 2026: D-visa, admission letter, funds, accommodation and insurance."
  },
  {
    "href": "/study/hungary/public-vs-private-universities-in-hungary",
    "title": "Public vs Private Universities in Hungary: Recognition, Fees and Visa Impact",
    "description": "Public, foundation-run, church and private universities in Hungary explained for Bangladeshi students: fees, recognition and residence permit rules."
  }
];
const FAQS = [
  {
    "q": "Why was my Hungary student visa rejected?",
    "a": "Common reasons are funds, document consistency, institution recognition and unclear study purpose."
  },
  {
    "q": "Can I reapply after refusal?",
    "a": "Yes, after fixing the issues in your file."
  },
  {
    "q": "Can I appeal?",
    "a": "Appeal rights exist but have deadlines. Read the decision."
  },
  {
    "q": "Does a refusal affect future visas?",
    "a": "It can be recorded, so be honest and consistent."
  },
  {
    "q": "Should I change the university after refusal?",
    "a": "Only if the refusal related to the institution; otherwise fix the cause."
  },
  {
    "q": "Can Eammu guarantee approval?",
    "a": "No. We help you prepare a stronger, honest file."
  },
  {
    "q": "How soon can I reapply?",
    "a": "There is no universal waiting period stated here; fix issues and check the refusal letter."
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
          "name": "Hungary",
          "item": "https://eammu.com/study/hungary"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Visa Refusal Reasons",
          "item": "https://eammu.com/study/hungary/hungary-student-visa-refusal-reasons"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Hungary Student Visa Refusal Reasons and How to Avoid Them (2026)",
      "description": "Common reasons Hungary student visas and permits are refused for Bangladeshi applicants in 2026, and how to prepare a stronger file or reapply.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/hungary-student-visa-refusal-reasons",
      "keywords": "Hungary visa refusal reasons, Hungary student visa rejected, reapply Hungary visa",
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
          "name": "Why was my Hungary student visa rejected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common reasons are funds, document consistency, institution recognition and unclear study purpose."
          }
        },
        {
          "@type": "Question",
          "name": "Can I reapply after refusal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, after fixing the issues in your file."
          }
        },
        {
          "@type": "Question",
          "name": "Can I appeal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Appeal rights exist but have deadlines. Read the decision."
          }
        },
        {
          "@type": "Question",
          "name": "Does a refusal affect future visas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be recorded, so be honest and consistent."
          }
        },
        {
          "@type": "Question",
          "name": "Should I change the university after refusal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only if the refusal related to the institution; otherwise fix the cause."
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
            "text": "There is no universal waiting period stated here; fix issues and check the refusal letter."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Hungary 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Hungary Student Visa Refusal Reasons and How to Avoid Them (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Most refusals come from weak or inconsistent files, not bad luck.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Incomplete or inconsistent documents are a leading cause of problems.</li><li>Doubts about funds, purpose of study or institution recognition can lead to refusal.</li><li>Read the refusal letter carefully before reapplying.</li><li>Never use forged documents.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#common-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Common reasons</a></li><li><a href="#how-to-strengthen-your-file" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to strengthen your file</a></li><li><a href="#if-you-are-refused" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">If you are refused</a></li><li><a href="#avoid-risky-advice" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Avoid risky advice</a></li><li><a href="#fix-list-by-problem-type" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Fix list by problem type</a></li><li><a href="#interview-preparation" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Interview preparation</a></li><li><a href="#mistakes-agents-make-that-hurt-your-file" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mistakes agents make that hurt your file</a></li></ol>
          </nav>

          <article>
<section id="common-reasons" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Common reasons</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Missing or unclear proof of subsistence.</li><li>Questionable admission letter or unrecognised institution, see <Link href="/study/hungary/public-vs-private-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">public vs private universities</Link>.</li><li>Inconsistent dates, names or financial records.</li><li>Unexplained study gap, see <Link href="/study/hungary/study-gap-accepted-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study gap guide</Link>.</li><li>Weak academic plan or poor English.</li><li>Missing accommodation or insurance proof.</li><li>Forged or altered documents.</li></ul>
</section>
<section id="how-to-strengthen-your-file" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to strengthen your file</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Use the <Link href="/study/hungary/hungary-student-documents-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">documents checklist</Link>.</li><li>Match every number and date across papers.</li><li>Show funds clearly, see <Link href="/study/hungary/bank-solvency-requirements-for-hungary-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link>.</li><li>Prepare a short, consistent study plan.</li><li>Verify the institution and programme.</li></ol>
</section>
<section id="if-you-are-refused" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">If you are refused</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Read the reasons in the decision.</li><li>Correct the weakness before reapplying.</li><li>Check appeal rules and deadlines.</li><li>Do not reapply with the same incomplete file.</li></ul>
</section>
<section id="avoid-risky-advice" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Avoid risky advice</h2>
<p className="mt-4 leading-7 text-slate-700">No consultant can guarantee approval. If someone promises it, walk away. See <Link href="/study/hungary/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa requirements</Link> and <Link href="/study/hungary/hungary-student-visa-application-guide-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the application guide</Link>.</p>
</section>
<section id="fix-list-by-problem-type" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Fix list by problem type</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Problem</th><th scope="col" className="px-3 py-2 text-left font-bold">Fix</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Weak funds</td><td className="px-3 py-2 align-top">Provide clearer, traceable funds and sponsor documents</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Unclear study plan</td><td className="px-3 py-2 align-top">Prepare a concise explanation of why this course and Hungary</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Unrecognised institution</td><td className="px-3 py-2 align-top">Choose a recognised institution</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Document mismatch</td><td className="px-3 py-2 align-top">Correct and re-verify every document</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Gap</td><td className="px-3 py-2 align-top">Add evidence and an honest explanation</td></tr></tbody></table></div>
</section>
<section id="interview-preparation" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Interview preparation</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Know your course, university and city.</li><li>Know your budget and who pays.</li><li>Be ready to explain your plan after graduation.</li><li>Answer honestly and calmly.</li></ul>
</section>
<section id="mistakes-agents-make-that-hurt-your-file" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Mistakes agents make that hurt your file</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Submitting templated letters that sound identical to other applicants&apos;.</li><li>Arranging last-minute bank deposits.</li><li>Using unrecognised institutions with low fees.</li><li>Giving unrealistic promises about work and family.</li></ul><p className="mt-4 leading-7 text-slate-700">You are legally responsible for everything you sign, so review every document yourself.</p>
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
