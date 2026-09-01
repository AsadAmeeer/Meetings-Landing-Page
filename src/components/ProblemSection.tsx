import React from 'react';
import { motion } from 'framer-motion';

// Authentic Brand SVGs
const ZoomMeetLogo = () => (
  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/90 shadow-lg shadow-blue-500/10 p-2.5 flex items-center justify-center gap-1.5 group-hover:rotate-6 transition-transform duration-300">
    {/* Official Zoom Logo */}
    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#0B5CFF"/>
      <path d="M5 14.5V9.5C5 8.12 6.12 7 7.5 7H13C14.38 7 15.5 8.12 15.5 9.5V14.5C15.5 15.88 14.38 17 13 17H7.5C6.12 17 5 15.88 5 14.5Z" fill="white"/>
      <path d="M15.8 10.3L18.8 8.1C19.1 7.9 19.5 8.1 19.5 8.4V15.6C19.5 15.9 19.1 16.1 18.8 15.9L15.8 13.7V10.3Z" fill="white"/>
    </svg>
    {/* Official Google Meet Logo */}
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M13 12L16.5 9V15L13 12Z" fill="#00AA47"/>
      <path d="M4 8C4 6.89543 4.89543 6 6 6H13V12H4V8Z" fill="#EA4335"/>
      <path d="M4 12H13V18H6C4.89543 18 4 17.1046 4 16V12Z" fill="#4285F4"/>
      <path d="M13 6H16C17.1046 6 18 6.89543 18 8V9L13 12V6Z" fill="#FBBC04"/>
      <path d="M13 12L18 15V16C18 17.1046 17.1046 18 16 18H13V12Z" fill="#00832D"/>
    </svg>
  </div>
);

const SaaSTaxLogo = () => (
  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/90 shadow-lg shadow-orange-500/10 p-1.5 flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
    <div className="grid grid-cols-2 gap-1 w-full h-full">
      {/* Calendly */}
      <div className="rounded-lg bg-[#006BFF] flex items-center justify-center text-white font-extrabold text-[10px] shadow-2xs" title="Calendly">
        C
      </div>
      {/* Zapier */}
      <div className="rounded-lg bg-[#FF4F00] flex items-center justify-center text-white font-black text-xs shadow-2xs" title="Zapier">
        _
      </div>
      {/* Read AI / Notes */}
      <div className="rounded-lg bg-[#8B5CF6] flex items-center justify-center text-white font-bold text-[9px] shadow-2xs" title="Read AI">
        AI
      </div>
      {/* Monthly Tax */}
      <div className="rounded-lg bg-[#EF4444] flex items-center justify-center text-white font-black text-[10px] shadow-2xs" title="$50/mo Tax">
        $$$
      </div>
    </div>
  </div>
);

const PaywallLimitLogo = () => (
  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EF4444] to-[#DC2626] shadow-lg shadow-red-500/25 p-2 flex flex-col items-center justify-center text-white group-hover:rotate-6 transition-transform duration-300">
    <div className="text-[9px] font-black tracking-widest uppercase leading-none opacity-90 mb-0.5">LIMIT</div>
    <div className="text-sm font-black tracking-tight leading-none">5 / 5</div>
    <div className="w-8 h-1 bg-white/40 rounded-full mt-1 overflow-hidden">
      <div className="w-full h-full bg-white rounded-full animate-pulse" />
    </div>
  </div>
);

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      num: '01',
      tag: 'Problem 01',
      title: 'The Zoom & Meet Silo',
      desc: 'You finish a 45-minute sales demo. The client agreed to 3 key milestones. Who writes the tasks? Who updates the CRM?',
      badge: 'Siloed Data',
      color: 'blue',
      renderIcon: () => <ZoomMeetLogo />,
      badgeColor: 'text-blue-600',
      dotColor: 'bg-blue-500',
    },
    {
      num: '02',
      tag: 'Problem 02',
      title: 'The $50/Month Per-Seat Add-on Tax',
      desc: 'Zoom charges for meetings. Read AI charges $20/seat for notes. Calendly charges for scheduling. Zapier charges to connect them.',
      badge: 'Recurring Tax',
      color: 'orange',
      renderIcon: () => <SaaSTaxLogo />,
      badgeColor: 'text-orange-600',
      dotColor: 'bg-orange-500',
    },
    {
      num: '03',
      tag: 'Problem 03',
      title: 'The 5-Meeting Limit Wall',
      desc: 'Free note-takers cut you off right in the middle of your busiest week with sudden paywalls.',
      badge: 'Arbitrary Limits',
      color: 'red',
      renderIcon: () => <PaywallLimitLogo />,
      badgeColor: 'text-red-600',
      dotColor: 'bg-red-500',
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
            <span>The Broken Status Quo</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-morphe-navy tracking-tight leading-tight mb-6">
            Why Traditional Meeting Stacks Are Costing You Deals &amp; Revenue
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Legacy video calling apps weren't designed to close sales or sync client commitments.
          </p>
        </motion.div>

        {/* 3 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((p, idx) => {
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
                  <div className="mb-6">
                    {p.renderIcon()}
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
