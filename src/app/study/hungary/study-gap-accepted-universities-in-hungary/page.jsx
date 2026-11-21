import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/study-gap-accepted-universities-in-hungary';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study Gap Accepted Universities in Hungary 2026",
  "description": "Study gap and Hungary in 2026: how universities and visa officers view gaps, what explanations work and how Bangladeshi students can prepare.",
  "keywords": [
    "study gap accepted Hungary",
    "gap year Hungary university",
    "Hungary visa study gap Bangladesh"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/study-gap-accepted-universities-in-hungary"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study Gap Accepted Universities in Hungary 2026",
    "description": "Study gap and Hungary in 2026: how universities and visa officers view gaps, what explanations work and how Bangladeshi students can prepare.",
    "url": "https://eammu.com/study/hungary/study-gap-accepted-universities-in-hungary",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study Gap Accepted Universities in Hungary 2026",
    "description": "Study gap and Hungary in 2026: how universities and visa officers view gaps, what explanations work and how Bangladeshi students can prepare."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Study Gap Accepted", "href": "/study/hungary/study-gap-accepted-universities-in-hungary"}];
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
    "href": "/study/hungary/admission-requirements-in-hungary-for-bangladeshi-students",
    "title": "Admission Requirements in Hungary for Bangladeshi Students",
    "description": "Admission requirements for Hungarian universities in 2026 for Bangladeshi students: HSC, bachelor's, English tests, entrance exams and documents."
  },
  {
    "href": "/study/hungary/sop-and-motivation-letter-for-hungary",
    "title": "SOP and Motivation Letter for Hungary: Structure, Tips and Mistakes",
    "description": "How to write an SOP or motivation letter for Hungarian universities and Stipendium Hungaricum in 2026, with structure, tips and common mistakes."
  },
  {
    "href": "/study/hungary/hungary-student-visa-refusal-reasons",
    "title": "Hungary Student Visa Refusal Reasons and How to Avoid Them",
    "description": "Common reasons Hungary student visas and permits are refused for Bangladeshi applicants in 2026, and how to prepare a stronger file or reapply."
  },
  {
    "href": "/study/hungary/foundation-year-and-preparatory-courses-in-hungary",
    "title": "Foundation Year and Preparatory Courses in Hungary",
    "description": "Foundation year and preparatory courses in Hungary for Bangladeshi students in 2026: who needs them, costs, language prep and permit rules."
  }
];
const FAQS = [
  {
    "q": "How many years of gap are accepted in Hungary?",
    "a": "There is no fixed figure. Shorter, well-explained gaps are safer than long unexplained ones."
  },
  {
    "q": "Can I explain a gap with a job?",
    "a": "Yes, with verifiable employment records."
  },
  {
    "q": "Is a gap a problem for Stipendium Hungaricum?",
    "a": "The call sets age and academic criteria; check the current call and your documents."
  },
  {
    "q": "Will the embassy ask about my gap?",
    "a": "Possibly. Be ready to explain it consistently."
  },
  {
    "q": "Can I improve my profile during a gap?",
    "a": "Yes, through courses, certifications and relevant work."
  },
  {
    "q": "Should I hide a gap?",
    "a": "No. Explain it honestly and provide evidence."
  },
  {
    "q": "Does a work-based gap help?",
    "a": "Yes, verifiable work experience in a related field can make a gap easier to explain."
  },
  {
    "q": "Will a gap affect scholarship chances?",
    "a": "It can if it lowers your academic profile, but a clear story and strong results help."
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
          "name": "Study Gap Accepted",
          "item": "https://eammu.com/study/hungary/study-gap-accepted-universities-in-hungary"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study Gap Accepted Universities in Hungary (2026): Honest Guide",
      "description": "Study gap and Hungary in 2026: how universities and visa officers view gaps, what explanations work and how Bangladeshi students can prepare.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/study-gap-accepted-universities-in-hungary",
      "keywords": "study gap accepted Hungary, gap year Hungary university, Hungary visa study gap Bangladesh",
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
          "name": "How many years of gap are accepted in Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no fixed figure. Shorter, well-explained gaps are safer than long unexplained ones."
          }
        },
        {
          "@type": "Question",
          "name": "Can I explain a gap with a job?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, with verifiable employment records."
          }
        },
        {
          "@type": "Question",
          "name": "Is a gap a problem for Stipendium Hungaricum?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The call sets age and academic criteria; check the current call and your documents."
          }
        },
        {
          "@type": "Question",
          "name": "Will the embassy ask about my gap?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possibly. Be ready to explain it consistently."
          }
        },
        {
          "@type": "Question",
          "name": "Can I improve my profile during a gap?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, through courses, certifications and relevant work."
          }
        },
        {
          "@type": "Question",
          "name": "Should I hide a gap?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Explain it honestly and provide evidence."
          }
        },
        {
          "@type": "Question",
          "name": "Does a work-based gap help?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, verifiable work experience in a related field can make a gap easier to explain."
          }
        },
        {
          "@type": "Question",
          "name": "Will a gap affect scholarship chances?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can if it lowers your academic profile, but a clear story and strong results help."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study Gap Accepted Universities in Hungary (2026): Honest Guide</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A gap is not an automatic rejection, but it must be explained and documented.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>No single Hungarian rule sets a maximum gap; universities and visa officers assess each case.</li><li>Document what you did: work, courses, family reasons, health.</li><li>Longer or unexplained gaps raise refusal risk.</li><li>Never accept a fake experience letter.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#how-gaps-are-assessed" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How gaps are assessed</a></li><li><a href="#what-to-prepare" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What to prepare</a></li><li><a href="#which-programmes-are-more-flexible" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Which programmes are more flexible</a></li><li><a href="#risks-to-avoid" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Risks to avoid</a></li><li><a href="#how-to-present-your-gap-in-the-motivation-letter" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to present your gap in the motivation letter</a></li><li><a href="#gap-length-and-risk" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Gap length and risk</a></li></ol>
          </nav>

          <article>
<section id="how-gaps-are-assessed" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How gaps are assessed</h2>
<p className="mt-4 leading-7 text-slate-700">Universities look at academic readiness, while the immigration authority looks at purpose of stay and credibility. A gap that is explained with consistent documents is easier to accept than a vague one.</p>
</section>
<section id="what-to-prepare" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What to prepare</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>A clear timeline from your last qualification to today.</li><li>Employment letters, payslips or tax records for work periods.</li><li>Course certificates for skill building.</li><li>Medical or family documents when relevant.</li><li>A motivation letter that connects the gap to your plan, see <Link href="/study/hungary/sop-and-motivation-letter-for-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">SOP guide</Link>.</li></ul>
</section>
<section id="which-programmes-are-more-flexible" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Which programmes are more flexible</h2>
<p className="mt-4 leading-7 text-slate-700">Programmes with strong demand for mature applicants, such as some master&apos;s, business and vocational pathways, can be more flexible, but flexibility is never a guarantee. Compare with <Link href="/study/hungary/admission-requirements-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link> and consider a <Link href="/study/hungary/foundation-year-and-preparatory-courses-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">foundation year</Link> if you need to rebuild your profile.</p>
</section>
<section id="risks-to-avoid" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Risks to avoid</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Forged experience letters or certificates.</li><li>Contradictory dates between documents.</li><li>Agents promising &quot;gap accepted guaranteed&quot;.</li><li>Ignoring the visa stage, see <Link href="/study/hungary/hungary-student-visa-refusal-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">refusal reasons</Link>.</li></ul>
</section>
<section id="how-to-present-your-gap-in-the-motivation-letter" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to present your gap in the motivation letter</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>State the dates plainly.</li><li>Describe what you did, with evidence.</li><li>Explain what you learned or achieved.</li><li>Link the gap to your decision to study the chosen programme.</li><li>Avoid blaming others and keep the tone professional.</li></ol>
</section>
<section id="gap-length-and-risk" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Gap length and risk</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Gap length</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical risk level</th><th scope="col" className="px-3 py-2 text-left font-bold">What to do</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Up to 1 year</td><td className="px-3 py-2 align-top">Low</td><td className="px-3 py-2 align-top">Explain briefly</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">1–3 years</td><td className="px-3 py-2 align-top">Moderate</td><td className="px-3 py-2 align-top">Provide work or study evidence</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Over 3 years</td><td className="px-3 py-2 align-top">Higher</td><td className="px-3 py-2 align-top">Strong documentation, relevant experience and a clear plan</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">This table is Eammu&apos;s general guidance, not an official rule.</p>
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
