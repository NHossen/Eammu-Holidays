import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/health-insurance-for-students-in-hungary';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Health Insurance for Students in Hungary 2026 | Eammu",
  "description": "Health insurance for international students in Hungary in 2026: visa insurance, healthcare contribution, scholarship cover and tips for Bangladeshis.",
  "keywords": [
    "health insurance Hungary students",
    "Hungary student insurance visa",
    "healthcare Hungary international students"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/health-insurance-for-students-in-hungary"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Health Insurance for Students in Hungary 2026 | Eammu",
    "description": "Health insurance for international students in Hungary in 2026: visa insurance, healthcare contribution, scholarship cover and tips for Bangladeshis.",
    "url": "https://eammu.com/study/hungary/health-insurance-for-students-in-hungary",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Health Insurance for Students in Hungary 2026 | Eammu",
    "description": "Health insurance for international students in Hungary in 2026: visa insurance, healthcare contribution, scholarship cover and tips for Bangladeshis."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Health Insurance for Students", "href": "/study/hungary/health-insurance-for-students-in-hungary"}];
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
    "href": "/study/hungary/cost-of-living-in-hungary-for-bangladeshi-students",
    "title": "Cost of Living in Hungary for Bangladeshi Students: Monthly Budget",
    "description": "Monthly cost of living in Hungary for Bangladeshi students in 2026: rent, food, transport and phone in Budapest, Debrecen, Szeged and Pécs in EUR and BDT."
  },
  {
    "href": "/study/hungary/hungary-student-visa-application-guide-bangladesh",
    "title": "Hungary D-Visa and Residence Permit Application Guide for Bangladeshis",
    "description": "Step-by-step Hungary D-visa and study residence permit application for Bangladeshis in 2026: appointment, documents, biometrics, decision and arrival."
  },
  {
    "href": "/study/hungary/student-visa-processing-time-and-cost",
    "title": "Hungary Student Visa Processing Time and Cost for Bangladeshis",
    "description": "Hungary student visa and residence permit processing time and cost in 2026 for Bangladeshi applicants: fees, service charges and planning timelines."
  }
];
const FAQS = [
  {
    "q": "Is health insurance mandatory in Hungary?",
    "a": "You must show that you can cover healthcare for the visa and permit."
  },
  {
    "q": "Does Stipendium Hungaricum cover insurance?",
    "a": "Typically yes under the programme's terms."
  },
  {
    "q": "How much is health insurance?",
    "a": "It varies; confirm current contribution and private policy costs."
  },
  {
    "q": "Can I use travel insurance for the whole stay?",
    "a": "Usually only for the arrival period. Arrange proper cover afterwards."
  },
  {
    "q": "What about dental care?",
    "a": "Often not fully covered; check the policy."
  },
  {
    "q": "Where do I get help in an emergency?",
    "a": "Call 112 in Hungary."
  },
  {
    "q": "Is vaccination required?",
    "a": "Requirements can change. Check official health guidance before travelling."
  },
  {
    "q": "Do I need to bring medicines?",
    "a": "Bring prescriptions and consult a doctor about continuing treatment abroad."
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
          "name": "Health Insurance for Students",
          "item": "https://eammu.com/study/hungary/health-insurance-for-students-in-hungary"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Health Insurance for International Students in Hungary (2026)",
      "description": "Health insurance for international students in Hungary in 2026: visa insurance, healthcare contribution, scholarship cover and tips for Bangladeshis.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/health-insurance-for-students-in-hungary",
      "keywords": "health insurance Hungary students, Hungary student insurance visa, healthcare Hungary international students",
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
          "name": "Is health insurance mandatory in Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You must show that you can cover healthcare for the visa and permit."
          }
        },
        {
          "@type": "Question",
          "name": "Does Stipendium Hungaricum cover insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically yes under the programme's terms."
          }
        },
        {
          "@type": "Question",
          "name": "How much is health insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It varies; confirm current contribution and private policy costs."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use travel insurance for the whole stay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually only for the arrival period. Arrange proper cover afterwards."
          }
        },
        {
          "@type": "Question",
          "name": "What about dental care?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often not fully covered; check the policy."
          }
        },
        {
          "@type": "Question",
          "name": "Where do I get help in an emergency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call 112 in Hungary."
          }
        },
        {
          "@type": "Question",
          "name": "Is vaccination required?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Requirements can change. Check official health guidance before travelling."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to bring medicines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bring prescriptions and consult a doctor about continuing treatment abroad."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Health Insurance for International Students in Hungary (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">You need valid health cover both for the visa and while living in Hungary.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Visa and permit applications ask for proof of health insurance or means to cover healthcare.</li><li>Scholarship holders typically have coverage under programme rules.</li><li>Self-financed students usually register for a monthly health service contribution after arrival or hold private insurance.</li><li>Keep policy documents for your permit.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#before-travel" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Before travel</a></li><li><a href="#after-arrival" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">After arrival</a></li><li><a href="#what-to-check-in-a-policy" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What to check in a policy</a></li><li><a href="#budgeting" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Budgeting</a></li><li><a href="#using-healthcare-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Using healthcare in Hungary</a></li><li><a href="#mental-health-and-wellbeing" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mental health and wellbeing</a></li><li><a href="#documents-to-keep-for-insurance" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Documents to keep for insurance</a></li></ol>
          </nav>

          <article>
<section id="before-travel" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Before travel</h2>
<p className="mt-4 leading-7 text-slate-700">Authorities may ask for proof that you can cover healthcare costs. Travel or health insurance covering your arrival period is commonly needed. Compare options and keep the certificate with your <Link href="/study/hungary/hungary-student-documents-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">documents</Link>.</p>
</section>
<section id="after-arrival" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">After arrival</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Scholarship holders: follow the programme&apos;s insurance instructions.</li><li>Self-financed students: ask the university about registering with Hungarian health insurance and paying the monthly contribution.</li><li>Carry your insurance card and permit.</li></ul>
</section>
<section id="what-to-check-in-a-policy" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What to check in a policy</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Coverage amount and duration.</li><li>Emergency, hospital and repatriation cover.</li><li>Pre-existing conditions.</li><li>Claims process in English.</li></ul>
</section>
<section id="budgeting" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Budgeting</h2>
<p className="mt-4 leading-7 text-slate-700">Add insurance to your <Link href="/study/hungary/cost-of-living-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">monthly budget</Link> and <Link href="/study/hungary/bank-solvency-requirements-for-hungary-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">funds plan</Link>.</p>
</section>
<section id="using-healthcare-in-hungary" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Using healthcare in Hungary</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Register with a general practitioner or university clinic when advised.</li><li>Carry your insurance document.</li><li>Emergency number is 112.</li><li>Keep receipts for any private care.</li></ul>
</section>
<section id="mental-health-and-wellbeing" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Mental health and wellbeing</h2>
<p className="mt-4 leading-7 text-slate-700">Moving abroad can be stressful. Universities often provide counseling and international student offices. Reach out early if you feel isolated or overwhelmed.</p>
</section>
<section id="documents-to-keep-for-insurance" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Documents to keep for insurance</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Policy certificate with dates and coverage.</li><li>Proof of payment.</li><li>Emergency contact numbers.</li><li>Claim forms and instructions in English.</li></ul>
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
