import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/japan-student-visa-application-guide-dhaka';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Japan Student Visa Application Guide Dhaka 2026",
  "description": "Step-by-step Japan student visa application in Dhaka for Bangladeshis in 2026: VFS Global, documents, interview, decision and arrival steps.",
  "keywords": [
    "Japan student visa Dhaka",
    "VFS Japan Bangladesh",
    "Embassy of Japan Dhaka visa",
    "Japan visa application Bangladesh"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/japan-student-visa-application-guide-dhaka"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Japan Student Visa Application Guide Dhaka 2026",
    "description": "Step-by-step Japan student visa application in Dhaka for Bangladeshis in 2026: VFS Global, documents, interview, decision and arrival steps.",
    "url": "https://eammu.com/study/japan/japan-student-visa-application-guide-dhaka",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Japan Student Visa Application Guide Dhaka 2026",
    "description": "Step-by-step Japan student visa application in Dhaka for Bangladeshis in 2026: VFS Global, documents, interview, decision and arrival steps."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "Dhaka Visa Application Guide", "href": "/study/japan/japan-student-visa-application-guide-dhaka"}];
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
    "href": "/study/japan/student-visa-requirements-bangladesh",
    "title": "Japan Student Visa Requirements for Bangladeshis: COE, Funds and Documents",
    "description": "Japan student visa requirements for Bangladeshi students in 2026: Certificate of Eligibility, admission, financial proof, language and Embassy documents."
  },
  {
    "href": "/study/japan/certificate-of-eligibility-coe-guide",
    "title": "Certificate of Eligibility (COE) for Japan: Step-by-Step Guide for Bangladeshi Students",
    "description": "Japan Certificate of Eligibility guide for Bangladeshi students in 2026: who applies, documents, financial proof, timing, validity and common problems."
  },
  {
    "href": "/study/japan/student-visa-processing-time-and-cost",
    "title": "Japan Student Visa Processing Time and Cost for Bangladeshis",
    "description": "Japan student visa and COE processing time and cost in 2026 for Bangladeshi applicants: fees, VFS service charges and planning timelines."
  },
  {
    "href": "/study/japan/japan-student-visa-refusal-reasons",
    "title": "Japan Student Visa and COE Refusal Reasons and How to Avoid Them",
    "description": "Common reasons Japan student visas and COEs are refused for Bangladeshi applicants in 2026, and how to prepare a stronger file or reapply."
  }
];
const FAQS = [
  {
    "q": "How do I apply for a Japan student visa in Dhaka?",
    "a": "Submit your COE-based application and documents through the VFS Global centre designated by the Embassy of Japan."
  },
  {
    "q": "Do I apply online?",
    "a": "Check the VFS and Embassy pages for any online steps; submission is usually in person."
  },
  {
    "q": "Can an agent apply for me?",
    "a": "Agents may help with documents, but you remain responsible and attendance rules apply."
  },
  {
    "q": "What happens after I land?",
    "a": "You collect your residence card, register your address and join insurance."
  },
  {
    "q": "What if the visa is refused?",
    "a": "Read the reasons, fix the issues and consider reapplying with the school's help."
  },
  {
    "q": "Can I travel before the visa is approved?",
    "a": "No."
  },
  {
    "q": "How early should I apply?",
    "a": "Right after receiving the COE, because it expires."
  },
  {
    "q": "Is there a VFS fee?",
    "a": "Yes, VFS charges a service fee in addition to any visa fee."
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
          "name": "Dhaka Visa Application Guide",
          "item": "https://eammu.com/study/japan/japan-student-visa-application-guide-dhaka"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Japan Student Visa Application Guide in Dhaka: VFS, Documents and Steps (2026)",
      "description": "Step-by-step Japan student visa application in Dhaka for Bangladeshis in 2026: VFS Global, documents, interview, decision and arrival steps.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/japan-student-visa-application-guide-dhaka",
      "keywords": "Japan student visa Dhaka, VFS Japan Bangladesh, Embassy of Japan Dhaka visa, Japan visa application Bangladesh",
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
          "name": "How do I apply for a Japan student visa in Dhaka?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Submit your COE-based application and documents through the VFS Global centre designated by the Embassy of Japan."
          }
        },
        {
          "@type": "Question",
          "name": "Do I apply online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check the VFS and Embassy pages for any online steps; submission is usually in person."
          }
        },
        {
          "@type": "Question",
          "name": "Can an agent apply for me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Agents may help with documents, but you remain responsible and attendance rules apply."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after I land?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You collect your residence card, register your address and join insurance."
          }
        },
        {
          "@type": "Question",
          "name": "What if the visa is refused?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Read the reasons, fix the issues and consider reapplying with the school's help."
          }
        },
        {
          "@type": "Question",
          "name": "Can I travel before the visa is approved?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No."
          }
        },
        {
          "@type": "Question",
          "name": "How early should I apply?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Right after receiving the COE, because it expires."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a VFS fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, VFS charges a service fee in addition to any visa fee."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "Japan Student Visa Application Guide in Dhaka: VFS, Documents and Steps (2026)",
      "description": "Step-by-step Japan student visa application in Dhaka for Bangladeshis in 2026: VFS Global, documents, interview, decision and arrival steps.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Get the COE",
          "text": "Receive the original COE from your school."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Prepare documents and funds",
          "text": "Use the checklist and financial proof guide."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Submit at VFS",
          "text": "Apply through the Embassy-designated centre."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Collect the visa",
          "text": "Receive your passport with the visa."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Travel and register",
          "text": "Arrive and complete first-month steps."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Japan Student Visa Application Guide in Dhaka: VFS, Documents and Steps (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">From COE to visa stamp: the Dhaka process explained step by step.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Apply after you hold the original COE and all supporting documents.</li><li>The Embassy site lists VFS Global at Delta Life Tower, Gulshan-2, as the visa application channel, with a service fee.</li><li>The Embassy is located in Baridhara; check whether any step requires visiting it.</li><li>Keep copies of everything you submit.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#step-by-step" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Step-by-step</a></li><li><a href="#documents-on-the-embassy-list" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Documents on the Embassy list</a></li><li><a href="#after-approval" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">After approval</a></li><li><a href="#preparing-well" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Preparing well</a></li><li><a href="#day-of-submission-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Day-of-submission checklist</a></li><li><a href="#if-your-decision-is-delayed" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">If your decision is delayed</a></li></ol>
          </nav>

          <article>
<section id="step-by-step" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Step-by-step</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Receive your COE and admission papers.</li><li>Collect documents using the <Link href="/study/japan/japan-student-documents-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">checklist</Link>.</li><li>Prepare financial proof following <Link href="/study/japan/financial-proof-requirements-for-japan-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">financial proof guide</Link>.</li><li>Check the Embassy and VFS pages for the current form, photo specifications and appointment rules.</li><li>Submit the application and pay fees.</li><li>Wait for the decision and collect your passport.</li><li>Travel to Japan and follow arrival steps.</li></ol>
</section>
<section id="documents-on-the-embassy-list" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Documents on the Embassy list</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">Notes</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Application form</td><td className="px-3 py-2 align-top">Duly filled up</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Passport and photograph</td><td className="px-3 py-2 align-top">Follow the photo specification on the form</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Certificate of Eligibility</td><td className="px-3 py-2 align-top">Original</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Admission certificate</td><td className="px-3 py-2 align-top">From the school in Japan</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Receipts for admission or tuition fees</td><td className="px-3 py-2 align-top">For language schools and other programmes</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Language certificates</td><td className="px-3 py-2 align-top">JLPT or other tests; certificate from a language school attended in Bangladesh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Financial proof</td><td className="px-3 py-2 align-top">Bank statements, sponsor documents</td></tr></tbody></table></div>
</section>
<section id="after-approval" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">After approval</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Check the visa validity and entry deadline.</li><li>Book flights only after you hold the visa.</li><li>On arrival, collect your residence card at major airports.</li><li>Register your address within 14 days.</li></ul><p className="mt-4 leading-7 text-slate-700">See <Link href="/study/japan/japan-bank-account-phone-and-residence-card" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">first-month guide</Link>.</p>
</section>
<section id="preparing-well" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Preparing well</h2>
<p className="mt-4 leading-7 text-slate-700">Match your documents carefully: names, dates and amounts must be consistent. See <Link href="/study/japan/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa requirements</Link>, <Link href="/study/japan/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">processing time and cost</Link> and <Link href="/study/japan/japan-student-visa-refusal-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">refusal reasons</Link>.</p>
</section>
<section id="day-of-submission-checklist" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Day-of-submission checklist</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Passport and originals.</li><li>Printed forms and copies.</li><li>Photographs.</li><li>Payment method for fees.</li><li>Admission, COE and funds documents.</li></ul>
</section>
<section id="if-your-decision-is-delayed" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">If your decision is delayed</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Check the VFS tracking or contact channel.</li><li>Do not buy non-refundable flights until you have your visa.</li><li>Tell your school if you may miss orientation.</li><li>Ask about late arrival or deferral options.</li></ol>
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
