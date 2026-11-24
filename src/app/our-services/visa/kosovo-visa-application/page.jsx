import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import KosovoVisa from "@/Components/Server/VisaCountry/KosovoVisa/KosovoVisa";

const PAGE_URL = "https://eammu.com/our-services/visa/kosovo-visa-application";
const OG_IMAGE = "/eammu_kosovo_banner.webp";
const OG_ALT =
  "Eammu Holidays Kosovo sticker visa guide for Bangladeshi citizens and UAE residents";

export const metadata = {
  metadataBase: new URL("https://eammu.com"),

  title: "Kosovo Visa for Bangladeshis & UAE Residents 2026 | Eammu",

  description:
    "Kosovo visa guide for Bangladeshi passport holders: sticker visa process, Type C and Type D visas, document checklist, fees, processing time and rejection tips. Application support from Eammu Holidays.",

  keywords: [
    // Primary
    "Kosovo visa application",
    "Kosovo visa for Bangladeshi citizens",
    "Kosovo sticker visa",
    "Kosovo tourist visa",
    "Kosovo visa requirements",
    "apply Kosovo visa 2026",
    // Geo-targeted
    "Kosovo visa from Bangladesh",
    "Kosovo visa for Bangladeshi in Dubai",
    "Kosovo visa from Dubai",
    "Kosovo visa from UAE",
    "Kosovo visa for UAE residents",
    "Kosovo visa for Indians in Dubai",
    "Kosovo visa for Pakistanis in Dubai",
    "Kosovo visa for Filipinos in Dubai",
    // Intent
    "Kosovo visa fee",
    "Kosovo visa fee Bangladesh",
    "Kosovo visa documents required",
    "Kosovo visa processing time",
    "Kosovo visa rejection reasons",
    "Kosovo visa with Schengen visa",
    "Kosovo visa exemption Schengen residence permit",
    "Kosovo visa on arrival",
    "Kosovo e-visa",
    // Long-tail
    "how to apply Kosovo visa from Bangladesh",
    "Kosovo Type C visa",
    "Kosovo Type D visa",
    "Kosovo business visa",
    "Kosovo family visit visa",
    "Pristina travel visa support",
    "Kosovo visa consultancy",
    "Eammu Holidays Kosovo visa",
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
    title: "Kosovo Visa for Bangladeshis & UAE Residents 2026 | Eammu Holidays",
    description:
      "Kosovo sticker visa process, documents, fees and processing time for Bangladeshi passport holders in Bangladesh and the UAE.",
    url: PAGE_URL,
    siteName: "Eammu Holidays",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: OG_ALT,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kosovo Visa for Bangladeshis & UAE Residents 2026",
    description:
      "Kosovo sticker visa requirements, documents, fees and application steps, with support from Eammu Holidays.",
    images: [{ url: OG_IMAGE, alt: OG_ALT }],
  },

  authors: [{ name: "Eammu Holidays", url: "https://eammu.com" }],
  creator: "Eammu Holidays",
  publisher: "Eammu Holidays",
  category: "Travel & Visa Services",
};

export default function Page() {
  return (
    <>
      <KosovoVisa />
      <HomeSeoLinks />
    </>
  );
}