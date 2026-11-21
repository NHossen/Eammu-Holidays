import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/lithuania/trp-application-process-migris-and-vfs-guide';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Lithuania TRP Application Process 2026 | Eammu Holidays",
  "description": "Lithuania TRP application process for Bangladeshi students in 2026: MIGRIS application, visa centre, state fee, interview and decision stages. Eammu.",
  "alternates": {
    "canonical": "https://eammu.com/study/lithuania/trp-application-process-migris-and-vfs-guide"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Lithuania TRP Application Process 2026 | Eammu Holidays",
    "description": "Lithuania TRP application process for Bangladeshi students in 2026: MIGRIS application, visa centre, state fee, interview and decision stages. Eammu.",
    "url": "https://eammu.com/study/lithuania/trp-application-process-migris-and-vfs-guide",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Lithuania TRP Application Process 2026 | Eammu Holidays",
    "description": "Lithuania TRP application process for Bangladeshi students in 2026: MIGRIS application, visa centre, state fee, interview and decision stages. Eammu."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Lithuania", "href": "/study/lithuania"}, {"name": "TRP Application Process", "href": "/study/lithuania/trp-application-process-migris-and-vfs-guide"}];
const NAV = [
  {
    "label": "Lithuania Hub",
    "pages": [
      {
        "href": "/study/lithuania",
        "label": "Study in Lithuania Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/lithuania/study-in-lithuania-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/lithuania/study-in-lithuania-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/lithuania/tuition-fees-in-lithuania-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/lithuania/cost-of-living-in-lithuania-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/lithuania/cheapest-universities-in-lithuania",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/lithuania/top-universities-in-lithuania",
        "label": "Top Universities"
      },
      {
        "href": "/study/lithuania/public-vs-private-universities-in-lithuania",
        "label": "Public vs Private"
      },
      {
        "href": "/study/lithuania/scholarships-in-lithuania-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/lithuania/admission-requirements-in-lithuania-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/lithuania/study-gap-accepted-universities-in-lithuania",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/lithuania/study-in-lithuania-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/lithuania/study-in-lithuania-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/lithuania/lithuania-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/lithuania/mbbs-and-medicine-in-lithuania-for-bangladeshi-students",
        "label": "MBBS & Medicine"
      },
      {
        "href": "/study/lithuania/degree-recognition-and-accreditation-in-lithuania",
        "label": "Degree Recognition"
      },
      {
        "href": "/study/lithuania/cse-and-it-courses-in-lithuania",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/lithuania/business-and-management-degrees-in-lithuania",
        "label": "Business & Management"
      },
      {
        "href": "/study/lithuania/student-accommodation-in-lithuania",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, Permit & Work Rules",
    "pages": [
      {
        "href": "/study/lithuania/student-visa-requirements-bangladesh",
        "label": "Residence Permit Requirements"
      },
      {
        "href": "/study/lithuania/trp-application-process-migris-and-vfs-guide",
        "label": "TRP Application Process"
      },
      {
        "href": "/study/lithuania/bank-solvency-requirements-for-lithuania-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/lithuania/student-visa-processing-time-and-cost",
        "label": "Permit Time & Cost"
      },
      {
        "href": "/study/lithuania/part-time-job-and-post-study-work-rules-in-lithuania",
        "label": "Work Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/lithuania/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/lithuania/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/lithuania/student-visa-requirements-bangladesh",
    "title": "Lithuania Temporary Residence Permit Requirements for Bangladesh",
    "description": "Documents and eligibility for a Lithuanian study residence permit from Bangladesh, including admission, funds, insurance and interview."
  },
  {
    "href": "/study/lithuania/student-visa-processing-time-and-cost",
    "title": "Lithuania Study Permit Processing Time and Cost",
    "description": "Typical processing time and the main fees Bangladeshi students should budget for in a Lithuanian permit application."
  },
  {
    "href": "/study/lithuania/bank-solvency-requirements-for-lithuania-student-visa",
    "title": "Proof of Funds Requirements for a Lithuania Study Permit",
    "description": "How much money proof Bangladeshi students must show for a Lithuanian study permit and how to present bank statements."
  },
  {
    "href": "/study/lithuania/lithuania-intake-dates",
    "title": "Lithuania Intake Dates",
    "description": "Main intakes in Lithuania and the best time for Bangladeshi students to start applications and the permit process."
  }
];
const FAQS = [
  {
    "q": "How long does the permit take?",
    "a": "It varies. Allow several weeks to two months, plus time for tuition payment and documents."
  },
  {
    "q": "Where do I submit documents?",
    "a": "At a visa application centre serving Bangladesh after booking via MIGRIS. Confirm the current centre."
  },
  {
    "q": "Do I need an interview?",
    "a": "Some applicants do. Prepare to explain your study plan."
  },
  {
    "q": "Can I appeal a refusal?",
    "a": "Yes, within the time stated in the decision. Seek advice before appealing."
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
          "name": "Lithuania",
          "item": "https://eammu.com/study/lithuania"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "TRP Application Process",
          "item": "https://eammu.com/study/lithuania/trp-application-process-migris-and-vfs-guide"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "TRP Application Process Guide for Bangladeshi Students in Lithuania",
      "description": "Lithuania TRP application process for Bangladeshi students in 2026: MIGRIS application, visa centre, state fee, interview and decision stages. Eammu.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/lithuania/trp-application-process-migris-and-vfs-guide",
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
          "name": "How long does the permit take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It varies. Allow several weeks to two months, plus time for tuition payment and documents."
          }
        },
        {
          "@type": "Question",
          "name": "Where do I submit documents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At a visa application centre serving Bangladesh after booking via MIGRIS. Confirm the current centre."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an interview?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some applicants do. Prepare to explain your study plan."
          }
        },
        {
          "@type": "Question",
          "name": "Can I appeal a refusal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, within the time stated in the decision. Seek advice before appealing."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Lithuania 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">TRP Application Process Guide for Bangladeshi Students in Lithuania</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">From MIGRIS account to permit decision, here is the process step by step.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Lithuania guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Lithuania guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">The application steps</h2>
<p className="mt-4 leading-7 text-slate-700">After admission and tuition payment, you register on MIGRIS, the online system of the Migration Department, complete the application and book an appointment at the visa application centre to submit documents and biometrics. Before this stage, prepare your admission papers and <Link href="/study/lithuania/bank-solvency-requirements-for-lithuania-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link>. Overall requirements are in <Link href="/study/lithuania/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">temporary residence permit requirements for Bangladesh</Link>.</p>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Stage</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical meaning</th><th scope="col" className="px-3 py-2 text-left font-bold">What you do</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">1. Admission and contract</td><td className="px-3 py-2 align-top">University issues an offer and you sign the study contract</td><td className="px-3 py-2 align-top">Pay tuition through official channels</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">2. MIGRIS application</td><td className="px-3 py-2 align-top">You complete the online form and upload documents</td><td className="px-3 py-2 align-top">Upload clear, consistent documents</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">3. Visa centre appointment</td><td className="px-3 py-2 align-top">You submit documents, biometrics and pay the state fee</td><td className="px-3 py-2 align-top">Book promptly; confirm the centre serving Bangladesh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">4. Interview</td><td className="px-3 py-2 align-top">Remote interview with the Migration Department where required</td><td className="px-3 py-2 align-top">Prepare to explain your study plan</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">5. Decision</td><td className="px-3 py-2 align-top">Permit granted or refused</td><td className="px-3 py-2 align-top">Read the decision and plan next steps</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">6. Arrival</td><td className="px-3 py-2 align-top">You collect your permit card and register</td><td className="px-3 py-2 align-top">Keep your documents ready</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Stages, timing and fees differ by period. Confirm details on the Migration Department website and with your university.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Fees and timing</h2>
<p className="mt-4 leading-7 text-slate-700">The state fee for a study permit has been reported at around EUR 80 to 120, plus the visa-centre service fee, and processing typically takes several weeks to a couple of months. Apply early for your <Link href="/study/lithuania/lithuania-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake</Link>, and see <Link href="/study/lithuania/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">permit processing time and cost</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Common mistakes</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Funds that are not clearly sourced or are only recently deposited.</li><li>A generic study plan that does not explain why this programme and why Lithuania.</li><li>Missing or inconsistent documents.</li><li>Relying on an agent&apos;s promise instead of understanding your own file.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">If you are refused</h2>
<p className="mt-4 leading-7 text-slate-700">A refusal letter lists the reasons. You can appeal in the time stated, or reapply with a stronger file. Do not pay anyone for a guaranteed reversal. Eammu Holidays can review your file at <Link href="/study/lithuania/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">our Dhaka counseling desk</Link>.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Lithuania Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Lithuania</h2>
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
