"use client";
import { motion,} from "framer-motion";
// --- Main Page Component ---
export default function MainGradient() {
  return (
    <main className="relative w-full  overflow-x-hidden">
      
      {/* 1. BACKGROUND LAYER (Isolated to prevent affecting other components) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Green Blob */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-green-200/40 blur-[120px] rounded-full"
        />
        {/* Animated Yellow Blob */}
        <motion.div 
          animate={{ x: [0, -80, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-yellow-200/30 blur-[120px] rounded-full"
        />
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

    </main>
  );
}