import React, { useState } from "react";
import { getCurrentAttempt, getCurrentFrame } from "../helpers";

export default function ScoreBoard() {
  const [scoreboard, setScoreboard] = useState({
    currentFrame: 1,
    currentAttempt: 1,
    frame1: { score: [], isActive: true },
    frame2: { score: [], isActive: false },
    frame3: { score: [], isActive: false },
    frame4: { score: [], isActive: false },
    frame5: { score: [], isActive: false },
    frame6: { score: [], isActive: false },
    frame7: { score: [], isActive: false },
    frame8: { score: [], isActive: false },
    frame9: { score: [], isActive: false },
    frame10: { score: [], isActive: false },
    total: 0,
  });

  const takeTurn = (value) => {
    const currentFrame = getCurrentFrame(scoreboard);
    const currentAttempt = getCurrentAttempt(scoreboard);
    const key = scoreboard[`frame${currentFrame}`];
    console.log('test', key.score[currentAttempt - 1])
    setScoreboard((prevState) => ({
      ...prevState,
      currentAttempt: currentAttempt + 1,
      total: value,
      [key.score]: key.score.push(value),
      [key.isActive]: false,
    }));
    console.log(scoreboard)
  };

  return { scoreboard, takeTurn }
}