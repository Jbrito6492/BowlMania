import React from "react";
import Frame from "./Frame.jsx";
import uuid from "react-uuid";
import styles from "../../css/scoreboard.css";

export default function ScoreBoard({ playerName }) {
  return (
    <div className={styles.container}>
      <div>
        <h4>Player Name:</h4>
        <p>{playerName}</p>
      </div>
      {[...Array(10)].map((item, index) => {
        return (
          <div key={uuid()}>
            <Frame title={index + 1} />
          </div>
        );
      })}
    </div>
  );
}
