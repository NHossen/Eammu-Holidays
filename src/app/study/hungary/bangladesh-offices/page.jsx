import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/hungary/bangladesh-offices';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Eammu Holidays Bangladesh Offices: Study in Hungary Support",
  "description": "Eammu Holidays study in Hungary counseling across Bangladesh: Dhaka walk-in desk and online support for every division, plus a directory of all guides.",
  "keywords": [
    "Eammu Holidays",
    "study in Hungary consultancy Bangladesh",
    "Hungary study consultant Dhaka",
    "study abroad consultancy Bangladesh"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/hungary/bangladesh-offices"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Eammu Holidays Bangladesh Offices: Study in Hungary Support",
    "description": "Eammu Holidays study in Hungary counseling across Bangladesh: Dhaka walk-in desk and online support for every division, plus a directory of all guides.",
    "url": "https://eammu.com/study/hungary/bangladesh-offices",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Eammu Holidays Bangladesh Offices: Study in Hungary Support",
    "description": "Eammu Holidays study in Hungary counseling across Bangladesh: Dhaka walk-in desk and online support for every division, plus a directory of all guides."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Hungary", "href": "/study/hungary"}, {"name": "Bangladesh Offices & Support", "href": "/study/hungary/bangladesh-offices"}];
const NAV = [
  {
    "label": "Hungary Hub",
    "pages": [
      {
        "href": "/study/hungary",
        "label": "Study in Hungary Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/hungary/study-in-hungary-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/hungary/study-in-hungary-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/hungary/cost-of-living-in-hungary-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/hungary/cheapest-universities-in-hungary",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/hungary/top-universities-in-hungary",
        "label": "Top Universities"
      },
      {
        "href": "/study/hungary/public-vs-private-universities-in-hungary",
        "label": "Public vs Private Universities"
      },
      {
        "href": "/study/hungary/admission-requirements-in-hungary-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/hungary/study-gap-accepted-universities-in-hungary",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/hungary/study-in-hungary-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/hungary/study-in-hungary-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/hungary/hungary-intake-dates",
        "label": "Intake Dates"
      },
      {
        "href": "/study/hungary/hungary-vs-finland-vs-germany-for-bangladeshi-students",
        "label": "Hungary vs Finland vs Germany"
      }
    ]
  },
  {
    "label": "Scholarships & Funding",
    "pages": [
      {
        "href": "/study/hungary/scholarships-in-hungary-for-bangladeshi-students",
        "label": "Scholarships Overview"
      },
      {
        "href": "/study/hungary/stipendium-hungaricum-scholarship-guide",
        "label": "Stipendium Hungaricum Guide"
      },
      {
        "href": "/study/hungary/stipendium-hungaricum-eligibility-and-deadlines",
        "label": "SH Eligibility & Deadlines"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/hungary/how-to-apply-to-hungarian-universities",
        "label": "How to Apply (Step by Step)"
      },
      {
        "href": "/study/hungary/degree-recognition-and-eligibility-in-hungary",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/hungary/bachelors-in-hungary-for-bangladeshi-students",
        "label": "Bachelor's Degrees"
      },
      {
        "href": "/study/hungary/masters-and-phd-in-hungary-for-bangladeshi-students",
        "label": "Master's & PhD"
      },
      {
        "href": "/study/hungary/cse-and-it-courses-in-hungary",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/hungary/engineering-courses-in-hungary",
        "label": "Engineering Courses"
      },
      {
        "href": "/study/hungary/mba-in-hungary-for-bangladeshi-students",
        "label": "MBA & Business"
      },
      {
        "href": "/study/hungary/mbbs-and-medical-degrees-in-hungary",
        "label": "Medicine, Dentistry & Pharmacy"
      },
      {
        "href": "/study/hungary/foundation-year-and-preparatory-courses-in-hungary",
        "label": "Foundation Year"
      },
      {
        "href": "/study/hungary/sop-and-motivation-letter-for-hungary",
        "label": "SOP & Motivation Letter"
      }
    ]
  },
  {
    "label": "Cities & Student Life",
    "pages": [
      {
        "href": "/study/hungary/student-accommodation-in-hungary",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/hungary/study-in-budapest",
        "label": "Study in Budapest"
      },
      {
        "href": "/study/hungary/study-in-debrecen",
        "label": "Study in Debrecen"
      },
      {
        "href": "/study/hungary/study-in-szeged-pecs-and-other-cities",
        "label": "Szeged, Pécs & Other Cities"
      },
      {
        "href": "/study/hungary/health-insurance-for-students-in-hungary",
        "label": "Health Insurance for Students"
      },
      {
        "href": "/study/hungary/halal-food-and-bangladeshi-community-in-hungary",
        "label": "Halal Food & Bangladeshi Community"
      }
    ]
  },
  {
    "label": "Visa, Permit & Work Rules",
    "pages": [
      {
        "href": "/study/hungary/student-visa-requirements-bangladesh",
        "label": "Student Visa & Permit Requirements"
      },
      {
        "href": "/study/hungary/hungary-student-visa-application-guide-bangladesh",
        "label": "Visa Application Guide (D-Visa)"
      },
      {
        "href": "/study/hungary/hungary-student-documents-checklist",
        "label": "Documents Checklist"
      },
      {
        "href": "/study/hungary/bank-solvency-requirements-for-hungary-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/hungary/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/hungary/hungary-student-visa-refusal-reasons",
        "label": "Visa Refusal Reasons"
      },
      {
        "href": "/study/hungary/part-time-job-and-post-study-work-rules-in-hungary",
        "label": "Work & Post-Study Rules"
      },
      {
        "href": "/study/hungary/bring-family-to-hungary-as-a-student",
        "label": "Family & Dependents"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/hungary/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/hungary/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/hungary/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/hungary/consultancy-in-dhaka",
    "title": "Study in Hungary Consultancy for Dhaka Students",
    "description": "Study in Hungary consultancy for Dhaka students in 2026: free counseling, Stipendium Hungaricum guidance, funds planning and visa preparation from Eammu."
  },
  {
    "href": "/study/hungary/study-in-hungary-from-bangladesh",
    "title": "Study in Hungary from Bangladesh: 2026 Roadmap, Costs and Visa Steps",
    "description": "Step-by-step roadmap to study in Hungary from Bangladesh in 2026: eligibility, costs in BDT, scholarships, applications, D-visa and arrival."
  },
  {
    "href": "/study/hungary/stipendium-hungaricum-scholarship-guide",
    "title": "Stipendium Hungaricum Scholarship for Bangladeshi Students: Full Guide",
    "description": "Stipendium Hungaricum for Bangladeshi students: benefits, how to apply, the Ministry of Education sending partner step, documents and common mistakes."
  },
  {
    "href": "/study/hungary/hungary-student-visa-application-guide-bangladesh",
    "title": "Hungary D-Visa and Residence Permit Application Guide for Bangladeshis",
    "description": "Step-by-step Hungary D-visa and study residence permit application for Bangladeshis in 2026: appointment, documents, biometrics, decision and arrival."
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
    "q": "Do you handle Stipendium Hungaricum guidance?",
    "a": "Yes, we guide you through the process, but you control your own application account."
  },
  {
    "q": "Can parents join the counseling?",
    "a": "Yes, parents are welcome to join online or in person."
  },
  {
    "q": "Do you charge for the initial call?",
    "a": "The initial profile review is free."
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
          "name": "Hungary",
          "item": "https://eammu.com/study/hungary"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Bangladesh Offices & Support",
          "item": "https://eammu.com/study/hungary/bangladesh-offices"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Eammu Holidays Bangladesh Offices and Nationwide Support for Study in Hungary",
      "description": "Eammu Holidays study in Hungary counseling across Bangladesh: Dhaka walk-in desk and online support for every division, plus a directory of all guides.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/hungary/bangladesh-offices",
      "keywords": "Eammu Holidays, study in Hungary consultancy Bangladesh, Hungary study consultant Dhaka, study abroad consultancy Bangladesh",
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
          "name": "Do you handle Stipendium Hungaricum guidance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we guide you through the process, but you control your own application account."
          }
        },
        {
          "@type": "Question",
          "name": "Can parents join the counseling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, parents are welcome to join online or in person."
          }
        },
        {
          "@type": "Question",
          "name": "Do you charge for the initial call?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The initial profile review is free."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Hungary 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Eammu Holidays Bangladesh Offices and Nationwide Support for Study in Hungary</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">In-person counseling in Dhaka and remote support for students in every division of Bangladesh.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} counseling team &middot; Updated <time dateTime="2026-11-21">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Hungary guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 55 Hungary guides</summary>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>In-person counseling is in Dhaka by appointment; support elsewhere is online, by phone, WhatsApp and courier.</li><li>A student in Rangpur or Barishal gets the same guidance as one in Uttara.</li><li>We do not claim local branches where we do not have them.</li><li>Prepare your results, passport status, English score and budget before contacting us.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#how-eammu-holidays-supports-students-nationwide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How Eammu Holidays supports students nationwide</a></li><li><a href="#divisional-and-district-guides" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Divisional and district guides</a></li><li><a href="#what-to-prepare-before-contacting-us" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">What to prepare before contacting us</a></li><li><a href="#honest-advice-no-guarantees" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Honest advice, no guarantees</a></li><li><a href="#contact-options" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Contact options</a></li><li><a href="#how-remote-counseling-works" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">How remote counseling works</a></li><li><a href="#why-students-outside-dhaka-choose-remote-support" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Why students outside Dhaka choose remote support</a></li></ol>
          </nav>

          <article>
<section id="how-eammu-holidays-supports-students-nationwide" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How Eammu Holidays supports students nationwide</h2>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays provides in-person counseling in Dhaka and remote support across Bangladesh. Start with <Link href="/study/hungary/study-in-hungary-from-bangladesh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">studying in Hungary from Bangladesh</Link>, then use the local guide closest to you, beginning with <Link href="/study/hungary/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">consultancy in Dhaka</Link>. Documents move by email, WhatsApp and courier, so you rarely need to travel.</p>
</section>
<section id="divisional-and-district-guides" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Divisional and district guides</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Dhaka neighbourhoods: <Link href="/study/hungary/consultancy-in-uttara-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Uttara</Link>, <Link href="/study/hungary/consultancy-in-dhanmondi-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Dhanmondi</Link> and <Link href="/study/hungary/consultancy-in-mirpur-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mirpur</Link>.</li><li>Other regions: <Link href="/study/hungary/consultancy-in-chattogram" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Chattogram</Link>, <Link href="/study/hungary/consultancy-in-sylhet" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Sylhet</Link>, <Link href="/study/hungary/consultancy-in-rajshahi" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Rajshahi</Link>, <Link href="/study/hungary/consultancy-in-khulna" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Khulna</Link>, <Link href="/study/hungary/consultancy-in-barishal" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Barishal</Link>, <Link href="/study/hungary/consultancy-in-rangpur" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Rangpur</Link>, <Link href="/study/hungary/consultancy-in-mymensingh" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Mymensingh</Link>, <Link href="/study/hungary/consultancy-in-cumilla" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Cumilla</Link> and <Link href="/study/hungary/consultancy-in-bogura" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Bogura</Link>.</li></ul>
</section>
<section id="what-to-prepare-before-contacting-us" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">What to prepare before contacting us</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>SSC, HSC, diploma or degree results, see <Link href="/study/hungary/admission-requirements-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link>.</li><li>Passport scan or passport application status.</li><li>English test result, or tell us if you are exploring <Link href="/study/hungary/study-in-hungary-without-ielts" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">study in Hungary without IELTS</Link>.</li><li>Your approximate budget, informed by <Link href="/study/hungary/tuition-fees-in-hungary-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees</Link> and <Link href="/study/hungary/bank-solvency-requirements-for-hungary-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">proof of funds</Link>.</li></ul>
</section>
<section id="honest-advice-no-guarantees" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Honest advice, no guarantees</h2>
<p className="mt-4 leading-7 text-slate-700">We give balanced advice on scholarships, funds and visa risk. See <Link href="/study/hungary/stipendium-hungaricum-scholarship-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the Stipendium Hungaricum guide</Link> and <Link href="/study/hungary/hungary-student-visa-refusal-reasons" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">refusal reasons</Link>. Never pay anyone for a guaranteed scholarship, seat or visa.</p>
</section>
<section id="contact-options" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Contact options</h2>
<p className="mt-4 leading-7 text-slate-700">Call or WhatsApp +8801631312525, email info@eammu.com, or visit our Dhaka counseling desk by appointment. Please confirm timing before visiting. Below you can find a directory of every Hungary study guide.</p>
</section>
<section id="how-remote-counseling-works" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">How remote counseling works</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Send your documents by email or WhatsApp.</li><li>We review them and give a written profile summary.</li><li>We hold a video call to agree on a shortlist and timeline.</li><li>You prepare applications with our feedback.</li><li>We prepare you for the visa appointment.</li></ol>
</section>
<section id="why-students-outside-dhaka-choose-remote-support" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Why students outside Dhaka choose remote support</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Saves travel time and cost.</li><li>Same quality of guidance for every district.</li><li>Parents can join the calls.</li><li>One Dhaka trip is usually enough for the visa appointment.</li></ul>
</section>
          </article>

          <section className="mt-12" aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="text-xl font-bold text-emerald-900">Official sources to verify before you pay or apply</h2>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-6 text-slate-700"><li><a href="https://stipendiumhungaricum.hu/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Stipendium Hungaricum (Tempus Public Foundation)</a></li><li><a href="https://studyinhungary.hu/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Study in Hungary – official study portal</a></li><li><a href="https://oif.gov.hu/students" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Hungarian immigration authority (OIF) – students</a></li><li><a href="https://hungary.blsinternational.com/bangladesh/" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">BLS International – Hungary visa centre, Dhaka</a></li></ul>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Hungary Study Guides</h2>
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
            <h2 id="directory-heading" className="text-2xl font-bold text-emerald-900">Directory of all Hungary study guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Hungary</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and Stipendium Hungaricum shortlist, visa guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
