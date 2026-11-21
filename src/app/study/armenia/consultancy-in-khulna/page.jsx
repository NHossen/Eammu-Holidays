import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/armenia/consultancy-in-khulna';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Armenia Consultancy in Khulna 2026 | Eammu Holidays",
  "description": "Study in Armenia consultancy for Khulna students in 2026: online counseling, courier documents, engineering pathways and visa guidance from Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/armenia/consultancy-in-khulna"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Armenia Consultancy in Khulna 2026 | Eammu Holidays",
    "description": "Study in Armenia consultancy for Khulna students in 2026: online counseling, courier documents, engineering pathways and visa guidance from Eammu Holidays.",
    "url": "https://eammu.com/study/armenia/consultancy-in-khulna",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Armenia Consultancy in Khulna 2026 | Eammu Holidays",
    "description": "Study in Armenia consultancy for Khulna students in 2026: online counseling, courier documents, engineering pathways and visa guidance from Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Armenia", "href": "/study/armenia"}, {"name": "Khulna Consultancy", "href": "/study/armenia/consultancy-in-khulna"}];
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
    "href": "/study/armenia/consultancy-in-dhaka",
    "title": "Study in Armenia Consultancy in Dhaka",
    "description": "Study in Armenia consultancy in Dhaka for 2026: free walk-in counseling, university shortlisting, recognition checks and visa guidance from "
  },
  {
    "href": "/study/armenia/consultancy-in-barishal",
    "title": "Study in Armenia Consultancy for Barishal Students",
    "description": "Study in Armenia consultancy for Barishal students in 2026: online counseling, courier document help, recognition and visa guidance from Eam"
  },
  {
    "href": "/study/armenia/cse-and-it-courses-in-armenia",
    "title": "CSE and IT Courses in Armenia",
    "description": "Computer science, software engineering, data science and cybersecurity study options in Armenia for Bangladeshi students."
  },
  {
    "href": "/study/armenia/study-in-armenia-after-diploma",
    "title": "Study in Armenia After Diploma",
    "description": "Credit exemption and degree entry options for Bangladeshi polytechnic and diploma holders in Armenia."
  }
];
const FAQS = [
  {
    "q": "Is there a Khulna office?",
    "a": "No. We support Khulna students online and via courier, with walk-in counseling at Dhaka."
  },
  {
    "q": "Can polytechnic students get credit recognition in Armenia?",
    "a": "It depends on the university, subject match and grades. Do not assume credit transfer."
  },
  {
    "q": "Do you help with document legalisation?",
    "a": "We explain the required steps; legalisation is carried out by the relevant authorities."
  },
  {
    "q": "How early should I start?",
    "a": "At least 4 to 6 months before the intake."
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
          "name": "Khulna Consultancy",
          "item": "https://eammu.com/study/armenia/consultancy-in-khulna"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Armenia Consultancy for Khulna Students (2026)",
      "description": "Study in Armenia consultancy for Khulna students in 2026: online counseling, courier documents, engineering pathways and visa guidance from Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/armenia/consultancy-in-khulna",
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
          "name": "Is there a Khulna office?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We support Khulna students online and via courier, with walk-in counseling at Dhaka."
          }
        },
        {
          "@type": "Question",
          "name": "Can polytechnic students get credit recognition in Armenia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the university, subject match and grades. Do not assume credit transfer."
          }
        },
        {
          "@type": "Question",
          "name": "Do you help with document legalisation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We explain the required steps; legalisation is carried out by the relevant authorities."
          }
        },
        {
          "@type": "Question",
          "name": "How early should I start?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At least 4 to 6 months before the intake."
          }
        }
      ]
    },
    {
      "@type": [
        "EducationalOrganization",
        "LocalBusiness"
      ],
      "name": "Eammu Holidays",
      "url": "https://eammu.com/study/armenia/consultancy-in-khulna",
      "telephone": "+8801631312525",
      "email": "info@eammu.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dhaka, Bangladesh",
        "addressLocality": "Dhaka",
        "addressCountry": "BD"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Khulna, Bangladesh"
      },
      "description": "Study in Armenia counseling, recognition checks and student visa support for students in Khulna, Bangladesh."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Armenia Consultancy for Khulna Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Khulna’s engineering and technical education base means many students ask about accreditation and professional recognition.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Technical education in Khulna and Armenia</h2>
<p className="mt-4 leading-7 text-slate-700">Khulna has a strong engineering and technology student community, including polytechnic diploma holders. If you plan to practise engineering, check professional recognition first; see <Link href="/study/armenia/medical-degree-recognition-and-bmdc-guide-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">degree recognition in Armenia</Link> and <Link href="/study/armenia/cse-and-it-courses-in-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT courses in Armenia</Link>. Read <Link href="/study/armenia/study-in-armenia-after-diploma" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Armenia after diploma</Link> for eligibility. Our Dhaka desk, described on <Link href="/study/armenia/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Dhaka consultancy page</Link>, offers walk-in advice, while Khulna students are supported online.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Planning from southwestern Bangladesh</h2>
<p className="mt-4 leading-7 text-slate-700">Travel to Dhaka can take many hours, so we handle shortlisting, applications and permit follow-up remotely. A trip is only needed for steps such as legalisation or visa tasks, explained in <Link href="/study/armenia/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa requirements</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">Khulna students often compare Armenia with other destinations; our <Link href="/study/armenia/tuition-fees-in-armenia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees guide</Link> and <Link href="/study/armenia/cost-of-living-in-armenia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living guide</Link> make comparison easy.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Typical Khulna profile</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Polytechnic diploma holders checking recognition.</li><li>HSC science students targeting engineering or medicine.</li><li>Graduates looking for postgraduate programmes with verified discounts; see <Link href="/study/armenia/scholarships-in-armenia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Armenia</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Related support pages</h2>
<p className="mt-4 leading-7 text-slate-700">Barishal students can see <Link href="/study/armenia/consultancy-in-barishal" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">our Barishal page</Link>. All service areas are listed on the <Link href="/study/armenia/bangladesh-offices" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bangladesh offices page</Link>.</p>
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
