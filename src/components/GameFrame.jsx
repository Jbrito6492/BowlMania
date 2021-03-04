import React from "react";
import FrameContainer from "./FrameContainer.jsx";
import styles from "../../css/frame.css";

export default function GameFrame({ frameIndex }) {
  const currentFrame = `frame${frameIndex}`;
  const currentTurn = 1;
  return (
    <FrameContainer frameIndex={frameIndex} frameTitle={`Frame ${frameIndex}`}>
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
