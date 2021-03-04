import React, { useState } from "react";
import PlayerInfoFrame from "./PlayerInfoFrame.jsx";
import GameFrame from "./GameFrame.jsx";
import TotalScoreFrame from "./TotalScoreFrame.jsx";
import NumberPad from "./NumberPad.jsx";
import uuid from "react-uuid";
import styles from "../../css/scoreboard.css";

export default function ScoreBoard({ playerName }) {
  const [scoreboard, setScoreboard] = useState({
    frame1: { score: [], isActive: false },
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
      scoreboard={scoreboard}
      setScoreboard={setScoreboard}
    />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.scoreboard}>
        <PlayerInfoFrame frameIndex={0} playerName={playerName} />
        {gameFrames}
        <TotalScoreFrame frameIndex={11} />
      </div>
      <div>
        <NumberPad />
      </div>
    </div>
  );
}
