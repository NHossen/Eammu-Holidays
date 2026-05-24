"use client";
import Image from 'next/image';

export default function Loading() {
  return (
    // ✅ min-h-dvh — mobile address bar সহ সঠিক height
    <div className="flex flex-col items-center justify-center min-h-dvh space-y-4">
      <div className="text-center py-10 flex flex-col items-center justify-center gap-4">

        {/* Ring + Logo */}
        <div className="relative h-28 w-28">

          {/* Spinning ring — CSS animation, GPU তে চলে */}
          <div className="absolute inset-0 animate-spin rounded-full border-t-2 border-b-2 border-[#ffcc00]" />

          {/* Logo */}
          <div className="relative h-full w-full p-2">
            <Image
              src="/eammu_holidays_logo.webp"
              alt="Eammu Holidays Logo"
              fill
              className="object-contain animate-pulse"
              // ✅ priority সরানো — loading screen এ দরকার নেই
              // আসল page এর LCP block করবে না
            />
          </div>
        </div>

        {/* ✅ animate-bounce → animate-pulse — GPU তে চলে, layout shift নেই */}
        <p className="text-[#005a31] font-bold text-lg animate-pulse">
          Welcome To Eammu ...
        </p>
      </div>
    </div>
  );
}