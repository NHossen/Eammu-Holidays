"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Globe, 
  Zap, 
  MapPin, 
  ArrowRight, 
  Briefcase, 
  Clock, 
  Upload, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const Careers = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const vacancies = [
    { title: "Immigration Consultant", location: "Cumilla Office", type: "Full-time", category: "Operations", dept: "Visa & Legal" },
    { title: "Visa Application Officer", location: "Remote / Office", type: "Full-time", category: "Operations", dept: "Consular" },
    { title: "Content Creator", location: "Digital Team", type: "Freelance", category: "Marketing", dept: "Creative" },
    { title: "Digital Marketing Executive", location: "Cumilla Office", type: "Full-time", category: "Marketing", dept: "Growth" },
    { title: "Customer Support Agent", location: "Remote", type: "Part-time", category: "Support", dept: "Client Success" },
    { title: "Web Developer / IT", location: "Global Team", type: "Contract", category: "Technology", dept: "Software" },
  ];

  const filters = ["All", "Operations", "Marketing", "Technology", "Support"];

  const filteredJobs = activeFilter === "All" 
    ? vacancies 
    : vacancies.filter(job => job.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans selection:bg-[#005a31] selection:text-white">
      
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden  pt-22">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070"
            alt="Eammu Corporate Office"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004d2c]/90 to-[#004d2c]/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 px-6">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6"
            >
              <Zap size={14} className="text-orange-400" />
              <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] text-white">Join Eammu Group</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]"
            >
              Careers for the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 italic">Bold & Driven.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-green-50/80 max-w-xl text-lg md:text-xl font-medium leading-relaxed mb-10"
            >
              We’re not just moving people; we’re moving the future. Join a global team of experts redefining travel, tech, and immigration.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button onClick={() => document.getElementById('jobs').scrollIntoView({behavior: 'smooth'})} className="bg-orange-500 hover:bg-white hover:text-[#004d2c] text-white px-10 py-5 rounded-2xl font-black transition-all shadow-xl active:scale-95 text-xs uppercase tracking-widest">
                View Openings
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-6">
        
        {/* --- BRAND CULTURE SECTION --- */}
        <section className="py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-[#005a31] tracking-tighter uppercase">Why Eammu?</h2>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                At Eammu, empowerment isn't just a buzzword. We provide a workspace where digital nomads, immigration experts, and creatives collaborate to solve complex global challenges.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { title: "Global Reach", desc: "Work with clients and teams spanning UAE, KSA, and Bangladesh.", icon: <Globe className="text-orange-500" /> },
                { title: "High-Performance Culture", desc: "We value output and ownership over strict clock-watching.", icon: <Zap className="text-orange-500" /> },
                { title: "Mentorship", desc: "Learn directly from veterans in travel tech and visa legalities.", icon: <Users className="text-orange-500" /> }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-[2rem] bg-white border border-slate-100 hover:shadow-xl hover:border-[#005a31]/10 transition-all">
                  <div className="shrink-0 w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">{benefit.icon}</div>
                  <div>
                    <h4 className="font-black text-slate-800 uppercase text-sm tracking-tight">{benefit.title}</h4>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-500/5 rounded-[4rem] blur-2xl group-hover:bg-[#005a31]/5 transition-colors"></div>
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1974"
              alt="Eammu Team Environment"
              className="rounded-[3rem] shadow-2xl relative z-10 w-full object-cover aspect-square md:aspect-auto"
            />
          </div>
        </section>

        {/* --- VACANCY FILTERING SYSTEM --- */}
        <section id="jobs" className="pb-32 scroll-mt-20">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#005a31] uppercase tracking-tighter">Open Positions</h2>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                    activeFilter === filter 
                    ? "bg-[#005a31] text-white shadow-lg scale-105" 
                    : "bg-white text-slate-400 border border-slate-100 hover:border-[#005a31]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredJobs.map((job, idx) => (
                <motion.div
                  layout
                  key={job.title}
                  variants={itemVariants}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group p-8 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all"
                >
                  <div className="flex justify-between items-start mb-8">
                    <span className="bg-orange-50 text-orange-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                      {job.type}
                    </span>
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-[#005a31] group-hover:bg-[#005a31] group-hover:text-white transition-colors">
                      <Briefcase size={18} />
                    </div>
                  </div>
                  
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{job.dept}</p>
                  <h3 className="text-2xl font-black text-slate-800 mb-6 tracking-tight leading-tight group-hover:text-[#005a31] transition-colors">{job.title}</h3>
                  
                  <div className="flex items-center gap-4 text-slate-500 text-sm mb-10">
                    <div className="flex items-center gap-1"><MapPin size={14} /> {job.location}</div>
                    <div className="flex items-center gap-1"><Clock size={14} /> Global</div>
                  </div>
                  
                  <a 
                    href="https://forms.gle/a2UU8sNva7FZKp8g6" 
                    target="_blank" 
                    className="w-full py-5 bg-[#f8fafc] group-hover:bg-[#005a31] group-hover:text-white text-[#005a31] font-black rounded-2xl transition-all flex items-center justify-center gap-3"
                  >
                    View Details <ChevronRight size={18} />
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* --- TALENT NETWORK CTA --- */}
        <section className="mb-20 bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
              The Job Doesn't <br /> Exist <span className="text-orange-500">Yet?</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
              We create roles for exceptional talent. If you have a skill that can take Eammu to the next level, our HR team wants to see your portfolio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <a
                href="https://forms.gle/a2UU8sNva7FZKp8g6"
                target="_blank"
                className="bg-orange-500 text-white px-12 py-6 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all shadow-2xl flex items-center justify-center gap-3"
              >
                <Upload size={18} /> Submit to Talent Pool
              </a>
              <Link
                href="/"
                className="bg-transparent text-white border-2 border-white/20 px-12 py-6 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                Return to Portal <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* --- REFINED FOOTER --- */}
      <footer className="py-20 border-t border-slate-100 bg-white">
        <div className="container mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
            © 2026 Eammu Group • Recruitment Operations • Cumilla | Dubai
          </p>
          <div className="flex gap-10">
            <a href="https://linkedin.com/company/eammu-immigration-services" className="text-[10px] font-black text-slate-400 hover:text-[#005a31] uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="/terms-privacy-policy" className="text-[10px] font-black text-slate-400 hover:text-[#005a31] uppercase tracking-widest transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Careers;