"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ACTIVITIES } from "../activitiesData";

export default function TopActivities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const carouselRef = useRef(null);

  // Automatic slide movement every 4 seconds (paused on hover/focus, off for reduced motion)
  useEffect(() => {
    if (paused) return undefined;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ACTIVITIES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused]);

  // Sync scroll position with the active index
  useEffect(() => {
    const container = carouselRef.current;
    if (container && container.children[currentIndex]) {
      const activeItem = container.children[currentIndex];
      container.scrollTo({
        left: activeItem.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div
      id="top-activities"
      className="scroll-mt-24 bg-white px-4 py-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <h2 className="text-xl font-bold tracking-tight text-[#004d2c] md:text-2xl">
            TOP ACTIVITIES
          </h2>
          <div className="h-[2px] w-20 bg-[#004d2c]" />
        </div>
        <p className="mb-6 max-w-3xl text-sm text-gray-600">
          Day tours and signature experiences in Bangladesh, Dubai, Armenia and Georgia. Select a card
          to learn more, or scroll to the activity guides below for details.
        </p>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4"
        >
          {ACTIVITIES.map((activity, index) => (
            <motion.div
              key={activity.id}
              className="relative aspect-[3/1.3] min-w-[90%] snap-center overflow-hidden rounded-xl bg-gray-100 shadow-md sm:min-w-[60%] md:min-w-[45%] lg:min-w-[32%]"
              whileHover={{ scale: 1.01 }}
            >
              <Link
                href={activity.link || "#"}
                aria-label={`${activity.title} – ${activity.region}`}
                className="relative block h-full w-full focus-visible:outline focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-[#005a31]"
              >
                <img
                  src={activity.img}
                  alt={activity.alt}
                  width={600}
                  height={260}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Dark Overlay & Text */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent p-4">
                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-green-400">
                      {activity.region}
                    </p>
                    <h3 className="text-sm font-bold uppercase text-white md:text-lg">
                      {activity.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          type="button"
          aria-label="Previous activity"
          className="absolute -left-5 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border border-gray-100 bg-white p-2 text-gray-800 shadow-lg hover:bg-gray-50 md:flex"
          onClick={() => setCurrentIndex((prev) => (prev - 1 + ACTIVITIES.length) % ACTIVITIES.length)}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          type="button"
          aria-label="Next activity"
          className="absolute -right-5 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border border-gray-100 bg-white p-2 text-gray-800 shadow-lg hover:bg-gray-50 md:flex"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % ACTIVITIES.length)}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Hide scrollbars while keeping scroll functionality */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}