"use client";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const bottomSlides = [
  // --- VISAS ---
  { 
    id: 0, 
    category: "visa",
    title: "DENMARK VISA", 
    type: "Sticker Visa",
    validity: "15 TO 90 Days",
    processingTime: "15-30 Working Days",
    price: "BDT 19,900",
    img: "/denmark-bottom-slides.jpg", 
    alt: "Denmark Schengen Visa Application From Bangladesh",
    link: "/visa/denmark-visa" 
  },
  { 
    id: 1, 
    category: "visa",
    title: "ALBANIA VISA", 
    type: "E-Visa / Sticker",
    validity: "As per approval",
    processingTime: "10-25 Working Days",
    price: "BDT 12,000",
    img: "/albania_visa_from_bangladesh.webp", 
    alt: "Albania Visa Services",
    link: "/visa/albania-visa" 
  },
  { 
    id: 2, 
    category: "visa",
    title: "CANADA VISA", 
    type: "Visitor/Student",
    validity: "Up to 10 Years",
    processingTime: "4-6 Months",
    price: "Contact for Quote",
    img: "/canada_visa_from_india.webp", 
    alt: "Canada Visa success",
    link: "/visa/canada-visa" 
  },
  { 
    id: 3, 
    category: "visa",
    title: "SINGAPORE VISA", 
    type: "E-Visa",
    validity: "30 Days",
    processingTime: "3-5 Working Days",
    price: "BDT 7,500",
    img: "/singapore-tour-promo.jpg", 
    alt: "Singapore Visa Support by Eammu Holidays",
    link: "/visa/singapore-visa" 
  },
  { 
    id: 4, 
    category: "visa",
    title: "EUROPE (SCHENGEN)", 
    type: "Short Stay Sticker",
    validity: "30 TO 90 Days",
    processingTime: "15-30 Days",
    price: "BDT 18,500",
    img: "/schengen-visa-promo.jpg", 
    alt: "Schengen Visa For Bangladesh",
    link: "/visa/european-union-visa" 
  },
  { 
    id: 5, 
    category: "visa",
    title: "ARMENIA VISA", 
    type: "E-Visa",
    validity: "21-120 Days",
    processingTime: "7 Working Days",
    price: "BDT 5,500",
    img: "/Armenia-tour-from-bangladesh-bottom.webp", 
    alt: "Armenia Visa application",
    link: "/visa/armenia-visa" 
  },

  // --- TOUR PACKAGES ---
  { 
    id: 6, 
    category: "tour",
    title: "SYLHET TEA ESTATE", 
    duration: "2 Nights / 3 Days",
    includes: "Luxury Resort + Breakfast + Car",
    price: "BDT 6,500",
    img: "/Sylhet-travel-guide-promo.jpg", 
    alt: "Sylhet Tour Package by Best Tour Operator",
    link: "/our-services/tour-packages" 
  },
  { 
    id: 7, 
    category: "tour",
    title: "OLD DHAKA CITY TOUR", 
    duration: "Full Day (8 AM - 6 PM)",
    includes: "Rickshaw ride + Lunch + Guide",
    price: "BDT 2,500",
    img: "/dhaka-tour-bottom.jpg", 
    alt: "Dhaka Sightseeing",
    link: "/our-services/tour-packages" 
  },
  { 
    id: 8, 
    category: "tour",
    title: "DESERT SAFARI DUBAI", 
    duration: "Evening (6 Hours)",
    includes: "BBQ + Dune Bash + Camels",
    price: "BDT 9,800",
    img: "/desert_kamel_egypt.jpg", 
    alt: "Dubai Desert Safari",
    link: "/our-services/things-to-do" 
  },
  { 
    id: 9, 
    category: "tour",
    title: "COX'S BAZAR BEACH", 
    duration: "3 Nights / 4 Days",
    includes: "Air Ticket + 4* Hotel + Meals",
    price: "BDT 6,999",
    img: "/coxs-bazar-tour-bangladesh.jpg", 
    alt: "Coxs Bazar Beach Tour",
    link: "/our-services/tour-packages" 
  },

  // --- OFFERS ---
  { 
    id: 10, 
    category: "offer",
    title: "EID PROMO 2026", 
    promo: "UP TO 50% OFF",
    validUntil: "Valid till June 2026",
    img: "/eid_offer_2026_eammu.webp", 
    alt: "Eid Special Offer",
    link: "/offers" 
  },
  { 
    id: 11, 
    category: "offer",
    title: "0% EMI FACILITY", 
    promo: "Up to 12 Months",
    validUntil: "Selected Credit Cards",
    img: "/eammu_emi_offer.webp", 
    alt: "EMI Payment Plans",
    link: "/offers" 
  },
  { 
    id: 12, 
    category: "offer",
    title: "E-VISA COMBO", 
    promo: "Thai + Singapore Special",
    validUntil: "Limited Time Only",
    img: "/eammu_evisa_offer.webp", 
    alt: "Visa Combo Discounts",
    link: "/visa/thailand-visa" 
  },
  { 
    id: 13, 
    category: "offer",
    title: "FLIGHT DEALS", 
    promo: "Cashback on Air Tickets",
    validUntil: "Domestic & International",
    img: "/cheapflights_eammu_offer.webp", 
    alt: "Cheap Flight Deals",
    link: "/offers" 
  },

  // --- SERVICES / STUDY ---
  { 
    id: 14, 
    category: "service",
    title: "STUDY IN USA", 
    detail: "70% Scholarship Available",
    note: "Admission & Visa Guidance",
    img: "/study-abroad-usa-bottom.jpg", 
    alt: "Higher Studies in USA",
    link: "/study-abroad/student-visa/united-states" 
  },
  { 
    id: 15, 
    category: "service",
    title: "STUDY IN UK", 
    detail: "Post-Study Work Permit",
    note: "Top Ranked Universities",
    img: "/study-uk-banner.jpg", 
    alt: "Study in UK",
    link: "/study-abroad/student-visa/united-kingdom" 
  },
  { 
    id: 16, 
    category: "service",
    title: "STUDY IN ALBANIA", 
    detail: "Post-Study",
    note: "Form Fill-up & Correction",
    img: "/albania_visa_from_bangladesh.webp", 
    alt: "Albania Study Visa Services",
    link: "/study-abroad/student-visa/albania" 
  },
  { 
    id: 17, 
    category: "service",
    title: "HOTEL BOOKING", 
    detail: "Over 500,000 Hotels",
    note: "Corporate Rates Available",
    img: "/hotel-booking.jpg", 
    alt: "Hotel Reservation Services",
    link: "/our-services" 
  },
];

