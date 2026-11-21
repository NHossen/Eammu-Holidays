import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/mbbs-and-medical-degrees-in-hungary';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "MBBS and Medicine in Hungary for Bangladeshis 2026",
  "description": "Study medicine (MD), dentistry and pharmacy in Hungary in 2026 for Bangladeshi students: universities, fees, entrance exams and BMDC recognition.",
  "keywords": [
    "MBBS in Hungary",
    "medicine in Hungary for Bangladeshi students",
    "dentistry Hungary",
    "Semmelweis Debrecen Szeged Pecs"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/mbbs-and-medical-degrees-in-hungary"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "MBBS and Medicine in Hungary for Bangladeshis 2026",
    "description": "Study medicine (MD), dentistry and pharmacy in Hungary in 2026 for Bangladeshi students: universities, fees, entrance exams and BMDC recognition.",
    "url": "https://eammu.com/study/hungary/mbbs-and-medical-degrees-in-hungary",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "MBBS and Medicine in Hungary for Bangladeshis 2026",
    "description": "Study medicine (MD), dentistry and pharmacy in Hungary in 2026 for Bangladeshi students: universities, fees, entrance exams and BMDC recognition."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Medicine, Dentistry & Pharmacy", "href": "/study/hungary/mbbs-and-medical-degrees-in-hungary"}];
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
    "href": "/study/hungary/top-universities-in-hungary",
    "title": "Top Universities in Hungary for Bangladeshi Students",
    "description": "Top universities in Hungary for Bangladeshi students in 2026: ELTE, BME, Semmelweis, Debrecen, Szeged, Pécs and Corvinus with strengths and fit."
  },
  {
    "href": "/study/hungary/degree-recognition-and-eligibility-in-hungary",
    "title": "Degree Recognition and Eligibility in Hungary for Bangladeshi Students",
    "description": "Degree recognition and eligibility in Hungary for Bangladeshi students in 2026: attestation, apostille, equivalence and Bangladesh recognition of Hungarian degrees."
  },
  {
    "href": "/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students",
    "title": "Tuition Fees in Hungary for Bangladeshi Students in EUR and BDT",
    "description": "Tuition fees in Hungary for Bangladeshi students in 2026: bachelor, master, PhD and medicine fees in EUR and BDT, plus scholarship savings."
  },
  {
    "href": "/study/hungary/study-in-debrecen",
    "title": "Study in Debrecen for Bangladeshi Students: University, Costs, Life",
    "description": "Study in Debrecen in 2026: University of Debrecen, medicine and engineering, rent, student life and costs for Bangladeshi students."
  }
];
const FAQS = [
  {
    "q": "Is MBBS available in Hungary?",
    "a": "English-taught General Medicine (MD) is available at several universities."
  },
  {
    "q": "How much does medicine cost in Hungary?",
    "a": "Roughly EUR 14,000–20,000 a year."
  },
  {
    "q": "Is there an entrance exam?",
    "a": "Often yes, in biology and chemistry."
  },
  {
    "q": "Can I practice in Bangladesh after Hungary?",
    "a": "You must follow local registration and licensing rules; verify first."
  },
  {
    "q": "Are scholarships available for medicine?",
    "a": "Stipendium Hungaricum includes some medical programmes; check the call."
  },
  {
    "q": "How long is the programme?",
    "a": "Six years for medicine, with variations for dentistry and pharmacy."
  },
  {
    "q": "Is Hungarian needed for clinical years?",
    "a": "Basic Hungarian is useful for patient contact during clinical training."
  },
  {
    "q": "Can I transfer to another country's medical school?",
    "a": "Possible in some cases but complex and not guaranteed."
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
          "name": "Medicine, Dentistry & Pharmacy",
          "item": "https://eammu.com/study/hungary/mbbs-and-medical-degrees-in-hungary"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Medicine, Dentistry and Pharmacy in Hungary for Bangladeshi Students (2026)",
      "description": "Study medicine (MD), dentistry and pharmacy in Hungary in 2026 for Bangladeshi students: universities, fees, entrance exams and BMDC recognition.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/mbbs-and-medical-degrees-in-hungary",
      "keywords": "MBBS in Hungary, medicine in Hungary for Bangladeshi students, dentistry Hungary, Semmelweis Debrecen Szeged Pecs",
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
          "name": "Is MBBS available in Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "English-taught General Medicine (MD) is available at several universities."
          }
        },
        {
          "@type": "Question",
          "name": "How much does medicine cost in Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roughly EUR 14,000–20,000 a year."
          }
        },
        {
          "@type": "Question",
          "name": "Is there an entrance exam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often yes, in biology and chemistry."
          }
        },
        {
          "@type": "Question",
          "name": "Can I practice in Bangladesh after Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You must follow local registration and licensing rules; verify first."
          }
        },
        {
          "@type": "Question",
          "name": "Are scholarships available for medicine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stipendium Hungaricum includes some medical programmes; check the call."
          }
        },
        {
          "@type": "Question",
          "name": "How long is the programme?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Six years for medicine, with variations for dentistry and pharmacy."
          }
        },
        {
          "@type": "Question",
          "name": "Is Hungarian needed for clinical years?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Basic Hungarian is useful for patient contact during clinical training."
          }
        },
        {
          "@type": "Question",
          "name": "Can I transfer to another country's medical school?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possible in some cases but complex and not guaranteed."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Medicine, Dentistry and Pharmacy in Hungary for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Hungary offers English-taught medical degrees, but fees are high and recognition at home needs checking.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>The degree is usually called General Medicine (MD) rather than MBBS.</li><li>Programmes last six years; fees are roughly EUR 14,000–20,000 a year.</li><li>Entrance exams in biology and chemistry are common.</li><li>Verify recognition with Bangladesh authorities before you enrol.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#where-to-study" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Where to study</a></li><li><a href="#cost-overview" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cost overview</a></li><li><a href="#entry-and-exams" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Entry and exams</a></li><li><a href="#recognition-in-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Recognition in Bangladesh</a></li><li><a href="#financial-planning" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Financial planning</a></li><li><a href="#medical-study-structure" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Medical study structure</a></li><li><a href="#preparing-for-entrance-exams" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Preparing for entrance exams</a></li><li><a href="#risk-management-for-families" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Risk management for families</a></li></ol>
          </nav>

          <article>
<section id="where-to-study" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Where to study</h2>
<p className="mt-4 leading-7 text-slate-700">Semmelweis University in Budapest and the universities of Debrecen, Szeged and Pécs run English-taught medicine, dentistry and pharmacy. See <Link href="/study/hungary/top-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities</Link>.</p>
</section>
<section id="cost-overview" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Cost overview</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Programme</th><th scope="col" className="px-3 py-2 text-left font-bold">EUR (per year)</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT approx. (per year)</th><th scope="col" className="px-3 py-2 text-left font-bold">What to check</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Medicine (MD)</td><td className="px-3 py-2 align-top">EUR 14,000 – 20,000</td><td className="px-3 py-2 align-top">Tk 19,60,000 – 28,00,000</td><td className="px-3 py-2 align-top">Six years</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Dentistry</td><td className="px-3 py-2 align-top">EUR 14,000 – 20,000</td><td className="px-3 py-2 align-top">Tk 19,60,000 – 28,00,000</td><td className="px-3 py-2 align-top">Five to six years</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Pharmacy</td><td className="px-3 py-2 align-top">EUR 6,000 – 11,000</td><td className="px-3 py-2 align-top">Tk 8,40,000 – 15,40,000</td><td className="px-3 py-2 align-top">Five years</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 EUR = about HUF 400 = about Tk 140 and are indicative planning estimates for 2026–2027, based on published university pages and Hungarian immigration guidance. Fees, funds rules and exchange rates change, so always confirm with the university, the Hungarian immigration authority (oif.gov.hu) and an Eammu Holidays counselor before paying anything.</p>
</section>
<section id="entry-and-exams" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Entry and exams</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>HSC science with biology and chemistry.</li><li>Entrance exam or interview, sometimes online.</li><li>English proof and motivation letter.</li><li>Medical fitness checks at later stages.</li></ul><p className="mt-4 leading-7 text-slate-700">See <Link href="/study/hungary/admission-requirements-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link>.</p>
</section>
<section id="recognition-in-bangladesh" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Recognition in Bangladesh</h2>
<p className="mt-4 leading-7 text-slate-700">Practising in Bangladesh requires registration with the relevant council and passing any required licensing exam. Rules change, so confirm with the authority before paying fees. Read <Link href="/study/hungary/degree-recognition-and-eligibility-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">degree recognition</Link>.</p>
</section>
<section id="financial-planning" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Financial planning</h2>
<p className="mt-4 leading-7 text-slate-700">Because fees are high, plan carefully using <Link href="/study/hungary/bank-solvency-requirements-for-hungary-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link> and <Link href="/study/hungary/cost-of-living-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">living costs</Link>.</p>
</section>
<section id="medical-study-structure" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Medical study structure</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Preclinical years: anatomy, physiology, biochemistry.</li><li>Clinical years: hospital rotations and practical training.</li><li>Exams and licensing in your home country after graduation.</li><li>Language: clinical placements may involve basic Hungarian communication.</li></ul>
</section>
<section id="preparing-for-entrance-exams" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Preparing for entrance exams</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Review the university&apos;s syllabus in biology and chemistry.</li><li>Use past-style sample questions.</li><li>Plan your study schedule over several months.</li><li>Prepare for an interview about motivation and ethics.</li></ol>
</section>
<section id="risk-management-for-families" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Risk management for families</h2>
<p className="mt-4 leading-7 text-slate-700">Medical study is a multi-year financial commitment. Keep a buffer for fee changes, currency movement and unexpected costs. Verify recognition rules with Bangladesh authorities before enrolling.</p>
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
