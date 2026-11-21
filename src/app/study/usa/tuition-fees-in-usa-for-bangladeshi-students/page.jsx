import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/usa/tuition-fees-in-usa-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Tuition Fees in USA for Bangladeshi Students 2026 | Eammu Holidays",
  "description": "US tuition fees in 2026 for Bangladeshi students in USD and BDT: community college, public, private, master, MBA, PhD, plus hidden costs and ways to reduce them.",
  "alternates": {
    "canonical": "https://eammu.com/study/usa/tuition-fees-in-usa-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Tuition Fees in USA for Bangladeshi Students 2026 | Eammu Holidays",
    "description": "US tuition fees in 2026 for Bangladeshi students in USD and BDT: community college, public, private, master, MBA, PhD, plus hidden costs and ways to reduce them.",
    "url": "https://eammu.com/study/usa/tuition-fees-in-usa-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Tuition Fees in USA for Bangladeshi Students 2026 | Eammu Holidays",
    "description": "US tuition fees in 2026 for Bangladeshi students in USD and BDT: community college, public, private, master, MBA, PhD, plus hidden costs and ways to reduce them."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "USA", "href": "/study/usa"}, {"name": "Tuition Fees", "href": "/study/usa/tuition-fees-in-usa-for-bangladeshi-students"}];
