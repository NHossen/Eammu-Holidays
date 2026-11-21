import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/china/hsk-chinese-language-and-preparatory-year-in-china';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "HSK & Chinese Language Year in China | Eammu Holidays",
  "description": "HSK levels needed for Chinese-taught degrees, cost of Chinese language programmes in China and how a preparatory year helps Bangladeshi students. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/china/hsk-chinese-language-and-preparatory-year-in-china"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "HSK & Chinese Language Year in China | Eammu Holidays",
    "description": "HSK levels needed for Chinese-taught degrees, cost of Chinese language programmes in China and how a preparatory year helps Bangladeshi students. Eammu Holidays.",
    "url": "https://eammu.com/study/china/hsk-chinese-language-and-preparatory-year-in-china",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "HSK & Chinese Language Year in China | Eammu Holidays",
    "description": "HSK levels needed for Chinese-taught degrees, cost of Chinese language programmes in China and how a preparatory year helps Bangladeshi students. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "China", "href": "/study/china"}, {"name": "HSK & Preparatory Year", "href": "/study/china/hsk-chinese-language-and-preparatory-year-in-china"}];
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
    "href": "/study/china/study-in-china-without-ielts",
    "title": "Study in China Without IELTS: What Universities Actually Accept",
    "description": "Alternatives to IELTS for English-taught programmes, plus when HSK is required instead."
  },
  {
    "href": "/study/china/study-in-china-after-ssc",
    "title": "Study in China After SSC: What Is Possible",
    "description": "SSC alone is not enough for a Chinese bachelor degree. Here are the real options."
  },
  {
    "href": "/study/china/study-gap-accepted-universities-in-china",
    "title": "Study Gap Accepted Universities in China",
    "description": "How Chinese universities view gaps of one to five years and how to present yours honestly."
  },
  {
    "href": "/study/china/student-accommodation-in-china",
    "title": "Student Accommodation in China for Bangladeshi Students",
    "description": "Dormitories, shared apartments, costs, registration rules and what to bring."
  }
];
const FAQS = [
  {
    "q": "Do I need HSK for English-taught programmes?",
    "a": "Usually not, but some scholarships award points for it."
  },
  {
    "q": "How long to reach HSK 4?",
    "a": "Many students need six to twelve months of regular study."
  },
  {
    "q": "Is a language year worth it?",
    "a": "Yes if you want a Chinese-taught degree or live outside big cities."
  },
  {
    "q": "Can I switch from a language year to a degree?",
    "a": "Usually yes if you meet the degree entry rules and the university approves."
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
          "name": "HSK & Preparatory Year",
          "item": "https://eammu.com/study/china/hsk-chinese-language-and-preparatory-year-in-china"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "HSK, Chinese Language Programmes and the Preparatory Year (2026)",
      "description": "HSK levels needed for Chinese-taught degrees, cost of Chinese language programmes in China and how a preparatory year helps Bangladeshi students. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/china/hsk-chinese-language-and-preparatory-year-in-china",
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
          "name": "Do I need HSK for English-taught programmes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually not, but some scholarships award points for it."
          }
        },
        {
          "@type": "Question",
          "name": "How long to reach HSK 4?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many students need six to twelve months of regular study."
          }
        },
        {
          "@type": "Question",
          "name": "Is a language year worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes if you want a Chinese-taught degree or live outside big cities."
          }
        },
        {
          "@type": "Question",
          "name": "Can I switch from a language year to a degree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually yes if you meet the degree entry rules and the university approves."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">HSK, Chinese Language Programmes and the Preparatory Year (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">How HSK levels map to degree study and when a language year makes sense.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Why HSK matters</h2>
<p className="mt-4 leading-7 text-slate-700">HSK is the standard Chinese proficiency test. Chinese-taught bachelor programmes commonly ask for HSK 4 or higher, and Chinese-taught master programmes often ask for HSK 5 or higher. Some English-taught programmes ask for no HSK, but lessons in Chinese help in daily life and clinical settings.</p>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">HSK level</th><th scope="col" className="px-3 py-2 text-left font-bold">What it means</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical use</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">HSK 1 to 2</td><td className="px-3 py-2 align-top">Basic phrases</td><td className="px-3 py-2 align-top">Daily survival, adds weight to scholarship applications</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">HSK 3</td><td className="px-3 py-2 align-top">Everyday communication</td><td className="px-3 py-2 align-top">Foundation for a language year</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">HSK 4</td><td className="px-3 py-2 align-top">Can handle general topics</td><td className="px-3 py-2 align-top">Entry to many Chinese-taught bachelors</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">HSK 5</td><td className="px-3 py-2 align-top">Read newspapers, follow lectures</td><td className="px-3 py-2 align-top">Entry to many Chinese-taught masters</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">HSK 6</td><td className="px-3 py-2 align-top">Advanced fluency</td><td className="px-3 py-2 align-top">Competitive programmes</td></tr></tbody></table></div>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Language programmes in China</h2>
<p className="mt-4 leading-7 text-slate-700">Non-degree Chinese language programmes last one or two semesters. Fees are often about CNY 12,000 to 20,000 a year, around Tk 2.0 to 3.4 lakh, and visas are issued as for degree students. A language year can lead to a Chinese-taught degree, or provide a bridge when your HSK is not yet at the required level.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Preparatory year</h2>
<p className="mt-4 leading-7 text-slate-700">Some universities run a preparatory year that combines language and subject basics. Ask whether the preparatory year is a formal part of the university and whether completing it guarantees entry to the degree.</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Start HSK in Bangladesh with online tutors or local language centres.</li><li>Register for the test as early as possible; test dates fill quickly.</li><li>Keep your HSK certificate valid for the application you plan.</li></ul>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Test dates, fees and validity periods vary. Check the official HSK website and the university requirements.</p>
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
