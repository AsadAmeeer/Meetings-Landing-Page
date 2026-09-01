import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Zap, UserCheck, Clock, Mail, ShieldCheck } from 'lucide-react';

export const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      title: 'Triple-Mode Capture',
      description: 'Seamlessly switch between built-in MorpheLabs rooms, external Zoom/Meet bot recording, and past file imports in one dashboard.',
      icon: Layers,
      color: 'from-pink-500 to-purple-600'
    },
    {
      title: 'Zero-Lag CRM Workflow Action',
      description: 'AI action items immediately populate your CRM task management system with assigned team members and due dates.',
      icon: Zap,
      color: 'from-purple-600 to-indigo-600'
    },
    {
      title: 'Automated Team Accountability',
      description: 'Auto-detect invitees who missed public company meetings, send automated reminder notifications, and prompt re-login.',
      icon: UserCheck,
      color: 'from-indigo-600 to-morphe-navy'
    },
    {
      title: 'Attendance Duration Verification',
      description: 'Real-time calculation of exact presence duration, identifying users who stayed for the entire call (≥ 15 min) versus those who left early.',
      icon: Clock,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Universal Email Invites with .ics Attachments',
      description: 'Real .ics calendar invites delivered directly via SMTP/Zoho that sync into Google, Apple, Outlook, and Zoho calendars without OAuth token grants.',
      icon: Mail,
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'No “Per-Seat AI Tax”',
      description: 'No $15–$30/user/month upsells just to summarize conversations.',
      icon: ShieldCheck,
      color: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <section id="advantages" className="py-20 lg:py-32 relative bg-gradient-to-b from-[#f8fafc] via-[#faf8ff] to-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/80 border border-pink-200 text-pink-700 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Why MorpheLabs Wins</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-morphe-navy tracking-tight mb-4">
            Our Unfair Advantages
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Purpose-built architecture designed specifically for high-performing enterprise revenue and meeting teams.
          </p>
        </motion.div>

        {/* 6 Advantages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-3xl p-8 flex flex-col justify-between shadow-md hover:shadow-2xl hover:border-purple-200 transition-all group"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${adv.color} flex items-center justify-center text-white shadow-lg shadow-purple-500/20 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-morphe-navy mb-3 group-hover:text-purple-600 transition-colors">
                    {adv.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
