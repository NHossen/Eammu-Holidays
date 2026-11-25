import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/consultancy-in-mymensingh';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Japan Consultancy in Mymensingh 2026 | Eammu",
  "description": "Study in Japan consultancy for Mymensingh students in 2026: free counseling, MEXT guidance, COE and funds planning and visa preparation from Eammu.",
  "keywords": [
    "study in Japan consultancy Mymensingh",
    "Japan student visa consultant Mymensingh",
    "MEXT scholarship Mymensingh",
    "study abroad consultancy Mymensingh"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/consultancy-in-mymensingh"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Japan Consultancy in Mymensingh 2026 | Eammu",
    "description": "Study in Japan consultancy for Mymensingh students in 2026: free counseling, MEXT guidance, COE and funds planning and visa preparation from Eammu.",
    "url": "https://eammu.com/study/japan/consultancy-in-mymensingh",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Japan Consultancy in Mymensingh 2026 | Eammu",
    "description": "Study in Japan consultancy for Mymensingh students in 2026: free counseling, MEXT guidance, COE and funds planning and visa preparation from Eammu."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "Mymensingh Consultancy", "href": "/study/japan/consultancy-in-mymensingh"}];
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
    "href": "/study/japan/bangladesh-offices",
    "title": "Eammu Holidays Bangladesh Offices and Nationwide Support for Study in Japan",
    "description": "Eammu Holidays study in Japan counseling across Bangladesh: Dhaka walk-in desk and online support for every division, plus a directory of all guides."
  },
  {
    "href": "/study/japan/study-in-japan-from-bangladesh",
    "title": "Study in Japan from Bangladesh: 2026 Roadmap, Costs and Visa Steps",
    "description": "Step-by-step roadmap to study in Japan from Bangladesh in 2026: pathways, costs in BDT, scholarships, COE, Student visa in Dhaka and arrival in Japan."
  },
  {
    "href": "/study/japan/mext-scholarship-guide-for-bangladeshi-students",
    "title": "MEXT (Japanese Government) Scholarship for Bangladeshi Students: Full Guide",
    "description": "MEXT scholarship guide for Bangladeshi students: categories, benefits, Ministry of Education step, written exam, interview and common mistakes."
  },
  {
    "href": "/study/japan/japan-student-visa-application-guide-dhaka",
    "title": "Japan Student Visa Application Guide in Dhaka: VFS, Documents and Steps",
    "description": "Step-by-step Japan student visa application in Dhaka for Bangladeshis in 2026: VFS Global, documents, interview, decision and arrival steps."
  }
];
const FAQS = [
  {
    "q": "Does Eammu Holidays have an office in Mymensingh?",
    "a": "Our walk-in counseling desk is in Dhaka. Students elsewhere receive support online, by phone and by WhatsApp, and we do not claim local offices."
  },
  {
    "q": "Can Mymensingh students apply for MEXT?",
    "a": "Bangladeshi citizens can apply if they meet the current guidelines and follow the Ministry of Education and Embassy process."
  },
  {
    "q": "Is counseling free?",
    "a": "The initial profile review is free. Any paid service is explained in writing before you commit."
  },
  {
    "q": "Where is the Japanese visa submitted?",
    "a": "Through the VFS Global centre designated by the Embassy of Japan in Dhaka; confirm current arrangements."
  },
  {
    "q": "Can you guarantee admission or a visa?",
    "a": "No. Schools and authorities decide; we help you prepare honest, complete files."
  },
  {
    "q": "How do I start?",
    "a": "Call or WhatsApp +8801631312525, email info@eammu.com, or book a session."
  },
  {
    "q": "Is Japan a good choice for Mymensingh students?",
    "a": "It can be, especially for students who are ready to learn Japanese and can plan funds carefully."
  },
  {
    "q": "What does the first free session cover?",
    "a": "Your academic profile, language level, budget, funding options and a realistic shortlist."
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
          "name": "Mymensingh Consultancy",
          "item": "https://eammu.com/study/japan/consultancy-in-mymensingh"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Japan Consultancy for Mymensingh Students (2026)",
      "description": "Study in Japan consultancy for Mymensingh students in 2026: free counseling, MEXT guidance, COE and funds planning and visa preparation from Eammu.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/consultancy-in-mymensingh",
      "keywords": "study in Japan consultancy Mymensingh, Japan student visa consultant Mymensingh, MEXT scholarship Mymensingh, study abroad consultancy Mymensingh",
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
          "name": "Does Eammu Holidays have an office in Mymensingh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our walk-in counseling desk is in Dhaka. Students elsewhere receive support online, by phone and by WhatsApp, and we do not claim local offices."
          }
        },
        {
          "@type": "Question",
          "name": "Can Mymensingh students apply for MEXT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bangladeshi citizens can apply if they meet the current guidelines and follow the Ministry of Education and Embassy process."
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
          "name": "Where is the Japanese visa submitted?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Through the VFS Global centre designated by the Embassy of Japan in Dhaka; confirm current arrangements."
          }
        },
        {
          "@type": "Question",
          "name": "Can you guarantee admission or a visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Schools and authorities decide; we help you prepare honest, complete files."
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
          "name": "Is Japan a good choice for Mymensingh students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be, especially for students who are ready to learn Japanese and can plan funds carefully."
          }
        },
        {
          "@type": "Question",
          "name": "What does the first free session cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your academic profile, language level, budget, funding options and a realistic shortlist."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Study in Japan counseling for Mymensingh students",
      "serviceType": "Study abroad counseling",
      "url": "https://eammu.com/study/japan/consultancy-in-mymensingh",
      "provider": {
        "@type": "Organization",
        "name": "Eammu Holidays",
        "url": "https://eammu.com",
        "telephone": "+8801631312525",
        "email": "info@eammu.com"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Mymensingh"
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Japan 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Japan Consultancy for Mymensingh Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">How Mymensingh families can use Eammu Holidays to plan study in Japan, from scholarship to Student visa.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Eammu Holidays gives Mymensingh students free profile review, school shortlist and visa guidance.</li><li>Counseling is available online, by phone and by WhatsApp; the walk-in desk is in Dhaka.</li><li>We give balanced advice, including on scholarship odds, funds and visa risk, and never guarantee outcomes.</li><li>Start with the Japan roadmap and the MEXT guide.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#counseling-for-mymensingh-families" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Counseling for Mymensingh families</a></li><li><a href="#logistics-and-travel" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Logistics and travel</a></li><li><a href="#local-insight-for-mymensingh-applicants" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Local insight for Mymensingh applicants</a></li><li><a href="#what-mymensingh-students-should-prepare" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What Mymensingh students should prepare</a></li><li><a href="#a-realistic-6-month-plan-for-mymensingh-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">A realistic 6-month plan for Mymensingh students</a></li><li><a href="#typical-mymensingh-student-questions" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Typical Mymensingh student questions</a></li><li><a href="#nearby-support-and-other-locations" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Nearby support and other locations</a></li><li><a href="#how-we-work-with-you" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How we work with you</a></li></ol>
          </nav>

          <article>
<section id="counseling-for-mymensingh-families" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Counseling for Mymensingh families</h2>
<p className="mt-4 leading-7 text-slate-700">Students in Mymensingh, Jamalpur, Netrokona and nearby districts can access Eammu Holidays online. We do not claim a physical office in Mymensingh.</p><p className="mt-4 leading-7 text-slate-700">Mymensingh is close to Dhaka, so many families can combine one counseling visit with attestation errands. We begin with <Link href="/study/japan/tuition-fees-in-japan-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Japan</Link>, <Link href="/study/japan/scholarships-in-japan-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships</Link> and <Link href="/study/japan/how-to-apply-to-japanese-universities" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the application guide</Link>.</p>
</section>
<section id="logistics-and-travel" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Logistics and travel</h2>
<p className="mt-4 leading-7 text-slate-700">The area is known for agricultural education, which links to Japan&apos;s agriculture and life sciences research.</p><p className="mt-4 leading-7 text-slate-700">We do most steps online and keep any visit for document sign-off. See <Link href="/study/japan/student-visa-processing-time-and-cost" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">processing time and cost</Link> for timelines and ticket budgets.</p>
</section>
<section id="local-insight-for-mymensingh-applicants" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Local insight for Mymensingh applicants</h2>
<p className="mt-4 leading-7 text-slate-700">Students with BSc Agriculture backgrounds can explore master&apos;s and MEXT routes. Japan&apos;s process starts with the school applying for your COE, so we help you choose recognised schools and prepare documents that match.</p><p className="mt-4 leading-7 text-slate-700">The Embassy of Japan has tightened guidance for Bangladeshi applicants to Japanese-language schools, so we also check language proof and financial documents early. Read <Link href="/study/japan/japanese-language-requirements-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Japanese requirements</Link> and <Link href="/study/japan/japan-student-visa-refusal-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">refusal reasons</Link>.</p>
</section>
<section id="what-mymensingh-students-should-prepare" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What Mymensingh students should prepare</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">Why it matters</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">SSC, HSC, diploma or degree results</td><td className="px-3 py-2 align-top">Defines your level, see <Link href="/study/japan/admission-requirements-in-japan-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Passport</td><td className="px-3 py-2 align-top">Needed for scholarship, COE and visa; check validity</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Japanese or English test</td><td className="px-3 py-2 align-top">See <Link href="/study/japan/japanese-language-requirements-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Japanese requirements</Link> and <Link href="/study/japan/study-in-japan-in-english-without-japanese" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">English routes</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Budget and sponsor details</td><td className="px-3 py-2 align-top">See <Link href="/study/japan/financial-proof-requirements-for-japan-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">financial proof</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Study plan and CV</td><td className="px-3 py-2 align-top">See <Link href="/study/japan/sop-and-study-plan-for-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study plan guide</Link></td></tr></tbody></table></div>
</section>
<section id="a-realistic-6-month-plan-for-mymensingh-students" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">A realistic 6-month plan for Mymensingh students</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Month</th><th scope="col" className="px-3 py-2 text-left font-bold">Action</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">1</td><td className="px-3 py-2 align-top">Free profile review; shortlist pathways and funding routes</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">2</td><td className="px-3 py-2 align-top">Prepare documents; schedule language tests</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">3</td><td className="px-3 py-2 align-top">Write study plan; submit school or scholarship applications</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">4</td><td className="px-3 py-2 align-top">Exams, interviews and offers; compare total costs</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">5</td><td className="px-3 py-2 align-top">COE preparation with the school; financial proof</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">6</td><td className="px-3 py-2 align-top">Visa submission in Dhaka and travel planning</td></tr></tbody></table></div><p className="mt-4 leading-7 text-slate-700">Match this plan to the April cycle with the <Link href="/study/japan/japan-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">intake dates guide</Link>.</p>
</section>
<section id="typical-mymensingh-student-questions" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Typical Mymensingh student questions</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>How much money must I show? See <Link href="/study/japan/financial-proof-requirements-for-japan-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">financial proof</Link>.</li><li>Is my degree recognised? See <Link href="/study/japan/degree-recognition-and-eligibility-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">degree recognition</Link>.</li><li>When should I apply? See <Link href="/study/japan/japan-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Japan intake dates</Link>.</li><li>Can I work? See <Link href="/study/japan/part-time-job-rules-for-students-in-japan" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">work rules</Link>.</li><li>Can my family join me? See <Link href="/study/japan/bring-family-to-japan-as-a-student" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">family guide</Link>.</li></ul>
</section>
<section id="nearby-support-and-other-locations" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Nearby support and other locations</h2>
<p className="mt-4 leading-7 text-slate-700">Students nearby can also read the guides for <Link href="/study/japan/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Dhaka</Link>, <Link href="/study/japan/consultancy-in-chattogram" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Chattogram</Link>, <Link href="/study/japan/consultancy-in-sylhet" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Sylhet</Link>, or view all options on the <Link href="/study/japan/bangladesh-offices" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bangladesh offices page</Link>. For the full country roadmap, read <Link href="/study/japan/study-in-japan-from-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">studying in Japan from Bangladesh</Link>.</p>
</section>
<section id="how-we-work-with-you" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How we work with you</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Honest assessment of your chances and alternatives.</li><li>Clear written explanation of any paid service before you commit.</li><li>No pressure to choose a specific school.</li><li>No promises of guaranteed admission, scholarship or visa.</li></ul>
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
