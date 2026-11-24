import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import AlbaniaVisa from "@/Components/Server/VisaCountry/AlbaniaVisa/AlbaniaVisa";

const PAGE_URL = "https://eammu.com/our-services/visa/albania-visa-application";
const OG_IMAGE = "/eammu_banner_four.webp";

export const metadata = {
  metadataBase: new URL("https://eammu.com"),

  title: "Albania Visa Application 2026 for Bangladesh & Dubai | Eammu",

  description:
    "Albania visa guide for Bangladeshi and UAE-based travelers: visa types, document checklists, fees, processing time, e-Visa steps, entry rules and rejection tips. Get application support from Eammu Holidays.",

  keywords: [
    // Primary
    "Albania visa application",
    "Albania e-Visa application",
    "Albania tourist visa",
    "apply Albania visa 2026",
    "Albania visa online",
    // Geo-targeted
    "Albania visa from Bangladesh",
    "Albania visa application from Bangladesh",
    "Albania visa from Dubai",
    "Albania visa from UAE",
    "Albania visa for UAE residents",
    "Albania visa for Bangladeshi citizens",
    "Albania visa for Bangladeshi in Dubai",
    "Albania visa for Indians in Dubai",
    "Albania visa for Pakistanis in Dubai",
    "Albania visa for Filipinos in Dubai",
    // Intent
    "Albania visa requirements",
    "Albania visa fees",
    "Albania visa processing time",
    "Albania visa documents required",
    "Albania visa rejection reasons",
    "Albania visa on arrival",
    "Albania visa free countries",
    "Albania visa extension",
    // Long-tail
    "how to apply for Albania visa from Dubai",
    "Albania Type C visa",
    "Albania Type D visa",
    "Albania work permit",
    "Albania digital nomad residence",
    "Tirana travel visa support",
    "Albania visa consultancy",
    "Albania visa agency Dubai",
    "Eammu Holidays Albania visa",
  ],

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
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Albania Visa Application 2026 for Bangladesh & Dubai | Eammu Holidays",
    description:
      "Albania visa types, documents, fees, processing time, entry rules and application steps for Bangladeshi and UAE-based travelers.",
    url: PAGE_URL,
    siteName: "Eammu Holidays",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Eammu Holidays Albania visa application guide for Bangladesh and UAE applicants",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Albania Visa Application 2026 for Bangladesh & Dubai",
    description:
      "Albania visa requirements, documents, fees, e-Visa steps and entry rules, with application support from Eammu Holidays.",
    images: [
      {
        url: OG_IMAGE,
        alt: "Eammu Holidays Albania visa application guide for Bangladesh and UAE applicants",
      },
    ],
  },

  authors: [{ name: "Eammu Holidays", url: "https://eammu.com" }],
  creator: "Eammu Holidays",
  publisher: "Eammu Holidays",
  category: "Travel & Visa Services",
};

export default function Page() {
  return (
    <>
      <AlbaniaVisa />
      <HomeSeoLinks />
    </>
  );
}