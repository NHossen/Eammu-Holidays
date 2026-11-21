import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/cheapest-universities-in-hungary';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Cheapest Universities in Hungary 2026 for Bangladeshis",
  "description": "How to find the cheapest universities in Hungary in 2026: low-fee regional public universities, hidden costs and a checklist for Bangladeshi students.",
  "keywords": [
    "cheapest universities in Hungary",
    "low cost universities Hungary",
    "affordable study Hungary Bangladesh"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/cheapest-universities-in-hungary"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Cheapest Universities in Hungary 2026 for Bangladeshis",
    "description": "How to find the cheapest universities in Hungary in 2026: low-fee regional public universities, hidden costs and a checklist for Bangladeshi students.",
    "url": "https://eammu.com/study/hungary/cheapest-universities-in-hungary",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Cheapest Universities in Hungary 2026 for Bangladeshis",
    "description": "How to find the cheapest universities in Hungary in 2026: low-fee regional public universities, hidden costs and a checklist for Bangladeshi students."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Cheapest Universities", "href": "/study/hungary/cheapest-universities-in-hungary"}];
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
    "href": "/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students",
    "title": "Tuition Fees in Hungary for Bangladeshi Students in EUR and BDT",
    "description": "Tuition fees in Hungary for Bangladeshi students in 2026: bachelor, master, PhD and medicine fees in EUR and BDT, plus scholarship savings."
  },
  {
    "href": "/study/hungary/study-in-debrecen",
    "title": "Study in Debrecen for Bangladeshi Students: University, Costs, Life",
    "description": "Study in Debrecen in 2026: University of Debrecen, medicine and engineering, rent, student life and costs for Bangladeshi students."
  },
  {
    "href": "/study/hungary/study-in-szeged-pecs-and-other-cities",
    "title": "Study in Szeged, Pécs, Győr and Miskolc: Hungary's Regional University Cities",
    "description": "Compare Szeged, Pécs, Győr, Miskolc and Veszprém in 2026: universities, costs and student life for Bangladeshi students."
  },
  {
    "href": "/study/hungary/scholarships-in-hungary-for-bangladeshi-students",
    "title": "Scholarships in Hungary for Bangladeshi Students: Complete Overview",
    "description": "Scholarships in Hungary for Bangladeshi students in 2026: Stipendium Hungaricum, university scholarships, PhD funding and how to avoid scholarship scams."
  }
];
const FAQS = [
  {
    "q": "Which is the cheapest university in Hungary?",
    "a": "It changes by programme and year. Compare official fees across regional public universities and add living costs."
  },
  {
    "q": "Are Hungarian universities cheaper than Finnish ones?",
    "a": "Generally yes for tuition and living costs, but it depends on the degree. See our Hungary vs Finland vs Germany comparison."
  },
  {
    "q": "Are cheap private colleges worth it?",
    "a": "Only if the institution is state-recognised and the programme is genuine. Check carefully."
  },
  {
    "q": "Can I get a fee waiver?",
    "a": "Some universities offer discounts or merit scholarships. Ask admissions directly."
  },
  {
    "q": "Is Debrecen cheaper than Budapest?",
    "a": "Usually yes for rent and daily costs, and many students prefer its campus atmosphere."
  },
  {
    "q": "Does cheap tuition affect visa approval?",
    "a": "No, but you must still prove sufficient funds and genuine study intent."
  },
  {
    "q": "Is cheaper tuition a sign of lower quality?",
    "a": "Not necessarily. Compare accreditation, staff, facilities and outcomes rather than price alone."
  },
  {
    "q": "Can I switch to a cheaper city later?",
    "a": "Transfers are complex; choose carefully at the start."
  },
  {
    "q": "Are scholarships easier at cheaper universities?",
    "a": "Not necessarily; scholarship selection depends on the programme and applicant pool."
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
          "name": "Cheapest Universities",
          "item": "https://eammu.com/study/hungary/cheapest-universities-in-hungary"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Cheapest Universities in Hungary for Bangladeshi Students (2026)",
      "description": "How to find the cheapest universities in Hungary in 2026: low-fee regional public universities, hidden costs and a checklist for Bangladeshi students.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/cheapest-universities-in-hungary",
      "keywords": "cheapest universities in Hungary, low cost universities Hungary, affordable study Hungary Bangladesh",
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
          "name": "Which is the cheapest university in Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It changes by programme and year. Compare official fees across regional public universities and add living costs."
          }
        },
        {
          "@type": "Question",
          "name": "Are Hungarian universities cheaper than Finnish ones?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally yes for tuition and living costs, but it depends on the degree. See our Hungary vs Finland vs Germany comparison."
          }
        },
        {
          "@type": "Question",
          "name": "Are cheap private colleges worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only if the institution is state-recognised and the programme is genuine. Check carefully."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a fee waiver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some universities offer discounts or merit scholarships. Ask admissions directly."
          }
        },
        {
          "@type": "Question",
          "name": "Is Debrecen cheaper than Budapest?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually yes for rent and daily costs, and many students prefer its campus atmosphere."
          }
        },
        {
          "@type": "Question",
          "name": "Does cheap tuition affect visa approval?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, but you must still prove sufficient funds and genuine study intent."
          }
        },
        {
          "@type": "Question",
          "name": "Is cheaper tuition a sign of lower quality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Compare accreditation, staff, facilities and outcomes rather than price alone."
          }
        },
        {
          "@type": "Question",
          "name": "Can I switch to a cheaper city later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Transfers are complex; choose carefully at the start."
          }
        },
        {
          "@type": "Question",
          "name": "Are scholarships easier at cheaper universities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily; scholarship selection depends on the programme and applicant pool."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Cheapest Universities in Hungary for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Low fees are only half the story. Here is how to find affordable Hungarian universities without hidden surprises.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Regional public universities usually combine lower tuition with lower rents.</li><li>Do not rank by tuition alone: add rent, travel and fees.</li><li>Fees change, so verify on the official programme page.</li><li>Avoid unrecognised private colleges.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#where-to-look-first" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Where to look first</a></li><li><a href="#total-cost-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Total-cost checklist</a></li><li><a href="#cheaper-routes" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cheaper routes</a></li><li><a href="#red-flags" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Red flags</a></li><li><a href="#cost-comparison-framework" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cost comparison framework</a></li><li><a href="#affordable-programme-types" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Affordable programme types</a></li><li><a href="#cheap-does-not-mean-easy" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cheap does not mean easy</a></li></ol>
          </nav>

          <article>
<section id="where-to-look-first" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Where to look first</h2>
<p className="mt-4 leading-7 text-slate-700">Universities outside Budapest, such as the University of Debrecen, University of Szeged, University of Pécs, University of Miskolc, Széchenyi István University in Győr and the University of Pannonia in Veszprém, often offer a better total-cost balance. Compare them against Budapest institutions in <Link href="/study/hungary/top-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Hungary</Link>.</p>
</section>
<section id="total-cost-checklist" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Total-cost checklist</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Annual tuition on the official programme page.</li><li>Application and registration fees.</li><li>Dormitory availability and price.</li><li>City rent and transport costs from <Link href="/study/hungary/cost-of-living-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living</Link>.</li><li>Scholarship or fee-waiver options.</li><li>Part-time job market in the city, within <Link href="/study/hungary/part-time-job-and-post-study-work-rules-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student work rules</Link>.</li></ol>
</section>
<section id="cheaper-routes" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Cheaper routes</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Stipendium Hungaricum: see <Link href="/study/hungary/stipendium-hungaricum-scholarship-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the guide</Link>.</li><li>University merit scholarships and fee discounts.</li><li>Programmes taught at regional campuses.</li><li>Master&apos;s and PhD funding, see <Link href="/study/hungary/masters-and-phd-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">master&apos;s and PhD</Link>.</li></ul>
</section>
<section id="red-flags" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Red flags</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Fees much lower than every comparable programme.</li><li>No named state-recognised institution on your offer.</li><li>Requests to pay agents instead of the university.</li><li>Promises of work permits or immigration outcomes.</li></ul><p className="mt-4 leading-7 text-slate-700">Read <Link href="/study/hungary/public-vs-private-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">public vs private universities</Link> to understand recognition before you pay.</p>
</section>
<section id="cost-comparison-framework" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Cost comparison framework</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Cost element</th><th scope="col" className="px-3 py-2 text-left font-bold">Budapest-based university</th><th scope="col" className="px-3 py-2 text-left font-bold">Regional university</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Tuition</td><td className="px-3 py-2 align-top">Often higher for popular programmes</td><td className="px-3 py-2 align-top">Often lower or similar</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Rent</td><td className="px-3 py-2 align-top">Highest</td><td className="px-3 py-2 align-top">Lower</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Transport</td><td className="px-3 py-2 align-top">Passes needed, usually affordable</td><td className="px-3 py-2 align-top">Often walkable</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Job market</td><td className="px-3 py-2 align-top">Largest</td><td className="px-3 py-2 align-top">Smaller</td></tr></tbody></table></div>
</section>
<section id="affordable-programme-types" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Affordable programme types</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Humanities and social sciences at regional public universities.</li><li>Business and agricultural programmes.</li><li>Engineering programmes in industrial cities such as Győr and Miskolc.</li><li>Master&apos;s programmes with fee discounts for high grades.</li></ul>
</section>
<section id="cheap-does-not-mean-easy" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Cheap does not mean easy</h2>
<p className="mt-4 leading-7 text-slate-700">Lower cost can come with limitations such as fewer English-taught options, fewer support services or a smaller job market. Read <Link href="/study/hungary/top-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities</Link> and talk to current students before deciding.</p>
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
