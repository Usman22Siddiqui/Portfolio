"use client";
import { motion } from "framer-motion";

export default function SocialMediaPreview() {
  const platforms = [
    { name: "LinkedIn", icon: "in", color: "#0077b5" },
    { name: "Instagram", icon: "📷", color: "#e1306c" },
    { name: "X", icon: "𝕏", color: "#ffffff" },
  ];

  return (
    <div className="relative w-full h-64 bg-[#0d0d12] rounded-xl overflow-hidden border border-white/5 p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
        <span className="text-[10px] text-purple-400 font-mono uppercase tracking-wider">AI Content Engine</span>
      </div>

      {/* Platform Cards */}
      <div className="flex gap-2 mb-3">
        {platforms.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="flex-1 rounded-lg p-2 border border-white/10 bg-white/5 text-center"
          >
            <div className="text-lg mb-1">{p.icon}</div>
            <div className="text-[9px] text-white/60">{p.name}</div>
          </motion.div>
        ))}
      </div>

      {/* Typing Effect */}
      <div className="rounded-lg bg-white/5 border border-white/10 p-2 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="text-[9px] text-green-400 font-mono">Generating...</span>
        </div>
        <div className="space-y-1">
          <div className="h-1.5 bg-gradient-to-r from-purple-500/40 to-transparent rounded w-4/5 animate-pulse" />
          <div className="h-1.5 bg-gradient-to-r from-purple-500/30 to-transparent rounded w-3/5 animate-pulse" style={{ animationDelay: "0.3s" }} />
          <div className="h-1.5 bg-gradient-to-r from-purple-500/20 to-transparent rounded w-2/5 animate-pulse" style={{ animationDelay: "0.6s" }} />
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 7 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className={`h-4 rounded text-[7px] flex items-center justify-center ${
              i < 5 ? "bg-purple-500/20 text-purple-300" : "bg-white/5 text-white/20"
            }`}
          >
            {["M", "T", "W", "T", "F", "S", "S"][i]}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
