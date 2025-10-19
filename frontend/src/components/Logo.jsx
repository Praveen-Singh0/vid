import React from 'react';

export const VideoMakerLogo = ({ className = "", size = "default" }) => {
  const sizes = {
    small: { container: "w-8 h-8", icon: "w-5 h-5" },
    default: { container: "w-10 h-10", icon: "w-6 h-6" },
    large: { container: "w-16 h-16", icon: "w-10 h-10" }
  };

  const currentSize = sizes[size] || sizes.default;

  return (
    <div className={`${currentSize.container} ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Multicolour Gradients */}
        <defs>
          <linearGradient id="multiGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="33%" stopColor="#8b5cf6" />
            <stop offset="66%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
          <linearGradient id="multiGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="playMulti" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
          <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        
        {/* Outer circle with rainbow gradient */}
        <circle cx="50" cy="50" r="45" fill="url(#multiGradient1)" opacity="0.95"/>
        
        {/* Secondary glow circle */}
        <circle cx="50" cy="50" r="42" fill="none" stroke="url(#multiGradient2)" strokeWidth="1.5" opacity="0.6"/>
        
        {/* Film strip decorations - multicolour */}
        <rect x="20" y="35" width="2" height="30" fill="#ec4899" opacity="0.4" rx="1"/>
        <rect x="25" y="35" width="2" height="30" fill="#8b5cf6" opacity="0.4" rx="1"/>
        <rect x="73" y="35" width="2" height="30" fill="#3b82f6" opacity="0.4" rx="1"/>
        <rect x="78" y="35" width="2" height="30" fill="#14b8a6" opacity="0.4" rx="1"/>
        
        {/* Colorful dots around */}
        <circle cx="25" cy="25" r="2" fill="#ec4899" opacity="0.6"/>
        <circle cx="75" cy="25" r="2" fill="#8b5cf6" opacity="0.6"/>
        <circle cx="25" cy="75" r="2" fill="#3b82f6" opacity="0.6"/>
        <circle cx="75" cy="75" r="2" fill="#14b8a6" opacity="0.6"/>
        
        {/* Play button triangle - gradient orange to red */}
        <path 
          d="M 42 32 L 42 68 L 68 50 Z" 
          fill="url(#playMulti)"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        
        {/* Sparkle effect - golden */}
        <circle cx="65" cy="30" r="3" fill="url(#sparkleGradient)" />
        <path d="M 65 26 L 65 34 M 61 30 L 69 30" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="35" cy="35" r="2" fill="#fbbf24" opacity="0.8"/>
        <circle cx="70" cy="65" r="2" fill="#fbbf24" opacity="0.8"/>
      </svg>
    </div>
  );
};

export const VideoMakerLogoText = ({ className = "" }) => {
  return (
    <span className={`font-bold font-heading ${className}`}>
      <span style={{
        background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 25%, #3b82f6 50%, #14b8a6 75%, #10b981 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        VideoMaker
      </span>
    </span>
  );
};
