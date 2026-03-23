"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Binoculars, Star, 
  ChevronLeft, ChevronRight,
} from 'lucide-react';
import PremiumNavBar from '../PremiumNavBar/PremiumNavBar';


const HeroSection = () => {
  // Data for background slider
  const bgSlides = [
    {
      url: "/sylhet_eammu.webp",
      alt: "Eammu Holidays travel and tourism Bangladesh"
    },
    {
      url: "https://res.cloudinary.com/jerrick/image/upload/v1700547867/655c4d1a4132f6001d3a9423.jpg",
      alt: "Beautiful mountain landscape travel destination Bangladesh"
    },
    {
      url: "/beautiful-places-in-bangladesh.jpg",
      alt: "beautiful-places-in-bangladesh"
    },
    {
      url: "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/afmqgg5h0jl9wnr1dfmf.jpg",
      alt: "Eammu Holidays travel services banner"
    }
  ];

  // Data for inner promo carousel
  const promoSlides = [
    { id: 1, title: "SHARJAH TO YEREVAN", price1: "135", price2: "255", img: "https://armenianweekly.com/wp-content/uploads/2024/08/Der-Tadeos-Barseghyan-and-parishioners-of-the-Armenian-Church-of-Our-Savior-at-Haghpat-monastery-Photo_-Armenian-Church-of-Our-Savior-Facebook.jpg" },
    { id: 2, title: "DUBAI TO DHAKA", price1: "110", price2: "300", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "DHAKA TO DUBAI", price1: "300", price2: "355", img: "https://tripjive.com/wp-content/uploads/2024/09/Khasia-Polli-in-Sylhet-travel-guide-1024x585.jpg" },
    { id: 4, title: "JAPAN TO DHAKA", price1: "499", price2: "999", img: "https://japandeluxetours.com/uploads/2025/10/20251009212409_68e827f99d19b.jpg" },
    { id: 5, title: "DHAKA TO MALDIVES", price1: "299", price2: "499", img: "https://afar.brightspotcdn.com/dims4/default/3da8482/2147483647/strip/true/crop/3000x1500+0+369/resize/1440x720!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg" },
  ];

  // Bottom carousel
  const bottomSlides = [
    { id: 0, title: "Higher Study In USA With 70% Scholarship", img: "https://globalgateways.co.in/wp-content/uploads/2025/01/study-abroad-usa.jpg", link: "/visa-services/usa-visa-application", },
    { id: 1, title: "ALBANIA VISA", img: "/albania_visa_from_bangladesh.webp",link: "/visa-services/albania-visa-application" },
    { id: 2, title: "EID PROMO", img: "/eid_offer_2026_eammu.webp",link: "/visa-services/singapore-visa-application" },
    { id: 3, title: "E-VISA", img: "/eammu_evisa_offer.webp" ,link: "/visa-services/thailand-visa-application" },
    { id: 4, title: "SYLHET TOUR", img: "https://royalbengaltours.com/wp-content/uploads/2017/08/Cycle-through-the-most-beautiful-tea-estates-of-Sreemangal-and-Sylhet-area.webp" ,link: "/tour-packages" },
    { id: 5, title: "DHAKA TOUR", img: "https://toursntripsbd.com/wp-content/uploads/2016/06/PB100664-180x152-1.jpg",link: "/tour-packages" },
    { id: 6, title: "DESERT SAFARI", img: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1666942368/blog/gu90kcnlehlie93a2mks.jpg",link: "/tour-packages" },
    { id: 7, title: "ARMENIA VISA", img: "https://www.gokite.travel/wp-content/uploads/2021/05/Armenia-tour-packages-from-dubai_11zon-870x480.webp",link: "/visa-services/armenia-visa-application" },
    { id: 8, title: "EUROPE VISA", img: "https://pmlholidays.com/admin/production/images/blogs/Europe.jpg",link: "/visa-services/europe-visa-application" },
    { id: 9, title: "EMI", img: "/eammu_emi_offer.webp",link: "/offers" },
    { id: 10, title: "CANADA VISA", img: "/canada_visa_from_india.webp",link: "/visa-services/canada-visa-application" },
    { id: 11, title: "SINGAPORE VISA", img: "https://www.agoda.com/wp-content/uploads/2019/06/Singapore-Itinerary-Marina-Bay-Sands.jpg",link: "/visa-services/singapore-visa-application" },
  ];

  const [bgIndex, setBgIndex] = useState(0);
  const [promoIndex, setPromoIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);
  const bottomRef = useRef(null);

  // Auto slide logic for all carousels
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgSlides.length);
      setPromoIndex((prev) => (prev + 1) % promoSlides.length);
      setBottomIndex((prev) => (prev + 1) % bottomSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bgSlides.length, promoSlides.length, bottomSlides.length]);

  // Physical scroll handler (Syncs the DOM to the State)
  useEffect(() => {
    const container = bottomRef.current;
    if (container && container.children[bottomIndex]) {
      const activeItem = container.children[bottomIndex];
      container.scrollTo({
        left: activeItem.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [bottomIndex]);

  return (
    <div className="relative w-full overflow-hidden font-sans">

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full bg-gradient-to-br from-[#72deff] via-[#d8ffd4] to-[#f5ff9e] overflow-hidden">

        {/* ================= BACKGROUND SLIDER ================= */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={bgIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="relative w-full h-full"
            >
              <Image
                src={bgSlides[bgIndex].url}
                alt={bgSlides[bgIndex].alt}
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>

        {/* ================= CONTENT WRAPPER ================= */}
        <div className="relative z-10 min-h-[520px] sm:min-h-[600px] lg:min-h-[50vh] flex flex-col">

          <PremiumNavBar />

          {/* ================= HERO BODY ================= */}
          <div className="flex-1 flex items-center py-10">
            <div className="max-w-5xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

              {/* TEXT */}
              <div className="text-white text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Your Trusted Travel Partner <br />
                  to the World <span className="text-[#ffcc00]">Since 2022</span>
                </h1>

                <p className="text-sm md:text-base leading-relaxed mb-5 opacity-90">
                  Eammu Holidays is a leading online travel agency in Bangladesh - offering flight bookings, worldwide visa assistance, Holiday Tour Packages, and exciting desert safari tours. 
                  With expert guidance, we make international travel simple, affordable, and hassle-free
                </p>

             <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-5">
  {/* Explore More Link */}
  <Link 
    href="/our-services"
    className="relative flex items-center gap-2 px-6 py-2.5 rounded-[10px] font-bold text-sm text-[#005a31] shadow-[0_10px_20px_-10px_rgba(255,204,0,0.5)] 
               bg-gradient-to-r from-[#ffcc00] via-[#ffeca1] to-[#ffcc00] bg-[length:200%_auto]
               hover:bg-right transition-all duration-500 overflow-hidden cursor-pointer"
  >
    <motion.div
      className="flex items-center gap-2 w-full h-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Shine Effect Animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full"
        animate={{ x: ['-100%', '200%'] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 1 }}
      />
      <Binoculars size={20} className="relative z-10" />
      <span className="relative z-10">Explore More</span>
    </motion.div>
  </Link>

  {/* Customer Review Link */}
  <Link 
    href="/testimonials"
    className="relative flex items-center gap-2 px-6 py-2.5 rounded-[10px] font-bold text-sm text-white shadow-[0_10px_20px_-10px_rgba(0,90,49,0.6)] 
               bg-gradient-to-r from-[#005a31] via-[#00a45a] to-[#005a31] bg-[length:200%_auto]
               hover:bg-right transition-all duration-500 overflow-hidden cursor-pointer"
  >
    <motion.div
      className="flex items-center gap-2 w-full h-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Shine Effect Animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full"
        animate={{ x: ['-100%', '200%'] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 1 }}
      />
      <Star size={20} className="relative z-10" />
      <span className="relative z-10"> Customer Review</span>
    </motion.div>
  </Link>
</div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-xs">
                  <span>🏆 IATA Accredited</span>
                  <span>📅 6+ Years Experience</span>
                  <span>⭐ Google Rating 4.9/5</span>
                </div>
              </div>

              {/* ================= PROMO CARD ================= */}
              <div className="w-full flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md h-[300px] sm:h-[260px] rounded-2xl overflow-hidden border border-white/30 shadow-2xl 
                                bg-gradient-to-r from-[#005a31] via-[#009552] to-[#005a31] bg-[length:200%_auto]
                                hover:bg-right transition-all duration-1000">

                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full z-10 pointer-events-none"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3, 
                      ease: "linear", 
                      repeatDelay: 2 
                    }}
                  />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={promoIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex flex-col sm:flex-row"
                    >
                      <div className="relative w-full sm:w-1/2 h-[45%] sm:h-full">
                        <Image 
                          src={promoSlides[promoIndex].img} 
                          alt={`${promoSlides[promoIndex].title} cheap flight ticket deal`}
                          fill
                          priority
                          className="object-cover"
                        />
                      </div>

                      <div className="w-full sm:w-1/2 p-4 flex flex-col justify-between text-white">
                        <div>
                          <h2 className="text-base font-bold mb-2 uppercase leading-tight">
                            {promoSlides[promoIndex].title}
                          </h2>

                          <div className="flex gap-2 mb-3 text-[11px]">
                            <div className="flex-1 border border-white/40 p-1.5 rounded bg-white/5">
                              One Way <br/><b>USD {promoSlides[promoIndex].price1}</b>
                            </div>
                            <div className="flex-1 border border-white/40 p-1.5 rounded bg-white/5">
                              Round Trip <br/><b>USD {promoSlides[promoIndex].price2}</b>
                            </div>
                            <div className='lg:hidden relative h-[40px] w-12'>
                               <Image 
                                src="/eammu_white_logo.webp" 
                                alt="Logo" 
                                fill
                                className="object-contain animate-pulse" 
                              />
                            </div>
                          </div>
                        </div>

                        <Link href="/air-tickets" className="bg-white text-[#005a31] font-black py-2 px-4 rounded-lg text-sm text-center block shadow-md active:scale-95 transition-transform">
                          Book Now
                        </Link>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute bottom-2 right-3 flex gap-1.5 z-20">
                    {promoSlides.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 w-1.5 rounded-full transition-all ${
                          i === promoIndex ? 'bg-white w-4' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM CAROUSEL ================= */}
      <div className="bg-white py-10 px-4">
        <div className="max-w-[1280px] mx-auto relative">
          <div
            ref={bottomRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 hide-scrollbar"
          >
            {bottomSlides.map((slide, index) => (
              <motion.div 
                key={index}
                className="snap-center min-w-[90%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[32%] aspect-[3/1.3] rounded-xl overflow-hidden relative shadow-md bg-gray-100"
                whileHover={{ scale: 1.01 }}
              >
                <Link href={slide.link || "#"} className="block w-full h-full relative">
                  <Image 
                    src={slide.img} 
                    alt={slide.title} 
                    fill
                    className="object-fill" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-3 pointer-events-none">
                    <p className="text-white font-bold text-xs sm:text-sm md:text-base line-clamp-1">
                      {slide.title}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <button
            className="hidden md:flex absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-800 z-30 hover:bg-gray-50"
            onClick={() => setBottomIndex((prev) => (prev - 1 + bottomSlides.length) % bottomSlides.length)}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="hidden md:flex absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-800 z-30 hover:bg-gray-50"
            onClick={() => setBottomIndex((prev) => (prev + 1) % bottomSlides.length)}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;