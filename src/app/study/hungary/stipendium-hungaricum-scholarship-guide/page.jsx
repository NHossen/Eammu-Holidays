import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/stipendium-hungaricum-scholarship-guide';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Stipendium Hungaricum Scholarship for Bangladesh 2026",
  "description": "Stipendium Hungaricum for Bangladeshi students: benefits, how to apply, the Ministry of Education sending partner step, documents and common mistakes.",
  "keywords": [
    "Stipendium Hungaricum Bangladesh",
    "Stipendium Hungaricum application",
    "SH scholarship Bangladesh Ministry of Education",
    "Hungary fully funded scholarship"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/stipendium-hungaricum-scholarship-guide"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Stipendium Hungaricum Scholarship for Bangladesh 2026",
    "description": "Stipendium Hungaricum for Bangladeshi students: benefits, how to apply, the Ministry of Education sending partner step, documents and common mistakes.",
    "url": "https://eammu.com/study/hungary/stipendium-hungaricum-scholarship-guide",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Stipendium Hungaricum Scholarship for Bangladesh 2026",
    "description": "Stipendium Hungaricum for Bangladeshi students: benefits, how to apply, the Ministry of Education sending partner step, documents and common mistakes."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Stipendium Hungaricum Guide", "href": "/study/hungary/stipendium-hungaricum-scholarship-guide"}];
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
    "href": "/study/hungary/stipendium-hungaricum-eligibility-and-deadlines",
    "title": "Stipendium Hungaricum Eligibility, Deadlines and Documents (2026–2027)",
    "description": "Stipendium Hungaricum eligibility, deadlines and documents for Bangladeshi applicants: January deadline, language proof and Ministry of Education step."
  },
  {
    "href": "/study/hungary/scholarships-in-hungary-for-bangladeshi-students",
    "title": "Scholarships in Hungary for Bangladeshi Students: Complete Overview",
    "description": "Scholarships in Hungary for Bangladeshi students in 2026: Stipendium Hungaricum, university scholarships, PhD funding and how to avoid scholarship scams."
  },
  {
    "href": "/study/hungary/how-to-apply-to-hungarian-universities",
    "title": "How to Apply to Hungarian Universities from Bangladesh: Step-by-Step Guide",
    "description": "How to apply to Hungarian universities from Bangladesh in 2026: direct applications, Stipendium Hungaricum, documents, fees, offers and next steps."
  },
  {
    "href": "/study/hungary/sop-and-motivation-letter-for-hungary",
    "title": "SOP and Motivation Letter for Hungary: Structure, Tips and Mistakes",
    "description": "How to write an SOP or motivation letter for Hungarian universities and Stipendium Hungaricum in 2026, with structure, tips and common mistakes."
  }
];
const FAQS = [
  {
    "q": "How can Bangladeshi students apply for Stipendium Hungaricum?",
    "a": "Apply on the official online portal before the deadline and also follow the sending partner submission to the Ministry of Education in Bangladesh."
  },
  {
    "q": "When is the Stipendium Hungaricum deadline?",
    "a": "For 2026/27 it was 15 January 2026 at 14:00 CET. Check the portal for the next cycle."
  },
  {
    "q": "Is IELTS required for Stipendium Hungaricum?",
    "a": "Language evidence is required by the call, and some universities use their own tests. Read the call and programme page."
  },
  {
    "q": "Does the scholarship cover the flight?",
    "a": "Typically no. Plan for travel costs separately unless the call says otherwise."
  },
  {
    "q": "Can I apply for bachelor's, master's and PhD?",
    "a": "Yes, the programme covers multiple levels, subject to the call."
  },
  {
    "q": "Can Eammu submit the application for me?",
    "a": "We help prepare documents and guide you, but you should control your own account and verify every submission."
  },
  {
    "q": "Do I need an agent for Stipendium Hungaricum?",
    "a": "No. The application is free and you can apply yourself."
  },
  {
    "q": "What if I miss the Ministry of Education step?",
    "a": "Your application may not be considered, so follow both steps precisely."
  },
  {
    "q": "Is the scholarship renewed each year?",
    "a": "It generally continues subject to academic progress and programme rules."
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
          "name": "Stipendium Hungaricum Guide",
          "item": "https://eammu.com/study/hungary/stipendium-hungaricum-scholarship-guide"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Stipendium Hungaricum Scholarship for Bangladeshi Students: Full Guide",
      "description": "Stipendium Hungaricum for Bangladeshi students: benefits, how to apply, the Ministry of Education sending partner step, documents and common mistakes.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/stipendium-hungaricum-scholarship-guide",
      "keywords": "Stipendium Hungaricum Bangladesh, Stipendium Hungaricum application, SH scholarship Bangladesh Ministry of Education, Hungary fully funded scholarship",
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
          "name": "How can Bangladeshi students apply for Stipendium Hungaricum?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Apply on the official online portal before the deadline and also follow the sending partner submission to the Ministry of Education in Bangladesh."
          }
        },
        {
          "@type": "Question",
          "name": "When is the Stipendium Hungaricum deadline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For 2026/27 it was 15 January 2026 at 14:00 CET. Check the portal for the next cycle."
          }
        },
        {
          "@type": "Question",
          "name": "Is IELTS required for Stipendium Hungaricum?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Language evidence is required by the call, and some universities use their own tests. Read the call and programme page."
          }
        },
        {
          "@type": "Question",
          "name": "Does the scholarship cover the flight?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically no. Plan for travel costs separately unless the call says otherwise."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply for bachelor's, master's and PhD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the programme covers multiple levels, subject to the call."
          }
        },
        {
          "@type": "Question",
          "name": "Can Eammu submit the application for me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We help prepare documents and guide you, but you should control your own account and verify every submission."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an agent for Stipendium Hungaricum?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The application is free and you can apply yourself."
          }
        },
        {
          "@type": "Question",
          "name": "What if I miss the Ministry of Education step?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your application may not be considered, so follow both steps precisely."
          }
        },
        {
          "@type": "Question",
          "name": "Is the scholarship renewed each year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It generally continues subject to academic progress and programme rules."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "Stipendium Hungaricum Scholarship for Bangladeshi Students: Full Guide",
      "description": "Stipendium Hungaricum for Bangladeshi students: benefits, how to apply, the Ministry of Education sending partner step, documents and common mistakes.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Create account and choose programmes",
          "text": "Register on the official Stipendium Hungaricum portal."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Upload documents",
          "text": "Add certificates, transcripts, language proof and motivation letter."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Submit before deadline",
          "text": "Finish the online application before the Tempus deadline."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Submit to Bangladesh sending partner",
          "text": "Follow Ministry of Education instructions in Dhaka."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Receive result and apply for visa",
          "text": "If selected, accept the place and apply for the D-visa."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Stipendium Hungaricum Scholarship for Bangladeshi Students: Full Guide</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">How the Hungarian government scholarship works for applicants in Bangladesh, step by step.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Apply on the official Tempus Public Foundation portal and also submit to the Bangladesh sending partner (Ministry of Education).</li><li>You may select multiple programmes subject to the call; read the current call for limits.</li><li>Benefits typically include tuition, stipend, accommodation support and health insurance.</li><li>Missing the Bangladesh step can disqualify an otherwise strong application.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#what-is-stipendium-hungaricum" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What is Stipendium Hungaricum?</a></li><li><a href="#typical-benefits" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Typical benefits</a></li><li><a href="#application-process-for-bangladeshis" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Application process for Bangladeshis</a></li><li><a href="#documents-and-timing" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Documents and timing</a></li><li><a href="#common-mistakes" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Common mistakes</a></li><li><a href="#choosing-programmes-strategically" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Choosing programmes strategically</a></li><li><a href="#after-you-receive-an-award" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">After you receive an award</a></li><li><a href="#red-flags-in-the-scholarship-market" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Red flags in the scholarship market</a></li></ol>
          </nav>

          <article>
<section id="what-is-stipendium-hungaricum" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What is Stipendium Hungaricum?</h2>
<p className="mt-4 leading-7 text-slate-700">Stipendium Hungaricum is the Hungarian government&apos;s international scholarship programme, launched in 2013 and managed by Tempus Public Foundation. Bangladesh is a partner country, and the responsible authority listed for Bangladesh is the Secondary and Higher Education Division of the Ministry of Education in Dhaka.</p>
</section>
<section id="typical-benefits" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Typical benefits</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Full tuition coverage at the host university.</li><li>A monthly stipend set in the annual call.</li><li>Dormitory place or accommodation contribution.</li><li>Medical insurance coverage under programme rules.</li></ul><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Amounts and conditions change by call year. Always read the current official call before relying on any figure.</p>
</section>
<section id="application-process-for-bangladeshis" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Application process for Bangladeshis</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Create an account on the official online application platform and choose programmes.</li><li>Upload required documents: certificates, transcripts, motivation letter, language proof and others listed in the call.</li><li>Submit the application before the Tempus deadline.</li><li>Submit the parallel application to the Ministry of Education in Bangladesh as announced.</li><li>Wait for the nomination and university evaluation.</li><li>If selected, accept, obtain your admission letter and apply for the D-visa.</li></ol>
</section>
<section id="documents-and-timing" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Documents and timing</h2>
<p className="mt-4 leading-7 text-slate-700">Prepare early: attested certificates, English evidence, references and a clear motivation letter. See <Link href="/study/hungary/hungary-student-documents-checklist" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">documents checklist</Link>, <Link href="/study/hungary/sop-and-motivation-letter-for-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">SOP guide</Link> and <Link href="/study/hungary/stipendium-hungaricum-eligibility-and-deadlines" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">eligibility and deadlines</Link>.</p>
</section>
<section id="common-mistakes" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Common mistakes</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Submitting only on the online portal and forgetting the Bangladesh step.</li><li>Choosing programmes that do not match your academic background.</li><li>Weak or copied motivation letters.</li><li>Waiting until the last days when the portal is busy.</li><li>Paying an agent for &quot;guaranteed selection&quot;.</li></ul>
</section>
<section id="choosing-programmes-strategically" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Choosing programmes strategically</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Choose programmes that match your academic background exactly.</li><li>Use the official programme list for the current call.</li><li>Balance a competitive first choice with realistic alternatives.</li><li>Consider cities and costs, not just university names.</li></ul><p className="mt-4 leading-7 text-slate-700">See <Link href="/study/hungary/top-universities-in-hungary" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities</Link> and <Link href="/study/hungary/study-in-szeged-pecs-and-other-cities" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">regional cities</Link> to compare.</p>
</section>
<section id="after-you-receive-an-award" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">After you receive an award</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Read the scholarship contract and conditions carefully.</li><li>Confirm accommodation arrangements.</li><li>Prepare for the D-visa with the scholarship document list.</li><li>Plan for the first month&apos;s expenses before stipend payments begin.</li><li>Respect all enrolment and reporting duties.</li></ol>
</section>
<section id="red-flags-in-the-scholarship-market" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Red flags in the scholarship market</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Anyone asking for payment to &quot;secure&quot; a scholarship.</li><li>Fake websites that imitate the official portal.</li><li>Promises of selection before the official process.</li><li>Requests to share your login credentials.</li></ul>
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
