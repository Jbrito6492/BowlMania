import React from "react";
import FrameContainer from "./FrameContainer.jsx";

export default function TotalScoreFrame({ frameIndex }) {
  return (
    <FrameContainer frameTitle="Total Score" frameIndex={frameIndex}>
      0
    </FrameContainer>
  );
}
