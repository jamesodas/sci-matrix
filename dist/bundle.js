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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var isMatrix = function isMatrix(C) {
    if (!Array.isArray(C) || C.length < 1) return false;
    var length1 = Array.isArray(C[0]) ? C[0].length : undefined;
    var simpleArray = false;
    for (var i = 0; i < C.length; i++) {
        if (Array.isArray(C[i]) && !simpleArray) {
            if (i === 0) length1 = C[i].length;else if (C[i].length !== length1) return false;
            for (var j = 0; j < C[i].length; j++) {
                if (typeof C[i][j] !== 'number') return false;
            }
        } else {
            if (typeof C[i] !== 'number') return false;
            simpleArray = true;
        }
    }
    return true;
};

exports.default = isMatrix;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isMatrixOfNumbers = __webpack_require__(3);

var _isMatrixOfNumbers2 = _interopRequireDefault(_isMatrixOfNumbers);

var _setIdentity = __webpack_require__(4);

var _setIdentity2 = _interopRequireDefault(_setIdentity);

var _isIdentity = __webpack_require__(5);

var _isIdentity2 = _interopRequireDefault(_isIdentity);

var _isSquare = __webpack_require__(6);

var _isSquare2 = _interopRequireDefault(_isSquare);

var _isRow = __webpack_require__(7);

var _isRow2 = _interopRequireDefault(_isRow);

var _isColumn = __webpack_require__(8);

var _isColumn2 = _interopRequireDefault(_isColumn);

var _theArgumentsAreValid = __webpack_require__(9);

var _theArgumentsAreValid2 = _interopRequireDefault(_theArgumentsAreValid);

var _setZero = __webpack_require__(10);

var _setZero2 = _interopRequireDefault(_setZero);

var _setSize = __webpack_require__(11);

var _setSize2 = _interopRequireDefault(_setSize);

var _isDiagonal = __webpack_require__(12);

var _isDiagonal2 = _interopRequireDefault(_isDiagonal);

var _isMatrix = __webpack_require__(0);

var _isMatrix2 = _interopRequireDefault(_isMatrix);

var _setMatrixValues = __webpack_require__(15);

