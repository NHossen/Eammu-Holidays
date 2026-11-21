import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/russia/cse-and-it-courses-in-russia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Engineering and IT Courses in Russia 2026 | Eammu Holidays",
  "description": "Engineering and IT courses in Russia for Bangladeshi students in 2026: popular degrees, fees in RUB and BDT, entry rules and the language of teaching.",
  "alternates": {
    "canonical": "https://eammu.com/study/russia/cse-and-it-courses-in-russia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Engineering and IT Courses in Russia 2026 | Eammu Holidays",
    "description": "Engineering and IT courses in Russia for Bangladeshi students in 2026: popular degrees, fees in RUB and BDT, entry rules and the language of teaching.",
    "url": "https://eammu.com/study/russia/cse-and-it-courses-in-russia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Engineering and IT Courses in Russia 2026 | Eammu Holidays",
    "description": "Engineering and IT courses in Russia for Bangladeshi students in 2026: popular degrees, fees in RUB and BDT, entry rules and the language of teaching."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Russia", "href": "/study/russia"}, {"name": "Engineering & IT Courses", "href": "/study/russia/cse-and-it-courses-in-russia"}];
const NAV = [
  {
    "label": "Russia Hub",
    "pages": [
      {
        "href": "/study/russia",
        "label": "Study in Russia Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/russia/safety-and-scam-warning-for-students-in-russia",
        "label": "Safety & Scam Warning"
      },
      {
        "href": "/study/russia/study-in-russia-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/russia/study-in-russia-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/russia/tuition-fees-in-russia-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/russia/cost-of-living-in-russia-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/russia/cheapest-universities-in-russia",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/russia/top-universities-in-russia",
        "label": "Top Universities"
      },
      {
        "href": "/study/russia/scholarships-in-russia-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/russia/admission-requirements-in-russia-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/russia/study-gap-accepted-universities-in-russia",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/russia/study-in-russia-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/russia/study-in-russia-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/russia/russia-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/russia/mbbs-in-russia-for-bangladeshi-students",
        "label": "MBBS in Russia"
      },
      {
        "href": "/study/russia/medical-degree-recognition-and-bmdc-guide-russia",
        "label": "Degree Recognition & BMDC"
      },
      {
        "href": "/study/russia/russian-language-preparatory-year-guide",
        "label": "Russian Language Year"
      },
      {
        "href": "/study/russia/cse-and-it-courses-in-russia",
        "label": "Engineering & IT Courses"
      },
      {
        "href": "/study/russia/student-accommodation-in-russia",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, Invitation & Work Rules",
    "pages": [
      {
        "href": "/study/russia/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/russia/invitation-letter-and-visa-process-guide-russia",
        "label": "Invitation Letter & Visa"
      },
      {
        "href": "/study/russia/bank-solvency-requirements-for-russia-student-visa",
        "label": "Bank Solvency & Payments"
      },
      {
        "href": "/study/russia/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/russia/part-time-job-and-post-study-work-rules-in-russia",
        "label": "Work Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/russia/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/russia/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/russia/top-universities-in-russia",
    "title": "Top Universities in Russia",
    "description": "Overview of well-known Russian universities and medical universities and how to choose among them."
  },
  {
    "href": "/study/russia/study-in-russia-after-diploma",
    "title": "Study in Russia After Diploma",
    "description": "Degree entry and recognition options for Bangladeshi polytechnic and diploma holders in Russia."
  },
  {
    "href": "/study/russia/tuition-fees-in-russia-for-bangladeshi-students",
    "title": "Tuition Fees in Russia for Bangladeshi Students",
    "description": "Realistic tuition ranges in RUB and BDT for the language year, bachelor’s, medicine and master’s programmes in Russia."
  },
  {
    "href": "/study/russia/russian-language-preparatory-year-guide",
    "title": "Russian Language Preparatory Year Guide",
    "description": "How the Russian language preparatory year works, what it costs and whether you need it as a Bangladeshi student."
  }
];
const FAQS = [
  {
    "q": "Is Russia good for engineering?",
    "a": "It has strong technical traditions, but many programmes are in Russian and sanctions affect international links."
  },
  {
    "q": "Is maths required?",
    "a": "Yes, strong mathematics and physics are expected for engineering and IT."
  },
  {
    "q": "Are there English-taught engineering programmes?",
    "a": "Some, mostly at leading universities and at graduate level. Check each programme."
  },
  {
    "q": "Are internships common?",
    "a": "Some degrees include practice placements. Ask the university for details."
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
          "name": "Russia",
          "item": "https://eammu.com/study/russia"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Engineering & IT Courses",
          "item": "https://eammu.com/study/russia/cse-and-it-courses-in-russia"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Engineering and IT Courses in Russia for Bangladeshi Students (2026)",
      "description": "Engineering and IT courses in Russia for Bangladeshi students in 2026: popular degrees, fees in RUB and BDT, entry rules and the language of teaching.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/russia/cse-and-it-courses-in-russia",
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
          "name": "Is Russia good for engineering?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It has strong technical traditions, but many programmes are in Russian and sanctions affect international links."
          }
        },
        {
          "@type": "Question",
          "name": "Is maths required?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, strong mathematics and physics are expected for engineering and IT."
          }
        },
        {
          "@type": "Question",
          "name": "Are there English-taught engineering programmes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some, mostly at leading universities and at graduate level. Check each programme."
          }
        },
        {
          "@type": "Question",
          "name": "Are internships common?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some degrees include practice placements. Ask the university for details."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Russia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Engineering and IT Courses in Russia for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Russia has strong technical universities, but many programmes are in Russian and payment and safety issues apply.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Russia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Russia guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Popular technical courses</h2>
<p className="mt-4 leading-7 text-slate-700">Russian universities are known for mathematics, physics, engineering, computer science, nuclear and aerospace fields. Look at well-known institutions in <Link href="/study/russia/top-universities-in-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Russia</Link>. Many degrees are taught in Russian, so plan a language year; see <Link href="/study/russia/russian-language-preparatory-year-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Russian language preparatory year guide</Link>. Diploma holders may seek recognition; see <Link href="/study/russia/study-in-russia-after-diploma" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Russia after diploma</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">Bangladeshi students are often attracted by nuclear and energy training connected to the Rooppur project, so ask universities about specific programmes and funding under <Link href="/study/russia/scholarships-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Russia</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Entry requirements and fees</h2>
<p className="mt-4 leading-7 text-slate-700">A bachelor&apos;s in engineering or IT usually requires HSC with strong mathematics and physics; see the <Link href="/study/russia/admission-requirements-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link>. Many technical universities publish fees between about RUB 250,000 and 700,000 per year. See <Link href="/study/russia/tuition-fees-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Russia for Bangladeshi students</Link>.</p>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Route</th><th scope="col" className="px-3 py-2 text-left font-bold">Tuition (RUB / year)</th><th scope="col" className="px-3 py-2 text-left font-bold">Approx. BDT</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">State technical university, self-funded</td><td className="px-3 py-2 align-top">RUB 250,000 – 500,000</td><td className="px-3 py-2 align-top">Tk 3.9 – 7.8 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Leading capital-city university</td><td className="px-3 py-2 align-top">RUB 500,000 – 700,000</td><td className="px-3 py-2 align-top">Tk 7.8 – 10.9 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Government quota place</td><td className="px-3 py-2 align-top">Tuition covered</td><td className="px-3 py-2 align-top">Living costs apply</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 USD = about Tk 122 and 1 RUB = about Tk 1.55 and are indicative estimates for 2026–2027 based on published university fee schedules. Fees, visa rules and exchange rates change, and sanctions affect payments, so always confirm with the university, the Russian authorities or an Eammu Holidays counselor before paying.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Industry and internships</h2>
<p className="mt-4 leading-7 text-slate-700">Russia&apos;s technology sector and research institutes are strong in specific areas. Under sanctions, many Western companies have left, and international job prospects are limited. Check carefully how the degree will be used; see <Link href="/study/russia/medical-degree-recognition-and-bmdc-guide-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the recognition guide</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Career outlook</h2>
<p className="mt-4 leading-7 text-slate-700">Staying to work in Russia after graduation is not straightforward, and work offers can be risky. Read <Link href="/study/russia/part-time-job-and-post-study-work-rules-in-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">part-time job and post-study work rules in Russia</Link> and <Link href="/study/russia/safety-and-scam-warning-for-students-in-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the safety and scam warning guide</Link> before you plan any career in Russia.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Russia Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Russia</h2>
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
