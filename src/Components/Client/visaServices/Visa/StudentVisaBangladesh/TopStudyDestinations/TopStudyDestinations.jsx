"use client";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const studyDestinations = [
  { 
    title: "Study In USA", 
    img: "/study-abroad-usa-bottom.jpg", 
    alt: "USA Student Visa",
    link: "/study-abroad/student-visa/united-states",
    scholarship: "70%" 
  },
  { 
    title: "Study In CANADA", 
    img: "/study-canada-jpg.jpg", 
    alt: "Canada Student Visa",
    link: "/study-abroad/student-visa/canada",
    scholarship: "50%" 
  },
  { 
    title: "Study In UK", 
    img: "/study-uk-banner.jpg", 
    alt: "UK Student Visa",
    link: "/study-abroad/student-visa/united-kingdom",
    scholarship: "40%" 
  },
  { 
    title: "Study In EUROPE", 
    img: "/schengen-visa-with-eammu-new.jpg", 
    alt: "Europe Student Visa",
    link: "/study-abroad/student-visa/european-union",
    scholarship: "30%" 
  },
  { 
    title: "Study In AUSTRALIA", 
    img: "/eammu_travel_final.webp", 
    alt: "Australia Student Visa",
    link: "/study-abroad/student-visa/australia",
    scholarship: "25%" 
  },
];

export default function TopStudyDestinations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % studyDestinations.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
    <div className="bg-white py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl md:text-2xl font-black text-[#004d2c] tracking-tight whitespace-nowrap">
            TOP STUDY DESTINATIONS
          </h2>
          <div className="h-[2px] w-20 bg-[#004d2c]" />
        </div>

        {/* Carousel */}
        <div 
          ref={carouselRef} 
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 hide-scrollbar"
        >
          {studyDestinations.map((destination, index) => (
            <motion.div 
              key={index} 
              // Back to wide aspect ratio you had before
              className="snap-center min-w-[90%] sm:min-w-[60%] md:min-w-[48%] lg:min-w-[32%] aspect-[16/8] rounded-2xl overflow-hidden relative group shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Main Image with Hover Blur and Scale */}
              <img 
                src={destination.img} 
                alt={destination.alt} 
                fill 
                className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:blur-[2px]" 
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              
              {/* Overlay: subtle initial, strong on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 md:p-6 transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                
                {/* Scholarship Badge - Glassmorphism style, always visible */}
                <div className="backdrop-blur-sm bg-white/10 rounded-full py-1 px-3 w-fit mb-3 border border-white/20">
                  <p className="text-white text-[10px] md:text-[11px] font-medium uppercase tracking-widest">
                    Up to {destination.scholarship} Scholarship Available
                  </p>
                </div>

                {/* Title */}
                <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter mb-4 drop-shadow-md">
                  {destination.title}
                </h3>

                {/* Hover Reveal Button */}
                <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
                >
                    <Link 
                        href={destination.link}
                        className="inline-flex items-center gap-2 bg-[#00ce75] hover:bg-white text-[#004d2c] font-bold py-2.5 px-6 rounded-full text-sm transition-colors shadow-lg"
                    >
                        <span>VIEW DETAILS</span>
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons (visible only on desktop) */}
        <button
          className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl text-[#004d2c] z-30 hover:bg-[#00ce75] hover:text-white transition-all border border-gray-100"
          onClick={() => setCurrentIndex((prev) => (prev - 1 + studyDestinations.length) % studyDestinations.length)}
          aria-label="Previous destination"
        >
          <ChevronLeft size={24} strokeWidth={3} />
        </button>
        
        <button
          className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl text-[#004d2c] z-30 hover:bg-[#00ce75] hover:text-white transition-all border border-gray-100"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % studyDestinations.length)}
          aria-label="Next destination"
        >
          <ChevronRight size={24} strokeWidth={3} />
        </button>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}