// app/education-consultancy-sylhet/page.jsx
import Link from 'next/link';
import Image from 'next/image';

/* -------------------------------------------------------------------------- */
/*  Constants                                                                 */
/* -------------------------------------------------------------------------- */

const SITE = 'https://eammu.com';
const PAGE_URL = `${SITE}/education-consultancy-sylhet`;
const PHONE_DISPLAY = '+880 1631 312525';
const PHONE_TEL = '+8801631312525';
const EMAIL = 'info@eammu.com';
const WHATSAPP = 'https://wa.me/8801631312525';

const TITLE = 'Best Education Consultancy in Sylhet | Study Abroad – Eammu Holidays';
const DESCRIPTION =
  'Looking for an education consultancy in Sylhet? Get online study abroad guidance, university selection, admission assistance, scholarship information and student visa preparation with Eammu Holidays.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'Eammu Holidays',
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_BD',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

/*
  IMAGE CONFIGURATION
  Set `src` to a local /public path (e.g. '/images/edu/hero.jpg') or to an
  allowed remote URL (add the domain to next.config.js images.remotePatterns).
  While `src` is null, a neutral branded fallback panel is rendered.
*/
const IMAGES = {
  hero: { src: null, alt: 'International students walking across a university campus' },
  heroSmall: { src: null, alt: 'Education counsellor discussing study abroad options with a student' },
  consultation: { src: null, alt: 'Student from Sylhet discussing overseas study options with an education counsellor' },
  documents: { src: null, alt: 'Student preparing admission documents for a university application' },
  studentLife: { src: null, alt: 'International students studying together in a university library' },
  whyEammu: { src: null, alt: 'Counsellor and student reviewing a study abroad plan together' },
  malaysia: { src: null, alt: 'Modern city skyline and university environment in Malaysia' },
  cyprus: { src: null, alt: 'Coastal city and campus setting in Cyprus' },
  uk: { src: null, alt: 'Historic university buildings in the United Kingdom' },
  canada: { src: null, alt: 'University campus in Canada with autumn trees' },
  australia: { src: null, alt: 'Australian city and campus environment' },
  germany: { src: null, alt: 'Historic university town in Germany' },
};

/* -------------------------------------------------------------------------- */
/*  Content data                                                              */
/* -------------------------------------------------------------------------- */

const heroHighlights = [
  'University shortlisting',
  'Admission applications',
  'Scholarship information',
  'Visa documentation guidance',
];

const guidancePoints = [
  {
    title: 'Shortlist universities with a plan',
    text: 'A good counsellor starts with your academic results, budget, intended subject and career goals, then narrows down universities and destinations that realistically fit.',
  },
  {
    title: 'Compare tuition and living costs',
    text: 'Tuition is only one part of the budget. Accommodation, food, transport, insurance, visa fees and travel all affect the total cost of studying abroad.',
  },
  {
    title: 'Check recognition',
    text: 'Always confirm that the institution and programme are recognised in the destination country and that the degree is accepted where you plan to work or study further.',
  },
  {
    title: 'Prepare documents properly',
    text: 'Incomplete or inconsistent documents are a common cause of delays. Early preparation of transcripts, certificates and financial papers saves time later.',
  },
  {
    title: 'Understand visa requirements',
    text: 'Each country has its own student visa rules, financial requirements and processing steps. These can change, so official sources should always be checked.',
  },
  {
    title: 'Avoid misleading promises',
    text: 'No consultancy can guarantee admission, scholarships or visa approval. Be cautious of anyone who does, or who asks for payment before explaining the process.',
  },
];

