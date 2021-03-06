import React, { useState } from "react";
import { isStrike, isSpare, isNewFrame, getPinCount } from "../helpers";
import CounterHook from "./Counter";

export default function ScoreBoard() {
  const { pinCounter, frameCounter, incrementPinCounter, incrementFrameCounter, resetPinCount, setCounter } = CounterHook();
  const [scoreboard, setScoreboard] = useState({
    pins: [[], [], [], [], [], [], [], [], [], []],
    totalScore: [],
    pinCount: 10,
    gameOver: false
  });

  const takeTurn = (roll) => {
    const { pins } = scoreboard;
    const pinsCopy = pins.slice();
    let earnedBonus = false;
    while (frameCounter <= 9) {
      let i = frameCounter;
      let j = pinCounter;
      pinsCopy[i][j] = roll;
      const pinCount = 10 - roll;
      if (j === 1 || isStrike(roll)) {
        resetPinCount();
        incrementFrameCounter();
        setScoreboard((prevState) => ({ ...prevState, pins: pinsCopy, pinCount: 10 }));
      } else {
        incrementPinCounter();
        setScoreboard((prevState) => ({ ...prevState, pins: pinsCopy, pinCount }));
      }
      if (i === 9) {

      }
      console.log(pins)
      return;
    }
  };
  // check if strike, check if is spare(pins[i][j] + pins[i][j - 1]) ===

  return { scoreboard, takeTurn, setScoreboard, setCounter }
};
