module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sudoku-solver.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/sudoku-core.js":
/*!****************************!*\
  !*** ./src/sudoku-core.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInitState = getInitState;
exports.copyState = copyState;
exports.parseState = exports.printState = exports.checkSolutionIsValid = exports.isValidPuzzle = exports.isSolved = exports.arraysAreIdentical = exports.getAllowed = exports.getAdjacentCoords = exports.getAdjacentValues = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Returns all of the values in the same row, column, and square of a given coordinate
var getAdjacentValues = function getAdjacentValues(state, coord) {
  var _coord = _slicedToArray(coord, 2),
      y = _coord[0],
      x = _coord[1];

  var xVals = state[y];
  var yVals = state.map(function (row) {
    return row[x];
  });
  var squareVals = getValues(state, getSquareCoords(getSquare(y, x)));
  return {
    x: xVals,
    y: yVals,
    squareVals: squareVals
  };
};

exports.getAdjacentValues = getAdjacentValues;

function getInitState() {
  var fillVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return Array(9).fill([]).map(function () {
    return _toConsumableArray(Array(9).fill(fillVal));
  });
} // Returns all of the coordinates in the same row, column, and square of a given coordinate


var getAdjacentCoords = function getAdjacentCoords(coord) {
  var _coord2 = _slicedToArray(coord, 2),
      y = _coord2[0],
      x = _coord2[1];

  var xCoords = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (y) {
    return [y, x];
  }).filter(function (coord) {
    return coord[0] !== y;
  });
  var yCoords = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (x) {
    return [y, x];
  }).filter(function (coord) {
    return coord[1] !== x;
  });
  var squareCoords = getSquareCoords(getSquare(y, x)).filter(function (coord) {
    return coord[0] !== y || coord[1] !== x;
  });
  return {
    x: xCoords,
    y: yCoords,
    squareCoords: squareCoords
  };
};

exports.getAdjacentCoords = getAdjacentCoords;

var getAllowed = function getAllowed(state, coord) {
  var adjacent = getAdjacentValues(state, coord);
  var adjacentVals = [].concat(adjacent.x, adjacent.y, adjacent.squareVals);
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (num) {
    return !adjacentVals.includes(num);
  });
};

exports.getAllowed = getAllowed;

var arraysAreIdentical = function arraysAreIdentical(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return undefined;
  if (arr1.length !== arr2.length) return false;

  for (var i = arr1.length; i--;) {
    if (Array.isArray(arr1[i]) || Array.isArray(arr2[i])) {
      if (!arraysAreIdentical(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

exports.arraysAreIdentical = arraysAreIdentical;

var isSolved = function isSolved(state) {
  var _ref;

  return !(_ref = []).concat.apply(_ref, _toConsumableArray(state)).includes(null);
};

exports.isSolved = isSolved;

var isValidPuzzle = function isValidPuzzle(state) {
  var flatState = state.reduce(function (flatState, row) {
    return flatState.concat(row);
  }, []);
  if (!flatState.includes(null)) return false; // a valid puzzle must have at least one blank cell

  if (state.length !== 9) return false;
  var hasInvalidVals = state.some(function (row, y) {
    // return whether any cell values are not allowed for their coordinate
    if (state.some(function (row) {
      return row.length !== 9;
    })) return true;
    return row.some(function (val, x) {
      var stateCopy = copyState(state);
      stateCopy[y][x] = null;
      return getAllowed(stateCopy, [y, x]).includes(val);
    }) === false;
  });
  return !hasInvalidVals;
};

exports.isValidPuzzle = isValidPuzzle;

var checkSolutionIsValid = function checkSolutionIsValid(state) {
  var valsAreValid = function valsAreValid(arr) {
    return arraysAreIdentical([1, 2, 3, 4, 5, 6, 7, 8, 9], arr.slice().sort());
  };

  var rows = state;
  var cols = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (x) {
    return state.map(function (row) {
      return row[x];
    });
  });
  var squares = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (square) {
    return getValues(state, getSquareCoords(square));
  });
  var rowsValid = rows.every(valsAreValid);
  var colsValid = cols.every(valsAreValid);
  var squaresValid = squares.every(valsAreValid);
  return rowsValid && colsValid && squaresValid;
}; // const copyState = (state)  => state.map(arr => [...arr]);


exports.checkSolutionIsValid = checkSolutionIsValid;

function copyState(state) {
  // if (Array.isArray(state)) return state.slice().map(val => copyState(val));
  // Switched to FOR loop for performance
  var i, copy;

  if (Array.isArray(state)) {
    copy = state.slice();

    for (i = 0; i < copy.length; i++) {
      copy[i] = copyState(copy[i]);
    }

    return copy;
  }

  if (state !== null && _typeof(state) === 'object') return false; // You can't clone an object this way

  return state;
}

var printState = function printState(state) {
  return state.reduce(function (text, row, index) {
    if (index === 3 || index === 6) {
      text = text.concat("\n"); // Add horizontal spacing
    }

    var rowString = row.reduce(function (rowText, val, rowIndex) {
      val = val === null ? '_' : val;

      if (rowIndex === 3 || rowIndex === 6) {
        rowText = rowText.concat(' '); // Add vertical spacing
      }

      return rowText.concat(' ' + val);
    }, '');
    return text.concat("|" + rowString + " |\n");
  }, '');
};

exports.printState = printState;

var isValidValue = function isValidValue(val) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(val);
};

var getValues = function getValues(state, coordinates) {
  return coordinates.map(function (coord) {
    return getValue(state, coord);
  });
}; // Get the value of a given coordinate from the given puzzle state


var getValue = function getValue(state, coordinate) {
  return state[coordinate[0]][coordinate[1]];
}; // Get the square (1 through 9) that contains the given coordinates
// TODO: Consider caching square/coordinate maps to save performance


var getSquare = function getSquare(y, x) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].find(function (square) {
    return getSquareCoords(square).some(function (coord) {
      return arraysAreIdentical(coord, [y, x]);
    });
  });
}; // Get the coordinates contained within in a given square (1 through 9)


var getSquareCoords = function getSquareCoords(square) {
  return squareCoordMap[square];
};

var parseState = function parseState(inputState) {
  return inputState.map(function (row) {
    return row.map(function (val) {
      return isValidValue(val) ? val : null;
    });
  });
}; // Map of squares to the coordinates they contain


exports.parseState = parseState;
var squareCoordMap = {
  1: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]],
  2: [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]],
  3: [[0, 6], [0, 7], [0, 8], [1, 6], [1, 7], [1, 8], [2, 6], [2, 7], [2, 8]],
  4: [[3, 0], [3, 1], [3, 2], [4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [5, 2]],
  5: [[3, 3], [3, 4], [3, 5], [4, 3], [4, 4], [4, 5], [5, 3], [5, 4], [5, 5]],
  6: [[3, 6], [3, 7], [3, 8], [4, 6], [4, 7], [4, 8], [5, 6], [5, 7], [5, 8]],
  7: [[6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [7, 2], [8, 0], [8, 1], [8, 2]],
  8: [[6, 3], [6, 4], [6, 5], [7, 3], [7, 4], [7, 5], [8, 3], [8, 4], [8, 5]],
  9: [[6, 6], [6, 7], [6, 8], [7, 6], [7, 7], [7, 8], [8, 6], [8, 7], [8, 8]]
};

/***/ }),

