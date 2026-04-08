import TouristVisaBangladesh from "@/Components/Client/visaServices/Visa/TouristVisaBangladesh/TouristVisaBangladesh";

export const metadata= {
  title: 'Tourist Visa Application from Bangladesh | Best Travel Agency Dhaka',
  description: 'Apply for a tourist visa from Bangladesh to USA, UK, Canada, Australia, and Schengen countries. Eammu Holidays provides expert documentation support, consultation, and high visa approval rates.',
  keywords: 'tourist visa Application Bangladesh, USA tourist visa Dhaka, UK tourist Application visa Bangladesh, Canada visitor visa Application, Schengen visa Application Bangladesh, Eammu Holidays visa agency, travel agency Bangladesh',
  alternates: {
    canonical: 'https://eammu.com/visa-services/tourist-visa-application-from-bangladesh',
  },
  openGraph: {
    type: 'website',
    title: 'Tourist Visa from Bangladesh | Eammu Holidays',
    description: 'Eammu Holidays helps Bangladeshi travelers get tourist visas for USA, UK, Canada, Australia, and Europe.',
    images: ['https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'],
  },
}

// You can add the JSON-LD script here as well:
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
      <TouristVisaBangladesh />
    </>
  )
}