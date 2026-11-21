import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/russia/study-in-russia-after-ssc';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Russia After SSC Bangladesh 2026 | Eammu Holidays",
  "description": "Study in Russia after SSC in 2026: why HSC matters, preparatory options, costs in BDT and the risks of unofficial routes for Bangladeshi students. Eammu.",
  "alternates": {
    "canonical": "https://eammu.com/study/russia/study-in-russia-after-ssc"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Russia After SSC Bangladesh 2026 | Eammu Holidays",
    "description": "Study in Russia after SSC in 2026: why HSC matters, preparatory options, costs in BDT and the risks of unofficial routes for Bangladeshi students. Eammu.",
    "url": "https://eammu.com/study/russia/study-in-russia-after-ssc",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Russia After SSC Bangladesh 2026 | Eammu Holidays",
    "description": "Study in Russia after SSC in 2026: why HSC matters, preparatory options, costs in BDT and the risks of unofficial routes for Bangladeshi students. Eammu."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Russia", "href": "/study/russia"}, {"name": "After SSC", "href": "/study/russia/study-in-russia-after-ssc"}];
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
    "href": "/study/russia/study-in-russia-after-diploma",
    "title": "Study in Russia After Diploma",
    "description": "Degree entry and recognition options for Bangladeshi polytechnic and diploma holders in Russia."
  },
  {
    "href": "/study/russia/admission-requirements-in-russia-for-bangladeshi-students",
    "title": "Admission Requirements in Russia for Bangladeshi Students",
    "description": "SSC, HSC, diploma, language and document requirements for Russian universities explained for Bangladeshi applicants."
  },
  {
    "href": "/study/russia/tuition-fees-in-russia-for-bangladeshi-students",
    "title": "Tuition Fees in Russia for Bangladeshi Students",
    "description": "Realistic tuition ranges in RUB and BDT for the language year, bachelor’s, medicine and master’s programmes in Russia."
  },
  {
    "href": "/study/russia/safety-and-scam-warning-for-students-in-russia",
    "title": "Safety, Sanctions and Scam Warning for Students in Russia",
    "description": "An honest guide to war, sanctions, payment restrictions and recruitment scams that Bangladeshi families must understand before studying in Russia."
  }
];
const FAQS = [
  {
    "q": "Can I go directly to a bachelor's after SSC?",
    "a": "Usually no. You normally need HSC or an equivalent qualification."
  },
  {
    "q": "Can I study medicine after SSC?",
    "a": "Medicine requires HSC Science with Biology and Chemistry."
  },
  {
    "q": "Is a language year compulsory?",
    "a": "Only for Russian-taught programmes."
  },
  {
    "q": "Can I work while studying after SSC?",
    "a": "Student work is limited and offers can be risky. See the work guide."
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
          "name": "After SSC",
          "item": "https://eammu.com/study/russia/study-in-russia-after-ssc"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Russia After SSC: Routes for Bangladeshi Students",
      "description": "Study in Russia after SSC in 2026: why HSC matters, preparatory options, costs in BDT and the risks of unofficial routes for Bangladeshi students. Eammu.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/russia/study-in-russia-after-ssc",
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
          "name": "Can I go directly to a bachelor's after SSC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually no. You normally need HSC or an equivalent qualification."
          }
        },
        {
          "@type": "Question",
          "name": "Can I study medicine after SSC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Medicine requires HSC Science with Biology and Chemistry."
          }
        },
        {
          "@type": "Question",
          "name": "Is a language year compulsory?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only for Russian-taught programmes."
          }
        },
        {
          "@type": "Question",
          "name": "Can I work while studying after SSC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Student work is limited and offers can be risky. See the work guide."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Russia After SSC: Routes for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">SSC alone is generally not enough for direct bachelor’s or medical entry. Here are the realistic options.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Your main options after SSC</h2>
<p className="mt-4 leading-7 text-slate-700">Russian universities expect completed secondary education for bachelor&apos;s entry, so SSC graduates normally complete HSC first. Medicine needs HSC Science. Read the <Link href="/study/russia/admission-requirements-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements for Bangladeshi students</Link> and our broader guide to &#123;&#123;from-bd|studying in Russia from Bangladesh&#125;&#125;.</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Complete HSC first, which gives the widest choice of universities and scholarships.</li><li>Consider a diploma route; see <Link href="/study/russia/study-in-russia-after-diploma" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Russia after diploma</Link>.</li><li>Use HSC time to learn Russian; see <Link href="/study/russia/russian-language-preparatory-year-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Russian language preparatory year guide</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Costs and timelines</h2>
<p className="mt-4 leading-7 text-slate-700">After HSC, the Russian language year costs about RUB 150,000 to 300,000 (about Tk 2.3 to 4.7 lakh) for self-funded students. Full details are in <Link href="/study/russia/tuition-fees-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Russia for Bangladeshi students</Link>, and everyday spending in <Link href="/study/russia/cost-of-living-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Russia</Link>.</p>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 USD = about Tk 122 and 1 RUB = about Tk 1.55 and are indicative estimates for 2026–2027 based on published university fee schedules. Fees, visa rules and exchange rates change, and sanctions affect payments, so always confirm with the university, the Russian authorities or an Eammu Holidays counselor before paying.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Why unofficial routes are risky</h2>
<p className="mt-4 leading-7 text-slate-700">Some agents promise early entry after SSC, quick visas or jobs. These routes can end in visa refusal, wasted fees or worse; read <Link href="/study/russia/safety-and-scam-warning-for-students-in-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the safety and scam warning guide</Link>. Check scholarship routes in <Link href="/study/russia/scholarships-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Russia</Link> instead.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Choosing the right pathway</h2>
<p className="mt-4 leading-7 text-slate-700">Finish HSC, build language skills and apply through official channels. If you have a break after SSC, see <Link href="/study/russia/study-gap-accepted-universities-in-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">gap-accepted universities in Russia</Link>, and confirm the <Link href="/study/russia/russia-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake</Link> that fits your results timeline.</p>
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
