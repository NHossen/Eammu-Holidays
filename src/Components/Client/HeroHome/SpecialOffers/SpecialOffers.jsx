"use client";

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const offerData = [
  { id: 1, category: 'Airlines', title: "Fly to New Destinations with Up To 33% Off",                              logo: "/flight-offer.avif",               link: "/flight-booking", details: "Fly to New Destinations",   alt: "Special flight discount offer to Bangkok" },
  { id: 2, category: 'Airlines', title: "Get Up to 32% Discount on Selected European Routes",                     logo: "/thailand-flight-lowest-fare.avif",link: "/flight-booking", details: "Get Up to 32% Discount",    alt: "Discounted airfare for European travel" },
  { id: 3, category: 'Airlines', title: "Best airline ticket offers for domestic flights With 15% off",           logo: "/airline-discount-offer.webp",     link: "/offers",         details: "Best airline ticket offers", alt: "Domestic flight ticket deals" },
  { id: 5, category: 'Tours',    title: "Get Exclusive Deals on International Flights",                           logo: "/dubai-tour-with-eammu.webp",      link: "/offers",         details: "Get Exclusive Deals",        alt: "International flight booking deals" },
  { id: 6, category: 'Others',   title: "Book cheap flights to top international destinations today.",            logo: "/cheapflights_eammu_offer.webp",   link: "/offers",         details: "Book cheap flights",         alt: "Cheap international flight tickets" },
  { id: 7, category: 'Tours',    title: "Fly to new destinations with exclusive travel discounts Up to 48% Off", logo: "/thailand-tour-eammu-new.jpg",    link: "/offers",         details: "Fly to new destinations",    alt: "Eid special travel discount" },
  { id: 8, category: 'Tours',    title: "Travel the world with unbeatable airfare deals Up to 38% Off This Eid", logo: "/dubai-skyline-evening.avif",      link: "/offers",         details: "Travel This Eid",            alt: "Dubai skyline travel deals" },
];

const TABS = ['All', 'Airlines', 'Tours', 'Others'];

const SpecialOffers = () => {
  const offerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('All');
  const isPausedRef = useRef(false);
  const pauseTimerRef = useRef(null);

  const filteredData = useMemo(() =>
    activeTab === 'All'
      ? offerData
      : offerData.filter(item => item.category === activeTab),
    [activeTab]
  );

  useEffect(() => {
    offerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  }, [activeTab]);

  useEffect(() => {
    const interval = setInterval(() => {
      const el = offerRef.current;
      if (!el || isPausedRef.current || filteredData.length <= 1) return;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 340, behavior: 'smooth' });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [filteredData]);

  // ✅ pauseTimerRef cleanup
  useEffect(() => {
    return () => clearTimeout(pauseTimerRef.current);
  }, []);

  const scroll = useCallback((direction) => {
    const el = offerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction === 'left' ? -340 : 340, behavior: 'smooth' });
  }, []);

  // ✅ useCallback — re-render এ নতুন function তৈরি হবে না
  const pauseAuto = useCallback(() => {
    isPausedRef.current = true;
    clearTimeout(pauseTimerRef.current);
  }, []);

  const resumeAuto = useCallback(() => {
    pauseTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 3000);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-gray-200 pb-4 gap-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950 uppercase tracking-tight">
          Special Offers
        </h2>
        <nav className="flex flex-wrap gap-2 mb-1" aria-label="Offer categories">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              aria-pressed={activeTab === tab}
              className={`text-xs font-bold px-4 py-1.5 rounded-full border transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#005a31] text-white border-[#005a31] shadow-md'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#005a31] hover:text-[#005a31]'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      <div
        className="relative group"
        onMouseEnter={pauseAuto}
        onMouseLeave={resumeAuto}
        onTouchStart={pauseAuto}
        onTouchEnd={resumeAuto}
      >
        <div
          ref={offerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 scroll-smooth"
        >
          {filteredData.length > 0 ? filteredData.map((item) => (
            <article
              key={item.id}
              className="min-w-[300px] md:min-w-[380px] snap-start bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300"
            >
              <Link
                href={item.link}
                className="h-44 overflow-hidden relative block"
                title={item.title}
              >
                <Image
                  src={item.logo}
                  alt={item.alt || item.title}
                  fill
                  // ✅ সব lazy — dynamic import করা component, eager দরকার নেই
                  loading="lazy"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 300px, 380px"
                  quality={75}
                />
              </Link>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <h3 className="text-blue-900 font-bold text-sm md:text-base mb-6 line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex justify-end">
                  <Link
                    href={item.link}
                    className="bg-[#005a31] hover:bg-[#ffcc00] hover:text-[#005a31] text-white font-black text-[10px] py-[12px] px-4 rounded-lg flex items-center gap-2 uppercase transition-all shadow-sm"
                  >
                    {item.details} <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          )) : (
            <div className="w-full py-10 text-center text-gray-400 font-medium">
              No offers available in this category yet.
            </div>
          )}
        </div>

        {filteredData.length > 1 && (
          <>
            <button
              aria-label="Previous offer"
              onClick={() => scroll('left')}
              className="absolute -left-4 cursor-pointer top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition hidden lg:block border border-gray-100"
            >
              <ChevronLeft size={24} className="text-blue-900" />
            </button>
            <button
              aria-label="Next offer"
              onClick={() => scroll('right')}
              className="absolute -right-4 cursor-pointer top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition hidden lg:block border border-gray-100"
            >
              <ChevronRight size={24} className="text-blue-900" />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default SpecialOffers;