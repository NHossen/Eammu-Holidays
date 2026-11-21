import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/armenia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Armenia Hub for Bangladeshis 2026 | Eammu Holidays",
  "description": "Complete 2026 guide to study in Armenia from Bangladesh: MBBS and degree costs in BDT, visa and residence permit steps, and free Eammu Holidays counseling.",
  "alternates": {
    "canonical": "https://eammu.com/study/armenia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Armenia Hub for Bangladeshis 2026 | Eammu Holidays",
    "description": "Complete 2026 guide to study in Armenia from Bangladesh: MBBS and degree costs in BDT, visa and residence permit steps, and free Eammu Holidays counseling.",
    "url": "https://eammu.com/study/armenia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Armenia Hub for Bangladeshis 2026 | Eammu Holidays",
    "description": "Complete 2026 guide to study in Armenia from Bangladesh: MBBS and degree costs in BDT, visa and residence permit steps, and free Eammu Holidays counseling."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Armenia", "href": "/study/armenia"}];
const NAV = [
  {
    "label": "Armenia Hub",
    "pages": [
      {
        "href": "/study/armenia",
        "label": "Study in Armenia Hub",
        "title": "Study in Armenia 2026: Complete Hub for Bangladeshi Students",
        "d": "Start here: every guide on tuition, visas, residence permits, MBBS, scholarships, universities and local support for Bangladeshi students planning to study in Armenia."
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/armenia/study-in-armenia-from-bangladesh",
        "label": "Study from Bangladesh",
        "title": "Study in Armenia from Bangladesh",
        "d": "A practical roadmap for studying in Armenia from Bangladesh: choosing a course, costs, visa and residence steps and timelines."
      },
      {
        "href": "/study/armenia/study-in-armenia-without-ielts",
        "label": "Without IELTS",
        "title": "Study in Armenia Without IELTS",
        "d": "How Bangladeshi students can enter Armenian universities without IELTS using interviews, preparatory programmes or English-medium certificates."
      },
      {
        "href": "/study/armenia/tuition-fees-in-armenia-for-bangladeshi-students",
        "label": "Tuition Fees",
        "title": "Tuition Fees in Armenia for Bangladeshi Students",
        "d": "Realistic tuition ranges in USD and BDT for preparatory, bachelor’s, medicine and master’s programmes in Armenia."
      },
      {
        "href": "/study/armenia/cost-of-living-in-armenia-for-bangladeshi-students",
        "label": "Cost of Living",
        "title": "Cost of Living in Armenia for Bangladeshi Students",
        "d": "Monthly budget breakdown for rent, food, transport and phone in Yerevan and other Armenian student cities."
      },
      {
        "href": "/study/armenia/cheapest-universities-in-armenia",
        "label": "Cheapest Universities",
        "title": "Cheapest Universities in Armenia",
        "d": "How to find low-cost Armenian universities and what to check beyond the headline tuition fee, including recognition and visa rules."
      },
      {
        "href": "/study/armenia/top-universities-in-armenia",
        "label": "Top Universities",
        "title": "Top Universities in Armenia",
        "d": "Overview of well-known state and private universities in Armenia and how to choose among them."
      },
      {
        "href": "/study/armenia/public-vs-private-universities-in-armenia",
        "label": "Public vs Private",
        "title": "Public vs Private Universities in Armenia",
        "d": "Compare fees, entry rules, language and campus life at state and private universities in Armenia."
      },
      {
        "href": "/study/armenia/scholarships-in-armenia-for-bangladeshi-students",
        "label": "Scholarships",
        "title": "Scholarships in Armenia for Bangladeshi Students",
        "d": "Types of scholarships and tuition discounts available to Bangladeshi students in Armenia and how to read offers carefully."
      },
      {
        "href": "/study/armenia/admission-requirements-in-armenia-for-bangladeshi-students",
        "label": "Admission Requirements",
        "title": "Admission Requirements in Armenia for Bangladeshi Students",
        "d": "SSC, HSC, diploma, English and document requirements for Armenian universities explained for Bangladeshi applicants."
      },
      {
        "href": "/study/armenia/study-gap-accepted-universities-in-armenia",
        "label": "Study Gap Accepted",
        "title": "Study Gap Accepted Universities in Armenia",
        "d": "How study gaps are treated by Armenian universities and what documents explain a gap for Bangladeshi applicants."
      },
      {
        "href": "/study/armenia/study-in-armenia-after-ssc",
        "label": "After SSC",
        "title": "Study in Armenia After SSC",
        "d": "Preparatory and pathway options for SSC graduates planning to study in Armenia, and why HSC matters."
      },
      {
        "href": "/study/armenia/study-in-armenia-after-diploma",
        "label": "After Diploma",
        "title": "Study in Armenia After Diploma",
        "d": "Credit exemption and degree entry options for Bangladeshi polytechnic and diploma holders in Armenia."
      },
      {
        "href": "/study/armenia/armenia-intake-dates",
        "label": "Intake Dates",
        "title": "Armenia Intake Dates",
        "d": "Main intake months in Armenia and the best time for Bangladeshi students to start applications."
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/armenia/mbbs-in-armenia-for-bangladeshi-students",
        "label": "MBBS in Armenia",
        "title": "MBBS in Armenia for Bangladeshi Students",
        "d": "Entry rules, costs and recognition checks for Bangladeshi students considering medicine in Armenia."
      },
      {
        "href": "/study/armenia/medical-degree-recognition-and-bmdc-guide-armenia",
        "label": "Degree Recognition & BMDC",
        "title": "Medical Degree Recognition and BMDC Guide for Armenia",
        "d": "How accreditation and recognition work for Armenian degrees and how Bangladeshi medical students should verify BMDC acceptance."
      },
      {
        "href": "/study/armenia/mba-in-armenia-for-bangladeshi-students",
        "label": "MBA & Master's",
        "title": "MBA and Master's in Armenia for Bangladeshi Students",
        "d": "MBA and master’s entry rules, fees in BDT and work-experience expectations for Bangladeshi applicants in Armenia."
      },
      {
        "href": "/study/armenia/cse-and-it-courses-in-armenia",
        "label": "CSE & IT Courses",
        "title": "CSE and IT Courses in Armenia",
        "d": "Computer science, software engineering, data science and cybersecurity study options in Armenia for Bangladeshi students."
      },
      {
        "href": "/study/armenia/student-accommodation-in-armenia",
        "label": "Student Accommodation",
        "title": "Student Accommodation in Armenia",
        "d": "Hostels, shared apartments and private housing options with typical monthly rents for students in Armenia."
      }
    ]
  },
  {
    "label": "Visa, Residence & Work Rules",
    "pages": [
      {
        "href": "/study/armenia/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements",
        "title": "Armenia Student Visa Requirements for Bangladesh",
        "d": "Documents and steps for entering Armenia as a Bangladeshi student, including visa route, admission letter and residence permit."
      },
      {
        "href": "/study/armenia/temporary-residence-permit-and-arrival-guide-armenia",
        "label": "Residence Permit & Arrival",
        "title": "Temporary Residence Permit and Arrival Guide for Armenia",
        "d": "What happens after admission: entry, arrival, registration and the temporary residence permit for students in Armenia."
      },
      {
        "href": "/study/armenia/bank-solvency-requirements-for-armenia-student-visa",
        "label": "Bank Solvency",
        "title": "Bank Solvency Requirements for Armenia Student Visa",
        "d": "How much money proof Bangladeshi students should prepare and how to present bank statements for Armenia."
      },
      {
        "href": "/study/armenia/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost",
        "title": "Armenia Student Visa Processing Time and Cost",
        "d": "Typical processing time and the main fees Bangladeshi students should budget for in an Armenia visa or permit application."
      },
      {
        "href": "/study/armenia/part-time-job-and-post-study-work-rules-in-armenia",
        "label": "Work Rules",
        "title": "Part-Time Job and Post-Study Work Rules in Armenia",
        "d": "What international students may and may not do regarding part-time work and staying after graduation in Armenia."
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/armenia/bangladesh-offices",
        "label": "Bangladesh Offices & Support",
        "title": "Eammu Holidays Bangladesh Offices and Support",
        "d": "Walk-in counseling in Dhaka, online and courier processing nationwide and a Yerevan office for Armenia study applicants."
      },
      {
        "href": "/study/armenia/consultancy-in-dhaka",
        "label": "Dhaka Consultancy",
        "title": "Study in Armenia Consultancy in Dhaka",
        "d": "Study in Armenia consultancy in Dhaka for 2026: free walk-in counseling, university shortlisting, recognition checks and visa guidance from "
      },
      {
        "href": "/study/armenia/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy",
        "title": "Study in Armenia Consultancy for Uttara Students",
        "d": "Study in Armenia consultancy for Uttara, Dhaka students in 2026: free counseling, recognition checks and visa preparation from Eammu by appo"
      },
      {
        "href": "/study/armenia/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy",
        "title": "Study in Armenia Consultancy for Dhanmondi Students",
        "d": "Study in Armenia consultancy for Dhanmondi, Dhaka students in 2026: MBBS counseling, accreditation checks and visa help from Eammu Holidays "
      },
      {
        "href": "/study/armenia/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy",
        "title": "Study in Armenia Consultancy for Mirpur Students",
        "d": "Study in Armenia consultancy for Mirpur, Dhaka students in 2026: budget-friendly counseling, diploma pathways and visa preparation from Eamm"
      },
      {
        "href": "/study/armenia/consultancy-in-chattogram",
        "label": "Chattogram Consultancy",
        "title": "Study in Armenia Consultancy for Chattogram Students",
        "d": "Study in Armenia consultancy for Chattogram students in 2026: online counseling, courier document support, recognition and visa guidance fro"
      },
      {
        "href": "/study/armenia/consultancy-in-sylhet",
        "label": "Sylhet Consultancy",
        "title": "Study in Armenia Consultancy for Sylhet Students",
        "d": "Study in Armenia consultancy for Sylhet students in 2026: online counseling, family-sponsor document help, recognition and visa guidance fro"
      },
      {
        "href": "/study/armenia/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy",
        "title": "Study in Armenia Consultancy for Rajshahi Students",
        "d": "Study in Armenia consultancy for Rajshahi students in 2026: online counseling, courier documents, graduate pathways and visa guidance from E"
      },
      {
        "href": "/study/armenia/consultancy-in-khulna",
        "label": "Khulna Consultancy",
        "title": "Study in Armenia Consultancy for Khulna Students",
        "d": "Study in Armenia consultancy for Khulna students in 2026: online counseling, courier documents, engineering pathways and visa guidance from "
      },
      {
        "href": "/study/armenia/consultancy-in-barishal",
        "label": "Barishal Consultancy",
        "title": "Study in Armenia Consultancy for Barishal Students",
        "d": "Study in Armenia consultancy for Barishal students in 2026: online counseling, courier document help, recognition and visa guidance from Eam"
      },
      {
        "href": "/study/armenia/consultancy-in-rangpur",
        "label": "Rangpur Consultancy",
        "title": "Study in Armenia Consultancy for Rangpur Students",
        "d": "Study in Armenia consultancy for Rangpur students in 2026: online counseling, courier documents, scholarship checks and visa guidance from E"
      },
      {
        "href": "/study/armenia/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy",
        "title": "Study in Armenia Consultancy for Mymensingh Students",
        "d": "Study in Armenia consultancy for Mymensingh students in 2026: easy access to Dhaka counseling, online support and visa preparation from Eamm"
      },
      {
        "href": "/study/armenia/consultancy-in-cumilla",
        "label": "Cumilla Consultancy",
        "title": "Study in Armenia Consultancy for Cumilla Students",
        "d": "Study in Armenia consultancy for Cumilla students in 2026: local-area support, online counseling, recognition and visa guidance from Eammu H"
      },
      {
        "href": "/study/armenia/consultancy-in-bogura",
        "label": "Bogura Consultancy",
        "title": "Study in Armenia Consultancy for Bogura Students",
        "d": "Study in Armenia consultancy for Bogura students in 2026: online counseling, courier document support and visa guidance from Eammu Holidays "
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/armenia/study-in-armenia-from-bangladesh",
    "title": "Study in Armenia from Bangladesh",
    "description": "A practical roadmap for studying in Armenia from Bangladesh: choosing a course, costs, visa and residence steps and timelines."
  },
  {
    "href": "/study/armenia/mbbs-in-armenia-for-bangladeshi-students",
    "title": "MBBS in Armenia for Bangladeshi Students",
    "description": "Entry rules, costs and recognition checks for Bangladeshi students considering medicine in Armenia."
  },
  {
    "href": "/study/armenia/medical-degree-recognition-and-bmdc-guide-armenia",
    "title": "Medical Degree Recognition and BMDC Guide for Armenia",
    "description": "How accreditation and recognition work for Armenian degrees and how Bangladeshi medical students should verify BMDC acceptance."
  },
  {
    "href": "/study/armenia/bangladesh-offices",
    "title": "Eammu Holidays Bangladesh Offices and Support",
    "description": "Walk-in counseling in Dhaka, online and courier processing nationwide and a Yerevan office for Armenia study applicants."
  }
];
const FAQS = [
  {
    "q": "Is Armenia a good choice for Bangladeshi students in 2026?",
    "a": "It can be, particularly for affordable English-medium medicine and technical study, provided you check recognition, visa rules and where you plan to work."
  },
  {
    "q": "How much does it cost to study in Armenia from Bangladesh?",
    "a": "Many programmes cost roughly USD 2,500 to 7,000 per year in tuition, with living costs of about USD 250 to 500 per month. Premium programmes cost more."
  },
  {
    "q": "Is an Armenian medical degree accepted in Bangladesh?",
    "a": "Not automatically. Bangladeshi graduates of foreign medical schools must satisfy the Bangladesh Medical and Dental Council's rules, so verify before enrolling."
  },
  {
    "q": "Does Eammu Holidays have an office in Armenia?",
    "a": "Eammu Holidays has an office in Yerevan in addition to counseling in Dhaka. Please call +8801631312525 to confirm services and visiting details."
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
          "name": "Armenia",
          "item": "https://eammu.com/study/armenia"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Armenia 2026: Complete Guide for Bangladeshi Students",
      "description": "Complete 2026 guide to study in Armenia from Bangladesh: MBBS and degree costs in BDT, visa and residence permit steps, and free Eammu Holidays counseling.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/armenia",
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
          "name": "Is Armenia a good choice for Bangladeshi students in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be, particularly for affordable English-medium medicine and technical study, provided you check recognition, visa rules and where you plan to work."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to study in Armenia from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many programmes cost roughly USD 2,500 to 7,000 per year in tuition, with living costs of about USD 250 to 500 per month. Premium programmes cost more."
          }
        },
        {
          "@type": "Question",
          "name": "Is an Armenian medical degree accepted in Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Bangladeshi graduates of foreign medical schools must satisfy the Bangladesh Medical and Dental Council's rules, so verify before enrolling."
          }
        },
        {
          "@type": "Question",
          "name": "Does Eammu Holidays have an office in Armenia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eammu Holidays has an office in Yerevan in addition to counseling in Dhaka. Please call +8801631312525 to confirm services and visiting details."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Armenia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Armenia 2026: Complete Guide for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Costs in BDT, MBBS and degree options, visa and residence permit steps, recognition checks and 37 detailed guides built for Bangladeshi families.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Armenia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Armenia guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Why Bangladeshi students consider Armenia</h2>
<p className="mt-4 leading-7 text-slate-700">Armenia is a small Caucasus country with English-medium medical and technical programmes, moderate tuition and low living costs compared with the UK, Australia or Western Europe. Medicine is the main draw, as covered in <Link href="/study/armenia/mbbs-in-armenia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MBBS in Armenia for Bangladeshi students</Link>, but IT, engineering, business and languages are also offered. Read the full roadmap in &#123;&#123;from-bd|studying in Armenia from Bangladesh&#125;&#125; and compare <Link href="/study/armenia/tuition-fees-in-armenia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Armenia for Bangladeshi students</Link> with <Link href="/study/armenia/cost-of-living-in-armenia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Armenia</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">Armenia is not in the EU and has a small job market, so think about where your degree will be used. For medical degrees, read <Link href="/study/armenia/medical-degree-recognition-and-bmdc-guide-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">medical degree recognition and BMDC checks for Armenia</Link> before you pay any deposit.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Where to begin: choose your level and route</h2>
<p className="mt-4 leading-7 text-slate-700">Students with SSC should read <Link href="/study/armenia/study-in-armenia-after-ssc" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Armenia after SSC</Link>, diploma holders can see <Link href="/study/armenia/study-in-armenia-after-diploma" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Armenia after diploma</Link>, and HSC graduates can follow the <Link href="/study/armenia/admission-requirements-in-armenia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements for Bangladeshi students</Link>. If English tests are a concern, see &#123;&#123;no-ielts|studying in Armenia without IELTS&#125;&#125;.</p>
<p className="mt-4 leading-7 text-slate-700">Next, choose the institution. Our comparison of <Link href="/study/armenia/public-vs-private-universities-in-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">public vs private universities in Armenia</Link> explains the trade-offs, while <Link href="/study/armenia/cheapest-universities-in-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the cheapest universities in Armenia</Link> and <Link href="/study/armenia/top-universities-in-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Armenia</Link> help you shortlist by budget or reputation.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Indicative cost snapshot (USD and BDT)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">Approx. USD</th><th scope="col" className="px-3 py-2 text-left font-bold">Approx. BDT</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Medicine (MD/MBBS) tuition per year</td><td className="px-3 py-2 align-top">USD 3,000 – 7,000</td><td className="px-3 py-2 align-top">Tk 3.7 – 8.5 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor&apos;s tuition per year (other fields)</td><td className="px-3 py-2 align-top">USD 2,500 – 6,000</td><td className="px-3 py-2 align-top">Tk 3.1 – 7.3 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Premium private / American-style programmes</td><td className="px-3 py-2 align-top">Up to about USD 10,000+</td><td className="px-3 py-2 align-top">Up to about Tk 12.2 lakh+</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs per month</td><td className="px-3 py-2 align-top">USD 250 – 500</td><td className="px-3 py-2 align-top">Tk 30,500 – 61,000</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 USD = about Tk 122 and 1,000 AMD = about Tk 315 and are indicative estimates for 2026–2027. Fees, visa rules and exchange rates change, so always confirm with the university, the Armenian authorities or an Eammu Holidays counselor before paying.</p>
<p className="mt-4 leading-7 text-slate-700">Merit discounts exist at some universities; see <Link href="/study/armenia/scholarships-in-armenia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Armenia for Bangladeshi students</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Your step-by-step journey</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Shortlist universities and check <Link href="/study/armenia/armenia-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Armenia intake dates</Link>, mainly September.</li><li>Prepare documents, including for <Link href="/study/armenia/study-gap-accepted-universities-in-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study gaps</Link> if relevant.</li><li>Receive an admission letter, then follow the <Link href="/study/armenia/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa requirements</Link> and the <Link href="/study/armenia/temporary-residence-permit-and-arrival-guide-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">temporary residence permit and arrival guide</Link>.</li><li>Arrange funds per <Link href="/study/armenia/bank-solvency-requirements-for-armenia-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bank solvency requirements</Link>.</li><li>Plan <Link href="/study/armenia/student-accommodation-in-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student accommodation in Armenia</Link> and travel.</li></ol>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Armenia changed its visa and migration rules in 2026, including for Bangladeshi citizens, and further amendments to the Law on Foreigners took effect from 1 November 2026. Rules may change again, so confirm the current position on the official Armenian Ministry of Foreign Affairs website and with your university before you apply.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">How Eammu Holidays supports you</h2>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays offers walk-in counseling in Dhaka, online and courier processing across Bangladesh, and an office in Yerevan, Armenia, which can help with arrival-stage questions (please confirm availability before relying on it). Find your nearest support route on our <Link href="/study/armenia/bangladesh-offices" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bangladesh offices and locations page</Link>, or go to <Link href="/study/armenia/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Armenia consultancy in Dhaka</Link>.</p>
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
            <h2 id="directory-heading" className="text-2xl font-bold text-emerald-900">Complete Directory: Every Armenia Study Guide</h2>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Armenia Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Armenia</h2>
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
