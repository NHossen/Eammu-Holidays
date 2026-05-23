"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { id: 1, url: '/eid_ul_fitr_banner.webp',  alt: 'Flat Discounts on International and Domestic Flights - Eammu Holidays' },
  { id: 2, url: '/flight_eammu_offer.webp',  alt: 'Flat Discounts on International and Domestic Flights - Eammu Holidays' },
  { id: 3, url: '/eid_offer_eammu.webp',     alt: 'Eid-ul-Fitr special travel promotion with affordable flight bookings' },
  { id: 4, url: '/eid_offer_banner_2.webp',  alt: 'Special Eid-ul-Fitr airline ticket deals and international tour offers' },
];

const SpecialDayBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const isPausedRef = useRef(false);
  const pauseTimerRef = useRef(null);

  const goTo = useCallback((next) => {
    const idx = (next + slides.length) % slides.length;
    setVisible(false);
    setTimeout(() => {
      setCurrentIndex(idx);
      setVisible(true);
    }, 300);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPausedRef.current) {
        goTo(currentIndex + 1);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, goTo]);

  const pauseAuto = () => {
    isPausedRef.current = true;
    clearTimeout(pauseTimerRef.current);
  };
  const resumeAuto = () => {
    pauseTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 3000);
  };

  return (
    <section className="w-full py-2 sm:py-6 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">

        {/*
          ✅ aspect-[4.5/1] only — no competing fixed heights on md/lg
          Fixed heights fight the aspect ratio and cause CLS on resize
          min-h-[80px] just prevents collapse on very narrow screens
        */}
        <div
          className="relative w-full aspect-[4.5/1] min-h-[80px] overflow-hidden rounded-lg sm:rounded-2xl group shadow-sm"
          onMouseEnter={pauseAuto}
          onMouseLeave={resumeAuto}
          onTouchStart={pauseAuto}
          onTouchEnd={resumeAuto}
        >
          {/* 
            ✅ All slides in DOM, opacity toggled via CSS — no layout shift,
            no framer-motion, no gap between exit and enter 
          */}
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className="absolute inset-0 w-full h-full"
              style={{
                opacity: i === currentIndex ? (visible ? 1 : 0) : 0,
                transition: 'opacity 0.3s ease',
                // ✅ only active slide is interactive
                pointerEvents: i === currentIndex ? 'auto' : 'none',
              }}
            >
              <Image
                src={slide.url}
                alt={slide.alt}
                fill
                // ✅ only first slide is LCP-critical
                priority={i === 0}
                loading={i === 0 ? 'eager' : 'lazy'}
                // ✅ object-cover — safe fallback if ratio ever drifts
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1280px"
                quality={75}
              />
            </div>
          ))}

          {/* Nav arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 z-20 pointer-events-none">
            <button
              aria-label="Previous banner"
              onClick={() => { pauseAuto(); goTo(currentIndex - 1); }}
              className="pointer-events-auto p-1.5 sm:p-2 rounded-full bg-white/80 backdrop-blur-sm text-[#005a31] opacity-0 group-hover:opacity-100 transition-all shadow-md"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button
              aria-label="Next banner"
              onClick={() => { pauseAuto(); goTo(currentIndex + 1); }}
              className="pointer-events-auto p-1.5 sm:p-2 rounded-full bg-white/80 backdrop-blur-sm text-[#005a31] opacity-0 group-hover:opacity-100 transition-all shadow-md"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to banner ${idx + 1}`}
                onClick={() => { pauseAuto(); goTo(idx); }}
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