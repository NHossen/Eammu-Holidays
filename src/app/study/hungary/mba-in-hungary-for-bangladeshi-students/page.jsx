import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/mba-in-hungary-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "MBA in Hungary for Bangladeshi Students 2026",
  "description": "MBA and business master's in Hungary for Bangladeshi students in 2026: universities, fees in BDT, entry requirements and career outlook.",
  "keywords": [
    "MBA in Hungary",
    "business master Hungary",
    "Corvinus MBA",
    "management Hungary Bangladeshi"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/mba-in-hungary-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "MBA in Hungary for Bangladeshi Students 2026",
    "description": "MBA and business master's in Hungary for Bangladeshi students in 2026: universities, fees in BDT, entry requirements and career outlook.",
    "url": "https://eammu.com/study/hungary/mba-in-hungary-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "MBA in Hungary for Bangladeshi Students 2026",
    "description": "MBA and business master's in Hungary for Bangladeshi students in 2026: universities, fees in BDT, entry requirements and career outlook."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "MBA & Business", "href": "/study/hungary/mba-in-hungary-for-bangladeshi-students"}];
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
    "href": "/study/hungary/masters-and-phd-in-hungary-for-bangladeshi-students",
    "title": "Master's and PhD in Hungary for Bangladeshi Students",
    "description": "Master's and PhD study in Hungary for Bangladeshi students in 2026: entry requirements, funding, supervisors, fees and scholarships."
  },
  {
    "href": "/study/hungary/top-universities-in-hungary",
    "title": "Top Universities in Hungary for Bangladeshi Students",
    "description": "Top universities in Hungary for Bangladeshi students in 2026: ELTE, BME, Semmelweis, Debrecen, Szeged, Pécs and Corvinus with strengths and fit."
  },
  {
    "href": "/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students",
    "title": "Tuition Fees in Hungary for Bangladeshi Students in EUR and BDT",
    "description": "Tuition fees in Hungary for Bangladeshi students in 2026: bachelor, master, PhD and medicine fees in EUR and BDT, plus scholarship savings."
  },
  {
    "href": "/study/hungary/study-in-budapest",
    "title": "Study in Budapest for Bangladeshi Students: Universities, Costs, Life",
    "description": "Study in Budapest in 2026: universities, rent, transport, jobs and student life for Bangladeshi students in Hungary's capital."
  }
];
const FAQS = [
  {
    "q": "Is MBA in Hungary worth it?",
    "a": "It can be, especially for cost-conscious students seeking a European credential."
  },
  {
    "q": "Do I need work experience?",
    "a": "Many MBAs ask for it; management master's may not."
  },
  {
    "q": "How much is an MBA?",
    "a": "Often several thousand euros per year; check each programme."
  },
  {
    "q": "Is GMAT required?",
    "a": "Some programmes ask for it or an alternative test."
  },
  {
    "q": "Can I get a scholarship for business?",
    "a": "Yes, through Stipendium Hungaricum and university offers."
  },
  {
    "q": "How long is an MBA?",
    "a": "One to two years."
  },
  {
    "q": "Can I do an MBA without work experience?",
    "a": "Some programmes allow it, but many prefer experience."
  },
  {
    "q": "Is the MBA taught in English?",
    "a": "International MBAs are generally taught in English."
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
          "name": "MBA & Business",
          "item": "https://eammu.com/study/hungary/mba-in-hungary-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "MBA and Business Degrees in Hungary for Bangladeshi Students (2026)",
      "description": "MBA and business master's in Hungary for Bangladeshi students in 2026: universities, fees in BDT, entry requirements and career outlook.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/mba-in-hungary-for-bangladeshi-students",
      "keywords": "MBA in Hungary, business master Hungary, Corvinus MBA, management Hungary Bangladeshi",
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
          "name": "Is MBA in Hungary worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be, especially for cost-conscious students seeking a European credential."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need work experience?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many MBAs ask for it; management master's may not."
          }
        },
        {
          "@type": "Question",
          "name": "How much is an MBA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often several thousand euros per year; check each programme."
          }
        },
        {
          "@type": "Question",
          "name": "Is GMAT required?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some programmes ask for it or an alternative test."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a scholarship for business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, through Stipendium Hungaricum and university offers."
          }
        },
        {
          "@type": "Question",
          "name": "How long is an MBA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "One to two years."
          }
        },
        {
          "@type": "Question",
          "name": "Can I do an MBA without work experience?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some programmes allow it, but many prefer experience."
          }
        },
        {
          "@type": "Question",
          "name": "Is the MBA taught in English?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "International MBAs are generally taught in English."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">MBA and Business Degrees in Hungary for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Corvinus, BBU and other universities offer English-taught business degrees at moderate cost.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Hungarian business degrees are usually cheaper than Western European MBAs.</li><li>Some programmes want work experience; others accept fresh graduates.</li><li>Budapest offers the strongest corporate links.</li><li>Check accreditation.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#business-study-options" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Business study options</a></li><li><a href="#universities" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Universities</a></li><li><a href="#fees-and-funding" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Fees and funding</a></li><li><a href="#careers" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Careers</a></li><li><a href="#what-to-look-for-in-an-mba" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What to look for in an MBA</a></li><li><a href="#application-documents" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Application documents</a></li><li><a href="#is-an-mba-or-a-business-master-s-better-for-you" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Is an MBA or a business master&apos;s better for you?</a></li></ol>
          </nav>

          <article>
<section id="business-study-options" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Business study options</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Option</th><th scope="col" className="px-3 py-2 text-left font-bold">Description</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">MBA</td><td className="px-3 py-2 align-top">Often for applicants with work experience</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">MSc in management or finance</td><td className="px-3 py-2 align-top">For recent graduates</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Business bachelor&apos;s</td><td className="px-3 py-2 align-top">After HSC, see <Link href="/study/hungary/bachelors-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bachelor&apos;s guide</Link></td></tr></tbody></table></div>
</section>
<section id="universities" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Universities</h2>
<p className="mt-4 leading-7 text-slate-700">Corvinus University of Budapest, Budapest Business University, BME business faculty, University of Debrecen and University of Pannonia are commonly considered. Compare with <Link href="/study/hungary/top-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities</Link>.</p>
</section>
<section id="fees-and-funding" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Fees and funding</h2>
<p className="mt-4 leading-7 text-slate-700">Fees vary and MBAs can exceed standard master&apos;s fees. See <Link href="/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees</Link> and <Link href="/study/hungary/scholarships-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships</Link>.</p>
</section>
<section id="careers" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Careers</h2>
<p className="mt-4 leading-7 text-slate-700">Budapest hosts shared-service centres, banks and tech firms, but Hungarian helps. Read <Link href="/study/hungary/part-time-job-and-post-study-work-rules-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">work and post-study rules</Link>.</p>
</section>
<section id="what-to-look-for-in-an-mba" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What to look for in an MBA</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Accreditation and reputation.</li><li>Class profile and international mix.</li><li>Career services and alumni network.</li><li>Fees and scholarships.</li><li>Specialisations such as finance, marketing or analytics.</li></ul>
</section>
<section id="application-documents" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Application documents</h2>
<p className="mt-4 leading-7 text-slate-700">Expect CV, motivation letter, references, transcripts and English proof. Some programmes ask for a GMAT or similar test or an interview. Prepare using <Link href="/study/hungary/sop-and-motivation-letter-for-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">SOP guide</Link>.</p>
</section>
<section id="is-an-mba-or-a-business-master-s-better-for-you" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Is an MBA or a business master&apos;s better for you?</h2>
<p className="mt-4 leading-7 text-slate-700">An MBA suits applicants with several years of work experience who want leadership or career-switch skills. A business or finance MSc suits recent graduates who want deeper subject knowledge and a research option. Compare class profile, fees and career support before choosing, and weigh the total cost against your expected salary in Bangladesh or Europe.</p><ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>MBA: networking, case work, leadership focus.</li><li>MSc: specialist modules, thesis, route to PhD.</li><li>Either way, check recognition and accreditation first.</li></ul>
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
