import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/lithuania/part-time-job-and-post-study-work-rules-in-lithuania';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Job and Work Rules in Lithuania Guide 2026 | Eammu Holidays",
  "description": "Part-time job and post-study work rules in Lithuania for Bangladeshi students in 2026: the 20-hour cap for new bachelor permits and staying after study.",
  "alternates": {
    "canonical": "https://eammu.com/study/lithuania/part-time-job-and-post-study-work-rules-in-lithuania"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Job and Work Rules in Lithuania Guide 2026 | Eammu Holidays",
    "description": "Part-time job and post-study work rules in Lithuania for Bangladeshi students in 2026: the 20-hour cap for new bachelor permits and staying after study.",
    "url": "https://eammu.com/study/lithuania/part-time-job-and-post-study-work-rules-in-lithuania",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Job and Work Rules in Lithuania Guide 2026 | Eammu Holidays",
    "description": "Part-time job and post-study work rules in Lithuania for Bangladeshi students in 2026: the 20-hour cap for new bachelor permits and staying after study."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Lithuania", "href": "/study/lithuania"}, {"name": "Work Rules", "href": "/study/lithuania/part-time-job-and-post-study-work-rules-in-lithuania"}];
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
    "href": "/study/lithuania/cost-of-living-in-lithuania-for-bangladeshi-students",
    "title": "Cost of Living in Lithuania for Bangladeshi Students",
    "description": "Monthly budget breakdown for rent, food, transport and phone in Vilnius, Kaunas, Klaipėda and other Lithuanian student cities."
  },
  {
    "href": "/study/lithuania/bank-solvency-requirements-for-lithuania-student-visa",
    "title": "Proof of Funds Requirements for a Lithuania Study Permit",
    "description": "How much money proof Bangladeshi students must show for a Lithuanian study permit and how to present bank statements."
  },
  {
    "href": "/study/lithuania/cse-and-it-courses-in-lithuania",
    "title": "CSE and IT Courses in Lithuania",
    "description": "Computer science, software and IT study options in Lithuania for Bangladeshi students, with the local tech sector."
  },
  {
    "href": "/study/lithuania/business-and-management-degrees-in-lithuania",
    "title": "Business and Management Degrees in Lithuania",
    "description": "Business, management, economics and finance study options in Lithuania for Bangladeshi students, with costs and career realities."
  }
];
const FAQS = [
  {
    "q": "Can I work part-time on a student permit?",
    "a": "Yes, but first- and second-year bachelor's students on permits issued from 22 May 2026 are limited to 20 hours a week, with exceptions for the summer holiday and practical training."
  },
  {
    "q": "Can I stay in Lithuania after graduation?",
    "a": "Staying generally needs an employer and a work-based permit. Graduates are exempt from the employment quota within five years of graduation."
  },
  {
    "q": "Does a Lithuanian permit let me work elsewhere in the EU?",
    "a": "No. A Lithuanian permit gives no right to work in other EU countries."
  },
  {
    "q": "Do I need Lithuanian to find a job?",
    "a": "For many local jobs, yes. English-only roles are limited, mainly in IT and some business services."
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
          "name": "Work Rules",
          "item": "https://eammu.com/study/lithuania/part-time-job-and-post-study-work-rules-in-lithuania"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Part-Time Job and Post-Study Work Rules in Lithuania (2026)",
      "description": "Part-time job and post-study work rules in Lithuania for Bangladeshi students in 2026: the 20-hour cap for new bachelor permits and staying after study.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/lithuania/part-time-job-and-post-study-work-rules-in-lithuania",
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
          "name": "Can I work part-time on a student permit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but first- and second-year bachelor's students on permits issued from 22 May 2026 are limited to 20 hours a week, with exceptions for the summer holiday and practical training."
          }
        },
        {
          "@type": "Question",
          "name": "Can I stay in Lithuania after graduation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Staying generally needs an employer and a work-based permit. Graduates are exempt from the employment quota within five years of graduation."
          }
        },
        {
          "@type": "Question",
          "name": "Does a Lithuanian permit let me work elsewhere in the EU?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A Lithuanian permit gives no right to work in other EU countries."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need Lithuanian to find a job?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For many local jobs, yes. English-only roles are limited, mainly in IT and some business services."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Part-Time Job and Post-Study Work Rules in Lithuania (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Lithuania cut student work hours in May 2026. Plan your finances without relying on wages.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">During your studies</h2>
<p className="mt-4 leading-7 text-slate-700">A Lithuanian study permit allows students to work without a separate work permit. Until 2026 the limit for students was commonly described as 40 hours per week, but amendments that took effect on 22 May 2026 cap first- and second-year bachelor&apos;s students on permits issued from that date at 20 hours per week, except during the summer holiday set by the institution and during practical training in the programme. Master&apos;s, doctoral and later-year students are not subject to the same cap, and students whose permits were issued earlier are exempt. Confirm which rule applies to you with the Migration Department and your university. Plan your budget using <Link href="/study/lithuania/bank-solvency-requirements-for-lithuania-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds requirements</Link> and <Link href="/study/lithuania/cost-of-living-in-lithuania-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Lithuania for Bangladeshi students</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">Universities are also being pressed to expel students who earn no credits, so studying must remain your priority.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Permit conditions and the 2026 tightening</h2>
<p className="mt-4 leading-7 text-slate-700">Lithuania has tightened its rules for international students: from 22 May 2026, first- and second-year bachelor&apos;s students on new permits may work only 20 hours a week, from 1 November 2026 applying for a study permit from inside Lithuania after entering on a Schengen visa is restricted, and the Migration Department is checking universities and students more closely. A Lithuanian permit gives no right to work elsewhere in the EU, and agents who sell Lithuania as an easy route into Europe are a warning sign.</p>
<p className="mt-4 leading-7 text-slate-700">Proposals and amendments also address a cap on total years of study permits, family reunification for master&apos;s students and language tests for permit renewals. Check the current position on the Migration Department website; see <Link href="/study/lithuania/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">temporary residence permit requirements</Link>.</p>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Immigration policies change often. Check official Lithuanian sources before relying on any work or post-study route.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">After graduation</h2>
<p className="mt-4 leading-7 text-slate-700">Lithuania does not offer an automatic post-study work visa. Graduates who want to stay generally need a job and a work-based permit, and the employment quota for non-EU workers, about 24,700 for 2026, does not apply to graduates of Lithuanian studies within five years after graduation, which can help. Fields such as <Link href="/study/lithuania/cse-and-it-courses-in-lithuania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT</Link> and <Link href="/study/lithuania/business-and-management-degrees-in-lithuania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">business</Link> may offer more opportunities, but do not treat staying as guaranteed.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Better ways to reduce costs</h2>
<p className="mt-4 leading-7 text-slate-700">Choose affordable options from <Link href="/study/lithuania/cheapest-universities-in-lithuania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cheapest universities in Lithuania</Link>, check discounts in <Link href="/study/lithuania/scholarships-in-lithuania-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Lithuania</Link> and consider dormitory housing in <Link href="/study/lithuania/student-accommodation-in-lithuania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student accommodation in Lithuania</Link>.</p>
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
