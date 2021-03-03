import React from "react";
import uuid from "react-uuid";
import styles from "../../css/numberpad.css";

export default function NumberPad({ setScore }) {
  const handleClick = () => {};

  const numberPad = [...Array(10)].map((el, index) => {
    return (
      <div key={uuid()}>
        <button className={styles.button} onClick={handleClick}>
          {index + 1}
        </button>
      </div>
    );
  });
  return <div className={styles.container}>{numberPad}</div>;
}
