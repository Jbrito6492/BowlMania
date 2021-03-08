import React, { useState, useEffect } from "react";
import FrameContainer from "./FrameContainer.jsx";
import uuid from "react-uuid";
import styles from "../../css/frame.css";

export default function GameFrame({ scoreboard, frameIdx, frameScores }) {
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState(null);
  const { pins, frames } = scoreboard;

  const renderScoreBoxes = () => {
    if (frameIdx === 9) {
      return (
        <>
          {[...Array(3)].map((el, index) => (
            <span key={uuid()} className={styles[`turn${index}`]}>
              {pins[frameIdx][index]}
            </span>
          ))}
        </>
      );
    } else {
      return (
        <>
          {[...Array(2)].map((el, index) => (
            <span key={uuid()} className={styles[`turn${index}`]}>
              {pins[frameIdx][index]}
            </span>
          ))}
        </>
      );
    }
  };

  return (
    <FrameContainer frameTitle={`Frame ${frameIdx + 1}`}>
      <div className={styles.scoreContainer}>{renderScoreBoxes()}</div>
      <div>{frameScores[frameIdx]}</div>
    </FrameContainer>
  );
}
