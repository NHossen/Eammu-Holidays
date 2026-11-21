import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/russia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Russia Hub for Bangladeshis 2026 | Eammu Holidays",
  "description": "Complete 2026 guide to study in Russia from Bangladesh: costs in BDT, quota scholarships, visa steps, MBBS, and honest safety and payment warnings.",
  "alternates": {
    "canonical": "https://eammu.com/study/russia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Russia Hub for Bangladeshis 2026 | Eammu Holidays",
    "description": "Complete 2026 guide to study in Russia from Bangladesh: costs in BDT, quota scholarships, visa steps, MBBS, and honest safety and payment warnings.",
    "url": "https://eammu.com/study/russia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Russia Hub for Bangladeshis 2026 | Eammu Holidays",
    "description": "Complete 2026 guide to study in Russia from Bangladesh: costs in BDT, quota scholarships, visa steps, MBBS, and honest safety and payment warnings."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Russia", "href": "/study/russia"}];
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
    "href": "/study/russia/safety-and-scam-warning-for-students-in-russia",
    "title": "Safety, Sanctions and Scam Warning for Students in Russia",
    "description": "An honest guide to war, sanctions, payment restrictions and recruitment scams that Bangladeshi families must understand before studying in Russia."
  },
  {
    "href": "/study/russia/scholarships-in-russia-for-bangladeshi-students",
    "title": "Scholarships in Russia for Bangladeshi Students",
    "description": "How the Russian government scholarship quota works for Bangladeshi applicants: places, benefits, official portal and scam warnings."
  },
  {
    "href": "/study/russia/study-in-russia-from-bangladesh",
    "title": "Study in Russia from Bangladesh",
    "description": "A practical roadmap for studying in Russia from Bangladesh: choosing a course, costs, the invitation letter, visa steps and safety checks."
  },
  {
    "href": "/study/russia/bangladesh-offices",
    "title": "Eammu Holidays Bangladesh Offices and Support",
    "description": "Walk-in counseling in Dhaka and online or courier processing for Russia study applicants in every division of Bangladesh."
  }
];
const FAQS = [
  {
    "q": "Is it safe to study in Russia in 2026?",
    "a": "Russia is at war with Ukraine and under sanctions, several governments advise against travel, and Bangladeshis have been tricked or coerced into Russian military service. Each family must weigh these risks carefully and check the latest Bangladesh government advice."
  },
  {
    "q": "Are there scholarships for Bangladeshi students in Russia?",
    "a": "Yes. The Russian government quota offered 200 places for Bangladeshi students for 2026/27, applied for through the official portal. It covers tuition, with a dormitory and stipend under the quota. Competition is strong."
  },
  {
    "q": "Can I pay tuition to a Russian university from Bangladesh?",
    "a": "Payments are difficult because of sanctions and the SWIFT and card restrictions. Confirm the exact legal method with the university and your bank, and avoid informal money channels."
  },
  {
    "q": "Is a Russian medical degree accepted in Bangladesh?",
    "a": "Not automatically. Bangladeshi graduates of foreign medical schools must satisfy BMDC's rules, so verify before enrolling."
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
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Russia 2026: Complete Guide for Bangladeshi Students",
      "description": "Complete 2026 guide to study in Russia from Bangladesh: costs in BDT, quota scholarships, visa steps, MBBS, and honest safety and payment warnings.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/russia",
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
          "name": "Is it safe to study in Russia in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Russia is at war with Ukraine and under sanctions, several governments advise against travel, and Bangladeshis have been tricked or coerced into Russian military service. Each family must weigh these risks carefully and check the latest Bangladesh government advice."
          }
        },
        {
          "@type": "Question",
          "name": "Are there scholarships for Bangladeshi students in Russia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Russian government quota offered 200 places for Bangladeshi students for 2026/27, applied for through the official portal. It covers tuition, with a dormitory and stipend under the quota. Competition is strong."
          }
        },
        {
          "@type": "Question",
          "name": "Can I pay tuition to a Russian university from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Payments are difficult because of sanctions and the SWIFT and card restrictions. Confirm the exact legal method with the university and your bank, and avoid informal money channels."
          }
        },
        {
          "@type": "Question",
          "name": "Is a Russian medical degree accepted in Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Bangladeshi graduates of foreign medical schools must satisfy BMDC's rules, so verify before enrolling."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Russia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Russia 2026: Complete Guide for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Costs in BDT, government scholarships, visa steps, MBBS and degree options, and an honest look at safety, sanctions and scam risks. 37 detailed guides built for Bangladeshi families.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Read this first: risks you must understand</h2>
<p className="mt-4 leading-7 text-slate-700">Russia is at war with Ukraine and is under wide international sanctions. Several governments advise against travel to Russia, international Visa and Mastercard cards do not work there, and Bangladeshi authorities, the United Nations and human-rights groups have documented Bangladeshis being tricked or coerced into Russian military service, including people who travelled for work and, according to some reports, foreign students. Read the safety guide and check the latest advice from the Bangladesh Ministry of Foreign Affairs and the Bangladesh Embassy in Moscow before you decide.</p>
<p className="mt-4 leading-7 text-slate-700">Because of these risks, we ask every family to read <Link href="/study/russia/safety-and-scam-warning-for-students-in-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the safety, sanctions and scam warning guide</Link> before paying any money or signing any document. Never sign a paper in Russian that you cannot read, never accept a job or military-related offer connected to a study application, and use only official channels such as the university and the education-in-russia.com portal for scholarships.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Why Bangladeshi students still consider Russia</h2>
<p className="mt-4 leading-7 text-slate-700">Russia offers very low tuition at state universities, a large number of English-taught medical programmes and a government scholarship quota that has grown to 200 places for Bangladeshi students for 2026/27, covering tuition, a dormitory and a monthly stipend. See <Link href="/study/russia/scholarships-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Russia for Bangladeshi students</Link>, <Link href="/study/russia/mbbs-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MBBS in Russia for Bangladeshi students</Link> and <Link href="/study/russia/tuition-fees-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Russia for Bangladeshi students</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">Read the full roadmap in &#123;&#123;from-bd|studying in Russia from Bangladesh&#125;&#125;, and compare it with <Link href="/study/russia/cost-of-living-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Russia</Link> and the <Link href="/study/russia/invitation-letter-and-visa-process-guide-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">invitation letter and visa process</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Where to begin: choose your level and route</h2>
<p className="mt-4 leading-7 text-slate-700">Students with SSC should read <Link href="/study/russia/study-in-russia-after-ssc" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Russia after SSC</Link>, diploma holders can see <Link href="/study/russia/study-in-russia-after-diploma" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Russia after diploma</Link>, and HSC graduates can follow the <Link href="/study/russia/admission-requirements-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements for Bangladeshi students</Link>. Many programmes are taught in Russian and start with a language year; see <Link href="/study/russia/russian-language-preparatory-year-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Russian language preparatory year guide</Link>. If English tests are a concern, see &#123;&#123;no-ielts|studying in Russia without IELTS&#125;&#125;.</p>
<p className="mt-4 leading-7 text-slate-700">Next, shortlist institutions using <Link href="/study/russia/cheapest-universities-in-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the cheapest universities in Russia</Link> and <Link href="/study/russia/top-universities-in-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Russia</Link>, and check <Link href="/study/russia/medical-degree-recognition-and-bmdc-guide-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">medical degree recognition and BMDC checks</Link> if you are considering medicine.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Indicative cost snapshot (RUB and BDT)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">Approx. RUB</th><th scope="col" className="px-3 py-2 text-left font-bold">Approx. BDT</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Quota scholarship (tuition covered)</td><td className="px-3 py-2 align-top">Tuition free, dormitory and stipend</td><td className="px-3 py-2 align-top">Living costs still apply</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor&apos;s tuition per year, self-funded</td><td className="px-3 py-2 align-top">RUB 250,000 – 700,000</td><td className="px-3 py-2 align-top">Tk 3.9 – 10.9 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Medicine (English) tuition per year</td><td className="px-3 py-2 align-top">RUB 220,000 – 1,150,000</td><td className="px-3 py-2 align-top">Tk 3.4 – 17.8 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Russian language preparatory year</td><td className="px-3 py-2 align-top">RUB 150,000 – 300,000</td><td className="px-3 py-2 align-top">Tk 2.3 – 4.7 lakh</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 USD = about Tk 122 and 1 RUB = about Tk 1.55 and are indicative estimates for 2026–2027 based on published university fee schedules. Fees, visa rules and exchange rates change, and sanctions affect payments, so always confirm with the university, the Russian authorities or an Eammu Holidays counselor before paying.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">How Eammu Holidays supports you</h2>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays offers walk-in counseling in Dhaka and online and courier support across Bangladesh, with a focus on honest information, document preparation and free official scholarship applications. Find your nearest support route on our <Link href="/study/russia/bangladesh-offices" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bangladesh offices and locations page</Link>, or go to <Link href="/study/russia/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Russia consultancy in Dhaka</Link>.</p>
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
