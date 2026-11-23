import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/serbia/public-vs-private-universities-in-serbia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Public vs Private Universities in Serbia 2026 | Eammu",
  "description": "Public and private universities in Serbia explained for Bangladeshi students: fees, accreditation, recognition and residence permit considerations.",
  "keywords": [
    "public vs private universities Serbia",
    "accredited university Serbia",
    "Serbia university types"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/serbia/public-vs-private-universities-in-serbia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Public vs Private Universities in Serbia 2026 | Eammu",
    "description": "Public and private universities in Serbia explained for Bangladeshi students: fees, accreditation, recognition and residence permit considerations.",
    "url": "https://eammu.com/study/serbia/public-vs-private-universities-in-serbia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Public vs Private Universities in Serbia 2026 | Eammu",
    "description": "Public and private universities in Serbia explained for Bangladeshi students: fees, accreditation, recognition and residence permit considerations."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Serbia", "href": "/study/serbia"}, {"name": "Public vs Private Universities", "href": "/study/serbia/public-vs-private-universities-in-serbia"}];
const NAV = [
  {
    "label": "Serbia Hub",
    "pages": [
      {
        "href": "/study/serbia",
        "label": "Study in Serbia Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/serbia/study-in-serbia-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/serbia/study-in-serbia-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/serbia/tuition-fees-in-serbia-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/serbia/cost-of-living-in-serbia-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/serbia/cheapest-universities-in-serbia",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/serbia/top-universities-in-serbia",
        "label": "Top Universities"
      },
      {
        "href": "/study/serbia/public-vs-private-universities-in-serbia",
        "label": "Public vs Private Universities"
      },
      {
        "href": "/study/serbia/admission-requirements-in-serbia-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/serbia/study-gap-accepted-universities-in-serbia",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/serbia/study-in-serbia-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/serbia/study-in-serbia-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/serbia/serbia-intake-dates",
        "label": "Intake Dates"
      },
      {
        "href": "/study/serbia/serbia-vs-hungary-vs-poland-for-bangladeshi-students",
        "label": "Serbia vs Hungary vs Poland"
      }
    ]
  },
  {
    "label": "Scholarships & Funding",
    "pages": [
      {
        "href": "/study/serbia/scholarships-in-serbia-for-bangladeshi-students",
        "label": "Scholarships Overview"
      },
      {
        "href": "/study/serbia/world-in-serbia-scholarship-guide",
        "label": "World in Serbia Guide"
      },
      {
        "href": "/study/serbia/world-in-serbia-eligibility-and-deadlines",
        "label": "World in Serbia Eligibility & Deadlines"
      },
      {
        "href": "/study/serbia/university-scholarships-and-fee-waivers-in-serbia",
        "label": "University Scholarships & Fee Waivers"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/serbia/how-to-apply-to-serbian-universities",
        "label": "How to Apply (Step by Step)"
      },
      {
        "href": "/study/serbia/degree-recognition-and-eligibility-in-serbia",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/serbia/entrance-exams-in-serbia",
        "label": "Entrance Exams in Serbia"
      },
      {
        "href": "/study/serbia/bachelors-in-serbia-for-bangladeshi-students",
        "label": "Bachelor's Degrees"
      },
      {
        "href": "/study/serbia/masters-and-phd-in-serbia-for-bangladeshi-students",
        "label": "Master's & PhD"
      },
      {
        "href": "/study/serbia/cse-and-it-courses-in-serbia",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/serbia/engineering-courses-in-serbia",
        "label": "Engineering Courses"
      },
      {
        "href": "/study/serbia/mba-and-business-degrees-in-serbia",
        "label": "MBA & Business"
      },
      {
        "href": "/study/serbia/mbbs-and-medical-degrees-in-serbia",
        "label": "Medicine, Dentistry & Pharmacy"
      },
      {
        "href": "/study/serbia/foundation-year-and-serbian-language-courses-in-serbia",
        "label": "Foundation & Serbian Language"
      },
      {
        "href": "/study/serbia/sop-and-motivation-letter-for-serbia",
        "label": "SOP & Motivation Letter"
      }
    ]
  },
  {
    "label": "Cities & Student Life",
    "pages": [
      {
        "href": "/study/serbia/student-accommodation-in-serbia",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/serbia/study-in-belgrade",
        "label": "Study in Belgrade"
      },
      {
        "href": "/study/serbia/study-in-novi-sad",
        "label": "Study in Novi Sad"
      },
      {
        "href": "/study/serbia/study-in-nis-and-kragujevac",
        "label": "Niš & Kragujevac"
      },
      {
        "href": "/study/serbia/health-insurance-for-students-in-serbia",
        "label": "Health Insurance for Students"
      },
      {
        "href": "/study/serbia/halal-food-and-bangladeshi-community-in-serbia",
        "label": "Halal Food & Bangladeshi Community"
      },
      {
        "href": "/study/serbia/life-in-serbia-for-international-students",
        "label": "Life in Serbia"
      }
    ]
  },
  {
    "label": "Visa, Permit & Work Rules",
    "pages": [
      {
        "href": "/study/serbia/student-visa-requirements-bangladesh",
        "label": "Student Visa & Permit Requirements"
      },
      {
        "href": "/study/serbia/serbia-d-visa-and-temporary-residence-application-guide",
        "label": "D-Visa Application Guide"
      },
      {
        "href": "/study/serbia/serbia-student-documents-checklist",
        "label": "Documents Checklist"
      },
      {
        "href": "/study/serbia/bank-solvency-requirements-for-serbia-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/serbia/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/serbia/serbia-student-visa-refusal-reasons",
        "label": "Visa Refusal Reasons"
      },
      {
        "href": "/study/serbia/part-time-job-and-post-study-work-rules-in-serbia",
        "label": "Work & Post-Study Rules"
      },
      {
        "href": "/study/serbia/bring-family-to-serbia-as-a-student",
        "label": "Family & Dependents"
      },
      {
        "href": "/study/serbia/serbia-police-registration-and-permit-renewal",
        "label": "Police Registration & Renewal"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/serbia/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/serbia/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/serbia/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/serbia/top-universities-in-serbia",
    "title": "Top Universities in Serbia for Bangladeshi Students",
    "description": "Top universities in Serbia for Bangladeshi students in 2026: Belgrade, Novi Sad, Niš, Kragujevac and private options with strengths and fit."
  },
  {
    "href": "/study/serbia/degree-recognition-and-eligibility-in-serbia",
    "title": "Degree Recognition and Eligibility in Serbia for Bangladeshi Students",
    "description": "Degree recognition and eligibility in Serbia for Bangladeshi students in 2026: recognition for study, apostille, attestation and returning to Bangladesh."
  },
  {
    "href": "/study/serbia/cheapest-universities-in-serbia",
    "title": "Cheapest Universities in Serbia for Bangladeshi Students",
    "description": "How to find the cheapest universities in Serbia in 2026: low-fee public faculties, regional cities, hidden costs and a checklist for Bangladeshi students."
  },
  {
    "href": "/study/serbia/serbia-student-visa-refusal-reasons",
    "title": "Serbia Student Visa Refusal Reasons and How to Avoid Them",
    "description": "Common reasons Serbia student visas and permits are refused for Bangladeshi applicants in 2026, and how to prepare a stronger file or reapply."
  }
];
const FAQS = [
  {
    "q": "Are private universities in Serbia valid?",
    "a": "Many are accredited and valid, but accreditation varies by programme. Always verify."
  },
  {
    "q": "Is a public university better?",
    "a": "Not automatically, but public universities usually offer clearer recognition and lower fees."
  },
  {
    "q": "How do I check accreditation?",
    "a": "Ask the university for its accreditation decision and check it with Serbia's official quality-assurance body."
  },
  {
    "q": "Can I get a residence permit at a private university?",
    "a": "Yes if the institution and enrolment meet immigration requirements, but confirm in writing."
  },
  {
    "q": "Are English programmes mostly private?",
    "a": "Not only; public universities also run English tracks, particularly in medicine, engineering and economics."
  },
  {
    "q": "What is an academy of applied studies?",
    "a": "A vocational higher education institution offering applied degrees. Compare level and recognition."
  },
  {
    "q": "Will my degree be recognised in Bangladesh?",
    "a": "It depends on the regulator and profession; check before enrolling."
  },
  {
    "q": "Can an unaccredited college affect my visa?",
    "a": "Yes, because the residence permit is linked to genuine, lawful enrolment."
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
          "name": "Serbia",
          "item": "https://eammu.com/study/serbia"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Public vs Private Universities",
          "item": "https://eammu.com/study/serbia/public-vs-private-universities-in-serbia"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Public vs Private Universities in Serbia: Accreditation, Fees and Visa Impact",
      "description": "Public and private universities in Serbia explained for Bangladeshi students: fees, accreditation, recognition and residence permit considerations.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/serbia/public-vs-private-universities-in-serbia",
      "keywords": "public vs private universities Serbia, accredited university Serbia, Serbia university types",
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
          "name": "Are private universities in Serbia valid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many are accredited and valid, but accreditation varies by programme. Always verify."
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
          "name": "How do I check accreditation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ask the university for its accreditation decision and check it with Serbia's official quality-assurance body."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a residence permit at a private university?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes if the institution and enrolment meet immigration requirements, but confirm in writing."
          }
        },
        {
          "@type": "Question",
          "name": "Are English programmes mostly private?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not only; public universities also run English tracks, particularly in medicine, engineering and economics."
          }
        },
        {
          "@type": "Question",
          "name": "What is an academy of applied studies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A vocational higher education institution offering applied degrees. Compare level and recognition."
          }
        },
        {
          "@type": "Question",
          "name": "Will my degree be recognised in Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the regulator and profession; check before enrolling."
          }
        },
        {
          "@type": "Question",
          "name": "Can an unaccredited college affect my visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, because the residence permit is linked to genuine, lawful enrolment."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Serbia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Public vs Private Universities in Serbia: Accreditation, Fees and Visa Impact</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Understanding Serbian institution types protects your degree, your visa and your money.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} counseling team &middot; Updated <time dateTime="2026-11-22">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Serbia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 59 Serbia guides</summary>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Study residence depends on enrolment at an accredited higher education institution.</li><li>Public universities usually cost less and are larger; private institutions can be more flexible but cost more.</li><li>Accreditation applies to both the institution and the study programme.</li><li>Do not rely on an agent&apos;s word: verify with official Serbian sources.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#types-of-institutions" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Types of institutions</a></li><li><a href="#why-accreditation-matters-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Why accreditation matters for Bangladeshi students</a></li><li><a href="#how-to-verify-an-institution" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to verify an institution</a></li><li><a href="#cost-and-quality" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cost and quality</a></li><li><a href="#due-diligence-checklist-before-paying-a-deposit" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Due-diligence checklist before paying a deposit</a></li><li><a href="#warning-signs" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Warning signs</a></li></ol>
          </nav>

          <article>
