import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/georgia/new-2026-rules-for-foreign-students-in-georgia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Georgia New 2026 Rules for Foreign Students | Eammu Holidays",
  "description": "Georgia's June 2026 law on foreign students explained: accreditation, language proof, NAEC exam, quotas, academic progress, 183-day absence rule and illegal work. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/georgia/new-2026-rules-for-foreign-students-in-georgia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Georgia New 2026 Rules for Foreign Students | Eammu Holidays",
    "description": "Georgia's June 2026 law on foreign students explained: accreditation, language proof, NAEC exam, quotas, academic progress, 183-day absence rule and illegal work. Eammu Holidays.",
    "url": "https://eammu.com/study/georgia/new-2026-rules-for-foreign-students-in-georgia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Georgia New 2026 Rules for Foreign Students | Eammu Holidays",
    "description": "Georgia's June 2026 law on foreign students explained: accreditation, language proof, NAEC exam, quotas, academic progress, 183-day absence rule and illegal work. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Georgia", "href": "/study/georgia"}, {"name": "New 2026 Rules", "href": "/study/georgia/new-2026-rules-for-foreign-students-in-georgia"}];
const NAV = [
  {
    "label": "Georgia Hub",
    "pages": [
      {
        "href": "/study/georgia",
        "label": "Study in Georgia Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/georgia/study-in-georgia-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/georgia/georgia-reality-check-eu-schengen-and-new-rules",
        "label": "Reality Check: EU, Schengen & Rules"
      },
      {
        "href": "/study/georgia/why-study-in-georgia-pros-and-cons",
        "label": "Pros & Cons"
      },
      {
        "href": "/study/georgia/study-in-georgia-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/georgia/english-and-georgian-language-requirements",
        "label": "Language Requirements"
      },
      {
        "href": "/study/georgia/tuition-fees-in-georgia-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/georgia/cost-of-living-in-georgia-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/georgia/cheapest-universities-in-georgia",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/georgia/top-universities-in-georgia",
        "label": "Top Universities"
      },
      {
        "href": "/study/georgia/public-vs-private-universities-in-georgia",
        "label": "Public vs Private"
      },
      {
        "href": "/study/georgia/scholarships-in-georgia-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/georgia/admission-requirements-in-georgia-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/georgia/study-gap-accepted-in-georgia",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/georgia/study-in-georgia-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/georgia/study-in-georgia-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/georgia/georgia-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Courses, Housing & Life",
    "pages": [
      {
        "href": "/study/georgia/application-guide-for-georgian-universities",
        "label": "Application Guide"
      },
      {
        "href": "/study/georgia/degree-recognition-and-eligibility-in-georgia",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/georgia/mbbs-and-md-in-georgia-for-bangladeshi-students",
        "label": "MBBS & MD in Georgia"
      },
      {
        "href": "/study/georgia/dentistry-and-pharmacy-in-georgia",
        "label": "Dentistry & Pharmacy"
      },
      {
        "href": "/study/georgia/nursing-and-public-health-in-georgia",
        "label": "Nursing & Public Health"
      },
      {
        "href": "/study/georgia/it-and-cse-courses-in-georgia",
        "label": "IT & CSE Courses"
      },
      {
        "href": "/study/georgia/business-and-mba-in-georgia",
        "label": "Business & MBA"
      },
      {
        "href": "/study/georgia/engineering-and-architecture-in-georgia",
        "label": "Engineering & Architecture"
      },
      {
        "href": "/study/georgia/tourism-and-hospitality-in-georgia",
        "label": "Tourism & Hospitality"
      },
      {
        "href": "/study/georgia/premed-foundation-and-language-courses-in-georgia",
        "label": "Pre-Med & Language Courses"
      },
      {
        "href": "/study/georgia/student-accommodation-in-georgia",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/georgia/health-insurance-for-students-in-georgia",
        "label": "Health Insurance"
      },
      {
        "href": "/study/georgia/student-life-halal-food-and-safety-in-georgia",
        "label": "Student Life, Halal & Safety"
      }
    ]
  },
  {
    "label": "Visa, Permit & Rules",
    "pages": [
      {
        "href": "/study/georgia/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/georgia/study-visa-application-step-by-step",
        "label": "Study Visa Step by Step"
      },
      {
        "href": "/study/georgia/study-residence-permit-guide-for-georgia",
        "label": "Study Residence Permit Guide"
      },
      {
        "href": "/study/georgia/new-2026-rules-for-foreign-students-in-georgia",
        "label": "New 2026 Rules Explained"
      },
      {
        "href": "/study/georgia/keep-your-study-permit-valid-in-georgia",
        "label": "Keep Your Permit Valid"
      },
      {
        "href": "/study/georgia/proof-of-funds-requirements-for-georgia-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/georgia/visa-processing-time-and-cost-georgia",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/georgia/visa-refusal-reasons-and-how-to-avoid-them",
        "label": "Visa Refusal Reasons"
      },
      {
        "href": "/study/georgia/part-time-job-and-work-rules-in-georgia",
        "label": "Work Rules"
      },
      {
        "href": "/study/georgia/after-graduation-stay-options-in-georgia",
        "label": "After Graduation"
      },
      {
        "href": "/study/georgia/scams-and-fake-offer-warning-georgia",
        "label": "Scams & Fake Offers"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/georgia/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/georgia/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/georgia/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/georgia/georgia-reality-check-eu-schengen-and-new-rules",
    "title": "Georgia Reality Check: What a Study Permit Does and Does Not Give You",
    "description": "Georgia is not in the EU or Schengen. Here is what that means for visas, jobs, recognition and your long-term plans."
  },
  {
    "href": "/study/georgia/keep-your-study-permit-valid-in-georgia",
    "title": "How to Keep Your Georgia Study Residence Permit Valid (2026 Checklist)",
    "description": "Credits, attendance, absence, suspension and work: the practical rules that protect your permit."
  },
  {
    "href": "/study/georgia/study-in-georgia-without-ielts",
    "title": "Study in Georgia Without IELTS: What Is Still Possible After the 2026 Rules",
    "description": "Alternatives to IELTS, and why language proof has become mandatory for foreign students."
  },
  {
    "href": "/study/georgia/public-vs-private-universities-in-georgia",
    "title": "Public vs Private Universities in Georgia: How to Choose",
    "description": "Fees, English availability, admission availability for foreigners, quality checks and recognition compared."
  }
];
const FAQS = [
  {
    "q": "Is the new law already in force?",
    "a": "It was adopted in June 2026. Check with the university and authorities how and from when each part applies to your intake."
  },
  {
    "q": "Does the quota affect me?",
    "a": "It can limit the number of places, so apply early and ask universities about their foreign student allocation."
  },
  {
    "q": "What counts as academic progress?",
    "a": "At least one-third of the prescribed credits each academic year, according to the amendments."
  },
  {
    "q": "Does the law ban foreign students from medicine?",
    "a": "No. It adds conditions, but medical programmes remain open to foreign students at accredited institutions."
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
          "name": "Georgia",
          "item": "https://eammu.com/study/georgia"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "New 2026 Rules",
          "item": "https://eammu.com/study/georgia/new-2026-rules-for-foreign-students-in-georgia"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Georgia's New 2026 Rules for Foreign Students Explained (Effective After June 2026)",
      "description": "Georgia's June 2026 law on foreign students explained: accreditation, language proof, NAEC exam, quotas, academic progress, 183-day absence rule and illegal work. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/georgia/new-2026-rules-for-foreign-students-in-georgia",
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
          "name": "Is the new law already in force?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It was adopted in June 2026. Check with the university and authorities how and from when each part applies to your intake."
          }
        },
        {
          "@type": "Question",
          "name": "Does the quota affect me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can limit the number of places, so apply early and ask universities about their foreign student allocation."
          }
        },
        {
          "@type": "Question",
          "name": "What counts as academic progress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At least one-third of the prescribed credits each academic year, according to the amendments."
          }
        },
        {
          "@type": "Question",
          "name": "Does the law ban foreign students from medicine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. It adds conditions, but medical programmes remain open to foreign students at accredited institutions."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Georgia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Georgia&apos;s New 2026 Rules for Foreign Students Explained (Effective After June 2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Accredited-only enrolment, language certificates or state exams, quotas, academic progress and permit revocation, in plain English.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-21">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Georgia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 55 Georgia guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">What happened</h2>
<p className="mt-4 leading-7 text-slate-700">Georgia&apos;s Ministry of Internal Affairs drafted a package of migration and residence-permit amendments in early June 2026. Parliament approved the package at first reading on 23 June 2026 and adopted it in third and final reading on 25 June 2026 by 81 votes. It covers foreign students, study residence permits, marriage-based permits and enforcement.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">The key student rules</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Rule</th><th scope="col" className="px-3 py-2 text-left font-bold">What it means for you</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Accredited institutions only</td><td className="px-3 py-2 align-top">Foreigners may enrol only at state-accredited universities and vocational schools; the study permit is for adults in such institutions</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Language proof</td><td className="px-3 py-2 align-top">You must show the language of instruction with an international certificate and/or by passing a foreign or state language exam run by the National Assessment and Examinations Center</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Government quota</td><td className="px-3 py-2 align-top">The government is to set a maximum number of foreign students that institutions can admit</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Central data system</td><td className="px-3 py-2 align-top">Universities must report enrolment, suspension, termination, mobility and completion data</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Penalties for institutions</td><td className="px-3 py-2 align-top">Fines, restrictions on admitting foreigners or loss of authorisation for non-compliance</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Academic progress</td><td className="px-3 py-2 align-top">Foreign students must earn at least one-third of the prescribed credits per year</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Permit revocation</td><td className="px-3 py-2 align-top">Grounds include failing studies, suspending status for more than 90 days, staying abroad more than 183 days without a valid reason, or illegal work</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Proof of legal stay</td><td className="px-3 py-2 align-top">Foreigners need a certificate confirming legal status to receive many services, apart from emergency medical care</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Implementation details such as the quota numbers, the list of recognised certificates and exam dates are set by government decrees and university procedures and can change. Verify current rules with the Georgian Ministry of Foreign Affairs consular portal (geoconsul.gov.ge), the Public Service Hall (psh.gov.ge) and the university&apos;s international office.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">What this means for Bangladeshi applicants</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Choose only state-accredited programmes and ask for proof.</li><li>Prepare a recognised English certificate or plan for the state exam.</li><li>Expect fewer places at some universities, and apply early.</li><li>Plan to meet credit requirements every year; repeated failure can cost you the permit.</li><li>Do not work without proper authorisation.</li></ul>
<p className="mt-4 leading-7 text-slate-700">Read <Link href="/study/georgia/keep-your-study-permit-valid-in-georgia" className={linkClass}>keep your study permit valid</Link> for a practical checklist.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Georgia Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Georgia</h2>
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
