export function isStrike(pins) {
  return pins === 10 ? true : false;
};

export function isSpare(Roll1, Roll2) {
  return Roll1 + Roll2 === 10 ? true : false;
};

export function isFirstRoll(pinsArray) {
  return (pinsArray.length % 2 === 0 ? true : false);
};


export function isFinalFrame(framesArray) {
  return (framesArray.length === 9 ? true : false);
};

export function earnedBonusRound(pinsArray) {
  return (pinsArray[18] === 10 || isSpare(pinsArray[18], pinsArray[19]) ? true : false);
};













