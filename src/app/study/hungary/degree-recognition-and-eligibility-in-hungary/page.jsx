import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/degree-recognition-and-eligibility-in-hungary';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Degree Recognition in Hungary for Bangladeshis 2026",
  "description": "Degree recognition and eligibility in Hungary for Bangladeshi students in 2026: attestation, apostille, equivalence and Bangladesh recognition of Hungarian degrees.",
  "keywords": [
    "degree recognition Hungary",
    "apostille Bangladesh Hungary",
    "Hungarian degree recognised Bangladesh",
    "attestation documents Hungary"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/degree-recognition-and-eligibility-in-hungary"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Degree Recognition in Hungary for Bangladeshis 2026",
    "description": "Degree recognition and eligibility in Hungary for Bangladeshi students in 2026: attestation, apostille, equivalence and Bangladesh recognition of Hungarian degrees.",
    "url": "https://eammu.com/study/hungary/degree-recognition-and-eligibility-in-hungary",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Degree Recognition in Hungary for Bangladeshis 2026",
    "description": "Degree recognition and eligibility in Hungary for Bangladeshi students in 2026: attestation, apostille, equivalence and Bangladesh recognition of Hungarian degrees."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Degree Recognition & Eligibility", "href": "/study/hungary/degree-recognition-and-eligibility-in-hungary"}];
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
    "href": "/study/hungary/admission-requirements-in-hungary-for-bangladeshi-students",
    "title": "Admission Requirements in Hungary for Bangladeshi Students",
    "description": "Admission requirements for Hungarian universities in 2026 for Bangladeshi students: HSC, bachelor's, English tests, entrance exams and documents."
  },
  {
    "href": "/study/hungary/hungary-student-documents-checklist",
    "title": "Hungary Student Visa and Admission Documents Checklist for Bangladeshis",
    "description": "Complete documents checklist for Hungary admission and student visa in 2026 for Bangladeshi students: academic, financial, travel and insurance papers."
  },
  {
    "href": "/study/hungary/public-vs-private-universities-in-hungary",
    "title": "Public vs Private Universities in Hungary: Recognition, Fees and Visa Impact",
    "description": "Public, foundation-run, church and private universities in Hungary explained for Bangladeshi students: fees, recognition and residence permit rules."
  },
  {
    "href": "/study/hungary/mbbs-and-medical-degrees-in-hungary",
    "title": "Medicine, Dentistry and Pharmacy in Hungary for Bangladeshi Students",
    "description": "Study medicine (MD), dentistry and pharmacy in Hungary in 2026 for Bangladeshi students: universities, fees, entrance exams and BMDC recognition."
  }
];
const FAQS = [
  {
    "q": "Does Hungary recognise Bangladeshi degrees?",
    "a": "Universities assess them for admission; formal recognition requirements depend on the purpose and institution."
  },
  {
    "q": "Do I need an apostille?",
    "a": "Possibly. Ask the university which route it accepts now that Bangladesh is part of the Apostille Convention."
  },
  {
    "q": "Will my Hungarian degree be valid in Bangladesh?",
    "a": "Often yes for general study, but regulated professions have specific rules. Verify before enrolling."
  },
  {
    "q": "What is equivalence?",
    "a": "A formal decision that your foreign qualification corresponds to a local level."
  },
  {
    "q": "Do translations need to be certified?",
    "a": "Often yes, especially for visa and permit steps."
  },
  {
    "q": "Who can confirm requirements?",
    "a": "The university admissions office and the official visa centre."
  },
  {
    "q": "What is an apostille?",
    "a": "A certificate that authenticates a public document for use in another member country of the Apostille Convention."
  },
  {
    "q": "Is attestation by the Ministry of Education still needed?",
    "a": "It may be for some steps. Confirm with the institution and visa centre."
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
          "name": "Degree Recognition & Eligibility",
          "item": "https://eammu.com/study/hungary/degree-recognition-and-eligibility-in-hungary"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Degree Recognition and Eligibility in Hungary for Bangladeshi Students (2026)",
      "description": "Degree recognition and eligibility in Hungary for Bangladeshi students in 2026: attestation, apostille, equivalence and Bangladesh recognition of Hungarian degrees.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/degree-recognition-and-eligibility-in-hungary",
      "keywords": "degree recognition Hungary, apostille Bangladesh Hungary, Hungarian degree recognised Bangladesh, attestation documents Hungary",
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
          "name": "Does Hungary recognise Bangladeshi degrees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Universities assess them for admission; formal recognition requirements depend on the purpose and institution."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an apostille?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possibly. Ask the university which route it accepts now that Bangladesh is part of the Apostille Convention."
          }
        },
        {
          "@type": "Question",
          "name": "Will my Hungarian degree be valid in Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often yes for general study, but regulated professions have specific rules. Verify before enrolling."
          }
        },
        {
          "@type": "Question",
          "name": "What is equivalence?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A formal decision that your foreign qualification corresponds to a local level."
          }
        },
        {
          "@type": "Question",
          "name": "Do translations need to be certified?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often yes, especially for visa and permit steps."
          }
        },
        {
          "@type": "Question",
          "name": "Who can confirm requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The university admissions office and the official visa centre."
          }
        },
        {
          "@type": "Question",
          "name": "What is an apostille?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A certificate that authenticates a public document for use in another member country of the Apostille Convention."
          }
        },
        {
          "@type": "Question",
          "name": "Is attestation by the Ministry of Education still needed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It may be for some steps. Confirm with the institution and visa centre."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Degree Recognition and Eligibility in Hungary for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Recognition works in two directions: your Bangladeshi papers in Hungary, and your Hungarian degree back home.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Hungarian universities usually assess whether your Bangladeshi qualification meets entry requirements themselves.</li><li>Bangladesh joined the Hague Apostille Convention in 2025, which may simplify document legalisation.</li><li>Professional fields such as medicine and engineering have regulators with their own rules.</li><li>Ask each university which attestation route it accepts.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#bangladeshi-qualifications-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bangladeshi qualifications in Hungary</a></li><li><a href="#attestation-and-apostille" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Attestation and apostille</a></li><li><a href="#hungarian-degrees-in-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Hungarian degrees in Bangladesh</a></li><li><a href="#choose-recognised-institutions" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Choose recognised institutions</a></li><li><a href="#recognition-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Recognition checklist</a></li><li><a href="#special-cases" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Special cases</a></li><li><a href="#timeline-for-recognition-tasks" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Timeline for recognition tasks</a></li></ol>
          </nav>

          <article>
<section id="bangladeshi-qualifications-in-hungary" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Bangladeshi qualifications in Hungary</h2>
<p className="mt-4 leading-7 text-slate-700">Universities assess eligibility based on certificate level, subjects, grades and years of schooling. Some may ask for official verification or recognition by a Hungarian authority. Read <Link href="/study/hungary/admission-requirements-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link> first.</p>
</section>
<section id="attestation-and-apostille" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Attestation and apostille</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Bangladesh became a party to the Hague Apostille Convention in 2025, so many public documents can be apostilled instead of going through consular legalisation.</li><li>Hungary is also a party, but each institution may ask for specific steps.</li><li>Confirm the accepted route in writing with the university or visa centre.</li></ul><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Rules on attestation change. Treat this page as orientation and confirm with the university and Hungarian authorities.</p>
</section>
<section id="hungarian-degrees-in-bangladesh" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Hungarian degrees in Bangladesh</h2>
<p className="mt-4 leading-7 text-slate-700">For jobs and further study in Bangladesh, recognition is checked by the relevant bodies, such as UGC procedures for academic equivalence or professional councils for medicine, dentistry and engineering. Check before you enrol, especially for <Link href="/study/hungary/mbbs-and-medical-degrees-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">medical degrees</Link> and <Link href="/study/hungary/engineering-courses-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">engineering</Link>.</p>
</section>
<section id="choose-recognised-institutions" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Choose recognised institutions</h2>
<p className="mt-4 leading-7 text-slate-700">Only state-recognised institutions qualify for the study residence permit; see <Link href="/study/hungary/public-vs-private-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">public vs private universities</Link>.</p>
</section>
<section id="recognition-checklist" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Recognition checklist</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Confirm the university&apos;s requirement for your qualification.</li><li>Request a written statement on required attestation.</li><li>Gather originals and certified translations.</li><li>Check regulator rules for your profession.</li><li>Keep copies of all official letters.</li></ol>
</section>
<section id="special-cases" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Special cases</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Medical and dental graduates: professional councils set licensing rules.</li><li>Engineering graduates: check professional registration requirements.</li><li>Teachers and lawyers: specific local rules apply.</li></ul>
</section>
<section id="timeline-for-recognition-tasks" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Timeline for recognition tasks</h2>
<p className="mt-4 leading-7 text-slate-700">Start verification and attestation at least three months before your application deadline, since several offices may be involved and delays are common. Order extra certified copies so you do not repeat the process for visa and enrolment.</p>
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
