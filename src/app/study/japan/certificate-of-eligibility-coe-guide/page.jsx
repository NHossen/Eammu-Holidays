import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/certificate-of-eligibility-coe-guide';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Certificate of Eligibility (COE) Guide for Japan 2026",
  "description": "Japan Certificate of Eligibility guide for Bangladeshi students in 2026: who applies, documents, financial proof, timing, validity and common problems.",
  "keywords": [
    "Japan Certificate of Eligibility",
    "COE Japan student",
    "COE application Japan Bangladesh",
    "Japan COE documents"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/certificate-of-eligibility-coe-guide"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Certificate of Eligibility (COE) Guide for Japan 2026",
    "description": "Japan Certificate of Eligibility guide for Bangladeshi students in 2026: who applies, documents, financial proof, timing, validity and common problems.",
    "url": "https://eammu.com/study/japan/certificate-of-eligibility-coe-guide",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Certificate of Eligibility (COE) Guide for Japan 2026",
    "description": "Japan Certificate of Eligibility guide for Bangladeshi students in 2026: who applies, documents, financial proof, timing, validity and common problems."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "COE Guide", "href": "/study/japan/certificate-of-eligibility-coe-guide"}];
const NAV = [
  {
    "label": "Japan Hub",
    "pages": [
      {
        "href": "/study/japan",
        "label": "Study in Japan Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/japan/study-in-japan-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/japan/study-in-japan-in-english-without-japanese",
        "label": "English & Without Japanese"
      },
      {
        "href": "/study/japan/tuition-fees-in-japan-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/japan/cost-of-living-in-japan-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/japan/affordable-universities-in-japan",
        "label": "Affordable Universities"
      },
      {
        "href": "/study/japan/top-universities-in-japan",
        "label": "Top Universities"
      },
      {
        "href": "/study/japan/national-vs-private-universities-in-japan",
        "label": "National vs Private Universities"
      },
      {
        "href": "/study/japan/admission-requirements-in-japan-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/japan/study-gap-and-japan-student-visa",
        "label": "Study Gap & Japan Visa"
      },
      {
        "href": "/study/japan/study-in-japan-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/japan/study-in-japan-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/japan/japan-intake-dates",
        "label": "Intake Dates"
      },
      {
        "href": "/study/japan/japan-vs-south-korea-vs-germany-for-bangladeshi-students",
        "label": "Japan vs South Korea vs Germany"
      }
    ]
  },
  {
    "label": "Scholarships & Funding",
    "pages": [
      {
        "href": "/study/japan/scholarships-in-japan-for-bangladeshi-students",
        "label": "Scholarships Overview"
      },
      {
        "href": "/study/japan/mext-scholarship-guide-for-bangladeshi-students",
        "label": "MEXT Scholarship Guide"
      },
      {
        "href": "/study/japan/mext-eligibility-and-deadlines",
        "label": "MEXT Eligibility & Deadlines"
      },
      {
        "href": "/study/japan/mext-embassy-vs-university-recommendation",
        "label": "Embassy vs University Recommendation"
      },
      {
        "href": "/study/japan/jasso-and-university-scholarships-in-japan",
        "label": "JASSO & University Scholarships"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/japan/how-to-apply-to-japanese-universities",
        "label": "How to Apply (Step by Step)"
      },
      {
        "href": "/study/japan/degree-recognition-and-eligibility-in-japan",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/japan/bachelors-in-japan-for-bangladeshi-students",
        "label": "Bachelor's Degrees"
      },
      {
        "href": "/study/japan/masters-and-phd-in-japan-for-bangladeshi-students",
        "label": "Master's & PhD"
      },
      {
        "href": "/study/japan/english-taught-programs-in-japan",
        "label": "English-Taught Programmes"
      },
      {
        "href": "/study/japan/japanese-language-schools-in-japan",
        "label": "Japanese Language Schools"
      },
      {
        "href": "/study/japan/japanese-language-requirements-for-bangladeshi-students",
        "label": "Japanese Language Requirements"
      },
      {
        "href": "/study/japan/cse-and-it-courses-in-japan",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/japan/engineering-courses-in-japan",
        "label": "Engineering Courses"
      },
      {
        "href": "/study/japan/mba-and-business-degrees-in-japan",
        "label": "MBA & Business"
      },
      {
        "href": "/study/japan/kosen-and-vocational-colleges-in-japan",
        "label": "KOSEN & Vocational Colleges"
      },
      {
        "href": "/study/japan/sop-and-study-plan-for-japan",
        "label": "SOP & Study Plan"
      },
      {
        "href": "/study/japan/eju-exam-for-japanese-universities",
        "label": "EJU Exam"
      }
    ]
  },
  {
    "label": "Cities & Student Life",
    "pages": [
      {
        "href": "/study/japan/student-accommodation-in-japan",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/japan/study-in-tokyo",
        "label": "Study in Tokyo"
      },
      {
        "href": "/study/japan/study-in-osaka-and-kyoto",
        "label": "Osaka & Kyoto"
      },
      {
        "href": "/study/japan/study-in-fukuoka-and-other-cities",
        "label": "Fukuoka & Other Cities"
      },
      {
        "href": "/study/japan/health-insurance-for-students-in-japan",
        "label": "Health Insurance"
      },
      {
        "href": "/study/japan/halal-food-and-bangladeshi-community-in-japan",
        "label": "Halal Food & Community"
      },
      {
        "href": "/study/japan/life-in-japan-for-international-students",
        "label": "Life in Japan"
      },
      {
        "href": "/study/japan/japan-bank-account-phone-and-residence-card",
        "label": "Bank, Phone & Residence Card"
      }
    ]
  },
  {
    "label": "Visa, COE & Work Rules",
    "pages": [
      {
        "href": "/study/japan/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/japan/certificate-of-eligibility-coe-guide",
        "label": "COE Guide"
      },
      {
        "href": "/study/japan/japan-student-visa-application-guide-dhaka",
        "label": "Dhaka Visa Application Guide"
      },
      {
        "href": "/study/japan/japan-student-documents-checklist",
        "label": "Documents Checklist"
      },
      {
        "href": "/study/japan/financial-proof-requirements-for-japan-student-visa",
        "label": "Financial Proof"
      },
      {
        "href": "/study/japan/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/japan/japan-student-visa-refusal-reasons",
        "label": "Visa Refusal Reasons"
      },
      {
        "href": "/study/japan/part-time-job-rules-for-students-in-japan",
        "label": "Part-Time Job Rules"
      },
      {
        "href": "/study/japan/post-study-work-and-job-hunting-visa-in-japan",
        "label": "Post-Study Work & Job Hunting"
      },
      {
        "href": "/study/japan/bring-family-to-japan-as-a-student",
        "label": "Family & Dependents"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/japan/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/japan/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/japan/student-visa-requirements-bangladesh",
    "title": "Japan Student Visa Requirements for Bangladeshis: COE, Funds and Documents",
    "description": "Japan student visa requirements for Bangladeshi students in 2026: Certificate of Eligibility, admission, financial proof, language and Embassy documents."
  },
  {
    "href": "/study/japan/japan-student-visa-application-guide-dhaka",
    "title": "Japan Student Visa Application Guide in Dhaka: VFS, Documents and Steps",
    "description": "Step-by-step Japan student visa application in Dhaka for Bangladeshis in 2026: VFS Global, documents, interview, decision and arrival steps."
  },
  {
    "href": "/study/japan/financial-proof-requirements-for-japan-student-visa",
    "title": "Financial Proof and Sponsor Rules for a Japan Student Visa",
    "description": "Financial proof for a Japan student visa in 2026: how Bangladeshi students should show funds, sponsor documents, planning estimates and common mistakes."
  },
  {
    "href": "/study/japan/japan-student-documents-checklist",
    "title": "Japan Student Admission, COE and Visa Documents Checklist for Bangladeshis",
    "description": "Complete documents checklist for Japan admission, COE and student visa in 2026 for Bangladeshi students: academic, financial, language and travel papers."
  }
];
const FAQS = [
  {
    "q": "Who applies for the COE?",
    "a": "Usually the school or sponsor in Japan applies for you."
  },
  {
    "q": "How long does the COE take?",
    "a": "Often several weeks to a few months depending on season and case."
  },
  {
    "q": "Can I apply for the COE myself?",
    "a": "Generally the receiving institution applies; check your school."
  },
  {
    "q": "What if my COE is refused?",
    "a": "Ask the school for reasons, fix the problem and consider reapplying at a later intake."
  },
  {
    "q": "Is the COE the same as a visa?",
    "a": "No. It is a document you use to apply for a visa."
  },
  {
    "q": "Do I need translations?",
    "a": "Often yes, including Japanese translations for foreign-language documents."
  },
  {
    "q": "Is the COE valid for a long time?",
    "a": "It generally expires after a short period, so apply for the visa soon."
  },
  {
    "q": "Can the COE be sent by email?",
    "a": "Some schools send electronic COEs; follow the school and Embassy instructions."
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
          "name": "Japan",
          "item": "https://eammu.com/study/japan"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "COE Guide",
          "item": "https://eammu.com/study/japan/certificate-of-eligibility-coe-guide"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Certificate of Eligibility (COE) for Japan: Step-by-Step Guide for Bangladeshi Students",
      "description": "Japan Certificate of Eligibility guide for Bangladeshi students in 2026: who applies, documents, financial proof, timing, validity and common problems.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/certificate-of-eligibility-coe-guide",
      "keywords": "Japan Certificate of Eligibility, COE Japan student, COE application Japan Bangladesh, Japan COE documents",
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
          "name": "Who applies for the COE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually the school or sponsor in Japan applies for you."
          }
        },
        {
          "@type": "Question",
          "name": "How long does the COE take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often several weeks to a few months depending on season and case."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply for the COE myself?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally the receiving institution applies; check your school."
          }
        },
        {
          "@type": "Question",
          "name": "What if my COE is refused?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ask the school for reasons, fix the problem and consider reapplying at a later intake."
          }
        },
        {
          "@type": "Question",
          "name": "Is the COE the same as a visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. It is a document you use to apply for a visa."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need translations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often yes, including Japanese translations for foreign-language documents."
          }
        },
        {
          "@type": "Question",
          "name": "Is the COE valid for a long time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It generally expires after a short period, so apply for the visa soon."
          }
        },
        {
          "@type": "Question",
          "name": "Can the COE be sent by email?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some schools send electronic COEs; follow the school and Embassy instructions."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "Certificate of Eligibility (COE) for Japan: Step-by-Step Guide for Bangladeshi Students",
      "description": "Japan Certificate of Eligibility guide for Bangladeshi students in 2026: who applies, documents, financial proof, timing, validity and common problems.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Get admitted",
          "text": "Receive an offer from a recognised school."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Send documents to the school",
          "text": "Provide passport, certificates, financial proof and forms."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "School applies for the COE",
          "text": "The school submits to immigration."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Receive the COE",
          "text": "Collect or receive the original COE."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Apply for visa",
          "text": "Use the COE at the Embassy channel."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Japan 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Certificate of Eligibility (COE) for Japan: Step-by-Step Guide for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">No COE, no Student visa. Here is how the COE process works and how to prepare.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} counseling team &middot; Updated <time dateTime="2026-11-22">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Japan guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 64 Japan guides</summary>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>The COE is issued by the Immigration Services Agency of Japan after your school or sponsor applies.</li><li>Universities and schools usually mail the COE to you after approval.</li><li>Student COE document requirements were revised in June 2026, so use your school&apos;s newest list.</li><li>Foreign-language documents may need Japanese translations.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#what-the-coe-is" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What the COE is</a></li><li><a href="#step-by-step" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Step-by-step</a></li><li><a href="#typical-documents-for-the-coe" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Typical documents for the COE</a></li><li><a href="#timing" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Timing</a></li><li><a href="#common-problems" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Common problems</a></li><li><a href="#how-to-track-your-coe" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How to track your COE</a></li></ol>
          </nav>

          <article>
<section id="what-the-coe-is" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What the COE is</h2>
<p className="mt-4 leading-7 text-slate-700">A COE confirms that you meet the conditions for a status of residence, in this case &quot;Student&quot;. You need it to apply for the visa, and it is valid for a limited time after issue. The Embassy of Japan in Bangladesh notes that your university usually submits your documents to the immigration bureau and mails you the COE.</p>
</section>
<section id="step-by-step" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Step-by-step</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Receive admission from the school.</li><li>Send the school the documents it requests: passport copy, certificates, financial proof, photograph and forms.</li><li>The school submits the COE application to the regional immigration bureau.</li><li>Wait for the result, which may take weeks to months.</li><li>Receive the COE, usually by post.</li><li>Apply for the Student visa promptly with the original COE.</li></ol>
</section>
<section id="typical-documents-for-the-coe" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Typical documents for the COE</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Application form and photograph.</li><li>Academic certificates and transcripts.</li><li>Proof of Japanese or English ability.</li><li>Financial proof of the applicant or sponsor, such as bank statements, income and tax records.</li><li>Documents showing the sponsor&apos;s relationship to you.</li><li>Study plan or reasons for study.</li></ul><p className="mt-4 leading-7 text-slate-700">Recent notices from schools say Japan&apos;s Immigration Services Agency added or changed required documents for Student COE applications in 2026 and that foreign-language documents, including English, may need Japanese translations. Follow your school&apos;s current checklist.</p>
</section>
<section id="timing" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Timing</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Intake</th><th scope="col" className="px-3 py-2 text-left font-bold">COE application window (typical)</th><th scope="col" className="px-3 py-2 text-left font-bold">Visa application</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">April</td><td className="px-3 py-2 align-top">Winter before arrival</td><td className="px-3 py-2 align-top">Soon after COE arrives</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">October</td><td className="px-3 py-2 align-top">Late spring to summer</td><td className="px-3 py-2 align-top">Soon after COE arrives</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Language school intakes</td><td className="px-3 py-2 align-top">About 4–6 months before start</td><td className="px-3 py-2 align-top">Soon after COE arrives</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Windows vary by school and year.</p>
</section>
<section id="common-problems" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Common problems</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Late or incomplete documents.</li><li>Inconsistent financial records.</li><li>Weak study plan.</li><li>Choosing a school that cannot support international applicants.</li><li>Waiting too long to apply for the visa after the COE arrives.</li></ul><p className="mt-4 leading-7 text-slate-700">See <Link href="/study/japan/japan-student-visa-refusal-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">refusal reasons</Link> and <Link href="/study/japan/financial-proof-requirements-for-japan-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">financial proof</Link>.</p>
</section>
<section id="how-to-track-your-coe" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How to track your COE</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Ask the school for the application date and receipt.</li><li>Check emails and post for the COE.</li><li>Ask how the COE will be delivered.</li><li>Verify details such as name and school on the COE.</li></ul>
</section>
          </article>

          <section className="mt-12" aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="text-xl font-bold text-emerald-900">Official sources to verify before you pay or apply</h2>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-6 text-slate-700"><li><a href="https://www.studyinjapan.go.jp/en/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Study in Japan – official portal (JASSO)</a></li><li><a href="https://www.bd.emb-japan.go.jp/en/visa/visainfohowto.html" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Embassy of Japan in Bangladesh – visa information</a></li><li><a href="https://www.moj.go.jp/isa/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Immigration Services Agency of Japan</a></li><li><a href="https://visa.vfsglobal.com/bgd/en/jpn" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">VFS Global – Japan visa application centre, Dhaka</a></li><li><a href="https://www.bd.emb-japan.go.jp/itpr_en/scholarshipnotice.html" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Embassy of Japan in Bangladesh – scholarships (MEXT)</a></li></ul>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Japan Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Japan</h2>
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
