import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/south-korea';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in South Korea 2026 for Bangladeshis | Eammu Holidays",
  "description": "Complete 2026 guide to study in South Korea from Bangladesh: costs in BDT, D-2 and D-4 visa steps, TOPIK, GKS scholarships and free counseling. Eammu.",
  "alternates": {
    "canonical": "https://eammu.com/study/south-korea"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in South Korea 2026 for Bangladeshis | Eammu Holidays",
    "description": "Complete 2026 guide to study in South Korea from Bangladesh: costs in BDT, D-2 and D-4 visa steps, TOPIK, GKS scholarships and free counseling. Eammu.",
    "url": "https://eammu.com/study/south-korea",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in South Korea 2026 for Bangladeshis | Eammu Holidays",
    "description": "Complete 2026 guide to study in South Korea from Bangladesh: costs in BDT, D-2 and D-4 visa steps, TOPIK, GKS scholarships and free counseling. Eammu."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "South Korea", "href": "/study/south-korea"}];
const NAV = [
  {
    "label": "South Korea Hub",
    "pages": [
      {
        "href": "/study/south-korea",
        "label": "Study in South Korea Hub",
        "title": "Study in South Korea 2026: Complete Hub for Bangladeshi Students",
        "d": "Start here: every guide on tuition, D-2 and D-4 visas, TOPIK, GKS scholarships, universities and local support for Bangladeshi students."
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/south-korea/study-in-south-korea-from-bangladesh",
        "label": "Study from Bangladesh",
        "title": "Study in South Korea from Bangladesh",
        "d": "A practical roadmap for studying in South Korea from Bangladesh: levels, costs, visa steps and timelines in one place."
      },
      {
        "href": "/study/south-korea/study-in-south-korea-without-ielts",
        "label": "Without IELTS",
        "title": "Study in South Korea Without IELTS",
        "d": "How Bangladeshi students can enter Korean universities without IELTS using TOPIK, Korean-taught programmes or English proof alternatives."
      },
      {
        "href": "/study/south-korea/tuition-fees-in-south-korea-for-bangladeshi-students",
        "label": "Tuition Fees",
        "title": "Tuition Fees in South Korea for Bangladeshi Students",
        "d": "Realistic tuition ranges in KRW and BDT for language, bachelor’s and master’s programmes in South Korea."
      },
      {
        "href": "/study/south-korea/cost-of-living-in-south-korea-for-bangladeshi-students",
        "label": "Cost of Living",
        "title": "Cost of Living in South Korea for Bangladeshi Students",
        "d": "Monthly budget breakdown for rent, food, transport and phone in Seoul, Busan, Daegu and other student cities."
      },
      {
        "href": "/study/south-korea/cheapest-universities-in-south-korea",
        "label": "Cheapest Universities",
        "title": "Cheapest Universities in South Korea",
        "d": "How to find low-cost Korean universities and what to check beyond the headline tuition fee."
      },
      {
        "href": "/study/south-korea/top-universities-in-south-korea",
        "label": "Top Universities",
        "title": "Top Universities in South Korea",
        "d": "Overview of leading national and private universities in South Korea and how to choose among them."
      },
      {
        "href": "/study/south-korea/public-vs-private-universities-in-south-korea",
        "label": "National vs Private",
        "title": "National vs Private Universities in South Korea",
        "d": "Compare fees, entry rules, intakes and campus life at national and private universities in South Korea."
      },
      {
        "href": "/study/south-korea/scholarships-in-south-korea-for-bangladeshi-students",
        "label": "Scholarships",
        "title": "Scholarships in South Korea for Bangladeshi Students",
        "d": "Types of scholarships and tuition waivers available to Bangladeshi students in South Korea and how to apply."
      },
      {
        "href": "/study/south-korea/admission-requirements-in-south-korea-for-bangladeshi-students",
        "label": "Admission Requirements",
        "title": "Admission Requirements in South Korea for Bangladeshi Students",
        "d": "HSC, diploma, language and document requirements for Korean universities explained for Bangladeshi applicants."
      },
      {
        "href": "/study/south-korea/study-gap-accepted-universities-in-south-korea",
        "label": "Study Gap Accepted",
        "title": "Study Gap Accepted Universities in South Korea",
        "d": "How study gaps are treated by Korean universities and the embassy, and which documents explain a gap."
      },
      {
        "href": "/study/south-korea/study-in-south-korea-after-ssc",
        "label": "After SSC",
        "title": "Study in South Korea After SSC",
        "d": "What SSC graduates can do to reach Korean degrees: finish HSC, language routes and realistic timelines."
      },
      {
        "href": "/study/south-korea/study-in-south-korea-after-diploma",
        "label": "After Diploma",
        "title": "Study in South Korea After Diploma",
        "d": "Entry and transfer options for Bangladeshi polytechnic and diploma holders aiming at Korean universities."
      },
      {
        "href": "/study/south-korea/south-korea-intake-dates",
        "label": "Intake Dates",
        "title": "South Korea Intake Dates",
        "d": "Main intake months in South Korea and the best time for Bangladeshi students to start applications."
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/south-korea/gks-scholarship-in-south-korea-for-bangladeshi-students",
        "label": "GKS Scholarship",
        "title": "GKS Scholarship in South Korea for Bangladeshi Students",
        "d": "How the Global Korea Scholarship works for Bangladeshi applicants: tracks, benefits, eligibility and application steps."
      },
      {
        "href": "/study/south-korea/mba-in-south-korea-for-bangladeshi-students",
        "label": "MBA in South Korea",
        "title": "MBA in South Korea for Bangladeshi Students",
        "d": "MBA entry rules, fees in BDT and work-experience expectations for Bangladeshi applicants in South Korea."
      },
      {
        "href": "/study/south-korea/cse-and-it-courses-in-south-korea",
        "label": "CSE & IT Courses",
        "title": "CSE and IT Courses in South Korea",
        "d": "Computer science, AI, semiconductors, software and cybersecurity study options in South Korea for Bangladeshi students."
      },
      {
        "href": "/study/south-korea/korean-language-course-and-topik-guide",
        "label": "Korean Language & TOPIK",
        "title": "Korean Language Course and TOPIK Guide",
        "d": "How Korean language institute programmes (D-4) and the TOPIK exam work for Bangladeshi students."
      },
      {
        "href": "/study/south-korea/student-accommodation-in-south-korea",
        "label": "Student Accommodation",
        "title": "Student Accommodation in South Korea",
        "d": "Dormitories, goshiwon and one-room options with typical monthly rents and deposits for students in South Korea."
      }
    ]
  },
  {
    "label": "Visa, COA & Work Rules",
    "pages": [
      {
        "href": "/study/south-korea/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements",
        "title": "South Korea Student Visa Requirements for Bangladesh",
        "d": "Documents and steps for a D-2 degree visa or D-4 language visa from Bangladesh, including certificate of admission."
      },
      {
        "href": "/study/south-korea/certificate-of-admission-and-visa-process-guide",
        "label": "COA & Visa Process",
        "title": "Certificate of Admission and Visa Process Guide",
        "d": "How the certificate of admission (COA) works and the typical stages from admission to visa issue in South Korea."
      },
      {
        "href": "/study/south-korea/bank-solvency-requirements-for-south-korea-student-visa",
        "label": "Bank Solvency",
        "title": "Bank Solvency Requirements for South Korea Student Visa",
        "d": "How much money proof Bangladeshi students should prepare and how to present bank statements for a Korean visa."
      },
      {
        "href": "/study/south-korea/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost",
        "title": "South Korea Student Visa Processing Time and Cost",
        "d": "Typical processing time and the main fees Bangladeshi students should budget for in a Korean visa application."
      },
      {
        "href": "/study/south-korea/part-time-job-and-post-study-work-rules-in-south-korea",
        "label": "Work Rules",
        "title": "Part-Time Job and Post-Study Work Rules in South Korea",
        "d": "What international students may and may not do regarding part-time work and staying after graduation in South Korea."
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/south-korea/bangladesh-offices",
        "label": "Bangladesh Offices & Support",
        "title": "Eammu Holidays Bangladesh Offices and Support",
        "d": "Walk-in counseling in Dhaka and online or courier processing for South Korea study applicants in every division of Bangladesh."
      },
      {
        "href": "/study/south-korea/consultancy-in-dhaka",
        "label": "Dhaka Consultancy",
        "title": "Study in South Korea Consultancy in Dhaka",
        "d": "Study in South Korea consultancy in Dhaka for 2026: free walk-in counseling, university shortlisting, GKS guidance and visa preparation from"
      },
      {
        "href": "/study/south-korea/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy",
        "title": "Study in South Korea Consultancy for Uttara Students",
        "d": "Study in South Korea consultancy for Uttara, Dhaka students in 2026: counseling, scholarship guidance and visa preparation from Eammu Holida"
      },
      {
        "href": "/study/south-korea/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy",
        "title": "Study in South Korea Consultancy for Dhanmondi Students",
        "d": "Study in South Korea consultancy for Dhanmondi, Dhaka students in 2026: counseling, GKS scholarship prep, university shortlisting and visa h"
      },
      {
        "href": "/study/south-korea/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy",
        "title": "Study in South Korea Consultancy for Mirpur Students",
        "d": "Study in South Korea consultancy for Mirpur, Dhaka students in 2026: budget-friendly counseling, language routes and visa preparation from E"
      },
      {
        "href": "/study/south-korea/consultancy-in-chattogram",
        "label": "Chattogram Consultancy",
        "title": "Study in South Korea Consultancy for Chattogram Students",
        "d": "Study in South Korea consultancy for Chattogram students in 2026: online counseling, courier document support, scholarship and visa guidance"
      },
      {
        "href": "/study/south-korea/consultancy-in-sylhet",
        "label": "Sylhet Consultancy",
        "title": "Study in South Korea Consultancy for Sylhet Students",
        "d": "Study in South Korea consultancy for Sylhet students in 2026: online counseling, family-sponsor document help, scholarship and visa guidance"
      },
      {
        "href": "/study/south-korea/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy",
        "title": "Study in South Korea Consultancy for Rajshahi Students",
        "d": "Study in South Korea consultancy for Rajshahi students in 2026: online counseling, courier documents, graduate pathways and visa guidance fr"
      },
      {
        "href": "/study/south-korea/consultancy-in-khulna",
        "label": "Khulna Consultancy",
        "title": "Study in South Korea Consultancy for Khulna Students",
        "d": "Study in South Korea consultancy for Khulna students in 2026: online counseling, courier documents, engineering pathways and visa guidance f"
      },
      {
        "href": "/study/south-korea/consultancy-in-barishal",
        "label": "Barishal Consultancy",
        "title": "Study in South Korea Consultancy for Barishal Students",
        "d": "Study in South Korea consultancy for Barishal students in 2026: online counseling, courier document help, scholarship and visa guidance from"
      },
      {
        "href": "/study/south-korea/consultancy-in-rangpur",
        "label": "Rangpur Consultancy",
        "title": "Study in South Korea Consultancy for Rangpur Students",
        "d": "Study in South Korea consultancy for Rangpur students in 2026: online counseling, courier documents, scholarship tips and visa guidance from"
      },
      {
        "href": "/study/south-korea/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy",
        "title": "Study in South Korea Consultancy for Mymensingh Students",
        "d": "Study in South Korea consultancy for Mymensingh students in 2026: easy access to Dhaka counseling, online support and visa preparation from "
      },
      {
        "href": "/study/south-korea/consultancy-in-cumilla",
        "label": "Cumilla Consultancy",
        "title": "Study in South Korea Consultancy for Cumilla Students",
        "d": "Study in South Korea consultancy for Cumilla students in 2026: local-area support, online counseling, scholarship and visa guidance from Eam"
      },
      {
        "href": "/study/south-korea/consultancy-in-bogura",
        "label": "Bogura Consultancy",
        "title": "Study in South Korea Consultancy for Bogura Students",
        "d": "Study in South Korea consultancy for Bogura students in 2026: online counseling, courier document support and visa guidance from Eammu Holid"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/south-korea/study-in-south-korea-from-bangladesh",
    "title": "Study in South Korea from Bangladesh",
    "description": "A practical roadmap for studying in South Korea from Bangladesh: levels, costs, visa steps and timelines in one place."
  },
  {
    "href": "/study/south-korea/tuition-fees-in-south-korea-for-bangladeshi-students",
    "title": "Tuition Fees in South Korea for Bangladeshi Students",
    "description": "Realistic tuition ranges in KRW and BDT for language, bachelor’s and master’s programmes in South Korea."
  },
  {
    "href": "/study/south-korea/gks-scholarship-in-south-korea-for-bangladeshi-students",
    "title": "GKS Scholarship in South Korea for Bangladeshi Students",
    "description": "How the Global Korea Scholarship works for Bangladeshi applicants: tracks, benefits, eligibility and application steps."
  },
  {
    "href": "/study/south-korea/bangladesh-offices",
    "title": "Eammu Holidays Bangladesh Offices and Support",
    "description": "Walk-in counseling in Dhaka and online or courier processing for South Korea study applicants in every division of Bangladesh."
  }
];
const FAQS = [
  {
    "q": "Is South Korea a good choice for Bangladeshi students in 2026?",
    "a": "Yes, for many students. It offers strong universities, scholarships and career links, but costs, language and visa screening need careful planning."
  },
  {
    "q": "How much does it cost to study in South Korea from Bangladesh?",
    "a": "Tuition at many universities runs roughly KRW 6 to 14 million per year for a bachelor's degree, plus about KRW 0.8 to 1.5 million per month for living, before any scholarship."
  },
  {
    "q": "Do I need to know Korean?",
    "a": "Not always. Many universities offer English-taught programmes, but Korean (TOPIK) helps with admission, scholarships, part-time work and daily life."
  },
  {
    "q": "Does Eammu Holidays handle the whole process?",
    "a": "Eammu Holidays assists with counseling, university selection, applications and visa preparation. Final decisions rest with the university and the Korean authorities."
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
          "name": "South Korea",
          "item": "https://eammu.com/study/south-korea"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in South Korea 2026: Complete Guide for Bangladeshi Students",
      "description": "Complete 2026 guide to study in South Korea from Bangladesh: costs in BDT, D-2 and D-4 visa steps, TOPIK, GKS scholarships and free counseling. Eammu.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/south-korea",
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
          "name": "Is South Korea a good choice for Bangladeshi students in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, for many students. It offers strong universities, scholarships and career links, but costs, language and visa screening need careful planning."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to study in South Korea from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tuition at many universities runs roughly KRW 6 to 14 million per year for a bachelor's degree, plus about KRW 0.8 to 1.5 million per month for living, before any scholarship."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to know Korean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not always. Many universities offer English-taught programmes, but Korean (TOPIK) helps with admission, scholarships, part-time work and daily life."
          }
        },
        {
          "@type": "Question",
          "name": "Does Eammu Holidays handle the whole process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eammu Holidays assists with counseling, university selection, applications and visa preparation. Final decisions rest with the university and the Korean authorities."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in South Korea 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in South Korea 2026: Complete Guide for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Costs in BDT, admission rules, visa steps and 37 detailed guides built for students and parents in Bangladesh.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in South Korea guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 South Korea guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Why Bangladeshi students choose South Korea</h2>
<p className="mt-4 leading-7 text-slate-700">South Korea combines world-class technology, strong universities, safe cities and generous scholarship programmes. For families in Bangladesh it is also a long-term career destination, with Korean companies active in Bangladesh and in global electronics, automotive and IT sectors. Read our full roadmap for &#123;&#123;from-bd|studying in South Korea from Bangladesh&#125;&#125;, then compare <Link href="/study/south-korea/tuition-fees-in-south-korea-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in South Korea for Bangladeshi students</Link> with <Link href="/study/south-korea/cost-of-living-in-south-korea-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the monthly cost of living in South Korea</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">The two biggest questions we hear are about language and money. Many degrees are taught in English, so &#123;&#123;no-ielts|studying in South Korea without IELTS&#125;&#125; and the role of TOPIK are explained in detail, while funding routes such as the <Link href="/study/south-korea/gks-scholarship-in-south-korea-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Global Korea Scholarship (GKS)</Link> and other <Link href="/study/south-korea/scholarships-in-south-korea-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in South Korea for Bangladeshi students</Link> can cut costs sharply.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Where to begin: choose your level and route</h2>
<p className="mt-4 leading-7 text-slate-700">SSC alone does not meet the 12-year schooling rule for most Korean bachelor&apos;s programmes, so students with SSC should read <Link href="/study/south-korea/study-in-south-korea-after-ssc" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in South Korea after SSC</Link>. Polytechnic graduates should see <Link href="/study/south-korea/study-in-south-korea-after-diploma" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in South Korea after diploma</Link>. HSC graduates can follow the <Link href="/study/south-korea/admission-requirements-in-south-korea-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements for Bangladeshi students</Link> for direct bachelor&apos;s entry, and many start with a Korean language programme described in <Link href="/study/south-korea/korean-language-course-and-topik-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Korean language course and TOPIK guide</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">Next, choose the type of institution. Our comparison of <Link href="/study/south-korea/public-vs-private-universities-in-south-korea" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">national vs private universities in South Korea</Link> explains the trade-offs, while <Link href="/study/south-korea/cheapest-universities-in-south-korea" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the cheapest universities in South Korea</Link> and <Link href="/study/south-korea/top-universities-in-south-korea" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in South Korea</Link> help you shortlist by budget or reputation.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Indicative cost snapshot (KRW and BDT)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">Approx. KRW</th><th scope="col" className="px-3 py-2 text-left font-bold">Approx. BDT</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Korean language course (1 year)</td><td className="px-3 py-2 align-top">KRW 4 – 7 million</td><td className="px-3 py-2 align-top">Tk 3.4 – 5.95 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor&apos;s tuition (per year)</td><td className="px-3 py-2 align-top">KRW 6 – 14 million</td><td className="px-3 py-2 align-top">Tk 5.1 – 11.9 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Master&apos;s tuition (per year)</td><td className="px-3 py-2 align-top">KRW 8 – 16 million</td><td className="px-3 py-2 align-top">Tk 6.8 – 13.6 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs (per month)</td><td className="px-3 py-2 align-top">KRW 0.8 – 1.5 million</td><td className="px-3 py-2 align-top">Tk 68,000 – 1,27,500</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1,000 KRW = about Tk 85 and are indicative estimates for 2026–2027. Fees, visa rules and exchange rates change, so always confirm with the university, the Korean Embassy in Dhaka or an Eammu Holidays counselor before paying.</p>
<p className="mt-4 leading-7 text-slate-700">Scholarships and tuition waivers can lower these numbers significantly; see <Link href="/study/south-korea/scholarships-in-south-korea-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in South Korea</Link> for realistic options.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Your step-by-step journey</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Shortlist universities and check <Link href="/study/south-korea/south-korea-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">South Korea intake dates</Link> (mainly March and September).</li><li>Prepare academic documents and check <Link href="/study/south-korea/study-gap-accepted-universities-in-south-korea" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">gap-accepted universities in South Korea</Link> if you have a study gap.</li><li>Receive an admission letter, then follow the <Link href="/study/south-korea/certificate-of-admission-and-visa-process-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">certificate of admission and visa process</Link>.</li><li>Arrange funds as explained in <Link href="/study/south-korea/bank-solvency-requirements-for-south-korea-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bank solvency requirements for the South Korea student visa</Link>.</li><li>Review the <Link href="/study/south-korea/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">D-2 and D-4 student visa requirements</Link> and plan <Link href="/study/south-korea/student-accommodation-in-south-korea" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student accommodation in South Korea</Link>.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">How Eammu Holidays supports you</h2>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays offers walk-in counseling in Dhaka and complete online and courier processing for students across Bangladesh. Find your nearest support route on our <Link href="/study/south-korea/bangladesh-offices" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bangladesh offices and locations page</Link>, or go directly to <Link href="/study/south-korea/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in South Korea consultancy in Dhaka</Link>.</p>
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
            <h2 id="directory-heading" className="text-2xl font-bold text-emerald-900">Complete Directory: Every South Korea Study Guide</h2>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related South Korea Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in South Korea</h2>
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
