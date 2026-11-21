import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import AboutServer, {
  CONTACT,
  FOUNDING_YEAR,
  SERVICE_MARKETS,
  SITE,
  faqs,
} from "@/Components/Server/AboutServer/AboutServer";

const PAGE_URL = `${SITE}/about`;
const ORG_ID = `${SITE}/#organization`;

export const metadata = {
  metadataBase: new URL(SITE),
  // `absolute` prevents a root-layout title template from appending the brand twice.
  title: { absolute: "About Eammu Holidays | Travel, Visa & Study Abroad Consultancy" },
  description:
    "Bangladesh-based travel, study abroad and visa consultancy serving Dhaka, Chattogram, Sylhet and nationwide, with flights, tours, Umrah and international visa guidance.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "About Eammu Holidays | Travel, Visa & Study Abroad Consultancy",
    description:
      "Meet Eammu Holidays: international travel, overseas education and visa guidance with transparent advice, from Bangladesh to the world.",
    url: PAGE_URL,
    siteName: "Eammu Holidays",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Holidays travel, visa and overseas education consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Eammu Holidays",
    description:
      "Travel, visa and overseas education guidance from Bangladesh. Air tickets, tours, Umrah and study abroad support.",
    images: ["/preview-banner.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

/* ───────── JSON-LD: one @graph, entities linked by @id ───────── */

const service = (id, name, description) => ({
  "@type": "Service",
  "@id": `${PAGE_URL}#${id}`,
  name,
  description,
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "Country", name: "Bangladesh" },
});

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "TravelAgency"],
      "@id": ORG_ID,
      name: "Eammu Holidays",
      url: SITE,
      logo: `${SITE}/logo.png`,
      image: `${SITE}/preview-banner.webp`,
      description:
        "Travel, overseas education and visa consultancy originating from Bangladesh, offering air ticketing, tour packages, Umrah travel and global mobility guidance.",
      slogan: "Connecting You To The World",
      // Only emitted once FOUNDING_YEAR is confirmed in AboutServer.jsx
      ...(FOUNDING_YEAR ? { foundingDate: FOUNDING_YEAR } : {}),
      email: CONTACT.email,
      telephone: CONTACT.phone,
      areaServed: SERVICE_MARKETS.map((m) => m.code),
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: CONTACT.phone,
          email: CONTACT.email,
          availableLanguage: ["English", "Bengali"],
        },
      ],
      sameAs: [
        "https://www.facebook.com/eammuholidays",
        "https://www.instagram.com/eammuholidays",
      ],
      // No address, employee count, rating or review data: none verified.
    },
    {
      "@type": "AboutPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "About Eammu Holidays",
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", "@id": `${SITE}/#website`, url: SITE, name: "Eammu Holidays" },
      about: { "@id": ORG_ID },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE}/preview-banner.webp` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "About Us", item: PAGE_URL },
      ],
    },
    service("education", "Overseas education consultancy", "Guidance for students from Bangladesh on course and university selection, applications, SOP, financial documents and student visa preparation."),
    service("tourist-visa", "Tourist and visitor visa guidance", "Document checklists, itinerary preparation and application guidance for tourist and family visit visas."),
    service("air-ticketing", "International air ticketing", "One-way, return, multi-city, group and corporate flight reservations and ticketing."),
    service("tours", "International tour packages", "Customised holiday, family, honeymoon and group tours worldwide and within Bangladesh."),
    service("umrah", "Umrah travel services", "Umrah travel planning including flights, hotels and travel coordination."),
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

// Escape "<" so no string value can close the script tag.
const jsonLd = JSON.stringify(graph).replace(/</g, "\\u003c");

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <AboutServer />
      <HomeSeoLinks />
    </>
  );
}