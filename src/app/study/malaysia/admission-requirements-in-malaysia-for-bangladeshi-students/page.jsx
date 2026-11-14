import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students';
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

export const metadata = {
  "title": "Admission Requirements in Malaysia for Bangladeshi Students",
  "description": "Admission requirements in Malaysia for Bangladeshi students in 2026: SSC, HSC, diploma GPA, English proof and documents. Eammu Holidays application guide.",
  "alternates": {
    "canonical": "https://eammu.com/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Admission Requirements in Malaysia for Bangladeshi Students",
    "description": "Admission requirements in Malaysia for Bangladeshi students in 2026: SSC, HSC, diploma GPA, English proof and documents. Eammu Holidays application guide.",
    "url": "https://eammu.com/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students",
    "siteName": "Eammu Holidays",
    "type": "article",
    "locale": "en_BD"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Admission Requirements in Malaysia for Bangladeshi Students",
    "description": "Admission requirements in Malaysia for Bangladeshi students in 2026: SSC, HSC, diploma GPA, English proof and documents. Eammu Holidays application guide."
  }
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Malaysia", "href": "/study/malaysia"}, {"name": "Admission Requirements", "href": "/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students"}];
const NAV = [
  {
    "label": "Malaysia Hub",
    "pages": [
      {
        "href": "/study/malaysia",
        "label": "Study in Malaysia Hub"
      }
    ]
  },
  {
    "label": "Guides, Costs & Admission",
    "pages": [
      {
        "href": "/study/malaysia/study-in-malaysia-from-bangladesh",
        "label": "Study from Bangladesh"
      },
      {
        "href": "/study/malaysia/study-in-malaysia-without-ielts",
        "label": "Without IELTS"
      },
      {
        "href": "/study/malaysia/tuition-fees-in-malaysia-for-bangladeshi-students",
        "label": "Tuition Fees"
      },
      {
        "href": "/study/malaysia/cost-of-living-in-malaysia-for-bangladeshi-students",
        "label": "Cost of Living"
      },
      {
        "href": "/study/malaysia/cheapest-universities-in-malaysia",
        "label": "Cheapest Universities"
      },
      {
        "href": "/study/malaysia/top-universities-in-malaysia",
        "label": "Top Universities"
      },
      {
        "href": "/study/malaysia/public-vs-private-universities-in-malaysia",
        "label": "Public vs Private"
      },
      {
        "href": "/study/malaysia/scholarships-in-malaysia-for-bangladeshi-students",
        "label": "Scholarships"
      },
      {
        "href": "/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students",
        "label": "Admission Requirements"
      },
      {
        "href": "/study/malaysia/study-gap-accepted-universities-in-malaysia",
        "label": "Study Gap Accepted"
      },
      {
        "href": "/study/malaysia/study-in-malaysia-after-ssc",
        "label": "After SSC"
      },
      {
        "href": "/study/malaysia/study-in-malaysia-after-diploma",
        "label": "After Diploma"
      },
      {
        "href": "/study/malaysia/malaysia-intake-dates",
        "label": "Intake Dates"
      }
    ]
  },
  {
    "label": "Programs & Pathways",
    "pages": [
      {
        "href": "/study/malaysia/mbbs-in-malaysia-for-bangladeshi-students",
        "label": "MBBS in Malaysia"
      },
      {
        "href": "/study/malaysia/mba-in-malaysia-for-bangladeshi-students",
        "label": "MBA in Malaysia"
      },
      {
        "href": "/study/malaysia/cse-and-it-courses-in-malaysia",
        "label": "CSE & IT Courses"
      },
      {
        "href": "/study/malaysia/credit-transfer-from-malaysia-to-uk-australia",
        "label": "Credit Transfer to UK/Australia"
      },
      {
        "href": "/study/malaysia/student-accommodation-in-malaysia",
        "label": "Student Accommodation"
      }
    ]
  },
  {
    "label": "Visa, EMGS & Work Rules",
    "pages": [
      {
        "href": "/study/malaysia/student-visa-requirements-bangladesh",
        "label": "Student Visa Requirements"
      },
      {
        "href": "/study/malaysia/emgs-visa-process-and-tracking-guide",
        "label": "EMGS Process & Tracking"
      },
      {
        "href": "/study/malaysia/bank-solvency-requirements-for-malaysia-student-visa",
        "label": "Bank Solvency"
      },
      {
        "href": "/study/malaysia/student-visa-processing-time-and-cost",
        "label": "Visa Time & Cost"
      },
      {
        "href": "/study/malaysia/part-time-job-and-post-study-work-rules-in-malaysia",
        "label": "Work Rules"
      }
    ]
  },
  {
    "label": "Bangladesh Locations",
    "pages": [
      {
        "href": "/study/malaysia/bangladesh-offices",
        "label": "Bangladesh Offices & Support"
      },
      {
        "href": "/study/malaysia/consultancy-in-dhaka",
        "label": "Dhaka Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-uttara-dhaka",
        "label": "Uttara Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-dhanmondi-dhaka",
        "label": "Dhanmondi Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-mirpur-dhaka",
        "label": "Mirpur Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-chattogram",
        "label": "Chattogram Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-sylhet",
        "label": "Sylhet Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-rajshahi",
        "label": "Rajshahi Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-khulna",
        "label": "Khulna Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-barishal",
        "label": "Barishal Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-rangpur",
        "label": "Rangpur Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-mymensingh",
        "label": "Mymensingh Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-cumilla",
        "label": "Cumilla Consultancy"
      },
      {
        "href": "/study/malaysia/consultancy-in-bogura",
        "label": "Bogura Consultancy"
      }
    ]
  }
];
const RELATED = [
  {
    "href": "/study/malaysia/study-in-malaysia-without-ielts",
    "title": "Study in Malaysia Without IELTS",
    "description": "Learn how Bangladeshi students can enter Malaysian universities without IELTS using HSC English, internal tests or English bridging courses."
  },
  {
    "href": "/study/malaysia/study-gap-accepted-universities-in-malaysia",
    "title": "Study Gap Accepted Universities in Malaysia",
    "description": "How study gaps are treated by Malaysian universities and what documents explain a gap for Bangladeshi applicants."
  },
  {
    "href": "/study/malaysia/student-visa-requirements-bangladesh",
    "title": "Malaysia Student Visa Requirements for Bangladesh",
    "description": "Documents and steps needed for a Malaysian student visa from Bangladesh, including eVAL and student pass."
  },
  {
    "href": "/study/malaysia/malaysia-intake-dates",
    "title": "Malaysia Intake Dates",
    "description": "Main intake months in Malaysia and the best time for Bangladeshi students to start applications."
  }
];

const FAQS = [
  { q: "What are the admission requirements in Malaysia for Bangladeshi students?", a: "Requirements depend on the level. Foundation and diploma programmes usually ask for SSC (or equivalent), bachelor's programmes for HSC, Alim or a recognised diploma, and master's programmes for a recognised bachelor's degree. Most universities also ask for English proof, a valid passport and attested academic documents. Exact grades and subjects are set by each university and programme." },
  { q: "Can I study in Malaysia after SSC?", a: "Yes, but not usually in a bachelor's programme directly. SSC holders generally apply for foundation or diploma programmes, which can lead to a degree later. Eligibility, GPA and subject rules differ by university." },
  { q: "Can I study in Malaysia after HSC?", a: "Yes. HSC (or Alim or an equivalent 12-year qualification) is the usual route to bachelor's study. Some universities admit HSC students into Year 1 of selected programmes, while others ask for a foundation year, especially for engineering, medicine and health sciences." },
  { q: "What is the minimum GPA required?", a: "There is no single minimum GPA for all of Malaysia. Each university and programme sets its own rule, and subject grades often matter as much as the overall GPA. Check the official admission page of your chosen university or ask for an eligibility check before applying." },
  { q: "Can I apply with HSC GPA 2.50?", a: "It is possible at some private universities for some programmes, often with a foundation or diploma pathway, but it is not accepted everywhere. Competitive, science-based and health programmes usually ask for stronger results. Eligibility must be confirmed with the specific university." },
  { q: "Can I study in Malaysia with a diploma?", a: "Yes. A recognised diploma, including a BTEB Diploma in Engineering, can lead to bachelor's entry. Some universities may give credit transfer or advanced standing depending on your transcript and syllabus. The decision is made by each university." },
  { q: "Is IELTS compulsory?", a: "Not for every university. Many universities accept IELTS, TOEFL iBT or PTE Academic, while some accept previous English-medium study, an internal English test or a conditional offer with an English course. Medicine and some postgraduate programmes are usually stricter." },
  { q: "Can I apply without IELTS?", a: "Some universities do allow it, but no exemption can be guaranteed. It depends on the university, programme, your English grades and any internal test. See our guide on studying in Malaysia without IELTS for the options." },
  { q: "Can I study with a study gap?", a: "Often yes, if the gap is explained with evidence such as employment records, training certificates or family documents. Acceptance is not guaranteed and varies by university and programme." },
  { q: "Can I apply with an academic backlog?", a: "Some universities consider applicants with backlogs or retakes if the final transcript shows the qualification was completed. Others set stricter rules for specific subjects. Provide your final results and be honest about retakes." },
  { q: "Are Bangladeshi certificates accepted?", a: "Generally yes, when they come from recognised Bangladesh education boards, universities or BTEB. Universities and Malaysian authorities may still verify your documents or ask for extra evidence, so recognition for your exact qualification should be confirmed." },
  { q: "Do I need original academic certificates?", a: "Most universities accept scanned copies for the application stage but may ask to see originals or attested copies later, at the visa stage or at registration. Keep your original documents safe and ready." },
  { q: "Do I need to attest my academic documents?", a: "Often yes at some stage, but the exact attestation, translation or notarisation requirement depends on the university and EMGS. Do not assume every document needs the same certification; confirm the checklist before spending money." },
  { q: "How long does university admission take?", a: "It varies. A complete application may receive an offer within days or several weeks, depending on the university and intake season. Incomplete documents, interviews and tests can add time. This is separate from visa processing." },
  { q: "When should I apply for the next intake?", a: "Start preparing 4 to 6 months before the intake you want, especially if you need to collect attested documents, take an English test or complete an assessment. Intake months differ by university and course; see our intake dates guide." },
  { q: "Can I apply to Malaysian universities online?", a: "Yes. Most universities accept international applications through their online portal or international office, and an education consultant can submit on your behalf. Always make sure the application goes to the university's official channel." },
  { q: "What documents are needed for a bachelor's degree?", a: "Typically a passport, photographs, SSC and HSC certificates and transcripts, English proof, and sometimes a portfolio or test result for specific programmes. See the document checklist on this page for the full list." },
  { q: "What are the requirements for an MBA?", a: "Usually a recognised bachelor's degree, CV, English proof, and often work experience, a statement of purpose, references and an interview. Requirements differ by business school. See our MBA in Malaysia guide for more." },
  { q: "Can I change my course after receiving an offer?", a: "Sometimes, but it depends on the university's policy and the stage of your application. Changing after the visa process begins can be difficult, so choose your course carefully before accepting." },
  { q: "Does university admission guarantee a student visa?", a: "No. An offer letter is a university decision. The student visa is handled through the EMGS process and Malaysian immigration, which have their own requirements and decision. Neither Eammu Holidays nor any university can guarantee visa approval." }
];

const TOC = [
  ["overview", "Quick overview"], ["basic", "Basic eligibility"], ["ssc", "After SSC"], ["hsc", "After HSC"], ["diploma", "After diploma"],
  ["masters", "Master's and MBA"], ["phd", "PhD"], ["gpa", "GPA and CGPA"], ["english", "English requirements"], ["documents", "Document checklist"],
  ["courses", "Course requirements"], ["gap", "Study gap and backlogs"], ["public-private", "Public vs private"], ["intakes", "Intakes"],
  ["process", "Admission process"], ["rejection", "Why applications fail"], ["sources", "Sources"], ["faq", "FAQ"]
];

const COURSES = [
  { t: "MBBS / Medicine", d: "Among the strictest programmes. Expect strong HSC Biology, Chemistry and Physics results (or foundation/pre-university in science), higher English scores and often an interview or entrance test. Medical degrees must also meet Malaysian regulatory requirements.", href: "/study/malaysia/mbbs-in-malaysia-for-bangladeshi-students", l: "MBBS in Malaysia" },
  { t: "Engineering", d: "Mathematics and Physics matter most, with Chemistry required for some branches. HSC Science or a related diploma is the normal entry point. Engineering degrees accredited by the relevant professional body may carry stricter entry rules.", href: "/study/malaysia/top-universities-in-malaysia", l: "top universities in Malaysia" },
  { t: "Computer Science", d: "Mathematics is usually important. Commerce students may be able to enter through a foundation or diploma, depending on the university. Some programmes ask for a pass in Mathematics at a stated grade.", href: "/study/malaysia/cse-and-it-courses-in-malaysia", l: "CSE and IT courses in Malaysia" },
  { t: "Information Technology", d: "Often more flexible than Computer Science on subject background, but a basic maths or logic requirement may apply. Diploma-to-degree pathways are common." },
  { t: "Business Administration", d: "Open to science, commerce and humanities backgrounds at most universities. Some ask for a pass in Mathematics or English." },
  { t: "MBA", d: "Bachelor's degree, CV and English proof are standard. Work experience, interviews and references are common at many business schools.", href: "/study/malaysia/mba-in-malaysia-for-bangladeshi-students", l: "MBA in Malaysia" },
  { t: "Hospitality and Tourism", d: "Usually accessible from any HSC group or a diploma. English communication ability is assessed, and some programmes include interviews or internship requirements." },
  { t: "Nursing", d: "Science background (Biology and Chemistry) is usually preferred. Health programmes may need medical checks, interview and compliance with Malaysian professional-body requirements; confirm with the university." },
  { t: "Pharmacy", d: "Typically needs Chemistry and Biology, often with Mathematics or Physics, and higher English. Competitive programmes may use interviews." },
  { t: "Accounting and Finance", d: "Business or science students can apply in many cases. Mathematics at SSC or HSC level is commonly checked." },
  { t: "Architecture", d: "Mathematics, art or design ability and often a portfolio or aptitude test. Some universities ask for a design test or interview." },
  { t: "Biotechnology", d: "Biology and Chemistry are important, usually from HSC Science or a related diploma. Laboratory-based programmes may ask for stronger science grades." }
];

const DOCS = [
  ["Identity documents", ["Passport with sufficient validity (often 18 months or more; confirm with your university)", "Recent passport-size photographs (white background where specified)", "National ID or birth registration if requested"]],
  ["SSC (for foundation or diploma)", ["SSC certificate and academic transcript", "Admit card or registration card if requested"]],
  ["HSC / Alim (for bachelor's)", ["SSC and HSC certificates and transcripts", "Provisional certificate if the final certificate is not yet issued", "Subject-wise grade sheet for engineering, medicine, health programmes"]],
  ["Diploma", ["SSC certificate and transcript", "Diploma certificate and all semester transcripts (BTEB)", "Course syllabus or subject list for credit transfer"]],
  ["Bachelor's (for master's)", ["Bachelor's certificate, transcripts and provisional certificate", "Previous HSC and SSC documents", "CV, statement of purpose and recommendation letters", "Work experience letter for MBA or professional programmes"]],
  ["PhD", ["Master's certificate and transcripts", "Research proposal and CV", "Publication list if any", "Two academic references and supervisor communication"]],
  ["English proficiency", ["IELTS, TOEFL iBT, PTE or MUET result", "Medium of Instruction certificate or equivalent evidence where accepted"]],
  ["Programme-specific", ["Portfolio (architecture, design, creative programmes)", "Medical report or other health documents when requested", "Test or interview results where required"]]
];

const STEPS = [
  ["Choose a suitable course", "Compare courses, budget and career plans before choosing universities."],
  ["Check academic eligibility", "Match your SSC, HSC, diploma or degree results with the programme requirements."],
  ["Shortlist Malaysian universities", "Compare entry rules, English policy, fees, accreditation and intake dates."],
  ["Prepare documents", "Collect certificates, transcripts, passport, English proof and supporting documents."],
  ["Submit the application", "Apply through the university's official channel or with consultant support."],
  ["Receive an offer", "Universities issue conditional or unconditional offers, sometimes after a test or interview."],
  ["Pay the required deposit", "Pay only to the university's official account and keep receipts."],
  ["University starts the EMGS visa application", "The university submits the student visa application through the relevant EMGS process."],
  ["Complete medical and immigration steps", "Complete the medical screening and other procedures required for your case."],
  ["Receive approval and travel authorization", "Travel only after you receive the required approval documents."],
  ["Register at the university", "Report to the university, finish registration and complete the student pass process in Malaysia."]
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eammu.com" },
        { "@type": "ListItem", "position": 2, "name": "Study", "item": "https://eammu.com/study" },
        { "@type": "ListItem", "position": 3, "name": "Malaysia", "item": "https://eammu.com/study/malaysia" },
        { "@type": "ListItem", "position": 4, "name": "Admission Requirements", "item": "https://eammu.com/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students" }
      ]
    },
    {
      "@type": "Article",
      "headline": "Admission Requirements in Malaysia for Bangladeshi Students (2026)",
      "description": "Admission requirements in Malaysia for Bangladeshi students in 2026: SSC, HSC, diploma GPA, English proof and documents. Eammu Holidays application guide.",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
      "mainEntityOfPage": "https://eammu.com/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students",
      "author": { "@type": "Organization", "name": "Eammu Holidays" },
      "publisher": { "@type": "Organization", "name": "Eammu Holidays", "url": "https://eammu.com" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
    }
  ]
};

