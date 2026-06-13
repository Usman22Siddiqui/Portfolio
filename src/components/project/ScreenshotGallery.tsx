"use client";

import { motion } from "framer-motion";
import BrowserFrame from "./BrowserFrame";

interface ScreenshotGalleryProps {
  screenshots: string[];
  title: string;
  accentColor: string;
  liveUrl?: string;
}

export default function ScreenshotGallery({
  screenshots,
  title,
  accentColor,
  liveUrl,
}: ScreenshotGalleryProps) {
  // Show remaining screenshots beyond the first 6 (which are in the scroll sequence)
  const galleryScreenshots = screenshots.slice(6, 14);

  if (galleryScreenshots.length === 0) return null;

  return (
    <section className="relative z-20 py-32 px-6 md:px-8 bg-[#08080a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span
            className="text-[11px] font-mono uppercase tracking-[0.25em] mb-3 block"
            style={{ color: accentColor }}
          >
            More Screens
          </span>
          <div
            className="h-[1px] w-16"
            style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }}
          />
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryScreenshots.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <BrowserFrame
                src={src}
                alt={`${title} screenshot ${i + 7}`}
                url={liveUrl || "localhost:3000"}
                accentColor={accentColor}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