var _setMatrixValues2 = _interopRequireDefault(_setMatrixValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Matrix = function (_Array) {
  _inherits(Matrix, _Array);

  function Matrix() {
    _classCallCheck(this, Matrix);

    /** 
     * tipos de matrizes:
     *  - linha, coluna, quadrada, retangular
     * 
     * Propriedades:
     *  - zero, identidade, diagonal, simetrica, triangular
    */

    //console.log(theArgumentsAreValid(args));
    var _this = _possibleConstructorReturn(this, (Matrix.__proto__ || Object.getPrototypeOf(Matrix)).call(this));

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if ((0, _theArgumentsAreValid2.default)(args)) {
      if ((0, _isMatrix2.default)(args[0])) {
        (0, _setMatrixValues2.default)(_this, args[0]);
      } else {
        switch (args[0]) {
          case 'zero':
            (0, _setZero2.default)(_this, args[1], args[2]);
            break;
          case 'identity':
            (0, _setIdentity2.default)(_this, args[1], args[2]);
            break;
        }
      }
    }

    (0, _setSize2.default)(_this);

    //console.log('isDiagonal', isDiagonal(this));

    if ((0, _isSquare2.default)(_this)) {
      Object.defineProperty(_this, 'type', { enumerable: false, value: 'Square' });
      Object.defineProperty(_this, 'identity', { enumerable: false, value: (0, _isIdentity2.default)(_this) });
    } else {
      if ((0, _isRow2.default)(_this)) Object.defineProperty(_this, 'type', { enumerable: false, value: 'Row' });else if ((0, _isColumn2.default)(_this)) Object.defineProperty(_this, 'type', { enumerable: false, value: 'Column' });else Object.defineProperty(_this, 'type', { enumerable: false, value: 'Rectangular' });
    }

    //this.setIdentity = setIdentity;

    Object.freeze(_this);
    _this.forEach(function (item) {
      Object.freeze(item);
    });
    return _this;
  }

  return Matrix;
}(Array);

exports.default = Matrix;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _matrix = __webpack_require__(1);

var _matrix2 = _interopRequireDefault(_matrix);

var _isMatrix = __webpack_require__(0);

var _isMatrix2 = _interopRequireDefault(_isMatrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const A = new Matrix([[1, 0], [0, 0]]);
// const B = new Matrix([[0, 0], [1, 1]]);
//const C = new Matrix([[1, 0, 0], [0, 4, 0], [0, 0, 1]]);

// const D = addMatrices(A, B);

// import addMatrices from './add-matrices';
var E = new _matrix2.default('identity', 5, 5);

// console.log("isColumn ", isColumn(E));

// console.log(Array.isArray(C));
// console.log(typeof C);
// console.log(C instanceof Array);
// console.log(C.constructor);

console.log(E);
//console.log(isMatrix(C));

// console.log(C);
// console.log(D);
// console.log(D.rows);
// console.log(D.columns);
// console.log(D.type);
// console.log(D.identity);

exports.default = _matrix2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isMatrix = __webpack_require__(0);

var _isMatrix2 = _interopRequireDefault(_isMatrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isMatrixOfNumbers = function isMatrixOfNumbers(array) {
  if (!(0, _isMatrix2.default)(array)) return false;
  for (var i = 0; i < array.length; i += 1) {
    if (!Array.isArray(array[i]) && typeof array[i] !== 'number') return false;
    for (var j = 0; j < array[i].length; j += 1) {
      if (typeof array[i][j] !== 'number') return false;
    }
  }
  return true;
};

exports.default = isMatrixOfNumbers;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var setIdentity = function setIdentity(A, m, n) {
  for (var i = 0; i < m; i += 1) {
    A[i] = [];
    for (var j = 0; j < n; j += 1) {
      A[i][j] = i === j ? 1 : 0;
    }
  }
};

module.exports = setIdentity;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isIdentity = function isIdentity(A) {
  var m = A.length;
  var n = A[0] ? A[0].length : 0;
  for (var i = 0; i < m; i += 1) {
    for (var j = 0; j < n; j += 1) {
      if (i === j && A[i][j] !== 1) return false;
      if (i !== j && A[i][j] !== 0) return false;
    }
  }
  return true;
};

module.exports = isIdentity;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isSquare = function isSquare(A) {
  return A.rows === A.columns;
};

module.exports = isSquare;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRow = function isRow(A) {
  return A.rows === 1;
};

module.exports = isRow;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _matrix = __webpack_require__(1);

var _matrix2 = _interopRequireDefault(_matrix);

var _isMatrix = __webpack_require__(0);

var _isMatrix2 = _interopRequireDefault(_isMatrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isColumn = function isColumn(A) {
  console.log(A);
  return A.columns === 1;
};

module.exports = isColumn;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _isMatrix = __webpack_require__(0);

var _isMatrix2 = _interopRequireDefault(_isMatrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theArgumentsAreValid = function theArgumentsAreValid(args) {

  if (args.length === 1 && (0, _isMatrix2.default)(args[0])) return true;

  if (args.length === 3 && typeof args[0] === 'string' && typeof args[1] === 'number' && typeof args[2] === 'number') return true;

  return false;
};

module.exports = theArgumentsAreValid;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var setZero = function setZero(A, m, n) {
  for (var i = 0; i < m; i++) {
    A[i] = [];
    for (var j = 0; j < n; j++) {
      console.log("teste");
      A[i][j] = '0';
    }
  }
};

module.exports = setZero;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var setSize = function setSize(A) {
  Object.defineProperty(A, 'rows', { enumerable: false, value: A.length });
  Object.defineProperty(A, 'columns', { enumerable: false, value: A[0] ? A[0].length : 0 });
};

module.exports = setSize;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _isLowerTriangular = __webpack_require__(13);

var _isLowerTriangular2 = _interopRequireDefault(_isLowerTriangular);

var _isUpperTriangular = __webpack_require__(14);

var _isUpperTriangular2 = _interopRequireDefault(_isUpperTriangular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDiagonal = function isDiagonal(A) {
  return (0, _isLowerTriangular2.default)(A) && (0, _isUpperTriangular2.default)(A);
};

module.exports = isDiagonal;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isLowerTriangular = function isLowerTriangular(A) {
  var m = A.length;
  var n = A[0] ? A[0].length : 0;
  for (var i = 0; i < m; i += 1) {
    for (var j = 0; j < n; j += 1) {
      if (i < j && A[i][j] !== 0) return false;
    }
  }
  return true;
};

module.exports = isLowerTriangular;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isUpperTriangular = function isUpperTriangular(A) {
  var m = A.length;
  var n = A[0] ? A[0].length : 0;
  for (var i = 0; i < m; i += 1) {
    for (var j = 0; j < n; j += 1) {
      if (i > j && A[i][j] !== 0) return false;
    }
  }
  return true;
};

module.exports = isUpperTriangular;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var setMatrixValues = function setMatrixValues(A, B) {
  for (var i = 0; i < B.length; i += 1) {
    A[i] = B[i].slice();
  }
};

module.exports = setMatrixValues;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map