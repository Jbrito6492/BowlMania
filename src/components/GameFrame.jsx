import React, { useState, useEffect } from "react";
import FrameContainer from "./FrameContainer.jsx";
import uuid from "react-uuid";
import styles from "../../css/frame.css";
import { calculateCurrentFrame, isNewFrame } from "../helpers";

export default function GameFrame({
  frameIndex,
  counter,
  scoreboard,
  pin1Idx,
  pin2Idx,
  pin3Idx,
  frameIdx,
  roll2,
  roll3,
  frameScores,
}) {
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState(null);
  const { pins, frames } = scoreboard;

  const renderScoreBoxes = () => {
    if (frameIdx === 9) {
      return (
        <>
          {[...Array(3)].map((el, index) => (
            <div key={uuid()} className={styles[`turn${index + 1}`]}>
              {pins[frameIdx][index]}
            </div>
          ))}
        </>
      );
    } else {
      return (
        <>
          {[...Array(2)].map((el, index) => (
            <div key={uuid()} className={styles[`turn${index + 1}`]}>
              {pins[frameIdx][index]}
            </div>
          ))}
        </>
      );
    }
  };

  return (
    <FrameContainer frameIndex={frameIndex} frameTitle={`Frame ${frameIndex}`}>
      <div id={`score${frameIndex}`} className={styles.scoreContainer}>
        {renderScoreBoxes()}
      </div>
      {frameScores[frameIdx]}
    </FrameContainer>
  );
}
