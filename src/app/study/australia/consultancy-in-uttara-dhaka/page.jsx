import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/australia/consultancy-in-uttara-dhaka';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Australia Study Consultancy in Uttara 2026 | Eammu Holidays",
  "description": "Study in Australia counseling for Uttara students in 2026: tuition in BDT, Evidence Level 3, funds, Genuine Student and visa guidance with Eammu Holidays; online and Dhaka desk.",
  "alternates": {
    "canonical": "https://eammu.com/study/australia/consultancy-in-uttara-dhaka"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Australia Study Consultancy in Uttara 2026 | Eammu Holidays",
    "description": "Study in Australia counseling for Uttara students in 2026: tuition in BDT, Evidence Level 3, funds, Genuine Student and visa guidance with Eammu Holidays; online and Dhaka desk.",
    "url": "https://eammu.com/study/australia/consultancy-in-uttara-dhaka",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Australia Study Consultancy in Uttara 2026 | Eammu Holidays",
    "description": "Study in Australia counseling for Uttara students in 2026: tuition in BDT, Evidence Level 3, funds, Genuine Student and visa guidance with Eammu Holidays; online and Dhaka desk."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Australia", "href": "/study/australia"}, {"name": "Uttara Consultancy", "href": "/study/australia/consultancy-in-uttara-dhaka"}];
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
    "href": "/study/australia/scholarships-in-australia-for-bangladeshi-students",
    "title": "Scholarships in Australia for Bangladeshi Students",
    "description": "Australia Awards, research scholarships and university awards explained, with realistic odds and how to apply."
  },
  {
    "href": "/study/australia/student-visa-requirements-bangladesh",
    "title": "Australia Student Visa (Subclass 500) Requirements for Bangladeshi Students",
    "description": "Documents, funds, English, health, police and biometrics, plus the 2026 changes that affect Bangladeshi applicants."
  },
  {
    "href": "/study/australia/consultancy-in-dhaka",
    "title": "Study in Australia Consultancy for Dhaka Students",
    "description": "Counseling, funds review, Genuine Student coaching and visa guidance for Dhaka students, with honest notes on logistics."
  }
];
const FAQS = [
  {
    "q": "Can I get counseling from Uttara without visiting Dhaka?",
    "a": "Yes. Profile review, shortlisting and document guidance can be done online. A Dhaka trip may be needed for biometrics or health checks."
  },
  {
    "q": "How much should a Uttara family budget for the first year?",
    "a": "Many courses need roughly Tk 55 to 70 lakh of evidence for tuition, living costs and travel, plus the visa charge and OSHC. See the tuition and funds guides."
  },
  {
    "q": "When should Uttara students start?",
    "a": "Start 8 to 10 months before the intake so there is time for English tests, funds evidence and processing."
  },
  {
    "q": "Do you guarantee a visa?",
    "a": "No. Nobody can guarantee a visa. We help you prepare an honest, well-documented application."
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
          "name": "Uttara Consultancy",
          "item": "https://eammu.com/study/australia/consultancy-in-uttara-dhaka"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Australia Consultancy for Uttara Students (2026)",
      "description": "Study in Australia counseling for Uttara students in 2026: tuition in BDT, Evidence Level 3, funds, Genuine Student and visa guidance with Eammu Holidays; online and Dhaka desk.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/australia/consultancy-in-uttara-dhaka",
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
          "name": "Can I get counseling from Uttara without visiting Dhaka?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Profile review, shortlisting and document guidance can be done online. A Dhaka trip may be needed for biometrics or health checks."
          }
        },
        {
          "@type": "Question",
          "name": "How much should a Uttara family budget for the first year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many courses need roughly Tk 55 to 70 lakh of evidence for tuition, living costs and travel, plus the visa charge and OSHC. See the tuition and funds guides."
          }
        },
        {
          "@type": "Question",
          "name": "When should Uttara students start?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start 8 to 10 months before the intake so there is time for English tests, funds evidence and processing."
          }
        },
        {
          "@type": "Question",
          "name": "Do you guarantee a visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Nobody can guarantee a visa. We help you prepare an honest, well-documented application."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Australia Consultancy for Uttara Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Counseling, funds review, Genuine Student coaching and visa guidance for Uttara students, with honest notes on logistics.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Counseling for Uttara families</h2>
<p className="mt-4 leading-7 text-slate-700">Uttara has many students from English-medium and Bangla-medium schools aiming at Australia, the UK and North America. Many compare Australia&apos;s costs with Europe and Malaysia, so we start with a full cost and funds review.</p>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays does not claim a separate Uttara branch. Our main Dhaka desk and online sessions serve students from Uttara. See the <Link href="/study/australia/consultancy-in-dhaka" className={linkClass}>main Dhaka consultancy page</Link> for the desk details.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Travel and logistics from Uttara</h2>
<p className="mt-4 leading-7 text-slate-700">Metro Rail Line 6 runs along the Uttara corridor and helps with Dhaka travel, but traffic can still be slow, so book morning slots. Many Uttara students do round one by video call and visit once for original document checks.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Questions Uttara students ask most</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>How much money must my family show? See <Link href="/study/australia/proof-of-funds-requirements-for-australia-student-visa" className={linkClass}>proof of funds</Link>.</li><li>Will Evidence Level 3 affect me? See <Link href="/study/australia/evidence-level-3-explained-for-bangladeshi-students" className={linkClass}>Evidence Level 3 explained</Link>.</li><li>Which course and provider fit my background? See <Link href="/study/australia/genuine-student-requirement-guide" className={linkClass}>Genuine Student guide</Link>.</li><li>Can I get a scholarship? See <Link href="/study/australia/scholarships-in-australia-for-bangladeshi-students" className={linkClass}>scholarships in Australia</Link>.</li><li>Is an IELTS or PTE test better for me?</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">A note on funds from Uttara</h2>
<p className="mt-4 leading-7 text-slate-700">Families in Uttara often combine savings, property income and relatives&apos; support. Under Evidence Level 3 each source needs a paper trail: bank statements, income tax returns, business or land documents and proof of relationship. Start collecting them at least six months before lodging, and avoid sudden deposits.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Other locations</h2>
<p className="mt-4 leading-7 text-slate-700">Nearby students can also explore the Mirpur and Dhanmondi guides. You can also view all options on the <Link href="/study/australia/bangladesh-offices" className={linkClass}>Bangladesh offices page</Link>.</p>
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
