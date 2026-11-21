import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/china/study-in-china-from-bangladesh';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in China from Bangladesh 2026 | Eammu Holidays",
  "description": "Step-by-step guide for Bangladeshi students to study in China in 2026: costs in BDT, CSCA, CSC scholarship, X1 visa, intakes and work rules. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/china/study-in-china-from-bangladesh"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in China from Bangladesh 2026 | Eammu Holidays",
    "description": "Step-by-step guide for Bangladeshi students to study in China in 2026: costs in BDT, CSCA, CSC scholarship, X1 visa, intakes and work rules. Eammu Holidays.",
    "url": "https://eammu.com/study/china/study-in-china-from-bangladesh",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in China from Bangladesh 2026 | Eammu Holidays",
    "description": "Step-by-step guide for Bangladeshi students to study in China in 2026: costs in BDT, CSCA, CSC scholarship, X1 visa, intakes and work rules. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "China", "href": "/study/china"}, {"name": "Study from Bangladesh", "href": "/study/china/study-in-china-from-bangladesh"}];
const NAV = [
  {
    "label": "China Hub",
    "pages": [
      {
        "href": "/study/china",
        "label": "Study in China Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/china/study-in-china-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/china/study-in-china-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/china/tuition-fees-in-china-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/china/cost-of-living-in-china-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/china/cheapest-universities-in-china",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/china/top-universities-in-china",
        "label": "Top Universities"
      },
      {
        "href": "/study/china/double-first-class-vs-regular-universities-in-china",
        "label": "Double First-Class vs Regular"
      },
      {
        "href": "/study/china/scholarships-in-china-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/china/csc-scholarship-step-by-step-guide",
        "label": "CSC Step-by-Step"
      },
      {
        "href": "/study/china/admission-requirements-in-china-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/china/study-gap-accepted-universities-in-china",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/china/study-in-china-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/china/study-in-china-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/china/china-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/china/csca-and-application-guide-for-china",
        "label": "CSCA & Application Guide"
      },
      {
        "href": "/study/china/degree-recognition-and-eligibility-in-china",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/china/cse-and-it-courses-in-china",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/china/mba-and-masters-in-china-for-bangladeshi-students",
        "label": "MBA & Master's"
      },
      {
        "href": "/study/china/mbbs-in-china-for-bangladeshi-students",
        "label": "MBBS in China"
      },
      {
        "href": "/study/china/hsk-chinese-language-and-preparatory-year-in-china",
        "label": "HSK & Preparatory Year"
      },
      {
        "href": "/study/china/student-accommodation-in-china",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/china/halal-food-and-student-life-in-china-for-bangladeshis",
        "label": "Halal Food & Student Life"
      }
    ]
  },
  {
    "label": "Visa, Permit & Work Rules",
    "pages": [
      {
        "href": "/study/china/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/china/x1-visa-and-residence-permit-guide-for-china",
        "label": "X1 Visa & Residence Permit"
      },
      {
        "href": "/study/china/proof-of-funds-requirements-for-china-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/china/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/china/part-time-job-and-post-study-work-rules-in-china",
        "label": "Work & Post-Study Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/china/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/china/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/china/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/china/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/china/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/china/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/china/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/china/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/china/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/china/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/china/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/china/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/china/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/china/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/china/tuition-fees-in-china-for-bangladeshi-students",
    "title": "Tuition Fees in China for Bangladeshi Students",
    "description": "A clear CNY-to-BDT look at what each level of study costs and which extra fees families often forget."
  },
  {
    "href": "/study/china/scholarships-in-china-for-bangladeshi-students",
    "title": "Scholarships in China for Bangladeshi Students",
    "description": "CSC, provincial, university and Belt and Road scholarships explained with deadlines and what they cover."
  },
  {
    "href": "/study/china/csca-and-application-guide-for-china",
    "title": "CSCA Exam and University Application Guide for China",
    "description": "The new standardized test for undergraduates, and how to apply to Chinese universities step by step."
  },
  {
    "href": "/study/china/x1-visa-and-residence-permit-guide-for-china",
    "title": "X1 Visa and Residence Permit in China: Step-by-Step Guide",
    "description": "From the JW202 form to your first week in China, and the 30-day residence permit deadline."
  }
];
const FAQS = [
  {
    "q": "Is China cheaper than Finland or the UK for Bangladeshi students?",
    "a": "In most cases yes. Tuition and living costs at many Chinese universities are well below Western Europe, but top-ranked universities and premium MBAs can be expensive."
  },
  {
    "q": "Do I need to learn Chinese before going?",
    "a": "Not for English-taught programmes, but basic Chinese makes daily life much easier. See the HSK and preparatory year guide."
  },
  {
    "q": "Can I apply without an agent?",
    "a": "Yes. Applications are made directly to universities or through the CSC portal. A counselor helps with shortlisting, documents and timelines."
  },
  {
    "q": "When should I start?",
    "a": "Start 8 to 12 months before the September intake, earlier if you want a CSC scholarship or must take the CSCA."
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
          "name": "China",
          "item": "https://eammu.com/study/china"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Study from Bangladesh",
          "item": "https://eammu.com/study/china/study-in-china-from-bangladesh"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in China from Bangladesh: Step-by-Step Guide (2026)",
      "description": "Step-by-step guide for Bangladeshi students to study in China in 2026: costs in BDT, CSCA, CSC scholarship, X1 visa, intakes and work rules. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/china/study-in-china-from-bangladesh",
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
          "name": "Is China cheaper than Finland or the UK for Bangladeshi students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In most cases yes. Tuition and living costs at many Chinese universities are well below Western Europe, but top-ranked universities and premium MBAs can be expensive."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to learn Chinese before going?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not for English-taught programmes, but basic Chinese makes daily life much easier. See the HSK and preparatory year guide."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply without an agent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Applications are made directly to universities or through the CSC portal. A counselor helps with shortlisting, documents and timelines."
          }
        },
        {
          "@type": "Question",
          "name": "When should I start?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start 8 to 12 months before the September intake, earlier if you want a CSC scholarship or must take the CSCA."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in China 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in China from Bangladesh: Step-by-Step Guide (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A practical route from profile check to arrival in China, with costs in BDT, the new CSCA exam, scholarships and visa steps.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-21">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in China guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 42 China guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Why Bangladeshi students choose China</h2>
<p className="mt-4 leading-7 text-slate-700">China has become one of the largest destinations for Bangladeshi students, especially in medicine, engineering, computer science and business. Tuition at many universities is far lower than in the UK, Australia or North America, English-taught programmes exist at every level, and a large government scholarship system funds thousands of international students each year. Bangladesh is also a Belt and Road country, which makes some special scholarship tracks relevant to you.</p>
<p className="mt-4 leading-7 text-slate-700">The trade-offs are real too: you will live in a Chinese-language environment, some programmes have limited English support outside class, off-campus work is tightly controlled, and there is no automatic post-study work visa. Read <Link href="/study/china/part-time-job-and-post-study-work-rules-in-china" className={linkClass}>work and post-study rules</Link> before you decide.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Your route in six steps</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li><strong>Choose level and subject.</strong> Bachelor, master, PhD, MBBS or a Chinese-language year. See <Link href="/study/china/admission-requirements-in-china-for-bangladeshi-students" className={linkClass}>admission requirements</Link>.</li><li><strong>Decide funding.</strong> Self-funded, university scholarship, provincial scholarship or the Chinese Government Scholarship (CSC). Compare in <Link href="/study/china/scholarships-in-china-for-bangladeshi-students" className={linkClass}>scholarships in China</Link>.</li><li><strong>Prepare tests and documents.</strong> Undergraduate applicants now need the CSCA exam at CSC universities; read the <Link href="/study/china/csca-and-application-guide-for-china" className={linkClass}>CSCA and application guide</Link>. Language proof or an HSK score depends on the programme.</li><li><strong>Apply and receive the admission notice.</strong> Applications go through the university portal or the CSC system; deadlines vary from late autumn to spring.</li><li><strong>Apply for the X1 visa.</strong> You submit the admission notice and JW201 or JW202 form to the Chinese Visa Application Service Center in Dhaka; see <Link href="/study/china/x1-visa-and-residence-permit-guide-for-china" className={linkClass}>X1 visa and residence permit</Link>.</li><li><strong>Arrive, register and convert to a residence permit.</strong> You must apply for the residence permit within 30 days of entry.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Typical total budget</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">Indicative amount (CNY)</th><th scope="col" className="px-3 py-2 text-left font-bold">Indicative amount (BDT)</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tuition, bachelor or master per year</td><td className="px-3 py-2 align-top">CNY 14,000 – 45,000</td><td className="px-3 py-2 align-top">Tk 2.4 – 7.7 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs per year (outside Beijing, Shanghai, Shenzhen)</td><td className="px-3 py-2 align-top">CNY 24,000 – 54,000</td><td className="px-3 py-2 align-top">Tk 4.1 – 9.2 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Insurance, visa, residence permit, medical check</td><td className="px-3 py-2 align-top">CNY 1,500 – 3,000</td><td className="px-3 py-2 align-top">Tk 25,000 – 51,000</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">One-way flight from Dhaka</td><td className="px-3 py-2 align-top">Varies by season and route</td><td className="px-3 py-2 align-top">Tk 40,000 – 80,000</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 CNY = about Tk 17 and are indicative estimates for the 2026–2027 intake. Fees, scholarship rules, test dates and exchange rates change, so always confirm with the university, the official portals or an Eammu Holidays counselor before paying anything.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Who should think twice</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Students who need to earn money abroad to cover living costs: the Chinese rules make this hard.</li><li>Students who want an automatic work visa after graduation.</li><li>Applicants who cannot study in an environment where daily life runs in Chinese.</li></ul>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related China Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in China</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and scholarship shortlist, visa guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
