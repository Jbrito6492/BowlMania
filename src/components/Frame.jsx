import React from "react";
import Score from "./Score.jsx";
import styles from "../../css/frame.css";

export default function Frame({ frame, title }) {
  return (
    <div className={styles.container}>
      <h5>Frame: {title}</h5>
      <Score />
    </div>
  );
}
