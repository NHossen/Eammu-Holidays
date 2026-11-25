import Link from "next/link";
import Image from "next/image";
import {
  Plane,
  Hotel,
  FileText,
  Bus,
  Headset,
  MapPin,
  Check,
  X,
  MessageCircle,
  ArrowRight,
  Moon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Contact settings (fill in real, verified values)                    */
/* ------------------------------------------------------------------ */

const contact = {
  // International format, digits only, no "+" or spaces. Leave empty until you have it:
  // WhatsApp buttons then fall back to /contact.
  whatsappNumber: "",
  siteUrl: "https://eammu.com",
};

/* ------------------------------------------------------------------ */
/* Pricing: per person, entered manually for each currency.            */
/* 0 = not configured, UI shows "Request Latest Price".                */
/* To update: edit the numbers and redeploy. No exchange rates used.   */
/* ------------------------------------------------------------------ */

const umrahPricing = {
  sevenDays: {
    normal: { USD: 0, BDT: 0, AED: 0 },
    vip: { USD: 0, BDT: 0, AED: 0 },
    premiumVip: { USD: 0, BDT: 0, AED: 0 },
  },
  fifteenDays: {
    normal: { USD: 0, BDT: 0, AED: 0 },
    vip: { USD: 0, BDT: 0, AED: 0 },
    premiumVip: { USD: 0, BDT: 0, AED: 0 },
  },
};

/* ------------------------------------------------------------------ */
/* Editable settings                                                   */
/* ------------------------------------------------------------------ */

const PAGE_URL = `${contact.siteUrl}/umrah`;
const OG_IMAGE = "/images/umrah/umrah-og.jpg"; // 1200x630, add this file to /public
const HERO_IMAGE = null; // e.g. "/images/umrah/makkah-hero.jpg"; if null a green pattern is used
const HERO_IMAGE_ALT = "Pilgrims at Masjid al-Haram in Makkah";
const LAST_UPDATED = "2026"; // update when requirements text is reviewed

// Only add real, verified testimonials here. Empty = section is hidden.
const TESTIMONIALS = [];
// Only add real photos you own. Empty = gallery is hidden.
const GALLERY = []; // [{ src: "/images/umrah/kaaba.jpg", alt: "...", width: 1200, height: 800 }]

/* ------------------------------------------------------------------ */
/* Metadata                                                            */
/* ------------------------------------------------------------------ */

const TITLE = "Umrah Packages from Bangladesh 2027 | 7 & 15 Days | Eammu Holidays";
const DESCRIPTION =
  "Explore 7 Days and 15 Days Umrah Packages from Bangladesh with Eammu Holidays. Compare Normal, VIP and Premium VIP packages with flight, hotel, transport and Umrah visa assistance. Request your latest price.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Eammu Holidays",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Eammu Holidays Umrah packages" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const PACKAGES = [
  {
    key: "7-normal", duration: "7 Days", category: "Normal", href: "#7-days-normal",
    price: umrahPricing.sevenDays.normal,
    hotel: "Standard", room: "Shared room", flight: "Economy", transport: "Standard ground transport; shared airport transfer",
    support: "Basic customer support", tier: 0,
    highlights: ["Economy return flight", "Standard Makkah and Madinah hotels", "Shared room and shared airport transfer", "Umrah visa assistance"],
  },
  {
    key: "7-vip", duration: "7 Days", category: "VIP", href: "#7-days-vip",
    price: umrahPricing.sevenDays.vip,
    hotel: "Superior, closer to Haram", room: "Comfortable room arrangement", flight: "Better options", transport: "Premium transportation",
    support: "Dedicated travel coordination", tier: 1,
    highlights: ["Better flight options", "Superior hotels with improved Haram proximity", "Comfortable room arrangements", "Dedicated travel coordination"],
  },
  {
    key: "7-premium", duration: "7 Days", category: "Premium VIP", href: "#7-days-premium-vip",
    price: umrahPricing.sevenDays.premiumVip,
    hotel: "Luxury, best Haram proximity", room: "Premium room arrangement", flight: "Premium options", transport: "Private or premium transfers, if included",
    support: "Dedicated assistance and premium coordination", tier: 2,
    highlights: ["Premium flight options", "Luxury hotels with better Haram proximity", "Premium room arrangements", "Private or premium transfers, if included"],
  },
  {
    key: "15-normal", duration: "15 Days", category: "Normal", href: "#15-days-normal",
    price: umrahPricing.fifteenDays.normal,
    hotel: "Standard", room: "Shared room", flight: "Economy", transport: "Standard ground transport; shared airport transfers",
    support: "Standard support", tier: 0,
    highlights: ["Economy return flight", "Standard Makkah and Madinah hotels", "Shared room and shared transfers", "Umrah visa assistance"],
  },
  {
    key: "15-vip", duration: "15 Days", category: "VIP", href: "#15-days-vip",
    price: umrahPricing.fifteenDays.vip,
    hotel: "Superior, closer to Haram", room: "Comfortable room arrangement", flight: "Better options", transport: "Premium transportation",
    support: "Dedicated support", tier: 1,
    highlights: ["Better flight options", "Superior hotels with improved Haram proximity", "Comfortable room arrangements", "Dedicated support"],
  },
  {
    key: "15-premium", duration: "15 Days", category: "Premium VIP", href: "#15-days-premium-vip",
    price: umrahPricing.fifteenDays.premiumVip,
    hotel: "Luxury, best Haram proximity", room: "Premium room arrangement", flight: "Premium options", transport: "Private transfers where contracted",
    support: "Dedicated travel assistance and premium coordination", tier: 2,
    highlights: ["Premium flight options", "Luxury hotels with better Haram proximity", "Premium room arrangements", "Private transfers where contracted"],
  },
];

