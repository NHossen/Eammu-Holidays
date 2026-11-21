import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/finland/part-time-job-and-post-study-work-rules-in-finland';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Part-Time Job and Work Rules Finland 2026 | Eammu Holidays",
  "description": "Part-time work and post-study rules in Finland for Bangladeshi students in 2026: 30 hours a week, the two-year job-search permit and PR changes. Eammu.",
  "alternates": {
    "canonical": "https://eammu.com/study/finland/part-time-job-and-post-study-work-rules-in-finland"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Part-Time Job and Work Rules Finland 2026 | Eammu Holidays",
    "description": "Part-time work and post-study rules in Finland for Bangladeshi students in 2026: 30 hours a week, the two-year job-search permit and PR changes. Eammu.",
    "url": "https://eammu.com/study/finland/part-time-job-and-post-study-work-rules-in-finland",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Part-Time Job and Work Rules Finland 2026 | Eammu Holidays",
    "description": "Part-time work and post-study rules in Finland for Bangladeshi students in 2026: 30 hours a week, the two-year job-search permit and PR changes. Eammu."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Finland", "href": "/study/finland"}, {"name": "Work & Post-Study Rules", "href": "/study/finland/part-time-job-and-post-study-work-rules-in-finland"}];
const NAV = [
  {
    "label": "Finland Hub",
    "pages": [
      {
        "href": "/study/finland",
        "label": "Study in Finland Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/finland/study-in-finland-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/finland/study-in-finland-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/finland/tuition-fees-in-finland-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/finland/cost-of-living-in-finland-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/finland/cheapest-universities-in-finland",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/finland/top-universities-in-finland",
        "label": "Top Universities"
      },
      {
        "href": "/study/finland/universities-vs-universities-of-applied-sciences-in-finland",
        "label": "Universities vs UAS"
      },
      {
        "href": "/study/finland/scholarships-in-finland-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/finland/admission-requirements-in-finland-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/finland/study-gap-accepted-universities-in-finland",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/finland/study-in-finland-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/finland/study-in-finland-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/finland/finland-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/finland/studyinfo-joint-application-guide-for-finland",
        "label": "Studyinfo Application Guide"
      },
      {
        "href": "/study/finland/degree-recognition-and-eligibility-in-finland",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/finland/cse-and-it-courses-in-finland",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/finland/mba-in-finland-for-bangladeshi-students",
        "label": "MBA & Master's"
      },
      {
        "href": "/study/finland/student-accommodation-in-finland",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, Permit & Work Rules",
    "pages": [
      {
        "href": "/study/finland/student-visa-requirements-bangladesh",
        "label": "Residence Permit Requirements"
      },
      {
        "href": "/study/finland/enter-finland-and-migri-application-guide",
        "label": "Enter Finland & Migri Guide"
      },
      {
        "href": "/study/finland/bank-solvency-requirements-for-finland-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/finland/student-visa-processing-time-and-cost",
        "label": "Permit Time & Cost"
      },
      {
        "href": "/study/finland/part-time-job-and-post-study-work-rules-in-finland",
        "label": "Work & Post-Study Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/finland/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/finland/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/finland/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/finland/cost-of-living-in-finland-for-bangladeshi-students",
    "title": "Cost of Living in Finland for Bangladeshi Students",
    "description": "Monthly budget breakdown for rent, food, transport and phone in Helsinki, Tampere, Turku, Oulu and other Finnish student cities."
  },
  {
    "href": "/study/finland/bank-solvency-requirements-for-finland-student-visa",
    "title": "Proof of Funds Requirements for a Finland Study Permit",
    "description": "How much money proof Bangladeshi students must show for a Finnish residence permit and how to present bank statements."
  },
  {
    "href": "/study/finland/cse-and-it-courses-in-finland",
    "title": "CSE and IT Courses in Finland",
    "description": "Computer science, software engineering, data science and IT study options in Finland for Bangladeshi students."
  },
  {
    "href": "/study/finland/mba-in-finland-for-bangladeshi-students",
    "title": "MBA and Master's Programmes in Finland for Bangladeshi Students",
    "description": "MBA and master’s entry rules, fees in BDT, work-experience expectations and funding for Bangladeshi applicants in Finland."
  }
];
const FAQS = [
  {
    "q": "How many hours can I work in Finland?",
    "a": "On average 30 hours a week over the year, and full-time in practical training or thesis work."
  },
  {
    "q": "Can I stay after graduation?",
    "a": "You can apply for a permit to look for work or start a business for up to two years, within five years of graduating."
  },
  {
    "q": "Is permanent residence easy?",
    "a": "Not automatically. Rules tightened in January 2026, and requirements include years of residence and work history."
  },
  {
    "q": "Do I need Finnish to work?",
    "a": "Many jobs need Finnish or Swedish, though some tech and international roles use English."
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
          "name": "Finland",
          "item": "https://eammu.com/study/finland"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Work & Post-Study Rules",
          "item": "https://eammu.com/study/finland/part-time-job-and-post-study-work-rules-in-finland"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Part-Time Work and Post-Study Rules in Finland (2026)",
      "description": "Part-time work and post-study rules in Finland for Bangladeshi students in 2026: 30 hours a week, the two-year job-search permit and PR changes. Eammu.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/finland/part-time-job-and-post-study-work-rules-in-finland",
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
          "name": "How many hours can I work in Finland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "On average 30 hours a week over the year, and full-time in practical training or thesis work."
          }
        },
        {
          "@type": "Question",
          "name": "Can I stay after graduation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can apply for a permit to look for work or start a business for up to two years, within five years of graduating."
          }
        },
        {
          "@type": "Question",
          "name": "Is permanent residence easy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Rules tightened in January 2026, and requirements include years of residence and work history."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need Finnish to work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many jobs need Finnish or Swedish, though some tech and international roles use English."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Finland 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Part-Time Work and Post-Study Rules in Finland (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Finland has generous student work rules and a two-year job-search permit, but permanent residence is harder than before.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Finland guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Finland guides</summary>
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
<p className="mt-4 leading-7 text-slate-700">Students with a residence permit for studies may work on average 30 hours a week in any field, averaged over the calendar year, and full-time in practical training or thesis work, according to Migri. The limit was raised from 25 to 30 hours in 2022. Because wages and hours vary, plan your budget using <Link href="/study/finland/bank-solvency-requirements-for-finland-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds requirements</Link> and <Link href="/study/finland/cost-of-living-in-finland-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Finland for Bangladeshi students</Link>. Many students use part-time work to help with living costs, but you cannot use work to prove the funds for your first permit.</p>
<p className="mt-4 leading-7 text-slate-700">Finnish or Swedish skills widen your job options; check language support at your institution.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">After graduation: the two-year job-search permit</h2>
<p className="mt-4 leading-7 text-slate-700">After completing a degree in Finland, you can apply for a residence permit to look for work or start a business, granted for up to two years, within five years of graduation, and even from outside Finland. You must show funds and a completed degree, and this permit allows full-time work while you search. If you already have a job offer, a work-based permit may be better. Fields such as <Link href="/study/finland/cse-and-it-courses-in-finland" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT</Link> and business (<Link href="/study/finland/mba-in-finland-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MBA and master&apos;s programmes in Finland</Link>) may offer better chances.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Permanent residence: rules tightened in 2026</h2>
<p className="mt-4 leading-7 text-slate-700">Amendments to the Aliens Act that took effect on 8 January 2026 changed the rules for permanent residence: for most people, six years of continuous residence plus two years of work history are now required, with a shorter route for some graduates who meet language requirements, and fees rose. Citizenship also has language requirements. Confirm the current rules with Migri before relying on a PR plan, and keep your finances ready for a return home.</p>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Immigration policies change. Check Migri.fi and official Finnish sources before relying on any work or PR route.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Working illegally is risky</h2>
<p className="mt-4 leading-7 text-slate-700">Working beyond the allowed hours or without authorisation can affect your permit and future applications. Review your obligations in <Link href="/study/finland/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">residence permit requirements for Bangladeshi students</Link>.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Finland Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Finland</h2>
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
