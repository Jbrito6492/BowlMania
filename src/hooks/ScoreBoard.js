import React, { useState } from "react";
import { isStrike, isSpare } from "../helpers";

export default function ScoreBoard() {
  const [scoreboard, setScoreboard] = useState({
    frames: [],
    pins: [],
    totalScore: [],
    remainingPins: 10
  });

  const takeTurn = (value) => {
    const { frames, pins } = scoreboard;
    if (isStrike(value)) {
      setScoreboard((prevState) => ({ ...prevState, frames: [...frames, [value, null]], pins: pins.concat(value) }));
    } else {
      if (pins.length % 2 === 1) {
        const currentThrow = pins.concat(value).slice(-2);
        setScoreboard((prevState) => ({ ...prevState, frames: [...frames, currentThrow], pins: pins.concat(value), remainingPins: 10 }));
      } else {
        const lastThrow = pins.concat(value).slice(-1)[0];
        const remainingPins = 10 - lastThrow;
        setScoreboard((prevState) => ({ ...prevState, pins: pins.concat(value), remainingPins }));
      }
    }
    console.log(scoreboard)
  };

  const getTotalScore = () => {
    const { totalScore } = scoreboard;
    return totalScore.reduce((accumulator, currentValue) => (
      accumulator + currentValue
    ), 0)
  }

  return { scoreboard, takeTurn, setScoreboard }
};
