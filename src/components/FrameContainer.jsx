import React from "react";
import styles from "../../css/frame.css";

export default function FrameContainer({
  frameTitle,
  frameIndex,
  frameClass,
  children,
}) {
  return (
    <div
      className={`${styles["frame" + frameIndex]} ${styles.container} ${
        styles[frameClass]
      }`}
    >
      <div className={styles.title}>
        <p>{frameTitle}</p>
      </div>
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
}
