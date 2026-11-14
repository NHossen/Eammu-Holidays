import Link from 'next/link';

// Self-contained page: metadata, content, internal links, FAQ, CTA and JSON-LD all live in this file.
const SITE_URL = 'https://eammu.com';
const PAGE_HREF = '/study/malaysia/consultancy-in-cumilla';
const PAGE_URL = `${SITE_URL}${PAGE_HREF}`;
const AGENCY = { name: 'Eammu Holidays', phone: '+8801631312525', email: 'info@eammu.com', address: 'Dhaka, Bangladesh' };

const TITLE = 'Malaysia Study Consultancy in Cumilla | Eammu Holidays';
const DESC = 'Looking to study in Malaysia from Cumilla? Get university selection, admission application, document preparation and EMGS student visa guidance from Eammu Holidays.';

export const metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'Malaysia Study Consultancy in Cumilla',
    'Study in Malaysia consultancy in Cumilla',
    'Malaysia education consultancy Cumilla',
    'Malaysia student visa consultancy Cumilla',
    'Study in Malaysia from Cumilla',
    'Malaysia university admission from Cumilla',
    'study abroad consultancy Cumilla',
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESC, url: PAGE_URL, siteName: 'Eammu Holidays', type: 'article', locale: 'en_BD' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
};

