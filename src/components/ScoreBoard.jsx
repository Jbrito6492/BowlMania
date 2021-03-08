import React from "react";
import PlayerInfoFrame from "./PlayerInfoFrame.jsx";
import MappedGameFrame from "./MappedGameFrame.jsx";
import TotalScoreFrame from "./TotalScoreFrame.jsx";
import NumberPad from "./NumberPad.jsx";
import ScoreBoardHook from "../hooks/ScoreBoard";
import { getInitStateScoreboard, getInitStateScoreTracker } from "../helpers";
import styles from "../../css/scoreboard.css";

export default function ScoreBoard({ playerName, setState }) {
  const {
    scoreboard,
    scoreTracker,
    setScoreTracker,
    resetPinCount,
    resetFrameCount,
    takeTurn,
    setScoreboard,
  } = ScoreBoardHook();

  const handleRestart = (e) => {
    e.preventDefault();
    resetFrameCount();
    resetPinCount();
    setScoreboard(getInitStateScoreboard());
    setScoreTracker(getInitStateScoreTracker());
  };

  return (
    <div className={styles.container}>
      <div className={styles.scoreboard}>
        <PlayerInfoFrame playerName={playerName} />
        <MappedGameFrame scoreTracker={scoreTracker} scoreboard={scoreboard} />
        <TotalScoreFrame scoreTracker={scoreTracker} />
      </div>
      <div>
        <NumberPad
          takeTurn={takeTurn}
          gameOver={scoreboard.gameOver}
          pinCount={scoreboard.pinCount}
        />
      </div>
      <>
        <button className={styles.btn} onClick={handleRestart}>
          restart
        </button>
      </>
    </div>
  );
}
