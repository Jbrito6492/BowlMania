import React from "react";
import styles from "../../css/playerform.css";

export default function PlayerForm({ state, setState }) {
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, isReady: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>Welcome to BowlMania</div>
      <div className={styles.main}>
        <label>
          Please Enter Player Name:
          <input
            type="text"
            name="playerName"
            onChange={handleChange}
            required
          />
        </label>
        <input className={styles.btn} type="submit" value="Submit" />
      </div>
    </form>
  );
}
