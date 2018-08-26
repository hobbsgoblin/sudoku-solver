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

/***/ "./node_modules/sudoku-core/dist/sudoku-core.js":
/*!******************************************************!*\
  !*** ./node_modules/sudoku-core/dist/sudoku-core.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(r){var n={};function t(e){if(n[e])return n[e].exports;var u=n[e]={i:e,l:!1,exports:{}};return r[e].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=r,t.c=n,t.d=function(r,n,e){t.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:e})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,n){if(1&n&&(r=t(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var u in r)t.d(e,u,function(n){return r[n]}.bind(null,u));return e},t.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(n,"a",n),n},t.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},t.p="",t(t.s=0)}([function(r,n,t){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function u(r){return function(r){if(Array.isArray(r)){for(var n=0,t=new Array(r.length);n<r.length;n++)t[n]=r[n];return t}}(r)||function(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){var t=[],e=!0,u=!1,o=void 0;try{for(var i,c=r[Symbol.iterator]();!(e=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);e=!0);}catch(r){u=!0,o=r}finally{try{e||null==c.return||c.return()}finally{if(u)throw o}}return t}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.getInitState=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Array(9).fill([]).map(function(){return u(Array(9).fill(r))})},n.copyState=l,n.parseState=n.printState=n.checkSolutionIsValid=n.isValidPuzzle=n.isSolved=n.arraysAreIdentical=n.getAllowed=n.getAdjacentCoords=n.getAdjacentValues=void 0;var i=function(r,n){var t=o(n,2),e=t[0],u=t[1];return{x:r[e],y:r.map(function(r){return r[u]}),squareVals:f(r,d(y(e,u)))}};n.getAdjacentValues=i;n.getAdjacentCoords=function(r){var n=o(r,2),t=n[0],e=n[1];return{x:[0,1,2,3,4,5,6,7,8].map(function(r){return[r,e]}).filter(function(r){return r[0]!==t}),y:[0,1,2,3,4,5,6,7,8].map(function(r){return[t,r]}).filter(function(r){return r[1]!==e}),squareCoords:d(y(t,e)).filter(function(r){return r[0]!==t||r[1]!==e})}};var c=function(r,n){var t=i(r,n),e=[].concat(t.x,t.y,t.squareVals);return[1,2,3,4,5,6,7,8,9].filter(function(r){return!e.includes(r)})};n.getAllowed=c;var a=function r(n,t){if(Array.isArray(n)&&Array.isArray(t)){if(n.length!==t.length)return!1;for(var e=n.length;e--;)if(Array.isArray(n[e])||Array.isArray(t[e])){if(!r(n[e],t[e]))return!1}else if(n[e]!==t[e])return!1;return!0}};n.arraysAreIdentical=a;n.isSolved=function(r){var n;return!(n=[]).concat.apply(n,u(r)).includes(null)};n.isValidPuzzle=function(r){return!!r.reduce(function(r,n){return r.concat(n)},[]).includes(null)&&9===r.length&&!r.some(function(n,t){return!!r.some(function(r){return 9!==r.length})||n.some(function(n,e){if(null===n)return!1;var u=l(r);return u[t][e]=null,!1===c(u,[t,e]).includes(n)})})};function l(r){var n,t;if(Array.isArray(r)){for(t=r.slice(),n=0;n<t.length;n++)t[n]=l(t[n]);return t}return(null===r||"object"!==e(r))&&r}n.checkSolutionIsValid=function(r){var n=function(r){return a([1,2,3,4,5,6,7,8,9],r.slice().sort())},t=r,e=[0,1,2,3,4,5,6,7,8].map(function(n){return r.map(function(r){return r[n]})}),u=[1,2,3,4,5,6,7,8,9].map(function(n){return f(r,d(n))}),o=t.every(n),i=e.every(n),c=u.every(n);return o&&i&&c};n.printState=function(r){return r.reduce(function(r,n,t){3!==t&&6!==t||(r=r.concat("\n"));var e=n.reduce(function(r,n,t){return n=null===n?"_":n,3!==t&&6!==t||(r=r.concat(" ")),r.concat(" "+n)},"");return r.concat("|"+e+" |\n")},"")};var f=function(r,n){return n.map(function(n){return s(r,n)})},s=function(r,n){return r[n[0]][n[1]]},y=function(r,n){return[1,2,3,4,5,6,7,8,9].find(function(t){return d(t).some(function(t){return a(t,[r,n])})})},d=function(r){return p[r]};n.parseState=function(r){return r.map(function(r){return r.map(function(r){return function(r){return[1,2,3,4,5,6,7,8,9].includes(r)}(r)?r:null})})};var p={1:[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]],2:[[0,3],[0,4],[0,5],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]],3:[[0,6],[0,7],[0,8],[1,6],[1,7],[1,8],[2,6],[2,7],[2,8]],4:[[3,0],[3,1],[3,2],[4,0],[4,1],[4,2],[5,0],[5,1],[5,2]],5:[[3,3],[3,4],[3,5],[4,3],[4,4],[4,5],[5,3],[5,4],[5,5]],6:[[3,6],[3,7],[3,8],[4,6],[4,7],[4,8],[5,6],[5,7],[5,8]],7:[[6,0],[6,1],[6,2],[7,0],[7,1],[7,2],[8,0],[8,1],[8,2]],8:[[6,3],[6,4],[6,5],[7,3],[7,4],[7,5],[8,3],[8,4],[8,5]],9:[[6,6],[6,7],[6,8],[7,6],[7,7],[7,8],[8,6],[8,7],[8,8]]}}]);

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

var _sudokuCore = __webpack_require__(/*! sudoku-core */ "./node_modules/sudoku-core/dist/sudoku-core.js");

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

var createFixedValsFromState = function createFixedValsFromState(state) {
  return state.map(function (row) {
    return row.map(function (val) {
      return val === null ? null : 'fixed';
    });
  });
};

var getRandValFromArray = function getRandValFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

function solve(state) {
  var invalidVals = (0, _sudokuCore.getInitState)([]);
  var fixedVals = createFixedValsFromState(state);
  return _solve(state, [0, 0], invalidVals, fixedVals);
}

function _solve(state, _ref3, invalidVals, fixedVals) {
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

    return _solve(state, [_nextY, _nextX], invalidVals, fixedVals);
  }

  var allowedVals = getValidAllowed(state, [y, x], invalidVals);
  if (!allowedVals.length) return false;
  var tryVal = getRandValFromArray(allowedVals); // TODO: randomize which allowedVal we use to prevent bias towards lower numbers

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

  var result = _solve(newState, [nextY, nextX], invalidVals, fixedVals);

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
    return _solve(state, [y, x], newInvalid, fixedVals);
  }
}

/***/ })

/******/ });
//# sourceMappingURL=sudoku-solver.js.map