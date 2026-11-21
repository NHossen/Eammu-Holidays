"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [isLink, setIsLink] = useState(false);

  useEffect(() => {
    // Skip on touch/mobile devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let animationFrameId;

    const checkInteractive = (target) => {
      if (!target || typeof target.closest !== "function") return false;
      return Boolean(
        target.closest(
          "a, button, [role='button'], input[type='submit'], input[type='button'], select, label[for]"
        )
      );
    };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setVisible(true);
      setIsLink(checkInteractive(e.target));

      // Keep the small dot at the exact pointer coordinates
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseDown = () => setClicking(true);
    const onMouseUp = () => setClicking(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    const animate = () => {
      // Smooth lag/follow effect for the outer ring
      ring.x += (mouse.x - ring.x) * 0.16;
      ring.y += (mouse.y - ring.y) * 0.16;

      if (ringRef.current) {
        const clickScale = clicking ? 0.85 : 1;
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(${clickScale})`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [clicking]);

  if (!visible) return null;

  return (
    <>
      {/* Smooth lagging light-yellow ring (grows slightly on links/buttons) */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-50 rounded-full border-2 border-yellow-300/85 bg-yellow-200/25 transition-[width,height,background-color,border-color] duration-150 ease-out ${
          isLink ? "h-11 w-11 border-yellow-200 bg-yellow-200/35" : "h-8 w-8"
        }`}
      />
      {/* Exact tiny pointer dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-50 h-1 w-1 rounded-full bg-yellow-300"
      />
    </>
  );
}