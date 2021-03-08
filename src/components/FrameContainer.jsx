import React from "react";
import styles from "../../css/frame.css";

export default function FrameContainer({ frameTitle, frameIdx, children }) {
  let activeClassName;
  if (frameTitle === "Player Name") {
    activeClassName = styles.playerNameContainer;
  } else if (frameTitle.substring(0, 5) === "Frame") {
    activeClassName = styles.title;
  } else {
    activeClassName = styles.totalScoreContainer;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={activeClassName}>
          <p>{frameTitle}</p>
        </div>
        <div className={styles.childrenContainer}>{children}</div>
      </div>
    </>
  );
}
