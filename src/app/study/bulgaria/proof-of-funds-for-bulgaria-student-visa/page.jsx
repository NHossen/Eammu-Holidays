import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/bulgaria/proof-of-funds-for-bulgaria-student-visa';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Proof of Funds for Bulgaria Student Visa | Eammu Holidays",
  "description": "Proof of funds for Bulgaria student visa from Bangladesh: tuition plus living costs, bank statements, sponsor documents, loans and common mistakes.",
  "alternates": {
    "canonical": "https://eammu.com/study/bulgaria/proof-of-funds-for-bulgaria-student-visa"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Proof of Funds for Bulgaria Student Visa | Eammu Holidays",
    "description": "Proof of funds for Bulgaria student visa from Bangladesh: tuition plus living costs, bank statements, sponsor documents, loans and common mistakes.",
    "url": "https://eammu.com/study/bulgaria/proof-of-funds-for-bulgaria-student-visa",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Proof of Funds for Bulgaria Student Visa | Eammu Holidays",
    "description": "Proof of funds for Bulgaria student visa from Bangladesh: tuition plus living costs, bank statements, sponsor documents, loans and common mistakes."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Bulgaria", "href": "/study/bulgaria"}, {"name": "Proof of Funds", "href": "/study/bulgaria/proof-of-funds-for-bulgaria-student-visa"}];
const NAV = [
  {
    "label": "Bulgaria Hub",
    "pages": [
      {
        "href": "/study/bulgaria",
        "label": "Study in Bulgaria Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/bulgaria/study-in-bulgaria-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/bulgaria/tuition-fees-in-bulgaria-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/bulgaria/cost-of-living-in-bulgaria-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/bulgaria/cheapest-universities-in-bulgaria",
        "label": "Affordable Universities"
      },
      {
        "href": "/study/bulgaria/top-universities-in-bulgaria",
        "label": "Top Universities"
      },
      {
        "href": "/study/bulgaria/study-in-bulgaria-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/bulgaria/scholarships-in-bulgaria-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/bulgaria/admission-requirements-in-bulgaria-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/bulgaria/study-gap-accepted-universities-in-bulgaria",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/bulgaria/study-in-bulgaria-after-hsc",
        "label": "After HSC"
      },
      {
        "href": "/study/bulgaria/study-in-bulgaria-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/bulgaria/bulgaria-intake-dates",
        "label": "Intake Dates"
      },
      {
        "href": "/study/bulgaria/preparatory-year-and-bulgarian-language-in-bulgaria",
        "label": "Preparatory Year and Language"
      },
      {
        "href": "/study/bulgaria/bulgaria-vs-other-european-countries-for-bangladeshi-students",
        "label": "Bulgaria vs Other Countries"
      }
    ]
  },
  {
    "label": "Applications, Exams & Documents",
    "pages": [
      {
        "href": "/study/bulgaria/bulgaria-university-application-guide",
        "label": "Application Guide"
      },
      {
        "href": "/study/bulgaria/entrance-exams-biology-chemistry-for-medicine-in-bulgaria",
        "label": "Medicine Entrance Exams"
      },
      {
        "href": "/study/bulgaria/english-tests-for-bulgaria",
        "label": "English Tests"
      },
      {
        "href": "/study/bulgaria/document-legalisation-and-translation-for-bulgaria",
        "label": "Legalisation and Translation"
      },
      {
        "href": "/study/bulgaria/mes-admission-certificate-for-bulgaria-d-visa",
        "label": "MES Certificate"
      },
      {
        "href": "/study/bulgaria/degree-recognition-in-bulgaria",
        "label": "Degree Recognition"
      }
    ]
  },
  {
    "label": "Programmes & Student Life",
    "pages": [
      {
        "href": "/study/bulgaria/medicine-in-bulgaria-for-bangladeshi-students",
        "label": "Medicine in Bulgaria"
      },
      {
        "href": "/study/bulgaria/dentistry-and-pharmacy-in-bulgaria",
        "label": "Dentistry and Pharmacy"
      },
      {
        "href": "/study/bulgaria/bmdc-recognition-and-licensing-after-medicine-in-bulgaria",
        "label": "BMDC and Licensing"
      },
      {
        "href": "/study/bulgaria/cse-and-it-courses-in-bulgaria",
        "label": "CSE and IT Courses"
      },
      {
        "href": "/study/bulgaria/engineering-courses-in-bulgaria",
        "label": "Engineering Courses"
      },
      {
        "href": "/study/bulgaria/business-and-economics-in-bulgaria",
        "label": "Business and Economics"
      },
      {
        "href": "/study/bulgaria/masters-in-bulgaria-for-bangladeshi-students",
        "label": "Master's in Bulgaria"
      },
      {
        "href": "/study/bulgaria/phd-in-bulgaria-for-bangladeshi-students",
        "label": "PhD in Bulgaria"
      },
      {
        "href": "/study/bulgaria/veterinary-and-agriculture-in-bulgaria",
        "label": "Veterinary and Agriculture"
      },
      {
        "href": "/study/bulgaria/best-cities-to-study-in-bulgaria",
        "label": "Best Cities to Study"
      },
      {
        "href": "/study/bulgaria/student-accommodation-in-bulgaria",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/bulgaria/halal-food-and-student-life-in-bulgaria-for-bangladeshis",
        "label": "Halal Food and Student Life"
      },
      {
        "href": "/study/bulgaria/health-insurance-for-students-in-bulgaria",
        "label": "Health Insurance"
      },
      {
        "href": "/study/bulgaria/banking-and-sending-money-to-bulgaria-from-bangladesh",
        "label": "Banking and Sending Money"
      },
      {
        "href": "/study/bulgaria/avoid-scams-and-agent-risks-in-bulgaria-admissions",
        "label": "Avoid Scams and Agent Risks"
      }
    ]
  },
  {
    "label": "D Visa, Residence & Work",
    "pages": [
      {
        "href": "/study/bulgaria/bulgaria-d-visa-requirements-for-bangladeshi-students",
        "label": "D Visa Requirements"
      },
      {
        "href": "/study/bulgaria/d-visa-document-checklist-for-bulgaria",
        "label": "D Visa Document Checklist"
      },
      {
        "href": "/study/bulgaria/proof-of-funds-for-bulgaria-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/bulgaria/bulgaria-visa-processing-time-and-cost",
        "label": "Visa Time and Cost"
      },
      {
        "href": "/study/bulgaria/bulgaria-visa-interview-questions-and-tips",
        "label": "Interview Questions and Tips"
      },
      {
        "href": "/study/bulgaria/bulgaria-visa-refusal-reasons-and-reapplication",
        "label": "Visa Refusal and Reapplication"
      },
      {
        "href": "/study/bulgaria/residence-permit-for-students-in-bulgaria",
        "label": "Residence Permit"
      },
      {
        "href": "/study/bulgaria/part-time-work-rules-for-students-in-bulgaria",
        "label": "Part-Time Work Rules"
      },
      {
        "href": "/study/bulgaria/post-study-work-and-eu-blue-card-from-bulgaria",
        "label": "Post-Study Work and Blue Card"
      },
      {
        "href": "/study/bulgaria/bulgaria-student-visa-rule-changes-2026",
        "label": "Rule Changes 2026"
      },
      {
        "href": "/study/bulgaria/pre-departure-checklist-for-bulgaria-students",
        "label": "Pre-Departure Checklist"
      },
      {
        "href": "/study/bulgaria/maintaining-student-status-in-bulgaria",
        "label": "Maintaining Student Status"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/bulgaria/bangladesh-offices",
        "label": "Bangladesh Offices and Support"
      },
      {
        "href": "/study/bulgaria/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/bulgaria/banking-and-sending-money-to-bulgaria-from-bangladesh",
    "title": "Banking and Sending Money from Bangladesh to Bulgaria for Students",
    "description": "Paying tuition in euros and opening accounts."
  },
  {
    "href": "/study/bulgaria/cost-of-living-in-bulgaria-for-bangladeshi-students",
    "title": "Cost of Living in Bulgaria for Bangladeshi Students (2026 Monthly Budget)",
    "description": "City budgets in euros and taka."
  },
  {
    "href": "/study/bulgaria/tuition-fees-in-bulgaria-for-bangladeshi-students",
    "title": "Tuition Fees in Bulgaria for Bangladeshi Students (2026, EUR and BDT)",
    "description": "EUR and BDT tuition ranges by level and field."
  },
  {
    "href": "/study/bulgaria/bulgaria-visa-interview-questions-and-tips",
    "title": "Bulgaria Student Visa Interview: Questions and Tips for Bangladeshi Students",
    "description": "Likely questions and honest answer structure."
  }
];
const FAQS = [
  {
    "q": "How much money must I show?",
    "a": "Official rules require sufficient funds for your stay without relying on social assistance, and the exact threshold is set by Bulgarian rules and the embassy process. Many students show tuition for the first year plus several months of living costs, so confirm the current requirement."
  },
  {
    "q": "Can a sponsor support me?",
    "a": "Yes, with documents showing the sponsor's relationship, income and ability to support you."
  },
  {
    "q": "Can I show a loan?",
    "a": "An approved education loan can be shown if it is documented and accepted. Confirm acceptance first."
  },
  {
    "q": "Are large last-minute deposits a problem?",
    "a": "They can raise questions about the source of funds. Keep a clear, stable history."
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
          "name": "Bulgaria",
          "item": "https://eammu.com/study/bulgaria"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Proof of Funds",
          "item": "https://eammu.com/study/bulgaria/proof-of-funds-for-bulgaria-student-visa"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Proof of Funds for the Bulgaria Student Visa: How Much and Which Documents",
      "description": "Proof of funds for Bulgaria student visa from Bangladesh: tuition plus living costs, bank statements, sponsor documents, loans and common mistakes.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/bulgaria/proof-of-funds-for-bulgaria-student-visa",
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
          "name": "How much money must I show?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Official rules require sufficient funds for your stay without relying on social assistance, and the exact threshold is set by Bulgarian rules and the embassy process. Many students show tuition for the first year plus several months of living costs, so confirm the current requirement."
          }
        },
        {
          "@type": "Question",
          "name": "Can a sponsor support me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, with documents showing the sponsor's relationship, income and ability to support you."
          }
        },
        {
          "@type": "Question",
          "name": "Can I show a loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An approved education loan can be shown if it is documented and accepted. Confirm acceptance first."
          }
        },
        {
          "@type": "Question",
          "name": "Are large last-minute deposits a problem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They can raise questions about the source of funds. Keep a clear, stable history."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Bulgaria 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Proof of Funds for the Bulgaria Student Visa: How Much and Which Documents</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">How much money to show, how to document sponsors and how to avoid common funds mistakes.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-22">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Bulgaria guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 62 Bulgaria guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">What the authorities want to see</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Enough money for tuition and living costs.</li><li>A stable, explainable source.</li><li>Consistency with your admission letter and fee table.</li><li>A genuine sponsor relationship.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Typical documents</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Document</th><th scope="col" className="px-3 py-2 text-left font-bold">Purpose</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bank statements (6 to 12 months)</td><td className="px-3 py-2 align-top">Show balance history</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Sponsor income documents and tax records</td><td className="px-3 py-2 align-top">Show source of funds</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Relationship proof</td><td className="px-3 py-2 align-top">Birth or marriage certificates where relevant</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Education loan or scholarship letter</td><td className="px-3 py-2 align-top">Show external funding</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">University fee table and invoices</td><td className="px-3 py-2 align-top">Match funds to tuition</td></tr></tbody></table></div>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Amounts to plan around (indicative)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">EUR</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Year one tuition, non-medical programme</td><td className="px-3 py-2 align-top">€2,500 – €5,500</td><td className="px-3 py-2 align-top">Tk 3.5 – 7.8 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Year one tuition, medicine</td><td className="px-3 py-2 align-top">€7,000 – €10,000</td><td className="px-3 py-2 align-top">Tk 9.9 – 14.2 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs for twelve months</td><td className="px-3 py-2 align-top">€5,400 – €8,400</td><td className="px-3 py-2 align-top">Tk 7.7 – 11.9 lakh</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 EUR = about Tk 142 and are indicative estimates for the 2026–2027 intake. Fees, scholarship rules, test dates, visa policy and exchange rates change, so always confirm with the university, official US government sources or an Eammu Holidays counselor before paying anything.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Common mistakes</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Unexplained deposits shortly before the appointment.</li><li>Borrowed money shown temporarily.</li><li>Sponsor documents that do not match the bank statements.</li><li>Ignoring the fee table amounts.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">A simple funds planning timeline</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">When</th><th scope="col" className="px-3 py-2 text-left font-bold">Action</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">4 to 6 months before</td><td className="px-3 py-2 align-top">Move funds to the account to be shown and avoid unexplained deposits</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">2 to 3 months before</td><td className="px-3 py-2 align-top">Collect bank statements and sponsor documents</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">1 month before</td><td className="px-3 py-2 align-top">Translate and certify documents as required</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Appointment</td><td className="px-3 py-2 align-top">Bring originals and copies that match</td></tr></tbody></table></div>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Official sources to confirm this information</h2>
<p className="mt-4 leading-7 text-slate-700">Policies, fees, visa rules and exam dates change. Before you act on anything on this page, check the current version at:</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Ministry of Foreign Affairs of Bulgaria (mfa.bg) visa pages</li><li>VFS Global Bulgaria page for Bangladesh</li><li>Migration Directorate of Bulgaria for residence permits</li><li>Your university international office</li></ul>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Bulgaria Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Bulgaria</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and scholarship shortlist, Bulgaria D visa interview and document preparation and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
