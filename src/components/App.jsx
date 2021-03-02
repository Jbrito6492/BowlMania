import React, { useState } from "react";
import ScoreBoard from "./ScoreBoard.jsx";
import Frame from "./Frame.jsx";

export default function App() {
  const [state, setState] = useState({
    player: "",
    turn: 1,
    frame: 1,
    score: 0,
  });
  const { turn, frame, score } = state;
  return (
    <div>
      <ScoreBoard turn={turn} frame={frame} score={score} />
    </div>
  );
}
