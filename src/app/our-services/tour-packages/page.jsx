import React from "react";
import Link from "next/link";
import {
  ArrowRight, ChevronRight, Globe, MapPin, Users, Heart, Building2, Mountain, Gem,
  Handshake, Briefcase, GraduationCap, Plane, MessageCircle, ClipboardList, FileText, CheckCircle2,
  Compass, Landmark, Sparkles, Plus,
} from "lucide-react";
import TourPackages from "@/Components/Client/tour-packages/tour-packages";
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";

// ═══ CONSTANTS ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://eammu.com";
const PAGE_URL = `${SITE_URL}/our-services/tour-packages`;
const ORG_ID = `${SITE_URL}/#organization`;
const WHATSAPP_NUMBER = "8801701699743";
const WA_GENERAL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Eammu Holidays, I would like to discuss a tour package."
)}`;

const TITLE = "International Tour Packages & Global Tour Operator | Eammu Holidays";
const DESCRIPTION =
  "Explore international and Bangladesh tour packages with Eammu Holidays. Discover customized holidays, group tours, corporate travel and global B2B tour operating solutions.";

// Verified links only (taken from your existing pages). Add these once you confirm the routes exist:
//   { label: "Air ticket booking", href: "/our-services/air-ticket" }
//   { label: "Travel insurance",   href: "/our-services/travel-insurance" }
//   { label: "About Eammu Holidays", href: "/about" }
const EXPLORE_LINKS = [
  { label: "All Eammu services", href: "/our-services" },
  { label: "Visa services", href: "/our-services/visa-services" },
  { label: "Flight booking", href: "/flight-booking" },
  { label: "Study abroad", href: "/study-abroad" },
  { label: "Schengen visa guide", href: "/schengen-visa" },
  { label: "Visas for Dubai residents", href: "/visa/dubai-residents" },
  { label: "Travel resources", href: "/travel-resources" },
  { label: "Dubai office", href: "/contact/travel-agency-dubai" },
  { label: "Bangladesh travel agency", href: "/online-travel-agency-bangladesh" },
  { label: "Special offers", href: "/offers" },
  { label: "Contact Eammu Holidays", href: "/contact" },
];

const CONTAINER = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005A31]";
const BTN_PRIMARY = `inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#005A31] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#003D24] ${FOCUS}`;
const BTN_YELLOW = "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#F5D547] px-6 py-3 text-sm font-semibold text-[#17231D] transition hover:bg-[#ffe27a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const BTN_OUTLINE = `inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#005A31] px-6 py-3 text-sm font-semibold text-[#005A31] transition hover:bg-[#005A31] hover:text-white ${FOCUS}`;
const BTN_LIGHT = "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

// ═══ METADATA ════════════════════════════════════════════════════════════════
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Eammu Holidays",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      { url: "/preview-banner.webp", width: 1200, height: 630, alt: "Eammu Holidays international tour packages and travel partnerships" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/preview-banner.webp"],
  },
  icons: { icon: "/emf.jpg" },
};

