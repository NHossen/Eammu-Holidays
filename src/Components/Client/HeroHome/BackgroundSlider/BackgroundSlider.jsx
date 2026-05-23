"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const bgSlides = [
  { url: "/bg-main-theme.webp",        alt: "Sylhet tea garden tour Bangladesh" },
  { url: "/the-love-island.webp",      alt: "International student visa consultancy Bangladesh" },
  { url: "/desert_kamel_egypt.jpg",    alt: "Desert travel experience and tour packages" },
  { url: "/ileand-2.png",              alt: "Maldives luxury island resort packages Bangladesh" },
];

export default function BackgroundSlider() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex(prev => (prev + 1) % bgSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {bgSlides.map((slide, i) => (
        <Image
          key={slide.url}
          src={slide.url}
          alt={slide.alt}
          fill
          priority={i === 0}          // only first image is LCP
          loading={i === 0 ? "eager" : "lazy"}
          className="object-cover transition-opacity duration-700"
          style={{ opacity: bgIndex === i ? 1 : 0 }}
          sizes="100vw"
          quality={i === 0 ? 80 : 75} // ✅ single number, not array
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30" />
    </div>
  );
}