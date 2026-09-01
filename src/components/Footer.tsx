import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Globe, Mail, Phone, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-700 pt-16 pb-12 border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo size="lg" dark={false} />
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              MorpheLabs Meetings is an AI-powered meeting intelligence and CRM meeting platform. Host native HD video calls directly inside your CRM or dispatch custom AI bots to external Zoom, Meet, and Teams calls with zero per-meeting limits.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-700">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Private Tenancy • Isolated Audio Storage</span>
            </div>
          </div>

          {/* Links Col (7 cols) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-4">Product Suite</h4>
              <ul className="space-y-2.5 text-slate-600 font-medium">
                <li><a href="#ai-intelligence" className="hover:text-purple-600 transition-colors">AI Meeting Intelligence</a></li>
                <li><a href="#capture-modes" className="hover:text-purple-600 transition-colors">Video Meetings</a></li>
                <li><a href="#capture-modes" className="hover:text-purple-600 transition-colors">AI Meeting Bot</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-4">Workflow</h4>
              <ul className="space-y-2.5 text-slate-600 font-medium">
                <li><a href="#ai-intelligence" className="hover:text-purple-600 transition-colors">CRM Tasks</a></li>
                <li><a href="#attendance" className="hover:text-purple-600 transition-colors">Attendance</a></li>
                <li><a href="#capture-modes" className="hover:text-purple-600 transition-colors">File Import</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-2.5 text-slate-600 font-medium">
                <li><a href="#faq" className="hover:text-purple-600 transition-colors">FAQ</a></li>
                <li><a href="#calculator" className="hover:text-purple-600 transition-colors">TCO Savings</a></li>
                <li><a href="#advantages" className="hover:text-purple-600 transition-colors">Advantages</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Contact Badges Bar with Authentic Brand Icons & Real Colors */}
        <div className="mt-10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            
            {/* WhatsApp Pill */}
            <a 
              href="https://wa.me/19362617099" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white hover:bg-emerald-50/60 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366] flex-shrink-0">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.39C16.32 14.27 15.1 13.67 14.87 13.58C14.64 13.5 14.48 13.46 14.31 13.71C14.15 13.96 13.67 14.52 13.53 14.68C13.38 14.85 13.24 14.87 12.99 14.74C12.74 14.62 11.94 14.36 10.99 13.51C10.25 12.85 9.75 12.04 9.61 11.79C9.46 11.54 9.59 11.41 9.72 11.28C9.83 11.17 9.97 10.99 10.09 10.84C10.22 10.7 10.26 10.59 10.34 10.43C10.42 10.26 10.38 10.12 10.32 10C10.26 9.88 9.77 8.67 9.57 8.18C9.37 7.7 9.17 7.77 9.02 7.76C8.88 7.75 8.71 7.75 8.55 7.75C8.38 7.75 8.12 7.81 7.89 8.06C7.66 8.31 7.02 8.91 7.02 10.13C7.02 11.35 7.91 12.53 8.03 12.69C8.16 12.86 9.77 15.34 12.24 16.41C12.83 16.66 13.28 16.81 13.64 16.93C14.23 17.11 14.77 17.09 15.2 17.02C15.68 16.95 16.67 16.42 16.88 15.84C17.08 15.27 17.08 14.78 17.02 14.68C16.96 14.57 16.82 14.51 16.57 14.39Z" />
              </svg>
              <span><span className="font-semibold text-slate-800">WhatsApp:</span> +1 (936) 261-7099</span>
            </a>

            {/* Website Pill */}
            <a 
              href="https://www.morphelabs.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white hover:bg-blue-50/60 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#1D63FF] stroke-[2.2] stroke-linecap-round stroke-linejoin-round flex-shrink-0">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span><span className="font-semibold text-slate-800">Website:</span> www.morphelabs.org</span>
            </a>

            {/* Email Pill */}
            <a 
              href="mailto:automate@morphelabs.org"
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white hover:bg-purple-50/60 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#9333EA] stroke-[2.2] stroke-linecap-round stroke-linejoin-round flex-shrink-0">
                <rect width="20" height="16" x="2" y="4" rx="3" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span><span className="font-semibold text-slate-800">Email:</span> automate@morphelabs.org</span>
            </a>

          </div>

          <div className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} MorpheLabs Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
