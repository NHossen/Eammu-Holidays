"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ActivitiesHero from "./ActivitiesHero/ActivitiesHero";
import TopActivities from "./TopActivities/TopActivities";
import { waLink } from "./activitiesData";

const ITEMS_PER_PAGE = 6; // Media Hub items per page
const TABS = ["all", "photos", "videos"];

// --- DATA: GALLERY ---
const galleryData = [
  { id: 1, type: "photos", title: "Dubai Desert", url: "https://saharadesertdubai.com/storage/tours/images/zaZMzdB3X3AuvUKjX66iMDIB6igNc8Y2PN0dYIEn.jpg" },
  { id: 2, type: "videos", title: "Georgia Vlog", url: "https://www.youtube.com/embed/411I3K-Zagc", isYoutube: true },
  { id: 3, type: "photos", title: "Bangladesh Greenery", url: "https://ttg.com.bd/uploads/tours/plans/207_ratargul_swamp_forest_sylhetjpg.jpg" },
  { id: 4, type: "videos", title: "Africa Wildlife", url: "https://www.youtube.com/embed/RzFUYcs7oeg", isYoutube: true },
  { id: 5, type: "photos", title: "India Taj Mahal", url: "https://static.wixstatic.com/media/055605_65e20a7fcbc54e2e8720adfc2544c35e~mv2.jpg/v1/fill/w_1800,h_1082,al_c,q_85/taj_new_contant_edited.jpg" },
  { id: 6, type: "photos", title: "Armenia Nights", url: "https://www.afcholidays.com/afccms/uploads/tour-gallery/faa700fc-de92-4e1f-9e85-e9323d1a24ed.webp" },
  { id: 7, type: "photos", title: "Dubai Sky", url: "https://sunsetdesertsafari.com/wp-content/uploads/2025/01/Dubai-Desert-Safari.jpg" },
  { id: 8, type: "videos", title: "Travel Experience", url: "https://www.youtube.com/embed/411I3K-Zagc", isYoutube: true },
];

const ActivitiesPage = ({ children, faq }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // --- LOGIC: FILTERING & PAGINATION ---
  const filteredList =
    activeTab === "all" ? galleryData : galleryData.filter((item) => item.type === activeTab);

  const totalPages = Math.max(1, Math.ceil(filteredList.length / ITEMS_PER_PAGE));
  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const indexOfLastItem = safePage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentMediaItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNum) => {
    setCurrentPage(Math.min(Math.max(1, pageNum), totalPages));
    document.getElementById("media-hub")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = (msg) => {
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <ActivitiesHero />

      <TopActivities />

      {/* Server-rendered detail sections (intro, activity guides, how booking works) */}
      {children}

      {/* MEDIA HUB */}
      <section
        id="media-hub"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 md:px-6"
        aria-labelledby="media-hub-title"
      >
        <div className="mb-16 text-center">
          <h2
            id="media-hub-title"
            className="mb-4 text-4xl font-black uppercase tracking-tighter text-[#005a31] md:text-5xl"
          >
            Media Hub
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Photos and videos from destinations we plan trips to. Tap a photo to ask us about that place.
          </p>
          <div role="group" aria-label="Filter media" className="mb-12 flex flex-wrap justify-center gap-3">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                aria-pressed={activeTab === tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentPage(1);
                }}
                className={`rounded-full border-2 px-8 py-3 text-xs font-black uppercase transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a31]
                  ${
                    activeTab === tab
                      ? "border-[#005a31] bg-[#005a31] text-white shadow-lg"
                      : "border-gray-100 bg-white text-gray-400 hover:border-[#005a31]"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* MEDIA GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {currentMediaItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[250px] overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-xl md:h-80"
              >
                {item.isYoutube ? (
                  <iframe
                    className="h-full w-full"
                    src={item.url}
                    title={`${item.title} video`}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => openWhatsApp(`Hi Eammu Holidays! I'm interested in viewing more of ${item.title}`)}
                    aria-label={`Ask Eammu Holidays about ${item.title} on WhatsApp`}
                    className="block h-full w-full cursor-pointer focus-visible:outline focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-[#005a31]"
                  >
                    <img
                      src={item.url}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none"
                      alt={`${item.title} travel photo`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-all group-hover:opacity-100 group-focus-within:opacity-100">
                      <span className="rounded-full border-2 border-white px-6 py-2 text-xs font-black uppercase text-white">
                        Explore
                      </span>
                    </div>
                  </button>
                )}
                <div className="pointer-events-none absolute left-4 top-4 z-20 rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase text-[#005a31] backdrop-blur-sm">
                  {item.type}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <nav aria-label="Media Hub pagination" className="mt-16 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous page"
              disabled={safePage <= 1}
              onClick={() => handlePageChange(safePage - 1)}
              className={`flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a31] ${
                safePage <= 1 ? "cursor-not-allowed opacity-30" : "hover:bg-[#005a31] hover:text-white"
              }`}
            >
              ‹
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  aria-label={`Page ${n}`}
                  aria-current={safePage === n ? "page" : undefined}
                  onClick={() => handlePageChange(n)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-black transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a31] ${
                    safePage === n ? "bg-[#005a31] text-white" : "text-gray-400 hover:text-[#005a31]"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label="Next page"
              disabled={safePage >= totalPages}
              onClick={() => handlePageChange(safePage + 1)}
              className={`flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a31] ${
                safePage >= totalPages ? "cursor-not-allowed opacity-30" : "hover:bg-[#005a31] hover:text-white"
              }`}
            >
              ›
            </button>
          </nav>
        )}

        {/* Closing CTA */}
        <div className="mt-16 rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm md:p-10">
          <h3 className="text-2xl font-black text-gray-900">Did not find the activity you want?</h3>
          <p className="mx-auto mt-2 max-w-xl text-gray-600">
            Tell us the destination, dates and group size. We will let you know what we can arrange.
          </p>
          <button
            type="button"
            onClick={() =>
              openWhatsApp(
                "Hello Eammu Holidays, I am looking for activities or tours. Destination: \nTravel dates: \nNumber of travelers: \nPlease share the available options."
              )
            }
            className="mt-6 rounded-full bg-[#005a31] px-8 py-3 font-bold text-white transition hover:bg-[#003e24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005a31]"
          >
            Ask on WhatsApp
          </button>
        </div>
      </section>

      {/* Server-rendered FAQ */}
      {faq}
    </div>
  );
};

export default ActivitiesPage;