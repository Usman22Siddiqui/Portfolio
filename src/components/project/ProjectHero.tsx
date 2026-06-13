"use client";

import { motion } from "framer-motion";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  heroDescription: string;
  category: string;
  accentColor: string;
  gradient: string;
}

export default function ProjectHero({
  title,
  subtitle,
  heroDescription,
  category,
  accentColor,
  gradient,
}: ProjectHeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-40`} />
        
        {/* Animated orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{ background: accentColor }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-15"
          style={{ background: accentColor }}
          animate={{
            x: [0, -80, 40, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.8, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#08080a] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Category badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span
            className="inline-block text-[11px] font-mono uppercase tracking-[0.25em] px-4 py-1.5 rounded-full border mb-8"
            style={{
              color: accentColor,
              borderColor: accentColor + "30",
              backgroundColor: accentColor + "08",
            }}
          >
            {category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-[0.95] mb-6"
        >
          {title}
          <span style={{ color: accentColor }}>.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm text-white/30 uppercase tracking-widest mb-4"
        >
          {subtitle}
        </motion.p>

        {/* Hero description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl sm:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed"
        >
          {heroDescription}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 flex flex-col items-center gap-2 text-white/30"
        >
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="opacity-60">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="8" cy="8" r="2" fill="currentColor">
              <animate attributeName="cy" values="7;14;7" dur="1.5s" repeatCount="indefinite"/>
            </circle>
          </svg>
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
