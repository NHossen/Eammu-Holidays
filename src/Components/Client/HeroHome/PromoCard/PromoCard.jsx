"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const promoSlides = [
  { id: 1, title: "SHARJAH TO YEREVAN", price1: "135", price2: "255", img: "https://armenianweekly.com/wp-content/uploads/2024/08/Der-Tadeos-Barseghyan-and-parishioners-of-the-Armenian-Church-of-Our-Savior-at-Haghpat-monastery-Photo_-Armenian-Church-of-Our-Savior-Facebook.jpg" },
  { id: 2, title: "DUBAI TO DHAKA", price1: "110", price2: "300", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "DHAKA TO DUBAI", price1: "300", price2: "355", img: "https://tripjive.com/wp-content/uploads/2024/09/Khasia-Polli-in-Sylhet-travel-guide-1024x585.jpg" },
  { id: 4, title: "JAPAN TO DHAKA", price1: "499", price2: "999", img: "https://japandeluxetours.com/uploads/2025/10/20251009212409_68e827f99d19b.jpg" },
  { id: 5, title: "DHAKA TO MALDIVES", price1: "299", price2: "499", img: "https://afar.brightspotcdn.com/dims4/default/3da8482/2147483647/strip/true/crop/3000x1500+0+369/resize/1440x720!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg" },
];

export default function PromoCard() {
  const [promoIndex, setPromoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPromoIndex((prev) => (prev + 1) % promoSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-md h-75 sm:h-65 rounded-2xl overflow-hidden border border-white/30 shadow-2xl bg-linear-to-r from-[#005a31] via-[#009552] to-[#005a31] bg-size-[200%_auto] hover:bg-right transition-all duration-1000">
    {/* ================= PROMO CARD ================= */}
              <div className="w-full flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md h-75 sm:h-65 rounded-2xl overflow-hidden border border-white/30 shadow-2xl 
                                bg-linear-to-r from-[#005a31] via-[#009552] to-[#005a31] bg-size-[200%_auto]
                                hover:bg-right transition-all duration-1000">

                  <motion.div 
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent w-full h-full z-10 pointer-events-none"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3, 
                      ease: "linear", 
                      repeatDelay: 2 
                    }}
                  />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={promoIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex flex-col sm:flex-row"
                    >
                      <div className="relative w-full sm:w-1/2 h-[45%] sm:h-full">
                        <Image 
                          src={promoSlides[promoIndex].img} 
                          alt={`${promoSlides[promoIndex].title} cheap flight ticket deal`}
                          fill
                          priority
                          className="object-cover"
                        />
                      </div>

                      <div className="w-full sm:w-1/2 p-4 flex flex-col justify-between text-white">
                        <div>
                          <h2 className="text-base font-bold mb-2 uppercase leading-tight">
                            {promoSlides[promoIndex].title}
                          </h2>

                          <div className="flex gap-2 mb-3 text-[11px]">
                            <div className="flex-1 border border-white/40 p-1.5 rounded bg-white/5">
                              One Way <br/><b>USD {promoSlides[promoIndex].price1}</b>
                            </div>
                            <div className="flex-1 border border-white/40 p-1.5 rounded bg-white/5">
                              Round Trip <br/><b>USD {promoSlides[promoIndex].price2}</b>
                            </div>
                            <div className='lg:hidden relative h-10 w-12'>
                               <Image 
                                src="/eammu_white_logo.webp" 
                                alt="Logo" 
                                fill
                                className="object-contain animate-pulse" 
                              />
                            </div>
                          </div>
                        </div>

                        <Link href="/air-tickets" className="bg-white text-[#005a31] font-black py-2 px-4 rounded-lg text-sm text-center block shadow-md active:scale-95 transition-transform">
                          Book Now
                        </Link>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute bottom-2 right-3 flex gap-1.5 z-20">
                    {promoSlides.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 w-1.5 rounded-full transition-all ${
                          i === promoIndex ? 'bg-white w-4' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
    </div>
  );
}