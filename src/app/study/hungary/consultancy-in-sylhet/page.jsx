import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/consultancy-in-sylhet';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Hungary Consultancy in Sylhet 2026 | Eammu",
  "description": "Study in Hungary consultancy for Sylhet students in 2026: free counseling, Stipendium Hungaricum guidance, funds planning and visa preparation from Eammu.",
  "keywords": [
    "study in Hungary consultancy Sylhet",
    "Hungary study visa consultant Sylhet",
    "Stipendium Hungaricum Sylhet",
    "study abroad consultancy Sylhet"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/consultancy-in-sylhet"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Hungary Consultancy in Sylhet 2026 | Eammu",
    "description": "Study in Hungary consultancy for Sylhet students in 2026: free counseling, Stipendium Hungaricum guidance, funds planning and visa preparation from Eammu.",
    "url": "https://eammu.com/study/hungary/consultancy-in-sylhet",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Hungary Consultancy in Sylhet 2026 | Eammu",
    "description": "Study in Hungary consultancy for Sylhet students in 2026: free counseling, Stipendium Hungaricum guidance, funds planning and visa preparation from Eammu."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Sylhet Consultancy", "href": "/study/hungary/consultancy-in-sylhet"}];
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
    "href": "/study/hungary/bangladesh-offices",
    "title": "Eammu Holidays Bangladesh Offices and Nationwide Support for Study in Hungary",
    "description": "Eammu Holidays study in Hungary counseling across Bangladesh: Dhaka walk-in desk and online support for every division, plus a directory of all guides."
  },
  {
    "href": "/study/hungary/study-in-hungary-from-bangladesh",
    "title": "Study in Hungary from Bangladesh: 2026 Roadmap, Costs and Visa Steps",
    "description": "Step-by-step roadmap to study in Hungary from Bangladesh in 2026: eligibility, costs in BDT, scholarships, applications, D-visa and arrival."
  },
  {
    "href": "/study/hungary/stipendium-hungaricum-scholarship-guide",
    "title": "Stipendium Hungaricum Scholarship for Bangladeshi Students: Full Guide",
    "description": "Stipendium Hungaricum for Bangladeshi students: benefits, how to apply, the Ministry of Education sending partner step, documents and common mistakes."
  },
  {
    "href": "/study/hungary/hungary-student-visa-application-guide-bangladesh",
    "title": "Hungary D-Visa and Residence Permit Application Guide for Bangladeshis",
    "description": "Step-by-step Hungary D-visa and study residence permit application for Bangladeshis in 2026: appointment, documents, biometrics, decision and arrival."
  }
];
const FAQS = [
  {
    "q": "Does Eammu Holidays have an office in Sylhet?",
    "a": "Our walk-in counseling desk is in Dhaka. Students elsewhere receive support online, by phone and by WhatsApp, and we do not claim local offices."
  },
  {
    "q": "Can Sylhet students apply for Stipendium Hungaricum?",
    "a": "Yes, if they meet the call criteria and complete both the online and Bangladesh sending-partner steps."
  },
  {
    "q": "Is counseling free?",
    "a": "The initial profile review is free. Any paid service is explained in writing before you commit."
  },
  {
    "q": "Do I need to visit Dhaka?",
    "a": "Usually only for the visa appointment and any in-person biometrics."
  },
  {
    "q": "Can you guarantee admission or a visa?",
    "a": "No. Universities and authorities decide; we help you prepare honest, complete files."
  },
  {
    "q": "How do I start?",
    "a": "Call or WhatsApp +8801631312525, email info@eammu.com, or book a session."
  },
  {
    "q": "How can Sylhet students prepare for Stipendium Hungaricum?",
    "a": "Start early, prepare attested documents, write a strong motivation letter and follow both the online and Ministry of Education steps."
  },
  {
    "q": "Is Hungary a good choice for Sylhet students?",
    "a": "It can be, especially for students who want a lower-cost European degree and can plan funds and language realistically."
  },
  {
    "q": "What does the first free session cover?",
    "a": "Your academic profile, English level, budget, funding options and a realistic shortlist."
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
          "name": "Sylhet Consultancy",
          "item": "https://eammu.com/study/hungary/consultancy-in-sylhet"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Hungary Consultancy for Sylhet Students (2026)",
      "description": "Study in Hungary consultancy for Sylhet students in 2026: free counseling, Stipendium Hungaricum guidance, funds planning and visa preparation from Eammu.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/consultancy-in-sylhet",
      "keywords": "study in Hungary consultancy Sylhet, Hungary study visa consultant Sylhet, Stipendium Hungaricum Sylhet, study abroad consultancy Sylhet",
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
          "name": "Does Eammu Holidays have an office in Sylhet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our walk-in counseling desk is in Dhaka. Students elsewhere receive support online, by phone and by WhatsApp, and we do not claim local offices."
          }
        },
        {
          "@type": "Question",
          "name": "Can Sylhet students apply for Stipendium Hungaricum?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if they meet the call criteria and complete both the online and Bangladesh sending-partner steps."
          }
        },
        {
          "@type": "Question",
          "name": "Is counseling free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The initial profile review is free. Any paid service is explained in writing before you commit."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to visit Dhaka?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually only for the visa appointment and any in-person biometrics."
          }
        },
        {
          "@type": "Question",
          "name": "Can you guarantee admission or a visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Universities and authorities decide; we help you prepare honest, complete files."
          }
        },
        {
          "@type": "Question",
          "name": "How do I start?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call or WhatsApp +8801631312525, email info@eammu.com, or book a session."
          }
        },
        {
          "@type": "Question",
          "name": "How can Sylhet students prepare for Stipendium Hungaricum?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start early, prepare attested documents, write a strong motivation letter and follow both the online and Ministry of Education steps."
          }
        },
        {
          "@type": "Question",
          "name": "Is Hungary a good choice for Sylhet students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be, especially for students who want a lower-cost European degree and can plan funds and language realistically."
          }
        },
        {
          "@type": "Question",
          "name": "What does the first free session cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your academic profile, English level, budget, funding options and a realistic shortlist."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Study in Hungary counseling for Sylhet students",
      "serviceType": "Study abroad counseling",
      "url": "https://eammu.com/study/hungary/consultancy-in-sylhet",
      "provider": {
        "@type": "Organization",
        "name": "Eammu Holidays",
        "url": "https://eammu.com",
        "telephone": "+8801631312525",
        "email": "info@eammu.com"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Sylhet"
      }
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Hungary Consultancy for Sylhet Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">How Sylhet families can use Eammu Holidays to plan study in Hungary, from scholarship to D-visa.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Eammu Holidays gives Sylhet students free profile review, university shortlist and visa guidance.</li><li>Counseling is available online, by phone and by WhatsApp; the walk-in desk is in Dhaka.</li><li>We give balanced advice, including on scholarship odds, funds and visa risk, and never guarantee outcomes.</li><li>Start with the Hungary roadmap and the Stipendium Hungaricum guide.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#counseling-for-sylhet-families" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Counseling for Sylhet families</a></li><li><a href="#logistics-and-travel" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Logistics and travel</a></li><li><a href="#what-sylhet-students-should-prepare" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What Sylhet students should prepare</a></li><li><a href="#typical-sylhet-student-questions" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Typical Sylhet student questions</a></li><li><a href="#nearby-support-and-other-locations" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Nearby support and other locations</a></li><li><a href="#local-insight-for-sylhet-applicants" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Local insight for Sylhet applicants</a></li><li><a href="#a-realistic-6-month-plan-for-sylhet-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">A realistic 6-month plan for Sylhet students</a></li><li><a href="#how-we-work-with-you" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How we work with you</a></li></ol>
          </nav>

          <article>
<section id="counseling-for-sylhet-families" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Counseling for Sylhet families</h2>
<p className="mt-4 leading-7 text-slate-700">Sylhet students and families, including those with relatives in Europe, can use Eammu Holidays through online counseling and courier handling. We do not claim a physical office in Sylhet.</p><p className="mt-4 leading-7 text-slate-700">Many Sylhet families have overseas connections, so they ask about visiting rules, jobs and family reunification. We begin with <Link href="/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Hungary</Link>, <Link href="/study/hungary/scholarships-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships</Link> and <Link href="/study/hungary/how-to-apply-to-hungarian-universities" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the application guide</Link>.</p>
</section>
<section id="logistics-and-travel" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Logistics and travel</h2>
<p className="mt-4 leading-7 text-slate-700">Because Hungarian rules do not allow family-reunification permits for student permit holders, we explain this early.</p><p className="mt-4 leading-7 text-slate-700">Documents move by courier, and the Dhaka trip is generally limited to the visa appointment. See <Link href="/study/hungary/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">processing time and cost</Link> for timelines and ticket budgets.</p>
</section>
<section id="what-sylhet-students-should-prepare" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What Sylhet students should prepare</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">Why it matters</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">SSC, HSC, diploma or degree results</td><td className="px-3 py-2 align-top">Defines your level, see <Link href="/study/hungary/admission-requirements-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Passport</td><td className="px-3 py-2 align-top">Needed for scholarship and visa; check validity</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">English test or MOI letter</td><td className="px-3 py-2 align-top">See <Link href="/study/hungary/study-in-hungary-without-ielts" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study without IELTS</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Budget and sponsor details</td><td className="px-3 py-2 align-top">See <Link href="/study/hungary/bank-solvency-requirements-for-hungary-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Motivation letter and CV</td><td className="px-3 py-2 align-top">See <Link href="/study/hungary/sop-and-motivation-letter-for-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">SOP guide</Link></td></tr></tbody></table></div>
</section>
<section id="typical-sylhet-student-questions" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Typical Sylhet student questions</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>How much money must I show? See <Link href="/study/hungary/bank-solvency-requirements-for-hungary-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link>.</li><li>Is my degree recognised? See <Link href="/study/hungary/degree-recognition-and-eligibility-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">degree recognition</Link>.</li><li>When should I apply? See <Link href="/study/hungary/hungary-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Hungary intake dates</Link>.</li><li>Can I work? See <Link href="/study/hungary/part-time-job-and-post-study-work-rules-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">work rules</Link>.</li><li>Can my family join me? See <Link href="/study/hungary/bring-family-to-hungary-as-a-student" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">family guide</Link>.</li></ul>
</section>
<section id="nearby-support-and-other-locations" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Nearby support and other locations</h2>
<p className="mt-4 leading-7 text-slate-700">Students nearby can also read the guides for <Link href="/study/hungary/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Dhaka</Link>, <Link href="/study/hungary/consultancy-in-cumilla" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cumilla</Link>, <Link href="/study/hungary/consultancy-in-mymensingh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mymensingh</Link>, or view all options on the <Link href="/study/hungary/bangladesh-offices" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bangladesh offices page</Link>. For the full country roadmap, read <Link href="/study/hungary/study-in-hungary-from-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">studying in Hungary from Bangladesh</Link>.</p>
</section>
<section id="local-insight-for-sylhet-applicants" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Local insight for Sylhet applicants</h2>
<p className="mt-4 leading-7 text-slate-700">Many Sylhet families have strong links with the UK and other European countries and want to compare Hungary with those options. Hungary&apos;s lower cost and scholarship routes are attractive, but the language and job market are different.</p><p className="mt-4 leading-7 text-slate-700">Share your expectations about family visits and long-term plans so we can advise realistically.</p>
</section>
<section id="a-realistic-6-month-plan-for-sylhet-students" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">A realistic 6-month plan for Sylhet students</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Month</th><th scope="col" className="px-3 py-2 text-left font-bold">Action</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">1</td><td className="px-3 py-2 align-top">Free profile review; shortlist programmes and funding routes</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">2</td><td className="px-3 py-2 align-top">Gather and attest academic documents; take or schedule English test</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">3</td><td className="px-3 py-2 align-top">Write motivation letter; submit scholarship or university applications</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">4</td><td className="px-3 py-2 align-top">Interviews, exams and offers; compare total costs</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">5</td><td className="px-3 py-2 align-top">Accept offer; prepare funds, insurance and accommodation proof</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">6</td><td className="px-3 py-2 align-top">Visa appointment in Dhaka; travel planning</td></tr></tbody></table></div><p className="mt-4 leading-7 text-slate-700">Use the <Link href="/study/hungary/hungary-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake dates guide</Link> and <Link href="/study/hungary/hungary-student-documents-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">documents checklist</Link> to match this plan to the September cycle.</p>
</section>
<section id="how-we-work-with-you" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How we work with you</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Honest assessment of your chances and alternatives.</li><li>Clear written explanation of any paid service before you commit.</li><li>No pressure to choose a specific university.</li><li>No promises of guaranteed admission, scholarship or visa.</li></ul>
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
