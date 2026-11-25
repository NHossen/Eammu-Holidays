import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/study-in-japan-after-ssc';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Japan After SSC 2026 | Eammu Holidays",
  "description": "Can you study in Japan after SSC? Bangladeshi students in 2026: why SSC alone is not enough, HSC and KOSEN options, and next steps.",
  "keywords": [
    "study in Japan after SSC",
    "Japan after 10th grade",
    "Japan KOSEN Bangladesh"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/study-in-japan-after-ssc"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Japan After SSC 2026 | Eammu Holidays",
    "description": "Can you study in Japan after SSC? Bangladeshi students in 2026: why SSC alone is not enough, HSC and KOSEN options, and next steps.",
    "url": "https://eammu.com/study/japan/study-in-japan-after-ssc",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Japan After SSC 2026 | Eammu Holidays",
    "description": "Can you study in Japan after SSC? Bangladeshi students in 2026: why SSC alone is not enough, HSC and KOSEN options, and next steps."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "After SSC", "href": "/study/japan/study-in-japan-after-ssc"}];
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
    "href": "/study/japan/study-in-japan-after-diploma",
    "title": "Study in Japan After Diploma in Engineering",
    "description": "Study in Japan after a Bangladesh diploma in 2026: bachelor's entry, KOSEN, vocational colleges, recognition and visa tips for diploma holders."
  },
  {
    "href": "/study/japan/kosen-and-vocational-colleges-in-japan",
    "title": "KOSEN and Vocational Colleges (Senmon Gakko) in Japan for Bangladeshi Students",
    "description": "KOSEN technical colleges and vocational colleges in Japan for Bangladeshi students in 2026: entry, Japanese level, MEXT categories, costs and career paths."
  },
  {
    "href": "/study/japan/bachelors-in-japan-for-bangladeshi-students",
    "title": "Bachelor's Degree in Japan for Bangladeshi Students",
    "description": "Bachelor's degrees in Japan for Bangladeshi students in 2026: Japanese and English-taught options, entry requirements, fees in BDT and how to apply after HSC."
  },
  {
    "href": "/study/japan/admission-requirements-in-japan-for-bangladeshi-students",
    "title": "Admission Requirements in Japan for Bangladeshi Students",
    "description": "Admission requirements for Japanese universities in 2026 for Bangladeshi students: HSC, bachelor's, language tests, EJU, entrance exams and documents."
  }
];
const FAQS = [
  {
    "q": "Can I go to Japan directly after SSC?",
    "a": "Normally no for university study; you need 12 years of schooling."
  },
  {
    "q": "Is there a KOSEN route?",
    "a": "MEXT has a KOSEN scholarship category with age limits; check the current guidelines."
  },
  {
    "q": "Can a diploma holder skip HSC?",
    "a": "Possibly for some programmes; confirm with the school."
  },
  {
    "q": "What if I only have SSC and a gap?",
    "a": "Complete further study first."
  },
  {
    "q": "Can I get MEXT after SSC?",
    "a": "MEXT KOSEN and specialised training categories may be options; check age and qualification rules."
  },
  {
    "q": "Which HSC subjects should I take?",
    "a": "Science for engineering and medicine; business or science for economics."
  },
  {
    "q": "Can I study Japanese after SSC?",
    "a": "Yes, language study is useful, but it does not replace the 12-year requirement."
  },
  {
    "q": "Is A-level accepted?",
    "a": "Generally yes if the school recognises it."
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
          "name": "After SSC",
          "item": "https://eammu.com/study/japan/study-in-japan-after-ssc"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Japan After SSC (2026): Pathway Options",
      "description": "Can you study in Japan after SSC? Bangladeshi students in 2026: why SSC alone is not enough, HSC and KOSEN options, and next steps.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/study-in-japan-after-ssc",
      "keywords": "study in Japan after SSC, Japan after 10th grade, Japan KOSEN Bangladesh",
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
          "name": "Can I go to Japan directly after SSC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Normally no for university study; you need 12 years of schooling."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a KOSEN route?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MEXT has a KOSEN scholarship category with age limits; check the current guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "Can a diploma holder skip HSC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possibly for some programmes; confirm with the school."
          }
        },
        {
          "@type": "Question",
          "name": "What if I only have SSC and a gap?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Complete further study first."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get MEXT after SSC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MEXT KOSEN and specialised training categories may be options; check age and qualification rules."
          }
        },
        {
          "@type": "Question",
          "name": "Which HSC subjects should I take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Science for engineering and medicine; business or science for economics."
          }
        },
        {
          "@type": "Question",
          "name": "Can I study Japanese after SSC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, language study is useful, but it does not replace the 12-year requirement."
          }
        },
        {
          "@type": "Question",
          "name": "Is A-level accepted?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally yes if the school recognises it."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Japan After SSC (2026): Pathway Options</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">SSC alone is not enough for Japanese university study, but there are routes.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Japanese universities require 12 years of schooling, so HSC or equivalent is normally needed.</li><li>MEXT offers a KOSEN and specialised training college route, with age limits, for younger students.</li><li>Language schools also require 12 years of schooling in most cases.</li><li>Be cautious of agents promising direct entry after SSC.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#why-ssc-is-not-enough" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Why SSC is not enough</a></li><li><a href="#your-realistic-options" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Your realistic options</a></li><li><a href="#planning-while-finishing-hsc" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Planning while finishing HSC</a></li><li><a href="#what-to-avoid" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What to avoid</a></li><li><a href="#a-sample-plan-from-ssc-to-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">A sample plan from SSC to Japan</a></li><li><a href="#why-not-rush" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Why not rush</a></li></ol>
          </nav>

          <article>
<section id="why-ssc-is-not-enough" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Why SSC is not enough</h2>
<p className="mt-4 leading-7 text-slate-700">SSC represents about ten years of schooling. Japanese universities and most language schools expect 12 years of school education, which in Bangladesh means HSC, A-levels or an accepted equivalent. See <Link href="/study/japan/admission-requirements-in-japan-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link>.</p>
</section>
<section id="your-realistic-options" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Your realistic options</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Option</th><th scope="col" className="px-3 py-2 text-left font-bold">Suitable for</th><th scope="col" className="px-3 py-2 text-left font-bold">Note</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Finish HSC, then apply</td><td className="px-3 py-2 align-top">Most SSC students</td><td className="px-3 py-2 align-top">Cleanest route</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">KOSEN or technical routes</td><td className="px-3 py-2 align-top">Young technical students</td><td className="px-3 py-2 align-top">See <Link href="/study/japan/kosen-and-vocational-colleges-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">KOSEN and vocational</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Diploma in Engineering route</td><td className="px-3 py-2 align-top">Technical students</td><td className="px-3 py-2 align-top">See <Link href="/study/japan/study-in-japan-after-diploma" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">after diploma</Link></td></tr></tbody></table></div>
</section>
<section id="planning-while-finishing-hsc" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Planning while finishing HSC</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Choose subjects matching your target (science for engineering).</li><li>Start Japanese or English preparation early.</li><li>Research programmes through <Link href="/study/japan/top-universities-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities</Link>.</li><li>Build a budget with <Link href="/study/japan/tuition-fees-in-japan-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees</Link>.</li></ul>
</section>
<section id="what-to-avoid" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What to avoid</h2>
<p className="mt-4 leading-7 text-slate-700">Do not accept offers that skip academic requirements or ask for money before verification. See <Link href="/study/japan/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa requirements</Link>.</p>
</section>
<section id="a-sample-plan-from-ssc-to-japan" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">A sample plan from SSC to Japan</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Stage</th><th scope="col" className="px-3 py-2 text-left font-bold">Action</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Year 1 of HSC</td><td className="px-3 py-2 align-top">Choose subjects and start Japanese basics</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Year 2 of HSC</td><td className="px-3 py-2 align-top">Prepare English, JLPT or JFT-Basic, and collect documents</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">After HSC</td><td className="px-3 py-2 align-top">Apply to universities, scholarships or language schools</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Admission</td><td className="px-3 py-2 align-top">COE and Student visa</td></tr></tbody></table></div>
</section>
<section id="why-not-rush" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Why not rush</h2>
<p className="mt-4 leading-7 text-slate-700">Completing HSC gives you a wider choice, better scholarship eligibility and a stronger visa file. Rushing into an unverified shortcut can lead to wasted fees and refusal. Use the time to build grades, language and a clear plan.</p>
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
