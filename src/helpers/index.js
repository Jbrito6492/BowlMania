export function isStrike(pins) {
  return pins === 10 ? true : false;
};

export function isSpare(Roll1, Roll2) {
  return Roll1 + Roll2 === 10 ? true : false;
};

export function isFirstRoll(pinsArray) {
  return (pinsArray % 2 === 0 ? true : false);
};












