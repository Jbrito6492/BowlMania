import React from "react";
import FrameContainer from "./FrameContainer.jsx";

export default function PlayerInfoFrame({ frameIndex, playerName }) {
  return (
    <FrameContainer frameTitle="Player Name" frameIndex={frameIndex}>
      <p>{playerName}</p>
    </FrameContainer>
  );
}
