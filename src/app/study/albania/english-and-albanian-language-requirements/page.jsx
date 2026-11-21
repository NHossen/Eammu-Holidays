import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/albania/english-and-albanian-language-requirements';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Albania English & Albanian Language Requirements | Eammu Holidays",
  "description": "Language requirements for studying in Albania in 2026: English levels for admission and visa, Albanian-taught programmes, foundation courses and everyday language tips. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/albania/english-and-albanian-language-requirements"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Albania English & Albanian Language Requirements | Eammu Holidays",
    "description": "Language requirements for studying in Albania in 2026: English levels for admission and visa, Albanian-taught programmes, foundation courses and everyday language tips. Eammu Holidays.",
    "url": "https://eammu.com/study/albania/english-and-albanian-language-requirements",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Albania English & Albanian Language Requirements | Eammu Holidays",
    "description": "Language requirements for studying in Albania in 2026: English levels for admission and visa, Albanian-taught programmes, foundation courses and everyday language tips. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Albania", "href": "/study/albania"}, {"name": "Language Requirements", "href": "/study/albania/english-and-albanian-language-requirements"}];
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
    "href": "/study/albania/study-in-albania-without-ielts",
    "title": "Study in Albania Without IELTS: What Universities Accept",
    "description": "Alternatives to IELTS, the English proof the visa still needs and why \"no IELTS\" does not mean no English."
  },
  {
    "href": "/study/albania/foundation-year-and-albanian-language-courses",
    "title": "Foundation Year and Albanian Language Courses for International Students",
    "description": "When a foundation or language year makes sense, what it costs and how it works with the visa."
  },
  {
    "href": "/study/albania/admission-requirements-in-albania-for-bangladeshi-students",
    "title": "Admission Requirements in Albania for Bangladeshi Students",
    "description": "Bachelor, master and doctoral entry rules, documents, legalisation and how acceptance letters work."
  },
  {
    "href": "/study/albania/student-visa-requirements-bangladesh",
    "title": "Albania Student Visa (Type D) Requirements for Bangladeshi Students",
    "description": "Documents, funds, English proof, insurance, accommodation and legalisation for the Type D study visa."
  }
];
const FAQS = [
  {
    "q": "Which CEFR level is enough?",
    "a": "Often B2 for master study and B1 to B2 for bachelor, but check the programme page."
  },
  {
    "q": "Can I study in Albanian?",
    "a": "Yes, but you need a strong language course first. Most Bangladeshi students choose English-taught degrees."
  },
  {
    "q": "Does the visa accept a university letter?",
    "a": "It accepts a document that proves English knowledge. Ask the visa checklist and the university what they will accept."
  },
  {
    "q": "Are there Albanian language courses?",
    "a": "Yes, many universities offer them as a foundation year or intensive programme."
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
          "name": "Language Requirements",
          "item": "https://eammu.com/study/albania/english-and-albanian-language-requirements"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "English and Albanian Language Requirements for Study in Albania (2026)",
      "description": "Language requirements for studying in Albania in 2026: English levels for admission and visa, Albanian-taught programmes, foundation courses and everyday language tips. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/albania/english-and-albanian-language-requirements",
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
          "name": "Which CEFR level is enough?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often B2 for master study and B1 to B2 for bachelor, but check the programme page."
          }
        },
        {
          "@type": "Question",
          "name": "Can I study in Albanian?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but you need a strong language course first. Most Bangladeshi students choose English-taught degrees."
          }
        },
        {
          "@type": "Question",
          "name": "Does the visa accept a university letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It accepts a document that proves English knowledge. Ask the visa checklist and the university what they will accept."
          }
        },
        {
          "@type": "Question",
          "name": "Are there Albanian language courses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, many universities offer them as a foundation year or intensive programme."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">English and Albanian Language Requirements for Study in Albania (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">What level you need for English-taught and Albanian-taught programmes, and how to prove it for admission and the visa.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">English-taught programmes</h2>
<p className="mt-4 leading-7 text-slate-700">Universities usually ask for about B1 to B2 on the CEFR scale for bachelor programmes and B2 for most master programmes. Some accept an HSC or bachelor transcript showing English-medium study, while others test you directly. The exact rule is published on each programme page.</p>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Level</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical use</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">B1 (about IELTS 4.0 – 5.0)</td><td className="px-3 py-2 align-top">Entry to some bachelor programmes or foundation year</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">B2 (about IELTS 5.5 – 6.5)</td><td className="px-3 py-2 align-top">Most master programmes and competitive bachelor programmes</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">C1</td><td className="px-3 py-2 align-top">Research degrees and some professional programmes</td></tr></tbody></table></div>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Albanian-taught programmes</h2>
<p className="mt-4 leading-7 text-slate-700">Most Albanian degrees are taught in Albanian. If you choose one, you will need a recognised Albanian language preparation course or certificate, and the residence permit application asks for proof of language knowledge or admission to a preparatory language course.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Proof for the visa</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>A document certifying your knowledge of English for the studies, such as a test result, letter or university confirmation.</li><li>If you enrol in a foundation or language course, the admission letter for that course.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Everyday language</h2>
<p className="mt-4 leading-7 text-slate-700">English is widely understood in Tirana among younger people, and Italian is also common. Learning basic Albanian greetings and numbers makes daily life and rental talks much easier.</p>
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
