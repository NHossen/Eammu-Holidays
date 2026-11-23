import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/serbia/study-in-serbia-without-ielts';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Serbia Without IELTS 2026 | Eammu Holidays",
  "description": "Can Bangladeshi students study in Serbia without IELTS in 2026? See accepted alternatives, English-medium schooling, tests and visa implications.",
  "keywords": [
    "study in Serbia without IELTS",
    "Serbia university no IELTS",
    "English requirement Serbia university",
    "Serbia MOI letter"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/serbia/study-in-serbia-without-ielts"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Serbia Without IELTS 2026 | Eammu Holidays",
    "description": "Can Bangladeshi students study in Serbia without IELTS in 2026? See accepted alternatives, English-medium schooling, tests and visa implications.",
    "url": "https://eammu.com/study/serbia/study-in-serbia-without-ielts",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Serbia Without IELTS 2026 | Eammu Holidays",
    "description": "Can Bangladeshi students study in Serbia without IELTS in 2026? See accepted alternatives, English-medium schooling, tests and visa implications."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Serbia", "href": "/study/serbia"}, {"name": "Without IELTS", "href": "/study/serbia/study-in-serbia-without-ielts"}];
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
    "href": "/study/serbia/admission-requirements-in-serbia-for-bangladeshi-students",
    "title": "Admission Requirements in Serbia for Bangladeshi Students",
    "description": "Admission requirements for Serbian universities in 2026 for Bangladeshi students: HSC, bachelor's, English tests, entrance exams and documents."
  },
  {
    "href": "/study/serbia/how-to-apply-to-serbian-universities",
    "title": "How to Apply to Serbian Universities from Bangladesh: Step-by-Step Guide",
    "description": "How to apply to Serbian universities from Bangladesh in 2026: faculty applications, entrance exams, fees, recognition of documents and offers."
  },
  {
    "href": "/study/serbia/sop-and-motivation-letter-for-serbia",
    "title": "SOP and Motivation Letter for Serbia: Structure, Tips and Mistakes",
    "description": "How to write an SOP or motivation letter for Serbian universities and World in Serbia in 2026, with structure, tips and common mistakes."
  },
  {
    "href": "/study/serbia/serbia-intake-dates",
    "title": "Serbia Intake Dates and Application Deadlines (2026–2027)",
    "description": "Serbia intake dates and deadlines for Bangladeshi students: October and February intakes, enrolment rounds, entrance exams and scholarship timing."
  }
];
const FAQS = [
  {
    "q": "Can I study in Serbia without IELTS?",
    "a": "Often yes. Some faculties accept alternative tests, English-medium schooling or an interview, but it depends on the programme."
  },
  {
    "q": "Is Duolingo accepted in Serbia?",
    "a": "Some institutions accept it; confirm the score with the specific faculty."
  },
  {
    "q": "What IELTS score is usually needed?",
    "a": "Many programmes ask for around 5.5–6.5, but requirements vary by faculty and level."
  },
  {
    "q": "Is an MOI letter enough for a Serbian visa?",
    "a": "It helps admission but the visa decision looks at your whole file including funds and genuine study intent."
  },
  {
    "q": "Does the World in Serbia scholarship require IELTS?",
    "a": "The scholarship call and the host university set the language evidence; Serbian language preparation may be part of the programme."
  },
  {
    "q": "Will Eammu arrange an IELTS waiver?",
    "a": "No one can promise a waiver. We help you find programmes whose published rules fit your language profile."
  },
  {
    "q": "Are private universities easier for English requirements?",
    "a": "Some are more flexible, but check accreditation and visa suitability before applying."
  },
  {
    "q": "Can I improve my English in Serbia?",
    "a": "Many universities offer Serbian courses; English improvement is mostly self-driven, so start before you arrive."
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
          "name": "Without IELTS",
          "item": "https://eammu.com/study/serbia/study-in-serbia-without-ielts"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Serbia Without IELTS (2026): Accepted Alternatives",
      "description": "Can Bangladeshi students study in Serbia without IELTS in 2026? See accepted alternatives, English-medium schooling, tests and visa implications.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/serbia/study-in-serbia-without-ielts",
      "keywords": "study in Serbia without IELTS, Serbia university no IELTS, English requirement Serbia university, Serbia MOI letter",
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
          "name": "Can I study in Serbia without IELTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often yes. Some faculties accept alternative tests, English-medium schooling or an interview, but it depends on the programme."
          }
        },
        {
          "@type": "Question",
          "name": "Is Duolingo accepted in Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some institutions accept it; confirm the score with the specific faculty."
          }
        },
        {
          "@type": "Question",
          "name": "What IELTS score is usually needed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many programmes ask for around 5.5–6.5, but requirements vary by faculty and level."
          }
        },
        {
          "@type": "Question",
          "name": "Is an MOI letter enough for a Serbian visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps admission but the visa decision looks at your whole file including funds and genuine study intent."
          }
        },
        {
          "@type": "Question",
          "name": "Does the World in Serbia scholarship require IELTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The scholarship call and the host university set the language evidence; Serbian language preparation may be part of the programme."
          }
        },
        {
          "@type": "Question",
          "name": "Will Eammu arrange an IELTS waiver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No one can promise a waiver. We help you find programmes whose published rules fit your language profile."
          }
        },
        {
          "@type": "Question",
          "name": "Are private universities easier for English requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some are more flexible, but check accreditation and visa suitability before applying."
          }
        },
        {
          "@type": "Question",
          "name": "Can I improve my English in Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many universities offer Serbian courses; English improvement is mostly self-driven, so start before you arrive."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Serbia Without IELTS (2026): Accepted Alternatives</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">English requirements are set by each faculty, and IELTS is not the only accepted proof.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>There is no single national English rule: each faculty sets its own.</li><li>University of Belgrade programme calls list IELTS, but also accept completed high school education in English or the faculty&apos;s own assessment in some cases.</li><li>Typical alternatives are TOEFL, Duolingo, PTE, a medium-of-instruction letter or an online interview.</li><li>A waiver at admission does not remove the need to show you can study in English at the visa stage.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#what-without-ielts-really-means" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What &quot;without IELTS&quot; really means</a></li><li><a href="#common-alternatives" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Common alternatives</a></li><li><a href="#medicine-and-competitive-programmes" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Medicine and competitive programmes</a></li><li><a href="#how-to-prepare" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to prepare</a></li><li><a href="#common-mistakes" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Common mistakes</a></li><li><a href="#evidence-that-strengthens-your-english-profile" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Evidence that strengthens your English profile</a></li></ol>
          </nav>

          <article>
<section id="what-without-ielts-really-means" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What &quot;without IELTS&quot; really means</h2>
<p className="mt-4 leading-7 text-slate-700">Serbian universities want evidence that you can follow lectures and exams in English. IELTS is the most familiar proof, but faculties differ. Some calls published by University of Belgrade faculties accept an IELTS score or proof of completed high school education in English. Others run entrance tests or interviews. Always read the specific call for your faculty and programme.</p>
</section>
<section id="common-alternatives" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Common alternatives</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Option</th><th scope="col" className="px-3 py-2 text-left font-bold">How it is used</th><th scope="col" className="px-3 py-2 text-left font-bold">Watch out for</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">TOEFL iBT, PTE, Duolingo</td><td className="px-3 py-2 align-top">Accepted by some faculties with a minimum score</td><td className="px-3 py-2 align-top">Minimum scores differ by programme</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">English-medium school certificate</td><td className="px-3 py-2 align-top">Proof that secondary education was in English</td><td className="px-3 py-2 align-top">The certificate must state the language of instruction</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">MOI letter from your university</td><td className="px-3 py-2 align-top">Supports admission to master&apos;s programmes</td><td className="px-3 py-2 align-top">Some faculties still ask for an interview</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Faculty interview or test</td><td className="px-3 py-2 align-top">Assesses speaking and writing</td><td className="px-3 py-2 align-top">Prepare as you would for IELTS speaking</td></tr></tbody></table></div>
</section>
<section id="medicine-and-competitive-programmes" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Medicine and competitive programmes</h2>
<p className="mt-4 leading-7 text-slate-700">English-taught medicine, dentistry and some IT and business programmes are more selective and may ask for formal test scores in addition to an entrance exam. See <Link href="/study/serbia/mbbs-and-medical-degrees-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">medicine in Serbia</Link> and <Link href="/study/serbia/entrance-exams-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">entrance exams</Link>.</p>
</section>
<section id="how-to-prepare" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to prepare</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Ask the faculty in writing which proof they accept and keep the reply.</li><li>Take a practice IELTS or TOEFL to know your level.</li><li>Prepare a short spoken introduction in English about your studies and goals.</li><li>Keep your HSC or degree English-medium evidence ready.</li></ul>
</section>
<section id="common-mistakes" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Common mistakes</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Paying for a &quot;guaranteed no-IELTS&quot; admission from an unverified agent.</li><li>Submitting an MOI letter without the language of instruction.</li><li>Ignoring weak spoken English: it can cause a refusal at the visa stage.</li><li>See <Link href="/study/serbia/serbia-student-visa-refusal-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">refusal reasons</Link> for other risks.</li></ul>
</section>
<section id="evidence-that-strengthens-your-english-profile" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Evidence that strengthens your English profile</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Evidence</th><th scope="col" className="px-3 py-2 text-left font-bold">How it helps</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">English-medium schooling certificate</td><td className="px-3 py-2 align-top">Supports MOI letters and interviews</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Online English courses</td><td className="px-3 py-2 align-top">Shows effort and level</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Academic paper or project in English</td><td className="px-3 py-2 align-top">Evidence of academic writing</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Strong HSC English grades</td><td className="px-3 py-2 align-top">Supportive but rarely sufficient alone</td></tr></tbody></table></div>
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
