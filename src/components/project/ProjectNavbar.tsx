"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

import GithubIcon from "@/components/icons/GithubIcon";

interface ProjectNavbarProps {
  title: string;
  accentColor: string;
  githubUrl: string;
  liveUrl?: string;
}

export default function ProjectNavbar({ title, accentColor, githubUrl, liveUrl }: ProjectNavbarProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [200, 400], [0, 1]);
  const bgOpacity = useTransform(scrollY, [100, 300], [0, 1]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 py-3 px-6 md:px-8"
      style={{
        backgroundColor: useTransform(bgOpacity, (v) => `rgba(8, 8, 10, ${v * 0.85})`),
        backdropFilter: useTransform(bgOpacity, (v) => `blur(${v * 20}px)`),
        WebkitBackdropFilter: useTransform(bgOpacity, (v) => `blur(${v * 20}px)`),
        borderBottom: useTransform(bgOpacity, (v) => `1px solid rgba(255, 255, 255, ${v * 0.05})`),
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Back Button */}
        <Link
          href="/#work"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 group"
        >
          <motion.div
            whileHover={{ x: -3 }}
            className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </motion.div>
          <span className="text-sm font-medium hidden sm:inline">Back</span>
        </Link>

        {/* Project Title (fades in on scroll) */}
        <motion.div style={{ opacity }} className="absolute left-1/2 -translate-x-1/2">
          <span className="text-sm font-semibold text-white/80 tracking-tight">{title}</span>
        </motion.div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white/60"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-sm font-medium transition-all duration-300 text-white/80 hover:text-black hover:bg-white"
              style={{ borderColor: accentColor + "40" }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Live</span>
            </a>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
