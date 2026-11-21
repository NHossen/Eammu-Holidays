import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/armenia/bangladesh-offices';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Armenia Bangladesh Offices 2026 | Eammu Holidays",
  "description": "Find Eammu Holidays study in Armenia counseling in Bangladesh: walk-in support in Dhaka, online help for every district and an office in Yerevan.",
  "alternates": {
    "canonical": "https://eammu.com/study/armenia/bangladesh-offices"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Armenia Bangladesh Offices 2026 | Eammu Holidays",
    "description": "Find Eammu Holidays study in Armenia counseling in Bangladesh: walk-in support in Dhaka, online help for every district and an office in Yerevan.",
    "url": "https://eammu.com/study/armenia/bangladesh-offices",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Armenia Bangladesh Offices 2026 | Eammu Holidays",
    "description": "Find Eammu Holidays study in Armenia counseling in Bangladesh: walk-in support in Dhaka, online help for every district and an office in Yerevan."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Armenia", "href": "/study/armenia"}, {"name": "Bangladesh Offices & Support", "href": "/study/armenia/bangladesh-offices"}];
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
    "href": "/study/armenia/consultancy-in-dhaka",
    "title": "Study in Armenia Consultancy in Dhaka",
    "description": "Study in Armenia consultancy in Dhaka for 2026: free walk-in counseling, university shortlisting, recognition checks and visa guidance from "
  },
  {
    "href": "/study/armenia",
    "title": "Study in Armenia 2026: Complete Hub for Bangladeshi Students",
    "description": "Start here: every guide on tuition, visas, residence permits, MBBS, scholarships, universities and local support for Bangladeshi students planning to study in Armenia."
  },
  {
    "href": "/study/armenia/study-in-armenia-from-bangladesh",
    "title": "Study in Armenia from Bangladesh",
    "description": "A practical roadmap for studying in Armenia from Bangladesh: choosing a course, costs, visa and residence steps and timelines."
  },
  {
    "href": "/study/armenia/medical-degree-recognition-and-bmdc-guide-armenia",
    "title": "Medical Degree Recognition and BMDC Guide for Armenia",
    "description": "How accreditation and recognition work for Armenian degrees and how Bangladeshi medical students should verify BMDC acceptance."
  }
];
const FAQS = [
  {
    "q": "Where can I meet Eammu Holidays counselors in person?",
    "a": "Our main walk-in counseling desk is in Dhaka. Please call or WhatsApp to confirm an appointment time."
  },
  {
    "q": "Does Eammu Holidays have an office in Armenia?",
    "a": "Yes, Eammu Holidays has an office in Yerevan. Please confirm services and visiting details by phone before relying on it."
  },
  {
    "q": "Can I apply from outside Dhaka?",
    "a": "Yes. Eammu Holidays supports students in all divisions through online counseling and courier document handling."
  },
  {
    "q": "Do you charge for the first consultation?",
    "a": "Our first counseling session for Armenia study is free."
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
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Bangladesh Offices & Support",
          "item": "https://eammu.com/study/armenia/bangladesh-offices"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Armenia Counseling Across Bangladesh: Offices and Support",
      "description": "Find Eammu Holidays study in Armenia counseling in Bangladesh: walk-in support in Dhaka, online help for every district and an office in Yerevan.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/armenia/bangladesh-offices",
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
          "name": "Does Eammu Holidays have an office in Armenia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Eammu Holidays has an office in Yerevan. Please confirm services and visiting details by phone before relying on it."
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
            "text": "Our first counseling session for Armenia study is free."
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
      "url": "https://eammu.com/study/armenia/bangladesh-offices",
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
      "description": "Study in Armenia counseling, recognition checks and student visa support for students in Bangladesh."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Armenia Counseling Across Bangladesh: Offices and Support</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Walk in at our Dhaka desk or apply online from any division. This page connects you to local guides and every Armenia study resource.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">How Eammu Holidays supports students nationwide</h2>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays provides in-person counseling in Dhaka and remote support across Bangladesh, so a student in Rangpur or Barishal gets the same guidance as one in Uttara. We also have an office in Yerevan, Armenia, which can support arrival-stage questions; please confirm what is available before relying on it. Start with our overview of &#123;&#123;from-bd|studying in Armenia from Bangladesh&#125;&#125;, then use the local guide closest to you, beginning with <Link href="/study/armenia/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">consultancy in Dhaka</Link>.</p>
<p className="mt-4 leading-7 text-slate-700">We give balanced advice, including on degree recognition and visa risks; see <Link href="/study/armenia/mbbs-in-armenia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">MBBS in Armenia</Link> and <Link href="/study/armenia/medical-degree-recognition-and-bmdc-guide-armenia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">medical degree recognition and BMDC checks</Link>. Documents move by email, WhatsApp and courier, so you rarely need to travel.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Divisional and district guides</h2>
<p className="mt-4 leading-7 text-slate-700">Each local page explains logistics specific to that area. Dhaka neighbourhood guides include <Link href="/study/armenia/consultancy-in-uttara-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Uttara</Link>, <Link href="/study/armenia/consultancy-in-dhanmondi-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Dhanmondi</Link> and <Link href="/study/armenia/consultancy-in-mirpur-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mirpur</Link>. For other regions see <Link href="/study/armenia/consultancy-in-chattogram" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Chattogram</Link>, <Link href="/study/armenia/consultancy-in-sylhet" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Sylhet</Link>, <Link href="/study/armenia/consultancy-in-rajshahi" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Rajshahi</Link>, <Link href="/study/armenia/consultancy-in-khulna" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Khulna</Link>, <Link href="/study/armenia/consultancy-in-barishal" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Barishal</Link>, <Link href="/study/armenia/consultancy-in-rangpur" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Rangpur</Link>, <Link href="/study/armenia/consultancy-in-mymensingh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mymensingh</Link>, <Link href="/study/armenia/consultancy-in-cumilla" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cumilla</Link> and <Link href="/study/armenia/consultancy-in-bogura" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bogura</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">What to prepare before contacting us</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>SSC, HSC, diploma or degree results (see <Link href="/study/armenia/admission-requirements-in-armenia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link>).</li><li>Passport scan or passport application status.</li><li>English test result, or tell us if you are exploring &#123;&#123;no-ielts|study in Armenia without IELTS&#125;&#125;.</li><li>Your approximate budget, informed by <Link href="/study/armenia/tuition-fees-in-armenia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees in Armenia</Link> and <Link href="/study/armenia/cost-of-living-in-armenia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">living costs</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Contact options</h2>
<p className="mt-4 leading-7 text-slate-700">Call or WhatsApp +8801631312525, email info@eammu.com, or visit our Dhaka counseling desk by appointment. Please confirm timing before visiting. Below you can find a directory of every Armenia study guide.</p>
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
