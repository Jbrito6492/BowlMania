import React from "react";
import ResetButton from "./ResetButton.jsx";
import styles from "../../css/modal.css";

export default function Modal({ playerName, scoreTracker, handleRestart }) {
  const { runningTotal } = scoreTracker;
  return (
    <div className={styles.overlay}>
      <div className={styles.title}>
        <h5>Bowl Mania</h5>
      </div>
      <div className={styles.main}>
        <p>
          Congratulations {playerName} 🥳. Your final score is {runningTotal}!
          🎉🎉🎉🎉
        </p>
        <ResetButton handleRestart={handleRestart} />
      </div>
    </div>
  );
}
