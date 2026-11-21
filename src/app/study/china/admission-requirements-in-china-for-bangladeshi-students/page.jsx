import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/china/admission-requirements-in-china-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "China Admission Requirements for Bangladeshis | Eammu Holidays",
  "description": "Admission requirements for Bangladeshi students in China in 2026: HSC and GPA rules, CSCA, language tests, documents, age limits and tips by level. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/china/admission-requirements-in-china-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "China Admission Requirements for Bangladeshis | Eammu Holidays",
    "description": "Admission requirements for Bangladeshi students in China in 2026: HSC and GPA rules, CSCA, language tests, documents, age limits and tips by level. Eammu Holidays.",
    "url": "https://eammu.com/study/china/admission-requirements-in-china-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "China Admission Requirements for Bangladeshis | Eammu Holidays",
    "description": "Admission requirements for Bangladeshi students in China in 2026: HSC and GPA rules, CSCA, language tests, documents, age limits and tips by level. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "China", "href": "/study/china"}, {"name": "Admission Requirements", "href": "/study/china/admission-requirements-in-china-for-bangladeshi-students"}];
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
    "href": "/study/china/csca-and-application-guide-for-china",
    "title": "CSCA Exam and University Application Guide for China",
    "description": "The new standardized test for undergraduates, and how to apply to Chinese universities step by step."
  },
  {
    "href": "/study/china/degree-recognition-and-eligibility-in-china",
    "title": "Degree Recognition and Eligibility for China",
    "description": "How to prepare your Bangladeshi certificates, and how a Chinese degree is recognised back home."
  },
  {
    "href": "/study/china/study-in-china-without-ielts",
    "title": "Study in China Without IELTS: What Universities Actually Accept",
    "description": "Alternatives to IELTS for English-taught programmes, plus when HSK is required instead."
  },
  {
    "href": "/study/china/study-gap-accepted-universities-in-china",
    "title": "Study Gap Accepted Universities in China",
    "description": "How Chinese universities view gaps of one to five years and how to present yours honestly."
  }
];
const FAQS = [
  {
    "q": "What GPA do I need?",
    "a": "There is no single national minimum. Strong programmes want high marks, while many self-funded programmes accept average results."
  },
  {
    "q": "Do Bangladeshi students need an entrance exam?",
    "a": "Not for most self-funded postgraduate programmes. Undergraduate applicants increasingly need the CSCA."
  },
  {
    "q": "Can I switch subject?",
    "a": "Often at master level only with a related background. Check each programme."
  },
  {
    "q": "Is an interview normal?",
    "a": "Yes, especially for MBBS, scholarships and top universities."
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
          "name": "Admission Requirements",
          "item": "https://eammu.com/study/china/admission-requirements-in-china-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Admission Requirements in China for Bangladeshi Students (2026)",
      "description": "Admission requirements for Bangladeshi students in China in 2026: HSC and GPA rules, CSCA, language tests, documents, age limits and tips by level. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/china/admission-requirements-in-china-for-bangladeshi-students",
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
          "name": "What GPA do I need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no single national minimum. Strong programmes want high marks, while many self-funded programmes accept average results."
          }
        },
        {
          "@type": "Question",
          "name": "Do Bangladeshi students need an entrance exam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not for most self-funded postgraduate programmes. Undergraduate applicants increasingly need the CSCA."
          }
        },
        {
          "@type": "Question",
          "name": "Can I switch subject?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often at master level only with a related background. Check each programme."
          }
        },
        {
          "@type": "Question",
          "name": "Is an interview normal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, especially for MBBS, scholarships and top universities."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Admission Requirements in China for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Bachelor, master, PhD and MBBS eligibility, grades, tests, documents and age limits.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Requirements by level</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Level</th><th scope="col" className="px-3 py-2 text-left font-bold">Academic requirement</th><th scope="col" className="px-3 py-2 text-left font-bold">Other requirements</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor</td><td className="px-3 py-2 align-top">HSC, A-level or equivalent, 12 years of schooling; many want a strong GPA</td><td className="px-3 py-2 align-top">CSCA at CSC universities; language proof or HSK; age usually 18 to 25</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Master</td><td className="px-3 py-2 align-top">Bachelor degree in a relevant field</td><td className="px-3 py-2 align-top">Two references, study plan, language proof; age under 35 for CSC</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">PhD</td><td className="px-3 py-2 align-top">Master degree, often with research output</td><td className="px-3 py-2 align-top">Research proposal, supervisor letter, language proof; age under 40 for CSC</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">MBBS</td><td className="px-3 py-2 align-top">HSC with strong biology, chemistry and physics</td><td className="px-3 py-2 align-top">English-taught programme, often interview; see MBBS guide</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Chinese language year</td><td className="px-3 py-2 align-top">Secondary school certificate</td><td className="px-3 py-2 align-top">No language prerequisite</td></tr></tbody></table></div>
<p className="mt-4 leading-7 text-slate-700">Meeting the minimum does not guarantee admission. Universities rank applicants, and scholarship quotas are limited.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Standard document set</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Valid passport with at least six months validity.</li><li>Academic certificates and transcripts, translated into English or Chinese and often notarised.</li><li>Passport-size photographs, application form and study plan.</li><li>Police clearance and physical examination for the visa stage.</li><li>CSCA transcript for undergraduate programmes where required; see <Link href="/study/china/csca-and-application-guide-for-china" className={linkClass}>the CSCA guide</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">How age and gaps are treated</h2>
<p className="mt-4 leading-7 text-slate-700">CSC has age limits, while self-funded programmes are usually more flexible. Read <Link href="/study/china/study-gap-accepted-universities-in-china" className={linkClass}>study gap accepted universities in China</Link> for how breaks in study are viewed.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Recognition of your documents</h2>
<p className="mt-4 leading-7 text-slate-700">Universities look for attestation or notarisation of your Bangladeshi certificates; see <Link href="/study/china/degree-recognition-and-eligibility-in-china" className={linkClass}>degree recognition and eligibility</Link>.</p>
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