const linkClass = 'text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600';
const h2Class = 'scroll-mt-4 text-2xl font-bold text-emerald-900';
const h3Class = 'mt-6 text-lg font-bold text-emerald-900';
const pClass = 'mt-4 leading-7 text-slate-700';
const ulClass = 'mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700';

function L({ href, children }) {
  return <Link href={href} className={linkClass}>{children}</Link>;
}

function Table({ caption, head, rows }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200 bg-white">
      <table className="min-w-[36rem] w-full text-sm text-slate-700">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-emerald-900 text-white">
          <tr>{head.map((h) => <th key={h} scope="col" className="px-3 py-2 text-left font-bold">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="odd:bg-white even:bg-slate-50">
              {r.map((c, i) => i === 0
                ? <th key={i} scope="row" className="px-3 py-2 text-left align-top font-semibold text-emerald-900">{c}</th>
                : <td key={i} className="px-3 py-2 align-top">{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Note({ title, children }) {
  return (
    <div className="mt-5 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm leading-6 text-slate-800">
      <p className="font-bold text-emerald-900">{title}</p>
      <div className="mt-1">{children}</div>
    </div>
  );
}

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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-950">Study in Malaysia 2026</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Admission Requirements in Malaysia for Bangladeshi Students (2026)</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">A practical guide for students and parents in Bangladesh: what results, English proof and documents Malaysian universities usually ask for after SSC, HSC, diploma, bachelor&apos;s and master&apos;s.</p>
          <p className="mt-3 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Malaysia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Malaysia guides</summary>
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

        <div className="min-w-0">
          <nav aria-label="Table of contents" className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-emerald-900">On this page</p>
            <ul className="mt-3 grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2 xl:grid-cols-3">
              {TOC.map(([id, label]) => (
                <li key={id}><a href={`#${id}`} className="text-emerald-800 hover:underline">{label}</a></li>
              ))}
            </ul>
          </nav>

          <article>
            <section id="overview" className="mt-10">
              <h2 className={h2Class}>Admission requirements in Malaysia at a glance</h2>
              <p className={pClass}>Malaysian universities set their own admission rules. There is no single national checklist for every course, so the right answer depends on your qualification, your grades in key subjects, your English proof and the programme you choose. Students from Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Barishal, Rangpur, Mymensingh, Cumilla, Bogura and other districts all follow the same process; only your documents and academic record differ.</p>
              <Table caption="Typical entry route by Bangladeshi qualification" head={["Your qualification", "Usual next step in Malaysia", "What decides eligibility"]} rows={[
                ["SSC", "Foundation or diploma", "SSC results, subject group, university policy"],
                ["HSC / Alim", "Bachelor's (or foundation for some courses)", "HSC GPA, subject grades, English, programme rules"],
                ["Diploma in Engineering (BTEB)", "Bachelor's, possibly with credit transfer", "Diploma CGPA, syllabus match, university assessment"],
                ["Bachelor's degree", "Master's or MBA", "CGPA, field of study, English, experience"],
                ["Master's degree", "PhD or research programme", "Research proposal, supervisor, academic record"]
              ]} />
              <Note title="Check before you apply">The figures on this page are general guidance, not official university rules. Requirements for the 2026 to 2027 intakes can change, so confirm them with the official admission page of your chosen university or contact us for an eligibility check.</Note>
            </section>

            <section id="basic" className="mt-10">
              <h2 className={h2Class}>Basic eligibility for international students</h2>
              <p className={pClass}>Most Malaysian universities ask international applicants to meet four conditions: a recognised previous qualification, the academic grades for the chosen programme, acceptable English proof and a valid passport. Universities then submit the student visa application through <L href="/study/malaysia/emgs-visa-process-and-tracking-guide">the EMGS visa process</L>, which is separate from admission.</p>
              <h3 className={h3Class}>How Malaysian universities assess Bangladeshi qualifications</h3>
              <ul className={ulClass}>
                <li>They check that SSC, HSC, Alim, BTEB diploma and degree certificates come from recognised Bangladeshi boards, institutions or universities.</li>
                <li>They compare your qualification with the Malaysian level required for the course, and may verify documents at a later stage.</li>
                <li>They look at subject-wise grades, not only the overall GPA, particularly for engineering, medicine, nursing and pharmacy.</li>
                <li>Programme accreditation matters. Malaysian programmes are registered with the Malaysian Qualifications Agency (MQA), and you can check this before you apply.</li>
              </ul>
              <h3 className={h3Class}>University-specific and programme-specific rules</h3>
              <p className={pClass}>Two universities can ask for different grades for the same course, and one university can ask for different grades for different courses. Always compare the requirement for your exact programme and intake, and see our guide to <L href="/study/malaysia/study-in-malaysia-from-bangladesh">studying in Malaysia from Bangladesh</L> for the wider picture.</p>
            </section>

            <section id="ssc" className="mt-10">
              <h2 className={h2Class}>Admission requirements after SSC</h2>
              <p className={pClass}>Yes, SSC graduates can study in Malaysia, usually through a foundation or diploma programme rather than directly into a bachelor&apos;s degree. Some universities set a minimum SSC GPA, a pass in English or Mathematics, or a specific subject group. Our dedicated guide on <L href="/study/malaysia/study-in-malaysia-after-ssc">study in Malaysia after SSC</L> goes deeper.</p>
              <Table caption="Pathways available after SSC" head={["Pathway", "Who it suits", "Typical subject expectations", "Then what?"]} rows={[
                ["Foundation", "Students aiming for a bachelor's in science, engineering, IT or business", "Science foundation usually prefers science group and Mathematics; business foundation is more flexible", "Progress to a bachelor's at the same or a partner university"],
                ["Diploma", "Students who want a practical or career-focused route", "Varies by field; some accept any group", "Work, or progress to the final years of a bachelor's, depending on credit recognition"],
                ["Direct bachelor's", "Rarely available to SSC-only applicants", "Generally not accepted", "HSC or equivalent normally required"]
              ]} />
              <p className={pClass}>Foundation-to-bachelor progression is not always automatic. Some universities require you to meet a minimum result in the foundation programme before moving on, so check the progression rule before you enrol.</p>
            </section>

            <section id="hsc" className="mt-10">
              <h2 className={h2Class}>Admission requirements after HSC</h2>
              <p className={pClass}>HSC, Alim or an equivalent 12-year qualification is the usual route to a bachelor&apos;s degree in Malaysia. Many private universities accept Bangladeshi HSC applicants, though some ask for a foundation year for science-heavy courses. Public universities usually have more competitive intake processes.</p>
              <Table caption="HSC group and typical course options" head={["HSC group", "Often suitable for", "What to confirm"]} rows={[
                ["Science", "Engineering, IT, computer science, nursing, pharmacy, biotechnology, medicine, business", "Grades in Mathematics, Physics, Chemistry and Biology"],
                ["Business Studies", "Business, accounting, finance, hospitality, marketing; some IT and management programmes", "Whether Mathematics is required; foundation options for science courses"],
                ["Humanities", "Business, media, communication, hospitality, social science and some education programmes", "English and any programme-specific requirement"]
              ]} />
              <h3 className={h3Class}>Why subject grades matter</h3>
              <p className={pClass}>Mathematics supports engineering, computer science, accounting and finance. Physics matters for engineering and architecture-related science. Chemistry and Biology matter for medicine, pharmacy, nursing and biotechnology. A strong overall GPA with a weak result in a key subject may still be questioned.</p>
              <p className={pClass}>For Computer Science, IT, business, nursing, medicine and engineering, requirements vary widely. See our guides on <L href="/study/malaysia/cse-and-it-courses-in-malaysia">CSE and IT courses</L>, <L href="/study/malaysia/mbbs-in-malaysia-for-bangladeshi-students">MBBS in Malaysia</L> and <L href="/study/malaysia/top-universities-in-malaysia">top universities in Malaysia</L> to compare options.</p>
            </section>

            <section id="diploma" className="mt-10">
              <h2 className={h2Class}>Admission requirements after diploma</h2>
              <p className={pClass}>Bangladeshi Polytechnic and BTEB Diploma in Engineering holders can apply for related bachelor&apos;s programmes in Malaysia. A direct degree entry, credit transfer or advanced standing may be possible, but each university decides case by case. Read the full guide on <L href="/study/malaysia/study-in-malaysia-after-diploma">study in Malaysia after diploma</L>.</p>
              <ul className={ulClass}>
                <li>Universities usually compare your diploma subjects with their own curriculum.</li>
                <li>Prepare your full transcripts and the course syllabus or subject outline to support any credit request.</li>
                <li>Related fields (for example, a civil engineering diploma for a civil engineering degree) are assessed more favourably than unrelated fields.</li>
                <li>If you may later move abroad, see our guide on <L href="/study/malaysia/credit-transfer-from-malaysia-to-uk-australia">credit transfer from Malaysia to UK and Australia</L>.</li>
              </ul>
            </section>

            <section id="masters" className="mt-10">
              <h2 className={h2Class}>Admission requirements for master&apos;s degrees and MBA</h2>
              <p className={pClass}>Malaysian universities generally require a recognised bachelor&apos;s degree. Honours degrees from recognised universities are usually accepted; for degree-pass or National University degrees, check the specific rule. Minimum CGPA expectations are set by each faculty, and some accept lower CGPA with relevant work experience.</p>
              <Table caption="Master's, MBA and research admission differences" head={["Item", "Coursework master's", "Research master's", "MBA"]} rows={[
                ["Academic background", "Usually a related bachelor's; unrelated degrees may need bridging", "Related degree and research potential", "Any recognised degree at many schools"],
                ["Work experience", "Not always required", "Not always required", "Often required or preferred"],
                ["Supporting documents", "CV, SOP, references", "Research proposal, supervisor contact, references", "CV, SOP, references, experience letters"],
                ["Interview", "Sometimes", "Often", "Often"]
              ]} />
              <p className={pClass}>English proof is usually required, and some universities accept English-medium bachelor&apos;s study. For business programmes, see <L href="/study/malaysia/mba-in-malaysia-for-bangladeshi-students">MBA in Malaysia</L>.</p>
            </section>

            <section id="phd" className="mt-10">
              <h2 className={h2Class}>Admission requirements for PhD</h2>
              <ul className={ulClass}>
                <li><strong>Master&apos;s degree:</strong> A recognised master&apos;s degree is the usual entry route. Some universities allow direct entry from an outstanding bachelor&apos;s degree.</li>
                <li><strong>Research proposal:</strong> A clear problem statement, objectives, methodology and relevance.</li>
                <li><strong>Supervisor:</strong> Many universities expect you to find a supervisor whose research matches yours before or during the application.</li>
                <li><strong>Publications:</strong> Helpful where applicable, but not always required.</li>
                <li><strong>English proficiency:</strong> Usually required, at a higher level than for undergraduate programmes at some universities.</li>
                <li><strong>Interview and approval:</strong> Often an interview and faculty or committee approval.</li>
              </ul>
            </section>

            <section id="gpa" className="mt-10">
              <h2 className={h2Class}>Minimum GPA and CGPA requirements</h2>
              <p className={pClass}>Students often ask for a single minimum GPA number. There is none. The table below shows the kind of results students commonly ask about, not a rule from any university or the government. Some universities accept lower or require higher results depending on the programme and subject grades.</p>
              <Table caption="Indicative guidance on results by level of study" head={["Level", "Qualification used", "Indicative guidance", "What really decides"]} rows={[
                ["Foundation", "SSC", "Often seen from around 2.5 to 3.0 GPA; stronger for science", "University policy, subjects, English"],
                ["Diploma", "SSC", "Often seen from around 2.5 to 3.0 GPA", "Programme rules and subject group"],
                ["Bachelor's", "HSC / Alim / diploma", "Often seen from around 3.0 to 3.5 GPA; competitive courses higher", "Subject grades, programme, university"],
                ["Master's", "Bachelor's", "Often seen from around 2.5 to 3.0 CGPA; some require more", "Field, CGPA, experience, English"],
                ["MBA", "Bachelor's", "Varies; experience may offset a lower CGPA", "Experience, interview, school policy"],
                ["PhD", "Master's", "No fixed number; strong academic record and proposal", "Proposal, supervisor, faculty approval"]
              ]} />
              <Note title="Typical guidance is not an official rule">Treat these ranges as a starting point only. Always check the official requirement page of the university and programme. Academic equivalency of your result is assessed by the university and, where relevant, Malaysian authorities. Bangladesh GPA is on a 5.00 scale, while some Malaysian universities may convert it.</Note>
            </section>

            <section id="english" className="mt-10">
              <h2 className={h2Class}>English language requirements</h2>
              <p className={pClass}>IELTS is not compulsory for every Malaysian university. Many universities accept alternatives, though the requirement depends on the programme and level. Medicine, nursing and many postgraduate programmes are typically stricter.</p>
              <Table caption="English proof options accepted by Malaysian universities" head={["Option", "How it is used", "Notes"]} rows={[
                ["IELTS Academic", "Most widely accepted English test", "Required score depends on level and programme"],
                ["TOEFL iBT", "Accepted at many universities", "Check the minimum score on the university page"],
                ["PTE Academic", "Accepted at many universities", "Confirm acceptance before booking"],
                ["MUET", "Malaysian test; used mostly by local applicants", "Not typical for Bangladeshi applicants"],
                ["University English test", "Internal placement or proficiency test", "May lead to an English course if needed"],
                ["Previous English-medium study / MOI certificate", "Accepted by some universities", "University decides; not guaranteed"],
                ["Conditional admission with English course", "Offer is conditional on completing English preparation", "Adds time and cost"]
              ]} />
              <p className={pClass}>Possible IELTS waivers depend on the university, your HSC English grade, your programme and any internal test. No waiver can be promised. Read our guide on <L href="/study/malaysia/study-in-malaysia-without-ielts">studying in Malaysia without IELTS</L> before deciding to skip the test.</p>
            </section>

            <section id="documents" className="mt-10">
              <h2 className={h2Class}>Required documents for Bangladeshi students</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {DOCS.map(([title, items]) => (
                  <div key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="text-base font-bold text-emerald-900">{title}</h3>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                      {items.map((it) => <li key={it}>{it}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <h3 className={h3Class}>Translation, notarisation and attestation</h3>
              <p className={pClass}>Documents in English usually need no translation. Documents in Bangla may need an official translation. Attestation by the education board, university, Ministry of Foreign Affairs or a Malaysian representative is requested in some cases, but not always for the same documents or at the same stage. Ask the university what it needs at the application stage and what EMGS needs later, so you avoid paying for unnecessary attestation. Funds evidence is a separate step, covered in our guide to <L href="/study/malaysia/bank-solvency-requirements-for-malaysia-student-visa">bank solvency requirements</L>.</p>
            </section>

            <section id="courses" className="mt-10">
              <h2 className={h2Class}>Admission requirements for different courses</h2>
              <p className={pClass}>Course requirements follow the subject you plan to study. Use the cards below to see which HSC subjects and additional assessments usually matter.</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {COURSES.map((c) => (
                  <div key={c.t} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="text-base font-bold text-emerald-900">{c.t}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{c.d}</p>
                    {c.href && <p className="mt-2 text-sm">Read more: <L href={c.href}>{c.l}</L></p>}
                  </div>
                ))}
              </div>
              <p className={pClass}>Compare costs for your chosen course in our <L href="/study/malaysia/tuition-fees-in-malaysia-for-bangladeshi-students">tuition fees guide</L> and look at <L href="/study/malaysia/cheapest-universities-in-malaysia">cheapest universities in Malaysia</L> if budget matters.</p>
            </section>

            <section id="gap" className="mt-10">
              <h2 className={h2Class}>Study gap and academic backlogs</h2>
              <p className={pClass}>Many Malaysian universities consider applicants with a study gap, but acceptance is not guaranteed and depends on the university, the course and the length and explanation of the gap. See <L href="/study/malaysia/study-gap-accepted-universities-in-malaysia">study gap accepted universities in Malaysia</L> for more.</p>
              <ul className={ulClass}>
                <li><strong>Employment or business:</strong> experience letter, trade licence, tax or bank evidence.</li>
                <li><strong>Professional training:</strong> certificates for courses, IT training or language learning.</li>
                <li><strong>Family or health reasons:</strong> a truthful statement with supporting documents.</li>
                <li><strong>Backlogs or retakes:</strong> provide your final result sheet and be honest about retakes. Some universities check specific subjects more closely.</li>
              </ul>
              <p className={pClass}>Write a short, honest explanation in your statement of purpose and attach evidence. Never submit false documents; this can lead to rejection and visa problems.</p>
            </section>

            <section id="public-private" className="mt-10">
              <h2 className={h2Class}>Public vs private university requirements</h2>
              <Table caption="Public and private university admission comparison" head={["Factor", "Public universities", "Private universities"]} rows={[
                ["Academic eligibility", "Often stricter and more competitive", "Wider range of entry levels"],
                ["Competition", "Higher for popular programmes", "Varies; high for medicine and health"],
                ["English requirements", "Usually formal English proof", "More options, including internal tests"],
                ["Deadlines", "Often fixed and earlier", "More intakes and flexible dates"],
                ["Programme availability", "Strong in research and engineering", "Broad, including foundation and diploma"],
                ["Assessments", "Interviews or tests are common", "Depends on programme"],
                ["Application procedure", "Through the university's international office or portal", "Direct or through authorised representatives"]
              ]} />
              <p className={pClass}>Read more in our guide to <L href="/study/malaysia/public-vs-private-universities-in-malaysia">public vs private universities in Malaysia</L> and check <L href="/study/malaysia/scholarships-in-malaysia-for-bangladeshi-students">scholarships</L> that may have their own criteria.</p>
            </section>

            <section id="intakes" className="mt-10">
              <h2 className={h2Class}>Malaysia admission intakes</h2>
              <Table caption="Common intake months in Malaysia" head={["Intake", "Typical months", "Notes"]} rows={[
                ["Main intake 1", "February or March", "Common for many programmes"],
                ["Main intake 2", "May or June", "Offered by many private universities"],
                ["Main intake 3", "September or October", "Popular among international students"],
                ["Other", "Varies", "Some universities have additional monthly intakes"]
              ]} />
              <p className={pClass}>Intake months differ by university and course. Begin preparing about 4 to 6 months before the intake, especially if you need attested documents or an English test. See <L href="/study/malaysia/malaysia-intake-dates">Malaysia intake dates</L> for details.</p>
            </section>

            <section id="process" className="mt-10">
              <h2 className={h2Class}>Admission process: Bangladesh to Malaysia</h2>
              <ol className="mt-5 space-y-3">
                {STEPS.map(([t, d], i) => (
                  <li key={t} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-emerald-950">{i + 1}</span>
                    <div>
                      <h3 className="text-base font-bold text-emerald-900">{t}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-700">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <Note title="Admission is not the same as a visa">An offer letter means the university accepts you academically. Your student visa is a separate decision through the EMGS and immigration process. Read <L href="/study/malaysia/student-visa-requirements-bangladesh">student visa requirements for Bangladesh</L>, check <L href="/study/malaysia/student-visa-processing-time-and-cost">visa time and cost</L> and prepare for <L href="/study/malaysia/part-time-job-and-post-study-work-rules-in-malaysia">work rules</L> and <L href="/study/malaysia/student-accommodation-in-malaysia">accommodation</L> and <L href="/study/malaysia/cost-of-living-in-malaysia-for-bangladeshi-students">cost of living</L>.</Note>
            </section>

            <section id="rejection" className="mt-10">
              <h2 className={h2Class}>Common reasons for admission rejection</h2>
              <ul className={ulClass}>
                <li>Incomplete documents or missing supporting documents.</li>
                <li>Incorrect academic information or mismatched names and dates.</li>
                <li>Qualification not recognised for the chosen level.</li>
                <li>Results below the programme requirement.</li>
                <li>Missing subject prerequisites, such as Mathematics or Chemistry.</li>
                <li>English proof that the university does not accept.</li>
                <li>Limited seats in the programme or intake.</li>
                <li>Unexplained study gaps.</li>
              </ul>
              <p className={pClass}>To reduce the risk, check eligibility before applying, keep documents consistent with your passport, apply early, explain gaps clearly and have a backup university and course.</p>
            </section>

            <section id="sources" className="mt-10">
              <h2 className={h2Class}>Sources and verification</h2>
              <p className={pClass}>Use official sources to verify any requirement before you pay or apply:</p>
              <ul className={ulClass}>
                <li><a href="https://www.emgs.com.my" target="_blank" rel="noopener noreferrer" className={linkClass}>Education Malaysia Global Services (EMGS)</a> for student visa procedures.</li>
                <li><a href="https://www.mqa.gov.my" target="_blank" rel="noopener noreferrer" className={linkClass}>Malaysian Qualifications Agency (MQA)</a> to check programme accreditation.</li>
                <li><a href="https://www.mohe.gov.my" target="_blank" rel="noopener noreferrer" className={linkClass}>Malaysian Ministry of Higher Education</a> for higher education policy.</li>
                <li>The official admission page of each university for programme-specific requirements.</li>
              </ul>
              <p className={pClass}>Where 2027 requirements have not been published, confirm the upcoming intake information directly with the university.</p>
            </section>
          </article>

          <section id="faq" className="mt-14 scroll-mt-4" aria-labelledby="faq-heading">
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
            <h2 id="related-heading" className="text-2xl font-bold text-emerald-900">Related Malaysia Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Talk to {AGENCY.name} About Studying in Malaysia</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get a student profile assessment, course and university selection, admission eligibility check, application document guidance, university application assistance and EMGS application guidance. We do not guarantee admission or visa approval. Walk in at our Dhaka desk or apply online from anywhere in Bangladesh.</p>
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