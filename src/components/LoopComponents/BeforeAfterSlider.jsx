// src/components/BeforeAfterSlider.jsx
import React, { useRef, useState, useEffect } from "react";

const labelClass =
  "absolute top-3 md:top-4 z-[2] bg-dark-primary/50 text-white uppercase tracking-wide " +
  "px-2.5 py-1 text-[10px] md:text-xs";

export default function BeforeAfterSlider({
  /* NEW direct props (preferred) */
  before,
  after,
  title,

  /* Legacy shape still supported */
  item,

  className = "",
}) {
  // Resolve sources (string or Astro Image import)
  const beforeSrc =
    (typeof before === "string" ? before : before?.src) ??
    item?.data?.beforeImage?.src ??
    item?.before?.src ??
    item?.before;

  const afterSrc =
    (typeof after === "string" ? after : after?.src) ??
    item?.data?.afterImage?.src ??
    item?.after?.src ??
    item?.after;

  const altText = title ?? item?.data?.title ?? item?.slug ?? "project-image";

  if (!beforeSrc || !afterSrc) return null;

  const [dividerPct, setDividerPct] = useState(0.5);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  const onPointerMove = (clientX) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clamp(clientX - rect.left, 0, rect.width);
    setDividerPct(x / rect.width);
  };

  const handleMouseMove = (e) => onPointerMove(e.clientX);
  const handleTouchMove = (e) => {
    if (e.touches.length) onPointerMove(e.touches[0].clientX);
  };

  const stopDrag = () => (isDragging.current = false);

  const startMouse = (e) => {
    e.stopPropagation();
    isDragging.current = true;
  };
  const startTouch = (e) => {
    e.stopPropagation();
    isDragging.current = true;
    e.preventDefault();
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", stopDrag);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDrag);
    };
  }, []);

  return (
    <article
      ref={containerRef}
      className={
        "relative w-full overflow-hidden ring-1 ring-black/5 shadow-xl" +
        "h-80 md:h-[58vh] " +
        className
      }
    >
      {/* AFTER (under) — clipped on the left */}
      <img
        src={afterSrc}
        alt={`After: ${altText}`}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 0 0 ${dividerPct * 100}%)` }}
        loading="lazy"
      />

      {/* BEFORE (over) — clipped on the right */}
      <img
        src={beforeSrc}
        alt={`Before: ${altText}`}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${(1 - dividerPct) * 100}% 0 0)` }}
        loading="lazy"
      />

      {/* Labels */}
      <div className={`${labelClass} left-3 md:left-4`}>Before</div>
      <div className={`${labelClass} right-3 md:right-4`}>After</div>

      {/* Divider handle */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: `${dividerPct * 100}%`, transform: "translateX(-50%)" }}
      >
        {/* vertical line */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/70 pointer-events-none" />
        {/* grabber */}
        <button
          type="button"
          aria-label="Drag to compare before and after"
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2
                     bg-primary text-white w-12 h-12 flex items-center justify-center
                     shadow-lg cursor-ew-resize touch-none"
          onMouseDown={startMouse}
          onTouchStart={startTouch}
        >
          {/* < > */}
          <svg viewBox="0 0 24 24" className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <svg viewBox="0 0 24 24" className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </article>
  );
}
