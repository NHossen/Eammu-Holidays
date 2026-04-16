"use client"
import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle, 
  Globe, 
  Factory, 
  Truck, 
  ShieldCheck, 
  Settings, 
  Recycle, 
  Layers, 
  Award, 
  Users,
  ArrowUpRight,
  Plus,
  Minus,
  Zap,
  ChevronRight
} from "lucide-react";

const EammuTextile = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
      
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-white">
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
        />
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 px-4 py-2 rounded-full shadow-sm">
              <Zap size={14} className="text-orange-600 animate-pulse" />
              <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] text-orange-700">Next-Gen Manufacturing</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-[#004d2c] leading-[0.95] tracking-tighter">
              Eammu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Textile.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Redefining global apparel standards through sustainable fabric engineering and ethical garment production in Bangladesh.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="https://wa.me/8801631312524" 
                className="w-full sm:w-auto bg-[#005a31] text-white px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-orange-600 transition-all hover:shadow-2xl active:scale-95"
              >
                Start Production <ArrowUpRight size={20} />
              </a>
              <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100">
                <Globe size={20} className="text-[#005a31]" />
                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Global Export Ready</span>
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0 px-4">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white aspect-[4/5] lg:aspect-auto">
               <img
                src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1200&q=80"
                alt="Industrial Textile Loom"
                className="w-full h-full lg:h-[650px] object-cover hover:scale-110 transition-transform duration-[2s]"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -left-6 lg:-left-12 z-20 bg-[#004d2c] text-white p-8 rounded-[2.5rem] shadow-2xl hidden sm:block">
              <p className="text-4xl font-black text-orange-400">99.8%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Quality Accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES BENTO GRID --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-black text-[#005a31] uppercase tracking-tight mb-6 leading-none">Core Industrial <br /> Capabilities</h2>
            <p className="text-slate-500 text-lg font-medium">Scalable solutions for global retailers and private labels.</p>
          </div>
          <div className="h-[2px] w-full md:w-32 bg-orange-500 rounded-full mb-2" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <CapabilityCard 
            icon={<Layers />} 
            title="Fabric Tech" 
            desc="Specialized weaving for Denim, Viscose, and Technical Knits." 
            tag="Raw Material"
          />
          <CapabilityCard 
            icon={<Settings />} 
            title="Garment Ops" 
            desc="High-precision assembly for Activewear and Export Panjabis." 
            tag="Manufacturing"
          />
          <CapabilityCard 
            icon={<Truck />} 
            title="Logistics" 
            desc="End-to-end global supply chain and port clearance support." 
            tag="Supply Chain"
          />
          <CapabilityCard 
            icon={<Award />} 
            title="OEM Studio" 
            desc="White-label production with organic dyeing and HD printing." 
            tag="Branding"
          />
          <CapabilityCard 
            icon={<Recycle />} 
            title="Eco-Sync" 
            desc="Zero-waste water filtration and carbon-offset production." 
            tag="Sustainability"
          />
          <div className="bg-[#004d2c] p-10 rounded-[3rem] text-white flex flex-col justify-center relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
               <Factory size={150} />
             </div>
             <h3 className="text-2xl font-black mb-4 relative z-10">Bulk & Scale</h3>
             <p className="text-green-100/70 text-sm mb-6 relative z-10">Massive production volume with no compromise on the Eammu 4-point QC check.</p>
             <ChevronRight className="text-orange-400 group-hover:translate-x-4 transition-transform" />
          </div>
        </div>
      </section>

      {/* --- QUALITY STRIP --- */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">Certified Quality <br /> <span className="text-orange-500">Global Standards</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <QualityItem text="GOTS Certified Organic" />
              <QualityItem text="OEKO-TEX Standard 100" />
              <QualityItem text="ISO 9001 Compliance" />
              <QualityItem text="Fair Trade Certified" />
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
              <ShieldCheck className="text-orange-500 mb-4" size={40} />
              <p className="text-slate-300 italic font-medium leading-relaxed">
                "Our 4-point inspection system ensures that every stitch leaving our facility meets the rigorous demands of the international fashion market."
              </p>
            </div>
          </div>
          <div className="relative">
             <img src="https://images.unsplash.com/photo-1524292332627-7e9410052580?auto=format&fit=crop&w=800&q=80" alt="Quality Check" className="rounded-[3rem] shadow-2xl opacity-80 h-[500px] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-[#005a31] mb-6 uppercase tracking-tighter">Production FAQ</h2>
          <div className="h-1.5 w-20 bg-orange-500 mx-auto rounded-full" />
        </div>
        
        <div className="space-y-4">
          <FAQItem 
            question="What is your minimum order quantity (MOQ)?" 
            answer="Our standard MOQ varies by product type. For basic knitted garments, it typically starts at 500 pieces per style, while specialized woven fabrics may have different requirements. Please contact our team for specific quotes."
          />
          <FAQItem 
            question="Do you provide samples before bulk production?" 
            answer="Yes, we offer proto-sampling and pre-production samples (PPS) to ensure all design specifications, fabric weights, and color matches are perfect before moving to the main production line."
          />
          <FAQItem 
            question="How do you handle international shipping?" 
            answer="We offer FOB (Free On Board) and CIF (Cost, Insurance, and Freight) shipping options. Our logistics team handles port clearance in Bangladesh and coordinates with your freight forwarder for a seamless delivery."
          />
          <FAQItem 
            question="What are your sustainability certifications?" 
            answer="We are proud to be GOTS and OEKO-TEX compliant. We utilize recycled water systems and organic dyeing processes to minimize our environmental footprint while maintaining high-end export quality."
          />
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-[#005a31] rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl border-t-8 border-orange-500">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight tracking-tight">Scale Your Vision <br /> Globally</h2>
          <p className="text-xl text-green-50 mb-12 max-w-2xl mx-auto opacity-80 font-medium">
            Join the ranks of premium global brands partnering with Eammu Textile for ethical, high-quality, and scalable apparel solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://wa.me/8801631312524" className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black shadow-2xl hover:bg-orange-500 hover:text-white transition-all active:scale-95 flex items-center justify-center gap-3">
              Consult a Production Expert
            </a>
            <Link href="/" className="px-12 py-5 rounded-2xl font-black border-2 border-white/20 hover:bg-white/10 transition-colors">
              Company Profile
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sub-components
const CapabilityCard = ({ icon, title, desc, tag }) => (
  <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
    <div className="flex justify-between items-start mb-8">
      <div className="w-16 h-16 bg-slate-50 text-[#005a31] rounded-2xl flex items-center justify-center group-hover:bg-[#005a31] group-hover:text-white transition-colors duration-300">
        {React.cloneElement(icon, { size: 32 })}
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full">{tag}</span>
    </div>
    <h3 className="text-2xl font-black text-slate-800 mb-4">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed font-medium">{desc}</p>
  </div>
);

const QualityItem = ({ text }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
      <CheckCircle size={18} className="text-orange-500 group-hover:text-white" />
    </div>
    <span className="text-white font-bold tracking-wide">{text}</span>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-3xl bg-white overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
      >
        <span className="font-black text-slate-800 lg:text-lg tracking-tight">{question}</span>
        {isOpen ? <Minus className="text-orange-500" /> : <Plus className="text-[#005a31]" />}
      </button>
      {isOpen && (
        <div className="px-8 pb-8 text-slate-600 leading-relaxed font-medium animate-in fade-in slide-in-from-top-4">
          {answer}
        </div>
      )}
    </div>
  );
};

export default EammuTextile;