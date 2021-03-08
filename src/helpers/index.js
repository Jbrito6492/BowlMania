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
};

export function isFinalFrame(frame) {
  return frame === 9 ? true : false;
};

export const getInitStateScoreboard = () => (
  {
    pins: [[], [], [], [], [], [], [], [], [], []],
    pinCount: 10,
    gameOver: false,
    runningTotal: 0,
  }
);

export const getInitStateScoreTracker = () => (
  {
    runningTotal: 0,
    frameScores: [],
  }
);

















