import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/serbia/scholarships-in-serbia-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Scholarships in Serbia for Bangladeshi Students 2026",
  "description": "Scholarships in Serbia for Bangladeshi students in 2026: World in Serbia, university fee reductions, PhD funding and how to avoid scholarship scams.",
  "keywords": [
    "scholarships in Serbia",
    "Serbia scholarship for Bangladeshi students",
    "fully funded scholarship Serbia",
    "World in Serbia scholarship"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/serbia/scholarships-in-serbia-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Scholarships in Serbia for Bangladeshi Students 2026",
    "description": "Scholarships in Serbia for Bangladeshi students in 2026: World in Serbia, university fee reductions, PhD funding and how to avoid scholarship scams.",
    "url": "https://eammu.com/study/serbia/scholarships-in-serbia-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Scholarships in Serbia for Bangladeshi Students 2026",
    "description": "Scholarships in Serbia for Bangladeshi students in 2026: World in Serbia, university fee reductions, PhD funding and how to avoid scholarship scams."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Serbia", "href": "/study/serbia"}, {"name": "Scholarships Overview", "href": "/study/serbia/scholarships-in-serbia-for-bangladeshi-students"}];
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
    "href": "/study/serbia/world-in-serbia-scholarship-guide",
    "title": "World in Serbia Scholarship for Bangladeshi Students: Full Guide",
    "description": "World in Serbia scholarship guide for Bangladeshi students: who can apply, benefits, Serbian language year, public universities and common mistakes."
  },
  {
    "href": "/study/serbia/world-in-serbia-eligibility-and-deadlines",
    "title": "World in Serbia Eligibility, Deadlines and Documents (2026–2027)",
    "description": "World in Serbia eligibility, deadlines and documents for Bangladeshi applicants: NAM countries, age, language, certificates and where to find calls."
  },
  {
    "href": "/study/serbia/university-scholarships-and-fee-waivers-in-serbia",
    "title": "University Scholarships and Fee Waivers in Serbia for International Students",
    "description": "University scholarships and fee waivers in Serbia in 2026: ranking-based tuition reductions, merit discounts and how Bangladeshi students can qualify."
  },
  {
    "href": "/study/serbia/tuition-fees-in-serbia-for-bangladeshi-students",
    "title": "Tuition Fees in Serbia for Bangladeshi Students in EUR and BDT",
    "description": "Tuition fees in Serbia for Bangladeshi students in 2026: bachelor, master, PhD and medicine in EUR and BDT, plus fee waivers and hidden costs."
  }
];
const FAQS = [
  {
    "q": "Is there a scholarship in Serbia for Bangladeshi students?",
    "a": "Yes. World in Serbia is the main government route for candidates from eligible countries, and faculties also give fee reductions."
  },
  {
    "q": "Is World in Serbia fully funded?",
    "a": "It is designed to provide tuition-free study at public universities with support set by the call. Read the current call for benefits."
  },
  {
    "q": "When do scholarship calls open?",
    "a": "Calls are announced yearly by the Ministry of Education; timing varies."
  },
  {
    "q": "Can I apply for a scholarship and self-finance as back-up?",
    "a": "Yes, many students apply separately to faculties as well."
  },
  {
    "q": "Do scholarship students need Serbian?",
    "a": "The programme includes Serbian language learning, and consultations in English are possible at some universities."
  },
  {
    "q": "Does Eammu charge for scholarship applications?",
    "a": "Counseling is a service; the scholarship itself is never for sale."
  },
  {
    "q": "How many scholarships are given?",
    "a": "Numbers vary by year and call, and are limited. Check the current announcement."
  },
  {
    "q": "Can I hold two scholarships?",
    "a": "Rules depend on each scholarship. Declare awards honestly."
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
          "name": "Scholarships Overview",
          "item": "https://eammu.com/study/serbia/scholarships-in-serbia-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Scholarships in Serbia for Bangladeshi Students (2026): Complete Overview",
      "description": "Scholarships in Serbia for Bangladeshi students in 2026: World in Serbia, university fee reductions, PhD funding and how to avoid scholarship scams.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/serbia/scholarships-in-serbia-for-bangladeshi-students",
      "keywords": "scholarships in Serbia, Serbia scholarship for Bangladeshi students, fully funded scholarship Serbia, World in Serbia scholarship",
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
          "name": "Is there a scholarship in Serbia for Bangladeshi students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. World in Serbia is the main government route for candidates from eligible countries, and faculties also give fee reductions."
          }
        },
        {
          "@type": "Question",
          "name": "Is World in Serbia fully funded?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is designed to provide tuition-free study at public universities with support set by the call. Read the current call for benefits."
          }
        },
        {
          "@type": "Question",
          "name": "When do scholarship calls open?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Calls are announced yearly by the Ministry of Education; timing varies."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply for a scholarship and self-finance as back-up?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, many students apply separately to faculties as well."
          }
        },
        {
          "@type": "Question",
          "name": "Do scholarship students need Serbian?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The programme includes Serbian language learning, and consultations in English are possible at some universities."
          }
        },
        {
          "@type": "Question",
          "name": "Does Eammu charge for scholarship applications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Counseling is a service; the scholarship itself is never for sale."
          }
        },
        {
          "@type": "Question",
          "name": "How many scholarships are given?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Numbers vary by year and call, and are limited. Check the current announcement."
          }
        },
        {
          "@type": "Question",
          "name": "Can I hold two scholarships?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rules depend on each scholarship. Declare awards honestly."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Scholarships in Serbia for Bangladeshi Students (2026): Complete Overview</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">The government&apos;s World in Serbia programme is the headline route, but fee reductions and project funding also matter.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>World in Serbia is a Government of Serbia scholarship for candidates from Non-Aligned Movement member and observer states; Bangladesh is a NAM member.</li><li>Calls are announced each year by the Ministry of Education and handled through Serbian diplomatic and consular offices.</li><li>Faculties also offer partial fee reductions based on ranking, for example in some University of Belgrade master&apos;s programmes.</li><li>No genuine scholarship requires payment to an agent for selection.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#main-scholarship-routes" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Main scholarship routes</a></li><li><a href="#how-world-in-serbia-fits-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How World in Serbia fits Bangladeshi students</a></li><li><a href="#other-ways-to-lower-costs" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Other ways to lower costs</a></li><li><a href="#how-to-improve-your-chances" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to improve your chances</a></li><li><a href="#scholarship-scams" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Scholarship scams</a></li><li><a href="#scholarship-timeline-for-bangladeshi-applicants" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Scholarship timeline for Bangladeshi applicants</a></li><li><a href="#what-to-do-if-you-are-not-selected" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What to do if you are not selected</a></li></ol>
          </nav>

          <article>
<section id="main-scholarship-routes" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Main scholarship routes</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Route</th><th scope="col" className="px-3 py-2 text-left font-bold">Who it suits</th><th scope="col" className="px-3 py-2 text-left font-bold">What it may cover</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">World in Serbia (Government of Serbia)</td><td className="px-3 py-2 align-top">Candidates from eligible NAM countries; study of Serbian language and degree enrolment at public universities</td><td className="px-3 py-2 align-top">Tuition-free study and support as set in the annual call</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Faculty fee reductions</td><td className="px-3 py-2 align-top">High-ranking applicants</td><td className="px-3 py-2 align-top">Partial reduction of tuition, for example up to 25 or 50 percent in some calls</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">PhD or project positions</td><td className="px-3 py-2 align-top">Research-oriented applicants</td><td className="px-3 py-2 align-top">Stipend or project funding, varies</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">External scholarships</td><td className="px-3 py-2 align-top">Specific sponsors or fields</td><td className="px-3 py-2 align-top">Varies</td></tr></tbody></table></div>
</section>
<section id="how-world-in-serbia-fits-bangladeshi-students" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How World in Serbia fits Bangladeshi students</h2>
<p className="mt-4 leading-7 text-slate-700">The Ministry of Education states that the Government of Serbia awards scholarships so that foreign students can study free of charge at public universities, and that about 650 students currently study in Serbia under the programme. Read <Link href="/study/serbia/world-in-serbia-scholarship-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the World in Serbia guide</Link> and <Link href="/study/serbia/world-in-serbia-eligibility-and-deadlines" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">eligibility and deadlines</Link>.</p>
</section>
<section id="other-ways-to-lower-costs" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Other ways to lower costs</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Fee reductions: see <Link href="/study/serbia/university-scholarships-and-fee-waivers-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">university scholarships and fee waivers</Link>.</li><li>Lower-cost cities: see <Link href="/study/serbia/cheapest-universities-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cheapest universities</Link>.</li><li>Master&apos;s and PhD funding: see <Link href="/study/serbia/masters-and-phd-in-serbia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">master&apos;s and PhD</Link>.</li></ul>
</section>
<section id="how-to-improve-your-chances" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to improve your chances</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Apply early and read the current call carefully.</li><li>Prepare a clear <Link href="/study/serbia/sop-and-motivation-letter-for-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">motivation letter</Link>.</li><li>Keep academic documents and language evidence ready.</li><li>Have a self-financed back-up plan.</li></ul>
</section>
<section id="scholarship-scams" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Scholarship scams</h2>
<p className="mt-4 leading-7 text-slate-700">Never pay anyone for a guaranteed scholarship. Official calls are free to read and are published on Serbian government and mission websites. Check the sources at the bottom of this page and read <Link href="/study/serbia/serbia-student-visa-refusal-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa refusal reasons</Link> to avoid risky shortcuts.</p>
</section>
<section id="scholarship-timeline-for-bangladeshi-applicants" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Scholarship timeline for Bangladeshi applicants</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">When</th><th scope="col" className="px-3 py-2 text-left font-bold">Action</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Autumn</td><td className="px-3 py-2 align-top">Read last year&apos;s call and prepare documents</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Spring</td><td className="px-3 py-2 align-top">Watch for the Ministry of Education announcement</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Call period</td><td className="px-3 py-2 align-top">Submit through the channel named in the call</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Summer</td><td className="px-3 py-2 align-top">Selection and university placement</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Late summer</td><td className="px-3 py-2 align-top">D-visa and travel</td></tr></tbody></table></div>
</section>
<section id="what-to-do-if-you-are-not-selected" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What to do if you are not selected</h2>
<p className="mt-4 leading-7 text-slate-700">Many students apply again with a stronger profile or pivot to a self-financed route with a fee reduction. See <Link href="/study/serbia/cheapest-universities-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cheapest universities</Link> and <Link href="/study/serbia/university-scholarships-and-fee-waivers-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">fee waivers</Link>.</p>
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
