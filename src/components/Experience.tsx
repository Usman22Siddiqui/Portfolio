"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "CodeAlpha",
    role: "Web Development Intern",
    period: "2024",
    description:
      "Built responsive web applications using modern JavaScript frameworks. Collaborated on client-facing projects with a focus on clean UI/UX and performant code.",
    skills: ["React", "JavaScript", "CSS", "Git"],
  },
  {
    company: "Bodevs",
    role: "Software Development Intern",
    description:
      "Contributed to full-stack software development projects. Gained hands-on experience with backend APIs, database management, and agile development workflows.",
    period: "2024",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-20 bg-[#08080a] py-32 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Work <span className="text-accent italic">Experience</span>
          </h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Glowing timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-[14px] top-2 w-6 h-6 rounded-full bg-[#08080a] border-2 border-accent flex items-center justify-center">
                  <Briefcase className="w-3 h-3 text-accent" />
                </div>

                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 hover:border-accent/30 transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-white font-bold text-lg">{exp.company}</h3>
                      <p className="text-accent text-sm">{exp.role}</p>
                    </div>
                    <span className="text-white/30 text-sm font-mono mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-accent/10 border border-accent/20 text-accent/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
