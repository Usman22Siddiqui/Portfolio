"use client";

import { motion } from "framer-motion";
import { Trophy, Laptop, Award } from "lucide-react";

const achievements = [
  {
    title: "CM Honhaar Scholarship",
    description: "Awarded the Chief Minister's Honhaar Scholarship for academic excellence in higher education.",
    icon: Trophy,
    color: "text-yellow-400",
    borderColor: "border-yellow-500/20",
    bgColor: "bg-yellow-500/5",
    glowColor: "hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]",
  },
  {
    title: "CM Laptop Scheme",
    description: "Received a laptop under the Chief Minister's Laptop Scheme for outstanding academic performance.",
    icon: Laptop,
    color: "text-blue-400",
    borderColor: "border-blue-500/20",
    bgColor: "bg-blue-500/5",
    glowColor: "hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]",
  },
  {
    title: "Hackxila Runner-Up",
    description: "Secured runner-up position at Hackxila hackathon, demonstrating innovative problem-solving under pressure.",
    icon: Award,
    color: "text-accent",
    borderColor: "border-accent/20",
    bgColor: "bg-accent/5",
    glowColor: "hover:shadow-[0_0_30px_rgba(255,126,51,0.1)]",
  },
];

export default function Achievements() {
  return (
    <section className="relative z-20 bg-[#08080a] py-32 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Achiev<span className="text-accent italic">ements</span>
          </h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, i) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`group rounded-2xl ${achievement.bgColor} border ${achievement.borderColor} p-8 transition-all duration-500 ${achievement.glowColor} hover:border-white/20`}
              >
                <div className={`w-12 h-12 rounded-xl ${achievement.bgColor} border ${achievement.borderColor} flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${achievement.color}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{achievement.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
