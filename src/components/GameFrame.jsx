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
            <div key={uuid()} className={styles[`turn${index}`]}>
              {pins[frameIdx][index]}
            </div>
          ))}
        </>
      );
    } else {
      return (
        <>
          {[...Array(2)].map((el, index) => (
            <div key={uuid()} className={styles[`turn${index}`]}>
              {pins[frameIdx][index]}
            </div>
          ))}
        </>
      );
    }
  };

  return (
    <FrameContainer frameTitle={`Frame ${frameIdx + 1}`} frameIdx={frameIdx}>
      <div className={styles.scoreContainer}>{renderScoreBoxes()}</div>
      {frameScores[frameIdx]}
    </FrameContainer>
  );
}
