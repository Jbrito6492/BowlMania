import React, { useState, useEffect } from "react";
import FrameContainer from "./FrameContainer.jsx";
import styles from "../../css/frame.css";

export default function GameFrame({ frameIndex, gameIndex, scoreboard }) {
  const { pins, frames } = scoreboard;
  const [isActive, setIsActive] = useState(false);
  const currentFrame = scoreboard.frames.length + 1;

  useEffect(() => {
    if (frameIndex === currentFrame) {
      setIsActive(true);
    }
  }, [isActive]);

  const populateScore = (roll) => {
    return roll;
  };

  const renderScoreBoxes = () => {
    if (frameIndex === 10) {
      return (
        <>
          <div className={styles.turn1}>
            {populateScore(pins[gameIndex * 2])}
          </div>
          <div className={styles.turn2}>
            {populateScore(pins[frameIndex + gameIndex])}
          </div>
          <div className={styles.turn3}>
            {populateScore(pins[frameIndex + gameIndex + 1])}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={styles.turn1}>
            {populateScore(pins[gameIndex * 2])}
          </div>
          <div className={styles.turn2}>
            {populateScore(pins[frameIndex + gameIndex])}
          </div>
        </>
      );
    }
  };

  return (
    <FrameContainer frameIndex={frameIndex} frameTitle={`Frame ${frameIndex}`}>
      <div id={`score${frameIndex}`} className={styles.scoreContainer}>
        {renderScoreBoxes()}
      </div>
    </FrameContainer>
  );
}
