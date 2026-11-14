import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/cyprus/student-accommodation-in-cyprus';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Student Accommodation in Cyprus Guide 2026 | Eammu Holidays",
  "description": "Student accommodation in Cyprus for Bangladeshi students in 2026: dorms, shared apartments and rent in EUR and BDT, plus safe housing tips. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/cyprus/student-accommodation-in-cyprus"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Student Accommodation in Cyprus Guide 2026 | Eammu Holidays",
    "description": "Student accommodation in Cyprus for Bangladeshi students in 2026: dorms, shared apartments and rent in EUR and BDT, plus safe housing tips. Eammu Holidays.",
    "url": "https://eammu.com/study/cyprus/student-accommodation-in-cyprus",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Student Accommodation in Cyprus Guide 2026 | Eammu Holidays",
    "description": "Student accommodation in Cyprus for Bangladeshi students in 2026: dorms, shared apartments and rent in EUR and BDT, plus safe housing tips. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Cyprus", "href": "/study/cyprus"}, {"name": "Student Accommodation", "href": "/study/cyprus/student-accommodation-in-cyprus"}];
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
    "href": "/study/cyprus/cost-of-living-in-cyprus-for-bangladeshi-students",
    "title": "Cost of Living in Cyprus for Bangladeshi Students",
    "description": "Monthly budget breakdown for rent, food, transport and phone in Nicosia, Famagusta, Kyrenia, Limassol and Larnaca."
  },
  {
    "href": "/study/cyprus/cheapest-universities-in-cyprus",
    "title": "Cheapest Universities in Cyprus",
    "description": "How to find low-cost Cypriot universities and what to check beyond the headline tuition fee, including recognition and visa risks."
  },
  {
    "href": "/study/cyprus/residence-permit-and-arrival-guide-cyprus",
    "title": "Residence Permit and Arrival Guide for Cyprus",
    "description": "What happens after admission: entry permit, arrival, biometrics and residence permit stages for students in Cyprus."
  },
  {
    "href": "/study/cyprus/part-time-job-and-post-study-work-rules-in-cyprus",
    "title": "Part-Time Job and Post-Study Work Rules in Cyprus",
    "description": "What international students may and may not do regarding part-time work and staying after graduation in Cyprus."
  }
];
const FAQS = [
  {
    "q": "Is a university dormitory cheaper?",
    "a": "Often yes, especially in Northern Cyprus, but availability is limited."
  },
  {
    "q": "How much deposit is normal?",
    "a": "Commonly one or two months’ rent plus utility deposits for private rentals."
  },
  {
    "q": "Is housing safe for international students?",
    "a": "Cyprus is generally safe, but use verified listings and written contracts."
  },
  {
    "q": "Can I live with Bangladeshi friends?",
    "a": "Yes, many students share apartments, but check the tenancy and occupancy rules."
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
          "name": "Student Accommodation",
          "item": "https://eammu.com/study/cyprus/student-accommodation-in-cyprus"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Student Accommodation in Cyprus for Bangladeshi Students (2026)",
      "description": "Student accommodation in Cyprus for Bangladeshi students in 2026: dorms, shared apartments and rent in EUR and BDT, plus safe housing tips. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/cyprus/student-accommodation-in-cyprus",
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
          "name": "Is a university dormitory cheaper?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often yes, especially in Northern Cyprus, but availability is limited."
          }
        },
        {
          "@type": "Question",
          "name": "How much deposit is normal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commonly one or two months’ rent plus utility deposits for private rentals."
          }
        },
        {
          "@type": "Question",
          "name": "Is housing safe for international students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cyprus is generally safe, but use verified listings and written contracts."
          }
        },
        {
          "@type": "Question",
          "name": "Can I live with Bangladeshi friends?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, many students share apartments, but check the tenancy and occupancy rules."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Student Accommodation in Cyprus for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Where you live affects both your budget and your permit paperwork. Here are the options in both systems.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Main housing options</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Option</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical rent (EUR / month)</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical rent (BDT)</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">University dormitory (shared)</td><td className="px-3 py-2 align-top">EUR 120 – 350</td><td className="px-3 py-2 align-top">Tk 16,800 – 49,000</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Shared apartment room</td><td className="px-3 py-2 align-top">EUR 200 – 450</td><td className="px-3 py-2 align-top">Tk 28,000 – 63,000</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Private studio or flat</td><td className="px-3 py-2 align-top">EUR 350 – 800</td><td className="px-3 py-2 align-top">Tk 49,000 – 1,12,000</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 EUR = about Tk 140 and 1 USD = about Tk 122 and are indicative estimates for 2026–2027. Fees, visa rules and exchange rates change, so always confirm with the university, the relevant Cypriot authority or an Eammu Holidays counselor before paying.</p>
<p className="mt-4 leading-7 text-slate-700">Rent is the largest part of your monthly budget; see the full breakdown in <Link href="/study/cyprus/cost-of-living-in-cyprus-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Cyprus for Bangladeshi students</Link>. Lower-cost options appear in <Link href="/study/cyprus/cheapest-universities-in-cyprus" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cheapest universities in Cyprus</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Why housing matters for your permit</h2>
<p className="mt-4 leading-7 text-slate-700">Authorities in the Republic of Cyprus ask for proof of address and accommodation when processing the temporary residence permit, and university housing makes this easier; see the <Link href="/study/cyprus/residence-permit-and-arrival-guide-cyprus" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">residence permit and arrival guide</Link>. Keep a written lease and receipts for every payment.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Tips for safe renting</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>View the room or take a verified video tour before paying a deposit.</li><li>Get a written agreement and a receipt for every payment.</li><li>Check distance to campus, supermarkets and halal food.</li><li>Avoid paying large sums to unverified social media listings.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Plan accommodation with your arrival</h2>
<p className="mt-4 leading-7 text-slate-700">Book temporary housing before arrival and finalise long-term options after you reach campus. Because <Link href="/study/cyprus/part-time-job-and-post-study-work-rules-in-cyprus" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student work rules</Link> limit extra income, do not plan rent around a job. Compare rent with <Link href="/study/cyprus/tuition-fees-in-cyprus-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Cyprus</Link> to see your total yearly cost.</p>
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
