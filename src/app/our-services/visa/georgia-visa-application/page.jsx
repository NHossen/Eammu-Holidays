import GeorgiaVisa from "@/Components/Server/VisaCountry/GeorgiaVisa/GeorgiaVisa";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title:
    "Georgia Visa Requirements, Fees, and Application | Tourist & Visit Visa Support",

  description:
    "Check Georgia visa requirements, fees, and application process from Bangladesh with Eammu Holidays. Get expert support for tourist visa, visit visa, required documents, fast processing guidance, and travel assistance for Tbilisi, Georgia.",

  keywords: [
    "Georgia visa requirements",
    "Georgia visa fees Bangladesh",
    "Georgia visa application",
    "Georgia tourist visa Bangladesh",
    "Georgia visit visa Bangladesh",
    "Apply Georgia visa from Bangladesh",
    "Tbilisi visa support",
    "Georgia visa documents",
    "Georgia travel visa agency Bangladesh",
    "Eammu Holidays Georgia visa"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa/georgia-visa-application",
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
    title:
      "Georgia Visa Requirements, Fees, and Application | Tourist & Visit Visa Support",

    description:
      "Professional Georgia visa support for Bangladeshi travelers. Tourist and visit visa guidance with documents, fees, and application assistance.",

    url:
      "https://www.eammu.com/our-services/visa/georgia-visa-application",

    siteName: "Eammu Holidays",

    type: "website",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Georgia visa requirements fees and application support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Georgia Visa Requirements, Fees, and Application",

    description:
      "Tourist and visit visa support for Georgia from Bangladesh.",

    images: ["/eammu_banner_four.webp"],
  },
};

export default function Page() {
  return (
    <div>
      <GeorgiaVisa />
    </div>
  );
}