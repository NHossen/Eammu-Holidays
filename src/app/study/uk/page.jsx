import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/uk';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in the UK 2026: Guide for Bangladeshis | Eammu Holidays",
  "description": "Complete 2026 guide to studying in the UK for Bangladeshi students: tuition in BDT, Chevening, CAS, Student visa funds, Graduate Route and counseling nationwide.",
  "alternates": {
    "canonical": "https://eammu.com/study/uk"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in the UK 2026: Guide for Bangladeshis | Eammu Holidays",
    "description": "Complete 2026 guide to studying in the UK for Bangladeshi students: tuition in BDT, Chevening, CAS, Student visa funds, Graduate Route and counseling nationwide.",
    "url": "https://eammu.com/study/uk",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in the UK 2026: Guide for Bangladeshis | Eammu Holidays",
    "description": "Complete 2026 guide to studying in the UK for Bangladeshi students: tuition in BDT, Chevening, CAS, Student visa funds, Graduate Route and counseling nationwide."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "UK", "href": "/study/uk"}];
const NAV = [
  {
    "label": "UK Hub",
    "pages": [
      {
        "href": "/study/uk",
        "label": "Study in UK Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/uk/study-in-uk-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/uk/study-in-uk-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/uk/tuition-fees-in-uk-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/uk/cost-of-living-in-uk-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/uk/cheapest-universities-in-uk",
        "label": "Affordable Universities"
      },
      {
        "href": "/study/uk/top-universities-in-uk",
        "label": "Top Universities"
      },
      {
        "href": "/study/uk/russell-group-vs-modern-universities-in-uk",
        "label": "Russell Group vs Modern"
      },
      {
        "href": "/study/uk/foundation-and-pathway-programmes-in-uk",
        "label": "Foundation and Pathway"
      },
      {
        "href": "/study/uk/scholarships-in-uk-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/uk/chevening-scholarship-guide-for-bangladeshi-students",
        "label": "Chevening Guide"
      },
      {
        "href": "/study/uk/commonwealth-and-great-scholarships-for-bangladesh",
        "label": "Commonwealth and GREAT"
      },
      {
        "href": "/study/uk/admission-requirements-in-uk-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/uk/study-gap-accepted-universities-in-uk",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/uk/study-in-uk-after-hsc",
        "label": "After HSC"
      },
      {
        "href": "/study/uk/study-in-uk-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/uk/uk-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Applications, Tests & Offers",
    "pages": [
      {
        "href": "/study/uk/ucas-application-guide-for-bangladeshi-students",
        "label": "UCAS Application Guide"
      },
      {
        "href": "/study/uk/postgraduate-direct-application-guide-for-uk",
        "label": "Postgraduate Application Guide"
      },
      {
        "href": "/study/uk/personal-statement-and-references-guide-for-uk",
        "label": "Personal Statement and References"
      },
      {
        "href": "/study/uk/ielts-ukvi-pte-and-english-tests-for-uk",
        "label": "IELTS, PTE and English Tests"
      },
      {
        "href": "/study/uk/degree-recognition-and-uk-enic-equivalence",
        "label": "Degree Recognition and UK ENIC"
      },
      {
        "href": "/study/uk/conditional-and-unconditional-offers-explained",
        "label": "Offers Explained"
      }
    ]
  },
  {
    "label": "Programmes & Student Life",
    "pages": [
      {
        "href": "/study/uk/cse-and-it-courses-in-uk",
        "label": "CSE and IT Courses"
      },
      {
        "href": "/study/uk/masters-in-uk-for-bangladeshi-students",
        "label": "Master's in UK"
      },
      {
        "href": "/study/uk/mba-in-uk-for-bangladeshi-students",
        "label": "MBA in UK"
      },
      {
        "href": "/study/uk/phd-in-uk-for-bangladeshi-students",
        "label": "PhD in UK"
      },
      {
        "href": "/study/uk/medicine-and-plab-pathway-in-uk-for-bangladeshi-students",
        "label": "Medicine and PLAB Pathway"
      },
      {
        "href": "/study/uk/engineering-courses-in-uk-for-bangladeshi-students",
        "label": "Engineering Courses"
      },
      {
        "href": "/study/uk/business-finance-and-data-analytics-in-uk",
        "label": "Business, Finance and Analytics"
      },
      {
        "href": "/study/uk/best-cities-to-study-in-uk",
        "label": "Best Cities to Study"
      },
      {
        "href": "/study/uk/student-accommodation-in-uk",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/uk/halal-food-and-student-life-in-uk-for-bangladeshis",
        "label": "Halal Food and Student Life"
      },
      {
        "href": "/study/uk/nhs-and-immigration-health-surcharge-for-students",
        "label": "NHS and Health Surcharge"
      },
      {
        "href": "/study/uk/banking-and-sending-money-to-uk-from-bangladesh",
        "label": "Banking and Sending Money"
      },
      {
        "href": "/study/uk/avoid-scams-and-agent-risks-in-uk-admissions",
        "label": "Avoid Scams and Agent Risks"
      }
    ]
  },
  {
    "label": "Student Visa, Work & Graduate Route",
    "pages": [
      {
        "href": "/study/uk/uk-student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/uk/cas-explained-for-uk-student-visa",
        "label": "CAS Explained"
      },
      {
        "href": "/study/uk/maintenance-funds-and-28-day-rule-for-uk-student-visa",
        "label": "Maintenance Funds and 28-Day Rule"
      },
      {
        "href": "/study/uk/uk-student-visa-processing-time-and-cost",
        "label": "Visa Time and Cost"
      },
      {
        "href": "/study/uk/uk-student-visa-interview-and-credibility-tips",
        "label": "Credibility Interview Tips"
      },
      {
        "href": "/study/uk/uk-student-visa-refusal-reasons-and-reapplication",
        "label": "Visa Refusal and Reapplication"
      },
      {
        "href": "/study/uk/tb-test-biometrics-and-vfs-for-bangladesh",
        "label": "TB Test and Biometrics"
      },
      {
        "href": "/study/uk/dependants-on-uk-student-visa",
        "label": "Dependants on Student Visa"
      },
      {
        "href": "/study/uk/part-time-work-rules-for-students-in-uk",
        "label": "Part-Time Work Rules"
      },
      {
        "href": "/study/uk/graduate-route-and-post-study-work-in-uk",
        "label": "Graduate Route"
      },
      {
        "href": "/study/uk/uk-student-visa-rule-changes-2026",
        "label": "Visa Rule Changes 2026"
      },
      {
        "href": "/study/uk/pre-departure-checklist-for-uk-students",
        "label": "Pre-Departure Checklist"
      },
      {
        "href": "/study/uk/maintaining-student-visa-status-in-uk",
        "label": "Maintaining Visa Status"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/uk/bangladesh-offices",
        "label": "Bangladesh Offices and Support"
      },
      {
        "href": "/study/uk/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/uk/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/uk/study-in-uk-from-bangladesh",
    "title": "Study in the UK from Bangladesh: Complete 2026 Guide",
    "description": "The full roadmap from profile check to Student visa, with costs in taka."
  },
  {
    "href": "/study/uk/tuition-fees-in-uk-for-bangladeshi-students",
    "title": "Tuition Fees in the UK for Bangladeshi Students (2026, GBP and BDT)",
    "description": "GBP and BDT tuition ranges by level and subject."
  },
  {
    "href": "/study/uk/uk-student-visa-requirements-bangladesh",
    "title": "UK Student Visa Requirements for Bangladeshi Students (2026)",
    "description": "Documents, steps and checks for the Student visa."
  },
  {
    "href": "/study/uk/scholarships-in-uk-for-bangladeshi-students",
    "title": "Scholarships in the UK for Bangladeshi Students (2026-2027)",
    "description": "Chevening, Commonwealth, GREAT and university awards."
  },
  {
    "href": "/study/uk/uk-student-visa-rule-changes-2026",
    "title": "UK Student Visa Rule Changes in 2026: What Bangladeshi Students Should Know",
    "description": "Key 2026 changes and how to plan around them."
  },
  {
    "href": "/study/uk/graduate-route-and-post-study-work-in-uk",
    "title": "Graduate Route and Post-Study Work in the UK: 18 Months from January 2027",
    "description": "Graduate visa length, rules and next steps."
  }
];
const FAQS = [
  {
    "q": "Is studying in the UK a good option for Bangladeshi students in 2026?",
    "a": "It can be, especially for one-year master degrees and scholarship holders, but visa checks are tougher, some universities restrict Bangladeshi applicants and post-study work is shorter. Choose a course that is worth its cost on its own."
  },
  {
    "q": "How much money do I need to study in the UK from Bangladesh?",
    "a": "For a one-year taught master, plan roughly £22,000 to £45,000 including tuition, living costs and visa charges, and more in London. Bachelor degrees last longer and cost more overall."
  },
  {
    "q": "Is there a visa interview?",
    "a": "There is no standard embassy interview for every applicant, but universities and UKVI may interview applicants to test that they are genuine students."
  },
  {
    "q": "Can Eammu Holidays guarantee admission or a visa?",
    "a": "No. No genuine consultancy can guarantee admission, scholarships or visa approval. We provide counselling, shortlisting, document support and credibility interview preparation."
  },
  {
    "q": "When should I start preparing?",
    "a": "Start 9 to 12 months before your intake, earlier if you want Chevening, GREAT or other scholarships."
  },
  {
    "q": "Should I compare the UK with the USA or China?",
    "a": "Yes. Compare total cost, funding, visa difficulty and work rights. Our Study in the USA and Study in China guides on this site help with that comparison."
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
          "name": "UK",
          "item": "https://eammu.com/study/uk"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in the UK 2026: Complete Guide for Bangladeshi Students",
      "description": "Complete 2026 guide to studying in the UK for Bangladeshi students: tuition in BDT, Chevening, CAS, Student visa funds, Graduate Route and counseling nationwide.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/uk",
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
          "name": "Is studying in the UK a good option for Bangladeshi students in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be, especially for one-year master degrees and scholarship holders, but visa checks are tougher, some universities restrict Bangladeshi applicants and post-study work is shorter. Choose a course that is worth its cost on its own."
          }
        },
        {
          "@type": "Question",
          "name": "How much money do I need to study in the UK from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For a one-year taught master, plan roughly £22,000 to £45,000 including tuition, living costs and visa charges, and more in London. Bachelor degrees last longer and cost more overall."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a visa interview?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no standard embassy interview for every applicant, but universities and UKVI may interview applicants to test that they are genuine students."
          }
        },
        {
          "@type": "Question",
          "name": "Can Eammu Holidays guarantee admission or a visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. No genuine consultancy can guarantee admission, scholarships or visa approval. We provide counselling, shortlisting, document support and credibility interview preparation."
          }
        },
        {
          "@type": "Question",
          "name": "When should I start preparing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start 9 to 12 months before your intake, earlier if you want Chevening, GREAT or other scholarships."
          }
        },
        {
          "@type": "Question",
          "name": "Should I compare the UK with the USA or China?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Compare total cost, funding, visa difficulty and work rights. Our Study in the USA and Study in China guides on this site help with that comparison."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in the UK 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in the UK 2026: Complete Guide for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Costs in BDT, UCAS and postgraduate applications, scholarships, the CAS and Student visa, the Graduate Route and honest advice on today&apos;s tougher UK rules.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-22">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in the UK guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 63 UK guides</summary>
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
          <article>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Read this first: what the UK costs and demands</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li><strong>Compliance climate:</strong> universities face strict limits on visa refusals, non-enrolment and dropouts, and Bangladesh has had high reported refusal rates, so expect extra checks.</li><li><strong>Funds:</strong> higher maintenance funds apply from 30 November 2026 and must be held for 28 days; see <Link href="/study/uk/maintenance-funds-and-28-day-rule-for-uk-student-visa" className={linkClass}>maintenance funds guide</Link>.</li><li><strong>Work:</strong> students can work up to 20 hours a week in term, but cannot rely on it to pay tuition; see <Link href="/study/uk/part-time-work-rules-for-students-in-uk" className={linkClass}>part-time work rules</Link>.</li><li><strong>After study:</strong> the Graduate Route is 18 months for most graduates applying from 1 January 2027; see <Link href="/study/uk/graduate-route-and-post-study-work-in-uk" className={linkClass}>Graduate Route guide</Link>.</li><li><strong>Genuineness:</strong> your documents, statement and answers must be real and consistent; see <Link href="/study/uk/avoid-scams-and-agent-risks-in-uk-admissions" className={linkClass}>scam and agent risks</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Why Bangladeshi students consider the UK</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Most taught master degrees last one year, saving time and living costs.</li><li>Strong universities and respected degrees in business, engineering, computing, health and law.</li><li>Scholarships such as Chevening, Commonwealth and GREAT; see <Link href="/study/uk/scholarships-in-uk-for-bangladeshi-students" className={linkClass}>UK scholarships</Link>.</li><li>Established Bangladeshi communities in several UK cities; see <Link href="/study/uk/best-cities-to-study-in-uk" className={linkClass}>best cities to study in the UK</Link>.</li><li>Flexible English evidence at many universities; see <Link href="/study/uk/study-in-uk-without-ielts" className={linkClass}>study in the UK without IELTS</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Where to begin: choose your level and route</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">If you are...</th><th scope="col" className="px-3 py-2 text-left font-bold">Start here</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">After HSC, wanting a bachelor</td><td className="px-3 py-2 align-top"><Link href="/study/uk/study-in-uk-after-hsc" className={linkClass}>Study in the UK after HSC</Link> and <Link href="/study/uk/ucas-application-guide-for-bangladeshi-students" className={linkClass}>UCAS guide</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Needing a foundation year</td><td className="px-3 py-2 align-top"><Link href="/study/uk/foundation-and-pathway-programmes-in-uk" className={linkClass}>Foundation and pathway programmes</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">A diploma holder</td><td className="px-3 py-2 align-top"><Link href="/study/uk/study-in-uk-after-diploma" className={linkClass}>Study in the UK after diploma</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">A graduate wanting a master</td><td className="px-3 py-2 align-top"><Link href="/study/uk/masters-in-uk-for-bangladeshi-students" className={linkClass}>Master&apos;s in the UK</Link> and <Link href="/study/uk/postgraduate-direct-application-guide-for-uk" className={linkClass}>postgraduate guide</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Interested in an MBA</td><td className="px-3 py-2 align-top"><Link href="/study/uk/mba-in-uk-for-bangladeshi-students" className={linkClass}>MBA in the UK</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Aiming for a PhD</td><td className="px-3 py-2 align-top"><Link href="/study/uk/phd-in-uk-for-bangladeshi-students" className={linkClass}>PhD in the UK</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">A doctor or medical student</td><td className="px-3 py-2 align-top"><Link href="/study/uk/medicine-and-plab-pathway-in-uk-for-bangladeshi-students" className={linkClass}>Medicine and PLAB pathway</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Looking for funding</td><td className="px-3 py-2 align-top"><Link href="/study/uk/scholarships-in-uk-for-bangladeshi-students" className={linkClass}>Scholarships</Link> and <Link href="/study/uk/chevening-scholarship-guide-for-bangladeshi-students" className={linkClass}>Chevening guide</Link></td></tr></tbody></table></div>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Indicative cost snapshot (GBP and BDT)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">GBP</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT (about Tk 165 per £)</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Taught master tuition (whole degree)</td><td className="px-3 py-2 align-top">£15,000 – £35,000</td><td className="px-3 py-2 align-top">Tk 24.8 – 57.8 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor tuition per year</td><td className="px-3 py-2 align-top">£15,000 – £35,000</td><td className="px-3 py-2 align-top">Tk 24.8 – 57.8 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs per year outside London</td><td className="px-3 py-2 align-top">£12,000 – £18,000</td><td className="px-3 py-2 align-top">Tk 19.8 – 29.7 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs per year in London</td><td className="px-3 py-2 align-top">£16,000 – £24,000</td><td className="px-3 py-2 align-top">Tk 26.4 – 39.6 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Student visa fee</td><td className="px-3 py-2 align-top">£558</td><td className="px-3 py-2 align-top">Tk 92,070</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Health surcharge per year of visa</td><td className="px-3 py-2 align-top">£776</td><td className="px-3 py-2 align-top">Tk 1.3 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">One-way flight from Dhaka</td><td className="px-3 py-2 align-top">Varies</td><td className="px-3 py-2 align-top">Tk 70,000 – 1.4 lakh</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 GBP = about Tk 165 and are indicative estimates for the 2026–2027 intake. Fees, scholarship rules, test dates, visa policy and exchange rates change, so always confirm with the university, official US government sources or an Eammu Holidays counselor before paying anything.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Your step-by-step journey</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Profile check and honest budget; see <Link href="/study/uk/admission-requirements-in-uk-for-bangladeshi-students" className={linkClass}>admission requirements</Link>.</li><li>Shortlist universities that currently accept Bangladeshi applicants; see <Link href="/study/uk/top-universities-in-uk" className={linkClass}>top universities</Link> and <Link href="/study/uk/cheapest-universities-in-uk" className={linkClass}>affordable universities</Link>.</li><li>Prepare English evidence; see <Link href="/study/uk/ielts-ukvi-pte-and-english-tests-for-uk" className={linkClass}>English tests</Link>.</li><li>Apply and compare offers; see <Link href="/study/uk/conditional-and-unconditional-offers-explained" className={linkClass}>offers explained</Link>.</li><li>Receive the CAS; see <Link href="/study/uk/cas-explained-for-uk-student-visa" className={linkClass}>CAS explained</Link>.</li><li>Prepare funds, TB test and biometrics; see <Link href="/study/uk/tb-test-biometrics-and-vfs-for-bangladesh" className={linkClass}>TB test and biometrics</Link>.</li><li>Apply for the visa and prepare for a credibility interview; see <Link href="/study/uk/uk-student-visa-interview-and-credibility-tips" className={linkClass}>interview tips</Link>.</li><li>Plan arrival; see <Link href="/study/uk/pre-departure-checklist-for-uk-students" className={linkClass}>pre-departure checklist</Link>.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">How Eammu Holidays supports you</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Free profile review and realistic budget in BDT.</li><li>University, scholarship and intake shortlist.</li><li>Document checklists and statement guidance.</li><li>Application tracking and CAS follow-up.</li><li>Funds review and credibility interview practice.</li><li>Pre-departure briefing and arrival tips.</li></ul>
<p className="mt-4 leading-7 text-slate-700">We do not guarantee admission, scholarships or visas. Our role is to help you present an honest, strong and well-prepared case.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Questions Bangladeshi families ask before choosing the UK</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Family concern</th><th scope="col" className="px-3 py-2 text-left font-bold">Honest answer</th><th scope="col" className="px-3 py-2 text-left font-bold">Read</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Can we afford it?</td><td className="px-3 py-2 align-top">Budget tuition, living costs, visa charges and the funds you must hold for 28 days.</td><td className="px-3 py-2 align-top"><Link href="/study/uk/tuition-fees-in-uk-for-bangladeshi-students" className={linkClass}>Tuition fees</Link> and <Link href="/study/uk/maintenance-funds-and-28-day-rule-for-uk-student-visa" className={linkClass}>maintenance funds</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Will the visa be approved?</td><td className="px-3 py-2 align-top">Nobody can promise it. Genuine, consistent documents and a clear study plan matter most.</td><td className="px-3 py-2 align-top"><Link href="/study/uk/uk-student-visa-refusal-reasons-and-reapplication" className={linkClass}>Refusal reasons</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Can the student work to pay fees?</td><td className="px-3 py-2 align-top">Not enough. Hours are capped at 20 a week in term.</td><td className="px-3 py-2 align-top"><Link href="/study/uk/part-time-work-rules-for-students-in-uk" className={linkClass}>Part-time work rules</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Is a UK job likely after graduation?</td><td className="px-3 py-2 align-top">The Graduate Route is shorter from 2027 and Skilled Worker rules are stricter.</td><td className="px-3 py-2 align-top"><Link href="/study/uk/graduate-route-and-post-study-work-in-uk" className={linkClass}>Graduate Route</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Is the university or agent genuine?</td><td className="px-3 py-2 align-top">Verify the sponsor licence and avoid guarantees.</td><td className="px-3 py-2 align-top"><Link href="/study/uk/avoid-scams-and-agent-risks-in-uk-admissions" className={linkClass}>Avoid scams</Link></td></tr></tbody></table></div>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Compare the UK with other destinations</h2>
<p className="mt-4 leading-7 text-slate-700">If you are still choosing a country, compare the UK with <Link href="/study/usa" className={linkClass}>studying in the USA</Link> and <Link href="/study/china" className={linkClass}>studying in China</Link> on total cost, funding, visa difficulty and work rights before you decide.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Official sources to confirm this information</h2>
<p className="mt-4 leading-7 text-slate-700">Policies, fees, funds amounts and university recruitment rules change. Before you act on anything on this page, check the current version at:</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>gov.uk Student visa pages</li><li>British Council Study UK</li><li>The register of licensed Student sponsors</li></ul>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays reviews these pages regularly, last updated November 2026, but official sources always take priority.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Complete Directory: Every UK Study Guide</h2>
<div className="mt-5 grid gap-4 sm:grid-cols-2">{NAV.map((g) => (<div key={g.label} className="rounded-xl border border-slate-200 bg-white p-4"><h3 className="font-bold text-emerald-900">{g.label}</h3><ul className="mt-2 space-y-1 text-sm">{g.pages.map((p) => (<li key={p.href}><Link href={p.href} className={linkClass}>{p.label}</Link></li>))}</ul></div>))}</div>
</section>
          </article>

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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related UK Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in the UK</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and scholarship shortlist, UK Student visa (CAS and funds) preparation and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
