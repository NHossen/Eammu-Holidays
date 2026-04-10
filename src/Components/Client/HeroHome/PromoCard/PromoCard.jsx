"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const promoSlides = [
  // Interleaved mix for automatic variety
  { 
    id: 1, category: "visa", title: "SCHENGEN VISA", 
    label1: "Processing", price1: "20 Days", label2: "Total Fees", price2: "15,500", 
    badge: "Schengen", img: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=2070", link: "/our-services/visa/denmark-visa-application", alt: "Denmark visa" 
  },

  { 
    id: 13, category: "flight", title: "DHAKA TO BALI", 
    label1: "One Way", price1: "135", label2: "Round Trip", price2: "255", 
    badge: "Hot Deal", img: "/the-love-island.webp", link: "/air-tickets", alt: "Bali flight" 
  },
  { 
    id: 6, category: "tour", title: "SYLHET TEA TOUR", 
    label1: "Duration", price1: "3D / 2N", label2: "Starting", price2: "6,500", 
    badge: "Best Seller", img: "https://tripjive.com/wp-content/uploads/2024/09/Khasia-Polli-in-Sylhet-travel-guide-1024x585.jpg", link: "/our-services/tour-packages", alt: "Sylhet tour" 
  },

  { 
    id: 17, category: "visa", title: "STUDY IN USA", 
    label1: "Scholarship", price1: "70%", label2: "Consultancy", price2: "FREE", 
    badge: "Fall 2026", img: "/study-usa.jpg", link: "/our-services/study-abroad", alt: "USA Study" 
  },
  { 
    id: 2, category: "flight", title: "JAPAN TO DHAKA", 
    label1: "One Way", price1: "499", label2: "Round Trip", price2: "999", 
    badge: "Best Fare", img: "https://japandeluxetours.com/uploads/2025/10/20251009212409_68e827f99d19b.jpg", link: "/air-tickets", alt: "Japan flight" 
  },
  { 
    id: 7, category: "tour", title: "MALDIVES ESCAPE", 
    label1: "Stay", price1: "4D / 3N", label2: "All Incl.", price2: "45,000", 
    badge: "Honeymoon", img: "/eammu_Tour.webp", link: "/our-services/tour-packages", alt: "Maldives tour" 
  },
  { 
    id: 14, category: "visa", title: "CANADA VISITOR", 
    label1: "Validity", price1: "10 Years", label2: "Service Fee", price2: "25,000", 
    badge: "Trending", img: "/canada_visa_from_india.webp", link: "/our-services/visa/canada-visa-application", alt: "Canada visa" 
  },
  { 
    id: 18, category: "visa", title: "STUDY IN UK", 
    label1: "IELTS Req.", price1: "6.0", label2: "Stay Back", price2: "2 Years", 
    badge: "No IELTS", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070", link: "/our-services/study-abroad", alt: "UK Study" 
  },
  { 
    id: 3, category: "flight", title: "DHAKA TO LONDON", 
    label1: "Economy", price1: "650", label2: "Premium", price2: "1150", 
    badge: "Direct", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070", link: "/air-tickets", alt: "London flight" 
  },
  { 
    id: 8, category: "tour", title: "SAJEK VALLEY", 
    label1: "Cloud Tour", price1: "3D / 2N", label2: "Starting", price2: "5,500", 
    badge: "Adventure", img: "https://images.unsplash.com/photo-1623491708899-7313017a4253?q=80&w=2070", link: "/our-services/tour-packages", alt: "Sajek tour" 
  },
  { 
    id: 15, category: "visa", title: "SINGAPORE E-VISA", 
    label1: "Time", price1: "3 Days", label2: "Fees", price2: "5,500", 
    badge: "Instant", img: "https://images.unsplash.com/photo-1525625239513-94c947523285?q=80&w=2070", link: "/our-services/visa/singapore-visa-application", alt: "Singapore visa" 
  },
  { 
    id: 19, category: "visa", title: "STUDY IN GERMANY", 
    label1: "Tuition", price1: "FREE", label2: "Job Search", price2: "1.5 Years", 
    badge: "Public Uni", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070", link: "/our-services/study-abroad", alt: "Germany Study" 
  },
  { 
    id: 4, category: "flight", title: "CAIRO TO DHAKA", 
    label1: "One Way", price1: "310", label2: "Round Trip", price2: "580", 
    badge: "Special", img: "/desert_kamel_egypt.jpg", link: "/air-tickets", alt: "Egypt flight" 
  },
  { 
    id: 9, category: "tour", title: "EID EGYPT TOUR", 
    label1: "History", price1: "7D / 6N", label2: "Total Cost", price2: "95,000", 
    badge: "Eid Promo", img: "/desert_kamel_egypt.jpg", link: "/our-services/tour-packages", alt: "Egypt tour" 
  },
  { 
    id: 16, category: "visa", title: "THAILAND E-VISA", 
    label1: "Express", price1: "48 Hours", label2: "Official Fee", price2: "4,200", 
    badge: "Quick", img: "https://images.unsplash.com/photo-1528181304800-2f140819898f?q=80&w=2070", link: "/our-services/visa/thailand-visa-application", alt: "Thai visa" 
  },
  { 
    id: 20, category: "visa", title: "STUDY IN CANADA", 
    label1: "Intake", price1: "Sept '26", label2: "Admission", price2: "Direct", 
    badge: "SDS Visa", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070", link: "/our-services/study-abroad", alt: "Canada Study" 
  },
  { 
    id: 5, category: "flight", title: "DHAKA TO JEDDAH", 
    label1: "Umrah Spcl", price1: "420", label2: "Flexible", price2: "790", 
    badge: "Umrah", img: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=2070", link: "/air-tickets", alt: "Jeddah flight" 
  },
  { 
    id: 10, category: "tour", title: "DUBAI SAFARI", 
    label1: "Evening", price1: "3,200", label2: "VIP Camel", price2: "5,500", 
    badge: "Popular", img: "https://www.dubaidesertsafaris.com/wp-content/uploads/2025/01/95100e6bbb4e0728dbb90a5033802b73.webp", link: "/our-services/things-to-do", alt: "Desert safari" 
  },
  { 
    id: 11, category: "tour", title: "ABU DHABI SAFARI", 
    label1: "Sunrise", price1: "4,500", label2: "Private", price2: "12,000", 
    badge: "Premium", img: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=2070", link: "/our-services/things-to-do", alt: "Safari" 
  },
  { 
    id: 12, category: "tour", title: "OVERNIGHT SAFARI", 
    label1: "Night Stay", price1: "8,500", label2: "Camp Tent", price2: "15,000", 
    badge: "Romantic", img: "https://images.unsplash.com/photo-1539762130874-f7911ee65a75?q=80&w=2070", link: "/our-services/things-to-do", alt: "Camp" 
  }
];

