import React from "react";
import Score from "./Score.jsx";
import FrameTitle from "./FrameTitle.jsx";

export default function Frame({ frame, title }) {
  return (
    <div>
      <FrameTitle title={title} />
      <Score />
    </div>
  );
}
