import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/serbia/how-to-apply-to-serbian-universities';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "How to Apply to Serbian Universities 2026 | Eammu",
  "description": "How to apply to Serbian universities from Bangladesh in 2026: faculty applications, entrance exams, fees, recognition of documents and offers.",
  "keywords": [
    "how to apply Serbian university",
    "Serbia university application Bangladesh",
    "apply to Serbia self-financed"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/serbia/how-to-apply-to-serbian-universities"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "How to Apply to Serbian Universities 2026 | Eammu",
    "description": "How to apply to Serbian universities from Bangladesh in 2026: faculty applications, entrance exams, fees, recognition of documents and offers.",
    "url": "https://eammu.com/study/serbia/how-to-apply-to-serbian-universities",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "How to Apply to Serbian Universities 2026 | Eammu",
    "description": "How to apply to Serbian universities from Bangladesh in 2026: faculty applications, entrance exams, fees, recognition of documents and offers."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Serbia", "href": "/study/serbia"}, {"name": "How to Apply (Step by Step)", "href": "/study/serbia/how-to-apply-to-serbian-universities"}];
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
    "href": "/study/serbia/serbia-intake-dates",
    "title": "Serbia Intake Dates and Application Deadlines (2026–2027)",
    "description": "Serbia intake dates and deadlines for Bangladeshi students: October and February intakes, enrolment rounds, entrance exams and scholarship timing."
  },
  {
    "href": "/study/serbia/serbia-student-documents-checklist",
    "title": "Serbia Student Visa and Admission Documents Checklist for Bangladeshis",
    "description": "Complete documents checklist for Serbia admission and student visa in 2026 for Bangladeshi students: academic, financial, housing and insurance papers."
  },
  {
    "href": "/study/serbia/world-in-serbia-scholarship-guide",
    "title": "World in Serbia Scholarship for Bangladeshi Students: Full Guide",
    "description": "World in Serbia scholarship guide for Bangladeshi students: who can apply, benefits, Serbian language year, public universities and common mistakes."
  },
  {
    "href": "/study/serbia/sop-and-motivation-letter-for-serbia",
    "title": "SOP and Motivation Letter for Serbia: Structure, Tips and Mistakes",
    "description": "How to write an SOP or motivation letter for Serbian universities and World in Serbia in 2026, with structure, tips and common mistakes."
  }
];
const FAQS = [
  {
    "q": "Is there a central application portal for Serbia?",
    "a": "No, you apply to each faculty or through the government scholarship call."
  },
  {
    "q": "How much is the application fee?",
    "a": "It varies by faculty; some University of Belgrade calls require proof of payment."
  },
  {
    "q": "How long does an offer take?",
    "a": "From a few weeks to a few months depending on rounds and exams."
  },
  {
    "q": "Can I apply to several faculties?",
    "a": "Yes, but track deadlines, fees and exam dates."
  },
  {
    "q": "Do I need an agent?",
    "a": "No. You can apply yourself; counselors can help with planning and documents."
  },
  {
    "q": "What if I am rejected?",
    "a": "Ask for feedback, improve your profile and try another programme or round."
  },
  {
    "q": "Do I need to attend exams in Serbia?",
    "a": "Some exams may be online; others are in person. Check the call."
  },
  {
    "q": "When do I pay tuition?",
    "a": "Often in instalments; some calls require a first instalment before enrolment."
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
          "name": "How to Apply (Step by Step)",
          "item": "https://eammu.com/study/serbia/how-to-apply-to-serbian-universities"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "How to Apply to Serbian Universities from Bangladesh: Step-by-Step Guide",
      "description": "How to apply to Serbian universities from Bangladesh in 2026: faculty applications, entrance exams, fees, recognition of documents and offers.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/serbia/how-to-apply-to-serbian-universities",
      "keywords": "how to apply Serbian university, Serbia university application Bangladesh, apply to Serbia self-financed",
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
          "name": "Is there a central application portal for Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, you apply to each faculty or through the government scholarship call."
          }
        },
        {
          "@type": "Question",
          "name": "How much is the application fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It varies by faculty; some University of Belgrade calls require proof of payment."
          }
        },
        {
          "@type": "Question",
          "name": "How long does an offer take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "From a few weeks to a few months depending on rounds and exams."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply to several faculties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but track deadlines, fees and exam dates."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an agent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. You can apply yourself; counselors can help with planning and documents."
          }
        },
        {
          "@type": "Question",
          "name": "What if I am rejected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ask for feedback, improve your profile and try another programme or round."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to attend exams in Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some exams may be online; others are in person. Check the call."
          }
        },
        {
          "@type": "Question",
          "name": "When do I pay tuition?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often in instalments; some calls require a first instalment before enrolment."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How to Apply to Serbian Universities from Bangladesh: Step-by-Step Guide",
      "description": "How to apply to Serbian universities from Bangladesh in 2026: faculty applications, entrance exams, fees, recognition of documents and offers.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Shortlist programmes",
          "text": "Match course, budget and city."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Prepare documents",
          "text": "Attested certificates, transcripts, passport, language proof."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Submit the application",
          "text": "Pay the fee and submit through the faculty channel."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Take exam or interview",
          "text": "Complete required tests."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Accept the offer",
          "text": "Pay required fees and start visa steps."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">How to Apply to Serbian Universities from Bangladesh: Step-by-Step Guide</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">There is no single national portal, so you apply to each faculty or through the scholarship call.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Applications go to individual faculties; the University of Belgrade alone has 31.</li><li>Foreign certificates are recognised for study purposes through the university&apos;s procedure.</li><li>Expect an application fee and sometimes an entrance exam.</li><li>Never pay application fees to unofficial links.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#two-main-routes" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Two main routes</a></li><li><a href="#step-by-step-process" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Step-by-step process</a></li><li><a href="#recognition-of-foreign-documents" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Recognition of foreign documents</a></li><li><a href="#application-tips" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Application tips</a></li><li><a href="#after-you-get-an-offer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">After you get an offer</a></li><li><a href="#application-tracker-template" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Application tracker template</a></li><li><a href="#how-to-compare-offers" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to compare offers</a></li></ol>
          </nav>

          <article>
<section id="two-main-routes" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Two main routes</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Route</th><th scope="col" className="px-3 py-2 text-left font-bold">Where you apply</th><th scope="col" className="px-3 py-2 text-left font-bold">Best for</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Direct (self-financed)</td><td className="px-3 py-2 align-top">Faculty admissions office or portal</td><td className="px-3 py-2 align-top">Students who can pay tuition and want flexibility</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">World in Serbia</td><td className="px-3 py-2 align-top">Ministry of Education call via Serbian missions</td><td className="px-3 py-2 align-top">Students seeking a funded place</td></tr></tbody></table></div>
</section>
<section id="step-by-step-process" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Step-by-step process</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Shortlist programmes using <Link href="/study/serbia/top-universities-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities</Link>.</li><li>Read the faculty&apos;s call and <Link href="/study/serbia/admission-requirements-in-serbia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link>.</li><li>Prepare documents and attested copies.</li><li>Submit the application and pay the fee.</li><li>Take the <Link href="/study/serbia/entrance-exams-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">entrance exam</Link> or interview if required.</li><li>Start recognition of foreign documents as instructed.</li><li>Receive the offer, pay the first instalment if requested and move to the <Link href="/study/serbia/serbia-d-visa-and-temporary-residence-application-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa application guide</Link>.</li></ol>
</section>
<section id="recognition-of-foreign-documents" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Recognition of foreign documents</h2>
<p className="mt-4 leading-7 text-slate-700">The University of Belgrade notes that foreign higher education documents are recognised by its Office for Education and Research for the purpose of further education, and that some programmes charge an additional university fee (for example EUR 90 at one faculty). Other universities have their own offices; ask each faculty. See <Link href="/study/serbia/degree-recognition-and-eligibility-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">degree recognition</Link>.</p>
</section>
<section id="application-tips" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Application tips</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Write a tailored motivation letter, see <Link href="/study/serbia/sop-and-motivation-letter-for-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">SOP guide</Link>.</li><li>Use a professional email address and reply promptly.</li><li>Save all receipts and emails.</li><li>Apply to three to five programmes to spread risk.</li></ul>
</section>
<section id="after-you-get-an-offer" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">After you get an offer</h2>
<p className="mt-4 leading-7 text-slate-700">Confirm fees and refund rules, then plan <Link href="/study/serbia/student-accommodation-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">housing</Link>, <Link href="/study/serbia/bank-solvency-requirements-for-serbia-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">funds</Link> and timing with <Link href="/study/serbia/serbia-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake dates</Link>.</p>
</section>
<section id="application-tracker-template" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Application tracker template</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">University</th><th scope="col" className="px-3 py-2 text-left font-bold">Programme</th><th scope="col" className="px-3 py-2 text-left font-bold">Deadline</th><th scope="col" className="px-3 py-2 text-left font-bold">Fee</th><th scope="col" className="px-3 py-2 text-left font-bold">Status</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Faculty A</td><td className="px-3 py-2 align-top">Your programme</td><td className="px-3 py-2 align-top">Check call</td><td className="px-3 py-2 align-top">Check call</td><td className="px-3 py-2 align-top">Preparing</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Faculty B</td><td className="px-3 py-2 align-top">Your programme</td><td className="px-3 py-2 align-top">Check call</td><td className="px-3 py-2 align-top">Check call</td><td className="px-3 py-2 align-top">Submitted</td></tr></tbody></table></div><p className="mt-4 leading-7 text-slate-700">Copy this structure into a spreadsheet and update it weekly.</p>
</section>
<section id="how-to-compare-offers" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to compare offers</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Total cost including fees, rent and travel.</li><li>Programme quality and accreditation.</li><li>Housing support.</li><li>Scholarship or discount options.</li><li>Refund and deferral policies.</li></ul>
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
