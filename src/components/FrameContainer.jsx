import React from "react";
import styles from "../../css/frame.css";

export default function FrameContainer({ frameTitle, frameIdx, children }) {
  let activeClassName;
  if (frameTitle === "Player Name") {
    activeClassName = styles.playerNameContainer;
  } else if (frameTitle.substring(0, 5) === "Frame") {
    activeClassName = styles[`frame${frameIdx}`];
  } else {
    activeClassName = styles.totalScoreContainer;
  }

  return (
    <>
      <div className={`${styles.container} ${activeClassName}`}>
        <div className={styles.title}>
          <p>{frameTitle}</p>
        </div>
        <div className={styles.childrenContainer}>{children}</div>
      </div>
    </>
  );
}
