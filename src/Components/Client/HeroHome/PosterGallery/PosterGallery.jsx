"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

const marketingMaterials = [
  { 
    id: 1, 
    src: "/visa-poster/europe_visa_poster.webp", 
    title: "Europe Visa Application",
    href: "/our-services/visa/europe-visa-application",
    alt: "Schengen Europe visa application processing and consultancy in Bangladesh" 
  },
  { 
    id: 2, 
    src: "/visa-poster/Qatar Visa.webp", 
    title: "Qatar Visa Application",
    href: "/our-services/visa/qatar-visa-application",
    alt: "Online Qatar tourist visa and work permit assistance for Bangladeshi citizens"
  },
  { 
    id: 3, 
    src: "/visa-poster/Canada Visa 2.webp", 
    title: "Canada Tourist Visa",
    href: "/our-services/visa/canada-visa-application",
    alt: "Canada visitor visa application service and document checklist guidance"
  },
  { 
    id: 4, 
    src: "/visa-poster/China Visa.webp", 
    title: "China Visa Application",
    href: "/our-services/visa/china-visa-application",
    alt: "China business and tourist visa processing center in Dhaka"
  },
  { 
    id: 5, 
    src: "/visa-poster/usa_visa_appointment.webp", 
    title: "USA Visa Appointment And Application",
    href: "/our-services/visa/usa-visa-application",
    alt: "USA B1 B2 visa interview appointment scheduling and DS-160 form assistance"
  },
  { 
    id: 6, 
    src: "/visa-poster/malaysia_visa_application.webp", 
    title: "Malaysia Visa Application",
    href: "/our-services/visa/malaysia-visa-application",
    alt: "Malaysia e-visa and sticker visa processing for tourists from Bangladesh"
  },
  { 
    id: 7, 
    src: "/visa-poster/thailand_singapore_visa_application.webp", 
    title: "Thailand & Singapore Visa Application",
    href: "/our-services/visa/singapore-visa-application",
    alt: "Thailand and Singapore dual country tour visa assistance and package deals"
  },
  { 
    id: 8, 
    src: "/visa-poster/london_visa_application.webp", 
    title: "London Visa Application",
    href: "/our-services/visa/uk-visa-application",
    alt: "UK Standard Visitor Visa application and London travel consultancy"
  },
  { 
    id: 9, 
    src: "/visa-poster/australia_tourist_visa_application.webp", 
    title: "Australia Tourist Visa Application",
    href: "/our-services/visa/australia-visa-application",
    alt: "Australia subclass 600 visitor visa processing by Eammu Holidays"
  },
  { 
    id: 10, 
    src: "/visa-poster/indonesia_visa_application.webp", 
    title: "Indonesia Visa Application",
    href: "/our-services/visa/indonesia-visa-application",
    alt: "Bali Indonesia tourist visa on arrival and e-visa services for travelers"
  },
  { 
    id: 11, 
    src: "/visa-poster/usa_and_europe_visa_application.webp", 
    title: "USA & Europe Visa Application",
    href: "/our-services/visa/canada-visa-application",
    alt: "Worldwide visa consultancy for USA and Schengen countries by Eammu Holidays"
  },
];

const PosterGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImg, setSelectedImg] = useState(null); 
  const itemsPerPage = 4;

  const totalPages = Math.ceil(marketingMaterials.length / itemsPerPage);
  const currentItems = marketingMaterials.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 text-left border-l-[10px] border-[#005a31] pl-8">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">
            Global Visa Assistance
          </h2>
         <p className="text-slate-500 font-sm mt-4 max-w-7xl leading-relaxed">
  Eammu Holidays is a leading <strong>worldwide visa consultancy in Bangladesh</strong>, providing professional <strong>visa application assistance</strong> for tourists, business travelers, students, and family visit visas. We specialize in <strong>Schengen visa services, UK visa, USA visa, Canada visa, Australia visa, Dubai visa, and Europe work permit guidance</strong> with complete documentation support, embassy appointment assistance, travel consultation, and fast processing. Trusted for high success rates, we are recognized as one of the <strong>best online travel agencies in Bangladesh and UAE</strong> for secure, reliable, and affordable international visa solutions, travel planning, and global immigration support.
</p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-end">
          <AnimatePresence mode="wait">
            {currentItems.map((item, index) => {
              const isFlyer = index % 2 !== 0;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col group"
                >
                  <div 
                    className={`relative w-full overflow-hidden rounded-2xl shadow-md bg-white border border-slate-200 transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#005a31]/20
                    ${isFlyer ? 'aspect-[5/7]' : 'aspect-[5/5]'}`}
                  >
                    {/* Image Link */}
                    <Link href={item.href} className="relative block w-full h-full">
                        <Image 
                          src={item.src} 
                          alt={item.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-contain p-3 transition-transform duration-700 ease-in-out group-hover:scale-110"
                          priority={currentPage === 1}
                        />
                    </Link>

                    {/* Lightbox trigger */}
                    <div 
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center cursor-pointer pointer-events-none group-hover:pointer-events-auto"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedImg(item);
                      }}
                    >
                       <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className="bg-white p-4 rounded-full text-[#005a31] shadow-2xl pointer-events-auto"
                       >
                          <Maximize2 size={32} />
                       </motion.div>
                    </div>
                  </div>
                  
                  {/* Button-style Title Link */}
                  <Link href={item.href} className="mt-5 w-full">
                    <h3 className="w-full py-3 px-4 bg-[#005a31] text-white text-center font-extrabold text-sm md:text-base uppercase tracking-tight rounded-xl transition-all duration-300 hover:bg-yellow-400 hover:text-slate-900 shadow-md hover:shadow-lg cursor-pointer">
                        {item.title}
                    </h3>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-20 gap-6">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg border border-slate-100 hover:bg-[#005a31] hover:text-white transition-all disabled:opacity-20"
              disabled={currentPage === 1}
              aria-label="Previous Page"
            >
              <ChevronLeft size={28} />
            </button>
            
            <div className="flex items-center gap-3">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-12 h-12 rounded-xl font-black text-lg transition-all duration-300 ${
                    currentPage === i + 1 
                    ? "bg-[#005a31] text-white shadow-xl scale-110" 
                    : "bg-white text-slate-400 hover:bg-slate-50 border border-slate-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg border border-slate-100 hover:bg-[#005a31] hover:text-white transition-all disabled:opacity-20"
              disabled={currentPage === totalPages}
              aria-label="Next Page"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        )}

        {/* Modal Lightbox */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-6"
              onClick={() => setSelectedImg(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white bg-white/10 p-4 rounded-full hover:bg-red-600 transition-all z-50"
                onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
              >
                <X size={32} />
              </button>
              
              <div className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none">
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  className="relative w-full h-[80vh] pointer-events-auto"
                >
                  <Image 
                    src={selectedImg.src} 
                    alt={selectedImg.alt} 
                    fill
                    className="object-contain"
                  />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 text-center pointer-events-auto"
                >
                   <p className="text-white text-3xl md:text-4xl font-black uppercase tracking-[0.2em]">
                    {selectedImg.title}
                   </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PosterGallery;