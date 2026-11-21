import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/china/study-in-china-without-ielts';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in China Without IELTS 2026 | Eammu Holidays",
  "description": "Can Bangladeshi students study in China without IELTS? Learn about medium-of-instruction letters, interviews, HSK and when English tests are required. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/china/study-in-china-without-ielts"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in China Without IELTS 2026 | Eammu Holidays",
    "description": "Can Bangladeshi students study in China without IELTS? Learn about medium-of-instruction letters, interviews, HSK and when English tests are required. Eammu Holidays.",
    "url": "https://eammu.com/study/china/study-in-china-without-ielts",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in China Without IELTS 2026 | Eammu Holidays",
    "description": "Can Bangladeshi students study in China without IELTS? Learn about medium-of-instruction letters, interviews, HSK and when English tests are required. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "China", "href": "/study/china"}, {"name": "Without IELTS", "href": "/study/china/study-in-china-without-ielts"}];
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
    "href": "/study/china/admission-requirements-in-china-for-bangladeshi-students",
    "title": "Admission Requirements in China for Bangladeshi Students",
    "description": "Bachelor, master, PhD and MBBS eligibility, grades, tests, documents and age limits."
  },
  {
    "href": "/study/china/hsk-chinese-language-and-preparatory-year-in-china",
    "title": "HSK, Chinese Language Programmes and the Preparatory Year",
    "description": "How HSK levels map to degree study and when a language year makes sense."
  },
  {
    "href": "/study/china/scholarships-in-china-for-bangladeshi-students",
    "title": "Scholarships in China for Bangladeshi Students",
    "description": "CSC, provincial, university and Belt and Road scholarships explained with deadlines and what they cover."
  },
  {
    "href": "/study/china/mbbs-in-china-for-bangladeshi-students",
    "title": "MBBS in China for Bangladeshi Students: Fees, Rules and Risks",
    "description": "English-taught medicine in China, what it costs, which universities to check and what to verify about licensing back home."
  }
];
const FAQS = [
  {
    "q": "Does no IELTS mean easier admission?",
    "a": "No. The university still checks grades, subject fit and, increasingly, standardized tests such as the CSCA for undergraduates."
  },
  {
    "q": "Can I improve my chances with HSK?",
    "a": "Yes. Even HSK 2 or 3 shows commitment and helps with daily life and some scholarship scoring."
  },
  {
    "q": "Is a medium-of-instruction letter enough for a visa?",
    "a": "The visa depends on the admission notice and JW form, not on your English proof. The letter only supports admission."
  },
  {
    "q": "Which is better, IELTS or Duolingo?",
    "a": "IELTS is accepted more widely. Use Duolingo only if the university lists it."
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
          "name": "Without IELTS",
          "item": "https://eammu.com/study/china/study-in-china-without-ielts"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in China Without IELTS: What Universities Actually Accept (2026)",
      "description": "Can Bangladeshi students study in China without IELTS? Learn about medium-of-instruction letters, interviews, HSK and when English tests are required. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/china/study-in-china-without-ielts",
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
          "name": "Does no IELTS mean easier admission?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The university still checks grades, subject fit and, increasingly, standardized tests such as the CSCA for undergraduates."
          }
        },
        {
          "@type": "Question",
          "name": "Can I improve my chances with HSK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Even HSK 2 or 3 shows commitment and helps with daily life and some scholarship scoring."
          }
        },
        {
          "@type": "Question",
          "name": "Is a medium-of-instruction letter enough for a visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The visa depends on the admission notice and JW form, not on your English proof. The letter only supports admission."
          }
        },
        {
          "@type": "Question",
          "name": "Which is better, IELTS or Duolingo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IELTS is accepted more widely. Use Duolingo only if the university lists it."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in China Without IELTS: What Universities Actually Accept (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Alternatives to IELTS for English-taught programmes, plus when HSK is required instead.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">The short answer</h2>
<p className="mt-4 leading-7 text-slate-700">Many Chinese universities do not insist on IELTS for English-taught programmes. Instead, they may accept a medium-of-instruction letter, an English interview, a TOEFL or Duolingo score, or an English score from your Bangladeshi board. Chinese-taught programmes require HSK, not IELTS. The rule is set by each university and sometimes by each department, so it is never safe to assume.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Common alternatives to IELTS</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li><strong>Medium-of-instruction letter</strong> from your previous school or university confirming English-medium teaching.</li><li><strong>Online interview</strong> with the admissions office or department, often 10 to 20 minutes.</li><li><strong>TOEFL iBT, Duolingo or PTE</strong> scores where the university lists them.</li><li><strong>HSK 4 or higher</strong> for Chinese-taught bachelor programmes and <strong>HSK 5 or higher</strong> for many Chinese-taught master programmes.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Where IELTS is still expected</h2>
<p className="mt-4 leading-7 text-slate-700">Top-ranked universities and CSC scholarship rounds usually ask for IELTS 6.0 to 6.5 or equivalent for English-taught master and PhD programmes. Business and law programmes at selective schools are also stricter. If you are applying for a scholarship, check the <Link href="/study/china/scholarships-in-china-for-bangladeshi-students" className={linkClass}>scholarship guide</Link> first.</p>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Programme</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical language proof</th><th scope="col" className="px-3 py-2 text-left font-bold">Notes</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">English-taught bachelor</td><td className="px-3 py-2 align-top">Medium-of-instruction letter, interview or IELTS 5.5–6.0</td><td className="px-3 py-2 align-top">Varies widely; CSCA is also needed at CSC universities</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Chinese-taught bachelor</td><td className="px-3 py-2 align-top">HSK 4 or above, sometimes HSK 5</td><td className="px-3 py-2 align-top">Preparatory year can be an alternative</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">English-taught master</td><td className="px-3 py-2 align-top">IELTS 6.0+ or equivalent, or interview</td><td className="px-3 py-2 align-top">Stricter for top universities</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">MBBS (English-taught)</td><td className="px-3 py-2 align-top">Often interview or board English result</td><td className="px-3 py-2 align-top">Confirm the programme is on the Ministry of Education English-taught list</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Chinese language year</td><td className="px-3 py-2 align-top">None</td><td className="px-3 py-2 align-top">Good route if you plan to move to a Chinese-taught degree</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Language rules change every intake. Confirm the exact requirement on the university admissions page before paying any application fee.</p>
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
