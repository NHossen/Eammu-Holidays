"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input[type='submit'], input[type='button'], input[type='checkbox'], input[type='radio'], select, summary, label[for], [data-cursor='link']";

const TEXT_SELECTOR =
  "input:not([type='submit']):not([type='button']):not([type='checkbox']):not([type='radio']):not([type='range']), textarea, [contenteditable='true'], [data-cursor='text']";

const MAX_ACTIVE_RIPPLES = 28;
const TRAIL_MIN_DISTANCE = 20; // px the finger must travel before a new trail ripple
const TRAIL_MIN_INTERVAL = 32; // ms between trail ripples
const HOLD_PULSE_INTERVAL = 650; // ms between pulses while finger rests

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

export default function CustomCursor() {
  // 'mouse' | 'touch' | 'none'
  const [deviceType, setDeviceType] = useState("none");

  const rootRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const touchContainerRef = useRef(null);
  const fingerRef = useRef(null);

  // Detect device (mouse vs touch screen)
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => {
      if (mq.matches) {
        setDeviceType("mouse");
      } else if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
        setDeviceType("touch");
      } else {
        setDeviceType("none");
      }
    };
    update();

    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // 1. Desktop mouse cursor logic (unchanged)
  useEffect(() => {
    if (deviceType !== "mouse") return;

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
  }, [deviceType]);

  // 2. Mobile touch + scroll water ripple logic
  useEffect(() => {
    if (deviceType !== "touch") return;
    const container = touchContainerRef.current;
    const finger = fingerRef.current;
    if (!container || !finger) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const finger_pos = { x: 0, y: 0 }; // smoothed orb position
    const target = { x: 0, y: 0 }; // real finger position
    const last = { x: 0, y: 0, t: 0 }; // last trail ripple
    let touching = false;
    let rafId = 0;
    let holdTimer = 0;

    // Build a ripple "group": several concentric rings + optional droplets
    const spawn = (x, y, kind, strength = 1) => {
      // keep the DOM small so low-end phones stay smooth
      while (container.childElementCount > MAX_ACTIVE_RIPPLES) {
        container.firstElementChild?.remove();
      }

      const group = document.createElement("span");
      group.className = `cc-w cc-w-${kind}`;
      group.style.left = `${x}px`;
      group.style.top = `${y}px`;
      group.style.setProperty("--s", strength.toFixed(2));

      const ringCount = reduceMotion ? 1 : kind === "tap" ? 3 : kind === "hold" ? 2 : 2;
      for (let i = 0; i < ringCount; i++) {
        const ring = document.createElement("i");
        ring.className = "cc-w-ring";
        ring.style.animationDelay = `${i * 0.11}s`;
        ring.style.setProperty("--i", i);
        group.appendChild(ring);
      }

      if (!reduceMotion && kind === "tap") {
        // soft splash flash at the contact point
        const core = document.createElement("i");
        core.className = "cc-w-core";
        group.appendChild(core);

        // little droplets that fly outward
        const drops = 7;
        const offset = Math.random() * Math.PI * 2;
        for (let i = 0; i < drops; i++) {
          const angle = offset + (i / drops) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
          const dist = 26 + Math.random() * 30;
          const drop = document.createElement("i");
          drop.className = "cc-w-drop";
          drop.style.setProperty("--dx", `${(Math.cos(angle) * dist).toFixed(1)}px`);
          drop.style.setProperty("--dy", `${(Math.sin(angle) * dist).toFixed(1)}px`);
          drop.style.setProperty("--ds", (0.6 + Math.random() * 0.7).toFixed(2));
          drop.style.animationDelay = `${(Math.random() * 0.06).toFixed(2)}s`;
          group.appendChild(drop);
        }
      }

      container.appendChild(group);
      // remove after the longest animation has finished
      window.setTimeout(() => group.remove(), 1500);
    };

    const startHoldPulse = () => {
      window.clearInterval(holdTimer);
      holdTimer = window.setInterval(() => {
        if (!touching) return;
        spawn(target.x, target.y, "hold", 1);
      }, HOLD_PULSE_INTERVAL);
    };

    const stopHoldPulse = () => {
      window.clearInterval(holdTimer);
      holdTimer = 0;
    };

    const onTouchStart = (e) => {
      const t = e.touches[0];
      if (!t) return;

      touching = true;
      target.x = t.clientX;
      target.y = t.clientY;
      finger_pos.x = t.clientX;
      finger_pos.y = t.clientY;
      last.x = t.clientX;
      last.y = t.clientY;
      last.t = performance.now();

      finger.style.transform = `translate3d(${t.clientX}px, ${t.clientY}px, 0) translate(-50%, -50%)`;
      finger.dataset.active = "true";

      spawn(t.clientX, t.clientY, "tap", 1);
      startHoldPulse();
    };

    const onTouchMove = (e) => {
      const t = e.touches[0];
      if (!t) return;

      target.x = t.clientX;
      target.y = t.clientY;

      const now = performance.now();
      const dx = t.clientX - last.x;
      const dy = t.clientY - last.y;
      const dist = Math.hypot(dx, dy);
      const dt = now - last.t;

      if (dist < TRAIL_MIN_DISTANCE || dt < TRAIL_MIN_INTERVAL) return;

      // faster swipe => bigger, stronger ripple
      const speed = dist / Math.max(dt, 1); // px per ms
      const strength = clamp(0.8 + speed * 0.55, 0.8, 1.7);

      last.x = t.clientX;
      last.y = t.clientY;
      last.t = now;

      spawn(t.clientX, t.clientY, "trail", strength);

      // restart hold timer so it only pulses when the finger rests
      startHoldPulse();
    };

    const onTouchEnd = (e) => {
      if (e.touches.length > 0) return;
      touching = false;
      finger.dataset.active = "false";
      stopHoldPulse();
    };

    // The glowing orb trails slightly behind the finger like a droplet on water
    const ease = reduceMotion ? 1 : 0.28;
    const animate = () => {
      if (touching) {
        finger_pos.x += (target.x - finger_pos.x) * ease;
        finger_pos.y += (target.y - finger_pos.y) * ease;
        finger.style.transform = `translate3d(${finger_pos.x}px, ${finger_pos.y}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      stopHoldPulse();
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [deviceType]);

  if (deviceType === "none") return null;

  return (
    <>
      <style>{`
        /* ---------------- Desktop styles ---------------- */
        html.cc-on,
        html.cc-on * {
          cursor: none !important;
        }

        .cc-root {
          pointer-events: none;
        }

        .cc-ring-wrap,
        .cc-dot-wrap {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 2147483647;
          pointer-events: none;
          will-change: transform;
        }

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

        .cc-root[data-visible="true"] .cc-ring,
        .cc-root[data-visible="true"] .cc-dot {
          opacity: 1;
        }

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

        .cc-root[data-pressed="true"] .cc-ring {
          transform: scale(0.84);
        }
        .cc-root[data-pressed="true"] .cc-dot {
          transform: scale(1.5);
        }
        .cc-root[data-pressed="true"][data-state="link"] .cc-dot {
          transform: scale(0.8);
        }

        /* ---------------- Mobile water ripple styles ---------------- */
        .cc-touch-layer {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 2147483647;
          overflow: hidden;
        }

        /* Glowing orb that follows the finger with a slight lag */
        .cc-finger {
          position: fixed;
          top: 0;
          left: 0;
          width: 54px;
          height: 54px;
          border-radius: 9999px;
          pointer-events: none;
          opacity: 0;
          transform: translate3d(-100px, -100px, 0);
          background: radial-gradient(
            circle at 38% 34%,
            rgba(255, 255, 255, 0.55) 0%,
            rgba(253, 224, 71, 0.28) 38%,
            rgba(253, 224, 71, 0.08) 68%,
            transparent 100%
          );
          box-shadow:
            0 0 22px rgba(253, 224, 71, 0.38),
            inset 0 0 10px rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(1.5px);
          -webkit-backdrop-filter: blur(1.5px);
          transition: opacity 0.3s ease;
          will-change: transform, opacity;
        }
        .cc-finger[data-active="true"] {
          opacity: 1;
        }

        /* A ripple group sits at the touch point; its children animate */
        .cc-w {
          position: fixed;
          width: 0;
          height: 0;
          pointer-events: none;
        }

        .cc-w-ring {
          position: absolute;
          left: 0;
          top: 0;
          width: 46px;
          height: 46px;
          margin: -23px 0 0 -23px;
          border-radius: 9999px;
          opacity: 0;
          /* glassy water ring: bright crest on the outside, soft shadow trough inside */
          border: 1.5px solid rgba(253, 224, 71, 0.8);
          background: radial-gradient(
            circle,
            transparent 52%,
            rgba(253, 224, 71, 0.16) 70%,
            rgba(255, 255, 255, 0.22) 84%,
            transparent 100%
          );
          box-shadow:
            0 0 14px rgba(253, 224, 71, 0.32),
            inset 0 0 12px rgba(255, 255, 255, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.12);
          will-change: transform, opacity;
          animation: ccRipple 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* tap ripples travel farther, trails stay tighter, hold pulses are gentle */
        .cc-w-tap .cc-w-ring {
          --max: 4.4;
          animation-duration: 1.25s;
        }
        .cc-w-trail .cc-w-ring {
          --max: calc(2.2 * var(--s, 1));
          animation-duration: 0.95s;
        }
        .cc-w-hold .cc-w-ring {
          --max: 3;
          animation-duration: 1.3s;
          border-color: rgba(253, 224, 71, 0.55);
        }

        /* later rings in a set are thinner and fainter, like real wave decay */
        .cc-w-ring:nth-child(2) {
          border-width: 1px;
          filter: blur(0.2px);
        }
        .cc-w-ring:nth-child(3) {
          border-width: 0.75px;
          filter: blur(0.4px);
        }

        @keyframes ccRipple {
          0% {
            transform: scale(0.18);
            opacity: 0;
          }
          12% {
            opacity: 0.95;
          }
          100% {
            transform: scale(var(--max, 3));
            opacity: 0;
          }
        }

        /* bright splash at the exact contact point */
        .cc-w-core {
          position: absolute;
          left: 0;
          top: 0;
          width: 30px;
          height: 30px;
          margin: -15px 0 0 -15px;
          border-radius: 9999px;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.85) 0%,
            rgba(253, 224, 71, 0.55) 35%,
            transparent 72%
          );
          opacity: 0;
          animation: ccCore 0.55s ease-out forwards;
        }

        @keyframes ccCore {
          0% {
            transform: scale(0.2);
            opacity: 1;
          }
          100% {
            transform: scale(1.7);
            opacity: 0;
          }
        }

        /* droplets thrown outward on tap */
        .cc-w-drop {
          position: absolute;
          left: 0;
          top: 0;
          width: 6px;
          height: 6px;
          margin: -3px 0 0 -3px;
          border-radius: 9999px;
          background: radial-gradient(
            circle at 35% 30%,
            #ffffff 0%,
            #fde047 55%,
            rgba(253, 224, 71, 0.4) 100%
          );
          box-shadow: 0 0 6px rgba(253, 224, 71, 0.6);
          opacity: 0;
          animation: ccDrop 0.7s cubic-bezier(0.2, 0.8, 0.3, 1) forwards;
        }

        @keyframes ccDrop {
          0% {
            transform: translate(0, 0) scale(var(--ds, 1));
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--dx), var(--dy)) scale(0);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cc-w-ring {
            animation-duration: 0.5s !important;
          }
        }
      `}</style>

      {/* Desktop cursor */}
      {deviceType === "mouse" && (
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
      )}

      {/* Mobile water touch layer */}
      {deviceType === "touch" && (
        <div className="cc-touch-layer" aria-hidden="true">
          <div ref={fingerRef} className="cc-finger" data-active="false" />
          <div
            ref={touchContainerRef}
            style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
          />
        </div>
      )}
    </>
  );
}