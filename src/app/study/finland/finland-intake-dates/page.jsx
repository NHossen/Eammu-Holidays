import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/finland/finland-intake-dates';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Finland Intake Dates for Bangladeshis 2026 | Eammu Holidays",
  "description": "Finland intake dates explained for Bangladeshi students: the January 2027 joint application, autumn start, separate admissions and permit timing.",
  "alternates": {
    "canonical": "https://eammu.com/study/finland/finland-intake-dates"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Finland Intake Dates for Bangladeshis 2026 | Eammu Holidays",
    "description": "Finland intake dates explained for Bangladeshi students: the January 2027 joint application, autumn start, separate admissions and permit timing.",
    "url": "https://eammu.com/study/finland/finland-intake-dates",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Finland Intake Dates for Bangladeshis 2026 | Eammu Holidays",
    "description": "Finland intake dates explained for Bangladeshi students: the January 2027 joint application, autumn start, separate admissions and permit timing."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Finland", "href": "/study/finland"}, {"name": "Intake Dates", "href": "/study/finland/finland-intake-dates"}];
const NAV = [
  {
    "label": "Finland Hub",
    "pages": [
      {
        "href": "/study/finland",
        "label": "Study in Finland Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/finland/study-in-finland-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/finland/study-in-finland-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/finland/tuition-fees-in-finland-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/finland/cost-of-living-in-finland-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/finland/cheapest-universities-in-finland",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/finland/top-universities-in-finland",
        "label": "Top Universities"
      },
      {
        "href": "/study/finland/universities-vs-universities-of-applied-sciences-in-finland",
        "label": "Universities vs UAS"
      },
      {
        "href": "/study/finland/scholarships-in-finland-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/finland/admission-requirements-in-finland-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/finland/study-gap-accepted-universities-in-finland",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/finland/study-in-finland-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/finland/study-in-finland-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/finland/finland-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/finland/studyinfo-joint-application-guide-for-finland",
        "label": "Studyinfo Application Guide"
      },
      {
        "href": "/study/finland/degree-recognition-and-eligibility-in-finland",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/finland/cse-and-it-courses-in-finland",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/finland/mba-in-finland-for-bangladeshi-students",
        "label": "MBA & Master's"
      },
      {
        "href": "/study/finland/student-accommodation-in-finland",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, Permit & Work Rules",
    "pages": [
      {
        "href": "/study/finland/student-visa-requirements-bangladesh",
        "label": "Residence Permit Requirements"
      },
      {
        "href": "/study/finland/enter-finland-and-migri-application-guide",
        "label": "Enter Finland & Migri Guide"
      },
      {
        "href": "/study/finland/bank-solvency-requirements-for-finland-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/finland/student-visa-processing-time-and-cost",
        "label": "Permit Time & Cost"
      },
      {
        "href": "/study/finland/part-time-job-and-post-study-work-rules-in-finland",
        "label": "Work & Post-Study Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/finland/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/finland/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/finland/studyinfo-joint-application-guide-for-finland",
    "title": "Studyinfo Joint Application Guide for Finland",
    "description": "How to apply to Finnish universities through Studyinfo.fi: joint application windows, the EUR 100 fee, entrance exams and results."
  },
  {
    "href": "/study/finland/enter-finland-and-migri-application-guide",
    "title": "Enter Finland and Migri Residence Permit Application Guide",
    "description": "How the online residence permit application on Enter Finland works, from account to decision and arrival."
  },
  {
    "href": "/study/finland/student-visa-processing-time-and-cost",
    "title": "Finland Residence Permit Processing Time and Cost",
    "description": "Typical processing time and the main fees Bangladeshi students should budget for in a Finnish residence permit application."
  },
  {
    "href": "/study/finland/study-in-finland-from-bangladesh",
    "title": "Study in Finland from Bangladesh",
    "description": "A practical roadmap for studying in Finland from Bangladesh: choosing a programme, Studyinfo, costs, the residence permit and timelines."
  }
];
const FAQS = [
  {
    "q": "When should I start applying?",
    "a": "Prepare documents and English tests 8 to 10 months before autumn, and apply in the December–January window."
  },
  {
    "q": "Which intake has the most seats?",
    "a": "The autumn intake, applied for in January, has the widest choice."
  },
  {
    "q": "Can I start in January?",
    "a": "A limited number of programmes start in January and use the autumn joint application."
  },
  {
    "q": "Do I have to apply through the joint application?",
    "a": "Not always. Some programmes use separate applications. Check each programme."
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
          "name": "Finland",
          "item": "https://eammu.com/study/finland"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Intake Dates",
          "item": "https://eammu.com/study/finland/finland-intake-dates"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Finland Intake Dates 2026–2027 for Bangladeshi Students",
      "description": "Finland intake dates explained for Bangladeshi students: the January 2027 joint application, autumn start, separate admissions and permit timing.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/finland/finland-intake-dates",
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
          "name": "When should I start applying?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Prepare documents and English tests 8 to 10 months before autumn, and apply in the December–January window."
          }
        },
        {
          "@type": "Question",
          "name": "Which intake has the most seats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The autumn intake, applied for in January, has the widest choice."
          }
        },
        {
          "@type": "Question",
          "name": "Can I start in January?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A limited number of programmes start in January and use the autumn joint application."
          }
        },
        {
          "@type": "Question",
          "name": "Do I have to apply through the joint application?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not always. Some programmes use separate applications. Check each programme."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Finland 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Finland Intake Dates 2026–2027 for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Finland has a main intake in autumn, and the application window is in the winter before it.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Finland guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Finland guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Main intakes and application windows</h2>
<p className="mt-4 leading-7 text-slate-700">Most English-taught bachelor&apos;s and master&apos;s programmes start in August or September, and their main joint application on Studyinfo.fi is held in January. For studies starting in autumn 2027, the joint application for bachelor&apos;s and many master&apos;s programmes runs from 7 to 21 January 2027, with some master&apos;s programmes opening earlier, for example from 14 December 2026. A smaller autumn joint application, which ran from 31 August to 10 September 2026, serves a limited set of January starts. Some institutions run separate or rolling applications, so confirm every programme&apos;s dates; see <Link href="/study/finland/studyinfo-joint-application-guide-for-finland" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Studyinfo guide</Link>.</p>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Stage</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical timing</th><th scope="col" className="px-3 py-2 text-left font-bold">What you do</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Application</td><td className="px-3 py-2 align-top">Mid-December – January</td><td className="px-3 py-2 align-top">Apply on Studyinfo.fi and pay the EUR 100 fee</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Entrance exams</td><td className="px-3 py-2 align-top">Spring</td><td className="px-3 py-2 align-top">Take the exam or submit the portfolio if required</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Results</td><td className="px-3 py-2 align-top">Around late May</td><td className="px-3 py-2 align-top">Accept the place and pay or secure tuition</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Residence permit</td><td className="px-3 py-2 align-top">May – July</td><td className="px-3 py-2 align-top">Apply on Enter Finland; see <Link href="/study/finland/enter-finland-and-migri-application-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Migri guide</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Start of studies</td><td className="px-3 py-2 align-top">August – September</td><td className="px-3 py-2 align-top">Arrive and register</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Exact dates differ by programme and year. Check each programme&apos;s page on Studyinfo.fi.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Working backwards from your intake</h2>
<p className="mt-4 leading-7 text-slate-700">Begin with documents, English tests and funds months before the January window; see the <Link href="/study/finland/admission-requirements-in-finland-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link> and <Link href="/study/finland/bank-solvency-requirements-for-finland-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds requirements</Link>. Start the permit as soon as you have accepted the place and paid tuition; <Link href="/study/finland/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">permit processing time and cost</Link> explains timing.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Which route should you choose?</h2>
<p className="mt-4 leading-7 text-slate-700">The January joint application offers the widest choice for the next autumn. Separate or rolling applications can suit UAS programmes; see <Link href="/study/finland/universities-vs-universities-of-applied-sciences-in-finland" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">universities vs universities of applied sciences in Finland</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Missed the window?</h2>
<p className="mt-4 leading-7 text-slate-700">The next intake is a year away for most programmes. Use the time to improve English, review &#123;&#123;no-ielts|IELTS alternatives&#125;&#125; and plan your &#123;&#123;from-bd|move from Bangladesh&#125;&#125;.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Finland Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Finland</h2>
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
