import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/cost-of-living-in-japan-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Cost of Living in Japan for Bangladeshi Students 2026",
  "description": "Monthly cost of living in Japan for Bangladeshi students in 2026: rent, food, transport and insurance in Tokyo, Osaka, Kyoto and regional cities in JPY and BDT.",
  "keywords": [
    "cost of living in Japan",
    "Tokyo student cost of living",
    "Japan student budget",
    "living cost Japan BDT"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/cost-of-living-in-japan-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Cost of Living in Japan for Bangladeshi Students 2026",
    "description": "Monthly cost of living in Japan for Bangladeshi students in 2026: rent, food, transport and insurance in Tokyo, Osaka, Kyoto and regional cities in JPY and BDT.",
    "url": "https://eammu.com/study/japan/cost-of-living-in-japan-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Cost of Living in Japan for Bangladeshi Students 2026",
    "description": "Monthly cost of living in Japan for Bangladeshi students in 2026: rent, food, transport and insurance in Tokyo, Osaka, Kyoto and regional cities in JPY and BDT."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "Cost of Living", "href": "/study/japan/cost-of-living-in-japan-for-bangladeshi-students"}];
const NAV = [
  {
    "label": "Japan Hub",
    "pages": [
      {
        "href": "/study/japan",
        "label": "Study in Japan Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/japan/study-in-japan-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/japan/study-in-japan-in-english-without-japanese",
        "label": "English & Without Japanese"
      },
      {
        "href": "/study/japan/tuition-fees-in-japan-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/japan/cost-of-living-in-japan-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/japan/affordable-universities-in-japan",
        "label": "Affordable Universities"
      },
      {
        "href": "/study/japan/top-universities-in-japan",
        "label": "Top Universities"
      },
      {
        "href": "/study/japan/national-vs-private-universities-in-japan",
        "label": "National vs Private Universities"
      },
      {
        "href": "/study/japan/admission-requirements-in-japan-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/japan/study-gap-and-japan-student-visa",
        "label": "Study Gap & Japan Visa"
      },
      {
        "href": "/study/japan/study-in-japan-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/japan/study-in-japan-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/japan/japan-intake-dates",
        "label": "Intake Dates"
      },
      {
        "href": "/study/japan/japan-vs-south-korea-vs-germany-for-bangladeshi-students",
        "label": "Japan vs South Korea vs Germany"
      }
    ]
  },
  {
    "label": "Scholarships & Funding",
    "pages": [
      {
        "href": "/study/japan/scholarships-in-japan-for-bangladeshi-students",
        "label": "Scholarships Overview"
      },
      {
        "href": "/study/japan/mext-scholarship-guide-for-bangladeshi-students",
        "label": "MEXT Scholarship Guide"
      },
      {
        "href": "/study/japan/mext-eligibility-and-deadlines",
        "label": "MEXT Eligibility & Deadlines"
      },
      {
        "href": "/study/japan/mext-embassy-vs-university-recommendation",
        "label": "Embassy vs University Recommendation"
      },
      {
        "href": "/study/japan/jasso-and-university-scholarships-in-japan",
        "label": "JASSO & University Scholarships"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/japan/how-to-apply-to-japanese-universities",
        "label": "How to Apply (Step by Step)"
      },
      {
        "href": "/study/japan/degree-recognition-and-eligibility-in-japan",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/japan/bachelors-in-japan-for-bangladeshi-students",
        "label": "Bachelor's Degrees"
      },
      {
        "href": "/study/japan/masters-and-phd-in-japan-for-bangladeshi-students",
        "label": "Master's & PhD"
      },
      {
        "href": "/study/japan/english-taught-programs-in-japan",
        "label": "English-Taught Programmes"
      },
      {
        "href": "/study/japan/japanese-language-schools-in-japan",
        "label": "Japanese Language Schools"
      },
      {
        "href": "/study/japan/japanese-language-requirements-for-bangladeshi-students",
        "label": "Japanese Language Requirements"
      },
      {
        "href": "/study/japan/cse-and-it-courses-in-japan",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/japan/engineering-courses-in-japan",
        "label": "Engineering Courses"
      },
      {
        "href": "/study/japan/mba-and-business-degrees-in-japan",
        "label": "MBA & Business"
      },
      {
        "href": "/study/japan/kosen-and-vocational-colleges-in-japan",
        "label": "KOSEN & Vocational Colleges"
      },
      {
        "href": "/study/japan/sop-and-study-plan-for-japan",
        "label": "SOP & Study Plan"
      },
      {
        "href": "/study/japan/eju-exam-for-japanese-universities",
        "label": "EJU Exam"
      }
    ]
  },
  {
    "label": "Cities & Student Life",
    "pages": [
      {
        "href": "/study/japan/student-accommodation-in-japan",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/japan/study-in-tokyo",
        "label": "Study in Tokyo"
      },
      {
        "href": "/study/japan/study-in-osaka-and-kyoto",
        "label": "Osaka & Kyoto"
      },
      {
        "href": "/study/japan/study-in-fukuoka-and-other-cities",
        "label": "Fukuoka & Other Cities"
      },
      {
        "href": "/study/japan/health-insurance-for-students-in-japan",
        "label": "Health Insurance"
      },
      {
        "href": "/study/japan/halal-food-and-bangladeshi-community-in-japan",
        "label": "Halal Food & Community"
      },
      {
        "href": "/study/japan/life-in-japan-for-international-students",
        "label": "Life in Japan"
      },
      {
        "href": "/study/japan/japan-bank-account-phone-and-residence-card",
        "label": "Bank, Phone & Residence Card"
      }
    ]
  },
  {
    "label": "Visa, COE & Work Rules",
    "pages": [
      {
        "href": "/study/japan/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/japan/certificate-of-eligibility-coe-guide",
        "label": "COE Guide"
      },
      {
        "href": "/study/japan/japan-student-visa-application-guide-dhaka",
        "label": "Dhaka Visa Application Guide"
      },
      {
        "href": "/study/japan/japan-student-documents-checklist",
        "label": "Documents Checklist"
      },
      {
        "href": "/study/japan/financial-proof-requirements-for-japan-student-visa",
        "label": "Financial Proof"
      },
      {
        "href": "/study/japan/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/japan/japan-student-visa-refusal-reasons",
        "label": "Visa Refusal Reasons"
      },
      {
        "href": "/study/japan/part-time-job-rules-for-students-in-japan",
        "label": "Part-Time Job Rules"
      },
      {
        "href": "/study/japan/post-study-work-and-job-hunting-visa-in-japan",
        "label": "Post-Study Work & Job Hunting"
      },
      {
        "href": "/study/japan/bring-family-to-japan-as-a-student",
        "label": "Family & Dependents"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/japan/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/japan/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/japan/tuition-fees-in-japan-for-bangladeshi-students",
    "title": "Tuition Fees in Japan for Bangladeshi Students in JPY and BDT",
    "description": "Tuition fees in Japan for Bangladeshi students in 2026: national and private universities, graduate school and language schools in yen and BDT."
  },
  {
    "href": "/study/japan/student-accommodation-in-japan",
    "title": "Student Accommodation in Japan for Bangladeshi Students",
    "description": "Student accommodation in Japan for Bangladeshi students in 2026: dormitories, share houses, apartments and costs in JPY and BDT, plus scam warnings."
  },
  {
    "href": "/study/japan/study-in-tokyo",
    "title": "Study in Tokyo for Bangladeshi Students: Universities, Costs, Life",
    "description": "Study in Tokyo in 2026: universities, language schools, rent, transport, jobs and student life for Bangladeshi students in Japan's capital."
  },
  {
    "href": "/study/japan/financial-proof-requirements-for-japan-student-visa",
    "title": "Financial Proof and Sponsor Rules for a Japan Student Visa",
    "description": "Financial proof for a Japan student visa in 2026: how Bangladeshi students should show funds, sponsor documents, planning estimates and common mistakes."
  }
];
const FAQS = [
  {
    "q": "How much money do I need per month in Japan?",
    "a": "Plan about JPY 90,000–150,000 depending on city and housing, excluding tuition."
  },
  {
    "q": "Which Japanese city is cheapest for students?",
    "a": "Regional cities such as Fukuoka, Sapporo, Sendai and smaller university towns are usually cheaper than Tokyo."
  },
  {
    "q": "Can I live on part-time work in Japan?",
    "a": "No. Work is capped at 28 hours a week in term and you should not rely on it for core costs."
  },
  {
    "q": "Is public transport expensive?",
    "a": "It can be, but commuter passes and bicycles reduce costs."
  },
  {
    "q": "How much is a dorm in Japan?",
    "a": "University dorms often cost JPY 30,000–65,000 a month; availability is limited."
  },
  {
    "q": "Are there hidden move-in costs?",
    "a": "Yes, private rentals may require deposits, key money, agent fees and guarantor fees."
  },
  {
    "q": "Is Japan cheaper than Hungary or Serbia?",
    "a": "Generally no; living and visa costs are higher, though scholarships and wages differ."
  },
  {
    "q": "Do I need cash in Japan?",
    "a": "Cards are common but cash is still widely used, so carry some yen."
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
          "name": "Japan",
          "item": "https://eammu.com/study/japan"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Cost of Living",
          "item": "https://eammu.com/study/japan/cost-of-living-in-japan-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Cost of Living in Japan for Bangladeshi Students (2026): Monthly Budget",
      "description": "Monthly cost of living in Japan for Bangladeshi students in 2026: rent, food, transport and insurance in Tokyo, Osaka, Kyoto and regional cities in JPY and BDT.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/cost-of-living-in-japan-for-bangladeshi-students",
      "keywords": "cost of living in Japan, Tokyo student cost of living, Japan student budget, living cost Japan BDT",
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
          "name": "How much money do I need per month in Japan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plan about JPY 90,000–150,000 depending on city and housing, excluding tuition."
          }
        },
        {
          "@type": "Question",
          "name": "Which Japanese city is cheapest for students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Regional cities such as Fukuoka, Sapporo, Sendai and smaller university towns are usually cheaper than Tokyo."
          }
        },
        {
          "@type": "Question",
          "name": "Can I live on part-time work in Japan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Work is capped at 28 hours a week in term and you should not rely on it for core costs."
          }
        },
        {
          "@type": "Question",
          "name": "Is public transport expensive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be, but commuter passes and bicycles reduce costs."
          }
        },
        {
          "@type": "Question",
          "name": "How much is a dorm in Japan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "University dorms often cost JPY 30,000–65,000 a month; availability is limited."
          }
        },
        {
          "@type": "Question",
          "name": "Are there hidden move-in costs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, private rentals may require deposits, key money, agent fees and guarantor fees."
          }
        },
        {
          "@type": "Question",
          "name": "Is Japan cheaper than Hungary or Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally no; living and visa costs are higher, though scholarships and wages differ."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need cash in Japan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cards are common but cash is still widely used, so carry some yen."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Japan 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Cost of Living in Japan for Bangladeshi Students (2026): Monthly Budget</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A realistic monthly budget in yen and taka, with differences between Tokyo and regional cities.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} counseling team &middot; Updated <time dateTime="2026-11-22">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Japan guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 64 Japan guides</summary>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Expect roughly JPY 90,000–150,000 a month; Tokyo is the most expensive.</li><li>Housing is the biggest cost, often with deposits and key money in private rentals.</li><li>Public transport is efficient but can be costly; student commuter passes reduce cost.</li><li>Part-time work can help but should not be your main funding source.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#monthly-budget-indicative" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Monthly budget (indicative)</a></li><li><a href="#city-differences" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">City differences</a></li><li><a href="#move-in-costs-to-plan-for" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Move-in costs to plan for</a></li><li><a href="#money-saving-tips" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Money-saving tips</a></li><li><a href="#cost-of-living-and-your-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cost of living and your visa</a></li></ol>
          </nav>

          <article>
<section id="monthly-budget-indicative" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Monthly budget (indicative)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Expense</th><th scope="col" className="px-3 py-2 text-left font-bold">JPY (per month)</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT approx. (per month)</th><th scope="col" className="px-3 py-2 text-left font-bold">What to check</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">University dormitory or shared house</td><td className="px-3 py-2 align-top">JPY 30,000 – 65,000</td><td className="px-3 py-2 align-top">Tk 24,000 – 52,000</td><td className="px-3 py-2 align-top">Cheapest; places limited</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Private studio apartment</td><td className="px-3 py-2 align-top">JPY 50,000 – 90,000</td><td className="px-3 py-2 align-top">Tk 40,000 – 72,000</td><td className="px-3 py-2 align-top">Plus deposit and fees at move-in</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Food and groceries</td><td className="px-3 py-2 align-top">JPY 25,000 – 40,000</td><td className="px-3 py-2 align-top">Tk 20,000 – 32,000</td><td className="px-3 py-2 align-top">Cooking at home</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Transport</td><td className="px-3 py-2 align-top">JPY 5,000 – 15,000</td><td className="px-3 py-2 align-top">Tk 4,000 – 12,000</td><td className="px-3 py-2 align-top">Commuter pass or bicycle</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Phone and internet</td><td className="px-3 py-2 align-top">JPY 3,000 – 7,000</td><td className="px-3 py-2 align-top">Tk 2,400 – 5,600</td><td className="px-3 py-2 align-top">Budget SIM or plan</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Health insurance and pension</td><td className="px-3 py-2 align-top">JPY 2,000 – 5,000</td><td className="px-3 py-2 align-top">Tk 1,600 – 4,000</td><td className="px-3 py-2 align-top">Varies by city; exemptions may apply</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Study materials and personal</td><td className="px-3 py-2 align-top">JPY 8,000 – 15,000</td><td className="px-3 py-2 align-top">Tk 6,400 – 12,000</td><td className="px-3 py-2 align-top">Books, clothing, activities</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 JPY = about Tk 0.80 (roughly USD 1 = JPY 150) and are indicative planning estimates for 2026–2027, based on published university pages and Japanese official guidance. Fees, funds rules and exchange rates change, so always confirm with the school, the Immigration Services Agency of Japan (moj.go.jp/isa), the Embassy of Japan in Dhaka and an Eammu Holidays counselor before paying anything.</p>
</section>
<section id="city-differences" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">City differences</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">City type</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical monthly total</th><th scope="col" className="px-3 py-2 text-left font-bold">Notes</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tokyo area</td><td className="px-3 py-2 align-top">JPY 120,000 – 160,000</td><td className="px-3 py-2 align-top">Highest rent and transport</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Osaka, Kyoto, Nagoya</td><td className="px-3 py-2 align-top">JPY 95,000 – 130,000</td><td className="px-3 py-2 align-top">Mid-range</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Fukuoka, Sapporo, Sendai and regional cities</td><td className="px-3 py-2 align-top">JPY 80,000 – 110,000</td><td className="px-3 py-2 align-top">Lower rent and daily costs</td></tr></tbody></table></div>
</section>
<section id="move-in-costs-to-plan-for" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Move-in costs to plan for</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Deposit and key money in some private rentals.</li><li>Guarantor company fee for renters without a Japanese guarantor.</li><li>Furniture, bedding and appliances.</li><li>First-month transport pass and phone SIM.</li><li>Winter clothing for northern cities.</li></ul>
</section>
<section id="money-saving-tips" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Money-saving tips</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Apply early for a university dormitory.</li><li>Choose a regional city.</li><li>Cook at home and shop at discount supermarkets.</li><li>Use student discounts and commuter passes.</li><li>Find halal food via the <Link href="/study/japan/halal-food-and-bangladeshi-community-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">community guide</Link>.</li></ul>
</section>
<section id="cost-of-living-and-your-visa" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Cost of living and your visa</h2>
<p className="mt-4 leading-7 text-slate-700">Immigration officers ask how you will pay for living costs. See <Link href="/study/japan/financial-proof-requirements-for-japan-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">financial proof</Link>, <Link href="/study/japan/student-accommodation-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">accommodation</Link> and <Link href="/study/japan/part-time-job-rules-for-students-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">part-time work rules</Link>.</p>
</section>
          </article>

          <section className="mt-12" aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="text-xl font-bold text-emerald-900">Official sources to verify before you pay or apply</h2>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-6 text-slate-700"><li><a href="https://www.studyinjapan.go.jp/en/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Study in Japan – official portal (JASSO)</a></li><li><a href="https://www.bd.emb-japan.go.jp/en/visa/visainfohowto.html" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Embassy of Japan in Bangladesh – visa information</a></li><li><a href="https://www.moj.go.jp/isa/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Immigration Services Agency of Japan</a></li><li><a href="https://visa.vfsglobal.com/bgd/en/jpn" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">VFS Global – Japan visa application centre, Dhaka</a></li><li><a href="https://www.bd.emb-japan.go.jp/itpr_en/scholarshipnotice.html" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Embassy of Japan in Bangladesh – scholarships (MEXT)</a></li></ul>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Japan Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Japan</h2>
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
