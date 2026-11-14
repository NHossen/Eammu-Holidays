import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/south-korea/bangladesh-offices';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "South Korea Study Offices Bangladesh 2026 | Eammu Holidays",
  "description": "Find Eammu Holidays study in South Korea counseling in Bangladesh: walk-in support in Dhaka and online or courier help for every division and district.",
  "alternates": {
    "canonical": "https://eammu.com/study/south-korea/bangladesh-offices"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "South Korea Study Offices Bangladesh 2026 | Eammu Holidays",
    "description": "Find Eammu Holidays study in South Korea counseling in Bangladesh: walk-in support in Dhaka and online or courier help for every division and district.",
    "url": "https://eammu.com/study/south-korea/bangladesh-offices",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "South Korea Study Offices Bangladesh 2026 | Eammu Holidays",
    "description": "Find Eammu Holidays study in South Korea counseling in Bangladesh: walk-in support in Dhaka and online or courier help for every division and district."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "South Korea", "href": "/study/south-korea"}, {"name": "Bangladesh Offices & Support", "href": "/study/south-korea/bangladesh-offices"}];
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
    "href": "/study/south-korea/consultancy-in-dhaka",
    "title": "Study in South Korea Consultancy in Dhaka",
    "description": "Study in South Korea consultancy in Dhaka for 2026: free walk-in counseling, university shortlisting, GKS guidance and visa preparation from"
  },
  {
    "href": "/study/south-korea",
    "title": "Study in South Korea 2026: Complete Hub for Bangladeshi Students",
    "description": "Start here: every guide on tuition, D-2 and D-4 visas, TOPIK, GKS scholarships, universities and local support for Bangladeshi students."
  },
  {
    "href": "/study/south-korea/study-in-south-korea-from-bangladesh",
    "title": "Study in South Korea from Bangladesh",
    "description": "A practical roadmap for studying in South Korea from Bangladesh: levels, costs, visa steps and timelines in one place."
  },
  {
    "href": "/study/south-korea/certificate-of-admission-and-visa-process-guide",
    "title": "Certificate of Admission and Visa Process Guide",
    "description": "How the certificate of admission (COA) works and the typical stages from admission to visa issue in South Korea."
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
    "a": "Our first counseling session for South Korea study is free."
  },
  {
    "q": "Which documents can I send online?",
    "a": "Scans of academic papers, passport and photos can be shared online. Authenticated originals may be needed later."
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
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Bangladesh Offices & Support",
          "item": "https://eammu.com/study/south-korea/bangladesh-offices"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in South Korea Counseling Across Bangladesh: Offices and Support",
      "description": "Find Eammu Holidays study in South Korea counseling in Bangladesh: walk-in support in Dhaka and online or courier help for every division and district.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/south-korea/bangladesh-offices",
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
            "text": "Our first counseling session for South Korea study is free."
          }
        },
        {
          "@type": "Question",
          "name": "Which documents can I send online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scans of academic papers, passport and photos can be shared online. Authenticated originals may be needed later."
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
      "url": "https://eammu.com/study/south-korea/bangladesh-offices",
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
      "description": "Study in South Korea counseling, scholarship and student visa support for students in Bangladesh."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in South Korea Counseling Across Bangladesh: Offices and Support</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Walk in at our Dhaka desk or apply online from any division. This page connects you to local guides and every South Korea study resource.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">How Eammu Holidays supports students nationwide</h2>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays provides in-person counseling in Dhaka and fully remote support across Bangladesh, so a student in Rangpur or Barishal gets the same guidance as one in Uttara. Start with our overview of &#123;&#123;from-bd|studying in South Korea from Bangladesh&#125;&#125;, then use the local guide closest to you, beginning with <Link href="/study/south-korea/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">consultancy in Dhaka</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">Remote support covers profile review, university shortlisting, document checks, applications, <Link href="/study/south-korea/certificate-of-admission-and-visa-process-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">certificate of admission and visa preparation</Link> and pre-departure briefing. Documents move by email, WhatsApp and courier, so you rarely need to travel.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Divisional and district guides</h2>
<p className="mt-4 leading-7 text-slate-700">Each local page explains logistics specific to that area. Dhaka neighbourhood guides include <Link href="/study/south-korea/consultancy-in-uttara-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Uttara</Link>, <Link href="/study/south-korea/consultancy-in-dhanmondi-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Dhanmondi</Link> and <Link href="/study/south-korea/consultancy-in-mirpur-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mirpur</Link>. For other regions see <Link href="/study/south-korea/consultancy-in-chattogram" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Chattogram</Link>, <Link href="/study/south-korea/consultancy-in-sylhet" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Sylhet</Link>, <Link href="/study/south-korea/consultancy-in-rajshahi" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Rajshahi</Link>, <Link href="/study/south-korea/consultancy-in-khulna" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Khulna</Link>, <Link href="/study/south-korea/consultancy-in-barishal" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Barishal</Link>, <Link href="/study/south-korea/consultancy-in-rangpur" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Rangpur</Link>, <Link href="/study/south-korea/consultancy-in-mymensingh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mymensingh</Link>, <Link href="/study/south-korea/consultancy-in-cumilla" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cumilla</Link> and <Link href="/study/south-korea/consultancy-in-bogura" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bogura</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">What to prepare before contacting us</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>SSC, HSC, diploma or degree results (see <Link href="/study/south-korea/admission-requirements-in-south-korea-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link>).</li><li>Passport scan or passport application status.</li><li>English or TOPIK result, or tell us if you are exploring &#123;&#123;no-ielts|study in South Korea without IELTS&#125;&#125;.</li><li>Your approximate budget, informed by <Link href="/study/south-korea/tuition-fees-in-south-korea-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in South Korea</Link> and <Link href="/study/south-korea/cost-of-living-in-south-korea-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">living costs</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Contact options</h2>
<p className="mt-4 leading-7 text-slate-700">Call or WhatsApp +8801631312525, email info@eammu.com, or visit our Dhaka counseling desk by appointment. Please confirm timing before visiting. Below you can find a directory of every South Korea study guide.</p>
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
