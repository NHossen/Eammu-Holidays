import StudentVisaBangladesh from "@/Components/Client/visaServices/Visa/StudentVisaBangladesh/StudentVisaBangladesh";

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Student Visa from Bangladesh | Study Abroad Visa Assistance 2026",
    template: "%s | Eammu Holidays Education Visa",
  },

  description:
    "Apply for a student visa from Bangladesh with expert guidance. Eammu Holidays helps you secure study visas for the UK, USA, Canada, Europe, and more with easy documentation and high success rate.",

  keywords: [
    "student visa from Bangladesh",
    "study abroad Bangladesh",
    "UK student visa Bangladesh",
    "USA student visa process",
    "Canada student visa Bangladesh",
    "Europe study visa",
    "education consultancy Bangladesh",
    "study visa requirements 2026",
    "apply student visa Bangladesh",
    "student visa agency Bangladesh"
  ],

  alternates: {
    canonical:
      "https://www.eammu.com/our-services/visa-services/student-visa-from-bangladesh",
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
    url: "https://www.eammu.com/our-services/visa-services/student-visa-from-bangladesh",
    siteName: "Eammu Holidays",

    title:
      "Student Visa from Bangladesh | Study Abroad Experts",

    description:
      "Get expert support for student visas to UK, USA, Canada, and Europe. Fast and reliable service from Bangladesh.",

    images: [
      {
        url: "/preview-banner.webp",
        width: 1200,
        height: 630,
        alt: "Student visa services from Bangladesh for study abroad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Student Visa from Bangladesh | Study Abroad",
    description:
      "Apply for student visa with expert guidance and high success rate.",
    images: ["/preview-banner.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};


export default function Page() {
  return (
    <>
      {/* Injecting Structured Data */}
     <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Student Visa Assistance",
      provider: {
        "@type": "TravelAgency",
        name: "Eammu Holidays"
      },
      areaServed: "Bangladesh",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceLocation: {
          "@type": "Place",
          name: "Eammu Holidays Bangladesh Office"
        }
      }
    }),
  }}
/>
      
      {/* The Actual Visual Content */}
      <StudentVisaBangladesh />
      
    </>
  );
}