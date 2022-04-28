/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/modules/device.ts":
/*!**********************************!*\
  !*** ./src/ts/modules/device.ts ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar CheckDevice = /** @class */ (function () {\n    function CheckDevice() {\n        this.ua = navigator.userAgent.toLowerCase();\n    }\n    CheckDevice.prototype.isIos = function () {\n        return (this.ua.indexOf(\"iphone\") >= 0 ||\n            this.ua.indexOf(\"ipad\") >= 0 ||\n            this.ua.indexOf(\"ipod\") >= 0);\n    };\n    CheckDevice.prototype.isMobile = function () {\n        if (this.ua.match(/iphone|ipad|android.+mobile/))\n            return true;\n        return false;\n    };\n    return CheckDevice;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckDevice);\n\n\n//# sourceURL=webpack://webxr-template-ts/./src/ts/modules/device.ts?");

/***/ }),

/***/ "./src/ts/modules/textarea.ts":
/*!************************************!*\
  !*** ./src/ts/modules/textarea.ts ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ts/modules/ui.ts\");\n/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video */ \"./src/ts/modules/video.ts\");\n/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./device */ \"./src/ts/modules/device.ts\");\n\nvar uiController = new _ui__WEBPACK_IMPORTED_MODULE_0__.default();\n\nvar videoController = new _video__WEBPACK_IMPORTED_MODULE_1__.default();\n\nvar checkDevice = new _device__WEBPACK_IMPORTED_MODULE_2__.default();\nvar TextareaController = /** @class */ (function () {\n    function TextareaController() {\n        var _this = this;\n        this.isFocusing = true;\n        this.isTexting = false;\n        this.isYoucanflyTime = false;\n        this.timer = null;\n        this.isIosFirstEnter = true;\n        this.isMobile = false;\n        this.isIos = false;\n        this.sodaWord = [\"sodaakari\", \"sodakari\", \"そだあかり\"];\n        this.youcanflyBlinkTime = 3000;\n        this.reset = function () {\n            _this.textarea.value = \"\";\n        };\n        this.input = function () {\n            if (_this.isYoucanflyTime)\n                return;\n            for (var i = 0; i < _this.sodaWord.length; i++) {\n                if (_this.textarea.value.toLowerCase().indexOf(_this.sodaWord[i]) >= 0) {\n                    // console.log(\"soda youcanfly\");\n                    _this.youcanflyFunc(true);\n                    return;\n                }\n            }\n            if (_this.textarea.value === \"\") {\n                if (_this.isIos && _this.isIosFirstEnter) {\n                    _this.isIosFirstEnter = false;\n                    return;\n                }\n                // console.log(\"blank youcanfly\");\n                _this.youcanflyFunc(false);\n                _this.isIosFirstEnter = true;\n            }\n            //  else if (this.textarea.value.toLowerCase().indexOf(\"sodaakari\") >= 0) {\n            //   console.log(\"soda youcanfly\");\n            //   this.youcanflySodaFunc();\n            // }\n        };\n        this.keydown = function (e) {\n            if (!_this.isFocusing)\n                return;\n            if (e.key !== \"Enter\") {\n                _this.isTexting = true;\n                return;\n            }\n            if (!_this.isTexting)\n                return;\n            _this.isTexting = false;\n            setTimeout(function () {\n                _this.textarea.value += \"パラ\\n\";\n            }, 50);\n        };\n        this.youcanflyFunc = function (isSoda) {\n            _this.isYoucanflyTime = true;\n            _this.textarea.blur();\n            clearTimeout(_this.timer);\n            uiController.switchDOM(_this.youcanfly);\n            uiController.animDOM(_this.youcanfly);\n            _this.timer = setTimeout(function () {\n                videoController.play(_this.youcanflyVideoItem);\n                uiController.switchDOM(_this.youcanflyVideo);\n            }, _this.youcanflyBlinkTime);\n            if (isSoda) {\n                console.log(\"soda!\");\n                _this.youcanflyVideoItem.addEventListener(\"ended\", _this.profileOpenFunc, false);\n            }\n        };\n        // youcanflySodaFunc = () => {\n        //   this.isYoucanflyTime = true;\n        //   this.textarea.blur();\n        //   clearTimeout(this.timer);\n        //   uiController.switchDOM(this.youcanfly);\n        //   uiController.animDOM(this.youcanfly);\n        //   this.timer = setTimeout(() => {\n        //     videoController.play(this.youcanflyVideoItem);\n        //     uiController.switchDOM(this.youcanflyVideo);\n        //   }, this.youcanflyBlinkTime);\n        // };\n        this.profileOpenFunc = function () {\n            console.log(\"open func!\");\n            uiController.switchDOM(_this.profile);\n            _this.reset();\n            _this.youcanflyVideoItem.removeEventListener(\"ended\", _this.profileOpenFunc, false);\n        };\n        this.profileCloseFunc = function () {\n            uiController.switchDOM(_this.profile);\n            // uiController.switchDOM(this.youcanfly);\n            // uiController.animDOM(this.youcanfly);\n            _this.isYoucanflyTime = false;\n            _this.textarea.focus();\n            setTimeout(function () {\n                _this.profileInner.scrollTop = 0;\n            }, 300);\n        };\n        this.disableYoucanflyTime = function () {\n            _this.isYoucanflyTime = false;\n        };\n        this.textarea = document.getElementById(\"main-textarea\");\n        this.textarea.addEventListener(\"focus\", function () {\n            _this.isFocusing = true;\n        });\n        this.textarea.addEventListener(\"blur\", function () {\n            _this.isFocusing = false;\n        });\n        this.textarea.addEventListener(\"input\", this.input, false);\n        this.isMobile = checkDevice.isMobile();\n        if (this.isMobile)\n            this.isFocusing = false;\n        this.isIos = checkDevice.isIos();\n        if (this.isMobile) {\n            this.textarea.addEventListener(\"compositionend\", function () {\n                setTimeout(function () {\n                    _this.textarea.value += \"パラ\\n\";\n                }, 100);\n            });\n        }\n        else {\n            window.addEventListener(\"keydown\", this.keydown, false);\n        }\n        this.youcanfly = document.getElementById(\"youcanfly\");\n        this.youcanflyVideo = document.getElementById(\"youcanfly-video\");\n        this.youcanflyVideoItem = document.getElementById(\"youcanfly-video-item\");\n        this.profile = document.getElementById(\"profile\");\n        this.profileInner = document.getElementById(\"profile-inner\");\n        var profileClose = document.getElementById(\"profile-close\");\n        profileClose.addEventListener(\"click\", function () {\n            _this.profileCloseFunc();\n        });\n    }\n    return TextareaController;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextareaController);\n\n\n//# sourceURL=webpack://webxr-template-ts/./src/ts/modules/textarea.ts?");

/***/ }),

