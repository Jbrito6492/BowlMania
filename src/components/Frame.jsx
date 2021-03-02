import React from "react";
import Score from "./Score.jsx";
import FrameTitle from "./FrameTitle.jsx";

export default function Frame({ frame }) {
  return (
    <div>
      <FrameTitle frame={frame} />
      <Score />
    </div>
  );
}
