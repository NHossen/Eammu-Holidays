import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/montenegro/montenegro-intake-dates';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Montenegro Intake Dates for Students 2026 | Eammu Holidays",
  "description": "Montenegro intake dates for 2026 and 2027 explained for Bangladeshi students: October main intake, application windows and visa timelines. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/montenegro/montenegro-intake-dates"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Montenegro Intake Dates for Students 2026 | Eammu Holidays",
    "description": "Montenegro intake dates for 2026 and 2027 explained for Bangladeshi students: October main intake, application windows and visa timelines. Eammu Holidays.",
    "url": "https://eammu.com/study/montenegro/montenegro-intake-dates",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Montenegro Intake Dates for Students 2026 | Eammu Holidays",
    "description": "Montenegro intake dates for 2026 and 2027 explained for Bangladeshi students: October main intake, application windows and visa timelines. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Montenegro", "href": "/study/montenegro"}, {"name": "Intake Dates", "href": "/study/montenegro/montenegro-intake-dates"}];
const NAV = [
  {
    "label": "Montenegro Hub",
    "pages": [
      {
        "href": "/study/montenegro",
        "label": "Study in Montenegro Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/montenegro/study-in-montenegro-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/montenegro/study-in-montenegro-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/montenegro/tuition-fees-in-montenegro-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/montenegro/cost-of-living-in-montenegro-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/montenegro/cheapest-universities-in-montenegro",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/montenegro/top-universities-in-montenegro",
        "label": "Top Universities"
      },
      {
        "href": "/study/montenegro/public-vs-private-universities-in-montenegro",
        "label": "Public vs Private"
      },
      {
        "href": "/study/montenegro/scholarships-in-montenegro-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/montenegro/admission-requirements-in-montenegro-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/montenegro/study-gap-accepted-universities-in-montenegro",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/montenegro/study-in-montenegro-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/montenegro/study-in-montenegro-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/montenegro/montenegro-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/montenegro/degree-recognition-and-accreditation-in-montenegro",
        "label": "Degree Recognition"
      },
      {
        "href": "/study/montenegro/montenegrin-language-and-english-taught-programs-guide",
        "label": "Language & English Programmes"
      },
      {
        "href": "/study/montenegro/hospitality-tourism-and-business-degrees-in-montenegro",
        "label": "Hospitality & Business"
      },
      {
        "href": "/study/montenegro/cse-and-it-courses-in-montenegro",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/montenegro/student-accommodation-in-montenegro",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, Permit & Work Rules",
    "pages": [
      {
        "href": "/study/montenegro/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/montenegro/temporary-residence-permit-and-arrival-guide-montenegro",
        "label": "Residence Permit & Arrival"
      },
      {
        "href": "/study/montenegro/bank-solvency-requirements-for-montenegro-student-visa",
        "label": "Bank Solvency"
      },
      {
        "href": "/study/montenegro/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/montenegro/part-time-job-and-post-study-work-rules-in-montenegro",
        "label": "Work Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/montenegro/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/montenegro/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/montenegro/admission-requirements-in-montenegro-for-bangladeshi-students",
    "title": "Admission Requirements in Montenegro for Bangladeshi Students",
    "description": "SSC, HSC, diploma, language and document requirements for Montenegrin universities explained for Bangladeshi applicants."
  },
  {
    "href": "/study/montenegro/student-visa-requirements-bangladesh",
    "title": "Montenegro Student Visa Requirements for Bangladesh",
    "description": "Documents and steps for a Montenegrin long-stay D visa from Bangladesh, including admission letter, funds, insurance and residence permit."
  },
  {
    "href": "/study/montenegro/student-visa-processing-time-and-cost",
    "title": "Montenegro Student Visa Processing Time and Cost",
    "description": "Typical processing time and the main fees Bangladeshi students should budget for in a Montenegro visa and permit application."
  },
  {
    "href": "/study/montenegro/study-in-montenegro-from-bangladesh",
    "title": "Study in Montenegro from Bangladesh",
    "description": "A practical roadmap for studying in Montenegro from Bangladesh: choosing a programme, costs, the D visa, residence permit steps and timelines."
  }
];
const FAQS = [
  {
    "q": "When should I start applying?",
    "a": "Prepare documents 6 to 8 months before October and apply as soon as the university opens enrolment."
  },
  {
    "q": "Which intake has the most seats?",
    "a": "October is the main intake."
  },
  {
    "q": "Can I start mid-year?",
    "a": "Rarely. Confirm directly with the university."
  },
  {
    "q": "Do postgraduate programmes have fewer intakes?",
    "a": "Often yes. Many master's programmes start once a year."
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
          "name": "Montenegro",
          "item": "https://eammu.com/study/montenegro"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Intake Dates",
          "item": "https://eammu.com/study/montenegro/montenegro-intake-dates"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Montenegro Intake Dates 2026–2027 for Bangladeshi Students",
      "description": "Montenegro intake dates for 2026 and 2027 explained for Bangladeshi students: October main intake, application windows and visa timelines. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/montenegro/montenegro-intake-dates",
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
            "text": "Prepare documents 6 to 8 months before October and apply as soon as the university opens enrolment."
          }
        },
        {
          "@type": "Question",
          "name": "Which intake has the most seats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October is the main intake."
          }
        },
        {
          "@type": "Question",
          "name": "Can I start mid-year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rarely. Confirm directly with the university."
          }
        },
        {
          "@type": "Question",
          "name": "Do postgraduate programmes have fewer intakes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often yes. Many master's programmes start once a year."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Montenegro 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Montenegro Intake Dates 2026–2027 for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Montenegro has one main intake, and visa and permit steps need time before it.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Montenegro guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Montenegro guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Main intake and application windows</h2>
<p className="mt-4 leading-7 text-slate-700">The academic year in Montenegro runs from about October to June, and most international applications are made in the months before. Universities publish enrolment calls with first, second and sometimes third enrolment periods; for example, one private university published a first enrolment period for 2026/27 undergraduate admission. Confirm each university&apos;s dates. Read the <Link href="/study/montenegro/admission-requirements-in-montenegro-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements for Bangladeshi students</Link> first.</p>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Stage</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical timing</th><th scope="col" className="px-3 py-2 text-left font-bold">What you do</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Applications</td><td className="px-3 py-2 align-top">Roughly spring – September</td><td className="px-3 py-2 align-top">Apply and receive an admission letter</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">D visa</td><td className="px-3 py-2 align-top">Summer</td><td className="px-3 py-2 align-top">Apply for the visa; see <Link href="/study/montenegro/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the visa guide</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Arrival and permit</td><td className="px-3 py-2 align-top">September – October</td><td className="px-3 py-2 align-top">Arrive, enrol and apply for the residence permit; see <Link href="/study/montenegro/temporary-residence-permit-and-arrival-guide-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the permit guide</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Start of year</td><td className="px-3 py-2 align-top">October</td><td className="px-3 py-2 align-top">Classes begin</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Exact dates differ per university and year. For applicants now, the next main intake is October 2027, so use the coming months to prepare.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Working backwards from your intake</h2>
<p className="mt-4 leading-7 text-slate-700">Begin with documents and funds, then allow time for the offer, the D visa and travel. Delays in legalisation and translation are common; <Link href="/study/montenegro/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa processing time and cost</Link> explains typical timing.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Which route should you choose?</h2>
<p className="mt-4 leading-7 text-slate-700">October is the standard start, including for the preparatory courses in <Link href="/study/montenegro/montenegrin-language-and-english-taught-programs-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Montenegrin language guide</Link>; see <Link href="/study/montenegro/hospitality-tourism-and-business-degrees-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">hospitality and business programmes</Link> for English-taught options.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Missed the window?</h2>
<p className="mt-4 leading-7 text-slate-700">The next intake is about a year away for most programmes. Use the time to improve language skills, review &#123;&#123;no-ielts|IELTS alternatives&#125;&#125; and plan your &#123;&#123;from-bd|move from Bangladesh&#125;&#125;.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Montenegro Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Montenegro</h2>
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
