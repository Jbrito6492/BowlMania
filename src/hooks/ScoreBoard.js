import React, { useState } from "react";
import { isStrike, isSpare } from "../helpers";

export default function ScoreBoard() {
  const [scoreboard, setScoreboard] = useState({
    frames: [],
    pins: [],
    totalScore: []
  });

  const takeTurn = (value) => {
    const { frames, pins } = scoreboard;
    if (pins.length % 2 === 1) {
      const currentThrow = pins.concat(value).slice(-2);
      setScoreboard((prevState) => ({ ...prevState, frames: [...frames, currentThrow], pins: pins.concat(value) }));
    } else {
      setScoreboard((prevState) => ({ ...prevState, pins: pins.concat(value) }));
    }
    console.log(scoreboard)
  };

  return { scoreboard, takeTurn }
};
