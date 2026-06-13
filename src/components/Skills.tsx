"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    icon: "⌨️",
    skills: [
      { name: "C++", level: 85 },
      { name: "Java", level: 80 },
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 92 },
    ],
  },
  {
    title: "Frameworks",
    icon: "🧩",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Node.js", level: 82 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "IntelliJ IDEA", level: 80 },
      { name: "Vercel", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-20 bg-[#08080a] py-32 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Tech <span className="text-accent italic">Stack</span>
          </h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 hover:border-white/20 transition-colors duration-500"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-lg">{category.icon}</span>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-white/60">{skill.name}</span>
                      <span className="text-[10px] text-white/30 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent to-orange-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + si * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
