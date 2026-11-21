import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/montenegro/tuition-fees-in-montenegro-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Montenegro Tuition Fees Bangladeshis 2026 | Eammu Holidays",
  "description": "See 2026 tuition fee ranges in Montenegro for Bangladeshi students in EUR and BDT for public and private universities, plus extra costs. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/montenegro/tuition-fees-in-montenegro-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Montenegro Tuition Fees Bangladeshis 2026 | Eammu Holidays",
    "description": "See 2026 tuition fee ranges in Montenegro for Bangladeshi students in EUR and BDT for public and private universities, plus extra costs. Eammu Holidays.",
    "url": "https://eammu.com/study/montenegro/tuition-fees-in-montenegro-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Montenegro Tuition Fees Bangladeshis 2026 | Eammu Holidays",
    "description": "See 2026 tuition fee ranges in Montenegro for Bangladeshi students in EUR and BDT for public and private universities, plus extra costs. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Montenegro", "href": "/study/montenegro"}, {"name": "Tuition Fees", "href": "/study/montenegro/tuition-fees-in-montenegro-for-bangladeshi-students"}];
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
    "href": "/study/montenegro/cost-of-living-in-montenegro-for-bangladeshi-students",
    "title": "Cost of Living in Montenegro for Bangladeshi Students",
    "description": "Monthly budget breakdown for rent, food, transport and phone in Podgorica, Bar and other Montenegrin student cities."
  },
  {
    "href": "/study/montenegro/cheapest-universities-in-montenegro",
    "title": "Cheapest Universities in Montenegro",
    "description": "How to find low-cost Montenegrin universities and what to check beyond the headline tuition fee, including language and recognition."
  },
  {
    "href": "/study/montenegro/scholarships-in-montenegro-for-bangladeshi-students",
    "title": "Scholarships in Montenegro for Bangladeshi Students",
    "description": "Types of scholarships and funding available to Bangladeshi students in Montenegro and how to read offers carefully."
  },
  {
    "href": "/study/montenegro/student-visa-processing-time-and-cost",
    "title": "Montenegro Student Visa Processing Time and Cost",
    "description": "Typical processing time and the main fees Bangladeshi students should budget for in a Montenegro visa and permit application."
  }
];
const FAQS = [
  {
    "q": "Which Montenegrin universities are cheapest?",
    "a": "The public University of Montenegro is generally cheapest, but most programmes are in Montenegrin. Compare total cost including housing."
  },
  {
    "q": "Do I pay a full year upfront?",
    "a": "Many universities accept semester or instalment payments, but visa support may require a deposit. Confirm in your offer."
  },
  {
    "q": "Do fees increase every year?",
    "a": "Some universities fix fees for the whole programme. Ask in writing."
  },
  {
    "q": "Are fees refundable if my visa is refused?",
    "a": "Refund rules depend on the university. Read the refund clause before paying."
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
          "name": "Tuition Fees",
          "item": "https://eammu.com/study/montenegro/tuition-fees-in-montenegro-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Tuition Fees in Montenegro for Bangladeshi Students (2026)",
      "description": "See 2026 tuition fee ranges in Montenegro for Bangladeshi students in EUR and BDT for public and private universities, plus extra costs. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/montenegro/tuition-fees-in-montenegro-for-bangladeshi-students",
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
          "name": "Which Montenegrin universities are cheapest?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The public University of Montenegro is generally cheapest, but most programmes are in Montenegrin. Compare total cost including housing."
          }
        },
        {
          "@type": "Question",
          "name": "Do I pay a full year upfront?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many universities accept semester or instalment payments, but visa support may require a deposit. Confirm in your offer."
          }
        },
        {
          "@type": "Question",
          "name": "Do fees increase every year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some universities fix fees for the whole programme. Ask in writing."
          }
        },
        {
          "@type": "Question",
          "name": "Are fees refundable if my visa is refused?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Refund rules depend on the university. Read the refund clause before paying."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Tuition Fees in Montenegro for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A clear EUR-to-BDT look at what each level of study costs and which extra fees families often forget.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Typical tuition ranges</h2>
<p className="mt-4 leading-7 text-slate-700">Fees are set by each university and programme. The table gives indicative yearly tuition. For lower-cost options see <Link href="/study/montenegro/cheapest-universities-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cheapest universities in Montenegro</Link>, and for well-known institutions see <Link href="/study/montenegro/top-universities-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Montenegro</Link>.</p>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Institution type</th><th scope="col" className="px-3 py-2 text-left font-bold">Tuition per year (EUR)</th><th scope="col" className="px-3 py-2 text-left font-bold">Tuition per year (BDT)</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Public university (University of Montenegro)</td><td className="px-3 py-2 align-top">EUR 500 – 3,500</td><td className="px-3 py-2 align-top">Tk 0.7 – 4.9 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Private university bachelor&apos;s</td><td className="px-3 py-2 align-top">EUR 2,200 – 6,000</td><td className="px-3 py-2 align-top">Tk 3.1 – 8.4 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Private university master&apos;s</td><td className="px-3 py-2 align-top">EUR 2,000 – 6,000</td><td className="px-3 py-2 align-top">Tk 2.8 – 8.4 lakh</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 EUR = about Tk 140 and are indicative estimates for 2026–2027 based on published university fees. Fees, visa rules and exchange rates change, so always confirm with the university, the Montenegrin authorities or an Eammu Holidays counselor before paying. For example, one private university published undergraduate tuition of EUR 2,200 per year for 2026/27, fixed until graduation, and EUR 2,800 for some programmes; an English-taught programme at the public university&apos;s economics faculty has been listed at EUR 3,500.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">What changes the price</h2>
<p className="mt-4 leading-7 text-slate-700">Public universities are generally cheaper, but most of their programmes are in Montenegrin; see <Link href="/study/montenegro/public-vs-private-universities-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">public vs private universities in Montenegro</Link>. Private universities charge more and offer more English-taught programmes; see <Link href="/study/montenegro/montenegrin-language-and-english-taught-programs-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the language guide</Link>. Ask whether the fee is fixed for the whole programme.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">In taka: what it means for your family</h2>
<p className="mt-4 leading-7 text-slate-700">At Tk 140 per EUR, EUR 2,200 is about Tk 3.1 lakh a year. Add living costs from <Link href="/study/montenegro/cost-of-living-in-montenegro-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Montenegro for Bangladeshi students</Link> and the funds you must show; see <Link href="/study/montenegro/bank-solvency-requirements-for-montenegro-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bank solvency requirements</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Costs beyond tuition</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Application and registration fees.</li><li>Visa and residence permit costs, summarised in <Link href="/study/montenegro/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa processing time and cost</Link>.</li><li>Health insurance, dormitory deposits and books; see <Link href="/study/montenegro/student-accommodation-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student accommodation in Montenegro</Link>.</li><li>Winter clothing and a first-month emergency fund.</li></ul>
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
