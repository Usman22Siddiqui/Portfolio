"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/data/projects";

interface NextProjectProps {
  project: Project;
}

export default function NextProject({ project }: NextProjectProps) {
  return (
    <section className="relative z-20 py-32 px-6 md:px-8 bg-[#08080a] border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm text-white/30 uppercase tracking-widest mb-6">Next Project</p>

          <Link href={`/projects/${project.slug}`} className="group inline-block">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/20 group-hover:text-white transition-colors duration-500 tracking-tighter">
              {project.title}
              <span style={{ color: project.accentColor }}>.</span>
            </h2>
          </Link>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] mt-8 mx-auto max-w-md"
            style={{ background: `linear-gradient(to right, transparent, ${project.accentColor}40, transparent)` }}
          />

          <p className="mt-6 text-white/30 text-sm">{project.subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}
