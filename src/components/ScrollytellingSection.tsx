"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "./ScrollyCanvas";
import Overlay from "./Overlay";

/**
 * ScrollytellingSection - Shared container that coordinates scroll progress
 * between ScrollyCanvas and Overlay using a single optimized scroll listener.
 */
export default function ScrollytellingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      ref={sectionRef} 
      data-scrolly-section 
      className="relative h-[350vh]" // Reduced from 500vh to 350vh for faster, more responsive scrolling
    >
      <ScrollyCanvas scrollYProgress={scrollYProgress} />
      <Overlay progress={scrollYProgress} />
    </section>
  );
}
