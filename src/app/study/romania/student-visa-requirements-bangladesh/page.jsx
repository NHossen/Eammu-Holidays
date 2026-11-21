import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/romania/student-visa-requirements-bangladesh';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Romania Student Visa for Bangladesh 2026 | Eammu Holidays",
  "description": "Romania student visa requirements for Bangladeshi applicants in 2026: Letter of Acceptance, documents, funds, insurance and residence permit steps.",
  "alternates": {
    "canonical": "https://eammu.com/study/romania/student-visa-requirements-bangladesh"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Romania Student Visa for Bangladesh 2026 | Eammu Holidays",
    "description": "Romania student visa requirements for Bangladeshi applicants in 2026: Letter of Acceptance, documents, funds, insurance and residence permit steps.",
    "url": "https://eammu.com/study/romania/student-visa-requirements-bangladesh",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Romania Student Visa for Bangladesh 2026 | Eammu Holidays",
    "description": "Romania student visa requirements for Bangladeshi applicants in 2026: Letter of Acceptance, documents, funds, insurance and residence permit steps."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Romania", "href": "/study/romania"}, {"name": "Student Visa Requirements", "href": "/study/romania/student-visa-requirements-bangladesh"}];
const NAV = [
  {
    "label": "Romania Hub",
    "pages": [
      {
        "href": "/study/romania",
        "label": "Study in Romania Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/romania/study-in-romania-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/romania/study-in-romania-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/romania/tuition-fees-in-romania-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/romania/cost-of-living-in-romania-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/romania/cheapest-universities-in-romania",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/romania/top-universities-in-romania",
        "label": "Top Universities"
      },
      {
        "href": "/study/romania/public-vs-private-universities-in-romania",
        "label": "Public vs Private"
      },
      {
        "href": "/study/romania/scholarships-in-romania-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/romania/admission-requirements-in-romania-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/romania/study-gap-accepted-universities-in-romania",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/romania/study-in-romania-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/romania/study-in-romania-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/romania/romania-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/romania/mbbs-in-romania-for-bangladeshi-students",
        "label": "MBBS in Romania"
      },
      {
        "href": "/study/romania/medical-degree-recognition-and-bmdc-guide-romania",
        "label": "Degree Recognition & BMDC"
      },
      {
        "href": "/study/romania/romanian-language-preparatory-year-guide",
        "label": "Romanian Language Year"
      },
      {
        "href": "/study/romania/cse-and-it-courses-in-romania",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/romania/student-accommodation-in-romania",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, Letter & Work Rules",
    "pages": [
      {
        "href": "/study/romania/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/romania/letter-of-acceptance-and-visa-process-guide",
        "label": "Letter of Acceptance & Visa"
      },
      {
        "href": "/study/romania/bank-solvency-requirements-for-romania-student-visa",
        "label": "Bank Solvency"
      },
      {
        "href": "/study/romania/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/romania/part-time-job-and-post-study-work-rules-in-romania",
        "label": "Work Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/romania/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/romania/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/romania/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/romania/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/romania/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/romania/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/romania/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/romania/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/romania/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/romania/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/romania/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/romania/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/romania/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/romania/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/romania/letter-of-acceptance-and-visa-process-guide",
    "title": "Letter of Acceptance and Visa Process Guide for Romania",
    "description": "How the Letter of Acceptance from the Ministry of Education works and the stages from application to residence permit."
  },
  {
    "href": "/study/romania/bank-solvency-requirements-for-romania-student-visa",
    "title": "Bank Solvency Requirements for Romania Student Visa",
    "description": "How much money proof Bangladeshi students should prepare and how to present bank statements for a Romanian study visa."
  },
  {
    "href": "/study/romania/student-visa-processing-time-and-cost",
    "title": "Romania Student Visa Processing Time and Cost",
    "description": "Typical processing time and the main fees Bangladeshi students should budget for in a Romania visa and permit application."
  },
  {
    "href": "/study/romania/admission-requirements-in-romania-for-bangladeshi-students",
    "title": "Admission Requirements in Romania for Bangladeshi Students",
    "description": "SSC, HSC, diploma, English and document requirements for Romanian universities explained for Bangladeshi applicants."
  }
];
const FAQS = [
  {
    "q": "Do Bangladeshi citizens need a visa for Romania?",
    "a": "Yes. For study of more than 90 days you need a long-stay study visa after receiving the Letter of Acceptance."
  },
  {
    "q": "Do I need a Letter of Acceptance?",
    "a": "Yes, issued by the Ministry of Education through your university."
  },
  {
    "q": "Do I need to pay tuition before the visa?",
    "a": "Proof of tuition payment for at least one year is commonly required."
  },
  {
    "q": "Can a visa be refused?",
    "a": "Yes. Refusals usually relate to funds, documents or concerns about the study plan."
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
          "name": "Romania",
          "item": "https://eammu.com/study/romania"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Student Visa Requirements",
          "item": "https://eammu.com/study/romania/student-visa-requirements-bangladesh"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Romania Student Visa Requirements for Bangladeshi Students (2026)",
      "description": "Romania student visa requirements for Bangladeshi applicants in 2026: Letter of Acceptance, documents, funds, insurance and residence permit steps.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/romania/student-visa-requirements-bangladesh",
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
          "name": "Do Bangladeshi citizens need a visa for Romania?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. For study of more than 90 days you need a long-stay study visa after receiving the Letter of Acceptance."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a Letter of Acceptance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, issued by the Ministry of Education through your university."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to pay tuition before the visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Proof of tuition payment for at least one year is commonly required."
          }
        },
        {
          "@type": "Question",
          "name": "Can a visa be refused?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Refusals usually relate to funds, documents or concerns about the study plan."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Romania 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Romania Student Visa Requirements for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A clear checklist for the long-stay visa for studies, from the Letter of Acceptance to the residence permit.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Romania guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Romania guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">The long-stay study visa</h2>
<p className="mt-4 leading-7 text-slate-700">Bangladeshi citizens need a long-stay visa for studies (type D) to study in Romania for more than 90 days. You apply to the Romanian diplomatic mission or its designated channel after receiving your Letter of Acceptance from the Ministry of Education, and you must also obtain a temporary residence permit after arrival. The full sequence is in <Link href="/study/romania/letter-of-acceptance-and-visa-process-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Letter of Acceptance and visa process guide</Link>. Romania is in the Schengen area, so rules are strict, and you should confirm the current procedure for Bangladesh.</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Passport valid beyond your stay, with photographs.</li><li>Letter of Acceptance for studies issued by the Ministry of Education.</li><li>Proof of payment of tuition fees for at least one year.</li><li>Proof of means of subsistence; see <Link href="/study/romania/bank-solvency-requirements-for-romania-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bank solvency requirements</Link>.</li><li>Proof of accommodation, health insurance and a clean criminal record where requested.</li><li>Academic certificates, legalised or apostilled and translated as required.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">After arrival: the residence permit</h2>
<p className="mt-4 leading-7 text-slate-700">Within the deadline set in your visa, you apply to the General Inspectorate for Immigration for a temporary residence permit for studies, usually issued for one year and renewed annually while you study. Details are in <Link href="/study/romania/letter-of-acceptance-and-visa-process-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the process guide</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Common reasons for delays or refusal</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Insufficient or unclear funds.</li><li>Weak study plan or mismatch with earlier studies.</li><li>Unexplained gaps; see <Link href="/study/romania/study-gap-accepted-universities-in-romania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">gap-accepted universities in Romania</Link>.</li><li>Incomplete or incorrectly legalised documents.</li></ul>
<p className="mt-4 leading-7 text-slate-700">Do not rely on promises of guaranteed visas. Eammu Holidays prepares your file honestly and explains risks at <Link href="/study/romania/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">our Dhaka counseling desk</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">After you get approval</h2>
<p className="mt-4 leading-7 text-slate-700">Confirm your <Link href="/study/romania/romania-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake</Link> date and book travel only after approval. Read <Link href="/study/romania/part-time-job-and-post-study-work-rules-in-romania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">part-time job and post-study work rules in Romania</Link> before you plan finances, and compare costs in <Link href="/study/romania/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa processing time and cost</Link>.</p>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Immigration rules change. Always confirm the current requirements with the Romanian authorities and the university before applying.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Romania Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Romania</h2>
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
