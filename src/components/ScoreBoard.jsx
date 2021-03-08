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

  const handleNameChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };

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
        <PlayerInfoFrame frameIndex={0} playerName={playerName} />
        <MappedGameFrame
          scoreTracker={scoreTracker}
          scoreboard={scoreboard}
          scoreTracker={scoreTracker}
        />
        <TotalScoreFrame scoreTracker={scoreTracker} frameIndex={11} />
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
        <button className={styles.btn} onClick={handleNameChange}>
          change name
        </button>
      </>
    </div>
  );
}