const whyEammu = [
  {
    title: 'Honest, realistic guidance',
    text: 'We explain options, costs and risks plainly. We do not promise admission, scholarships or visa approval, because those decisions are not ours to make.',
  },
  {
    title: 'Support without leaving Sylhet',
    text: 'Counselling, document review and follow-up happen by phone, WhatsApp, email and online meetings, so you do not need to travel for every step.',
  },
  {
    title: 'Options matched to your profile',
    text: 'We compare destinations and programmes against your results, budget and goals instead of pushing a single country or university.',
  },
  {
    title: 'Clear next steps at every stage',
    text: 'You will know what is needed, what happens next and what your own responsibilities are, from first consultation to pre-departure.',
  },
  {
    title: 'Careful document checking',
    text: 'We help you spot missing, unclear or inconsistent documents before they are submitted to a university or visa authority.',
  },
  {
    title: 'Encouragement to verify independently',
    text: 'We encourage students and parents to check universities, fees and rules on official sources before making any payment.',
  },
];

const supportAreas = [
  {
    title: 'Before you apply',
    items: ['Study abroad counselling', 'Academic profile review', 'Destination and course comparison', 'Budget and fee planning'],
  },
  {
    title: 'While you apply',
    items: ['Application form guidance', 'SOP and personal statement guidance', 'Document review', 'Scholarship information'],
  },
  {
    title: 'After your offer',
    items: ['Offer letter and fee review', 'Student visa documentation guidance', 'English test planning advice', 'Pre-departure preparation'],
  },
];

const localTips = [
  {
    title: 'Treat advice from relatives as one input',
    text: 'Many Sylhet families have relatives living overseas, and their experience can be valuable. Rules and costs change, so also check current requirements on official university and government websites.',
  },
  {
    title: 'Be clear about who is funding your studies',
    text: 'If a parent or relative abroad will sponsor you, find out early which financial and relationship documents may be needed, and make sure the source of funds can be explained clearly.',
  },
  {
    title: 'Start with your budget, not the country',
    text: 'Decide what your family can realistically fund for tuition, living costs and proof of funds, then see which destinations and programmes fit that range.',
  },
  {
    title: 'Compare more than one destination',
    text: 'A destination familiar from family stories may not be the best match for your results, subject or budget. Compare at least two or three options.',
  },
  {
    title: 'Keep documents organised from the start',
    text: 'Keep clear scans of your passport, certificates, transcripts and financial papers in one folder so online review from Sylhet is quick and easy.',
  },
  {
    title: 'Verify agents and offers independently',
    text: 'Check universities, fees and visa rules on official websites, and keep written records of every payment and message.',
  },
];

const destinations = [
  {
    name: 'Malaysia',
    href: '/study/malaysia',
    image: IMAGES.malaysia,
    intro: 'A popular option for Bangladeshi students looking for English-medium programmes at comparatively manageable costs.',
    profile: 'Foundation, diploma, bachelor’s and master’s applicants.',
    consider: 'Check programme recognition, intake dates, tuition and living costs.',
  },
  {
    name: 'Cyprus',
    href: '/study/cyprus',
    image: IMAGES.cyprus,
    intro: 'A Mediterranean destination with English-taught programmes at a range of private and public universities.',
    profile: 'Undergraduate and postgraduate applicants across business, engineering and health fields.',
    consider: 'Compare tuition, accommodation, accreditation and visa rules carefully.',
  },
  {
    name: 'United Kingdom',
    href: '/study/uk',
    image: IMAGES.uk,
    intro: 'Known for globally recognised universities and shorter postgraduate programmes.',
    profile: 'Strong academic profiles, bachelor’s graduates and master’s applicants.',
    consider: 'English test requirements, funds, deposits and visa conditions apply.',
  },
  {
    name: 'Canada',
    href: '/study/canada',
    image: IMAGES.canada,
    intro: 'Offers a wide range of universities and colleges with diverse programmes and a multicultural environment.',
    profile: 'Students seeking degree, diploma or postgraduate pathways.',
    consider: 'Check proof of funds, institution eligibility and study permit rules.',
  },
  {
    name: 'Australia',
    href: '/study/australia',
    image: IMAGES.australia,
    intro: 'Home to well-regarded universities with strong support services for international students.',
    profile: 'Bachelor’s and master’s applicants with a clear course direction.',
    consider: 'Review living costs, genuine student requirements and visa conditions.',
  },
  {
    name: 'Germany',
    href: '/study/germany',
    image: IMAGES.germany,
    intro: 'Valued for research-focused education and many public universities with low or no tuition fees.',
    profile: 'Academically prepared students comfortable with detailed application requirements.',
    consider: 'Entry rules, language requirements, blocked account needs and deadlines vary.',
  },
];

