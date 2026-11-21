import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/masters-and-phd-in-hungary-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Master's and PhD in Hungary for Bangladeshis 2026",
  "description": "Master's and PhD study in Hungary for Bangladeshi students in 2026: entry requirements, funding, supervisors, fees and scholarships.",
  "keywords": [
    "master in Hungary",
    "PhD in Hungary Bangladeshi",
    "Hungary doctoral scholarship",
    "MSc Hungary English"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/masters-and-phd-in-hungary-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Master's and PhD in Hungary for Bangladeshis 2026",
    "description": "Master's and PhD study in Hungary for Bangladeshi students in 2026: entry requirements, funding, supervisors, fees and scholarships.",
    "url": "https://eammu.com/study/hungary/masters-and-phd-in-hungary-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Master's and PhD in Hungary for Bangladeshis 2026",
    "description": "Master's and PhD study in Hungary for Bangladeshi students in 2026: entry requirements, funding, supervisors, fees and scholarships."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Master's & PhD", "href": "/study/hungary/masters-and-phd-in-hungary-for-bangladeshi-students"}];
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
    "href": "/study/hungary/stipendium-hungaricum-scholarship-guide",
    "title": "Stipendium Hungaricum Scholarship for Bangladeshi Students: Full Guide",
    "description": "Stipendium Hungaricum for Bangladeshi students: benefits, how to apply, the Ministry of Education sending partner step, documents and common mistakes."
  },
  {
    "href": "/study/hungary/mba-in-hungary-for-bangladeshi-students",
    "title": "MBA and Business Degrees in Hungary for Bangladeshi Students",
    "description": "MBA and business master's in Hungary for Bangladeshi students in 2026: universities, fees in BDT, entry requirements and career outlook."
  },
  {
    "href": "/study/hungary/part-time-job-and-post-study-work-rules-in-hungary",
    "title": "Part-Time Job and Post-Study Work Rules in Hungary for International Students",
    "description": "Work rules for international students in Hungary in 2026: 30 hours a week in term, full-time up to 90 days outside term, and post-study job-seeking permit."
  },
  {
    "href": "/study/hungary/bring-family-to-hungary-as-a-student",
    "title": "Can You Bring Family to Hungary as an International Student?",
    "description": "Can Bangladeshi students bring spouse or children to Hungary in 2026? Official rule on family reunification for student permit holders and alternatives."
  }
];
const FAQS = [
  {
    "q": "Can I do a master's in Hungary with a 4-year BSc?",
    "a": "Usually yes, provided the subject matches."
  },
  {
    "q": "How long is a PhD in Hungary?",
    "a": "Typically 3–4 years."
  },
  {
    "q": "Are PhD positions funded?",
    "a": "Some are, through scholarships or projects. Confirm with the programme."
  },
  {
    "q": "Do I need publications?",
    "a": "Not always, but they help."
  },
  {
    "q": "Is IELTS needed for a PhD?",
    "a": "Often some English proof is needed, depending on the university."
  },
  {
    "q": "Can I bring family with a PhD?",
    "a": "Student permit holders cannot use family reunification; see our family guide."
  },
  {
    "q": "Can I convert a master's to a PhD?",
    "a": "It depends on the university and performance."
  },
  {
    "q": "Are PhD students counted as students for the permit?",
    "a": "Doctoral students generally hold a study-based permit; confirm your exact status."
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
          "name": "Master's & PhD",
          "item": "https://eammu.com/study/hungary/masters-and-phd-in-hungary-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Master's and PhD in Hungary for Bangladeshi Students (2026)",
      "description": "Master's and PhD study in Hungary for Bangladeshi students in 2026: entry requirements, funding, supervisors, fees and scholarships.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/masters-and-phd-in-hungary-for-bangladeshi-students",
      "keywords": "master in Hungary, PhD in Hungary Bangladeshi, Hungary doctoral scholarship, MSc Hungary English",
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
          "name": "Can I do a master's in Hungary with a 4-year BSc?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually yes, provided the subject matches."
          }
        },
        {
          "@type": "Question",
          "name": "How long is a PhD in Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically 3–4 years."
          }
        },
        {
          "@type": "Question",
          "name": "Are PhD positions funded?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some are, through scholarships or projects. Confirm with the programme."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need publications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not always, but they help."
          }
        },
        {
          "@type": "Question",
          "name": "Is IELTS needed for a PhD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often some English proof is needed, depending on the university."
          }
        },
        {
          "@type": "Question",
          "name": "Can I bring family with a PhD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Student permit holders cannot use family reunification; see our family guide."
          }
        },
        {
          "@type": "Question",
          "name": "Can I convert a master's to a PhD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the university and performance."
          }
        },
        {
          "@type": "Question",
          "name": "Are PhD students counted as students for the permit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Doctoral students generally hold a study-based permit; confirm your exact status."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Master&apos;s and PhD in Hungary for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Hungary offers affordable master&apos;s degrees and funded doctoral routes in many fields.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Master&apos;s programmes usually take 1.5–2 years.</li><li>PhD routes often require a supervisor and research proposal.</li><li>Stipendium Hungaricum covers master&apos;s and doctoral levels.</li><li>Research fit matters more than rank.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#master-s-degrees" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Master&apos;s degrees</a></li><li><a href="#phd-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">PhD in Hungary</a></li><li><a href="#funding-options" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Funding options</a></li><li><a href="#after-the-degree" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">After the degree</a></li><li><a href="#how-to-approach-a-phd-supervisor" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to approach a PhD supervisor</a></li><li><a href="#master-s-thesis-and-career-planning" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Master&apos;s thesis and career planning</a></li><li><a href="#research-fields-where-hungary-is-strong" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Research fields where Hungary is strong</a></li></ol>
          </nav>

          <article>
<section id="master-s-degrees" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Master&apos;s degrees</h2>
<p className="mt-4 leading-7 text-slate-700">Entry normally requires a relevant bachelor&apos;s degree, English proof, CV and motivation letter. Popular fields include computer science, engineering, business, data science and environmental science. See <Link href="/study/hungary/mba-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MBA and business</Link> and <Link href="/study/hungary/cse-and-it-courses-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT</Link>.</p>
</section>
<section id="phd-in-hungary" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">PhD in Hungary</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Find a supervisor and agree on a topic before applying.</li><li>Prepare a research proposal and publications if any.</li><li>Check whether the position is funded and the stipend level.</li><li>Understand the doctoral school structure and timeline.</li></ul>
</section>
<section id="funding-options" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Funding options</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Route</th><th scope="col" className="px-3 py-2 text-left font-bold">Notes</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Stipendium Hungaricum</td><td className="px-3 py-2 align-top">Covers master&apos;s and doctoral levels, see <Link href="/study/hungary/stipendium-hungaricum-scholarship-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">guide</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">University or lab-funded positions</td><td className="px-3 py-2 align-top">Check stipend and duties</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Self-financed</td><td className="px-3 py-2 align-top">Fees vary; see <Link href="/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition</Link></td></tr></tbody></table></div>
</section>
<section id="after-the-degree" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">After the degree</h2>
<p className="mt-4 leading-7 text-slate-700">Graduates can explore a permit to seek work or start a business; see <Link href="/study/hungary/part-time-job-and-post-study-work-rules-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">post-study rules</Link>.</p>
</section>
<section id="how-to-approach-a-phd-supervisor" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to approach a PhD supervisor</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Read the supervisor&apos;s recent publications.</li><li>Write a concise email with your background and research idea.</li><li>Attach your CV and a short proposal.</li><li>Ask about funding and doctoral school rules.</li><li>Follow up politely after two weeks.</li></ol>
</section>
<section id="master-s-thesis-and-career-planning" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Master&apos;s thesis and career planning</h2>
<p className="mt-4 leading-7 text-slate-700">Choose thesis topics that connect to employer needs or further research. Build networks through seminars, conferences and internships. See <Link href="/study/hungary/part-time-job-and-post-study-work-rules-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">post-study rules</Link> for work options after graduation.</p>
</section>
<section id="research-fields-where-hungary-is-strong" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Research fields where Hungary is strong</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Life sciences, pharmacy and medical research.</li><li>Physics, mathematics and computer science.</li><li>Chemistry and materials engineering.</li><li>Agricultural and environmental science.</li><li>Economics and international relations.</li></ul><p className="mt-4 leading-7 text-slate-700">Search the university&apos;s doctoral school pages for research groups, funding notes and English-language support, and contact supervisors with a specific proposal.</p>
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
