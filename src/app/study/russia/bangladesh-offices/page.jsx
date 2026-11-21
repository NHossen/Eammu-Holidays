import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/russia/bangladesh-offices';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Russia Bangladesh Offices 2026 | Eammu Holidays",
  "description": "Find Eammu Holidays study in Russia counseling in Bangladesh: walk-in support in Dhaka and online or courier help for every division and district.",
  "alternates": {
    "canonical": "https://eammu.com/study/russia/bangladesh-offices"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Russia Bangladesh Offices 2026 | Eammu Holidays",
    "description": "Find Eammu Holidays study in Russia counseling in Bangladesh: walk-in support in Dhaka and online or courier help for every division and district.",
    "url": "https://eammu.com/study/russia/bangladesh-offices",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Russia Bangladesh Offices 2026 | Eammu Holidays",
    "description": "Find Eammu Holidays study in Russia counseling in Bangladesh: walk-in support in Dhaka and online or courier help for every division and district."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Russia", "href": "/study/russia"}, {"name": "Bangladesh Offices & Support", "href": "/study/russia/bangladesh-offices"}];
const NAV = [
  {
    "label": "Russia Hub",
    "pages": [
      {
        "href": "/study/russia",
        "label": "Study in Russia Hub",
        "title": "Study in Russia 2026: Complete Hub for Bangladeshi Students",
        "d": "Start here: every guide on tuition, the government scholarship quota, visas, MBBS, safety warnings, payments and local support for Bangladeshi students considering Russia."
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/russia/safety-and-scam-warning-for-students-in-russia",
        "label": "Safety & Scam Warning",
        "title": "Safety, Sanctions and Scam Warning for Students in Russia",
        "d": "An honest guide to war, sanctions, payment restrictions and recruitment scams that Bangladeshi families must understand before studying in Russia."
      },
      {
        "href": "/study/russia/study-in-russia-from-bangladesh",
        "label": "Study from Bangladesh",
        "title": "Study in Russia from Bangladesh",
        "d": "A practical roadmap for studying in Russia from Bangladesh: choosing a course, costs, the invitation letter, visa steps and safety checks."
      },
      {
        "href": "/study/russia/study-in-russia-without-ielts",
        "label": "Without IELTS",
        "title": "Study in Russia Without IELTS",
        "d": "How Bangladeshi students can enter Russian universities without IELTS using interviews, entrance tests or a Russian language year."
      },
      {
        "href": "/study/russia/tuition-fees-in-russia-for-bangladeshi-students",
        "label": "Tuition Fees",
        "title": "Tuition Fees in Russia for Bangladeshi Students",
        "d": "Realistic tuition ranges in RUB and BDT for the language year, bachelor’s, medicine and master’s programmes in Russia."
      },
      {
        "href": "/study/russia/cost-of-living-in-russia-for-bangladeshi-students",
        "label": "Cost of Living",
        "title": "Cost of Living in Russia for Bangladeshi Students",
        "d": "Monthly budget breakdown for dormitory, food, transport and clothing in Moscow, Kazan and other Russian student cities."
      },
      {
        "href": "/study/russia/cheapest-universities-in-russia",
        "label": "Cheapest Universities",
        "title": "Cheapest Universities in Russia",
        "d": "How to find low-cost Russian universities and what to check beyond the headline tuition fee, including safety, payments and recognition."
      },
      {
        "href": "/study/russia/top-universities-in-russia",
        "label": "Top Universities",
        "title": "Top Universities in Russia",
        "d": "Overview of well-known Russian universities and medical universities and how to choose among them."
      },
      {
        "href": "/study/russia/scholarships-in-russia-for-bangladeshi-students",
        "label": "Scholarships",
        "title": "Scholarships in Russia for Bangladeshi Students",
        "d": "How the Russian government scholarship quota works for Bangladeshi applicants: places, benefits, official portal and scam warnings."
      },
      {
        "href": "/study/russia/admission-requirements-in-russia-for-bangladeshi-students",
        "label": "Admission Requirements",
        "title": "Admission Requirements in Russia for Bangladeshi Students",
        "d": "SSC, HSC, diploma, language and document requirements for Russian universities explained for Bangladeshi applicants."
      },
      {
        "href": "/study/russia/study-gap-accepted-universities-in-russia",
        "label": "Study Gap Accepted",
        "title": "Study Gap Accepted Universities in Russia",
        "d": "How study gaps are treated by Russian universities and what documents explain a gap for Bangladeshi applicants."
      },
      {
        "href": "/study/russia/study-in-russia-after-ssc",
        "label": "After SSC",
        "title": "Study in Russia After SSC",
        "d": "Pathway options for SSC graduates planning to study in Russia, and why HSC matters and unofficial routes are risky."
      },
      {
        "href": "/study/russia/study-in-russia-after-diploma",
        "label": "After Diploma",
        "title": "Study in Russia After Diploma",
        "d": "Degree entry and recognition options for Bangladeshi polytechnic and diploma holders in Russia."
      },
      {
        "href": "/study/russia/russia-intake-dates",
        "label": "Intake Dates",
        "title": "Russia Intake Dates",
        "d": "Main intake and application windows in Russia, including scholarship deadlines, for Bangladeshi students."
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/russia/mbbs-in-russia-for-bangladeshi-students",
        "label": "MBBS in Russia",
        "title": "MBBS in Russia for Bangladeshi Students",
        "d": "Entry rules, costs and recognition checks for Bangladeshi students considering English-taught medicine in Russia, with safety and payment notes."
      },
      {
        "href": "/study/russia/medical-degree-recognition-and-bmdc-guide-russia",
        "label": "Degree Recognition & BMDC",
        "title": "Medical Degree Recognition and BMDC Guide for Russia",
        "d": "How accreditation and recognition work for Russian degrees and how Bangladeshi medical students should verify BMDC acceptance."
      },
      {
        "href": "/study/russia/russian-language-preparatory-year-guide",
        "label": "Russian Language Year",
        "title": "Russian Language Preparatory Year Guide",
        "d": "How the Russian language preparatory year works, what it costs and whether you need it as a Bangladeshi student."
      },
      {
        "href": "/study/russia/cse-and-it-courses-in-russia",
        "label": "Engineering & IT Courses",
        "title": "Engineering and IT Courses in Russia",
        "d": "Engineering, computer science, nuclear and IT study options in Russia for Bangladeshi students."
      },
      {
        "href": "/study/russia/student-accommodation-in-russia",
        "label": "Student Accommodation",
        "title": "Student Accommodation in Russia",
        "d": "Dormitories, shared apartments and private housing options with typical monthly costs for students in Russia."
      }
    ]
  },
  {
    "label": "Visa, Invitation & Work Rules",
    "pages": [
      {
        "href": "/study/russia/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements",
        "title": "Russia Student Visa Requirements for Bangladesh",
        "d": "Documents and steps for a Russian student visa from Bangladesh, including the invitation letter, HIV test, insurance and registration."
      },
      {
        "href": "/study/russia/invitation-letter-and-visa-process-guide-russia",
        "label": "Invitation Letter & Visa",
        "title": "Invitation Letter and Visa Process Guide for Russia",
        "d": "How the official invitation letter works and the stages from admission to arrival registration in Russia."
      },
      {
        "href": "/study/russia/bank-solvency-requirements-for-russia-student-visa",
        "label": "Bank Solvency & Payments",
        "title": "Bank Solvency and Payment Guide for Russia Student Visa",
        "d": "How Bangladeshi families should plan funds proof, tuition payment and access to money for study in Russia under sanctions."
      },
      {
        "href": "/study/russia/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost",
        "title": "Russia Student Visa Processing Time and Cost",
        "d": "Typical processing time and the main fees Bangladeshi students should budget for in a Russian visa application."
      },
      {
        "href": "/study/russia/part-time-job-and-post-study-work-rules-in-russia",
        "label": "Work Rules",
        "title": "Part-Time Job and Post-Study Work Rules in Russia",
        "d": "What international students may and may not do regarding work in Russia, and why work offers can be a recruitment trap."
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/russia/bangladesh-offices",
        "label": "Bangladesh Offices & Support",
        "title": "Eammu Holidays Bangladesh Offices and Support",
        "d": "Walk-in counseling in Dhaka and online or courier processing for Russia study applicants in every division of Bangladesh."
      },
      {
        "href": "/study/russia/consultancy-in-dhaka",
        "label": "Dhaka Consultancy",
        "title": "Study in Russia Consultancy in Dhaka",
        "d": "Study in Russia consultancy in Dhaka for 2026: free walk-in counseling, scholarship guidance, recognition checks and honest safety advice fr"
      },
      {
        "href": "/study/russia/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy",
        "title": "Study in Russia Consultancy for Uttara Students",
        "d": "Study in Russia consultancy for Uttara, Dhaka students in 2026: free counseling, scholarship guidance and honest safety advice from Eammu by"
      },
      {
        "href": "/study/russia/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy",
        "title": "Study in Russia Consultancy for Dhanmondi Students",
        "d": "Study in Russia consultancy for Dhanmondi, Dhaka students in 2026: MBBS and scholarship counseling, accreditation checks and safety advice f"
      },
      {
        "href": "/study/russia/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy",
        "title": "Study in Russia Consultancy for Mirpur Students",
        "d": "Study in Russia consultancy for Mirpur, Dhaka students in 2026: budget-aware counseling, scholarship guidance and scam warnings from Eammu H"
      },
      {
        "href": "/study/russia/consultancy-in-chattogram",
        "label": "Chattogram Consultancy",
        "title": "Study in Russia Consultancy for Chattogram Students",
        "d": "Study in Russia consultancy for Chattogram students in 2026: online counseling, courier document support and honest safety and visa advice f"
      },
      {
        "href": "/study/russia/consultancy-in-sylhet",
        "label": "Sylhet Consultancy",
        "title": "Study in Russia Consultancy for Sylhet Students",
        "d": "Study in Russia consultancy for Sylhet students in 2026: online counseling, family-sponsor document help and honest payment and safety advic"
      },
      {
        "href": "/study/russia/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy",
        "title": "Study in Russia Consultancy for Rajshahi Students",
        "d": "Study in Russia consultancy for Rajshahi students in 2026: online counseling, courier documents, graduate scholarships and safety advice fro"
      },
      {
        "href": "/study/russia/consultancy-in-khulna",
        "label": "Khulna Consultancy",
        "title": "Study in Russia Consultancy for Khulna Students",
        "d": "Study in Russia consultancy for Khulna students in 2026: online counseling, courier documents, engineering pathways and honest visa advice f"
      },
      {
        "href": "/study/russia/consultancy-in-barishal",
        "label": "Barishal Consultancy",
        "title": "Study in Russia Consultancy for Barishal Students",
        "d": "Study in Russia consultancy for Barishal students in 2026: online counseling, courier document help, recognition checks and safety advice fr"
      },
      {
        "href": "/study/russia/consultancy-in-rangpur",
        "label": "Rangpur Consultancy",
        "title": "Study in Russia Consultancy for Rangpur Students",
        "d": "Study in Russia consultancy for Rangpur students in 2026: online counseling, courier documents, free scholarship route and scam warnings fro"
      },
      {
        "href": "/study/russia/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy",
        "title": "Study in Russia Consultancy for Mymensingh Students",
        "d": "Study in Russia consultancy for Mymensingh students in 2026: easy access to Dhaka counseling, online support and honest visa advice from Eam"
      },
      {
        "href": "/study/russia/consultancy-in-cumilla",
        "label": "Cumilla Consultancy",
        "title": "Study in Russia Consultancy for Cumilla Students",
        "d": "Study in Russia consultancy for Cumilla students in 2026: local-area support, online counseling, scholarship and honest safety advice from E"
      },
      {
        "href": "/study/russia/consultancy-in-bogura",
        "label": "Bogura Consultancy",
        "title": "Study in Russia Consultancy for Bogura Students",
        "d": "Study in Russia consultancy for Bogura students in 2026: online counseling, courier document support and honest payment and safety advice fr"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/russia/consultancy-in-dhaka",
    "title": "Study in Russia Consultancy in Dhaka",
    "description": "Study in Russia consultancy in Dhaka for 2026: free walk-in counseling, scholarship guidance, recognition checks and honest safety advice fr"
  },
  {
    "href": "/study/russia",
    "title": "Study in Russia 2026: Complete Hub for Bangladeshi Students",
    "description": "Start here: every guide on tuition, the government scholarship quota, visas, MBBS, safety warnings, payments and local support for Bangladeshi students considering Russia."
  },
  {
    "href": "/study/russia/safety-and-scam-warning-for-students-in-russia",
    "title": "Safety, Sanctions and Scam Warning for Students in Russia",
    "description": "An honest guide to war, sanctions, payment restrictions and recruitment scams that Bangladeshi families must understand before studying in Russia."
  },
  {
    "href": "/study/russia/scholarships-in-russia-for-bangladeshi-students",
    "title": "Scholarships in Russia for Bangladeshi Students",
    "description": "How the Russian government scholarship quota works for Bangladeshi applicants: places, benefits, official portal and scam warnings."
  }
];
const FAQS = [
  {
    "q": "Where can I meet Eammu Holidays counselors in person?",
    "a": "Our main walk-in counseling desk is in Dhaka. Please call or WhatsApp to confirm an appointment time."
  },
  {
    "q": "Can I apply from outside Dhaka?",
    "a": "Yes. Eammu Holidays supports students in all divisions through online counseling and courier document handling."
  },
  {
    "q": "Do you charge for the first consultation?",
    "a": "Our first counseling session for Russia study is free."
  },
  {
    "q": "Do I have to pay anyone for a scholarship place?",
    "a": "No. The official government quota application is free. Never pay an agent for a guaranteed place."
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
          "name": "Russia",
          "item": "https://eammu.com/study/russia"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Bangladesh Offices & Support",
          "item": "https://eammu.com/study/russia/bangladesh-offices"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Russia Counseling Across Bangladesh: Offices and Support",
      "description": "Find Eammu Holidays study in Russia counseling in Bangladesh: walk-in support in Dhaka and online or courier help for every division and district.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/russia/bangladesh-offices",
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
          "name": "Where can I meet Eammu Holidays counselors in person?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our main walk-in counseling desk is in Dhaka. Please call or WhatsApp to confirm an appointment time."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply from outside Dhaka?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Eammu Holidays supports students in all divisions through online counseling and courier document handling."
          }
        },
        {
          "@type": "Question",
          "name": "Do you charge for the first consultation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our first counseling session for Russia study is free."
          }
        },
        {
          "@type": "Question",
          "name": "Do I have to pay anyone for a scholarship place?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The official government quota application is free. Never pay an agent for a guaranteed place."
          }
        }
      ]
    },
    {
      "@type": [
        "EducationalOrganization",
        "LocalBusiness"
      ],
      "name": "Eammu Holidays",
      "url": "https://eammu.com/study/russia/bangladesh-offices",
      "telephone": "+8801631312525",
      "email": "info@eammu.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dhaka, Bangladesh",
        "addressLocality": "Dhaka",
        "addressCountry": "BD"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Bangladesh"
      },
      "description": "Study in Russia counseling, recognition checks and student visa support for students in Bangladesh."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Russia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Russia Counseling Across Bangladesh: Offices and Support</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Walk in at our Dhaka desk or apply online from any division. This page connects you to local guides and every Russia study resource.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Russia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Russia guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">How Eammu Holidays supports students nationwide</h2>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays provides in-person counseling in Dhaka and remote support across Bangladesh, so a student in Rangpur or Barishal gets the same guidance as one in Uttara. Start with our overview of &#123;&#123;from-bd|studying in Russia from Bangladesh&#125;&#125; and <Link href="/study/russia/safety-and-scam-warning-for-students-in-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the safety and scam warning guide</Link>, then use the local guide closest to you, beginning with <Link href="/study/russia/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">consultancy in Dhaka</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">We give balanced advice, including on the free official scholarship route, the invitation letter timeline, degree recognition and payment risks; see <Link href="/study/russia/scholarships-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Russia</Link> and <Link href="/study/russia/medical-degree-recognition-and-bmdc-guide-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">medical degree recognition and BMDC checks</Link>. Documents move by email, WhatsApp and courier, so you rarely need to travel.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Divisional and district guides</h2>
