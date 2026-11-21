import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/albania/study-in-albania-from-bangladesh';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Albania from Bangladesh 2026 | Eammu Holidays",
  "description": "Complete 2026 guide for Bangladeshi students to study in Albania: tuition in BDT, English-taught degrees, Type D visa on e-visa.al, residence permit, costs and honest advice. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/albania/study-in-albania-from-bangladesh"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Albania from Bangladesh 2026 | Eammu Holidays",
    "description": "Complete 2026 guide for Bangladeshi students to study in Albania: tuition in BDT, English-taught degrees, Type D visa on e-visa.al, residence permit, costs and honest advice. Eammu Holidays.",
    "url": "https://eammu.com/study/albania/study-in-albania-from-bangladesh",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Albania from Bangladesh 2026 | Eammu Holidays",
    "description": "Complete 2026 guide for Bangladeshi students to study in Albania: tuition in BDT, English-taught degrees, Type D visa on e-visa.al, residence permit, costs and honest advice. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Albania", "href": "/study/albania"}, {"name": "Study from Bangladesh", "href": "/study/albania/study-in-albania-from-bangladesh"}];
const NAV = [
  {
    "label": "Albania Hub",
    "pages": [
      {
        "href": "/study/albania",
        "label": "Study in Albania Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/albania/study-in-albania-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/albania/albania-reality-check-eu-and-schengen-myths",
        "label": "Reality Check: EU & Schengen Myths"
      },
      {
        "href": "/study/albania/why-study-in-albania-pros-and-cons",
        "label": "Pros & Cons"
      },
      {
        "href": "/study/albania/study-in-albania-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/albania/english-and-albanian-language-requirements",
        "label": "Language Requirements"
      },
      {
        "href": "/study/albania/tuition-fees-in-albania-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/albania/cost-of-living-in-albania-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/albania/cheapest-universities-in-albania",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/albania/top-universities-in-albania",
        "label": "Top Universities"
      },
      {
        "href": "/study/albania/public-vs-private-universities-in-albania",
        "label": "Public vs Private"
      },
      {
        "href": "/study/albania/scholarships-in-albania-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/albania/admission-requirements-in-albania-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/albania/study-gap-accepted-in-albania",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/albania/study-in-albania-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/albania/study-in-albania-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/albania/albania-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Courses, Housing & Life",
    "pages": [
      {
        "href": "/study/albania/application-guide-for-albanian-universities",
        "label": "Application Guide"
      },
      {
        "href": "/study/albania/degree-recognition-and-eligibility-in-albania",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/albania/it-and-cse-courses-in-albania",
        "label": "IT & CSE Courses"
      },
      {
        "href": "/study/albania/business-and-mba-in-albania",
        "label": "Business & MBA"
      },
      {
        "href": "/study/albania/medicine-dentistry-and-pharmacy-in-albania",
        "label": "Medicine, Dentistry & Pharmacy"
      },
      {
        "href": "/study/albania/engineering-and-architecture-in-albania",
        "label": "Engineering & Architecture"
      },
      {
        "href": "/study/albania/nursing-and-health-courses-in-albania",
        "label": "Nursing & Health Courses"
      },
      {
        "href": "/study/albania/tourism-and-hospitality-in-albania",
        "label": "Tourism & Hospitality"
      },
      {
        "href": "/study/albania/foundation-year-and-albanian-language-courses",
        "label": "Foundation Year & Albanian Language"
      },
      {
        "href": "/study/albania/student-accommodation-in-albania",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/albania/health-insurance-for-students-in-albania",
        "label": "Health Insurance"
      },
      {
        "href": "/study/albania/student-life-halal-food-and-safety-in-albania",
        "label": "Student Life, Halal & Safety"
      }
    ]
  },
  {
    "label": "Visa, Permit & Safety",
    "pages": [
      {
        "href": "/study/albania/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/albania/e-visa-application-step-by-step",
        "label": "e-Visa Step by Step"
      },
      {
        "href": "/study/albania/residence-permit-guide-for-students-in-albania",
        "label": "Residence Permit Guide"
      },
      {
        "href": "/study/albania/proof-of-funds-requirements-for-albania-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/albania/visa-processing-time-and-cost-albania",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/albania/visa-refusal-reasons-and-how-to-avoid-them",
        "label": "Visa Refusal Reasons"
      },
      {
        "href": "/study/albania/part-time-job-and-work-rules-in-albania",
        "label": "Work Rules"
      },
      {
        "href": "/study/albania/after-graduation-unique-permit-and-stay-options",
        "label": "After Graduation"
      },
      {
        "href": "/study/albania/scams-and-fake-offer-warning-albania",
        "label": "Scams & Fake Offers"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/albania/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/albania/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/albania/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/albania/tuition-fees-in-albania-for-bangladeshi-students",
    "title": "Tuition Fees in Albania for Bangladeshi Students",
    "description": "A clear EUR-to-BDT look at what each level of study costs, and the extra fees families forget."
  },
  {
    "href": "/study/albania/student-visa-requirements-bangladesh",
    "title": "Albania Student Visa (Type D) Requirements for Bangladeshi Students",
    "description": "Documents, funds, English proof, insurance, accommodation and legalisation for the Type D study visa."
  },
  {
    "href": "/study/albania/albania-reality-check-eu-and-schengen-myths",
    "title": "Albania Reality Check: What a Student Permit Does and Does Not Give You",
    "description": "Albania is not in the EU or Schengen. Here is what that means for visas, jobs, recognition and your long-term plans."
  },
  {
    "href": "/study/albania/top-universities-in-albania",
    "title": "Top Universities in Albania for Bangladeshi Students",
    "description": "Public and private universities with English-taught programmes, what they are known for and what to check."
  }
];
const FAQS = [
  {
    "q": "Is Albania a good choice for Bangladeshi students?",
    "a": "It can be, for students who choose an accredited English-taught programme, have verified degree recognition and understand the limits of an Albanian student permit."
  },
  {
    "q": "Do I need a visa to study in Albania from Bangladesh?",
    "a": "Yes. Bangladeshi citizens need a Type D (D/ST) study visa for stays over 90 days, applied for before travel through the official e-Visa system."
  },
  {
    "q": "Can I work while studying?",
    "a": "Do not assume you can. Foreigners generally need a work or unique permit, so confirm student work rules with the Migration Police and your university before relying on any income."
  },
  {
    "q": "How much does it cost overall?",
    "a": "Many students spend roughly €6,500 to €15,000 a year including tuition and living, with medicine and dentistry costing more."
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
          "name": "Albania",
          "item": "https://eammu.com/study/albania"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Study from Bangladesh",
          "item": "https://eammu.com/study/albania/study-in-albania-from-bangladesh"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Albania from Bangladesh: Complete Step-by-Step Guide (2026)",
      "description": "Complete 2026 guide for Bangladeshi students to study in Albania: tuition in BDT, English-taught degrees, Type D visa on e-visa.al, residence permit, costs and honest advice. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/albania/study-in-albania-from-bangladesh",
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
          "name": "Is Albania a good choice for Bangladeshi students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be, for students who choose an accredited English-taught programme, have verified degree recognition and understand the limits of an Albanian student permit."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a visa to study in Albania from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Bangladeshi citizens need a Type D (D/ST) study visa for stays over 90 days, applied for before travel through the official e-Visa system."
          }
        },
        {
          "@type": "Question",
          "name": "Can I work while studying?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Do not assume you can. Foreigners generally need a work or unique permit, so confirm student work rules with the Migration Police and your university before relying on any income."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost overall?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many students spend roughly €6,500 to €15,000 a year including tuition and living, with medicine and dentistry costing more."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Albania 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Albania from Bangladesh: Complete Step-by-Step Guide (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Costs in BDT, English-taught programmes, the Type D student visa, residence permit and an honest look at what Albania is and is not.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-21">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Albania guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 52 Albania guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Why Bangladeshi students look at Albania</h2>
<p className="mt-4 leading-7 text-slate-700">Albania is a small Balkan country on the Adriatic and Ionian seas with a growing higher-education sector, low tuition by European standards and living costs that are modest compared with Western Europe. Most programmes are taught in Albanian, but a growing number of private and public universities run English-taught degrees in business, IT, engineering, architecture, health and medicine. For families who want a European-located degree at a lower budget, Albania is worth a serious look, provided expectations are realistic.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">What you should know first</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li><strong>Albania is not in the EU or the Schengen area.</strong> A study permit in Albania does not give you the right to live, work or study in other European countries. Read <Link href="/study/albania/albania-reality-check-eu-and-schengen-myths" className={linkClass}>the reality check</Link>.</li><li><strong>Most degrees are in Albanian.</strong> English-taught options exist but are fewer, so choose programmes carefully; see <Link href="/study/albania/top-universities-in-albania" className={linkClass}>top universities in Albania</Link>.</li><li><strong>Bangladeshi citizens need a visa.</strong> For study over 90 days you apply for a Type D (D/ST) visa through the e-Visa portal before travelling.</li><li><strong>Recognition matters.</strong> Check how your degree will be recognised in Bangladesh, especially for medicine and regulated professions; see <Link href="/study/albania/degree-recognition-and-eligibility-in-albania" className={linkClass}>degree recognition</Link>.</li></ul>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Always verify on the official portals: e-visa.al for the study visa, e-albania.al for the residence permit and the university&apos;s own international office.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Your route in eight steps</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li><strong>Define your goal.</strong> Degree level, subject, budget and what you will do after graduation.</li><li><strong>Shortlist accredited universities</strong> with English-taught programmes; see <Link href="/study/albania/public-vs-private-universities-in-albania" className={linkClass}>public vs private universities</Link>.</li><li><strong>Check English and entry requirements;</strong> see <Link href="/study/albania/english-and-albanian-language-requirements" className={linkClass}>language requirements</Link>.</li><li><strong>Apply and receive the acceptance letter.</strong> See the <Link href="/study/albania/application-guide-for-albanian-universities" className={linkClass}>application guide</Link>.</li><li><strong>Pay the deposit or first fees</strong> as the university instructs, and keep receipts.</li><li><strong>Prepare visa documents:</strong> admission proof, funds, travel health insurance, accommodation proof, English proof and legalised criminal record; see <Link href="/study/albania/student-visa-requirements-bangladesh" className={linkClass}>visa requirements</Link>.</li><li><strong>Apply for the Type D visa online</strong> on e-visa.al; see <Link href="/study/albania/e-visa-application-step-by-step" className={linkClass}>e-Visa step by step</Link>.</li><li><strong>After arrival, apply for the residence permit within 30 days</strong> on e-Albania; see <Link href="/study/albania/residence-permit-guide-for-students-in-albania" className={linkClass}>residence permit guide</Link>.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Indicative first-year budget</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">Indicative EUR</th><th scope="col" className="px-3 py-2 text-left font-bold">Indicative BDT</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tuition, private university bachelor or master</td><td className="px-3 py-2 align-top">€2,500 – 7,000</td><td className="px-3 py-2 align-top">Tk 3.5 – 9.8 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tuition, English-taught medicine at a private university</td><td className="px-3 py-2 align-top">€12,000 – 14,000 published at some universities</td><td className="px-3 py-2 align-top">Tk 16.8 – 19.6 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs per year</td><td className="px-3 py-2 align-top">€4,000 – 8,000</td><td className="px-3 py-2 align-top">Tk 5.6 – 11.2 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Health insurance per year</td><td className="px-3 py-2 align-top">€300 – 500</td><td className="px-3 py-2 align-top">Tk 42,000 – 70,000</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Visa and residence permit fees</td><td className="px-3 py-2 align-top">Check official portals</td><td className="px-3 py-2 align-top">Varies</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Flights from Dhaka (usually one stop)</td><td className="px-3 py-2 align-top">€500 – 1,000</td><td className="px-3 py-2 align-top">Tk 70,000 – 1.4 lakh</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 EUR = about Tk 140 (and about 97–100 ALL per EUR) and are indicative estimates for 2026–2027 from published university pages and Albanian government portals. Fees, visa charges and rules change, so confirm on the university page, e-visa.al and e-albania.al, or with an Eammu Holidays counselor, before paying anything.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Who Albania suits</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Students seeking a lower-cost English-taught degree in business, IT, engineering or health.</li><li>Families who have verified recognition of the degree in Bangladesh.</li><li>Applicants who are comfortable in a small, friendly country with a different language and culture.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Who should think twice</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Anyone expecting a shortcut to Schengen or EU residence.</li><li>Students who need to earn a large part of their costs through work.</li><li>Applicants who have not confirmed that their chosen programme is accredited and taught in English.</li></ul>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Albania Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Albania</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and scholarship shortlist, visa and residence permit guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
