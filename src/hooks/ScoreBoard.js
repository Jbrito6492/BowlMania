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
    while (frameCounter <= 10) {
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
    const previousThrows = pins.flat().slice(-2);
    const previousThrow = pins[frameCounter - 1];
    let frameTotal = 0;
    if (isFinalFrame(frameCounter) && gameOver) {
      for (let i = 0; i < pins[frameCounter].length; i++) {
        console.log(i, pins[frameCounter][i])
        frameTotal += pins[frameCounter][i];
      }
      frameTotal += roll
      setScoreTracker((prevState) => ({ ...prevState, runningTotal: frameTotal + runningTotal, frameScores: [...frameScores, frameTotal + runningTotal] }))
    } else {
      // update score if previous frame was a spare
      if (previousThrow && isSpare(previousThrow[0], previousThrow[1]) && !frameScores[frameCounter - 1]) {
        frameTotal = 10 + roll;
        setScoreTracker((prevState) => ({ ...prevState, runningTotal: frameTotal + runningTotal, frameScores: [...frameScores, frameTotal + runningTotal] }))
        // update score if previous frame was a strike
      } else if (previousThrows[1] && isStrike(previousThrows[0])) {
        let currentFrame;
        frameTotal = 10 + previousThrows[1] + roll;
        // if the last 2 throws were strikes, board must be updated twice, once for previous frame and once for current frame
        if (pins[frameCounter][0] && pins[frameCounter][0] + roll < 10) {
          currentFrame = pins[frameCounter][0] + roll;
          setScoreTracker((prevState) => ({ ...prevState, runningTotal: frameTotal + runningTotal + currentFrame, frameScores: [...frameScores, frameTotal + runningTotal, frameTotal + runningTotal + currentFrame] }))
        } else {
          setScoreTracker((prevState) => ({ ...prevState, runningTotal: frameTotal + runningTotal, frameScores: [...frameScores, frameTotal + runningTotal] }))
        }
      } else {
        frameTotal = pins[frameCounter][0] + roll;
        if (frameTotal < 10) {
          setScoreTracker((prevState) => ({ ...prevState, runningTotal: frameTotal + runningTotal, frameScores: [...frameScores, frameTotal + runningTotal] }))
        }
      }
    }
  }

  return { scoreboard, scoreTracker, takeTurn, setScoreboard, setScoreTracker, resetFrameCount, resetPinCount }
};
