// app/loading.js
"use client";
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <div className="text-center py-10 flex flex-col items-center justify-center gap-4">
        <div className="relative h-28 w-28">
          {/* Outer spinning ring */}
          <div className="absolute inset-0 animate-spin rounded-full border-t-2 border-b-2 border-[#ffcc00]"></div>

          {/* Animated Logo */}
          <Image
           src="/eammu_holidays_logo.webp" 
  alt="Eammu Holidays Logo" 
  className="mt-2 animate-pulse"
  width={150} 
  height={50} 
  priority // Use priority for logos/above-the-fold content
/>
        </div>
        <p className="text-[#005a31] font-bold text-lg animate-bounce">
          Welcome To Eammu ...
        </p>
      </div>
    </div>
  );
}