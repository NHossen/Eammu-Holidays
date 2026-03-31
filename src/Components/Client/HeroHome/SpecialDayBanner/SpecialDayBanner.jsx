"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { 
    id: 1, 
    url: '/eid_ul_fitr_banner.webp', // The blue flight discount banner eid_ul_fitr_banner.webp
    alt: 'Flat Discounts on International and Domestic Flights - Eammu Holidays' 
  },
  { 
    id: 2, 
    url: '/flight_eammu_offer.webp', // The blue flight discount banner
    alt: 'Flat Discounts on International and Domestic Flights - Eammu Holidays' 
  },
  { 
    id: 3, 
    url: '/eid_offer_eammu.webp', 
    alt: 'Eid-ul-Fitr special travel promotion with affordable flight bookings' 
  },
  { 
    id: 4, 
    url: '/eid_offer_banner_2.webp', 
    alt: 'Special Eid-ul-Fitr airline ticket deals and international tour offers' 
  },
  // ... add other slides here
];

const SpecialDayBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="w-full py-2 sm:py-6 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        
        {/* THE FIX: 
          1. aspect-[4.5/1] matches your specific banner dimensions.
          2. h-auto allows the height to be calculated based on the width.
          3. min-h-[120px] ensures it doesn't get too small on tiny phones.
        */}
        <div className="relative w-full aspect-[4.5/1] min-h-[120px] md:h-[280px] lg:h-[300px] overflow-hidden rounded-lg sm:rounded-2xl group shadow-sm">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={slides[currentIndex].url}
                alt={slides[currentIndex].alt}
                fill
                priority
                className="object-fill" // Since we matched the container ratio, object-fill will show 100% of the image
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Scaled down for mobile */}
          <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 z-20 pointer-events-none">
            <button 
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="pointer-events-auto p-1.5 sm:p-2 rounded-full bg-white/80 backdrop-blur-sm text-[#005a31] opacity-0 group-hover:opacity-100 transition-all shadow-md"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="pointer-events-auto p-1.5 sm:p-2 rounded-full bg-white/80 backdrop-blur-sm text-[#005a31] opacity-0 group-hover:opacity-100 transition-all shadow-md"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Dots - Positioned higher so they don't block T&C text */}
          <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5">
            {slides.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-[#005a31] w-4 sm:w-8' : 'bg-white/60 w-1 sm:w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialDayBanner;