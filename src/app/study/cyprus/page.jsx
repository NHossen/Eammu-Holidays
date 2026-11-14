import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/cyprus';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Cyprus Hub for Bangladeshis 2026 | Eammu Holidays",
  "description": "Complete 2026 guide to study in Cyprus from Bangladesh: Republic vs Northern Cyprus, costs in BDT, visas, degree recognition and free Eammu counseling.",
  "alternates": {
    "canonical": "https://eammu.com/study/cyprus"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Cyprus Hub for Bangladeshis 2026 | Eammu Holidays",
    "description": "Complete 2026 guide to study in Cyprus from Bangladesh: Republic vs Northern Cyprus, costs in BDT, visas, degree recognition and free Eammu counseling.",
    "url": "https://eammu.com/study/cyprus",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Cyprus Hub for Bangladeshis 2026 | Eammu Holidays",
    "description": "Complete 2026 guide to study in Cyprus from Bangladesh: Republic vs Northern Cyprus, costs in BDT, visas, degree recognition and free Eammu counseling."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Cyprus", "href": "/study/cyprus"}];
const NAV = [
  {
    "label": "Cyprus Hub",
    "pages": [
      {
        "href": "/study/cyprus",
        "label": "Study in Cyprus Hub",
        "title": "Study in Cyprus 2026: Complete Hub for Bangladeshi Students",
        "d": "Start here: every guide on tuition, visas, recognition, scholarships, universities and local support for Bangladeshi students planning to study in Cyprus."
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/cyprus/study-in-cyprus-from-bangladesh",
        "label": "Study from Bangladesh",
        "title": "Study in Cyprus from Bangladesh",
        "d": "A practical roadmap for studying in Cyprus from Bangladesh: choosing a system, costs, visa steps and timelines in one place."
      },
      {
        "href": "/study/cyprus/study-in-cyprus-without-ielts",
        "label": "Without IELTS",
        "title": "Study in Cyprus Without IELTS",
        "d": "How Bangladeshi students can enter Cypriot universities without IELTS using HSC English, internal tests or preparatory English programmes."
      },
      {
        "href": "/study/cyprus/tuition-fees-in-cyprus-for-bangladeshi-students",
        "label": "Tuition Fees",
        "title": "Tuition Fees in Cyprus for Bangladeshi Students",
        "d": "Realistic tuition ranges in EUR and BDT for foundation, bachelor’s and master’s programmes in Northern Cyprus and the Republic of Cyprus."
      },
      {
        "href": "/study/cyprus/cost-of-living-in-cyprus-for-bangladeshi-students",
        "label": "Cost of Living",
        "title": "Cost of Living in Cyprus for Bangladeshi Students",
        "d": "Monthly budget breakdown for rent, food, transport and phone in Nicosia, Famagusta, Kyrenia, Limassol and Larnaca."
      },
      {
        "href": "/study/cyprus/cheapest-universities-in-cyprus",
        "label": "Cheapest Universities",
        "title": "Cheapest Universities in Cyprus",
        "d": "How to find low-cost Cypriot universities and what to check beyond the headline tuition fee, including recognition and visa risks."
      },
      {
        "href": "/study/cyprus/top-universities-in-cyprus",
        "label": "Top Universities",
        "title": "Top Universities in Cyprus",
        "d": "Overview of well-known public and private universities in the Republic of Cyprus and Northern Cyprus and how to choose among them."
      },
      {
        "href": "/study/cyprus/public-vs-private-universities-in-cyprus",
        "label": "Public vs Private",
        "title": "Public vs Private Universities in Cyprus",
        "d": "Compare fees, entry rules, language and campus life at public and private universities in Cyprus."
      },
      {
        "href": "/study/cyprus/scholarships-in-cyprus-for-bangladeshi-students",
        "label": "Scholarships",
        "title": "Scholarships in Cyprus for Bangladeshi Students",
        "d": "Types of scholarships and tuition waivers available to Bangladeshi students in Cyprus and how to read discount offers carefully."
      },
      {
        "href": "/study/cyprus/admission-requirements-in-cyprus-for-bangladeshi-students",
        "label": "Admission Requirements",
        "title": "Admission Requirements in Cyprus for Bangladeshi Students",
        "d": "SSC, HSC, diploma, English and document requirements for Cypriot universities explained for Bangladeshi applicants."
      },
      {
        "href": "/study/cyprus/study-gap-accepted-universities-in-cyprus",
        "label": "Study Gap Accepted",
        "title": "Study Gap Accepted Universities in Cyprus",
        "d": "How study gaps are treated by Cypriot universities and what documents explain a gap for Bangladeshi applicants."
      },
      {
        "href": "/study/cyprus/study-in-cyprus-after-ssc",
        "label": "After SSC",
        "title": "Study in Cyprus After SSC",
        "d": "Preparatory, foundation and pathway options for SSC graduates planning to study in Cyprus."
      },
      {
        "href": "/study/cyprus/study-in-cyprus-after-diploma",
        "label": "After Diploma",
        "title": "Study in Cyprus After Diploma",
        "d": "Credit exemption and degree entry options for Bangladeshi polytechnic and diploma holders in Cyprus."
      },
      {
        "href": "/study/cyprus/cyprus-intake-dates",
        "label": "Intake Dates",
        "title": "Cyprus Intake Dates",
        "d": "Main intake months in Cyprus and the best time for Bangladeshi students to start applications."
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/cyprus/north-cyprus-vs-republic-of-cyprus-for-students",
        "label": "North vs Republic of Cyprus",
        "title": "North Cyprus vs Republic of Cyprus for Students",
        "d": "A neutral comparison of studying in Northern Cyprus and the Republic of Cyprus: fees, visas, recognition, work rights and risks."
      },
      {
        "href": "/study/cyprus/degree-recognition-and-accreditation-in-cyprus",
        "label": "Degree Recognition",
        "title": "Degree Recognition and Accreditation in Cyprus",
        "d": "How accreditation and degree recognition work for Cypriot universities and how Bangladeshi students should verify equivalence."
      },
      {
        "href": "/study/cyprus/mba-in-cyprus-for-bangladeshi-students",
        "label": "MBA in Cyprus",
        "title": "MBA in Cyprus for Bangladeshi Students",
        "d": "MBA entry rules, fees in BDT and work-experience expectations for Bangladeshi applicants in Cyprus."
      },
      {
        "href": "/study/cyprus/cse-and-it-courses-in-cyprus",
        "label": "CSE & IT Courses",
        "title": "CSE and IT Courses in Cyprus",
        "d": "Computer science, software engineering, data science and cybersecurity study options in Cyprus for Bangladeshi students."
      },
      {
        "href": "/study/cyprus/student-accommodation-in-cyprus",
        "label": "Student Accommodation",
        "title": "Student Accommodation in Cyprus",
        "d": "Dormitories, shared apartments and private housing options with typical monthly rents for students in Cyprus."
      }
    ]
  },
  {
    "label": "Visa, Permits & Work Rules",
    "pages": [
      {
        "href": "/study/cyprus/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements",
        "title": "Cyprus Student Visa Requirements for Bangladesh",
        "d": "Documents and steps for a Cyprus student visa or entry permit from Bangladesh, including funds, police clearance and insurance."
      },
      {
        "href": "/study/cyprus/residence-permit-and-arrival-guide-cyprus",
        "label": "Residence Permit & Arrival",
        "title": "Residence Permit and Arrival Guide for Cyprus",
        "d": "What happens after admission: entry permit, arrival, biometrics and residence permit stages for students in Cyprus."
      },
      {
        "href": "/study/cyprus/bank-solvency-requirements-for-cyprus-student-visa",
        "label": "Bank Solvency",
        "title": "Bank Solvency Requirements for Cyprus Student Visa",
        "d": "How much money proof Bangladeshi students should prepare and how to present bank statements for a Cyprus visa."
      },
      {
        "href": "/study/cyprus/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost",
        "title": "Cyprus Student Visa Processing Time and Cost",
        "d": "Typical processing time and the main fees Bangladeshi students should budget for in a Cyprus visa or permit application."
      },
      {
        "href": "/study/cyprus/part-time-job-and-post-study-work-rules-in-cyprus",
        "label": "Work Rules",
        "title": "Part-Time Job and Post-Study Work Rules in Cyprus",
        "d": "What international students may and may not do regarding part-time work and staying after graduation in Cyprus."
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/cyprus/bangladesh-offices",
        "label": "Bangladesh Offices & Support",
        "title": "Eammu Holidays Bangladesh Offices and Support",
        "d": "Walk-in counseling in Dhaka and online or courier processing for Cyprus study applicants in every division of Bangladesh."
      },
      {
        "href": "/study/cyprus/consultancy-in-dhaka",
        "label": "Dhaka Consultancy",
        "title": "Study in Cyprus Consultancy in Dhaka",
        "d": "Study in Cyprus consultancy in Dhaka for 2026: free walk-in counseling, university shortlisting, recognition checks and visa guidance from E"
      },
      {
        "href": "/study/cyprus/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy",
        "title": "Study in Cyprus Consultancy for Uttara Students",
        "d": "Study in Cyprus consultancy for Uttara, Dhaka students in 2026: free counseling, recognition checks and visa preparation from Eammu Holidays"
      },
      {
        "href": "/study/cyprus/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy",
        "title": "Study in Cyprus Consultancy for Dhanmondi Students",
        "d": "Study in Cyprus consultancy for Dhanmondi, Dhaka students in 2026: counseling, university shortlisting, accreditation checks and visa help f"
      },
      {
        "href": "/study/cyprus/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy",
        "title": "Study in Cyprus Consultancy for Mirpur Students",
        "d": "Study in Cyprus consultancy for Mirpur, Dhaka students in 2026: budget-friendly counseling, diploma pathways and visa preparation from Eammu"
      },
      {
        "href": "/study/cyprus/consultancy-in-chattogram",
        "label": "Chattogram Consultancy",
        "title": "Study in Cyprus Consultancy for Chattogram Students",
        "d": "Study in Cyprus consultancy for Chattogram students in 2026: online counseling, courier document support, recognition and visa guidance from"
      },
      {
        "href": "/study/cyprus/consultancy-in-sylhet",
        "label": "Sylhet Consultancy",
        "title": "Study in Cyprus Consultancy for Sylhet Students",
        "d": "Study in Cyprus consultancy for Sylhet students in 2026: online counseling, family-sponsor document help, recognition and visa guidance from"
      },
      {
        "href": "/study/cyprus/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy",
        "title": "Study in Cyprus Consultancy for Rajshahi Students",
        "d": "Study in Cyprus consultancy for Rajshahi students in 2026: online counseling, courier documents, graduate pathways and visa guidance from Ea"
      },
      {
        "href": "/study/cyprus/consultancy-in-khulna",
        "label": "Khulna Consultancy",
        "title": "Study in Cyprus Consultancy for Khulna Students",
        "d": "Study in Cyprus consultancy for Khulna students in 2026: online counseling, courier documents, engineering pathways and visa guidance from E"
      },
      {
        "href": "/study/cyprus/consultancy-in-barishal",
        "label": "Barishal Consultancy",
        "title": "Study in Cyprus Consultancy for Barishal Students",
        "d": "Study in Cyprus consultancy for Barishal students in 2026: online counseling, courier document help, recognition and visa guidance from Eamm"
      },
      {
        "href": "/study/cyprus/consultancy-in-rangpur",
        "label": "Rangpur Consultancy",
        "title": "Study in Cyprus Consultancy for Rangpur Students",
        "d": "Study in Cyprus consultancy for Rangpur students in 2026: online counseling, courier documents, scholarship checks and visa guidance from Ea"
      },
      {
        "href": "/study/cyprus/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy",
        "title": "Study in Cyprus Consultancy for Mymensingh Students",
        "d": "Study in Cyprus consultancy for Mymensingh students in 2026: easy access to Dhaka counseling, online support and visa preparation from Eammu"
      },
      {
        "href": "/study/cyprus/consultancy-in-cumilla",
        "label": "Cumilla Consultancy",
        "title": "Study in Cyprus Consultancy for Cumilla Students",
        "d": "Study in Cyprus consultancy for Cumilla students in 2026: local-area support, online counseling, recognition and visa guidance from Eammu Ho"
      },
      {
        "href": "/study/cyprus/consultancy-in-bogura",
        "label": "Bogura Consultancy",
        "title": "Study in Cyprus Consultancy for Bogura Students",
        "d": "Study in Cyprus consultancy for Bogura students in 2026: online counseling, courier document support and visa guidance from Eammu Holidays i"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/cyprus/north-cyprus-vs-republic-of-cyprus-for-students",
    "title": "North Cyprus vs Republic of Cyprus for Students",
    "description": "A neutral comparison of studying in Northern Cyprus and the Republic of Cyprus: fees, visas, recognition, work rights and risks."
  },
  {
    "href": "/study/cyprus/degree-recognition-and-accreditation-in-cyprus",
    "title": "Degree Recognition and Accreditation in Cyprus",
    "description": "How accreditation and degree recognition work for Cypriot universities and how Bangladeshi students should verify equivalence."
  },
  {
    "href": "/study/cyprus/study-in-cyprus-from-bangladesh",
    "title": "Study in Cyprus from Bangladesh",
    "description": "A practical roadmap for studying in Cyprus from Bangladesh: choosing a system, costs, visa steps and timelines in one place."
  },
  {
    "href": "/study/cyprus/bangladesh-offices",
    "title": "Eammu Holidays Bangladesh Offices and Support",
    "description": "Walk-in counseling in Dhaka and online or courier processing for Cyprus study applicants in every division of Bangladesh."
  }
];
const FAQS = [
  {
    "q": "Is Cyprus a good choice for Bangladeshi students in 2026?",
    "a": "It can be, depending on the university and system you choose. The key issues are degree recognition for your future plans, visa rules and total cost."
  },
  {
    "q": "What is the difference between North Cyprus and the Republic of Cyprus?",
    "a": "They have different governments, university systems, visa procedures and degree-recognition situations. The Republic is an EU member, while Northern Cyprus is recognised as a state only by Turkey."
  },
  {
    "q": "How much does it cost to study in Cyprus from Bangladesh?",
    "a": "Roughly EUR 3,000 to 7,000 per year in tuition at many Northern Cyprus universities and EUR 7,000 to 12,500 at many private universities in the Republic, plus living costs. Confirm with each university."
  },
  {
    "q": "Will my Cyprus degree be accepted in other countries?",
    "a": "Not automatically. Recognition depends on the university, the accrediting body and the country or employer. Verify before you enrol."
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
          "name": "Cyprus",
          "item": "https://eammu.com/study/cyprus"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Cyprus 2026: Complete Guide for Bangladeshi Students",
      "description": "Complete 2026 guide to study in Cyprus from Bangladesh: Republic vs Northern Cyprus, costs in BDT, visas, degree recognition and free Eammu counseling.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/cyprus",
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
          "name": "Is Cyprus a good choice for Bangladeshi students in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be, depending on the university and system you choose. The key issues are degree recognition for your future plans, visa rules and total cost."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between North Cyprus and the Republic of Cyprus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They have different governments, university systems, visa procedures and degree-recognition situations. The Republic is an EU member, while Northern Cyprus is recognised as a state only by Turkey."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to study in Cyprus from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roughly EUR 3,000 to 7,000 per year in tuition at many Northern Cyprus universities and EUR 7,000 to 12,500 at many private universities in the Republic, plus living costs. Confirm with each university."
          }
        },
        {
          "@type": "Question",
          "name": "Will my Cyprus degree be accepted in other countries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Recognition depends on the university, the accrediting body and the country or employer. Verify before you enrol."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Cyprus 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Cyprus 2026: Complete Guide for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Two education systems, two sets of rules. Costs in BDT, admission, visas, degree recognition and 37 detailed guides built for Bangladeshi families.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Cyprus guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Cyprus guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">First, understand there are two systems in Cyprus</h2>
<p className="mt-4 leading-7 text-slate-700">Cyprus is one island with two separate higher-education systems. The Republic of Cyprus in the south is an EU member state, while Northern Cyprus is administered by the Turkish Cypriot authorities and is recognised as a state only by Turkey. Most low-cost, easy-admission programmes marketed in Bangladesh are in the north, while EU-regulated private and public universities are in the south. Visa routes, costs, work rights and degree recognition differ, so read <Link href="/study/cyprus/north-cyprus-vs-republic-of-cyprus-for-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">North Cyprus vs Republic of Cyprus for students</Link> and <Link href="/study/cyprus/degree-recognition-and-accreditation-in-cyprus" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">degree recognition and accreditation in Cyprus</Link> before choosing a university.</p>
<p className="mt-4 leading-7 text-slate-700">Our roadmap for &#123;&#123;from-bd|studying in Cyprus from Bangladesh&#125;&#125; explains the full journey, and the cost guides <Link href="/study/cyprus/tuition-fees-in-cyprus-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Cyprus for Bangladeshi students</Link> and <Link href="/study/cyprus/cost-of-living-in-cyprus-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Cyprus for Bangladeshi students</Link> show what each option means in taka.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Why Bangladeshi students consider Cyprus</h2>
<p className="mt-4 leading-7 text-slate-700">Cyprus offers English-medium programmes, a Mediterranean climate, moderate tuition compared with the UK or Australia and flexible entry, which is why &#123;&#123;no-ielts|studying in Cyprus without IELTS&#125;&#125; is a popular search. Many families also compare <Link href="/study/cyprus/cheapest-universities-in-cyprus" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the cheapest universities in Cyprus</Link> and <Link href="/study/cyprus/top-universities-in-cyprus" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Cyprus</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">Students with SSC can read <Link href="/study/cyprus/study-in-cyprus-after-ssc" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Cyprus after SSC</Link>, diploma holders can see <Link href="/study/cyprus/study-in-cyprus-after-diploma" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Cyprus after diploma</Link>, and HSC graduates can follow the <Link href="/study/cyprus/admission-requirements-in-cyprus-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements for Bangladeshi students</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Indicative cost snapshot (EUR and BDT)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">Approx. EUR</th><th scope="col" className="px-3 py-2 text-left font-bold">Approx. BDT</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor&apos;s tuition per year, Northern Cyprus</td><td className="px-3 py-2 align-top">EUR 3,000 – 7,000</td><td className="px-3 py-2 align-top">Tk 4.2 – 9.8 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor&apos;s tuition per year, Republic private</td><td className="px-3 py-2 align-top">EUR 7,000 – 12,500</td><td className="px-3 py-2 align-top">Tk 9.8 – 17.5 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living per month, Northern Cyprus</td><td className="px-3 py-2 align-top">EUR 350 – 650</td><td className="px-3 py-2 align-top">Tk 49,000 – 91,000</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living per month, Republic of Cyprus</td><td className="px-3 py-2 align-top">EUR 700 – 1,100</td><td className="px-3 py-2 align-top">Tk 98,000 – 1,54,000</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use assumed rates of 1 EUR = about Tk 140 and 1 USD = about Tk 122 and are indicative estimates for 2026–2027. Fees, visa rules and exchange rates change, so always confirm with the university, the relevant Cypriot authority or an Eammu Holidays counselor before paying.</p>
<p className="mt-4 leading-7 text-slate-700">Discounts and merit awards can change these numbers; see <Link href="/study/cyprus/scholarships-in-cyprus-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Cyprus for Bangladeshi students</Link> for realistic expectations and warnings about inflated price lists.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Your step-by-step journey</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Decide which system suits your goals using <Link href="/study/cyprus/north-cyprus-vs-republic-of-cyprus-for-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the North vs Republic comparison</Link>.</li><li>Verify accreditation and recognition, as explained in <Link href="/study/cyprus/degree-recognition-and-accreditation-in-cyprus" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the degree recognition guide</Link>.</li><li>Check <Link href="/study/cyprus/cyprus-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cyprus intake dates</Link> and prepare documents, including for <Link href="/study/cyprus/study-gap-accepted-universities-in-cyprus" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study gaps</Link> if relevant.</li><li>Follow the <Link href="/study/cyprus/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa requirements</Link> and the <Link href="/study/cyprus/residence-permit-and-arrival-guide-cyprus" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">residence permit and arrival guide</Link>.</li><li>Arrange funds per <Link href="/study/cyprus/bank-solvency-requirements-for-cyprus-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bank solvency requirements</Link> and plan <Link href="/study/cyprus/student-accommodation-in-cyprus" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student accommodation</Link>.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">How Eammu Holidays supports you</h2>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays offers walk-in counseling in Dhaka and online and courier processing for students across Bangladesh. We aim to give balanced advice, including on risks. Find your nearest support route on our <Link href="/study/cyprus/bangladesh-offices" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bangladesh offices and locations page</Link>, or go to <Link href="/study/cyprus/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Cyprus consultancy in Dhaka</Link>.</p>
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
            <h2 id="directory-heading" className="text-2xl font-bold text-emerald-900">Complete Directory: Every Cyprus Study Guide</h2>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Cyprus Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Cyprus</h2>
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