const TRUST = [
  { icon: Headset, title: "Professional travel assistance", text: "A real person to guide you from first inquiry to departure." },
  { icon: FileText, title: "Umrah visa assistance", text: "Help with documents and the application process." },
  { icon: Plane, title: "Flight booking support", text: "Flights matched to your package category and dates." },
  { icon: Hotel, title: "Hotel accommodation", text: "Stays arranged in both Makkah and Madinah." },
  { icon: Bus, title: "Airport transfers", text: "Pickup and drop-off arranged as per your package." },
  { icon: MapPin, title: "Dedicated customer support", text: "Questions answered before, during and after booking." },
];

const INCLUDED = [
  "Return flight tickets",
  "Umrah visa assistance and applicable visa fees, subject to the package terms",
  "Hotel accommodation in Makkah",
  "Hotel accommodation in Madinah",
  "Airport pickup and drop-off",
  "Makkah to Madinah transportation",
  "Ziyarat tours where included",
  "Ground transportation",
  "Customer support and travel guidance",
  "Package coordination",
];

const EXCLUDED = [
  "Personal shopping",
  "Personal food expenses unless stated otherwise",
  "Laundry",
  "Personal medical expenses",
  "Additional baggage",
  "Optional excursions",
  "Private services not included in the selected package",
  "Other personal expenses",
];

const STEPS = [
  { title: "Send your inquiry", text: "Tell us your dates, departure city, number of travellers and preferred package." },
  { title: "Receive the latest price and options", text: "We confirm current availability for flights, hotels and visa processing." },
  { title: "Submit your documents", text: "Share passport details and the documents needed for your visa application." },
  { title: "Confirm and pay", text: "Once the package terms are agreed, we confirm your booking." },
  { title: "Prepare and travel", text: "Receive your travel details and guidance ahead of departure." },
];

const FAQS = [
  {
    q: "What is the difference between the 7-day and 15-day Umrah packages?",
    a: "Both cover Makkah and Madinah. The 15-day package gives more time for worship, rest and visits in both cities, while the 7-day package suits travellers with limited leave. Exact day-by-day plans are shown on each package page.",
  },
  {
    q: "What is the difference between Normal, VIP and Premium VIP?",
    a: "The categories differ mainly in flight options, hotel level and distance from Masjid al-Haram, room arrangement, transport and the level of personal coordination. Exact inclusions are confirmed for your selected package.",
  },
  {
    q: "Do you guarantee the Umrah visa?",
    a: "No. Eammu Holidays provides visa assistance, but visa decisions and processing times are decided by the relevant authorities and may change.",
  },
  {
    q: "Why are prices shown as a request?",
    a: "Prices depend on flight availability, hotel availability, travel dates, room sharing and current visa regulations. We confirm the latest per-person price when you inquire.",
  },
  {
    q: "Can I book from the UAE?",
    a: "Yes. See the Umrah from the UAE section on this page, or send us an inquiry with your details.",
  },
  {
    q: "Are bookings confirmed immediately?",
    a: "All bookings are subject to availability and final confirmation by Eammu Holidays.",
  },
];

const RELATED = [
  { href: "#7-days", label: "7 Days Umrah itinerary and packages" },
  { href: "#15-days", label: "15 Days Umrah itinerary and packages" },
  { href: "#visa", label: "Umrah visa assistance explained" },
  { href: "#from-bangladesh", label: "Umrah from Bangladesh" },
  { href: "#from-uae", label: "Umrah from the UAE" },
  { href: "#hotels-flights", label: "Hotels and flights" },
  { href: "#transport", label: "Transport in Makkah and Madinah" },
  { href: "#requirements", label: "Documents and requirements" },
  { href: "#cost", label: "What affects the cost of Umrah" },
  { href: "#process", label: "How booking works" },
  { href: "#faq", label: "Frequently asked questions" },
];

