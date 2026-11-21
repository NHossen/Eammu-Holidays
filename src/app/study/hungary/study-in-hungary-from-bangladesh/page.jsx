import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/study-in-hungary-from-bangladesh';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Hungary from Bangladesh 2026 Roadmap | Eammu",
  "description": "Step-by-step roadmap to study in Hungary from Bangladesh in 2026: eligibility, costs in BDT, scholarships, applications, D-visa and arrival.",
  "keywords": [
    "study in Hungary from Bangladesh",
    "Hungary study visa from Bangladesh",
    "Hungary university admission Bangladesh",
    "study abroad Hungary cost BDT"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/study-in-hungary-from-bangladesh"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Hungary from Bangladesh 2026 Roadmap | Eammu",
    "description": "Step-by-step roadmap to study in Hungary from Bangladesh in 2026: eligibility, costs in BDT, scholarships, applications, D-visa and arrival.",
    "url": "https://eammu.com/study/hungary/study-in-hungary-from-bangladesh",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Hungary from Bangladesh 2026 Roadmap | Eammu",
    "description": "Step-by-step roadmap to study in Hungary from Bangladesh in 2026: eligibility, costs in BDT, scholarships, applications, D-visa and arrival."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Study from Bangladesh", "href": "/study/hungary/study-in-hungary-from-bangladesh"}];
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
    "href": "/study/hungary",
    "title": "Study in Hungary 2026",
    "description": "Complete 2026 guide to study in Hungary from Bangladesh: Stipendium Hungaricum, tuition in BDT, cost of living, admission, visa and work rules."
  },
  {
    "href": "/study/hungary/admission-requirements-in-hungary-for-bangladeshi-students",
    "title": "Admission Requirements in Hungary for Bangladeshi Students",
    "description": "Admission requirements for Hungarian universities in 2026 for Bangladeshi students: HSC, bachelor's, English tests, entrance exams and documents."
  },
  {
    "href": "/study/hungary/hungary-intake-dates",
    "title": "Hungary Intake Dates and Application Deadlines (2026–2027)",
    "description": "Hungary intake dates and deadlines for Bangladeshi students: September and February intakes, Stipendium Hungaricum timing and self-financed deadlines."
  },
  {
    "href": "/study/hungary/stipendium-hungaricum-scholarship-guide",
    "title": "Stipendium Hungaricum Scholarship for Bangladeshi Students: Full Guide",
    "description": "Stipendium Hungaricum for Bangladeshi students: benefits, how to apply, the Ministry of Education sending partner step, documents and common mistakes."
  },
  {
    "href": "/study/hungary/student-accommodation-in-hungary",
    "title": "Student Accommodation in Hungary for Bangladeshi Students",
    "description": "Student accommodation in Hungary for Bangladeshi students in 2026: dormitories, shared flats and rent in EUR and BDT, plus how to avoid rental scams."
  }
];
const FAQS = [
  {
    "q": "How can a Bangladeshi student apply to study in Hungary?",
    "a": "Apply to a Hungarian university directly or through Stipendium Hungaricum, receive an admission letter, then apply for a D-visa and residence permit for study."
  },
  {
    "q": "Which intake is best for Bangladeshi students?",
    "a": "September is the main intake with the widest course choice and the Stipendium Hungaricum cycle. February is possible at some universities."
  },
  {
    "q": "How much money do I need before applying?",
    "a": "Self-financed students should plan first-year tuition plus a living-cost buffer; exact visa funds rules are in our proof of funds guide."
  },
  {
    "q": "Is IELTS compulsory for Hungary?",
    "a": "Not always. Many universities accept alternatives such as a medium-of-instruction letter, Duolingo or an online English interview. Check each programme."
  },
  {
    "q": "Can I study in Hungary after HSC?",
    "a": "Yes. HSC (12 years) is the standard route for bachelor's entry; SSC alone is not enough, so a foundation route may be needed."
  },
  {
    "q": "Is Hungary safe for Bangladeshi students?",
    "a": "Hungary is generally safe for students, but you should stay alert to rental scams and follow local registration rules."
  },
  {
    "q": "How early should I start preparing?",
    "a": "Ideally 12 months before the intake, because attestation, tests, scholarship deadlines and visa steps all take time."
  },
  {
    "q": "Is Hungary a good stepping stone to other EU countries?",
    "a": "It can be a pathway to European study and work, but rights to work or settle elsewhere depend on each country, so plan around Hungary's own rules first."
  },
  {
    "q": "Can I switch courses after arrival?",
    "a": "Switching is possible in some cases but can affect fees, credits and your permit, so confirm with the university first."
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
          "name": "Study from Bangladesh",
          "item": "https://eammu.com/study/hungary/study-in-hungary-from-bangladesh"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Hungary from Bangladesh: 2026 Roadmap, Costs and Visa Steps",
      "description": "Step-by-step roadmap to study in Hungary from Bangladesh in 2026: eligibility, costs in BDT, scholarships, applications, D-visa and arrival.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/study-in-hungary-from-bangladesh",
      "keywords": "study in Hungary from Bangladesh, Hungary study visa from Bangladesh, Hungary university admission Bangladesh, study abroad Hungary cost BDT",
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
          "name": "How can a Bangladeshi student apply to study in Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Apply to a Hungarian university directly or through Stipendium Hungaricum, receive an admission letter, then apply for a D-visa and residence permit for study."
          }
        },
        {
          "@type": "Question",
          "name": "Which intake is best for Bangladeshi students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "September is the main intake with the widest course choice and the Stipendium Hungaricum cycle. February is possible at some universities."
          }
        },
        {
          "@type": "Question",
          "name": "How much money do I need before applying?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Self-financed students should plan first-year tuition plus a living-cost buffer; exact visa funds rules are in our proof of funds guide."
          }
        },
        {
          "@type": "Question",
          "name": "Is IELTS compulsory for Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not always. Many universities accept alternatives such as a medium-of-instruction letter, Duolingo or an online English interview. Check each programme."
          }
        },
        {
          "@type": "Question",
          "name": "Can I study in Hungary after HSC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. HSC (12 years) is the standard route for bachelor's entry; SSC alone is not enough, so a foundation route may be needed."
          }
        },
        {
          "@type": "Question",
          "name": "Is Hungary safe for Bangladeshi students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hungary is generally safe for students, but you should stay alert to rental scams and follow local registration rules."
          }
        },
        {
          "@type": "Question",
          "name": "How early should I start preparing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ideally 12 months before the intake, because attestation, tests, scholarship deadlines and visa steps all take time."
          }
        },
        {
          "@type": "Question",
          "name": "Is Hungary a good stepping stone to other EU countries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be a pathway to European study and work, but rights to work or settle elsewhere depend on each country, so plan around Hungary's own rules first."
          }
        },
        {
          "@type": "Question",
          "name": "Can I switch courses after arrival?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Switching is possible in some cases but can affect fees, credits and your permit, so confirm with the university first."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "Study in Hungary from Bangladesh: 2026 Roadmap, Costs and Visa Steps",
      "description": "Step-by-step roadmap to study in Hungary from Bangladesh in 2026: eligibility, costs in BDT, scholarships, applications, D-visa and arrival.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Shortlist programmes",
          "text": "Compare courses, tuition and cities that fit your budget."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Apply",
          "text": "Submit university or Stipendium Hungaricum applications before the deadline."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Accept the offer",
          "text": "Pay any required deposit and obtain your admission letter."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Apply for D-visa and permit",
          "text": "Submit documents and proof of funds at the visa centre."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Travel and enrol",
          "text": "Arrive, complete enrolment and register your address."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Hungary from Bangladesh: 2026 Roadmap, Costs and Visa Steps</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A practical, month-by-month roadmap for Bangladeshi students, from choosing a course to landing in Budapest.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Start 9–12 months before the September intake.</li><li>Funding decides everything: scholarship applicants face a mid-January deadline, self-financed students can apply later.</li><li>The residence permit is tied to enrolment at a state-recognised institution.</li><li>Budget for documents, translation, insurance and flights, not just tuition.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#is-hungary-right-for-you" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Is Hungary right for you?</a></li><li><a href="#12-month-timeline-for-the-september-intake" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">12-month timeline for the September intake</a></li><li><a href="#typical-first-year-budget" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Typical first-year budget</a></li><li><a href="#documents-to-start-collecting-now" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Documents to start collecting now</a></li><li><a href="#visa-and-arrival" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Visa and arrival</a></li><li><a href="#choosing-a-programme-that-fits-your-profile" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Choosing a programme that fits your profile</a></li><li><a href="#funding-strategies-bangladeshi-families-use" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Funding strategies Bangladeshi families use</a></li><li><a href="#life-after-you-arrive" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Life after you arrive</a></li><li><a href="#common-mistakes-bangladeshi-applicants-make" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Common mistakes Bangladeshi applicants make</a></li></ol>
          </nav>

          <article>
<section id="is-hungary-right-for-you" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Is Hungary right for you?</h2>
<p className="mt-4 leading-7 text-slate-700">Hungary suits students who want an English-taught EU degree at a moderate cost, are comfortable in a smaller-language country and can plan finances carefully. It is less suited to students who expect to earn a large income from part-time work or settle quickly; read <Link href="/study/hungary/part-time-job-and-post-study-work-rules-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">work and post-study rules</Link> before deciding. If you are still comparing destinations, see <Link href="/study/hungary/hungary-vs-finland-vs-germany-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Hungary vs Finland vs Germany</Link>.</p>
</section>
<section id="12-month-timeline-for-the-september-intake" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">12-month timeline for the September intake</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">When</th><th scope="col" className="px-3 py-2 text-left font-bold">What to do</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Sep – Nov</td><td className="px-3 py-2 align-top">Shortlist courses, take IELTS/TOEFL if needed, start gathering transcripts and certificates</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Nov – Jan</td><td className="px-3 py-2 align-top">Stipendium Hungaricum application (deadline normally 15 January) and parallel Ministry of Education submission</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Jan – Apr</td><td className="px-3 py-2 align-top">Self-financed applications, entrance exams or interviews, offers and conditional letters</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Apr – Jun</td><td className="px-3 py-2 align-top">Accept offer, pay deposit if required, arrange funds and accommodation</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Jun – Aug</td><td className="px-3 py-2 align-top">D-visa and residence permit application; insurance and flights</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Late Aug – Sep</td><td className="px-3 py-2 align-top">Arrival, enrolment, address registration and orientation</td></tr></tbody></table></div>
</section>
<section id="typical-first-year-budget" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Typical first-year budget</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Budget line</th><th scope="col" className="px-3 py-2 text-left font-bold">EUR (per year)</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT approx. (per year)</th><th scope="col" className="px-3 py-2 text-left font-bold">What to check</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tuition (non-medical, self-financed)</td><td className="px-3 py-2 align-top">EUR 2,000 – 7,000</td><td className="px-3 py-2 align-top">Tk 2,80,000 – 9,80,000</td><td className="px-3 py-2 align-top">Free for scholarship holders</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs (12 months)</td><td className="px-3 py-2 align-top">EUR 5,400 – 10,800</td><td className="px-3 py-2 align-top">Tk 7,56,000 – 15,12,000</td><td className="px-3 py-2 align-top">Budapest at the higher end</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Visa, permit, insurance, translations</td><td className="px-3 py-2 align-top">EUR 300 – 800</td><td className="px-3 py-2 align-top">Tk 42,000 – 1,12,000</td><td className="px-3 py-2 align-top">Fees are revised often</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Flight from Dhaka (one way)</td><td className="px-3 py-2 align-top">EUR 450 – 800</td><td className="px-3 py-2 align-top">Tk 63,000 – 1,12,000</td><td className="px-3 py-2 align-top">Seasonal pricing, usually one stop</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 EUR = about HUF 400 = about Tk 140 and are indicative planning estimates for 2026–2027, based on published university pages and Hungarian immigration guidance. Fees, funds rules and exchange rates change, so always confirm with the university, the Hungarian immigration authority (oif.gov.hu) and an Eammu Holidays counselor before paying anything.</p>
</section>
<section id="documents-to-start-collecting-now" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Documents to start collecting now</h2>
<p className="mt-4 leading-7 text-slate-700">Academic certificates, transcripts, passport, English test result or MOI letter, motivation letter, CV, bank statements and police clearance are the core set. The full list is in the <Link href="/study/hungary/hungary-student-documents-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">documents checklist</Link>; for letters see <Link href="/study/hungary/sop-and-motivation-letter-for-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">SOP and motivation letter guide</Link>.</p>
</section>
<section id="visa-and-arrival" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Visa and arrival</h2>
<p className="mt-4 leading-7 text-slate-700">Once admitted, you apply for a long-stay D-visa and a residence permit for study. The process is explained in the <Link href="/study/hungary/hungary-student-visa-application-guide-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa application guide</Link>; money rules are in <Link href="/study/hungary/bank-solvency-requirements-for-hungary-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link>. After arrival, register your address, collect your permit and open a bank account. Our <Link href="/study/hungary/halal-food-and-bangladeshi-community-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">halal food and community guide</Link> helps with settling in.</p>
</section>
<section id="choosing-a-programme-that-fits-your-profile" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Choosing a programme that fits your profile</h2>
<p className="mt-4 leading-7 text-slate-700">Start from your qualification, not from a university name. An HSC science graduate has different options from a diploma holder or an experienced professional. Compare <Link href="/study/hungary/bachelors-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bachelor&apos;s degrees</Link>, <Link href="/study/hungary/masters-and-phd-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">master&apos;s and PhD routes</Link> and specialised paths such as <Link href="/study/hungary/cse-and-it-courses-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">IT</Link>, <Link href="/study/hungary/engineering-courses-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">engineering</Link>, <Link href="/study/hungary/mba-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">business</Link> and <Link href="/study/hungary/mbbs-and-medical-degrees-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">medicine</Link>.</p><ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Ask whether the programme is taught fully in English.</li><li>Check the accreditation and recognition status of the institution.</li><li>Review curriculum, practical work and career outcomes.</li><li>Check how many Bangladeshi or South Asian students already study there.</li></ul>
</section>
<section id="funding-strategies-bangladeshi-families-use" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Funding strategies Bangladeshi families use</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Strategy</th><th scope="col" className="px-3 py-2 text-left font-bold">When it works</th><th scope="col" className="px-3 py-2 text-left font-bold">Risk</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Scholarship first</td><td className="px-3 py-2 align-top">Strong grades, early preparation, flexible plans</td><td className="px-3 py-2 align-top">Competitive; fixed January deadline</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Scholarship plus self-financed back-up</td><td className="px-3 py-2 align-top">Most applicants</td><td className="px-3 py-2 align-top">Needs two sets of applications</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Fully self-financed</td><td className="px-3 py-2 align-top">Families with documented savings or sponsors</td><td className="px-3 py-2 align-top">Higher cost and tighter funds scrutiny</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Master&apos;s or PhD funded place</td><td className="px-3 py-2 align-top">Research-focused applicants</td><td className="px-3 py-2 align-top">Needs supervisor and proposal</td></tr></tbody></table></div><p className="mt-4 leading-7 text-slate-700">Read <Link href="/study/hungary/scholarships-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Hungary</Link> and <Link href="/study/hungary/bank-solvency-requirements-for-hungary-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link> before choosing a strategy.</p>
</section>
<section id="life-after-you-arrive" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Life after you arrive</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Complete enrolment and any permit formalities promptly.</li><li>Register your address and keep your permit with you.</li><li>Set up a bank account and a student transport pass.</li><li>Join student groups and learn basic Hungarian phrases.</li><li>Review <Link href="/study/hungary/part-time-job-and-post-study-work-rules-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">work rules</Link> before taking any job.</li></ul>
</section>
<section id="common-mistakes-bangladeshi-applicants-make" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Common mistakes Bangladeshi applicants make</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Starting too late and missing scholarship or visa windows.</li><li>Choosing a programme because it is cheap without checking recognition.</li><li>Using an unverified agent or paying for a guaranteed outcome.</li><li>Showing funds that cannot be explained.</li><li>Assuming family can join later.</li></ul><p className="mt-4 leading-7 text-slate-700">Our <Link href="/study/hungary/hungary-student-visa-refusal-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa refusal guide</Link> explains how to avoid most of these.</p>
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
