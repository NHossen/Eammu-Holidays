import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/australia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Australia from Bangladesh 2026 | Eammu Holidays",
  "description": "Complete 2026 guide to studying in Australia for Bangladeshi students: tuition in BDT, Evidence Level 3, visa fee, funds, Genuine Student, work rules, 485 visa and counseling across Bangladesh.",
  "alternates": {
    "canonical": "https://eammu.com/study/australia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Australia from Bangladesh 2026 | Eammu Holidays",
    "description": "Complete 2026 guide to studying in Australia for Bangladeshi students: tuition in BDT, Evidence Level 3, visa fee, funds, Genuine Student, work rules, 485 visa and counseling across Bangladesh.",
    "url": "https://eammu.com/study/australia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Australia from Bangladesh 2026 | Eammu Holidays",
    "description": "Complete 2026 guide to studying in Australia for Bangladeshi students: tuition in BDT, Evidence Level 3, visa fee, funds, Genuine Student, work rules, 485 visa and counseling across Bangladesh."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Australia", "href": "/study/australia"}];
const NAV = [
  {
    "label": "Australia Hub",
    "pages": [
      {
        "href": "/study/australia",
        "label": "Study in Australia Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/australia/study-in-australia-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/australia/study-in-australia-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/australia/english-test-requirements-for-australia",
        "label": "English Test Requirements"
      },
      {
        "href": "/study/australia/tuition-fees-in-australia-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/australia/cost-of-living-in-australia-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/australia/cheapest-universities-in-australia",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/australia/top-universities-in-australia",
        "label": "Top Universities"
      },
      {
        "href": "/study/australia/universities-vs-vet-and-private-colleges-in-australia",
        "label": "Universities vs VET & Private"
      },
      {
        "href": "/study/australia/scholarships-in-australia-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/australia/admission-requirements-in-australia-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/australia/study-gap-accepted-in-australia",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/australia/study-in-australia-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/australia/study-in-australia-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/australia/australia-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Courses, Housing & Life",
    "pages": [
      {
        "href": "/study/australia/application-guide-for-australian-universities",
        "label": "Application Guide"
      },
      {
        "href": "/study/australia/degree-recognition-and-eligibility-in-australia",
        "label": "Degree Recognition & Eligibility"
      },
      {
        "href": "/study/australia/it-and-cse-courses-in-australia",
        "label": "IT & CSE Courses"
      },
      {
        "href": "/study/australia/mba-and-masters-in-australia-for-bangladeshi-students",
        "label": "MBA & Master's"
      },
      {
        "href": "/study/australia/nursing-and-health-courses-in-australia",
        "label": "Nursing & Health Courses"
      },
      {
        "href": "/study/australia/student-accommodation-in-australia",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/australia/oshc-health-cover-for-international-students",
        "label": "OSHC Health Cover"
      },
      {
        "href": "/study/australia/regional-study-in-australia",
        "label": "Regional Study"
      },
      {
        "href": "/study/australia/student-life-halal-food-and-safety-in-australia",
        "label": "Student Life, Halal & Safety"
      }
    ]
  },
  {
    "label": "Visa, Funds & Work Rules",
    "pages": [
      {
        "href": "/study/australia/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/australia/evidence-level-3-explained-for-bangladeshi-students",
        "label": "Evidence Level 3 Explained"
      },
      {
        "href": "/study/australia/genuine-student-requirement-guide",
        "label": "Genuine Student Guide"
      },
      {
        "href": "/study/australia/proof-of-funds-requirements-for-australia-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/australia/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/australia/visa-refusal-reasons-and-how-to-avoid-them",
        "label": "Visa Refusal Reasons"
      },
      {
        "href": "/study/australia/part-time-job-and-work-rules-in-australia",
        "label": "Work Rules"
      },
      {
        "href": "/study/australia/temporary-graduate-visa-485-and-pr-pathways",
        "label": "485 Visa & PR Pathways"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/australia/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/australia/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/australia/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/australia/study-in-australia-from-bangladesh",
    "title": "Study in Australia from Bangladesh: Complete Step-by-Step Guide",
    "description": "A realistic route from profile check to arrival, with costs in BDT, the Genuine Student test, funds, work rules and the tougher 2026 visa climate."
  },
  {
    "href": "/study/australia/evidence-level-3-explained-for-bangladeshi-students",
    "title": "Evidence Level 3 Explained: What It Means for Bangladeshi Students",
    "description": "Why Bangladesh was moved to the highest-scrutiny tier, how officers assess applications now and how to prepare."
  },
  {
    "href": "/study/australia/tuition-fees-in-australia-for-bangladeshi-students",
    "title": "Tuition Fees in Australia for Bangladeshi Students",
    "description": "A clear AUD-to-BDT look at what each level of study costs and which fees families forget."
  },
  {
    "href": "/study/australia/student-visa-requirements-bangladesh",
    "title": "Australia Student Visa (Subclass 500) Requirements for Bangladeshi Students",
    "description": "Documents, funds, English, health, police and biometrics, plus the 2026 changes that affect Bangladeshi applicants."
  }
];
const FAQS = [
  {
    "q": "Is it still worth studying in Australia from Bangladesh?",
    "a": "For well-prepared applicants with strong finances and a clear plan, yes, but the process is stricter and costlier than before."
  },
  {
    "q": "Which guide should I read first?",
    "a": "Start with Study in Australia from Bangladesh, then Evidence Level 3 and the Genuine Student guide."
  },
  {
    "q": "Do I need an agent?",
    "a": "Not required. Use a registered, honest adviser if you want help."
  },
  {
    "q": "Where can I get a free consultation?",
    "a": "Contact Eammu Holidays by WhatsApp, phone or email shown below."
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
          "name": "Australia",
          "item": "https://eammu.com/study/australia"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Australia 2026: Complete Guide for Bangladeshi Students",
      "description": "Complete 2026 guide to studying in Australia for Bangladeshi students: tuition in BDT, Evidence Level 3, visa fee, funds, Genuine Student, work rules, 485 visa and counseling across Bangladesh.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/australia",
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
          "name": "Is it still worth studying in Australia from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For well-prepared applicants with strong finances and a clear plan, yes, but the process is stricter and costlier than before."
          }
        },
        {
          "@type": "Question",
          "name": "Which guide should I read first?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start with Study in Australia from Bangladesh, then Evidence Level 3 and the Genuine Student guide."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an agent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not required. Use a registered, honest adviser if you want help."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I get a free consultation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact Eammu Holidays by WhatsApp, phone or email shown below."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Australia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Australia 2026: Complete Guide for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Costs in BDT, Evidence Level 3, the Genuine Student test, funds, scholarships, work rules and post-study options. Detailed, honest guides for Bangladeshi families.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-21">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Australia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 46 Australia guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Read this first: the 2026 reality</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li><strong>Evidence Level 3:</strong> Bangladesh has been in Australia&apos;s highest-scrutiny student visa tier since 8 January 2026.</li><li><strong>Cost:</strong> tuition of A$30,000 to 50,000 a year plus A$29,710 living-cost evidence means a first-year evidence need of roughly Tk 55 to 70 lakh for many courses.</li><li><strong>Visa charge:</strong> A$2,500 for the main applicant from 1 July 2026.</li><li><strong>Work:</strong> 48 hours per fortnight during study; work income does not count as proof of funds.</li><li><strong>After study:</strong> the 485 visa gives 2 to 3 years for eligible graduates but does not guarantee PR.</li><li><strong>Apply from home:</strong> from 2 October 2026 most people cannot apply for a Student visa from inside Australia.</li></ul>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">These points come from 2026 sources and change often. Verify on Home Affairs (homeaffairs.gov.au) and Study Australia (studyaustralia.gov.au), and with an Eammu Holidays counselor.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Why Bangladeshi students still choose Australia</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>High-quality universities across engineering, IT, health and business.</li><li>Work rights during study and a post-study visa for eligible graduates.</li><li>A large Bangladeshi community and halal food in major cities.</li><li>Regional options with lower living costs; see <Link href="/study/australia/regional-study-in-australia" className={linkClass}>regional study</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Where to begin</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">If you are...</th><th scope="col" className="px-3 py-2 text-left font-bold">Start here</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">After HSC, wanting a bachelor</td><td className="px-3 py-2 align-top"><Link href="/study/australia/admission-requirements-in-australia-for-bangladeshi-students" className={linkClass}>Admission requirements</Link> and <Link href="/study/australia/english-test-requirements-for-australia" className={linkClass}>English tests</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">After SSC</td><td className="px-3 py-2 align-top"><Link href="/study/australia/study-in-australia-after-ssc" className={linkClass}>Study in Australia after SSC</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">A diploma holder</td><td className="px-3 py-2 align-top"><Link href="/study/australia/study-in-australia-after-diploma" className={linkClass}>Study in Australia after diploma</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">A graduate wanting a master or MBA</td><td className="px-3 py-2 align-top"><Link href="/study/australia/mba-and-masters-in-australia-for-bangladeshi-students" className={linkClass}>MBA and master&apos;s</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Interested in nursing or health</td><td className="px-3 py-2 align-top"><Link href="/study/australia/nursing-and-health-courses-in-australia" className={linkClass}>Nursing and health courses</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Looking for funding</td><td className="px-3 py-2 align-top"><Link href="/study/australia/scholarships-in-australia-for-bangladeshi-students" className={linkClass}>Scholarships in Australia</Link></td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Worried about the visa</td><td className="px-3 py-2 align-top"><Link href="/study/australia/evidence-level-3-explained-for-bangladeshi-students" className={linkClass}>Evidence Level 3</Link> and <Link href="/study/australia/genuine-student-requirement-guide" className={linkClass}>Genuine Student guide</Link></td></tr></tbody></table></div>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Indicative cost snapshot (AUD and BDT)</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Item</th><th scope="col" className="px-3 py-2 text-left font-bold">AUD</th><th scope="col" className="px-3 py-2 text-left font-bold">BDT (about Tk 80 per AUD)</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor tuition per year</td><td className="px-3 py-2 align-top">A$30,000 – 50,000</td><td className="px-3 py-2 align-top">Tk 24 – 40 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Master tuition per year</td><td className="px-3 py-2 align-top">A$32,000 – 50,000</td><td className="px-3 py-2 align-top">Tk 25.6 – 40 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Living-cost evidence for the visa</td><td className="px-3 py-2 align-top">A$29,710</td><td className="px-3 py-2 align-top">Tk 23.8 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Student visa charge</td><td className="px-3 py-2 align-top">A$2,500</td><td className="px-3 py-2 align-top">Tk 2.0 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">OSHC per year</td><td className="px-3 py-2 align-top">A$500 – 800</td><td className="px-3 py-2 align-top">Tk 40,000 – 64,000</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Return flight from Dhaka</td><td className="px-3 py-2 align-top">A$900 – 1,800</td><td className="px-3 py-2 align-top">Tk 72,000 – 1.44 lakh</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Indicative 2026–2027 estimates. Confirm fees, visa charges and rules before paying.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Your step-by-step journey</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Profile, budget and course fit check.</li><li>Shortlist providers; see <Link href="/study/australia/top-universities-in-australia" className={linkClass}>top universities</Link> and <Link href="/study/australia/cheapest-universities-in-australia" className={linkClass}>cheapest universities</Link>.</li><li>Take IELTS, PTE or TOEFL.</li><li>Apply, receive an offer, pay the deposit and get the CoE; see <Link href="/study/australia/application-guide-for-australian-universities" className={linkClass}>application guide</Link>.</li><li>Prepare funds and Genuine Student answers; see <Link href="/study/australia/proof-of-funds-requirements-for-australia-student-visa" className={linkClass}>proof of funds</Link>.</li><li>Lodge the visa, complete health and biometrics, then travel after the grant.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">How Eammu Holidays supports you</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Free profile review and a realistic BDT budget.</li><li>Course and provider shortlist matched to your background.</li><li>Document checks, funds review and Genuine Student coaching.</li><li>Pre-departure briefing on housing, OSHC, banking and work rules.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Complete Directory: Every Australia Study Guide</h2>
<div className="mt-5 grid gap-4 sm:grid-cols-2">{NAV.map((g) => (<div key={g.label} className="rounded-xl border border-slate-200 bg-white p-4"><h3 className="font-bold text-emerald-900">{g.label}</h3><ul className="mt-2 space-y-1 text-sm">{g.pages.map((p) => (<li key={p.href}><Link href={p.href} className={linkClass}>{p.label}</Link></li>))}</ul></div>))}</div>
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

          <section aria-labelledby="related-heading" className="mt-14">
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Australia Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Australia</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and scholarship shortlist, Genuine Student and visa guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
