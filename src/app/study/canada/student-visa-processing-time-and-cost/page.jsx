import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/canada/student-visa-processing-time-and-cost';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Canada Study Permit Time and Cost 2026 | Eammu Holidays",
  "description": "Canada study permit processing time and cost for Bangladeshi students in 2026: timelines, fee types in CAD and BDT, and tips to avoid delays. Eammu.",
  "alternates": {
    "canonical": "https://eammu.com/study/canada/student-visa-processing-time-and-cost"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Canada Study Permit Time and Cost 2026 | Eammu Holidays",
    "description": "Canada study permit processing time and cost for Bangladeshi students in 2026: timelines, fee types in CAD and BDT, and tips to avoid delays. Eammu.",
    "url": "https://eammu.com/study/canada/student-visa-processing-time-and-cost",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Canada Study Permit Time and Cost 2026 | Eammu Holidays",
    "description": "Canada study permit processing time and cost for Bangladeshi students in 2026: timelines, fee types in CAD and BDT, and tips to avoid delays. Eammu."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Canada", "href": "/study/canada"}, {"name": "Visa Time & Cost", "href": "/study/canada/student-visa-processing-time-and-cost"}];
const NAV = [
  {
    "label": "Canada Hub",
    "pages": [
      {
        "href": "/study/canada",
        "label": "Study in Canada Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/canada/study-in-canada-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/canada/study-in-canada-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/canada/tuition-fees-in-canada-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/canada/cost-of-living-in-canada-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/canada/cheapest-universities-in-canada",
        "label": "Cheapest Colleges & Universities"
      },
      {
        "href": "/study/canada/top-universities-in-canada",
        "label": "Top Universities"
      },
      {
        "href": "/study/canada/public-vs-private-universities-in-canada",
        "label": "Public vs Private"
      },
      {
        "href": "/study/canada/scholarships-in-canada-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/canada/admission-requirements-in-canada-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/canada/study-gap-accepted-universities-in-canada",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/canada/study-in-canada-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/canada/study-in-canada-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/canada/canada-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/canada/provincial-attestation-letter-pal-guide-for-canada",
        "label": "PAL Guide"
      },
      {
        "href": "/study/canada/colleges-and-pgwp-eligible-programs-in-canada",
        "label": "Colleges & PGWP Programmes"
      },
      {
        "href": "/study/canada/cse-and-it-courses-in-canada",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/canada/mba-in-canada-for-bangladeshi-students",
        "label": "MBA & Master's"
      },
      {
        "href": "/study/canada/student-accommodation-in-canada",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, Permit & Work Rules",
    "pages": [
      {
        "href": "/study/canada/student-visa-requirements-bangladesh",
        "label": "Study Permit Requirements"
      },
      {
        "href": "/study/canada/study-permit-application-process-and-biometrics-guide",
        "label": "Application Process"
      },
      {
        "href": "/study/canada/bank-solvency-requirements-for-canada-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/canada/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/canada/part-time-job-and-post-study-work-rules-in-canada",
        "label": "Work, PGWP & PR Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/canada/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/canada/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/canada/study-permit-application-process-and-biometrics-guide",
    "title": "Study Permit Application Process and Biometrics Guide for Canada",
    "description": "How the online study permit application, biometrics, medical exam and decision stages work for Bangladeshi students."
  },
  {
    "href": "/study/canada/student-visa-requirements-bangladesh",
    "title": "Canada Study Permit Requirements for Bangladesh",
    "description": "Documents and eligibility for a Canadian study permit from Bangladesh, including letter of acceptance, PAL, funds and study plan."
  },
  {
    "href": "/study/canada/bank-solvency-requirements-for-canada-student-visa",
    "title": "Proof of Funds Requirements for a Canada Study Permit",
    "description": "How much money proof Bangladeshi students must show for a Canada study permit and how to present bank statements."
  },
  {
    "href": "/study/canada/canada-intake-dates",
    "title": "Canada Intake Dates",
    "description": "Main intakes in Canada and the best time for Bangladeshi students to start applications and request a PAL."
  }
];
const FAQS = [
  {
    "q": "Is there an express service?",
    "a": "The Student Direct Stream closed in November 2024. Standard processing applies."
  },
  {
    "q": "Who pays the study permit fee?",
    "a": "The applicant, online, by card."
  },
  {
    "q": "Are fees refundable?",
    "a": "Government fees are generally not refundable once submitted."
  },
  {
    "q": "Is health insurance mandatory?",
    "a": "Provincial rules differ. Many institutions require private cover for international students."
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
          "name": "Canada",
          "item": "https://eammu.com/study/canada"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Visa Time & Cost",
          "item": "https://eammu.com/study/canada/student-visa-processing-time-and-cost"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Canada Study Permit Processing Time and Cost (2026)",
      "description": "Canada study permit processing time and cost for Bangladeshi students in 2026: timelines, fee types in CAD and BDT, and tips to avoid delays. Eammu.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/canada/student-visa-processing-time-and-cost",
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
          "name": "Is there an express service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Student Direct Stream closed in November 2024. Standard processing applies."
          }
        },
        {
          "@type": "Question",
          "name": "Who pays the study permit fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The applicant, online, by card."
          }
        },
        {
          "@type": "Question",
          "name": "Are fees refundable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Government fees are generally not refundable once submitted."
          }
        },
        {
          "@type": "Question",
          "name": "Is health insurance mandatory?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Provincial rules differ. Many institutions require private cover for international students."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Canada 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Canada Study Permit Processing Time and Cost (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Plan your timeline and budget realistically, with a clear view of the fees you may need to pay.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Canada guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Canada guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">How long does processing take?</h2>
<p className="mt-4 leading-7 text-slate-700">Processing time depends on the application volume and your file. Bangladeshi applicants often report roughly 8 to 16 weeks for the study permit, plus about 2 to 6 weeks for a PAL, so a full timeline from application to arrival of 4 to 7 months is common. Follow the stages in <Link href="/study/canada/study-permit-application-process-and-biometrics-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the study permit application process</Link> and align them with <Link href="/study/canada/canada-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Canada intake dates</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">Industry data in 2026 show IRCC processed far fewer new applications than a year earlier, so apply early and keep your documents strong; see <Link href="/study/canada/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study permit requirements for Bangladesh</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Typical fee categories</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Fee item</th><th scope="col" className="px-3 py-2 text-left font-bold">Indicative amount</th><th scope="col" className="px-3 py-2 text-left font-bold">Indicative BDT</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Study permit fee</td><td className="px-3 py-2 align-top">CAD 150</td><td className="px-3 py-2 align-top">Tk 13,200</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Biometrics fee</td><td className="px-3 py-2 align-top">CAD 85</td><td className="px-3 py-2 align-top">Tk 7,500</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Medical exam and translations</td><td className="px-3 py-2 align-top">Varies</td><td className="px-3 py-2 align-top">Tk 10,000 – 30,000</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tuition deposit (varies by institution)</td><td className="px-3 py-2 align-top">CAD 2,000 – 10,000+</td><td className="px-3 py-2 align-top">Tk 1.8 – 8.8 lakh+</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Air ticket (one-way, Dhaka to Canada, usually with a stopover)</td><td className="px-3 py-2 align-top">CAD 1,200 – 2,000</td><td className="px-3 py-2 align-top">Tk 1.06 – 1.76 lakh</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 CAD = about Tk 88 and are indicative estimates for 2026–2027. Fees, funds rules, caps and exchange rates change often, so always confirm on the official IRCC website, with the institution or with an Eammu Holidays counselor before paying. Fees are set by IRCC and institutions and can change without notice.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Ways to avoid delays</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Submit accurate documents once, with consistent spellings of names.</li><li>Prepare funds correctly as shown in <Link href="/study/canada/bank-solvency-requirements-for-canada-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds requirements</Link>.</li><li>Give biometrics promptly after the request.</li><li>Do not book non-refundable flights before approval.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Total budget before departure</h2>
<p className="mt-4 leading-7 text-slate-700">Combine these with <Link href="/study/canada/tuition-fees-in-canada-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">first-year tuition</Link> and living funds, then add <Link href="/study/canada/cost-of-living-in-canada-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">monthly living costs</Link>. Discuss your plan at <Link href="/study/canada/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">our Dhaka counseling desk</Link> or online.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Canada Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Canada</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university shortlist, visa guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
