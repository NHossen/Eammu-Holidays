import VisaClientContent from '@/Components/Client/visaServices/Visa/VisaClientContent';
import { countries } from '@/data/visaData/visaData';

import Link from 'next/link';

export const metadata = {
  title: "Visa Consultancy Bangladesh | Leading Travel Agency Bangladesh",
  description: "Eammu Holidays provides expert visa services for Tourist, Student, and Work visas across USA, UK, Europe, Canada, Australia, Japan, UAE, Malaysia, and more.",
  keywords: "Visa services Bangladesh, USA tourist visa, UK student visa, Canada visitor visa, Europe work visa, Hajj & Umrah packages",
  alternates: { canonical: 'https://eammu.com/visa-services' },
};

export default function VisaServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Eammu Holidays",
    "url": "https://eammu.com",
    "telephone": "+8801631312524",
    "areaServed": countries.map(c => ({ "@type": "Country", "name": c.name })),
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero এবং Filterable Content সব এই Client Component এ থাকবে */}
      <VisaClientContent />

      {/* Static Footer CTA - Server Side */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-[#005a31] text-white p-12 rounded-[3.5rem] text-center relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Visa Consultation Today</h2>
          <p className="text-green-50 max-w-2xl mx-auto mb-10 text-lg">
            End-to-end support for <strong>student, work, and tourist visas</strong>, Hajj & Umrah, and group travel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/8801631312524" className="bg-white text-[#005a31] px-10 py-4 rounded-full font-bold shadow-xl hover:bg-green-50 transition">WhatsApp Consultation</a>
            <Link href="/" className="bg-transparent border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition">Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}