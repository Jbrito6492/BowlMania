import React from "react";
import FrameContainer from "./FrameContainer.jsx";

export default function TotalScoreFrame({ frameIndex, total }) {
  return (
    <FrameContainer frameTitle="Total Score" frameIndex={frameIndex}>
      <p>{total}</p>
    </FrameContainer>
  );
}
