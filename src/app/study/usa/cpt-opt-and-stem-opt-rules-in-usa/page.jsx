import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/usa/cpt-opt-and-stem-opt-rules-in-usa';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "CPT, OPT and STEM OPT Rules in USA 2026 | Eammu Holidays",
  "description": "F-1 work rules for Bangladeshi students in 2026: on-campus jobs, CPT, OPT, 24-month STEM OPT extension, unemployment limits and proposed OPT fee changes.",
  "alternates": {
    "canonical": "https://eammu.com/study/usa/cpt-opt-and-stem-opt-rules-in-usa"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "CPT, OPT and STEM OPT Rules in USA 2026 | Eammu Holidays",
    "description": "F-1 work rules for Bangladeshi students in 2026: on-campus jobs, CPT, OPT, 24-month STEM OPT extension, unemployment limits and proposed OPT fee changes.",
    "url": "https://eammu.com/study/usa/cpt-opt-and-stem-opt-rules-in-usa",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "CPT, OPT and STEM OPT Rules in USA 2026 | Eammu Holidays",
    "description": "F-1 work rules for Bangladeshi students in 2026: on-campus jobs, CPT, OPT, 24-month STEM OPT extension, unemployment limits and proposed OPT fee changes."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "USA", "href": "/study/usa"}, {"name": "CPT, OPT and STEM OPT", "href": "/study/usa/cpt-opt-and-stem-opt-rules-in-usa"}];