const NAV = [
  {
    "label": "USA Hub",
    "pages": [
      {
        "href": "/study/usa",
        "label": "Study in USA Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/usa/study-in-usa-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/usa/study-in-usa-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/usa/tuition-fees-in-usa-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/usa/cost-of-living-in-usa-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/usa/cheapest-universities-in-usa",
        "label": "Affordable Universities"
      },
      {
        "href": "/study/usa/top-universities-in-usa",
        "label": "Top Universities"
      },
      {
        "href": "/study/usa/community-college-transfer-pathway-in-usa",
        "label": "Community College Pathway"
      },
      {
        "href": "/study/usa/scholarships-in-usa-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/usa/fulbright-scholarship-guide-for-bangladeshi-students",
        "label": "Fulbright Guide"
      },
      {
        "href": "/study/usa/assistantships-ta-ra-funding-in-usa",
        "label": "TA and RA Funding"
      },
      {
        "href": "/study/usa/admission-requirements-in-usa-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/usa/study-gap-accepted-universities-in-usa",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/usa/study-in-usa-after-hsc",
        "label": "After HSC"
      },
      {
        "href": "/study/usa/study-in-usa-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/usa/usa-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Tests & Applications",
    "pages": [
      {
        "href": "/study/usa/sat-and-act-guide-for-usa-undergraduate",
        "label": "SAT and ACT Guide"
      },
      {
        "href": "/study/usa/gre-and-gmat-guide-for-usa-masters",
        "label": "GRE and GMAT Guide"
      },
      {
        "href": "/study/usa/toefl-ielts-and-duolingo-for-usa",
        "label": "TOEFL, IELTS and Duolingo"
      },
      {
        "href": "/study/usa/us-university-application-guide",
        "label": "Application Guide"
      },
      {
        "href": "/study/usa/statement-of-purpose-and-lor-guide-for-usa",
        "label": "SOP and LOR Guide"
      },
      {
        "href": "/study/usa/degree-recognition-and-wes-evaluation-for-usa",
        "label": "Degree Recognition and WES"
      }
    ]
  },
  {
    "label": "Programs & Student Life",
    "pages": [
      {
        "href": "/study/usa/cse-and-it-courses-in-usa",
        "label": "CSE and IT Courses"
      },
      {
        "href": "/study/usa/stem-programs-and-stem-designation-in-usa",
        "label": "STEM Programs and Designation"
      },
      {
        "href": "/study/usa/engineering-courses-in-usa-for-bangladeshi-students",
        "label": "Engineering Courses"
      },
      {
        "href": "/study/usa/data-science-and-ai-masters-in-usa",
        "label": "Data Science and AI"
      },
      {
        "href": "/study/usa/mba-in-usa-for-bangladeshi-students",
        "label": "MBA in USA"
      },
      {
        "href": "/study/usa/masters-in-usa-for-bangladeshi-students",
        "label": "Master's in USA"
      },
      {
        "href": "/study/usa/phd-in-usa-for-bangladeshi-students",
        "label": "PhD in USA"
      },
      {
        "href": "/study/usa/medicine-and-md-pathway-in-usa-for-bangladeshi-students",
        "label": "Medicine and MD Pathway"
      },
      {
        "href": "/study/usa/best-states-and-cities-to-study-in-usa",
        "label": "Best States and Cities"
      },
      {
        "href": "/study/usa/student-accommodation-in-usa",
        "label": "Student Accommodation"
      },
      {
        "href": "/study/usa/halal-food-and-student-life-in-usa-for-bangladeshis",
        "label": "Halal Food and Student Life"
      },
      {
        "href": "/study/usa/health-insurance-for-international-students-in-usa",
        "label": "Health Insurance"
      },
      {
        "href": "/study/usa/banking-and-sending-money-to-usa-from-bangladesh",
        "label": "Banking and Sending Money"
      },
      {
        "href": "/study/usa/avoid-scams-and-unaccredited-universities-in-usa",
        "label": "Avoid Scams and Fake Universities"
      }
    ]
  },
  {
    "label": "Visa, OPT & Work Rules",
    "pages": [
      {
        "href": "/study/usa/f1-student-visa-requirements-bangladesh",
        "label": "F-1 Visa Requirements"
      },
      {
        "href": "/study/usa/form-i-20-explained-for-f1-visa",
        "label": "Form I-20 Explained"
      },
      {
        "href": "/study/usa/ds-160-and-sevis-fee-guide",
        "label": "DS-160 and SEVIS Fee"
      },
      {
        "href": "/study/usa/proof-of-funds-requirements-for-usa-student-visa",
        "label": "Proof of Funds"
      },
      {
        "href": "/study/usa/student-visa-processing-time-and-cost-usa",
        "label": "Visa Time and Cost"
      },
      {
        "href": "/study/usa/f1-visa-interview-questions-and-tips",
        "label": "Interview Questions and Tips"
      },
      {
        "href": "/study/usa/f1-visa-rejection-214b-and-reapplication",
        "label": "Visa Rejection and Reapplication"
      },
      {
        "href": "/study/usa/f2-visa-for-spouse-and-children-of-students",
        "label": "F-2 Visa for Dependents"
      },
      {
        "href": "/study/usa/cpt-opt-and-stem-opt-rules-in-usa",
        "label": "CPT, OPT and STEM OPT"
      },
      {
        "href": "/study/usa/h1b-and-post-study-work-pathways-in-usa",
        "label": "H-1B and Post-Study Pathways"
      },
      {
        "href": "/study/usa/usa-student-visa-rule-changes-2026",
        "label": "Visa Rule Changes 2026"
      },
      {
        "href": "/study/usa/pre-departure-checklist-for-usa-students",
        "label": "Pre-Departure Checklist"
      },
      {
        "href": "/study/usa/maintaining-f1-status-in-usa",
        "label": "Maintaining F-1 Status"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/usa/bangladesh-offices",
        "label": "Bangladesh Offices and Support"
      },
      {
        "href": "/study/usa/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/usa/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/usa/cost-of-living-in-usa-for-bangladeshi-students",
    "title": "Cost of Living in the USA for Bangladeshi Students (2026 Monthly Budget)",
    "description": "City-by-city living budgets in USD and taka."
  },
  {
    "href": "/study/usa/cheapest-universities-in-usa",
    "title": "Cheapest and Most Affordable Universities in the USA for Bangladeshi Students",
    "description": "Where costs are lower and how to check quality first."
  },
  {
    "href": "/study/usa/scholarships-in-usa-for-bangladeshi-students",
    "title": "Scholarships in the USA for Bangladeshi Students (2026)",
    "description": "Merit awards, Fulbright, assistantships and what to ignore."
  },
  {
    "href": "/study/usa/proof-of-funds-requirements-for-usa-student-visa",
    "title": "Proof of Funds Requirements for the US F-1 Student Visa",
    "description": "How much to show and which documents work."
  },
  {
    "href": "/study/usa/assistantships-ta-ra-funding-in-usa",
    "title": "Teaching and Research Assistantships in the USA: How Funding Works",
    "description": "TA and RA funding explained, with realistic stipend ranges."
  }
];
const FAQS = [
  {
    "q": "What is the average tuition in the USA for international students?",
    "a": "Roughly $20,000 to $45,000 a year at public universities and $35,000 to $65,000 or more at private universities, with community colleges lower. Master programmes are often priced per credit."
  },
  {
    "q": "Is tuition cheaper at public universities for Bangladeshis?",
    "a": "Not automatically. International students normally pay the out-of-state or international rate, which is much higher than the in-state rate residents pay."
  },
  {
    "q": "Can tuition be waived?",
    "a": "Yes, through merit scholarships and especially through assistantships, which commonly include a tuition waiver and a stipend, mainly for PhD and some research master students."
  },
  {
    "q": "Do fees go up every year?",
    "a": "Often by 2 to 5 percent a year. Budget for increases across the whole degree, not just year one."
  },
  {
    "q": "How do I pay tuition from Bangladesh?",
    "a": "Usually by international wire or a payment platform the university lists, sent through an authorised dealer bank. Follow Bangladesh Bank rules and keep all remittance records for the visa file."
  },
  {
    "q": "Is tuition per credit or per year?",
    "a": "Master programmes are often charged per credit, so the total depends on the number of credits and any fees. Always ask for the full degree cost in writing."
  },
  {
    "q": "Do scholarships renew each year?",
    "a": "Often only if you keep a minimum GPA and credit load. Read the renewal conditions before you accept."
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
          "name": "USA",
          "item": "https://eammu.com/study/usa"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Tuition Fees",
          "item": "https://eammu.com/study/usa/tuition-fees-in-usa-for-bangladeshi-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Tuition Fees in the USA for Bangladeshi Students (2026, USD and BDT)",
      "description": "US tuition fees in 2026 for Bangladeshi students in USD and BDT: community college, public, private, master, MBA, PhD, plus hidden costs and ways to reduce them.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/usa/tuition-fees-in-usa-for-bangladeshi-students",
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
          "name": "What is the average tuition in the USA for international students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roughly $20,000 to $45,000 a year at public universities and $35,000 to $65,000 or more at private universities, with community colleges lower. Master programmes are often priced per credit."
          }
        },
        {
          "@type": "Question",
          "name": "Is tuition cheaper at public universities for Bangladeshis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. International students normally pay the out-of-state or international rate, which is much higher than the in-state rate residents pay."
          }
        },
        {
          "@type": "Question",
          "name": "Can tuition be waived?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, through merit scholarships and especially through assistantships, which commonly include a tuition waiver and a stipend, mainly for PhD and some research master students."
          }
        },
        {
          "@type": "Question",
          "name": "Do fees go up every year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often by 2 to 5 percent a year. Budget for increases across the whole degree, not just year one."
          }
        },
        {
          "@type": "Question",
          "name": "How do I pay tuition from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually by international wire or a payment platform the university lists, sent through an authorised dealer bank. Follow Bangladesh Bank rules and keep all remittance records for the visa file."
          }
        },
        {
          "@type": "Question",
          "name": "Is tuition per credit or per year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Master programmes are often charged per credit, so the total depends on the number of credits and any fees. Always ask for the full degree cost in writing."
          }
        },
        {
          "@type": "Question",
          "name": "Do scholarships renew each year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often only if you keep a minimum GPA and credit load. Read the renewal conditions before you accept."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in USA 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Tuition Fees in the USA for Bangladeshi Students (2026, USD and BDT)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Typical tuition ranges by level, university type and field, converted to taka, plus the extra costs families forget.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-21">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in USA guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 63 USA guides</summary>
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
<p className="mt-4 leading-7 text-slate-700">American universities set their own prices, and sticker price is not always what students pay after merit aid. For lower-cost routes see <Link href="/study/usa/cheapest-universities-in-usa" className={linkClass}>affordable universities in the USA</Link> and <Link href="/study/usa/community-college-transfer-pathway-in-usa" className={linkClass}>the community college pathway</Link>; for prestige options see <Link href="/study/usa/top-universities-in-usa" className={linkClass}>top universities</Link>.</p>
<div className="mt-5 overflow-x-auto rounded-lg border border-slate-200"><table className="min-w-full text-sm text-slate-700"><thead className="bg-emerald-900 text-white"><tr><th scope="col" className="px-3 py-2 text-left font-bold">Programme</th><th scope="col" className="px-3 py-2 text-left font-bold">Tuition per year (USD)</th><th scope="col" className="px-3 py-2 text-left font-bold">Tuition per year (BDT)</th></tr></thead><tbody><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Community college (associate or transfer)</td><td className="px-3 py-2 align-top">$8,000 – $18,000</td><td className="px-3 py-2 align-top">Tk 9.8 – 22.1 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor, public university</td><td className="px-3 py-2 align-top">$20,000 – $45,000</td><td className="px-3 py-2 align-top">Tk 24.6 – 55.4 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Bachelor, private university</td><td className="px-3 py-2 align-top">$35,000 – $65,000</td><td className="px-3 py-2 align-top">Tk 43 – 80 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Master, public university</td><td className="px-3 py-2 align-top">$18,000 – $45,000</td><td className="px-3 py-2 align-top">Tk 22.1 – 55.4 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">Master, private university</td><td className="px-3 py-2 align-top">$30,000 – $70,000</td><td className="px-3 py-2 align-top">Tk 36.9 – 86.1 lakh</td></tr><tr className="odd:bg-white even:bg-slate-50"><td className="px-3 py-2 align-top">MBA, top programme</td><td className="px-3 py-2 align-top">$60,000 – $85,000</td><td className="px-3 py-2 align-top">Tk 73.8 lakh – 1 crore</td></tr></tbody></table></div>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">Figures use an assumed rate of 1 USD = about Tk 123 and are indicative estimates for the 2026–2027 intake. Fees, scholarship rules, test dates, visa policy and exchange rates change, so always confirm with the university, official US government sources or an Eammu Holidays counselor before paying anything.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">What changes the price</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li><strong>Public or private.</strong> Private universities charge more but often give larger merit awards.</li><li><strong>Field.</strong> Engineering, computer science, business analytics and health programmes cost more per credit.</li><li><strong>Location.</strong> Big coastal cities cost more than the Midwest and South; see <Link href="/study/usa/best-states-and-cities-to-study-in-usa" className={linkClass}>best states and cities</Link>.</li><li><strong>Programme length.</strong> One-year and 18-month master programmes cost less overall than two-year ones but offer less time for internships.</li><li><strong>Funding.</strong> A funded assistantship can cut tuition to near zero; see <Link href="/study/usa/assistantships-ta-ra-funding-in-usa" className={linkClass}>assistantships</Link>.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">In taka: what it means for your family</h2>
<p className="mt-4 leading-7 text-slate-700">At about Tk 123 per USD, $30,000 a year is roughly Tk 36.9 lakh. Add living costs from <Link href="/study/usa/cost-of-living-in-usa-for-bangladeshi-students" className={linkClass}>cost of living in the USA</Link>. A self-funded master at a mid-priced public university commonly lands between Tk 45 lakh and Tk 90 lakh in total, so compare programmes by total cost, not by monthly instalment.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Costs beyond tuition</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Application fees, often $50 to $100 per university, plus test and score-report fees.</li><li>The I-20 deposit that confirms your seat, usually credited to tuition.</li><li>Mandatory student fees and health insurance; see <Link href="/study/usa/health-insurance-for-international-students-in-usa" className={linkClass}>health insurance</Link>.</li><li>SEVIS and visa fees; see <Link href="/study/usa/student-visa-processing-time-and-cost-usa" className={linkClass}>visa time and cost</Link>.</li><li>Flights, winter clothing, laptop and first-month housing deposits.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Ways to reduce what you pay</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Apply early to be considered for merit awards that are first-come-first-served.</li><li>Compare per-credit fees and the total number of credits for the same degree.</li><li>Consider one-year master programmes where the content fits your goals.</li><li>Look for in-state or reduced international rates, which a few public universities offer after the first year or for certain programmes.</li><li>Ask the department about assistantships before you accept an offer.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Official sources to confirm this information</h2>
<p className="mt-4 leading-7 text-slate-700">Policies, fees, test formats and deadlines change. Before you act on anything on this page, check the current version at:</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>The university&apos;s own international admissions and cost pages</li><li>EducationUSA advising resources (educationusa.state.gov)</li><li>College Scorecard (collegescorecard.ed.gov)</li><li>travel.state.gov for visa rules and fees</li></ul>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related USA Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in the USA</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university and scholarship shortlist, F-1 visa interview preparation and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
