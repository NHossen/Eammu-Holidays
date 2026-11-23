import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/serbia/entrance-exams-in-serbia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Entrance Exams in Serbia for International Students 2026",
  "description": "Entrance exams in Serbia for international students in 2026: how faculties rank candidates, typical subjects, preparation and common mistakes.",
  "keywords": [
    "entrance exam Serbia",
    "Serbia medical entrance exam",
    "Serbia university admission test"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/serbia/entrance-exams-in-serbia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Entrance Exams in Serbia for International Students 2026",
    "description": "Entrance exams in Serbia for international students in 2026: how faculties rank candidates, typical subjects, preparation and common mistakes.",
    "url": "https://eammu.com/study/serbia/entrance-exams-in-serbia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Entrance Exams in Serbia for International Students 2026",
    "description": "Entrance exams in Serbia for international students in 2026: how faculties rank candidates, typical subjects, preparation and common mistakes."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Serbia", "href": "/study/serbia"}, {"name": "Entrance Exams in Serbia", "href": "/study/serbia/entrance-exams-in-serbia"}];
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
    "href": "/study/serbia/how-to-apply-to-serbian-universities",
    "title": "How to Apply to Serbian Universities from Bangladesh: Step-by-Step Guide",
    "description": "How to apply to Serbian universities from Bangladesh in 2026: faculty applications, entrance exams, fees, recognition of documents and offers."
  },
  {
    "href": "/study/serbia/admission-requirements-in-serbia-for-bangladeshi-students",
    "title": "Admission Requirements in Serbia for Bangladeshi Students",
    "description": "Admission requirements for Serbian universities in 2026 for Bangladeshi students: HSC, bachelor's, English tests, entrance exams and documents."
  },
  {
    "href": "/study/serbia/mbbs-and-medical-degrees-in-serbia",
    "title": "Medicine, Dentistry and Pharmacy in Serbia for Bangladeshi Students",
    "description": "Study medicine (MD), dentistry and pharmacy in Serbia in 2026 for Bangladeshi students: universities, fees, entrance exams and BMDC recognition."
  },
  {
    "href": "/study/serbia/serbia-intake-dates",
    "title": "Serbia Intake Dates and Application Deadlines (2026–2027)",
    "description": "Serbia intake dates and deadlines for Bangladeshi students: October and February intakes, enrolment rounds, entrance exams and scholarship timing."
  }
];
const FAQS = [
  {
    "q": "Are entrance exams compulsory in Serbia?",
    "a": "Many faculties use them, but not all. Check each call."
  },
  {
    "q": "Can I take the exam from Bangladesh?",
    "a": "Some faculties may allow online or remote options; confirm."
  },
  {
    "q": "What language is the exam in?",
    "a": "Programmes taught in English may run exams in English, but check."
  },
  {
    "q": "How hard is the medical entrance exam?",
    "a": "It is competitive and focuses on biology and chemistry; prepare thoroughly."
  },
  {
    "q": "Are past papers available?",
    "a": "Some faculties publish samples. Ask the admissions office."
  },
  {
    "q": "Is there a pass mark?",
    "a": "Ranking lists matter more than a single pass mark."
  },
  {
    "q": "Can I retake the exam?",
    "a": "Usually in the next round or year; confirm."
  },
  {
    "q": "Does the exam affect fee reductions?",
    "a": "Ranking can affect eligibility for reductions in some calls."
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
          "name": "Entrance Exams in Serbia",
          "item": "https://eammu.com/study/serbia/entrance-exams-in-serbia"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Entrance Exams in Serbia for Bangladeshi Students: Format, Subjects and Preparation",
      "description": "Entrance exams in Serbia for international students in 2026: how faculties rank candidates, typical subjects, preparation and common mistakes.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/serbia/entrance-exams-in-serbia",
      "keywords": "entrance exam Serbia, Serbia medical entrance exam, Serbia university admission test",
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
          "name": "Are entrance exams compulsory in Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many faculties use them, but not all. Check each call."
          }
        },
        {
          "@type": "Question",
          "name": "Can I take the exam from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some faculties may allow online or remote options; confirm."
          }
        },
        {
          "@type": "Question",
          "name": "What language is the exam in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Programmes taught in English may run exams in English, but check."
          }
        },
        {
          "@type": "Question",
          "name": "How hard is the medical entrance exam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is competitive and focuses on biology and chemistry; prepare thoroughly."
          }
        },
        {
          "@type": "Question",
          "name": "Are past papers available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some faculties publish samples. Ask the admissions office."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a pass mark?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ranking lists matter more than a single pass mark."
          }
        },
        {
          "@type": "Question",
          "name": "Can I retake the exam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually in the next round or year; confirm."
          }
        },
        {
          "@type": "Question",
          "name": "Does the exam affect fee reductions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ranking can affect eligibility for reductions in some calls."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Entrance Exams in Serbia for Bangladeshi Students: Format, Subjects and Preparation</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Many Serbian faculties rank applicants with an entrance exam, so preparation matters.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Many faculties use entrance exams plus prior grades to rank candidates.</li><li>Medicine usually tests biology and chemistry; engineering tests maths and physics.</li><li>Dates and formats are in each faculty&apos;s call.</li><li>Ask whether foreign applicants can take the exam online.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#how-ranking-works" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How ranking works</a></li><li><a href="#typical-exam-subjects" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Typical exam subjects</a></li><li><a href="#how-to-prepare" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to prepare</a></li><li><a href="#practical-points" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Practical points</a></li><li><a href="#sample-12-week-preparation-plan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Sample 12-week preparation plan</a></li><li><a href="#on-exam-day" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">On exam day</a></li></ol>
          </nav>

          <article>
<section id="how-ranking-works" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How ranking works</h2>
<p className="mt-4 leading-7 text-slate-700">Faculties publish the number of places, tuition fees and the criteria for ordering candidates. Candidates are ranked by combined score from school results and the entrance exam, and the best-ranked may receive priority or fee reductions. The University of Belgrade&apos;s Faculty of Electrical Engineering, for example, publishes that candidates either get a state scholarship or pay tuition depending on ranking.</p>
</section>
<section id="typical-exam-subjects" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Typical exam subjects</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Field</th><th scope="col" className="px-3 py-2 text-left font-bold">Common subjects</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Medicine, dentistry, pharmacy</td><td className="px-3 py-2 align-top">Biology, chemistry, sometimes physics</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Engineering and IT</td><td className="px-3 py-2 align-top">Mathematics, physics, sometimes aptitude tests</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Economics and business</td><td className="px-3 py-2 align-top">Mathematics, general knowledge, English</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Law and social sciences</td><td className="px-3 py-2 align-top">Language, general knowledge, essay</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Arts and design</td><td className="px-3 py-2 align-top">Portfolio and practical test</td></tr></tbody></table></div>
</section>
<section id="how-to-prepare" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to prepare</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Download the programme&apos;s syllabus and sample questions.</li><li>Plan weekly study blocks for several months.</li><li>Practise under timed conditions.</li><li>Review HSC material in the relevant subjects.</li><li>Prepare your English for interviews or language tests.</li></ol>
</section>
<section id="practical-points" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Practical points</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Confirm whether the exam is in Serbian, English or both.</li><li>Check the exam registration deadline separately from application.</li><li>Arrange travel and visas early if the exam must be taken in person.</li><li>Keep your admit card and ID ready.</li></ul><p className="mt-4 leading-7 text-slate-700">See <Link href="/study/serbia/admission-requirements-in-serbia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link> and <Link href="/study/serbia/how-to-apply-to-serbian-universities" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">how to apply</Link>.</p>
</section>
<section id="sample-12-week-preparation-plan" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Sample 12-week preparation plan</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Weeks</th><th scope="col" className="px-3 py-2 text-left font-bold">Focus</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">1–3</td><td className="px-3 py-2 align-top">Syllabus review and diagnostic test</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">4–8</td><td className="px-3 py-2 align-top">Subject-by-subject revision</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">9–11</td><td className="px-3 py-2 align-top">Timed mock exams</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">12</td><td className="px-3 py-2 align-top">Light revision and logistics</td></tr></tbody></table></div>
</section>
<section id="on-exam-day" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">On exam day</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Bring ID and admit card.</li><li>Arrive early and test your connection if online.</li><li>Read instructions carefully.</li><li>Manage time per section.</li></ul>
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
