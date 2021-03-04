import React from "react";
import GameFrame from "./GameFrame.jsx";
import uuid from "react-uuid";

export default function MappedGameFrame({ scoreboard, setScoreboard }) {
  return [...Array(10)].map((el, index) => (
    <GameFrame
      key={uuid()}
      frameIndex={index + 1}
      scoreboard={scoreboard}
      setScoreboard={setScoreboard}
    />
  ));
}
