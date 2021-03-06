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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/audio/background.wav":
/*!**********************************!*\
  !*** ./src/audio/background.wav ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b6ffe2423fbebd8182016ff8cbaf52a3.wav");

/***/ }),

/***/ "./src/audio/coin.mp3":
/*!****************************!*\
  !*** ./src/audio/coin.mp3 ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4d98dfe8617f6968294252efbff81dfe.mp3");

/***/ }),

/***/ "./src/audio/die.mp3":
/*!***************************!*\
  !*** ./src/audio/die.mp3 ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "989bf13b40852e23c0171b49d9089574.mp3");

/***/ }),

/***/ "./src/audio/jump.mp3":
/*!****************************!*\
  !*** ./src/audio/jump.mp3 ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "44b6e76ea5fc50fbbc938210d579d442.mp3");

/***/ }),

/***/ "./src/audio/lifeminus.mp3":
/*!*********************************!*\
  !*** ./src/audio/lifeminus.mp3 ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d0c3c875706b8589865203925e3e938b.mp3");

/***/ }),

/***/ "./src/audio/mouseDie.mp3":
/*!********************************!*\
  !*** ./src/audio/mouseDie.mp3 ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0f7c3383b94419cae48b5b30dc4d454f.mp3");

/***/ }),

/***/ "./src/audio/win.mp3":
/*!***************************!*\
  !*** ./src/audio/win.mp3 ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "642b4a096d2b570f991147e3a997c32d.mp3");

/***/ }),

/***/ "./src/image/background.png":
/*!**********************************!*\
  !*** ./src/image/background.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "224917b28479855f79aab054da85daab.png");

/***/ }),

/***/ "./src/image/bgitems.png":
/*!*******************************!*\
  !*** ./src/image/bgitems.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5ef4a28f9e3740e396d5362a8673ea0e.png");

/***/ }),

/***/ "./src/image/box.png":
/*!***************************!*\
  !*** ./src/image/box.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f09aea3ffdaf8bba5407a537dadbbc4e.png");

/***/ }),

/***/ "./src/image/candy.png":
/*!*****************************!*\
  !*** ./src/image/candy.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4680af7c5f2306aa444e414dfa45aa94.png");

/***/ }),

/***/ "./src/image/mouseDied.png":
/*!*********************************!*\
  !*** ./src/image/mouseDied.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5f65736e5ac5abf291931f8f2f35785f.png");

/***/ }),

/***/ "./src/image/mouseLeft.png":
/*!*********************************!*\
  !*** ./src/image/mouseLeft.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c3820ccda43800926905bcb3d873ba9b.png");

/***/ }),

/***/ "./src/image/mouseRight.png":
/*!**********************************!*\
  !*** ./src/image/mouseRight.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ee77a5a9bf6df2c6e7c8dccb084bbd49.png");

/***/ }),

/***/ "./src/image/platform.png":
/*!********************************!*\
  !*** ./src/image/platform.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f0624b996376db386488386a3fca8519.png");

/***/ }),

/***/ "./src/image/platformSmallTall.png":
/*!*****************************************!*\
  !*** ./src/image/platformSmallTall.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3dead64675c9fc96955dc148550ef83d.png");

/***/ }),

/***/ "./src/image/playerLeftRun.png":
/*!*************************************!*\
  !*** ./src/image/playerLeftRun.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8be491b480fa0cca99454ffa3f463ac4.png");

/***/ }),

/***/ "./src/image/playerRightRun.png":
/*!**************************************!*\
  !*** ./src/image/playerRightRun.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b1c9c5e96d1aecfb597a4c0ceeca962c.png");

/***/ }),

/***/ "./src/image/playerStand.png":
/*!***********************************!*\
  !*** ./src/image/playerStand.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6cba6ee34f71752c877a1a9fa651f9d0.png");

/***/ }),

/***/ "./src/image/playerSuperLeftRun.png":
/*!******************************************!*\
  !*** ./src/image/playerSuperLeftRun.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "679aabe2ea02d47cd6aa09af4e0f05a2.png");

/***/ }),

/***/ "./src/image/playerSuperRightRun.png":
/*!*******************************************!*\
  !*** ./src/image/playerSuperRightRun.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "04ce67e9658d7414eb8a5c943abbc029.png");

/***/ }),

