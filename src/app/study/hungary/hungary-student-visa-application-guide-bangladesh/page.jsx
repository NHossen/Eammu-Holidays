import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/hungary-student-visa-application-guide-bangladesh';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Hungary D-Visa Application Guide for Bangladesh 2026",
  "description": "Step-by-step Hungary D-visa and study residence permit application for Bangladeshis in 2026: appointment, documents, biometrics, decision and arrival.",
  "keywords": [
    "Hungary D visa application Bangladesh",
    "BLS Hungary Dhaka",
    "Hungary residence permit application",
    "Hungary visa appointment Bangladesh"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/hungary-student-visa-application-guide-bangladesh"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Hungary D-Visa Application Guide for Bangladesh 2026",
    "description": "Step-by-step Hungary D-visa and study residence permit application for Bangladeshis in 2026: appointment, documents, biometrics, decision and arrival.",
    "url": "https://eammu.com/study/hungary/hungary-student-visa-application-guide-bangladesh",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Hungary D-Visa Application Guide for Bangladesh 2026",
    "description": "Step-by-step Hungary D-visa and study residence permit application for Bangladeshis in 2026: appointment, documents, biometrics, decision and arrival."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Visa Application Guide (D-Visa)", "href": "/study/hungary/hungary-student-visa-application-guide-bangladesh"}];
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
    "href": "/study/hungary/student-visa-requirements-bangladesh",
    "title": "Hungary Student Visa and Residence Permit Requirements for Bangladeshis",
    "description": "Hungary student visa and residence permit requirements for Bangladeshi students in 2026: D-visa, admission letter, funds, accommodation and insurance."
  },
  {
    "href": "/study/hungary/hungary-student-documents-checklist",
    "title": "Hungary Student Visa and Admission Documents Checklist for Bangladeshis",
    "description": "Complete documents checklist for Hungary admission and student visa in 2026 for Bangladeshi students: academic, financial, travel and insurance papers."
  },
  {
    "href": "/study/hungary/student-visa-processing-time-and-cost",
    "title": "Hungary Student Visa Processing Time and Cost for Bangladeshis",
    "description": "Hungary student visa and residence permit processing time and cost in 2026 for Bangladeshi applicants: fees, service charges and planning timelines."
  },
  {
    "href": "/study/hungary/hungary-student-visa-refusal-reasons",
    "title": "Hungary Student Visa Refusal Reasons and How to Avoid Them",
    "description": "Common reasons Hungary student visas and permits are refused for Bangladeshi applicants in 2026, and how to prepare a stronger file or reapply."
  }
];
const FAQS = [
  {
    "q": "How do I apply for a Hungary student visa from Bangladesh?",
    "a": "Book an appointment through the official channel, submit your D-visa and residence permit documents with biometrics, and wait for the decision."
  },
  {
    "q": "Do I apply online?",
    "a": "You may fill forms online, but submission is normally in person."
  },
  {
    "q": "Can an agent apply for me?",
    "a": "You must attend biometrics yourself. Agents can only help prepare documents."
  },
  {
    "q": "What happens after I land in Hungary?",
    "a": "You complete permit formalities, enrol and register your address."
  },
  {
    "q": "What if the visa is refused?",
    "a": "Read the reasons, fix the issues and consider reapplying or appealing as allowed."
  },
  {
    "q": "Is there an appeal?",
    "a": "Appeal options exist but are time-limited, so read the decision letter carefully."
  },
  {
    "q": "Can I travel before the visa is approved?",
    "a": "No. Wait for the visa and your passport."
  },
  {
    "q": "How long should I wait for an appointment?",
    "a": "It varies; book as soon as your documents are ready."
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
          "name": "Visa Application Guide (D-Visa)",
          "item": "https://eammu.com/study/hungary/hungary-student-visa-application-guide-bangladesh"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Hungary D-Visa and Residence Permit Application Guide for Bangladeshis",
      "description": "Step-by-step Hungary D-visa and study residence permit application for Bangladeshis in 2026: appointment, documents, biometrics, decision and arrival.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/hungary-student-visa-application-guide-bangladesh",
      "keywords": "Hungary D visa application Bangladesh, BLS Hungary Dhaka, Hungary residence permit application, Hungary visa appointment Bangladesh",
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
          "name": "How do I apply for a Hungary student visa from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Book an appointment through the official channel, submit your D-visa and residence permit documents with biometrics, and wait for the decision."
          }
        },
        {
          "@type": "Question",
          "name": "Do I apply online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You may fill forms online, but submission is normally in person."
          }
        },
        {
          "@type": "Question",
          "name": "Can an agent apply for me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You must attend biometrics yourself. Agents can only help prepare documents."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after I land in Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You complete permit formalities, enrol and register your address."
          }
        },
        {
          "@type": "Question",
          "name": "What if the visa is refused?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Read the reasons, fix the issues and consider reapplying or appealing as allowed."
          }
        },
        {
          "@type": "Question",
          "name": "Is there an appeal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Appeal options exist but are time-limited, so read the decision letter carefully."
          }
        },
        {
          "@type": "Question",
          "name": "Can I travel before the visa is approved?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Wait for the visa and your passport."
          }
        },
        {
          "@type": "Question",
          "name": "How long should I wait for an appointment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It varies; book as soon as your documents are ready."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "Hungary D-Visa and Residence Permit Application Guide for Bangladeshis",
      "description": "Step-by-step Hungary D-visa and study residence permit application for Bangladeshis in 2026: appointment, documents, biometrics, decision and arrival.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Get admission letter",
          "text": "Receive your offer from a recognised institution."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Prepare documents and funds",
          "text": "Use the checklist and proof of funds guide."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Book appointment",
          "text": "Use the official channel for Bangladesh."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Submit and give biometrics",
          "text": "Attend in person and pay fees."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Collect decision and travel",
          "text": "Receive passport, travel and complete permit steps."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Hungary D-Visa and Residence Permit Application Guide for Bangladeshis</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">From admission letter to permit card: the process explained step by step.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Start once you hold an admission letter and can show funds, accommodation and insurance.</li><li>Long-stay applications for Bangladesh go through the Hungary visa application centre channel in Dhaka; verify the current appointment system.</li><li>A successful D-visa is usually followed by collection or issue of the residence permit card in Hungary.</li><li>Keep copies of everything you submit.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#step-by-step" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Step-by-step</a></li><li><a href="#appointment-and-submission" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Appointment and submission</a></li><li><a href="#after-approval" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">After approval</a></li><li><a href="#preparing-well" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Preparing well</a></li><li><a href="#day-of-appointment-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Day-of-appointment checklist</a></li><li><a href="#after-the-decision" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">After the decision</a></li><li><a href="#what-to-do-if-your-appointment-or-decision-is-delayed" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What to do if your appointment or decision is delayed</a></li></ol>
          </nav>

          <article>
<section id="step-by-step" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Step-by-step</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Receive your admission or enrolment letter.</li><li>Collect documents using the <Link href="/study/hungary/hungary-student-documents-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">checklist</Link>.</li><li>Prepare proof of funds under <Link href="/study/hungary/bank-solvency-requirements-for-hungary-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link>.</li><li>Book an appointment through the official channel for Bangladesh.</li><li>Submit the application and biometrics, and pay the fees.</li><li>Track the decision and collect your passport.</li><li>Travel to Hungary and complete permit and address formalities with your university.</li></ol>
</section>
<section id="appointment-and-submission" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Appointment and submission</h2>
<p className="mt-4 leading-7 text-slate-700">Hungary publishes consular rules on its official consular sites and appointment systems, and the visa application centre operated by BLS International in Dhaka handles long-term applications according to its published information. Appointment slots can fill, so book early. Verify current instructions on the official sites listed at the bottom of this page.</p>
</section>
<section id="after-approval" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">After approval</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Check the visa validity and the date by which you must enter.</li><li>After arrival, follow your university&apos;s guidance on the permit application or card.</li><li>Carry your permit and do not leave Hungary without it where re-entry rules require it.</li><li>Register your address as required.</li></ul>
</section>
<section id="preparing-well" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Preparing well</h2>
<p className="mt-4 leading-7 text-slate-700">Match your documents carefully: names, dates and amounts must be consistent. See <Link href="/study/hungary/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa requirements</Link>, <Link href="/study/hungary/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">processing time and cost</Link> and <Link href="/study/hungary/hungary-student-visa-refusal-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">refusal reasons</Link>.</p>
</section>
<section id="day-of-appointment-checklist" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Day-of-appointment checklist</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Passport and all required originals.</li><li>Printed forms and copies.</li><li>Photos to specification.</li><li>Payment method accepted by the centre.</li><li>Appointment confirmation.</li><li>Admission letter and funds documents.</li></ul>
</section>
<section id="after-the-decision" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">After the decision</h2>
<p className="mt-4 leading-7 text-slate-700">If approved, check your visa dates, plan travel and keep copies. If additional documents are requested, respond promptly. If refused, read <Link href="/study/hungary/hungary-student-visa-refusal-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">refusal reasons</Link> before taking next steps.</p>
</section>
<section id="what-to-do-if-your-appointment-or-decision-is-delayed" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What to do if your appointment or decision is delayed</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Check the official tracking or contact channel.</li><li>Do not buy non-refundable flights until you have your visa.</li><li>Tell your university if you may miss orientation.</li><li>Ask about late arrival or deferral options.</li></ol>
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
