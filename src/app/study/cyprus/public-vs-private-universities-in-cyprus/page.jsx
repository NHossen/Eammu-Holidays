import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/cyprus/public-vs-private-universities-in-cyprus';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Public vs Private Universities Cyprus 2026 | Eammu Holidays",
  "description": "Public vs private universities in Cyprus for Bangladeshi students: compare fees, entry rules, language of instruction and visa support in 2026. Eammu.",
  "alternates": {
    "canonical": "https://eammu.com/study/cyprus/public-vs-private-universities-in-cyprus"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Public vs Private Universities Cyprus 2026 | Eammu Holidays",
    "description": "Public vs private universities in Cyprus for Bangladeshi students: compare fees, entry rules, language of instruction and visa support in 2026. Eammu.",
    "url": "https://eammu.com/study/cyprus/public-vs-private-universities-in-cyprus",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Public vs Private Universities Cyprus 2026 | Eammu Holidays",
    "description": "Public vs private universities in Cyprus for Bangladeshi students: compare fees, entry rules, language of instruction and visa support in 2026. Eammu."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Cyprus", "href": "/study/cyprus"}, {"name": "Public vs Private", "href": "/study/cyprus/public-vs-private-universities-in-cyprus"}];
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
    "href": "/study/cyprus/top-universities-in-cyprus",
    "title": "Top Universities in Cyprus",
    "description": "Overview of well-known public and private universities in the Republic of Cyprus and Northern Cyprus and how to choose among them."
  },
  {
    "href": "/study/cyprus/cheapest-universities-in-cyprus",
    "title": "Cheapest Universities in Cyprus",
    "description": "How to find low-cost Cypriot universities and what to check beyond the headline tuition fee, including recognition and visa risks."
  },
  {
    "href": "/study/cyprus/tuition-fees-in-cyprus-for-bangladeshi-students",
    "title": "Tuition Fees in Cyprus for Bangladeshi Students",
    "description": "Realistic tuition ranges in EUR and BDT for foundation, bachelor’s and master’s programmes in Northern Cyprus and the Republic of Cyprus."
  },
  {
    "href": "/study/cyprus/admission-requirements-in-cyprus-for-bangladeshi-students",
    "title": "Admission Requirements in Cyprus for Bangladeshi Students",
    "description": "SSC, HSC, diploma, English and document requirements for Cypriot universities explained for Bangladeshi applicants."
  }
];
const FAQS = [
  {
    "q": "Are private university degrees valid in Cyprus?",
    "a": "In the Republic, accredited private universities award recognised degrees. In Northern Cyprus, recognition depends on the northern and Turkish accreditation system and the country where you plan to use the degree."
  },
  {
    "q": "Do public universities accept Bangladeshi students?",
    "a": "Yes, but places for international students are limited and competition is higher."
  },
  {
    "q": "Which is better for engineering?",
    "a": "Both offer options. Check accreditation, labs and professional recognition."
  },
  {
    "q": "Is a private degree harder to use for jobs?",
    "a": "Employers care about reputation, skills and recognition. Check each degree’s acceptance in your target market."
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
          "name": "Public vs Private",
          "item": "https://eammu.com/study/cyprus/public-vs-private-universities-in-cyprus"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Public vs Private Universities in Cyprus: Which Should You Choose?",
      "description": "Public vs private universities in Cyprus for Bangladeshi students: compare fees, entry rules, language of instruction and visa support in 2026. Eammu.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/cyprus/public-vs-private-universities-in-cyprus",
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
          "name": "Are private university degrees valid in Cyprus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In the Republic, accredited private universities award recognised degrees. In Northern Cyprus, recognition depends on the northern and Turkish accreditation system and the country where you plan to use the degree."
          }
        },
        {
          "@type": "Question",
          "name": "Do public universities accept Bangladeshi students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but places for international students are limited and competition is higher."
          }
        },
        {
          "@type": "Question",
          "name": "Which is better for engineering?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both offer options. Check accreditation, labs and professional recognition."
          }
        },
        {
          "@type": "Question",
          "name": "Is a private degree harder to use for jobs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Employers care about reputation, skills and recognition. Check each degree’s acceptance in your target market."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Public vs Private Universities in Cyprus: Which Should You Choose?</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">The Republic of Cyprus has a small public sector and many private universities; Northern Cyprus has one state university and many private ones.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Key differences at a glance</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Factor</th><th scope="col" className="px-3 py-2 text-left font-bold">Public universities</th><th scope="col" className="px-3 py-2 text-left font-bold">Private universities</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Entry</td><td className="px-3 py-2 align-top">More competitive; limited international seats</td><td className="px-3 py-2 align-top">More flexible; many entry routes</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tuition</td><td className="px-3 py-2 align-top">Lower for EU students; non-EU fees differ</td><td className="px-3 py-2 align-top">Wide range; see <Link href="/study/cyprus/tuition-fees-in-cyprus-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Cyprus</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Language</td><td className="px-3 py-2 align-top">Some programmes partly in Greek or Turkish</td><td className="px-3 py-2 align-top">Mostly English-medium</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Intakes</td><td className="px-3 py-2 align-top">Mainly one main intake</td><td className="px-3 py-2 align-top">September and February (<Link href="/study/cyprus/cyprus-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cyprus intake dates</Link>)</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Scholarships</td><td className="px-3 py-2 align-top">Limited for internationals</td><td className="px-3 py-2 align-top">Merit discounts are common</td></tr></tbody></table></div>
<p className="mt-4 leading-7 text-slate-700">Most Bangladeshi students apply to private universities because entry is more flexible. See <Link href="/study/cyprus/top-universities-in-cyprus" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Cyprus</Link> and <Link href="/study/cyprus/cheapest-universities-in-cyprus" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the cheapest universities in Cyprus</Link> for names and budget options.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">The two systems and what “public” means</h2>
<p className="mt-4 leading-7 text-slate-700">The University of Cyprus and the Cyprus University of Technology are public in the Republic. In Northern Cyprus, Eastern Mediterranean University is the main state university. Because the systems differ, read <Link href="/study/cyprus/north-cyprus-vs-republic-of-cyprus-for-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">North Cyprus vs Republic of Cyprus for students</Link> before comparing public and private options.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Entry, English and gap rules</h2>
<p className="mt-4 leading-7 text-slate-700">Public universities usually require stronger grades and formal English proof, while private ones may accept alternatives; see &#123;&#123;no-ielts|study in Cyprus without IELTS&#125;&#125; and <Link href="/study/cyprus/study-gap-accepted-universities-in-cyprus" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">gap-accepted universities in Cyprus</Link>. Review the <Link href="/study/cyprus/admission-requirements-in-cyprus-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link> before applying.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Which should you pick?</h2>
<p className="mt-4 leading-7 text-slate-700">Choose public if you have strong grades, can meet language requirements and want EU-regulated study. Choose private for flexible entry, English teaching and merit discounts, while verifying recognition in <Link href="/study/cyprus/degree-recognition-and-accreditation-in-cyprus" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the degree recognition guide</Link>. Eammu Holidays compares both through <Link href="/study/cyprus/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">our Dhaka counseling desk</Link>.</p>
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
