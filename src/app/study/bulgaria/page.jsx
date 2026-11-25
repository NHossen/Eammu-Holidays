import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/bulgaria';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Bulgaria 2026: Guide for Bangladeshis | Eammu Holidays",
  "description": "Complete 2026 guide to studying in Bulgaria for Bangladeshi students: tuition in BDT, medicine, entrance exams, Type D visa, residence permit and counseling nationwide.",
  "alternates": {
    "canonical": "https://eammu.com/study/bulgaria"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Bulgaria 2026: Guide for Bangladeshis | Eammu Holidays",
    "description": "Complete 2026 guide to studying in Bulgaria for Bangladeshi students: tuition in BDT, medicine, entrance exams, Type D visa, residence permit and counseling nationwide.",
    "url": "https://eammu.com/study/bulgaria",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Bulgaria 2026: Guide for Bangladeshis | Eammu Holidays",
    "description": "Complete 2026 guide to studying in Bulgaria for Bangladeshi students: tuition in BDT, medicine, entrance exams, Type D visa, residence permit and counseling nationwide."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Bulgaria", "href": "/study/bulgaria"}];
const NAV = [
  {
    "label": "Bulgaria Hub",
    "pages": [
      {
        "href": "/study/bulgaria",
        "label": "Study in Bulgaria Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/bulgaria/study-in-bulgaria-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/bulgaria/tuition-fees-in-bulgaria-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/bulgaria/cost-of-living-in-bulgaria-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/bulgaria/cheapest-universities-in-bulgaria",
        "label": "Affordable Universities"
      },
      {
        "href": "/study/bulgaria/top-universities-in-bulgaria",
        "label": "Top Universities"
      },
      {
        "href": "/study/bulgaria/study-in-bulgaria-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/bulgaria/scholarships-in-bulgaria-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/bulgaria/admission-requirements-in-bulgaria-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/bulgaria/study-gap-accepted-universities-in-bulgaria",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/bulgaria/study-in-bulgaria-after-hsc",
        "label": "After HSC"
      },
      {
        "href": "/study/bulgaria/study-in-bulgaria-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/bulgaria/bulgaria-intake-dates",
        "label": "Intake Dates"
      },
      {
        "href": "/study/bulgaria/preparatory-year-and-bulgarian-language-in-bulgaria",
        "label": "Preparatory Year and Language"
      },
      {
        "href": "/study/bulgaria/bulgaria-vs-other-european-countries-for-bangladeshi-students",
        "label": "Bulgaria vs Other Countries"
      }
    ]
  },
  {
    "label": "Applications, Exams & Documents",
    "pages": [
      {
        "href": "/study/bulgaria/bulgaria-university-application-guide",
        "label": "Application Guide"
      },
      {
        "href": "/study/bulgaria/entrance-exams-biology-chemistry-for-medicine-in-bulgaria",
        "label": "Medicine Entrance Exams"
      },
      {
        "href": "/study/bulgaria/english-tests-for-bulgaria",
        "label": "English Tests"
      },
      {
        "href": "/study/bulgaria/document-legalisation-and-translation-for-bulgaria",
        "label": "Legalisation and Translation"
      },
      {
        "href": "/study/bulgaria/mes-admission-certificate-for-bulgaria-d-visa",
        "label": "MES Certificate"
      },
      {
        "href": "/study/bulgaria/degree-recognition-in-bulgaria",
        "label": "Degree Recognition"
      }
    ]
  },
  {
    "label": "Programmes & Student Life",
    "pages": [
      {
        "href": "/study/bulgaria/medicine-in-bulgaria-for-bangladeshi-students",
        "label": "Medicine in Bulgaria"
      },
      {
        "href": "/study/bulgaria/dentistry-and-pharmacy-in-bulgaria",
        "label": "Dentistry and Pharmacy"
      },
      {
        "href": "/study/bulgaria/bmdc-recognition-and-licensing-after-medicine-in-bulgaria",
        "label": "BMDC and Licensing"
      },
      {
        "href": "/study/bulgaria/cse-and-it-courses-in-bulgaria",
        "label": "CSE and IT Courses"
      },
      {
        "href": "/study/bulgaria/engineering-courses-in-bulgaria",
        "label": "Engineering Courses"
      },
      {
        "href": "/study/bulgaria/business-and-economics-in-bulgaria",
        "label": "Business and Economics"
      },
      {
        "href": "/study/bulgaria/masters-in-bulgaria-for-bangladeshi-students",
        "label": "Master's in Bulgaria"
      },
      {
        "href": "/study/bulgaria/phd-in-bulgaria-for-bangladeshi-students",
        "label": "PhD in Bulgaria"
      },
      {
        "href": "/study/bulgaria/veterinary-and-agriculture-in-bulgaria",
        "label": "Veterinary and Agriculture"
      },
      {
        "href": "/study/bulgaria/best-cities-to-study-in-bulgaria",
        "label": "Best Cities to Study"
      },
      {
        "href": "/study/bulgaria/student-accommodation-in-bulgaria",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/bulgaria/halal-food-and-student-life-in-bulgaria-for-bangladeshis",
        "label": "Halal Food and Student Life"
      },
      {
        "href": "/study/bulgaria/health-insurance-for-students-in-bulgaria",
        "label": "Health Insurance"
      },
      {
        "href": "/study/bulgaria/banking-and-sending-money-to-bulgaria-from-bangladesh",
        "label": "Banking and Sending Money"
      },
      {
        "href": "/study/bulgaria/avoid-scams-and-agent-risks-in-bulgaria-admissions",
        "label": "Avoid Scams and Agent Risks"
      }
    ]
  },
  {
    "label": "D Visa, Residence & Work",
    "pages": [
      {
        "href": "/study/bulgaria/bulgaria-d-visa-requirements-for-bangladeshi-students",
        "label": "D Visa Requirements"
      },
      {
        "href": "/study/bulgaria/d-visa-document-checklist-for-bulgaria",
        "label": "D Visa Document Checklist"
      },
      {
        "href": "/study/bulgaria/proof-of-funds-for-bulgaria-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/bulgaria/bulgaria-visa-processing-time-and-cost",
        "label": "Visa Time and Cost"
      },
      {
        "href": "/study/bulgaria/bulgaria-visa-interview-questions-and-tips",
        "label": "Interview Questions and Tips"
      },
      {
        "href": "/study/bulgaria/bulgaria-visa-refusal-reasons-and-reapplication",
        "label": "Visa Refusal and Reapplication"
      },
      {
        "href": "/study/bulgaria/residence-permit-for-students-in-bulgaria",
        "label": "Residence Permit"
      },
      {
        "href": "/study/bulgaria/part-time-work-rules-for-students-in-bulgaria",
        "label": "Part-Time Work Rules"
      },
      {
        "href": "/study/bulgaria/post-study-work-and-eu-blue-card-from-bulgaria",
        "label": "Post-Study Work and Blue Card"
      },
      {
        "href": "/study/bulgaria/bulgaria-student-visa-rule-changes-2026",
        "label": "Rule Changes 2026"
      },
      {
        "href": "/study/bulgaria/pre-departure-checklist-for-bulgaria-students",
        "label": "Pre-Departure Checklist"
      },
      {
        "href": "/study/bulgaria/maintaining-student-status-in-bulgaria",
        "label": "Maintaining Student Status"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/bulgaria/bangladesh-offices",
        "label": "Bangladesh Offices and Support"
      },
      {
        "href": "/study/bulgaria/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/bulgaria/study-in-bulgaria-from-bangladesh",
    "title": "Study in Bulgaria from Bangladesh: Complete 2026 Guide",
    "description": "The full roadmap from profile check to Type D visa, with costs in taka."
  },
  {
    "href": "/study/bulgaria/tuition-fees-in-bulgaria-for-bangladeshi-students",
    "title": "Tuition Fees in Bulgaria for Bangladeshi Students (2026, EUR and BDT)",
    "description": "EUR and BDT tuition ranges by level and field."
  },
  {
    "href": "/study/bulgaria/medicine-in-bulgaria-for-bangladeshi-students",
    "title": "Medicine (MBBS Equivalent) in Bulgaria for Bangladeshi Students: Fees, Exams and Recognition",
    "description": "Fees, entrance exams, structure and recognition risks."
  },
  {
    "href": "/study/bulgaria/bulgaria-d-visa-requirements-for-bangladeshi-students",
    "title": "Bulgaria Type D Student Visa Requirements for Bangladeshi Students (2026)",
    "description": "Documents, steps and checks for the Type D visa."
  },
  {
    "href": "/study/bulgaria/bulgaria-student-visa-rule-changes-2026",
    "title": "Bulgaria Study Rule Changes in 2026: Euro, Fees and Visa Updates for Bangladeshi Students",
    "description": "Euro, fees, Schengen and visa updates."
  },
  {
    "href": "/study/bulgaria/cost-of-living-in-bulgaria-for-bangladeshi-students",
    "title": "Cost of Living in Bulgaria for Bangladeshi Students (2026 Monthly Budget)",
    "description": "City budgets in euros and taka."
  }
];
const FAQS = [
  {
    "q": "Is studying in Bulgaria a good option for Bangladeshi students in 2026?",
    "a": "It can be if you want a lower-cost EU degree, particularly in medicine, dentistry or technical fields. The trade-offs are a smaller job market, modest salaries and a post-study route that is not automatic."
  },
  {
    "q": "How much money do I need to study in Bulgaria from Bangladesh?",
    "a": "Non-medical degrees often cost about €2,500 to €5,500 a year in tuition, and English-taught medicine about €7,000 to €10,000. Living costs are commonly €450 to €700 a month."
  },
  {
    "q": "Do I need a visa?",
    "a": "Yes. Students staying longer than 90 days need a Type D visa, including a personal interview, and then a residence permit after arrival."
  },
  {
    "q": "Can Eammu Holidays guarantee admission or a visa?",
    "a": "No. No genuine consultancy can guarantee admission, scholarships, recognition or visa approval. We provide counselling, shortlisting, document support and interview preparation."
  },
  {
    "q": "When should I start preparing?",
    "a": "Start 9 to 12 months before your intake, because the certificate, legalisation, translation and visa steps take time."
  },
  {
    "q": "Should I compare Bulgaria with other countries first?",
    "a": "Yes. Compare total cost, visa difficulty, recognition and work rights. Our guides on this site cover the UK, USA and China as well."
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
          "name": "Bulgaria",
          "item": "https://eammu.com/study/bulgaria"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Bulgaria 2026: Complete Guide for Bangladeshi Students",
      "description": "Complete 2026 guide to studying in Bulgaria for Bangladeshi students: tuition in BDT, medicine, entrance exams, Type D visa, residence permit and counseling nationwide.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/bulgaria",
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
          "name": "Is studying in Bulgaria a good option for Bangladeshi students in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be if you want a lower-cost EU degree, particularly in medicine, dentistry or technical fields. The trade-offs are a smaller job market, modest salaries and a post-study route that is not automatic."
          }
        },
        {
          "@type": "Question",
          "name": "How much money do I need to study in Bulgaria from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non-medical degrees often cost about €2,500 to €5,500 a year in tuition, and English-taught medicine about €7,000 to €10,000. Living costs are commonly €450 to €700 a month."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Students staying longer than 90 days need a Type D visa, including a personal interview, and then a residence permit after arrival."
          }
        },
        {
          "@type": "Question",
          "name": "Can Eammu Holidays guarantee admission or a visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. No genuine consultancy can guarantee admission, scholarships, recognition or visa approval. We provide counselling, shortlisting, document support and interview preparation."
          }
        },
        {
          "@type": "Question",
          "name": "When should I start preparing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start 9 to 12 months before your intake, because the certificate, legalisation, translation and visa steps take time."
          }
        },
        {
          "@type": "Question",
          "name": "Should I compare Bulgaria with other countries first?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Compare total cost, visa difficulty, recognition and work rights. Our guides on this site cover the UK, USA and China as well."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Bulgaria 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Bulgaria 2026: Complete Guide for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Costs in BDT, medicine and English-taught degrees, admission exams, the Type D visa, residence permit and honest advice on what Bulgaria offers and does not.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-22">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Bulgaria guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 62 Bulgaria guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Read this first: what Bulgaria offers and demands</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li><strong>Low cost in the EU:</strong> tuition and living costs are modest compared with Western Europe; see <Link href="/study/bulgaria/tuition-fees-in-bulgaria-for-bangladeshi-students" className={linkClass}>tuition fees</Link>.</li><li><strong>Medicine is the main draw:</strong> six-year English-taught programmes attract many Bangladeshi families, but you must verify recognition in Bangladesh; see <Link href="/study/bulgaria/bmdc-recognition-and-licensing-after-medicine-in-bulgaria" className={linkClass}>BMDC and licensing</Link>.</li><li><strong>Visa process:</strong> the Type D visa needs a Ministry of Education certificate, legalised and translated documents and an interview; see <Link href="/study/bulgaria/bulgaria-d-visa-requirements-for-bangladeshi-students" className={linkClass}>D visa requirements</Link>.</li><li><strong>Careers:</strong> salaries are modest and post-study routes are limited; see <Link href="/study/bulgaria/post-study-work-and-eu-blue-card-from-bulgaria" className={linkClass}>post-study work</Link>.</li><li><strong>Changes in 2026:</strong> the euro, updated fee tables and visa requirements; see <Link href="/study/bulgaria/bulgaria-student-visa-rule-changes-2026" className={linkClass}>2026 rule changes</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Why Bangladeshi students consider Bulgaria</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>EU-based degrees at a lower cost than many European countries.</li><li>English-taught medicine, dentistry, pharmacy, engineering and business.</li><li>Schengen membership and a simple student lifestyle.</li><li>Student cities such as Sofia, Plovdiv, Varna and Pleven; see <Link href="/study/bulgaria/best-cities-to-study-in-bulgaria" className={linkClass}>best cities to study in Bulgaria</Link>.</li><li>Flexible English proof at many universities; see <Link href="/study/bulgaria/study-in-bulgaria-without-ielts" className={linkClass}>study in Bulgaria without IELTS</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Where to begin: choose your level and route</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">If you are...</th><th scope="col" className="px-3 py-2 text-left font-bold">Start here</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">After HSC with science subjects</td><td className="px-3 py-2 align-top"><Link href="/study/bulgaria/study-in-bulgaria-after-hsc" className={linkClass}>Study in Bulgaria after HSC</Link> and <Link href="/study/bulgaria/medicine-in-bulgaria-for-bangladeshi-students" className={linkClass}>medicine in Bulgaria</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Interested in dentistry or pharmacy</td><td className="px-3 py-2 align-top"><Link href="/study/bulgaria/dentistry-and-pharmacy-in-bulgaria" className={linkClass}>Dentistry and pharmacy</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">A diploma holder</td><td className="px-3 py-2 align-top"><Link href="/study/bulgaria/study-in-bulgaria-after-diploma" className={linkClass}>Study in Bulgaria after diploma</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">A graduate wanting a master</td><td className="px-3 py-2 align-top"><Link href="/study/bulgaria/masters-in-bulgaria-for-bangladeshi-students" className={linkClass}>Master&apos;s in Bulgaria</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Interested in IT or engineering</td><td className="px-3 py-2 align-top"><Link href="/study/bulgaria/cse-and-it-courses-in-bulgaria" className={linkClass}>CSE and IT</Link> and <Link href="/study/bulgaria/engineering-courses-in-bulgaria" className={linkClass}>engineering</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Looking for funding</td><td className="px-3 py-2 align-top"><Link href="/study/bulgaria/scholarships-in-bulgaria-for-bangladeshi-students" className={linkClass}>Scholarships</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Comparing countries</td><td className="px-3 py-2 align-top"><Link href="/study/bulgaria/bulgaria-vs-other-european-countries-for-bangladeshi-students" className={linkClass}>Bulgaria vs other countries</Link></td></tr></tbody></table></div>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Indicative cost snapshot (EUR and BDT)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">EUR</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT (about Tk 142 per €)</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tuition per year, most non-medical degrees</td><td className="px-3 py-2 align-top">€2,500 – €5,500</td><td className="px-3 py-2 align-top">Tk 3.5 – 7.8 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tuition per year, medicine in English</td><td className="px-3 py-2 align-top">€7,000 – €10,000</td><td className="px-3 py-2 align-top">Tk 9.9 – 14.2 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Preparatory year (if required)</td><td className="px-3 py-2 align-top">€3,500 – €4,800</td><td className="px-3 py-2 align-top">Tk 5 – 6.8 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs per year</td><td className="px-3 py-2 align-top">€5,400 – €8,400</td><td className="px-3 py-2 align-top">Tk 7.7 – 11.9 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Health insurance per year</td><td className="px-3 py-2 align-top">€100 – €400</td><td className="px-3 py-2 align-top">Tk 14,200 – 56,800</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">One-way flight from Dhaka</td><td className="px-3 py-2 align-top">Varies</td><td className="px-3 py-2 align-top">Tk 60,000 – 1.2 lakh</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 EUR = about Tk 142 and are indicative estimates for the 2026–2027 intake. Fees, scholarship rules, test dates, visa policy and exchange rates change, so always confirm with the university, official US government sources or an Eammu Holidays counselor before paying anything.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Your step-by-step journey</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Profile check and budget; see <Link href="/study/bulgaria/admission-requirements-in-bulgaria-for-bangladeshi-students" className={linkClass}>admission requirements</Link>.</li><li>Shortlist universities; see <Link href="/study/bulgaria/top-universities-in-bulgaria" className={linkClass}>top universities</Link> and <Link href="/study/bulgaria/cheapest-universities-in-bulgaria" className={linkClass}>affordable universities</Link>.</li><li>Apply and take exams; see <Link href="/study/bulgaria/bulgaria-university-application-guide" className={linkClass}>application guide</Link>.</li><li>Obtain admission and the Ministry certificate; see <Link href="/study/bulgaria/mes-admission-certificate-for-bulgaria-d-visa" className={linkClass}>MES certificate</Link>.</li><li>Legalise and translate documents; see <Link href="/study/bulgaria/document-legalisation-and-translation-for-bulgaria" className={linkClass}>legalisation guide</Link>.</li><li>Apply for the Type D visa and attend the interview; see <Link href="/study/bulgaria/bulgaria-visa-interview-questions-and-tips" className={linkClass}>interview tips</Link>.</li><li>Arrive and apply for the residence permit; see <Link href="/study/bulgaria/residence-permit-for-students-in-bulgaria" className={linkClass}>residence permit guide</Link>.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">How Eammu Holidays supports you</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Free profile review and realistic budget in BDT.</li><li>University and programme shortlist.</li><li>Document checklists, legalisation and translation planning.</li><li>Application tracking and certificate follow-up.</li><li>Funds review and visa interview practice.</li><li>Pre-departure briefing and arrival tips.</li></ul>
<p className="mt-4 leading-7 text-slate-700">We do not guarantee admission, scholarships, recognition or visas. Our role is to help you present an honest, strong and well-prepared case.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Questions Bangladeshi families ask before choosing Bulgaria</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Family concern</th><th scope="col" className="px-3 py-2 text-left font-bold">Honest answer</th><th scope="col" className="px-3 py-2 text-left font-bold">Read</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Is it really cheaper?</td><td className="px-3 py-2 align-top">Tuition and living costs are lower than many European countries, but medicine over six years still costs a lot.</td><td className="px-3 py-2 align-top"><Link href="/study/bulgaria/tuition-fees-in-bulgaria-for-bangladeshi-students" className={linkClass}>Tuition fees</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Will the degree be recognised at home?</td><td className="px-3 py-2 align-top">It depends on the profession. Verify with BMDC or the relevant regulator before paying.</td><td className="px-3 py-2 align-top"><Link href="/study/bulgaria/degree-recognition-in-bulgaria" className={linkClass}>Degree recognition</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Can the student stay and work in Europe?</td><td className="px-3 py-2 align-top">Not automatically. Work permits and the Blue Card have conditions.</td><td className="px-3 py-2 align-top"><Link href="/study/bulgaria/post-study-work-and-eu-blue-card-from-bulgaria" className={linkClass}>Post-study work</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Is the visa easy?</td><td className="px-3 py-2 align-top">It needs a Ministry certificate, legalised documents and an interview.</td><td className="px-3 py-2 align-top"><Link href="/study/bulgaria/bulgaria-d-visa-requirements-for-bangladeshi-students" className={linkClass}>D visa requirements</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Is the agent genuine?</td><td className="px-3 py-2 align-top">Verify the university and avoid guarantees.</td><td className="px-3 py-2 align-top"><Link href="/study/bulgaria/avoid-scams-and-agent-risks-in-bulgaria-admissions" className={linkClass}>Avoid scams</Link></td></tr></tbody></table></div>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Official sources to confirm this information</h2>
<p className="mt-4 leading-7 text-slate-700">Policies, fees, visa rules and exam dates change. Before you act on anything on this page, check the current version at:</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Ministry of Foreign Affairs of Bulgaria (mfa.bg)</li><li>Study in Europe country profile for Bulgaria</li><li>The university&apos;s own admissions pages</li></ul>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays reviews these pages regularly, last updated November 2026, but official sources always take priority.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Complete Directory: Every Bulgaria Study Guide</h2>
<div className="mt-5 grid gap-4 sm:grid-cols-2">{NAV.map((g) => (<div key={g.label} className="rounded-xl border border-slate-200 bg-white p-4"><h3 className="font-bold text-emerald-900">{g.label}</h3><ul className="mt-2 space-y-1 text-sm">{g.pages.map((p) => (<li key={p.href}><Link href={p.href} className={linkClass}>{p.label}</Link></li>))}</ul></div>))}</div>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Bulgaria Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Bulgaria</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and scholarship shortlist, Bulgaria D visa interview and document preparation and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
