"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ActivitiesHero from './ActivitiesHero/ActivitiesHero';
import BottomCarousel from '../HeroHome/BottomCarousel/BottomCarousel';
import TopActivities from './TopActivities/TopActivities';



const ActivitiesPage = () => {
  const whatsappNumber = "+8801631312524";
  
  // State for Hero, Tabs, and Pagination

  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items to show in Media Hub per page

  // --- 3. DATA: GALLERY ---
  const galleryData = [
    { id: 1, type: 'photos', title: 'Dubai Desert', url: 'https://saharadesertdubai.com/storage/tours/images/zaZMzdB3X3AuvUKjX66iMDIB6igNc8Y2PN0dYIEn.jpg' },
    { id: 2, type: 'videos', title: 'Georgia Vlog', url: 'https://www.youtube.com/embed/411I3K-Zagc', isYoutube: true },
    { id: 3, type: 'photos', title: 'Bangladesh Greenery', url: 'https://ttg.com.bd/uploads/tours/plans/207_ratargul_swamp_forest_sylhetjpg.jpg' },
    { id: 4, type: 'videos', title: 'Africa Wildlife', url: 'https://www.youtube.com/embed/RzFUYcs7oeg', isYoutube: true },
    { id: 5, type: 'photos', title: 'India Taj Mahal', url: 'https://static.wixstatic.com/media/055605_65e20a7fcbc54e2e8720adfc2544c35e~mv2.jpg/v1/fill/w_1800,h_1082,al_c,q_85/taj_new_contant_edited.jpg' },
    { id: 6, type: 'photos', title: 'Armenia Nights', url: 'https://www.afcholidays.com/afccms/uploads/tour-gallery/faa700fc-de92-4e1f-9e85-e9323d1a24ed.webp' },
    { id: 7, type: 'photos', title: 'Dubai Sky', url: 'https://sunsetdesertsafari.com/wp-content/uploads/2025/01/Dubai-Desert-Safari.jpg' },
    { id: 8, type: 'videos', title: 'Travel Experience', url: 'https://www.youtube.com/embed/411I3K-Zagc', isYoutube: true },
  ];

  // --- LOGIC: PAGINATION & FILTERING ---
  const filteredList = activeTab === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.type === activeTab);

  const totalPages = Math.ceil(filteredList.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMediaItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    // Scroll to gallery top when page changes
    document.getElementById('media-hub').scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = (msg) => {
    window.open(`https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(msg)}`, '_blank');
  };


  return (
    <div className="">
 

  
       <ActivitiesHero />


    <TopActivities />

      {/* SECTION 3: MEDIA HUB (Working Pagination) */}
      <section id="media-hub" className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#005a31] mb-6 uppercase tracking-tighter">Media Hub</h2>
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {['all', 'photos', 'videos'].map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setCurrentPage(1); }}
                className={`px-8 py-3 rounded-full font-black uppercase text-xs transition-all border-2 
                  ${activeTab === tab ? 'bg-[#005a31] text-white border-[#005a31] shadow-lg' : 'bg-white text-gray-400 border-gray-100 hover:border-[#005a31]'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* MEDIA GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {currentMediaItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative h-[250px] md:h-80 rounded-[2.5rem] overflow-hidden shadow-xl bg-gray-100 group"
              >
                {item.isYoutube ? (
                  <iframe className="w-full h-full" src={item.url} title={item.title} frameBorder="0" allowFullScreen></iframe>
                ) : (
                  <div onClick={() => openWhatsApp(`Hi Eammu Holidays! I'm interested in viewing more of ${item.title}`)} className="cursor-pointer h-full w-full">
                    <img src={item.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <span className="text-white font-black px-6 py-2 border-2 border-white rounded-full uppercase text-xs">Explore</span>
                    </div>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase text-[#005a31] z-20">
                  {item.type}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* PAGINATION UI (Now Functional) */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center gap-4">
            <button 
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#005a31] hover:text-white'}`}
            >
              ‹
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-black transition-all ${currentPage === i + 1 ? 'bg-[#005a31] text-white' : 'text-gray-400 hover:text-[#005a31]'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#005a31] hover:text-white'}`}
            >
              ›
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default ActivitiesPage;