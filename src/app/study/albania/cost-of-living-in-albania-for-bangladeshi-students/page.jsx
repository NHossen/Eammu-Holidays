import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/albania/cost-of-living-in-albania-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Cost of Living in Albania for Students 2026 | Eammu Holidays",
  "description": "Monthly cost of living in Albania for Bangladeshi students in 2026 in EUR and BDT, with rent, food, transport and city comparison for Tirana, Durrës and Shkodër.",
  "alternates": {
    "canonical": "https://eammu.com/study/albania/cost-of-living-in-albania-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Cost of Living in Albania for Students 2026 | Eammu Holidays",
    "description": "Monthly cost of living in Albania for Bangladeshi students in 2026 in EUR and BDT, with rent, food, transport and city comparison for Tirana, Durrës and Shkodër.",
    "url": "https://eammu.com/study/albania/cost-of-living-in-albania-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Cost of Living in Albania for Students 2026 | Eammu Holidays",
    "description": "Monthly cost of living in Albania for Bangladeshi students in 2026 in EUR and BDT, with rent, food, transport and city comparison for Tirana, Durrës and Shkodër."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Albania", "href": "/study/albania"}, {"name": "Cost of Living", "href": "/study/albania/cost-of-living-in-albania-for-bangladeshi-students"}];
const NAV = [
  {
    "label": "Albania Hub",
    "pages": [
      {
        "href": "/study/albania",
        "label": "Study in Albania Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/albania/study-in-albania-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/albania/albania-reality-check-eu-and-schengen-myths",
        "label": "Reality Check: EU & Schengen Myths"
      },
      {
        "href": "/study/albania/why-study-in-albania-pros-and-cons",
        "label": "Pros & Cons"
      },
      {
        "href": "/study/albania/study-in-albania-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/albania/english-and-albanian-language-requirements",
        "label": "Language Requirements"
      },
      {
        "href": "/study/albania/tuition-fees-in-albania-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/albania/cost-of-living-in-albania-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/albania/cheapest-universities-in-albania",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/albania/top-universities-in-albania",
        "label": "Top Universities"
      },
      {
        "href": "/study/albania/public-vs-private-universities-in-albania",
        "label": "Public vs Private"
      },
      {
        "href": "/study/albania/scholarships-in-albania-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/albania/admission-requirements-in-albania-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/albania/study-gap-accepted-in-albania",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/albania/study-in-albania-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/albania/study-in-albania-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/albania/albania-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Courses, Housing & Life",
    "pages": [
      {
        "href": "/study/albania/application-guide-for-albanian-universities",
        "label": "Application Guide"
      },
      {
        "href": "/study/albania/degree-recognition-and-eligibility-in-albania",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/albania/it-and-cse-courses-in-albania",
        "label": "IT & CSE Courses"
      },
      {
        "href": "/study/albania/business-and-mba-in-albania",
        "label": "Business & MBA"
      },
      {
        "href": "/study/albania/medicine-dentistry-and-pharmacy-in-albania",
        "label": "Medicine, Dentistry & Pharmacy"
      },
      {
        "href": "/study/albania/engineering-and-architecture-in-albania",
        "label": "Engineering & Architecture"
      },
      {
        "href": "/study/albania/nursing-and-health-courses-in-albania",
        "label": "Nursing & Health Courses"
      },
      {
        "href": "/study/albania/tourism-and-hospitality-in-albania",
        "label": "Tourism & Hospitality"
      },
      {
        "href": "/study/albania/foundation-year-and-albanian-language-courses",
        "label": "Foundation Year & Albanian Language"
      },
      {
        "href": "/study/albania/student-accommodation-in-albania",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/albania/health-insurance-for-students-in-albania",
        "label": "Health Insurance"
      },
      {
        "href": "/study/albania/student-life-halal-food-and-safety-in-albania",
        "label": "Student Life, Halal & Safety"
      }
    ]
  },
  {
    "label": "Visa, Permit & Safety",
    "pages": [
      {
        "href": "/study/albania/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/albania/e-visa-application-step-by-step",
        "label": "e-Visa Step by Step"
      },
      {
        "href": "/study/albania/residence-permit-guide-for-students-in-albania",
        "label": "Residence Permit Guide"
      },
      {
        "href": "/study/albania/proof-of-funds-requirements-for-albania-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/albania/visa-processing-time-and-cost-albania",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/albania/visa-refusal-reasons-and-how-to-avoid-them",
        "label": "Visa Refusal Reasons"
      },
      {
        "href": "/study/albania/part-time-job-and-work-rules-in-albania",
        "label": "Work Rules"
      },
      {
        "href": "/study/albania/after-graduation-unique-permit-and-stay-options",
        "label": "After Graduation"
      },
      {
        "href": "/study/albania/scams-and-fake-offer-warning-albania",
        "label": "Scams & Fake Offers"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/albania/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/albania/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/albania/tuition-fees-in-albania-for-bangladeshi-students",
    "title": "Tuition Fees in Albania for Bangladeshi Students",
    "description": "A clear EUR-to-BDT look at what each level of study costs, and the extra fees families forget."
  },
  {
    "href": "/study/albania/student-accommodation-in-albania",
    "title": "Student Accommodation in Albania for Bangladeshi Students",
    "description": "Public and private residences, shared flats, costs, proof of housing for the visa and scam warnings."
  },
  {
    "href": "/study/albania/health-insurance-for-students-in-albania",
    "title": "Health Insurance for International Students in Albania",
    "description": "Travel health insurance for the visa, ongoing cover, costs and what to check."
  },
  {
    "href": "/study/albania/proof-of-funds-requirements-for-albania-student-visa",
    "title": "Proof of Funds for an Albania Student Visa from Bangladesh",
    "description": "What the visa asks for, typical amounts to show and how to present bank documents safely."
  }
];
const FAQS = [
  {
    "q": "Can I live on €400 a month?",
    "a": "Possible in smaller cities with shared housing, but tight in Tirana."
  },
  {
    "q": "Is Tirana expensive?",
    "a": "It is the most expensive city in Albania, though still cheap by Western European standards."
  },
  {
    "q": "Are utilities included in rent?",
    "a": "Sometimes. Ask before signing."
  },
  {
    "q": "How do I pay for things?",
    "a": "Cash is common, and cards are widely accepted in Tirana. Many students open a local bank account."
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
          "name": "Albania",
          "item": "https://eammu.com/study/albania"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Cost of Living",
          "item": "https://eammu.com/study/albania/cost-of-living-in-albania-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Cost of Living in Albania for Bangladeshi Students (2026)",
      "description": "Monthly cost of living in Albania for Bangladeshi students in 2026 in EUR and BDT, with rent, food, transport and city comparison for Tirana, Durrës and Shkodër.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/albania/cost-of-living-in-albania-for-bangladeshi-students",
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
          "name": "Can I live on €400 a month?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possible in smaller cities with shared housing, but tight in Tirana."
          }
        },
        {
          "@type": "Question",
          "name": "Is Tirana expensive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is the most expensive city in Albania, though still cheap by Western European standards."
          }
        },
        {
          "@type": "Question",
          "name": "Are utilities included in rent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sometimes. Ask before signing."
          }
        },
        {
          "@type": "Question",
          "name": "How do I pay for things?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cash is common, and cards are widely accepted in Tirana. Many students open a local bank account."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Albania 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Cost of Living in Albania for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Monthly budgets in EUR and BDT for rent, food, transport and phone in Tirana and other student cities.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-21">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Albania guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 52 Albania guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Monthly budget at a glance</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Expense</th><th scope="col" className="px-3 py-2 text-left font-bold">Smaller cities (EUR)</th><th scope="col" className="px-3 py-2 text-left font-bold">Tirana (EUR)</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Rent (shared flat or student residence)</td><td className="px-3 py-2 align-top">€120 – 250</td><td className="px-3 py-2 align-top">€200 – 400</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Food and groceries</td><td className="px-3 py-2 align-top">€130 – 200</td><td className="px-3 py-2 align-top">€150 – 250</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Transport</td><td className="px-3 py-2 align-top">€10 – 25</td><td className="px-3 py-2 align-top">€15 – 30</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Phone and internet</td><td className="px-3 py-2 align-top">€10 – 20</td><td className="px-3 py-2 align-top">€10 – 25</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Utilities (if not included)</td><td className="px-3 py-2 align-top">€20 – 50</td><td className="px-3 py-2 align-top">€30 – 60</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Personal, books, leisure</td><td className="px-3 py-2 align-top">€40 – 100</td><td className="px-3 py-2 align-top">€50 – 120</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top"><strong>Total per month</strong></td><td className="px-3 py-2 align-top"><strong>€330 – 645</strong></td><td className="px-3 py-2 align-top"><strong>€455 – 885</strong></td></tr></tbody></table></div>
<p className="mt-4 leading-7 text-slate-700">In taka at Tk 140 per EUR, a student in a smaller city spends about Tk 46,000 to 90,000 a month, and a student in Tirana about Tk 64,000 to 1.24 lakh. Some published guides suggest €300 to €500 a month, which can work with careful budgeting, but Tirana rents have risen in recent years, so plan more.</p>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 EUR = about Tk 140 (and about 97–100 ALL per EUR) and are indicative estimates for 2026–2027 from published university pages and Albanian government portals. Fees, visa charges and rules change, so confirm on the university page, e-visa.al and e-albania.al, or with an Eammu Holidays counselor, before paying anything.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Ways to keep costs down</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Choose a university-run or partner student residence where available.</li><li>Share a flat and cook at home.</li><li>Shop at local markets and discount supermarkets.</li><li>Use buses and walking; Tirana is compact.</li><li>Look for early-bird tuition discounts.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Income from work</h2>
<p className="mt-4 leading-7 text-slate-700">Do not plan to cover costs through work. Foreigners generally need a permit to work, and part-time jobs are limited. Read <Link href="/study/albania/part-time-job-and-work-rules-in-albania" className={linkClass}>work rules</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Bring a buffer</h2>
<p className="mt-4 leading-7 text-slate-700">Keep an extra two to three months of expenses for deposits, a SIM card, bedding, winter clothing and unexpected costs.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Albania Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Albania</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and scholarship shortlist, visa and residence permit guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
