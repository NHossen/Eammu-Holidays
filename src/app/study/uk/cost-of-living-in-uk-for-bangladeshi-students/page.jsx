import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/uk/cost-of-living-in-uk-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Cost of Living in UK for Bangladeshi Students | Eammu Holidays",
  "description": "Monthly cost of living in the UK for Bangladeshi students in 2026: rent, food, transport, bills, London vs other cities, with GBP and BDT budgets.",
  "alternates": {
    "canonical": "https://eammu.com/study/uk/cost-of-living-in-uk-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Cost of Living in UK for Bangladeshi Students | Eammu Holidays",
    "description": "Monthly cost of living in the UK for Bangladeshi students in 2026: rent, food, transport, bills, London vs other cities, with GBP and BDT budgets.",
    "url": "https://eammu.com/study/uk/cost-of-living-in-uk-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Cost of Living in UK for Bangladeshi Students | Eammu Holidays",
    "description": "Monthly cost of living in the UK for Bangladeshi students in 2026: rent, food, transport, bills, London vs other cities, with GBP and BDT budgets."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "UK", "href": "/study/uk"}, {"name": "Cost of Living", "href": "/study/uk/cost-of-living-in-uk-for-bangladeshi-students"}];
const NAV = [
  {
    "label": "UK Hub",
    "pages": [
      {
        "href": "/study/uk",
        "label": "Study in UK Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/uk/study-in-uk-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/uk/study-in-uk-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/uk/tuition-fees-in-uk-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/uk/cost-of-living-in-uk-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/uk/cheapest-universities-in-uk",
        "label": "Affordable Universities"
      },
      {
        "href": "/study/uk/top-universities-in-uk",
        "label": "Top Universities"
      },
      {
        "href": "/study/uk/russell-group-vs-modern-universities-in-uk",
        "label": "Russell Group vs Modern"
      },
      {
        "href": "/study/uk/foundation-and-pathway-programmes-in-uk",
        "label": "Foundation and Pathway"
      },
      {
        "href": "/study/uk/scholarships-in-uk-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/uk/chevening-scholarship-guide-for-bangladeshi-students",
        "label": "Chevening Guide"
      },
      {
        "href": "/study/uk/commonwealth-and-great-scholarships-for-bangladesh",
        "label": "Commonwealth and GREAT"
      },
      {
        "href": "/study/uk/admission-requirements-in-uk-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/uk/study-gap-accepted-universities-in-uk",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/uk/study-in-uk-after-hsc",
        "label": "After HSC"
      },
      {
        "href": "/study/uk/study-in-uk-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/uk/uk-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Applications, Tests & Offers",
    "pages": [
      {
        "href": "/study/uk/ucas-application-guide-for-bangladeshi-students",
        "label": "UCAS Application Guide"
      },
      {
        "href": "/study/uk/postgraduate-direct-application-guide-for-uk",
        "label": "Postgraduate Application Guide"
      },
      {
        "href": "/study/uk/personal-statement-and-references-guide-for-uk",
        "label": "Personal Statement and References"
      },
      {
        "href": "/study/uk/ielts-ukvi-pte-and-english-tests-for-uk",
        "label": "IELTS, PTE and English Tests"
      },
      {
        "href": "/study/uk/degree-recognition-and-uk-enic-equivalence",
        "label": "Degree Recognition and UK ENIC"
      },
      {
        "href": "/study/uk/conditional-and-unconditional-offers-explained",
        "label": "Offers Explained"
      }
    ]
  },
  {
    "label": "Programmes & Student Life",
    "pages": [
      {
        "href": "/study/uk/cse-and-it-courses-in-uk",
        "label": "CSE and IT Courses"
      },
      {
        "href": "/study/uk/masters-in-uk-for-bangladeshi-students",
        "label": "Master's in UK"
      },
      {
        "href": "/study/uk/mba-in-uk-for-bangladeshi-students",
        "label": "MBA in UK"
      },
      {
        "href": "/study/uk/phd-in-uk-for-bangladeshi-students",
        "label": "PhD in UK"
      },
      {
        "href": "/study/uk/medicine-and-plab-pathway-in-uk-for-bangladeshi-students",
        "label": "Medicine and PLAB Pathway"
      },
      {
        "href": "/study/uk/engineering-courses-in-uk-for-bangladeshi-students",
        "label": "Engineering Courses"
      },
      {
        "href": "/study/uk/business-finance-and-data-analytics-in-uk",
        "label": "Business, Finance and Analytics"
      },
      {
        "href": "/study/uk/best-cities-to-study-in-uk",
        "label": "Best Cities to Study"
      },
      {
        "href": "/study/uk/student-accommodation-in-uk",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/uk/halal-food-and-student-life-in-uk-for-bangladeshis",
        "label": "Halal Food and Student Life"
      },
      {
        "href": "/study/uk/nhs-and-immigration-health-surcharge-for-students",
        "label": "NHS and Health Surcharge"
      },
      {
        "href": "/study/uk/banking-and-sending-money-to-uk-from-bangladesh",
        "label": "Banking and Sending Money"
      },
      {
        "href": "/study/uk/avoid-scams-and-agent-risks-in-uk-admissions",
        "label": "Avoid Scams and Agent Risks"
      }
    ]
  },
  {
    "label": "Student Visa, Work & Graduate Route",
    "pages": [
      {
        "href": "/study/uk/uk-student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/uk/cas-explained-for-uk-student-visa",
        "label": "CAS Explained"
      },
      {
        "href": "/study/uk/maintenance-funds-and-28-day-rule-for-uk-student-visa",
        "label": "Maintenance Funds and 28-Day Rule"
      },
      {
        "href": "/study/uk/uk-student-visa-processing-time-and-cost",
        "label": "Visa Time and Cost"
      },
      {
        "href": "/study/uk/uk-student-visa-interview-and-credibility-tips",
        "label": "Credibility Interview Tips"
      },
      {
        "href": "/study/uk/uk-student-visa-refusal-reasons-and-reapplication",
        "label": "Visa Refusal and Reapplication"
      },
      {
        "href": "/study/uk/tb-test-biometrics-and-vfs-for-bangladesh",
        "label": "TB Test and Biometrics"
      },
      {
        "href": "/study/uk/dependants-on-uk-student-visa",
        "label": "Dependants on Student Visa"
      },
      {
        "href": "/study/uk/part-time-work-rules-for-students-in-uk",
        "label": "Part-Time Work Rules"
      },
      {
        "href": "/study/uk/graduate-route-and-post-study-work-in-uk",
        "label": "Graduate Route"
      },
      {
        "href": "/study/uk/uk-student-visa-rule-changes-2026",
        "label": "Visa Rule Changes 2026"
      },
      {
        "href": "/study/uk/pre-departure-checklist-for-uk-students",
        "label": "Pre-Departure Checklist"
      },
      {
        "href": "/study/uk/maintaining-student-visa-status-in-uk",
        "label": "Maintaining Visa Status"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/uk/bangladesh-offices",
        "label": "Bangladesh Offices and Support"
      },
      {
        "href": "/study/uk/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/uk/student-accommodation-in-uk",
    "title": "Student Accommodation in the UK: Halls, Shared Houses and Rental Tips",
    "description": "Halls, shared houses, deposits and scam warnings."
  },
  {
    "href": "/study/uk/best-cities-to-study-in-uk",
    "title": "Best Cities to Study in the UK for Bangladeshi Students",
    "description": "Cost, jobs and community by UK city."
  },
  {
    "href": "/study/uk/maintenance-funds-and-28-day-rule-for-uk-student-visa",
    "title": "Maintenance Funds and the 28-Day Rule for the UK Student Visa (From 30 November 2026)",
    "description": "Funds amounts, the 28-day rule and accepted evidence."
  },
  {
    "href": "/study/uk/halal-food-and-student-life-in-uk-for-bangladeshis",
    "title": "Halal Food, Prayer and Student Life in the UK for Bangladeshi Students",
    "description": "Halal food, prayer spaces and community."
  }
];
const FAQS = [
  {
    "q": "How much do I need per month in the UK?",
    "a": "Budget about £1,000 to £1,500 a month outside London and £1,400 to £2,200 in London, depending on housing and lifestyle."
  },
  {
    "q": "Is the visa funds figure the same as my real budget?",
    "a": "No. The visa figure is a minimum, and real costs can be higher, especially in London."
  },
  {
    "q": "How much is public transport?",
    "a": "Student railcards and local bus passes reduce costs. Many students walk or cycle if they live near campus."
  },
  {
    "q": "Can part-time work cover living costs?",
    "a": "Only partly. Hours are capped and wages vary, so do not plan to pay tuition from work."
  },
  {
    "q": "How much should I keep as an emergency fund?",
    "a": "Many students aim for one to two months of living costs in a UK account after arrival."
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
          "name": "UK",
          "item": "https://eammu.com/study/uk"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Cost of Living",
          "item": "https://eammu.com/study/uk/cost-of-living-in-uk-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Cost of Living in the UK for Bangladeshi Students (2026 Monthly Budget)",
      "description": "Monthly cost of living in the UK for Bangladeshi students in 2026: rent, food, transport, bills, London vs other cities, with GBP and BDT budgets.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/uk/cost-of-living-in-uk-for-bangladeshi-students",
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
          "name": "How much do I need per month in the UK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget about £1,000 to £1,500 a month outside London and £1,400 to £2,200 in London, depending on housing and lifestyle."
          }
        },
        {
          "@type": "Question",
          "name": "Is the visa funds figure the same as my real budget?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The visa figure is a minimum, and real costs can be higher, especially in London."
          }
        },
        {
          "@type": "Question",
          "name": "How much is public transport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Student railcards and local bus passes reduce costs. Many students walk or cycle if they live near campus."
          }
        },
        {
          "@type": "Question",
          "name": "Can part-time work cover living costs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only partly. Hours are capped and wages vary, so do not plan to pay tuition from work."
          }
        },
        {
          "@type": "Question",
          "name": "How much should I keep as an emergency fund?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many students aim for one to two months of living costs in a UK account after arrival."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in the UK 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Cost of Living in the UK for Bangladeshi Students (2026 Monthly Budget)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">What rent, food, transport and bills cost in London and outside it, with monthly budgets in pounds and taka.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-22">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in the UK guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 63 UK guides</summary>
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
          <article>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Monthly budget by city type</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">City type</th><th scope="col" className="px-3 py-2 text-left font-bold">Monthly budget (GBP)</th><th scope="col" className="px-3 py-2 text-left font-bold">Monthly budget (BDT)</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Lower-cost cities (for example Sheffield, Coventry, Newcastle)</td><td className="px-3 py-2 align-top">£1,000 – £1,400</td><td className="px-3 py-2 align-top">Tk 1.6 – 2.3 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Mid-cost cities (for example Manchester, Birmingham, Leeds, Glasgow)</td><td className="px-3 py-2 align-top">£1,200 – £1,700</td><td className="px-3 py-2 align-top">Tk 2 – 2.8 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">London</td><td className="px-3 py-2 align-top">£1,500 – £2,300</td><td className="px-3 py-2 align-top">Tk 2.5 – 3.8 lakh</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 GBP = about Tk 165 and are indicative estimates for the 2026–2027 intake. Fees, scholarship rules, test dates, visa policy and exchange rates change, so always confirm with the university, official US government sources or an Eammu Holidays counselor before paying anything.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Line-by-line costs</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">Monthly (GBP)</th><th scope="col" className="px-3 py-2 text-left font-bold">Monthly (BDT)</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Room in shared housing outside London</td><td className="px-3 py-2 align-top">£450 – £800</td><td className="px-3 py-2 align-top">Tk 74,250 – 1.3 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Room in shared housing in London</td><td className="px-3 py-2 align-top">£800 – £1,400</td><td className="px-3 py-2 align-top">Tk 1.3 – 2.3 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Food and groceries</td><td className="px-3 py-2 align-top">£200 – £350</td><td className="px-3 py-2 align-top">Tk 33,000 – 57,750</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Phone and internet</td><td className="px-3 py-2 align-top">£15 – £40</td><td className="px-3 py-2 align-top">Tk 2,475 – 6,600</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Transport</td><td className="px-3 py-2 align-top">£30 – £150</td><td className="px-3 py-2 align-top">Tk 4,950 – 24,750</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Personal costs and leisure</td><td className="px-3 py-2 align-top">£80 – £200</td><td className="px-3 py-2 align-top">Tk 13,200 – 33,000</td></tr></tbody></table></div>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Ways students save money</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Choose shared housing and cook at home.</li><li>Use student discounts and railcards.</li><li>Buy groceries at discount supermarkets.</li><li>Compare banks and mobile plans for student deals.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">One-time arrival costs</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Flight from Dhaka, often Tk 70,000 to Tk 1.4 lakh one way depending on season.</li><li>Deposit and first month of rent, often several hundred pounds or more.</li><li>Winter coat, bedding and electrical adaptors.</li><li>A small emergency fund for the first weeks.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Seasonal and hidden costs</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Heating and energy bills in winter.</li><li>Course materials and printing.</li><li>Council tax is usually exempt for full-time students but check your accommodation.</li><li>Flights home and travel during breaks.</li><li>Dental, eye and prescription charges.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Official sources to confirm this information</h2>
<p className="mt-4 leading-7 text-slate-700">Policies, fees, funds amounts and university recruitment rules change. Before you act on anything on this page, check the current version at:</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>The university&apos;s official admissions and fees pages</li><li>gov.uk student visa and Immigration Health Surcharge pages</li><li>British Council Study UK (study-uk.britishcouncil.org)</li><li>Chevening (chevening.org) and Commonwealth Scholarship Commission websites</li></ul>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays reviews these pages regularly, last updated November 2026, but official sources always take priority.</p>
</section>
          </article>

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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related UK Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in the UK</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and scholarship shortlist, UK Student visa (CAS and funds) preparation and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
