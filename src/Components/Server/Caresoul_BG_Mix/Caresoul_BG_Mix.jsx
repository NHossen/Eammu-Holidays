// Caresoul_BG_Mix.jsx
// IMPORTANT: No 'use client' here. This is a Server Component for maximum SEO Indexing.

import Image from 'next/image';

const Caresoul_BG_Mix = () => {
const galleryImages = [
    {
      src: "/best-education-consultancy-bangladesh-dhaka.webp",
      alt: "Best Education Consultancy in Bangladesh 2026 - Student Visa Experts Dhaka",
      title: "Education Consultancy Bangladesh"
    },
    {
      src: "/best-travel-agency-bangladesh-dhaka.webp",
      alt: "Top Rated Travel Agency in Bangladesh for Air Ticket Booking and Tour Packages",
      title: "Travel Agency Bangladesh"
    },
    {
      src: "/top-travel-agency-bangladesh.webp",
      alt: "Best Tour Operator in Bangladesh - Trusted Visa Processing Agency 2026",
      title: "Tour Operator Bangladesh"
    },
    {
      src: "/best-travel-agency-dhaka-cumilla.webp",
      alt: "Eammu Holidays Office - Trusted Travel Agency near me in Dhaka and Cumilla",
      title: "Travel Agency Dhaka & Cumilla"
    }
  ];

  return (
    <section className="px-4 container mx-auto" aria-label="Eammu Holidays Gallery">
      <div className="carousel carousel-center rounded-box grid gap-2 lg:grid-cols-4 grid-cols-1 justify-center p-2">
        {galleryImages.map((image, idx) => (
          <article key={idx} className="carousel-item">
            <Image 
              className="lg:w-75 w-full h-auto object-cover shadow-sm" 
              src={image.src} 
              alt={image.alt}
              width={300}
              height={300}
            />
            {/* SEO Invisible Heading for Crawlers */}
            <h3 className="sr-only">{image.alt}</h3>
          </article>
        ))}
      </div>
      
      {/* Supplemental SEO Text to support the images */}
      <div className="mt-4 text-center">
        <p className="text-gray-500 text-sm italic">
          Eammu Holidays is <strong>IATA accredited travel agency in Bangladesh</strong> and 
          <strong> student visa consultancy</strong> operations in Dhaka, Cumilla, and Dubai.
        </p>
      </div>
    </section>
  );
};

export default Caresoul_BG_Mix;