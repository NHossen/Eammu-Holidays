import IndiaVisa from "@/Components/Server/VisaCountry/IndiaVisa/IndiaVisa";
// NOTE: adjust this import path to wherever HomeSeoLinks lives in your project.

import HomeSeoLinks from "@/Components/HomeSeoLinks/HomeSeoLinks";

const PAGE_URL = "https://eammu.com/our-services/visa/india-visa-application";

const TITLE =
  "India Visa from Bangladesh & Dubai: Requirements, Fees & Application | Eammu Holidays";

const DESCRIPTION =
  "Planning an India visa application from Bangladesh or Dubai? Compare e-Visa and regular visa routes, document checklists, government fees, processing times and common rejection reasons, with application support from Eammu Holidays.";

export const metadata = {
  metadataBase: new URL("https://eammu.com"),

  title: TITLE,
  description: DESCRIPTION,

  keywords: [
    "India visa application",
    "India visa requirements",
    "India visa from Bangladesh",
    "India visa from Dubai",
    "India visa for UAE residents",
    "India e-Visa",
    "India tourist visa",
    "India medical visa",
    "India business visa",
    "India visa fees",
    "India visa processing time",
    "Eammu Holidays India visa",
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
    title: TITLE,
    description:
      "India visa guidance for Bangladeshi passport holders and UAE residents: visa types, document checklists, fees, processing and application support.",
    url: PAGE_URL,
    siteName: "Eammu Holidays",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Eammu Holidays India visa application guidance for Bangladesh and Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "India Visa from Bangladesh & Dubai | Requirements, Fees & Process",
    description:
      "e-Visa and regular visa routes, document checklists, fees and processing for India, with support from Eammu Holidays.",
    images: [
      {
        url: "/eammu_banner_four.webp",
        alt: "Eammu Holidays India visa application guidance for Bangladesh and Dubai",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <IndiaVisa />
      <HomeSeoLinks />
    </>
  );
}