import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/malaysia/emgs-visa-process-and-tracking-guide';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "EMGS Visa Process and Tracking Guide 2026 | Eammu Holidays",
  "description": "Understand the EMGS visa process in 2026: application stages, percentage tracking from 5% to 70%, eVAL issue and what to do at each step for Bangladesh.",
  "alternates": {
    "canonical": "https://eammu.com/study/malaysia/emgs-visa-process-and-tracking-guide"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "EMGS Visa Process and Tracking Guide 2026 | Eammu Holidays",
    "description": "Understand the EMGS visa process in 2026: application stages, percentage tracking from 5% to 70%, eVAL issue and what to do at each step for Bangladesh.",
    "url": "https://eammu.com/study/malaysia/emgs-visa-process-and-tracking-guide",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "EMGS Visa Process and Tracking Guide 2026 | Eammu Holidays",
    "description": "Understand the EMGS visa process in 2026: application stages, percentage tracking from 5% to 70%, eVAL issue and what to do at each step for Bangladesh."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Malaysia", "href": "/study/malaysia"}, {"name": "EMGS Process & Tracking", "href": "/study/malaysia/emgs-visa-process-and-tracking-guide"}];
const NAV = [
  {
    "label": "Malaysia Hub",
    "pages": [
      {
        "href": "/study/malaysia",
        "label": "Study in Malaysia Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/malaysia/study-in-malaysia-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/malaysia/study-in-malaysia-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/malaysia/tuition-fees-in-malaysia-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/malaysia/cost-of-living-in-malaysia-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/malaysia/cheapest-universities-in-malaysia",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/malaysia/top-universities-in-malaysia",
        "label": "Top Universities"
      },
      {
        "href": "/study/malaysia/public-vs-private-universities-in-malaysia",
        "label": "Public vs Private"
      },
      {
        "href": "/study/malaysia/scholarships-in-malaysia-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/malaysia/study-gap-accepted-universities-in-malaysia",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/malaysia/study-in-malaysia-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/malaysia/study-in-malaysia-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/malaysia/malaysia-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/malaysia/mbbs-in-malaysia-for-bangladeshi-students",
        "label": "MBBS in Malaysia"
      },
      {
        "href": "/study/malaysia/mba-in-malaysia-for-bangladeshi-students",
        "label": "MBA in Malaysia"
      },
      {
        "href": "/study/malaysia/cse-and-it-courses-in-malaysia",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/malaysia/credit-transfer-from-malaysia-to-uk-australia",
        "label": "Credit Transfer to UK/Australia"
      },
      {
        "href": "/study/malaysia/student-accommodation-in-malaysia",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, EMGS & Work Rules",
    "pages": [
      {
        "href": "/study/malaysia/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/malaysia/emgs-visa-process-and-tracking-guide",
        "label": "EMGS Process & Tracking"
      },
      {
        "href": "/study/malaysia/bank-solvency-requirements-for-malaysia-student-visa",
        "label": "Bank Solvency"
      },
      {
        "href": "/study/malaysia/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/malaysia/part-time-job-and-post-study-work-rules-in-malaysia",
        "label": "Work Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/malaysia/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/malaysia/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/malaysia/student-visa-requirements-bangladesh",
    "title": "Malaysia Student Visa Requirements for Bangladesh",
    "description": "Documents and steps needed for a Malaysian student visa from Bangladesh, including eVAL and student pass."
  },
  {
    "href": "/study/malaysia/student-visa-processing-time-and-cost",
    "title": "Malaysia Student Visa Processing Time and Cost",
    "description": "Typical EMGS and visa processing time plus the main fees Bangladeshi students should budget for."
  },
  {
    "href": "/study/malaysia/bank-solvency-requirements-for-malaysia-student-visa",
    "title": "Bank Solvency Requirements for Malaysia Student Visa",
    "description": "How much money proof Bangladeshi students should prepare and how to present bank statements for a Malaysia visa."
  },
  {
    "href": "/study/malaysia/malaysia-intake-dates",
    "title": "Malaysia Intake Dates",
    "description": "Main intake months in Malaysia and the best time for Bangladeshi students to start applications."
  }
];
const FAQS = [
  {
    "q": "How long does EMGS take?",
    "a": "It commonly takes several weeks, but it can vary by season and by how complete the application is."
  },
  {
    "q": "What does 70% mean on EMGS?",
    "a": "It generally indicates the application has progressed to approval or eVAL stage, but check the portal’s exact status."
  },
  {
    "q": "Can I track my EMGS status myself?",
    "a": "Yes. Your institution or EMGS provides an application number to track progress online."
  },
  {
    "q": "What if my application is rejected?",
    "a": "Ask for the reason, correct the issue and discuss reapplication or another institution with your counselor."
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
          "name": "Malaysia",
          "item": "https://eammu.com/study/malaysia"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "EMGS Process & Tracking",
          "item": "https://eammu.com/study/malaysia/emgs-visa-process-and-tracking-guide"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "EMGS Visa Process and Tracking Guide for Bangladeshi Students",
      "description": "Understand the EMGS visa process in 2026: application stages, percentage tracking from 5% to 70%, eVAL issue and what to do at each step for Bangladesh.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/malaysia/emgs-visa-process-and-tracking-guide",
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
          "name": "How long does EMGS take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It commonly takes several weeks, but it can vary by season and by how complete the application is."
          }
        },
        {
          "@type": "Question",
          "name": "What does 70% mean on EMGS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It generally indicates the application has progressed to approval or eVAL stage, but check the portal’s exact status."
          }
        },
        {
          "@type": "Question",
          "name": "Can I track my EMGS status myself?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Your institution or EMGS provides an application number to track progress online."
          }
        },
        {
          "@type": "Question",
          "name": "What if my application is rejected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ask for the reason, correct the issue and discuss reapplication or another institution with your counselor."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Malaysia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">EMGS Visa Process and Tracking Guide for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">EMGS handles student visa applications for private institutions in Malaysia. Here is how the tracking stages are commonly understood.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Malaysia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Malaysia guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">What is EMGS?</h2>
<p className="mt-4 leading-7 text-slate-700">Education Malaysia Global Services (EMGS) is the agency that processes international student visa applications for many Malaysian institutions. Your university submits the application after your offer; you then follow progress on the EMGS portal. Before that stage, review the <Link href="/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements for Bangladeshi students</Link> and prepare funds per <Link href="/study/malaysia/bank-solvency-requirements-for-malaysia-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bank solvency requirements</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">General background on documents is in the <Link href="/study/malaysia/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa requirements for Bangladesh</Link> guide.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Understanding the tracking percentage</h2>
<p className="mt-4 leading-7 text-slate-700">EMGS shows a percentage that represents progress, commonly seen in stages from about 5% to 70%. Exact wording and numbers can change, so treat this as a guide and check the portal text.</p>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Progress (approx.)</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical meaning</th><th scope="col" className="px-3 py-2 text-left font-bold">What you do</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">5%</td><td className="px-3 py-2 align-top">Application submitted by the institution</td><td className="px-3 py-2 align-top">Keep documents ready, avoid changes</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">20% – 40%</td><td className="px-3 py-2 align-top">Document check and review</td><td className="px-3 py-2 align-top">Respond quickly to queries</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">50% – 60%</td><td className="px-3 py-2 align-top">Pending approval / immigration review</td><td className="px-3 py-2 align-top">Wait; do not book non-refundable travel yet</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">70%</td><td className="px-3 py-2 align-top">Approved; eVAL ready or issued</td><td className="px-3 py-2 align-top">Plan medical, visa endorsement and flight</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Stages and percentages are indicative and may differ across applications or periods. Confirm with your institution or EMGS.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">eVAL and what comes next</h2>
<p className="mt-4 leading-7 text-slate-700">After approval you receive the eVAL (electronic visa approval letter). Use it for visa endorsement and travel as instructed, and complete medical screening and student pass formalities as required. Timelines and fees are summarised in <Link href="/study/malaysia/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa processing time and cost</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Tips to avoid delays</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Submit clear, consistent and complete documents.</li><li>Apply early for your <Link href="/study/malaysia/malaysia-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake</Link>.</li><li>Do not buy tickets until the eVAL is issued unless refundable.</li><li>Keep copies and screenshots of tracking updates.</li></ul>
<p className="mt-4 leading-7 text-slate-700">If tracking stays stuck, contact your university’s international office, or reach Eammu Holidays through <Link href="/study/malaysia/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">our Dhaka counseling desk</Link>.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Malaysia Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Malaysia</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university shortlist, EMGS guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
