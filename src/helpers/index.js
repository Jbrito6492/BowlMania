export function isStrike(pins) {
  return pins === 10 ? true : false;
};

export function isSpare(roll1, roll2, pins) {
  return roll1 + roll2 === 10 && !isNewFrame(pins) ? true : false;
};

export function isNewFrame(pinsArray) {
  return (pinsArray.length % 2 === 0 ? true : false);
};


export function isFinalFrame(framesArray) {
  return (framesArray.length === 9 ? true : false);
};

export function earnedBonusRound(pinsArray) {
  return (pinsArray[18] === 10 || isSpare(pinsArray[18], pinsArray[19]) ? true : false);
};













