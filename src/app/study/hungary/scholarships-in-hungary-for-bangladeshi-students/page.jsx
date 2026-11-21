import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/scholarships-in-hungary-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Scholarships in Hungary for Bangladeshi Students 2026",
  "description": "Scholarships in Hungary for Bangladeshi students in 2026: Stipendium Hungaricum, university scholarships, PhD funding and how to avoid scholarship scams.",
  "keywords": [
    "scholarships in Hungary",
    "Hungary scholarship for Bangladeshi students",
    "fully funded scholarship Hungary",
    "Hungary scholarship 2027"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/scholarships-in-hungary-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Scholarships in Hungary for Bangladeshi Students 2026",
    "description": "Scholarships in Hungary for Bangladeshi students in 2026: Stipendium Hungaricum, university scholarships, PhD funding and how to avoid scholarship scams.",
    "url": "https://eammu.com/study/hungary/scholarships-in-hungary-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Scholarships in Hungary for Bangladeshi Students 2026",
    "description": "Scholarships in Hungary for Bangladeshi students in 2026: Stipendium Hungaricum, university scholarships, PhD funding and how to avoid scholarship scams."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Scholarships Overview", "href": "/study/hungary/scholarships-in-hungary-for-bangladeshi-students"}];
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
    "href": "/study/hungary/stipendium-hungaricum-scholarship-guide",
    "title": "Stipendium Hungaricum Scholarship for Bangladeshi Students: Full Guide",
    "description": "Stipendium Hungaricum for Bangladeshi students: benefits, how to apply, the Ministry of Education sending partner step, documents and common mistakes."
  },
  {
    "href": "/study/hungary/stipendium-hungaricum-eligibility-and-deadlines",
    "title": "Stipendium Hungaricum Eligibility, Deadlines and Documents (2026–2027)",
    "description": "Stipendium Hungaricum eligibility, deadlines and documents for Bangladeshi applicants: January deadline, language proof and Ministry of Education step."
  },
  {
    "href": "/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students",
    "title": "Tuition Fees in Hungary for Bangladeshi Students in EUR and BDT",
    "description": "Tuition fees in Hungary for Bangladeshi students in 2026: bachelor, master, PhD and medicine fees in EUR and BDT, plus scholarship savings."
  },
  {
    "href": "/study/hungary/masters-and-phd-in-hungary-for-bangladeshi-students",
    "title": "Master's and PhD in Hungary for Bangladeshi Students",
    "description": "Master's and PhD study in Hungary for Bangladeshi students in 2026: entry requirements, funding, supervisors, fees and scholarships."
  }
];
const FAQS = [
  {
    "q": "Is there a scholarship in Hungary for Bangladeshi students?",
    "a": "Yes. Stipendium Hungaricum is the main government scholarship, and university scholarships also exist."
  },
  {
    "q": "Is Stipendium Hungaricum fully funded?",
    "a": "It typically covers tuition, a monthly stipend, accommodation support and health insurance, but check the current call for exact terms."
  },
  {
    "q": "When do scholarship applications open?",
    "a": "Usually in autumn, with a deadline in mid-January."
  },
  {
    "q": "Can I apply for a scholarship and self-finance as back-up?",
    "a": "Yes, many students do so with separate university applications."
  },
  {
    "q": "Do scholarship students have to return home?",
    "a": "Scholarship terms may include conditions on returning or working in the home country. Read the contract carefully."
  },
  {
    "q": "Does Eammu charge for scholarship applications?",
    "a": "Counseling and document support are services; the scholarship itself is never for sale."
  },
  {
    "q": "Can I hold two scholarships?",
    "a": "Rules depend on each scholarship. Declare all awards honestly."
  },
  {
    "q": "Is the scholarship available for MBBS?",
    "a": "The call lists eligible programmes each year. Check whether medical programmes are included."
  },
  {
    "q": "How competitive is it?",
    "a": "Competition is significant, so quality preparation and a back-up plan are important."
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
          "name": "Scholarships Overview",
          "item": "https://eammu.com/study/hungary/scholarships-in-hungary-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Scholarships in Hungary for Bangladeshi Students (2026): Complete Overview",
      "description": "Scholarships in Hungary for Bangladeshi students in 2026: Stipendium Hungaricum, university scholarships, PhD funding and how to avoid scholarship scams.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/scholarships-in-hungary-for-bangladeshi-students",
      "keywords": "scholarships in Hungary, Hungary scholarship for Bangladeshi students, fully funded scholarship Hungary, Hungary scholarship 2027",
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
          "name": "Is there a scholarship in Hungary for Bangladeshi students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Stipendium Hungaricum is the main government scholarship, and university scholarships also exist."
          }
        },
        {
          "@type": "Question",
          "name": "Is Stipendium Hungaricum fully funded?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It typically covers tuition, a monthly stipend, accommodation support and health insurance, but check the current call for exact terms."
          }
        },
        {
          "@type": "Question",
          "name": "When do scholarship applications open?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually in autumn, with a deadline in mid-January."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply for a scholarship and self-finance as back-up?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, many students do so with separate university applications."
          }
        },
        {
          "@type": "Question",
          "name": "Do scholarship students have to return home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scholarship terms may include conditions on returning or working in the home country. Read the contract carefully."
          }
        },
        {
          "@type": "Question",
          "name": "Does Eammu charge for scholarship applications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Counseling and document support are services; the scholarship itself is never for sale."
          }
        },
        {
          "@type": "Question",
          "name": "Can I hold two scholarships?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rules depend on each scholarship. Declare all awards honestly."
          }
        },
        {
          "@type": "Question",
          "name": "Is the scholarship available for MBBS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The call lists eligible programmes each year. Check whether medical programmes are included."
          }
        },
        {
          "@type": "Question",
          "name": "How competitive is it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Competition is significant, so quality preparation and a back-up plan are important."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Scholarships in Hungary for Bangladeshi Students (2026): Complete Overview</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Stipendium Hungaricum is the headline route, but it is not the only one.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Stipendium Hungaricum is a government scholarship run by Tempus Public Foundation and open to Bangladeshi applicants.</li><li>It needs an online application plus a parallel nomination process through the Ministry of Education in Bangladesh.</li><li>University and faculty scholarships can reduce tuition for self-financed students.</li><li>No genuine scholarship requires you to pay an agent for selection.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#main-scholarship-routes" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Main scholarship routes</a></li><li><a href="#stipendium-hungaricum-in-brief" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Stipendium Hungaricum in brief</a></li><li><a href="#how-to-improve-your-chances" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to improve your chances</a></li><li><a href="#scholarship-scams" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Scholarship scams</a></li><li><a href="#scholarship-timeline-for-bangladeshi-applicants" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Scholarship timeline for Bangladeshi applicants</a></li><li><a href="#checklist-for-a-competitive-scholarship-file" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Checklist for a competitive scholarship file</a></li><li><a href="#what-to-do-if-you-are-not-selected" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What to do if you are not selected</a></li></ol>
          </nav>

          <article>
<section id="main-scholarship-routes" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Main scholarship routes</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Route</th><th scope="col" className="px-3 py-2 text-left font-bold">Who it suits</th><th scope="col" className="px-3 py-2 text-left font-bold">What it may cover</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Stipendium Hungaricum</td><td className="px-3 py-2 align-top">Bachelor, master, one-tier master, PhD applicants</td><td className="px-3 py-2 align-top">Tuition, monthly stipend, accommodation support and health insurance (see current call)</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">University merit scholarships</td><td className="px-3 py-2 align-top">Strong academic applicants</td><td className="px-3 py-2 align-top">Partial tuition discount, varies by university</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">PhD funded positions</td><td className="px-3 py-2 align-top">Research-oriented applicants</td><td className="px-3 py-2 align-top">Stipend and tuition through programme or lab funding</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">External scholarships</td><td className="px-3 py-2 align-top">Specific fields or sponsors</td><td className="px-3 py-2 align-top">Varies</td></tr></tbody></table></div>
</section>
<section id="stipendium-hungaricum-in-brief" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Stipendium Hungaricum in brief</h2>
<p className="mt-4 leading-7 text-slate-700">Read the dedicated <Link href="/study/hungary/stipendium-hungaricum-scholarship-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Stipendium Hungaricum guide</Link> and <Link href="/study/hungary/stipendium-hungaricum-eligibility-and-deadlines" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">eligibility and deadlines</Link>. The key point for Bangladeshi applicants is that submitting on the online platform is only half the process; you must also follow the Bangladesh sending partner steps.</p>
</section>
<section id="how-to-improve-your-chances" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to improve your chances</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Apply early and choose programmes carefully.</li><li>Prepare a strong <Link href="/study/hungary/sop-and-motivation-letter-for-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">motivation letter</Link>.</li><li>Keep academic documents and language evidence ready.</li><li>Apply to several programmes where rules allow.</li><li>Have a back-up plan with self-financed admission.</li></ul>
</section>
<section id="scholarship-scams" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Scholarship scams</h2>
<p className="mt-4 leading-7 text-slate-700">Never pay anyone for a guaranteed scholarship. Official applications are free, and results are published by official bodies. Cross-check on the official sites listed at the bottom of this page, and read <Link href="/study/hungary/hungary-student-visa-refusal-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa refusal reasons</Link> to avoid risky shortcuts.</p>
</section>
<section id="scholarship-timeline-for-bangladeshi-applicants" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Scholarship timeline for Bangladeshi applicants</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">When</th><th scope="col" className="px-3 py-2 text-left font-bold">Action</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">September – October</td><td className="px-3 py-2 align-top">Research programmes and read last year&apos;s call</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">November – December</td><td className="px-3 py-2 align-top">Open application, request documents, write motivation letter</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">By mid-January</td><td className="px-3 py-2 align-top">Submit the online application and follow the Bangladesh sending-partner process</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">February – June</td><td className="px-3 py-2 align-top">Evaluation, nomination and university decisions</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">June – August</td><td className="px-3 py-2 align-top">Accept, apply for the D-visa and arrange travel</td></tr></tbody></table></div>
</section>
<section id="checklist-for-a-competitive-scholarship-file" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Checklist for a competitive scholarship file</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>High, consistent grades with clear explanations of any dips.</li><li>A motivation letter tied to the programme and your career plan.</li><li>Meaningful projects, research, internships or volunteering.</li><li>Strong, specific recommendation letters.</li><li>Language evidence that meets the call.</li><li>Back-up self-financed applications.</li></ul>
</section>
<section id="what-to-do-if-you-are-not-selected" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What to do if you are not selected</h2>
<p className="mt-4 leading-7 text-slate-700">Many students apply again the following year with a stronger profile, or pivot to a self-financed or university-scholarship route. See <Link href="/study/hungary/cheapest-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cheapest universities</Link> and <Link href="/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees</Link> to plan a lower-cost alternative.</p>
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