/***/ "./src/image/playerSuperStand.png":
/*!****************************************!*\
  !*** ./src/image/playerSuperStand.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b424fc82501c5299633d1266b35335b7.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../image/platform.png */ "./src/image/platform.png");
/* harmony import */ var _image_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image/background.png */ "./src/image/background.png");
/* harmony import */ var _image_bgitems_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/bgitems.png */ "./src/image/bgitems.png");
/* harmony import */ var _image_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/platformSmallTall.png */ "./src/image/platformSmallTall.png");
/* harmony import */ var _image_playerRightRun_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/playerRightRun.png */ "./src/image/playerRightRun.png");
/* harmony import */ var _image_playerStand_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image/playerStand.png */ "./src/image/playerStand.png");
/* harmony import */ var _image_playerLeftRun_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../image/playerLeftRun.png */ "./src/image/playerLeftRun.png");
/* harmony import */ var _image_playerSuperRightRun_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image/playerSuperRightRun.png */ "./src/image/playerSuperRightRun.png");
/* harmony import */ var _image_playerSuperStand_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../image/playerSuperStand.png */ "./src/image/playerSuperStand.png");
/* harmony import */ var _image_playerSuperLeftRun_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../image/playerSuperLeftRun.png */ "./src/image/playerSuperLeftRun.png");
/* harmony import */ var _image_candy_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../image/candy.png */ "./src/image/candy.png");
/* harmony import */ var _image_mouseRight_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../image/mouseRight.png */ "./src/image/mouseRight.png");
/* harmony import */ var _image_mouseLeft_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../image/mouseLeft.png */ "./src/image/mouseLeft.png");
/* harmony import */ var _image_mouseDied_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../image/mouseDied.png */ "./src/image/mouseDied.png");
/* harmony import */ var _image_box_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../image/box.png */ "./src/image/box.png");
/* harmony import */ var _audio_background_wav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../audio/background.wav */ "./src/audio/background.wav");
/* harmony import */ var _audio_coin_mp3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../audio/coin.mp3 */ "./src/audio/coin.mp3");
/* harmony import */ var _audio_lifeminus_mp3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../audio/lifeminus.mp3 */ "./src/audio/lifeminus.mp3");
/* harmony import */ var _audio_mouseDie_mp3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../audio/mouseDie.mp3 */ "./src/audio/mouseDie.mp3");
/* harmony import */ var _audio_die_mp3__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../audio/die.mp3 */ "./src/audio/die.mp3");
/* harmony import */ var _audio_jump_mp3__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../audio/jump.mp3 */ "./src/audio/jump.mp3");
/* harmony import */ var _audio_win_mp3__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../audio/win.mp3 */ "./src/audio/win.mp3");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }























var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.height = 576;
canvas.width = 1024;
var gravity = 0.3; // ?????????????????????

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.speed = 6;
    this.position = {
      x: 100,
      y: 200
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 91;
    this.height = 100;
    this.image = createImage(_image_playerStand_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
    this.frames = 0;
    this.sprites = {
      normal: {
        stand: createImage(_image_playerStand_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        run: {
          right: createImage(_image_playerRightRun_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
          left: createImage(_image_playerLeftRun_png__WEBPACK_IMPORTED_MODULE_6__["default"])
        }
      },
      "super": {
        stand: createImage(_image_playerSuperStand_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
        run: {
          right: createImage(_image_playerSuperRightRun_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
          left: createImage(_image_playerSuperLeftRun_png__WEBPACK_IMPORTED_MODULE_9__["default"])
        }
      }
    };
    this.currentSprite = this.sprites.normal.stand;
    this.state = 'normal';
  }

  _createClass(Player, [{
    key: "statement",
    value: function statement() {
      var _this = this;

      setTimeout(function () {
        if (_this.currentSprite === _this.sprites["super"].stand) {
          _this.currentSprite = _this.sprites.normal.stand;
        } else if (_this.currentSprite === _this.sprites["super"].run.right) {
          _this.currentSprite = _this.sprites.normal.run.right;
        } else if (_this.currentSprite === _this.sprites["super"].run.left) {
          _this.currentSprite = _this.sprites.normal.run.left;
        }

        _this.state = 'normal';
      }, 3000);
    }
  }, {
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, 457 * this.frames, 0, 457, 503, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;

      if (this.frames > 8) {
        this.frames = 0;
      }

      if (keys.right.pressed && this.state === 'normal') {
        this.currentSprite = this.sprites.normal.run.right;
      } else if (keys.left.pressed && this.state === 'normal') {
        this.currentSprite = this.sprites.normal.run.left;
      } else if (keys.right.pressed && this.state === 'super') {
        this.currentSprite = this.sprites["super"].run.right;
      } else if (keys.left.pressed && this.state === 'super') {
        this.currentSprite = this.sprites["super"].run.left;
      }

      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y; // console.log(this.state)

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      }
    }
  }]);

  return Player;
}(); // ?????????????????????


var Mouse = /*#__PURE__*/function () {
  function Mouse(_ref) {
    var x = _ref.x,
        y = _ref.y,
        d = _ref.d;

    _classCallCheck(this, Mouse);

    this.speed = 3;
    this.startPosition = {
      x: x,
      y: y
    };
    this.position = {
      x: x,
      y: y
    };
    this.width = 61;
    this.height = 30;
    this.distance = d - this.width;
    this.frame = 0;
    this.allFrames = this.distance / this.speed;
    this.sprites = {
      right: createImage(_image_mouseRight_png__WEBPACK_IMPORTED_MODULE_11__["default"]),
      left: createImage(_image_mouseLeft_png__WEBPACK_IMPORTED_MODULE_12__["default"]),
      died: createImage(_image_mouseDied_png__WEBPACK_IMPORTED_MODULE_13__["default"])
    };
    this.currentSprite = this.sprites.right;
    this.alive = true;
  }

  _createClass(Mouse, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.speed;
      this.frame++;

      if (!this.alive) {
        this.currentSprite = this.sprites.died;
        this.speed = 0;
      }

      if (this.frame > this.allFrames) {
        this.speed = -this.speed;
        this.currentSprite = this.currentSprite === this.sprites.left ? this.sprites.right : this.sprites.left;
        this.frame = 0;
      }
    }
  }]);

  return Mouse;
}(); // ?????????????????????


var Platform = /*#__PURE__*/function () {
  function Platform(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}(); //?????????????????????


var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref3) {
    var x = _ref3.x,
        y = _ref3.y,
        image = _ref3.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}(); // ?????????????????????


var Coin = /*#__PURE__*/function () {
  function Coin(_ref4) {
    var x = _ref4.x,
        y = _ref4.y,
        image = _ref4.image;

    _classCallCheck(this, Coin);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Coin, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }, {
    key: "clear",
    value: function clear() {
      c.clearRect(this.x, this.y, this.width, this.height);
    }
  }]);

  return Coin;
}(); // ??????????????????


