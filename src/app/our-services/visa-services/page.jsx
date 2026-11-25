import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, ArrowUpRight, ChevronRight, MapPin, Plane, GraduationCap, Briefcase, Building2,
  Globe, Laptop, Award, BookOpen, MessageCircle, Plus,
  ClipboardCheck, Timer, FileText, Landmark, BarChart3,
} from 'lucide-react';
import HomeSeoLinks from '@/Components/HomeSeoLinks/HomeSeoLinks';
import { countries, categories, popularRoutes } from '@/data/visaData/visaData';
import { VisaSearchBox, VisaRegionPager } from '@/Components/Client/visaServices/Visa/VisaClientContent';

// ═══ DATA & SHARED TOKENS ═══════════════════════════════════════════════════
const SITE_URL = 'https://eammu.com';
const PAGE_URL = `${SITE_URL}/our-services/visa-services`;
const WHATSAPP_NUMBER = '8801631312524';

const waLink = (message) =>
  message
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;

// ─── Shared UI tokens ────────────────────────────────────────────────────────
const CONTAINER = 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8';
const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005A31]';
const BTN_PRIMARY = `inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#005A31] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#003D24] ${FOCUS}`;
const BTN_YELLOW = `inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#F5D547] px-6 py-3 text-sm font-semibold text-[#17231D] transition hover:bg-[#ffe27a] ${FOCUS}`;
const BTN_OUTLINE = `inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#005A31] px-6 py-3 text-sm font-semibold text-[#005A31] transition hover:bg-[#005A31] hover:text-white ${FOCUS}`;
const BTN_LIGHT_OUTLINE = `inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`;

// ─── Regions ─────────────────────────────────────────────────────────────────
const REGION_LABELS = {
  asia: 'Asia',
  europe: 'Europe',
  america: 'America',
  middleEast: 'Middle East',
  oceania: 'Oceania',
};
const regionLabel = (key) =>
  REGION_LABELS[key] || key.charAt(0).toUpperCase() + key.slice(1);

const REGION_FEATURE_LINKS = {
  europe: { label: 'Schengen visa guide', href: '/schengen-visa' },
  middleEast: { label: 'Visas for Dubai residents', href: '/visa/dubai-residents' },
  asia: { label: 'Asia e-visa options', href: '/visa/e-visa' },
  america: { label: 'Tourist visa guide', href: '/our-services/visa-services/tourist-visa-from-bangladesh' },
};

// Preferred order for the "popular destinations" block; falls back to data order.
const FEATURED_COUNTRY_NAMES = ['USA', 'UK', 'Canada', 'Australia', 'Germany', 'Dubai'];

// Only serialisable fields are passed to the client pagination component.
const toCardData = (c) => ({
  name: c.name,
  image: c.image,
  altText: c.altText || '',
  description: c.description || '',
  link: c.link,
  rejectionHref: c.rejectionHref || null,
  processingHref: c.processingHref || null,
  evisaHref: c.evisaHref || null,
});

// ─── Existing datasets (unchanged URLs) ──────────────────────────────────────
const COUNTRY_QUICK_LINKS = [
  { name: 'USA', href: '/our-services/visa/usa-visa-application' },
  { name: 'UK', href: '/our-services/visa/uk-visa-application' },
  { name: 'Europe', href: '/our-services/visa/europe-visa-application' },
  { name: 'Canada', href: '/our-services/visa/canada-visa-application' },
  { name: 'Australia', href: '/our-services/visa/australia-visa-application' },
  { name: 'Germany', href: '/our-services/visa/germany-visa-application' },
  { name: 'Portugal', href: '/our-services/visa/portugal-visa-application' },
  { name: 'Armenia', href: '/our-services/visa/armenia-visa-application' },
  { name: 'Georgia', href: '/our-services/visa/georgia-visa-application' },
  { name: 'Albania', href: '/our-services/visa/albania-visa-application' },
  { name: 'Dubai', href: '/our-services/visa/dubai-visa-application' },
  { name: 'Qatar', href: '/our-services/visa/qatar-visa-application' },
  { name: 'Japan', href: '/our-services/visa/japan-visa-application' },
  { name: 'China', href: '/our-services/visa/china-visa-application' },
  { name: 'South Korea', href: '/our-services/visa/south-korea-visa-application' },
  { name: 'Spain', href: '/our-services/visa/spain-visa-application' },
  { name: 'Kosovo', href: '/our-services/visa/kosovo-visa-application' },
  { name: 'Serbia', href: '/our-services/visa/serbia-visa-application' },
  { name: 'Thailand', href: '/our-services/visa/thailand-visa-application' },
  { name: 'Singapore', href: '/our-services/visa/singapore-visa-application' },
  { name: 'Malaysia', href: '/our-services/visa/malaysia-visa-application' },
  { name: 'Turkey', href: '/our-services/visa/turkey-visa-application' },
  { name: 'Indonesia', href: '/our-services/visa/indonesia-visa-application' },
  { name: 'India', href: '/our-services/visa/india-visa-application' },
  { name: 'Saudi Arabia', href: '/our-services/visa/saudi-arabia-visa-application' },
  { name: 'Morocco', href: '/our-services/visa/morocco-visa-application' },
  { name: 'Brazil', href: '/our-services/visa/brazil-visa-application' },
  { name: 'South Africa', href: '/our-services/visa/south-africa-visa-application' },
  { name: 'Azerbaijan', href: '/our-services/visa/azerbaijan-visa-application' },
  { name: 'Cyprus', href: '/our-services/visa/cyprus-visa-application' },
  { name: 'Sri Lanka', href: '/our-services/visa/srilanka-visa-application' },
  { name: 'Russia', href: '/our-services/visa/russia-visa-application' },
  { name: 'Montenegro', href: '/our-services/visa/montenegro-visa-application' },
];