const BREADCRUMBS = [{"name": "Home", "href": "/"}, {"name": "Study", "href": "/study"}, {"name": "Malaysia", "href": "/study/malaysia"}, {"name": "Cumilla Consultancy", "href": "/study/malaysia/consultancy-in-cumilla"}];
const NAV = [
  { label: 'Malaysia Hub', pages: [{ href: '/study/malaysia', label: 'Study in Malaysia Hub' }] },
  {
    label: 'Guides, Costs & Admission',
    pages: [
      { href: '/study/malaysia/study-in-malaysia-from-bangladesh', label: 'Study from Bangladesh' },
      { href: '/study/malaysia/study-in-malaysia-without-ielts', label: 'Without IELTS' },
      { href: '/study/malaysia/tuition-fees-in-malaysia-for-bangladeshi-students', label: 'Tuition Fees' },
      { href: '/study/malaysia/cost-of-living-in-malaysia-for-bangladeshi-students', label: 'Cost of Living' },
      { href: '/study/malaysia/cheapest-universities-in-malaysia', label: 'Cheapest Universities' },
      { href: '/study/malaysia/top-universities-in-malaysia', label: 'Top Universities' },
      { href: '/study/malaysia/public-vs-private-universities-in-malaysia', label: 'Public vs Private' },
      { href: '/study/malaysia/scholarships-in-malaysia-for-bangladeshi-students', label: 'Scholarships' },
      { href: '/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students', label: 'Admission Requirements' },
      { href: '/study/malaysia/study-gap-accepted-universities-in-malaysia', label: 'Study Gap Accepted' },
      { href: '/study/malaysia/study-in-malaysia-after-ssc', label: 'After SSC' },
      { href: '/study/malaysia/study-in-malaysia-after-diploma', label: 'After Diploma' },
      { href: '/study/malaysia/malaysia-intake-dates', label: 'Intake Dates' },
    ],
  },
  {
    label: 'Programs & Pathways',
    pages: [
      { href: '/study/malaysia/mbbs-in-malaysia-for-bangladeshi-students', label: 'MBBS in Malaysia' },
      { href: '/study/malaysia/mba-in-malaysia-for-bangladeshi-students', label: 'MBA in Malaysia' },
      { href: '/study/malaysia/cse-and-it-courses-in-malaysia', label: 'CSE & IT Courses' },
      { href: '/study/malaysia/credit-transfer-from-malaysia-to-uk-australia', label: 'Credit Transfer to UK/Australia' },
      { href: '/study/malaysia/student-accommodation-in-malaysia', label: 'Student Accommodation' },
    ],
  },
  {
    label: 'Visa, EMGS & Work Rules',
    pages: [
      { href: '/study/malaysia/student-visa-requirements-bangladesh', label: 'Student Visa Requirements' },
      { href: '/study/malaysia/emgs-visa-process-and-tracking-guide', label: 'EMGS Process & Tracking' },
      { href: '/study/malaysia/bank-solvency-requirements-for-malaysia-student-visa', label: 'Bank Solvency' },
      { href: '/study/malaysia/student-visa-processing-time-and-cost', label: 'Visa Time & Cost' },
      { href: '/study/malaysia/part-time-job-and-post-study-work-rules-in-malaysia', label: 'Work Rules' },
    ],
  },
  {
    label: 'Bangladesh Locations',
    pages: [
      { href: '/study/malaysia/bangladesh-offices', label: 'Bangladesh Offices & Support' },
      { href: '/study/malaysia/consultancy-in-dhaka', label: 'Dhaka Consultancy' },
      { href: '/study/malaysia/consultancy-in-uttara-dhaka', label: 'Uttara Consultancy' },
      { href: '/study/malaysia/consultancy-in-dhanmondi-dhaka', label: 'Dhanmondi Consultancy' },
      { href: '/study/malaysia/consultancy-in-mirpur-dhaka', label: 'Mirpur Consultancy' },
      { href: '/study/malaysia/consultancy-in-chattogram', label: 'Chattogram Consultancy' },
      { href: '/study/malaysia/consultancy-in-sylhet', label: 'Sylhet Consultancy' },
      { href: '/study/malaysia/consultancy-in-rajshahi', label: 'Rajshahi Consultancy' },
      { href: '/study/malaysia/consultancy-in-khulna', label: 'Khulna Consultancy' },
      { href: '/study/malaysia/consultancy-in-barishal', label: 'Barishal Consultancy' },
      { href: '/study/malaysia/consultancy-in-rangpur', label: 'Rangpur Consultancy' },
      { href: '/study/malaysia/consultancy-in-mymensingh', label: 'Mymensingh Consultancy' },
      { href: '/study/malaysia/consultancy-in-cumilla', label: 'Cumilla Consultancy' },
      { href: '/study/malaysia/consultancy-in-bogura', label: 'Bogura Consultancy' },
    ],
  },
];
const RELATED = [
  { href: '/study/malaysia/consultancy-in-dhaka', title: 'Dhaka Consultancy', description: 'Study in Malaysia consultancy in Dhaka for 2026: free counseling, university shortlisting, EMGS support and visa guidance from Eammu Holidays.' },
  { href: '/study/malaysia/consultancy-in-chattogram', title: 'Chattogram Consultancy', description: 'Study in Malaysia consultancy for Chattogram students in 2026: online counseling, courier document support, EMGS and visa guidance from Eammu Holidays.' },
  { href: '/study/malaysia/student-visa-requirements-bangladesh', title: 'Malaysia Student Visa Requirements for Bangladesh', description: 'Documents and steps needed for a Malaysian student visa from Bangladesh, including eVAL and student pass.' },
  { href: '/study/malaysia/tuition-fees-in-malaysia-for-bangladeshi-students', title: 'Tuition Fees in Malaysia for Bangladeshi Students', description: 'Realistic tuition ranges in MYR and BDT for foundation, diploma, bachelor’s and master’s programmes in Malaysia.' },
  { href: '/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students', title: 'Admission Requirements for Bangladeshi Students', description: 'Academic, English and document requirements to check before applying to a Malaysian university.' },
  { href: '/study/malaysia/emgs-visa-process-and-tracking-guide', title: 'EMGS Visa Process and Tracking Guide', description: 'How the EMGS student visa application works and how to track its progress.' },
];

