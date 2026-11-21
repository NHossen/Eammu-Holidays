import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/usa/f1-student-visa-requirements-bangladesh';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "F-1 Student Visa Requirements for Bangladesh 2026 | Eammu Holidays",
  "description": "F-1 visa requirements for Bangladeshi students in 2026: I-20, SEVIS fee, DS-160, documents, funds, interview at US Embassy Dhaka and common refusal reasons.",
  "alternates": {
    "canonical": "https://eammu.com/study/usa/f1-student-visa-requirements-bangladesh"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "F-1 Student Visa Requirements for Bangladesh 2026 | Eammu Holidays",
    "description": "F-1 visa requirements for Bangladeshi students in 2026: I-20, SEVIS fee, DS-160, documents, funds, interview at US Embassy Dhaka and common refusal reasons.",
    "url": "https://eammu.com/study/usa/f1-student-visa-requirements-bangladesh",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "F-1 Student Visa Requirements for Bangladesh 2026 | Eammu Holidays",
    "description": "F-1 visa requirements for Bangladeshi students in 2026: I-20, SEVIS fee, DS-160, documents, funds, interview at US Embassy Dhaka and common refusal reasons."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "USA", "href": "/study/usa"}, {"name": "F-1 Visa Requirements", "href": "/study/usa/f1-student-visa-requirements-bangladesh"}];
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
    "href": "/study/usa/form-i-20-explained-for-f1-visa",
    "title": "Form I-20 Explained: What It Is and How to Read It",
    "description": "How to read your I-20 and avoid costly errors."
  },
  {
    "href": "/study/usa/ds-160-and-sevis-fee-guide",
    "title": "DS-160 and SEVIS Fee Guide for Bangladeshi F-1 Applicants",
    "description": "DS-160, SEVIS fee and visa fee explained."
  },
  {
    "href": "/study/usa/proof-of-funds-requirements-for-usa-student-visa",
    "title": "Proof of Funds Requirements for the US F-1 Student Visa",
    "description": "How much to show and which documents work."
  },
  {
    "href": "/study/usa/f1-visa-interview-questions-and-tips",
    "title": "F-1 Visa Interview Questions and Tips for Bangladeshi Students",
    "description": "Common questions, truthful answers and a document checklist."
  },
  {
    "href": "/study/usa/f1-visa-rejection-214b-and-reapplication",
    "title": "F-1 Visa Rejection Under 214(b): Reasons and How to Reapply",
    "description": "What 214(b) means and how to improve a second attempt."
  }
];
const FAQS = [
  {
    "q": "Where do Bangladeshi students apply for the F-1 visa?",
    "a": "Interviews are held at the US Embassy in Dhaka, which is the post that handles student visas for Bangladesh. Confirm the current appointment process on the official US government site."
  },
  {
    "q": "Do I need an I-20 before applying?",
    "a": "Yes. You need Form I-20 from a SEVP-certified school before you pay the SEVIS fee and apply for the visa."
  },
  {
    "q": "Can I get an interview waiver?",
    "a": "First-time F-1 applicants are generally required to attend an interview. Waivers are limited to specific renewal categories and can change."
  },
  {
    "q": "Is a visa guaranteed if I have funds?",
    "a": "No. The officer decides based on the whole case, including academic plan, funding, and whether you show strong ties to Bangladesh."
  },
  {
    "q": "Do I need a medical exam for the F-1 visa?",
    "a": "F-1 applicants are generally not required to complete a visa medical exam, but universities require vaccination records. Check both the embassy and your university."
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
          "name": "F-1 Visa Requirements",
          "item": "https://eammu.com/study/usa/f1-student-visa-requirements-bangladesh"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "F-1 Student Visa Requirements for Bangladeshi Students (2026)",
      "description": "F-1 visa requirements for Bangladeshi students in 2026: I-20, SEVIS fee, DS-160, documents, funds, interview at US Embassy Dhaka and common refusal reasons.",
      "inLanguage": "en",
      "datePublished": "2026-11-21",
      "dateModified": "2026-11-21",
      "mainEntityOfPage": "https://eammu.com/study/usa/f1-student-visa-requirements-bangladesh",
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
          "name": "Where do Bangladeshi students apply for the F-1 visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Interviews are held at the US Embassy in Dhaka, which is the post that handles student visas for Bangladesh. Confirm the current appointment process on the official US government site."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an I-20 before applying?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You need Form I-20 from a SEVP-certified school before you pay the SEVIS fee and apply for the visa."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get an interview waiver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "First-time F-1 applicants are generally required to attend an interview. Waivers are limited to specific renewal categories and can change."
          }
        },
        {
          "@type": "Question",
          "name": "Is a visa guaranteed if I have funds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The officer decides based on the whole case, including academic plan, funding, and whether you show strong ties to Bangladesh."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a medical exam for the F-1 visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "F-1 applicants are generally not required to complete a visa medical exam, but universities require vaccination records. Check both the embassy and your university."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">F-1 Student Visa Requirements for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">The documents, fees and steps for the US student visa, and what the interview officer is really testing.</p>
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
<h2 className="text-2xl font-bold text-emerald-900">What the F-1 visa is</h2>
<p className="mt-4 leading-7 text-slate-700">The F-1 is the nonimmigrant visa for full-time academic study at a SEVP-certified US institution. It is temporary by design, so the officer must be convinced that you intend to return to Bangladesh after your studies. That is the heart of section 214(b).</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Core requirements</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Admission to a SEVP-certified school and Form I-20; see <Link href="/study/usa/form-i-20-explained-for-f1-visa" className={linkClass}>Form I-20 explained</Link>.</li><li>SEVIS I-901 fee payment and DS-160 confirmation; see <Link href="/study/usa/ds-160-and-sevis-fee-guide" className={linkClass}>DS-160 and SEVIS fee</Link>.</li><li>Proof that you can pay for your first year and have access to funds for later years; see <Link href="/study/usa/proof-of-funds-requirements-for-usa-student-visa" className={linkClass}>proof of funds</Link>.</li><li>A valid passport, photo and interview appointment.</li><li>Evidence of your academic preparation and a clear study plan.</li><li>Ties to Bangladesh: family, property, employment prospects or other commitments that make return believable.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Step-by-step</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Receive your I-20 from the university.</li><li>Pay the SEVIS fee and keep the receipt.</li><li>Complete the DS-160 online and print the confirmation page.</li><li>Pay the visa application fee and book your interview.</li><li>Attend the interview at the US Embassy in Dhaka with original documents.</li><li>If approved, your passport is returned with the visa; if refused, see <Link href="/study/usa/f1-visa-rejection-214b-and-reapplication" className={linkClass}>refusal and reapplication</Link>.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Entry to the USA</h2>
<p className="mt-4 leading-7 text-slate-700">You may enter the USA up to 30 days before the programme start date on your I-20. At the border, an officer decides admission, so carry your I-20, passport, visa, SEVIS receipt and financial documents.</p>
<p className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-700">US immigration policy has changed frequently in 2025 and 2026. Treat this page as a guide, not legal advice, and confirm current rules on travel.state.gov, the US Embassy Dhaka website, ICE Study in the States and your university international office before you act.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Visa-day timeline</h2>
<ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700"><li>Reach the embassy area early and bring only permitted items.</li><li>Present your appointment confirmation and passport at entry.</li><li>Biometrics and document check, then the officer interview.</li><li>The officer tells you the outcome or asks for additional documents (administrative processing).</li><li>If approved, wait for your passport with the visa.</li></ol>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Red flags that raise questions</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Funds that appeared suddenly or cannot be explained.</li><li>A programme that does not match your past studies or work.</li><li>Vague answers about your plans after graduation.</li><li>Documents that do not match the I-20 or each other.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Official sources to confirm this information</h2>
<p className="mt-4 leading-7 text-slate-700">Policies, fees, test formats and deadlines change. Before you act on anything on this page, check the current version at:</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>travel.state.gov and the US Embassy Dhaka website (bd.usembassy.gov)</li><li>ICE Study in the States (studyinthestates.dhs.gov)</li><li>USCIS (uscis.gov) for OPT and H-1B</li><li>Your university international student office (DSO)</li></ul>
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
