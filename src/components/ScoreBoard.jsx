import React from "react";
import PlayerInfoFrame from "./PlayerInfoFrame.jsx";
import MappedGameFrame from "./MappedGameFrame.jsx";
import TotalScoreFrame from "./TotalScoreFrame.jsx";
import NumberPad from "./NumberPad.jsx";
import ScoreBoardHook from "../hooks/ScoreBoard";
import styles from "../../css/scoreboard.css";

export default function ScoreBoard({ playerName }) {
  const { scoreboard, takeTurn } = ScoreBoardHook();
  return (
    <div className={styles.container}>
      <div className={styles.scoreboard}>
        <PlayerInfoFrame frameIndex={0} playerName={playerName} />
        <MappedGameFrame scoreboard={scoreboard} />
        <TotalScoreFrame frameIndex={11} total={scoreboard.total} />
      </div>
      <div>
        <NumberPad takeTurn={takeTurn} />
      </div>
    </div>
  );
}