const RESOURCE_LINKS = [
  { label: 'Visa Checklist Generator', href: '/travel-resources/visa-checklist-generator', Icon: ClipboardCheck, desc: 'Build a document checklist for your destination and visa type.' },
  { label: 'Visa Processing Time Tracker', href: '/travel-resources/visa-processing-time-tracker', Icon: Timer, desc: 'Check indicative processing times before you plan your trip.' },
  { label: 'Travel Document Generator', href: '/travel-resources/travel-document-generator', Icon: FileText, desc: 'Prepare supporting travel documents for your application.' },
  { label: 'Schengen Visa Guide', href: '/schengen-visa', Icon: Landmark, desc: 'Understand Schengen rules, requirements and application steps.' },
  { label: 'Visa Rejection Rates', href: '/visa-rejection', Icon: BarChart3, desc: 'Review rejection trends to prepare a stronger application.' },
  { label: 'Study Abroad', href: '/study-abroad', Icon: GraduationCap, desc: 'Explore countries, universities and student visa pathways.' },
];

const FOOTER_LINKS = [
  {
    heading: 'Visa services',
    links: [
      { label: 'Tourist visa from Bangladesh', href: '/our-services/visa-services/tourist-visa-from-bangladesh' },
      { label: 'Student visa from Bangladesh', href: '/our-services/visa-services/student-visa-from-bangladesh' },
      { label: 'Work visa from Bangladesh', href: '/our-services/visa-services/work-visa-from-bangladesh' },
      { label: 'E-visa countries', href: '/visa/e-visa' },
      { label: 'Visas for Dubai residents', href: '/visa/dubai-residents' },
      { label: 'Visas from India', href: '/visa/india' },
    ],
  },
  {
    heading: 'Travel resources',
    links: [
      { label: 'Schengen visa guide', href: '/schengen-visa' },
      { label: 'Visa rejection rates', href: '/visa-rejection' },
      { label: 'Visa checklist generator', href: '/travel-resources/visa-checklist-generator' },
      { label: 'Processing time tracker', href: '/travel-resources/visa-processing-time-tracker' },
      { label: 'Travel document generator', href: '/travel-resources/travel-document-generator' },
      { label: 'Travel resources hub', href: '/travel-resources' },
    ],
  },
  {
    heading: 'Study & scholarships',
    links: [
      { label: 'Study abroad guide', href: '/study-abroad' },
      { label: 'Student visa guide', href: '/study-abroad/student-visa' },
      { label: 'Scholarships by country', href: '/scholarships' },
      { label: 'IELTS preparation', href: '/target-ielts-immigration-center' },
      { label: 'USA visa interview prep', href: '/target-usa-visa-interview-preparation' },
      { label: 'Our services', href: '/our-services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Our offices', href: '/contact' },
      { label: 'Dubai travel agency', href: '/contact/travel-agency-dubai' },
      { label: 'Bangladesh travel agency', href: '/online-travel-agency-bangladesh' },
      { label: 'Our team', href: '/our-leading-team' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Tour packages', href: '/our-services/tour-packages' },
    ],
  },
];

const FOOTER_EXTRA_LINKS = [
  { label: 'Tour packages', href: '/our-services/tour-packages' },
  { label: 'Flight booking', href: '/flight-booking' },
  { label: 'Current offers', href: '/offers' },
  { label: 'Bangladesh office', href: '/contact/travel-agency-bangladesh' },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'What visa services does Eammu Holidays provide?',
    a: 'Eammu Holidays provides visa consultancy and application guidance for tourist, student, work and business travel. Our team helps you understand the requirements for your destination, prepare your documents and complete your application correctly. Requirements differ by destination, nationality and visa type, so we begin with a consultation about your travel plans.',
  },
  {
    q: 'Can I apply for a tourist visa from Bangladesh?',
    a: 'Yes. Many destinations accept tourist visa applications from Bangladeshi passport holders, either through an embassy, a visa application centre or an online e-visa system. The route depends on the country you plan to visit. See our tourist visa from Bangladesh guide or contact us for destination-specific advice.',
  },
  {
    q: 'Does Eammu Holidays assist with student visas?',
    a: 'Yes. We offer student visa guidance together with study abroad information, scholarship resources and IELTS preparation support. We can help you understand admission, funding and document requirements for your chosen country. Admission and visa decisions are made by the institution and the immigration authority.',
  },
  {
    q: 'Can you help with European and Schengen visas?',
    a: 'Yes. We provide guidance on Schengen visa applications, including choosing the correct country of application, preparing documents such as travel insurance, accommodation details and financial evidence, and understanding the process. Each Schengen member state may have its own procedures and appointment systems.',
  },
  {
    q: 'Do you provide visa assistance for Dubai residents?',
    a: 'Yes. We have an office in Dubai and assist UAE residents with visa applications for many destinations. Requirements can depend on your nationality, residence status and passport validity, so please check our guide for Dubai residents or speak with our team.',
  },
  {
    q: 'What documents are required for a tourist visa?',
    a: 'Common documents include a valid passport, completed application form, photographs, proof of funds, travel itinerary, accommodation details, travel insurance where required, and evidence of ties to your home country such as employment or business documents. The exact list varies by destination and nationality, so always confirm it against the official embassy or consulate requirements. Our visa checklist generator can help you get started.',
  },
  {
    q: 'How long does visa processing take?',
    a: 'Processing times vary widely by destination, visa type, time of year and the completeness of your application. We cannot guarantee any processing time, because the decision timeline is set by the embassy or immigration authority. Our processing time tracker gives indicative information, and we recommend applying well before your planned travel date.',
  },
  {
    q: 'Does Eammu Holidays guarantee visa approval?',
    a: 'No. No consultancy can guarantee a visa. The final decision always belongs to the embassy, consulate or immigration authority of the destination country. What we can do is help you prepare an accurate, well-organised application and avoid common mistakes.',
  },
  {
    q: 'Can I receive assistance with a rejected visa application?',
    a: 'Yes. We can review your situation, help you understand the reasons stated in the refusal and advise on whether to reapply, appeal or strengthen your documents. A refusal does not automatically prevent future applications, but the correct next step depends on the country and the grounds for refusal.',
  },
  {
    q: 'How can I contact Eammu Holidays for visa consultation?',
    a: 'You can message us on WhatsApp at +880 1701 699743 or use our contact page to reach our offices in Bangladesh, the UAE, Armenia and Georgia. Tell us your nationality, destination and purpose of travel so we can guide you more quickly.',
  },
];

