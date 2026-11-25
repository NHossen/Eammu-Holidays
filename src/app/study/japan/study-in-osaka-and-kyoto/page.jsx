import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/study-in-osaka-and-kyoto';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Osaka and Kyoto for Bangladeshis 2026",
  "description": "Study in Osaka and Kyoto in 2026: Kyoto University, Osaka University, Ritsumeikan, costs and student life for Bangladeshi students.",
  "keywords": [
    "study in Osaka",
    "study in Kyoto",
    "Kyoto University Bangladeshi",
    "Kansai universities"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/study-in-osaka-and-kyoto"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Osaka and Kyoto for Bangladeshis 2026",
    "description": "Study in Osaka and Kyoto in 2026: Kyoto University, Osaka University, Ritsumeikan, costs and student life for Bangladeshi students.",
    "url": "https://eammu.com/study/japan/study-in-osaka-and-kyoto",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Osaka and Kyoto for Bangladeshis 2026",
    "description": "Study in Osaka and Kyoto in 2026: Kyoto University, Osaka University, Ritsumeikan, costs and student life for Bangladeshi students."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "Osaka & Kyoto", "href": "/study/japan/study-in-osaka-and-kyoto"}];
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
    "href": "/study/japan/study-in-tokyo",
    "title": "Study in Tokyo for Bangladeshi Students: Universities, Costs, Life",
    "description": "Study in Tokyo in 2026: universities, language schools, rent, transport, jobs and student life for Bangladeshi students in Japan's capital."
  },
  {
    "href": "/study/japan/study-in-fukuoka-and-other-cities",
    "title": "Study in Fukuoka, Sendai, Sapporo, Nagoya and Beppu: Regional Japan for Bangladeshi Students",
    "description": "Compare Fukuoka, Sendai, Sapporo, Nagoya and Beppu in 2026: universities, costs and student life for Bangladeshi students in regional Japan."
  },
  {
    "href": "/study/japan/top-universities-in-japan",
    "title": "Top Universities in Japan for Bangladeshi Students",
    "description": "Top universities in Japan for Bangladeshi students in 2026: Tokyo, Kyoto, Osaka, Tohoku, Nagoya, Waseda, Keio and Institute of Science Tokyo."
  },
  {
    "href": "/study/japan/cost-of-living-in-japan-for-bangladeshi-students",
    "title": "Cost of Living in Japan for Bangladeshi Students: Monthly Budget",
    "description": "Monthly cost of living in Japan for Bangladeshi students in 2026: rent, food, transport and insurance in Tokyo, Osaka, Kyoto and regional cities in JPY and BDT."
  }
];
const FAQS = [
  {
    "q": "Is Kyoto good for students?",
    "a": "Yes, it has many universities and a student-friendly atmosphere."
  },
  {
    "q": "Is Osaka cheaper than Tokyo?",
    "a": "Usually yes."
  },
  {
    "q": "Is Kansai good for engineering?",
    "a": "Yes, particularly Osaka."
  },
  {
    "q": "Are there language schools?",
    "a": "Yes, many in Osaka and Kyoto."
  },
  {
    "q": "How far is Tokyo?",
    "a": "About two to three hours by bullet train."
  },
  {
    "q": "Is halal food available?",
    "a": "Some options exist, especially in Osaka and Kobe."
  },
  {
    "q": "Is Kyoto crowded with tourists?",
    "a": "Yes in peak seasons, but student areas are calmer."
  },
  {
    "q": "Do I need Japanese?",
    "a": "It helps greatly."
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
          "name": "Osaka & Kyoto",
          "item": "https://eammu.com/study/japan/study-in-osaka-and-kyoto"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Osaka and Kyoto: Kansai Universities, Costs and Student Life (2026)",
      "description": "Study in Osaka and Kyoto in 2026: Kyoto University, Osaka University, Ritsumeikan, costs and student life for Bangladeshi students.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/study-in-osaka-and-kyoto",
      "keywords": "study in Osaka, study in Kyoto, Kyoto University Bangladeshi, Kansai universities",
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
          "name": "Is Kyoto good for students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, it has many universities and a student-friendly atmosphere."
          }
        },
        {
          "@type": "Question",
          "name": "Is Osaka cheaper than Tokyo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually yes."
          }
        },
        {
          "@type": "Question",
          "name": "Is Kansai good for engineering?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, particularly Osaka."
          }
        },
        {
          "@type": "Question",
          "name": "Are there language schools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, many in Osaka and Kyoto."
          }
        },
        {
          "@type": "Question",
          "name": "How far is Tokyo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "About two to three hours by bullet train."
          }
        },
        {
          "@type": "Question",
          "name": "Is halal food available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some options exist, especially in Osaka and Kobe."
          }
        },
        {
          "@type": "Question",
          "name": "Is Kyoto crowded with tourists?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes in peak seasons, but student areas are calmer."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need Japanese?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps greatly."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Osaka and Kyoto: Kansai Universities, Costs and Student Life (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">The Kansai region offers strong universities with lower costs than Tokyo.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Kyoto and Osaka host top research universities and many language schools.</li><li>Rents are lower than Tokyo.</li><li>Kobe adds universities and an old mosque.</li><li>Good travel links to Tokyo.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#universities" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Universities</a></li><li><a href="#costs" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Costs</a></li><li><a href="#student-life" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Student life</a></li><li><a href="#pros-and-cons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Pros and cons</a></li><li><a href="#example-monthly-budgets" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Example monthly budgets</a></li><li><a href="#getting-around-kansai" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Getting around Kansai</a></li></ol>
          </nav>

          <article>
<section id="universities" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Universities</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">City</th><th scope="col" className="px-3 py-2 text-left font-bold">Universities</th><th scope="col" className="px-3 py-2 text-left font-bold">Known for</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Kyoto</td><td className="px-3 py-2 align-top">Kyoto University, Ritsumeikan, Doshisha</td><td className="px-3 py-2 align-top">Science, humanities, culture</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Osaka</td><td className="px-3 py-2 align-top">Osaka University, Kansai University</td><td className="px-3 py-2 align-top">Engineering, medicine, business</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Kobe</td><td className="px-3 py-2 align-top">Kobe University</td><td className="px-3 py-2 align-top">Business, engineering</td></tr></tbody></table></div>
</section>
<section id="costs" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Costs</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Expense</th><th scope="col" className="px-3 py-2 text-left font-bold">JPY (per month)</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT approx. (per month)</th><th scope="col" className="px-3 py-2 text-left font-bold">What to check</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Shared house or small apartment</td><td className="px-3 py-2 align-top">JPY 45,000 – 85,000</td><td className="px-3 py-2 align-top">Tk 36,000 – 68,000</td><td className="px-3 py-2 align-top">Lower than Tokyo</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Food</td><td className="px-3 py-2 align-top">JPY 27,000 – 42,000</td><td className="px-3 py-2 align-top">Tk 21,600 – 33,600</td><td className="px-3 py-2 align-top">Cooking at home</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 JPY = about Tk 0.80 (roughly USD 1 = JPY 150) and are indicative planning estimates for 2026–2027, based on published university pages and Japanese official guidance. Fees, funds rules and exchange rates change, so always confirm with the school, the Immigration Services Agency of Japan (moj.go.jp/isa), the Embassy of Japan in Dhaka and an Eammu Holidays counselor before paying anything.</p>
</section>
<section id="student-life" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Student life</h2>
<p className="mt-4 leading-7 text-slate-700">Kansai offers a balance of culture, student communities and lower costs. See <Link href="/study/japan/halal-food-and-bangladeshi-community-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">community guide</Link> for food and prayer options.</p>
</section>
<section id="pros-and-cons" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Pros and cons</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Pros: lower costs than Tokyo, strong research, culture.</li><li>Cons: fewer English-speaking jobs than Tokyo.</li><li>Compare with <Link href="/study/japan/study-in-tokyo" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Tokyo</Link> and <Link href="/study/japan/study-in-fukuoka-and-other-cities" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">other cities</Link>.</li></ul>
</section>
<section id="example-monthly-budgets" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Example monthly budgets</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">City</th><th scope="col" className="px-3 py-2 text-left font-bold">Frugal budget</th><th scope="col" className="px-3 py-2 text-left font-bold">Comfortable budget</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Osaka</td><td className="px-3 py-2 align-top">JPY 90,000 – 110,000</td><td className="px-3 py-2 align-top">JPY 120,000 – 150,000</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Kyoto</td><td className="px-3 py-2 align-top">JPY 90,000 – 110,000</td><td className="px-3 py-2 align-top">JPY 120,000 – 150,000</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 JPY = about Tk 0.80 (roughly USD 1 = JPY 150) and are indicative planning estimates for 2026–2027, based on published university pages and Japanese official guidance. Fees, funds rules and exchange rates change, so always confirm with the school, the Immigration Services Agency of Japan (moj.go.jp/isa), the Embassy of Japan in Dhaka and an Eammu Holidays counselor before paying anything.</p>
</section>
<section id="getting-around-kansai" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Getting around Kansai</h2>
<p className="mt-4 leading-7 text-slate-700">Trains link Kyoto, Osaka and Kobe, and many students live in one city and study in another. Commuter passes reduce costs.</p>
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
