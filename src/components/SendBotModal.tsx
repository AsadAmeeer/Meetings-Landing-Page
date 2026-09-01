import React, { useState } from 'react';
import { X, Bot, Link, CheckCircle, ArrowRight, Shield, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SendBotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SendBotModal: React.FC<SendBotModalProps> = ({ isOpen, onClose }) => {
  const [meetingUrl, setMeetingUrl] = useState('');
  const [botName, setBotName] = useState('MorpheLabs AI Assistant');
  const [isDispatching, setIsDispatching] = useState(false);
  const [step, setStep] = useState<number>(0);

  if (!isOpen) return null;

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!meetingUrl.trim()) return;

    setIsDispatching(true);
    setStep(1);

    setTimeout(() => setStep(2), 1200);
    setTimeout(() => setStep(3), 2400);
    setTimeout(() => {
      setStep(4);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 3600);
  };

  const handleReset = () => {
    setIsDispatching(false);
    setStep(0);
    setMeetingUrl('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-morphe-navy/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-100 p-6 md:p-8">
        {/* Modal Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20 text-white">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-morphe-navy">
              Dispatch MorpheLabs AI Bot
            </h3>
            <p className="text-xs text-slate-500">
              Send your AI assistant to any Zoom, Google Meet, or Teams call with 0 per-meeting limits.
            </p>
          </div>
        </div>

        {!isDispatching ? (
          <form onSubmit={handleDispatch} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                External Meeting Link (Zoom / Meet / Teams)
              </label>
              <div className="relative">
                <Link className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input 
                  type="url"
                  required
                  value={meetingUrl}
                  onChange={(e) => setMeetingUrl(e.target.value)}
                  placeholder="https://zoom.us/j/9876543210 or https://meet.google.com/abc-defg-hij"
                  className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Custom Bot Identity Name
              </label>
              <input 
                type="text"
                value={botName}
                onChange={(e) => setBotName(e.target.value)}
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all"
              />
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 flex items-start gap-3 text-xs text-purple-900">
              <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block mb-0.5">Private & Unshared Data Guarantee</strong>
                Your meeting audio and transcripts remain strictly isolated within your private MorpheLabs tenant.
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-morphe-navy text-white text-xs font-bold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:scale-105 transition-all"
              >
                <span>🤖 Dispatch Bot Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          <div className="py-6 space-y-6 text-center">
            {step < 4 ? (
              <div className="space-y-4">
                <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-purple-100" />
                  <div className="absolute inset-0 rounded-full border-4 border-purple-600 border-t-transparent animate-spin" />
                  <Bot className="w-8 h-8 text-purple-600 animate-pulse" />
                </div>
                <h4 className="font-display font-bold text-lg text-morphe-navy">
                  Deploying Headless Worker...
                </h4>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="font-display font-bold text-xl text-morphe-navy">
                  Bot Successfully Joined Meeting!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  "{botName}" has entered the call room. Multi-speaker transcripts and CRM task extractions are actively syncing.
                </p>
              </div>
            )}

            {/* Status Steps */}
            <div className="space-y-2 text-left bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
                <CheckCircle className={`w-4 h-4 ${step >= 1 ? 'text-emerald-600' : 'text-slate-300'}`} />
                <span>1. Verified external room URL structure</span>
              </div>
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
                <CheckCircle className={`w-4 h-4 ${step >= 2 ? 'text-emerald-600' : 'text-slate-300'}`} />
                <span>2. Launched isolated headless browser worker</span>
              </div>
              <div className={`flex items-center gap-2 ${step >= 3 ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
                <CheckCircle className={`w-4 h-4 ${step >= 3 ? 'text-emerald-600' : 'text-slate-300'}`} />
                <span>3. Admitted as "{botName}"</span>
              </div>
              <div className={`flex items-center gap-2 ${step >= 4 ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
                <CheckCircle className={`w-4 h-4 ${step >= 4 ? 'text-emerald-600' : 'text-slate-300'}`} />
                <span>4. Connected live stream to MorpheLabs CRM pipeline</span>
              </div>
            </div>

            {step === 4 && (
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                >
                  Dispatch Another Link
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-morphe-navy hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-md"
                >
                  Return to Dashboard
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
