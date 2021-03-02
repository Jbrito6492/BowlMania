import React from "react";
import Frame from "./Frame.jsx";
import styles from "../../css/scoreboard.css";

export default function ScoreBoard({ turn, frame, score }) {
  return (
    <div className={styles.container}>
      {[...Array(10)].map((item, index) => {
        return (
          <div key={index}>
            <Frame turn={turn} title={index + 1} frame={frame} score={score} />
          </div>
        );
      })}
    </div>
  );
}
