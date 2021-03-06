import React, { useState } from "react";
import { isStrike, isSpare, isNewFrame, getPinCount } from "../helpers";
import CounterHook from "./Counter";

export default function ScoreBoard() {
  const { counter, incrementCounter } = CounterHook();
  const [scoreboard, setScoreboard] = useState({
    pins: [],
    totalScore: [],
    pinCount: 10,
    gameOver: false
  });

  const takeTurn = (roll) => {
    const { pins } = scoreboard;
    const pinsCopy = pins.slice();
    while (counter <= 17) {
      let i = counter;
      pinsCopy[i] = roll;
      if (isNewFrame(counter)) {
        if (isStrike(roll)) {
          incrementCounter(2);
          setScoreboard((prevState) => ({ ...prevState, pins: pinsCopy }));
          return;
        }
        const pinCount = getPinCount(roll);
        incrementCounter(1);
        setScoreboard((prevState) => ({ ...prevState, pins: pinsCopy, pinCount }));
      } else {
        incrementCounter(1);
        setScoreboard((prevState) => ({ ...prevState, pins: pinsCopy, pinCount: 10 }));
      }
      return;
    }
  };

  const getTotalScore = () => {
    const { totalScore } = scoreboard;
    return totalScore.reduce((accumulator, currentValue) => (
      accumulator + currentValue
    ), 0)
  }

  return { scoreboard, counter, takeTurn, setScoreboard }
};
