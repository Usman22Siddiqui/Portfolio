"use client";

import { motion } from "framer-motion";

interface TechStackSectionProps {
  techStack: string[];
  accentColor: string;
  challenges?: string[];
  results?: string[];
}

export default function TechStackSection({
  techStack,
  accentColor,
  challenges,
  results,
}: TechStackSectionProps) {
  return (
    <section className="relative z-20 py-32 px-6 md:px-8 bg-[#08080a]">
      <div className="max-w-5xl mx-auto">
        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span
            className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3 block"
            style={{ color: accentColor }}
          >
            Tech Stack
          </span>
          <div
            className="h-[1px] w-16 mb-10"
            style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }}
          />

          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="px-5 py-2.5 rounded-full text-sm font-medium backdrop-blur-sm border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: accentColor + "08",
                  borderColor: accentColor + "20",
                  color: accentColor + "cc",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Challenges & Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenges */}
          {challenges && challenges.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl bg-white/[0.03] border border-white/10 p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                  style={{ backgroundColor: accentColor + "15", border: `1px solid ${accentColor}25` }}
                >
                  ⚡
                </div>
                <h3 className="text-white font-semibold text-lg">Challenges</h3>
              </div>
              <ul className="space-y-3">
                {challenges.map((challenge, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 text-sm text-white/50"
                  >
                    <span style={{ color: accentColor }} className="mt-0.5 flex-shrink-0">▸</span>
                    {challenge}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Results */}
          {results && results.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="rounded-2xl bg-white/[0.03] border border-white/10 p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                  style={{ backgroundColor: accentColor + "15", border: `1px solid ${accentColor}25` }}
                >
                  🎯
                </div>
                <h3 className="text-white font-semibold text-lg">Results</h3>
              </div>
              <ul className="space-y-3">
                {results.map((result, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 text-sm text-white/50"
                  >
                    <span style={{ color: accentColor }} className="mt-0.5 flex-shrink-0">✓</span>
                    {result}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
