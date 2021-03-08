import React, { useState } from "react";
import ScoreBoard from "./ScoreBoard.jsx";
import PlayerForm from "./PlayerForm.jsx";
import styles from "../../css/app.css";

export default function App() {
  const [state, setState] = useState({ playerName: "", isReady: false });
  const { playerName } = state;

  return (
    <div className={styles.container}>
      {state.isReady ? (
        <>
          <ScoreBoard playerName={playerName} setState={setState} />
        </>
      ) : (
        <PlayerForm state={state} setState={setState} />
      )}
    </div>
  );
}
