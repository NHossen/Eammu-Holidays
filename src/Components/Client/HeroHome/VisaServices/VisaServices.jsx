"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const visaData = [
  { id: 1, title: "Tourist Visa Assistance by Eammu Holidays", img: "/tourist-visa-services.jpg", link: "/visa", details: "Tourist Visa Application", alt: "Tourist visa application assistance for international travel" },
  { id: 2, title: "Study Abroad From Bangladesh with Eammu", img: "/study-abroad-visa-services.png", link: "/study-abroad", details: "Student Visa Application", alt: "Study abroad consultancy and student visa application from Bangladesh" },
  { id: 3, title: "IELTS And Visa Interview Preparation with Eammu", img: "/ielts-and-immigration.png", link: "/target-ielts-immigration-center", details: "Visa Interview Preparation", alt: "IELTS coaching and visa interview training session" },
  { id: 4, title: "Higher Study In USA With 70% Scholarship", img: "/study-abroad-usa-bottom.jpg", link: "/study-abroad/student-visa/united-states", details: "USA Visa Application", alt: "Apply for USA student visa with scholarships from Bangladesh" },
  { id: 5, title: "Higher Study In Europe With Full Funded Scholarship", img: "/study_in_europe_with_eammu_banner.jpg", link: "/study-abroad/student-visa/united-kingdom", details: "Study Abroad Visa Application", alt: "Fully funded scholarship opportunities for study in Europe" },
  { id: 6, title: "Australia Tourist Visa Application By Eammu Holidays", img: "/australia-tourist-visa-with-eammu.webp", link: "/visa/australia-visa", details: "Australia Visa Application", alt: "Australia tourist visa processing services in Bangladesh" },
  { id: 7, title: "Schengen Visa Assistance By Eammu Holidays", img: "/schengen-visa-with-eammu-new.jpg", link: "/visa/european-union-visa", details: "Schengen Visa Application", alt: "Schengen visa application and interview assistance" },
  { id: 8, title: "Study In Russia With Full Funded Govt. Scholarship", img: "/study-in-russia_with_eammu_new.webp", link: "/study-abroad/student-visa/russia", details: "Russia Visa Application", alt: "Russian government scholarship and student visa application guide" },
];

const VisaServices = () => {
  const visaRef = useRef(null);

  useEffect(() => {
    const autoScroll = () => {
      if (visaRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = visaRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          visaRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          visaRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    };
    const interval = setInterval(autoScroll, 5500);
    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    const offset = direction === 'left' ? -340 : 340;
    visaRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950 uppercase tracking-tight">Visa Services</h2>
      </div>

      <div className="relative group">
        <div ref={visaRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4">
          {visaData.map((visa) => (
            <article key={visa.id} className="min-w-[300px] md:min-w-[380px] snap-start bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300">
              <Link href={visa.link} className="h-44 overflow-hidden relative block" title={visa.title}>
                <img 
                  src={visa.img} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                  alt={visa.alt || visa.title} 
                  loading="lazy"
                />
              </Link>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <h3 className="text-blue-900 font-bold text-sm md:text-base mb-6 line-clamp-2">{visa.title}</h3>
                <div className="flex justify-end">
                  <Link href={visa.link} className="bg-[#005a31] hover:bg-[#ffcc00] hover:text-[#005a31] text-white font-black text-[10px] py-[12px] px-4 rounded-lg flex items-center gap-2 uppercase transition-all shadow-sm">
                    {visa.details} <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button aria-label="Previous Visa Service" onClick={() => scroll('left')} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition hidden lg:block border border-gray-100">
          <ChevronLeft size={24} className="text-blue-900" />
        </button>
        <button aria-label="Next Visa Service" onClick={() => scroll('right')} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition hidden lg:block border border-gray-100">
          <ChevronRight size={24} className="text-blue-900" />
        </button>
      </div>
    </section>
  );
};

export default VisaServices;