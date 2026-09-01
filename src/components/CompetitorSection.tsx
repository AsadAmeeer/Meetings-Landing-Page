import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Video, Bot, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const CompetitorSection: React.FC = () => {
  const videoPlatforms = [
    'Zoom Workplace',
    'Google Meet / Workspace',
    'Zoho Meeting',
    'Microsoft Teams'
  ];

  const aiCompetitors = [
    'Read AI',
    'Otter.ai',
    'Fireflies.ai',
    'Fathom Video'
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-700 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>Unified Platform Architecture</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-morphe-navy tracking-tight mb-4">
            Built to Replace Your Meeting Stack
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Stop stitching together disparate video tools, note-takers, and CRM connectors.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Category 1: Video Conferencing Platforms */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-3xl p-8 border border-purple-100/80 shadow-xl relative overflow-hidden transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mb-6 shadow-xs">
              <Video className="w-6 h-6" />
            </div>

            <h3 className="font-display font-bold text-xl text-morphe-navy mb-2">
              Video Conferencing Platforms
            </h3>
            <p className="text-xs text-slate-500 mb-6 font-medium">
              Replaces standard standalone video rooms with native in-CRM video conferencing:
            </p>

            <div className="space-y-3">
              {videoPlatforms.map((name, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-700 shadow-2xs"
                >
                  <span>{name}</span>
                  <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 text-[10px] font-extrabold">
                    Unified in MorpheLabs
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Category 2: AI Meeting Note-Takers & Competitors */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-3xl p-8 border border-purple-100/80 shadow-xl relative overflow-hidden transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 shadow-xs">
              <Bot className="w-6 h-6" />
            </div>

            <h3 className="font-display font-bold text-xl text-morphe-navy mb-2">
              AI Meeting Note-Takers &amp; Competitors
            </h3>
            <p className="text-xs text-slate-500 mb-6 font-medium">
              Eliminates per-seat note-taker upsells and 5-meeting free tier limits:
            </p>

            <div className="space-y-3">
              {aiCompetitors.map((name, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-700 shadow-2xs"
                >
                  <span>{name}</span>
                  <span className="px-2.5 py-1 rounded-full bg-pink-100 text-pink-700 text-[10px] font-extrabold">
                    Zero Per-Seat Tax
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
