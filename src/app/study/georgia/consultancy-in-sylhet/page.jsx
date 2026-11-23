import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/georgia/consultancy-in-sylhet';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Georgia Study Consultancy in Sylhet 2026 | Eammu Holidays",
  "description": "Study in Georgia counseling for Sylhet students in 2026: tuition in BDT, MBBS, D3 visa, new 2026 rules, accreditation checks and scam awareness with Eammu Holidays; online and Dhaka desk.",
  "alternates": {
    "canonical": "https://eammu.com/study/georgia/consultancy-in-sylhet"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Georgia Study Consultancy in Sylhet 2026 | Eammu Holidays",
    "description": "Study in Georgia counseling for Sylhet students in 2026: tuition in BDT, MBBS, D3 visa, new 2026 rules, accreditation checks and scam awareness with Eammu Holidays; online and Dhaka desk.",
    "url": "https://eammu.com/study/georgia/consultancy-in-sylhet",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Georgia Study Consultancy in Sylhet 2026 | Eammu Holidays",
    "description": "Study in Georgia counseling for Sylhet students in 2026: tuition in BDT, MBBS, D3 visa, new 2026 rules, accreditation checks and scam awareness with Eammu Holidays; online and Dhaka desk."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Georgia", "href": "/study/georgia"}, {"name": "Sylhet Consultancy", "href": "/study/georgia/consultancy-in-sylhet"}];
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
    "href": "/study/georgia/tuition-fees-in-georgia-for-bangladeshi-students",
    "title": "Tuition Fees in Georgia for Bangladeshi Students",
    "description": "A clear USD/GEL-to-BDT look at what each level of study costs and the extra fees families forget."
  },
  {
    "href": "/study/georgia/student-visa-requirements-bangladesh",
    "title": "Georgia D3 Study Visa Requirements for Bangladeshi Students",
    "description": "Why Bangladeshi students need a visa, how the D3 study visa and the study residence permit fit together, and what to prepare."
  },
  {
    "href": "/study/georgia/new-2026-rules-for-foreign-students-in-georgia",
    "title": "Georgia's New 2026 Rules for Foreign Students Explained (Effective After June 2026)",
    "description": "Accredited-only enrolment, language certificates or state exams, quotas, academic progress and permit revocation, in plain English."
  },
  {
    "href": "/study/georgia/consultancy-in-dhaka",
    "title": "Study in Georgia Consultancy for Dhaka Students",
    "description": "Honest counseling, accreditation checks, funds review and visa guidance for Dhaka students."
  }
];
const FAQS = [
  {
    "q": "Can I get counseling from Sylhet without visiting Dhaka?",
    "a": "Yes. Profile review, shortlisting and document guidance can be done online. A Dhaka trip may be needed for attestation and legalisation."
  },
  {
    "q": "How much should a Sylhet family budget for the first year?",
    "a": "MBBS students often need roughly $8,000 to $15,000 for tuition and living, about Tk 9.8 to 18 lakh, while some non-medical degrees cost less. See the tuition guide."
  },
  {
    "q": "When should Sylhet students start?",
    "a": "Start six to nine months before the intake so there is time for language proof, legalisation, the acceptance letter and the visa."
  },
  {
    "q": "Do you guarantee a visa?",
    "a": "No. Nobody can guarantee a visa. We help you prepare an honest, well-documented application and avoid scams."
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
          "name": "Sylhet Consultancy",
          "item": "https://eammu.com/study/georgia/consultancy-in-sylhet"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Georgia Consultancy for Sylhet Students (2026)",
      "description": "Study in Georgia counseling for Sylhet students in 2026: tuition in BDT, MBBS, D3 visa, new 2026 rules, accreditation checks and scam awareness with Eammu Holidays; online and Dhaka desk.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/georgia/consultancy-in-sylhet",
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
          "name": "Can I get counseling from Sylhet without visiting Dhaka?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Profile review, shortlisting and document guidance can be done online. A Dhaka trip may be needed for attestation and legalisation."
          }
        },
        {
          "@type": "Question",
          "name": "How much should a Sylhet family budget for the first year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MBBS students often need roughly $8,000 to $15,000 for tuition and living, about Tk 9.8 to 18 lakh, while some non-medical degrees cost less. See the tuition guide."
          }
        },
        {
          "@type": "Question",
          "name": "When should Sylhet students start?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start six to nine months before the intake so there is time for language proof, legalisation, the acceptance letter and the visa."
          }
        },
        {
          "@type": "Question",
          "name": "Do you guarantee a visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Nobody can guarantee a visa. We help you prepare an honest, well-documented application and avoid scams."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Georgia Consultancy for Sylhet Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Honest counseling, accreditation checks, funds review and visa guidance for Sylhet students.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Counseling for Sylhet families</h2>
<p className="mt-4 leading-7 text-slate-700">Sylhet has many families with international experience who compare several destinations before choosing. Georgia is sometimes considered for lower cost, so we stress recognition and what the permit does not allow.</p>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays does not claim a separate Sylhet branch. Our main Dhaka desk and online sessions serve students from Sylhet. See the <Link href="/study/georgia/consultancy-in-dhaka" className={linkClass}>main Dhaka consultancy page</Link> for the desk details.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Travel and logistics from Sylhet</h2>
<p className="mt-4 leading-7 text-slate-700">Sylhet to Dhaka travel is by road, train or domestic flight. We suggest online counseling first, then one visit to Dhaka for attestation and legalisation.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Questions Sylhet students ask most</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>What does it cost in BDT? See <Link href="/study/georgia/tuition-fees-in-georgia-for-bangladeshi-students" className={linkClass}>tuition fees</Link>.</li><li>What changed in 2026? See <Link href="/study/georgia/new-2026-rules-for-foreign-students-in-georgia" className={linkClass}>the new rules</Link>.</li><li>Is Georgia a route to Europe? See <Link href="/study/georgia/georgia-reality-check-eu-schengen-and-new-rules" className={linkClass}>the reality check</Link>.</li><li>How do I avoid fake offers? See <Link href="/study/georgia/scams-and-fake-offer-warning-georgia" className={linkClass}>scam warning</Link>.</li><li>Why is a Georgian permit not valid for other European countries?</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Documents to start from Sylhet</h2>
<p className="mt-4 leading-7 text-slate-700">Begin with passport, SSC, HSC and bachelor certificates, transcripts and a clear photo. Ask the university which legalisation steps apply, since attestation by Bangladeshi offices usually happens in Dhaka. Families in Sylhet should allow extra time because the new language-proof requirement and accreditation checks can add steps.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Other locations</h2>
<p className="mt-4 leading-7 text-slate-700">Students can also view Cumilla and Mymensingh guides. You can also view all options on the <Link href="/study/georgia/bangladesh-offices" className={linkClass}>Bangladesh offices page</Link>.</p>
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
