import StudentVisaBangladesh from '@/Components/Client/visaServices/Visa/StudentVisaBangladesh/StudentVisaBangladesh'
import React from 'react'

export const metadata = {
  metadataBase: new URL("https://www.eammu.com"),

  title: {
    default:
      "Study Abroad Consultancy | UK, USA, Canada, Europe Admissions",
    template: "%s | Eammu Holidays Study Abroad",
  },

  description:
    "Start your study abroad journey with Eammu Holidays. We provide expert guidance for UK, USA, Canada, Australia, and Europe university admissions, student visas, and full education consultancy support from Bangladesh.",

  keywords: [
    "study abroad consultancy Bangladesh",
    "study in UK from Bangladesh",
    "Canada student visa Bangladesh",
    "USA study abroad agency",
    "Europe study visa consultant",
    "Australia student visa help",
    "foreign university admission",
    "education consultancy Bangladesh",
    "apply study abroad",
    "student visa guidance"
  ],

  alternates: {
    canonical: "https://www.eammu.com/study-abroad",
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
    url: "https://www.eammu.com/study-abroad",
    siteName: "Eammu Holidays",

    title:
      "Study Abroad Consultancy | UK, USA, Canada & Europe",

    description:
      "Get expert help for university admission and student visa processing for top study destinations worldwide.",

    images: [
      {
        url: "/eammu_banner_four.webp",
        width: 1200,
        height: 630,
        alt: "Study abroad consultancy for UK USA Canada Europe",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Study Abroad | Student Visa & University Admission",
    description:
      "Expert study abroad consultancy for top global universities.",
    images: ["/eammu_banner_four.webp"],
  },

  icons: {
    icon: "/emf.jpg",
  },
};
export default function page() {
  return (
    <div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalProgram",
      name: "Study Abroad Consultancy",
      provider: {
        "@type": "TravelAgency",
        name: "Eammu Holidays"
      },
      areaServed: "Bangladesh",
      educationalProgramMode: "online"
    }),
  }}
/>
       <StudentVisaBangladesh />
    </div>
  )
}
