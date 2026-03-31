"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const FlightOfferBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 md:py-8">
      <Link href="/flights/offers" className="block group">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          /* Mobile: h-auto to let the image set the height.
             Desktop: md:h-80 to keep your specific design.
          */
          className="relative w-full h-auto md:h-80 rounded-[1rem] overflow-hidden "
        >
          {/* Using 'relative' with 'next/image' for mobile 
              and 'fill' for desktop to ensure the image 
              is never cut off on small screens.
          */}
          <div className="block md:hidden relative w-full h-auto">
            <Image
              src="/flight_eammu_offer.webp"
              alt="Flight Offer in bangladesh and dubai"
              width={1280}
              height={720}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="hidden md:block relative w-full h-80">
            <Image
              src="/flight_eammu_offer.webp"
              alt="Flight Offer"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="1280px"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />

          {/* Action Button */}
          <div className="absolute bottom-3 left-4 md:bottom-5 md:left-8 hidden md:flex">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#005a31] text-white px-5 py-2 md:px-7 md:py-3 rounded-lg md:rounded-xl font-black uppercase tracking-widest shadow-2xl flex items-center gap-2 group-hover:bg-[#ffcc00] group-hover:text-[#005a31] transition-all duration-300 text-[10px] md:text-sm"
            >
              Book Now
              <span className="text-sm md:text-md">→</span>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </section>
  );
};

export default FlightOfferBanner;