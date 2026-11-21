import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/romania/mbbs-in-romania-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "MBBS in Romania Guide for Bangladesh 2026 | Eammu Holidays",
  "description": "MBBS in Romania for Bangladeshi students in 2026: entry rules, fees in EUR and BDT, 6-year structure, recognition checks and visa steps. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/romania/mbbs-in-romania-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "MBBS in Romania Guide for Bangladesh 2026 | Eammu Holidays",
    "description": "MBBS in Romania for Bangladeshi students in 2026: entry rules, fees in EUR and BDT, 6-year structure, recognition checks and visa steps. Eammu Holidays.",
    "url": "https://eammu.com/study/romania/mbbs-in-romania-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "MBBS in Romania Guide for Bangladesh 2026 | Eammu Holidays",
    "description": "MBBS in Romania for Bangladeshi students in 2026: entry rules, fees in EUR and BDT, 6-year structure, recognition checks and visa steps. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Romania", "href": "/study/romania"}, {"name": "MBBS in Romania", "href": "/study/romania/mbbs-in-romania-for-bangladeshi-students"}];
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
    "href": "/study/romania/medical-degree-recognition-and-bmdc-guide-romania",
    "title": "Medical Degree Recognition and BMDC Guide for Romania",
    "description": "How accreditation and recognition work for Romanian degrees and how Bangladeshi medical students should verify BMDC acceptance."
  },
  {
    "href": "/study/romania/tuition-fees-in-romania-for-bangladeshi-students",
    "title": "Tuition Fees in Romania for Bangladeshi Students",
    "description": "Realistic tuition ranges in EUR and BDT for the preparatory year, bachelor’s, medicine and master’s programmes in Romania."
  },
  {
    "href": "/study/romania/admission-requirements-in-romania-for-bangladeshi-students",
    "title": "Admission Requirements in Romania for Bangladeshi Students",
    "description": "SSC, HSC, diploma, English and document requirements for Romanian universities explained for Bangladeshi applicants."
  },
  {
    "href": "/study/romania/top-universities-in-romania",
    "title": "Top Universities in Romania",
    "description": "Overview of well-known state and private universities in Romania and how to choose among them."
  }
];
const FAQS = [
  {
    "q": "Is a Romanian MBBS recognised in Bangladesh?",
    "a": "Recognition depends on the university and current BMDC rules. Verify with BMDC before enrolling."
  },
  {
    "q": "How long is the medical programme?",
    "a": "Usually 6 years including clinical training."
  },
  {
    "q": "Is the course taught in English?",
    "a": "Yes at several universities, but you will need basic Romanian for patient contact in clinical years."
  },
  {
    "q": "Is there an entrance exam?",
    "a": "Many universities use an entrance exam or a file examination in biology and chemistry. Requirements differ."
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
          "name": "MBBS in Romania",
          "item": "https://eammu.com/study/romania/mbbs-in-romania-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "MBBS in Romania for Bangladeshi Students (2026)",
      "description": "MBBS in Romania for Bangladeshi students in 2026: entry rules, fees in EUR and BDT, 6-year structure, recognition checks and visa steps. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/romania/mbbs-in-romania-for-bangladeshi-students",
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
          "name": "Is a Romanian MBBS recognised in Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recognition depends on the university and current BMDC rules. Verify with BMDC before enrolling."
          }
        },
        {
          "@type": "Question",
          "name": "How long is the medical programme?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually 6 years including clinical training."
          }
        },
        {
          "@type": "Question",
          "name": "Is the course taught in English?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes at several universities, but you will need basic Romanian for patient contact in clinical years."
          }
        },
        {
          "@type": "Question",
          "name": "Is there an entrance exam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many universities use an entrance exam or a file examination in biology and chemistry. Requirements differ."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">MBBS in Romania for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Romania offers English-taught medicine in an EU country, but fees are significant and you must verify recognition before you commit.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Is MBBS in Romania realistic for Bangladeshi students?</h2>
<p className="mt-4 leading-7 text-slate-700">Several Universities of Medicine and Pharmacy in Bucharest, Cluj-Napoca, Iași, Timișoara, Târgu Mureș, Galați and other cities teach general medicine in English to non-EU students. The programme is 6 years (360 credits) and leads to a medical degree recognised within the European system, but Bangladesh has its own rules for foreign graduates. Applicants need HSC Science with Biology and Chemistry and usually take an entrance exam or file examination, plus an English assessment; see the <Link href="/study/romania/admission-requirements-in-romania-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements for Bangladeshi students</Link> and &#123;&#123;no-ielts|alternatives to IELTS&#125;&#125;.</p>
<p className="mt-4 leading-7 text-slate-700">Applications are usually submitted in spring and summer; see <Link href="/study/romania/romania-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Romania intake dates</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Cost and funding</h2>
<p className="mt-4 leading-7 text-slate-700">Medical tuition for non-EU students commonly ranges from about EUR 5,000 to 10,000 per year depending on the university and study year (about Tk 7 to 14 lakh), with higher fees in the early years at some universities. Living costs add about EUR 350 to 700 per month. Over six years, tuition and living can total very roughly EUR 40,000 to 80,000 (about Tk 56 to 112 lakh). See wider costs in <Link href="/study/romania/tuition-fees-in-romania-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Romania for Bangladeshi students</Link> and <Link href="/study/romania/cost-of-living-in-romania-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Romania</Link>.</p>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 EUR = about Tk 140 and are indicative estimates for 2026–2027, based on typical published university fee schedules. Fees, visa rules and exchange rates change, so always confirm with the university, the Romanian authorities or an Eammu Holidays counselor before paying.</p>
<p className="mt-4 leading-7 text-slate-700">Universities may ask you to confirm your place with a non-refundable payment, so read terms carefully. Plan funds with the <Link href="/study/romania/bank-solvency-requirements-for-romania-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bank solvency requirements</Link> and look at <Link href="/study/romania/scholarships-in-romania-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Romania</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Recognition and licensing: verify before paying</h2>
<p className="mt-4 leading-7 text-slate-700">Medical degrees affect your right to practise. Before enrolling, check that the university and programme are accredited in Romania and listed in international directories, and, critically, confirm with the Bangladesh Medical and Dental Council (BMDC) how graduates of the specific university are treated, including any qualifying or equivalence examination. Do not rely on an agent&apos;s verbal promise; ask for written confirmation. Read <Link href="/study/romania/medical-degree-recognition-and-bmdc-guide-romania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the medical degree recognition and BMDC guide</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Visa and next steps</h2>
<p className="mt-4 leading-7 text-slate-700">After admission, follow <Link href="/study/romania/letter-of-acceptance-and-visa-process-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Letter of Acceptance and visa process</Link> and the <Link href="/study/romania/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa requirements</Link>. Eammu Holidays can help shortlist universities by budget through <Link href="/study/romania/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">our Dhaka counseling desk</Link>, but we recommend you verify recognition independently.</p>
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
