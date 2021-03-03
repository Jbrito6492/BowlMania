import React from "react";
import ScoreTotal from "./ScoreTotal.jsx";
import styles from "../../css/frame.css";

export default function Frame({ playerName, currentFrame }) {
  const frameData = (
    <div className={`${styles["frame" + currentFrame]} ${styles.container}`}>
      <span className={styles.title}>
        <p>Frame {currentFrame}</p>
      </span>
      <ScoreTotal />
    </div>
  );

  const userData = (
    <div className={`${styles["frame" + currentFrame]} ${styles.container}`}>
      <span className={styles.title}>
        <p>Player Name</p>
      </span>
      <p>{playerName}</p>
    </div>
  );

  return currentFrame ? frameData : userData;
}
