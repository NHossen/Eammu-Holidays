import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/south-korea/korean-language-course-and-topik-guide';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Korean Language Course and TOPIK Guide 2026 | Eammu Holidays",
  "description": "Korean language course and TOPIK guide for Bangladeshi students in 2026: D-4 visa basics, fees in KRW and BDT, levels and how TOPIK affects admission.",
  "alternates": {
    "canonical": "https://eammu.com/study/south-korea/korean-language-course-and-topik-guide"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Korean Language Course and TOPIK Guide 2026 | Eammu Holidays",
    "description": "Korean language course and TOPIK guide for Bangladeshi students in 2026: D-4 visa basics, fees in KRW and BDT, levels and how TOPIK affects admission.",
    "url": "https://eammu.com/study/south-korea/korean-language-course-and-topik-guide",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Korean Language Course and TOPIK Guide 2026 | Eammu Holidays",
    "description": "Korean language course and TOPIK guide for Bangladeshi students in 2026: D-4 visa basics, fees in KRW and BDT, levels and how TOPIK affects admission."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "South Korea", "href": "/study/south-korea"}, {"name": "Korean Language & TOPIK", "href": "/study/south-korea/korean-language-course-and-topik-guide"}];
const NAV = [
  {
    "label": "South Korea Hub",
    "pages": [
      {
        "href": "/study/south-korea",
        "label": "Study in South Korea Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/south-korea/study-in-south-korea-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/south-korea/study-in-south-korea-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/south-korea/tuition-fees-in-south-korea-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/south-korea/cost-of-living-in-south-korea-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/south-korea/cheapest-universities-in-south-korea",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/south-korea/top-universities-in-south-korea",
        "label": "Top Universities"
      },
      {
        "href": "/study/south-korea/public-vs-private-universities-in-south-korea",
        "label": "National vs Private"
      },
      {
        "href": "/study/south-korea/scholarships-in-south-korea-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/south-korea/admission-requirements-in-south-korea-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/south-korea/study-gap-accepted-universities-in-south-korea",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/south-korea/study-in-south-korea-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/south-korea/study-in-south-korea-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/south-korea/south-korea-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/south-korea/gks-scholarship-in-south-korea-for-bangladeshi-students",
        "label": "GKS Scholarship"
      },
      {
        "href": "/study/south-korea/mba-in-south-korea-for-bangladeshi-students",
        "label": "MBA in South Korea"
      },
      {
        "href": "/study/south-korea/cse-and-it-courses-in-south-korea",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/south-korea/korean-language-course-and-topik-guide",
        "label": "Korean Language & TOPIK"
      },
      {
        "href": "/study/south-korea/student-accommodation-in-south-korea",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, COA & Work Rules",
    "pages": [
      {
        "href": "/study/south-korea/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/south-korea/certificate-of-admission-and-visa-process-guide",
        "label": "COA & Visa Process"
      },
      {
        "href": "/study/south-korea/bank-solvency-requirements-for-south-korea-student-visa",
        "label": "Bank Solvency"
      },
      {
        "href": "/study/south-korea/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/south-korea/part-time-job-and-post-study-work-rules-in-south-korea",
        "label": "Work Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/south-korea/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/south-korea/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/south-korea/study-in-south-korea-without-ielts",
    "title": "Study in South Korea Without IELTS",
    "description": "How Bangladeshi students can enter Korean universities without IELTS using TOPIK, Korean-taught programmes or English proof alternatives."
  },
  {
    "href": "/study/south-korea/tuition-fees-in-south-korea-for-bangladeshi-students",
    "title": "Tuition Fees in South Korea for Bangladeshi Students",
    "description": "Realistic tuition ranges in KRW and BDT for language, bachelor’s and master’s programmes in South Korea."
  },
  {
    "href": "/study/south-korea/student-visa-requirements-bangladesh",
    "title": "South Korea Student Visa Requirements for Bangladesh",
    "description": "Documents and steps for a D-2 degree visa or D-4 language visa from Bangladesh, including certificate of admission."
  },
  {
    "href": "/study/south-korea/scholarships-in-south-korea-for-bangladeshi-students",
    "title": "Scholarships in South Korea for Bangladeshi Students",
    "description": "Types of scholarships and tuition waivers available to Bangladeshi students in South Korea and how to apply."
  }
];
const FAQS = [
  {
    "q": "How long is a Korean language course?",
    "a": "Most institutes run about 10-week terms, with a full year typically covering several levels."
  },
  {
    "q": "What TOPIK level do I need for a degree?",
    "a": "Commonly level 3 or 4 for admission to Korean-taught programmes."
  },
  {
    "q": "Can I take TOPIK in Bangladesh?",
    "a": "TOPIK is held in many countries, including Bangladesh, on set dates. Check the official schedule."
  },
  {
    "q": "Does a language course guarantee a degree admission?",
    "a": "No. You must still meet the university’s academic and language requirements."
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
          "name": "South Korea",
          "item": "https://eammu.com/study/south-korea"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Korean Language & TOPIK",
          "item": "https://eammu.com/study/south-korea/korean-language-course-and-topik-guide"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Korean Language Course and TOPIK Guide for Bangladeshi Students (2026)",
      "description": "Korean language course and TOPIK guide for Bangladeshi students in 2026: D-4 visa basics, fees in KRW and BDT, levels and how TOPIK affects admission.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/south-korea/korean-language-course-and-topik-guide",
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
          "name": "How long is a Korean language course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most institutes run about 10-week terms, with a full year typically covering several levels."
          }
        },
        {
          "@type": "Question",
          "name": "What TOPIK level do I need for a degree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commonly level 3 or 4 for admission to Korean-taught programmes."
          }
        },
        {
          "@type": "Question",
          "name": "Can I take TOPIK in Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TOPIK is held in many countries, including Bangladesh, on set dates. Check the official schedule."
          }
        },
        {
          "@type": "Question",
          "name": "Does a language course guarantee a degree admission?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. You must still meet the university’s academic and language requirements."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in South Korea 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Korean Language Course and TOPIK Guide for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Language is the bridge to admission, scholarships, part-time work and daily life in Korea.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in South Korea guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 South Korea guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">How the Korean language route works</h2>
<p className="mt-4 leading-7 text-slate-700">Many Bangladeshi students enrol in a university-affiliated Korean language institute on a D-4 visa, study for about a year, take TOPIK, and then move into a degree on a D-2 visa. The route is explained alongside <Link href="/study/south-korea/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">D-2 and D-4 visa requirements</Link>. Because the embassy screens language-course visas carefully, choose well-established institutes and keep strong documents.</p>
<p className="mt-4 leading-7 text-slate-700">If you prefer to study in English from the start, compare this with &#123;&#123;no-ielts|study in South Korea without IELTS&#125;&#125; and the <Link href="/study/south-korea/admission-requirements-in-south-korea-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">TOPIK levels and why they matter</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Level</th><th scope="col" className="px-3 py-2 text-left font-bold">Rough meaning</th><th scope="col" className="px-3 py-2 text-left font-bold">Why it matters</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">TOPIK 1 – 2</td><td className="px-3 py-2 align-top">Basic communication</td><td className="px-3 py-2 align-top">Language institute progress</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">TOPIK 3 – 4</td><td className="px-3 py-2 align-top">Daily and academic basics</td><td className="px-3 py-2 align-top">Common entry level for Korean-taught degrees</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">TOPIK 5 – 6</td><td className="px-3 py-2 align-top">Advanced academic and professional</td><td className="px-3 py-2 align-top">Higher scholarships and better job prospects</td></tr></tbody></table></div>
<p className="mt-4 leading-7 text-slate-700">Higher TOPIK scores increase eligibility for tuition waivers in <Link href="/study/south-korea/scholarships-in-south-korea-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in South Korea</Link> and can affect <Link href="/study/south-korea/part-time-job-and-post-study-work-rules-in-south-korea" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">part-time job permission</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Cost and timeline</h2>
<p className="mt-4 leading-7 text-slate-700">Language course fees are typically about KRW 4 to 7 million per year (roughly Tk 3.4 to 5.95 lakh), plus living costs from <Link href="/study/south-korea/cost-of-living-in-south-korea-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in South Korea</Link>. See <Link href="/study/south-korea/tuition-fees-in-south-korea-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in South Korea for Bangladeshi students</Link> for the full picture.</p>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1,000 KRW = about Tk 85 and are indicative estimates for 2026–2027. Fees, visa rules and exchange rates change, so always confirm with the university, the Korean Embassy in Dhaka or an Eammu Holidays counselor before paying.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Preparing before you leave Bangladesh</h2>
<p className="mt-4 leading-7 text-slate-700">Start learning Hangul and basic grammar at home, and consider an online preparatory class. Early language study can improve your visa interview confidence and your placement level.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related South Korea Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in South Korea</h2>
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
