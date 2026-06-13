"use client";

import { motion } from "framer-motion";

interface ProjectOverviewProps {
  description: string;
  overview: string;
  accentColor: string;
  architecture?: string;
}

export default function ProjectOverview({
  overview,
  accentColor,
  architecture,
}: ProjectOverviewProps) {
  return (
    <section className="relative z-20 py-32 px-6 md:px-8 bg-[#08080a]">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span
            className="text-[11px] font-mono uppercase tracking-[0.25em]"
            style={{ color: accentColor }}
          >
            Overview
          </span>
          <div
            className="h-[1px] w-16 mt-3"
            style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }}
          />
        </motion.div>

        {/* Main overview text */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 leading-relaxed">
            {overview}
          </p>
        </motion.div>

        {/* Architecture card */}
        {architecture && (
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl bg-white/[0.03] border border-white/10 p-8 md:p-10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                style={{ backgroundColor: accentColor + "15", border: `1px solid ${accentColor}25` }}
              >
                🏗️
              </div>
              <h3 className="text-white font-semibold text-lg">Architecture</h3>
            </div>
            <p className="text-white/50 leading-relaxed">{architecture}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
