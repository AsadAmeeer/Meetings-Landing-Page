import React from 'react';
import { motion } from 'framer-motion';
import { Video, Bot, Sparkles, ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenInstantMeeting: () => void;
  onOpenSendBot: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenInstantMeeting, onOpenSendBot }) => {
  return (
    <section className="py-20 lg:py-32 relative bg-gradient-to-b from-white via-purple-50/60 to-white overflow-hidden">
      {/* Soft Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-pink-200/30 via-purple-200/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-purple-200/30 via-indigo-200/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Light Theme CTA Container Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-3xl bg-gradient-to-br from-white via-purple-50/40 to-pink-50/30 border border-purple-200/80 p-10 lg:p-16 text-center relative overflow-hidden shadow-2xl shadow-purple-500/10"
        >
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-extrabold uppercase tracking-wider mb-6 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>MorpheLabs Meetings Intelligence</span>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-tight max-w-4xl mx-auto mb-6"
          >
            Never Take Meeting Notes Again.
          </motion.h2>

          {/* Supporting message */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-slate-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Bring your meetings, AI assistant, transcripts, summaries and CRM tasks into one intelligent workspace.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenInstantMeeting}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-bold text-sm lg:text-base shadow-xl shadow-purple-500/25 hover:shadow-2xl transition-all cursor-pointer"
            >
              <span>🚀 Launch Instant Meeting — Free</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenSendBot}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-purple-50/80 text-slate-800 font-bold text-sm lg:text-base border border-purple-200/90 shadow-sm transition-all cursor-pointer"
            >
              <span>🤖 Send AI Bot to an External Call</span>
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-10 pt-6 border-t border-purple-200/60 text-xs font-semibold text-slate-600 flex flex-wrap items-center justify-center gap-6"
          >
            <span className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> 100% Unlimited Meetings</span>
            <span className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> Zero Download Native Rooms</span>
            <span className="flex items-center gap-1"><span className="text-emerald-500 font-bold">✓</span> Private Tenancy Audio Storage</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
