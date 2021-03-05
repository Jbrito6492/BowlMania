import React from "react";
import PlayerInfoFrame from "./PlayerInfoFrame.jsx";
import MappedGameFrame from "./MappedGameFrame.jsx";
import TotalScoreFrame from "./TotalScoreFrame.jsx";
import NumberPad from "./NumberPad.jsx";
import ScoreBoardHook from "../hooks/ScoreBoard";
import styles from "../../css/scoreboard.css";

export default function ScoreBoard({ playerName, setState }) {
  const { scoreboard, takeTurn, setScoreboard } = ScoreBoardHook();
  const handleNameChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };

  const handleRestart = (e) => {
    e.preventDefault();
    setScoreboard({ frames: [], pins: [], totalScore: [] });
  };

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
      <>
        <button className={styles.btn} onClick={handleRestart}>
          restart
        </button>
        <button className={styles.btn} onClick={handleNameChange}>
          change name
        </button>
      </>
    </div>
  );
}
