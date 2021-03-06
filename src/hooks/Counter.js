import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = (val) => {
    setCounter((prevState) => (prevState += val))
  };

  return { counter, incrementCounter }
}