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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/globals.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/globals.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  border: none;\n  outline: none;\n  box-sizing: border-box; }\n\nbody {\n  background-color: white;\n  text-align: center;\n  position: relative;\n  overflow-x: hidden; }\n\n.element {\n  background-color: skyblue;\n  color: white;\n  font-size: 20px;\n  padding: 20px; }\n\np, h3 {\n  color: #fff; }\n\nh2 {\n  font-size: 26px; }\n\nheader {\n  margin-top: 0; }\n\n.carousalWrapper {\n  display: flex;\n  flex-direction: row;\n  width: 100vw;\n  height: 30vw; }\n\n.carousalWrapper h3 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100vw;\n  flex-grow: 1;\n  color: #000;\n  border: 1px solid red; }\n\n.slogan {\n  /* font-size: .8em; */\n  font-size: 13px;\n  line-height: 36px;\n  font: 'opensanshebrew-regular', sans-serif, arial; }\n\n.topHeader {\n  position: fixed;\n  width: 100vw;\n  height: 36px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #094fa3;\n  color: #fff;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n.container {\n  position: fixed;\n  width: 100vw;\n  height: 60px;\n  top: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  direction: rtl;\n  box-shadow: 0 0.01rem 0.8rem dimgrey; }\n\n.logo {\n  display: flex;\n  height: 60px;\n  flex-grow: 1;\n  background-color: white;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n\n.logoImg {\n  height: 104px;\n  width: 118px;\n  background-image: url(https://www.hazi-hinam.co.il/dist/img/brandNew.png);\n  background-repeat: no-repeat;\n  z-index: 1031; }\n\nul {\n  width: 60vw;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  direction: rtl;\n  background-color: white; }\n\nli {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 120px;\n  height: 100%;\n  text-decoration: none;\n  list-style-type: none;\n  background-color: white;\n  font-size: 1.1em;\n  cursor: pointer;\n  /* padding: 0 6px 0; */\n  color: black; }\n\n.container span {\n  margin: 0;\n  padding: 0;\n  height: 10px;\n  width: 15px; }\n\n/* li span {\n    background-color: black;\n} */\n.divider {\n  width: 1px;\n  height: 40px;\n  background-color: #666; }\n\na {\n  text-decoration: none;\n  list-style-type: none;\n  color: black; }\n\n.media {\n  display: flex;\n  flex-grow: 1;\n  background-color: white;\n  width: 20%;\n  height: 100%;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n\n.wheelchair {\n  margin: 0 5px;\n  height: 32px;\n  width: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background-color: #555;\n  color: #fff;\n  transition: .3s ease-in-out;\n  cursor: pointer; }\n\n.wheelchair:hover {\n  background-color: #999;\n  color: #444; }\n\n.instagram {\n  margin: 0 5px;\n  height: 32px;\n  width: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background-color: #555;\n  color: #fff;\n  transition: .3s ease-in-out;\n  cursor: pointer; }\n\n.instagram:hover {\n  background-color: #999;\n  color: #444; }\n\n.youtube {\n  margin: 0 5px;\n  height: 32px;\n  width: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background-color: red;\n  color: #fff;\n  transition: .3s ease-in-out;\n  cursor: pointer; }\n\n.youtube:hover {\n  background-color: #999;\n  color: #444; }\n\n.facebook {\n  margin: 0 5px;\n  height: 32px;\n  width: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background-color: #094fa3;\n  color: #fff;\n  transition: .3s ease-in-out;\n  cursor: pointer; }\n\n.facebook:hover {\n  background-color: #999;\n  color: #444; }\n\n.hamburger {\n  display: none; }\n\n.wrapper {\n  background-image: url(https://www.hazi-hinam.co.il/media/2197/%D7%97%D7%A6%D7%99%D7%97%D7%99%D7%A0%D7%9D_%D7%94%D7%9E%D7%A8%D7%9B%D7%91%D7%94_%D7%97%D7%95%D7%A5-1.jpg?width=1905);\n  background-position-y: center;\n  background-position-x: right;\n  background-repeat: no-repeat;\n  background-size: 100%;\n  margin-top: 95px;\n  /* border: 1px solid red; */\n  height: 586px;\n  width: 100vw; }\n\n.wrapperMask {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.3); }\n\n.ordersWrapper {\n  background-image: url(https://www.hazi-hinam.co.il/dist/img/img41.png);\n  height: 350px;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row; }\n\n.orders {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column; }\n\n.orders p {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /* border: 1px solid violet; */\n  flex-direction: column;\n  height: 35px;\n  width: 350px;\n  font-size: .8em;\n  color: black; }\n\n.mainIcons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* border: 1px solid violet; */ }\n\n.computerImg {\n  /* position: absolute; */\n  /* border: 1px solid blue; */\n  background-image: url(https://www.hazi-hinam.co.il/dist/img/img03.png);\n  background-repeat: no-repeat;\n  background-size: 100%;\n  height: 245px;\n  right: 0;\n  width: 231px; }\n\n.carImg {\n  /* position: absolute; */\n  background-image: url(https://www.hazi-hinam.co.il/dist/img/img04.png);\n  background-repeat: no-repeat;\n  background-size: 100%;\n  height: 245px;\n  width: 231px;\n  /* border: 1px solid blue; */ }\n\n.icons {\n  height: 220px;\n  width: 600px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  direction: rtl;\n  /* border: 1px solid blueviolet; */ }\n\n.iconWrapper {\n  height: 140px;\n  width: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  /* border: 1px solid green; */ }\n\n.iconWrapper p {\n  font-size: 10px;\n  /* border: 1px solid black; */\n  width: 80px;\n  height: 20%; }\n\n.icon {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  border: 1px solid black; }\n\n.orderButton {\n  height: 50px;\n  width: 170px;\n  border-radius: 5%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #094fa3;\n  border: 1px solid black;\n  color: #fff;\n  font-size: 12px; }\n\n.ourDiscounts {\n  width: 100vw;\n  height: 500px;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center; }\n\n.ourDiscounts p {\n  /* border: 1px solid blue; */\n  color: black; }\n\n.boxes {\n  width: 70vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center; }\n\n.box {\n  height: 300px;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #333;\n  cursor: pointer; }\n\n.linkImg {\n  height: 70px;\n  width: 100%;\n  border: 1px solid black;\n  direction: rtl;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: row;\n  background-color: #094fa3; }\n\n.linkImg p {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 20px;\n  color: #fff;\n  font-size: 13px; }\n\n.linkIcn {\n  background-color: lightblue;\n  height: 30px;\n  width: 30px; }\n\n.button img {\n  margin: 1vw; }\n\n.image {\n  background-color: lightblue;\n  height: 228px;\n  width: 100%; }\n\n.linkTxt {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 50%; }\n\n.linkTxt p {\n  display: flex;\n  justify-content: flex-start; }\n\n.linkBtn {\n  height: 50px;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid black;\n  background-color: #fff;\n  border-radius: 50%; }\n\n.autofocus {\n  background-image: url(https://www.hazi-hinam.co.il/dist/img/img38.png?width=1358);\n  background-repeat: no-repeat;\n  background-size: 100%;\n  width: 100vw;\n  height: 277px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center; }\n\n.buttons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row; }\n\n.autofocus .button {\n  padding: 0px;\n  margin: 0px; }\n\n.loremIpsum {\n  height: 500px;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff; }\n\n.loremIpsum p {\n  color: black; }\n\n.sprite {\n  margin-top: 20px;\n  height: 362px;\n  width: 26.3vw;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center; }\n\n.spriteBox {\n  margin: 20px;\n  height: 145px;\n  width: 145px;\n  background-color: lightblue;\n  border: 1px solid blue; }\n\nfooter {\n  background-image: url(https://www.hazi-hinam.co.il/dist/img/pic02.jpg);\n  background-repeat: no-repeat;\n  background-size: 100%;\n  width: 100vw;\n  height: 150px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n\nfooter p {\n  color: #fff; }\n\n.footerLeft, .footerRight {\n  /* border: 1px solid red; */\n  width: 50%;\n  height: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column; }\n\n.lowerFooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 5px;\n  direction: rtl; }\n\n.lowerFooter ul {\n  width: 60vw;\n  margin-right: 10vw; }\n\n.lowerFooter li {\n  height: 40px;\n  width: 100px;\n  font-size: 14px;\n  margin: 0 10px;\n  transition: 1.8s;\n  padding-bottom: 2px; }\n\n.lowerFooter li:hover {\n  border-bottom: #094fa3 1px solid; }\n\n.lowerFooter .media {\n  width: 20vw;\n  justify-content: space-evenly; }\n\n.modal {\n  position: relative;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 35vw;\n  width: 60vw;\n  background-color: #fff;\n  position: fixed;\n  right: 0vw;\n  top: 8vw;\n  border: 1px solid #777; }\n\n.modalBtn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  margin-top: -15vw;\n  right: 2vw;\n  background-color: #094fa3;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 1.3em; }\n\n.modal h1 {\n  font-size: 1.4em;\n  margin-bottom: 2vw; }\n\n.snifim {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  height: 25vw;\n  width: 36vw;\n  direction: rtl; }\n\n.snif {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10vw;\n  width: 10vw;\n  border-radius: 50%;\n  background-color: #094fa3;\n  color: #fff;\n  font-size: .75em;\n  margin: 1vw; }\n\n@media all and (max-width: 768px) {\n  body {\n    overflow-x: hidden; }\n  .container {\n    align-items: flex-start;\n    height: 42px; }\n  .logo {\n    height: 100%;\n    min-width: 35px;\n    justify-content: flex-start; }\n  .logoImg {\n    width: 59px;\n    height: 52px;\n    background-size: 100%;\n    margin-top: -3vw;\n    margin-right: 3vw; }\n  .icons {\n    width: 100%; }\n  .icon {\n    height: 50px;\n    width: 50px;\n    border: none; }\n  .carImg, .computerImg {\n    display: none; }\n  .wrapper {\n    margin-top: 78px;\n    height: 255px;\n    overflow-x: hidden; }\n  .iconWrapper p {\n    font-size: 13px;\n    height: 65%; }\n  .orderButton {\n    border-radius: 25px; }\n  .ordersWrapper {\n    justify-content: center;\n    height: 240px; }\n  .orders {\n    height: 200px; }\n  .mainIcons {\n    height: 160px; }\n  .iconWrapper {\n    height: 45%; }\n  .media {\n    display: none; }\n  .carousalWrapper h3 {\n    width: 25vw; }\n  .ourDiscounts {\n    height: 100%; }\n  .ourDiscounts p {\n    margin-top: 5vw; }\n  .boxes {\n    flex-direction: column;\n    margin: 5vw; }\n  .box {\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 5vw;\n    height: 90vw;\n    width: 90vw; }\n  h2 {\n    font-size: .8rem;\n    width: 225px;\n    height: 16px; }\n  .sprite {\n    height: 100%;\n    width: 100%; }\n  .spriteBox {\n    height: 85vw;\n    width: 90%; }\n  .linkTxt {\n    height: 6px;\n    margin-top: -4vw; }\n  .linkImg {\n    width: 100%; }\n  .image {\n    width: 100%;\n    height: 100%; }\n  .loremIpsum {\n    height: 100%; }\n  .loremIpsum p {\n    margin-top: 5vw; }\n  .autofocus {\n    height: 210px;\n    background-size: 312%; }\n  .button img {\n    margin: 1vw; }\n  footer {\n    background-size: 300%;\n    justify-content: space-around;\n    flex-direction: column; }\n  .footerLeft, .footerRight {\n    width: 90vw;\n    align-items: flex-end; }\n  footer p {\n    font-size: .8em; }\n  footer h3 {\n    font-size: .8em; }\n  .lowerFooter {\n    display: flex;\n    flex-wrap: wrap;\n    height: 30vw; }\n  .listItem {\n    display: none; }\n  .divider {\n    display: none; }\n  ul {\n    display: none; }\n  .lowerFooter ul {\n    display: flex;\n    width: 85vw;\n    margin-right: 0vw; }\n  .lowerFooter li {\n    font-size: 15px;\n    margin: 0px 5px;\n    display: inline;\n    /* border: 1px solid red; */ }\n  .hamburger {\n    display: flex;\n    height: 80%;\n    width: 5vw;\n    background-color: red; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "./src/css/globals.css":
/*!*****************************!*\
  !*** ./src/css/globals.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./globals.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/globals.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/globals.css */ "./src/css/globals.css");
/* harmony import */ var _css_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_globals_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/js/index.js");


var one = window.addEventListener('click', function openOne() {
  var modal = document.querySelector('.modal');

  if (modal.style.display === 'flex') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'flex';
  }
}, false);
window.removeEventListener('click', one); // require('slick-carousel');
// import * as helperModule from './my-helper-module';
// import * as _ from 'lodash';
// import './sharedModule';
// import '../css/globals.css';
// import './../css/sass/main.scss';
// console.log("Welcome! Greetings from app.js. Let's learn Webpack2");
// console.log(helperModule.greetings);
// var arr=[ 1, 2, 3];
// _.each(arr,function(val) {
//  console.log('Output from Lodash _.each for Element ' + val); 
// });
// import greetings from './robot.js'
// document.write(greetings("Affirmative", "Dave"));
// let element = `
//     <div class="element">
//         <p>Lorem ipsoum sit amet, consectetur adipisicing elit.</p>
//     </div>
// `
// document.write(element);
// $('.single-item').slick();

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map