export default function BottomCarousel() {
  const [bottomIndex, setBottomIndex] = useState(0);
  const bottomRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setBottomIndex((prev) => (prev + 1) % bottomSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const container = bottomRef.current;
    if (container && container.children[bottomIndex]) {
      const activeItem = container.children[bottomIndex];
      container.scrollTo({ left: activeItem.offsetLeft - container.offsetLeft, behavior: "smooth" });
    }
  }, [bottomIndex]);

  return (
    <div className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto relative">
        <div ref={bottomRef} className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 hide-scrollbar">
          {bottomSlides.map((slide, index) => (
            <motion.div 
              key={index} 
              className="group snap-center min-w-[90%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[32%] aspect-[3/1.3] rounded-xl overflow-hidden relative shadow-md bg-gray-100"
              whileHover={{ scale: 1.02 }}
            >
              <Link href={slide.link || "#"} className="block w-full h-full relative">
                {/* Image: Stays rectangular, fills box, blurs on hover */}
                <Image 
                  src={slide.img} 
                  alt={slide.alt || slide.title} 
                  fill 
                  className="object-fill transition-all duration-700 group-hover:blur-md group-hover:scale-110" 
                />
                
                {/* Hover Overlay: Dark Green Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/95 via-green-800/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content: Varies by Category */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1 uppercase tracking-tight">
                    {slide.title}
                  </h3>
                  
                  <div className="text-white/95 text-[10px] md:text-xs flex flex-col gap-0.5 leading-tight">
                    {/* Visa Layout */}
                    {slide.category === "visa" && (
                      <>
                        <p><span className="text-green-300 font-semibold">TYPE:</span> {slide.type}</p>
                        <p><span className="text-green-300 font-semibold">TIME:</span> {slide.processingTime}</p>
                        <p className="mt-1 text-sm md:text-base font-black text-yellow-300 drop-shadow-md">{slide.price}</p>
                      </>
                    )}

                    {/* Tour Layout */}
                    {slide.category === "tour" && (
                      <>
                        <p className="text-yellow-100 font-bold uppercase tracking-tighter">{slide.duration}</p>
                        <p className="opacity-80 line-clamp-1">{slide.includes}</p>
                        <p className="mt-1 text-sm md:text-base font-black text-white">{slide.price}</p>
                      </>
                    )}

                    {/* Offer Layout */}
                    {slide.category === "offer" && (
                      <>
                        <div className="bg-white text-green-900 px-3 py-1 rounded-full font-black text-[10px] md:text-xs mb-1">
                          {slide.promo}
                        </div>
                        <p className="text-green-200 font-medium tracking-wide italic">{slide.validUntil}</p>
                      </>
                    )}

                    {/* Service/General Layout */}
                    {slide.category === "service" && (
                      <>
                        <p className="text-white font-bold tracking-normal">{slide.detail}</p>
                        <p className="text-green-300 text-[9px] uppercase tracking-widest">{slide.note}</p>
                      </>
                    )}
                  </div>
                </div>

                {/* Default Bottom Label (disappears on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3 group-hover:opacity-0 transition-opacity duration-300">
                  <p className="text-white font-bold text-xs md:text-base">{slide.title}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <button
          className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-800 z-30 hover:bg-green-500 hover:text-white transition-all"
          onClick={() => setBottomIndex((prev) => (prev - 1 + bottomSlides.length) % bottomSlides.length)}
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-800 z-30 hover:bg-green-500 hover:text-white transition-all"
          onClick={() => setBottomIndex((prev) => (prev + 1) % bottomSlides.length)}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}