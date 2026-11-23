import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/serbia/cse-and-it-courses-in-serbia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "CSE and IT Courses in Serbia for Bangladeshis 2026",
  "description": "CSE and IT courses in Serbia for Bangladeshi students in 2026: computer science, software engineering and data science programmes, fees and careers.",
  "keywords": [
    "CSE in Serbia",
    "computer science Serbia Bangladeshi",
    "IT courses Serbia English",
    "software engineering Serbia"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/serbia/cse-and-it-courses-in-serbia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "CSE and IT Courses in Serbia for Bangladeshis 2026",
    "description": "CSE and IT courses in Serbia for Bangladeshi students in 2026: computer science, software engineering and data science programmes, fees and careers.",
    "url": "https://eammu.com/study/serbia/cse-and-it-courses-in-serbia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "CSE and IT Courses in Serbia for Bangladeshis 2026",
    "description": "CSE and IT courses in Serbia for Bangladeshi students in 2026: computer science, software engineering and data science programmes, fees and careers."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Serbia", "href": "/study/serbia"}, {"name": "CSE & IT Courses", "href": "/study/serbia/cse-and-it-courses-in-serbia"}];
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
    "href": "/study/serbia/top-universities-in-serbia",
    "title": "Top Universities in Serbia for Bangladeshi Students",
    "description": "Top universities in Serbia for Bangladeshi students in 2026: Belgrade, Novi Sad, Niš, Kragujevac and private options with strengths and fit."
  },
  {
    "href": "/study/serbia/engineering-courses-in-serbia",
    "title": "Engineering Courses in Serbia for Bangladeshi Students",
    "description": "Engineering courses in Serbia for Bangladeshi students in 2026: mechanical, electrical, civil and computing programmes, universities and fees."
  },
  {
    "href": "/study/serbia/masters-and-phd-in-serbia-for-bangladeshi-students",
    "title": "Master's and PhD in Serbia for Bangladeshi Students",
    "description": "Master's and PhD study in Serbia for Bangladeshi students in 2026: English programmes, entry requirements, funding, supervisors and fees."
  },
  {
    "href": "/study/serbia/study-in-belgrade",
    "title": "Study in Belgrade for Bangladeshi Students: Universities, Costs, Life",
    "description": "Study in Belgrade in 2026: University of Belgrade, private universities, rent, transport, jobs and student life for Bangladeshi students."
  }
];
const FAQS = [
  {
    "q": "Is Serbia good for computer science?",
    "a": "It has strong technical faculties and an active IT sector, especially in Belgrade and Novi Sad."
  },
  {
    "q": "Are CSE programmes taught in English?",
    "a": "Some are; many are in Serbian, so check each programme."
  },
  {
    "q": "How much does a CSE degree cost?",
    "a": "Often EUR 2,000–5,000 a year for self-financed students; verify each call."
  },
  {
    "q": "Can I work in IT while studying?",
    "a": "Within the permitted hours for students with regulated stay."
  },
  {
    "q": "Is a scholarship available for CSE?",
    "a": "Possibly through World in Serbia or fee reductions."
  },
  {
    "q": "Do I need a laptop?",
    "a": "Yes, bring a reliable laptop and check programme needs."
  },
  {
    "q": "Are there internships?",
    "a": "Yes, mainly in Belgrade and Novi Sad, with competition."
  },
  {
    "q": "Is Serbian needed for IT jobs?",
    "a": "Not always, but it helps."
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
          "name": "CSE & IT Courses",
          "item": "https://eammu.com/study/serbia/cse-and-it-courses-in-serbia"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "CSE and IT Courses in Serbia for Bangladeshi Students (2026)",
      "description": "CSE and IT courses in Serbia for Bangladeshi students in 2026: computer science, software engineering and data science programmes, fees and careers.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/serbia/cse-and-it-courses-in-serbia",
      "keywords": "CSE in Serbia, computer science Serbia Bangladeshi, IT courses Serbia English, software engineering Serbia",
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
          "name": "Is Serbia good for computer science?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It has strong technical faculties and an active IT sector, especially in Belgrade and Novi Sad."
          }
        },
        {
          "@type": "Question",
          "name": "Are CSE programmes taught in English?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some are; many are in Serbian, so check each programme."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a CSE degree cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often EUR 2,000–5,000 a year for self-financed students; verify each call."
          }
        },
        {
          "@type": "Question",
          "name": "Can I work in IT while studying?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Within the permitted hours for students with regulated stay."
          }
        },
        {
          "@type": "Question",
          "name": "Is a scholarship available for CSE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possibly through World in Serbia or fee reductions."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a laptop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, bring a reliable laptop and check programme needs."
          }
        },
        {
          "@type": "Question",
          "name": "Are there internships?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, mainly in Belgrade and Novi Sad, with competition."
          }
        },
        {
          "@type": "Question",
          "name": "Is Serbian needed for IT jobs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not always, but it helps."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">CSE and IT Courses in Serbia for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Belgrade and Novi Sad have active IT sectors that make computing popular among international students.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Computing programmes exist at public universities and private institutions.</li><li>Math and English ability matter.</li><li>Belgrade and Novi Sad host the largest IT employers.</li><li>Check accreditation and the language of instruction.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#where-to-study-computing" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Where to study computing</a></li><li><a href="#typical-subjects" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Typical subjects</a></li><li><a href="#entry-and-costs" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Entry and costs</a></li><li><a href="#career-outlook" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Career outlook</a></li><li><a href="#building-a-portfolio" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Building a portfolio</a></li><li><a href="#skills-employers-expect" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Skills employers expect</a></li><li><a href="#choosing-between-a-public-and-a-private-it-programme" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Choosing between a public and a private IT programme</a></li></ol>
          </nav>

          <article>
<section id="where-to-study-computing" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Where to study computing</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">City</th><th scope="col" className="px-3 py-2 text-left font-bold">Institutions often considered</th><th scope="col" className="px-3 py-2 text-left font-bold">Notes</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Belgrade</td><td className="px-3 py-2 align-top">University of Belgrade faculties, Singidunum, Metropolitan</td><td className="px-3 py-2 align-top">Largest IT sector</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Novi Sad</td><td className="px-3 py-2 align-top">University of Novi Sad faculties</td><td className="px-3 py-2 align-top">Strong technical tradition</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Niš</td><td className="px-3 py-2 align-top">University of Niš</td><td className="px-3 py-2 align-top">Lower costs</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Kragujevac</td><td className="px-3 py-2 align-top">University of Kragujevac</td><td className="px-3 py-2 align-top">Engineering links</td></tr></tbody></table></div>
</section>
<section id="typical-subjects" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Typical subjects</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Software engineering and programming.</li><li>Data science and machine learning.</li><li>Cybersecurity and networks.</li><li>Business informatics.</li><li>Embedded systems.</li></ul>
</section>
<section id="entry-and-costs" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Entry and costs</h2>
<p className="mt-4 leading-7 text-slate-700">Strong maths and English proof are expected; see <Link href="/study/serbia/admission-requirements-in-serbia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link> and <Link href="/study/serbia/tuition-fees-in-serbia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees</Link>. Compare <Link href="/study/serbia/cost-of-living-in-serbia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">living costs</Link> across cities.</p>
</section>
<section id="career-outlook" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Career outlook</h2>
<p className="mt-4 leading-7 text-slate-700">Serbia has a growing IT outsourcing and product sector concentrated in Belgrade and Novi Sad. English-speaking roles exist but local language helps. See <Link href="/study/serbia/part-time-job-and-post-study-work-rules-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">work rules</Link>.</p>
</section>
<section id="building-a-portfolio" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Building a portfolio</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Join hackathons and open-source projects.</li><li>Look for internships during study.</li><li>Keep a GitHub portfolio.</li><li>Network at local meetups.</li></ul>
</section>
<section id="skills-employers-expect" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Skills employers expect</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Programming in several languages and version control.</li><li>Databases, cloud and DevOps basics.</li><li>Data structures and algorithms.</li><li>Communication and teamwork in English.</li><li>Portfolio projects on GitHub.</li></ul>
</section>
<section id="choosing-between-a-public-and-a-private-it-programme" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Choosing between a public and a private IT programme</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Factor</th><th scope="col" className="px-3 py-2 text-left font-bold">Public faculty</th><th scope="col" className="px-3 py-2 text-left font-bold">Private institution</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Fees</td><td className="px-3 py-2 align-top">Often lower</td><td className="px-3 py-2 align-top">Often higher</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Entry</td><td className="px-3 py-2 align-top">Entrance exams and ranking</td><td className="px-3 py-2 align-top">More flexible</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">English tracks</td><td className="px-3 py-2 align-top">Limited but growing</td><td className="px-3 py-2 align-top">More common</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Industry links</td><td className="px-3 py-2 align-top">Strong in major faculties</td><td className="px-3 py-2 align-top">Varies by institution</td></tr></tbody></table></div><p className="mt-4 leading-7 text-slate-700">Check accreditation in both cases and read <Link href="/study/serbia/public-vs-private-universities-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">public vs private universities</Link>.</p>
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
