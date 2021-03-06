import React, { useState } from "react";
import { isStrike, isSpare, isNewFrame } from "../helpers";
import CounterHook from "./Counter";

export default function ScoreBoard() {
  const { counter, incrementCounter } = CounterHook();
  const [scoreboard, setScoreboard] = useState({
    pins: [],
    totalScore: [],
    remainingPins: 10,
    gameOver: false
  });

  const takeTurn = (roll) => {
    const { pins } = scoreboard;
    const pinsCopy = pins.slice();
    while (counter <= 17) {
      let i = counter;
      pinsCopy[i] = roll;
      setScoreboard((prevState) => ({ ...prevState, pins: pinsCopy }));
      if (isNewFrame(counter) && isStrike(roll)) {
        incrementCounter(2);
      } else {
        incrementCounter(1);
      }
      break;
    }
  }

  const getTotalScore = () => {
    const { totalScore } = scoreboard;
    return totalScore.reduce((accumulator, currentValue) => (
      accumulator + currentValue
    ), 0)
  }

  return { scoreboard, counter, takeTurn, setScoreboard }
};
