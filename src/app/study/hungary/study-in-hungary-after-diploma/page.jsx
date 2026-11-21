import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/study-in-hungary-after-diploma';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Hungary After Diploma 2026 | Eammu Holidays",
  "description": "Study in Hungary after a Bangladesh diploma in 2026: bachelor's entry, credit transfer, recognition and visa tips for diploma holders.",
  "keywords": [
    "study in Hungary after diploma",
    "diploma holders Hungary bachelor",
    "Bangladesh diploma engineering Hungary"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/study-in-hungary-after-diploma"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Hungary After Diploma 2026 | Eammu Holidays",
    "description": "Study in Hungary after a Bangladesh diploma in 2026: bachelor's entry, credit transfer, recognition and visa tips for diploma holders.",
    "url": "https://eammu.com/study/hungary/study-in-hungary-after-diploma",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Hungary After Diploma 2026 | Eammu Holidays",
    "description": "Study in Hungary after a Bangladesh diploma in 2026: bachelor's entry, credit transfer, recognition and visa tips for diploma holders."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "After Diploma", "href": "/study/hungary/study-in-hungary-after-diploma"}];
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
    "href": "/study/hungary/study-in-hungary-after-ssc",
    "title": "Study in Hungary After SSC: Foundation and Pathway Options",
    "description": "Can you study in Hungary after SSC? Bangladeshi students in 2026: why SSC alone is not enough, foundation routes, HSC and what to do next."
  },
  {
    "href": "/study/hungary/engineering-courses-in-hungary",
    "title": "Engineering Courses in Hungary for Bangladeshi Students",
    "description": "Engineering courses in Hungary for Bangladeshi students in 2026: mechanical, electrical, civil and mechatronics programmes, universities and fees."
  },
  {
    "href": "/study/hungary/degree-recognition-and-eligibility-in-hungary",
    "title": "Degree Recognition and Eligibility in Hungary for Bangladeshi Students",
    "description": "Degree recognition and eligibility in Hungary for Bangladeshi students in 2026: attestation, apostille, equivalence and Bangladesh recognition of Hungarian degrees."
  },
  {
    "href": "/study/hungary/bachelors-in-hungary-for-bangladeshi-students",
    "title": "Bachelor's Degree in Hungary for Bangladeshi Students",
    "description": "Bachelor's degrees in Hungary for Bangladeshi students in 2026: popular courses, entry requirements, fees in BDT and how to apply after HSC."
  }
];
const FAQS = [
  {
    "q": "Can diploma holders study in Hungary?",
    "a": "Often yes, subject to university rules and recognition."
  },
  {
    "q": "Will I get credit for my diploma?",
    "a": "Credit transfer depends on the university and course content."
  },
  {
    "q": "Is a diploma enough for a master's?",
    "a": "No. A master's needs a bachelor's degree or equivalent."
  },
  {
    "q": "Which fields suit diploma holders?",
    "a": "Engineering, IT and applied technical programmes."
  },
  {
    "q": "Do I need HSC as well?",
    "a": "Some universities may ask for SSC plus diploma, others HSC. Check each programme."
  },
  {
    "q": "Can I get a scholarship with a diploma?",
    "a": "Check the current Stipendium Hungaricum call for the required prior qualification."
  },
  {
    "q": "Is a polytechnic diploma accepted?",
    "a": "It can be considered, but each university decides based on level, duration and syllabus."
  },
  {
    "q": "How long will a bachelor's take after a diploma?",
    "a": "It depends on credit transfer; some students enter later semesters, others start at year one."
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
          "name": "After Diploma",
          "item": "https://eammu.com/study/hungary/study-in-hungary-after-diploma"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Hungary After Diploma in Engineering (2026)",
      "description": "Study in Hungary after a Bangladesh diploma in 2026: bachelor's entry, credit transfer, recognition and visa tips for diploma holders.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/study-in-hungary-after-diploma",
      "keywords": "study in Hungary after diploma, diploma holders Hungary bachelor, Bangladesh diploma engineering Hungary",
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
          "name": "Can diploma holders study in Hungary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often yes, subject to university rules and recognition."
          }
        },
        {
          "@type": "Question",
          "name": "Will I get credit for my diploma?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Credit transfer depends on the university and course content."
          }
        },
        {
          "@type": "Question",
          "name": "Is a diploma enough for a master's?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A master's needs a bachelor's degree or equivalent."
          }
        },
        {
          "@type": "Question",
          "name": "Which fields suit diploma holders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Engineering, IT and applied technical programmes."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need HSC as well?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some universities may ask for SSC plus diploma, others HSC. Check each programme."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a scholarship with a diploma?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check the current Stipendium Hungaricum call for the required prior qualification."
          }
        },
        {
          "@type": "Question",
          "name": "Is a polytechnic diploma accepted?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be considered, but each university decides based on level, duration and syllabus."
          }
        },
        {
          "@type": "Question",
          "name": "How long will a bachelor's take after a diploma?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on credit transfer; some students enter later semesters, others start at year one."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Hungary After Diploma in Engineering (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Diploma holders have options, but recognition and credit transfer decide how far you can go.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Four-year diploma holders may be considered for bachelor&apos;s entry, sometimes with credit.</li><li>Recognition and the exact subject match matter most.</li><li>Admission decisions are made by each university.</li><li>Prepare transcripts and syllabus details.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#how-a-diploma-is-viewed" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How a diploma is viewed</a></li><li><a href="#options-for-diploma-holders" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Options for diploma holders</a></li><li><a href="#documents-to-prepare" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Documents to prepare</a></li><li><a href="#visa-angle" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Visa angle</a></li><li><a href="#typical-diploma-pathways" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Typical diploma pathways</a></li><li><a href="#how-to-improve-your-case" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to improve your case</a></li><li><a href="#what-a-strong-diploma-application-includes" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What a strong diploma application includes</a></li></ol>
          </nav>

          <article>
<section id="how-a-diploma-is-viewed" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How a diploma is viewed</h2>
<p className="mt-4 leading-7 text-slate-700">A four-year Diploma in Engineering from the Bangladesh Technical Education Board is a post-SSC qualification. Some Hungarian universities may admit diploma holders to bachelor&apos;s programmes, but conditions differ and credit transfer is not guaranteed. See <Link href="/study/hungary/degree-recognition-and-eligibility-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">degree recognition</Link>.</p>
</section>
<section id="options-for-diploma-holders" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Options for diploma holders</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Apply to a bachelor&apos;s programme in a related field.</li><li>Request credit transfer where the university allows it.</li><li>Use a <Link href="/study/hungary/foundation-year-and-preparatory-courses-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">foundation year</Link> if you need bridging.</li><li>Consider engineering and IT programmes; see <Link href="/study/hungary/engineering-courses-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">engineering courses</Link> and <Link href="/study/hungary/cse-and-it-courses-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT</Link>.</li></ul>
</section>
<section id="documents-to-prepare" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Documents to prepare</h2>
<p className="mt-4 leading-7 text-slate-700">Prepare diploma certificate, transcripts, syllabus, SSC certificate, English proof and motivation letter. For attestation steps see the <Link href="/study/hungary/hungary-student-documents-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">documents checklist</Link>.</p>
</section>
<section id="visa-angle" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Visa angle</h2>
<p className="mt-4 leading-7 text-slate-700">Visa officers look for a logical academic path. Explain why your diploma leads naturally to the chosen programme, and show funds under <Link href="/study/hungary/bank-solvency-requirements-for-hungary-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link>.</p>
</section>
<section id="typical-diploma-pathways" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Typical diploma pathways</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Diploma field</th><th scope="col" className="px-3 py-2 text-left font-bold">Likely Hungarian bachelor&apos;s match</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Computer technology</td><td className="px-3 py-2 align-top">Informatics, software engineering</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Electrical technology</td><td className="px-3 py-2 align-top">Electrical engineering, mechatronics</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Civil technology</td><td className="px-3 py-2 align-top">Civil engineering</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Mechanical technology</td><td className="px-3 py-2 align-top">Mechanical engineering, automotive</td></tr></tbody></table></div>
</section>
<section id="how-to-improve-your-case" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to improve your case</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Show strong diploma grades and practical projects.</li><li>Provide detailed syllabus documents.</li><li>Obtain English evidence.</li><li>Write a motivation letter explaining your technical plan.</li></ul>
</section>
<section id="what-a-strong-diploma-application-includes" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What a strong diploma application includes</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Detailed transcripts with subject names, credits and grades.</li><li>Syllabus summaries for key technical subjects.</li><li>Project or internship evidence.</li><li>English proof and a focused motivation letter.</li><li>A clear explanation of why you want a bachelor&apos;s degree in Hungary.</li></ul>
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
