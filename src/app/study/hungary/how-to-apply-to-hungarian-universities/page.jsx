import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/how-to-apply-to-hungarian-universities';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "How to Apply to Hungarian Universities 2026 | Eammu",
  "description": "How to apply to Hungarian universities from Bangladesh in 2026: direct applications, Stipendium Hungaricum, documents, fees, offers and next steps.",
  "keywords": [
    "how to apply Hungarian university",
    "Hungary university application Bangladesh",
    "apply to Hungary self-financed"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/how-to-apply-to-hungarian-universities"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "How to Apply to Hungarian Universities 2026 | Eammu",
    "description": "How to apply to Hungarian universities from Bangladesh in 2026: direct applications, Stipendium Hungaricum, documents, fees, offers and next steps.",
    "url": "https://eammu.com/study/hungary/how-to-apply-to-hungarian-universities",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "How to Apply to Hungarian Universities 2026 | Eammu",
    "description": "How to apply to Hungarian universities from Bangladesh in 2026: direct applications, Stipendium Hungaricum, documents, fees, offers and next steps."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "How to Apply (Step by Step)", "href": "/study/hungary/how-to-apply-to-hungarian-universities"}];
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
    "href": "/study/hungary/hungary-intake-dates",
    "title": "Hungary Intake Dates and Application Deadlines (2026–2027)",
    "description": "Hungary intake dates and deadlines for Bangladeshi students: September and February intakes, Stipendium Hungaricum timing and self-financed deadlines."
  },
  {
    "href": "/study/hungary/hungary-student-documents-checklist",
    "title": "Hungary Student Visa and Admission Documents Checklist for Bangladeshis",
    "description": "Complete documents checklist for Hungary admission and student visa in 2026 for Bangladeshi students: academic, financial, travel and insurance papers."
  },
  {
    "href": "/study/hungary/stipendium-hungaricum-scholarship-guide",
    "title": "Stipendium Hungaricum Scholarship for Bangladeshi Students: Full Guide",
    "description": "Stipendium Hungaricum for Bangladeshi students: benefits, how to apply, the Ministry of Education sending partner step, documents and common mistakes."
  },
  {
    "href": "/study/hungary/sop-and-motivation-letter-for-hungary",
    "title": "SOP and Motivation Letter for Hungary: Structure, Tips and Mistakes",
    "description": "How to write an SOP or motivation letter for Hungarian universities and Stipendium Hungaricum in 2026, with structure, tips and common mistakes."
  }
];
const FAQS = [
  {
    "q": "Is there a central application portal for Hungary?",
    "a": "Not for most international applicants. You apply directly or via Stipendium Hungaricum."
  },
  {
    "q": "How much is the application fee?",
    "a": "Fees vary by university and may be zero to around EUR 100. Check official pages."
  },
  {
    "q": "How long does an offer take?",
    "a": "From a few weeks to a few months, depending on the university and intake."
  },
  {
    "q": "Can I apply to several universities?",
    "a": "Yes, but track deadlines and fees."
  },
  {
    "q": "Do I need an agent?",
    "a": "No. You can apply yourself; a counselor can help with planning and documents."
  },
  {
    "q": "What if I am rejected?",
    "a": "Ask for feedback, improve your profile and try another programme or intake."
  },
  {
    "q": "Can I defer my offer?",
    "a": "Some universities allow deferral. Ask before paying."
  },
  {
    "q": "Do I need to attend in person for the exam?",
    "a": "Many exams are online, but some programmes require in-person tests."
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
          "name": "How to Apply (Step by Step)",
          "item": "https://eammu.com/study/hungary/how-to-apply-to-hungarian-universities"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "How to Apply to Hungarian Universities from Bangladesh: Step-by-Step Guide",
      "description": "How to apply to Hungarian universities from Bangladesh in 2026: direct applications, Stipendium Hungaricum, documents, fees, offers and next steps.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/how-to-apply-to-hungarian-universities",
      "keywords": "how to apply Hungarian university, Hungary university application Bangladesh, apply to Hungary self-financed",
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
          "name": "Is there a central application portal for Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not for most international applicants. You apply directly or via Stipendium Hungaricum."
          }
        },
        {
          "@type": "Question",
          "name": "How much is the application fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fees vary by university and may be zero to around EUR 100. Check official pages."
          }
        },
        {
          "@type": "Question",
          "name": "How long does an offer take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "From a few weeks to a few months, depending on the university and intake."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply to several universities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but track deadlines and fees."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an agent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. You can apply yourself; a counselor can help with planning and documents."
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
          "name": "Can I defer my offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some universities allow deferral. Ask before paying."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to attend in person for the exam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many exams are online, but some programmes require in-person tests."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How to Apply to Hungarian Universities from Bangladesh: Step-by-Step Guide",
      "description": "How to apply to Hungarian universities from Bangladesh in 2026: direct applications, Stipendium Hungaricum, documents, fees, offers and next steps.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Shortlist programmes",
          "text": "Match course, budget and city."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Prepare documents",
          "text": "Attested certificates, transcripts, passport and language proof."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Submit application",
          "text": "Use the official university portal and pay the fee if required."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Complete tests or interview",
          "text": "Take entrance exam or interview when asked."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Accept the offer",
          "text": "Confirm and pay the deposit, then start visa steps."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">How to Apply to Hungarian Universities from Bangladesh: Step-by-Step Guide</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">There is no single joint portal for international students, so applications go to each university or the scholarship platform.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Most international applicants apply directly on each university&apos;s admissions portal.</li><li>Stipendium Hungaricum uses a separate national platform.</li><li>Keep a spreadsheet of deadlines, fees and requirements.</li><li>Never pay application fees to unofficial links.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#two-main-application-routes" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Two main application routes</a></li><li><a href="#step-by-step-process" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Step-by-step process</a></li><li><a href="#application-tips" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Application tips</a></li><li><a href="#after-you-get-an-offer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">After you get an offer</a></li><li><a href="#application-timeline-by-month" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Application timeline by month</a></li><li><a href="#how-to-compare-offers" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to compare offers</a></li><li><a href="#using-an-agent-safely" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Using an agent safely</a></li><li><a href="#application-tracker-template" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Application tracker template</a></li></ol>
          </nav>

          <article>
<section id="two-main-application-routes" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Two main application routes</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Route</th><th scope="col" className="px-3 py-2 text-left font-bold">Where you apply</th><th scope="col" className="px-3 py-2 text-left font-bold">Best for</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Direct (self-financed)</td><td className="px-3 py-2 align-top">University admissions portal or office</td><td className="px-3 py-2 align-top">Students who can pay tuition or want flexible timing</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Stipendium Hungaricum</td><td className="px-3 py-2 align-top">Official online platform plus Ministry of Education step</td><td className="px-3 py-2 align-top">Students seeking a funded place</td></tr></tbody></table></div>
</section>
<section id="step-by-step-process" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Step-by-step process</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Shortlist programmes using <Link href="/study/hungary/top-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities</Link> and your budget.</li><li>Check <Link href="/study/hungary/admission-requirements-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link>.</li><li>Prepare documents and attested copies.</li><li>Register on the university portal and submit the application and fee.</li><li>Complete entrance exam or interview if required.</li><li>Receive offer, accept it and pay the deposit if required.</li><li>Move to the <Link href="/study/hungary/hungary-student-visa-application-guide-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa application guide</Link>.</li></ol>
</section>
<section id="application-tips" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Application tips</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Write a tailored motivation letter, see <Link href="/study/hungary/sop-and-motivation-letter-for-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">SOP guide</Link>.</li><li>Use a professional email address and answer admissions emails promptly.</li><li>Save every receipt and email.</li><li>Apply to 3–5 programmes to balance risk.</li></ul>
</section>
<section id="after-you-get-an-offer" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">After you get an offer</h2>
<p className="mt-4 leading-7 text-slate-700">Confirm fees and refund policy, then plan accommodation with <Link href="/study/hungary/student-accommodation-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">accommodation options</Link>, funds with <Link href="/study/hungary/bank-solvency-requirements-for-hungary-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link> and timing with <Link href="/study/hungary/hungary-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake dates</Link>.</p>
</section>
<section id="application-timeline-by-month" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Application timeline by month</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Month</th><th scope="col" className="px-3 py-2 text-left font-bold">What to do</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Month 1</td><td className="px-3 py-2 align-top">Shortlist and check requirements</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Month 2</td><td className="px-3 py-2 align-top">Prepare documents and tests</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Month 3</td><td className="px-3 py-2 align-top">Submit applications</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Month 4–5</td><td className="px-3 py-2 align-top">Interviews or exams and offers</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Month 6</td><td className="px-3 py-2 align-top">Accept, pay and begin visa steps</td></tr></tbody></table></div>
</section>
<section id="how-to-compare-offers" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to compare offers</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Total cost including fees, rent and travel.</li><li>Programme quality and recognition.</li><li>Housing support.</li><li>Scholarship or discount options.</li><li>Refund and deferral policies.</li></ul>
</section>
<section id="using-an-agent-safely" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Using an agent safely</h2>
<p className="mt-4 leading-7 text-slate-700">If you use a counselor, keep control of your email, accounts and payments. Ask for a written service agreement and never pay tuition to individuals.</p>
</section>
<section id="application-tracker-template" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Application tracker template</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">University</th><th scope="col" className="px-3 py-2 text-left font-bold">Programme</th><th scope="col" className="px-3 py-2 text-left font-bold">Deadline</th><th scope="col" className="px-3 py-2 text-left font-bold">Fee</th><th scope="col" className="px-3 py-2 text-left font-bold">Status</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Example University A</td><td className="px-3 py-2 align-top">BSc Computer Science</td><td className="px-3 py-2 align-top">Check site</td><td className="px-3 py-2 align-top">Check site</td><td className="px-3 py-2 align-top">Submitted</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Example University B</td><td className="px-3 py-2 align-top">MSc Business</td><td className="px-3 py-2 align-top">Check site</td><td className="px-3 py-2 align-top">Check site</td><td className="px-3 py-2 align-top">Preparing</td></tr></tbody></table></div><p className="mt-4 leading-7 text-slate-700">Copy this structure into a spreadsheet and update it weekly.</p>
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
