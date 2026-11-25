import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/post-study-work-and-job-hunting-visa-in-japan';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Post-Study Work and Job Hunting Visa in Japan 2026",
  "description": "Post-study work options in Japan in 2026: job-hunting Designated Activities visa, work visas, Japanese language needs and tips for Bangladeshi graduates.",
  "keywords": [
    "post study work Japan",
    "Japan job hunting visa",
    "work visa Japan after study",
    "Japan graduate jobs Bangladesh"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/post-study-work-and-job-hunting-visa-in-japan"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Post-Study Work and Job Hunting Visa in Japan 2026",
    "description": "Post-study work options in Japan in 2026: job-hunting Designated Activities visa, work visas, Japanese language needs and tips for Bangladeshi graduates.",
    "url": "https://eammu.com/study/japan/post-study-work-and-job-hunting-visa-in-japan",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Post-Study Work and Job Hunting Visa in Japan 2026",
    "description": "Post-study work options in Japan in 2026: job-hunting Designated Activities visa, work visas, Japanese language needs and tips for Bangladeshi graduates."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "Post-Study Work & Job Hunting", "href": "/study/japan/post-study-work-and-job-hunting-visa-in-japan"}];
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
    "href": "/study/japan/part-time-job-rules-for-students-in-japan",
    "title": "Part-Time Job Rules for International Students in Japan: 28 Hours, Permits and Pay",
    "description": "Part-time work rules for international students in Japan in 2026: 28 hours a week, 40 hours in holidays, permission to engage in other activity and penalties."
  },
  {
    "href": "/study/japan/cse-and-it-courses-in-japan",
    "title": "CSE and IT Courses in Japan for Bangladeshi Students",
    "description": "CSE and IT courses in Japan for Bangladeshi students in 2026: computer science, AI and engineering programmes, English tracks, fees and careers."
  },
  {
    "href": "/study/japan/masters-and-phd-in-japan-for-bangladeshi-students",
    "title": "Master's and PhD in Japan for Bangladeshi Students",
    "description": "Master's and PhD study in Japan for Bangladeshi students in 2026: research student route, supervisors, MEXT funding, fees and application steps."
  },
  {
    "href": "/study/japan/bring-family-to-japan-as-a-student",
    "title": "Can You Bring Family to Japan as an International Student? Dependent Visa Guide",
    "description": "Can Bangladeshi students bring spouse or children to Japan in 2026? Dependent visa basics, documents, work permission and financial requirements."
  }
];
const FAQS = [
  {
    "q": "Can I stay in Japan after graduating?",
    "a": "Yes, through job hunting status or a work visa if you find a sponsor."
  },
  {
    "q": "How long is the job-hunting visa?",
    "a": "Up to one year in total, renewed in six-month steps according to university guidance."
  },
  {
    "q": "Do I need Japanese to get a job?",
    "a": "Usually yes, often N2 or higher."
  },
  {
    "q": "Which fields are in demand?",
    "a": "IT, engineering, nursing care and other shortage areas, depending on year."
  },
  {
    "q": "Can language school graduates work?",
    "a": "They must continue study or qualify for a work status."
  },
  {
    "q": "Is permanent residence possible?",
    "a": "Possibly after many years of qualifying residence; rules are strict."
  },
  {
    "q": "Do employers sponsor visas?",
    "a": "Yes, employers typically support work visa applications."
  },
  {
    "q": "Where can I get help?",
    "a": "Your school's career centre and immigration offices."
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
          "name": "Post-Study Work & Job Hunting",
          "item": "https://eammu.com/study/japan/post-study-work-and-job-hunting-visa-in-japan"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Post-Study Work and Job-Hunting Visa in Japan for Bangladeshi Graduates (2026)",
      "description": "Post-study work options in Japan in 2026: job-hunting Designated Activities visa, work visas, Japanese language needs and tips for Bangladeshi graduates.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/post-study-work-and-job-hunting-visa-in-japan",
      "keywords": "post study work Japan, Japan job hunting visa, work visa Japan after study, Japan graduate jobs Bangladesh",
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
          "name": "Can I stay in Japan after graduating?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, through job hunting status or a work visa if you find a sponsor."
          }
        },
        {
          "@type": "Question",
          "name": "How long is the job-hunting visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Up to one year in total, renewed in six-month steps according to university guidance."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need Japanese to get a job?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually yes, often N2 or higher."
          }
        },
        {
          "@type": "Question",
          "name": "Which fields are in demand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IT, engineering, nursing care and other shortage areas, depending on year."
          }
        },
        {
          "@type": "Question",
          "name": "Can language school graduates work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They must continue study or qualify for a work status."
          }
        },
        {
          "@type": "Question",
          "name": "Is permanent residence possible?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possibly after many years of qualifying residence; rules are strict."
          }
        },
        {
          "@type": "Question",
          "name": "Do employers sponsor visas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, employers typically support work visa applications."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I get help?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your school's career centre and immigration offices."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Post-Study Work and Job-Hunting Visa in Japan for Bangladeshi Graduates (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Japan allows graduates to stay and look for jobs, but employers expect strong Japanese in most roles.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Graduates who have not found a job can apply for a &quot;Designated Activities&quot; status to continue job hunting for up to one year, renewed in six-month steps according to university guidance.</li><li>Employment visas include categories such as Engineer or Specialist in Humanities and International Services.</li><li>Japanese ability and field of study strongly affect job prospects.</li><li>Rules change, so confirm with immigration before planning.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#job-hunting-status" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Job-hunting status</a></li><li><a href="#work-visas" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Work visas</a></li><li><a href="#how-to-improve-job-prospects" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to improve job prospects</a></li><li><a href="#realistic-expectations" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Realistic expectations</a></li><li><a href="#related-guides" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Related guides</a></li><li><a href="#job-hunting-timeline" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Job-hunting timeline</a></li><li><a href="#tips-from-past-international-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Tips from past international students</a></li></ol>
          </nav>

          <article>
<section id="job-hunting-status" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Job-hunting status</h2>
<p className="mt-4 leading-7 text-slate-700">University guidance explains that students unable to find a job before graduating may continue job hunting for a maximum of one year with the &quot;Designated Activities&quot; residence status, with permission renewed at six-month intervals. Conditions include being enrolled up to graduation and continuing active job hunting. Ask your school&apos;s career office for the current procedure.</p>
</section>
<section id="work-visas" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Work visas</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Category</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical roles</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Engineer / Specialist in Humanities / International Services</td><td className="px-3 py-2 align-top">IT, engineering, business, translation and similar roles</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Highly Skilled Professional</td><td className="px-3 py-2 align-top">Points-based status for qualified professionals</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Specified Skilled Worker</td><td className="px-3 py-2 align-top">Defined sectors with skills and language tests</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Other categories</td><td className="px-3 py-2 align-top">Depending on profession and employer sponsorship</td></tr></tbody></table></div><p className="mt-4 leading-7 text-slate-700">Employers usually sponsor the visa. Your degree, field and job duties must match visa requirements.</p>
</section>
<section id="how-to-improve-job-prospects" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to improve job prospects</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Reach at least N2 Japanese, ideally higher.</li><li>Join internships and career events during study.</li><li>Learn job-hunting etiquette and timelines.</li><li>Build technical or business skills in demand.</li><li>Use university career offices.</li></ul>
</section>
<section id="realistic-expectations" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Realistic expectations</h2>
<p className="mt-4 leading-7 text-slate-700">Competition for jobs can be high and timelines are structured around graduate hiring seasons. English-only roles exist but are fewer. Plan finances for the job-hunting period, see <Link href="/study/japan/cost-of-living-in-japan-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living</Link>.</p>
</section>
<section id="related-guides" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Related guides</h2>
<p className="mt-4 leading-7 text-slate-700">Read <Link href="/study/japan/part-time-job-rules-for-students-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">part-time rules</Link>, <Link href="/study/japan/cse-and-it-courses-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT</Link> and <Link href="/study/japan/masters-and-phd-in-japan-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">master&apos;s and PhD</Link>.</p>
</section>
<section id="job-hunting-timeline" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Job-hunting timeline</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Stage</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical timing</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Career preparation</td><td className="px-3 py-2 align-top">From the second or third year</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Internships</td><td className="px-3 py-2 align-top">Summer and winter breaks</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Applications and interviews</td><td className="px-3 py-2 align-top">Several months before graduation</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Job-hunting status if needed</td><td className="px-3 py-2 align-top">After graduation, up to the allowed period</td></tr></tbody></table></div>
</section>
<section id="tips-from-past-international-students" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Tips from past international students</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Start early and attend university career events.</li><li>Practise Japanese business manners.</li><li>Prepare a clear career story.</li><li>Use alumni networks.</li></ul>
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
