import React, { useState, useEffect } from "react";
import { isStrike, isSpare, isNewFrame, getPinCount, isFinalFrame } from "../helpers";
import CounterHook from "./Counter";

export default function ScoreBoard() {
  const { pinCounter, frameCounter, incrementPinCounter, incrementFrameCounter, resetPinCount } = CounterHook();
  const [scoreboard, setScoreboard] = useState({
    pins: [[], [], [], [], [], [], [], [], [], []],
    pinCount: 10,
    gameOver: false,
    runningTotal: 0,
  });

  const [scoreTracker, setScoreTracker] = useState({
    runningTotal: 0,
    frameScores: [],
  });

  const takeTurn = (roll) => {
    const { frameScores } = scoreTracker;
    const { pins } = scoreboard;
    let pinCount = 10 - roll;
    let hasResetFrame = false;
    let gameOver = false;
    while (frameCounter < 10) {
      const pinsCopy = pins.slice();
      if (isFinalFrame(frameCounter) && pinCounter) {
        if (isSpare(pins[frameCounter][pinCounter - 1], roll) || isStrike(roll)) {
          pinCount = 10;
          if (pinCounter === 2) gameOver = true;
        } else {
          if (pinCounter === 1) gameOver = true;
        }
      } else {
        if (pinCounter === 1 || isStrike(roll)) {
          pinCount = 10;
          resetPinCount();
          incrementFrameCounter();
          hasResetFrame = true;
        }
      }

      const previousThrows = pins.flat().slice(-2);
      const previousThrow = pins[frameCounter - 1];
      // update score if previous frame was a spare
      if (previousThrow && isSpare(previousThrow[0], previousThrow[1]) && !frameScores[frameCounter - 1]) {
        updateScore(10 + roll);
        // update score if previous frame was a strike
      } else if (previousThrows[1] && isStrike(previousThrows[0])) {
        const bonusTotal = 10 + previousThrows[1] + roll;
        updateScore(bonusTotal);
      } else {
        const frameTotal = pins[frameCounter][0] + roll;
        if (frameTotal && frameTotal < 10) {
          updateScore(frameTotal);
        }
      }

      pinsCopy[frameCounter][pinCounter] = roll;
      setScoreboard((prevState) => ({ ...prevState, pins: pinsCopy, pinCount, gameOver }));
      if (!hasResetFrame) incrementPinCounter();
      console.log(scoreTracker)
      console.log(scoreboard)
      break;
    }
  };

  const updateScore = (frameTotal) => {
    const { frameScores, runningTotal } = scoreTracker;
    const frameScoresCopy = frameScores.slice();
    setScoreTracker((prevState) => ({ ...prevState, runningTotal: frameTotal + runningTotal, frameScores: [...frameScores, frameTotal + runningTotal] }))
  };


  return { scoreboard, scoreTracker, takeTurn, setScoreboard }
};
