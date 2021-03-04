import React from "react";
import uuid from "react-uuid";
import styles from "../../css/numberpad.css";

export default function NumberPad({ setScore }) {
  const handleClick = () => {};

  const numberPad = [...Array(11)].map((el, index) => {
    return (
      <div key={uuid()} className={styles[`btn${index}`]}>
        <button className={styles.btn} onClick={handleClick}>
          {index}
        </button>
      </div>
    );
  });
  return <div className={styles.container}>{numberPad}</div>;
}
