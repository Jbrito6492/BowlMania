import React from "react";
import FrameContainer from "./FrameContainer.jsx";

export default function TotalScoreFrame({ scoreTracker }) {
  const { runningTotal } = scoreTracker;

  return (
    <FrameContainer frameTitle="Total Score">
      <p>{runningTotal}</p>
    </FrameContainer>
  );
}
