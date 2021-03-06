import {copyState, getAllowed, getInitState, printState} from "sudoku-core";

const nextCell = (curY, curX) => {
  if (curX === 8 && curY === 8) return undefined;
  if (curX === 8) return [curY + 1, 0];
  return [curY, curX + 1];
};

const getValidAllowed = (state, [y, x], invalidVals) => {
  return getAllowed(state, [y, x])
    .filter(val => !invalidVals[y][x].includes(val));
};

const createFixedValsFromState = (state) => {
  return state.map(row => row.map(val => val === null ? null : 'fixed'));
};

const getRandValFromArray = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export default function solve(state) {
  const invalidVals = getInitState([]);
  const fixedVals = createFixedValsFromState(state);
  return _solve(state, [0,0], invalidVals, fixedVals);
}

function _solve(state, [y, x], invalidVals, fixedVals) {
  if (fixedVals[y][x] === 'fixed') {
    if (y === 8 && x === 8) return {solved: true, completedState: state};
    const [nextY, nextX] = nextCell(y, x);
    return _solve(state, [nextY, nextX], invalidVals, fixedVals);
  }
  const allowedVals = getValidAllowed(state, [y, x], invalidVals);
  if (!allowedVals.length) return false;
  const tryVal = getRandValFromArray(allowedVals);  // This is randomized to prevent bias towards lower numbers when used to generate puzzles
  let newState = copyState(state);
  newState[y][x] = tryVal;
  if (y === 8 && x === 8) return {solved: true, completedState: newState};
  const [nextY, nextX] = nextCell(y, x);
  let result = _solve(newState, [nextY, nextX], invalidVals, fixedVals);
  if (typeof result === 'object' && result.solved === true) return result;
  if (result === false) {
    invalidVals[y][x] = invalidVals[y][x].concat(tryVal);  // TODO: make immutable
    const newInvalid = copyState(invalidVals).map((invRow, invY) => {  // Remove old state
      if (invY > y) return invRow.fill([]);
      if (invY === y) return invRow.fill([], x + 1);
      return invRow;
    });
    newState = undefined;  // TODO: Test to see if making these undefined actually reduces memory use
    invalidVals = undefined;
    result = undefined;
    return _solve(state, [y, x], newInvalid, fixedVals);
  }
}