import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/china/scholarships-in-china-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Scholarships in China for Bangladeshis 2026 | Eammu Holidays",
  "description": "Guide to scholarships in China for Bangladeshi students: CSC Type A and B, Silk Road programme, provincial and university awards, deadlines and coverage. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/china/scholarships-in-china-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Scholarships in China for Bangladeshis 2026 | Eammu Holidays",
    "description": "Guide to scholarships in China for Bangladeshi students: CSC Type A and B, Silk Road programme, provincial and university awards, deadlines and coverage. Eammu Holidays.",
    "url": "https://eammu.com/study/china/scholarships-in-china-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Scholarships in China for Bangladeshis 2026 | Eammu Holidays",
    "description": "Guide to scholarships in China for Bangladeshi students: CSC Type A and B, Silk Road programme, provincial and university awards, deadlines and coverage. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "China", "href": "/study/china"}, {"name": "Scholarships", "href": "/study/china/scholarships-in-china-for-bangladeshi-students"}];
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
    "href": "/study/china/csc-scholarship-step-by-step-guide",
    "title": "CSC Scholarship Step-by-Step: How Bangladeshi Students Apply",
    "description": "From choosing the right category to uploading documents in the CSC system, in the order you should do it."
  },
  {
    "href": "/study/china/csca-and-application-guide-for-china",
    "title": "CSCA Exam and University Application Guide for China",
    "description": "The new standardized test for undergraduates, and how to apply to Chinese universities step by step."
  },
  {
    "href": "/study/china/admission-requirements-in-china-for-bangladeshi-students",
    "title": "Admission Requirements in China for Bangladeshi Students",
    "description": "Bachelor, master, PhD and MBBS eligibility, grades, tests, documents and age limits."
  },
  {
    "href": "/study/china/top-universities-in-china",
    "title": "Top Universities in China for Bangladeshi Students",
    "description": "Well-known Chinese universities, what they are strong in and what admission usually demands."
  }
];
const FAQS = [
  {
    "q": "Is the CSC full funding?",
    "a": "For most awards it covers tuition, accommodation or allowance, a stipend and insurance, but exact coverage depends on the award type."
  },
  {
    "q": "Can I apply for CSC without IELTS?",
    "a": "Often yes, if the university accepts alternatives, but top programmes still ask for English proof."
  },
  {
    "q": "How many universities can I list?",
    "a": "The CSC system lets you choose a limited number of universities, so choose carefully."
  },
  {
    "q": "Are agents needed for CSC?",
    "a": "No. The application is free to submit; avoid agents who promise guaranteed seats."
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
          "name": "Scholarships",
          "item": "https://eammu.com/study/china/scholarships-in-china-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Scholarships in China for Bangladeshi Students (2026–2027)",
      "description": "Guide to scholarships in China for Bangladeshi students: CSC Type A and B, Silk Road programme, provincial and university awards, deadlines and coverage. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/china/scholarships-in-china-for-bangladeshi-students",
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
          "name": "Is the CSC full funding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For most awards it covers tuition, accommodation or allowance, a stipend and insurance, but exact coverage depends on the award type."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply for CSC without IELTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often yes, if the university accepts alternatives, but top programmes still ask for English proof."
          }
        },
        {
          "@type": "Question",
          "name": "How many universities can I list?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The CSC system lets you choose a limited number of universities, so choose carefully."
          }
        },
        {
          "@type": "Question",
          "name": "Are agents needed for CSC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The application is free to submit; avoid agents who promise guaranteed seats."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Scholarships in China for Bangladeshi Students (2026–2027)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">CSC, provincial, university and Belt and Road scholarships explained with deadlines and what they cover.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Main scholarship types</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Scholarship</th><th scope="col" className="px-3 py-2 text-left font-bold">Who offers it</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical coverage</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Chinese Government Scholarship (CSC), Type A</td><td className="px-3 py-2 align-top">Chinese government through embassy or nomination channels</td><td className="px-3 py-2 align-top">Tuition waiver, accommodation or allowance, monthly stipend, insurance</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">CSC Type B, including Silk Road programmes</td><td className="px-3 py-2 align-top">Applied directly through designated universities</td><td className="px-3 py-2 align-top">Same package; Silk Road tracks target Belt and Road countries</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Provincial and city government scholarships</td><td className="px-3 py-2 align-top">Provinces and cities such as Jiangsu, Zhejiang, Shanghai, Beijing</td><td className="px-3 py-2 align-top">Partial or full tuition, sometimes a stipend</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">University scholarships</td><td className="px-3 py-2 align-top">Individual universities</td><td className="px-3 py-2 align-top">Tuition discount or waiver, sometimes housing</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Language-study scholarships</td><td className="px-3 py-2 align-top">Chinese language education bodies</td><td className="px-3 py-2 align-top">Support for a Chinese language year</td></tr></tbody></table></div>
<p className="mt-4 leading-7 text-slate-700">The CSC stipend has long been about CNY 2,500 a month for bachelor, CNY 3,000 for master and CNY 3,500 for PhD students, but confirm the current rates on the official notice for your intake.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Deadlines for the 2027 cycle</h2>
<p className="mt-4 leading-7 text-slate-700">Type B deadlines are set by each university and usually fall between January and April. For the 2027 round, Shanghai Ocean University lists 1 February 2027 and Xi&apos;an Jiaotong University lists 1 April 2027 for its CSC application. Always use the date on the university&apos;s own page.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">New in 2026: CSCA for undergraduates</h2>
<p className="mt-4 leading-7 text-slate-700">Undergraduate applicants to CSC universities must now submit CSCA scores. See <Link href="/study/china/csca-and-application-guide-for-china" className={linkClass}>CSCA and application guide</Link> and the <Link href="/study/china/csc-scholarship-step-by-step-guide" className={linkClass}>CSC step-by-step guide</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Rules that surprise applicants</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>You cannot hold the CSC together with another Chinese government or university scholarship, apart from one-time awards.</li><li>Age limits apply: commonly under 25 for bachelor, under 35 for master and under 40 for PhD.</li><li>Poor attendance or grades can cancel the award.</li></ul>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Scholarship availability, quotas and deadlines change. Verify on studyinchina.csc.edu.cn and the university website, and be careful of anyone who guarantees a scholarship for a fee.</p>
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
