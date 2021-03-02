import React, { useState } from "react";
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
      <Frame turn={turn} frame={frame} score={score} />
    </div>
  );
}
