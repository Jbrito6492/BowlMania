import React from "react";
import styles from "../../css/resetbutton.css";

export default function ResetButton({ handleRestart }) {
  return (
    <button className={styles.btn} onClick={handleRestart}>
      restart
    </button>
  );
}
