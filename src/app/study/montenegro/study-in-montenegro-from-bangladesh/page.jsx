import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/montenegro/study-in-montenegro-from-bangladesh';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Montenegro from Bangladesh 2026 | Eammu Holidays",
  "description": "Step-by-step 2026 roadmap to study in Montenegro from Bangladesh: programme choice, EUR to BDT costs, D visa and residence permit steps with Eammu.",
  "alternates": {
    "canonical": "https://eammu.com/study/montenegro/study-in-montenegro-from-bangladesh"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Montenegro from Bangladesh 2026 | Eammu Holidays",
    "description": "Step-by-step 2026 roadmap to study in Montenegro from Bangladesh: programme choice, EUR to BDT costs, D visa and residence permit steps with Eammu.",
    "url": "https://eammu.com/study/montenegro/study-in-montenegro-from-bangladesh",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Montenegro from Bangladesh 2026 | Eammu Holidays",
    "description": "Step-by-step 2026 roadmap to study in Montenegro from Bangladesh: programme choice, EUR to BDT costs, D visa and residence permit steps with Eammu."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Montenegro", "href": "/study/montenegro"}, {"name": "Study from Bangladesh", "href": "/study/montenegro/study-in-montenegro-from-bangladesh"}];
const NAV = [
  {
    "label": "Montenegro Hub",
    "pages": [
      {
        "href": "/study/montenegro",
        "label": "Study in Montenegro Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/montenegro/study-in-montenegro-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/montenegro/study-in-montenegro-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/montenegro/tuition-fees-in-montenegro-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/montenegro/cost-of-living-in-montenegro-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/montenegro/cheapest-universities-in-montenegro",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/montenegro/top-universities-in-montenegro",
        "label": "Top Universities"
      },
      {
        "href": "/study/montenegro/public-vs-private-universities-in-montenegro",
        "label": "Public vs Private"
      },
      {
        "href": "/study/montenegro/scholarships-in-montenegro-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/montenegro/admission-requirements-in-montenegro-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/montenegro/study-gap-accepted-universities-in-montenegro",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/montenegro/study-in-montenegro-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/montenegro/study-in-montenegro-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/montenegro/montenegro-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/montenegro/degree-recognition-and-accreditation-in-montenegro",
        "label": "Degree Recognition"
      },
      {
        "href": "/study/montenegro/montenegrin-language-and-english-taught-programs-guide",
        "label": "Language & English Programmes"
      },
      {
        "href": "/study/montenegro/hospitality-tourism-and-business-degrees-in-montenegro",
        "label": "Hospitality & Business"
      },
      {
        "href": "/study/montenegro/cse-and-it-courses-in-montenegro",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/montenegro/student-accommodation-in-montenegro",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, Permit & Work Rules",
    "pages": [
      {
        "href": "/study/montenegro/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/montenegro/temporary-residence-permit-and-arrival-guide-montenegro",
        "label": "Residence Permit & Arrival"
      },
      {
        "href": "/study/montenegro/bank-solvency-requirements-for-montenegro-student-visa",
        "label": "Bank Solvency"
      },
      {
        "href": "/study/montenegro/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/montenegro/part-time-job-and-post-study-work-rules-in-montenegro",
        "label": "Work Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/montenegro/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/montenegro/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/montenegro/admission-requirements-in-montenegro-for-bangladeshi-students",
    "title": "Admission Requirements in Montenegro for Bangladeshi Students",
    "description": "SSC, HSC, diploma, language and document requirements for Montenegrin universities explained for Bangladeshi applicants."
  },
  {
    "href": "/study/montenegro/student-visa-requirements-bangladesh",
    "title": "Montenegro Student Visa Requirements for Bangladesh",
    "description": "Documents and steps for a Montenegrin long-stay D visa from Bangladesh, including admission letter, funds, insurance and residence permit."
  },
  {
    "href": "/study/montenegro/temporary-residence-permit-and-arrival-guide-montenegro",
    "title": "Temporary Residence Permit and Arrival Guide for Montenegro",
    "description": "What happens after admission: D visa, arrival, biometrics and the temporary residence permit for students in Montenegro."
  },
  {
    "href": "/study/montenegro",
    "title": "Study in Montenegro 2026: Complete Hub for Bangladeshi Students",
    "description": "Start here: every guide on tuition, the D visa, residence permits, universities, language, work rules and local support for Bangladeshi students planning to study in Montenegro."
  }
];
const FAQS = [
  {
    "q": "How long does the whole process take?",
    "a": "Allow roughly 4 to 6 months from shortlisting to arrival: admission, D visa processing and the residence permit steps."
  },
  {
    "q": "Do I need an agent to apply?",
    "a": "No, but many students prefer counseling. Choose a transparent consultancy that explains risks, and keep every receipt."
  },
  {
    "q": "Which intake is best?",
    "a": "October is the main intake for most programmes. Confirm each university's calendar."
  },
  {
    "q": "Can my family visit me in Montenegro?",
    "a": "Bangladeshi visitors need a visa. Check the current rules before planning."
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
          "name": "Montenegro",
          "item": "https://eammu.com/study/montenegro"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Study from Bangladesh",
          "item": "https://eammu.com/study/montenegro/study-in-montenegro-from-bangladesh"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Montenegro from Bangladesh: 2026 Roadmap",
      "description": "Step-by-step 2026 roadmap to study in Montenegro from Bangladesh: programme choice, EUR to BDT costs, D visa and residence permit steps with Eammu.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/montenegro/study-in-montenegro-from-bangladesh",
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
            "text": "Allow roughly 4 to 6 months from shortlisting to arrival: admission, D visa processing and the residence permit steps."
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
            "text": "October is the main intake for most programmes. Confirm each university's calendar."
          }
        },
        {
          "@type": "Question",
          "name": "Can my family visit me in Montenegro?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bangladeshi visitors need a visa. Check the current rules before planning."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Montenegro 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Montenegro from Bangladesh: 2026 Roadmap</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">From choosing a programme in Dhaka or Cumilla to arriving in Podgorica, here is the sequence most Bangladeshi students follow.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Montenegro guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Montenegro guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Is Montenegro right for you?</h2>
<p className="mt-4 leading-7 text-slate-700">Montenegro suits students who want low-cost study in a small, safe country, and who have checked the language of instruction and the limits of the student permit; see <Link href="/study/montenegro/montenegrin-language-and-english-taught-programs-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Montenegrin language and English-taught programmes guide</Link>. Compare real budgets first: <Link href="/study/montenegro/tuition-fees-in-montenegro-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Montenegro for Bangladeshi students</Link> and <Link href="/study/montenegro/cost-of-living-in-montenegro-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Montenegro for Bangladeshi students</Link> show a full year in taka.</p>
<p className="mt-4 leading-7 text-slate-700">Then check your academic profile against the <Link href="/study/montenegro/admission-requirements-in-montenegro-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements in Montenegro for Bangladeshi students</Link> and see &#123;&#123;no-ielts|how to study in Montenegro without IELTS&#125;&#125; if English test scores are a concern.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Choose your institution and field</h2>
<h3 className="mt-6 text-xl font-bold text-emerald-800">Public or private</h3>
<p className="mt-4 leading-7 text-slate-700">The University of Montenegro is the main public university, while the University of Donja Gorica and Mediterranean University are well-known private universities; compare them in <Link href="/study/montenegro/public-vs-private-universities-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">public vs private universities in Montenegro</Link> and <Link href="/study/montenegro/top-universities-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Montenegro</Link>.</p>
<h3 className="mt-6 text-xl font-bold text-emerald-800">Fields</h3>
<p className="mt-4 leading-7 text-slate-700">Hospitality, tourism and business are strong (<Link href="/study/montenegro/hospitality-tourism-and-business-degrees-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">hospitality, tourism and business degrees</Link>), and IT programmes exist (<Link href="/study/montenegro/cse-and-it-courses-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT courses in Montenegro</Link>).</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">The application and arrival timeline</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Shortlist 2 to 3 universities and note the <Link href="/study/montenegro/montenegro-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake</Link> and application window.</li><li>Apply and receive an admission letter; pay only through official university channels.</li><li>Apply for the long-stay D visa; see <Link href="/study/montenegro/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa requirements for Bangladesh</Link>.</li><li>Prepare funds per <Link href="/study/montenegro/bank-solvency-requirements-for-montenegro-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bank solvency requirements</Link>.</li><li>After arrival, apply for the temporary residence permit; see <Link href="/study/montenegro/temporary-residence-permit-and-arrival-guide-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the residence permit and arrival guide</Link>.</li></ol>
<p className="mt-4 leading-7 text-slate-700">Start 4 to 6 months early. <Link href="/study/montenegro/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Visa processing time and cost</Link> depend on the mission and your documents.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Money, housing and work</h2>
<p className="mt-4 leading-7 text-slate-700">Plan housing in <Link href="/study/montenegro/student-accommodation-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student accommodation in Montenegro</Link>. Student work is limited and conditional; read <Link href="/study/montenegro/part-time-job-and-post-study-work-rules-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">part-time job and post-study work rules in Montenegro</Link>.</p>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Montenegro is not a member of the European Union or the Schengen area, most teaching is in Montenegrin and English-taught programmes are limited, and a student residence permit does not give the right to live or work elsewhere in Europe. Montenegro tightened its rules on foreigners with amendments that took effect in January 2026. Some agents sell Montenegro as a back door to the EU; it is not, and such promises are a warning sign.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Montenegro Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Montenegro</h2>
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
