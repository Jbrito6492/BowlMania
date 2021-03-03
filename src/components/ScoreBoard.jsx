import React, { useState } from "react";
import PlayerInfoFrame from "./PlayerInfoFrame.jsx";
import GameFrame from "./GameFrame.jsx";
import TotalScoreFrame from "./TotalScoreFrame.jsx";
import NumberPad from "./NumberPad.jsx";
import uuid from "react-uuid";
import styles from "../../css/scoreboard.css";

export default function ScoreBoard({ playerName }) {
  const [frame, setFrame] = useState({
    frame1: { score: [], isActive: true },
    frame2: { score: [], isActive: false },
    frame3: { score: [], isActive: false },
    frame4: { score: [], isActive: false },
    frame5: { score: [], isActive: false },
    frame6: { score: [], isActive: false },
    frame7: { score: [], isActive: false },
    frame8: { score: [], isActive: false },
    frame9: { score: [], isActive: false },
    frame10: { score: [], isActive: false },
  });

  const gameFrames = [...Array(10)].map((el, index) => (
    <GameFrame
      key={uuid()}
      frameIndex={index + 1}
      frame={frame}
      setFrame={setFrame}
    />
  ));

  return (
    <div className={styles.container}>
      <PlayerInfoFrame frameIndex={0} playerName={playerName} />
      {gameFrames}
      <TotalScoreFrame frameIndex={11} />
      <NumberPad />
    </div>
  );
}
