"use client";
import { motion } from "framer-motion";

export default function ClinicFlowPreview() {
  return (
    <div className="relative w-full h-64 bg-[#0a0e1a] rounded-xl overflow-hidden border border-white/5 p-4">


      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-xs">🏥</div>
          <span className="text-[10px] text-cyan-400 font-mono">ClinicFlow AI</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[8px] text-green-400">Online</span>
        </div>
      </div>

      {/* Vital Signs */}
      <div className="flex gap-2 mb-3">
        {[
          { label: "Heart Rate", value: "72", unit: "bpm", color: "text-red-400" },
          { label: "SpO2", value: "98", unit: "%", color: "text-cyan-400" },
          { label: "BP", value: "120/80", unit: "", color: "text-green-400" },
        ].map((v, i) => (
          <motion.div
            key={v.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 }}
            className="flex-1 bg-white/5 rounded-lg p-1.5 border border-white/5"
          >
            <div className="text-[7px] text-white/40 mb-0.5">{v.label}</div>
            <div className={`text-sm font-bold ${v.color}`}>
              {v.value}<span className="text-[7px] font-normal ml-0.5">{v.unit}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Voice Waveform */}
      <div className="rounded-lg bg-cyan-500/5 border border-cyan-500/10 p-2 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[9px] text-cyan-400">🎤 Voice Assistant</span>
        </div>
        <div className="flex items-end gap-0.5 h-6">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-cyan-500/60 rounded-sm"
              style={{
                minHeight: 2,
                ["--wave-h" as string]: `${((i * 9 + 5) % 20) + 4}px`,
                animation: "clinic-wave 0.8s ease-in-out infinite",
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Appointments */}
      <div className="space-y-1">
        {["Dr. Ahmed — 9:00 AM", "Dr. Sara — 11:30 AM"].map((apt, i) => (
          <motion.div
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.2 }}
            className="flex items-center gap-2 text-[9px] text-white/50"
          >
            <div className={`w-1 h-3 rounded-full ${i === 0 ? "bg-cyan-500" : "bg-white/20"}`} />
            {apt}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

