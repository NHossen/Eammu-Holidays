"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

const marketingMaterials = [
  { id: 1,  src: "/visa-poster/europe_visa_poster.webp",                    title: "Europe Visa Application",           href: "/our-services/visa/europe-visa-application",    alt: "Schengen Europe visa application processing and consultancy in Bangladesh" },
  { id: 2,  src: "/visa-poster/Qatar Visa.webp",                            title: "Qatar Visa Application",            href: "/our-services/visa/qatar-visa-application",     alt: "Online Qatar tourist visa and work permit assistance for Bangladeshi citizens" },
  { id: 3,  src: "/visa-poster/Canada Visa 2.webp",                         title: "Canada Tourist Visa",               href: "/our-services/visa/canada-visa-application",    alt: "Canada visitor visa application service and document checklist guidance" },
  { id: 4,  src: "/visa-poster/China Visa.webp",                            title: "China Visa Application",            href: "/our-services/visa/china-visa-application",     alt: "China business and tourist visa processing center in Dhaka" },
  { id: 5,  src: "/visa-poster/usa_visa_appointment.webp",                  title: "USA Visa Appointment And Application",href: "/our-services/visa/usa-visa-application",      alt: "USA B1 B2 visa interview appointment scheduling and DS-160 form assistance" },
  { id: 6,  src: "/visa-poster/malaysia_visa_application.webp",             title: "Malaysia Visa Application",         href: "/our-services/visa/malaysia-visa-application",  alt: "Malaysia e-visa and sticker visa processing for tourists from Bangladesh" },
  { id: 7,  src: "/visa-poster/thailand_singapore_visa_application.webp",   title: "Thailand & Singapore Visa",         href: "/our-services/visa/singapore-visa-application", alt: "Thailand and Singapore dual country tour visa assistance and package deals" },
  { id: 8,  src: "/visa-poster/london_visa_application.webp",               title: "London Visa Application",           href: "/our-services/visa/uk-visa-application",        alt: "UK Standard Visitor Visa application and London travel consultancy" },
  { id: 9,  src: "/visa-poster/australia_tourist_visa_application.webp",    title: "Australia Tourist Visa",            href: "/our-services/visa/australia-visa-application", alt: "Australia subclass 600 visitor visa processing by Eammu Holidays" },
  { id: 10, src: "/visa-poster/indonesia_visa_application.webp",            title: "Indonesia Visa Application",        href: "/our-services/visa/indonesia-visa-application", alt: "Bali Indonesia tourist visa on arrival and e-visa services for travelers" },
  { id: 11, src: "/visa-poster/usa_and_europe_visa_application.webp",       title: "USA & Europe Visa Application",     href: "/our-services/visa/canada-visa-application",    alt: "Worldwide visa consultancy for USA and Schengen countries by Eammu Holidays" },
];

const ITEMS_PER_PAGE = 4;

const PosterGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImg, setSelectedImg] = useState(null);

  const totalPages = Math.ceil(marketingMaterials.length / ITEMS_PER_PAGE);

  // ✅ memoized — not recomputed on every render
  const currentItems = useMemo(() =>
    marketingMaterials.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    ),
    [currentPage]
  );

  // ✅ close lightbox on Escape key
  React.useEffect(() => {
    if (!selectedImg) return;
    const handler = (e) => { if (e.key === 'Escape') setSelectedImg(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedImg]);

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-left border-l-[10px] border-[#005a31] pl-8">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">
            Global Visa Assistance
          </h2>
          {/* ✅ font-sm → text-sm */}
          <p className="text-slate-500 text-sm mt-4 max-w-7xl leading-relaxed">
            Eammu Holidays is a leading <strong>worldwide visa consultancy in Bangladesh</strong>, providing professional <strong>visa application assistance</strong> for tourists, business travelers, students, and family visit visas. We specialize in <strong>Schengen visa services, UK visa, USA visa, Canada visa, Australia visa, Dubai visa, and Europe work permit guidance</strong> with complete documentation support, embassy appointment assistance, travel consultation, and fast processing. Trusted for high success rates, we are recognized as one of the <strong>best online travel agencies in Bangladesh and UAE</strong> for secure, reliable, and affordable international visa solutions, travel planning, and global immigration support.
          </p>
        </div>

        {/* Grid — no AnimatePresence, no motion.div, no layout prop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-end">
          {currentItems.map((item, index) => {
            const isFlyer = index % 2 !== 0;
            return (
              <div
                key={item.id}
                className="flex flex-col group"
                // ✅ CSS fade-in via animation-delay — no framer-motion
                style={{
                  animation: 'fadeUp 0.35s ease both',
                  animationDelay: `${index * 60}ms`,
                }}
              >
                <div className={`relative w-full overflow-hidden rounded-2xl shadow-md bg-white border border-slate-200 transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#005a31]/20 ${isFlyer ? 'aspect-[5/7]' : 'aspect-square'}`}>

                  {/* Image link */}
                  <Link href={item.href} className="relative block w-full h-full">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-contain p-3 transition-transform duration-700 ease-in-out group-hover:scale-110"
                      // ✅ only first 2 items on page 1 get priority — others lazy
                      priority={currentPage === 1 && index < 2}
                      loading={currentPage === 1 && index < 2 ? 'eager' : 'lazy'}
                    />
                  </Link>

                  {/*
                    ✅ Lightbox trigger overlay — sits above Link
                    Uses stopPropagation so Link doesn't also fire
                    Maximize icon: CSS scale replaces whileInView (which was broken anyway)
                  */}
                  <div
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center cursor-pointer"
                    onClick={(e) => { e.preventDefault(); setSelectedImg(item); }}
                  >
                    <div className="bg-white p-4 rounded-full text-[#005a31] shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 size={32} />
                    </div>
                  </div>
                </div>

                {/* Title button */}
                <Link href={item.href} className="mt-5 w-full">
                  <h3 className="w-full py-3 px-4 bg-[#005a31] text-white text-center font-extrabold text-sm md:text-base uppercase tracking-tight rounded-xl transition-all duration-300 hover:bg-yellow-400 hover:text-slate-900 shadow-md hover:shadow-lg cursor-pointer">
                    {item.title}
                  </h3>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-20 gap-6">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg border border-slate-100 hover:bg-[#005a31] hover:text-white transition-all disabled:opacity-20"
            >
              <ChevronLeft size={28} />
            </button>

            <div className="flex items-center gap-3">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  aria-label={`Page ${i + 1}`}
                  aria-current={currentPage === i + 1 ? 'page' : undefined}
                  className={`w-12 h-12 rounded-xl font-black text-lg transition-all duration-300 ${
                    currentPage === i + 1
                      ? 'bg-[#005a31] text-white shadow-xl scale-110'
                      : 'bg-white text-slate-400 hover:bg-slate-50 border border-slate-100'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg border border-slate-100 hover:bg-[#005a31] hover:text-white transition-all disabled:opacity-20"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        )}

        {/*
          ✅ Lightbox — this is the ONE justified use of CSS transitions
          position:fixed works fine in Next.js app router
          backdrop-blur-sm instead of md — much lighter on mobile GPU
          Escape key closes via useEffect above
        */}
        {selectedImg && (
          <div
            className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-6"
            style={{ animation: 'fadeIn 0.2s ease both' }}
            onClick={() => setSelectedImg(null)}
          >
            <button
              aria-label="Close lightbox"
              className="absolute top-8 right-8 text-white bg-white/10 p-4 rounded-full hover:bg-red-600 transition-all z-50"
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
            >
              <X size={32} />
            </button>

            <div
              className="relative w-full h-[80vh]"
              style={{ animation: 'scaleUp 0.25s ease both' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImg.src}
                alt={selectedImg.alt}
                fill
                className="object-contain"
                sizes="100vw"
                quality={85}
              />
            </div>

            <p
              className="absolute bottom-8 left-0 right-0 text-center text-white text-2xl md:text-3xl font-black uppercase tracking-[0.2em]"
              style={{ animation: 'fadeUp 0.3s ease 0.1s both' }}
            >
              {selectedImg.title}
            </p>
          </div>
        )}
      </div>

      {/* ✅ Keyframes in component — scoped, no globals.css pollution */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default PosterGallery;