/***/ "./src/ts/modules/ui.ts":
/*!******************************!*\
  !*** ./src/ts/modules/ui.ts ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar UIController = /** @class */ (function () {\n    function UIController() {\n        this.classNameActive = \"is-hidden\";\n        this.classNameAnim = \"is-animating\";\n    }\n    UIController.prototype.switchDOM = function (dom) {\n        dom.classList.toggle(this.classNameActive);\n    };\n    UIController.prototype.animDOM = function (dom) {\n        dom.classList.toggle(this.classNameAnim);\n    };\n    return UIController;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (UIController);\n\n\n//# sourceURL=webpack://webxr-template-ts/./src/ts/modules/ui.ts?");

/***/ }),

/***/ "./src/ts/modules/video.ts":
/*!*********************************!*\
  !*** ./src/ts/modules/video.ts ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar VideoController = /** @class */ (function () {\n    function VideoController() {\n        this.classNameActive = \"is-hidden\";\n    }\n    VideoController.prototype.play = function (video) {\n        video.play();\n    };\n    VideoController.prototype.reset = function (video) {\n        video.currentTime = 0;\n    };\n    VideoController.prototype.releaseForIos = function (video) {\n        video.muted = true;\n        video.play();\n        video.pause();\n        video.muted = false;\n        video.currentTime = 0;\n    };\n    return VideoController;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoController);\n\n\n//# sourceURL=webpack://webxr-template-ts/./src/ts/modules/video.ts?");

/***/ }),

/***/ "./src/ts/script.ts":
/*!**************************!*\
  !*** ./src/ts/script.ts ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui */ \"./src/ts/modules/ui.ts\");\n/* harmony import */ var _modules_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/device */ \"./src/ts/modules/device.ts\");\n/* harmony import */ var _modules_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/textarea */ \"./src/ts/modules/textarea.ts\");\n/* harmony import */ var _modules_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/video */ \"./src/ts/modules/video.ts\");\n\nvar uiController = new _modules_ui__WEBPACK_IMPORTED_MODULE_0__.default();\n\nvar checkDevice = new _modules_device__WEBPACK_IMPORTED_MODULE_1__.default();\n\n\nvar videoController = new _modules_video__WEBPACK_IMPORTED_MODULE_3__.default();\nvar isMobile = false;\nvar textareaController = null;\nvar mainTextarea;\nvar youcanfly;\nvar youcanflyVideo;\nvar youcanflyVideoItem;\nvar initAttachTrigger = function () {\n    mainTextarea = document.getElementById(\"main-textarea\");\n    youcanfly = document.getElementById(\"youcanfly\");\n    youcanflyVideo = document.getElementById(\"youcanfly-video\");\n    youcanflyVideoItem = document.getElementById(\"youcanfly-video-item\");\n    youcanflyVideoItem.addEventListener(\"ended\", function () {\n        uiController.switchDOM(youcanfly);\n        uiController.animDOM(youcanfly);\n        uiController.switchDOM(youcanflyVideo);\n        mainTextarea.focus();\n        // isYoucanflyTime = false;\n        videoController.reset(youcanflyVideoItem);\n        textareaController.disableYoucanflyTime();\n    });\n};\nvar mobileStyle = function () {\n    mainTextarea.setAttribute(\"cols\", \"30\");\n};\nvar videoResetForIos = function () {\n    console.log(\"videoreset\");\n    console.log(youcanflyVideoItem);\n    videoController.releaseForIos(youcanflyVideoItem);\n    document.removeEventListener(\"click\", videoResetForIos, false);\n};\nwindow.addEventListener(\"load\", function () {\n    textareaController = new _modules_textarea__WEBPACK_IMPORTED_MODULE_2__.default();\n    initAttachTrigger();\n    isMobile = checkDevice.isMobile();\n    if (checkDevice.isIos()) {\n        console.log(\"ios\");\n        document.addEventListener(\"click\", videoResetForIos, false);\n    }\n    if (isMobile) {\n        mobileStyle();\n    }\n});\n\n\n//# sourceURL=webpack://webxr-template-ts/./src/ts/script.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/ts/script.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;