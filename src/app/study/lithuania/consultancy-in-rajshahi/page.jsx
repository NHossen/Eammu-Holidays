import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/lithuania/consultancy-in-rajshahi';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Lithuania Study Consultancy Rajshahi 2026 | Eammu Holidays",
  "description": "Study in Lithuania consultancy for Rajshahi students in 2026: online counseling, courier documents, graduate pathways and permit guidance from Eammu.",
  "alternates": {
    "canonical": "https://eammu.com/study/lithuania/consultancy-in-rajshahi"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Lithuania Study Consultancy Rajshahi 2026 | Eammu Holidays",
    "description": "Study in Lithuania consultancy for Rajshahi students in 2026: online counseling, courier documents, graduate pathways and permit guidance from Eammu.",
    "url": "https://eammu.com/study/lithuania/consultancy-in-rajshahi",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Lithuania Study Consultancy Rajshahi 2026 | Eammu Holidays",
    "description": "Study in Lithuania consultancy for Rajshahi students in 2026: online counseling, courier documents, graduate pathways and permit guidance from Eammu."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Lithuania", "href": "/study/lithuania"}, {"name": "Rajshahi Consultancy", "href": "/study/lithuania/consultancy-in-rajshahi"}];
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
    "href": "/study/lithuania/consultancy-in-dhaka",
    "title": "Study in Lithuania Consultancy in Dhaka",
    "description": "Study in Lithuania consultancy in Dhaka for 2026: free walk-in counseling, university shortlisting, permit and funds guidance from Eammu Hol"
  },
  {
    "href": "/study/lithuania/consultancy-in-bogura",
    "title": "Study in Lithuania Consultancy for Bogura Students",
    "description": "Study in Lithuania consultancy for Bogura students in 2026: online counseling, courier document support and permit guidance from Eammu Holid"
  },
  {
    "href": "/study/lithuania/business-and-management-degrees-in-lithuania",
    "title": "Business and Management Degrees in Lithuania",
    "description": "Business, management, economics and finance study options in Lithuania for Bangladeshi students, with costs and career realities."
  },
  {
    "href": "/study/lithuania/top-universities-in-lithuania",
    "title": "Top Universities in Lithuania",
    "description": "Overview of well-known Lithuanian universities and how to choose among them."
  }
];
const FAQS = [
  {
    "q": "Do you have an office in Rajshahi?",
    "a": "No. We serve Rajshahi online and by courier, with a counseling desk in Dhaka."
  },
  {
    "q": "Can I apply for a master's after a local university degree?",
    "a": "Yes, many Lithuanian universities accept Bangladeshi bachelor's graduates, subject to recognition and English requirements."
  },
  {
    "q": "How can I legalise documents from Rajshahi?",
    "a": "We explain the required steps for your chosen university and authority before you submit."
  },
  {
    "q": "Is it good to apply early?",
    "a": "Yes. Early applicants have more options and time for tuition payment and the permit."
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
          "name": "Rajshahi Consultancy",
          "item": "https://eammu.com/study/lithuania/consultancy-in-rajshahi"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Lithuania Consultancy for Rajshahi Students (2026)",
      "description": "Study in Lithuania consultancy for Rajshahi students in 2026: online counseling, courier documents, graduate pathways and permit guidance from Eammu.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/lithuania/consultancy-in-rajshahi",
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
          "name": "Do you have an office in Rajshahi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We serve Rajshahi online and by courier, with a counseling desk in Dhaka."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply for a master's after a local university degree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, many Lithuanian universities accept Bangladeshi bachelor's graduates, subject to recognition and English requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How can I legalise documents from Rajshahi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We explain the required steps for your chosen university and authority before you submit."
          }
        },
        {
          "@type": "Question",
          "name": "Is it good to apply early?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Early applicants have more options and time for tuition payment and the permit."
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
      "url": "https://eammu.com/study/lithuania/consultancy-in-rajshahi",
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
        "name": "Rajshahi, Bangladesh"
      },
      "description": "Study in Lithuania counseling, recognition checks and student visa support for students in Rajshahi, Bangladesh."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Lithuania Consultancy for Rajshahi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Rajshahi’s academic culture makes it a natural base for students considering master’s study in Lithuania.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Guidance for Rajshahi’s student community</h2>
<p className="mt-4 leading-7 text-slate-700">Rajshahi has a strong student culture centred on its university and colleges, and many graduates look for master&apos;s study abroad. Eammu Holidays supports Rajshahi applicants online and by courier, with in-person counseling at <Link href="/study/lithuania/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">our Dhaka desk</Link>. Start with <Link href="/study/lithuania/top-universities-in-lithuania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Lithuania</Link> and <Link href="/study/lithuania/business-and-management-degrees-in-lithuania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">business and management degrees</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">Graduates should also check recognition before choosing: see <Link href="/study/lithuania/degree-recognition-and-accreditation-in-lithuania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">degree recognition in Lithuania</Link> and <Link href="/study/lithuania/cse-and-it-courses-in-lithuania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT courses in Lithuania</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Document logistics</h2>
<p className="mt-4 leading-7 text-slate-700">Because Dhaka is several hours away, we avoid unnecessary trips. Certificates are scanned for checking, while legalisation and originals move by courier. See <Link href="/study/lithuania/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">permit requirements</Link> for what is eventually required and <Link href="/study/lithuania/trp-application-process-migris-and-vfs-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the application process</Link> for how approval works.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Scholarship and cost focus</h2>
<p className="mt-4 leading-7 text-slate-700">Rajshahi families are often cost-conscious, so compare <Link href="/study/lithuania/cheapest-universities-in-lithuania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the cheapest universities in Lithuania</Link>, check <Link href="/study/lithuania/scholarships-in-lithuania-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Lithuania</Link> and plan around <Link href="/study/lithuania/lithuania-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Lithuania intake dates</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Nearby regions</h2>
<p className="mt-4 leading-7 text-slate-700">Students in Bogura may prefer <Link href="/study/lithuania/consultancy-in-bogura" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">our Bogura page</Link>. All locations are on <Link href="/study/lithuania/bangladesh-offices" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the offices page</Link>.</p>
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
