"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Next.js passes 'error' and 'reset' props automatically
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-2xl text-center">
        
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image 
              src="/eammu_holidays_Travel_agency.webp" 
              alt="Eammu Holidays Logo" 
              width={180} 
              height={60} 
              className="object-contain"
              priority
            />
          </Link>
        </div>

        <div className="text-7xl mb-6 animate-pulse">📡</div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Oops! Something went wrong
        </h1>

        <p className="text-gray-600 text-base md:text-lg mb-10 leading-relaxed max-w-md mx-auto">
          We encountered an unexpected issue. Please try to refresh the page or head back home.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <button
            onClick={() => reset()} // Use the built-in reset function instead of window.location.reload
            className="w-full sm:w-auto bg-[#005a31] text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-green-900/20 hover:bg-[#003e24] hover:scale-105 transition-all active:scale-95"
          >
            🔄 Try Again
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto border-2 border-[#005a31] text-[#005a31] px-10 py-4 rounded-full font-bold hover:bg-green-50 transition-all text-center"
          >
            ⬅ Back to Home
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400 mb-2">Need immediate assistance?</p>
          <a href="mailto:support@eammu.com" className="text-[#005a31] font-semibold hover:underline">
            support@eammu.com
          </a>
        </div>
      </div>
    </div>
  );
}