"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { 
  FaPlane, FaUniversity, 
  FaTags, FaPassport, FaSuitcaseRolling, 
  FaArrowRight, FaShieldAlt 
} from "react-icons/fa";

const services = [
  {
    icon: <FaPassport />,
    title: "Global Visa Processing",
    description: "Comprehensive visa consultancy for F1, B1/B2, and work permits for USA, UK, Canada, and Schengen countries.",
    link: "our-services/visa-services",
    keywords: "Student Visa, Tourist Visa, Work Permit"
  },
  {
    icon: <FaPlane />,
    title: "Air Ticketing",
    description: "Global flight booking with exclusive deals on major airlines. 24/7 re-issuance and cancellation support.",
    link: "/flight-booking",
    keywords: "Cheap Flights, International Tickets"
  },
  {
    icon: <FaSuitcaseRolling />,
    title: "Holiday Packages",
    description: "Customized holiday deals, Umrah packages, and luxury group tours tailored to your preferences.",
    link: "/our-services/tour-packages",
    keywords: "Honeymoon Packages, Group Tours"
  },
  {
    icon: <FaTags />,
    title: "Special Offers",
    description: "Limited-time travel discounts and bundle deals on flights and hotels for seasonal travelers.",
    link: "/offers",
    keywords: "Travel Discounts, Cheap Hotel Deals"
  },
  {
    icon: <FaShieldAlt />,
    title: "USA Interview Preparation",
    description: "Expert coaching to crack the USA Visa Interview. Specialized 'Target USA' program for success.",
    link: "/target-usa-visa-interview-preparation",
    keywords: "Visa Interview Coaching, USA Mock Interview"
  },
  {
    icon: <FaUniversity />,
    title: "IELTS & Study Abroad academy",
    description: "Official support for IELTS preparation and immigration consultancy for Canada and Australia.",
    link: "/target-ielts-immigration-center",
    keywords: "Study Abroad, Immigration Support"
  },
];

const OurServices = () => {
  return (
    <div className="min-h-screen bg-[#fcfcfc] pb-24 font-sans">
      
      {/* 🚀 Hero Section with Optimized Next.js Image */}
      <section className="relative py-28 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Best Education Consultancy and Visa Services in Bangladesh - Eammu Holidays" 
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#005a31]/85 to-[#005a31]/40 shadow-inner"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-4xl font-black mb-6 tracking-tighter uppercase italic">
              Eammu Holidays | 
              <span className="text-orange-400"> Leading Travel Agency in Bangladesh</span>
            </h1>
            <p className="text-lg md:text-xl text-green-50/90 max-w-5xl mx-auto font-medium leading-relaxed">
              Eammu Holidays is a Leading travel agency providing visa application services, air ticket booking, 
              tour packages, and Education consultancy. We help travelers from Bangladesh, UAE, 
              Armenia, and worldwide with tourist visas, work permits, and international travel solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🌐 Services Grid - SEO Optimized Layout */}
      <div className="container mx-auto px-4 md:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-4xl p-8 shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col justify-between hover:shadow-2xl hover:border-green-200 transition-all group"
            >
              <div>
                <header className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-green-50 text-[#005a31] rounded-2xl flex items-center justify-center text-3xl group-hover:bg-[#005a31] group-hover:text-white transition-all duration-500 shadow-sm">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest pt-2">
                    Eammu Exclusive
                  </span>
                </header>
                
                <h2 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-[#005a31] transition-colors">
                  {service.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                <p className="hidden">{service.keywords}</p>
              </div>

              <Link
                href={service.link}
                className="inline-flex items-center gap-2 text-[#005a31] font-extrabold text-sm uppercase tracking-tighter group-hover:gap-4 transition-all"
              >
                Learn More <FaArrowRight className="text-orange-500" />
              </Link>
            </motion.article>
          ))}
        </div>



        {/* 🛡️ Professional Trust Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-between bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-lg"
        >
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-black text-[#005a31] mb-2">Ready to plan your next journey?</h3>
            <p className="text-gray-500 font-medium">Get a free initial consultation from our certified advisors.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`https://wa.me/8801631312524?text=Hello%2C%20I%20would%20like%20to%20book%20a%20%20Services`} className="bg-[#005a31] text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-500 transition-all shadow-md text-center">
              Talk to Expert
            </a>
            <Link href="/contact" className="bg-slate-50 text-slate-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all border border-slate-200 text-center">
              Support Center
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;