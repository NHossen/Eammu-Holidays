"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// --- DATA ---
const domesticTours = [
  { id: 1, name: "Cox's Bazar Beach Tour", description: "Relax at the longest natural sea beach in the world.", image: "https://images.unsplash.com/photo-1665651147145-664ebda525e7?fm=jpg&q=60&w=3000" },
  { id: 2, name: "Sajek Valley Tour", description: "Explore the serene hills and tribal culture of Sajek.", image: "https://www.tourgroupbd.com/upload/event/1658569515_event.jpg" },
  { id: 3, name: "Saint Martin’s Island", description: "Visit the beautiful coral island in the Bay of Bengal.", image: "https://media.istockphoto.com/id/474259514/photo/boat-on-the-tropical-beach.jpg?s=612x612&w=0&k=20&c=1ersoGRQdPK6WLy498-QF33Bvi04VK__1G8IoufvR9E=" },
  { id: 4, name: "Sundarbans Mangrove Forest", description: "Discover the world’s largest mangrove forest and Royal Bengal Tigers.", image: "https://dialogue.earth/content/uploads/2023/04/Spotted-deer-in-Bangladesh_Alamy_P98FYF-scaled.jpg" },
  { id: 5, name: "Rangamati Lake Tour", description: "Enjoy boating and natural beauty at the Kaptai Lake.", image: "https://www.thefinancetoday.net/uploads/shares/Rangamati_hanging_Bridge-2019-12-24-12-47-02.jpg" },
  { id: 6, name: "Dhaka City Tour", description: "Explore historic and modern attractions of Bangladesh’s capital.", image: "https://www.pelago.com/img/products/BD-Bangladesh/full-day-dhaka-city-tour-/bd27718c-6e89-4fb7-aec2-119456a9dc4e_full-day-dhaka-city-tour-.jpg" },
  { id: 7, name: "Srimangal Tea Garden Tour", description: "Visit lush tea gardens and enjoy peaceful nature.", image: "https://pathfriend-bd.com/wp-content/uploads/2021/01/Sreemangal-Tea-Estate-and-Museum.gif" },
  { id: 8, name: "Kuakata Sea Beach", description: "Witness both sunrise and sunset over the sea.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/17/9e/7d/kuakata-beach.jpg?w=800" },
  { id: 9, name: "Paharpur Buddhist Monastery", description: "Explore ancient archaeological site and UNESCO heritage.", image: "https://koryogroup.com/uploads/blog/1635/original-Paharpur_Buddhist_Monastery.jpg?1736904759" },
  { id: 10, name: "Mahasthangarh Archaeological Site", description: "Visit one of the oldest archaeological sites in Bangladesh.", image: "https://travel.discoverybangladesh.com/images/mohasthangar-musume.jpg" },
  { id: 11, name: "Jaflong Hill Tour", description: "Enjoy scenic hills and river views in Sylhet.", image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?q=80&w=2000" },
  { id: 12, name: "Lalakhal Waterfall & Tea Garden", description: "Discover crystal clear blue water and tea plantations.", image: "https://sylhettouristguide.com/assets/image/place/lalakhal/finger.jpg" }
];

const internationalTours = [
  { id: 1, name: "Dubai City Tour", description: "Experience the luxury and futuristic skyline of Dubai.", image: "https://cdn-imgix.headout.com/media/images/ec59e7719a396a4519efc6edcf9d2d41-Museum%20of%20the%20Future%20Dubai%20Tickets%201.jpg" },
  { id: 2, name: "Malaysia Cultural Tour", description: "Explore Malaysia’s rich culture and natural beauty.", image: "https://heritagetours.co/wp-content/uploads/2020/06/2-2.jpg" },
  { id: 3, name: "Singapore City Highlights", description: "Visit Marina Bay Sands, Gardens by the Bay, and more.", image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/b3/2d/e2.jpg" },
  { id: 4, name: "Thailand Beach Getaway", description: "Relax on pristine beaches and enjoy vibrant nightlife.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROFQFZx4d9Qqu7gn_yr544ZbTC3vdZYUBIkw&s" },
  { id: 5, name: "Japan Cherry Blossom Tour", description: "Experience Japan’s famous sakura season and culture.", image: "https://assets.tripsmiths.com/images/default/523234-shutterstock-1513825088.jpg" },
  { id: 6, name: "Turkey Istanbul Experience", description: "Discover the blend of Europe and Asia in Istanbul.", image: "https://www.tooistanbul.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-15-at-16.19.22.png" },
  { id: 7, name: "Switzerland Alpine Tour", description: "Explore stunning mountain landscapes and ski resorts.", image: "https://t4.ftcdn.net/jpg/02/81/14/83/360_F_281148366_Uw03PoKAGUZIAWecL5Op35YPMa7os2uC.jpg" },
  { id: 8, name: "France Paris Tour", description: "Visit the Eiffel Tower, Louvre, and romantic city sights.", image: "https://www.royalcaribbean.com/media-assets/pmc/content/dam/shore-x/paris-le-havre-leh/lh17-paris-sightseeing-without-lunch/stock-photo-skyline-of-paris-with-eiffel-tower-at-sunset-in-paris-france-eiffel-tower-is-one-of-the-most-752725282.jpg" },
  { id: 9, name: "United Kingdom London Highlights", description: "See Buckingham Palace, Big Ben, and historic landmarks.", image: "https://www.airpano.com/files/london-video_big.jpg" },
  { id: 10, name: "Maldives Beach Paradise", description: "Relax in luxurious overwater bungalows in Maldives.", image: "https://i0.wp.com/jyoshankar.com/wp-content/uploads/2020/02/jyoshankar_travelblogger_maldives_hideawaybeachresortandspa_luxuryresorts_9.jpg" },
  { id: 11, name: "Italy Rome and Venice", description: "Explore ancient ruins and romantic canals.", image: "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=" },
  { id: 12, name: "Greece Santorini Tour", description: "Visit iconic whitewashed buildings and beautiful sunsets.", image: "https://lp-cms-production.imgix.net/2024-06/iStock-166471469.jpg" }
];

const heroSlides = [
  { id: 1, image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070' }, 
  { id: 2, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070' },
  { id: 3, image: 'https://c.regencyholidays.com/packages/fd323071-0b2c-4078-ab0f-5ba24d78adbe/original/01d776cf-c1c3-4ba0-b92d-45bc087166d0.webp' },
];

const TourPackages = () => {
  const ITEMS_PER_PAGE = 3;
  
  // State
  const [currentHero, setCurrentHero] = useState(0);
  const [intlPage, setIntlPage] = useState(1);
  const [domPage, setDomPage] = useState(1);

  // Refs
  const intlRef = useRef(null);
  const domRef = useRef(null);

  // Auto-play Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getPaginatedData = (data, currentPage) => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const totalIntlPages = Math.ceil(internationalTours.length / ITEMS_PER_PAGE);
  const totalDomPages = Math.ceil(domesticTours.length / ITEMS_PER_PAGE);

  // --- Sub-Components ---
  const TourCard = ({ tour }) => (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className="relative overflow-hidden h-64">
        <img
          src={tour.image}
          alt={tour.name}
          className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-[#005a31] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            Trending
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#005a31] transition-colors">
          {tour.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
          {tour.description}
        </p>
        <a
          href={`https://wa.me/8801631312524?text=Hello%2C%20I%20would%20like%20to%20book%20a%20${encodeURIComponent(tour.name)}%20tour.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#005a31] text-white font-semibold py-3 rounded-xl hover:bg-[#003e24] transition-all text-center flex items-center justify-center gap-2"
        >
          Book via WhatsApp
        </a>
      </div>
    </div>
  );

  const Pagination = ({ current, total, setPage }) => (
    <div className="flex justify-center items-center gap-2 mt-10">
      <button 
        disabled={current === 1}
        onClick={() => setPage(current - 1)}
        className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-30 hover:bg-gray-50 transition"
      >
        Prev
      </button>
      {[...Array(total)].map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`w-10 h-10 rounded-lg font-medium transition ${
            current === i + 1 ? "bg-[#005a31] text-white" : "border border-gray-300 hover:bg-gray-50"
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button 
        disabled={current === total}
        onClick={() => setPage(current + 1)}
        className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-30 hover:bg-gray-50 transition"
      >
        Next
      </button>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* --- MODERN HERO SECTION --- */}
      <div className="relative min-h-[60vh] flex items-center justify-center py-24 lg:py-32 px-4 overflow-hidden">
        
        {/* Background Carousel Layer */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHero}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img 
                src={heroSlides[currentHero].image} 
                alt="Travel Hero" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>
        
        {/* Content Layer */}
        <div className="relative z-20 container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Explore the World <span className="text-green-400">With Us</span>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
            From the pristine beaches of Cox's Bazar to the historic streets of Paris, find your next adventure here.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => scrollToSection(intlRef)}
              className="bg-white text-[#005a31] px-8 py-4 rounded-full font-bold shadow-xl hover:bg-green-50 transition transform hover:-translate-y-1 active:scale-95"
            >
              🌍 International Tours
            </button>
            <button 
              onClick={() => scrollToSection(domRef)}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold backdrop-blur-sm hover:bg-white/10 transition transform hover:-translate-y-1 active:scale-95"
            >
              🇧🇩 Domestic Tours
            </button>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 rounded-full transition-all duration-500 ${
                i === currentHero ? 'w-8 bg-green-400' : 'w-2 bg-white/50'
              }`} 
            />
          ))}
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-4 mt-16">
        
        {/* International Section */}
        <section ref={intlRef} className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-gray-200 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">International Getaways</h2>
              <p className="text-gray-500 mt-1">Global destinations tailored for you</p>
            </div>
            <span className="text-sm font-semibold text-[#005a31] mt-2 md:mt-0">
              Showing {getPaginatedData(internationalTours, intlPage).length} of {internationalTours.length} Deals
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {getPaginatedData(internationalTours, intlPage).map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <Pagination current={intlPage} total={totalIntlPages} setPage={setIntlPage} />
        </section>

        {/* Domestic Section */}
        <section ref={domRef} className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-gray-200 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Discover Bangladesh</h2>
              <p className="text-gray-500 mt-1">Explore the hidden gems of our home</p>
            </div>
            <span className="text-sm font-semibold text-[#005a31] mt-2 md:mt-0">
              Showing {getPaginatedData(domesticTours, domPage).length} of {domesticTours.length} Deals
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {getPaginatedData(domesticTours, domPage).map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <Pagination current={domPage} total={totalDomPages} setPage={setDomPage} />
        </section>

        {/* Bottom CTA */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 text-center shadow-sm">
          <div className="inline-block p-3 bg-green-50 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-[#005a31]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Future of Booking is Coming</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            We're building an AI-powered <strong>Tour Search API</strong>. Soon, you'll be able to filter by budget, purpose, and instant availability across any country in the world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-50 transition"
            >
              Back to Home
            </Link>
            <a
              href="https://wa.me/8801631312524"
              className="px-8 py-3 rounded-xl bg-[#005a31] text-white font-semibold hover:shadow-lg transition"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackages;