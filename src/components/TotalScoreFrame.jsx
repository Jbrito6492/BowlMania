import React from "react";
import FrameContainer from "./FrameContainer.jsx";

export default function TotalScoreFrame({ frameIndex, scoreTracker }) {
  const { runningTotal } = scoreTracker;

  return (
    <FrameContainer frameTitle="Total Score" frameIndex={frameIndex}>
      <p>{runningTotal}</p>
    </FrameContainer>
  );
}
