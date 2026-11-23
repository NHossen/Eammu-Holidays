import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";
import AlbaniaVisa from "@/Components/Server/VisaCountry/AlbaniaVisa/AlbaniaVisa";

const PAGE_URL = "https://eammu.com/our-services/visa/albania-visa-application";
const OG_IMAGE = "/eammu_banner_four.webp";

export const metadata = {
  metadataBase: new URL("https://eammu.com"),

  title: "Albania Visa Application from Bangladesh & Dubai | Eammu Holidays",

  description:
    "Albania visa guide for Bangladeshi and UAE-based travelers: visa types, document checklists, fees, processing time, e-Visa steps and rejection tips. Get application support from Eammu Holidays.",

  keywords: [
    "Albania visa application from Bangladesh",
    "Albania visa from Dubai",
    "Albania visa requirements",
    "Albania tourist visa",
    "Albania e-Visa application",
    "Albania visa fees",
    "Albania visa for UAE residents",
    "Albania visa for Bangladeshi citizens",
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
    title: "Albania Visa Application from Bangladesh & Dubai | Eammu Holidays",
    description:
      "Visa types, documents, fees, processing time and application steps for Albania, written for Bangladeshi and UAE-based travelers.",
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
    title: "Albania Visa Application from Bangladesh & Dubai",
    description:
      "Albania visa requirements, documents, fees and e-Visa steps, with application support from Eammu Holidays.",
    images: [
      {
        url: OG_IMAGE,
        alt: "Eammu Holidays Albania visa application guide for Bangladesh and UAE applicants",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <AlbaniaVisa />
      <HomeSeoLinks />
    </>
  );
}