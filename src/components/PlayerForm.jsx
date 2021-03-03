import React from "react";

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
      <label>
        Please Enter Player Name:
        <input type="text" name="playerName" onChange={handleChange} required />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
