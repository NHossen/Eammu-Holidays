import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/bring-family-to-hungary-as-a-student';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Bring Family to Hungary as a Student 2026 | Eammu",
  "description": "Can Bangladeshi students bring spouse or children to Hungary in 2026? Official rule on family reunification for student permit holders and alternatives.",
  "keywords": [
    "bring family Hungary student",
    "spouse visa Hungary student",
    "dependent Hungary student permit"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/bring-family-to-hungary-as-a-student"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Bring Family to Hungary as a Student 2026 | Eammu",
    "description": "Can Bangladeshi students bring spouse or children to Hungary in 2026? Official rule on family reunification for student permit holders and alternatives.",
    "url": "https://eammu.com/study/hungary/bring-family-to-hungary-as-a-student",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Bring Family to Hungary as a Student 2026 | Eammu",
    "description": "Can Bangladeshi students bring spouse or children to Hungary in 2026? Official rule on family reunification for student permit holders and alternatives."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Family & Dependents", "href": "/study/hungary/bring-family-to-hungary-as-a-student"}];
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
    "href": "/study/hungary/part-time-job-and-post-study-work-rules-in-hungary",
    "title": "Part-Time Job and Post-Study Work Rules in Hungary for International Students",
    "description": "Work rules for international students in Hungary in 2026: 30 hours a week in term, full-time up to 90 days outside term, and post-study job-seeking permit."
  },
  {
    "href": "/study/hungary/hungary-vs-finland-vs-germany-for-bangladeshi-students",
    "title": "Hungary vs Finland vs Germany for Bangladeshi Students",
    "description": "Compare Hungary, Finland and Germany for Bangladeshi students in 2026: tuition, living costs, scholarships, work rules and visa difficulty."
  },
  {
    "href": "/study/hungary/masters-and-phd-in-hungary-for-bangladeshi-students",
    "title": "Master's and PhD in Hungary for Bangladeshi Students",
    "description": "Master's and PhD study in Hungary for Bangladeshi students in 2026: entry requirements, funding, supervisors, fees and scholarships."
  }
];
const FAQS = [
  {
    "q": "Can I bring my wife to Hungary on a student visa?",
    "a": "Not through a family-reunification permit while you hold a study permit. Check current rules."
  },
  {
    "q": "Can my children join me?",
    "a": "Generally no, apart from a child born in Hungary during your permit."
  },
  {
    "q": "Can my spouse visit me?",
    "a": "Yes, with a valid short-stay visa."
  },
  {
    "q": "Can my spouse work in Hungary?",
    "a": "Only with their own valid permit."
  },
  {
    "q": "Is there any exception?",
    "a": "Official guidance lists an exception for a child born in Hungary during the permit validity."
  },
  {
    "q": "Will this rule change?",
    "a": "Rules can change, so confirm with the authority."
  },
  {
    "q": "Can I bring my child after the first year?",
    "a": "The same student-permit rule applies; check current law."
  },
  {
    "q": "Are there exceptions for PhD students?",
    "a": "Official guidance in this area covers student permits generally; confirm your exact permit type."
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
          "name": "Family & Dependents",
          "item": "https://eammu.com/study/hungary/bring-family-to-hungary-as-a-student"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Can You Bring Family to Hungary as an International Student? (2026)",
      "description": "Can Bangladeshi students bring spouse or children to Hungary in 2026? Official rule on family reunification for student permit holders and alternatives.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/bring-family-to-hungary-as-a-student",
      "keywords": "bring family Hungary student, spouse visa Hungary student, dependent Hungary student permit",
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
          "name": "Can I bring my wife to Hungary on a student visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not through a family-reunification permit while you hold a study permit. Check current rules."
          }
        },
        {
          "@type": "Question",
          "name": "Can my children join me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally no, apart from a child born in Hungary during your permit."
          }
        },
        {
          "@type": "Question",
          "name": "Can my spouse visit me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, with a valid short-stay visa."
          }
        },
        {
          "@type": "Question",
          "name": "Can my spouse work in Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only with their own valid permit."
          }
        },
        {
          "@type": "Question",
          "name": "Is there any exception?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Official guidance lists an exception for a child born in Hungary during the permit validity."
          }
        },
        {
          "@type": "Question",
          "name": "Will this rule change?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rules can change, so confirm with the authority."
          }
        },
        {
          "@type": "Question",
          "name": "Can I bring my child after the first year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The same student-permit rule applies; check current law."
          }
        },
        {
          "@type": "Question",
          "name": "Are there exceptions for PhD students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Official guidance in this area covers student permits generally; confirm your exact permit type."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Can You Bring Family to Hungary as an International Student? (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Hungarian rules do not allow family-reunification permits for family of student permit holders.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>A third-country national holding or applying for a study residence permit cannot get a residence permit for family reunification.</li><li>An exception covers a child born in Hungary during the permit validity.</li><li>Family may visit on short-stay visas, subject to their own approval.</li><li>Do not plan a move that depends on dependents joining you.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#the-rule" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">The rule</a></li><li><a href="#what-this-means-in-practice" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What this means in practice</a></li><li><a href="#alternatives" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Alternatives</a></li><li><a href="#planning-tips" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Planning tips</a></li><li><a href="#visiting-family-options" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Visiting family options</a></li><li><a href="#discussing-the-decision-at-home" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Discussing the decision at home</a></li><li><a href="#questions-to-ask-the-authorities-before-you-decide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Questions to ask the authorities before you decide</a></li></ol>
          </nav>

          <article>
<section id="the-rule" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">The rule</h2>
<p className="mt-4 leading-7 text-slate-700">According to official Hungarian and EU immigration guidance, third-country nationals holding or applying for a residence permit for studies cannot be granted a family-reunification residence permit for their family members. Always check the current rule with the immigration authority.</p>
</section>
<section id="what-this-means-in-practice" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What this means in practice</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Spouses and children generally cannot join you on a dependent permit.</li><li>They may visit for short stays with their own visa.</li><li>Plan finances and living arrangements for you alone.</li><li>Think carefully before accepting a place if your family cannot be separated.</li></ul>
</section>
<section id="alternatives" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Alternatives</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Family visits on short-stay visas.</li><li>Separate visa routes based on the family member&apos;s own eligibility, such as work.</li><li>Reuniting after graduation under a different permit type when eligible.</li></ul><p className="mt-4 leading-7 text-slate-700">See <Link href="/study/hungary/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa requirements</Link> and <Link href="/study/hungary/part-time-job-and-post-study-work-rules-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">post-study options</Link>.</p>
</section>
<section id="planning-tips" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Planning tips</h2>
<p className="mt-4 leading-7 text-slate-700">Discuss timing with your family and budget for visits. Compare destinations in <Link href="/study/hungary/hungary-vs-finland-vs-germany-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Hungary vs Finland vs Germany</Link> if family reunification is a priority.</p>
</section>
<section id="visiting-family-options" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Visiting family options</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Family members apply for their own short-stay visa.</li><li>Provide invitation, accommodation and funds proof.</li><li>Plan visits during holidays.</li><li>Check their passport validity.</li></ul>
</section>
<section id="discussing-the-decision-at-home" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Discussing the decision at home</h2>
<p className="mt-4 leading-7 text-slate-700">Because family cannot join, discuss the length of separation and support plans. For some families another destination with different dependent rules may be more suitable.</p>
</section>
<section id="questions-to-ask-the-authorities-before-you-decide" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Questions to ask the authorities before you decide</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Does my exact permit type fall under the family-reunification restriction?</li><li>Are there any exceptions that apply to my situation?</li><li>Can my spouse apply for an independent work permit?</li><li>What short-stay visa rules apply to my family&apos;s visits?</li></ul><p className="mt-4 leading-7 text-slate-700">Ask the immigration authority or the official consular channel in writing and keep the reply with your records.</p>
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