const NAV = [
  {
    "label": "USA Hub",
    "pages": [
      {
        "href": "/study/usa",
        "label": "Study in USA Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/usa/study-in-usa-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/usa/study-in-usa-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/usa/tuition-fees-in-usa-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/usa/cost-of-living-in-usa-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/usa/cheapest-universities-in-usa",
        "label": "Affordable Universities"
      },
      {
        "href": "/study/usa/top-universities-in-usa",
        "label": "Top Universities"
      },
      {
        "href": "/study/usa/community-college-transfer-pathway-in-usa",
        "label": "Community College Pathway"
      },
      {
        "href": "/study/usa/scholarships-in-usa-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/usa/fulbright-scholarship-guide-for-bangladeshi-students",
        "label": "Fulbright Guide"
      },
      {
        "href": "/study/usa/assistantships-ta-ra-funding-in-usa",
        "label": "TA and RA Funding"
      },
      {
        "href": "/study/usa/admission-requirements-in-usa-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/usa/study-gap-accepted-universities-in-usa",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/usa/study-in-usa-after-hsc",
        "label": "After HSC"
      },
      {
        "href": "/study/usa/study-in-usa-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/usa/usa-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Tests & Applications",
    "pages": [
      {
        "href": "/study/usa/sat-and-act-guide-for-usa-undergraduate",
        "label": "SAT and ACT Guide"
      },
      {
        "href": "/study/usa/gre-and-gmat-guide-for-usa-masters",
        "label": "GRE and GMAT Guide"
      },
      {
        "href": "/study/usa/toefl-ielts-and-duolingo-for-usa",
        "label": "TOEFL, IELTS and Duolingo"
      },
      {
        "href": "/study/usa/us-university-application-guide",
        "label": "Application Guide"
      },
      {
        "href": "/study/usa/statement-of-purpose-and-lor-guide-for-usa",
        "label": "SOP and LOR Guide"
      },
      {
        "href": "/study/usa/degree-recognition-and-wes-evaluation-for-usa",
        "label": "Degree Recognition and WES"
      }
    ]
  },
  {
    "label": "Programs & Student Life",
    "pages": [
      {
        "href": "/study/usa/cse-and-it-courses-in-usa",
        "label": "CSE and IT Courses"
      },
      {
        "href": "/study/usa/stem-programs-and-stem-designation-in-usa",
        "label": "STEM Programs and Designation"
      },
      {
        "href": "/study/usa/engineering-courses-in-usa-for-bangladeshi-students",
        "label": "Engineering Courses"
      },
      {
        "href": "/study/usa/data-science-and-ai-masters-in-usa",
        "label": "Data Science and AI"
      },
      {
        "href": "/study/usa/mba-in-usa-for-bangladeshi-students",
        "label": "MBA in USA"
      },
      {
        "href": "/study/usa/masters-in-usa-for-bangladeshi-students",
        "label": "Master's in USA"
      },
      {
        "href": "/study/usa/phd-in-usa-for-bangladeshi-students",
        "label": "PhD in USA"
      },
      {
        "href": "/study/usa/medicine-and-md-pathway-in-usa-for-bangladeshi-students",
        "label": "Medicine and MD Pathway"
      },
      {
        "href": "/study/usa/best-states-and-cities-to-study-in-usa",
        "label": "Best States and Cities"
      },
      {
        "href": "/study/usa/student-accommodation-in-usa",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/usa/halal-food-and-student-life-in-usa-for-bangladeshis",
        "label": "Halal Food and Student Life"
      },
      {
        "href": "/study/usa/health-insurance-for-international-students-in-usa",
        "label": "Health Insurance"
      },
      {
        "href": "/study/usa/banking-and-sending-money-to-usa-from-bangladesh",
        "label": "Banking and Sending Money"
      },
      {
        "href": "/study/usa/avoid-scams-and-unaccredited-universities-in-usa",
        "label": "Avoid Scams and Fake Universities"
      }
    ]
  },
  {
    "label": "Visa, OPT & Work Rules",
    "pages": [
      {
        "href": "/study/usa/f1-student-visa-requirements-bangladesh",
        "label": "F-1 Visa Requirements"
      },
      {
        "href": "/study/usa/form-i-20-explained-for-f1-visa",
        "label": "Form I-20 Explained"
      },
      {
        "href": "/study/usa/ds-160-and-sevis-fee-guide",
        "label": "DS-160 and SEVIS Fee"
      },
      {
        "href": "/study/usa/proof-of-funds-requirements-for-usa-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/usa/student-visa-processing-time-and-cost-usa",
        "label": "Visa Time and Cost"
      },
      {
        "href": "/study/usa/f1-visa-interview-questions-and-tips",
        "label": "Interview Questions and Tips"
      },
      {
        "href": "/study/usa/f1-visa-rejection-214b-and-reapplication",
        "label": "Visa Rejection and Reapplication"
      },
      {
        "href": "/study/usa/f2-visa-for-spouse-and-children-of-students",
        "label": "F-2 Visa for Dependents"
      },
      {
        "href": "/study/usa/cpt-opt-and-stem-opt-rules-in-usa",
        "label": "CPT, OPT and STEM OPT"
      },
      {
        "href": "/study/usa/h1b-and-post-study-work-pathways-in-usa",
        "label": "H-1B and Post-Study Pathways"
      },
      {
        "href": "/study/usa/usa-student-visa-rule-changes-2026",
        "label": "Visa Rule Changes 2026"
      },
      {
        "href": "/study/usa/pre-departure-checklist-for-usa-students",
        "label": "Pre-Departure Checklist"
      },
      {
        "href": "/study/usa/maintaining-f1-status-in-usa",
        "label": "Maintaining F-1 Status"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/usa/bangladesh-offices",
        "label": "Bangladesh Offices and Support"
      },
      {
        "href": "/study/usa/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/usa/stem-programs-and-stem-designation-in-usa",
    "title": "STEM Programs and STEM Designation in the USA: Why It Matters",
    "description": "How STEM designation works and how to verify it."
  },
  {
    "href": "/study/usa/h1b-and-post-study-work-pathways-in-usa",
    "title": "H-1B and Post-Study Work Pathways in the USA After Graduation",
    "description": "Weighted H-1B lottery, fees and other routes."
  },
  {
    "href": "/study/usa/usa-student-visa-rule-changes-2026",
    "title": "USA Student Visa Rule Changes in 2026: What Bangladeshi Students Should Know",
    "description": "Key 2026 changes and how to plan around them."
  },
  {
    "href": "/study/usa/avoid-scams-and-unaccredited-universities-in-usa",
    "title": "How to Avoid Scams, Visa Mills and Unaccredited Universities in the USA",
    "description": "Warning signs and verification steps before you pay."
  },
  {
    "href": "/study/usa/maintaining-f1-status-in-usa",
    "title": "Maintaining F-1 Status in the USA: Rules Every Student Must Follow",
    "description": "Enrolment, work, travel and reporting rules."
  }
];
const FAQS = [
  {
    "q": "Can I work on campus on an F-1 visa?",
    "a": "Yes, generally up to 20 hours a week during term and full time during official breaks, once your studies begin. Rules and approval steps apply."
  },
  {
    "q": "What is CPT?",
    "a": "Curricular Practical Training is off-campus work that is an integral part of your curriculum, usually after one academic year of study for most programmes. It needs school authorisation, and extensive full-time CPT can affect OPT."
  },
  {
    "q": "How long is OPT?",
    "a": "Post-completion OPT is up to 12 months for each education level. Eligible STEM graduates may apply for a 24-month extension."
  },
  {
    "q": "Is OPT changing?",
    "a": "DHS has proposed new OPT-related fees and other restrictions in 2026. They are proposals unless finalised, so check the latest official updates before making financial plans."
  },
  {
    "q": "Can I work remotely for a foreign employer on OPT?",
    "a": "OPT employment rules are strict and depend on the job being related to your degree. Ask your DSO before accepting any role."
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
          "name": "USA",
          "item": "https://eammu.com/study/usa"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "CPT, OPT and STEM OPT",
          "item": "https://eammu.com/study/usa/cpt-opt-and-stem-opt-rules-in-usa"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Working in the USA on F-1: On-Campus Jobs, CPT, OPT and STEM OPT",
      "description": "F-1 work rules for Bangladeshi students in 2026: on-campus jobs, CPT, OPT, 24-month STEM OPT extension, unemployment limits and proposed OPT fee changes.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/usa/cpt-opt-and-stem-opt-rules-in-usa",
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
          "name": "Can I work on campus on an F-1 visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, generally up to 20 hours a week during term and full time during official breaks, once your studies begin. Rules and approval steps apply."
          }
        },
        {
          "@type": "Question",
          "name": "What is CPT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Curricular Practical Training is off-campus work that is an integral part of your curriculum, usually after one academic year of study for most programmes. It needs school authorisation, and extensive full-time CPT can affect OPT."
          }
        },
        {
          "@type": "Question",
          "name": "How long is OPT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Post-completion OPT is up to 12 months for each education level. Eligible STEM graduates may apply for a 24-month extension."
          }
        },
        {
          "@type": "Question",
          "name": "Is OPT changing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DHS has proposed new OPT-related fees and other restrictions in 2026. They are proposals unless finalised, so check the latest official updates before making financial plans."
          }
        },
        {
          "@type": "Question",
          "name": "Can I work remotely for a foreign employer on OPT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OPT employment rules are strict and depend on the job being related to your degree. Ask your DSO before accepting any role."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in USA 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Working in the USA on F-1: On-Campus Jobs, CPT, OPT and STEM OPT</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">What work is allowed at each stage, who qualifies, how long it lasts and what the 2026 policy changes could mean.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-21">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in USA guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 63 USA guides</summary>
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
          <article>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Work types at a glance</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Type</th><th scope="col" className="px-3 py-2 text-left font-bold">When</th><th scope="col" className="px-3 py-2 text-left font-bold">Duration</th><th scope="col" className="px-3 py-2 text-left font-bold">Key rule</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">On-campus employment</td><td className="px-3 py-2 align-top">During studies</td><td className="px-3 py-2 align-top">Up to 20 hours per week in term</td><td className="px-3 py-2 align-top">No separate government application, school approval needed</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">CPT</td><td className="px-3 py-2 align-top">During studies</td><td className="px-3 py-2 align-top">Part-time or full-time as authorised</td><td className="px-3 py-2 align-top">Must relate to your curriculum; school authorises</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Post-completion OPT</td><td className="px-3 py-2 align-top">After completing the programme</td><td className="px-3 py-2 align-top">Up to 12 months</td><td className="px-3 py-2 align-top">Apply to USCIS; unemployment day limits apply</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">STEM OPT extension</td><td className="px-3 py-2 align-top">After eligible STEM OPT</td><td className="px-3 py-2 align-top">Additional 24 months</td><td className="px-3 py-2 align-top">Employer must be E-Verify enrolled and training plan required</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">US immigration policy has changed frequently in 2025 and 2026. Treat this page as a guide, not legal advice, and confirm current rules on travel.state.gov, the US Embassy Dhaka website, ICE Study in the States and your university international office before you act.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Planning around the rules</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Apply for OPT in the window your school advises; late filing can cost work time.</li><li>Track unemployment days carefully.</li><li>Do not start work before your authorisation is valid.</li><li>Keep all employer and school documentation.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">2026 developments to watch</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>A proposed rule published in October 2026 would add significant fees connected to OPT; it is not final.</li><li>Litigation and policy changes have affected rules about duration of status; see <Link href="/study/usa/usa-student-visa-rule-changes-2026" className={linkClass}>visa rule changes 2026</Link>.</li><li>H-1B rules and fees have changed; see <Link href="/study/usa/h1b-and-post-study-work-pathways-in-usa" className={linkClass}>post-study pathways</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Be careful with CPT-focused schools</h2>
<p className="mt-4 leading-7 text-slate-700">Some schools market early and extensive CPT. Misusing CPT or attending a questionable programme can cause serious status problems; see <Link href="/study/usa/avoid-scams-and-unaccredited-universities-in-usa" className={linkClass}>how to avoid scams</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">OPT timeline and unemployment limits</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical rule</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">When to apply for post-completion OPT</td><td className="px-3 py-2 align-top">Up to 90 days before programme end and within 60 days after, per USCIS rules</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Unemployment limit on OPT</td><td className="px-3 py-2 align-top">Up to 90 days of unemployment during post-completion OPT</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Extra time with STEM extension</td><td className="px-3 py-2 align-top">An additional 60 days of unemployment allowed, for 150 days in total across OPT and STEM OPT</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">STEM extension application</td><td className="px-3 py-2 align-top">Filed before your current OPT ends, with your employer&apos;s training plan</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">US immigration policy has changed frequently in 2025 and 2026. Treat this page as a guide, not legal advice, and confirm current rules on travel.state.gov, the US Embassy Dhaka website, ICE Study in the States and your university international office before you act.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Official sources to confirm this information</h2>
<p className="mt-4 leading-7 text-slate-700">Policies, fees, test formats and deadlines change. Before you act on anything on this page, check the current version at:</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>travel.state.gov and the US Embassy Dhaka website (bd.usembassy.gov)</li><li>ICE Study in the States (studyinthestates.dhs.gov)</li><li>USCIS (uscis.gov) for OPT and H-1B</li><li>Your university international student office (DSO)</li></ul>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays reviews these pages regularly, last updated November 2026, but official sources always take priority.</p>
</section>
          </article>

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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related USA Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in the USA</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and scholarship shortlist, F-1 visa interview preparation and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
