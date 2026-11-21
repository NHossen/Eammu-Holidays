import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/usa';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in the USA 2026: Guide for Bangladeshis | Eammu Holidays",
  "description": "Complete 2026 guide to studying in the USA for Bangladeshi students: tuition in BDT, scholarships, tests, F-1 visa, OPT rules and counseling nationwide.",
  "alternates": {
    "canonical": "https://eammu.com/study/usa"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in the USA 2026: Guide for Bangladeshis | Eammu Holidays",
    "description": "Complete 2026 guide to studying in the USA for Bangladeshi students: tuition in BDT, scholarships, tests, F-1 visa, OPT rules and counseling nationwide.",
    "url": "https://eammu.com/study/usa",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in the USA 2026: Guide for Bangladeshis | Eammu Holidays",
    "description": "Complete 2026 guide to studying in the USA for Bangladeshi students: tuition in BDT, scholarships, tests, F-1 visa, OPT rules and counseling nationwide."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "USA", "href": "/study/usa"}];
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
    "href": "/study/usa/study-in-usa-from-bangladesh",
    "title": "Study in the USA from Bangladesh: Complete 2026 Guide",
    "description": "The full roadmap from profile check to F-1 visa, with costs in taka."
  },
  {
    "href": "/study/usa/tuition-fees-in-usa-for-bangladeshi-students",
    "title": "Tuition Fees in the USA for Bangladeshi Students (2026, USD and BDT)",
    "description": "USD and BDT tuition ranges by level and university type."
  },
  {
    "href": "/study/usa/f1-student-visa-requirements-bangladesh",
    "title": "F-1 Student Visa Requirements for Bangladeshi Students (2026)",
    "description": "Documents, steps and the interview test in one page."
  },
  {
    "href": "/study/usa/scholarships-in-usa-for-bangladeshi-students",
    "title": "Scholarships in the USA for Bangladeshi Students (2026)",
    "description": "Merit awards, Fulbright, assistantships and what to ignore."
  },
  {
    "href": "/study/usa/usa-student-visa-rule-changes-2026",
    "title": "USA Student Visa Rule Changes in 2026: What Bangladeshi Students Should Know",
    "description": "Key 2026 changes and how to plan around them."
  },
  {
    "href": "/study/usa/cpt-opt-and-stem-opt-rules-in-usa",
    "title": "Working in the USA on F-1: On-Campus Jobs, CPT, OPT and STEM OPT",
    "description": "On-campus work, CPT, OPT and STEM OPT with 2026 caveats."
  }
];
const FAQS = [
  {
    "q": "Is studying in the USA a good option for Bangladeshi students in 2026?",
    "a": "It can be, particularly for funded master and PhD routes and for strong merit-aid offers, but it is expensive, the F-1 interview is demanding and policy is changing. Choose a programme that is worth its cost without relying on post-study work."
  },
  {
    "q": "How much money do I need to study in the USA from Bangladesh?",
    "a": "Plan roughly $25,000 to $65,000 per year all-in, depending on the university, city and aid. Community colleges and funded programmes sit lower; private universities sit higher."
  },
  {
    "q": "Where is the F-1 visa interview held for Bangladeshis?",
    "a": "Student visa interviews are held at the US Embassy in Dhaka. Check the official US government appointment system for current procedures."
  },
  {
    "q": "Can Eammu Holidays guarantee admission or a visa?",
    "a": "No. No genuine consultancy can guarantee admission, scholarships or visa approval. We provide counselling, shortlisting, document support and interview preparation."
  },
  {
    "q": "When should I start preparing?",
    "a": "Start 9 to 12 months before your intake, and earlier if you need GRE, SAT or an English test or want to apply for scholarships."
  },
  {
    "q": "Should I compare the USA with China, the UK or Canada first?",
    "a": "Yes. Compare total cost, funding, visa difficulty and work rights. If you are weighing Asia as well, read our Study in China guides on this site."
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
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in the USA 2026: Complete Guide for Bangladeshi Students",
      "description": "Complete 2026 guide to studying in the USA for Bangladeshi students: tuition in BDT, scholarships, tests, F-1 visa, OPT rules and counseling nationwide.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/usa",
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
          "name": "Is studying in the USA a good option for Bangladeshi students in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be, particularly for funded master and PhD routes and for strong merit-aid offers, but it is expensive, the F-1 interview is demanding and policy is changing. Choose a programme that is worth its cost without relying on post-study work."
          }
        },
        {
          "@type": "Question",
          "name": "How much money do I need to study in the USA from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plan roughly $25,000 to $65,000 per year all-in, depending on the university, city and aid. Community colleges and funded programmes sit lower; private universities sit higher."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the F-1 visa interview held for Bangladeshis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Student visa interviews are held at the US Embassy in Dhaka. Check the official US government appointment system for current procedures."
          }
        },
        {
          "@type": "Question",
          "name": "Can Eammu Holidays guarantee admission or a visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. No genuine consultancy can guarantee admission, scholarships or visa approval. We provide counselling, shortlisting, document support and interview preparation."
          }
        },
        {
          "@type": "Question",
          "name": "When should I start preparing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start 9 to 12 months before your intake, and earlier if you need GRE, SAT or an English test or want to apply for scholarships."
          }
        },
        {
          "@type": "Question",
          "name": "Should I compare the USA with China, the UK or Canada first?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Compare total cost, funding, visa difficulty and work rights. If you are weighing Asia as well, read our Study in China guides on this site."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in the USA 2026: Complete Guide for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Costs in BDT, admission and tests, scholarships, the F-1 visa, OPT and honest advice on what the USA demands. Detailed guides for Bangladeshi families.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Read this first: what the USA costs and demands</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li><strong>Cost:</strong> the USA is among the most expensive destinations, though funded graduate routes and merit aid can change the maths.</li><li><strong>Visa:</strong> the F-1 interview at the US Embassy in Dhaka is demanding; most refusals cite section 214(b), meaning the officer was not convinced you will return home.</li><li><strong>Work:</strong> on-campus work is limited to 20 hours a week in term; OPT and STEM OPT are valuable but policy is under review.</li><li><strong>Quality varies:</strong> thousands of institutions exist, so accreditation and outcomes matter; see <Link href="/study/usa/avoid-scams-and-unaccredited-universities-in-usa" className={linkClass}>how to avoid scams</Link>.</li><li><strong>Policy change:</strong> rules and fees changed in 2025 and 2026; see <Link href="/study/usa/usa-student-visa-rule-changes-2026" className={linkClass}>visa rule changes for 2026</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Why Bangladeshi students consider the USA</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Funded PhD and research master options through <Link href="/study/usa/assistantships-ta-ra-funding-in-usa" className={linkClass}>assistantships</Link>.</li><li>Flexible degrees and strong STEM, business and health-science programmes.</li><li>Up to 36 months of work on OPT for eligible STEM graduates, subject to policy; see <Link href="/study/usa/stem-programs-and-stem-designation-in-usa" className={linkClass}>STEM designation</Link>.</li><li>Large Bangladeshi communities in many US cities; see <Link href="/study/usa/best-states-and-cities-to-study-in-usa" className={linkClass}>best states and cities</Link>.</li><li>Many universities accept Duolingo or waive English tests for strong applicants; see <Link href="/study/usa/study-in-usa-without-ielts" className={linkClass}>study in the USA without IELTS</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Where to begin: choose your level and route</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">If you are...</th><th scope="col" className="px-3 py-2 text-left font-bold">Start here</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">After HSC, wanting a bachelor</td><td className="px-3 py-2 align-top"><Link href="/study/usa/study-in-usa-after-hsc" className={linkClass}>Study in the USA after HSC</Link> and <Link href="/study/usa/sat-and-act-guide-for-usa-undergraduate" className={linkClass}>SAT and ACT guide</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">On a tight budget</td><td className="px-3 py-2 align-top"><Link href="/study/usa/community-college-transfer-pathway-in-usa" className={linkClass}>Community college pathway</Link> and <Link href="/study/usa/cheapest-universities-in-usa" className={linkClass}>affordable universities</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">A diploma holder</td><td className="px-3 py-2 align-top"><Link href="/study/usa/study-in-usa-after-diploma" className={linkClass}>Study in the USA after diploma</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">A graduate wanting a master</td><td className="px-3 py-2 align-top"><Link href="/study/usa/masters-in-usa-for-bangladeshi-students" className={linkClass}>Master&apos;s in the USA</Link> and <Link href="/study/usa/gre-and-gmat-guide-for-usa-masters" className={linkClass}>GRE and GMAT</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Aiming for a PhD</td><td className="px-3 py-2 align-top"><Link href="/study/usa/phd-in-usa-for-bangladeshi-students" className={linkClass}>PhD in the USA</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Interested in an MBA</td><td className="px-3 py-2 align-top"><Link href="/study/usa/mba-in-usa-for-bangladeshi-students" className={linkClass}>MBA in the USA</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Interested in medicine</td><td className="px-3 py-2 align-top"><Link href="/study/usa/medicine-and-md-pathway-in-usa-for-bangladeshi-students" className={linkClass}>Medicine and MD pathway</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Looking for funding</td><td className="px-3 py-2 align-top"><Link href="/study/usa/scholarships-in-usa-for-bangladeshi-students" className={linkClass}>Scholarships</Link> and <Link href="/study/usa/fulbright-scholarship-guide-for-bangladeshi-students" className={linkClass}>Fulbright guide</Link></td></tr></tbody></table></div>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Indicative cost snapshot (USD and BDT)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">USD</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT (about Tk 123 per USD)</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor tuition per year</td><td className="px-3 py-2 align-top">$8,000 – $65,000</td><td className="px-3 py-2 align-top">Tk 9.8 – 80 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Master total tuition</td><td className="px-3 py-2 align-top">$18,000 – $80,000</td><td className="px-3 py-2 align-top">Tk 22.1 – 98.4 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs per year</td><td className="px-3 py-2 align-top">$12,000 – $30,000</td><td className="px-3 py-2 align-top">Tk 14.8 – 36.9 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Health insurance per year</td><td className="px-3 py-2 align-top">$1,000 – $3,500</td><td className="px-3 py-2 align-top">Tk 1.2 – 4.3 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">SEVIS and visa fees (official)</td><td className="px-3 py-2 align-top">$535 – $785</td><td className="px-3 py-2 align-top">Tk 65,805 – 96,555</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">One-way flight from Dhaka</td><td className="px-3 py-2 align-top">Varies</td><td className="px-3 py-2 align-top">Tk 90,000 – 1.6 lakh</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 USD = about Tk 123 and are indicative estimates for the 2026–2027 intake. Fees, scholarship rules, test dates, visa policy and exchange rates change, so always confirm with the university, official US government sources or an Eammu Holidays counselor before paying anything.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Your step-by-step journey</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Profile check and country fit; see <Link href="/study/usa/admission-requirements-in-usa-for-bangladeshi-students" className={linkClass}>admission requirements</Link>.</li><li>Shortlist universities and funding; see <Link href="/study/usa/top-universities-in-usa" className={linkClass}>top universities</Link> and <Link href="/study/usa/cheapest-universities-in-usa" className={linkClass}>affordable universities</Link>.</li><li>Take English and GRE, GMAT or SAT as needed; see <Link href="/study/usa/toefl-ielts-and-duolingo-for-usa" className={linkClass}>English tests</Link>.</li><li>Apply and receive offers; see <Link href="/study/usa/us-university-application-guide" className={linkClass}>application guide</Link>.</li><li>Receive your I-20, pay the SEVIS fee and complete the DS-160; see <Link href="/study/usa/ds-160-and-sevis-fee-guide" className={linkClass}>DS-160 and SEVIS</Link>.</li><li>Prepare for and attend the F-1 interview; see <Link href="/study/usa/f1-visa-interview-questions-and-tips" className={linkClass}>interview tips</Link>.</li><li>Plan arrival and settle in; see <Link href="/study/usa/pre-departure-checklist-for-usa-students" className={linkClass}>pre-departure checklist</Link>.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">How Eammu Holidays supports you</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Free profile review and realistic budget in BDT.</li><li>University, funding and intake shortlist.</li><li>Document checklists, SOP guidance and recommendation planning.</li><li>Application tracking and I-20 follow-up.</li><li>F-1 visa file review and mock interview practice.</li><li>Pre-departure briefing and arrival tips.</li></ul>
<p className="mt-4 leading-7 text-slate-700">We do not guarantee admission, scholarships or visas. Our role is to help you present an honest, strong and well-prepared case.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Questions Bangladeshi families ask before choosing the USA</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Family concern</th><th scope="col" className="px-3 py-2 text-left font-bold">Honest answer</th><th scope="col" className="px-3 py-2 text-left font-bold">Read</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Can we afford it?</td><td className="px-3 py-2 align-top">Budget total cost for the whole degree and test it against the I-20 estimate and your sponsor&apos;s documented income.</td><td className="px-3 py-2 align-top"><Link href="/study/usa/tuition-fees-in-usa-for-bangladeshi-students" className={linkClass}>Tuition fees</Link> and <Link href="/study/usa/proof-of-funds-requirements-for-usa-student-visa" className={linkClass}>proof of funds</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Will he or she get a visa?</td><td className="px-3 py-2 align-top">Nobody can promise it. Preparation, a clear plan and genuine ties matter most.</td><td className="px-3 py-2 align-top"><Link href="/study/usa/f1-visa-interview-questions-and-tips" className={linkClass}>Interview tips</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Can the student work to pay fees?</td><td className="px-3 py-2 align-top">Not enough to pay tuition. On-campus work is limited and off-campus work needs authorisation.</td><td className="px-3 py-2 align-top"><Link href="/study/usa/cpt-opt-and-stem-opt-rules-in-usa" className={linkClass}>CPT, OPT and STEM OPT</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Is a US job likely after graduation?</td><td className="px-3 py-2 align-top">It is uncertain and policy is changing. Pick a programme that is worth the cost on its own merits.</td><td className="px-3 py-2 align-top"><Link href="/study/usa/h1b-and-post-study-work-pathways-in-usa" className={linkClass}>Post-study pathways</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Is the university genuine?</td><td className="px-3 py-2 align-top">Check accreditation and outcomes, not marketing.</td><td className="px-3 py-2 align-top"><Link href="/study/usa/avoid-scams-and-unaccredited-universities-in-usa" className={linkClass}>Avoid scams</Link></td></tr></tbody></table></div>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Official sources to confirm this information</h2>
<p className="mt-4 leading-7 text-slate-700">Policies, fees, test formats and deadlines change. Before you act on anything on this page, check the current version at:</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>travel.state.gov and the US Embassy Dhaka website (bd.usembassy.gov)</li><li>ICE Study in the States (studyinthestates.dhs.gov)</li><li>EducationUSA advising resources (educationusa.state.gov)</li></ul>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays reviews these pages regularly, last updated November 2026, but official sources always take priority.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Complete Directory: Every USA Study Guide</h2>
<div className="mt-5 grid gap-4 sm:grid-cols-2">{NAV.map((g) => (<div key={g.label} className="rounded-xl border border-slate-200 bg-white p-4"><h3 className="font-bold text-emerald-900">{g.label}</h3><ul className="mt-2 space-y-1 text-sm">{g.pages.map((p) => (<li key={p.href}><Link href={p.href} className={linkClass}>{p.label}</Link></li>))}</ul></div>))}</div>
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
