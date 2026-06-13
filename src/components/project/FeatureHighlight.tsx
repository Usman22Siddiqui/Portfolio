"use client";

import { motion } from "framer-motion";
import BrowserFrame from "./BrowserFrame";

interface FeatureHighlightProps {
  title: string;
  description: string;
  screenshotSrc?: string;
  projectTitle: string;
  accentColor: string;
  reverse?: boolean;
  liveUrl?: string;
  index: number;
}

export default function FeatureHighlight({
  title,
  description,
  screenshotSrc,
  projectTitle,
  accentColor,
  reverse = false,
  liveUrl,
  index,
}: FeatureHighlightProps) {
  return (
    <section className="relative z-20 py-20 md:py-28 px-6 md:px-8 bg-[#08080a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={reverse ? "lg:order-2" : ""}
          >
            {/* Feature number */}
            <span
              className="text-[11px] font-mono uppercase tracking-[0.25em] mb-4 block"
              style={{ color: accentColor + "80" }}
            >
              Feature {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {title}
              <span style={{ color: accentColor }}>.</span>
            </h3>

            <p className="text-white/50 text-lg leading-relaxed">{description}</p>

            {/* Decorative line */}
            <div
              className="h-[2px] w-20 mt-8 rounded-full"
              style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }}
            />
          </motion.div>

          {/* Screenshot */}
          {screenshotSrc && (
            <motion.div
              initial={{ opacity: 0, x: reverse ? -40 : 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={reverse ? "lg:order-1" : ""}
            >
              <BrowserFrame
                src={screenshotSrc}
                alt={`${projectTitle} - ${title}`}
                url={liveUrl || "localhost:3000"}
                accentColor={accentColor}
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
