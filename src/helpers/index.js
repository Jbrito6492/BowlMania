export function isStrike(pins) {
  return pins === 10 ? true : false;
};

export function isNewFrame(count) {
  return (count === 0 ? true : false);
};

export function isSpare(roll1, roll2) {
  return roll1 + roll2 === 10 ? true : false;
};

export function getPinCount(value) {
  return 10 - value;
}

export function isFinalFrame(frame) {
  return frame === 9 ? true : false;
};

// export function isGameOver(throw) {

// };

















