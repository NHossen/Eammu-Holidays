import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/hungary-student-documents-checklist';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Hungary Student Visa Documents Checklist 2026",
  "description": "Complete documents checklist for Hungary admission and student visa in 2026 for Bangladeshi students: academic, financial, travel and insurance papers.",
  "keywords": [
    "Hungary documents checklist",
    "Hungary student visa documents",
    "documents for Hungary admission Bangladesh"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/hungary-student-documents-checklist"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Hungary Student Visa Documents Checklist 2026",
    "description": "Complete documents checklist for Hungary admission and student visa in 2026 for Bangladeshi students: academic, financial, travel and insurance papers.",
    "url": "https://eammu.com/study/hungary/hungary-student-documents-checklist",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Hungary Student Visa Documents Checklist 2026",
    "description": "Complete documents checklist for Hungary admission and student visa in 2026 for Bangladeshi students: academic, financial, travel and insurance papers."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Documents Checklist", "href": "/study/hungary/hungary-student-documents-checklist"}];
const NAV = [
  {
    "label": "Hungary Hub",
    "pages": [
      {
        "href": "/study/hungary",
        "label": "Study in Hungary Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/hungary/study-in-hungary-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/hungary/study-in-hungary-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/hungary/cost-of-living-in-hungary-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/hungary/cheapest-universities-in-hungary",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/hungary/top-universities-in-hungary",
        "label": "Top Universities"
      },
      {
        "href": "/study/hungary/public-vs-private-universities-in-hungary",
        "label": "Public vs Private Universities"
      },
      {
        "href": "/study/hungary/admission-requirements-in-hungary-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/hungary/study-gap-accepted-universities-in-hungary",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/hungary/study-in-hungary-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/hungary/study-in-hungary-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/hungary/hungary-intake-dates",
        "label": "Intake Dates"
      },
      {
        "href": "/study/hungary/hungary-vs-finland-vs-germany-for-bangladeshi-students",
        "label": "Hungary vs Finland vs Germany"
      }
    ]
  },
  {
    "label": "Scholarships & Funding",
    "pages": [
      {
        "href": "/study/hungary/scholarships-in-hungary-for-bangladeshi-students",
        "label": "Scholarships Overview"
      },
      {
        "href": "/study/hungary/stipendium-hungaricum-scholarship-guide",
        "label": "Stipendium Hungaricum Guide"
      },
      {
        "href": "/study/hungary/stipendium-hungaricum-eligibility-and-deadlines",
        "label": "SH Eligibility & Deadlines"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/hungary/how-to-apply-to-hungarian-universities",
        "label": "How to Apply (Step by Step)"
      },
      {
        "href": "/study/hungary/degree-recognition-and-eligibility-in-hungary",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/hungary/bachelors-in-hungary-for-bangladeshi-students",
        "label": "Bachelor's Degrees"
      },
      {
        "href": "/study/hungary/masters-and-phd-in-hungary-for-bangladeshi-students",
        "label": "Master's & PhD"
      },
      {
        "href": "/study/hungary/cse-and-it-courses-in-hungary",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/hungary/engineering-courses-in-hungary",
        "label": "Engineering Courses"
      },
      {
        "href": "/study/hungary/mba-in-hungary-for-bangladeshi-students",
        "label": "MBA & Business"
      },
      {
        "href": "/study/hungary/mbbs-and-medical-degrees-in-hungary",
        "label": "Medicine, Dentistry & Pharmacy"
      },
      {
        "href": "/study/hungary/foundation-year-and-preparatory-courses-in-hungary",
        "label": "Foundation Year"
      },
      {
        "href": "/study/hungary/sop-and-motivation-letter-for-hungary",
        "label": "SOP & Motivation Letter"
      }
    ]
  },
  {
    "label": "Cities & Student Life",
    "pages": [
      {
        "href": "/study/hungary/student-accommodation-in-hungary",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/hungary/study-in-budapest",
        "label": "Study in Budapest"
      },
      {
        "href": "/study/hungary/study-in-debrecen",
        "label": "Study in Debrecen"
      },
      {
        "href": "/study/hungary/study-in-szeged-pecs-and-other-cities",
        "label": "Szeged, Pécs & Other Cities"
      },
      {
        "href": "/study/hungary/health-insurance-for-students-in-hungary",
        "label": "Health Insurance for Students"
      },
      {
        "href": "/study/hungary/halal-food-and-bangladeshi-community-in-hungary",
        "label": "Halal Food & Bangladeshi Community"
      }
    ]
  },
  {
    "label": "Visa, Permit & Work Rules",
    "pages": [
      {
        "href": "/study/hungary/student-visa-requirements-bangladesh",
        "label": "Student Visa & Permit Requirements"
      },
      {
        "href": "/study/hungary/hungary-student-visa-application-guide-bangladesh",
        "label": "Visa Application Guide (D-Visa)"
      },
      {
        "href": "/study/hungary/hungary-student-documents-checklist",
        "label": "Documents Checklist"
      },
      {
        "href": "/study/hungary/bank-solvency-requirements-for-hungary-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/hungary/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/hungary/hungary-student-visa-refusal-reasons",
        "label": "Visa Refusal Reasons"
      },
      {
        "href": "/study/hungary/part-time-job-and-post-study-work-rules-in-hungary",
        "label": "Work & Post-Study Rules"
      },
      {
        "href": "/study/hungary/bring-family-to-hungary-as-a-student",
        "label": "Family & Dependents"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/hungary/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/hungary/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/hungary/student-visa-requirements-bangladesh",
    "title": "Hungary Student Visa and Residence Permit Requirements for Bangladeshis",
    "description": "Hungary student visa and residence permit requirements for Bangladeshi students in 2026: D-visa, admission letter, funds, accommodation and insurance."
  },
  {
    "href": "/study/hungary/hungary-student-visa-application-guide-bangladesh",
    "title": "Hungary D-Visa and Residence Permit Application Guide for Bangladeshis",
    "description": "Step-by-step Hungary D-visa and study residence permit application for Bangladeshis in 2026: appointment, documents, biometrics, decision and arrival."
  },
  {
    "href": "/study/hungary/degree-recognition-and-eligibility-in-hungary",
    "title": "Degree Recognition and Eligibility in Hungary for Bangladeshi Students",
    "description": "Degree recognition and eligibility in Hungary for Bangladeshi students in 2026: attestation, apostille, equivalence and Bangladesh recognition of Hungarian degrees."
  },
  {
    "href": "/study/hungary/bank-solvency-requirements-for-hungary-student-visa",
    "title": "Proof of Funds and Bank Solvency for a Hungary Student Visa",
    "description": "Proof of funds for a Hungary student visa in 2026: how Bangladeshi students should show means of subsistence, sponsor rules and planning estimates."
  }
];
const FAQS = [
  {
    "q": "What documents are needed for a Hungary student visa?",
    "a": "Admission letter, passport, funds proof, accommodation, insurance, photos, forms and often academic documents."
  },
  {
    "q": "Do I need to translate documents?",
    "a": "Often into English or Hungarian, depending on the authority. Confirm in advance."
  },
  {
    "q": "Is a police certificate required?",
    "a": "It may be requested, so check the current list."
  },
  {
    "q": "Do I need original bank statements?",
    "a": "Usually bank-issued documents are needed. Check the format required."
  },
  {
    "q": "Can I submit digital copies?",
    "a": "Some stages allow it, but originals are often needed in person."
  },
  {
    "q": "How long do documents take to prepare?",
    "a": "Allow several weeks for attestation, bank papers and translation."
  },
  {
    "q": "Can I use photocopies?",
    "a": "Check which documents need originals or certified copies."
  },
  {
    "q": "How many passport photos do I need?",
    "a": "Requirements vary; bring extras."
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
          "name": "Hungary",
          "item": "https://eammu.com/study/hungary"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Documents Checklist",
          "item": "https://eammu.com/study/hungary/hungary-student-documents-checklist"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Hungary Student Visa and Admission Documents Checklist for Bangladeshis (2026)",
      "description": "Complete documents checklist for Hungary admission and student visa in 2026 for Bangladeshi students: academic, financial, travel and insurance papers.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/hungary-student-documents-checklist",
      "keywords": "Hungary documents checklist, Hungary student visa documents, documents for Hungary admission Bangladesh",
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
          "name": "What documents are needed for a Hungary student visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Admission letter, passport, funds proof, accommodation, insurance, photos, forms and often academic documents."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to translate documents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often into English or Hungarian, depending on the authority. Confirm in advance."
          }
        },
        {
          "@type": "Question",
          "name": "Is a police certificate required?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It may be requested, so check the current list."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need original bank statements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually bank-issued documents are needed. Check the format required."
          }
        },
        {
          "@type": "Question",
          "name": "Can I submit digital copies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some stages allow it, but originals are often needed in person."
          }
        },
        {
          "@type": "Question",
          "name": "How long do documents take to prepare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Allow several weeks for attestation, bank papers and translation."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use photocopies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check which documents need originals or certified copies."
          }
        },
        {
          "@type": "Question",
          "name": "How many passport photos do I need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Requirements vary; bring extras."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Hungary 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Hungary Student Visa and Admission Documents Checklist for Bangladeshis (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Use this checklist to avoid delays and refusals caused by missing papers.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} counseling team &middot; Updated <time dateTime="2026-11-21">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Hungary guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 55 Hungary guides</summary>
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
          <section aria-labelledby="takeaways-heading" className="rounded-xl border-l-4 border-yellow-400 bg-white p-5 shadow-sm">
            <h2 id="takeaways-heading" className="text-lg font-bold text-emerald-900">Key takeaways</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Gather academic, identity, financial, accommodation and insurance documents.</li><li>Names and dates must match across all papers.</li><li>Ask the university and visa channel whether translation or attestation is required.</li><li>Keep both originals and clear copies.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#academic-documents" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Academic documents</a></li><li><a href="#identity-and-application-documents" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Identity and application documents</a></li><li><a href="#financial-and-stay-documents" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Financial and stay documents</a></li><li><a href="#attestation-and-translation" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Attestation and translation</a></li><li><a href="#final-checks" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Final checks</a></li><li><a href="#document-timeline" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Document timeline</a></li><li><a href="#common-formatting-problems" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Common formatting problems</a></li><li><a href="#digital-organisation-tips" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Digital organisation tips</a></li></ol>
          </nav>

          <article>
<section id="academic-documents" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Academic documents</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>SSC and HSC certificates and transcripts.</li><li>Bachelor&apos;s or diploma certificates and transcripts if applicable.</li><li>English test result or MOI letter.</li><li>Motivation letter and CV, see <Link href="/study/hungary/sop-and-motivation-letter-for-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">SOP guide</Link>.</li><li>Recommendation letters where requested.</li><li>Portfolio or research proposal for design and PhD programmes.</li></ul>
</section>
<section id="identity-and-application-documents" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Identity and application documents</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Passport with required validity.</li><li>Passport-size photographs to specification.</li><li>Completed application forms.</li><li>Birth certificate and NID where requested.</li><li>Police clearance if requested.</li></ul>
</section>
<section id="financial-and-stay-documents" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Financial and stay documents</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Bank statements, sponsor documents and income proofs, see <Link href="/study/hungary/bank-solvency-requirements-for-hungary-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link>.</li><li>Tuition payment receipt if required.</li><li>Proof of accommodation, see <Link href="/study/hungary/student-accommodation-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">accommodation</Link>.</li><li>Health insurance certificate, see <Link href="/study/hungary/health-insurance-for-students-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">insurance guide</Link>.</li></ul>
</section>
<section id="attestation-and-translation" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Attestation and translation</h2>
<p className="mt-4 leading-7 text-slate-700">Ask which documents need apostille, attestation or certified translation. Bangladesh&apos;s 2025 accession to the Apostille Convention may change the route, so confirm with the university and visa channel; see <Link href="/study/hungary/degree-recognition-and-eligibility-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">degree recognition</Link>.</p>
</section>
<section id="final-checks" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Final checks</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Compare names, dates and spellings across every document.</li><li>Scan and store everything in a labelled folder.</li><li>Bring originals to your appointment.</li><li>Follow the <Link href="/study/hungary/hungary-student-visa-application-guide-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa application guide</Link>.</li></ol>
</section>
<section id="document-timeline" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Document timeline</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Weeks before appointment</th><th scope="col" className="px-3 py-2 text-left font-bold">Task</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">10–12</td><td className="px-3 py-2 align-top">Request transcripts and certificates</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">8–10</td><td className="px-3 py-2 align-top">Attestation and apostille where needed</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">6–8</td><td className="px-3 py-2 align-top">Translations and bank documents</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">4–6</td><td className="px-3 py-2 align-top">Insurance and accommodation proof</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">2–4</td><td className="px-3 py-2 align-top">Final check and printing</td></tr></tbody></table></div>
</section>
<section id="common-formatting-problems" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Common formatting problems</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Low-resolution scans.</li><li>Missing signatures or stamps.</li><li>Different spelling of your name.</li><li>Unlabelled files.</li></ul>
</section>
<section id="digital-organisation-tips" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Digital organisation tips</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Name files clearly, for example Passport_Name.pdf or HSC_Transcript.pdf.</li><li>Keep a master spreadsheet of document status and expiry dates.</li><li>Store backups in two secure places.</li><li>Share only the documents each party requests.</li></ul>
</section>
          </article>

          <section className="mt-12" aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="text-xl font-bold text-emerald-900">Official sources to verify before you pay or apply</h2>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-6 text-slate-700"><li><a href="https://stipendiumhungaricum.hu/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Stipendium Hungaricum (Tempus Public Foundation)</a></li><li><a href="https://studyinhungary.hu/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Study in Hungary – official study portal</a></li><li><a href="https://oif.gov.hu/students" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Hungarian immigration authority (OIF) – students</a></li><li><a href="https://hungary.blsinternational.com/bangladesh/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">BLS International – Hungary visa centre, Dhaka</a></li></ul>
            <p className="mt-3 text-sm leading-6 text-slate-600">Eammu Holidays is a counseling service, not a government body, and cannot guarantee admission, a scholarship or a visa. Rules and fees change; the official sources above always override this page.</p>
          </section>

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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Hungary Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Hungary</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and Stipendium Hungaricum shortlist, visa guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
