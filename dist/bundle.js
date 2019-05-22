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

var _isMatrix = __webpack_require__(4);

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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isMatrixOfNumbers = __webpack_require__(0);

var _isMatrixOfNumbers2 = _interopRequireDefault(_isMatrixOfNumbers);

var _setIdentity = __webpack_require__(5);

var _setIdentity2 = _interopRequireDefault(_setIdentity);

var _isIdentity = __webpack_require__(6);

var _isIdentity2 = _interopRequireDefault(_isIdentity);

var _isSquare = __webpack_require__(7);

var _isSquare2 = _interopRequireDefault(_isSquare);

var _isRow = __webpack_require__(8);

var _isRow2 = _interopRequireDefault(_isRow);

var _isColumn = __webpack_require__(9);

var _isColumn2 = _interopRequireDefault(_isColumn);

var _theArgumentAreValid = __webpack_require__(10);

var _theArgumentAreValid2 = _interopRequireDefault(_theArgumentAreValid);

var _setZero = __webpack_require__(11);

var _setZero2 = _interopRequireDefault(_setZero);

var _setSize = __webpack_require__(12);

var _setSize2 = _interopRequireDefault(_setSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Matrix = function (_Array) {
  _inherits(Matrix, _Array);

  function Matrix() {
    _classCallCheck(this, Matrix);

    var _this = _possibleConstructorReturn(this, (Matrix.__proto__ || Object.getPrototypeOf(Matrix)).call(this));

    _this.type = undefined;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if ((0, _theArgumentAreValid2.default)(args, _isMatrixOfNumbers2.default)) {
      if (args[0].constructor === Array) {
        for (var i = 0; i < args[0].length; i += 1) {
          _this[i] = args[0][i].constructor === Array ? args[0][i].slice() : args[0][i];
        }
      } else {
        var m = args[0];
        var n = args[1];
        (0, _setZero2.default)(_this, m, n);
      }
    }

    (0, _setSize2.default)(_this);

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

var _addMatrices = __webpack_require__(3);

var _addMatrices2 = _interopRequireDefault(_addMatrices);

var _matrix = __webpack_require__(1);

var _matrix2 = _interopRequireDefault(_matrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var A = new _matrix2.default([[1, 0], [0, 0]]);
var B = new _matrix2.default([[0, 0], [0, 1]]);
//const C = new Matrix(3, 3);

var D = (0, _addMatrices2.default)(A, B);

console.log(D);
console.log(D.rows);
console.log(D.columns);
console.log(D.type);
console.log(D.identity);

exports.default = _matrix2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isMatrixOfNumbers = __webpack_require__(0);

var _isMatrixOfNumbers2 = _interopRequireDefault(_isMatrixOfNumbers);

var _matrix = __webpack_require__(1);

var _matrix2 = _interopRequireDefault(_matrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addMatrices = function addMatrices(A, B) {
  if ((0, _isMatrixOfNumbers2.default)(A) && (0, _isMatrixOfNumbers2.default)(B)) {
    if (A.length !== B.length || A[0].length !== B[0].length) return undefined;
    var C = new Array(A.length);
    for (var i = 0; i < A.length; i += 1) {
      C[i] = new Array(A[0].length);
      for (var j = 0; j < A[0].length; j += 1) {
        C[i][j] = A[i][j] + B[i][j];
      }
    }

    return new _matrix2.default(C);
  }
  return undefined;
};

exports.default = addMatrices;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isMatrix = function isMatrix(matriz) {
  if (!Array.isArray(matriz)) return false;
  return matriz.reduce(function (valorMatrizValida, elem, i, array) {
    var matrizValida = valorMatrizValida;
    matrizValida = matrizValida ? elem.length === array[i - 1].length : false;
    return matrizValida;
  });
};

exports.default = isMatrix;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var setIdentity = function setIdentity() {
  this.identity = true;
  var m = this.rows;
  var n = this.columns;
  for (var i = 0; i < m; i += 1) {
    for (var j = 0; j < n; j += 1) {
      this[i][j] = i === j ? 1 : 0;
    }
  }
  return this;
};

module.exports = setIdentity;

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isSquare = function isSquare(A) {
  return A.rows === A.columns;
};

module.exports = isSquare;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRow = function isRow(A) {
  return A.rows === 1;
};

module.exports = isRow;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isColumn = function isColumn(A) {
  return A.columns === 1;
};

module.exports = isColumn;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var theArgumentsAreValid = function theArgumentsAreValid(args, isMatrixOfNumbers) {
  if (args.length === 0 || args.length > 2) return false;

  if (args.length === 1 && args[0].constructor === Array && isMatrixOfNumbers(args[0])) {
    return true;
  } else if (args.length === 2 && !Number.isNaN(args[0]) && !Number.isNaN(args[1])) return true;

  return false;
};

module.exports = theArgumentsAreValid;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var setZero = function setZero(A, m, n) {
  for (var i = 0; i < m; i += 1) {
    A[i] = [];
    for (var j = 0; j < n; j += 1) {
      A[i][j] = 0;
    }
  }
};

module.exports = setZero;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var setSize = function setSize(A) {
  Object.defineProperty(A, 'rows', { enumerable: false, value: A.length });
  Object.defineProperty(A, 'columns', { enumerable: false, value: A[0] ? A[0].length : 0 });
};

module.exports = setSize;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map