import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/lithuania/study-in-lithuania-from-bangladesh';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Lithuania from Bangladesh 2026 | Eammu Holidays",
  "description": "Step-by-step 2026 roadmap to study in Lithuania from Bangladesh: programme choice, EUR to BDT costs, TRP steps and the 2026 rule changes. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/lithuania/study-in-lithuania-from-bangladesh"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Lithuania from Bangladesh 2026 | Eammu Holidays",
    "description": "Step-by-step 2026 roadmap to study in Lithuania from Bangladesh: programme choice, EUR to BDT costs, TRP steps and the 2026 rule changes. Eammu Holidays.",
    "url": "https://eammu.com/study/lithuania/study-in-lithuania-from-bangladesh",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Lithuania from Bangladesh 2026 | Eammu Holidays",
    "description": "Step-by-step 2026 roadmap to study in Lithuania from Bangladesh: programme choice, EUR to BDT costs, TRP steps and the 2026 rule changes. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Lithuania", "href": "/study/lithuania"}, {"name": "Study from Bangladesh", "href": "/study/lithuania/study-in-lithuania-from-bangladesh"}];
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
    "href": "/study/lithuania/admission-requirements-in-lithuania-for-bangladeshi-students",
    "title": "Admission Requirements in Lithuania for Bangladeshi Students",
    "description": "HSC, degree, English and document requirements for Lithuanian universities explained for Bangladeshi applicants."
  },
  {
    "href": "/study/lithuania/trp-application-process-migris-and-vfs-guide",
    "title": "TRP Application Process Guide: MIGRIS and Visa Centre for Lithuania",
    "description": "How the online MIGRIS application, visa-centre appointment, interview and decision stages work for Bangladeshi students."
  },
  {
    "href": "/study/lithuania/student-visa-requirements-bangladesh",
    "title": "Lithuania Temporary Residence Permit Requirements for Bangladesh",
    "description": "Documents and eligibility for a Lithuanian study residence permit from Bangladesh, including admission, funds, insurance and interview."
  },
  {
    "href": "/study/lithuania",
    "title": "Study in Lithuania 2026: Complete Hub for Bangladeshi Students",
    "description": "Start here: every guide on tuition, the temporary residence permit, funds, MBBS, work rules and local support for Bangladeshi students planning to study in Lithuania."
  }
];
const FAQS = [
  {
    "q": "How long does the whole process take?",
    "a": "Allow roughly 6 to 8 months from shortlisting to arrival: admission, the study contract and tuition payment, permit processing and travel."
  },
  {
    "q": "Do I need an agent to apply?",
    "a": "No, but many students prefer counseling. Choose a transparent consultancy that explains risks, and keep every receipt."
  },
  {
    "q": "Which intake is best?",
    "a": "September is the main intake, and some universities admit in February. Confirm each university's calendar."
  },
  {
    "q": "Can my family come with me?",
    "a": "Family reunification is more limited, especially for master's students under the 2026 changes. Check the Migration Department before planning."
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
          "name": "Study from Bangladesh",
          "item": "https://eammu.com/study/lithuania/study-in-lithuania-from-bangladesh"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Lithuania from Bangladesh: 2026 Roadmap",
      "description": "Step-by-step 2026 roadmap to study in Lithuania from Bangladesh: programme choice, EUR to BDT costs, TRP steps and the 2026 rule changes. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/lithuania/study-in-lithuania-from-bangladesh",
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
            "text": "Allow roughly 6 to 8 months from shortlisting to arrival: admission, the study contract and tuition payment, permit processing and travel."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an agent to apply?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, but many students prefer counseling. Choose a transparent consultancy that explains risks, and keep every receipt."
          }
        },
        {
          "@type": "Question",
          "name": "Which intake is best?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "September is the main intake, and some universities admit in February. Confirm each university's calendar."
          }
        },
        {
          "@type": "Question",
          "name": "Can my family come with me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Family reunification is more limited, especially for master's students under the 2026 changes. Check the Migration Department before planning."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Lithuania from Bangladesh: 2026 Roadmap</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">From choosing a university in Dhaka or Cumilla to arriving in Vilnius, Kaunas or Klaipėda, here is the sequence most Bangladeshi students follow.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Is Lithuania right for you?</h2>
<p className="mt-4 leading-7 text-slate-700">Lithuania suits students who want an affordable EU degree and can pay tuition and show living funds upfront, and who understand the 2026 tightening of student rules. Compare real budgets first: <Link href="/study/lithuania/tuition-fees-in-lithuania-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Lithuania for Bangladeshi students</Link> and <Link href="/study/lithuania/cost-of-living-in-lithuania-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Lithuania for Bangladeshi students</Link> show a full year in taka.</p>
<p className="mt-4 leading-7 text-slate-700">Then check your academic profile against the <Link href="/study/lithuania/admission-requirements-in-lithuania-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements in Lithuania for Bangladeshi students</Link> and see &#123;&#123;no-ielts|how to study in Lithuania without IELTS&#125;&#125; if English test scores are a concern.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Choose your institution and field</h2>
<h3 className="mt-6 text-xl font-bold text-emerald-800">University or college</h3>
<p className="mt-4 leading-7 text-slate-700">Lithuania has universities and colleges, public and private, and the Migration Department has been pressing institutions on quality; compare them in <Link href="/study/lithuania/public-vs-private-universities-in-lithuania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">public vs private universities in Lithuania</Link> and <Link href="/study/lithuania/top-universities-in-lithuania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Lithuania</Link>.</p>
<h3 className="mt-6 text-xl font-bold text-emerald-800">Fields</h3>
<p className="mt-4 leading-7 text-slate-700">Popular fields include <Link href="/study/lithuania/business-and-management-degrees-in-lithuania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">business and management</Link>, <Link href="/study/lithuania/cse-and-it-courses-in-lithuania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">IT</Link> and <Link href="/study/lithuania/mbbs-and-medicine-in-lithuania-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">medicine</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">The application and arrival timeline</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Shortlist 2 to 3 universities and note the <Link href="/study/lithuania/lithuania-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake</Link> and application deadline.</li><li>Apply and receive an offer; sign the study contract and pay tuition through official channels.</li><li>Prepare funds per <Link href="/study/lithuania/bank-solvency-requirements-for-lithuania-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds requirements</Link>.</li><li>Apply for the temporary residence permit; see <Link href="/study/lithuania/trp-application-process-migris-and-vfs-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the application process guide</Link>.</li><li>After approval, travel and register; see <Link href="/study/lithuania/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">temporary residence permit requirements</Link>.</li></ol>
<p className="mt-4 leading-7 text-slate-700">Start 6 to 8 months early. <Link href="/study/lithuania/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Permit processing time and cost</Link> depend on the season and your documents.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Money, housing and work</h2>
<p className="mt-4 leading-7 text-slate-700">Plan housing in <Link href="/study/lithuania/student-accommodation-in-lithuania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student accommodation in Lithuania</Link>. Student work is limited and rules changed in May 2026; read <Link href="/study/lithuania/part-time-job-and-post-study-work-rules-in-lithuania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">part-time job and post-study work rules in Lithuania</Link>.</p>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Lithuania has tightened its rules for international students: from 22 May 2026, first- and second-year bachelor&apos;s students on new permits may work only 20 hours a week, from 1 November 2026 applying for a study permit from inside Lithuania after entering on a Schengen visa is restricted, and the Migration Department is checking universities and students more closely. A Lithuanian permit gives no right to work elsewhere in the EU, and agents who sell Lithuania as an easy route into Europe are a warning sign.</p>
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
