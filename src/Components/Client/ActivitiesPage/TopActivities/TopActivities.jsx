"use client";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const topActivities = [
  { 
    title: 'SYLHET TOUR', 
    img: 'https://ttg.com.bd/uploads/tours/plans/207_ratargul_swamp_forest_sylhetjpg.jpg', 
    alt: 'Ratargul Swamp Forest boat tour in Sylhet - Eammu Holidays',
    link: '/tour-packages',
    waMsg: 'I want to book the Sylhet Tour' 
  },
  { 
    title: 'DHAKA TOUR', 
    img: 'https://res.klook.com/images/w_1200,h_630,c_fill,q_65/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/wxekabbs9sdnofxhjgqe/Dhaka%20Fantasy%20Kingdom%20Tour.jpg', 
    alt: 'Fantasy Kingdom and Dhaka City Day Tour Packages',
    link: '/tour-packages',
    waMsg: 'I want to book the Dhaka Tour' 
  },
  { 
    title: 'DESERT SAFARI', 
    img: 'https://cdn.hotairballoonindubai.com/wp-content/uploads/2022/06/Morning-Bliss-Balloon-Ride-Home-Page-thumbnail-820x520.jpg', 
    alt: 'Morning Hot Air Balloon and Desert Safari in Dubai',
    link: '/tour-packages',
    waMsg: 'I want to book the Desert Safari' 
  },
  { 
    title: 'ARMENIA CITY', 
    img: 'https://southtravels.com/public/uploads/MZcyf88tObOWPA5x3wSCXBHA0t3jxXpKyJYC7Bji.jpeg', 
    alt: 'Armenia City Sightseeing and Cultural Heritage Tour',
    link: '/visa-services/armenia-visa-application',
    waMsg: 'I want to book the Armenia City Tour' 
  },
  { 
    title: 'GEORGIA WINE', 
    img: 'https://cdn.yourholiday.me/static/dynimg/itinerary/64/600x300/2969418-2969417_georgia.jpg', 
    alt: 'Georgia Wine Tasting and Caucasus Mountain Exploration Tour',
    link: '/visa-services/georgia-visa-application',
    waMsg: 'I want to book the Georgia Wine Tour' 
  },
];

export default function TopActivities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Automatic slide movement every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % topActivities.length);
    }, 4000);
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
        {/* Header matching your visual style */}
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#004d2c] tracking-tight">
            TOP ACTIVITIES
          </h2>
          <div className="h-[2px] w-20 bg-[#004d2c]" />
        </div>

        {/* Carousel Container */}
        <div 
          ref={carouselRef} 
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 hide-scrollbar"
        >
          {topActivities.map((activity, index) => (
            <motion.div 
              key={index} 
              className="snap-center min-w-[90%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[32%] aspect-[3/1.3] rounded-xl overflow-hidden relative shadow-md bg-gray-100" 
              whileHover={{ scale: 1.01 }}
            >
              <Link href={activity.link || "#"} className="block w-full h-full relative">
                {/* Next.js Optimized Image */}
                <img
                  src={activity.img} 
                  alt={activity.alt} 
                  fill 
                  className="object-cover" /* Changed to object-cover to avoid stretching */
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Dark Overlay & Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent flex items-end p-4">
                  <div>
                    <p className="text-green-400 text-[10px] uppercase font-bold tracking-widest mb-1">
                      Premium Choice
                    </p>
                    <p className="text-white font-bold text-sm md:text-lg uppercase">
                      {activity.title}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-800 z-30 hover:bg-gray-50 border border-gray-100"
          onClick={() => setCurrentIndex((prev) => (prev - 1 + topActivities.length) % topActivities.length)}
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-800 z-30 hover:bg-gray-50 border border-gray-100"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % topActivities.length)}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Tailwind helper to hide scrollbars while keeping functionality */}
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