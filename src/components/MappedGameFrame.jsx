import React, { useState, useEffect } from "react";
import GameFrame from "./GameFrame.jsx";
import { calculateCurrentFrame, isNewFrame } from "../helpers";
import uuid from "react-uuid";

export default function MappedGameFrame({ scoreboard, scoreTracker }) {
  const { frameScores } = scoreTracker;

  return [...Array(10)].map((el, index) => {
    return (
      <GameFrame
        key={uuid()}
        frameScores={frameScores}
        frameIdx={index}
        pin1Idx={index * 2}
        pin2Idx={index * 2 + 1}
        pin3Idx={index * 2 + 3}
        scoreboard={scoreboard}
      />
    );
  });
}