const FAQS = [
  { q: 'Which consultancy can help Cumilla students study in Malaysia?', a: 'Several agencies advise Bangladeshi students, so compare them carefully. Eammu Holidays supports students from Cumilla with university and course selection, application and document guidance, and EMGS student visa guidance. Whichever consultancy you choose, ask for written service details and fees, and confirm offers directly with the university.' },
  { q: 'Does Eammu Holidays provide Malaysia study counseling for Cumilla students?', a: 'Yes. Students and parents from Cumilla can enquire by WhatsApp, phone or email at +8801631312525 or info@eammu.com. Counseling covers profile assessment, eligibility, university shortlisting, application steps and the visa process. Admission and visa decisions are made by universities and Malaysian authorities, not by us.' },
  { q: 'Does Eammu Holidays have a physical office in Cumilla?', a: 'Our listed business address is Dhaka, Bangladesh. We serve students from Cumilla mainly through online counseling. We do not advertise a walk-in office or opening hours for Cumilla. If you would like to meet in person, please call +8801631312525 first to ask whether a meeting can be arranged.' },
  { q: 'Can students from Cumilla apply to Malaysian universities online?', a: 'Generally yes. Most Malaysian universities accept applications with scanned documents, so a student in Cumilla can start online. Some steps, such as certified copies, original-document checks, the medical examination and arrival formalities, may require physical action. We explain each of these before you need them.' },
  { q: 'Can I apply to Malaysia after HSC from Cumilla?', a: 'Yes. HSC graduates can usually apply for bachelor’s degrees or foundation programmes, depending on group (Science, Business Studies or Humanities), results and the course. Some courses, such as engineering, computing or health programmes, have subject prerequisites. Requirements differ by university, so we check your transcript against each shortlisted programme.' },
  { q: 'Can I study in Malaysia after SSC?', a: 'Yes, SSC students commonly look at foundation or diploma programmes, which can lead to a bachelor’s degree later. Eligibility depends on the university and the programme level, so your results and subjects will be checked. Our After SSC guide explains the pathways in more detail.' },
  { q: 'Can diploma students from Cumilla apply?', a: 'Yes. Polytechnic and BTEB diploma holders can apply to relevant bachelor’s programmes, and some universities may consider credit transfer. Credit exemption is decided case by case by the university, so it should never be assumed before you receive written confirmation.' },
  { q: 'Is IELTS mandatory for Malaysian universities?', a: 'Not always. Many universities accept IELTS, but some accept other English tests or consider your English-medium study history, and some may offer English-support options. Requirements vary by university and programme, and the visa rules can differ too. We check the current requirement for each university on your shortlist.' },
  { q: 'How much does it cost to study in Malaysia?', a: 'Costs depend on the university, programme level and your lifestyle. They include application fees, tuition, EMGS and visa-related charges, medical checks, insurance, accommodation, food, transport and air tickets. Fees are quoted in MYR, so the BDT amount changes with the exchange rate. Always get a current fee schedule from the university.' },
  { q: 'What is the minimum GPA required?', a: 'There is no single minimum GPA for all of Malaysia. Each university and programme sets its own academic requirements, and competitive or professional courses are usually stricter. Share your SSC, HSC, diploma or degree results and we will compare them with the published requirements of suitable programmes.' },
  { q: 'Can students with study gaps apply?', a: 'Some universities consider applicants with study gaps, especially with a clear explanation and supporting documents such as employment records, training certificates or a written statement. Acceptance is decided by the university and is not guaranteed. See our guide on gap-accepted universities in Malaysia.' },
  { q: 'Which Malaysian universities accept international students?', a: 'Both public and private universities in Malaysia accept international students, though intake size, fees and entry rules differ. Private universities and branch campuses often have more international programmes, while public universities may have different admission processes. Check each university’s official website and our guides on top, cheapest and public vs private universities.' },
  { q: 'How can I apply for a Malaysia student visa?', a: 'In general, you first receive an offer from a Malaysian institution, and then the visa application is submitted through the EMGS system, usually by the institution. You will need documents such as your passport, academic records and financial evidence. Requirements can change, so check our student visa requirements guide and official EMGS information.' },
  { q: 'What is the EMGS process?', a: 'EMGS (Education Malaysia Global Services) handles the student visa application process for international students at many Malaysian institutions. In outline, the institution submits your application, you may need a medical check, you receive visa approval information, and you complete entry and registration formalities. Our EMGS process and tracking guide covers the details.' },
  { q: 'Can my parents join counseling?', a: 'Yes. Parents and guardians are welcome to join WhatsApp, phone or video counseling sessions. Including your family early helps everyone understand the budget, the course options and the documents needed before applications begin.' },
  { q: 'Do I need to travel to Dhaka for initial counseling?', a: 'No, not necessarily. An initial consultation, profile review and university shortlisting can be done online from Cumilla. You may need to travel to Dhaka or elsewhere for certain procedures, such as a medical examination or document-related steps, but we will tell you when this is applicable.' },
  { q: 'Which documents are required?', a: 'Typically a valid passport, academic transcripts and certificates, passport-size photographs, proof of English proficiency where required, and a CV or statement of purpose for some programmes. For the visa stage, financial documents and a medical report may also be needed. The exact list depends on the university and the programme.' },
  { q: 'When should I apply for a Malaysian university intake?', a: 'Start at least several months before your preferred intake, because document preparation, offers, payments and the visa process all take time. Intake months vary by university and programme, so check the current dates in our intake guide and on university websites. Early enquiries help you avoid last-minute pressure.' },
];

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: BREADCRUMBS.map((b, i) => ({ '@type': 'ListItem', position: i + 1, name: b.name, item: b.href === '/' ? SITE_URL : `${SITE_URL}${b.href}` })),
    },
    {
      '@type': 'Article',
      headline: 'Malaysia Study Consultancy in Cumilla: Study in Malaysia from Cumilla',
      description: DESC,
      inLanguage: 'en',
      datePublished: '2026-11-14',
      dateModified: '2026-11-14',
      mainEntityOfPage: PAGE_URL,
      author: { '@type': 'Organization', name: AGENCY.name },
      publisher: { '@type': 'Organization', name: AGENCY.name, url: SITE_URL },
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: AGENCY.name,
      url: SITE_URL,
      telephone: AGENCY.phone,
      email: AGENCY.email,
      address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Cumilla District, Bangladesh' },
      description: 'Study in Malaysia counseling, university application guidance and EMGS student visa guidance for students in Cumilla, Bangladesh.',
    },
  ],
};

