import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/russia/part-time-job-and-post-study-work-rules-in-russia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Part-Time Job and Work Rules in Russia 2026 | Eammu Holidays",
  "description": "Part-time job and post-study work rules in Russia for Bangladeshi students in 2026: strict limits, risks and why job offers can be a recruitment trap.",
  "alternates": {
    "canonical": "https://eammu.com/study/russia/part-time-job-and-post-study-work-rules-in-russia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Part-Time Job and Work Rules in Russia 2026 | Eammu Holidays",
    "description": "Part-time job and post-study work rules in Russia for Bangladeshi students in 2026: strict limits, risks and why job offers can be a recruitment trap.",
    "url": "https://eammu.com/study/russia/part-time-job-and-post-study-work-rules-in-russia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Part-Time Job and Work Rules in Russia 2026 | Eammu Holidays",
    "description": "Part-time job and post-study work rules in Russia for Bangladeshi students in 2026: strict limits, risks and why job offers can be a recruitment trap."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Russia", "href": "/study/russia"}, {"name": "Work Rules", "href": "/study/russia/part-time-job-and-post-study-work-rules-in-russia"}];
const NAV = [
  {
    "label": "Russia Hub",
    "pages": [
      {
        "href": "/study/russia",
        "label": "Study in Russia Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/russia/safety-and-scam-warning-for-students-in-russia",
        "label": "Safety & Scam Warning"
      },
      {
        "href": "/study/russia/study-in-russia-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/russia/study-in-russia-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/russia/tuition-fees-in-russia-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/russia/cost-of-living-in-russia-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/russia/cheapest-universities-in-russia",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/russia/top-universities-in-russia",
        "label": "Top Universities"
      },
      {
        "href": "/study/russia/scholarships-in-russia-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/russia/admission-requirements-in-russia-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/russia/study-gap-accepted-universities-in-russia",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/russia/study-in-russia-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/russia/study-in-russia-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/russia/russia-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/russia/mbbs-in-russia-for-bangladeshi-students",
        "label": "MBBS in Russia"
      },
      {
        "href": "/study/russia/medical-degree-recognition-and-bmdc-guide-russia",
        "label": "Degree Recognition & BMDC"
      },
      {
        "href": "/study/russia/russian-language-preparatory-year-guide",
        "label": "Russian Language Year"
      },
      {
        "href": "/study/russia/cse-and-it-courses-in-russia",
        "label": "Engineering & IT Courses"
      },
      {
        "href": "/study/russia/student-accommodation-in-russia",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, Invitation & Work Rules",
    "pages": [
      {
        "href": "/study/russia/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/russia/invitation-letter-and-visa-process-guide-russia",
        "label": "Invitation Letter & Visa"
      },
      {
        "href": "/study/russia/bank-solvency-requirements-for-russia-student-visa",
        "label": "Bank Solvency & Payments"
      },
      {
        "href": "/study/russia/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/russia/part-time-job-and-post-study-work-rules-in-russia",
        "label": "Work Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/russia/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/russia/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/russia/safety-and-scam-warning-for-students-in-russia",
    "title": "Safety, Sanctions and Scam Warning for Students in Russia",
    "description": "An honest guide to war, sanctions, payment restrictions and recruitment scams that Bangladeshi families must understand before studying in Russia."
  },
  {
    "href": "/study/russia/cost-of-living-in-russia-for-bangladeshi-students",
    "title": "Cost of Living in Russia for Bangladeshi Students",
    "description": "Monthly budget breakdown for dormitory, food, transport and clothing in Moscow, Kazan and other Russian student cities."
  },
  {
    "href": "/study/russia/bank-solvency-requirements-for-russia-student-visa",
    "title": "Bank Solvency and Payment Guide for Russia Student Visa",
    "description": "How Bangladeshi families should plan funds proof, tuition payment and access to money for study in Russia under sanctions."
  },
  {
    "href": "/study/russia/scholarships-in-russia-for-bangladeshi-students",
    "title": "Scholarships in Russia for Bangladeshi Students",
    "description": "How the Russian government scholarship quota works for Bangladeshi applicants: places, benefits, official portal and scam warnings."
  }
];
const FAQS = [
  {
    "q": "Can I work part-time on a student visa?",
    "a": "Student work is limited and depends on permission. Do not assume you can work, and never accept offers you cannot verify."
  },
  {
    "q": "Why are work offers risky?",
    "a": "Bangladeshis have been deceived into Russian military service through job offers and contracts in Russian."
  },
  {
    "q": "Can I stay in Russia after graduation?",
    "a": "Staying to work needs a separate work permit through an employer. It is not guaranteed and carries risks."
  },
  {
    "q": "What if someone offers me a job in Russia?",
    "a": "Do not sign or travel. Report the offer to the Bangladesh authorities and the Bangladesh Embassy in Moscow."
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
          "name": "Russia",
          "item": "https://eammu.com/study/russia"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Work Rules",
          "item": "https://eammu.com/study/russia/part-time-job-and-post-study-work-rules-in-russia"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Part-Time Job and Post-Study Work Rules in Russia (2026)",
      "description": "Part-time job and post-study work rules in Russia for Bangladeshi students in 2026: strict limits, risks and why job offers can be a recruitment trap.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/russia/part-time-job-and-post-study-work-rules-in-russia",
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
          "name": "Can I work part-time on a student visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Student work is limited and depends on permission. Do not assume you can work, and never accept offers you cannot verify."
          }
        },
        {
          "@type": "Question",
          "name": "Why are work offers risky?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bangladeshis have been deceived into Russian military service through job offers and contracts in Russian."
          }
        },
        {
          "@type": "Question",
          "name": "Can I stay in Russia after graduation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Staying to work needs a separate work permit through an employer. It is not guaranteed and carries risks."
          }
        },
        {
          "@type": "Question",
          "name": "What if someone offers me a job in Russia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Do not sign or travel. Report the offer to the Bangladesh authorities and the Bangladesh Embassy in Moscow."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Russia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Part-Time Job and Post-Study Work Rules in Russia (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Students should not plan to work in Russia. Work offers are the main route through which Bangladeshis have been deceived.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Russia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Russia guides</summary>
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
<p className="mt-4 leading-7 text-slate-700">A Russian student visa is issued for study, and the right of foreign students to work is limited and depends on the visa, the university and the type of work. Do not assume you can take a job. Because wages are modest and rules are strict, plan your budget using <Link href="/study/russia/bank-solvency-requirements-for-russia-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the bank solvency and payment guide</Link> and <Link href="/study/russia/cost-of-living-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Russia for Bangladeshi students</Link>, and treat any work as unavailable. Government quota students receive a dormitory and stipend; see <Link href="/study/russia/scholarships-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Russia</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">If you are told you can work, check the exact permission in writing with the university&apos;s international office and the migration authority.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Why work offers are dangerous</h2>
<p className="mt-4 leading-7 text-slate-700">Bangladesh&apos;s government, the United Nations and human-rights groups have documented Bangladeshis being lured to Russia with offers of civilian jobs, then pressured or forced into military service, with documents written in Russian that they could not read. Human-rights organisations say foreign students have also been targeted. Read <Link href="/study/russia/safety-and-scam-warning-for-students-in-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the safety and scam warning guide</Link>.</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Never accept “security”, “construction”, “delivery” or any contract that you cannot verify.</li><li>Never sign a document in Russian without independent translation.</li><li>Never hand your passport to an employer, agent or recruiter.</li><li>Report suspicious offers to the Bangladesh Embassy in Moscow and your university.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">After graduation</h2>
<p className="mt-4 leading-7 text-slate-700">A student visa ends with your studies, and staying to work requires a separate work permit tied to a specific employer, which is controlled by the Russian authorities and can carry the same recruitment risks. Do not treat staying in Russia as part of your plan, and compare your options in <Link href="/study/russia/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa requirements for Bangladesh</Link>.</p>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Immigration and employment rules change. Check official Russian sources and the Bangladesh Embassy in Moscow before relying on any work or post-study route.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Better ways to reduce costs</h2>
<p className="mt-4 leading-7 text-slate-700">Choose affordable options from <Link href="/study/russia/cheapest-universities-in-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cheapest universities in Russia</Link>, apply for the quota scholarship, and consider dormitory housing in <Link href="/study/russia/student-accommodation-in-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student accommodation in Russia</Link>.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Russia Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Russia</h2>
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
