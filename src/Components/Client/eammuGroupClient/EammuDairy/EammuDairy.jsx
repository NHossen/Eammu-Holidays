"use client";

import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Truck, ShoppingBasket, Droplets, Leaf, PhoneCall, ArrowRight, MessageCircle, Clock } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const EammuDairy = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 1. CAROUSEL DATA (Unique images and text)
  const slides = [
    {
      image: "https://static.vecteezy.com/system/resources/previews/047/547/980/non_2x/dairy-products-horizontal-banner-with-nature-landscape-summer-rural-landscape-with-set-of-milk-products-from-farm-and-herd-cows-design-elements-for-infographics-websites-and-print-media-vector.jpg",
      badge: "100% Organic & Farm Fresh",
      title: "Pure Dairy from Cumilla Fields",
      desc: "Daily collected, non-pasteurized pure milk with zero additives or preservatives delivered fresh to your door."
    },
    {
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2000&auto=format&fit=crop",
      badge: "Healthy & Nutritious",
      title: "Free-range Poultry & Eggs",
      desc: "Rich in protein and Omega-3, our eggs come from happy, open-grazing chickens raised on natural grains."
    },
    {
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2000&auto=format&fit=crop",
      badge: "Chemical-Free Lifestyle",
      title: "Your Family's Health, Our Priority",
      desc: "From our lush green fields to your dining table — we deliver the chemical-free nutrition you deserve."
    }
  ];

  // 2. AUTO-SLIDE LOGIC (5 Seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* ✅ SEO META (Unchanged as requested) */}
   

      {/* 🌿 RESPONSIVE HERO SECTION WITH CAROUSEL */}
      <section className="relative h-[70vh] sm:h-[85vh] lg:h-[70vh] flex items-center justify-center overflow-hidden bg-green-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={slides[currentSlide].image} 
              alt="Eammu Dairy Farm" 
              className="w-full h-full object-cover opacity-40 sm:opacity-50" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-transparent to-green-900"></div>
          </motion.div>
        </AnimatePresence>

        <div className="container mx-auto px-4 sm:px-6 relative z-20 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <span className="bg-orange-500 text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-widest mb-4 sm:mb-6 inline-block shadow-lg">
                {slides[currentSlide].badge}
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-tight">
                {slides[currentSlide].title.split('Dairy')[0]} 
                <span className="text-orange-400">Dairy & Poultry</span> 🌿
              </h1>
              <p className="text-white/90 max-w-2xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 sm:mb-10 font-medium px-4">
                {slides[currentSlide].desc}
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-6 sm:px-0">
                <a
                  href="https://wa.me/8801631312524"
                  className="w-full sm:w-auto bg-white text-green-900 px-8 py-4 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-3 hover:bg-orange-500 hover:text-white transition-all shadow-xl"
                >
                  <MessageCircle size={22} /> Order Now
                </a>
                <div className="flex items-center gap-3 text-white font-bold py-2 sm:py-0 sm:px-8">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                     <Truck size={18} />
                  </div>
                  <span className="text-sm sm:text-base">Home Delivery</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

       
        </div>
      </section>

      {/* 🥛 WHAT WE OFFER - RESPONSIVE GRID */}
      <section className="py-16 sm:py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#005a31] uppercase mb-4 tracking-tight">What We Offer</h2>
            <div className="w-16 sm:w-20 h-1.5 bg-orange-500 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div className="grid gap-4 sm:gap-6 order-2 lg:order-1">
              <OfferCard 
                icon={<Droplets className="text-blue-500" />} 
                title="Organic Cow Milk" 
                desc="Daily collected, non-pasteurized pure milk with zero additives or preservatives." 
              />
              <OfferCard 
                icon={<ShoppingBasket className="text-orange-500" />} 
                title="Free-range Eggs" 
                desc="Rich in protein and Omega-3, collected from happy, open-grazing chickens." 
              />
              <OfferCard 
                icon={<Leaf className="text-green-500" />} 
                title="Deshi Poultry Meat" 
                desc="Antibiotic-free local chicken meat, processed with strict hygiene standards." 
              />
              <OfferCard 
                icon={<CheckCircle className="text-purple-500" />} 
                title="Natural Feed Only" 
                desc="Our livestock is raised on grass and organic grains, ensuring natural growth." 
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <img
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/191027931/original/924f102a9334b3b5161fea2ce1c15dddabacb5e0/provide-veterinary-services-poultry-and-dairy-farming-ideas.jpg"
                alt="Dairy and Poultry Products"
                className="rounded-[2rem] sm:rounded-[3rem] shadow-xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover border-4 sm:border-8 border-white"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-orange-500 text-white p-4 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg">
                 <p className="text-xl sm:text-3xl font-bold italic">100%</p>
                 <p className="text-[10px] sm:text-sm font-medium uppercase tracking-widest">Chemical Free</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🌾 OUR FARM STORY */}
      <section className="py-16 sm:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://content.jdmagicbox.com/comp/def_content/dairy-farms/f0ea72cad1-dairy-farms-5-tv2jg.jpg"
                alt="Cumilla Dairy Farm"
                className="rounded-[2rem] sm:rounded-[3rem] shadow-2xl w-full h-[250px] sm:h-[400px] object-cover"
                loading="lazy"
              />
            </motion.div>

            <div className="space-y-6 sm:y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#005a31] uppercase leading-tight">
                Our Farm in Cumilla
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Eammu Dairy & Poultry is deeply rooted in the rural landscapes of **Cumilla**, where clean air, vast green fields, 
                and ethical farming practices come together. We reject factory farming and hormones. 
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-green-50 p-4 sm:p-6 rounded-2xl border-l-4 border-[#005a31]">
                  <p className="text-[#005a31] font-bold text-lg sm:text-xl">Modern Hygiene</p>
                  <p className="text-xs sm:text-sm text-gray-600">Global safety standards</p>
                </div>
                <div className="bg-orange-50 p-4 sm:p-6 rounded-2xl border-l-4 border-orange-500">
                  <p className="text-orange-600 font-bold text-lg sm:text-xl">Zero Hormones</p>
                  <p className="text-xs sm:text-sm text-gray-600">No shortcuts, just nature</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 UPCOMING SERVICES */}
      <section className="py-16 sm:py-20 bg-green-900 text-white rounded-t-[2.5rem] sm:rounded-t-[4rem]">
        <div className="container mx-auto px-4 text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-4 text-orange-400">What’s Coming Next</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">We are expanding our horizons to bring more organic goodness to your doorstep.</p>
        </div>

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="grid gap-4 sm:gap-6">
            <UpcomingItem title="Butter & Ghee Production" desc="Traditional wood-churned pure ghee and cultured butter." />
            <UpcomingItem title="Home Delivery Service" desc="Fresh delivery in Dhaka and Cumilla within hours of collection." />
            <UpcomingItem title="Monthly Subscription" desc="Never run out of milk; automated daily/weekly supply plans." />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://t4.ftcdn.net/jpg/05/48/62/95/360_F_548629586_cDOlrTXotOkYIENXcXBQ1CaGg5W4yK00.jpg"
              alt="Future Dairy Services"
              className="rounded-[2rem] sm:rounded-[3rem] shadow-2xl w-full h-[250px] sm:h-[350px] object-cover border-4 border-white/20"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* 📞 CTA SECTION */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center bg-slate-50 border border-slate-100 p-8 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[4rem] shadow-inner"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#005a31] mb-4 sm:mb-6 uppercase">Ready for Farm Freshness?</h2>
            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-600 mb-8 sm:mb-10">
              Farm-fresh food. Zero compromise. Pure quality.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <a
                href="https://wa.me/8801631312524"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#005a31] text-white px-8 py-4 rounded-full hover:bg-orange-500 hover:scale-105 transition-all duration-300 shadow-xl font-bold"
              >
                <PhoneCall size={20} />
                WhatsApp Order
              </a>

              <Link
                href="/"
                className="w-full sm:w-auto flex items-center justify-center border-2 border-[#005a31] text-[#005a31] px-8 py-4 rounded-full hover:bg-green-100 transition-all font-bold"
              >
                ⬅ Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Floating Button */}
      <a href="https://wa.me/8801631312524" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 md:hidden animate-bounce">
         <MessageCircle size={24} />
      </a>
    </div>
  );
};

// Helper Components
const OfferCard = ({ icon, title, desc }) => (
  <div className="flex gap-4 sm:gap-5 p-5 sm:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
    <div className="bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl h-fit">{icon}</div>
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-[#005a31] mb-1">{title}</h3>
      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const UpcomingItem = ({ title, desc }) => (
  <div className="flex items-center gap-3 sm:gap-4 bg-white/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10">
    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
    <div>
      <h4 className="text-base sm:text-lg font-bold text-orange-400">{title}</h4>
      <p className="text-gray-300 text-xs sm:text-sm">{desc}</p>
    </div>
  </div>
);

export default EammuDairy;