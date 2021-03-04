import React, { useState } from "react";
import PlayerInfoFrame from "./PlayerInfoFrame.jsx";
import MappedGameFrame from "./MappedGameFrame.jsx";
import TotalScoreFrame from "./TotalScoreFrame.jsx";
import NumberPad from "./NumberPad.jsx";
import styles from "../../css/scoreboard.css";

export default function ScoreBoard({ playerName }) {
  const [scoreboard, setScoreboard] = useState({
    currentFrame: 1,
    attempt: 1,
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
    total: 0,
  });

  return (
    <div className={styles.container}>
      <div className={styles.scoreboard}>
        <PlayerInfoFrame frameIndex={0} playerName={playerName} />
        <MappedGameFrame
          scoreboard={scoreboard}
          setScoreboard={setScoreboard}
        />
        <TotalScoreFrame frameIndex={11} total={scoreboard.total} />
      </div>
      <div>
        <NumberPad />
      </div>
    </div>
  );
}
