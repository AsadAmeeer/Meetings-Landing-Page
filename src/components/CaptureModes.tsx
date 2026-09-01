import React, { useState } from 'react';
import { Video, Bot, Upload, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, FileAudio, Play, Layers } from 'lucide-react';

interface CaptureModesProps {
  onOpenInstantMeeting: () => void;
  onOpenSendBot: () => void;
}

export const CaptureModes: React.FC<CaptureModesProps> = ({ onOpenInstantMeeting, onOpenSendBot }) => {
  const [activeMode, setActiveMode] = useState<1 | 2 | 3>(1);

  // Mode 2 state
  const [botUrlInput, setBotUrlInput] = useState('');
  const [botStatus, setBotStatus] = useState<string | null>(null);

  // Mode 3 state
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleSimulateBot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!botUrlInput.trim()) return;
    setBotStatus('Deploying headless worker... Bot "MorpheLabs AI Assistant" joining room!');
    setTimeout(() => {
      setBotStatus('✅ Bot successfully joined meeting! Stream active & syncing to CRM.');
    }, 1500);
  };

  const handleSimulateFileUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    setUploadComplete(false);

    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadComplete(true);
          return 100;
        }
        return prev + 25;
      });
    }, 300);
  };

  return (
    <section id="capture-modes" className="py-20 lg:py-32 relative bg-gradient-to-b from-[#f8fafc] via-[#f5f3ff]/40 to-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/70 border border-purple-200 text-purple-700 text-xs font-extrabold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Versatile Meeting Capture</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-morphe-navy tracking-tight mb-4">
            The 3 Capture Modes
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Host directly in MorpheLabs, send an AI bot to external calls, or process past audio files.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveMode(1)}
            className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${activeMode === 1 ? 'bg-morphe-navy text-white shadow-xl shadow-morphe-navy/20 scale-105' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'}`}
          >
            <Video className="w-4 h-4 text-pink-400" />
            <span>MODE 1: In-CRM HD Video</span>
          </button>

          <button
            onClick={() => setActiveMode(2)}
            className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${activeMode === 2 ? 'bg-morphe-navy text-white shadow-xl shadow-morphe-navy/20 scale-105' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'}`}
          >
            <Bot className="w-4 h-4 text-purple-400" />
            <span>MODE 2: Custom AI Bot</span>
          </button>

          <button
            onClick={() => setActiveMode(3)}
            className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${activeMode === 3 ? 'bg-morphe-navy text-white shadow-xl shadow-morphe-navy/20 scale-105' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'}`}
          >
            <Upload className="w-4 h-4 text-indigo-400" />
            <span>MODE 3: Universal File Import</span>
          </button>
        </div>

        {/* 3 Modes Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* MODE 1 CARD */}
          <div className={`glass-card rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${activeMode === 1 ? 'ring-2 ring-purple-500 shadow-2xl scale-[1.02] bg-white' : 'opacity-90'}`}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/20">
                  <Video className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-pink-100 text-pink-700 border border-pink-200">
                  Native Browser Room
                </span>
              </div>

              <span className="text-xs font-extrabold text-pink-600 uppercase tracking-widest block mb-2">
                MODE 1
              </span>

              <h3 className="font-display font-bold text-2xl text-morphe-navy mb-4">
                In-CRM HD Video Meetings
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Host instant or scheduled video calls right in MorpheLabs. Zero downloads, breakout rooms, screen sharing, voice isolation, and verified 15-minute attendance tracking.
              </p>
            </div>

            {/* Interactive Widget Box for Mode 1 */}
            <div className="mt-4 p-4 rounded-2xl bg-purple-50/80 border border-purple-200 text-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs border-b border-purple-200/80 pb-2">
                <span className="text-pink-600 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> HD Audio Active
                </span>
                <span className="text-[10px] text-slate-500 font-semibold">Zero Downloads</span>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-600 font-medium">
                <span>Breakout Rooms Enabled</span>
                <span className="text-emerald-600 font-bold">Voice Isolated</span>
              </div>

              <button
                onClick={onOpenInstantMeeting}
                className="w-full py-2.5 rounded-xl bg-[#FEDBFC] hover:bg-[#fca5f9] text-slate-900 text-xs font-extrabold border border-[#f59ef2]/60 shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-purple-700 text-purple-700" />
                Test In-CRM Room Now
              </button>
            </div>
          </div>

          {/* MODE 2 CARD */}
          <div className={`glass-card rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${activeMode === 2 ? 'ring-2 ring-purple-500 shadow-2xl scale-[1.02] bg-white' : 'opacity-90'}`}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                  <Bot className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                  External Call Bot
                </span>
              </div>

              <span className="text-xs font-extrabold text-purple-600 uppercase tracking-widest block mb-2">
                MODE 2
              </span>

              <h3 className="font-display font-bold text-2xl text-morphe-navy mb-4">
                The Custom AI Meeting Bot
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Got a client who insists on Zoom, Google Meet, or Microsoft Teams? Simply paste the link. The “MorpheLabs AI Assistant” joins your call, captures speaker-by-speaker transcripts, and returns the notes to your CRM.
              </p>
            </div>

            {/* Interactive URL Input Simulation for Mode 2 */}
            <div className="mt-4 p-4 rounded-2xl bg-purple-50/80 border border-purple-200 text-slate-800 space-y-3">
              <form onSubmit={handleSimulateBot} className="space-y-2">
                <div className="text-[11px] text-purple-900 font-bold flex items-center justify-between">
                  <span>Paste Zoom / Meet Link:</span>
                  <span className="text-[10px] text-purple-600 font-semibold">Headless Worker</span>
                </div>
                <input 
                  type="text" 
                  value={botUrlInput}
                  onChange={(e) => setBotUrlInput(e.target.value)}
                  placeholder="https://zoom.us/j/123456789"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-purple-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-500 shadow-2xs"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-[#FEDBFC] hover:bg-[#fca5f9] text-slate-900 text-xs font-extrabold border border-[#f59ef2]/60 shadow-xs transition-colors cursor-pointer"
                >
                  🤖 Dispatch AI Assistant
                </button>
              </form>

              {botStatus && (
                <div className="p-2 rounded-xl bg-purple-100 border border-purple-300 text-[11px] text-purple-900 font-semibold">
                  {botStatus}
                </div>
              )}
            </div>
          </div>

          {/* MODE 3 CARD */}
          <div className={`glass-card rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${activeMode === 3 ? 'ring-2 ring-purple-500 shadow-2xl scale-[1.02] bg-white' : 'opacity-90'}`}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-morphe-navy flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                  <Upload className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">
                  Audio &amp; Video Processor
                </span>
              </div>

              <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest block mb-2">
                MODE 3
              </span>

              <h3 className="font-display font-bold text-2xl text-morphe-navy mb-4">
                Universal File Import
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Upload any past recording (.mp3, .wav, .m4a, .mp4). MorpheLabs extracts multi-speaker transcripts, executive summaries, sentiment, and action items in seconds.
              </p>
            </div>

            {/* Interactive File Dropzone Simulation for Mode 3 */}
            <div className="mt-4 p-4 rounded-2xl bg-purple-50/80 border border-purple-200 text-slate-800 space-y-3 text-center">
              <div 
                onClick={handleSimulateFileUpload}
                className="cursor-pointer border-2 border-dashed border-purple-200 hover:border-purple-400 bg-white/80 rounded-xl p-4 transition-colors group shadow-2xs"
              >
                <FileAudio className="w-7 h-7 text-purple-600 mx-auto mb-1.5 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-bold text-slate-900">Click to Upload Past Audio</div>
                <div className="text-[10px] text-slate-500">Supports .mp3, .wav, .m4a, .mp4</div>
              </div>

              {isUploading && (
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-purple-800 font-semibold">
                    <span>Extracting Multi-Speaker Audio...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-full transition-all duration-300" style={{ width: `${uploadProgress}%` }} />
                  </div>
                </div>
              )}

              {uploadComplete && (
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-[11px] text-emerald-800 flex items-center justify-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Transcript &amp; CRM Tasks Generated!</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
