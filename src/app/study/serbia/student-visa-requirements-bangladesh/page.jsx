import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/serbia/student-visa-requirements-bangladesh';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Serbia Student Visa Requirements for Bangladesh 2026",
  "description": "Serbia student visa and residence permit requirements for Bangladeshi students in 2026: D-visa, admission document, funds, accommodation and insurance.",
  "keywords": [
    "Serbia student visa Bangladesh",
    "Serbia D visa requirements",
    "Serbia temporary residence study",
    "Serbia visa requirements for Bangladeshi students"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/serbia/student-visa-requirements-bangladesh"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Serbia Student Visa Requirements for Bangladesh 2026",
    "description": "Serbia student visa and residence permit requirements for Bangladeshi students in 2026: D-visa, admission document, funds, accommodation and insurance.",
    "url": "https://eammu.com/study/serbia/student-visa-requirements-bangladesh",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Serbia Student Visa Requirements for Bangladesh 2026",
    "description": "Serbia student visa and residence permit requirements for Bangladeshi students in 2026: D-visa, admission document, funds, accommodation and insurance."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Serbia", "href": "/study/serbia"}, {"name": "Student Visa & Permit Requirements", "href": "/study/serbia/student-visa-requirements-bangladesh"}];
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
    "href": "/study/serbia/serbia-d-visa-and-temporary-residence-application-guide",
    "title": "Serbia D-Visa and Temporary Residence Application Guide for Bangladeshis",
    "description": "Step-by-step Serbia D-visa and student temporary residence for Bangladeshis in 2026: mission, documents, fees, arrival, police registration and permit."
  },
  {
    "href": "/study/serbia/serbia-student-documents-checklist",
    "title": "Serbia Student Visa and Admission Documents Checklist for Bangladeshis",
    "description": "Complete documents checklist for Serbia admission and student visa in 2026 for Bangladeshi students: academic, financial, housing and insurance papers."
  },
  {
    "href": "/study/serbia/bank-solvency-requirements-for-serbia-student-visa",
    "title": "Proof of Funds and Bank Solvency for a Serbia Student Visa",
    "description": "Proof of funds for a Serbia student visa in 2026: how Bangladeshi students should show means of support, sponsor rules and planning estimates."
  },
  {
    "href": "/study/serbia/serbia-police-registration-and-permit-renewal",
    "title": "Serbia Police Registration and Student Permit Renewal: Step-by-Step",
    "description": "Serbia police registration after arrival and student temporary residence renewal in 2026: 24-hour rule, university help, annual renewal and mistakes."
  }
];
const FAQS = [
  {
    "q": "Do Bangladeshis need a visa for Serbia?",
    "a": "Yes. Bangladeshi passport holders need a visa, and degree students need a D-visa followed by temporary residence."
  },
  {
    "q": "Who issues the Serbia student residence permit?",
    "a": "The Ministry of Interior, through the police administration in Serbia, after you arrive on a D-visa."
  },
  {
    "q": "Can I enter Serbia on a tourist visa and then study?",
    "a": "A short-term visa is not grounds for temporary residence. Follow the D-visa route."
  },
  {
    "q": "How long is a student permit valid?",
    "a": "Usually up to a year at a time, renewed while you study."
  },
  {
    "q": "Do I need an admission letter?",
    "a": "Yes, a certificate of admission or enrolment at an accredited institution."
  },
  {
    "q": "Is there a Serbian embassy in Dhaka?",
    "a": "Serbia lists its embassy in New Delhi as covering Bangladesh non-residentially; confirm the current process."
  },
  {
    "q": "Can scholarship students apply differently?",
    "a": "World in Serbia candidates follow instructions in the call."
  },
  {
    "q": "Do I need to register after arrival?",
    "a": "Yes, with the police within 24 hours, as university guidance notes."
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
          "name": "Student Visa & Permit Requirements",
          "item": "https://eammu.com/study/serbia/student-visa-requirements-bangladesh"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Serbia Student Visa (D-Visa) and Residence Permit Requirements for Bangladeshis (2026)",
      "description": "Serbia student visa and residence permit requirements for Bangladeshi students in 2026: D-visa, admission document, funds, accommodation and insurance.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/serbia/student-visa-requirements-bangladesh",
      "keywords": "Serbia student visa Bangladesh, Serbia D visa requirements, Serbia temporary residence study, Serbia visa requirements for Bangladeshi students",
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
          "name": "Do Bangladeshis need a visa for Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Bangladeshi passport holders need a visa, and degree students need a D-visa followed by temporary residence."
          }
        },
        {
          "@type": "Question",
          "name": "Who issues the Serbia student residence permit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Ministry of Interior, through the police administration in Serbia, after you arrive on a D-visa."
          }
        },
        {
          "@type": "Question",
          "name": "Can I enter Serbia on a tourist visa and then study?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A short-term visa is not grounds for temporary residence. Follow the D-visa route."
          }
        },
        {
          "@type": "Question",
          "name": "How long is a student permit valid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually up to a year at a time, renewed while you study."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an admission letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, a certificate of admission or enrolment at an accredited institution."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a Serbian embassy in Dhaka?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Serbia lists its embassy in New Delhi as covering Bangladesh non-residentially; confirm the current process."
          }
        },
        {
          "@type": "Question",
          "name": "Can scholarship students apply differently?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "World in Serbia candidates follow instructions in the call."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to register after arrival?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, with the police within 24 hours, as university guidance notes."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Serbia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Serbia Student Visa (D-Visa) and Residence Permit Requirements for Bangladeshis (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Bangladeshi students need a long-stay D-visa before travel and then a temporary residence permit in Serbia.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Bangladeshi passport holders need a visa to enter Serbia; a short-term visa does not give grounds for temporary residence.</li><li>Students first need acceptance and enrolment, then apply for a D-visa, then apply for a temporary residence permit.</li><li>Typical evidence: admission or enrolment document, proof of funds, proof of accommodation, health insurance and a valid passport.</li><li>Serbia&apos;s Ministry of Foreign Affairs lists the Embassy of Serbia in New Delhi as covering Bangladesh on a non-residential basis.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#who-needs-what" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Who needs what</a></li><li><a href="#core-requirements" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Core requirements</a></li><li><a href="#rights-and-limits-of-a-student-permit" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Rights and limits of a student permit</a></li><li><a href="#where-to-apply-from-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Where to apply from Bangladesh</a></li><li><a href="#strong-files-vs-weak-files" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Strong files vs weak files</a></li><li><a href="#mistakes-that-cause-delays" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mistakes that cause delays</a></li></ol>
          </nav>

          <article>
<section id="who-needs-what" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Who needs what</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">What it means</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">D-visa (long stay)</td><td className="px-3 py-2 align-top">Required for foreigners who need a visa and want to apply for temporary residence; issued by a Serbian mission</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Temporary residence permit</td><td className="px-3 py-2 align-top">Applied for in Serbia after arrival while the D-visa is valid; for students tied to enrolment and renewed annually</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Police registration</td><td className="px-3 py-2 align-top">Foreigners must register their address with the police within 24 hours of arrival</td></tr></tbody></table></div>
</section>
<section id="core-requirements" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Core requirements</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Valid passport with sufficient validity.</li><li>Certificate of admission or enrolment at an accredited institution.</li><li>Proof of funds, see <Link href="/study/serbia/bank-solvency-requirements-for-serbia-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link>.</li><li>Proof of accommodation, for example a lease, see <Link href="/study/serbia/student-accommodation-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">accommodation</Link>.</li><li>Health insurance, see <Link href="/study/serbia/health-insurance-for-students-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">health insurance</Link>.</li><li>Photographs and completed forms.</li><li>Police clearance or other documents if requested.</li></ul><p className="mt-4 leading-7 text-slate-700">A full list is in the <Link href="/study/serbia/serbia-student-documents-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">documents checklist</Link>.</p>
</section>
<section id="rights-and-limits-of-a-student-permit" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Rights and limits of a student permit</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Work up to 16 hours a week according to the Welcome to Serbia portal for foreigners with regulated stay based on study, see <Link href="/study/serbia/part-time-job-and-post-study-work-rules-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">work rules</Link>.</li><li>Family reunification is governed by separate rules, see <Link href="/study/serbia/bring-family-to-serbia-as-a-student" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">family guide</Link>.</li><li>The permit is renewed while you remain enrolled.</li></ul>
</section>
<section id="where-to-apply-from-bangladesh" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Where to apply from Bangladesh</h2>
<p className="mt-4 leading-7 text-slate-700">Serbia does not list a residential embassy in Dhaka. The Serbian foreign ministry states that its embassy in New Delhi covers Bangladesh on a non-residential basis, so confirm with the Serbian mission or official portal whether applications are lodged in person, by courier or through an authorised channel. Follow the steps in <Link href="/study/serbia/serbia-d-visa-and-temporary-residence-application-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the visa application guide</Link>.</p>
</section>
<section id="strong-files-vs-weak-files" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Strong files vs weak files</h2>
<p className="mt-4 leading-7 text-slate-700">Officers look for a consistent story: admission, funds, accommodation and plan. Read <Link href="/study/serbia/serbia-student-visa-refusal-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">common refusal reasons</Link> and <Link href="/study/serbia/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">processing time and cost</Link>.</p>
</section>
<section id="mistakes-that-cause-delays" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Mistakes that cause delays</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Applying before you hold a final admission certificate.</li><li>Bank statements without a clear source of funds.</li><li>Name or date mismatches.</li><li>Missing translations.</li><li>Booking flights before approval.</li></ul>
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