const SERVICES = [
  { href: "/visa/saudi-arabia", label: "Saudi Arabia visa services" },
  { href: "/visa", label: "All visa services" },
  { href: "/flight", label: "Flight booking" },
  { href: "/tour-packages", label: "Other tour packages" },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const fmt = {
  USD: (n) => `$${n.toLocaleString("en-US")}`,
  BDT: (n) => `৳${n.toLocaleString("en-US")}`,
  AED: (n) => `AED ${n.toLocaleString("en-US")}`,
};

function hasPrice(price) {
  return price.USD > 0 && price.BDT > 0 && price.AED > 0;
}

function whatsappHref(message) {
  const num = (contact.whatsappNumber || "").replace(/\D/g, "");
  if (!num) return "/contact";
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

function pkgMessage(p) {
  return `Hello Eammu Holidays, I would like the latest price for the ${p.duration} ${p.category} Umrah package. Preferred currency: (USD / BDT / AED).`;
}

const isExternal = (href) => href.startsWith("http");

function ButtonLink({ href, children, variant = "primary", className = "" }) {
  const styles = {
    primary: "bg-[#F5D84E] text-[#17251D] hover:bg-[#e9c92f]",
    green: "bg-[#075B35] text-white hover:bg-[#064529]",
    outline: "border border-[#075B35] text-[#075B35] hover:bg-[#075B35] hover:text-white",
    light: "border border-white/60 text-white hover:bg-white hover:text-[#064529]",
  };
  const cls = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5D84E] ${styles[variant]} ${className}`;
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

function Price({ price, compact = false }) {
  if (!hasPrice(price)) {
    return <p className="text-lg font-semibold text-[#075B35]">Request Latest Price</p>;
  }
  return (
    <div className={compact ? "text-sm" : ""}>
      <p className={`${compact ? "text-base" : "text-2xl"} font-bold text-[#075B35]`}>{fmt.USD(price.USD)}</p>
      <p className="text-sm text-[#17251D]/80">
        {fmt.BDT(price.BDT)} &nbsp;|&nbsp; {fmt.AED(price.AED)}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function PackageCard({ p }) {
  const featured = p.tier > 0;
  const premium = p.tier === 2;
  return (
    <article
      className={`flex flex-col rounded-lg bg-white p-6 shadow-sm ${
        premium ? "border-2 border-[#F5D84E] ring-1 ring-[#075B35]/20" : featured ? "border-2 border-[#075B35]" : "border border-[#075B35]/15"
      }`}
    >
      <header>
        <p className="text-sm font-medium text-[#075B35]">{p.duration}</p>
        <h3 className="mt-1 text-xl font-bold text-[#17251D]">
          {p.duration} Umrah, {p.category}
        </h3>
      </header>
      <div className="mt-4 border-y border-[#075B35]/10 py-4">
        <Price price={p.price} />
        <p className="mt-1 text-xs text-[#17251D]/70">Per person, based on shared room occupancy.</p>
      </div>
      <dl className="mt-4 space-y-1 text-sm text-[#17251D]">
        <div className="flex gap-2"><dt className="font-semibold">Hotel:</dt><dd>{p.hotel}</dd></div>
        <div className="flex gap-2"><dt className="font-semibold">Room:</dt><dd>{p.room}</dd></div>
        <div className="flex gap-2"><dt className="font-semibold">Flight:</dt><dd>{p.flight}</dd></div>
        <div className="flex gap-2"><dt className="font-semibold">Transport:</dt><dd>{p.transport}</dd></div>
      </dl>
      <ul className="mt-4 flex-1 space-y-2 text-sm text-[#17251D]">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#075B35]" aria-hidden="true" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <ButtonLink href={p.href} variant="green" className="flex-1">
          View details
        </ButtonLink>
        <ButtonLink href={whatsappHref(pkgMessage(p))} variant="outline" className="flex-1">
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> Inquire
        </ButtonLink>
      </div>
    </article>
  );
}

function Comparison() {
  const rows = [
    ["Duration", (p) => p.duration],
    ["Hotel", (p) => p.hotel],
    ["Room", (p) => p.room],
    ["Flight", (p) => p.flight],
    ["Transport", (p) => p.transport],
    ["Support", (p) => p.support],
  ];
  return (
    <div className="overflow-x-auto rounded-lg border border-[#075B35]/15 bg-white">
      <table className="w-full min-w-[960px] border-collapse text-left text-sm">
        <caption className="sr-only">Comparison of the six Eammu Umrah packages</caption>
        <thead>
          <tr className="bg-[#075B35] text-white">
            <th scope="col" className="p-3 font-semibold">Feature</th>
            {PACKAGES.map((p) => (
              <th key={p.key} scope="col" className="p-3 font-semibold">
                {p.duration} {p.category}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, get]) => (
            <tr key={label} className="border-t border-[#075B35]/10 align-top">
              <th scope="row" className="bg-[#F8FAF5] p-3 font-semibold text-[#17251D]">{label}</th>
              {PACKAGES.map((p) => (
                <td key={p.key} className="p-3 text-[#17251D]">{get(p)}</td>
              ))}
            </tr>
          ))}
          <tr className="border-t border-[#075B35]/10 align-top">
            <th scope="row" className="bg-[#F8FAF5] p-3 font-semibold text-[#17251D]">Price per person</th>
            {PACKAGES.map((p) => (
              <td key={p.key} className="p-3"><Price price={p.price} compact /></td>
            ))}
          </tr>
          <tr className="border-t border-[#075B35]/10">
            <th scope="row" className="bg-[#F8FAF5] p-3 font-semibold text-[#17251D]">Details</th>
            {PACKAGES.map((p) => (
              <td key={p.key} className="p-3">
                <Link href={p.href} className="font-semibold text-[#075B35] underline underline-offset-2 hover:text-[#064529]">
                  View package
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}


const DURATIONS = {
  "7 Days": {
    id: "7-days",
    intro:
      "The 7-day plan is built for travellers with limited leave. It covers Umrah in Makkah and a visit to Madinah in a compact schedule. The order of cities and the number of nights in each are confirmed in your quotation, as they depend on the flight and hotel availability.",
    suits: "Working travellers, first-time pilgrims who prefer a focused trip and anyone who cannot take long leave.",
    itinerary: [
      ["Day 1", "Arrival in Saudi Arabia, airport assistance as per package, transfer to your hotel and check-in. Perform Umrah once you have rested."],
      ["Days 2 to 3", "Time in Makkah for tawaf, prayers at Masjid al-Haram and personal worship."],
      ["Day 4", "Check-out and road transfer from Makkah to Madinah."],
      ["Days 5 to 6", "Visit Al-Masjid an-Nabawi and perform prayers. Ziyarat in Madinah where included. Access to Rawdah follows the current permit rules."],
      ["Day 7", "Check-out and transfer to the airport for your return flight."],
    ],
  },
  "15 Days": {
    id: "15-days",
    intro:
      "The 15-day plan gives a slower, more comfortable pace with extra time for worship in both cities. Exact nights in Makkah and Madinah are confirmed in your quotation.",
    suits: "Families, older travellers and anyone who wants more time for worship, rest and ziyarat.",
    itinerary: [
      ["Day 1", "Arrival in Saudi Arabia, transfer to your hotel and check-in. Perform Umrah once you have rested."],
      ["Days 2 to 7", "Extended stay in Makkah for tawaf, prayers at Masjid al-Haram, optional repeat Umrah and rest between worship."],
      ["Day 8", "Check-out and road transfer from Makkah to Madinah."],
      ["Days 9 to 14", "Extended stay in Madinah with daily prayers at Al-Masjid an-Nabawi and ziyarat where included. Rawdah access follows the current permit rules."],
      ["Day 15", "Check-out and transfer to the airport for your return flight."],
    ],
  },
};

const CATEGORIES = {
  Normal: {
    positioning: "The economical option for travellers who want a complete, reliable package without paying for extras.",
    hotel: "Standard hotels in Makkah and Madinah. Distance from the Haram varies, so walking or short transport may be needed. Hotel names and distances are confirmed in your quotation.",
    room: "Shared room occupancy. Per-person pricing assumes you share with other travellers in your group.",
    flight: "Economy return flight. Airline, baggage allowance and airports are confirmed at quotation.",
    transport: "Shared airport transfers and standard ground transportation between cities.",
    support: "Basic customer support and package coordination.",
    suits: "Budget-conscious travellers and groups who are comfortable with shared arrangements.",
  },
  VIP: {
    positioning: "An upgraded experience with better hotels, more flight choice and closer coordination.",
    hotel: "Superior hotels with improved proximity to Masjid al-Haram and Masjid an-Nabawi. Hotel names and distances are confirmed in your quotation.",
    room: "Comfortable room arrangements. Occupancy is confirmed per booking.",
    flight: "Better flight options than the Normal package, such as more convenient timings or airlines where available.",
    transport: "Premium transportation for transfers and between cities.",
    support: "Dedicated travel coordination from inquiry to return.",
    suits: "Families and older travellers who value shorter walking distances and a smoother journey.",
  },
  "Premium VIP": {
    positioning: "The most comfortable package, with luxury hotels, premium flights and personalised assistance.",
    hotel: "Luxury hotels with the best available proximity to the Haram. Hotel names and distances are confirmed in your quotation.",
    room: "Premium room arrangements. Occupancy and room type are confirmed per booking.",
    flight: "Premium flight options where available, subject to airline and date.",
    transport: "Private or premium transfers where contracted. Confirmed at quotation.",
    support: "Dedicated customer assistance and premium Umrah coordination.",
    suits: "Travellers who want maximum comfort, privacy and proximity, including those with mobility needs.",
  },
};

function DetailRow({ label, children }) {
  return (
    <div className="grid gap-1 border-t border-[#075B35]/10 py-3 sm:grid-cols-[9rem_1fr] sm:gap-4">
      <dt className="font-semibold">{label}</dt>
      <dd className="text-sm text-[#17251D]/85">{children}</dd>
    </div>
  );
}

function PackageDetail({ p }) {
  const c = CATEGORIES[p.category];
  const d = DURATIONS[p.duration];
  const border = p.tier === 2 ? "border-2 border-[#F5D84E]" : p.tier === 1 ? "border-2 border-[#075B35]" : "border border-[#075B35]/15";
  return (
    <article id={p.href.slice(1)} className={`scroll-mt-4 rounded-lg bg-white p-6 shadow-sm sm:p-8 ${border}`} aria-labelledby={`${p.key}-title`}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-2xl">
          <h3 id={`${p.key}-title`} className="text-2xl font-bold">{p.duration} Umrah Package, {p.category}</h3>
          <p className="mt-2 text-[#17251D]/85">{c.positioning}</p>
        </div>
        <div className="rounded-md bg-[#F8FAF5] p-4">
          <Price price={p.price} />
          <p className="mt-1 max-w-[16rem] text-xs text-[#17251D]/70">Per person, shared room occupancy. Indicative and subject to availability and confirmation.</p>
        </div>
      </div>

      <dl className="mt-6">
        <DetailRow label="Best suited for">{d.suits} {c.suits}</DetailRow>
        <DetailRow label="Accommodation">{c.hotel}</DetailRow>
        <DetailRow label="Room sharing">{c.room}</DetailRow>
        <DetailRow label="Flights">{c.flight}</DetailRow>
        <DetailRow label="Transport">{c.transport}</DetailRow>
        <DetailRow label="Visa">Umrah visa assistance, with applicable visa fees where stated in your package terms. Visa approval and timing are decided by the authorities and are not guaranteed.</DetailRow>
        <DetailRow label="Support">{c.support}</DetailRow>
      </dl>

      <h4 className="mt-6 text-lg font-bold">Itinerary outline</h4>
      <ol className="mt-3 space-y-2">
        {d.itinerary.map(([day, text]) => (
          <li key={day} className="grid gap-1 rounded-md bg-[#F8FAF5] p-3 text-sm sm:grid-cols-[7rem_1fr] sm:gap-4">
            <span className="font-semibold text-[#075B35]">{day}</span>
            <span>{text}</span>
          </li>
        ))}
      </ol>
      <p className="mt-2 text-xs text-[#17251D]/70">Indicative schedule. The final plan is confirmed with your quotation.</p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="font-bold">Included in this package</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {[...p.highlights, "Hotel accommodation in Makkah and Madinah", "Makkah to Madinah transportation", "Ziyarat tours where included", "Travel guidance and package coordination"].map((i) => (
              <li key={i} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#075B35]" aria-hidden="true" /><span>{i}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Not included</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {["Personal shopping and personal expenses", "Meals unless stated in your package", "Laundry", "Personal medical expenses", "Additional baggage", "Optional excursions and private services outside the package"].map((i) => (
              <li key={i} className="flex gap-2"><X className="mt-0.5 h-4 w-4 shrink-0 text-[#17251D]/60" aria-hidden="true" /><span>{i}</span></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <ButtonLink href={whatsappHref(pkgMessage(p))} variant="primary"><MessageCircle className="h-4 w-4" aria-hidden="true" /> Ask for the latest price</ButtonLink>
        <ButtonLink href="/contact" variant="green">Book this package</ButtonLink>
        <ButtonLink href="#packages" variant="outline">Back to all packages</ButtonLink>
      </div>
    </article>
  );
}

function SectionHeading({ id, title, children }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <h2 id={id} className="text-3xl font-bold text-[#17251D] sm:text-4xl">{title}</h2>
      {children && <p className="mt-3 text-[#17251D]/80">{children}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Structured data                                                     */
/* ------------------------------------------------------------------ */

function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${contact.siteUrl}/#organization`, name: "Eammu Holidays", url: contact.siteUrl },
      { "@type": "WebSite", "@id": `${contact.siteUrl}/#website`, url: contact.siteUrl, name: "Eammu Holidays", publisher: { "@id": `${contact.siteUrl}/#organization` } },
      {
        "@type": "WebPage", "@id": `${PAGE_URL}#webpage`, url: PAGE_URL, name: TITLE, description: DESCRIPTION,
        isPartOf: { "@id": `${contact.siteUrl}/#website` }, inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: contact.siteUrl },
          { "@type": "ListItem", position: 2, name: "Umrah Packages", item: PAGE_URL },
        ],
      },
      {
        "@type": "Service", name: "Umrah package and visa assistance", serviceType: "Umrah travel packages",
        provider: { "@id": `${contact.siteUrl}/#organization` },
        description: "Umrah travel packages including flights, hotels, transport and visa assistance, subject to availability and confirmation.",
        url: PAGE_URL,
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function UmrahPage() {
  const generalInquiry = whatsappHref("Hello Eammu Holidays, I would like to inquire about your Umrah packages.");

  return (
    <main className="bg-[#F8FAF5] text-[#17251D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()).replace(/</g, "\\u003c") }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#064529] text-white" aria-labelledby="hero-title">
        {HERO_IMAGE ? (
          <>
            <Image src={HERO_IMAGE} alt={HERO_IMAGE_ALT} fill priority sizes="100vw" className="-z-20 object-cover" />
            <div className="absolute inset-0 -z-10 bg-[#064529]/75" />
          </>
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-[0.08]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #F5D84E 0 1px, transparent 1px 28px), repeating-linear-gradient(-45deg, #F5D84E 0 1px, transparent 1px 28px)",
            }}
          />
        )}
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/80">
            <ol className="flex gap-2">
              <li><Link href="/" className="underline-offset-2 hover:underline">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Umrah</li>
            </ol>
          </nav>
          <h1 id="hero-title" className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Umrah Packages from Bangladesh &amp; Worldwide
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            Eammu Holidays, your trusted travel and global mobility partner, helps you plan Umrah with flights,
            Makkah and Madinah hotels, transport and visa assistance in one package.
          </p>

          <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            {["7-days", "15-days"].map((d) => (
              <div key={d} className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <p className="font-semibold">{d === "7-days" ? "7 Days Umrah" : "15 Days Umrah"}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[["normal", "Normal"], ["vip", "VIP"], ["premium-vip", "Premium VIP"]].map(([slug, label]) => (
                    <Link
                      key={slug}
                      href={`#${d}-${slug}`}
                      className="rounded-full border border-white/40 px-3 py-1 text-sm hover:bg-[#F5D84E] hover:text-[#17251D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5D84E]"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#packages" variant="primary">
              Book Your Umrah <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={generalInquiry} variant="light">
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp inquiry
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-6xl px-4 py-16" aria-labelledby="trust-title">
        <SectionHeading id="trust-title" title="What you can expect from Eammu Holidays">
          Practical support for the parts of Umrah that are hardest to arrange alone.
        </SectionHeading>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-lg bg-white p-5 shadow-sm">
              <Icon className="h-6 w-6 text-[#075B35]" aria-hidden="true" />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-[#17251D]/80">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Duration + category */}
      <section className="bg-white py-16" aria-labelledby="duration-title">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading id="duration-title" title="Choose your length of stay">
            Both options include time in Makkah and Madinah.
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-2">
            <Link href="#7-days" className="group rounded-lg border border-[#075B35]/15 bg-[#F8FAF5] p-6 hover:border-[#075B35]">
              <Moon className="h-6 w-6 text-[#075B35]" aria-hidden="true" />
              <h3 className="mt-3 text-2xl font-bold">7 Days Umrah</h3>
              <p className="mt-2 text-[#17251D]/80">A focused trip for travellers with limited leave who still want time in both holy cities.</p>
              <span className="mt-4 inline-flex items-center gap-1 font-semibold text-[#075B35] group-hover:underline">
                See 7-day packages <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
            <Link href="#15-days" className="group rounded-lg border border-[#075B35]/15 bg-[#F8FAF5] p-6 hover:border-[#075B35]">
              <Moon className="h-6 w-6 text-[#075B35]" aria-hidden="true" />
              <h3 className="mt-3 text-2xl font-bold">15 Days Umrah</h3>
              <p className="mt-2 text-[#17251D]/80">A longer, calmer schedule with more time for worship, rest and visits.</p>
              <span className="mt-4 inline-flex items-center gap-1 font-semibold text-[#075B35] group-hover:underline">
                See 15-day packages <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          </div>

          <h3 className="mt-14 text-center text-2xl font-bold">Three package levels</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-[#075B35]/15 p-5">
              <h4 className="font-bold">Normal</h4>
              <p className="mt-2 text-sm text-[#17251D]/80">Economy flight, standard hotels, shared rooms and shared transfers. The economical choice.</p>
            </div>
            <div className="rounded-lg border-2 border-[#075B35] p-5">
              <h4 className="font-bold">VIP</h4>
              <p className="mt-2 text-sm text-[#17251D]/80">Better flight options, superior hotels closer to the Haram and dedicated coordination.</p>
            </div>
            <div className="rounded-lg border-2 border-[#F5D84E] p-5">
              <h4 className="font-bold">Premium VIP</h4>
              <p className="mt-2 text-sm text-[#17251D]/80">Premium flights, luxury hotels, premium room arrangements and personalised assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="mx-auto max-w-6xl scroll-mt-4 px-4 py-16" aria-labelledby="packages-title">
        <SectionHeading id="packages-title" title="Compare our six Umrah packages">
          Package features are templates. Final inclusions are confirmed for your dates and travellers.
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <PackageCard key={p.key} p={p} />
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-[#17251D]/75">
          Prices are indicative and subject to flight availability, hotel availability, visa regulations, travel dates,
          room sharing and final confirmation.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16" aria-labelledby="compare-title">
        <SectionHeading id="compare-title" title="Side-by-side comparison" />
        <Comparison />
      </section>

      {/* Detailed package sections */}
      {["7 Days", "15 Days"].map((dur) => (
        <section key={dur} id={DURATIONS[dur].id} className="scroll-mt-4 bg-white py-16" aria-labelledby={`${DURATIONS[dur].id}-title`}>
          <div className="mx-auto max-w-5xl px-4">
            <h2 id={`${DURATIONS[dur].id}-title`} className="text-3xl font-bold sm:text-4xl">{dur} Umrah packages in detail</h2>
            <p className="mt-3 max-w-3xl text-[#17251D]/85">{DURATIONS[dur].intro}</p>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm">
              {PACKAGES.filter((p) => p.duration === dur).map((p) => (
                <li key={p.key}>
                  <Link href={p.href} className="rounded-full border border-[#075B35]/30 px-3 py-1 font-medium text-[#075B35] hover:bg-[#075B35] hover:text-white">{p.category}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-8">
              {PACKAGES.filter((p) => p.duration === dur).map((p) => (
                <PackageDetail key={p.key} p={p} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Included / excluded */}
      <section className="bg-white py-16" aria-labelledby="inc-title">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading id="inc-title" title="What's included and what's not">
            Exact inclusions vary by package and are confirmed before you book.
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-[#F8FAF5] p-6">
              <h3 className="text-xl font-bold">Typically included</h3>
              <ul className="mt-4 space-y-2">
                {INCLUDED.map((i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#075B35]" aria-hidden="true" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-[#F8FAF5] p-6">
              <h3 className="text-xl font-bold">Not included</h3>
              <ul className="mt-4 space-y-2">
                {EXCLUDED.map((i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-[#17251D]/60" aria-hidden="true" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels & flights */}
      <section id="hotels-flights" className="mx-auto max-w-6xl scroll-mt-4 px-4 py-16" aria-labelledby="hf-title">
        <SectionHeading id="hf-title" title="Hotels and flights" />
        <div className="grid gap-6 md:grid-cols-2">
          <div id="hotel-detail" className="scroll-mt-4 rounded-lg bg-white p-6 shadow-sm">
            <Hotel className="h-6 w-6 text-[#075B35]" aria-hidden="true" />
            <h3 className="mt-3 text-xl font-bold">Hotel information</h3>
            <p className="mt-2 text-sm text-[#17251D]/80">
              Hotel category, room sharing and distance from the Haram depend on the package and are confirmed with
              your quotation, including hotel names and photographs.
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>Normal: standard hotels, shared rooms</li>
              <li>VIP: superior hotels, improved Haram proximity</li>
              <li>Premium VIP: luxury hotels, best Haram proximity</li>
            </ul>
            <Link href="#hotel-detail" className="mt-4 inline-block font-semibold text-[#075B35] underline underline-offset-2">
              Read hotel details
            </Link>
          </div>
          <div id="flight-detail" className="scroll-mt-4 rounded-lg bg-white p-6 shadow-sm">
            <Plane className="h-6 w-6 text-[#075B35]" aria-hidden="true" />
            <h3 className="mt-3 text-xl font-bold">Flight information</h3>
            <p className="mt-2 text-sm text-[#17251D]/80">
              Airline, baggage allowance, departure and return airports and flight type are confirmed at the time of
              quotation, as they change with season and availability.
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>Normal: economy return flight</li>
              <li>VIP: better flight options</li>
              <li>Premium VIP: premium flight options</li>
            </ul>
            <Link href="#flight-detail" className="mt-4 inline-block font-semibold text-[#075B35] underline underline-offset-2">
              Read flight details
            </Link>
          </div>
        </div>
      </section>

      {/* Visa */}
      <section id="visa" className="scroll-mt-4 bg-[#075B35] py-16 text-white" aria-labelledby="visa-title">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 id="visa-title" className="text-3xl font-bold sm:text-4xl">Umrah visa assistance</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            We help you prepare documents and submit your application. Visa approval and processing time are decided
            by the relevant authorities, so we cannot guarantee either.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <ButtonLink href="#from-bangladesh" variant="primary">Visa from Bangladesh</ButtonLink>
            <ButtonLink href="#from-uae" variant="light">Visa from the UAE</ButtonLink>
            <ButtonLink href="#requirements" variant="light">Requirements</ButtonLink>
          </div>
        </div>
      </section>

      {/* Guide sections */}
      <section className="bg-white py-16" aria-labelledby="guide-sections-title">
        <div className="mx-auto max-w-4xl space-y-12 px-4 leading-7 text-[#17251D]/90">
          <h2 id="guide-sections-title" className="text-3xl font-bold text-[#17251D] sm:text-4xl">Umrah planning guide</h2>

          <div id="from-bangladesh" className="scroll-mt-4">
            <h3 className="text-2xl font-bold text-[#17251D]">Umrah from Bangladesh</h3>
            <p className="mt-3">
              Travellers from Dhaka and other cities send us their passport details and travel dates, and we arrange
              the visa application, flights, hotels and transfers as one package. Prices can be requested in BDT, USD or AED.
              Flights and departure airports are confirmed at quotation, as they vary by season. Visa steps for Bangladesh
              passport holders and processing times are set by the authorities, so we confirm the current process when you apply.
            </p>
          </div>

          <div id="from-uae" className="scroll-mt-4">
            <h3 className="text-2xl font-bold text-[#17251D]">Umrah from the UAE</h3>
            <p className="mt-3">
              If you live in the UAE, your nationality, residence status and passport determine which documents are
              needed. We review your details, confirm the current requirements and arrange flights from the UAE,
              accommodation and transfers. Prices can be requested in AED. Visa decisions are made by the authorities and are not guaranteed.
            </p>
          </div>

          <div id="requirements" className="scroll-mt-4">
            <h3 className="text-2xl font-bold text-[#17251D]">Documents and requirements</h3>
            <p className="mt-3">Documents usually requested by travel providers include:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>A passport with sufficient validity, as required by current rules</li>
              <li>Recent passport-size photographs</li>
              <li>A completed visa application and travel details</li>
              <li>For UAE residents, a copy of your residence documents</li>
              <li>Any health or vaccination documents required at the time of travel</li>
            </ul>
            <p className="mt-3 rounded-md bg-[#F8FAF5] p-4 text-sm">
              This list is Eammu service guidance, not an official regulation. Official requirements are set by Saudi
              authorities and airlines and change from time to time. Please confirm them with official sources and with us
              before booking. Last reviewed: {LAST_UPDATED}.
            </p>
          </div>

          <div id="transport" className="scroll-mt-4">
            <h3 className="text-2xl font-bold text-[#17251D]">Transport in Saudi Arabia</h3>
            <p className="mt-3">
              Packages include airport transfers and transport between Makkah and Madinah. Normal packages use shared
              transfers and standard ground transportation. VIP packages use premium transportation, and Premium VIP
              packages offer private or premium transfers where contracted. Transport during your stay, such as
              moving between your hotel and the mosque, depends on hotel location.
            </p>
          </div>

          <div id="cost" className="scroll-mt-4">
            <h3 className="text-2xl font-bold text-[#17251D]">What affects the cost of Umrah</h3>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li><strong>Airline and flight class:</strong> economy, better or premium options.</li>
              <li><strong>Travel dates and season:</strong> busy periods usually cost more.</li>
              <li><strong>Hotels and distance from the Haram:</strong> closer and higher category costs more.</li>
              <li><strong>Room sharing:</strong> the number of people per room changes the per-person price.</li>
              <li><strong>Transport:</strong> shared, premium or private transfers.</li>
              <li><strong>Visa-related charges:</strong> as set by the authorities and confirmed in your package terms.</li>
            </ul>
            <p className="mt-3">Because these change often, we confirm the current per-person price when you inquire.</p>
          </div>
        </div>
      </section>

      {/* Gallery (only renders with real photos) */}
      {GALLERY.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-16" aria-labelledby="gallery-title">
          <SectionHeading id="gallery-title" title="Makkah and Madinah" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((g) => (
              <Image key={g.src} src={g.src} alt={g.alt} width={g.width} height={g.height} loading="lazy"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="h-auto w-full rounded-lg object-cover" />
            ))}
          </div>
        </section>
      )}

      {/* Booking process */}
      <section id="process" className="mx-auto max-w-4xl scroll-mt-4 px-4 py-16" aria-labelledby="process-title">
        <SectionHeading id="process-title" title="How booking works" />
        <ol className="space-y-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="flex gap-4 rounded-lg bg-white p-5 shadow-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#075B35] font-bold text-white" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-[#17251D]/80">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimonials (only renders with verified entries) */}
      {TESTIMONIALS.length > 0 && (
        <section className="bg-white py-16" aria-labelledby="testimonial-title">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeading id="testimonial-title" title="What our travellers say" />
            <div className="grid gap-4 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="rounded-lg bg-[#F8FAF5] p-5">
                  <blockquote className="text-sm">{t.quote}</blockquote>
                  <figcaption className="mt-3 text-sm font-semibold">{t.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl scroll-mt-4 px-4 py-16" aria-labelledby="faq-title">
        <SectionHeading id="faq-title" title="Frequently asked questions" />
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-lg bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#075B35]">
                {f.q}
              </summary>
              <p className="mt-3 text-sm text-[#17251D]/85">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* SEO content */}
      <section className="bg-white py-16" aria-labelledby="guide-title">
        <div className="mx-auto max-w-3xl px-4 leading-7 text-[#17251D]/90">
          <h2 id="guide-title" className="text-3xl font-bold text-[#17251D]">Planning an Umrah package from Bangladesh</h2>
          <p className="mt-4">
            An Umrah package bundles the main parts of the journey: flights, a visa application, hotels in Makkah and
            Madinah, and transport between the airport, the hotels and the two cities. For many families in Dhaka,
            Chattogram, Sylhet and across Bangladesh, a single package is simpler than arranging each part separately,
            and it gives one team to ask when something changes.
          </p>
          <h3 className="mt-8 text-xl font-bold text-[#17251D]">Choosing between 7 and 15 days</h3>
          <p className="mt-3">
            A 7-day trip works when time off is limited, and it keeps the schedule tight. A 15-day trip leaves room
            for additional prayers in both mosques, rest between rituals and a slower pace, which many older travellers
            and families prefer. If you are unsure, tell us your leave dates and who is travelling and we will suggest
            what fits.
          </p>
          <h3 className="mt-8 text-xl font-bold text-[#17251D]">Why the price varies</h3>
          <p className="mt-3">
            The airline and travel date, the hotel and its distance from Masjid al-Haram, how many people share a
            room, the transport included and the season all change the final cost. That is why we confirm a current
            per-person price rather than publish one number for the whole year. Our{" "}
            <Link href="#cost" className="font-semibold text-[#075B35] underline underline-offset-2">cost guide</Link>{" "}
            explains each factor.
          </p>
          <h3 className="mt-8 text-xl font-bold text-[#17251D]">Travelling from the UAE or elsewhere</h3>
          <p className="mt-3">
            Residents of the UAE and Bengali-speaking travellers in other countries can also use our service. Visa
            steps and documents differ by country of residence, so see the pages for{" "}
            <Link href="#from-uae" className="font-semibold text-[#075B35] underline underline-offset-2">UAE departures</Link>{" "}
            and{" "}
            <Link href="#visa" className="font-semibold text-[#075B35] underline underline-offset-2">Umrah visa assistance</Link>.
          </p>
          <p className="mt-6 rounded-md bg-[#F8FAF5] p-4 text-sm">
            Requirements and regulations change. Always confirm current entry rules with official sources and with us
            before booking. Guidance on this page was last reviewed in {LAST_UPDATED}. All bookings are subject to
            availability and confirmation.
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="mx-auto max-w-6xl px-4 py-16" aria-labelledby="related-title">
        <SectionHeading id="related-title" title="Explore Umrah in more detail" />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {RELATED.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="flex h-full items-center justify-between gap-2 rounded-lg bg-white p-4 text-sm font-medium shadow-sm hover:text-[#075B35]">
                {r.label} <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
        <h3 className="mt-12 text-center text-xl font-bold">Related travel services</h3>
        <ul className="mt-4 flex flex-wrap justify-center gap-3">
          {SERVICES.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="rounded-full border border-[#075B35]/30 px-4 py-2 text-sm font-medium text-[#075B35] hover:bg-[#075B35] hover:text-white">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Final CTA */}
      <section className="bg-[#064529] py-16 text-white" aria-labelledby="cta-title">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 id="cta-title" className="text-3xl font-bold sm:text-4xl">Ready to plan your Umrah?</h2>
          <p className="mt-3 text-white/90">Tell us your dates and travellers and we will send the latest price and options.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact" variant="primary">Contact Eammu Holidays</ButtonLink>
            <ButtonLink href={generalInquiry} variant="light">
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
            </ButtonLink>
            <ButtonLink href="/about" variant="light">About us</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}