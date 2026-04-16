"use client";
import React from 'react';
import { motion } from 'framer-motion';


const EammuFashion = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const categories = [
    { title: "Men's Heritage", img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/9/AqOsZhUa_04de791acf874a8fb4e99f1c018d5835.jpg", desc: "Panjabi, Kabli & Formals" },
    { title: "Women's Elegance", img: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/29407926/2024/5/7/fe50718e-3bfb-4068-9f29-457b2441f4791715093101854Sarees1.jpg", desc: "Festive, Hijab & Kurtis" },
    { title: "New Generation", img: "https://assets.vogue.in/photos/5f214a9d9ffca08d18483816/master/w_1600%2Cc_limit/Neha%2520Mehra%25201.jpg", desc: "Kids & Youth Collections" }
  ];

  return (
    <div className="bg-white text-[#1a1a1a] overflow-hidden">

      {/* --- Luxury Hero Section --- */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover opacity-80" 
            alt="Fashion Banner" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 container mx-auto px-6 text-white"
        >
          <span className="uppercase tracking-[0.4em] text-sm mb-4 block">Coming in 2026</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-tight">
            Eammu <br /> <span className="italic font-light">Fashion.</span>
          </h1>
          <p className="max-w-md text-lg text-gray-200 mb-8 font-light">
            Defining the new era of Bangladeshi elegance. Blending local craftsmanship with global trends.
          </p>
       <a href="/eammu-fashion/eammu-store">
  <button className="border-2 border-white px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-orange-500/20 active:scale-95 cursor-pointer">
    Explore Store
  </button>
</a>
        </motion.div>
      </section>

      {/* --- Brand Story --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-green-700 mb-4">Our Story</h2>
            <h3 className="text-4xl font-serif mb-6">Redefining Style Across Borders</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Eammu Fashion is the latest vertical under Eammu Group, dedicated to delivering premium fashion for men, women, and youth. We believe style should be elegant, comfortable, and accessible.
            </p>
            <div className="h-[1px] w-20 bg-green-700 mb-6"></div>
            <p className="text-gray-500 italic italic">"Blending tradition with modern innovation."</p>
          </motion.div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070" 
              className="rounded-2xl shadow-2xl" 
              alt="Store" 
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-lg hidden md:block">
              <p className="text-3xl font-serif text-green-800">2026</p>
              <p className="text-xs uppercase tracking-widest">Flagship Launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Visual Collection Showcase --- */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif">The Collection</h2>
            <p className="text-gray-500 mt-4 uppercase text-xs tracking-[0.2em]">Crafted for every generation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {categories.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl mb-6 aspect-[3/4]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Where You'll Find Us (Modern List) --- */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-16">Exclusive Accessibility</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="text-4xl">🛍️</div>
            <h4 className="font-bold uppercase text-xs tracking-widest">Flagship Store</h4>
            <p className="text-gray-500 text-sm">Cumilla Cantonment<br/>Coming 2026</p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl">🌐</div>
            <h4 className="font-bold uppercase text-xs tracking-widest">Online Boutique</h4>
            <p className="text-gray-500 text-sm">Nationwide Delivery<br/>Active Soon</p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl">📱</div>
            <h4 className="font-bold uppercase text-xs tracking-widest">Mobile Experience</h4>
            <p className="text-gray-500 text-sm">iOS & Android App<br/>Launch Ready</p>
          </div>
        </div>
      </section>

      {/* --- Call to Action (Newsletter) --- */}
      <section className="bg-green-950 py-24 px-6 text-center text-white">
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif mb-6">Join the Inner Circle</h2>
          <p className="text-green-100/70 mb-10 font-light">
            Be the first to witness the launch of our Eid and Festive collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="bg-white/10 border border-white/20 px-6 py-4 rounded-full text-white w-full sm:w-80 outline-none focus:bg-white/20 transition-all" 
            />
            <button className="bg-white text-green-950 px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-green-100 transition-all">
              Notify Me
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- Simple Social Icons --- */}
      <footer className="py-12 border-t border-gray-100 text-center">
        <div className="flex justify-center gap-10 mb-6">
          <a href="https://www.facebook.com/eammufashion/" className="text-gray-400 hover:text-green-700 transition-colors uppercase text-[10px] font-bold tracking-widest">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-green-700 transition-colors uppercase text-[10px] font-bold tracking-widest">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-green-700 transition-colors uppercase text-[10px] font-bold tracking-widest">TikTok</a>
        </div>
        <p className="text-[10px] text-gray-300 uppercase tracking-widest">© 2025 Eammu Fashion. Crafted for Distinction.</p>
      </footer>
    </div>
  );
};

export default EammuFashion;