const services = [
  {
    title: 'Study Abroad Counselling',
    text: 'One-to-one discussion of your goals, budget and academic profile to outline realistic study pathways.',
    prepare: 'Latest results and preferred subjects.',
  },
  {
    title: 'University and Course Selection',
    text: 'Help comparing universities, programmes, intakes, tuition and entry requirements.',
    prepare: 'Academic transcripts and budget range.',
  },
  {
    title: 'Admission Application Assistance',
    text: 'Guidance on completing applications accurately and submitting required documents on time.',
    prepare: 'Scanned documents and personal details.',
  },
  {
    title: 'Tuition Fee and Budget Planning',
    text: 'A clearer view of tuition, living costs and other expenses before you commit to a destination.',
    prepare: 'Family budget and sponsor details.',
  },
  {
    title: 'Scholarship Information and Guidance',
    text: 'Information on scholarship options and guidance on applications. Awards are decided by the providers.',
    prepare: 'Academic achievements and activities.',
  },
  {
    title: 'Student Visa Documentation Guidance',
    text: 'Support understanding checklists, organising paperwork and preparing for the visa process.',
    prepare: 'Passport, offer letter and financial documents.',
  },
  {
    title: 'IELTS and English Preparation Guidance',
    text: 'Advice on which English tests may be accepted and how to plan your preparation. Exams are taken through official test providers.',
    prepare: 'Existing test scores, if any.',
  },
  {
    title: 'SOP and Personal Statement Guidance',
    text: 'Guidance on structuring a clear, honest statement that reflects your own goals and experience.',
    prepare: 'Your own draft or key points about your background.',
  },
  {
    title: 'Document Review and Verification Preparation',
    text: 'A check for missing, unclear or inconsistent documents before submission.',
    prepare: 'Originals and copies of academic records.',
  },
  {
    title: 'Pre-Departure Guidance',
    text: 'Practical information on travel, accommodation planning and what to expect on arrival.',
    prepare: 'Visa outcome, offer details and travel plans.',
  },
];

const levels = [
  {
    title: 'After SSC',
    text: 'Options may include foundation or pre-university pathways in some destinations. Age, subject background and institution rules matter.',
  },
  {
    title: 'After HSC',
    text: 'Many students explore foundation, diploma or bachelor’s programmes. Results, subject combination and English ability influence eligibility.',
  },
  {
    title: 'After Diploma',
    text: 'Some universities consider diploma graduates for bachelor’s entry or advanced standing, depending on the programme and institution.',
  },
  {
    title: 'After Bachelor’s',
    text: 'Graduates may explore master’s or postgraduate diploma options. Degree classification and subject relevance are commonly reviewed.',
  },
  {
    title: 'After Master’s',
    text: 'Applicants may consider research degrees, PhD pathways or additional specialisation, often requiring a research proposal.',
  },
  {
    title: 'Students with a Study Gap',
    text: 'A study gap does not automatically rule out options, but a clear and documented explanation is usually important.',
  },
];

const steps = [
  {
    title: 'Initial Consultation',
    eammu: 'We listen to your goals and explain possible pathways.',
    you: 'Share your background, interests and budget honestly.',
  },
  {
    title: 'Academic Profile Assessment',
    eammu: 'We review your results and documents to identify suitable options.',
    you: 'Provide accurate academic records.',
  },
  {
    title: 'Destination and University Shortlisting',
    eammu: 'We help compare destinations, universities, costs and intakes.',
    you: 'Review the options and confirm your preferences.',
  },
  {
    title: 'Admission Application Preparation',
    eammu: 'We guide you through forms, documents and deadlines.',
    you: 'Prepare documents and confirm the information is correct.',
  },
  {
    title: 'Offer Letter and Fee Review',
    eammu: 'We help you understand offer conditions, fees and deadlines.',
    you: 'Read the offer terms carefully and verify payment details with the institution.',
  },
  {
    title: 'Student Visa Documentation Guidance',
    eammu: 'We explain the checklist and help organise documents.',
    you: 'Arrange financial and personal documents and answer truthfully.',
  },
  {
    title: 'Pre-Departure Preparation',
    eammu: 'We share practical guidance on travel and arrival planning.',
    you: 'Plan accommodation, finances and travel arrangements.',
  },
];

const areas = [
  'Zindabazar', 'Amberkhana', 'Subid Bazar', 'Upashahar', 'Shibganj', 'Kumarpara',
  'Tilagor', 'Mirboxtula', 'Dargah Gate', 'Bandar Bazar', 'Akhalia', 'Modina Market',
  'Rikabi Bazar', 'Jalalabad', 'South Surma', 'Beanibazar', 'Golapganj', 'Bishwanath',
  'Companiganj', 'Jaintapur', 'Moulvibazar', 'Habiganj', 'Sunamganj',
];

const verifyPoints = [
  'University and programme recognition',
  'Programme accreditation',
  'Degree recognition in Bangladesh and the intended country',
  'Tuition fee and refund policies',
  'Scholarship conditions',
  'Visa eligibility',
  'Work restrictions during study',
  'Post-study work limitations',
  'Accommodation costs',
  'Total financial requirements',
];

const documents = [
  'Valid passport',
  'SSC certificate and transcript',
  'HSC certificate and transcript',
  'Diploma or bachelor’s documents, if applicable',
  'English language test results, if available or required',
  'CV, if required',
  'Statement of Purpose, if required',
  'Financial documents',
  'Sponsor documents, if applicable',
  'Any additional documents requested by the university or visa authority',
];

const faqs = [
  {
    q: 'Which education consultancy can help me study abroad from Sylhet?',
    a: 'Several consultancies serve students in Sylhet. Eammu Holidays offers online and appointment-based study abroad guidance for Bangladeshi students, including university selection, admission support and visa documentation guidance. Whichever consultancy you choose, compare services, ask for clear written terms and verify information with official sources.',
  },
  {
    q: 'How can I choose a reliable education consultancy in Sylhet?',
    a: 'Look for transparent communication, clear explanation of fees and services, realistic information and no guarantees of admission or visa approval. Ask how they verify universities, request written terms and cross-check details on official university and government websites.',
  },
  {
    q: 'Does Eammu Holidays have an office in Sylhet?',
    a: 'Eammu Holidays supports Sylhet students through online consultations, phone, WhatsApp and email. We do not claim a walk-in office in Sylhet on this page. Please contact us first to arrange your consultation.',
  },
  {
    q: 'Does Eammu Holidays provide study abroad counselling?',
    a: 'Yes. Eammu Holidays provides study abroad counselling to help students understand destinations, programmes, costs and the next steps. Counselling is available online or by appointment.',
  },
  {
    q: 'Can I apply for foreign universities after HSC?',
    a: 'In many cases, yes. Depending on the destination, HSC graduates may consider foundation, diploma or bachelor’s pathways. Eligibility depends on your results, subjects, English ability and the institution’s requirements.',
  },
  {
    q: 'Can diploma students apply to universities abroad?',
    a: 'Diploma graduates may be considered for bachelor’s programmes or advanced entry at some institutions. Recognition of the diploma and credit transfer rules differ, so each case needs checking.',
  },
  {
    q: 'Can I study abroad with a study gap?',
    a: 'It is sometimes possible. Universities and visa authorities usually expect a clear, honest and documented explanation of the gap. Outcomes depend on the destination, institution and your overall profile.',
  },
  {
    q: 'Which countries can Bangladeshi students consider?',
    a: 'Popular options include Malaysia, Cyprus, the UK, Canada, Australia and Germany. The right choice depends on your budget, academic background, English ability, career goals and the entry rules of each country.',
  },
  {
    q: 'My relatives live abroad. Does that guarantee my application will succeed?',
    a: 'No. Having relatives overseas may help with practical support, but it does not guarantee admission or a visa. Universities and immigration authorities assess your own academic profile, finances and documents.',
  },
  {
    q: 'Does Eammu help with university applications?',
    a: 'Eammu provides guidance on preparing and submitting university applications, including document preparation and deadline planning. Final admission decisions are made by the universities.',
  },
  {
    q: 'Can I get scholarship guidance?',
    a: 'Eammu can share information on scholarship options and guide you through application requirements where relevant. Scholarships are awarded by universities, governments or other providers, and are never guaranteed.',
  },
  {
    q: 'Does Eammu provide student visa documentation guidance?',
    a: 'Yes. Eammu can help you understand visa checklists and organise your documents. Visa decisions are made solely by the relevant immigration authorities.',
  },
  {
    q: 'How do Sylhet students share documents with Eammu?',
    a: 'You can send clear scans or photos of your documents through WhatsApp or email, and discuss them in an online consultation. Keep your original documents safe until a university or authority specifically asks for them.',
  },
  {
    q: 'Is admission or visa approval guaranteed?',
    a: 'No. Admission, scholarship and visa decisions are made by the relevant universities and government authorities. No education consultancy can guarantee approval. Eammu provides guidance and support to help you prepare a complete and accurate application.',
  },
];

