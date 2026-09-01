import React from 'react';
import { motion } from 'framer-motion';
import { Layers, DollarSign, ShieldAlert, AlertTriangle, Unplug, Clock, XCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      num: '01',
      tag: 'Problem 01',
      title: 'The Zoom & Meet Silo',
      desc: 'You finish a 45-minute sales demo. The client agreed to 3 key milestones. Who writes the tasks? Who updates the CRM?',
      badge: 'Siloed Data',
      color: 'purple',
      gradient: 'from-[#FEDBFC] to-purple-600',
      icon: Unplug,
      badgeColor: 'text-purple-700',
      dotColor: 'bg-[#FEDBFC]',
    },
    {
      num: '02',
      tag: 'Problem 02',
      title: 'The $50/Month Per-Seat Add-on Tax',
      desc: 'Zoom charges for meetings. Read AI charges $20/seat for notes. Calendly charges for scheduling. Zapier charges to connect them.',
      badge: 'Recurring Tax',
      color: 'purple',
      gradient: 'from-purple-600 to-indigo-600',
      icon: DollarSign,
      badgeColor: 'text-purple-600',
      dotColor: 'bg-purple-500',
    },
    {
      num: '03',
      tag: 'Problem 03',
      title: 'The 5-Meeting Limit Wall',
      desc: 'Free note-takers cut you off right in the middle of your busiest week with sudden paywalls.',
      badge: 'Arbitrary Limits',
      color: 'indigo',
      gradient: 'from-indigo-600 to-morphe-navy',
      icon: XCircle,
      badgeColor: 'text-indigo-600',
      dotColor: 'bg-indigo-500',
    }
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-slate-50/50 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-[#FEDBFC]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/70 border border-red-200 text-red-600 text-xs font-extrabold uppercase tracking-wider mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The Meeting Stack Dilemma</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-morphe-navy tracking-tight mb-4">
            The Disconnected Meeting Chaos
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Why Are You Still Juggling 4 Different Tools Just to Run a Call?
          </p>
        </motion.div>

        {/* 3 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group shadow-md hover:shadow-2xl hover:border-purple-200 transition-all cursor-default"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100/60 to-transparent rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500" />

                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white shadow-lg shadow-purple-500/20 mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <span className={`text-[11px] font-extrabold uppercase tracking-widest block mb-2 ${p.badgeColor}`}>
                    {p.tag}
                  </span>

                  <h3 className="font-display font-bold text-xl text-morphe-navy mb-4 group-hover:text-purple-700 transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className={p.badgeColor}>{p.badge}</span>
                  <span className={`w-2 h-2 rounded-full ${p.dotColor}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
