import React, { useState, useEffect } from "react";
import GameFrame from "./GameFrame.jsx";
import { calculateCurrentFrame, isNewFrame } from "../helpers";
import uuid from "react-uuid";

export default function MappedGameFrame({ counter, scoreboard }) {
  const { pins } = scoreboard;

  const isTenthFrame = () => {
    return Math.floor(counter / 2) === 10 ? true : false;
  };

  return [...Array(10)].map((el, index) => {
    return (
      <GameFrame
        key={uuid()}
        frameIndex={index + 1}
        gameIndex={index}
        roll1={index * 2}
        roll2={index * 2 + 1}
        roll3={isTenthFrame(index) ? index * 2 + 2 : null}
        counter={counter}
        scoreboard={scoreboard}
      />
    );
  });
}
