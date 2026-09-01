import React from 'react';
import { Sparkles, ShieldCheck, Radio, CheckCircle2, Lock, FileText, CheckSquare, Zap } from 'lucide-react';

interface HeroMeetingMockupProps {
  onOpenInstantMeeting: () => void;
}

export const HeroMeetingMockup: React.FC<HeroMeetingMockupProps> = ({ onOpenInstantMeeting: _onOpenInstantMeeting }) => {
  return (
    <div className="relative w-full max-w-3xl mx-auto py-6 group selection:bg-none">
      
      {/* ========================================================================= */}
      {/* ATTRACTIVE & PROFESSIONAL FUTURISTIC BACKGROUND ANIMATION LAYERS */}
      {/* ========================================================================= */}
      
      {/* Layer 1: Breathing Neon Aurora Glow Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[620px] h-[320px] sm:h-[400px] bg-gradient-to-tr from-pink-500/25 via-purple-600/30 to-blue-500/25 rounded-[3rem] blur-3xl pointer-events-none -z-10 animate-pulse-slow" />

      {/* Layer 2: Slow-Rotating Dashed Tech Orbit Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] pointer-events-none -z-10 animate-spin-slow">
        <div className="w-full h-full rounded-full border-2 border-dashed border-purple-400/30 shadow-[0_0_20px_rgba(168,85,247,0.15)]" />
      </div>

      {/* Layer 3: Counter-Rotating Outer Orbit Ring with Orbiting Glowing Particles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[640px] h-[500px] sm:h-[640px] pointer-events-none -z-10 animate-spin-reverse">
        <div className="w-full h-full rounded-full border border-purple-500/20 relative">
          {/* Orbiting Particle 1: Pink Sparkle */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-pink-400 shadow-[0_0_15px_#ec4899] animate-pulse" />
          {/* Orbiting Particle 2: Cyan Neon */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_#06b6d4] animate-pulse delay-100" />
          {/* Orbiting Particle 3: Violet Glow */}
          <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_12px_#a855f7]" />
          {/* Orbiting Particle 4: Indigo Glow */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_12px_#6366f1]" />
        </div>
      </div>

      {/* Layer 4: Central Radial Ambient Beam Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.22)_0%,rgba(236,72,153,0.12)_45%,transparent_70%)] pointer-events-none -z-10" />
      
      {/* ========================================================================= */}
      {/* FLOATING CARD 1: TOP-CENTER AI ASSISTANT CARD (Dark Glowing Glass) */}
      {/* ========================================================================= */}
      <div className="absolute -top-3 left-1/3 -translate-x-1/2 z-30 animate-float-slow hidden sm:flex flex-col gap-1.5 bg-slate-900/90 border border-purple-500/40 backdrop-blur-xl p-3 px-4 rounded-2xl shadow-[0_15px_35px_rgba(168,85,247,0.3)] min-w-[240px]">
        <div className="text-[10px] text-purple-400 font-extrabold tracking-widest uppercase flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-pink-400" />
          <span>AI ASSISTANT:</span>
        </div>
        <div className="text-xs text-white font-bold tracking-tight">
          Transcribing &amp; Summarizing
        </div>
        
        {/* Animated Waveform & Progress Bar matching reference image */}
        <div className="flex items-center gap-1 h-4 my-0.5">
          <div className="w-1 bg-gradient-to-t from-pink-500 to-purple-400 rounded-full h-3 animate-pulse" />
          <div className="w-1 bg-gradient-to-t from-purple-500 to-indigo-400 rounded-full h-4 animate-pulse delay-75" />
          <div className="w-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-full h-2 animate-pulse delay-150" />
          <div className="w-1 bg-gradient-to-t from-pink-500 to-purple-400 rounded-full h-4 animate-pulse delay-100" />
          <div className="w-1 bg-gradient-to-t from-purple-500 to-pink-400 rounded-full h-3.5 animate-pulse delay-200" />
          <div className="w-1 bg-gradient-to-t from-blue-500 to-indigo-400 rounded-full h-2.5 animate-pulse delay-300" />
          <div className="w-1 bg-gradient-to-t from-purple-500 to-pink-400 rounded-full h-4 animate-pulse delay-75" />
          
          <svg viewBox="0 0 100 20" className="w-24 h-4 text-purple-400 fill-none stroke-current stroke-2 ml-1">
            <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" />
          </svg>
        </div>

        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 w-3/4 rounded-full" />
        </div>
      </div>


      {/* ========================================================================= */}
      {/* MAIN MONITOR DASHBOARD DISPLAY (Dark High-End Screen) */}
      {/* ========================================================================= */}
      <div className="relative rounded-2xl bg-slate-950 border-2 border-purple-500/40 shadow-[0_30px_70px_rgba(0,0,0,0.85)] overflow-hidden transition-all duration-500">
        
        {/* Browser Top Application Bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800/90 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>

          {/* URL Search Pill */}
          <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-950/90 border border-slate-800 text-[10px] font-mono text-purple-300 shadow-inner">
            <Lock className="w-2.5 h-2.5 text-emerald-400 flex-shrink-0" />
            <span>morphelabs.org/room/40-participants</span>
          </div>

          <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-[9px] font-extrabold tracking-wider uppercase">
            <Radio className="w-2.5 h-2.5 text-pink-400 animate-pulse" />
            <span>LIVE HD</span>
          </div>
        </div>

        {/* DASHBOARD SCREEN CONTENT SPLIT (Left: 40-Participant Video Grid, Right: AI Summary Drawer) */}
        <div className="grid grid-cols-1 md:grid-cols-12 relative overflow-hidden bg-slate-950">
          
          {/* LEFT 7 COLS: Video Grid Screenshot */}
          <div className="md:col-span-8 relative overflow-hidden group/screen min-h-[220px] sm:min-h-[250px]">
            <img
              src="/morphelabs_meeting_screenshot.png"
              alt="MorpheLabs Meetings Platform - 40 Participant Video Grid"
              className="w-full h-full object-cover group-hover/screen:scale-105 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

            {/* Floating Glass Pill inside video screen */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-purple-500/40 text-[10px] font-bold text-white shadow-xl">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>AI Summarizer Active</span>
            </div>
          </div>

          {/* RIGHT 4 COLS: AI Summary Drawer */}
          <div className="md:col-span-4 bg-slate-900/95 border-l border-slate-800 p-3 sm:p-4 text-left flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2.5">
                <span className="font-display font-extrabold text-xs text-white flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-pink-400" />
                  Summary
                </span>
                <span className="px-2 py-0.5 rounded-md bg-purple-950/80 border border-purple-500/40 text-purple-300 text-[9px] font-bold">
                  ⏺ Record
                </span>
              </div>

              <p className="text-[10px] text-slate-300 leading-relaxed mb-3">
                Executive AI meeting summary generated. Deliverables and CRM pipeline milestones confirmed.
              </p>

              {/* Action Items List */}
              <div className="space-y-1.5">
                <div className="text-[10px] font-extrabold text-pink-300 uppercase tracking-wider flex items-center gap-1">
                  <CheckSquare className="w-3 h-3 text-pink-400" />
                  <span>Action Items</span>
                </div>
                <div className="text-[9.5px] text-slate-300 space-y-1">
                  <div className="flex items-start gap-1">
                    <span className="text-pink-400 font-bold">•</span>
                    <span>Client agreed to scope proposal by Friday 5 PM.</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Provision dedicated private database tenancy.</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>Auto-sync notes directly into Salesforce CRM.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Summaries Badge */}
            <div className="pt-2 border-t border-slate-800/80">
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-400" />
                <span>Action Summaries ⚡</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* MONITOR METALLIC STAND BASE */}
      {/* ========================================================================= */}
      <div className="relative z-10">
        <div className="w-24 sm:w-28 h-6 sm:h-8 bg-gradient-to-b from-slate-800 via-slate-850 to-slate-900 mx-auto border-x border-slate-700/60 shadow-xl flex justify-center items-end">
          <div className="w-full h-1 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700" />
        </div>
        <div className="w-48 sm:w-56 h-2.5 sm:h-3 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 rounded-b-xl mx-auto border-t border-slate-600/70 shadow-2xl" />
      </div>

      {/* ========================================================================= */}
      {/* FLOATING CARD 3: BOTTOM-LEFT CRM SYNC CARD */}
      {/* ========================================================================= */}
      <div className="absolute -bottom-5 left-4 z-30 animate-float-slow hidden sm:flex flex-col gap-1.5 bg-slate-900/90 border border-purple-500/40 backdrop-blur-xl p-3 px-4 rounded-2xl shadow-[0_15px_35px_rgba(168,85,247,0.3)] min-w-[220px]">
        <div className="text-[10px] text-purple-400 font-extrabold tracking-widest uppercase">
          CRM SYNC:
        </div>
        <div className="text-xs text-white font-bold tracking-tight">
          Salesforce / HubSpot / Zoho
        </div>

        <div className="flex items-center gap-2 pt-0.5">
          <div className="w-6 h-6 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center p-1">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#00A1E0]"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>
          </div>
          <div className="w-6 h-6 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center p-1">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#FF7A59]"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
          </div>
          <div className="w-6 h-6 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center p-1">
            <svg viewBox="0 0 24 24" className="w-4 h-4"><rect width="9" height="9" x="2" y="2" fill="#E42528" rx="2"/><rect width="9" height="9" x="13" y="2" fill="#2266B3" rx="2"/><rect width="9" height="9" x="2" y="13" fill="#009746" rx="2"/><rect width="9" height="9" x="13" y="13" fill="#F4A21C" rx="2"/></svg>
          </div>

          <CheckCircle2 className="w-4 h-4 text-emerald-400 ml-auto" />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FLOATING CARD 4: BOTTOM-RIGHT RATING BADGE */}
      {/* ========================================================================= */}
      <div className="absolute -bottom-4 -right-2 z-30 animate-float bg-white/95 backdrop-blur-xl text-morphe-navy p-2.5 px-3.5 rounded-2xl shadow-[0_15px_35px_rgba(168,85,247,0.3)] border border-purple-100 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 text-white flex items-center justify-center font-extrabold text-xs shadow-md">
          5.0
        </div>
        <div>
          <div className="flex items-center gap-0.5 text-amber-400 text-[10px]">
            ★★★★★
          </div>
          <span className="text-[11px] font-bold text-morphe-navy block leading-tight">100% Unlimited Meetings</span>
          <span className="text-[9px] text-slate-500">Zero Per-Seat AI Tax</span>
        </div>
      </div>

    </div>
  );
};
