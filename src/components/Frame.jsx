import React from "react";
import Score from "./Score.jsx";

export default function Frame() {
  return (
    <div>
      <div>title</div>
      <Score />
      <Score />
      <div>total</div>
    </div>
  );
}
