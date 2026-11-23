import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/serbia/study-in-serbia-from-bangladesh';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Serbia from Bangladesh 2026 Roadmap | Eammu",
  "description": "Step-by-step roadmap to study in Serbia from Bangladesh in 2026: eligibility, costs in BDT, scholarships, admission, D-visa and arrival in Serbia.",
  "keywords": [
    "study in Serbia from Bangladesh",
    "Serbia study visa from Bangladesh",
    "Serbia university admission Bangladesh",
    "study abroad Serbia cost BDT"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/serbia/study-in-serbia-from-bangladesh"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Serbia from Bangladesh 2026 Roadmap | Eammu",
    "description": "Step-by-step roadmap to study in Serbia from Bangladesh in 2026: eligibility, costs in BDT, scholarships, admission, D-visa and arrival in Serbia.",
    "url": "https://eammu.com/study/serbia/study-in-serbia-from-bangladesh",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Serbia from Bangladesh 2026 Roadmap | Eammu",
    "description": "Step-by-step roadmap to study in Serbia from Bangladesh in 2026: eligibility, costs in BDT, scholarships, admission, D-visa and arrival in Serbia."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Serbia", "href": "/study/serbia"}, {"name": "Study from Bangladesh", "href": "/study/serbia/study-in-serbia-from-bangladesh"}];
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
    "href": "/study/serbia",
    "title": "Study in Serbia 2026",
    "description": "Complete 2026 guide to study in Serbia from Bangladesh: tuition in BDT, World in Serbia scholarship, D-visa, residence permit, work rules and costs."
  },
  {
    "href": "/study/serbia/admission-requirements-in-serbia-for-bangladeshi-students",
    "title": "Admission Requirements in Serbia for Bangladeshi Students",
    "description": "Admission requirements for Serbian universities in 2026 for Bangladeshi students: HSC, bachelor's, English tests, entrance exams and documents."
  },
  {
    "href": "/study/serbia/serbia-intake-dates",
    "title": "Serbia Intake Dates and Application Deadlines (2026–2027)",
    "description": "Serbia intake dates and deadlines for Bangladeshi students: October and February intakes, enrolment rounds, entrance exams and scholarship timing."
  },
  {
    "href": "/study/serbia/world-in-serbia-scholarship-guide",
    "title": "World in Serbia Scholarship for Bangladeshi Students: Full Guide",
    "description": "World in Serbia scholarship guide for Bangladeshi students: who can apply, benefits, Serbian language year, public universities and common mistakes."
  },
  {
    "href": "/study/serbia/student-accommodation-in-serbia",
    "title": "Student Accommodation in Serbia for Bangladeshi Students",
    "description": "Student accommodation in Serbia for Bangladeshi students in 2026: dormitories, shared flats and rent in EUR and BDT, plus how to avoid rental scams."
  }
];
const FAQS = [
  {
    "q": "How can a Bangladeshi student apply to study in Serbia?",
    "a": "Apply to a Serbian university or faculty directly, receive an admission or enrolment document, apply for a D-visa, then register with the police and apply for temporary residence after arrival."
  },
  {
    "q": "Which intake is best for Bangladeshi students?",
    "a": "October is the main intake with the widest choice. Some programmes also admit in February."
  },
  {
    "q": "How much money do I need before applying?",
    "a": "Plan first-year tuition plus a living-cost buffer and visa costs; exact visa funds expectations are covered in our proof of funds guide."
  },
  {
    "q": "Is IELTS compulsory for Serbia?",
    "a": "Not always. Some faculties accept completed secondary education in English or their own test; others ask for IELTS or TOEFL. Check each programme."
  },
  {
    "q": "Can I study in Serbia after HSC?",
    "a": "Yes. HSC is the usual route for bachelor's entry. SSC alone is not enough."
  },
  {
    "q": "Is Serbia safe for Bangladeshi students?",
    "a": "Serbia is generally safe for students, but you should take normal precautions, avoid rental scams and follow registration rules."
  },
  {
    "q": "Can I switch from one faculty to another?",
    "a": "Transfers are possible within the same cycle but depend on the university and can affect your residence permit."
  },
  {
    "q": "Is Serbian required for daily life?",
    "a": "Not on campus for English programmes, but basic Serbian helps with housing, shopping, jobs and dealing with officials."
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
          "name": "Study from Bangladesh",
          "item": "https://eammu.com/study/serbia/study-in-serbia-from-bangladesh"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Serbia from Bangladesh: 2026 Roadmap, Costs and Visa Steps",
      "description": "Step-by-step roadmap to study in Serbia from Bangladesh in 2026: eligibility, costs in BDT, scholarships, admission, D-visa and arrival in Serbia.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/serbia/study-in-serbia-from-bangladesh",
      "keywords": "study in Serbia from Bangladesh, Serbia study visa from Bangladesh, Serbia university admission Bangladesh, study abroad Serbia cost BDT",
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
          "name": "How can a Bangladeshi student apply to study in Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Apply to a Serbian university or faculty directly, receive an admission or enrolment document, apply for a D-visa, then register with the police and apply for temporary residence after arrival."
          }
        },
        {
          "@type": "Question",
          "name": "Which intake is best for Bangladeshi students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October is the main intake with the widest choice. Some programmes also admit in February."
          }
        },
        {
          "@type": "Question",
          "name": "How much money do I need before applying?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plan first-year tuition plus a living-cost buffer and visa costs; exact visa funds expectations are covered in our proof of funds guide."
          }
        },
        {
          "@type": "Question",
          "name": "Is IELTS compulsory for Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not always. Some faculties accept completed secondary education in English or their own test; others ask for IELTS or TOEFL. Check each programme."
          }
        },
        {
          "@type": "Question",
          "name": "Can I study in Serbia after HSC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. HSC is the usual route for bachelor's entry. SSC alone is not enough."
          }
        },
        {
          "@type": "Question",
          "name": "Is Serbia safe for Bangladeshi students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Serbia is generally safe for students, but you should take normal precautions, avoid rental scams and follow registration rules."
          }
        },
        {
          "@type": "Question",
          "name": "Can I switch from one faculty to another?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Transfers are possible within the same cycle but depend on the university and can affect your residence permit."
          }
        },
        {
          "@type": "Question",
          "name": "Is Serbian required for daily life?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not on campus for English programmes, but basic Serbian helps with housing, shopping, jobs and dealing with officials."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "Study in Serbia from Bangladesh: 2026 Roadmap, Costs and Visa Steps",
      "description": "Step-by-step roadmap to study in Serbia from Bangladesh in 2026: eligibility, costs in BDT, scholarships, admission, D-visa and arrival in Serbia.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Shortlist programmes",
          "text": "Compare faculties, English-taught options, tuition and city costs."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Apply and sit exams",
          "text": "Submit applications and complete any entrance exam or interview."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Accept the offer",
          "text": "Pay required fees and obtain your admission or enrolment document."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Apply for the D-visa",
          "text": "Submit documents at the Serbian mission that handles Bangladeshi applicants."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Arrive and register",
          "text": "Register with the police and apply for temporary residence."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Serbia from Bangladesh: 2026 Roadmap, Costs and Visa Steps</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A practical, month-by-month roadmap for Bangladeshi students, from choosing a faculty to registering with the police in Serbia.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Start 9–12 months before the October intake.</li><li>Admission comes first: the D-visa is applied for with an enrolment or admission document.</li><li>After arrival you must register with the police and apply for a temporary residence permit, renewed each year.</li><li>Budget for documents, translation, insurance, flights and the first rent, not only tuition.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#is-serbia-right-for-you" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Is Serbia right for you?</a></li><li><a href="#12-month-timeline-for-the-october-intake" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">12-month timeline for the October intake</a></li><li><a href="#typical-first-year-budget" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Typical first-year budget</a></li><li><a href="#documents-to-start-collecting-now" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Documents to start collecting now</a></li><li><a href="#visa-and-arrival" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Visa and arrival</a></li><li><a href="#settling-in" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Settling in</a></li></ol>
          </nav>

          <article>
<section id="is-serbia-right-for-you" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Is Serbia right for you?</h2>
<p className="mt-4 leading-7 text-slate-700">Serbia suits students who want an affordable European degree, are comfortable in a smaller non-EU country and can manage paperwork across two systems, Bangladeshi and Serbian. It is less suited to students who expect a large part-time income, plan to move quickly into the Schengen area, or need a very wide choice of English-taught programmes. Compare destinations in <Link href="/study/serbia/serbia-vs-hungary-vs-poland-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Serbia vs Hungary vs Poland</Link> before you commit.</p>
</section>
<section id="12-month-timeline-for-the-october-intake" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">12-month timeline for the October intake</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">When</th><th scope="col" className="px-3 py-2 text-left font-bold">What to do</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Sep – Nov</td><td className="px-3 py-2 align-top">Shortlist faculties, check English-taught programmes, schedule IELTS if needed</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Nov – Feb</td><td className="px-3 py-2 align-top">Collect and attest certificates; request transcripts; draft motivation letter</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Feb – May</td><td className="px-3 py-2 align-top">Watch for scholarship calls and faculty announcements; prepare for entrance tests</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Jun – Jul</td><td className="px-3 py-2 align-top">First enrolment round at many faculties; submit applications and take exams</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Aug – Sep</td><td className="px-3 py-2 align-top">Offer, payment, D-visa appointment; insurance and accommodation proof</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Late Sep – Oct</td><td className="px-3 py-2 align-top">Arrival, police registration, enrolment, temporary residence application</td></tr></tbody></table></div>
</section>
<section id="typical-first-year-budget" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Typical first-year budget</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Budget line</th><th scope="col" className="px-3 py-2 text-left font-bold">EUR (per year)</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT approx. (per year)</th><th scope="col" className="px-3 py-2 text-left font-bold">What to check</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tuition (most programmes)</td><td className="px-3 py-2 align-top">EUR 1,500 – 5,000</td><td className="px-3 py-2 align-top">Tk 2,10,000 – 7,00,000</td><td className="px-3 py-2 align-top">Medicine costs more</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs (12 months)</td><td className="px-3 py-2 align-top">EUR 4,200 – 8,400</td><td className="px-3 py-2 align-top">Tk 5,88,000 – 11,76,000</td><td className="px-3 py-2 align-top">Belgrade at the higher end</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Visa, permit, insurance, translations</td><td className="px-3 py-2 align-top">EUR 300 – 900</td><td className="px-3 py-2 align-top">Tk 42,000 – 1,26,000</td><td className="px-3 py-2 align-top">Fees change; keep receipts</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Flight from Dhaka (one way)</td><td className="px-3 py-2 align-top">EUR 400 – 800</td><td className="px-3 py-2 align-top">Tk 56,000 – 1,12,000</td><td className="px-3 py-2 align-top">Usually one or two stops</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 EUR = about RSD 117 = about Tk 140 and are indicative planning estimates for 2026–2027, based on published university pages and Serbian official guidance. Fees, funds rules and exchange rates change, so always confirm with the university, the Serbian Ministry of Interior (mup.gov.rs) and an Eammu Holidays counselor before paying anything.</p>
</section>
<section id="documents-to-start-collecting-now" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Documents to start collecting now</h2>
<p className="mt-4 leading-7 text-slate-700">Academic certificates, transcripts, passport, English evidence or medium-of-instruction letter, motivation letter, CV and bank documents are the core set. The full list is in the <Link href="/study/serbia/serbia-student-documents-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">documents checklist</Link>. For letters see <Link href="/study/serbia/sop-and-motivation-letter-for-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">SOP and motivation letter guide</Link>; for recognition rules see <Link href="/study/serbia/degree-recognition-and-eligibility-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">degree recognition</Link>.</p>
</section>
<section id="visa-and-arrival" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Visa and arrival</h2>
<p className="mt-4 leading-7 text-slate-700">Bangladeshi citizens need a D-visa. Serbia&apos;s Ministry of Foreign Affairs lists the Embassy of Serbia in New Delhi as covering Bangladesh on a non-residential basis, so confirm the current submission channel before you plan travel. After arrival you register your address with the police within 24 hours, and then apply for a temporary residence permit. Follow the <Link href="/study/serbia/serbia-d-visa-and-temporary-residence-application-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa application guide</Link> and <Link href="/study/serbia/serbia-police-registration-and-permit-renewal" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">police registration and renewal guide</Link>.</p>
</section>
<section id="settling-in" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Settling in</h2>
<p className="mt-4 leading-7 text-slate-700">Plan <Link href="/study/serbia/student-accommodation-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">housing</Link>, <Link href="/study/serbia/health-insurance-for-students-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">health insurance</Link>, and a basic Serbian phrase list before you land. See also <Link href="/study/serbia/halal-food-and-bangladeshi-community-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">halal food and community</Link> and <Link href="/study/serbia/life-in-serbia-for-international-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">life in Serbia for international students</Link>.</p>
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
