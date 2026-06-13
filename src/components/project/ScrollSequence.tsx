"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import BrowserFrame from "./BrowserFrame";

interface ScrollSequenceProps {
  screenshots: string[];
  title: string;
  accentColor: string;
  liveUrl?: string;
}

export default function ScrollSequence({ screenshots, title, accentColor, liveUrl }: ScrollSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const displayScreenshots = screenshots.slice(0, 6);
  const shouldReduceMotion = useReducedMotion();

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ============================================================
  // SLIDESHOW ARCHITECTURE — TWO PHASES
  // ============================================================
  //
  // PHASE 1: Sequential Slideshow (scroll 0.00 → 0.75)
  //   Each screenshot fades in ONCE at its entry point and stays
  //   at opacity 1. Later screenshots stack ON TOP via z-index.
  //   The newest visible screenshot covers all previous ones.
  //   NO screenshot ever fades out during this phase.
  //
  //   Entry points (non-overlapping, sequential):
  //     s1: 0.00 → 0.08  (scale up)
  //     s2: 0.12 → 0.20  (slide from left)
  //     s3: 0.25 → 0.33  (slide from right)
  //     s4: 0.38 → 0.46  (zoom forward)
  //     s5: 0.50 → 0.58  (rotate in)
  //     s6: 0.62 → 0.70  (scale in)
  //
  // PHASE 2: Exploded View (scroll 0.75 → 1.00)
  //   All screenshots are already at opacity 1 (stacked).
  //   They scatter to different positions with varied transforms.
  //   Z-indexes change for visual depth variety.
  //
  // WHY THIS WORKS:
  //   - Scrolling down: each new screenshot covers the previous
  //   - Scrolling up: screenshot fades back to 0, revealing previous
  //   - No fade-out/fade-in cycling means zero flicker or gaps
  //   - Deterministic: same scroll position = same visual, always
  // ============================================================

  // --- OPACITY ---
  // Each screenshot fades in once and stays visible permanently.
  // Slight fade to 0.8 at the very end for visual depth in exploded view.
  const s1Opacity = useTransform(scrollYProgress, [0, 0.92, 1], [1, 1, 0.8]);
  const s2Opacity = useTransform(scrollYProgress, [0.12, 0.20, 0.92, 1], [0, 1, 1, 0.8]);
  const s3Opacity = useTransform(scrollYProgress, [0.25, 0.33, 0.92, 1], [0, 1, 1, 0.8]);
  const s4Opacity = useTransform(scrollYProgress, [0.38, 0.46, 0.92, 1], [0, 1, 1, 0.8]);
  const s5Opacity = useTransform(scrollYProgress, [0.50, 0.58, 0.92, 1], [0, 1, 1, 0.8]);
  const s6Opacity = useTransform(scrollYProgress, [0.62, 0.70, 0.92, 1], [0, 1, 1, 0.8]);

  // --- ENTRANCE + EXPLODED TRANSFORMS ---

  // Screenshot 1 — Scale up from center, then scatter top-left
  const s1Scale = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) {
      if (v < 0.08) return 0.8 + (v / 0.08) * 0.2;
      return 1;
    } else {
      const pct = (v - 0.75) / 0.25;
      const targetScale = isMobile ? 0.85 : 0.65;
      return 1 - pct * (1 - targetScale);
    }
  });
  const s1X = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) return "0%";
    const pct = (v - 0.75) / 0.25;
    const targetX = isMobile ? -15 : -60;
    return `${pct * targetX}%`;
  });
  const s1Y = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) return "0%";
    const pct = (v - 0.75) / 0.25;
    const targetY = isMobile ? -10 : -30;
    return `${pct * targetY}%`;
  });
  const s1Rotate = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) return 0;
    const pct = (v - 0.75) / 0.25;
    const targetRotate = isMobile ? -2 : -8;
    return pct * targetRotate;
  });

  // Screenshot 2 — Slide from left, then scatter top-right
  const s2X = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) {
      if (v < 0.12) return "-100%";
      if (v > 0.20) return "0%";
      const pct = (v - 0.12) / 0.08;
      return `${-100 + pct * 100}%`;
    } else {
      const pct = (v - 0.75) / 0.25;
      const targetX = isMobile ? 15 : 55;
      return `${pct * targetX}%`;
    }
  });
  const s2Y = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) return "0%";
    const pct = (v - 0.75) / 0.25;
    const targetY = isMobile ? -8 : -25;
    return `${pct * targetY}%`;
  });
  const s2Rotate = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) return 0;
    const pct = (v - 0.75) / 0.25;
    const targetRotate = isMobile ? 1 : 5;
    return pct * targetRotate;
  });
  const s2Scale = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) return 1;
    const pct = (v - 0.75) / 0.25;
    const targetScale = isMobile ? 0.85 : 0.7;
    return 1 - pct * (1 - targetScale);
  });

  // Screenshot 3 — Slide from right, then scatter bottom-left
  const s3X = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) {
      if (v < 0.25) return "100%";
      if (v > 0.33) return "0%";
      const pct = (v - 0.25) / 0.08;
      return `${100 - pct * 100}%`;
    } else {
      const pct = (v - 0.75) / 0.25;
      const targetX = isMobile ? -12 : -50;
      return `${pct * targetX}%`;
    }
  });
  const s3Y = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) return "0%";
    const pct = (v - 0.75) / 0.25;
    const targetY = isMobile ? 10 : 30;
    return `${pct * targetY}%`;
  });
  const s3Rotate = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) return 0;
    const pct = (v - 0.75) / 0.25;
    const targetRotate = isMobile ? -1 : -4;
    return pct * targetRotate;
  });
  const s3Scale = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) return 1;
    const pct = (v - 0.75) / 0.25;
    const targetScale = isMobile ? 0.85 : 0.68;
    return 1 - pct * (1 - targetScale);
  });

  // Screenshot 4 — Zoom forward, then scatter right
  const s4Scale = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) {
      if (v < 0.38) return 0.5;
      if (v > 0.46) return 1;
      return 0.5 + ((v - 0.38) / 0.08) * 0.5;
    } else {
      const pct = (v - 0.75) / 0.25;
      const targetScale = isMobile ? 0.85 : 0.72;
      return 1 - pct * (1 - targetScale);
    }
  });
  const s4X = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) return "0%";
    const pct = (v - 0.75) / 0.25;
    const targetX = isMobile ? 15 : 60;
    return `${pct * targetX}%`;
  });
  const s4Y = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) return "0%";
    const pct = (v - 0.75) / 0.25;
    const targetY = isMobile ? 8 : 25;
    return `${pct * targetY}%`;
  });
  const s4Rotate = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) return 0;
    const pct = (v - 0.75) / 0.25;
    const targetRotate = isMobile ? 1 : 6;
    return pct * targetRotate;
  });

  // Screenshot 5 — Rotate in, then scatter top
  const s5Rotate = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) {
      if (v < 0.50) return isMobile ? -2 : -8;
      if (v > 0.58) return 0;
      const pct = (v - 0.50) / 0.08;
      const startRot = isMobile ? -2 : -8;
      return startRot + pct * (-startRot);
    } else {
      const pct = (v - 0.75) / 0.25;
      const targetRotate = isMobile ? 1 : 3;
      return pct * targetRotate;
    }
  });
  const s5Scale = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) {
      if (v < 0.50) return isMobile ? 0.9 : 0.85;
      if (v > 0.58) return 1;
      const pct = (v - 0.50) / 0.08;
      const startScale = isMobile ? 0.9 : 0.85;
      return startScale + pct * (1 - startScale);
    } else {
      const pct = (v - 0.75) / 0.25;
      const targetScale = isMobile ? 0.85 : 0.75;
      return 1 - pct * (1 - targetScale);
    }
  });
  const s5X = useTransform(scrollYProgress, () => "0%");
  const s5Y = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) return "0%";
    const pct = (v - 0.75) / 0.25;
    const targetY = isMobile ? -15 : -45;
    return `${pct * targetY}%`;
  });

  // Screenshot 6 — Scale in, then scatter slightly
  const s6Scale = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) {
      if (v < 0.62) return isMobile ? 0.95 : 0.9;
      if (v > 0.70) return 1;
      const pct = (v - 0.62) / 0.08;
      const startScale = isMobile ? 0.95 : 0.9;
      return startScale + pct * (1 - startScale);
    } else {
      const pct = (v - 0.75) / 0.25;
      const targetScale = isMobile ? 1.02 : 1.05;
      return 1 + pct * (targetScale - 1);
    }
  });
  const s6X = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) return "0%";
    const pct = (v - 0.75) / 0.25;
    const targetX = isMobile ? 2 : 5;
    return `${pct * targetX}%`;
  });
  const s6Y = useTransform(scrollYProgress, (v) => {
    if (v < 0.75) return "0%";
    const pct = (v - 0.75) / 0.25;
    const targetY = isMobile ? 2 : 5;
    return `${pct * targetY}%`;
  });

  // --- Z-INDEX ---
  // Slideshow: increasing order so each new screenshot covers previous ones.
  // Exploded: varied for visual depth in the scattered layout.
  const s1Z = useTransform(scrollYProgress, (v) => v >= 0.75 ? 5 : 10);
  const s2Z = useTransform(scrollYProgress, (v) => v >= 0.75 ? 2 : 11);
  const s3Z = useTransform(scrollYProgress, (v) => v >= 0.75 ? 3 : 12);
  const s4Z = useTransform(scrollYProgress, (v) => v >= 0.75 ? 4 : 13);
  const s5Z = useTransform(scrollYProgress, (v) => v >= 0.75 ? 1 : 14);
  const s6Z = useTransform(scrollYProgress, (v) => v >= 0.75 ? 6 : 15);

  // --- REDUCED MOTION ---
  // Disable all movement transforms; keep only opacity fades.
  const s1ScaleVal = shouldReduceMotion ? 1 : s1Scale;
  const s1XVal = shouldReduceMotion ? "0%" : s1X;
  const s1YVal = shouldReduceMotion ? "0%" : s1Y;
  const s1RotateVal = shouldReduceMotion ? 0 : s1Rotate;

  const s2ScaleVal = shouldReduceMotion ? 1 : s2Scale;
  const s2XVal = shouldReduceMotion ? "0%" : s2X;
  const s2YVal = shouldReduceMotion ? "0%" : s2Y;
  const s2RotateVal = shouldReduceMotion ? 0 : s2Rotate;

  const s3ScaleVal = shouldReduceMotion ? 1 : s3Scale;
  const s3XVal = shouldReduceMotion ? "0%" : s3X;
  const s3YVal = shouldReduceMotion ? "0%" : s3Y;
  const s3RotateVal = shouldReduceMotion ? 0 : s3Rotate;

  const s4ScaleVal = shouldReduceMotion ? 1 : s4Scale;
  const s4XVal = shouldReduceMotion ? "0%" : s4X;
  const s4YVal = shouldReduceMotion ? "0%" : s4Y;
  const s4RotateVal = shouldReduceMotion ? 0 : s4Rotate;

  const s5ScaleVal = shouldReduceMotion ? 1 : s5Scale;
  const s5XVal = shouldReduceMotion ? "0%" : s5X;
  const s5YVal = shouldReduceMotion ? "0%" : s5Y;
  const s5RotateVal = shouldReduceMotion ? 0 : s5Rotate;

  const s6ScaleVal = shouldReduceMotion ? 1 : s6Scale;
  const s6XVal = shouldReduceMotion ? "0%" : s6X;
  const s6YVal = shouldReduceMotion ? "0%" : s6Y;

  // Progress indicator
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Labels
  const showcaseLabelOpacity = useTransform(scrollYProgress, [0, 0.05, 0.65, 0.7], [0, 1, 1, 0]);
  const explodedLabelOpacity = useTransform(scrollYProgress, [0.82, 0.9, 0.95, 1], [0, 1, 1, 0]);

  const url = liveUrl || "localhost:3000";

  return (
    <section ref={containerRef} className="relative h-[350vh]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 z-40 h-[2px] bg-white/5">
          <motion.div
            className="h-full rounded-full"
            style={{
              width: progressWidth,
              background: `linear-gradient(to right, ${accentColor}60, ${accentColor})`,
            }}
          />
        </div>

        {/* Stage label */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-30">
          <motion.p
            style={{ opacity: showcaseLabelOpacity }}
            className="text-xs text-white/30 uppercase tracking-[0.3em] font-mono"
          >
            Project Showcase
          </motion.p>
        </div>

        {/* Screenshots container */}
        <div className="relative w-full max-w-5xl mx-auto px-6 md:px-12" style={{ height: "70vh" }}>
          {/* Screenshot 1 — Scale up from center */}
          {displayScreenshots[0] && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity: s1Opacity,
                scale: s1ScaleVal,
                x: s1XVal,
                y: s1YVal,
                rotate: s1RotateVal,
                zIndex: s1Z,
              }}
            >
              <div className="w-full max-w-3xl">
                <BrowserFrame
                  src={displayScreenshots[0]}
                  alt={`${title} screenshot 1`}
                  url={url}
                  accentColor={accentColor}
                  priority
                />
              </div>
            </motion.div>
          )}

          {/* Screenshot 2 — Slide from left */}
          {displayScreenshots[1] && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity: s2Opacity,
                x: s2XVal,
                y: s2YVal,
                rotate: s2RotateVal,
                scale: s2ScaleVal,
                zIndex: s2Z,
              }}
            >
              <div className="w-full max-w-3xl">
                <BrowserFrame
                  src={displayScreenshots[1]}
                  alt={`${title} screenshot 2`}
                  url={url}
                  accentColor={accentColor}
                />
              </div>
            </motion.div>
          )}

          {/* Screenshot 3 — Slide from right */}
          {displayScreenshots[2] && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity: s3Opacity,
                x: s3XVal,
                y: s3YVal,
                rotate: s3RotateVal,
                scale: s3ScaleVal,
                zIndex: s3Z,
              }}
            >
              <div className="w-full max-w-3xl">
                <BrowserFrame
                  src={displayScreenshots[2]}
                  alt={`${title} screenshot 3`}
                  url={url}
                  accentColor={accentColor}
                />
              </div>
            </motion.div>
          )}

          {/* Screenshot 4 — Zoom forward */}
          {displayScreenshots[3] && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity: s4Opacity,
                scale: s4ScaleVal,
                x: s4XVal,
                y: s4YVal,
                rotate: s4RotateVal,
                zIndex: s4Z,
              }}
            >
              <div className="w-full max-w-3xl">
                <BrowserFrame
                  src={displayScreenshots[3]}
                  alt={`${title} screenshot 4`}
                  url={url}
                  accentColor={accentColor}
                />
              </div>
            </motion.div>
          )}

          {/* Screenshot 5 — Rotate in */}
          {displayScreenshots[4] && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity: s5Opacity,
                rotate: s5RotateVal,
                scale: s5ScaleVal,
                x: s5XVal,
                y: s5YVal,
                zIndex: s5Z,
              }}
            >
              <div className="w-full max-w-3xl">
                <BrowserFrame
                  src={displayScreenshots[4]}
                  alt={`${title} screenshot 5`}
                  url={url}
                  accentColor={accentColor}
                />
              </div>
            </motion.div>
          )}

          {/* Screenshot 6 — Scale in */}
          {displayScreenshots[5] && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity: s6Opacity,
                scale: s6ScaleVal,
                x: s6XVal,
                y: s6YVal,
                zIndex: s6Z,
              }}
            >
              <div className="w-full max-w-3xl">
                <BrowserFrame
                  src={displayScreenshots[5]}
                  alt={`${title} screenshot 6`}
                  url={url}
                  accentColor={accentColor}
                />
              </div>
            </motion.div>
          )}
        </div>

        {/* Exploded label */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 text-center"
          style={{ opacity: explodedLabelOpacity }}
        >
          <p className="text-xs text-white/20 uppercase tracking-[0.3em] font-mono">
            Exploded View
          </p>
        </motion.div>
      </div>
    </section>
  );
}
