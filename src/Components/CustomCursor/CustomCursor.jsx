"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input[type='submit'], input[type='button'], input[type='checkbox'], input[type='radio'], select, summary, label[for], [data-cursor='link']";

const TEXT_SELECTOR =
  "input:not([type='submit']):not([type='button']):not([type='checkbox']):not([type='radio']):not([type='range']), textarea, [contenteditable='true'], [data-cursor='text']";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  const rootRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  // Enable only on devices with a real mouse (hide on mobile/tablet/touch)
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();

    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const root = rootRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!root || !ring || !dot) return;

    document.documentElement.classList.add("cc-on");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const ease = reduceMotion ? 1 : 0.18;

    const mouse = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let firstMove = true;
    let rafId = 0;
    let currentState = "default";

    const setState = (next) => {
      if (next === currentState) return;
      currentState = next;
      root.dataset.state = next;
    };

    const getState = (target) => {
      if (!target || typeof target.closest !== "function") return "default";
      if (target.closest(TEXT_SELECTOR)) return "text";
      if (target.closest(INTERACTIVE_SELECTOR)) return "link";
      return "default";
    };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (firstMove) {
        pos.x = mouse.x;
        pos.y = mouse.y;
        firstMove = false;
      }

      root.dataset.visible = "true";
      setState(getState(e.target));

      // Dot follows the pointer exactly
      dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
    };

    const onMouseDown = () => {
      root.dataset.pressed = "true";
    };
    const onMouseUp = () => {
      root.dataset.pressed = "false";
    };
    const onLeave = () => {
      root.dataset.visible = "false";
    };
    const onEnter = () => {
      root.dataset.visible = "true";
    };

    const animate = () => {
      pos.x += (mouse.x - pos.x) * ease;
      pos.y += (mouse.y - pos.y) * ease;

      ring.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("cc-on");
    };
  }, [enabled]);

  // Nothing is rendered on mobile / touch devices
  if (!enabled) return null;

  return (
    <>
      <style>{`
        html.cc-on,
        html.cc-on * {
          cursor: none !important;
        }

        .cc-root {
          pointer-events: none;
        }

        /* Wrappers are positioned by JS; inner elements handle the visuals */
        .cc-ring-wrap,
        .cc-dot-wrap {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 2147483647;
          pointer-events: none;
          will-change: transform;
        }

        /* ---------- Ring (clean, no inner white shadow, no blur) ---------- */
        .cc-ring {
          width: 34px;
          height: 34px;
          border-radius: 9999px;
          border: 1.5px solid rgba(253, 224, 71, 0.8);
          background: rgba(253, 224, 71, 0.1);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
          opacity: 0;
          transform: scale(1);
          transition:
            width 0.28s cubic-bezier(0.22, 1, 0.36, 1),
            height 0.28s cubic-bezier(0.22, 1, 0.36, 1),
            border-radius 0.28s cubic-bezier(0.22, 1, 0.36, 1),
            background-color 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            opacity 0.25s ease,
            transform 0.18s ease;
        }

        /* ---------- Dot ---------- */
        .cc-dot {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: #fde047;
          box-shadow:
            0 0 0 1px rgba(0, 0, 0, 0.12),
            0 0 8px rgba(253, 224, 71, 0.8);
          opacity: 0;
          transform: scale(1);
          transition:
            transform 0.2s ease,
            opacity 0.25s ease;
        }

        /* Visible */
        .cc-root[data-visible="true"] .cc-ring,
        .cc-root[data-visible="true"] .cc-dot {
          opacity: 1;
        }

        /* Link / button hover: almost empty so text stays readable */
        .cc-root[data-state="link"] .cc-ring {
          width: 44px;
          height: 44px;
          border-color: rgba(253, 224, 71, 0.95);
          background: rgba(253, 224, 71, 0.05);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .cc-root[data-state="link"] .cc-dot {
          transform: scale(0.6);
        }

        /* Text input hover: thin caret-like bar */
        .cc-root[data-state="text"] .cc-ring {
          width: 3px;
          height: 26px;
          border-radius: 9999px;
          border-color: rgba(253, 224, 71, 0.95);
          background: rgba(253, 224, 71, 0.9);
          box-shadow: none;
        }
        .cc-root[data-state="text"] .cc-dot {
          opacity: 0;
        }

        /* Pressed */
        .cc-root[data-pressed="true"] .cc-ring {
          transform: scale(0.84);
        }
        .cc-root[data-pressed="true"] .cc-dot {
          transform: scale(1.5);
        }
        .cc-root[data-pressed="true"][data-state="link"] .cc-dot {
          transform: scale(0.8);
        }
      `}</style>

      <div
        ref={rootRef}
        className="cc-root"
        data-state="default"
        data-visible="false"
        data-pressed="false"
        aria-hidden="true"
      >
        <div ref={ringRef} className="cc-ring-wrap">
          <div className="cc-ring" />
        </div>
        <div ref={dotRef} className="cc-dot-wrap">
          <div className="cc-dot" />
        </div>
      </div>
    </>
  );
}