import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/russia/safety-and-scam-warning-for-students-in-russia';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Russia Safety and Scam Warning Guide 2026 | Eammu Holidays",
  "description": "Russia safety and scam warning for Bangladeshi students in 2026: war, sanctions, payment limits and recruitment traps, with practical steps to stay safe.",
  "alternates": {
    "canonical": "https://eammu.com/study/russia/safety-and-scam-warning-for-students-in-russia"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Russia Safety and Scam Warning Guide 2026 | Eammu Holidays",
    "description": "Russia safety and scam warning for Bangladeshi students in 2026: war, sanctions, payment limits and recruitment traps, with practical steps to stay safe.",
    "url": "https://eammu.com/study/russia/safety-and-scam-warning-for-students-in-russia",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Russia Safety and Scam Warning Guide 2026 | Eammu Holidays",
    "description": "Russia safety and scam warning for Bangladeshi students in 2026: war, sanctions, payment limits and recruitment traps, with practical steps to stay safe."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Russia", "href": "/study/russia"}, {"name": "Safety & Scam Warning", "href": "/study/russia/safety-and-scam-warning-for-students-in-russia"}];
const NAV = [
  {
    "label": "Russia Hub",
    "pages": [
      {
        "href": "/study/russia",
        "label": "Study in Russia Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/russia/safety-and-scam-warning-for-students-in-russia",
        "label": "Safety & Scam Warning"
      },
      {
        "href": "/study/russia/study-in-russia-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/russia/study-in-russia-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/russia/tuition-fees-in-russia-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/russia/cost-of-living-in-russia-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/russia/cheapest-universities-in-russia",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/russia/top-universities-in-russia",
        "label": "Top Universities"
      },
      {
        "href": "/study/russia/scholarships-in-russia-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/russia/admission-requirements-in-russia-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/russia/study-gap-accepted-universities-in-russia",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/russia/study-in-russia-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/russia/study-in-russia-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/russia/russia-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/russia/mbbs-in-russia-for-bangladeshi-students",
        "label": "MBBS in Russia"
      },
      {
        "href": "/study/russia/medical-degree-recognition-and-bmdc-guide-russia",
        "label": "Degree Recognition & BMDC"
      },
      {
        "href": "/study/russia/russian-language-preparatory-year-guide",
        "label": "Russian Language Year"
      },
      {
        "href": "/study/russia/cse-and-it-courses-in-russia",
        "label": "Engineering & IT Courses"
      },
      {
        "href": "/study/russia/student-accommodation-in-russia",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, Invitation & Work Rules",
    "pages": [
      {
        "href": "/study/russia/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/russia/invitation-letter-and-visa-process-guide-russia",
        "label": "Invitation Letter & Visa"
      },
      {
        "href": "/study/russia/bank-solvency-requirements-for-russia-student-visa",
        "label": "Bank Solvency & Payments"
      },
      {
        "href": "/study/russia/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/russia/part-time-job-and-post-study-work-rules-in-russia",
        "label": "Work Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/russia/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/russia/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/russia/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/russia/student-visa-requirements-bangladesh",
    "title": "Russia Student Visa Requirements for Bangladesh",
    "description": "Documents and steps for a Russian student visa from Bangladesh, including the invitation letter, HIV test, insurance and registration."
  },
  {
    "href": "/study/russia/part-time-job-and-post-study-work-rules-in-russia",
    "title": "Part-Time Job and Post-Study Work Rules in Russia",
    "description": "What international students may and may not do regarding work in Russia, and why work offers can be a recruitment trap."
  },
  {
    "href": "/study/russia/scholarships-in-russia-for-bangladeshi-students",
    "title": "Scholarships in Russia for Bangladeshi Students",
    "description": "How the Russian government scholarship quota works for Bangladeshi applicants: places, benefits, official portal and scam warnings."
  },
  {
    "href": "/study/russia/bank-solvency-requirements-for-russia-student-visa",
    "title": "Bank Solvency and Payment Guide for Russia Student Visa",
    "description": "How Bangladeshi families should plan funds proof, tuition payment and access to money for study in Russia under sanctions."
  }
];
const FAQS = [
  {
    "q": "Is Russia safe for students from Bangladesh?",
    "a": "It carries higher risks than most study destinations because of the war, sanctions and documented recruitment scams. Check the latest advice from the Bangladesh government before deciding."
  },
  {
    "q": "Can foreign students be recruited into the army?",
    "a": "Reports by human-rights groups say foreign students have been targeted by deceptive recruitment. Do not sign unfamiliar documents or accept work or contract offers."
  },
  {
    "q": "Can I use my Bangladeshi bank card in Russia?",
    "a": "International Visa and Mastercard cards do not work in Russia. Ask your bank and the university how payments and money access will work."
  },
  {
    "q": "What should I do if I feel unsafe?",
    "a": "Contact the Bangladesh Embassy in Moscow and your family immediately, keep your passport, and avoid any offer connected to work or military service."
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
          "name": "Russia",
          "item": "https://eammu.com/study/russia"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Safety & Scam Warning",
          "item": "https://eammu.com/study/russia/safety-and-scam-warning-for-students-in-russia"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Safety, Sanctions and Scam Warning for Bangladeshi Students in Russia",
      "description": "Russia safety and scam warning for Bangladeshi students in 2026: war, sanctions, payment limits and recruitment traps, with practical steps to stay safe.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/russia/safety-and-scam-warning-for-students-in-russia",
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
          "name": "Is Russia safe for students from Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It carries higher risks than most study destinations because of the war, sanctions and documented recruitment scams. Check the latest advice from the Bangladesh government before deciding."
          }
        },
        {
          "@type": "Question",
          "name": "Can foreign students be recruited into the army?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reports by human-rights groups say foreign students have been targeted by deceptive recruitment. Do not sign unfamiliar documents or accept work or contract offers."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use my Bangladeshi bank card in Russia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "International Visa and Mastercard cards do not work in Russia. Ask your bank and the university how payments and money access will work."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if I feel unsafe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact the Bangladesh Embassy in Moscow and your family immediately, keep your passport, and avoid any offer connected to work or military service."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Russia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Safety, Sanctions and Scam Warning for Bangladeshi Students in Russia</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Russia can offer cheap education, but the risks are real. Read this guide before you pay, sign or travel.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Russia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Russia guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">The situation in 2026</h2>
<p className="mt-4 leading-7 text-slate-700">Russia is at war with Ukraine and under wide international sanctions. The United States rates Russia at its highest warning level, and the United Kingdom and Australia also advise against all travel. International Visa and Mastercard cards do not work in Russia, Russia is cut off from the main international bank messaging system for many transactions, and drone and missile activity has affected some regions, especially near the Ukrainian border. Read the official advice of the Bangladesh Ministry of Foreign Affairs and the Bangladesh Embassy in Moscow, and check your own government&apos;s insurance and consular position.</p>
<p className="mt-4 leading-7 text-slate-700">Study is possible and many Bangladeshi students have studied in Russia, but you are accepting a higher risk than in most destinations. Compare it with &#123;&#123;from-bd|the full Russia roadmap&#125;&#125; and the <Link href="/study/russia/invitation-letter-and-visa-process-guide-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">invitation letter and visa process</Link>, and see the official free route in <Link href="/study/russia/scholarships-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Russia for Bangladeshi students</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Recruitment into the Russian military: what is documented</h2>
<p className="mt-4 leading-7 text-slate-700">Bangladesh&apos;s government, the United Nations, Amnesty International and human-rights groups have documented Bangladeshi men being lured to Russia with offers of civilian jobs and then pressured or forced into Russian military service. Reports in 2026 describe deaths, men who escaped, and Bangladeshi authorities cancelling the licences of recruiting agencies. Human-rights organisations say foreign students are among the groups targeted. The Bangladesh Embassy in Moscow has asked Russia to ensure Bangladeshis are not recruited.</p>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Never sign any paper in Russian that you cannot read or have not had independently translated.</li><li>Never accept a job, “contract”, security work or army-related offer, even if it is described as safe or well paid; see <Link href="/study/russia/part-time-job-and-post-study-work-rules-in-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">part-time job and post-study work rules in Russia</Link>.</li><li>Keep your passport and visa documents in your own possession at all times.</li><li>Tell your family your exact university, dormitory address and contact numbers, and register with the Bangladesh Embassy in Moscow if the embassy advises it.</li></ul>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Payments, scams and fake agents</h2>
<p className="mt-4 leading-7 text-slate-700">Sanctions make paying tuition and receiving money hard, so scammers and informal money channels appear. Pay only against an official university invoice, confirm the legal payment route with the university and your bank, and avoid informal transfer systems. Scholarship applications through the official portal are free, so never pay an agent for a “guaranteed” quota seat; see <Link href="/study/russia/scholarships-in-russia-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">scholarships in Russia for Bangladeshi students</Link>. Read <Link href="/study/russia/bank-solvency-requirements-for-russia-student-visa" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">bank solvency and payment guide</Link> for more.</p>
<p className="mt-4 leading-7 text-slate-700">Be careful with social media advertisements promising easy visas, no IELTS, or jobs. Check that the university is accredited and that the invitation letter is issued through the official Russian system.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Questions to ask before you commit</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700"><li>Which city is the university in, and how far is it from the border regions?</li><li>How exactly will I pay tuition and living costs, and who confirms the payment?</li><li>What will I do if my money transfers stop or my card does not work?</li><li>Who is my emergency contact in Russia and in Bangladesh?</li><li>Is my degree recognised in Bangladesh? See <Link href="/study/russia/medical-degree-recognition-and-bmdc-guide-russia" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the recognition guide</Link>.</li></ul>
<p className="mt-4 leading-7 text-slate-700">If you cannot answer these questions clearly, wait. Eammu Holidays can talk through your plan honestly at <Link href="/study/russia/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">our Dhaka counseling desk</Link>.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Russia Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Russia</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a free profile review, university shortlist, visa guidance and a realistic budget in BDT. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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
