import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/romania';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Romania Hub for Bangladeshis 2026 | Eammu Holidays",
  "description": "Complete 2026 guide to study in Romania from Bangladesh: tuition in EUR and BDT, Letter of Acceptance, visa steps, MBBS and free Eammu counseling.",
  "alternates": {
    "canonical": "https://eammu.com/study/romania"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Romania Hub for Bangladeshis 2026 | Eammu Holidays",
    "description": "Complete 2026 guide to study in Romania from Bangladesh: tuition in EUR and BDT, Letter of Acceptance, visa steps, MBBS and free Eammu counseling.",
    "url": "https://eammu.com/study/romania",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Romania Hub for Bangladeshis 2026 | Eammu Holidays",
    "description": "Complete 2026 guide to study in Romania from Bangladesh: tuition in EUR and BDT, Letter of Acceptance, visa steps, MBBS and free Eammu counseling."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Romania", "href": "/study/romania"}];
const NAV = [
  {
    "label": "Romania Hub",
    "pages": [
      {
        "href": "/study/romania",
        "label": "Study in Romania Hub",
        "title": "Study in Romania 2026: Complete Hub for Bangladeshi Students",
        "d": "Start here: every guide on tuition, the Letter of Acceptance, visas, MBBS, scholarships, universities and local support for Bangladeshi students planning to study in Romania."
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/romania/study-in-romania-from-bangladesh",
        "label": "Study from Bangladesh",
        "title": "Study in Romania from Bangladesh",
        "d": "A practical roadmap for studying in Romania from Bangladesh: choosing a course, costs, the Letter of Acceptance, visa steps and timelines."
      },
      {
        "href": "/study/romania/study-in-romania-without-ielts",
        "label": "Without IELTS",
        "title": "Study in Romania Without IELTS",
        "d": "How Bangladeshi students can enter Romanian universities without IELTS using interviews, entrance exams, preparatory years or Romanian-taught programmes."
      },
      {
        "href": "/study/romania/tuition-fees-in-romania-for-bangladeshi-students",
        "label": "Tuition Fees",
        "title": "Tuition Fees in Romania for Bangladeshi Students",
        "d": "Realistic tuition ranges in EUR and BDT for the preparatory year, bachelor’s, medicine and master’s programmes in Romania."
      },
      {
        "href": "/study/romania/cost-of-living-in-romania-for-bangladeshi-students",
        "label": "Cost of Living",
        "title": "Cost of Living in Romania for Bangladeshi Students",
        "d": "Monthly budget breakdown for rent, food, transport and phone in Bucharest, Cluj-Napoca, Iași and other Romanian student cities."
      },
      {
        "href": "/study/romania/cheapest-universities-in-romania",
        "label": "Cheapest Universities",
        "title": "Cheapest Universities in Romania",
        "d": "How to find low-cost Romanian universities and what to check beyond the headline tuition fee, including recognition and visa rules."
      },
      {
        "href": "/study/romania/top-universities-in-romania",
        "label": "Top Universities",
        "title": "Top Universities in Romania",
        "d": "Overview of well-known state and private universities in Romania and how to choose among them."
      },
      {
        "href": "/study/romania/public-vs-private-universities-in-romania",
        "label": "Public vs Private",
        "title": "Public vs Private Universities in Romania",
        "d": "Compare fees, entry rules, language and campus life at state and private universities in Romania."
      },
      {
        "href": "/study/romania/scholarships-in-romania-for-bangladeshi-students",
        "label": "Scholarships",
        "title": "Scholarships in Romania for Bangladeshi Students",
        "d": "Types of scholarships and tuition discounts available to Bangladeshi students in Romania and how to read offers carefully."
      },
      {
        "href": "/study/romania/admission-requirements-in-romania-for-bangladeshi-students",
        "label": "Admission Requirements",
        "title": "Admission Requirements in Romania for Bangladeshi Students",
        "d": "SSC, HSC, diploma, English and document requirements for Romanian universities explained for Bangladeshi applicants."
      },
      {
        "href": "/study/romania/study-gap-accepted-universities-in-romania",
        "label": "Study Gap Accepted",
        "title": "Study Gap Accepted Universities in Romania",
        "d": "How study gaps are treated by Romanian universities and what documents explain a gap for Bangladeshi applicants."
      },
      {
        "href": "/study/romania/study-in-romania-after-ssc",
        "label": "After SSC",
        "title": "Study in Romania After SSC",
        "d": "Pathway options for SSC graduates planning to study in Romania, and why HSC matters for bachelor’s and medical entry."
      },
      {
        "href": "/study/romania/study-in-romania-after-diploma",
        "label": "After Diploma",
        "title": "Study in Romania After Diploma",
        "d": "Degree entry and recognition options for Bangladeshi polytechnic and diploma holders in Romania."
      },
      {
        "href": "/study/romania/romania-intake-dates",
        "label": "Intake Dates",
        "title": "Romania Intake Dates",
        "d": "Main intake and application windows in Romania and the best time for Bangladeshi students to start applications."
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/romania/mbbs-in-romania-for-bangladeshi-students",
        "label": "MBBS in Romania",
        "title": "MBBS in Romania for Bangladeshi Students",
        "d": "Entry rules, costs and recognition checks for Bangladeshi students considering English-taught medicine in Romania."
      },
      {
        "href": "/study/romania/medical-degree-recognition-and-bmdc-guide-romania",
        "label": "Degree Recognition & BMDC",
        "title": "Medical Degree Recognition and BMDC Guide for Romania",
        "d": "How accreditation and recognition work for Romanian degrees and how Bangladeshi medical students should verify BMDC acceptance."
      },
      {
        "href": "/study/romania/romanian-language-preparatory-year-guide",
        "label": "Romanian Language Year",
        "title": "Romanian Language Preparatory Year Guide",
        "d": "How the Romanian language preparatory year works, what it costs and whether you need it as a Bangladeshi student."
      },
      {
        "href": "/study/romania/cse-and-it-courses-in-romania",
        "label": "CSE & IT Courses",
        "title": "CSE and IT Courses in Romania",
        "d": "Computer science, software engineering, data science and cybersecurity study options in Romania for Bangladeshi students."
      },
      {
        "href": "/study/romania/student-accommodation-in-romania",
        "label": "Student Accommodation",
        "title": "Student Accommodation in Romania",
        "d": "Dormitories, shared apartments and private housing options with typical monthly rents for students in Romania."
      }
    ]
  },
  {
    "label": "Visa, Letter & Work Rules",
    "pages": [
      {
        "href": "/study/romania/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements",
        "title": "Romania Student Visa Requirements for Bangladesh",
        "d": "Documents and steps for a Romanian long-stay study visa from Bangladesh, including the Letter of Acceptance, funds and insurance."
      },
      {
        "href": "/study/romania/letter-of-acceptance-and-visa-process-guide",
        "label": "Letter of Acceptance & Visa",
        "title": "Letter of Acceptance and Visa Process Guide for Romania",
        "d": "How the Letter of Acceptance from the Ministry of Education works and the stages from application to residence permit."
      },
      {
        "href": "/study/romania/bank-solvency-requirements-for-romania-student-visa",
        "label": "Bank Solvency",
        "title": "Bank Solvency Requirements for Romania Student Visa",
        "d": "How much money proof Bangladeshi students should prepare and how to present bank statements for a Romanian study visa."
      },
      {
        "href": "/study/romania/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost",
        "title": "Romania Student Visa Processing Time and Cost",
        "d": "Typical processing time and the main fees Bangladeshi students should budget for in a Romania visa and permit application."
      },
      {
        "href": "/study/romania/part-time-job-and-post-study-work-rules-in-romania",
        "label": "Work Rules",
        "title": "Part-Time Job and Post-Study Work Rules in Romania",
        "d": "What international students may and may not do regarding part-time work and staying after graduation in Romania."
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/romania/bangladesh-offices",
        "label": "Bangladesh Offices & Support",
        "title": "Eammu Holidays Bangladesh Offices and Support",
        "d": "Walk-in counseling in Dhaka and online or courier processing for Romania study applicants in every division of Bangladesh."
      },
      {
        "href": "/study/romania/consultancy-in-dhaka",
        "label": "Dhaka Consultancy",
        "title": "Study in Romania Consultancy in Dhaka",
        "d": "Study in Romania consultancy in Dhaka for 2026: free walk-in counseling, university shortlisting, recognition checks and visa guidance from "
      },
      {
        "href": "/study/romania/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy",
        "title": "Study in Romania Consultancy for Uttara Students",
        "d": "Study in Romania consultancy for Uttara, Dhaka students in 2026: free counseling, recognition checks and visa preparation from Eammu by appo"
      },
      {
        "href": "/study/romania/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy",
        "title": "Study in Romania Consultancy for Dhanmondi Students",
        "d": "Study in Romania consultancy for Dhanmondi, Dhaka students in 2026: MBBS counseling, accreditation checks and visa help from Eammu Holidays "
      },
      {
        "href": "/study/romania/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy",
        "title": "Study in Romania Consultancy for Mirpur Students",
        "d": "Study in Romania consultancy for Mirpur, Dhaka students in 2026: budget-friendly counseling, diploma pathways and visa preparation from Eamm"
      },
      {
        "href": "/study/romania/consultancy-in-chattogram",
        "label": "Chattogram Consultancy",
        "title": "Study in Romania Consultancy for Chattogram Students",
        "d": "Study in Romania consultancy for Chattogram students in 2026: online counseling, courier document support, recognition and visa guidance fro"
      },
      {
        "href": "/study/romania/consultancy-in-sylhet",
        "label": "Sylhet Consultancy",
        "title": "Study in Romania Consultancy for Sylhet Students",
        "d": "Study in Romania consultancy for Sylhet students in 2026: online counseling, family-sponsor document help, recognition and visa guidance fro"
      },
      {
        "href": "/study/romania/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy",
        "title": "Study in Romania Consultancy for Rajshahi Students",
        "d": "Study in Romania consultancy for Rajshahi students in 2026: online counseling, courier documents, graduate pathways and visa guidance from E"
      },
      {
        "href": "/study/romania/consultancy-in-khulna",
        "label": "Khulna Consultancy",
        "title": "Study in Romania Consultancy for Khulna Students",
        "d": "Study in Romania consultancy for Khulna students in 2026: online counseling, courier documents, engineering pathways and visa guidance from "
      },
      {
        "href": "/study/romania/consultancy-in-barishal",
        "label": "Barishal Consultancy",
        "title": "Study in Romania Consultancy for Barishal Students",
        "d": "Study in Romania consultancy for Barishal students in 2026: online counseling, courier document help, recognition and visa guidance from Eam"
      },
      {
        "href": "/study/romania/consultancy-in-rangpur",
        "label": "Rangpur Consultancy",
        "title": "Study in Romania Consultancy for Rangpur Students",
        "d": "Study in Romania consultancy for Rangpur students in 2026: online counseling, courier documents, scholarship checks and visa guidance from E"
      },
      {
        "href": "/study/romania/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy",
        "title": "Study in Romania Consultancy for Mymensingh Students",
        "d": "Study in Romania consultancy for Mymensingh students in 2026: easy access to Dhaka counseling, online support and visa preparation from Eamm"
      },
      {
        "href": "/study/romania/consultancy-in-cumilla",
        "label": "Cumilla Consultancy",
        "title": "Study in Romania Consultancy for Cumilla Students",
        "d": "Study in Romania consultancy for Cumilla students in 2026: local-area support, online counseling, recognition and visa guidance from Eammu H"
      },
      {
        "href": "/study/romania/consultancy-in-bogura",
        "label": "Bogura Consultancy",
        "title": "Study in Romania Consultancy for Bogura Students",
        "d": "Study in Romania consultancy for Bogura students in 2026: online counseling, courier document support and visa guidance from Eammu Holidays "
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/romania/study-in-romania-from-bangladesh",
    "title": "Study in Romania from Bangladesh",
    "description": "A practical roadmap for studying in Romania from Bangladesh: choosing a course, costs, the Letter of Acceptance, visa steps and timelines."
  },
  {
    "href": "/study/romania/letter-of-acceptance-and-visa-process-guide",
    "title": "Letter of Acceptance and Visa Process Guide for Romania",
    "description": "How the Letter of Acceptance from the Ministry of Education works and the stages from application to residence permit."
  },
  {
    "href": "/study/romania/tuition-fees-in-romania-for-bangladeshi-students",
    "title": "Tuition Fees in Romania for Bangladeshi Students",
    "description": "Realistic tuition ranges in EUR and BDT for the preparatory year, bachelor’s, medicine and master’s programmes in Romania."
  },
  {
    "href": "/study/romania/bangladesh-offices",
    "title": "Eammu Holidays Bangladesh Offices and Support",
    "description": "Walk-in counseling in Dhaka and online or courier processing for Romania study applicants in every division of Bangladesh."
  }
];
const FAQS = [
  {
    "q": "Is Romania a good choice for Bangladeshi students in 2026?",
    "a": "It can be, particularly for affordable EU-based medicine and technical degrees, provided you plan the Letter of Acceptance, visa timeline, funds and recognition of your degree."
  },
  {
    "q": "How much does it cost to study in Romania from Bangladesh?",
    "a": "Many programmes cost roughly EUR 2,100 to 4,000 per year in tuition, medicine in English about EUR 5,000 to 10,000, plus living costs of about EUR 350 to 700 per month."
  },
  {
    "q": "Do I need to learn Romanian?",
    "a": "Only for Romanian-taught programmes, which require a preparatory year. English-taught programmes do not, though basic Romanian helps in daily life and clinical years."
  },
  {
    "q": "Is a Romanian medical degree accepted in Bangladesh?",
    "a": "Not automatically. Bangladeshi graduates of foreign medical schools must meet BMDC's rules, so verify before enrolling."
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
          "name": "Romania",
          "item": "https://eammu.com/study/romania"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Romania 2026: Complete Guide for Bangladeshi Students",
      "description": "Complete 2026 guide to study in Romania from Bangladesh: tuition in EUR and BDT, Letter of Acceptance, visa steps, MBBS and free Eammu counseling.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/romania",
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
          "name": "Is Romania a good choice for Bangladeshi students in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be, particularly for affordable EU-based medicine and technical degrees, provided you plan the Letter of Acceptance, visa timeline, funds and recognition of your degree."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to study in Romania from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many programmes cost roughly EUR 2,100 to 4,000 per year in tuition, medicine in English about EUR 5,000 to 10,000, plus living costs of about EUR 350 to 700 per month."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to learn Romanian?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only for Romanian-taught programmes, which require a preparatory year. English-taught programmes do not, though basic Romanian helps in daily life and clinical years."
          }
        },
        {
          "@type": "Question",
          "name": "Is a Romanian medical degree accepted in Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Bangladeshi graduates of foreign medical schools must meet BMDC's rules, so verify before enrolling."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Romania 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Romania 2026: Complete Guide for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Costs in BDT, the Letter of Acceptance and visa process, MBBS and degree options, recognition checks and 37 detailed guides built for Bangladeshi families.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Romania guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Romania guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Why Bangladeshi students consider Romania</h2>
<p className="mt-4 leading-7 text-slate-700">Romania is an EU member state with some of the lowest tuition fees in Europe, English-taught medicine, engineering, IT and business programmes, and moderate living costs. Medical study is the main draw, as covered in <Link href="/study/romania/mbbs-in-romania-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MBBS in Romania for Bangladeshi students</Link>, but technical, economic and agricultural degrees are also popular. Read the full roadmap in &#123;&#123;from-bd|studying in Romania from Bangladesh&#125;&#125; and compare <Link href="/study/romania/tuition-fees-in-romania-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Romania for Bangladeshi students</Link> with <Link href="/study/romania/cost-of-living-in-romania-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Romania</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">Romania has a clear admission system for non-EU students: you apply to universities, the Ministry of Education issues a Letter of Acceptance, and only then can you apply for the study visa. Learn the sequence in <Link href="/study/romania/letter-of-acceptance-and-visa-process-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Letter of Acceptance and visa process guide</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Where to begin: choose your level and route</h2>
<p className="mt-4 leading-7 text-slate-700">Students with SSC should read <Link href="/study/romania/study-in-romania-after-ssc" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Romania after SSC</Link>, diploma holders can see <Link href="/study/romania/study-in-romania-after-diploma" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Romania after diploma</Link>, and HSC graduates can follow the <Link href="/study/romania/admission-requirements-in-romania-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements for Bangladeshi students</Link>. Many Romanian-taught programmes need a Romanian language year; see <Link href="/study/romania/romanian-language-preparatory-year-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Romanian language preparatory year guide</Link>. If English tests are a concern, see &#123;&#123;no-ielts|studying in Romania without IELTS&#125;&#125;.</p>
<p className="mt-4 leading-7 text-slate-700">Next, choose the institution. Our comparison of <Link href="/study/romania/public-vs-private-universities-in-romania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">public vs private universities in Romania</Link> explains the trade-offs, while <Link href="/study/romania/cheapest-universities-in-romania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the cheapest universities in Romania</Link> and <Link href="/study/romania/top-universities-in-romania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Romania</Link> help you shortlist by budget or reputation.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Indicative cost snapshot (EUR and BDT)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">Approx. EUR</th><th scope="col" className="px-3 py-2 text-left font-bold">Approx. BDT</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Romanian language preparatory year</td><td className="px-3 py-2 align-top">EUR 2,000 – 2,900</td><td className="px-3 py-2 align-top">Tk 2.8 – 4.1 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor&apos;s tuition per year (engineering, economics)</td><td className="px-3 py-2 align-top">EUR 2,100 – 4,000</td><td className="px-3 py-2 align-top">Tk 2.9 – 5.6 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Medicine (English) tuition per year</td><td className="px-3 py-2 align-top">EUR 5,000 – 10,000</td><td className="px-3 py-2 align-top">Tk 7 – 14 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs per month</td><td className="px-3 py-2 align-top">EUR 350 – 700</td><td className="px-3 py-2 align-top">Tk 49,000 – 98,000</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 EUR = about Tk 140 and are indicative estimates for 2026–2027, based on typical published university fee schedules. Fees, visa rules and exchange rates change, so always confirm with the university, the Romanian authorities or an Eammu Holidays counselor before paying.</p>
<p className="mt-4 leading-7 text-slate-700">Scholarships exist but are competitive; see <Link href="/study/romania/scholarships-in-romania-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Romania for Bangladeshi students</Link> for realistic options.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Your step-by-step journey</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Shortlist universities and check <Link href="/study/romania/romania-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Romania intake dates</Link>, as non-EU applications usually open in spring.</li><li>Prepare documents, including for <Link href="/study/romania/study-gap-accepted-universities-in-romania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study gaps</Link> if relevant.</li><li>Apply to the university; it requests your Letter of Acceptance from the Ministry of Education.</li><li>Apply for the study visa and arrange funds per <Link href="/study/romania/bank-solvency-requirements-for-romania-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bank solvency requirements</Link>; see <Link href="/study/romania/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa requirements for Bangladesh</Link>.</li><li>After arrival, obtain your residence permit and plan <Link href="/study/romania/student-accommodation-in-romania" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student accommodation in Romania</Link>.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">How Eammu Holidays supports you</h2>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays offers walk-in counseling in Dhaka and online and courier processing across Bangladesh. We give balanced advice, including on risks. Find your nearest support route on our <Link href="/study/romania/bangladesh-offices" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bangladesh offices and locations page</Link>, or go to <Link href="/study/romania/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Romania consultancy in Dhaka</Link>.</p>
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
            <h2 id="directory-heading" className="text-2xl font-bold text-emerald-900">Complete Directory: Every Romania Study Guide</h2>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Romania Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Romania</h2>
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
