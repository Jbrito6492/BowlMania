import React from "react";
import PlayerInfoFrame from "./PlayerInfoFrame.jsx";
import MappedGameFrame from "./MappedGameFrame.jsx";
import TotalScoreFrame from "./TotalScoreFrame.jsx";
import NumberPad from "./NumberPad.jsx";
import Modal from "./Modal.jsx";
import ScoreBoardHook from "../hooks/ScoreBoard";
import { getInitStateScoreboard, getInitStateScoreTracker } from "../helpers";
import styles from "../../css/scoreboard.css";

export default function ScoreBoard({ playerName, setState }) {
  const {
    scoreboard,
    scoreTracker,
    takeTurn,
    resetPinCount,
    resetFrameCount,
    setScoreboard,
    setScoreTracker,
  } = ScoreBoardHook();
  const { gameOver, pinCount } = scoreboard;

  const handleRestart = (e) => {
    e.preventDefault();
    resetPinCount();
    resetFrameCount();
    setScoreboard(getInitStateScoreboard());
    setScoreTracker(getInitStateScoreTracker());
  };

  return (
    <div className={styles.container}>
      {scoreboard.gameOver && (
        <Modal
          playerName={playerName}
          scoreTracker={scoreTracker}
          handleRestart={handleRestart}
        />
      )}
      <div className={styles.scoreboard}>
        <PlayerInfoFrame playerName={playerName} />
        <MappedGameFrame scoreTracker={scoreTracker} scoreboard={scoreboard} />
        <TotalScoreFrame scoreTracker={scoreTracker} />
      </div>
      <NumberPad
        takeTurn={takeTurn}
        gameOver={gameOver}
        pinCount={pinCount}
        handleRestart={handleRestart}
      />
    </div>
  );
}
