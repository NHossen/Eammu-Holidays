import React from "react";
import Link from "next/link";
import ActivitiesPage from "@/Components/Client/ActivitiesPage/ActivitiesPage";
import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import {
  ACTIVITIES,
  SITE_URL,
  waLink,
} from "@/Components/Client/ActivitiesPage/activitiesData";

const PAGE_URL = `${SITE_URL}/our-services/things-to-do`;

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Things to Do in Bangladesh, Dubai, Georgia & Armenia | Eammu Holidays",
  },

  description:
    "Plan things to do in Bangladesh, Dubai, Georgia and Armenia: Sylhet and Dhaka tours, desert safaris, Yerevan sightseeing and Georgia wine trips with Eammu Holidays.",

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
    title: "Things to Do & Top Activities | Eammu Holidays",
    description:
      "Desert safaris, city tours, wine regions and heritage trips across Bangladesh, Dubai, Georgia and Armenia.",
    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Top things to do and travel activities with Eammu Holidays",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Things to Do & Top Activities | Eammu Holidays",
    description:
      "Tours and activities in Bangladesh, Dubai, Georgia and Armenia. Ask Eammu Holidays for options.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};

// Visible FAQ content. The same array feeds the FAQPage JSON-LD, so markup always matches the page.
const FAQS = [
  {
    q: "Which activities can I ask Eammu Holidays about?",
    a: "This page highlights Sylhet and Dhaka tours in Bangladesh, desert safari experiences in Dubai, city and heritage sightseeing in Armenia, and wine and mountain trips in Georgia. If you want something else, message us and we will tell you what we can arrange.",
  },
  {
    q: "How much do the activities cost?",
    a: "Prices depend on the season, group size, inclusions and your travel dates, so we do not list fixed prices here. Send us your plan and we will share the available options and a quotation.",
  },
  {
    q: "Do I need a visa for Armenia or Georgia?",
    a: "It depends on your nationality and travel plans. Please read our Armenia and Georgia visa guides and confirm the current rules before booking.",
  },
  {
    q: "When is the best time for a Dubai desert safari?",
    a: "Visitors generally find the cooler months, roughly October to April, more comfortable for desert activities. Summer months are very hot, and some programmes run at different hours. Ask us about timings for your dates.",
  },
  {
    q: "When is the best time to visit Ratargul Swamp Forest in Sylhet?",
    a: "The forest is most striking in the rainy season, when it is flooded and can be explored by boat. Water levels vary from year to year, so confirm before you travel.",
  },
  {
    q: "Can I combine several activities or countries in one trip?",
    a: "Yes, you can ask for a combined plan. Share your dates, group size and destinations and we will discuss what is possible.",
  },
];

const STEPS = [
  {
    t: "Pick an activity",
    d: "Browse the activity cards above or the guides below and choose what interests you.",
  },
  {
    t: "Message us on WhatsApp",
    d: "Tell us your preferred dates, number of travelers and any special requests.",
  },
  {
    t: "Get options and confirm",
    d: "We reply with available options and the booking process. Availability and terms are confirmed for each request.",
  },
];

// Safe JSON-LD serialization (prevents </script> injection)
const serializeJsonLd = (data) =>
  JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Things to Do & Top Activities | Eammu Holidays",
      description:
        "Tours and activities in Bangladesh, Dubai, Georgia and Armenia, with enquiry and booking through Eammu Holidays.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}#activities` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Things to Do", item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#activities`,
      name: "Top activities with Eammu Holidays",
      numberOfItems: ACTIVITIES.length,
      itemListElement: ACTIVITIES.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: a.title,
        url: `${SITE_URL}${a.link}`,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <ActivitiesPage
        faq={
          <section
            className="mx-auto max-w-4xl px-4 pb-20 md:px-6"
            aria-labelledby="faq-title"
          >
            <h2
              id="faq-title"
              className="mb-8 text-center text-3xl font-black tracking-tight text-[#005a31] md:text-4xl"
            >
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {FAQS.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <summary className="cursor-pointer list-none font-bold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a31]">
                    {f.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        }
      >
        {/* INTRO */}
        <section
          className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6"
          aria-labelledby="intro-title"
        >
          <h2
            id="intro-title"
            className="text-3xl font-black tracking-tight text-[#005a31] md:text-4xl"
          >
            Tours and activities for your next trip
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Eammu Holidays helps travelers plan day tours, city sightseeing and signature experiences in
            Bangladesh, Dubai, Georgia and Armenia. Pick an activity, tell us your dates and group size,
            and we will share the options available for your plan.
          </p>
          <p className="mt-3 leading-relaxed text-gray-600">
            Looking for a longer trip? See our{" "}
            <Link
              href="/our-services/tour-packages"
              className="font-semibold text-[#005a31] underline underline-offset-4"
            >
              international and Bangladesh tour packages
            </Link>
            . Heading to Armenia or Georgia? Check the{" "}
            <Link
              href="/visa-services/armenia-visa-application"
              className="font-semibold text-[#005a31] underline underline-offset-4"
            >
              Armenia visa guide
            </Link>{" "}
            and the{" "}
            <Link
              href="/visa-services/georgia-visa-application"
              className="font-semibold text-[#005a31] underline underline-offset-4"
            >
              Georgia visa guide
            </Link>
            .
          </p>
        </section>

        {/* ACTIVITY GUIDES */}
        <section
          id="activity-guides"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-16 md:px-6"
          aria-labelledby="guides-title"
        >
          <h2
            id="guides-title"
            className="mb-10 text-center text-3xl font-black tracking-tight text-[#005a31] md:text-4xl"
          >
            Activity guides
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ACTIVITIES.map((a) => (
              <article
                key={a.id}
                className="flex flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-lg"
              >
                <p className="text-[10px] font-black uppercase tracking-widest text-[#005a31]">
                  {a.region}
                </p>
                <h3 className="mt-1 text-xl font-black text-gray-900">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{a.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {a.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#005a31]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex-1 text-xs leading-relaxed text-gray-500">{a.note}</p>
                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href={waLink(a.waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-[#005a31] py-3 text-center text-sm font-bold text-white transition hover:bg-[#003e24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a31]"
                  >
                    Book via WhatsApp
                  </a>
                  <Link
                    href={a.secondary.href}
                    className="rounded-xl border border-[#005a31] py-3 text-center text-sm font-semibold text-[#005a31] transition hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a31]"
                  >
                    {a.secondary.label}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          className="mx-auto max-w-5xl px-4 pb-8 md:px-6"
          aria-labelledby="how-title"
        >
          <h2
            id="how-title"
            className="mb-8 text-center text-3xl font-black tracking-tight text-[#005a31] md:text-4xl"
          >
            How booking works
          </h2>
          <ol className="grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.t} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#005a31] font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-center text-sm text-gray-600">
            Helpful details to share: activity, travel dates, number of adults and children, pick-up
            location and any special requests.
          </p>
        </section>
      </ActivitiesPage>

      <HomeSeoLinks />
    </main>
  );
}