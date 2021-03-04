import React, { useState } from "react";
import { getCurrentAttempt, getCurrentFrame, isStrike, isSpare } from "../helpers";

export default function ScoreBoard() {
  const [scoreboard, setScoreboard] = useState({
    currentFrame: 1,
    currentAttempt: 1,
    frame1: { total: null, isActive: true },
    frame2: { total: null, isActive: false },
    frame3: { total: null, isActive: false },
    frame4: { total: null, isActive: false },
    frame5: { total: null, isActive: false },
    frame6: { total: null, isActive: false },
    frame7: { total: null, isActive: false },
    frame8: { total: null, isActive: false },
    frame9: { total: null, isActive: false },
    frame10: { total: null, isActive: false },
    runningTotal: 0,
  });

  const takeTurn = (value) => {
    let frameTotal;
    let roll1;
    let roll2;
    let roll3;
    const frameNum = getCurrentFrame(scoreboard);
    const currentAttempt = getCurrentAttempt(scoreboard);
    const key = `frame${frameNum}`;
    const prevFrameTotal = scoreboard[key].total;
    const currentFrame = scoreboard[key];
    console.log('current frame', currentFrame)
    if (currentAttempt === 1) {
      if (isStrike(value)) {
        frameTotal = isNaN(roll1 + roll2 + roll3) ? null : roll1 + roll2 + roll3;
        roll1 = 10;
        roll2 = scoreboard[`frame${currentFrame + 1}`].roll1;
        roll3 = scoreboard[`frame${currentFrame + 2}`].roll2;
        setScoreboard((prevState) => ({
          ...prevState,
          currentFrame: frameNum + 1,
          [key]: {
            ...currentFrame,
            total: frameTotal,
            roll1: () => roll1,
            roll2: () => roll2(),
            roll3: () => roll3(),
          }
        }))
      } else {
        roll1 = value;
        setScoreboard((prevState) => ({
          ...prevState,
          currentFrame: frameNum + 1,
          [key]:
          {
            ...currentFrame,
            total: frameTotal,
            roll1: () => roll1,
          }
        }))
      }
    } else {
      if (isSpare(prevFrameTotal, value)) {
        setScoreboard((prevState) => ({
          ...prevState,
          currentAttempt: currentAttempt + 1,
          [key]: {
            ...currentFrame,
            total: frameTotal,
            roll2: () => value,
            roll3: () => roll2(),
          }
        }))
      } else {
        setScoreboard((prevState) => ({
          ...prevState,
          currentAttempt: currentAttempt + 1,
          [key]: {
            ...currentFrame,
            total: frameTotal,
            roll2: () => value,
          }
        }))
      }
    }
    console.log(scoreboard)
  }
  return { scoreboard, takeTurn }
};
