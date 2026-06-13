"use client";

import Image from "next/image";

interface BrowserFrameProps {
  src: string;
  alt: string;
  url?: string;
  accentColor?: string;
  className?: string;
  priority?: boolean;
}

export default function BrowserFrame({
  src,
  alt,
  url = "localhost:3000",
  className = "",
  priority = false,
  accentColor,
}: BrowserFrameProps) {
  return (
    <div 
      className={`rounded-xl overflow-hidden border border-white/10 bg-[#0c0c10] transition-all duration-500 hover:border-white/20 ${className}`}
      style={{
        boxShadow: accentColor 
          ? `0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 30px -5px ${accentColor}15` 
          : '0 20px 40px -15px rgba(0, 0, 0, 0.7)'
      }}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#161620] border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>

        {/* URL bar */}
        <div className="flex-1 max-w-md mx-4">
          <div 
            className="flex items-center gap-2 bg-[#0c0c10] rounded-md px-3 py-1 border transition-colors duration-300"
            style={{ borderColor: accentColor ? `${accentColor}30` : 'rgba(255, 255, 255, 0.05)' }}
          >
            <svg 
              className="w-3 h-3 flex-shrink-0" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2"
              style={{ color: accentColor || 'rgba(255, 255, 255, 0.2)' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-[10px] text-white/30 font-mono truncate">{url}</span>
          </div>
        </div>

        {/* Menu dots */}
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <div className="w-1 h-1 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Content area */}
      <div className="relative w-full aspect-[16/10] bg-[#0c0c10]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          loading={priority ? "eager" : "lazy"}
          priority={priority}
        />
      </div>
    </div>
  );
}
