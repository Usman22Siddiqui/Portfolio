"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

import GithubIcon from "./icons/GithubIcon";
import { projects } from "@/data/projects";
import SocialMediaPreview from "./previews/SocialMediaPreview";
import ClinicFlowPreview from "./previews/ClinicFlowPreview";
import CaliforniaFishGrillPreview from "./previews/CaliforniaFishGrillPreview";
import JarvisPreview from "./previews/JarvisPreview";
import HospitalPreview from "./previews/HospitalPreview";
import EnergyPreview from "./previews/EnergyPreview";

const previewComponents: Record<string, React.ComponentType> = {
  "social-media": SocialMediaPreview,
  clinicflow: ClinicFlowPreview,
  "california-fish-grill": CaliforniaFishGrillPreview,
  jarvis: JarvisPreview,
  "hospital-management": HospitalPreview,
  "energy-analyzer": EnergyPreview,
};

export default function Projects() {
  return (
    <section id="work" className="relative z-20 bg-[#08080a] py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Selected <span className="text-accent italic">Works</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl">
            A collection of real-world projects spanning AI, full-stack development, desktop applications, and IoT.
          </p>
          <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent mt-6" />
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, i) => {
            const Preview = previewComponents[project.id];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className="group relative rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                {/* Clickable card link — covers the entire card */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="absolute inset-0 z-20"
                  aria-label={`View ${project.title} case study`}
                />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Preview Frame */}
                  <div className="p-6 lg:p-8">
                    {Preview && <Preview />}
                  </div>

                  {/* Project Info */}
                  <div className="p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: project.accentColor }}>
                          {project.category}
                        </span>
                        <div className="flex gap-2 relative z-30">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white/60 pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                          </a>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white/60 pointer-events-auto"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/30 mb-4">{project.subtitle}</p>
                      <p className="text-sm text-white/50 leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-1.5 mb-5">
                        {project.features.slice(0, 3).map((f, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-white/40">
                            <span style={{ color: project.accentColor }}>▸</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack + Case Study CTA */}
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-white/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Case study hint */}
                      <div className="flex items-center gap-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ color: project.accentColor }}>
                        <span className="font-medium">View Case Study</span>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
