import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/serbia/serbia-d-visa-and-temporary-residence-application-guide';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Serbia D-Visa Application Guide for Bangladesh 2026",
  "description": "Step-by-step Serbia D-visa and student temporary residence for Bangladeshis in 2026: mission, documents, fees, arrival, police registration and permit.",
  "keywords": [
    "Serbia D visa application Bangladesh",
    "Serbia visa from Bangladesh",
    "Serbia residence permit student",
    "Serbia embassy New Delhi"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/serbia/serbia-d-visa-and-temporary-residence-application-guide"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Serbia D-Visa Application Guide for Bangladesh 2026",
    "description": "Step-by-step Serbia D-visa and student temporary residence for Bangladeshis in 2026: mission, documents, fees, arrival, police registration and permit.",
    "url": "https://eammu.com/study/serbia/serbia-d-visa-and-temporary-residence-application-guide",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Serbia D-Visa Application Guide for Bangladesh 2026",
    "description": "Step-by-step Serbia D-visa and student temporary residence for Bangladeshis in 2026: mission, documents, fees, arrival, police registration and permit."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Serbia", "href": "/study/serbia"}, {"name": "D-Visa Application Guide", "href": "/study/serbia/serbia-d-visa-and-temporary-residence-application-guide"}];
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
    "href": "/study/serbia/student-visa-requirements-bangladesh",
    "title": "Serbia Student Visa (D-Visa) and Residence Permit Requirements for Bangladeshis",
    "description": "Serbia student visa and residence permit requirements for Bangladeshi students in 2026: D-visa, admission document, funds, accommodation and insurance."
  },
  {
    "href": "/study/serbia/serbia-student-documents-checklist",
    "title": "Serbia Student Visa and Admission Documents Checklist for Bangladeshis",
    "description": "Complete documents checklist for Serbia admission and student visa in 2026 for Bangladeshi students: academic, financial, housing and insurance papers."
  },
  {
    "href": "/study/serbia/student-visa-processing-time-and-cost",
    "title": "Serbia Student Visa Processing Time and Cost for Bangladeshis",
    "description": "Serbia student visa and residence permit processing time and cost in 2026 for Bangladeshi applicants: fees, service charges and planning timelines."
  },
  {
    "href": "/study/serbia/serbia-police-registration-and-permit-renewal",
    "title": "Serbia Police Registration and Student Permit Renewal: Step-by-Step",
    "description": "Serbia police registration after arrival and student temporary residence renewal in 2026: 24-hour rule, university help, annual renewal and mistakes."
  }
];
const FAQS = [
  {
    "q": "How do I apply for a Serbia student visa from Bangladesh?",
    "a": "Obtain admission, prepare documents and submit a D-visa application through the Serbian mission channel that handles Bangladeshi applicants, then apply for temporary residence after arrival."
  },
  {
    "q": "Do I apply online?",
    "a": "Serbia does not offer a general online student visa; check the current method with the mission."
  },
  {
    "q": "Can an agent apply for me?",
    "a": "Confirm whether in-person submission is required. Agents may help prepare documents but cannot replace required attendance."
  },
  {
    "q": "What happens after I land?",
    "a": "You register your address with the police, enrol and apply for temporary residence."
  },
  {
    "q": "What if the visa is refused?",
    "a": "Read the reasons, fix issues and consider reapplying."
  },
  {
    "q": "How long is the D-visa?",
    "a": "The official portal states between 90 and 180 days."
  },
  {
    "q": "Can I travel before the visa is approved?",
    "a": "No. Wait for the visa and passport."
  },
  {
    "q": "Do I need to leave and re-enter to get a permit?",
    "a": "No, you apply in Serbia while your visa is valid."
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
          "name": "D-Visa Application Guide",
          "item": "https://eammu.com/study/serbia/serbia-d-visa-and-temporary-residence-application-guide"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Serbia D-Visa and Temporary Residence Application Guide for Bangladeshis",
      "description": "Step-by-step Serbia D-visa and student temporary residence for Bangladeshis in 2026: mission, documents, fees, arrival, police registration and permit.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/serbia/serbia-d-visa-and-temporary-residence-application-guide",
      "keywords": "Serbia D visa application Bangladesh, Serbia visa from Bangladesh, Serbia residence permit student, Serbia embassy New Delhi",
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
          "name": "How do I apply for a Serbia student visa from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Obtain admission, prepare documents and submit a D-visa application through the Serbian mission channel that handles Bangladeshi applicants, then apply for temporary residence after arrival."
          }
        },
        {
          "@type": "Question",
          "name": "Do I apply online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Serbia does not offer a general online student visa; check the current method with the mission."
          }
        },
        {
          "@type": "Question",
          "name": "Can an agent apply for me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Confirm whether in-person submission is required. Agents may help prepare documents but cannot replace required attendance."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after I land?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You register your address with the police, enrol and apply for temporary residence."
          }
        },
        {
          "@type": "Question",
          "name": "What if the visa is refused?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Read the reasons, fix issues and consider reapplying."
          }
        },
        {
          "@type": "Question",
          "name": "How long is the D-visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The official portal states between 90 and 180 days."
          }
        },
        {
          "@type": "Question",
          "name": "Can I travel before the visa is approved?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Wait for the visa and passport."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to leave and re-enter to get a permit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, you apply in Serbia while your visa is valid."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "Serbia D-Visa and Temporary Residence Application Guide for Bangladeshis",
      "description": "Step-by-step Serbia D-visa and student temporary residence for Bangladeshis in 2026: mission, documents, fees, arrival, police registration and permit.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Get admission certificate",
          "text": "Receive your offer and certificate of enrolment."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Prepare documents and funds",
          "text": "Use checklist and proof of funds guide."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Submit D-visa application",
          "text": "Apply through the mission channel for Bangladesh."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Travel and register",
          "text": "Arrive and register with the police within 24 hours."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Apply for temporary residence",
          "text": "Follow your university and police procedure."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Serbia D-Visa and Temporary Residence Application Guide for Bangladeshis</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">From admission document to residence card: the process explained step by step.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Start after you hold an admission or enrolment document and can show funds, housing and insurance.</li><li>A D-visa allows entry and a stay of 90 to 180 days according to the official portal; apply for temporary residence while the visa is valid.</li><li>Register with the police within 24 hours of arrival and then follow your university&apos;s residence procedure.</li><li>Keep copies of everything you submit.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#step-by-step" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Step-by-step</a></li><li><a href="#the-d-visa-in-brief" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">The D-visa in brief</a></li><li><a href="#after-arrival" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">After arrival</a></li><li><a href="#preparing-well" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Preparing well</a></li><li><a href="#day-of-submission-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Day-of-submission checklist</a></li><li><a href="#if-your-decision-is-delayed" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">If your decision is delayed</a></li></ol>
          </nav>

          <article>
<section id="step-by-step" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Step-by-step</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Receive your admission or enrolment certificate.</li><li>Collect documents using the <Link href="/study/serbia/serbia-student-documents-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">checklist</Link>.</li><li>Prepare proof of funds under <Link href="/study/serbia/bank-solvency-requirements-for-serbia-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link>.</li><li>Confirm with the Serbian mission or official portal where Bangladeshi applicants submit the D-visa application.</li><li>Submit the application, pay the fee and wait for the decision.</li><li>Travel to Serbia and register your address with the police.</li><li>Apply for temporary residence with your university&apos;s help and collect your permit.</li></ol>
</section>
<section id="the-d-visa-in-brief" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">The D-visa in brief</h2>
<p className="mt-4 leading-7 text-slate-700">Serbia&apos;s official portal explains that a D-visa allows a stay of between 90 and 180 days with multiple entries, and that if you plan to stay longer you apply for a temporary residence permit while the visa is still valid. A short-term visa does not give grounds for temporary residence, so make sure you apply for the correct category.</p>
</section>
<section id="after-arrival" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">After arrival</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Register at the local police station within 24 hours; accommodation providers often help.</li><li>Give your university a copy of your passport page with the residence label when granted.</li><li>Carry your passport and permit.</li><li>Diarise the renewal date.</li></ul><p className="mt-4 leading-7 text-slate-700">See <Link href="/study/serbia/serbia-police-registration-and-permit-renewal" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">police registration and renewal</Link>.</p>
</section>
<section id="preparing-well" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Preparing well</h2>
<p className="mt-4 leading-7 text-slate-700">Match your documents carefully: names, dates and amounts must be consistent. See <Link href="/study/serbia/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa requirements</Link>, <Link href="/study/serbia/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">processing time and cost</Link> and <Link href="/study/serbia/serbia-student-visa-refusal-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">refusal reasons</Link>.</p>
</section>
<section id="day-of-submission-checklist" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Day-of-submission checklist</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Passport and originals.</li><li>Printed forms and copies.</li><li>Photographs to specification.</li><li>Payment method.</li><li>Admission certificate and funds documents.</li></ul>
</section>
<section id="if-your-decision-is-delayed" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">If your decision is delayed</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Check the official tracking or contact channel.</li><li>Do not buy non-refundable flights until you have your visa.</li><li>Tell your university if you may miss orientation.</li><li>Ask about late arrival or deferral options.</li></ol>
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
