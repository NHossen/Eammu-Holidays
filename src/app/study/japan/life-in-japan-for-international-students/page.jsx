import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/japan/life-in-japan-for-international-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Life in Japan for International Students 2026 | Eammu",
  "description": "What life is like in Japan for international students in 2026: rules, garbage sorting, transport, earthquakes, culture and what to expect.",
  "keywords": [
    "life in Japan students",
    "living in Japan international student",
    "Japan culture rules"
  ],
  "alternates": {
    "canonical": "https://eammu.com/study/japan/life-in-japan-for-international-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Life in Japan for International Students 2026 | Eammu",
    "description": "What life is like in Japan for international students in 2026: rules, garbage sorting, transport, earthquakes, culture and what to expect.",
    "url": "https://eammu.com/study/japan/life-in-japan-for-international-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Life in Japan for International Students 2026 | Eammu",
    "description": "What life is like in Japan for international students in 2026: rules, garbage sorting, transport, earthquakes, culture and what to expect."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Japan", "href": "/study/japan"}, {"name": "Life in Japan", "href": "/study/japan/life-in-japan-for-international-students"}];
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
    "href": "/study/japan/japan-bank-account-phone-and-residence-card",
    "title": "Residence Card, Address Registration, Bank Account and Phone in Japan: First-Month Guide",
    "description": "First-month setup in Japan for international students in 2026: residence card, address registration, health insurance, bank account and phone."
  },
  {
    "href": "/study/japan/health-insurance-for-students-in-japan",
    "title": "Health Insurance and Pension for International Students in Japan",
    "description": "National Health Insurance and pension for international students in Japan in 2026: enrolment, costs, 30 percent co-payment and exemptions."
  },
  {
    "href": "/study/japan/halal-food-and-bangladeshi-community-in-japan",
    "title": "Halal Food, Mosques and the Bangladeshi Community in Japan",
    "description": "Halal food, mosques and Bangladeshi student communities in Japan in 2026: where to find them in Tokyo, Osaka and regional cities."
  },
  {
    "href": "/study/japan/study-in-tokyo",
    "title": "Study in Tokyo for Bangladeshi Students: Universities, Costs, Life",
    "description": "Study in Tokyo in 2026: universities, language schools, rent, transport, jobs and student life for Bangladeshi students in Japan's capital."
  }
];
const FAQS = [
  {
    "q": "Do I need to speak Japanese?",
    "a": "It is not mandatory for English programmes but is very helpful."
  },
  {
    "q": "Is Japan safe for Bangladeshi students?",
    "a": "Yes, but follow all rules."
  },
  {
    "q": "What is the emergency number?",
    "a": "110 for police and 119 for ambulance and fire."
  },
  {
    "q": "How do I handle garbage?",
    "a": "Follow your city's sorting rules and collection days."
  },
  {
    "q": "Is tipping expected?",
    "a": "No, tipping is not customary."
  },
  {
    "q": "Are earthquakes dangerous?",
    "a": "Buildings are designed for them; learn safety procedures."
  },
  {
    "q": "Can I carry cash?",
    "a": "Yes, cash is still widely used."
  },
  {
    "q": "How do I stay in touch with family?",
    "a": "Use local SIMs or messaging apps over Wi-Fi."
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
          "name": "Life in Japan",
          "item": "https://eammu.com/study/japan/life-in-japan-for-international-students"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Life in Japan for International Students: Culture, Rules, Safety and Daily Life",
      "description": "What life is like in Japan for international students in 2026: rules, garbage sorting, transport, earthquakes, culture and what to expect.",
      "inLanguage": "en",
      "datePublished": "2026-11-22",
      "dateModified": "2026-11-22",
      "mainEntityOfPage": "https://eammu.com/study/japan/life-in-japan-for-international-students",
      "keywords": "life in Japan students, living in Japan international student, Japan culture rules",
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
          "name": "Do I need to speak Japanese?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is not mandatory for English programmes but is very helpful."
          }
        },
        {
          "@type": "Question",
          "name": "Is Japan safe for Bangladeshi students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but follow all rules."
          }
        },
        {
          "@type": "Question",
          "name": "What is the emergency number?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "110 for police and 119 for ambulance and fire."
          }
        },
        {
          "@type": "Question",
          "name": "How do I handle garbage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Follow your city's sorting rules and collection days."
          }
        },
        {
          "@type": "Question",
          "name": "Is tipping expected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, tipping is not customary."
          }
        },
        {
          "@type": "Question",
          "name": "Are earthquakes dangerous?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Buildings are designed for them; learn safety procedures."
          }
        },
        {
          "@type": "Question",
          "name": "Can I carry cash?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, cash is still widely used."
          }
        },
        {
          "@type": "Question",
          "name": "How do I stay in touch with family?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use local SIMs or messaging apps over Wi-Fi."
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Life in Japan for International Students: Culture, Rules, Safety and Daily Life</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A practical overview of daily life for students arriving from Bangladesh.</p>
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
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Japan is very safe but has strict rules on garbage, noise and punctuality.</li><li>Learning basic Japanese makes life much easier.</li><li>Earthquakes and typhoons require basic preparedness.</li><li>Follow immigration and work rules strictly.</li></ul>
          </section>

          <nav aria-label="On this page" className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-emerald-900">On this page</h2>
            <ol className="mt-3 grid list-decimal gap-1 pl-6 text-sm sm:grid-cols-2"><li><a href="#language-and-communication" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Language and communication</a></li><li><a href="#rules-and-etiquette" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Rules and etiquette</a></li><li><a href="#safety-and-disasters" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Safety and disasters</a></li><li><a href="#weather-and-clothing" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Weather and clothing</a></li><li><a href="#money-and-transport" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Money and transport</a></li><li><a href="#money-and-banking" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Money and banking</a></li><li><a href="#getting-help" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Getting help</a></li></ol>
          </nav>

          <article>
<section id="language-and-communication" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Language and communication</h2>
<p className="mt-4 leading-7 text-slate-700">English is limited outside major cities. Learn hiragana, katakana and basic phrases before arrival. See <Link href="/study/japan/japanese-language-requirements-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">Japanese language requirements</Link>.</p>
</section>
<section id="rules-and-etiquette" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Rules and etiquette</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Sort garbage carefully; rules vary by city.</li><li>Be punctual and quiet in apartments and on trains.</li><li>Remove shoes indoors.</li><li>Keep your residence card with you at all times.</li><li>Do not work beyond your permitted hours.</li></ul>
</section>
<section id="safety-and-disasters" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Safety and disasters</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Japan has frequent earthquakes; learn evacuation routes.</li><li>Typhoons occur in late summer.</li><li>Save emergency numbers 110 and 119.</li><li>Register with your university&apos;s safety alerts.</li></ul>
</section>
<section id="weather-and-clothing" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Weather and clothing</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Summers are hot and humid.</li><li>Winters are cold, especially in the north.</li><li>Buy seasonal clothing locally if needed.</li></ul>
</section>
<section id="money-and-transport" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Money and transport</h2>
<p className="mt-4 leading-7 text-slate-700">Set up a bank account and transport card; see <Link href="/study/japan/japan-bank-account-phone-and-residence-card" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bank, phone and residence card</Link>. Compare costs with <Link href="/study/japan/cost-of-living-in-japan-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">cost of living</Link>.</p>
</section>
<section id="money-and-banking" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Money and banking</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>The currency is the Japanese yen (JPY).</li><li>Cash is widely used, and cards are increasingly accepted.</li><li>Opening a bank account needs your residence card.</li><li>Transport IC cards simplify travel.</li></ul>
</section>
<section id="getting-help" className="mt-10 scroll-mt-4">
<h2 className="text-2xl font-bold text-emerald-900">Getting help</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>The international office is the first stop.</li><li>Save emergency numbers 110 and 119.</li><li>Keep copies of your passport and residence card.</li><li>Join student groups for peer support.</li></ul>
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
