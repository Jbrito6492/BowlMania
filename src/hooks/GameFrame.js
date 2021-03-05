import React from "react";

export default function GameFrame(scoreboard) {
  const { pins } = scoreboard;
  const [isActive, setIsActive] = useState(false);
  const [frameTotal, setFrameTotal] = useState(null);

  const firstAttempt = pins.length % 2 === 0;
  const prevThrow = pins.slice(-1)[0];
  const prevTwoThrows = pins.slice(-2)[0];

  return { isActive, setIsActive };
}