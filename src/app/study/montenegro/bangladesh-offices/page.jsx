import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/montenegro/bangladesh-offices';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Montenegro Bangladesh Offices 2026 | Eammu Holidays",
  "description": "Find Eammu Holidays study in Montenegro counseling in Bangladesh: walk-in support in Dhaka and online or courier help for every division and district.",
  "alternates": {
    "canonical": "https://eammu.com/study/montenegro/bangladesh-offices"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Montenegro Bangladesh Offices 2026 | Eammu Holidays",
    "description": "Find Eammu Holidays study in Montenegro counseling in Bangladesh: walk-in support in Dhaka and online or courier help for every division and district.",
    "url": "https://eammu.com/study/montenegro/bangladesh-offices",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Montenegro Bangladesh Offices 2026 | Eammu Holidays",
    "description": "Find Eammu Holidays study in Montenegro counseling in Bangladesh: walk-in support in Dhaka and online or courier help for every division and district."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Montenegro", "href": "/study/montenegro"}, {"name": "Bangladesh Offices & Support", "href": "/study/montenegro/bangladesh-offices"}];
const NAV = [
  {
    "label": "Montenegro Hub",
    "pages": [
      {
        "href": "/study/montenegro",
        "label": "Study in Montenegro Hub",
        "title": "Study in Montenegro 2026: Complete Hub for Bangladeshi Students",
        "d": "Start here: every guide on tuition, the D visa, residence permits, universities, language, work rules and local support for Bangladeshi students planning to study in Montenegro."
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/montenegro/study-in-montenegro-from-bangladesh",
        "label": "Study from Bangladesh",
        "title": "Study in Montenegro from Bangladesh",
        "d": "A practical roadmap for studying in Montenegro from Bangladesh: choosing a programme, costs, the D visa, residence permit steps and timelines."
      },
      {
        "href": "/study/montenegro/study-in-montenegro-without-ielts",
        "label": "Without IELTS",
        "title": "Study in Montenegro Without IELTS",
        "d": "How Bangladeshi students can enter Montenegrin universities without IELTS using interviews, internal tests or a Montenegrin language route."
      },
      {
        "href": "/study/montenegro/tuition-fees-in-montenegro-for-bangladeshi-students",
        "label": "Tuition Fees",
        "title": "Tuition Fees in Montenegro for Bangladeshi Students",
        "d": "Realistic tuition ranges in EUR and BDT for public and private universities in Montenegro, plus extra costs."
      },
      {
        "href": "/study/montenegro/cost-of-living-in-montenegro-for-bangladeshi-students",
        "label": "Cost of Living",
        "title": "Cost of Living in Montenegro for Bangladeshi Students",
        "d": "Monthly budget breakdown for rent, food, transport and phone in Podgorica, Bar and other Montenegrin student cities."
      },
      {
        "href": "/study/montenegro/cheapest-universities-in-montenegro",
        "label": "Cheapest Universities",
        "title": "Cheapest Universities in Montenegro",
        "d": "How to find low-cost Montenegrin universities and what to check beyond the headline tuition fee, including language and recognition."
      },
      {
        "href": "/study/montenegro/top-universities-in-montenegro",
        "label": "Top Universities",
        "title": "Top Universities in Montenegro",
        "d": "Overview of well-known universities in Montenegro and how to choose among them."
      },
      {
        "href": "/study/montenegro/public-vs-private-universities-in-montenegro",
        "label": "Public vs Private",
        "title": "Public vs Private Universities in Montenegro",
        "d": "Compare fees, entry rules, language and campus life at the public university and private universities in Montenegro."
      },
      {
        "href": "/study/montenegro/scholarships-in-montenegro-for-bangladeshi-students",
        "label": "Scholarships",
        "title": "Scholarships in Montenegro for Bangladeshi Students",
        "d": "Types of scholarships and funding available to Bangladeshi students in Montenegro and how to read offers carefully."
      },
      {
        "href": "/study/montenegro/admission-requirements-in-montenegro-for-bangladeshi-students",
        "label": "Admission Requirements",
        "title": "Admission Requirements in Montenegro for Bangladeshi Students",
        "d": "SSC, HSC, diploma, language and document requirements for Montenegrin universities explained for Bangladeshi applicants."
      },
      {
        "href": "/study/montenegro/study-gap-accepted-universities-in-montenegro",
        "label": "Study Gap Accepted",
        "title": "Study Gap Accepted Universities in Montenegro",
        "d": "How study gaps are treated by Montenegrin universities and what documents explain a gap for Bangladeshi applicants."
      },
      {
        "href": "/study/montenegro/study-in-montenegro-after-ssc",
        "label": "After SSC",
        "title": "Study in Montenegro After SSC",
        "d": "Pathway options for SSC graduates planning to study in Montenegro, and why HSC matters and early routes carry risk."
      },
      {
        "href": "/study/montenegro/study-in-montenegro-after-diploma",
        "label": "After Diploma",
        "title": "Study in Montenegro After Diploma",
        "d": "Degree entry and recognition options for Bangladeshi polytechnic and diploma holders in Montenegro."
      },
      {
        "href": "/study/montenegro/montenegro-intake-dates",
        "label": "Intake Dates",
        "title": "Montenegro Intake Dates",
        "d": "Main intake and application windows in Montenegro and the best time for Bangladeshi students to start applications."
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/montenegro/degree-recognition-and-accreditation-in-montenegro",
        "label": "Degree Recognition",
        "title": "Degree Recognition and Accreditation in Montenegro",
        "d": "How accreditation and degree recognition work for Montenegrin universities and how Bangladeshi students should verify equivalence."
      },
      {
        "href": "/study/montenegro/montenegrin-language-and-english-taught-programs-guide",
        "label": "Language & English Programmes",
        "title": "Montenegrin Language and English-Taught Programmes Guide",
        "d": "Which Montenegrin programmes are taught in English, when you need Montenegrin and how preparatory courses work for Bangladeshi students."
      },
      {
        "href": "/study/montenegro/hospitality-tourism-and-business-degrees-in-montenegro",
        "label": "Hospitality & Business",
        "title": "Hospitality, Tourism and Business Degrees in Montenegro",
        "d": "Hospitality, tourism, management and business study options in Montenegro for Bangladeshi students, with costs and career realities."
      },
      {
        "href": "/study/montenegro/cse-and-it-courses-in-montenegro",
        "label": "CSE & IT Courses",
        "title": "CSE and IT Courses in Montenegro",
        "d": "Computer science, software and IT study options in Montenegro for Bangladeshi students."
      },
      {
        "href": "/study/montenegro/student-accommodation-in-montenegro",
        "label": "Student Accommodation",
        "title": "Student Accommodation in Montenegro",
        "d": "Dormitories, shared apartments and private housing options with typical monthly rents for students in Montenegro."
      }
    ]
  },
  {
    "label": "Visa, Permit & Work Rules",
    "pages": [
      {
        "href": "/study/montenegro/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements",
        "title": "Montenegro Student Visa Requirements for Bangladesh",
        "d": "Documents and steps for a Montenegrin long-stay D visa from Bangladesh, including admission letter, funds, insurance and residence permit."
      },
      {
        "href": "/study/montenegro/temporary-residence-permit-and-arrival-guide-montenegro",
        "label": "Residence Permit & Arrival",
        "title": "Temporary Residence Permit and Arrival Guide for Montenegro",
        "d": "What happens after admission: D visa, arrival, biometrics and the temporary residence permit for students in Montenegro."
      },
      {
        "href": "/study/montenegro/bank-solvency-requirements-for-montenegro-student-visa",
        "label": "Bank Solvency",
        "title": "Bank Solvency Requirements for Montenegro Student Visa",
        "d": "How much money proof Bangladeshi students should prepare and how to present bank statements for Montenegro."
      },
      {
        "href": "/study/montenegro/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost",
        "title": "Montenegro Student Visa Processing Time and Cost",
        "d": "Typical processing time and the main fees Bangladeshi students should budget for in a Montenegro visa and permit application."
      },
      {
        "href": "/study/montenegro/part-time-job-and-post-study-work-rules-in-montenegro",
        "label": "Work Rules",
        "title": "Part-Time Job and Post-Study Work Rules in Montenegro",
        "d": "What international students may and may not do regarding work in Montenegro, and why staying after graduation is not guaranteed."
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/montenegro/bangladesh-offices",
        "label": "Bangladesh Offices & Support",
        "title": "Eammu Holidays Bangladesh Offices and Support",
        "d": "Walk-in counseling in Dhaka and online or courier processing for Montenegro study applicants in every division of Bangladesh."
      },
      {
        "href": "/study/montenegro/consultancy-in-dhaka",
        "label": "Dhaka Consultancy",
        "title": "Study in Montenegro Consultancy in Dhaka",
        "d": "Study in Montenegro consultancy in Dhaka for 2026: free walk-in counseling, university shortlisting, language checks and visa guidance from "
      },
      {
        "href": "/study/montenegro/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy",
        "title": "Study in Montenegro Consultancy for Uttara Students",
        "d": "Study in Montenegro consultancy for Uttara, Dhaka students in 2026: free counseling, language checks and visa preparation from Eammu by appo"
      },
      {
        "href": "/study/montenegro/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy",
        "title": "Study in Montenegro Consultancy for Dhanmondi Students",
        "d": "Study in Montenegro consultancy for Dhanmondi, Dhaka students in 2026: counseling, university shortlisting, recognition checks and visa help"
      },
      {
        "href": "/study/montenegro/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy",
        "title": "Study in Montenegro Consultancy for Mirpur Students",
        "d": "Study in Montenegro consultancy for Mirpur, Dhaka students in 2026: budget-friendly counseling, diploma pathways and visa preparation from E"
      },
      {
        "href": "/study/montenegro/consultancy-in-chattogram",
        "label": "Chattogram Consultancy",
        "title": "Study in Montenegro Consultancy for Chattogram Students",
        "d": "Study in Montenegro consultancy for Chattogram students in 2026: online counseling, courier document support and honest visa advice from Eam"
      },
      {
        "href": "/study/montenegro/consultancy-in-sylhet",
        "label": "Sylhet Consultancy",
        "title": "Study in Montenegro Consultancy for Sylhet Students",
        "d": "Study in Montenegro consultancy for Sylhet students in 2026: online counseling, family-sponsor document help and honest visa advice from Eam"
      },
      {
        "href": "/study/montenegro/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy",
        "title": "Study in Montenegro Consultancy for Rajshahi Students",
        "d": "Study in Montenegro consultancy for Rajshahi students in 2026: online counseling, courier documents, graduate pathways and visa guidance fro"
      },
      {
        "href": "/study/montenegro/consultancy-in-khulna",
        "label": "Khulna Consultancy",
        "title": "Study in Montenegro Consultancy for Khulna Students",
        "d": "Study in Montenegro consultancy for Khulna students in 2026: online counseling, courier documents, IT pathways and honest visa guidance from"
      },
      {
        "href": "/study/montenegro/consultancy-in-barishal",
        "label": "Barishal Consultancy",
        "title": "Study in Montenegro Consultancy for Barishal Students",
        "d": "Study in Montenegro consultancy for Barishal students in 2026: online counseling, courier document help, recognition checks and visa guidanc"
      },
      {
        "href": "/study/montenegro/consultancy-in-rangpur",
        "label": "Rangpur Consultancy",
        "title": "Study in Montenegro Consultancy for Rangpur Students",
        "d": "Study in Montenegro consultancy for Rangpur students in 2026: online counseling, courier documents, scholarship checks and visa guidance fro"
      },
      {
        "href": "/study/montenegro/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy",
        "title": "Study in Montenegro Consultancy for Mymensingh Students",
        "d": "Study in Montenegro consultancy for Mymensingh students in 2026: easy access to Dhaka counseling, online support and visa preparation from E"
      },
      {
        "href": "/study/montenegro/consultancy-in-cumilla",
        "label": "Cumilla Consultancy",
        "title": "Study in Montenegro Consultancy for Cumilla Students",
        "d": "Study in Montenegro consultancy for Cumilla students in 2026: local-area support, online counseling, recognition and visa guidance from Eamm"
      },
      {
        "href": "/study/montenegro/consultancy-in-bogura",
        "label": "Bogura Consultancy",
        "title": "Study in Montenegro Consultancy for Bogura Students",
        "d": "Study in Montenegro consultancy for Bogura students in 2026: online counseling, courier document support and visa guidance from Eammu Holida"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/montenegro/consultancy-in-dhaka",
    "title": "Study in Montenegro Consultancy in Dhaka",
    "description": "Study in Montenegro consultancy in Dhaka for 2026: free walk-in counseling, university shortlisting, language checks and visa guidance from "
  },
  {
    "href": "/study/montenegro",
    "title": "Study in Montenegro 2026: Complete Hub for Bangladeshi Students",
    "description": "Start here: every guide on tuition, the D visa, residence permits, universities, language, work rules and local support for Bangladeshi students planning to study in Montenegro."
  },
  {
    "href": "/study/montenegro/study-in-montenegro-from-bangladesh",
    "title": "Study in Montenegro from Bangladesh",
    "description": "A practical roadmap for studying in Montenegro from Bangladesh: choosing a programme, costs, the D visa, residence permit steps and timelines."
  },
  {
    "href": "/study/montenegro/montenegrin-language-and-english-taught-programs-guide",
    "title": "Montenegrin Language and English-Taught Programmes Guide",
    "description": "Which Montenegrin programmes are taught in English, when you need Montenegrin and how preparatory courses work for Bangladeshi students."
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
    "a": "Our first counseling session for Montenegro study is free."
  },
  {
    "q": "Can you promise a route to the EU?",
    "a": "No. Montenegro is not in the EU or Schengen area, and anyone promising that is a warning sign."
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
          "name": "Montenegro",
          "item": "https://eammu.com/study/montenegro"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Bangladesh Offices & Support",
          "item": "https://eammu.com/study/montenegro/bangladesh-offices"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Montenegro Counseling Across Bangladesh: Offices and Support",
      "description": "Find Eammu Holidays study in Montenegro counseling in Bangladesh: walk-in support in Dhaka and online or courier help for every division and district.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/montenegro/bangladesh-offices",
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
            "text": "Our first counseling session for Montenegro study is free."
          }
        },
        {
          "@type": "Question",
          "name": "Can you promise a route to the EU?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Montenegro is not in the EU or Schengen area, and anyone promising that is a warning sign."
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
      "url": "https://eammu.com/study/montenegro/bangladesh-offices",
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
      "description": "Study in Montenegro counseling, recognition checks and student visa support for students in Bangladesh."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Montenegro 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Montenegro Counseling Across Bangladesh: Offices and Support</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Walk in at our Dhaka desk or apply online from any division. This page connects you to local guides and every Montenegro study resource.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Montenegro guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Montenegro guides</summary>
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
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays provides in-person counseling in Dhaka and remote support across Bangladesh, so a student in Rangpur or Barishal gets the same guidance as one in Uttara. Start with our overview of &#123;&#123;from-bd|studying in Montenegro from Bangladesh&#125;&#125;, then use the local guide closest to you, beginning with <Link href="/study/montenegro/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">consultancy in Dhaka</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">We give balanced advice, including on language, visa risk and what a Montenegrin permit does not allow; see <Link href="/study/montenegro/montenegrin-language-and-english-taught-programs-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the language and English-taught programmes guide</Link> and <Link href="/study/montenegro/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa requirements</Link>. Documents move by email, WhatsApp and courier, so you rarely need to travel.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Divisional and district guides</h2>
<p className="mt-4 leading-7 text-slate-700">Each local page explains logistics specific to that area. Dhaka neighbourhood guides include <Link href="/study/montenegro/consultancy-in-uttara-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Uttara</Link>, <Link href="/study/montenegro/consultancy-in-dhanmondi-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Dhanmondi</Link> and <Link href="/study/montenegro/consultancy-in-mirpur-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mirpur</Link>. For other regions see <Link href="/study/montenegro/consultancy-in-chattogram" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Chattogram</Link>, <Link href="/study/montenegro/consultancy-in-sylhet" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Sylhet</Link>, <Link href="/study/montenegro/consultancy-in-rajshahi" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Rajshahi</Link>, <Link href="/study/montenegro/consultancy-in-khulna" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Khulna</Link>, <Link href="/study/montenegro/consultancy-in-barishal" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Barishal</Link>, <Link href="/study/montenegro/consultancy-in-rangpur" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Rangpur</Link>, <Link href="/study/montenegro/consultancy-in-mymensingh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mymensingh</Link>, <Link href="/study/montenegro/consultancy-in-cumilla" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cumilla</Link> and <Link href="/study/montenegro/consultancy-in-bogura" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bogura</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">What to prepare before contacting us</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>SSC, HSC, diploma or degree results (see <Link href="/study/montenegro/admission-requirements-in-montenegro-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link>).</li><li>Passport scan or passport application status.</li><li>English test result, or tell us if you are exploring &#123;&#123;no-ielts|study in Montenegro without IELTS&#125;&#125;.</li><li>Your approximate budget, informed by <Link href="/study/montenegro/tuition-fees-in-montenegro-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Montenegro</Link> and <Link href="/study/montenegro/cost-of-living-in-montenegro-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">living costs</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Contact options</h2>
<p className="mt-4 leading-7 text-slate-700">Call or WhatsApp +8801631312525, email info@eammu.com, or visit our Dhaka counseling desk by appointment. Please confirm timing before visiting. Below you can find a directory of every Montenegro study guide.</p>
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
            <h2 id="directory-heading" className="text-2xl font-bold text-emerald-900">Complete Directory: Every Montenegro Study Guide</h2>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Montenegro Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Montenegro</h2>
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
