import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/serbia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Serbia from Bangladesh 2026 | Eammu Holidays",
  "description": "Complete 2026 guide to study in Serbia from Bangladesh: tuition in BDT, World in Serbia scholarship, D-visa, residence permit, work rules and costs.",
  "keywords": [
    "study in Serbia from Bangladesh",
    "Serbia student visa Bangladesh",
    "World in Serbia scholarship Bangladesh",
    "Serbia universities for Bangladeshi students",
    "study in Serbia cost in BDT",
    "Serbia consultancy Dhaka",
    "cheap study in Europe",
    "MBBS in Serbia"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/serbia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Serbia from Bangladesh 2026 | Eammu Holidays",
    "description": "Complete 2026 guide to study in Serbia from Bangladesh: tuition in BDT, World in Serbia scholarship, D-visa, residence permit, work rules and costs.",
    "url": "https://eammu.com/study/serbia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Serbia from Bangladesh 2026 | Eammu Holidays",
    "description": "Complete 2026 guide to study in Serbia from Bangladesh: tuition in BDT, World in Serbia scholarship, D-visa, residence permit, work rules and costs."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Serbia", "href": "/study/serbia"}];
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
    "href": "/study/serbia/tuition-fees-in-serbia-for-bangladeshi-students",
    "title": "Tuition Fees in Serbia for Bangladeshi Students in EUR and BDT",
    "description": "Tuition fees in Serbia for Bangladeshi students in 2026: bachelor, master, PhD and medicine in EUR and BDT, plus fee waivers and hidden costs."
  },
  {
    "href": "/study/serbia/serbia-d-visa-and-temporary-residence-application-guide",
    "title": "Serbia D-Visa and Temporary Residence Application Guide for Bangladeshis",
    "description": "Step-by-step Serbia D-visa and student temporary residence for Bangladeshis in 2026: mission, documents, fees, arrival, police registration and permit."
  }
];
const FAQS = [
  {
    "q": "Is Serbia good for Bangladeshi students?",
    "a": "Yes for students who want a low-cost European degree, particularly in medicine, IT and business, and who can plan the visa process and funds carefully."
  },
  {
    "q": "Is study in Serbia free for Bangladeshis?",
    "a": "Not by default. Tuition is waived only for scholarship holders such as World in Serbia recipients; most students pay tuition set by each faculty."
  },
  {
    "q": "How much does it cost to study in Serbia from Bangladesh?",
    "a": "Plan about EUR 1,500–5,000 a year for tuition at most programmes plus EUR 350–700 a month for living; medicine costs more."
  },
  {
    "q": "Do Bangladeshis need a visa for Serbia?",
    "a": "Yes. Bangladeshi passport holders need a visa, and degree students need a D-visa followed by a temporary residence permit."
  },
  {
    "q": "When should I start applying?",
    "a": "Start 9–12 months before the October intake because documents, entrance exams, visa and housing all take time."
  },
  {
    "q": "Can I work while studying in Serbia?",
    "a": "The Welcome to Serbia portal states that foreigners with regulated stay on the basis of study may work up to 16 hours a week. Confirm the current rule before taking a job."
  },
  {
    "q": "Does a Serbian degree allow me to live in Europe afterwards?",
    "a": "No automatic right. Serbia is not in the EU or Schengen, so post-study options depend on Serbian residence and work rules or on separate applications elsewhere."
  },
  {
    "q": "Does Eammu Holidays guarantee a visa or scholarship?",
    "a": "No. Eammu offers counseling, document review and application support, but universities, ministries and visa authorities make the decisions."
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
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Serbia 2026: Complete Guide for Bangladeshi Students",
      "description": "Complete 2026 guide to study in Serbia from Bangladesh: tuition in BDT, World in Serbia scholarship, D-visa, residence permit, work rules and costs.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/serbia",
      "keywords": "study in Serbia from Bangladesh, Serbia student visa Bangladesh, World in Serbia scholarship Bangladesh, Serbia universities for Bangladeshi students, study in Serbia cost in BDT, Serbia consultancy Dhaka, cheap study in Europe, MBBS in Serbia",
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
          "name": "Is Serbia good for Bangladeshi students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes for students who want a low-cost European degree, particularly in medicine, IT and business, and who can plan the visa process and funds carefully."
          }
        },
        {
          "@type": "Question",
          "name": "Is study in Serbia free for Bangladeshis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not by default. Tuition is waived only for scholarship holders such as World in Serbia recipients; most students pay tuition set by each faculty."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to study in Serbia from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plan about EUR 1,500–5,000 a year for tuition at most programmes plus EUR 350–700 a month for living; medicine costs more."
          }
        },
        {
          "@type": "Question",
          "name": "Do Bangladeshis need a visa for Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Bangladeshi passport holders need a visa, and degree students need a D-visa followed by a temporary residence permit."
          }
        },
        {
          "@type": "Question",
          "name": "When should I start applying?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start 9–12 months before the October intake because documents, entrance exams, visa and housing all take time."
          }
        },
        {
          "@type": "Question",
          "name": "Can I work while studying in Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Welcome to Serbia portal states that foreigners with regulated stay on the basis of study may work up to 16 hours a week. Confirm the current rule before taking a job."
          }
        },
        {
          "@type": "Question",
          "name": "Does a Serbian degree allow me to live in Europe afterwards?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No automatic right. Serbia is not in the EU or Schengen, so post-study options depend on Serbian residence and work rules or on separate applications elsewhere."
          }
        },
        {
          "@type": "Question",
          "name": "Does Eammu Holidays guarantee a visa or scholarship?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Eammu offers counseling, document review and application support, but universities, ministries and visa authorities make the decisions."
          }
        }
      ]
    },
    {
      "@type": "Organization",
      "name": "Eammu Holidays",
      "url": "https://eammu.com",
      "telephone": "+8801631312525",
      "email": "info@eammu.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dhaka",
        "addressCountry": "BD"
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Serbia 2026: Complete Guide for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Low tuition, English-taught degrees, the D-visa and temporary residence process, scholarships, work rules and honest advice. 58 detailed guides for Bangladeshi families.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Serbia is one of Europe&apos;s lowest-cost study destinations, with tuition often between EUR 1,500 and EUR 5,000 a year for non-medical degrees and higher for medicine.</li><li>Bangladeshi citizens need a <strong>D-visa</strong> before travel and then a <strong>temporary residence permit</strong> in Serbia, renewed each year while you study.</li><li>The <strong>World in Serbia</strong> government scholarship is open to candidates from Non-Aligned Movement member states, a group that includes Bangladesh; applications go through the annual call.</li><li>Students with regulated study residence may work up to 16 hours a week according to the Welcome to Serbia portal.</li><li>Serbia is a European Union candidate country but is not part of the Schengen area, so plan onward travel separately.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#why-bangladeshi-students-consider-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Why Bangladeshi students consider Serbia</a></li><li><a href="#serbia-study-at-a-glance" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Serbia study at a glance</a></li><li><a href="#six-steps-from-dhaka-to-belgrade" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Six steps from Dhaka to Belgrade</a></li><li><a href="#fields-bangladeshi-students-search-for-most" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Fields Bangladeshi students search for most</a></li><li><a href="#eligibility-questions-we-hear-every-week" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Eligibility questions we hear every week</a></li><li><a href="#avoiding-scams" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Avoiding scams</a></li></ol>
          </nav>

          <article>
<section id="why-bangladeshi-students-consider-serbia" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Why Bangladeshi students consider Serbia</h2>
<p className="mt-4 leading-7 text-slate-700">Serbia offers affordable degrees at long-established public universities in Belgrade, Novi Sad, Niš and Kragujevac, plus a growing private sector with English-taught programmes in business, IT and management. Living costs are lower than in most of Western Europe, and Belgrade and Novi Sad have active technology sectors. Start with the roadmap in <Link href="/study/serbia/study-in-serbia-from-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">studying in Serbia from Bangladesh</Link>, then compare <Link href="/study/serbia/tuition-fees-in-serbia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees</Link> with <Link href="/study/serbia/cost-of-living-in-serbia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the cost of living</Link>.</p><p className="mt-4 leading-7 text-slate-700">Serbia is not the right fit for everyone. English-taught options are narrower than in Germany or Hungary, Serbian is the working language outside campus, the job market is modest, and the visa route for Bangladeshis involves a mission that is not in Dhaka. Our guides explain these trade-offs, including how Serbia compares with other Balkan and Central European options in <Link href="/study/serbia/serbia-vs-hungary-vs-poland-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Serbia vs Hungary vs Poland</Link>.</p>
</section>
<section id="serbia-study-at-a-glance" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Serbia study at a glance</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Topic</th><th scope="col" className="px-3 py-2 text-left font-bold">Typical position (2026)</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Main intake</td><td className="px-3 py-2 align-top">October (winter semester); some programmes also admit in February</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tuition for international students</td><td className="px-3 py-2 align-top">Roughly EUR 1,500 – 5,000 a year for most programmes; EUR 5,000 – 9,000 for English-taught medicine</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Monthly living cost</td><td className="px-3 py-2 align-top">EUR 350 – 700, with Belgrade at the higher end</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Main scholarship</td><td className="px-3 py-2 align-top">World in Serbia (Government of Serbia, Ministry of Education), plus university fee reductions</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Visa route</td><td className="px-3 py-2 align-top">D-visa from a Serbian mission, then temporary residence permit in Serbia, renewed yearly</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Work during study</td><td className="px-3 py-2 align-top">Up to 16 hours a week for students with regulated study residence (confirm current rule)</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Schengen status</td><td className="px-3 py-2 align-top">Not in Schengen; EU candidate country</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 EUR = about RSD 117 = about Tk 140 and are indicative planning estimates for 2026–2027, based on published university pages and Serbian official guidance. Fees, funds rules and exchange rates change, so always confirm with the university, the Serbian Ministry of Interior (mup.gov.rs) and an Eammu Holidays counselor before paying anything.</p>
</section>
<section id="six-steps-from-dhaka-to-belgrade" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Six steps from Dhaka to Belgrade</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Check eligibility with <Link href="/study/serbia/admission-requirements-in-serbia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link> and <Link href="/study/serbia/degree-recognition-and-eligibility-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">degree recognition</Link>.</li><li>Shortlist with <Link href="/study/serbia/top-universities-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities</Link> and <Link href="/study/serbia/cheapest-universities-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cheapest universities</Link>.</li><li>Choose funding: <Link href="/study/serbia/world-in-serbia-scholarship-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">World in Serbia</Link>, a fee waiver or self-financed study.</li><li>Apply using the <Link href="/study/serbia/how-to-apply-to-serbian-universities" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">step-by-step application guide</Link> and prepare for any <Link href="/study/serbia/entrance-exams-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">entrance exam</Link>.</li><li>Collect papers with the <Link href="/study/serbia/serbia-student-documents-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">documents checklist</Link> and plan funds under <Link href="/study/serbia/bank-solvency-requirements-for-serbia-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link>.</li><li>Apply for the D-visa and residence permit via the <Link href="/study/serbia/serbia-d-visa-and-temporary-residence-application-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">visa application guide</Link> and organise <Link href="/study/serbia/student-accommodation-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">accommodation</Link>.</li></ol>
</section>
<section id="fields-bangladeshi-students-search-for-most" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Fields Bangladeshi students search for most</h2>
<p className="mt-4 leading-7 text-slate-700">Medicine and dentistry draw the most interest, followed by IT, engineering and business. See <Link href="/study/serbia/mbbs-and-medical-degrees-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">medicine, dentistry and pharmacy</Link>, <Link href="/study/serbia/cse-and-it-courses-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT courses</Link>, <Link href="/study/serbia/engineering-courses-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">engineering courses</Link> and <Link href="/study/serbia/mba-and-business-degrees-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MBA and business degrees</Link>. For research careers read <Link href="/study/serbia/masters-and-phd-in-serbia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">master&apos;s and PhD study</Link>.</p>
</section>
<section id="eligibility-questions-we-hear-every-week" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Eligibility questions we hear every week</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Can I go after SSC? See <Link href="/study/serbia/study-in-serbia-after-ssc" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Serbia after SSC</Link> and <Link href="/study/serbia/foundation-year-and-serbian-language-courses-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">preparatory options</Link>.</li><li>Do I need IELTS? See <Link href="/study/serbia/study-in-serbia-without-ielts" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Serbia without IELTS</Link>.</li><li>I have a study gap. See <Link href="/study/serbia/study-gap-accepted-universities-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study gap accepted universities</Link>.</li><li>I hold a diploma. See <Link href="/study/serbia/study-in-serbia-after-diploma" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Serbia after diploma</Link>.</li><li>Can my family join me? See <Link href="/study/serbia/bring-family-to-serbia-as-a-student" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">family and dependents</Link>.</li></ul>
</section>
<section id="avoiding-scams" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Avoiding scams</h2>
<p className="mt-4 leading-7 text-slate-700">No agent can sell a government scholarship or guarantee a visa. Verify every offer on the university&apos;s own website, confirm that the institution and programme are accredited (see <Link href="/study/serbia/public-vs-private-universities-in-serbia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">public vs private universities</Link>), and read <Link href="/study/serbia/serbia-student-visa-refusal-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">common refusal reasons</Link> before paying anyone. Eammu Holidays also publishes a parallel set of <Link href="/study/hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Study in Hungary guides</Link> if you want to compare destinations.</p>
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

          <section className="mt-14" aria-labelledby="directory-heading">
            <h2 id="directory-heading" className="text-2xl font-bold text-emerald-900">Directory of all Serbia study guides</h2>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              {NAV.map((g) => (
                <div key={g.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-emerald-900">{g.label}</h3>
                  <ul className="mt-3 space-y-1 text-sm">
                    {g.pages.map((pg) => (
                      <li key={pg.href}><Link href={pg.href} className="text-emerald-800 hover:underline">{pg.label}</Link></li>
                    ))}
                  </ul>
                </div>
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
