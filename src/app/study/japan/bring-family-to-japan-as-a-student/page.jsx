import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/bring-family-to-japan-as-a-student';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Bring Family to Japan as a Student 2026 | Eammu",
  "description": "Can Bangladeshi students bring spouse or children to Japan in 2026? Dependent visa basics, documents, work permission and financial requirements.",
  "keywords": [
    "bring family Japan student",
    "dependent visa Japan",
    "spouse visa Japan student",
    "family Japan MEXT"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/bring-family-to-japan-as-a-student"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Bring Family to Japan as a Student 2026 | Eammu",
    "description": "Can Bangladeshi students bring spouse or children to Japan in 2026? Dependent visa basics, documents, work permission and financial requirements.",
    "url": "https://eammu.com/study/japan/bring-family-to-japan-as-a-student",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Bring Family to Japan as a Student 2026 | Eammu",
    "description": "Can Bangladeshi students bring spouse or children to Japan in 2026? Dependent visa basics, documents, work permission and financial requirements."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "Family & Dependents", "href": "/study/japan/bring-family-to-japan-as-a-student"}];
const NAV = [
  {
    "label": "Japan Hub",
    "pages": [
      {
        "href": "/study/japan",
        "label": "Study in Japan Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/japan/study-in-japan-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/japan/study-in-japan-in-english-without-japanese",
        "label": "English & Without Japanese"
      },
      {
        "href": "/study/japan/tuition-fees-in-japan-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/japan/cost-of-living-in-japan-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/japan/affordable-universities-in-japan",
        "label": "Affordable Universities"
      },
      {
        "href": "/study/japan/top-universities-in-japan",
        "label": "Top Universities"
      },
      {
        "href": "/study/japan/national-vs-private-universities-in-japan",
        "label": "National vs Private Universities"
      },
      {
        "href": "/study/japan/admission-requirements-in-japan-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/japan/study-gap-and-japan-student-visa",
        "label": "Study Gap & Japan Visa"
      },
      {
        "href": "/study/japan/study-in-japan-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/japan/study-in-japan-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/japan/japan-intake-dates",
        "label": "Intake Dates"
      },
      {
        "href": "/study/japan/japan-vs-south-korea-vs-germany-for-bangladeshi-students",
        "label": "Japan vs South Korea vs Germany"
      }
    ]
  },
  {
    "label": "Scholarships & Funding",
    "pages": [
      {
        "href": "/study/japan/scholarships-in-japan-for-bangladeshi-students",
        "label": "Scholarships Overview"
      },
      {
        "href": "/study/japan/mext-scholarship-guide-for-bangladeshi-students",
        "label": "MEXT Scholarship Guide"
      },
      {
        "href": "/study/japan/mext-eligibility-and-deadlines",
        "label": "MEXT Eligibility & Deadlines"
      },
      {
        "href": "/study/japan/mext-embassy-vs-university-recommendation",
        "label": "Embassy vs University Recommendation"
      },
      {
        "href": "/study/japan/jasso-and-university-scholarships-in-japan",
        "label": "JASSO & University Scholarships"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/japan/how-to-apply-to-japanese-universities",
        "label": "How to Apply (Step by Step)"
      },
      {
        "href": "/study/japan/degree-recognition-and-eligibility-in-japan",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/japan/bachelors-in-japan-for-bangladeshi-students",
        "label": "Bachelor's Degrees"
      },
      {
        "href": "/study/japan/masters-and-phd-in-japan-for-bangladeshi-students",
        "label": "Master's & PhD"
      },
      {
        "href": "/study/japan/english-taught-programs-in-japan",
        "label": "English-Taught Programmes"
      },
      {
        "href": "/study/japan/japanese-language-schools-in-japan",
        "label": "Japanese Language Schools"
      },
      {
        "href": "/study/japan/japanese-language-requirements-for-bangladeshi-students",
        "label": "Japanese Language Requirements"
      },
      {
        "href": "/study/japan/cse-and-it-courses-in-japan",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/japan/engineering-courses-in-japan",
        "label": "Engineering Courses"
      },
      {
        "href": "/study/japan/mba-and-business-degrees-in-japan",
        "label": "MBA & Business"
      },
      {
        "href": "/study/japan/kosen-and-vocational-colleges-in-japan",
        "label": "KOSEN & Vocational Colleges"
      },
      {
        "href": "/study/japan/sop-and-study-plan-for-japan",
        "label": "SOP & Study Plan"
      },
      {
        "href": "/study/japan/eju-exam-for-japanese-universities",
        "label": "EJU Exam"
      }
    ]
  },
  {
    "label": "Cities & Student Life",
    "pages": [
      {
        "href": "/study/japan/student-accommodation-in-japan",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/japan/study-in-tokyo",
        "label": "Study in Tokyo"
      },
      {
        "href": "/study/japan/study-in-osaka-and-kyoto",
        "label": "Osaka & Kyoto"
      },
      {
        "href": "/study/japan/study-in-fukuoka-and-other-cities",
        "label": "Fukuoka & Other Cities"
      },
      {
        "href": "/study/japan/health-insurance-for-students-in-japan",
        "label": "Health Insurance"
      },
      {
        "href": "/study/japan/halal-food-and-bangladeshi-community-in-japan",
        "label": "Halal Food & Community"
      },
      {
        "href": "/study/japan/life-in-japan-for-international-students",
        "label": "Life in Japan"
      },
      {
        "href": "/study/japan/japan-bank-account-phone-and-residence-card",
        "label": "Bank, Phone & Residence Card"
      }
    ]
  },
  {
    "label": "Visa, COE & Work Rules",
    "pages": [
      {
        "href": "/study/japan/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/japan/certificate-of-eligibility-coe-guide",
        "label": "COE Guide"
      },
      {
        "href": "/study/japan/japan-student-visa-application-guide-dhaka",
        "label": "Dhaka Visa Application Guide"
      },
      {
        "href": "/study/japan/japan-student-documents-checklist",
        "label": "Documents Checklist"
      },
      {
        "href": "/study/japan/financial-proof-requirements-for-japan-student-visa",
        "label": "Financial Proof"
      },
      {
        "href": "/study/japan/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/japan/japan-student-visa-refusal-reasons",
        "label": "Visa Refusal Reasons"
      },
      {
        "href": "/study/japan/part-time-job-rules-for-students-in-japan",
        "label": "Part-Time Job Rules"
      },
      {
        "href": "/study/japan/post-study-work-and-job-hunting-visa-in-japan",
        "label": "Post-Study Work & Job Hunting"
      },
      {
        "href": "/study/japan/bring-family-to-japan-as-a-student",
        "label": "Family & Dependents"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/japan/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/japan/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/japan/student-visa-requirements-bangladesh",
    "title": "Japan Student Visa Requirements for Bangladeshis: COE, Funds and Documents",
    "description": "Japan student visa requirements for Bangladeshi students in 2026: Certificate of Eligibility, admission, financial proof, language and Embassy documents."
  },
  {
    "href": "/study/japan/part-time-job-rules-for-students-in-japan",
    "title": "Part-Time Job Rules for International Students in Japan: 28 Hours, Permits and Pay",
    "description": "Part-time work rules for international students in Japan in 2026: 28 hours a week, 40 hours in holidays, permission to engage in other activity and penalties."
  },
  {
    "href": "/study/japan/financial-proof-requirements-for-japan-student-visa",
    "title": "Financial Proof and Sponsor Rules for a Japan Student Visa",
    "description": "Financial proof for a Japan student visa in 2026: how Bangladeshi students should show funds, sponsor documents, planning estimates and common mistakes."
  },
  {
    "href": "/study/japan/masters-and-phd-in-japan-for-bangladeshi-students",
    "title": "Master's and PhD in Japan for Bangladeshi Students",
    "description": "Master's and PhD study in Japan for Bangladeshi students in 2026: research student route, supervisors, MEXT funding, fees and application steps."
  }
];
const FAQS = [
  {
    "q": "Can I bring my wife to Japan on a student visa?",
    "a": "Possibly through a Dependent status with a COE, subject to financial and document requirements."
  },
  {
    "q": "Can my children join me?",
    "a": "Possibly under the same status."
  },
  {
    "q": "Can my spouse work?",
    "a": "Yes, with permission for part-time work."
  },
  {
    "q": "Do MEXT scholars bring family?",
    "a": "Rules depend on the scholarship; read the guidelines."
  },
  {
    "q": "What documents are needed?",
    "a": "Marriage certificate, COE, passports and financial proof."
  },
  {
    "q": "Is it expensive?",
    "a": "Yes, family life in Japan is costly."
  },
  {
    "q": "Can family visit on a short-stay visa?",
    "a": "Yes, with their own visa approvals."
  },
  {
    "q": "Will rules change?",
    "a": "They can, so confirm with the Embassy."
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
          "name": "Japan",
          "item": "https://eammu.com/study/japan"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Family & Dependents",
          "item": "https://eammu.com/study/japan/bring-family-to-japan-as-a-student"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Can You Bring Family to Japan as an International Student? Dependent Visa Guide (2026)",
      "description": "Can Bangladeshi students bring spouse or children to Japan in 2026? Dependent visa basics, documents, work permission and financial requirements.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/bring-family-to-japan-as-a-student",
      "keywords": "bring family Japan student, dependent visa Japan, spouse visa Japan student, family Japan MEXT",
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
          "name": "Can I bring my wife to Japan on a student visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possibly through a Dependent status with a COE, subject to financial and document requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Can my children join me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possibly under the same status."
          }
        },
        {
          "@type": "Question",
          "name": "Can my spouse work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, with permission for part-time work."
          }
        },
        {
          "@type": "Question",
          "name": "Do MEXT scholars bring family?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rules depend on the scholarship; read the guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are needed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Marriage certificate, COE, passports and financial proof."
          }
        },
        {
          "@type": "Question",
          "name": "Is it expensive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, family life in Japan is costly."
          }
        },
        {
          "@type": "Question",
          "name": "Can family visit on a short-stay visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, with their own visa approvals."
          }
        },
        {
          "@type": "Question",
          "name": "Will rules change?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They can, so confirm with the Embassy."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Japan 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Can You Bring Family to Japan as an International Student? Dependent Visa Guide (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Japan has a Dependent status for family of students, but financial and document requirements are strict.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} counseling team &middot; Updated <time dateTime="2026-11-22">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Japan guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 64 Japan guides</summary>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Spouses and children may apply for a Dependent status, usually with a COE.</li><li>The Embassy list for Dependent applications includes marriage certificate and the COE.</li><li>Dependents need permission to work part-time.</li><li>Financial capacity of the student is examined carefully.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#the-rule-in-brief" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">The rule in brief</a></li><li><a href="#documents-commonly-needed" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Documents commonly needed</a></li><li><a href="#work-and-costs" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Work and costs</a></li><li><a href="#planning-tips" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Planning tips</a></li><li><a href="#questions-to-ask-the-embassy-or-school" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Questions to ask the Embassy or school</a></li><li><a href="#visiting-family" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Visiting family</a></li></ol>
          </nav>

          <article>
<section id="the-rule-in-brief" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">The rule in brief</h2>
<p className="mt-4 leading-7 text-slate-700">The Embassy of Japan in Bangladesh lists documents for Dependent (long-term residence) applications, including the application form, passport, photographs, eligibility certificate, marriage certificate and school certificates. The family member generally applies after a COE is issued for the dependent. Eligibility and finances depend on the student&apos;s status and income.</p>
</section>
<section id="documents-commonly-needed" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Documents commonly needed</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Marriage certificate with translations.</li><li>Birth certificates for children.</li><li>COE for the dependent.</li><li>Financial proof showing the student can support the family.</li><li>Student&apos;s residence documents.</li></ul>
</section>
<section id="work-and-costs" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Work and costs</h2>
<p className="mt-4 leading-7 text-slate-700">Spouses of international students must also receive permission to work part-time. Family costs are significant: housing, insurance and daily expenses all rise. Plan with <Link href="/study/japan/cost-of-living-in-japan-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living</Link> and <Link href="/study/japan/financial-proof-requirements-for-japan-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">financial proof</Link>.</p>
</section>
<section id="planning-tips" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Planning tips</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Arrive first, settle in and then bring family if possible.</li><li>Check whether your scholarship supports dependents.</li><li>Budget for larger housing.</li><li>Discuss childcare and school options.</li></ul><p className="mt-4 leading-7 text-slate-700">For other destinations compare <Link href="/study/hungary/bring-family-to-hungary-as-a-student" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Hungary family rules</Link> and <Link href="/study/serbia/bring-family-to-serbia-as-a-student" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Serbia family rules</Link>.</p>
</section>
<section id="questions-to-ask-the-embassy-or-school" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Questions to ask the Embassy or school</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Does my status allow Dependent applications?</li><li>What financial proof is required for family?</li><li>How soon after arrival can they apply?</li><li>Can my spouse work and how many hours?</li></ul><p className="mt-4 leading-7 text-slate-700">Ask in writing and keep replies.</p>
</section>
<section id="visiting-family" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Visiting family</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Family members apply for their own short-stay visas.</li><li>Provide invitation, accommodation and funds proof.</li><li>Plan visits during holidays.</li><li>Check passport validity.</li></ul>
</section>
          </article>

          <section className="mt-12" aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="text-xl font-bold text-emerald-900">Official sources to verify before you pay or apply</h2>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-6 text-slate-700"><li><a href="https://www.studyinjapan.go.jp/en/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Study in Japan – official portal (JASSO)</a></li><li><a href="https://www.bd.emb-japan.go.jp/en/visa/visainfohowto.html" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Embassy of Japan in Bangladesh – visa information</a></li><li><a href="https://www.moj.go.jp/isa/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Immigration Services Agency of Japan</a></li><li><a href="https://visa.vfsglobal.com/bgd/en/jpn" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">VFS Global – Japan visa application centre, Dhaka</a></li><li><a href="https://www.bd.emb-japan.go.jp/itpr_en/scholarshipnotice.html" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Embassy of Japan in Bangladesh – scholarships (MEXT)</a></li></ul>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Japan Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Japan</h2>
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
