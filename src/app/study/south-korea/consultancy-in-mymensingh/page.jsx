import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/south-korea/consultancy-in-mymensingh';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "South Korea Consultancy in Mymensingh 2026 | Eammu Holidays",
  "description": "Study in South Korea consultancy for Mymensingh students in 2026: easy access to Dhaka counseling, online support and visa preparation from Eammu Holidays.",
  "alternates": {
    "canonical": "https://eammu.com/study/south-korea/consultancy-in-mymensingh"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "South Korea Consultancy in Mymensingh 2026 | Eammu Holidays",
    "description": "Study in South Korea consultancy for Mymensingh students in 2026: easy access to Dhaka counseling, online support and visa preparation from Eammu Holidays.",
    "url": "https://eammu.com/study/south-korea/consultancy-in-mymensingh",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "South Korea Consultancy in Mymensingh 2026 | Eammu Holidays",
    "description": "Study in South Korea consultancy for Mymensingh students in 2026: easy access to Dhaka counseling, online support and visa preparation from Eammu Holidays."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "South Korea", "href": "/study/south-korea"}, {"name": "Mymensingh Consultancy", "href": "/study/south-korea/consultancy-in-mymensingh"}];
const NAV = [
  {
    "label": "South Korea Hub",
    "pages": [
      {
        "href": "/study/south-korea",
        "label": "Study in South Korea Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/south-korea/study-in-south-korea-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/south-korea/study-in-south-korea-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/south-korea/tuition-fees-in-south-korea-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/south-korea/cost-of-living-in-south-korea-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/south-korea/cheapest-universities-in-south-korea",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/south-korea/top-universities-in-south-korea",
        "label": "Top Universities"
      },
      {
        "href": "/study/south-korea/public-vs-private-universities-in-south-korea",
        "label": "National vs Private"
      },
      {
        "href": "/study/south-korea/scholarships-in-south-korea-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/south-korea/admission-requirements-in-south-korea-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/south-korea/study-gap-accepted-universities-in-south-korea",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/south-korea/study-in-south-korea-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/south-korea/study-in-south-korea-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/south-korea/south-korea-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/south-korea/gks-scholarship-in-south-korea-for-bangladeshi-students",
        "label": "GKS Scholarship"
      },
      {
        "href": "/study/south-korea/mba-in-south-korea-for-bangladeshi-students",
        "label": "MBA in South Korea"
      },
      {
        "href": "/study/south-korea/cse-and-it-courses-in-south-korea",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/south-korea/korean-language-course-and-topik-guide",
        "label": "Korean Language & TOPIK"
      },
      {
        "href": "/study/south-korea/student-accommodation-in-south-korea",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, COA & Work Rules",
    "pages": [
      {
        "href": "/study/south-korea/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/south-korea/certificate-of-admission-and-visa-process-guide",
        "label": "COA & Visa Process"
      },
      {
        "href": "/study/south-korea/bank-solvency-requirements-for-south-korea-student-visa",
        "label": "Bank Solvency"
      },
      {
        "href": "/study/south-korea/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/south-korea/part-time-job-and-post-study-work-rules-in-south-korea",
        "label": "Work Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/south-korea/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/south-korea/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/south-korea/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/south-korea/consultancy-in-dhaka",
    "title": "Study in South Korea Consultancy in Dhaka",
    "description": "Study in South Korea consultancy in Dhaka for 2026: free walk-in counseling, university shortlisting, GKS guidance and visa preparation from"
  },
  {
    "href": "/study/south-korea/consultancy-in-uttara-dhaka",
    "title": "Study in South Korea Consultancy for Uttara Students",
    "description": "Study in South Korea consultancy for Uttara, Dhaka students in 2026: counseling, scholarship guidance and visa preparation from Eammu Holida"
  },
  {
    "href": "/study/south-korea/south-korea-intake-dates",
    "title": "South Korea Intake Dates",
    "description": "Main intake months in South Korea and the best time for Bangladeshi students to start applications."
  },
  {
    "href": "/study/south-korea/certificate-of-admission-and-visa-process-guide",
    "title": "Certificate of Admission and Visa Process Guide",
    "description": "How the certificate of admission (COA) works and the typical stages from admission to visa issue in South Korea."
  }
];
const FAQS = [
  {
    "q": "Can I meet a counselor in Dhaka in one day?",
    "a": "Yes. A one-day trip is usually enough for an in-person session."
  },
  {
    "q": "Do you have a Mymensingh office?",
    "a": "No. We support Mymensingh students online and from Dhaka."
  },
  {
    "q": "Which universities suit agriculture or life-science students?",
    "a": "Several Korean universities have strong agricultural and life sciences. Ask us for a shortlist."
  },
  {
    "q": "Can I do everything online?",
    "a": "Most steps, yes. You may need to send some authenticated originals by courier."
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
          "name": "South Korea",
          "item": "https://eammu.com/study/south-korea"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Mymensingh Consultancy",
          "item": "https://eammu.com/study/south-korea/consultancy-in-mymensingh"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Study in South Korea Consultancy for Mymensingh Students (2026)",
      "description": "Study in South Korea consultancy for Mymensingh students in 2026: easy access to Dhaka counseling, online support and visa preparation from Eammu Holidays.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/south-korea/consultancy-in-mymensingh",
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
          "name": "Can I meet a counselor in Dhaka in one day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A one-day trip is usually enough for an in-person session."
          }
        },
        {
          "@type": "Question",
          "name": "Do you have a Mymensingh office?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We support Mymensingh students online and from Dhaka."
          }
        },
        {
          "@type": "Question",
          "name": "Which universities suit agriculture or life-science students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Several Korean universities have strong agricultural and life sciences. Ask us for a shortlist."
          }
        },
        {
          "@type": "Question",
          "name": "Can I do everything online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most steps, yes. You may need to send some authenticated originals by courier."
          }
        }
      ]
    },
    {
      "@type": [
        "EducationalOrganization",
        "LocalBusiness"
      ],
      "name": "Eammu Holidays",
      "url": "https://eammu.com/study/south-korea/consultancy-in-mymensingh",
      "telephone": "+8801631312525",
      "email": "info@eammu.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dhaka, Bangladesh",
        "addressLocality": "Dhaka",
        "addressCountry": "BD"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Mymensingh, Bangladesh"
      },
      "description": "Study in South Korea counseling, scholarship and student visa support for students in Mymensingh, Bangladesh."
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in South Korea 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Study in South Korea Consultancy for Mymensingh Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Mymensingh is close enough to Dhaka for a day trip, which makes combining online and in-person counseling practical.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in South Korea guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 South Korea guides</summary>
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
<h2 className="text-2xl font-bold text-emerald-900">A short trip to our Dhaka desk</h2>
<p className="mt-4 leading-7 text-slate-700">Mymensingh is a few hours from Dhaka by road or train, so many students attend one in-person session at <Link href="/study/south-korea/consultancy-in-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">our Dhaka counseling desk</Link> and handle the rest online. This hybrid model saves time and cost. For a full overview, see &#123;&#123;from-bd|studying in South Korea from Bangladesh&#125;&#125;.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">A university city with agricultural strengths</h2>
<p className="mt-4 leading-7 text-slate-700">Mymensingh’s agricultural and science student community includes many who want applied science, biotechnology or food-related study abroad. Check the <Link href="/study/south-korea/admission-requirements-in-south-korea-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">admission requirements</Link> and <Link href="/study/south-korea/top-universities-in-south-korea" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">top universities in South Korea</Link> for suitable institutions, and look at <Link href="/study/south-korea/gks-scholarship-in-south-korea-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the GKS scholarship</Link> for graduate funding.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Plan around your intake</h2>
<p className="mt-4 leading-7 text-slate-700">Because you can reach Dhaka for embassy or document tasks, you can plan efficiently around <Link href="/study/south-korea/south-korea-intake-dates" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">South Korea intake dates</Link>. We outline each stage of the <Link href="/study/south-korea/certificate-of-admission-and-visa-process-guide" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">certificate of admission and visa process</Link> so you know when to travel. For budgets, see <Link href="/study/south-korea/tuition-fees-in-south-korea-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">tuition fees</Link> and <Link href="/study/south-korea/cost-of-living-in-south-korea-for-bangladeshi-students" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">living costs</Link>.</p>
</section>
<section className="mt-10">
<h2 className="text-2xl font-bold text-emerald-900">Nearby Dhaka area</h2>
<p className="mt-4 leading-7 text-slate-700">Many Mymensingh students travel via Uttara; see <Link href="/study/south-korea/consultancy-in-uttara-dhaka" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">our Uttara guide</Link> or visit <Link href="/study/south-korea/bangladesh-offices" className="text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600">the offices page</Link>.</p>
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related South Korea Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in South Korea</h2>
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
