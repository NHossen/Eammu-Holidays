import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/uk/study-in-uk-from-bangladesh';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in UK from Bangladesh 2026 | Eammu Holidays",
  "description": "Step-by-step 2026 guide to study in the UK from Bangladesh: universities, tuition in BDT, CAS, Student visa, funds, scholarships and Graduate Route changes.",
  "alternates": {
    "canonical": "https://eammu.com/study/uk/study-in-uk-from-bangladesh"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in UK from Bangladesh 2026 | Eammu Holidays",
    "description": "Step-by-step 2026 guide to study in the UK from Bangladesh: universities, tuition in BDT, CAS, Student visa, funds, scholarships and Graduate Route changes.",
    "url": "https://eammu.com/study/uk/study-in-uk-from-bangladesh",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in UK from Bangladesh 2026 | Eammu Holidays",
    "description": "Step-by-step 2026 guide to study in the UK from Bangladesh: universities, tuition in BDT, CAS, Student visa, funds, scholarships and Graduate Route changes."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "UK", "href": "/study/uk"}, {"name": "Study from Bangladesh", "href": "/study/uk/study-in-uk-from-bangladesh"}];
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
    "q": "Is it harder for Bangladeshi students to study in the UK in 2026?",
    "a": "Yes. Visa refusal rates for Bangladeshi applicants have been reported as high, sponsor universities face stricter compliance limits, and several have paused or restricted Bangladesh recruitment. Strong, genuine and well-documented cases are still approved."
  },
  {
    "q": "How much does it cost to study in the UK from Bangladesh?",
    "a": "Plan roughly £22,000 to £45,000 for a one-year taught master including tuition, living costs and visa charges, and more for a three-year bachelor. Cost depends heavily on the university and whether you study in London."
  },
  {
    "q": "Which intake is best?",
    "a": "September is the main intake with the most courses and scholarships. January suits some master programmes but has fewer courses and awards."
  },
  {
    "q": "Can I work while studying in the UK?",
    "a": "Degree-level students can generally work up to 20 hours a week in term and full time in official vacations, if their visa and course allow. Work should not be your plan for paying tuition."
  },
  {
    "q": "Can I bring my family?",
    "a": "Dependants are generally not allowed for taught master students. Only students on postgraduate research courses and some government-funded students can usually bring dependants."
  },
  {
    "q": "Do I need IELTS to apply?",
    "a": "Not always. Many universities accept other tests or run their own assessments, but you must meet B2-level English for degree study. See our guide on studying without IELTS."
  },
  {
    "q": "How early should my sponsor prepare financial documents?",
    "a": "At least two to three months before applying, so that funds are held for the full 28 days with clean source-of-funds records."
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
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Study from Bangladesh",
          "item": "https://eammu.com/study/uk/study-in-uk-from-bangladesh"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in the UK from Bangladesh: Complete 2026 Guide",
      "description": "Step-by-step 2026 guide to study in the UK from Bangladesh: universities, tuition in BDT, CAS, Student visa, funds, scholarships and Graduate Route changes.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/uk/study-in-uk-from-bangladesh",
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
          "name": "Is it harder for Bangladeshi students to study in the UK in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Visa refusal rates for Bangladeshi applicants have been reported as high, sponsor universities face stricter compliance limits, and several have paused or restricted Bangladesh recruitment. Strong, genuine and well-documented cases are still approved."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to study in the UK from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plan roughly £22,000 to £45,000 for a one-year taught master including tuition, living costs and visa charges, and more for a three-year bachelor. Cost depends heavily on the university and whether you study in London."
          }
        },
        {
          "@type": "Question",
          "name": "Which intake is best?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "September is the main intake with the most courses and scholarships. January suits some master programmes but has fewer courses and awards."
          }
        },
        {
          "@type": "Question",
          "name": "Can I work while studying in the UK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Degree-level students can generally work up to 20 hours a week in term and full time in official vacations, if their visa and course allow. Work should not be your plan for paying tuition."
          }
        },
        {
          "@type": "Question",
          "name": "Can I bring my family?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dependants are generally not allowed for taught master students. Only students on postgraduate research courses and some government-funded students can usually bring dependants."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need IELTS to apply?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not always. Many universities accept other tests or run their own assessments, but you must meet B2-level English for degree study. See our guide on studying without IELTS."
          }
        },
        {
          "@type": "Question",
          "name": "How early should my sponsor prepare financial documents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At least two to three months before applying, so that funds are held for the full 28 days with clean source-of-funds records."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in the UK from Bangladesh: Complete 2026 Guide</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">How Bangladeshi students actually get into UK universities in 2026: costs in BDT, the CAS and visa steps, funding, post-study work and the tougher compliance climate.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Read this first: the honest picture</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li><strong>Compliance pressure:</strong> universities must keep refusal, enrolment and completion rates within tight limits, so they scrutinise applicants from higher-risk countries, including Bangladesh.</li><li><strong>Cost:</strong> a one-year master is shorter than elsewhere, but tuition, the health surcharge and rising funds requirements are significant.</li><li><strong>Funds rule:</strong> from 30 November 2026 you must show higher maintenance funds held for 28 days; see <Link href="/study/uk/maintenance-funds-and-28-day-rule-for-uk-student-visa" className={linkClass}>maintenance funds guide</Link>.</li><li><strong>Post-study work:</strong> the Graduate Route shrinks to 18 months for most applicants from 1 January 2027; see <Link href="/study/uk/graduate-route-and-post-study-work-in-uk" className={linkClass}>Graduate Route guide</Link>.</li><li><strong>No guarantees:</strong> nobody can guarantee a CAS, a scholarship or a visa. Be careful with anyone who does; see <Link href="/study/uk/avoid-scams-and-agent-risks-in-uk-admissions" className={linkClass}>scam and agent risks</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Why Bangladeshi students consider the UK</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>One-year taught master degrees save time and living costs compared with two-year programmes elsewhere.</li><li>Globally recognised universities and strong research in engineering, business, health, law and the sciences.</li><li>Prestigious funding such as Chevening, GREAT and Commonwealth awards; see <Link href="/study/uk/scholarships-in-uk-for-bangladeshi-students" className={linkClass}>UK scholarships</Link>.</li><li>Established Bangladeshi communities in London, Birmingham, Manchester and other cities; see <Link href="/study/uk/best-cities-to-study-in-uk" className={linkClass}>best cities to study in the UK</Link>.</li><li>Many universities assess English themselves or accept several tests; see <Link href="/study/uk/study-in-uk-without-ielts" className={linkClass}>study in the UK without IELTS</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Your step-by-step journey</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Profile check and honest budget; see <Link href="/study/uk/admission-requirements-in-uk-for-bangladeshi-students" className={linkClass}>admission requirements</Link>.</li><li>Shortlist universities and funding; see <Link href="/study/uk/top-universities-in-uk" className={linkClass}>top universities</Link> and <Link href="/study/uk/cheapest-universities-in-uk" className={linkClass}>affordable universities</Link>.</li><li>Prepare English evidence and documents; see <Link href="/study/uk/ielts-ukvi-pte-and-english-tests-for-uk" className={linkClass}>English tests</Link>.</li><li>Apply through UCAS or directly; see <Link href="/study/uk/ucas-application-guide-for-bangladeshi-students" className={linkClass}>UCAS guide</Link> and <Link href="/study/uk/postgraduate-direct-application-guide-for-uk" className={linkClass}>postgraduate guide</Link>.</li><li>Accept your offer, pay the deposit and receive the CAS; see <Link href="/study/uk/cas-explained-for-uk-student-visa" className={linkClass}>CAS explained</Link>.</li><li>Prepare funds and apply for the Student visa; see <Link href="/study/uk/uk-student-visa-requirements-bangladesh" className={linkClass}>visa requirements</Link>.</li><li>Book biometrics, complete the TB test and wait for the decision; see <Link href="/study/uk/tb-test-biometrics-and-vfs-for-bangladesh" className={linkClass}>TB test and biometrics</Link>.</li><li>Plan arrival; see <Link href="/study/uk/pre-departure-checklist-for-uk-students" className={linkClass}>pre-departure checklist</Link>.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Indicative yearly budget snapshot (GBP and BDT)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">GBP</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT (about Tk 165 per £)</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor tuition per year (international)</td><td className="px-3 py-2 align-top">£15,000 – £35,000</td><td className="px-3 py-2 align-top">Tk 24.8 – 57.8 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Taught master tuition (whole degree)</td><td className="px-3 py-2 align-top">£15,000 – £35,000</td><td className="px-3 py-2 align-top">Tk 24.8 – 57.8 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs per year outside London</td><td className="px-3 py-2 align-top">£12,000 – £18,000</td><td className="px-3 py-2 align-top">Tk 19.8 – 29.7 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs per year in London</td><td className="px-3 py-2 align-top">£16,000 – £24,000</td><td className="px-3 py-2 align-top">Tk 26.4 – 39.6 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Student visa fee</td><td className="px-3 py-2 align-top">£558</td><td className="px-3 py-2 align-top">Tk 92,070</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Health surcharge per year of visa</td><td className="px-3 py-2 align-top">£776</td><td className="px-3 py-2 align-top">Tk 1.3 lakh</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 GBP = about Tk 165 and are indicative estimates for the 2026–2027 intake. Fees, scholarship rules, test dates, visa policy and exchange rates change, so always confirm with the university, official US government sources or an Eammu Holidays counselor before paying anything.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Mistakes we see most often</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Applying late, then rushing the CAS and visa funds.</li><li>Choosing a university only because it is easy to get into.</li><li>Showing funds for fewer than 28 days or from unexplained sources.</li><li>Using an agent who submits unrealistic or copied documents.</li><li>Underestimating the interview and credibility checks.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">UK compared with other destinations</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Factor</th><th scope="col" className="px-3 py-2 text-left font-bold">UK</th><th scope="col" className="px-3 py-2 text-left font-bold">What to weigh</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Degree length</td><td className="px-3 py-2 align-top">One-year taught master, three-year bachelor</td><td className="px-3 py-2 align-top">Lower total time and living cost</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Visa</td><td className="px-3 py-2 align-top">CAS, funds for 28 days, genuine student test</td><td className="px-3 py-2 align-top">Documents and consistency</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Work</td><td className="px-3 py-2 align-top">20 hours a week in term, Graduate Route after study</td><td className="px-3 py-2 align-top">Shorter post-study period from 2027</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Funding</td><td className="px-3 py-2 align-top">Chevening, Commonwealth, GREAT and university awards</td><td className="px-3 py-2 align-top">Early applications</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Risk</td><td className="px-3 py-2 align-top">Sponsor compliance pressure for Bangladesh</td><td className="px-3 py-2 align-top">Confirm the university accepts your application</td></tr></tbody></table></div>
<p className="mt-4 leading-7 text-slate-700">For another view, see <Link href="/study/usa" className={linkClass}>study in the USA</Link> or <Link href="/study/china" className={linkClass}>study in China</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">A realistic example: one-year master budget</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">Lower-cost city</th><th scope="col" className="px-3 py-2 text-left font-bold">London</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tuition</td><td className="px-3 py-2 align-top">£17,000</td><td className="px-3 py-2 align-top">£24,000</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living for 12 months</td><td className="px-3 py-2 align-top">£14,000</td><td className="px-3 py-2 align-top">£20,000</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Visa fee and health surcharge</td><td className="px-3 py-2 align-top">£1,334</td><td className="px-3 py-2 align-top">£1,334</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Estimated total</td><td className="px-3 py-2 align-top">£32,334</td><td className="px-3 py-2 align-top">£45,334</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Estimated total in BDT</td><td className="px-3 py-2 align-top">Tk 53.4 lakh</td><td className="px-3 py-2 align-top">Tk 74.8 lakh</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 GBP = about Tk 165 and are indicative estimates for the 2026–2027 intake. Fees, scholarship rules, test dates, visa policy and exchange rates change, so always confirm with the university, official US government sources or an Eammu Holidays counselor before paying anything.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Official sources to confirm this information</h2>
<p className="mt-4 leading-7 text-slate-700">Policies, fees, funds amounts and university recruitment rules change. Before you act on anything on this page, check the current version at:</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>The university&apos;s official admissions and fees pages</li><li>gov.uk student visa and Immigration Health Surcharge pages</li><li>British Council Study UK (study-uk.britishcouncil.org)</li><li>Chevening (chevening.org) and Commonwealth Scholarship Commission websites</li></ul>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays reviews these pages regularly, last updated November 2026, but official sources always take priority.</p>
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
