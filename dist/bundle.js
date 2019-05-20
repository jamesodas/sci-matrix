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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function theArgumentsAreValid(args) {
  if (args.length === 0 || args.length > 2) return false;

  if (args.length === 1 && args[0].constructor === Array && (0, _isMatrixOfNumbers2.default)(args[0])) {
    return true;
  } else if (args.length === 2 && !Number.isNaN(args[0]) && !Number.isNaN(args[1])) return true;

  return false;
}

var Matrix = function (_Array) {
  _inherits(Matrix, _Array);

  function Matrix() {
    _classCallCheck(this, Matrix);

    var _this = _possibleConstructorReturn(this, (Matrix.__proto__ || Object.getPrototypeOf(Matrix)).call(this));

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (theArgumentsAreValid(args)) {
      if (args[0].constructor === Array) {
        for (var i = 0; i < args[0].length; i += 1) {
          _this[i] = args[0][i].constructor === Array ? args[0][i].slice() : args[0][i];
        }
      } else {
        var m = args[0];
        var n = args[1];
        for (var _i = 0; _i < m; _i += 1) {
          _this[_i] = [];
          for (var j = 0; j < n; j += 1) {
            _this[_i][j] = 0;
          }
        }
      }
    }

    _this.rows = _this.length;
    _this.columns = _this[0] ? _this[0].length : 0;
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

var A = new _matrix2.default([[3, 2], [3, 1]]);
var B = new _matrix2.default([[1, 1], [1, 1]]);

console.log((0, _addMatrices2.default)(A, B));

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

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map