import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/health-insurance-for-students-in-japan';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Health Insurance for Students in Japan 2026 | Eammu",
  "description": "National Health Insurance and pension for international students in Japan in 2026: enrolment, costs, 30 percent co-payment and exemptions.",
  "keywords": [
    "health insurance Japan students",
    "National Health Insurance Japan international students",
    "Japan pension student exemption"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/health-insurance-for-students-in-japan"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Health Insurance for Students in Japan 2026 | Eammu",
    "description": "National Health Insurance and pension for international students in Japan in 2026: enrolment, costs, 30 percent co-payment and exemptions.",
    "url": "https://eammu.com/study/japan/health-insurance-for-students-in-japan",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Health Insurance for Students in Japan 2026 | Eammu",
    "description": "National Health Insurance and pension for international students in Japan in 2026: enrolment, costs, 30 percent co-payment and exemptions."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "Health Insurance", "href": "/study/japan/health-insurance-for-students-in-japan"}];
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
    "href": "/study/japan/japan-bank-account-phone-and-residence-card",
    "title": "Residence Card, Address Registration, Bank Account and Phone in Japan: First-Month Guide",
    "description": "First-month setup in Japan for international students in 2026: residence card, address registration, health insurance, bank account and phone."
  },
  {
    "href": "/study/japan/cost-of-living-in-japan-for-bangladeshi-students",
    "title": "Cost of Living in Japan for Bangladeshi Students: Monthly Budget",
    "description": "Monthly cost of living in Japan for Bangladeshi students in 2026: rent, food, transport and insurance in Tokyo, Osaka, Kyoto and regional cities in JPY and BDT."
  },
  {
    "href": "/study/japan/life-in-japan-for-international-students",
    "title": "Life in Japan for International Students: Culture, Rules, Safety and Daily Life",
    "description": "What life is like in Japan for international students in 2026: rules, garbage sorting, transport, earthquakes, culture and what to expect."
  },
  {
    "href": "/study/japan/student-accommodation-in-japan",
    "title": "Student Accommodation in Japan for Bangladeshi Students",
    "description": "Student accommodation in Japan for Bangladeshi students in 2026: dormitories, share houses, apartments and costs in JPY and BDT, plus scam warnings."
  }
];
const FAQS = [
  {
    "q": "Is health insurance mandatory in Japan?",
    "a": "Yes, residents staying more than three months generally must join public health insurance."
  },
  {
    "q": "How much is health insurance for students?",
    "a": "Often around JPY 1,500–3,000 a month, varying by city."
  },
  {
    "q": "How much do I pay at a doctor?",
    "a": "Typically about 30 percent of the cost with NHI."
  },
  {
    "q": "Do I need private insurance as well?",
    "a": "Optional, but some students add extra cover."
  },
  {
    "q": "Do I have to pay pension?",
    "a": "Students aged 20 and above can usually apply for an exemption."
  },
  {
    "q": "When should I enrol?",
    "a": "Right after registering your address."
  },
  {
    "q": "Does it cover dental care?",
    "a": "Often partly; check coverage."
  },
  {
    "q": "What is the emergency number?",
    "a": "119 for ambulance and fire, 110 for police."
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
          "name": "Health Insurance",
          "item": "https://eammu.com/study/japan/health-insurance-for-students-in-japan"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Health Insurance and Pension for International Students in Japan (2026)",
      "description": "National Health Insurance and pension for international students in Japan in 2026: enrolment, costs, 30 percent co-payment and exemptions.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/health-insurance-for-students-in-japan",
      "keywords": "health insurance Japan students, National Health Insurance Japan international students, Japan pension student exemption",
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
          "name": "Is health insurance mandatory in Japan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, residents staying more than three months generally must join public health insurance."
          }
        },
        {
          "@type": "Question",
          "name": "How much is health insurance for students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often around JPY 1,500–3,000 a month, varying by city."
          }
        },
        {
          "@type": "Question",
          "name": "How much do I pay at a doctor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically about 30 percent of the cost with NHI."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need private insurance as well?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Optional, but some students add extra cover."
          }
        },
        {
          "@type": "Question",
          "name": "Do I have to pay pension?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students aged 20 and above can usually apply for an exemption."
          }
        },
        {
          "@type": "Question",
          "name": "When should I enrol?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Right after registering your address."
          }
        },
        {
          "@type": "Question",
          "name": "Does it cover dental care?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often partly; check coverage."
          }
        },
        {
          "@type": "Question",
          "name": "What is the emergency number?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "119 for ambulance and fire, 110 for police."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Health Insurance and Pension for International Students in Japan (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Residents staying in Japan for more than three months must join public health insurance.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>International students staying more than three months generally join National Health Insurance at the city office.</li><li>NHI usually covers most medical costs, leaving a co-payment of about 30 percent.</li><li>Monthly premiums for students are usually modest and vary by city.</li><li>Students aged 20 and over may need to join the national pension but can apply for a student payment exemption.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#how-to-enrol" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to enrol</a></li><li><a href="#costs" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Costs</a></li><li><a href="#using-healthcare" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Using healthcare</a></li><li><a href="#pension-and-exemptions" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Pension and exemptions</a></li><li><a href="#mental-health-and-wellbeing" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mental health and wellbeing</a></li><li><a href="#documents-to-keep-for-insurance" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Documents to keep for insurance</a></li></ol>
          </nav>

          <article>
<section id="how-to-enrol" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to enrol</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Register your address at your city office.</li><li>Ask to enrol in National Health Insurance.</li><li>Bring your residence card and passport.</li><li>Receive your insurance card and keep it with you.</li><li>Pay premiums by bank, convenience store or city instructions.</li></ol>
</section>
<section id="costs" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Costs</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">JPY (per month or visit)</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT approx. (per month or visit)</th><th scope="col" className="px-3 py-2 text-left font-bold">What to check</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">National Health Insurance premium</td><td className="px-3 py-2 align-top">JPY 1,500 – 3,000</td><td className="px-3 py-2 align-top">Tk 1,200 – 2,400</td><td className="px-3 py-2 align-top">Varies by city and income</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Doctor co-payment (about 30 percent of cost)</td><td className="px-3 py-2 align-top">JPY 1,000 – 5,000</td><td className="px-3 py-2 align-top">Tk 800 – 4,000</td><td className="px-3 py-2 align-top">Per visit, varies</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Pension contribution (before exemption)</td><td className="px-3 py-2 align-top">JPY 17,000 – 17,500</td><td className="px-3 py-2 align-top">Tk 13,600 – 14,000</td><td className="px-3 py-2 align-top">Student exemption may apply</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 JPY = about Tk 0.80 (roughly USD 1 = JPY 150) and are indicative planning estimates for 2026–2027, based on published university pages and Japanese official guidance. Fees, funds rules and exchange rates change, so always confirm with the school, the Immigration Services Agency of Japan (moj.go.jp/isa), the Embassy of Japan in Dhaka and an Eammu Holidays counselor before paying anything.</p>
</section>
<section id="using-healthcare" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Using healthcare</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Show your insurance card at clinics and hospitals.</li><li>Carry your residence card.</li><li>Know the emergency number 119 for ambulance and fire.</li><li>Ask your international office about English-speaking clinics.</li></ul>
</section>
<section id="pension-and-exemptions" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Pension and exemptions</h2>
<p className="mt-4 leading-7 text-slate-700">Residents aged 20 to 59 are generally required to join the national pension, but students can apply for a special payment exemption at the city office. Confirm current rules locally.</p>
</section>
<section id="mental-health-and-wellbeing" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Mental health and wellbeing</h2>
<p className="mt-4 leading-7 text-slate-700">Moving abroad is stressful. Universities provide counseling; reach out early if you feel isolated. See <Link href="/study/japan/life-in-japan-for-international-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">life in Japan</Link>.</p>
</section>
<section id="documents-to-keep-for-insurance" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Documents to keep for insurance</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Insurance card.</li><li>Premium payment receipts.</li><li>Medical receipts for claims.</li><li>Residence card copy.</li></ul>
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
