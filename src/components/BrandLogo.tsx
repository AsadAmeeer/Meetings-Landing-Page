import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  dark?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = '', 
  size = 'md',
  showSubtitle = true,
  dark = false
}) => {
  const iconSizes = {
    sm: 'w-8 h-8 rounded-xl',
    md: 'w-10 h-10 rounded-2xl',
    lg: 'w-13 h-13 rounded-2xl',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-3 ${className} select-none group`}>
      {/* Official MorpheLabs Dark Squircle Icon Tile matching reference */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} bg-slate-950 text-white shadow-lg shadow-slate-950/20 group-hover:scale-105 transition-transform duration-300 border border-slate-800 p-2 flex-shrink-0`}>
        <svg viewBox="0 0 110 90" className="w-full h-full text-white fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* Bottom-left circle node */}
          <circle cx="18" cy="62" r="9.5" />
          
          {/* Bridge connection from circle to first diagonal pill */}
          <path d="M 18 52.5 C 24 52.5 28 55 33 60 L 25 71.5 C 21 68 18 71.5 18 71.5 Z" />

          {/* First Diagonal Rounded Pill */}
          <rect x="22" y="18" width="16" height="52" rx="8" transform="rotate(-32 30 44)" />

          {/* Second Parallel Diagonal Rounded Pill */}
          <rect x="52" y="18" width="16" height="52" rx="8" transform="rotate(-32 60 44)" />

          {/* Top-Right Floating Circular Dot */}
          <circle cx="94" cy="24" r="7.5" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center tracking-tight">
          <span className={`font-display font-extrabold ${textSizes[size]} ${dark ? 'text-white' : 'text-slate-950'} tracking-wider`}>
            MORPHE
          </span>
          <span className={`font-display font-light ${textSizes[size]} ml-1.5 ${dark ? 'text-slate-300' : 'text-slate-600'} tracking-wider`}>
            LABS
          </span>
        </div>
        
        {showSubtitle && (
          <span className="text-[10px] uppercase tracking-widest font-extrabold text-purple-600 mt-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 inline-block animate-pulse"></span>
            MEETINGS SUITE
          </span>
        )}
      </div>
    </div>
  );
};
