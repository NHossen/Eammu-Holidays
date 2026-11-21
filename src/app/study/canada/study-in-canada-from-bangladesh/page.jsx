import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/canada/study-in-canada-from-bangladesh';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Canada from Bangladesh Guide 2026 | Eammu Holidays",
  "description": "Step-by-step 2026 roadmap to study in Canada from Bangladesh: programme choice, CAD to BDT costs, PAL, study permit steps and Eammu Holidays support.",
  "alternates": {
    "canonical": "https://eammu.com/study/canada/study-in-canada-from-bangladesh"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Canada from Bangladesh Guide 2026 | Eammu Holidays",
    "description": "Step-by-step 2026 roadmap to study in Canada from Bangladesh: programme choice, CAD to BDT costs, PAL, study permit steps and Eammu Holidays support.",
    "url": "https://eammu.com/study/canada/study-in-canada-from-bangladesh",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Canada from Bangladesh Guide 2026 | Eammu Holidays",
    "description": "Step-by-step 2026 roadmap to study in Canada from Bangladesh: programme choice, CAD to BDT costs, PAL, study permit steps and Eammu Holidays support."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Canada", "href": "/study/canada"}, {"name": "Study from Bangladesh", "href": "/study/canada/study-in-canada-from-bangladesh"}];
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
    "href": "/study/canada/admission-requirements-in-canada-for-bangladeshi-students",
    "title": "Admission Requirements in Canada for Bangladeshi Students",
    "description": "SSC, HSC, diploma, English and document requirements for Canadian institutions explained for Bangladeshi applicants."
  },
  {
    "href": "/study/canada/provincial-attestation-letter-pal-guide-for-canada",
    "title": "Provincial Attestation Letter (PAL) Guide for Canada",
    "description": "What a PAL or TAL is, who needs one in 2026, how institutions request it and how the cap affects Bangladeshi applicants."
  },
  {
    "href": "/study/canada/student-visa-requirements-bangladesh",
    "title": "Canada Study Permit Requirements for Bangladesh",
    "description": "Documents and eligibility for a Canadian study permit from Bangladesh, including letter of acceptance, PAL, funds and study plan."
  },
  {
    "href": "/study/canada",
    "title": "Study in Canada 2026: Complete Hub for Bangladeshi Students",
    "description": "Start here: every guide on tuition, PAL, study permits, proof of funds, work rules, PGWP and local support for Bangladeshi students planning to study in Canada."
  }
];
const FAQS = [
  {
    "q": "How long does the whole process take?",
    "a": "Allow roughly 6 to 9 months from shortlisting to arrival: admission, PAL where required (about 2 to 6 weeks), and study permit processing of several weeks to months."
  },
  {
    "q": "Do I need an agent to apply?",
    "a": "No, but many students prefer counseling. Choose a transparent consultancy, and never pay for a guaranteed visa."
  },
  {
    "q": "Which intake is best?",
    "a": "September is the largest intake, with January and May at many colleges. Choose the one where your documents, PAL and funds are ready."
  },
  {
    "q": "Can my family come with me?",
    "a": "Dependants face separate rules and funds. Check IRCC requirements before planning."
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
          "name": "Study from Bangladesh",
          "item": "https://eammu.com/study/canada/study-in-canada-from-bangladesh"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Canada from Bangladesh: 2026 Roadmap",
      "description": "Step-by-step 2026 roadmap to study in Canada from Bangladesh: programme choice, CAD to BDT costs, PAL, study permit steps and Eammu Holidays support.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/canada/study-in-canada-from-bangladesh",
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
          "name": "How long does the whole process take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Allow roughly 6 to 9 months from shortlisting to arrival: admission, PAL where required (about 2 to 6 weeks), and study permit processing of several weeks to months."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an agent to apply?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, but many students prefer counseling. Choose a transparent consultancy, and never pay for a guaranteed visa."
          }
        },
        {
          "@type": "Question",
          "name": "Which intake is best?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "September is the largest intake, with January and May at many colleges. Choose the one where your documents, PAL and funds are ready."
          }
        },
        {
          "@type": "Question",
          "name": "Can my family come with me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dependants face separate rules and funds. Check IRCC requirements before planning."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Canada from Bangladesh: 2026 Roadmap</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">From choosing a programme in Dhaka or Cumilla to landing in Toronto, Vancouver or Halifax, here is the sequence most Bangladeshi students follow.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Is Canada right for you?</h2>
<p className="mt-4 leading-7 text-slate-700">Canada suits students with a clear academic plan, strong funds and realistic expectations about the visa and post-study options. Compare real budgets first: <Link href="/study/canada/tuition-fees-in-canada-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Canada for Bangladeshi students</Link> and <Link href="/study/canada/cost-of-living-in-canada-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Canada for Bangladeshi students</Link> show a full year in taka.</p>
<p className="mt-4 leading-7 text-slate-700">Then check your academic profile against the <Link href="/study/canada/admission-requirements-in-canada-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements in Canada for Bangladeshi students</Link> and see &#123;&#123;no-ielts|how to study in Canada without IELTS&#125;&#125; if English test scores are a concern.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Choose your level and institution</h2>
<h3 className="mt-6 text-xl font-bold text-emerald-800">Colleges and universities</h3>
<p className="mt-4 leading-7 text-slate-700">Colleges offer shorter diplomas, universities offer degrees, and not every programme leads to a work permit afterwards. Read <Link href="/study/canada/colleges-and-pgwp-eligible-programs-in-canada" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">colleges and PGWP-eligible programmes</Link> and <Link href="/study/canada/public-vs-private-universities-in-canada" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">public vs private colleges in Canada</Link>.</p>
<h3 className="mt-6 text-xl font-bold text-emerald-800">Bachelor&apos;s or master&apos;s</h3>
<p className="mt-4 leading-7 text-slate-700">HSC graduates can apply for bachelor&apos;s programmes, and graduates should compare <Link href="/study/canada/mba-in-canada-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MBA and master&apos;s programmes in Canada</Link> and <Link href="/study/canada/cse-and-it-courses-in-canada" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT courses in Canada</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">The application and arrival timeline</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Shortlist 2 to 3 institutions and note the <Link href="/study/canada/canada-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake</Link> (September, January or May).</li><li>Apply and receive a letter of acceptance, and a PAL where required; see <Link href="/study/canada/provincial-attestation-letter-pal-guide-for-canada" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the PAL guide</Link>.</li><li>Prepare funds per <Link href="/study/canada/bank-solvency-requirements-for-canada-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds requirements</Link> and write a strong study plan.</li><li>Apply online and give biometrics; see <Link href="/study/canada/study-permit-application-process-and-biometrics-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the study permit application process</Link>.</li><li>Plan housing in <Link href="/study/canada/student-accommodation-in-canada" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student accommodation in Canada</Link> and arrange travel after approval.</li></ol>
<p className="mt-4 leading-7 text-slate-700">Start 6 to 9 months early. <Link href="/study/canada/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Study permit processing time and cost</Link> vary by season and workload.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Money, work and after graduation</h2>
<p className="mt-4 leading-7 text-slate-700">Student work is limited, and post-study routes depend on your programme; see <Link href="/study/canada/part-time-job-and-post-study-work-rules-in-canada" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">work, PGWP and PR rules in Canada</Link>.</p>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Canada limits the number of study permits it issues, most new undergraduate and college applicants need a Provincial or Territorial Attestation Letter (PAL/TAL), and refusals for Bangladeshi applicants have been high: IRCC data reported by industry media put Bangladesh&apos;s approval rate at about 18% in 2024. Staying after graduation, including a post-graduation work permit and permanent residence, is not guaranteed. Never pay anyone for a guaranteed visa, and plan for the possibility of refusal.</p>
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