/* -------------------------------------------------------------------------- */
/*  Structured data                                                           */
/* -------------------------------------------------------------------------- */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE}/#organization`,
      name: 'Eammu Holidays',
      url: SITE,
      email: EMAIL,
      telephone: PHONE_TEL,
    },
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en',
      isPartOf: { '@type': 'WebSite', url: SITE, name: 'Eammu Holidays' },
      about: { '@id': `${SITE}/#organization` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Education Consultancy in Sylhet', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Study Abroad Education Consultancy for Sylhet Students',
      serviceType: 'Education consultancy and study abroad guidance',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: [
        { '@type': 'City', name: 'Sylhet' },
        { '@type': 'Country', name: 'Bangladesh' },
      ],
      url: PAGE_URL,
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

const jsonLdString = JSON.stringify(jsonLd).replace(/</g, '\\u003c');

/* -------------------------------------------------------------------------- */
/*  Small presentational helpers (server components)                          */
/* -------------------------------------------------------------------------- */

function SmartImage({ image, className = '', sizes, priority = false }) {
  if (image && image.src) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        className={`object-cover ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={image ? image.alt : 'Illustration'}
      className={`absolute inset-0 bg-gradient-to-br from-[#0b5a42] via-[#003D2B] to-[#00261b] ${className}`}
    >
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] [background-size:22px_22px]" />
    </div>
  );
}

function CheckIcon({ className = 'h-5 w-5' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowIcon({ className = 'h-4 w-4' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M10.3 3.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4L13.6 10H4a1 1 0 110-2h9.6l-3.3-3.3a1 1 0 010-1.4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, children, light = false, id }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${light ? 'text-[#FACC15]' : 'text-[#006b4a]'}`}>
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-[#0F172A]'}`}
      >
        {title}
      </h2>
      {children && (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${light ? 'text-emerald-50/85' : 'text-slate-600'}`}>
          {children}
        </p>
      )}
    </div>
  );
}

const btnPrimary =
  'inline-flex items-center justify-center gap-2 rounded-full bg-[#FACC15] px-6 py-3 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:bg-[#eab308] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#003D2B]';
const btnGhost =
  'inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white';
const textLink =
  'font-semibold text-[#006b4a] underline decoration-[#FACC15] decoration-2 underline-offset-4 hover:text-[#003D2B]';

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function EducationConsultancySylhetPage() {
  return (
    <main className="overflow-x-hidden bg-[#F8FAFC] text-[#0F172A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />

      {/* ------------------------------ HERO ------------------------------ */}
      <section className="relative isolate bg-[#003D2B] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-7">
            <nav aria-label="Breadcrumb" className="text-xs text-emerald-100/80">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-white">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white">Education Consultancy in Sylhet</li>
              </ol>
            </nav>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#FACC15]">
              Study Abroad Consultancy · Sylhet, Bangladesh
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Education Consultancy in Sylhet for Your Global Study Journey
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-emerald-50/90 sm:text-lg">
              Explore international education opportunities with structured guidance on university
              selection, admission applications, scholarships, documentation and student visa
              preparation. Eammu Holidays supports Sylhet students online, from first consultation
              to pre-departure.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                Get Free Profile Assessment
                <ArrowIcon />
              </a>
              <Link href="#destinations" className={btnGhost}>
                Explore Study Destinations
              </Link>
            </div>

            <p className="mt-5 text-sm text-emerald-100/80">
              Honest guidance, clear next steps and no promises of guaranteed admission or visa approval.
            </p>

            <ul className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {heroHighlights.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/5 px-3 py-3 text-xs font-medium leading-snug text-emerald-50"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl">
              <SmartImage image={IMAGES.hero} priority sizes="(min-width: 1024px) 40vw, 100vw" />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-[#003D2B] shadow-xl sm:block">
              <div className="relative aspect-square w-full">
                <SmartImage image={IMAGES.heroSmall} sizes="176px" />
              </div>
            </div>
            <div className="absolute -right-2 top-6 hidden rounded-2xl bg-white px-4 py-3 text-[#0F172A] shadow-xl sm:block">
              <p className="text-xs font-semibold text-[#006b4a]">Online or by appointment</p>
              <p className="text-xs text-slate-600">Students across Sylhet and Bangladesh</p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------- WHY GUIDANCE ------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8" aria-labelledby="why-consultancy">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
            <SmartImage image={IMAGES.consultation} sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#006b4a]">Why guidance matters</p>
            <h2 id="why-consultancy" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose an Education Consultancy in Sylhet?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Many families in Sylhet have close ties with countries overseas, which makes
              international education a familiar idea. Even so, every destination has its own
              entry rules, costs and visa requirements. A professional education consultancy can help
              you understand your options, organise your documents and avoid common mistakes, while
              the final decisions always remain with you, the universities and the visa authorities.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Explore our{' '}
              <Link href="/study" className={textLink}>
                study abroad guides
              </Link>{' '}
              to read about destinations before your consultation. Based in the capital? See our{' '}
              <Link href="/education-consultancy-dhaka" className={textLink}>
                Dhaka education consultancy page
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guidancePoints.map((p) => (
            <article key={p.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-[#003D2B]">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* --------------------------- WHY EAMMU ---------------------------- */}
      <section className="bg-[#003D2B] py-16 text-white sm:py-24" aria-labelledby="why-eammu-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FACC15]">Why Eammu Holidays</p>
              <h2 id="why-eammu-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Why Students Choose Eammu Holidays for Study Abroad Guidance
              </h2>
              <p className="mt-4 text-base leading-7 text-emerald-50/90">
                We do not ask you to take our word that we are the best. Instead, we focus on
                practices you can check for yourself: clear information, realistic expectations and
                support you can reach from home in Sylhet.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
              <SmartImage image={IMAGES.whyEammu} sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyEammu.map((w) => (
              <article key={w.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <CheckIcon className="h-5 w-5 text-[#FACC15]" />
                <h3 className="mt-3 text-lg font-semibold text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-6 text-emerald-50/90">{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------ HOW WE SUPPORT -------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8" aria-labelledby="support-heading">
        <SectionHeading eyebrow="End-to-end support" title="How Eammu Supports You at Every Stage" id="support-heading">
          From your first question to your flight preparation, here is how our guidance fits
          together. Final decisions on admission, scholarships and visas rest with institutions and
          authorities.
        </SectionHeading>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {supportAreas.map((s, i) => (
            <article key={s.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#003D2B] text-sm font-semibold text-[#FACC15]">
                {i + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-[#003D2B]">{s.title}</h3>
              <ul className="mt-4 space-y-3">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#006b4a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------------------- DESTINATIONS ------------------------ */}
      <section id="destinations" className="scroll-mt-20 bg-white py-16 sm:py-24" aria-labelledby="destinations-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Study destinations" title="Study Abroad Destinations for Bangladeshi Students" id="destinations-heading">
            Each destination has different costs, entry rules and lifestyle. Start with a guide, then
            talk to us about what fits your profile.
          </SectionHeading>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <article key={d.name} className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-[#F8FAFC] shadow-sm transition hover:shadow-lg">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <SmartImage
                    image={d.image}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#003D2B]">
                    {d.name}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">Study in {d.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{d.intro}</p>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="font-semibold text-[#003D2B]">Suitable for</dt>
                      <dd className="text-slate-600">{d.profile}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[#003D2B]">Consider</dt>
                      <dd className="text-slate-600">{d.consider}</dd>
                    </div>
                  </dl>
                  <Link
                    href={d.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#006b4a] hover:text-[#003D2B]"
                  >
                    Read the {d.name} study guide
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- SERVICES --------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8" aria-labelledby="services-heading">
        <SectionHeading eyebrow="Our services" title="Our Education Consultancy Services" id="services-heading">
          Practical support at every stage. Here is what each service covers and what you should
          have ready.
        </SectionHeading>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article key={s.title} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#003D2B] text-sm font-semibold text-[#FACC15]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#003D2B]">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{s.text}</p>
              <p className="mt-4 border-t border-slate-100 pt-4 text-xs leading-5 text-slate-500">
                <span className="font-semibold text-[#0F172A]">You prepare: </span>
                {s.prepare}
              </p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-5 text-slate-500">
          English tests are conducted by official test providers, and scholarship, admission and
          visa decisions are made by the relevant institutions and authorities.
        </p>
      </section>

      {/* ------------------------------ LEVELS ---------------------------- */}
      <section className="bg-[#003D2B] py-16 text-white sm:py-24" aria-labelledby="levels-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="By education level" title="Study Options Based on Your Education Level" light id="levels-heading">
            Eligibility depends on the destination, institution, programme and your individual
            academic profile. These are general starting points only.
          </SectionHeading>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {levels.map((l) => (
              <article key={l.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-[#FACC15]">{l.title}</h3>
                <p className="mt-2 text-sm leading-6 text-emerald-50/90">{l.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ PROCESS --------------------------- */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8" aria-labelledby="process-heading">
        <SectionHeading eyebrow="Our process" title="How Our Study Abroad Process Works" id="process-heading">
          A clear seven-step path from first conversation to pre-departure, showing what we do and
          what is needed from you.
        </SectionHeading>

        <ol className="relative mt-12 space-y-6 border-l-2 border-[#003D2B]/20 pl-8 sm:pl-10">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="absolute -left-[2.9rem] top-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#003D2B] text-sm font-bold text-[#FACC15] ring-4 ring-[#F8FAFC] sm:-left-[3.4rem]">
                {i + 1}
              </span>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#003D2B]">{s.title}</h3>
                <div className="mt-3 grid gap-4 text-sm leading-6 sm:grid-cols-2">
                  <p>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-[#006b4a]">Eammu supports</span>
                    <span className="text-slate-600">{s.eammu}</span>
                  </p>
                  <p>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-[#006b4a]">Your role</span>
                    <span className="text-slate-600">{s.you}</span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* -------------------------- SYLHET AREAS -------------------------- */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="areas-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#006b4a]">Across Sylhet</p>
            <h2 id="areas-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Study Abroad Support for Students Across Sylhet
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Whether you live in Zindabazar, Upashahar or Amberkhana, or in a nearby district such
              as Moulvibazar, Habiganj or Sunamganj, you can contact Eammu Holidays for online or
              appointment-based study abroad support. The areas below are locations students commonly
              contact us from. They are not branch locations, and we do not claim a walk-in office
              in these areas.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {areas.map((a) => (
                <li key={a} className="rounded-full border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 text-xs font-medium text-slate-700">
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
            <SmartImage image={IMAGES.studentLife} sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      {/* ----------------------------- LOCAL TIPS ------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8" aria-labelledby="tips-heading">
        <SectionHeading eyebrow="Plan ahead" title="Planning Tips for Sylhet Students" id="tips-heading">
          Practical points for students and parents to think through before choosing a study
          destination.
        </SectionHeading>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {localTips.map((t) => (
            <article key={t.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#003D2B]">{t.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{t.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------- OUTSIDE SYLHET ------------------------- */}
      <section className="mx-auto max-w-4xl px-4 pb-16 text-center sm:px-6 sm:pb-20 lg:px-8" aria-labelledby="outside-heading">
        <h2 id="outside-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
          Support for Students Outside Sylhet
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Living in Dhaka, Chattogram, Cumilla or elsewhere in Bangladesh? You can still receive
          guidance through phone, WhatsApp, email and online consultations, and share documents
          digitally. See our pages for{' '}
          <Link href="/education-consultancy-chattogram" className={textLink}>
            Chattogram students
          </Link>
          ,{' '}
          <Link href="/education-consultancy-cumilla" className={textLink}>
            Cumilla students
          </Link>{' '}
          or our{' '}
          <Link href="/education-consultancy-bangladesh" className={textLink}>
            nationwide education consultancy page
          </Link>
          .
        </p>
      </section>

      {/* ---------------------------- VERIFY ------------------------------ */}
      <section className="bg-[#003D2B] py-16 text-white sm:py-24" aria-labelledby="verify-heading">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FACC15]">Verify before you pay</p>
            <h2 id="verify-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Why Students Should Verify Universities Before Applying
            </h2>
            <p className="mt-4 text-base leading-7 text-emerald-50/90">
              Good decisions come from checking facts. Before paying any fee, confirm key details
              directly on official university and government websites, and keep written records of
              what you are told.
            </p>
            <p className="mt-4 text-base leading-7 text-emerald-50/90">
              Eammu Holidays encourages students and parents to verify information independently,
              whichever consultancy they work with.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {verifyPoints.map((v) => (
              <li key={v} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-emerald-50">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#FACC15]" />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------- DOCUMENTS --------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8" aria-labelledby="documents-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl lg:order-1">
            <SmartImage image={IMAGES.documents} sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#006b4a]">Be prepared</p>
            <h2 id="documents-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Documents Students Should Prepare
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Requirements vary by institution and destination, so treat this as a general starting
              checklist and confirm the exact list for your chosen programme. Clear scans or photos
              can be shared online for review.
            </p>
            <ul className="mt-6 space-y-3">
              {documents.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#006b4a]" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------- FAQ ------------------------------ */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQs" title="Sylhet Education Consultancy FAQs" id="faq-heading">
            Straight answers to common questions from students and parents.
          </SectionHeading>

          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 open:bg-white open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-semibold text-[#0F172A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#006b4a] [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span aria-hidden="true" className="mt-1 text-xl leading-none text-[#006b4a] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ CTA ------------------------------- */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#003D2B] px-6 py-14 text-center text-white shadow-2xl sm:px-12">
          <h2 id="cta-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let’s Plan Your Study Abroad Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50/90">
            Share your academic background, preferred destination and estimated budget. Our team
            can help you understand possible study pathways and the next steps.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
              WhatsApp Eammu Holidays
            </a>
            <a href={`tel:${PHONE_TEL}`} className={btnGhost}>
              Call Eammu Holidays
            </a>
            <a href={`mailto:${EMAIL}`} className={btnGhost}>
              Email Eammu Holidays
            </a>
          </div>

          <dl className="mx-auto mt-10 grid max-w-3xl gap-4 text-sm sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-[#FACC15]">Phone</dt>
              <dd className="mt-1">
                <a href={`tel:${PHONE_TEL}`} className="hover:underline">{PHONE_DISPLAY}</a>
              </dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-[#FACC15]">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${EMAIL}`} className="break-all hover:underline">{EMAIL}</a>
              </dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-[#FACC15]">Website</dt>
              <dd className="mt-1">
                <a href={SITE} className="hover:underline">eammu.com</a>
              </dd>
            </div>
          </dl>

          <p className="mt-8 text-xs text-emerald-100/70">
            Consultations are available online or by appointment. Admission, scholarship and visa
            decisions rest with the relevant institutions and authorities.
          </p>
        </div>
      </section>
    </main>
  );
}