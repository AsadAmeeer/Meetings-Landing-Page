import React from 'react';
import { motion } from 'framer-motion';
import { Video, Bot, Upload, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Smartphone, Play } from 'lucide-react';

interface MainLayoutShowcaseProps {
  onOpenInstantMeeting: () => void;
  onOpenSendBot: () => void;
}

export const MainLayoutShowcase: React.FC<MainLayoutShowcaseProps> = ({ onOpenInstantMeeting, onOpenSendBot }) => {
  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-24 overflow-hidden">
      
      {/* GIANT WHITE FLOATING CARD CONTAINER */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl border border-purple-100 p-8 sm:p-12 lg:p-16 relative overflow-hidden"
      >
        
        {/* Ambient Top Subtle Gradient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-100/50 via-purple-100/30 to-transparent rounded-bl-full pointer-events-none -z-10" />

        {/* TOP ROW: Left Details + Right Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* LEFT COLUMN: Agency / Product Overview (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            
            <div className="text-xs font-extrabold tracking-widest text-purple-600 uppercase">
              THE 3 CAPTURE MODES
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-morphe-navy tracking-tight leading-tight">
              A Unified Meeting Suite Focused on <span className="text-gradient-primary">Intelligence &amp; Growth</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We combine native browser video rooms, custom AI bot dispatching, and universal audio file imports to deliver meeting intelligence that automatically updates your CRM.
            </p>

            <div>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenInstantMeeting}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-morphe-navy text-white text-xs font-bold shadow-lg shadow-purple-500/20 transition-transform cursor-pointer"
              >
                <span>More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* 3 Horizontal Micro-Feature Badges */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-3">
              <motion.div 
                whileHover={{ y: -4 }}
                className="p-3 rounded-2xl bg-purple-50/60 border border-purple-100 text-center transition-shadow hover:shadow-md"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-1">
                  <Video className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-morphe-navy block">In-CRM Video</span>
                <span className="text-[9px] text-slate-500">Zero Downloads</span>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4 }}
                className="p-3 rounded-2xl bg-pink-50/60 border border-pink-100 text-center transition-shadow hover:shadow-md"
              >
                <div className="w-8 h-8 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center mx-auto mb-1">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-morphe-navy block">AI Bot</span>
                <span className="text-[9px] text-slate-500">Zoom &amp; Meet</span>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4 }}
                className="p-3 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-center transition-shadow hover:shadow-md"
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-1">
                  <Upload className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-morphe-navy block">File Import</span>
                <span className="text-[9px] text-slate-500">.MP3, .MP4, .WAV</span>
              </motion.div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Featured Card Showcase Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Primary Featured Card: 40-Participant Room Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="sm:col-span-1 glass-card rounded-3xl p-6 border border-purple-100 shadow-xl flex flex-col justify-between group transition-all"
            >
              <div className="relative rounded-2xl overflow-hidden mb-4 bg-slate-900 border border-slate-800">
                <img 
                  src="/morphelabs_meeting_screenshot.png" 
                  alt="Fintex Dashboard UI" 
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-pink-500/80 text-white text-[10px] font-bold">
                  40-Participant Grid
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-morphe-navy mb-1 group-hover:text-purple-600 transition-colors">
                  In-CRM HD Video Meetings
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Host instant or scheduled calls with zero downloads and 15m verified attendance tracking.
                </p>
                <div className="flex items-center justify-between text-xs font-bold text-purple-600">
                  <span>Explore Mode 1</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Secondary Cards Stack (Right Side) */}
            <div className="space-y-6 flex flex-col justify-between">
              
              {/* Card 2: AI Bot Dispatcher */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-3xl p-6 border border-purple-100 shadow-lg group transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-md">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-morphe-navy">Custom AI Meeting Bot</h4>
                    <span className="text-[10px] text-purple-600 font-semibold">Zoom, Meet &amp; Teams</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Dispatch your AI bot to any external meeting URL to capture speaker transcripts directly into your CRM.
                </p>
                <button
                  onClick={onOpenSendBot}
                  className="text-xs font-bold text-pink-600 hover:text-pink-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Dispatch Bot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>

              {/* Card 3: Universal File Import */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-3xl p-6 border border-purple-100 shadow-lg group transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-md">
                    <Upload className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-morphe-navy">Universal File Import</h4>
                    <span className="text-[10px] text-indigo-600 font-semibold">.mp3, .wav, .m4a, .mp4</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Extract multi-speaker transcripts and executive summaries from past audio recordings in seconds.
                </p>
              </motion.div>

            </div>

          </div>

        </div>

        {/* BOTTOM STATS BAR */}
        <div className="pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: '100%+', label: 'Unlimited Meetings' },
            { stat: '99.8%', label: 'AI Speaker Accuracy' },
            { stat: '15m+', label: 'Verified Attendance' },
            { stat: '$0', label: 'Per-Seat AI Tax' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-2xs hover:shadow-md transition-all"
            >
              <div className="text-3xl lg:text-4xl font-display font-extrabold text-gradient-primary">
                {item.stat}
              </div>
              <span className="text-xs font-bold text-slate-600 mt-1 block">{item.label}</span>
            </motion.div>
          ))}
        </div>

      </motion.div>

      {/* BOTTOM 3 MOBILE PHONES SHOWCASE SECTION */}
      <div className="mt-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-700 text-xs font-extrabold uppercase tracking-wider mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile &amp; Cross-Platform Ready</span>
          </div>

          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-morphe-navy tracking-tight mb-2">
            Experience MorpheLabs Meetings Anywhere
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mb-12">
            Access your live video rooms, AI summaries, and CRM tasks seamlessly on iOS, Android, and Web.
          </p>
        </motion.div>

        {/* 3 Smartphone Frame Mockups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          
          {/* Phone Mockup 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative rounded-[2.5rem] bg-white border-4 border-purple-200/90 p-3 shadow-2xl shadow-purple-500/10 max-w-xs mx-auto group transition-transform duration-500"
          >
            <div className="w-24 h-4 bg-purple-100 rounded-full mx-auto mb-3" />
            <div className="relative rounded-[2rem] overflow-hidden bg-slate-50 p-4 border border-purple-100 space-y-4 text-left">
              <div className="flex items-center justify-between text-xs text-slate-900">
                <span className="font-bold text-pink-600">MorpheLabs</span>
                <span className="text-[10px] text-slate-500 font-semibold">Live Call</span>
              </div>

              <div className="p-3 rounded-2xl bg-purple-100/70 border border-purple-200 text-xs text-purple-900 space-y-1">
                <div className="font-bold text-purple-950">Weekly Progress Meeting</div>
                <div className="text-[11px] text-purple-700">40 Active Participants • HD Audio</div>
              </div>

              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80" 
                alt="Mobile Meeting Feed" 
                className="w-full h-36 object-cover rounded-2xl border border-purple-100"
              />

              <button 
                onClick={onOpenInstantMeeting}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold shadow-md hover:opacity-90 transition-opacity cursor-pointer"
              >
                Join Mobile Room
              </button>
            </div>
          </motion.div>

          {/* Phone Mockup 2 (Center Raised Phone) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -12, transition: { duration: 0.3 } }}
            className="relative rounded-[2.5rem] bg-white border-4 border-purple-400 p-3 shadow-2xl shadow-purple-500/20 max-w-xs mx-auto md:-translate-y-4 group transition-transform duration-500"
          >
            <div className="w-24 h-4 bg-purple-200 rounded-full mx-auto mb-3" />
            <div className="relative rounded-[2rem] overflow-hidden bg-purple-50/50 p-4 border border-purple-200 space-y-4 text-left">
              <div className="flex items-center justify-between text-xs text-slate-900">
                <span className="font-bold text-purple-700">Selected Work</span>
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-full">100% Synced</span>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-purple-200 text-xs text-slate-700 space-y-1.5 shadow-2xs">
                <div className="text-[10px] text-pink-600 font-bold uppercase tracking-wider">AI Bot Summary</div>
                <div className="font-semibold text-slate-900">"Sarah agreed to deliver proposal by Friday 5 PM."</div>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
                <div className="font-bold text-emerald-950 text-[11px]">CRM Task Created</div>
                <div className="text-[10px] text-emerald-700 font-medium">Assigned: Sarah Jenkins</div>
              </div>

              <button 
                onClick={onOpenSendBot}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold shadow-md hover:opacity-90 transition-opacity cursor-pointer"
              >
                Send AI Bot Link
              </button>
            </div>
          </motion.div>

          {/* Phone Mockup 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative rounded-[2.5rem] bg-white border-4 border-purple-200/90 p-3 shadow-2xl shadow-purple-500/10 max-w-xs mx-auto group transition-transform duration-500"
          >
            <div className="w-24 h-4 bg-purple-100 rounded-full mx-auto mb-3" />
            <div className="relative rounded-[2rem] overflow-hidden bg-slate-50 p-4 border border-purple-100 space-y-4 text-left">
              <div className="flex items-center justify-between text-xs text-slate-900">
                <span className="font-bold text-indigo-600">About Us</span>
                <span className="text-[10px] text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full font-bold">Tenancy</span>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-purple-100 text-xs text-slate-700 space-y-1 shadow-2xs">
                <div className="font-bold text-slate-900 text-xs">Private Data Storage</div>
                <p className="text-[10px] text-slate-500">Isolated Audio &amp; Transcripts</p>
              </div>

              <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-800">
                <div className="font-bold text-indigo-950 text-[11px]">Verified 15m+</div>
                <div className="text-[10px] text-indigo-600 font-medium">Attendance Audited</div>
              </div>

              <button 
                onClick={onOpenInstantMeeting}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
              >
                View Security Audit
              </button>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};
