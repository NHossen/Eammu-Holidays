import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Tuition Fees in Hungary for Bangladeshi Students 2026",
  "description": "Tuition fees in Hungary for Bangladeshi students in 2026: bachelor, master, PhD and medicine fees in EUR and BDT, plus scholarship savings.",
  "keywords": [
    "tuition fees in Hungary",
    "Hungary university fees for international students",
    "Hungary tuition BDT",
    "cheap tuition Europe"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Tuition Fees in Hungary for Bangladeshi Students 2026",
    "description": "Tuition fees in Hungary for Bangladeshi students in 2026: bachelor, master, PhD and medicine fees in EUR and BDT, plus scholarship savings.",
    "url": "https://eammu.com/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Tuition Fees in Hungary for Bangladeshi Students 2026",
    "description": "Tuition fees in Hungary for Bangladeshi students in 2026: bachelor, master, PhD and medicine fees in EUR and BDT, plus scholarship savings."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Tuition Fees", "href": "/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students"}];
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
    "href": "/study/hungary/cost-of-living-in-hungary-for-bangladeshi-students",
    "title": "Cost of Living in Hungary for Bangladeshi Students: Monthly Budget",
    "description": "Monthly cost of living in Hungary for Bangladeshi students in 2026: rent, food, transport and phone in Budapest, Debrecen, Szeged and Pécs in EUR and BDT."
  },
  {
    "href": "/study/hungary/cheapest-universities-in-hungary",
    "title": "Cheapest Universities in Hungary for Bangladeshi Students",
    "description": "How to find the cheapest universities in Hungary in 2026: low-fee regional public universities, hidden costs and a checklist for Bangladeshi students."
  },
  {
    "href": "/study/hungary/scholarships-in-hungary-for-bangladeshi-students",
    "title": "Scholarships in Hungary for Bangladeshi Students: Complete Overview",
    "description": "Scholarships in Hungary for Bangladeshi students in 2026: Stipendium Hungaricum, university scholarships, PhD funding and how to avoid scholarship scams."
  },
  {
    "href": "/study/hungary/bank-solvency-requirements-for-hungary-student-visa",
    "title": "Proof of Funds and Bank Solvency for a Hungary Student Visa",
    "description": "Proof of funds for a Hungary student visa in 2026: how Bangladeshi students should show means of subsistence, sponsor rules and planning estimates."
  }
];
const FAQS = [
  {
    "q": "How much is tuition in Hungary for international students?",
    "a": "Roughly EUR 2,000–7,000 a year for most non-medical programmes at public universities; medicine is around EUR 14,000–20,000."
  },
  {
    "q": "Is tuition free in Hungary for Bangladeshis?",
    "a": "Only for scholarship holders, mainly Stipendium Hungaricum recipients. Self-financed students pay tuition."
  },
  {
    "q": "Are private universities more expensive?",
    "a": "Often yes, and they also need extra checking for state recognition and visa suitability."
  },
  {
    "q": "Can I pay tuition per semester?",
    "a": "Many universities allow semester payment, but rules differ. Confirm with the finance office."
  },
  {
    "q": "Do tuition fees rise every year?",
    "a": "Some universities adjust fees annually. Ask whether your fee is fixed for the programme."
  },
  {
    "q": "What is the cheapest degree in Hungary?",
    "a": "Humanities and some business and engineering programmes at regional public universities tend to cost less, but compare the total budget."
  },
  {
    "q": "Do Hungarian universities offer instalments?",
    "a": "Many allow semester payments; some allow further instalments. Ask the finance office."
  },
  {
    "q": "Is the application fee refundable?",
    "a": "Usually not. Confirm before you pay."
  },
  {
    "q": "Are tuition fees tax-deductible in Bangladesh?",
    "a": "Rules vary. Ask a Bangladeshi tax professional."
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
          "name": "Tuition Fees",
          "item": "https://eammu.com/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Tuition Fees in Hungary for Bangladeshi Students (2026) in EUR and BDT",
      "description": "Tuition fees in Hungary for Bangladeshi students in 2026: bachelor, master, PhD and medicine fees in EUR and BDT, plus scholarship savings.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students",
      "keywords": "tuition fees in Hungary, Hungary university fees for international students, Hungary tuition BDT, cheap tuition Europe",
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
          "name": "How much is tuition in Hungary for international students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roughly EUR 2,000–7,000 a year for most non-medical programmes at public universities; medicine is around EUR 14,000–20,000."
          }
        },
        {
          "@type": "Question",
          "name": "Is tuition free in Hungary for Bangladeshis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only for scholarship holders, mainly Stipendium Hungaricum recipients. Self-financed students pay tuition."
          }
        },
        {
          "@type": "Question",
          "name": "Are private universities more expensive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often yes, and they also need extra checking for state recognition and visa suitability."
          }
        },
        {
          "@type": "Question",
          "name": "Can I pay tuition per semester?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many universities allow semester payment, but rules differ. Confirm with the finance office."
          }
        },
        {
          "@type": "Question",
          "name": "Do tuition fees rise every year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some universities adjust fees annually. Ask whether your fee is fixed for the programme."
          }
        },
        {
          "@type": "Question",
          "name": "What is the cheapest degree in Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Humanities and some business and engineering programmes at regional public universities tend to cost less, but compare the total budget."
          }
        },
        {
          "@type": "Question",
          "name": "Do Hungarian universities offer instalments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many allow semester payments; some allow further instalments. Ask the finance office."
          }
        },
        {
          "@type": "Question",
          "name": "Is the application fee refundable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually not. Confirm before you pay."
          }
        },
        {
          "@type": "Question",
          "name": "Are tuition fees tax-deductible in Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rules vary. Ask a Bangladeshi tax professional."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Hungary 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Tuition Fees in Hungary for Bangladeshi Students (2026) in EUR and BDT</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">What Hungarian degrees cost per year in euros and taka, and how scholarships change the picture.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Most non-medical programmes cost roughly EUR 2,000–7,000 a year; medicine and dentistry cost far more.</li><li>Stipendium Hungaricum covers tuition fully for selected students.</li><li>Fees vary by university and programme, and some universities charge application or enrolment fees.</li><li>Always get the fee in writing on your offer letter.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#indicative-annual-tuition-by-level" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Indicative annual tuition by level</a></li><li><a href="#what-is-usually-not-included" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What is usually not included</a></li><li><a href="#how-to-reduce-tuition" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to reduce tuition</a></li><li><a href="#paying-tuition-safely" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Paying tuition safely</a></li><li><a href="#tuition-and-the-visa-file" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Tuition and the visa file</a></li><li><a href="#why-fees-differ-so-much" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Why fees differ so much</a></li><li><a href="#budget-example-for-three-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Budget example for three students</a></li><li><a href="#questions-to-ask-the-admissions-office" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Questions to ask the admissions office</a></li></ol>
          </nav>

          <article>
<section id="indicative-annual-tuition-by-level" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Indicative annual tuition by level</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Programme</th><th scope="col" className="px-3 py-2 text-left font-bold">EUR (per year)</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT approx. (per year)</th><th scope="col" className="px-3 py-2 text-left font-bold">What to check</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor&apos;s (business, humanities)</td><td className="px-3 py-2 align-top">EUR 2,000 – 5,000</td><td className="px-3 py-2 align-top">Tk 2,80,000 – 7,00,000</td><td className="px-3 py-2 align-top">Public universities usually lower</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor&apos;s (engineering, IT)</td><td className="px-3 py-2 align-top">EUR 2,500 – 6,500</td><td className="px-3 py-2 align-top">Tk 3,50,000 – 9,10,000</td><td className="px-3 py-2 align-top">Check lab or practical fees</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Master&apos;s (most fields)</td><td className="px-3 py-2 align-top">EUR 2,500 – 7,000</td><td className="px-3 py-2 align-top">Tk 3,50,000 – 9,80,000</td><td className="px-3 py-2 align-top">Some specialised programmes cost more</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">PhD (self-financed)</td><td className="px-3 py-2 align-top">EUR 2,500 – 7,000</td><td className="px-3 py-2 align-top">Tk 3,50,000 – 9,80,000</td><td className="px-3 py-2 align-top">Many PhD places are funded</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Medicine / dentistry</td><td className="px-3 py-2 align-top">EUR 14,000 – 20,000</td><td className="px-3 py-2 align-top">Tk 19,60,000 – 28,00,000</td><td className="px-3 py-2 align-top">Six-year programmes; entrance exam</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Pharmacy</td><td className="px-3 py-2 align-top">EUR 6,000 – 11,000</td><td className="px-3 py-2 align-top">Tk 8,40,000 – 15,40,000</td><td className="px-3 py-2 align-top">Five-year programme</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 EUR = about HUF 400 = about Tk 140 and are indicative planning estimates for 2026–2027, based on published university pages and Hungarian immigration guidance. Fees, funds rules and exchange rates change, so always confirm with the university, the Hungarian immigration authority (oif.gov.hu) and an Eammu Holidays counselor before paying anything.</p>
</section>
<section id="what-is-usually-not-included" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What is usually not included</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Application, registration or entrance exam fees.</li><li>Accommodation and meals.</li><li>Health insurance or the monthly health service contribution.</li><li>Books, lab material and student union fees.</li><li>Visa, residence permit and translation costs.</li></ul>
</section>
<section id="how-to-reduce-tuition" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to reduce tuition</h2>
<p className="mt-4 leading-7 text-slate-700">Scholarship routes are explained in <Link href="/study/hungary/scholarships-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Hungary</Link> and <Link href="/study/hungary/stipendium-hungaricum-scholarship-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Stipendium Hungaricum guide</Link>. Regional universities often list lower fees; see <Link href="/study/hungary/cheapest-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cheapest universities in Hungary</Link>. Remember that low tuition does not guarantee a low total cost, so compare it with <Link href="/study/hungary/cost-of-living-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">living costs</Link>.</p>
</section>
<section id="paying-tuition-safely" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Paying tuition safely</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Pay only into the university&apos;s official bank account named on its website or offer letter.</li><li>Get a receipt and keep bank slips for your visa file.</li><li>Never pay an individual agent&apos;s personal account for tuition.</li><li>Ask about refund rules if your visa is refused.</li></ul>
</section>
<section id="tuition-and-the-visa-file" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Tuition and the visa file</h2>
<p className="mt-4 leading-7 text-slate-700">Immigration authorities look at whether you can finance your studies. Self-financed applicants should read <Link href="/study/hungary/bank-solvency-requirements-for-hungary-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds for Hungary</Link> to understand how tuition affects the funds you must show.</p>
</section>
<section id="why-fees-differ-so-much" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Why fees differ so much</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Field of study: medicine, dentistry and some engineering cost more than humanities.</li><li>Institution type: private and church universities may price differently.</li><li>Level: master&apos;s and specialised programmes can cost more than bachelor&apos;s.</li><li>Campus and language of instruction.</li></ul>
</section>
<section id="budget-example-for-three-students" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Budget example for three students</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Student</th><th scope="col" className="px-3 py-2 text-left font-bold">Tuition</th><th scope="col" className="px-3 py-2 text-left font-bold">Living</th><th scope="col" className="px-3 py-2 text-left font-bold">Total year-one estimate</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Scholarship bachelor&apos;s in Debrecen</td><td className="px-3 py-2 align-top">EUR 0</td><td className="px-3 py-2 align-top">EUR 5,400 – 6,500</td><td className="px-3 py-2 align-top">About EUR 6,000 – 7,500 including visa and flight</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Self-financed business master&apos;s in Budapest</td><td className="px-3 py-2 align-top">EUR 3,500 – 6,000</td><td className="px-3 py-2 align-top">EUR 8,000 – 10,800</td><td className="px-3 py-2 align-top">About EUR 12,000 – 18,000</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Self-financed medicine in Szeged</td><td className="px-3 py-2 align-top">EUR 14,000 – 20,000</td><td className="px-3 py-2 align-top">EUR 6,000 – 8,000</td><td className="px-3 py-2 align-top">About EUR 21,000 – 29,000</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Examples are illustrative planning ranges, not quotes. Verify costs with each university.</p>
</section>
<section id="questions-to-ask-the-admissions-office" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Questions to ask the admissions office</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Is the fee per semester or per year?</li><li>Is it fixed for the whole programme?</li><li>Which extra fees apply?</li><li>What is the refund policy if my visa is refused?</li><li>Are there fee discounts for early payment or merit?</li></ul>
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
