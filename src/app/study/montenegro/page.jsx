import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/montenegro';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Montenegro: Bangladeshi Hub 2026 | Eammu Holidays",
  "description": "Complete 2026 guide to study in Montenegro from Bangladesh: tuition in BDT, D visa and residence permit steps, language, work rules and Eammu counseling.",
  "alternates": {
    "canonical": "https://eammu.com/study/montenegro"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Montenegro: Bangladeshi Hub 2026 | Eammu Holidays",
    "description": "Complete 2026 guide to study in Montenegro from Bangladesh: tuition in BDT, D visa and residence permit steps, language, work rules and Eammu counseling.",
    "url": "https://eammu.com/study/montenegro",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Montenegro: Bangladeshi Hub 2026 | Eammu Holidays",
    "description": "Complete 2026 guide to study in Montenegro from Bangladesh: tuition in BDT, D visa and residence permit steps, language, work rules and Eammu counseling."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Montenegro", "href": "/study/montenegro"}];
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
    "href": "/study/montenegro/student-visa-requirements-bangladesh",
    "title": "Montenegro Student Visa Requirements for Bangladesh",
    "description": "Documents and steps for a Montenegrin long-stay D visa from Bangladesh, including admission letter, funds, insurance and residence permit."
  },
  {
    "href": "/study/montenegro/montenegrin-language-and-english-taught-programs-guide",
    "title": "Montenegrin Language and English-Taught Programmes Guide",
    "description": "Which Montenegrin programmes are taught in English, when you need Montenegrin and how preparatory courses work for Bangladeshi students."
  },
  {
    "href": "/study/montenegro/tuition-fees-in-montenegro-for-bangladeshi-students",
    "title": "Tuition Fees in Montenegro for Bangladeshi Students",
    "description": "Realistic tuition ranges in EUR and BDT for public and private universities in Montenegro, plus extra costs."
  },
  {
    "href": "/study/montenegro/bangladesh-offices",
    "title": "Eammu Holidays Bangladesh Offices and Support",
    "description": "Walk-in counseling in Dhaka and online or courier processing for Montenegro study applicants in every division of Bangladesh."
  }
];
const FAQS = [
  {
    "q": "Is Montenegro a good choice for Bangladeshi students in 2026?",
    "a": "It can be for students who want low-cost study in hospitality, business or IT and accept limited English-taught options and a small job market. It is not a route into the EU."
  },
  {
    "q": "How much does it cost to study in Montenegro from Bangladesh?",
    "a": "Public university tuition is roughly EUR 500 to 3,500 per year and private bachelor's about EUR 2,200 to 6,000, plus living costs of EUR 350 to 700 per month."
  },
  {
    "q": "Do I need to learn Montenegrin?",
    "a": "Most programmes are in Montenegrin. A few private universities offer English-taught programmes and Montenegrin preparatory courses."
  },
  {
    "q": "Does a Montenegrin student permit let me work in the EU?",
    "a": "No. Montenegro is not in the EU or Schengen area, and a student permit gives no right to work elsewhere in Europe."
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
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Montenegro 2026: Complete Guide for Bangladeshi Students",
      "description": "Complete 2026 guide to study in Montenegro from Bangladesh: tuition in BDT, D visa and residence permit steps, language, work rules and Eammu counseling.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/montenegro",
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
          "name": "Is Montenegro a good choice for Bangladeshi students in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be for students who want low-cost study in hospitality, business or IT and accept limited English-taught options and a small job market. It is not a route into the EU."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to study in Montenegro from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Public university tuition is roughly EUR 500 to 3,500 per year and private bachelor's about EUR 2,200 to 6,000, plus living costs of EUR 350 to 700 per month."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to learn Montenegrin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most programmes are in Montenegrin. A few private universities offer English-taught programmes and Montenegrin preparatory courses."
          }
        },
        {
          "@type": "Question",
          "name": "Does a Montenegrin student permit let me work in the EU?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Montenegro is not in the EU or Schengen area, and a student permit gives no right to work elsewhere in Europe."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Montenegro 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Montenegro 2026: Complete Guide for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Low tuition in a small Adriatic country, with honest advice on language, visa, work rules and what a Montenegrin student permit does not give you. 37 detailed guides for Bangladeshi families.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Read this first: what Montenegro is and is not</h2>
<p className="mt-4 leading-7 text-slate-700">Montenegro is not a member of the European Union or the Schengen area, most teaching is in Montenegrin and English-taught programmes are limited, and a student residence permit does not give the right to live or work elsewhere in Europe. Montenegro tightened its rules on foreigners with amendments that took effect in January 2026. Some agents sell Montenegro as a back door to the EU; it is not, and such promises are a warning sign.</p>
<p className="mt-4 leading-7 text-slate-700">Because of this, please read <Link href="/study/montenegro/montenegrin-language-and-english-taught-programs-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Montenegrin language and English-taught programmes guide</Link>, <Link href="/study/montenegro/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa requirements for Bangladesh</Link> and <Link href="/study/montenegro/part-time-job-and-post-study-work-rules-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">part-time job and post-study work rules</Link> before paying any deposit. Check that your programme is taught in a language you can study in, and that you have a clear plan that does not depend on moving to another country.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Why Bangladeshi students consider Montenegro</h2>
<p className="mt-4 leading-7 text-slate-700">Montenegro offers some of the lowest tuition fees in Europe, living costs of roughly EUR 350 to 700 a month, and a safe coastal and mountain setting, with a small number of English-taught programmes at the private universities. Compare <Link href="/study/montenegro/tuition-fees-in-montenegro-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Montenegro for Bangladeshi students</Link> with <Link href="/study/montenegro/cost-of-living-in-montenegro-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Montenegro</Link>, and read the full roadmap in &#123;&#123;from-bd|studying in Montenegro from Bangladesh&#125;&#125;.</p>
<p className="mt-4 leading-7 text-slate-700">Popular fields include hospitality, tourism and business, covered in <Link href="/study/montenegro/hospitality-tourism-and-business-degrees-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">hospitality, tourism and business degrees</Link>, and IT, covered in <Link href="/study/montenegro/cse-and-it-courses-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT courses in Montenegro</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Where to begin: choose your level and route</h2>
<p className="mt-4 leading-7 text-slate-700">Students with SSC should read <Link href="/study/montenegro/study-in-montenegro-after-ssc" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Montenegro after SSC</Link>, diploma holders can see <Link href="/study/montenegro/study-in-montenegro-after-diploma" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Montenegro after diploma</Link>, and HSC graduates can follow the <Link href="/study/montenegro/admission-requirements-in-montenegro-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements for Bangladeshi students</Link>. If English tests are a concern, see &#123;&#123;no-ielts|studying in Montenegro without IELTS&#125;&#125;.</p>
<p className="mt-4 leading-7 text-slate-700">Next, shortlist institutions using <Link href="/study/montenegro/cheapest-universities-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the cheapest universities in Montenegro</Link>, <Link href="/study/montenegro/top-universities-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Montenegro</Link> and <Link href="/study/montenegro/public-vs-private-universities-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">public vs private universities in Montenegro</Link>, and check <Link href="/study/montenegro/degree-recognition-and-accreditation-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">degree recognition and accreditation</Link> before you commit.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Indicative cost snapshot (EUR and BDT)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">Approx. EUR</th><th scope="col" className="px-3 py-2 text-left font-bold">Approx. BDT</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Public university tuition per year</td><td className="px-3 py-2 align-top">EUR 500 – 3,500</td><td className="px-3 py-2 align-top">Tk 0.7 – 4.9 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Private university bachelor&apos;s per year</td><td className="px-3 py-2 align-top">EUR 2,200 – 6,000</td><td className="px-3 py-2 align-top">Tk 3.1 – 8.4 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living costs per month</td><td className="px-3 py-2 align-top">EUR 350 – 700</td><td className="px-3 py-2 align-top">Tk 49,000 – 98,000</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 EUR = about Tk 140 and are indicative estimates for 2026–2027 based on published university fees. Fees, visa rules and exchange rates change, so always confirm with the university, the Montenegrin authorities or an Eammu Holidays counselor before paying.</p>
<p className="mt-4 leading-7 text-slate-700">Scholarships are limited for foreigners; see <Link href="/study/montenegro/scholarships-in-montenegro-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Montenegro for Bangladeshi students</Link> for realistic options.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Your step-by-step journey</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Shortlist universities and check <Link href="/study/montenegro/montenegro-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Montenegro intake dates</Link>.</li><li>Prepare documents, including for <Link href="/study/montenegro/study-gap-accepted-universities-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study gaps</Link> if relevant, and check <Link href="/study/montenegro/degree-recognition-and-accreditation-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">recognition</Link>.</li><li>Receive an admission letter, then follow the <Link href="/study/montenegro/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">D visa requirements</Link>.</li><li>Prepare funds per <Link href="/study/montenegro/bank-solvency-requirements-for-montenegro-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bank solvency requirements</Link>.</li><li>After arrival, apply for the temporary residence permit; see <Link href="/study/montenegro/temporary-residence-permit-and-arrival-guide-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the residence permit and arrival guide</Link>, and plan <Link href="/study/montenegro/student-accommodation-in-montenegro" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">accommodation</Link>.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">How Eammu Holidays supports you</h2>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays offers walk-in counseling in Dhaka and online and courier support across Bangladesh, with honest advice about risks. Find your nearest support route on our <Link href="/study/montenegro/bangladesh-offices" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bangladesh offices and locations page</Link>, or go to <Link href="/study/montenegro/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Montenegro consultancy in Dhaka</Link>.</p>
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
