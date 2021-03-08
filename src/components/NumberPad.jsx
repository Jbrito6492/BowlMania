import React from "react";
import uuid from "react-uuid";
import ResetButton from "./ResetButton.jsx";
import styles from "../../css/numberpad.css";

export default function NumberPad({
  takeTurn,
  pinCount,
  gameOver,
  handleRestart,
}) {
  let hideNumberpad = gameOver ? true : false;
  const handleClick = (e) => {
    e.preventDefault();
    const { value } = e.target;
    takeTurn(parseInt(value));
  };

  const numberPad = [...Array(11)].map((el, index) => {
    return (
      <div key={uuid()} className={styles[`btn${index}`]}>
        <button
          className={styles.btn}
          name="number"
          value={index}
          onClick={handleClick}
          disabled={pinCount <= index - 1 || gameOver ? true : false}
        >
          {index}
        </button>
      </div>
    );
  });
  return (
    <div className={hideNumberpad ? styles.hidden : null}>
      <div className={styles.container}>{numberPad}</div>
      <ResetButton handleRestart={handleRestart} />
    </div>
  );
}
