import React, { useState } from "react";
import ScoreBoard from "./ScoreBoard.jsx";
import PlayerForm from "./PlayerForm.jsx";
import styles from "../../css/app.css";

export default function App() {
  const [state, setState] = useState({ playerName: "", isReady: false });
  return (
    <div className={styles.container}>
      {state.isReady ? (
        <>
          <ScoreBoard playerName={state.playerName} />
        </>
      ) : (
        <PlayerForm state={state} setState={setState} />
      )}
    </div>
  );
}
