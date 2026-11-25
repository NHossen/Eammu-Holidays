import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/how-to-apply-to-japanese-universities';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "How to Apply to Japanese Universities 2026 | Eammu",
  "description": "How to apply to Japanese universities from Bangladesh in 2026: direct applications, EJU, English programmes, MEXT routes, documents, fees and offers.",
  "keywords": [
    "how to apply Japanese university",
    "Japan university application Bangladesh",
    "apply to Japan self-financed"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/how-to-apply-to-japanese-universities"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "How to Apply to Japanese Universities 2026 | Eammu",
    "description": "How to apply to Japanese universities from Bangladesh in 2026: direct applications, EJU, English programmes, MEXT routes, documents, fees and offers.",
    "url": "https://eammu.com/study/japan/how-to-apply-to-japanese-universities",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "How to Apply to Japanese Universities 2026 | Eammu",
    "description": "How to apply to Japanese universities from Bangladesh in 2026: direct applications, EJU, English programmes, MEXT routes, documents, fees and offers."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "How to Apply (Step by Step)", "href": "/study/japan/how-to-apply-to-japanese-universities"}];
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
    "href": "/study/japan/japan-intake-dates",
    "title": "Japan Intake Dates and Application Deadlines (2026–2027)",
    "description": "Japan intake dates and deadlines for Bangladeshi students: April and October intakes, language school intakes, COE windows and scholarship timing."
  },
  {
    "href": "/study/japan/japan-student-documents-checklist",
    "title": "Japan Student Admission, COE and Visa Documents Checklist for Bangladeshis",
    "description": "Complete documents checklist for Japan admission, COE and student visa in 2026 for Bangladeshi students: academic, financial, language and travel papers."
  },
  {
    "href": "/study/japan/mext-scholarship-guide-for-bangladeshi-students",
    "title": "MEXT (Japanese Government) Scholarship for Bangladeshi Students: Full Guide",
    "description": "MEXT scholarship guide for Bangladeshi students: categories, benefits, Ministry of Education step, written exam, interview and common mistakes."
  },
  {
    "href": "/study/japan/sop-and-study-plan-for-japan",
    "title": "SOP, Study Plan and Statement of Purpose for Japan: Structure, Tips and Mistakes",
    "description": "How to write an SOP, study plan or research plan for Japanese universities, MEXT and the COE application in 2026, with structure and common mistakes."
  }
];
const FAQS = [
  {
    "q": "Is there a central application portal for Japan?",
    "a": "No. You apply to each university or through a scholarship call."
  },
  {
    "q": "How much is the application fee?",
    "a": "It varies; many universities charge around JPY 10,000–30,000."
  },
  {
    "q": "How long does an offer take?",
    "a": "From a few weeks to a few months."
  },
  {
    "q": "Can I apply to several universities?",
    "a": "Yes, track deadlines and fees."
  },
  {
    "q": "Do I need an agent?",
    "a": "No. You can apply yourself; counselors can help with planning."
  },
  {
    "q": "What if I am rejected?",
    "a": "Ask for feedback, improve your profile and try another programme or intake."
  },
  {
    "q": "Do I need to attend exams in Japan?",
    "a": "Some exams are online; others require travel. Check each call."
  },
  {
    "q": "When do I pay tuition?",
    "a": "Often after admission and before COE application or arrival; follow the school's instructions."
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
          "name": "How to Apply (Step by Step)",
          "item": "https://eammu.com/study/japan/how-to-apply-to-japanese-universities"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "How to Apply to Japanese Universities from Bangladesh: Step-by-Step Guide",
      "description": "How to apply to Japanese universities from Bangladesh in 2026: direct applications, EJU, English programmes, MEXT routes, documents, fees and offers.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/how-to-apply-to-japanese-universities",
      "keywords": "how to apply Japanese university, Japan university application Bangladesh, apply to Japan self-financed",
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
          "name": "Is there a central application portal for Japan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. You apply to each university or through a scholarship call."
          }
        },
        {
          "@type": "Question",
          "name": "How much is the application fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It varies; many universities charge around JPY 10,000–30,000."
          }
        },
        {
          "@type": "Question",
          "name": "How long does an offer take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "From a few weeks to a few months."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply to several universities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, track deadlines and fees."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an agent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. You can apply yourself; counselors can help with planning."
          }
        },
        {
          "@type": "Question",
          "name": "What if I am rejected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ask for feedback, improve your profile and try another programme or intake."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to attend exams in Japan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some exams are online; others require travel. Check each call."
          }
        },
        {
          "@type": "Question",
          "name": "When do I pay tuition?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often after admission and before COE application or arrival; follow the school's instructions."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How to Apply to Japanese Universities from Bangladesh: Step-by-Step Guide",
      "description": "How to apply to Japanese universities from Bangladesh in 2026: direct applications, EJU, English programmes, MEXT routes, documents, fees and offers.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Shortlist programmes",
          "text": "Match course, language, budget and city."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Prepare documents and tests",
          "text": "Certificates, transcripts, language and exam results."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Submit applications",
          "text": "Apply to each university and pay fees."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Complete interviews or exams",
          "text": "Attend tests or interviews."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Accept the offer",
          "text": "Pay fees and begin COE steps."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">How to Apply to Japanese Universities from Bangladesh: Step-by-Step Guide</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">There is no single national portal, so you apply to each university or graduate school, or through a scholarship call.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Most international applicants apply directly to each university through its international admissions page.</li><li>Undergraduate applicants often need EJU or the university&apos;s own exam, plus language proof.</li><li>Graduate applicants usually contact a supervisor first.</li><li>Never pay application fees to unofficial links.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#main-application-routes" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Main application routes</a></li><li><a href="#step-by-step-process" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Step-by-step process</a></li><li><a href="#graduate-school-applications" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Graduate school applications</a></li><li><a href="#application-tips" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Application tips</a></li><li><a href="#after-you-get-an-offer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">After you get an offer</a></li><li><a href="#application-tracker-template" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Application tracker template</a></li><li><a href="#how-to-compare-offers" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to compare offers</a></li></ol>
          </nav>

          <article>
<section id="main-application-routes" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Main application routes</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Route</th><th scope="col" className="px-3 py-2 text-left font-bold">Where you apply</th><th scope="col" className="px-3 py-2 text-left font-bold">Best for</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Direct application</td><td className="px-3 py-2 align-top">University admissions or international office</td><td className="px-3 py-2 align-top">Students who self-finance or seek university scholarships</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">MEXT university recommendation</td><td className="px-3 py-2 align-top">Through the Japanese university</td><td className="px-3 py-2 align-top">Students targeting specific programmes and funding</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">MEXT embassy recommendation</td><td className="px-3 py-2 align-top">Through the Ministry of Education in Bangladesh</td><td className="px-3 py-2 align-top">Students seeking national scholarship</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Language school route</td><td className="px-3 py-2 align-top">Directly to the language school</td><td className="px-3 py-2 align-top">Students needing Japanese before degree study</td></tr></tbody></table></div>
</section>
<section id="step-by-step-process" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Step-by-step process</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Shortlist programmes with <Link href="/study/japan/top-universities-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities</Link> and <Link href="/study/japan/english-taught-programs-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">English programmes</Link>.</li><li>Read <Link href="/study/japan/admission-requirements-in-japan-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link>.</li><li>Prepare documents and certified translations.</li><li>Take required tests: <Link href="/study/japan/eju-exam-for-japanese-universities" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">EJU</Link>, JLPT, IELTS or university exams.</li><li>Submit applications and pay fees.</li><li>Attend interviews or online exams.</li><li>On admission, move to the <Link href="/study/japan/certificate-of-eligibility-coe-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">COE guide</Link>.</li></ol>
</section>
<section id="graduate-school-applications" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Graduate school applications</h2>
<p className="mt-4 leading-7 text-slate-700">For a master&apos;s or PhD, contact potential supervisors with your CV, research plan and transcripts. Many programmes accept research students first before formal admission. See <Link href="/study/japan/masters-and-phd-in-japan-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">master&apos;s and PhD guide</Link>.</p>
</section>
<section id="application-tips" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Application tips</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Write a tailored study plan, see <Link href="/study/japan/sop-and-study-plan-for-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study plan guide</Link>.</li><li>Use a professional email and reply promptly.</li><li>Keep all receipts and emails.</li><li>Apply to three to five programmes to spread risk.</li></ul>
</section>
<section id="after-you-get-an-offer" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">After you get an offer</h2>
<p className="mt-4 leading-7 text-slate-700">Confirm fees and refund rules, then plan <Link href="/study/japan/student-accommodation-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">housing</Link>, <Link href="/study/japan/financial-proof-requirements-for-japan-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">financial proof</Link> and timing with <Link href="/study/japan/japan-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake dates</Link>.</p>
</section>
<section id="application-tracker-template" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Application tracker template</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">University</th><th scope="col" className="px-3 py-2 text-left font-bold">Programme</th><th scope="col" className="px-3 py-2 text-left font-bold">Deadline</th><th scope="col" className="px-3 py-2 text-left font-bold">Fee</th><th scope="col" className="px-3 py-2 text-left font-bold">Status</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">University A</td><td className="px-3 py-2 align-top">Your programme</td><td className="px-3 py-2 align-top">Check site</td><td className="px-3 py-2 align-top">Check site</td><td className="px-3 py-2 align-top">Preparing</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">University B</td><td className="px-3 py-2 align-top">Your programme</td><td className="px-3 py-2 align-top">Check site</td><td className="px-3 py-2 align-top">Check site</td><td className="px-3 py-2 align-top">Submitted</td></tr></tbody></table></div><p className="mt-4 leading-7 text-slate-700">Copy this structure into a spreadsheet and update it weekly.</p>
</section>
<section id="how-to-compare-offers" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to compare offers</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Total cost including fees, rent and travel.</li><li>Programme quality and recognition.</li><li>Housing support.</li><li>Scholarship options.</li><li>Refund and deferral policies.</li></ul>
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
