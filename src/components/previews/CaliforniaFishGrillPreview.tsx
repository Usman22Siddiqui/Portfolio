"use client";
import { motion } from "framer-motion";

export default function CaliforniaFishGrillPreview() {
  const menuItems = [
    { name: "Grilled Salmon", price: "$14.99", emoji: "🐟" },
    { name: "Fish Tacos", price: "$11.99", emoji: "🌮" },
    { name: "Shrimp Bowl", price: "$13.49", emoji: "🍤" },
  ];

  return (
    <div className="relative w-full h-64 bg-gradient-to-b from-[#0a1628] to-[#0d1f3c] rounded-xl overflow-hidden border border-white/5 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-sky-400 font-bold tracking-wider">🐠 CALIFORNIA FISH GRILL</span>
        <div className="flex items-center gap-1 bg-sky-500/20 rounded-full px-2 py-0.5">
          <span className="text-[8px] text-sky-300">🛒 3</span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-1.5 mb-3">
        {menuItems.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center justify-between bg-white/5 rounded-lg p-2 border border-white/5 hover:border-sky-500/30 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm">{item.emoji}</span>
              <span className="text-[10px] text-white/80">{item.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-sky-400 font-mono">{item.price}</span>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-4 h-4 rounded-full bg-sky-500/20 flex items-center justify-center text-[8px] text-sky-300 cursor-pointer"
              >
                +
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Order Button */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full bg-gradient-to-r from-sky-500 to-teal-500 rounded-lg py-1.5 text-center"
      >
        <span className="text-[10px] text-white font-semibold">Place Order — $40.47</span>
      </motion.div>

      {/* Ocean Waves SVG */}
      <svg className="absolute bottom-0 left-0 w-full h-12 opacity-20" viewBox="0 0 400 50" preserveAspectRatio="none">
        <path
          d="M0,25 C100,10 150,40 200,25 C250,10 300,40 400,25 L400,50 L0,50 Z"
          fill="#0ea5e9"
          style={{ animation: "cfg-wave 4s ease-in-out infinite" }}
        />
      </svg>
    </div>
  );
}
