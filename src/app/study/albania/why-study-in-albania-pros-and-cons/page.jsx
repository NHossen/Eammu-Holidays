import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/albania/why-study-in-albania-pros-and-cons';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Pros & Cons of Studying in Albania | Eammu Holidays",
  "description": "Pros and cons of studying in Albania for Bangladeshi students in 2026: low costs, English-taught options, culture and safety versus language limits, recognition and work rules. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/albania/why-study-in-albania-pros-and-cons"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Pros & Cons of Studying in Albania | Eammu Holidays",
    "description": "Pros and cons of studying in Albania for Bangladeshi students in 2026: low costs, English-taught options, culture and safety versus language limits, recognition and work rules. Eammu Holidays.",
    "url": "https://eammu.com/study/albania/why-study-in-albania-pros-and-cons",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Pros & Cons of Studying in Albania | Eammu Holidays",
    "description": "Pros and cons of studying in Albania for Bangladeshi students in 2026: low costs, English-taught options, culture and safety versus language limits, recognition and work rules. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Albania", "href": "/study/albania"}, {"name": "Pros & Cons", "href": "/study/albania/why-study-in-albania-pros-and-cons"}];
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
    "href": "/study/albania/albania-reality-check-eu-and-schengen-myths",
    "title": "Albania Reality Check: What a Student Permit Does and Does Not Give You",
    "description": "Albania is not in the EU or Schengen. Here is what that means for visas, jobs, recognition and your long-term plans."
  },
  {
    "href": "/study/albania/tuition-fees-in-albania-for-bangladeshi-students",
    "title": "Tuition Fees in Albania for Bangladeshi Students",
    "description": "A clear EUR-to-BDT look at what each level of study costs, and the extra fees families forget."
  },
  {
    "href": "/study/albania/public-vs-private-universities-in-albania",
    "title": "Public vs Private Universities in Albania: How to Choose",
    "description": "Fees, English availability, quality checks, recognition and scholarships compared."
  },
  {
    "href": "/study/albania/student-life-halal-food-and-safety-in-albania",
    "title": "Halal Food, Prayer, Culture and Safety for Bangladeshi Students in Albania",
    "description": "Settling in: Muslim-majority culture, halal food, mosques, transport, language, weather and emergency contacts."
  }
];
const FAQS = [
  {
    "q": "Is Albania better than Eastern European alternatives?",
    "a": "It depends on the subject and budget. Compare tuition, English options, recognition and living costs in each country."
  },
  {
    "q": "Is the quality of education good?",
    "a": "It varies by university. Choose an accredited one with published outcomes."
  },
  {
    "q": "Is Albania safe for Bangladeshi students?",
    "a": "Generally yes, but take normal precautions and avoid scams."
  },
  {
    "q": "Will I find Bangladeshi food?",
    "a": "Specific Bangladeshi ingredients are limited, but halal meat and South Asian spices can be found in Tirana, and many students cook at home."
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
          "name": "Pros & Cons",
          "item": "https://eammu.com/study/albania/why-study-in-albania-pros-and-cons"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Pros and Cons of Studying in Albania for Bangladeshi Students (2026)",
      "description": "Pros and cons of studying in Albania for Bangladeshi students in 2026: low costs, English-taught options, culture and safety versus language limits, recognition and work rules. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/albania/why-study-in-albania-pros-and-cons",
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
          "name": "Is Albania better than Eastern European alternatives?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the subject and budget. Compare tuition, English options, recognition and living costs in each country."
          }
        },
        {
          "@type": "Question",
          "name": "Is the quality of education good?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It varies by university. Choose an accredited one with published outcomes."
          }
        },
        {
          "@type": "Question",
          "name": "Is Albania safe for Bangladeshi students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally yes, but take normal precautions and avoid scams."
          }
        },
        {
          "@type": "Question",
          "name": "Will I find Bangladeshi food?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Specific Bangladeshi ingredients are limited, but halal meat and South Asian spices can be found in Tirana, and many students cook at home."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Pros and Cons of Studying in Albania for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A balanced look at cost, quality, language, recognition, work, safety and life in Albania.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Advantages</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li><strong>Lower costs:</strong> private bachelor tuition often starts around €2,500 to €4,000 a year and living costs are modest.</li><li><strong>English-taught options:</strong> selected degrees in business, IT, engineering, architecture and health.</li><li><strong>Small, safe, walkable cities:</strong> Tirana, Durrës, Shkodër, Vlorë and others are easy to get around.</li><li><strong>Muslim-majority culture:</strong> mosques and halal-friendly food are present, although halal labelling is not universal.</li><li><strong>Mediterranean climate and travel:</strong> beaches, mountains and quick links to nearby Balkan countries.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Disadvantages</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li><strong>Limited English-taught programmes</strong>, so subject choice is narrower than in larger countries.</li><li><strong>Language barrier in daily life:</strong> Albanian is the national language, although many young people speak English and Italian.</li><li><strong>Recognition questions:</strong> you must check how a degree is recognised in Bangladesh and abroad.</li><li><strong>Not an EU or Schengen route.</strong></li><li><strong>Work restrictions and a small job market.</strong></li><li><strong>Wage level:</strong> salaries are lower than in Western Europe, so post-study earnings are limited.</li></ul>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Factor</th><th scope="col" className="px-3 py-2 text-left font-bold">Rating (our view)</th><th scope="col" className="px-3 py-2 text-left font-bold">Comment</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Cost</td><td className="px-3 py-2 align-top">Strong</td><td className="px-3 py-2 align-top">Among the lowest in Europe, but medicine costs more</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Academic reputation</td><td className="px-3 py-2 align-top">Mixed</td><td className="px-3 py-2 align-top">A few strong universities; quality varies widely</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">English availability</td><td className="px-3 py-2 align-top">Moderate</td><td className="px-3 py-2 align-top">Good in private universities, weaker elsewhere</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Work and migration</td><td className="px-3 py-2 align-top">Limited</td><td className="px-3 py-2 align-top">Do not plan around work income or EU access</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Lifestyle</td><td className="px-3 py-2 align-top">Strong</td><td className="px-3 py-2 align-top">Friendly, safe, scenic</td></tr></tbody></table></div>
<p className="mt-4 leading-7 text-slate-700">If you still want to proceed, read <Link href="/study/albania/tuition-fees-in-albania-for-bangladeshi-students" className={linkClass}>tuition fees</Link> and <Link href="/study/albania/public-vs-private-universities-in-albania" className={linkClass}>public vs private universities</Link>.</p>
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
