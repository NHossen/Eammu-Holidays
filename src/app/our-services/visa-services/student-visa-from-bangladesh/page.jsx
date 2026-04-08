import StudentVisaBangladesh from "@/Components/Client/visaServices/Visa/StudentVisaBangladesh/StudentVisaBangladesh";



// --- SERVER SIDE SEO ---
export const metadata = {
  title: 'Student Visa Application Bangladesh | Education Consultancy Bangladesh',
  description: 'Looking for the best student visa consultant in Bangladesh? Eammu Holidays provides expert guidance for USA, UK, Canada, and Australia student visas. Trusted study abroad advisors since 2018.',
  alternates: {
    canonical: 'https://eammu.com/visa-services/student-visa-application-from-bangladesh',
  },
  openGraph: {
    title: 'Study Abroad from Bangladesh | Eammu Holidays',
    description: 'Expert student visa consultancy for UK, USA, Canada, and Australia.',
    images: ['https://etias.com/assets/uploads/imagery/blog/study-abroad-safety-guide-hero.jpg'],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Eammu Holidays",
  "url": "https://eammu.com",
  "logo": "https://eammu.com/images/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gomoti Tower, 1st Floor, Cantonment",
    "addressLocality": "Cumilla",
    "addressCountry": "BD"
  }
};

export default function Page() {
  return (
    <>
      {/* Injecting Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* The Actual Visual Content */}
      <StudentVisaBangladesh />
      
    </>
  );
}