export function isStrike(pins) {
  return pins === 10 ? true : false;
};

export function isSpare(Roll1, Roll2) {
  return Roll1 + Roll2 === 10 ? true : false;
};

//define getters
export function getCurrentFrame(scoreboard) {
  return scoreboard.currentFrame;
};

export function getCurrentAttempt(scoreboard) {
  return scoreboard.currentAttempt;
};

export function getTotal(scoreboard) {
  return scoreboard.total;
};








