import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { HeroMeetingMockup } from './HeroMeetingMockup';
import { HeroEtherealBackground } from './HeroEtherealBackground';

interface HeroProps {
  onOpenInstantMeeting: () => void;
  onOpenSendBot: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInstantMeeting, onOpenSendBot }) => {
  return (
    <section className="relative isolate min-h-[680px] lg:min-h-[740px] flex flex-col justify-center pt-24 pb-10 lg:pt-28 lg:pb-12 text-slate-900 overflow-hidden selection:bg-purple-200">
      
      {/* ========================================================================= */}
      {/* ETHEREAL IRIDESCENT ANIMATED HERO BACKGROUND (Matching Reference Image) */}
      {/* ========================================================================= */}
      <HeroEtherealBackground />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        
        {/* TWO-COLUMN HERO COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* LEFT COLUMN: Headline, Eyebrow, Subtext, CTAs, Trust Row (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4 lg:space-y-5 text-left"
          >
            
            {/* Eyebrow Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/90 border border-purple-200/90 text-purple-700 text-[10px] sm:text-xs font-extrabold tracking-wide uppercase shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FEDBFC]" />
              <span>⚡ THE ALL-IN-ONE MEETING SUITE: NATIVE VIDEO ROOMS + AI BOT FOR ZOOM &amp; GOOGLE MEET</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3.2rem] tracking-tight text-slate-950 leading-[1.12]"
            >
              Never Take Meeting<br />
              Notes Again.<br />
              <span className="bg-gradient-to-r from-[#d946ef] via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                In Your Own Rooms,<br />
                Or Anywhere Else.
              </span>
            </motion.h1>

            {/* Supporting Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-slate-600 text-xs sm:text-sm lg:text-base font-normal leading-relaxed max-w-[500px]"
            >
              The All-in-One AI-Powered Meeting Suite that captures, summarizes, and syncs to your workflow—instantly.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenInstantMeeting}
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#DB2777] hover:bg-[#BE185D] text-white font-bold text-xs sm:text-sm shadow-xl shadow-pink-600/30 hover:shadow-pink-600/50 transition-all cursor-pointer"
              >
                <span>🚀 Launch Instant Meeting — Free</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenSendBot}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-purple-50/80 text-slate-800 font-bold text-xs sm:text-sm border border-purple-200/80 shadow-sm transition-all cursor-pointer"
              >
                <span>🤖 Send AI Bot to an External Call</span>
              </motion.button>
            </motion.div>

            {/* Bottom Trust Badges Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pt-3.5 border-t border-purple-100/80 mt-3"
            >
              <div className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400 mb-2">
                TRUSTED ENTERPRISE MEETING SUITE
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] lg:text-[11px] font-semibold text-slate-700">
                <div className="flex items-center gap-1.5 bg-white/90 p-2 rounded-xl border border-purple-100/80 shadow-xs hover:border-purple-300 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" /> 100% Unlimited
                </div>
                <div className="flex items-center gap-1.5 bg-white/90 p-2 rounded-xl border border-purple-100/80 shadow-xs hover:border-purple-300 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" /> Zoom &amp; Meet
                </div>
                <div className="flex items-center gap-1.5 bg-white/90 p-2 rounded-xl border border-purple-100/80 shadow-xs hover:border-purple-300 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" /> Auto CRM Tasks
                </div>
                <div className="flex items-center gap-1.5 bg-white/90 p-2 rounded-xl border border-purple-100/80 shadow-xs hover:border-purple-300 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" /> Private Tenancy
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN: Large Product Dashboard + Floating UI Cards (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <HeroMeetingMockup onOpenInstantMeeting={onOpenInstantMeeting} />
          </motion.div>

        </div>

      </div>
    </section>
  );
};