export default function PromoCard() {
  const [promoIndex, setPromoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPromoIndex((prev) => (prev + 1) % promoSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = promoSlides[promoIndex];

  return (
    <div className="flex justify-center lg:justify-end w-full px-2"> 
      <div className="relative w-full max-w-md h-auto sm:h-64 rounded-2xl overflow-hidden shadow-2xl 
                      glass-liquid-water bg-[length:200%_auto] hover:bg-right transition-all duration-1000 border border-white/20">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={promoIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row h-full w-full"
          >
            {/* 50% Image Section */}
            <div className="relative w-full sm:w-1/2 aspect-3/1.5 sm:aspect-auto sm:h-full overflow-hidden">
              <Image
                src={currentSlide.img} 
                alt={currentSlide.alt}
                fill 
                priority 
                className="object-cover"
              />
              <div className="absolute top-2 left-2 bg-yellow-400 text-black text-[9px] font-black px-2 py-0.5 rounded-sm uppercase z-20 shadow-sm">
                {currentSlide.badge}
              </div>
            </div>

            {/* 50% Text Section */}
            <div className="w-full sm:w-1/2 p-4 flex flex-col justify-between bg-black/5">
              <div className="space-y-2">
                <h2 className="text-sm sm:text-base font-black uppercase leading-tight text-white drop-shadow-md">
                  {currentSlide.title}
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
                  <div className="p-2 rounded-lg bg-white/40 border border-white/30 text-center sm:text-left">
                    <span className="block text-[9px] font-bold text-gray-900 uppercase">{currentSlide.label1}</span>
                    <b className="text-[#005a31] text-[12px] font-black">
                       {currentSlide.category === 'flight' ? 'USD ' : ''}{currentSlide.price1}
                    </b>
                  </div>
                  <div className="p-2 rounded-lg bg-white/40 border border-white/30 text-center sm:text-left">
                    <span className="block text-[9px] font-bold text-gray-900 uppercase">{currentSlide.label2}</span>
                    <b className="text-[#005a31] text-[12px] font-black">
                       {currentSlide.category === 'flight' ? 'USD ' : (currentSlide.category === 'visa' || currentSlide.category === 'tour') && !currentSlide.price2.includes('FREE') && !currentSlide.price2.includes('SDS') && !currentSlide.price2.includes('Years') ? 'BDT ' : ''}{currentSlide.price2}
                    </b>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <Link 
                  href={currentSlide.link}
                  className="relative flex items-center justify-center gap-2 px-6 py-2 rounded-[10px] font-bold text-xs text-white shadow-[0_10px_20px_-10px_rgba(0,90,49,0.6)] 
                             bg-linear-to-r from-[#005a31] via-[#00a45a] to-[#005a31] bg-size-[200%_auto]
                             hover:bg-right transition-all duration-500 overflow-hidden cursor-pointer"
                >
                  <motion.div
                    className="flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent w-full h-full"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                    />
                    <span className="relative z-10">BOOK NOW</span>
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* INDICATOR DOTS */}
        <div className="absolute bottom-2 right-4 flex gap-1 z-30">
          {promoSlides.slice(0, 8).map((_, i) => ( // Showing only first 8 dots for cleaner look
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === (promoIndex % 8) ? 'bg-[#ffffff] w-4' : 'bg-black/20 w-1'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}