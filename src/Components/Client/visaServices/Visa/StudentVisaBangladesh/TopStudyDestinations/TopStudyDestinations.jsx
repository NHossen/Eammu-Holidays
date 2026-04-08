"use client";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const studyDestinations = [
  { 
    title: "Study In USA", 
    img: "https://globalgateways.co.in/wp-content/uploads/2025/01/study-abroad-usa.jpg", 
    alt: "USA Student Visa and Scholarship Consultancy for Higher Studies - Eammu Education",
    link: "/visa-services/usa-visa-application",
    scholarship: "70%" 
  },
  { 
    title: "Study In CANADA", 
    img: "/canada_visa_from_india.webp", // Ensure this path is correct or replace with URL
    alt: "Canada Student Visitor Visa Processing Agency with High Success Rate",
    link: "/visa-services/canada-visa-application",
    scholarship: "50%" 
  },
  { 
    title: "Study In UK", 
    img: "https://www.studyinternational.com/wp-content/uploads/2018/12/shutterstock_1184766868-e1545041071424.jpg", // Example UK image
    alt: "UK Student Visa Guidance and Admission Assistance in Bangladesh",
    link: "/visa-services/uk-visa-application",
    scholarship: "40%" 
  },
  { 
    title: "Study In EUROPE", 
    img: "https://pmlholidays.com/admin/production/images/blogs/Europe.jpg", 
    alt: "Europe Student Visa and Admission Services for International Students",
    link: "/visa-services/europe-visa-application",
    scholarship: "30%" 
  },
  { 
    title: "Study In AUSTRALIA", 
    img: "https://www.idp.com/australia/blog/content/dam/idp-australia/blogs/wp-content/uploads/2019/07/study-in-australia-idp-idp-australia.jpg", // Example Australia image
    alt: "Australia Student Visa and Admission Service for Bangladeshi Students",
    link: "/visa-services/australia-visa-application",
    scholarship: "25%" 
  },
];

export default function TopStudyDestinations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Automatic slide movement every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % studyDestinations.length);
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

  return (
    <div className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto relative">
        {/* Header matching your visual style (green heading) */}
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#004d2c] tracking-tight whitespace-nowrap">
            TOP STUDY DESTINATIONS
          </h2>
          <div className="h-[2px] w-20 bg-[#004d2c]" />
        </div>

        {/* Carousel Container (with hidden scrollbar) */}
        <div 
          ref={carouselRef} 
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 hide-scrollbar"
        >
          {studyDestinations.map((destination, index) => (
            <motion.div 
              key={index} 
              className="snap-center min-w-[90%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[32%] aspect-[3/1.3] rounded-xl overflow-hidden relative shadow-md bg-gray-100" 
              whileHover={{ scale: 1.01 }}
            >
              <Link href={destination.link || "#"} className="block w-full h-full relative">
                {/* Next.js Optimized Image (using object-cover to avoid stretching) */}
                <img 
                  src={destination.img} 
                  alt={destination.alt} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
               {/* Dark Overlay & Text */}
<div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/20 to-transparent flex items-end p-4 z-20">
  <div className="w-full">
    {/* Scholarship Badge */}
    <p 
      style={{ color: '#00ce75' }} 
      className="bg-white rounded-2xl p-1 text-center text-[10px] md:text-[11px] uppercase font-extrabold tracking-widest mb-0.5"
    >
      Up to {destination.scholarship} Scholarship Available
    </p>
    
    {/* Title */}
    <p 
      style={{ color: '#ffffff' }} 
      className="font-black text-center text-md md:text-xl tracking-tighter uppercase leading-tight drop-shadow-lg"
    >
      {destination.title}
    </p>
  </div>
</div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons (visible only on desktop) */}
        <button
          className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-800 z-30 hover:bg-gray-50 border border-gray-100 transition-colors"
          onClick={() => setCurrentIndex((prev) => (prev - 1 + studyDestinations.length) % studyDestinations.length)}
          aria-label="Previous destination"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-800 z-30 hover:bg-gray-50 border border-gray-100 transition-colors"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % studyDestinations.length)}
          aria-label="Next destination"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Global Style Helper (add this to globals.css if you prefer) */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}