import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/finland';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Finland Hub for Bangladeshis 2026 | Eammu Holidays",
  "description": "Complete 2026 guide to study in Finland from Bangladesh: tuition in BDT, Studyinfo, residence permit, EUR 9,600 funds, work rules and Eammu counseling.",
  "alternates": {
    "canonical": "https://eammu.com/study/finland"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Finland Hub for Bangladeshis 2026 | Eammu Holidays",
    "description": "Complete 2026 guide to study in Finland from Bangladesh: tuition in BDT, Studyinfo, residence permit, EUR 9,600 funds, work rules and Eammu counseling.",
    "url": "https://eammu.com/study/finland",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Finland Hub for Bangladeshis 2026 | Eammu Holidays",
    "description": "Complete 2026 guide to study in Finland from Bangladesh: tuition in BDT, Studyinfo, residence permit, EUR 9,600 funds, work rules and Eammu counseling."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Finland", "href": "/study/finland"}];
const NAV = [
  {
    "label": "Finland Hub",
    "pages": [
      {
        "href": "/study/finland",
        "label": "Study in Finland Hub",
        "title": "Study in Finland 2026: Complete Hub for Bangladeshi Students",
        "d": "Start here: every guide on tuition, Studyinfo applications, residence permits, EUR 9,600 funds, work rules and local support for Bangladeshi students planning to study in Finland."
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/finland/study-in-finland-from-bangladesh",
        "label": "Study from Bangladesh",
        "title": "Study in Finland from Bangladesh",
        "d": "A practical roadmap for studying in Finland from Bangladesh: choosing a programme, Studyinfo, costs, the residence permit and timelines."
      },
      {
        "href": "/study/finland/study-in-finland-without-ielts",
        "label": "Without IELTS",
        "title": "Study in Finland Without IELTS",
        "d": "How Bangladeshi students can meet Finnish English requirements without IELTS, and what exemptions and alternatives exist."
      },
      {
        "href": "/study/finland/tuition-fees-in-finland-for-bangladeshi-students",
        "label": "Tuition Fees",
        "title": "Tuition Fees in Finland for Bangladeshi Students",
        "d": "Realistic tuition ranges in EUR and BDT for universities and universities of applied sciences in Finland, plus extra costs."
      },
      {
        "href": "/study/finland/cost-of-living-in-finland-for-bangladeshi-students",
        "label": "Cost of Living",
        "title": "Cost of Living in Finland for Bangladeshi Students",
        "d": "Monthly budget breakdown for rent, food, transport and phone in Helsinki, Tampere, Turku, Oulu and other Finnish student cities."
      },
      {
        "href": "/study/finland/cheapest-universities-in-finland",
        "label": "Cheapest Universities",
        "title": "Cheapest Universities in Finland",
        "d": "How to find low-cost Finnish universities and UAS and what to check beyond the headline tuition fee."
      },
      {
        "href": "/study/finland/top-universities-in-finland",
        "label": "Top Universities",
        "title": "Top Universities in Finland",
        "d": "Overview of well-known Finnish universities and universities of applied sciences and how to choose among them."
      },
      {
        "href": "/study/finland/universities-vs-universities-of-applied-sciences-in-finland",
        "label": "Universities vs UAS",
        "title": "Universities vs Universities of Applied Sciences in Finland",
        "d": "Compare research universities and universities of applied sciences in Finland: fees, entry routes, degrees and careers."
      },
      {
        "href": "/study/finland/scholarships-in-finland-for-bangladeshi-students",
        "label": "Scholarships",
        "title": "Scholarships in Finland for Bangladeshi Students",
        "d": "Types of scholarships and tuition waivers available to Bangladeshi students in Finland and how to apply."
      },
      {
        "href": "/study/finland/admission-requirements-in-finland-for-bangladeshi-students",
        "label": "Admission Requirements",
        "title": "Admission Requirements in Finland for Bangladeshi Students",
        "d": "HSC, degree, English and document requirements for Finnish institutions explained for Bangladeshi applicants."
      },
      {
        "href": "/study/finland/study-gap-accepted-universities-in-finland",
        "label": "Study Gap Accepted",
        "title": "Study Gap Accepted Institutions in Finland",
        "d": "How study gaps are treated by Finnish institutions and Migri and what documents explain a gap for Bangladeshi applicants."
      },
      {
        "href": "/study/finland/study-in-finland-after-ssc",
        "label": "After SSC",
        "title": "Study in Finland After SSC",
        "d": "Pathway options for SSC graduates planning to study in Finland, and why HSC matters."
      },
      {
        "href": "/study/finland/study-in-finland-after-diploma",
        "label": "After Diploma",
        "title": "Study in Finland After Diploma",
        "d": "Degree entry and recognition options for Bangladeshi polytechnic and diploma holders in Finland."
      },
      {
        "href": "/study/finland/finland-intake-dates",
        "label": "Intake Dates",
        "title": "Finland Intake Dates",
        "d": "Main application windows and intakes in Finland, including the January 2027 joint application, for Bangladeshi students."
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/finland/studyinfo-joint-application-guide-for-finland",
        "label": "Studyinfo Application Guide",
        "title": "Studyinfo Joint Application Guide for Finland",
        "d": "How to apply to Finnish universities through Studyinfo.fi: joint application windows, the EUR 100 fee, entrance exams and results."
      },
      {
        "href": "/study/finland/degree-recognition-and-eligibility-in-finland",
        "label": "Degree Recognition & Eligibility",
        "title": "Degree Recognition and Eligibility in Finland",
        "d": "How Finnish institutions judge Bangladeshi qualifications and how a Finnish degree is recognised in Bangladesh and abroad."
      },
      {
        "href": "/study/finland/cse-and-it-courses-in-finland",
        "label": "CSE & IT Courses",
        "title": "CSE and IT Courses in Finland",
        "d": "Computer science, software engineering, data science and IT study options in Finland for Bangladeshi students."
      },
      {
        "href": "/study/finland/mba-in-finland-for-bangladeshi-students",
        "label": "MBA & Master's",
        "title": "MBA and Master's Programmes in Finland for Bangladeshi Students",
        "d": "MBA and master’s entry rules, fees in BDT, work-experience expectations and funding for Bangladeshi applicants in Finland."
      },
      {
        "href": "/study/finland/student-accommodation-in-finland",
        "label": "Student Accommodation",
        "title": "Student Accommodation in Finland",
        "d": "Student housing foundation flats, shared apartments and private housing options with typical monthly rents in Finland."
      }
    ]
  },
  {
    "label": "Visa, Permit & Work Rules",
    "pages": [
      {
        "href": "/study/finland/student-visa-requirements-bangladesh",
        "label": "Residence Permit Requirements",
        "title": "Finland Residence Permit Requirements for Bangladeshi Students",
        "d": "Documents and eligibility for a Finnish residence permit for studies from Bangladesh, including admission, funds and insurance."
      },
      {
        "href": "/study/finland/enter-finland-and-migri-application-guide",
        "label": "Enter Finland & Migri Guide",
        "title": "Enter Finland and Migri Residence Permit Application Guide",
        "d": "How the online residence permit application on Enter Finland works, from account to decision and arrival."
      },
      {
        "href": "/study/finland/bank-solvency-requirements-for-finland-student-visa",
        "label": "Proof of Funds",
        "title": "Proof of Funds Requirements for a Finland Study Permit",
        "d": "How much money proof Bangladeshi students must show for a Finnish residence permit and how to present bank statements."
      },
      {
        "href": "/study/finland/student-visa-processing-time-and-cost",
        "label": "Permit Time & Cost",
        "title": "Finland Residence Permit Processing Time and Cost",
        "d": "Typical processing time and the main fees Bangladeshi students should budget for in a Finnish residence permit application."
      },
      {
        "href": "/study/finland/part-time-job-and-post-study-work-rules-in-finland",
        "label": "Work & Post-Study Rules",
        "title": "Work and Post-Study Rules for International Students in Finland",
        "d": "What students may do regarding work, the two-year job-search permit and the tightened permanent residence rules in Finland."
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/finland/bangladesh-offices",
        "label": "Bangladesh Offices & Support",
        "title": "Eammu Holidays Bangladesh Offices and Support",
        "d": "Walk-in counseling in Dhaka and online or courier processing for Finland study applicants in every division of Bangladesh."
      },
      {
        "href": "/study/finland/consultancy-in-dhaka",
        "label": "Dhaka Consultancy",
        "title": "Study in Finland Consultancy in Dhaka",
        "d": "Study in Finland consultancy in Dhaka for 2026: free walk-in counseling, Studyinfo shortlisting, funds and permit guidance from Eammu Holida"
      },
      {
        "href": "/study/finland/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy",
        "title": "Study in Finland Consultancy for Uttara Students",
        "d": "Study in Finland consultancy for Uttara, Dhaka students in 2026: free counseling, Studyinfo and funds guidance and permit preparation from E"
      },
      {
        "href": "/study/finland/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy",
        "title": "Study in Finland Consultancy for Dhanmondi Students",
        "d": "Study in Finland consultancy for Dhanmondi, Dhaka students in 2026: counseling, programme shortlisting, Studyinfo and funds guidance from Ea"
      },
      {
        "href": "/study/finland/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy",
        "title": "Study in Finland Consultancy for Mirpur Students",
        "d": "Study in Finland consultancy for Mirpur, Dhaka students in 2026: budget-aware counseling, diploma pathways and permit preparation from Eammu"
      },
      {
        "href": "/study/finland/consultancy-in-chattogram",
        "label": "Chattogram Consultancy",
        "title": "Study in Finland Consultancy for Chattogram Students",
        "d": "Study in Finland consultancy for Chattogram students in 2026: online counseling, courier document support, funds and permit guidance from Ea"
      },
      {
        "href": "/study/finland/consultancy-in-sylhet",
        "label": "Sylhet Consultancy",
        "title": "Study in Finland Consultancy for Sylhet Students",
        "d": "Study in Finland consultancy for Sylhet students in 2026: online counseling, family-sponsor funds guidance and honest permit advice from Eam"
      },
      {
        "href": "/study/finland/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy",
        "title": "Study in Finland Consultancy for Rajshahi Students",
        "d": "Study in Finland consultancy for Rajshahi students in 2026: online counseling, courier documents, graduate pathways and permit guidance from"
      },
      {
        "href": "/study/finland/consultancy-in-khulna",
        "label": "Khulna Consultancy",
        "title": "Study in Finland Consultancy for Khulna Students",
        "d": "Study in Finland consultancy for Khulna students in 2026: online counseling, courier documents, engineering pathways and permit guidance fro"
      },
      {
        "href": "/study/finland/consultancy-in-barishal",
        "label": "Barishal Consultancy",
        "title": "Study in Finland Consultancy for Barishal Students",
        "d": "Study in Finland consultancy for Barishal students in 2026: online counseling, courier document help, funds and permit guidance from Eammu H"
      },
      {
        "href": "/study/finland/consultancy-in-rangpur",
        "label": "Rangpur Consultancy",
        "title": "Study in Finland Consultancy for Rangpur Students",
        "d": "Study in Finland consultancy for Rangpur students in 2026: online counseling, courier documents, scholarship checks and permit guidance from"
      },
      {
        "href": "/study/finland/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy",
        "title": "Study in Finland Consultancy for Mymensingh Students",
        "d": "Study in Finland consultancy for Mymensingh students in 2026: easy access to Dhaka counseling, online support and permit preparation from Ea"
      },
      {
        "href": "/study/finland/consultancy-in-cumilla",
        "label": "Cumilla Consultancy",
        "title": "Study in Finland Consultancy for Cumilla Students",
        "d": "Study in Finland consultancy for Cumilla students in 2026: local-area support, online counseling, funds and permit guidance from Eammu Holid"
      },
      {
        "href": "/study/finland/consultancy-in-bogura",
        "label": "Bogura Consultancy",
        "title": "Study in Finland Consultancy for Bogura Students",
        "d": "Study in Finland consultancy for Bogura students in 2026: online counseling, courier document support and permit guidance from Eammu Holiday"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/finland/studyinfo-joint-application-guide-for-finland",
    "title": "Studyinfo Joint Application Guide for Finland",
    "description": "How to apply to Finnish universities through Studyinfo.fi: joint application windows, the EUR 100 fee, entrance exams and results."
  },
  {
    "href": "/study/finland/enter-finland-and-migri-application-guide",
    "title": "Enter Finland and Migri Residence Permit Application Guide",
    "description": "How the online residence permit application on Enter Finland works, from account to decision and arrival."
  },
  {
    "href": "/study/finland/bank-solvency-requirements-for-finland-student-visa",
    "title": "Proof of Funds Requirements for a Finland Study Permit",
    "description": "How much money proof Bangladeshi students must show for a Finnish residence permit and how to present bank statements."
  },
  {
    "href": "/study/finland/bangladesh-offices",
    "title": "Eammu Holidays Bangladesh Offices and Support",
    "description": "Walk-in counseling in Dhaka and online or courier processing for Finland study applicants in every division of Bangladesh."
  }
];
const FAQS = [
  {
    "q": "Is Finland free for Bangladeshi students?",
    "a": "No. Non-EU/EEA students pay tuition fees for bachelor's and master's programmes, typically about EUR 6,000 to 18,000 per year. Doctoral studies are generally free."
  },
  {
    "q": "How much money must I show for the Finland residence permit?",
    "a": "For studies of a year or more, EUR 9,600 in your bank account on the day you apply, plus your first-year tuition fee if it is not yet paid."
  },
  {
    "q": "Do I need a visa to study in Finland?",
    "a": "For studies over 90 days you need a residence permit for studies from Migri, applied for on Enter Finland after you are admitted."
  },
  {
    "q": "Can I work while studying in Finland?",
    "a": "Yes, students may work on average 30 hours a week over the year, and full-time in practical training or thesis work."
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
          "name": "Finland",
          "item": "https://eammu.com/study/finland"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Finland 2026: Complete Guide for Bangladeshi Students",
      "description": "Complete 2026 guide to study in Finland from Bangladesh: tuition in BDT, Studyinfo, residence permit, EUR 9,600 funds, work rules and Eammu counseling.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/finland",
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
          "name": "Is Finland free for Bangladeshi students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Non-EU/EEA students pay tuition fees for bachelor's and master's programmes, typically about EUR 6,000 to 18,000 per year. Doctoral studies are generally free."
          }
        },
        {
          "@type": "Question",
          "name": "How much money must I show for the Finland residence permit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For studies of a year or more, EUR 9,600 in your bank account on the day you apply, plus your first-year tuition fee if it is not yet paid."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a visa to study in Finland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For studies over 90 days you need a residence permit for studies from Migri, applied for on Enter Finland after you are admitted."
          }
        },
        {
          "@type": "Question",
          "name": "Can I work while studying in Finland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students may work on average 30 hours a week over the year, and full-time in practical training or thesis work."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Finland 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Finland 2026: Complete Guide for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Costs in BDT, the Studyinfo application, the Migri residence permit, proof of funds, work and post-study rules, and honest advice on what Finland demands. 37 detailed guides for Bangladeshi families.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Finland guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Finland guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Read this first: what Finland costs and demands</h2>
<p className="mt-4 leading-7 text-slate-700">Finland has no tuition-free route for non-EU students at bachelor&apos;s or master&apos;s level, and to apply for a residence permit you must show EUR 9,600 in your bank account plus your first-year tuition. The job market is demanding, Finnish or Swedish is often needed for work, and rules for permanent residence tightened in January 2026. Plan carefully, and never pay anyone for a guaranteed place or permit.</p>
<p className="mt-4 leading-7 text-slate-700">Start with <Link href="/study/finland/studyinfo-joint-application-guide-for-finland" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Studyinfo joint application guide</Link>, then <Link href="/study/finland/enter-finland-and-migri-application-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Enter Finland and Migri application guide</Link> and <Link href="/study/finland/bank-solvency-requirements-for-finland-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the proof of funds requirements</Link>, so you know the timeline and the money you must show before you begin.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Why Bangladeshi students consider Finland</h2>
<p className="mt-4 leading-7 text-slate-700">Finland offers high-quality English-taught degrees, a safe and well-organised society, a 30-hour weekly work allowance during studies and a two-year job-search permit after graduation. Read the full roadmap in &#123;&#123;from-bd|studying in Finland from Bangladesh&#125;&#125;, and compare <Link href="/study/finland/tuition-fees-in-finland-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Finland for Bangladeshi students</Link> with <Link href="/study/finland/cost-of-living-in-finland-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living in Finland</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">Finland has universities and universities of applied sciences (UAS) with different aims and costs; see <Link href="/study/finland/universities-vs-universities-of-applied-sciences-in-finland" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">universities vs universities of applied sciences in Finland</Link> and <Link href="/study/finland/top-universities-in-finland" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in Finland</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Where to begin: choose your level and route</h2>
<p className="mt-4 leading-7 text-slate-700">Students with SSC should read <Link href="/study/finland/study-in-finland-after-ssc" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Finland after SSC</Link>, diploma holders can see <Link href="/study/finland/study-in-finland-after-diploma" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Finland after diploma</Link>, and HSC graduates can follow the <Link href="/study/finland/admission-requirements-in-finland-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements for Bangladeshi students</Link>. Graduates can compare <Link href="/study/finland/mba-in-finland-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MBA and master&apos;s programmes in Finland</Link>. If English tests are a concern, see &#123;&#123;no-ielts|studying in Finland without IELTS&#125;&#125;.</p>
<p className="mt-4 leading-7 text-slate-700">Next, shortlist programmes using <Link href="/study/finland/cheapest-universities-in-finland" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the cheapest universities in Finland</Link> and <Link href="/study/finland/cse-and-it-courses-in-finland" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">CSE and IT courses in Finland</Link>, check <Link href="/study/finland/degree-recognition-and-eligibility-in-finland" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">degree recognition</Link>, and note the <Link href="/study/finland/finland-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Finland intake dates</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Indicative cost snapshot (EUR and BDT)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">Approx. EUR</th><th scope="col" className="px-3 py-2 text-left font-bold">Approx. BDT</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">University tuition per year (non-EU)</td><td className="px-3 py-2 align-top">EUR 8,000 – 18,000</td><td className="px-3 py-2 align-top">Tk 11.2 – 25.2 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">UAS tuition per year (non-EU)</td><td className="px-3 py-2 align-top">EUR 6,000 – 12,000</td><td className="px-3 py-2 align-top">Tk 8.4 – 16.8 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Funds to show for the first year (living)</td><td className="px-3 py-2 align-top">EUR 9,600</td><td className="px-3 py-2 align-top">Tk 13.4 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Residence permit fee (electronic, 2026)</td><td className="px-3 py-2 align-top">EUR 600</td><td className="px-3 py-2 align-top">Tk 84,000</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 EUR = about Tk 140 and are indicative estimates for 2026–2027 based on published university fees and Migri rules. Fees, funds requirements and exchange rates change, so always confirm on Migri.fi, Studyinfo.fi, with the institution or with an Eammu Holidays counselor before paying.</p>
<p className="mt-4 leading-7 text-slate-700">Scholarships and tuition waivers exist but are limited; see <Link href="/study/finland/scholarships-in-finland-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Finland for Bangladeshi students</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Your step-by-step journey</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Shortlist English-taught programmes and note the application window; see <Link href="/study/finland/studyinfo-joint-application-guide-for-finland" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Studyinfo guide</Link>.</li><li>Apply on Studyinfo.fi, pay the EUR 100 application fee and complete any entrance exam.</li><li>After admission, accept the place and arrange tuition and living funds per <Link href="/study/finland/bank-solvency-requirements-for-finland-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds requirements</Link>.</li><li>Apply for the residence permit on Enter Finland; see <Link href="/study/finland/enter-finland-and-migri-application-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Migri application guide</Link> and <Link href="/study/finland/student-visa-requirements-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student visa and permit requirements</Link>.</li><li>Plan <Link href="/study/finland/student-accommodation-in-finland" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">student accommodation in Finland</Link> and read <Link href="/study/finland/part-time-job-and-post-study-work-rules-in-finland" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">work and post-study rules</Link> before you depart.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">How Eammu Holidays supports you</h2>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays offers walk-in counseling in Dhaka and online and courier support across Bangladesh, with honest advice about costs and risks. Find your nearest support route on our <Link href="/study/finland/bangladesh-offices" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bangladesh offices and locations page</Link>, or go to <Link href="/study/finland/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Finland consultancy in Dhaka</Link>.</p>
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
            <h2 id="directory-heading" className="text-2xl font-bold text-emerald-900">Complete Directory: Every Finland Study Guide</h2>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Finland Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Finland</h2>
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
