"use client";
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const promoSlides = [
  { id: 1,  category: "visa",   title: "SCHENGEN VISA",          label1: "Processing",  price1: "20 Days",    label2: "Total Fees",  price2: "19,500",   badge: "Schengen",    img: "/schengen-visa-promo.jpg",       link: "/visa/denmark-visa",                        alt: "Denmark visa Application From Bangladesh" },
  { id: 13, category: "flight", title: "DHAKA TO BALI",          label1: "One Way",     price1: "435",        label2: "Round Trip",  price2: "855",      badge: "Hot Deal",    img: "/the-love-island.webp",          link: "/flight-booking",                           alt: "Cheap Flights to Bali" },
  { id: 6,  category: "tour",   title: "SYLHET TEA TOUR",        label1: "Duration",    price1: "3D / 2N",    label2: "Starting",    price2: "6,500",    badge: "Best Seller", img: "/Sylhet-travel-guide-promo.jpg", link: "/our-services/tour-packages",               alt: "Sylhet tour travel guide" },
  { id: 17, category: "visa",   title: "STUDY IN USA",           label1: "Scholarship", price1: "70%",        label2: "Consultancy", price2: "FREE",     badge: "Fall 2026",   img: "/study-usa.jpg",                 link: "/study-abroad/student-visa/united-states",  alt: "Study in USA from Bangladesh" },
  { id: 2,  category: "flight", title: "JAPAN TO DHAKA",         label1: "One Way",     price1: "699",        label2: "Round Trip",  price2: "999",      badge: "Best Fare",   img: "/japan-tour-promo.jpg",          link: "/flight-booking",                           alt: "Japan cheapest flight" },
  { id: 7,  category: "tour",   title: "MALDIVES ESCAPE",        label1: "Stay",        price1: "4D / 3N",    label2: "All Incl.",   price2: "85,000",   badge: "Honeymoon",   img: "/eammu_Tour.webp",               link: "/our-services/tour-packages",               alt: "Maldives tour" },
  { id: 14, category: "visa",   title: "CANADA TOURIST VISA",    label1: "Validity",    price1: "10 Years",   label2: "Service Fee", price2: "25,000",   badge: "Trending",    img: "/tourist_canada.jpg",            link: "/visa/canada-visa",                         alt: "Canada tourist visa" },
  { id: 18, category: "visa",   title: "STUDY IN UK",            label1: "IELTS Req.",  price1: "6.0",        label2: "Stay Back",   price2: "2 Years",  badge: "No IELTS",    img: "/Study-in-uk-promo.jpg",         link: "/study-abroad/student-visa/united-kingdom", alt: "Study in UK" },
  { id: 3,  category: "flight", title: "DHAKA TO LONDON",        label1: "Economy",     price1: "650",        label2: "Premium",     price2: "1150",     badge: "Direct",      img: "/dhaka-to-london-promo.jpeg",    link: "/flight-booking",                           alt: "Dhaka to London flight" },
  { id: 8,  category: "tour",   title: "SAJEK VALLEY",           label1: "Cloud Tour",  price1: "3D / 2N",    label2: "Starting",    price2: "5,500",    badge: "Adventure",   img: "/bangladesh-tour-promo.jpg",     link: "/our-services/tour-packages",               alt: "Sajek tour" },
  { id: 15, category: "visa",   title: "SINGAPORE E-VISA",       label1: "Time",        price1: "3 Days",     label2: "Fees",        price2: "7,500",    badge: "Instant",     img: "/singapore-tour-promo.jpg",      link: "/visa/singapore-visa",                      alt: "Singapore e visa" },
  { id: 19, category: "visa",   title: "STUDY IN GERMANY",       label1: "Tuition",     price1: "FREE",       label2: "Job Search",  price2: "1.5 Years",badge: "Public Uni",  img: "/study-in-germany-promo.jpg",    link: "/study-abroad/student-visa/germany",        alt: "Germany Study" },
  { id: 4,  category: "flight", title: "CAIRO TO DHAKA",         label1: "One Way",     price1: "610",        label2: "Round Trip",  price2: "980",      badge: "Special",     img: "/desert_kamel_egypt.jpg",        link: "/flight-booking",                           alt: "Egypt flight" },
  { id: 9,  category: "tour",   title: "EID EGYPT TOUR",         label1: "History",     price1: "7D / 6N",    label2: "Total Cost",  price2: "95,000",   badge: "Eid Promo",   img: "/egypt-tour-promo.jpg",          link: "/our-services/tour-packages",               alt: "Egypt tour" },
  { id: 16, category: "visa",   title: "THAILAND E-VISA",        label1: "Express",     price1: "48 Hours",   label2: "Official Fee",price2: "4,200",    badge: "Quick",       img: "/thailand-tour-promo.webp",      link: "/visa/thailand-visa",                       alt: "Thai e visa" },
  { id: 20, category: "visa",   title: "STUDY IN CANADA",        label1: "Intake",      price1: "Sept '26",   label2: "Admission",   price2: "Direct",   badge: "SDS Visa",    img: "/study-canada-jpg.jpg",          link: "/study-abroad/student-visa/canada",         alt: "Canada Study" },
  { id: 5,  category: "flight", title: "DHAKA TO JEDDAH",        label1: "Umrah Spcl",  price1: "420",        label2: "Flexible",    price2: "790",      badge: "Umrah",       img: "/saudi-arabia-promo.jpg",        link: "/flight-booking",                           alt: "Jeddah flight" },
  { id: 10, category: "tour",   title: "DUBAI SAFARI",           label1: "Evening",     price1: "3,200",      label2: "VIP Camel",   price2: "8,500",    badge: "Popular",     img: "/dubai-safari.webp",             link: "/our-services/things-to-do",                alt: "Desert safari dubai" },
  { id: 11, category: "tour",   title: "ABU DHABI CITY TOUR",    label1: "Sunrise",     price1: "4,500",      label2: "Private",     price2: "12,000",   badge: "Premium",     img: "/abu-dhabi-tour-promo.jpg",      link: "/our-services/things-to-do",                alt: "Abu Dhabi city tour" },
  { id: 12, category: "tour",   title: "HOT AIR BALLOON SAFARI", label1: "Night Stay",  price1: "8,500",      label2: "Camp Tent",   price2: "15,000",   badge: "Romantic",    img: "/hot-air-ballon-promo.jpg",      link: "/our-services/things-to-do",                alt: "Hot Air Balloon Safari" },
];

