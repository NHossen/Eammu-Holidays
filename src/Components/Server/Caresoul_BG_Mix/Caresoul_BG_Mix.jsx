import Image from 'next/image';

const Caresoul_BG_Mix = () => {
  const galleryImages = [
    { src: "/best-education-consultancy-bangladesh-dhaka.webp", alt: "Best Education Consultancy in Bangladesh 2026 - Student Visa Experts Dhaka" },
    { src: "/best-travel-agency-bangladesh-dhaka.webp", alt: "Top Rated Travel Agency in Bangladesh for Air Ticket Booking and Tour Packages" },
    { src: "/top-travel-agency-bangladesh.webp", alt: "Best Tour Operator in Bangladesh - Trusted Visa Processing Agency 2026" },
    { src: "/best-travel-agency-dhaka-cumilla.webp", alt: "Eammu Holidays Office - Trusted Travel Agency near me in Dhaka and Cumilla" }
  ];

  return (
    <section className="px-8 container mx-auto py-8" aria-label="Eammu Holidays Gallery">
      {/* Grid container with explicit gap */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, idx) => (
          <article key={idx} className="w-full">
            {/* 1. 'aspect-[3/4]' forces the "tall/long" rectangular look.
               2. 'relative' allows the Image component to 'fill' the container.
               3. 'overflow-hidden' + 'rounded-lg' keeps it clean.
            */}
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg shadow-md bg-gray-100">
              <Image 
                src={image.src} 
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                // Only use priority on the first 2 images to help LCP
                priority={idx < 2} 
              />
            </div>
            <h3 className="sr-only">{image.alt}</h3>
          </article>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600 text-sm italic">
          Eammu Holidays is <strong>IATA accredited travel agency in Bangladesh</strong> and 
          <strong> student visa consultancy</strong> operations in Dhaka, Cumilla, and Dubai.
        </p>
      </div>
    </section>
  );
};

export default Caresoul_BG_Mix;