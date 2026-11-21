import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/lithuania/degree-recognition-and-accreditation-in-lithuania';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Degree Recognition Lithuania Guide 2026 | Eammu Holidays",
  "description": "Degree recognition and accreditation in Lithuania explained for Bangladeshi students in 2026: how to verify equivalence and professional acceptance first.",
  "alternates": {
    "canonical": "https://eammu.com/study/lithuania/degree-recognition-and-accreditation-in-lithuania"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Degree Recognition Lithuania Guide 2026 | Eammu Holidays",
    "description": "Degree recognition and accreditation in Lithuania explained for Bangladeshi students in 2026: how to verify equivalence and professional acceptance first.",
    "url": "https://eammu.com/study/lithuania/degree-recognition-and-accreditation-in-lithuania",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Degree Recognition Lithuania Guide 2026 | Eammu Holidays",
    "description": "Degree recognition and accreditation in Lithuania explained for Bangladeshi students in 2026: how to verify equivalence and professional acceptance first."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Lithuania", "href": "/study/lithuania"}, {"name": "Degree Recognition", "href": "/study/lithuania/degree-recognition-and-accreditation-in-lithuania"}];
const NAV = [
  {
    "label": "Lithuania Hub",
    "pages": [
      {
        "href": "/study/lithuania",
        "label": "Study in Lithuania Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/lithuania/study-in-lithuania-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/lithuania/study-in-lithuania-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/lithuania/tuition-fees-in-lithuania-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/lithuania/cost-of-living-in-lithuania-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/lithuania/cheapest-universities-in-lithuania",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/lithuania/top-universities-in-lithuania",
        "label": "Top Universities"
      },
      {
        "href": "/study/lithuania/public-vs-private-universities-in-lithuania",
        "label": "Public vs Private"
      },
      {
        "href": "/study/lithuania/scholarships-in-lithuania-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/lithuania/admission-requirements-in-lithuania-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/lithuania/study-gap-accepted-universities-in-lithuania",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/lithuania/study-in-lithuania-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/lithuania/study-in-lithuania-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/lithuania/lithuania-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/lithuania/mbbs-and-medicine-in-lithuania-for-bangladeshi-students",
        "label": "MBBS & Medicine"
      },
      {
        "href": "/study/lithuania/degree-recognition-and-accreditation-in-lithuania",
        "label": "Degree Recognition"
      },
      {
        "href": "/study/lithuania/cse-and-it-courses-in-lithuania",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/lithuania/business-and-management-degrees-in-lithuania",
        "label": "Business & Management"
      },
      {
        "href": "/study/lithuania/student-accommodation-in-lithuania",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, Permit & Work Rules",
    "pages": [
      {
        "href": "/study/lithuania/student-visa-requirements-bangladesh",
        "label": "Residence Permit Requirements"
      },
      {
        "href": "/study/lithuania/trp-application-process-migris-and-vfs-guide",
        "label": "TRP Application Process"
      },
      {
        "href": "/study/lithuania/bank-solvency-requirements-for-lithuania-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/lithuania/student-visa-processing-time-and-cost",
        "label": "Permit Time & Cost"
      },
      {
        "href": "/study/lithuania/part-time-job-and-post-study-work-rules-in-lithuania",
        "label": "Work Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/lithuania/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/lithuania/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/lithuania/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/lithuania/mbbs-and-medicine-in-lithuania-for-bangladeshi-students",
    "title": "MBBS and Medicine in Lithuania for Bangladeshi Students",
    "description": "Entry rules, costs and recognition checks for Bangladeshi students considering English-taught medicine in Lithuania."
  },
  {
    "href": "/study/lithuania/top-universities-in-lithuania",
    "title": "Top Universities in Lithuania",
    "description": "Overview of well-known Lithuanian universities and how to choose among them."
  },
  {
    "href": "/study/lithuania/cheapest-universities-in-lithuania",
    "title": "Cheapest Universities in Lithuania",
    "description": "How to find low-cost Lithuanian universities and what to check beyond the headline tuition fee, including quality and permit risk."
  },
  {
    "href": "/study/lithuania/admission-requirements-in-lithuania-for-bangladeshi-students",
    "title": "Admission Requirements in Lithuania for Bangladeshi Students",
    "description": "HSC, degree, English and document requirements for Lithuanian universities explained for Bangladeshi applicants."
  }
];
const FAQS = [
  {
    "q": "Will a Lithuanian degree be accepted in Bangladesh?",
    "a": "Acceptance depends on the university, the programme and the Bangladeshi authority or employer. Verify before enrolling."
  },
  {
    "q": "Is a Lithuanian degree recognised in the EU?",
    "a": "It follows the European framework, but recognition for regulated professions and work rights are decided separately by each country."
  },
  {
    "q": "Is the university accredited?",
    "a": "Ask for the accreditation certificate for the university and the programme, in writing."
  },
  {
    "q": "Can recognition rules change after I enrol?",
    "a": "Yes. Ask the university what support it offers if that happens."
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
          "name": "Lithuania",
          "item": "https://eammu.com/study/lithuania"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Degree Recognition",
          "item": "https://eammu.com/study/lithuania/degree-recognition-and-accreditation-in-lithuania"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Degree Recognition and Accreditation in Lithuania: What Bangladeshi Students Must Verify",
      "description": "Degree recognition and accreditation in Lithuania explained for Bangladeshi students in 2026: how to verify equivalence and professional acceptance first.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/lithuania/degree-recognition-and-accreditation-in-lithuania",
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
          "name": "Will a Lithuanian degree be accepted in Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Acceptance depends on the university, the programme and the Bangladeshi authority or employer. Verify before enrolling."
          }
        },
        {
          "@type": "Question",
          "name": "Is a Lithuanian degree recognised in the EU?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It follows the European framework, but recognition for regulated professions and work rights are decided separately by each country."
          }
        },
        {
          "@type": "Question",
          "name": "Is the university accredited?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ask for the accreditation certificate for the university and the programme, in writing."
          }
        },
        {
          "@type": "Question",
          "name": "Can recognition rules change after I enrol?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Ask the university what support it offers if that happens."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Lithuania 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Degree Recognition and Accreditation in Lithuania: What Bangladeshi Students Must Verify</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A degree is only as useful as its recognition where you plan to work or study next. Verify before you pay.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Lithuania guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Lithuania guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Why recognition matters</h2>
<p className="mt-4 leading-7 text-slate-700">Recognition decides whether your degree helps you get a licence, a job or a place in a postgraduate programme. Lithuanian universities and programmes are accredited by Lithuanian authorities and follow the European higher education framework, and the national quality centre evaluates foreign qualifications. Acceptance in Bangladesh and elsewhere is decided separately by the University Grants Commission, professional bodies such as BMDC and employers. Read <Link href="/study/lithuania/mbbs-and-medicine-in-lithuania-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MBBS and medicine in Lithuania</Link> for medical degrees and compare institutions in <Link href="/study/lithuania/top-universities-in-lithuania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Lithuania</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">Rules change over time. Always check the current position with the authority that matters to you, not only with the university or an agent.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">What to verify</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Ask the university for its accreditation certificate and the programme&apos;s accreditation, in writing.</li><li>Contact the University Grants Commission and, for regulated professions, the relevant professional body such as BMDC, to check how graduates of this university are treated.</li><li>If you plan further study or work in another country, ask that country&apos;s recognition office.</li><li>Ask recent Bangladeshi graduates how they used the degree.</li></ol>
<p className="mt-4 leading-7 text-slate-700">This matters most for regulated professions. Compare <Link href="/study/lithuania/cheapest-universities-in-lithuania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the cheapest universities in Lithuania</Link> with recognition in mind.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Questions to ask before paying a deposit</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Is the programme accredited, and by which body?</li><li>Does the curriculum include enough practical training for my profession?</li><li>What happens to my enrolment if recognition rules change?</li><li>Is the quoted fee final? See <Link href="/study/lithuania/tuition-fees-in-lithuania-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Lithuania</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">How Eammu Holidays can help</h2>
<p className="mt-4 leading-7 text-slate-700">We help you prepare these questions and compare options without pressure. We cannot guarantee recognition decisions made by other authorities. Start at <Link href="/study/lithuania/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">our Dhaka counseling desk</Link> or read the <Link href="/study/lithuania/admission-requirements-in-lithuania-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link> first.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Lithuania Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Lithuania</h2>
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
