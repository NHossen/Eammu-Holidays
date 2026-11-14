import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/cyprus/study-in-cyprus-after-ssc';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Cyprus After SSC (Bangladesh) 2026 | Eammu Holidays",
  "description": "Study in Cyprus after SSC in 2026: preparatory and foundation options, GPA needs, costs in BDT and the risks Bangladeshi students should check first.",
  "alternates": {
    "canonical": "https://eammu.com/study/cyprus/study-in-cyprus-after-ssc"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Cyprus After SSC (Bangladesh) 2026 | Eammu Holidays",
    "description": "Study in Cyprus after SSC in 2026: preparatory and foundation options, GPA needs, costs in BDT and the risks Bangladeshi students should check first.",
    "url": "https://eammu.com/study/cyprus/study-in-cyprus-after-ssc",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Cyprus After SSC (Bangladesh) 2026 | Eammu Holidays",
    "description": "Study in Cyprus after SSC in 2026: preparatory and foundation options, GPA needs, costs in BDT and the risks Bangladeshi students should check first."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Cyprus", "href": "/study/cyprus"}, {"name": "After SSC", "href": "/study/cyprus/study-in-cyprus-after-ssc"}];
const NAV = [
  {
    "label": "Cyprus Hub",
    "pages": [
      {
        "href": "/study/cyprus",
        "label": "Study in Cyprus Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/cyprus/study-in-cyprus-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/cyprus/study-in-cyprus-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/cyprus/tuition-fees-in-cyprus-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/cyprus/cost-of-living-in-cyprus-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/cyprus/cheapest-universities-in-cyprus",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/cyprus/top-universities-in-cyprus",
        "label": "Top Universities"
      },
      {
        "href": "/study/cyprus/public-vs-private-universities-in-cyprus",
        "label": "Public vs Private"
      },
      {
        "href": "/study/cyprus/scholarships-in-cyprus-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/cyprus/admission-requirements-in-cyprus-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/cyprus/study-gap-accepted-universities-in-cyprus",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/cyprus/study-in-cyprus-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/cyprus/study-in-cyprus-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/cyprus/cyprus-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/cyprus/north-cyprus-vs-republic-of-cyprus-for-students",
        "label": "North vs Republic of Cyprus"
      },
      {
        "href": "/study/cyprus/degree-recognition-and-accreditation-in-cyprus",
        "label": "Degree Recognition"
      },
      {
        "href": "/study/cyprus/mba-in-cyprus-for-bangladeshi-students",
        "label": "MBA in Cyprus"
      },
      {
        "href": "/study/cyprus/cse-and-it-courses-in-cyprus",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/cyprus/student-accommodation-in-cyprus",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, Permits & Work Rules",
    "pages": [
      {
        "href": "/study/cyprus/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/cyprus/residence-permit-and-arrival-guide-cyprus",
        "label": "Residence Permit & Arrival"
      },
      {
        "href": "/study/cyprus/bank-solvency-requirements-for-cyprus-student-visa",
        "label": "Bank Solvency"
      },
      {
        "href": "/study/cyprus/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/cyprus/part-time-job-and-post-study-work-rules-in-cyprus",
        "label": "Work Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/cyprus/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/cyprus/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/cyprus/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/cyprus/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/cyprus/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/cyprus/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/cyprus/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/cyprus/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/cyprus/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/cyprus/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/cyprus/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/cyprus/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/cyprus/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/cyprus/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/cyprus/study-in-cyprus-after-diploma",
    "title": "Study in Cyprus After Diploma",
    "description": "Credit exemption and degree entry options for Bangladeshi polytechnic and diploma holders in Cyprus."
  },
  {
    "href": "/study/cyprus/admission-requirements-in-cyprus-for-bangladeshi-students",
    "title": "Admission Requirements in Cyprus for Bangladeshi Students",
    "description": "SSC, HSC, diploma, English and document requirements for Cypriot universities explained for Bangladeshi applicants."
  },
  {
    "href": "/study/cyprus/tuition-fees-in-cyprus-for-bangladeshi-students",
    "title": "Tuition Fees in Cyprus for Bangladeshi Students",
    "description": "Realistic tuition ranges in EUR and BDT for foundation, bachelor’s and master’s programmes in Northern Cyprus and the Republic of Cyprus."
  },
  {
    "href": "/study/cyprus/cheapest-universities-in-cyprus",
    "title": "Cheapest Universities in Cyprus",
    "description": "How to find low-cost Cypriot universities and what to check beyond the headline tuition fee, including recognition and visa risks."
  }
];
const FAQS = [
  {
    "q": "Can I go directly to a bachelor's after SSC?",
    "a": "Usually no. You normally need HSC or a preparatory or foundation route."
  },
  {
    "q": "What GPA do I need after SSC?",
    "a": "Many private universities set modest minimums, but each university decides."
  },
  {
    "q": "Is a preparatory year compulsory?",
    "a": "Only if the university requires it for your English or subject level."
  },
  {
    "q": "Can I work while studying after SSC?",
    "a": "Student work is limited and regulated. See the work guide."
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
          "name": "Cyprus",
          "item": "https://eammu.com/study/cyprus"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "After SSC",
          "item": "https://eammu.com/study/cyprus/study-in-cyprus-after-ssc"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Cyprus After SSC: Routes for Bangladeshi Students",
      "description": "Study in Cyprus after SSC in 2026: preparatory and foundation options, GPA needs, costs in BDT and the risks Bangladeshi students should check first.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/cyprus/study-in-cyprus-after-ssc",
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
          "name": "Can I go directly to a bachelor's after SSC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually no. You normally need HSC or a preparatory or foundation route."
          }
        },
        {
          "@type": "Question",
          "name": "What GPA do I need after SSC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many private universities set modest minimums, but each university decides."
          }
        },
        {
          "@type": "Question",
          "name": "Is a preparatory year compulsory?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only if the university requires it for your English or subject level."
          }
        },
        {
          "@type": "Question",
          "name": "Can I work while studying after SSC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Student work is limited and regulated. See the work guide."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Cyprus 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Cyprus After SSC: Routes for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">SSC alone is generally not enough for direct bachelor’s entry, but Cypriot universities offer pathways. Check each one carefully.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Cyprus guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Cyprus guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Your main options after SSC</h2>
<p className="mt-4 leading-7 text-slate-700">Many universities treat 12 years of schooling as the standard for bachelor&apos;s entry, so SSC graduates usually need HSC, a preparatory or foundation year, or an approved pathway. Read the <Link href="/study/cyprus/admission-requirements-in-cyprus-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements for Bangladeshi students</Link> and our broader guide to &#123;&#123;from-bd|studying in Cyprus from Bangladesh&#125;&#125;.</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Complete HSC first, which gives the widest choice of universities.</li><li>Join a preparatory or foundation year where the university offers it.</li><li>Consider a diploma route; see <Link href="/study/cyprus/study-in-cyprus-after-diploma" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Cyprus after diploma</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Costs and timelines</h2>
<p className="mt-4 leading-7 text-slate-700">Preparatory years cost about EUR 2,500 to 6,000 in Northern Cyprus and EUR 4,000 to 8,000 in the Republic (about Tk 3.5 to 11.2 lakh). Full details are in <Link href="/study/cyprus/tuition-fees-in-cyprus-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Cyprus for Bangladeshi students</Link>, and everyday spending in <Link href="/study/cyprus/cost-of-living-in-cyprus-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Cyprus</Link>.</p>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 EUR = about Tk 140 and 1 USD = about Tk 122 and are indicative estimates for 2026–2027. Fees, visa rules and exchange rates change, so always confirm with the university, the relevant Cypriot authority or an Eammu Holidays counselor before paying.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Choosing the right pathway</h2>
<p className="mt-4 leading-7 text-slate-700">A preparatory year adds time and cost, so compare it with finishing HSC. Verify that the pathway leads to a recognised degree; see <Link href="/study/cyprus/degree-recognition-and-accreditation-in-cyprus" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">degree recognition in Cyprus</Link>. For tight budgets, review <Link href="/study/cyprus/cheapest-universities-in-cyprus" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cheapest universities in Cyprus</Link>, and if you have a break after SSC, see <Link href="/study/cyprus/study-gap-accepted-universities-in-cyprus" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">gap-accepted universities in Cyprus</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Visa and age considerations</h2>
<p className="mt-4 leading-7 text-slate-700">Younger applicants may face extra guardian and housing checks. Review <Link href="/study/cyprus/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa requirements for Bangladesh</Link> and confirm the <Link href="/study/cyprus/cyprus-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake</Link> that fits your results timeline.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Cyprus Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Cyprus</h2>
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
