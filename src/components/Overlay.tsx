"use client";

import { useRef } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

/**
 * Overlay - Text sections that sit on top of the canvas.
 * Uses the same raw scroll approach as ScrollyCanvas for perfectly synchronized motion.
 */
export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Section 1: Hero (0% - 20% scroll)
  const titleOpacity = useTransform(progress, [0, 0.15, 0.25], [1, 1, 0]);
  const titleY = useTransform(progress, [0, 0.25], ["0%", "-20%"]);
  const titleScale = useTransform(progress, [0, 0.25], [1, 0.9]);

  // Section 2: Left text (25% - 55% scroll)
  const leftOpacity = useTransform(progress, [0.25, 0.35, 0.5, 0.55], [0, 1, 1, 0]);
  const leftX = useTransform(progress, [0.25, 0.35], ["-60px", "0px"]);

  // Section 3: Right text (55% - 85% scroll)
  const rightOpacity = useTransform(progress, [0.55, 0.65, 0.8, 0.85], [0, 1, 1, 0]);
  const rightX = useTransform(progress, [0.55, 0.65], ["60px", "0px"]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-10 pointer-events-none"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        
        {/* Section 1: Hero Title */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY, scale: titleScale, willChange: "transform, opacity" }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-[2.5rem] sm:text-7xl md:text-[6rem] lg:text-[7rem] font-extrabold tracking-tighter text-white leading-[0.95]">
            M. Usman Siddiqui<span className="text-accent">.</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl md:text-2xl text-white/60 font-light tracking-wide">
            Creative Developer & Digital Architect
          </p>
          <div className="mt-8 flex items-center gap-2 text-white/30 text-sm animate-pulse">
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="opacity-60">
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="8" cy="8" r="2" fill="currentColor">
                <animate attributeName="cy" values="7;14;7" dur="1.5s" repeatCount="indefinite"/>
              </circle>
            </svg>
            <span>Scroll to explore</span>
          </div>
        </motion.div>

        {/* Section 2: Left aligned */}
        <motion.div
          style={{ opacity: leftOpacity, x: leftX, willChange: "transform, opacity" }}
          className="absolute left-4 right-4 md:left-20 lg:left-32 md:right-auto top-1/2 -translate-y-1/2 max-w-lg text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            I build digital<br />
            <span className="text-accent italic font-extrabold">experiences</span>.
          </h2>
          <p className="mt-5 text-base md:text-lg text-white/50 leading-relaxed max-w-md mx-auto md:mx-0">
            Crafting immersive web environments through performant animations,
            WebGL, and modern frontend frameworks.
          </p>
        </motion.div>

        {/* Section 3: Right aligned */}
        <motion.div
          style={{ opacity: rightOpacity, x: rightX, willChange: "transform, opacity" }}
          className="absolute left-4 right-4 md:right-20 lg:right-32 md:left-auto top-1/2 -translate-y-1/2 max-w-lg text-center md:text-right"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Bridging design<br />
            and <span className="text-accent italic font-extrabold">engineering</span>.
          </h2>
          <p className="mt-5 text-base md:text-lg text-white/50 leading-relaxed max-w-md mx-auto md:ml-auto">
            Focusing on the subtle details that elevate a good interface
            into an unforgettable digital journey.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
