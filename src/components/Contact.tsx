"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

import GithubIcon from "./icons/GithubIcon";

const LinkedinSvg = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/Usman22Siddiqui",
    icon: GithubIcon,
    handle: "@Usman22Siddiqui",
    color: "hover:border-white/40",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/usman-siddiqui-07708a380",
    icon: LinkedinSvg,
    handle: "usman-siddiqui-07708a380",
    color: "hover:border-blue-500/40",
  },
  {
    name: "Email",
    url: "mailto:siddiquiu303@gmail.com",
    icon: Mail,
    handle: "siddiquiu303@gmail.com",
    color: "hover:border-accent/40",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-20 bg-[#08080a] py-32 px-6 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Let&apos;s <span className="text-accent italic">Connect</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            I&apos;m always open to discussing new projects, collaborations, or opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socials.map((social, i) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group rounded-2xl bg-white/[0.03] border border-white/10 p-8 transition-all duration-500 ${social.color} hover:bg-white/[0.06] flex flex-col items-center gap-4`}
              >
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{social.name}</h3>
                  <p className="text-white/40 text-sm">{social.handle}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-accent transition-colors" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