// ═══ METADATA & STRUCTURED DATA ═════════════════════════════════════════════
const TITLE = 'International Visa Services from Bangladesh & UAE | Eammu Holidays';
const DESCRIPTION =
  'Explore international tourist, student and work visa assistance with Eammu Holidays. Get destination guidance and application support from Bangladesh and UAE.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL }, // fixed: previously pointed at the work-visa page
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'Eammu Holidays',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/preview-banner.webp', width: 1200, height: 630, alt: 'Eammu Holidays international visa services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/preview-banner.webp'],
  },
  icons: { icon: '/emf.jpg' },
};

const provider = { '@type': 'TravelAgency', name: 'Eammu Holidays', url: SITE_URL };

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en',
      isPartOf: { '@type': 'WebSite', name: 'Eammu Holidays', url: SITE_URL },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Our Services', item: `${SITE_URL}/our-services` },
        { '@type': 'ListItem', position: 3, name: 'Visa Services', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'International Visa Services',
      serviceType: 'Visa consultancy and application assistance',
      url: PAGE_URL,
      provider,
      areaServed: ['Bangladesh', 'United Arab Emirates', 'Armenia', 'Georgia'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Visa services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tourist Visa from Bangladesh', url: `${SITE_URL}/our-services/visa-services/tourist-visa-from-bangladesh` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Student Visa from Bangladesh', url: `${SITE_URL}/our-services/visa-services/student-visa-from-bangladesh` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Work Visa from Bangladesh', url: `${SITE_URL}/our-services/visa-services/work-visa-from-bangladesh` } },
        ],
      },
    },
  ],
};


