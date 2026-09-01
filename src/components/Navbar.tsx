import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Sparkles, Menu, X, ArrowRight, Video, Bot } from 'lucide-react';

interface NavbarProps {
  onOpenInstantMeeting: () => void;
  onOpenSendBot: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInstantMeeting, onOpenSendBot }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-purple-100/90 shadow-sm py-3' : 'bg-white/80 backdrop-blur-md border-b border-purple-100/50 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center">
            <BrandLogo size="md" dark={false} />
          </a>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSendBot}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 hover:bg-purple-50 text-slate-700 hover:text-purple-700 text-xs font-semibold border border-slate-200/80 transition-all"
            >
              <Bot className="w-3.5 h-3.5 text-purple-600" />
              <span>Send AI Bot</span>
            </button>

            <button
              onClick={onOpenInstantMeeting}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-morphe-navy text-white text-xs font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Video className="w-4 h-4 text-pink-200" />
              <span>Launch Instant Meeting</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3 text-sm font-semibold text-slate-700">
            <a href="#capture-modes" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-600">Capture Modes</a>
            <a href="#ai-intelligence" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-600">AI Engine</a>
            <a href="#attendance" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-600">Attendance & Verification</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-600">Savings Calculator</a>
            <a href="#advantages" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-600">Our Advantages</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-600">FAQ</a>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenSendBot(); }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-100 text-slate-800 font-bold text-xs"
            >
              <Bot className="w-4 h-4 text-purple-600" />
              <span>🤖 Send AI Bot to External Call</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenInstantMeeting(); }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xs shadow-md"
            >
              <Video className="w-4 h-4" />
              <span>🚀 Launch Instant Meeting — Free</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
