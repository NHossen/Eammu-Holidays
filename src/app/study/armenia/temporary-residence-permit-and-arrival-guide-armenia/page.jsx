import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/armenia/temporary-residence-permit-and-arrival-guide-armenia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Armenia Residence Permit and Arrival 2026 | Eammu Holidays",
  "description": "Temporary residence permit and arrival guide for Armenia in 2026: entry, arrival steps, the study permit and renewal for Bangladeshi students. Eammu.",
  "alternates": {
    "canonical": "https://eammu.com/study/armenia/temporary-residence-permit-and-arrival-guide-armenia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Armenia Residence Permit and Arrival 2026 | Eammu Holidays",
    "description": "Temporary residence permit and arrival guide for Armenia in 2026: entry, arrival steps, the study permit and renewal for Bangladeshi students. Eammu.",
    "url": "https://eammu.com/study/armenia/temporary-residence-permit-and-arrival-guide-armenia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Armenia Residence Permit and Arrival 2026 | Eammu Holidays",
    "description": "Temporary residence permit and arrival guide for Armenia in 2026: entry, arrival steps, the study permit and renewal for Bangladeshi students. Eammu."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Armenia", "href": "/study/armenia"}, {"name": "Residence Permit & Arrival", "href": "/study/armenia/temporary-residence-permit-and-arrival-guide-armenia"}];
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
    "href": "/study/armenia/student-visa-requirements-bangladesh",
    "title": "Armenia Student Visa Requirements for Bangladesh",
    "description": "Documents and steps for entering Armenia as a Bangladeshi student, including visa route, admission letter and residence permit."
  },
  {
    "href": "/study/armenia/student-visa-processing-time-and-cost",
    "title": "Armenia Student Visa Processing Time and Cost",
    "description": "Typical processing time and the main fees Bangladeshi students should budget for in an Armenia visa or permit application."
  },
  {
    "href": "/study/armenia/bank-solvency-requirements-for-armenia-student-visa",
    "title": "Bank Solvency Requirements for Armenia Student Visa",
    "description": "How much money proof Bangladeshi students should prepare and how to present bank statements for Armenia."
  },
  {
    "href": "/study/armenia/armenia-intake-dates",
    "title": "Armenia Intake Dates",
    "description": "Main intake months in Armenia and the best time for Bangladeshi students to start applications."
  }
];
const FAQS = [
  {
    "q": "How soon after arrival must I apply for a residence permit?",
    "a": "Deadlines are short. Follow the university's instructions and check the deadline in your entry documents."
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
    "q": "Can I travel outside Armenia on my permit?",
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
          "name": "Armenia",
          "item": "https://eammu.com/study/armenia"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Residence Permit & Arrival",
          "item": "https://eammu.com/study/armenia/temporary-residence-permit-and-arrival-guide-armenia"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Temporary Residence Permit and Arrival Guide for Bangladeshi Students in Armenia",
      "description": "Temporary residence permit and arrival guide for Armenia in 2026: entry, arrival steps, the study permit and renewal for Bangladeshi students. Eammu.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/armenia/temporary-residence-permit-and-arrival-guide-armenia",
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
            "text": "Deadlines are short. Follow the university's instructions and check the deadline in your entry documents."
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
          "name": "Can I travel outside Armenia on my permit?",
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Armenia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Temporary Residence Permit and Arrival Guide for Bangladeshi Students in Armenia</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">The entry visa is only the first step. Here is how the study residence permit, registration and renewal usually work.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Stage-by-stage overview</h2>
<p className="mt-4 leading-7 text-slate-700">Foreign degree students in Armenia normally obtain a temporary residence permit (TRP) based on study, issued for one year and renewable while they remain enrolled. From 1 November 2026, reports say institutions must file student residence applications through a new unified electronic platform, so follow your university&apos;s instructions. Before this stage, prepare your <Link href="/study/armenia/admission-requirements-in-armenia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission documents</Link> and <Link href="/study/armenia/bank-solvency-requirements-for-armenia-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">funds</Link>.</p>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Stage</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical meaning</th><th scope="col" className="px-3 py-2 text-left font-bold">What you do</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">1. Admission</td><td className="px-3 py-2 align-top">University issues an admission or enrolment letter</td><td className="px-3 py-2 align-top">Pay only the official deposit</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">2. Entry route</td><td className="px-3 py-2 align-top">You obtain entry permission for Armenia</td><td className="px-3 py-2 align-top">Follow the <Link href="/study/armenia/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa guide</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">3. Arrival</td><td className="px-3 py-2 align-top">You travel and report to the university</td><td className="px-3 py-2 align-top">Keep passport, letters and insurance ready</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">4. Residence permit</td><td className="px-3 py-2 align-top">Application, in-person visit and card issue</td><td className="px-3 py-2 align-top">Attend appointments and pay fees</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">5. Renewal</td><td className="px-3 py-2 align-top">Yearly renewal based on enrolment</td><td className="px-3 py-2 align-top">Keep attendance, grades and funds in order</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Armenia changed its visa and migration rules in 2026, including for Bangladeshi citizens, and further amendments to the Law on Foreigners took effect from 1 November 2026. Rules may change again, so confirm the current position on the official Armenian Ministry of Foreign Affairs website and with your university before you apply.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Typical timing and fees</h2>
<p className="mt-4 leading-7 text-slate-700">Reports indicate the card is issued within about 30 days of application and that the fee for a student permit is modest or exempt, but amounts and timelines can change. See <Link href="/study/armenia/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa processing time and cost</Link> for a budget view.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Tips to avoid problems</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Keep your passport, admission letter, insurance and receipts with you at arrival.</li><li>Respect permit deadlines and renewal conditions.</li><li>Do not work without the right authorisation; see <Link href="/study/armenia/part-time-job-and-post-study-work-rules-in-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student work rules in Armenia</Link>.</li><li>If stuck, contact the university&apos;s international office or Eammu Holidays through <Link href="/study/armenia/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">our Dhaka counseling desk</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">After graduation</h2>
<p className="mt-4 leading-7 text-slate-700">Student residence ends with your enrolment, and staying requires a work, business or other residence ground. Review <Link href="/study/armenia/part-time-job-and-post-study-work-rules-in-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">post-study work rules</Link> early and see <Link href="/study/armenia/cse-and-it-courses-in-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT courses in Armenia</Link> for fields with more opportunities.</p>
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
