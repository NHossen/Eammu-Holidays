import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/serbia/cheapest-universities-in-serbia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Cheapest Universities in Serbia 2026 for Bangladeshis",
  "description": "How to find the cheapest universities in Serbia in 2026: low-fee public faculties, regional cities, hidden costs and a checklist for Bangladeshi students.",
  "keywords": [
    "cheapest universities in Serbia",
    "low cost universities Serbia",
    "affordable study Serbia Bangladesh"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/serbia/cheapest-universities-in-serbia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Cheapest Universities in Serbia 2026 for Bangladeshis",
    "description": "How to find the cheapest universities in Serbia in 2026: low-fee public faculties, regional cities, hidden costs and a checklist for Bangladeshi students.",
    "url": "https://eammu.com/study/serbia/cheapest-universities-in-serbia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Cheapest Universities in Serbia 2026 for Bangladeshis",
    "description": "How to find the cheapest universities in Serbia in 2026: low-fee public faculties, regional cities, hidden costs and a checklist for Bangladeshi students."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Serbia", "href": "/study/serbia"}, {"name": "Cheapest Universities", "href": "/study/serbia/cheapest-universities-in-serbia"}];
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
    "href": "/study/serbia/tuition-fees-in-serbia-for-bangladeshi-students",
    "title": "Tuition Fees in Serbia for Bangladeshi Students in EUR and BDT",
    "description": "Tuition fees in Serbia for Bangladeshi students in 2026: bachelor, master, PhD and medicine in EUR and BDT, plus fee waivers and hidden costs."
  },
  {
    "href": "/study/serbia/study-in-nis-and-kragujevac",
    "title": "Study in Niš and Kragujevac: Serbia's Regional University Cities",
    "description": "Compare Niš and Kragujevac in 2026: University of Niš, University of Kragujevac, medicine, engineering, costs and student life for Bangladeshis."
  },
  {
    "href": "/study/serbia/university-scholarships-and-fee-waivers-in-serbia",
    "title": "University Scholarships and Fee Waivers in Serbia for International Students",
    "description": "University scholarships and fee waivers in Serbia in 2026: ranking-based tuition reductions, merit discounts and how Bangladeshi students can qualify."
  },
  {
    "href": "/study/serbia/top-universities-in-serbia",
    "title": "Top Universities in Serbia for Bangladeshi Students",
    "description": "Top universities in Serbia for Bangladeshi students in 2026: Belgrade, Novi Sad, Niš, Kragujevac and private options with strengths and fit."
  }
];
const FAQS = [
  {
    "q": "Which is the cheapest university in Serbia?",
    "a": "It depends on programme and year. Compare official fees across public universities and add living costs."
  },
  {
    "q": "Are Serbian universities cheaper than Hungarian ones?",
    "a": "Often similar or slightly cheaper for tuition and living costs, but it depends on the programme."
  },
  {
    "q": "Are cheap private colleges worth it?",
    "a": "Only if the institution and programme are accredited and fit your career plan."
  },
  {
    "q": "Can I get a fee waiver?",
    "a": "Some faculties give partial reductions for ranking, as seen in University of Belgrade master's calls. Ask each faculty."
  },
  {
    "q": "Is Niš cheaper than Belgrade?",
    "a": "Usually yes for rent and daily costs."
  },
  {
    "q": "Does cheap tuition affect visa approval?",
    "a": "No, but you must still prove funds and genuine study intent."
  },
  {
    "q": "Can I find cheap English-taught programmes?",
    "a": "They exist, but the choice is narrower than for Serbian-language programmes; check each faculty."
  },
  {
    "q": "Should I choose by price alone?",
    "a": "No. Consider accreditation, recognition at home, language and career outcomes."
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
          "name": "Cheapest Universities",
          "item": "https://eammu.com/study/serbia/cheapest-universities-in-serbia"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Cheapest Universities in Serbia for Bangladeshi Students (2026)",
      "description": "How to find the cheapest universities in Serbia in 2026: low-fee public faculties, regional cities, hidden costs and a checklist for Bangladeshi students.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/serbia/cheapest-universities-in-serbia",
      "keywords": "cheapest universities in Serbia, low cost universities Serbia, affordable study Serbia Bangladesh",
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
          "name": "Which is the cheapest university in Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on programme and year. Compare official fees across public universities and add living costs."
          }
        },
        {
          "@type": "Question",
          "name": "Are Serbian universities cheaper than Hungarian ones?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often similar or slightly cheaper for tuition and living costs, but it depends on the programme."
          }
        },
        {
          "@type": "Question",
          "name": "Are cheap private colleges worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only if the institution and programme are accredited and fit your career plan."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a fee waiver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some faculties give partial reductions for ranking, as seen in University of Belgrade master's calls. Ask each faculty."
          }
        },
        {
          "@type": "Question",
          "name": "Is Niš cheaper than Belgrade?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually yes for rent and daily costs."
          }
        },
        {
          "@type": "Question",
          "name": "Does cheap tuition affect visa approval?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, but you must still prove funds and genuine study intent."
          }
        },
        {
          "@type": "Question",
          "name": "Can I find cheap English-taught programmes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They exist, but the choice is narrower than for Serbian-language programmes; check each faculty."
          }
        },
        {
          "@type": "Question",
          "name": "Should I choose by price alone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Consider accreditation, recognition at home, language and career outcomes."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Cheapest Universities in Serbia for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Low fees are only half the story. Here is how to find affordable Serbian universities without unpleasant surprises.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Public universities in Niš, Kragujevac and Novi Sad often combine moderate tuition with lower living costs.</li><li>Compare tuition, administration fees, rent and transport.</li><li>Fees change every year, so verify on the faculty&apos;s own call.</li><li>Avoid unaccredited institutions.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#where-to-look-first" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Where to look first</a></li><li><a href="#total-cost-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Total-cost checklist</a></li><li><a href="#programme-types-that-tend-to-cost-less" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Programme types that tend to cost less</a></li><li><a href="#red-flags" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Red flags</a></li><li><a href="#cost-comparison-framework" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cost comparison framework</a></li><li><a href="#cheap-does-not-mean-easy" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cheap does not mean easy</a></li></ol>
          </nav>

          <article>
<section id="where-to-look-first" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Where to look first</h2>
<p className="mt-4 leading-7 text-slate-700">The University of Niš, University of Kragujevac, University of Novi Sad and University of Belgrade are the four large public universities. Belgrade has the widest range, but regional universities often offer lower living costs. Compare them in <Link href="/study/serbia/top-universities-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Serbia</Link> and the city guides for <Link href="/study/serbia/study-in-nis-and-kragujevac" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Niš and Kragujevac</Link> and <Link href="/study/serbia/study-in-novi-sad" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Novi Sad</Link>.</p>
</section>
<section id="total-cost-checklist" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Total-cost checklist</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Annual tuition on the faculty&apos;s official call.</li><li>Application, enrolment and recognition fees.</li><li>Dormitory availability and price.</li><li>City rent and transport from <Link href="/study/serbia/cost-of-living-in-serbia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living</Link>.</li><li>Scholarships or fee waivers, see <Link href="/study/serbia/university-scholarships-and-fee-waivers-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">fee waivers</Link>.</li><li>Part-time work limits under <Link href="/study/serbia/part-time-job-and-post-study-work-rules-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">work rules</Link>.</li></ol>
</section>
<section id="programme-types-that-tend-to-cost-less" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Programme types that tend to cost less</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Social sciences, humanities and languages at public faculties.</li><li>Some engineering and agriculture programmes in regional centres.</li><li>Master&apos;s programmes with partial fee reductions for strong grades.</li></ul>
</section>
<section id="red-flags" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Red flags</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Fees far below every comparable programme.</li><li>No named accredited institution on your offer.</li><li>Requests to pay individuals instead of the university.</li><li>Promises about work permits or immigration outcomes.</li></ul><p className="mt-4 leading-7 text-slate-700">Read <Link href="/study/serbia/public-vs-private-universities-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">public vs private universities</Link> to understand accreditation before you pay.</p>
</section>
<section id="cost-comparison-framework" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Cost comparison framework</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Cost element</th><th scope="col" className="px-3 py-2 text-left font-bold">Belgrade</th><th scope="col" className="px-3 py-2 text-left font-bold">Regional city</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tuition</td><td className="px-3 py-2 align-top">Varies by faculty</td><td className="px-3 py-2 align-top">Often similar or lower</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Rent</td><td className="px-3 py-2 align-top">Highest</td><td className="px-3 py-2 align-top">Lower</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Transport</td><td className="px-3 py-2 align-top">Passes needed</td><td className="px-3 py-2 align-top">Often walkable</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Job market</td><td className="px-3 py-2 align-top">Largest</td><td className="px-3 py-2 align-top">Smaller</td></tr></tbody></table></div>
</section>
<section id="cheap-does-not-mean-easy" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Cheap does not mean easy</h2>
<p className="mt-4 leading-7 text-slate-700">Lower cost can come with fewer English-taught options, fewer support services or a smaller job market. Read <Link href="/study/serbia/top-universities-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities</Link> and talk to current students before deciding.</p>
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
