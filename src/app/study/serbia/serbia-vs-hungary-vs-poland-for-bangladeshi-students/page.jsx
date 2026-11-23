import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/serbia/serbia-vs-hungary-vs-poland-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Serbia vs Hungary vs Poland for Bangladeshi Students",
  "description": "Compare Serbia, Hungary and Poland for Bangladeshi students in 2026: tuition, living costs, scholarships, work rules, Schengen status and visa routes.",
  "keywords": [
    "Serbia vs Hungary",
    "Serbia vs Poland for Bangladeshi students",
    "cheapest country to study in Europe"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/serbia/serbia-vs-hungary-vs-poland-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Serbia vs Hungary vs Poland for Bangladeshi Students",
    "description": "Compare Serbia, Hungary and Poland for Bangladeshi students in 2026: tuition, living costs, scholarships, work rules, Schengen status and visa routes.",
    "url": "https://eammu.com/study/serbia/serbia-vs-hungary-vs-poland-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Serbia vs Hungary vs Poland for Bangladeshi Students",
    "description": "Compare Serbia, Hungary and Poland for Bangladeshi students in 2026: tuition, living costs, scholarships, work rules, Schengen status and visa routes."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Serbia", "href": "/study/serbia"}, {"name": "Serbia vs Hungary vs Poland", "href": "/study/serbia/serbia-vs-hungary-vs-poland-for-bangladeshi-students"}];
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
    "href": "/study/serbia/study-in-serbia-from-bangladesh",
    "title": "Study in Serbia from Bangladesh: 2026 Roadmap, Costs and Visa Steps",
    "description": "Step-by-step roadmap to study in Serbia from Bangladesh in 2026: eligibility, costs in BDT, scholarships, admission, D-visa and arrival in Serbia."
  },
  {
    "href": "/study/serbia/tuition-fees-in-serbia-for-bangladeshi-students",
    "title": "Tuition Fees in Serbia for Bangladeshi Students in EUR and BDT",
    "description": "Tuition fees in Serbia for Bangladeshi students in 2026: bachelor, master, PhD and medicine in EUR and BDT, plus fee waivers and hidden costs."
  },
  {
    "href": "/study/serbia/world-in-serbia-scholarship-guide",
    "title": "World in Serbia Scholarship for Bangladeshi Students: Full Guide",
    "description": "World in Serbia scholarship guide for Bangladeshi students: who can apply, benefits, Serbian language year, public universities and common mistakes."
  },
  {
    "href": "/study/serbia/cost-of-living-in-serbia-for-bangladeshi-students",
    "title": "Cost of Living in Serbia for Bangladeshi Students: Monthly Budget",
    "description": "Monthly cost of living in Serbia for Bangladeshi students in 2026: rent, food, transport and insurance in Belgrade, Novi Sad, Niš and Kragujevac."
  }
];
const FAQS = [
  {
    "q": "Is Serbia cheaper than Hungary?",
    "a": "Often yes for tuition and some living costs, but costs depend on programme and city."
  },
  {
    "q": "Is Serbia in the EU?",
    "a": "No. It is an EU candidate country and is not part of Schengen."
  },
  {
    "q": "Which country has better scholarships?",
    "a": "Hungary's Stipendium Hungaricum is larger; Serbia's World in Serbia is smaller but targeted at Non-Aligned Movement countries including Bangladesh."
  },
  {
    "q": "Which is easier for the visa?",
    "a": "It depends on your file and the mission handling your case. Both need a D-visa, and Serbia's mission for Bangladesh is not in Dhaka."
  },
  {
    "q": "Can I move to the EU after studying in Serbia?",
    "a": "Not automatically. Rights depend on each country's rules."
  },
  {
    "q": "Which country is best for IT?",
    "a": "All three have IT strengths; compare programmes and funding."
  },
  {
    "q": "Which country is best for medicine?",
    "a": "Compare fees, recognition and licensing rules in Bangladesh before choosing."
  },
  {
    "q": "Should I apply to more than one country?",
    "a": "It is possible but track deadlines and fees; speak to a counselor."
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
          "name": "Serbia vs Hungary vs Poland",
          "item": "https://eammu.com/study/serbia/serbia-vs-hungary-vs-poland-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Serbia vs Hungary vs Poland for Bangladeshi Students (2026)",
      "description": "Compare Serbia, Hungary and Poland for Bangladeshi students in 2026: tuition, living costs, scholarships, work rules, Schengen status and visa routes.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/serbia/serbia-vs-hungary-vs-poland-for-bangladeshi-students",
      "keywords": "Serbia vs Hungary, Serbia vs Poland for Bangladeshi students, cheapest country to study in Europe",
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
          "name": "Is Serbia cheaper than Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often yes for tuition and some living costs, but costs depend on programme and city."
          }
        },
        {
          "@type": "Question",
          "name": "Is Serbia in the EU?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. It is an EU candidate country and is not part of Schengen."
          }
        },
        {
          "@type": "Question",
          "name": "Which country has better scholarships?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hungary's Stipendium Hungaricum is larger; Serbia's World in Serbia is smaller but targeted at Non-Aligned Movement countries including Bangladesh."
          }
        },
        {
          "@type": "Question",
          "name": "Which is easier for the visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your file and the mission handling your case. Both need a D-visa, and Serbia's mission for Bangladesh is not in Dhaka."
          }
        },
        {
          "@type": "Question",
          "name": "Can I move to the EU after studying in Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Rights depend on each country's rules."
          }
        },
        {
          "@type": "Question",
          "name": "Which country is best for IT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All three have IT strengths; compare programmes and funding."
          }
        },
        {
          "@type": "Question",
          "name": "Which country is best for medicine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Compare fees, recognition and licensing rules in Bangladesh before choosing."
          }
        },
        {
          "@type": "Question",
          "name": "Should I apply to more than one country?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is possible but track deadlines and fees; speak to a counselor."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Serbia vs Hungary vs Poland for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A balanced comparison of three popular and affordable European study destinations.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Serbia is non-EU and non-Schengen; Hungary and Poland are EU and Schengen countries.</li><li>Serbia&apos;s tuition and living costs are low, but graduate job markets are smaller.</li><li>Hungary offers the Stipendium Hungaricum scholarship; Serbia offers World in Serbia.</li><li>Pick by budget, field, long-term plan and visa feasibility.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#side-by-side-comparison" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Side-by-side comparison</a></li><li><a href="#where-serbia-wins" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Where Serbia wins</a></li><li><a href="#where-others-may-win" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Where others may win</a></li><li><a href="#choosing-by-student-profile" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Choosing by student profile</a></li><li><a href="#budget-comparison-for-a-typical-master-s-student" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Budget comparison for a typical master&apos;s student</a></li></ol>
          </nav>

          <article>
<section id="side-by-side-comparison" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Side-by-side comparison</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Factor</th><th scope="col" className="px-3 py-2 text-left font-bold">Serbia</th><th scope="col" className="px-3 py-2 text-left font-bold">Hungary</th><th scope="col" className="px-3 py-2 text-left font-bold">Poland</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">EU / Schengen</td><td className="px-3 py-2 align-top">EU candidate; not in Schengen</td><td className="px-3 py-2 align-top">EU and Schengen</td><td className="px-3 py-2 align-top">EU and Schengen</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tuition for non-EU students</td><td className="px-3 py-2 align-top">Low to moderate</td><td className="px-3 py-2 align-top">Moderate; free with scholarship</td><td className="px-3 py-2 align-top">Moderate</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs</td><td className="px-3 py-2 align-top">Lower</td><td className="px-3 py-2 align-top">Lower to moderate</td><td className="px-3 py-2 align-top">Moderate</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Main scholarship</td><td className="px-3 py-2 align-top">World in Serbia (NAM countries)</td><td className="px-3 py-2 align-top">Stipendium Hungaricum</td><td className="px-3 py-2 align-top">Various, including NAWA programmes</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Work during study</td><td className="px-3 py-2 align-top">Up to 16 h/week (check)</td><td className="px-3 py-2 align-top">Up to 30 h/week in term</td><td className="px-3 py-2 align-top">Rules differ; check</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Family reunification for students</td><td className="px-3 py-2 align-top">Possible on a family basis (conditions apply)</td><td className="px-3 py-2 align-top">Not allowed for student permits</td><td className="px-3 py-2 align-top">Rules differ; check</td></tr></tbody></table></div><p className="mt-4 leading-7 text-slate-700">Details change often. For Hungary, read our full <Link href="/study/hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Study in Hungary hub</Link>. Confirm Poland&apos;s rules from its official sources.</p>
</section>
<section id="where-serbia-wins" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Where Serbia wins</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Very low tuition and living costs.</li><li>A government scholarship aimed at Non-Aligned Movement countries.</li><li>Established universities with English medicine tracks.</li><li>Fewer applicants competing for some programmes.</li></ul>
</section>
<section id="where-others-may-win" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Where others may win</h2>
<p className="mt-4 leading-7 text-slate-700">Hungary and Poland are part of the EU single market and Schengen area, which can make onward travel and later work in other EU countries simpler, though not automatic. Hungary also has a larger menu of English-taught programmes and a bigger scholarship programme. Serbia&apos;s post-study options depend on Serbian residence and work rules; see <Link href="/study/serbia/part-time-job-and-post-study-work-rules-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">work rules in Serbia</Link>.</p>
</section>
<section id="choosing-by-student-profile" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Choosing by student profile</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Budget-first student aiming at a specific Serbian faculty: Serbia.</li><li>Student wanting Schengen access and a large scholarship: Hungary.</li><li>Student who values EU job market access: Hungary or Poland.</li><li>Medical aspirant: compare fees, recognition and licensing in all three.</li></ul>
</section>
<section id="budget-comparison-for-a-typical-master-s-student" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Budget comparison for a typical master&apos;s student</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Cost</th><th scope="col" className="px-3 py-2 text-left font-bold">Serbia</th><th scope="col" className="px-3 py-2 text-left font-bold">Hungary</th><th scope="col" className="px-3 py-2 text-left font-bold">Poland</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Annual tuition range</td><td className="px-3 py-2 align-top">Low to moderate</td><td className="px-3 py-2 align-top">Moderate</td><td className="px-3 py-2 align-top">Moderate</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Monthly living cost</td><td className="px-3 py-2 align-top">Lower</td><td className="px-3 py-2 align-top">Lower to moderate</td><td className="px-3 py-2 align-top">Moderate</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Visa step</td><td className="px-3 py-2 align-top">D-visa via mission covering Bangladesh</td><td className="px-3 py-2 align-top">D-visa via visa centre</td><td className="px-3 py-2 align-top">National visa; check rules</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Comparison is qualitative and changes with policy. Check each country&apos;s official sources.</p>
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