<section id="types-of-institutions" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Types of institutions</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Type</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical features</th><th scope="col" className="px-3 py-2 text-left font-bold">Check before applying</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">State university</td><td className="px-3 py-2 align-top">Large, research-focused, many faculties</td><td className="px-3 py-2 align-top">English-taught programme availability, fees, entrance exam</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Private university or faculty</td><td className="px-3 py-2 align-top">Smaller, flexible entry, English tracks</td><td className="px-3 py-2 align-top">Institutional and programme accreditation, fees</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Academy of applied studies</td><td className="px-3 py-2 align-top">Practical, vocational programmes</td><td className="px-3 py-2 align-top">Whether degree level matches your goals</td></tr></tbody></table></div>
</section>
<section id="why-accreditation-matters-for-bangladeshi-students" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Why accreditation matters for Bangladeshi students</h2>
<p className="mt-4 leading-7 text-slate-700">A Serbian residence permit for study depends on enrolment, and your degree&apos;s value in Bangladesh depends on recognition. If a programme lacks accreditation, you risk wasted fees and weak recognition. Serbia has a national body for accreditation and quality assurance; ask the institution for its accreditation decision and check it independently. See <Link href="/study/serbia/degree-recognition-and-eligibility-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">degree recognition</Link> and <Link href="/study/serbia/serbia-student-visa-refusal-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">refusal reasons</Link>.</p>
</section>
<section id="how-to-verify-an-institution" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to verify an institution</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Get the institution&apos;s full legal name and the programme name in English and Serbian.</li><li>Ask for its accreditation decision and check it on official sources.</li><li>Confirm the programme&apos;s language of instruction and tuition in writing.</li><li>Ask whether foreign students receive study residence support letters.</li><li>Talk to current international students.</li></ol>
</section>
<section id="cost-and-quality" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Cost and quality</h2>
<p className="mt-4 leading-7 text-slate-700">Private tuition can be higher than at public faculties, but higher price does not guarantee quality. Compare curriculum, teaching staff, internships and graduate outcomes, then see <Link href="/study/serbia/tuition-fees-in-serbia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees</Link> and <Link href="/study/serbia/cheapest-universities-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cheapest universities</Link>.</p>
</section>
<section id="due-diligence-checklist-before-paying-a-deposit" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Due-diligence checklist before paying a deposit</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Get the full legal name of the institution and check it independently.</li><li>Confirm the programme is accredited and offered in English.</li><li>Ask in writing whether you will qualify for study residence.</li><li>Check the refund policy for visa refusal.</li><li>Speak to current Bangladeshi students.</li><li>Pay only to the official institutional bank account.</li></ol>
</section>
<section id="warning-signs" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Warning signs</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>The institution cannot show its accreditation status.</li><li>The offer arrives without proper assessment of your documents.</li><li>The agent controls payments or your applicant account.</li><li>Fees or conditions change repeatedly.</li></ul>
</section>
          </article>

          <section className="mt-12" aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="text-xl font-bold text-emerald-900">Official sources to verify before you pay or apply</h2>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-6 text-slate-700"><li><a href="https://studyinserbia.rs/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Study in Serbia – official portal</a></li><li><a href="https://welcometoserbia.gov.rs/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Welcome to Serbia – official government portal for foreigners</a></li><li><a href="https://mfa.gov.rs/en/citizens/travel-serbia/visa-requirements" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Ministry of Foreign Affairs – visa requirements</a></li><li><a href="https://mup.gov.rs/wps/portal/en/information" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Ministry of Interior – residence information</a></li><li><a href="https://prosveta.gov.rs/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Ministry of Education – scholarships</a></li></ul>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Serbia Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Serbia</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and scholarship shortlist, visa guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
