"use client";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: "Summer Special Discount",
    slug: "summer-special-discount",
    description: "Get 15% off on all international tour packages booked before July 31.",
    image: "https://img.freepik.com/premium-vector/summer-sale-template-clipart-poster-summer-promo-limited-time-offer-with-watermelon-ice-cream_572288-4518.jpg?semt=ais_hybrid&w=740",
    alt: "Summer special travel discount and international tour package offer 2026"
  },
  {
    id: 2,
    title: "Student Visa Promo",
    slug: "student-visa-promo",
    description: "Flat $100 off on student visa processing fees for select countries.",
    image: "https://www.shutterstock.com/image-vector/limited-offer-banner-sale-clock-600nw-1912324219.jpg",
    alt: "Student visa processing fee discount and study abroad promotional offer"
  },
  {
    id: 3,
    title: "Early Bird Flight Deal",
    slug: "early-bird-flight-deal",
    description: "Book your air tickets 3 months in advance and save up to 20%.",
    image: "/offer-eammu-travel-agency-bangladesh-dhaka.webp",
    alt: "Early bird flight ticket booking deals and airfare discounts for international travel"
  },
  {
    id: 4,
    title: "Family Tour Package Offer",
    slug: "family-tour-package",
    description: "Book for 4 or more family members and get special group discounts.",
    image: "https://offercdn.paytm.com/blog/2023/03/friends-family-app.png",
    alt: "Family holiday tour package group discounts and vacation deals"
  },
  {
    id: 5,
    title: "Fast Track Travel Offer",
    slug: "fast-track-visa",
    description: "Fast Track Travel Offer visa application with zero extra charge for June.",
    image: "/best-travel-agency-bangladesh-offer.webp",
    alt: "Fast track visa application service and express travel processing offer"
  },
  {
    id: 6,
    title: "Travel Promo Deals 2026",
    slug: "travel-promo-2026",
    description: "Travel Promo Deals 2026 Offer visa application with zero extra charge for June.",
    image: "/travel-promo-deals-travel-agency-offer-bangladesh.webp",
    alt: "2026 Travel promotional deals and exclusive holiday packages from Bangladesh"
  },
];

export default function FlashDealsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Automatic slide movement every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Sync scroll position with the active index
  useEffect(() => {
    const container = carouselRef.current;
    if (container && container.children[currentIndex]) {
      const activeItem = container.children[currentIndex];
      container.scrollTo({ 
        left: activeItem.offsetLeft - container.offsetLeft, 
        behavior: "smooth" 
      });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % offers.length);
  };

  return (
    <div className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto relative group/main">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-[#004d2c] tracking-tight uppercase whitespace-nowrap">
              Flash Deals
            </h2>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
              Limited Time Offers
            </span>
          </div>
          <div className="h-[2px] flex-grow bg-gray-100" />
        </div>

        {/* Carousel Container */}
        <div 
          ref={carouselRef} 
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 hide-scrollbar"
        >
          {offers.map((offer, index) => (
            <motion.div 
              key={offer.id} 
              className="snap-center min-w-[90%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[32%] aspect-[3/1.3] rounded-xl overflow-hidden relative shadow-md bg-gray-50 group"
              whileHover={{ scale: 1.01 }}
            >
              <Link href={`/offers/${offer.slug}`} className="block w-full h-full relative">
                
     
                          {/* Hot Deal Badge */}

<div 

  style={{ backgroundColor: '#dc2626' }} // Forced Red

  className="absolute top-4 left-4 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase z-50 shadow-xl pointer-events-none animate-pulse flex items-center gap-1.5"

>

  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>

  Hot Deal

</div>

                <img
                  src={offer.image} 
                  alt={offer.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]" 
                />

                {/* Overlay Detail (Matches your visual requirements) */}
                <div className="absolute inset-0 bg-[#005a31]/80 backdrop-blur-sm flex flex-col justify-center p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-20">
                  <h3 className="text-[#e7d000] font-black text-sm md:text-lg uppercase mb-1">
                    {offer.title}
                  </h3>
                  <p className="text-white text-[10px] md:text-xs font-medium leading-tight mb-4 line-clamp-2">
                    {offer.description}
                  </p>
                  <span className="w-fit bg-[#e7d000] text-black text-[9px] font-black py-2 px-4 rounded-full uppercase tracking-tighter">
                    View Details
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}