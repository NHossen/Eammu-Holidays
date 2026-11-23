import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/uk/uk-student-visa-rule-changes-2026';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "UK Student Visa Rule Changes 2026: What to Know | Eammu Holidays",
  "description": "UK student visa rule changes in 2026: higher funds from 30 November, Graduate Route 18 months, BCA compliance, student levy, eVisas and Bangladesh refusal rates.",
  "alternates": {
    "canonical": "https://eammu.com/study/uk/uk-student-visa-rule-changes-2026"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "UK Student Visa Rule Changes 2026: What to Know | Eammu Holidays",
    "description": "UK student visa rule changes in 2026: higher funds from 30 November, Graduate Route 18 months, BCA compliance, student levy, eVisas and Bangladesh refusal rates.",
    "url": "https://eammu.com/study/uk/uk-student-visa-rule-changes-2026",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "UK Student Visa Rule Changes 2026: What to Know | Eammu Holidays",
    "description": "UK student visa rule changes in 2026: higher funds from 30 November, Graduate Route 18 months, BCA compliance, student levy, eVisas and Bangladesh refusal rates."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "UK", "href": "/study/uk"}, {"name": "Visa Rule Changes 2026", "href": "/study/uk/uk-student-visa-rule-changes-2026"}];
const NAV = [
  {
    "label": "UK Hub",
    "pages": [
      {
        "href": "/study/uk",
        "label": "Study in UK Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/uk/study-in-uk-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/uk/study-in-uk-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/uk/tuition-fees-in-uk-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/uk/cost-of-living-in-uk-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/uk/cheapest-universities-in-uk",
        "label": "Affordable Universities"
      },
      {
        "href": "/study/uk/top-universities-in-uk",
        "label": "Top Universities"
      },
      {
        "href": "/study/uk/russell-group-vs-modern-universities-in-uk",
        "label": "Russell Group vs Modern"
      },
      {
        "href": "/study/uk/foundation-and-pathway-programmes-in-uk",
        "label": "Foundation and Pathway"
      },
      {
        "href": "/study/uk/scholarships-in-uk-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/uk/chevening-scholarship-guide-for-bangladeshi-students",
        "label": "Chevening Guide"
      },
      {
        "href": "/study/uk/commonwealth-and-great-scholarships-for-bangladesh",
        "label": "Commonwealth and GREAT"
      },
      {
        "href": "/study/uk/admission-requirements-in-uk-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/uk/study-gap-accepted-universities-in-uk",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/uk/study-in-uk-after-hsc",
        "label": "After HSC"
      },
      {
        "href": "/study/uk/study-in-uk-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/uk/uk-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Applications, Tests & Offers",
    "pages": [
      {
        "href": "/study/uk/ucas-application-guide-for-bangladeshi-students",
        "label": "UCAS Application Guide"
      },
      {
        "href": "/study/uk/postgraduate-direct-application-guide-for-uk",
        "label": "Postgraduate Application Guide"
      },
      {
        "href": "/study/uk/personal-statement-and-references-guide-for-uk",
        "label": "Personal Statement and References"
      },
      {
        "href": "/study/uk/ielts-ukvi-pte-and-english-tests-for-uk",
        "label": "IELTS, PTE and English Tests"
      },
      {
        "href": "/study/uk/degree-recognition-and-uk-enic-equivalence",
        "label": "Degree Recognition and UK ENIC"
      },
      {
        "href": "/study/uk/conditional-and-unconditional-offers-explained",
        "label": "Offers Explained"
      }
    ]
  },
  {
    "label": "Programmes & Student Life",
    "pages": [
      {
        "href": "/study/uk/cse-and-it-courses-in-uk",
        "label": "CSE and IT Courses"
      },
      {
        "href": "/study/uk/masters-in-uk-for-bangladeshi-students",
        "label": "Master's in UK"
      },
      {
        "href": "/study/uk/mba-in-uk-for-bangladeshi-students",
        "label": "MBA in UK"
      },
      {
        "href": "/study/uk/phd-in-uk-for-bangladeshi-students",
        "label": "PhD in UK"
      },
      {
        "href": "/study/uk/medicine-and-plab-pathway-in-uk-for-bangladeshi-students",
        "label": "Medicine and PLAB Pathway"
      },
      {
        "href": "/study/uk/engineering-courses-in-uk-for-bangladeshi-students",
        "label": "Engineering Courses"
      },
      {
        "href": "/study/uk/business-finance-and-data-analytics-in-uk",
        "label": "Business, Finance and Analytics"
      },
      {
        "href": "/study/uk/best-cities-to-study-in-uk",
        "label": "Best Cities to Study"
      },
      {
        "href": "/study/uk/student-accommodation-in-uk",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/uk/halal-food-and-student-life-in-uk-for-bangladeshis",
        "label": "Halal Food and Student Life"
      },
      {
        "href": "/study/uk/nhs-and-immigration-health-surcharge-for-students",
        "label": "NHS and Health Surcharge"
      },
      {
        "href": "/study/uk/banking-and-sending-money-to-uk-from-bangladesh",
        "label": "Banking and Sending Money"
      },
      {
        "href": "/study/uk/avoid-scams-and-agent-risks-in-uk-admissions",
        "label": "Avoid Scams and Agent Risks"
      }
    ]
  },
  {
    "label": "Student Visa, Work & Graduate Route",
    "pages": [
      {
        "href": "/study/uk/uk-student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/uk/cas-explained-for-uk-student-visa",
        "label": "CAS Explained"
      },
      {
        "href": "/study/uk/maintenance-funds-and-28-day-rule-for-uk-student-visa",
        "label": "Maintenance Funds and 28-Day Rule"
      },
      {
        "href": "/study/uk/uk-student-visa-processing-time-and-cost",
        "label": "Visa Time and Cost"
      },
      {
        "href": "/study/uk/uk-student-visa-interview-and-credibility-tips",
        "label": "Credibility Interview Tips"
      },
      {
        "href": "/study/uk/uk-student-visa-refusal-reasons-and-reapplication",
        "label": "Visa Refusal and Reapplication"
      },
      {
        "href": "/study/uk/tb-test-biometrics-and-vfs-for-bangladesh",
        "label": "TB Test and Biometrics"
      },
      {
        "href": "/study/uk/dependants-on-uk-student-visa",
        "label": "Dependants on Student Visa"
      },
      {
        "href": "/study/uk/part-time-work-rules-for-students-in-uk",
        "label": "Part-Time Work Rules"
      },
      {
        "href": "/study/uk/graduate-route-and-post-study-work-in-uk",
        "label": "Graduate Route"
      },
      {
        "href": "/study/uk/uk-student-visa-rule-changes-2026",
        "label": "Visa Rule Changes 2026"
      },
      {
        "href": "/study/uk/pre-departure-checklist-for-uk-students",
        "label": "Pre-Departure Checklist"
      },
      {
        "href": "/study/uk/maintaining-student-visa-status-in-uk",
        "label": "Maintaining Visa Status"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/uk/bangladesh-offices",
        "label": "Bangladesh Offices and Support"
      },
      {
        "href": "/study/uk/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/uk/maintenance-funds-and-28-day-rule-for-uk-student-visa",
    "title": "Maintenance Funds and the 28-Day Rule for the UK Student Visa (From 30 November 2026)",
    "description": "Funds amounts, the 28-day rule and accepted evidence."
  },
  {
    "href": "/study/uk/graduate-route-and-post-study-work-in-uk",
    "title": "Graduate Route and Post-Study Work in the UK: 18 Months from January 2027",
    "description": "Graduate visa length, rules and next steps."
  },
  {
    "href": "/study/uk/avoid-scams-and-agent-risks-in-uk-admissions",
    "title": "How to Avoid Scams, Fake Documents and Agent Risks in UK Admissions",
    "description": "Warning signs and verification steps before you pay."
  },
  {
    "href": "/study/uk/uk-student-visa-requirements-bangladesh",
    "title": "UK Student Visa Requirements for Bangladeshi Students (2026)",
    "description": "Documents, steps and checks for the Student visa."
  },
  {
    "href": "/study/uk/cheapest-universities-in-uk",
    "title": "Affordable and Low-Cost Universities in the UK for Bangladeshi Students",
    "description": "Where costs are lower and how to check quality first."
  }
];
const FAQS = [
  {
    "q": "What is the biggest change for 2026?",
    "a": "Higher maintenance funds from 30 November 2026, tighter sponsor compliance, and the Graduate Route reduction to 18 months from 1 January 2027 are the key changes. Check official sources for the latest details."
  },
  {
    "q": "Why are some universities not accepting Bangladeshi applicants?",
    "a": "Universities must keep refusal, enrolment and completion rates within strict compliance limits. Reports describe some pausing or restricting recruitment from Bangladesh and, in some cases, withdrawing offers."
  },
  {
    "q": "Is there a levy on international students?",
    "a": "The government has set out a levy on international student fee income for universities planned from August 2028. Details are for universities, not a direct charge to students, but it may affect costs and recruitment."
  },
  {
    "q": "How should I plan for all this?",
    "a": "Choose a university that currently accepts your application, keep documents genuine and consistent, and budget for higher funds and uncertain work rights."
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
          "name": "UK",
          "item": "https://eammu.com/study/uk"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Visa Rule Changes 2026",
          "item": "https://eammu.com/study/uk/uk-student-visa-rule-changes-2026"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "UK Student Visa Rule Changes in 2026: What Bangladeshi Students Should Know",
      "description": "UK student visa rule changes in 2026: higher funds from 30 November, Graduate Route 18 months, BCA compliance, student levy, eVisas and Bangladesh refusal rates.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/uk/uk-student-visa-rule-changes-2026",
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
          "name": "What is the biggest change for 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Higher maintenance funds from 30 November 2026, tighter sponsor compliance, and the Graduate Route reduction to 18 months from 1 January 2027 are the key changes. Check official sources for the latest details."
          }
        },
        {
          "@type": "Question",
          "name": "Why are some universities not accepting Bangladeshi applicants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Universities must keep refusal, enrolment and completion rates within strict compliance limits. Reports describe some pausing or restricting recruitment from Bangladesh and, in some cases, withdrawing offers."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a levy on international students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The government has set out a levy on international student fee income for universities planned from August 2028. Details are for universities, not a direct charge to students, but it may affect costs and recruitment."
          }
        },
        {
          "@type": "Question",
          "name": "How should I plan for all this?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose a university that currently accepts your application, keep documents genuine and consistent, and budget for higher funds and uncertain work rights."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in the UK 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">UK Student Visa Rule Changes in 2026: What Bangladeshi Students Should Know</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A plain-language summary of the key changes affecting Bangladeshi students, from funds to Graduate Route to university compliance.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-22">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in the UK guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 63 UK guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Summary of key developments</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Topic</th><th scope="col" className="px-3 py-2 text-left font-bold">What is happening</th><th scope="col" className="px-3 py-2 text-left font-bold">What to do</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Maintenance funds</td><td className="px-3 py-2 align-top">Reported rise to £1,570 (London) and £1,203 (elsewhere) per month from 30 November 2026</td><td className="px-3 py-2 align-top">Recalculate your funds and hold them for 28 days</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Graduate Route</td><td className="px-3 py-2 align-top">18 months for most graduates applying from 1 January 2027; 3 years for PhD</td><td className="px-3 py-2 align-top">Plan your budget without relying on a long work period</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Sponsor compliance</td><td className="px-3 py-2 align-top">Tighter limits on visa refusals, enrolment and course completion for universities</td><td className="px-3 py-2 align-top">Expect more checks and confirm university acceptance of Bangladeshi applicants</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bangladesh refusal rates</td><td className="px-3 py-2 align-top">Reported as high compared with the new limits</td><td className="px-3 py-2 align-top">Prepare a clean, consistent, well-evidenced application</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">eVisas</td><td className="px-3 py-2 align-top">Digital status replaces most physical documents</td><td className="px-3 py-2 align-top">Create a UKVI account and keep details updated</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">English for work routes</td><td className="px-3 py-2 align-top">Higher English level for Skilled Worker and related routes from January 2026</td><td className="px-3 py-2 align-top">Plan to reach B2 or higher</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">International student levy</td><td className="px-3 py-2 align-top">Planned flat levy on university fee income from August 2028</td><td className="px-3 py-2 align-top">Watch for effects on fees and offers</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">UK immigration rules, fees and university sponsor policies have changed repeatedly in 2025 and 2026. Treat this page as a guide, not legal advice, and confirm current rules on gov.uk, the UKVI pages for Bangladesh and your university international office before you act.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">How to stay safe</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Attend classes and meet your visa conditions.</li><li>Keep documents genuine and consistent.</li><li>Use official sources, not social media rumours.</li><li>Report changes to your university as required.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Where to check updates</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>gov.uk student visa pages.</li><li>The UKVI pages for Bangladesh.</li><li>Your university international office.</li><li>The British Council and UCAS for admissions updates.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">A simple plan for uncertainty</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Pick a university that is currently accepting your application.</li><li>Budget for higher funds and a possibly shorter post-study period.</li><li>Keep documents clean and consistent.</li><li>Plan a fallback if the visa is delayed or refused.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Official sources to confirm this information</h2>
<p className="mt-4 leading-7 text-slate-700">Policies, fees, funds amounts and university recruitment rules change. Before you act on anything on this page, check the current version at:</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>gov.uk Student visa pages and the register of licensed sponsors</li><li>UKVI guidance for applicants in Bangladesh</li><li>Your university international student office</li><li>GOV.UK guidance on the Graduate route and Skilled Worker route</li></ul>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related UK Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in the UK</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and scholarship shortlist, UK Student visa (CAS and funds) preparation and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
