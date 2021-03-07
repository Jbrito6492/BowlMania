import React, { useState, useEffect } from "react";
import { isStrike, isSpare, isNewFrame, getPinCount, isFinalFrame } from "../helpers";
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
    let pinCount = 10 - roll;
    let hasResetFrame = false;
    let gameOver = false;
    while (frameCounter < 10) {
      const pinsCopy = pins.slice();
      if (isFinalFrame(frameCounter) && pinCounter >= 0) {
        console.log("test")
        if (isSpare(pins[frameCounter][pinCounter - 1], roll) || isStrike(roll)) {
          pinCount = 10;
          if (pinCounter === 2) gameOver = true;
        } else {
          if (pinCounter === 1) gameOver = true;
        }
      } else {
        if (pinCounter === 1 || isStrike(roll)) {
          resetPinCount();
          pinCount = 10;
          incrementFrameCounter();
          hasResetFrame = true;
        }
      }
      pinsCopy[frameCounter][pinCounter] = roll;
      setScoreboard((prevState) => ({ ...prevState, pins: pinsCopy, pinCount, gameOver }));
      if (!hasResetFrame) incrementPinCounter();
      console.log(scoreboard)
      break;
    }

  };


  return { scoreboard, takeTurn, setScoreboard, setCounter }
};
