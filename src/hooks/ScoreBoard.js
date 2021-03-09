import React, { useState } from "react";
import { isStrike, isSpare, isNewFrame, isFinalFrame } from "../helpers";
import CounterHook from "./Counter";

export default function ScoreBoard() {
  const { pinCounter, frameCounter, incrementPinCounter, incrementFrameCounter, resetPinCount, resetFrameCount } = CounterHook();
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

  // main method
  const takeTurn = (roll) => {
    const { frameScores } = scoreTracker;
    const { pins } = scoreboard;
    let pinCount = 10 - roll;
    let hasResetFrame = false;
    let gameOver = false;
    // loop until frame count is 10
    while (frameCounter < 10) {
      const pinsCopy = pins.slice();
      // handle frame 9 logic
      if (isFinalFrame(frameCounter)) {
        // reset pin count if spare or strike
        if (isSpare(pins[frameCounter][pinCounter - 1], roll) || isStrike(roll)) {
          pinCount = 10;
          if (pinCounter === 2) gameOver = true;
        } else {
          if (pinCounter === 1) gameOver = true;
        }
      } else {
        // if pinCounter is 1 or roll is a strike reset the pin count and increment frame
        if (pinCounter === 1 || isStrike(roll)) {
          pinCount = 10;
          resetPinCount();
          incrementFrameCounter();
          hasResetFrame = true;
        }
      }
      calculateScore(pins, frameCounter, roll, gameOver);
      pinsCopy[frameCounter][pinCounter] = roll;
      setScoreboard((prevState) => ({ ...prevState, pins: pinsCopy, pinCount, gameOver }));
      if (!hasResetFrame) incrementPinCounter();
      break;
    }
  };

  const calculateScore = (pins, frameCounter, roll, gameOver) => {
    const { frameScores, runningTotal } = scoreTracker;
    const previousTwoThrows = pins.flat().slice(-2);
    const previousFrame = pins[frameCounter - 1];

    let frameTotal = 0;
    let previousFrameTotal = 0;
    let bonus = 0;

    // totals current frame
    for (let i = 0; i < pins[frameCounter].length; i++) {
      frameTotal += pins[frameCounter][i];
    }
    frameTotal += roll;
    // totals previous frame
    if (isStrike(previousTwoThrows[0])) {
      bonus += previousTwoThrows[0] + previousTwoThrows[1] + roll;
      if (pins[frameCounter][0] && roll < 10) {
        setScoreTracker((prevState) => ({ ...prevState, runningTotal: bonus + frameTotal + runningTotal, frameScores: [...frameScores, bonus + runningTotal, bonus + runningTotal + frameTotal] }));
      } else {
        if (bonus) {
          setScoreTracker((prevState) => ({ ...prevState, runningTotal: bonus + runningTotal, frameScores: [...frameScores, bonus + runningTotal] }));
        }
      }
    } else {
      if (previousFrame) {
        // check to see if user has thrown a spare
        if (isSpare(previousFrame[0], previousFrame[1]) && !frameScores[frameCounter - 1]) {
          bonus += 10;
          setScoreTracker((prevState) => ({ ...prevState, runningTotal: frameTotal + bonus + runningTotal, frameScores: [...frameScores, frameTotal + bonus + runningTotal] }));
        }
      }
      // if open frame update total
      if (pins[frameCounter][0] && frameTotal < 10) {
        setScoreTracker((prevState) => ({ ...prevState, runningTotal: frameTotal + runningTotal, frameScores: [...frameScores, frameTotal + runningTotal] }));
      }
    }
    if (isFinalFrame(frameCounter)) {
      if (gameOver) {
        setScoreTracker((prevState) => ({ ...prevState, runningTotal: frameTotal + runningTotal, frameScores: [...frameScores, frameTotal + runningTotal] }))
      }
    }

  }

  return { scoreboard, scoreTracker, takeTurn, setScoreboard, setScoreTracker, resetFrameCount, resetPinCount }
};
