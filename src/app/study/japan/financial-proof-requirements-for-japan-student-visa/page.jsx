import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/financial-proof-requirements-for-japan-student-visa';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Financial Proof for Japan Student Visa 2026 | Eammu",
  "description": "Financial proof for a Japan student visa in 2026: how Bangladeshi students should show funds, sponsor documents, planning estimates and common mistakes.",
  "keywords": [
    "Japan student visa bank statement",
    "Japan financial proof",
    "sponsor Japan student visa",
    "bank balance Japan visa Bangladesh"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/financial-proof-requirements-for-japan-student-visa"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Financial Proof for Japan Student Visa 2026 | Eammu",
    "description": "Financial proof for a Japan student visa in 2026: how Bangladeshi students should show funds, sponsor documents, planning estimates and common mistakes.",
    "url": "https://eammu.com/study/japan/financial-proof-requirements-for-japan-student-visa",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Financial Proof for Japan Student Visa 2026 | Eammu",
    "description": "Financial proof for a Japan student visa in 2026: how Bangladeshi students should show funds, sponsor documents, planning estimates and common mistakes."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "Financial Proof", "href": "/study/japan/financial-proof-requirements-for-japan-student-visa"}];
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
    "href": "/study/japan/japan-student-documents-checklist",
    "title": "Japan Student Admission, COE and Visa Documents Checklist for Bangladeshis",
    "description": "Complete documents checklist for Japan admission, COE and student visa in 2026 for Bangladeshi students: academic, financial, language and travel papers."
  },
  {
    "href": "/study/japan/certificate-of-eligibility-coe-guide",
    "title": "Certificate of Eligibility (COE) for Japan: Step-by-Step Guide for Bangladeshi Students",
    "description": "Japan Certificate of Eligibility guide for Bangladeshi students in 2026: who applies, documents, financial proof, timing, validity and common problems."
  },
  {
    "href": "/study/japan/tuition-fees-in-japan-for-bangladeshi-students",
    "title": "Tuition Fees in Japan for Bangladeshi Students in JPY and BDT",
    "description": "Tuition fees in Japan for Bangladeshi students in 2026: national and private universities, graduate school and language schools in yen and BDT."
  },
  {
    "href": "/study/japan/cost-of-living-in-japan-for-bangladeshi-students",
    "title": "Cost of Living in Japan for Bangladeshi Students: Monthly Budget",
    "description": "Monthly cost of living in Japan for Bangladeshi students in 2026: rent, food, transport and insurance in Tokyo, Osaka, Kyoto and regional cities in JPY and BDT."
  }
];
const FAQS = [
  {
    "q": "How much bank balance is needed for a Japan student visa?",
    "a": "There is no single guaranteed figure here. Follow your school's list and the Embassy requirements."
  },
  {
    "q": "Can my parents sponsor me?",
    "a": "Yes, with documents showing income and relationship."
  },
  {
    "q": "Do MEXT scholars need to show funds?",
    "a": "MEXT recipients follow the scholarship instructions."
  },
  {
    "q": "Should I deposit money just before applying?",
    "a": "Avoid unexplained last-minute deposits."
  },
  {
    "q": "Is an education loan accepted?",
    "a": "Possibly with proper documentation; confirm."
  },
  {
    "q": "Do I need to show tuition payment?",
    "a": "Often helpful or required by the school."
  },
  {
    "q": "Is Tk 20–25 lakh an official rule?",
    "a": "No. It is a commonly cited figure from third-party advice and not an official threshold."
  },
  {
    "q": "Can a relative abroad sponsor me?",
    "a": "Possibly with proper documents; confirm."
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
          "name": "Financial Proof",
          "item": "https://eammu.com/study/japan/financial-proof-requirements-for-japan-student-visa"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Financial Proof and Sponsor Rules for a Japan Student Visa (2026)",
      "description": "Financial proof for a Japan student visa in 2026: how Bangladeshi students should show funds, sponsor documents, planning estimates and common mistakes.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/financial-proof-requirements-for-japan-student-visa",
      "keywords": "Japan student visa bank statement, Japan financial proof, sponsor Japan student visa, bank balance Japan visa Bangladesh",
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
          "name": "How much bank balance is needed for a Japan student visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no single guaranteed figure here. Follow your school's list and the Embassy requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Can my parents sponsor me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, with documents showing income and relationship."
          }
        },
        {
          "@type": "Question",
          "name": "Do MEXT scholars need to show funds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MEXT recipients follow the scholarship instructions."
          }
        },
        {
          "@type": "Question",
          "name": "Should I deposit money just before applying?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Avoid unexplained last-minute deposits."
          }
        },
        {
          "@type": "Question",
          "name": "Is an education loan accepted?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possibly with proper documentation; confirm."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to show tuition payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often helpful or required by the school."
          }
        },
        {
          "@type": "Question",
          "name": "Is Tk 20–25 lakh an official rule?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. It is a commonly cited figure from third-party advice and not an official threshold."
          }
        },
        {
          "@type": "Question",
          "name": "Can a relative abroad sponsor me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possibly with proper documents; confirm."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Financial Proof and Sponsor Rules for a Japan Student Visa (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">The COE and visa both test whether you can pay for tuition and living costs in Japan.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Authorities want credible evidence that you or your sponsor can cover tuition and living costs for the period.</li><li>No single universal amount is guaranteed; school and ISA rules vary.</li><li>Third-party commentary often cites a bank statement of around Tk 20–25 lakh for Bangladeshi applicants, but this is not an official figure.</li><li>Avoid unexplained large deposits and borrowed funds.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#what-authorities-and-schools-look-for" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What authorities and schools look for</a></li><li><a href="#planning-estimates-not-official-rules" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Planning estimates (not official rules)</a></li><li><a href="#how-to-show-funds" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to show funds</a></li><li><a href="#common-problems" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Common problems</a></li><li><a href="#sponsor-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Sponsor checklist</a></li><li><a href="#building-a-clean-financial-file" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Building a clean financial file</a></li></ol>
          </nav>

          <article>
<section id="what-authorities-and-schools-look-for" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What authorities and schools look for</h2>
<p className="mt-4 leading-7 text-slate-700">Schools collect financial documents for the COE, and the Embassy examines them again at visa stage. Self-sponsored applicants usually show a bank statement in their name; sponsored applicants show the sponsor&apos;s bank statement, income and tax documents and proof of relationship. Documents in foreign languages may need translation. Check your school&apos;s list and the Embassy list.</p>
</section>
<section id="planning-estimates-not-official-rules" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Planning estimates (not official rules)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Planning item</th><th scope="col" className="px-3 py-2 text-left font-bold">JPY (per year)</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT approx. (per year)</th><th scope="col" className="px-3 py-2 text-left font-bold">What to check</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">First-year tuition (public university)</td><td className="px-3 py-2 align-top">JPY 540,000 – 650,000</td><td className="px-3 py-2 align-top">Tk 4,32,000 – 5,20,000</td><td className="px-3 py-2 align-top">Plus admission fee</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">First-year tuition (language school)</td><td className="px-3 py-2 align-top">JPY 600,000 – 800,000</td><td className="px-3 py-2 align-top">Tk 4,80,000 – 6,40,000</td><td className="px-3 py-2 align-top">Plus other fees</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs buffer (12 months)</td><td className="px-3 py-2 align-top">JPY 1,080,000 – 1,800,000</td><td className="px-3 py-2 align-top">Tk 8,64,000 – 14,40,000</td><td className="px-3 py-2 align-top">Based on typical monthly cost</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Visa, insurance, flight and setup</td><td className="px-3 py-2 align-top">JPY 200,000 – 400,000</td><td className="px-3 py-2 align-top">Tk 1,60,000 – 3,20,000</td><td className="px-3 py-2 align-top">Keep receipts</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">These are planning estimates, not an official threshold. Official requirements change; confirm with your school, the Embassy and ISA. Figures use assumed rates of 1 JPY = about Tk 0.80 (roughly USD 1 = JPY 150) and are indicative planning estimates for 2026–2027, based on published university pages and Japanese official guidance. Fees, funds rules and exchange rates change, so always confirm with the school, the Immigration Services Agency of Japan (moj.go.jp/isa), the Embassy of Japan in Dhaka and an Eammu Holidays counselor before paying anything.</p>
</section>
<section id="how-to-show-funds" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to show funds</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Bank statements covering several months, in the account holder&apos;s name.</li><li>Sponsor affidavit and relationship proof.</li><li>Income, tax and business documents for sponsors.</li><li>Scholarship award letter, see <Link href="/study/japan/mext-scholarship-guide-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MEXT</Link>.</li><li>Tuition payment receipts.</li></ul>
</section>
<section id="common-problems" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Common problems</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Sudden unexplained deposits.</li><li>Sponsors without documented income.</li><li>Mismatch between stated costs and funds.</li><li>Forged or altered documents.</li><li>Loans that cannot be explained.</li></ul><p className="mt-4 leading-7 text-slate-700">See <Link href="/study/japan/japan-student-visa-refusal-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">refusal reasons</Link> and plan with <Link href="/study/japan/cost-of-living-in-japan-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living</Link>.</p>
</section>
<section id="sponsor-checklist" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Sponsor checklist</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Sponsor identity documents.</li><li>Relationship proof.</li><li>Salary slips, tax returns or business papers.</li><li>Sponsor undertaking letter.</li><li>Translations where required.</li></ul>
</section>
<section id="building-a-clean-financial-file" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Building a clean financial file</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Keep funds in your or your sponsor&apos;s account for a reasonable period.</li><li>Collect proof of income sources.</li><li>Avoid sudden large unexplained deposits.</li><li>Get bank letters if requested.</li><li>Match statement names with passport names.</li></ol>
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