// ═══ DATA (existing packages preserved exactly; passed to the client component as props) ═══
const TOURS = [
  { id: "dom-1", type: "domestic", country: "Bangladesh", regions: ["Bangladesh"], name: "Cox's Bazar Beach Tour", description: "Relax at the longest natural sea beach in the world.", image: "https://images.unsplash.com/photo-1665651147145-664ebda525e7?fm=jpg&q=60&w=3000" },
  { id: "dom-2", type: "domestic", country: "Bangladesh", regions: ["Bangladesh"], name: "Sajek Valley Tour", description: "Explore the serene hills and tribal culture of Sajek.", image: "https://www.tourgroupbd.com/upload/event/1658569515_event.jpg" },
  { id: "dom-3", type: "domestic", country: "Bangladesh", regions: ["Bangladesh"], name: "Saint Martin’s Island", description: "Visit the beautiful coral island in the Bay of Bengal.", image: "https://media.istockphoto.com/id/474259514/photo/boat-on-the-tropical-beach.jpg?s=612x612&w=0&k=20&c=1ersoGRQdPK6WLy498-QF33Bvi04VK__1G8IoufvR9E=" },
  { id: "dom-4", type: "domestic", country: "Bangladesh", regions: ["Bangladesh"], name: "Sundarbans Mangrove Forest", description: "Discover the world’s largest mangrove forest and Royal Bengal Tigers.", image: "https://dialogue.earth/content/uploads/2023/04/Spotted-deer-in-Bangladesh_Alamy_P98FYF-scaled.jpg" },
  { id: "dom-5", type: "domestic", country: "Bangladesh", regions: ["Bangladesh"], name: "Rangamati Lake Tour", description: "Enjoy boating and natural beauty at the Kaptai Lake.", image: "https://www.thefinancetoday.net/uploads/shares/Rangamati_hanging_Bridge-2019-12-24-12-47-02.jpg" },
  { id: "dom-6", type: "domestic", country: "Bangladesh", regions: ["Bangladesh"], name: "Dhaka City Tour", description: "Explore historic and modern attractions of Bangladesh’s capital.", image: "https://www.pelago.com/img/products/BD-Bangladesh/full-day-dhaka-city-tour-/bd27718c-6e89-4fb7-aec2-119456a9dc4e_full-day-dhaka-city-tour-.jpg" },
  { id: "dom-7", type: "domestic", country: "Bangladesh", regions: ["Bangladesh"], name: "Srimangal Tea Garden Tour", description: "Visit lush tea gardens and enjoy peaceful nature.", image: "https://pathfriend-bd.com/wp-content/uploads/2021/01/Sreemangal-Tea-Estate-and-Museum.gif" },
  { id: "dom-8", type: "domestic", country: "Bangladesh", regions: ["Bangladesh"], name: "Kuakata Sea Beach", description: "Witness both sunrise and sunset over the sea.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/17/9e/7d/kuakata-beach.jpg?w=800" },
  { id: "dom-9", type: "domestic", country: "Bangladesh", regions: ["Bangladesh"], name: "Paharpur Buddhist Monastery", description: "Explore ancient archaeological site and UNESCO heritage.", image: "https://koryogroup.com/uploads/blog/1635/original-Paharpur_Buddhist_Monastery.jpg?1736904759" },
  { id: "dom-10", type: "domestic", country: "Bangladesh", regions: ["Bangladesh"], name: "Mahasthangarh Archaeological Site", description: "Visit one of the oldest archaeological sites in Bangladesh.", image: "https://travel.discoverybangladesh.com/images/mohasthangar-musume.jpg" },
  { id: "dom-11", type: "domestic", country: "Bangladesh", regions: ["Bangladesh"], name: "Jaflong Hill Tour", description: "Enjoy scenic hills and river views in Sylhet.", image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?q=80&w=2000" },
  { id: "dom-12", type: "domestic", country: "Bangladesh", regions: ["Bangladesh"], name: "Lalakhal Waterfall & Tea Garden", description: "Discover crystal clear blue water and tea plantations.", image: "https://sylhettouristguide.com/assets/image/place/lalakhal/finger.jpg" },

  { id: "intl-1", type: "international", country: "UAE", regions: ["Middle East"], name: "Dubai City Tour", description: "Experience the luxury and futuristic skyline of Dubai.", image: "https://cdn-imgix.headout.com/media/images/ec59e7719a396a4519efc6edcf9d2d41-Museum%20of%20the%20Future%20Dubai%20Tickets%201.jpg" },
  { id: "intl-2", type: "international", country: "Malaysia", regions: ["Asia"], name: "Malaysia Cultural Tour", description: "Explore Malaysia’s rich culture and natural beauty.", image: "https://heritagetours.co/wp-content/uploads/2020/06/2-2.jpg" },
  { id: "intl-3", type: "international", country: "Singapore", regions: ["Asia"], name: "Singapore City Highlights", description: "Visit Marina Bay Sands, Gardens by the Bay, and more.", image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/b3/2d/e2.jpg" },
  { id: "intl-4", type: "international", country: "Thailand", regions: ["Asia"], name: "Thailand Beach Getaway", description: "Relax on pristine beaches and enjoy vibrant nightlife.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROFQFZx4d9Qqu7gn_yr544ZbTC3vdZYUBIkw&s" },
  { id: "intl-5", type: "international", country: "Japan", regions: ["Asia"], name: "Japan Cherry Blossom Tour", description: "Experience Japan’s famous sakura season and culture.", image: "https://assets.tripsmiths.com/images/default/523234-shutterstock-1513825088.jpg" },
  { id: "intl-6", type: "international", country: "Türkiye", regions: ["Europe", "Middle East"], name: "Turkey Istanbul Experience", description: "Discover the blend of Europe and Asia in Istanbul.", image: "https://www.tooistanbul.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-15-at-16.19.22.png" },
  { id: "intl-7", type: "international", country: "Switzerland", regions: ["Europe"], name: "Switzerland Alpine Tour", description: "Explore stunning mountain landscapes and ski resorts.", image: "https://t4.ftcdn.net/jpg/02/81/14/83/360_F_281148366_Uw03PoKAGUZIAWecL5Op35YPMa7os2uC.jpg" },
  { id: "intl-8", type: "international", country: "France", regions: ["Europe"], name: "France Paris Tour", description: "Visit the Eiffel Tower, Louvre, and romantic city sights.", image: "https://www.royalcaribbean.com/media-assets/pmc/content/dam/shore-x/paris-le-havre-leh/lh17-paris-sightseeing-without-lunch/stock-photo-skyline-of-paris-with-eiffel-tower-at-sunset-in-paris-france-eiffel-tower-is-one-of-the-most-752725282.jpg" },
  { id: "intl-9", type: "international", country: "United Kingdom", regions: ["Europe"], name: "United Kingdom London Highlights", description: "See Buckingham Palace, Big Ben, and historic landmarks.", image: "https://www.airpano.com/files/london-video_big.jpg" },
  { id: "intl-10", type: "international", country: "Maldives", regions: ["Asia"], name: "Maldives Beach Paradise", description: "Relax in luxurious overwater bungalows in Maldives.", image: "https://i0.wp.com/jyoshankar.com/wp-content/uploads/2020/02/jyoshankar_travelblogger_maldives_hideawaybeachresortandspa_luxuryresorts_9.jpg" },
  { id: "intl-11", type: "international", country: "Italy", regions: ["Europe"], name: "Italy Rome and Venice", description: "Explore ancient ruins and romantic canals.", image: "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=" },
  { id: "intl-12", type: "international", country: "Greece", regions: ["Europe"], name: "Greece Santorini Tour", description: "Visit iconic whitewashed buildings and beautiful sunsets.", image: "https://lp-cms-production.imgix.net/2024-06/iStock-166471469.jpg" },
];

const HERO_IMAGE = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070";
const tourImage = (id) => TOURS.find((t) => t.id === id)?.image;

const REGION_ORDER = ["Asia", "Middle East", "Europe"]; // only regions that exist in TOURS data
const INTERNATIONAL = TOURS.filter((t) => t.type === "international");
const DOMESTIC = TOURS.filter((t) => t.type === "domestic");

// ═══ STRUCTURED DATA ═════════════════════════════════════════════════════════
// NOTE: FAQPage markup is intentionally NOT added: Google limits FAQ rich results to well-known
// government and health sites, so this page is not eligible.
const serializeJsonLd = (data) =>
  JSON.stringify(data).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "TravelAgency", "@id": ORG_ID, name: "Eammu Holidays", url: SITE_URL },
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": ORG_ID },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Our Services", item: `${SITE_URL}/our-services` },
        { "@type": "ListItem", position: 3, name: "Tour Packages", item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#packages`,
      name: "Tour packages offered by Eammu Holidays",
      numberOfItems: TOURS.length,
      itemListElement: TOURS.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "TouristTrip", name: t.name, description: t.description, provider: { "@id": ORG_ID } },
      })),
    },
    {
      "@type": "Service",
      name: "Customized international tour planning",
      serviceType: "Tour planning",
      description: "Tailor-made international and Bangladesh holiday itineraries for individuals, families and groups, available on request.",
      provider: { "@id": ORG_ID },
    },
    {
      "@type": "Service",
      name: "Travel agency and tour operator inquiries",
      serviceType: "Tour package and group travel coordination for travel businesses",
      description: "Customized itinerary, FIT and group-tour inquiries and quotation requests for travel agencies and tour operators.",
      provider: { "@id": ORG_ID },
    },
    {
      "@type": "Service",
      name: "Corporate and group travel inquiries",
      serviceType: "Corporate group travel planning",
      description: "Tailored proposals for corporate retreats, incentive travel, delegations and institutional group tours.",
      provider: { "@id": ORG_ID },
    },
  ],
};

