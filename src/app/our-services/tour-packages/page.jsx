import React from "react";
import Link from "next/link";
import TourPackages from "@/Components/Client/tour-packages/tour-packages";
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";

const SITE_URL = "https://eammu.com";
const PAGE_URL = `${SITE_URL}/our-services/tour-packages`;
const ORG_ID = `${SITE_URL}/#organization`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "International Tour Packages & B2B Travel Partnerships | Eammu Holidays",
  },
  description:
    "Tailor-made international and Bangladesh tour packages for travelers, plus customized itineraries, group travel and tour-package inquiries for travel agencies and corporate clients. Request a proposal from Eammu Holidays.",
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Eammu Holidays",
    title: "International Tour Packages & B2B Travel Partnerships",
    description:
      "Custom international holidays, group travel and agency partnership inquiries with Eammu Holidays.",
    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Holidays international tour packages and travel partnerships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Tour Packages & B2B Travel Partnerships",
    description:
      "Custom itineraries, group tours and agency partnership inquiries with Eammu Holidays.",
    images: ["/preview-banner.webp"],
  },
  icons: {
    icon: "/emf.jpg",
  },
};

// --- DATA (serializable; passed to the client component as props) ---
// Existing packages preserved. `country` and `regions` are factual classifications
// added for filtering. No prices/durations are invented.
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

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070";

const AUDIENCES = [
  {
    title: "Individual travelers & families",
    body: "Browse international and Bangladesh packages, or ask for a tailor-made holiday built around your dates, budget and interests.",
    cta: "Request a custom itinerary",
    type: "Individual",
  },
  {
    title: "Travel agencies & tour operators",
    body: "Send us your destination, group size and timeline to discuss customized itineraries, FIT or group arrangements and quotations for your clients.",
    cta: "Start a B2B inquiry",
    type: "B2B",
  },
  {
    title: "Companies & group organizers",
    body: "Plan retreats, incentive trips, delegations or institutional tours. Share your requirements and we will respond with a tailored proposal.",
    cta: "Request a group proposal",
    type: "Corporate",
  },
];

const B2B_POINTS = [
  { t: "Customized itinerary support", d: "Itineraries shaped around your client brief rather than fixed catalogue trips." },
  { t: "Quotation requests for agencies", d: "Tell us the destination, dates and group size, and we will work through a quotation with you." },
  { t: "FIT and group-tour planning", d: "Independent traveller and group inclusive tour (GIT) requests, discussed case by case." },
  { t: "Multi-destination coordination", d: "Help combining several destinations into one trip, subject to availability." },
  { t: "White-label support by agreement", d: "Package and itinerary support for agency-branded offers, where terms are agreed in advance." },
  { t: "Long-term cooperation", d: "A single point of contact for agencies that want to work together on repeat business." },
];

const CORPORATE_POINTS = [
  "Corporate leisure trips and company retreats",
  "Employee incentive travel",
  "Business delegations and group travel",
  "Conferences, meetings and exhibitions (subject to availability)",
  "Educational and institutional group tours",
  "Group accommodation and ground transport coordination",
];

const STEPS = [
  { t: "Share your requirements", d: "Use the inquiry form below. It prepares a structured WhatsApp message with your details." },
  { t: "We review the brief", d: "Our team looks at destinations, dates, group size and special requirements." },
  { t: "Receive options and a proposal", d: "We share available options and explain the quotation process. Availability and terms are confirmed per inquiry." },
];

// Safe JSON-LD serialization (prevents </script> injection)
const serializeJsonLd = (data) =>
  JSON.stringify(data).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": ORG_ID,
      name: "Eammu Holidays",
      url: SITE_URL,
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "International Tour Packages & B2B Travel Partnerships",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": ORG_ID },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Tour Packages", item: PAGE_URL },
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
        item: {
          "@type": "TouristTrip",
          name: t.name,
          description: t.description,
          provider: { "@id": ORG_ID },
        },
      })),
    },
    {
      "@type": "Service",
      name: "Customized international tour planning",
      serviceType: "Tour planning",
      description:
        "Tailor-made international and Bangladesh holiday itineraries for individuals, families and groups, available on request.",
      provider: { "@id": ORG_ID },
    },
    {
      "@type": "Service",
      name: "Travel agency and tour operator inquiries",
      serviceType: "Tour package and group travel coordination for travel businesses",
      description:
        "Customized itinerary, FIT and group-tour inquiries and quotation requests for travel agencies and tour operators.",
      provider: { "@id": ORG_ID },
    },
    {
      "@type": "Service",
      name: "Corporate and group travel inquiries",
      serviceType: "Corporate group travel planning",
      description:
        "Tailored proposals for corporate retreats, incentive travel, delegations and institutional group tours.",
      provider: { "@id": ORG_ID },
    },
  ],
};