var Goal = /*#__PURE__*/function () {
  function Goal() {
    _classCallCheck(this, Goal);

    this.position = {
      x: 9400,
      y: 370
    };
    this.width = 180;
    this.height = 99;
    this.image = createImage(_image_box_png__WEBPACK_IMPORTED_MODULE_14__["default"]);
  }

  _createClass(Goal, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Goal;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  image.addEventListener('load', function () {
    image.width;
    console.log('imageWidth', image.width);
  });
  return image;
}

function createAudio(audioSrc, isLoop) {
  var audio = new Audio();
  audio.src = audioSrc;
  audio.loop = isLoop;
  console.log('audio', audio);
  return audio;
}

function playAudio(audio) {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}

var playBackgroundAudio = createAudio(_audio_background_wav__WEBPACK_IMPORTED_MODULE_15__["default"], true);
var playCoinAudio = createAudio(_audio_coin_mp3__WEBPACK_IMPORTED_MODULE_16__["default"], false);
var playLifeMinusAudio = createAudio(_audio_lifeminus_mp3__WEBPACK_IMPORTED_MODULE_17__["default"], false);
var playMouseDieAudio = createAudio(_audio_mouseDie_mp3__WEBPACK_IMPORTED_MODULE_18__["default"], false);
var playDieAudio = createAudio(_audio_die_mp3__WEBPACK_IMPORTED_MODULE_19__["default"], false);
var playJumpAudio = createAudio(_audio_jump_mp3__WEBPACK_IMPORTED_MODULE_20__["default"], false);
var playWinAudio = createAudio(_audio_win_mp3__WEBPACK_IMPORTED_MODULE_21__["default"], false);
var platformImage = createImage(_image_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformSmallTallImage = createImage(_image_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var playerState = 'start';
var player = '';
var platforms = [];
var genericObjects = [];
var coins = [];
var mice = [];
var goal = '';
var win = document.querySelector(".win");
var finalScore = document.querySelector(".score");
var result = document.querySelector(".result");
var start = document.querySelector(".start");
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffSet = 0;
var score = 0;
var life = 3;
var doubleJump = 0;
var isLoading = true; // ????????????

function init() {
  player = new Player();
  goal = new Goal();
  platformImage.width = 580;
  platformSmallTallImage.width = 292;
  platforms = [new Platform({
    image: platformSmallTallImage,
    x: platformImage.width * 4 + 300 + platformSmallTallImage.width,
    y: 350
  }), new Platform({
    x: platformImage.width * 4 + 300 + platformSmallTallImage.width * 2,
    y: 230,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 4 + 300 + platformSmallTallImage.width * 2,
    y: 350,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 9 + 300 - 5 + platformSmallTallImage.width * 2,
    y: 350,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 12,
    y: 350,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 14 + 9,
    y: 230,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 14 + 9,
    y: 350,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 14 + 9 - platformSmallTallImage.width,
    y: 350,
    image: platformSmallTallImage
  }), new Platform({
    x: 0,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width - 1,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 80,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 300,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 300,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 7,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 8,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 9 + 300,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 11,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 12,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 12 + 300,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 13 + 300,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 14 + 700,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 15 + 700,
    y: 470,
    image: platformImage
  })];
  genericObjects = [new GenericObject({
    x: 0,
    y: 0,
    image: createImage(_image_background_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new GenericObject({
    x: 0,
    y: 0,
    image: createImage(_image_bgitems_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  })];
  coins = [new Coin({
    x: 1000,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 100,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 250,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 350,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 450,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 550,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 950,
    y: 250,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 1050,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 1150,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 1250,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 1350,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 1550,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 1650,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 1950,
    y: 260,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 2050,
    y: 260,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 2250,
    y: 150,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 2350,
    y: 150,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 3050,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 3150,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 3250,
    y: 250,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: 1000 + 3350,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: platformImage.width * 9 + 300,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: platformImage.width * 9 + 400,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: platformImage.width * 9 + 500,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: platformImage.width * 9 + 600,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: platformImage.width * 11 + 100,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: platformImage.width * 11 + 200,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: platformImage.width * 11 + 300,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: platformImage.width * 11 + 400,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: platformImage.width * 11 + 500,
    y: 380,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: platformImage.width * 11 + 650,
    y: 260,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: platformImage.width * 11 + 750,
    y: 260,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: platformImage.width * 13 + 320,
    y: 260,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: platformImage.width * 13 + 420,
    y: 260,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: platformImage.width * 13 + 520,
    y: 260,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: platformImage.width * 13 + 620,
    y: 260,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: platformImage.width * 13 + 720,
    y: 260,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Coin({
    x: platformImage.width * 13 + 820,
    y: 260,
    image: createImage(_image_candy_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  })];
  mice = [new Mouse({
    x: platformImage.width,
    y: 440,
    d: platformImage.width
  }), new Mouse({
    x: platformImage.width * 7,
    y: 440,
    d: platformImage.width * 2
  }), new Mouse({
    x: platformImage.width * 9 + 300 - 5 + platformSmallTallImage.width * 2,
    y: 322,
    d: platformSmallTallImage.width
  })];
  scrollOffSet = 0;
} // ????????????


function drawScore() {
  c.font = "40px Arial";
  c.fillStyle = "#FFFFFF";
  c.fillText("Score: " + score, 50, 100);
}

function drawLife() {
  c.font = "40px Arial";
  c.fillStyle = "#e1597c";

  for (var i = 0; i < life; i++) {
    c.fillText("???", 950 - i * 50, 100);
  }
} // ????????????????????????


function loadingRemove() {
  if (!isLoading) {
    var app = document.getElementById("app");
    var loader = document.querySelector(".loading");
    app.removeChild(loader);
    start.style.display = 'inline';
    console.log('app', app);
  }
} // ??????????????????


function animate() {
  console.log('playerState', playerState);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  coins.forEach(function (coin) {
    coin.draw();
  });
  mice.forEach(function (mouse) {
    mouse.update();
  });

  if (playerState !== 'start') {
    platforms.forEach(function (platform) {
      platform.draw();
    });
    coins.forEach(function (coin) {
      coin.draw();
    });
    mice.forEach(function (mouse) {
      mouse.update();
    });
    player.update();
  }

  goal.draw();
  drawScore();
  drawLife();
  requestAnimationFrame(animate); // ??????????????????

  if (keys.right.pressed && player.position.x + player.width - 10 > goal.position.x && player.position.x < goal.position.x + goal.width - 20 && player.position.y + player.height > goal.position.y) {
    player.velocity.x = 0;
  } else if (keys.left.pressed && player.position.x <= goal.position.x + goal.width - 10 && player.position.x >= goal.position.x && player.position.y + player.height > goal.position.y) {
    player.velocity.x = 0;
  } // ?????? x?????????
  else if (keys.right.pressed && player.position.x < canvas.width / 2 || keys.right.pressed && scrollOffSet >= 8835 && player.position.x < 930) {
      player.velocity.x = player.speed;
    } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffSet === 0 && player.position.x > 0) {
      player.velocity.x = -player.speed;
    } else {
      player.velocity.x = 0; // ????????????

      if (keys.right.pressed && scrollOffSet < 8835) {
        scrollOffSet += player.speed;
        genericObjects.forEach(function (genericObjects) {
          genericObjects.position.x -= player.speed * 0.66;
        });
        platforms.forEach(function (platform) {
          platform.position.x -= player.speed;
        });
        coins.forEach(function (coin) {
          coin.position.x -= player.speed;
        });
        mice.forEach(function (mouse) {
          mouse.position.x -= player.speed;
        });
        goal.position.x -= player.speed;
      } else if (keys.left.pressed && scrollOffSet > 0) {
        scrollOffSet -= player.speed;
        genericObjects.forEach(function (genericObjects) {
          genericObjects.position.x += player.speed * 0.66;
        });
        platforms.forEach(function (platform) {
          platform.position.x += player.speed;
        });
        mice.forEach(function (mouse) {
          mouse.position.x += player.speed;
        });
        coins.forEach(function (coin) {
          coin.position.x += player.speed;
        });
        goal.position.x += player.speed;
      }
    } // ?????????


  coins.forEach(function (coin, index, coins) {
    if (player.position.x + player.width - 10 > coin.position.x && player.position.x < coin.position.x + coin.width && player.position.y + player.height > coin.position.y && player.position.y < coin.position.y + coin.height) {
      coins.splice(index, 1);
      score += 10;
      playAudio(playCoinAudio);
    }
  }); // ????????????

  mice.forEach(function (mouse, index, mice) {
    if (mouse.alive && player.position.x + player.width > mouse.position.x && player.position.x < mouse.position.x + mouse.width && player.height + player.position.y <= mouse.position.y && player.height + player.position.y + player.velocity.y >= mouse.position.y) {
      score += 50;
      mouse.alive = false;
      playAudio(playMouseDieAudio);
      setTimeout(function () {
        mice.splice(index, 1);
      }, 1000);
    } else if (mouse.alive && player.position.x + player.width > mouse.position.x && player.position.x < mouse.position.x + mouse.width && player.height + player.position.y > mouse.position.y && player.position.y + player.velocity.y < mouse.position.y + mouse.height && player.state === 'normal' && playerState === 'gaming') {
      life -= 1;
      player.state = 'super';
      player.statement();

      if (life > 0) {
        playAudio(playLifeMinusAudio);
      }
    }
  }); // ????????????

  platforms.forEach(function (platform) {
    if (player.height + player.position.y <= platform.position.y && player.height + player.position.y + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); // ??????????????????

  if (player.position.x + player.width <= goal.position.x + player.width && player.position.x + player.width >= goal.position.x && player.height + player.position.y <= goal.position.y && player.height + player.position.y + player.velocity.y > goal.position.y || player.position.x >= goal.position.x + goal.width - player.width && player.position.x <= goal.position.x + goal.width && player.height + player.position.y <= goal.position.y && player.height + player.position.y + player.velocity.y > goal.position.y || player.position.x >= goal.position.x && player.position.x <= goal.position.x + goal.width && player.height + player.position.y <= goal.position.y + 60 && player.height + player.position.y + player.velocity.y >= goal.position.y + 60) {
    player.velocity.y = 0;
  } // ????????????


  if (player.velocity.y === 0) {
    doubleJump = 0;
  } // ???????????????


  if (player.position.y + player.velocity.y <= 0) {
    player.velocity.y = gravity;
  } // ????????????


  if (player.position.x > goal.position.x && player.position.x < goal.position.x + goal.width - 12 && player.position.y + player.height > goal.position.y) {
    playerState = 'win';
    win.style.display = 'inline';
    finalScore.innerHTML = "<p>Your score is</p>".concat(score);
    result.innerHTML = 'YOU WIN!';
    win.style.animation = 'Opacity 1s linear 0.2s forwards';
    keys.left.pressed = false;
    keys.right.pressed = false;
    playWinAudio.play();
    console.log('win');
  } //????????????


  if (player.position.y > canvas.height) {
    life -= 1;

    if (life > 0) {
      init();
    }

    if (life > 0) {
      playAudio(playLifeMinusAudio);
    }

    console.log('you die');
  } //????????????


  if (life <= 0) {
    playerState = 'lose';
    win.style.display = 'inline';
    finalScore.innerHTML = '';
    result.innerHTML = 'GAME OVER!';
    win.style.animation = 'Opacity 1s linear 0.2s forwards';
    keys.left.pressed = false;
    keys.right.pressed = false;
  }

  isLoading = false;
}

init();
animate();
addEventListener("load", function (event) {
  // All resources finished loading!
  console.log('finish');
  loadingRemove();
}); // ????????????

addEventListener('keydown', function (_ref5) {
  var keyCode = _ref5.keyCode;

  if (playerState === 'gaming') {
    switch (keyCode) {
      case 65:
        console.log('left');
        keys.left.pressed = true;

        if (player.state === 'super') {
          player.currentSprite = player.sprites["super"].run.left;
        } else {
          player.currentSprite = player.sprites.normal.run.left;
        }

        break;

      case 83:
        console.log('down');
        break;

      case 68:
        console.log('right');
        keys.right.pressed = true;

        if (player.state === 'super') {
          player.currentSprite = player.sprites["super"].run.right;
        } else {
          player.currentSprite = player.sprites.normal.run.right;
        }

        break;

      case 87:
        console.log('up');
        doubleJump += 1;

        if (doubleJump <= 1) {
          playAudio(playJumpAudio);
          player.velocity.y -= 9;
        } else if (doubleJump === 2) {
          playAudio(playJumpAudio);
          player.velocity.y -= 8;
        }

        break;
    }
  }
});
addEventListener('keyup', function (_ref6) {
  var keyCode = _ref6.keyCode;

  if (playerState === 'gaming') {
    switch (keyCode) {
      case 65:
        console.log('left');
        keys.left.pressed = false;

        if (player.state === 'super') {
          player.currentSprite = player.sprites["super"].stand;
        } else {
          player.currentSprite = player.sprites.normal.stand;
        }

        break;

      case 83:
        console.log('down');
        break;

      case 68:
        console.log('right');
        keys.right.pressed = false;

        if (player.state === 'super') {
          player.currentSprite = player.sprites["super"].stand;
        } else {
          player.currentSprite = player.sprites.normal.stand;
        }

        break;

      case 87:
        console.log('up');
        break;
    }
  }
});
window.addEventListener('click', function (e) {
  console.log(e.target);
  console.log(e.target.classList.contains('restartbtn'));

  if (e.target.classList.contains('restartbtn')) {
    playerState = 'gaming';
    win.style.opacity = 0;
    win.style.animation = '';
    score = 0;
    life = 3;
    playAudio(playBackgroundAudio);
    init();
  }

  if (e.target.classList.contains('startbtn')) {
    playerState = 'gaming';
    start.style.display = 'none';
    playAudio(playBackgroundAudio);
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map