const AREAS = ['Cumilla City', 'Kandirpar', 'Jhautola', 'Shashongacha', 'Racecourse', 'Kotbari', 'Cantonment area', 'Paduar Bazar', 'Daudkandi', 'Chandina', 'Burichang', 'Brahmanpara', 'Debidwar', 'Muradnagar', 'Homna', 'Titas', 'Meghna', 'Chauddagram', 'Nangalkot', 'Laksam', 'Barura', 'Monohorgonj'];

const SERVICES = [
  ['Student profile assessment', 'We review your goals, results, budget and timeline.'],
  ['Academic qualification review', 'SSC, HSC, diploma or degree results checked against entry rules.'],
  ['University selection', 'A shortlist matched to your profile and budget.'],
  ['Course selection', 'Programme options by level, field and career goal.'],
  ['Eligibility checking', 'Subject, grade and English requirements compared.'],
  ['Tuition fee information', 'Fee details gathered from official university sources.'],
  ['Application guidance', 'Help completing and submitting applications.'],
  ['Academic document preparation', 'Guidance on transcripts, certificates and scans.'],
  ['IELTS and English guidance', 'What each university accepts and your options.'],
  ['Offer letter guidance', 'Understanding conditions and next steps.'],
  ['Student visa documentation', 'Checklist and preparation for the visa stage.'],
  ['EMGS process guidance', 'Explaining each stage of the EMGS application.'],
  ['Medical and immigration guidance', 'What to expect and when to act.'],
  ['Pre-departure preparation', 'Travel, arrival and settling-in guidance.'],
  ['Accommodation guidance', 'Student housing options explained.'],
];

