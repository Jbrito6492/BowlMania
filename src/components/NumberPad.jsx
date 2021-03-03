import React from "react";
import styles from "../../css/numberpad.css";

export default function NumberPad({ setScore }) {
  const handleClick = () => {};

  const numberPad = [...Array(10)].map((el, index) => {
    return (
      <button className={styles.button} onClick={handleClick}>
        {index + 1}
      </button>
    );
  });
  return <div className={styles.container}>{numberPad}</div>;
}
