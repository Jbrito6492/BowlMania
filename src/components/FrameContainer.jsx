import React from "react";
import styles from "../../css/frame.css";

export default function FrameContainer({ frameTitle, frameIndex, children }) {
  return (
    <div className={`${styles["frame" + frameIndex]} ${styles.container}`}>
      <div className={styles.title}>
        <p>{frameTitle}</p>
      </div>
      {children}
    </div>
  );
}
