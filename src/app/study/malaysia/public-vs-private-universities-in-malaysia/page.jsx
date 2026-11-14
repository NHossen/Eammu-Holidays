import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/malaysia/public-vs-private-universities-in-malaysia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Public vs Private Universities in Malaysia 2026 | Eammu",
  "description": "Public vs private universities in Malaysia for Bangladeshi students: compare fees, entry rules, intakes and visa support in 2026. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/malaysia/public-vs-private-universities-in-malaysia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Public vs Private Universities in Malaysia 2026 | Eammu",
    "description": "Public vs private universities in Malaysia for Bangladeshi students: compare fees, entry rules, intakes and visa support in 2026. Eammu Holidays.",
    "url": "https://eammu.com/study/malaysia/public-vs-private-universities-in-malaysia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Public vs Private Universities in Malaysia 2026 | Eammu",
    "description": "Public vs private universities in Malaysia for Bangladeshi students: compare fees, entry rules, intakes and visa support in 2026. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Malaysia", "href": "/study/malaysia"}, {"name": "Public vs Private", "href": "/study/malaysia/public-vs-private-universities-in-malaysia"}];
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
    "href": "/study/malaysia/top-universities-in-malaysia",
    "title": "Top Universities in Malaysia",
    "description": "Overview of leading public, private and branch-campus universities in Malaysia and how to choose among them."
  },
  {
    "href": "/study/malaysia/cheapest-universities-in-malaysia",
    "title": "Cheapest Universities in Malaysia",
    "description": "How to find low-cost Malaysian universities and what to check beyond the headline tuition fee."
  },
  {
    "href": "/study/malaysia/tuition-fees-in-malaysia-for-bangladeshi-students",
    "title": "Tuition Fees in Malaysia for Bangladeshi Students",
    "description": "Realistic tuition ranges in MYR and BDT for foundation, diploma, bachelor’s and master’s programmes in Malaysia."
  },
  {
    "href": "/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students",
    "title": "Admission Requirements in Malaysia for Bangladeshi Students",
    "description": "SSC, HSC, diploma, English and document requirements for Malaysian universities explained for Bangladeshi applicants."
  }
];
const FAQS = [
  {
    "q": "Are private university degrees valid in Malaysia?",
    "a": "Yes, if the university and programme are approved and MQA-accredited."
  },
  {
    "q": "Do public universities accept Bangladeshi students?",
    "a": "Yes, but places for international students are limited and competition is higher."
  },
  {
    "q": "Which is better for engineering?",
    "a": "Both offer good programmes. Check professional accreditation and lab facilities for your specific course."
  },
  {
    "q": "Is a private degree harder to find a job with?",
    "a": "Employers value skills, experience and university reputation more than public or private status alone."
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
          "name": "Public vs Private",
          "item": "https://eammu.com/study/malaysia/public-vs-private-universities-in-malaysia"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Public vs Private Universities in Malaysia: Which Should You Choose?",
      "description": "Public vs private universities in Malaysia for Bangladeshi students: compare fees, entry rules, intakes and visa support in 2026. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/malaysia/public-vs-private-universities-in-malaysia",
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
          "name": "Are private university degrees valid in Malaysia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if the university and programme are approved and MQA-accredited."
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
            "text": "Both offer good programmes. Check professional accreditation and lab facilities for your specific course."
          }
        },
        {
          "@type": "Question",
          "name": "Is a private degree harder to find a job with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Employers value skills, experience and university reputation more than public or private status alone."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Public vs Private Universities in Malaysia: Which Should You Choose?</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Both types award recognised degrees, but they differ in competition, cost and flexibility for international students.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Key differences at a glance</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Factor</th><th scope="col" className="px-3 py-2 text-left font-bold">Public universities</th><th scope="col" className="px-3 py-2 text-left font-bold">Private universities / branch campuses</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Entry</td><td className="px-3 py-2 align-top">More competitive; limited international seats</td><td className="px-3 py-2 align-top">More flexible; foundation and diploma routes</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tuition</td><td className="px-3 py-2 align-top">Often lower for locals, higher for internationals; varies</td><td className="px-3 py-2 align-top">Wide range; branch campuses are highest</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Intakes</td><td className="px-3 py-2 align-top">Fewer, usually once or twice a year</td><td className="px-3 py-2 align-top">Multiple intakes (<Link href="/study/malaysia/malaysia-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Malaysia intake dates</Link>)</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">English</td><td className="px-3 py-2 align-top">Some courses partly in Malay</td><td className="px-3 py-2 align-top">Mostly English-medium</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Support</td><td className="px-3 py-2 align-top">Strong research focus</td><td className="px-3 py-2 align-top">Dedicated international student offices</td></tr></tbody></table></div>
<p className="mt-4 leading-7 text-slate-700">Most Bangladeshi students choose private institutions because of flexibility. See <Link href="/study/malaysia/top-universities-in-malaysia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Malaysia</Link> for the best-known names and <Link href="/study/malaysia/cheapest-universities-in-malaysia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the cheapest universities in Malaysia</Link> for budget options.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Cost and scholarships</h2>
<p className="mt-4 leading-7 text-slate-700">Public universities may look cheaper per year but can have higher international rates and fewer seats. Private universities often bundle discounts or merit awards. Compare totals in <Link href="/study/malaysia/tuition-fees-in-malaysia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Malaysia for Bangladeshi students</Link> and explore <Link href="/study/malaysia/scholarships-in-malaysia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Malaysia for Bangladeshi students</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Entry, English and gap rules</h2>
<p className="mt-4 leading-7 text-slate-700">Public universities usually require higher grades and formal English proof. Private universities are more open to alternatives; see &#123;&#123;no-ielts|study in Malaysia without IELTS&#125;&#125; and <Link href="/study/malaysia/study-gap-accepted-universities-in-malaysia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study gap accepted universities in Malaysia</Link>. Review the <Link href="/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements for Bangladeshi students</Link> before applying.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Which should you pick?</h2>
<p className="mt-4 leading-7 text-slate-700">Choose public if you have strong grades, can meet language requirements and want research exposure. Choose private if you need flexible entry, multiple intakes, pathway programmes or a foreign-awarded degree. Eammu Holidays can compare both for you through <Link href="/study/malaysia/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">our Dhaka counseling desk</Link>.</p>
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