// ═══ SHARED UI ═══════════════════════════════════════════════════════════════
function SectionHeading({ id, eyebrow, title, subtitle, align = "center", light = false }) {
  const center = align === "center";
  return (
    <div className={`mb-10 max-w-3xl md:mb-12 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${light ? "text-[#F5D547]" : "text-[#005A31]"}`}>
          <span aria-hidden="true" className="h-0.5 w-6 bg-[#F5D547]" />
          {eyebrow}
        </p>
      )}
      <h2 id={id} className={`text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl ${light ? "text-white" : "text-[#17231D]"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${light ? "text-white/80" : "text-[#68756D]"}`}>{subtitle}</p>
      )}
    </div>
  );
}

// ═══ SECTIONS ════════════════════════════════════════════════════════════════
function TourPackagesHero() {
  return (
    <header className="relative isolate overflow-hidden bg-[#003D24] pb-20 pt-24 sm:pt-28 lg:pb-32 lg:pt-36">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_IMAGE}
        alt="Scenic international travel destination with mountains and water"
        width={2070}
        height={1380}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#003D24]/95 via-[#003D24]/75 to-[#003D24]/45" />
      <div className={CONTAINER}>
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-white/75 sm:text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
            <li><Link href="/our-services" className="hover:text-white">Our Services</Link></li>
            <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
            <li aria-current="page" className="font-medium text-white">Tour Packages</li>
          </ol>
        </nav>
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5D547] sm:text-sm">
            <span aria-hidden="true" className="h-0.5 w-8 bg-[#F5D547]" />
            Your Global Travel Partner
          </p>
          <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-6xl">
            Discover the World with <span className="text-[#F5D547]">Eammu Holidays</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Explore unforgettable international and domestic tour packages with Eammu Holidays. From personalized holidays and family vacations to group tours and global travel partnerships, we connect travellers and travel businesses with destinations around the world.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#packages" className={BTN_YELLOW}>
              Explore Tour Packages <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#inquiry" data-inquiry-type="B2B" className={BTN_LIGHT}>
              Become a B2B Partner
            </a>
          </div>
          <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-white/80 sm:text-sm">
            <span>Individual Holidays</span><span aria-hidden="true" className="text-[#F5D547]">|</span>
            <span>Group Tours</span><span aria-hidden="true" className="text-[#F5D547]">|</span>
            <span>Corporate Travel</span><span aria-hidden="true" className="text-[#F5D547]">|</span>
            <span>B2B Partnerships</span>
          </p>
        </div>
      </div>
    </header>
  );
}

