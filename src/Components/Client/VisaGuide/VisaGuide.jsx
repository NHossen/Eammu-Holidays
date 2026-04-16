"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import visaData from '@/app/data/visaguide.json';
import { createSlug } from '@/app/lib/utils';

export default function VisaGuide() {
  const [origin, setOrigin] = useState('bangladesh');
  const [destination, setDestination] = useState('canada');

  // Animation Variants
  const containerVars = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
  };

  const cardVars = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    whileHover: { y: -8, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] relative overflow-hidden font-sans antialiased text-slate-900">
      
      {/* Background Aesthetic Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-200/20 rounded-full blur-[120px] -z-10" />

      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="max-w-6xl mx-auto px-6 py-16 md:py-24"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-5 py-2 mb-6 text-[10px] font-black tracking-[0.2em] text-blue-700 uppercase bg-blue-100/50 rounded-full border border-blue-200"
          >
            Intelligence Portal v2.0
          </motion.span>
          
          <motion.h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 leading-[1.1]">
            Your Journey, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              Simplified.
            </span>
          </motion.h1>
          
          <motion.p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Instant visa protocols and documentation checklists for <span className="text-slate-900 font-bold">{origin}</span> citizens traveling globally.
          </motion.p>
        </div>

        {/* The Search Command Center (Glassmorphism) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative z-20 mb-32"
        >
          <div className="bg-white/70 backdrop-blur-2xl p-3 md:p-6 rounded-[3rem] shadow-[0_32px_120px_-20px_rgba(0,0,0,0.08)] border border-white flex flex-col md:flex-row items-center gap-4">
            
            {/* Origin Input */}
            <div className="flex-1 w-full bg-slate-50/50 p-5 rounded-[2rem] border border-slate-100 hover:border-blue-200 transition-all group">
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
                Citizenship
              </label>
              <div className="flex items-center gap-3">
                <div className="w-8 h-5 rounded-sm overflow-hidden shadow-sm">
                   <img src={visaData.find(c => c.country.toLowerCase() === origin)?.flag} className="w-full h-full object-cover" alt="" />
                </div>
                <select 
                  value={origin} 
                  onChange={(e) => setOrigin(e.target.value)}
                  className="bg-transparent text-xl font-bold outline-none cursor-pointer capitalize w-full appearance-none"
                >
                  {visaData.filter(c => c.country.toLowerCase() !== destination).map((c) => (
                    <option key={c.code} value={c.country.toLowerCase()}>{c.country}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Swap Icon */}
            <div className="hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full border border-slate-100 shadow-md text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </div>

            {/* Destination Input */}
            <div className="flex-1 w-full bg-slate-50/50 p-5 rounded-[2rem] border border-slate-100 hover:border-blue-200 transition-all group">
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
                Destination
              </label>
              <div className="flex items-center gap-3">
                <div className="w-8 h-5 rounded-sm overflow-hidden shadow-sm">
                   <img src={visaData.find(c => c.country.toLowerCase() === destination)?.flag} className="w-full h-full object-cover" alt="" />
                </div>
                <select 
                  value={destination} 
                  onChange={(e) => setDestination(e.target.value)}
                  className="bg-transparent text-xl font-bold outline-none cursor-pointer capitalize w-full appearance-none"
                >
                  {visaData.filter(c => c.country.toLowerCase() !== origin).map((c) => (
                    <option key={c.code} value={c.country.toLowerCase()}>{c.country}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Main CTA */}
            <Link 
              href={`/visa/visa-guide/${createSlug(destination)}-visa-for-${createSlug(origin)}`}
              className="w-full md:w-auto bg-slate-900 hover:bg-blue-600 text-white px-12 py-6 rounded-[2.2rem] font-black transition-all shadow-xl hover:shadow-blue-500/20 active:scale-95 text-center flex items-center justify-center gap-2 group"
            >
              <span>Verify Requirements</span>
              <svg className="group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </Link>
          </div>
        </motion.div>

        {/* Popular Section */}
        <div className="space-y-12">
          <div className="flex items-center gap-6">
            <h2 className="text-2xl font-black tracking-tight shrink-0">Popular for {origin}</h2>
            <div className="h-px w-full bg-slate-200/60"></div>
          </div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {visaData
              .filter(item => item.country.toLowerCase() !== origin)
              .slice(0, 10)
              .map((item, idx) => (
              <motion.div
                key={item.code}
                variants={cardVars}
                whileHover="whileHover"
              >
                <Link 
                  href={`/visa/visa-guide/${createSlug(item.country)}-visa-for-${createSlug(origin)}`}
                  className="group relative block bg-white p-6 rounded-[2.5rem] border border-slate-100 hover:border-white shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all overflow-hidden"
                >
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-12 mb-6 overflow-hidden rounded-xl shadow-md group-hover:shadow-blue-200 transition-all">
                      <img 
                        src={item.flag} 
                        alt={item.country} 
                        className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700" 
                      />
                    </div>
                    <span className="text-base font-black text-slate-800 tracking-tight capitalize group-hover:text-blue-600 transition-colors">
                      {item.country}
                    </span>
                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">View Guide</p>
                  </div>
                  
                  {/* Subtle hover background accent */}
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Feature Trust Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-100 pt-20"
        >
          {[
            { t: 'Live Updates', d: 'Requirements are refreshed daily for 2026 protocols.', i: '📡' },
            { t: 'Document Verification', d: 'Expert analysis of your paperwork before submission.', i: '🛡️' },
            { t: '98% Success Rate', d: 'Proven track record of successful travel approvals.', i: '📈' }
          ].map((feat, idx) => (
            <div key={idx} className="flex gap-5">
              <span className="text-3xl">{feat.i}</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{feat.t}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{feat.d}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}