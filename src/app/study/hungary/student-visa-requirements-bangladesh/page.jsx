import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/student-visa-requirements-bangladesh';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Hungary Student Visa Requirements for Bangladesh 2026",
  "description": "Hungary student visa and residence permit requirements for Bangladeshi students in 2026: D-visa, admission letter, funds, accommodation and insurance.",
  "keywords": [
    "Hungary student visa Bangladesh",
    "Hungary D visa requirements",
    "Hungary residence permit for study",
    "Hungary visa requirements for Bangladeshi students"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/student-visa-requirements-bangladesh"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Hungary Student Visa Requirements for Bangladesh 2026",
    "description": "Hungary student visa and residence permit requirements for Bangladeshi students in 2026: D-visa, admission letter, funds, accommodation and insurance.",
    "url": "https://eammu.com/study/hungary/student-visa-requirements-bangladesh",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Hungary Student Visa Requirements for Bangladesh 2026",
    "description": "Hungary student visa and residence permit requirements for Bangladeshi students in 2026: D-visa, admission letter, funds, accommodation and insurance."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Student Visa & Permit Requirements", "href": "/study/hungary/student-visa-requirements-bangladesh"}];
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
    "href": "/study/hungary/hungary-student-visa-application-guide-bangladesh",
    "title": "Hungary D-Visa and Residence Permit Application Guide for Bangladeshis",
    "description": "Step-by-step Hungary D-visa and study residence permit application for Bangladeshis in 2026: appointment, documents, biometrics, decision and arrival."
  },
  {
    "href": "/study/hungary/hungary-student-documents-checklist",
    "title": "Hungary Student Visa and Admission Documents Checklist for Bangladeshis",
    "description": "Complete documents checklist for Hungary admission and student visa in 2026 for Bangladeshi students: academic, financial, travel and insurance papers."
  },
  {
    "href": "/study/hungary/bank-solvency-requirements-for-hungary-student-visa",
    "title": "Proof of Funds and Bank Solvency for a Hungary Student Visa",
    "description": "Proof of funds for a Hungary student visa in 2026: how Bangladeshi students should show means of subsistence, sponsor rules and planning estimates."
  },
  {
    "href": "/study/hungary/student-visa-processing-time-and-cost",
    "title": "Hungary Student Visa Processing Time and Cost for Bangladeshis",
    "description": "Hungary student visa and residence permit processing time and cost in 2026 for Bangladeshi applicants: fees, service charges and planning timelines."
  }
];
const FAQS = [
  {
    "q": "Do Bangladeshis need a visa for Hungary?",
    "a": "Yes. Bangladeshi passport holders need a visa, and degree students need a long-stay D-visa and residence permit."
  },
  {
    "q": "Who issues the Hungary student residence permit?",
    "a": "The Hungarian immigration authority (OIF), after application through the consular process or in Hungary."
  },
  {
    "q": "Can I enter Hungary on a tourist visa and then study?",
    "a": "Do not rely on this. Follow the long-stay student route to avoid refusal and legal problems."
  },
  {
    "q": "How long is a student permit valid?",
    "a": "Typically for the study period or a year at a time, with extension. Confirm on your permit."
  },
  {
    "q": "Do I need a letter of admission?",
    "a": "Yes, from a public or state-recognised institution."
  },
  {
    "q": "Can scholarship students apply differently?",
    "a": "Stipendium Hungaricum holders have scholarship-specific document lists; follow the official instructions."
  },
  {
    "q": "Can I apply from within Hungary?",
    "a": "Some applicants already in Hungary on another permit can apply for a study permit, but visa-required nationals may need to follow specific rules. Check with the authority."
  },
  {
    "q": "Does a permit allow travel inside Schengen?",
    "a": "A valid residence permit generally allows short stays in the Schengen area, subject to rules."
  },
  {
    "q": "Do I need to renew the permit?",
    "a": "Yes, student permits need extension while you continue studying."
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
          "name": "Student Visa & Permit Requirements",
          "item": "https://eammu.com/study/hungary/student-visa-requirements-bangladesh"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Hungary Student Visa and Residence Permit Requirements for Bangladeshis (2026)",
      "description": "Hungary student visa and residence permit requirements for Bangladeshi students in 2026: D-visa, admission letter, funds, accommodation and insurance.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/student-visa-requirements-bangladesh",
      "keywords": "Hungary student visa Bangladesh, Hungary D visa requirements, Hungary residence permit for study, Hungary visa requirements for Bangladeshi students",
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
          "name": "Do Bangladeshis need a visa for Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Bangladeshi passport holders need a visa, and degree students need a long-stay D-visa and residence permit."
          }
        },
        {
          "@type": "Question",
          "name": "Who issues the Hungary student residence permit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Hungarian immigration authority (OIF), after application through the consular process or in Hungary."
          }
        },
        {
          "@type": "Question",
          "name": "Can I enter Hungary on a tourist visa and then study?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Do not rely on this. Follow the long-stay student route to avoid refusal and legal problems."
          }
        },
        {
          "@type": "Question",
          "name": "How long is a student permit valid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically for the study period or a year at a time, with extension. Confirm on your permit."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a letter of admission?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, from a public or state-recognised institution."
          }
        },
        {
          "@type": "Question",
          "name": "Can scholarship students apply differently?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stipendium Hungaricum holders have scholarship-specific document lists; follow the official instructions."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply from within Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some applicants already in Hungary on another permit can apply for a study permit, but visa-required nationals may need to follow specific rules. Check with the authority."
          }
        },
        {
          "@type": "Question",
          "name": "Does a permit allow travel inside Schengen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A valid residence permit generally allows short stays in the Schengen area, subject to rules."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to renew the permit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, student permits need extension while you continue studying."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Hungary Student Visa and Residence Permit Requirements for Bangladeshis (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Bangladeshi students need a long-stay D-visa and a residence permit for study. Here is what authorities look for.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Bangladeshi citizens need a visa to enter Hungary, so a long-stay D-visa and residence permit for study are required for degree students.</li><li>The permit is issued to students at public or state-recognised institutions, or on a preparatory course.</li><li>Core evidence: admission letter, means of subsistence, accommodation, health insurance and a valid passport.</li><li>The National Directorate-General for Aliens Policing (OIF) is the immigration authority; consulates handle the visa stage.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#who-needs-what" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Who needs what</a></li><li><a href="#core-requirements" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Core requirements</a></li><li><a href="#rights-and-limits-of-a-student-permit" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Rights and limits of a student permit</a></li><li><a href="#where-to-apply-from-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Where to apply from Bangladesh</a></li><li><a href="#strong-files-vs-weak-files" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Strong files vs weak files</a></li><li><a href="#typical-document-set-at-the-visa-stage" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Typical document set at the visa stage</a></li><li><a href="#mistakes-that-cause-delays" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mistakes that cause delays</a></li><li><a href="#official-sources-to-check-regularly" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Official sources to check regularly</a></li></ol>
          </nav>

          <article>
<section id="who-needs-what" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Who needs what</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">What it means</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">D-visa (long stay)</td><td className="px-3 py-2 align-top">Entry visa for stays over 90 days, applied for at the Hungarian consular channel for Bangladesh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Residence permit for study</td><td className="px-3 py-2 align-top">Issued by the immigration authority for enrolled students; often applied for together with the D-visa</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Residence permit for training</td><td className="px-3 py-2 align-top">For scholarship-based training courses run by the government or ministry</td></tr></tbody></table></div>
</section>
<section id="core-requirements" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Core requirements</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Valid passport with sufficient validity.</li><li>Admission or enrolment letter from a recognised institution.</li><li>Proof of means of subsistence in Hungary, see <Link href="/study/hungary/bank-solvency-requirements-for-hungary-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link>.</li><li>Proof of accommodation, see <Link href="/study/hungary/student-accommodation-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">accommodation</Link>.</li><li>Health insurance or proof you can cover healthcare, see <Link href="/study/hungary/health-insurance-for-students-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">health insurance</Link>.</li><li>Passport photos and completed forms.</li><li>Police clearance or other documents if requested.</li></ul><p className="mt-4 leading-7 text-slate-700">A full list is in the <Link href="/study/hungary/hungary-student-documents-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">documents checklist</Link>.</p>
</section>
<section id="rights-and-limits-of-a-student-permit" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Rights and limits of a student permit</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Work up to 30 hours a week in term and full-time up to 90 days a year outside term, see <Link href="/study/hungary/part-time-job-and-post-study-work-rules-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">work rules</Link>.</li><li>No family-reunification permit for family of students, see <Link href="/study/hungary/bring-family-to-hungary-as-a-student" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">family guide</Link>.</li><li>After graduating, a permit to seek a job or start a business may be possible.</li></ul>
</section>
<section id="where-to-apply-from-bangladesh" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Where to apply from Bangladesh</h2>
<p className="mt-4 leading-7 text-slate-700">Long-stay applications for Hungary are handled through the channel announced for Bangladesh, including the Hungary visa application centre operated by BLS International in Dhaka (Banani) according to its published contact page. Always confirm current appointment rules before travelling to Dhaka. Follow the steps in <Link href="/study/hungary/hungary-student-visa-application-guide-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the visa application guide</Link>.</p>
</section>
<section id="strong-files-vs-weak-files" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Strong files vs weak files</h2>
<p className="mt-4 leading-7 text-slate-700">Officers look for a consistent story: admission, funds, accommodation and plan. Read <Link href="/study/hungary/hungary-student-visa-refusal-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">common refusal reasons</Link> and <Link href="/study/hungary/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">processing time and cost</Link>.</p>
</section>
<section id="typical-document-set-at-the-visa-stage" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Typical document set at the visa stage</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Document</th><th scope="col" className="px-3 py-2 text-left font-bold">Why it matters</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Admission letter</td><td className="px-3 py-2 align-top">Proves purpose of stay</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Proof of subsistence</td><td className="px-3 py-2 align-top">Shows you can support yourself</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Accommodation proof</td><td className="px-3 py-2 align-top">Shows where you will live</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Health insurance</td><td className="px-3 py-2 align-top">Shows healthcare cover</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Passport and photos</td><td className="px-3 py-2 align-top">Identity and application</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Academic records</td><td className="px-3 py-2 align-top">Supports eligibility</td></tr></tbody></table></div>
</section>
<section id="mistakes-that-cause-delays" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Mistakes that cause delays</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Applying before you hold a final admission letter.</li><li>Bank statements without clear source of funds.</li><li>Name or date mismatches.</li><li>Missing translations.</li><li>Booking flights before approval.</li></ul>
</section>
<section id="official-sources-to-check-regularly" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Official sources to check regularly</h2>
<p className="mt-4 leading-7 text-slate-700">Use the immigration authority site, the Hungarian consular pages and the official visa centre information. Requirements can change quickly, so re-check before each step.</p>
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