const BACKGROUNDS = [
  ['SSC students', 'Foundation or diploma programmes are the usual starting points, with progression to a bachelor’s degree afterwards. Eligibility depends on your results and subjects.', '/study/malaysia/study-in-malaysia-after-ssc', 'Study in Malaysia after SSC'],
  ['HSC students', 'Science, Business Studies and Humanities graduates can look at bachelor’s or foundation programmes. Some courses need specific subject backgrounds, such as mathematics for engineering or computing.', '/study/malaysia/admission-requirements-in-malaysia-for-bangladeshi-students', 'Admission requirements'],
  ['Diploma students', 'Polytechnic and BTEB diploma holders may apply to related bachelor’s degrees. Credit transfer is decided by each university and must be confirmed in writing.', '/study/malaysia/study-in-malaysia-after-diploma', 'Study in Malaysia after diploma'],
  ['Bachelor’s graduates', 'Graduates can explore master’s degrees, the MBA and other postgraduate programmes, subject to academic records and university rules.', '/study/malaysia/mba-in-malaysia-for-bangladeshi-students', 'MBA in Malaysia'],
  ['Students with study gaps', 'Be ready to explain the gap honestly and support it with employment records, training or other documents. Each university assesses gaps independently.', '/study/malaysia/study-gap-accepted-universities-in-malaysia', 'Gap-accepted universities'],
];

const COMPARE = [
  ['Tuition fees', 'Total programme cost, not only the first-year fee'],
  ['Course recognition', 'Accreditation of the programme and the university’s status'],
  ['Academic requirements', 'Required grades, subjects and prior qualifications'],
  ['English requirements', 'Accepted tests, scores and any exemptions'],
  ['University location', 'City, living costs and distance from transport'],
  ['Accommodation', 'On-campus or off-campus options and their costs'],
  ['Programme duration', 'Length of study and intake months'],
  ['International student support', 'Admissions, visa and welfare assistance'],
];

const COSTS = [
  ['University costs', 'Application fees and tuition, quoted in MYR by the university.'],
  ['Immigration costs', 'EMGS and student visa-related charges, medical examination and insurance.'],
  ['Living costs', 'Accommodation, food and transport, which vary by city and lifestyle.'],
  ['Travel and setup', 'Air tickets and initial settlement costs on arrival.'],
];

const STEPS = [
  ['Contact Eammu Holidays', 'Message us on WhatsApp, call or email.'],
  ['Share academic information', 'Send your results and basic details online.'],
  ['Review eligibility', 'We compare your profile with course requirements.'],
  ['Select university and course', 'Discuss a shortlist with your family.'],
  ['Prepare documents', 'Gather academic and personal documents.'],
  ['Submit the application', 'The application goes to the university.'],
  ['Receive the university offer', 'Read the offer conditions carefully.'],
  ['Complete required payment', 'Pay only as the university’s official instructions say.'],
  ['Follow the EMGS visa process', 'The visa application follows the EMGS process.'],
  ['Complete medical and immigration formalities', 'Physical steps may apply here.'],
  ['Prepare for departure', 'Plan travel, accommodation and arrival.'],
];

const ONLINE = ['WhatsApp communication', 'Online profile assessment', 'Document sharing by scan or photo', 'Video counseling where available', 'University shortlist discussion', 'Application progress updates', 'Family participation', 'Contact before submitting any original documents'];

const l = 'text-emerald-800 font-semibold underline decoration-yellow-400 decoration-2 hover:text-emerald-600';
const h2 = 'text-2xl font-bold text-emerald-900';
const p = 'mt-4 leading-7 text-slate-700';
const card = 'rounded-xl border border-slate-200 bg-white p-4 shadow-sm';

function L({ href, children }) {
  return <Link href={href} className={l}>{children}</Link>;
}

