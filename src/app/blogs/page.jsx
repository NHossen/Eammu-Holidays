"use client";

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import BlogSection from "@/Components/BlogSection/BlogSection";




const Blogs = () => {
  const blogFaqs = [
    {
      q: "Which country offers the easiest student visa for Bangladeshis in 2025?",
      a: "Germany, the UK, and Japan are currently the most accessible. These countries have streamlined their digital application processes and offer high approval rates."
    },
    {
      q: "How can I avoid visa rejection for USA and Canada?",
      a: "The key is strong financial documentation and proving 'Home Ties.' Eammu Holidays provides expert case analysis to ensure your documents are perfectly aligned."
    }
  ];

  const shorts = [
    { id: "9lsBNCWdJrs", title: "FEEL THE HEAT! WITH EAMMU FIRE SHOW DESERT SAFARI" },
    { id: "ZwbS9-cnE7U", title: "DESERT SAFARI DUBAI WITH EAMMU" },
    { id: "wBEWAeP8AEI", title: "THAILAND TOUR PACKAGES With Eammu" },
    { id: "HEKzY7yBb24", title: "Love Lake Dubai & Salt Lake Dubai Tour" },
  ];

  const heroSlides = [
    {
      id: 1,
      image: "/bangladesh_europe_couple.webp",
      badge: "Since 2022",
      title: "Latest Travel & Visa News From Eammu Travel",
      description: "Get the latest travel news, visa policy updates, immigration alerts, and tourism industry insights from Eammu Travel. Stay informed with real-time updates for travelers planning trips."
    },
    {
      id: 2,
      image: "/flight_eammu.webp",
      badge: "Visa Alerts",
      title: "Global Visa Updates for Schengen, UK & USA",
      description: "Explore the newest visa updates for Schengen countries, the United Kingdom, and the United States. Our blog provides accurate visa policy changes and application tips."
    },
    {
      id: 3,
      image: "/sylhet_eammu.webp",
      badge: "Travel Tips",
      title: "Travel Guides, Tourism Tips & Destination Insights",
      description: "Read expert travel guides, tourism tips, and destination insights from Bangladesh and around the world. Learn how to plan affordable holidays and discover top attractions."
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Eammu Holidays Travel & Visa Blog",
    "description": "Expert advice and updates on international visa processing and travel tips.",
    "url": "https://eammu.com/blogs",
    "publisher": {
      "@type": "Organization",
      "name": "Eammu Holidays",
      "logo": {
        "@type": "ImageObject",
        "url": "https://eammu.com/eammuicon.jpg"
      }
    }
  };

  return (
    <>
    
      {/* Next.js Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <main>
        {/* --- Blog Hero Section with Automatic Carousel --- */}
        <section className="relative min-h-[60vh] flex items-center justify-center py-20 px-4 overflow-hidden">
          
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHero}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={heroSlides[currentHero].image} 
                  alt={heroSlides[currentHero].title}
                  fill
                  priority
                  className="object-cover scale-105"
                />
                
                <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/70 via-transparent to-black/40 z-10"></div>

                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="max-w-7xl mx-auto text-center space-y-6 px-4"
                  >
                    <span className="inline-block px-5 py-2 bg-[#005a31] text-white rounded-full text-xs font-bold tracking-widest uppercase shadow-xl">
                      {heroSlides[currentHero].badge}
                    </span>

                    <h1 className="text-3xl md:text-6xl font-extrabold text-white drop-shadow-2xl">
                      {heroSlides[currentHero].title}
                    </h1>

                    <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full shadow-lg"></div>

                    <p className="text-white font-medium max-w-4xl mx-auto text-lg md:text-xl drop-shadow-lg leading-relaxed">
                      {heroSlides[currentHero].description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Dots */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
            {heroSlides.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentHero(i)}
                className={`h-2 rounded-full transition-all duration-500 shadow-sm ${
                  i === currentHero ? 'w-12 bg-green-500' : 'w-3 bg-white/50 hover:bg-white'
                }`} 
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </section>

        <div className="px-4 md:px-6 lg:px-8 container mx-auto">

          {/* --- Section 1: Dynamic Blogger Posts --- */}
          <section className="py-12">
            <BlogSection />
          </section>

          {/* FAQ Section */}
          <section className="mt-16 bg-[#f4fdf7] rounded-[2.5rem] p-8 md:p-16 border border-green-100 shadow-sm">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#005a31]">Expert Travel Guidelines</h2>
              <p className="mt-4 text-gray-600 text-lg">Trusted answers from our global visa specialists.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogFaqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-green-50 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-start">
                    <span className="bg-[#005a31] text-white w-7 h-7 rounded-full flex items-center justify-center mr-3 shrink-0 text-xs">Q</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed border-l-4 border-green-500 pl-5 ml-3.5 italic">{faq.a}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-14 text-center">
               <a 
                 href="https://wa.me/8801631312524" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block bg-[#005a31] text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-green-100 hover:bg-green-900 transition-all hover:-translate-y-1"
               >
                 Get 1-on-1 Consultation
               </a>
            </div>
          </section>

          {/* Video Shorts Section */}
          <section className="py-24">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#005a31] text-center">Holiday Packages & Tourist Visa</h2>
              <div className="w-20 h-1 bg-green-500 mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {shorts.map((video) => (
                <div key={video.id} className="group relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[9/16] bg-black border-4 border-white">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=0&mute=1&loop=1&playlist=${video.id}`}
                    title={video.title}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Blogs;