import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/australia/temporary-graduate-visa-485-and-pr-pathways';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "485 Graduate Visa & PR Pathways | Eammu Holidays",
  "description": "Temporary Graduate subclass 485 visa in 2026: A$5,750 fee, age limit 35, IELTS 6.5 requirement, 2 to 3 year duration and skilled migration pathways for Bangladeshi graduates. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/australia/temporary-graduate-visa-485-and-pr-pathways"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "485 Graduate Visa & PR Pathways | Eammu Holidays",
    "description": "Temporary Graduate subclass 485 visa in 2026: A$5,750 fee, age limit 35, IELTS 6.5 requirement, 2 to 3 year duration and skilled migration pathways for Bangladeshi graduates. Eammu Holidays.",
    "url": "https://eammu.com/study/australia/temporary-graduate-visa-485-and-pr-pathways",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "485 Graduate Visa & PR Pathways | Eammu Holidays",
    "description": "Temporary Graduate subclass 485 visa in 2026: A$5,750 fee, age limit 35, IELTS 6.5 requirement, 2 to 3 year duration and skilled migration pathways for Bangladeshi graduates. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Australia", "href": "/study/australia"}, {"name": "485 Visa & PR Pathways", "href": "/study/australia/temporary-graduate-visa-485-and-pr-pathways"}];
const NAV = [
  {
    "label": "Australia Hub",
    "pages": [
      {
        "href": "/study/australia",
        "label": "Study in Australia Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/australia/study-in-australia-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/australia/study-in-australia-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/australia/english-test-requirements-for-australia",
        "label": "English Test Requirements"
      },
      {
        "href": "/study/australia/tuition-fees-in-australia-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/australia/cost-of-living-in-australia-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/australia/cheapest-universities-in-australia",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/australia/top-universities-in-australia",
        "label": "Top Universities"
      },
      {
        "href": "/study/australia/universities-vs-vet-and-private-colleges-in-australia",
        "label": "Universities vs VET & Private"
      },
      {
        "href": "/study/australia/scholarships-in-australia-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/australia/admission-requirements-in-australia-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/australia/study-gap-accepted-in-australia",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/australia/study-in-australia-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/australia/study-in-australia-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/australia/australia-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Courses, Housing & Life",
    "pages": [
      {
        "href": "/study/australia/application-guide-for-australian-universities",
        "label": "Application Guide"
      },
      {
        "href": "/study/australia/degree-recognition-and-eligibility-in-australia",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/australia/it-and-cse-courses-in-australia",
        "label": "IT & CSE Courses"
      },
      {
        "href": "/study/australia/mba-and-masters-in-australia-for-bangladeshi-students",
        "label": "MBA & Master's"
      },
      {
        "href": "/study/australia/nursing-and-health-courses-in-australia",
        "label": "Nursing & Health Courses"
      },
      {
        "href": "/study/australia/student-accommodation-in-australia",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/australia/oshc-health-cover-for-international-students",
        "label": "OSHC Health Cover"
      },
      {
        "href": "/study/australia/regional-study-in-australia",
        "label": "Regional Study"
      },
      {
        "href": "/study/australia/student-life-halal-food-and-safety-in-australia",
        "label": "Student Life, Halal & Safety"
      }
    ]
  },
  {
    "label": "Visa, Funds & Work Rules",
    "pages": [
      {
        "href": "/study/australia/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/australia/evidence-level-3-explained-for-bangladeshi-students",
        "label": "Evidence Level 3 Explained"
      },
      {
        "href": "/study/australia/genuine-student-requirement-guide",
        "label": "Genuine Student Guide"
      },
      {
        "href": "/study/australia/proof-of-funds-requirements-for-australia-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/australia/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/australia/visa-refusal-reasons-and-how-to-avoid-them",
        "label": "Visa Refusal Reasons"
      },
      {
        "href": "/study/australia/part-time-job-and-work-rules-in-australia",
        "label": "Work Rules"
      },
      {
        "href": "/study/australia/temporary-graduate-visa-485-and-pr-pathways",
        "label": "485 Visa & PR Pathways"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/australia/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/australia/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/australia/it-and-cse-courses-in-australia",
    "title": "IT and CSE Courses in Australia for Bangladeshi Students",
    "description": "Computer science, software, data, AI and cybersecurity courses, costs, accreditation and graduate prospects."
  },
  {
    "href": "/study/australia/regional-study-in-australia",
    "title": "Regional Study in Australia: Costs, Benefits and Trade-offs",
    "description": "Why some students choose regional universities and how location can affect living costs and post-study options."
  },
  {
    "href": "/study/australia/part-time-job-and-work-rules-in-australia",
    "title": "Part-Time Job and Work Rules for International Students in Australia",
    "description": "The 48-hour fortnight cap, unlimited work in breaks, research student exceptions, pay, tax and common mistakes."
  },
  {
    "href": "/study/australia/mba-and-masters-in-australia-for-bangladeshi-students",
    "title": "MBA and Master's in Australia for Bangladeshi Students",
    "description": "Coursework and research master degrees, MBA costs and entry rules, and how funding and visas work."
  }
];
const FAQS = [
  {
    "q": "Does a 485 visa lead to PR?",
    "a": "Not automatically. It gives work time, and you must qualify under a separate skilled or employer visa."
  },
  {
    "q": "Is the age limit a problem for master students?",
    "a": "It can be if you start late, so plan your timeline."
  },
  {
    "q": "Does the course type matter?",
    "a": "Yes. Higher education qualifications are typically eligible, but some VET courses are not, so check the specific course."
  },
  {
    "q": "Can I switch to a 485 visa inside Australia?",
    "a": "Yes, graduates normally apply for the 485 onshore after finishing their course."
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
          "name": "Australia",
          "item": "https://eammu.com/study/australia"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "485 Visa & PR Pathways",
          "item": "https://eammu.com/study/australia/temporary-graduate-visa-485-and-pr-pathways"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Temporary Graduate (485) Visa and PR Pathways After Study (2026)",
      "description": "Temporary Graduate subclass 485 visa in 2026: A$5,750 fee, age limit 35, IELTS 6.5 requirement, 2 to 3 year duration and skilled migration pathways for Bangladeshi graduates. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/australia/temporary-graduate-visa-485-and-pr-pathways",
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
          "name": "Does a 485 visa lead to PR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. It gives work time, and you must qualify under a separate skilled or employer visa."
          }
        },
        {
          "@type": "Question",
          "name": "Is the age limit a problem for master students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be if you start late, so plan your timeline."
          }
        },
        {
          "@type": "Question",
          "name": "Does the course type matter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Higher education qualifications are typically eligible, but some VET courses are not, so check the specific course."
          }
        },
        {
          "@type": "Question",
          "name": "Can I switch to a 485 visa inside Australia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, graduates normally apply for the 485 onshore after finishing their course."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Australia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Temporary Graduate (485) Visa and PR Pathways After Study (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Eligibility, length, costs, English requirements and the realities of skilled migration for Bangladeshi graduates.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-21">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Australia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 46 Australia guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Temporary Graduate (485) visa basics</h2>
<p className="mt-4 leading-7 text-slate-700">The 485 visa lets eligible international graduates live and work in Australia temporarily after finishing an Australian qualification. It is meant to give graduates work experience, and it does not lead automatically to permanent residence.</p>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">2026 rule (reported)</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Application charge</td><td className="px-3 py-2 align-top">A$5,750 from 1 July 2026</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Age limit</td><td className="px-3 py-2 align-top">Under 35 at the time of application</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">English</td><td className="px-3 py-2 align-top">IELTS 6.5 overall with at least 5.5 in each band, with a recent result</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Typical duration</td><td className="px-3 py-2 align-top">2 years after a bachelor or coursework master; 3 years after a research master or PhD</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">When to apply</td><td className="px-3 py-2 align-top">Within a limited time after finishing your course; check Home Affairs</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">The 485 rules and fees have been revised repeatedly. Verify on Home Affairs before enrolling, since your eligibility is based on the rules at the time you apply, not when you start your course.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Pathways to permanent residence</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li><strong>Skilled independent and state-nominated visas:</strong> points-tested, and the points test and occupation lists have been under review.</li><li><strong>Employer-sponsored visas:</strong> need an employer, an occupation on the relevant list and usually work experience.</li><li><strong>Regional pathways:</strong> designated regional areas can offer additional options.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">A realistic view</h2>
<p className="mt-4 leading-7 text-slate-700">Many graduates do not obtain permanent residence, and competition is high. Treat study as an investment in education and skills first, and migration as a possible bonus rather than a plan. This is also how the Genuine Student officer expects you to think. See <Link href="/study/australia/it-and-cse-courses-in-australia" className={linkClass}>IT and CSE courses</Link> for how course choice interacts with outcomes.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Australia Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Australia</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and scholarship shortlist, Genuine Student and visa guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