export default function Page() {
  return (
    <main className="bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden" aria-labelledby="page-title">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt="Scenic travel destination with mountains and water"
          width={2070}
          height={1380}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/55" aria-hidden="true" />
        <div className="container mx-auto px-4 py-20 text-center lg:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-300">
            Eammu Holidays
          </p>
          <h1
            id="page-title"
            className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Global Tour Packages &amp; B2B Travel Partnerships
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            Discover tailor-made international holidays, or work with Eammu Holidays on customized
            itineraries, group travel and tour-package inquiries for your agency or organization.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="#packages"
              className="rounded-full bg-white px-8 py-3.5 font-bold text-[#005a31] shadow-lg transition hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore Tour Packages
            </a>
            <a
              href="#b2b-partnership"
              className="rounded-full border-2 border-white px-8 py-3.5 font-bold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Become a B2B Partner
            </a>
            <a
              href="#inquiry"
              data-inquiry-type="Individual"
              className="rounded-full bg-[#005a31] px-8 py-3.5 font-bold text-white shadow-lg transition hover:bg-[#003e24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request a Custom Itinerary
            </a>
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="container mx-auto px-4 py-16" aria-labelledby="who-we-serve">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="who-we-serve" className="text-3xl font-bold text-gray-900">
            Travel planning for travelers, agencies and organizations
          </h2>
          <p className="mt-3 text-gray-600">
            Whether you are planning a family holiday, building an itinerary for your own clients, or
            organizing a company trip, start with the path that matches your need.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {AUDIENCES.map((a) => (
            <article key={a.type} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">{a.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{a.body}</p>
              <a
                href="#inquiry"
                data-inquiry-type={a.type}
                className="mt-5 inline-flex font-semibold text-[#005a31] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a31]"
              >
                {a.cta} →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* CATALOG (client) with server-rendered sections passed as children */}
      <TourPackages tours={TOURS}>
        {/* B2B */}
        <section
          id="b2b-partnership"
          className="scroll-mt-24 bg-[#003e24] py-20 text-white"
          aria-labelledby="b2b-title"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 id="b2b-title" className="text-3xl font-bold md:text-4xl">
                Your Global Tour Operations &amp; Wholesale Travel Partner
              </h2>
              <p className="mt-4 leading-relaxed text-green-50/90">
                Looking for a dependable partner for customized itineraries, group travel, destination
                coordination or wholesale tour-package inquiries? Connect with Eammu Holidays to discuss
                your agency&apos;s requirements and explore a tailored partnership.
              </p>
            </div>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {B2B_POINTS.map((p) => (
                <li key={p.t} className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
                  <h3 className="text-lg font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-green-50/85">{p.d}</p>
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-green-50/80">
              Rates, availability, white-label terms and any commercial arrangements are discussed and
              confirmed individually for each inquiry.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#inquiry"
                data-inquiry-type="B2B"
                className="rounded-full bg-white px-8 py-3.5 font-bold text-[#005a31] transition hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Request B2B Package Details
              </a>
            </div>
          </div>
        </section>

        {/* Destination management */}
        <section className="container mx-auto px-4 py-20" aria-labelledby="dmc-title">
          <div className="mx-auto max-w-3xl">
            <h2 id="dmc-title" className="text-3xl font-bold text-gray-900">
              Trip coordination for Bangladesh, the UAE and Asian destinations
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Overseas agencies sometimes need help organizing a trip to Bangladesh, Dubai/UAE or other
              Asian destinations. Send us your itinerary brief and we will tell you what we can
              coordinate for that destination, such as hotels, transfers and sightseeing. Services vary by
              destination and are confirmed per request.
            </p>
          </div>
        </section>

        {/* Corporate */}
        <section className="bg-white py-20" aria-labelledby="corporate-title">
          <div className="container mx-auto grid items-start gap-10 px-4 lg:grid-cols-2">
            <div>
              <h2 id="corporate-title" className="text-3xl font-bold text-gray-900">
                Corporate Travel &amp; Group Solutions
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                Companies and institutions can submit their requirements and receive a tailored proposal.
                Tell us the purpose of the trip, the destination, group size and preferred dates.
                Services are subject to availability.
              </p>
              <a
                href="#inquiry"
                data-inquiry-type="Corporate"
                className="mt-6 inline-flex rounded-full bg-[#005a31] px-8 py-3.5 font-bold text-white transition hover:bg-[#003e24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a31]"
              >
                Request a Group Proposal
              </a>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {CORPORATE_POINTS.map((c) => (
                <li key={c} className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm font-medium text-gray-700">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section className="container mx-auto px-4 py-20" aria-labelledby="process-title">
          <h2 id="process-title" className="text-center text-3xl font-bold text-gray-900">
            How an inquiry works
          </h2>
          <ol className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.t} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#005a31] font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.d}</p>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-gray-600">
            Helpful details to include: inquiry type, company or agency name (if applicable),
            destination(s), travel dates, group size, trip duration and any special requirements.
          </p>
        </section>
      </TourPackages>

      {/* Crawlable destination index (all packages, regardless of pagination) */}
      <section className="container mx-auto px-4 pb-16" aria-labelledby="destinations-index">
        <h2 id="destinations-index" className="text-2xl font-bold text-gray-900">
          Destinations we plan trips for
        </h2>
        <p className="mt-2 text-gray-600">
          International: {TOURS.filter((t) => t.type === "international").map((t) => t.country).join(", ")}.
          Bangladesh: Cox&apos;s Bazar, Sajek Valley, Saint Martin&apos;s Island, Sundarbans, Rangamati,
          Dhaka, Srimangal, Kuakata, Paharpur, Mahasthangarh, Jaflong and Lalakhal.
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Need a visa or flights for your trip? Explore our other services from the{" "}
          <Link href="/" className="font-semibold text-[#005a31] underline underline-offset-4">
            Eammu Holidays homepage
          </Link>
          .
        </p>
      </section>

      <HomeSeoLinks />
    </main>
  );
}