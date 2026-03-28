"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { 
  Code2, Smartphone, Globe, ShoppingBag, 
  ArrowUpRight, CheckCircle2, Zap, ShieldCheck 
} from "lucide-react";

// --- Data ---
const services = [
  { title: "Web Development", desc: "Next.js 14 architectures built for elite performance.", price: "999 AED", icon: <Code2 />, tag: "Next.js" },
  { title: "App Solutions", desc: "Native iOS & Android experiences with high-fidelity UI.", price: "Starts @ 999", icon: <Smartphone />, tag: "Mobile" },
  { title: "SEO Strategy", desc: "Dominate search rankings and capture organic leads.", price: "999 AED", icon: <Globe />, tag: "Growth" },
  { title: "E-Commerce", desc: "Scalable stores with high-conversion checkout tech.", price: "999 AED", icon: <ShoppingBag />, tag: "Sales" },
];

// --- Sub-Component: 3D Animated Card (Isolated Props) ---
const Premium3DCard = ({ service }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for high-end feel
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className="relative group h-[420px] w-full rounded-[2.5rem] bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl transition-all duration-500 hover:shadow-green-500/10"
    >
      <div style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }} className="absolute inset-0 p-8 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-green-500 to-yellow-400 flex items-center justify-center text-white shadow-lg">
              {React.cloneElement(service.icon, { size: 28 })}
            </div>
            <span className="bg-white/90 text-green-700 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm border border-green-100">
              {service.tag}
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tighter">{service.title}</h3>
          <p className="text-slate-600 text-sm font-medium leading-relaxed">{service.desc}</p>
        </div>
        <div className="flex items-center justify-between pt-5 border-t border-green-500/10">
          <div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Premium Plan</p>
            <p className="text-xl font-black text-slate-900">{service.price}</p>
          </div>
          <button className="h-12 w-12 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-green-600 transition-colors">
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Page Component ---
export default function AgencyLanding() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      
      {/* 1. BACKGROUND LAYER (Isolated to prevent affecting other components) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Green Blob */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-green-200/40 blur-[120px] rounded-full"
        />
        {/* Animated Yellow Blob */}
        <motion.div 
          animate={{ x: [0, -80, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-yellow-200/30 blur-[120px] rounded-full"
        />
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-10 w-full">
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 border border-green-100 px-5 py-2 rounded-full mb-8 shadow-sm">
              <Zap size={14} className="text-yellow-500 fill-yellow-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-green-700">Premier Digital Agency</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.85] text-slate-900 mb-8">
              Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-yellow-500 to-green-600 bg-[length:200%_auto] animate-gradient-x">
                 Eammu Solutions.
              </span>
            </h1>
            
            <p className="max-w-xl mx-auto text-lg text-slate-600 font-medium mb-10">
              High-end digital craftsmanship for brands that demand perfection. 
              Starting from <span className="text-green-600 font-black">999 AED</span>.
            </p>

            <div className="flex justify-center gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-2xl hover:bg-green-600 transition-all">Start Project</button>
              <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold shadow-sm">Our Work</button>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => <Premium3DCard key={i} service={s} />)}
          </div>
        </section>

      </div>

      {/* 3. Global Styles (Copy into your globals.css or keep here) */}
      <style jsx global>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </main>
  );
}