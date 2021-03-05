import React, { useState, useEffect } from "react";
import FrameContainer from "./FrameContainer.jsx";
import styles from "../../css/frame.css";

export default function GameFrame({ frameIndex, gameIndex, scoreboard }) {
  const { pins, frames } = scoreboard;
  const [isActive, setIsActive] = useState(false);

  const firstAttempt = pins.length % 2 === 0 && pins.length;
  const prevThrow = pins.slice(-1)[0];
  const prevTwoThrows = pins.slice(-2)[0];
  const prevFrame = frames[gameIndex];
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
    console.log(gameIndex * 2, frameIndex + gameIndex);
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
      if (currentFrame <= gameIndex + 1) {
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
