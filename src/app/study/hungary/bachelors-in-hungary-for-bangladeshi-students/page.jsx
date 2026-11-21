import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/bachelors-in-hungary-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Bachelor's Degree in Hungary for Bangladeshi Students 2026",
  "description": "Bachelor's degrees in Hungary for Bangladeshi students in 2026: popular courses, entry requirements, fees in BDT and how to apply after HSC.",
  "keywords": [
    "bachelor in Hungary",
    "Hungary undergraduate Bangladeshi students",
    "BSc Hungary English",
    "study Hungary after HSC"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/bachelors-in-hungary-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Bachelor's Degree in Hungary for Bangladeshi Students 2026",
    "description": "Bachelor's degrees in Hungary for Bangladeshi students in 2026: popular courses, entry requirements, fees in BDT and how to apply after HSC.",
    "url": "https://eammu.com/study/hungary/bachelors-in-hungary-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Bachelor's Degree in Hungary for Bangladeshi Students 2026",
    "description": "Bachelor's degrees in Hungary for Bangladeshi students in 2026: popular courses, entry requirements, fees in BDT and how to apply after HSC."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Bachelor's Degrees", "href": "/study/hungary/bachelors-in-hungary-for-bangladeshi-students"}];
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
    "href": "/study/hungary/study-in-hungary-after-ssc",
    "title": "Study in Hungary After SSC: Foundation and Pathway Options",
    "description": "Can you study in Hungary after SSC? Bangladeshi students in 2026: why SSC alone is not enough, foundation routes, HSC and what to do next."
  },
  {
    "href": "/study/hungary/cse-and-it-courses-in-hungary",
    "title": "CSE and IT Courses in Hungary for Bangladeshi Students",
    "description": "CSE and IT courses in Hungary for Bangladeshi students in 2026: computer science, software engineering and data science programmes, fees and careers."
  },
  {
    "href": "/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students",
    "title": "Tuition Fees in Hungary for Bangladeshi Students in EUR and BDT",
    "description": "Tuition fees in Hungary for Bangladeshi students in 2026: bachelor, master, PhD and medicine fees in EUR and BDT, plus scholarship savings."
  },
  {
    "href": "/study/hungary/how-to-apply-to-hungarian-universities",
    "title": "How to Apply to Hungarian Universities from Bangladesh: Step-by-Step Guide",
    "description": "How to apply to Hungarian universities from Bangladesh in 2026: direct applications, Stipendium Hungaricum, documents, fees, offers and next steps."
  }
];
const FAQS = [
  {
    "q": "How long is a bachelor's in Hungary?",
    "a": "Commonly 3–4 years, longer for professional programmes."
  },
  {
    "q": "Can I study a bachelor's in English?",
    "a": "Yes, many programmes are taught in English."
  },
  {
    "q": "Is HSC science required for engineering?",
    "a": "Usually science subjects, especially maths and physics, are expected."
  },
  {
    "q": "Can I work during a bachelor's?",
    "a": "Yes within student work limits."
  },
  {
    "q": "Is a scholarship available for bachelor's?",
    "a": "Stipendium Hungaricum includes bachelor's programmes."
  },
  {
    "q": "Can I transfer credits from Bangladesh?",
    "a": "Sometimes, at the university's discretion."
  },
  {
    "q": "Is attendance compulsory?",
    "a": "Many programmes have attendance rules, especially for labs and seminars."
  },
  {
    "q": "Can I do an internship during my bachelor's?",
    "a": "Some programmes include internships; others rely on student initiative."
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
          "name": "Bachelor's Degrees",
          "item": "https://eammu.com/study/hungary/bachelors-in-hungary-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Bachelor's Degree in Hungary for Bangladeshi Students (2026)",
      "description": "Bachelor's degrees in Hungary for Bangladeshi students in 2026: popular courses, entry requirements, fees in BDT and how to apply after HSC.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/bachelors-in-hungary-for-bangladeshi-students",
      "keywords": "bachelor in Hungary, Hungary undergraduate Bangladeshi students, BSc Hungary English, study Hungary after HSC",
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
          "name": "How long is a bachelor's in Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commonly 3–4 years, longer for professional programmes."
          }
        },
        {
          "@type": "Question",
          "name": "Can I study a bachelor's in English?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, many programmes are taught in English."
          }
        },
        {
          "@type": "Question",
          "name": "Is HSC science required for engineering?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually science subjects, especially maths and physics, are expected."
          }
        },
        {
          "@type": "Question",
          "name": "Can I work during a bachelor's?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes within student work limits."
          }
        },
        {
          "@type": "Question",
          "name": "Is a scholarship available for bachelor's?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stipendium Hungaricum includes bachelor's programmes."
          }
        },
        {
          "@type": "Question",
          "name": "Can I transfer credits from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sometimes, at the university's discretion."
          }
        },
        {
          "@type": "Question",
          "name": "Is attendance compulsory?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many programmes have attendance rules, especially for labs and seminars."
          }
        },
        {
          "@type": "Question",
          "name": "Can I do an internship during my bachelor's?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some programmes include internships; others rely on student initiative."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Bachelor&apos;s Degree in Hungary for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Three- and four-year bachelor&apos;s programmes in English open the Hungarian door after HSC.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Typical programmes last 3–4 years, with professional degrees such as medicine longer.</li><li>HSC (12 years) with matching subjects is the standard entry.</li><li>Popular fields include IT, engineering, business and health sciences.</li><li>Scholarships and self-financed routes both exist.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#popular-bachelor-s-fields" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Popular bachelor&apos;s fields</a></li><li><a href="#entry-requirements" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Entry requirements</a></li><li><a href="#cost-snapshot" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cost snapshot</a></li><li><a href="#how-to-apply" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to apply</a></li><li><a href="#typical-bachelor-s-study-structure" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Typical bachelor&apos;s study structure</a></li><li><a href="#tips-for-first-year-success" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Tips for first-year success</a></li><li><a href="#choosing-between-a-3-year-and-a-4-year-bachelor-s" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Choosing between a 3-year and a 4-year bachelor&apos;s</a></li></ol>
          </nav>

          <article>
<section id="popular-bachelor-s-fields" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Popular bachelor&apos;s fields</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Computer science, software engineering and data science.</li><li>Mechanical, electrical, civil and mechatronics engineering.</li><li>Business, economics and international relations.</li><li>Architecture, design and arts.</li><li>Health sciences, nursing and dentistry.</li></ul><p className="mt-4 leading-7 text-slate-700">See <Link href="/study/hungary/cse-and-it-courses-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT</Link>, <Link href="/study/hungary/engineering-courses-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">engineering</Link> and <Link href="/study/hungary/mbbs-and-medical-degrees-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">medical degrees</Link>.</p>
</section>
<section id="entry-requirements" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Entry requirements</h2>
<p className="mt-4 leading-7 text-slate-700">Entry normally needs HSC or equivalent, English proof and a motivation letter; some courses add entrance exams. Full details in <Link href="/study/hungary/admission-requirements-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link>. If you have only SSC, read <Link href="/study/hungary/study-in-hungary-after-ssc" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">after SSC</Link>.</p>
</section>
<section id="cost-snapshot" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Cost snapshot</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">EUR (per year)</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT approx. (per year)</th><th scope="col" className="px-3 py-2 text-left font-bold">What to check</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tuition (most bachelor&apos;s)</td><td className="px-3 py-2 align-top">EUR 2,000 – 6,500</td><td className="px-3 py-2 align-top">Tk 2,80,000 – 9,10,000</td><td className="px-3 py-2 align-top">Free for scholarship holders</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living (12 months)</td><td className="px-3 py-2 align-top">EUR 5,400 – 10,800</td><td className="px-3 py-2 align-top">Tk 7,56,000 – 15,12,000</td><td className="px-3 py-2 align-top">City dependent</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 EUR = about HUF 400 = about Tk 140 and are indicative planning estimates for 2026–2027, based on published university pages and Hungarian immigration guidance. Fees, funds rules and exchange rates change, so always confirm with the university, the Hungarian immigration authority (oif.gov.hu) and an Eammu Holidays counselor before paying anything.</p>
</section>
<section id="how-to-apply" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to apply</h2>
<p className="mt-4 leading-7 text-slate-700">Follow the <Link href="/study/hungary/how-to-apply-to-hungarian-universities" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">application guide</Link> and consider the <Link href="/study/hungary/stipendium-hungaricum-scholarship-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarship route</Link>. If you need bridging, see <Link href="/study/hungary/foundation-year-and-preparatory-courses-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">foundation year</Link>.</p>
</section>
<section id="typical-bachelor-s-study-structure" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Typical bachelor&apos;s study structure</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Credit-based system with semesters.</li><li>Mix of lectures, labs, seminars and projects.</li><li>Final thesis or project in many programmes.</li><li>Opportunities for exchange depending on university agreements.</li></ul>
</section>
<section id="tips-for-first-year-success" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Tips for first-year success</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Attend orientation and register with the international office.</li><li>Join study groups early.</li><li>Learn the grading and attendance rules.</li><li>Use library and tutoring support.</li><li>Budget carefully for the first semester.</li></ul>
</section>
<section id="choosing-between-a-3-year-and-a-4-year-bachelor-s" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Choosing between a 3-year and a 4-year bachelor&apos;s</h2>
<p className="mt-4 leading-7 text-slate-700">Some Hungarian programmes follow a three-year structure and others four years, and professional degrees run longer. Check whether the length matches what Bangladeshi employers, regulators or master&apos;s programmes expect, and calculate the extra year&apos;s cost in tuition and living expenses.</p>
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
