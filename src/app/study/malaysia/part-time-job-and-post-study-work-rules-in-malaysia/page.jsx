import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/malaysia/part-time-job-and-post-study-work-rules-in-malaysia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Part-Time Job and Post-Study Work in Malaysia 2026 | Eammu",
  "description": "Part-time job and post-study work rules in Malaysia for Bangladeshi students in 2026: eligibility, hours, approval and what happens after graduation.",
  "alternates": {
    "canonical": "https://eammu.com/study/malaysia/part-time-job-and-post-study-work-rules-in-malaysia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Part-Time Job and Post-Study Work in Malaysia 2026 | Eammu",
    "description": "Part-time job and post-study work rules in Malaysia for Bangladeshi students in 2026: eligibility, hours, approval and what happens after graduation.",
    "url": "https://eammu.com/study/malaysia/part-time-job-and-post-study-work-rules-in-malaysia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Part-Time Job and Post-Study Work in Malaysia 2026 | Eammu",
    "description": "Part-time job and post-study work rules in Malaysia for Bangladeshi students in 2026: eligibility, hours, approval and what happens after graduation."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Malaysia", "href": "/study/malaysia"}, {"name": "Work Rules", "href": "/study/malaysia/part-time-job-and-post-study-work-rules-in-malaysia"}];
const NAV = [
  {
    "label": "Malaysia Hub",
    "pages": [
      {
        "href": "/study/malaysia",
        "label": "Study in Malaysia Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/malaysia/study-in-malaysia-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/malaysia/study-in-malaysia-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/malaysia/tuition-fees-in-malaysia-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/malaysia/cost-of-living-in-malaysia-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/malaysia/cheapest-universities-in-malaysia",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/malaysia/top-universities-in-malaysia",
        "label": "Top Universities"
      },
      {
        "href": "/study/malaysia/public-vs-private-universities-in-malaysia",
        "label": "Public vs Private"
      },
      {
        "href": "/study/malaysia/scholarships-in-malaysia-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/malaysia/study-gap-accepted-universities-in-malaysia",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/malaysia/study-in-malaysia-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/malaysia/study-in-malaysia-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/malaysia/malaysia-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/malaysia/mbbs-in-malaysia-for-bangladeshi-students",
        "label": "MBBS in Malaysia"
      },
      {
        "href": "/study/malaysia/mba-in-malaysia-for-bangladeshi-students",
        "label": "MBA in Malaysia"
      },
      {
        "href": "/study/malaysia/cse-and-it-courses-in-malaysia",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/malaysia/credit-transfer-from-malaysia-to-uk-australia",
        "label": "Credit Transfer to UK/Australia"
      },
      {
        "href": "/study/malaysia/student-accommodation-in-malaysia",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, EMGS & Work Rules",
    "pages": [
      {
        "href": "/study/malaysia/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/malaysia/emgs-visa-process-and-tracking-guide",
        "label": "EMGS Process & Tracking"
      },
      {
        "href": "/study/malaysia/bank-solvency-requirements-for-malaysia-student-visa",
        "label": "Bank Solvency"
      },
      {
        "href": "/study/malaysia/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/malaysia/part-time-job-and-post-study-work-rules-in-malaysia",
        "label": "Work Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/malaysia/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/malaysia/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/malaysia/cost-of-living-in-malaysia-for-bangladeshi-students",
    "title": "Cost of Living in Malaysia for Bangladeshi Students",
    "description": "Monthly budget breakdown for rent, food, transport and phone in Kuala Lumpur, Penang, Johor and other student cities."
  },
  {
    "href": "/study/malaysia/bank-solvency-requirements-for-malaysia-student-visa",
    "title": "Bank Solvency Requirements for Malaysia Student Visa",
    "description": "How much money proof Bangladeshi students should prepare and how to present bank statements for a Malaysia visa."
  },
  {
    "href": "/study/malaysia/cse-and-it-courses-in-malaysia",
    "title": "CSE and IT Courses in Malaysia",
    "description": "Computer science, software engineering, data science and cybersecurity study options in Malaysia for Bangladeshi students."
  },
  {
    "href": "/study/malaysia/mba-in-malaysia-for-bangladeshi-students",
    "title": "MBA in Malaysia for Bangladeshi Students",
    "description": "MBA entry rules, fees in BDT and work-experience expectations for Bangladeshi applicants in Malaysia."
  }
];
const FAQS = [
  {
    "q": "Can I work part-time on a student pass?",
    "a": "Possibly, under specific conditions and approvals. Do not assume it is automatic."
  },
  {
    "q": "How many hours can I work?",
    "a": "Commonly up to about 20 hours per week during permitted periods, subject to current rules."
  },
  {
    "q": "Can I stay in Malaysia after graduation?",
    "a": "Generally you need an employer-sponsored pass or another valid visa category."
  },
  {
    "q": "Is working on campus allowed?",
    "a": "Rules vary. Ask your institution and immigration before taking any role."
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
          "name": "Malaysia",
          "item": "https://eammu.com/study/malaysia"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Work Rules",
          "item": "https://eammu.com/study/malaysia/part-time-job-and-post-study-work-rules-in-malaysia"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Part-Time Job and Post-Study Work Rules in Malaysia (2026)",
      "description": "Part-time job and post-study work rules in Malaysia for Bangladeshi students in 2026: eligibility, hours, approval and what happens after graduation.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/malaysia/part-time-job-and-post-study-work-rules-in-malaysia",
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
          "name": "Can I work part-time on a student pass?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possibly, under specific conditions and approvals. Do not assume it is automatic."
          }
        },
        {
          "@type": "Question",
          "name": "How many hours can I work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commonly up to about 20 hours per week during permitted periods, subject to current rules."
          }
        },
        {
          "@type": "Question",
          "name": "Can I stay in Malaysia after graduation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally you need an employer-sponsored pass or another valid visa category."
          }
        },
        {
          "@type": "Question",
          "name": "Is working on campus allowed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rules vary. Ask your institution and immigration before taking any role."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Malaysia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Part-Time Job and Post-Study Work Rules in Malaysia (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Work rights for international students are limited. Understand them before you plan your finances.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Malaysia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Malaysia guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Part-time work: what is generally allowed</h2>
<p className="mt-4 leading-7 text-slate-700">International students in Malaysia may be allowed to work part-time under conditions set by Malaysian immigration, such as holding a valid student pass, meeting minimum study duration, working in permitted sectors and keeping within a weekly limit (commonly around 20 hours, during semester breaks or holidays). Approval and rules change, so confirm the current policy with your institution and immigration before taking any job.</p>
<p className="mt-4 leading-7 text-slate-700">Because income is uncertain, base your plan on funds shown in <Link href="/study/malaysia/bank-solvency-requirements-for-malaysia-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bank solvency requirements</Link> and monthly spending in <Link href="/study/malaysia/cost-of-living-in-malaysia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Malaysia for Bangladeshi students</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Risks of working without permission</h2>
<p className="mt-4 leading-7 text-slate-700">Working illegally can lead to fines, cancellation of your student pass and deportation, and can affect future visas. Never accept cash-in-hand work without confirming your status. Review your obligations in <Link href="/study/malaysia/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa requirements for Bangladesh</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">After graduation</h2>
<p className="mt-4 leading-7 text-slate-700">Malaysia does not offer an automatic post-study work visa for most international graduates. Staying to work generally requires an employer-sponsored work pass such as an Employment Pass, subject to salary and skills criteria. Some graduates explore opportunities in IT or finance; see <Link href="/study/malaysia/cse-and-it-courses-in-malaysia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT courses in Malaysia</Link> and <Link href="/study/malaysia/mba-in-malaysia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MBA in Malaysia for Bangladeshi students</Link>.</p>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Immigration policies can change. Check official Malaysian government sources before relying on any post-study work route.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Better ways to reduce costs</h2>
<p className="mt-4 leading-7 text-slate-700">Choose affordable institutions from <Link href="/study/malaysia/cheapest-universities-in-malaysia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cheapest universities in Malaysia</Link>, apply for <Link href="/study/malaysia/scholarships-in-malaysia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Malaysia for Bangladeshi students</Link> and consider lower-rent housing in <Link href="/study/malaysia/student-accommodation-in-malaysia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student accommodation in Malaysia</Link>.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Malaysia Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Malaysia</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university shortlist, EMGS guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
