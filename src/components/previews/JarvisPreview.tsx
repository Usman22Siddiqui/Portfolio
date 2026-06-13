"use client";
import { motion } from "framer-motion";

export default function JarvisPreview() {
  return (
    <div className="relative w-full h-64 bg-[#050508] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center">

      {/* HUD Circles */}
      <div className="relative w-40 h-40">
        <div
          className="absolute inset-0 rounded-full border border-amber-500/30"
          style={{ animation: "jarvis-rotate 8s linear infinite" }}
        />
        <div
          className="absolute inset-3 rounded-full border border-amber-500/20"
          style={{ animation: "jarvis-rotate-reverse 12s linear infinite" }}
        />
        <div
          className="absolute inset-6 rounded-full border border-amber-500/40"
          style={{ animation: "jarvis-rotate 6s linear infinite", borderStyle: "dashed" }}
        />

        {/* Center Core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center"
            style={{ animation: "jarvis-glow 2s ease-in-out infinite" }}
          >
            <span className="text-amber-400 text-xs font-bold">J</span>
          </div>
        </div>

        {/* Data Points */}
        {[0, 72, 144, 216, 288].map((deg, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-amber-500"
            style={{
              top: `${50 - 45 * Math.cos((deg * Math.PI) / 180)}%`,
              left: `${50 + 45 * Math.sin((deg * Math.PI) / 180)}%`,
              animation: `jarvis-dot 1.5s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Voice Waveform at bottom */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center gap-1 mb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-[8px] text-amber-400/70 font-mono">LISTENING...</span>
        </div>
        <div className="flex items-end gap-[2px] h-5">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-amber-500/50 rounded-sm"
              style={{
                minHeight: 1,
                ["--wave-h" as string]: `${((i * 7 + 3) % 16) + 2}px`,
                animation: "jarvis-wave 0.6s ease-in-out infinite",
                animationDelay: `${i * 0.03}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Command Log */}
      <div className="absolute top-4 left-4 right-4 space-y-1">
        {["System initialized", "Voice module: active", "Awaiting command..."].map((cmd, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.4 }}
            className="text-[8px] font-mono text-amber-500/50"
          >
            &gt; {cmd}
          </motion.div>
        ))}
      </div>

      {/* Scan Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(245,158,11,0.1) 2px, rgba(245,158,11,0.1) 4px)",
      }} />
    </div>
  );
}

