module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/scoped.js":
/*!*************************!*\
  !*** ./pages/scoped.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/a13191/Documents/ieaiBOX/study/nextjs/HelloNextjs/Base/pages/scoped.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  static async getInitialProps({
    req
  }) {
    // 何でも非同期に取得できる(プレーンなObjectに限る)
    // サーバーサイドレンダリング時には getInitialProps の戻り値のデータはシリアライズされます。
    // 最初にページが読み込まれるとき、getInitialProps はサーバーサイドでのみ実行されます。
    // getInitialProps がクライアントサイドで実行されるのは、Link コンポーネントかルーティング API を用いて別のルートに移動した場合のみです。
    // 注意: getInitialProps を子コンポーネントで利用することはできません。利用できるのは pages に限られます。
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return {
      userAgent
    };
  }

  render() {
    return __jsx("div", {
      className: "jsx-2760341132",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2945332485",
      __self: this
    }, "p.jsx-2760341132{color:darkgray;}div.jsx-2760341132{background:red;}@media (max-width:600px){div.jsx-2760341132{background:pink;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hMTMxOTEvRG9jdW1lbnRzL2llYWlCT1gvc3R1ZHkvbmV4dGpzL0hlbGxvTmV4dGpzL0Jhc2UvcGFnZXMvc2NvcGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCNEIsQUFHb0MsQUFHQSxBQUlLLGVBTnBCLEFBR0EsQ0FJQSIsImZpbGUiOiIvVXNlcnMvYTEzMTkxL0RvY3VtZW50cy9pZWFpQk9YL3N0dWR5L25leHRqcy9IZWxsb05leHRqcy9CYXNlL3BhZ2VzL3Njb3BlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluaydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xuICAgICAgICAvLyDkvZXjgafjgoLpnZ7lkIzmnJ/jgavlj5blvpfjgafjgY3jgoso44OX44Os44O844Oz44GqT2JqZWN044Gr6ZmQ44KLKVxuICAgICAgICAvLyDjgrXjg7zjg5Djg7zjgrXjgqTjg4njg6zjg7Pjg4Djg6rjg7PjgrDmmYLjgavjga8gZ2V0SW5pdGlhbFByb3BzIOOBruaIu+OCiuWApOOBruODh+ODvOOCv+OBr+OCt+ODquOCouODqeOCpOOCuuOBleOCjOOBvuOBmeOAglxuICAgICAgICAvLyDmnIDliJ3jgavjg5rjg7zjgrjjgYzoqq3jgb/ovrzjgb7jgozjgovjgajjgY3jgIFnZXRJbml0aWFsUHJvcHMg44Gv44K144O844OQ44O844K144Kk44OJ44Gn44Gu44G/5a6f6KGM44GV44KM44G+44GZ44CCXG4gICAgICAgIC8vIGdldEluaXRpYWxQcm9wcyDjgYzjgq/jg6njgqTjgqLjg7Pjg4jjgrXjgqTjg4njgaflrp/ooYzjgZXjgozjgovjga7jga/jgIFMaW5rIOOCs+ODs+ODneODvOODjeODs+ODiOOBi+ODq+ODvOODhuOCo+ODs+OCsCBBUEkg44KS55So44GE44Gm5Yil44Gu44Or44O844OI44Gr56e75YuV44GX44Gf5aC05ZCI44Gu44G/44Gn44GZ44CCXG4gICAgICAgIC8vIOazqOaEjzogZ2V0SW5pdGlhbFByb3BzIOOCkuWtkOOCs+ODs+ODneODvOODjeODs+ODiOOBp+WIqeeUqOOBmeOCi+OBk+OBqOOBr+OBp+OBjeOBvuOBm+OCk+OAguWIqeeUqOOBp+OBjeOCi+OBruOBryBwYWdlcyDjgavpmZDjgonjgozjgb7jgZnjgIJcbiAgICAgICAgY29uc3QgdXNlckFnZW50ID0gcmVxID8gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICAgICAgcmV0dXJuIHsgdXNlckFnZW50IH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBwaW5rO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxoMT5UaGlzIGlzIHRoZSBTY29wZWQgcGFnZTwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPue1hOOBv+i+vOOBv+OBrkNTU+OCteODneODvOODiChzY29wZWQpPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+TmV4dC5qcyDjgavjga8gc3R5bGVkLWpzeCDjga7mqZ/og73jgYzlkIzmorHjgZXjgozjgabjgYrjgorjgIHjgrnjgrPjg7zjg5fjgpLliIbpm6LjgZfjgZ8gQ1NTIOOBrumBqeeUqOOBjOWPr+iDveOBq+OBquOBo+OBpuOBhOOBvuOBmeOAguOBk+OCjOOBryBXZWIgQ29tcG9uZW50cyDjga7jgIxTaGFkb3cgQ1NT44CN44Gr5Ly844Gf5qmf6IO944KS5o+Q5L6b44GZ44KL44GT44Go44KS55uu55qE44Go44GX44Gm44GE44G+44GZICjmrovlv7XjgarjgYzjgokgU2hhZG93IENTUyDjga/jgrXjg7zjg5Djg7zjgrXjgqTjg4njg6zjg7Pjg4Djg6rjg7PjgrDjgafliKnnlKjjgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZvjgpMpPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPiB1c2VyQWdlbnQgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5MaW5rczwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy4vaW5kZXgnPkluZGV44pa2PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il19 */\n/*@ sourceURL=/Users/a13191/Documents/ieaiBOX/study/nextjs/HelloNextjs/Base/pages/scoped.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "658274208",
      __self: this
    }, "body{background:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hMTMxOTEvRG9jdW1lbnRzL2llYWlCT1gvc3R1ZHkvbmV4dGpzL0hlbGxvTmV4dGpzL0Jhc2UvcGFnZXMvc2NvcGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCbUMsQUFHc0MsaUJBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9hMTMxOTEvRG9jdW1lbnRzL2llYWlCT1gvc3R1ZHkvbmV4dGpzL0hlbGxvTmV4dGpzL0Jhc2UvcGFnZXMvc2NvcGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSB9KSB7XG4gICAgICAgIC8vIOS9leOBp+OCgumdnuWQjOacn+OBq+WPluW+l+OBp+OBjeOCiyjjg5fjg6zjg7zjg7PjgapPYmplY3TjgavpmZDjgospXG4gICAgICAgIC8vIOOCteODvOODkOODvOOCteOCpOODieODrOODs+ODgOODquODs+OCsOaZguOBq+OBryBnZXRJbml0aWFsUHJvcHMg44Gu5oi744KK5YCk44Gu44OH44O844K/44Gv44K344Oq44Ki44Op44Kk44K644GV44KM44G+44GZ44CCXG4gICAgICAgIC8vIOacgOWIneOBq+ODmuODvOOCuOOBjOiqreOBv+i+vOOBvuOCjOOCi+OBqOOBjeOAgWdldEluaXRpYWxQcm9wcyDjga/jgrXjg7zjg5Djg7zjgrXjgqTjg4njgafjga7jgb/lrp/ooYzjgZXjgozjgb7jgZnjgIJcbiAgICAgICAgLy8gZ2V0SW5pdGlhbFByb3BzIOOBjOOCr+ODqeOCpOOCouODs+ODiOOCteOCpOODieOBp+Wun+ihjOOBleOCjOOCi+OBruOBr+OAgUxpbmsg44Kz44Oz44Od44O844ON44Oz44OI44GL44Or44O844OG44Kj44Oz44KwIEFQSSDjgpLnlKjjgYTjgabliKXjga7jg6vjg7zjg4jjgavnp7vli5XjgZfjgZ/loLTlkIjjga7jgb/jgafjgZnjgIJcbiAgICAgICAgLy8g5rOo5oSPOiBnZXRJbml0aWFsUHJvcHMg44KS5a2Q44Kz44Oz44Od44O844ON44Oz44OI44Gn5Yip55So44GZ44KL44GT44Go44Gv44Gn44GN44G+44Gb44KT44CC5Yip55So44Gn44GN44KL44Gu44GvIHBhZ2VzIOOBq+mZkOOCieOCjOOBvuOBmeOAglxuICAgICAgICBjb25zdCB1c2VyQWdlbnQgPSByZXEgPyByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIDogbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgICAgICByZXR1cm4geyB1c2VyQWdlbnQgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtncmF5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHBpbms7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGgxPlRoaXMgaXMgdGhlIFNjb3BlZCBwYWdlPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+57WE44G/6L6844G/44GuQ1NT44K144Od44O844OIKHNjb3BlZCk8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cD5OZXh0LmpzIOOBq+OBryBzdHlsZWQtanN4IOOBruapn+iDveOBjOWQjOaiseOBleOCjOOBpuOBiuOCiuOAgeOCueOCs+ODvOODl+OCkuWIhumbouOBl+OBnyBDU1Mg44Gu6YGp55So44GM5Y+v6IO944Gr44Gq44Gj44Gm44GE44G+44GZ44CC44GT44KM44GvIFdlYiBDb21wb25lbnRzIOOBruOAjFNoYWRvdyBDU1PjgI3jgavkvLzjgZ/mqZ/og73jgpLmj5DkvpvjgZnjgovjgZPjgajjgpLnm67nmoTjgajjgZfjgabjgYTjgb7jgZkgKOaui+W/teOBquOBjOOCiSBTaGFkb3cgQ1NTIOOBr+OCteODvOODkOODvOOCteOCpOODieODrOODs+ODgOODquODs+OCsOOBp+WIqeeUqOOBmeOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBm+OCkyk8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+IHVzZXJBZ2VudCA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkxpbmtzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLi9pbmRleCc+SW5kZXjilrY8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iXX0= */\n/*@ sourceURL=/Users/a13191/Documents/ieaiBOX/study/nextjs/HelloNextjs/Base/pages/scoped.js */"), __jsx("h1", {
      className: "jsx-2760341132",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "This is the Scoped page"), __jsx("div", {
      className: "jsx-2760341132",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-2760341132",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "\u7D44\u307F\u8FBC\u307F\u306ECSS\u30B5\u30DD\u30FC\u30C8(scoped)"), __jsx("p", {
      className: "jsx-2760341132",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Next.js \u306B\u306F styled-jsx \u306E\u6A5F\u80FD\u304C\u540C\u68B1\u3055\u308C\u3066\u304A\u308A\u3001\u30B9\u30B3\u30FC\u30D7\u3092\u5206\u96E2\u3057\u305F CSS \u306E\u9069\u7528\u304C\u53EF\u80FD\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u306F Web Components \u306E\u300CShadow CSS\u300D\u306B\u4F3C\u305F\u6A5F\u80FD\u3092\u63D0\u4F9B\u3059\u308B\u3053\u3068\u3092\u76EE\u7684\u3068\u3057\u3066\u3044\u307E\u3059 (\u6B8B\u5FF5\u306A\u304C\u3089 Shadow CSS \u306F\u30B5\u30FC\u30D0\u30FC\u30B5\u30A4\u30C9\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3067\u5229\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093)")), __jsx("div", {
      className: "jsx-2760341132",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-2760341132",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, " userAgent ")), __jsx("div", {
      className: "jsx-2760341132",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-2760341132",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Links"), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "./index",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Index\u25B6")));
  }

});

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/scoped.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/a13191/Documents/ieaiBOX/study/nextjs/HelloNextjs/Base/pages/scoped.js */"./pages/scoped.js");


/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=scoped.js.map