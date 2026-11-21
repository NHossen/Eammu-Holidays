import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/armenia/admission-requirements-in-armenia-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Armenia Admission Requirements Guide 2026 | Eammu Holidays",
  "description": "Admission requirements in Armenia for Bangladeshi students in 2026: HSC and diploma GPA, English proof and documents for medicine and other degrees.",
  "alternates": {
    "canonical": "https://eammu.com/study/armenia/admission-requirements-in-armenia-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Armenia Admission Requirements Guide 2026 | Eammu Holidays",
    "description": "Admission requirements in Armenia for Bangladeshi students in 2026: HSC and diploma GPA, English proof and documents for medicine and other degrees.",
    "url": "https://eammu.com/study/armenia/admission-requirements-in-armenia-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Armenia Admission Requirements Guide 2026 | Eammu Holidays",
    "description": "Admission requirements in Armenia for Bangladeshi students in 2026: HSC and diploma GPA, English proof and documents for medicine and other degrees."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Armenia", "href": "/study/armenia"}, {"name": "Admission Requirements", "href": "/study/armenia/admission-requirements-in-armenia-for-bangladeshi-students"}];
const NAV = [
  {
    "label": "Armenia Hub",
    "pages": [
      {
        "href": "/study/armenia",
        "label": "Study in Armenia Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/armenia/study-in-armenia-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/armenia/study-in-armenia-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/armenia/tuition-fees-in-armenia-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/armenia/cost-of-living-in-armenia-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/armenia/cheapest-universities-in-armenia",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/armenia/top-universities-in-armenia",
        "label": "Top Universities"
      },
      {
        "href": "/study/armenia/public-vs-private-universities-in-armenia",
        "label": "Public vs Private"
      },
      {
        "href": "/study/armenia/scholarships-in-armenia-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/armenia/admission-requirements-in-armenia-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/armenia/study-gap-accepted-universities-in-armenia",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/armenia/study-in-armenia-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/armenia/study-in-armenia-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/armenia/armenia-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/armenia/mbbs-in-armenia-for-bangladeshi-students",
        "label": "MBBS in Armenia"
      },
      {
        "href": "/study/armenia/medical-degree-recognition-and-bmdc-guide-armenia",
        "label": "Degree Recognition & BMDC"
      },
      {
        "href": "/study/armenia/mba-in-armenia-for-bangladeshi-students",
        "label": "MBA & Master's"
      },
      {
        "href": "/study/armenia/cse-and-it-courses-in-armenia",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/armenia/student-accommodation-in-armenia",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, Residence & Work Rules",
    "pages": [
      {
        "href": "/study/armenia/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/armenia/temporary-residence-permit-and-arrival-guide-armenia",
        "label": "Residence Permit & Arrival"
      },
      {
        "href": "/study/armenia/bank-solvency-requirements-for-armenia-student-visa",
        "label": "Bank Solvency"
      },
      {
        "href": "/study/armenia/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/armenia/part-time-job-and-post-study-work-rules-in-armenia",
        "label": "Work Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/armenia/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/armenia/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/armenia/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/armenia/study-in-armenia-without-ielts",
    "title": "Study in Armenia Without IELTS",
    "description": "How Bangladeshi students can enter Armenian universities without IELTS using interviews, preparatory programmes or English-medium certificates."
  },
  {
    "href": "/study/armenia/study-gap-accepted-universities-in-armenia",
    "title": "Study Gap Accepted Universities in Armenia",
    "description": "How study gaps are treated by Armenian universities and what documents explain a gap for Bangladeshi applicants."
  },
  {
    "href": "/study/armenia/student-visa-requirements-bangladesh",
    "title": "Armenia Student Visa Requirements for Bangladesh",
    "description": "Documents and steps for entering Armenia as a Bangladeshi student, including visa route, admission letter and residence permit."
  },
  {
    "href": "/study/armenia/armenia-intake-dates",
    "title": "Armenia Intake Dates",
    "description": "Main intake months in Armenia and the best time for Bangladeshi students to start applications."
  }
];
const FAQS = [
  {
    "q": "Can I apply with SSC only?",
    "a": "Usually you need HSC or a preparatory route. Check each university."
  },
  {
    "q": "Is there a fixed minimum GPA?",
    "a": "No. Each university sets its own and may also test or interview applicants."
  },
  {
    "q": "Do I need attested documents?",
    "a": "Often yes, with legalisation or apostille as required. Check the current method with the university."
  },
  {
    "q": "Are interviews or tests required?",
    "a": "Medical and some other programmes commonly use interviews or entrance tests."
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
          "name": "Armenia",
          "item": "https://eammu.com/study/armenia"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Admission Requirements",
          "item": "https://eammu.com/study/armenia/admission-requirements-in-armenia-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Admission Requirements in Armenia for Bangladeshi Students (2026)",
      "description": "Admission requirements in Armenia for Bangladeshi students in 2026: HSC and diploma GPA, English proof and documents for medicine and other degrees.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/armenia/admission-requirements-in-armenia-for-bangladeshi-students",
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
          "name": "Can I apply with SSC only?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually you need HSC or a preparatory route. Check each university."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a fixed minimum GPA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Each university sets its own and may also test or interview applicants."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need attested documents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often yes, with legalisation or apostille as required. Check the current method with the university."
          }
        },
        {
          "@type": "Question",
          "name": "Are interviews or tests required?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Medical and some other programmes commonly use interviews or entrance tests."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Armenia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Admission Requirements in Armenia for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Which results, tests and documents Armenian universities usually ask for at each level of study.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Armenia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Armenia guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Academic requirements by level</h2>
<p className="mt-4 leading-7 text-slate-700">Entry rules differ by university and programme, so treat these as typical ranges. Students with SSC usually need HSC or a preparatory route; see <Link href="/study/armenia/study-in-armenia-after-ssc" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Armenia after SSC</Link>. HSC graduates can apply for bachelor&apos;s programmes, and diploma holders should read <Link href="/study/armenia/study-in-armenia-after-diploma" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Armenia after diploma</Link>.</p>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Level</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical Bangladeshi requirement</th><th scope="col" className="px-3 py-2 text-left font-bold">Notes</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Preparatory year</td><td className="px-3 py-2 align-top">SSC or HSC; basic English</td><td className="px-3 py-2 align-top">For students needing language or subject bridging</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Medicine (MD/MBBS)</td><td className="px-3 py-2 align-top">HSC Science with Biology, Chemistry, Physics</td><td className="px-3 py-2 align-top">Entrance test or interview is common; see <Link href="/study/armenia/mbbs-in-armenia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MBBS in Armenia</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor&apos;s (other)</td><td className="px-3 py-2 align-top">HSC with a passing or good GPA</td><td className="px-3 py-2 align-top">IT and engineering favour mathematics</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Master&apos;s</td><td className="px-3 py-2 align-top">Bachelor&apos;s degree, CGPA around 2.5 – 3.0+</td><td className="px-3 py-2 align-top">Business programmes may ask for experience</td></tr></tbody></table></div>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">English language proof</h2>
<p className="mt-4 leading-7 text-slate-700">Many universities accept interviews or internal assessments, while some ask for IELTS 5.5 to 6.0; see &#123;&#123;no-ielts|study in Armenia without IELTS&#125;&#125;.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Documents checklist</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Passport and photographs.</li><li>SSC/HSC or diploma/degree certificates and transcripts, legalised or apostilled as required.</li><li>English evidence or interview confirmation.</li><li>Medical certificates and police clearance where requested, for the <Link href="/study/armenia/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa and residence stage</Link>.</li><li>Bank statements for the <Link href="/study/armenia/bank-solvency-requirements-for-armenia-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bank solvency requirements</Link> stage.</li></ul>
<p className="mt-4 leading-7 text-slate-700">If you have a break in education, see <Link href="/study/armenia/study-gap-accepted-universities-in-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">gap-accepted universities in Armenia</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">After you receive an offer</h2>
<p className="mt-4 leading-7 text-slate-700">Accept the offer, pay only through official university channels and follow the <Link href="/study/armenia/temporary-residence-permit-and-arrival-guide-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">residence permit and arrival guide</Link>. Confirm your <Link href="/study/armenia/armenia-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake</Link> and read <Link href="/study/armenia/medical-degree-recognition-and-bmdc-guide-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the recognition guide</Link> before paying large sums.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Armenia Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Armenia</h2>
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
