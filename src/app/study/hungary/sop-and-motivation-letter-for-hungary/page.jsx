import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/sop-and-motivation-letter-for-hungary';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "SOP and Motivation Letter for Hungary 2026 | Eammu",
  "description": "How to write an SOP or motivation letter for Hungarian universities and Stipendium Hungaricum in 2026, with structure, tips and common mistakes.",
  "keywords": [
    "SOP for Hungary",
    "motivation letter Stipendium Hungaricum",
    "statement of purpose Hungary"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/sop-and-motivation-letter-for-hungary"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "SOP and Motivation Letter for Hungary 2026 | Eammu",
    "description": "How to write an SOP or motivation letter for Hungarian universities and Stipendium Hungaricum in 2026, with structure, tips and common mistakes.",
    "url": "https://eammu.com/study/hungary/sop-and-motivation-letter-for-hungary",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "SOP and Motivation Letter for Hungary 2026 | Eammu",
    "description": "How to write an SOP or motivation letter for Hungarian universities and Stipendium Hungaricum in 2026, with structure, tips and common mistakes."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "SOP & Motivation Letter", "href": "/study/hungary/sop-and-motivation-letter-for-hungary"}];
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
    "href": "/study/hungary/how-to-apply-to-hungarian-universities",
    "title": "How to Apply to Hungarian Universities from Bangladesh: Step-by-Step Guide",
    "description": "How to apply to Hungarian universities from Bangladesh in 2026: direct applications, Stipendium Hungaricum, documents, fees, offers and next steps."
  },
  {
    "href": "/study/hungary/stipendium-hungaricum-scholarship-guide",
    "title": "Stipendium Hungaricum Scholarship for Bangladeshi Students: Full Guide",
    "description": "Stipendium Hungaricum for Bangladeshi students: benefits, how to apply, the Ministry of Education sending partner step, documents and common mistakes."
  },
  {
    "href": "/study/hungary/hungary-student-documents-checklist",
    "title": "Hungary Student Visa and Admission Documents Checklist for Bangladeshis",
    "description": "Complete documents checklist for Hungary admission and student visa in 2026 for Bangladeshi students: academic, financial, travel and insurance papers."
  },
  {
    "href": "/study/hungary/study-gap-accepted-universities-in-hungary",
    "title": "Study Gap Accepted Universities in Hungary: Honest Guide",
    "description": "Study gap and Hungary in 2026: how universities and visa officers view gaps, what explanations work and how Bangladeshi students can prepare."
  }
];
const FAQS = [
  {
    "q": "Is an SOP needed for Hungary?",
    "a": "Most programmes ask for a motivation letter or SOP."
  },
  {
    "q": "How long should it be?",
    "a": "Usually one page or 400–600 words unless the call says otherwise."
  },
  {
    "q": "Can I use AI or templates?",
    "a": "Use tools only for editing; the content must be your own, genuine and consistent."
  },
  {
    "q": "Should I mention the scholarship?",
    "a": "Only if relevant to the application form."
  },
  {
    "q": "Do I need different letters for different universities?",
    "a": "Yes, tailor each one."
  },
  {
    "q": "Will Eammu write my SOP?",
    "a": "We guide and review; you should write it yourself so it reflects you."
  },
  {
    "q": "Can I reuse the same letter for scholarship and university?",
    "a": "Reuse structure but tailor details to each requirement."
  },
  {
    "q": "Should I mention financial need?",
    "a": "Only if the application form asks for it."
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
          "name": "SOP & Motivation Letter",
          "item": "https://eammu.com/study/hungary/sop-and-motivation-letter-for-hungary"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "SOP and Motivation Letter for Hungary: Structure, Tips and Mistakes",
      "description": "How to write an SOP or motivation letter for Hungarian universities and Stipendium Hungaricum in 2026, with structure, tips and common mistakes.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/sop-and-motivation-letter-for-hungary",
      "keywords": "SOP for Hungary, motivation letter Stipendium Hungaricum, statement of purpose Hungary",
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
          "name": "Is an SOP needed for Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most programmes ask for a motivation letter or SOP."
          }
        },
        {
          "@type": "Question",
          "name": "How long should it be?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually one page or 400–600 words unless the call says otherwise."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use AI or templates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use tools only for editing; the content must be your own, genuine and consistent."
          }
        },
        {
          "@type": "Question",
          "name": "Should I mention the scholarship?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only if relevant to the application form."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need different letters for different universities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, tailor each one."
          }
        },
        {
          "@type": "Question",
          "name": "Will Eammu write my SOP?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We guide and review; you should write it yourself so it reflects you."
          }
        },
        {
          "@type": "Question",
          "name": "Can I reuse the same letter for scholarship and university?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reuse structure but tailor details to each requirement."
          }
        },
        {
          "@type": "Question",
          "name": "Should I mention financial need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only if the application form asks for it."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">SOP and Motivation Letter for Hungary: Structure, Tips and Mistakes</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A clear, honest letter can decide a scholarship or visa file.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Keep it specific: why this course, why Hungary, why now.</li><li>Link your past study to your future plan.</li><li>Avoid copied templates; reviewers and visa officers notice them.</li><li>One to two pages is usually enough.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#structure-that-works" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Structure that works</a></li><li><a href="#what-to-include" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What to include</a></li><li><a href="#common-mistakes" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Common mistakes</a></li><li><a href="#where-it-is-used" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Where it is used</a></li><li><a href="#a-paragraph-by-paragraph-example-outline" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">A paragraph-by-paragraph example outline</a></li><li><a href="#editing-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Editing checklist</a></li><li><a href="#do-and-do-not" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Do and do not</a></li></ol>
          </nav>

          <article>
<section id="structure-that-works" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Structure that works</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Opening: who you are and the programme you want.</li><li>Academic background and key projects or results.</li><li>Why Hungary and this university.</li><li>Career goals and how the degree helps.</li><li>Short conclusion with return or future plan.</li></ol>
</section>
<section id="what-to-include" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What to include</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Specific modules or labs that attract you.</li><li>Concrete achievements with numbers or outcomes.</li><li>An honest explanation of any gap, see <Link href="/study/hungary/study-gap-accepted-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study gap guide</Link>.</li><li>Language ability and how you prepared.</li></ul>
</section>
<section id="common-mistakes" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Common mistakes</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Copying online samples or using generic praise of Hungary.</li><li>Contradicting your CV or documents.</li><li>Ignoring the programme requirements.</li><li>Writing too long or too emotional.</li></ul>
</section>
<section id="where-it-is-used" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Where it is used</h2>
<p className="mt-4 leading-7 text-slate-700">Use it for direct applications and for <Link href="/study/hungary/stipendium-hungaricum-scholarship-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Stipendium Hungaricum</Link>. A consistent story also helps at the <Link href="/study/hungary/hungary-student-visa-application-guide-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa stage</Link>.</p>
</section>
<section id="a-paragraph-by-paragraph-example-outline" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">A paragraph-by-paragraph example outline</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Paragraph</th><th scope="col" className="px-3 py-2 text-left font-bold">Content</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">1</td><td className="px-3 py-2 align-top">Introduce yourself and the programme</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">2</td><td className="px-3 py-2 align-top">Academic strengths with evidence</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">3</td><td className="px-3 py-2 align-top">Relevant projects, experience or volunteering</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">4</td><td className="px-3 py-2 align-top">Why this university and Hungary</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">5</td><td className="px-3 py-2 align-top">Career goal and contribution after graduation</td></tr></tbody></table></div>
</section>
<section id="editing-checklist" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Editing checklist</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Check spelling and grammar.</li><li>Check every claim against your documents.</li><li>Remove clichés and generic statements.</li><li>Ask a teacher or mentor to review.</li><li>Save as PDF with a clear file name.</li></ul>
</section>
<section id="do-and-do-not" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Do and do not</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Do</th><th scope="col" className="px-3 py-2 text-left font-bold">Do not</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Be specific and honest</td><td className="px-3 py-2 align-top">Copy sample letters</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Mention concrete modules or labs</td><td className="px-3 py-2 align-top">Use vague praise</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Explain your plan after graduation</td><td className="px-3 py-2 align-top">Promise unrealistic outcomes</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Proofread carefully</td><td className="px-3 py-2 align-top">Ignore word limits</td></tr></tbody></table></div>
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
