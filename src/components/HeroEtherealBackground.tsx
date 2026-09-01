import React from 'react';
import { motion } from 'framer-motion';

export const HeroEtherealBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
      
      {/* 1. Base Ethereal Light Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6fd] via-[#eef1f9] to-[#ffffff]" />

      {/* 2. Soft Ambient Bokeh Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
          x: [-30, 30, -30]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/6 left-1/5 w-[420px] h-[420px] bg-gradient-to-tr from-amber-300/30 via-pink-300/30 to-purple-300/25 rounded-full blur-[80px]"
      />
      <motion.div 
        animate={{ 
          scale: [1.15, 0.95, 1.15],
          opacity: [0.6, 0.9, 0.6],
          x: [30, -30, 30]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/4 right-1/6 w-[520px] h-[520px] bg-gradient-to-br from-cyan-300/45 via-blue-300/35 to-purple-400/40 rounded-full blur-[90px]"
      />

      {/* 3. CENTERPIECE: Glowing Iridescent Glass Orb / Energy Sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-[60%] lg:-translate-x-1/2 w-[480px] sm:w-[620px] lg:w-[760px] h-[480px] sm:h-[620px] lg:h-[760px] flex items-center justify-center">
        
        {/* Outer Halo Glow Bloom */}
        <motion.div 
          animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-400/40 via-purple-500/40 to-pink-400/35 blur-3xl"
        />

        {/* Outer Rotating Golden & Violet Orbit Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-[90%] h-[90%] rounded-full border-2 border-amber-300/50 shadow-[0_0_35px_rgba(251,191,36,0.3)] [transform:rotateX(65deg)_rotateZ(25deg)]"
        />

        {/* Counter-Rotating Cyan Glass Orbit Ring */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[96%] h-[96%] rounded-full border-2 border-cyan-400/45 shadow-[0_0_30px_rgba(34,211,238,0.35)] [transform:rotateY(60deg)_rotateZ(-20deg)]"
        />

        {/* Glass Bubble Outer Shell with Specular Highlights */}
        <div className="absolute w-[72%] h-[72%] rounded-full bg-gradient-to-tr from-cyan-200/35 via-purple-200/35 to-white/60 backdrop-blur-[3px] border-2 border-white/90 shadow-[0_25px_60px_rgba(139,92,246,0.25),inset_0_0_50px_rgba(255,255,255,0.9)] flex items-center justify-center">
          
          {/* Inner Glowing Nebula Core */}
          <motion.div 
            animate={{ 
              scale: [0.85, 1.08, 0.85],
              rotate: [0, 180, 360],
              opacity: [0.85, 1, 0.85]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="w-[75%] h-[75%] rounded-full bg-gradient-to-tr from-cyan-400/70 via-purple-600/60 to-pink-400/50 blur-xl"
          />

          {/* Core White/Cyan Light Spark */}
          <motion.div 
            animate={{ scale: [0.85, 1.25, 0.85], opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-36 h-36 rounded-full bg-gradient-to-r from-white via-cyan-100 to-purple-100 blur-md shadow-[0_0_50px_#ffffff]"
          />

          {/* Glass Specular Arc / Lens Flare */}
          <div className="absolute top-5 left-8 w-24 h-12 rounded-full bg-white/80 blur-[2px] -rotate-30" />
        </div>

      </div>

      {/* 4. Flowing Harmonic Wave Filaments & Particle Ribbons (SVG) */}
      <svg 
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800" 
        fill="none" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ethereal-wave-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.2" />
            <stop offset="25%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#f472b6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="ethereal-wave-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
            <stop offset="35%" stopColor="#818cf8" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#fbbf24" stopOpacity="0.7" />
            <stop offset="85%" stopColor="#c084fc" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="ethereal-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="15%" stopColor="#f59e0b" stopOpacity="0" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.85" />
            <stop offset="85%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Wave 1: Flowing Main Harmonic Wave */}
        <motion.path 
          animate={{
            d: [
              "M-100 480 C250 220, 480 620, 720 370 C960 140, 1180 540, 1540 300",
              "M-100 430 C280 340, 450 520, 720 410 C990 240, 1200 440, 1540 370",
              "M-100 480 C250 220, 480 620, 720 370 C960 140, 1180 540, 1540 300"
            ]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          stroke="url(#ethereal-wave-1)" 
          strokeWidth="3.5" 
          fill="none" 
        />

        {/* Wave 2: Upper Sine Ribbon */}
        <motion.path 
          animate={{
            d: [
              "M-100 350 C300 520, 520 200, 720 430 C920 640, 1160 280, 1540 460",
              "M-100 400 C260 420, 550 280, 720 370 C890 520, 1200 320, 1540 410",
              "M-100 350 C300 520, 520 200, 720 430 C920 640, 1160 280, 1540 460"
            ]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          stroke="url(#ethereal-wave-2)" 
          strokeWidth="2.5" 
          fill="none" 
        />

        {/* Wave 3: Fine Dotted Particle Filament Line */}
        <motion.path 
          animate={{
            d: [
              "M-100 410 C220 280, 460 580, 720 380 C980 200, 1150 510, 1540 330",
              "M-100 460 C260 370, 430 490, 720 420 C1010 290, 1180 410, 1540 390",
              "M-100 410 C220 280, 460 580, 720 380 C980 200, 1150 510, 1540 330"
            ]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          stroke="url(#ethereal-wave-1)" 
          strokeWidth="2.5" 
          strokeDasharray="6 10"
          fill="none" 
        />

        {/* Wave 4: Golden Accent Filament Ribbon */}
        <motion.path 
          animate={{
            d: [
              "M100 530 C380 410, 580 490, 720 420 C860 370, 1040 450, 1340 370",
              "M100 490 C420 460, 550 430, 720 460 C890 470, 1000 400, 1340 410",
              "M100 530 C380 410, 580 490, 720 420 C860 370, 1040 450, 1340 370"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          stroke="url(#ethereal-gold)" 
          strokeWidth="2.5" 
          fill="none" 
        />
      </svg>

      {/* 5. Floating Prismatic Light Crystals & Bokeh Orbs */}
      <motion.div 
        animate={{ y: [-12, 12, -12], rotate: [0, 25, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-[18%] w-8 h-8 border-2 border-cyan-400/60 bg-gradient-to-tr from-cyan-200/50 to-white/90 rounded-lg rotate-45 backdrop-blur-xs shadow-lg shadow-cyan-400/30"
      />

      <motion.div 
        animate={{ y: [14, -14, 14], rotate: [0, -30, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/4 right-[20%] w-7 h-7 border-2 border-purple-400/60 bg-gradient-to-tr from-purple-200/50 to-pink-200/60 rounded-md rotate-12 backdrop-blur-xs shadow-lg shadow-purple-400/30"
      />

      <motion.div 
        animate={{ y: [-16, 16, -16], scale: [1, 1.3, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-1/4 right-[28%] w-10 h-10 rounded-full bg-gradient-to-r from-amber-300/60 to-pink-300/50 blur-[2px] shadow-[0_0_30px_rgba(251,191,36,0.5)]"
      />

      <motion.div 
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-[25%] w-6 h-6 rounded-full bg-cyan-300/70 blur-[1px] shadow-[0_0_20px_rgba(34,211,238,0.6)]"
      />

    </div>
  );
};
