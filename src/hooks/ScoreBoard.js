import React, { useState } from "react";
import { isStrike, isSpare, isNewFrame, isFinalFrame, earnedBonusRound } from "../helpers";

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
    if (isFinalFrame(frames)) {
      if (isStrike(value) || isSpare(pins.slice(-1)[0], value, pins)) {
        if (pins.length === 20) {
          const currentThrow = pins.slice(-3);
          setScoreboard((prevState) => ({ ...prevState, frames: [...frames, currentThrow], pins: pins.concat(value), gameOver: true }))
        } else {
          setScoreboard((prevState) => ({ ...prevState, pins: pins.concat(value) }));
        }
      } else {
        if (pins.length === 19) {
          const currentThrow = pins.slice(-2);
          setScoreboard((prevState) => ({ ...prevState, frames: [...frames, currentThrow], pins: pins.concat(value), gameOver: true }))
        } else {
          setScoreboard((prevState) => ({ ...prevState, pins: pins.concat(value) }));
        }
      }
    } else {
      if (isStrike(value)) {
        setScoreboard((prevState) => ({ ...prevState, frames: [...frames, [value]], pins: pins.concat([value, null]) }));
      } else {
        const lastThrow = pins.concat(value).slice(-1)[0];
        const remainingPins = 10 - lastThrow;
        if (isNewFrame(pins)) {
          setScoreboard((prevState) => ({ ...prevState, pins: pins.concat(value), remainingPins }));
        } else {
          const currentThrow = pins.concat(value).slice(-2);
          setScoreboard((prevState) => ({ ...prevState, frames: [...frames, currentThrow], pins: pins.concat(value), remainingPins: 10 }));
        }
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
