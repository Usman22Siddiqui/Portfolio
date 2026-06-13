"use client";
import { motion } from "framer-motion";

export default function EnergyPreview() {
  const barHeights = [40, 65, 55, 80, 45, 70, 60];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="relative w-full h-64 bg-[#0a120a] rounded-xl overflow-hidden border border-white/5 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm">⚡</span>
          <span className="text-[10px] text-lime-400 font-mono">Energy Dashboard</span>
        </div>
        <div className="flex items-center gap-1 bg-lime-500/10 rounded-full px-2 py-0.5">
          <div className="w-1 h-1 rounded-full bg-lime-500 animate-pulse" />
          <span className="text-[8px] text-lime-400">Live</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex gap-2 mb-3">
        {[
          { label: "Today", value: "24.5", unit: "kWh", color: "text-lime-400" },
          { label: "Cost", value: "$3.20", unit: "", color: "text-emerald-400" },
          { label: "Score", value: "87", unit: "/100", color: "text-green-400" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex-1 bg-white/5 rounded-lg p-1.5 border border-white/5"
          >
            <div className="text-[7px] text-white/30">{s.label}</div>
            <div className={`text-xs font-bold ${s.color}`}>
              {s.value}<span className="text-[7px] font-normal">{s.unit}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="flex items-end gap-1.5 h-20 mb-2">
        {barHeights.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <motion.div
              className="w-full rounded-t-sm bg-gradient-to-t from-lime-600/60 to-lime-400/40"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: "easeOut" }}
            />
            <span className="text-[6px] text-white/30">{days[i]}</span>
          </div>
        ))}
      </div>

      {/* Devices */}
      <div className="flex gap-3 justify-center">
        {["💡", "❄️", "🔌", "☀️"].map((device, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
            className="text-xs opacity-60"
          >
            {device}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
