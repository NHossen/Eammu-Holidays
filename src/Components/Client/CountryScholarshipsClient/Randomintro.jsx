"use client";
// components/RandomIntro.jsx  ← CLIENT COMPONENT
// Picks and renders a random intro string on the client.
// Must be client-side because Math.random() differs between server and client,
// which would cause a React hydration mismatch if run in the server component.

import { useState } from "react";

export default function RandomIntro({ intros = [] }) {
  // useState initializer runs once on mount — safe for random selection
  const [text] = useState(() => {
    if (!intros.length) return "";
    return intros[Math.floor(Math.random() * intros.length)];
  });

  return (
    <p className="text-blue-100/60 mt-3 text-base max-w-2xl leading-relaxed">
      {text}
    </p>
  );
}