export default function Page() {
  const whatsapp = `https://wa.me/${AGENCY.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hello Eammu Holidays, I am from Cumilla and want to study in Malaysia.')}`;
  return (
    <div className="overflow-x-hidden bg-slate-50 text-slate-900">
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
          <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-emerald-950">Study in Malaysia 2026–2027</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">Malaysia Study Consultancy in Cumilla: Study in Malaysia from Cumilla</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">Eammu Holidays provides Malaysia study application guidance to students from Cumilla City and across Cumilla district. Ask about university selection and course eligibility, get help with applications and documents, and learn how the EMGS student visa process works. Online counseling is available if you cannot travel, and families are welcome to get in touch before starting an application.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-yellow-400 px-6 py-3 text-center font-bold text-emerald-950 hover:bg-yellow-300">WhatsApp {AGENCY.phone}</a>
            <a href={`tel:${AGENCY.phone}`} className="rounded-lg border border-emerald-300 px-6 py-3 text-center font-bold text-white hover:bg-emerald-800">Call Eammu Holidays</a>
          </div>
          <p className="mt-4 text-sm text-emerald-200">By {AGENCY.name} &middot; Updated <time dateTime="2026-11-14">November 2026</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="All Study in Malaysia guides">
          <details className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:open:block" open>
            <summary className="cursor-pointer list-none rounded-lg bg-emerald-900 px-4 py-3 text-sm font-bold text-white lg:pointer-events-none">Browse all 38 Malaysia guides</summary>
            <div className="mt-3 max-h-[70vh] overflow-y-auto">
              {NAV.map((g) => (
                <details key={g.label} className="mb-1" open={g.pages.some((x) => x.href === PAGE_HREF)}>
                  <summary className="cursor-pointer rounded-md px-2 py-2 text-sm font-bold text-emerald-900 hover:bg-emerald-50">{g.label} ({g.pages.length})</summary>
                  <ul className="mb-2 ml-2 border-l border-slate-200 pl-2">
                    {g.pages.map((x) => (
                      <li key={x.href}>
                        <Link
                          href={x.href}
                          aria-current={x.href === PAGE_HREF ? 'page' : undefined}
                          className={`block rounded-md px-2 py-1.5 text-sm ${x.href === PAGE_HREF ? 'bg-yellow-400 font-bold text-emerald-950' : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'}`}
                        >
                          {x.label}
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
          <article>
            <section className="mt-0" aria-labelledby="support-heading">
              <h2 id="support-heading" className={h2}>Support for Cumilla students</h2>
              <p className={p}>Parents and students searching for education consultancy in Cumilla usually want clear answers before spending money. Eammu Holidays serves Cumilla students mainly through online counseling, with our business address in Dhaka, as described on <L href="/study/malaysia/consultancy-in-dhaka">the Dhaka consultancy page</L>. If you would like to meet in person, please call {AGENCY.phone} first to ask whether a meeting can be arranged. Students do not need to travel to Dhaka for an initial consultation.</p>
              <p className={p}>Many Cumilla families have relatives working abroad, so they often compare Malaysia with other destinations. Start with <L href="/study/malaysia/tuition-fees-in-malaysia-for-bangladeshi-students">tuition fees in Malaysia for Bangladeshi students</L> and <L href="/study/malaysia/cost-of-living-in-malaysia-for-bangladeshi-students">cost of living in Malaysia</L>, then read the main <L href="/study/malaysia">Study in Malaysia hub</L> and our <L href="/study/malaysia/study-in-malaysia-from-bangladesh">guide to studying in Malaysia from Bangladesh</L>.</p>
            </section>

            <section className="mt-10" aria-labelledby="areas-heading">
              <h2 id="areas-heading" className={h2}>Study in Malaysia from anywhere in Cumilla district</h2>
              <p className={p}>Students from Cumilla City and the surrounding upazilas can enquire online or arrange counseling through our WhatsApp, phone and email contacts. We do not operate separate offices in these areas; the same counseling process applies wherever you live.</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Areas in Cumilla we serve online">
                {AREAS.map((a) => (
                  <li key={a} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-900">{a}</li>
                ))}
              </ul>
            </section>

            <section className="mt-10" aria-labelledby="background-heading">
              <h2 id="background-heading" className={h2}>Malaysia study options by education background</h2>
              <p className={p}>Your current qualification decides which Malaysia study pathway to start from. These are general guides; each university sets its own rules.</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {BACKGROUNDS.map(([t, d, href, label]) => (
                  <div key={t} className={card}>
                    <h3 className="font-bold text-emerald-900">{t}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{d}</p>
                    <p className="mt-2 text-sm"><L href={href}>{label}</L></p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10" aria-labelledby="services-heading">
              <h2 id="services-heading" className={h2}>Malaysia study services you can ask about</h2>
              <p className={p}>Here is what Cumilla students can enquire about. We guide and advise; admission, scholarships and visa decisions are made by universities and Malaysian authorities, so none of these outcomes can be guaranteed.</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {SERVICES.map(([t, d]) => (
                  <li key={t} className={card}>
                    <h3 className="font-bold text-emerald-900">{t}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{d}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10" aria-labelledby="uni-heading">
              <h2 id="uni-heading" className={h2}>How to choose a Malaysian university from Cumilla</h2>
              <p className={p}>Malaysia has public and private universities, offering foundation, diploma, bachelor’s, master’s and MBA programmes in fields such as engineering, computer science, business, hospitality and tourism, and health sciences. Many programmes are taught in English. Read <L href="/study/malaysia/public-vs-private-universities-in-malaysia">public vs private universities</L>, <L href="/study/malaysia/cheapest-universities-in-malaysia">cheapest universities</L> and <L href="/study/malaysia/top-universities-in-malaysia">top universities</L>, and also check <L href="/study/malaysia/cse-and-it-courses-in-malaysia">CSE and IT courses</L> if you are interested in computing. Always confirm details on the university’s official website.</p>
              <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full min-w-[480px] text-left text-sm">
                  <caption className="sr-only">What to compare before choosing a Malaysian university</caption>
                  <thead className="bg-emerald-900 text-white">
                    <tr><th scope="col" className="px-4 py-3">Compare</th><th scope="col" className="px-4 py-3">What to check</th></tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {COMPARE.map(([a, b]) => (
                      <tr key={a}><th scope="row" className="px-4 py-3 font-semibold text-emerald-900">{a}</th><td className="px-4 py-3 text-slate-700">{b}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mt-10" aria-labelledby="cost-heading">
              <h2 id="cost-heading" className={h2}>Cost of studying in Malaysia for Cumilla students</h2>
              <p className={p}>Plan your budget in three separate parts: university fees, immigration charges and living expenses. Malaysian costs are quoted in MYR, so the amount in BDT changes with the exchange rate. We do not publish fixed packages or guaranteed budgets; ask the university for its current fee schedule. See <L href="/study/malaysia/tuition-fees-in-malaysia-for-bangladeshi-students">tuition fees</L>, <L href="/study/malaysia/cost-of-living-in-malaysia-for-bangladeshi-students">cost of living</L> and <L href="/study/malaysia/student-visa-processing-time-and-cost">visa time and cost</L> for details.</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {COSTS.map(([t, d]) => (
                  <div key={t} className={card}>
                    <h3 className="font-bold text-emerald-900">{t}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10" aria-labelledby="process-heading">
              <h2 id="process-heading" className={h2}>Application process from Cumilla to Malaysia</h2>
              <p className={p}>Most early steps (1 to 8) can be done online from home. Physical steps, such as a medical examination, certified or original documents and travel, may be needed later. We will tell you in advance. Learn more about <L href="/study/malaysia/student-visa-requirements-bangladesh">student visa requirements</L>, <L href="/study/malaysia/emgs-visa-process-and-tracking-guide">the EMGS process</L> and <L href="/study/malaysia/bank-solvency-requirements-for-malaysia-student-visa">bank solvency requirements</L>.</p>
              <ol className="mt-5 space-y-3">
                {STEPS.map(([t, d], i) => (
                  <li key={t} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-bold text-emerald-950">{i + 1}</span>
                    <div>
                      <h3 className="font-bold text-emerald-900">{t}</h3>
                      <p className="text-sm leading-6 text-slate-600">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-10" aria-labelledby="online-heading">
              <h2 id="online-heading" className={h2}>Online counseling for students in Cumilla</h2>
              <p className={p}>You can begin without leaving Cumilla. Online counseling lets families compare options at home, and you only need to travel when a specific procedure requires it.</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {ONLINE.map((o) => (
                  <li key={o} className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-950">{o}</li>
                ))}
              </ul>
              <p className={p}>Please contact us before sending or submitting any original documents, and ask about the available counseling formats when you enquire.</p>
            </section>

            <section className="mt-10" aria-labelledby="trust-heading">
              <h2 id="trust-heading" className={h2}>Business transparency</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
                <li>Our business contact address is {AGENCY.address}. Cumilla is an area we serve, not a separate branch address.</li>
                <li>For a possible in-person meeting, call {AGENCY.phone} first. A visit is only possible by prior confirmation.</li>
                <li>We do not guarantee admission, scholarships or visa approval.</li>
                <li>Check every offer, fee and requirement on the official university and EMGS websites.</li>
                <li>See all support locations on the <L href="/study/malaysia/bangladesh-offices">Bangladesh offices page</L>.</li>
              </ul>
            </section>

            <section className="mt-10">
              <h2 className={h2}>On the Dhaka–Chattogram highway</h2>
              <p className={p}>Because Cumilla is a bus or train ride from both Dhaka and Chattogram, students may be able to combine a trip to Dhaka for passport or medical steps with other errands. Our <L href="/study/malaysia/student-visa-requirements-bangladesh">student visa requirements for Bangladesh</L> guide lists what to prepare, and <L href="/study/malaysia/emgs-visa-process-and-tracking-guide">the EMGS process</L> explains what happens after submission.</p>
            </section>

            <section className="mt-10">
              <h2 className={h2}>Typical Cumilla questions</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
                <li>Can I apply after a break in studies? See <L href="/study/malaysia/study-gap-accepted-universities-in-malaysia">gap-accepted universities in Malaysia</L>.</li>
                <li>How much money proof is needed? See <L href="/study/malaysia/bank-solvency-requirements-for-malaysia-student-visa">bank solvency requirements</L>.</li>
                <li>Which intake is best? See <L href="/study/malaysia/malaysia-intake-dates">Malaysia intake dates</L>.</li>
                <li>Can I study without IELTS? See <L href="/study/malaysia/study-in-malaysia-without-ielts">study in Malaysia without IELTS</L>.</li>
              </ul>
            </section>

            <section className="mt-10">
              <h2 className={h2}>Nearby locations</h2>
              <p className={p}>Chattogram students can see <L href="/study/malaysia/consultancy-in-chattogram">our Chattogram page</L>, Dhaka students can visit <L href="/study/malaysia/consultancy-in-dhaka">our Dhaka page</L>, and every location is listed on the <L href="/study/malaysia/bangladesh-offices">Bangladesh offices page</L>.</p>
            </section>
          </article>

          <section className="mt-14" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className={h2}>Frequently Asked Questions</h2>
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
            <h2 id="related-heading" className={h2}>Related Malaysia Study Guides</h2>
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
            <h2 id="cta-heading" className="text-2xl font-bold">Planning to Study in Malaysia From Cumilla?</h2>
            <p className="mt-3 max-w-2xl leading-7 text-emerald-50">Get guidance on university selection, academic eligibility, admission applications, documentation and the EMGS student visa process. Contact {AGENCY.name} to discuss your study plans.</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-yellow-400 px-6 py-3 text-center font-bold text-emerald-950 transition hover:bg-yellow-300">Chat on WhatsApp</a>
              <a href={`tel:${AGENCY.phone}`} className="rounded-lg border border-emerald-300 px-6 py-3 text-center font-bold hover:bg-emerald-800">Call {AGENCY.phone}</a>
            </div>
            <ul className="mt-6 grid gap-3 break-words text-sm sm:grid-cols-3">
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