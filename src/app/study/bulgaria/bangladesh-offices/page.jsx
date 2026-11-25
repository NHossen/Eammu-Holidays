import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/bulgaria/bangladesh-offices';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Eammu Holidays Offices for Bulgaria Study | Eammu Holidays",
  "description": "Eammu Holidays Bangladesh support for Bulgaria study: main Dhaka desk, online counselling for every division and city guides for Dhaka, Chattogram, Sylhet and more.",
  "alternates": {
    "canonical": "https://eammu.com/study/bulgaria/bangladesh-offices"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Eammu Holidays Offices for Bulgaria Study | Eammu Holidays",
    "description": "Eammu Holidays Bangladesh support for Bulgaria study: main Dhaka desk, online counselling for every division and city guides for Dhaka, Chattogram, Sylhet and more.",
    "url": "https://eammu.com/study/bulgaria/bangladesh-offices",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Eammu Holidays Offices for Bulgaria Study | Eammu Holidays",
    "description": "Eammu Holidays Bangladesh support for Bulgaria study: main Dhaka desk, online counselling for every division and city guides for Dhaka, Chattogram, Sylhet and more."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Bulgaria", "href": "/study/bulgaria"}, {"name": "Bangladesh Offices and Support", "href": "/study/bulgaria/bangladesh-offices"}];
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
    "href": "/study/bulgaria/consultancy-in-dhaka",
    "title": "Study in Bulgaria Consultancy in Dhaka: Free Counseling for Bangladeshi Students",
    "description": "Counselling and travel logistics for Dhaka families."
  },
  {
    "href": "/study/bulgaria/consultancy-in-chattogram",
    "title": "Study in Bulgaria Consultancy in Chattogram: Free Counseling for Bangladeshi Students",
    "description": "Counselling and travel logistics for Chattogram families."
  },
  {
    "href": "/study/bulgaria/consultancy-in-sylhet",
    "title": "Study in Bulgaria Consultancy in Sylhet: Free Counseling for Bangladeshi Students",
    "description": "Counselling and travel logistics for Sylhet families."
  },
  {
    "href": "/study/bulgaria/bulgaria-d-visa-requirements-for-bangladeshi-students",
    "title": "Bulgaria Type D Student Visa Requirements for Bangladeshi Students (2026)",
    "description": "Documents, steps and checks for the Type D visa."
  }
];
const FAQS = [
  {
    "q": "Does Eammu Holidays have branches in every city?",
    "a": "No. Our main desk is in Dhaka and we counsel students from other divisions online by video, phone and WhatsApp. We do not claim a separate branch in every city."
  },
  {
    "q": "Where do I submit the Bulgaria visa application?",
    "a": "Most students submit through the visa process available in Dhaka. Confirm the current centre and appointment steps on the official Bulgarian Ministry of Foreign Affairs website."
  },
  {
    "q": "Can I get counselling without visiting Dhaka?",
    "a": "Yes. Profile review, shortlisting, document checks and interview practice can be done online."
  },
  {
    "q": "What should I prepare before my first call?",
    "a": "Passport copy, latest result sheets, preferred subject and intake, budget range and any English test results."
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
          "name": "Bangladesh Offices and Support",
          "item": "https://eammu.com/study/bulgaria/bangladesh-offices"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Eammu Holidays Bangladesh Offices and Bulgaria Study Support",
      "description": "Eammu Holidays Bangladesh support for Bulgaria study: main Dhaka desk, online counselling for every division and city guides for Dhaka, Chattogram, Sylhet and more.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/bulgaria/bangladesh-offices",
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
          "name": "Does Eammu Holidays have branches in every city?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Our main desk is in Dhaka and we counsel students from other divisions online by video, phone and WhatsApp. We do not claim a separate branch in every city."
          }
        },
        {
          "@type": "Question",
          "name": "Where do I submit the Bulgaria visa application?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most students submit through the visa process available in Dhaka. Confirm the current centre and appointment steps on the official Bulgarian Ministry of Foreign Affairs website."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get counselling without visiting Dhaka?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Profile review, shortlisting, document checks and interview practice can be done online."
          }
        },
        {
          "@type": "Question",
          "name": "What should I prepare before my first call?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Passport copy, latest result sheets, preferred subject and intake, budget range and any English test results."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Eammu Holidays Bangladesh Offices and Bulgaria Study Support</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Where to meet us, how online counselling works for every division and what to prepare before your first session.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">How Eammu Holidays supports students nationwide</h2>
<p className="mt-4 leading-7 text-slate-700">Our main desk is in Dhaka, and counselling for other cities is mostly online by video call, phone and WhatsApp. We do not claim a separate branch in every city; the pages below explain local travel and logistics honestly. Students from other divisions should plan at least one trip to Dhaka for the visa appointment and interview. Confirm current centres and appointment steps on official Bulgarian sources.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Divisional and district guides</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li><Link href="/study/bulgaria/consultancy-in-dhaka" className={linkClass}>Dhaka</Link>, <Link href="/study/bulgaria/consultancy-in-uttara-dhaka" className={linkClass}>Uttara</Link>, <Link href="/study/bulgaria/consultancy-in-dhanmondi-dhaka" className={linkClass}>Dhanmondi</Link> and <Link href="/study/bulgaria/consultancy-in-mirpur-dhaka" className={linkClass}>Mirpur</Link></li><li><Link href="/study/bulgaria/consultancy-in-chattogram" className={linkClass}>Chattogram</Link>, <Link href="/study/bulgaria/consultancy-in-sylhet" className={linkClass}>Sylhet</Link> and <Link href="/study/bulgaria/consultancy-in-cumilla" className={linkClass}>Cumilla</Link></li><li><Link href="/study/bulgaria/consultancy-in-rajshahi" className={linkClass}>Rajshahi</Link>, <Link href="/study/bulgaria/consultancy-in-bogura" className={linkClass}>Bogura</Link> and <Link href="/study/bulgaria/consultancy-in-rangpur" className={linkClass}>Rangpur</Link></li><li><Link href="/study/bulgaria/consultancy-in-khulna" className={linkClass}>Khulna</Link>, <Link href="/study/bulgaria/consultancy-in-barishal" className={linkClass}>Barishal</Link> and <Link href="/study/bulgaria/consultancy-in-mymensingh" className={linkClass}>Mymensingh</Link></li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">What to prepare before contacting us</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Passport copy and latest result sheets (SSC, HSC, bachelor).</li><li>Preferred subject, level and intake.</li><li>Budget range and whether you need funding.</li><li>Any IELTS, TOEFL, PTE or Duolingo results.</li><li>Questions about the visa, residence permit or recognition.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Contact options</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>WhatsApp or call +8801631312525.</li><li>Email info@eammu.com.</li><li>Online counselling sessions for all divisions.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Official sources to confirm this information</h2>
<p className="mt-4 leading-7 text-slate-700">Policies, fees, visa rules and exam dates change. Before you act on anything on this page, check the current version at:</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Ministry of Foreign Affairs of Bulgaria (mfa.bg) and VFS Global Bulgaria page for Bangladesh</li><li>Bangladesh Bank (bb.org.bd) for remittance rules</li><li>Your university international office</li></ul>
<p className="mt-4 leading-7 text-slate-700">Eammu Holidays reviews these pages regularly, last updated November 2026, but official sources always take priority.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Complete Directory: Every Bulgaria Study Guide</h2>
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
