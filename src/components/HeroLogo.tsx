"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { RecLogo } from "./RecLogo";

/** Matches CSS timeline: draw + outline pulse + settle (~2.4s). */
const ANIMATION_MS = 2450;

/**
 * Hero-only logo wrapper: plays the circuit-draw animation on every mount
 * (full page load/refresh), then settles into the gentle float.
 * Nav/footer logos stay static via shared RecLogo without this wrapper.
 */
export function HeroLogo() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [float, setFloat] = useState(false);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      root.classList.add("rec-logo-hero--settled");
      setFloat(true);
      return;
    }

    // Force a layout read so adding the animate class reliably restarts CSS animations.
    void root.offsetWidth;
    root.classList.add("rec-logo-hero--animate");

    const timer = window.setTimeout(() => {
      root.classList.remove("rec-logo-hero--animate");
      root.classList.add("rec-logo-hero--settled");
      setFloat(true);
    }, ANIMATION_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      ref={rootRef}
      className="rec-logo-hero relative mx-auto w-[96px] min-[380px]:w-[112px] sm:w-[132px]"
    >
      <RecLogo
        size={132}
        className={`mx-auto h-auto w-full max-w-full${float ? " animate-float" : ""}`}
        title="REC isometric cube logo"
      />
    </div>
  );
}
