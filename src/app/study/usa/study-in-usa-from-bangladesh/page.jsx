import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/usa/study-in-usa-from-bangladesh';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in USA from Bangladesh 2026 | Eammu Holidays",
  "description": "Step-by-step 2026 guide to study in the USA from Bangladesh: admission, tuition in BDT, scholarships, F-1 visa, OPT work rights and honest budgets for families.",
  "alternates": {
    "canonical": "https://eammu.com/study/usa/study-in-usa-from-bangladesh"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in USA from Bangladesh 2026 | Eammu Holidays",
    "description": "Step-by-step 2026 guide to study in the USA from Bangladesh: admission, tuition in BDT, scholarships, F-1 visa, OPT work rights and honest budgets for families.",
    "url": "https://eammu.com/study/usa/study-in-usa-from-bangladesh",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in USA from Bangladesh 2026 | Eammu Holidays",
    "description": "Step-by-step 2026 guide to study in the USA from Bangladesh: admission, tuition in BDT, scholarships, F-1 visa, OPT work rights and honest budgets for families."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "USA", "href": "/study/usa"}, {"name": "Study from Bangladesh", "href": "/study/usa/study-in-usa-from-bangladesh"}];
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
    "href": "/study/usa/study-in-usa-without-ielts",
    "title": "Study in the USA Without IELTS: Real Options in 2026",
    "description": "Duolingo, TOEFL, MOI and waiver routes explained honestly."
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
    "href": "/study/usa/admission-requirements-in-usa-for-bangladeshi-students",
    "title": "Admission Requirements in the USA for Bangladeshi Students",
    "description": "Grades, tests and documents by level."
  }
];
const FAQS = [
  {
    "q": "Is it possible to study in the USA from Bangladesh without a scholarship?",
    "a": "Yes, many Bangladeshi students self-fund or use family and loan support, but you must show liquid funds for the first year on your I-20 and credible access to funds for later years. Costs vary widely by university and city."
  },
  {
    "q": "How much does it cost to study in the USA from Bangladesh?",
    "a": "A realistic range is about $25,000 to $65,000 per year all-in (tuition plus living) depending on the university, city and whether you receive aid. Community colleges and some public universities sit at the lower end."
  },
  {
    "q": "Which intake is best for Bangladeshi students?",
    "a": "Fall (August to September) has the most programmes, funding and scholarships. Spring (January) is useful for many master programmes but has fewer awards and fewer seats."
  },
  {
    "q": "Can I work while studying in the USA?",
    "a": "F-1 students can generally work on campus up to 20 hours a week during term. Off-campus work needs authorisation such as CPT or OPT. Work should never be your plan for paying tuition."
  },
  {
    "q": "Is the USA harder for Bangladeshi students than before?",
    "a": "Visa interviews are demanding and policy has shifted in 2025 and 2026, but students with a clear academic plan, real funding and genuine ties to Bangladesh continue to receive F-1 visas."
  },
  {
    "q": "Do I need an IELTS score to apply?",
    "a": "Not always. Many universities accept TOEFL, Duolingo or PTE, and some waive tests with a medium-of-instruction letter. See our guide on studying without IELTS."
  },
  {
    "q": "How early should my sponsor prepare financial documents?",
    "a": "At least 3 to 6 months before the interview, so that bank history and tax records look stable and explainable."
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
          "name": "Study from Bangladesh",
          "item": "https://eammu.com/study/usa/study-in-usa-from-bangladesh"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in the USA from Bangladesh: Complete 2026 Guide",
      "description": "Step-by-step 2026 guide to study in the USA from Bangladesh: admission, tuition in BDT, scholarships, F-1 visa, OPT work rights and honest budgets for families.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/usa/study-in-usa-from-bangladesh",
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
          "name": "Is it possible to study in the USA from Bangladesh without a scholarship?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, many Bangladeshi students self-fund or use family and loan support, but you must show liquid funds for the first year on your I-20 and credible access to funds for later years. Costs vary widely by university and city."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to study in the USA from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A realistic range is about $25,000 to $65,000 per year all-in (tuition plus living) depending on the university, city and whether you receive aid. Community colleges and some public universities sit at the lower end."
          }
        },
        {
          "@type": "Question",
          "name": "Which intake is best for Bangladeshi students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fall (August to September) has the most programmes, funding and scholarships. Spring (January) is useful for many master programmes but has fewer awards and fewer seats."
          }
        },
        {
          "@type": "Question",
          "name": "Can I work while studying in the USA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "F-1 students can generally work on campus up to 20 hours a week during term. Off-campus work needs authorisation such as CPT or OPT. Work should never be your plan for paying tuition."
          }
        },
        {
          "@type": "Question",
          "name": "Is the USA harder for Bangladeshi students than before?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visa interviews are demanding and policy has shifted in 2025 and 2026, but students with a clear academic plan, real funding and genuine ties to Bangladesh continue to receive F-1 visas."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an IELTS score to apply?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not always. Many universities accept TOEFL, Duolingo or PTE, and some waive tests with a medium-of-instruction letter. See our guide on studying without IELTS."
          }
        },
        {
          "@type": "Question",
          "name": "How early should my sponsor prepare financial documents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At least 3 to 6 months before the interview, so that bank history and tax records look stable and explainable."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in the USA from Bangladesh: Complete 2026 Guide</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">How Bangladeshi students actually get into US universities: costs in BDT, admission steps, funding, the F-1 visa and what has changed in 2026.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Read this first: the honest picture</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li><strong>Cost:</strong> the USA is one of the most expensive study destinations, but funded master and PhD routes and merit awards can change the maths completely.</li><li><strong>Visa:</strong> the F-1 interview at the US Embassy in Dhaka is the hardest step; most refusals cite section 214(b), meaning the officer was not convinced you will return home.</li><li><strong>Work:</strong> on-campus jobs are limited to 20 hours a week in term; OPT after graduation is valuable but policy is under review.</li><li><strong>Quality varies:</strong> the USA has thousands of institutions. Accreditation and outcomes matter far more than a famous city; see <Link href="/study/usa/avoid-scams-and-unaccredited-universities-in-usa" className={linkClass}>how to avoid scams</Link>.</li><li><strong>No guarantees:</strong> no consultancy can guarantee admission, a scholarship or a visa. Be careful with anyone who does.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Why Bangladeshi students choose the USA</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Flexible degrees where you can combine majors, minors and electives, with research access even at undergraduate level.</li><li>Funded graduate study through teaching and research assistantships; see <Link href="/study/usa/assistantships-ta-ra-funding-in-usa" className={linkClass}>TA and RA funding</Link>.</li><li>Strong STEM, business and health-science programmes, with STEM OPT allowing up to 36 months of work for eligible degrees; see <Link href="/study/usa/cpt-opt-and-stem-opt-rules-in-usa" className={linkClass}>CPT, OPT and STEM OPT</Link>.</li><li>Large Bangladeshi student and alumni networks in cities such as New York, Dallas, Houston, Detroit and Atlanta.</li><li>Many universities accept the Duolingo English Test or waive English tests for strong applicants; see <Link href="/study/usa/study-in-usa-without-ielts" className={linkClass}>study in the USA without IELTS</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Your step-by-step journey</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Profile check: grades, field, budget and goals; see <Link href="/study/usa/admission-requirements-in-usa-for-bangladeshi-students" className={linkClass}>admission requirements</Link>.</li><li>Build a balanced shortlist of reach, match and safety universities; see <Link href="/study/usa/top-universities-in-usa" className={linkClass}>top universities</Link> and <Link href="/study/usa/cheapest-universities-in-usa" className={linkClass}>affordable universities</Link>.</li><li>Take the needed tests: English, plus SAT/ACT or GRE/GMAT where required.</li><li>Prepare essays and recommendations; see <Link href="/study/usa/statement-of-purpose-and-lor-guide-for-usa" className={linkClass}>SOP and LOR guide</Link>.</li><li>Apply, accept an offer and pay the deposit; the university issues your I-20; see <Link href="/study/usa/form-i-20-explained-for-f1-visa" className={linkClass}>Form I-20 explained</Link>.</li><li>Pay the SEVIS fee, complete the DS-160 and book your interview; see <Link href="/study/usa/ds-160-and-sevis-fee-guide" className={linkClass}>DS-160 and SEVIS fee</Link>.</li><li>Attend the interview at the US Embassy in Dhaka; see <Link href="/study/usa/f1-visa-interview-questions-and-tips" className={linkClass}>interview tips</Link>.</li><li>Plan travel, insurance and housing; see <Link href="/study/usa/pre-departure-checklist-for-usa-students" className={linkClass}>pre-departure checklist</Link>.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Indicative yearly budget snapshot (USD and BDT)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">USD per year</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT per year (about Tk 123 per USD)</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Community college tuition (international)</td><td className="px-3 py-2 align-top">$8,000 – $18,000</td><td className="px-3 py-2 align-top">Tk 9.8 – 22.1 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Public university tuition (international)</td><td className="px-3 py-2 align-top">$20,000 – $45,000</td><td className="px-3 py-2 align-top">Tk 24.6 – 55.4 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Private university tuition</td><td className="px-3 py-2 align-top">$35,000 – $65,000</td><td className="px-3 py-2 align-top">Tk 43 – 80 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs (housing, food, transport)</td><td className="px-3 py-2 align-top">$12,000 – $30,000</td><td className="px-3 py-2 align-top">Tk 14.8 – 36.9 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Health insurance</td><td className="px-3 py-2 align-top">$1,000 – $3,500</td><td className="px-3 py-2 align-top">Tk 1.2 – 4.3 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Books, supplies and personal costs</td><td className="px-3 py-2 align-top">$1,000 – $2,500</td><td className="px-3 py-2 align-top">Tk 1.2 – 3.1 lakh</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 USD = about Tk 123 and are indicative estimates for the 2026–2027 intake. Fees, scholarship rules, test dates, visa policy and exchange rates change, so always confirm with the university, official US government sources or an Eammu Holidays counselor before paying anything.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Mistakes we see most often</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Applying to too few or too many universities without a plan.</li><li>Choosing a university only because it promises quick work rights.</li><li>Underestimating the bank balance needed for the I-20 and visa.</li><li>Using the same generic essay everywhere.</li><li>Booking the visa slot late and missing the orientation date.</li></ul>
<p className="mt-4 leading-7 text-slate-700">Each of these is avoidable with a written plan and a realistic timeline; start 9 to 12 months before your intake.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">USA compared with other destinations</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Factor</th><th scope="col" className="px-3 py-2 text-left font-bold">USA</th><th scope="col" className="px-3 py-2 text-left font-bold">What to weigh</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Cost</td><td className="px-3 py-2 align-top">High sticker price, large aid at some universities, funded PhDs</td><td className="px-3 py-2 align-top">Total cost over the whole degree</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Entry</td><td className="px-3 py-2 align-top">Holistic admission, tests optional at many schools</td><td className="px-3 py-2 align-top">Your grades and profile</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Visa</td><td className="px-3 py-2 align-top">In-person interview with a 214(b) test</td><td className="px-3 py-2 align-top">Ties and funding story</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Work</td><td className="px-3 py-2 align-top">Limited during study, OPT afterwards, policy in flux</td><td className="px-3 py-2 align-top">Do not rely on it</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Research</td><td className="px-3 py-2 align-top">World-leading, with assistantships</td><td className="px-3 py-2 align-top">Best for graduate study</td></tr></tbody></table></div>
<p className="mt-4 leading-7 text-slate-700">Students also considering Asia can compare with <Link href="/study/china" className={linkClass}>studying in China</Link>, which has a different cost structure, scholarship system and visa route.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">A realistic example: two budgets side by side</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">Option A: funded research master</th><th scope="col" className="px-3 py-2 text-left font-bold">Option B: self-funded coursework master</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tuition</td><td className="px-3 py-2 align-top">Waived or reduced through an assistantship</td><td className="px-3 py-2 align-top">$30,000 – $55,000 total</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs for 2 years</td><td className="px-3 py-2 align-top">$24,000 – $50,000</td><td className="px-3 py-2 align-top">$24,000 – $50,000</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Estimated total</td><td className="px-3 py-2 align-top">$24,000 – $50,000</td><td className="px-3 py-2 align-top">$54,000 – $105,000</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Estimated total in BDT</td><td className="px-3 py-2 align-top">Tk 29.5 – 61.5 lakh</td><td className="px-3 py-2 align-top">Tk 66.4 lakh – 1.3 crore</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 USD = about Tk 123 and are indicative estimates for the 2026–2027 intake. Fees, scholarship rules, test dates, visa policy and exchange rates change, so always confirm with the university, official US government sources or an Eammu Holidays counselor before paying anything.</p>
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
