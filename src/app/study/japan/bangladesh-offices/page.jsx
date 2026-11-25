import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/bangladesh-offices';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Eammu Holidays Bangladesh Offices: Study in Japan Support",
  "description": "Eammu Holidays study in Japan counseling across Bangladesh: Dhaka walk-in desk and online support for every division, plus a directory of all guides.",
  "keywords": [
    "Eammu Holidays",
    "study in Japan consultancy Bangladesh",
    "Japan study consultant Dhaka",
    "study abroad consultancy Bangladesh"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/bangladesh-offices"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Eammu Holidays Bangladesh Offices: Study in Japan Support",
    "description": "Eammu Holidays study in Japan counseling across Bangladesh: Dhaka walk-in desk and online support for every division, plus a directory of all guides.",
    "url": "https://eammu.com/study/japan/bangladesh-offices",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Eammu Holidays Bangladesh Offices: Study in Japan Support",
    "description": "Eammu Holidays study in Japan counseling across Bangladesh: Dhaka walk-in desk and online support for every division, plus a directory of all guides."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "Bangladesh Offices & Support", "href": "/study/japan/bangladesh-offices"}];
const NAV = [
  {
    "label": "Japan Hub",
    "pages": [
      {
        "href": "/study/japan",
        "label": "Study in Japan Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/japan/study-in-japan-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/japan/study-in-japan-in-english-without-japanese",
        "label": "English & Without Japanese"
      },
      {
        "href": "/study/japan/tuition-fees-in-japan-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/japan/cost-of-living-in-japan-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/japan/affordable-universities-in-japan",
        "label": "Affordable Universities"
      },
      {
        "href": "/study/japan/top-universities-in-japan",
        "label": "Top Universities"
      },
      {
        "href": "/study/japan/national-vs-private-universities-in-japan",
        "label": "National vs Private Universities"
      },
      {
        "href": "/study/japan/admission-requirements-in-japan-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/japan/study-gap-and-japan-student-visa",
        "label": "Study Gap & Japan Visa"
      },
      {
        "href": "/study/japan/study-in-japan-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/japan/study-in-japan-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/japan/japan-intake-dates",
        "label": "Intake Dates"
      },
      {
        "href": "/study/japan/japan-vs-south-korea-vs-germany-for-bangladeshi-students",
        "label": "Japan vs South Korea vs Germany"
      }
    ]
  },
  {
    "label": "Scholarships & Funding",
    "pages": [
      {
        "href": "/study/japan/scholarships-in-japan-for-bangladeshi-students",
        "label": "Scholarships Overview"
      },
      {
        "href": "/study/japan/mext-scholarship-guide-for-bangladeshi-students",
        "label": "MEXT Scholarship Guide"
      },
      {
        "href": "/study/japan/mext-eligibility-and-deadlines",
        "label": "MEXT Eligibility & Deadlines"
      },
      {
        "href": "/study/japan/mext-embassy-vs-university-recommendation",
        "label": "Embassy vs University Recommendation"
      },
      {
        "href": "/study/japan/jasso-and-university-scholarships-in-japan",
        "label": "JASSO & University Scholarships"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/japan/how-to-apply-to-japanese-universities",
        "label": "How to Apply (Step by Step)"
      },
      {
        "href": "/study/japan/degree-recognition-and-eligibility-in-japan",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/japan/bachelors-in-japan-for-bangladeshi-students",
        "label": "Bachelor's Degrees"
      },
      {
        "href": "/study/japan/masters-and-phd-in-japan-for-bangladeshi-students",
        "label": "Master's & PhD"
      },
      {
        "href": "/study/japan/english-taught-programs-in-japan",
        "label": "English-Taught Programmes"
      },
      {
        "href": "/study/japan/japanese-language-schools-in-japan",
        "label": "Japanese Language Schools"
      },
      {
        "href": "/study/japan/japanese-language-requirements-for-bangladeshi-students",
        "label": "Japanese Language Requirements"
      },
      {
        "href": "/study/japan/cse-and-it-courses-in-japan",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/japan/engineering-courses-in-japan",
        "label": "Engineering Courses"
      },
      {
        "href": "/study/japan/mba-and-business-degrees-in-japan",
        "label": "MBA & Business"
      },
      {
        "href": "/study/japan/kosen-and-vocational-colleges-in-japan",
        "label": "KOSEN & Vocational Colleges"
      },
      {
        "href": "/study/japan/sop-and-study-plan-for-japan",
        "label": "SOP & Study Plan"
      },
      {
        "href": "/study/japan/eju-exam-for-japanese-universities",
        "label": "EJU Exam"
      }
    ]
  },
  {
    "label": "Cities & Student Life",
    "pages": [
      {
        "href": "/study/japan/student-accommodation-in-japan",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/japan/study-in-tokyo",
        "label": "Study in Tokyo"
      },
      {
        "href": "/study/japan/study-in-osaka-and-kyoto",
        "label": "Osaka & Kyoto"
      },
      {
        "href": "/study/japan/study-in-fukuoka-and-other-cities",
        "label": "Fukuoka & Other Cities"
      },
      {
        "href": "/study/japan/health-insurance-for-students-in-japan",
        "label": "Health Insurance"
      },
      {
        "href": "/study/japan/halal-food-and-bangladeshi-community-in-japan",
        "label": "Halal Food & Community"
      },
      {
        "href": "/study/japan/life-in-japan-for-international-students",
        "label": "Life in Japan"
      },
      {
        "href": "/study/japan/japan-bank-account-phone-and-residence-card",
        "label": "Bank, Phone & Residence Card"
      }
    ]
  },
  {
    "label": "Visa, COE & Work Rules",
    "pages": [
      {
        "href": "/study/japan/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/japan/certificate-of-eligibility-coe-guide",
        "label": "COE Guide"
      },
      {
        "href": "/study/japan/japan-student-visa-application-guide-dhaka",
        "label": "Dhaka Visa Application Guide"
      },
      {
        "href": "/study/japan/japan-student-documents-checklist",
        "label": "Documents Checklist"
      },
      {
        "href": "/study/japan/financial-proof-requirements-for-japan-student-visa",
        "label": "Financial Proof"
      },
      {
        "href": "/study/japan/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/japan/japan-student-visa-refusal-reasons",
        "label": "Visa Refusal Reasons"
      },
      {
        "href": "/study/japan/part-time-job-rules-for-students-in-japan",
        "label": "Part-Time Job Rules"
      },
      {
        "href": "/study/japan/post-study-work-and-job-hunting-visa-in-japan",
        "label": "Post-Study Work & Job Hunting"
      },
      {
        "href": "/study/japan/bring-family-to-japan-as-a-student",
        "label": "Family & Dependents"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/japan/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/japan/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/japan/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/japan/consultancy-in-dhaka",
    "title": "Study in Japan Consultancy for Dhaka Students",
    "description": "Study in Japan consultancy for Dhaka students in 2026: free counseling, MEXT guidance, COE and funds planning and visa preparation from Eammu."
  },
  {
    "href": "/study/japan/study-in-japan-from-bangladesh",
    "title": "Study in Japan from Bangladesh: 2026 Roadmap, Costs and Visa Steps",
    "description": "Step-by-step roadmap to study in Japan from Bangladesh in 2026: pathways, costs in BDT, scholarships, COE, Student visa in Dhaka and arrival in Japan."
  },
  {
    "href": "/study/japan/mext-scholarship-guide-for-bangladeshi-students",
    "title": "MEXT (Japanese Government) Scholarship for Bangladeshi Students: Full Guide",
    "description": "MEXT scholarship guide for Bangladeshi students: categories, benefits, Ministry of Education step, written exam, interview and common mistakes."
  },
  {
    "href": "/study/japan/japan-student-visa-application-guide-dhaka",
    "title": "Japan Student Visa Application Guide in Dhaka: VFS, Documents and Steps",
    "description": "Step-by-step Japan student visa application in Dhaka for Bangladeshis in 2026: VFS Global, documents, interview, decision and arrival steps."
  }
];
const FAQS = [
  {
    "q": "Where is Eammu Holidays located?",
    "a": "Our walk-in counseling desk is in Dhaka, Bangladesh, by appointment."
  },
  {
    "q": "Do you have offices in other cities?",
    "a": "No. We support students outside Dhaka online, by phone, WhatsApp and courier."
  },
  {
    "q": "How do I book a session?",
    "a": "Call or WhatsApp +8801631312525 or email info@eammu.com."
  },
  {
    "q": "Is the first consultation free?",
    "a": "The initial profile review is free."
  },
  {
    "q": "Can I submit documents online?",
    "a": "Yes, by email or WhatsApp, with originals handled as needed."
  },
  {
    "q": "Do you handle MEXT guidance?",
    "a": "Yes, we guide you through the process, but you control your own application."
  },
  {
    "q": "Can parents join the counseling?",
    "a": "Yes, parents are welcome online or in person."
  },
  {
    "q": "Do you also guide for Hungary and Serbia?",
    "a": "Yes, see our Study in Hungary and Study in Serbia hubs."
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
          "name": "Japan",
          "item": "https://eammu.com/study/japan"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Bangladesh Offices & Support",
          "item": "https://eammu.com/study/japan/bangladesh-offices"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Eammu Holidays Bangladesh Offices and Nationwide Support for Study in Japan",
      "description": "Eammu Holidays study in Japan counseling across Bangladesh: Dhaka walk-in desk and online support for every division, plus a directory of all guides.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/bangladesh-offices",
      "keywords": "Eammu Holidays, study in Japan consultancy Bangladesh, Japan study consultant Dhaka, study abroad consultancy Bangladesh",
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
          "name": "Where is Eammu Holidays located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our walk-in counseling desk is in Dhaka, Bangladesh, by appointment."
          }
        },
        {
          "@type": "Question",
          "name": "Do you have offices in other cities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We support students outside Dhaka online, by phone, WhatsApp and courier."
          }
        },
        {
          "@type": "Question",
          "name": "How do I book a session?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call or WhatsApp +8801631312525 or email info@eammu.com."
          }
        },
        {
          "@type": "Question",
          "name": "Is the first consultation free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The initial profile review is free."
          }
        },
        {
          "@type": "Question",
          "name": "Can I submit documents online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, by email or WhatsApp, with originals handled as needed."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle MEXT guidance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we guide you through the process, but you control your own application."
          }
        },
        {
          "@type": "Question",
          "name": "Can parents join the counseling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents are welcome online or in person."
          }
        },
        {
          "@type": "Question",
          "name": "Do you also guide for Hungary and Serbia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, see our Study in Hungary and Study in Serbia hubs."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Japan 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Eammu Holidays Bangladesh Offices and Nationwide Support for Study in Japan</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">In-person counseling in Dhaka and remote support for students in every division of Bangladesh.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} counseling team &middot; Updated <time dateTime="2026-11-22">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Japan guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 64 Japan guides</summary>
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
          <section aria-labelledby="takeaways-heading" className="rounded-xl border-l-4 border-yellow-400 bg-white p-5 shadow-sm">
            <h2 id="takeaways-heading" className="text-lg font-bold text-emerald-900">Key takeaways</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>In-person counseling is in Dhaka by appointment; support elsewhere is online, by phone, WhatsApp and courier.</li><li>A student in Rangpur or Barishal gets the same guidance as one in Uttara.</li><li>We do not claim local branches where we do not have them.</li><li>Prepare your results, passport status, language score and budget before contacting us.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#how-eammu-holidays-supports-students-nationwide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How Eammu Holidays supports students nationwide</a></li><li><a href="#divisional-and-district-guides" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Divisional and district guides</a></li><li><a href="#what-to-prepare-before-contacting-us" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What to prepare before contacting us</a></li><li><a href="#how-remote-counseling-works" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How remote counseling works</a></li><li><a href="#why-students-outside-dhaka-choose-remote-support" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Why students outside Dhaka choose remote support</a></li><li><a href="#honest-advice-no-guarantees" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Honest advice, no guarantees</a></li><li><a href="#contact-options" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Contact options</a></li><li><a href="#documents-to-keep-ready" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Documents to keep ready</a></li></ol>
          </nav>

          <article>
<section id="how-eammu-holidays-supports-students-nationwide" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How Eammu Holidays supports students nationwide</h2>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays provides in-person counseling in Dhaka and remote support across Bangladesh. Start with <Link href="/study/japan/study-in-japan-from-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">studying in Japan from Bangladesh</Link>, then use the local guide closest to you, beginning with <Link href="/study/japan/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">consultancy in Dhaka</Link>. Documents move by email, WhatsApp and courier, so you rarely need to travel.</p>
</section>
<section id="divisional-and-district-guides" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Divisional and district guides</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Dhaka neighbourhoods: <Link href="/study/japan/consultancy-in-uttara-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Uttara</Link>, <Link href="/study/japan/consultancy-in-dhanmondi-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Dhanmondi</Link> and <Link href="/study/japan/consultancy-in-mirpur-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mirpur</Link>.</li><li>Other regions: <Link href="/study/japan/consultancy-in-chattogram" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Chattogram</Link>, <Link href="/study/japan/consultancy-in-sylhet" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Sylhet</Link>, <Link href="/study/japan/consultancy-in-rajshahi" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Rajshahi</Link>, <Link href="/study/japan/consultancy-in-khulna" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Khulna</Link>, <Link href="/study/japan/consultancy-in-barishal" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Barishal</Link>, <Link href="/study/japan/consultancy-in-rangpur" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Rangpur</Link>, <Link href="/study/japan/consultancy-in-mymensingh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mymensingh</Link>, <Link href="/study/japan/consultancy-in-cumilla" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cumilla</Link> and <Link href="/study/japan/consultancy-in-bogura" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bogura</Link>.</li></ul>
</section>
<section id="what-to-prepare-before-contacting-us" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What to prepare before contacting us</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>SSC, HSC, diploma or degree results, see <Link href="/study/japan/admission-requirements-in-japan-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link>.</li><li>Passport scan or application status.</li><li>Language test result, or tell us if you are exploring <Link href="/study/japan/study-in-japan-in-english-without-japanese" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in English</Link>.</li><li>Your approximate budget, informed by <Link href="/study/japan/tuition-fees-in-japan-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees</Link> and <Link href="/study/japan/financial-proof-requirements-for-japan-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">financial proof</Link>.</li></ul>
</section>
<section id="how-remote-counseling-works" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How remote counseling works</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Send your documents by email or WhatsApp.</li><li>We review them and give a written profile summary.</li><li>We hold a video call to agree on a shortlist and timeline.</li><li>You prepare applications with our feedback.</li><li>We prepare you for the COE and visa steps.</li></ol>
</section>
<section id="why-students-outside-dhaka-choose-remote-support" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Why students outside Dhaka choose remote support</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Saves travel time and cost.</li><li>Same quality of guidance for every district.</li><li>Parents can join the calls.</li><li>Fewer trips for document checks.</li></ul>
</section>
<section id="honest-advice-no-guarantees" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Honest advice, no guarantees</h2>
<p className="mt-4 leading-7 text-slate-700">We give balanced advice on scholarships, funds and visa risk. See <Link href="/study/japan/mext-scholarship-guide-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the MEXT guide</Link> and <Link href="/study/japan/japan-student-visa-refusal-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">refusal reasons</Link>. Never pay anyone for a guaranteed scholarship, seat or visa.</p>
</section>
<section id="contact-options" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Contact options</h2>
<p className="mt-4 leading-7 text-slate-700">Call or WhatsApp +8801631312525, email info@eammu.com, or visit our Dhaka counseling desk by appointment. Please confirm timing before visiting. Below you can find a directory of every Japan study guide.</p>
</section>
<section id="documents-to-keep-ready" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Documents to keep ready</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Passport copy.</li><li>Academic transcripts.</li><li>Language test results.</li><li>Sponsor bank and income documents.</li></ul>
</section>
          </article>

          <section className="mt-12" aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="text-xl font-bold text-emerald-900">Official sources to verify before you pay or apply</h2>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-6 text-slate-700"><li><a href="https://www.studyinjapan.go.jp/en/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Study in Japan – official portal (JASSO)</a></li><li><a href="https://www.bd.emb-japan.go.jp/en/visa/visainfohowto.html" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Embassy of Japan in Bangladesh – visa information</a></li><li><a href="https://www.moj.go.jp/isa/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Immigration Services Agency of Japan</a></li><li><a href="https://visa.vfsglobal.com/bgd/en/jpn" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">VFS Global – Japan visa application centre, Dhaka</a></li><li><a href="https://www.bd.emb-japan.go.jp/itpr_en/scholarshipnotice.html" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Embassy of Japan in Bangladesh – scholarships (MEXT)</a></li></ul>
            <p className="mt-3 text-sm leading-6 text-slate-600">Eammu Holidays is a counseling service, not a government body, and cannot guarantee admission, a scholarship or a visa. Rules and fees change; the official sources above always override this page.</p>
          </section>

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

          <section aria-labelledby="related-heading" className="mt-14">
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Japan Study Guides</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {RELATED.map((r) => (
                <Link key={r.href} href={r.href} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-yellow-400 hover:shadow-md">
                  <h3 className="text-lg font-bold text-emerald-900">{r.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{r.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-14" aria-labelledby="directory-heading">
            <h2 id="directory-heading" className="text-2xl font-bold text-emerald-900">Directory of all Japan study guides</h2>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              {NAV.map((g) => (
                <div key={g.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-emerald-900">{g.label}</h3>
                  <ul className="mt-3 space-y-1 text-sm">
                    {g.pages.map((pg) => (
                      <li key={pg.href}><Link href={pg.href} className="text-emerald-800 hover:underline">{pg.label}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-2xl bg-emerald-900 p-6 text-white shadow-lg sm:p-8" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Japan</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and scholarship shortlist, visa guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
