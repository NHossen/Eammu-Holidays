import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/usa/scholarships-in-usa-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Scholarships in USA for Bangladeshi Students 2026 | Eammu Holidays",
  "description": "USA scholarships for Bangladeshi students in 2026: university merit awards, Fulbright, assistantships, need-based aid, deadlines and how to avoid fake offers.",
  "alternates": {
    "canonical": "https://eammu.com/study/usa/scholarships-in-usa-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Scholarships in USA for Bangladeshi Students 2026 | Eammu Holidays",
    "description": "USA scholarships for Bangladeshi students in 2026: university merit awards, Fulbright, assistantships, need-based aid, deadlines and how to avoid fake offers.",
    "url": "https://eammu.com/study/usa/scholarships-in-usa-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Scholarships in USA for Bangladeshi Students 2026 | Eammu Holidays",
    "description": "USA scholarships for Bangladeshi students in 2026: university merit awards, Fulbright, assistantships, need-based aid, deadlines and how to avoid fake offers."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "USA", "href": "/study/usa"}, {"name": "Scholarships", "href": "/study/usa/scholarships-in-usa-for-bangladeshi-students"}];
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
    "href": "/study/usa/fulbright-scholarship-guide-for-bangladeshi-students",
    "title": "Fulbright Scholarship Guide for Bangladeshi Students",
    "description": "Eligibility, timeline and application tips for Fulbright."
  },
  {
    "href": "/study/usa/assistantships-ta-ra-funding-in-usa",
    "title": "Teaching and Research Assistantships in the USA: How Funding Works",
    "description": "TA and RA funding explained, with realistic stipend ranges."
  },
  {
    "href": "/study/usa/top-universities-in-usa",
    "title": "Top Universities in the USA for Bangladeshi Students (2026)",
    "description": "Top-tier universities, aid facts and a realistic shortlist method."
  },
  {
    "href": "/study/usa/avoid-scams-and-unaccredited-universities-in-usa",
    "title": "How to Avoid Scams, Visa Mills and Unaccredited Universities in the USA",
    "description": "Warning signs and verification steps before you pay."
  },
  {
    "href": "/study/usa/masters-in-usa-for-bangladeshi-students",
    "title": "Master's in the USA for Bangladeshi Students: Admission, Cost and Funding",
    "description": "Requirements, costs and funding for master degrees."
  }
];
const FAQS = [
  {
    "q": "Is there a full scholarship for Bangladeshi students in the USA?",
    "a": "Yes, but they are rare and competitive. Fulbright, full-tuition merit awards at some universities, and funded PhD positions are the main routes."
  },
  {
    "q": "Can international students get federal aid?",
    "a": "No. International students are not eligible for US federal student aid or FAFSA, so funding comes from universities, private sources and family."
  },
  {
    "q": "When should I apply for scholarships?",
    "a": "Most university merit awards are considered with your application, so apply early. External scholarships have their own deadlines, often a year ahead of enrolment."
  },
  {
    "q": "How do I spot a fake scholarship?",
    "a": "Be careful if you are asked to pay a fee to receive an award, promised guaranteed funding, or contacted unexpectedly. Verify through the official university or sponsor website."
  },
  {
    "q": "Can I negotiate a scholarship offer?",
    "a": "Sometimes. A polite, evidence-based request referencing a better offer can be reviewed, but there is no guarantee."
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
          "name": "Scholarships",
          "item": "https://eammu.com/study/usa/scholarships-in-usa-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Scholarships in the USA for Bangladeshi Students (2026)",
      "description": "USA scholarships for Bangladeshi students in 2026: university merit awards, Fulbright, assistantships, need-based aid, deadlines and how to avoid fake offers.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/usa/scholarships-in-usa-for-bangladeshi-students",
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
          "name": "Is there a full scholarship for Bangladeshi students in the USA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but they are rare and competitive. Fulbright, full-tuition merit awards at some universities, and funded PhD positions are the main routes."
          }
        },
        {
          "@type": "Question",
          "name": "Can international students get federal aid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. International students are not eligible for US federal student aid or FAFSA, so funding comes from universities, private sources and family."
          }
        },
        {
          "@type": "Question",
          "name": "When should I apply for scholarships?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most university merit awards are considered with your application, so apply early. External scholarships have their own deadlines, often a year ahead of enrolment."
          }
        },
        {
          "@type": "Question",
          "name": "How do I spot a fake scholarship?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Be careful if you are asked to pay a fee to receive an award, promised guaranteed funding, or contacted unexpectedly. Verify through the official university or sponsor website."
          }
        },
        {
          "@type": "Question",
          "name": "Can I negotiate a scholarship offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sometimes. A polite, evidence-based request referencing a better offer can be reviewed, but there is no guarantee."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Scholarships in the USA for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">The funding that actually exists: university merit awards, Fulbright, assistantships and a few competitive fellowships, with realistic odds.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Main funding routes</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Route</th><th scope="col" className="px-3 py-2 text-left font-bold">Level</th><th scope="col" className="px-3 py-2 text-left font-bold">What it covers</th><th scope="col" className="px-3 py-2 text-left font-bold">Competition</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">University merit scholarships</td><td className="px-3 py-2 align-top">Bachelor, master</td><td className="px-3 py-2 align-top">Partial tuition, sometimes large awards</td><td className="px-3 py-2 align-top">High; often automatic with application</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Fulbright Foreign Student Programme</td><td className="px-3 py-2 align-top">Master, PhD</td><td className="px-3 py-2 align-top">Tuition, stipend, travel, insurance</td><td className="px-3 py-2 align-top">Very high</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Assistantships (TA and RA)</td><td className="px-3 py-2 align-top">Master, PhD</td><td className="px-3 py-2 align-top">Tuition waiver and monthly stipend</td><td className="px-3 py-2 align-top">High; PhD is most common</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Need-based aid at selected colleges</td><td className="px-3 py-2 align-top">Bachelor</td><td className="px-3 py-2 align-top">Up to full demonstrated need</td><td className="px-3 py-2 align-top">Extremely high</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">External and country scholarships</td><td className="px-3 py-2 align-top">All</td><td className="px-3 py-2 align-top">Varies</td><td className="px-3 py-2 align-top">High</td></tr></tbody></table></div>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">How to improve your odds</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Apply to universities where your grades and test scores are above the typical admitted profile; merit aid goes to the strongest applicants.</li><li>Apply early, before funding runs out.</li><li>Contact professors directly for research assistantships; see <Link href="/study/usa/assistantships-ta-ra-funding-in-usa" className={linkClass}>assistantships</Link>.</li><li>Prepare a clear, specific essay rather than a generic one; see <Link href="/study/usa/statement-of-purpose-and-lor-guide-for-usa" className={linkClass}>SOP and LOR guide</Link>.</li><li>Apply to Fulbright early; see <Link href="/study/usa/fulbright-scholarship-guide-for-bangladeshi-students" className={linkClass}>the Fulbright guide</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">What not to rely on</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Unverified &quot;100 percent scholarship&quot; offers sent over WhatsApp or social media.</li><li>Agents who charge for guaranteed scholarship placement.</li><li>Plans that depend on working full time to pay tuition; F-1 work rules do not allow this.</li></ul>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Scholarship availability and amounts change every year. Treat all figures as indicative and confirm with the university.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">A scholarship calendar to follow</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">When</th><th scope="col" className="px-3 py-2 text-left font-bold">Action</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">18 to 12 months before</td><td className="px-3 py-2 align-top">Research Fulbright and external awards; build profile</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">12 to 9 months before</td><td className="px-3 py-2 align-top">Finalise tests; draft essays; contact professors</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">9 to 6 months before</td><td className="px-3 py-2 align-top">Apply to universities early so merit aid is considered</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">6 to 3 months before</td><td className="px-3 py-2 align-top">Compare award letters; negotiate or ask for reconsideration where appropriate</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">3 months before</td><td className="px-3 py-2 align-top">Accept the best total-cost offer and start I-20 steps</td></tr></tbody></table></div>
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
