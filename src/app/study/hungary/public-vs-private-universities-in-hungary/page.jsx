import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/public-vs-private-universities-in-hungary';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Public vs Private Universities in Hungary 2026 | Eammu",
  "description": "Public, foundation-run, church and private universities in Hungary explained for Bangladeshi students: fees, recognition and residence permit rules.",
  "keywords": [
    "public vs private universities Hungary",
    "state recognised university Hungary",
    "Hungary university types"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/public-vs-private-universities-in-hungary"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Public vs Private Universities in Hungary 2026 | Eammu",
    "description": "Public, foundation-run, church and private universities in Hungary explained for Bangladeshi students: fees, recognition and residence permit rules.",
    "url": "https://eammu.com/study/hungary/public-vs-private-universities-in-hungary",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Public vs Private Universities in Hungary 2026 | Eammu",
    "description": "Public, foundation-run, church and private universities in Hungary explained for Bangladeshi students: fees, recognition and residence permit rules."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Public vs Private Universities", "href": "/study/hungary/public-vs-private-universities-in-hungary"}];
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
    "href": "/study/hungary/top-universities-in-hungary",
    "title": "Top Universities in Hungary for Bangladeshi Students",
    "description": "Top universities in Hungary for Bangladeshi students in 2026: ELTE, BME, Semmelweis, Debrecen, Szeged, Pécs and Corvinus with strengths and fit."
  },
  {
    "href": "/study/hungary/degree-recognition-and-eligibility-in-hungary",
    "title": "Degree Recognition and Eligibility in Hungary for Bangladeshi Students",
    "description": "Degree recognition and eligibility in Hungary for Bangladeshi students in 2026: attestation, apostille, equivalence and Bangladesh recognition of Hungarian degrees."
  },
  {
    "href": "/study/hungary/cheapest-universities-in-hungary",
    "title": "Cheapest Universities in Hungary for Bangladeshi Students",
    "description": "How to find the cheapest universities in Hungary in 2026: low-fee regional public universities, hidden costs and a checklist for Bangladeshi students."
  },
  {
    "href": "/study/hungary/hungary-student-visa-refusal-reasons",
    "title": "Hungary Student Visa Refusal Reasons and How to Avoid Them",
    "description": "Common reasons Hungary student visas and permits are refused for Bangladeshi applicants in 2026, and how to prepare a stronger file or reapply."
  }
];
const FAQS = [
  {
    "q": "Are private universities in Hungary valid?",
    "a": "Some are state-recognised and valid; others may not qualify for a study permit. Always verify."
  },
  {
    "q": "What is a foundation-run university?",
    "a": "Many Hungarian public universities are now maintained by public-interest foundations, but they continue to deliver public higher education."
  },
  {
    "q": "Is a public university better?",
    "a": "Not automatically, but public universities usually offer clearer recognition and lower fees."
  },
  {
    "q": "Can I get a permit at a private university?",
    "a": "Only if the institution is state-recognised and meets immigration rules."
  },
  {
    "q": "How do I check state recognition?",
    "a": "Ask the university for proof and check official Hungarian education sources."
  },
  {
    "q": "Are church universities good for international students?",
    "a": "Some offer English programmes, but the range is smaller. Check each programme."
  },
  {
    "q": "What is the difference between accreditation and recognition?",
    "a": "Accreditation relates to programme quality standards, while recognition relates to the institution's legal status in the higher education system. You need both to be clear."
  },
  {
    "q": "Can an unrecognised college affect my visa?",
    "a": "Yes. A residence permit for study requires a public or state-recognised institution."
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
          "name": "Public vs Private Universities",
          "item": "https://eammu.com/study/hungary/public-vs-private-universities-in-hungary"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Public vs Private Universities in Hungary: Recognition, Fees and Visa Impact",
      "description": "Public, foundation-run, church and private universities in Hungary explained for Bangladeshi students: fees, recognition and residence permit rules.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/public-vs-private-universities-in-hungary",
      "keywords": "public vs private universities Hungary, state recognised university Hungary, Hungary university types",
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
          "name": "Are private universities in Hungary valid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some are state-recognised and valid; others may not qualify for a study permit. Always verify."
          }
        },
        {
          "@type": "Question",
          "name": "What is a foundation-run university?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many Hungarian public universities are now maintained by public-interest foundations, but they continue to deliver public higher education."
          }
        },
        {
          "@type": "Question",
          "name": "Is a public university better?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically, but public universities usually offer clearer recognition and lower fees."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a permit at a private university?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only if the institution is state-recognised and meets immigration rules."
          }
        },
        {
          "@type": "Question",
          "name": "How do I check state recognition?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ask the university for proof and check official Hungarian education sources."
          }
        },
        {
          "@type": "Question",
          "name": "Are church universities good for international students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some offer English programmes, but the range is smaller. Check each programme."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between accreditation and recognition?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Accreditation relates to programme quality standards, while recognition relates to the institution's legal status in the higher education system. You need both to be clear."
          }
        },
        {
          "@type": "Question",
          "name": "Can an unrecognised college affect my visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A residence permit for study requires a public or state-recognised institution."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Public vs Private Universities in Hungary: Recognition, Fees and Visa Impact</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Understanding Hungarian institution types protects your degree, your visa and your money.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>A residence permit for study requires enrolment at a public or state-recognised institution.</li><li>Many former state universities are now run by public-interest foundations but remain public-purpose institutions.</li><li>Private colleges can be good, but verify recognition and programme accreditation.</li><li>Fees alone do not tell you quality.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#types-of-institutions" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Types of institutions</a></li><li><a href="#why-recognition-matters-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Why recognition matters for Bangladeshi students</a></li><li><a href="#how-to-verify-an-institution" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to verify an institution</a></li><li><a href="#cost-and-quality" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cost and quality</a></li><li><a href="#due-diligence-checklist-before-paying-a-deposit" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Due-diligence checklist before paying a deposit</a></li><li><a href="#warning-signs" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Warning signs</a></li><li><a href="#which-type-suits-which-student" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Which type suits which student?</a></li></ol>
          </nav>

          <article>
<section id="types-of-institutions" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Types of institutions</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Type</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical features</th><th scope="col" className="px-3 py-2 text-left font-bold">Check before applying</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">State university</td><td className="px-3 py-2 align-top">Large, research-focused, wide English offer</td><td className="px-3 py-2 align-top">Programme in English, fees</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Foundation-run public university</td><td className="px-3 py-2 align-top">Public purpose with foundation governance</td><td className="px-3 py-2 align-top">Residence permit and recognition status</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Church university</td><td className="px-3 py-2 align-top">Often smaller, specific profile</td><td className="px-3 py-2 align-top">Language, programmes, recognition</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Private university</td><td className="px-3 py-2 align-top">Higher fees, flexible entry</td><td className="px-3 py-2 align-top">State recognition, accreditation, track record</td></tr></tbody></table></div>
</section>
<section id="why-recognition-matters-for-bangladeshi-students" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Why recognition matters for Bangladeshi students</h2>
<p className="mt-4 leading-7 text-slate-700">Hungarian immigration rules tie the residence permit for study to institutions that are public or state-recognised. If your institution loses status or your programme is not accredited, your degree value and permit can be at risk. Read <Link href="/study/hungary/degree-recognition-and-eligibility-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">degree recognition</Link> and <Link href="/study/hungary/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa requirements</Link>.</p>
</section>
<section id="how-to-verify-an-institution" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to verify an institution</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Check the institution on official Hungarian education sources and the Study in Hungary portal.</li><li>Confirm the programme and language of instruction on the university site.</li><li>Ask the admissions office to confirm your permit eligibility in writing.</li><li>Search student reviews outside agent pages.</li></ol>
</section>
<section id="cost-and-quality" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Cost and quality</h2>
<p className="mt-4 leading-7 text-slate-700">Private universities often charge more, but price is not proof of quality. Compare programme content, staff and career outcomes, then see <Link href="/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees</Link> and <Link href="/study/hungary/cheapest-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cheapest universities</Link>.</p>
</section>
<section id="due-diligence-checklist-before-paying-a-deposit" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Due-diligence checklist before paying a deposit</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Get the full legal name of the institution and check it independently.</li><li>Confirm the programme is accredited and offered in English.</li><li>Ask in writing whether you will qualify for a residence permit for study.</li><li>Check the refund policy for visa refusal.</li><li>Speak to current Bangladeshi students at the institution.</li><li>Pay only to the official institutional bank account.</li></ol>
</section>
<section id="warning-signs" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Warning signs</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>The institution cannot show its recognition status.</li><li>The offer arrives without proper assessment of your documents.</li><li>The agent controls payments or your applicant account.</li><li>Fees or conditions change repeatedly.</li></ul>
</section>
<section id="which-type-suits-which-student" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Which type suits which student?</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Student</th><th scope="col" className="px-3 py-2 text-left font-bold">Likely better fit</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Budget-focused, wants scholarship</td><td className="px-3 py-2 align-top">Public university</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Wants niche programme not offered elsewhere</td><td className="px-3 py-2 align-top">Check private or church options carefully</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Needs flexible entry</td><td className="px-3 py-2 align-top">Compare foundation routes at recognised institutions</td></tr></tbody></table></div>
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
