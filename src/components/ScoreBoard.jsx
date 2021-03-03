import React from "react";
import Frame from "./Frame.jsx";
import uuid from "react-uuid";
import styles from "../../css/scoreboard.css";

export default function ScoreBoard({ playerName }) {
  return (
    <div className={styles.container}>
      {[...Array(11)].map((item, index) => {
        return (
          <div key={uuid()}>
            <Frame playerName={playerName} currentFrame={index} />
          </div>
        );
      })}
    </div>
  );
}
