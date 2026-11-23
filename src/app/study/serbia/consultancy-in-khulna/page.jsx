import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/serbia/consultancy-in-khulna';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Serbia Consultancy in Khulna 2026 | Eammu",
  "description": "Study in Serbia consultancy for Khulna students in 2026: free counseling, World in Serbia guidance, funds planning and D-visa preparation from Eammu.",
  "keywords": [
    "study in Serbia consultancy Khulna",
    "Serbia study visa consultant Khulna",
    "World in Serbia Khulna",
    "study abroad consultancy Khulna"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/serbia/consultancy-in-khulna"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Serbia Consultancy in Khulna 2026 | Eammu",
    "description": "Study in Serbia consultancy for Khulna students in 2026: free counseling, World in Serbia guidance, funds planning and D-visa preparation from Eammu.",
    "url": "https://eammu.com/study/serbia/consultancy-in-khulna",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Serbia Consultancy in Khulna 2026 | Eammu",
    "description": "Study in Serbia consultancy for Khulna students in 2026: free counseling, World in Serbia guidance, funds planning and D-visa preparation from Eammu."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Serbia", "href": "/study/serbia"}, {"name": "Khulna Consultancy", "href": "/study/serbia/consultancy-in-khulna"}];
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
    "href": "/study/serbia/bangladesh-offices",
    "title": "Eammu Holidays Bangladesh Offices and Nationwide Support for Study in Serbia",
    "description": "Eammu Holidays study in Serbia counseling across Bangladesh: Dhaka walk-in desk and online support for every division, plus a directory of all guides."
  },
  {
    "href": "/study/serbia/study-in-serbia-from-bangladesh",
    "title": "Study in Serbia from Bangladesh: 2026 Roadmap, Costs and Visa Steps",
    "description": "Step-by-step roadmap to study in Serbia from Bangladesh in 2026: eligibility, costs in BDT, scholarships, admission, D-visa and arrival in Serbia."
  },
  {
    "href": "/study/serbia/world-in-serbia-scholarship-guide",
    "title": "World in Serbia Scholarship for Bangladeshi Students: Full Guide",
    "description": "World in Serbia scholarship guide for Bangladeshi students: who can apply, benefits, Serbian language year, public universities and common mistakes."
  },
  {
    "href": "/study/serbia/serbia-d-visa-and-temporary-residence-application-guide",
    "title": "Serbia D-Visa and Temporary Residence Application Guide for Bangladeshis",
    "description": "Step-by-step Serbia D-visa and student temporary residence for Bangladeshis in 2026: mission, documents, fees, arrival, police registration and permit."
  }
];
const FAQS = [
  {
    "q": "Does Eammu Holidays have an office in Khulna?",
    "a": "Our walk-in counseling desk is in Dhaka. Students elsewhere receive support online, by phone and by WhatsApp, and we do not claim local offices."
  },
  {
    "q": "Can Khulna students apply for World in Serbia?",
    "a": "Candidates from eligible countries can apply if they meet the current call and follow its channel."
  },
  {
    "q": "Is counseling free?",
    "a": "The initial profile review is free. Any paid service is explained in writing before you commit."
  },
  {
    "q": "Where is the Serbian visa submitted?",
    "a": "Serbia lists its embassy in New Delhi as covering Bangladesh non-residentially; we help you confirm the current channel."
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
    "q": "Is Serbia a good choice for Khulna students?",
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
          "name": "Serbia",
          "item": "https://eammu.com/study/serbia"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Khulna Consultancy",
          "item": "https://eammu.com/study/serbia/consultancy-in-khulna"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Serbia Consultancy for Khulna Students (2026)",
      "description": "Study in Serbia consultancy for Khulna students in 2026: free counseling, World in Serbia guidance, funds planning and D-visa preparation from Eammu.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/serbia/consultancy-in-khulna",
      "keywords": "study in Serbia consultancy Khulna, Serbia study visa consultant Khulna, World in Serbia Khulna, study abroad consultancy Khulna",
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
          "name": "Does Eammu Holidays have an office in Khulna?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our walk-in counseling desk is in Dhaka. Students elsewhere receive support online, by phone and by WhatsApp, and we do not claim local offices."
          }
        },
        {
          "@type": "Question",
          "name": "Can Khulna students apply for World in Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Candidates from eligible countries can apply if they meet the current call and follow its channel."
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
          "name": "Where is the Serbian visa submitted?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Serbia lists its embassy in New Delhi as covering Bangladesh non-residentially; we help you confirm the current channel."
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
          "name": "Is Serbia a good choice for Khulna students?",
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
      "name": "Study in Serbia counseling for Khulna students",
      "serviceType": "Study abroad counseling",
      "url": "https://eammu.com/study/serbia/consultancy-in-khulna",
      "provider": {
        "@type": "Organization",
        "name": "Eammu Holidays",
        "url": "https://eammu.com",
        "telephone": "+8801631312525",
        "email": "info@eammu.com"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Khulna"
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Serbia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Serbia Consultancy for Khulna Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">How Khulna families can use Eammu Holidays to plan study in Serbia, from scholarship to D-visa.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Eammu Holidays gives Khulna students free profile review, university shortlist and visa guidance.</li><li>Counseling is available online, by phone and by WhatsApp; the walk-in desk is in Dhaka.</li><li>We give balanced advice, including on scholarship odds, funds and visa risk, and never guarantee outcomes.</li><li>Start with the Serbia roadmap and the World in Serbia guide.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#counseling-for-khulna-families" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Counseling for Khulna families</a></li><li><a href="#logistics-and-travel" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Logistics and travel</a></li><li><a href="#local-insight-for-khulna-applicants" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Local insight for Khulna applicants</a></li><li><a href="#what-khulna-students-should-prepare" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What Khulna students should prepare</a></li><li><a href="#a-realistic-6-month-plan-for-khulna-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">A realistic 6-month plan for Khulna students</a></li><li><a href="#typical-khulna-student-questions" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Typical Khulna student questions</a></li><li><a href="#nearby-support-and-other-locations" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Nearby support and other locations</a></li><li><a href="#how-we-work-with-you" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How we work with you</a></li></ol>
          </nav>

          <article>
<section id="counseling-for-khulna-families" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Counseling for Khulna families</h2>
<p className="mt-4 leading-7 text-slate-700">Students in Khulna, Jashore, Satkhira and nearby districts can use Eammu Holidays online. We do not claim a physical office in Khulna.</p><p className="mt-4 leading-7 text-slate-700">Khulna has many engineering and technical students, including those from KUET and polytechnics. We begin with <Link href="/study/serbia/tuition-fees-in-serbia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Serbia</Link>, <Link href="/study/serbia/scholarships-in-serbia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships</Link> and <Link href="/study/serbia/how-to-apply-to-serbian-universities" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the application guide</Link>.</p>
</section>
<section id="logistics-and-travel" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Logistics and travel</h2>
<p className="mt-4 leading-7 text-slate-700">Engineering and IT programmes in Belgrade, Novi Sad, Niš and Kragujevac are common matches.</p><p className="mt-4 leading-7 text-slate-700">Document attestation and courier are handled remotely where possible. See <Link href="/study/serbia/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">processing time and cost</Link> for timelines and ticket budgets.</p>
</section>
<section id="local-insight-for-khulna-applicants" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Local insight for Khulna applicants</h2>
<p className="mt-4 leading-7 text-slate-700">Diploma holders should read the diploma pathway guide before applying. Serbia has no residential embassy in Dhaka, so we confirm the current submission channel, courier arrangements and timing with you before you buy tickets or send documents.</p><p className="mt-4 leading-7 text-slate-700">Serbia is also outside the Schengen area, so we explain onward travel and post-study options honestly. Read <Link href="/study/serbia/life-in-serbia-for-international-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">life in Serbia</Link> and <Link href="/study/serbia/part-time-job-and-post-study-work-rules-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">work rules</Link>.</p>
</section>
<section id="what-khulna-students-should-prepare" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What Khulna students should prepare</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">Why it matters</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">SSC, HSC, diploma or degree results</td><td className="px-3 py-2 align-top">Defines your level, see <Link href="/study/serbia/admission-requirements-in-serbia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Passport</td><td className="px-3 py-2 align-top">Needed for scholarship and visa; check validity</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">English test or MOI letter</td><td className="px-3 py-2 align-top">See <Link href="/study/serbia/study-in-serbia-without-ielts" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study without IELTS</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Budget and sponsor details</td><td className="px-3 py-2 align-top">See <Link href="/study/serbia/bank-solvency-requirements-for-serbia-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Motivation letter and CV</td><td className="px-3 py-2 align-top">See <Link href="/study/serbia/sop-and-motivation-letter-for-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">SOP guide</Link></td></tr></tbody></table></div>
</section>
<section id="a-realistic-6-month-plan-for-khulna-students" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">A realistic 6-month plan for Khulna students</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Month</th><th scope="col" className="px-3 py-2 text-left font-bold">Action</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">1</td><td className="px-3 py-2 align-top">Free profile review; shortlist programmes and funding routes</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">2</td><td className="px-3 py-2 align-top">Gather and attest academic documents; take or schedule English test</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">3</td><td className="px-3 py-2 align-top">Write motivation letter; submit scholarship or faculty applications</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">4</td><td className="px-3 py-2 align-top">Exams, interviews and offers; compare total costs</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">5</td><td className="px-3 py-2 align-top">Accept offer; prepare funds, insurance and accommodation proof</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">6</td><td className="px-3 py-2 align-top">D-visa submission and travel planning</td></tr></tbody></table></div><p className="mt-4 leading-7 text-slate-700">Match this plan to the October cycle with the <Link href="/study/serbia/serbia-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake dates guide</Link>.</p>
</section>
<section id="typical-khulna-student-questions" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Typical Khulna student questions</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>How much money must I show? See <Link href="/study/serbia/bank-solvency-requirements-for-serbia-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link>.</li><li>Is my degree recognised? See <Link href="/study/serbia/degree-recognition-and-eligibility-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">degree recognition</Link>.</li><li>When should I apply? See <Link href="/study/serbia/serbia-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Serbia intake dates</Link>.</li><li>Can I work? See <Link href="/study/serbia/part-time-job-and-post-study-work-rules-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">work rules</Link>.</li><li>Can my family join me? See <Link href="/study/serbia/bring-family-to-serbia-as-a-student" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">family guide</Link>.</li></ul>
</section>
<section id="nearby-support-and-other-locations" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Nearby support and other locations</h2>
<p className="mt-4 leading-7 text-slate-700">Students nearby can also read the guides for <Link href="/study/serbia/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Dhaka</Link>, <Link href="/study/serbia/consultancy-in-chattogram" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Chattogram</Link>, <Link href="/study/serbia/consultancy-in-sylhet" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Sylhet</Link>, or view all options on the <Link href="/study/serbia/bangladesh-offices" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bangladesh offices page</Link>. For the full country roadmap, read <Link href="/study/serbia/study-in-serbia-from-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">studying in Serbia from Bangladesh</Link>.</p>
</section>
<section id="how-we-work-with-you" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How we work with you</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Honest assessment of your chances and alternatives.</li><li>Clear written explanation of any paid service before you commit.</li><li>No pressure to choose a specific university.</li><li>No promises of guaranteed admission, scholarship or visa.</li></ul>
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
