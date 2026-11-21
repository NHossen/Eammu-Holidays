import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/montenegro/temporary-residence-permit-and-arrival-guide-montenegro';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Montenegro Residence Permit Guide 2026 | Eammu Holidays",
  "description": "Temporary residence permit and arrival guide for Montenegro in 2026: D visa, arrival steps, biometrics and renewal for Bangladeshi students. Eammu.",
  "alternates": {
    "canonical": "https://eammu.com/study/montenegro/temporary-residence-permit-and-arrival-guide-montenegro"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Montenegro Residence Permit Guide 2026 | Eammu Holidays",
    "description": "Temporary residence permit and arrival guide for Montenegro in 2026: D visa, arrival steps, biometrics and renewal for Bangladeshi students. Eammu.",
    "url": "https://eammu.com/study/montenegro/temporary-residence-permit-and-arrival-guide-montenegro",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Montenegro Residence Permit Guide 2026 | Eammu Holidays",
    "description": "Temporary residence permit and arrival guide for Montenegro in 2026: D visa, arrival steps, biometrics and renewal for Bangladeshi students. Eammu."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Montenegro", "href": "/study/montenegro"}, {"name": "Residence Permit & Arrival", "href": "/study/montenegro/temporary-residence-permit-and-arrival-guide-montenegro"}];
const NAV = [
  {
    "label": "Montenegro Hub",
    "pages": [
      {
        "href": "/study/montenegro",
        "label": "Study in Montenegro Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/montenegro/study-in-montenegro-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/montenegro/study-in-montenegro-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/montenegro/tuition-fees-in-montenegro-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/montenegro/cost-of-living-in-montenegro-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/montenegro/cheapest-universities-in-montenegro",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/montenegro/top-universities-in-montenegro",
        "label": "Top Universities"
      },
      {
        "href": "/study/montenegro/public-vs-private-universities-in-montenegro",
        "label": "Public vs Private"
      },
      {
        "href": "/study/montenegro/scholarships-in-montenegro-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/montenegro/admission-requirements-in-montenegro-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/montenegro/study-gap-accepted-universities-in-montenegro",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/montenegro/study-in-montenegro-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/montenegro/study-in-montenegro-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/montenegro/montenegro-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/montenegro/degree-recognition-and-accreditation-in-montenegro",
        "label": "Degree Recognition"
      },
      {
        "href": "/study/montenegro/montenegrin-language-and-english-taught-programs-guide",
        "label": "Language & English Programmes"
      },
      {
        "href": "/study/montenegro/hospitality-tourism-and-business-degrees-in-montenegro",
        "label": "Hospitality & Business"
      },
      {
        "href": "/study/montenegro/cse-and-it-courses-in-montenegro",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/montenegro/student-accommodation-in-montenegro",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, Permit & Work Rules",
    "pages": [
      {
        "href": "/study/montenegro/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/montenegro/temporary-residence-permit-and-arrival-guide-montenegro",
        "label": "Residence Permit & Arrival"
      },
      {
        "href": "/study/montenegro/bank-solvency-requirements-for-montenegro-student-visa",
        "label": "Bank Solvency"
      },
      {
        "href": "/study/montenegro/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/montenegro/part-time-job-and-post-study-work-rules-in-montenegro",
        "label": "Work Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/montenegro/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/montenegro/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/montenegro/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/montenegro/student-visa-requirements-bangladesh",
    "title": "Montenegro Student Visa Requirements for Bangladesh",
    "description": "Documents and steps for a Montenegrin long-stay D visa from Bangladesh, including admission letter, funds, insurance and residence permit."
  },
  {
    "href": "/study/montenegro/student-visa-processing-time-and-cost",
    "title": "Montenegro Student Visa Processing Time and Cost",
    "description": "Typical processing time and the main fees Bangladeshi students should budget for in a Montenegro visa and permit application."
  },
  {
    "href": "/study/montenegro/bank-solvency-requirements-for-montenegro-student-visa",
    "title": "Bank Solvency Requirements for Montenegro Student Visa",
    "description": "How much money proof Bangladeshi students should prepare and how to present bank statements for Montenegro."
  },
  {
    "href": "/study/montenegro/montenegro-intake-dates",
    "title": "Montenegro Intake Dates",
    "description": "Main intake and application windows in Montenegro and the best time for Bangladeshi students to start applications."
  }
];
const FAQS = [
  {
    "q": "How soon after arrival must I apply for a residence permit?",
    "a": "Deadlines are short, and biometrics are required at a police station soon after arrival. Follow the university's instructions."
  },
  {
    "q": "Do I need to renew every year?",
    "a": "Student permits are usually renewed yearly while you are enrolled."
  },
  {
    "q": "What if my permit is delayed?",
    "a": "Ask the university's international office to contact the authority and keep proof of your application."
  },
  {
    "q": "Can I travel outside Montenegro on my permit?",
    "a": "Travel conditions depend on your permit status and destination. Check before you leave."
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
          "name": "Montenegro",
          "item": "https://eammu.com/study/montenegro"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Residence Permit & Arrival",
          "item": "https://eammu.com/study/montenegro/temporary-residence-permit-and-arrival-guide-montenegro"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Temporary Residence Permit and Arrival Guide for Bangladeshi Students in Montenegro",
      "description": "Temporary residence permit and arrival guide for Montenegro in 2026: D visa, arrival steps, biometrics and renewal for Bangladeshi students. Eammu.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/montenegro/temporary-residence-permit-and-arrival-guide-montenegro",
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
          "name": "How soon after arrival must I apply for a residence permit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deadlines are short, and biometrics are required at a police station soon after arrival. Follow the university's instructions."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to renew every year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Student permits are usually renewed yearly while you are enrolled."
          }
        },
        {
          "@type": "Question",
          "name": "What if my permit is delayed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ask the university's international office to contact the authority and keep proof of your application."
          }
        },
        {
          "@type": "Question",
          "name": "Can I travel outside Montenegro on my permit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Travel conditions depend on your permit status and destination. Check before you leave."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Montenegro 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Temporary Residence Permit and Arrival Guide for Bangladeshi Students in Montenegro</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">The visa is only the first step. Here is how the student residence permit, biometrics and renewal usually work.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Montenegro guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Montenegro guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Stage-by-stage overview</h2>
<p className="mt-4 leading-7 text-slate-700">Foreign students normally obtain a temporary residence permit for study from the Ministry of Interior, usually valid for one academic year and renewable while enrolled at a recognised institution. Before this stage, prepare your <Link href="/study/montenegro/admission-requirements-in-montenegro-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission documents</Link> and <Link href="/study/montenegro/bank-solvency-requirements-for-montenegro-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">funds</Link>. Overall requirements are in <Link href="/study/montenegro/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa requirements for Bangladesh</Link>.</p>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Stage</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical meaning</th><th scope="col" className="px-3 py-2 text-left font-bold">What you do</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">1. Admission</td><td className="px-3 py-2 align-top">University issues an admission or enrolment letter</td><td className="px-3 py-2 align-top">Pay only the official deposit</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">2. D visa</td><td className="px-3 py-2 align-top">Mission approves long-stay entry</td><td className="px-3 py-2 align-top">Submit documents and funds proof</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">3. Arrival</td><td className="px-3 py-2 align-top">You travel and report to the university</td><td className="px-3 py-2 align-top">Keep passport, letters and insurance ready</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">4. Residence permit</td><td className="px-3 py-2 align-top">Application, police-station visit for biometrics within about ten days</td><td className="px-3 py-2 align-top">Attend appointments and pay fees</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">5. Renewal</td><td className="px-3 py-2 align-top">Yearly renewal based on enrolment</td><td className="px-3 py-2 align-top">Keep attendance, grades and funds in order</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Stages and wording differ by period. Confirm details with your university and the Ministry of Interior.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Typical timing and fees</h2>
<p className="mt-4 leading-7 text-slate-700">Reports indicate a visa fee of around EUR 35 to 60 and processing of a few weeks, but amounts and timelines can change. See <Link href="/study/montenegro/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa processing time and cost</Link> for a budget view.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Tips to avoid problems</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Keep your passport, admission letter, insurance and receipts with you at arrival.</li><li>Respect permit deadlines and renewal conditions.</li><li>Do not work without the right authorisation; see <Link href="/study/montenegro/part-time-job-and-post-study-work-rules-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student work rules in Montenegro</Link>.</li><li>If stuck, contact the university&apos;s international office or Eammu Holidays through <Link href="/study/montenegro/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">our Dhaka counseling desk</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">After graduation</h2>
<p className="mt-4 leading-7 text-slate-700">Student residence ends with your enrolment, and study time usually counts only partly toward longer-term residence. Staying to work requires an employer-sponsored permit under tightened rules. Review <Link href="/study/montenegro/part-time-job-and-post-study-work-rules-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">post-study work rules</Link> early and see <Link href="/study/montenegro/cse-and-it-courses-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT courses in Montenegro</Link> for fields with more opportunities.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Montenegro Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Montenegro</h2>
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
