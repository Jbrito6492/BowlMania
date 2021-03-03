import React from "react";
import FrameContainer from "./FrameContainer.jsx";
import styles from "../../css/frame.css";

export default function GameFrame({ frameIndex }) {
  return (
    <FrameContainer frameIndex={frameIndex} frameTitle={`Frame ${frameIndex}`}>
      <div className={styles.scoreContainer}>
        {frameIndex === 10 ? (
          <>
            <div className={styles.attempt1}>score1</div>
            <div className={styles.attempt2}>score2</div>
            <div className={styles.attempt2}>score3</div>
          </>
        ) : (
          <>
            <div className={styles.attempt1}>score1</div>
            <div className={styles.attempt2}>score2</div>
          </>
        )}
      </div>
    </FrameContainer>
  );
}
