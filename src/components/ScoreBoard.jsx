import React, { useState } from "react";
import PlayerInfoFrame from "./PlayerInfoFrame.jsx";
import GameFrame from "./GameFrame.jsx";
import TotalScoreFrame from "./TotalScoreFrame.jsx";
import NumberPad from "./NumberPad.jsx";
import uuid from "react-uuid";
import styles from "../../css/scoreboard.css";

export default function ScoreBoard({ playerName }) {
  const [score, setScore] = useState({
    frame1: [],
    frame2: [],
    frame3: [],
    frame4: [],
    frame5: [],
    frame6: [],
    frame7: [],
    frame8: [],
    frame9: [],
    frame10: [],
  });

  const gameFrames = [...Array(10)].map((el, index) => {
    return (
      <div key={uuid()}>
        <GameFrame frameIndex={index + 1} />
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <PlayerInfoFrame frameIndex={0} playerName={playerName} />
      {gameFrames}
      <TotalScoreFrame frameIndex={11} />
      <NumberPad />
    </div>
  );
}
