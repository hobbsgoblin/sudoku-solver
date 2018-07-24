import solve from '../src/solver';
import {getInitState, checkSolutionIsValid} from "../src/sudoku-core";

const puzzle =
  [
    [null,null,null,null,5,null,null,6,null],
    [null,null,7,1,4,3,2,null,9],
    [null,null,null,null,6,null,4,5,1],
    [2,1,3,null,null,null,null,null,6],
    [null,7,null,6,null,null,null,3,5],
    [6,null,5,null,9,null,null,2,null],
    [null,null,null,5,null,null,null,null,null],
    [9,null,null,7,null,2,null,null,null],
    [null,5,1,null,null,4,6,null,2]
  ];

const fixedVals = puzzle.map(row => row.map(val => val === null ? null : 'fixed'));

test('Solves a sudoku', () => {
  const solution = solve(puzzle, [0,0], getInitState([]), fixedVals);
  expect(checkSolutionIsValid(solution.completedState)).toBe(true);
});