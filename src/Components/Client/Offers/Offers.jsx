"use client";

import Link from "next/link"; // FIXED: Default import (removed curly braces)
import Image from "next/image";
import FlashDealsCarousel from "./FlashDealsCarousel/FlashDealsCarousel";
import OfferBackgroundSlider from "./OfferBackgroundSlider/OfferBackgroundSlider";




const offers = [
  {
    id: 1,
    title: "Summer Special Discount",
    slug: "summer-special-discount",
    description: "Get 15% off on all international tour packages booked before July 31.",
    image: "/summer-offer.avif",
  },
  {
    id: 2,
    title: "Student Visa Promo",
    slug: "student-visa-promo",
    description: "Flat $100 off on student visa processing fees for select countries.",
    image: "/limited-offer.webp",
  },
  {
    id: 3,
    title: "Early Bird Flight Deal",
    slug: "early-bird-flight-deal",
    description: "Book your air tickets 3 months in advance and save up to 20%.",
    image: "/offer-eammu-travel-agency-bangladesh-dhaka.webp",
  },
  {
    id: 4,
    title: "Family Tour Package Offer",
    slug: "family-tour-package",
    description: "Book for 4 or more family members and get special group discounts.",
    image: "/friends-family-offer.avif",
  },
  {
    id: 5,
    title: "Fast Track Travel Offer",
    slug: "fast-track-visa",
    description: "Fast Track Travel Offer visa application with zero extra charge for June.",
    image: "/best-travel-agency-bangladesh-offer.webp",
  },
  {
    id: 6,
    title: "Travel Promo Deals 2026",
    slug: "travel-promo-2026",
    description: "Travel Promo Deals 2026 Offer visa application with zero extra charge for June.",
    image: "/travel-promo-deals-travel-agency-offer-bangladesh.webp",
  },
];



const Offers = () => {
 

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <div>
     
      <OfferBackgroundSlider />


      </div>
     
     <div>
       <FlashDealsCarousel /> 
     </div>
      

      {/* SECTION 3: EXPLORE GRID */}
      <section className="py-20 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#005a31] uppercase tracking-tighter">Explore More</h2>
            <div className="w-20 h-1.5 bg-[#005a31] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {offers.map((offer) => (
              <div key={offer.id} className="group bg-white rounded-[2.5rem] p-4 hover:shadow-2xl transition-all border border-gray-100">
                <Link href={`/offers/${offer.slug}`} className="block h-52 relative rounded-[2rem] overflow-hidden mb-6">
                   <img
                    src={offer.image} 
                    alt={offer.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                   />
                </Link>
                <div className="px-2">
                  <h3 className="text-lg font-black text-[#005a31] mb-2 uppercase tracking-tight">{offer.title}</h3>
                  <p className="text-gray-500 font-medium text-[12px] mb-8 leading-relaxed line-clamp-2">
                    {offer.description}
                  </p>
                  <div className="flex gap-3 pb-2">
                      <a 
                        href="https://wa.me/8801631312524" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full bg-[#005a31] text-white py-3.5 rounded-xl font-black text-center text-[11px] uppercase tracking-wider hover:bg-black transition-all shadow-md"
                      >
                        Book via WhatsApp
                      </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Offers;