import WorkVisaBangladesh from "@/Components/Client/visaServices/Visa/WorkVisaBangladesh/WorkVisaBangladesh";


export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Work Visa from Bangladesh | Europe Work Permit & Job Visa Assistance",
    template: "%s | Eammu Holidays Work Visa",
  },

  description:
    "Apply for a work visa from Bangladesh with Eammu Holidays. We provide Europe work permits, job visas, and employment visa assistance for countries like Poland, Romania, Hungary, and more with high success rate.",

  keywords: [
    "work visa from Bangladesh",
    "Europe work permit Bangladesh",
    "job visa Europe",
    "Poland work visa Bangladesh",
    "Romania work permit",
    "Hungary work visa",
    "overseas job visa Bangladesh",
    "employment visa Bangladesh",
    "visa consultancy Bangladesh",
    "work permit agency Bangladesh"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa-services/work-visa-from-bangladesh",
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
    url: "https://www.eammu.com/our-services/visa-services/work-visa-from-bangladesh",
    siteName: "Eammu Holidays",

    title:
      "Work Visa from Bangladesh | Europe Job Visa Experts",

    description:
      "Get Europe work permits and job visas with expert guidance and fast processing from Bangladesh.",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Work visa services from Bangladesh for Europe jobs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Work Visa from Bangladesh | Europe Work Permits",
    description:
      "Apply for job visas and work permits with expert support.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};


export default function Page() {
  return (
    <>
     <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Work Visa Assistance",
      provider: {
        "@type": "TravelAgency",
        name: "Eammu Holidays"
      },
      areaServed: "Bangladesh"
    }),
  }}
/>
     <WorkVisaBangladesh />
    </>
  );
}