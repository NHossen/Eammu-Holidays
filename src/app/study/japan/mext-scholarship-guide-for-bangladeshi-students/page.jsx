import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/mext-scholarship-guide-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "MEXT Scholarship for Bangladeshi Students 2026 Guide",
  "description": "MEXT scholarship guide for Bangladeshi students: categories, benefits, Ministry of Education step, written exam, interview and common mistakes.",
  "keywords": [
    "MEXT scholarship Bangladesh",
    "Japanese government scholarship Bangladesh",
    "MEXT 2027 Bangladesh",
    "MEXT embassy recommendation"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/mext-scholarship-guide-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "MEXT Scholarship for Bangladeshi Students 2026 Guide",
    "description": "MEXT scholarship guide for Bangladeshi students: categories, benefits, Ministry of Education step, written exam, interview and common mistakes.",
    "url": "https://eammu.com/study/japan/mext-scholarship-guide-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "MEXT Scholarship for Bangladeshi Students 2026 Guide",
    "description": "MEXT scholarship guide for Bangladeshi students: categories, benefits, Ministry of Education step, written exam, interview and common mistakes."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "MEXT Scholarship Guide", "href": "/study/japan/mext-scholarship-guide-for-bangladeshi-students"}];
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
    "href": "/study/japan/mext-eligibility-and-deadlines",
    "title": "MEXT Eligibility, Deadlines and Documents (2027–2028 Cycle)",
    "description": "MEXT eligibility, deadlines and documents for Bangladeshi applicants: age, grades, recommendation, health certificate and typical annual schedule."
  },
  {
    "href": "/study/japan/mext-embassy-vs-university-recommendation",
    "title": "MEXT Embassy Recommendation vs University Recommendation: Which Fits You?",
    "description": "MEXT embassy recommendation vs university recommendation for Bangladeshi students: differences, timelines, English-taught tracks and how to choose."
  },
  {
    "href": "/study/japan/scholarships-in-japan-for-bangladeshi-students",
    "title": "Scholarships in Japan for Bangladeshi Students: Complete Overview",
    "description": "Scholarships in Japan for Bangladeshi students in 2026: MEXT, JASSO, university awards, language school aid and how to avoid scholarship scams."
  },
  {
    "href": "/study/japan/masters-and-phd-in-japan-for-bangladeshi-students",
    "title": "Master's and PhD in Japan for Bangladeshi Students",
    "description": "Master's and PhD study in Japan for Bangladeshi students in 2026: research student route, supervisors, MEXT funding, fees and application steps."
  }
];
const FAQS = [
  {
    "q": "How can Bangladeshi students apply for MEXT?",
    "a": "Follow the Embassy and Ministry of Education call for embassy recommendation, or apply through participating universities for university recommendation."
  },
  {
    "q": "Is MEXT only for research students?",
    "a": "No. It also has undergraduate, KOSEN and specialised training categories."
  },
  {
    "q": "What GPA is needed?",
    "a": "Older Embassy guidance has asked for first-class results or CGPA around 3.5 of 4 for research categories; confirm the current rule."
  },
  {
    "q": "Do I need Japanese?",
    "a": "It varies by category; Japanese language training may be included."
  },
  {
    "q": "Can I choose the university?",
    "a": "Placement preferences are listed but placement is decided by MEXT and universities."
  },
  {
    "q": "Does MEXT cover flights?",
    "a": "Typically yes for round-trip airfare; verify in the guidelines."
  },
  {
    "q": "Can Eammu submit my application?",
    "a": "We guide and review; you must submit through the official channel."
  },
  {
    "q": "What if I am not selected?",
    "a": "Reapply with a stronger profile or use a self-financed or university scholarship route."
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
          "name": "MEXT Scholarship Guide",
          "item": "https://eammu.com/study/japan/mext-scholarship-guide-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "MEXT (Japanese Government) Scholarship for Bangladeshi Students: Full Guide",
      "description": "MEXT scholarship guide for Bangladeshi students: categories, benefits, Ministry of Education step, written exam, interview and common mistakes.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/mext-scholarship-guide-for-bangladeshi-students",
      "keywords": "MEXT scholarship Bangladesh, Japanese government scholarship Bangladesh, MEXT 2027 Bangladesh, MEXT embassy recommendation",
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
          "name": "How can Bangladeshi students apply for MEXT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Follow the Embassy and Ministry of Education call for embassy recommendation, or apply through participating universities for university recommendation."
          }
        },
        {
          "@type": "Question",
          "name": "Is MEXT only for research students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. It also has undergraduate, KOSEN and specialised training categories."
          }
        },
        {
          "@type": "Question",
          "name": "What GPA is needed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Older Embassy guidance has asked for first-class results or CGPA around 3.5 of 4 for research categories; confirm the current rule."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need Japanese?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It varies by category; Japanese language training may be included."
          }
        },
        {
          "@type": "Question",
          "name": "Can I choose the university?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Placement preferences are listed but placement is decided by MEXT and universities."
          }
        },
        {
          "@type": "Question",
          "name": "Does MEXT cover flights?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically yes for round-trip airfare; verify in the guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "Can Eammu submit my application?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We guide and review; you must submit through the official channel."
          }
        },
        {
          "@type": "Question",
          "name": "What if I am not selected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reapply with a stronger profile or use a self-financed or university scholarship route."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "MEXT (Japanese Government) Scholarship for Bangladeshi Students: Full Guide",
      "description": "MEXT scholarship guide for Bangladeshi students: categories, benefits, Ministry of Education step, written exam, interview and common mistakes.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Find the current call",
          "text": "Check Embassy and Ministry of Education announcements."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Prepare documents",
          "text": "Collect forms, transcripts, study plan and recommendation."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Submit through the named channel",
          "text": "Apply before the deadline."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Sit exam and interview",
          "text": "Prepare for written tests and interview."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Follow placement and visa steps",
          "text": "If selected, complete COE and visa processes."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">MEXT (Japanese Government) Scholarship for Bangladeshi Students: Full Guide</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">How the Japanese Government scholarship works for applicants in Bangladesh, step by step.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Embassy-recommendation applicants from Bangladesh apply through the Ministry of Education in Bangladesh.</li><li>Categories include research students, undergraduate students, KOSEN students and specialised training college students.</li><li>Selection involves written exams and an interview.</li><li>Do not send documents directly to MEXT in Japan.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#what-is-mext" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What is MEXT?</a></li><li><a href="#categories-for-bangladeshi-applicants" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Categories for Bangladeshi applicants</a></li><li><a href="#application-process" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Application process</a></li><li><a href="#preparation-tips" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Preparation tips</a></li><li><a href="#common-mistakes" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Common mistakes</a></li><li><a href="#typical-benefits-check-current-guidelines" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Typical benefits (check current guidelines)</a></li><li><a href="#after-you-are-selected" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">After you are selected</a></li></ol>
          </nav>

          <article>
<section id="what-is-mext" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What is MEXT?</h2>
<p className="mt-4 leading-7 text-slate-700">MEXT is the Japanese Government (Monbukagakusho) scholarship run by the Ministry of Education, Culture, Sports, Science and Technology. It supports international students at Japanese universities and other institutions, typically covering tuition exemption, a monthly allowance and airfare. Recent guidelines have also tied recipients to defined periods and categories.</p>
</section>
<section id="categories-for-bangladeshi-applicants" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Categories for Bangladeshi applicants</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Category</th><th scope="col" className="px-3 py-2 text-left font-bold">Level</th><th scope="col" className="px-3 py-2 text-left font-bold">Notes</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Research students</td><td className="px-3 py-2 align-top">Master&apos;s, PhD, non-degree</td><td className="px-3 py-2 align-top">Strong grades and research plan required</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Undergraduate students</td><td className="px-3 py-2 align-top">Bachelor&apos;s</td><td className="px-3 py-2 align-top">Age limits; FY2027 guidelines say born on or after 2 April 2002 in principle</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">College of Technology (KOSEN)</td><td className="px-3 py-2 align-top">Technical college</td><td className="px-3 py-2 align-top">Younger applicants; check age</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Specialised training college</td><td className="px-3 py-2 align-top">Vocational</td><td className="px-3 py-2 align-top">Check requirements and Japanese level</td></tr></tbody></table></div><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Details come from official MEXT guidelines and Embassy pages and change every year. Confirm in the current guideline for your category.</p>
</section>
<section id="application-process" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Application process</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Watch the Embassy of Japan in Bangladesh and Ministry of Education announcements.</li><li>Download the guidelines and forms for your category.</li><li>Prepare the application, transcripts, research or study plan, health certificate and recommendation.</li><li>Submit through the channel named in the call.</li><li>Sit the written exam and interview.</li><li>If selected, follow placement and visa instructions.</li></ol>
</section>
<section id="preparation-tips" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Preparation tips</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Build a clear research plan, see <Link href="/study/japan/sop-and-study-plan-for-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study plan guide</Link>.</li><li>Contact potential supervisors for research categories.</li><li>Practise past exam papers in English and Japanese where required.</li><li>Prepare Japanese language skills.</li></ul>
</section>
<section id="common-mistakes" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Common mistakes</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Using an old call and missing new rules.</li><li>Sending documents to MEXT directly.</li><li>Weak research plans.</li><li>Paying an agent for &quot;guaranteed selection&quot;.</li></ul>
</section>
<section id="typical-benefits-check-current-guidelines" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Typical benefits (check current guidelines)</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Exemption from tuition, admission and entrance fees.</li><li>A monthly allowance; recent years have seen roughly JPY 117,000 for undergraduates and about JPY 143,000–145,000 for graduate levels.</li><li>Round-trip airfare.</li><li>Japanese language training in some categories.</li></ul><p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Amounts change by year and category; verify in the current MEXT guideline.</p>
</section>
<section id="after-you-are-selected" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">After you are selected</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Read the award terms.</li><li>Confirm placement and COE steps.</li><li>Prepare for the visa and arrival.</li><li>Plan the first month&apos;s expenses.</li><li>Respect reporting duties.</li></ol>
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
