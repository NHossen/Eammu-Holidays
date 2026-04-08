import WorkVisaBangladesh from "@/Components/Client/visaServices/Visa/WorkVisaBangladesh/WorkVisaBangladesh";


// --- SERVER SIDE METADATA (SEO) ---
export const metadata = {
  title: 'Work Visa Application from Bangladesh | Visa Services Bangladesh',
  description: 'Apply for skilled and semi-skilled work visas from Bangladesh to UK, Canada, Europe, & Middle East. Eammu Holidays provides professional work permit consultancy.',
  keywords: 'work visa from Bangladesh, Canada work permit Dhaka, UK skilled worker visa, Romania work visa Bangladesh, Eammu Holidays work visa',
  alternates: {
    canonical: 'https://eammu.com/visa-services/work-visa-application-from-bangladesh',
  },
  openGraph: {
    title: 'Global Career - Work Visa Services | Eammu Holidays',
    description: 'Expert guidance for Skilled Worker Visas, LMIA Permits, and European Work Contracts.',
    images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Eammu Holidays",
  "url": "https://eammu.com",
  "logo": "https://eammu.com/images/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gomoti Tower, 1st Floor, Cantonment",
    "addressLocality": "Cumilla",
    "addressCountry": "BD"
  },
  "contactPoint": [
    { "@type": "ContactPoint", "telephone": "+8801631312524", "contactType": "customer service" }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
     <WorkVisaBangladesh />
    </>
  );
}