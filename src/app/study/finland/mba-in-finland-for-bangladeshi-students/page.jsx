import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/finland/mba-in-finland-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "MBA and Master's in Finland Guide 2026 | Eammu Holidays",
  "description": "MBA and master degrees in Finland for Bangladeshi students in 2026: entry rules, fees in EUR and BDT, work experience for UAS and funding. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/finland/mba-in-finland-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "MBA and Master's in Finland Guide 2026 | Eammu Holidays",
    "description": "MBA and master degrees in Finland for Bangladeshi students in 2026: entry rules, fees in EUR and BDT, work experience for UAS and funding. Eammu Holidays.",
    "url": "https://eammu.com/study/finland/mba-in-finland-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "MBA and Master's in Finland Guide 2026 | Eammu Holidays",
    "description": "MBA and master degrees in Finland for Bangladeshi students in 2026: entry rules, fees in EUR and BDT, work experience for UAS and funding. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Finland", "href": "/study/finland"}, {"name": "MBA & Master's", "href": "/study/finland/mba-in-finland-for-bangladeshi-students"}];
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
    "href": "/study/finland/tuition-fees-in-finland-for-bangladeshi-students",
    "title": "Tuition Fees in Finland for Bangladeshi Students",
    "description": "Realistic tuition ranges in EUR and BDT for universities and universities of applied sciences in Finland, plus extra costs."
  },
  {
    "href": "/study/finland/scholarships-in-finland-for-bangladeshi-students",
    "title": "Scholarships in Finland for Bangladeshi Students",
    "description": "Types of scholarships and tuition waivers available to Bangladeshi students in Finland and how to apply."
  },
  {
    "href": "/study/finland/studyinfo-joint-application-guide-for-finland",
    "title": "Studyinfo Joint Application Guide for Finland",
    "description": "How to apply to Finnish universities through Studyinfo.fi: joint application windows, the EUR 100 fee, entrance exams and results."
  },
  {
    "href": "/study/finland/part-time-job-and-post-study-work-rules-in-finland",
    "title": "Work and Post-Study Rules for International Students in Finland",
    "description": "What students may do regarding work, the two-year job-search permit and the tightened permanent residence rules in Finland."
  }
];
const FAQS = [
  {
    "q": "Do I need work experience for a master's in Finland?",
    "a": "University master's programmes often do not, but UAS master's programmes usually require about two years."
  },
  {
    "q": "How long is a master's in Finland?",
    "a": "Typically 1.5 to 2 years (90 to 120 ECTS)."
  },
  {
    "q": "Is GMAT required?",
    "a": "Some business programmes ask for GMAT or GRE. Check each programme."
  },
  {
    "q": "Can I get a tuition waiver for a master's?",
    "a": "Many programmes offer waivers to some applicants, but awards are limited."
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
          "name": "MBA & Master's",
          "item": "https://eammu.com/study/finland/mba-in-finland-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "MBA and Master's Programmes in Finland for Bangladeshi Students (2026)",
      "description": "MBA and master degrees in Finland for Bangladeshi students in 2026: entry rules, fees in EUR and BDT, work experience for UAS and funding. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/finland/mba-in-finland-for-bangladeshi-students",
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
          "name": "Do I need work experience for a master's in Finland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "University master's programmes often do not, but UAS master's programmes usually require about two years."
          }
        },
        {
          "@type": "Question",
          "name": "How long is a master's in Finland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically 1.5 to 2 years (90 to 120 ECTS)."
          }
        },
        {
          "@type": "Question",
          "name": "Is GMAT required?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some business programmes ask for GMAT or GRE. Check each programme."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a tuition waiver for a master's?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many programmes offer waivers to some applicants, but awards are limited."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">MBA and Master&apos;s Programmes in Finland for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Finland offers English-taught master&apos;s degrees at universities and UAS, with different entry rules and costs.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Master&apos;s and MBA options and entry rules</h2>
<p className="mt-4 leading-7 text-slate-700">University master&apos;s programmes usually require a relevant bachelor&apos;s degree with strong results, English proof and a motivation letter. Master&apos;s programmes at universities of applied sciences usually also require about two years of relevant work experience after the bachelor&apos;s degree, including many MBA-style programmes. Read the broader <Link href="/study/finland/admission-requirements-in-finland-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements for Bangladeshi students</Link> and see <Link href="/study/finland/studyinfo-joint-application-guide-for-finland" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Studyinfo guide</Link> for application windows, such as from 14 December 2026 for some programmes.</p>
<p className="mt-4 leading-7 text-slate-700">Compare the two routes in <Link href="/study/finland/universities-vs-universities-of-applied-sciences-in-finland" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">universities vs universities of applied sciences in Finland</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Cost in EUR and BDT</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Programme type</th><th scope="col" className="px-3 py-2 text-left font-bold">Tuition per year (EUR)</th><th scope="col" className="px-3 py-2 text-left font-bold">Approx. BDT</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">UAS master&apos;s</td><td className="px-3 py-2 align-top">EUR 6,000 – 12,000</td><td className="px-3 py-2 align-top">Tk 8.4 – 16.8 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">University master&apos;s</td><td className="px-3 py-2 align-top">EUR 8,000 – 18,000</td><td className="px-3 py-2 align-top">Tk 11.2 – 25.2 lakh</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 EUR = about Tk 140 and are indicative estimates for 2026–2027 based on published university fees and Migri rules. Fees, funds requirements and exchange rates change, so always confirm on Migri.fi, Studyinfo.fi, with the institution or with an Eammu Holidays counselor before paying.</p>
<p className="mt-4 leading-7 text-slate-700">General cost context is in <Link href="/study/finland/tuition-fees-in-finland-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Finland for Bangladeshi students</Link> and monthly living is in <Link href="/study/finland/cost-of-living-in-finland-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Finland</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Funding and work</h2>
<p className="mt-4 leading-7 text-slate-700">Many English-taught master&apos;s programmes offer tuition waivers to some applicants; see <Link href="/study/finland/scholarships-in-finland-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Finland</Link>. Student work is limited to an average of 30 hours per week, and full-time during thesis or practical training; read <Link href="/study/finland/part-time-job-and-post-study-work-rules-in-finland" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">work and post-study rules in Finland</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Application and permit</h2>
<p className="mt-4 leading-7 text-slate-700">Prepare <Link href="/study/finland/bank-solvency-requirements-for-finland-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link> early and follow <Link href="/study/finland/enter-finland-and-migri-application-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Migri application guide</Link> after admission. Check <Link href="/study/finland/finland-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake dates</Link> to plan.</p>
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