// Destination discovery: chips drive the real catalog search/filter in the client component.
function TourDestinationSearch() {
  const chips = [
    ...INTERNATIONAL.map((t) => ({ label: t.country, search: t.country })),
    { label: "Bangladesh tours", filter: "domestic" },
  ];
  return (
    <section aria-labelledby="discover-title" className="relative z-10 -mt-10 pb-12 md:-mt-14 md:pb-16">
      <div className={CONTAINER}>
        <div className="rounded-3xl border border-[#E3ECE6] bg-white p-5 shadow-[0_24px_60px_-24px_rgba(0,61,36,0.45)] sm:p-8">
          <h2 id="discover-title" className="text-xl font-bold text-[#17231D] sm:text-2xl">Find a Package by Destination</h2>
          <p className="mt-1 text-sm text-[#68756D]">Pick a destination to filter the catalogue below, or use the search box above the packages.</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {chips.map((c) => (
              <li key={c.label}>
                <a
                  href="#packages"
                  {...(c.search ? { "data-catalog-search": c.search } : { "data-catalog-filter": c.filter })}
                  className={`inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-[#D5E1DA] bg-[#F7FAF8] px-4 text-sm font-medium text-[#17231D] transition hover:border-[#005A31] hover:bg-white hover:text-[#005A31] ${FOCUS}`}
                >
                  <MapPin className="h-3.5 w-3.5 text-[#005A31]" aria-hidden="true" />
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const CATEGORIES = [
  { title: "International Holiday Packages", Icon: Globe, img: "intl-8", desc: "Holidays across Asia, the Middle East and Europe, shaped around your dates and interests.", cta: "View international packages", attrs: { "data-catalog-filter": "international" }, href: "#packages" },
  { title: "Bangladesh Domestic Tours", Icon: MapPin, img: "dom-1", desc: "Beaches, hills, tea gardens, heritage sites and mangrove forests across Bangladesh.", cta: "View Bangladesh tours", attrs: { "data-catalog-filter": "domestic" }, href: "#packages" },
  { title: "Family Holiday Packages", Icon: Users, img: "intl-3", desc: "Tell us who is travelling and what everyone enjoys, and we will discuss suitable options.", cta: "Plan a family holiday", attrs: { "data-inquiry-type": "Individual" }, href: "#inquiry" },
  { title: "Honeymoon Packages", Icon: Heart, img: "intl-10", desc: "Private, romantic trips planned on request. Share your preferred destination and dates.", cta: "Plan a honeymoon", attrs: { "data-inquiry-type": "Individual" }, href: "#inquiry" },
  { title: "Group Tours", Icon: Handshake, img: "intl-2", desc: "Friends, families, students and communities travelling together on a customized itinerary.", cta: "Request a group proposal", attrs: { "data-inquiry-type": "Corporate" }, href: "#inquiry" },
  { title: "Corporate Travel Packages", Icon: Building2, img: "intl-1", desc: "Retreats, incentive trips and business group travel coordinated around your requirements.", cta: "Discuss corporate travel", attrs: { "data-inquiry-type": "Corporate" }, href: "#inquiry" },
  { title: "Adventure and Nature Tours", Icon: Mountain, img: "dom-4", desc: "Forests, valleys, lakes and hills in Bangladesh for travellers who prefer the outdoors.", cta: "Browse Bangladesh nature tours", attrs: { "data-catalog-filter": "domestic" }, href: "#packages" },
  { title: "Luxury Holiday Packages", Icon: Gem, img: "intl-7", desc: "Premium experiences discussed individually. Tell us your expectations and we will advise on options.", cta: "Request a luxury proposal", attrs: { "data-inquiry-type": "Individual" }, href: "#inquiry" },
];

function TourCategorySection() {
  return (
    <section aria-labelledby="categories-title" className="py-16 md:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          id="categories-title"
          eyebrow="Travel experiences"
          title="Holiday Experiences for Every Kind of Traveller"
          subtitle="Choose the type of trip you have in mind. Availability and arrangements are discussed individually."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map(({ title, Icon, img, desc, cta, attrs, href }) => (
            <li key={title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E3ECE6] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F7FAF8]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={tourImage(img)} alt={`${title} – destination photo`} width={800} height={500} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-[#005A31] shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-[#17231D]">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#68756D]">{desc}</p>
                  <a href={href} {...attrs} className={`mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#005A31] ${FOCUS}`}>
                    {cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PopularDestinations() {
  const groups = REGION_ORDER.map((region) => ({
    region,
    items: INTERNATIONAL.filter((t) => t.regions[0] === region),
  })).filter((g) => g.items.length);

  return (
    <section aria-labelledby="destinations-title" className="bg-white py-16 md:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          id="destinations-title"
          eyebrow="Popular destinations"
          title="Popular International Destinations"
          subtitle="Destinations currently featured in our catalogue, grouped by region."
        />
        <div className="space-y-12">
          {groups.map(({ region, items }) => (
            <div key={region}>
              <h3 className="mb-5 border-b border-[#E3ECE6] pb-3 text-xl font-bold text-[#17231D]">{region}</h3>
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((t) => (
                  <li key={t.id}>
                    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E3ECE6] bg-[#F7FAF8]">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={t.image} alt={`${t.country} – ${t.name}`} width={800} height={500} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h4 className="text-lg font-bold text-[#17231D]">{t.country}</h4>
                        <p className="mt-1 text-sm font-medium text-[#005A31]">{t.name}</p>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-[#68756D]">{t.description}</p>
                        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                          <a href="#packages" data-catalog-search={t.country} className={`inline-flex min-h-11 items-center text-sm font-semibold text-[#005A31] underline underline-offset-4 ${FOCUS}`}>
                            View package
                          </a>
                          <a href="#inquiry" data-inquiry-type="Individual" data-destination={t.name} className={`inline-flex min-h-11 items-center text-sm font-semibold text-[#17231D] underline underline-offset-4 hover:text-[#005A31] ${FOCUS}`}>
                            Plan this trip
                          </a>
                        </div>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BangladeshTourSection() {
  const featured = DOMESTIC.slice(0, 6);
  const rest = DOMESTIC.slice(6);
  return (
    <section aria-labelledby="bd-title" className="py-16 md:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          id="bd-title"
          eyebrow="Domestic tourism"
          title="Discover the Beauty of Bangladesh"
          subtitle="Explore the natural beauty, culture and unforgettable destinations of Bangladesh with personalized domestic travel experiences."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((t) => (
            <li key={t.id}>
              <a
                href="#packages"
                data-catalog-search={t.name}
                className={`group relative block aspect-[4/3] overflow-hidden rounded-2xl ${FOCUS}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.image} alt={t.name} width={800} height={600} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#003D24]/90 via-transparent to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <span className="block text-lg font-bold">{t.name}</span>
                  <span className="mt-1 block text-sm text-white/85">{t.description}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 rounded-2xl border border-[#E3ECE6] bg-white p-6">
          <h3 className="text-base font-bold text-[#17231D]">More Bangladesh destinations in our catalogue</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {rest.map((t) => (
              <li key={t.id}>
                <a href="#packages" data-catalog-search={t.name} className={`inline-flex min-h-11 items-center rounded-xl border border-[#D5E1DA] bg-[#F7FAF8] px-4 text-sm font-medium text-[#17231D] hover:border-[#005A31] hover:text-[#005A31] ${FOCUS}`}>
                  {t.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#packages" data-catalog-filter="domestic" className={BTN_PRIMARY}>View all Bangladesh packages</a>
            <a href="#inquiry" data-inquiry-type="Individual" className={BTN_OUTLINE}>Request a custom Bangladesh itinerary</a>
          </div>
        </div>
      </div>
    </section>
  );
}

const GROUP_TYPES = [
  "Friends and family groups",
  "Student groups",
  "Community travel",
  "Corporate groups",
  "Customized international itineraries",
];

function GroupTravelSection() {
  return (
    <section aria-labelledby="group-title" className="bg-white py-16 md:py-24">
      <div className={`${CONTAINER} grid items-center gap-10 lg:grid-cols-2`}>
        <div>
          <SectionHeading id="group-title" align="left" eyebrow="Group travel" title="Explore the World Together" subtitle="Travelling with a group takes careful planning. Share your group size, destination and dates, and we will discuss a customized itinerary with you." />
          <a href="#inquiry" data-inquiry-type="Corporate" className={BTN_PRIMARY}>
            Request a Group Travel Proposal <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {GROUP_TYPES.map((g) => (
            <li key={g} className="flex items-start gap-3 rounded-2xl border border-[#E3ECE6] bg-[#F7FAF8] p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#005A31]" aria-hidden="true" />
              <span className="text-sm font-semibold text-[#17231D]">{g}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const B2B_SERVICES = [
  "Wholesale tour packages",
  "Custom travel itineraries",
  "Group tour arrangements",
  "Hotel and accommodation coordination",
  "Airport transfers",
  "Sightseeing and excursions",
  "Destination management assistance",
  "Corporate travel coordination",
  "White-label travel package opportunities",
  "Agency partnership support",
];

const PARTNER_TYPES = [
  { title: "Travel Agencies", Icon: Briefcase, desc: "Customized itineraries and quotations for the clients of your agency." },
  { title: "International Tour Operators", Icon: Globe, desc: "Ground arrangements and group tour coordination for the destinations we cover." },
  { title: "Corporate Travel Partners", Icon: Building2, desc: "Support for companies and travel managers planning group and business travel." },
];

function B2BPartnershipSection() {
  return (
    <section id="b2b-partnership" aria-labelledby="b2b-title" className="scroll-mt-24 bg-[#003D24] py-16 text-white md:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          id="b2b-title"
          light
          eyebrow="For travel businesses"
          title="Your Global B2B Tour Operating Partner"
          subtitle="Partner with Eammu Holidays for international tour packages, customized itineraries, destination services and travel solutions for agencies and tour operators worldwide."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {PARTNER_TYPES.map(({ title, Icon, desc }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Icon className="mb-4 h-7 w-7 text-[#F5D547]" aria-hidden="true" />
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{desc}</p>
            </article>
          ))}
        </div>
        <h3 className="mb-5 mt-12 text-center text-lg font-semibold text-[#F5D547]">Services we can discuss with partners</h3>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {B2B_SERVICES.map((s) => (
            <li key={s} className="flex items-start gap-3 rounded-xl bg-white/10 p-4 text-sm font-medium ring-1 ring-white/10">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F5D547]" aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-white/75">
          Services vary by destination. Rates, availability, white-label terms and any commercial arrangements are discussed and confirmed individually for each inquiry.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#inquiry" data-inquiry-type="B2B" className={BTN_YELLOW}>Become a B2B Partner</a>
          <a href="#inquiry" data-inquiry-type="B2B" className={BTN_LIGHT}>Request a Wholesale Proposal</a>
        </div>
      </div>
    </section>
  );
}

const CORPORATE_POINTS = [
  "Corporate group travel",
  "Business travel coordination",
  "Incentive travel",
  "Team retreats",
  "Conference-related travel arrangements",
  "Customized group itineraries",
];

function CorporateTravelSection() {
  return (
    <section aria-labelledby="corporate-title" className="bg-white py-16 md:py-24">
      <div className={`${CONTAINER} grid items-start gap-10 lg:grid-cols-2`}>
        <div>
          <SectionHeading id="corporate-title" align="left" eyebrow="Corporate" title="Corporate Travel & Group Tour Solutions" subtitle="Companies and institutions can submit their requirements and receive a tailored proposal. Services are subject to availability and confirmed per inquiry." />
          <a href="#inquiry" data-inquiry-type="Corporate" className={BTN_PRIMARY}>
            Discuss Your Corporate Travel Requirements <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {CORPORATE_POINTS.map((c) => (
            <li key={c} className="rounded-2xl border border-[#E3ECE6] bg-[#F7FAF8] p-5 text-sm font-semibold text-[#17231D]">{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const WHY_POINTS = [
  { t: "International and domestic tours", d: "A catalogue that covers destinations in Asia, the Middle East, Europe and across Bangladesh.", Icon: Globe },
  { t: "Customized travel planning", d: "Itineraries can be adapted to your dates, group and preferences on request.", Icon: Compass },
  { t: "Individual and group support", d: "Help for solo travellers, families, friends, student groups and organizations.", Icon: Users },
  { t: "B2B partnership opportunities", d: "Agencies and tour operators can open a conversation about cooperation.", Icon: Handshake },
  { t: "Destination-focused solutions", d: "Trip planning built around the specific destination you want to visit.", Icon: MapPin },
  { t: "Support from inquiry to planning", d: "One team to talk to, from your first message to the arrangements for your trip.", Icon: MessageCircle },
  { t: "Bangladesh and UAE presence", d: "Offices serving travellers and partners in Bangladesh and the UAE.", Icon: Landmark },
];

function WhyChooseEammu() {
  return (
    <section aria-labelledby="why-title" className="py-16 md:py-24">
      <div className={CONTAINER}>
        <SectionHeading id="why-title" eyebrow="Why Eammu" title="Why Choose Eammu Holidays?" subtitle="What you can expect when you plan a trip or build a partnership with us." />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_POINTS.map(({ t, d, Icon }) => (
            <li key={t} className="rounded-2xl border border-[#E3ECE6] bg-white p-6 shadow-sm">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7FAF8] text-[#005A31]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold text-[#17231D]">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#68756D]">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const STEPS = [
  { t: "Choose Your Destination", d: "Browse the catalogue or tell us where you would like to go.", Icon: Compass },
  { t: "Submit Your Travel Requirements", d: "Use the inquiry form to prepare a structured WhatsApp message with your details.", Icon: ClipboardList },
  { t: "Receive a Customized Proposal", d: "Our team reviews your brief and shares available options and the quotation process.", Icon: FileText },
  { t: "Confirm Your Travel Arrangements", d: "Final arrangements, pricing and availability are confirmed individually for every inquiry.", Icon: CheckCircle2 },
];

function HowItWorks() {
  return (
    <section aria-labelledby="how-title" className="bg-white py-16 md:py-24">
      <div className={CONTAINER}>
        <SectionHeading id="how-title" eyebrow="Process" title="How It Works" subtitle="Four simple steps from your first idea to confirmed travel arrangements." />
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ t, d, Icon }, i) => (
            <li key={t} className="relative rounded-2xl border border-[#E3ECE6] bg-[#F7FAF8] p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#005A31] font-bold text-[#F5D547]">{i + 1}</span>
              <Icon className="absolute right-6 top-6 h-6 w-6 text-[#005A31]/40" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold text-[#17231D]">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#68756D]">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const A = ({ href, children }) => (
  <Link href={href} className="font-semibold text-[#005A31] underline decoration-[#F5D547] decoration-2 underline-offset-4 hover:text-[#003D24]">{children}</Link>
);
const AI = ({ type, dest, children }) => (
  <a href="#inquiry" data-inquiry-type={type} data-destination={dest} className="font-semibold text-[#005A31] underline decoration-[#F5D547] decoration-2 underline-offset-4 hover:text-[#003D24]">{children}</a>
);
const H2 = "scroll-mt-28 text-xl font-bold text-[#17231D] sm:text-2xl";
const P = "mt-3 leading-relaxed text-[#3d4a43]";

function TourPackagesSEOContent() {
  return (
    <section aria-labelledby="seo-title" className="py-16 md:py-24">
      <div className={CONTAINER}>
        <SectionHeading id="seo-title" eyebrow="Travel guide" title="Planning a Trip with an International Tour Operator" subtitle="How our tour packages work for travellers, families, groups and travel businesses." />
        <div className="mx-auto max-w-3xl space-y-12">
          <article>
            <h2 className={H2}>Explore International Tour Packages with Eammu Holidays</h2>
            <p className={P}>
              Eammu Holidays is a travel company serving travellers and travel businesses in Bangladesh and the UAE. Our tour packages bring together international and domestic destinations in one catalogue, and every package can be discussed and adapted to your plans. You can <A href="#packages">browse the full tour package catalogue</A> or send us a brief and let our team suggest suitable options.
            </p>
            <p className={P}>
              We position ourselves as an international tour operator and global travel partner: individual holidays, family trips, group tours, corporate travel and cooperation with other travel businesses are all handled through the same inquiry process.
            </p>
          </article>

          <article>
            <h2 className={H2}>International Holiday Packages for Every Traveller</h2>
            <p className={P}>
              Our current international packages cover Asia, the Middle East and Europe, including Dubai, Malaysia, Singapore, Thailand, Japan, the Maldives, Türkiye, Switzerland, France, the United Kingdom, Italy and Greece. Each destination has a different pace, season and cost level, so we recommend sharing your preferred dates and travel style before choosing.
            </p>
            <p className={P}>
              International travel also involves entry requirements. Visa rules depend on your nationality and destination, so check our <A href="/our-services/visa-services">visa services</A> early, and see the <A href="/schengen-visa">Schengen visa guide</A> if your trip includes European countries. We can also help with <A href="/flight-booking">flight booking</A> for your journey.
            </p>
          </article>

          <article>
            <h2 className={H2}>Customized Tour Packages from Bangladesh</h2>
            <p className={P}>
              If you are searching for tour packages from Bangladesh that do not fit a fixed schedule, a customized itinerary is often the better route. Tell us your destination, travel dates, trip duration, group size and any special requirements, and we will respond with the options we can arrange and explain the quotation process.
            </p>
            <p className={P}>
              Start with the <AI type="Individual">custom itinerary form</AI>. It prepares a structured WhatsApp message for our team. Nothing is sent until you press Send in WhatsApp, and final pricing and availability are always confirmed individually.
            </p>
          </article>

          <article>
            <h2 className={H2}>Discover Domestic Tour Packages in Bangladesh</h2>
            <p className={P}>
              Bangladesh offers a wide range of domestic travel: the long beaches of Cox&apos;s Bazar and Kuakata, Saint Martin&apos;s Island, the hills of Sajek Valley and Rangamati, the Sundarbans mangrove forest, the tea gardens of Srimangal, Jaflong and Lalakhal in the Sylhet region, and heritage sites such as Paharpur and Mahasthangarh. You can <A href="#packages">filter the catalogue by Bangladesh</A> to see every domestic package we currently list.
            </p>
          </article>

          <article>
            <h2 className={H2}>Family, Honeymoon and Group Holiday Packages</h2>
            <p className={P}>
              Family, honeymoon and group holidays are planned around the people travelling rather than a standard template. Families usually care about pace and convenience, couples about privacy and atmosphere, and groups about shared logistics. <AI type="Individual">Share your plans</AI> and we will discuss what is possible, or <AI type="Corporate">request a group travel proposal</AI> if you are organizing travel for friends, students or a community.
            </p>
          </article>

          <article>
            <h2 className={H2}>Corporate Travel and Group Tour Solutions</h2>
            <p className={P}>
              Companies and institutions can use the same inquiry process for team retreats, incentive trips, business group travel and conference-related arrangements. A good brief includes the purpose of the trip, group size, destination, preferred dates and any meeting or accommodation needs. You can <AI type="Corporate">discuss your corporate travel requirements</AI> with our team, and services are confirmed per request and subject to availability.
            </p>
          </article>

          <article>
            <h2 className={H2}>Global B2B Tour Operator and Travel Agency Partnerships</h2>
            <p className={P}>
              Travel agencies and tour operators often need a reliable partner for destinations they do not operate themselves. Eammu Holidays welcomes inquiries from agencies, international tour operators and corporate travel partners who want customized itineraries, group tour arrangements, accommodation and transfer coordination or destination assistance. <AI type="B2B">Start a B2B partnership inquiry</AI> and tell us which destinations and services you are interested in.
            </p>
          </article>

          <article>
            <h2 className={H2}>Wholesale Tour Packages for International Travel Agencies</h2>
            <p className={P}>
              For agencies interested in wholesale tour packages, the first step is a conversation about your market, destinations and group sizes. We do not publish fixed wholesale rates on this page because pricing and availability depend on the destination, season and requirements. <AI type="B2B">Request a wholesale proposal</AI> and we will explain what we can offer and the terms involved, including any white-label arrangements.
            </p>
          </article>

          <article>
            <h2 className={H2}>How to Plan Your Next Holiday with Eammu Holidays</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 leading-relaxed text-[#3d4a43] marker:font-semibold marker:text-[#005A31]">
              <li>Choose a destination from the catalogue, or tell us where you would like to go.</li>
              <li>Decide your rough dates, trip length and group size.</li>
              <li>Check visa and entry requirements through our <A href="/our-services/visa-services">visa services</A> pages.</li>
              <li>Send your requirements through the inquiry form.</li>
              <li>Review the proposal and confirm arrangements once availability and pricing are agreed.</li>
            </ol>
            <p className={P}>For other services, see <A href="/our-services">all Eammu Holidays services</A> or <A href="/contact">contact our team</A>.</p>
          </article>

          <article>
            <h2 className={H2}>Why Choose Eammu Holidays as Your Travel Partner?</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-[#3d4a43] marker:text-[#005A31]">
              <li>International and Bangladesh destinations in one catalogue</li>
              <li>Customized itineraries for individuals, families and groups</li>
              <li>A dedicated route for travel agencies, tour operators and corporate clients</li>
              <li>Presence in Bangladesh and the UAE, with a <A href="/contact/travel-agency-dubai">Dubai office</A></li>
              <li>Transparent inquiry process: no automatic submissions, and every quotation confirmed individually</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "What types of tour packages does Eammu Holidays offer?", a: "Our catalogue includes international tours across Asia, the Middle East and Europe, as well as domestic tours across Bangladesh. We also arrange customized family, honeymoon, group and corporate trips on request." },
  { q: "Can I book international tour packages from Bangladesh?", a: "Yes. You can book via WhatsApp from any package card or request a customized itinerary through the inquiry form. Remember that visa requirements depend on your nationality and destination, so please check them early." },
  { q: "Does Eammu Holidays offer domestic tour packages?", a: "Yes. Our Bangladesh packages include Cox's Bazar, Sajek Valley, Saint Martin's Island, the Sundarbans, Rangamati, Srimangal, Kuakata, Paharpur, Mahasthangarh, Jaflong and Lalakhal, among others." },
  { q: "Can I request a customized holiday package?", a: "Yes. Use the custom itinerary form to share your destination, travel dates, group size and requirements. Our team will respond with the options available." },
  { q: "Does Eammu Holidays organize group tours?", a: "Yes. We can discuss group tours for friends, families, students, communities and companies. Request a group travel proposal and tell us your group size and preferred dates." },
  { q: "Can travel agencies become B2B partners?", a: "Travel agencies and tour operators can submit a B2B inquiry. We will discuss the destinations, services and terms that fit your business." },
  { q: "Does Eammu Holidays provide wholesale tour packages?", a: "We welcome wholesale tour package inquiries from travel businesses. Rates and availability depend on the destination and season and are confirmed individually, so we do not publish fixed wholesale prices." },
  { q: "Can companies arrange corporate group travel?", a: "Yes. Companies can request proposals for retreats, incentive travel, business group travel and conference-related arrangements. Services are subject to availability and confirmed per request." },
  { q: "How can I request a tour quotation?", a: "Complete the inquiry form on this page. It prepares a WhatsApp message with your details. Press Send in WhatsApp and our team will reply with options and the quotation process." },
  { q: "How do I book a tour package?", a: "Choose a package and tap Book via WhatsApp to start a conversation with our team. Final pricing, availability and booking terms are confirmed with you individually before anything is finalized." },
];

function TourPackagesFAQ() {
  return (
    <section aria-labelledby="faq-title" className="bg-white py-16 md:py-24">
      <div className={CONTAINER}>
        <SectionHeading id="faq-title" eyebrow="FAQ" title="Frequently Asked Questions" subtitle="Quick answers about our tour packages, group travel and partnerships." />
        <div className="mx-auto max-w-3xl space-y-3">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group rounded-2xl border border-[#E3ECE6] bg-[#F7FAF8] open:bg-white open:shadow-sm">
              <summary className={`flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 font-semibold text-[#17231D] ${FOCUS} [&::-webkit-details-marker]:hidden`}>
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

function TourPackagesCTA() {
  return (
    <section aria-labelledby="cta-title" className="py-16 md:py-24">
      <div className={CONTAINER}>
        <div className="rounded-3xl bg-[#005A31] px-6 py-12 text-center sm:px-12 md:py-16">
          <Sparkles className="mx-auto mb-4 h-7 w-7 text-[#F5D547]" aria-hidden="true" />
          <h2 id="cta-title" className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">Ready to Plan Your Next Journey?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 md:text-lg">
            Speak with Eammu Holidays about a tour package, a group trip or a partnership for your travel business.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className={BTN_YELLOW}>
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Consultation
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <Link href="/contact" className={BTN_LIGHT}>Contact Our Team</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TourPackagesLinks() {
  return (
    <section aria-labelledby="links-title" className="border-t border-[#E3ECE6] bg-white py-12 md:py-14">
      <div className={CONTAINER}>
        <h2 id="links-title" className="mb-5 text-xl font-bold text-[#17231D] md:text-2xl">Explore More Eammu Holidays Services</h2>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-4">
          {EXPLORE_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="inline-flex min-h-10 items-center gap-2 text-sm text-[#3d4a43] hover:text-[#005A31] hover:underline">
                <Plane className="h-3.5 w-3.5 text-[#005A31]" aria-hidden="true" />
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-[#68756D]">
          Studying abroad? See our <Link href="/study-abroad" className="font-semibold text-[#005A31] underline underline-offset-4"><GraduationCap className="mr-1 inline h-4 w-4" aria-hidden="true" />study abroad guide</Link>.
        </p>
      </div>
    </section>
  );
}

// ═══ PAGE ════════════════════════════════════════════════════════════════════
export default function Page() {
  return (
    <main className="bg-[#F7FAF8] text-[#17231D]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      <TourPackagesHero />
      <TourDestinationSearch />

      {/* Interactive catalogue + inquiry form (client). Server-rendered sections are passed as children. */}
      <TourPackages tours={TOURS}>
        <TourCategorySection />
        <PopularDestinations />
        <BangladeshTourSection />
        <GroupTravelSection />
        <B2BPartnershipSection />
        <CorporateTravelSection />
        <WhyChooseEammu />
        <HowItWorks />
      </TourPackages>

      <TourPackagesSEOContent />
      <TourPackagesFAQ />
      <TourPackagesCTA />
      <TourPackagesLinks />
      <HomeSeoLinks />
    </main>
  );
}