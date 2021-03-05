import React, { useState } from "react";
import { isStrike, isSpare, isFirstRoll } from "../helpers";

export default function ScoreBoard() {
  const [scoreboard, setScoreboard] = useState({
    frames: [],
    pins: [],
    totalScore: [],
    remainingPins: 10,
    gameOver: false
  });

  const takeTurn = (value) => {
    const { frames, pins } = scoreboard;
    if (isStrike(value)) {
      setScoreboard((prevState) => ({ ...prevState, frames: [...frames, [value]], pins: pins.concat([value, null]) }));
    } else {
      if (isFirstRoll(pins)) {
        const lastThrow = pins.concat(value).slice(-1)[0];
        const remainingPins = 10 - lastThrow;
        setScoreboard((prevState) => ({ ...prevState, pins: pins.concat(value), remainingPins }));
        console.log('test')
      } else {
        console.log('hi')
        const currentThrow = pins.concat(value).slice(-2);
        setScoreboard((prevState) => ({ ...prevState, frames: [...frames, currentThrow], pins: pins.concat(value), remainingPins: 10 }));
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
