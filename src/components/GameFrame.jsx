import React, { useState, useEffect } from "react";
import FrameContainer from "./FrameContainer.jsx";
import uuid from "react-uuid";
import styles from "../../css/frame.css";
import { calculateCurrentFrame, isNewFrame } from "../helpers";

export default function GameFrame({
  frameIndex,
  gameIndex,
  counter,
  scoreboard,
  roll1,
  roll2,
  roll3,
}) {
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState(null);
  const { pins, frames } = scoreboard;

  const renderScoreBoxes = () => {
    if (frameIndex === 10) {
      return (
        <>
          <div className={styles.turn1}>
            {pins[gameIndex * 2]}
            {roll1}
          </div>
          <div className={styles.turn2}>
            {pins[frameIndex + gameIndex]}
            {roll2}
          </div>
          <div className={styles.turn3}>
            {pins[frameIndex + gameIndex + 1]}
            {roll3}
          </div>
        </>
      );
    } else {
      return (
        <>
          {[...Array(2)].map((el, index) => {
            return (
              <div key={uuid()} className={styles[`turn${index + 1}`]}>
                {index === 0 ? pins[roll1] : pins[roll2]}
              </div>
            );
          })}
        </>
      );
    }
  };

  return (
    <FrameContainer frameIndex={frameIndex} frameTitle={`Frame ${frameIndex}`}>
      <div id={`score${frameIndex}`} className={styles.scoreContainer}>
        {renderScoreBoxes()}
      </div>
    </FrameContainer>
  );
}
