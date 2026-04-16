"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Sparkles, Fingerprint } from 'lucide-react';

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Logging in with:', formData);
    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-white overflow-hidden">
      
      {/* --- Shared Ambient Background --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[65%] h-[65%] bg-[#005a31]/5 rounded-full blur-[110px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, -40, 0] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-5%] right-[-5%] w-[55%] h-[55%] bg-orange-500/5 rounded-full blur-[90px]" 
        />
      </div>

      {/* --- LogIn Card --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-md bg-white/60 border border-slate-100 backdrop-blur-[40px] p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)]"
      >
        <div className="mb-10 text-center">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#005a31]/5 border border-[#005a31]/10 text-[#005a31] text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <Fingerprint size={14} className="text-orange-500" /> Secure Access
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-black text-[#050807] tracking-tighter mb-3">
            Welcome <span className="text-orange-500 italic">Back.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-slate-500 font-medium text-sm">
            Please enter your details to access your account.
          </motion.p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField 
            icon={<Mail size={18} />} 
            label="Email Address" 
            name="email" 
            type="email"
            placeholder="you@eammu.com" 
            value={formData.email} 
            onChange={handleChange} 
            variants={itemVariants}
          />

          <div className="space-y-1">
            <InputField 
              icon={<Lock size={18} />} 
              label="Password" 
              name="password" 
              type="password"
              placeholder="••••••••" 
              value={formData.password} 
              onChange={handleChange} 
              variants={itemVariants}
            />
            <motion.div variants={itemVariants} className="flex justify-end px-1">
              <Link href="/forgot-password" size="sm" className="text-[10px] font-bold text-slate-400 hover:text-orange-500 uppercase tracking-wider transition-colors">
                Forgot Password?
              </Link>
            </motion.div>
          </div>

          {/* Submit Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.01, backgroundColor: "#004824" }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-5 bg-[#005a31] text-white rounded-2xl md:rounded-[2rem] font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all shadow-xl shadow-green-900/10 disabled:opacity-50 mt-2"
          >
            {isSubmitting ? (
              <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>Sign In <ArrowRight size={18} /></>
            )}
          </motion.button>
        </form>

        <motion.div variants={itemVariants} className="mt-10 text-center text-[11px] font-bold uppercase tracking-widest">
          <span className="text-slate-400">New to Eammu?</span>{' '}
          <Link href="/sign-up" className="text-[#005a31] hover:text-orange-500 transition-colors ml-2 underline underline-offset-4">
            Join Now
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

// --- Reusable Modern Input Component ---
const InputField = ({ icon, label, name, type = "text", placeholder, value, onChange, variants }) => (
  <motion.div variants={variants} className="space-y-2">
    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#005a31] ml-1">
      {label}
    </label>
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#005a31] transition-colors duration-300">
        {React.cloneElement(icon, { size: 16 })}
      </div>
      <input
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-[#050807] text-sm placeholder:text-slate-300 focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#005a31]/5 focus:border-[#005a31]/20 transition-all duration-300"
      />
    </div>
  </motion.div>
);

export default LogIn;