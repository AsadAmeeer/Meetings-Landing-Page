import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the MorpheLabs AI Bot join external Zoom or Google Meet calls?",
      a: "Simply paste the meeting URL into your Meetings tab. Our self-hosted worker deploys a headless instance that enters the room as “MorpheLabs AI Assistant” (or your custom company name), records the audio, and pushes the notes directly into your CRM."
    },
    {
      q: "Is there any limit on how many meetings I can transcribe?",
      a: "No. Unlike Read AI (5 meetings/mo) or Otter (300 mins/mo), MorpheLabs Meetings provides unlimited transcription and summaries across all your calls."
    },
    {
      q: "Can I assign action items directly to my team?",
      a: "Yes. Every detected action item has an “Add to CRM Tasks” button that links the task, owner, and due date directly to your project boards and lead records."
    },
    {
      q: "Where is my meeting audio stored?",
      a: "Audio and transcripts remain isolated inside your organization's private tenancy. Your proprietary company conversations are never shared or used to train third-party public AI models."
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 relative bg-slate-50/70 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-700 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-morphe-navy tracking-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Everything you need to know about MorpheLabs Meetings and AI bot deployment.
          </p>
        </motion.div>

        {/* Accordion FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-card rounded-2xl transition-all overflow-hidden ${isOpen ? 'ring-2 ring-purple-500/60 shadow-lg bg-white' : 'hover:border-purple-200'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-display font-bold text-base md:text-lg text-morphe-navy cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-extrabold shadow-2xs">
                      0{idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-purple-50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
