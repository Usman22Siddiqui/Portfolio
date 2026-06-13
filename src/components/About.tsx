"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative z-20 bg-[#08080a] py-32 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-12">
            About <span className="text-accent italic">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 rounded-2xl bg-white/[0.03] border border-white/10 p-8"
          >
            <p className="text-white/60 leading-relaxed text-lg mb-6">
              I&apos;m <span className="text-white font-semibold">Muhammad Usman Siddiqui</span>, a passionate Software Engineer
              with a strong foundation in full-stack development, AI/ML, and desktop application engineering.
            </p>
            <p className="text-white/40 leading-relaxed">
              I specialize in building immersive digital experiences — from AI-powered healthcare platforms
              to real-time content generation tools. My approach combines clean architecture with
              cutting-edge technologies to deliver production-grade solutions that make an impact.
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-white/[0.03] border border-white/10 p-8 flex flex-col justify-between"
          >
            <div>
              <GraduationCap className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-white font-bold text-lg mb-1">BS Software Engineering</h3>
              <div className="flex items-center gap-1.5 text-white/40 text-sm mb-3">
                <MapPin className="w-3 h-3" />
                UET Taxila
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-white/70 text-sm font-mono">CGPA: 3.3</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
