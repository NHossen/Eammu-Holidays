"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { waLink } from "../activitiesData";

const heroSlides = [
  {
    url: "/beautiful.webp",
    title: "DUBAI ADVENTURES",
    sub: "Desert Safaris & City Tours",
    alt: "Golden sand dunes in Dubai desert",
  },
  {
    url: "/desert_kamel_egypt.jpg",
    title: "GEORGIA EXPLORATION",
    sub: "Caucasus Mountains & Wine Tours",
    alt: "Scenic view of Caucasus mountains",
  },
  {
    url: "/turkey-view.jpg",
    title: "ARMENIA HERITAGE",
    sub: "Ancient Temples & History",
    alt: "Ancient stone temple in Armenia",
  },
];

const ActivitiesHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Respect reduced-motion: no auto-advancing slides
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[index];

  return (
    <section
      aria-label="Things to do hero"
      className="relative z-10 h-[70vh] min-h-[560px] w-full overflow-hidden bg-zinc-900 md:h-[85vh]"
    >
      {/* Background carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 h-full w-full"
        >
          <img
            src={slide.url}
            alt={slide.alt}
            width={1500}
            height={740}
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/30" aria-hidden="true" />

      {/* Text content: static H1 (good for SEO), animated slide label below */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-7xl">
          Things to Do &amp; Top Activities
          <span className="mt-3 block text-lg font-semibold md:text-3xl">
            in Bangladesh, Dubai, Georgia &amp; Armenia
          </span>
        </h1>

        <motion.div
          key={`label-${index}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-300 md:text-lg">
            {slide.title}
          </p>
          <p className="mt-2 max-w-2xl text-lg text-gray-100 md:text-2xl">{slide.sub}</p>
        </motion.div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#top-activities"
            className="rounded-full bg-white px-8 py-3 font-bold text-[#005a31] shadow-lg transition hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore Top Activities
          </a>
          <a
            href={waLink("Hello Eammu Holidays, I would like help planning activities and tours for my trip.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-white px-8 py-3 font-bold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Plan on WhatsApp
          </a>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
        {heroSlides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}: ${s.title}`}
            aria-current={i === index ? "true" : undefined}
            className={`h-2 rounded-full transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
              i === index ? "w-12 bg-white" : "w-3 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ActivitiesHero;