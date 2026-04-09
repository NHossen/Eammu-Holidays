"use client";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const bottomSlides = [
  { 
    id: 0, 
    title: "Higher Study In USA With 70% Scholarship", 
    img: "https://globalgateways.co.in/wp-content/uploads/2025/01/study-abroad-usa.jpg", 
    alt: "USA Student Visa and Scholarship Consultancy in Bangladesh for Higher Studies",
    link: "/our-services/study-abroad" 
  },
  { 
    id: 1, 
    title: "ALBANIA VISA", 
    img: "/albania_visa_from_bangladesh.webp", 
    alt: "Albania Work and Tourist Visa Application Services from Bangladesh - Eammu Holidays",
    link: "/our-services/visa/albania-visa-application" 
  },
  { 
    id: 2, 
    title: "EID PROMO", 
    img: "/eid_offer_2026_eammu.webp", 
    alt: "Eid Holiday Special Visa Offers and Tour Package Discounts 2026",
    link: "/offers" 
  },
  { 
    id: 3, 
    title: "E-VISA", 
    img: "/eammu_evisa_offer.webp", 
    alt: "Fastest Online E-Visa Processing for Thailand and Singapore in Bangladesh",
    link: "/our-services/visa/thailand-visa-application" 
  },
  { 
    id: 4, 
    title: "SYLHET TOUR", 
    img: "https://royalbengaltours.com/wp-content/uploads/2017/08/Cycle-through-the-most-beautiful-tea-estates-of-Sreemangal-and-Sylhet-area.webp", 
    alt: "Affordable Sylhet Sreemangal Tea Garden Tour Packages with Eammu Holidays",
    link: "/our-services/tour-packages" 
  },
  { 
    id: 5, 
    title: "DHAKA TOUR", 
    img: "https://toursntripsbd.com/wp-content/uploads/2016/06/PB100664-180x152-1.jpg", 
    alt: "Old Dhaka City Sightseeing and Heritage Tour Packages for Tourists",
    link: "/our-services/tour-packages" 
  },
  { 
    id: 6, 
    title: "DESERT SAFARI", 
    img: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1666942368/blog/gu90kcnlehlie93a2mks.jpg", 
    alt: "Dubai Desert Safari Adventure and Tourism Packages for Bangladeshi Travelers",
    link: "/our-services/things-to-do" 
  },
  { 
    id: 7, 
    title: "ARMENIA VISA", 
    img: "https://www.gokite.travel/wp-content/uploads/2021/05/Armenia-tour-packages-from-dubai_11zon-870x480.webp", 
    alt: "Armenia Tourist and Business Visa Sticker and eVisa Support Service",
    link: "/our-services/visa/armenia-visa-application" 
  },
  { 
    id: 8, 
    title: "EUROPE VISA", 
    img: "https://pmlholidays.com/admin/production/images/blogs/Europe.jpg", 
    alt: "Europe Schengen Visa Assistance and Documentation Service in Bangladesh",
    link: "/our-services/visa/europe-visa-application" 
  },
  { 
    id: 9, 
    title: "EMI", 
    img: "/eammu_emi_offer.webp", 
    alt: "Book Flight Tickets and Tour Packages on 0% EMI Installments in Bangladesh",
    link: "/offers" 
  },
  { 
    id: 10, 
    title: "CANADA VISA", 
    img: "/canada_visa_from_india.webp", 
    alt: "Canada Student and Visitor Visa Processing Agency with High Success Rate",
    link: "/our-services/visa/canada-visa-application" 
  },
  { 
    id: 11, 
    title: "SINGAPORE VISA", 
    img: "https://www.agoda.com/wp-content/uploads/2019/06/Singapore-Itinerary-Marina-Bay-Sands.jpg", 
    alt: "Singapore Tourist Visa Application and Entry Permit Service for Families",
    link: "/our-services/visa/singapore-visa-application" 
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
            <motion.div key={index} className="snap-center min-w-[90%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[32%] aspect-[3/1.3] rounded-xl overflow-hidden relative shadow-md bg-gray-100" whileHover={{ scale: 1.01 }}>
              <Link href={slide.link || "#"} className="block w-full h-full relative">
                <Image src={slide.img} alt={slide.alt || slide.title} fill className="object-fill" />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 flex items-end p-3"><p className="text-white font-bold text-xs md:text-base">{slide.title}</p></div>
              </Link>
            </motion.div>
          ))}
        </div>
        <button
                   className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-800 z-30 hover:bg-gray-50"
                   onClick={() => setBottomIndex((prev) => (prev - 1 + bottomSlides.length) % bottomSlides.length)}
                 >
                   <ChevronLeft size={24} />
                 </button>
                 <button
                   className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-800 z-30 hover:bg-gray-50"
                   onClick={() => setBottomIndex((prev) => (prev + 1) % bottomSlides.length)}
                 >
                   <ChevronRight size={24} />
                 </button>
      </div>
    </div>
  );
}