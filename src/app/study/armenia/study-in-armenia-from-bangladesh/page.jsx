import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/armenia/study-in-armenia-from-bangladesh';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Armenia from Bangladesh Guide 2026 | Eammu Holidays",
  "description": "Step-by-step 2026 roadmap to study in Armenia from Bangladesh: course choice, USD to BDT costs, visa and residence permit steps with Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/armenia/study-in-armenia-from-bangladesh"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Armenia from Bangladesh Guide 2026 | Eammu Holidays",
    "description": "Step-by-step 2026 roadmap to study in Armenia from Bangladesh: course choice, USD to BDT costs, visa and residence permit steps with Eammu Holidays.",
    "url": "https://eammu.com/study/armenia/study-in-armenia-from-bangladesh",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Armenia from Bangladesh Guide 2026 | Eammu Holidays",
    "description": "Step-by-step 2026 roadmap to study in Armenia from Bangladesh: course choice, USD to BDT costs, visa and residence permit steps with Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Armenia", "href": "/study/armenia"}, {"name": "Study from Bangladesh", "href": "/study/armenia/study-in-armenia-from-bangladesh"}];
const NAV = [
  {
    "label": "Armenia Hub",
    "pages": [
      {
        "href": "/study/armenia",
        "label": "Study in Armenia Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/armenia/study-in-armenia-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/armenia/study-in-armenia-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/armenia/tuition-fees-in-armenia-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/armenia/cost-of-living-in-armenia-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/armenia/cheapest-universities-in-armenia",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/armenia/top-universities-in-armenia",
        "label": "Top Universities"
      },
      {
        "href": "/study/armenia/public-vs-private-universities-in-armenia",
        "label": "Public vs Private"
      },
      {
        "href": "/study/armenia/scholarships-in-armenia-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/armenia/admission-requirements-in-armenia-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/armenia/study-gap-accepted-universities-in-armenia",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/armenia/study-in-armenia-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/armenia/study-in-armenia-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/armenia/armenia-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/armenia/mbbs-in-armenia-for-bangladeshi-students",
        "label": "MBBS in Armenia"
      },
      {
        "href": "/study/armenia/medical-degree-recognition-and-bmdc-guide-armenia",
        "label": "Degree Recognition & BMDC"
      },
      {
        "href": "/study/armenia/mba-in-armenia-for-bangladeshi-students",
        "label": "MBA & Master's"
      },
      {
        "href": "/study/armenia/cse-and-it-courses-in-armenia",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/armenia/student-accommodation-in-armenia",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, Residence & Work Rules",
    "pages": [
      {
        "href": "/study/armenia/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/armenia/temporary-residence-permit-and-arrival-guide-armenia",
        "label": "Residence Permit & Arrival"
      },
      {
        "href": "/study/armenia/bank-solvency-requirements-for-armenia-student-visa",
        "label": "Bank Solvency"
      },
      {
        "href": "/study/armenia/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/armenia/part-time-job-and-post-study-work-rules-in-armenia",
        "label": "Work Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/armenia/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/armenia/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/armenia/admission-requirements-in-armenia-for-bangladeshi-students",
    "title": "Admission Requirements in Armenia for Bangladeshi Students",
    "description": "SSC, HSC, diploma, English and document requirements for Armenian universities explained for Bangladeshi applicants."
  },
  {
    "href": "/study/armenia/tuition-fees-in-armenia-for-bangladeshi-students",
    "title": "Tuition Fees in Armenia for Bangladeshi Students",
    "description": "Realistic tuition ranges in USD and BDT for preparatory, bachelor’s, medicine and master’s programmes in Armenia."
  },
  {
    "href": "/study/armenia/student-visa-requirements-bangladesh",
    "title": "Armenia Student Visa Requirements for Bangladesh",
    "description": "Documents and steps for entering Armenia as a Bangladeshi student, including visa route, admission letter and residence permit."
  },
  {
    "href": "/study/armenia",
    "title": "Study in Armenia 2026: Complete Hub for Bangladeshi Students",
    "description": "Start here: every guide on tuition, visas, residence permits, MBBS, scholarships, universities and local support for Bangladeshi students planning to study in Armenia."
  }
];
const FAQS = [
  {
    "q": "How long does the whole process take?",
    "a": "Allow roughly 4 to 6 months from shortlisting to arrival, including admission, entry and residence steps."
  },
  {
    "q": "Do I need an agent to apply?",
    "a": "No, but many students prefer counseling. Choose a transparent consultancy that explains risks, and keep every receipt."
  },
  {
    "q": "Which intake is best?",
    "a": "September is the main intake for most programmes, and some universities have additional entries."
  },
  {
    "q": "Can my family visit me in Armenia?",
    "a": "Bangladeshi visitors need to follow the current visa rules, which changed in 2026. Check the latest guidance."
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
          "name": "Armenia",
          "item": "https://eammu.com/study/armenia"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Study from Bangladesh",
          "item": "https://eammu.com/study/armenia/study-in-armenia-from-bangladesh"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Armenia from Bangladesh: 2026 Roadmap",
      "description": "Step-by-step 2026 roadmap to study in Armenia from Bangladesh: course choice, USD to BDT costs, visa and residence permit steps with Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/armenia/study-in-armenia-from-bangladesh",
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
            "text": "Allow roughly 4 to 6 months from shortlisting to arrival, including admission, entry and residence steps."
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
            "text": "September is the main intake for most programmes, and some universities have additional entries."
          }
        },
        {
          "@type": "Question",
          "name": "Can my family visit me in Armenia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bangladeshi visitors need to follow the current visa rules, which changed in 2026. Check the latest guidance."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Armenia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Armenia from Bangladesh: 2026 Roadmap</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">From choosing a university in Dhaka or Cumilla to landing in Yerevan, here is the sequence most Bangladeshi students follow.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Armenia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Armenia guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Is Armenia right for you?</h2>
<p className="mt-4 leading-7 text-slate-700">Armenia suits students who want an affordable English-medium degree, especially in medicine, in a safe, compact country, and who have checked how the degree will be used afterwards. Compare real budgets first: <Link href="/study/armenia/tuition-fees-in-armenia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Armenia for Bangladeshi students</Link> and <Link href="/study/armenia/cost-of-living-in-armenia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Armenia for Bangladeshi students</Link> show a full year in taka.</p>
<p className="mt-4 leading-7 text-slate-700">Then check your academic profile against the <Link href="/study/armenia/admission-requirements-in-armenia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements in Armenia for Bangladeshi students</Link> and see &#123;&#123;no-ielts|how to study in Armenia without IELTS&#125;&#125; if English test scores are a concern.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Choose your level and subject</h2>
<h3 className="mt-6 text-xl font-bold text-emerald-800">Medicine and health</h3>
<p className="mt-4 leading-7 text-slate-700">Most Bangladeshi applicants look at <Link href="/study/armenia/mbbs-in-armenia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MBBS in Armenia</Link>, a 6-year programme. Before choosing, read <Link href="/study/armenia/medical-degree-recognition-and-bmdc-guide-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the medical degree recognition guide</Link>.</p>
<h3 className="mt-6 text-xl font-bold text-emerald-800">IT, engineering and business</h3>
<p className="mt-4 leading-7 text-slate-700">Technical and business degrees are also available; see <Link href="/study/armenia/cse-and-it-courses-in-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT courses in Armenia</Link> and the <Link href="/study/armenia/mba-in-armenia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MBA and master&apos;s options in Armenia</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">The application and arrival timeline</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Shortlist 2 to 3 universities and confirm the <Link href="/study/armenia/armenia-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake</Link> (mainly September).</li><li>Submit documents and receive an admission letter; pay only through official university channels.</li><li>Arrange entry as required for Bangladeshi citizens; see <Link href="/study/armenia/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa requirements for Bangladesh</Link>.</li><li>On arrival, apply for a temporary residence permit; see <Link href="/study/armenia/temporary-residence-permit-and-arrival-guide-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the residence permit and arrival guide</Link>.</li><li>Prepare funds per <Link href="/study/armenia/bank-solvency-requirements-for-armenia-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bank solvency requirements</Link> and plan <Link href="/study/armenia/student-accommodation-in-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">accommodation</Link>.</li></ol>
<p className="mt-4 leading-7 text-slate-700">Start 4 to 6 months early. <Link href="/study/armenia/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Visa processing time and cost</Link> depend on the route and your documents.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Money, housing and work</h2>
<p className="mt-4 leading-7 text-slate-700">Student work is regulated; see <Link href="/study/armenia/part-time-job-and-post-study-work-rules-in-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">part-time job and post-study work rules in Armenia</Link>.</p>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Armenia changed its visa and migration rules in 2026, including for Bangladeshi citizens, and further amendments to the Law on Foreigners took effect from 1 November 2026. Rules may change again, so confirm the current position on the official Armenian Ministry of Foreign Affairs website and with your university before you apply.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Armenia Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Armenia</h2>
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
