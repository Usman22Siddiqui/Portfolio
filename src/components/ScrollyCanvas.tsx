"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 75;

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

export default function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const rafPendingRef = useRef<boolean>(false);

  // === 1. Preload all frames ===
  useEffect(() => {
    let cancelled = false;
    let count = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const num = i.toString().padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${num}.jpg`;
      img.onload = () => {
        if (cancelled) return;
        count++;
        setLoadProgress(count);
        if (count === FRAME_COUNT) {
          imagesRef.current = imgs;
          setIsReady(true);
        }
      };
      img.onerror = () => {
        if (cancelled) return;
        count++;
        setLoadProgress(count);
        if (count === FRAME_COUNT) {
          imagesRef.current = imgs;
          setIsReady(true);
        }
      };
      imgs.push(img);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  // === 2. Paint a frame onto the canvas with object-fit: cover logic ===
  const paintFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const clampedIndex = Math.min(Math.max(index, 0), FRAME_COUNT - 1);
    const img = imagesRef.current[clampedIndex];
    if (!img || !img.complete || !img.naturalWidth) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = (cw - sw) / 2;
    const sy = (ch - sh) / 2;

    // No clearRect needed — JPEGs are fully opaque and drawImage overwrites everything
    ctx.drawImage(img, sx, sy, sw, sh);
  }, []);

  // === 3. rAF-batched render loop — coalesces multiple scroll events into one paint per vsync ===
  const scheduleRender = useCallback(() => {
    if (rafPendingRef.current) return; // already scheduled, skip
    rafPendingRef.current = true;

    requestAnimationFrame(() => {
      rafPendingRef.current = false;
      const target = targetFrameRef.current;
      if (target !== currentFrameRef.current) {
        currentFrameRef.current = target;
        paintFrame(target);
      }
    });
  }, [paintFrame]);

  // === 4. Size the canvas to the window and repaint current frame ===
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (isReady) {
        paintFrame(currentFrameRef.current);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    // If images just finished loading, paint the initial frame (frame 0)
    if (isReady) {
      paintFrame(0);
    }

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [isReady, paintFrame]);

  // === 5. Scroll-linked frame rendering — sets target and schedules rAF ===
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isReady) return;
    const frameIndex = Math.min(
      Math.max(Math.round(latest * (FRAME_COUNT - 1)), 0),
      FRAME_COUNT - 1
    );
    targetFrameRef.current = frameIndex;
    scheduleRender();
  });

  return (
    <>
      {/* Loading screen */}
      {!isReady && (
        <div className="sticky top-0 h-screen w-full z-50 flex flex-col items-center justify-center bg-[#08080a]">
          <p className="text-white/80 text-lg font-light mb-6 tracking-widest uppercase">
            Loading Experience
          </p>
          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent to-orange-400 transition-all duration-200"
              style={{ width: `${(loadProgress / FRAME_COUNT) * 100}%` }}
            />
          </div>
          <p className="mt-3 text-white/40 text-xs tabular-nums">
            {Math.round((loadProgress / FRAME_COUNT) * 100)}%
          </p>
        </div>
      )}

      {/* Sticky canvas viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{
            display: isReady ? "block" : "none",
            willChange: "transform",  // promote to own compositor layer
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#08080a] to-transparent pointer-events-none z-[1]" />
      </div>
    </>
  );
}
