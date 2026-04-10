"use client";
import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft } from "react-icons/fa";
// Adding missing icons from Lucide for the Hero section
import { Star, PlayCircle } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";
import CustomerTestimonialSection from './CustomerTestimonialSection';


const reviews = [
  { name: "Md. Rahim Uddin", rating: 5, review: "Excellent service! Thanks to Eammu, I got my visa approved smoothly." },
  { name: "Fatima Begum", rating: 4.5, review: "Very supportive staff and quick processing. Highly recommended Eammu." },
  { name: "Abdul Karim", rating: 5, review: "Professional and reliable. Eammu made my immigration process hassle-free." },
  { name: "Ayesha Sultana", rating: 4, review: "Good guidance and support throughout my student visa application with Eammu." },
  { name: "Jamal Hossain", rating: 5, review: "Fast and clear communication. Great experience with Eammu Immigration Services." },
  { name: "Nasima Khatun", rating: 4.5, review: "Friendly staff and very helpful. Thank you, Eammu, for the support!" },
  { name: "Sajjad Ali", rating: 5, review: "Highly professional team with excellent knowledge and service from Eammu." },
  { name: "Monira Akter", rating: 4, review: "Good service but a bit slow on some processes. Overall satisfied with Eammu." },
  { name: "Shakil Ahmed", rating: 5, review: "Got my work visa approved quickly thanks to the help from Eammu." },
  { name: "Nusrat Jahan", rating: 4.5, review: "Helpful and patient staff. Eammu answered all my questions clearly." },
  { name: "Tariq Mahmud", rating: 5, review: "Trusted company. I highly recommend Eammu for visa services." },
  { name: "Salma Parvin", rating: 4, review: "Good service but wish response time was faster. Still very helpful." },
];

const heroSlides = [
  {
    id: 1,
    image: '/eammu_holidays_bg.webp',
    title: "Thousands of Dreams Realized",
    subtitle: "From student visas to family reunions, see how Eammu Holidays makes it happen.",
    cta: "Watch Success Stories"
  },
  {
    id: 2,
    image: '/flight_eammu.webp',
    title: "Your Trust, Our Greatest Reward",
    subtitle: "Consistently rated 4.9/5 by travelers across Bangladesh.",
    cta: "Read Reviews"
  }
];

const renderStars = (rating) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  for (let i = 0; i < full; i++) stars.push(<FaStar key={`f-${i}`} />);
  if (half) stars.push(<FaStarHalfAlt key="h" />);
  while (stars.length < 5) stars.push(<FaRegStar key={`e-${stars.length}`} />);
  return stars;
};

const Testimonials = () => {
  // FIXED: Removed duplicate declaration. Using dynamic calculation based on reviews.
  const avgRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  const [currentHero, setCurrentHero] = useState(0);

  // --- Hero Logic ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="overflow-hidden pb-16">
    
      {/* 1. HERO CAROUSEL SECTION */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHero}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img 
              src={heroSlides[currentHero].image} 
              className="w-full h-full object-cover opacity-60" 
              alt="Hero"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#005a31]/80 via-transparent to-black/40" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="max-w-4xl"
              >
                <div className="flex justify-center gap-1 mb-6 text-yellow-400">
                  {/* Using Lucide Star here to match the Hero style */}
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                </div>
                <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight">
                  {heroSlides[currentHero].title}
                </h1>
                <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                  {heroSlides[currentHero].subtitle}
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold shadow-2xl transition-all flex items-center gap-2 mx-auto">
                  <PlayCircle size={20} /> {heroSlides[currentHero].cta}
                </button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Hero Progress Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-500 ${i === currentHero ? 'w-12 bg-orange-500' : 'w-4 bg-white/30'}`} 
            />
          ))}
        </div>
      </section>

      {/* 2. STATS BAR */}
      <div className="bg-white py-10 border-b border-gray-100 mb-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Happy Clients", val: "10k+" },
            { label: "Visa Success", val: "98%" },
            { label: "YouTube Subs", val: "50k+" },
            { label: "Google Rating", val: "4.9/5" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-black text-[#005a31]">{stat.val}</p>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Modern Infinite Marquee Carousel */}
      <div className="relative flex overflow-hidden group py-10">
        <motion.div 
          className="flex gap-6 pr-6"
          animate={{ x: [0, -1800] }} 
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }} // Smoother way to handle pause
        >
          {/* We render the reviews twice for seamless looping */}
          {[...reviews, ...reviews].map((r, i) => (
            <article
              key={i}
              className="relative w-[350px] md:w-[450px] aspect-[9/5] bg-white rounded-3xl border border-gray-100 p-8 shadow-xl flex flex-col justify-between group/card hover:border-[#005a31] transition-colors"
            >
              <FaQuoteLeft className="absolute top-6 right-8 text-gray-100 text-6xl group-hover/card:text-green-50 transition-colors" />
              
              <div className="relative z-10">
                <div className="flex text-yellow-400 mb-4 text-sm">
                  {renderStars(r.rating)}
                </div>
                <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed italic">
                  “{r.review}”
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#005a31] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg">{r.name}</h3>
                  <p className="text-xs text-orange-600 font-bold uppercase tracking-wider">Verified Traveler</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>

      {/* 4. Call to Action Sections */}
      <div className="container mx-auto px-4">
        <section className="mt-20">
          <CustomerTestimonialSection />
          <div className="text-center mt-8">
            <a href="https://youtube.com/@Eammutour" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-4 transition-all">
              Watch Success Stories on YouTube <span className="text-xl">→</span>
            </a>
          </div>
        </section>

        <div className="text-center mt-16">
          <a href="https://wa.me/8801631312524" className="inline-flex items-center gap-3 bg-[#005a31] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-black hover:shadow-2xl transition-all active:scale-95">
             Talk to Our Visa Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;