import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/bulgaria/post-study-work-and-eu-blue-card-from-bulgaria';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Post-Study Work and EU Blue Card from Bulgaria | Eammu Holidays",
  "description": "Post-study work in Bulgaria for Bangladeshi graduates: work permits, EU Blue Card, job search, salary levels, moving to other EU countries and realistic planning.",
  "alternates": {
    "canonical": "https://eammu.com/study/bulgaria/post-study-work-and-eu-blue-card-from-bulgaria"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Post-Study Work and EU Blue Card from Bulgaria | Eammu Holidays",
    "description": "Post-study work in Bulgaria for Bangladeshi graduates: work permits, EU Blue Card, job search, salary levels, moving to other EU countries and realistic planning.",
    "url": "https://eammu.com/study/bulgaria/post-study-work-and-eu-blue-card-from-bulgaria",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Post-Study Work and EU Blue Card from Bulgaria | Eammu Holidays",
    "description": "Post-study work in Bulgaria for Bangladeshi graduates: work permits, EU Blue Card, job search, salary levels, moving to other EU countries and realistic planning."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Bulgaria", "href": "/study/bulgaria"}, {"name": "Post-Study Work and Blue Card", "href": "/study/bulgaria/post-study-work-and-eu-blue-card-from-bulgaria"}];
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
    "href": "/study/bulgaria/bulgaria-vs-other-european-countries-for-bangladeshi-students",
    "title": "Bulgaria vs Other Study Destinations for Bangladeshi Students",
    "description": "Cost, visa and career comparison."
  },
  {
    "href": "/study/bulgaria/cse-and-it-courses-in-bulgaria",
    "title": "Computer Science and IT Courses in Bulgaria for Bangladeshi Students",
    "description": "English-taught computing degrees and the Sofia IT scene."
  },
  {
    "href": "/study/bulgaria/masters-in-bulgaria-for-bangladeshi-students",
    "title": "Master's in Bulgaria for Bangladeshi Students: Admission, Cost and Funding",
    "description": "Master admission, cost and funding."
  },
  {
    "href": "/study/bulgaria/residence-permit-for-students-in-bulgaria",
    "title": "Residence Permit for Students in Bulgaria: Steps After You Arrive",
    "description": "Steps to get and renew your student residence permit."
  }
];
const FAQS = [
  {
    "q": "Can I stay in Bulgaria after graduation?",
    "a": "You would need a new legal basis such as a work permit, EU Blue Card or other residence route. The student permit does not automatically continue."
  },
  {
    "q": "What is the EU Blue Card?",
    "a": "It is an EU residence and work permit for highly qualified workers with a job offer that meets salary and qualification rules in the country of employment. Check current thresholds in Bulgaria."
  },
  {
    "q": "Can I move to another EU country?",
    "a": "Not automatically. Each country has its own immigration rules, so a Bulgarian degree does not give free movement for work."
  },
  {
    "q": "Is the job market good?",
    "a": "Sofia has strong IT and outsourcing sectors, but salaries are lower than in Western Europe. Many graduates return home or look elsewhere."
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
          "name": "Post-Study Work and Blue Card",
          "item": "https://eammu.com/study/bulgaria/post-study-work-and-eu-blue-card-from-bulgaria"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Post-Study Work, Work Permits and the EU Blue Card After Studying in Bulgaria",
      "description": "Post-study work in Bulgaria for Bangladeshi graduates: work permits, EU Blue Card, job search, salary levels, moving to other EU countries and realistic planning.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/bulgaria/post-study-work-and-eu-blue-card-from-bulgaria",
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
          "name": "Can I stay in Bulgaria after graduation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You would need a new legal basis such as a work permit, EU Blue Card or other residence route. The student permit does not automatically continue."
          }
        },
        {
          "@type": "Question",
          "name": "What is the EU Blue Card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is an EU residence and work permit for highly qualified workers with a job offer that meets salary and qualification rules in the country of employment. Check current thresholds in Bulgaria."
          }
        },
        {
          "@type": "Question",
          "name": "Can I move to another EU country?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Each country has its own immigration rules, so a Bulgarian degree does not give free movement for work."
          }
        },
        {
          "@type": "Question",
          "name": "Is the job market good?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sofia has strong IT and outsourcing sectors, but salaries are lower than in Western Europe. Many graduates return home or look elsewhere."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Post-Study Work, Work Permits and the EU Blue Card After Studying in Bulgaria</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">What happens after graduation: staying in Bulgaria, moving within the EU or returning home, and what to check.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Main routes</h2>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Route</th><th scope="col" className="px-3 py-2 text-left font-bold">Notes</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Work permit</td><td className="px-3 py-2 align-top">Needs an employer and approval through the labour authority</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">EU Blue Card</td><td className="px-3 py-2 align-top">For graduate-level jobs meeting salary and qualification rules</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Further study</td><td className="px-3 py-2 align-top">Master or PhD extends your stay</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Return to Bangladesh</td><td className="px-3 py-2 align-top">Often valuable with an EU degree</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Bulgarian visa, residence and tuition rules change from year to year. Treat this page as a guide, not legal advice, and confirm current rules with the Bulgarian Ministry of Foreign Affairs, the VFS Global Bulgaria centre in Bangladesh, the Migration Directorate and your university international office before you act.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Plan for uncertainty</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Choose a programme that is worth its cost on its own.</li><li>Build skills and internships while studying.</li><li>Learn some Bulgarian.</li><li>Keep options open in Bangladesh and abroad.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Do not assume</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Do not assume that studying in Bulgaria gives automatic EU work rights.</li><li>Do not rely on agent promises about residence or citizenship.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Questions to ask before you choose a programme</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>What share of graduates find jobs in their field?</li><li>Does the programme include internships?</li><li>Which companies hire graduates?</li><li>How would the degree help in Bangladesh or another country?</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Official sources to confirm this information</h2>
<p className="mt-4 leading-7 text-slate-700">Policies, fees, visa rules and exam dates change. Before you act on anything on this page, check the current version at:</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Ministry of Foreign Affairs of Bulgaria (mfa.bg) visa pages</li><li>VFS Global Bulgaria page for Bangladesh</li><li>Migration Directorate of Bulgaria for residence permits</li><li>Your university international office</li></ul>
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