<p className="mt-4 leading-7 text-slate-700">Each local page explains logistics specific to that area, and reminds families of the safety checks. Dhaka neighbourhood guides include <Link href="/study/russia/consultancy-in-uttara-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Uttara</Link>, <Link href="/study/russia/consultancy-in-dhanmondi-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Dhanmondi</Link> and <Link href="/study/russia/consultancy-in-mirpur-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mirpur</Link>. For other regions see <Link href="/study/russia/consultancy-in-chattogram" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Chattogram</Link>, <Link href="/study/russia/consultancy-in-sylhet" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Sylhet</Link>, <Link href="/study/russia/consultancy-in-rajshahi" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Rajshahi</Link>, <Link href="/study/russia/consultancy-in-khulna" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Khulna</Link>, <Link href="/study/russia/consultancy-in-barishal" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Barishal</Link>, <Link href="/study/russia/consultancy-in-rangpur" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Rangpur</Link>, <Link href="/study/russia/consultancy-in-mymensingh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mymensingh</Link>, <Link href="/study/russia/consultancy-in-cumilla" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cumilla</Link> and <Link href="/study/russia/consultancy-in-bogura" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bogura</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">What to prepare before contacting us</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>SSC, HSC, diploma or degree results (see <Link href="/study/russia/admission-requirements-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link>).</li><li>Passport scan or passport application status.</li><li>Language results, or tell us if you are exploring &#123;&#123;no-ielts|study in Russia without IELTS&#125;&#125;.</li><li>Your approximate budget, informed by <Link href="/study/russia/tuition-fees-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Russia</Link> and <Link href="/study/russia/cost-of-living-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">living costs</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Contact options</h2>
<p className="mt-4 leading-7 text-slate-700">Call or WhatsApp +8801631312525, email info@eammu.com, or visit our Dhaka counseling desk by appointment. Please confirm timing before visiting. Below you can find a directory of every Russia study guide.</p>
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

          <section aria-labelledby="directory-heading" className="mt-14">
            <h2 id="directory-heading" className="text-2xl font-bold text-emerald-900">Complete Directory: Every Russia Study Guide</h2>
            <p className="mt-3 leading-7 text-slate-700">Browse every guide in the series, grouped by topic. Each page is one click away.</p>
            {NAV.map((g) => {
              const items = g.pages.filter((p) => p.href !== PAGE_HREF);
              if (!items.length) return null;
              return (
                <div key={g.label} className="mt-8">
                  <h3 className="text-lg font-bold text-emerald-800">{g.label}</h3>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {items.map((p) => (
                      <Link key={p.href} href={p.href} className="rounded-lg border border-slate-200 bg-white p-4 transition hover:border-yellow-400 hover:shadow">
                        <span className="block font-semibold text-emerald-900">{p.title}</span>
                        <span className="mt-1 block text-sm leading-5 text-slate-600">{p.d}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>

          <section aria-labelledby="related-heading" className="mt-14">
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Russia Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Russia</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university shortlist, visa guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
