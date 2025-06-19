"use client";

import React from "react";

interface GlowTextProps {
  text: string;
  colorFrom?: string;
  colorTo?: string;
  animationSpeed?: number;
}

export const GlowText: React.FC<GlowTextProps> = ({
  text,
  colorFrom = "#3B82F6",
  colorTo = "#06B6D4",
  animationSpeed = 1.2,
}) => (
  <span
    style={{
      background: `linear-gradient(90deg, ${colorFrom}, ${colorTo})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      transition: `filter ${animationSpeed}s`,
    }}
    className="glow-text"
  >
    {text}
  </span>
);
