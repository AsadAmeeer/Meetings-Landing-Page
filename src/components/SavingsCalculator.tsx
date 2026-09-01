import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, DollarSign, ArrowRight, CheckCircle2, Zap, TrendingDown } from 'lucide-react';

export const SavingsCalculator: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<5 | 15 | 50 | 'custom'>(15);
  const [customSeats, setCustomSeats] = useState<number>(15);

  const getSavings = (seats: number) => {
    return seats * 480;
  };

  const currentSavings = selectedTier === 'custom' ? getSavings(customSeats) : getSavings(selectedTier);
  const currentSeats = selectedTier === 'custom' ? customSeats : selectedTier;

  const tiers = [
    {
      seats: 5,
      name: 'Small Team (5 seats)',
      badge: 'Startup Stack',
      badgeColor: 'bg-pink-100 text-pink-700',
      saving: '$2,400',
      desc: 'Replaces Zoom + Read AI ($20/seat)',
      replaces: ['$100/mo Zoom Pro', '$100/mo Read AI', 'Calendly + Zapier connectors']
    },
    {
      seats: 15,
      name: 'Growth Agency (15 seats)',
      badge: 'Most Popular',
      badgeColor: 'bg-purple-100 text-purple-700',
      saving: '$7,200',
      desc: 'Replaces separate meeting note-taker subscriptions',
      replaces: ['$300/mo Zoom Business', '$300/mo Note-Takers', 'Automated CRM sync included']
    },
    {
      seats: 50,
      name: 'Mid-Market (50 seats)',
      badge: 'High Velocity',
      badgeColor: 'bg-indigo-100 text-indigo-700',
      saving: '$24,000',
      desc: 'Saves enterprise recurring SaaS add-on seat bloat',
      replaces: ['$1,000/mo Enterprise Video', '$1,000/mo AI Transcripts', 'Private database tenancy']
    }
  ];

  return (
    <section id="calculator" className="py-20 lg:py-32 relative bg-gradient-to-b from-[#f8fafc] via-[#fdf4ff]/40 to-[#f8fafc] overflow-hidden">
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
            <Calculator className="w-3.5 h-3.5" />
            <span>Eliminate Per-Seat Add-on Taxes</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-morphe-navy tracking-tight mb-4">
            TCO Savings Calculator
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            See how much your organization saves every year with 100% unlimited meetings and AI summaries.
          </p>
        </motion.div>

        {/* 3 Selectable Pricing / Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {tiers.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              onClick={() => { setSelectedTier(t.seats as any); setCustomSeats(t.seats); }}
              className={`glass-card rounded-3xl p-8 cursor-pointer transition-all duration-300 relative overflow-hidden ${selectedTier === t.seats ? 'ring-2 ring-purple-500 shadow-2xl scale-[1.03] bg-white' : 'hover:shadow-xl'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${t.badgeColor}`}>
                  {t.badge}
                </span>
                {selectedTier === t.seats && <CheckCircle2 className="w-5 h-5 text-purple-600 animate-pulse" />}
              </div>

              <h3 className="font-display font-bold text-xl text-morphe-navy mb-2">
                {t.name}
              </h3>

              <div className="my-6">
                <div className="text-4xl lg:text-5xl font-display font-extrabold text-gradient-primary">
                  Save {t.saving} / year
                </div>
                <span className="text-xs text-slate-500 mt-1 block">{t.desc}</span>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-600 font-medium">
                {t.replaces.map((r, rIdx) => (
                  <div key={rIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Calculator Slider Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-white border border-purple-100 p-8 shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-800">
                Custom Team Size: <span className="text-purple-600 text-lg font-display font-extrabold">{currentSeats} Seats</span>
              </label>
              <span className="text-xs text-slate-500">Drag to adjust</span>
            </div>

            <input 
              type="range"
              min="1"
              max="200"
              value={currentSeats}
              onChange={(e) => {
                setSelectedTier('custom');
                setCustomSeats(Number(e.target.value));
              }}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />

            <div className="flex justify-between text-[10px] text-slate-400 font-bold">
              <span>1 Seat</span>
              <span>50 Seats</span>
              <span>100 Seats</span>
              <span>200 Seats</span>
            </div>
          </div>

          <div className="md:border-l md:border-slate-100 md:pl-8 flex flex-col items-start md:items-end justify-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Estimated Annual Savings</span>
            <div className="text-3xl lg:text-4xl font-display font-extrabold text-gradient-primary my-1">
              ${currentSavings.toLocaleString()} / yr
            </div>
            <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
              <TrendingDown className="w-3.5 h-3.5" /> 100% Elimination of Per-Seat Tax
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
