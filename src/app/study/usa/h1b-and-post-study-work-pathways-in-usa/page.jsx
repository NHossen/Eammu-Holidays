import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/usa/h1b-and-post-study-work-pathways-in-usa';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "H-1B and Post-Study Work Pathways in USA 2026 | Eammu Holidays",
  "description": "H-1B and post-study work in the USA for Bangladeshi graduates in 2026: weighted lottery, $100,000 fee rules, change of status, alternatives and realistic planning.",
  "alternates": {
    "canonical": "https://eammu.com/study/usa/h1b-and-post-study-work-pathways-in-usa"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "H-1B and Post-Study Work Pathways in USA 2026 | Eammu Holidays",
    "description": "H-1B and post-study work in the USA for Bangladeshi graduates in 2026: weighted lottery, $100,000 fee rules, change of status, alternatives and realistic planning.",
    "url": "https://eammu.com/study/usa/h1b-and-post-study-work-pathways-in-usa",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "H-1B and Post-Study Work Pathways in USA 2026 | Eammu Holidays",
    "description": "H-1B and post-study work in the USA for Bangladeshi graduates in 2026: weighted lottery, $100,000 fee rules, change of status, alternatives and realistic planning."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "USA", "href": "/study/usa"}, {"name": "H-1B and Post-Study Pathways", "href": "/study/usa/h1b-and-post-study-work-pathways-in-usa"}];
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
    "href": "/study/usa/cpt-opt-and-stem-opt-rules-in-usa",
    "title": "Working in the USA on F-1: On-Campus Jobs, CPT, OPT and STEM OPT",
    "description": "On-campus work, CPT, OPT and STEM OPT with 2026 caveats."
  },
  {
    "href": "/study/usa/usa-student-visa-rule-changes-2026",
    "title": "USA Student Visa Rule Changes in 2026: What Bangladeshi Students Should Know",
    "description": "Key 2026 changes and how to plan around them."
  },
  {
    "href": "/study/usa/cse-and-it-courses-in-usa",
    "title": "Computer Science and IT Courses in the USA for Bangladeshi Students",
    "description": "Computing degrees, cost, STEM OPT and job-market reality."
  },
  {
    "href": "/study/usa/phd-in-usa-for-bangladeshi-students",
    "title": "Fully Funded PhD in the USA for Bangladeshi Students",
    "description": "Funded PhD admission, research fit and professor outreach."
  }
];
const FAQS = [
  {
    "q": "Is H-1B guaranteed after OPT?",
    "a": "No. H-1B is capped and selection is based on a weighted lottery that favours higher wage levels. Many graduates do not get selected."
  },
  {
    "q": "Do F-1 students pay the $100,000 fee?",
    "a": "Under official guidance so far, the fee generally does not apply to petitions for people already in the USA seeking a change of status, such as F-1 to H-1B. It has applied to many new petitions for workers abroad. Rules have been litigated, so check current guidance."
  },
  {
    "q": "What are alternatives to H-1B?",
    "a": "Options include O-1 for extraordinary ability, employer-sponsored green cards, L-1 after working abroad for a multinational, further study, or work in Bangladesh or a third country."
  },
  {
    "q": "Should I study in the USA only for H-1B?",
    "a": "No. Work visa outcomes are uncertain and policy changes frequently. Choose a programme that is worth its cost on its own merits."
  },
  {
    "q": "How many H-1B visas are available each year?",
    "a": "The regular cap is 65,000 plus 20,000 for those with a US master degree or higher, subject to the current rules."
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
          "name": "H-1B and Post-Study Pathways",
          "item": "https://eammu.com/study/usa/h1b-and-post-study-work-pathways-in-usa"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "H-1B and Post-Study Work Pathways in the USA After Graduation",
      "description": "H-1B and post-study work in the USA for Bangladeshi graduates in 2026: weighted lottery, $100,000 fee rules, change of status, alternatives and realistic planning.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/usa/h1b-and-post-study-work-pathways-in-usa",
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
          "name": "Is H-1B guaranteed after OPT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. H-1B is capped and selection is based on a weighted lottery that favours higher wage levels. Many graduates do not get selected."
          }
        },
        {
          "@type": "Question",
          "name": "Do F-1 students pay the $100,000 fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under official guidance so far, the fee generally does not apply to petitions for people already in the USA seeking a change of status, such as F-1 to H-1B. It has applied to many new petitions for workers abroad. Rules have been litigated, so check current guidance."
          }
        },
        {
          "@type": "Question",
          "name": "What are alternatives to H-1B?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Options include O-1 for extraordinary ability, employer-sponsored green cards, L-1 after working abroad for a multinational, further study, or work in Bangladesh or a third country."
          }
        },
        {
          "@type": "Question",
          "name": "Should I study in the USA only for H-1B?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Work visa outcomes are uncertain and policy changes frequently. Choose a programme that is worth its cost on its own merits."
          }
        },
        {
          "@type": "Question",
          "name": "How many H-1B visas are available each year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The regular cap is 65,000 plus 20,000 for those with a US master degree or higher, subject to the current rules."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">H-1B and Post-Study Work Pathways in the USA After Graduation</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">How the H-1B now works, what changed in 2026 and which other routes graduates use or return home with.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">How H-1B works now</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>A yearly cap limits new H-1B visas, and registrations are selected through a lottery.</li><li>Since the 2026 cap season, selection is weighted by wage level, so higher wage levels have more entries.</li><li>Employers must sponsor you, file petitions and pay fees.</li><li>F-1 students in cap-gap or OPT status may bridge the period until October 1 if eligible.</li></ul>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">US immigration policy has changed frequently in 2025 and 2026. Treat this page as a guide, not legal advice, and confirm current rules on travel.state.gov, the US Embassy Dhaka website, ICE Study in the States and your university international office before you act.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">The $100,000 fee</h2>
<p className="mt-4 leading-7 text-slate-700">A 2025 proclamation introduced a $100,000 payment for certain new H-1B petitions. Official guidance has said that petitions to change status inside the USA, including from F-1, are generally exempt, while many petitions for workers abroad are not. Court cases and agency guidance have changed over 2026, so confirm the latest rules with your university and an immigration attorney.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Other pathways</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Pathway</th><th scope="col" className="px-3 py-2 text-left font-bold">Notes</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">O-1</td><td className="px-3 py-2 align-top">For individuals with extraordinary ability; documentation heavy</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Employer green card (EB-2 and EB-3)</td><td className="px-3 py-2 align-top">Long processing times and country backlogs</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">National Interest Waiver (EB-2 NIW)</td><td className="px-3 py-2 align-top">Self-petition for some advanced-degree professionals</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Further study or PhD</td><td className="px-3 py-2 align-top">Extends status and builds research profile</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Return to Bangladesh or third country</td><td className="px-3 py-2 align-top">Valid and often strong with a US degree</td></tr></tbody></table></div>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Plan for uncertainty</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Budget the degree as an investment that must pay off even without a US job.</li><li>Build skills and networks that work in Bangladesh and globally.</li><li>Choose universities with strong internship pipelines.</li><li>Review rules each year as policy changes.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">H-1B yearly timeline (typical)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">When</th><th scope="col" className="px-3 py-2 text-left font-bold">What happens</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">March</td><td className="px-3 py-2 align-top">Employer registers you in the lottery</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Spring</td><td className="px-3 py-2 align-top">Selection results are announced</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">April to June</td><td className="px-3 py-2 align-top">Selected employers file the full petition</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">October 1</td><td className="px-3 py-2 align-top">H-1B status can start if approved</td></tr></tbody></table></div>
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
