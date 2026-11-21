import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/australia/study-in-australia-from-bangladesh';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Australia from Bangladesh 2026 | Eammu Holidays",
  "description": "Complete 2026 guide for Bangladeshi students to study in Australia: costs in BDT, Evidence Level 3, Genuine Student test, visa fee, work rights and post-study options. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/australia/study-in-australia-from-bangladesh"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Australia from Bangladesh 2026 | Eammu Holidays",
    "description": "Complete 2026 guide for Bangladeshi students to study in Australia: costs in BDT, Evidence Level 3, Genuine Student test, visa fee, work rights and post-study options. Eammu Holidays.",
    "url": "https://eammu.com/study/australia/study-in-australia-from-bangladesh",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Australia from Bangladesh 2026 | Eammu Holidays",
    "description": "Complete 2026 guide for Bangladeshi students to study in Australia: costs in BDT, Evidence Level 3, Genuine Student test, visa fee, work rights and post-study options. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Australia", "href": "/study/australia"}, {"name": "Study from Bangladesh", "href": "/study/australia/study-in-australia-from-bangladesh"}];
const NAV = [
  {
    "label": "Australia Hub",
    "pages": [
      {
        "href": "/study/australia",
        "label": "Study in Australia Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/australia/study-in-australia-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/australia/study-in-australia-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/australia/english-test-requirements-for-australia",
        "label": "English Test Requirements"
      },
      {
        "href": "/study/australia/tuition-fees-in-australia-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/australia/cost-of-living-in-australia-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/australia/cheapest-universities-in-australia",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/australia/top-universities-in-australia",
        "label": "Top Universities"
      },
      {
        "href": "/study/australia/universities-vs-vet-and-private-colleges-in-australia",
        "label": "Universities vs VET & Private"
      },
      {
        "href": "/study/australia/scholarships-in-australia-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/australia/admission-requirements-in-australia-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/australia/study-gap-accepted-in-australia",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/australia/study-in-australia-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/australia/study-in-australia-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/australia/australia-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Courses, Housing & Life",
    "pages": [
      {
        "href": "/study/australia/application-guide-for-australian-universities",
        "label": "Application Guide"
      },
      {
        "href": "/study/australia/degree-recognition-and-eligibility-in-australia",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/australia/it-and-cse-courses-in-australia",
        "label": "IT & CSE Courses"
      },
      {
        "href": "/study/australia/mba-and-masters-in-australia-for-bangladeshi-students",
        "label": "MBA & Master's"
      },
      {
        "href": "/study/australia/nursing-and-health-courses-in-australia",
        "label": "Nursing & Health Courses"
      },
      {
        "href": "/study/australia/student-accommodation-in-australia",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/australia/oshc-health-cover-for-international-students",
        "label": "OSHC Health Cover"
      },
      {
        "href": "/study/australia/regional-study-in-australia",
        "label": "Regional Study"
      },
      {
        "href": "/study/australia/student-life-halal-food-and-safety-in-australia",
        "label": "Student Life, Halal & Safety"
      }
    ]
  },
  {
    "label": "Visa, Funds & Work Rules",
    "pages": [
      {
        "href": "/study/australia/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/australia/evidence-level-3-explained-for-bangladeshi-students",
        "label": "Evidence Level 3 Explained"
      },
      {
        "href": "/study/australia/genuine-student-requirement-guide",
        "label": "Genuine Student Guide"
      },
      {
        "href": "/study/australia/proof-of-funds-requirements-for-australia-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/australia/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/australia/visa-refusal-reasons-and-how-to-avoid-them",
        "label": "Visa Refusal Reasons"
      },
      {
        "href": "/study/australia/part-time-job-and-work-rules-in-australia",
        "label": "Work Rules"
      },
      {
        "href": "/study/australia/temporary-graduate-visa-485-and-pr-pathways",
        "label": "485 Visa & PR Pathways"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/australia/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/australia/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/australia/tuition-fees-in-australia-for-bangladeshi-students",
    "title": "Tuition Fees in Australia for Bangladeshi Students",
    "description": "A clear AUD-to-BDT look at what each level of study costs and which fees families forget."
  },
  {
    "href": "/study/australia/evidence-level-3-explained-for-bangladeshi-students",
    "title": "Evidence Level 3 Explained: What It Means for Bangladeshi Students",
    "description": "Why Bangladesh was moved to the highest-scrutiny tier, how officers assess applications now and how to prepare."
  },
  {
    "href": "/study/australia/student-visa-requirements-bangladesh",
    "title": "Australia Student Visa (Subclass 500) Requirements for Bangladeshi Students",
    "description": "Documents, funds, English, health, police and biometrics, plus the 2026 changes that affect Bangladeshi applicants."
  },
  {
    "href": "/study/australia/scholarships-in-australia-for-bangladeshi-students",
    "title": "Scholarships in Australia for Bangladeshi Students",
    "description": "Australia Awards, research scholarships and university awards explained, with realistic odds and how to apply."
  }
];
const FAQS = [
  {
    "q": "Is Australia a good choice for Bangladeshi students in 2026?",
    "a": "It can be, especially for well-prepared applicants with strong finances and a clear study plan, but visa scrutiny is higher than before."
  },
  {
    "q": "How much money do I need to show?",
    "a": "Home Affairs lists A$29,710 for 12 months of living costs for the student, plus first-year tuition and travel, or alternatively qualifying family income."
  },
  {
    "q": "Can I apply without an agent?",
    "a": "Yes. Universities and Home Affairs accept direct applications. A counselor helps with shortlisting, documents and the Genuine Student answers."
  },
  {
    "q": "When should I apply?",
    "a": "Start 6 to 9 months before the intake, because offers, deposits, tests and visa steps take time and provider places are limited."
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
          "name": "Australia",
          "item": "https://eammu.com/study/australia"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Study from Bangladesh",
          "item": "https://eammu.com/study/australia/study-in-australia-from-bangladesh"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Australia from Bangladesh: Complete Step-by-Step Guide (2026)",
      "description": "Complete 2026 guide for Bangladeshi students to study in Australia: costs in BDT, Evidence Level 3, Genuine Student test, visa fee, work rights and post-study options. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/australia/study-in-australia-from-bangladesh",
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
          "name": "Is Australia a good choice for Bangladeshi students in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be, especially for well-prepared applicants with strong finances and a clear study plan, but visa scrutiny is higher than before."
          }
        },
        {
          "@type": "Question",
          "name": "How much money do I need to show?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Home Affairs lists A$29,710 for 12 months of living costs for the student, plus first-year tuition and travel, or alternatively qualifying family income."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply without an agent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Universities and Home Affairs accept direct applications. A counselor helps with shortlisting, documents and the Genuine Student answers."
          }
        },
        {
          "@type": "Question",
          "name": "When should I apply?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start 6 to 9 months before the intake, because offers, deposits, tests and visa steps take time and provider places are limited."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Australia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Australia from Bangladesh: Complete Step-by-Step Guide (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A realistic route from profile check to arrival, with costs in BDT, the Genuine Student test, funds, work rules and the tougher 2026 visa climate.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-21">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Australia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 46 Australia guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Why Bangladeshi students consider Australia</h2>
<p className="mt-4 leading-7 text-slate-700">Australia offers globally ranked universities, a wide choice of English-taught courses, work rights during study and a Temporary Graduate visa for eligible graduates. Bangladesh is an established source country, and many students pick Australia for IT, engineering, business, nursing and health courses. The country is also a costly and tightly regulated destination, and 2026 is a harder year to apply than any in the recent past.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">What has changed in 2026 (read this first)</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li><strong>Evidence Level 3:</strong> Bangladesh was moved to the highest-scrutiny tier on 8 January 2026, and officers rely less on the provider&apos;s word and more on your documents.</li><li><strong>Visa charge:</strong> the main-applicant Student visa charge rose from A$2,000 to A$2,500 from 1 July 2026.</li><li><strong>Funds benchmark:</strong> Home Affairs lists A$29,710 for 12 months of living costs, on top of tuition and travel.</li><li><strong>Enrolment cap:</strong> the National Planning Level stays at 295,000 new commencements for 2027, and providers have limited allocations.</li><li><strong>Onshore switching:</strong> from 2 October 2026 most people can no longer apply for a Student visa from inside Australia, so plan to apply from Bangladesh.</li><li><strong>Graduate visa:</strong> the Temporary Graduate (485) charge is A$5,750 from 1 July 2026 and the age limit is 35.</li></ul>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">These are reported changes confirmed from several 2026 sources. Always verify on Home Affairs (homeaffairs.gov.au) and Study Australia (studyaustralia.gov.au) before you act.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Your route in eight steps</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li><strong>Profile and budget check.</strong> Compare your family&apos;s funds with <Link href="/study/australia/tuition-fees-in-australia-for-bangladeshi-students" className={linkClass}>tuition fees</Link> and <Link href="/study/australia/cost-of-living-in-australia-for-bangladeshi-students" className={linkClass}>cost of living</Link>.</li><li><strong>Pick course and provider.</strong> Use CRICOS to confirm the course is registered; see <Link href="/study/australia/top-universities-in-australia" className={linkClass}>top universities</Link> and <Link href="/study/australia/universities-vs-vet-and-private-colleges-in-australia" className={linkClass}>universities vs VET and private colleges</Link>.</li><li><strong>English test.</strong> See <Link href="/study/australia/english-test-requirements-for-australia" className={linkClass}>English test requirements</Link>.</li><li><strong>Apply and receive an offer.</strong> See the <Link href="/study/australia/application-guide-for-australian-universities" className={linkClass}>application guide</Link>.</li><li><strong>Accept, pay deposit and get the electronic Confirmation of Enrolment (CoE).</strong></li><li><strong>Buy OSHC and prepare funds evidence.</strong> See <Link href="/study/australia/oshc-health-cover-for-international-students" className={linkClass}>OSHC</Link> and <Link href="/study/australia/proof-of-funds-requirements-for-australia-student-visa" className={linkClass}>proof of funds</Link>.</li><li><strong>Lodge the visa in ImmiAccount</strong> with your Genuine Student answers; see <Link href="/study/australia/genuine-student-requirement-guide" className={linkClass}>Genuine Student guide</Link>.</li><li><strong>Health, biometrics, grant and travel.</strong> Arrive no earlier than permitted by your CoE and visa conditions.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Indicative first-year budget</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">Indicative AUD</th><th scope="col" className="px-3 py-2 text-left font-bold">Indicative BDT</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tuition, bachelor or master per year</td><td className="px-3 py-2 align-top">A$30,000 – 50,000</td><td className="px-3 py-2 align-top">Tk 24 – 40 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living cost benchmark for the visa</td><td className="px-3 py-2 align-top">A$29,710</td><td className="px-3 py-2 align-top">Tk 23.8 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Student visa charge (main applicant)</td><td className="px-3 py-2 align-top">A$2,500</td><td className="px-3 py-2 align-top">Tk 2.0 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">OSHC for the visa period</td><td className="px-3 py-2 align-top">Roughly A$600 – 800 per year</td><td className="px-3 py-2 align-top">Tk 48,000 – 64,000 per year</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Return flight Dhaka to Australia</td><td className="px-3 py-2 align-top">A$900 – 1,800</td><td className="px-3 py-2 align-top">Tk 72,000 – 1.44 lakh</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 AUD = about Tk 80 and are indicative estimates for 2026–2027 based on published university fees and Home Affairs rules. Fees, visa charges, funds requirements and exchange rates change (visa charges usually change every 1 July), so always confirm on the Home Affairs website, the university page or with an Eammu Holidays counselor before paying.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Who should think twice</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Families who can only just reach the funds requirement; evidence must be genuine, traceable and long-held.</li><li>Students who plan to rely on part-time work for tuition; the 48-hour fortnight cap is enforced.</li><li>Applicants whose study plan does not clearly link to their background and career.</li></ul>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Australia Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Australia</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and scholarship shortlist, Genuine Student and visa guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
