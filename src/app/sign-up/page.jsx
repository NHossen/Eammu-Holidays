"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Phone, Globe, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    country: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom Apple-style ease
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center py-12 md:p-18 bg-white overflow-hidden">
      
    
      {/* --- SignUp Card --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-2xl my-10 bg-white/60 border border-slate-100 backdrop-blur-[40px] p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]"
      >
        <div className="mb-8 md:mb-12 text-center">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#005a31]/5 border border-[#005a31]/10 text-[#005a31] text-[10px] font-bold uppercase tracking-widest mb-4"
          >
            <Sparkles size={12} className="text-orange-500" /> Start Your Journey
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-black text-[#050807] tracking-tighter mb-3">
            Create <span className="text-orange-500 italic">Account.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-slate-500 font-medium text-sm md:text-base">
            Join Eammu Holidays for a premium travel experience.
          </motion.p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* Responsive Name Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <InputField 
              icon={<User size={18} />} 
              label="First Name" 
              name="firstName" 
              placeholder="Eammu" 
              value={formData.firstName} 
              onChange={handleChange} 
              variants={itemVariants}
            />
            <InputField 
              icon={<User size={18} />} 
              label="Last Name" 
              name="lastName" 
              placeholder="User" 
              value={formData.lastName} 
              onChange={handleChange} 
              variants={itemVariants}
            />
          </div>

          <InputField 
            icon={<Mail size={18} />} 
            label="Email Address" 
            name="email" 
            type="email"
            placeholder="hello@eammu.com" 
            value={formData.email} 
            onChange={handleChange} 
            variants={itemVariants}
          />

          {/* Responsive Password Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
            <InputField 
              icon={<CheckCircle2 size={18} />} 
              label="Confirm" 
              name="confirmPassword" 
              type="password"
              placeholder="••••••••" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              variants={itemVariants}
            />
          </div>

          {/* Phone & Country Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <InputField 
              icon={<Phone size={18} />} 
              label="Phone" 
              name="phoneNumber" 
              placeholder="+8801..." 
              value={formData.phoneNumber} 
              onChange={handleChange} 
              variants={itemVariants}
            />
            <InputField 
              icon={<Globe size={18} />} 
              label="Country" 
              name="country" 
              placeholder="United Arab Emirates" 
              value={formData.country} 
              onChange={handleChange} 
              variants={itemVariants}
            />
          </div>

          {/* Animated Submit Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.01, backgroundColor: "#004824" }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-5 md:py-6 bg-[#005a31] text-white rounded-2xl md:rounded-3xl font-black text-[11px] md:text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all shadow-xl shadow-green-900/10 disabled:opacity-50 mt-4"
          >
            {isSubmitting ? (
              <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>Create My Account <ArrowRight size={18} /></>
            )}
          </motion.button>
        </form>

        <motion.div variants={itemVariants} className="mt-8 md:mt-10 text-center text-[11px] md:text-xs font-bold uppercase tracking-widest">
          <span className="text-slate-400">Already a member?</span>{' '}
          <Link href="/log-in" className="text-[#005a31] hover:text-orange-500 transition-colors ml-2 underline underline-offset-4">
            Log In here
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

// --- Reusable Modern Input Component ---
const InputField = ({ icon, label, name, type = "text", placeholder, value, onChange, variants }) => (
  <motion.div variants={variants} className="space-y-2">
    <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#005a31] ml-1">
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
        className="w-full bg-slate-50/50 border border-slate-100 rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-[#050807] text-sm placeholder:text-slate-300 focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#005a31]/5 focus:border-[#005a31]/20 transition-all duration-300"
      />
    </div>
  </motion.div>
);

export default SignUp;