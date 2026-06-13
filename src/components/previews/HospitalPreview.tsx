"use client";
import { motion } from "framer-motion";

export default function HospitalPreview() {
  return (
    <div className="relative w-full h-64 bg-[#1a1a2e] rounded-xl overflow-hidden border border-white/10">
      {/* JavaFX Window Frame */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#16213e] border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[9px] text-white/40 font-mono">Hospital Management System — JavaFX</span>
        <div />
      </div>

      <div className="flex h-[calc(100%-28px)]">
        {/* Sidebar */}
        <div className="hidden sm:block w-20 bg-[#0f3460]/50 border-r border-white/5 p-2 space-y-1.5">
          {["🏠 Home", "👤 Patients", "📅 Appts", "💰 Billing", "👥 Staff"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`text-[8px] rounded px-1.5 py-1 cursor-pointer transition-colors ${
                i === 1 ? "bg-emerald-500/20 text-emerald-400" : "text-white/40 hover:text-white/60"
              }`}
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* Main Content — Patient Table */}
        <div className="flex-1 p-3">
          <div className="text-[9px] text-white/60 font-semibold mb-2">Patient Records</div>
          <div className="rounded-lg border border-white/10 overflow-hidden">
            <div className="grid grid-cols-4 bg-white/5 px-2 py-1">
              {["ID", "Name", "Age", "Status"].map((h) => (
                <div key={h} className="text-[7px] text-white/40 font-mono">{h}</div>
              ))}
            </div>
            {[
              ["001", "Ahmed K.", "45", "Active"],
              ["002", "Sara R.", "32", "Discharged"],
              ["003", "Ali H.", "28", "Active"],
              ["004", "Fatima Z.", "55", "Pending"],
            ].map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="grid grid-cols-4 px-2 py-1 border-t border-white/5 hover:bg-white/5"
              >
                {row.map((cell, j) => (
                  <div key={j} className={`text-[8px] ${
                    j === 3
                      ? cell === "Active" ? "text-green-400" : cell === "Discharged" ? "text-white/30" : "text-amber-400"
                      : "text-white/60"
                  }`}>
                    {cell}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