/***/ "./src/sudoku-solver.js":
/*!******************************!*\
  !*** ./src/sudoku-solver.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = solve;

var _sudokuCore = __webpack_require__(/*! ./sudoku-core */ "./src/sudoku-core.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var nextCell = function nextCell(curY, curX) {
  if (curX === 8 && curY === 8) return undefined;
  if (curX === 8) return [curY + 1, 0];
  return [curY, curX + 1];
};

var getValidAllowed = function getValidAllowed(state, _ref, invalidVals) {
  var _ref2 = _slicedToArray(_ref, 2),
      y = _ref2[0],
      x = _ref2[1];

  return (0, _sudokuCore.getAllowed)(state, [y, x]).filter(function (val) {
    return !invalidVals[y][x].includes(val);
  });
};

function solve(state, _ref3, invalidVals, fixedVals) {
  var _ref4 = _slicedToArray(_ref3, 2),
      y = _ref4[0],
      x = _ref4[1];

  if (fixedVals[y][x] === 'fixed') {
    if (y === 8 && x === 8) return {
      solved: true,
      completedState: state
    };

    var _nextCell = nextCell(y, x),
        _nextCell2 = _slicedToArray(_nextCell, 2),
        _nextY = _nextCell2[0],
        _nextX = _nextCell2[1];

    return solve(state, [_nextY, _nextX], invalidVals, fixedVals);
  }

  var allowedVals = getValidAllowed(state, [y, x], invalidVals);
  if (!allowedVals.length) return false;
  var tryVal = allowedVals[0]; // TODO: randomize which allowedVal we use to prevent bias towards lower numbers

  var newState = (0, _sudokuCore.copyState)(state);
  newState[y][x] = tryVal;
  if (y === 8 && x === 8) return {
    solved: true,
    completedState: newState
  };

  var _nextCell3 = nextCell(y, x),
      _nextCell4 = _slicedToArray(_nextCell3, 2),
      nextY = _nextCell4[0],
      nextX = _nextCell4[1];

  var result = solve(newState, [nextY, nextX], invalidVals, fixedVals);
  if (_typeof(result) === 'object' && result.solved === true) return result;

  if (result === false) {
    invalidVals[y][x] = invalidVals[y][x].concat(tryVal); // TODO: make immutable

    var newInvalid = (0, _sudokuCore.copyState)(invalidVals).map(function (invRow, invY) {
      // Remove old state
      if (invY > y) return invRow.fill([]);
      if (invY === y) return invRow.fill([], x + 1);
      return invRow;
    });
    newState = undefined; // TODO: Test to see if making these undefined actually reduces memory use

    invalidVals = undefined;
    result = undefined;
    return solve(state, [y, x], newInvalid, fixedVals);
  }
}

/***/ })

/******/ });
//# sourceMappingURL=sudoku-solver.js.map