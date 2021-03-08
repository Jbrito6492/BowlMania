import React, { useState } from "react";

export default function Counter() {
  const [pinCounter, setPinCounter] = useState(0);
  const [frameCounter, setFrameCounter] = useState(0);

  const incrementPinCounter = () => {
    setPinCounter((prevState) => (prevState += 1));
  };

  const incrementFrameCounter = () => {
    setFrameCounter((prevState) => (prevState += 1));
  };

  const resetPinCount = () => {
    setPinCounter(0);
  };

  const resetFrameCount = () => {
    setFrameCounter(0);
  }

  return { pinCounter, frameCounter, incrementPinCounter, incrementFrameCounter, resetPinCount, resetFrameCount }
}