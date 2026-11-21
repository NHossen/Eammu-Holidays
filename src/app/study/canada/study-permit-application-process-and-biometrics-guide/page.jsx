import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/canada/study-permit-application-process-and-biometrics-guide';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Canada Study Permit Process Guide 2026 | Eammu Holidays",
  "description": "Canada study permit application process for Bangladeshi students in 2026: online application, fees, biometrics in Dhaka, medical exam and decision stages.",
  "alternates": {
    "canonical": "https://eammu.com/study/canada/study-permit-application-process-and-biometrics-guide"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Canada Study Permit Process Guide 2026 | Eammu Holidays",
    "description": "Canada study permit application process for Bangladeshi students in 2026: online application, fees, biometrics in Dhaka, medical exam and decision stages.",
    "url": "https://eammu.com/study/canada/study-permit-application-process-and-biometrics-guide",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Canada Study Permit Process Guide 2026 | Eammu Holidays",
    "description": "Canada study permit application process for Bangladeshi students in 2026: online application, fees, biometrics in Dhaka, medical exam and decision stages."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Canada", "href": "/study/canada"}, {"name": "Application Process", "href": "/study/canada/study-permit-application-process-and-biometrics-guide"}];
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
    "href": "/study/canada/student-visa-requirements-bangladesh",
    "title": "Canada Study Permit Requirements for Bangladesh",
    "description": "Documents and eligibility for a Canadian study permit from Bangladesh, including letter of acceptance, PAL, funds and study plan."
  },
  {
    "href": "/study/canada/student-visa-processing-time-and-cost",
    "title": "Canada Study Permit Processing Time and Cost",
    "description": "Typical processing time and the main fees Bangladeshi students should budget for in a Canada study permit application."
  },
  {
    "href": "/study/canada/bank-solvency-requirements-for-canada-student-visa",
    "title": "Proof of Funds Requirements for a Canada Study Permit",
    "description": "How much money proof Bangladeshi students must show for a Canada study permit and how to present bank statements."
  },
  {
    "href": "/study/canada/provincial-attestation-letter-pal-guide-for-canada",
    "title": "Provincial Attestation Letter (PAL) Guide for Canada",
    "description": "What a PAL or TAL is, who needs one in 2026, how institutions request it and how the cap affects Bangladeshi applicants."
  }
];
const FAQS = [
  {
    "q": "How long does a study permit take?",
    "a": "It varies. Bangladeshi applicants often report roughly 8 to 16 weeks, plus PAL time."
  },
  {
    "q": "Where do I give biometrics?",
    "a": "Reported at the VFS Global visa application centre in Dhaka. Check IRCC for the current location and instructions."
  },
  {
    "q": "Do I need a medical exam?",
    "a": "Sometimes, depending on your programme and country. IRCC tells you in your instructions."
  },
  {
    "q": "Can I reapply after a refusal?",
    "a": "Yes, but address the reasons first. Repeating the same file seldom works."
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
          "name": "Application Process",
          "item": "https://eammu.com/study/canada/study-permit-application-process-and-biometrics-guide"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study Permit Application Process and Biometrics Guide for Bangladeshi Students in Canada",
      "description": "Canada study permit application process for Bangladeshi students in 2026: online application, fees, biometrics in Dhaka, medical exam and decision stages.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/canada/study-permit-application-process-and-biometrics-guide",
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
          "name": "How long does a study permit take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It varies. Bangladeshi applicants often report roughly 8 to 16 weeks, plus PAL time."
          }
        },
        {
          "@type": "Question",
          "name": "Where do I give biometrics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reported at the VFS Global visa application centre in Dhaka. Check IRCC for the current location and instructions."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a medical exam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sometimes, depending on your programme and country. IRCC tells you in your instructions."
          }
        },
        {
          "@type": "Question",
          "name": "Can I reapply after a refusal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but address the reasons first. Repeating the same file seldom works."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study Permit Application Process and Biometrics Guide for Bangladeshi Students in Canada</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">From the IRCC account to biometrics at the visa application centre, here is the process step by step.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">The application steps</h2>
<p className="mt-4 leading-7 text-slate-700">You apply online through your IRCC secure account, answering a questionnaire that generates a checklist, uploading documents and paying the fees. Before this stage, prepare your admission documents, PAL and <Link href="/study/canada/bank-solvency-requirements-for-canada-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link>. Overall requirements are in <Link href="/study/canada/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study permit requirements for Bangladesh</Link>.</p>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Stage</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical meaning</th><th scope="col" className="px-3 py-2 text-left font-bold">What you do</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">1. Admission</td><td className="px-3 py-2 align-top">Institution issues a letter of acceptance</td><td className="px-3 py-2 align-top">Pay the required deposit through official channels</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">2. PAL / TAL</td><td className="px-3 py-2 align-top">Province confirms your cap space</td><td className="px-3 py-2 align-top">Institution requests it; see <Link href="/study/canada/provincial-attestation-letter-pal-guide-for-canada" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the PAL guide</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">3. Online application</td><td className="px-3 py-2 align-top">You submit documents and fees</td><td className="px-3 py-2 align-top">Upload clear, consistent documents</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">4. Biometrics</td><td className="px-3 py-2 align-top">Fingerprints and photo at the visa application centre</td><td className="px-3 py-2 align-top">Book promptly; reported VFS Global centre in Dhaka</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">5. Medical exam</td><td className="px-3 py-2 align-top">Where required, with an approved panel physician</td><td className="px-3 py-2 align-top">Follow IRCC instructions</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">6. Decision</td><td className="px-3 py-2 align-top">Approval or refusal</td><td className="px-3 py-2 align-top">Read the letter and plan next steps</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Stages, timing and centres can change. Confirm details on the official IRCC website.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Fees and timing</h2>
<p className="mt-4 leading-7 text-slate-700">The study permit fee is CAD 150 and biometrics are CAD 85, with other costs for medical exams, translations and courier. Processing times for Bangladeshi applicants are often reported at roughly 8 to 16 weeks and vary by season, plus PAL time. Apply early for your <Link href="/study/canada/canada-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake</Link>, and see <Link href="/study/canada/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study permit processing time and cost</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Common mistakes</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Funds that are not clearly sourced or are only recently deposited.</li><li>A generic statement of purpose that does not explain why this programme and why Canada.</li><li>Missing or inconsistent documents.</li><li>Relying on an agent&apos;s promise instead of understanding your own file.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">If you are refused</h2>
<p className="mt-4 leading-7 text-slate-700">A refusal letter lists the reasons. You can reapply with a stronger application, request officer&apos;s notes, or seek legal advice about a judicial review in suitable cases. Do not pay anyone for a guaranteed reversal. Eammu Holidays can review your file at <Link href="/study/canada/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">our Dhaka counseling desk</Link>.</p>
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
