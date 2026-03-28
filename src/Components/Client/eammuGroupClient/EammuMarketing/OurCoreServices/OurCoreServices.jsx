"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Search, 
  Share2, 
  Palette, 
  ShoppingCart, 
  Lock, 
  BarChart3, 
  Rocket,
  Cpu,
  MessageSquare,
  ChevronRight
} from "lucide-react";

const OurCoreServices = () => {
  useEffect(() => {
    document.title = "Digital Marketing Solutions Bangladesh | Marketing and Branding Dhaka by Eammu";
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Core Services Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-[#005a31] uppercase tracking-tighter mb-4"
          >
            Our Core Services
          </motion.h2>
          <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceBox icon={<Code2 />} title="Web Development" desc="Responsive, fast, and SEO-friendly websites tailored to your business." />
          <ServiceBox icon={<Smartphone />} title="App Development" desc="High-performance Android & iOS apps with seamless UX." />
          <ServiceBox icon={<Search />} title="SEO Optimization" desc="Rank higher on Google and attract organic traffic globally." />
          <ServiceBox icon={<Share2 />} title="Social Media" desc="Engaging content and management across all digital platforms." />
          <ServiceBox icon={<Palette />} title="Graphic Design" desc="Creative branding, logos, and visual identity that stand out." />
          <ServiceBox icon={<ShoppingCart />} title="E-commerce" desc="Build your online store with secure payment integrations." />
          <ServiceBox icon={<Lock />} title="Cybersecurity" desc="Protecting your business assets with advanced IT consulting." />
          <ServiceBox icon={<BarChart3 />} title="Digital Strategy" desc="Data-backed growth plans to scale your business ROI." />
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="group overflow-hidden rounded-[2rem] shadow-xl relative h-80">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1470&q=80"
                alt="Website Development"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#005a31]/80 to-transparent flex items-end p-8">
                <h3 className="text-white text-2xl font-bold">Innovation in Web</h3>
              </div>
            </div>
            <div className="group overflow-hidden rounded-[2rem] shadow-xl relative h-80">
              <img
                src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1470&q=80"
                alt="Marketing Strategy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent flex items-end p-8">
                <h3 className="text-white text-2xl font-bold">Strategic Marketing</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision - Coming Soon */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-[#005a31] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -bottom-10 -right-10 opacity-10">
            <Cpu size={300} />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-10 flex items-center gap-3">
              <Rocket className="text-orange-400" /> Coming Soon
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FutureCard icon={<Cpu size={20} />} title="AI Marketing" desc="AI-driven targeted campaigns." />
              <FutureBox icon={<BarChart3 size={20} />} title="Analytics Dashboard" desc="Real-time business insights." />
              <FutureBox icon={<MessageSquare size={20} />} title="Smart Chatbots" desc="24/7 automated customer care." />
              <FutureBox icon={<ChevronRight size={20} />} title="ERP Tools" desc="Custom SME business solutions." />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-tight">
              Want to grow your online presence? <br /> 
              <span className="text-orange-500">Let's build your brand together!</span>
            </p>
          
            <a 
              href="https://wa.me/8801631312524" 
              className="inline-flex items-center gap-3 bg-[#005a31] text-white px-12 py-5 rounded-2xl font-black shadow-2xl hover:bg-orange-500 transition-all hover:-translate-y-1"
            >
              Request a Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Sub-components ---

const ServiceBox = ({ icon, title, desc }) => (
  <div className="group relative p-[2px] rounded-3xl overflow-hidden h-full shadow-sm hover:shadow-xl transition-shadow duration-500">
    {/* PERSISTENT ANIMATED BORDER (Always Visible) */}
    <motion.div
      className="absolute inset-[-150%] z-0"
      style={{
        background: "conic-gradient(from 0deg, #FFFFFF, #4285F4, #FBBC05, #FFFFFF)",
      }}
      animate={{ rotate: [0, 360] }}
      transition={{
        duration: 5, // Speed of rotation
        repeat: Infinity,
        ease: "linear",
      }}
    />

    {/* Card Face (White Mask) */}
    <div className="relative z-10 bg-white p-8 rounded-[calc(1.5rem-2px)] h-full transition-all">
      <div className="bg-slate-50 w-14 h-14 rounded-2xl flex items-center justify-center text-[#005a31] mb-6 group-hover:bg-[#005a31] group-hover:text-white transition-all duration-300">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <h3 className="text-xl font-bold text-[#005a31] mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const FutureBox = ({ icon, title, desc }) => (
  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-colors cursor-default">
    <div className="text-orange-400 mb-4">{icon}</div>
    <h4 className="font-bold mb-2">{title}</h4>
    <p className="text-xs text-green-100/70 leading-relaxed">{desc}</p>
  </div>
);

const FutureCard = ({ icon, title, desc }) => (
  <div className="bg-orange-500 p-6 rounded-2xl shadow-lg border border-orange-400/50 cursor-default">
    <div className="text-white mb-4">{icon}</div>
    <h4 className="font-bold text-white mb-2">{title}</h4>
    <p className="text-xs text-orange-50/80 leading-relaxed">{desc}</p>
  </div>
);

export default OurCoreServices;