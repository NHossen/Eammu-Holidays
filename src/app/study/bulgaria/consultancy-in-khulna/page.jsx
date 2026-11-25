import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/bulgaria/consultancy-in-khulna';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Study in Bulgaria Consultancy in Khulna | Eammu Holidays",
  "description": "Study in Bulgaria consultancy for Khulna students: free profile review, university shortlist, Type D visa preparation and BDT budgets from Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/bulgaria/consultancy-in-khulna"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Study in Bulgaria Consultancy in Khulna | Eammu Holidays",
    "description": "Study in Bulgaria consultancy for Khulna students: free profile review, university shortlist, Type D visa preparation and BDT budgets from Eammu Holidays.",
    "url": "https://eammu.com/study/bulgaria/consultancy-in-khulna",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Study in Bulgaria Consultancy in Khulna | Eammu Holidays",
    "description": "Study in Bulgaria consultancy for Khulna students: free profile review, university shortlist, Type D visa preparation and BDT budgets from Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Bulgaria", "href": "/study/bulgaria"}, {"name": "Khulna Consultancy", "href": "/study/bulgaria/consultancy-in-khulna"}];
const NAV = [
  {
    "label": "Bulgaria Hub",
    "pages": [
      {
        "href": "/study/bulgaria",
        "label": "Study in Bulgaria Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/bulgaria/study-in-bulgaria-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/bulgaria/tuition-fees-in-bulgaria-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/bulgaria/cost-of-living-in-bulgaria-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/bulgaria/cheapest-universities-in-bulgaria",
        "label": "Affordable Universities"
      },
      {
        "href": "/study/bulgaria/top-universities-in-bulgaria",
        "label": "Top Universities"
      },
      {
        "href": "/study/bulgaria/study-in-bulgaria-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/bulgaria/scholarships-in-bulgaria-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/bulgaria/admission-requirements-in-bulgaria-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/bulgaria/study-gap-accepted-universities-in-bulgaria",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/bulgaria/study-in-bulgaria-after-hsc",
        "label": "After HSC"
      },
      {
        "href": "/study/bulgaria/study-in-bulgaria-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/bulgaria/bulgaria-intake-dates",
        "label": "Intake Dates"
      },
      {
        "href": "/study/bulgaria/preparatory-year-and-bulgarian-language-in-bulgaria",
        "label": "Preparatory Year and Language"
      },
      {
        "href": "/study/bulgaria/bulgaria-vs-other-european-countries-for-bangladeshi-students",
        "label": "Bulgaria vs Other Countries"
      }
    ]
  },
  {
    "label": "Applications, Exams & Documents",
    "pages": [
      {
        "href": "/study/bulgaria/bulgaria-university-application-guide",
        "label": "Application Guide"
      },
      {
        "href": "/study/bulgaria/entrance-exams-biology-chemistry-for-medicine-in-bulgaria",
        "label": "Medicine Entrance Exams"
      },
      {
        "href": "/study/bulgaria/english-tests-for-bulgaria",
        "label": "English Tests"
      },
      {
        "href": "/study/bulgaria/document-legalisation-and-translation-for-bulgaria",
        "label": "Legalisation and Translation"
      },
      {
        "href": "/study/bulgaria/mes-admission-certificate-for-bulgaria-d-visa",
        "label": "MES Certificate"
      },
      {
        "href": "/study/bulgaria/degree-recognition-in-bulgaria",
        "label": "Degree Recognition"
      }
    ]
  },
  {
    "label": "Programmes & Student Life",
    "pages": [
      {
        "href": "/study/bulgaria/medicine-in-bulgaria-for-bangladeshi-students",
        "label": "Medicine in Bulgaria"
      },
      {
        "href": "/study/bulgaria/dentistry-and-pharmacy-in-bulgaria",
        "label": "Dentistry and Pharmacy"
      },
      {
        "href": "/study/bulgaria/bmdc-recognition-and-licensing-after-medicine-in-bulgaria",
        "label": "BMDC and Licensing"
      },
      {
        "href": "/study/bulgaria/cse-and-it-courses-in-bulgaria",
        "label": "CSE and IT Courses"
      },
      {
        "href": "/study/bulgaria/engineering-courses-in-bulgaria",
        "label": "Engineering Courses"
      },
      {
        "href": "/study/bulgaria/business-and-economics-in-bulgaria",
        "label": "Business and Economics"
      },
      {
        "href": "/study/bulgaria/masters-in-bulgaria-for-bangladeshi-students",
        "label": "Master's in Bulgaria"
      },
      {
        "href": "/study/bulgaria/phd-in-bulgaria-for-bangladeshi-students",
        "label": "PhD in Bulgaria"
      },
      {
        "href": "/study/bulgaria/veterinary-and-agriculture-in-bulgaria",
        "label": "Veterinary and Agriculture"
      },
      {
        "href": "/study/bulgaria/best-cities-to-study-in-bulgaria",
        "label": "Best Cities to Study"
      },
      {
        "href": "/study/bulgaria/student-accommodation-in-bulgaria",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/bulgaria/halal-food-and-student-life-in-bulgaria-for-bangladeshis",
        "label": "Halal Food and Student Life"
      },
      {
        "href": "/study/bulgaria/health-insurance-for-students-in-bulgaria",
        "label": "Health Insurance"
      },
      {
        "href": "/study/bulgaria/banking-and-sending-money-to-bulgaria-from-bangladesh",
        "label": "Banking and Sending Money"
      },
      {
        "href": "/study/bulgaria/avoid-scams-and-agent-risks-in-bulgaria-admissions",
        "label": "Avoid Scams and Agent Risks"
      }
    ]
  },
  {
    "label": "D Visa, Residence & Work",
    "pages": [
      {
        "href": "/study/bulgaria/bulgaria-d-visa-requirements-for-bangladeshi-students",
        "label": "D Visa Requirements"
      },
      {
        "href": "/study/bulgaria/d-visa-document-checklist-for-bulgaria",
        "label": "D Visa Document Checklist"
      },
      {
        "href": "/study/bulgaria/proof-of-funds-for-bulgaria-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/bulgaria/bulgaria-visa-processing-time-and-cost",
        "label": "Visa Time and Cost"
      },
      {
        "href": "/study/bulgaria/bulgaria-visa-interview-questions-and-tips",
        "label": "Interview Questions and Tips"
      },
      {
        "href": "/study/bulgaria/bulgaria-visa-refusal-reasons-and-reapplication",
        "label": "Visa Refusal and Reapplication"
      },
      {
        "href": "/study/bulgaria/residence-permit-for-students-in-bulgaria",
        "label": "Residence Permit"
      },
      {
        "href": "/study/bulgaria/part-time-work-rules-for-students-in-bulgaria",
        "label": "Part-Time Work Rules"
      },
      {
        "href": "/study/bulgaria/post-study-work-and-eu-blue-card-from-bulgaria",
        "label": "Post-Study Work and Blue Card"
      },
      {
        "href": "/study/bulgaria/bulgaria-student-visa-rule-changes-2026",
        "label": "Rule Changes 2026"
      },
      {
        "href": "/study/bulgaria/pre-departure-checklist-for-bulgaria-students",
        "label": "Pre-Departure Checklist"
      },
      {
        "href": "/study/bulgaria/maintaining-student-status-in-bulgaria",
        "label": "Maintaining Student Status"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/bulgaria/bangladesh-offices",
        "label": "Bangladesh Offices and Support"
      },
      {
        "href": "/study/bulgaria/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/bulgaria/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/bulgaria/bangladesh-offices",
    "title": "Eammu Holidays Bangladesh Offices and Bulgaria Study Support",
    "description": "Dhaka desk, online counselling and city guides."
  },
  {
    "href": "/study/bulgaria/study-in-bulgaria-from-bangladesh",
    "title": "Study in Bulgaria from Bangladesh: Complete 2026 Guide",
    "description": "The full roadmap from profile check to Type D visa, with costs in taka."
  },
  {
    "href": "/study/bulgaria/bulgaria-d-visa-requirements-for-bangladeshi-students",
    "title": "Bulgaria Type D Student Visa Requirements for Bangladeshi Students (2026)",
    "description": "Documents, steps and checks for the Type D visa."
  },
  {
    "href": "/study/bulgaria/tuition-fees-in-bulgaria-for-bangladeshi-students",
    "title": "Tuition Fees in Bulgaria for Bangladeshi Students (2026, EUR and BDT)",
    "description": "EUR and BDT tuition ranges by level and field."
  }
];
const FAQS = [
  {
    "q": "Does Eammu Holidays have a Khulna branch?",
    "a": "No. We do not claim a separate Khulna branch. Our main Dhaka desk and online sessions serve students from Khulna."
  },
  {
    "q": "How should Khulna families plan travel for appointments?",
    "a": "Travel to Dhaka the day before, stay close to the appointment area if possible and carry all documents in one organised folder."
  },
  {
    "q": "Can I get counselling online from Khulna?",
    "a": "Yes. Profile review, shortlisting, document checks, motivation letter feedback and visa interview practice can be done by video call, phone and WhatsApp."
  },
  {
    "q": "What should Khulna students prepare before a first session?",
    "a": "Passport copy, result sheets, preferred subject and intake, budget range and any English test results."
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
          "name": "Bulgaria",
          "item": "https://eammu.com/study/bulgaria"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Khulna Consultancy",
          "item": "https://eammu.com/study/bulgaria/consultancy-in-khulna"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in Bulgaria Consultancy in Khulna: Free Counseling for Bangladeshi Students",
      "description": "Study in Bulgaria consultancy for Khulna students: free profile review, university shortlist, Type D visa preparation and BDT budgets from Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/bulgaria/consultancy-in-khulna",
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
          "name": "Does Eammu Holidays have a Khulna branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We do not claim a separate Khulna branch. Our main Dhaka desk and online sessions serve students from Khulna."
          }
        },
        {
          "@type": "Question",
          "name": "How should Khulna families plan travel for appointments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Travel to Dhaka the day before, stay close to the appointment area if possible and carry all documents in one organised folder."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get counselling online from Khulna?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Profile review, shortlisting, document checks, motivation letter feedback and visa interview practice can be done by video call, phone and WhatsApp."
          }
        },
        {
          "@type": "Question",
          "name": "What should Khulna students prepare before a first session?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Passport copy, result sheets, preferred subject and intake, budget range and any English test results."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Bulgaria 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in Bulgaria Consultancy in Khulna: Free Counseling for Bangladeshi Students</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Local logistics, honest guidance and online counselling for Khulna students planning Bulgaria.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-22">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Bulgaria guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 62 Bulgaria guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">Counseling for Khulna families</h2>
<p className="mt-4 leading-7 text-slate-700">Khulna is an industrial and educational city in the south-west, home to well-known engineering and science institutions. Students from Khulna often consider engineering, agriculture and business degrees abroad.</p>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays does not claim a separate Khulna branch. Our main Dhaka desk and online sessions serve students from Khulna. See the <Link href="/study/bulgaria/consultancy-in-dhaka" className={linkClass}>main Dhaka consultancy page</Link> for desk details.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Travel and logistics from Khulna</h2>
<p className="mt-4 leading-7 text-slate-700">Khulna to Dhaka is a long road or rail journey, and some travellers use nearby airports for flights. Plan an overnight stay before appointments and confirm timetables.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">What you can do online and what needs a trip</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Step</th><th scope="col" className="px-3 py-2 text-left font-bold">Online or local</th><th scope="col" className="px-3 py-2 text-left font-bold">In person</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Profile review and shortlist</td><td className="px-3 py-2 align-top">Video call or WhatsApp</td><td className="px-3 py-2 align-top">Optional walk-in at Dhaka desk</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Motivation letter, CV and exam planning</td><td className="px-3 py-2 align-top">Online document review</td><td className="px-3 py-2 align-top">Not needed</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Attestation, police clearance and translations</td><td className="px-3 py-2 align-top">Locally and in Dhaka offices</td><td className="px-3 py-2 align-top">Some steps need in-person visits</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Visa application and interview</td><td className="px-3 py-2 align-top">Not possible online</td><td className="px-3 py-2 align-top">Required at the visa process in Dhaka</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Pre-departure briefing</td><td className="px-3 py-2 align-top">Online</td><td className="px-3 py-2 align-top">Optional</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Confirm current centres and appointment steps on official Bulgarian sources.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Useful tips for Khulna students</h2>
<p className="mt-4 leading-7 text-slate-700">Khulna engineering graduates should look at accredited technical universities and check recognition and career outcomes.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Typical Khulna student questions</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>How much will tuition and living cost in BDT? See <Link href="/study/bulgaria/tuition-fees-in-bulgaria-for-bangladeshi-students" className={linkClass}>tuition fees</Link> and <Link href="/study/bulgaria/cost-of-living-in-bulgaria-for-bangladeshi-students" className={linkClass}>cost of living</Link>.</li><li>Can I study medicine? See <Link href="/study/bulgaria/medicine-in-bulgaria-for-bangladeshi-students" className={linkClass}>medicine in Bulgaria</Link>.</li><li>What do I need for the visa? See <Link href="/study/bulgaria/bulgaria-d-visa-requirements-for-bangladeshi-students" className={linkClass}>D visa requirements</Link>.</li><li>How much money must I show? See <Link href="/study/bulgaria/proof-of-funds-for-bulgaria-student-visa" className={linkClass}>proof of funds</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Other locations</h2>
<p className="mt-4 leading-7 text-slate-700">Students can also view the Barishal and Rajshahi guides. You can also view all options on the <Link href="/study/bulgaria/bangladesh-offices" className={linkClass}>Bangladesh offices page</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Official sources to confirm this information</h2>
<p className="mt-4 leading-7 text-slate-700">Policies, fees, visa rules and exam dates change. Before you act on anything on this page, check the current version at:</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Ministry of Foreign Affairs of Bulgaria (mfa.bg) and VFS Global Bulgaria page for Bangladesh</li><li>Bangladesh Bank (bb.org.bd) for remittance rules</li><li>Your university international office</li></ul>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays reviews these pages regularly, last updated November 2026, but official sources always take priority.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Bulgaria Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Bulgaria</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and scholarship shortlist, Bulgaria D visa interview and document preparation and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
