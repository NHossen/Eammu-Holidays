"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { countries, popularRoutes, categories } from '@/data/visaData/visaData';

const heroSlides = [
  { 
    id: 1, 
    image: '/flight_eammu.webp', 
    // SEO Friendly Alt Text
    altText: "Affordable International Flight Bookings and Travel Deals by Eammu Holidays", // High-value SEO Keyword
  },
  { 
    id: 2, 
    image: '/eammu_banner.webp', 
    altText: "Global Visa Application Assistance and Tourist Services from Bangladesh",
  },
  { 
    id: 3, 
    image: '/plan_eammu.webp', 
    altText: "Personalized Tour Packages and Vacation Planning with Eammu Holidays",
  },
];

export default function VisaClientContent() {
  const ITEMS_PER_PAGE = 3;
  const [currentHero, setCurrentHero] = useState(0);
  
  // প্যাজিনেশন স্টেট
  const [pages, setPages] = useState({ 
    america: 1, europe: 1, asia: 1, middleEast: 1, oceania: 1 
  });

  // ১. ডাইনামিক রেফারেন্স হোল্ডার
  const sectionRefs = useRef({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // ২. স্ক্রল ফাংশন আপডেট
  const scrollToSection = (key) => {
    const target = sectionRefs.current[key.toLowerCase()];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getPaginatedData = (catKey) => {
    const categoryList = categories[catKey] || [];
    const filteredList = countries.filter(c => categoryList.includes(c.name));
    const start = (pages[catKey] - 1) * ITEMS_PER_PAGE;
    
    return {
      data: filteredList.slice(start, start + ITEMS_PER_PAGE),
      total: Math.ceil(filteredList.length / ITEMS_PER_PAGE)
    };
  };

  return (
    <>
      {/* --- HERO SECTION --- */}
      <header className="relative w-full py-24 px-4 overflow-hidden min-h-125 flex items-center">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHero}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
             {heroSlides.map((slide) => (
  <div key={slide.id} 
    className="relative h-125 w-full">
    <Image 
      src={slide.image} 
      // SEO Friendly Alt: Fallback Mechanism সহ
      alt={slide.altText || `International Travel Services and Tour Packages by Eammu Holidays`} 
      fill 
      priority // হিরো সেকশনের জন্য পারফরম্যান্স অপ্টিমাইজেশন
      className="object-cover" 
      sizes="100vw"
    />
  </div>
))}
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/30 bg-linear-to-b from-[#005a31]/40 to-black/70 z-10" />
        </div>

        <div className="container mx-auto text-center relative z-20 text-white">
           <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
      Global Visa Application Services for Tourist & Student Visas
    </h1>
    
    <p className="max-w-5xl mx-auto text-gray-100 text-lg mb-10 leading-relaxed drop-shadow-md">
      Eammu provides professional <strong className="text-white">visa application services</strong> for 
      tourist visas, student visas, and work permits in more than 25 countries including 
      Canada, UK, Australia, Europe, and the USA. Our experts guide you with documentation, 
      embassy requirements, and interview preparation to increase visa approval success.
    </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Asia', 'Europe', 'America', 'MiddleEast', 'Oceania', 'Popular'].map(cat => (
              <button 
                key={cat} 
                onClick={() => scrollToSection(cat)}
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-[#005a31] px-6 py-2 rounded-full transition-all font-bold text-sm"
              >
                {cat === 'MiddleEast' ? 'Middle East' : cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* --- QUICK LINKS SECTION --- */}
        <div className="bg-white p-8 rounded-3xl shadow-sm mb-16 border border-gray-100">
          <h2 className="text-center text-gray-500 font-semibold mb-6 uppercase tracking-widest text-xs">Direct Visa Application Links</h2>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/visa-services/tourist-visa-application-from-bangladesh" className="bg-[#005a31] text-white px-4 py-1.5 rounded-full text-sm hover:bg-gray-800 transition">Tourist Visa</Link>
            <Link href="/visa-services/student-visa-application-from-bangladesh" className="bg-[#005a31] text-white px-4 py-1.5 rounded-full text-sm hover:bg-gray-800 transition">Student Visa</Link>
            <Link href="/visa-services/work-visa-application-from-bangladesh" className="bg-[#005a31] text-white px-4 py-1.5 rounded-full text-sm hover:bg-gray-800 transition">Work Visa</Link>
            {[ "USA", "UK", "Europe", "Canada", "Australia", "Germany", "Portugal", "Armenia", "Georgia", "Albania", "Dubai", "Qatar", "Japan", "China", "South Korea", "Spain", "Kosovo", "Serbia", "Thailand", "Singapore", "Malaysia", "Turkey" , "Indonesia" , "India" , "Saudi Arabia" , "Morocco" , "Brazil" , "South Africa" , "Azerbaijan" , "Cyprus" , "Srilanka" , "Russia" , "Montenegro" ].map((name) => (
              <Link 
                key={name} 
                href={`/visa-services/${name.toLowerCase().replace(' ', '-')}-visa-application`} 
                className="px-4 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-sm hover:border-[#005a31] hover:text-[#005a31] transition"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>

        {/* --- DYNAMIC CATEGORY SECTIONS --- */}
        {Object.keys(categories).map((catKey) => {
          const { data, total } = getPaginatedData(catKey);
          const searchKey = catKey.toLowerCase();

          return (
            <section 
              key={catKey} 
              // ৩. কলব্যাক রিফ ব্যবহার করে এরর ফিক্স করা হয়েছে
              ref={(el) => (sectionRefs.current[searchKey] = el)} 
              className="mb-24 scroll-mt-24"
            >
              <div className="border-b border-gray-200 pb-4 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 capitalize">
                  {catKey === 'middleEast' ? 'Middle East' : catKey} Visa Services
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.map((country, i) => (
                  <VisaCardItem key={i} country={country} />
                ))}
              </div>

              {/* Pagination */}
              {total > 1 && (
                <div className="flex justify-center gap-2 mt-10">
                  {[...Array(total)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setPages(prev => ({ ...prev, [catKey]: i + 1 }));
                        scrollToSection(catKey);
                      }}
                      className={`w-10 h-10 rounded-xl font-bold transition-all ${
                        pages[catKey] === i + 1 
                          ? "bg-[#005a31] text-white shadow-lg" 
                          : "bg-white border text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </section>
          );
        })}

        {/* --- POPULAR ROUTES --- */}
        <section 
          ref={(el) => (sectionRefs.current['popular'] = el)} 
          className="mt-12 bg-gray-100 p-10 rounded-[3rem]"
        >
          <h2 className="text-3xl font-bold text-[#005a31] text-center mb-10">Popular Routes & Best Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularRoutes.map((route, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm group">
                <div className="h-52 w-full relative">
                  <Image 
                    src={route.image} 
                    alt={route.altText} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform" 
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">{route.name}</h3>
                  <a 
                    href={`https://wa.me/8801631312524?text=Interested%20in%20${route.name}`} 
                    className="bg-[#005a31] text-white py-2.5 px-6 rounded-xl block font-bold hover:bg-black transition"
                  >
                    Get Deal Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

// কার্ড কম্পোনেন্ট আপডেট
const VisaCardItem = ({ country }) => (
  <article className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all flex flex-col">
    <div className="h-52 overflow-hidden relative">
      <Image 
        src={country.image} 
        alt={country.altText || `${country.name} Visa Application Services and requirements`} 
        fill 
        className="object-cover" 
      />
      <div className="absolute top-4 left-4 bg-white/90 px-4 py-1 rounded-full text-[#005a31] text-xs font-bold z-10">Official Service</div>
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{country.name} Visa Application</h3>
      <p className="text-gray-600 text-sm mb-8 flex-1">{country.description}</p>
      <Link href={country.link} className="w-full bg-[#005a31] text-white text-center py-3.5 rounded-2xl font-bold hover:bg-black transition-all">
        View Visa Details
      </Link>
    </div>
  </article>
);