const VISIBLE_DOTS = 8;
const SKIP_BDT = ['FREE', 'SDS', 'Years', 'D /', '%', 'Sept', 'Days', 'Hours', 'Direct'];

function formatPrice(category, price) {
  if (category === 'flight') return `USD ${price}`;
  if ((category === 'visa' || category === 'tour') && !SKIP_BDT.some(s => price.includes(s))) {
    return `BDT ${price}`;
  }
  return price;
}

export default function PromoCard() {
  const [promoIndex, setPromoIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((nextIndex) => {
    setVisible(false);
    setTimeout(() => {
      setPromoIndex(nextIndex);
      setVisible(true);
    }, 300);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((promoIndex + 1) % promoSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [promoIndex, goTo]);

  const slide = promoSlides[promoIndex];
  const dotGroupStart = Math.floor(promoIndex / VISIBLE_DOTS) * VISIBLE_DOTS;
  const dotIndexInGroup = promoIndex % VISIBLE_DOTS;

  return (
    <div className="flex justify-center lg:justify-end w-full px-2">
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl glass-liquid-water border border-white/20"
        style={{ minHeight: '160px' }}
      >
        <div
          className="flex flex-col sm:flex-row w-full sm:h-64"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease' }}
        >
          <div
            className="relative w-full sm:w-1/2 overflow-hidden"
            style={{ aspectRatio: '3/1.5', minHeight: '120px' }}
          >
            <Image
              key={slide.img}
              src={slide.img}
              alt={slide.alt}
              fill
              priority={promoIndex === 0}
              loading={promoIndex === 0 ? 'eager' : 'lazy'}
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
              quality={75}
            />
            <div className="absolute top-2 left-2 bg-yellow-400 text-black text-[9px] font-black px-2 py-0.5 rounded-sm uppercase z-20 shadow-sm">
              {slide.badge}
            </div>
          </div>

          <div className="w-full sm:w-1/2 p-4 flex flex-col justify-between bg-black/5">
            <div className="space-y-2">
              <h2
                className="text-sm sm:text-base font-black uppercase leading-tight text-white drop-shadow-md"
                style={{ minHeight: '2.5rem' }}
              >
                {slide.title}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
                <div className="p-2 rounded-lg bg-white/40 border border-white/30 text-center sm:text-left">
                  <span className="block text-[9px] font-bold text-gray-900 uppercase">{slide.label1}</span>
                  <b className="text-[#005a31] text-[12px] font-black">{formatPrice(slide.category, slide.price1)}</b>
                </div>
                <div className="p-2 rounded-lg bg-white/40 border border-white/30 text-center sm:text-left">
                  <span className="block text-[9px] font-bold text-gray-900 uppercase">{slide.label2}</span>
                  <b className="text-[#005a31] text-[12px] font-black">{formatPrice(slide.category, slide.price2)}</b>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <Link
                href={slide.link}
                className="relative flex items-center justify-center px-6 py-2 rounded-[10px] font-bold text-xs text-white overflow-hidden cursor-pointer bg-gradient-to-r from-[#005a31] via-[#00a45a] to-[#005a31] bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_10px_20px_-10px_rgba(0,90,49,0.6)] promo-card-shimmer"
              >
                <span className="relative z-10">BOOK NOW</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 right-4 flex gap-1 z-30">
          {Array.from({ length: VISIBLE_DOTS }).map((_, i) => {
            const slideIndex = dotGroupStart + i;
            if (slideIndex >= promoSlides.length) return null;
            return (
              <button
                key={i}
                onClick={() => goTo(slideIndex)}
                aria-label={`Go to slide ${slideIndex + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === dotIndexInGroup ? 'bg-white w-4' : 'bg-black/20 w-1'
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}