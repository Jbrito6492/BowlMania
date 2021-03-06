import React, { useState } from "react";
import { isStrike, isSpare, isNewFrame, isFinalFrame, round10StrikeOrSpare, calculateCurrentFrame } from "../helpers";
import CounterHook from "./Counter";

export default function ScoreBoard() {
  const { counter, incrementCounter } = CounterHook();
  const [scoreboard, setScoreboard] = useState({
    frames: [],
    pins: [],
    totalScore: [],
    remainingPins: 10,
    gameOver: false
  });

  // const takeTurn = (value) => {
  //   const { frames, pins } = scoreboard;
  //   if (isFinalFrame(frames)) {
  //     if (isStrike(value) && pins.length === 19) {
  //       const currentThrow = pins.concat(value).slice(-3);
  //       setScoreboard((prevState) => ({ ...prevState, frames: [...frames, currentThrow], pins: pins.concat(value), gameOver: true }));
  //     }
  //     // if (round10StrikeOrSpare(pins))) {
  //     //   if (pins.length === 20) {
  //     //     const currentThrow = pins.concat(value).slice(-3);
  //     //     setScoreboard((prevState) => ({ ...prevState, frames: [...frames, currentThrow], pins: pins.concat(value), gameOver: true }))
  //     //   } else {
  //     //     setScoreboard((prevState) => ({ ...prevState, pins: pins.concat(value) }));
  //     //   }
  //     // } else {
  //     //   if (pins.length === 19 || pins.length === 20) {
  //     //     const currentThrow = pins.concat(value).slice(-2);
  //     //     setScoreboard((prevState) => ({ ...prevState, frames: [...frames, currentThrow], pins: pins.concat(value), gameOver: true }))
  //     //   } else {
  //     //     setScoreboard((prevState) => ({ ...prevState, pins: pins.concat(value) }));
  //     //   }
  //     // }

  //   } else {
  //     if (isStrike(value)) {
  //       setScoreboard((prevState) => ({ ...prevState, frames: [...frames, [value]], pins: pins.concat([value, null]) }));
  //     } else {
  //       const remainingPins = 10 - value;
  //       if (isNewFrame(pins)) {
  //         setScoreboard((prevState) => ({ ...prevState, pins: pins.concat(value), remainingPins }));
  //       } else {
  //         const currentThrow = pins.concat(value).slice(-2);
  //         setScoreboard((prevState) => ({ ...prevState, frames: [...frames, currentThrow], pins: pins.concat(value), remainingPins: 10 }));
  //       }
  //     }
  //   }
  //   console.log(scoreboard)
  // };

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
    console.log(pins);
    console.log("counter", counter);
    console.log("current frame", calculateCurrentFrame(counter));
  }

  const getTotalScore = () => {
    const { totalScore } = scoreboard;
    return totalScore.reduce((accumulator, currentValue) => (
      accumulator + currentValue
    ), 0)
  }

  return { scoreboard, counter, takeTurn, setScoreboard }
};
