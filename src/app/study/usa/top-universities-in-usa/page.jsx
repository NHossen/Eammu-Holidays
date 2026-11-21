import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/usa/top-universities-in-usa';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Top Universities in USA for Bangladeshi Students | Eammu Holidays",
  "description": "Top US universities for Bangladeshi students in 2026: Ivy League, MIT, Stanford, strong public and STEM schools, admission realities, aid and how to shortlist.",
  "alternates": {
    "canonical": "https://eammu.com/study/usa/top-universities-in-usa"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Top Universities in USA for Bangladeshi Students | Eammu Holidays",
    "description": "Top US universities for Bangladeshi students in 2026: Ivy League, MIT, Stanford, strong public and STEM schools, admission realities, aid and how to shortlist.",
    "url": "https://eammu.com/study/usa/top-universities-in-usa",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Top Universities in USA for Bangladeshi Students | Eammu Holidays",
    "description": "Top US universities for Bangladeshi students in 2026: Ivy League, MIT, Stanford, strong public and STEM schools, admission realities, aid and how to shortlist."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "USA", "href": "/study/usa"}, {"name": "Top Universities", "href": "/study/usa/top-universities-in-usa"}];
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
    "href": "/study/usa/scholarships-in-usa-for-bangladeshi-students",
    "title": "Scholarships in the USA for Bangladeshi Students (2026)",
    "description": "Merit awards, Fulbright, assistantships and what to ignore."
  },
  {
    "href": "/study/usa/sat-and-act-guide-for-usa-undergraduate",
    "title": "SAT and ACT Guide for US Bachelor Admission (Bangladeshi Students)",
    "description": "Test-optional policies, target scores and preparation."
  },
  {
    "href": "/study/usa/gre-and-gmat-guide-for-usa-masters",
    "title": "GRE and GMAT Guide for US Master and MBA Admission",
    "description": "Which programmes want GRE or GMAT, and what scores help."
  },
  {
    "href": "/study/usa/statement-of-purpose-and-lor-guide-for-usa",
    "title": "Statement of Purpose and Recommendation Letters for US Admission",
    "description": "Write an SOP that stands out and brief your recommenders well."
  },
  {
    "href": "/study/usa/cheapest-universities-in-usa",
    "title": "Cheapest and Most Affordable Universities in the USA for Bangladeshi Students",
    "description": "Where costs are lower and how to check quality first."
  }
];
const FAQS = [
  {
    "q": "Can Bangladeshi students get into Ivy League universities?",
    "a": "Yes, every year a small number do, but admission is extremely selective for all applicants. Strong academics, original achievements and excellent essays are essential."
  },
  {
    "q": "Which US universities are need-blind for international students?",
    "a": "A handful of universities such as Harvard, Yale, Princeton, MIT and Amherst have historically been need-blind for internationals. Policies can change, so confirm on each admissions site."
  },
  {
    "q": "Are top universities worth the cost?",
    "a": "They can be, especially with aid. A good-value university with strong funding in your field may offer better returns than an expensive name."
  },
  {
    "q": "Which US universities are best for computer science?",
    "a": "Programmes such as MIT, Stanford, Carnegie Mellon, UC Berkeley, Georgia Tech, Illinois, Michigan, Texas and Purdue are widely regarded, though admission and funding vary by level."
  },
  {
    "q": "Does university ranking decide my job chances?",
    "a": "It helps with some employers, but skills, projects, internships and network matter as much. Pick the best fit and funding rather than the highest rank you can barely afford."
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
          "name": "Top Universities",
          "item": "https://eammu.com/study/usa/top-universities-in-usa"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Top Universities in the USA for Bangladeshi Students (2026)",
      "description": "Top US universities for Bangladeshi students in 2026: Ivy League, MIT, Stanford, strong public and STEM schools, admission realities, aid and how to shortlist.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/usa/top-universities-in-usa",
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
          "name": "Can Bangladeshi students get into Ivy League universities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, every year a small number do, but admission is extremely selective for all applicants. Strong academics, original achievements and excellent essays are essential."
          }
        },
        {
          "@type": "Question",
          "name": "Which US universities are need-blind for international students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A handful of universities such as Harvard, Yale, Princeton, MIT and Amherst have historically been need-blind for internationals. Policies can change, so confirm on each admissions site."
          }
        },
        {
          "@type": "Question",
          "name": "Are top universities worth the cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They can be, especially with aid. A good-value university with strong funding in your field may offer better returns than an expensive name."
          }
        },
        {
          "@type": "Question",
          "name": "Which US universities are best for computer science?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Programmes such as MIT, Stanford, Carnegie Mellon, UC Berkeley, Georgia Tech, Illinois, Michigan, Texas and Purdue are widely regarded, though admission and funding vary by level."
          }
        },
        {
          "@type": "Question",
          "name": "Does university ranking decide my job chances?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps with some employers, but skills, projects, internships and network matter as much. Pick the best fit and funding rather than the highest rank you can barely afford."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Top Universities in the USA for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Who the leading universities are, what admission really requires, and how to build a balanced list that is not only reach schools.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Well-known universities and what they are known for</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">University group</th><th scope="col" className="px-3 py-2 text-left font-bold">Examples</th><th scope="col" className="px-3 py-2 text-left font-bold">Known for</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Ivy League and peers</td><td className="px-3 py-2 align-top">Harvard, Yale, Princeton, Columbia, Penn, Stanford, MIT, Caltech, University of Chicago</td><td className="px-3 py-2 align-top">Research depth, very selective admission, strong aid at some</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Top public research universities</td><td className="px-3 py-2 align-top">UC Berkeley, UCLA, Michigan, Illinois Urbana-Champaign, Texas at Austin, Georgia Tech, Purdue</td><td className="px-3 py-2 align-top">Strong engineering and computing, large cohorts, some assistantships</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tech and engineering focus</td><td className="px-3 py-2 align-top">Carnegie Mellon, Georgia Tech, Cornell, Rice</td><td className="px-3 py-2 align-top">STEM-heavy programmes and employer links</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Liberal arts colleges</td><td className="px-3 py-2 align-top">Amherst, Williams, Swarthmore, Pomona</td><td className="px-3 py-2 align-top">Small classes, generous aid for some internationals</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">This table lists well-known institutions for orientation only. It is not a ranking, and inclusion does not mean Eammu Holidays can secure admission.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">What top universities really look for</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Excellent grades in a demanding curriculum, plus standardised scores where required; see <Link href="/study/usa/sat-and-act-guide-for-usa-undergraduate" className={linkClass}>SAT and ACT</Link> and <Link href="/study/usa/gre-and-gmat-guide-for-usa-masters" className={linkClass}>GRE and GMAT</Link>.</li><li>Distinctive extracurriculars, research, competitions or projects.</li><li>A voice-driven essay and strong recommendations; see <Link href="/study/usa/statement-of-purpose-and-lor-guide-for-usa" className={linkClass}>SOP and LOR guide</Link>.</li><li>For PhD, research fit with named professors matters more than the university brand.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Funding at top universities</h2>
<p className="mt-4 leading-7 text-slate-700">Some elite undergraduate colleges meet full demonstrated need for admitted international students, but they admit very few. For graduate study, funding usually comes from departments through assistantships. See <Link href="/study/usa/scholarships-in-usa-for-bangladeshi-students" className={linkClass}>scholarships</Link> and <Link href="/study/usa/assistantships-ta-ra-funding-in-usa" className={linkClass}>assistantships</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Build a balanced list</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Choose 2 to 4 reach universities where admission is a long shot.</li><li>Choose 4 to 6 match universities where your profile sits near the middle of admitted students.</li><li>Choose 2 to 3 safety universities where you are likely to be admitted and can afford the cost.</li><li>Check that every choice fits your budget before you apply.</li></ol>
<p className="mt-4 leading-7 text-slate-700">Applying only to elite names is the most common avoidable mistake in Bangladeshi applications; a balanced list protects your year.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Eight questions to research any university</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Is the institution and the programme accredited?</li><li>What are the graduation and retention rates?</li><li>How many international students are admitted and funded?</li><li>What is the net price after typical aid?</li><li>Where do graduates work, and how many are employed within six months?</li><li>Which faculty or labs match my interests?</li><li>What internship or co-op links does the department have?</li><li>What student support exists for international students?</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Official sources to confirm this information</h2>
<p className="mt-4 leading-7 text-slate-700">Policies, fees, test formats and deadlines change. Before you act on anything on this page, check the current version at:</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>The university&apos;s own international admissions and cost pages</li><li>EducationUSA advising resources (educationusa.state.gov)</li><li>College Scorecard (collegescorecard.ed.gov)</li><li>travel.state.gov for visa rules and fees</li></ul>
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
