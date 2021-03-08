import React from "react";
import FrameContainer from "./FrameContainer.jsx";
import styles from "../../css/frame.css";

export default function PlayerInfoFrame({ playerName }) {
  return (
    <FrameContainer frameTitle="Player Name">
      <p>{playerName}</p>
    </FrameContainer>
  );
}
