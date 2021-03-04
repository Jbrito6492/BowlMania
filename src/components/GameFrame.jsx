import React, { useState, useEffect } from "react";
import FrameContainer from "./FrameContainer.jsx";
import styles from "../../css/frame.css";

export default function GameFrame({ frameIndex, scoreboard, setScoreboard }) {
  const currentFrame = scoreboard[`frame${scoreboard.currentFrame}`];
  const frameScore = currentFrame.score;
  const isActive =
    currentFrame.isActive && scoreboard.currentFrame === frameIndex;

  return (
    <FrameContainer
      frameClass={isActive ? "active" : "inactive"}
      frameIndex={frameIndex}
      frameTitle={`Frame ${frameIndex}`}
    >
      <div className={styles.scoreContainer}>
        {frameIndex === 10 ? (
          <>
            <div className={styles.turn1}>{null}</div>
            <div className={styles.turn2}>{null}</div>
            <div className={styles.turn3}>{null}</div>
          </>
        ) : (
          <>
            <div className={styles.turn1}>{null}</div>
            <div className={styles.turn2}>{null}</div>
          </>
        )}
      </div>
    </FrameContainer>
  );
}
