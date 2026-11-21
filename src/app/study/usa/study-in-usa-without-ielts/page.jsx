import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/usa/study-in-usa-without-ielts';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in USA Without IELTS 2026: Options | Eammu Holidays",
  "description": "Can you study in the USA without IELTS? See TOEFL, Duolingo, PTE and MOI waiver options and the risks of conditional admission for Bangladeshi students.",
  "alternates": {
    "canonical": "https://eammu.com/study/usa/study-in-usa-without-ielts"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in USA Without IELTS 2026: Options | Eammu Holidays",
    "description": "Can you study in the USA without IELTS? See TOEFL, Duolingo, PTE and MOI waiver options and the risks of conditional admission for Bangladeshi students.",
    "url": "https://eammu.com/study/usa/study-in-usa-without-ielts",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in USA Without IELTS 2026: Options | Eammu Holidays",
    "description": "Can you study in the USA without IELTS? See TOEFL, Duolingo, PTE and MOI waiver options and the risks of conditional admission for Bangladeshi students."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "USA", "href": "/study/usa"}, {"name": "Without IELTS", "href": "/study/usa/study-in-usa-without-ielts"}];
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
    "href": "/study/usa/toefl-ielts-and-duolingo-for-usa",
    "title": "TOEFL, IELTS and Duolingo English Test for US Universities",
    "description": "Compare English tests and score ranges."
  },
  {
    "href": "/study/usa/admission-requirements-in-usa-for-bangladeshi-students",
    "title": "Admission Requirements in the USA for Bangladeshi Students",
    "description": "Grades, tests and documents by level."
  },
  {
    "href": "/study/usa/study-in-usa-from-bangladesh",
    "title": "Study in the USA from Bangladesh: Complete 2026 Guide",
    "description": "The full roadmap from profile check to F-1 visa, with costs in taka."
  },
  {
    "href": "/study/usa/community-college-transfer-pathway-in-usa",
    "title": "Community College to University: The 2+2 Pathway in the USA",
    "description": "The 2+2 route, its savings and the transfer traps."
  }
];
const FAQS = [
  {
    "q": "Is IELTS compulsory for the USA?",
    "a": "No. Most US universities accept TOEFL iBT, the Duolingo English Test and often PTE, and many also accept IELTS. Each university sets its own list, so check the admissions page."
  },
  {
    "q": "Can I use my HSC English marks instead of a test?",
    "a": "Rarely on their own. Some universities waive tests for students from English-medium schools or with a medium of instruction certificate, but Bangla-medium HSC alone is usually not enough."
  },
  {
    "q": "What is a conditional admission?",
    "a": "It means you are admitted academically but must complete an intensive English programme or reach a score first. It costs extra time and money, so ask for the full cost in writing."
  },
  {
    "q": "Does a waiver affect my visa interview?",
    "a": "The officer will speak English with you. If your English is weak, the interview itself can sink an otherwise strong case, so prepare regardless of test requirements."
  },
  {
    "q": "Does Duolingo work for scholarships?",
    "a": "It depends on the university. Some tie merit awards to TOEFL or IELTS scores, so ask the scholarship office before you test."
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
          "name": "Without IELTS",
          "item": "https://eammu.com/study/usa/study-in-usa-without-ielts"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in the USA Without IELTS: Real Options in 2026",
      "description": "Can you study in the USA without IELTS? See TOEFL, Duolingo, PTE and MOI waiver options and the risks of conditional admission for Bangladeshi students.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/usa/study-in-usa-without-ielts",
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
          "name": "Is IELTS compulsory for the USA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Most US universities accept TOEFL iBT, the Duolingo English Test and often PTE, and many also accept IELTS. Each university sets its own list, so check the admissions page."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use my HSC English marks instead of a test?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rarely on their own. Some universities waive tests for students from English-medium schools or with a medium of instruction certificate, but Bangla-medium HSC alone is usually not enough."
          }
        },
        {
          "@type": "Question",
          "name": "What is a conditional admission?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It means you are admitted academically but must complete an intensive English programme or reach a score first. It costs extra time and money, so ask for the full cost in writing."
          }
        },
        {
          "@type": "Question",
          "name": "Does a waiver affect my visa interview?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The officer will speak English with you. If your English is weak, the interview itself can sink an otherwise strong case, so prepare regardless of test requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Does Duolingo work for scholarships?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the university. Some tie merit awards to TOEFL or IELTS scores, so ask the scholarship office before you test."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in the USA Without IELTS: Real Options in 2026</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">You may not need IELTS, but you will still need to prove English. Here are the accepted alternatives and the waiver rules to check.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">The short answer</h2>
<p className="mt-4 leading-7 text-slate-700">Yes, you can often apply without IELTS, but almost no university will admit you without some evidence of English ability. The alternatives are accepted tests, a medium-of-instruction waiver, a prior US or English-medium degree, or an intensive English programme.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Accepted alternatives to IELTS</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Option</th><th scope="col" className="px-3 py-2 text-left font-bold">How it usually works</th><th scope="col" className="px-3 py-2 text-left font-bold">Watch out for</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">TOEFL iBT</td><td className="px-3 py-2 align-top">Widely accepted; minimums often 79 to 100 for degree study</td><td className="px-3 py-2 align-top">ETS revised the format in 2026; confirm the score scale each university accepts</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Duolingo English Test</td><td className="px-3 py-2 align-top">Online, quick and low-cost; many universities accept 105 to 130</td><td className="px-3 py-2 align-top">A few top programmes and some visa-sensitive schools do not accept it</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">PTE Academic</td><td className="px-3 py-2 align-top">Accepted by a growing number of universities</td><td className="px-3 py-2 align-top">Check that your target programme lists it</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Medium of instruction (MOI) letter</td><td className="px-3 py-2 align-top">Issued by your university or school when instruction was in English</td><td className="px-3 py-2 align-top">Not all universities accept it; some want a minimum of four years</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">English pathway programme</td><td className="px-3 py-2 align-top">Study English on campus, then start your degree</td><td className="px-3 py-2 align-top">Adds a term or more and extra cost</td></tr></tbody></table></div>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">When a waiver is realistic</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>You studied your whole bachelor in English at a recognised university and the target school lists MOI as acceptable.</li><li>You completed O-levels, A-levels or IB in English.</li><li>You have a US high-school or college record.</li><li>You hold strong SAT or ACT verbal scores and the university offers a test-based exemption.</li></ul>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Always get the waiver confirmation by email from the admissions office before you rely on it.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Risks of &quot;no IELTS&quot; marketing</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Some agents promise IELTS-free admission to universities that do not exist at the quality advertised; verify accreditation first.</li><li>A waiver does not exempt you from the visa interview, where English fluency is judged directly.</li><li>Weak English hurts coursework, assistantship eligibility and job prospects after graduation.</li></ul>
<p className="mt-4 leading-7 text-slate-700">If your English is borderline, a good Duolingo or TOEFL score is cheaper than a rejected application or a failed interview. See <Link href="/study/usa/toefl-ielts-and-duolingo-for-usa" className={linkClass}>TOEFL, IELTS and Duolingo for the USA</Link> for score ranges and preparation.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Checklist: confirm any waiver in writing</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Find the university&apos;s English requirement page and screenshot it.</li><li>Email admissions with your exact degree, medium of instruction and school details.</li><li>Ask whether the waiver applies to your programme and your intake.</li><li>Ask whether you will still need an English placement test on arrival.</li><li>Save the reply with the date; keep it in your visa file.</li></ol>
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
