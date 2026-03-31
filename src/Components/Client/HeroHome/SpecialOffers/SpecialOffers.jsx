"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const offerData = [
  { id: 1, category: 'Airlines', title: "Fly to New Destinations with Up To 33% Off", logo: "https://hblimg.mmtcdn.com/content/hubble/img/bangkok/mmt/destination/m_Bangkok-landscape_l_400_640.jpg", link: "/offers", details: "Fly to New Destinations", alt: "Special flight discount offer to Bangkok" },
  { id: 2, category: 'Airlines', title: "Get Up to 32% Discount on Selected European Routes", logo: "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?semt=ais_user_personalization&w=740&q=80", link: "/offers", details: "Get Up to 32% Discount", alt: "Discounted airfare for European travel" },
  { id: 3, category: 'Airlines', title: "Best airline ticket offers for domestic flights With 15% off", logo: "/airline-discount-offer.webp", link: "/offers", details: "Best airline ticket offers", alt: "Domestic flight ticket deals" },
  { id: 5, category: 'Tours', title: "Get Exclusive Deals on International Flights", logo: "https://img.freepik.com/premium-photo/airplane-landing-sunset_114775-23.jpg?semt=ais_user_personalization&w=740&q=80", link: "/offers", details: "Get Exclusive Deals", alt: "International flight booking deals" },
  { id: 6, category: 'Others', title: "Book cheap flights to top international destinations today.", logo: "/cheapflights_eammu_offer.webp", link: "/offers", details: "Book cheap flights", alt: "Cheap international flight tickets" },
  { id: 7, category: 'Tours', title: "Fly to new destinations with exclusive travel discounts get Up to 48% Off This Eid", logo: "https://media.istockphoto.com/id/1011241694/photo/thai-traditional-wooden-longtail-boat-and-beautiful-sand-beach.jpg?s=612x612&w=0&k=20&c=3Al0xNJgX7LXSiNFbbZFLG2DcHIEtO_XDdgvvRBImUk=", link: "/offers", details: "Fly to new destinations", alt: "Eid special travel discount" },
  { id: 8, category: 'Tours', title: "Travel the world with unbeatable airfare deals with Up to 38% Off This Eid", logo: "https://img.freepik.com/premium-photo/dubai-skyline-evening_114775-22.jpg?semt=ais_user_personalization&w=740&q=80", link: "/offers", details: "Travel This Eid", alt: "Dubai skyline travel deals" },
];

const SpecialOffers = () => {
  const offerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('All');

  // Logic to filter data based on selected tab
  const filteredData = activeTab === 'All' 
    ? offerData 
    : offerData.filter(item => item.category === activeTab);

  useEffect(() => {
    const autoScroll = () => {
      if (offerRef.current && filteredData.length > 1) {
        const { scrollLeft, scrollWidth, clientWidth } = offerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          offerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          offerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    };
    const interval = setInterval(autoScroll, 4000);
    return () => clearInterval(interval);
  }, [filteredData]); // Reset interval if filter changes

  const scroll = (direction) => {
    const offset = direction === 'left' ? -340 : 340;
    offerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-gray-200 pb-4 gap-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950 uppercase tracking-tight">Special Offers</h2>
        
        {/* Fixed Navigation Tabs */}
        <nav className="flex flex-wrap gap-2 mb-1" aria-label="Offer categories">
          {['All', 'Airlines', 'Tours', 'Others'].map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`text-xs font-bold px-4 py-1.5 rounded-full border transition-all duration-300 ${
                activeTab === tab 
                ? "bg-[#005a31] text-white border-[#005a31] shadow-md" 
                : "bg-white text-gray-600 border-gray-200 hover:border-[#005a31] hover:text-[#005a31]"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      <div className="relative group">
        <div ref={offerRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 scroll-smooth">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <article key={item.id} className="min-w-[300px] md:min-w-[380px] snap-start bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300">
                <Link href={item.link} className="h-44 overflow-hidden relative block" title={item.title}>
                  <img 
                    src={item.logo} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                    alt={item.alt || item.title} 
                    loading="lazy"
                  />
                </Link>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <h3 className="text-blue-900 font-bold text-sm md:text-base mb-6 line-clamp-2">{item.title}</h3>
                  <div className="flex justify-end">
                    <Link href={item.link} className="bg-[#005a31] hover:bg-[#ffcc00] hover:text-[#005a31] text-white font-black text-[10px] py-[12px] px-4 rounded-lg flex items-center gap-2 uppercase transition-all shadow-sm">
                      {item.details} <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="w-full py-10 text-center text-gray-400 font-medium">
              No offers available in this category yet.
            </div>
          )}
        </div>
        
        {/* Navigation Arrows - Only show if there is enough content to scroll */}
        {filteredData.length > 1 && (
          <>
            <button aria-label="Previous" onClick={() => scroll('left')} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition hidden lg:block border border-gray-100">
              <ChevronLeft size={24} className="text-blue-900" />
            </button>
            <button aria-label="Next" onClick={() => scroll('right')} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition hidden lg:block border border-gray-100">
              <ChevronRight size={24} className="text-blue-900" />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default SpecialOffers;