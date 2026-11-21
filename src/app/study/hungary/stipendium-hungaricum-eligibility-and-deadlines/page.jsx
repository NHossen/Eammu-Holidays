import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/stipendium-hungaricum-eligibility-and-deadlines';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Stipendium Hungaricum Eligibility and Deadlines 2027",
  "description": "Stipendium Hungaricum eligibility, deadlines and documents for Bangladeshi applicants: January deadline, language proof and Ministry of Education step.",
  "keywords": [
    "Stipendium Hungaricum eligibility",
    "Stipendium Hungaricum deadline 2027",
    "SH documents Bangladesh"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/stipendium-hungaricum-eligibility-and-deadlines"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Stipendium Hungaricum Eligibility and Deadlines 2027",
    "description": "Stipendium Hungaricum eligibility, deadlines and documents for Bangladeshi applicants: January deadline, language proof and Ministry of Education step.",
    "url": "https://eammu.com/study/hungary/stipendium-hungaricum-eligibility-and-deadlines",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Stipendium Hungaricum Eligibility and Deadlines 2027",
    "description": "Stipendium Hungaricum eligibility, deadlines and documents for Bangladeshi applicants: January deadline, language proof and Ministry of Education step."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "SH Eligibility & Deadlines", "href": "/study/hungary/stipendium-hungaricum-eligibility-and-deadlines"}];
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
    "href": "/study/hungary/scholarships-in-hungary-for-bangladeshi-students",
    "title": "Scholarships in Hungary for Bangladeshi Students: Complete Overview",
    "description": "Scholarships in Hungary for Bangladeshi students in 2026: Stipendium Hungaricum, university scholarships, PhD funding and how to avoid scholarship scams."
  },
  {
    "href": "/study/hungary/hungary-intake-dates",
    "title": "Hungary Intake Dates and Application Deadlines (2026–2027)",
    "description": "Hungary intake dates and deadlines for Bangladeshi students: September and February intakes, Stipendium Hungaricum timing and self-financed deadlines."
  },
  {
    "href": "/study/hungary/hungary-student-documents-checklist",
    "title": "Hungary Student Visa and Admission Documents Checklist for Bangladeshis",
    "description": "Complete documents checklist for Hungary admission and student visa in 2026 for Bangladeshi students: academic, financial, travel and insurance papers."
  }
];
const FAQS = [
  {
    "q": "Who is eligible for Stipendium Hungaricum from Bangladesh?",
    "a": "Bangladeshi citizens who meet the call's academic, language and level criteria."
  },
  {
    "q": "Is there an age limit?",
    "a": "The call may specify limits by level. Read the current official call."
  },
  {
    "q": "Can I apply to more than one programme?",
    "a": "Usually yes, up to the limit in the call."
  },
  {
    "q": "What happens if I miss the Bangladesh deadline?",
    "a": "You may be excluded even if you submitted online. Follow both processes."
  },
  {
    "q": "Is the call the same every year?",
    "a": "The structure is similar, but details change. Always read the current call."
  },
  {
    "q": "Where can I check updates?",
    "a": "On the official Stipendium Hungaricum site and Ministry of Education announcements."
  },
  {
    "q": "What time zone is the deadline?",
    "a": "The 2026/27 deadline was set in Central European Time; convert it carefully for Bangladesh."
  },
  {
    "q": "Can I edit my application after submission?",
    "a": "Usually not after the deadline. Check the portal rules."
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
          "name": "SH Eligibility & Deadlines",
          "item": "https://eammu.com/study/hungary/stipendium-hungaricum-eligibility-and-deadlines"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Stipendium Hungaricum Eligibility, Deadlines and Documents (2026–2027)",
      "description": "Stipendium Hungaricum eligibility, deadlines and documents for Bangladeshi applicants: January deadline, language proof and Ministry of Education step.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/stipendium-hungaricum-eligibility-and-deadlines",
      "keywords": "Stipendium Hungaricum eligibility, Stipendium Hungaricum deadline 2027, SH documents Bangladesh",
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
          "name": "Who is eligible for Stipendium Hungaricum from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bangladeshi citizens who meet the call's academic, language and level criteria."
          }
        },
        {
          "@type": "Question",
          "name": "Is there an age limit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The call may specify limits by level. Read the current official call."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply to more than one programme?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually yes, up to the limit in the call."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I miss the Bangladesh deadline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You may be excluded even if you submitted online. Follow both processes."
          }
        },
        {
          "@type": "Question",
          "name": "Is the call the same every year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The structure is similar, but details change. Always read the current call."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I check updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "On the official Stipendium Hungaricum site and Ministry of Education announcements."
          }
        },
        {
          "@type": "Question",
          "name": "What time zone is the deadline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 2026/27 deadline was set in Central European Time; convert it carefully for Bangladesh."
          }
        },
        {
          "@type": "Question",
          "name": "Can I edit my application after submission?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually not after the deadline. Check the portal rules."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Stipendium Hungaricum Eligibility, Deadlines and Documents (2026–2027)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Check eligibility and dates before you invest time in an application.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>The 2026/27 deadline was 15 January 2026, 14:00 CET; expect a similar mid-January date for 2027/28 but confirm officially.</li><li>Applicants must meet academic, language and age or level criteria in the call.</li><li>Bangladeshi applicants also follow the Ministry of Education process.</li><li>Keep copies of every submission.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#key-dates-to-track" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Key dates to track</a></li><li><a href="#eligibility-essentials" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Eligibility essentials</a></li><li><a href="#documents-commonly-required" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Documents commonly required</a></li><li><a href="#after-selection" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">After selection</a></li><li><a href="#common-eligibility-questions" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Common eligibility questions</a></li><li><a href="#preparing-early" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Preparing early</a></li><li><a href="#local-requirements-in-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Local requirements in Bangladesh</a></li></ol>
          </nav>

          <article>
<section id="key-dates-to-track" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Key dates to track</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">What to know</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Opening of call</td><td className="px-3 py-2 align-top">Usually autumn; check the official portal</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tempus deadline</td><td className="px-3 py-2 align-top">Mid-January (15 January 2026 at 14:00 CET for 2026/27)</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bangladesh sending partner</td><td className="px-3 py-2 align-top">Follow the Ministry of Education announcement; the partners page lists the same deadline as Tempus, but verify</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Results and acceptance</td><td className="px-3 py-2 align-top">Several months after submission</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Start of studies</td><td className="px-3 py-2 align-top">September</td></tr></tbody></table></div>
</section>
<section id="eligibility-essentials" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Eligibility essentials</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Be a Bangladeshi citizen eligible under the current call.</li><li>Hold the qualification required for your chosen level.</li><li>Provide language evidence or take the university&apos;s test.</li><li>Meet any programme-specific requirements such as portfolios or tests.</li><li>Not already hold a conflicting scholarship status as per the call.</li></ul>
</section>
<section id="documents-commonly-required" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Documents commonly required</h2>
<p className="mt-4 leading-7 text-slate-700">Expect academic certificates and transcripts, a motivation letter, CV, language evidence, a health certificate at later stages, and programme-specific items. See the <Link href="/study/hungary/hungary-student-documents-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">full documents checklist</Link>.</p>
</section>
<section id="after-selection" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">After selection</h2>
<p className="mt-4 leading-7 text-slate-700">If you are selected, you receive an admission letter and then apply for the D-visa and permit; see <Link href="/study/hungary/hungary-student-visa-application-guide-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the visa application guide</Link>. Read <Link href="/study/hungary/stipendium-hungaricum-scholarship-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the main guide</Link> for benefits and mistakes.</p>
</section>
<section id="common-eligibility-questions" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Common eligibility questions</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Question</th><th scope="col" className="px-3 py-2 text-left font-bold">Practical answer</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Do I need a bachelor&apos;s degree for master&apos;s?</td><td className="px-3 py-2 align-top">Yes, a relevant degree is normally required</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Can final-year students apply?</td><td className="px-3 py-2 align-top">Often yes with proof of expected completion; check the call</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Do I need language proof upfront?</td><td className="px-3 py-2 align-top">Follow the call and the programme-specific rules</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Can I apply to several universities?</td><td className="px-3 py-2 align-top">Yes, within the call&apos;s limit</td></tr></tbody></table></div>
</section>
<section id="preparing-early" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Preparing early</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Request certified transcripts well before the deadline.</li><li>Ask referees early.</li><li>Write multiple drafts of your letter.</li><li>Create a document folder with names matching your passport.</li></ul>
</section>
<section id="local-requirements-in-bangladesh" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Local requirements in Bangladesh</h2>
<p className="mt-4 leading-7 text-slate-700">The Ministry of Education (Secondary and Higher Education Division, Bangladesh Secretariat, Dhaka) is the listed sending partner for Bangladesh. Check its announcements for the forms, number of copies, attestation steps and submission method. Requirements can differ from the online portal, so treat them as a separate checklist.</p>
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
