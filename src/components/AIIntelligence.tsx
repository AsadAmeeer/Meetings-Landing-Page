import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, FileText, CheckSquare, TrendingUp, HelpCircle, ArrowRight, Sparkles, MessageSquare, Zap, Clock } from 'lucide-react';

export const AIIntelligence: React.FC = () => {
  const [copilotQuestion, setCopilotQuestion] = useState('What budget did the client mention in the second half?');
  const [copilotAnswer, setCopilotAnswer] = useState<{ answer: string; timestamp: string; confidence: string } | null>({
    answer: 'The client mentioned a target budget of $45,000 for Q3 implementation during the 24:18 mark, with zero objections raised.',
    timestamp: '24:18',
    confidence: '99.4%'
  });

  const promptOptions = [
    'What budget did the client mention in the second half?',
    'What were the key pricing objections?',
    'Who is responsible for the SSO setup?'
  ];

  const handleSelectPrompt = (prompt: string) => {
    setCopilotQuestion(prompt);
    if (prompt.includes('budget')) {
      setCopilotAnswer({
        answer: 'The client mentioned a target budget of $45,000 for Q3 implementation during the 24:18 mark, with zero objections raised.',
        timestamp: '24:18',
        confidence: '99.4%'
      });
    } else if (prompt.includes('pricing')) {
      setCopilotAnswer({
        answer: 'No formal pricing objections were raised. The client inquired about volume discounts for >50 seats.',
        timestamp: '18:42',
        confidence: '98.7%'
      });
    } else {
      setCopilotAnswer({
        answer: 'Marcus Vance was assigned to deliver custom SSO integration guidelines by next Tuesday.',
        timestamp: '31:05',
        confidence: '99.9%'
      });
    }
  };

  const steps = [
    { num: 1, title: 'Meeting Audio', desc: 'Stream or Upload', bg: 'bg-pink-100', text: 'text-pink-600' },
    { num: 2, title: 'AI Transcription', desc: 'Speaker Diarization', bg: 'bg-purple-100', text: 'text-purple-600' },
    { num: 3, title: 'Meeting Intelligence', desc: 'Intent & Sentiment', bg: 'bg-gradient-to-r from-pink-500 to-purple-600', text: 'text-white', highlight: true },
    { num: 4, title: 'Action Items', desc: 'Auto Detected', bg: 'bg-indigo-100', text: 'text-indigo-600' },
    { num: 5, title: 'CRM Tasks', desc: 'Assigned with Dates', bg: 'bg-emerald-100', text: 'text-emerald-600' }
  ];

  const featureCards = [
    {
      icon: FileText,
      title: 'Executive Summaries',
      desc: '4-sentence high-level overview of what was decided.',
      bg: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
    {
      icon: CheckSquare,
      title: 'Automated Task Extraction',
      desc: 'Spoken commitments automatically convert into CRM tasks assigned with deadlines.',
      bg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Sentiment & Deal Risk Scoring',
      desc: 'Understand if the client was enthusiastic, hesitant, or concerned about pricing.',
      bg: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    },
    {
      icon: HelpCircle,
      title: 'Interactive Meeting Copilot',
      desc: 'Ask questions and get instant answers with timestamp citations.',
      bg: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    }
  ];

  return (
    <section id="ai-intelligence" className="py-20 lg:py-32 relative bg-gradient-to-b from-[#f8fafc] via-[#faf9fe] to-[#f8fafc] text-slate-900 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-pink-300/20 via-purple-300/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-300/20 via-indigo-300/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Automated CRM Pipeline</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-morphe-navy tracking-tight mb-4">
            The AI Meeting Intelligence Engine
          </h2>

          <div className="inline-block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-bold text-lg sm:text-xl">
            Spoken Commitments → Actionable CRM Tasks
          </div>
        </motion.div>

        {/* Large Workflow Visualization Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-16 p-6 rounded-3xl bg-white border border-purple-100 shadow-xl backdrop-blur-xl"
        >
          <div className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-4 text-center">
            Real-Time Intelligence Workflow
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 items-center text-center text-xs">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={`p-3.5 rounded-2xl ${step.highlight ? 'bg-purple-50 border border-purple-200 ring-2 ring-purple-400/30 shadow-xs' : 'bg-slate-50 border border-slate-200 shadow-2xs'} flex flex-col items-center gap-1.5 ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <div className={`w-8 h-8 rounded-xl ${step.bg} ${step.text} flex items-center justify-center font-bold shadow-xs`}>
                  {step.num}
                </div>
                <span className={`font-bold ${step.highlight ? 'text-purple-900' : 'text-slate-900'}`}>{step.title}</span>
                <span className={`text-[10px] ${step.highlight ? 'text-purple-600 font-semibold' : 'text-slate-500'}`}>{step.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Grid: 4 Feature Cards + Interactive Copilot Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Feature Cards (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featureCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-3xl bg-white border border-purple-100 shadow-md hover:shadow-xl hover:border-purple-300 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-2xl ${card.bg} ${card.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-morphe-navy mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Copilot Dashboard (6 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 p-6 rounded-3xl bg-white border border-purple-100 shadow-2xl flex flex-col justify-between space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-500 animate-pulse" />
                <h4 className="font-display font-bold text-sm text-morphe-navy">Interactive Copilot Simulator</h4>
              </div>
              <span className="text-[10px] text-pink-700 bg-pink-100 px-2.5 py-0.5 rounded-full border border-pink-200 font-semibold">
                Live Query
              </span>
            </div>

            {/* Sample Prompts Chips */}
            <div>
              <label className="text-[11px] font-semibold text-slate-500 block mb-2">
                Click a sample query to test citation extraction:
              </label>
              <div className="flex flex-wrap gap-2">
                {promptOptions.map((prompt, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleSelectPrompt(prompt)}
                    className={`px-3 py-1.5 rounded-xl text-xs text-left transition-all cursor-pointer ${copilotQuestion === prompt ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                  >
                    {prompt}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Answer Display Card */}
            <AnimatePresence mode="wait">
              {copilotAnswer && (
                <motion.div 
                  key={copilotAnswer.timestamp}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-3"
                >
                  <div className="flex items-center justify-between text-xs text-purple-800 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-pink-500" /> Copilot Response
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold">
                      Confidence: {copilotAnswer.confidence}
                    </span>
                  </div>

                  <p className="text-xs text-slate-800 leading-relaxed font-medium">
                    "{copilotAnswer.answer}"
                  </p>

                  <div className="pt-2 border-t border-purple-200/80 flex items-center justify-between text-[11px]">
                    <span className="text-slate-600 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-purple-600" /> Timestamp Citation:
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-purple-200/80 text-purple-900 font-mono font-bold">
                      {copilotAnswer.timestamp}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
