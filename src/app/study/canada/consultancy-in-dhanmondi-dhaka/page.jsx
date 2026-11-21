import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/canada/consultancy-in-dhanmondi-dhaka';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Canada Support in Dhanmondi 2026 | Eammu Holidays",
  "description": "Study in Canada consultancy for Dhanmondi, Dhaka students in 2026: counseling, institution shortlisting, PAL and funds guidance from Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/canada/consultancy-in-dhanmondi-dhaka"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Canada Support in Dhanmondi 2026 | Eammu Holidays",
    "description": "Study in Canada consultancy for Dhanmondi, Dhaka students in 2026: counseling, institution shortlisting, PAL and funds guidance from Eammu Holidays.",
    "url": "https://eammu.com/study/canada/consultancy-in-dhanmondi-dhaka",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Canada Support in Dhanmondi 2026 | Eammu Holidays",
    "description": "Study in Canada consultancy for Dhanmondi, Dhaka students in 2026: counseling, institution shortlisting, PAL and funds guidance from Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Canada", "href": "/study/canada"}, {"name": "Dhanmondi Consultancy", "href": "/study/canada/consultancy-in-dhanmondi-dhaka"}];
const NAV = [
  {
    "label": "Canada Hub",
    "pages": [
      {
        "href": "/study/canada",
        "label": "Study in Canada Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/canada/study-in-canada-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/canada/study-in-canada-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/canada/tuition-fees-in-canada-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/canada/cost-of-living-in-canada-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/canada/cheapest-universities-in-canada",
        "label": "Cheapest Colleges & Universities"
      },
      {
        "href": "/study/canada/top-universities-in-canada",
        "label": "Top Universities"
      },
      {
        "href": "/study/canada/public-vs-private-universities-in-canada",
        "label": "Public vs Private"
      },
      {
        "href": "/study/canada/scholarships-in-canada-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/canada/admission-requirements-in-canada-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/canada/study-gap-accepted-universities-in-canada",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/canada/study-in-canada-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/canada/study-in-canada-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/canada/canada-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/canada/provincial-attestation-letter-pal-guide-for-canada",
        "label": "PAL Guide"
      },
      {
        "href": "/study/canada/colleges-and-pgwp-eligible-programs-in-canada",
        "label": "Colleges & PGWP Programmes"
      },
      {
        "href": "/study/canada/cse-and-it-courses-in-canada",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/canada/mba-in-canada-for-bangladeshi-students",
        "label": "MBA & Master's"
      },
      {
        "href": "/study/canada/student-accommodation-in-canada",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, Permit & Work Rules",
    "pages": [
      {
        "href": "/study/canada/student-visa-requirements-bangladesh",
        "label": "Study Permit Requirements"
      },
      {
        "href": "/study/canada/study-permit-application-process-and-biometrics-guide",
        "label": "Application Process"
      },
      {
        "href": "/study/canada/bank-solvency-requirements-for-canada-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/canada/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/canada/part-time-job-and-post-study-work-rules-in-canada",
        "label": "Work, PGWP & PR Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/canada/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/canada/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/canada/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/canada/consultancy-in-dhaka",
    "title": "Study in Canada Consultancy in Dhaka",
    "description": "Study in Canada consultancy in Dhaka for 2026: free walk-in counseling, institution shortlisting, PAL and funds guidance from Eammu Holidays"
  },
  {
    "href": "/study/canada/consultancy-in-uttara-dhaka",
    "title": "Study in Canada Consultancy for Uttara Students",
    "description": "Study in Canada consultancy for Uttara, Dhaka students in 2026: free counseling, PAL and funds guidance and visa preparation from Eammu by a"
  },
  {
    "href": "/study/canada/admission-requirements-in-canada-for-bangladeshi-students",
    "title": "Admission Requirements in Canada for Bangladeshi Students",
    "description": "SSC, HSC, diploma, English and document requirements for Canadian institutions explained for Bangladeshi applicants."
  },
  {
    "href": "/study/canada/provincial-attestation-letter-pal-guide-for-canada",
    "title": "Provincial Attestation Letter (PAL) Guide for Canada",
    "description": "What a PAL or TAL is, who needs one in 2026, how institutions request it and how the cap affects Bangladeshi applicants."
  }
];
const FAQS = [
  {
    "q": "Is there an Eammu Holidays branch inside Dhanmondi?",
    "a": "Our counseling is based in Dhaka. Dhanmondi students can book an appointment or join online."
  },
  {
    "q": "Can I get a quick profile evaluation?",
    "a": "Yes. Share your results and budget by WhatsApp for an initial view."
  },
  {
    "q": "Do you help with the PAL?",
    "a": "The institution requests the PAL from the province. We help you understand and plan around it."
  },
  {
    "q": "When should I start applying?",
    "a": "Ideally 7 to 9 months before the September intake."
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
          "name": "Canada",
          "item": "https://eammu.com/study/canada"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Dhanmondi Consultancy",
          "item": "https://eammu.com/study/canada/consultancy-in-dhanmondi-dhaka"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Canada Consultancy for Dhanmondi Students (2026)",
      "description": "Study in Canada consultancy for Dhanmondi, Dhaka students in 2026: counseling, institution shortlisting, PAL and funds guidance from Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/canada/consultancy-in-dhanmondi-dhaka",
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
          "name": "Is there an Eammu Holidays branch inside Dhanmondi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our counseling is based in Dhaka. Dhanmondi students can book an appointment or join online."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a quick profile evaluation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Share your results and budget by WhatsApp for an initial view."
          }
        },
        {
          "@type": "Question",
          "name": "Do you help with the PAL?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The institution requests the PAL from the province. We help you understand and plan around it."
          }
        },
        {
          "@type": "Question",
          "name": "When should I start applying?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ideally 7 to 9 months before the September intake."
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
      "url": "https://eammu.com/study/canada/consultancy-in-dhanmondi-dhaka",
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
        "name": "Dhanmondi, Dhaka"
      },
      "description": "Study in Canada counseling, recognition checks and student visa support for students in Dhanmondi, Dhaka."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Canada 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Canada Consultancy for Dhanmondi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Dhanmondi students often target strong universities and want to understand the PAL and visa risk first.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Canada guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Canada guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Help for Dhanmondi students and parents</h2>
<p className="mt-4 leading-7 text-slate-700">Dhanmondi is home to many well-known schools and colleges, so we see students with strong HSC results who want top Canadian universities. Our central Dhaka desk, not a separate Dhanmondi branch, serves these students; start with <Link href="/study/canada/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">our Dhaka consultancy page</Link>, the <Link href="/study/canada/admission-requirements-in-canada-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link> and <Link href="/study/canada/provincial-attestation-letter-pal-guide-for-canada" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the PAL guide</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">High-achieving applicants should compare <Link href="/study/canada/top-universities-in-canada" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Canada</Link> and funding in <Link href="/study/canada/scholarships-in-canada-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Canada</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Balancing exams and applications</h2>
<p className="mt-4 leading-7 text-slate-700">Many Dhanmondi students juggle HSC, admission tests and coaching. We build a timeline around your results and <Link href="/study/canada/canada-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Canada intake dates</Link> so you do not miss PAL and application windows. Waiting for results? Ask about conditional offers.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Common Dhanmondi profiles</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>HSC science students targeting engineering: see <Link href="/study/canada/cse-and-it-courses-in-canada" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT courses in Canada</Link>.</li><li>Graduates aiming for business school: see <Link href="/study/canada/mba-in-canada-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MBA and master&apos;s programmes in Canada</Link>.</li><li>Families weighing college diplomas: see <Link href="/study/canada/colleges-and-pgwp-eligible-programs-in-canada" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">colleges and PGWP-eligible programmes</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Nearby guides</h2>
<p className="mt-4 leading-7 text-slate-700">Also see <Link href="/study/canada/consultancy-in-uttara-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Uttara</Link> and <Link href="/study/canada/consultancy-in-mirpur-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mirpur</Link> guides, or browse the <Link href="/study/canada/bangladesh-offices" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">offices and support page</Link>.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Canada Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Canada</h2>
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