// ═══ SECTIONS ═══════════════════════════════════════════════════════════════
function SectionHeading({ id, eyebrow, title, subtitle, align = 'center', light = false }) {
  const center = align === 'center';
  return (
    <div className={`mb-10 max-w-3xl md:mb-12 ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className={`mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${light ? 'text-[#F5D547]' : 'text-[#005A31]'}`}>
          <span aria-hidden="true" className="h-0.5 w-6 bg-[#F5D547]" />
          {eyebrow}
        </p>
      )}
      <h2 id={id} className={`text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl ${light ? 'text-white' : 'text-[#17231D]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${light ? 'text-white/80' : 'text-[#68756D]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function VisaServicesHero() {
  return (
    <>
      <header className="relative isolate overflow-hidden bg-[#003D24] pt-24 pb-28 sm:pt-28 md:pb-36 lg:pt-36 lg:pb-44">
        <Image
          src="/eammu_banner.webp"
          alt="Eammu Holidays international visa services and travel assistance"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#003D24]/95 via-[#003D24]/75 to-[#003D24]/40" />

        <div className={CONTAINER}>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-white/75 sm:text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
              <li><Link href="/our-services" className="hover:text-white">Our Services</Link></li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
              <li aria-current="page" className="font-medium text-white">Visa Services</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white sm:text-sm">
              <MapPin className="h-4 w-4 text-[#F5D547]" aria-hidden="true" />
              Offices in Bangladesh, UAE, Armenia &amp; Georgia
            </p>
            <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-6xl">
              Explore the World with <span className="text-[#F5D547]">Expert Visa Assistance</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              Discover visa opportunities across the globe with Eammu Holidays. From tourist and business visas to work permits and student visa guidance, we help simplify your international travel journey.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#destinations" className={BTN_YELLOW}>
                Explore Visa Destinations <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/contact" className={BTN_LIGHT_OUTLINE}>
                Talk to a Visa Consultant
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section id="visa-search" aria-labelledby="visa-search-title" className="relative z-20 -mt-14 md:-mt-20">
        <div className={CONTAINER}>
          <div className="rounded-3xl border border-[#E3ECE6] bg-white p-5 shadow-[0_24px_60px_-24px_rgba(0,61,36,0.45)] sm:p-8">
            <div className="mb-5">
              <h2 id="visa-search-title" className="text-xl font-bold text-[#17231D] sm:text-2xl">
                Find Your Visa Destination
              </h2>
              <p className="mt-1 text-sm text-[#68756D]">
                Search by country to see visa guidance and start your application.
              </p>
            </div>
            <VisaSearchBox />
          </div>
        </div>
      </section>
    </>
  );
}

const SERVICES = [
  {
    title: 'Tourist Visa',
    Icon: Plane,
    desc: 'Guidance for holiday, family visit and leisure travel visas, from document checklists to application preparation.',
    cta: 'Explore tourist visas',
    href: '/our-services/visa-services/tourist-visa-from-bangladesh',
  },
  {
    title: 'Student Visa',
    Icon: GraduationCap,
    desc: 'Support with student visa requirements, study abroad planning, scholarships and IELTS preparation.',
    cta: 'Explore student visas',
    href: '/our-services/visa-services/student-visa-from-bangladesh',
  },
  {
    title: 'Work Visa',
    Icon: Briefcase,
    desc: 'Information on employment permits and work visa routes, including documents and employer requirements.',
    cta: 'Explore work visas',
    href: '/our-services/visa-services/work-visa-from-bangladesh',
  },
  {
    title: 'Business Visa',
    Icon: Building2,
    desc: 'Assistance for business meetings, conferences and trade visits, tailored to your destination and invitation.',
    cta: 'Ask about business visas',
    href: '/contact',
  },
];

function VisaServiceCategories() {
  return (
    <section aria-labelledby="visa-categories-title" className="py-16 md:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          id="visa-categories-title"
          eyebrow="Our visa services"
          title="Visa Support for Every Journey"
          subtitle="Choose the visa category that matches your travel purpose and we will guide you through the next steps."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ title, Icon, desc, cta, href }) => (
            <li key={title}>
              <Link
                href={href}
                className="group flex h-full flex-col rounded-2xl border border-[#E3ECE6] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#005A31] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005A31]"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F7FAF8] text-[#005A31] transition group-hover:bg-[#005A31] group-hover:text-[#F5D547]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-[#17231D]">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#68756D]">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#005A31]">
                  {cta}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const SUPPORT_LINK = 'text-xs text-[#68756D] underline underline-offset-2 hover:text-[#005A31]';

function VisaCountryCard({ country }) {
  const { name, image, altText, description, link, rejectionHref, processingHref, evisaHref } = country;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E3ECE6] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F7FAF8]">
        <Image
          src={image}
          alt={altText || `${name} visa application services and requirements`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold text-[#17231D]">{name} Visa Application</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#68756D]">{description}</p>

        {(rejectionHref || processingHref || evisaHref) && (
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            {rejectionHref && <Link href={rejectionHref} className={SUPPORT_LINK}>Rejection rates</Link>}
            {processingHref && <Link href={processingHref} className={SUPPORT_LINK}>Processing time</Link>}
            {evisaHref && <Link href={evisaHref} className={SUPPORT_LINK}>E-visa option</Link>}
          </div>
        )}

        <Link
          href={link}
          className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#005A31] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#003D24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005A31]"
        >
          Explore Visa Details <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function VisaDestinationDirectory() {
  const picked = FEATURED_COUNTRY_NAMES
    .map((n) => countries.find((c) => c.name?.toLowerCase() === n.toLowerCase()))
    .filter(Boolean);
  const featured = [...picked, ...countries.filter((c) => !picked.includes(c))].slice(0, 6);

  return (
    <section id="destinations" aria-labelledby="destinations-title" className="scroll-mt-24 bg-white py-16 md:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          id="destinations-title"
          eyebrow="Popular destinations"
          title="Discover Visa Destinations Around the World"
          subtitle="Explore visa information, application guidance and travel opportunities across popular destinations."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => (
            <VisaCountryCard key={c.link || c.name} country={toCardData(c)} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Pure server markup: anchor links + CSS smooth scroll. No JavaScript shipped.
function VisaRegionNavigation({ regionKeys }) {
  const items = [
    ...regionKeys.map((k) => ({ href: `#region-${k.toLowerCase()}`, label: regionLabel(k) })),
    { href: '#popular-routes', label: 'Popular Routes' },
  ];
  return (
    <nav
      aria-label="Browse visa destinations by region"
      className="sticky top-14 z-30 -mx-4 border-y border-[#E3ECE6] bg-white/95 px-4 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border"
    >
      <ul className="flex gap-2 overflow-x-auto py-3 sm:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((i) => (
          <li key={i.href} className="shrink-0">
            <Link
              href={i.href}
              className="inline-flex min-h-11 items-center rounded-xl px-5 text-sm font-semibold text-[#17231D] transition hover:bg-[#005A31] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005A31]"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function VisaRegionDirectory() {
  const regionKeys = Object.keys(categories);
  return (
    <section aria-labelledby="regions-title" className="py-16 md:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          id="regions-title"
          eyebrow="By region"
          title="Browse Visa Destinations by Region"
          subtitle="Jump to a region and explore every destination we cover, with visa guides, processing times and e-visa options."
        />
        <VisaRegionNavigation regionKeys={regionKeys} />
        {regionKeys.map((key) => {
          const list = countries.filter((c) => (categories[key] || []).includes(c.name)).map(toCardData);
          if (!list.length) return null;
          const pages = [];
          for (let i = 0; i < list.length; i += 3) {
            pages.push(
              list.slice(i, i + 3).map((c) => <VisaCountryCard key={c.link || c.name} country={c} />)
            );
          }
          return (
            <VisaRegionPager
              key={key}
              id={`region-${key.toLowerCase()}`}
              label={regionLabel(key)}
              pages={pages}
              featureLink={REGION_FEATURE_LINKS[key] || null}
            />
          );
        })}
      </div>
    </section>
  );
}

function VisaQuickLinks() {
  return (
    <section aria-labelledby="quick-links-title" className="bg-white py-16 md:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          id="quick-links-title"
          eyebrow="Country directory"
          title="Direct Country Visa Application Links"
          subtitle="Go straight to the visa application guide for your destination."
        />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {COUNTRY_QUICK_LINKS.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="group flex min-h-12 items-center justify-between gap-2 rounded-xl border border-[#E3ECE6] bg-[#F7FAF8] px-4 py-3 text-sm font-medium text-[#17231D] transition hover:border-[#005A31] hover:bg-white hover:text-[#005A31] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005A31]"
              >
                <span>{c.name} visa</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#68756D] transition group-hover:text-[#005A31]" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const SPECIAL_ITEMS = [
  { title: 'Visa Assistance for Dubai Residents', desc: 'Living in the UAE? Browse destination guides prepared for residents travelling from Dubai.', cta: 'View Dubai resident guides', href: '/visa/dubai-residents', Icon: MapPin },
  { title: 'Visa Information for Indian Travellers', desc: 'Indian passport holders can find visa guidance and requirements for popular destinations.', cta: 'View guides for Indian travellers', href: '/visa/india', Icon: Globe },
  { title: 'E-Visa Destinations', desc: 'Discover destinations that offer online visa applications, often without an embassy visit.', cta: 'Browse e-visa destinations', href: '/visa/e-visa', Icon: Laptop },
];

function VisaSpecialServices() {
  return (
    <section aria-labelledby="special-title" className="py-16 md:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          id="special-title"
          eyebrow="Specialised guidance"
          title="Special Visa Services"
          subtitle="Dedicated resources for travellers with specific residency, nationality or application needs."
        />
        <ul className="grid gap-5 md:grid-cols-3">
          {SPECIAL_ITEMS.map(({ title, desc, cta, href, Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex h-full flex-col rounded-2xl border border-[#E3ECE6] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#005A31] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005A31]"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#005A31] text-[#F5D547]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-[#17231D]">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#68756D]">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#005A31]">
                  {cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function VisaResourceSection() {
  return (
    <section aria-labelledby="resources-title" className="bg-white py-16 md:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          id="resources-title"
          eyebrow="Resource centre"
          title="Visa Tools and Travel Resources"
          subtitle="Free tools and guides to help you prepare a complete, well-organised visa application."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCE_LINKS.map(({ label, href, Icon, desc }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex h-full items-start gap-4 rounded-2xl border border-[#E3ECE6] bg-[#F7FAF8] p-6 transition hover:border-[#005A31] hover:bg-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005A31]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#005A31] shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="flex-1">
                  <span className="block font-bold text-[#17231D]">{label}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-[#68756D]">{desc}</span>
                </span>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#68756D] transition group-hover:translate-x-1 group-hover:text-[#005A31]" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function VisaPopularRoutes() {
  return (
    <section id="popular-routes" aria-labelledby="routes-title" className="scroll-mt-32 py-16 md:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          id="routes-title"
          eyebrow="Popular routes"
          title="Popular International Visa Routes"
          subtitle="Ask our team about visa guidance and travel options for these frequently requested routes."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularRoutes.map((route) => (
            <article key={route.name} className="group flex flex-col overflow-hidden rounded-2xl border border-[#E3ECE6] bg-white shadow-sm transition hover:shadow-xl">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={route.image}
                  alt={route.altText || `${route.name} visa and travel assistance`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-[#17231D]">{route.name}</h3>
                {route.visaHref && (
                  <Link href={route.visaHref} className="mt-2 text-sm font-medium text-[#005A31] underline underline-offset-4 hover:text-[#003D24]">
                    Read the {route.name} visa guide
                  </Link>
                )}
                <a
                  href={waLink(`Hello Eammu Holidays, I am interested in ${route.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BTN_PRIMARY} mt-5`}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp Inquiry
                  <span className="sr-only"> about {route.name} (opens in a new tab)</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const STUDY_ITEMS = [
  { title: 'Student visa assistance', desc: 'Understand documents, funding and application steps for your study destination.', href: '/our-services/visa-services/student-visa-from-bangladesh', Icon: GraduationCap },
  { title: 'Scholarship information', desc: 'Explore scholarship opportunities by country and level of study.', href: '/scholarships', Icon: Award },
  { title: 'IELTS preparation', desc: 'Prepare for the English test many universities and visa routes require.', href: '/target-ielts-immigration-center', Icon: BookOpen },
  { title: 'Study abroad information', desc: 'Compare destinations, courses and pathways before you apply.', href: '/study-abroad', Icon: Globe },
];

function VisaStudyAbroad() {
  return (
    <section aria-labelledby="study-title" className="bg-[#003D24] py-16 md:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          id="study-title"
          light
          eyebrow="Study abroad"
          title="Your Global Education Journey Starts Here"
          subtitle="From choosing a destination to preparing your student visa application, we guide you at every stage."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STUDY_ITEMS.map(({ title, desc, href, Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-[#F5D547] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Icon className="mb-4 h-7 w-7 text-[#F5D547]" aria-hidden="true" />
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/75">{desc}</p>
                <ArrowRight className="mt-4 h-4 w-4 text-[#F5D547] transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/study-abroad" className={BTN_YELLOW}>Study abroad guide</Link>
          <Link href="/scholarships" className={BTN_LIGHT_OUTLINE}>Find scholarships</Link>
        </div>
      </div>
    </section>
  );
}

const A = ({ href, children }) => (
  <Link href={href} className="font-semibold text-[#005A31] underline decoration-[#F5D547] decoration-2 underline-offset-4 hover:text-[#003D24]">
    {children}
  </Link>
);

const H2 = 'scroll-mt-28 text-xl font-bold text-[#17231D] sm:text-2xl';
const P = 'mt-3 leading-relaxed text-[#3d4a43]';

const TOC = [
  ['professional-visa-services', 'Professional visa services'],
  ['tourist-visa-assistance', 'Tourist visa assistance'],
  ['student-visa-consultancy', 'Student visa and study abroad'],
  ['work-visa-guidance', 'Work visa and permits'],
  ['dubai-uae-residents', 'Dubai and UAE residents'],
  ['schengen-europe', 'Schengen and Europe'],
  ['how-it-works', 'How the process works'],
  ['required-documents', 'Required documents'],
  ['why-eammu', 'Why Eammu Holidays'],
];

function VisaSeoContent() {
  return (
    <section aria-labelledby="seo-title" className="py-16 md:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          id="seo-title"
          eyebrow="Visa guide"
          title="A Practical Guide to International Visa Assistance"
          subtitle="Useful background on how visa applications work and where Eammu Holidays can help."
        />
        <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
          <nav aria-label="On this page" className="hidden lg:block">
            <ul className="sticky top-28 space-y-1 border-l border-[#E3ECE6]">
              {TOC.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-[#68756D] hover:border-[#005A31] hover:text-[#005A31]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-w-3xl space-y-12">
            <article id="professional-visa-services">
              <h2 className={H2}>Professional Visa Services for International Travellers</h2>
              <p className={P}>
                Eammu Holidays is a travel and visa consultancy with offices in Bangladesh, the UAE, Armenia and Georgia. Our visa services in Bangladesh and the Gulf are designed to make international visa applications clearer, from the first question about eligibility to the final check of your documents. As a visa consultancy in Bangladesh serving travellers worldwide, we focus on accurate information and well-prepared applications.
              </p>
              <p className={P}>
                Every visa application is different. Requirements depend on the destination, your nationality and the type of visa, and they can change without notice. The final decision on any application is made by the relevant embassy, consulate or immigration authority, never by a consultancy. You can use our <A href="/travel-resources/visa-checklist-generator">visa checklist generator</A> and <A href="/travel-resources/visa-processing-time-tracker">processing time tracker</A> to prepare before you speak with us.
              </p>
            </article>

            <article id="tourist-visa-assistance">
              <h2 className={H2}>Tourist Visa Assistance from Bangladesh</h2>
              <p className={P}>
                A tourist visa is usually the simplest category, but a weak or incomplete application is still a common reason for refusal. Our <A href="/our-services/visa-services/tourist-visa-from-bangladesh">tourist visa from Bangladesh</A> service helps you understand what the consulate expects: a clear purpose of travel, a realistic itinerary, evidence of funds and proof of your ties to Bangladesh, such as employment or business documents.
              </p>
              <p className={P}>
                Some countries offer online applications, which you can explore through our <A href="/visa/e-visa">e-visa destinations</A> page. Others require an appointment at an embassy or visa application centre. Popular destinations include the <A href="/our-services/visa/uk-visa-application">United Kingdom</A>, <A href="/our-services/visa/canada-visa-application">Canada</A> and <A href="/our-services/visa/malaysia-visa-application">Malaysia</A>.
              </p>
            </article>

            <article id="student-visa-consultancy">
              <h2 className={H2}>Student Visa Consultancy and Study Abroad Guidance</h2>
              <p className={P}>
                Studying overseas involves more than a visa. You need an admission offer, proof of funding, language test results and often a statement of purpose. Our <A href="/our-services/visa-services/student-visa-from-bangladesh">student visa from Bangladesh</A> guidance connects these steps so you can plan in the right order.
              </p>
              <p className={P}>
                Explore our <A href="/study-abroad">study abroad guide</A>, search <A href="/scholarships">scholarships by country</A> and prepare for the language requirement with <A href="/target-ielts-immigration-center">IELTS preparation</A>. Admission and visa decisions remain with the institution and the immigration authority.
              </p>
            </article>

            <article id="work-visa-guidance">
              <h2 className={H2}>International Work Visa and Employment Permit Guidance</h2>
              <p className={P}>
                Work visas normally depend on a valid job offer or employer sponsorship, relevant qualifications and, in many countries, a labour market process handled by the employer. Our <A href="/our-services/visa-services/work-visa-from-bangladesh">work visa from Bangladesh</A> page explains the general route and the documents commonly requested.
              </p>
              <p className={P}>
                Be careful with unsolicited job offers or promises of guaranteed employment abroad. Always verify the employer and the permit requirements with the official immigration authority of the destination country before paying any fee.
              </p>
            </article>

            <article id="dubai-uae-residents">
              <h2 className={H2}>Visa Assistance for Dubai and UAE Residents</h2>
              <p className={P}>
                If you live in the UAE, your visa options depend on your nationality, the validity of your residence permit and your passport. Our <A href="/visa/dubai-residents">visa services for UAE residents</A> section lists destination guides for people travelling from Dubai and the other emirates, and our <A href="/contact/travel-agency-dubai">Dubai office</A> can answer questions in person.
              </p>
              <p className={P}>
                Looking for Dubai visa assistance as a visitor instead? See our <A href="/our-services/visa/dubai-visa-application">Dubai visa application</A> guide.
              </p>
            </article>

            <article id="schengen-europe">
              <h2 className={H2}>Schengen Visa and European Travel Guidance</h2>
              <p className={P}>
                A Schengen visa allows short stays across many European countries, but you must usually apply to the country where you will spend the most time or, if equal, your first point of entry. Typical requirements include travel insurance, accommodation details, a travel plan and proof of sufficient funds. Our <A href="/schengen-visa">Schengen visa guide</A> explains the Schengen visa application process in more detail.
              </p>
              <p className={P}>
                For Europe visa assistance, you can also read our guides for <A href="/our-services/visa/europe-visa-application">Europe</A>, <A href="/our-services/visa/germany-visa-application">Germany</A>, <A href="/our-services/visa/spain-visa-application">Spain</A> and <A href="/our-services/visa/portugal-visa-application">Portugal</A>, and review <A href="/visa-rejection">visa rejection rates</A> to understand how to prepare.
              </p>
            </article>

            <article id="how-it-works">
              <h2 className={H2}>How Our Visa Assistance Process Works</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-relaxed text-[#3d4a43] marker:font-semibold marker:text-[#005A31]">
                <li><strong>Consultation.</strong> Share your nationality, destination, travel purpose and timeline.</li>
                <li><strong>Requirement review.</strong> We explain the visa category and the documents that usually apply.</li>
                <li><strong>Document preparation.</strong> You gather the documents and we help you check them for completeness and consistency.</li>
                <li><strong>Application guidance.</strong> We guide you through the form, fees and appointment or online submission steps.</li>
                <li><strong>Follow-up.</strong> We keep you informed of next steps while the authority reviews your application.</li>
              </ol>
              <p className={P}>Processing times are set by the authority and vary, so we do not promise a specific timeline.</p>
            </article>

            <article id="required-documents">
              <h2 className={H2}>Documents Commonly Required for Visa Applications</h2>
              <p className={P}>The exact list changes by destination and visa type, but many applications ask for:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-[#3d4a43] marker:text-[#005A31]">
                <li>A passport with sufficient validity and blank pages</li>
                <li>A completed application form and recent photographs</li>
                <li>Proof of funds, such as bank statements</li>
                <li>Travel itinerary and accommodation details</li>
                <li>Travel insurance, where required</li>
                <li>Employment, business or study documents showing ties to your home country</li>
              </ul>
              <p className={P}>
                Always confirm the current list with the official embassy or consulate. Our <A href="/travel-resources/travel-document-generator">travel document generator</A> can help you organise supporting papers.
              </p>
            </article>

            <article id="why-eammu">
              <h2 className={H2}>Why Choose Eammu Holidays for Visa Assistance?</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-[#3d4a43] marker:text-[#005A31]">
                <li>Offices in Bangladesh, the UAE, Armenia and Georgia</li>
                <li>Guidance across tourist, student, work and business visas</li>
                <li>Free tools and guides to help you prepare in advance</li>
                <li>Clear, honest communication with no approval guarantees</li>
              </ul>
              <p className={P}>
                Ready to talk? <A href="/contact">Contact our team</A> for global visa application assistance tailored to your plans.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

// Native <details>/<summary>: accessible, keyboard-friendly and zero JavaScript.
function VisaFAQ() {
  return (
    <section aria-labelledby="faq-title" className="bg-white py-16 md:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          id="faq-title"
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Straight answers to common questions about visa applications and our services."
        />
        <div className="mx-auto max-w-3xl space-y-3">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group rounded-2xl border border-[#E3ECE6] bg-[#F7FAF8] open:bg-white open:shadow-sm">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 font-semibold text-[#17231D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005A31] [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-semibold">{q}</h3>
                <Plus className="h-5 w-5 shrink-0 text-[#005A31] transition-transform group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-[#3d4a43]">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisaServicesCTA() {
  return (
    <section aria-labelledby="cta-title" className="py-16 md:py-24">
      <div className={CONTAINER}>
        <div className="rounded-3xl bg-[#005A31] px-6 py-12 text-center sm:px-12 md:py-16">
          <h2 id="cta-title" className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
            Ready to Start Your International Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 md:text-lg">
            Speak with Eammu Holidays for personalized visa guidance and travel assistance.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className={BTN_YELLOW}>
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Consultation
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <Link href="/contact" className={BTN_LIGHT_OUTLINE}>Contact Our Team</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contextual SEO directory (NOT a site footer — the global layout owns that).
function VisaContextualLinks() {
  return (
    <section aria-labelledby="directory-title" className="border-t border-[#E3ECE6] bg-white py-14 md:py-16">
      <div className={CONTAINER}>
        <h2 id="directory-title" className="mb-8 text-xl font-bold text-[#17231D] md:text-2xl">
          Explore More Visa Services and Travel Resources
        </h2>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#005A31]">{col.heading}</h3>
              <ul className="space-y-1">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-block py-1 text-sm text-[#3d4a43] hover:text-[#005A31] hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-1 border-t border-[#E3ECE6] pt-6">
          {FOOTER_EXTRA_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="py-1 text-sm font-medium text-[#005A31] hover:underline">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══ PAGE ═══════════════════════════════════════════════════════════════════
export default function VisaServicesPage() {
  return (
    <div className="bg-[#F7FAF8] text-[#17231D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <VisaServicesHero />
      <VisaServiceCategories />
      <VisaDestinationDirectory />
      <VisaRegionDirectory />
      <VisaQuickLinks />
      <VisaSpecialServices />
      <VisaResourceSection />
      <VisaPopularRoutes />
      <VisaStudyAbroad />
      <VisaSeoContent />
      <VisaFAQ />
      <VisaServicesCTA />
      <VisaContextualLinks />
      <HomeSeoLinks />
    </div>
  );
}