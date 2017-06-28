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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function Canvas(option) {
  _classCallCheck(this, Canvas);

  this.canvas = document.getElementById(option.el);
  this.canvas.width = this.cw = option.width ? option.width : window.innerWidth;
  this.canvas.height = this.ch = window.innerHeight ? option.height : window.innerHeight;
  this.ctx = this.canvas.getContext('2d');
  this.ctx.fillStyle = 'white';
  this.ctx.strokeStyle = 'white';
};

exports.default = Canvas;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Canvas2 = __webpack_require__(0);

var _Canvas3 = _interopRequireDefault(_Canvas2);

var _getRandomArbitrary = __webpack_require__(2);

var _getRandomArbitrary2 = _interopRequireDefault(_getRandomArbitrary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noiseCanvas = function (_Canvas) {
  _inherits(noiseCanvas, _Canvas);

  function noiseCanvas(option) {
    _classCallCheck(this, noiseCanvas);

    var _this = _possibleConstructorReturn(this, (noiseCanvas.__proto__ || Object.getPrototypeOf(noiseCanvas)).call(this, option));

    _this.amplitude = option.amplitude;
    _this.frequency = option.frequency;
    return _this;
  }

  _createClass(noiseCanvas, [{
    key: 'draw',
    value: function draw() {
      var widthPerPoint = this.cw / this.frequency;
      var halfHeight = this.ch / 2;
      var max = this.amplitude / 2;
      var min = -(this.amplitude / 2);

      console.log('max', max);
      console.log('min', min);

      this.ctx.beginPath();
      this.ctx.moveTo(0, halfHeight);
      for (var i = 1; i < this.frequency + 1; i += 1) {
        this.ctx.lineTo(widthPerPoint * i, halfHeight - (0, _getRandomArbitrary2.default)(min, max));
      }
      this.ctx.stroke();

      this.ctx.lineWidth = 2;
      this.ctx.strokeRect(0, 0, this.cw, this.ch);
    }
  }]);

  return noiseCanvas;
}(_Canvas3.default);

var NoiseSum = function () {
  function NoiseSum() {
    _classCallCheck(this, NoiseSum);

    this.canvases = [];
    this.setupCanvas();
  }

  _createClass(NoiseSum, [{
    key: 'setupCanvas',
    value: function setupCanvas() {
      var amplitudes = [128, 64, 32, 16, 8, 4];
      var frequencies = [4, 8, 16, 32, 64, 128];

      for (var i = 0, length = 6; i < length; i += 1) {
        this.canvases.push(new noiseCanvas({
          el: 'canvas' + (i + 1),
          width: window.innerWidth / 3,
          height: window.innerHeight / 3,
          amplitude: amplitudes[i],
          frequency: frequencies[i]
        }));
      }

      // this.noiseSumCanvas = new Canvas({
      //   el: `canvas7`,
      //   width: window.innerWidth / 3,
      //   height: window.innerHeight / 3,
      // });
    }
  }, {
    key: 'draw',
    value: function draw() {
      this.canvases.forEach(function (canvas) {
        canvas.draw();
      });
    }
  }]);

  return NoiseSum;
}();

var noiseSum = new NoiseSum();

noiseSum.draw();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRandomArbitrary;
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/***/ })
/******/ ]);