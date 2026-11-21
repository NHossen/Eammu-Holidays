import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/russia/russian-language-preparatory-year-guide';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Russian Language Preparatory Year 2026 | Eammu Holidays",
  "description": "Russian language preparatory year guide for Bangladeshi students in 2026: who needs it, fees in RUB and BDT, how it works and visa notes. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/russia/russian-language-preparatory-year-guide"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Russian Language Preparatory Year 2026 | Eammu Holidays",
    "description": "Russian language preparatory year guide for Bangladeshi students in 2026: who needs it, fees in RUB and BDT, how it works and visa notes. Eammu Holidays.",
    "url": "https://eammu.com/study/russia/russian-language-preparatory-year-guide",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Russian Language Preparatory Year 2026 | Eammu Holidays",
    "description": "Russian language preparatory year guide for Bangladeshi students in 2026: who needs it, fees in RUB and BDT, how it works and visa notes. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Russia", "href": "/study/russia"}, {"name": "Russian Language Year", "href": "/study/russia/russian-language-preparatory-year-guide"}];
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
    "href": "/study/russia/tuition-fees-in-russia-for-bangladeshi-students",
    "title": "Tuition Fees in Russia for Bangladeshi Students",
    "description": "Realistic tuition ranges in RUB and BDT for the language year, bachelor’s, medicine and master’s programmes in Russia."
  },
  {
    "href": "/study/russia/invitation-letter-and-visa-process-guide-russia",
    "title": "Invitation Letter and Visa Process Guide for Russia",
    "description": "How the official invitation letter works and the stages from admission to arrival registration in Russia."
  },
  {
    "href": "/study/russia/admission-requirements-in-russia-for-bangladeshi-students",
    "title": "Admission Requirements in Russia for Bangladeshi Students",
    "description": "SSC, HSC, diploma, language and document requirements for Russian universities explained for Bangladeshi applicants."
  },
  {
    "href": "/study/russia/study-in-russia-without-ielts",
    "title": "Study in Russia Without IELTS",
    "description": "How Bangladeshi students can enter Russian universities without IELTS using interviews, entrance tests or a Russian language year."
  }
];
const FAQS = [
  {
    "q": "How long is the preparatory year?",
    "a": "One academic year, from September to early summer."
  },
  {
    "q": "Can I skip the preparatory year?",
    "a": "Not for Russian-taught programmes unless you already have the required Russian proof."
  },
  {
    "q": "Is the year taught in English?",
    "a": "It is taught in Russian, with support in English at a basic level in some universities."
  },
  {
    "q": "Does the year guarantee admission to my degree?",
    "a": "No. You must pass the language exam and meet the university's requirements."
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
          "name": "Russian Language Year",
          "item": "https://eammu.com/study/russia/russian-language-preparatory-year-guide"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Russian Language Preparatory Year Guide for Bangladeshi Students (2026)",
      "description": "Russian language preparatory year guide for Bangladeshi students in 2026: who needs it, fees in RUB and BDT, how it works and visa notes. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/russia/russian-language-preparatory-year-guide",
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
          "name": "How long is the preparatory year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "One academic year, from September to early summer."
          }
        },
        {
          "@type": "Question",
          "name": "Can I skip the preparatory year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not for Russian-taught programmes unless you already have the required Russian proof."
          }
        },
        {
          "@type": "Question",
          "name": "Is the year taught in English?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is taught in Russian, with support in English at a basic level in some universities."
          }
        },
        {
          "@type": "Question",
          "name": "Does the year guarantee admission to my degree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. You must pass the language exam and meet the university's requirements."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Russian Language Preparatory Year Guide for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">If you choose a Russian-taught degree, a preparatory language year is usually compulsory. Here is how it works.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Who needs the preparatory year?</h2>
<p className="mt-4 leading-7 text-slate-700">International students who choose a Russian-taught bachelor&apos;s or master&apos;s programme normally complete a one-year preparatory programme at the university&apos;s preparatory faculty first, covering Russian language and some subject basics. English-taught programmes may not require it, though basic Russian is very useful. Government quota students are often assigned to a preparatory year too; see <Link href="/study/russia/scholarships-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Russia</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">Students without strong English often choose this route; see &#123;&#123;no-ielts|study in Russia without IELTS&#125;&#125; and the <Link href="/study/russia/admission-requirements-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements for Bangladeshi students</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Cost and timeline</h2>
<p className="mt-4 leading-7 text-slate-700">Fees for self-funded preparatory years generally range from about RUB 150,000 to 300,000 (about Tk 2.3 to 4.7 lakh), depending on the university, plus living costs. Quota students pay no tuition. See <Link href="/study/russia/tuition-fees-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Russia for Bangladeshi students</Link> for the full picture.</p>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 USD = about Tk 122 and 1 RUB = about Tk 1.55 and are indicative estimates for 2026–2027 based on published university fee schedules. Fees, visa rules and exchange rates change, and sanctions affect payments, so always confirm with the university, the Russian authorities or an Eammu Holidays counselor before paying.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">What happens after the year</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>You take a Russian language exam and, if you pass, move into your degree programme.</li><li>You then pay degree tuition, unless covered by the quota.</li><li>You gain language skills useful for clinical years, daily life and safe decision-making; see <Link href="/study/russia/safety-and-scam-warning-for-students-in-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the safety and scam warning guide</Link>.</li></ul>
<p className="mt-4 leading-7 text-slate-700">The extra year adds time and cost, so compare it with English-taught options in <Link href="/study/russia/cse-and-it-courses-in-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">engineering and IT courses in Russia</Link> and <Link href="/study/russia/mbbs-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MBBS in Russia</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Visa and residence implications</h2>
<p className="mt-4 leading-7 text-slate-700">The preparatory year has its own invitation letter and visa; see <Link href="/study/russia/invitation-letter-and-visa-process-guide-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the invitation letter and visa process guide</Link>. Plan funds for the whole stay with <Link href="/study/russia/bank-solvency-requirements-for-russia-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the bank solvency and payment guide</Link>.</p>
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
