import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/serbia/world-in-serbia-scholarship-guide';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "World in Serbia Scholarship for Bangladesh 2026 Guide",
  "description": "World in Serbia scholarship guide for Bangladeshi students: who can apply, benefits, Serbian language year, public universities and common mistakes.",
  "keywords": [
    "World in Serbia scholarship",
    "Serbian government scholarship Bangladesh",
    "free study Serbia",
    "Serbia scholarship Ministry of Education"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/serbia/world-in-serbia-scholarship-guide"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "World in Serbia Scholarship for Bangladesh 2026 Guide",
    "description": "World in Serbia scholarship guide for Bangladeshi students: who can apply, benefits, Serbian language year, public universities and common mistakes.",
    "url": "https://eammu.com/study/serbia/world-in-serbia-scholarship-guide",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "World in Serbia Scholarship for Bangladesh 2026 Guide",
    "description": "World in Serbia scholarship guide for Bangladeshi students: who can apply, benefits, Serbian language year, public universities and common mistakes."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Serbia", "href": "/study/serbia"}, {"name": "World in Serbia Guide", "href": "/study/serbia/world-in-serbia-scholarship-guide"}];
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
    "href": "/study/serbia/world-in-serbia-eligibility-and-deadlines",
    "title": "World in Serbia Eligibility, Deadlines and Documents (2026–2027)",
    "description": "World in Serbia eligibility, deadlines and documents for Bangladeshi applicants: NAM countries, age, language, certificates and where to find calls."
  },
  {
    "href": "/study/serbia/scholarships-in-serbia-for-bangladeshi-students",
    "title": "Scholarships in Serbia for Bangladeshi Students: Complete Overview",
    "description": "Scholarships in Serbia for Bangladeshi students in 2026: World in Serbia, university fee reductions, PhD funding and how to avoid scholarship scams."
  },
  {
    "href": "/study/serbia/how-to-apply-to-serbian-universities",
    "title": "How to Apply to Serbian Universities from Bangladesh: Step-by-Step Guide",
    "description": "How to apply to Serbian universities from Bangladesh in 2026: faculty applications, entrance exams, fees, recognition of documents and offers."
  },
  {
    "href": "/study/serbia/sop-and-motivation-letter-for-serbia",
    "title": "SOP and Motivation Letter for Serbia: Structure, Tips and Mistakes",
    "description": "How to write an SOP or motivation letter for Serbian universities and World in Serbia in 2026, with structure, tips and common mistakes."
  }
];
const FAQS = [
  {
    "q": "How can Bangladeshi students apply for World in Serbia?",
    "a": "Follow the annual call and submit through the diplomatic or consular channel it names for your country."
  },
  {
    "q": "Is Bangladesh eligible for World in Serbia?",
    "a": "The project targets Non-Aligned Movement member and observer states; Bangladesh is a NAM member, but you should confirm it in the current call."
  },
  {
    "q": "Do I need to learn Serbian?",
    "a": "The programme includes Serbian language study, and consultation in English is possible at some universities."
  },
  {
    "q": "Is the scholarship available for medicine?",
    "a": "The call lists eligible programmes each year; check whether medical programmes are included."
  },
  {
    "q": "Does the scholarship cover flights?",
    "a": "Typically check the call; do not assume flights are covered."
  },
  {
    "q": "Can Eammu submit my application?",
    "a": "We help prepare documents and guide you, but you should control your own submission and verify it."
  },
  {
    "q": "How competitive is it?",
    "a": "Places are limited, so strong preparation and a back-up plan are important."
  },
  {
    "q": "Where are official announcements published?",
    "a": "On the Ministry of Education website and Serbian mission pages; see the official sources at the bottom of this page."
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
          "name": "World in Serbia Guide",
          "item": "https://eammu.com/study/serbia/world-in-serbia-scholarship-guide"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "World in Serbia Scholarship for Bangladeshi Students: Full Guide",
      "description": "World in Serbia scholarship guide for Bangladeshi students: who can apply, benefits, Serbian language year, public universities and common mistakes.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/serbia/world-in-serbia-scholarship-guide",
      "keywords": "World in Serbia scholarship, Serbian government scholarship Bangladesh, free study Serbia, Serbia scholarship Ministry of Education",
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
          "name": "How can Bangladeshi students apply for World in Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Follow the annual call and submit through the diplomatic or consular channel it names for your country."
          }
        },
        {
          "@type": "Question",
          "name": "Is Bangladesh eligible for World in Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The project targets Non-Aligned Movement member and observer states; Bangladesh is a NAM member, but you should confirm it in the current call."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to learn Serbian?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The programme includes Serbian language study, and consultation in English is possible at some universities."
          }
        },
        {
          "@type": "Question",
          "name": "Is the scholarship available for medicine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The call lists eligible programmes each year; check whether medical programmes are included."
          }
        },
        {
          "@type": "Question",
          "name": "Does the scholarship cover flights?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically check the call; do not assume flights are covered."
          }
        },
        {
          "@type": "Question",
          "name": "Can Eammu submit my application?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We help prepare documents and guide you, but you should control your own submission and verify it."
          }
        },
        {
          "@type": "Question",
          "name": "How competitive is it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Places are limited, so strong preparation and a back-up plan are important."
          }
        },
        {
          "@type": "Question",
          "name": "Where are official announcements published?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "On the Ministry of Education website and Serbian mission pages; see the official sources at the bottom of this page."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "World in Serbia Scholarship for Bangladeshi Students: Full Guide",
      "description": "World in Serbia scholarship guide for Bangladeshi students: who can apply, benefits, Serbian language year, public universities and common mistakes.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Find the current call",
          "text": "Check Ministry of Education and mission announcements."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Prepare documents",
          "text": "Collect certificates, transcripts, passport, letters."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Submit through the named channel",
          "text": "Apply before the deadline through the consular or ministry channel."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Wait for selection",
          "text": "Follow instructions if selected."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Arrange visa and travel",
          "text": "Apply for the D-visa and plan arrival."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">World in Serbia Scholarship for Bangladeshi Students: Full Guide</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">How the Government of Serbia scholarship works for candidates from Non-Aligned Movement countries.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>The project targets candidates from member and observer states of the Non-Aligned Movement.</li><li>It supports Serbian language study and enrolment at public universities such as Belgrade, Novi Sad, Niš and Kragujevac.</li><li>The call is published annually; applications go through Serbian diplomatic and consular representation.</li><li>Always follow the current call rather than older summaries.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#what-is-world-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What is World in Serbia?</a></li><li><a href="#typical-benefits-check-the-current-call" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Typical benefits (check the current call)</a></li><li><a href="#application-process-for-bangladeshis" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Application process for Bangladeshis</a></li><li><a href="#documents-and-preparation" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Documents and preparation</a></li><li><a href="#common-mistakes" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Common mistakes</a></li><li><a href="#choosing-and-preparing-for-a-placement" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Choosing and preparing for a placement</a></li><li><a href="#after-you-receive-an-award" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">After you receive an award</a></li></ol>
          </nav>

          <article>
<section id="what-is-world-in-serbia" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What is World in Serbia?</h2>
<p className="mt-4 leading-7 text-slate-700">&quot;World in Serbia&quot; is an initiative of national importance in which the Government of Serbia awards scholarships to candidates from Africa, Asia and Latin America who belong to Non-Aligned Movement states. The Ministry of Education describes the project as enabling foreign students to study free of charge at public universities, with scholarships for Serbian language study and for enrolment in higher education institutions founded by the Republic of Serbia. A 2026 government statement said roughly 650 students currently study under the programme.</p>
</section>
<section id="typical-benefits-check-the-current-call" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Typical benefits (check the current call)</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Tuition-free study at a Serbian public university.</li><li>Serbian language preparation before or alongside degree study.</li><li>Support as defined in the annual call, such as accommodation or stipend elements.</li><li>A defined route to student residence in Serbia.</li></ul><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Benefit levels, number of places, age limits and eligible levels change by call. Older calls have mentioned an age bracket of about 18 to 35, but you must confirm in the current announcement.</p>
</section>
<section id="application-process-for-bangladeshis" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Application process for Bangladeshis</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Watch for the annual announcement from the Ministry of Education and the Serbian foreign ministry.</li><li>Check which Serbian mission or Bangladeshi authority collects applications for Bangladesh.</li><li>Prepare the application form, certificates, transcripts, passport copy, motivation letter and references.</li><li>Submit through the channel named in the call before the deadline.</li><li>Wait for the selection and university placement.</li><li>If selected, follow instructions for visa, travel and enrolment.</li></ol>
</section>
<section id="documents-and-preparation" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Documents and preparation</h2>
<p className="mt-4 leading-7 text-slate-700">Prepare early: attested certificates, English or Serbian language evidence if requested, and a clear motivation letter. See <Link href="/study/serbia/serbia-student-documents-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">documents checklist</Link>, <Link href="/study/serbia/sop-and-motivation-letter-for-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">SOP guide</Link> and <Link href="/study/serbia/world-in-serbia-eligibility-and-deadlines" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">eligibility and deadlines</Link>.</p>
</section>
<section id="common-mistakes" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Common mistakes</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Using an old call and missing new rules.</li><li>Applying through an unofficial website.</li><li>Weak or copied motivation letters.</li><li>Waiting until the last days.</li><li>Paying an agent for &quot;guaranteed selection&quot;.</li></ul>
</section>
<section id="choosing-and-preparing-for-a-placement" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Choosing and preparing for a placement</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Understand which public universities participate.</li><li>Match your academic background to available programmes.</li><li>Prepare for Serbian language study.</li><li>Read the scholarship conditions carefully before accepting.</li></ul>
</section>
<section id="after-you-receive-an-award" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">After you receive an award</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Read the award conditions.</li><li>Confirm accommodation arrangements.</li><li>Prepare for the D-visa.</li><li>Plan for the first month&apos;s expenses.</li><li>Respect all enrolment and reporting duties.</li></ol>
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
