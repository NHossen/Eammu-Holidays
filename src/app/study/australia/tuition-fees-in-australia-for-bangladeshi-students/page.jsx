import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/australia/tuition-fees-in-australia-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Australia Tuition Fees for Bangladeshis 2026 | Eammu Holidays",
  "description": "2026 tuition fee ranges in Australia for Bangladeshi students in AUD and BDT for bachelor, master, MBA, PhD, VET and foundation courses, plus visa and OSHC costs. Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/australia/tuition-fees-in-australia-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Australia Tuition Fees for Bangladeshis 2026 | Eammu Holidays",
    "description": "2026 tuition fee ranges in Australia for Bangladeshi students in AUD and BDT for bachelor, master, MBA, PhD, VET and foundation courses, plus visa and OSHC costs. Eammu Holidays.",
    "url": "https://eammu.com/study/australia/tuition-fees-in-australia-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Australia Tuition Fees for Bangladeshis 2026 | Eammu Holidays",
    "description": "2026 tuition fee ranges in Australia for Bangladeshi students in AUD and BDT for bachelor, master, MBA, PhD, VET and foundation courses, plus visa and OSHC costs. Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Australia", "href": "/study/australia"}, {"name": "Tuition Fees", "href": "/study/australia/tuition-fees-in-australia-for-bangladeshi-students"}];
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
    "href": "/study/australia/cost-of-living-in-australia-for-bangladeshi-students",
    "title": "Cost of Living in Australia for Bangladeshi Students",
    "description": "Monthly budgets in AUD and BDT for rent, food, transport and phone across major student cities."
  },
  {
    "href": "/study/australia/cheapest-universities-in-australia",
    "title": "Cheapest Universities in Australia for Bangladeshi Students",
    "description": "How to find lower-cost Australian institutions and the checks that matter beyond the headline fee."
  },
  {
    "href": "/study/australia/scholarships-in-australia-for-bangladeshi-students",
    "title": "Scholarships in Australia for Bangladeshi Students",
    "description": "Australia Awards, research scholarships and university awards explained, with realistic odds and how to apply."
  },
  {
    "href": "/study/australia/proof-of-funds-requirements-for-australia-student-visa",
    "title": "Proof of Funds for an Australia Student Visa from Bangladesh",
    "description": "How much money you must show, which evidence works, income-based alternatives and what to avoid."
  }
];
const FAQS = [
  {
    "q": "Which Australian institutions are cheapest?",
    "a": "Regional universities and VET providers often charge less, but compare quality, outcomes and visa risk."
  },
  {
    "q": "Do I pay tuition before the visa?",
    "a": "Most providers require a deposit, usually about half or one semester of fees, before issuing the CoE needed for the visa."
  },
  {
    "q": "Do fees rise every year?",
    "a": "Yes, many providers adjust fees each year. Check your intake year."
  },
  {
    "q": "Is the deposit refundable if the visa is refused?",
    "a": "Refund rules differ by provider, so read the written terms before paying."
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
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Tuition Fees",
          "item": "https://eammu.com/study/australia/tuition-fees-in-australia-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Tuition Fees in Australia for Bangladeshi Students (2026)",
      "description": "2026 tuition fee ranges in Australia for Bangladeshi students in AUD and BDT for bachelor, master, MBA, PhD, VET and foundation courses, plus visa and OSHC costs. Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/australia/tuition-fees-in-australia-for-bangladeshi-students",
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
          "name": "Which Australian institutions are cheapest?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Regional universities and VET providers often charge less, but compare quality, outcomes and visa risk."
          }
        },
        {
          "@type": "Question",
          "name": "Do I pay tuition before the visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most providers require a deposit, usually about half or one semester of fees, before issuing the CoE needed for the visa."
          }
        },
        {
          "@type": "Question",
          "name": "Do fees rise every year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, many providers adjust fees each year. Check your intake year."
          }
        },
        {
          "@type": "Question",
          "name": "Is the deposit refundable if the visa is refused?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Refund rules differ by provider, so read the written terms before paying."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Tuition Fees in Australia for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A clear AUD-to-BDT look at what each level of study costs and which fees families forget.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">Typical tuition ranges</h2>
<p className="mt-4 leading-7 text-slate-700">International students pay full-fee tuition, set by each provider and published on its course page. Fees are per year of full-time study; a standard course is 3 years for a bachelor degree and 1.5 to 2 years for a coursework master. For lower-cost options see <Link href="/study/australia/cheapest-universities-in-australia" className={linkClass}>cheapest universities in Australia</Link>, and for well-known universities see <Link href="/study/australia/top-universities-in-australia" className={linkClass}>top universities in Australia</Link>.</p>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Programme</th><th scope="col" className="px-3 py-2 text-left font-bold">Tuition per year (AUD)</th><th scope="col" className="px-3 py-2 text-left font-bold">Tuition per year (BDT)</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">ELICOS English course</td><td className="px-3 py-2 align-top">A$300 – 450 per week</td><td className="px-3 py-2 align-top">Tk 24,000 – 36,000 per week</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Foundation year</td><td className="px-3 py-2 align-top">A$15,000 – 30,000</td><td className="px-3 py-2 align-top">Tk 12 – 24 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">VET diploma (private or TAFE)</td><td className="px-3 py-2 align-top">A$12,000 – 25,000</td><td className="px-3 py-2 align-top">Tk 9.6 – 20 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor, humanities, business, IT</td><td className="px-3 py-2 align-top">A$30,000 – 45,000</td><td className="px-3 py-2 align-top">Tk 24 – 36 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor, engineering and science</td><td className="px-3 py-2 align-top">A$33,000 – 50,000</td><td className="px-3 py-2 align-top">Tk 26 – 40 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor, medicine, dentistry, veterinary</td><td className="px-3 py-2 align-top">A$70,000 – 100,000+</td><td className="px-3 py-2 align-top">Tk 56 lakh – 80 lakh+</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Master, coursework</td><td className="px-3 py-2 align-top">A$32,000 – 50,000</td><td className="px-3 py-2 align-top">Tk 25.6 – 40 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">MBA</td><td className="px-3 py-2 align-top">A$40,000 – 100,000+ per year or programme total</td><td className="px-3 py-2 align-top">Tk 32 – 80 lakh+</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">PhD or master by research</td><td className="px-3 py-2 align-top">Often scholarship-funded; otherwise A$35,000 – 50,000</td><td className="px-3 py-2 align-top">Check RTP and university awards</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 AUD = about Tk 80 and are indicative estimates for 2026–2027 based on published university fees and Home Affairs rules. Fees, visa charges, funds requirements and exchange rates change (visa charges usually change every 1 July), so always confirm on the Home Affairs website, the university page or with an Eammu Holidays counselor before paying.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">What changes the price</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li><strong>Field of study.</strong> Medicine, dentistry, veterinary science and some engineering cost the most.</li><li><strong>Provider type.</strong> Universities, TAFE and private colleges differ; see <Link href="/study/australia/universities-vs-vet-and-private-colleges-in-australia" className={linkClass}>universities vs VET and private colleges</Link>.</li><li><strong>Location.</strong> Regional universities often charge less and have lower living costs.</li><li><strong>Scholarships.</strong> Many providers discount tuition for strong applicants; see <Link href="/study/australia/scholarships-in-australia-for-bangladeshi-students" className={linkClass}>scholarships in Australia</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">In taka: what it means for your family</h2>
<p className="mt-4 leading-7 text-slate-700">At Tk 80 per AUD, tuition of A$40,000 is Tk 32 lakh for one year. You must also show A$29,710 in living funds, about Tk 23.8 lakh, plus travel. For a student who has to show funds for one year of tuition, living costs and flights, the total evidence needed can be around Tk 58 to 65 lakh. See <Link href="/study/australia/proof-of-funds-requirements-for-australia-student-visa" className={linkClass}>proof of funds requirements</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Costs beyond tuition</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Application fee, often free or up to A$150 depending on the provider.</li><li>Student visa charge of A$2,500 for the main applicant from 1 July 2026; see <Link href="/study/australia/student-visa-processing-time-and-cost" className={linkClass}>visa processing time and cost</Link>.</li><li>Overseas Student Health Cover for the whole visa period; see <Link href="/study/australia/oshc-health-cover-for-international-students" className={linkClass}>OSHC</Link>.</li><li>Health checks, police certificate and biometrics.</li><li>Airfare, bond for accommodation and initial setup costs.</li><li>Student services and amenities fee, a yearly charge at most universities.</li></ul>
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
